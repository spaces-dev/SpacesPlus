import { qs, ce } from '../utils'

import { DEVICE } from '../strings'

export const userStatus = (code: string | undefined) => {
    let noAuthorized = ce('div', {
        innerHTML: 'Для работы <b>Spaces+</b> необходима авторизация!'
    })

    if (DEVICE.id === 1 || DEVICE.id === 2) {
        let unSupported = ce('div', {
            className: 'oh busi',
            innerHTML: 'Используемая версия сайта не поддерживается для работы <b>Spaces+</b>',
            style: {
                border: '1px solid #ff9a95',
                background: '#fdf3ef'
            }
        })

        if (code === '01001') unSupported.prepend(noAuthorized)
        qs('#main_wrap').prepend(unSupported)
        return false
    }

    if ((DEVICE.id === 3 || DEVICE.id === 4) && code === '01001') {
        let messageBox = ce('div', {
            className: 'oh nl system-message',
            style: {
                border: '1px solid #ff9a95',
                background: '#fdf3ef'
            }
        })

        messageBox.prepend(noAuthorized)
        qs('#top_info_block').prepend(messageBox)
        return false
    }

    return true
}