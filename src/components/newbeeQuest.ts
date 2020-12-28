import { http, logger } from '../utils'

import { INewbeeQuest } from '../interfaces/NewbeeQuest'

import { BASE_URL } from '../strings'

export const newbeeQuest = (wrap: HTMLElement, button: HTMLElement) => {
    try {
        http<INewbeeQuest>('GET', `${BASE_URL}/mysite/`, true).then(e => {

            if (e.parsedBody?.owner_widget.newbee_quest_widget) {
                wrap.appendChild(button)
            }

            logger.info('Квест новичка', e)
        })
    } catch (e) {
        logger.error('newbeeQuest.ts', e)
    }
}