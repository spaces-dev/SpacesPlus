import { trim } from './trim'

/**
 * Используется в ce.ts для создание стилей
 * @param elem 
 * @param css 
 */
export const css = (elem: any, css: string) => {
    let list = css.split(';')

    for (let i in list) {
        if (trim(list[i]) !== '') {
            let valList = trim(list[i]).split(':')

            if (valList[0].indexOf('-') !== -1) {
                valList[0] = valList[0].replace(/\-([a-z]{1})/g, (e: any) => {
                    return e.replace('-', '').toUpperCase()
                })
            }

            if (valList[1] !== undefined) {
                elem.style[trim(valList[0])] = trim(valList[1])
            }
        }
    }
}