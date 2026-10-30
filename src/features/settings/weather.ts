import { el } from '@zero-dependency/dom'
import { getSettings, setSetting } from '@/core/settings-store'
import { detectCity, geoPromptSkipped, getWeather } from '@/features/weather'

export function renderWeatherOptions(anchor: HTMLElement) {
  if (document.querySelector('#SP_WEATHER_SETTINGS')) return
  if (getSettings().weatherSet.city === null) detectCity()

  const { weatherSet } = getSettings()
  const apiKey = el('input', {
    type: 'password',
    className: 'text-input',
    name: 'sp-weather-key',
    size: 32,
    value: weatherSet.key,
    autocomplete: 'new-password',
    style: { marginBottom: '7px' },
  })
  const markApiKey = () => {
    apiKey.classList.toggle('text-input_error_bg', !/^[a-f0-9]{32}$/i.test(apiKey.value))
  }
  apiKey.oninput = markApiKey
  apiKey.onkeypress = (event) => {
    if (event.key !== 'Enter') return
    markApiKey()
    if (!/^[a-f0-9]{32}$/i.test(apiKey.value)) return
    setSetting('weatherSet.key', apiKey.value)
    getWeather()
  }
  markApiKey()

  const waitingForCity = weatherSet.city === null && !geoPromptSkipped()
  const city = el('input', {
    type: 'text',
    className: 'text-input',
    name: 'sp-weather-location',
    size: 32,
    id: 'SP-CITY-INPUT',
    value: waitingForCity ? 'Загрузка...' : weatherSet.city ?? '',
    autocomplete: 'off',
    style: { marginBottom: '7px' },
  })
  const markCity = () => {
    if (city.value === 'Загрузка...') {
      city.classList.remove('text-input_error_bg')
      return
    }
    const name = city.value.trim()
    city.classList.toggle('text-input_error_bg', !/^\p{L}[\p{L}\s.'’-]*$/u.test(name))
  }
  city.oninput = markCity
  city.onkeypress = (event) => {
    if (event.key !== 'Enter' || city.value === 'Загрузка...') return
    city.value = city.value.trim()
    markCity()
    if (city.classList.contains('text-input_error_bg')) return
    setSetting('weatherSet.city', city.value)
    getWeather()
  }
  markCity()

  const interval = el('input', {
    type: 'text',
    className: 'text-input',
    name: 'sp-weather-interval',
    size: 4,
    maxLength: 3,
    value: String(weatherSet.interval / 60),
    autocomplete: 'off',
    style: { marginBottom: '7px' },
  })
  interval.oninput = () => {
    const valid = /^(?:[1-9]|[1-8]\d|9\d|[12]\d{2}|3[0-5]\d|360)$/.test(interval.value)
    interval.classList.toggle('text-input_error_bg', !valid)
    if (!valid) return
    setSetting('weatherSet.interval', Number(interval.value) * 60)
  }

  const detect = el('a', { href: '#' }, 'Определить')
  detect.onclick = (event) => {
    event.preventDefault()
    city.value = 'Загрузка...'
    detectCity(true)
  }

  const panel = el('div', {
    id: 'SP_WEATHER_SETTINGS',
    className: 'sp_settings-wrap',
  }, [
    el('label', { className: 'label' }, [
      'Локация:',
      el('div', { className: 'label__desc' }, detect),
    ]),
    city,
    el('label', {
      className: 'label',
      innerHTML: 'API-ключ:<div class="label__desc"><a href="https://openweathermap.org/appid" target="_blank">Получить ключ</a></div>',
    }),
    apiKey,
    el('label', {
      className: 'label',
      innerHTML: 'Интервал обновления:<div class="label__desc">от 1 до 360 минут</div>',
    }),
    interval,
    el('div', {
      className: 'label__desc grey',
      textContent: 'Локация и API-ключ сохраняются по Enter. Интервал записывается сразу. «Определить» определяет локацию по геолокации. Виджет показывается в правом меню и не работает вместе с функцией «Скрыть правое меню».',
    }),
  ])
  anchor.parentElement?.after(panel)
}
