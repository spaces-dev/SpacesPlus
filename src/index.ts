import { qs, http, error } from './utils'

import { SPACES } from './types/strings'

import { SessionCheck } from './interfaces/SessionCheck'

import { userStatus } from './components/userStatus'
import { main } from './components/main'

(function () {
    if (qs('#main_wrap')) {
        try {
            http<SessionCheck>('POST', `${SPACES}/api/session/check`, false).then((e) => {
                if (e.status === 200 && userStatus(e.parsedBody?.code)) {
                    main()
                }
            })
        } catch (e) {
            error('Ошибка (index.ts): ' + e)
        }
    }
})()