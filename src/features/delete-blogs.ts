import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { pluralize } from '@zero-dependency/utils'
import { http } from '@/core/http'
import { log } from '@/core/log'
import { modalConfirm, modalMessage } from '@/core/modals'
import { assetOrigin, baseUrl, pathAt, searchParam, session } from '@/core/site'

const blogWord = (count: number) => pluralize(count)`блог${['', 'а', 'ов']}`

export const deleteBlogs: Feature = {
  id: 'blogsd',
  title: 'Пакетное удаление блогов',
  description: `Функция позволяет удалять сразу несколько блогов.</br></br><img src="${assetOrigin}/screens/sort-blogs.png"></br>Работает только в <a href="${baseUrl}/diary/view/?Short=0&sort=0">расширенном виде</a>.`,
  start: ctx => ctx.onDom(() => {
    try {
      const section = pathAt(1)
      const view = pathAt(2)
      const buttons = document.querySelector('#SP_PLUS_BUTTONS_B')
      if (view !== 'view' && buttons) buttons.remove()
      if (section !== 'diary' || view !== 'view' || document.querySelector('input[id^="SP_DB_"]')) return

      const links = [...document.querySelectorAll<HTMLAnchorElement>(`a[href^="${baseUrl}/diary/editaccess/"]`)]
      if (!links.length) return

      const checks: HTMLInputElement[] = []
      for (const link of links) {
        const blogId = `SP_DB_${searchParam(link.href, 'id')}`
        const box = el('input', {
          className: 'sp-cbfb sp-checkbox-square',
          type: 'checkbox',
          id: blogId,
        })
        link.parentElement?.append(
          box,
          el('label', {
            className: 'sp-ch-blogs',
            htmlFor: blogId,
          }),
        )
        checks.push(box)
      }

      const bar = el('div', {
        className: 'widgets-group user__tools_last',
        id: 'SP_PLUS_BUTTONS_B',
      })
      const chooseAll = el('button', {
        className: 'user__tools-link table__cell sp_btn-list',
        innerHTML: '<span class="sp sp-ok-blue"></span><span class="sp-ch-text">Выбрать все</span>',
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
        className: 'user__tools-link table__cell sp_btn-list',
        innerHTML: '<span class="sp sp-remove-red"></span><span class="sp-del-text">Удалить выбранные</span>',
      })
      remove.onclick = () => {
        const blogs = checks.flatMap((box) => {
          if (!box.checked) return []
          const id = /^SP_DB_(\d+)$/i.exec(box.id)?.[1]
          return id ? [id] : []
        })
        if (!blogs.length) {
          modalMessage('Внимание!', 'Отметьте галочкой блоги, которые нужно удалить, и попробуйте ещё раз', { close: true, timer: 5 })
          return false
        }

        modalConfirm(`Вы действительно хотите удалить ${blogs.length} ${blogWord(blogs.length)}?`, true, async () => {
          const total = blogs.length
          let left = total
          for (const blog of blogs) {
            modalMessage(`Осталось удалить ${left} из ${total} ${blogWord(left)}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>')
            left -= 1
            const response = await http(`${baseUrl}/diary/delete/?CK=${session.ck}&id=${blog}&Sure=1`, { proxy: true })
            log.info('Удалили блог', response)
          }
          location.reload()
        })
        return false
      }

      bar.append(remove, chooseAll)
      if (document.querySelector('input[id^="SP_DB_"]')) document.querySelector('#main')?.after(bar)
    } catch (error) {
      log.error('blogsd', error)
    }
  }),
}
