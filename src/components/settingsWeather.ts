import {
    ce,
    qs,
    http,
    logger,
    setCookie,
    modalMessage,
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

    let masWarp = ce('div', {
        id: 'SP_WEATHER_SETTINGS',
        className: 'sp_settings-wrap'
    })

    let locationLbl = ce('label', {
        innerHTML: 'API-Ключ:<div class="label__desc"><a href="https://openweathermap.org/appid" target="_blank">Получить ключ</a></div>',
        className: 'label'
    })

    let apiKey = ce('input', {
        type: 'text',
        className: 'text-input',
        size: 32,
        value: _SETTINGS.weatherSet.key,
        style: {
            marginBottom: '7px'
        },
        onkeypress: (e: KeyboardEvent) => {
            const value = (e.target as HTMLInputElement).value

            if (e.keyCode === 13) {
                if (/^[a-f0-9]{32}$/i.test(value)) {
                    setSettings('weatherSet.key', value)
                    getWeather()
                    apiKey.classList.remove('sp-input-error')
                } else {
                    apiKey.classList.add('sp-input-error')
                }
            }
        }
    })

    let cityLbl = ce('label', {
        innerHTML: 'Город:',
        className: 'label'
    })

    let cityInp = ce('input', {
        type: 'text',
        className: 'text-input',
        size: 32,
        id: 'SP-CITY-INPUT',
        value: _SETTINGS.weatherSet.city ?? 'Загрузка...',
        style: {
            marginBottom: '7px'
        },
        onkeypress: (e: KeyboardEvent) => {
            const value = (e.target as HTMLInputElement).value

            if (e.keyCode === 13) {
                if (/^([a-zA-Zа-яА-ЯёЁ]+[-]?[a-zA-Zа-яА-ЯёЁ]*[-]?[a-zA-Zа-яА-ЯёЁ]*[-]?[a-zA-Zа-яА-ЯёЁ]*)$/i.test(value)) {
                    setSettings('weatherSet.city', value)
                    getWeather()
                    cityInp.classList.remove('sp-input-error')
                } else {
                    cityInp.classList.add('sp-input-error')
                }
            }
        }
    })

    let intervalLbl = ce('label', {
        innerHTML: 'Интервал обновления:<div class="label__desc">от 1 до 360 минут</a></div>',
        className: 'label'
    })

    let interval = ce('input', {
        type: 'text',
        className: 'text-input',
        size: 4,
        maxLength: 3,
        value: _SETTINGS.weatherSet.interval / 60,
        style: {
            marginBottom: '7px'
        },
        oninput: (e: Event) => {
            const value = (e.target as HTMLInputElement).value

            // от 1 минуты до 360 минут ¯\_(ツ)_/¯
            if (/^([1-9]|[1-8][0-9]|9[0-9]|[12][0-9]{2}|3[0-5][0-9]|360)$/i.test(value)) {
                setSettings('weatherSet.interval', (Number(value) * 60))
                interval.classList.remove('sp-input-error')
            } else {
                interval.classList.add('sp-input-error')
            }
        }
    })

    masWarp.appendChild(cityLbl)
    masWarp.appendChild(cityInp)
    masWarp.appendChild(locationLbl)
    masWarp.appendChild(apiKey)
    masWarp.appendChild(intervalLbl)
    masWarp.appendChild(interval)
    e.parentElement?.after(masWarp)
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
                modalMessage('Виджет погоды', `Город <b>${city}</b> не найден`, true, 5)
                return false
            }

            // если есть другие ошибки
            if (json?.message) {
                modalMessage('Виджет погоды', json.message, true, 5)
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
        logger.error('openweathermap', e)
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
                modalMessage('Ошибка ipWhois', 'Обратитесь к разработчику!', true)
            }
        })
    } catch (e) {
        logger.error('ipWhois', e)
    }
}