import type { Feature } from '../core/feature'
import type { Bookmarks } from '../types/bookmarks'
import type { UserAnketa } from '../types/mysite'
import { el } from '@zero-dependency/dom'
import { http } from '../core/http'
import { log } from '../core/log'
import { modalConfirm } from '../core/modals'
import { assetOrigin, baseUrl, pathAt, session } from '../core/site'

async function markFavorite(id: string, name: string, cell: HTMLElement) {
  const link = cell.firstElementChild
  if (!(link instanceof HTMLAnchorElement)) return

  const response = await http<Bookmarks>(`${baseUrl}/bookmarks/add/?object_id=${id}&object_type=11`, { proxy: true })
  const deletion = response.parsedBody?.delete_link
  if (!deletion) return

  link.href = deletion.delete_URL
  link.title = 'Удалить из закладок'
  link.innerHTML = '<span class="sp sp-fav-on"></span><span style="color: #61a961"> В закладках</span>'
  link.onclick = () => {
    modalConfirm(`Вы действительно хотите удалить пользователя <b>${name}</b> из закладок?`, false, async () => {
      const removed = await http(deletion.delete_URL)
      if (removed.status === 200) location.reload()
      else log.error('bookmarks/remove', removed)
    })
    return false
  }
  log.info('В закладках?', response)
}

export const favoriteUser: Feature = {
  id: 'favorite',
  title: 'Добавить в закладки',
  description: `<img src="${assetOrigin}/screens/favorite-user.png"></br>Функция добавляет на страницу каждого пользователя кнопку «В закладки». Повторное нажатие удаляет пользователя из закладок.`,
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
      className: 'stnd-link',
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

      const link = el('a', {
        href: `${baseUrl}/bookmarks/add/?object_id=${user.id}&object_type=11`,
        className: 'stnd-link',
        title: 'Добавить в закладки',
        innerHTML: '<span class="sp sp-fav"></span> В закладки',
      })
      link.onclick = () => {
        modalConfirm(`Добавить пользователя <b>${user.name}</b> в закладки?`, false, async () => {
          const added = await http(`${baseUrl}/ajax/bookmarks/add/`, {
            method: 'POST',
            body: `object_id=${user.id}&object_type=11&show_all_tags_state=0&new_tags=Люди&cfms=Добавить&CK=${session.ck}`,
          })
          if (added.status === 200) await markFavorite(user.id, user.name, cell)
          else log.error('bookmarks/add', added)
        })
        return false
      }

      loader.remove()
      cell.classList.remove('list-link_disabled')
      cell.append(link)
      await markFavorite(user.id, user.name, cell)
    }).catch((error) => {
      log.error('favorite', error)
    })
  }),
}
