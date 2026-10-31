import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { pluralize } from '@zero-dependency/utils'
import { onSiteChange, setChecked, siteCheckbox } from '@/core/checkbox'
import { defineToggle } from '@/core/feature'
import { http } from '@/core/http'
import { log } from '@/core/log'
import { modalConfirm } from '@/core/modals'
import { anchoredHref, baseUrl, pathAt, searchParam, session } from '@/core/site'
import { withStyle } from '@/core/with-style'
import readersCss from '@/styles/features/readers.scss?inline'
import { toggleId } from '@/types/toggles'
import { askingToSelectAll, eventElement, listButtonClass, paintChooseAll, removeIcon, runDeleteQueue, warnNothingSelected, withIcon } from './batch-select'

const readerWord = (count: number) => pluralize(count)`читател${['я', 'я', 'ей']}`
const readersStyleId = 'SP_STYLE_READERS'
const readersToolsId = 'SP_PLUS_BUTTONS_R'
const selectedKey = 'sp_readers_selected'
const readersPage = '/lenta/readers/'
const readerDeletePath = '/lenta/reader_delete/'
const userParam = 'user'

function readSelected() {
  try {
    const raw = sessionStorage.getItem(selectedKey)
    const list = raw ? JSON.parse(raw) : []
    if (!Array.isArray(list)) return new Set<string>()
    return new Set(list.filter((item): item is string => typeof item === 'string' && item !== ''))
  } catch {
    return new Set<string>()
  }
}

function writeSelected(selected: Set<string>) {
  sessionStorage.setItem(selectedKey, JSON.stringify([...selected]))
}

export const deleteReaders: Feature = defineToggle({
  id: toggleId.readers,
  title: 'Пакетное удаление читателей',
  description: 'Функция позволяет удалять сразу несколько читателей.',
  start: withStyle(readersStyleId, readersCss, (ctx) => {
    const stop = ctx.onDom(() => {
      if (pathAt() !== readersPage || document.getElementById(readersToolsId)) return
      const links = [...document.querySelectorAll<HTMLAnchorElement>(anchoredHref(readerDeletePath))]
      if (!links.length) return

      const selected = readSelected()
      const checks: HTMLInputElement[] = []
      const chooseAll = el('button', {
        className: listButtonClass,
        style: { borderRight: 'unset' },
      })
      for (const link of links) {
        const userId = searchParam(link.href, userParam)
        if (!userId) continue
        const box = siteCheckbox(userId, selected.has(userId), 'sp-ch-readers')
        onSiteChange(box.input, (checked) => {
          if (checked) selected.add(userId)
          else selected.delete(userId)
          writeSelected(selected)
          paintChooseAll(chooseAll, checks.every(item => item.checked))
        })
        link.tabIndex = -1
        link.setAttribute('aria-hidden', 'true')
        link.before(box.label)
        checks.push(box.input)
      }

      if (!document.querySelector('.sp-ch-readers')) return

      const buttons = el('div', {
        className: 'user__tools_last',
        id: readersToolsId,
      })
      paintChooseAll(chooseAll, checks.every(item => item.checked))
      chooseAll.onclick = (event) => {
        const parent = eventElement(event)
        if (!parent) return
        const enable = askingToSelectAll(parent.innerHTML)
        for (const box of checks) {
          setChecked(box, enable)
          if (enable) selected.add(box.id)
          else selected.delete(box.id)
        }
        writeSelected(selected)
        paintChooseAll(parent, enable)
      }

      const remove = el('button', {
        className: listButtonClass,
        innerHTML: withIcon(removeIcon, 'Удалить выбранных'),
      })
      remove.onclick = () => {
        const readers = [...selected]
        if (!readers.length) {
          warnNothingSelected('читателей, которых нужно удалить')
          return
        }

        modalConfirm(`Вы действительно хотите удалить ${readers.length} ${readerWord(readers.length)}?`, true, async () => {
          await runDeleteQueue(readers, readerWord, async (reader) => {
            const response = await http(`${baseUrl}${readerDeletePath}?user=${reader}`, {
              method: 'POST',
              body: `&CK=${session.ck}&cfms=Удалить`,
            })
            log.info('Удалили читателя', response)
          })
          sessionStorage.removeItem(selectedKey)
          location.reload()
        })
      }

      buttons.append(remove, chooseAll)
      const pager = document.querySelector('div.pgn-wrapper')
      const main = document.getElementById('main')
      if (pager) {
        pager.prepend(buttons)
        return
      }
      if (!main) return
      buttons.classList.add('widgets-group')
      main.prepend(buttons)
    })
    return stop
  }),
})
