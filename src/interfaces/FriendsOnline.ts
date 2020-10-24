export interface OnlineStatus {
    on_img: string
}

export interface Avatar {
    previewURL: string
}

export interface List {
    online_status: OnlineStatus
    mysiteURL: string
    avatar: Avatar
    name: string
}

export interface Content {
    list: List[]
}

export interface Tab {
    content: Content
}

export interface TabbedPanel {
    tabs: Tab[]
}

export interface IFriendsOnline {
    tabbed_panel: TabbedPanel
}