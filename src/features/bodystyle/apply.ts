import { el } from '@zero-dependency/dom'
import { getSettings } from '@/core/settings-store'

export function applyBodyStyle() {
  let style = document.getElementById('SP_PLUS_INJSTYLE')
  if (!style) {
    style = el('style', { id: 'SP_PLUS_INJSTYLE' })
    document.head.append(style)
  }

  const { bodystyleSet } = getSettings()
  const layers: string[] = []
  if (bodystyleSet.color && bodystyleSet.colorchecked) layers.push(`background-color:${bodystyleSet.color}`)
  if (bodystyleSet.url && bodystyleSet.urlchecked) layers.push(`background-image:url(${JSON.stringify(bodystyleSet.url)})`)

  style.textContent = layers.length ? `body,.root{${layers.join(';')}}` : ''
}
