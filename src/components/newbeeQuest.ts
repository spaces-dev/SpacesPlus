import { http, logger } from '../utils'

import { INewbeeQuest } from '../interfaces/NewbeeQuest'

import { SPACES } from '../strings'

export const newbeeQuest = (wrap: HTMLElement, button: HTMLElement) => {
    try {
        http<INewbeeQuest>('GET', `${SPACES}/mysite/`, true).then(e => {

            if (e.parsedBody?.owner_widget.newbee_quest_widget) {
                wrap.appendChild(button)
            }

            logger.info('Квест новичка', e)
        })
    } catch (e) {
        logger.error('newbeeQuest.ts', e)
    }
}