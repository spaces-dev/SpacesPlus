import { ISettings } from '../interfaces/Settings'
import { OVERRIDE, GITHUB } from './base'

export class _SETTINGS {
    public static e: ISettings = {
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
        'nredirect': true,
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
}