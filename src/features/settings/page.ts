import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { ensureStyle, removeStyle } from '@/core/appearance'
import { checkboxDisabledClass, onSiteChange, siteCheckbox } from '@/core/checkbox'
import { byId } from '@/core/dom'
import { unavailableOnTouch } from '@/core/feature'
import { attentionTitle, closable, modalConfirm, modalMessage, notice } from '@/core/modals'
import { pkgVersion } from '@/core/pkg-info'
import { resetSpacesCookies, setSetting, settingEnabled } from '@/core/settings-store'
import {
  backupFlag,
  baseUrl,
  changelogFlag,
  communityUrl,
  notificationSettingsUrl,
  pathAt,
  plusSettingsFlag,
  plusSettingsUrl,
  queryFlag,
  settingsPath,
  siteSettingsUrl,
} from '@/core/site'
import { groupedOptionIds, isGroupedOption, settingsSections } from '@/features/catalog'
import { renderChangelog } from '@/features/check-updates/changelog'
import { clearStoredSmiles } from '@/features/recent-smiles/storage'
import settingsCss from '@/styles/settings.scss?inline'
import { renderBackup } from './backup'
import { plusSettingsTitle, settingsAreaId, settingsDom, settingsGroupId } from './ids'

const crumbSep = '<span class="location-bar__sep ico"></span>'
const unsupportedClass = 'stnd-block-yellow'
const authorNick = 'anomaiy'
const telegramUrl = 'https://t.me/spaces_dev'
const heartIcon = '/i/dark/em/36/2764-FE0F.png'
const subviewTitle = (title: string) => `Spaces Plus: ${title}`

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
  const head = byId(settingsDom.head)
  const crumbNode = byId(settingsDom.crumb)
  const back = byId<HTMLAnchorElement>(settingsDom.back)
  const home = plusSettingsUrl()
  if (head) head.innerHTML = title
  if (crumbNode) crumbNode.innerHTML = `<a href="${home}">Spaces Plus</a>${crumbSep} ${crumb}`
  if (back) back.href = home
}

function appendFeature(feature: Feature, target: HTMLElement) {
  if (feature.listed === false) {
    feature.renderOptions?.(target)
    return
  }

  const enabled = settingEnabled(feature.id)
  const unsupported = unavailableOnTouch(feature)
  if (unsupported && enabled) setSetting(feature.id, false)

  const turnedOn = enabled && !unsupported
  const { input, label } = siteCheckbox(feature.id, turnedOn, unsupported ? unsupportedClass : undefined)
  if (unsupported) {
    input.disabled = true
    label.classList.add(checkboxDisabledClass)
    label.addEventListener('click', (event) => {
      const targetNode = event.target
      if (targetNode instanceof Element && targetNode.closest('a')) return
      modalMessage(attentionTitle, 'Для работы данной функции необходимо переключиться на компьютерную версию сайта', notice)
    })
  }
  onSiteChange(input, (checked) => {
    if (feature.onToggle?.(checked) === false) return false

    setSetting(feature.id, checked)
    if (checked) {
      feature.renderOptions?.(input)
      return
    }
    if (feature.optionsId) byId(feature.optionsId)?.remove()
  })

  label.append(feature.title ?? '')
  if (feature.description) {
    const info = el('a', {
      href: '#',
      className: 'ico ico_question sp_info-btn',
    })
    info.onclick = () => {
      modalMessage(feature.title ?? '', feature.description ?? '', closable)
      return false
    }
    label.append(info)
  }

  target.append(label)
  if (input.checked) feature.renderOptions?.(input)
}

interface Subview {
  title: string
  flag: string
  href: string
  render: (area: HTMLElement) => void
}

function openSubview({ title, flag, href, render }: Subview) {
  return () => {
    hideExtraCards()
    paintHeader(title, title)
    if (queryFlag(flag) !== '1') {
      document.title = subviewTitle(title)
      history.pushState({ [plusSettingsFlag]: '1', [flag]: '1' }, document.title, href)
    }
    const current = byId(settingsDom.area)
    if (current) render(current)
    return false
  }
}

function paintAbout() {
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
    aboutLink(`${baseUrl}/mysite/index/${authorNick}`, authorNick),
    ' с любовью ',
    el('span', { className: 'heart', innerHTML: `<img src="${heartIcon}" alt="❤️" width="16" height="16">` }),
    el('div', {
      innerHTML: `v${pkgVersion}`,
      style: { float: 'right' },
    }),
  )
  const groups = el('div', { className: 'grey' })
  groups.append(
    'Группа на ',
    aboutLink(communityUrl(), 'Spaces'),
    ' и в ',
    aboutLink(telegramUrl, 'Telegram'),
  )
  about.append(el('div', { className: 'content-item3' }, [title, groups]))
  byId(settingsDom.about)?.append(about)
}

