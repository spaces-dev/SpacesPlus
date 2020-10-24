declare global {
    const unsafeWindow: Window
    interface unsafeWindow { Device: IDevice }
    interface Window { Device: IDevice }
}

export interface IDevice {
    id: number
    os: string
    pc: boolean
    type: string
    browser: string
    v: number
    old: boolean
}