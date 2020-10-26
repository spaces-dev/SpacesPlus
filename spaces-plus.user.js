// ==UserScript==
// @name        Spaces+
// @version     3.0.0
// @author      Vitalij Ryndin
// @description 🚀 Powerfull userscript for Spaces.ru
// @homepage    https://spaces-dev.github.io/SpacesPlus
// @match       *://(spaces.ru|spac.me|spcs.me|spaces.im|gdespaces.com|spac1.com|spac1.net|spaces-blogs.com)/*
// @namespace   https://spaces-dev.github.io/SpacesPlus
// @icon        https://spaces-dev.github.io/SpacesPlus/src/icons/logo_96.png
// @include     /^(http|https)://(spaces.ru|spac.me|spcs.me|spaces.im|gdespaces.com|spac1.com|spac1.net|spaces-blogs.com).*$/
// @homepageURL https://github.com/spaces-dev/SpacesPlus
// @require     https://spaces-dev.github.io/SpacesPlus/src/js/colorpicker.js
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
exports.readSettings = exports.getClassName = exports.setLocation = exports.insertAfter = exports.historyPush = exports.messageBox = exports.isValidUrl = exports.confirmBox = exports.delCookie = exports.setCookie = exports.getParams = exports.getCookie = exports.declOfNum = exports.inBefore = exports.getQuery = exports.getPath = exports.getHref = exports.remove = exports.extend = exports.rever = exports.error = exports.debug = exports.trim = exports.http = exports.info = exports.find = exports.log = exports.css = exports.qs = exports.ce = void 0;
const ce_1 = __webpack_require__(14);
Object.defineProperty(exports, "ce", { enumerable: true, get: function () { return ce_1.ce; } });
const qs_1 = __webpack_require__(15);
Object.defineProperty(exports, "qs", { enumerable: true, get: function () { return qs_1.qs; } });
const css_1 = __webpack_require__(5);
Object.defineProperty(exports, "css", { enumerable: true, get: function () { return css_1.css; } });
const find_1 = __webpack_require__(16);
Object.defineProperty(exports, "find", { enumerable: true, get: function () { return find_1.find; } });
const http_1 = __webpack_require__(17);
Object.defineProperty(exports, "http", { enumerable: true, get: function () { return http_1.http; } });
const trim_1 = __webpack_require__(6);
Object.defineProperty(exports, "trim", { enumerable: true, get: function () { return trim_1.trim; } });
const rever_1 = __webpack_require__(18);
Object.defineProperty(exports, "rever", { enumerable: true, get: function () { return rever_1.rever; } });
const remove_1 = __webpack_require__(19);
Object.defineProperty(exports, "remove", { enumerable: true, get: function () { return remove_1.remove; } });
const extend_1 = __webpack_require__(7);
Object.defineProperty(exports, "extend", { enumerable: true, get: function () { return extend_1.extend; } });
const getQuery_1 = __webpack_require__(20);
Object.defineProperty(exports, "getQuery", { enumerable: true, get: function () { return getQuery_1.getQuery; } });
const inBefore_1 = __webpack_require__(21);
Object.defineProperty(exports, "inBefore", { enumerable: true, get: function () { return inBefore_1.inBefore; } });
const declOfNum_1 = __webpack_require__(22);
Object.defineProperty(exports, "declOfNum", { enumerable: true, get: function () { return declOfNum_1.declOfNum; } });
const getCookie_1 = __webpack_require__(23);
Object.defineProperty(exports, "getCookie", { enumerable: true, get: function () { return getCookie_1.getCookie; } });
const getParams_1 = __webpack_require__(24);
Object.defineProperty(exports, "getParams", { enumerable: true, get: function () { return getParams_1.getParams; } });
const delCookie_1 = __webpack_require__(25);
Object.defineProperty(exports, "delCookie", { enumerable: true, get: function () { return delCookie_1.delCookie; } });
const setCookie_1 = __webpack_require__(8);
Object.defineProperty(exports, "setCookie", { enumerable: true, get: function () { return setCookie_1.setCookie; } });
const confirmBox_1 = __webpack_require__(27);
Object.defineProperty(exports, "confirmBox", { enumerable: true, get: function () { return confirmBox_1.confirmBox; } });
const isValidUrl_1 = __webpack_require__(28);
Object.defineProperty(exports, "isValidUrl", { enumerable: true, get: function () { return isValidUrl_1.isValidUrl; } });
const messageBox_1 = __webpack_require__(29);
Object.defineProperty(exports, "messageBox", { enumerable: true, get: function () { return messageBox_1.messageBox; } });
const historyPush_1 = __webpack_require__(30);
Object.defineProperty(exports, "historyPush", { enumerable: true, get: function () { return historyPush_1.historyPush; } });
const insertAfter_1 = __webpack_require__(31);
Object.defineProperty(exports, "insertAfter", { enumerable: true, get: function () { return insertAfter_1.insertAfter; } });
const setLocation_1 = __webpack_require__(32);
Object.defineProperty(exports, "setLocation", { enumerable: true, get: function () { return setLocation_1.setLocation; } });
const getClassName_1 = __webpack_require__(33);
Object.defineProperty(exports, "getClassName", { enumerable: true, get: function () { return getClassName_1.getClassName; } });
const readSettings_1 = __webpack_require__(34);
Object.defineProperty(exports, "readSettings", { enumerable: true, get: function () { return readSettings_1.readSettings; } });
const getLocation_1 = __webpack_require__(35);
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
exports.PKG_VERSION = exports.OVERRIDE = exports.REVISION = exports.BASE_URL = exports.SPACES = exports.GITHUB = exports.DEVICE = exports.HTTP = exports.BETA = exports.ENV = void 0;
const package_json_1 = __importDefault(__webpack_require__(26));
/**
 * Константы
 */
const ENV =  false ? undefined : null;
exports.ENV = ENV;
const BETA = false;
exports.BETA = BETA;
const HTTP = document.location.protocol;
exports.HTTP = HTTP;
const REVISION = Number(new Date());
exports.REVISION = REVISION;
const BASE_URL = document.location.hostname;
exports.BASE_URL = BASE_URL;
const DEVICE = window.Device || unsafeWindow.Device;
exports.DEVICE = DEVICE;
const GITHUB = 'spaces-dev.github.io/SpacesPlus';
exports.GITHUB = GITHUB;
const SPACES = `${HTTP}//${BASE_URL}`;
exports.SPACES = SPACES;
const PKG_VERSION = package_json_1.default.version;
exports.PKG_VERSION = PKG_VERSION;
/**
 * Временное хранилище данных
 */
