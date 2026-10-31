import { el } from '@zero-dependency/dom'
import { byId } from '@/core/dom'
import { getSettings } from '@/core/settings-store'
import { bodyDom } from './ids'

export function applyBodyStyle() {
  let style = byId(bodyDom.injected)
  if (!style) {
    style = el('style', { id: bodyDom.injected })
    document.head.append(style)
  }

  const { bodystyleSet } = getSettings()
  const layers: string[] = []
  if (bodystyleSet.color && bodystyleSet.colorchecked) layers.push(`background-color:${bodystyleSet.color}`)
  if (bodystyleSet.url && bodystyleSet.urlchecked) layers.push(`background-image:url(${JSON.stringify(bodystyleSet.url)})`)

  style.textContent = layers.length ? `body,.root{${layers.join(';')}}` : ''
}
