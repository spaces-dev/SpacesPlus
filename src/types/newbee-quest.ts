export interface QuestItem {
  completed: string
  id: string
  title: string
  url: string
}

export interface NewbeeQuestWidget {
  completed_cnt: string
  list: QuestItem[]
  progress: string
}

export interface OwnerWidget {
  newbee_quest_widget?: NewbeeQuestWidget
}

export interface NewbeeQuest {
  owner_widget: OwnerWidget
}
