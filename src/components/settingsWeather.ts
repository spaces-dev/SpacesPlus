import {
    ce,
    qs,
    http,
    trim,
    error,
    remove,
    setCookie,
    messageBox,
    insertAfter
} from '../utils'

import { IWhois } from '../interfaces/Whois'
import { IWeather } from '../interfaces/Weather'

import { _SETTINGS } from '../settings'

/**
 * Инициализация выпадающего доп. меню настроек виджета погоды
 * @param e #weather
 */
export const settingsWeather = async (e: any) => {

    /**
     * Отключаем скрытие правого меню, если оно включено
     */
    if (_SETTINGS.hrightbar) qs('#hrightbar').click()

    /**
     * Инициализация ¯\_(ツ)_/¯
     * Получаем город
     */
    if (_SETTINGS.weatherSettings.city === null) {
        try {
            await http<IWhois>('GET', 'https://ipwhois.app/json/?objects=city,success&lang=ru', false).then(e => {
                const json = e.parsedBody

                if (json?.success) {
                    _SETTINGS.weatherSettings.city = json.city
                    setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                    getWeather()
                } else {
                    messageBox('Ошибка ipwhois', 'Обратитесь к разработчику!', true)
                }
            })
        } catch (e) {
            error('Ошибка (ipwhois): ' + e)
        }
    }

    let masWarp = ce('div', { id: 'SP_WEATHER_SETTINGS', class: 'sp_settings-wrap' })

    let locationLbl = ce('label', {
        html: 'API-Ключ:<div class="label__desc"><a href="https://openweathermap.org/appid" target="_blank">Получить ключ</a></div>',
        class: 'label'
    })

    let apiKey = ce('input', {
        type: 'text',
        class: 'text-input',
        style: 'margin-bottom: 7px',
        size: '32',
        value: _SETTINGS.weatherSettings.key
    })

    apiKey.addEventListener('keypress', (e: any) => {
        if (e.keyCode === 13) {
            if (/^[a-f0-9]{32}$/i.test(e.target.value) || trim(e.target.value) !== '') {
                _SETTINGS.weatherSettings.key = e.target.value
                setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                getWeather()
                apiKey.className = 'text-input'
            } else {
                apiKey.className = 'text-input sp-input-error'
            }
        }
    })

    let cityLbl = ce('label', { html: 'Город:', class: 'label' })

    let cityInp = ce('input', {
        type: 'text',
        class: 'text-input',
        style: 'margin-bottom: 7px',
        size: '32',
        id: 'SP-CITY-INPUT',
        value: _SETTINGS.weatherSettings.city
    })

    cityInp.addEventListener('keypress', (e: any) => {
        if (e.keyCode === 13) {
            if (/^([a-zA-Zа-яА-ЯёЁ]+[-]?[a-zA-Zа-яА-ЯёЁ]*[-]?[a-zA-Zа-яА-ЯёЁ]*[-]?[a-zA-Zа-яА-ЯёЁ]*)$/i.test(e.target.value) || trim(e.target.value) !== '') {
                _SETTINGS.weatherSettings.city = e.target.value
                setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                getWeather()
                cityInp.className = 'text-input'
            } else {
                cityInp.className = 'text-input sp-input-error'
            }
        }
    })

    let intervalLbl = ce('label', {
        html: 'Интервал обновления:<div class="label__desc">от 1 до 360 минут</a></div>',
        class: 'label'
    })

    let interval = ce('input', {
        type: 'text',
        class: 'text-input',
        style: 'margin-bottom: 7px',
        size: 4,
        attr: { maxlength: 3 },
        value: _SETTINGS.weatherSettings.interval / 60
    })

    interval.addEventListener('change', (e: any) => {
        // от 1 минуты до 360 минут ¯\_(ツ)_/¯
        if (/^([1-9]|[1-8][0-9]|9[0-9]|[12][0-9]{2}|3[0-5][0-9]|360)$/i.test(e.target.value)) {
            _SETTINGS.weatherSettings.interval = e.target.value * 60
            setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
            interval.className = 'text-input'
        } else {
            interval.className = 'text-input sp-input-error'
        }
    })

    masWarp.appendChild(cityLbl)
    masWarp.appendChild(cityInp)
    masWarp.appendChild(locationLbl)
    masWarp.appendChild(apiKey)
    masWarp.appendChild(intervalLbl)
    masWarp.appendChild(interval)
    insertAfter(masWarp, e.parentNode)
}

/**
 * Получаем погоду через openweathermap.org
 */
export const getWeather = async () => {
    const { language, units, city, key } = _SETTINGS.weatherSettings

    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?lang=${language}&units=${units}&q=${city}&appid=${key}`

        await http<IWeather>('GET', url, false).then(e => {
            const json = e.parsedBody

            // Город не найден
            if (e.status === 404) {
                messageBox('Виджет погоды', `Город <b>${city}</b> не найден`, true, 5)
                return false
            }

            // если есть другие ошибки
            if (json?.message) {
                messageBox('Виджет погоды', json.message, true, 5)
                return false
            }

            // @ts-ignore Костыль ебаный!
            if (qs('#SP-CITY-INPUT')) { qs('#SP-CITY-INPUT').value = json.name }
            if (qs('#SP_WIDGET_WEATHER')) remove(qs('#SP_WIDGET_WEATHER'))

            if (json?.cod === 200) {
                _SETTINGS.weatherSettings.city = json.name
                setCookie('SP_PLUS_SET', JSON.stringify(_SETTINGS))
                setCookie('SP_WEATHER', JSON.stringify(json))
            }
        })
    } catch (e) {
        error('Ошибка (openweathermap): ' + e)
    }
}