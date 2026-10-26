import { el } from '@zero-dependency/dom'
import { getSettings, setSetting } from '../../core/settings-store'
import { detectCity, geoPromptSkipped, getWeather } from '../weather'

export function renderWeatherOptions(anchor: HTMLElement) {
  if (document.querySelector('#SP_WEATHER_SETTINGS')) return
  if (getSettings().weatherSet.city === null) detectCity()

  const { weatherSet } = getSettings()
  const apiKey = el('input', {
    type: 'password',
    className: 'text-input',
    size: 32,
    value: weatherSet.key,
    autocomplete: 'off',
    style: { marginBottom: '7px' },
  })
  apiKey.onkeypress = (event) => {
    if (event.key !== 'Enter') return
    if (/^[a-f0-9]{32}$/i.test(apiKey.value)) {
      setSetting('weatherSet.key', apiKey.value)
      getWeather()
      apiKey.classList.remove('sp-input-error')
      return
    }
    apiKey.classList.add('sp-input-error')
  }

  const waitingForCity = weatherSet.city === null && !geoPromptSkipped()
  const city = el('input', {
    type: 'text',
    className: 'text-input',
    size: 32,
    id: 'SP-CITY-INPUT',
    value: waitingForCity ? 'Загрузка...' : weatherSet.city ?? '',
    style: { marginBottom: '7px' },
  })
  city.onkeypress = (event) => {
    if (event.key !== 'Enter') return
    if (/^[a-zа-яё]+(?:-[a-zа-яё]+){0,3}$/i.test(city.value)) {
      setSetting('weatherSet.city', city.value)
      getWeather()
      city.classList.remove('sp-input-error')
      return
    }
    city.classList.add('sp-input-error')
  }

  const interval = el('input', {
    type: 'text',
    className: 'text-input',
    size: 4,
    maxLength: 3,
    value: String(weatherSet.interval / 60),
    style: { marginBottom: '7px' },
  })
  interval.oninput = () => {
    if (/^(?:[1-9]|[1-8]\d|9\d|[12]\d{2}|3[0-5]\d|360)$/.test(interval.value)) {
      setSetting('weatherSet.interval', Number(interval.value) * 60)
      interval.classList.remove('sp-input-error')
      return
    }
    interval.classList.add('sp-input-error')
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
      'Город:',
      el('div', { className: 'label__desc' }, detect),
    ]),
    city,
    el('label', {
      className: 'label',
      innerHTML: 'API-Ключ:<div class="label__desc"><a href="https://openweathermap.org/appid" target="_blank">Получить ключ</a></div>',
    }),
    apiKey,
    el('label', {
      className: 'label',
      innerHTML: 'Интервал обновления:<div class="label__desc">от 1 до 360 минут</div>',
    }),
    interval,
  ])
  anchor.parentElement?.after(panel)
}
