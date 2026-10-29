import { el } from '@zero-dependency/dom'
import { applyBodyStyle, injectBackgroundCss } from '@/core/appearance'
import { log } from '@/core/log'
import { getSettings, setSetting } from '@/core/settings-store'
import { assetOrigin, loadSiteModules, readPage } from '@/core/site'

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

const backgrounds = [
  'default.png',
  'bananas.png',
  'cats.png',
  'ethnic-binary.png',
  'hearts.png',
  'skull-and-bones.png',
  'water.png',
  'stars.gif',
  'yellow-leaves.png',
  '10-years.png',
  '15bg.png',
  'triangle.png',
  'animal-eyes.png',
  'cube.png',
  'flowers.png',
  'girly-doodles.png',
  'japanese-cranes.png',
  'round-circle.png',
  'cicrle-flowers.png',
  'square-texture.png',
]

const imagePattern = /\.(?:jpg|jpeg|png|gif)(?:$|\?)/i
const colorPattern = /^#(?:[a-f0-9]{3}|[a-f0-9]{6})$/i

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
  setSetting('bodystyleSet.color', color)
  applyBodyStyle()
}

function imageField() {
  const { url } = getSettings().bodystyleSet
  const field = el('input', {
    type: 'text',
    id: 'image-input',
    className: 'text-input',
    value: url,
  })
  field.oninput = () => {
    const valid = isUrl(field.value) && imagePattern.test(field.value)
    field.classList.toggle('text-input_error_bg', !valid)
    if (!valid) return
    setSetting('bodystyleSet.url', field.value)
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

export function destroyColorPicker() {
  colorTicket += 1
  colorObserver?.disconnect()
  colorObserver = undefined
  const host = document.querySelector<HTMLElement>('#SP_WRAP_COLOR .js-bb_colorpicker')
  const $ = readPage(win => win.$)
  if (host && $) {
    const query = $(host)
    if (typeof query.colorpicker === 'function') query.colorpicker(false)
  }
  document.querySelector('#SP_WRAP_COLOR')?.remove()
}

const palette = [
  ['#90CAF9', '#80DEEA', '#A5D6A7', '#FFF59D', '#FFCC80', '#FFAB91', '#CE93D8'],
  ['#2196F3', '#00BCD4', '#4CAF50', '#FFEB3B', '#FF9800', '#F44336', '#9C27B0'],
  ['#1565C0', '#00838F', '#2E7D32', '#F9A825', '#EF6C00', '#C62828', '#6A1B9A'],
  ['#ECF0F1', '#CFD8DC', '#B0BEC5', '#97A6B0', '#546E7A', '#44565E', '#3A474C'],
]

function listLinkBorder() {
  const listLink = document.querySelector('.list-link')
  return listLink ? getComputedStyle(listLink).borderBottom : '1px solid #c5d3e1'
}

function showImages() {
  if (document.querySelector('#SP_WRAP_IMAGE')) return
  const toggle = document.querySelector('#sp_set_bodystyle_URL')?.closest('label')
  if (!toggle) return
  injectBackgroundCss()

  const gallery = el('div', { className: 'js-gallery_skip wbg oh tiles_block tiles_wrapper' })
  const wrap = el('div', {
    id: 'SP_WRAP_IMAGE',
    style: { borderTop: listLinkBorder() },
  }, imageField())
  toggle.after(wrap)

  for (const file of backgrounds) {
    const image = el('img', {
      className: 'preview s201_200',
      src: `${assetOrigin}/backgrounds/${file}`,
      style: { cursor: 'pointer' },
    })
    image.onclick = () => {
      const field = document.querySelector<HTMLInputElement>('#image-input')
      if (field) {
        field.value = image.src
        field.classList.remove('text-input_error_bg')
      }
      setSetting('bodystyleSet.url', image.src)
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
  if (document.querySelector('#SP_WRAP_COLOR')) return
  const toggle = document.querySelector('#sp_set_bodystyle_color')?.closest('label')
  if (!toggle) return
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
    id: 'SP_WRAP_COLOR',
    style: { borderTop: listLinkBorder() },
  }, el('table', { className: 'table__wrap bb-colorpicker' }, el('tbody', {}, el('tr', {}, [
    el('td', { className: 'table__cell' }, swatches),
    el('td', { className: 'table__cell table__cell_last' }, el('div', { className: 'stnd-block' }, pickerHost)),
  ]))))
  toggle.after(wrap)

  const ticket = ++colorTicket
  const loaded = loadSiteModules(['colorpicker', 'CommentWidget/Toolbar.css'], () => {
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
  if (document.querySelector('#SP_PLUS_BODYSTYLE')) return

  try {
    const { bodystyleSet } = getSettings()
    const imageToggle = el('input', {
      type: 'checkbox',
      id: 'sp_set_bodystyle_URL',
      className: 'sp-checkbox-square',
      checked: bodystyleSet.urlchecked,
    })
    const colorToggle = el('input', {
      type: 'checkbox',
      id: 'sp_set_bodystyle_color',
      className: 'sp-checkbox-square',
      checked: bodystyleSet.colorchecked,
    })

    imageToggle.onclick = () => {
      setSetting('bodystyleSet.urlchecked', imageToggle.checked)
      applyBodyStyle()
      if (imageToggle.checked) {
        showImages()
        return
      }
      document.querySelector('#SP_WRAP_IMAGE')?.remove()
    }

    colorToggle.onclick = () => {
      setSetting('bodystyleSet.colorchecked', colorToggle.checked)
      applyBodyStyle()
      if (colorToggle.checked) {
        showColors()
        return
      }
      destroyColorPicker()
    }

    const panel = el('div', { id: 'SP_PLUS_BODYSTYLE' }, [
      el('label', {
        className: 'stnd-link',
        style: { borderBottom: 'none' },
      }, [
        imageToggle,
        el('label', {
          htmlFor: 'sp_set_bodystyle_URL',
          innerHTML: 'Использовать изображение',
        }),
      ]),
      el('label', {
        className: 'stnd-link',
        style: { borderBottom: 'none' },
      }, [
        colorToggle,
        el('label', {
          htmlFor: 'sp_set_bodystyle_color',
          innerHTML: 'Использовать цвет',
        }),
      ]),
    ])

    anchor.append(panel)
    if (bodystyleSet.urlchecked) showImages()
    if (bodystyleSet.colorchecked) showColors()
  } catch (error) {
    log.error('bodystyle', error)
  }
}
