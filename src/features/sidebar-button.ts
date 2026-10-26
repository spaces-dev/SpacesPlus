import type { Feature } from '../core/feature'
import { el } from '@zero-dependency/dom'
import { baseUrl } from '../core/site'

function isSettingsTitle(value: string | null | undefined) {
  return value?.replace(/\s+/g, ' ').trim() === 'Настройки'
}

function settingsTarget() {
  const root = document.querySelector('#sidebar_panel .sidebar__content')
  if (!root) return null

  const sections = [...root.querySelectorAll('.sidebar__section')]
  const titled = sections.find(section => [...section.children].some((child) => {
    if (child.classList.contains('sidebar-item')) return false
    return isSettingsTitle(child.textContent)
  }))
  const titledItem = titled ? firstItem(titled) : null
  if (titledItem) return titledItem

  const label = [...root.querySelectorAll('.sidebar-item__label')].find(node => isSettingsTitle(node.textContent))
  return label?.closest('.sidebar-item') ?? null
}

function firstItem(section: Element) {
  return [...section.children].find(child => child.classList.contains('sidebar-item'))
    ?? section.querySelector('.sidebar-item')
}

function spacesIcon() {
  return el('span', { className: 'js-ico ico_cats ico_cats_spaces sp-cats-spaces' })
}

export const sidebarButton: Feature = {
  id: 'sidebar-button',
  core: true,
  start: ctx => ctx.onDom(() => {
    if (document.querySelector('[data-sp-sidebar]')) return

    const legacy = document.querySelector(`li.li>a[href^="${baseUrl}/services/"]`)
    if (legacy?.parentElement) {
      const icon = document.querySelector('span.s_i_exit') ? '<span class="sp sp-ico"></span>' : ''
      const link = el('li', {
        className: 'li',
        innerHTML: `<a href="${baseUrl}/settings/?sp_plus_settings=1" title="Настройки Spaces+">${icon}<span class="m s_i_text"> Spaces+</span></a>`,
      })
      link.dataset.spSidebar = '1'
      legacy.parentElement.after(link)
      return
    }

    const sample = settingsTarget()
    const sampleLink = sample?.querySelector('a')
    if (!sample || !sampleLink) return

    const label = el('span', {
      className: sampleLink.querySelector('.sidebar-item__label')?.className || 'sidebar-item__label',
      textContent: 'Настройки Spaces+',
    })
    const linkClass = [...sampleLink.classList].filter(name => !/active|current|selected/i.test(name)).join(' ')
    const link = el('a', {
      href: `${baseUrl}/settings/?sp_plus_settings=1`,
      className: linkClass || 'sidebar-item__link',
      title: 'Настройки Spaces+',
    }, [spacesIcon(), label])
    const item = el('div', {
      className: 'sidebar-item',
    }, link)
    item.dataset.spSidebar = '1'
    sample.before(item)
  }),
}
