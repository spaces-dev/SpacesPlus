import type { Feature } from '@/core/feature'
import { el } from '@zero-dependency/dom'
import { pluralize } from '@zero-dependency/utils'
import { ensureStyle, removeStyle } from '@/core/appearance'
import { setChecked, siteCheckbox } from '@/core/checkbox'
import { http } from '@/core/http'
import { log } from '@/core/log'
import { modalConfirm, modalMessage } from '@/core/modals'
import { baseUrl } from '@/core/site'
import commentsCss from '@/styles/features/comments.scss?inline'

const commentWord = (count: number) => pluralize(count)`комментари${['й', 'я', 'ев']}`
const commentsStyleId = 'SP_STYLE_COMMENTS'

function commentRoot(node: Node) {
  const element = node instanceof Element ? node : node.parentElement
  return element?.closest<HTMLElement>('.js-comm') ?? null
}

const commentId = (root: Element) => root.getAttribute('data-id') ?? ''

const deleteLinkOf = (root: Element) => root.querySelector<HTMLAnchorElement>('a[data-action="comment_delete"]')

function setChosen(parent: Element, inputs: HTMLInputElement[], chooseAll: boolean) {
  for (const input of inputs) setChecked(input, chooseAll)
  const caption = chooseAll ? 'Снять отметки' : 'Выбрать все'
  parent.innerHTML = `<span class="ico ico_ok_blue"></span> ${caption}`
}

export const deleteComments: Feature = {
  id: 'comments',
  title: 'Пакетное удаление комментариев',
  description: 'Функция будет полезна тем, кто часто удаляет много комментариев. Работает там, где у вас есть возможность удалять комментарии: свой блог или гостевая.',
  start: (ctx) => {
    ensureStyle(commentsStyleId, commentsCss)
    const stop = ctx.onDom(() => {
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
          if (child.querySelector('input[id^="DC_"]')) continue
          const root = commentRoot(child)
          const id = root ? commentId(root) : ''
          const menu = child.querySelector('a .ico_more')?.parentElement
          if (!root || !/^\d+$/.test(id) || !deleteLinkOf(root) || !(menu instanceof HTMLElement)) continue

          const box = siteCheckbox(`DC_${id}`, false)
          menu.after(box.label)
        }

        if (document.querySelector('#SP_PLUS_BUTTONS')) return
        const buttons = el('div', {
          className: 'widgets-group user__tools_last',
          id: 'SP_PLUS_BUTTONS',
        })

        const chooseAll = el('button', {
          className: 'user__tools-link table__cell sp_btn-list',
          innerHTML: '<span class="ico ico_ok_blue"></span> Выбрать все',
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
          className: 'user__tools-link table__cell sp_btn-list',
          innerHTML: '<span class="ico ico_remove_red"></span> Удалить выбранные',
        })
        remove.onclick = () => {
          const urls: string[] = []
          for (const input of document.querySelectorAll<HTMLInputElement>('input[id^="DC_"]')) {
            if (!input.checked) continue
            const root = commentRoot(input)
            const link = root ? deleteLinkOf(root) : null
            if (link?.href) urls.push(link.href)
          }

          if (!urls.length) {
            modalMessage('Внимание!', 'Отметьте галочкой комментарии, которые нужно удалить, и попробуйте еще раз', { close: true, timer: 5 })
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
          })
          return false
        }

        buttons.append(remove, chooseAll)
        document.querySelector('div.js-comments-pgn')?.after(buttons)
      } catch (error) {
        log.error('comments', error)
      }
    })
    return () => {
      stop()
      removeStyle(commentsStyleId)
    }
  },
}
