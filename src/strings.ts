import { IDevice } from './interfaces/Device'
import pkg from '../package.json'

/**
 * Константы
 */
const BETA: boolean = false
const HTTP: string = document.location.protocol
const BASE_URL: string = document.location.hostname
const SPACES: string = `${HTTP}//${BASE_URL}`
const PKG_VERSION = pkg.version
const GITHUB: string = pkg.homepage
const REVISION: number = Number(new Date())
const DEVICE: IDevice = window.Device || unsafeWindow.Device
const ENV_PATH = process.env.NODE_ENV === 'development' ? 'https://localhost:8080' : GITHUB

/**
 * Временное хранилище данных
 */
class OVERRIDE {
    public static CK: string
    public static BANNED: string | null
    public static ONLINE: string | null
    public static FAVORITE: string | null
    public static KARMA: boolean = false
    public static COINS: boolean = false
    public static EVENTS: number = 0
    public static COMMENTS: number = 0
    public static PLAYER_ID: number = 0
    public static VERSION: number = Number(PKG_VERSION.split('.').join(''))
}

export {
    BETA,
    HTTP,
    DEVICE,
    GITHUB,
    SPACES,
    BASE_URL,
    ENV_PATH,
    REVISION,
    OVERRIDE,
    PKG_VERSION,
}