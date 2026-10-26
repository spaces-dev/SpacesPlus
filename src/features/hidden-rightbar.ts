import type { Feature } from '../core/feature'
import { log } from '../core/log'
import { getSettings, setSetting } from '../core/settings-store'

const hidden = 'sp-hidden-rightbar'

export const hiddenRightbar: Feature = {
  id: 'hrightbar',
  title: 'Скрыть правое меню',
  description: 'Функция скрывает правое меню (страница становится на 25% шире).</br></br>Конфликтует с функцией «Виджет погоды».',
  desktopOnly: true,
  start: (ctx) => {
    if (getSettings().weather) setSetting('weather', false)

    const stop = ctx.onDom(() => {
      try {
        const rightbar = document.querySelector<HTMLElement>('#rightbar')
        if (!rightbar || rightbar.hasAttribute(hidden)) return
        rightbar.style.display = 'none'
        rightbar.setAttribute(hidden, '1')
      } catch (error) {
        log.error('hrightbar', error)
      }
    })

    return () => {
      stop()
      const rightbar = document.querySelector<HTMLElement>('#rightbar')
      if (!rightbar?.hasAttribute(hidden)) return
      rightbar.style.display = 'block'
      rightbar.removeAttribute(hidden)
    }
  },
}
