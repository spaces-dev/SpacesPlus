import pkg from '../package.json'

import { IDevice } from './interfaces/Device'

/**
 * Константы
 */
const BETA: boolean = false
const HTTP: string = document.location.protocol
const BASE_URL: string = document.location.hostname
const SPACES: string = `${HTTP}//${BASE_URL}`
const PKG_VERSION: string = pkg.version
const GITHUB: string = pkg.homepage
const REVISION: number = Number(new Date())
const DEVICE: IDevice = window.Device || unsafeWindow.Device
const ENV_PATH = process.env.NODE_ENV === 'development' ? 'https://localhost:8080' : GITHUB

/**
 * Временное хранилище данных
 */
class OVERRIDE {
    static CK: string
    static BANNED: string | null
    static ONLINE: string | null
    static FAVORITE: string | null
    static EVENTS: number = 0
    static PLAYER: number = 0
    static COMMENTS: number = 0
    static VERSION: number = Number(PKG_VERSION.split('.').join(''))
}

export {
    BETA,
    HTTP,
    DEVICE,
    GITHUB,
    SPACES,
    BASE_URL,
    ENV_PATH,
    OVERRIDE,
    REVISION,
    PKG_VERSION
}