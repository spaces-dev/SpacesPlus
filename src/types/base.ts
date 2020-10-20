import { IDevice } from '../interfaces/Device'
import pkg from '../../package.json'

const ENV = process.env.NODE_ENV === 'development' ? 'localhost:8080' : null
const VER = pkg.version
const BETA: boolean = false
const HREF: string = document.location.href
const HTTP: string = document.location.protocol
const PATHNAME: string = document.location.pathname
const REVISION: number = Number(new Date())
const BASE_URL: string = document.location.hostname
const DEVICE: IDevice = window.Device || unsafeWindow.Device
const GITHUB: string = 'spaces-dev.github.io'
const SPACES: string = `${HTTP}//${BASE_URL}`

class OVERRIDE {
    public static VERSION: number = Number(VER.split('.').join(''))
}

export {
    ENV,
    VER,
    BETA,
    HREF,
    HTTP,
    PATHNAME,
    REVISION,
    BASE_URL,
    DEVICE,
    GITHUB,
    SPACES,
    OVERRIDE
}