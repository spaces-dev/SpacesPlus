import { error, extend, getCookie, setCookie } from './index'

import { _SETTINGS } from '../settings'

/**
 * Используется для инициализации настроек скрипта
 */
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

/**
 * Используется для изменения настроек
 */
export const setSettings = (key: string, value: string | number | boolean) => {
    try {

        if (key.indexOf('.') !== -1) {

            let i = key.split('.')

            _SETTINGS[i[0]][i[1]] = value
        } else {
            _SETTINGS[key] = value
        }

        setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
    } catch (e) {
        error('Ошибка (setSettings.ts): ' + e)
    }
}