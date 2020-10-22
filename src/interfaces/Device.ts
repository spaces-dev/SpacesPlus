declare global {
    const unsafeWindow : Window
    interface unsafeWindow { Device: UserDevice }
    interface Window { Device: UserDevice }
}

export interface UserDevice {
    id: number
    os: string
    pc: boolean
    type: string
    browser: string
    v: number
    old: boolean
}