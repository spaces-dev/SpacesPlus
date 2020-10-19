import { oldHeader } from './oldHeader'
import { readSettings } from '../utils/readSettings'
import { checkUpdates } from './checkUpdates'
import { sidebarButton } from './sidebarButton'
import { setStyle } from './setStyle'
import { freeStickers } from './freeStickers'
import { settingsMenu } from './settingsMenu'
import { friendsOnline } from './friendsOnline'

import { _SETTINGS } from '../types/Settings'

export const main = () => {
    // execute once
    checkUpdates()
    readSettings()
    setStyle()

    if (_SETTINGS.e.fixes) oldHeader()
    if (_SETTINGS.e.sticker) freeStickers()
    
    sidebarButton()
    
    setInterval(() => {
        if (_SETTINGS.e.friendsOn) friendsOnline()
        settingsMenu()
    }, 200)
}