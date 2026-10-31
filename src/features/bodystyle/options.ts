import { el } from '@zero-dependency/dom'
import { ensureStyle, removeStyle } from '@/core/appearance'
import { onSiteChange, siteCheckbox } from '@/core/checkbox'
import { byId } from '@/core/dom'
import { clearInvalid, markInvalid } from '@/core/fields'
import { log } from '@/core/log'
import { getSettings, setSetting, settingKey } from '@/core/settings-store'
import { assetOrigin, loadSiteModules, readPage } from '@/core/site'
import backgroundCss from '@/styles/features/bodystyle.scss?inline'
import { applyBodyStyle } from './apply'
import { backgroundFiles } from './files'
import { bodyDom } from './ids'

interface SiteColorPicker {
  setColor: (hex: string) => void
}

interface SiteQuery {
  colorpicker: (flag?: false) => SiteColorPicker | null
  on: (event: string, handler: (event: unknown, data?: { color?: string }) => void) => void
}

interface SiteJQuery {
  (target: Element): SiteQuery
}

declare global {
  interface Window {
    $?: SiteJQuery
  }
}

const imagePattern = /\.(?:jpg|jpeg|png|gif)(?:$|\?)/i
const colorPattern = /^#(?:[a-f0-9]{3}|[a-f0-9]{6})$/i
const sheetSelector = `#${bodyDom.imageWrap}, #${bodyDom.colorWrap}`
const colorPickerModules = ['colorpicker', 'CommentWidget/Toolbar.css']

const palette = [
  ['#90CAF9', '#80DEEA', '#A5D6A7', '#FFF59D', '#FFCC80', '#FFAB91', '#CE93D8'],
  ['#2196F3', '#00BCD4', '#4CAF50', '#FFEB3B', '#FF9800', '#F44336', '#9C27B0'],
  ['#1565C0', '#00838F', '#2E7D32', '#F9A825', '#EF6C00', '#C62828', '#6A1B9A'],
  ['#ECF0F1', '#CFD8DC', '#B0BEC5', '#97A6B0', '#546E7A', '#44565E', '#3A474C'],
]

