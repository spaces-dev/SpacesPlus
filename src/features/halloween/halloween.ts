import type { Feature } from '@/core/feature'
import { ensureStyle, removeStyle } from '@/core/appearance'
import { assetOrigin } from '@/core/site'
import css from './halloween.scss?inline'

const layerId = 'SP_PLUS_HALLOWEEN'
const styleId = 'SP_PLUS_HALLOWEEN_STYLE'
const siteClass = 'sp-halloween-site'
const darkClass = 'root--theme-dark'
const patternVar = '--sp-halloween-pattern'

let themeLocked = false

function inSeason() {
  const now = new Date()
  return now.getMonth() === 9 && now.getDate() === 31
}

const flights = [
  { drop: '0px', scale: '0.72', duration: '9s', delay: '-2s', bob: '16px' },
  { drop: '12px', scale: '1.05', duration: '12s', delay: '-7s', bob: '24px' },
  { drop: '4px', scale: '0.42', duration: '8s', delay: '-3s', bob: '10px' },
  { drop: '20px', scale: '0.84', duration: '11s', delay: '-9s', bob: '22px' },
  { drop: '8px', scale: '0.58', duration: '13s', delay: '-5s', bob: '14px' },
]

const drifts = [
  { x: '22%', scale: '0.95', duration: '9.5s', delay: '-1s', sway: '8px', tilt: '-4deg', hide: '84%', peek: '42%' },
  { x: '48%', scale: '1.2', duration: '12s', delay: '-7s', sway: '-12px', tilt: '5deg', hide: '78%', peek: '30%' },
  { x: '74%', scale: '0.72', duration: '8.5s', delay: '-3.2s', sway: '6px', tilt: '-2deg', hide: '86%', peek: '48%' },
]

let layoutBox: Element | null = null
let layoutWatch: ResizeObserver | null = null

function element(markup: string) {
  const template = document.createElement('template')
  template.innerHTML = markup.trim()
  const node = template.content.firstElementChild
  if (!node) throw new Error('Пустая разметка хеллоуина')
  return node as HTMLElement
}

function bat() {
  return element(`
  <svg class="sp-halloween__bat" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg">
    <g class="sp-halloween__wing sp-halloween__wing_left">
      <path d="M100 46C78 34 40 16 8 30 22 36 16 46 4 54 24 50 18 64 12 74 36 64 40 72 28 84 52 72 70 68 100 58Z"/>
    </g>
    <g class="sp-halloween__wing sp-halloween__wing_right">
      <path d="M100 46C122 34 160 16 192 30 178 36 184 46 196 54 176 50 182 64 188 74 164 64 160 72 172 84 148 72 130 68 100 58Z"/>
    </g>
    <path class="sp-halloween__body" d="M100 38c-8 0-14 8-12 18 1 12 6 20 12 22 6-2 11-10 12-22 2-10-4-18-12-18z"/>
    <path class="sp-halloween__body" d="M93 42 86 26 98 40z"/>
    <path class="sp-halloween__body" d="M107 42 114 26 102 40z"/>
    <circle class="sp-halloween__eye" cx="94" cy="54" r="2.2"/>
    <circle class="sp-halloween__eye" cx="106" cy="54" r="2.2"/>
  </svg>
`)
}

