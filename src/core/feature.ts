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
  optionsId?: string
  start: (ctx: FeatureContext) => void | Disposer
  renderOptions?: (anchor: HTMLElement) => void
  onToggle?: (enabled: boolean) => void
}
