/**
 * Используется для добавления HTMLElement перед определенным элементом в DOM
 * Пример использования c помощью ce.ts и qs.ts:
 * * let elem = ce('div', {
 * *     html: 'Hello, World!'
 * * })
 * * 
 * * inBefore(elem, qs('#main_wrap'))
 * @param elem 
 * @param refElem 
 */
export const inBefore = (elem: HTMLElement, refElem: any) => {
    let parent = refElem.parentNode
    return parent.insertBefore(elem, refElem)
}