import {
    ce,
    qs,
    http,
    error,
    setCookie,
    messageBox,
    insertAfter,
    setSettings
} from '../utils'

import { IWhois } from '../interfaces/Whois'
import { IWeather } from '../interfaces/Weather'

import { _SETTINGS } from '../settings'

/**
 * Инициализация выпадающего доп. меню настроек виджета погоды
 * @param e #weather
 */
export const settingsWeather = async (e: Element) => {

    /**
     * Отключаем скрытие правого меню, если оно включено
     */
    if (_SETTINGS.hrightbar) qs('#hrightbar').click()

    // Инициализация
    _SETTINGS.weatherSet.city ?? ipWhois()

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
        value: _SETTINGS.weatherSet.key
    })

    apiKey.addEventListener('keypress', (e: any) => {
        if (e.keyCode === 13) {
            if (/^[a-f0-9]{32}$/i.test(e.target.value)) {
                setSettings('weatherSet.key', e.target.value)
                getWeather()
                apiKey.classList.remove('sp-input-error')
            } else {
                apiKey.classList.add('sp-input-error')
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
        value: _SETTINGS.weatherSet.city
    })

    cityInp.addEventListener('keypress', (e: any) => {
        if (e.keyCode === 13) {
            if (/^([a-zA-Zа-яА-ЯёЁ]+[-]?[a-zA-Zа-яА-ЯёЁ]*[-]?[a-zA-Zа-яА-ЯёЁ]*[-]?[a-zA-Zа-яА-ЯёЁ]*)$/i.test(e.target.value)) {
                setSettings('weatherSet.city', e.target.value)
                getWeather()
                cityInp.classList.remove('sp-input-error')
            } else {
                cityInp.classList.add('sp-input-error')
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
        value: _SETTINGS.weatherSet.interval / 60
    })

    interval.addEventListener('input', (e: any) => {
        // от 1 минуты до 360 минут ¯\_(ツ)_/¯
        if (/^([1-9]|[1-8][0-9]|9[0-9]|[12][0-9]{2}|3[0-5][0-9]|360)$/i.test(e.target.value)) {
            setSettings('weatherSet.interval', e.target.value * 60)
            interval.classList.remove('sp-input-error')
        } else {
            interval.classList.add('sp-input-error')
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
    const { language, units, city, key } = _SETTINGS.weatherSet

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

            if (qs('#SP-CITY-INPUT')) { (<HTMLInputElement>qs('#SP-CITY-INPUT')).value = json!.name }
            qs('#SP_WIDGET_WEATHER')?.remove()

            if (json?.cod === 200) {
                setSettings('weatherSet.city', json.name)
                setCookie('SP_WEATHER', JSON.stringify(json))
            }
        })
    } catch (e) {
        error('openweathermap', e)
    }
}

/**
 * Инициализация виджета погоды ¯\_(ツ)_/¯
 * Получаем город пользователя
 */
export const ipWhois = async () => {
    try {
        await http<IWhois>('GET', 'https://ipwhois.app/json/?objects=city,success&lang=ru', false).then(e => {
            const json = e.parsedBody

            if (json?.success) {
                setSettings('weatherSet.city', json.city)
                getWeather()
            } else {
                messageBox('Ошибка ipWhois', 'Обратитесь к разработчику!', true)
            }
        })
    } catch (e) {
        error('ipWhois', e)
    }
}