class OVERRIDE {
}
exports.OVERRIDE = OVERRIDE;
OVERRIDE.KARMA = false;
OVERRIDE.COINS = false;
OVERRIDE.COMMENTS = 0;
OVERRIDE.PLAYER_ID = 0;
OVERRIDE.VERSION = Number(PKG_VERSION.split('.').join(''));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports._SETTINGS = exports._SETSTRINGS = void 0;
const strings_1 = __webpack_require__(1);
/**
 * * Строки названий функций в меню настроек
 * ! Положение в объекте НЕ влияет на рассположение в списке настроек
 */
exports._SETSTRINGS = {
    'comments': 'Пакетное удаление комментариев',
    'blogsd': 'Пакетное удаление блогов',
    'readersd': 'Пакетное удаление читателей',
    'favorite': 'Возможность добавить пользователя в закладки',
    'blocked': 'Открытые разделы удаленных пользователей',
    'grotate': 'Кнопка поворота фото в просмотрщике',
    'oldheader': 'Старое положение кнопок в шапке',
    'playerdn': 'Кнопка загрузки трека из плеера',
    'dredirect': 'Внешние ссылки без редиректа',
    'online': 'Точное время онлайн в анкетах',
    'coins': 'Собирать бонусные монеты',
    'rscroll': 'Прокрутка страницы справа',
    'hrightbar': 'Скрыть правое меню',
    'adblock': 'Скрывать рекламу',
    'myEvents': 'Звук уведомлений',
    'playback': 'Кнопка ускорения видео',
    'karma': 'Собирать карму',
    'friendsOn': 'Панель друзей онлайн',
    'bodystyle': 'Фон сайта',
    'msgAlert': 'Виджет почты',
    'weatherWidget': 'Виджет погоды',
    'sticker': 'Бесплатные стикеры'
};
/**
 * * Стандартная конфигурация
 * ? Чтобы пункт настроек появился в списке настроек
 * ? клюк необходимо продублировать в _SETSTRINGS
 * ? если ключ undefined, то пункт не будет добавлен список
 * * for (let i in _SETTINGS) {
 * *     if (typeof _SETSTRINGS[i] !== 'undefined') {
 * ! Положение в объекте ВЛИЯЕТ на рассположение в списке настроек
 */
