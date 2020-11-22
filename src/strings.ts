import pkg from '../package.json'

import { IData } from './interfaces/Data'
import { IDevice } from './interfaces/Device'
import { IFirebase } from './interfaces/Firebase'

/**
 * Константы
 */
const DEV: boolean = process.env.NODE_ENV === 'development' ? true : false
const HTTP: string = document.location.protocol
const BASE_URL: string = document.location.hostname
const SPACES: string = `${HTTP}//${BASE_URL}`
const PKG_VERSION: string = pkg.version
const GITHUB: string = pkg.homepage
const REVISION: number = Number(new Date())
const DEVICE: IDevice = window.Device || unsafeWindow.Device
const ENV_PATH = DEV ? 'https://localhost:8080' : GITHUB

/**
 * Домены сайта
 */
const DOMAINS: string[] = [
    'spaces-blogs.com',
    'gdespaces.com',
    'spaces.ru',
    'spaces.im',
    'spac1.net',
    'spcs.me'
]

/**
 * Базовые пути разделов сайта
 */
const BASE_PATH: string[] = [
    'sz',
    'app',
    'rklm',
    'tags',
    'mail',
    'info',
    'comm',
    'chat',
    'files',
    'video',
    'users',
    'diary',
    'lenta',
    'mysite',
    'dating',
    'forums',
    'anketa',
    'journal',
    'musicat',
    'pictures',
    'activity',
    'settings',
    'friends',
    'services',
    'devices',
    'bookmarks',
    'music.user',
    'online_help',
    'sections.city',
    'sidebar.types',
    'gifts.user_list',
    'guestbook.index'
]

/**
 * Firebase конфигурация
 */
const FirebaseConfig: IFirebase = {
    apiKey: 'AIzaSyB8iDAyd-mMrSnBDKj_qasTjw268mk1d14',
    authDomain: 'spacesplus.firebaseapp.com',
    databaseURL: 'https://spacesplus.firebaseio.com',
    projectId: 'spacesplus',
    storageBucket: 'spacesplus.appspot.com',
    messagingSenderId: '855455546501',
    appId: '1:855455546501:web:89bbef7d9a9a03b3c2fdec'
}

/**
 * Временное хранилище данных
 */
const DATA: IData = {
    // наш CK
    CK: '',
    // наш SID
    SID: '',
    // наш Никнейм
    USERNAME: '',

    BANNED: null,
    ONLINE: null,
    NICKNAME: null,
    CONTENT: null,
    EVENTS: 0,
    PLAYER: 0,

    // версия из package.json
    VERSION: Number(PKG_VERSION.split('.').join(''))
}

export {
    DEV,
    DATA,
    HTTP,
    DEVICE,
    GITHUB,
    SPACES,
    DOMAINS,
    BASE_URL,
    ENV_PATH,
    REVISION,
    BASE_PATH,
    PKG_VERSION,
    FirebaseConfig
}