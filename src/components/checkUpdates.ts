import { _SETTINGS } from '../types/Settings'
import { CheckUpdates } from '../interfaces/CheckUpdates'

import { ENV, GITHUB, REVISION, OVERRIDE } from '../types/base'

import { ce, qs, http, rever, error, setCookie, messageBox } from '../utils'

export const checkUpdates = () => {
    try {
        http<CheckUpdates>('GET', `https://${ENV ?? GITHUB}/updater.json?r=${REVISION}`, false).then(e => {
            const json = e.parsedBody

            if (e.status === 200 && json?.history) {
                let hideVer = 0

                if (_SETTINGS.e.upVersion) hideVer = _SETTINGS.e.upVersion
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
                            // TODO: any???
                            onclick: (e: any) => {
                                _SETTINGS.e.upVersion = json.history[0].build
                                setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS.e))
                                document.body.removeChild(e.target.parentNode.parentNode.parentNode)
                                return false
                            }
                        })
                        qs('#SP_UPDATER_BUTTONS')!.appendChild(hide)
                    }
                }
            }
        })
    } catch (e) {
        error('Ошибка (checkUpdates.ts): ' + e)
    }
}