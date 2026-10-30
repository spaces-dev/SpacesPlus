import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { onSiteChange, siteCheckbox } from '@/core/checkbox'
import { modalConfirm, modalMessage } from '@/core/modals'
import { pkgVersion } from '@/core/pkg-info'
import { getSettings, resetSpacesCookies, setSetting } from '@/core/settings-store'
import { baseUrl, isTouch, pathAt, queryFlag } from '@/core/site'
import { renderChangelog } from '@/features/check-updates'
import { renderBackup } from './backup'

interface SectionLink {
  id: string
  icon: string
  label: string
  href: string
}

function sectionLink({ id, icon, label, href }: SectionLink) {
  return el('a', {
    href,
    className: 'list-link list-link_arr',
    id,
    innerHTML: `<span class="ico ${icon} mr-14"></span>${label}`,
  })
}

const groupedIds = ['friendsOn', 'bodystyle', 'weather', 'recents']

const sections = [
  {
    title: 'Контент',
    ids: ['comments', 'readersd', 'favorite'],
  },
  {
    title: 'Сбор',
    ids: ['coins', 'karma'],
  },
  {
    title: 'Медиа',
    ids: ['playerdn', 'grotate', 'playback'],
  },
  {
    title: 'Интерфейс',
    ids: ['oldheader', 'rscroll', 'hrightbar', 'dredirect'],
  },
]

const isGrouped = (id: string) => groupedIds.includes(id)

function settingsCard(id: string, title: string, areaId: string) {
  return `
  <div class="widgets-group js-container__block sp-plus-extra" id="${id}">
    <div class="b-title cl b-title_center b-title_first oh">
      <div class="b-title__item">${title}</div>
    </div>
    <div class="content"><div class="list f-c_fll"><div id="${areaId}"></div></div></div>
  </div>
`
}

function hideExtraCards() {
  document.querySelectorAll('.sp-plus-extra').forEach(node => node.classList.add('hide'))
}

function paintHeader(title: string, crumb: string) {
  const head = document.querySelector('#SP_PLUS_SETHEAD')
  const crumbNode = document.querySelector('#SP_PLUS_SETHEAD2')
  const back = document.querySelector<HTMLAnchorElement>('#SP_PLUS_SETBACK')
  if (head) head.innerHTML = title
  if (crumbNode) {
    crumbNode.innerHTML = `<a href="${baseUrl}/settings/?sp_plus_settings=1">Spaces Plus</a><span class="location-bar__sep ico"></span> ${crumb}`
  }
  if (back) back.href = `${baseUrl}/settings/?sp_plus_settings=1`
}

