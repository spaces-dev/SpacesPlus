import { SPACES, ENV_PATH, OVERRIDE } from './strings'

import { ISettings, ISetString } from './interfaces/Settings'

/**
 * * Описание настроек
 * ! Указывать описание для каждого пункта настроек НЕ обязательно
 */
export const _DESCSTRINGS: ISetString = {
    'comments': 'Функция будет полезна тем, кто часто удаляет много комментариев. Работает в любом месте, где у Вас есть возможность удалять комментарии, будь это ваш блог или гостевая.',
    'blogsd': `Функция позволяет удалять сразу несколько блогов.</br></br><img src="${ENV_PATH}/screens/sort-blogs.png"></br>Работает только в <a href="${SPACES}/diary/view/?Short=0&sort=0">"Расширенном виде"</a> (нажмите на ссылку, чтобы включить этот вид - откроется страница с вашими блогами).`,
    'readersd': 'Функция позволяет удалять сразу несколько читателей, может быть вам это пригодиться.',
    'favorite': `<img src="${ENV_PATH}/screens/favorite-user.png"></br>Функция добавляет на страницу каждого пользователя кнопку "В закладки". Повторно нажав на кнопку, Вы сможете удалить пользователя из закладок.`,
    'grotate': `<img src="${ENV_PATH}/screens/rotate-image.png"></br>Добавляется кнопка в просмотрщик фотографий, с помощью ее можно поворачивать изображение.`,
    'oldheader': 'Функция меняет кнопку почты и ленты местами, как было раньше.',
    'playerdn': `<img src="${ENV_PATH}/screens/player-download.png"></br>Добавляется кнопка в аудиоплеер, которая позволяет скачивать воспроизведенный вами трек.`,
    'dredirect': 'Функция избавляем Вас от назойливого предупреждения, когда вы хотите перейти по внешней ссылке.',
    'online': 'Функция позволяет смотреть точное время онлайн у пользователей в анкетах.',
    'coins': 'Функция в автоматическом режиме ищет и собирает бонусные монеты.',
    'rscroll': 'Перемещает полосу автоскролла на правую сторону.',
    'hrightbar': 'Функция скрывает правое меню (страница становиться на 25% шире).</br></br>Конфликтует c функцией "Виджет погоды".',
    'adblock': 'Функция полностью скрывает назойливую рекламу и не только.',
    'stickyheader': 'Функция закрепляет шапку сайта.',
    'notify': `<img src="${ENV_PATH}/screens/browser-permissions.png"></br>Для работы, в настройках браузера необходимо разрешить сайту использовать "Уведомления" и "Звук".</br></br>Функция позволяет изменять звук уведомлений (указывайте прямую ссылку на файл!), настраивать громкость звука и отмечать из каких разделов получать уведомления.`,
    'playback': `<img src="${ENV_PATH}/screens/video-speed.png"></br>В видеоплеере добавляется кнопка ускорения видео, примерно как на YouTube.`,
    'recents': `<img src="${ENV_PATH}/screens/recent-smiles.png"></br>В меню смайликов добавляется раздел с ранее использованными смайликами, для добавления используйте смайлики/стикеры из меню смайликов.`,
    'karma': 'Функция в автоматическом режиме подтверждает назойливую карму.',
    'friendsOn': `<img src="${ENV_PATH}/screens/friends-online.png"></br>Функция добавляет в левое меню панель с друзьями онлайн. Для работы необходимо включить раздел <a href="${SPACES}/sidebar/links/?T=4">Друзья</a>, если он у вас выключен.</br></br>Панель ограничена от 1 до 15 друзей онлайн.`,
    'bodystyle': 'Позволяет украшать фон сайта на свой вкус. В подборке имеется 20 изображений для фона, также Вы можете переключиться на цветной фон.',
    'weather': `<img src="${ENV_PATH}/screens/weather-widget.png"></br>Отображает информацию о текущем состоянии погоды, температура, облачность, влажность, давление и ветер.</br></br>Имеется возможность изменить город, API-Ключ и интервал обновления погоды.`,
    'sticker': `Функция позволяет бесплатно использовать стикеры. Работает в почте (при отправки из <a href="${SPACES}/mail/write/">"Новое сообщение"</a> не работает!), в комментариях, при создании блогов или тем на форуме.`
}

/**
 * * Названия функций в меню настроек
 * ! Положение в объекте НЕ влияет на рассположение в списке настроек
 */
export const _SETSTRINGS: ISetString = {
    'comments': 'Пакетное удаление комментариев',
    'blogsd': 'Пакетное удаление блогов',
    'readersd': 'Пакетное удаление читателей',
    'favorite': 'Возможность добавить пользователя в закладки',
    'grotate': 'Кнопка поворота фото в просмотрщике',
    'oldheader': 'Старое положение кнопок в шапке',
    'playerdn': 'Кнопка загрузки трека из плеера',
    'dredirect': 'Внешние ссылки без редиректа',
    'online': 'Точное время онлайн в анкетах',
    'coins': 'Собирать бонусные монеты',
    'rscroll': 'Прокрутка страницы справа',
    'hrightbar': 'Скрыть правое меню',
    'adblock': 'Скрывать рекламу',
    'stickyheader': 'Закрепить шапку',
    'notify': 'Уведомления',
    'playback': 'Кнопка ускорения видео',
    'recents': 'Ранее использованные смайлики',
    'karma': 'Собирать карму',
    'friendsOn': 'Панель друзей онлайн',
    'bodystyle': 'Фон сайта',
    'weather': 'Виджет погоды',
    'sticker': 'Бесплатные стикеры'
}

/**
 * * Стандартная конфигурация
 * ? Чтобы пункт настроек появился в списке настроек
 * ? ключ необходимо продублировать в _SETSTRINGS
 * ? если ключ undefined, то пункт не будет добавлен список
 * * for (let i in _SETTINGS) {
 * *     if (_SETSTRINGS[i] !== undefined) {
 * ! Положение в объекте ВЛИЯЕТ на рассположение в списке настроек
 */
export let _SETTINGS: ISettings = {
    'comments': false,
    'blogsd': false,
    'readersd': false,
    'favorite': true,
    'grotate': true,
    'angle': 0,
    'oldheader': true,
    'playerdn': true,
    'dredirect': true,
    'online': true,
    'coins': true,
    'rscroll': false,
    'hrightbar': false,
    'adblock': true,
    'stickyheader': true,
    'apidebug': false,
    'karma': true,
    'sticker': true,
    'playback': true,
    'videoSpeed': 1,
    'recents': true,
    'friendsOn': true,
    'notify': false,
    'bodystyle': true,
    'upVersion': OVERRIDE.VERSION,
    'beta': false,
    'recentSmiles': {
        'show': false,
        'max': 60
    },
    'bodystyleSetting': {
        'url': `${ENV_PATH}/backgrounds/default.png`,
        'color': '#DAE1E8',
        'urlchecked': true,
        'colorchecked': false
    },
    'events': {
        'url': `${ENV_PATH}/sounds/default.ogg`,
        'volume': 50,
        'mail': true,
        'journal': true,
        'feed': false
    },
    'friendsOnMax': 10,
    'friendsDisplay': true,
    'hideNotyf': {
        'cookieEditor': false,
        'configImport': false
    },
    'weather': false,
    'weatherSettings': {
        'interval': 600,
        'time': 0,
        'city': null,
        'language': 'ru',
        'units': 'metric',
        'key': '5f11ea40424990937175d20a072e0c72'
    }
}