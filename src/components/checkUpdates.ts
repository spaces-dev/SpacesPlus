import { _SETTINGS } from '../types/Settings'
import { CheckUpdates } from '../interfaces/CheckUpdates'

import { ENV, GITHUB, REVISION, OVERRIDE } from '../types/base'

import { ce, qs, http, rever, error, setCookie, messageBox } from '../utils'

export const checkUpdates = () => {
    try {
        http<CheckUpdates>('GET', `https://${ENV ?? GITHUB}/updater.json?r=${REVISION}`, false).then((e) => {
            if (e.status === 200) {
                let hideVer = 0, json = e.parsedBody

                if (_SETTINGS.STRINGS.upVersion) hideVer = _SETTINGS.STRINGS.upVersion
                OVERRIDE.VERSION = Math.max(hideVer, OVERRIDE.VERSION)
                if (json!.history[0].build > OVERRIDE.VERSION) {
                    messageBox('Доступна новая версия Spaces+ <sup>' + rever(json!.history[0].build) + '</sup><div class="pad_t_a"></div><small class="grey">' + json!.history[0].changes + '</small><div id="SP_UPDATER_BUTTONS" class="pad_t_a"><a class="btn btn_green btn_input" href="https://github.com/spaces-dev/' + GITHUB + '/raw/master/spaces-plus.user.js?r=' + REVISION + '" onclick="document.body.removeChild(this.parentNode.parentNode.parentNode); return true"> Обновить</a></div>',
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
                                _SETTINGS.STRINGS.upVersion = json!.history[0].build
                                let jsonSet = JSON.stringify(_SETTINGS.STRINGS)
                                setCookie('SP_PLUS_SET', jsonSet, null)
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