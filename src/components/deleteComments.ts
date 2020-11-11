import {
    ce,
    qs,
    qsa,
    http,
    error,
    declOfNum,
    confirmBox,
    messageBox,
    insertAfter
} from '../utils'

import { SPACES, DEVICE } from '../strings'

export const deleteComments = () => {
    let targetComm = qs('h2.span')
    let childs = qsa('span.comment_date')
    let delLinks = qsa('a[class="ajax_delete"')
    let delBtns = qsa(`a[href^="${SPACES}/comment/delete/"`)

    try {
        if (childs && delLinks && delBtns.length > 0 && targetComm?.textContent === 'Комментарии') {

            for (let child of childs) {

                // к новым комментариям добавляем чекбоксы
                if (!child.getElementsByTagName('input').length) {

                    // Нихуевый костыль!
                    let DC = `DC_${(DEVICE.id === 4 ?
                        // pc
                        child?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.id :
                        // touch
                        child.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.id)}`
                    let checkbox = ce('input', {
                        type: 'checkbox',
                        class: 'sp-cbfc sp-checkbox-square',
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

            // группа кнопок
            if (!qs('#SP_PLUS_BUTTONS')) {
                let buttonsDiv = ce('div', {
                    class: 'widgets-group user__tools_last',
                    id: 'SP_PLUS_BUTTONS'
                })

                const chooseAllButton = ce('button', {
                    class: 'user__tools-link table__cell sp_plus_btn_list',
                    html: '<span class="sp sp-ok-blue"></span><span class="sp-ch-text">Выбрать все</span>',
                    onclick: (e: any) => {
                        let inputs = qsa('input[id^="DC_"]')
                        let parent = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target

                        for (let input of inputs) {
                            (input as HTMLInputElement).checked = parent.innerHTML.indexOf('Выбрать все') !== -1 ? true : false
                        }

                        parent.innerHTML = `<span class="sp sp-ok-blue"></span><span class="sp-ch-text">${parent.innerHTML.indexOf('Выбрать все') !== -1 ? 'Снять отметки' : 'Выбрать все'}</span>`
                        return false
                    }
                })

                const deleteCommentsButton = ce('button', {
                    class: 'user__tools-link table__cell sp_btn_line sp_plus_btn_list',
                    html: '<span class="sp sp-remove-red"></span><span class="sp-del-text">Удалить выбранные</span>',
                    onclick: () => {
                        let inputs = qsa('input[id^="DC_"]'),
                            count: number = 0,
                            urls: string[] = []

                        for (let input of inputs) {
                            if ((input as HTMLInputElement).checked) {

                                Array.prototype.slice.call((DEVICE.id === 4 ?
                                    // костыль для PC
                                    input?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode :
                                    // костыль для Touch
                                    input?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode)
                                    ?.querySelectorAll(`a[href^="${SPACES}/comment/delete/"]`))
                                    .filter(e => {
                                        if (e.textContent === 'Удалить') {
                                            count++
                                            urls.push(e.href)
                                        }
                                    })

                            }
                        }

                        if (count > 0) {

                            confirmBox(`Вы действительно хотите удалить ${count} ${declStr(count)}?`, true, async () => {

                                let allCount = count

                                for (let url of urls) {
                                    messageBox(`Осталось удалить ${count--} из ${allCount} ${declStr(count)}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>', false)
                                    await http('GET', url, true)
                                }

                                document.location.reload()
                            })
                        } else {
                            messageBox('Внимание!', 'Отметьте галочкой, те комментарии, которые вы хотите удалить и попробуйте еще раз', true, 5)
                        }
                        return false
                    }
                })

                buttonsDiv.appendChild(deleteCommentsButton)
                buttonsDiv.appendChild(chooseAllButton)
                insertAfter(buttonsDiv, qs('div.js-comments-pgn'))
            }
        }
    } catch (e) {
        error('Ошибка (deleteComments.ts): ' + e)
    }
}

const declStr = (count: number) => 'комментари' + declOfNum(count, ['й', 'я', 'ев'])