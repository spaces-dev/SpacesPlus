// ==UserScript==
// @name        Spaces+
// @version     3.0.0
// @author      Vitalij Ryndin
// @description 🚀 Powerfull userscript for Spaces.ru
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.readSettings = exports.notification = exports.modifyObject = exports.getClassName = exports.insertAfter = exports.historyPush = exports.messageBox = exports.isValidUrl = exports.confirmBox = exports.setCookie = exports.playSound = exports.getParams = exports.getCookie = exports.delCookie = exports.declOfNum = exports.inBefore = exports.getQuery = exports.toUpper = exports.getPath = exports.getHref = exports.remove = exports.extend = exports.rever = exports.error = exports.debug = exports.trim = exports.http = exports.info = exports.find = exports.log = exports.css = exports.qsa = exports.qs = exports.ce = void 0;
const ce_1 = __webpack_require__(15);
Object.defineProperty(exports, "ce", { enumerable: true, get: function () { return ce_1.ce; } });
const css_1 = __webpack_require__(5);
Object.defineProperty(exports, "css", { enumerable: true, get: function () { return css_1.css; } });
const find_1 = __webpack_require__(16);
Object.defineProperty(exports, "find", { enumerable: true, get: function () { return find_1.find; } });
const http_1 = __webpack_require__(17);
Object.defineProperty(exports, "http", { enumerable: true, get: function () { return http_1.http; } });
const trim_1 = __webpack_require__(6);
Object.defineProperty(exports, "trim", { enumerable: true, get: function () { return trim_1.trim; } });
const qs_1 = __webpack_require__(18);
Object.defineProperty(exports, "qs", { enumerable: true, get: function () { return qs_1.qs; } });
Object.defineProperty(exports, "qsa", { enumerable: true, get: function () { return qs_1.qsa; } });
const rever_1 = __webpack_require__(19);
Object.defineProperty(exports, "rever", { enumerable: true, get: function () { return rever_1.rever; } });
const remove_1 = __webpack_require__(20);
Object.defineProperty(exports, "remove", { enumerable: true, get: function () { return remove_1.remove; } });
const extend_1 = __webpack_require__(7);
Object.defineProperty(exports, "extend", { enumerable: true, get: function () { return extend_1.extend; } });
const toUpper_1 = __webpack_require__(21);
Object.defineProperty(exports, "toUpper", { enumerable: true, get: function () { return toUpper_1.toUpper; } });
const getQuery_1 = __webpack_require__(22);
Object.defineProperty(exports, "getQuery", { enumerable: true, get: function () { return getQuery_1.getQuery; } });
const inBefore_1 = __webpack_require__(23);
Object.defineProperty(exports, "inBefore", { enumerable: true, get: function () { return inBefore_1.inBefore; } });
const declOfNum_1 = __webpack_require__(24);
Object.defineProperty(exports, "declOfNum", { enumerable: true, get: function () { return declOfNum_1.declOfNum; } });
const delCookie_1 = __webpack_require__(25);
Object.defineProperty(exports, "delCookie", { enumerable: true, get: function () { return delCookie_1.delCookie; } });
const getCookie_1 = __webpack_require__(27);
Object.defineProperty(exports, "getCookie", { enumerable: true, get: function () { return getCookie_1.getCookie; } });
const getParams_1 = __webpack_require__(28);
Object.defineProperty(exports, "getParams", { enumerable: true, get: function () { return getParams_1.getParams; } });
const playSound_1 = __webpack_require__(29);
Object.defineProperty(exports, "playSound", { enumerable: true, get: function () { return playSound_1.playSound; } });
const setCookie_1 = __webpack_require__(8);
Object.defineProperty(exports, "setCookie", { enumerable: true, get: function () { return setCookie_1.setCookie; } });
const confirmBox_1 = __webpack_require__(30);
Object.defineProperty(exports, "confirmBox", { enumerable: true, get: function () { return confirmBox_1.confirmBox; } });
const isValidUrl_1 = __webpack_require__(31);
Object.defineProperty(exports, "isValidUrl", { enumerable: true, get: function () { return isValidUrl_1.isValidUrl; } });
const messageBox_1 = __webpack_require__(32);
Object.defineProperty(exports, "messageBox", { enumerable: true, get: function () { return messageBox_1.messageBox; } });
const historyPush_1 = __webpack_require__(33);
Object.defineProperty(exports, "historyPush", { enumerable: true, get: function () { return historyPush_1.historyPush; } });
const insertAfter_1 = __webpack_require__(34);
Object.defineProperty(exports, "insertAfter", { enumerable: true, get: function () { return insertAfter_1.insertAfter; } });
const getClassName_1 = __webpack_require__(35);
Object.defineProperty(exports, "getClassName", { enumerable: true, get: function () { return getClassName_1.getClassName; } });
const modifyObject_1 = __webpack_require__(36);
Object.defineProperty(exports, "modifyObject", { enumerable: true, get: function () { return modifyObject_1.modifyObject; } });
const notification_1 = __webpack_require__(37);
Object.defineProperty(exports, "notification", { enumerable: true, get: function () { return notification_1.notification; } });
const readSettings_1 = __webpack_require__(38);
Object.defineProperty(exports, "readSettings", { enumerable: true, get: function () { return readSettings_1.readSettings; } });
const getLocation_1 = __webpack_require__(39);
Object.defineProperty(exports, "getPath", { enumerable: true, get: function () { return getLocation_1.getPath; } });
Object.defineProperty(exports, "getHref", { enumerable: true, get: function () { return getLocation_1.getHref; } });
const console_1 = __webpack_require__(3);
Object.defineProperty(exports, "log", { enumerable: true, get: function () { return console_1.log; } });
Object.defineProperty(exports, "info", { enumerable: true, get: function () { return console_1.info; } });
Object.defineProperty(exports, "error", { enumerable: true, get: function () { return console_1.error; } });
Object.defineProperty(exports, "debug", { enumerable: true, get: function () { return console_1.debug; } });


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PKG_VERSION = exports.REVISION = exports.OVERRIDE = exports.ENV_PATH = exports.BASE_URL = exports.SPACES = exports.GITHUB = exports.DEVICE = exports.HTTP = void 0;
const package_json_1 = __importDefault(__webpack_require__(26));
/**
 * Константы
 */
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
const ENV_PATH =  false ? undefined : GITHUB;
exports.ENV_PATH = ENV_PATH;
/**
 * Временное хранилище данных
 */
