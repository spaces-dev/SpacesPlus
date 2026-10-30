import type { CapturedSmile, SmileBox, SmileEntry } from './types'
import { el } from '@zero-dependency/dom'
import { modalConfirm } from '@/core/modals'
import { getSettings } from '@/core/settings-store'
import {
  imageSet,
  imageSource,
  positive,
  readSmiles,
  resetSmiles,
  restoreSet,
  saveSmile,
  storageKey,
  withOrigin,
  writeSmiles,
} from './storage'

export const openerSelector = '.js-bb_smile, button[name="smiles_btn"], .smiles-menu, .smiles_menu'

const addIcon = '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M7 2h2v5h5v2H9v5H7V9H2V7h5z"/></svg>'
const removeIcon = '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M3.3 2.3 8 7l4.7-4.7 1 1L9 8l4.7 4.7-1 1L8 9l-4.7 4.7-1-1L7 8 2.3 3.3z"/></svg>'

let shiftHold = false

export const shiftHeld = () => shiftHold

function captureSmile(link: HTMLElement): CapturedSmile {
  const image = link.querySelector('img')
  const imageWidth = image instanceof HTMLImageElement ? positive(image.getAttribute('width')) : 0
  const imageHeight = image instanceof HTMLImageElement ? positive(image.getAttribute('height')) : 0
  const cellWidth = positive(link.style.width)
  const cellHeight = positive(link.style.height)
  const cell = cellWidth > 0 && cellHeight > 0 ? [cellWidth, cellHeight] as SmileBox : null
  const graphic = imageWidth > 0 && imageHeight > 0 ? [imageWidth, imageHeight] as SmileBox : null
  const srcset = image instanceof HTMLImageElement ? imageSet(image) : ''
  return { cell, image: graphic, srcset }
}

function storedEntry(link: HTMLAnchorElement) {
  const smile = link.dataset.value ?? ''
  const image = link.querySelector('img')
  const path = image instanceof HTMLImageElement ? imageSource(image) : ''
  const found = Object.entries(readSmiles()).find(([key, entry]) => {
    return (path !== '' && storageKey(key) === path) || (smile !== '' && entry[0] === smile)
  })
  return found ? { key: found[0], entry: found[1] } : null
}

function menuBody(menu: Element) {
  return menu.querySelector('.smiles-menu__body, .smiles_menu-body')
}

function gridCell(entries: [string, SmileEntry][]) {
  let width = 0
  let height = 0
  for (const [, entry] of entries) {
    const imageWidth = entry.length >= 5 ? entry[3] ?? 0 : 0
    const imageHeight = entry.length >= 5 ? entry[4] ?? 0 : 0
    width = Math.max(width, entry[1] > 0 ? entry[1] : imageWidth)
    height = Math.max(height, entry[2] > 0 ? entry[2] : imageHeight)
  }
  if (width <= 0 || height <= 0) return null
  return [width, height] as SmileBox
}

function absorbSources() {
  const next = { ...readSmiles() }
  let changed = false
  for (const node of document.querySelectorAll('a.js-smile_menu_select img')) {
    if (!(node instanceof HTMLImageElement)) continue
    const link = node.closest('a')
    if (!(link instanceof HTMLAnchorElement) || link.classList.contains('sp_recent-smile')) continue
    const smile = link.dataset.value ?? ''
    const src = imageSource(node)
    if (!smile || !src.startsWith('/') || next[src]) continue
    const stale = Object.entries(next).find(([key, entry]) => !key.startsWith('/') && entry[0] === smile)
    if (!stale) continue
    const entry = stale[1]
    const imageWidth = positive(node.getAttribute('width')) || (entry.length >= 5 ? entry[3] ?? 0 : 0)
    const imageHeight = positive(node.getAttribute('height')) || (entry.length >= 5 ? entry[4] ?? 0 : 0)
    const cellWidth = positive(link.style.width) || entry[1]
    const cellHeight = positive(link.style.height) || entry[2]
    const set = imageSet(node)
    delete next[stale[0]]
    if (imageWidth > 0 && imageHeight > 0) {
      next[src] = set
        ? [smile, cellWidth, cellHeight, imageWidth, imageHeight, set]
        : [smile, cellWidth, cellHeight, imageWidth, imageHeight]
    } else {
      next[src] = [smile, cellWidth, cellHeight]
    }
    changed = true
  }
  if (changed) writeSmiles(next)
}

function syncShiftButtons() {
  if (!shiftHold) {
    document.querySelectorAll('.sp-recent-shift').forEach(node => node.remove())
    document.querySelectorAll('.sp-recent-shift-host').forEach(node => node.classList.remove('sp-recent-shift-host'))
    return
  }

  document.querySelectorAll('a.js-smile_menu_select').forEach((node) => {
    if (!(node instanceof HTMLAnchorElement)) return
    const stored = Boolean(storedEntry(node))
    const title = stored ? 'Удалить' : 'Добавить'
    const icon = stored ? removeIcon : addIcon
    const className = stored ? 'sp-recent-shift sp-recent-shift--remove' : 'sp-recent-shift sp-recent-shift--add'
    const current = node.querySelector('.sp-recent-shift')
    if (current instanceof HTMLElement) {
      if (current.title !== title || current.className !== className) {
        current.title = title
        current.className = className
        current.innerHTML = icon
      }
      return
    }

    node.classList.add('sp-recent-shift-host')
    node.append(el('span', {
      className,
      title,
      innerHTML: icon,
    }))
  })
}

