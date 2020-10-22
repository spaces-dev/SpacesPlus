import { error } from './console'
import { extend } from './extend'
import { getCookie } from './getCookie'
import { _SETTINGS } from '../types/settings'

export const readSettings = () => {
    let cookieSet = getCookie('SP_PLUS_SET')

    try {
        if (cookieSet) {
            cookieSet = JSON.parse(cookieSet)
            // @ts-ignore
            _SETTINGS = extend(_SETTINGS, cookieSet)
        }
    } catch (e) {
        error('Ошибка (readSettings.ts): ' + e)
    }
}