import { trim } from './trim'

import { createElementType } from '../interfaces/HTMLAttributes'

/**
 * Создание HTML объекта
 * @param tag
 * @param attributes
 */
const ce: createElementType = (tag, attributes) => {
    const elem = document.createElement(tag)

    Object.assign(elem, attributes)
    Object.assign(elem.style, attributes?.style)

    return elem
}

/**
 * querySelector _/ ( •_•) /
 * @param e
 */
const qs = (e: string) => (<HTMLElement>document.querySelector(e))

/**
 * querySelectorAll ᕦ(ツ)ᕤ
 * @param e
 */
const qsa = (e: string) => <NodeListOf<HTMLElement>>document.querySelectorAll(e)

/**
 * Используется для присваивания стилей HTML элементам
 * @param elem
 * @param css
 */
const css = (elem: HTMLElement, css: string) => {
    const list = css.split(';')

    for (let i in list) {
        if (trim(list[i]) !== '') {
            const valList = trim(list[i]).split(':')

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

export {
    ce,
    qs,
    css,
    qsa
}