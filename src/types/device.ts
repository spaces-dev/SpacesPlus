export interface DeviceInfo {
  id: number
  os: string
  pc: boolean
  type: string
  browser: string
  v: number
  old: boolean
}

declare global {
  interface Window {
    Device: DeviceInfo
  }
}
