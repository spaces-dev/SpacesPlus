import { ce, setCookie, insertAfter, error } from '../utils'

import { friendsOnline } from './friendsOnline'
import { _SETTINGS } from '../settings'

export const settingsFriends = (e?: any) => {
    try {
        let frMaxWrap = ce('div', { id: 'SP_PLUS_MAXFRIENDS' })
        let div = ce('div', { style: 'padding: 11px 15px' })

        let frMax = ce('input', {
            type: 'text',
            class: 'text-input',
            size: 4,
            attr: { maxlength: 2 },
            value: _SETTINGS.friendsOnMax
        })

        frMax.addEventListener('change', (e: any) => {
            if (!isNaN(e.target.value)) {
                let value = Number(e.target.value)
                frMax.className = 'text-input'
                if (value > 15 || value < 1) {
                    value = 10
                    frMax.className = 'text-input sp-input-error'
                }
                _SETTINGS.friendsOnMax = value
                setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                friendsOnline(true)
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