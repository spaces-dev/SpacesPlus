import { error } from './console'
import { extend } from './extend'
import { getCookie } from './getCookie'
import { _SETTINGS } from '../types/defaultSettings'

export const readSettings = () => {
    let cookieSet = getCookie('SP_PLUS_SET')

    try {
        if (cookieSet) {
            cookieSet = JSON.parse(cookieSet)
            // TODO: interface
            // @ts-ignore
            _SETTINGS = extend(_SETTINGS, cookieSet)
        }
    } catch (e) {
        error('Ошибка (readSettings.ts): ' + e)
    }
}