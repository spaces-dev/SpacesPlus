import {
    ce,
    qs,
    http,
    error,
    remove,
    inBefore,
    delCookie,
    setCookie,
    confirmBox
} from '../utils'

import { IGetJSON } from '../interfaces/GetJSON'

import { HTTP } from '../strings'
import { _SETTINGS } from '../settings'

/**
 * Меню сохранения/восстановления файла настроек
 * @param id #SP_PLUS_SETAREA
 */
export const settingsBackupMenu = (id: string) => {
    // Прокручиваем страницу вверх
    window.scrollTo(0, 0)
    const target = qs(id)

    if (target) {
        try {
            // Очищаем #SP_PLUS_SETAREA
            target.innerHTML = ''

            // Предупреждение для ламеров
            if (!_SETTINGS.hideNotyf.configImport) {
                let hideNotyf = ce('span', {
                    class: 'sp sp-remove-grey pointer right notif_close close_h',
                    style: 'margin: 10px',
                    title: 'Понятно, больше не показывать.',
                    onclick: () => {
                        _SETTINGS.hideNotyf.configImport = true
                        setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                        remove(qs('#SP_CONFIG_JSON'))
                    }
                })

                let smallInfo = ce('div', {
                    class: 'stnd-block-yellow',
                    style: 'padding: 15px',
                    html: '<span class="sp sp-alert"></span>Внимание!</br></br><div style="font-size: small">Редактирование только для опытных пользователей, если что-то пошло не так, следует сделать полный сброс настроек.</div>'
                })

                let infoDiv = ce('div', { id: 'SP_CONFIG_JSON' })
                infoDiv.appendChild(hideNotyf)
                target.appendChild(infoDiv)
                infoDiv.appendChild(smallInfo)
            }

            let textarea: any,
                wrap = ce('div', { class: 'content-bl' }),
                preloader = ce('div', {
                    class: 't_center',
                    id: 'SP_JSON_PRELOADER',
                    html: `<img src="${HTTP}//spac.me/i/preloader.gif">`
                })

            target.appendChild(wrap)
            wrap.appendChild(preloader)

            let buttonsDiv = ce('div', { class: 'widgets-group user__tools_last', id: 'SP_PLUS_BOTTOM_DIVB' }),
                tiw = ce('div', { class: 'text-input__wrap' }),
                cl = ce('div', { class: 'cl' }),
                errorsBlock = ce('div', {
                    id: 'JSON_ERROR_BLOCK',
                    class: 'stnd-block-yellow',
                    style: 'padding: 15px',
                    html: '<span class="sp sp-alert"></span> Невалидный JSON<br /><br />'
                })

            let restoreButton = ce('button', {
                class: 'user__tools-link table__cell sp_btn_line sp_plus_btn_list',
                html: '<span class="sp sp-restore-g"></span><span style="color: #3ca93c; padding-left: 10px">Сбросить настройки</span>',
                onclick: () => {
                    confirmBox('Вы действительно хотите сбросить файл конфигурации?', true, () => {
                        delCookie('SP_PLUS_SET')
                        document.location.reload()
                    })
                    return false
                }
            })

            let saveButton = ce('button', {
                class: 'user__tools-link sp_plus_btn_list',
                html: '<span class="sp sp-ok-blue"></span><span style="color: #57A3EA; padding-left: 10px;">Сохранить</span>',
                onclick: () => {
                    getJSON(`value=${textarea.value}`, (json: IGetJSON) => {
                        // Костыль ¯\_(ツ)_/¯
                        if (qs('#JSON_ERROR_BLOCK')) {
                            errorsBlock.innerHTML = '<span class="sp sp-alert"></span> Невалидный JSON<br /><br />'
                            remove(qs('#JSON_ERROR_BLOCK'))
                        }

                        if (json.result.valid) {
                            setCookie('SP_PLUS_SET', textarea.value)
                            confirmBox('Настройки были успешно обновлены</br>Хотите сохранить файл настроек на рабочий стол?', false, () => {
                                let blob = ce('a', {
                                    attr: {
                                        href: URL.createObjectURL(new Blob([textarea.value], { type: 'text/plain' })),
                                        download: 'spaces-plus.json'
                                    }
                                })

                                blob.click()
                                blob.remove()
                            })
                        } else {
                            handleErrors(target, errorsBlock, json)
                        }
                        return false
                    })
                }
            })

            getJSON(`value=${JSON.stringify(_SETTINGS)}`, (json: IGetJSON) => {
                textarea = ce('textarea', {
                    class: 'text-input',
                    id: 'SP_BACKUP_JSON',
                    cols: '17',
                    rows: '25',
                    html: json.result.data
                })

                if (json.result.valid) {
                    target.appendChild(wrap)
                    wrap.appendChild(tiw)
                    tiw.appendChild(cl)
                    cl.appendChild(textarea)
                    remove(qs('#SP_JSON_PRELOADER'))
                } else {
                    handleErrors(target, errorsBlock, json)
                }

                target.appendChild(wrap)
                wrap.appendChild(tiw)
                tiw.appendChild(cl)
                cl.appendChild(textarea)
                buttonsDiv.appendChild(restoreButton)
                buttonsDiv.appendChild(saveButton)
                inBefore(buttonsDiv, qs('#SP_PLUS_ABOUT'))
            })
        } catch (e) {
            error('Ошибка (settingsBackupMenu.ts): ' + e)
        }
    }
}

/**
 * JSON Validator API (https://gist.github.com/crashmax-off/f86350b8a4b85311ac8676a906b973eb) 
 * https://crashmax.ru/api/getJSON
 * TODO: Возможно вынести в utils???
 * @param data используем JSON.stringfy() для отправки POST
 * @param callback response function
 */
const getJSON = (data: string, callback: Function) => {
    try {
        http<IGetJSON>('POST', 'https://crashmax.ru/api/getJSON', false, data).then(e => {
            return callback(e.parsedBody)
        })
    } catch (e) {
        error('Ошибка (getJSON): ' + e)
    }
}

/**
 * Выводим получаемые ошибки в JSON схеме
 * @param target #SP_PLUS_SETAREA
 * @param errorsBlock #JSON_ERROR_BLOCK
 * @param json http response
 */
const handleErrors = (target: any, errorsBlock: any, json: IGetJSON) => {
    target.appendChild(errorsBlock)
    for (let err of json.result.errors) {
        let error = ce('div', {
            class: 'sp_error-block',
            html: `<b>Error:</b> ${err.message} [Code: ${err.code}, Sctructure: ${err.element}]<br />`
        })
        errorsBlock.appendChild(error)
    }
}