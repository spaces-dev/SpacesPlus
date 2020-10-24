import { css } from './css'

/**
 * Основополагающая функция для создания DOM 
 * ? Пример работы:
 * * let div = ce('div', {
 * *     html: 'Hello, World!',
 * *     class: 'example classes',
 * *     style: 'background-color: red; padding: 10px; text-align: center',
 * *     id: 'input',
 * *     attr: { example: 'attribute' }
 * * })
 * *
 * * Вставляем в начале body
 * * document.body.prepend(div)
 * @param name 
 * @param params 
 */
export const ce = (name: any, params?: any): HTMLAnchorElement => {
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