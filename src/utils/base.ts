import { IDevice } from '../interfaces/Device'

const HTTP = document.location.protocol
const BASE_URL = document.location.hostname
const Device: IDevice =  window.Device || unsafeWindow.Device

export {
    HTTP,
    BASE_URL,
    Device
}