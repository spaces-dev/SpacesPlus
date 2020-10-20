import { extend } from './extend'
import { BASE_URL } from '../types/base'

// TODO: Refactoring & interface
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