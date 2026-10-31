import { el } from '@zero-dependency/dom'
import { classes } from './dom'

interface MessageOptions {
  close?: boolean
  timer?: number
}

const msPerSecond = 1000
const noticeSeconds = { brief: 3, normal: 5 } as const

export const dialogId = {
  alert: 'SP_PLUS_ALERT',
  confirm: 'SP_PLUS_CONFIRM',
} as const

const dialogSelector = `#${dialogId.alert}, #${dialogId.confirm}`
const dialogBodyClass = 'content-item3 wbg oh'
const fadeInClass = 'fadeIn'
const fadeOutClass = 'fadeOut'

export const alertContentSelector = `#${dialogId.alert} > .content-item3`
export const quietButtonClass = 'btn btn_white btn_input right sp-dialog__btn'
export const attentionTitle = 'Внимание!'
export const closable = { close: true } as const
export const notice = { close: true, timer: noticeSeconds.normal } as const
export const briefNotice = { close: true, timer: noticeSeconds.brief } as const

export const removeAlert = () => document.getElementById(dialogId.alert)?.remove()

function closeModal() {
  const modal = document.querySelector<HTMLElement>(dialogSelector)
  if (!modal) return

  modal.classList.remove(fadeInClass)
  modal.classList.add(fadeOutClass)
  modal.addEventListener('animationend', () => {
    modal.remove()
  })
}

function createDialog(id: string, extra?: string) {
  const previous = document.querySelector(dialogSelector)
  const container = el('div', {
    id,
    className: classes('widgets-group', 'sp-dialog', extra, previous ? undefined : fadeInClass),
  })
  previous?.remove()
  return container
}

function dialogBody(innerHTML: string) {
  return el('div', {
    className: dialogBodyClass,
    innerHTML,
  })
}

export function modalMessage(title: string, content: string, options: MessageOptions = {}) {
  const { close = false, timer } = options
  const container = createDialog(dialogId.alert, 'w400')
  const closeMarkup = close
    ? '<span id="modal-close" class="ico ico_close pointer right notif_close close_h" title="Закрыть"></span>'
    : ''

  container.append(dialogBody(`${closeMarkup}${title}<div class="pad_t_a"></div><span style="font-size: 13px" class="grey">${content}</span>`))
  document.body.append(container)

  document.querySelector('#modal-close')?.addEventListener('click', () => {
    closeModal()
  })

  if (timer !== undefined) {
    setTimeout(() => {
      closeModal()
    }, timer * msPerSecond)
  }
}

export function modalConfirm(text: string, warn: boolean, callback: () => void) {
  const container = createDialog(dialogId.confirm)
  const main = dialogBody(`${text}<div class="pad_t_a"></div>`)
  const successBtn = el('button', {
    innerHTML: 'Да',
    className: 'btn btn_red btn_input',
  })
  const cancelBtn = el('a', {
    innerHTML: 'Отмена',
    href: '#',
    className: quietButtonClass,
  })

  successBtn.onclick = () => {
    closeModal()
    callback()
    return false
  }

  cancelBtn.onclick = () => {
    closeModal()
    return false
  }

  if (warn) {
    main.append(el('small', {
      className: 'pad_t_a grey',
      innerHTML: 'Это действие нельзя будет отменить.',
    }))
  }

  main.append(el('div', { className: 'pad_t_a' }))
  main.append(successBtn)
  main.append(cancelBtn)
  container.append(main)
  document.body.append(container)
}
