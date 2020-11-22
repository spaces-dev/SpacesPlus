import {
    ce,
    qs,
    error,
    getPath,
    messageBox
} from '../utils'

import Qr from 'qrcode'

import { DATA } from '../strings'

export const qrCode = () => {
    try {

        let moreMenu = qs('#more_menu > div > div')

        if (getPath(1) === 'mysite' && moreMenu && !qs('#SP_QR_BUTTON')) {

            let link = ce('a', {
                class: 'stnd-link',
                id: 'SP_QR_BUTTON',
                html: `
                    <span class="sp sp-qrcode"></span>
                    <span class="t js-text">Получить QR-код</span>
                `,
                onclick: () => {
                    messageBox(
                        'Сканируйте QR-код c телефона',
                        '<canvas id="SP_QR_CODE" class="sp_img-center"></canvas>',
                        true
                    )

                    // генерируем qr-код
                    Qr.toCanvas(qs('#SP_QR_CODE'), DATA.SID)

                    return false
                }
            })

            moreMenu.appendChild(link)
        }
    } catch (e) {
        error('qrCode.ts', e)
    }
}