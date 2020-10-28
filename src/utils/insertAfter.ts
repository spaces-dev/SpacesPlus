/**
 * Используется для добавления HTMLElement после определенного элементом в DOM
 * Пример использования c помощью ce.ts и qs.ts:
 * * let elem = ce('div', {
 * *     html: 'Hello, World!'
 * * })
 * * 
 * * insertAfter(elem, qs('#main_wrap'))
 * @param elem 
 * @param refElem 
 */
export const insertAfter = (elem: any, refElem: any) => {
    let parent = refElem.parentNode,
        next = refElem.nextSibling

    return parent && next ? parent.insertBefore(elem, next) : parent.appendChild(elem)
}