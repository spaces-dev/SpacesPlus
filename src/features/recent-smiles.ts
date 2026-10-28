import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { LocalStorage } from '@zero-dependency/storage'
import { log } from '@/core/log'
import { modalConfirm } from '@/core/modals'
import { getSettings, setSetting } from '@/core/settings-store'

type SmileEntry = [string, number, number]
type SmileMap = Record<string, SmileEntry>

const smiles = new LocalStorage<Record<string, unknown>>('sp_recent_smiles', {})
const maxLimit = /^(?:[1-9]\d?|1[01]\d|120)$/
let shiftHold = false

const imageSource = (image: HTMLImageElement) => image.currentSrc || image.src

function isEntry(value: unknown): value is SmileEntry {
  if (!Array.isArray(value) || value.length < 3) return false
  const [smile, width, height] = value
  return typeof smile === 'string' && smile !== ''
    && Number.isFinite(width) && width > 0
    && Number.isFinite(height) && height > 0
}

function readSmiles(): SmileMap {
  const next: SmileMap = {}
  for (const [key, value] of Object.entries(smiles.value)) {
    if (!isEntry(value)) continue
    next[key] = [value[0], value[1], value[2]]
  }
  return next
}

function compactSmiles() {
  const raw = smiles.value
  const next = readSmiles()
  const same = Object.keys(raw).length === Object.keys(next).length && Object.values(raw).every(isEntry)
  if (!same) smiles.write(next)
}

function smileKey(src: string) {
  try {
    return new URL(src, location.origin).pathname.split('/').pop() ?? ''
  } catch {
    return ''
  }
}

const smileSrc = (key: string) => `${location.origin}/i/sm/webp/${key}`

function cellSize(link: HTMLElement): [number, number] | null {
  const width = Number.parseInt(link.style.width, 10)
  const height = Number.parseInt(link.style.height, 10)
  if (width > 0 && height > 0) return [width, height]
  const box = link.getBoundingClientRect()
  const fallbackWidth = Math.round(box.width)
  const fallbackHeight = Math.round(box.height)
  if (fallbackWidth > 0 && fallbackHeight > 0) return [fallbackWidth, fallbackHeight]
  return null
}

function saveSmile(src: string, smile: string, size: [number, number]) {
  const key = smileKey(src)
  if (!key) return
  const max = getSettings().recentSmiles.max || 60
  const next: SmileMap = { [key]: [smile, size[0], size[1]] }
  for (const [storedKey, value] of Object.entries(readSmiles())) {
    if (storedKey === key) continue
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
  const key = image ? smileKey(imageSource(image)) : ''
  const found = Object.entries(readSmiles()).find(([storedKey, entry]) => {
    return (key !== '' && storedKey === key) || (smile !== '' && entry[0] === smile)
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

function renderRecent(body: Element) {
  body.replaceChildren()
  const entries = Object.entries(readSmiles())
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

  const list = el('div', { className: 'smiles-menu__list' })
  for (const [key, [smile, width, height]] of entries) {
    const link = el('a', {
      href: '#',
      className: 'js-smile_menu_select smiles-menu__list-item sp_recent-smile',
    })
    link.dataset.value = smile
    link.style.width = `${width}px`
    link.style.height = `${height}px`
    link.style.lineHeight = `${height}px`
    link.append(el('img', {
      className: 'middle',
      src: smileSrc(key),
      alt: smile,
    }))
    list.append(link)
  }

  body.append(clear, list)
}

function syncShiftButtons() {
  if (!shiftHold) {
    document.querySelectorAll('.sp-recent-shift').forEach(node => node.remove())
    return
  }

  document.querySelectorAll('a.js-smile_menu_select').forEach((node) => {
    if (!(node instanceof HTMLAnchorElement)) return
    const label = storedEntry(node) ? 'Удалить' : 'Добавить'
    const current = node.querySelector('.sp-recent-shift')
    if (current) {
      if (current.textContent !== label) current.textContent = label
      return
    }

    node.append(el('span', {
      className: 'sp-recent-shift',
      textContent: label,
    }))
  })
}

function toggleStored(node: HTMLAnchorElement) {
  const smile = node.dataset.value
  const image = node.querySelector('img')
  const src = image ? imageSource(image) : ''
  const size = cellSize(node)
  if (!smile || !src || !size) return
  const stored = storedEntry(node)
  if (stored) {
    const next = readSmiles()
    delete next[stored.key]
    smiles.write(next)
  } else {
    saveSmile(src, smile, size)
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
    const size = cellSize(choice)
    if (!smile || !image || !size) return
    const src = imageSource(image)
    if (!src) return
    saveSmile(src, smile, size)
    return
  }

  if (!(target instanceof HTMLImageElement)) return
  const smile = target.getAttribute('smile')
  const host = target.closest('a')
  const size = host instanceof HTMLElement ? cellSize(host) : null
  if (!smile?.startsWith(':') || !target.src || !size) return
  saveSmile(target.src, smile, size)
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

  const show = el('input', {
    id: 'SP_RECENTS_SHOW',
    type: 'checkbox',
    className: 'sp-checkbox-square',
    checked: options.show,
  })
  show.onchange = () => {
    setSetting('recentSmiles.show', show.checked)
  }

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
    el('label', { className: 'list-link' }, [
      show,
      el('label', {
        htmlFor: 'SP_RECENTS_SHOW',
        textContent: 'Открывать недавние по умолчанию',
      }),
    ]),
    el('div', { className: 'sp_settings-wrap' }, [
      el('label', {
        className: 'label',
        innerHTML: 'Хранить смайликов и стикеров:<div class="label__desc">от 1 до 120</div>',
      }),
      max,
      el('div', {
        className: 'label__desc',
        textContent: 'С зажатым Shift в списке смайлов и стикеров у каждой ячейки появляется «Добавить» или «Удалить». Клик по всей ячейке добавляет или убирает смайл, меню не закрывается. Без Shift клик вставляет код в поле и запоминает его.',
      }),
    ]),
  ])
  anchor.parentElement?.after(panel)
}

export const recentSmiles: Feature = {
  id: 'recents',
  title: 'Ранее использованные смайлики',
  description: 'В меню смайликов добавляется раздел с ранее использованными смайликами. Чтобы смайл туда попал, выберите его из меню или нажмите «Добавить» с зажатым Shift.',
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