function pumpkin() {
  return element(`
  <svg class="sp-halloween__pumpkin" viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
    <ellipse class="sp-halloween__shadow" cx="60" cy="130" rx="36" ry="6"/>
    <path class="sp-halloween__leaf" d="M58 38C42 20 22 26 28 42 40 36 50 40 56 50Z"/>
    <path class="sp-halloween__stem" d="M54 46C56 24 76 20 78 38 68 40 62 46 58 56Z"/>
    <path class="sp-halloween__lobe sp-halloween__lobe_side" d="M36 50C14 58 10 104 30 122 44 110 46 72 40 52Z"/>
    <path class="sp-halloween__lobe sp-halloween__lobe_side" d="M84 50C106 58 110 104 90 122 76 110 74 72 80 52Z"/>
    <path class="sp-halloween__lobe sp-halloween__lobe_main" d="M60 42C32 46 20 74 24 104 30 126 46 132 60 132 74 132 90 126 96 104 100 74 88 46 60 42Z"/>
    <path class="sp-halloween__ridge" d="M46 50C40 80 42 110 50 126"/>
    <path class="sp-halloween__ridge" d="M74 50C80 80 78 110 70 126"/>
    <path class="sp-halloween__shine" d="M48 54C42 74 44 100 50 116 46 94 46 70 52 52Z"/>
    <path class="sp-halloween__cut" d="M38 66 52 66 45 80Z"/>
    <path class="sp-halloween__cut" d="M68 66 82 66 75 80Z"/>
    <path class="sp-halloween__cut" d="M56 84 64 84 60 94Z"/>
    <path class="sp-halloween__cut" d="M36 100Q60 120 84 100 76 110 60 112 44 110 36 100Z"/>
    <path class="sp-halloween__tooth" d="M54 102 60 112 66 102Z"/>
  </svg>
`)
}

function ghost() {
  return element(`
  <svg class="sp-halloween__ghost" viewBox="0 0 110 140" xmlns="http://www.w3.org/2000/svg">
    <path class="sp-halloween__sheet" d="M60 6c-28 0-46 22-46 52v58c6-14 14-8 18 2 6 14 10-2 16 4 8 8 8-10 16-2 8 8 10-4 16 2 6 6 12 0 16-8V58C96 28 88 6 60 6z"/>
    <ellipse class="sp-halloween__ghost-eye" cx="42" cy="58" rx="7" ry="9"/>
    <ellipse class="sp-halloween__ghost-eye" cx="70" cy="56" rx="7" ry="9"/>
    <ellipse class="sp-halloween__ghost-mouth" cx="56" cy="78" rx="4.5" ry="6"/>
  </svg>
`)
}

type Bat = {
  node: HTMLElement
  svg: SVGElement
  fromRight: boolean
  width: number
  height: number
  drop: number
  bob: number
  duration: number
  delay: number
  x: number
  y: number
  angle: number
  phase: number
  facing: number
  coasting: boolean
}

let flock: Bat[] = []

function bats() {
  const root = document.createElement('div')
  root.className = 'sp-halloween__bats'
  flock = flights.map((flight, index) => {
    const node = document.createElement('div')
    node.className = 'sp-halloween__flight'
    node.style.setProperty('--drop', flight.drop)
    node.style.setProperty('--scale', flight.scale)
    node.style.setProperty('--duration', flight.duration)
    node.style.setProperty('--delay', flight.delay)
    node.style.setProperty('--bob', flight.bob)
    const bob = document.createElement('div')
    bob.className = 'sp-halloween__bob'
    const svg = bat()
    if (!(svg instanceof SVGElement)) throw new TypeError('Мышь собралась не из svg')
    bob.append(svg)
    node.append(bob)
    root.append(node)
    const fromRight = index % 2 === 1
    return {
      node,
      svg,
      fromRight,
      width: 0,
      height: 0,
      drop: Number.parseFloat(flight.drop),
      bob: Number.parseFloat(flight.bob),
      duration: Number.parseFloat(flight.duration),
      delay: Math.abs(Number.parseFloat(flight.delay)),
      x: 0,
      y: 0,
      angle: fromRight ? Math.PI : 0,
      phase: index * 1.7,
      facing: fromRight ? -1 : 1,
      coasting: false,
    }
  })
  return root
}

const ghostHideMs = 3 * 60 * 1000
const awayClass = 'sp-halloween__drift_away'
const goneClass = 'sp-halloween__drift_gone'

function ghostKey(index: number) {
  return `sp-halloween-ghost-${index}`
}

