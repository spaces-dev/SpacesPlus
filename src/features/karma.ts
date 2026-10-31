import type { Feature } from '@/core/feature'
import { defineToggle } from '@/core/feature'
import { baseUrl } from '@/core/site'
import { toggleId } from '@/types/toggles'
import { collectLinks } from './collect-links'

const karmaPrefix = `${baseUrl}/mysite/rate_n_karma/karma/?Accept=`

export const karma: Feature = defineToggle({
  id: toggleId.karma,
  title: 'Собирать карму',
  description: 'Функция в автоматическом режиме подтверждает назойливую карму.',
  start: collectLinks(karmaPrefix, 'Собрали карму'),
})
