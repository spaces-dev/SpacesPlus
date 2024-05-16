import { IFriendsOnline } from '../interfaces/FriendsOnline'
import { _SETTINGS } from '../settings'
import { BASE_URL, HTTP } from '../strings'
import { ce, http, logger, qs } from '../utils'

/**
 * Панель друзей онлайн
 * @param t
 */
export const friendsOnline = (b: boolean) => {
  try {
    let friendsCount = qs('#friends_cnt'),
      frOnDiv = qs('#SP_PLUS_FRIENDS_B'),
      count: number = 0

    // получаем значение каунтера
    if (friendsCount) count = Number(friendsCount.textContent)

    if (b && count > 0) {
      let parent = friendsCount?.parentNode?.parentNode?.parentNode
      frOnDiv =
        frOnDiv ||
        ce('div', {
          id: 'SP_PLUS_FRIENDS_B',
          className: 'list-link__wrap'
        })

      http<IFriendsOnline>('GET', `${BASE_URL}/friends/?S=3`, true).then(
        (e) => {
          const response = e.parsedBody?.tabbed_panel.tabs[1].content.list

          if (response) {
            // Включены ли иконки на левой панели
            let disableAvatar = qs('span.s_i_exit') ? true : false
            let friendsList = response

            let lengthList =
              _SETTINGS.friendsSet.max > friendsList.length
                ? friendsList.length
                : _SETTINGS.friendsSet.max

            for (let i = 0; i < lengthList; i++) {
              frOnDiv.appendChild(
                ce('a', {
                  href: `${BASE_URL}/mysite/index/${friendsList[i].name}`,
                  className: 'li',
                  innerHTML:
                    (disableAvatar
                      ? `<span class="comm_ava m for_avatar"><img src="${friendsList[i].avatar.previewURL}" class="preview s21_20"></span>`
                      : '') +
                    `<span class="online-status m"><img class="p14 online_status_ico" src="${HTTP}//spac.me/i/${friendsList[i].online_status.on_img}" alt="(ON)"></span><span class="block-item__title m break-word">${friendsList[i].name}</span>`
                })
              )
            }

            logger.info('Панель друзей онлайн', e)
          }
        }
      )

      parent?.appendChild(frOnDiv)
    } else {
      frOnDiv?.remove()
    }
  } catch (e) {
    logger.error('friendsOnline.ts', e)
  }
}
