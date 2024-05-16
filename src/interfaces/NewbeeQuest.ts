export interface List {
  completed: string
  id: string
  title: string
  url: string
}

export interface NewbeeQuestWidget {
  completed_cnt: string
  list: List[]
  progress: string
}

export interface OwnerWidget {
  newbee_quest_widget?: NewbeeQuestWidget
}

export interface INewbeeQuest {
  owner_widget: OwnerWidget
}
