export interface Status {
    http_code: number | string
}

export interface IProxy<T> {
    status: Status
    contents: T
}