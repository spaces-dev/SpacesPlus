import type { Feature } from '@/core/feature'
import { applyBodyStyle } from './apply'
import {
  destroyColorPicker,
  releaseBackgroundSheet,
  renderBackgroundOptions,
  syncBackgroundSheet,
} from './options'

export const bodyStyle: Feature = {
  id: 'bodystyle',
  title: 'Фон сайта',
  listed: false,
  description: 'Позволяет украшать фон сайта. В подборке есть набор изображений, также можно переключиться на цветной фон.',
  optionsId: 'SP_PLUS_BODYSTYLE',
  renderOptions: renderBackgroundOptions,
  start: (ctx) => {
    const stop = ctx.onDom(() => {
      applyBodyStyle()
      syncBackgroundSheet()
    })
    return () => {
      stop()
      const style = document.getElementById('SP_PLUS_INJSTYLE')
      if (style) style.textContent = ''
      destroyColorPicker()
      document.querySelector('#SP_PLUS_BODYSTYLE')?.remove()
      releaseBackgroundSheet()
    }
  },
}
