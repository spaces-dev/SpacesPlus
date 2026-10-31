import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { plusSettingsUrl } from '@/core/site'
import { plusSettingsTitle } from './settings/ids'

const normalized = (value: string | null | undefined) => value?.replace(/\s+/g, ' ').trim()

function isSettingsHeading(value: string | null | undefined) {
  const title = normalized(value)
  return title === 'Настройка' || title === 'Настройки'
}

function settingsSection() {
  const root = document.querySelector('#sidebar_panel .sidebar__content')
  if (!root) return null

  const sections = [...root.querySelectorAll('.sidebar__section')]
  const nested = sections.find(section => [...section.children].some((child) => {
    if (child.classList.contains('sidebar-item') && !child.classList.contains('sidebar-item--section')) return false
    return isSettingsHeading(child.textContent)
  }))
  if (nested) return nested

  const title = [...root.querySelectorAll('.sidebar-item__title')].find(node => isSettingsHeading(node.textContent))
  const next = title?.closest('.sidebar-item')?.nextElementSibling
  if (next?.classList.contains('sidebar__section')) return next

  const label = [...root.querySelectorAll('.sidebar-item__label')].find(node => normalized(node.textContent) === 'Настройки')
  return label?.closest('.sidebar__section') ?? null
}

function firstItem(section: Element) {
  return [...section.children].find(child => child.classList.contains('sidebar-item') && !child.classList.contains('sidebar-item--section'))
    ?? section.querySelector('.sidebar-item:not(.sidebar-item--section)')
}

function appearanceItem(section: Element) {
  const items = [...section.querySelectorAll('.sidebar-item:not(.sidebar-item--section)')]
  return items.find(item => !item.querySelector('.js-site-theme')) ?? items[0] ?? null
}

function appearanceClass(node: Element | null | undefined, fallback: string) {
  const names = [...(node?.classList ?? [])].filter(name => !name.startsWith('js-') && !/active|current|selected/i.test(name))
  return names.join(' ') || fallback
}

export const sidebarButton: Feature = {
  id: 'sidebar-button',
  core: true,
  start: ctx => ctx.onDom(() => {
    if (document.querySelector('[data-sp-sidebar]')) return

    const section = settingsSection()
    const sample = section ? firstItem(section) : null
    const appearance = section ? appearanceItem(section) : null
    const sampleLink = appearance?.querySelector('a') ?? sample?.querySelector('a')
    if (!sample || !sampleLink) return

    const label = el('span', {
      className: appearanceClass(sampleLink.querySelector('.sidebar-item__label'), 'sidebar-item__label'),
      textContent: plusSettingsTitle,
    })
    const link = el('a', {
      href: plusSettingsUrl(),
      className: appearanceClass(sampleLink, 'sidebar-item__link'),
      title: plusSettingsTitle,
    }, [
      el('span', { className: 'js-ico ico_cats ico_cats_spaces sp-cats-spaces' }),
      label,
    ])
    const item = el('div', {
      className: 'sidebar-item',
    }, link)
    item.dataset.spSidebar = '1'
    sample.before(item)
  }),
}
