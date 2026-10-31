import type { Feature } from '@/core/feature'
import { el, observeElement } from '@zero-dependency/dom'
import { defineToggle } from '@/core/feature'
import { defaultSettings, getSettings, setSetting, settingKey } from '@/core/settings-store'
import { withStyle } from '@/core/with-style'
import galleryCss from '@/styles/features/gallery.scss?inline'
import { toggleId } from '@/types/toggles'

const galleryStyleId = 'SP_STYLE_GALLERY'
const galleryId = 'Gallery'
const containerId = 'gallery-container'
const downloadId = 'g_dloadlink'
const zoomId = 'gallery__zoom'
const videoId = 'galleryVideo'
const rotateId = 'SP_IMAGE_ROTATE'
const videoClass = 'gallery__video'
const turns = ['rotate90', 'rotate180', 'rotate270']
const fullTurn = 360
const quarterBack = 270

const nextAngle = (angle: number) => (angle + quarterBack) % fullTurn

function galleryShowsVideo() {
  const gallery = document.getElementById(galleryId)
  if (!gallery) return false
  if (gallery.classList.contains(videoClass)) return true

  const zoom = gallery.querySelector<HTMLElement>(`#${zoomId}`)
  if (zoom) return getComputedStyle(zoom).display === 'none'

  const player = gallery.querySelector(`#${videoId}`)
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

function resetAngle() {
  if (getSettings().angle !== defaultSettings.angle) setSetting(settingKey.angle, defaultSettings.angle)
}

export const galleryRotate: Feature = defineToggle({
  id: toggleId.gallery,
  title: 'Поворот фотографий',
  description: 'Добавляется кнопка в просмотрщик фотографий, с помощью нее можно поворачивать изображение.',
  start: withStyle(galleryStyleId, galleryCss, (ctx) => {
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
        resetAngle()
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
      const image = document.getElementById(containerId)
      const download = document.getElementById(downloadId)
      if (!(image instanceof HTMLElement) || !(download instanceof HTMLAnchorElement)) {
        unwatch?.()
        unwatch = undefined
        imageNode = null
        linkNode = null
        return
      }

      watch(image, download)
      remember(image, download)
      const existing = document.getElementById(rotateId)
      if (galleryShowsVideo()) {
        existing?.remove()
        image.classList.remove('sp-rotate-anim', ...turns)
        resetAngle()
        return
      }
      if (existing) return

      const button = el('a', {
        className: 'gallery__tools_button',
        id: rotateId,
        title: 'Повернуть',
      }, el('span', { className: 'js-ico ico sp-ico-rotate' }))
      button.onclick = () => {
        const current = document.getElementById(containerId)
        if (!(current instanceof HTMLElement) || galleryShowsVideo()) return false
        const angle = nextAngle(getSettings().angle)
        setSetting(settingKey.angle, angle)
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
    })

    return () => {
      unwatch?.()
      stop()
    }
  }),
})
