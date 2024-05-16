export interface UserWidget {
  online_time: number
  name: string
  id: string
}

export interface IUserAnketa {
  user_widget: UserWidget
}

export interface IUserProfile {
  location: string
  content: string
}
