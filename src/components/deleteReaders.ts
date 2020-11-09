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
            let links: any = qsa(`a[href^="${SPACES}/lenta/reader_delete/"`)

            if (links && !buttons) {
                let checkboxArr: any[] = []

                for (let link of links) {
                    link.style.textAlign = 'center'

                    let chWrap = ce('label', { class: 'stnd-link icon-link sp-ch-readers' })

                    let userId = `SP_DR_${getParams(link.href)['user']}`

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
                                ch.checked = parent.innerHTML.indexOf('Выбрать все') >= 0 ? true : false
                            }

                            parent.innerHTML = `<span class="sp sp-ok-blue"></span><span class="sp-ch-text">${parent.innerHTML.indexOf('Выбрать все') >= 0 ? 'Снять отметки' : 'Выбрать все'}</span>`
                            return false
                        }
                    })

                    const deleteReadersButton = ce('button', {
                        class: 'user__tools-link table__cell sp_btn_line sp_plus_btn_list',
                        html: '<span class="ico ico_delete"></span><span class="sp-del-text">Удалить выбранных</span>',
                        onclick: () => {
                            let count: number = 0,
                                readers: any[] = []

                            for (let ch of checkboxArr) {
                                if (ch.checked) {
                                    readers.push(/^SP_DR_([A-Za-z0-9\_]+)$/i.exec(ch.id)![1])
                                    count++
                                }
                            }

                            if (count > 0) {
                                let con = declOfNum(count, ['я', 'я', 'ей'])

                                confirmBox(`Вы действительно хотите удалить ${count} читател${con}?`, true, async () => {
                                    messageBox(`Удаляем ${count} читател${con}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>', false)

                                    for (let reader of readers) {
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