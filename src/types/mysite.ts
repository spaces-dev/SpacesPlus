export interface UserWidget {
  online_time: number
  name: string
  id: string
}

export interface UserAnketa {
  user_widget: UserWidget
}
