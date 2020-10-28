import { ce, qs, getCookie } from '../utils'

import { getWeather } from './settingsWeather'

import { _SETTINGS } from '../settings'
import { IWeather } from '../interfaces/Weather'

/**
 * Виджет погоды в правом меню
 */
export const weatherWidget = () => {
    let widget = qs('#SP_WIDGET_WEATHER')
    let page_rightbar = qs('#page_rightbar')

    /**
     * Из текущего времени вычитаем время последней проверки погоды, если оно больше интервала, то обновляем виджет погоды
     * _SETTINGS.weatherSettings.city !== null не пускаем, пока не узнаем город через ipwhois
     */
    if (((unixTime() - _SETTINGS.weatherSettings.time) >
        _SETTINGS.weatherSettings.interval) &&
        _SETTINGS.weatherSettings.city !== null) {
        // обновляем время
        _SETTINGS.weatherSettings.time = unixTime()
        // обновляем виджет
        getWeather()
    }

    if (!widget && page_rightbar && getCookie('SP_WEATHER')) {
        // @ts-ignore Костылище
        const w: IWeather = JSON.parse(getCookie('SP_WEATHER'))

        let widgets_group = ce('div', {
            class: 'widgets-group_top js-container__block',
            style: 'box-shadow: 0px 3px 5px rgba(93,109,157,0.3)',
            id: 'SP_WIDGET_WEATHER'
        })

        let widget_header = ce('div', {
            class: 'b-title cl b-title_first oh',
            html: `<a href="https://openweathermap.org/city/${w.id}" target="_blank" class="b-title__link"><h6 class="span">Погода в г. ${w.name}</h6></span></a>`
        })

        let content = ce('div', {
            class: 'content',
            style: 'padding: 0px 16px 16px 16px',
            html: `<img src="https://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png" class="sp_weather-img"><div class="grey sp_weather-container"><p>${Math.round(w.main.temp)}°C</p><p>${toUpper(w.weather[0].description)}</p></div><table class="grey sp_weather-table"><tbody><tr><td>Облачность: </td><td>${w.clouds.all}%</td></tr><tr><td>Влажность: </td><td>${w.main.humidity}%</td></tr><tr><td>Давление: </td><td>${Math.round(w.main.pressure * 0.75)}mmHg</td></tr><tr><td>Ветер: </td><td>${w.wind.speed}m/sec</td></tr></tbody></table>`
        })

        widgets_group.appendChild(widget_header)
        widgets_group.appendChild(content)
        page_rightbar.appendChild(widgets_group)
    }
}

/**
 * unix время
 */
const unixTime = () => Math.round(new Date().getTime() / 1000.0)

/**
 * Первый символ в строке делаем toUpperCase
 * @param str
 */
const toUpper = (str: string) => str[0].toUpperCase() + str.substring(1)