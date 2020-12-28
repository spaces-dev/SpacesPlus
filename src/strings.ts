import pkg from '../package.json'

import { IData } from './interfaces/Data'
import { IDevice } from './interfaces/Device'

/**
 * Константы
 */
const DEV: boolean = process.env.NODE_ENV === 'development' ? true : false
const HTTP: string = document.location.protocol
const HOST: string = document.location.hostname
const BASE_URL: string = `${HTTP}//${HOST}`
const PKG_VERSION: string = pkg.version
const GITHUB: string = pkg.homepage
const REVISION: number = Number(new Date())
const DEVICE: IDevice = window.Device || unsafeWindow.Device
const ENV_PATH: string = DEV ? 'https://localhost:8080' : GITHUB

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
    HOST,
    DEVICE,
    GITHUB,
    BASE_URL,
    ENV_PATH,
    REVISION,
    PKG_VERSION
}