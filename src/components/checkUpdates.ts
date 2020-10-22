import { _SETTINGS } from '../types/settings'
import { CheckUpdates } from '../interfaces/CheckUpdates'

import { ENV, GITHUB, REVISION, OVERRIDE } from '../types/strings'

import { ce, qs, rever, error, http, setCookie, messageBox } from '../utils'

/**
 * Получаем историю обновлений
 * @param callback
 */
export const getUpdater = (callback: Function) => {
    try {
        http<CheckUpdates>('GET', `https://${ENV ?? GITHUB}/updater.json?r=${REVISION}`, false).then(e => {
            const json = e.parsedBody

            if (e.status === 200 && json?.history) {
                return callback(json)
            }
        })
    } catch (e) {
        error('Ошибка (getUpdater.ts): ' + e)
    }
}

export const checkUpdates = () => {
    try {
        getUpdater((json: CheckUpdates) => {
            let hideVer = 0

            if (_SETTINGS.upVersion) hideVer = _SETTINGS.upVersion
            OVERRIDE.VERSION = Math.max(hideVer, OVERRIDE.VERSION)
            if (json.history[0].build > OVERRIDE.VERSION) {
                messageBox('Доступна новая версия Spaces+ <sup>' + rever(json.history[0].build) + '</sup><div class="pad_t_a"></div><small class="grey">' + json.history[0].changes + '</small><div id="SP_UPDATER_BUTTONS" class="pad_t_a"><a class="btn btn_green btn_input" href="https://github.com/spaces-dev/' + GITHUB + '/raw/master/spaces-plus.user.js?r=' + REVISION + '" onclick="document.body.removeChild(this.parentNode.parentNode.parentNode); return true"> Обновить</a></div>',
                    false,
                    true
                )

                if (qs('#SP_PLUS_ALERT')) {
                    const hide = ce('a', {
                        href: '#',
                        class: 'btn btn_white btn_input right sticker-close_btn',
                        html: 'Больше не показывать',
                        onclick: (e: any) => {
                            _SETTINGS.upVersion = json.history[0].build
                            setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                            document.body.removeChild(e.target.parentNode.parentNode.parentNode)
                            return false
                        }
                    })
                    qs('#SP_UPDATER_BUTTONS')!.appendChild(hide)
                }
            }
        })
    } catch (e) {
        error('Ошибка (checkUpdates.ts): ' + e)
    }
}