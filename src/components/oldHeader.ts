import { qsa } from '../utils'

/**
 * Меняет местами кнопки почты и ленты местами (старое расположение)
 * И по дефолту удаляет надписи
 * @param b {boolean}
 */
export const oldHeader = (b: boolean) => {

    // всегда скрываем надписи разделов
    qsa('span.horiz-menu__link-text').forEach(e => e.remove())

    // кнопки шапки
    let p: any = qsa('a.horiz-menu__link')

    // Клонируем ленту
    let tab1 = p[2].cloneNode(true)

    // Клонируем почту
    let tab2 = p[4].cloneNode(true)

    if (b || p[2].pathname === '/mail/') {
        p[4].replaceWith(tab1)
        p[2].replaceWith(tab2)
    }
}