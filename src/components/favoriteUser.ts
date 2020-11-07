import {
    ce,
    qs,
    http,
    error,
    getPath,
    getHref,
    inBefore,
    confirmBox,
    getClassName
} from '../utils'

import { IBookmarks } from '../interfaces/Bookmarks'
import { IUserAnketa } from '../interfaces/UserAnketa'

import { SPACES, OVERRIDE } from '../strings'

export const favoriteUser = async () => {
    let href = getHref(),
        method = getPath(1),
        index = getPath(2),
        nickname = getPath(3)

    if ((method === 'mysite' || (method === 'anketa' && index !== 'edit') || method === 'activity') && OVERRIDE.FAVORITE !== href) {
        OVERRIDE.FAVORITE = href

        let inFavorite = qs('#SP_PLUS_INFAVORITE')

        try {
            let tbBlock: any = getClassName('td.table__cell table__cell_last', true)
            if (nickname && tbBlock && tbBlock[0].innerHTML.indexOf('Вперёд') < 0 && !inFavorite) {

                await http<IUserAnketa>('GET', `${SPACES}/anketa/index/${nickname}`, true).then(e => {
                    const json = e.parsedBody?.user_widget
                    if (json) {
                        let favoriteButton = inFavorite || ce('td', {
                            class: 'table__cell',
                            id: 'SP_PLUS_INFAVORITE',
                            html: `<a href="${SPACES}/bookmarks/add/?object_id=${json.id}&object_type=11" class="stnd-link" title="Добавить в закладки"><span class="sp sp-fav"></span> B закладки</a>`,
                            onclick: () => {
                                confirmBox(`Добавить пользователя <b>${json.name}</b> в закладки?`, false, async () => {
                                    await http('POST', `${SPACES}/ajax/bookmarks/add/`, false, `object_id=${json.id}&object_type=11&show_all_tags_state=0&new_tags=Люди&cfms=Добавить&CK=${OVERRIDE.CK}`).then(e => {
                                        e.status === 200 ?
                                            isFav(json.id, json.name, favoriteButton) :
                                            console.log(e)
                                    })
                                })
                                return false
                            }
                        })

                        isFav(json.id, json.name, favoriteButton)
                        if (!inFavorite) { inBefore(favoriteButton, tbBlock[0]) }

                        let clds = tbBlock[0].parentNode.childNodes
                        for (let x in clds) { if (clds[x].nodeName === 'TD') clds[x].width = '25%' }
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
        OVERRIDE.FAVORITE = null
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