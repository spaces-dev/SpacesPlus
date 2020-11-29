import {
    qs,
    logger,
    toUpper,
    declOfNum,
    playSound,
    notification
} from '../utils'

import { DATA } from '../strings'
import { _SETTINGS } from '../settings'

export const soundNotify = () => {
    try {

        // счетчики почты, журнала и ленты
        const notif = {
            'mail': qs('#mail_notif_cnt'),
            'journal': qs('#jour_notif_cnt'),
            'feed': qs('#lent_notif_cnt')
        }

        let counter = 0

        for (let i in notif) {
            // @ts-ignore
            if (notif[i] && _SETTINGS.notifySet[i] && notif[i].innerHTML !== '' && !isNaN(notif[i].innerHTML)) { counter = counter + parseInt(notif[i].innerHTML, 10) }
        }

        if (counter > DATA.EVENTS) {

            // звук уведомления
            playSound(_SETTINGS.notifySet.url, _SETTINGS.notifySet.volume)

            let string = declOfNum(counter, ['новое событие', 'новых события', 'новых событий'])

            // создаем новое уведомление
            notification(`${toUpper(string)} на Spaces!`, `У Вас ${counter} ${string}!`, 5)

            DATA.EVENTS = counter
        } else if (counter < DATA.EVENTS) {
            DATA.EVENTS = counter
        }
    } catch (e) {
        logger.error('soundEvents.ts', e)
    }
}