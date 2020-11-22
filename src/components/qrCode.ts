import {
    ce,
    qs,
    error,
    getPath,
    messageBox
} from '../utils'

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
                        `<img src="https://chart.googleapis.com/chart?cht=qr&chs=256x256&chl=${DATA.SID}" class="sp_img-center"></img>`,
                        true
                    )

                    return false
                }
            })

            moreMenu.appendChild(link)
        }
    } catch (e) {
        error('qrCode.ts', e)
    }
}