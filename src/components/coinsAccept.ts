import { BASE_URL } from '../strings'
import { logger, qsa } from '../utils'

export const coinsAccept = () => {
  try {
    qsa(`a[href^="${BASE_URL}/services/gift_get/"`).forEach((e) => {
      // Подтверждаем монетку
      ;(<HTMLElement>e).click()

      // Удаляем элемент
      e.parentElement?.remove()

      logger.info('Собрали монетку', e)
    })
  } catch (e) {
    logger.error('coinsAccept.ts', e)
  }
}
