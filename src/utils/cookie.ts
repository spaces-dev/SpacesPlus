import { HOST } from '../strings'
import { extend } from './extend'

/**
 * Получение куки
 * @param name
 */
function getCookie(name: string): string | undefined {
  let matches = document.cookie.match(
    new RegExp(
      `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`
    )
  )

  return matches ? decodeURIComponent(matches[1]!) : undefined
}

/**
 * Создание куки
 * @param name
 * @param value
 */
function setCookie(key: string, value: string | null, opts?: any) {
  opts = extend(
    {
      path: '/',
      expires: 365,
      secure: false,
      domain: '.' + HOST
    },
    opts
  )

  if (opts.expires && !(opts.expires instanceof Date))
    opts.expires = new Date(+new Date() + 1000 * 3600 * 24 * opts.expires)
  let query =
    value !== null
      ? encodeURIComponent(key) + '=' + encodeURIComponent(value)
      : encodeURIComponent(key) + '='

  if (opts.expires) query += '; expires=' + opts.expires.toUTCString()
  if (opts.domain) query += '; domain=' + opts.domain
  if (opts.path) query += '; path=' + opts.path
  if (opts.secure) query += '; secure'
  document.cookie = query
}

/**
 * Удаляем куку
 * @param name
 */
function delCookie(name: string) {
  setCookie(name, null, { expires: -1 })
}

export { getCookie, setCookie, delCookie }
