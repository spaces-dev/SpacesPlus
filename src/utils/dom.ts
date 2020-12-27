import { createElementType, CSSStyle } from '../interfaces/HTMLAttributes'

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
 * @param style
 */
const css = (elem: HTMLElement, style: CSSStyle) => Object.assign(elem.style, style)

export {
    ce,
    qs,
    css,
    qsa
}