class OVERRIDE {
}
exports.OVERRIDE = OVERRIDE;
OVERRIDE.EVENTS = 0;
OVERRIDE.PLAYER = 0;
OVERRIDE.COMMENTS = 0;
OVERRIDE.VERSION = Number(PKG_VERSION.split('.').join(''));


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
    'comments': 'Функция будет полезна тем, кто часто удаляет много комментариев. Работает в любом месте, где у Вас есть возможность удалять комментарии, будь это ваш блог или гостевая.',
    'blogsd': `Функция позволяет удалять сразу несколько блогов.</br></br><img src="${strings_1.ENV_PATH}/screens/sort-blogs.png"></br>Работает только в <a href="${strings_1.SPACES}/diary/view/?Short=0&sort=0">"Расширенном виде"</a> (нажмите на ссылку, чтобы включить этот вид - откроется страница с вашими блогами).`,
    'readersd': 'Функция позволяет удалять сразу несколько читателей, может быть вам это пригодиться.',
    'favorite': `<img src="${strings_1.ENV_PATH}/screens/favorite-user.png"></br>Функция добавляет на страницу каждого пользователя кнопку "В закладки". Повторно нажав на кнопку, Вы сможете удалить пользователя из закладок.`,
    'grotate': `<img src="${strings_1.ENV_PATH}/screens/rotate-image.png"></br>Добавляется кнопка в просмотрщик фотографий, с помощью ее можно поворачивать изображение.`,
    'oldheader': 'Функция меняет кнопку почты и ленты местами, как было раньше.',
    'playerdn': `<img src="${strings_1.ENV_PATH}/screens/player-download.png"></br>Добавляется кнопка в аудиоплеер, которая позволяет скачивать воспроизведенный вами трек.`,
    'dredirect': 'Функция избавляем Вас от назойливого предупреждения, когда вы хотите перейти по внешней ссылке.',
    'online': 'Функция позволяет смотреть точное время онлайн у пользователей в анкетах.',
    'coins': 'Функция в автоматическом режиме ищет и собирает бонусные монеты.',
    'rscroll': 'Перемещает полосу автоскролла на правую сторону.',
    'hrightbar': 'Функция скрывает правое меню (страница становиться на 25% шире).</br></br>Конфликтует c функцией "Виджет погоды".',
    'adblock': 'Функция полностью скрывает назойливую рекламу и не только.',
    'stickyheader': 'Функция закрепляет шапку сайта.',
    'notify': `<img src="${strings_1.ENV_PATH}/screens/browser-permissions.png"></br>Для работы, в настройках браузера необходимо разрешить сайту использовать "Уведомления" и "Звук".</br></br>Функция позволяет изменять звук уведомлений (указывайте прямую ссылку на файл!), настраивать громкость звука и отмечать из каких разделов получать уведомления.`,
    'playback': `<img src="${strings_1.ENV_PATH}/screens/video-speed.png"></br>В видеоплеере добавляется кнопка ускорения видео, примерно как на YouTube.`,
    'recents': `<img src="${strings_1.ENV_PATH}/screens/recent-smiles.png"></br>В меню смайликов добавляется раздел с ранее использованными смайликами, для добавления используйте смайлики/стикеры из меню смайликов.`,
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
    'comments': 'Пакетное удаление комментариев',
    'blogsd': 'Пакетное удаление блогов',
    'readersd': 'Пакетное удаление читателей',
    'favorite': 'Возможность добавить пользователя в закладки',
    'grotate': 'Кнопка поворота фото в просмотрщике',
    'oldheader': 'Старое положение кнопок в шапке',
    'playerdn': 'Кнопка загрузки трека из плеера',
    'dredirect': 'Внешние ссылки без редиректа',
    'online': 'Точное время онлайн в анкетах',
    'coins': 'Собирать бонусные монеты',
    'rscroll': 'Прокрутка страницы справа',
    'hrightbar': 'Скрыть правое меню',
    'adblock': 'Скрывать рекламу',
    'stickyheader': 'Закрепить шапку',
    'notify': 'Уведомления',
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
    'comments': false,
    'blogsd': false,
    'readersd': false,
    'favorite': true,
    'grotate': true,
    'angle': 0,
    'oldheader': true,
    'playerdn': true,
    'dredirect': true,
    'online': true,
    'coins': true,
    'rscroll': false,
    'hrightbar': false,
    'adblock': true,
    'stickyheader': true,
    'apidebug': false,
    'karma': true,
    'sticker': true,
    'playback': true,
    'videoSpeed': 1,
    'recents': true,
    'friendsOn': true,
    'notify': false,
    'bodystyle': true,
    'upVersion': strings_1.OVERRIDE.VERSION,
    'beta': false,
    'recentSmiles': {
        'show': false,
        'max': 60
    },
    'bodystyleSetting': {
        'url': `${strings_1.ENV_PATH}/backgrounds/default.png`,
        'color': '#DAE1E8',
        'urlchecked': true,
        'colorchecked': false
    },
    'events': {
        'url': `${strings_1.ENV_PATH}/sounds/default.ogg`,
        'volume': 50,
        'mail': true,
        'journal': true,
        'feed': false
    },
    'friendsOnMax': 10,
    'friendsDisplay': true,
    'hideNotyf': {
        'cookieEditor': false,
        'configImport': false
    },
    'weather': false,
    'weatherSettings': {
        'interval': 600,
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
exports.debug = exports.error = exports.info = exports.log = void 0;
const date = () => `(${new Date().toString().split(' ')[4]}) [S+] `;
exports.log = (str) => console.log(date() + str);
exports.info = (str) => console.info(date() + str);
exports.error = (str) => console.error(date() + str);
exports.debug = (str) => console.debug(date() + str);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsChangelogMenu = exports.settingsRecentSmiles = exports.settingsBackupMenu = exports.settingsBackground = exports.videoSpeedPlayback = exports.settingsFeatures = exports.settingsWeather = exports.settingsFriends = exports.disableRedirect = exports.settingsEvents = exports.playerDownload = exports.hiddenRightbar = exports.deleteComments = exports.weatherWidget = exports.sidebarButton = exports.galleryRotate = exports.friendsOnline = exports.deleteReaders = exports.stickyHeader = exports.settingsMenu = exports.recentSmiles = exports.freeStickers = exports.favoriteUser = exports.checkUpdates = exports.betaFeatures = exports.soundEvents = exports.karmaAccept = exports.deleteBlogs = exports.coinsAccept = exports.apiDebugger = exports.userOnline = exports.userStatus = exports.scrollMove = exports.getUpdater = exports.setStyles = exports.oldHeader = exports.adBlock = void 0;
const adBlock_1 = __webpack_require__(14);
Object.defineProperty(exports, "adBlock", { enumerable: true, get: function () { return adBlock_1.adBlock; } });
const oldHeader_1 = __webpack_require__(40);
Object.defineProperty(exports, "oldHeader", { enumerable: true, get: function () { return oldHeader_1.oldHeader; } });
const setStyles_1 = __webpack_require__(9);
Object.defineProperty(exports, "setStyles", { enumerable: true, get: function () { return setStyles_1.setStyles; } });
const scrollMove_1 = __webpack_require__(41);
Object.defineProperty(exports, "scrollMove", { enumerable: true, get: function () { return scrollMove_1.scrollMove; } });
const userStatus_1 = __webpack_require__(42);
Object.defineProperty(exports, "userStatus", { enumerable: true, get: function () { return userStatus_1.userStatus; } });
const userOnline_1 = __webpack_require__(43);
Object.defineProperty(exports, "userOnline", { enumerable: true, get: function () { return userOnline_1.userOnline; } });
const apiDebugger_1 = __webpack_require__(44);
Object.defineProperty(exports, "apiDebugger", { enumerable: true, get: function () { return apiDebugger_1.apiDebugger; } });
const coinsAccept_1 = __webpack_require__(45);
Object.defineProperty(exports, "coinsAccept", { enumerable: true, get: function () { return coinsAccept_1.coinsAccept; } });
const deleteBlogs_1 = __webpack_require__(46);
Object.defineProperty(exports, "deleteBlogs", { enumerable: true, get: function () { return deleteBlogs_1.deleteBlogs; } });
const karmaAccept_1 = __webpack_require__(47);
Object.defineProperty(exports, "karmaAccept", { enumerable: true, get: function () { return karmaAccept_1.karmaAccept; } });
const soundEvents_1 = __webpack_require__(48);
Object.defineProperty(exports, "soundEvents", { enumerable: true, get: function () { return soundEvents_1.soundEvents; } });
const betaFeatures_1 = __webpack_require__(49);
Object.defineProperty(exports, "betaFeatures", { enumerable: true, get: function () { return betaFeatures_1.betaFeatures; } });
const favoriteUser_1 = __webpack_require__(50);
Object.defineProperty(exports, "favoriteUser", { enumerable: true, get: function () { return favoriteUser_1.favoriteUser; } });
const freeStickers_1 = __webpack_require__(51);
Object.defineProperty(exports, "freeStickers", { enumerable: true, get: function () { return freeStickers_1.freeStickers; } });
const recentSmiles_1 = __webpack_require__(52);
Object.defineProperty(exports, "recentSmiles", { enumerable: true, get: function () { return recentSmiles_1.recentSmiles; } });
const settingsMenu_1 = __webpack_require__(53);
Object.defineProperty(exports, "settingsMenu", { enumerable: true, get: function () { return settingsMenu_1.settingsMenu; } });
const stickyHeader_1 = __webpack_require__(54);
Object.defineProperty(exports, "stickyHeader", { enumerable: true, get: function () { return stickyHeader_1.stickyHeader; } });
const deleteReaders_1 = __webpack_require__(55);
Object.defineProperty(exports, "deleteReaders", { enumerable: true, get: function () { return deleteReaders_1.deleteReaders; } });
const friendsOnline_1 = __webpack_require__(10);
Object.defineProperty(exports, "friendsOnline", { enumerable: true, get: function () { return friendsOnline_1.friendsOnline; } });
const galleryRotate_1 = __webpack_require__(56);
Object.defineProperty(exports, "galleryRotate", { enumerable: true, get: function () { return galleryRotate_1.galleryRotate; } });
const sidebarButton_1 = __webpack_require__(57);
Object.defineProperty(exports, "sidebarButton", { enumerable: true, get: function () { return sidebarButton_1.sidebarButton; } });
const weatherWidget_1 = __webpack_require__(58);
Object.defineProperty(exports, "weatherWidget", { enumerable: true, get: function () { return weatherWidget_1.weatherWidget; } });
const deleteComments_1 = __webpack_require__(59);
Object.defineProperty(exports, "deleteComments", { enumerable: true, get: function () { return deleteComments_1.deleteComments; } });
const hiddenRightbar_1 = __webpack_require__(60);
Object.defineProperty(exports, "hiddenRightbar", { enumerable: true, get: function () { return hiddenRightbar_1.hiddenRightbar; } });
const playerDownload_1 = __webpack_require__(61);
Object.defineProperty(exports, "playerDownload", { enumerable: true, get: function () { return playerDownload_1.playerDownload; } });
const settingsEvents_1 = __webpack_require__(62);
Object.defineProperty(exports, "settingsEvents", { enumerable: true, get: function () { return settingsEvents_1.settingsEvents; } });
const disableRedirect_1 = __webpack_require__(63);
Object.defineProperty(exports, "disableRedirect", { enumerable: true, get: function () { return disableRedirect_1.disableRedirect; } });
const settingsFriends_1 = __webpack_require__(64);
Object.defineProperty(exports, "settingsFriends", { enumerable: true, get: function () { return settingsFriends_1.settingsFriends; } });
const settingsWeather_1 = __webpack_require__(11);
Object.defineProperty(exports, "settingsWeather", { enumerable: true, get: function () { return settingsWeather_1.settingsWeather; } });
const settingsFeatures_1 = __webpack_require__(65);
Object.defineProperty(exports, "settingsFeatures", { enumerable: true, get: function () { return settingsFeatures_1.settingsFeatures; } });
const videoSpeedPlayback_1 = __webpack_require__(67);
Object.defineProperty(exports, "videoSpeedPlayback", { enumerable: true, get: function () { return videoSpeedPlayback_1.videoSpeedPlayback; } });
const settingsBackground_1 = __webpack_require__(68);
Object.defineProperty(exports, "settingsBackground", { enumerable: true, get: function () { return settingsBackground_1.settingsBackground; } });
const settingsBackupMenu_1 = __webpack_require__(69);
Object.defineProperty(exports, "settingsBackupMenu", { enumerable: true, get: function () { return settingsBackupMenu_1.settingsBackupMenu; } });
const checkUpdates_1 = __webpack_require__(12);
Object.defineProperty(exports, "checkUpdates", { enumerable: true, get: function () { return checkUpdates_1.checkUpdates; } });
Object.defineProperty(exports, "getUpdater", { enumerable: true, get: function () { return checkUpdates_1.getUpdater; } });
const settingsRecentSmiles_1 = __webpack_require__(70);
Object.defineProperty(exports, "settingsRecentSmiles", { enumerable: true, get: function () { return settingsRecentSmiles_1.settingsRecentSmiles; } });
const settingsChangelogMenu_1 = __webpack_require__(71);
Object.defineProperty(exports, "settingsChangelogMenu", { enumerable: true, get: function () { return settingsChangelogMenu_1.settingsChangelogMenu; } });


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.css = void 0;
const trim_1 = __webpack_require__(6);
/**
 * Используется в ce.ts для создание стилей
 * @param elem
 * @param css
 */
exports.css = (elem, css) => {
    let list = css.split(';');
    for (let i in list) {
        if (trim_1.trim(list[i]) !== '') {
            let valList = trim_1.trim(list[i]).split(':');
            if (valList[0].indexOf('-') >= 0) {
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
        if (settings_1._SETTINGS.bodystyleSetting.url && settings_1._SETTINGS.bodystyleSetting.urlchecked)
            stl.innerHTML = `body,#main_wrap{background-image:url(${settings_1._SETTINGS.bodystyleSetting.url})}`;
        if (settings_1._SETTINGS.bodystyleSetting.color && settings_1._SETTINGS.bodystyleSetting.colorchecked)
            stl.innerHTML = `body,#main_wrap{background-color:${settings_1._SETTINGS.bodystyleSetting.color}}`;
    }
    document.getElementsByTagName('head')[0].appendChild(stl);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.friendsOnline = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
const settings_1 = __webpack_require__(2);
/**
 * TODO: Переписать логику обновления списка
 * ! Сейчас обновление проиcходит путем F5
 * @param t
 */
exports.friendsOnline = (t) => {
    var _a, _b;
    let frCount = utils_1.qs('#friends_cnt');
    let frOnDiv = utils_1.qs('#SP_PLUS_FRIENDSSB');
    let friendsForce = 0, reCount, count = 0, countFriends = 0;
    // @ts-ignore
    if (frCount && !isNaN(frCount.innerHTML)) {
        count = Number(frCount.innerHTML);
    }
    if (frCount) {
        try {
            if (!t) {
                if (frOnDiv) {
                    utils_1.remove(frOnDiv);
                    countFriends = 0;
                    utils_1.info('Убрали панель друзей!');
                }
                friendsForce = 0;
            }
            else if (count > 0) {
                friendsForce++;
                if (count !== countFriends || (count > 0 && !frOnDiv) || friendsForce >= 700) {
                    if (friendsForce >= 700) {
                        friendsForce = 0;
                        utils_1.info('Принудительно обновляем друзей!');
                    }
                    countFriends = count;
                    let parent = (_b = (_a = frCount === null || frCount === void 0 ? void 0 : frCount.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode;
                    frOnDiv = frOnDiv || utils_1.ce('div', { id: 'SP_PLUS_FRIENDSSB', class: 'list-link__wrap' });
                    utils_1.http('GET', `${strings_1.SPACES}/friends/?S=3`, true).then(e => {
                        const json = e.parsedBody;
                        if (json === null || json === void 0 ? void 0 : json.tabbed_panel) {
                            let tempfriendsList = json.tabbed_panel.tabs[1].content.list;
                            if (tempfriendsList) {
                                utils_1.http('GET', `${strings_1.SPACES}/friends/?P=2&S=3`, true).then(e => {
                                    const json2 = e.parsedBody;
                                    if (json2 === null || json2 === void 0 ? void 0 : json2.tabbed_panel) {
                                        // Включены ли иконки на левой панели
                                        let disableAvatar = utils_1.qs('span.s_i_exit') ? true : false;
                                        let friendsList = json2.tabbed_panel.tabs[1].content.list;
                                        friendsList ?
                                            friendsList = utils_1.extend(tempfriendsList, friendsList) :
                                            friendsList = tempfriendsList;
                                        frOnDiv.innerHTML = '';
                                        let lengthList = (settings_1._SETTINGS.friendsOnMax >
                                            friendsList.length ?
                                            friendsList.length :
                                            settings_1._SETTINGS.friendsOnMax);
                                        if (countFriends !== friendsList.length && reCount < 3) {
                                            reCount++;
                                            setTimeout(() => {
                                                countFriends = friendsList.length;
                                                utils_1.info(`Количество друзей не точное, пробуем еще раз (${reCount} из 3)`);
                                            }, 1000);
                                        }
                                        else if (countFriends === friendsList.length) {
                                            reCount = 0;
                                        }
                                        for (let i = 0; i < lengthList; i++) {
                                            frOnDiv.appendChild(utils_1.ce('a', {
                                                href: `${strings_1.SPACES}/mysite/${friendsList[i].name}`,
                                                class: 'li',
                                                html: (disableAvatar ?
                                                    `<span class="comm_ava m for_avatar"><img src="${friendsList[i].avatar.previewURL}" class="preview s21_20"></span>` : '') +
                                                    `<span class="online-status m"><img class="p14 online_status_ico" src="${strings_1.HTTP}//spac.me/i/${friendsList[i].online_status.on_img}" alt="(ON)"></span><span class="block-item__title m break-word">${friendsList[i].name}</span>`
                                            }));
                                        }
                                        utils_1.info('Обновили список друзей!');
                                    }
                                });
                            }
                        }
                    });
                    parent === null || parent === void 0 ? void 0 : parent.appendChild(frOnDiv);
                }
            }
            else if (count === 0) {
                if (frOnDiv) {
                    utils_1.remove(frOnDiv);
                }
            }
        }
        catch (e) {
            utils_1.error('Ошибка (friendsOnline.ts): ' + e);
        }
    }
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = exports.settingsWeather = void 0;
const utils_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
/**
 * Инициализация выпадающего доп. меню настроек виджета погоды
 * @param e #weather
 */
exports.settingsWeather = async (e) => {
    /**
     * Отключаем скрытие правого меню, если оно включено
     */
    if (settings_1._SETTINGS.hrightbar)
        utils_1.qs('#hrightbar').click();
    /**
     * Инициализация ¯\_(ツ)_/¯
     * Получаем город
     */
    if (settings_1._SETTINGS.weatherSettings.city === null) {
        try {
            await utils_1.http('GET', 'https://ipwhois.app/json/?objects=city,success&lang=ru', false).then(e => {
                const json = e.parsedBody;
                if (json === null || json === void 0 ? void 0 : json.success) {
                    settings_1._SETTINGS.weatherSettings.city = json.city;
                    utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                    exports.getWeather();
                }
                else {
                    utils_1.messageBox('Ошибка ipwhois', 'Обратитесь к разработчику!', true);
                }
            });
        }
        catch (e) {
            utils_1.error('Ошибка (ipwhois): ' + e);
        }
    }
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
        value: settings_1._SETTINGS.weatherSettings.key
    });
    apiKey.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            if (/^[a-f0-9]{32}$/i.test(e.target.value) || utils_1.trim(e.target.value) !== '') {
                settings_1._SETTINGS.weatherSettings.key = e.target.value;
                utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                exports.getWeather();
                apiKey.className = 'text-input';
            }
            else {
                apiKey.className = 'text-input sp-input-error';
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
        value: settings_1._SETTINGS.weatherSettings.city
    });
    cityInp.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            if (/^([a-zA-Zа-яА-ЯёЁ]+[-]?[a-zA-Zа-яА-ЯёЁ]*[-]?[a-zA-Zа-яА-ЯёЁ]*[-]?[a-zA-Zа-яА-ЯёЁ]*)$/i.test(e.target.value) || utils_1.trim(e.target.value) !== '') {
                settings_1._SETTINGS.weatherSettings.city = e.target.value;
                utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                exports.getWeather();
                cityInp.className = 'text-input';
            }
            else {
                cityInp.className = 'text-input sp-input-error';
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
        value: settings_1._SETTINGS.weatherSettings.interval / 60
    });
    interval.addEventListener('change', (e) => {
        // от 1 минуты до 360 минут ¯\_(ツ)_/¯
        if (/^([1-9]|[1-8][0-9]|9[0-9]|[12][0-9]{2}|3[0-5][0-9]|360)$/i.test(e.target.value)) {
            settings_1._SETTINGS.weatherSettings.interval = e.target.value * 60;
            utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
            interval.className = 'text-input';
        }
        else {
            interval.className = 'text-input sp-input-error';
        }
    });
    masWarp.appendChild(cityLbl);
    masWarp.appendChild(cityInp);
    masWarp.appendChild(locationLbl);
    masWarp.appendChild(apiKey);
    masWarp.appendChild(intervalLbl);
    masWarp.appendChild(interval);
    utils_1.insertAfter(masWarp, e.parentNode);
};
/**
 * Получаем погоду через openweathermap.org
 */
exports.getWeather = async () => {
    const { language, units, city, key } = settings_1._SETTINGS.weatherSettings;
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?lang=${language}&units=${units}&q=${city}&appid=${key}`;
        await utils_1.http('GET', url, false).then(e => {
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
            // @ts-ignore Костыль ебаный!
            if (utils_1.qs('#SP-CITY-INPUT')) {
                utils_1.qs('#SP-CITY-INPUT').value = json.name;
            }
            if (utils_1.qs('#SP_WIDGET_WEATHER'))
                utils_1.remove(utils_1.qs('#SP_WIDGET_WEATHER'));
            if ((json === null || json === void 0 ? void 0 : json.cod) === 200) {
                settings_1._SETTINGS.weatherSettings.city = json.name;
                utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                utils_1.setCookie('SP_WEATHER', JSON.stringify(json));
            }
        });
    }
    catch (e) {
        utils_1.error('Ошибка (openweathermap): ' + e);
    }
};


/***/ }),
/* 12 */
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
            if (e.status === 200 && (json === null || json === void 0 ? void 0 : json.history)) {
                return callback(json);
            }
        });
    }
    catch (e) {
        utils_1.error('Ошибка (getUpdater.ts): ' + e);
    }
};
exports.checkUpdates = () => {
    try {
        exports.getUpdater((json) => {
            let hideVer = 0;
            if (settings_1._SETTINGS.upVersion)
                hideVer = settings_1._SETTINGS.upVersion;
            strings_1.OVERRIDE.VERSION = Math.max(hideVer, strings_1.OVERRIDE.VERSION);
            if (json.history[0].build > strings_1.OVERRIDE.VERSION) {
                utils_1.messageBox(`Доступна новая версия Spaces+ ${utils_1.rever(json.history[0].build)}`, `<div class="pad_t_a"></div>${json.history[0].changes}<div id="SP_UPDATER_BUTTONS" class="pad_t_a"><a class="btn btn_green btn_input" href="${strings_1.ENV_PATH}/spaces-plus.user.js?r=${strings_1.REVISION}" onclick="document.body.removeChild(this.parentNode.parentNode.parentNode); return true"> Обновить</a></div>`, true);
                if (utils_1.qs('#SP_PLUS_ALERT')) {
                    const hide = utils_1.ce('a', {
                        href: '#',
                        class: 'btn btn_white btn_input right sticker-close_btn',
                        html: 'Больше не показывать',
                        onclick: (e) => {
                            settings_1._SETTINGS.upVersion = json.history[0].build;
                            utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                            document.body.removeChild(e.target.parentNode.parentNode.parentNode);
                            return false;
                        }
                    });
                    utils_1.qs('#SP_UPDATER_BUTTONS').appendChild(hide);
                }
            }
        });
    }
    catch (e) {
        utils_1.error('Ошибка (checkUpdates.ts): ' + e);
    }
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = __webpack_require__(4);
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
const settings_1 = __webpack_require__(2);
/**
 * ! Для работы Spaces+ необходима авторизация
 * * 00000 - Успешно авторизирован
 * * 01001 - Требуется авторизация
 */
(() => {
    if (utils_1.qs('#main_wrap')) {
        try {
            utils_1.http('POST', `${strings_1.SPACES}/api/session/check`, false).then(e => {
                var _a;
                if (e.status === 200 && e.parsedBody) {
                    if (components_1.userStatus(e.parsedBody.code)) {
                        // Временно храним CK для работы функций
                        strings_1.OVERRIDE.CK = (_a = e.parsedBody) === null || _a === void 0 ? void 0 : _a.attributes.CK;
                        // Инициализируем работу
                        init();
                    }
                    else {
                        console.log(e);
                    }
                }
            });
        }
        catch (e) {
            utils_1.error('Ошибка (main.ts): ' + e);
        }
    }
})();
const init = () => {
    /**
     * ! Технические функции
     * ? Срабатывают один раз после загрузки страницы
     */
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
        if (settings_1._SETTINGS.events)
            components_1.soundEvents();
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
        if (settings_1._SETTINGS.dredirect)
            components_1.disableRedirect();
        if (settings_1._SETTINGS.playback)
            components_1.videoSpeedPlayback();
        if (settings_1._SETTINGS.blogsd || strings_1.BASE_URL === 'spaces-blogs.com')
            components_1.deleteBlogs();
        components_1.settingsMenu();
    }, 200);
};


/***/ }),
/* 14 */
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
        utils_1.error('Ошибка (adBlock.ts): ' + e);
    }
};


/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.find = void 0;
/**
 * Используется для поиска в DOM
 * Пример поиска бонусных монет:
 * * let coins: any = find(document.links, { href: 'https://spaces.ru/services/gift_get/?Link_id=' })
 * @param obj
 * @param obj2
 */
exports.find = (obj, obj2) => {
    let list = [];
    for (let i = 0; i < obj.length; i++) {
        for (let j in obj2) {
            if (obj[i][j].indexOf(obj2[j]) >= 0) {
                list.push(obj[i]);
            }
        }
    }
    return list[0] ? list : null;
};


/***/ }),
/* 17 */
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
        console_1.error('Ошибка http.ts: ' + e);
    }
    return response;
}
exports.http = http;


/***/ }),
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
/**
 * removeChild ಠ_ಠ
 * @param e
 */
exports.remove = (e) => e.parentNode.removeChild(e);


/***/ }),
/* 21 */
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
/* 22 */
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
        if (query.toLowerCase().indexOf(name) >= 1) {
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
        console_1.error('Ошибка (getQuery.ts): ' + e);
    }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.inBefore = void 0;
/**
 * Используется для добавления HTMLElement перед определенным элементом в DOM
 * Пример использования c помощью ce.ts и qs.ts:
 * * let elem = ce('div', {
 * *     html: 'Hello, World!'
 * * })
 * *
 * * inBefore(elem, qs('#main_wrap'))
 * @param elem
 * @param refElem
 */
exports.inBefore = (elem, refElem) => {
    let parent = refElem.parentNode;
    return parent.insertBefore(elem, refElem);
};


/***/ }),
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"spaces-plus\",\"description\":\"🚀 Powerfull userscript for Spaces.ru\",\"homepage\":\"https://spaces-dev.github.io/SpacesPlus\",\"version\":\"3.0.0\",\"author\":{\"name\":\"Vitalij Ryndin\",\"email\":\"sys@crashmax.ru\",\"url\":\"https://crashmax.ru\"},\"scripts\":{\"dev\":\"cross-env NODE_ENV=development webpack-dev-server --config-name main --host localhost --watch-poll\",\"build\":\"cross-env NODE_ENV=production webpack --progress\"},\"devDependencies\":{\"@types/node\":\"^14.11.8\",\"@types/webpack\":\"^4.41.22\",\"@types/webpack-dev-server\":\"^3.11.0\",\"clean-webpack-plugin\":\"^3.0.0\",\"copy-webpack-plugin\":\"^6.2.1\",\"cross-env\":\"^7.0.2\",\"optimize-css-assets-webpack-plugin\":\"^5.0.4\",\"ts-loader\":\"^8.0.4\",\"ts-node\":\"^9.0.0\",\"typescript\":\"^4.0.2\",\"webpack\":\"^4.44.2\",\"webpack-cli\":\"^3.3.12\",\"webpack-dev-server\":\"^3.11.0\",\"webpack-userscript\":\"^2.5.6\"}}");

/***/ }),
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
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
    let succesBtn = index_1.ce('button', { html: 'Да', href: '#', class: 'btn btn_red btn_input' });
    let cancelBtn = index_1.ce('a', { html: 'Отмена', href: '#', class: 'btn btn_white btn_input right sticker-close_btn' });
    let warningText = index_1.ce('small', { class: 'pad_t_a grey', html: 'Это действие нельзя будет отменить.' });
    let container = index_1.ce('div', { class: 'content-item3 wbg oh', html: text + '<div class="pad_t_a"></div>' });
    let br = index_1.ce('div', { class: 'pad_t_a' });
    // Скрываем раннее созданные уводомления
    if (Alert)
        index_1.remove(Alert);
    if (Confirm)
        index_1.remove(Confirm);
    // Подтверждение сообщения
    succesBtn.onclick = () => {
        if (index_1.qs('#SP_PLUS_CONFIRM')) {
            callback();
            index_1.remove(index_1.qs('#SP_PLUS_CONFIRM'));
            return false;
        }
        return true;
    };
    // Отмена сообщения - закрытие окна
    cancelBtn.onclick = () => {
        if (index_1.qs('#SP_PLUS_CONFIRM')) {
            index_1.remove(index_1.qs('#SP_PLUS_CONFIRM'));
            return false;
        }
        return true;
    };
    let Main = index_1.ce('div', { class: 'sticker sp-sticker-anim', id: 'SP_PLUS_CONFIRM' });
    if (warn)
        container.appendChild(warningText);
    container.appendChild(br);
    container.appendChild(succesBtn);
    container.appendChild(cancelBtn);
    Main.appendChild(container);
    document.body.appendChild(Main);
};


/***/ }),
/* 31 */
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
/* 32 */
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
    if (Alert)
        index_1.remove(Alert);
    if (Confirm)
        index_1.remove(Confirm);
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
/* 33 */
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
        console_1.error('Ошибка (historyPush.ts): ' + e);
    }
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAfter = void 0;
/**
 * Используется для добавления HTMLElement после определенного элементом в DOM
 * Пример использования c помощью ce.ts и qs.ts:
 * * let elem = ce('div', {
 * *     html: 'Hello, World!'
 * * })
 * *
 * * insertAfter(elem, qs('#main_wrap'))
 * @param elem
 * @param refElem
 */
exports.insertAfter = (elem, refElem) => {
    let parent = refElem.parentNode, next = refElem.nextSibling;
    return parent && next ? parent.insertBefore(elem, next) : parent.appendChild(elem);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getClassName = void 0;
/**
 * Поиск чего-то там ¯\_(ツ)_/¯
 * getClassName('span.comment_date', false)
 * @param data
 * @param t
 */
exports.getClassName = (data, t) => {
    let list = [], str = data.split('.'), nodes = document.getElementsByTagName(str[0]);
    for (let node of nodes) {
        if (node.className.indexOf(str[1]) >= 0 && !t) {
            list.push(node);
        }
        else if (node.className === str[1] && t) {
            list.push(node);
        }
    }
    return list[0] ? list : null;
};


/***/ }),
/* 36 */
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
/* 37 */
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.readSettings = void 0;
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
        index_1.error('Ошибка (readSettings.ts): ' + e);
    }
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getPath = exports.getHref = void 0;
/**
 * Получаем полную ссылку
 */
exports.getHref = () => document.location.href;
/**
 * * Используется для определения в каком сейчас разделе находится пользователь
 * 1 - method
 * 2 - index
 * 3 - target
 * default - pathname
 * @param name
 */
exports.getPath = (name) => {
    let path = document.location.pathname;
    let str = path.replace(/\/\s*$/, '').split('/');
    switch (name) {
        case 1:
            return str[1];
        case 2:
            return str[2];
        case 3:
            return str[3];
        default:
            return path;
    }
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.oldHeader = void 0;
const utils_1 = __webpack_require__(0);
/**
 * ? Меняет местами кнопки почты и ленты местами (старое расположение)
 * ! molimawka, Я был дураком, Извини! ¯\_(ツ)_/¯
 * @param b On/Off
 */
exports.oldHeader = (b) => {
    // кнопки шапки
    let p = utils_1.qsa('a[class="horiz-menu__link"');
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
/* 41 */
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
        utils_1.error('Ошибка (scrollMove.ts): ' + e);
    }
};


/***/ }),
/* 42 */
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
/* 43 */
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
        strings_1.OVERRIDE.ONLINE = null;
    if (path === target && strings_1.OVERRIDE.ONLINE !== nick) {
        try {
            let onBlock = Array.from(utils_1.qsa('div.info-item__title')).filter(e => e.textContent === 'Время онлайн:');
            if (nick && onBlock) {
                strings_1.OVERRIDE.ONLINE = nick;
                utils_1.http('GET', `${strings_1.SPACES}/anketa/index/${nick}/`, true).then(e => {
                    var _a, _b;
                    const response = (_b = (_a = e.parsedBody) === null || _a === void 0 ? void 0 : _a.user_widget) === null || _b === void 0 ? void 0 : _b.online_time;
                    if (response) {
                        let str = (response / 3600).toFixed(2).split('.');
                        let online = str[0] > 0 ? `${str[0]} ч, ${Math.trunc(str[1] / (100 / 60))} мин` : `${Math.trunc(str[1] / (100 / 60))} мин`;
                        // @ts-ignore Костыль!
                        onBlock[0].nextElementSibling.textContent = online;
                        utils_1.info('Время онлайн: ' + online);
                    }
                });
            }
        }
        catch (e) {
            utils_1.error('Ошибка (userOnline.ts): ' + e);
        }
    }
};


/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.coinsAccept = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.coinsAccept = () => {
    try {
        utils_1.qsa(`a[href*='${strings_1.SPACES}/services/gift_get/?Link_id='`).forEach(e => {
            var _a;
            // Подтверждаем монетку
            e.click();
            // Удаляем элемент
            (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
            utils_1.info('Собрали монетку!');
        });
    }
    catch (e) {
        utils_1.error('Ошибка (coinsAccept.ts): ' + e);
    }
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlogs = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.deleteBlogs = () => {
    let p = utils_1.getPath().split('/');
    let buttons = utils_1.qs('#SP_PLUS_BUTTONS');
    if ((p[1] === 'diary' && p[2] === null) ||
        (p[1] === 'diary' && p[2] === 'view') &&
            !buttons) {
        try {
            let links = utils_1.find(document.links, { href: `${strings_1.SPACES}/diary/editaccess/?Link_id=` });
            if (links && !buttons) {
                let checkboxArr = [];
                for (let link of links) {
                    if (link.className) {
                        let checkbox = utils_1.ce('input', {
                            class: 'sp-cbfb sp-checkbox-square',
                            type: 'checkbox',
                            id: 'SP_DB_' + /\&id=([0-9]+)/i.exec(link.href)[1]
                        });
                        let label = utils_1.ce('label', {
                            class: 'sp-ch-blogs',
                            style: 'margin: 1px',
                            attr: { 'for': 'SP_DB_' + /\&id=([0-9]+)/i.exec(link.href)[1] }
                        });
                        utils_1.insertAfter(checkbox, link);
                        utils_1.insertAfter(label, checkbox);
                        checkboxArr.push(checkbox);
                    }
                }
                if (!buttons) {
                    let buttonsDiv = utils_1.ce('div', {
                        class: 'widgets-group user__tools_last',
                        id: 'SP_PLUS_BUTTONS'
                    });
                    const chooseAllButton = utils_1.ce('button', {
                        class: 'user__tools-link table__cell sp_plus_btn_list',
                        html: '<span class="sp sp-ok-blue"></span><span class="sp-ch-text">Выбрать все</span>',
                        onclick: (e) => {
                            let parent = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target;
                            for (let ch of checkboxArr) {
                                parent.innerHTML.indexOf('Выбрать все') >= 0 ? ch.checked = true : ch.checked = false;
                            }
                            parent.innerHTML = `<span class="sp sp-ok-blue"></span><span class="sp-ch-text">${parent.innerHTML.indexOf('Выбрать все') >= 0 ? 'Снять отметки' : 'Выбрать все'}</span>`;
                            return false;
                        }
                    });
                    const deleteBlogsButton = utils_1.ce('button', {
                        class: 'user__tools-link table__cell sp_btn_line sp_plus_btn_list',
                        html: '<span class="ico ico_delete"></span><span class="sp-del-text">Удалить выбранные</span>',
                        onclick: () => {
                            let count = 0, blogs = [];
                            for (let ch of checkboxArr) {
                                if (ch.checked) {
                                    blogs.push(/^SP_DB_([0-9]+)$/i.exec(ch.id)[1]);
                                    count++;
                                }
                            }
                            if (count > 0) {
                                let con = utils_1.declOfNum(count, ['', 'а', 'ов']);
                                utils_1.confirmBox(`Вы действительно хотите удалить ${count} блог${con}?`, true, async () => {
                                    utils_1.messageBox(`Удаляем ${count} блог${con}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>', false);
                                    for (let blog of blogs) {
                                        await utils_1.http('GET', `${strings_1.SPACES}/diary/delete/?CK=${strings_1.OVERRIDE.CK}&id=${blog}&Sure=1`, true);
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
                    utils_1.inBefore(buttonsDiv, utils_1.qs('div.pgn'));
                }
            }
        }
        catch (e) {
            utils_1.error('Ошибка (deleteBlogs.ts): ' + e);
        }
    }
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.karmaAccept = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.karmaAccept = () => {
    try {
        utils_1.qsa(`a[href*='${strings_1.SPACES}/mysite/rate_n_karma/karma/?Accept='`).forEach(e => {
            var _a;
            // Подтверждаем карму
            e.click();
            // Удаляем элемент
            (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
            utils_1.info('Собрали карму!');
        });
    }
    catch (e) {
        utils_1.error('Ошибка (karmaAccept.ts): ' + e);
    }
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.soundEvents = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
const settings_1 = __webpack_require__(2);
exports.soundEvents = () => {
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
            if (notif[i] && settings_1._SETTINGS.events[i] && notif[i].innerHTML !== '' && !isNaN(notif[i].innerHTML)) {
                counter = counter + parseInt(notif[i].innerHTML, 10);
            }
        }
        if (counter > strings_1.OVERRIDE.EVENTS) {
            // звук уведомления
            utils_1.playSound(settings_1._SETTINGS.events.url, settings_1._SETTINGS.events.volume);
            let string = utils_1.declOfNum(counter, ['новое событие', 'новых события', 'новых событий']);
            // создаем новое уведомление
            utils_1.notification(`${utils_1.toUpper(string)} на Spaces!`, `У Вас ${counter} ${string}!`, 5);
            strings_1.OVERRIDE.EVENTS = counter;
        }
        else if (counter < strings_1.OVERRIDE.EVENTS) {
            strings_1.OVERRIDE.EVENTS = counter;
        }
    }
    catch (e) {
        utils_1.error('Ошибка (soundEvents.ts): ' + e);
    }
};


/***/ }),
/* 49 */
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.favoriteUser = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.favoriteUser = async () => {
    let href = utils_1.getHref(), method = utils_1.getPath(1), index = utils_1.getPath(2), nickname = utils_1.getPath(3);
    if ((method === 'mysite' || (method === 'anketa' && index !== 'edit') || method === 'activity') && strings_1.OVERRIDE.FAVORITE !== href) {
        strings_1.OVERRIDE.FAVORITE = href;
        let inFavorite = utils_1.qs('#SP_PLUS_INFAVORITE');
        try {
            let tbBlock = utils_1.getClassName('td.table__cell table__cell_last', true);
            if (nickname && tbBlock && tbBlock[0].innerHTML.indexOf('Вперёд') < 0 && !inFavorite) {
                await utils_1.http('GET', `${strings_1.SPACES}/anketa/index/${nickname}`, true).then(e => {
                    var _a;
                    const json = (_a = e.parsedBody) === null || _a === void 0 ? void 0 : _a.user_widget;
                    if (json) {
                        let favoriteButton = inFavorite || utils_1.ce('td', {
                            class: 'table__cell',
                            id: 'SP_PLUS_INFAVORITE',
                            html: `<a href="${strings_1.SPACES}/bookmarks/add/?object_id=${json.id}&object_type=11" class="stnd-link" title="Добавить в закладки"><span class="sp sp-fav"></span> B закладки</a>`,
                            onclick: () => {
                                utils_1.confirmBox(`Вы действительно хотите добавить пользователя <b>${json.name}</b> в закладки?`, false, async () => {
                                    await utils_1.http('POST', `${strings_1.SPACES}/ajax/bookmarks/add/`, false, `object_id=${json.id}&object_type=11&show_all_tags_state=0&new_tags=Люди&cfms=Добавить&CK=${strings_1.OVERRIDE.CK}`).then(e => {
                                        e.status === 200 ?
                                            isFav(json.id, json.name, favoriteButton) :
                                            console.log(e);
                                    });
                                });
                                return false;
                            }
                        });
                        isFav(json.id, json.name, favoriteButton);
                        if (!inFavorite) {
                            utils_1.inBefore(favoriteButton, tbBlock[0]);
                        }
                        let clds = tbBlock[0].parentNode.childNodes;
                        for (let x in clds) {
                            if (clds[x].nodeName === 'TD')
                                clds[x].width = '25%';
                        }
                    }
                });
            }
        }
        catch (e) {
            utils_1.error('Ошибка (favoriteUser.ts): ' + e);
        }
    }
    else if (method !== 'mysite' &&
        method !== 'anketa' &&
        method !== 'activity') {
        strings_1.OVERRIDE.FAVORITE = null;
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
                                console.log(e);
                        });
                    });
                    return false;
                };
            }
        });
    }
    catch (e) {
        utils_1.error('Ошибка (isFav): ' + e);
    }
};


