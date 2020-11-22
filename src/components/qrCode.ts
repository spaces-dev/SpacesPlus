import {
    ce,
    qs,
    error,
    getPath,
    messageBox
} from '../utils'

import { DATA, HTTP } from '../strings'

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
                        `<div id="SP_QR_CODE"><img src="${HTTP}//spac.me/i/preloader.gif" class="sp_img-center" id="SP_QR_LOADER"></div>`,
                        true
                    )

                    // https://developers.google.com/chart/infographics/docs/qr_codes
                    let qr = qrCodeLoader(`https://chart.googleapis.com/chart?cht=qr&chs=256x256&chl=${DATA.SID}`),
                        loader = qs('#SP_QR_LOADER'),
                        target = qs('#SP_QR_CODE')

                    qr.then(e => {
                        loader.remove()
                        target.appendChild(e)

                        target.appendChild(ce('ol', {
                            html: `
                                <li>Запустите <b>OpenSpaces</b> на телефоне</li>
                                <li>На странице авторизации нажмите «<b>Login by QR code</b>»</li>
                                <li>Сканируйте этот код для авторизации</li>
                            `
                        }))
                    })

                    return false
                }
            })

            moreMenu.appendChild(link)
        }
    } catch (e) {
        error('qrCode.ts', e)
    }
}

const qrCodeLoader = (url: string): Promise<Element> => {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.src = url
        image.className = 'sp_img-center'
        image.onload = () => resolve(image)
        image.onerror = () => reject(new Error('loading error'))
    })
}