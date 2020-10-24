export const insertAfter = (elem: any, refElem: any) => {
    let parent = refElem.parentNode,
        next = refElem.nextSibling

    return parent && next ? parent.insertBefore(elem, next) : parent.appendChild(elem)
}