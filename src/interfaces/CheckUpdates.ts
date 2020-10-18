export interface History {
    build: number
    date: string
    changes: string
}

export interface CheckUpdates {
    history: History[]
}