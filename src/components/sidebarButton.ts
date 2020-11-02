import { qs, ce, qsa, insertAfter } from '../utils'

import { SPACES } from '../strings'

export const sidebarButton = () => {

    // Место для вставки кнопки
    qsa(`li.li>a[href*="${SPACES}/services/"]`).forEach(e => {

        // Включены ли иконки на левой панели
        let disableIcons = !!qs('span.s_i_exit') ? '<span class="sp sp-ico"></span>' : ''

        // Создаем кнопку быстрого доступа в настройки Spaces+
        let link = ce('li', {
            class: 'li',
            html: `<a href="${SPACES}/settings/?sp_plus_settings=1" title="Настройки Spaces+">${disableIcons}<span class="m s_i_text"> Spaces+</span></a>`
        })

        insertAfter(link, e.parentElement)
    })
}