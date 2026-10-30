import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { log } from '@/core/log'
import { getSettings, setSetting } from '@/core/settings-store'

const speeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]

const label = (speed: number) => `x${speed}`

function currentSpeed() {
  const saved = getSettings().videoSpeed
  return speeds.includes(saved) ? saved : 1
}

function applyRate(video: HTMLVideoElement, speed: number) {
  if (video.playbackRate !== speed) video.playbackRate = speed
}

function syncMenus(speed: number) {
  for (const root of document.querySelectorAll<HTMLElement>('.sp-playback')) {
    const caption = root.querySelector('.sp-playback__value')
    if (caption) caption.textContent = label(speed)
    const toggle = root.querySelector('button')
    if (toggle) toggle.title = `Скорость ${label(speed)}`
    for (const item of root.querySelectorAll<HTMLElement>('.vjs-menu-item')) {
      const selected = Number(item.dataset.speed) === speed
      item.classList.toggle('vjs-selected', selected)
      item.setAttribute('aria-checked', selected ? 'true' : 'false')
    }
  }
}

function closeMenus() {
  for (const menu of document.querySelectorAll('.sp-playback .vjs-menu')) menu.classList.remove('vjs-lock-showing')
  for (const toggle of document.querySelectorAll('.sp-playback > button')) toggle.setAttribute('aria-expanded', 'false')
}

function choose(speed: number) {
  setSetting('videoSpeed', speed)
  for (const node of document.querySelectorAll<HTMLVideoElement>('.video-js video')) applyRate(node, speed)
  syncMenus(speed)
  closeMenus()
}

export const videoSpeed: Feature = {
  id: 'playback',
  title: 'Скорость видео',
  description: 'В панели плеера появляется меню скорости: от замедления x0.25 до ускорения x2.',
  start: (ctx) => {
    const bound = new WeakSet<HTMLVideoElement>()
    let alive = true

    const onPointerDown = (event: Event) => {
      const target = event.target
      if (target instanceof Element && target.closest('.sp-playback')) return
      closeMenus()
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenus()
    }

    document.addEventListener('pointerdown', onPointerDown, true)
    document.addEventListener('keydown', onKeyDown)

    const mount = (player: HTMLElement) => {
      const video = player.querySelector('video')
      const bar = player.querySelector('.vjs-control-bar')
      if (!(video instanceof HTMLVideoElement) || !bar) return

      const speed = currentSpeed()
      applyRate(video, speed)

      if (!bound.has(video)) {
        bound.add(video)
        const keep = () => {
          if (!alive) return
          applyRate(video, currentSpeed())
        }
        video.addEventListener('loadedmetadata', keep)
        video.addEventListener('play', keep)
      }

      if (bar.querySelector('.sp-playback')) {
        syncMenus(speed)
        return
      }

      const toggle = el('button', {
        type: 'button',
        className: 'sp-playback__toggle',
        title: `Скорость ${label(speed)}`,
      }, el('span', { className: 'sp-playback__value', textContent: label(speed) }))
      toggle.setAttribute('aria-haspopup', 'menu')
      toggle.setAttribute('aria-expanded', 'false')

      const items = speeds.map((value) => {
        const item = el('li', {
          className: `vjs-menu-item${value === speed ? ' vjs-selected' : ''}`,
          role: 'menuitemradio',
          tabIndex: -1,
        }, el('span', { className: 'vjs-menu-item-text', textContent: label(value) }))
        item.dataset.speed = String(value)
        item.setAttribute('aria-checked', value === speed ? 'true' : 'false')
        item.addEventListener('click', (event) => {
          event.preventDefault()
          event.stopPropagation()
          choose(value)
        })
        return item
      })

      const menu = el('div', { className: 'vjs-menu' }, el('ul', {
        className: 'vjs-menu-content',
        role: 'menu',
      }, items))

      const root = el('div', {
        className: 'vjs-menu-button vjs-menu-button-popup vjs-control vjs-button sp-playback',
      }, [toggle, menu])

      toggle.addEventListener('click', (event) => {
        event.preventDefault()
        event.stopPropagation()
        const open = menu.classList.contains('vjs-lock-showing')
        closeMenus()
        if (open) return
        menu.classList.add('vjs-lock-showing')
        toggle.setAttribute('aria-expanded', 'true')
      })

      const anchor = bar.querySelector('.vjs-quality-selector, .vjs-picture-in-picture-control, .vjs-fullscreen-control')
      if (anchor) bar.insertBefore(root, anchor)
      else bar.append(root)
    }

    const stop = ctx.onDom(() => {
      try {
        for (const player of document.querySelectorAll<HTMLElement>('.video-js')) mount(player)
      } catch (error) {
        log.error('playback', error)
      }
    })

    return () => {
      alive = false
      stop()
      document.removeEventListener('pointerdown', onPointerDown, true)
      document.removeEventListener('keydown', onKeyDown)
      for (const button of document.querySelectorAll('.sp-playback')) button.remove()
      for (const video of document.querySelectorAll<HTMLVideoElement>('.video-js video')) video.playbackRate = 1
    }
  },
}
