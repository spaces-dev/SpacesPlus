import { ce, setCookie, insertAfter, error } from '../utils'

import { friendsOnline } from './friendsOnline'
import { _SETTINGS } from '../types/Settings'

export const settingsFriend = (e?: any) => {
    try {
        let frMaxWrap = ce('div', { id: 'SP_PLUS_MAXFRIENDS' })
        let div = ce('div', { style: 'padding: 11px 15px' })
        let label = ce('label', { class: 'stnd-link', style: 'border-top: unset' })

        let frMax = ce('input', {
            type: 'text',
            class: 'text-input',
            size: 4,
            attr: { maxlength: 2 },
            value: _SETTINGS.e.friendsOnMax
        })

        frMax.onchange = frMax.oninput = (e: any) => {
            if (!isNaN(e.target.value)) {
                let value = Number(e.target.value)
                frMax.className = 'text-input'
                if (value > 15 || value < 1) {
                    value = 10
                    frMax.className = 'text-input sp-input-error'
                }
                /*
                * TODO: ???
                * countFriends = 0
                */
               _SETTINGS.e.friendsOnMax = value
                setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS.e))
                console.log(_SETTINGS.e.friendsOnMax)
                friendsOnline(true)
            } else {
                frMax.className = 'text-input sp-input-error'
            }
        }

        let frMaxLbl = ce('label', {
            html: 'Выводить друзей:<div class="label__desc">от 1 до 15</div>',
            class: 'label'
        })

        let frListSH = ce('input', {
            type: 'checkbox',
            id: 'sp_friends_list_sh',
            class: 'sp-checkbox-square',
            checked: _SETTINGS.e.friendsListSH,
            onclick: (e: any) => {
                _SETTINGS.e.friendsListSH = e.target.checked
                setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS.e))
            }
        })

        let frListSHLbl = ce('label', {
            attr: { 'for': 'sp_friends_list_sh' },
            html: 'Скрывать/показывать по клику на счётчике'
        })

        div.appendChild(frMaxLbl)
        div.appendChild(frMax)
        label.appendChild(frListSH)
        label.appendChild(frListSHLbl)
        frMaxWrap.appendChild(div)
        frMaxWrap.appendChild(label)
        insertAfter(frMaxWrap, e.parentNode)
    } catch (e) {
        error('Ошибка (settingsFriends.ts): ' + e)
    }
}