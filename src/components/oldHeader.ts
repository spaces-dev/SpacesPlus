import { qsa } from '../utils'

export const oldHeader = (b: boolean) => {
    qsa('a[class="horiz-menu__link"').forEach((v, k, p) => {

        // Клонируем ленту
        let elem1 = p[2].cloneNode(true)

        // Клонируем почту
        let elem2 = p[4].cloneNode(true)

        // @ts-ignore Костылище!
        if (b || (!b && p[2].pathname === '/mail/')) { p[4].replaceWith(elem1); p[2].replaceWith(elem2) }
    })
}