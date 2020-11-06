import {
    adBlock,
    setStyles,
    oldHeader,
    scrollMove,
    userOnline,
    userStatus,
    apiDebugger,
    coinsAccept,
    deleteBlogs,
    karmaAccept,
    soundEvents,
    betaFeatures,
    checkUpdates,
    favoriteUser,
    freeStickers,
    settingsMenu,
    stickyHeader,
    recentSmiles,
    deleteReaders,
    galleryRotate,
    sidebarButton,
    friendsOnline,
    weatherWidget,
    deleteComments,
    hiddenRightbar,
    playerDownload,
    disableRedirect,
    videoSpeedPlayback
} from './components'

import { qs, http, error, readSettings } from './utils'

import { ISessionCheck } from './interfaces/SessionCheck'

import { SPACES, BASE_URL, DEVICE, OVERRIDE } from './strings'
import { _SETTINGS } from './settings'

/**
 * ! Для работы Spaces+ необходима авторизация
 * * 00000 - Успешно авторизирован
 * * 01001 - Требуется авторизация
 */
(() => {
    if (qs('#main_wrap')) {
        try {
            http<ISessionCheck>('POST', `${SPACES}/api/session/check`, false).then(e => {
                if (e.status === 200 && e.parsedBody) {
                    if (userStatus(e.parsedBody.code)) {
                        // Временно храним CK для работы функций
                        OVERRIDE.CK = e.parsedBody?.attributes.CK
                        // Инициализируем работу
                        init()
                    } else {
                        console.log(e)
                    }
                }
            })
        } catch (e) {
            error('Ошибка (index.ts): ' + e)
        }
    }
})()

const init = () => {
    /**
     * ! Технические функции
     * ? Срабатывают один раз после загрузки страницы
     */
    checkUpdates()
    sidebarButton()
    readSettings()
    setStyles()

    /**
     * ? Тут перечислены функции, которые срабатывают единоразово
     * ? далее их изменения отслеживаются в components/settingsMenu.ts
     */
    oldHeader(_SETTINGS.oldheader)
    apiDebugger(_SETTINGS.apidebug)
    freeStickers(_SETTINGS.sticker)
    friendsOnline(_SETTINGS.friendsOn)
    stickyHeader(_SETTINGS.stickyheader)

    /**
     * ? Единоразовая инициализация
     * ! Только для PC версии сайта
     */
    if (DEVICE.id === 4) {
        scrollMove(_SETTINGS.rscroll)
        hiddenRightbar(_SETTINGS.hrightbar)
    }

    /**
     * ? Тут перечислены функции, которым необходимо постоянно
     * ? отслеживать прочее состояния на странице браузера
     * ! Для оптимальной работы выставлен интервал обновления в 200ms
     */
    setInterval(() => {
        if (_SETTINGS.adblock) adBlock()
        if (_SETTINGS.beta) betaFeatures()
        if (_SETTINGS.coins) coinsAccept()
        if (_SETTINGS.karma) karmaAccept()
        if (_SETTINGS.online) userOnline()
        if (_SETTINGS.events) soundEvents()
        if (_SETTINGS.recents) recentSmiles()
        if (_SETTINGS.grotate) galleryRotate()
        if (_SETTINGS.favorite) favoriteUser()
        if (_SETTINGS.weather) weatherWidget()
        if (_SETTINGS.readersd) deleteReaders()
        if (_SETTINGS.comments) deleteComments()
        if (_SETTINGS.playerdn) playerDownload()
        if (_SETTINGS.dredirect) disableRedirect()
        if (_SETTINGS.playback) videoSpeedPlayback()
        if (_SETTINGS.blogsd || BASE_URL === 'spaces-blogs.com') deleteBlogs()
        settingsMenu()
    }, 200)
}