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
    notifications: boolean
}

export interface HideNotyf {
    cookieEditor: boolean
    configImport: boolean
}

export interface MsgAlertSettings {
    alertPosition: number
    maxAlert: number
    animDelay: number
    alertDelay: number
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
    rotate: boolean
    playback: boolean
    blocked: boolean
    rscroll: boolean
    hrightbar: boolean
    apidebug: boolean
    playerdn: boolean
    nredirect: boolean
    coins: boolean
    karma: boolean
    online: boolean
    ads: boolean
    myEvents: boolean
    friendsOn: boolean
    sticker: boolean
    fixes: boolean
    bodystyle: boolean
    upVersion: number
    bodystyleSetting: BodystyleSetting
    events: Events
    friendsOnMax: number
    friendsListSH: boolean
    friendsDisplay: boolean
    hideNotyf: HideNotyf
    msgAlert: boolean
    msgAlertSettings: MsgAlertSettings
    weatherWidget: boolean
    weatherSettings: WeatherSettings
}