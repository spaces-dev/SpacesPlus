import { css } from './css'

// TODO: interface
export const ce = (name: any, params: any): HTMLElement => {
    const Elem = document.createElement(name)

    for (let i in params) {
        if (i === 'style') {
            css(Elem, params[i])
        } else if (i === 'attr') {
            for (let j in params[i]) {
                Elem.setAttribute(j, params[i][j])
            }
        } else if (i === 'html') {
            Elem.innerHTML = params[i]
        } else if (i === 'class') {
            Elem.className = params[i]
        }
    }

    return Elem
}