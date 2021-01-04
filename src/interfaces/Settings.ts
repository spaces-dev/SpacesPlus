/*export interface NotifySet {
    url: string
    volume: number
    mail: boolean
    journal: boolean
    feed: boolean
}*/

export interface RecentSmiles {
    show: boolean
    max: number
}

export interface FriendsSet {
    max: number
}

export interface HideNotify {
    configImport: boolean
}

export interface BodystyleSet {
    url: string
    color: string
    urlchecked: boolean
    colorchecked: boolean
}

export interface WeatherSet {
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
    readersd: boolean
    blogsd: boolean
    blockedfiles: boolean
    oldheader: boolean
    playerdn: boolean
    dredirect: boolean
    online: boolean
    coins: boolean
    rscroll: boolean
    hrightbar: boolean
    favorite: boolean
    userbypass: boolean
    grotate: boolean
    angle: number
    adblock: boolean
    stickyheader: boolean
    apidebug: boolean
    karma: boolean
    sticker: boolean
    playback: boolean
    videoSpeed: number
    upVersion: number
    beta: boolean
    hideNotify: HideNotify
    recents: boolean
    recentSmiles: RecentSmiles
    friendsOn: boolean
    friendsSet: FriendsSet
    /**
     * notify: boolean
     * notifySet: NotifySet
     */
    bodystyle: boolean
    bodystyleSet: BodystyleSet
    weather: boolean
    weatherSet: WeatherSet
}