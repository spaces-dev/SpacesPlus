import { oldHeader } from './oldHeader'
import { readSettings } from '../utils/readSettings'
import { checkUpdates } from './checkUpdates'
import { sidebarButton } from './sidebarButton'
import { setStyle } from './setStyle'

export const main = () => {
    readSettings()
    checkUpdates()

    setStyle()

    oldHeader()
    sidebarButton()
}