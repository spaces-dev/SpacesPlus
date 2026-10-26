import { el } from '@zero-dependency/dom'
import bodyStyleCss from '../../public/css/bodystyle.css?inline'
import menuCss from '../../public/css/menu.css?inline'
import stickerCss from '../../public/css/sticker.css?inline'
import userContentCss from '../../public/css/user-content.css?inline'
import { getSettings } from './settings-store'

export function injectStyle(id: string, css: string) {
  if (document.getElementById(id)) return
  document.head.append(el('style', { id, textContent: css }))
}

export function injectBundledCss() {
  injectStyle('SP_PLUS_MENU', menuCss)
  injectStyle('SP_STICKER_CSS', stickerCss)
}

export function injectBackgroundCss() {
  injectStyle('SP_PLUS_IMAGE_STYLE', bodyStyleCss)
}

export function injectColorCss() {
  injectStyle('SP_PLUS_CP_STYLE', userContentCss)
}

export function applyBodyStyle() {
  let style = document.getElementById('SP_PLUS_INJSTYLE')
  if (!style) {
    style = el('style', { id: 'SP_PLUS_INJSTYLE' })
    document.head.append(style)
  }

  const { bodystyle, bodystyleSet } = getSettings()
  if (!bodystyle) {
    style.textContent = ''
    return
  }

  if (bodystyleSet.url && bodystyleSet.urlchecked) {
    style.textContent = `body,.root{background-image:url(${bodystyleSet.url})}`
    return
  }

  if (bodystyleSet.color && bodystyleSet.colorchecked) {
    style.textContent = `body,.root{background-color:${bodystyleSet.color}}`
  }
}