exports._SETTINGS = {
    'comments': false,
    'blogsd': false,
    'readersd': false,
    'favorite': true,
    'blocked': true,
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
    'apidebug': false,
    'karma': true,
    'sticker': true,
    'playback': true,
    'videoSpeed': 1,
    'friendsOn': true,
    'myEvents': false,
    'bodystyle': true,
    'upVersion': strings_1.OVERRIDE.VERSION,
    'bodystyleSetting': {
        'url': `https://${strings_1.GITHUB}/src/backgrounds/default.jpg`,
        'color': '#DAE1E8',
        'urlchecked': true,
        'colorchecked': false
    },
    'events': {
        'url': `https://${strings_1.GITHUB}/src/sounds/default.ogg`,
        'volume': 70,
        'mail': true,
        'journal': true,
        'feed': false,
        'notifications': false
    },
    'friendsOnMax': 10,
    'friendsListSH': true,
    'friendsDisplay': true,
    'hideNotyf': {
        'cookieEditor': false,
        'configImport': false
    },
    'msgAlert': false,
    'msgAlertSettings': {
        'alertPosition': 4,
        'maxAlert': 3,
        'animDelay': 3,
        'alertDelay': 3
    },
    'weatherWidget': false,
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
exports.settingsChangelogMenu = exports.settingsBackupMenu = exports.settingsBackground = exports.videoSpeedPlayback = exports.settingsFeatures = exports.disableRedirect = exports.settingsFriends = exports.playerDownload = exports.hiddenRightbar = exports.deleteComments = exports.sidebarButton = exports.galleryRotate = exports.friendsOnline = exports.deleteReaders = exports.settingsMenu = exports.freeStickers = exports.favoriteUser = exports.checkUpdates = exports.karmaAccept = exports.deleteBlogs = exports.coinsAccept = exports.apiDebugger = exports.userOnline = exports.userStatus = exports.scrollMove = exports.getUpdater = exports.setStyles = exports.oldHeader = exports.adBlock = void 0;
const adBlock_1 = __webpack_require__(13);
Object.defineProperty(exports, "adBlock", { enumerable: true, get: function () { return adBlock_1.adBlock; } });
const oldHeader_1 = __webpack_require__(36);
Object.defineProperty(exports, "oldHeader", { enumerable: true, get: function () { return oldHeader_1.oldHeader; } });
const setStyles_1 = __webpack_require__(9);
Object.defineProperty(exports, "setStyles", { enumerable: true, get: function () { return setStyles_1.setStyles; } });
const scrollMove_1 = __webpack_require__(37);
Object.defineProperty(exports, "scrollMove", { enumerable: true, get: function () { return scrollMove_1.scrollMove; } });
const userStatus_1 = __webpack_require__(38);
Object.defineProperty(exports, "userStatus", { enumerable: true, get: function () { return userStatus_1.userStatus; } });
const userOnline_1 = __webpack_require__(39);
Object.defineProperty(exports, "userOnline", { enumerable: true, get: function () { return userOnline_1.userOnline; } });
const apiDebugger_1 = __webpack_require__(40);
Object.defineProperty(exports, "apiDebugger", { enumerable: true, get: function () { return apiDebugger_1.apiDebugger; } });
const coinsAccept_1 = __webpack_require__(41);
Object.defineProperty(exports, "coinsAccept", { enumerable: true, get: function () { return coinsAccept_1.coinsAccept; } });
const deleteBlogs_1 = __webpack_require__(42);
Object.defineProperty(exports, "deleteBlogs", { enumerable: true, get: function () { return deleteBlogs_1.deleteBlogs; } });
const karmaAccept_1 = __webpack_require__(43);
Object.defineProperty(exports, "karmaAccept", { enumerable: true, get: function () { return karmaAccept_1.karmaAccept; } });
const favoriteUser_1 = __webpack_require__(44);
Object.defineProperty(exports, "favoriteUser", { enumerable: true, get: function () { return favoriteUser_1.favoriteUser; } });
const freeStickers_1 = __webpack_require__(45);
Object.defineProperty(exports, "freeStickers", { enumerable: true, get: function () { return freeStickers_1.freeStickers; } });
const settingsMenu_1 = __webpack_require__(46);
Object.defineProperty(exports, "settingsMenu", { enumerable: true, get: function () { return settingsMenu_1.settingsMenu; } });
const deleteReaders_1 = __webpack_require__(47);
Object.defineProperty(exports, "deleteReaders", { enumerable: true, get: function () { return deleteReaders_1.deleteReaders; } });
const friendsOnline_1 = __webpack_require__(10);
Object.defineProperty(exports, "friendsOnline", { enumerable: true, get: function () { return friendsOnline_1.friendsOnline; } });
const galleryRotate_1 = __webpack_require__(48);
Object.defineProperty(exports, "galleryRotate", { enumerable: true, get: function () { return galleryRotate_1.galleryRotate; } });
const sidebarButton_1 = __webpack_require__(49);
Object.defineProperty(exports, "sidebarButton", { enumerable: true, get: function () { return sidebarButton_1.sidebarButton; } });
const deleteComments_1 = __webpack_require__(50);
Object.defineProperty(exports, "deleteComments", { enumerable: true, get: function () { return deleteComments_1.deleteComments; } });
const hiddenRightbar_1 = __webpack_require__(51);
Object.defineProperty(exports, "hiddenRightbar", { enumerable: true, get: function () { return hiddenRightbar_1.hiddenRightbar; } });
const playerDownload_1 = __webpack_require__(52);
Object.defineProperty(exports, "playerDownload", { enumerable: true, get: function () { return playerDownload_1.playerDownload; } });
const settingsFriends_1 = __webpack_require__(53);
Object.defineProperty(exports, "settingsFriends", { enumerable: true, get: function () { return settingsFriends_1.settingsFriends; } });
const disableRedirect_1 = __webpack_require__(54);
Object.defineProperty(exports, "disableRedirect", { enumerable: true, get: function () { return disableRedirect_1.disableRedirect; } });
const settingsFeatures_1 = __webpack_require__(55);
Object.defineProperty(exports, "settingsFeatures", { enumerable: true, get: function () { return settingsFeatures_1.settingsFeatures; } });
const videoSpeedPlayback_1 = __webpack_require__(56);
Object.defineProperty(exports, "videoSpeedPlayback", { enumerable: true, get: function () { return videoSpeedPlayback_1.videoSpeedPlayback; } });
const settingsBackground_1 = __webpack_require__(57);
Object.defineProperty(exports, "settingsBackground", { enumerable: true, get: function () { return settingsBackground_1.settingsBackground; } });
const settingsBackupMenu_1 = __webpack_require__(58);
Object.defineProperty(exports, "settingsBackupMenu", { enumerable: true, get: function () { return settingsBackupMenu_1.settingsBackupMenu; } });
const checkUpdates_1 = __webpack_require__(11);
Object.defineProperty(exports, "checkUpdates", { enumerable: true, get: function () { return checkUpdates_1.checkUpdates; } });
Object.defineProperty(exports, "getUpdater", { enumerable: true, get: function () { return checkUpdates_1.getUpdater; } });
const settingsChangelogMenu_1 = __webpack_require__(59);
Object.defineProperty(exports, "settingsChangelogMenu", { enumerable: true, get: function () { return settingsChangelogMenu_1.settingsChangelogMenu; } });


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.css = void 0;
const trim_1 = __webpack_require__(6);
// TODO: interface
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
exports.trim = (str) => str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.extend = void 0;
// TODO: interface
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
// TODO: Refactoring & interface
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
    if (!utils_1.qs('#SP_STICKER_CSS') && strings_1.BASE_URL === 'spaces-blogs.com') {
        let sticker = utils_1.qs('#SP_STICKER_CSS') || utils_1.ce('link', {
            rel: 'stylesheet',
            type: 'text/css',
            id: 'SP_STICKER_CSS',
            href: `https://${strings_1.ENV !== null && strings_1.ENV !== void 0 ? strings_1.ENV : strings_1.GITHUB}/src/css/sticker.css?r=${strings_1.REVISION}`
        });
        document.getElementsByTagName('head')[0].appendChild(sticker);
    }
    if (!utils_1.qs('#SP_PLUS_MENU')) {
        let menu = utils_1.qs('#SP_PLUS_MENU') || utils_1.ce('link', {
            rel: 'stylesheet',
            type: 'text/css',
            id: 'SP_PLUS_MENU',
            href: `https://${strings_1.ENV !== null && strings_1.ENV !== void 0 ? strings_1.ENV : strings_1.GITHUB}/src/css/menu.css?r=${strings_1.REVISION}`
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
                                        let disableAvatar = utils_1.find(document.getElementsByTagName('span'), { className: 's_i s_i_exit' });
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
        utils_1.http('GET', `https://${strings_1.ENV !== null && strings_1.ENV !== void 0 ? strings_1.ENV : strings_1.GITHUB}/src/updater.json?r=${strings_1.REVISION}`, false).then(e => {
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
                utils_1.messageBox(`Доступна новая версия Spaces+ ${utils_1.rever(json.history[0].build)}`, `<div class="pad_t_a"></div>${json.history[0].changes}<div id="SP_UPDATER_BUTTONS" class="pad_t_a"><a class="btn btn_green btn_input" href="https://github.com/spaces-dev/${strings_1.GITHUB}/raw/master/spaces-plus.user.js?r=${strings_1.REVISION}" onclick="document.body.removeChild(this.parentNode.parentNode.parentNode); return true"> Обновить</a></div>`, true);
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
/* 12 */
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
                        // Сохраняем CK
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
            utils_1.error('Ошибка (index.ts): ' + e);
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
        if (settings_1._SETTINGS.coins)
            components_1.coinsAccept();
        if (settings_1._SETTINGS.karma)
            components_1.karmaAccept();
        if (settings_1._SETTINGS.online)
            components_1.userOnline();
        if (settings_1._SETTINGS.grotate)
            components_1.galleryRotate();
        if (settings_1._SETTINGS.favorite)
            components_1.favoriteUser();
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.adBlock = void 0;
const utils_1 = __webpack_require__(0);
exports.adBlock = () => {
    let ad = utils_1.find(document.links, { title: 'Реклама' });
    try {
        if (ad) {
            utils_1.remove(ad[0].parentNode);
        }
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
exports.qs = void 0;
exports.qs = (e) => document.querySelector(e);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.find = void 0;
// TODO: interface
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
async function http(method, url, proxy, body) {
    const header = proxy ? { 'X-Proxy': 'spaces' } : { 'Content-Type': 'application/x-www-form-urlencoded' };
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
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}
exports.http = http;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rever = void 0;
exports.rever = (s) => s ? s.toString().split('').join('.') : s;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
exports.remove = (e) => e.parentNode.removeChild(e);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuery = void 0;
const console_1 = __webpack_require__(3);
exports.getQuery = (name) => {
    var r, query = document.location.search;
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.inBefore = void 0;
exports.inBefore = (elem, refElem) => {
    let parent = refElem.parentNode;
    return parent.insertBefore(elem, refElem);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.declOfNum = void 0;
exports.declOfNum = (number, titles) => {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookie = void 0;
exports.getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getParams = void 0;
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.delCookie = void 0;
const setCookie_1 = __webpack_require__(8);
exports.delCookie = (name) => setCookie_1.setCookie(name, null, { expires: -1 });


/***/ }),
/* 26 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"spaces-plus\",\"description\":\"🚀 Powerfull userscript for Spaces.ru\",\"homepage\":\"https://spaces-dev.github.io/SpacesPlus\",\"version\":\"3.0.0\",\"author\":{\"name\":\"Vitalij Ryndin\",\"email\":\"sys@crashmax.ru\",\"url\":\"https://crashmax.ru\"},\"scripts\":{\"dev\":\"cross-env NODE_ENV=development webpack-dev-server --config-name main --host localhost --watch-poll\",\"build\":\"cross-env NODE_ENV=production webpack --progress\"},\"devDependencies\":{\"@babel/core\":\"^7.11.6\",\"@babel/preset-env\":\"^7.11.5\",\"@types/node\":\"^14.11.8\",\"@types/webpack\":\"^4.41.22\",\"@types/webpack-dev-server\":\"^3.11.0\",\"babel-loader\":\"^8.1.0\",\"clean-webpack-plugin\":\"^3.0.0\",\"copy-webpack-plugin\":\"^6.2.1\",\"cross-env\":\"^7.0.2\",\"optimize-css-assets-webpack-plugin\":\"^5.0.4\",\"ts-loader\":\"^8.0.4\",\"ts-node\":\"^9.0.0\",\"typescript\":\"^4.0.2\",\"webpack\":\"^4.44.2\",\"webpack-cli\":\"^3.3.12\",\"webpack-dev-server\":\"^3.11.0\",\"webpack-userscript\":\"^2.5.6\"}}");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmBox = void 0;
const index_1 = __webpack_require__(0);
exports.confirmBox = (text, warn, callback) => {
    let succesBtn = index_1.ce('button', { html: 'Да', href: '#', class: 'btn btn_red btn_input' });
    let cancelBtn = index_1.ce('a', { html: 'Отмена', href: '#', class: 'btn btn_white btn_input right sticker-close_btn' });
    let warningText = index_1.ce('small', { class: 'pad_t_a grey', html: 'Это действие нельзя будет отменить.' });
    let container = index_1.ce('div', { class: 'content-item3 wbg oh', html: text + '<div class="pad_t_a"></div>' });
    let br = index_1.ce('div', { class: 'pad_t_a' });
    succesBtn.onclick = () => {
        let check = index_1.qs('#SP_PLUS_CONFIRM');
        if (check) {
            callback();
            index_1.remove(check);
            return false;
        }
        return true;
    };
    cancelBtn.onclick = () => {
        let check = index_1.qs('#SP_PLUS_CONFIRM');
        if (check) {
            index_1.remove(check);
            return false;
        }
        return true;
    };
    let Main = index_1.qs('#SP_PLUS_CONFIRM');
    if (!Main) {
        Main = index_1.ce('div', { class: 'sticker sp-sticker-anim', id: 'SP_PLUS_CONFIRM' });
        if (warn) {
            container.appendChild(warningText);
        }
        container.appendChild(br);
        container.appendChild(succesBtn);
        container.appendChild(cancelBtn);
        Main.appendChild(container);
        document.body.appendChild(Main);
    }
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUrl = void 0;
exports.isValidUrl = (url) => {
    let regURLrf = /^(?:(?:https?|ftp|telnet):\/\/(?:[а-я0-9_-]{1,32}(?::[а-я0-9_-]{1,32})?@)?)?(?:(?:[а-я0-9-]{1,128}\.)+(?:рф)|(?! 0)(?:(?! 0[^.]|255)[ 0-9]{1,3}\.){3}(?! 0|255)[ 0-9]{1,3})(?:\/[a-zа-я0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
    let regURL = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?! 0)(?:(?! 0[^.]|255)[ 0-9]{1,3}\.){3}(?! 0|255)[ 0-9]{1,3})(?:\/[a-zа-я0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
    return regURLrf.test(url) || regURL.test(url);
};


/***/ }),
/* 29 */
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
    let Main = index_1.qs('#SP_PLUS_ALERT');
    let Container = index_1.ce('div', { class: 'sticker w400 sp-sticker-anim' });
    if (!Main) {
        Main = index_1.ce('div', {
            class: 'content-item3 wbg oh',
            id: 'SP_PLUS_ALERT',
            html: (close ?
                '<span class="sp sp-remove-grey pointer right notif_close close_h" onclick="document.body.removeChild(this.parentNode.parentNode)" title="Закрыть"></span>' :
                '') + `${title}<div class="pad_t_a"></div><small class="grey">${content}</small>`
        });
        Container.appendChild(Main);
        document.body.appendChild(Container);
    }
    if (timer !== undefined) {
        setTimeout(() => {
            var _a, _b;
            (_b = (_a = Main.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(Container);
        }, timer * 1000);
    }
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.historyPush = void 0;
const console_1 = __webpack_require__(3);
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAfter = void 0;
exports.insertAfter = (elem, refElem) => {
    let parent = refElem.parentNode, next = refElem.nextSibling;
    return parent && next ? parent.insertBefore(elem, next) : parent.appendChild(elem);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setLocation = void 0;
const utils_1 = __webpack_require__(0);
exports.setLocation = (url) => {
    let setLink = utils_1.qs('#SP_PLUS_SETLOCATIONLINK');
    let clickEvent = document.createEvent('MouseEvent');
    clickEvent.initEvent('click', true, true);
    if (setLink) {
        setLink.href = url;
        setLink.dispatchEvent(clickEvent);
    }
    else {
        setLink = utils_1.ce('a', { href: url, style: 'display: none', id: 'SP_PLUS_SETLOCATIONLINK' });
        document.body.appendChild(setLink);
        setLink.dispatchEvent(clickEvent);
    }
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getClassName = void 0;
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.readSettings = void 0;
const index_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getPath = exports.getHref = void 0;
exports.getHref = () => document.location.href;
/**
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.oldHeader = void 0;
const utils_1 = __webpack_require__(0);
exports.oldHeader = (b) => {
    let navi = utils_1.find(document.links, { className: 'horiz-menu__link' });
    if (navi) {
        let elem1 = navi[2].cloneNode(true);
        let elem2 = navi[4].cloneNode(true);
        if (b || !b && navi[2].pathname === '/mail/') {
            navi[4].replaceWith(elem1);
            navi[2].replaceWith(elem2);
        }
    }
};


/***/ }),
/* 37 */
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
/* 38 */
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
/* 39 */
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
    if (path !== target) {
        strings_1.OVERRIDE.ONLINE = null;
    }
    if (path === target) {
        try {
            let onBlock = utils_1.find(document.getElementsByClassName('info-item__title'), { innerHTML: 'Время онлайн:' });
            if (nick && onBlock && strings_1.OVERRIDE.ONLINE !== nick) {
                strings_1.OVERRIDE.ONLINE = nick;
                utils_1.http('GET', `${strings_1.SPACES}/anketa/index/${nick}/`, true).then(e => {
                    var _a, _b;
                    const response = (_b = (_a = e.parsedBody) === null || _a === void 0 ? void 0 : _a.user_widget) === null || _b === void 0 ? void 0 : _b.online_time;
                    if (response) {
                        // @ts-ignore
                        let str = parseFloat(response / 3600).toFixed(2).split('.');
                        // @ts-ignore
                        let online = str[0] > 0 ? `${str[0]} ч, ${parseInt(str[1] / (100 / 60), 10)} мин` : `${parseInt(str[1] / (100 / 60), 10)} мин`;
                        // @ts-ignore
                        onBlock[0].nextElementSibling.innerHTML = online;
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
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.coinsAccept = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.coinsAccept = () => {
    let coins = utils_1.find(document.links, { href: `${strings_1.SPACES}/services/gift_get/?Link_id=` });
    if (coins && !strings_1.OVERRIDE.COINS) {
        strings_1.OVERRIDE.COINS = true;
        try {
            utils_1.http('GET', coins[0].href, true).then(e => {
                if (e.status === 200) {
                    utils_1.remove(coins[0].parentNode);
                    utils_1.info('Собрали монетку!');
                }
                strings_1.OVERRIDE.COINS = false;
            });
        }
        catch (e) {
            utils_1.error('Ошибка (coinsAccept.ts): ' + e);
        }
    }
};


/***/ }),
/* 42 */
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
                            // @ts-ignore
                            id: 'SP_DB_' + /\&id=([0-9]+)/i.exec(link.href)[1]
                        });
                        let label = utils_1.ce('label', {
                            class: 'sp-ch-blogs',
                            style: 'margin: 1px',
                            // @ts-ignore
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
                                    // @ts-ignore
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
                                utils_1.messageBox('Внимание!', 'Отметьте галочкой, те блоги, которые вы хотите удалить и попробуйте еще раз', true, 8);
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.karmaAccept = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.karmaAccept = () => {
    let karma = utils_1.find(document.links, { href: `${strings_1.SPACES}/mysite/rate_n_karma/karma/?Accept=` });
    if (karma && !strings_1.OVERRIDE.KARMA) {
        strings_1.OVERRIDE.KARMA = true;
        try {
            utils_1.http('GET', karma[0].href, true).then(e => {
                if (e.status === 200) {
                    utils_1.remove(karma[0].parentNode);
                    utils_1.qs('#header_path').classList.remove('no-shadow');
                    utils_1.info('Cобрали карму!');
                }
                strings_1.OVERRIDE.KARMA = false;
            });
        }
        catch (e) {
            utils_1.error('Ошибка (karmaAccept.ts): ' + e);
        }
    }
};


/***/ }),
/* 44 */
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
                elem.firstElementChild.onclick = () => {
                    utils_1.confirmBox(`Вы действительно хотите удалить пользователя <b>${name}</b> из закладок?`, false, async () => {
                        await utils_1.http('GET', json.delete_URL, true).then(e => {
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
/* 45 */
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
/* 46 */
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
            // TODO: interface
            let entryLink = utils_1.find(document.links, { href: `${strings_1.SPACES}/settings/notification/?` });
            if (entryLink) {
                entryLink = entryLink[0];
                const urlSett = utils_1.getQuery('sp_plus_settings');
                const urlSettEditor = utils_1.getQuery('sp_cookie_editor');
                const urlSettChangeLog = utils_1.getQuery('sp_changelog');
                const urlSettBackup = utils_1.getQuery('sp_backup');
                const baseLink = utils_1.ce('a', {
                    href: `${strings_1.SPACES}/settings/?sp_plus_settings=1`,
                    id: 'SP_PLUS_SETLINK',
                    class: entryLink.className,
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
                        ////const eventAlert = qs('#SP_PLUS_ALERT')
                        if (setArea) {
                            for (let i in settings_1._SETTINGS) {
                                if (typeof settings_1._SETSTRINGS[i] !== 'undefined') {
                                    /**
                                    * Проверяем поддерживаемость данных функций на Touch версии сайта
                                    */
                                    let unsupported = (strings_1.DEVICE.id === 3 && (i === 'rscroll' || i === 'hrightbar')) ? true : false;
                                    let checkbox = utils_1.ce('input', {
                                        id: i,
                                        type: 'checkbox',
                                        class: 'sp-checkbox-square',
                                        attr: { unsupported: unsupported },
                                        checked: settings_1._SETTINGS[i],
                                        onclick: (e) => {
                                            const { id, checked } = e.target;
                                            if (e.target.attributes.unsupported.value === 'true') {
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
                                                case 'myEvents':
                                                    break;
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
                                                case 'msgAlert':
                                                    break;
                                                case 'weatherWidget':
                                                    break;
                                            }
                                        }
                                    });
                                    let description = utils_1.ce('label', { html: settings_1._SETSTRINGS[i], attr: { 'for': i } });
                                    let label = utils_1.ce('label', { class: `stnd-link bstrwrap${unsupported ? ' sp_unsupported' : ''}` });
                                    label.appendChild(checkbox);
                                    label.appendChild(description);
                                    setArea.appendChild(label);
                                    setArea.appendChild(label);
                                }
                            }
                            // Дополнительное меню настроек
                            if (settings_1._SETTINGS.friendsOn) {
                                index_1.settingsFriends(utils_1.qs('#friendsOn'));
                            }
                            if (settings_1._SETTINGS.bodystyle) {
                                index_1.settingsBackground(utils_1.qs('#bodystyle'));
                            }
                            /*if (_SETTINGS.myEvents) {
                                evenstSupport(qs('#sp_set_myEvents'))
                            }
                            if (_SETTINGS.msgAlert) {
                                msgAlertSettings(qs('#sp_set_msgAlert'))
                            }
                            if (_SETTINGS.weatherWidget) {
                                weatherSettings(qs('#sp_set_weatherWidget'))
                            }*/
                            // footer buttons area start
                            let spacesLabel1 = utils_1.ce('div', {
                                class: 'sp_plus_line',
                                html: '<span class="sp_plus_text">Встроенные возможности сайта</span>'
                            });
                            /*let spacesLabel2 = ce('div', {
                                class: 'sp_plus_line',
                                html: '<span class="sp_plus_text">Дополнительные функции</span>'
                            })*/
                            let spacesLabel3 = utils_1.ce('div', {
                                class: 'sp_plus_line',
                                html: '<span class="sp_plus_text">Прочее</span>'
                            });
                            setArea.appendChild(spacesLabel1);
                            index_1.settingsFeatures(setArea);
                            // TODO: Сюда нужна проверка квеста новичка
                            // setArea.appendChild(spacesLabel2)
                            /**
                             * TODO: Обновить дизайн
                            const CookieEditor = ce('a', {
                                href: `${SPACES}/settings/?sp_plus_settings=1&sp_cookie_editor=1`,
                                class: 'stnd-link stnd-link_arr sp_last_btn',
                                id: 'sp_cookie_editor',
                                html: '<span class="b"><span class="sp sp-write-grey mr-14"></span>Редактор cookies<span class="ico ico_arr ico_m"></span></span>',
                                onclick: () => {
                                    qs('#SP_PLUS_SETHEAD').innerHTML = 'Редактор cookies';
                                    qs('#SP_PLUS_SETHEAD2').innerHTML = `<a href="${SPACES}/settings/?sp_plus_settings=1" style="margin-bottom: 1px">Spaces+</a><span class="location-bar__sep ico"></span> Редактор cookies`
                                    qs('#SP_PLUS_SETBACK').href = `${SPACES}/settings/?sp_plus_settings=1`
                                    if (!/(\&)sp_cookie_editor=1/i.test(getHref())) {
                                        historyPush({
                                            'sp_plus_settings': urlSett,
                                            'sp_cookie_editor': urlSettEditor
                                        }, `${SPACES}/settings/?sp_plus_settings=1&sp_cookie_editor=1`, 'Spaces+: Редактор cookies')
                                    }
                                    //("#SP_PLUS_SETAREA");
                                    return false
                                }
                            })
                            setArea.appendChild(CookieEditor)
                            */
                            setArea.appendChild(spacesLabel3);
                            // spaces+ backup start
                            const SettingsBackup = utils_1.ce('a', {
                                href: `${strings_1.SPACES}/settings/?sp_plus_settings=1&sp_backup=1`,
                                class: 'stnd-link stnd-link_arr sp_font_sm',
                                id: 'sp_backup',
                                html: '<span class="b" style="color: #2e7d32"><span class="sp sp-backup-g mr-14"></span>Импорт и экспорт настроек<span class="ico ico_arr ico_m"></span></span>',
                                onclick: () => {
                                    utils_1.qs('#SP_PLUS_SETHEAD').innerHTML = 'Импорт и экспорт настроек';
                                    utils_1.qs('#SP_PLUS_SETHEAD2').innerHTML = `<a href="${strings_1.SPACES}/settings/?sp_plus_settings=1" style="margin-bottom: 1px">Spaces+</a><span class="location-bar__sep ico"></span> Импорт и экспорт настроек`;
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
                            // spaces+ backup end
                            // changelog menu start
                            const ChangeLogMenu = utils_1.ce('a', {
                                href: `${strings_1.SPACES}/settings/?sp_plus_settings=1&sp_changelog=1`,
                                class: 'stnd-link stnd-link_arr sp_font_sm',
                                id: 'sp_changelog',
                                html: '<span class="b" style="color: #2196f3"><span class="sp sp-restore-blue mr-14"></span>История обновлений<span class="ico ico_arr ico_m"></span></span>',
                                onclick: () => {
                                    utils_1.qs('#SP_PLUS_SETHEAD').innerHTML = 'История обновлений';
                                    utils_1.qs('#SP_PLUS_SETHEAD2').innerHTML = `<a href="${strings_1.SPACES}/settings/?sp_plus_settings=1" style="margin-bottom: 1px">Spaces+</a><span class="location-bar__sep ico"></span> История обновлений`;
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
                            // changelog menu end
                            // reset button start
                            const ResetSettings = utils_1.ce('a', {
                                href: '#',
                                class: 'stnd-link stnd-link_arr sp_font_sm',
                                id: 'sp_plus_reset',
                                html: '<span class="b" style="color: #f86934"><span class="sp sp-alert mr-14"></span>Сброс настроек<span class="ico ico_arr ico_m"></span></span>',
                                onclick: () => {
                                    utils_1.confirmBox('Вы действительно хотите полностью сбросить настройки?', true, () => {
                                        utils_1.delCookie('SP_PLUS_SET');
                                        utils_1.delCookie('gp_left_btn');
                                        utils_1.delCookie('force_ajax_transport');
                                        utils_1.delCookie('sandbox');
                                        document.location.reload();
                                    });
                                    return false;
                                }
                            });
                            setArea.appendChild(ResetSettings);
                            // reset button end
                            // footer start
                            let clicks = 0, aboutWidget = utils_1.ce('div', { class: 'widgets-group widgets-group_top nl wbg no-select' }), ver = utils_1.ce('div', { style: 'float: right', html: 'v' + strings_1.PKG_VERSION }), content = utils_1.ce('div', { class: 'content-item3' }), heart = utils_1.ce('div', {
                                html: '❤️',
                                class: 'heart',
                                onclick: () => {
                                    clicks++;
                                    if (clicks >= 10) {
                                        // TODO: Пасхалка
                                    }
                                }
                            }), title = utils_1.ce('div', {
                                class: 'grey',
                                html: 'Developed by <a href="https://crashmax.ru" target="_blank">crashmax</a> with love '
                            });
                            aboutWidget.appendChild(content);
                            title.appendChild(heart);
                            content.appendChild(title);
                            title.appendChild(ver);
                            utils_1.qs('#SP_PLUS_ABOUT').appendChild(aboutWidget);
                            // footer end
                        }
                        return false;
                    }
                });
                utils_1.inBefore(baseLink, entryLink);
                if (entryLink.nextElementSibling.nodeName === 'BR') {
                    utils_1.insertAfter(utils_1.ce('br'), baseLink);
                }
                // outaded start
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
                // outaded end
            }
        }
        catch (e) {
            utils_1.error('Ошибка (SETTINGS): ' + e);
        }
    }
};


/***/ }),
/* 47 */
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
                        // @ts-ignore
                        id: 'SP_DR_' + /(\?|&)user=([A-Za-z0-9\_]+)/i.exec(link.href)[2]
                    });
                    let ckbxlb = utils_1.ce('label', {
                        style: 'margin-left: 0px',
                        // @ts-ignore
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
                                    // @ts-ignore
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
                                utils_1.messageBox('Внимание!', 'Отметьте галочкой, теx читателей, которых вы хотите удалить и попробуйте еще раз', true, 8);
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.galleryRotate = void 0;
const utils_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
exports.galleryRotate = () => {
    let Image = utils_1.qs('#gallery-container');
    let Rotate = utils_1.qs('#SP_IMAGE_ROTATE');
    let Video = utils_1.qs('.player-dummy_wrap');
    try {
        if (Rotate) {
            Image.className = 'accel-3d rotate' + settings_1._SETTINGS.angle;
        }
        if (Image !== null && Rotate === null && !Video) {
            let buttonRotate = utils_1.ce('a', {
                class: 'gallery__tools_button',
                id: 'SP_IMAGE_ROTATE',
                title: 'Повернуть',
                html: '<span class="ico_gallery ico_gallery_reload m"></span>',
                onclick: () => {
                    settings_1._SETTINGS.angle = (settings_1._SETTINGS.angle + 90) % 360;
                    utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                    return false;
                }
            });
            utils_1.qs('#g_dloadlink').after(buttonRotate);
        }
    }
    catch (e) {
        utils_1.error('Ошибка (galleryRotate.ts): ' + e);
    }
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sidebarButton = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.sidebarButton = () => {
    let button = utils_1.qs('#SP_SETTINGS_BUTTON');
    let disableIcons = utils_1.find(document.getElementsByTagName('span'), { className: 's_i s_i_exit' });
    // TODO: type
    let target = utils_1.find(document.links, { href: `${strings_1.SPACES}/services/?` });
    if (target && !button) {
        let link = utils_1.ce('li', {
            class: 'li',
            id: 'SP_SETTINGS_BUTTON',
            html: `<a href="${strings_1.SPACES}/settings/?sp_plus_settings=1" title="Настройки Spaces+">${(disableIcons ? '<span class="sp sp-ico"></span>' : '')}<span class="m s_i_text"> Spaces+</span></a>`
        });
        target = target[0].parentNode;
        utils_1.insertAfter(link, target);
        if (target.nextElementSibling.nodeName === 'BR') {
            utils_1.insertAfter(utils_1.ce('br'), link);
        }
    }
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComments = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.deleteComments = () => {
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
                            // @ts-ignore
                            let DC = `DC_${(strings_1.DEVICE.id === 4 ? child.parentNode.parentNode.parentNode.parentNode.parentNode.id : child.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id)}`;
                            let checkbox = utils_1.ce('input', {
                                type: 'checkbox',
                                class: 'sp-cbfc sp-checkbox-square',
                                // @ts-ignore
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
                                let parent = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target;
                                for (let input of inputs) {
                                    // @ts-ignore
                                    if (input.type === 'checkbox' && /DC_([0-9]+)/gi.test(input.id) && input.parentNode.parentNode.parentNode.style.display !== 'none') {
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
                                    utils_1.messageBox('Внимание!', 'Отметьте галочкой, те комментарии, которые вы хотите удалить и попробуйте еще раз', true, 8);
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hiddenRightbar = void 0;
const utils_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
exports.hiddenRightbar = (b) => {
    let rightbar = utils_1.qs('#page_rightbar');
    try {
        if (b && !rightbar.hasAttribute('sp-hidden-rightbar')) {
            rightbar.style.display = 'none';
            rightbar.setAttribute('sp-hidden-rightbar', '1');
        }
        else if (!settings_1._SETTINGS.hrightbar && rightbar.hasAttribute('sp-hidden-rightbar')) {
            rightbar.style.display = 'block';
            rightbar.removeAttribute('sp-hidden-rightbar');
        }
    }
    catch (e) {
        utils_1.error('Ошибка (hidderRightbar.ts): ' + e);
    }
};


/***/ }),
/* 52 */
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
            let tdIc = utils_1.find(player.getElementsByTagName('td'), { className: 'ico_td' });
            if (tdIc && !downPlace) {
                strings_1.OVERRIDE.PLAYER_ID = trId;
                let dwnTd = utils_1.ce('td', {
                    id: 'SP_MUSIC_DOWN',
                    class: 'ico_td',
                    innerHTML: '<span class="ico ico_download2" title="Скачать"></span>',
                    onclick: () => { location.href = trScr; }
                });
                utils_1.insertAfter(dwnTd, tdIc[0]);
            }
            else if (downPlace && strings_1.OVERRIDE.PLAYER_ID !== trId) {
                strings_1.OVERRIDE.PLAYER_ID = trId;
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
/* 53 */
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
        let div = utils_1.ce('div', { style: 'padding: 11px 15px' });
        let frMax = utils_1.ce('input', {
            type: 'text',
            class: 'text-input',
            size: 4,
            attr: { maxlength: 2 },
            value: settings_1._SETTINGS.friendsOnMax
        });
        frMax.addEventListener('change', (e) => {
            if (!isNaN(e.target.value)) {
                let value = Number(e.target.value);
                frMax.className = 'text-input';
                if (value > 15 || value < 1) {
                    value = 10;
                    frMax.className = 'text-input sp-input-error';
                }
                settings_1._SETTINGS.friendsOnMax = value;
                utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
                friendsOnline_1.friendsOnline(true);
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.disableRedirect = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
exports.disableRedirect = () => {
    let urls = utils_1.find(document.links, { href: `${strings_1.SPACES}/redirect/?` });
    if (urls) {
        for (let url of urls) {
            url.setAttribute('href', utils_1.getParams(url)['redirect']);
        }
    }
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsFeatures = void 0;
const utils_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
const strings_1 = __webpack_require__(1);
exports.settingsFeatures = (root) => {
    let wrap = utils_1.ce('div', { id: 'wrap_spaces_option' });
    let apidebug = utils_1.ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_font_sm',
        html: settings_1._SETTINGS.apidebug ?
            '<span class="b"><span class="sp sp-remove-grey mr-14"></span>Отключить отладчик<span class="ico ico_arr ico_m"></span></span>' :
            '<span class="b"><span class="ico ico_settings mr-14"></span>Включить отладчик<span class="ico ico_arr ico_m"></span></span>',
        onclick: () => {
            settings_1._SETTINGS.apidebug = !settings_1._SETTINGS.apidebug ? true : false;
            utils_1.setCookie('SP_PLUS_SET', JSON.stringify(settings_1._SETTINGS));
            document.location.reload();
            return false;
        }
    });
    const beta = utils_1.getCookie('sandbox');
    let sndbeta = utils_1.ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_font_sm',
        id: 'sp_spacesAction_beta',
        html: beta ?
            '<span class="b"><span class="sp sp-exit-grey mr-14"></span>Выйти из песочницы<span class="ico ico_arr ico_m"></span></span>' :
            '<span class="b"><span class="sp sp-enter-grey mr-14"></span>Beta-песочница<span> - открытое тестирование нововведений сайта<span class="ico ico_arr ico_m"></span></span></span>',
        onclick: () => {
            beta ? utils_1.delCookie('sandbox') : utils_1.setCookie('sandbox', 'beta');
            document.location.reload();
            return false;
        }
    });
    const fat = utils_1.getCookie('force_ajax_transport');
    let fatWrap = utils_1.ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_font_sm',
        id: 'sp_spacesFAT',
        html: fat ?
            '<span class="b"><span class="sp sp-remove-grey mr-14"></span>Убрать полосу загрузки<span class="ico ico_arr ico_m"></span></span>' :
            '<span class="b"><span class="ico ico_ok_grey mr-14"></span>Добавить полосу загрузки страницы<span class="ico ico_arr ico_m"></span><span>',
        onclick: () => {
            fat ? utils_1.delCookie('force_ajax_transport') : utils_1.setCookie('force_ajax_transport', '1');
            document.location.reload();
            return false;
        }
    });
    const glb = utils_1.getCookie('gp_left_btn');
    let glbWrap = utils_1.ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_last_btn',
        id: 'sp_spacesGLB',
        html: glb ?
            '<span class="b"><span class="sp sp-remove-grey mr-14"></span>Убрать плеер из левой панели<span class="ico ico_arr ico_m"></span></span>' :
            '<span class="b"><span class="ico ico_ok_grey mr-14"></span>Закрепить плеер на левой панели<span class="ico ico_arr ico_m"></span></span>',
        onclick: () => {
            glb ? utils_1.delCookie('gp_left_btn') : utils_1.setCookie('gp_left_btn', '1');
            document.location.reload();
            return false;
        }
    });
    // TODO: Добавить проверку квеста новичка!
    let nbqLink = utils_1.ce('a', {
        href: '#',
        style: 'display: none',
        id: 'sp_newbequest_togl',
        class: 'stnd-link stnd-link_arr sp_line sp_last_btn sp_newbq_l',
        html: '<span class="b"><span class="sp sp-remove-grey mr-14"></span>Скрыть квест новичка<span class="ico ico_arr ico_m"></span></span>',
        onclick: function () {
            utils_1.confirmBox('Вы действительно хотите скрыть квест новичка?', true, () => {
                utils_1.http('GET', `${strings_1.SPACES}/newbequest/?CK=${strings_1.OVERRIDE.CK}`, true).then(e => {
                    if (e.status === 200) {
                        utils_1.messageBox('Поздравляем!', 'Квест новичка успешно был скрыт', true, 3);
                    }
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
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.videoSpeedPlayback = void 0;
const utils_1 = __webpack_require__(0);
const settings_1 = __webpack_require__(2);
exports.videoSpeedPlayback = () => {
    let jwcontrols = utils_1.find(document.getElementsByTagName('span'), { className: 'jwcontrols' });
    let playback = utils_1.qs('#SP_PLAYBACK_VIDEO');
    try {
        if (playback) {
            document.querySelector('video').playbackRate = settings_1._SETTINGS.videoSpeed;
        }
        if (jwcontrols !== null && playback === null) {
            let target = utils_1.find(document.getElementsByTagName('span'), { className: 'jwtext jwduration jwhidden' });
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
            target[0].after(buttonPlayback);
        }
    }
    catch (e) {
        utils_1.error('Ошибка (videoSpeedPlayback.ts): ' + e);
    }
};


/***/ }),
/* 57 */
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
            if ((utils_1.isValidUrl(a.target.value) && /\.(jpg|jpeg|png|gif)$/i.test(a.target.value)) || utils_1.trim(a.target.value) === '') {
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
        inputColor.addEventListener('change', (a) => {
            if (/^\#([A-Za-z0-9]{3}|[A-Za-z0-9]{6})$/i.test(a.target.value) || a.target.value === '') {
                settings_1._SETTINGS.bodystyleSetting.color = utils_1.trim(a.target.value);
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
                href: `https://${strings_1.ENV !== null && strings_1.ENV !== void 0 ? strings_1.ENV : strings_1.GITHUB}/src/css/bodystyle.css?r=${strings_1.REVISION}`
            });
            document.getElementsByTagName('head')[0].appendChild(style);
            let SPB = utils_1.qs('#SP_PLUS_BODYSTYLE'), gd = utils_1.ce('div', { class: 'js-gallery_skip wbg oh tiles_block tiles_wrapper' }), stdnI = utils_1.ce('div', { id: 'SP_WRAP_IMAGE', style: 'border-top: 1px solid #cdd4e1' });
            await utils_1.http('GET', `https://${strings_1.ENV !== null && strings_1.ENV !== void 0 ? strings_1.ENV : strings_1.GITHUB}/src/data.json?r=${strings_1.REVISION}`, false).then(e => {
                var _a, _b;
                if (e.status === 200 && ((_a = e.parsedBody) === null || _a === void 0 ? void 0 : _a.backgrounds)) {
                    for (let i of (_b = e.parsedBody) === null || _b === void 0 ? void 0 : _b.backgrounds) {
                        let d1 = utils_1.ce('div', { class: 'js-file_item tiled_item tiled_item-200' }), d2 = utils_1.ce('div', { class: 'tiled_inner t_center relative' }), s3 = utils_1.ce('span', { class: 'relative', style: 'display: inline-block;max-width: 100%; width: 100%' }), ds1 = utils_1.ce('div', { class: 'tiled-preview border' }), img = utils_1.ce('img', {
                            class: 'preview s201_200',
                            style: 'cursor: pointer',
                            src: `https://${strings_1.ENV !== null && strings_1.ENV !== void 0 ? strings_1.ENV : strings_1.GITHUB}/src/backgrounds/${i}`,
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
                href: `https://${strings_1.ENV !== null && strings_1.ENV !== void 0 ? strings_1.ENV : strings_1.GITHUB}/src/css/toolbar.css?r=${strings_1.REVISION}`
            });
            let style2 = utils_1.ce('link', {
                rel: 'stylesheet',
                type: 'text/css',
                id: 'SP_PLUS_CP_STYLE_2',
                href: `https://${strings_1.ENV !== null && strings_1.ENV !== void 0 ? strings_1.ENV : strings_1.GITHUB}/src/css/user-content.css?r=${strings_1.REVISION}`
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
                // @ts-ignore
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsBackupMenu = void 0;
const utils_1 = __webpack_require__(0);
const strings_1 = __webpack_require__(1);
const settings_1 = __webpack_require__(2);
/**
 * TODO:
 * ? Сделать нормальный обработчик ошибок
 * ? Cохрание без перезагрузки страницы
 * ? Cохранение .json на рабочий стол
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
                onclick: function () {
                    getJSON(`value=${textarea.value}`, (json) => {
                        // TODO:
                        //// Исправить стакаемый список ошибок!
                        // Костыль ¯\_(ツ)_/¯
                        if (utils_1.qs('#JSON_ERROR_BLOCK')) {
                            errorsBlock.innerHTML = '<span class="sp sp-alert"></span> Невалидный JSON<br /><br />';
                            utils_1.remove(utils_1.qs('#JSON_ERROR_BLOCK'));
                        }
                        //
                        if (json.result.valid) {
                            utils_1.setCookie('SP_PLUS_SET', textarea.value);
                            utils_1.messageBox('Импорт и экспорт настроек', 'Настройки были успешно сохранены', true, 3);
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
                    rows: '65',
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsChangelogMenu = void 0;
const utils_1 = __webpack_require__(0);
const checkUpdates_1 = __webpack_require__(11);
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