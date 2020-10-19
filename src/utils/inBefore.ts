export const inBefore = (elem: HTMLElement, refElem: any) => {
    let parent = refElem.parentNode
    return parent.insertBefore(elem, refElem)
}