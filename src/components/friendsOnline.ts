import {
    ce,
    qs,
    http,
    info,
    error,
    extend
} from '../utils'

import { IFriendsOnline } from '../interfaces/FriendsOnline'

import { HTTP, SPACES } from '../strings'
import { _SETTINGS } from '../settings'

/**
 * TODO: Переписать логику обновления списка
 * ! Сейчас обновление проиcходит путем F5
 * @param t
 */
export const friendsOnline = (t?: boolean) => {
    let frCount = qs('#friends_cnt')
    let frOnDiv = qs('#SP_PLUS_FRIENDSSB')
    let friendsForce: number = 0,
        reCount: number,
        count: number = 0,
        countFriends: number = 0

    // @ts-ignore
    if (frCount && !isNaN(frCount.innerHTML)) {
        count = Number(frCount.innerHTML)
    }

    if (frCount) {
        try {
            if (!t) {
                if (frOnDiv) {
                    frOnDiv.remove()
                    countFriends = 0
                    info('Убрали панель друзей!')
                }

                friendsForce = 0
            } else if (count > 0) {
                friendsForce++

                if (count !== countFriends || (count > 0 && !frOnDiv) || friendsForce >= 700) {
                    if (friendsForce >= 700) {
                        friendsForce = 0
                        info('Принудительно обновляем друзей!')
                    }

                    countFriends = count
                    let parent = frCount?.parentNode?.parentNode?.parentNode
                    frOnDiv = frOnDiv || ce('div', { id: 'SP_PLUS_FRIENDSSB', class: 'list-link__wrap' })

                    http<IFriendsOnline>('GET', `${SPACES}/friends/?S=3`, true).then(e => {
                        const json = e.parsedBody

                        if (json?.tabbed_panel) {
                            let tempfriendsList = json.tabbed_panel.tabs[1].content.list

                            if (tempfriendsList) {
                                http<IFriendsOnline>('GET', `${SPACES}/friends/?P=2&S=3`, true).then(e => {
                                    const json2 = e.parsedBody

                                    if (json2?.tabbed_panel) {
                                        // Включены ли иконки на левой панели
                                        let disableAvatar = qs('span.s_i_exit') ? true : false
                                        let friendsList = json2.tabbed_panel.tabs[1].content.list

                                        friendsList ?
                                            friendsList = extend(tempfriendsList, friendsList) :
                                            friendsList = tempfriendsList

                                        frOnDiv.innerHTML = ''

                                        let lengthList = (
                                            _SETTINGS.friendsSet.max >
                                                friendsList.length ?
                                                friendsList.length :
                                                _SETTINGS.friendsSet.max
                                        )

                                        if (countFriends !== friendsList.length && reCount < 3) {
                                            reCount++
                                            setTimeout(() => {
                                                countFriends = friendsList.length
                                                info(`Количество друзей не точное, пробуем еще раз (${reCount} из 3)`)
                                            }, 1000)
                                        } else if (countFriends === friendsList.length) { reCount = 0 }

                                        for (let i = 0; i < lengthList; i++) {
                                            frOnDiv.appendChild(ce('a', {
                                                href: `${SPACES}/mysite/index/${friendsList[i].name}`,
                                                class: 'li',
                                                html: (disableAvatar ?
                                                    `<span class="comm_ava m for_avatar"><img src="${friendsList[i].avatar.previewURL}" class="preview s21_20"></span>` : '') +
                                                    `<span class="online-status m"><img class="p14 online_status_ico" src="${HTTP}//spac.me/i/${friendsList[i].online_status.on_img}" alt="(ON)"></span><span class="block-item__title m break-word">${friendsList[i].name}</span>`
                                            }))
                                        }

                                        info('Обновили список друзей!')
                                    }
                                })
                            }
                        }
                    })

                    parent?.appendChild(frOnDiv)
                }
            } else if (count === 0) {
                frOnDiv?.remove()
            }
        } catch (e) {
            error('Ошибка (friendsOnline.ts): ' + e)
        }
    }
}