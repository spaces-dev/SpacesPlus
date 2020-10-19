import { find } from '../utils'

export const oldHeader = () => {
    let navi = find(document.links, { className: 'horiz-menu__link' })

    if (navi) {
        let mail = navi[2].cloneNode(true)
        let lenta = navi[4].cloneNode(true)
        navi[2].replaceWith(lenta)
        navi[4].replaceWith(mail)
    }
}