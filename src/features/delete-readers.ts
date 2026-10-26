import type { Feature } from '../core/feature'
import { el } from '@zero-dependency/dom'
import { pluralize } from '@zero-dependency/utils'
import { http } from '../core/http'
import { log } from '../core/log'
import { modalConfirm, modalMessage } from '../core/modals'
import { baseUrl, pathAt, searchParam, session } from '../core/site'

const readerWord = (count: number) => pluralize(count)`читател${['я', 'я', 'ей']}`

export const deleteReaders: Feature = {
  id: 'readersd',
  title: 'Пакетное удаление читателей',
  description: 'Функция позволяет удалять сразу несколько читателей.',
  start: ctx => ctx.onDom(() => {
    try {
      if (pathAt() !== '/lenta/readers/' || document.querySelector('#SP_PLUS_BUTTONS_R')) return
      const links = [...document.querySelectorAll<HTMLAnchorElement>(`a[href^="${baseUrl}/lenta/reader_delete/"]`)]
      if (!links.length) return

      const checks: HTMLInputElement[] = []
      for (const link of links) {
        const userId = searchParam(link.href, 'user')
        if (!userId) continue
        const box = el('input', {
          type: 'checkbox',
          className: 'sp-cbfr sp-checkbox-square',
          id: userId,
        })
        const wrap = el('label', { className: 'list-link icon-link sp-ch-readers' }, [
          box,
          el('label', { htmlFor: userId }),
        ])
        link.after(wrap)
        checks.push(box)
      }

      if (!document.querySelector('.sp-ch-readers')) return

      const buttons = el('div', {
        className: 'user__tools_last',
        id: 'SP_PLUS_BUTTONS_R',
      })
      const chooseAll = el('button', {
        className: 'user__tools-link table__cell sp_btn-list',
        innerHTML: '<span class="sp sp-ok-blue"></span><span class="sp-ch-text">Выбрать все</span>',
        style: { borderRight: 'unset' },
      })
      chooseAll.onclick = (event) => {
        const target = event.target
        if (!(target instanceof Element)) return
        const parent = target.nodeName === 'SPAN' ? target.parentElement : target
        if (!parent) return
        const enable = parent.innerHTML.includes('Выбрать все')
        for (const box of checks) box.checked = enable
        const caption = enable ? 'Снять отметки' : 'Выбрать все'
        parent.innerHTML = `<span class="sp sp-ok-blue"></span><span class="sp-ch-text">${caption}</span>`
      }

      const remove = el('button', {
        className: 'user__tools-link table__cell sp_btn_line sp_btn-list',
        innerHTML: '<span class="sp sp-remove-red"></span><span class="sp-del-text">Удалить выбранных</span>',
      })
      remove.onclick = () => {
        const readers = checks.filter(box => box.checked).map(box => box.id)
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
