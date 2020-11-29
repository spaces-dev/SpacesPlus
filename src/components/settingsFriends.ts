import { ce, logger, setSettings } from '../utils'

import { _SETTINGS } from '../settings'

export const settingsFriends = (e: Element) => {
    try {
        let frMaxWrap = ce('div', {
            id: 'SP_PLUS_MAXFRIENDS'
        })

        let div = ce('div', {
            class: 'sp_settings-wrap'
        })

        let frMax = ce('input', {
            type: 'text',
            class: 'text-input',
            size: 4,
            attr: { maxlength: 2 },
            value: _SETTINGS.friendsSet.max
        })

        frMax.addEventListener('change', (e: any) => {
            if (/^([1-9]|1[0-5])$/i.test(e.target.value)) {
                setSettings('friendsSet.max', e.target.value)
                frMax.classList.remove('sp-input-error')
            } else {
                frMax.classList.add('sp-input-error')
            }
        })

        let frMaxLbl = ce('label', {
            html: 'Выводить друзей:<div class="label__desc">от 1 до 15</div>',
            class: 'label'
        })

        div.appendChild(frMaxLbl)
        div.appendChild(frMax)
        frMaxWrap.appendChild(div)
        e.parentElement?.after(frMaxWrap)
    } catch (e) {
        logger.error('settingsFriends.ts', e)
    }
}