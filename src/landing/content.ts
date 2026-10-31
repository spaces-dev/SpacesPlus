export interface TextPart {
  text: string
  href?: string
}

export interface FeatureItem {
  title: string
  text: string
}

export interface FeatureGroup {
  title: string
  items: FeatureItem[]
}

export const managers = [
  { name: 'Tampermonkey', href: 'https://www.tampermonkey.net' },
  { name: 'Violentmonkey', href: 'https://violentmonkey.github.io' },
  { name: 'Greasemonkey', href: 'https://www.greasespot.net' },
]

export const DOMAINS = [
  'spaces.im',
  'world84.spcs.bio',
]

function domainParts(domains: readonly string[]): TextPart[] {
  return domains.flatMap((domain, index) => {
    const link: TextPart = { text: domain, href: `https://${domain}` }
    return index === 0 ? [link] : [{ text: ', ' }, link]
  })
}

function joinedParts(items: readonly { name: string, href: string }[]): TextPart[] {
  return items.flatMap((item, index) => {
    const link: TextPart = { text: item.name, href: item.href }
    if (index === 0) return [link]
    const separator = index === items.length - 1 ? ' и ' : ', '
    return [{ text: separator }, link]
  })
}

export const featureGroups: FeatureGroup[] = [
  {
    title: 'Контент',
    items: [
      {
        title: 'Пакетное удаление комментариев',
        text: 'Удаляет сразу несколько комментариев там, где у вас есть такое право: свой блог или гостевая.',
      },
      {
        title: 'Пакетное удаление читателей',
        text: 'Удаляет сразу несколько читателей. Отметки сохраняются при переходе на другую страницу.',
      },
      {
        title: 'Добавить пользователя в закладки',
        text: 'На странице пользователя появляется кнопка «В закладки». Повторное нажатие убирает его из закладок и сразу показывает, добавлен пользователь или нет.',
      },
    ],
  },
  {
    title: 'Сбор',
    items: [
      {
        title: 'Собирать бонусные монеты',
        text: 'Ищет и собирает бонусные монеты без ручного подтверждения.',
      },
      {
        title: 'Собирать карму',
        text: 'Подтверждает карму автоматически.',
      },
    ],
  },
  {
    title: 'Медиа',
    items: [
      {
        title: 'Кнопка загрузки трека из плеера',
        text: 'Скачивает трек, который сейчас играет.',
      },
      {
        title: 'Поворот фотографий',
        text: 'Устали наклонять голову? Теперь в просмотрщике фотографий есть кнопка поворота.',
      },
      {
        title: 'Скорость видео',
        text: 'В плеере появляется возможность замедлять видео до x0.25 и ускорять до x2.',
      },
    ],
  },
  {
    title: 'Интерфейс',
    items: [
      {
        title: 'Старое положение кнопок в шапке',
        text: 'Возвращает кнопки почты и ленты на прежние места.',
      },
      {
        title: 'Прокрутка страницы справа',
        text: 'Переносит полосу автоскролла на правую сторону.',
      },
      {
        title: 'Скрыть правое меню',
        text: 'Прячет правое меню, страница становится шире. Вместе с виджетом погоды не включается: они занимают одно место.',
      },
      {
        title: 'Внешние ссылки без редиректа',
        text: 'Убирает предупреждение при переходе по внешней ссылке.',
      },
    ],
  },
  {
    title: 'Дополнительно',
    items: [
      {
        title: 'Панель друзей онлайн',
        text: 'Список друзей онлайн в сайдбаре.',
      },
      {
        title: 'Ранее использованные смайлики',
        text: 'Раздел в меню смайликов. С зажатым Shift смайл добавляется или убирается из списка.',
      },
      {
        title: 'Фон сайта',
        text: 'Кастомизируйте фон сайт на свой вкус.',
      },
      {
        title: 'Виджет погоды',
        text: 'Отображает в правом меню информацию о погоде. Работает через OpenWeatherMap.',
      },
    ],
  },
]

export const privacyParagraphs: TextPart[][] = [
  [
    { text: 'Spaces Plus работает на сайтах: ' },
    ...domainParts(DOMAINS),
    { text: '. Настройки скрипта хранятся в cookies и localStorage.' },
  ],
  [
    { text: 'Погода. Если виджет включен, скрипт запрашивает ' },
    { text: 'api.openweathermap.org', href: 'https://openweathermap.org' },
    { text: '. В запрос передаются локация или координаты, если браузер их разрешил, и API-ключ OpenWeatherMap из настроек. Пока виджет выключен, этого запроса нет.' },
  ],
  [
    { text: 'Обновления. Скрипт сам не обновляется: автообновление ' },
    ...joinedParts(managers),
    { text: ' не используется. Если вышла новая версия, на сайте появляется уведомление с кнопкой «Обновить», и скрипт будет обновлен только после подтверждения. Для проверки версии скрипт запрашивает список изменений с ' },
    { text: 'spaces-dev.github.io', href: 'https://spaces-dev.github.io/spaces-plus/' },
    { text: '. Это публичные файлы, данных аккаунта в запросе нет.' },
  ],
  [
    { text: 'Код открыт, его можно сверить с этим текстом: ' },
    { text: 'репозиторий Spaces Plus', href: 'https://github.com/spaces-dev/spaces-plus' },
    { text: '.' },
  ],
]
