interface DeleteLink {
  delete_URL: string
}

export interface Bookmarks {
  delete_link: DeleteLink | undefined
}

interface UserWidget {
  name: string
  id: string
}

export interface UserAnketa {
  user_widget: UserWidget
}
