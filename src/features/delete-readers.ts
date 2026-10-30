import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { pluralize } from '@zero-dependency/utils'
import { onSiteChange, setChecked, siteCheckbox } from '@/core/checkbox'
import { http } from '@/core/http'
import { log } from '@/core/log'
import { modalConfirm, modalMessage } from '@/core/modals'
import { baseUrl, pathAt, searchParam, session } from '@/core/site'

const readerWord = (count: number) => pluralize(count)`читател${['я', 'я', 'ей']}`
const selectedKey = 'sp_readers_selected'

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

const chooseCaption = (allChecked: boolean) => allChecked ? 'Снять отметки' : 'Выбрать все'

export const deleteReaders: Feature = {
  id: 'readersd',
  title: 'Пакетное удаление читателей',
  description: 'Функция позволяет удалять сразу несколько читателей.',
  start: ctx => ctx.onDom(() => {
    try {
      if (pathAt() !== '/lenta/readers/' || document.querySelector('#SP_PLUS_BUTTONS_R')) return
      const links = [...document.querySelectorAll<HTMLAnchorElement>(`a[href^="${baseUrl}/lenta/reader_delete/"]`)]
      if (!links.length) return

      const selected = readSelected()
      const checks: HTMLInputElement[] = []
      const chooseAll = el('button', {
        className: 'user__tools-link table__cell sp_btn-list',
        style: { borderRight: 'unset' },
      })
      for (const link of links) {
        const userId = searchParam(link.href, 'user')
        if (!userId) continue
        const box = siteCheckbox(userId, selected.has(userId), 'sp-ch-readers')
        onSiteChange(box.input, (checked) => {
          if (checked) selected.add(userId)
          else selected.delete(userId)
          writeSelected(selected)
          chooseAll.innerHTML = `<span class="ico ico_ok_blue"></span> ${chooseCaption(checks.every(item => item.checked))}`
        })
        link.tabIndex = -1
        link.setAttribute('aria-hidden', 'true')
        link.before(box.label)
        checks.push(box.input)
      }

      if (!document.querySelector('.sp-ch-readers')) return

      const buttons = el('div', {
        className: 'user__tools_last',
        id: 'SP_PLUS_BUTTONS_R',
      })
      chooseAll.innerHTML = `<span class="ico ico_ok_blue"></span> ${chooseCaption(checks.every(item => item.checked))}`
      chooseAll.onclick = (event) => {
        const target = event.target
        if (!(target instanceof Element)) return
        const parent = target.nodeName === 'SPAN' ? target.parentElement : target
        if (!parent) return
        const enable = parent.innerHTML.includes('Выбрать все')
        for (const box of checks) {
          setChecked(box, enable)
          if (enable) selected.add(box.id)
          else selected.delete(box.id)
        }
        writeSelected(selected)
        parent.innerHTML = `<span class="ico ico_ok_blue"></span> ${chooseCaption(enable)}`
      }

      const remove = el('button', {
        className: 'user__tools-link table__cell sp_btn-list',
        innerHTML: '<span class="ico ico_remove_red"></span> Удалить выбранных',
      })
      remove.onclick = () => {
        const readers = [...selected]
        if (!readers.length) {
          modalMessage('Внимание!', 'Отметьте галочкой читателей, которых нужно удалить, и попробуйте ещё раз', { close: true, timer: 5 })
          return
        }

        modalConfirm(`Вы действительно хотите удалить ${readers.length} ${readerWord(readers.length)}?`, true, async () => {
          const total = readers.length
          let left = total
          for (const reader of readers) {
            modalMessage(`Осталось удалить ${left} из ${total} ${readerWord(left)}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>')
            left -= 1
            const response = await http(`${baseUrl}/lenta/reader_delete/?user=${reader}`, {
              method: 'POST',
              body: `&CK=${session.ck}&cfms=Удалить`,
            })
            log.info('Удалили читателя', response)
          }
          sessionStorage.removeItem(selectedKey)
          location.reload()
        })
      }

      buttons.append(remove, chooseAll)
      const pager = document.querySelector('div.pgn-wrapper')
      const main = document.querySelector('#main')
      if (pager) {
        pager.prepend(buttons)
        return
      }
      if (!main) return
      buttons.classList.add('widgets-group')
      main.prepend(buttons)
    } catch (error) {
      log.error('readersd', error)
    }
  }),
}
