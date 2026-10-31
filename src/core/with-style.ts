import type { Disposer, FeatureContext } from './feature'
import { ensureStyle, removeStyle } from './appearance'

export function withStyle(id: string, css: string, start: (ctx: FeatureContext) => void | Disposer) {
  return (ctx: FeatureContext): Disposer => {
    ensureStyle(id, css)
    const stop = start(ctx) ?? (() => {})
    return () => {
      stop()
      removeStyle(id)
    }
  }
}
