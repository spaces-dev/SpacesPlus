import { oldHeader } from './oldHeader'
import { readSettings } from '../utils/readSettings'
import { checkUpdates } from './checkUpdates'
import { sidebarButton } from './sidebarButton'
import { setStyle } from './setStyle'
import { freeStickers } from './freeStickers'

export const main = () => {
    // execute once
    checkUpdates()
    readSettings()
    setStyle()

    oldHeader()
    freeStickers()
    sidebarButton()

    //setInterval(() => { }, 200)
}