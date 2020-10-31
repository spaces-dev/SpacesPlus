import { ce, setCookie, insertAfter } from '../utils'

import { _SETTINGS } from '../settings'

export const settingsRecentSmiles = (e: any) => {

    let masWarp = ce('div', { id: 'SP_RECENTS_SETTINGS', class: 'sp_settings-wrap' })

    let maxSabeLbl = ce('label', {
        html: 'Сохранять смайликов:<div class="label__desc">от 10 до 60</div>',
        class: 'label'
    })

    let maxSave = ce('input', {
        type: 'text',
        class: 'text-input',
        size: 4,
        attr: { maxlength: 2 },
        value: _SETTINGS.recentSmiles.max
    })

    maxSave.addEventListener('change', (e: any) => {
        if (/^([1-5][0-9]|60)$/i.test(e.target.value)) {
            _SETTINGS.recentSmiles.max = e.target.value
            setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
            maxSave.className = 'text-input'
        } else {
            maxSave.className = 'text-input sp-input-error'
        }
    })

    masWarp.appendChild(maxSabeLbl)
    masWarp.appendChild(maxSave)
    insertAfter(masWarp, e.parentNode)
}