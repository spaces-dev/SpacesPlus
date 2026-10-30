import type { TextPart } from './content'
import type { Changelog } from '@/features/check-updates/types'
import { pkgScript, pkgVersion } from '@/core/pkg-info'
import {
  compareSemver,
  formatDate,
  renderSections,
} from '@/features/check-updates/changelog'

import {
  featureGroups,
  managers,
  privacyParagraphs,
} from './content'
import './index.scss'

const siteOrigin = 'https://spaces.im'
const install = document.querySelector<HTMLButtonElement>('[data-install]')
const installProxy = document.querySelector<HTMLButtonElement>('[data-install-proxy]')

function openScript(file: string) {
  window.open(`./${file}`, '_blank')
}

if (install && pkgScript) {
  install.addEventListener('click', (event) => {
    event.preventDefault()
    openScript(pkgScript.file)
  })
}

if (import.meta.env.DEV && installProxy && pkgScript) {
  const proxyFile = pkgScript.file.replace(/\.user\.js$/, '.proxy.user.js')
  installProxy.hidden = false
  installProxy.addEventListener('click', (event) => {
    event.preventDefault()
    openScript(proxyFile)
  })
}

function link(part: TextPart) {
  const anchor = document.createElement('a')
  anchor.href = part.href ?? '#'
  anchor.textContent = part.text
  anchor.target = '_blank'
  anchor.rel = 'noopener noreferrer'
  return anchor
}

function appendParts(parent: HTMLElement, parts: TextPart[]) {
  for (const part of parts) {
    parent.append(part.href ? link(part) : part.text)
  }
}

function paintInstall(root: HTMLElement) {
  const parts: TextPart[] = [{ text: 'Для работы скрипта установите в браузере расширение ' }]
  managers.forEach((manager, index) => {
    if (index > 0) {
      parts.push({ text: index === managers.length - 1 ? ' или ' : ', ' })
    }
    parts.push({ text: manager.name, href: manager.href })
  })
  parts.push({ text: ' и нажмите кнопку «Установить».' })
  root.replaceChildren()
  appendParts(root, parts)
}

function paintFeatures(root: HTMLElement) {
  root.replaceChildren()
  for (const group of featureGroups) {
    const block = document.createElement('section')
    const title = document.createElement('h3')
    title.textContent = group.title
    const list = document.createElement('ul')
    for (const feature of group.items) {
      const item = document.createElement('li')
      const name = document.createElement('strong')
      name.textContent = feature.title
      item.append(name, ` — ${feature.text}`)
      list.append(item)
    }
    block.append(title, list)
    root.append(block)
  }
}

function paintPrivacy(root: HTMLElement) {
  root.replaceChildren()
  for (const paragraph of privacyParagraphs) {
    const element = document.createElement('p')
    appendParts(element, paragraph)
    root.append(element)
  }
}

async function paintChangelog(root: HTMLElement, version: string) {
  try {
    const response = await fetch('./changelog.json')
    if (!response.ok) throw new Error(String(response.status))
    const body = await response.json() as Changelog
    if (body.schema !== 1 || !Array.isArray(body.releases)) throw new Error('schema')

    const releases = body.releases.filter(release => !release.unreleased)
    root.replaceChildren()
    if (!releases.length) {
      const empty = document.createElement('p')
      empty.className = 'section__note'
      empty.textContent = 'История обновлений пока пуста.'
      root.append(empty)
      return
    }

    for (const release of releases) {
      const article = document.createElement('article')
      article.className = 'release'
      const head = document.createElement('div')
      head.className = 'release__head'
      const title = document.createElement('h3')
      title.className = 'release__version'
      title.textContent = `v${release.version}`
      if (version && compareSemver(release.version, version) === 0) {
        const badge = document.createElement('span')
        badge.className = 'release__badge'
        badge.title = 'Текущая версия'
        badge.textContent = 'текущая'
        title.append(badge)
      }
      head.append(title)
      if (release.date) {
        const date = document.createElement('time')
        date.className = 'release__date'
        date.dateTime = release.date
        date.textContent = formatDate(release.date)
        head.append(date)
      }
      const details = document.createElement('div')
      details.className = 'release__body'
      details.innerHTML = renderSections(release.sections, siteOrigin)
      article.append(head, details)
      root.append(article)
    }
  } catch {
    const error = document.createElement('p')
    error.className = 'section__note'
    error.textContent = 'Не удалось загрузить историю обновлений.'
    root.replaceChildren(error)
  }
}

const pageNav = document.querySelector<HTMLElement>('.page-nav')

function syncScrollPadding() {
  if (!pageNav) return
  const height = pageNav.offsetHeight
  document.documentElement.style.setProperty('--nav-height', `${height}px`)
  document.documentElement.style.scrollPaddingTop = `${height + 12}px`
}

function revealHash() {
  syncScrollPadding()
  const id = location.hash.replace(/^#/, '')
  if (!id) return
  document.getElementById(id)?.scrollIntoView()
  markNav()
}

const navItems = pageNav
  ? [...pageNav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')].flatMap((link) => {
      const target = document.getElementById(link.hash.slice(1))
      return target ? [{ link, target }] : []
    })
  : []

function markNav() {
  const line = (pageNav?.offsetHeight ?? 0) + 20
  const current = navItems.findLast(item => item.target.getBoundingClientRect().top <= line)
  for (const item of navItems) {
    if (item === current) item.link.setAttribute('aria-current', 'location')
    else item.link.removeAttribute('aria-current')
  }
}

let navFrame = 0
function scheduleNav() {
  if (navFrame) return
  navFrame = requestAnimationFrame(() => {
    navFrame = 0
    markNav()
  })
}

syncScrollPadding()
markNav()
window.addEventListener('resize', syncScrollPadding)
window.addEventListener('resize', scheduleNav)
window.addEventListener('scroll', scheduleNav, { passive: true })

const installCopy = document.querySelector<HTMLElement>('[data-install-copy]')
const features = document.querySelector<HTMLElement>('[data-features]')
const privacy = document.querySelector<HTMLElement>('[data-privacy]')
const changelog = document.querySelector<HTMLElement>('[data-changelog]')

if (installCopy) paintInstall(installCopy)
if (features) paintFeatures(features)
if (privacy) paintPrivacy(privacy)

const ready = changelog ? paintChangelog(changelog, pkgVersion) : Promise.resolve()
ready.then(revealHash)
