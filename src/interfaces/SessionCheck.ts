export interface Icons {
    baseurl: string
}

export interface Config {
    icons: Icons
}

export interface OnlineStatus {
    is_online: number
    on_img: string
    alt: string
    off_img: string
    id: string
    last_time: number
    system: number
    no_link: number
}

export interface Attributes {
    name: string
    journalTbNm: number
    mailTbNm: number
    sid: string
    online_status: OnlineStatus
    mysite_link: string
    confirm_phone: number
    isAutoreg: number
    CK: string
    avatar: string
    lentaTbNm: string
    nid: number
    synchronized: number
    channel_id: string
    journal_pro_mode: number
}

export interface ISessionCheck {
    css_files: any[]
    t: number
    time: number
    code: string
    config: Config
    attributes: Attributes
}