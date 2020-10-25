import {
    ce,
    qs,
    find,
    http,
    error,
    getPath,
    inBefore,
    declOfNum,
    confirmBox,
    messageBox,
    insertAfter
} from '../utils'

import { SPACES, OVERRIDE } from '../strings'

export const deleteBlogs = () => {
    let p = getPath().split('/')
    let buttons = qs('#SP_PLUS_BUTTONS')

    if ((p[1] === 'diary' && p[2] === null) ||
        (p[1] === 'diary' && p[2] === 'view') &&
        !buttons) {

        try {
            let links = find(document.links, { href: `${SPACES}/diary/editaccess/?Link_id=` })

            if (links && !buttons) {
                let checkboxArr: any = []

                for (let link of links) {
                    if (link.className) {
                        let checkbox = ce('input', {
                            class: 'sp-cbfb sp-checkbox-square',
                            type: 'checkbox',
                            // @ts-ignore
                            id: 'SP_DB_' + /\&id=([0-9]+)/i.exec(link.href)[1]
                        })

                        let label = ce('label', {
                            class: 'sp-ch-blogs',
                            style: 'margin: 1px',
                            // @ts-ignore
                            attr: { 'for': 'SP_DB_' + /\&id=([0-9]+)/i.exec(link.href)[1] }
                        })

                        insertAfter(checkbox, link)
                        insertAfter(label, checkbox)
                        checkboxArr.push(checkbox)
                    }
                }

                if (!buttons) {
                    let buttonsDiv = ce('div', {
                        class: 'widgets-group user__tools_last',
                        id: 'SP_PLUS_BUTTONS'
                    })

                    const chooseAllButton = ce('button', {
                        class: 'user__tools-link table__cell sp_plus_btn_list',
                        html: '<span class="sp sp-ok-blue"></span><span class="sp-ch-text">Выбрать все</span>',
                        onclick: (e: any) => {
                            let parent = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target

                            for (let ch of checkboxArr) {
                                parent.innerHTML.indexOf('Выбрать все') >= 0 ? ch.checked = true : ch.checked = false
                            }

                            parent.innerHTML = `<span class="sp sp-ok-blue"></span><span class="sp-ch-text">${parent.innerHTML.indexOf('Выбрать все') >= 0 ? 'Снять отметки' : 'Выбрать все'}</span>`
                            return false
                        }
                    })

                    const deleteBlogsButton = ce('button', {
                        class: 'user__tools-link table__cell sp_btn_line sp_plus_btn_list',
                        html: '<span class="ico ico_delete"></span><span class="sp-del-text">Удалить выбранные</span>',
                        onclick: () => {
                            let count: number = 0,
                                blogs: any[] = []

                            for (let ch of checkboxArr) {
                                if (ch.checked) {
                                    // @ts-ignore
                                    blogs.push(/^SP_DB_([0-9]+)$/i.exec(ch.id)[1])
                                    count++
                                }
                            }

                            if (count > 0) {
                                let con = declOfNum(count, ['', 'а', 'ов'])

                                confirmBox(`Вы действительно хотите удалить ${count} блог${con}?`, true, async () => {
                                    messageBox(`Удаляем ${count} блог${con}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>', false)

                                    for (let blog of blogs) {
                                        await http('GET', `${SPACES}/diary/delete/?CK=${OVERRIDE.CK}&id=${blog}&Sure=1`, true)
                                    }

                                    document.location.reload()
                                })
                            } else {
                                messageBox('Внимание!', 'Отметьте галочкой, те блоги, которые вы хотите удалить и попробуйте еще раз', true, 8)
                            }
                            return false
                        }
                    })

                    buttonsDiv.appendChild(deleteBlogsButton)
                    buttonsDiv.appendChild(chooseAllButton)
                    inBefore(buttonsDiv, qs('div.pgn'))
                }
            }
        } catch (e) {
            error('Ошибка (deleteBlogs.ts): ' + e)
        }
    }
}