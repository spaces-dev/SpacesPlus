import { BASE_URL } from '../strings'
import { ce, qs, qsa } from '../utils'

export const sidebarButton = () => {
  // Место для вставки кнопки
  qsa(`li.li>a[href^="${BASE_URL}/services/"]`).forEach((e) => {
    // Включены ли иконки на левой панели
    let icon = qs('span.s_i_exit') ? '<span class="sp sp-ico"></span>' : ''

    // Создаем кнопку быстрого доступа в настройки Spaces+
    let link = ce('li', {
      className: 'li',
      innerHTML: `
                <a href="${BASE_URL}/settings/?sp_plus_settings=1" title="Настройки Spaces+">
                ${icon}
                <span class="m s_i_text"> Spaces+</span></a>
            `
    })

    e.parentElement?.after(link)
  })
}
