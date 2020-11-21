import {
    ce,
    qs,
    qsa,
    http,
    info,
    error,
    getPath,
    declOfNum,
    getParams,
    confirmBox,
    messageBox
} from '../utils'

import { SPACES, DATA } from '../strings'

/**
 * TODO: Типизировать поля!
 */
export const deleteBlogs = () => {
    let path = getPath().split('/'),
        buttons = qs('#SP_PLUS_BUTTONS_B'),
        // кнопки "Настройки доступа"
        links = qsa(`a[href^="${SPACES}/diary/editaccess/"`)

    try {

        // сброс кнопок
        if (path[2] !== 'view' && buttons) buttons.remove()

        if (path[1] === 'diary' && path[2] === 'view' && links && !qs('input[id^="SP_DB_"')) {

            let checkboxArr: Element[] = []

            // создаем чекбоксы
            for (let link of links) {
                if (!link.getElementsByTagName('input').length) {

                    let blogId = `SP_DB_${getParams((<HTMLLinkElement>link).href)['id']}`

                    let checkbox = ce('input', {
                        class: 'sp-cbfb sp-checkbox-square',
                        type: 'checkbox',
                        id: blogId
                    })

                    link.parentElement?.appendChild(checkbox)
                    link.parentElement?.appendChild(ce('label',
                        {
                            class: 'sp-ch-blogs',
                            style: 'margin: 2px',
                            attr: {
                                'for': blogId
                            }
                        }
                    ))

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
                class: 'user__tools-link table__cell sp_btn-list',
                html: '<span class="sp sp-ok-blue"></span><span class="sp-ch-text">Выбрать все</span>',
                onclick: (e: any) => {
                    let parent = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target

                    for (let ch of checkboxArr) {
                        (<HTMLInputElement>ch).checked = parent.innerHTML.indexOf('Выбрать все') !== -1 ? true : false
                    }

                    parent.innerHTML = `<span class="sp sp-ok-blue"></span><span class="sp-ch-text">${parent.innerHTML.indexOf('Выбрать все') !== -1 ? 'Снять отметки' : 'Выбрать все'}</span>`
                    return false
                }
            })

            // кнопка "Удалить выбранные"
            const deleteBlogsButton = ce('button', {
                class: 'user__tools-link table__cell sp_btn_line sp_btn-list',
                html: '<span class="sp sp-remove-red"></span><span class="sp-del-text">Удалить выбранные</span>',
                onclick: () => {
                    let count: number = 0,
                        blogs: string[] = []

                    for (let ch of checkboxArr) {
                        if ((<HTMLInputElement>ch).checked) {
                            blogs.push(/^SP_DB_([0-9]+)$/i.exec(ch.id)![1])
                            count++
                        }
                    }

                    if (count > 0) {

                        confirmBox(`Вы действительно хотите удалить ${count} ${declStr(count)}?`, true, async () => {

                            let allCount = count

                            for (let blog of blogs) {
                                messageBox(`Осталось удалить ${count--} из ${allCount} ${declStr(count)}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>', false)

                                await http('GET', `${SPACES}/diary/delete/?CK=${DATA.CK}&id=${blog}&Sure=1`, true).then(e => {
                                    info('Удалили блог', e)
                                })
                            }

                            document.location.reload()
                        })
                    } else {
                        messageBox('Внимание!', 'Отметьте галочкой, те блоги, которые вы хотите удалить и попробуйте еще раз', true, 5)
                    }
                    return false
                }
            })

            buttonsDiv.appendChild(deleteBlogsButton)
            buttonsDiv.appendChild(chooseAllButton)
            qs('#main').after(buttonsDiv)
        }
    } catch (e) {
        error('deleteBlogs.ts', e)
    }
}

const declStr = (count: number) => 'блог' + declOfNum(count, ['', 'а', 'ов'])