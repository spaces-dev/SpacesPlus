export const getParams = (url: string) => {
    const params: any = {}
    let parser = document.createElement('a')
    parser.href = url
    let query = parser.search.substring(1)
    let vars = query.split('&')
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=')
        params[pair[0]] = decodeURIComponent(pair[1])
    }
    return params
}