import { error } from './console'

/**
 * Ищем определенный GET параметр в ссылке
 * @param name 
 */
export const getQuery = (name: string) => {
    let r: string | undefined, query = document.location.search

    try {
        name = name.toLowerCase()
        if (query.toLowerCase().indexOf(name) >= 1) {
            query.substring(1).split('&').forEach((param) => {
                let params = param.split('=')
                if (params[0].toLowerCase() === name) {
                    r = params[1]
                }
            })
        }

        return r
    } catch (e) {
        error('Ошибка (getQuery.ts): ' + e)
    }
}