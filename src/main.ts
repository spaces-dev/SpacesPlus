import type { SessionCheck } from './session-check'
import { http } from './core/http'
import { log } from './core/log'
import { startRuntime } from './core/runtime'
import { session } from './core/site'
import { features } from './features/index'
import { showUserStatus } from './user-status'

async function boot() {
  if (!document.querySelector('.root')) {
    log.error('boot', 'Root element not found')
    return
  }

  try {
    const response = await http<SessionCheck>(`${location.origin}/api/session/check`, { method: 'POST' })
    const body = response.parsedBody
    log.info('Проверка сессии', response)
    if (!showUserStatus(body?.code) || !body) {
      log.error('boot', 'User status not found')
      return
    }

    session.username = body.attributes.name
    session.ck = body.attributes.CK
    session.sid = body.attributes.sid
    startRuntime(features)
  } catch (error) {
    log.error('boot', error)
  }
}

boot()
