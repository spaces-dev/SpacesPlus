import { qs } from '../utils'

/**
 * Хуета
 */
export const betaFeatures = () => {
  let progress_label = qs('div.progress-item__label')
  let progress_runner = qs('div.progress-item__runner')

  if (progress_label && progress_runner && !qs('#SP_BETA_FEATURES')) {
    let item = progress_label.textContent!.split('/')
    let summ = Math.round((Number(item[0]) / Number(item[1])) * 100)

    if (summ > 30) progress_label.style.color = '#f5f5f5'

    progress_runner.id = 'SP_BETA_FEATURES'
    progress_runner.style.width = `${summ}%`
  }
}