export function setShiftHold(next: boolean) {
  if (next === shiftHold) return
  shiftHold = next
  syncShiftButtons()
}

export function releaseShift() {
  if (!shiftHold) return
  shiftHold = false
  syncShiftButtons()
}

export function dropShiftHold() {
  shiftHold = false
}

function renderRecent(body: Element) {
  absorbSources()
  const entries = Object.entries(readSmiles())
  body.replaceChildren()
  if (!entries.length) {
    body.append(el('div', {
      className: 'sp-recent-empty',
      innerHTML: 'Список ранее использованных смайликов пуст<br><br>Используйте смайлики из меню, чтобы добавить их сюда',
    }))
    return
  }

  const clear = el('span', {
    className: 'sp-recent-clear',
    title: 'Очистить',
    textContent: 'Очистить',
  })
  clear.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    modalConfirm('Вы действительно хотите очистить ранее использованные смайлики?', true, clearSmiles)
  })

  const cell = gridCell(entries)
  const list = el('div', { className: 'smiles-menu__list' })
  for (const [key, entry] of entries) {
    const [smile, , , imageWidth = 0, imageHeight = 0] = entry
    const link = el('a', {
      href: '#',
      className: 'js-smile_menu_select smiles-menu__list-item sp_recent-smile',
    })
    link.dataset.value = smile
    if (cell) {
      link.style.width = `${cell[0]}px`
      link.style.height = `${cell[1]}px`
      link.style.lineHeight = `${cell[1]}px`
    }
    const image = el('img', {
      className: 'middle',
      alt: smile,
    })
    if (key.startsWith('/')) {
      image.src = withOrigin(key)
      const set = entry.length === 6 ? restoreSet(entry[5] ?? '') : ''
      if (set) image.srcset = set
    }
    if (imageWidth > 0 && imageHeight > 0) {
      image.width = imageWidth
      image.height = imageHeight
    }
    link.append(image)
    list.append(link)
  }

  body.append(clear, list)
}

export function paintRecent() {
  const tab = document.getElementById('SP_RECENT_SMILES')
  if (!tab?.classList.contains('smiles-menu__tab--is-active')) return
  const menu = tab.closest('.smiles-menu, .smiles_menu')
  if (!menu) return
  const body = menuBody(menu)
  if (body) renderRecent(body)
}

function clearSmiles() {
  resetSmiles()
  paintRecent()
}

export function toggleStored(node: HTMLAnchorElement) {
  const smile = node.dataset.value
  const image = node.querySelector('img')
  const src = image instanceof HTMLImageElement ? imageSource(image) : ''
  const captured = captureSmile(node)
  if (!smile || !src || (!captured.cell && !captured.image)) return
  const stored = storedEntry(node)
  if (stored) {
    const next = readSmiles()
    delete next[stored.key]
    writeSmiles(next)
  } else {
    saveSmile(src, smile, captured)
  }
  paintRecent()
  syncShiftButtons()
}

export function rememberClick(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Element) || target.closest('.sp-recent-shift')) return

  const choice = target.closest('a.js-smile_menu_select')
  if (choice instanceof HTMLAnchorElement) {
    const smile = choice.dataset.value
    const image = choice.querySelector('img')
    const captured = captureSmile(choice)
    if (!smile || !(image instanceof HTMLImageElement) || (!captured.cell && !captured.image)) return
    const src = imageSource(image)
    if (!src) return
    saveSmile(src, smile, captured)
    return
  }

  if (!(target instanceof HTMLImageElement)) return
  const smile = target.getAttribute('smile')
  const host = target.closest('a')
  const captured = host instanceof HTMLElement ? captureSmile(host) : null
  if (!smile?.startsWith(':') || !target.src || !captured || (!captured.cell && !captured.image)) return
  saveSmile(target.src, smile, captured)
}

function mount(menu: Element) {
  const header = menu.querySelector('.smiles-menu__header, .smiles_menu-header')
  const body = menuBody(menu)
  if (!header || !body || header.querySelector('#SP_RECENT_SMILES')) return

  const button = el('div', {
    id: 'SP_RECENT_SMILES',
    className: 'smiles-menu__tab',
    title: 'Ранее использованные',
    textContent: 'Недавние',
  })
  button.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    const current = menuBody(menu)
    if (!current) return
    header.querySelectorAll('.smiles-menu__tab--is-active').forEach((tab) => {
      tab.classList.remove('smiles-menu__tab--is-active')
    })
    button.classList.add('smiles-menu__tab--is-active')
    renderRecent(current)
    syncShiftButtons()
  })

  header.prepend(button)
  const opened = menu instanceof HTMLElement ? menu.dataset.spRecentShown : undefined
  if (opened || !getSettings().recentSmiles.show || !Object.keys(readSmiles()).length) return
  if (menu instanceof HTMLElement) menu.dataset.spRecentShown = '1'
  button.click()
}

export function refreshMenus() {
  document.querySelectorAll('.smiles-menu, .smiles_menu').forEach((menu) => {
    mount(menu)
  })
  syncShiftButtons()
}
