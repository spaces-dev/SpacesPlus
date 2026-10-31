import { el } from '@zero-dependency/dom'
import { byId } from './dom'

export const inputErrorClass = 'text-input_error_bg'
export const fieldGap = '7px'

export function markInvalid(input: HTMLElement, invalid: boolean) {
  input.classList.toggle(inputErrorClass, invalid)
}

export function clearInvalid(input: HTMLElement) {
  input.classList.remove(inputErrorClass)
}

export const isInvalid = (input: HTMLElement) => input.classList.contains(inputErrorClass)

export function parseBoundedInt(value: string, min: number, max: number) {
  if (!/^\d+$/.test(value)) return
  if (value.length > 1 && value.startsWith('0')) return
  const number = Number(value)
  if (number < min || number > max) return
  return number
}

interface NumberFieldOptions {
  value: number
  min: number
  max: number
  maxLength: number
  size?: number
  name?: string
  autocomplete?: string
  style?: Partial<CSSStyleDeclaration>
  onValid: (next: number) => void
}

export function numberField({
  value,
  min,
  max,
  maxLength,
  size = 4,
  name,
  autocomplete,
  style,
  onValid,
}: NumberFieldOptions) {
  const input = el('input', {
    type: 'text',
    className: 'text-input',
    size,
    maxLength,
    value: String(value),
  })
  if (name) input.name = name
  if (autocomplete) input.setAttribute('autocomplete', autocomplete)
  if (style) Object.assign(input.style, style)

  input.oninput = () => {
    const next = parseBoundedInt(input.value, min, max)
    markInvalid(input, next === undefined)
    if (next === undefined) return
    onValid(next)
  }

  return input
}

export function mountPanel(id: string, anchor: HTMLElement, create: () => HTMLElement) {
  if (byId(id)) return
  anchor.parentElement?.after(create())
}
