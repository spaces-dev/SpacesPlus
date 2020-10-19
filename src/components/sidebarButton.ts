import { qs, ce, find, insertAfter } from '../utils'

import { HTTP, BASE_URL } from '../types/base'

export const sidebarButton = () => {
    let button = qs('#SP_SETTINGS_BUTTON')
    let disableIcons = find(document.getElementsByTagName('span'), { className: 's_i s_i_exit' })
    // TODO: type
    let target: any = find(document.links, { href: `${HTTP}//${BASE_URL}/services/?` })

    if (target && !button) {
        let link = ce('li', {
            class: 'li',
            id: 'SP_SETTINGS_BUTTON',
            html: `<a href="${HTTP}//${BASE_URL}/settings/?sp_plus_settings=1" title="Настройки Spaces+">${(disableIcons ? '<span class="sp sp-ico"></span>' : '')}<span class="m s_i_text"> Spaces+</span></a>`
        })

        target = target[0].parentNode
        insertAfter(link, target)

        if (target.nextElementSibling.nodeName === 'BR') {
            insertAfter(ce('br', null), link)
        }
    }
}