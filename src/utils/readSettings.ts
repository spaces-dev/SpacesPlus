import { error, extend, getCookie } from './index'

import { _SETTINGS } from '../settings'

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