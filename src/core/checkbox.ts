import { el } from '@zero-dependency/dom'

const changeHandlers = new WeakMap<HTMLLabelElement, (checked: boolean) => void | false>()
const boundLabels = new WeakSet<HTMLLabelElement>()

export function setChecked(input: HTMLInputElement, checked: boolean) {
  input.checked = checked
  input.closest('.js-checkbox')?.classList.toggle('form-checkbox_checked', checked)
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

  const next = !label.classList.contains('form-checkbox_checked')
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
    className: 'form-checkbox__el',
    checked,
  })
  const label = el('label', {
    className: ['form-checkbox', 'square', 'left_chb', 'form-checkbox--inline', 'js-checkbox', checked ? 'form-checkbox_checked' : '', className ?? ''].filter(Boolean).join(' '),
  }, input)
  return { input, label }
}

export function onSiteChange(input: HTMLInputElement, handler: (checked: boolean) => void | false) {
  const label = input.closest('.js-checkbox')
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
