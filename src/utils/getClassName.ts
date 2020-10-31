/**
 * Поиск чего-то там ¯\_(ツ)_/¯
 * getClassName('span.comment_date', false)
 * @param data
 * @param t
 */
export const getClassName = (data: string, t: boolean) => {
    let list = [],
        str = data.split('.'),
        nodes = document.getElementsByTagName(str[0])

    for (let node of nodes) {
        if (node.className.indexOf(str[1]) >= 0 && !t) {
            list.push(node)
        } else if (node.className === str[1] && t) {
            list.push(node)
        }
    }

    return list[0] ? list : null
}