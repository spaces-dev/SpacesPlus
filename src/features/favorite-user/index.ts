import type { Bookmarks, UserAnketa } from './types'
import type { Feature } from '@/core/feature'
import type { HttpResponse } from '@/core/http'
import { el } from '@zero-dependency/dom'
import { defineToggle } from '@/core/feature'
import { http, httpStatus } from '@/core/http'
import { log } from '@/core/log'
import { modalConfirm } from '@/core/modals'
import { baseUrl, pathAt, pathIndex, session } from '@/core/site'
import { withStyle } from '@/core/with-style'
import favoriteCss from '@/styles/features/favorite.scss?inline'
import { toggleId } from '@/types/toggles'

interface BookmarkAction {
  redirect?: string
}

const favoriteStyleId = 'SP_STYLE_FAVORITE'
const favoriteCellId = 'SP_PLUS_INFAVORITE'
const loaderId = 'SP_FV_LOADER'
const addMarkup = '<span class="ico ico_fav"></span> В закладки'
const savedMarkup = '<span class="ico ico_fav_on_green"></span> В закладках'
const userBookmarkType = '11'
const peopleTag = 'Люди'
const profileActionWidth = '25%'
const anketaEdit = 'edit'
const profileSections = new Set(['mysite', 'activity'])
const anketaSection = 'anketa'
const ajaxPrefix = '/ajax'

const bookmarkPage = (id: string) => `${baseUrl}/bookmarks/add/?object_id=${id}&object_type=${userBookmarkType}`

function ajaxAction(url: string) {
  const parsed = new URL(url, location.href)
  if (!parsed.pathname.startsWith(`${ajaxPrefix}/`)) parsed.pathname = `${ajaxPrefix}${parsed.pathname}`
  return parsed.href
}

async function deletionUrl(id: string) {
  const response = await http<Bookmarks>(bookmarkPage(id), { proxy: true })
  return response.parsedBody?.delete_link?.delete_URL
}

function accepted(response: HttpResponse<BookmarkAction>) {
  return Boolean(response.parsedBody?.redirect) || response.status === httpStatus.ok
}

function paint(link: HTMLAnchorElement, saved: boolean) {
  link.classList.add('no_ajax')
  link.href = '#'
  link.title = saved ? 'Удалить из закладок' : 'Добавить пользователя в закладки'
  link.innerHTML = saved ? savedMarkup : addMarkup
}

function isProfile(section: string | undefined, page: string | undefined) {
  if (!section) return false
  if (profileSections.has(section)) return true
  return section === anketaSection && page !== anketaEdit
}

export const favoriteUser: Feature = defineToggle({
  id: toggleId.favorite,
  title: 'Добавить пользователя в закладки',
  description: 'На странице пользователя появляется кнопка «В закладки». Повторное нажатие убирает этого пользователя из закладок.',
  start: withStyle(favoriteStyleId, favoriteCss, (ctx) => {
    const stop = ctx.onDom(() => {
      const section = pathAt(pathIndex.section)
      const page = pathAt(pathIndex.page)
      const nickname = pathAt(pathIndex.slug)
      const cells = document.querySelectorAll('td.table__cell_last')
      const bar = document.querySelector('#location_bar_1_0')?.textContent?.trim() ?? ''
      if (!isProfile(section, page) || session.username === bar || !nickname || !cells.length || document.getElementById(favoriteCellId)) return

      const anchor = cells[1]
      const row = anchor?.parentElement
      if (!row) return

      const cell = el('td', {
        className: 'table__cell list-link_disabled',
        id: favoriteCellId,
      })
      const loader = el('a', {
        href: '#',
        id: loaderId,
        className: 'stnd-link no_ajax',
        innerHTML: '<span class="ico bp ico_spinner"></span><span class="t js-text">Загрузка</span>',
      })
      cell.append(loader)
      row.insertBefore(cell, anchor)
      for (const child of row.children) {
        if (child instanceof HTMLTableCellElement) child.width = profileActionWidth
      }

      http<UserAnketa>(`${baseUrl}/anketa/index/${nickname}`, { proxy: true }).then(async (response) => {
        const user = response.parsedBody?.user_widget
        log.info(`Получение профиля пользователя "${nickname}"`, response)
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
                : await http<BookmarkAction>(`${baseUrl}${ajaxPrefix}/bookmarks/add/`, {
                    method: 'POST',
                    body: `object_id=${user.id}&object_type=${userBookmarkType}&show_all_tags_state=0&new_tags=${peopleTag}&cfms=Добавить&CK=${session.ck}`,
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
    })
    return stop
  }),
})
