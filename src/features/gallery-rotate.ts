import type { Feature } from '@/core/feature'
import { el, observeElement } from '@zero-dependency/dom'
import { log } from '@/core/log'
import { getSettings, setSetting } from '@/core/settings-store'

const turns = ['rotate90', 'rotate180', 'rotate270']

function galleryShowsVideo() {
  const gallery = document.querySelector('#Gallery')
  if (!gallery) return false
  if (gallery.classList.contains('gallery__video')) return true

  const zoom = gallery.querySelector<HTMLElement>('#gallery__zoom')
  if (zoom) return getComputedStyle(zoom).display === 'none'

  const player = gallery.querySelector('#galleryVideo')
  if (player?.querySelector('video, iframe, .video-js, img.preview')) return true
  return Boolean(gallery.querySelector('.player-dummy_wrap'))
}

function applyAngle(image: HTMLElement, angle: number, animate = false) {
  const turn = angle ? ` rotate${angle}` : ''
  const motion = animate ? ' sp-rotate-anim' : ''
  image.className = `accel-3d${turn}${motion}`
}

function fileId(value: string) {
  const raw = value.trim()
  if (!raw || raw === '#' || raw.startsWith('javascript:')) return ''
  try {
    const url = new URL(raw, location.href)
    if (url.protocol === 'javascript:') return ''
    return `${url.origin}${url.pathname}${url.search}`
  } catch {
    return raw
  }
}

export const galleryRotate: Feature = {
  id: 'grotate',
  title: 'Поворот фотографий',
  description: 'Добавляется кнопка в просмотрщик фотографий, с помощью нее можно поворачивать изображение.',
  start: (ctx) => {
    let photo = ''
    let imageNode: HTMLElement | null = null
    let linkNode: HTMLAnchorElement | null = null
    let unwatch: (() => void) | undefined

    const readPhoto = (image: HTMLElement, download: HTMLAnchorElement) => {
      const href = fileId(download.getAttribute('href') ?? '')
      if (href) return href
      return fileId(image.querySelector('img')?.getAttribute('src') ?? '')
    }

    const remember = (image: HTMLElement, download: HTMLAnchorElement) => {
      const next = readPhoto(image, download)
      if (!next) return
      if (photo && next !== photo) {
        image.classList.remove('sp-rotate-anim', ...turns)
        if (getSettings().angle !== 0) setSetting('angle', 0)
      }
      photo = next
    }

    const watch = (image: HTMLElement, download: HTMLAnchorElement) => {
      if (imageNode === image && linkNode === download) return
      unwatch?.()
      imageNode = image
      linkNode = download
      const stopImage = observeElement(image, () => remember(image, download), {
        attributes: true,
        attributeFilter: ['src'],
      })
      const stopLink = observeElement(download, () => remember(image, download), {
        attributes: true,
        attributeFilter: ['href'],
      })
      unwatch = () => {
        stopImage()
        stopLink()
      }
    }

    const stop = ctx.onDom(() => {
      try {
        const image = document.querySelector<HTMLElement>('#gallery-container')
        const download = document.querySelector<HTMLAnchorElement>('#g_dloadlink')
        if (!image || !download) {
          unwatch?.()
          unwatch = undefined
          imageNode = null
          linkNode = null
          return
        }

        watch(image, download)
        remember(image, download)
        const existing = document.querySelector<HTMLElement>('#SP_IMAGE_ROTATE')
        if (galleryShowsVideo()) {
          existing?.remove()
          image.classList.remove('sp-rotate-anim', ...turns)
          if (getSettings().angle !== 0) setSetting('angle', 0)
          return
        }
        if (existing) return

        const button = el('a', {
          className: 'gallery__tools_button',
          id: 'SP_IMAGE_ROTATE',
          title: 'Повернуть',
        }, el('span', { className: 'js-ico ico sp-ico-rotate' }))
        button.onclick = () => {
          const current = document.querySelector<HTMLElement>('#gallery-container')
          if (!current || galleryShowsVideo()) return false
          const angle = (getSettings().angle + 270) % 360
          setSetting('angle', angle)
          applyAngle(current, angle, true)
          const finish = (event: TransitionEvent) => {
            if (event.target !== current || event.propertyName !== 'transform') return
            current.removeEventListener('transitionend', finish)
            current.classList.remove('sp-rotate-anim')
          }
          current.addEventListener('transitionend', finish)
          return false
        }
        download.after(button)
      } catch (error) {
        log.error('grotate', error)
      }
    })

    return () => {
      unwatch?.()
      stop()
    }
  },
}
