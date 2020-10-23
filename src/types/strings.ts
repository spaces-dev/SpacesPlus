import { UserDevice } from '../interfaces/Device'
import pkg from '../../package.json'

/**
 * Константы
 */
const ENV = process.env.NODE_ENV === 'development' ? 'localhost:8080' : null
const BETA: boolean = false
const HTTP: string = document.location.protocol
const REVISION: number = Number(new Date())
const BASE_URL: string = document.location.hostname
const DEVICE: UserDevice = window.Device || unsafeWindow.Device
const GITHUB: string = 'spaces-dev.github.io'
const SPACES: string = `${HTTP}//${BASE_URL}`
const PKG_VERSION = pkg.version

/**
 * Временное хранилище данных
 */
class OVERRIDE {
    public static KARMA: boolean = false
    public static COINS: boolean = false
    public static PLAYER_ID: number = 0
    public static ONLINE_LOCK: string | null = null
    public static VERSION: number = Number(PKG_VERSION.split('.').join(''))
}

export {
    ENV,
    BETA,
    HTTP,
    DEVICE,
    GITHUB,
    SPACES,
    BASE_URL,
    REVISION,
    OVERRIDE,
    PKG_VERSION,
}