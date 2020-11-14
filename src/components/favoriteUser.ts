import {
    ce,
    qs,
    qsa,
    http,
    trim,
    error,
    getPath,
    getHref,
    inBefore,
    confirmBox
} from '../utils'

import { IBookmarks } from '../interfaces/Bookmarks'
import { IUserAnketa } from '../interfaces/Mysite'

import { SPACES, DATA } from '../strings'

export const favoriteUser = async () => {
    let href = getHref(),
        method = getPath(1),
        index = getPath(2),
        nickname = getPath(3)

    if ((method === 'mysite' ||
        (method === 'anketa' && index !== 'edit') ||
        method === 'activity') &&
        DATA.FAVORITE !== href &&
        DATA.USERNAME !== trim(qs('#location_bar_1_0').textContent)) {

        DATA.FAVORITE = href

        try {
            let inFavorite = qs('#SP_PLUS_INFAVORITE'),
                tdBlock: any = qsa('td.table__cell_last')

            if (nickname && tdBlock && !inFavorite) {

                await http<IUserAnketa>('GET', `${SPACES}/anketa/index/${nickname}`, true).then(e => {
                    const json = e.parsedBody?.user_widget
                    if (json) {
                        let favoriteButton = inFavorite || ce('td', {
                            class: 'table__cell',
                            id: 'SP_PLUS_INFAVORITE',
                            html: `<a href="${SPACES}/bookmarks/add/?object_id=${json.id}&object_type=11" class="stnd-link" title="Добавить в закладки"><span class="sp sp-fav"></span> B закладки</a>`,
                            onclick: () => {
                                confirmBox(`Добавить пользователя <b>${json.name}</b> в закладки?`, false, async () => {
                                    await http('POST', `${SPACES}/ajax/bookmarks/add/`, false, `object_id=${json.id}&object_type=11&show_all_tags_state=0&new_tags=Люди&cfms=Добавить&CK=${DATA.CK}`).then(e => {
                                        e.status === 200 ?
                                            isFav(json.id, json.name, favoriteButton) :
                                            console.log(e)
                                    })
                                })
                                return false
                            }
                        })

                        isFav(json.id, json.name, favoriteButton)
                        if (!inFavorite) { inBefore(favoriteButton, tdBlock[1]) }

                        let clds = (tdBlock[1].parentElement.childNodes as NodeList)
                        for (let x in clds) { if (clds[x].nodeName === 'TD') (clds[x] as HTMLTableCellElement).width = '25%' }
                    }
                })
            }
        } catch (e) {
            error('Ошибка (favoriteUser.ts): ' + e)
        }
    } else if (
        method !== 'mysite' &&
        method !== 'anketa' &&
        method !== 'activity') {
        DATA.FAVORITE = null
    }
}

const isFav = async (id: string, name: string, elem: any) => {
    try {
        await http<IBookmarks>('GET', `${SPACES}/bookmarks/add/?object_id=${id}&object_type=11`, true).then(e => {
            const json = e.parsedBody?.delete_link

            if (json) {
                elem.firstElementChild.href = json.delete_URL
                elem.firstElementChild.title = 'Удалить из закладок'
                elem.firstElementChild.innerHTML = '<span class="sp sp-fav-on"></span><span style="color: #61a961"> В закладках</span>'
                elem.onclick = () => {
                    confirmBox(`Вы действительно хотите удалить пользователя <b>${name}</b> из закладок?`, false, async () => {
                        await http('GET', json.delete_URL, false).then(e => {
                            e.status === 200 ?
                                document.location.reload() :
                                console.log(e)
                        })
                    })
                    return false
                }
            }
        })
    } catch (e) {
        error('Ошибка (isFav): ' + e)
    }
}