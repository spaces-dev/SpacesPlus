import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { LocalStorage } from '@zero-dependency/storage'
import { onSiteChange, siteCheckbox } from '@/core/checkbox'
import { log } from '@/core/log'
import { modalConfirm } from '@/core/modals'
import { getSettings, setSetting } from '@/core/settings-store'

type SmileEntry
  = | [string, number, number]
    | [string, number, number, number, number]
    | [string, number, number, number, number, string]
type SmileMap = Record<string, SmileEntry>
type SmileBox = [number, number]
type CapturedSmile = {
  cell: SmileBox | null
  image: SmileBox | null
  srcset: string
}

const smiles = new LocalStorage<Record<string, unknown>>('sp_recent_smiles', {})
const maxLimit = /^(?:[1-9]\d?|1[01]\d|120)$/
let shiftHold = false

function sitePath(src: string) {
  try {
    const url = new URL(src, location.origin)
    return `${url.pathname}${url.search}`
  } catch {
    return src
  }
}

function siteSet(srcset: string) {
  return srcset.replace(/https?:\/\/[^/\s,]+/g, '')
}

function withOrigin(path: string) {
  try {
    const url = new URL(path, location.origin)
    return `${location.origin}${url.pathname}${url.search}`
  } catch {
    return path
  }
}

function restoreSet(srcset: string) {
  if (!srcset) return ''
  return srcset.replace(/(^|,\s*)(?:https?:\/\/[^/\s,]+)?(?=\/)/g, `$1${location.origin}`)
}

function imageSource(image: HTMLImageElement) {
  const raw = image.getAttribute('src') || image.currentSrc || image.src
  return sitePath(raw)
}

function imageSet(image: HTMLImageElement) {
  return siteSet(image.getAttribute('srcset') ?? '')
}

function isUrl(value: string) {
  return value.startsWith('http://') || value.startsWith('https://')
}

function isSize(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value > 0
}

function isEntry(value: unknown): value is SmileEntry {
  if (!Array.isArray(value)) return false
  const [smile, cellWidth, cellHeight, imageWidth, imageHeight, set] = value
  if (typeof smile !== 'string' || smile === '') return false
  if (value.length === 6 && typeof set !== 'string') return false
  if (value.length === 3) return isSize(cellWidth) && isSize(cellHeight)
  if (value.length !== 5 && value.length !== 6) return false
  const cellOk = (cellWidth === 0 && cellHeight === 0) || (isSize(cellWidth) && isSize(cellHeight))
  return cellOk && isSize(imageWidth) && isSize(imageHeight)
}

function storageKey(key: string) {
  if (isUrl(key) || key.startsWith('/')) return sitePath(key)
  return key
}

function readSmiles(): SmileMap {
  const next: SmileMap = {}
  for (const [key, value] of Object.entries(smiles.value)) {
    if (!isEntry(value)) continue
    const stored = storageKey(key)
    if (next[stored]) continue
    const set = value.length === 6 ? siteSet(value[5] ?? '') : ''
    if (value.length === 6) next[stored] = [value[0], value[1], value[2], value[3], value[4], set]
    else if (value.length === 5) next[stored] = [value[0], value[1], value[2], value[3], value[4]]
    else next[stored] = [value[0], value[1], value[2]]
  }
  return next
}

function compactSmiles() {
  const raw = smiles.value
  const next = readSmiles()
  if (JSON.stringify(raw) !== JSON.stringify(next)) smiles.write(next)
}

function positive(value: string | null) {
  const number = Number.parseInt(value ?? '', 10)
  return number > 0 ? number : 0
}

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

function saveSmile(src: string, smile: string, captured: CapturedSmile) {
  const key = sitePath(src)
  if (!key.startsWith('/') || (!captured.cell && !captured.image)) return
  const max = getSettings().recentSmiles.max || 60
  const cell = captured.cell ?? [0, 0]
  const image = captured.image
  const set = siteSet(captured.srcset)
  let record: SmileEntry = [smile, cell[0], cell[1]]
  if (image) {
    record = set
      ? [smile, cell[0], cell[1], image[0], image[1], set]
      : [smile, cell[0], cell[1], image[0], image[1]]
  }
  const next: SmileMap = { [key]: record }
  for (const [storedKey, value] of Object.entries(readSmiles())) {
    if (storedKey === key || value[0] === smile) continue
    next[storedKey] = value
    if (Object.keys(next).length >= max) break
  }
  smiles.write(next)
}

