import type { Feature } from '@/core/feature'
import { defineToggle } from '@/core/feature'
import { baseUrl } from '@/core/site'
import { toggleId } from '@/types/toggles'
import { collectLinks } from './collect-links'

const coinsPrefix = `${baseUrl}/services/gift_get/`

export const coins: Feature = defineToggle({
  id: toggleId.coins,
  title: 'Собирать бонусные монеты',
  description: 'Функция в автоматическом режиме ищет и собирает бонусные монеты.',
  start: collectLinks(coinsPrefix, 'Собрали монетку'),
})
