import {
    ce,
    qs,
    http,
    error,
    rever,
    remove,
    messageBox,
    setSettings
} from '../utils'

import { ICheckUpdates } from '../interfaces/CheckUpdates'

import { _SETTINGS } from '../settings'
import { ENV_PATH, REVISION, OVERRIDE } from '../strings'

/**
 * Получаем историю обновлений
 * @param callback
 */
export const getUpdater = (callback: Function) => {
    try {
        http<ICheckUpdates>('GET', `${ENV_PATH}/updater.json?r=${REVISION}`, false).then(e => {
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
        getUpdater((json: ICheckUpdates) => {
            let hideVer = 0

            if (_SETTINGS.upVersion) hideVer = _SETTINGS.upVersion
            OVERRIDE.VERSION = Math.max(hideVer, OVERRIDE.VERSION)
            if (json.history[0].build > OVERRIDE.VERSION) {
                messageBox(`Доступна новая версия Spaces+ ${rever(json.history[0].build)}`, `<div class="pad_t_a"></div>${json.history[0].changes}<div id="SP_UPDATER_BUTTONS" class="pad_t_a"><a class="btn btn_green btn_input" href="${ENV_PATH}/spaces-plus.user.js?r=${REVISION}" onclick="document.body.removeChild(this.parentNode.parentNode.parentNode.parentNode)">Обновить</a></div>`, true)

                if (qs('#SP_PLUS_ALERT')) {
                    const hide = ce('a', {
                        href: '#',
                        class: 'btn btn_white btn_input right sticker-close_btn',
                        html: 'Больше не показывать',
                        onclick: () => {
                            setSettings('upVersion', json.history[0].build)
                            remove(qs('#SP_PLUS_ALERT'))
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