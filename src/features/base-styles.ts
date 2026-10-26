import type { Feature } from '../core/feature'
import { injectBundledCss } from '../core/appearance'

export const baseStyles: Feature = {
  id: 'base-styles',
  core: true,
  start: () => {
    injectBundledCss()
  },
}
