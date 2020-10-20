import { ISettings } from './Settings'

export interface Error {
    code: number
    message: string
    element: number
    startLine: number
    startCh: number
    endLine: number
    endCh: number
}

export interface Result {
    data: ISettings
    errors: Error[]
    warnings?: any[]
    jsonspec: string
    template: string
    valid: boolean
    messages?: any[]
}

export interface IGetJSON {
    result: Result
    description?: string
}