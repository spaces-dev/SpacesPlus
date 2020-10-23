export const insertAfter = (elem: any, refElem: any) => {
    let parent = refElem.parentNode,
        next = refElem.nextSibling

    if (parent) {
        return next ? parent.insertBefore(elem, next) : parent.appendChild(elem)
    }
}