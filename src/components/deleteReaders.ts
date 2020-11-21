import {
    ce,
    qs,
    qsa,
    http,
    info,
    error,
    getPath,
    getParams,
    declOfNum,
    confirmBox,
    messageBox
} from '../utils'

import { SPACES, DATA } from '../strings'

/**
 * TODO: Типизировать поля!
 */
export const deleteReaders = () => {
    let buttons = qs('#SP_PLUS_BUTTONS_R')

    if (getPath() === '/lenta/readers/' && !buttons) {
        try {
            let links = qsa(`a[href^="${SPACES}/lenta/reader_delete/"`)

            if (links && !buttons) {
                let checkboxArr: Element[] = []

                for (let link of links) {
                    link.style.textAlign = 'center'

                    let chWrap = ce('label', { class: 'stnd-link icon-link sp-ch-readers' })

                    let userId = `SP_DR_${getParams((<HTMLLinkElement>link).href)['user']}`

                    let bChbx = ce('input', {
                        type: 'checkbox',
                        class: 'sp-cbfr sp-checkbox-square',
                        id: userId
                    })

                    let ckbxlb = ce('label', {
                        style: 'margin-left: 0px',
                        attr: { 'for': userId }
                    })

                    chWrap.appendChild(bChbx)
                    chWrap.appendChild(ckbxlb)
                    link.after(chWrap)
                    checkboxArr.push(bChbx)
                }

                let lastParent = links[links.length - 1]?.parentNode?.parentNode

                if (lastParent) {
                    let buttonsDiv = ce('div', {
                        class: 'user__tools_last',
                        id: 'SP_PLUS_BUTTONS_R'
                    })

                    const chooseAllButton = ce('button', {
                        style: 'border-right: unset',
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

                    const deleteReadersButton = ce('button', {
                        class: 'user__tools-link table__cell sp_btn_line sp_btn-list',
                        html: '<span class="sp sp-remove-red"></span><span class="sp-del-text">Удалить выбранных</span>',
                        onclick: () => {
                            let count: number = 0,
                                readers: string[] = []

                            for (let ch of checkboxArr) {
                                if ((<HTMLInputElement>ch).checked) {
                                    readers.push(/^SP_DR_([A-Za-z0-9\_]+)$/i.exec(ch.id)![1])
                                    count++
                                }
                            }

                            if (count > 0) {

                                confirmBox(`Вы действительно хотите удалить ${count} ${declStr(count)}?`, true, async () => {

                                    let allCount = count

                                    for (let reader of readers) {
                                        messageBox(`Осталось удалить ${count--} из ${allCount} ${declStr(count)}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>', false)

                                        await http('POST', `${SPACES}/lenta/reader_delete/?user=${reader}`, false, `&CK=${DATA.CK}&cfms=Удалить`).then(e => {
                                            info('Удалили читателя', e)
                                        })
                                    }

                                    document.location.reload()
                                })
                            } else {
                                messageBox('Внимание!', 'Отметьте галочкой, теx читателей, которых вы хотите удалить и попробуйте еще раз', true, 5)
                            }
                            return false
                        }
                    })

                    buttonsDiv.appendChild(deleteReadersButton)
                    buttonsDiv.appendChild(chooseAllButton)

                    let main = qs('#main'),
                        pgn = qs('div.pgn-wrapper')

                    if (pgn) {
                        pgn.prepend(buttonsDiv)
                    } else if (main) {
                        buttonsDiv.classList.add('widgets-group')
                        main.prepend(buttonsDiv)
                    }
                }
            }
        } catch (e) {
            error('deleteReaders.ts', e)
        }
    }
}

const declStr = (count: number) => 'читател' + declOfNum(count, ['я', 'я', 'ей'])