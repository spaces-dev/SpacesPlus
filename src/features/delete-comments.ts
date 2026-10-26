import type { Feature } from '../core/feature'
import { el } from '@zero-dependency/dom'
import { pluralize } from '@zero-dependency/utils'
import { http } from '../core/http'
import { log } from '../core/log'
import { modalConfirm, modalMessage } from '../core/modals'
import { baseUrl, isDesktop } from '../core/site'

const commentWord = (count: number) => pluralize(count)`комментари${['й', 'я', 'ев']}`

function commentRoot(node: Node) {
  const steps = isDesktop() ? 5 : 8
  let current: Node | null = node
  for (let index = 0; index < steps; index += 1) current = current?.parentElement ?? null
  return current instanceof HTMLElement ? current : null
}

function setChosen(parent: Element, inputs: HTMLInputElement[], chooseAll: boolean) {
  for (const input of inputs) input.checked = chooseAll
  const caption = chooseAll ? 'Снять отметки' : 'Выбрать все'
  parent.innerHTML = `<span class="sp sp-ok-blue"></span><span class="sp-ch-text">${caption}</span>`
}

export const deleteComments: Feature = {
  id: 'comments',
  title: 'Пакетное удаление комментариев',
  description: 'Функция будет полезна тем, кто часто удаляет много комментариев. Работает там, где у вас есть возможность удалять комментарии: свой блог или гостевая.',
  start: ctx => ctx.onDom(() => {
    try {
      const heading = document.querySelector('h2.span')
      const dates = document.querySelectorAll<HTMLElement>('span.comment_date')
      const deleteLink = document.querySelector(`a[href^="${baseUrl}/comment/delete/"]`)
      const banLink = document.querySelector(`a[href^="${baseUrl}/forums/moder/ban/"]`)
      const onComments = heading?.textContent === 'Комментарии'
      const onDelete = deleteLink?.textContent === 'Удалить'
      const onAdmin = banLink?.textContent === 'Бан'
      if (!dates.length || !onComments || (!onDelete && !onAdmin)) return

      for (const child of dates) {
        if (child.getElementsByTagName('input').length) continue
        const root = commentRoot(child)
        const id = root?.id
        if (!id || Number.isNaN(Number.parseInt(id, 10))) continue

        child.append(el('input', {
          type: 'checkbox',
          className: 'sp-cbfc sp-checkbox-square',
          id: `DC_${id}`,
        }))
        child.append(el('label', { htmlFor: `DC_${id}` }))
      }

      if (document.querySelector('#SP_PLUS_BUTTONS')) return
      const buttons = el('div', {
        className: 'widgets-group user__tools_last',
        id: 'SP_PLUS_BUTTONS',
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
        const inputs = [...document.querySelectorAll<HTMLInputElement>('input[id^="DC_"]')]
        setChosen(parent, inputs, parent.innerHTML.includes('Выбрать все'))
      }

      const remove = el('button', {
        className: 'user__tools-link table__cell sp_btn_line sp_btn-list',
        innerHTML: '<span class="sp sp-remove-red"></span><span class="sp-del-text">Удалить выбранные</span>',
      })
      remove.onclick = () => {
        const urls: string[] = []
        for (const input of document.querySelectorAll<HTMLInputElement>('input[id^="DC_"]')) {
          if (!input.checked) continue
          const root = commentRoot(input)
          root?.querySelectorAll<HTMLAnchorElement>(`a[href^="${baseUrl}/comment/delete/"]`).forEach((link) => {
            if (link.textContent === 'Удалить') urls.push(link.href)
          })
        }

        if (!urls.length) {
          modalMessage('Внимание!', 'Отметьте галочкой комментарии, которые нужно удалить, и попробуйте ещё раз', { close: true, timer: 5 })
          return false
        }

        modalConfirm(`Вы действительно хотите удалить ${urls.length} ${commentWord(urls.length)}?`, true, async () => {
          const total = urls.length
          let left = total
          for (const url of urls) {
            modalMessage(`Осталось удалить ${left} из ${total} ${commentWord(left)}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>')
            left -= 1
            const response = await http(url, { proxy: true })
            log.info('Удалил комментарий', response)
          }
          location.reload()
        })
        return false
      }

      buttons.append(remove, chooseAll)
      document.querySelector('div.js-comments-pgn')?.after(buttons)
    } catch (error) {
      log.error('comments', error)
    }
  }),
}
