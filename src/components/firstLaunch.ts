import {
    ce,
    qs,
    logger,
    getCookie,
    setCookie,
    modalMessage
} from '../utils'

import { HOST, BASE_URL } from '../strings'

export const firstLaunch = () => {
    try {

        // показываем приветствие, если отсутсвует кука и если BASE_URL не в залупе!
        if (getCookie('SP_LAUNCH') === undefined &&
            HOST !== 'spaces-blogs.com' &&
            HOST !== 'spac1.net') {

            modalMessage('Спасибо за установку Spaces+', `
                <b style="color: #f86934">ВНИМАНИЕ!</b></br></br>
                Во избежания подделок, которые могут воровать пароли пользователей, скрипт скачивать только с официального <a href="https://spaces-dev.github.io" target="_blank">сайта</a></br></br>
                С вопросами по использованию скрипта, писать в сообщество <a href="${BASE_URL}/soo/extension/" target="_blank">Spaces+</a></br></br>
                `, true)

            let pad = ce('div', {
                className: 'pad_t_a'
            })

            let button = ce('a', {
                href: `${BASE_URL}/settings/?sp_plus_settings=1`,
                className: 'btn btn_white btn_input right sticker-close_btn',
                innerHTML: 'Перейти к настройкам',
                onclick: () => qs('#SP_PLUS_ALERT').remove()
            })

            pad.appendChild(button)

            if (qs('#SP_PLUS_ALERT')) {
                qs('#SP_PLUS_ALERT > .content-item3').appendChild(pad)
            }

            setCookie('SP_LAUNCH', '1')
        }
    } catch (e) {
        logger.error('firstLaunch.ts', e)
    }
}