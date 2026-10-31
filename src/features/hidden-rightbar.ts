import type { Feature } from '@/core/feature'
import { byId } from '@/core/dom'
import { defineToggle } from '@/core/feature'
import { modalMessage, notice } from '@/core/modals'
import { setSetting, settingEnabled } from '@/core/settings-store'
import { withStyle } from '@/core/with-style'
import rightbarCss from '@/styles/features/rightbar.scss?inline'
import { toggleId } from '@/types/toggles'
import { weatherOptionsId } from './weather/constants'

const rightbarStyleId = 'SP_STYLE_RIGHTBAR'
const hidden = 'sp-hidden-rightbar'

function hideRightbar() {
  document.documentElement.classList.add(hidden)
}

function showRightbar() {
  document.documentElement.classList.remove(hidden)
}

export const hiddenRightbar: Feature = defineToggle({
  id: toggleId.rightbar,
  title: 'Скрыть правое меню',
  description: 'Функция скрывает правое меню (страница становится на 25% шире).</br></br>Конфликтует с функцией «Виджет погоды».',
  desktopOnly: true,
  onToggle: (enabled) => {
    if (!enabled || !settingEnabled(toggleId.weather)) return
    setSetting(toggleId.weather, false)
    const box = byId<HTMLInputElement>(toggleId.weather)
    if (box) box.checked = false
    byId(weatherOptionsId)?.remove()
    modalMessage('Скрыть правое меню', 'Виджет погоды выключен: он показывается в правом меню.', notice)
  },
  start: withStyle(rightbarStyleId, rightbarCss, (ctx) => {
    if (settingEnabled(toggleId.weather)) setSetting(toggleId.weather, false)
    const stop = ctx.onDom(hideRightbar)
    return () => {
      stop()
      showRightbar()
    }
  }),
})
