import type { Feature } from '@/core/feature'
import { ensureStyle } from '@/core/appearance'
import mainCss from '@/styles/main.scss?inline'

const baseStyleId = 'SP_PLUS_BASE'

export const baseStyles: Feature = {
  id: 'base-styles',
  core: true,
  start: () => {
    ensureStyle(baseStyleId, mainCss)
  },
}
