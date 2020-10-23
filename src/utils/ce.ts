import { css } from './css'

// TODO: interface
export const ce = (name: any, params?: any): HTMLElement => {
    let elem = document.createElement(name)

    for (let i in params) {
        switch (i) {
            case 'html':
                elem.innerHTML = params[i]
                break
            case 'style':
                css(elem, params[i])
                break
            case 'class':
                elem.className = params[i]
                break
            case 'attr':
                for (let j in params[i]) { elem.setAttribute(j, params[i][j]) }
                break
            default:
                elem[i] = params[i]
        }
    }

    return elem
}