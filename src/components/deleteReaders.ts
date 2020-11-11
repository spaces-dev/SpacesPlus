import {
    ce,
    qs,
    qsa,
    http,
    error,
    getPath,
    getParams,
    declOfNum,
    confirmBox,
    messageBox,
    insertAfter
} from '../utils'

import { SPACES, OVERRIDE } from '../strings'

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

                    let userId = `SP_DR_${getParams((link as HTMLLinkElement).href)['user']}`

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
                    insertAfter(chWrap, link)
                    checkboxArr.push(bChbx)
                }

                let lastParent = links[links.length - 1]?.parentNode?.parentNode

                if (lastParent) {
                    let buttonsDiv = ce('div', {
                        class: 'user__tools_last',
                        id: 'SP_PLUS_BUTTONS_R'
                    })

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

                    const deleteReadersButton = ce('button', {
                        class: 'user__tools-link table__cell sp_btn_line sp_plus_btn_list',
                        html: '<span class="sp sp-remove-red"></span><span class="sp-del-text">Удалить выбранных</span>',
                        onclick: () => {
                            let count: number = 0,
                                readers: string[] = []

                            for (let ch of checkboxArr) {
                                if ((ch as HTMLInputElement).checked) {
                                    readers.push(/^SP_DR_([A-Za-z0-9\_]+)$/i.exec(ch.id)![1])
                                    count++
                                }
                            }

                            if (count > 0) {

                                confirmBox(`Вы действительно хотите удалить ${count} ${declStr(count)}?`, true, async () => {

                                    let allCount = count

                                    for (let reader of readers) {
                                        messageBox(`Осталось удалить ${count--} из ${allCount} ${declStr(count)}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>', false)
                                        await http('POST', `${SPACES}/lenta/reader_delete/?user=${reader}`, false, `&CK=${OVERRIDE.CK}&cfms=Удалить`)
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
                    insertAfter(buttonsDiv, lastParent)
                }
            }
        } catch (e) {
            error('Ошибка (deleteReaders.ts): ' + e)
        }
    }
}

const declStr = (count: number) => 'читател' + declOfNum(count, ['я', 'я', 'ей'])