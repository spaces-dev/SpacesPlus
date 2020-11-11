import {
    ce,
    qs,
    error,
    remove,
    getCookie,
    setCookie,
    messageBox
} from '../utils'

import { SPACES } from '../strings'

export const firstLaunch = () => {
    try {
        if (getCookie('SP_LAUNCH') === undefined) {

            messageBox('Спасибо за установку Spaces+', `
                <b style="color: #f86934">ВНИМАНИЕ!</b></br></br>
                Во избежания подделок, которые могут воровать пароли пользователей, скрипт скачивать только с официального <a href="https://spaces-dev.github.io" target="_blank">сайта</a></br></br>
                С вопросами по использованию скрипта, писать в сообщество <a href="${SPACES}/soo/extension/" target="_blank">Spaces+</a></br></br>
                <div id="SP_LAUNCH_BUTTON" class="pad_t_a"></div>
                `, true)

            if (qs('#SP_LAUNCH_BUTTON')) {
                const goTo = ce('a', {
                    href: `${SPACES}/settings/?sp_plus_settings=1`,
                    class: 'btn btn_white btn_input right sticker-close_btn',
                    html: 'Перейти к настройкам',
                    onclick: () => remove(qs('#SP_PLUS_ALERT'))
                })
                qs('#SP_LAUNCH_BUTTON').appendChild(goTo)
            }

            setCookie('SP_LAUNCH', '1')
        }
    } catch (e) {
        error('Ошибка (firstLaunch.ts): ' + e)
    }
}