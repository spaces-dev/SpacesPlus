import { attentionTitle, modalMessage, notice } from '@/core/modals'

export const listButtonClass = 'user__tools-link table__cell sp_btn-list'
export const okIcon = 'ico_ok_blue'
export const removeIcon = 'ico_remove_red'

const selectAllLabel = 'Выбрать все'
const clearMarksLabel = 'Снять отметки'
const deleteWaitMarkup = 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>'

export const chooseCaption = (allChecked: boolean) => allChecked ? clearMarksLabel : selectAllLabel

export const withIcon = (icon: string, text: string) => `<span class="ico ${icon}"></span> ${text}`

export const askingToSelectAll = (html: string) => html.includes(selectAllLabel)

export function paintChooseAll(node: Element, allChecked: boolean) {
  node.innerHTML = withIcon(okIcon, chooseCaption(allChecked))
}

export function eventElement(event: Event) {
  const target = event.target
  if (!(target instanceof Element)) return null
  if (target.nodeName !== 'SPAN') return target
  return target.parentElement
}

export function warnNothingSelected(phrase: string) {
  modalMessage(attentionTitle, `Отметьте галочкой ${phrase}, и попробуйте еще раз`, notice)
}

export async function runDeleteQueue<T>(items: readonly T[], word: (count: number) => string, remove: (item: T) => Promise<void>) {
  const total = items.length
  let left = total
  for (const item of items) {
    modalMessage(`Осталось удалить ${left} из ${total} ${word(left)}`, deleteWaitMarkup)
    left -= 1
    await remove(item)
  }
}
