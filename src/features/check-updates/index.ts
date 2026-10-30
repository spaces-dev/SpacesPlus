import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { log } from '@/core/log'
import { modalMessage } from '@/core/modals'
import { pkgVersion } from '@/core/pkg-info'
import { getSettings, setSetting } from '@/core/settings-store'
import { assetOrigin, revision } from '@/core/site'
import { asSemver, compareSemver, escapeHtml, loadUpdates, renderSections } from './changelog'

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

      const seen = asSemver(getSettings().upVersion)
      const current = compareSemver(seen, pkgVersion) > 0 ? seen : pkgVersion
      if (compareSemver(latest.version, current) <= 0) return

      modalMessage(
        `Доступна новая версия Spaces Plus ${escapeHtml(latest.version)}`,
        `<div class="pad_t_a"></div>${renderSections(latest.sections)}<div id="SP_UPDATER_BUTTONS" class="pad_t_a"><a class="btn btn_green btn_input" href="${assetOrigin}/spaces-plus.user.js?r=${revision}">Обновить</a></div>`,
        { close: true },
      )

      const buttons = document.querySelector('#SP_UPDATER_BUTTONS')
      if (!buttons) return
      const hide = el('a', {
        href: '#',
        className: 'btn btn_white btn_input right sp-dialog__btn',
        innerHTML: 'Больше не показывать',
      })
      hide.onclick = () => {
        setSetting('upVersion', latest.version)
        document.querySelector('#SP_PLUS_ALERT')?.remove()
        return false
      }
      buttons.append(hide)
    }).catch((error) => {
      log.error('check-updates', error)
    })
  },
}
