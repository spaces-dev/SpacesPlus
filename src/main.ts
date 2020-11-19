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
    firstLaunch,
    karmaAccept,
    soundNotify,
    betaFeatures,
    blockedFiles,
    checkUpdates,
    favoriteUser,
    freeStickers,
    settingsMenu,
    stickyHeader,
    recentSmiles,
    bypassProfile,
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

import {
    DATA,
    DEVICE,
    SPACES,
    BASE_URL
} from './strings'

import {
    qs,
    info,
    http,
    error,
    readSettings
} from './utils'

import { _SETTINGS } from './settings'

import { ISessionCheck } from './interfaces/SessionCheck'

(() => {
    if (qs('#main_wrap')) {
        try {

            /**
             * ! Для работы Spaces+ необходима авторизация
             * * 00000 - Авторизированы
             * * 01001 - Требуется авторизация
             */
            http<ISessionCheck>('POST', `${SPACES}/api/session/check`, false).then(e => {
                if (e.status === 200 && e.parsedBody) {
                    if (userStatus(e.parsedBody.code)) {

                        // Временно храним ник
                        DATA.USERNAME = e.parsedBody?.attributes.name

                        // Временно храним CK
                        DATA.CK = e.parsedBody?.attributes.CK

                        // Инициализируем работу
                        init()
                    }

                    info('api/session/check', e)
                }
            })
        } catch (e) {
            error('main.ts', e)
        }
    }
})()

const init = () => {

    // Script error.
    window.onerror = () => false

    /**
     * ! Технические функции
     * ? Срабатывают один раз после загрузки страницы
     */
    firstLaunch()
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
        if (_SETTINGS.notify) soundNotify()
        if (_SETTINGS.recents) recentSmiles()
        if (_SETTINGS.grotate) galleryRotate()
        if (_SETTINGS.favorite) favoriteUser()
        if (_SETTINGS.weather) weatherWidget()
        if (_SETTINGS.readersd) deleteReaders()
        if (_SETTINGS.comments) deleteComments()
        if (_SETTINGS.playerdn) playerDownload()
        if (_SETTINGS.userbypass) bypassProfile()
        if (_SETTINGS.dredirect) disableRedirect()
        if (_SETTINGS.playback) videoSpeedPlayback()
        if (_SETTINGS.blogsd || BASE_URL === 'spaces-blogs.com') deleteBlogs()
        if (_SETTINGS.blockedfiles || BASE_URL === 'spac1.net') blockedFiles()
        settingsMenu()
    }, 200)
}