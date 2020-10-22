import { ce, qs, remove, info, error, extend, find, http } from '../utils'

import { FriendsOnline } from '../interfaces/FriendsOnline'

import { HTTP, SPACES } from '../types/strings'
import { _SETTINGS } from '../types/settings'

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
                    remove(frOnDiv)
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

                    http<FriendsOnline>('GET', `${SPACES}/friends/?S=3`, true).then(e => {
                        const json = e.parsedBody

                        if (json?.tabbed_panel) {
                            let tempfriendsList = json.tabbed_panel.tabs[1].content.list

                            if (tempfriendsList) {
                                http<FriendsOnline>('GET', `${SPACES}/friends/?P=2&S=3`, true).then(e => {
                                    const json2 = e.parsedBody

                                    if (json2?.tabbed_panel) {
                                        let disableAvatar = find(document.getElementsByTagName('span'), { className: 's_i s_i_exit' })
                                        let friendsList = json2.tabbed_panel.tabs[1].content.list

                                        friendsList ?
                                            friendsList = extend(tempfriendsList, friendsList) :
                                            friendsList = tempfriendsList

                                        frOnDiv.innerHTML = ''

                                        let lengthList = (
                                            _SETTINGS.friendsOnMax >
                                                friendsList.length ?
                                                friendsList.length :
                                                _SETTINGS.friendsOnMax
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
                                                href: `${SPACES}/mysite/${friendsList[i].name}`,
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
                if (frOnDiv) { remove(frOnDiv) }
            }
        } catch (e) {
            error('Ошибка (friendsOnline.ts): ' + e)
        }
    }
}