import type { Feature } from '../core/feature'
import type { UserAnketa } from '../types/mysite'
import { http } from '../core/http'
import { log } from '../core/log'
import { baseUrl, pathAt, session } from '../core/site'

function formatOnline(seconds: number) {
  const [hoursRaw, fractionRaw] = (seconds / 3600).toFixed(2).split('.')
  const hours = Number(hoursRaw)
  const minutes = Math.trunc(Number(fractionRaw) / (100 / 60))
  if (hours > 0) return `${hours} ч, ${minutes} мин`
  return `${minutes} мин`
}

export const userOnline: Feature = {
  id: 'online',
  title: 'Точное время онлайн в анкетах',
  description: 'Функция позволяет смотреть точное время онлайн у пользователей в анкетах.',
  start: ctx => ctx.onDom(() => {
    const nick = pathAt(3)
    const target = `/anketa/index/${nick}/`
    if (pathAt() !== target) {
      session.onlineNick = null
      return
    }
    if (!nick || session.onlineNick === nick) return

    const title = [...document.querySelectorAll('div.info-item__title')].find(node => node.textContent === 'Время онлайн:')
    if (!title) return
    session.onlineNick = nick

    http<UserAnketa>(`${baseUrl}/anketa/index/${nick}/`, { proxy: true }).then((response) => {
      const seconds = response.parsedBody?.user_widget?.online_time
      if (seconds === undefined || !title.nextElementSibling) return
      const online = formatOnline(seconds)
      title.nextElementSibling.textContent = online
      log.info(`Время онлайн: ${online}`, response)
    }).catch((error) => {
      log.error('online', error)
    })
  }),
}