function ghostHidden(index: number) {
  const until = Number(sessionStorage.getItem(ghostKey(index)))
  if (!until) return false
  if (until > Date.now()) return true
  sessionStorage.removeItem(ghostKey(index))
  return false
}

function scareGhost(node: HTMLElement, index: number) {
  if (node.classList.contains(awayClass) || node.classList.contains(goneClass)) return

  const finish = () => {
    node.classList.add(goneClass)
    sessionStorage.setItem(ghostKey(index), String(Date.now() + ghostHideMs))
  }

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    finish()
    return
  }

  const onEnd = (event: AnimationEvent) => {
    if (event.animationName !== 'sp-ghost-flee') return
    node.removeEventListener('animationend', onEnd)
    finish()
  }

  node.addEventListener('animationend', onEnd)
  node.classList.add(awayClass)
}

function ghosts() {
  const root = document.createElement('div')
  root.className = 'sp-halloween__ghosts'
  for (const [index, flight] of drifts.entries()) {
    const node = document.createElement('div')
    node.className = 'sp-halloween__drift'
    node.style.setProperty('--x', flight.x)
    node.style.setProperty('--scale', flight.scale)
    node.style.setProperty('--duration', flight.duration)
    node.style.setProperty('--delay', flight.delay)
    node.style.setProperty('--sway', flight.sway)
    node.style.setProperty('--tilt', flight.tilt)
    node.style.setProperty('--hide', flight.hide)
    node.style.setProperty('--peek', flight.peek)
    if (ghostHidden(index)) node.classList.add(goneClass)
    node.addEventListener('click', () => scareGhost(node, index))
    node.append(ghost())
    root.append(node)
  }
  return root
}

const jumpClass = 'sp-halloween__pumpkin_jump'

function bouncePumpkin(node: HTMLElement) {
  if (node.classList.contains(jumpClass)) return
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const onEnd = (event: AnimationEvent) => {
    if (event.animationName !== 'sp-pumpkin-jump') return
    node.removeEventListener('animationend', onEnd)
    node.classList.remove(jumpClass)
  }

  node.addEventListener('animationend', onEnd)
  node.classList.add(jumpClass)
}

function pumpkins() {
  const root = document.createElement('div')
  root.className = 'sp-halloween__pumpkins'
  root.setAttribute('aria-hidden', 'true')
  for (let index = 0; index < 3; index++) {
    const node = pumpkin()
    node.addEventListener('click', () => bouncePumpkin(node))
    root.append(node)
  }
  return root
}

function pinDark(root: Element) {
  for (const name of [...root.classList]) {
    if (name.startsWith('root--theme-') && name !== darkClass) root.classList.remove(name)
  }
  root.classList.add(darkClass)
}

function blockThemeChange(event: Event) {
  const target = event.target
  if (!(target instanceof Element) || !target.closest('.js-site-theme')) return
  if (event instanceof KeyboardEvent && event.key !== 'Enter' && event.key !== ' ') return
  event.preventDefault()
  event.stopPropagation()
}

function forceDark() {
  if (themeLocked) return
  const root = document.querySelector('.root')
  if (!root) return
  themeLocked = true
  pinDark(root)
  document.addEventListener('click', blockThemeChange, true)
  document.addEventListener('keydown', blockThemeChange, true)
}

function releaseDark() {
  if (!themeLocked) return
  themeLocked = false
  document.removeEventListener('click', blockThemeChange, true)
  document.removeEventListener('keydown', blockThemeChange, true)
}

const patternFiles = ['halloween.png', 'halloween-kloun2.png', 'halloween-kloun3.jpg']
let patternFile = ''

function applyPattern() {
  if (!patternFile) {
    const next = patternFiles[Math.floor(Math.random() * patternFiles.length)]
    patternFile = next ?? 'halloween.png'
  }
  const url = `${assetOrigin}/backgrounds/${patternFile}`
  document.documentElement.style.setProperty(patternVar, `url(${JSON.stringify(url)})`)
}

