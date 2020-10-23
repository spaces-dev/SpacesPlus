import { ce, qs, find, http, getClassName, messageBox, confirmBox, declOfNum, insertAfter, error } from '../utils'

import { OVERRIDE, DEVICE } from '../types/strings'

export const deleteComments = () => {
    let childs = getClassName('span.comment_date', false)
    let buttons = qs('#SP_PLUS_BUTTONS')
    try {
        if (childs) {
            if (!buttons || childs.length !== OVERRIDE.COMMENTS) {

                OVERRIDE.COMMENTS = childs.length
                let delLinks = find(document.getElementsByTagName('a'), { className: 'ajax_delete' })

                if (delLinks) {

                    for (let child of childs) {
                        if (child.getElementsByTagName('input').length === 0) {
                            // @ts-ignore
                            let DC = `DC_${(DEVICE.id === 4 ? child.parentNode.parentNode.parentNode.parentNode.parentNode.id : child.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id)}`
                            let checkbox = ce('input', {
                                type: 'checkbox',
                                class: 'sp-cbfc sp-checkbox-square',
                                // @ts-ignore
                                id: DC
                            })

                            child.appendChild(checkbox)
                            child.appendChild(ce('label',
                                {
                                    attr: {
                                        'for': DC
                                    }
                                }
                            ))
                        }
                    }

                    if (!buttons) {
                        let inputs = document.getElementsByTagName('input')
                        let buttonsDiv = ce('div', {
                            class: 'widgets-group user__tools_last',
                            id: 'SP_PLUS_BUTTONS'
                        })

                        const chooseAllButton = ce('button', {
                            class: 'user__tools-link table__cell sp_plus_btn_list',
                            html: '<span class="sp sp-ok-blue"></span><span class="sp-ch-text">Выбрать все</span>',
                            onclick: (e: any) => {
                                let parent = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target

                                for (let input of inputs) {
                                    // @ts-ignore
                                    if (input.type === 'checkbox' && /DC_([0-9]+)/gi.test(input.id) && input.parentNode.parentNode.parentNode.style.display !== 'none') {
                                        parent.innerHTML.indexOf('Выбрать все') >= 0 ? input.checked = true : input.checked = false
                                    }
                                }

                                parent.innerHTML = `<span class="sp sp-ok-blue"></span><span class="sp-ch-text">${parent.innerHTML.indexOf('Выбрать все') >= 0 ? 'Снять отметки' : 'Выбрать все'}</span>`
                                return false
                            }
                        })

                        const deleteCommentsButton = ce('button', {
                            class: 'user__tools-link table__cell sp_btn_line sp_plus_btn_list',
                            html: '<span class="ico ico_delete"></span><span class="sp-del-text">Удалить выбранные</span>',
                            onclick: () => {
                                let count: number = 0,
                                    urls: any[] = []

                                for (let input of inputs) {
                                    if (input.type === 'checkbox' && /DC_([0-9]+)/gi.test(input.id) && input.checked) {
                                        // @ts-ignore
                                        let delLinks: any = find((DEVICE.id === 4 ? input.parentNode.parentNode.parentNode.parentNode.parentNode : input.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode).getElementsByTagName('a'), {
                                            innerHTML: 'Удалить'
                                        })

                                        count++
                                        urls.push(delLinks[0])
                                    }
                                }

                                if (count > 0) {
                                    let con = declOfNum(count, ['й', 'я', 'ев'])

                                    confirmBox(`Вы действительно хотите удалить ${count} комментари${con}?`, false, async () => {
                                        messageBox(`Удаляем ${count} комментари${con}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>', false)

                                        for (let url of urls) {
                                            await http('GET', url, true)
                                        }

                                        document.location.reload()
                                    })
                                } else {
                                    messageBox('Внимание!', 'Отметьте галочкой, те комментарии, которые вы хотите удалить и попробуйте еще раз', true, 8)
                                }
                                return false
                            }
                        })

                        buttonsDiv.appendChild(deleteCommentsButton)
                        buttonsDiv.appendChild(chooseAllButton)
                        insertAfter(buttonsDiv, qs('div.js-comments-pgn'))
                    }
                }
            }
        } else {
            OVERRIDE.COMMENTS = 0
        }
    } catch (e) {
        error('Ошибка (deleteComments.ts): ' + e)
    }
}