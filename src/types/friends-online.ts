export interface OnlineStatus {
  on_src: string
}

export interface Avatar {
  previewURL: string
}

export interface FriendListItem {
  online_status?: OnlineStatus
  mysiteURL?: string
  avatar?: Avatar
  name: string
}

export interface Content {
  list: Array<FriendListItem | null>
}

export interface PanelLink {
  content: Content
}

export interface TabbedPanel {
  links: Array<PanelLink | null>
}

export interface FriendsOnline {
  tabbed_panel: TabbedPanel
}
