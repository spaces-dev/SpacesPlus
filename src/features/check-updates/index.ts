import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { log } from '@/core/log'
import { closable, modalMessage, quietButtonClass, removeAlert } from '@/core/modals'
import { pkgScript, pkgVersion } from '@/core/pkg-info'
import { getSettings, setSetting, settingKey } from '@/core/settings-store'
import { cacheBust } from '@/core/site'
import { unpackVersion } from '@/core/version'
import { compareSemver, escapeHtml, loadUpdates, renderSections } from './changelog'

function latestReleased(changelog: NonNullable<Awaited<ReturnType<typeof loadUpdates>>>) {
  return changelog.releases.find(release => !release.unreleased)
}

export const checkUpdates: Feature = {
  id: 'check-updates',
  core: true,
  start: () => {
    loadUpdates().then((json) => {
      const latest = json ? latestReleased(json) : undefined
      if (!latest) return

      const seen = unpackVersion(getSettings().upVersion)
      const current = compareSemver(seen, pkgVersion) > 0 ? seen : pkgVersion
      if (compareSemver(latest.version, current) <= 0) return

      const updaterId = 'SP_UPDATER_BUTTONS'
      modalMessage(
        `Доступна новая версия Spaces Plus ${escapeHtml(latest.version)}`,
        `<div class="pad_t_a"></div>${renderSections(latest.sections)}<div id="${updaterId}" class="pad_t_a"><a class="btn btn_green btn_input" href="${cacheBust(pkgScript.file)}">Обновить</a></div>`,
        closable,
      )

      const buttons = document.getElementById(updaterId)
      if (!buttons) return
      const hide = el('a', {
        href: '#',
        className: quietButtonClass,
        innerHTML: 'Больше не показывать',
      })
      hide.onclick = () => {
        setSetting(settingKey.seenVersion, latest.version)
        removeAlert()
        return false
      }
      buttons.append(hide)
    }).catch((error) => {
      log.error('check-updates', error)
    })
  },
}
