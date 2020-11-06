export type ISettingsStrings = {
    readonly [key: string]: string
}

export interface RecentSmiles {
    show: boolean
    max: number
}

export interface BodystyleSetting {
    url: string
    color: string
    urlchecked: boolean
    colorchecked: boolean
}

export interface Events {
    url: string
    volume: number
    mail: boolean
    journal: boolean
    feed: boolean
}

export interface HideNotyf {
    cookieEditor: boolean
    configImport: boolean
}

export interface WeatherSettings {
    interval: number
    time: number
    city: string | null
    language: 'ru' | 'en'
    units: 'metric' | 'imperial'
    key: string
}

export interface ISettings {
    [key: string]: any
    comments: boolean
    blogsd: boolean
    readersd: boolean
    favorite: boolean
    grotate: boolean
    angle: number
    oldheader: boolean
    playerdn: boolean
    dredirect: boolean
    online: boolean
    coins: boolean
    rscroll: boolean
    hrightbar: boolean
    adblock: boolean
    stickyheader: boolean
    apidebug: boolean
    karma: boolean
    sticker: boolean
    playback: boolean
    videoSpeed: number
    recents: boolean
    friendsOn: boolean
    notify: boolean
    bodystyle: boolean
    upVersion: number
    beta: boolean
    recentSmiles: RecentSmiles
    bodystyleSetting: BodystyleSetting
    events: Events
    friendsOnMax: number
    friendsDisplay: boolean
    hideNotyf: HideNotyf
    weather: boolean
    weatherSettings: WeatherSettings
}