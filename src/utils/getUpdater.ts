import { http, error } from './index'

import { CheckUpdates } from '../interfaces/CheckUpdates'

import { ENV, GITHUB, REVISION } from '../types/strings'

export const getUpdater = (callback: Function) => {
    try {
        http<CheckUpdates>('GET', `https://${ENV ?? GITHUB}/updater.json?r=${REVISION}`, false).then(e => {
            const json = e.parsedBody

            if (e.status === 200 && json?.history) {
                return callback(json)
            }
        })
    } catch (e) {
        error('Ошибка (getUpdater.ts): ' + e)
    }
}