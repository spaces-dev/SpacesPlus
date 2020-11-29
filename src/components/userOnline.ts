import {
    qsa,
    http,
    logger,
    getPath
} from '../utils'

import { IUserAnketa } from '../interfaces/Mysite'

import { SPACES, DATA } from '../strings'

export const userOnline = () => {
    let path = getPath(),
        nick = getPath(3),
        target = `/anketa/index/${nick}/`

    if (path === target && DATA.ONLINE !== nick) {

        let onBlock = Array.from(qsa('div.info-item__title')).filter(e => e.textContent === 'Время онлайн:')

        if (nick && onBlock) {
            DATA.ONLINE = nick

            try {
                http<IUserAnketa>('GET', `${SPACES}/anketa/index/${nick}/`, true).then(e => {
                    const response = e.parsedBody?.user_widget?.online_time

                    if (response) {
                        let str: any = (response / 3600).toFixed(2).split('.')
                        let online = str[0] > 0 ? `${str[0]} ч, ${Math.trunc(str[1] / (100 / 60))} мин` : `${Math.trunc(str[1] / (100 / 60))} мин`
                        // @ts-ignore Костыль!
                        onBlock[0].nextElementSibling.textContent = online

                        logger.info(`Время онлайн: ${online}`, e)
                    }
                })
            } catch (e) {
                logger.error('userOnline.ts', e)
            }
        }
    } else if (path !== target) {
        DATA.ONLINE = null
    }
}