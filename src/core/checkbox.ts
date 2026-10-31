import { el } from '@zero-dependency/dom'
import { classes } from './dom'

const checkboxClass = {
  input: 'form-checkbox__el',
  root: 'form-checkbox',
  square: 'square',
  left: 'left_chb',
  inline: 'form-checkbox--inline',
  js: 'js-checkbox',
  checked: 'form-checkbox_checked',
} as const

export const checkboxDisabledClass = 'form-checkbox--is-disabled'

const changeHandlers = new WeakMap<HTMLLabelElement, (checked: boolean) => void | false>()
const boundLabels = new WeakSet<HTMLLabelElement>()

export function setChecked(input: HTMLInputElement, checked: boolean) {
  input.checked = checked
  input.closest(`.${checkboxClass.js}`)?.classList.toggle(checkboxClass.checked, checked)
}

// form_controls.js вешает клик на body и после смены checked делает jQuery.trigger('change').
// jQuery вызывает input.onchange через .apply. В Greasemonkey функция из песочницы
// для страницы закрыта, Firefox бросает «Permission denied to access property apply»,
// и класс form-checkbox_checked не успевает переключиться. Клик останавливаем на label.
function onLabelClick(event: Event) {
  const label = event.currentTarget
  if (!(label instanceof HTMLLabelElement)) return
  const input = label.querySelector<HTMLInputElement>('input[type=checkbox]')
  const handler = changeHandlers.get(label)
  if (!input || !handler) return

  const target = event.target
  const element = target instanceof Element ? target : null
  if (element?.closest('a')) return

  event.preventDefault()
  event.stopPropagation()
  if (input.disabled) return

  const next = !label.classList.contains(checkboxClass.checked)
  input.checked = next
  const finalChecked = handler(next) !== false ? next : !next
  setChecked(input, finalChecked)
  // Клик по самому input браузер откатывает после preventDefault, класс при этом не трогает.
  queueMicrotask(() => {
    if (input.isConnected) setChecked(input, finalChecked)
  })
}

export function siteCheckbox(id: string, checked: boolean, className?: string) {
  const input = el('input', {
    id,
    type: 'checkbox',
    className: checkboxClass.input,
    checked,
  })
  const label = el('label', {
    className: classes(checkboxClass.root, checkboxClass.square, checkboxClass.left, checkboxClass.inline, checkboxClass.js, checked ? checkboxClass.checked : undefined, className),
  }, input)
  return { input, label }
}

export function onSiteChange(input: HTMLInputElement, handler: (checked: boolean) => void | false) {
  const label = input.closest(`.${checkboxClass.js}`)
  if (!(label instanceof HTMLLabelElement)) {
    input.addEventListener('change', () => {
      if (handler(input.checked) === false) setChecked(input, !input.checked)
    })
    return
  }

  changeHandlers.set(label, handler)
  if (boundLabels.has(label)) return
  boundLabels.add(label)
  label.addEventListener('click', onLabelClick)
}