function trimSmiles(max: number) {
  const next: SmileMap = {}
  for (const [key, value] of Object.entries(readSmiles())) {
    next[key] = value
    if (Object.keys(next).length >= max) break
  }
  smiles.write(next)
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

function paintRecent() {
  const tab = document.getElementById('SP_RECENT_SMILES')
  if (!tab?.classList.contains('smiles-menu__tab--is-active')) return
  const menu = tab.closest('.smiles-menu, .smiles_menu')
  if (!menu) return
  const body = menuBody(menu)
  if (body) renderRecent(body)
}

function clearSmiles() {
  smiles.reset()
  paintRecent()
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
  const next: SmileMap = { ...readSmiles() }
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
  if (changed) smiles.write(next)
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

const addIcon = '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M7 2h2v5h5v2H9v5H7V9H2V7h5z"/></svg>'
const removeIcon = '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M3.3 2.3 8 7l4.7-4.7 1 1L9 8l4.7 4.7-1 1L8 9l-4.7 4.7-1-1L7 8 2.3 3.3z"/></svg>'

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

function toggleStored(node: HTMLAnchorElement) {
  const smile = node.dataset.value
  const image = node.querySelector('img')
  const src = image instanceof HTMLImageElement ? imageSource(image) : ''
  const captured = captureSmile(node)
  if (!smile || !src || (!captured.cell && !captured.image)) return
  const stored = storedEntry(node)
  if (stored) {
    const next = readSmiles()
    delete next[stored.key]
    smiles.write(next)
  } else {
    saveSmile(src, smile, captured)
  }
  paintRecent()
  syncShiftButtons()
}

function rememberClick(event: MouseEvent) {
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

function refreshMenus() {
  document.querySelectorAll('.smiles-menu, .smiles_menu').forEach((menu) => {
    mount(menu)
  })
  syncShiftButtons()
}

const openerSelector = '.js-bb_smile, button[name="smiles_btn"], .smiles-menu, .smiles_menu'

function renderRecentOptions(anchor: HTMLElement) {
  if (document.querySelector('#SP_PLUS_RECENTS')) return
  const { recentSmiles: options } = getSettings()

  const show = siteCheckbox('SP_RECENTS_SHOW', options.show)
  show.label.append('Открывать недавние по умолчанию')
  onSiteChange(show.input, (checked) => {
    setSetting('recentSmiles.show', checked)
  })

  const max = el('input', {
    type: 'text',
    className: 'text-input',
    size: 4,
    maxLength: 3,
    value: String(options.max),
    style: { marginBottom: '7px' },
  })
  max.oninput = () => {
    const valid = maxLimit.test(max.value)
    max.classList.toggle('text-input_error_bg', !valid)
    if (!valid) return
    const limit = Number(max.value)
    setSetting('recentSmiles.max', limit)
    trimSmiles(limit)
    paintRecent()
  }

  const panel = el('div', { id: 'SP_PLUS_RECENTS' }, [
    show.label,
    el('div', { className: 'sp_settings-wrap' }, [
      el('label', {
        className: 'label',
        innerHTML: 'Хранить смайликов и стикеров:<div class="label__desc">от 1 до 120</div>',
      }),
      max,
      el('div', {
        className: 'label__desc grey',
        textContent: 'С зажатым Shift в правом верхнем углу ячейки появляется плюс или крестик. Плюс добавляет смайл в недавние, крестик убирает. Клик по ячейке не закрывает меню. Без Shift клик вставляет код в поле и запоминает его.',
      }),
    ]),
  ])
  anchor.parentElement?.after(panel)
}

export const recentSmiles: Feature = {
  id: 'recents',
  title: 'Ранее использованные смайлики',
  description: 'В меню смайликов добавляется раздел с ранее использованными смайликами. Чтобы смайл туда попал, выберите его из меню или с зажатым Shift нажмите на ячейку: плюс в правом верхнем углу добавляет, крестик убирает.',
  optionsId: 'SP_PLUS_RECENTS',
  renderOptions: renderRecentOptions,
  start: () => {
    compactSmiles()

    const onClick = (event: MouseEvent) => {
      const target = event.target
      if (shiftHold && target instanceof Element) {
        const choice = target.closest('a.js-smile_menu_select')
        if (choice instanceof HTMLAnchorElement) {
          event.preventDefault()
          event.stopPropagation()
          toggleStored(choice)
          return
        }
      }

      rememberClick(event)
      if (!(target instanceof Element) || !target.closest(openerSelector)) return
      requestAnimationFrame(refreshMenus)
    }

    const onShift = (event: KeyboardEvent) => {
      if (event.key !== 'Shift') return
      const next = event.type === 'keydown'
      if (next === shiftHold) return
      shiftHold = next
      syncShiftButtons()
    }

    const onBlur = () => {
      if (!shiftHold) return
      shiftHold = false
      syncShiftButtons()
    }

    const observer = new MutationObserver(() => {
      try {
        refreshMenus()
      } catch (error) {
        log.error('recents', error)
      }
    })

    document.addEventListener('click', onClick, true)
    window.addEventListener('keydown', onShift)
    window.addEventListener('keyup', onShift)
    window.addEventListener('blur', onBlur)
    observer.observe(document.documentElement, { childList: true, subtree: true })
    refreshMenus()

    return () => {
      document.removeEventListener('click', onClick, true)
      window.removeEventListener('keydown', onShift)
      window.removeEventListener('keyup', onShift)
      window.removeEventListener('blur', onBlur)
      observer.disconnect()
      shiftHold = false
    }
  },
}
