import {
    ce,
    qs,
    qsa,
    http,
    logger,
    declOfNum,
    modalConfirm,
    modalMessage
} from '../utils'

import { BASE_URL, DEVICE } from '../strings'

export const deleteComments = () => {
    try {

        let targetComm = qs('h2.span'),
            childs = qsa('span.comment_date'),
            delLink = qs(`a[href^="${BASE_URL}/comment/delete/"`),
            banLink = qs(`a[href^="${BASE_URL}/forums/moder/ban/"`),
            onComments = targetComm?.textContent === 'Комментарии' ? true : false,
            onDelete = delLink?.textContent === 'Удалить' ? true : false,
            onAdmin = banLink?.textContent === 'Бан' ? true : false

        if (childs &&
            onComments &&
            (onDelete || onAdmin)) {

            for (let child of childs) {

                // к новым комментариям добавляем чекбоксы
                if (!child.getElementsByTagName('input').length) {

                    // Нихуевый костыль!
                    let DC = DEVICE.id === 4 ?
                        // pc
                        child.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.id :
                        // touch
                        child.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.id

                    // еще костыль хуле
                    if (parseInt(DC!)) {
                        let checkbox = ce('input', {
                            type: 'checkbox',
                            className: 'sp-cbfc sp-checkbox-square',
                            id: `DC_${DC}`
                        })

                        child.appendChild(checkbox)
                        child.appendChild(ce('label',
                            {
                                htmlFor: `DC_${DC}`
                            }
                        ))
                    }
                }
            }

            // группа кнопок
            if (!qs('#SP_PLUS_BUTTONS')) {

                let buttonsDiv = ce('div', {
                    className: 'widgets-group user__tools_last',
                    id: 'SP_PLUS_BUTTONS'
                })

                const chooseAllButton = ce('button', {
                    className: 'user__tools-link table__cell sp_btn-list',
                    innerHTML: `
                        <span class="sp sp-ok-blue"></span>
                        <span class="sp-ch-text">Выбрать все</span>
                    `,
                    onclick: (e: MouseEvent) => {
                        if (e.target instanceof Element) {
                            let inputs = qsa('input[id^="DC_"]')

                            let parent = e.target.nodeName === 'SPAN' ?
                                <Element>e.target.parentNode :
                                <Element>e.target

                            for (let input of inputs) {
                                (<HTMLInputElement>input).checked =
                                    parent.innerHTML.indexOf('Выбрать все') !== -1 ?
                                        true :
                                        false
                            }

                            parent.innerHTML = `
                                <span class="sp sp-ok-blue"></span>
                                    <span class="sp-ch-text">
                                    ${parent.innerHTML.indexOf('Выбрать все') !== -1 ?
                                    'Снять отметки' :
                                    'Выбрать все'}
                                </span>
                            `
                        }
                    }
                })

                const deleteCommentsButton = ce('button', {
                    className: 'user__tools-link table__cell sp_btn_line sp_btn-list',
                    innerHTML: `
                        <span class="sp sp-remove-red"></span>
                        <span class="sp-del-text">Удалить выбранные</span>
                    `,
                    onclick: () => {
                        let inputs = qsa('input[id^="DC_"]'),
                            urls: string[] = []

                        for (let input of inputs) {
                            if ((<HTMLInputElement>input).checked) {

                                Array.prototype.slice.call((DEVICE.id === 4 ?
                                    // костыль для PC
                                    input?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode :
                                    // костыль для Touch
                                    input?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode)
                                    ?.querySelectorAll(`a[href^="${BASE_URL}/comment/delete/"]`))
                                    .filter(e => {
                                        if (e.textContent === 'Удалить') urls.push(e.href)
                                    })
                            }
                        }

                        let count: number = urls.length

                        if (count > 0) {

                            modalConfirm(`Вы действительно хотите удалить ${count} ${declStr(count)}?`, true, async () => {

                                let allComments = count

                                for (let url of urls) {
                                    modalMessage(`Осталось удалить ${count--} из ${allComments} ${declStr(count)}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>', false)

                                    await http('GET', url, true).then(e => {
                                        logger.info('Удалил комментарий', e)
                                    })
                                }

                                document.location.reload()
                            })
                        } else {
                            modalMessage('Внимание!', 'Отметьте галочкой, те комментарии, которые вы хотите удалить и попробуйте еще раз', true, 5)
                        }
                        return false
                    }
                })

                buttonsDiv.appendChild(deleteCommentsButton)
                buttonsDiv.appendChild(chooseAllButton)
                qs('div.js-comments-pgn').after(buttonsDiv)
            }
        }
    } catch (e) {
        logger.error('deleteComments.ts', e)
    }
}

const declStr = (count: number) => 'комментари' + declOfNum(count, ['й', 'я', 'ев'])