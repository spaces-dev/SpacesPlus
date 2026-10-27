import type { Assets } from '../../types/assets'
import { el } from '@zero-dependency/dom'
import { applyBodyStyle, injectBackgroundCss, injectColorCss } from '../../core/appearance'
import { http } from '../../core/http'
import { log } from '../../core/log'
import { getSettings, setSetting } from '../../core/settings-store'
import { assetOrigin, revision } from '../../core/site'

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

interface ColorPicker {
  enter: () => void
  set: (color: string) => void
  on: (event: 'change', callback: (value: string) => void) => void
}

declare const CP: new (target: Element, flag: boolean, container: Element) => ColorPicker

function setColorInputs(color: string) {
  const named = document.querySelector<HTMLInputElement>('input[name=color]')
  const field = document.querySelector<HTMLInputElement>('#color-input')
  const preview = document.querySelector<HTMLElement>('.colorpicker-color')
  if (named) named.value = color
  if (field) field.value = color
  if (preview) preview.style.backgroundColor = color
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

async function showImages() {
  if (document.querySelector('#SP_WRAP_IMAGE')) return
  document.querySelector('#SP_WRAP_COLOR')?.remove()
  document.querySelector('#SP_PLUS_CP_STYLE')?.remove()
  injectBackgroundCss()

  const host = document.querySelector('#SP_PLUS_BODYSTYLE')
  if (!host) return
  const gallery = el('div', { className: 'js-gallery_skip wbg oh tiles_block tiles_wrapper' })
  const wrap = el('div', {
    id: 'SP_WRAP_IMAGE',
    style: { borderTop: listLinkBorder() },
  })

  const response = await http<Assets>(`${assetOrigin}/data.json?r=${revision}`)
  if (response.status !== 200 || !response.parsedBody?.backgrounds) return

  for (const file of response.parsedBody.backgrounds) {
    const image = el('img', {
      className: 'preview s201_200',
      src: `${assetOrigin}/backgrounds/${file}`,
      style: { cursor: 'pointer' },
    })
    image.onclick = () => {
      const field = document.querySelector<HTMLInputElement>('#image-input')
      if (field) field.value = image.src
      setSetting('bodystyleSet.url', image.src)
      applyBodyStyle()
    }
    gallery.append(el('div', { className: 'js-file_item tiled_item tiled_item-200' }, el('div', { className: 'tiled_inner t_center relative' }, el('span', { className: 'relative sp_bg-items' }, el('div', { className: 'tiled-preview border' }, image)))))
  }

  wrap.append(gallery)
  host.append(wrap)
  applyBodyStyle()
}

function showColors() {
  if (document.querySelector('#SP_WRAP_COLOR')) return
  document.querySelector('#SP_WRAP_IMAGE')?.remove()
  document.querySelector('#SP_PLUS_IMAGE_STYLE')?.remove()
  injectColorCss()

  const host = document.querySelector('#SP_PLUS_BODYSTYLE')
  if (!host) return
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
  host.append(wrap)

  setTimeout(() => {
    if (typeof CP !== 'function') return
    const picker = new CP(pickerHost, false, pickerHost)
    const field = document.querySelector<HTMLInputElement>('#color-input')
    field?.addEventListener('change', () => {
      if (!field.value || !colorPattern.test(field.value)) {
        field.classList.add('sp-input-error')
        return
      }
      setSetting('bodystyleSet.color', field.value)
      applyBodyStyle()
      picker.set(getSettings().bodystyleSet.color)
      field.classList.remove('sp-input-error')
    })
    picker.enter()
    picker.set(getSettings().bodystyleSet.color)
    picker.on('change', (value) => {
      const color = `#${value.toUpperCase()}`
      setColorInputs(color)
      setSetting('bodystyleSet.color', color)
      applyBodyStyle()
    })

    for (const swatch of document.querySelectorAll<HTMLElement>('.js-bb_color')) {
      swatch.addEventListener('click', () => {
        const color = swatch.dataset.val
        if (!color) return
        setColorInputs(color)
        setSetting('bodystyleSet.color', color)
        applyBodyStyle()
        picker.set(color)
      })
    }
  }, 100)
}

export function renderBackgroundOptions(anchor: HTMLElement) {
  if (document.querySelector('#SP_PLUS_BODYSTYLE')) return

  try {
    const { bodystyleSet } = getSettings()
    const imageInput = el('input', {
      type: 'text',
      id: 'image-input',
      className: 'text-input',
      value: bodystyleSet.url,
      style: { marginBottom: '7px' },
    })
    imageInput.oninput = () => {
      if (isUrl(imageInput.value) && imagePattern.test(imageInput.value)) {
        setSetting('bodystyleSet.url', imageInput.value)
        applyBodyStyle()
        imageInput.classList.remove('sp-input-error')
        return
      }
      imageInput.classList.add('sp-input-error')
    }

    const colorInput = el('input', {
      type: 'text',
      className: 'text-input',
      id: 'color-input',
      value: bodystyleSet.color,
    })
    colorInput.oninput = () => {
      if (colorPattern.test(colorInput.value)) {
        setSetting('bodystyleSet.color', colorInput.value)
        applyBodyStyle()
        colorInput.classList.remove('sp-input-error')
        return
      }
      colorInput.classList.add('sp-input-error')
    }

    const imageRadio = el('input', {
      type: 'radio',
      id: 'sp_set_bodystyle_URL',
      className: 'sp-checkbox-circle',
      checked: bodystyleSet.urlchecked,
    })
    const colorRadio = el('input', {
      type: 'radio',
      id: 'sp_set_bodystyle_color',
      className: 'sp-checkbox-circle',
      checked: bodystyleSet.colorchecked,
    })

    imageRadio.onclick = () => {
      setSetting('bodystyleSet.urlchecked', imageRadio.checked)
      if (imageRadio.checked && colorRadio.checked) {
        colorRadio.checked = false
        setSetting('bodystyleSet.colorchecked', false)
      }
      if (getSettings().bodystyleSet.urlchecked) {
        applyBodyStyle()
        showImages()
        return
      }
      document.querySelector('#SP_WRAP_IMAGE')?.remove()
    }

    colorRadio.onclick = () => {
      setSetting('bodystyleSet.colorchecked', colorRadio.checked)
      if (colorRadio.checked && imageRadio.checked) {
        imageRadio.checked = false
        setSetting('bodystyleSet.urlchecked', false)
      }
      if (getSettings().bodystyleSet.colorchecked) {
        applyBodyStyle()
        showColors()
        return
      }
      document.querySelector('#SP_WRAP_COLOR')?.remove()
    }

    const panel = el('div', { id: 'SP_PLUS_BODYSTYLE' }, [
      el('div', {
        style: { borderBottom: 'none', padding: '15px' },
      }, el('div', { className: 'text-input__wrap' }, [
        el('label', {
          className: 'label',
          innerHTML: 'Ссылка на изображение:<div class="label__desc">.jpg или .png</div>',
        }),
        imageInput,
        el('label', {
          className: 'label',
          innerHTML: 'Цвет фона:<div class="label__desc">#RRGGBB</div>',
        }),
        colorInput,
      ])),
      el('label', {
        className: 'stnd-link',
        style: { borderBottom: 'none' },
      }, [
        imageRadio,
        el('label', {
          htmlFor: 'sp_set_bodystyle_URL',
          innerHTML: 'Выбрать изображение',
        }),
      ]),
      el('label', {
        className: 'stnd-link',
        style: { borderBottom: 'none' },
      }, [
        colorRadio,
        el('label', {
          htmlFor: 'sp_set_bodystyle_color',
          innerHTML: 'Подобрать цвет',
        }),
      ]),
    ])

    anchor.parentElement?.after(panel)
    if (bodystyleSet.urlchecked) showImages()
    if (bodystyleSet.colorchecked) showColors()
  } catch (error) {
    log.error('bodystyle', error)
  }
}
