export const getPath = (name?: 'method' | 'index' | 'target') => {
    let path = document.location.pathname
    let str = path.replace(/\/\s*$/, '').split('/')

    switch (name) {
        case 'method':
            return str[1]
        case 'index':
            return str[2]
        case 'target':
            return str[3]
        default:
            return path
    }
}