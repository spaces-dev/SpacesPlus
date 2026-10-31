import type { Feature } from '@/core/feature'
import { withStyle } from '@/core/with-style'
import mainCss from '@/styles/main.scss?inline'

const baseStyleId = 'SP_PLUS_BASE'

export const baseStyles: Feature = {
  id: 'base-styles',
  core: true,
  start: withStyle(baseStyleId, mainCss, () => {}),
}
