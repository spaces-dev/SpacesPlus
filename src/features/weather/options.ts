import { el } from '@zero-dependency/dom'
import { fieldGap, isInvalid, markInvalid, mountPanel, parseBoundedInt } from '@/core/fields'
import { getSettings, setSetting, settingKey } from '@/core/settings-store'
import { detectCity, geoPromptSkipped, getWeather } from './api'
import { apiKeyPattern, cityInputId, cityPattern, intervalRange, loadingCity, openWeather, secondsPerMinute, weatherOptionsId } from './constants'

const fieldStyle = { marginBottom: fieldGap }

function onEnter(input: HTMLInputElement, action: () => void) {
  input.onkeypress = (event) => {
    if (event.key !== 'Enter') return
    action()
  }
}

export function renderWeatherOptions(anchor: HTMLElement) {
  mountPanel(weatherOptionsId, anchor, () => {
    if (getSettings().weatherSet.city === null) detectCity()

    const { weatherSet } = getSettings()
    const apiKey = el('input', {
      type: 'password',
      className: 'text-input',
      name: 'sp-weather-key',
      size: 32,
      value: weatherSet.key,
      autocomplete: 'new-password',
      style: fieldStyle,
    })
    const markApiKey = () => {
      markInvalid(apiKey, !apiKeyPattern.test(apiKey.value))
    }
    apiKey.oninput = markApiKey
    onEnter(apiKey, () => {
      markApiKey()
      if (!apiKeyPattern.test(apiKey.value)) return
      setSetting(settingKey.weatherKey, apiKey.value)
      getWeather()
    })
    markApiKey()

    const waitingForCity = weatherSet.city === null && !geoPromptSkipped()
    const city = el('input', {
      type: 'text',
      className: 'text-input',
      name: 'sp-weather-location',
      size: 32,
      id: cityInputId,
      value: waitingForCity ? loadingCity : weatherSet.city ?? '',
      autocomplete: 'off',
      style: fieldStyle,
    })
    const markCity = () => {
      if (city.value === loadingCity) {
        markInvalid(city, false)
        return
      }
      const name = city.value.trim()
      markInvalid(city, !cityPattern.test(name))
    }
    city.oninput = markCity
    onEnter(city, () => {
      if (city.value === loadingCity) return
      city.value = city.value.trim()
      markCity()
      if (isInvalid(city)) return
      setSetting(settingKey.weatherCity, city.value)
      getWeather()
    })
    markCity()

    const interval = el('input', {
      type: 'text',
      className: 'text-input',
      name: 'sp-weather-interval',
      size: 4,
      maxLength: 3,
      value: String(weatherSet.interval / secondsPerMinute),
      autocomplete: 'off',
      style: fieldStyle,
    })
    interval.oninput = () => {
      const minutes = parseBoundedInt(interval.value, intervalRange.min, intervalRange.max)
      markInvalid(interval, minutes === undefined)
      if (minutes === undefined) return
      setSetting(settingKey.weatherInterval, minutes * secondsPerMinute)
    }

    const detect = el('a', { href: '#' }, 'Определить')
    detect.onclick = (event) => {
      event.preventDefault()
      city.value = loadingCity
      detectCity(true)
    }

    return el('div', {
      id: weatherOptionsId,
      className: 'sp-weather-settings',
    }, [
      el('label', { className: 'label' }, [
        'Локация:',
        el('div', { className: 'label__desc' }, detect),
      ]),
      city,
      el('label', {
        className: 'label',
        innerHTML: `API-ключ:<div class="label__desc"><a href="${openWeather.keyUrl}" target="_blank">Получить ключ</a></div>`,
      }),
      apiKey,
      el('label', {
        className: 'label',
        innerHTML: `Интервал обновления:<div class="label__desc">от ${intervalRange.min} до ${intervalRange.max} минут</div>`,
      }),
      interval,
      el('div', {
        className: 'label__desc grey',
        textContent: 'Локация и API-ключ сохраняются по Enter. Интервал записывается сразу. «Определить» определяет локацию по геолокации. Виджет показывается в правом меню и не работает вместе с функцией «Скрыть правое меню».',
      }),
    ])
  })
}
