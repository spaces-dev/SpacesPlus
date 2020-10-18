import { qs } from './utils/qs'
import { http } from './utils/http'
import { HTTP, BASE_URL } from './utils/base'
import { SessionCheck } from './interfaces/SessionCheck'
import { userStatus } from './components/userStatus'
import { info, error } from './utils/console'

(function () {
    if (qs('#main_wrap')) {
        try {
            http<SessionCheck>('POST', `${HTTP}//${BASE_URL}/api/session/check`, false).then((e) => {
                if (e.status === 200 && userStatus(e.parsedBody?.code)) {
                    info("Spaces+ Loaded!")
                }
            })
        } catch (e) {
            error(e)
        }
    }
})()