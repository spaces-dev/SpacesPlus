interface OnlineStatus {
  on_src: string
}

interface Avatar {
  previewURL: string
}

export interface FriendListItem {
  online_status?: OnlineStatus
  avatar?: Avatar
  name: string
}

interface Content {
  list: Array<FriendListItem | null>
}

interface PanelLink {
  content: Content
}

interface TabbedPanel {
  links: Array<PanelLink | null>
}

export interface FriendsOnline {
  tabbed_panel: TabbedPanel
}
