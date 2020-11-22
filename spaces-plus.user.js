// ==UserScript==
// @name        Spaces+
// @version     3.1.2
// @author      Vitalij Ryndin
// @description 🚀 Powerful userscript for Spaces.ru
// @homepage    https://spaces-dev.github.io/SpacesPlus
// @match       *://(spaces.ru|spac.me|spcs.me|spaces.im|gdespaces.com|spac1.com|spac1.net|spaces-blogs.com)/*
// @namespace   https://spaces-dev.github.io/SpacesPlus
// @icon        https://spaces-dev.github.io/SpacesPlus/icons/logo_96.png
// @include     /^(http|https)://(spaces.ru|spac.me|spcs.me|spaces.im|gdespaces.com|spac1.com|spac1.net|spaces-blogs.com).*$/
// @homepageURL https://github.com/spaces-dev/SpacesPlus
// @require     https://spaces-dev.github.io/SpacesPlus/libs/colorpicker.js
// @grant       none
// ==/UserScript==

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.readSettings = exports.notification = exports.modifyObject = exports.setSettings = exports.historyPush = exports.messageBox = exports.isValidUrl = exports.confirmBox = exports.setCookie = exports.playSound = exports.getParams = exports.getCookie = exports.delCookie = exports.declOfNum = exports.getQuery = exports.toUpper = exports.getPath = exports.extend = exports.rever = exports.error = exports.trim = exports.http = exports.info = exports.log = exports.css = exports.qsa = exports.qs = exports.ce = void 0;
const ce_1 = __webpack_require__(14);
Object.defineProperty(exports, "ce", { enumerable: true, get: function () { return ce_1.ce; } });
const css_1 = __webpack_require__(5);
Object.defineProperty(exports, "css", { enumerable: true, get: function () { return css_1.css; } });
const http_1 = __webpack_require__(15);
Object.defineProperty(exports, "http", { enumerable: true, get: function () { return http_1.http; } });
const trim_1 = __webpack_require__(6);
Object.defineProperty(exports, "trim", { enumerable: true, get: function () { return trim_1.trim; } });
const qs_1 = __webpack_require__(17);
Object.defineProperty(exports, "qs", { enumerable: true, get: function () { return qs_1.qs; } });
Object.defineProperty(exports, "qsa", { enumerable: true, get: function () { return qs_1.qsa; } });
const rever_1 = __webpack_require__(18);
Object.defineProperty(exports, "rever", { enumerable: true, get: function () { return rever_1.rever; } });
const extend_1 = __webpack_require__(7);
Object.defineProperty(exports, "extend", { enumerable: true, get: function () { return extend_1.extend; } });
const getPath_1 = __webpack_require__(19);
Object.defineProperty(exports, "getPath", { enumerable: true, get: function () { return getPath_1.getPath; } });
const toUpper_1 = __webpack_require__(20);
Object.defineProperty(exports, "toUpper", { enumerable: true, get: function () { return toUpper_1.toUpper; } });
const getQuery_1 = __webpack_require__(21);
Object.defineProperty(exports, "getQuery", { enumerable: true, get: function () { return getQuery_1.getQuery; } });
const declOfNum_1 = __webpack_require__(22);
Object.defineProperty(exports, "declOfNum", { enumerable: true, get: function () { return declOfNum_1.declOfNum; } });
const delCookie_1 = __webpack_require__(23);
Object.defineProperty(exports, "delCookie", { enumerable: true, get: function () { return delCookie_1.delCookie; } });
const getCookie_1 = __webpack_require__(25);
Object.defineProperty(exports, "getCookie", { enumerable: true, get: function () { return getCookie_1.getCookie; } });
const getParams_1 = __webpack_require__(26);
Object.defineProperty(exports, "getParams", { enumerable: true, get: function () { return getParams_1.getParams; } });
const playSound_1 = __webpack_require__(27);
Object.defineProperty(exports, "playSound", { enumerable: true, get: function () { return playSound_1.playSound; } });
const setCookie_1 = __webpack_require__(8);
Object.defineProperty(exports, "setCookie", { enumerable: true, get: function () { return setCookie_1.setCookie; } });
const confirmBox_1 = __webpack_require__(28);
Object.defineProperty(exports, "confirmBox", { enumerable: true, get: function () { return confirmBox_1.confirmBox; } });
const isValidUrl_1 = __webpack_require__(29);
Object.defineProperty(exports, "isValidUrl", { enumerable: true, get: function () { return isValidUrl_1.isValidUrl; } });
const messageBox_1 = __webpack_require__(30);
Object.defineProperty(exports, "messageBox", { enumerable: true, get: function () { return messageBox_1.messageBox; } });
const historyPush_1 = __webpack_require__(31);
Object.defineProperty(exports, "historyPush", { enumerable: true, get: function () { return historyPush_1.historyPush; } });
const console_1 = __webpack_require__(3);
Object.defineProperty(exports, "log", { enumerable: true, get: function () { return console_1.log; } });
Object.defineProperty(exports, "info", { enumerable: true, get: function () { return console_1.info; } });
Object.defineProperty(exports, "error", { enumerable: true, get: function () { return console_1.error; } });
const modifyObject_1 = __webpack_require__(32);
Object.defineProperty(exports, "modifyObject", { enumerable: true, get: function () { return modifyObject_1.modifyObject; } });
const notification_1 = __webpack_require__(33);
Object.defineProperty(exports, "notification", { enumerable: true, get: function () { return notification_1.notification; } });
const settings_1 = __webpack_require__(34);
Object.defineProperty(exports, "readSettings", { enumerable: true, get: function () { return settings_1.readSettings; } });
Object.defineProperty(exports, "setSettings", { enumerable: true, get: function () { return settings_1.setSettings; } });


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseConfig = exports.PKG_VERSION = exports.BASE_PATH = exports.REVISION = exports.ENV_PATH = exports.BASE_URL = exports.DOMAINS = exports.SPACES = exports.GITHUB = exports.DEVICE = exports.HTTP = exports.DATA = exports.DEV = void 0;
const package_json_1 = __importDefault(__webpack_require__(24));
/**
 * Константы
 */
const DEV =  false ? undefined : false;
exports.DEV = DEV;
const HTTP = document.location.protocol;
exports.HTTP = HTTP;
const BASE_URL = document.location.hostname;
exports.BASE_URL = BASE_URL;
const SPACES = `${HTTP}//${BASE_URL}`;
exports.SPACES = SPACES;
const PKG_VERSION = package_json_1.default.version;
exports.PKG_VERSION = PKG_VERSION;
const GITHUB = package_json_1.default.homepage;
exports.GITHUB = GITHUB;
const REVISION = Number(new Date());
exports.REVISION = REVISION;
const DEVICE = window.Device || unsafeWindow.Device;
exports.DEVICE = DEVICE;
const ENV_PATH = DEV ? 'https://localhost:8080' : GITHUB;
exports.ENV_PATH = ENV_PATH;
/**
 * Домены сайта
 */
const DOMAINS = [
    'spaces-blogs.com',
    'gdespaces.com',
    'spaces.ru',
    'spaces.im',
    'spac1.net',
    'spcs.me'
];
exports.DOMAINS = DOMAINS;
/**
 * Базовые пути разделов сайта
 */
const BASE_PATH = [
    'sz',
    'app',
    'rklm',
    'tags',
    'mail',
    'info',
    'comm',
    'chat',
    'files',
    'video',
    'users',
    'diary',
    'lenta',
    'mysite',
    'dating',
    'forums',
    'anketa',
    'journal',
    'musicat',
    'pictures',
    'activity',
    'settings',
    'friends',
    'services',
    'devices',
    'bookmarks',
    'music.user',
    'online_help',
    'sections.city',
    'sidebar.types',
    'gifts.user_list',
    'guestbook.index'
];
exports.BASE_PATH = BASE_PATH;
/**
 * Firebase конфигурация
 */
const FirebaseConfig = {
    apiKey: 'AIzaSyB8iDAyd-mMrSnBDKj_qasTjw268mk1d14',
    authDomain: 'spacesplus.firebaseapp.com',
    databaseURL: 'https://spacesplus.firebaseio.com',
    projectId: 'spacesplus',
    storageBucket: 'spacesplus.appspot.com',
    messagingSenderId: '855455546501',
    appId: '1:855455546501:web:89bbef7d9a9a03b3c2fdec'
};
exports.FirebaseConfig = FirebaseConfig;
/**
 * Временное хранилище данных
 */
const DATA = {
    // наш CK
    CK: '',
    // наш Никнейм
    USERNAME: '',
    BANNED: null,
    ONLINE: null,
    NICKNAME: null,
    CONTENT: null,
    EVENTS: 0,
    PLAYER: 0,
    // версия из package.json
    VERSION: Number(PKG_VERSION.split('.').join(''))
};
exports.DATA = DATA;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports._SETTINGS = exports._SETSTRINGS = exports._DESCSTRINGS = void 0;
const strings_1 = __webpack_require__(1);
/**
 * * Описание настроек
 * ! Указывать описание для каждого пункта настроек НЕ обязательно
 */
exports._DESCSTRINGS = {
    'blogsd': `Функция позволяет удалять сразу несколько блогов.</br></br><img src="${strings_1.ENV_PATH}/screens/sort-blogs.png"></br>Работает только в <a href="${strings_1.SPACES}/diary/view/?Short=0&sort=0">"Расширенном виде"</a> (нажмите на ссылку, чтобы включить этот вид - откроется страница с вашими блогами).`,
    'readersd': 'Функция позволяет удалять сразу несколько читателей, может быть вам это пригодиться.',
    'comments': 'Функция будет полезна тем, кто часто удаляет много комментариев. Работает в любом месте, где у Вас есть возможность удалять комментарии, будь это ваш блог или гостевая.',
    'blockedfiles': 'Функция позволяет скачивать файлы заблокированные антивирусом (Spaces+ не несет ответственность за скачивание файлов с вирусами!).',
    'oldheader': 'Функция меняет кнопку почты и ленты местами, как было раньше.',
    'playerdn': `<img src="${strings_1.ENV_PATH}/screens/player-download.png"></br>Добавляется кнопка в аудиоплеер, которая позволяет скачивать воспроизведенный вами трек.`,
    'dredirect': 'Функция избавляем Вас от назойливого предупреждения, когда вы хотите перейти по внешней ссылке.',
    'online': 'Функция позволяет смотреть точное время онлайн у пользователей в анкетах.',
    'coins': 'Функция в автоматическом режиме ищет и собирает бонусные монеты.',
    'rscroll': 'Перемещает полосу автоскролла на правую сторону.',
    'hrightbar': 'Функция скрывает правое меню (страница становиться на 25% шире).</br></br>Конфликтует c функцией "Виджет погоды".',
    'favorite': `<img src="${strings_1.ENV_PATH}/screens/favorite-user.png"></br>Функция добавляет на страницу каждого пользователя кнопку "В закладки". Повторно нажав на кнопку, Вы сможете удалить пользователя из закладок.`,
    'userbypass': `<img src="${strings_1.ENV_PATH}/screens/bypass-profile.png"></br>Функция позволяет просматривать разделы у заблокированных/удаленных пользователей, даже если он у Вас в черном списке.`,
    'grotate': `<img src="${strings_1.ENV_PATH}/screens/rotate-image.png"></br>Добавляется кнопка в просмотрщик фотографий, с помощью ее можно поворачивать изображение.`,
    'adblock': 'Функция полностью скрывает назойливую рекламу и не только.',
    'stickyheader': 'Функция закрепляет шапку сайта.',
    // 'notify': `<img src="${ENV_PATH}/screens/browser-permissions.png"></br>Для работы, в настройках браузера необходимо разрешить сайту использовать "Уведомления" и "Звук".</br></br>Функция позволяет изменять звук уведомлений (указывайте прямую ссылку на файл!), настраивать громкость звука и отмечать из каких разделов получать уведомления.`,
    'playback': `<img src="${strings_1.ENV_PATH}/screens/video-speed.png"></br>В видеоплеере добавляется кнопка ускорения видео, примерно как на YouTube.`,
    'recents': `<img src="${strings_1.ENV_PATH}/screens/recent-smiles.png"></br>В меню смайликов добавляется раздел с ранее использованными смайликами, для добавления в раздел, используйте смайлики/стикеры из меню смайликов.`,
    'karma': 'Функция в автоматическом режиме подтверждает назойливую карму.',
    'friendsOn': `<img src="${strings_1.ENV_PATH}/screens/friends-online.png"></br>Функция добавляет в левое меню панель с друзьями онлайн. Для работы необходимо включить раздел <a href="${strings_1.SPACES}/sidebar/links/?T=4">Друзья</a>, если он у вас выключен.</br></br>Панель ограничена от 1 до 15 друзей онлайн.`,
    'bodystyle': 'Позволяет украшать фон сайта на свой вкус. В подборке имеется 20 изображений для фона, также Вы можете переключиться на цветной фон.',
    'weather': `<img src="${strings_1.ENV_PATH}/screens/weather-widget.png"></br>Отображает информацию о текущем состоянии погоды, температура, облачность, влажность, давление и ветер.</br></br>Имеется возможность изменить город, API-Ключ и интервал обновления погоды.`,
    'sticker': `Функция позволяет бесплатно использовать стикеры. Работает в почте (при отправки из <a href="${strings_1.SPACES}/mail/write/">"Новое сообщение"</a> не работает!), в комментариях, при создании блогов или тем на форуме.`
};
/**
 * * Названия функций в меню настроек
 * ! Положение в объекте НЕ влияет на рассположение в списке настроек
 */
exports._SETSTRINGS = {
    'blogsd': 'Пакетное удаление блогов',
    'readersd': 'Пакетное удаление читателей',
    'comments': 'Пакетное удаление комментариев',
    'blockedfiles': 'Ссылки на заблокированные файлы',
    'oldheader': 'Старое положение кнопок в шапке',
    'playerdn': 'Кнопка загрузки трека из плеера',
    'dredirect': 'Внешние ссылки без редиректа',
    'online': 'Точное время онлайн в анкетах',
    'coins': 'Собирать бонусные монеты',
    'rscroll': 'Прокрутка страницы справа',
    'hrightbar': 'Скрыть правое меню',
    'favorite': 'Добавить в закладки',
    'userbypass': 'Просмотр профилей',
    'grotate': 'Поворот фотографий',
    'adblock': 'Скрывать рекламу',
    'stickyheader': 'Закрепить шапку',
    // 'notify': 'Уведомления',
    'playback': 'Кнопка ускорения видео',
    'recents': 'Ранее использованные смайлики',
    'karma': 'Собирать карму',
    'friendsOn': 'Панель друзей онлайн',
    'bodystyle': 'Фон сайта',
    'weather': 'Виджет погоды',
    'sticker': 'Бесплатные стикеры'
};
/**
 * * Стандартная конфигурация
 * ? Чтобы пункт настроек появился в списке настроек
 * ? ключ необходимо продублировать в _SETSTRINGS
 * ? если ключ undefined, то пункт не будет добавлен список
 * * for (let i in _SETTINGS) {
 * *     if (_SETSTRINGS[i] !== undefined) {
 * ! Положение в объекте ВЛИЯЕТ на рассположение в списке настроек
 */
