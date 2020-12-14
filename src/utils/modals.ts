import { ce, qs } from './index'

/**
 * @param title Заголовок уведомления
 * @param content Текст уведомления
 * @param close Крестик закрытия уведомления
 * @param timer Время до автоматического закрытия уведомления в секундах
 */
export const modalMessage = (title: string, content: string, close: boolean, timer?: number) => {
    let alert = qs('#SP_PLUS_ALERT')
    let confirm = qs('#SP_PLUS_CONFIRM')

    let container = ce('div', {
        class: `sticker w400 ${confirm || alert ? '' : 'fadeIn'}`,
        id: 'SP_PLUS_ALERT',
    })

    // Скрываем раннее созданные уводомления
    alert?.remove()
    confirm?.remove()

    let main = ce('div', {
        class: 'content-item3 wbg oh',
        html: (close ?
            '<span id="modal-close" class="sp sp-remove-grey pointer right notif_close close_h" title="Закрыть"></span>' :
            '') + `${title}<div class="pad_t_a"></div><span style="font-size: 13px" class="grey">${content}</span>`
    })

    container.appendChild(main)
    document.body.appendChild(container)

    // эвент закрытия окна
    qs('#modal-close')?.addEventListener('click', () => {
        modalClose()
    })

    // Автоматическое закрытие уведомления
    if (timer !== undefined) {
        setTimeout(() => {
            modalClose()
        }, timer * 1000)
    }
}

/**
 * Всплывающее окно с кнопками Да/Отмена
 * @param text Текст
 * @param warn Предупреждение (Это действие нельзя будет отменить.)
 * @param callback return in function
 */
export const modalConfirm = (text: string, warn: boolean, callback: Function) => {
    let alert = qs('#SP_PLUS_ALERT')
    let confirm = qs('#SP_PLUS_CONFIRM')

    let container = ce('div', {
        id: 'SP_PLUS_CONFIRM',
        class: `sticker ${confirm || alert ? '' : 'fadeIn'}`
    })

    let main = ce('div', {
        class: 'content-item3 wbg oh',
        html: text + '<div class="pad_t_a"></div>'
    })

    let successBtn = ce('button', {
        html: 'Да',
        href: '#',
        class: 'btn btn_red btn_input'
    })

    let cancelBtn = ce('a', {
        html: 'Отмена',
        href: '#',
        class: 'btn btn_white btn_input right sticker-close_btn'
    })

    let warningText = ce('small', {
        class: 'pad_t_a grey',
        html: 'Это действие нельзя будет отменить.'
    })

    let br = ce('div', {
        class: 'pad_t_a'
    })

    // Скрываем раннее созданные уводомления
    alert?.remove()
    confirm?.remove()

    // Подтверждение сообщения
    successBtn.onclick = () => {
        modalClose()
        callback()
        return false
    }

    // Отмена сообщения - закрытие окна
    cancelBtn.onclick = () => {
        modalClose()
        return false
    }

    if (warn) main.appendChild(warningText)

    main.appendChild(br)
    main.appendChild(successBtn)
    main.appendChild(cancelBtn)

    container.appendChild(main)
    document.body.appendChild(container)
}

const modalClose = () => {
    let modal = qs('#SP_PLUS_ALERT') || qs('#SP_PLUS_CONFIRM')

    if (modal) {
        if (!modal.classList.contains('fadeIn')) {
            modal.classList.add('fadeIn')
        }

        modal.classList.replace('fadeIn', 'fadeOut')

        modal.addEventListener('animationend', () => {
            modal.remove()
        })
    }
}