import { qs, http, info, error } from '../utils'

import { INewbeeQuest } from '../interfaces/NewbeeQuest'

import { SPACES } from '../strings'

export const newbeeQuest = async () => {
    let newbequest = qs('#sp_newbequest_togl')

    if (newbequest) {
        try {
            await http<INewbeeQuest>('GET', `${SPACES}/mysite/`, true).then(e => {

                if (e.parsedBody?.owner_widget.newbee_quest_widget) {
                    newbequest.style.display = 'block'
                }

                info('Квест новичка', e)
            })
        } catch (e) {
            error('newbeeQuest.ts', e)
        }
    }
}