import type { Feature } from '../../core/feature'
import { el } from '@zero-dependency/dom'
import { modalConfirm, modalMessage } from '../../core/modals'
import { getSettings, resetSpacesCookies, setSetting } from '../../core/settings-store'
import { baseUrl, isTouch, pathAt, queryFlag, version } from '../../core/site'
import { renderChangelog } from '../check-updates'
import { renderBackup } from './backup'
import { renderBuiltins } from './built-ins'

interface SectionLink {
  id: string
  color: string
  icon: string
  label: string
  href: string
}

function sectionLink({ id, color, icon, label, href }: SectionLink) {
  const link = el('a', {
    href,
    className: 'list-link list-link_arr sp_font_sm',
    id,
    innerHTML: `<span class="b" style="color: ${color}"><span class="sp ${icon} mr-14"></span>${label}</span>`,
  })
  return link
}

const groupedIds = ['friendsOn', 'bodystyle', 'weather', 'recents']

const isGrouped = (id: string) => groupedIds.includes(id)

function settingsCard(id: string, title: string, areaId: string) {
  return `
  <div class="widgets-group js-container__block sp-plus-extra" id="${id}">
    <div class="b-title cl b-title_center b-title_first oh">
      <div class="b-title__item">${title}</div>
    </div>
    <div class="content"><div class="list f-c_fll"><div id="${areaId}" class="no-select"></div></div></div>
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
    crumbNode.innerHTML = `<a href="${baseUrl}/settings/?sp_plus_settings=1">Spaces+</a><span class="location-bar__sep ico"></span> ${crumb}`
  }
  if (back) back.href = `${baseUrl}/settings/?sp_plus_settings=1`
}

function openSettings(features: Feature[]) {
  if (!/sp_plus_settings=1/i.test(location.href)) {
    document.title = 'Spaces+'
    history.pushState({ sp_plus_settings: '1' }, 'Spaces+', `${baseUrl}/settings/?sp_plus_settings=1`)
  }

  const link = document.querySelector('#SP_PLUS_SETLINK')
  const root = link?.parentElement?.parentElement?.parentElement?.parentElement
  if (!(root instanceof HTMLElement) || root.id !== 'main') return

  const path = document.querySelector('#header_path')
  if (path && !path.innerHTML.includes('SP_PLUS_SETHEAD2')) {
    path.innerHTML = path.innerHTML.replace('Настройки', `<a href="${baseUrl}/settings/">Настройки</a><span class="location-bar__sep ico"></span><span id="SP_PLUS_SETHEAD2">Spaces+</span>`)
  }

  const groupedCards = groupedIds.map((id) => {
    const feature = features.find(item => item.id === id)
    if (!feature?.title) return ''
    return settingsCard(`SP_PLUS_GROUP_${id}`, feature.title, `SP_PLUS_AREA_${id}`)
  }).join('')

  root.innerHTML = `
    <div class="widgets-group widgets-group_top js-container__block" id="SP_PLUS_MAIN">
      <div class="b-title cl b-title_center b-title_first oh">
        <div class="b-title__item" id="SP_PLUS_SETHEAD">Настройки Spaces+</div>
      </div>
      <div class="content"><div class="list f-c_fll"><div id="SP_PLUS_SETAREA" class="no-select"></div></div></div>
    </div>
    ${groupedCards}
    <div class="widgets-group js-container__block sp-plus-extra" id="SP_PLUS_BUILTINS">
      <div class="b-title cl b-title_center b-title_first oh">
        <div class="b-title__item">Встроенные возможности сайта</div>
      </div>
      <div class="content"><div class="list f-c_fll"><div id="SP_PLUS_BUILTINS_AREA" class="no-select"></div></div></div>
    </div>
    <div class="widgets-group js-container__block sp-plus-extra" id="SP_PLUS_MISC">
      <div class="b-title cl b-title_center b-title_first oh">
        <div class="b-title__item">Прочее</div>
      </div>
      <div class="content"><div class="list f-c_fll"><div id="SP_PLUS_MISC_AREA" class="no-select"></div></div></div>
    </div>
    <div id="SP_PLUS_ABOUT"></div>
    <a id="SP_PLUS_SETBACK" href="${baseUrl}/settings/?" class="link-return full_link"><span class="ico ico_arr_small_left_darkblue"></span> Назад</a>
  `

  const area = document.querySelector('#SP_PLUS_SETAREA')
  if (!area) return

  for (const feature of features) {
    if (!feature.title) continue
    const enabled = getSettings()[feature.id as keyof ReturnType<typeof getSettings>] === true
    const unsupported = Boolean(feature.desktopOnly && isTouch())
    if (unsupported && enabled) setSetting(feature.id, false)

    const checkbox = el('input', {
      id: feature.id,
      type: 'checkbox',
      className: 'sp-checkbox-square',
      checked: enabled && !unsupported,
    })
    if (unsupported) checkbox.setAttribute('unsupported', feature.id)
    checkbox.onclick = () => {
      if (unsupported && checkbox.checked) {
        checkbox.checked = false
        modalMessage('Внимание!', 'Для работы данной функции необходимо переключиться на компьютерную версию сайта', { close: true, timer: 5 })
        return
      }

      if (feature.onToggle?.(checkbox.checked) === false) {
        checkbox.checked = false
        return
      }

      setSetting(feature.id, checkbox.checked)
      if (checkbox.checked) {
        feature.renderOptions?.(checkbox)
        return
      }
      if (feature.optionsId) document.getElementById(feature.optionsId)?.remove()
    }

    const row = el('label', {
      className: `list-link ${unsupported ? 'sp_unsupported' : ''}`,
    }, [
      checkbox,
      el('label', { innerHTML: feature.title, htmlFor: feature.id }),
    ])

    if (feature.description) {
      const info = el('a', {
        href: '#',
        className: 'sp sp-info sp_info-btn',
      })
      info.onclick = () => {
        modalMessage(feature.title ?? '', feature.description ?? '', { close: true })
        return false
      }
      row.append(info)
    }

    const target = isGrouped(feature.id)
      ? document.querySelector(`#SP_PLUS_AREA_${feature.id}`)
      : area
    if (!target) continue
    target.append(row)
    if (checkbox.checked) feature.renderOptions?.(checkbox)
  }

  const builtins = document.querySelector('#SP_PLUS_BUILTINS_AREA')
  if (builtins) renderBuiltins(builtins)

  const misc = document.querySelector('#SP_PLUS_MISC_AREA')

  const backup = sectionLink({
    id: 'sp_backup',
    color: '#2e7d32',
    icon: 'sp-backup-g',
    label: 'Импорт и экспорт настроек',
    href: `${baseUrl}/settings/?sp_plus_settings=1&sp_backup=1`,
  })
  backup.onclick = () => {
    hideExtraCards()
    paintHeader('Импорт и экспорт настроек', 'Импорт и экспорт настроек')
    if (!/sp_backup=1/i.test(location.href)) {
      document.title = 'Spaces+: Импорт и экспорт настроек'
      history.pushState({ sp_plus_settings: '1', sp_backup: '1' }, document.title, backup.href)
    }
    const current = document.querySelector('#SP_PLUS_SETAREA')
    if (current) renderBackup(current)
    return false
  }

  const changelog = sectionLink({
    id: 'sp_changelog',
    color: '#2196f3',
    icon: 'sp-restore-blue',
    label: 'История обновлений',
    href: `${baseUrl}/settings/?sp_plus_settings=1&sp_changelog=1`,
  })
  changelog.onclick = () => {
    hideExtraCards()
    paintHeader('История обновлений', 'История обновлений')
    if (!/sp_changelog=1/i.test(location.href)) {
      document.title = 'Spaces+: История обновлений'
      history.pushState({ sp_plus_settings: '1', sp_changelog: '1' }, document.title, changelog.href)
    }
    const current = document.querySelector('#SP_PLUS_SETAREA')
    if (current) renderChangelog(current)
    return false
  }

  const reset = el('a', {
    href: '#',
    className: 'list-link list-link_arr sp_font_sm',
    id: 'sp_plus_reset',
    innerHTML: '<span class="b" style="color: #f86934"><span class="sp sp-alert mr-14"></span>Сброс настроек</span>',
  })
  reset.onclick = () => {
    modalConfirm('Вы действительно хотите полностью сбросить настройки?', true, () => {
      resetSpacesCookies()
      location.reload()
    })
    return false
  }

  misc?.append(backup, changelog, reset)

  let clicks = 0
  const about = el('div', { className: 'widgets-group widgets-group_top nl wbg no-select' })
  const title = el('div', {
    className: 'grey',
    innerHTML: 'Developed by <a href="https://crashmax.ru" target="_blank">crashmax</a> with love ',
  })
  const heart = el('div', { innerHTML: '❤️', className: 'heart' })
  heart.onclick = () => {
    clicks += 1
    if (clicks >= 10) location.href = 'https://t.me/spaces_dev'
  }
  title.append(heart, el('div', {
    innerHTML: `v${version}`,
    style: { float: 'right' },
  }))
  about.append(el('div', { className: 'content-item3' }, title))
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
        innerHTML: '<span>Spaces+</span>',
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
