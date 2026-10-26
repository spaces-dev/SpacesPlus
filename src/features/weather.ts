import type { Feature } from '../core/feature'
import type { WeatherPayload } from '../types/weather'
import { el } from '@zero-dependency/dom'
import { capitalize } from '@zero-dependency/utils'
import { http } from '../core/http'
import { log } from '../core/log'
import { modalMessage } from '../core/modals'
import { cookies, getSettings, setSetting } from '../core/settings-store'
import { assetOrigin } from '../core/site'
import { renderWeatherOptions } from './settings/weather'

const unixTime = () => Math.round(Date.now() / 1000)
const geoSkipKey = 'SP_GEO_SKIP'
const geoTimeout = 10_000
const geoMaxAge = 30 * 60 * 1000

interface GeoPoint {
  lat: number
  lon: number
}

function weatherQuery(coords?: GeoPoint) {
  if (coords) return `lat=${coords.lat}&lon=${coords.lon}`
  const { city } = getSettings().weatherSet
  if (!city) return ''
  return `q=${encodeURIComponent(city)}`
}

function pageGeolocation() {
  try {
    return unsafeWindow.navigator.geolocation ?? navigator.geolocation
  } catch {
    return navigator.geolocation
  }
}

function readPosition() {
  const geolocation = pageGeolocation()
  if (!geolocation) return Promise.reject(new Error('geolocation'))

  return new Promise<GeolocationPosition>((resolve, reject) => {
    geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: false,
      timeout: geoTimeout,
      maximumAge: geoMaxAge,
    })
  })
}

export const geoPromptSkipped = () => sessionStorage.getItem(geoSkipKey) !== null

function clearLoadingCity() {
  const input = document.querySelector<HTMLInputElement>('#SP-CITY-INPUT')
  if (input?.value === 'Загрузка...') input.value = ''
}

export async function getWeather(coords?: GeoPoint) {
  const { language, units, key } = getSettings().weatherSet
  const place = weatherQuery(coords)
  if (!place) return

  try {
    const response = await http<WeatherPayload>(`https://api.openweathermap.org/data/2.5/weather?lang=${language}&units=${units}&${place}&appid=${key}`)
    const json = response.parsedBody
    if (response.status === 404) {
      const city = getSettings().weatherSet.city ?? ''
      modalMessage('Виджет погоды', `Город <b>${city}</b> не найден`, { close: true, timer: 5 })
      return
    }
    if (json?.message && json.cod !== 200) {
      modalMessage('Виджет погоды', json.message, { close: true, timer: 5 })
      return
    }
    if (!json || json.cod !== 200) return

    const input = document.querySelector<HTMLInputElement>('#SP-CITY-INPUT')
    if (input) input.value = json.name
    document.querySelector('#SP_WIDGET_WEATHER')?.remove()
    setSetting('weatherSet.city', json.name)
    getSettings().weatherSet.time = unixTime()
    cookies.set('SP_WEATHER', json)
    renderWidget()
  } catch (error) {
    log.error('openweathermap', error)
  }
}

let pendingCity: Promise<void> | undefined

async function locateCity() {
  try {
    const position = await readPosition()
    await getWeather({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    })
    if (!getSettings().weatherSet.city) clearLoadingCity()
  } catch (error) {
    sessionStorage.setItem(geoSkipKey, '1')
    clearLoadingCity()
    modalMessage('Виджет погоды', 'Не удалось определить город. Введите его вручную.', { close: true })
    log.error('geolocation', error)
  }
}

export function detectCity(force = false) {
  if (!force && sessionStorage.getItem(geoSkipKey)) return Promise.resolve()
  if (force) sessionStorage.removeItem(geoSkipKey)
  if (pendingCity) return pendingCity

  pendingCity = locateCity().finally(() => {
    pendingCity = undefined
  })
  return pendingCity
}

function renderWidget() {
  if (document.querySelector('#SP_WIDGET_WEATHER') || !getSettings().weatherSet.city) return
  const rightbar = document.querySelector('#rightbar')
  const data = cookies.get('SP_WEATHER')
  const condition = data?.weather[0]
  if (!rightbar || !data || !condition) return

  const widget = el('div', {
    className: 'widgets-group_top js-container__block',
    id: 'SP_WIDGET_WEATHER',
    style: { boxShadow: '0px 3px 5px rgba(93,109,157,0.3)' },
  })
  widget.append(
    el('div', {
      className: 'b-title cl b-title_first oh',
      innerHTML: `<a href="https://openweathermap.org/city/${data.id}" target="_blank" class="b-title__link" style="white-space: unset"><h6 class="span">Погода в г. ${data.name}</h6></a>`,
    }),
    el('div', {
      className: 'content',
      style: { padding: '0px 16px 16px 16px' },
      innerHTML: `
        <img src="https://openweathermap.org/img/wn/${condition.icon}@2x.png" class="sp_img-center">
        <div class="grey sp_weather-container">
          <p>${Math.round(data.main.temp)}°C</p>
          <p>${capitalize(condition.description)}</p>
        </div>
        <table class="grey sp_weather-table">
          <tbody>
            <tr><td>Облачность: </td><td>${data.clouds.all}%</td></tr>
            <tr><td>Влажность: </td><td>${data.main.humidity}%</td></tr>
            <tr><td>Давление: </td><td>${Math.round(data.main.pressure * 0.75)}mmHg</td></tr>
            <tr><td>Ветер: </td><td>${data.wind.speed}m/sec</td></tr>
          </tbody>
        </table>
      `,
    }),
  )
  rightbar.append(widget)
}

export const weatherWidget: Feature = {
  id: 'weather',
  title: 'Виджет погоды',
  description: `<img src="${assetOrigin}/screens/weather-widget.png"></br>Отображает текущую погоду: температуру, облачность, влажность, давление и ветер.</br></br>Можно изменить город, API-ключ и интервал обновления.`,
  desktopOnly: true,
  optionsId: 'SP_WEATHER_SETTINGS',
  renderOptions: renderWeatherOptions,
  onToggle: (enabled) => {
    if (enabled && getSettings().hrightbar) setSetting('hrightbar', false)
  },
  start: () => {
    if (!getSettings().weatherSet.city) detectCity()
    const tick = () => {
      const set = getSettings().weatherSet
      if (set.city && unixTime() - set.time > set.interval) getWeather()
      renderWidget()
    }
    tick()
    const timer = window.setInterval(tick, 30_000)
    return () => {
      window.clearInterval(timer)
      document.querySelector('#SP_WIDGET_WEATHER')?.remove()
    }
  },
}
