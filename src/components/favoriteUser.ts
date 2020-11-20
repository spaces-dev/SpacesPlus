import {
    ce,
    qs,
    qsa,
    http,
    trim,
    info,
    error,
    getPath,
    inBefore,
    confirmBox
} from '../utils'

import { IBookmarks } from '../interfaces/Bookmarks'
import { IUserAnketa } from '../interfaces/Mysite'

import { SPACES, DATA } from '../strings'

export const favoriteUser = async () => {
    try {

        let method = getPath(1),
            index = getPath(2),
            nickname = getPath(3),
            tdBlock = qsa('td.table__cell_last'),
            inFavorite = qs('#SP_PLUS_INFAVORITE')

        if ((method === 'mysite' ||
            (method === 'anketa' && index !== 'edit') ||
            method === 'activity') &&
            DATA.USERNAME !== trim(qs('#location_bar_1_0').textContent)) {

            if (nickname && tdBlock && !inFavorite) {

                let favoriteButton = ce('td', {
                    class: 'table__cell stnd-link_disabled',
                    id: 'SP_PLUS_INFAVORITE'
                })

                let loader = ce('a', {
                    href: '#',
                    id: 'SP_FV_LOADER',
                    class: 'stnd-link',
                    html: `
                        <span class="ico bp ico_spinner"></span>
                        <span class="t js-text">Загрузка</span>
                    `
                })

                favoriteButton.appendChild(loader)
                inBefore(favoriteButton, tdBlock[1])

                let clds = (<NodeList>tdBlock[1]?.parentElement?.childNodes)
                for (let x in clds) { if (clds[x].nodeName === 'TD') (<HTMLTableCellElement>clds[x]).width = '25%' }

                await http<IUserAnketa>('GET', `${SPACES}/anketa/index/${nickname}`, true).then(e => {
                    const json = e.parsedBody?.user_widget

                    if (json) {
                        let favoriteLink = ce('a', {
                            href: `${SPACES}/bookmarks/add/?object_id=${json.id}&object_type=11`,
                            class: 'stnd-link',
                            attr: { title: 'Добавить в закладки' },
                            html: `<span class="sp sp-fav"></span> B закладки`,
                            onclick: () => {
                                confirmBox(`Добавить пользователя <b>${json.name}</b> в закладки?`, false, async () => {
                                    await http('POST', `${SPACES}/ajax/bookmarks/add/`, false, `object_id=${json.id}&object_type=11&show_all_tags_state=0&new_tags=Люди&cfms=Добавить&CK=${DATA.CK}`).then(e => {
                                        e.status === 200 ?
                                            isFav(json.id, json.name, favoriteButton) :
                                            error('bookmarks/add', e)
                                    })
                                })

                                return false
                            }
                        })

                        isFav(json.id, json.name, favoriteButton)

                        qs('#SP_FV_LOADER').remove()
                        qs('#SP_PLUS_INFAVORITE').classList.remove('stnd-link_disabled')
                        favoriteButton.appendChild(favoriteLink)
                    }

                    info('anketa/index', e)
                })
            }
        }
    } catch (e) {
        error('favoriteUser.ts', e)
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
                                error('bookmarks/remove', e)
                        })
                    })

                    return false
                }
            }

            info('В закладках?', e)
        })
    } catch (e) {
        error('isFav', e)
    }
}