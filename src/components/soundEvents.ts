import { qs, error, declOfNum, playSound } from '../utils'

import { INotify } from '../interfaces/Notify'

import { OVERRIDE } from '../strings'
import { _SETTINGS } from '../settings'

export const soundEvents = () => {
    try {
        const notif = {
            'mail': qs('#mail_notif_cnt'),
            'journal': qs('#jour_notif_cnt'),
            'feed': qs('#lent_notif_cnt')
        }

        let counter = 0

        for (let i in notif) {
            // @ts-ignore
            if (notif[i] && _SETTINGS.events[i] && notif[i].innerHTML !== '' && !isNaN(notif[i].innerHTML)) { counter = counter + parseInt(notif[i].innerHTML, 10) }
        }

        if (counter > OVERRIDE.EVENTS) {
            playSound(_SETTINGS.events.url, _SETTINGS.events.volume)

            let string = declOfNum(counter, ['новое событие', 'новых события', 'новых событий'])

            notificationShow('Новые события на Spaces!', {
                body: `У Вас ${counter} ${string}!`,
                icon: 'data:image/png;base64,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',
                tag: 'events'
            })

            OVERRIDE.EVENTS = counter
        } else if (counter < OVERRIDE.EVENTS) {
            OVERRIDE.EVENTS = counter
        }
    } catch (e) {
        error('Ошибка (soundEvents.ts): ' + e)
    }
}

const notificationShow = (title: string, option: INotify) => {
    const notification = new Notification(title, option)

    notification.addEventListener('click', (e: any) => {
        e.preventDefault()
        e.target.close()
    })
}