import { ce, qs, remove, info, error, extend, find, http } from '../utils'

import { FriendsOnline } from '../interfaces/FriendsOnline'

import { HTTP, BASE_URL } from '../types/base'
import { _SETTINGS } from '../types/Settings'

export const friendsOnline = (t?: boolean) => {
    let frCount: any = qs('#friends_cnt')
    let frOnDiv: any = qs('#SP_PLUS_FRIENDSSB')
    let friendsForce: number = 0,
        reCount: number,
        count: number = 0,
        countFriends: number = 0

    if (frCount && !isNaN(frCount.innerHTML)) {
        count = parseInt(frCount.innerHTML, 10)
    }
    if (frCount) {
        try {
            if (_SETTINGS.e.friendsListSH) {
                if (frOnDiv) {
                    if (!frCount.parentNode.title) {
                        frCount.parentNode.title = 'Скрыть список'
                    }
                    if (!frCount.parentNode.hasAttribute('sp-click-el')) {
                        frCount.parentNode.onclick = (e: any) => {
                            if (frOnDiv.style.display != 'none') {
                                frOnDiv.style.display = 'none'
                                e.target.parentNode.title = 'Показать список'
                            } else {
                                frOnDiv.style.display = ''
                                e.target.parentNode.title = 'Скрыть список'
                            }
                            return false
                        }
                        frCount.parentNode.setAttribute('sp-click-el', '1')
                    }
                }
            } else {
                frCount.parentNode.title = ''
                frCount.parentNode.removeAttribute('sp-click-el')
                frCount.parentNode.onclick = null
                if (frOnDiv && frOnDiv.style.display == 'none') {
                    frOnDiv.style.display = ''
                }
            }
            if (!t) {
                if (frOnDiv) {
                    remove(frOnDiv)
                    countFriends = 0
                    info('[S+] Убрали панель друзей!')
                }
                frCount.parentNode.onclick = null
                frCount.parentNode.removeAttribute('sp-click-el')
                friendsForce = 0
            } else if (count > 0) {
                friendsForce++
                if (count != countFriends || (count > 0 && !frOnDiv) || friendsForce >= 700) {
                    if (friendsForce >= 700) {
                        friendsForce = 0
                        info('[S+] Принудительно обновляем друзей!')
                    }
                    countFriends = count
                    var parent = frCount.parentNode.parentNode.parentNode
                    frOnDiv = frOnDiv || ce('div', {
                        id: 'SP_PLUS_FRIENDSSB',
                        class: 'list-link__wrap'
                    })

                    http<FriendsOnline>('GET', `${HTTP}//${BASE_URL}/friends/?S=3`, true).then(e => {
                        if (e.status === 200) {
                            let json = e.parsedBody
                            let tempfriendsList = json?.tabbed_panel.tabs[1].content.list

                            // Uncaught (in promise) TypeError: Cannot read property 'tabs'
                            // of undefine at eval

                            if (tempfriendsList) {
                                http<FriendsOnline>('GET', `${HTTP}//${BASE_URL}/friends/?P=2&S=3`, true).then(e => {

                                    let disableAvatar = find(document.getElementsByTagName('span'), { className: 's_i s_i_exit' })
                                    let friendsList = e.parsedBody?.tabbed_panel.tabs[1].content.list

                                    friendsList ?
                                        friendsList = extend(tempfriendsList, friendsList) :
                                        friendsList = tempfriendsList

                                    frOnDiv.innerHTML = ''

                                    let lengthList = (
                                        _SETTINGS.e.friendsOnMax >
                                            friendsList!.length ?
                                            friendsList!.length :
                                            _SETTINGS.e.friendsOnMax
                                    )

                                    if (countFriends !== friendsList!.length && reCount < 3) {
                                        reCount++
                                        setTimeout(() => {
                                            countFriends = friendsList!.length
                                            info(`[S+] Количество друзей не точное, пробуем еще раз (${reCount} из 3)`)
                                        }, 1000)
                                    } else if (countFriends == friendsList!.length) { reCount = 0 }

                                    for (let i = 0; i < lengthList; i++) {
                                        frOnDiv.appendChild(ce('a', {
                                            href: `${HTTP}//${BASE_URL}/mysite/index/${friendsList![i].name}/`,
                                            class: 'li',
                                            html: (disableAvatar ?
                                                `<span class="comm_ava m for_avatar"><img src="${friendsList![i].avatar.previewURL}" class="preview s21_20"></span>` : '') +
                                                `<span class="online-status m"><img class="p14 online_status_ico" src="${HTTP}//spac.me/i/${friendsList![i].online_status.on_img}" alt="(ON)"></span><span class="block-item__title m break-word">${friendsList![i].name}</span>`
                                        }))
                                    }

                                    frCount.parentNode.removeAttribute('sp-click-el')
                                    info('[S+] Обновили список друзей!')
                                })
                            }
                        }
                    })

                    parent.appendChild(frOnDiv)
                }
            } else if (count === 0) {
                if (frOnDiv) { remove(frOnDiv) }
            }
        } catch (e) {
            error('Ошибка (friendsOnline): ' + e)
        }
    }
}