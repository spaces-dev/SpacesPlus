import { ce, setCookie, insertAfter, error } from '../utils'

import { friendsOnline } from './friendsOnline'
import { _SETTINGS } from '../settings'

export const settingsFriends = (e?: any) => {
    try {
        let frMaxWrap = ce('div', { id: 'SP_PLUS_MAXFRIENDS' })
        let div = ce('div', { class: 'sp_settings-wrap' })

        let frMax = ce('input', {
            type: 'text',
            class: 'text-input',
            size: 4,
            attr: { maxlength: 2 },
            value: _SETTINGS.friendsSet.max
        })

        frMax.addEventListener('change', (e: any) => {
            if (/^([1-9]|1[0-5])$/i.test(e.target.value)) {
                _SETTINGS.friendsSet.max = e.target.value
                setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                friendsOnline(true)
                frMax.className = 'text-input'
            } else {
                frMax.className = 'text-input sp-input-error'
            }
        })

        let frMaxLbl = ce('label', {
            html: 'Выводить друзей:<div class="label__desc">от 1 до 15</div>',
            class: 'label'
        })

        div.appendChild(frMaxLbl)
        div.appendChild(frMax)
        frMaxWrap.appendChild(div)
        insertAfter(frMaxWrap, e.parentNode)
    } catch (e) {
        error('Ошибка (settingsFriends.ts): ' + e)
    }
}