/***/ }),
/* 51 */
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
/* 52 */
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
        utils_1.error('Ошибка (recentSmiles.ts): ' + e);
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
/* 53 */
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
            const targetLink = utils_1.qs(`a[href*="${strings_1.SPACES}/settings/notification/?"`);
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
                        if (!/(\&)sp_plus_settings=1/i.test(utils_1.getHref())) {
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
                                            settings_1._SETTINGS[id] = checked;
                                            utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                                            console.log(id + ": " + checked);
                                            switch (id) {
                                                case 'rscroll':
                                                    index_1.scrollMove(checked);
                                                    break;
                                                case 'hrightbar':
                                                    index_1.hiddenRightbar(checked);
                                                    break;
                                                case 'notify':
                                                    checked ?
                                                        index_1.settingsEvents(e.target) :
                                                        utils_1.remove(utils_1.qs("#SP_PLUS_EVENTS"));
                                                    break;
                                                // TODO: Меню настроек на доработку!    
                                                /*case 'recents':
                                                    checked ?
                                                        settingsRecentSmiles(e.target) :
                                                        remove(qs("#SP_RECENTS_SETTINGS"))
                                                    break*/
                                                case 'friendsOn':
                                                    index_1.friendsOnline(checked);
                                                    checked ?
                                                        index_1.settingsFriends(e.target) :
                                                        utils_1.remove(utils_1.qs('#SP_PLUS_MAXFRIENDS'));
                                                    break;
                                                case 'sticker':
                                                    checked ?
                                                        index_1.freeStickers(checked) :
                                                        utils_1.remove(utils_1.qs('#SP_PLUS_STICKERS'));
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
                                                        utils_1.remove(utils_1.qs('#SP_PLUS_BODYSTYLE'));
                                                        utils_1.remove(utils_1.qs('#SP_PLUS_INJSTYLE'));
                                                    }
                                                    break;
                                                case 'weather':
                                                    if (checked) {
                                                        index_1.settingsWeather(e.target);
                                                    }
                                                    else {
                                                        utils_1.remove(utils_1.qs("#SP_WIDGET_WEATHER"));
                                                        utils_1.remove(utils_1.qs("#SP_WEATHER_SETTINGS"));
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
                                index_1.settingsEvents(utils_1.qs('#notify'));
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
                                    // @ts-ignore
                                    utils_1.qs('#SP_PLUS_SETBACK').href = `${strings_1.SPACES}/settings/?sp_plus_settings=1`;
                                    if (!/(\&)sp_backup=1/i.test(utils_1.getHref())) {
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
                                    // @ts-ignore
                                    utils_1.qs('#SP_PLUS_SETBACK').href = `${strings_1.SPACES}/settings/?sp_plus_settings=1`;
                                    if (!/(\&)sp_changelog=1/i.test(utils_1.getHref())) {
                                        utils_1.historyPush({
                                            'sp_plus_settings': urlSett,
                                            'sp_changelog': urlSettChangeLog
                                        }, `${strings_1.SPACES}/settings/?sp_plus_settings=1&sp_changelog=1`, 'Spaces+: История обновлений');
                                    }
                                    index_1.settingsChangelogMenu('#SP_PLUS_SETAREA');
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
                utils_1.inBefore(baseLink, targetLink);
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
            utils_1.error('Ошибка (SETTINGS): ' + e);
        }
    }
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.stickyHeader = void 0;
const utils_1 = __webpack_require__(0);
exports.stickyHeader = (b) => {
    let wrapAll = utils_1.qs('#wrap_all');
    let leftNav = utils_1.qs('#left_nav');
    let header = utils_1.qs('#header_elements');
    let mainShadow = utils_1.qs('#main_shadow');
    let infoBlock = utils_1.qs('#top_info_block');
    let sidebarLogo = utils_1.qs('div.sidebar-logo');
    try {
        if (b && !header.hasAttribute('sp-sticky-header')) {
            // фиксированное положение блока (при смене версии сайта)
            utils_1.css(infoBlock, `position: fixed; width: ${mainShadow.clientWidth}px; z-index: 9999;`);
            // опускаем основной контейнер
            utils_1.css(mainShadow, 'padding-top: 45px;');
            // стили для логотипа
            utils_1.css(sidebarLogo, `position: fixed; width: ${leftNav.clientWidth}px; top: 0px; z-index: 9999;`);
            // стили для шапки
            utils_1.css(header, `position: fixed; width: ${mainShadow.clientWidth - leftNav.clientWidth + 1}px; left: ${wrapAll.offsetLeft + leftNav.clientWidth}px; top: 0px; z-index: 9999;`);
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
        utils_1.error('Ошибка (stickyHeader.ts): ' + e);
    }
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReaders = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.deleteReaders = () => {
    let buttons = utils_1.qs('#SP_PLUS_BUTTONS');
    if (utils_1.getPath() === '/lenta/readers/' && !buttons) {
        try {
            let links = utils_1.find(document.links, { href: `${strings_1.SPACES}/lenta/reader_delete/?` });
            if (links && !buttons) {
                let checkboxArr = [];
                for (let link of links) {
                    link.style.textAlign = 'center';
                    let chWrap = utils_1.ce('label', { class: 'stnd-link icon-link sp-ch-readers' });
                    let bChbx = utils_1.ce('input', {
                        type: 'checkbox',
                        class: 'sp-cbfr sp-checkbox-square',
                        id: 'SP_DR_' + /(\?|&)user=([A-Za-z0-9\_]+)/i.exec(link.href)[2]
                    });
                    let ckbxlb = utils_1.ce('label', {
                        style: 'margin-left: 0px',
                        attr: { 'for': 'SP_DR_' + /(\?|&)user=([A-Za-z0-9\_]+)/i.exec(link.href)[2] }
                    });
                    chWrap.appendChild(bChbx);
                    chWrap.appendChild(ckbxlb);
                    utils_1.insertAfter(chWrap, link);
                    checkboxArr.push(bChbx);
                }
                let lastParent = links[links.length - 1].parentNode.parentNode;
                if (lastParent) {
                    let buttonsDiv = utils_1.ce('div', {
                        class: 'user__tools_last',
                        id: 'SP_PLUS_BUTTONS'
                    });
                    const chooseAllButton = utils_1.ce('button', {
                        class: 'user__tools-link table__cell sp_plus_btn_list',
                        html: '<span class="sp sp-ok-blue"></span><span class="sp-ch-text">Выбрать все</span>',
                        onclick: (e) => {
                            let parent = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target;
                            for (let ch of checkboxArr) {
                                parent.innerHTML.indexOf('Выбрать все') >= 0 ? ch.checked = true : ch.checked = false;
                            }
                            parent.innerHTML = `<span class="sp sp-ok-blue"></span><span class="sp-ch-text">${parent.innerHTML.indexOf('Выбрать все') >= 0 ? 'Снять отметки' : 'Выбрать все'}</span>`;
                            return false;
                        }
                    });
                    const deleteReadersButton = utils_1.ce('button', {
                        class: 'user__tools-link table__cell sp_btn_line sp_plus_btn_list',
                        html: '<span class="ico ico_delete"></span><span class="sp-del-text">Удалить выбранных</span>',
                        onclick: () => {
                            let count = 0, readers = [];
                            for (let ch of checkboxArr) {
                                if (ch.checked) {
                                    readers.push(/^SP_DR_([A-Za-z0-9\_]+)$/i.exec(ch.id)[1]);
                                    count++;
                                }
                            }
                            if (count > 0) {
                                let con = utils_1.declOfNum(count, ['я', 'я', 'ей']);
                                utils_1.confirmBox(`Вы действительно хотите удалить ${count} читател${con}`, true, async () => {
                                    utils_1.messageBox(`Удаляем ${count} читател${con}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>', false);
                                    for (let reader of readers) {
                                        await utils_1.http('POST', `${strings_1.SPACES}/lenta/reader_delete/?user=${reader}`, false, `&CK=${strings_1.OVERRIDE.CK}&cfms=Удалить`);
                                    }
                                    document.location.reload();
                                });
                            }
                            else {
                                utils_1.messageBox('Внимание!', 'Отметьте галочкой, теx читателей, которых вы хотите удалить и попробуйте еще раз', true, 5);
                            }
                            return false;
                        }
                    });
                    buttonsDiv.appendChild(deleteReadersButton);
                    buttonsDiv.appendChild(chooseAllButton);
                    utils_1.insertAfter(buttonsDiv, lastParent);
                }
            }
        }
        catch (e) {
            utils_1.error('Ошибка (deleteReaders.ts): ' + e);
        }
    }
};


/***/ }),
/* 56 */
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
                    settings_1._SETTINGS.angle = (settings_1._SETTINGS.angle + 90) % 360;
                    utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
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
        utils_1.error('Ошибка (galleryRotate.ts): ' + e);
    }
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sidebarButton = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.sidebarButton = () => {
    // Место для вставки кнопки
    utils_1.qsa(`li.li>a[href*="${strings_1.SPACES}/services/"]`).forEach(e => {
        // Включены ли иконки на левой панели
        let disableIcons = !!utils_1.qs('span.s_i_exit') ? '<span class="sp sp-ico"></span>' : '';
        // Создаем кнопку быстрого доступа в настройки Spaces+
        let link = utils_1.ce('li', {
            class: 'li',
            html: `<a href="${strings_1.SPACES}/settings/?sp_plus_settings=1" title="Настройки Spaces+">${disableIcons}<span class="m s_i_text"> Spaces+</span></a>`
        });
        utils_1.insertAfter(link, e.parentElement);
    });
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherWidget = void 0;
const utils_1 = __webpack_require__(0);
const settingsWeather_1 = __webpack_require__(11);
const settings_1 = __webpack_require__(2);
/**
 * Виджет погоды в правом меню
 */
exports.weatherWidget = () => {
    let widget = utils_1.qs('#SP_WIDGET_WEATHER');
    let page_rightbar = utils_1.qs('#page_rightbar');
    /**
     * Из текущего времени вычитаем время последней проверки погоды, если оно больше интервала, то обновляем виджет погоды
     * _SETTINGS.weatherSettings.city !== null не пускаем, пока не узнаем город через ipwhois
     */
    if (((unixTime() - settings_1._SETTINGS.weatherSettings.time) >
        settings_1._SETTINGS.weatherSettings.interval) &&
        settings_1._SETTINGS.weatherSettings.city !== null) {
        // обновляем время
        settings_1._SETTINGS.weatherSettings.time = unixTime();
        // обновляем виджет
        settingsWeather_1.getWeather();
    }
    if (!widget && page_rightbar && utils_1.getCookie('SP_WEATHER')) {
        // @ts-ignore Костылище
        const w = JSON.parse(utils_1.getCookie('SP_WEATHER'));
        let widgets_group = utils_1.ce('div', {
            class: 'widgets-group_top js-container__block',
            style: 'box-shadow: 0px 3px 5px rgba(93,109,157,0.3)',
            id: 'SP_WIDGET_WEATHER'
        });
        let widget_header = utils_1.ce('div', {
            class: 'b-title cl b-title_first oh',
            html: `<a href="https://openweathermap.org/city/${w.id}" target="_blank" class="b-title__link" style="white-space: unset"><h6 class="span">Погода в г. ${w.name}</h6></span></a>`
        });
        let content = utils_1.ce('div', {
            class: 'content',
            style: 'padding: 0px 16px 16px 16px',
            html: `<img src="https://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png" class="sp_img-center"><div class="grey sp_weather-container"><p>${Math.round(w.main.temp)}°C</p><p>${utils_1.toUpper(w.weather[0].description)}</p></div><table class="grey sp_weather-table"><tbody><tr><td>Облачность: </td><td>${w.clouds.all}%</td></tr><tr><td>Влажность: </td><td>${w.main.humidity}%</td></tr><tr><td>Давление: </td><td>${Math.round(w.main.pressure * 0.75)}mmHg</td></tr><tr><td>Ветер: </td><td>${w.wind.speed}m/sec</td></tr></tbody></table>`
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


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComments = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.deleteComments = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    let childs = utils_1.getClassName('span.comment_date', false);
    let buttons = utils_1.qs('#SP_PLUS_BUTTONS');
    try {
        if (childs) {
            if (!buttons || childs.length !== strings_1.OVERRIDE.COMMENTS) {
                strings_1.OVERRIDE.COMMENTS = childs.length;
                let delLinks = utils_1.find(document.getElementsByTagName('a'), { className: 'ajax_delete' });
                if (delLinks) {
                    for (let child of childs) {
                        if (child.getElementsByTagName('input').length === 0) {
                            // Нихуевый костыль!
                            let DC = `DC_${(strings_1.DEVICE.id === 4 ? (_e = (_d = (_c = (_b = (_a = child === null || child === void 0 ? void 0 : child.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.id : (_m = (_l = (_k = (_j = (_h = (_g = (_f = child.parentElement) === null || _f === void 0 ? void 0 : _f.parentElement) === null || _g === void 0 ? void 0 : _g.parentElement) === null || _h === void 0 ? void 0 : _h.parentElement) === null || _j === void 0 ? void 0 : _j.parentElement) === null || _k === void 0 ? void 0 : _k.parentElement) === null || _l === void 0 ? void 0 : _l.parentElement) === null || _m === void 0 ? void 0 : _m.id)}`;
                            let checkbox = utils_1.ce('input', {
                                type: 'checkbox',
                                class: 'sp-cbfc sp-checkbox-square',
                                id: DC
                            });
                            child.appendChild(checkbox);
                            child.appendChild(utils_1.ce('label', {
                                attr: {
                                    'for': DC
                                }
                            }));
                        }
                    }
                    if (!buttons) {
                        let inputs = document.getElementsByTagName('input');
                        let buttonsDiv = utils_1.ce('div', {
                            class: 'widgets-group user__tools_last',
                            id: 'SP_PLUS_BUTTONS'
                        });
                        const chooseAllButton = utils_1.ce('button', {
                            class: 'user__tools-link table__cell sp_plus_btn_list',
                            html: '<span class="sp sp-ok-blue"></span><span class="sp-ch-text">Выбрать все</span>',
                            onclick: (e) => {
                                var _a, _b, _c;
                                let parent = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target;
                                for (let input of inputs) {
                                    if (input.type === 'checkbox' && /DC_([0-9]+)/gi.test(input.id) && ((_c = (_b = (_a = input === null || input === void 0 ? void 0 : input.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.style.display) !== 'none') {
                                        parent.innerHTML.indexOf('Выбрать все') >= 0 ? input.checked = true : input.checked = false;
                                    }
                                }
                                parent.innerHTML = `<span class="sp sp-ok-blue"></span><span class="sp-ch-text">${parent.innerHTML.indexOf('Выбрать все') >= 0 ? 'Снять отметки' : 'Выбрать все'}</span>`;
                                return false;
                            }
                        });
                        const deleteCommentsButton = utils_1.ce('button', {
                            class: 'user__tools-link table__cell sp_btn_line sp_plus_btn_list',
                            html: '<span class="ico ico_delete"></span><span class="sp-del-text">Удалить выбранные</span>',
                            onclick: () => {
                                let count = 0, urls = [];
                                for (let input of inputs) {
                                    if (input.type === 'checkbox' && /DC_([0-9]+)/gi.test(input.id) && input.checked) {
                                        // @ts-ignore
                                        let delLinks = utils_1.find((strings_1.DEVICE.id === 4 ? input.parentNode.parentNode.parentNode.parentNode.parentNode : input.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode).getElementsByTagName('a'), {
                                            innerHTML: 'Удалить'
                                        });
                                        count++;
                                        urls.push(delLinks[0]);
                                    }
                                }
                                if (count > 0) {
                                    let con = utils_1.declOfNum(count, ['й', 'я', 'ев']);
                                    utils_1.confirmBox(`Вы действительно хотите удалить ${count} комментари${con}?`, true, async () => {
                                        utils_1.messageBox(`Удаляем ${count} комментари${con}`, 'Подождите немного... <span style="padding-right: 10px" class="ico ico_spinner"></span>', false);
                                        for (let url of urls) {
                                            await utils_1.http('GET', url, true);
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
                        utils_1.insertAfter(buttonsDiv, utils_1.qs('div.js-comments-pgn'));
                    }
                }
            }
        }
        else {
            strings_1.OVERRIDE.COMMENTS = 0;
        }
    }
    catch (e) {
        utils_1.error('Ошибка (deleteComments.ts): ' + e);
    }
};


/***/ }),
/* 60 */
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
        utils_1.error('Ошибка (hidderRightbar.ts): ' + e);
    }
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.playerDownload = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.playerDownload = () => {
    let downPlace = utils_1.qs('#SP_MUSIC_DOWN');
    try {
        let trId = 0, track = sessionStorage.getItem('music:track'), data = sessionStorage.getItem('music:playlist'), player = utils_1.qs('#gp_main_player');
        if (player && track && data) {
            let jstr = JSON.parse(track);
            let jspl = JSON.parse(data);
            trId = parseInt(jstr.id, 10);
            let trScr = jspl.playlist.playlist[trId].src;
            let tdIc = utils_1.qsa('td.ico_td');
            if (tdIc && !downPlace) {
                strings_1.OVERRIDE.PLAYER = trId;
                let dwnTd = utils_1.ce('td', {
                    id: 'SP_MUSIC_DOWN',
                    class: 'ico_td',
                    innerHTML: '<span class="ico ico_download2" title="Скачать"></span>',
                    onclick: () => { location.href = trScr; }
                });
                utils_1.insertAfter(dwnTd, tdIc[0]);
            }
            else if (downPlace && strings_1.OVERRIDE.PLAYER !== trId) {
                strings_1.OVERRIDE.PLAYER = trId;
                utils_1.info('Обновили ссылку на трек!');
                downPlace.onclick = () => { location.href = trScr; };
            }
        }
    }
    catch (e) {
        if (downPlace) {
            utils_1.remove(downPlace);
        }
        utils_1.error('Ошибка (playerDownload.ts): ' + e);
    }
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsEvents = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
const settings_1 = __webpack_require__(2);
exports.settingsEvents = (e) => {
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
            value: settings_1._SETTINGS.events.url,
            class: 'text-input'
        });
        eventsUrl.addEventListener('change', (e) => {
            if ((utils_1.isValidUrl(e.target.value) && /\.(ogg|mp3|wav)$/i.test(e.target.value)) || utils_1.trim(e.target.value) !== '') {
                settings_1._SETTINGS.events.url = utils_1.trim(e.target.value);
                utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                eventsUrl.className = 'text-input';
            }
            else {
                eventsUrl.className = 'text-input sp-input-error';
            }
        });
        let testPlay = utils_1.ce('span', {
            class: 'text-input__btn',
            html: '<span class="js-ico sp sp-play-green"></span>',
            style: 'margin-left: 7px; font-size: small; top: 23px',
            title: 'Прослушать',
            onclick: () => {
                utils_1.playSound(settings_1._SETTINGS.events.url, settings_1._SETTINGS.events.volume);
                return false;
            }
        });
        let volume = utils_1.ce('div', {
            class: 'label__desc',
            html: settings_1._SETTINGS.events.volume + '%'
        });
        let volRange = utils_1.ce('input', {
            type: 'range',
            min: 0,
            max: 100,
            step: 1,
            value: settings_1._SETTINGS.events.volume
        });
        volRange.onchange = volRange.oninput = (e) => {
            if (!isNaN(e.target.value)) {
                let setVol = parseInt(e.target.value, 10);
                if (setVol < 0 || setVol > 100)
                    setVol = 70;
                volume.innerHTML = setVol + '%';
                settings_1._SETTINGS.events.volume = setVol;
                utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
            }
        };
        let mailEvent = utils_1.ce('input', {
            type: 'checkbox',
            id: 'sp_event_mail',
            class: 'sp-checkbox-square',
            checked: settings_1._SETTINGS.events.mail,
            onclick: (e) => {
                settings_1._SETTINGS.events.mail = e.target.checked;
                utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
            }
        });
        let mailEventLbl = utils_1.ce('label', {
            attr: { 'for': 'sp_event_mail' },
            html: 'Уведомлять о почте'
        });
        let jourEvent = utils_1.ce('input', {
            type: 'checkbox',
            id: 'sp_event_journal',
            class: 'sp-checkbox-square',
            checked: settings_1._SETTINGS.events.journal,
            onclick: (e) => {
                settings_1._SETTINGS.events.journal = e.target.checked;
                utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
            }
        });
        let jourEventLbl = utils_1.ce('label', {
            attr: { 'for': 'sp_event_journal' },
            html: 'Уведомлять о журнале'
        });
        let feedEvent = utils_1.ce('input', {
            type: 'checkbox',
            id: 'sp_event_feed',
            class: 'sp-checkbox-square',
            checked: settings_1._SETTINGS.events.feed,
            onclick: (e) => {
                settings_1._SETTINGS.events.feed = e.target.checked;
                utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
            }
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
        utils_1.insertAfter(eventsWrap, e.parentNode);
    }
    catch (e) {
        utils_1.error('Ошибка (settingsEvents.ts): ' + e);
    }
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.disableRedirect = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.disableRedirect = () => {
    // @ts-ignore Все еще костыль, но так лучше
    utils_1.qsa(`a[href*="${strings_1.SPACES}/redirect/"`).forEach(e => e.href = utils_1.getParams(e)['redirect']);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsFriends = void 0;
const utils_1 = __webpack_require__(0);
const friendsOnline_1 = __webpack_require__(10);
const settings_1 = __webpack_require__(2);
exports.settingsFriends = (e) => {
    try {
        let frMaxWrap = utils_1.ce('div', { id: 'SP_PLUS_MAXFRIENDS' });
        let div = utils_1.ce('div', { class: 'sp_settings-wrap' });
        let frMax = utils_1.ce('input', {
            type: 'text',
            class: 'text-input',
            size: 4,
            attr: { maxlength: 2 },
            value: settings_1._SETTINGS.friendsOnMax
        });
        frMax.addEventListener('change', (e) => {
            if (/^([1-9]|1[0-5])$/i.test(e.target.value)) {
                settings_1._SETTINGS.friendsOnMax = e.target.value;
                utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                friendsOnline_1.friendsOnline(true);
                frMax.className = 'text-input';
            }
            else {
                frMax.className = 'text-input sp-input-error';
            }
        });
        let frMaxLbl = utils_1.ce('label', {
            html: 'Выводить друзей:<div class="label__desc">от 1 до 15</div>',
            class: 'label'
        });
        div.appendChild(frMaxLbl);
        div.appendChild(frMax);
        frMaxWrap.appendChild(div);
        utils_1.insertAfter(frMaxWrap, e.parentNode);
    }
    catch (e) {
        utils_1.error('Ошибка (settingsFriends.ts): ' + e);
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
            '<span class="ico ico_settings mr-14"></span>Включить отладчик'),
        onclick: () => {
            settings_1._SETTINGS.apidebug = settings_1._SETTINGS.apidebug ? false : true;
            utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
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
            '<span class="sp sp-enter-grey mr-14"></span>Beta-песочница<span> - открытое тестирование нововведений сайта'),
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
            '<span class="ico ico_ok_grey mr-14"></span>Добавить полосу загрузки страницы'),
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
            '<span class="ico ico_ok_grey mr-14"></span>Закрепить плеер на левой панели'),
        onclick: () => {
            glb ? utils_1.delCookie('gp_left_btn') : utils_1.setCookie('gp_left_btn', '1');
            document.location.reload();
            return false;
        }
    });
    let nbqLink = utils_1.ce('a', {
        href: '#',
        style: 'display: none',
        id: 'sp_newbequest_togl',
        class: 'stnd-link stnd-link_arr sp_line sp_last_btn sp_newbq_l',
        html: btnWrap('<span class="sp sp-remove-grey mr-14"></span>Скрыть квест новичка'),
        onclick: () => {
            utils_1.confirmBox('Вы действительно хотите скрыть квест новичка?', true, () => {
                utils_1.http('GET', `${strings_1.SPACES}/newbequest/?CK=${strings_1.OVERRIDE.CK}`, true).then(e => {
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
            });
        }
        catch (e) {
            utils_1.error('Ошибка newbeeQuest.ts: ' + e);
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
                    settings_1._SETTINGS.videoSpeed = (settings_1._SETTINGS.videoSpeed + 0.25) % 2.25;
                    if (settings_1._SETTINGS.videoSpeed === 0)
                        settings_1._SETTINGS.videoSpeed = 0.5;
                    utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                    buttonPlayback.innerHTML = 'x' + settings_1._SETTINGS.videoSpeed;
                    return false;
                }
            });
            target.after(buttonPlayback);
        }
    }
    catch (e) {
        utils_1.error('Ошибка (videoSpeedPlayback.ts): ' + e);
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
            value: settings_1._SETTINGS.bodystyleSetting.url,
            style: 'margin-bottom: 7px',
            class: 'text-input'
        });
        inputImageUrl.addEventListener('change', (a) => {
            if ((utils_1.isValidUrl(a.target.value) && /\.(jpg|jpeg|png|gif)$/i.test(a.target.value)) || utils_1.trim(a.target.value) !== '') {
                settings_1._SETTINGS.bodystyleSetting.url = utils_1.trim(a.target.value);
                utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                setStyles_1.setStyles();
                inputImageUrl.className = 'text-input';
            }
            else {
                inputImageUrl.className = 'text-input sp-input-error';
            }
        });
        let inputColor = utils_1.ce('input', {
            type: 'text',
            class: 'text-input',
            id: 'color-input',
            value: settings_1._SETTINGS.bodystyleSetting.color
        });
        inputColor.addEventListener('input', (e) => {
            if (/^\#([A-Za-z0-9]{3,6})$/i.test(e.target.value)) {
                settings_1._SETTINGS.bodystyleSetting.color = e.target.value;
                utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                setStyles_1.setStyles();
                inputColor.className = 'text-input';
            }
            else {
                inputColor.className = 'text-input sp-input-error';
            }
        });
        let radioImage = utils_1.ce('input', {
            type: 'radio',
            id: 'sp_set_bodystyle_URL',
            checked: settings_1._SETTINGS.bodystyleSetting.urlchecked,
            class: 'sp-checkbox-circle',
            onclick: (a) => {
                settings_1._SETTINGS.bodystyleSetting.urlchecked = a.target.checked;
                if (a.target.checked && radioColor.checked) {
                    radioColor.checked = false;
                    settings_1._SETTINGS.bodystyleSetting.colorchecked = false;
                }
                utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                if (settings_1._SETTINGS.bodystyleSetting.urlchecked) {
                    setStyles_1.setStyles();
                    setImage();
                }
                else {
                    utils_1.remove(utils_1.qs('#SP_WRAP_IMAGE'));
                }
            }
        });
        let radioColor = utils_1.ce('input', {
            type: 'radio',
            id: 'sp_set_bodystyle_color',
            checked: settings_1._SETTINGS.bodystyleSetting.colorchecked,
            class: 'sp-checkbox-circle',
            onclick: (a) => {
                settings_1._SETTINGS.bodystyleSetting.colorchecked = a.target.checked;
                if (a.target.checked && radioImage.checked) {
                    radioImage.checked = false;
                    settings_1._SETTINGS.bodystyleSetting.urlchecked = false;
                }
                utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                if (settings_1._SETTINGS.bodystyleSetting.colorchecked) {
                    setStyles_1.setStyles();
                    setColor();
                }
                else {
                    utils_1.remove(utils_1.qs('#SP_WRAP_COLOR'));
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
        utils_1.insertAfter(bgWrap, e.parentNode);
        if (settings_1._SETTINGS.bodystyleSetting.urlchecked) {
            setImage();
        }
        if (settings_1._SETTINGS.bodystyleSetting.colorchecked) {
            setColor();
        }
    }
    catch (e) {
        utils_1.error('Ошибка (settingsBackground.ts): ' + e);
    }
};
const setImage = async () => {
    try {
        if (!utils_1.qs('#SP_WRAP_IMAGE')) {
            if (utils_1.qs('#SP_WRAP_COLOR')) {
                utils_1.remove(utils_1.qs('#SP_WRAP_COLOR'));
                utils_1.remove(utils_1.qs('#SP_PLUS_CP_STYLE'));
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
                                // @ts-ignore
                                utils_1.qs('#image-input').value = e.target.src;
                                settings_1._SETTINGS.bodystyleSetting.url = e.target.src;
                                utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
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
        console.error('Ошибка (setImage): ' + e);
    }
};
const setColor = () => {
    try {
        if (!utils_1.qs('#SP_WRAP_COLOR')) {
            if (utils_1.qs('#SP_WRAP_IMAGE')) {
                utils_1.remove(utils_1.qs('#SP_WRAP_IMAGE'));
                utils_1.remove(utils_1.qs('#SP_PLUS_IMAGE_STYLE'));
            }
            let style = utils_1.ce('link', {
                rel: 'stylesheet',
                type: 'text/css',
                id: 'SP_PLUS_CP_STYLE',
                href: `${strings_1.ENV_PATH}/css/toolbar.css?r=${strings_1.REVISION}`
            });
            let style2 = utils_1.ce('link', {
                rel: 'stylesheet',
                type: 'text/css',
                id: 'SP_PLUS_CP_STYLE_2',
                href: `${strings_1.ENV_PATH}/css/user-content.css?r=${strings_1.REVISION}`
            });
            document.getElementsByTagName('head')[0].appendChild(style);
            document.getElementsByTagName('head')[0].appendChild(style2);
            let bodyStyle = utils_1.qs('#SP_PLUS_BODYSTYLE'), stdnC = utils_1.ce('div', { id: 'SP_WRAP_COLOR', style: 'border-top: 1px solid #cdd4e1' }), table = utils_1.ce('table', { class: 'table__wrap bb-colorpicker' }), tbody = utils_1.ce('tbody'), tr = utils_1.ce('tr'), td1 = utils_1.ce('td', { class: 'table__cell' }), td1div = utils_1.ce('div', {
                class: 'stnd-block',
                html: '<div><div style="background-color:#90CAF9" data-tag="fon" data-val="#90CAF9" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#80DEEA" data-tag="fon" data-val="#80DEEA" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#A5D6A7" data-tag="fon" data-val="#A5D6A7" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#FFF59D" data-tag="fon" data-val="#FFF59D" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#FFCC80" data-tag="fon" data-val="#FFCC80" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#FFAB91" data-tag="fon" data-val="#FFAB91" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#CE93D8" data-tag="fon" data-val="#CE93D8" class="js-bb_color toolbar-color pointer"></div> </div> <div> <div style="background-color:#2196F3" data-tag="fon" data-val="#2196F3" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#00BCD4" data-tag="fon" data-val="#00BCD4" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#4CAF50" data-tag="fon" data-val="#4CAF50" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#FFEB3B" data-tag="fon" data-val="#FFEB3B" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#FF9800" data-tag="fon" data-val="#FF9800" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#F44336" data-tag="fon" data-val="#F44336" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#9C27B0" data-tag="fon" data-val="#9C27B0" class="js-bb_color toolbar-color pointer"></div> </div> <div> <div style="background-color:#1565C0" data-tag="fon" data-val="#1565C0" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#00838F" data-tag="fon" data-val="#00838F" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#2E7D32" data-tag="fon" data-val="#2E7D32" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#F9A825" data-tag="fon" data-val="#F9A825" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#EF6C00" data-tag="fon" data-val="#EF6C00" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#C62828" data-tag="fon" data-val="#C62828" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#6A1B9A" data-tag="fon" data-val="#6A1B9A" class="js-bb_color toolbar-color pointer"></div> </div> <div> <div style="background-color:#ECF0F1" data-tag="fon" data-val="#ECF0F1" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#CFD8DC" data-tag="fon" data-val="#CFD8DC" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#B0BEC5" data-tag="fon" data-val="#B0BEC5" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#97A6B0" data-tag="fon" data-val="#97A6B0" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#546E7A" data-tag="fon" data-val="#546E7A" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#44565E" data-tag="fon" data-val="#44565E" class="js-bb_color toolbar-color pointer"></div> <div style="background-color:#3A474C" data-tag="fon" data-val="#3A474C" class="js-bb_color toolbar-color pointer"></div></div>'
            });
            td1.appendChild(td1div);
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
                utils_1.qs('#color-input').addEventListener('change', (a) => {
                    if (/^\#([A-Za-z0-9]{3}|[A-Za-z0-9]{6})$/i.test(a.target.value) || a.target.value === '') {
                        a.target.className = 'text-input';
                        settings_1._SETTINGS.bodystyleSetting.color = utils_1.trim(a.target.value);
                        utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                        setStyles_1.setStyles();
                        picker.set(settings_1._SETTINGS.bodystyleSetting.color);
                    }
                    else {
                        a.target.className = 'text-input sp-input-error';
                    }
                });
                picker.enter();
                picker.set(settings_1._SETTINGS.bodystyleSetting.color);
                picker.on('change', (e) => {
                    const color = e.toUpperCase();
                    // @ts-ignore
                    utils_1.qs('#color-input').value = '#' + color;
                    // @ts-ignore
                    utils_1.qs('input[name=color]').value = '#' + color;
                    utils_1.qs('.colorpicker-color').style.backgroundColor = '#' + color;
                    settings_1._SETTINGS.bodystyleSetting.color = '#' + color;
                    utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                    setStyles_1.setStyles();
                });
                const colors = document.querySelectorAll('.js-bb_color');
                for (let color of colors) {
                    color.onclick = (e) => {
                        let value = e.target.getAttribute('data-val');
                        // @ts-ignore
                        utils_1.qs('#color-input').value = value;
                        // @ts-ignore
                        utils_1.qs('input[name=color]').value = value;
                        utils_1.qs('.colorpicker-color').style.backgroundColor = value;
                        settings_1._SETTINGS.bodystyleSetting.color = value;
                        utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                        setStyles_1.setStyles();
                        picker.set(value);
                    };
                }
            }, 100);
        }
    }
    catch (e) {
        utils_1.error('Ошибка (setColor): ' + e);
    }
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsBackupMenu = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
const settings_1 = __webpack_require__(2);
/**
 * Меню сохранения/восстановления файла настроек
 * @param id #SP_PLUS_SETAREA
 */
exports.settingsBackupMenu = (id) => {
    // Прокручиваем страницу вверх
    window.scrollTo(0, 0);
    const target = utils_1.qs(id);
    if (target) {
        try {
            // Очищаем #SP_PLUS_SETAREA
            target.innerHTML = '';
            // Предупреждение для ламеров
            if (!settings_1._SETTINGS.hideNotyf.configImport) {
                let hideNotyf = utils_1.ce('span', {
                    class: 'sp sp-remove-grey pointer right notif_close close_h',
                    style: 'margin: 10px',
                    title: 'Понятно, больше не показывать.',
                    onclick: () => {
                        settings_1._SETTINGS.hideNotyf.configImport = true;
                        utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                        utils_1.remove(utils_1.qs('#SP_CONFIG_JSON'));
                    }
                });
                let smallInfo = utils_1.ce('div', {
                    class: 'stnd-block-yellow',
                    style: 'padding: 15px',
                    html: '<span class="sp sp-alert"></span>Внимание!</br></br><div style="font-size: small">Редактирование только для опытных пользователей, если что-то пошло не так, следует сделать полный сброс настроек.</div>'
                });
                let infoDiv = utils_1.ce('div', { id: 'SP_CONFIG_JSON' });
                infoDiv.appendChild(hideNotyf);
                target.appendChild(infoDiv);
                infoDiv.appendChild(smallInfo);
            }
            let textarea, wrap = utils_1.ce('div', { class: 'content-bl' }), preloader = utils_1.ce('div', {
                class: 't_center',
                id: 'SP_JSON_PRELOADER',
                html: `<img src="${strings_1.HTTP}//spac.me/i/preloader.gif">`
            });
            target.appendChild(wrap);
            wrap.appendChild(preloader);
            let buttonsDiv = utils_1.ce('div', { class: 'widgets-group user__tools_last', id: 'SP_PLUS_BOTTOM_DIVB' }), tiw = utils_1.ce('div', { class: 'text-input__wrap' }), cl = utils_1.ce('div', { class: 'cl' }), errorsBlock = utils_1.ce('div', {
                id: 'JSON_ERROR_BLOCK',
                class: 'stnd-block-yellow',
                style: 'padding: 15px',
                html: '<span class="sp sp-alert"></span> Невалидный JSON<br /><br />'
            });
            let restoreButton = utils_1.ce('button', {
                class: 'user__tools-link table__cell sp_btn_line sp_plus_btn_list',
                html: '<span class="sp sp-restore-g"></span><span style="color: #3ca93c; padding-left: 10px">Сбросить настройки</span>',
                onclick: () => {
                    utils_1.confirmBox('Вы действительно хотите сбросить файл конфигурации?', true, () => {
                        utils_1.delCookie('SP_PLUS_SET');
                        document.location.reload();
                    });
                    return false;
                }
            });
            let saveButton = utils_1.ce('button', {
                class: 'user__tools-link sp_plus_btn_list',
                html: '<span class="sp sp-ok-blue"></span><span style="color: #57A3EA; padding-left: 10px;">Сохранить</span>',
                onclick: () => {
                    getJSON(`value=${textarea.value}`, (json) => {
                        // Костыль ¯\_(ツ)_/¯
                        if (utils_1.qs('#JSON_ERROR_BLOCK')) {
                            errorsBlock.innerHTML = '<span class="sp sp-alert"></span> Невалидный JSON<br /><br />';
                            utils_1.remove(utils_1.qs('#JSON_ERROR_BLOCK'));
                        }
                        if (json.result.valid) {
                            utils_1.setCookie('SP_PLUS_SET', textarea.value);
                            utils_1.confirmBox('Настройки были успешно обновлены</br>Хотите сохранить файл настроек на рабочий стол?', false, () => {
                                let blob = utils_1.ce('a', {
                                    attr: {
                                        href: URL.createObjectURL(new Blob([textarea.value], { type: 'text/plain' })),
                                        download: 'spaces-plus.json'
                                    }
                                });
                                blob.click();
                                blob.remove();
                            });
                        }
                        else {
                            handleErrors(target, errorsBlock, json);
                        }
                        return false;
                    });
                }
            });
            getJSON(`value=${JSON.stringify(settings_1._SETTINGS)}`, (json) => {
                textarea = utils_1.ce('textarea', {
                    class: 'text-input',
                    id: 'SP_BACKUP_JSON',
                    cols: '17',
                    rows: '25',
                    html: json.result.data
                });
                if (json.result.valid) {
                    target.appendChild(wrap);
                    wrap.appendChild(tiw);
                    tiw.appendChild(cl);
                    cl.appendChild(textarea);
                    utils_1.remove(utils_1.qs('#SP_JSON_PRELOADER'));
                }
                else {
                    handleErrors(target, errorsBlock, json);
                }
                target.appendChild(wrap);
                wrap.appendChild(tiw);
                tiw.appendChild(cl);
                cl.appendChild(textarea);
                buttonsDiv.appendChild(restoreButton);
                buttonsDiv.appendChild(saveButton);
                utils_1.inBefore(buttonsDiv, utils_1.qs('#SP_PLUS_ABOUT'));
            });
        }
        catch (e) {
            utils_1.error('Ошибка (settingsBackupMenu.ts): ' + e);
        }
    }
};
/**
 * JSON Validator API (https://gist.github.com/crashmax-off/f86350b8a4b85311ac8676a906b973eb)
 * https://crashmax.ru/api/getJSON
 * TODO: Возможно вынести в utils???
 * @param data используем JSON.stringfy() для отправки POST
 * @param callback response function
 */
const getJSON = (data, callback) => {
    try {
        utils_1.http('POST', 'https://crashmax.ru/api/getJSON', false, data).then(e => {
            return callback(e.parsedBody);
        });
    }
    catch (e) {
        utils_1.error('Ошибка (getJSON): ' + e);
    }
};
/**
 * Выводим получаемые ошибки в JSON схеме
 * @param target #SP_PLUS_SETAREA
 * @param errorsBlock #JSON_ERROR_BLOCK
 * @param json http response
 */
const handleErrors = (target, errorsBlock, json) => {
    target.appendChild(errorsBlock);
    for (let err of json.result.errors) {
        let error = utils_1.ce('div', {
            class: 'sp_error-block',
            html: `<b>Error:</b> ${err.message} [Code: ${err.code}, Sctructure: ${err.element}]<br />`
        });
        errorsBlock.appendChild(error);
    }
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsRecentSmiles = void 0;
const utils_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
exports.settingsRecentSmiles = (e) => {
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
            settings_1._SETTINGS.recentSmiles.max = e.target.value;
            utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
            maxSave.className = 'text-input';
        }
        else {
            maxSave.className = 'text-input sp-input-error';
        }
    });
    masWarp.appendChild(maxSabeLbl);
    masWarp.appendChild(maxSave);
    utils_1.insertAfter(masWarp, e.parentNode);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsChangelogMenu = void 0;
const utils_1 = __webpack_require__(0);
const checkUpdates_1 = __webpack_require__(12);
const strings_1 = __webpack_require__(1);
exports.settingsChangelogMenu = (id) => {
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
                utils_1.remove(utils_1.qs('#SP_JSON_PRELOADER'));
            });
        }
        catch (e) {
            utils_1.error('Ошибка (changelogMenu.ts): ' + e);
        }
    }
};


/***/ })
/******/ ]);