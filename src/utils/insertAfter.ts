export const insertAfter = (elem: any, refElem: any) => {
    let parent = refElem.parentNode,
        next = refElem.nextSibling

    if (parent) {
        if (next) {
            return parent.insertBefore(elem, next)
        } else {
            return parent.appendChild(elem)
        }
    }
}