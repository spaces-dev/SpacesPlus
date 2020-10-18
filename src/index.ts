import { qs } from './utils/qs'
import { http } from './utils/http'
import { error } from './utils/console'
import { HTTP, BASE_URL } from './types/base'

import { SessionCheck } from './interfaces/SessionCheck'

import { userStatus } from './components/userStatus'
import { main } from './components/main'

(function () {
    if (qs('#main_wrap')) {
        try {
            http<SessionCheck>('POST', `${HTTP}//${BASE_URL}/api/session/check`, false).then((e) => {
                if (e.status === 200 && userStatus(e.parsedBody?.code)) {
                    main()
                }
            })
        } catch (e) {
            error('Ошибка (index.ts): ' + e)
        }
    }
})()