function alignPumpkins() {
  const layer = document.getElementById(layerId)
  if (!layer?.classList.contains('sp-halloween_site')) return
  const layout = document.querySelector('.page-layout')
  if (!(layout instanceof HTMLElement)) return

  const box = layout.getBoundingClientRect()
  const sidebar = layout.querySelector('.page-layout__sidebar')
  let left = box.left
  if (sidebar instanceof HTMLElement && getComputedStyle(sidebar).display !== 'none') {
    const sidebarBox = sidebar.getBoundingClientRect()
    if (sidebarBox.width > 0) left = sidebarBox.left
  }
  const right = window.innerWidth - box.right
  layer.style.setProperty('--sp-layout-left', `${Math.round(Math.max(0, left))}px`)
  layer.style.setProperty('--sp-layout-right', `${Math.round(Math.max(0, right))}px`)
}

function watchLayout() {
  alignPumpkins()
  const layout = document.querySelector('.page-layout')
  if (!(layout instanceof HTMLElement) || layout === layoutBox) return

  layoutWatch?.disconnect()
  layoutBox = layout
  layoutWatch = new ResizeObserver(() => {
    alignPumpkins()
  })
  layoutWatch.observe(layout)
  const sidebar = layout.querySelector('.page-layout__sidebar')
  if (sidebar) layoutWatch.observe(sidebar)
}

function releaseLayout() {
  layoutWatch?.disconnect()
  layoutWatch = null
  layoutBox = null
}

function onResize() {
  alignPumpkins()
}

const dodgeReach = 140

let pointerX = Number.NaN
let pointerY = Number.NaN
let flightFrame = 0
let flightStamp = 0
let batsFlying = false

function steer(current: number, target: number, max: number) {
  let delta = Math.atan2(Math.sin(target - current), Math.cos(target - current))
  if (delta > max) delta = max
  if (delta < -max) delta = -max
  return current + delta
}

const batSpeed = (bat: Bat) => (window.innerWidth + bat.width + 120) / bat.duration

function placeBat(bat: Bat, spread: boolean) {
  bat.coasting = false
  bat.angle = bat.fromRight ? Math.PI : 0
  bat.facing = bat.fromRight ? -1 : 1
  const span = window.innerWidth + bat.width + 120
  const progress = spread ? (bat.delay % bat.duration) / bat.duration : 0
  bat.x = bat.fromRight
    ? window.innerWidth + 40 - progress * span
    : -bat.width - 40 + progress * span
  bat.y = Math.sin(bat.phase) * bat.bob * 0.55
}

function batLeftScreen(bat: Bat) {
  const margin = 80
  return bat.x < -bat.width - margin
    || bat.x > window.innerWidth + margin
    || bat.y < -180
    || bat.y > window.innerHeight
}

function drawBat(bat: Bat) {
  const bank = Math.sin(bat.angle) * 20
  bat.node.style.transform = `translate3d(${bat.x.toFixed(1)}px, ${bat.y.toFixed(1)}px, 0) rotate(${bank.toFixed(1)}deg)`
  if (Math.cos(bat.angle) < -0.35) bat.facing = -1
  else if (Math.cos(bat.angle) > 0.35) bat.facing = 1
  bat.svg.style.transform = bat.facing < 0 ? 'scaleX(-1)' : ''
}

