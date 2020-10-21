import { ce, qs, error, remove, rever, getUpdater } from '../utils'

import { CheckUpdates } from '../interfaces/CheckUpdates'

import { HTTP } from '../types/strings'

export const changelogMenu = (id: string) => {
    window.scrollTo(0, 0)
    const target = qs(id)

    if (target) {
        try {
            target.innerHTML = ''

            let wrap = ce('div', { class: 'wbg error__item_wrapper sp_plus_c_wrap' })
            let div = ce('div', { class: 'pad_t_a' })
            let container = ce('div', { class: 'js-input_error_wrap' })
            let preloader = ce('div', { class: 't_center', id: 'SP_JSON_PRELOADER', html: `<img src="${HTTP}//spac.me/i/preloader.gif">` })

            container.appendChild(div)
            wrap.appendChild(container)
            target.appendChild(wrap)
            wrap.appendChild(preloader)

            getUpdater((json: CheckUpdates) => {
                for (let i = 0; i < json.history.length; i++) {
                    let label = ce('label', {
                        class: 'label sp_plus_line_c',
                        html: `v${rever(json.history[i].build)}<div class="label__desc">${json.history[i].date}</div>`
                    })

                    let changes = ce('div', {
                        class: 'grey sp_plus_c_desc',
                        html: json.history[i].changes
                    })

                    div.appendChild(label)
                    div.appendChild(changes)
                }

                remove(qs('#SP_JSON_PRELOADER'))
            })
        } catch (e) {
            error('Ошибка (changelogMenu.ts): ' + e)
        }
    }
}