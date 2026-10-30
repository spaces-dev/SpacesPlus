import { el } from '@zero-dependency/dom'

export function setChecked(input: HTMLInputElement, checked: boolean) {
  input.checked = checked
  input.closest('.js-checkbox')?.classList.toggle('form-checkbox_checked', checked)
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
  input.onchange = () => {
    if (handler(input.checked) === false) {
      setChecked(input, !input.checked)
      return false
    }
  }
}