function openSettings(features: Feature[]) {
  if (queryFlag(plusSettingsFlag) !== '1') {
    document.title = plusSettingsTitle
    history.pushState({ [plusSettingsFlag]: '1' }, plusSettingsTitle, plusSettingsUrl())
  }

  const link = byId(settingsDom.link)
  const root = link?.parentElement?.parentElement?.parentElement?.parentElement
  if (!(root instanceof HTMLElement) || root.id !== 'main') return
  ensureStyle(settingsDom.style, settingsCss)

  const path = document.getElementById('header_path')
  if (path && !path.innerHTML.includes(settingsDom.crumb)) {
    path.innerHTML = path.innerHTML.replace('Настройки', `<a href="${siteSettingsUrl()}">Настройки</a>${crumbSep}<span id="${settingsDom.crumb}">Spaces Plus</span>`)
  }

  const groupedCards = groupedOptionIds.map((id) => {
    const feature = features.find(item => item.id === id)
    if (!feature?.title) return ''
    return settingsCard(settingsGroupId(id), feature.title, settingsAreaId(id))
  }).join('')

  root.innerHTML = `
    <div class="widgets-group widgets-group_top js-container__block" id="${settingsDom.main}">
      <div class="b-title cl b-title_center b-title_first oh">
        <div class="b-title__item" id="${settingsDom.head}">${plusSettingsTitle}</div>
      </div>
      <div class="content"><div class="list f-c_fll"><div id="${settingsDom.area}"></div></div></div>
    </div>
    ${groupedCards}
    <div class="widgets-group js-container__block sp-plus-extra" id="${settingsDom.misc}">
      <div class="b-title cl b-title_center b-title_first oh">
        <div class="b-title__item">Прочее</div>
      </div>
      <div class="content"><div class="list f-c_fll"><div id="${settingsDom.miscArea}"></div></div></div>
    </div>
    <div id="${settingsDom.about}"></div>
    <a id="${settingsDom.back}" href="${siteSettingsUrl()}?" class="link-return full_link"><span class="ico ico_arr_small_left_darkblue"></span> Назад</a>
  `

  const area = byId(settingsDom.area)
  if (!area) return

  const byFeature = new Map(features.map(feature => [feature.id, feature]))
  const placed = new Set<string>()

  for (const section of settingsSections) {
    const items = section.ids.flatMap((id) => {
      const feature = byFeature.get(id)
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
    const target = isGroupedOption(feature.id) ? byId(settingsAreaId(feature.id)) : area
    if (!target) continue
    appendFeature(feature, target)
  }

  const misc = byId(settingsDom.miscArea)
  const backupTitle = 'Импорт и экспорт настроек'
  const changelogTitle = 'История обновлений'

  const backup = sectionLink({
    id: backupFlag,
    icon: 'ico_shared',
    label: backupTitle,
    href: plusSettingsUrl(backupFlag),
  })
  backup.onclick = openSubview({
    title: backupTitle,
    flag: backupFlag,
    href: backup.href,
    render: renderBackup,
  })

  const changelog = sectionLink({
    id: changelogFlag,
    icon: 'ico_history_blue',
    label: changelogTitle,
    href: plusSettingsUrl(changelogFlag),
  })
  changelog.onclick = openSubview({
    title: changelogTitle,
    flag: changelogFlag,
    href: changelog.href,
    render: renderChangelog,
  })

  const reset = el('a', {
    href: '#',
    className: 'list-link list-link_arr',
    id: 'sp_plus_reset',
    innerHTML: '<span class="ico ico_alert_red mr-14"></span>Сброс настроек',
  })
  reset.onclick = () => {
    modalConfirm('Вы действительно хотите полностью сбросить настройки?', true, () => {
      resetSpacesCookies()
      clearStoredSmiles()
      location.reload()
    })
    return false
  }

  misc?.append(backup, changelog, reset)
  paintAbout()
}

export function createSettingsPage(features: Feature[]): Feature {
  return {
    id: 'settings-page',
    core: true,
    start: (ctx) => {
      const stop = ctx.onDom(() => {
        if (!byId(settingsDom.main)) removeStyle(settingsDom.style)
        if (pathAt() !== settingsPath || byId(settingsDom.link)) return
        const targetLink = document.querySelector<HTMLAnchorElement>(`a[href^="${notificationSettingsUrl()}"]`)
        if (!targetLink) return

        const link = el('a', {
          href: plusSettingsUrl(),
          id: settingsDom.link,
          className: targetLink.className,
          innerHTML: `<span>${plusSettingsTitle}</span>`,
        })
        link.onclick = () => {
          openSettings(features)
          return false
        }
        targetLink.before(link)

        if (!queryFlag(plusSettingsFlag)) return
        openSettings(features)
        if (queryFlag(backupFlag)) byId<HTMLAnchorElement>(backupFlag)?.click()
        if (queryFlag(changelogFlag)) byId<HTMLAnchorElement>(changelogFlag)?.click()
      })
      return () => {
        stop()
        removeStyle(settingsDom.style)
      }
    },
  }
}
