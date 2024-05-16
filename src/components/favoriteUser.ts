import { IBookmarks } from '../interfaces/Bookmarks'
import { IUserAnketa } from '../interfaces/Mysite'
import { BASE_URL, DATA } from '../strings'
import {
  ce,
  getPath,
  http,
  logger,
  modalConfirm,
  qs,
  qsa,
  trim
} from '../utils'

export const favoriteUser = async () => {
  try {
    let method = getPath(1),
      index = getPath(2),
      nickname = getPath(3),
      tdBlock = qsa('td.table__cell_last'),
      inFavorite = qs('#SP_PLUS_INFAVORITE')

    if (
      (method === 'mysite' ||
        (method === 'anketa' && index !== 'edit') ||
        method === 'activity') &&
      DATA.USERNAME !== trim(qs('#location_bar_1_0').textContent)
    ) {
      if (nickname && tdBlock.length > 0 && !inFavorite) {
        let favoriteButton = <HTMLLinkElement>ce('td', {
          className: 'table__cell list-link_disabled',
          id: 'SP_PLUS_INFAVORITE'
        })

        let loader = ce('a', {
          href: '#',
          id: 'SP_FV_LOADER',
          className: 'list-link',
          innerHTML: `
                        <span class="ico bp ico_spinner"></span>
                        <span class="t js-text">Загрузка</span>
                    `
        })

        favoriteButton.appendChild(loader)
        tdBlock[1].parentElement?.insertBefore(favoriteButton, tdBlock[1])

        let clds = <NodeList>tdBlock[1]?.parentElement?.childNodes
        for (let x in clds) {
          if (clds[x].nodeName === 'TD') {
            // 'width' is deprecated???
            ;(<HTMLTableCellElement>clds[x]).width = '25%'
          }
        }

        await http<IUserAnketa>(
          'GET',
          `${BASE_URL}/anketa/index/${nickname}`,
          true
        ).then((e) => {
          const json = e.parsedBody?.user_widget

          if (json !== undefined) {
            let favoriteLink = ce('a', {
              href: `${BASE_URL}/bookmarks/add/?object_id=${json.id}&object_type=11`,
              className: 'list-link',
              title: 'Добавить в закладки',
              innerHTML: '<span class="sp sp-fav"></span> B закладки',
              onclick: () => {
                modalConfirm(
                  `Добавить пользователя <b>${json.name}</b> в закладки?`,
                  false,
                  async () => {
                    await http(
                      'POST',
                      `${BASE_URL}/ajax/bookmarks/add/`,
                      false,
                      `object_id=${json.id}&object_type=11&show_all_tags_state=0&new_tags=Люди&cfms=Добавить&CK=${DATA.CK}`
                    ).then((e) => {
                      e.status === 200
                        ? isFav(json.id, json.name, favoriteButton)
                        : logger.error('bookmarks/add', e)
                    })
                  }
                )

                return false
              }
            })

            isFav(json.id, json.name, favoriteButton)

            loader.remove()
            favoriteButton.classList.remove('list-link_disabled')
            favoriteButton.appendChild(favoriteLink)
          } else {
            loader.parentElement!.style.display = 'none'
          }

          logger.info('anketa/index', e)
        })
      }
    }
  } catch (e) {
    logger.error('favoriteUser.ts', e)
  }
}

const isFav = async (id: string, name: string, elem: HTMLLinkElement) => {
  try {
    elem = elem.firstElementChild as HTMLLinkElement

    await http<IBookmarks>(
      'GET',
      `${BASE_URL}/bookmarks/add/?object_id=${id}&object_type=11`,
      true
    ).then((e) => {
      const json = e.parsedBody?.delete_link

      if (json) {
        elem.href = json.delete_URL
        elem.title = 'Удалить из закладок'
        elem.innerHTML =
          '<span class="sp sp-fav-on"></span><span style="color: #61a961"> В закладках</span>'
        elem.onclick = () => {
          modalConfirm(
            `Вы действительно хотите удалить пользователя <b>${name}</b> из закладок?`,
            false,
            async () => {
              await http('GET', json.delete_URL, false).then((e) => {
                e.status === 200
                  ? document.location.reload()
                  : logger.error('bookmarks/remove', e)
              })
            }
          )

          return false
        }
      }

      logger.info('В закладках?', e)
    })
  } catch (e) {
    logger.error('isFav', e)
  }
}
