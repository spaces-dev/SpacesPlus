import { qsa } from '../utils'

/**
 * ? Меняет местами кнопки почты и ленты местами (старое расположение)
 * ! molimawka, Я был дураком, Извини! ¯\_(ツ)_/¯
 * @param b On/Off
 */
export const oldHeader = (b: boolean) => {

    // кнопки шапки
    let p: any = qsa('a[class="horiz-menu__link"')

    // Клонируем ленту
    let tab1 = p[2].cloneNode(true)

    // Клонируем почту
    let tab2 = p[4].cloneNode(true)

    if (b || p[2].pathname === '/mail/') {
        p[4].replaceWith(tab1)
        p[2].replaceWith(tab2)
    }
}