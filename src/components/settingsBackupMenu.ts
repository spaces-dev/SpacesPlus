import { ce, qs, http, setCookie, delCookie, remove, confirmBox, inBefore, error } from '../utils'

import { IGetJSON } from '../interfaces/GetJSON'

import { HTTP } from '../types/strings'
import { _SETTINGS } from '../types/settings'

/**
 * JSON Validator API (https://gist.github.com/crashmax-off/f86350b8a4b85311ac8676a906b973eb) 
 * https://crashmax.ru/api/getJSON
 * TODO: Возможно вынести в utils???
 * @param data convert json using JSON.stringfy()
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
 * TODO:
 * ? Сделать нормальный обработчик ошибок
 * ? Cохрание без перезагрузки страницы
 * ? Cохранение .json на рабочий стол
 * @param id #querySelector
 */
export const settingsBackupMenu = (id: string) => {
    window.scrollTo(0, 0)
    const target = qs(id)

    if (target) {
        try {
            target.innerHTML = ''
            let textarea: any
            let wrap = ce('div', { class: 'content-bl' })

            if (!_SETTINGS.hideNotyf.configImport) {
                let hideNotyf = ce('span', {
                    class: 'sp sp-remove-grey pointer right notif_close close_h',
                    style: 'margin: 10px',
                    title: 'Понятно, больше не показывать.',
                    onclick: function () {
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

            let preloader = ce('div', {
                class: 't_center',
                id: 'SP_JSON_PRELOADER',
                html: `<img src="${HTTP}//spac.me/i/preloader.gif">`
            })

            target.appendChild(wrap)
            wrap.appendChild(preloader)

            let btnDiv = ce('div', { class: 'widgets-group user__tools_last', id: 'SP_PLUS_BOTTOM_DIVB' })
            let tiw = ce('div', { class: 'text-input__wrap' })
            let cl = ce('div', { class: 'cl' })
            let err = ce('div', {
                id: 'JSON_ERROR_BLOCK',
                class: 'stnd-block-yellow',
                style: 'padding: 15px',
                html: '<span class="sp sp-alert"></span> Невалидный JSON<br /><br />'
            })

            let delSubm = ce('button', {
                class: 'user__tools-link table__cell sp_btn_line sp_plus_btn_list',
                html: '<span class="sp sp-restore-g"></span><span style="color: #3ca93c; padding-left: 10px">Сбросить настройки</span>',
                onclick: function () {
                    confirmBox('Вы действительно хотите сбросить файл конфигурации?', false, () => {
                        delCookie('SP_PLUS_SET')
                        document.location.reload()
                    })
                    return false
                }
            })

            let chSubm = ce('button', {
                class: 'user__tools-link sp_plus_btn_list',
                html: '<span class="sp sp-ok-blue"></span><span style="color: #57A3EA; padding-left: 10px;">Сохранить</span>',
                onclick: function () {
                    getJSON(`value=${textarea.value}`, (json: IGetJSON) => {
                        // TODO: Исправить стакаемый список ошибок!
                        remove(qs('#JSON_ERROR_BLOCK'))

                        if (json.result.valid) {
                            setCookie('SP_PLUS_SET', textarea.value, null)
                            document.location.reload()
                        } else {
                            target.appendChild(err)
                            for (let i = 0; i < json.result.errors.length; i++) {
                                let error = ce('div', {
                                    class: 'sp_plus_err_l',
                                    html: `<b>Error:</b> ${json.result.errors[i].message} [Code: ${json.result.errors[i].code}, Sctructure: ${json.result.errors[i].element}]<br />`
                                })
                                err.appendChild(error)
                            }
                        }
                        return false
                    })
                }
            })

            let params = 'value=' + JSON.stringify(_SETTINGS)
            getJSON(params, (json: IGetJSON) => {
                textarea = ce('textarea', {
                    class: 'text-input',
                    id: 'SP_BACKUP_JSON',
                    cols: '17',
                    rows: '65',
                    html: json.result.data
                })

                if (json.result.valid) {
                    target.appendChild(wrap)
                    wrap.appendChild(tiw)
                    tiw.appendChild(cl)
                    cl.appendChild(textarea)
                    let tloader = qs('#SP_JSON_PRELOADER')
                    remove(tloader)
                } else {
                    target.appendChild(err)
                    for (let i = 0; i < json.result.errors.length; i++) {
                        let error = document.createElement('div')
                        error.className = 'sp_plus_err_l'
                        error.innerHTML = `<b>Error:</b> ${json.result.errors[i].message} [Code: ${json.result.errors[i].code}, Sctructure: ${json.result.errors[i].element}]<br />`
                        err.appendChild(error)
                    }
                }

                target.appendChild(wrap)
                wrap.appendChild(tiw)
                tiw.appendChild(cl)
                cl.appendChild(textarea)
                btnDiv.appendChild(delSubm)
                btnDiv.appendChild(chSubm)
                inBefore(btnDiv, qs('#SP_PLUS_ABOUT'))
            })
        } catch (e) {
            error('Ошибка (settingsBackupMenu.ts): ' + e)
        }
    }
}