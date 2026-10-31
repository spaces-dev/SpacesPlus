import type { Settings } from '@/types/settings'
import { isTouch } from './site'

export type Disposer = () => void

export interface FeatureContext {
  onDom: (apply: () => void) => Disposer
}

export interface Feature {
  id: string
  title?: string
  description?: string
  desktopOnly?: boolean
  core?: boolean
  listed?: boolean
  optionsId?: string
  start: (ctx: FeatureContext) => void | Disposer
  renderOptions?: (anchor: HTMLElement) => void
  onToggle?: (enabled: boolean) => void | false
}

export const defineToggle = <K extends keyof Settings>(feature: Feature & { id: K }): Feature => feature

export const unavailableOnTouch = (feature: Feature) => Boolean(feature.desktopOnly && isTouch())