function flyStep(now: number) {
  if (!batsFlying) return
  const dt = flightStamp ? Math.min(0.05, (now - flightStamp) / 1000) : 0
  flightStamp = now

  for (const bat of flock) {
    const cx = bat.x + bat.width / 2
    const cy = 56 + bat.drop + bat.y + bat.height / 2
    if (Number.isFinite(pointerX)) {
      const distance = Math.hypot(cx - pointerX, cy - pointerY)
      if (distance < dodgeReach) {
        bat.coasting = true
        const away = Math.atan2(cy - pointerY, cx - pointerX)
        const urgency = 1 - distance / dodgeReach
        bat.angle = steer(bat.angle, away, (4 + urgency * 6) * dt)
      }
    }

    if (bat.coasting) {
      const speed = batSpeed(bat)
      bat.x += Math.cos(bat.angle) * speed * dt
      bat.y += Math.sin(bat.angle) * speed * dt
      if (batLeftScreen(bat)) placeBat(bat, false)
    } else {
      const direction = bat.fromRight ? -1 : 1
      bat.x += direction * batSpeed(bat) * dt
      bat.phase += dt
      bat.y = Math.sin(bat.phase * 1.3) * bat.bob * 0.55
      bat.angle = direction < 0 ? Math.PI : 0
      if (batLeftScreen(bat)) placeBat(bat, false)
    }

    drawBat(bat)
  }

  if (batsFlying) flightFrame = requestAnimationFrame(flyStep)
}

function onPointerMove(event: PointerEvent) {
  pointerX = event.clientX
  pointerY = event.clientY
}

function onPointerOut(event: PointerEvent) {
  if (event.relatedTarget instanceof Node) return
  pointerX = Number.NaN
  pointerY = Number.NaN
}

function startFlight() {
  if (batsFlying || !flock.length || matchMedia('(prefers-reduced-motion: reduce)').matches) return
  for (const bat of flock) {
    bat.width = bat.node.offsetWidth || 70
    bat.height = bat.node.offsetHeight || 36
    placeBat(bat, true)
    drawBat(bat)
  }
  batsFlying = true
  flightStamp = 0
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerout', onPointerOut)
  flightFrame = requestAnimationFrame(flyStep)
}

function releaseFlight() {
  batsFlying = false
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerout', onPointerOut)
  if (flightFrame) cancelAnimationFrame(flightFrame)
  flightFrame = 0
  flightStamp = 0
  pointerX = Number.NaN
  pointerY = Number.NaN
  flock = []
}

function removeHalloween() {
  releaseFlight()
  document.getElementById(layerId)?.remove()
  document.querySelector('.sp-halloween__bats_front')?.remove()
  document.querySelector('.sp-halloween__ghosts_front')?.remove()
  document.querySelector('.sp-halloween__pumpkins')?.remove()
  document.documentElement.classList.remove(siteClass)
  document.documentElement.style.removeProperty(patternVar)
  releaseLayout()
  releaseDark()
}

export function mountHalloween(variant: 'site' | 'page') {
  if (!inSeason()) return
  if (!document.getElementById(layerId)) {
    const layer = document.createElement('div')
    layer.id = layerId
    layer.className = `sp-halloween sp-halloween_${variant}`
    layer.setAttribute('aria-hidden', 'true')
    const ghostsNode = ghosts()
    const batNode = bats()
    batNode.classList.add('sp-halloween__bats_front')
    batNode.setAttribute('aria-hidden', 'true')
    document.body.append(batNode)

    if (variant === 'site') {
      layer.append(ghostsNode, pumpkins())
      document.body.append(layer)
      watchLayout()
    } else {
      ghostsNode.classList.add('sp-halloween__ghosts_front')
      ghostsNode.setAttribute('aria-hidden', 'true')
      document.body.prepend(layer)
      document.body.append(ghostsNode)
      const hero = document.querySelector('.hero')
      if (hero && !hero.querySelector('.sp-halloween__pumpkins')) hero.append(pumpkins())
    }
  }

  startFlight()
}

export const halloween: Feature = {
  id: 'halloween',
  core: true,
  start: (ctx) => {
    if (!inSeason()) return

    window.addEventListener('resize', onResize)
    const stop = ctx.onDom(() => {
      ensureStyle(styleId, css)
      document.documentElement.classList.add(siteClass)
      applyPattern()
      forceDark()
      mountHalloween('site')
      watchLayout()
    })

    return () => {
      stop()
      window.removeEventListener('resize', onResize)
      removeHalloween()
      removeStyle(styleId)
    }
  },
}
