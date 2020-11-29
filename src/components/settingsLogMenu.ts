import { ce, qs, rever, logger } from '../utils'

import { getUpdater } from './checkUpdates'
import { ICheckUpdates } from '../interfaces/CheckUpdates'

import { HTTP } from '../strings'

export const settingsLogMenu = (id: string) => {
    window.scrollTo(0, 0)
    const target = qs(id)

    if (target) {
        try {
            target.innerHTML = ''

            let wrap = ce('div', {
                class: 'wbg error__item_wrapper sp_plus_c_wrap'
            })

            let pad = ce('div', {
                class: 'pad_t_a'
            })

            let container = ce('div', {
                class: 'js-input_error_wrap'
            })

            let preloader = ce('div', {
                class: 't_center',
                id: 'SP_JSON_PRELOADER',
                html: `<img src="${HTTP}//spac.me/i/preloader.gif">`
            })

            container.appendChild(pad)
            wrap.appendChild(container)
            target.appendChild(wrap)
            wrap.appendChild(preloader)

            getUpdater((json: ICheckUpdates) => {

                for (let history of json.history) {
                    let label = ce('label', {
                        class: 'label sp_plus_line_c',
                        html: `v${rever(history.build)}<div class="label__desc">${history.date}</div>`
                    })

                    let changes = ce('div', {
                        class: 'grey sp_plus_c_desc',
                        html: history.changes
                    })

                    pad.appendChild(label)
                    pad.appendChild(changes)
                }

                qs('#SP_JSON_PRELOADER').remove()
            })
        } catch (e) {
            logger.error('settingsLogMenu.ts', e)
        }
    }
}