export const plusSettingsTitle = 'Настройки Spaces Plus'

export const settingsDom = {
  style: 'SP_PLUS_SETTINGS',
  main: 'SP_PLUS_MAIN',
  head: 'SP_PLUS_SETHEAD',
  crumb: 'SP_PLUS_SETHEAD2',
  back: 'SP_PLUS_SETBACK',
  area: 'SP_PLUS_SETAREA',
  misc: 'SP_PLUS_MISC',
  miscArea: 'SP_PLUS_MISC_AREA',
  about: 'SP_PLUS_ABOUT',
  link: 'SP_PLUS_SETLINK',
  backupTools: 'SP_PLUS_BOTTOM_DIVB',
} as const

export const settingsGroupId = (id: string) => `SP_PLUS_GROUP_${id}`

export const settingsAreaId = (id: string) => `SP_PLUS_AREA_${id}`
