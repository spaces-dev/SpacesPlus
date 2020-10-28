import { extend } from './extend'
import { BASE_URL } from '../strings'

/**
 * Создание куки
 * @param key Название куки
 * @param value Строка с значениеми куки должна быть как JSON.stringfy()
 * @param opts { expires: -1 } для сброса (используется в delCookie.ts)
 */
export const setCookie = (key: string, value: string | null, opts?: any) => {
    opts = extend({
        path: '/',
        expires: 365,
        secure: false,
        domain: '.' + BASE_URL
    }, opts)
    if (opts.expires && !(opts.expires instanceof Date)) opts.expires = new Date(+new Date + 1000 * 3600 * 24 * opts.expires)
    let query = value !== null ? encodeURIComponent(key) + '=' + encodeURIComponent(value) : encodeURIComponent(key) + '='

    if (opts.expires) query += '; expires=' + opts.expires.toUTCString()
    if (opts.domain) query += '; domain=' + opts.domain
    if (opts.path) query += '; path=' + opts.path
    if (opts.secure) query += '; secure'
    document.cookie = query
}