exports._SETTINGS = {
    'blogsd': false,
    'readersd': false,
    'comments': false,
    'blockedfiles': true,
    'oldheader': true,
    'playerdn': true,
    'dredirect': true,
    'online': true,
    'coins': true,
    'rscroll': false,
    'hrightbar': false,
    'favorite': true,
    'grotate': true,
    'angle': 0,
    'userbypass': true,
    'adblock': true,
    'stickyheader': true,
    'apidebug': false,
    'karma': true,
    'sticker': true,
    'playback': true,
    'videoSpeed': 1,
    'upVersion': strings_1.DATA.VERSION,
    'beta': false,
    'hideNotify': {
        'configImport': false
    },
    'recents': true,
    'recentSmiles': {
        'show': false,
        'max': 60
    },
    'friendsOn': true,
    'friendsSet': {
        'max': 10
    },
    /**
     * 'notify': false,
     * 'notifySet': {
     *      'url': `${ENV_PATH}/sounds/default.ogg`,
     *      'volume': 50,
     *      'mail': true,
     *      'journal': true,
     *      'feed': false
     *  },
     */
    'bodystyle': true,
    'bodystyleSet': {
        'url': `${strings_1.ENV_PATH}/backgrounds/default.png`,
        'color': '#DAE1E8',
        'urlchecked': true,
        'colorchecked': false
    },
    'weather': false,
    'weatherSet': {
        'interval': 3600,
        'time': 0,
        'city': null,
        'language': 'ru',
        'units': 'metric',
        'key': '5f11ea40424990937175d20a072e0c72'
    }
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.warn = exports.info = exports.log = void 0;
const ts_debug_1 = __webpack_require__(16);
const logger = new ts_debug_1.Debugger(console, true, '[S+]: ');
const styles = [
    'background: steelblue',
    'background: green',
    'background: darkorange',
    'background: darkred'
];
exports.log = (str, obj) => logger.log('%c' + str, styles[0], obj);
exports.info = (str, obj) => logger.info('%c' + str, styles[1], obj);
exports.warn = (str, obj) => logger.warn('%c' + str, styles[2], obj);
exports.error = (str, obj) => logger.error('%c' + str, styles[3], obj);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsRecentSmiles = exports.settingsBackupMenu = exports.settingsBackground = exports.videoSpeedPlayback = exports.settingsFeatures = exports.settingsWeather = exports.settingsFriends = exports.settingsLogMenu = exports.disableRedirect = exports.settingsNotify = exports.playerDownload = exports.hiddenRightbar = exports.deleteComments = exports.weatherWidget = exports.sidebarButton = exports.galleryRotate = exports.friendsOnline = exports.deleteReaders = exports.bypassProfile = exports.stickyHeader = exports.settingsMenu = exports.recentSmiles = exports.freeStickers = exports.favoriteUser = exports.checkUpdates = exports.blockedFiles = exports.betaFeatures = exports.soundNotify = exports.karmaAccept = exports.firstLaunch = exports.deleteBlogs = exports.coinsAccept = exports.apiDebugger = exports.userOnline = exports.userStatus = exports.scrollMove = exports.getUpdater = exports.setStyles = exports.oldHeader = exports.ipWhois = exports.adBlock = void 0;
const adBlock_1 = __webpack_require__(13);
Object.defineProperty(exports, "adBlock", { enumerable: true, get: function () { return adBlock_1.adBlock; } });
const oldHeader_1 = __webpack_require__(35);
Object.defineProperty(exports, "oldHeader", { enumerable: true, get: function () { return oldHeader_1.oldHeader; } });
const setStyles_1 = __webpack_require__(9);
Object.defineProperty(exports, "setStyles", { enumerable: true, get: function () { return setStyles_1.setStyles; } });
const scrollMove_1 = __webpack_require__(36);
Object.defineProperty(exports, "scrollMove", { enumerable: true, get: function () { return scrollMove_1.scrollMove; } });
const userStatus_1 = __webpack_require__(37);
Object.defineProperty(exports, "userStatus", { enumerable: true, get: function () { return userStatus_1.userStatus; } });
const userOnline_1 = __webpack_require__(38);
Object.defineProperty(exports, "userOnline", { enumerable: true, get: function () { return userOnline_1.userOnline; } });
const apiDebugger_1 = __webpack_require__(39);
Object.defineProperty(exports, "apiDebugger", { enumerable: true, get: function () { return apiDebugger_1.apiDebugger; } });
const coinsAccept_1 = __webpack_require__(40);
Object.defineProperty(exports, "coinsAccept", { enumerable: true, get: function () { return coinsAccept_1.coinsAccept; } });
const deleteBlogs_1 = __webpack_require__(41);
Object.defineProperty(exports, "deleteBlogs", { enumerable: true, get: function () { return deleteBlogs_1.deleteBlogs; } });
const firstLaunch_1 = __webpack_require__(42);
Object.defineProperty(exports, "firstLaunch", { enumerable: true, get: function () { return firstLaunch_1.firstLaunch; } });
const karmaAccept_1 = __webpack_require__(43);
Object.defineProperty(exports, "karmaAccept", { enumerable: true, get: function () { return karmaAccept_1.karmaAccept; } });
const soundNotify_1 = __webpack_require__(44);
Object.defineProperty(exports, "soundNotify", { enumerable: true, get: function () { return soundNotify_1.soundNotify; } });
const betaFeatures_1 = __webpack_require__(45);
Object.defineProperty(exports, "betaFeatures", { enumerable: true, get: function () { return betaFeatures_1.betaFeatures; } });
const blockedFiles_1 = __webpack_require__(46);
Object.defineProperty(exports, "blockedFiles", { enumerable: true, get: function () { return blockedFiles_1.blockedFiles; } });
const favoriteUser_1 = __webpack_require__(47);
Object.defineProperty(exports, "favoriteUser", { enumerable: true, get: function () { return favoriteUser_1.favoriteUser; } });
const freeStickers_1 = __webpack_require__(48);
Object.defineProperty(exports, "freeStickers", { enumerable: true, get: function () { return freeStickers_1.freeStickers; } });
const recentSmiles_1 = __webpack_require__(49);
Object.defineProperty(exports, "recentSmiles", { enumerable: true, get: function () { return recentSmiles_1.recentSmiles; } });
const settingsMenu_1 = __webpack_require__(50);
Object.defineProperty(exports, "settingsMenu", { enumerable: true, get: function () { return settingsMenu_1.settingsMenu; } });
const stickyHeader_1 = __webpack_require__(51);
Object.defineProperty(exports, "stickyHeader", { enumerable: true, get: function () { return stickyHeader_1.stickyHeader; } });
const bypassProfile_1 = __webpack_require__(52);
Object.defineProperty(exports, "bypassProfile", { enumerable: true, get: function () { return bypassProfile_1.bypassProfile; } });
const deleteReaders_1 = __webpack_require__(53);
Object.defineProperty(exports, "deleteReaders", { enumerable: true, get: function () { return deleteReaders_1.deleteReaders; } });
const friendsOnline_1 = __webpack_require__(54);
Object.defineProperty(exports, "friendsOnline", { enumerable: true, get: function () { return friendsOnline_1.friendsOnline; } });
const galleryRotate_1 = __webpack_require__(55);
Object.defineProperty(exports, "galleryRotate", { enumerable: true, get: function () { return galleryRotate_1.galleryRotate; } });
const sidebarButton_1 = __webpack_require__(56);
Object.defineProperty(exports, "sidebarButton", { enumerable: true, get: function () { return sidebarButton_1.sidebarButton; } });
const weatherWidget_1 = __webpack_require__(57);
Object.defineProperty(exports, "weatherWidget", { enumerable: true, get: function () { return weatherWidget_1.weatherWidget; } });
const deleteComments_1 = __webpack_require__(58);
Object.defineProperty(exports, "deleteComments", { enumerable: true, get: function () { return deleteComments_1.deleteComments; } });
const hiddenRightbar_1 = __webpack_require__(59);
Object.defineProperty(exports, "hiddenRightbar", { enumerable: true, get: function () { return hiddenRightbar_1.hiddenRightbar; } });
const playerDownload_1 = __webpack_require__(60);
Object.defineProperty(exports, "playerDownload", { enumerable: true, get: function () { return playerDownload_1.playerDownload; } });
const settingsNotify_1 = __webpack_require__(61);
Object.defineProperty(exports, "settingsNotify", { enumerable: true, get: function () { return settingsNotify_1.settingsNotify; } });
const disableRedirect_1 = __webpack_require__(62);
Object.defineProperty(exports, "disableRedirect", { enumerable: true, get: function () { return disableRedirect_1.disableRedirect; } });
const settingsLogMenu_1 = __webpack_require__(63);
Object.defineProperty(exports, "settingsLogMenu", { enumerable: true, get: function () { return settingsLogMenu_1.settingsLogMenu; } });
const settingsFriends_1 = __webpack_require__(64);
Object.defineProperty(exports, "settingsFriends", { enumerable: true, get: function () { return settingsFriends_1.settingsFriends; } });
const settingsFeatures_1 = __webpack_require__(65);
Object.defineProperty(exports, "settingsFeatures", { enumerable: true, get: function () { return settingsFeatures_1.settingsFeatures; } });
const videoSpeedPlayback_1 = __webpack_require__(67);
Object.defineProperty(exports, "videoSpeedPlayback", { enumerable: true, get: function () { return videoSpeedPlayback_1.videoSpeedPlayback; } });
const settingsBackground_1 = __webpack_require__(68);
Object.defineProperty(exports, "settingsBackground", { enumerable: true, get: function () { return settingsBackground_1.settingsBackground; } });
const settingsBackupMenu_1 = __webpack_require__(69);
Object.defineProperty(exports, "settingsBackupMenu", { enumerable: true, get: function () { return settingsBackupMenu_1.settingsBackupMenu; } });
const checkUpdates_1 = __webpack_require__(11);
Object.defineProperty(exports, "checkUpdates", { enumerable: true, get: function () { return checkUpdates_1.checkUpdates; } });
Object.defineProperty(exports, "getUpdater", { enumerable: true, get: function () { return checkUpdates_1.getUpdater; } });
const settingsWeather_1 = __webpack_require__(10);
Object.defineProperty(exports, "settingsWeather", { enumerable: true, get: function () { return settingsWeather_1.settingsWeather; } });
Object.defineProperty(exports, "ipWhois", { enumerable: true, get: function () { return settingsWeather_1.ipWhois; } });
const settingsRecentSmiles_1 = __webpack_require__(71);
Object.defineProperty(exports, "settingsRecentSmiles", { enumerable: true, get: function () { return settingsRecentSmiles_1.settingsRecentSmiles; } });


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.css = void 0;
const trim_1 = __webpack_require__(6);
/**
 * Используется для создание стилей
 * @param elem
 * @param css
 */
exports.css = (elem, css) => {
    let list = css.split(';');
    for (let i in list) {
        if (trim_1.trim(list[i]) !== '') {
            let valList = trim_1.trim(list[i]).split(':');
            if (valList[0].indexOf('-') !== -1) {
                valList[0] = valList[0].replace(/\-([a-z]{1})/g, (e) => {
                    return e.replace('-', '').toUpperCase();
                });
            }
            if (valList[1] !== undefined) {
                elem.style[trim_1.trim(valList[0])] = trim_1.trim(valList[1]);
            }
        }
    }
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.trim = void 0;
/**
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 * @param str
 */
exports.trim = (str) => str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.extend = void 0;
/**
 * Используется для комбинирования двух объектов
 * @param obj1
 * @param obj2
 */
exports.extend = (obj1, obj2) => {
    if (obj2) {
        for (let i in obj2) {
            if (obj2.hasOwnProperty(i)) {
                obj1[i] = obj2[i];
            }
        }
    }
    return obj1;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setCookie = void 0;
const extend_1 = __webpack_require__(7);
const strings_1 = __webpack_require__(1);
/**
 * Создание куки
 * @param key Название куки
 * @param value Строка с значениеми куки должна быть как JSON.stringfy()
 * @param opts { expires: -1 } для сброса (используется в delCookie.ts)
 */
exports.setCookie = (key, value, opts) => {
    opts = extend_1.extend({
        path: '/',
        expires: 365,
        secure: false,
        domain: '.' + strings_1.BASE_URL
    }, opts);
    if (opts.expires && !(opts.expires instanceof Date))
        opts.expires = new Date(+new Date + 1000 * 3600 * 24 * opts.expires);
    let query = value !== null ? encodeURIComponent(key) + '=' + encodeURIComponent(value) : encodeURIComponent(key) + '=';
    if (opts.expires)
        query += '; expires=' + opts.expires.toUTCString();
    if (opts.domain)
        query += '; domain=' + opts.domain;
    if (opts.path)
        query += '; path=' + opts.path;
    if (opts.secure)
        query += '; secure';
    document.cookie = query;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setStyles = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
const settings_1 = __webpack_require__(2);
exports.setStyles = () => {
    let stl = utils_1.qs('#SP_PLUS_INJSTYLE') || utils_1.ce('style', {
        id: 'SP_PLUS_INJSTYLE',
        type: 'text/css'
    });
    if (!utils_1.qs('#SP_STICKER_CSS')) {
        let sticker = utils_1.ce('link', {
            rel: 'stylesheet',
            type: 'text/css',
            id: 'SP_STICKER_CSS',
            href: `${strings_1.ENV_PATH}/css/sticker.css?r=${strings_1.REVISION}`
        });
        document.getElementsByTagName('head')[0].appendChild(sticker);
    }
    if (!utils_1.qs('#SP_PLUS_MENU')) {
        let menu = utils_1.ce('link', {
            rel: 'stylesheet',
            type: 'text/css',
            id: 'SP_PLUS_MENU',
            href: `${strings_1.ENV_PATH}/css/menu.css?r=${strings_1.REVISION}`
        });
        document.getElementsByTagName('head')[0].appendChild(menu);
    }
    if (settings_1._SETTINGS.bodystyle) {
        if (settings_1._SETTINGS.bodystyleSet.url && settings_1._SETTINGS.bodystyleSet.urlchecked)
            stl.innerHTML = `body,#main_wrap{background-image:url(${settings_1._SETTINGS.bodystyleSet.url})}`;
        if (settings_1._SETTINGS.bodystyleSet.color && settings_1._SETTINGS.bodystyleSet.colorchecked)
            stl.innerHTML = `body,#main_wrap{background-color:${settings_1._SETTINGS.bodystyleSet.color}}`;
    }
    document.getElementsByTagName('head')[0].appendChild(stl);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ipWhois = exports.getWeather = exports.settingsWeather = void 0;
const utils_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
/**
 * Инициализация выпадающего доп. меню настроек виджета погоды
 * @param e #weather
 */
exports.settingsWeather = async (e) => {
    var _a, _b;
    /**
     * Отключаем скрытие правого меню, если оно включено
     */
    if (settings_1._SETTINGS.hrightbar)
        utils_1.qs('#hrightbar').click();
    // Инициализация
    (_a = settings_1._SETTINGS.weatherSet.city) !== null && _a !== void 0 ? _a : exports.ipWhois();
    let masWarp = utils_1.ce('div', { id: 'SP_WEATHER_SETTINGS', class: 'sp_settings-wrap' });
    let locationLbl = utils_1.ce('label', {
        html: 'API-Ключ:<div class="label__desc"><a href="https://openweathermap.org/appid" target="_blank">Получить ключ</a></div>',
        class: 'label'
    });
    let apiKey = utils_1.ce('input', {
        type: 'text',
        class: 'text-input',
        style: 'margin-bottom: 7px',
        size: '32',
        value: settings_1._SETTINGS.weatherSet.key
    });
    apiKey.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            if (/^[a-f0-9]{32}$/i.test(e.target.value)) {
                utils_1.setSettings('weatherSet.key', e.target.value);
                exports.getWeather();
                apiKey.classList.remove('sp-input-error');
            }
            else {
                apiKey.classList.add('sp-input-error');
            }
        }
    });
    let cityLbl = utils_1.ce('label', { html: 'Город:', class: 'label' });
    let cityInp = utils_1.ce('input', {
        type: 'text',
        class: 'text-input',
        style: 'margin-bottom: 7px',
        size: '32',
        id: 'SP-CITY-INPUT',
        value: settings_1._SETTINGS.weatherSet.city
    });
    cityInp.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            if (/^([a-zA-Zа-яА-ЯёЁ]+[-]?[a-zA-Zа-яА-ЯёЁ]*[-]?[a-zA-Zа-яА-ЯёЁ]*[-]?[a-zA-Zа-яА-ЯёЁ]*)$/i.test(e.target.value)) {
                utils_1.setSettings('weatherSet.city', e.target.value);
                exports.getWeather();
                cityInp.classList.remove('sp-input-error');
            }
            else {
                cityInp.classList.add('sp-input-error');
            }
        }
    });
    let intervalLbl = utils_1.ce('label', {
        html: 'Интервал обновления:<div class="label__desc">от 1 до 360 минут</a></div>',
        class: 'label'
    });
    let interval = utils_1.ce('input', {
        type: 'text',
        class: 'text-input',
        style: 'margin-bottom: 7px',
        size: 4,
        attr: { maxlength: 3 },
        value: settings_1._SETTINGS.weatherSet.interval / 60
    });
    interval.addEventListener('input', (e) => {
        // от 1 минуты до 360 минут ¯\_(ツ)_/¯
        if (/^([1-9]|[1-8][0-9]|9[0-9]|[12][0-9]{2}|3[0-5][0-9]|360)$/i.test(e.target.value)) {
            utils_1.setSettings('weatherSet.interval', e.target.value * 60);
            interval.classList.remove('sp-input-error');
        }
        else {
            interval.classList.add('sp-input-error');
        }
    });
    masWarp.appendChild(cityLbl);
    masWarp.appendChild(cityInp);
    masWarp.appendChild(locationLbl);
    masWarp.appendChild(apiKey);
    masWarp.appendChild(intervalLbl);
    masWarp.appendChild(interval);
    (_b = e.parentElement) === null || _b === void 0 ? void 0 : _b.after(masWarp);
};
/**
 * Получаем погоду через openweathermap.org
 */
