export interface OnlineStatus {
  on_img: string
}

export interface Avatar {
  previewURL: string
}

export interface FriendListItem {
  online_status: OnlineStatus
  mysiteURL: string
  avatar: Avatar
  name: string
}

export interface Content {
  list: FriendListItem[]
}

export interface Tab {
  content: Content
}

export interface TabbedPanel {
  tabs: Tab[]
}

export interface FriendsOnline {
  tabbed_panel: TabbedPanel
}
