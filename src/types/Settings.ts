import { ISettings, setStrings } from '../interfaces/Settings'
import { OVERRIDE, GITHUB } from './strings'

/**
 * readonly strings
 */
export const _SETSTRINGS: setStrings = {
    'comments': 'Пакетное удаление комментариев',
    'blogsd': 'Пакетное удаление блогов',
    'readersd': 'Пакетное удаление читателей',
    'friendsOn': 'Панель друзей онлайн',
    'myEvents': 'Звук уведомлений',
    'online': 'Точное время онлайн в анкетах',
    'ads': 'Скрывать рекламу',
    'favorite': 'Возможность добавить пользователя в закладки',
    'rotate': 'Кнопка поворота фото в просмотрщике',
    'playback': 'Кнопка ускорения видео',
    'playerdn': 'Кнопка загрузки трека из плеера',
    'dredirect': 'Внешние ссылки без редиректа',
    'rscroll': 'Прокрутка страницы справа',
    'hrightbar': 'Скрыть правое меню',
    'blocked': 'Открытые разделы удаленных пользователей',
    'coins': 'Собирать бонусные монеты',
    'karma': 'Собирать карму',
    'bodystyle': 'Фон сайта',
    'msgAlert': 'Виджет почты',
    'weatherWidget': 'Виджет погоды',
    'sticker': 'Бесплатные стикеры',
    'fixes': 'Незначительные исправления'
}

export let _SETTINGS: ISettings = {
    'comments': false,
    'blogsd': false,
    'readersd': false,
    'favorite': true,
    'rotate': true,
    'playback': true,
    'blocked': true,
    'rscroll': false,
    'hrightbar': false,
    'apidebug': false,
    'playerdn': true,
    'dredirect': true,
    'coins': true,
    'karma': true,
    'online': true,
    'ads': true,
    'myEvents': false,
    'friendsOn': true,
    'sticker': true,
    'fixes': true,
    'bodystyle': true,
    'upVersion': OVERRIDE.VERSION,
    'videoSpeed': 1,
    'bodystyleSetting': {
        'url': `https://${GITHUB}/src/backgrounds/default.jpg`,
        'color': '#DAE1E8',
        'urlchecked': true,
        'colorchecked': false
    },
    'events': {
        'url': `https://${GITHUB}/src/sounds/default.ogg`,
        'volume': 70,
        'mail': true,
        'journal': true,
        'feed': false,
        'notifications': false
    },
    'friendsOnMax': 10,
    'friendsListSH': true,
    'friendsDisplay': true,
    'hideNotyf': {
        'cookieEditor': false,
        'configImport': false
    },
    'msgAlert': false,
    'msgAlertSettings': {
        'alertPosition': 4,
        'maxAlert': 3,
        'animDelay': 3,
        'alertDelay': 3
    },
    'weatherWidget': false,
    'weatherSettings': {
        'interval': 600,
        'time': 0,
        'city': null,
        'language': 'ru',
        'units': 'metric',
        'key': '5f11ea40424990937175d20a072e0c72'
    }
}