import type { Changelog, ChangelogSection, ChangelogSectionType } from './types'
import { el } from '@zero-dependency/dom'
import { http, httpStatus } from '@/core/http'
import { log } from '@/core/log'
import { pkgVersion } from '@/core/pkg-info'
import { baseUrl, cacheBust } from '@/core/site'
import { changelogSchema } from './types'

const sectionTitles: Record<ChangelogSectionType, string> = {
  added: 'Добавлено',
  changed: 'Изменено',
  fixed: 'Исправлено',
  improved: 'Улучшено',
  removed: 'Удалено',
  other: 'Прочее',
}

export function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function linkHref(href: string, origin: string) {
  if (href.startsWith('/')) return `${origin}${href}`
  return href
}

function renderInline(value: string, origin: string) {
  const pattern = /\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]*)\)/g
  let html = ''
  let last = 0

  for (const match of value.matchAll(pattern)) {
    const index = match.index ?? 0
    const label = match[1]
    const raw = match[2]
    html += escapeHtml(value.slice(last, index))
    if (label && raw) {
      const external = raw.startsWith('http')
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : ''
      html += `<a href="${escapeHtml(linkHref(raw, origin))}"${attrs}>${escapeHtml(label)}</a>`
    }
    last = index + match[0].length
  }

  html += escapeHtml(value.slice(last))
  return html
}

function sectionHeading(section: ChangelogSection) {
  return section.title ?? (section.type ? sectionTitles[section.type] : '')
}

export function renderSections(sections: ChangelogSection[], origin = baseUrl) {
  return sections.map((section) => {
    const heading = sectionHeading(section)
    if (!heading) return ''
    const items = section.items.map(item => `<li>${renderInline(item, origin)}</li>`).join('')
    return `<b>${escapeHtml(heading)}:</b><br><ul class="list">${items}</ul>`
  }).join('')
}

export function formatDate(iso: string) {
  const [year, month, day] = iso.split('-')
  if (!year || !month || !day) return iso
  return `${day}.${month}.${year}`
}

const changelogFile = 'changelog.json'

const semverParts = (value: string) => value.split('.').map(part => Number(part) || 0)

export function compareSemver(left: string, right: string) {
  const a = semverParts(left)
  const b = semverParts(right)
  const length = Math.max(a.length, b.length)

  for (let index = 0; index < length; index += 1) {
    const diff = (a[index] ?? 0) - (b[index] ?? 0)
    if (diff !== 0) return diff
  }

  return 0
}

export async function loadUpdates() {
  const response = await http<Changelog>(cacheBust(changelogFile))
  log.info('Проверка обновлений', response)
  const body = response.parsedBody
  if (response.status !== httpStatus.ok || body?.schema !== changelogSchema || !Array.isArray(body.releases)) return
  return body
}

export async function renderChangelog(target: Element) {
  window.scrollTo(0, 0)
  target.innerHTML = ''
  const pad = el('div', { className: 'pad_t_a' })
  const preloader = el('div', {
    className: 't_center',
    id: 'SP_JSON_PRELOADER',
    innerHTML: `<img src="${location.protocol}//spac.me/i/preloader.gif">`,
  })
  const wrap = el('div', { className: 'wbg error__item_wrapper sp_plus_c_wrap' }, [
    el('div', { className: 'js-input_error_wrap' }, pad),
    preloader,
  ])
  target.append(wrap)

  const json = await loadUpdates()
  if (!json) return

  for (const entry of json.releases) {
    const version = el('span', {
      className: 'sp_plus_ver',
      textContent: `v${entry.version}`,
    })
    if (compareSemver(entry.version, pkgVersion) === 0) {
      version.append(el('span', {
        className: 'sp_plus_badge',
        title: 'Текущая версия',
        textContent: 'текущая',
      }))
    }

    const label = el('label', { className: 'label sp_plus_line_c' }, [
      version,
      el('span', { className: 'sp_plus_rule' }),
    ])
    if (entry.date) {
      label.append(el('div', {
        className: 'label__desc',
        textContent: formatDate(entry.date),
      }))
    }

    pad.append(
      label,
      el('div', {
        className: 'grey sp_plus_c_desc',
        innerHTML: renderSections(entry.sections),
      }),
    )
  }

  preloader.remove()
}
