import { trim } from './trim'

// TODO: interface
export const css = (elem: any, css: any) => {
    let list = css.split(';')

    for (let i in list) {
        if (trim(list[i]) !== '') {
            let valList = trim(list[i]).split(':')

            if (valList[0].indexOf('-') >= 0) {
                valList[0] = valList[0].replace(/\-([a-z]{1})/g, function (e) {
                    return e.toUpperCase()
                })
            }

            if (typeof valList[1] !== 'undefined') {
                elem.style[trim(valList[0])] = trim(valList[1])
            }
        }
    }
}