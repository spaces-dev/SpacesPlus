import type { Feature } from '@/core/feature'
import { log } from '@/core/log'
import { modalMessage } from '@/core/modals'
import { getSettings, setSetting } from '@/core/settings-store'

const hidden = 'sp-hidden-rightbar'

function hideRightbar() {
  document.documentElement.classList.add(hidden)
}

function showRightbar() {
  document.documentElement.classList.remove(hidden)
}

export const hiddenRightbar: Feature = {
  id: 'hrightbar',
  title: 'Скрыть правое меню',
  description: 'Функция скрывает правое меню (страница становится на 25% шире).</br></br>Конфликтует с функцией «Виджет погоды».',
  desktopOnly: true,
  onToggle: (enabled) => {
    if (!enabled || !getSettings().weather) return
    setSetting('weather', false)
    const box = document.querySelector<HTMLInputElement>('#weather')
    if (box) box.checked = false
    document.getElementById('SP_WEATHER_SETTINGS')?.remove()
    modalMessage('Скрыть правое меню', 'Виджет погоды выключен: он показывается в правом меню.', { close: true, timer: 5 })
  },
  start: (ctx) => {
    if (getSettings().weather) setSetting('weather', false)

    const stop = ctx.onDom(() => {
      try {
        hideRightbar()
      } catch (error) {
        log.error('hideRightbar', error)
      }
    })

    return () => {
      stop()
      showRightbar()
    }
  },
}
