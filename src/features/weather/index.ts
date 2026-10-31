import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { capitalize } from '@zero-dependency/utils'
import { byId } from '@/core/dom'
import { defineToggle } from '@/core/feature'
import { modalMessage, notice } from '@/core/modals'
import { getSettings, settingEnabled } from '@/core/settings-store'
import { withStyle } from '@/core/with-style'
import weatherCss from '@/styles/features/weather.scss?inline'
import { toggleId } from '@/types/toggles'
import { bindWeatherWidget, detectCity, getWeather, readWeatherCache, unixTime } from './api'
import { hPaToMmHg, openWeather, weatherOptionsId, weatherPollMs, weatherWidgetId } from './constants'
import { renderWeatherOptions } from './options'

const weatherStyleId = 'SP_STYLE_WEATHER'
const rightbarId = 'rightbar'

function renderWidget() {
  if (byId(weatherWidgetId) || !getSettings().weatherSet.city) return
  const rightbar = document.getElementById(rightbarId)
  const data = readWeatherCache()
  const condition = data?.weather[0]
  if (!rightbar || !data || !condition) return

  const widget = el('div', {
    className: 'widgets-group widgets-group_top js-container__block sp-weather',
    id: weatherWidgetId,
  })
  widget.append(
    el('div', {
      className: 'b-title cl b-title_first oh',
      innerHTML: `<a href="${openWeather.city(data.id)}" target="_blank" class="b-title__link"><h6 class="span">Погода в ${data.name}</h6></a>`,
    }),
    el('div', {
      className: 'content',
      innerHTML: `
        <img src="${openWeather.icon(condition.icon)}" class="sp-weather__icon" alt="">
        <div class="grey sp-weather__summary">
          <p class="sp-weather__temp">${Math.round(data.main.temp)}°C</p>
          <p>${capitalize(condition.description)}</p>
        </div>
        <table class="grey sp-weather__stats">
          <tbody>
            <tr><td>Облачность: </td><td>${data.clouds.all}%</td></tr>
            <tr><td>Влажность: </td><td>${data.main.humidity}%</td></tr>
            <tr><td>Давление: </td><td>${Math.round(data.main.pressure * hPaToMmHg)}mmHg</td></tr>
            <tr><td>Ветер: </td><td>${data.wind.speed}m/sec</td></tr>
          </tbody>
        </table>
      `,
    }),
  )
  rightbar.append(widget)
}

export const weatherWidget: Feature = defineToggle({
  id: toggleId.weather,
  title: 'Виджет погоды',
  description: 'Отображает текущую погоду: температуру, облачность, влажность, давление и ветер.</br></br>Можно изменить локацию, API-ключ и интервал обновления.',
  desktopOnly: true,
  optionsId: weatherOptionsId,
  renderOptions: renderWeatherOptions,
  onToggle: (enabled) => {
    if (!enabled || !settingEnabled(toggleId.rightbar)) return
    modalMessage('Виджет погоды', 'Виджет погоды показывается в правом меню. Сначала отключите «Скрыть правое меню».', notice)
    return false
  },
  start: withStyle(weatherStyleId, weatherCss, () => {
    bindWeatherWidget(renderWidget)
    if (!getSettings().weatherSet.city) detectCity()
    const tick = () => {
      const set = getSettings().weatherSet
      if (set.city && unixTime() - set.time > set.interval) getWeather()
      renderWidget()
    }
    tick()
    const timer = window.setInterval(tick, weatherPollMs)
    return () => {
      window.clearInterval(timer)
      byId(weatherWidgetId)?.remove()
    }
  }),
})
