import { BASE_URL } from '../strings'
import { logger, qsa } from '../utils'

export const karmaAccept = () => {
  try {
    qsa(`a[href^="${BASE_URL}/mysite/rate_n_karma/karma/?Accept="`).forEach(
      (e) => {
        // Подтверждаем карму
        ;(<HTMLElement>e).click()

        // Удаляем элемент
        e.parentElement?.remove()

        logger.info('Собрали карму!', e)
      }
    )
  } catch (e) {
    logger.error('karmaAccept.ts', e)
  }
}
