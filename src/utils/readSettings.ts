import { error } from './console'
import { extend } from './extend'
import { getCookie } from './getCookie'
import { _SETTINGS } from '../types/Settings'

export const readSettings = () => {
    let cookieSet = getCookie('SP_PLUS_SET')

    try {
        if (cookieSet) {
            cookieSet = JSON.parse(cookieSet)
            _SETTINGS.STRINGS = extend(_SETTINGS.STRINGS, cookieSet)
        }
    } catch (e) {
        error('Ошибка (readSettings.ts): ' + e)
    }
}