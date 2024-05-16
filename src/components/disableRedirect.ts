import { BASE_URL } from '../strings'
import { getParams, qsa } from '../utils'

export const disableRedirect = () => {
  qsa(`a[href^="${BASE_URL}/redirect/"`).forEach((e) => {
    // Все еще костыль, но так лучше
    ;(e as HTMLLinkElement).href = getParams((e as HTMLLinkElement).href)[
      'redirect'
    ]
  })
}
