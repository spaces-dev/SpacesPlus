import {
    ce,
    qs,
    error,
    inBefore,
    setCookie,
    confirmBox,
    messageBox,
    setSettings
} from '../utils'

import { _SETTINGS } from '../settings'

/**
 * Меню импорта/экспорта файла настроек
 * @param id #SP_PLUS_SETAREA
 */
export const settingsBackupMenu = (id: string) => {
    // Прокручиваем страницу вверх
    window.scrollTo(0, 0)
    const target = qs(id)

    // https://www.npmjs.com/package/json-beautify
    const beautify = require('json-beautify')

    if (target) {
        try {
            // Очищаем #SP_PLUS_SETAREA
            target.innerHTML = ''

            // Предупреждение для ламеров
            if (!_SETTINGS.hideNotify.configImport) {
                let hideNotify = ce('span', {
                    class: 'sp sp-remove-grey pointer right notif_close close_h',
                    style: 'margin: 10px',
                    title: 'Понятно, больше не показывать.',
                    onclick: () => {
                        setSettings('hideNotify.configImport', true)
                        qs('#SP_CONFIG_JSON').remove()
                    }
                })

                let smallInfo = ce('div', {
                    class: 'stnd-block-yellow',
                    style: 'padding: 16px',
                    html: '<span class="sp sp-alert"></span>Внимание!</br></br><div style="font-size: small">Редактирование только для опытных пользователей! Перед редактированием файла настроек, следует сделать Экспорт, если что-то пошло не так, следует сделать Импорт настроек.</div>'
                })

                let infoDiv = ce('div', { id: 'SP_CONFIG_JSON' })

                infoDiv.appendChild(hideNotify)
                target.appendChild(infoDiv)
                infoDiv.appendChild(smallInfo)
            }

            let wrap = ce('div', { style: 'padding: 16px 16px 14px 16px' }),
                buttonsDiv = ce('div', { class: 'widgets-group user__tools_last', id: 'SP_PLUS_BOTTOM_DIVB' }),
                textareaBtn = ce('div', { class: 'widgets-group user__tools_last', style: 'margin: unset' }),
                tiw = ce('div', { class: 'text-input__wrap' }),
                cl = ce('div', { class: 'cl' })

            let updateButton = ce('button', {
                class: 'user__tools-link table__cell sp_btn',
                style: 'border-right: none; border-top: 1px solid #cdd4e1',
                html: '<span class="sp sp-ok-darkblue"></span><span style="color: #0e3c87; padding-left: 10px">Применить изменения</span>',
                onclick: () => {
                    let json,
                        val = (<HTMLInputElement>qs('#SP_BACKUP_JSON')).value

                    try {
                        // валидация лоооол
                        json = JSON.parse(val)

                        // удаляем алерты с ошибками, если они есть
                        qs('#SP_PLUS_ALERT')?.remove()

                        // сохраняем настройки
                        setCookie('SP_PLUS_SET', val)

                        // сообщение
                        messageBox('Импорт и экспорт настроек', 'Настройки были успешно сохранены', true, 3)
                    } catch (e) {
                        messageBox('Ошибка разбора файла настроек', e, true)
                    }
                }
            })

            let restoreInput = ce('input', {
                id: 'SP_IMPORT',
                attr: {
                    type: 'file',
                    accept: 'application/JSON'
                },
                style: 'display: none'
            })

            restoreInput.addEventListener('change', () => {

                let json,
                    textarea = (<HTMLInputElement>qs('#SP_BACKUP_JSON')),
                    f = (<HTMLInputElement>qs('#SP_IMPORT')).files![0]

                const reader = new FileReader()

                reader.onload = ((f) => {
                    return (e: any) => {
                        try {
                            json = JSON.parse(e.target.result)

                            // сохраняем настройки
                            setCookie('SP_PLUS_SET', e.target.result);

                            // вставляем в textarea
                            textarea.value = beautify(json, null, 4)

                            messageBox('Импорт и экспорт настроек', 'Настройки были успешно сохранены', true, 3)
                        } catch (e) {
                            messageBox('Ошибка разбора файла настроек', e, true)
                        }
                    }
                })(f)

                reader.readAsText(f)
            }, false)

            let restoreButton = ce('button', {
                class: 'user__tools-link table__cell sp_btn_line sp_btn-list',
                html: '<span class="sp sp-restore-g"></span><span style="color: #3ca93c; padding-left: 10px">Импорт</span>',
                onclick: () => qs('#SP_IMPORT').click()
            })

            let saveButton = ce('button', {
                class: 'user__tools-link sp_btn-list',
                html: '<span class="sp sp-download-blue"></span><span style="color: #57A3EA; padding-left: 10px;">Экспорт</span>',
                onclick: () => {
                    confirmBox('Вы уверены, что хотите сохранить файл настроек?', false, () => {
                        let blob = ce('a', {
                            attr: {
                                href: URL.createObjectURL(new Blob([beautify(_SETTINGS, null, 4)], { type: 'text/plain' })),
                                download: `spaces-plus-${+new Date}.json`
                            }
                        })

                        blob.click()
                        blob.remove()
                    })
                }
            })

            let textarea = ce('textarea', {
                class: 'text-input',
                id: 'SP_BACKUP_JSON',
                rows: 20,
                html: beautify(_SETTINGS, null, 4)
            })

            target.appendChild(wrap)
            wrap.appendChild(tiw)
            tiw.appendChild(cl)
            cl.appendChild(textarea)
            textareaBtn.appendChild(updateButton)
            target.appendChild(textareaBtn)

            // группа кнопок
            buttonsDiv.appendChild(restoreInput)
            buttonsDiv.appendChild(restoreButton)
            buttonsDiv.appendChild(saveButton)
            inBefore(buttonsDiv, qs('#SP_PLUS_ABOUT'))
        } catch (e) {
            error('settingsBackupMenu.ts', e)
        }
    }
}