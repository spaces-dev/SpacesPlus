import type { WeatherPayload } from './types'
import { byId } from '@/core/dom'
import { http, httpStatus } from '@/core/http'
import { log } from '@/core/log'
import { closable, modalMessage, notice } from '@/core/modals'
import { cookies, getSettings, setSetting, settingKey, storageKey } from '@/core/settings-store'
import { cityInputId, loadingCity, openWeather, weatherWidgetId } from './constants'

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
  const data = cookies.get(storageKey.weather)
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
  const input = byId<HTMLInputElement>(cityInputId)
  if (input?.value !== loadingCity) return
  input.value = ''
  input.dispatchEvent(new Event('input'))
}

export async function getWeather(coords?: GeoPoint) {
  const { language, units, key } = getSettings().weatherSet
  const place = weatherQuery(coords)
  if (!place) return

  try {
    const response = await http<WeatherPayload>(`${openWeather.endpoint}?lang=${language}&units=${units}&${place}&appid=${key}`)
    const json = response.parsedBody
    if (response.status === httpStatus.notFound) {
      const city = getSettings().weatherSet.city ?? ''
      modalMessage('Виджет погоды', `Локация <b>${city}</b> не найдена`, notice)
      return
    }
    if (json?.message && json.cod !== httpStatus.ok) {
      modalMessage('Виджет погоды', json.message, notice)
      return
    }
    if (!json || json.cod !== httpStatus.ok) return

    const input = byId<HTMLInputElement>(cityInputId)
    if (input) {
      input.value = json.name
      input.dispatchEvent(new Event('input'))
    }
    byId(weatherWidgetId)?.remove()
    setSetting(settingKey.weatherCity, json.name)
    getSettings().weatherSet.time = unixTime()
    cookies.set(storageKey.weather, json)
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
    modalMessage('Виджет погоды', 'Не удалось определить локацию. Введите ее вручную.', closable)
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
