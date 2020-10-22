export const getHref = () => document.location.href

export const getPath = (name?: 1 | 2 | 3) => {
    let path = document.location.pathname
    let str = path.replace(/\/\s*$/, '').split('/')

    switch (name) {
        case 1:
            return str[1]
        case 2:
            return str[2]
        case 3:
            return str[3]
        default:
            return path
    }
}