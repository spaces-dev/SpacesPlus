import { find } from '../utils'

export const oldHeader = (b: boolean) => {
    let navi = find(document.links, { className: 'horiz-menu__link' })

    if (navi) {
        let elem1 = navi[2].cloneNode(true)
        let elem2 = navi[4].cloneNode(true)

        if (b || !b && navi[2].pathname === '/mail/') {
            navi[4].replaceWith(elem1)
            navi[2].replaceWith(elem2)
        }
    }
}