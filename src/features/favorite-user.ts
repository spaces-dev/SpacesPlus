import type { Feature } from '@/core/feature'
import type { Bookmarks } from '@/types/bookmarks'
import type { HttpResponse } from '@/types/http-response'
import type { UserAnketa } from '@/types/mysite'
import { el } from '@zero-dependency/dom'
import { http } from '@/core/http'
import { log } from '@/core/log'
import { modalConfirm } from '@/core/modals'
import { baseUrl, pathAt, session } from '@/core/site'

interface BookmarkAction {
  redirect?: string
}

const addMarkup = '<span class="ico ico_fav"></span> В закладки'
const savedMarkup = '<span class="ico ico_fav_on_green"></span> В закладках'

const bookmarkPage = (id: string) => `${baseUrl}/bookmarks/add/?object_id=${id}&object_type=11`

function ajaxAction(url: string) {
  const parsed = new URL(url, location.href)
  if (!parsed.pathname.startsWith('/ajax/')) parsed.pathname = `/ajax${parsed.pathname}`
  return parsed.href
}

async function deletionUrl(id: string) {
  const response = await http<Bookmarks>(bookmarkPage(id), { proxy: true })
  return response.parsedBody?.delete_link?.delete_URL
}

function accepted(response: HttpResponse<BookmarkAction>) {
  return Boolean(response.parsedBody?.redirect) || response.status === 200
}

function paint(link: HTMLAnchorElement, saved: boolean) {
  link.classList.add('no_ajax')
  link.href = '#'
  link.title = saved ? 'Удалить из закладок' : 'Добавить пользователя в закладки'
  link.innerHTML = saved ? savedMarkup : addMarkup
}

export const favoriteUser: Feature = {
  id: 'favorite',
  title: 'Добавить пользователя в закладки',
  description: 'На странице пользователя появляется кнопка «В закладки». Повторное нажатие убирает этого пользователя из закладок.',
  start: ctx => ctx.onDom(() => {
    const method = pathAt(1)
    const index = pathAt(2)
    const nickname = pathAt(3)
    const cells = document.querySelectorAll('td.table__cell_last')
    const bar = document.querySelector('#location_bar_1_0')?.textContent?.trim() ?? ''
    const profile = method === 'mysite' || (method === 'anketa' && index !== 'edit') || method === 'activity'
    if (!profile || session.username === bar || !nickname || !cells.length || document.querySelector('#SP_PLUS_INFAVORITE')) return

    const anchor = cells[1]
    const row = anchor?.parentElement
    if (!row) return

    const cell = el('td', {
      className: 'table__cell list-link_disabled',
      id: 'SP_PLUS_INFAVORITE',
    })
    const loader = el('a', {
      href: '#',
      id: 'SP_FV_LOADER',
      className: 'stnd-link no_ajax',
      innerHTML: '<span class="ico bp ico_spinner"></span><span class="t js-text">Загрузка</span>',
    })
    cell.append(loader)
    row.insertBefore(cell, anchor)
    for (const child of row.children) {
      if (child instanceof HTMLTableCellElement) child.width = '25%'
    }

    http<UserAnketa>(`${baseUrl}/anketa/index/${nickname}`, { proxy: true }).then(async (response) => {
      const user = response.parsedBody?.user_widget
      log.info('anketa/index', response)
      if (!user) {
        cell.style.display = 'none'
        return
      }

      let deleteUrl = await deletionUrl(user.id)
      let pending = false
      const link = el('a', {
        href: '#',
        className: 'stnd-link no_ajax',
        title: 'Добавить пользователя в закладки',
        innerHTML: addMarkup,
      })

      const sync = async () => {
        deleteUrl = await deletionUrl(user.id)
        paint(link, Boolean(deleteUrl))
      }

      link.addEventListener('click', (event) => {
        event.preventDefault()
        event.stopPropagation()
        if (pending) return

        const saved = Boolean(deleteUrl)
        const question = saved
          ? `Вы действительно хотите удалить пользователя <b>${user.name}</b> из закладок?`
          : `Добавить пользователя <b>${user.name}</b> в закладки?`

        modalConfirm(question, false, async () => {
          if (pending) return
          pending = true
          try {
            const result = saved && deleteUrl
              ? await http<BookmarkAction>(ajaxAction(deleteUrl))
              : await http<BookmarkAction>(`${baseUrl}/ajax/bookmarks/add/`, {
                  method: 'POST',
                  body: `object_id=${user.id}&object_type=11&show_all_tags_state=0&new_tags=Люди&cfms=Добавить&CK=${session.ck}`,
                })

            if (!accepted(result)) {
              log.error(saved ? 'bookmarks/remove' : 'bookmarks/add', result)
              return
            }

            await sync()
            if (Boolean(deleteUrl) === saved) log.error(saved ? 'bookmarks/remove' : 'bookmarks/add', result)
            else log.info(saved ? 'Убрали из закладок' : 'Добавили в закладки', result)
          } catch (error) {
            log.error('favorite', error)
          } finally {
            pending = false
          }
        })
      })

      paint(link, Boolean(deleteUrl))
      loader.remove()
      cell.classList.remove('list-link_disabled')
      cell.append(link)
    }).catch((error) => {
      log.error('favorite', error)
    })
  }),
}
