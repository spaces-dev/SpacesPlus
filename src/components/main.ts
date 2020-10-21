import { readSettings } from '../utils'

import { setStyle } from './setStyle'
import { oldHeader } from './oldHeader'
import { checkUpdates } from './checkUpdates'
import { freeStickers } from './freeStickers'
import { settingsMenu } from './settingsMenu'
import { galleryRotate } from './galleryRotate'
import { sidebarButton } from './sidebarButton'
import { friendsOnline } from './friendsOnline'
import { disableRedirect } from './disableRedirect'
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
        if (_SETTINGS.grotate) galleryRotate()
        if (_SETTINGS.dredirect) disableRedirect()
        if (_SETTINGS.playback) videoSpeedPlayback()
        if (_SETTINGS.friendsOn) friendsOnline(false)
        settingsMenu()
    }, 200)
}