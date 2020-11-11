import {
    ce,
    qs,
    qsa,
    http,
    error,
    remove,
    getPath,
    declOfNum,
    getParams,
    confirmBox,
    messageBox,
    insertAfter
} from '../utils'

import { SPACES, OVERRIDE } from '../strings'

/**
 * TODO: Типизировать поля!
 */
export const deleteBlogs = () => {
    let p = getPath().split('/')
    let buttons = qs('#SP_PLUS_BUTTONS_B')

    // сброс кнопок
    if (p[2] !== 'view' && buttons) remove(buttons)

    if (p[1] === 'diary' && p[2] === 'view' && !qs('input[id^="SP_DB_"')) {

        try {

            // кнопки "Настройки доступа"
            let links = qsa(`a[href^="${SPACES}/diary/editaccess/"`)

            if (links.length > 0) {

                let checkboxArr: Element[] = []

                // создаем чекбоксы
                for (let link of links) {
                    if (link.className) {

                        let blogId = `SP_DB_${getParams((link as HTMLLinkElement).href)['id']}`

                        let checkbox = ce('input', {
                            class: 'sp-cbfb sp-checkbox-square',
                            type: 'checkbox',
                            id: blogId
                        })

                        let label = ce('label', {
                            class: 'sp-ch-blogs',
                            style: 'margin: 1px',
                            attr: { 'for': blogId }
                        })

                        insertAfter(checkbox, link)
                        insertAfter(label, checkbox)
                        checkboxArr.push(checkbox)
                    }
                }

                // блок кнопок управления
                let buttonsDiv = ce('div', {
                    class: 'widgets-group user__tools_last',
                    id: 'SP_PLUS_BUTTONS_B'
                })

                // кнопка "Выбрать Все"
                const chooseAllButton = ce('button', {
                    class: 'user__tools-link table__cell sp_plus_btn_list',
                    html: '<span class="sp sp-ok-blue"></span><span class="sp-ch-text">Выбрать все</span>',
                    onclick: (e: any) => {
                        let parent = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target

                        for (let ch of checkboxArr) {
                            (ch as HTMLInputElement).checked = parent.innerHTML.indexOf('Выбрать все') !== -1 ? true : false
                        }

                        parent.innerHTML = `<span class="sp sp-ok-blue"></span><span class="sp-ch-text">${parent.innerHTML.indexOf('Выбрать все') !== -1 ? 'Снять отметки' : 'Выбрать все'}</span>`
                        return false
                    }
                })

                // кнопка "Удалить выбранные"
                const deleteBlogsButton = ce('button', {
                    class: 'user__tools-link table__cell sp_btn_line sp_plus_btn_list',
                    html: '<span class="sp sp-remove-red"></span><span class="sp-del-text">Удалить выбранные</span>',
                    onclick: () => {
                        let count: number = 0,
                            blogs: string[] = []

                        for (let ch of checkboxArr) {
                            if ((ch as HTMLInputElement).checked) {
                                blogs.push(/^SP_DB_([0-9]+)$/i.exec(ch.id)![1])
                                count++
                            }
                        }

                        if (count > 0) {

                            confirmBox(`Вы действительно хотите удалить ${count} ${declStr(count)}?`, true, async () => {

                                let allCount = count

                                for (let blog of blogs) {
                                    messageBox(`Осталось удалить ${count--} из ${allCount} ${declStr(count)}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>', false)
                                    await http('GET', `${SPACES}/diary/delete/?CK=${OVERRIDE.CK}&id=${blog}&Sure=1`, true)
                                }

                                document.location.reload()
                            })
                        } else {
                            messageBox('Внимание!', 'Отметьте галочкой, те блоги, которые вы хотите удалить и попробуйте еще раз', true, 5)
                        }
                        return false
                    }
                })

                // костыль
                if (buttons) remove(buttons)

                buttonsDiv.appendChild(deleteBlogsButton)
                buttonsDiv.appendChild(chooseAllButton)
                qs('#siteContent').append(buttonsDiv)
            }
        } catch (e) {
            error('Ошибка (deleteBlogs.ts): ' + e)
        }
    }
}

const declStr = (count: number) => 'блог' + declOfNum(count, ['', 'а', 'ов'])