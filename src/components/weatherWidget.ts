import {
    ce,
    qs,
    toUpper,
    getCookie,
    setCookie
} from '../utils'

import { getWeather, ipWhois } from './settingsWeather'

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
     * _SETTINGS.weatherSet.city !== null не пускаем, пока не узнаем город через ipwhois
     */
    if (((unixTime() - _SETTINGS.weatherSet.time) >
        _SETTINGS.weatherSet.interval) &&
        _SETTINGS.weatherSet.city !== null) {
        // обновляем время
        _SETTINGS.weatherSet.time = unixTime()
        // обновляем виджет
        getWeather()
    }

    if (!widget && page_rightbar && cookieWeather()) {

        let { id, name, main, wind, weather, clouds }: IWeather = cookieWeather()

        let widgets_group = ce('div', {
            class: 'widgets-group_top js-container__block',
            style: 'box-shadow: 0px 3px 5px rgba(93,109,157,0.3)',
            id: 'SP_WIDGET_WEATHER'
        })

        // шапка виджета
        let widget_header = ce('div', {
            class: 'b-title cl b-title_first oh',
            html: `
                <a href="https://openweathermap.org/city/${id}" target="_blank" class="b-title__link" style="white-space: unset">
                    <h6 class="span">Погода в г. ${name}</h6>
                </a>
            `
        })

        // контейнер
        let content = ce('div', {
            class: 'content',
            style: 'padding: 0px 16px 16px 16px',
            html: `
                <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" class="sp_img-center">
                    <div class="grey sp_weather-container">
                    <p>${Math.round(main.temp)}°C</p>
                    <p>${toUpper(weather[0].description)}</p>
                </div>
                <table class="grey sp_weather-table">
                    <tbody>
                        <tr>
                            <td>Облачность: </td>
                            <td>${clouds.all}%</td>
                        </tr>
                        <tr>
                            <td>Влажность: </td>
                            <td>${main.humidity}%</td>
                        </tr>
                        <tr>
                            <td>Давление: </td>
                            <td>${Math.round(main.pressure * 0.75)}mmHg</td>
                        </tr>
                        <tr>
                            <td>Ветер: </td>
                            <td>${wind.speed}m/sec</td>
                        </tr>
                    </tbody>
                </table>
            `
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
 * получаем данные погоды из cookies, если не нашли, то инициализуем виджет по новой
 */
const cookieWeather = () => {
    const data = getCookie('SP_WEATHER')

    if (data !== undefined) {
        return JSON.parse(data)
    } else {
        ipWhois()
    }
}