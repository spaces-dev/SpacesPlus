import { IDevice } from '../interfaces/Device'
import pkg from '../../package.json'

const ENV = process.env.NODE_ENV === 'development' ? 'localhost:8080' : null
const BETA: boolean = false
const HTTP: string = document.location.protocol
const REVISION: number = Number(new Date())
const BASE_URL: string = document.location.hostname
const DEVICE: IDevice = window.Device || unsafeWindow.Device
const GITHUB: string = 'spaces-dev.github.io'

class OVERRIDE {
    public static VERSION: number = Number(pkg.version.split('.').join(''))
}

export {
    ENV,
    BETA,
    HTTP,
    REVISION,
    BASE_URL,
    DEVICE,
    GITHUB,
    OVERRIDE
}