import { el } from '@zero-dependency/dom'

interface MessageOptions {
  close?: boolean
  timer?: number
}

function closeModal() {
  const modal = document.querySelector<HTMLElement>('#SP_PLUS_ALERT, #SP_PLUS_CONFIRM')
  if (!modal) return

  modal.classList.remove('fadeIn')
  modal.classList.add('fadeOut')
  modal.addEventListener('animationend', () => {
    modal.remove()
  })
}

export function modalMessage(title: string, content: string, options: MessageOptions = {}) {
  const { close = false, timer } = options
  const previous = document.querySelector('#SP_PLUS_ALERT, #SP_PLUS_CONFIRM')
  const container = el('div', {
    className: ['widgets-group', 'sp-dialog', 'w400', previous ? '' : 'fadeIn'].filter(Boolean).join(' '),
    id: 'SP_PLUS_ALERT',
  })

  previous?.remove()

  const closeMarkup = close
    ? '<span id="modal-close" class="sp sp-remove-grey pointer right notif_close close_h" title="Закрыть"></span>'
    : ''

  const main = el('div', {
    className: 'content-item3 wbg oh',
    innerHTML: `${closeMarkup}${title}<div class="pad_t_a"></div><span style="font-size: 13px" class="grey">${content}</span>`,
  })

  container.append(main)
  document.body.append(container)

  document.querySelector('#modal-close')?.addEventListener('click', () => {
    closeModal()
  })

  if (timer !== undefined) {
    setTimeout(() => {
      closeModal()
    }, timer * 1000)
  }
}

export function modalConfirm(text: string, warn: boolean, callback: () => void) {
  const previous = document.querySelector('#SP_PLUS_ALERT, #SP_PLUS_CONFIRM')
  const container = el('div', {
    id: 'SP_PLUS_CONFIRM',
    className: ['widgets-group', 'sp-dialog', previous ? '' : 'fadeIn'].filter(Boolean).join(' '),
  })

  previous?.remove()

  const main = el('div', {
    className: 'content-item3 wbg oh',
    innerHTML: `${text}<div class="pad_t_a"></div>`,
  })

  const successBtn = el('button', {
    innerHTML: 'Да',
    className: 'btn btn_red btn_input',
  })

  const cancelBtn = el('a', {
    innerHTML: 'Отмена',
    href: '#',
    className: 'btn btn_white btn_input right sp-dialog__btn',
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
