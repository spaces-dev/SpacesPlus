import { readSettings } from '../utils'

import { setStyle } from './setStyle'
import { oldHeader } from './oldHeader'
import { checkUpdates } from './checkUpdates'
import { freeStickers } from './freeStickers'
import { settingsMenu } from './settingsMenu'
import { sidebarButton } from './sidebarButton'
import { friendsOnline } from './friendsOnline'
import { videoSpeedPlayback } from './videoSpeedPlayback'
import { _SETTINGS } from '../types/settings'

export const main = () => {
    // execute once
    checkUpdates()
    sidebarButton()
    readSettings()
    setStyle()

    if (_SETTINGS.fixes) oldHeader()
    if (_SETTINGS.sticker) freeStickers()

    setInterval(() => {
        if (_SETTINGS.playback) videoSpeedPlayback()
        if (_SETTINGS.friendsOn) friendsOnline(false)
        settingsMenu()
    }, 200)
}