import type { Feature } from '@/core/feature'
import { byId } from '@/core/dom'
import { defineToggle } from '@/core/feature'
import { toggleId } from '@/types/toggles'
import { applyBodyStyle } from './apply'
import { bodyDom } from './ids'
import {
  destroyColorPicker,
  releaseBackgroundSheet,
  renderBackgroundOptions,
  syncBackgroundSheet,
} from './options'

export const bodyStyle: Feature = defineToggle({
  id: toggleId.background,
  title: 'Фон сайта',
  listed: false,
  description: 'Позволяет украшать фон сайта. В подборке есть набор изображений, также можно переключиться на цветной фон.',
  optionsId: bodyDom.panel,
  renderOptions: renderBackgroundOptions,
  start: (ctx) => {
    const stop = ctx.onDom(() => {
      applyBodyStyle()
      syncBackgroundSheet()
    })
    return () => {
      stop()
      const style = byId(bodyDom.injected)
      if (style) style.textContent = ''
      destroyColorPicker()
      byId(bodyDom.panel)?.remove()
      releaseBackgroundSheet()
    }
  },
})