exports.getWeather = async () => {
    const { language, units, city, key } = settings_1._SETTINGS.weatherSet;
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?lang=${language}&units=${units}&q=${city}&appid=${key}`;
        await utils_1.http('GET', url, false).then(e => {
            var _a;
            const json = e.parsedBody;
            // Город не найден
            if (e.status === 404) {
                utils_1.messageBox('Виджет погоды', `Город <b>${city}</b> не найден`, true, 5);
                return false;
            }
            // если есть другие ошибки
            if (json === null || json === void 0 ? void 0 : json.message) {
                utils_1.messageBox('Виджет погоды', json.message, true, 5);
                return false;
            }
            if (utils_1.qs('#SP-CITY-INPUT')) {
                utils_1.qs('#SP-CITY-INPUT').value = json.name;
            }
            (_a = utils_1.qs('#SP_WIDGET_WEATHER')) === null || _a === void 0 ? void 0 : _a.remove();
            if ((json === null || json === void 0 ? void 0 : json.cod) === 200) {
                utils_1.setSettings('weatherSet.city', json.name);
                utils_1.setCookie('SP_WEATHER', JSON.stringify(json));
            }
        });
    }
    catch (e) {
        utils_1.error('openweathermap', e);
    }
};
/**
 * Инициализация виджета погоды ¯\_(ツ)_/¯
 * Получаем город пользователя
 */
exports.ipWhois = async () => {
    try {
        await utils_1.http('GET', 'https://ipwhois.app/json/?objects=city,success&lang=ru', false).then(e => {
            const json = e.parsedBody;
            if (json === null || json === void 0 ? void 0 : json.success) {
                utils_1.setSettings('weatherSet.city', json.city);
                exports.getWeather();
            }
            else {
                utils_1.messageBox('Ошибка ipWhois', 'Обратитесь к разработчику!', true);
            }
        });
    }
    catch (e) {
        utils_1.error('ipWhois', e);
    }
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUpdates = exports.getUpdater = void 0;
const utils_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
const strings_1 = __webpack_require__(1);
/**
 * Получаем историю обновлений
 * @param callback
 */
exports.getUpdater = (callback) => {
    try {
        utils_1.http('GET', `${strings_1.ENV_PATH}/updater.json?r=${strings_1.REVISION}`, false).then(e => {
            const json = e.parsedBody;
            utils_1.info('Проверка обновлений', e);
            if (e.status === 200 && (json === null || json === void 0 ? void 0 : json.history)) {
                return callback(json);
            }
        });
    }
    catch (e) {
        utils_1.error('getUpdater.ts', e);
    }
};
exports.checkUpdates = () => {
    try {
        exports.getUpdater((json) => {
            let hideVer = 0;
            if (settings_1._SETTINGS.upVersion)
                hideVer = settings_1._SETTINGS.upVersion;
            strings_1.DATA.VERSION = Math.max(hideVer, strings_1.DATA.VERSION);
            if (json.history[0].build > strings_1.DATA.VERSION) {
                utils_1.messageBox(`Доступна новая версия Spaces+ ${utils_1.rever(json.history[0].build)}`, `<div class="pad_t_a"></div>${json.history[0].changes}<div id="SP_UPDATER_BUTTONS" class="pad_t_a"><a class="btn btn_green btn_input" href="${strings_1.ENV_PATH}/spaces-plus.user.js?r=${strings_1.REVISION}" onclick="document.body.removeChild(this.parentNode.parentNode.parentNode.parentNode)">Обновить</a></div>`, true);
                if (utils_1.qs('#SP_PLUS_ALERT')) {
                    const hide = utils_1.ce('a', {
                        href: '#',
                        class: 'btn btn_white btn_input right sticker-close_btn',
                        html: 'Больше не показывать',
                        onclick: () => {
                            utils_1.setSettings('upVersion', json.history[0].build);
                            utils_1.qs('#SP_PLUS_ALERT').remove();
                            return false;
                        }
                    });
                    utils_1.qs('#SP_UPDATER_BUTTONS').appendChild(hide);
                }
            }
        });
    }
    catch (e) {
        utils_1.error('checkUpdates.ts', e);
    }
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = __webpack_require__(4);
const strings_1 = __webpack_require__(1);
const utils_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
(() => {
    if (utils_1.qs('#main_wrap')) {
        try {
            /**
             * ! Для работы Spaces+ необходима авторизация
             * * 00000 - Авторизированы
             * * 01001 - Требуется авторизация
             */
            utils_1.http('POST', `${strings_1.SPACES}/api/session/check`, false).then(e => {
                var _a, _b;
                if (e.status === 200 && e.parsedBody) {
                    if (components_1.userStatus(e.parsedBody.code)) {
                        // Временно храним ник
                        strings_1.DATA.USERNAME = (_a = e.parsedBody) === null || _a === void 0 ? void 0 : _a.attributes.name;
                        // Временно храним CK
                        strings_1.DATA.CK = (_b = e.parsedBody) === null || _b === void 0 ? void 0 : _b.attributes.CK;
                        // Инициализируем работу
                        init();
                    }
                    utils_1.info('api/session/check', e);
                }
            });
        }
        catch (e) {
            utils_1.error('main.ts', e);
        }
    }
})();
const init = () => {
    // Script error.
    window.onerror = () => false;
    /**
     * ! Технические функции
     * ? Срабатывают один раз после загрузки страницы
     */
    components_1.firstLaunch();
    components_1.checkUpdates();
    components_1.sidebarButton();
    utils_1.readSettings();
    components_1.setStyles();
    /**
     * ? Тут перечислены функции, которые срабатывают единоразово
     * ? далее их изменения отслеживаются в components/settingsMenu.ts
     */
    components_1.oldHeader(settings_1._SETTINGS.oldheader);
    components_1.apiDebugger(settings_1._SETTINGS.apidebug);
    components_1.freeStickers(settings_1._SETTINGS.sticker);
    components_1.friendsOnline(settings_1._SETTINGS.friendsOn);
    components_1.stickyHeader(settings_1._SETTINGS.stickyheader);
    /**
     * ? Единоразовая инициализация
     * ! Только для PC версии сайта
     */
    if (strings_1.DEVICE.id === 4) {
        components_1.scrollMove(settings_1._SETTINGS.rscroll);
        components_1.hiddenRightbar(settings_1._SETTINGS.hrightbar);
    }
    /**
     * ? Тут перечислены функции, которым необходимо постоянно
     * ? отслеживать прочее состояния на странице браузера
     * ! Для оптимальной работы выставлен интервал обновления в 200ms
     */
    setInterval(() => {
        if (settings_1._SETTINGS.adblock)
            components_1.adBlock();
        if (settings_1._SETTINGS.beta)
            components_1.betaFeatures();
        if (settings_1._SETTINGS.coins)
            components_1.coinsAccept();
        if (settings_1._SETTINGS.karma)
            components_1.karmaAccept();
        if (settings_1._SETTINGS.online)
            components_1.userOnline();
        // if (_SETTINGS.notify) soundNotify()
        if (settings_1._SETTINGS.recents)
            components_1.recentSmiles();
        if (settings_1._SETTINGS.grotate)
            components_1.galleryRotate();
        if (settings_1._SETTINGS.favorite)
            components_1.favoriteUser();
        if (settings_1._SETTINGS.weather)
            components_1.weatherWidget();
        if (settings_1._SETTINGS.readersd)
            components_1.deleteReaders();
        if (settings_1._SETTINGS.comments)
            components_1.deleteComments();
        if (settings_1._SETTINGS.playerdn)
            components_1.playerDownload();
        if (settings_1._SETTINGS.userbypass)
            components_1.bypassProfile();
        if (settings_1._SETTINGS.dredirect)
            components_1.disableRedirect();
        if (settings_1._SETTINGS.playback)
            components_1.videoSpeedPlayback();
        if (settings_1._SETTINGS.blogsd || strings_1.BASE_URL === 'spaces-blogs.com')
            components_1.deleteBlogs();
        if (settings_1._SETTINGS.blockedfiles || strings_1.BASE_URL === 'spac1.net')
            components_1.blockedFiles();
        components_1.settingsMenu();
    }, 200);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.adBlock = void 0;
const utils_1 = __webpack_require__(0);
exports.adBlock = () => {
    try {
        // Удаляем всплывающую рекламу
        utils_1.qsa('img[src$="static/i/close3.png"]').forEach(e => { var _a, _b; return (_b = (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove(); });
        // Удаляем рекламу по атрибуту title
        utils_1.qsa('a[title="Реклама"').forEach(e => { var _a; return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.remove(); });
        // Удаляем виджет ВК в правой панели
        utils_1.qsa('#vk_groups').forEach(e => { var _a; return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.remove(); });
        // Прототипируем XMLHttpRequest для блокировки рекламы
        if (!utils_1.qs('#SP_PLUS_ADBLOCK')) {
            let protoAd = utils_1.ce('script', {
                type: 'text/javascript',
                id: 'SP_PLUS_ADBLOCK',
                html: 'var rawOpen = XMLHttpRequest.prototype.open; XMLHttpRequest.prototype.open = function() { if (!this._hooked) { this._hooked = true; setupHook(this); }; rawOpen.apply(this, arguments); }; function setupHook(xhr) { function getter() { delete xhr.responseText; var ret = xhr.responseText; var json = JSON.parse(ret); json.reklama = ""; json.rightbar_reklama = ""; json.rightbar_app = ""; json.sidebar_reklama = ""; ret = JSON.stringify(json); setup(); return ret; }; function setup() { Object.defineProperty(xhr, "responseText", { get: getter, configurable: true }); } setup(); };'
            });
            document.getElementsByTagName('head')[0].appendChild(protoAd);
        }
    }
    catch (e) {
        utils_1.error('adBlock.ts', e);
    }
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ce = void 0;
const css_1 = __webpack_require__(5);
/**
 * Основополагающая функция для создания DOM
 * ? Пример работы:
 * * let div = ce('div', {
 * *     html: 'Hello, World!',
 * *     class: 'example classes',
 * *     style: 'background-color: red; padding: 10px; text-align: center',
 * *     id: 'input',
 * *     attr: { example: 'attribute' }
 * * })
 * *
 * * Вставляем в начале body
 * * document.body.prepend(div)
 * @param name
 * @param params
 */
exports.ce = (name, params) => {
    let elem = document.createElement(name);
    for (let i in params) {
        switch (i) {
            case 'html':
                elem.innerHTML = params[i];
                break;
            case 'style':
                css_1.css(elem, params[i]);
                break;
            case 'class':
                elem.className = params[i];
                break;
            case 'attr':
                for (let j in params[i]) {
                    elem.setAttribute(j, params[i][j]);
                }
                break;
            default:
                elem[i] = params[i];
        }
    }
    return elem;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
const console_1 = __webpack_require__(3);
/**
 * Основополагающая функция для формирования HTTP запросов
 * Для использования получаемого JSON используйте Generic interface
 * ? Пример использования смотрите в components/checkUpdates.ts
 * @param method GET/POST
 * @param url Ссылка запроса
 * @param proxy Тип запроса: True - получаем JSON со Spaces, False - отправляем body
 * @param body Строка запроса
 */
async function http(method, url, proxy, body) {
    // X-Proxy используется на Spaces.ru для получения JSON страницы, а x-www-form-urlencoded для отправки body
    const header = proxy ? { 'X-Proxy': 'spaces' } : { 'Content-Type': 'application/x-www-form-urlencoded' };
    // Запрос поддерживает Generic interface
    const response = await fetch(url, {
        method: method,
        headers: header,
        body: body
    });
    try {
        response.parsedBody = await response.json();
    }
    catch (e) {
        console_1.error('http.ts', e);
    }
    return response;
}
exports.http = http;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debugger", function() { return Debugger; });
var Debugger = /** @class */ (function () {
    function Debugger(console, isEnabled, prefix) {
        if (isEnabled === void 0) { isEnabled = true; }
        if (prefix === void 0) { prefix = ''; }
        this.prefix = '';
        this.console = console;
        this.isEnabled = isEnabled;
        this.prefix = prefix;
    }
    Object.defineProperty(Debugger.prototype, "memory", {
        get: function () {
            return this.doIfEnabled(function () { return console.hasOwnProperty('memory') && console.memory; });
        },
        enumerable: true,
        configurable: true
    });
    Debugger.prototype.assert = function (value, message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            optionalParams[_i - 2] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).assert.apply(_a, [value, message].concat(optionalParams));
        });
    };
    Debugger.prototype.countReset = function (label) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.countReset(label); });
    };
    Debugger.prototype.dir = function (obj) {
        var _this = this;
        var options = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            options[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).dir.apply(_a, [obj].concat(options));
        });
    };
    Debugger.prototype.error = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).error.apply(_a, [_this.addPrefix(message)].concat(optionalParams));
        });
    };
    Debugger.prototype.info = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).info.apply(_a, [_this.addPrefix(message)].concat(optionalParams));
        });
    };
    Debugger.prototype.log = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).log.apply(_a, [_this.addPrefix(message)].concat(optionalParams));
        });
    };
    Debugger.prototype.time = function (label) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.time(label); });
    };
    Debugger.prototype.timeEnd = function (label) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.timeEnd(label); });
    };
    Debugger.prototype.timeLog = function (label) {
        var _this = this;
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () { return _this.console.timeLog(label, data); });
    };
    Debugger.prototype.timeStamp = function (label) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.timeStamp(label); });
    };
    Debugger.prototype.timeline = function (label) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.timeline(label); });
    };
    Debugger.prototype.timelineEnd = function (label) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.timelineEnd(label); });
    };
    Debugger.prototype.trace = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).trace.apply(_a, [_this.addPrefix(message)].concat(optionalParams));
        });
    };
    Debugger.prototype.warn = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).warn.apply(_a, [_this.addPrefix(message)].concat(optionalParams));
        });
    };
    Debugger.prototype.clear = function () {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.clear(); });
    };
    Debugger.prototype.count = function (countTitle) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.count(); });
    };
    Debugger.prototype.debug = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).debug.apply(_a, [_this.addPrefix(message)].concat(optionalParams));
        });
    };
    Debugger.prototype.dirxml = function (value) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.dirxml(value); });
    };
    Debugger.prototype.exception = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).exception.apply(_a, [_this.addPrefix(message)].concat(optionalParams));
        });
    };
    Debugger.prototype.group = function (groupTitle) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.group(groupTitle); });
    };
    Debugger.prototype.groupCollapsed = function (groupTitle) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.groupCollapsed(groupTitle); });
    };
    Debugger.prototype.groupEnd = function () {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.groupEnd(); });
    };
    Debugger.prototype.markTimeline = function (label) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.markTimeline(label); });
    };
    Debugger.prototype.profile = function (reportName) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.profile(reportName); });
    };
    Debugger.prototype.profileEnd = function () {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.profileEnd(); });
    };
    Debugger.prototype.table = function () {
        var _this = this;
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).table.apply(_a, data);
        });
    };
    /**
     * Throws usual error in debug mode and non-blocking otherwise
     * @param {Error} error
     */
    Debugger.prototype.throw = function (error) {
        error.message = this.addPrefix(error.message);
        if (this.isEnabled) {
            throw error;
        }
        setTimeout(function () {
            throw error;
        });
    };
    Debugger.prototype.doIfEnabled = function (action) {
        if (this.isEnabled) {
            return action();
        }
    };
    Debugger.prototype.addPrefix = function (message) {
        if (this.prefix && (typeof message === 'string' || !message)) {
            return this.prefix + message;
        }
        return message;
    };
    return Debugger;
}());



/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.qsa = exports.qs = void 0;
/**
 * querySelector _/ ( •_•) /
 * @param e
 */
exports.qs = (e) => document.querySelector(e);
/**
 * querySelectorAll ᕦ(ツ)ᕤ
 * @param e
 */
exports.qsa = (e) => document.querySelectorAll(e);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rever = void 0;
/**
 * Сплитит строку и вставляет точки (используется скриптом 1 раз для вывода версии ¯\_(ツ)_/¯)
 * @param s
 */
exports.rever = (s) => s ? s.toString().split('').join('.') : s;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getPath = void 0;
/**
 * * Используется для получения pathname
 * @param number
 */
exports.getPath = (index) => {
    let path = document.location.pathname;
    let str = path.replace(/\/\s*$/, '').split('/');
    return index ? str[index] : path;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpper = void 0;
/**
 * Первый символ в строке делаем toUpperCase
 * @param str
 */
exports.toUpper = (str) => str[0].toUpperCase() + str.substring(1);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuery = void 0;
const console_1 = __webpack_require__(3);
/**
 * Ищем определенный GET параметр в ссылке
 * @param name
 */
exports.getQuery = (name) => {
    let r, query = document.location.search;
    try {
        name = name.toLowerCase();
        if (query.toLowerCase().indexOf(name) !== -1) {
            query.substring(1).split('&').forEach((param) => {
                let params = param.split('=');
                if (params[0].toLowerCase() === name) {
                    r = params[1];
                }
            });
        }
        return r;
    }
    catch (e) {
        console_1.error('getQuery.ts', e);
    }
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.declOfNum = void 0;
/**
 * ? Определеят склонение для слов в зависимости от входящего числа
 * Пример использование:
 * * const count = 30
 * * const con = declOfNum(count, ['я', 'я', 'ей'])
 * * console.log(`${count} читател${con}?`)
 * * Output: 30 читателей
 * @param number Число
 * @param titles Объект строк
 */
exports.declOfNum = (number, titles) => {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.delCookie = void 0;
const setCookie_1 = __webpack_require__(8);
/**
 * Удаляем куку
 * @param name Название куки
 */
exports.delCookie = (name) => setCookie_1.setCookie(name, null, { expires: -1 });


/***/ }),
/* 24 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"spaces-plus\",\"description\":\"🚀 Powerful userscript for Spaces.ru\",\"homepage\":\"https://spaces-dev.github.io/SpacesPlus\",\"version\":\"3.1.2\",\"author\":{\"name\":\"Vitalij Ryndin\",\"email\":\"sys@crashmax.ru\",\"url\":\"https://crashmax.ru\"},\"scripts\":{\"dev\":\"cross-env NODE_ENV=development webpack-dev-server --config-name main --host localhost --watch-poll\",\"build\":\"cross-env NODE_ENV=production webpack --progress\"},\"devDependencies\":{\"@types/node\":\"^14.11.8\",\"@types/resize-observer-browser\":\"^0.1.4\",\"@types/webpack\":\"^4.41.22\",\"@types/webpack-dev-server\":\"^3.11.0\",\"clean-webpack-plugin\":\"^3.0.0\",\"copy-webpack-plugin\":\"^6.2.1\",\"cross-env\":\"^7.0.2\",\"json-beautify\":\"^1.1.1\",\"optimize-css-assets-webpack-plugin\":\"^5.0.4\",\"ts-debug\":\"^1.3.0\",\"ts-loader\":\"^8.0.4\",\"ts-node\":\"^9.0.0\",\"typescript\":\"^4.0.2\",\"webpack\":\"^4.44.2\",\"webpack-cli\":\"^3.3.12\",\"webpack-dev-server\":\"^3.11.0\",\"webpack-userscript\":\"^2.5.6\",\"webpack-zip-files-plugin\":\"^1.0.0\"}}");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookie = void 0;
/**
 * Получаем строку данных из куки
 * @param name Название куки
 */
exports.getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getParams = void 0;
/**
 * Получаем GET параметры из ссылки
 * @param url
 */
exports.getParams = (url) => {
    const params = {};
    let parser = document.createElement('a');
    parser.href = url;
    let query = parser.search.substring(1);
    let vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.playSound = void 0;
/**
 * Воспроизводит аудиофайл
 * @param file Cсылка на аудиофайл
 * @param volume Уровень громкости (1 / 100 = 0.01 - 1%)
 */
exports.playSound = (file, volume) => {
    let audio = new Audio(file);
    audio.volume = volume / 100;
    audio.play();
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmBox = void 0;
const index_1 = __webpack_require__(0);
/**
 * Всплывающее окно с кнопками Да/Отмена
 * @param text Текст
 * @param warn Предупреждение (Это действие нельзя будет отменить.)
 * @param callback return in function
 */
exports.confirmBox = (text, warn, callback) => {
    let Alert = index_1.qs('#SP_PLUS_ALERT');
    let Confirm = index_1.qs('#SP_PLUS_CONFIRM');
    let successBtn = index_1.ce('button', { html: 'Да', href: '#', class: 'btn btn_red btn_input' });
    let cancelBtn = index_1.ce('a', { html: 'Отмена', href: '#', class: 'btn btn_white btn_input right sticker-close_btn' });
    let warningText = index_1.ce('small', { class: 'pad_t_a grey', html: 'Это действие нельзя будет отменить.' });
    let container = index_1.ce('div', { class: 'content-item3 wbg oh', html: text + '<div class="pad_t_a"></div>' });
    let br = index_1.ce('div', { class: 'pad_t_a' });
    // Скрываем раннее созданные уводомления
    Alert === null || Alert === void 0 ? void 0 : Alert.remove();
    Confirm === null || Confirm === void 0 ? void 0 : Confirm.remove();
    // Подтверждение сообщения
    successBtn.onclick = () => {
        rm();
        callback();
        return false;
    };
    // Отмена сообщения - закрытие окна
    cancelBtn.onclick = () => {
        rm();
        return false;
    };
    let Main = index_1.ce('div', { class: 'sticker sp-sticker-anim', id: 'SP_PLUS_CONFIRM' });
    if (warn)
        container.appendChild(warningText);
    container.appendChild(br);
    container.appendChild(successBtn);
    container.appendChild(cancelBtn);
    Main.appendChild(container);
    document.body.appendChild(Main);
};
const rm = () => index_1.qs('#SP_PLUS_CONFIRM').remove();


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUrl = void 0;
/**
 * Проверяем валидность ссылок
 * @param url ссылка
 */
exports.isValidUrl = (url) => {
    let regURL = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g);
    return regURL !== null;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.messageBox = void 0;
const index_1 = __webpack_require__(0);
/**
 * @param title Заголовок уведомления
 * @param content Текст уведомления
 * @param close Крестик закрытия уведомления
 * @param timer Время до автоматического закрытия уведомления в секундах
 */
exports.messageBox = (title, content, close, timer) => {
    let Alert = index_1.qs('#SP_PLUS_ALERT');
    let Confirm = index_1.qs('#SP_PLUS_CONFIRM');
    let Container = index_1.ce('div', {
        class: 'sticker w400 sp-sticker-anim',
        id: 'SP_PLUS_ALERT',
    });
    // Скрываем раннее созданные уводомления
    Alert === null || Alert === void 0 ? void 0 : Alert.remove();
    Confirm === null || Confirm === void 0 ? void 0 : Confirm.remove();
    let Main = index_1.ce('div', {
        class: 'content-item3 wbg oh',
        html: (close ?
            '<span class="sp sp-remove-grey pointer right notif_close close_h" onclick="document.body.removeChild(this.parentNode.parentNode)" title="Закрыть"></span>' :
            '') + `${title}<div class="pad_t_a"></div><span style="font-size: 13px" class="grey">${content}</span>`
    });
    Container.appendChild(Main);
    document.body.appendChild(Container);
    // Автоматическое закрытие уведомления
    if (timer !== undefined) {
        setTimeout(() => {
            var _a, _b;
            (_b = (_a = Main.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(Container);
        }, timer * 1000);
    }
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.historyPush = void 0;
const console_1 = __webpack_require__(3);
/**
 * ? Функция необходима для перехода по ссылке в собственно созданные разделы на сайте или в настройках скрипта
 * ! Не работает без getQuery.ts
 * Пример работы:
 * * historyPush({
 * *    'sp_plus_settings': getQuery('sp_plus_settings'),
 * * }, `https://spaces.im/settings/?sp_plus_settings=1`, 'Настройки Spaces+')
 * @param state Объект
 * @param url Путь/ссылка на сайте, которую хотите открыть
 * @param title Заголовок на вкладке в браузере
 */
exports.historyPush = (state, url, title) => {
    try {
        document.title = title;
        history.pushState(state, title, url);
    }
    catch (e) {
        console_1.error('historyPush.ts', e);
    }
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyObject = void 0;
/**
 * * Add a new item to an object
 * * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param obj The original object
 * @param key The key for the item to add
 * @param value The value for the new key to add
 * @param index The position in the object to add the new key/value pair [optional]
 * @return {Object} An immutable clone of the original object, with the new key/value pair added
 */
exports.modifyObject = (obj, key, value, index) => {
    // Create a temp object and index variable
    let temp = {};
    let i = 0;
    // Loop through the original object
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            // If the indexes match, add the new item
            if (i === index && key && value) {
                temp[key] = value;
            }
            // Add the current item in the loop to the temp obj
            temp[prop] = obj[prop];
            // Increase the count
            i++;
        }
    }
    // If no index, add to the end
    if (!index && key && value) {
        temp[key] = value;
    }
    return temp;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.notification = void 0;
exports.notification = (title, body, time) => {
    // формируем настройки
    const options = {
        body: body,
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWRSURBVHgB7VpdTBxVFP5mFujCDgos7GKM2pTSQtcirYEYS5smlb5Io/hgDMEaH0wfjEkbNfFNfWxiY3zQqA9GafWBJmKMbQKUSAvYCIa6CKz8BvCh+9eFdn9oKex478zOsuzuzNzZJSGb9EsmLNxzyfm+e849955ZDgQ1NS0fcxzOiiJKkAMgvq4A4vcu15Vz3P79pz7nOPEschOfcrW1Lcu5onwyiN8rfK46T0FCqYRHjuMRgZ1GHrKCmPQ7p2lL8o3GrY6dMWRMQBSj0rNJgiPO8bGf8u+JtjIBhQQXs+OQLZmMCCjOP9b8Ckpb30Q0EkJwoBvBwV5s3PFBjkxeIkIdprZHD7Xh4N6TeLAWwvBEF8Zmesi4SSKdDRGOVGHR2BQR0egGhCMnUPHOBymjwYEeLHddxDohQh2jqtdVn8CpYx9usVsJejBwq4MQuRYjkRkRwwSomtHoOp660IH8cruqHSUS6OrAQ58b771xCSXFlWntKJGxmW6JyL2wN7YqCgl9MgYJyOpbiPq2NOqnQ73rRzSsNiMUsmnaUSLTi0MYmezC3ZBPIpIun5JhKi/f9wlY3ZeSMApr2xnkV1QyzTn//NdoOHgZQrEPy4HdWFuzpLUz7xLwpK0WjY7X8Lhgg9s/I+WL4jxdFY7LioC8i5hrHChrPc00o848gdaSq9LnsrIFHHBcReUTk2Q1KhDWWBG7tQqNzypEZhOIcAnhZZCAon7pq+3Y9UwVyxS8b/sK9nzflr8Jgg97q/vJSgjw+6o158tEWqXw8gTmU5ynYK7ElEBeuQ3FR08y2dvzvKgrnFAdrz/UiYKCMFjQ/MKZ2NadOsZEQC5ERP3WdrCiveyy5jir8xTmAkHxJCUPGAmIMFmJ+k3s6jcX92vauG87VBM6Gc7pntgnLmUVdAmI0gwRQtNLYIWe+hRzs8fBirGZ3tgulFEOyMlrKPbNE5o2dBeaZSTgvjOHJfdY7JyVCh0CsvNCUzOpumz7fl3hZMrOkwznrdfBiuHxrqTqvBWaBOJbp5HkLe3UHDei/krQjX9mezWrsQYB4+rTxNVT3zXRAlbcGL0UCx11N1VHFPWLCQFW6KlPsbTUABZsqs+phg+FCgHl2FCHwtrnwAKauHrqz84cl0KIBVOLN3XVh9poRuozbJ3Ov40mb/oDXCJUCeSVV2zbsYHCiPq0cAUjXigHOC2kISAXLnpVZAWL+q7Jl8GKG6MXIV9J9ctUioUcPiIsh18ECyx8mOnYECB3ARY4p7vJzczHFD4UaSlud+vD2LHhWnznERnuiikE5C2Lx/IvHWBBOGrBzbD61pj5sYFNwDQXGnnig7l/yYXcg4Kn98BkETT/yfXQEWmaPc8HwRTZMjby59vM4fP7X9/Bu7wAns+KAOKFY21pHnd7fsZDvz6RsVUHWYlGzK/tRlXBgkSEqj80+C5YQAvXbwMXiPMmpuSN+6rdlRBjNyE5semRmtYGluJGE/uAKwTvPNvR4dfrn2F8rk8iYCT/GNsqYry40YdWaHo31iOycK4NjrJ6HDt8WrUvREHV/7LzrZj6JhgB46Wei+8M9Fn3+6Q24r3BbpiKhLSXfNrYCg/1wRtYwAhpJdKLud26R2qfJIO2Gv/zjCd057adQCIRfnObi0QQHv2DkOkBX2SJE1l1ORH46VvgfiTe//SSrgJ11EN2GqGoNL4ii7ed6Bv+Bhuk22dUfckj473RRIjx/KCf+aIi8ghkhTzxfudmPG/a0jCkLRM64gnMpbFlR5bvB5Swktvm4up9bJBHUV3dloOPbJcUctJm/p4lSwIK9HuYibY8z8VfdohZrD/FjrxiUpzO1nmKRy/5dhq5T0D+4kRuQvmqwRfIWUR/MPn90/1W675ScoKtIX8xIwcQi5rzU1NXPvof3uh4/Jx+XhEAAAAASUVORK5CYII=',
        tag: 'events'
    };
    const notification = new Notification(title, options);
    if (!time) {
        // отладка
        notification.addEventListener('click', (e) => console.log(e));
    }
    else {
        // скрываем уведомление
        setTimeout(() => notification.close(), time * 1000);
    }
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setSettings = exports.readSettings = void 0;
const index_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
/**
 * Используется для инициализации настроек скрипта
 */
exports.readSettings = () => {
    let cookieSet = index_1.getCookie('SP_PLUS_SET');
    try {
        if (cookieSet) {
            cookieSet = JSON.parse(cookieSet);
            // @ts-ignore
            settings_1._SETTINGS = index_1.extend(settings_1._SETTINGS, cookieSet);
        }
    }
    catch (e) {
        index_1.error('readSettings', e);
    }
};
/**
 * Используется для изменения настроек
 */
exports.setSettings = (key, value) => {
    try {
        if (key.indexOf('.') !== -1) {
            let i = key.split('.');
            settings_1._SETTINGS[i[0]][i[1]] = value;
        }
        else {
            settings_1._SETTINGS[key] = value;
        }
        index_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
    }
    catch (e) {
        index_1.error('setSettings', e);
    }
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.oldHeader = void 0;
const utils_1 = __webpack_require__(0);
/**
 * Меняет местами кнопки почты и ленты местами (старое расположение)
 * И по дефолту удаляет надписи
 * @param b {boolean}
 */
exports.oldHeader = (b) => {
    // всегда скрываем надписи разделов
    utils_1.qsa('span.horiz-menu__link-text').forEach(e => e.remove());
    // кнопки шапки
    let p = utils_1.qsa('a.horiz-menu__link');
    // Клонируем ленту
    let tab1 = p[2].cloneNode(true);
    // Клонируем почту
    let tab2 = p[4].cloneNode(true);
    if (b || p[2].pathname === '/mail/') {
        p[4].replaceWith(tab1);
        p[2].replaceWith(tab2);
    }
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollMove = void 0;
const utils_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
exports.scrollMove = (b) => {
    let scroll = utils_1.qs('#scroll_page');
    try {
        if (b && !scroll.hasAttribute('sp-replace')) {
            scroll.style.left = 'auto';
            scroll.style.right = '0';
            scroll.setAttribute('sp-replace', '1');
        }
        else if (!settings_1._SETTINGS.rscroll && scroll.hasAttribute('sp-replace')) {
            scroll.style.left = '0';
            scroll.style.right = 'auto';
            scroll.removeAttribute('sp-replace');
        }
    }
    catch (e) {
        utils_1.error('scrollMove.ts', e);
    }
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.userStatus = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.userStatus = (code) => {
    let noAuthorized = utils_1.ce('div', { html: 'Для работы <b>Spaces+</b> необходима авторизация!' });
    if (strings_1.DEVICE.id === 1 || strings_1.DEVICE.id === 2) {
        let unSupported = utils_1.ce('div', {
            class: 'oh busi',
            style: 'border: 1px solid #ff9a95; background: #fdf3ef',
            html: 'Используемая версия сайта не поддерживается для работы <b>Spaces+</b>'
        });
        if (code === '01001')
            unSupported.prepend(noAuthorized);
        utils_1.qs('#main_wrap').prepend(unSupported);
        return false;
    }
    if ((strings_1.DEVICE.id === 3 || strings_1.DEVICE.id === 4) && code === '01001') {
        let messageBox = utils_1.ce('div', {
            class: 'oh nl system-message',
            style: 'border: 1px solid #ff9a95; background: #fdf3ef'
        });
        messageBox.prepend(noAuthorized);
        utils_1.qs('#top_info_block').prepend(messageBox);
        return false;
    }
    return true;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.userOnline = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.userOnline = () => {
    let path = utils_1.getPath();
    let nick = utils_1.getPath(3);
    let target = `/anketa/index/${nick}/`;
    if (path !== target)
        strings_1.DATA.ONLINE = null;
    if (path === target && strings_1.DATA.ONLINE !== nick) {
        try {
            let onBlock = Array.from(utils_1.qsa('div.info-item__title')).filter(e => e.textContent === 'Время онлайн:');
            if (nick && onBlock) {
                strings_1.DATA.ONLINE = nick;
                utils_1.http('GET', `${strings_1.SPACES}/anketa/index/${nick}/`, true).then(e => {
                    var _a, _b;
                    const response = (_b = (_a = e.parsedBody) === null || _a === void 0 ? void 0 : _a.user_widget) === null || _b === void 0 ? void 0 : _b.online_time;
                    if (response) {
                        let str = (response / 3600).toFixed(2).split('.');
                        let online = str[0] > 0 ? `${str[0]} ч, ${Math.trunc(str[1] / (100 / 60))} мин` : `${Math.trunc(str[1] / (100 / 60))} мин`;
                        // @ts-ignore Костыль!
                        onBlock[0].nextElementSibling.textContent = online;
                        utils_1.info(`Время онлайн: ${online}`, e);
                    }
                });
            }
        }
        catch (e) {
            utils_1.error('userOnline.ts', e);
        }
    }
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.apiDebugger = void 0;
const utils_1 = __webpack_require__(0);
exports.apiDebugger = (b) => {
    if (b && !utils_1.qs('#spaces_api_debugger')) {
        let init = utils_1.ce('script', {
            type: 'text/javascript',
            html: 'var Arr=[\'<div class="widgets-group widgets-group_top js-container__block" id="spaces_api_debugger"><div class="content"><a href="#" class="stnd-link list-link-blue c-blue" id="api_debug-button"><div class="text-gray"><span class="sp"></span><span class="t darkblue c-darkblue b js-text" style="margin-left: 5px">API Debugger</span></div></a><div id="api_debug-place"></div></div></div>\',"append","parent","#location_header","debugger"];$(Arr[3])[Arr[2]]()[Arr[1]](Arr[0]),require(Arr[4]);void(0);'
        });
        document.getElementsByTagName('head')[0].appendChild(init);
    }
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.coinsAccept = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.coinsAccept = () => {
    try {
        utils_1.qsa(`a[href^="${strings_1.SPACES}/services/gift_get/"`).forEach(e => {
            var _a;
            // Подтверждаем монетку
            e.click();
            // Удаляем элемент
            (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
            utils_1.info('Собрали монетку', e);
        });
    }
    catch (e) {
        utils_1.error('coinsAccept.ts', e);
    }
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlogs = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.deleteBlogs = () => {
    var _a, _b;
    let path = utils_1.getPath().split('/'), buttons = utils_1.qs('#SP_PLUS_BUTTONS_B'), links = utils_1.qsa(`a[href^="${strings_1.SPACES}/diary/editaccess/"`);
    try {
        // костыльный сброс кнопок
        if (path[2] !== 'view' && buttons)
            buttons.remove();
        if (path[1] === 'diary' && path[2] === 'view' && links && !utils_1.qs('input[id^="SP_DB_"')) {
            let checkboxArr = [];
            // создаем чекбоксы
            for (let link of links) {
                let blogId = `SP_DB_${utils_1.getParams(link.href)['id']}`;
                let checkbox = utils_1.ce('input', {
                    class: 'sp-cbfb sp-checkbox-square',
                    type: 'checkbox',
                    id: blogId
                });
                (_a = link.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(checkbox);
                (_b = link.parentElement) === null || _b === void 0 ? void 0 : _b.appendChild(utils_1.ce('label', {
                    class: 'sp-ch-blogs',
                    style: 'margin: 2px',
                    attr: {
                        'for': blogId
                    }
                }));
                checkboxArr.push(checkbox);
            }
            // блок кнопок управления
            let buttonsDiv = utils_1.ce('div', {
                class: 'widgets-group user__tools_last',
                id: 'SP_PLUS_BUTTONS_B'
            });
            // кнопка "Выбрать Все"
            const chooseAllButton = utils_1.ce('button', {
                class: 'user__tools-link table__cell sp_btn-list',
                html: '<span class="sp sp-ok-blue"></span><span class="sp-ch-text">Выбрать все</span>',
                onclick: (e) => {
                    if (e.target instanceof Element) {
                        let parent = e.target.nodeName === 'SPAN' ?
                            e.target.parentNode :
                            e.target;
                        for (let ch of checkboxArr) {
                            ch.checked =
                                parent.innerHTML.indexOf('Выбрать все') !== -1 ?
                                    true :
                                    false;
                        }
                        parent.innerHTML = `
                            <span class="sp sp-ok-blue"></span>
                                <span class="sp-ch-text">
                                ${parent.innerHTML.indexOf('Выбрать все') !== -1 ?
                            'Снять отметки' :
                            'Выбрать все'}
                            </span>
                        `;
                    }
                }
            });
            // кнопка "Удалить выбранные"
            const deleteBlogsButton = utils_1.ce('button', {
                class: 'user__tools-link table__cell sp_btn_line sp_btn-list',
                html: '<span class="sp sp-remove-red"></span><span class="sp-del-text">Удалить выбранные</span>',
                onclick: () => {
                    let blogs = [];
                    for (let ch of checkboxArr) {
                        if (ch.checked) {
                            blogs.push(/^SP_DB_([0-9]+)$/i.exec(ch.id)[1]);
                        }
                    }
                    let count = blogs.length;
                    if (count > 0) {
                        utils_1.confirmBox(`Вы действительно хотите удалить ${count} ${declStr(count)}?`, true, async () => {
                            let allBlogs = count;
                            for (let blog of blogs) {
                                utils_1.messageBox(`Осталось удалить ${count--} из ${allBlogs} ${declStr(count)}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>', false);
                                await utils_1.http('GET', `${strings_1.SPACES}/diary/delete/?CK=${strings_1.DATA.CK}&id=${blog}&Sure=1`, true).then(e => {
                                    utils_1.info('Удалили блог', e);
                                });
                            }
                            document.location.reload();
                        });
                    }
                    else {
                        utils_1.messageBox('Внимание!', 'Отметьте галочкой, те блоги, которые вы хотите удалить и попробуйте еще раз', true, 5);
                    }
                    return false;
                }
            });
            buttonsDiv.appendChild(deleteBlogsButton);
            buttonsDiv.appendChild(chooseAllButton);
            // костыль
            if (utils_1.qs('input[id^="SP_DB_"'))
                utils_1.qs('#main').after(buttonsDiv);
        }
    }
    catch (e) {
        utils_1.error('deleteBlogs.ts', e);
    }
};
const declStr = (count) => 'блог' + utils_1.declOfNum(count, ['', 'а', 'ов']);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.firstLaunch = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.firstLaunch = () => {
    try {
        // показываем приветствие, если отсутсвует кука и если BASE_URL не в залупе!
        if (utils_1.getCookie('SP_LAUNCH') === undefined &&
            strings_1.BASE_URL !== 'spaces-blogs.com' &&
            strings_1.BASE_URL !== 'spac1.net') {
            utils_1.messageBox('Спасибо за установку Spaces+', `
                <b style="color: #f86934">ВНИМАНИЕ!</b></br></br>
                Во избежания подделок, которые могут воровать пароли пользователей, скрипт скачивать только с официального <a href="https://spaces-dev.github.io" target="_blank">сайта</a></br></br>
                С вопросами по использованию скрипта, писать в сообщество <a href="${strings_1.SPACES}/soo/extension/" target="_blank">Spaces+</a></br></br>
                <div id="SP_LAUNCH_BUTTON" class="pad_t_a"></div>
                `, true);
            if (utils_1.qs('#SP_LAUNCH_BUTTON')) {
                const goTo = utils_1.ce('a', {
                    href: `${strings_1.SPACES}/settings/?sp_plus_settings=1`,
                    class: 'btn btn_white btn_input right sticker-close_btn',
                    html: 'Перейти к настройкам',
                    onclick: () => utils_1.qs('#SP_PLUS_ALERT').remove()
                });
                utils_1.qs('#SP_LAUNCH_BUTTON').appendChild(goTo);
            }
            utils_1.setCookie('SP_LAUNCH', '1');
        }
    }
    catch (e) {
        utils_1.error('firstLaunch.ts', e);
    }
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.karmaAccept = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.karmaAccept = () => {
    try {
        utils_1.qsa(`a[href^="${strings_1.SPACES}/mysite/rate_n_karma/karma/?Accept="`).forEach(e => {
            var _a;
            // Подтверждаем карму
            e.click();
            // Удаляем элемент
            (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
            utils_1.info('Собрали карму!', e);
        });
    }
    catch (e) {
        utils_1.error('karmaAccept.ts', e);
    }
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.soundNotify = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
const settings_1 = __webpack_require__(2);
exports.soundNotify = () => {
    try {
        // счетчики почты, журнала и ленты
        const notif = {
            'mail': utils_1.qs('#mail_notif_cnt'),
            'journal': utils_1.qs('#jour_notif_cnt'),
            'feed': utils_1.qs('#lent_notif_cnt')
        };
        let counter = 0;
        for (let i in notif) {
            // @ts-ignore
            if (notif[i] && settings_1._SETTINGS.notifySet[i] && notif[i].innerHTML !== '' && !isNaN(notif[i].innerHTML)) {
                counter = counter + parseInt(notif[i].innerHTML, 10);
            }
        }
        if (counter > strings_1.DATA.EVENTS) {
            // звук уведомления
            utils_1.playSound(settings_1._SETTINGS.notifySet.url, settings_1._SETTINGS.notifySet.volume);
            let string = utils_1.declOfNum(counter, ['новое событие', 'новых события', 'новых событий']);
            // создаем новое уведомление
            utils_1.notification(`${utils_1.toUpper(string)} на Spaces!`, `У Вас ${counter} ${string}!`, 5);
            strings_1.DATA.EVENTS = counter;
        }
        else if (counter < strings_1.DATA.EVENTS) {
            strings_1.DATA.EVENTS = counter;
        }
    }
    catch (e) {
        utils_1.error('soundEvents.ts', e);
    }
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.betaFeatures = void 0;
const utils_1 = __webpack_require__(0);
/**
 * Хуета
 */
exports.betaFeatures = () => {
    let progress_label = utils_1.qs('div.progress-item__label');
    let progress_runner = utils_1.qs('div.progress-item__runner');
    if (progress_label && progress_runner && !utils_1.qs('#SP_BETA_FEATURES')) {
        let item = progress_label.textContent.split('/');
        let summ = Math.round(Number(item[0]) / Number(item[1]) * 100);
        if (summ > 30)
            progress_label.style.color = '#f5f5f5';
        progress_runner.id = 'SP_BETA_FEATURES';
        progress_runner.style.width = `${summ}%`;
    }
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.blockedFiles = void 0;
const utils_1 = __webpack_require__(0);
exports.blockedFiles = () => {
    try {
        let downloadBtn = utils_1.qs('a[class*="__adv_download"'), downloadWrap = utils_1.qs('div[id^="download_wrap_"'), linkSSL = utils_1.qs('#SP_LINK_SSL');
        if (utils_1.getPath(1) === 'files' &&
            utils_1.getPath(2) === 'view' &&
            downloadWrap &&
            !downloadBtn &&
            !linkSSL) {
            let createBtn = utils_1.ce('a', {
                href: '#',
                class: 'list-link list-link-blue stnd-link_disabled c-blue',
                id: 'SP_LINK_SSL',
                html: `
                    <span class="ico bp ico_spinner"></span>
                    <span class="t js-text">Загрузка</span>
                `
            });
            downloadWrap.children[0].appendChild(createBtn);
            utils_1.http('GET', document.location.href, true).then(e => {
                var _a;
                const response = (_a = e.parsedBody) === null || _a === void 0 ? void 0 : _a.info.file_widget;
                if (response) {
                    createBtn.classList.remove('stnd-link_disabled');
                    createBtn.href = response.preview.downloadLinkSSL;
                    createBtn.innerHTML = `
                        <span class="js-ico ico ico_download2_blue"></span>
                        <span class="t js-text">Скачать (${response.downloadBox.weight})</span>
                    `;
                    utils_1.info('Загрузка заблокированного файла', e);
                }
            });
        }
    }
    catch (e) {
        utils_1.error('blockedFiles.ts', e);
    }
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.favoriteUser = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.favoriteUser = async () => {
    var _a, _b, _c;
    try {
        let method = utils_1.getPath(1), index = utils_1.getPath(2), nickname = utils_1.getPath(3), tdBlock = utils_1.qsa('td.table__cell_last'), inFavorite = utils_1.qs('#SP_PLUS_INFAVORITE');
        if ((method === 'mysite' ||
            (method === 'anketa' && index !== 'edit') ||
            method === 'activity') &&
            strings_1.DATA.USERNAME !== utils_1.trim(utils_1.qs('#location_bar_1_0').textContent)) {
            if (nickname && tdBlock.length > 0 && !inFavorite) {
                let favoriteButton = utils_1.ce('td', {
                    class: 'table__cell stnd-link_disabled',
                    id: 'SP_PLUS_INFAVORITE'
                });
                let loader = utils_1.ce('a', {
                    href: '#',
                    id: 'SP_FV_LOADER',
                    class: 'stnd-link',
                    html: `
                        <span class="ico bp ico_spinner"></span>
                        <span class="t js-text">Загрузка</span>
                    `
                });
                favoriteButton.appendChild(loader);
                (_a = tdBlock[1].parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(favoriteButton, tdBlock[1]);
                let clds = (_c = (_b = tdBlock[1]) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.childNodes;
                for (let x in clds) {
                    if (clds[x].nodeName === 'TD') {
                        // 'width' is deprecated???
                        clds[x].width = '25%';
                    }
                }
                await utils_1.http('GET', `${strings_1.SPACES}/anketa/index/${nickname}`, true).then(e => {
                    var _a;
                    const json = (_a = e.parsedBody) === null || _a === void 0 ? void 0 : _a.user_widget;
                    if (json !== undefined) {
                        let favoriteLink = utils_1.ce('a', {
                            href: `${strings_1.SPACES}/bookmarks/add/?object_id=${json.id}&object_type=11`,
                            class: 'stnd-link',
                            attr: { title: 'Добавить в закладки' },
                            html: `<span class="sp sp-fav"></span> B закладки`,
                            onclick: () => {
                                utils_1.confirmBox(`Добавить пользователя <b>${json.name}</b> в закладки?`, false, async () => {
                                    await utils_1.http('POST', `${strings_1.SPACES}/ajax/bookmarks/add/`, false, `object_id=${json.id}&object_type=11&show_all_tags_state=0&new_tags=Люди&cfms=Добавить&CK=${strings_1.DATA.CK}`).then(e => {
                                        e.status === 200 ?
                                            isFav(json.id, json.name, favoriteButton) :
                                            utils_1.error('bookmarks/add', e);
                                    });
                                });
                                return false;
                            }
                        });
                        isFav(json.id, json.name, favoriteButton);
                        loader.remove();
                        favoriteButton.classList.remove('stnd-link_disabled');
                        favoriteButton.appendChild(favoriteLink);
                    }
                    else {
                        loader.parentElement.style.display = 'none';
                    }
                    utils_1.info('anketa/index', e);
                });
            }
        }
    }
    catch (e) {
        utils_1.error('favoriteUser.ts', e);
    }
};
const isFav = async (id, name, elem) => {
    try {
        await utils_1.http('GET', `${strings_1.SPACES}/bookmarks/add/?object_id=${id}&object_type=11`, true).then(e => {
            var _a;
            const json = (_a = e.parsedBody) === null || _a === void 0 ? void 0 : _a.delete_link;
            if (json) {
                elem.firstElementChild.href = json.delete_URL;
                elem.firstElementChild.title = 'Удалить из закладок';
                elem.firstElementChild.innerHTML = '<span class="sp sp-fav-on"></span><span style="color: #61a961"> В закладках</span>';
                elem.onclick = () => {
                    utils_1.confirmBox(`Вы действительно хотите удалить пользователя <b>${name}</b> из закладок?`, false, async () => {
                        await utils_1.http('GET', json.delete_URL, false).then(e => {
                            e.status === 200 ?
                                document.location.reload() :
                                utils_1.error('bookmarks/remove', e);
                        });
                    });
                    return false;
                };
            }
            utils_1.info('В закладках?', e);
        });
    }
    catch (e) {
        utils_1.error('isFav', e);
    }
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.freeStickers = void 0;
const utils_1 = __webpack_require__(0);
exports.freeStickers = (b) => {
    let script = utils_1.qs('#SP_PLUS_STICKERS');
    if (b && !script) {
        let s = utils_1.ce('script', {
            type: 'text/javascript',
            id: 'SP_PLUS_STICKERS',
            html: 'var open=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(e,o,t){var n=open.apply(this,arguments);return-1==o.indexOf("mail/sendMessage")&&-1==o.indexOf("diary/new")&&-1==o.indexOf("comments/add")||this.setRequestHeader("X-Proxy","spaces"),n};'
        });
        document.getElementsByTagName('head')[0].appendChild(s);
    }
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.recentSmiles = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
const settings_1 = __webpack_require__(2);
exports.recentSmiles = () => {
    let recentTab = utils_1.qs('#SP_RECENT_SMILES');
    let smilesMenu = utils_1.qs('.smiles_menu-header');
    let smilesStorage = JSON.parse(localStorage.getItem('sp_recent_smiles') || '{}');
    try {
        // TODO: Исправить поиск смайликов в разделах
        /* ВРЕМЕННОЕ РЕШЕНИЕ */
        if (smilesMenu) {
            let smiles = document.querySelectorAll('img[smile^=":"]');
            if (smiles)
                eventSmiles(smiles, smilesStorage);
        }
        /* ВРЕМЕННОЕ РЕШЕНИЕ */
        if (smilesMenu && !recentTab) {
            let smileTabs = document.querySelectorAll('a[href^="#sm-tab="]');
            for (let tab of smileTabs) {
                tab.addEventListener('click', () => {
                    // Удаляем предупреждение о покупке стикеров, если включена функция "Бесплатные стикеры"
                    if (settings_1._SETTINGS.sticker)
                        document.querySelectorAll('.stickers_list>div').forEach(e => e.remove());
                    // Ищем все смайлики в списке смайлов
                    let smiles = document.querySelectorAll('img[smile^=":"]');
                    if (smiles)
                        eventSmiles(smiles, smilesStorage);
                    // Ищем каталоги смайлов
                    let cats = document.querySelectorAll('a[href^="#sm-cat="]');
                    for (let cat of cats) {
                        cat.addEventListener('click', () => {
                            eventSmiles(smiles, smilesStorage);
                        });
                    }
                });
            }
            let smilesBody = utils_1.qs('.smiles_menu-body');
            let recentDelete = utils_1.ce('span', {
                class: 'sp sp-grey-del trash-btn',
                onclick: () => {
                    utils_1.confirmBox('Вы действительно хотите очистить ранее использованные смайлики?', true, () => {
                        localStorage.removeItem('sp_recent_smiles');
                        // костыль
                        document.location.reload();
                    });
                }
            });
            let recentTab = utils_1.ce('img', {
                id: 'SP_RECENT_SMILES',
                class: 'sp_recent-smile-btn',
                attr: {
                    src: `${strings_1.HTTP}//spac.me/i/mail/restore_grey.png`,
                    title: 'Ранее использованные'
                },
                onclick: () => {
                    // Очищаем список смайлов
                    smilesBody.innerHTML = '';
                    if (Object.keys(smilesStorage).length > 0) {
                        // Выводим все смайлы из LS
                        for (let [src, smile] of Object.entries(smilesStorage)) {
                            let smileElem = utils_1.ce('img', {
                                class: 'sp_recent-smile',
                                attr: {
                                    src: src,
                                    smile: smile
                                },
                                onclick: () => {
                                    var _a;
                                    // Добавляем смайлик в поле ввода
                                    let input = (_a = utils_1.qs('textarea[tabindex="1"]')) !== null && _a !== void 0 ? _a : utils_1.qs('textarea[name="msg"]');
                                    input.value += smile + ' ';
                                }
                            });
                            smilesBody.append(smileElem);
                        }
                    }
                    else {
                        let smilesNotFound = utils_1.ce('div', {
                            style: 'color: #a4b7c4; text-align: center',
                            html: `<img src="${strings_1.HTTP}//spac.me/i/st/compdude11.gif"></br></br>Список ранее использованных смайликов пуст</br>Используйте смайлики из меню смайликов, чтобы добавить их сюда</br></br>`
                        });
                        smilesBody.append(smilesNotFound);
                    }
                }
            });
            // Кнопка открытия
            smilesMenu.prepend(recentTab);
            // Кнопка очистки
            smilesMenu.prepend(recentDelete);
            // Принудительно показываем ранее использованные смайлы, если доп. настройка включена и они у нас имеются
            if (settings_1._SETTINGS.recentSmiles.show && Object.keys(smilesStorage).length > 0)
                utils_1.qs('#SP_RECENT_SMILES').click();
        }
    }
    catch (e) {
        utils_1.error('recentSmiles.ts', e);
    }
};
const eventSmiles = (smiles, storage) => {
    for (let smile of smiles) {
        smile.addEventListener('click', () => {
            let modified = utils_1.modifyObject(storage, smile.src, smile.attributes.smile.value, 0);
            localStorage.setItem('sp_recent_smiles', JSON.stringify(modified));
        });
    }
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsMenu = void 0;
const utils_1 = __webpack_require__(0);
const index_1 = __webpack_require__(4);
const strings_1 = __webpack_require__(1);
const settings_1 = __webpack_require__(2);
exports.settingsMenu = () => {
    var _a, _b, _c;
    if (utils_1.getPath() === '/settings/' && !utils_1.qs('#SP_PLUS_SETLINK')) {
        try {
            // Ищем таргер для инициализации меню настроек
            const targetLink = utils_1.qs(`a[href^="${strings_1.SPACES}/settings/notification/"`);
            if (targetLink) {
                const urlSett = utils_1.getQuery('sp_plus_settings');
                const urlSettEditor = utils_1.getQuery('sp_cookie_editor');
                const urlSettChangeLog = utils_1.getQuery('sp_changelog');
                const urlSettBackup = utils_1.getQuery('sp_backup');
                const baseLink = utils_1.ce('a', {
                    href: `${strings_1.SPACES}/settings/?sp_plus_settings=1`,
                    id: 'SP_PLUS_SETLINK',
                    class: targetLink.className,
                    html: '<span>Настройки Spaces+</span><span class="ico ico_arr ico_m"></span>',
                    onclick: () => {
                        var _a, _b, _c;
                        if (!/(\&)sp_plus_settings=1/i.test(document.location.href)) {
                            utils_1.historyPush({
                                'sp_plus_settings': urlSett,
                            }, `${strings_1.SPACES}/settings/?sp_plus_settings=1`, 'Настройки Spaces+');
                        }
                        let prnt = (_c = (_b = (_a = utils_1.qs('#SP_PLUS_SETLINK').parentElement) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode;
                        if (prnt.id === 'main') {
                            utils_1.qs('#header_path').innerHTML = utils_1.qs('#header_path').innerHTML.replace('Настройки', `<a href="${strings_1.SPACES}/settings/" style="margin-bottom: 1px">Настройки</a><span class="location-bar__sep ico"></span><span id="SP_PLUS_SETHEAD2">Spaces+</span>`);
                            prnt.innerHTML = `<div class="widgets-group widgets-group_top js-container__block"><div class="b-title cl b-title_center b-title_first oh"><div class="b-title__item" id="SP_PLUS_SETHEAD">Настройки Spaces+</div></div><div class="content"><div class="list f-c_fll"> <div id="SP_PLUS_SETAREA" class="no-select"></div></div></div></div> <div id="SP_PLUS_ABOUT"></div> <a id="SP_PLUS_SETBACK" href="${strings_1.SPACES}/settings/?" class="link-return full_link"><span class="ico ico_arrow-back" style="margin: 0px 6px -1px 0px"></span><span class="m">Назад</span></a>`;
                        }
                        const setArea = utils_1.qs('#SP_PLUS_SETAREA');
                        if (setArea) {
                            for (let i in settings_1._SETTINGS) {
                                if (settings_1._SETSTRINGS[i] !== undefined) {
                                    /**
                                    * Проверяем поддерживаемость данных функций (rscroll, hrightbar, weather) на Touch версии сайта
                                    * Если функция не поддерживается на текущей версии сайта и она включена, то отключаем её
                                    */
                                    let unsupported = (strings_1.DEVICE.id === 3 && (i === 'rscroll' || i === 'hrightbar' || i === 'weather')) ? true : false;
                                    let checkbox = utils_1.ce('input', {
                                        id: i,
                                        type: 'checkbox',
                                        class: 'sp-checkbox-square',
                                        attr: { unsupported: unsupported },
                                        checked: settings_1._SETTINGS[i],
                                        onclick: (e) => {
                                            const { id, checked } = e.target;
                                            if (e.target.attributes.unsupported.value === 'true' && checked) {
                                                utils_1.messageBox('Внимание!', 'Для работы данной функции, необходимо переключиться на компьютерную версию сайта', true, 5);
                                                return false;
                                            }
                                            utils_1.setSettings(id, checked);
                                            switch (id) {
                                                case 'rscroll':
                                                    index_1.scrollMove(checked);
                                                    break;
                                                case 'hrightbar':
                                                    index_1.hiddenRightbar(checked);
                                                    break;
                                                // TODO: На переработку (скорее всего можно будет менять только звук уведомлений)
                                                /*case 'notify':
                                                    checked ?
                                                        settingsNotify(e.target) :
                                                        qs("#SP_PLUS_EVENTS").remove()
                                                    break*/
                                                // TODO: Меню настроек на доработку!    
                                                /*case 'recents':
                                                    checked ?
                                                        settingsRecentSmiles(e.target) :
                                                        qs("#SP_RECENTS_SETTINGS").remove()
                                                    break*/
                                                case 'friendsOn':
                                                    index_1.friendsOnline(checked);
                                                    checked ?
                                                        index_1.settingsFriends(e.target) :
                                                        utils_1.qs('#SP_PLUS_MAXFRIENDS').remove();
                                                    break;
                                                case 'sticker':
                                                    checked ?
                                                        index_1.freeStickers(checked) :
                                                        utils_1.qs('#SP_PLUS_STICKERS').remove();
                                                    break;
                                                case 'stickyheader':
                                                    index_1.stickyHeader(checked);
                                                    break;
                                                case 'oldheader':
                                                    index_1.oldHeader(checked);
                                                    break;
                                                case 'bodystyle':
                                                    if (checked) {
                                                        index_1.settingsBackground(e.target);
                                                    }
                                                    else {
                                                        utils_1.qs('#SP_PLUS_BODYSTYLE').remove();
                                                        utils_1.qs('#SP_PLUS_INJSTYLE').remove();
                                                    }
                                                    break;
                                                case 'weather':
                                                    if (checked) {
                                                        index_1.settingsWeather(e.target);
                                                    }
                                                    else {
                                                        utils_1.qs("#SP_WIDGET_WEATHER").remove();
                                                        utils_1.qs("#SP_WEATHER_SETTINGS").remove();
                                                    }
                                                    break;
                                            }
                                        }
                                    });
                                    let description = utils_1.ce('label', { html: settings_1._SETSTRINGS[i], attr: { 'for': i } });
                                    let label = utils_1.ce('label', { class: `stnd-link bstrwrap${unsupported ? ' sp_unsupported' : ''}` });
                                    label.appendChild(checkbox);
                                    label.appendChild(description);
                                    // кнопка 'описание функции'
                                    if (settings_1._DESCSTRINGS[i] !== undefined) {
                                        let info = utils_1.ce('a', {
                                            href: '#',
                                            class: 'sp sp-info sp_info-btn',
                                            onclick: () => {
                                                utils_1.messageBox(settings_1._SETSTRINGS[i], settings_1._DESCSTRINGS[i], true);
                                                return false;
                                            }
                                        });
                                        label.appendChild(info);
                                    }
                                    setArea.appendChild(label);
                                    setArea.appendChild(label);
                                    // отключаем неподдерживаемые функции
                                    if (unsupported && settings_1._SETTINGS[i])
                                        utils_1.qs('#' + i).click();
                                }
                            }
                            // Выпадающие доп. меню настроек
                            // TODO: Доработать меню настроек
                            //if (_SETTINGS.recents) settingsRecentSmiles(qs('#recents'))
                            if (settings_1._SETTINGS.friendsOn)
                                index_1.settingsFriends(utils_1.qs('#friendsOn'));
                            if (settings_1._SETTINGS.bodystyle)
                                index_1.settingsBackground(utils_1.qs('#bodystyle'));
                            if (settings_1._SETTINGS.notify)
                                index_1.settingsNotify(utils_1.qs('#notify'));
                            if (settings_1._SETTINGS.weather)
                                index_1.settingsWeather(utils_1.qs('#weather'));
                            let spacesLabel1 = utils_1.ce('div', {
                                class: 'sp_plus_line',
                                html: '<span class="sp_plus_text">Встроенные возможности сайта</span>'
                            });
                            let spacesLabel2 = utils_1.ce('div', {
                                class: 'sp_plus_line',
                                html: '<span class="sp_plus_text">Прочее</span>'
                            });
                            setArea.appendChild(spacesLabel1);
                            // Встроенные возможности сайта
                            index_1.settingsFeatures(setArea);
                            setArea.appendChild(spacesLabel2);
                            const SettingsBackup = utils_1.ce('a', {
                                href: `${strings_1.SPACES}/settings/?sp_plus_settings=1&sp_backup=1`,
                                class: 'stnd-link stnd-link_arr sp_font_sm',
                                id: 'sp_backup',
                                html: '<span class="b" style="color: #2e7d32"><span class="sp sp-backup-g mr-14"></span>Импорт и экспорт настроек<span class="ico ico_arr ico_m"></span></span>',
                                onclick: () => {
                                    utils_1.qs('#SP_PLUS_SETHEAD').innerHTML = 'Импорт и экспорт настроек';
                                    utils_1.qs('#SP_PLUS_SETHEAD2').innerHTML = `<a href="${strings_1.SPACES}/settings/?sp_plus_settings=1" style="margin-bottom: 1px">Spaces+</a><span class="location-bar__sep ico"></span> Импорт и экспорт настроек`;
                                    utils_1.qs('#SP_PLUS_SETBACK').href = `${strings_1.SPACES}/settings/?sp_plus_settings=1`;
                                    if (!/(\&)sp_backup=1/i.test(document.location.href)) {
                                        utils_1.historyPush({
                                            'sp_plus_settings': urlSett,
                                            'sp_backup': urlSettBackup
                                        }, `${strings_1.SPACES}/settings/?sp_plus_settings=1&sp_backup=1`, 'Spaces+: Импорт и экспорт настроек');
                                    }
                                    index_1.settingsBackupMenu('#SP_PLUS_SETAREA');
                                    return false;
                                }
                            });
                            setArea.appendChild(SettingsBackup);
                            const ChangeLogMenu = utils_1.ce('a', {
                                href: `${strings_1.SPACES}/settings/?sp_plus_settings=1&sp_changelog=1`,
                                class: 'stnd-link stnd-link_arr sp_font_sm',
                                id: 'sp_changelog',
                                html: '<span class="b" style="color: #2196f3"><span class="sp sp-restore-blue mr-14"></span>История обновлений<span class="ico ico_arr ico_m"></span></span>',
                                onclick: () => {
                                    utils_1.qs('#SP_PLUS_SETHEAD').innerHTML = 'История обновлений';
                                    utils_1.qs('#SP_PLUS_SETHEAD2').innerHTML = `<a href="${strings_1.SPACES}/settings/?sp_plus_settings=1" style="margin-bottom: 1px">Spaces+</a><span class="location-bar__sep ico"></span> История обновлений`;
                                    utils_1.qs('#SP_PLUS_SETBACK').href = `${strings_1.SPACES}/settings/?sp_plus_settings=1`;
                                    if (!/(\&)sp_changelog=1/i.test(document.location.href)) {
                                        utils_1.historyPush({
                                            'sp_plus_settings': urlSett,
                                            'sp_changelog': urlSettChangeLog
                                        }, `${strings_1.SPACES}/settings/?sp_plus_settings=1&sp_changelog=1`, 'Spaces+: История обновлений');
                                    }
                                    index_1.settingsLogMenu('#SP_PLUS_SETAREA');
                                    return false;
                                }
                            });
                            setArea.appendChild(ChangeLogMenu);
                            const ResetSettings = utils_1.ce('a', {
                                href: '#',
                                class: 'stnd-link stnd-link_arr sp_font_sm',
                                id: 'sp_plus_reset',
                                html: '<span class="b" style="color: #f86934"><span class="sp sp-alert mr-14"></span>Сброс настроек<span class="ico ico_arr ico_m"></span></span>',
                                onclick: () => {
                                    utils_1.confirmBox('Вы действительно хотите полностью сбросить настройки?', true, () => {
                                        utils_1.delCookie('SP_PLUS_SET');
                                        utils_1.delCookie('SP_WEATHER');
                                        utils_1.delCookie('gp_left_btn');
                                        utils_1.delCookie('force_ajax_transport');
                                        utils_1.delCookie('sandbox');
                                        document.location.reload();
                                    });
                                    return false;
                                }
                            });
                            setArea.appendChild(ResetSettings);
                            let clicks = 0, aboutWidget = utils_1.ce('div', { class: 'widgets-group widgets-group_top nl wbg no-select' }), ver = utils_1.ce('div', { style: 'float: right', html: 'v' + strings_1.PKG_VERSION }), content = utils_1.ce('div', { class: 'content-item3' }), heart = utils_1.ce('div', {
                                html: '❤️',
                                class: 'heart',
                                onclick: () => { if (++clicks >= 10)
                                    document.location.href = 'https://t.me/spaces_dev'; }
                            }), title = utils_1.ce('div', {
                                class: 'grey',
                                html: 'Developed by <a href="https://crashmax.ru" target="_blank">crashmax</a> with love '
                            });
                            aboutWidget.appendChild(content);
                            title.appendChild(heart);
                            content.appendChild(title);
                            title.appendChild(ver);
                            utils_1.qs('#SP_PLUS_ABOUT').appendChild(aboutWidget);
                        }
                        return false;
                    }
                });
                // Вставляем "Настройки Spaces+" перед "Уведомления"
                targetLink.before(baseLink);
                let clickEvent = document.createEvent('MouseEvent');
                if (urlSett) {
                    document.title = 'Настройки Spaces+';
                    clickEvent.initEvent('click', true, true);
                    baseLink.dispatchEvent(clickEvent);
                }
                if (urlSettEditor) {
                    document.title = 'Spaces+: Редактор cookies';
                    clickEvent.initEvent('click', true, true);
                    (_a = utils_1.qs('#sp_cookie_editor')) === null || _a === void 0 ? void 0 : _a.dispatchEvent(clickEvent);
                }
                if (urlSettChangeLog) {
                    document.title = 'Spaces+: История обновлений';
                    clickEvent.initEvent('click', true, true);
                    (_b = utils_1.qs('#sp_changelog')) === null || _b === void 0 ? void 0 : _b.dispatchEvent(clickEvent);
                }
                if (urlSettBackup) {
                    document.title = 'Spaces+: Импорт и экспорт настроек';
                    clickEvent.initEvent('click', true, true);
                    (_c = utils_1.qs('#sp_backup')) === null || _c === void 0 ? void 0 : _c.dispatchEvent(clickEvent);
                }
            }
        }
        catch (e) {
            utils_1.error('settingsMenu', e);
        }
    }
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.stickyHeader = void 0;
const utils_1 = __webpack_require__(0);
exports.stickyHeader = (b) => {
    try {
        let wrapAll = utils_1.qs('#wrap_all'), leftNav = utils_1.qs('#left_nav'), header = utils_1.qs('#header_elements'), mainShadow = utils_1.qs('#main_shadow'), infoBlock = utils_1.qs('#top_info_block'), sidebarLogo = utils_1.qs('div.sidebar-logo');
        if (b && !header.hasAttribute('sp-sticky-header')) {
            // отслеживаем изменения размеров страницы
            const resizeBody = new ResizeObserver(e => {
                window.requestAnimationFrame(() => {
                    if (!Array.isArray(e) || !e.length) {
                        return;
                    }
                    // опускаем основной контейнер
                    utils_1.css(mainShadow, 'padding-top: 45px');
                    // фиксированное положение блока (при смене версии сайта)
                    utils_1.css(infoBlock, `
                        position: fixed;
                        width: ${mainShadow.clientWidth}px;
                        z-index: 9999
                    `);
                    // стили для логотипа
                    utils_1.css(sidebarLogo, `
                        position: fixed;
                        width: ${leftNav.clientWidth + 1}px;
                        left: ${wrapAll.offsetLeft}px;
                        top: 0px;
                        box-shadow: 0px 2px 2px rgba(93,109,157,0.2);
                        z-index: 9999
                    `);
                    // стили для шапки
                    utils_1.css(header, `
                        position: fixed;
                        width: ${mainShadow.clientWidth - leftNav.clientWidth + 1}px;
                        left: ${wrapAll.offsetLeft + leftNav.clientWidth}px;
                        top: 0px;
                        box-shadow: 0px 2px 2px rgba(93,109,157,0.2);
                        z-index: 9999
                    `);
                });
            });
            resizeBody.observe(document.body);
            header.setAttribute('sp-sticky-header', '1');
        }
        else if (header.hasAttribute('sp-sticky-header')) {
            // удаление применных стилей
            header.removeAttribute('style');
            infoBlock.removeAttribute('style');
            mainShadow.removeAttribute('style');
            sidebarLogo.removeAttribute('style');
            header.removeAttribute('sp-sticky-header');
        }
    }
    catch (e) {
        utils_1.error('stickyHeader.ts', e);
    }
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bypassProfile = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.bypassProfile = () => {
    var _a, _b, _c, _d;
    try {
        let tdBlock = utils_1.qsa('td.table__cell_last'), blackListLink = utils_1.qs(`a[href^="${strings_1.SPACES}/blacklist/"`), rulesLink = utils_1.qs(`a[href^="${strings_1.SPACES}/info/rules/"`), noAccessIco = utils_1.qs('div.ico_noaccess_xlarge'), inButton = utils_1.qs('#SP_PLUS_INBL');
        if (utils_1.getPath(1) === 'mysite' && tdBlock) {
            let nickname = utils_1.getPath(3);
            // Показать профиль, если он недоступен по причине пидорас (в чёрном списке)
            if (blackListLink && !inButton) {
                let button = utils_1.ce('td', {
                    class: 'table__cell',
                    id: 'SP_PLUS_INBL',
                    html: `<a href="#" class="stnd-link" title="Показать профиль"><span class="sp sp-eye-grey"></span> Показать</a>`,
                    onclick: () => {
                        button.after(utils_1.ce('td', {
                            class: 'table__cell',
                            id: 'SP_PLUS_INBL',
                            html: `<a href="#" class="stnd-link stnd-link_disabled" title="Загрузка"><span class="ico bp ico_spinner"></span> Загрузка</a>`,
                            onclick: () => false
                        }));
                        button.remove();
                        // получаем данные профиля через прокси запрос
                        getProfile(nickname);
                        return false;
                    }
                });
                (_a = tdBlock[1].parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(button, tdBlock[1]);
                let clds = (_c = (_b = tdBlock[1]) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.childNodes;
                // 'width' is deprecated ???
                for (let x in clds) {
                    if (clds[x].nodeName === 'TD')
                        clds[x].width = '25%';
                }
                if (strings_1.DATA.NICKNAME === nickname)
                    utils_1.qs('#SP_PLUS_INBL').click();
            }
            // Показать доступные ссылки в профиле, если он в бане
            if ((rulesLink || noAccessIco) && !blackListLink && !utils_1.qs('#SP_LIST_LINK')) {
                // фикс двойного бордера
                utils_1.qs('div.user__tools').style.borderTop = 'none';
                setUrls(
                // костыль для получения ника пользователя
                // иногда в ссылке бывает не ник, а его id
                utils_1.trim(utils_1.qs('#location_bar_1_0').textContent), blackListLink, rulesLink);
            }
        }
        else {
            // удаляем список ссылок
            (_d = utils_1.qs('#SP_LIST_LINK')) === null || _d === void 0 ? void 0 : _d.remove();
        }
    }
    catch (e) {
        utils_1.error('bypassProfile.ts', e);
    }
};
// выполняем CORS запрос и получаем HTML профиля
// https://gist.github.com/crashmax-off/5cf3ce71d784924c8c9c6843bf5ff7df
const getProfile = async (nickname) => {
    var _a, _b, _c;
    if (strings_1.DATA.NICKNAME !== nickname || strings_1.DATA.CONTENT === undefined) {
        // запоминает ник
        strings_1.DATA.NICKNAME = nickname;
        await utils_1.http('GET', `https://crashmax.ru/api/proxy?url=${strings_1.SPACES}/ajax/mysite/index/${nickname}/`, false).then(e => {
            var _a;
            let status = (_a = e.parsedBody) === null || _a === void 0 ? void 0 : _a.status.http_code;
            if (status === 200) {
                // Заменяем уебанские домены на пользовательский
                strings_1.DATA.CONTENT = e.parsedBody.contents.content.replace(/spac1\.net|spaces-blogs\.com/gi, str => str = strings_1.BASE_URL);
            }
            else {
                utils_1.messageBox('Просмотр профилей', 'Ошибка загрузки профиля! Обратитесь к разработчику', true);
            }
            utils_1.info('Просмотр профилей', e);
        });
    }
    if (strings_1.DATA.CONTENT !== null) {
        // Вставляем "новый" профиль
        utils_1.qs('#main_content').innerHTML = strings_1.DATA.CONTENT;
        // Костыль по восстановлению аватарки
        let avatar = utils_1.qs('img[data-s*="101.100.0"');
        avatar.src = avatar.dataset.s;
        // Удаляем ебучие виджеты
        utils_1.qs('div.widgets-group').remove();
        // Удаляем ненужную панель c кнопками
        utils_1.qs('div.user__tools').remove();
        // Удаляем кнопку "Сделать подарок"
        (_b = (_a = utils_1.qs('span[class$="ico_gifts"').parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
        // Удаляем вкладку "Активности"
        (_c = utils_1.qs(`a[href^="${strings_1.SPACES}/activity"`).parentElement) === null || _c === void 0 ? void 0 : _c.remove();
        // Удаляем кнопку "Написать"
        utils_1.qs('div.btn-single__wrap').remove();
    }
};
// Ссылки у заблокированного профиля
const setUrls = (e, lnk1, lnk2) => {
    let urls = [
        {
            'ico': 'forum',
            'text': 'Темы и комментарии',
            'path': `/forums/search_user/?query=${e}`
        },
        {
            'ico': 'comm',
            'text': 'Сообщества',
            'path': `/comm/list/user/${e}`
        },
        {
            'ico': 'friends',
            'text': 'Друзья',
            'path': `/friends/?name=${e}`
        },
        {
            'ico': 'readers',
            'text': 'Читатели',
            'path': `/lenta/readers/?user=${e}`
        },
        {
            'ico': 'gifts',
            'text': 'Подарки',
            'path': `/gifts/user_list/${e}`
        }
    ];
    let urls2 = [
        {
            'ico': 'blog',
            'text': 'Личный блог',
            'path': `/diary/view/user/${e}/list/-/`
        },
        {
            'ico': 'photo',
            'text': 'Фотографии',
            'path': `/pictures/user/${e}/list/-/`
        },
        {
            'ico': 'music',
            'text': 'Музыка',
            'path': `/music/user/${e}/list/-/`
        },
        {
            'ico': 'video',
            'text': 'Видео',
            'path': `/video/user/${e}/list/-/`
        },
        {
            'ico': 'file',
            'text': 'Файлы',
            'path': `/files/user/${e}/list/-/`
        }
    ];
    // конкатим второй массив, если аккаунт покинут
    if (lnk1 === null && lnk2 === null)
        urls = urls2.concat(urls);
    utils_1.qs('div.js-pending-item').append(utils_1.ce('div', {
        id: 'SP_LIST_LINK',
        class: 'widgets-group links-group'
    }));
    // создаем ссылки
    for (let url of urls) {
        const { ico, text, path } = url;
        let link = utils_1.ce('a', {
            href: strings_1.SPACES + path,
            class: 'list-link stnd-link_arr list-link-darkblue c-darkblue',
            html: `
                <span class="js-ico ico ico_${ico}"></span>
                <span class="t js-text">${text}</span>
                <span class="ico ico_arr"></span>
            `
        });
        utils_1.qs('#SP_LIST_LINK').append(link);
    }
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReaders = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.deleteReaders = () => {
    try {
        let buttons = utils_1.qs('#SP_PLUS_BUTTONS_R'), delLinks = utils_1.qsa(`a[href^="${strings_1.SPACES}/lenta/reader_delete/"`);
        if (utils_1.getPath() === '/lenta/readers/' && delLinks && !buttons) {
            let checkboxArr = [];
            for (let link of delLinks) {
                let chWrap = utils_1.ce('label', { class: 'stnd-link icon-link sp-ch-readers' });
                let userId = utils_1.getParams(link.href)['user'];
                let bChbx = utils_1.ce('input', {
                    type: 'checkbox',
                    class: 'sp-cbfr sp-checkbox-square',
                    id: userId
                });
                let ckbxlb = utils_1.ce('label', {
                    style: 'margin-left: 0px',
                    attr: { 'for': userId }
                });
                chWrap.appendChild(bChbx);
                chWrap.appendChild(ckbxlb);
                link.after(chWrap);
                checkboxArr.push(bChbx);
            }
            let buttonsDiv = utils_1.ce('div', {
                class: 'user__tools_last',
                id: 'SP_PLUS_BUTTONS_R'
            });
            const chooseAllButton = utils_1.ce('button', {
                style: 'border-right: unset',
                class: 'user__tools-link table__cell sp_btn-list',
                html: '<span class="sp sp-ok-blue"></span><span class="sp-ch-text">Выбрать все</span>',
                onclick: (e) => {
                    if (e.target instanceof Element) {
                        let parent = e.target.nodeName === 'SPAN' ?
                            e.target.parentNode :
                            e.target;
                        for (let ch of checkboxArr) {
                            ch.checked =
                                parent.innerHTML.indexOf('Выбрать все') !== -1 ?
                                    true :
                                    false;
                        }
                        parent.innerHTML = `
                            <span class="sp sp-ok-blue"></span>
                            <span class="sp-ch-text">
                                ${parent.innerHTML.indexOf('Выбрать все') !== -1 ?
                            'Снять отметки' :
                            'Выбрать все'}
                            </span>
                        `;
                    }
                }
            });
            const deleteReadersButton = utils_1.ce('button', {
                class: 'user__tools-link table__cell sp_btn_line sp_btn-list',
                html: '<span class="sp sp-remove-red"></span><span class="sp-del-text">Удалить выбранных</span>',
                onclick: () => {
                    let readers = [];
                    for (let ch of checkboxArr) {
                        if (ch.checked)
                            readers.push(ch.id);
                    }
                    let count = readers.length;
                    if (count > 0) {
                        utils_1.confirmBox(`Вы действительно хотите удалить ${count} ${declStr(count)}?`, true, async () => {
                            let allReaders = count;
                            for (let reader of readers) {
                                utils_1.messageBox(`Осталось удалить ${count--} из ${allReaders} ${declStr(count)}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>', false);
                                await utils_1.http('POST', `${strings_1.SPACES}/lenta/reader_delete/?user=${reader}`, false, `&CK=${strings_1.DATA.CK}&cfms=Удалить`).then(e => {
                                    utils_1.info('Удалили читателя', e);
                                });
                            }
                            document.location.reload();
                        });
                    }
                    else {
                        utils_1.messageBox('Внимание!', 'Отметьте галочкой, теx читателей, которых вы хотите удалить и попробуйте еще раз', true, 5);
                    }
                }
            });
            buttonsDiv.appendChild(deleteReadersButton);
            buttonsDiv.appendChild(chooseAllButton);
            let main = utils_1.qs('#main'), pgn = utils_1.qs('div.pgn-wrapper');
            if (pgn) {
                pgn.prepend(buttonsDiv);
            }
            else if (main) {
                buttonsDiv.classList.add('widgets-group');
                main.prepend(buttonsDiv);
            }
        }
    }
    catch (e) {
        utils_1.error('deleteReaders.ts', e);
    }
};
const declStr = (count) => 'читател' + utils_1.declOfNum(count, ['я', 'я', 'ей']);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.friendsOnline = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
const settings_1 = __webpack_require__(2);
/**
 * Панель друзей онлайн
 * @param t
 */
exports.friendsOnline = (b) => {
    var _a, _b;
    try {
        let friendsCount = utils_1.qs('#friends_cnt'), frOnDiv = utils_1.qs('#SP_PLUS_FRIENDS_B'), count = 0;
        // получаем значение каунтера
        if (friendsCount)
            count = Number(friendsCount.textContent);
        if (b && count > 0) {
            let parent = (_b = (_a = friendsCount === null || friendsCount === void 0 ? void 0 : friendsCount.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode;
            frOnDiv = frOnDiv || utils_1.ce('div', {
                id: 'SP_PLUS_FRIENDS_B',
                class: 'list-link__wrap'
            });
            utils_1.http('GET', `${strings_1.SPACES}/friends/?S=3`, true).then(e => {
                var _a;
                const response = (_a = e.parsedBody) === null || _a === void 0 ? void 0 : _a.tabbed_panel.tabs[1].content.list;
                if (response) {
                    // Включены ли иконки на левой панели
                    let disableAvatar = utils_1.qs('span.s_i_exit') ? true : false;
                    let friendsList = response;
                    let lengthList = (settings_1._SETTINGS.friendsSet.max >
                        friendsList.length ?
                        friendsList.length :
                        settings_1._SETTINGS.friendsSet.max);
                    for (let i = 0; i < lengthList; i++) {
                        frOnDiv.appendChild(utils_1.ce('a', {
                            href: `${strings_1.SPACES}/mysite/index/${friendsList[i].name}`,
                            class: 'li',
                            html: (disableAvatar ?
                                `<span class="comm_ava m for_avatar"><img src="${friendsList[i].avatar.previewURL}" class="preview s21_20"></span>` : '') +
                                `<span class="online-status m"><img class="p14 online_status_ico" src="${strings_1.HTTP}//spac.me/i/${friendsList[i].online_status.on_img}" alt="(ON)"></span><span class="block-item__title m break-word">${friendsList[i].name}</span>`
                        }));
                    }
                    utils_1.info('Панель друзей онлайн', e);
                }
            });
            parent === null || parent === void 0 ? void 0 : parent.appendChild(frOnDiv);
        }
        else {
            frOnDiv === null || frOnDiv === void 0 ? void 0 : frOnDiv.remove();
        }
    }
    catch (e) {
        utils_1.error('friendsOnline.ts', e);
    }
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.galleryRotate = void 0;
const utils_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
exports.galleryRotate = () => {
    // просмотрщик изображений
    let Image = utils_1.qs('#gallery-container');
    // кнопка поворота
    let Rotate = utils_1.qs('#SP_IMAGE_ROTATE');
    // видеоплеер
    let Video = utils_1.qs('.player-dummy_wrap');
    try {
        // встявляем кнопку поворота при условии что есть просмотрщик и главное что это не видеоплеер
        if (Image && !Rotate && !Video) {
            let buttonRotate = utils_1.ce('a', {
                class: 'gallery__tools_button',
                id: 'SP_IMAGE_ROTATE',
                title: 'Повернуть',
                html: '<span class="ico_gallery ico_gallery_reload m"></span>',
                onclick: () => {
                    // градус поворота (0, 90, 180, 270)
                    utils_1.setSettings('angle', (settings_1._SETTINGS.angle + 90) % 360);
                    // применяем класс для повора изображения
                    Image.className = 'accel-3d rotate' + settings_1._SETTINGS.angle;
                    return false;
                }
            });
            // вставляем кнопку поворота после кнопки скачивания
            utils_1.qs('#g_dloadlink').after(buttonRotate);
        }
    }
    catch (e) {
        utils_1.error('galleryRotate.ts', e);
    }
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sidebarButton = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.sidebarButton = () => {
    // Место для вставки кнопки
    utils_1.qsa(`li.li>a[href^="${strings_1.SPACES}/services/"]`).forEach(e => {
        var _a;
        // Включены ли иконки на левой панели
        let icon = utils_1.qs('span.s_i_exit') ? '<span class="sp sp-ico"></span>' : '';
        // Создаем кнопку быстрого доступа в настройки Spaces+
        let link = utils_1.ce('li', {
            class: 'li',
            html: `<a href="${strings_1.SPACES}/settings/?sp_plus_settings=1" title="Настройки Spaces+">${icon}<span class="m s_i_text"> Spaces+</span></a>`
        });
        (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.after(link);
    });
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherWidget = void 0;
const utils_1 = __webpack_require__(0);
const settingsWeather_1 = __webpack_require__(10);
const settings_1 = __webpack_require__(2);
/**
 * Виджет погоды в правом меню
 */
exports.weatherWidget = () => {
    let widget = utils_1.qs('#SP_WIDGET_WEATHER');
    let page_rightbar = utils_1.qs('#page_rightbar');
    /**
     * Из текущего времени вычитаем время последней проверки погоды, если оно больше интервала, то обновляем виджет погоды
     * _SETTINGS.weatherSet.city !== null не пускаем, пока не узнаем город через ipwhois
     */
    if (((unixTime() - settings_1._SETTINGS.weatherSet.time) >
        settings_1._SETTINGS.weatherSet.interval) &&
        settings_1._SETTINGS.weatherSet.city !== null) {
        // обновляем время
        settings_1._SETTINGS.weatherSet.time = unixTime();
        // обновляем виджет
        settingsWeather_1.getWeather();
    }
    if (!widget && page_rightbar && cookieWeather()) {
        let { id, name, main, wind, weather, clouds } = cookieWeather();
        let widgets_group = utils_1.ce('div', {
            class: 'widgets-group_top js-container__block',
            style: 'box-shadow: 0px 3px 5px rgba(93,109,157,0.3)',
            id: 'SP_WIDGET_WEATHER'
        });
        // шапка виджета
        let widget_header = utils_1.ce('div', {
            class: 'b-title cl b-title_first oh',
            html: `
                <a href="https://openweathermap.org/city/${id}" target="_blank" class="b-title__link" style="white-space: unset">
                    <h6 class="span">Погода в г. ${name}</h6>
                </a>
            `
        });
        // контейнер
        let content = utils_1.ce('div', {
            class: 'content',
            style: 'padding: 0px 16px 16px 16px',
            html: `
                <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" class="sp_img-center">
                    <div class="grey sp_weather-container">
                    <p>${Math.round(main.temp)}°C</p>
                    <p>${utils_1.toUpper(weather[0].description)}</p>
                </div>
                <table class="grey sp_weather-table">
                    <tbody>
                        <tr>
                            <td>Облачность: </td>
                            <td>${clouds.all}%</td>
                        </tr>
                        <tr>
                            <td>Влажность: </td>
                            <td>${main.humidity}%</td>
                        </tr>
                        <tr>
                            <td>Давление: </td>
                            <td>${Math.round(main.pressure * 0.75)}mmHg</td>
                        </tr>
                        <tr>
                            <td>Ветер: </td>
                            <td>${wind.speed}m/sec</td>
                        </tr>
                    </tbody>
                </table>
            `
        });
        widgets_group.appendChild(widget_header);
        widgets_group.appendChild(content);
        page_rightbar.appendChild(widgets_group);
    }
};
/**
 * unix время
 */
const unixTime = () => Math.round(new Date().getTime() / 1000.0);
/**
 * получаем данные погоды из cookies, если не нашли, то инициализуем виджет по новой
 */
const cookieWeather = () => {
    const data = utils_1.getCookie('SP_WEATHER');
    if (data !== undefined) {
        return JSON.parse(data);
    }
    else {
        settingsWeather_1.ipWhois();
    }
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComments = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.deleteComments = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    let targetComm = utils_1.qs('h2.span'), childs = utils_1.qsa('span.comment_date'), delLinks = utils_1.qsa('a[class="ajax_delete"'), delBtns = utils_1.qsa(`a[href^="${strings_1.SPACES}/comment/delete/"`), banTarget = utils_1.qs(`a[href="${strings_1.SPACES}/forums/moder/ban/"`);
    try {
        if (childs &&
            delLinks &&
            banTarget &&
            delBtns.length > 0 &&
            (targetComm === null || targetComm === void 0 ? void 0 : targetComm.textContent) === 'Комментарии') {
            for (let child of childs) {
                // к новым комментариям добавляем чекбоксы
                if (!child.getElementsByTagName('input').length) {
                    // Нихуевый костыль!
                    let DC = strings_1.DEVICE.id === 4 ? (_e = (_d = (_c = (_b = (_a = 
                    // pc
                    child.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.id : (_m = (_l = (_k = (_j = (_h = (_g = (_f = 
                    // touch
                    child.parentElement) === null || _f === void 0 ? void 0 : _f.parentElement) === null || _g === void 0 ? void 0 : _g.parentElement) === null || _h === void 0 ? void 0 : _h.parentElement) === null || _j === void 0 ? void 0 : _j.parentElement) === null || _k === void 0 ? void 0 : _k.parentElement) === null || _l === void 0 ? void 0 : _l.parentElement) === null || _m === void 0 ? void 0 : _m.id;
                    // еще костыль хуле
                    if (parseInt(DC)) {
                        let checkbox = utils_1.ce('input', {
                            type: 'checkbox',
                            class: 'sp-cbfc sp-checkbox-square',
                            id: `DC_${DC}`
                        });
                        child.appendChild(checkbox);
                        child.appendChild(utils_1.ce('label', {
                            attr: {
                                'for': `DC_${DC}`
                            }
                        }));
                    }
                }
            }
            // группа кнопок
            if (!utils_1.qs('#SP_PLUS_BUTTONS')) {
                let buttonsDiv = utils_1.ce('div', {
                    class: 'widgets-group user__tools_last',
                    id: 'SP_PLUS_BUTTONS'
                });
                const chooseAllButton = utils_1.ce('button', {
                    class: 'user__tools-link table__cell sp_btn-list',
                    html: '<span class="sp sp-ok-blue"></span><span class="sp-ch-text">Выбрать все</span>',
                    onclick: (e) => {
                        if (e.target instanceof Element) {
                            let inputs = utils_1.qsa('input[id^="DC_"]');
                            let parent = e.target.nodeName === 'SPAN' ?
                                e.target.parentNode :
                                e.target;
                            for (let input of inputs) {
                                input.checked =
                                    parent.innerHTML.indexOf('Выбрать все') !== -1 ?
                                        true :
                                        false;
                            }
                            parent.innerHTML = `
                                <span class="sp sp-ok-blue"></span>
                                    <span class="sp-ch-text">
                                    ${parent.innerHTML.indexOf('Выбрать все') !== -1 ?
                                'Снять отметки' :
                                'Выбрать все'}
                                </span>
                            `;
                        }
                    }
                });
                const deleteCommentsButton = utils_1.ce('button', {
                    class: 'user__tools-link table__cell sp_btn_line sp_btn-list',
                    html: '<span class="sp sp-remove-red"></span><span class="sp-del-text">Удалить выбранные</span>',
                    onclick: () => {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                        let inputs = utils_1.qsa('input[id^="DC_"]'), urls = [];
                        for (let input of inputs) {
                            if (input.checked) {
                                Array.prototype.slice.call((_l = (strings_1.DEVICE.id === 4 ? (_d = (_c = (_b = (_a = 
                                // костыль для PC
                                input === null || 
                                // костыль для PC
                                input === void 0 ? void 0 : 
                                // костыль для PC
                                input.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode) === null || _d === void 0 ? void 0 : _d.parentNode : (_k = (_j = (_h = (_g = (_f = (_e = 
                                // костыль для Touch
                                input === null || 
                                // костыль для Touch
                                input === void 0 ? void 0 : 
                                // костыль для Touch
                                input.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode) === null || _f === void 0 ? void 0 : _f.parentNode) === null || _g === void 0 ? void 0 : _g.parentNode) === null || _h === void 0 ? void 0 : _h.parentNode) === null || _j === void 0 ? void 0 : _j.parentNode) === null || _k === void 0 ? void 0 : _k.parentNode)) === null || _l === void 0 ? void 0 : _l.querySelectorAll(`a[href^="${strings_1.SPACES}/comment/delete/"]`))
                                    .filter(e => {
                                    if (e.textContent === 'Удалить')
                                        urls.push(e.href);
                                });
                            }
                        }
                        let count = urls.length;
                        if (count > 0) {
                            utils_1.confirmBox(`Вы действительно хотите удалить ${count} ${declStr(count)}?`, true, async () => {
                                let allComments = count;
                                for (let url of urls) {
                                    utils_1.messageBox(`Осталось удалить ${count--} из ${allComments} ${declStr(count)}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>', false);
                                    await utils_1.http('GET', url, true).then(e => {
                                        utils_1.info('Удалил комментарий', e);
                                    });
                                }
                                document.location.reload();
                            });
                        }
                        else {
                            utils_1.messageBox('Внимание!', 'Отметьте галочкой, те комментарии, которые вы хотите удалить и попробуйте еще раз', true, 5);
                        }
                        return false;
                    }
                });
                buttonsDiv.appendChild(deleteCommentsButton);
                buttonsDiv.appendChild(chooseAllButton);
                utils_1.qs('div.js-comments-pgn').after(buttonsDiv);
            }
        }
    }
    catch (e) {
        utils_1.error('deleteComments.ts', e);
    }
};
const declStr = (count) => 'комментари' + utils_1.declOfNum(count, ['й', 'я', 'ев']);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hiddenRightbar = void 0;
const utils_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
exports.hiddenRightbar = (b) => {
    let rightbar = utils_1.qs('#page_rightbar');
    /**
     * Отключаем виджет погоды, если скрываем правое меню
     */
    if (b && settings_1._SETTINGS.weather)
        utils_1.qs('#weather').click();
    try {
        if (b && !rightbar.hasAttribute('sp-hidden-rightbar')) {
            rightbar.style.display = 'none';
            rightbar.setAttribute('sp-hidden-rightbar', '1');
        }
        else if (rightbar.hasAttribute('sp-hidden-rightbar')) {
            rightbar.style.display = 'block';
            rightbar.removeAttribute('sp-hidden-rightbar');
        }
    }
    catch (e) {
        utils_1.error('hidderRightbar.ts', e);
    }
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.playerDownload = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.playerDownload = () => {
    var _a;
    try {
        let trId = 0, track = sessionStorage.getItem('music:track'), data = sessionStorage.getItem('music:playlist'), downPlace = utils_1.qs('#SP_MUSIC_DOWN'), player = utils_1.qs('#gp_main_player');
        if (player && track && data) {
            let jstr = JSON.parse(track);
            let jspl = JSON.parse(data);
            trId = parseInt(jstr.id, 10);
            let trScr = jspl.playlist.playlist[trId].src;
            let tdIc = utils_1.qs('a.js-music_repeat');
            if (tdIc && !downPlace) {
                strings_1.DATA.PLAYER = trId;
                let dwnTd = utils_1.ce('td', {
                    id: 'SP_MUSIC_DOWN',
                    class: 'ico_td',
                    innerHTML: '<span style="margin: 0px 6px 0px 0px !important" class="sp sp-download-darkblue" title="Скачать"></span>',
                    onclick: () => location.href = trScr
                });
                (_a = tdIc.parentElement) === null || _a === void 0 ? void 0 : _a.after(dwnTd);
            }
            else if (downPlace && strings_1.DATA.PLAYER !== trId) {
                strings_1.DATA.PLAYER = trId;
                downPlace.onclick = () => location.href = trScr;
                utils_1.info('Обновили ссылку на трек', jstr);
            }
        }
    }
    catch (e) {
        utils_1.error('playerDownload.ts', e);
    }
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsNotify = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
const settings_1 = __webpack_require__(2);
exports.settingsNotify = (e) => {
    var _a;
    try {
        if (!('Notification' in window)) {
            utils_1.messageBox('Внимание!', 'Ваш браузер не поддерживает уведомления', true, 5);
        }
        else if (Notification.permission.toLowerCase() !== 'denied') {
            Notification.requestPermission((permission) => {
                if (permission.toLowerCase() !== 'granted') {
                    utils_1.messageBox('Внимание!', `Разрешите браузеру показывать уведомления с сайта ${strings_1.BASE_URL}, чтобы пользоваться функцией`, true, 5);
                }
            });
        }
        else {
            utils_1.messageBox('Внимание!', `Вы запретили показывать уведомления для сайта ${strings_1.BASE_URL}`, true, 5);
        }
        let eventsWrap = utils_1.ce('div', { id: 'SP_PLUS_EVENTS' });
        let descInp = utils_1.ce('label', {
            html: 'Ссылка на аудиофайл:<div class="label__desc">.ogg или .wav</div>',
            style: 'margin-right: -17px',
            class: 'label'
        });
        let descRange = utils_1.ce('label', { html: 'Громкость:', class: 'label' });
        let divInp = utils_1.ce('div', { class: 'text-input__wrap', style: 'margin: 15px' });
        let div = utils_1.ce('div', { style: 'margin: 15px' });
        let label1 = utils_1.ce('label', { class: 'stnd-link sp_noborder' });
        let label2 = utils_1.ce('label', { class: 'stnd-link sp_noborder' });
        let label3 = utils_1.ce('label', { class: 'stnd-link sp_noborder' });
        let eventsUrl = utils_1.ce('input', {
            type: 'text',
            value: settings_1._SETTINGS.notifySet.url,
            class: 'text-input'
        });
        eventsUrl.addEventListener('input', (e) => {
            if (utils_1.isValidUrl(e.target.value) && /\.(ogg|mp3|wav)$/i.test(e.target.value)) {
                utils_1.setSettings('notifySet.url', e.target.value);
                eventsUrl.classList.remove('sp-input-error');
            }
            else {
                eventsUrl.classList.add('sp-input-error');
            }
        });
        let testPlay = utils_1.ce('span', {
            class: 'text-input__btn',
            html: '<span class="sp sp-play-green"></span>',
            style: 'top: 23px',
            title: 'Прослушать',
            onclick: () => utils_1.playSound(settings_1._SETTINGS.notifySet.url, settings_1._SETTINGS.notifySet.volume)
        });
        let volume = utils_1.ce('div', {
            class: 'label__desc',
            html: `${settings_1._SETTINGS.notifySet.volume}%`
        });
        let volRange = utils_1.ce('input', {
            type: 'range',
            min: 0,
            max: 100,
            step: 1,
            value: settings_1._SETTINGS.notifySet.volume
        });
        volRange.addEventListener('input', (e) => {
            if (!isNaN(e.target.value)) {
                let setVol = parseInt(e.target.value, 10);
                if (setVol < 0 || setVol > 100)
                    setVol = 70;
                volume.innerHTML = setVol + '%';
                utils_1.setSettings('notifySet.volume', setVol);
            }
        });
        let mailEvent = utils_1.ce('input', {
            type: 'checkbox',
            id: 'sp_event_mail',
            class: 'sp-checkbox-square',
            checked: settings_1._SETTINGS.notifySet.mail,
            onclick: (e) => utils_1.setSettings('notifySet.mail', e.target.checked)
        });
        let mailEventLbl = utils_1.ce('label', {
            attr: { 'for': 'sp_event_mail' },
            html: 'Уведомлять о почте'
        });
        let jourEvent = utils_1.ce('input', {
            type: 'checkbox',
            id: 'sp_event_journal',
            class: 'sp-checkbox-square',
            checked: settings_1._SETTINGS.notifySet.journal,
            onclick: (e) => utils_1.setSettings('notifySet.journal', e.target.checked)
        });
        let jourEventLbl = utils_1.ce('label', {
            attr: { 'for': 'sp_event_journal' },
            html: 'Уведомлять о журнале'
        });
        let feedEvent = utils_1.ce('input', {
            type: 'checkbox',
            id: 'sp_event_feed',
            class: 'sp-checkbox-square',
            checked: settings_1._SETTINGS.notifySet.feed,
            onclick: (e) => utils_1.setSettings('notifySet.feed', e.target.checked)
        });
        let feedEventLbl = utils_1.ce('label', {
            attr: { 'for': 'sp_event_feed' },
            html: 'Уведомлять о ленте'
        });
        divInp.appendChild(descInp);
        divInp.appendChild(eventsUrl);
        divInp.appendChild(testPlay);
        descRange.appendChild(volume);
        div.appendChild(descRange);
        div.appendChild(volRange);
        eventsWrap.appendChild(divInp);
        eventsWrap.appendChild(div);
        label1.appendChild(mailEvent);
        label1.appendChild(mailEventLbl);
        label2.appendChild(jourEvent);
        label2.appendChild(jourEventLbl);
        label3.appendChild(feedEvent);
        label3.appendChild(feedEventLbl);
        eventsWrap.appendChild(label1);
        eventsWrap.appendChild(label2);
        eventsWrap.appendChild(label3);
        (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.after(eventsWrap);
    }
    catch (e) {
        utils_1.error('settingsNotify.ts', e);
    }
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.disableRedirect = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.disableRedirect = () => {
    // @ts-ignore Все еще костыль, но так лучше
    utils_1.qsa(`a[href^="${strings_1.SPACES}/redirect/"`).forEach(e => e.href = utils_1.getParams(e)['redirect']);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsLogMenu = void 0;
const utils_1 = __webpack_require__(0);
const checkUpdates_1 = __webpack_require__(11);
const strings_1 = __webpack_require__(1);
exports.settingsLogMenu = (id) => {
    window.scrollTo(0, 0);
    const target = utils_1.qs(id);
    if (target) {
        try {
            target.innerHTML = '';
            let wrap = utils_1.ce('div', { class: 'wbg error__item_wrapper sp_plus_c_wrap' });
            let div = utils_1.ce('div', { class: 'pad_t_a' });
            let container = utils_1.ce('div', { class: 'js-input_error_wrap' });
            let preloader = utils_1.ce('div', { class: 't_center', id: 'SP_JSON_PRELOADER', html: `<img src="${strings_1.HTTP}//spac.me/i/preloader.gif">` });
            container.appendChild(div);
            wrap.appendChild(container);
            target.appendChild(wrap);
            wrap.appendChild(preloader);
            checkUpdates_1.getUpdater((json) => {
                for (let history of json.history) {
                    let label = utils_1.ce('label', {
                        class: 'label sp_plus_line_c',
                        html: `v${utils_1.rever(history.build)}<div class="label__desc">${history.date}</div>`
                    });
                    let changes = utils_1.ce('div', {
                        class: 'grey sp_plus_c_desc',
                        html: history.changes
                    });
                    div.appendChild(label);
                    div.appendChild(changes);
                }
                utils_1.qs('#SP_JSON_PRELOADER').remove();
            });
        }
        catch (e) {
            utils_1.error('settingsLogMenu.ts', e);
        }
    }
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsFriends = void 0;
const utils_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
exports.settingsFriends = (e) => {
    var _a;
    try {
        let frMaxWrap = utils_1.ce('div', { id: 'SP_PLUS_MAXFRIENDS' });
        let div = utils_1.ce('div', { class: 'sp_settings-wrap' });
        let frMax = utils_1.ce('input', {
            type: 'text',
            class: 'text-input',
            size: 4,
            attr: { maxlength: 2 },
            value: settings_1._SETTINGS.friendsSet.max
        });
        frMax.addEventListener('change', (e) => {
            if (/^([1-9]|1[0-5])$/i.test(e.target.value)) {
                utils_1.setSettings('friendsSet.max', e.target.value);
                frMax.classList.remove('sp-input-error');
            }
            else {
                frMax.classList.add('sp-input-error');
            }
        });
        let frMaxLbl = utils_1.ce('label', {
            html: 'Выводить друзей:<div class="label__desc">от 1 до 15</div>',
            class: 'label'
        });
        div.appendChild(frMaxLbl);
        div.appendChild(frMax);
        frMaxWrap.appendChild(div);
        (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.after(frMaxWrap);
    }
    catch (e) {
        utils_1.error('settingsFriends.ts', e);
    }
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsFeatures = void 0;
const utils_1 = __webpack_require__(0);
const newbeeQuest_1 = __webpack_require__(66);
const settings_1 = __webpack_require__(2);
const strings_1 = __webpack_require__(1);
// Встроенные возможности сайта
exports.settingsFeatures = (root) => {
    let wrap = utils_1.ce('div', { id: 'wrap_spaces_option' });
    // API Отладчик
    let apidebug = utils_1.ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_font_sm',
        html: btnWrap(settings_1._SETTINGS.apidebug ?
            '<span class="sp sp-remove-grey mr-14"></span>Отключить отладчик' :
            '<span class="sp sp-settings mr-14"></span>Включить отладчик'),
        onclick: () => {
            utils_1.setSettings('apidebug', settings_1._SETTINGS.apidebug ? false : true);
            document.location.reload();
            return false;
        }
    });
    const beta = utils_1.getCookie('sandbox');
    // Вход в бета песочницу
    let sndbeta = utils_1.ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_font_sm',
        id: 'sp_spacesAction_beta',
        html: btnWrap(beta ?
            '<span class="sp sp-exit-grey mr-14"></span>Выйти из песочницы' :
            '<span class="sp sp-enter-grey mr-14"></span>Войти в песочницу'),
        onclick: () => {
            beta ? utils_1.delCookie('sandbox') : utils_1.setCookie('sandbox', 'beta');
            document.location.reload();
            return false;
        }
    });
    const fat = utils_1.getCookie('force_ajax_transport');
    // вкл/выкл полосы загрузки
    let fatWrap = utils_1.ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_font_sm',
        id: 'sp_spacesFAT',
        html: btnWrap(fat ?
            '<span class="sp sp-remove-grey mr-14"></span>Убрать полосу загрузки' :
            '<span class="sp sp-ok-grey mr-14"></span>Добавить полосу загрузки страницы'),
        onclick: () => {
            fat ? utils_1.delCookie('force_ajax_transport') : utils_1.setCookie('force_ajax_transport', '1');
            document.location.reload();
            return false;
        }
    });
    const glb = utils_1.getCookie('gp_left_btn');
    // закреп/откреп плеера из левой панели
    let glbWrap = utils_1.ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_last_btn',
        id: 'sp_spacesGLB',
        html: btnWrap(glb ?
            '<span class="sp sp-remove-grey mr-14"></span>Убрать плеер из левой панели' :
            '<span class="sp sp-ok-grey mr-14"></span>Закрепить плеер на левой панели'),
        onclick: () => {
            glb ? utils_1.delCookie('gp_left_btn') : utils_1.setCookie('gp_left_btn', '1');
            document.location.reload();
            return false;
        }
    });
    // кнопка скрытия квеста новичка
    let nbqLink = utils_1.ce('a', {
        href: '#',
        style: 'display: none',
        id: 'sp_newbequest_togl',
        class: 'stnd-link stnd-link_arr sp_line sp_last_btn sp_newbq_l',
        html: btnWrap('<span class="sp sp-remove-grey mr-14"></span>Скрыть квест новичка'),
        onclick: () => {
            utils_1.confirmBox('Вы действительно хотите скрыть квест новичка?', true, () => {
                utils_1.http('GET', `${strings_1.SPACES}/newbequest/?CK=${strings_1.DATA.CK}`, true).then(e => {
                    if (e.status === 200)
                        utils_1.messageBox('Поздравляем!', 'Квест новичка был успешно скрыт', true, 5);
                });
            });
            return false;
        }
    });
    wrap.appendChild(apidebug);
    wrap.appendChild(sndbeta);
    wrap.appendChild(fatWrap);
    wrap.appendChild(glbWrap);
    wrap.appendChild(nbqLink);
    root.appendChild(wrap);
    // Проверяем скрыт ли квест новичка
    newbeeQuest_1.newbeeQuest();
};
/**
 * Обертка кнопок
 * @param str
 */
const btnWrap = (str) => `<span class="b">${str}<span class="ico ico_arr ico_m"></span></span>`;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.newbeeQuest = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.newbeeQuest = async () => {
    let newbequest = utils_1.qs('#sp_newbequest_togl');
    if (newbequest) {
        try {
            await utils_1.http('GET', `${strings_1.SPACES}/mysite/`, true).then(e => {
                var _a;
                if ((_a = e.parsedBody) === null || _a === void 0 ? void 0 : _a.owner_widget.newbee_quest_widget) {
                    newbequest.style.display = 'block';
                }
                utils_1.info('Квест новичка', e);
            });
        }
        catch (e) {
            utils_1.error('newbeeQuest.ts', e);
        }
    }
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.videoSpeedPlayback = void 0;
const utils_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
exports.videoSpeedPlayback = () => {
    let jwcontrols = utils_1.qs('span.jwcontrols');
    let playback = utils_1.qs('#SP_PLAYBACK_VIDEO');
    try {
        if (playback)
            utils_1.qs('video').playbackRate = settings_1._SETTINGS.videoSpeed;
        if (jwcontrols && !playback) {
            let target = utils_1.qs('span[class*="jwtext jwduration jwhidden"]');
            let buttonPlayback = utils_1.ce('span', {
                class: 'jwtext jwduration jwhidden',
                id: 'SP_PLAYBACK_VIDEO',
                html: 'x' + settings_1._SETTINGS.videoSpeed,
                onclick: () => {
                    let videoSpeed = (settings_1._SETTINGS.videoSpeed + 0.25) % 2.25;
                    if (videoSpeed === 0)
                        videoSpeed = 0.5;
                    utils_1.setSettings('videoSpeed', videoSpeed);
                    buttonPlayback.innerHTML = 'x' + videoSpeed;
                    return false;
                }
            });
            target.after(buttonPlayback);
        }
    }
    catch (e) {
        utils_1.error('videoSpeedPlayback.ts', e);
    }
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsBackground = void 0;
const utils_1 = __webpack_require__(0);
const setStyles_1 = __webpack_require__(9);
const settings_1 = __webpack_require__(2);
const strings_1 = __webpack_require__(1);
exports.settingsBackground = (e) => {
    var _a;
    try {
        let div = utils_1.ce('div', { class: 'text-input__wrap' }), bgWrap = utils_1.ce('div', { id: 'SP_PLUS_BODYSTYLE' }), label = utils_1.ce('label', { class: 'stnd-link', style: 'border-bottom: none' }), label1 = utils_1.ce('label', { class: 'stnd-link', style: 'border-bottom: none' }), bstlWrap = utils_1.ce('div', { class: 'bstrwrap', style: 'border-bottom: none; padding: 15px' });
        let descriptionUrl = utils_1.ce('label', {
            html: 'Ссылка на изображение:<div class="label__desc">.jpg или .png</div>',
            style: 'margin-right: -17px',
            class: 'label'
        });
        let descriptionColor = utils_1.ce('label', {
            html: 'Цвет фона:<div class="label__desc">#RRGGBB</div>',
            style: 'margin-right: -17px',
            class: 'label'
        });
        let inputImageUrl = utils_1.ce('input', {
            type: 'text',
            id: 'image-input',
            value: settings_1._SETTINGS.bodystyleSet.url,
            style: 'margin-bottom: 7px',
            class: 'text-input'
        });
        inputImageUrl.addEventListener('change', (e) => {
            if (utils_1.isValidUrl(e.target.value) && /\.(jpg|jpeg|png|gif)$/i.test(e.target.value)) {
                utils_1.setSettings('bodystyleSet.url', e.target.value);
                setStyles_1.setStyles();
                inputImageUrl.classList.remove('sp-input-error');
            }
            else {
                inputImageUrl.classList.add('sp-input-error');
            }
        });
        let inputColor = utils_1.ce('input', {
            type: 'text',
            class: 'text-input',
            id: 'color-input',
            value: settings_1._SETTINGS.bodystyleSet.color
        });
        inputColor.addEventListener('input', (e) => {
            if (/^\#([A-Za-z0-9]{3,6})$/i.test(e.target.value)) {
                utils_1.setSettings('bodystyleSet.color', e.target.value);
                setStyles_1.setStyles();
                inputColor.classList.remove('sp-input-error');
            }
            else {
                inputColor.classList.add('sp-input-error');
            }
        });
        let radioImage = utils_1.ce('input', {
            type: 'radio',
            id: 'sp_set_bodystyle_URL',
            checked: settings_1._SETTINGS.bodystyleSet.urlchecked,
            class: 'sp-checkbox-circle',
            onclick: (e) => {
                utils_1.setSettings('bodystyleSet.urlchecked', e.target.checked);
                if (e.target.checked && radioColor.checked) {
                    radioColor.checked = false;
                    utils_1.setSettings('bodystyleSet.colorchecked', false);
                }
                if (settings_1._SETTINGS.bodystyleSet.urlchecked) {
                    setStyles_1.setStyles();
                    setImage();
                }
                else {
                    utils_1.qs('#SP_WRAP_IMAGE').remove();
                }
            }
        });
        let radioColor = utils_1.ce('input', {
            type: 'radio',
            id: 'sp_set_bodystyle_color',
            checked: settings_1._SETTINGS.bodystyleSet.colorchecked,
            class: 'sp-checkbox-circle',
            onclick: (e) => {
                utils_1.setSettings('bodystyleSet.colorchecked', e.target.checked);
                if (e.target.checked && radioImage.checked) {
                    radioImage.checked = false;
                    utils_1.setSettings('bodystyleSet.urlchecked', false);
                }
                if (settings_1._SETTINGS.bodystyleSet.colorchecked) {
                    setStyles_1.setStyles();
                    setColor();
                }
                else {
                    utils_1.qs('#SP_WRAP_COLOR').remove();
                }
            }
        });
        let lblstylelbl = utils_1.ce('label', {
            attr: { 'for': 'sp_set_bodystyle_URL' },
            html: 'Выбрать изображение'
        });
        let lblstyleclbl = utils_1.ce('label', {
            attr: { 'for': 'sp_set_bodystyle_color' },
            html: 'Подобрать цвет'
        });
        div.appendChild(descriptionUrl);
        div.appendChild(inputImageUrl);
        div.appendChild(descriptionColor);
        div.appendChild(inputColor);
        label.appendChild(radioImage);
        label.appendChild(lblstylelbl);
        label1.appendChild(radioColor);
        label1.appendChild(lblstyleclbl);
        bstlWrap.appendChild(div);
        bgWrap.appendChild(bstlWrap);
        bgWrap.appendChild(label);
        bgWrap.appendChild(label1);
        (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.after(bgWrap);
        if (settings_1._SETTINGS.bodystyleSet.urlchecked) {
            setImage();
        }
        if (settings_1._SETTINGS.bodystyleSet.colorchecked) {
            setColor();
        }
    }
    catch (e) {
        utils_1.error('settingsBackground.ts', e);
    }
};
const setImage = async () => {
    try {
        if (!utils_1.qs('#SP_WRAP_IMAGE')) {
            if (utils_1.qs('#SP_WRAP_COLOR')) {
                utils_1.qs('#SP_WRAP_COLOR').remove();
                utils_1.qs('#SP_PLUS_CP_STYLE').remove();
            }
            let style = utils_1.ce('link', {
                rel: 'stylesheet',
                type: 'text/css',
                id: 'SP_PLUS_IMAGE_STYLE',
                href: `${strings_1.ENV_PATH}/css/bodystyle.css?r=${strings_1.REVISION}`
            });
            document.getElementsByTagName('head')[0].appendChild(style);
            let SPB = utils_1.qs('#SP_PLUS_BODYSTYLE'), gd = utils_1.ce('div', { class: 'js-gallery_skip wbg oh tiles_block tiles_wrapper' }), stdnI = utils_1.ce('div', { id: 'SP_WRAP_IMAGE', style: 'border-top: 1px solid #cdd4e1' });
            await utils_1.http('GET', `${strings_1.ENV_PATH}/data.json?r=${strings_1.REVISION}`, false).then(e => {
                var _a, _b;
                if (e.status === 200 && ((_a = e.parsedBody) === null || _a === void 0 ? void 0 : _a.backgrounds)) {
                    for (let i of (_b = e.parsedBody) === null || _b === void 0 ? void 0 : _b.backgrounds) {
                        let d1 = utils_1.ce('div', { class: 'js-file_item tiled_item tiled_item-200' }), d2 = utils_1.ce('div', { class: 'tiled_inner t_center relative' }), s3 = utils_1.ce('span', { class: 'relative sp_bg-items' }), ds1 = utils_1.ce('div', { class: 'tiled-preview border' }), img = utils_1.ce('img', {
                            class: 'preview s201_200',
                            style: 'cursor: pointer',
                            src: `${strings_1.ENV_PATH}/backgrounds/${i}`,
                            onclick: (e) => {
                                utils_1.qs('#image-input').value = e.target.src;
                                utils_1.setSettings('bodystyleSet.url', e.target.src);
                                setStyles_1.setStyles();
                            }
                        });
                        ds1.appendChild(img);
                        s3.appendChild(ds1);
                        d2.appendChild(s3);
                        d1.appendChild(d2);
                        gd.appendChild(d1);
                    }
                    stdnI.appendChild(gd);
                    SPB.appendChild(stdnI);
                }
                setStyles_1.setStyles();
            });
        }
    }
    catch (e) {
        utils_1.error('setImage', e);
    }
};
const setColor = () => {
    try {
        if (!utils_1.qs('#SP_WRAP_COLOR')) {
            if (utils_1.qs('#SP_WRAP_IMAGE')) {
                utils_1.qs('#SP_WRAP_IMAGE').remove();
                utils_1.qs('#SP_PLUS_IMAGE_STYLE').remove();
            }
            let style = utils_1.ce('link', {
                rel: 'stylesheet',
                type: 'text/css',
                id: 'SP_PLUS_CP_STYLE',
                href: `${strings_1.ENV_PATH}/css/user-content.css?r=${strings_1.REVISION}`
            });
            document.getElementsByTagName('head')[0].appendChild(style);
            let colorsTd = utils_1.ce('div', {
                class: 'stnd-block'
            });
            let bodyStyle = utils_1.qs('#SP_PLUS_BODYSTYLE'), stdnC = utils_1.ce('div', { id: 'SP_WRAP_COLOR', style: 'border-top: 1px solid #cdd4e1' }), table = utils_1.ce('table', { class: 'table__wrap bb-colorpicker' }), tbody = utils_1.ce('tbody'), tr = utils_1.ce('tr'), td1 = utils_1.ce('td', { class: 'table__cell' });
            // цвета для быстрого выбора
            const colors = [
                [
                    '#90CAF9',
                    '#80DEEA',
                    '#A5D6A7',
                    '#FFF59D',
                    '#FFCC80',
                    '#FFAB91',
                    '#CE93D8'
                ],
                [
                    '#2196F3',
                    '#00BCD4',
                    '#4CAF50',
                    '#FFEB3B',
                    '#FF9800',
                    '#F44336',
                    '#9C27B0',
                ],
                [
                    '#1565C0',
                    '#00838F',
                    '#2E7D32',
                    '#F9A825',
                    '#EF6C00',
                    '#C62828',
                    '#6A1B9A'
                ],
                [
                    '#ECF0F1',
                    '#CFD8DC',
                    '#B0BEC5',
                    '#97A6B0',
                    '#546E7A',
                    '#44565E',
                    '#3A474C'
                ]
            ];
            for (let color of colors) {
                for (let i in color) {
                    let dd = utils_1.ce('div', {
                        style: `background-color: ${color[i]}`,
                        class: 'js-bb_color toolbar-color pointer',
                        attr: {
                            'data-val': color[i],
                            'data-tag': 'fon'
                        }
                    });
                    colorsTd.appendChild(dd);
                }
                colorsTd.appendChild(utils_1.ce('br'));
            }
            td1.appendChild(colorsTd);
            tr.appendChild(td1);
            let td2 = utils_1.ce('td', { class: 'table__cell table__cell_last' }), stnd = utils_1.ce('div', { class: 'stnd-block' }), container = utils_1.ce('div', { class: 'js-bb_colorpicker' });
            stnd.appendChild(container);
            td2.appendChild(stnd);
            tr.appendChild(td2);
            tbody.appendChild(tr);
            table.appendChild(tbody);
            stdnC.appendChild(table);
            bodyStyle.appendChild(stdnC);
            setTimeout(() => {
                // @ts-ignore
                let picker = new CP(container, false, container);
                utils_1.qs('#color-input').addEventListener('change', (e) => {
                    if (/^\#([A-Za-z0-9]{3}|[A-Za-z0-9]{6})$/i.test(e.target.value)) {
                        utils_1.setSettings('bodystyleSet.color', e.target.value);
                        setStyles_1.setStyles();
                        picker.set(settings_1._SETTINGS.bodystyleSet.color);
                        e.target.classList.remove('sp-input-error');
                    }
                    else {
                        e.target.classList.add('sp-input-error');
                    }
                });
                picker.enter();
                picker.set(settings_1._SETTINGS.bodystyleSet.color);
                picker.on('change', (e) => {
                    const value = `#${e.toUpperCase()}`;
                    setValues(value);
                    utils_1.setSettings('bodystyleSet.color', value);
                    setStyles_1.setStyles();
                });
                const colorsBtn = document.querySelectorAll('.js-bb_color');
                for (let color of colorsBtn) {
                    color.addEventListener('click', (e) => {
                        let value = e.target.getAttribute('data-val');
                        setValues(value);
                        utils_1.setSettings('bodystyleSet.color', value);
                        setStyles_1.setStyles();
                        picker.set(value);
                    });
                }
            }, 100);
        }
    }
    catch (e) {
        utils_1.error('setColor', e);
    }
};
const setValues = (color) => {
    utils_1.qs('input[name=color]').value = color;
    utils_1.qs('#color-input').value = color;
    utils_1.qs('.colorpicker-color').style.backgroundColor = color;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsBackupMenu = void 0;
const utils_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
/**
 * Меню импорта/экспорта файла настроек
 * @param id #SP_PLUS_SETAREA
 */
exports.settingsBackupMenu = (id) => {
    var _a;
    // Прокручиваем страницу вверх
    window.scrollTo(0, 0);
    const target = utils_1.qs(id);
    // https://www.npmjs.com/package/json-beautify
    const beautify = __webpack_require__(70);
    if (target) {
        try {
            // Очищаем #SP_PLUS_SETAREA
            target.innerHTML = '';
            // Предупреждение для ламеров
            if (!settings_1._SETTINGS.hideNotify.configImport) {
                let hideNotify = utils_1.ce('span', {
                    class: 'sp sp-remove-grey pointer right notif_close close_h',
                    style: 'margin: 10px',
                    title: 'Понятно, больше не показывать.',
                    onclick: () => {
                        utils_1.setSettings('hideNotify.configImport', true);
                        utils_1.qs('#SP_CONFIG_JSON').remove();
                    }
                });
                let smallInfo = utils_1.ce('div', {
                    class: 'stnd-block-yellow',
                    style: 'padding: 16px',
                    html: '<span class="sp sp-alert"></span>Внимание!</br></br><div style="font-size: small">Редактирование только для опытных пользователей! Перед редактированием файла настроек, следует сделать Экспорт, если что-то пошло не так, следует сделать Импорт настроек.</div>'
                });
                let infoDiv = utils_1.ce('div', { id: 'SP_CONFIG_JSON' });
                infoDiv.appendChild(hideNotify);
                target.appendChild(infoDiv);
                infoDiv.appendChild(smallInfo);
            }
            let wrap = utils_1.ce('div', { style: 'padding: 16px 16px 14px 16px' }), buttonsDiv = utils_1.ce('div', { class: 'widgets-group user__tools_last', id: 'SP_PLUS_BOTTOM_DIVB' }), textareaBtn = utils_1.ce('div', { class: 'widgets-group user__tools_last', style: 'margin: unset' }), tiw = utils_1.ce('div', { class: 'text-input__wrap' }), cl = utils_1.ce('div', { class: 'cl' });
            let updateButton = utils_1.ce('button', {
                class: 'user__tools-link table__cell sp_btn',
                style: 'border-right: none; border-top: 1px solid #cdd4e1',
                html: '<span class="sp sp-ok-darkblue"></span><span style="color: #0e3c87; padding-left: 10px">Применить изменения</span>',
                onclick: () => {
                    var _a;
                    let json, val = utils_1.qs('#SP_BACKUP_JSON').value;
                    try {
                        // валидация лоооол
                        json = JSON.parse(val);
                        // удаляем алерты с ошибками, если они есть
                        (_a = utils_1.qs('#SP_PLUS_ALERT')) === null || _a === void 0 ? void 0 : _a.remove();
                        // сохраняем настройки
                        utils_1.setCookie('SP_PLUS_SET', val);
                        // сообщение
                        utils_1.messageBox('Импорт и экспорт настроек', 'Настройки были успешно сохранены', true, 3);
                    }
                    catch (e) {
                        utils_1.messageBox('Ошибка разбора файла настроек', e, true);
                    }
                }
            });
            let restoreInput = utils_1.ce('input', {
                id: 'SP_IMPORT',
                attr: {
                    type: 'file',
                    accept: 'application/JSON'
                },
                style: 'display: none'
            });
            restoreInput.addEventListener('change', () => {
                let json, textarea = utils_1.qs('#SP_BACKUP_JSON'), f = utils_1.qs('#SP_IMPORT').files[0];
                const reader = new FileReader();
                reader.onload = ((f) => {
                    return (e) => {
                        try {
                            json = JSON.parse(e.target.result);
                            // сохраняем настройки
                            utils_1.setCookie('SP_PLUS_SET', e.target.result);
                            // вставляем в textarea
                            textarea.value = beautify(json, null, 4);
                            utils_1.messageBox('Импорт и экспорт настроек', 'Настройки были успешно сохранены', true, 3);
                        }
                        catch (e) {
                            utils_1.messageBox('Ошибка разбора файла настроек', e, true);
                        }
                    };
                })(f);
                reader.readAsText(f);
            }, false);
            let restoreButton = utils_1.ce('button', {
                class: 'user__tools-link table__cell sp_btn_line sp_btn-list',
                html: '<span class="sp sp-restore-g"></span><span style="color: #3ca93c; padding-left: 10px">Импорт</span>',
                onclick: () => utils_1.qs('#SP_IMPORT').click()
            });
            let saveButton = utils_1.ce('button', {
                class: 'user__tools-link sp_btn-list',
                html: '<span class="sp sp-download-blue"></span><span style="color: #57A3EA; padding-left: 10px;">Экспорт</span>',
                onclick: () => {
                    utils_1.confirmBox('Вы уверены, что хотите сохранить файл настроек?', false, () => {
                        let blob = utils_1.ce('a', {
                            attr: {
                                href: URL.createObjectURL(new Blob([beautify(settings_1._SETTINGS, null, 4)], { type: 'text/plain' })),
                                download: `spaces-plus-${+new Date}.json`
                            }
                        });
                        blob.click();
                        blob.remove();
                    });
                }
            });
            let textarea = utils_1.ce('textarea', {
                class: 'text-input',
                id: 'SP_BACKUP_JSON',
                rows: 20,
                html: beautify(settings_1._SETTINGS, null, 4)
            });
            target.appendChild(wrap);
            wrap.appendChild(tiw);
            tiw.appendChild(cl);
            cl.appendChild(textarea);
            textareaBtn.appendChild(updateButton);
            target.appendChild(textareaBtn);
            // группа кнопок
            buttonsDiv.appendChild(restoreInput);
            buttonsDiv.appendChild(restoreButton);
            buttonsDiv.appendChild(saveButton);
            (_a = utils_1.qs('#SP_PLUS_ABOUT').previousElementSibling) === null || _a === void 0 ? void 0 : _a.after(buttonsDiv);
        }
        catch (e) {
            utils_1.error('settingsBackupMenu.ts', e);
        }
    }
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {


var rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

var gap,
    indent,
    meta = { // table of character substitutions
      '\b': '\\b',
      '\t': '\\t',
      '\n': '\\n',
      '\f': '\\f',
      '\r': '\\r',
      '"': '\\"',
      '\\': '\\\\'
    },
    rep;

function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

    rx_escapable.lastIndex = 0;
    return rx_escapable.test(string)
        ? '"' + string.replace(rx_escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"'
        : '"' + string + '"';
}


function str(key, holder, limit) {

// Produce a string from holder[key].

    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

    if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
        value = value.toJSON(key);
    }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

    if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
    }

// What happens next depends on the value's type.

    switch (typeof value) {
    case 'string':
        return quote(value);

    case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

        return isFinite(value)
            ? String(value)
            : 'null';

    case 'boolean':
    case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

        return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

    case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

        if (!value) {
            return 'null';
        }

// Make an array to hold the partial results of stringifying this object value.

        gap += indent;
        partial = [];

// Is the value an array?

        if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

            length = value.length;
            for (i = 0; i < length; i += 1) {
                partial[i] = str(i, value, limit) || 'null';
            }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

            v = partial.length === 0
                ? '[]'
                : gap
                    ? (
                      gap.length + partial.join(', ').length + 4 > limit ?
                      '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                      '[ ' + partial.join(', ') + ' ]'
                    )
                    : '[' + partial.join(',') + ']';
            gap = mind;
            return v;
        }

// If the replacer is an array, use it to select the members to be stringified.

        if (rep && typeof rep === 'object') {
            length = rep.length;
            for (i = 0; i < length; i += 1) {
                if (typeof rep[i] === 'string') {
                    k = rep[i];
                    v = str(k, value, limit);
                    if (v) {
                        partial.push(quote(k) + (
                            gap
                                ? ': '
                                : ':'
                        ) + v);
                    }
                }
            }
        } else {

// Otherwise, iterate through all of the keys in the object.

            for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = str(k, value, limit);
                    if (v) {
                        partial.push(quote(k) + (
                            gap
                                ? ': '
                                : ':'
                        ) + v);
                    }
                }
            }
        }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

        v = partial.length === 0
            ? '{}'
            : gap
                ? (
                  gap.length + partial.join(', ').length + 4 > limit ?
                  '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
                  '{ ' + partial.join(', ') + ' }'
                )
                : '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
}


function beautify (value, replacer, space, limit) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

  var i;
  gap = '';
  indent = '';

  if (!limit) limit = 0;

  if (typeof limit !== "number")
    throw new Error("beaufifier: limit must be a number");

// If the space parameter is a number, make an indent string containing that
// many spaces.

  if (typeof space === 'number') {
      for (i = 0; i < space; i += 1) {
          indent += ' ';
      }

// If the space parameter is a string, it will be used as the indent string.

  } else if (typeof space === 'string') {
      indent = space;
  }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

  rep = replacer;
  if (replacer && typeof replacer !== 'function' &&
          (typeof replacer !== 'object' ||
          typeof replacer.length !== 'number')) {
      throw new Error('beautifier: wrong replacer parameter');
  }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

  return str('', {'': value}, limit);
}

module.exports = beautify;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsRecentSmiles = void 0;
const utils_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
exports.settingsRecentSmiles = (e) => {
    var _a;
    let masWarp = utils_1.ce('div', { id: 'SP_RECENTS_SETTINGS', class: 'sp_settings-wrap' });
    let maxSabeLbl = utils_1.ce('label', {
        html: 'Сохранять смайликов:<div class="label__desc">от 10 до 60</div>',
        class: 'label'
    });
    let maxSave = utils_1.ce('input', {
        type: 'text',
        class: 'text-input',
        size: 4,
        attr: { maxlength: 2 },
        value: settings_1._SETTINGS.recentSmiles.max
    });
    maxSave.addEventListener('change', (e) => {
        if (/^([1-5][0-9]|60)$/i.test(e.target.value)) {
            utils_1.setSettings('recentSmiles.max', e.target.value);
            maxSave.classList.remove('sp-input-error');
        }
        else {
            maxSave.classList.add('sp-input-error');
        }
    });
    masWarp.appendChild(maxSabeLbl);
    masWarp.appendChild(maxSave);
    (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.after(masWarp);
};


/***/ })
/******/ ]);