function openSettings(features: Feature[]) {
  if (!/sp_plus_settings=1/i.test(location.href)) {
    document.title = 'Настройки Spaces Plus'
    history.pushState({ sp_plus_settings: '1' }, 'Настройки Spaces Plus', `${baseUrl}/settings/?sp_plus_settings=1`)
  }

  const link = document.querySelector('#SP_PLUS_SETLINK')
  const root = link?.parentElement?.parentElement?.parentElement?.parentElement
  if (!(root instanceof HTMLElement) || root.id !== 'main') return

  const path = document.querySelector('#header_path')
  if (path && !path.innerHTML.includes('SP_PLUS_SETHEAD2')) {
    path.innerHTML = path.innerHTML.replace('Настройки', `<a href="${baseUrl}/settings/">Настройки</a><span class="location-bar__sep ico"></span><span id="SP_PLUS_SETHEAD2">Spaces Plus</span>`)
  }

  const groupedCards = groupedIds.map((id) => {
    const feature = features.find(item => item.id === id)
    if (!feature?.title) return ''
    return settingsCard(`SP_PLUS_GROUP_${id}`, feature.title, `SP_PLUS_AREA_${id}`)
  }).join('')

  root.innerHTML = `
    <div class="widgets-group widgets-group_top js-container__block" id="SP_PLUS_MAIN">
      <div class="b-title cl b-title_center b-title_first oh">
        <div class="b-title__item" id="SP_PLUS_SETHEAD">Настройки Spaces Plus</div>
      </div>
      <div class="content"><div class="list f-c_fll"><div id="SP_PLUS_SETAREA"></div></div></div>
    </div>
    ${groupedCards}
    <div class="widgets-group js-container__block sp-plus-extra" id="SP_PLUS_MISC">
      <div class="b-title cl b-title_center b-title_first oh">
        <div class="b-title__item">Прочее</div>
      </div>
      <div class="content"><div class="list f-c_fll"><div id="SP_PLUS_MISC_AREA"></div></div></div>
    </div>
    <div id="SP_PLUS_ABOUT"></div>
    <a id="SP_PLUS_SETBACK" href="${baseUrl}/settings/?" class="link-return full_link"><span class="ico ico_arr_small_left_darkblue"></span> Назад</a>
  `

  const area = document.querySelector<HTMLElement>('#SP_PLUS_SETAREA')
  if (!area) return

  const appendFeature = (feature: Feature, target: HTMLElement) => {
    if (feature.listed === false) {
      feature.renderOptions?.(target)
      return
    }

    const enabled = getSettings()[feature.id as keyof ReturnType<typeof getSettings>] === true
    const unsupported = Boolean(feature.desktopOnly && isTouch())
    if (unsupported && enabled) setSetting(feature.id, false)

    const turnedOn = enabled && !unsupported
    const { input, label } = siteCheckbox(feature.id, turnedOn, unsupported ? 'stnd-block-yellow' : undefined)
    if (unsupported) {
      input.disabled = true
      label.classList.add('form-checkbox--is-disabled')
      label.addEventListener('click', (event) => {
        const targetNode = event.target
        if (targetNode instanceof Element && targetNode.closest('a')) return
        modalMessage('Внимание!', 'Для работы данной функции необходимо переключиться на компьютерную версию сайта', { close: true, timer: 5 })
      })
    }
    onSiteChange(input, (checked) => {
      if (feature.onToggle?.(checked) === false) return false

      setSetting(feature.id, checked)
      if (checked) {
        feature.renderOptions?.(input)
        return
      }
      if (feature.optionsId) document.getElementById(feature.optionsId)?.remove()
    })

    label.append(feature.title ?? '')
    if (feature.description) {
      const info = el('a', {
        href: '#',
        className: 'ico ico_question sp_info-btn',
      })
      info.onclick = () => {
        modalMessage(feature.title ?? '', feature.description ?? '', { close: true })
        return false
      }
      label.append(info)
    }

    target.append(label)
    if (input.checked) feature.renderOptions?.(input)
  }

  const byId = new Map(features.map(feature => [feature.id, feature]))
  const placed = new Set<string>()

  for (const section of sections) {
    const items = section.ids.flatMap((id) => {
      const feature = byId.get(id)
      return feature?.title ? [feature] : []
    })
    if (!items.length) continue
    area.append(el('div', { className: 'sp-group-title', textContent: section.title }))
    for (const feature of items) {
      placed.add(feature.id)
      appendFeature(feature, area)
    }
  }

  for (const feature of features) {
    if (!feature.title || placed.has(feature.id)) continue
    const target = isGrouped(feature.id)
      ? document.querySelector<HTMLElement>(`#SP_PLUS_AREA_${feature.id}`)
      : area
    if (!target) continue
    appendFeature(feature, target)
  }

  const misc = document.querySelector('#SP_PLUS_MISC_AREA')

  const backup = sectionLink({
    id: 'sp_backup',
    icon: 'ico_shared',
    label: 'Импорт и экспорт настроек',
    href: `${baseUrl}/settings/?sp_plus_settings=1&sp_backup=1`,
  })
  backup.onclick = () => {
    hideExtraCards()
    paintHeader('Импорт и экспорт настроек', 'Импорт и экспорт настроек')
    if (!/sp_backup=1/i.test(location.href)) {
      document.title = 'Spaces Plus: Импорт и экспорт настроек'
      history.pushState({ sp_plus_settings: '1', sp_backup: '1' }, document.title, backup.href)
    }
    const current = document.querySelector('#SP_PLUS_SETAREA')
    if (current) renderBackup(current)
    return false
  }

  const changelog = sectionLink({
    id: 'sp_changelog',
    icon: 'ico_history_blue',
    label: 'История обновлений',
    href: `${baseUrl}/settings/?sp_plus_settings=1&sp_changelog=1`,
  })
  changelog.onclick = () => {
    hideExtraCards()
    paintHeader('История обновлений', 'История обновлений')
    if (!/sp_changelog=1/i.test(location.href)) {
      document.title = 'Spaces Plus: История обновлений'
      history.pushState({ sp_plus_settings: '1', sp_changelog: '1' }, document.title, changelog.href)
    }
    const current = document.querySelector('#SP_PLUS_SETAREA')
    if (current) renderChangelog(current)
    return false
  }

  const reset = el('a', {
    href: '#',
    className: 'list-link list-link_arr',
    id: 'sp_plus_reset',
    innerHTML: '<span class="ico ico_alert_red mr-14"></span>Сброс настроек',
  })
  reset.onclick = () => {
    modalConfirm('Вы действительно хотите полностью сбросить настройки?', true, () => {
      resetSpacesCookies()
      location.reload()
    })
    return false
  }

  misc?.append(backup, changelog, reset)

  const profileUrl = `${baseUrl}/mysite/index/anomaiy`
  const spacesGroupUrl = `${baseUrl}/soo/extension/`
  const telegramUrl = 'https://t.me/spaces_dev'
  const heartUrl = '/i/dark/em/36/2764-FE0F.png'

  const aboutLink = (href: string, text: string) => el('a', {
    href,
    target: '_blank',
    rel: 'noopener noreferrer',
    innerHTML: text,
  })

  const about = el('div', { className: 'widgets-group widgets-group_top nl wbg' })
  const title = el('div', { className: 'grey' })
  title.append(
    'Разработано ',
    aboutLink(profileUrl, 'crashmax'),
    ' с любовью ',
    el('span', { className: 'heart', innerHTML: `<img src="${heartUrl}" alt="❤️" width="16" height="16">` }),
    el('div', {
      innerHTML: `v${pkgVersion}`,
      style: { float: 'right' },
    }),
  )
  const groups = el('div', { className: 'grey' })
  groups.append(
    'Группа на ',
    aboutLink(spacesGroupUrl, 'Spaces'),
    ' и в ',
    aboutLink(telegramUrl, 'Telegram'),
  )
  about.append(el('div', { className: 'content-item3' }, [title, groups]))
  document.querySelector('#SP_PLUS_ABOUT')?.append(about)
}

export function createSettingsPage(features: Feature[]): Feature {
  return {
    id: 'settings-page',
    core: true,
    start: ctx => ctx.onDom(() => {
      if (pathAt() !== '/settings/' || document.querySelector('#SP_PLUS_SETLINK')) return
      const targetLink = document.querySelector<HTMLAnchorElement>(`a[href^="${baseUrl}/settings/notification/"]`)
      if (!targetLink) return

      const link = el('a', {
        href: `${baseUrl}/settings/?sp_plus_settings=1`,
        id: 'SP_PLUS_SETLINK',
        className: targetLink.className,
        innerHTML: '<span>Настройки Spaces Plus</span>',
      })
      link.onclick = () => {
        openSettings(features)
        return false
      }
      targetLink.before(link)

      if (!queryFlag('sp_plus_settings')) return
      openSettings(features)
      if (queryFlag('sp_backup')) document.querySelector<HTMLAnchorElement>('#sp_backup')?.click()
      if (queryFlag('sp_changelog')) document.querySelector<HTMLAnchorElement>('#sp_changelog')?.click()
    }),
  }
}
