import { trim } from './trim'

/**
 * Используется для создание стилей
 * @param elem 
 * @param css 
 */
export const css = (elem: HTMLElement, css: string) => {
    let list = css.split(';')

    for (let i in list) {
        if (trim(list[i]) !== '') {
            let valList = trim(list[i]).split(':')

            if (valList[0].indexOf('-') !== -1) {
                valList[0] = valList[0].replace(/\-([a-z]{1})/g, (e: string) => {
                    return e.replace('-', '').toUpperCase()
                })
            }

            if (valList[1] !== undefined) {
                elem.style[trim(valList[0])] = trim(valList[1])
            }
        }
    }
}