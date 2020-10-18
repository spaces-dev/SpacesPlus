import { qs } from '../utils/qs'
import { ce } from '../utils/ce'
import { Device } from '../utils/base'

export const userStatus = (code: string | undefined) => {
    let noAuthorized = ce('div', { html: 'Для работы <b>Spaces+</b> необходима авторизация!' })

    if (Device.id === 1 || Device.id === 2) {
        let unSupported = ce('div', {
            class: 'oh busi',
            style: 'border: 1px solid #ff9a95; background: #fdf3ef',
            html: 'Используемая версия сайта не поддерживается для работы <b>Spaces+</b>'
        })

        if (code === '01001') unSupported.prepend(noAuthorized)
        qs('#main_wrap')?.prepend(unSupported)
        return false
    }

    if ((Device.id === 3 || Device.id === 4) && code === '01001') {
        let messageBox = ce('div', {
            class: 'oh nl system-message',
            style: 'border: 1px solid #ff9a95; background: #fdf3ef'
        })

        messageBox.prepend(noAuthorized)
        qs('#top_info_block')?.prepend(messageBox)
        return false
    }

    return true
}