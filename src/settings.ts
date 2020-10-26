import { ISettings, IStrings } from './interfaces/Settings'
import { OVERRIDE, GITHUB } from './strings'

/**
 * * Строки названий функций в меню настроек
 * ! Положение в объекте НЕ влияет на рассположение в списке настроек
 */
export const _SETSTRINGS: IStrings = {
    'comments': 'Пакетное удаление комментариев',
    'blogsd': 'Пакетное удаление блогов',
    'readersd': 'Пакетное удаление читателей',
    'favorite': 'Возможность добавить пользователя в закладки',
    'blocked': 'Открытые разделы удаленных пользователей',
    'grotate': 'Кнопка поворота фото в просмотрщике',
    'oldheader': 'Старое положение кнопок в шапке',
    'playerdn': 'Кнопка загрузки трека из плеера',
    'dredirect': 'Внешние ссылки без редиректа',
    'online': 'Точное время онлайн в анкетах',
    'coins': 'Собирать бонусные монеты',
    'rscroll': 'Прокрутка страницы справа',
    'hrightbar': 'Скрыть правое меню',
    'adblock': 'Скрывать рекламу',
    'myEvents': 'Звук уведомлений',
    'playback': 'Кнопка ускорения видео',
    'karma': 'Собирать карму',
    'friendsOn': 'Панель друзей онлайн',
    'bodystyle': 'Фон сайта',
    'msgAlert': 'Виджет почты',
    'weatherWidget': 'Виджет погоды',
    'sticker': 'Бесплатные стикеры'
}

/**
 * * Стандартная конфигурация
 * ? Чтобы пункт настроек появился в списке настроек
 * ? клюк необходимо продублировать в _SETSTRINGS
 * ? если ключ undefined, то пункт не будет добавлен список
 * * for (let i in _SETTINGS) {
 * *     if (typeof _SETSTRINGS[i] !== 'undefined') {
 * ! Положение в объекте ВЛИЯЕТ на рассположение в списке настроек
 */
export let _SETTINGS: ISettings = {
    'comments': false,
    'blogsd': false,
    'readersd': false,
    'favorite': true,
    'blocked': true,
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
    'apidebug': false,
    'karma': true,
    'sticker': true,
    'playback': true,
    'videoSpeed': 1,
    'friendsOn': true,
    'myEvents': false,
    'bodystyle': true,
    'upVersion': OVERRIDE.VERSION,
    'bodystyleSetting': {
        'url': `https://${GITHUB}/backgrounds/default.jpg`,
        'color': '#DAE1E8',
        'urlchecked': true,
        'colorchecked': false
    },
    'events': {
        'url': `https://${GITHUB}/sounds/default.ogg`,
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