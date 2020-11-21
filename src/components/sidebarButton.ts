import { qs, ce, qsa } from '../utils'

import { SPACES } from '../strings'

export const sidebarButton = () => {

    // Место для вставки кнопки
    qsa(`li.li>a[href^="${SPACES}/services/"]`).forEach(e => {

        // Включены ли иконки на левой панели
        let icon = qs('span.s_i_exit') ? '<span class="sp sp-ico"></span>' : ''

        // Создаем кнопку быстрого доступа в настройки Spaces+
        let link = ce('li', {
            class: 'li',
            html: `<a href="${SPACES}/settings/?sp_plus_settings=1" title="Настройки Spaces+">${icon}<span class="m s_i_text"> Spaces+</span></a>`
        })

        e.parentElement?.after(link)
    })
}