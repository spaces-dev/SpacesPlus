import type { WeatherPayload } from './types'
import { http } from '@/core/http'
import { log } from '@/core/log'
import { modalMessage } from '@/core/modals'
import { cookies, getSettings, setSetting } from '@/core/settings-store'

export const unixTime = () => Math.round(Date.now() / 1000)

const geoSkipKey = 'SP_GEO_SKIP'
const geoTimeout = 10_000
const geoMaxAge = 30 * 60 * 1000

interface GeoPoint {
  lat: number
  lon: number
}

let paintWidget = () => {}

export function bindWeatherWidget(paint: () => void) {
  paintWidget = paint
}

export function readWeatherCache(): WeatherPayload | undefined {
  const data = cookies.get('SP_WEATHER')
  if (!data || typeof data !== 'object') return
  return data as WeatherPayload
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
  if (input?.value !== 'Загрузка...') return
  input.value = ''
  input.dispatchEvent(new Event('input'))
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
      modalMessage('Виджет погоды', `Локация <b>${city}</b> не найдена`, { close: true, timer: 5 })
      return
    }
    if (json?.message && json.cod !== 200) {
      modalMessage('Виджет погоды', json.message, { close: true, timer: 5 })
      return
    }
    if (!json || json.cod !== 200) return

    const input = document.querySelector<HTMLInputElement>('#SP-CITY-INPUT')
    if (input) {
      input.value = json.name
      input.dispatchEvent(new Event('input'))
    }
    document.querySelector('#SP_WIDGET_WEATHER')?.remove()
    setSetting('weatherSet.city', json.name)
    getSettings().weatherSet.time = unixTime()
    cookies.set('SP_WEATHER', json)
    paintWidget()
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
    modalMessage('Виджет погоды', 'Не удалось определить локацию. Введите её вручную.', { close: true })
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
