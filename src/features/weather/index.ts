import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { capitalize } from '@zero-dependency/utils'
import { ensureStyle, removeStyle } from '@/core/appearance'
import { modalMessage } from '@/core/modals'
import { getSettings } from '@/core/settings-store'
import weatherCss from '@/styles/features/weather.scss?inline'
import { bindWeatherWidget, detectCity, getWeather, readWeatherCache, unixTime } from './api'
import { renderWeatherOptions } from './options'

const weatherStyleId = 'SP_STYLE_WEATHER'

function renderWidget() {
  if (document.querySelector('#SP_WIDGET_WEATHER') || !getSettings().weatherSet.city) return
  const rightbar = document.querySelector('#rightbar')
  const data = readWeatherCache()
  const condition = data?.weather[0]
  if (!rightbar || !data || !condition) return

  const widget = el('div', {
    className: 'widgets-group widgets-group_top js-container__block sp-weather',
    id: 'SP_WIDGET_WEATHER',
  })
  widget.append(
    el('div', {
      className: 'b-title cl b-title_first oh',
      innerHTML: `<a href="https://openweathermap.org/city/${data.id}" target="_blank" class="b-title__link"><h6 class="span">Погода в ${data.name}</h6></a>`,
    }),
    el('div', {
      className: 'content',
      innerHTML: `
        <img src="https://openweathermap.org/img/wn/${condition.icon}@2x.png" class="sp-weather__icon" alt="">
        <div class="grey sp-weather__summary">
          <p class="sp-weather__temp">${Math.round(data.main.temp)}°C</p>
          <p>${capitalize(condition.description)}</p>
        </div>
        <table class="grey sp-weather__stats">
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
  description: 'Отображает текущую погоду: температуру, облачность, влажность, давление и ветер.</br></br>Можно изменить локацию, API-ключ и интервал обновления.',
  desktopOnly: true,
  optionsId: 'SP_WEATHER_SETTINGS',
  renderOptions: renderWeatherOptions,
  onToggle: (enabled) => {
    if (!enabled || !getSettings().hrightbar) return
    modalMessage('Виджет погоды', 'Виджет погоды показывается в правом меню. Сначала отключите «Скрыть правое меню».', { close: true, timer: 5 })
    return false
  },
  start: () => {
    ensureStyle(weatherStyleId, weatherCss)
    bindWeatherWidget(renderWidget)
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
      removeStyle(weatherStyleId)
    }
  },
}
