import { el } from '@zero-dependency/dom'

export function ensureStyle(id: string, css: string) {
  if (document.getElementById(id)) return
  document.head.append(el('style', { id, textContent: css }))
}

export function removeStyle(id: string) {
  document.getElementById(id)?.remove()
}
