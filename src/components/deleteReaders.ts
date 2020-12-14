import {
    ce,
    qs,
    qsa,
    http,
    logger,
    getPath,
    getParams,
    declOfNum,
    modalConfirm,
    modalMessage
} from '../utils'

import { SPACES, DATA } from '../strings'

export const deleteReaders = () => {
    try {
        let buttons = qs('#SP_PLUS_BUTTONS_R'),
            delLinks = qsa(`a[href^="${SPACES}/lenta/reader_delete/"`)

        if (getPath() === '/lenta/readers/' && delLinks && !buttons) {

            let checkboxArr: Element[] = []

            for (let link of delLinks) {

                let chWrap = ce('label', {
                    class: 'stnd-link icon-link sp-ch-readers'
                })

                let userId = getParams((<HTMLLinkElement>link).href)['user']

                let bChbx = ce('input', {
                    type: 'checkbox',
                    class: 'sp-cbfr sp-checkbox-square',
                    id: userId
                })

                let ckbxlb = ce('label', {
                    attr: { 'for': userId }
                })

                chWrap.appendChild(bChbx)
                chWrap.appendChild(ckbxlb)
                link.after(chWrap)
                checkboxArr.push(bChbx)
            }

            if (qs('.sp-ch-readers')) {
                let buttonsDiv = ce('div', {
                    class: 'user__tools_last',
                    id: 'SP_PLUS_BUTTONS_R'
                })

                const chooseAllButton = ce('button', {
                    style: 'border-right: unset',
                    class: 'user__tools-link table__cell sp_btn-list',
                    html: `
                        <span class="sp sp-ok-blue"></span>
                        <span class="sp-ch-text">Выбрать все</span>
                    `,
                    onclick: (e: MouseEvent) => {
                        if (e.target instanceof Element) {
                            let parent = e.target.nodeName === 'SPAN' ?
                                <Element>e.target.parentNode :
                                <Element>e.target

                            for (let ch of checkboxArr) {
                                (<HTMLInputElement>ch).checked =
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

                const deleteReadersButton = ce('button', {
                    class: 'user__tools-link table__cell sp_btn_line sp_btn-list',
                    html: `
                        <span class="sp sp-remove-red"></span>
                        <span class="sp-del-text">Удалить выбранных</span>
                    `,
                    onclick: () => {
                        let readers: string[] = []

                        for (let ch of checkboxArr) {
                            if ((<HTMLInputElement>ch).checked) readers.push(ch.id)
                        }

                        let count: number = readers.length

                        if (count > 0) {

                            modalConfirm(`Вы действительно хотите удалить ${count} ${declStr(count)}?`, true, async () => {

                                let allReaders = count

                                for (let reader of readers) {
                                    modalMessage(`Осталось удалить ${count--} из ${allReaders} ${declStr(count)}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>', false)

                                    await http('POST', `${SPACES}/lenta/reader_delete/?user=${reader}`, false, `&CK=${DATA.CK}&cfms=Удалить`).then(e => {
                                        logger.info('Удалили читателя', e)
                                    })
                                }

                                document.location.reload()
                            })
                        } else {
                            modalMessage('Внимание!', 'Отметьте галочкой, теx читателей, которых вы хотите удалить и попробуйте еще раз', true, 5)
                        }
                    }
                })

                buttonsDiv.appendChild(deleteReadersButton)
                buttonsDiv.appendChild(chooseAllButton)

                let pgn = qs('div.pgn-wrapper'),
                    main = qs('#main')

                if (pgn) {
                    pgn.prepend(buttonsDiv)
                } else if (main) {
                    buttonsDiv.classList.add('widgets-group')
                    main.prepend(buttonsDiv)
                }
            }
        }
    } catch (e) {
        logger.error('deleteReaders.ts', e)
    }
}

const declStr = (count: number) => 'читател' + declOfNum(count, ['я', 'я', 'ей'])