function isUrl(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

let colorTicket = 0
let colorObserver: MutationObserver | undefined

function normalizeColor(value: string) {
  const color = value.startsWith('#') ? value : `#${value}`
  return color.toUpperCase()
}

function applyColor(value: string) {
  const color = normalizeColor(value)
  if (!colorPattern.test(color)) return
  if (getSettings().bodystyleSet.color.toUpperCase() === color) return
  setSetting(settingKey.backgroundColor, color)
  applyBodyStyle()
}

function imageField() {
  const { url } = getSettings().bodystyleSet
  const field = el('input', {
    type: 'text',
    id: bodyDom.imageInput,
    className: 'text-input',
    value: url,
  })
  field.oninput = () => {
    const valid = isUrl(field.value) && imagePattern.test(field.value)
    markInvalid(field, !valid)
    if (!valid) return
    setSetting(settingKey.backgroundUrl, field.value)
    applyBodyStyle()
  }
  return el('div', {
    style: { padding: '15px' },
  }, el('div', { className: 'text-input__wrap' }, [
    el('label', {
      className: 'label',
      innerHTML: 'Ссылка на изображение:<div class="label__desc">.jpg или .png</div>',
    }),
    field,
  ]))
}

export function syncBackgroundSheet() {
  if (document.querySelector(sheetSelector)) {
    ensureStyle(bodyDom.sheet, backgroundCss)
    return
  }
  removeStyle(bodyDom.sheet)
}

export function releaseBackgroundSheet() {
  removeStyle(bodyDom.sheet)
}

export function destroyColorPicker() {
  colorTicket += 1
  colorObserver?.disconnect()
  colorObserver = undefined
  const host = document.querySelector<HTMLElement>(`#${bodyDom.colorWrap} .js-bb_colorpicker`)
  const $ = readPage(win => win.$)
  if (host && $) {
    const query = $(host)
    if (typeof query.colorpicker === 'function') query.colorpicker(false)
  }
  byId(bodyDom.colorWrap)?.remove()
  syncBackgroundSheet()
}

function showImages() {
  if (byId(bodyDom.imageWrap)) return
  const toggle = byId(bodyDom.imageToggle)?.closest('label')
  if (!toggle) return
  ensureStyle(bodyDom.sheet, backgroundCss)

  const gallery = el('div', {
    className: 'js-gallery_skip wbg oh tiles_block tiles_wrapper',
    style: { paddingTop: 0 },
  })
  const wrap = el('div', {
    id: bodyDom.imageWrap,
    className: 'sp-separator-top',
  }, imageField())
  toggle.after(wrap)

  for (const file of backgroundFiles) {
    const image = el('img', {
      className: 'preview s201_200',
      src: `${assetOrigin}/backgrounds/${file}`,
      style: { cursor: 'pointer' },
    })
    image.onclick = () => {
      const field = byId<HTMLInputElement>(bodyDom.imageInput)
      if (field) {
        field.value = image.src
        clearInvalid(field)
      }
      setSetting(settingKey.backgroundUrl, image.src)
      applyBodyStyle()
    }
    gallery.append(el('div', { className: 'js-file_item tiled_item tiled_item-200' }, el('div', { className: 'tiled_inner t_center relative' }, el('span', { className: 'relative sp_bg-items' }, el('div', { className: 'tiled-preview border' }, image)))))
  }

  wrap.append(gallery)
  applyBodyStyle()
}

function mountColorPicker(pickerHost: HTMLElement, wrap: HTMLElement) {
  const $ = readPage(win => win.$)
  if (!$) {
    log.error('colorpicker', 'jQuery is missing')
    return
  }

  const query = $(pickerHost)
  const picker = query.colorpicker()
  if (!picker) {
    log.error('colorpicker', 'widget failed')
    return
  }

  picker.setColor(getSettings().bodystyleSet.color)

  query.on('colorpicker:select', (_event, data) => {
    if (data?.color) applyColor(data.color)
  })

  const preview = pickerHost.querySelector<HTMLElement>('.colorpicker-color')
  const pickerInput = pickerHost.querySelector<HTMLInputElement>('input[name=color]')
  if (preview && pickerInput) {
    colorObserver = new MutationObserver(() => {
      applyColor(pickerInput.value)
    })
    colorObserver.observe(preview, { attributes: true, attributeFilter: ['style'] })
  }

  for (const swatch of wrap.querySelectorAll<HTMLElement>('.js-bb_color')) {
    swatch.addEventListener('click', () => {
      const color = swatch.dataset.val
      if (!color) return
      applyColor(color)
      picker.setColor(color)
    })
  }
}

function showColors() {
  if (byId(bodyDom.colorWrap)) return
  const toggle = byId(bodyDom.colorToggle)?.closest('label')
  if (!toggle) return
  ensureStyle(bodyDom.sheet, backgroundCss)
  const swatches = el('div', { className: 'stnd-block' })
  for (const row of palette) {
    for (const color of row) {
      const swatch = el('div', {
        className: 'js-bb_color toolbar-color pointer',
        style: { backgroundColor: color },
      })
      swatch.dataset.tag = 'fon'
      swatch.dataset.val = color
      swatches.append(swatch)
    }
    swatches.append(el('br'))
  }

  const pickerHost = el('div', { className: 'js-bb_colorpicker' })
  const wrap = el('div', {
    id: bodyDom.colorWrap,
    className: 'sp-separator-top',
  }, el('table', { className: 'table__wrap bb-colorpicker' }, el('tbody', {}, el('tr', {}, [
    el('td', { className: 'table__cell' }, swatches),
    el('td', { className: 'table__cell table__cell_last' }, el('div', { className: 'stnd-block' }, pickerHost)),
  ]))))
  toggle.after(wrap)

  const ticket = ++colorTicket
  const loaded = loadSiteModules(colorPickerModules, () => {
    if (ticket !== colorTicket || !pickerHost.isConnected) return
    try {
      mountColorPicker(pickerHost, wrap)
    } catch (error) {
      log.error('colorpicker', error)
    }
  }, () => {
    log.error('colorpicker', 'module load failed')
  })
  if (!loaded) log.error('colorpicker', 'site loader is missing')
}

export function renderBackgroundOptions(anchor: HTMLElement) {
  if (byId(bodyDom.panel)) return

  try {
    const { bodystyleSet } = getSettings()
    const imageToggle = siteCheckbox(bodyDom.imageToggle, bodystyleSet.urlchecked)
    const colorToggle = siteCheckbox(bodyDom.colorToggle, bodystyleSet.colorchecked)
    imageToggle.label.style.borderBottom = 'none'
    colorToggle.label.style.borderBottom = 'none'
    imageToggle.label.append('Использовать изображение')
    colorToggle.label.append('Использовать цвет')

    onSiteChange(imageToggle.input, (checked) => {
      setSetting(settingKey.backgroundImageOn, checked)
      applyBodyStyle()
      if (checked) {
        showImages()
        return
      }
      byId(bodyDom.imageWrap)?.remove()
      syncBackgroundSheet()
    })

    onSiteChange(colorToggle.input, (checked) => {
      setSetting(settingKey.backgroundColorOn, checked)
      applyBodyStyle()
      if (checked) {
        showColors()
        return
      }
      destroyColorPicker()
    })

    const panel = el('div', { id: bodyDom.panel }, [
      imageToggle.label,
      colorToggle.label,
    ])

    anchor.append(panel)
    if (bodystyleSet.urlchecked) showImages()
    if (bodystyleSet.colorchecked) showColors()
  } catch (error) {
    log.error('bodystyle', error)
  }
}
