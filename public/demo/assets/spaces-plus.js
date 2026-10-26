;(function (e) {
  function t(s) {
    if (n[s]) return n[s].exports
    let i = (n[s] = { i: s, l: !1, exports: {} })
    return e[s].call(i.exports, i, i.exports, t), (i.l = !0), i.exports
  }
  var n = {}
  return (
    (t.m = e),
    (t.c = n),
    (t.d = function (e, n, s) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: s })
    }),
    (t.r = function (e) {
      typeof Symbol != 'undefined' &&
      Symbol.toStringTag
        && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (t.t = function (e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e
      if (4 & n && typeof e == 'object' && e && e.__esModule) return e
      let s = Object.create(null)
      if (
        (t.r(s),
        Object.defineProperty(s, 'default', { enumerable: !0, value: e }),
        2 & n && typeof e != 'string')
      ) for (let i in e) t.d(
            s,
            i,
            ((t) => {
              return e[t]
            }).bind(null, i),
          )
      return s
    }),
    (t.n = function (e) {
      let n
        = e && e.__esModule
          ? function () {
            return e.default
          }
          : function () {
            return e
          }
      return t.d(n, 'a', n), n
    }),
    (t.o = function (e, t) {
      return Object.hasOwn(e, t)
    }),
    (t.p = ''),
    t((t.s = 12))
  )
})([
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.readSettings
        = t.notification
        = t.modifyObject
        = t.setSettings
        = t.historyPush
        = t.messageBox
        = t.isValidUrl
        = t.confirmBox
        = t.setCookie
        = t.playSound
        = t.getParams
        = t.getCookie
        = t.delCookie
        = t.declOfNum
        = t.getQuery
        = t.toUpper
        = t.getPath
        = t.extend
        = t.rever
        = t.error
        = t.trim
        = t.http
        = t.info
        = t.log
        = t.css
        = t.qsa
        = t.qs
        = t.ce
          = void 0)
    const s = n(14)
    Object.defineProperty(t, 'ce', {
      enumerable: !0,
      get () {
        return s.ce
      }
    })
    const i = n(5)
    Object.defineProperty(t, 'css', {
      enumerable: !0,
      get () {
        return i.css
      }
    })
    const d = n(15)
    Object.defineProperty(t, 'http', {
      enumerable: !0,
      get () {
        return d.http
      }
    })
    const r = n(6)
    Object.defineProperty(t, 'trim', {
      enumerable: !0,
      get () {
        return r.trim
      }
    })
    const a = n(17)
    Object.defineProperty(t, 'qs', {
      enumerable: !0,
      get () {
        return a.qs
      }
    }),
    Object.defineProperty(t, 'qsa', {
      enumerable: !0,
      get: function () {
        return a.qsa
      }
    })
    const l = n(18)
    Object.defineProperty(t, 'rever', {
      enumerable: !0,
      get () {
        return l.rever
      }
    })
    const o = n(7)
    Object.defineProperty(t, 'extend', {
      enumerable: !0,
      get () {
        return o.extend
      }
    })
    const p = n(19)
    Object.defineProperty(t, 'getPath', {
      enumerable: !0,
      get () {
        return p.getPath
      }
    })
    const c = n(20)
    Object.defineProperty(t, 'toUpper', {
      enumerable: !0,
      get () {
        return c.toUpper
      }
    })
    const u = n(21)
    Object.defineProperty(t, 'getQuery', {
      enumerable: !0,
      get () {
        return u.getQuery
      }
    })
    const _ = n(22)
    Object.defineProperty(t, 'declOfNum', {
      enumerable: !0,
      get () {
        return _.declOfNum
      }
    })
    const f = n(23)
    Object.defineProperty(t, 'delCookie', {
      enumerable: !0,
      get () {
        return f.delCookie
      }
    })
    const S = n(25)
    Object.defineProperty(t, 'getCookie', {
      enumerable: !0,
      get () {
        return S.getCookie
      }
    })
    const h = n(26)
    Object.defineProperty(t, 'getParams', {
      enumerable: !0,
      get () {
        return h.getParams
      }
    })
    const g = n(27)
    Object.defineProperty(t, 'playSound', {
      enumerable: !0,
      get () {
        return g.playSound
      }
    })
    const m = n(8)
    Object.defineProperty(t, 'setCookie', {
      enumerable: !0,
      get () {
        return m.setCookie
      }
    })
    const y = n(28)
    Object.defineProperty(t, 'confirmBox', {
      enumerable: !0,
      get () {
        return y.confirmBox
      }
    })
    const b = n(29)
    Object.defineProperty(t, 'isValidUrl', {
      enumerable: !0,
      get () {
        return b.isValidUrl
      }
    })
    const P = n(30)
    Object.defineProperty(t, 'messageBox', {
      enumerable: !0,
      get () {
        return P.messageBox
      }
    })
    const E = n(31)
    Object.defineProperty(t, 'historyPush', {
      enumerable: !0,
      get () {
        return E.historyPush
      }
    })
    const v = n(3)
    Object.defineProperty(t, 'log', {
      enumerable: !0,
      get () {
        return v.log
      }
    }),
    Object.defineProperty(t, 'info', {
      enumerable: !0,
      get: function () {
        return v.info
      }
    }),
    Object.defineProperty(t, 'error', {
      enumerable: !0,
      get: function () {
        return v.error
      }
    })
    const T = n(32)
    Object.defineProperty(t, 'modifyObject', {
      enumerable: !0,
      get () {
        return T.modifyObject
      }
    })
    const k = n(33)
    Object.defineProperty(t, 'notification', {
      enumerable: !0,
      get () {
        return k.notification
      }
    })
    const C = n(34)
    Object.defineProperty(t, 'readSettings', {
      enumerable: !0,
      get () {
        return C.readSettings
      }
    }),
    Object.defineProperty(t, 'setSettings', {
      enumerable: !0,
      get: function () {
        return C.setSettings
      }
    })
  },
  function (e, t, n) {
    'use strict'
    let s
      = (this && this.__importDefault)
      || function (e) {
        return e && e.__esModule ? e : { default: e }
      }
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.FirebaseConfig
        = t.PKG_VERSION
        = t.BASE_PATH
        = t.REVISION
        = t.ENV_PATH
        = t.BASE_URL
        = t.DOMAINS
        = t.SPACES
        = t.GITHUB
        = t.DEVICE
        = t.HTTP
        = t.DATA
        = t.DEV
          = void 0)
    const i = s(n(24));
      const d = !1
    t.DEV = d
    const r = document.location.protocol
    t.HTTP = r
    const a = document.location.hostname
    t.BASE_URL = a
    t.SPACES = `${r}//${a}`
    const l = i.default.version
    t.PKG_VERSION = l
    const o = i.default.homepage
    t.GITHUB = o
    const p = Date.now()
    t.REVISION = p
    const c = window.Device || unsafeWindow.Device
    t.DEVICE = c
    const u = o
    t.ENV_PATH = u
    t.DOMAINS = [
      'spaces-blogs.com',
      'gdespaces.com',
      'spaces.ru',
      'spaces.im',
      'spac1.net',
      'spcs.me',
    ]
    t.BASE_PATH = [
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
      'guestbook.index',
    ]
    t.FirebaseConfig = {
      apiKey: 'AIzaSyB8iDAyd-mMrSnBDKj_qasTjw268mk1d14',
      authDomain: 'spacesplus.firebaseapp.com',
      databaseURL: 'https://spacesplus.firebaseio.com',
      projectId: 'spacesplus',
      storageBucket: 'spacesplus.appspot.com',
      messagingSenderId: '855455546501',
      appId: '1:855455546501:web:89bbef7d9a9a03b3c2fdec',
    }
    const _ = {
      CK: '',
      SID: '',
      USERNAME: '',
      BANNED: null,
      ONLINE: null,
      NICKNAME: null,
      CONTENT: null,
      EVENTS: 0,
      PLAYER: 0,
      VERSION: +l.split('.').join(''),
    }
    t.DATA = _
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t._SETTINGS = t._SETSTRINGS = t._DESCSTRINGS = void 0)
    const s = n(1)
    ;(t._DESCSTRINGS = {
      blogsd: `Функция позволяет удалять сразу несколько блогов.</br></br><img src="${s.ENV_PATH}/screens/sort-blogs.png"></br>Работает только в <a href="${s.SPACES}/diary/view/?Short=0&sort=0">"Расширенном виде"</a> (нажмите на ссылку, чтобы включить этот вид - откроется страница с вашими блогами).`,
      readersd:
        '\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0443\u0434\u0430\u043B\u044F\u0442\u044C \u0441\u0440\u0430\u0437\u0443 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u0435\u0439, \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0432\u0430\u043C \u044D\u0442\u043E \u043F\u0440\u0438\u0433\u043E\u0434\u0438\u0442\u044C\u0441\u044F.',
      comments:
        '\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043B\u0435\u0437\u043D\u0430 \u0442\u0435\u043C, \u043A\u0442\u043E \u0447\u0430\u0441\u0442\u043E \u0443\u0434\u0430\u043B\u044F\u0435\u0442 \u043C\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432. \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043B\u044E\u0431\u043E\u043C \u043C\u0435\u0441\u0442\u0435, \u0433\u0434\u0435 \u0443 \u0412\u0430\u0441 \u0435\u0441\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0443\u0434\u0430\u043B\u044F\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438, \u0431\u0443\u0434\u044C \u044D\u0442\u043E \u0432\u0430\u0448 \u0431\u043B\u043E\u0433 \u0438\u043B\u0438 \u0433\u043E\u0441\u0442\u0435\u0432\u0430\u044F.',
      blockedfiles:
        '\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u0444\u0430\u0439\u043B\u044B \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0430\u043D\u0442\u0438\u0432\u0438\u0440\u0443\u0441\u043E\u043C (Spaces+ \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u043E\u0432 \u0441 \u0432\u0438\u0440\u0443\u0441\u0430\u043C\u0438!).',
      oldheader:
        '\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043C\u0435\u043D\u044F\u0435\u0442 \u043A\u043D\u043E\u043F\u043A\u0443 \u043F\u043E\u0447\u0442\u044B \u0438 \u043B\u0435\u043D\u0442\u044B \u043C\u0435\u0441\u0442\u0430\u043C\u0438, \u043A\u0430\u043A \u0431\u044B\u043B\u043E \u0440\u0430\u043D\u044C\u0448\u0435.',
      playerdn: `<img src="${s.ENV_PATH}/screens/player-download.png"></br>Добавляется кнопка в аудиоплеер, которая позволяет скачивать воспроизведенный вами трек.`,
      dredirect:
        '\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0438\u0437\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0412\u0430\u0441 \u043E\u0442 \u043D\u0430\u0437\u043E\u0439\u043B\u0438\u0432\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043F\u043E \u0432\u043D\u0435\u0448\u043D\u0435\u0439 \u0441\u0441\u044B\u043B\u043A\u0435.',
      online:
        '\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0442\u043E\u0447\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043E\u043D\u043B\u0430\u0439\u043D \u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0432 \u0430\u043D\u043A\u0435\u0442\u0430\u0445.',
      coins:
        '\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0432 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435 \u0438\u0449\u0435\u0442 \u0438 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u0431\u043E\u043D\u0443\u0441\u043D\u044B\u0435 \u043C\u043E\u043D\u0435\u0442\u044B.',
      rscroll:
        '\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u0435\u0442 \u043F\u043E\u043B\u043E\u0441\u0443 \u0430\u0432\u0442\u043E\u0441\u043A\u0440\u043E\u043B\u043B\u0430 \u043D\u0430 \u043F\u0440\u0430\u0432\u0443\u044E \u0441\u0442\u043E\u0440\u043E\u043D\u0443.',
      hrightbar:
        '\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u0430\u0432\u043E\u0435 \u043C\u0435\u043D\u044E (\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C\u0441\u044F \u043D\u0430 25% \u0448\u0438\u0440\u0435).</br></br>\u041A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0443\u0435\u0442 c \u0444\u0443\u043D\u043A\u0446\u0438\u0435\u0439 "\u0412\u0438\u0434\u0436\u0435\u0442 \u043F\u043E\u0433\u043E\u0434\u044B".',
      favorite: `<img src="${s.ENV_PATH}/screens/favorite-user.png"></br>Функция добавляет на страницу каждого пользователя кнопку "В закладки". Повторно нажав на кнопку, Вы сможете удалить пользователя из закладок.`,
      userbypass: `<img src="${s.ENV_PATH}/screens/bypass-profile.png"></br>Функция позволяет просматривать разделы у заблокированных/удаленных пользователей, даже если он у Вас в черном списке.`,
      grotate: `<img src="${s.ENV_PATH}/screens/rotate-image.png"></br>Добавляется кнопка в просмотрщик фотографий, с помощью ее можно поворачивать изображение.`,
      adblock:
        '\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043D\u0430\u0437\u043E\u0439\u043B\u0438\u0432\u0443\u044E \u0440\u0435\u043A\u043B\u0430\u043C\u0443 \u0438 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E.',
      stickyheader:
        '\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u044F\u0435\u0442 \u0448\u0430\u043F\u043A\u0443 \u0441\u0430\u0439\u0442\u0430.',
      playback: `<img src="${s.ENV_PATH}/screens/video-speed.png"></br>В видеоплеере добавляется кнопка ускорения видео, примерно как на YouTube.`,
      recents: `<img src="${s.ENV_PATH}/screens/recent-smiles.png"></br>В меню смайликов добавляется раздел с ранее использованными смайликами, для добавления в раздел, используйте смайлики/стикеры из меню смайликов.`,
      karma:
        '\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0432 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442 \u043D\u0430\u0437\u043E\u0439\u043B\u0438\u0432\u0443\u044E \u043A\u0430\u0440\u043C\u0443.',
      friendsOn: `<img src="${s.ENV_PATH}/screens/friends-online.png"></br>Функция добавляет в левое меню панель с друзьями онлайн. Для работы необходимо включить раздел <a href="${s.SPACES}/sidebar/links/?T=4">Друзья</a>, если он у вас выключен.</br></br>Панель ограничена от 1 до 15 друзей онлайн.`,
      bodystyle:
        '\u041F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0443\u043A\u0440\u0430\u0448\u0430\u0442\u044C \u0444\u043E\u043D \u0441\u0430\u0439\u0442\u0430 \u043D\u0430 \u0441\u0432\u043E\u0439 \u0432\u043A\u0443\u0441. \u0412 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0435 \u0438\u043C\u0435\u0435\u0442\u0441\u044F 20 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u0444\u043E\u043D\u0430, \u0442\u0430\u043A\u0436\u0435 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u0446\u0432\u0435\u0442\u043D\u043E\u0439 \u0444\u043E\u043D.',
      weather: `<img src="${s.ENV_PATH}/screens/weather-widget.png"></br>Отображает информацию о текущем состоянии погоды, температура, облачность, влажность, давление и ветер.</br></br>Имеется возможность изменить город, API-Ключ и интервал обновления погоды.`,
      sticker: `Функция позволяет бесплатно использовать стикеры. Работает в почте (при отправки из <a href="${s.SPACES}/mail/write/">"Новое сообщение"</a> не работает!), в комментариях, при создании блогов или тем на форуме.`,
    }),
    (t._SETSTRINGS = {
      blogsd:
          '\u041F\u0430\u043A\u0435\u0442\u043D\u043E\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0431\u043B\u043E\u0433\u043E\u0432',
      readersd:
          '\u041F\u0430\u043A\u0435\u0442\u043D\u043E\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u0435\u0439',
      comments:
          '\u041F\u0430\u043A\u0435\u0442\u043D\u043E\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432',
      blockedfiles:
          '\u0421\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B',
      oldheader:
          '\u0421\u0442\u0430\u0440\u043E\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043A\u043D\u043E\u043F\u043E\u043A \u0432 \u0448\u0430\u043F\u043A\u0435',
      playerdn:
          '\u041A\u043D\u043E\u043F\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0442\u0440\u0435\u043A\u0430 \u0438\u0437 \u043F\u043B\u0435\u0435\u0440\u0430',
      dredirect:
          '\u0412\u043D\u0435\u0448\u043D\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438 \u0431\u0435\u0437 \u0440\u0435\u0434\u0438\u0440\u0435\u043A\u0442\u0430',
      online:
          '\u0422\u043E\u0447\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043E\u043D\u043B\u0430\u0439\u043D \u0432 \u0430\u043D\u043A\u0435\u0442\u0430\u0445',
      coins:
          '\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u043D\u044B\u0435 \u043C\u043E\u043D\u0435\u0442\u044B',
      rscroll:
          '\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441\u043F\u0440\u0430\u0432\u0430',
      hrightbar:
          '\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0440\u0430\u0432\u043E\u0435 \u043C\u0435\u043D\u044E',
      favorite:
          '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438',
      userbypass:
          '\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043F\u0440\u043E\u0444\u0438\u043B\u0435\u0439',
      grotate:
          '\u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439',
      adblock:
          '\u0421\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u0443',
      stickyheader:
          '\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0448\u0430\u043F\u043A\u0443',
      playback:
          '\u041A\u043D\u043E\u043F\u043A\u0430 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u044F \u0432\u0438\u0434\u0435\u043E',
      recents:
          '\u0420\u0430\u043D\u0435\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0441\u043C\u0430\u0439\u043B\u0438\u043A\u0438',
      karma:
          '\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u043A\u0430\u0440\u043C\u0443',
      friendsOn:
          '\u041F\u0430\u043D\u0435\u043B\u044C \u0434\u0440\u0443\u0437\u0435\u0439 \u043E\u043D\u043B\u0430\u0439\u043D',
      bodystyle: '\u0424\u043E\u043D \u0441\u0430\u0439\u0442\u0430',
      weather:
          '\u0412\u0438\u0434\u0436\u0435\u0442 \u043F\u043E\u0433\u043E\u0434\u044B',
      sticker:
          '\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435 \u0441\u0442\u0438\u043A\u0435\u0440\u044B',
      }),
    (t._SETTINGS = {
      blogsd: !1,
      readersd: !1,
      comments: !1,
      blockedfiles: !0,
      oldheader: !0,
      playerdn: !0,
      dredirect: !0,
      online: !0,
      coins: !0,
      rscroll: !1,
      hrightbar: !1,
      favorite: !0,
      grotate: !0,
      angle: 0,
      userbypass: !0,
      adblock: !0,
      stickyheader: !0,
      apidebug: !1,
      karma: !0,
      sticker: !0,
      playback: !0,
      videoSpeed: 1,
      upVersion: s.DATA.VERSION,
      beta: !1,
      hideNotify: { configImport: !1 },
      recents: !0,
      recentSmiles: { show: !1, max: 60 },
      friendsOn: !0,
      friendsSet: { max: 10 },
      bodystyle: !0,
      bodystyleSet: {
        url: `${s.ENV_PATH}/backgrounds/default.png`,
        color: '#DAE1E8',
        urlchecked: !0,
        colorchecked: !1,
        },
      weather: !1,
      weatherSet: {
        interval: 3600,
        time: 0,
        city: null,
        language: 'ru',
        units: 'metric',
        key: '5f11ea40424990937175d20a072e0c72',
        }
    })
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.error = t.warn = t.info = t.log = void 0)
    const s = n(16);
      const i = new s.Debugger(console, !0, '[S+]: ');
      const d = [
        'background: steelblue',
        'background: green',
        'background: darkorange',
        'background: darkred',
      ]
    ;(t.log = (e, t) => i.log(`%c${  e}`, d[0], t)),
    (t.info = (e, t) => i.info(`%c${  e}`, d[1], t)),
    (t.warn = (e, t) => i.warn(`%c${  e}`, d[2], t)),
    (t.error = (e, t) => i.error(`%c${  e}`, d[3], t))
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.settingsRecentSmiles
        = t.settingsBackupMenu
        = t.settingsBackground
        = t.videoSpeedPlayback
        = t.settingsFeatures
        = t.settingsWeather
        = t.settingsFriends
        = t.settingsLogMenu
        = t.disableRedirect
        = t.settingsNotify
        = t.playerDownload
        = t.hiddenRightbar
        = t.deleteComments
        = t.weatherWidget
        = t.sidebarButton
        = t.galleryRotate
        = t.friendsOnline
        = t.deleteReaders
        = t.bypassProfile
        = t.stickyHeader
        = t.settingsMenu
        = t.recentSmiles
        = t.freeStickers
        = t.favoriteUser
        = t.checkUpdates
        = t.blockedFiles
        = t.betaFeatures
        = t.soundNotify
        = t.karmaAccept
        = t.firstLaunch
        = t.deleteBlogs
        = t.coinsAccept
        = t.apiDebugger
        = t.userOnline
        = t.userStatus
        = t.scrollMove
        = t.getUpdater
        = t.setStyles
        = t.oldHeader
        = t.ipWhois
        = t.adBlock
        = t.qrCode
          = void 0)
    const s = n(13)
    Object.defineProperty(t, 'qrCode', {
      enumerable: !0,
      get () {
        return s.qrCode
      }
    })
    const i = n(35)
    Object.defineProperty(t, 'adBlock', {
      enumerable: !0,
      get () {
        return i.adBlock
      }
    })
    const d = n(36)
    Object.defineProperty(t, 'oldHeader', {
      enumerable: !0,
      get () {
        return d.oldHeader
      }
    })
    const r = n(9)
    Object.defineProperty(t, 'setStyles', {
      enumerable: !0,
      get () {
        return r.setStyles
      }
    })
    const a = n(37)
    Object.defineProperty(t, 'scrollMove', {
      enumerable: !0,
      get () {
        return a.scrollMove
      }
    })
    const l = n(38)
    Object.defineProperty(t, 'userStatus', {
      enumerable: !0,
      get () {
        return l.userStatus
      }
    })
    const o = n(39)
    Object.defineProperty(t, 'userOnline', {
      enumerable: !0,
      get () {
        return o.userOnline
      }
    })
    const p = n(40)
    Object.defineProperty(t, 'apiDebugger', {
      enumerable: !0,
      get () {
        return p.apiDebugger
      }
    })
    const c = n(41)
    Object.defineProperty(t, 'coinsAccept', {
      enumerable: !0,
      get () {
        return c.coinsAccept
      }
    })
    const u = n(42)
    Object.defineProperty(t, 'deleteBlogs', {
      enumerable: !0,
      get () {
        return u.deleteBlogs
      }
    })
    const _ = n(43)
    Object.defineProperty(t, 'firstLaunch', {
      enumerable: !0,
      get () {
        return _.firstLaunch
      }
    })
    const f = n(44)
    Object.defineProperty(t, 'karmaAccept', {
      enumerable: !0,
      get () {
        return f.karmaAccept
      }
    })
    const S = n(45)
    Object.defineProperty(t, 'soundNotify', {
      enumerable: !0,
      get () {
        return S.soundNotify
      }
    })
    const h = n(46)
    Object.defineProperty(t, 'betaFeatures', {
      enumerable: !0,
      get () {
        return h.betaFeatures
      }
    })
    const g = n(47)
    Object.defineProperty(t, 'blockedFiles', {
      enumerable: !0,
      get () {
        return g.blockedFiles
      }
    })
    const m = n(48)
    Object.defineProperty(t, 'favoriteUser', {
      enumerable: !0,
      get () {
        return m.favoriteUser
      }
    })
    const y = n(49)
    Object.defineProperty(t, 'freeStickers', {
      enumerable: !0,
      get () {
        return y.freeStickers
      }
    })
    const b = n(50)
    Object.defineProperty(t, 'recentSmiles', {
      enumerable: !0,
      get () {
        return b.recentSmiles
      }
    })
    const P = n(51)
    Object.defineProperty(t, 'settingsMenu', {
      enumerable: !0,
      get () {
        return P.settingsMenu
      }
    })
    const E = n(52)
    Object.defineProperty(t, 'stickyHeader', {
      enumerable: !0,
      get () {
        return E.stickyHeader
      }
    })
    const v = n(53)
    Object.defineProperty(t, 'bypassProfile', {
      enumerable: !0,
      get () {
        return v.bypassProfile
      }
    })
    const T = n(54)
    Object.defineProperty(t, 'deleteReaders', {
      enumerable: !0,
      get () {
        return T.deleteReaders
      }
    })
    const k = n(55)
    Object.defineProperty(t, 'friendsOnline', {
      enumerable: !0,
      get () {
        return k.friendsOnline
      }
    })
    const C = n(56)
    Object.defineProperty(t, 'galleryRotate', {
      enumerable: !0,
      get () {
        return C.galleryRotate
      }
    })
    const A = n(57)
    Object.defineProperty(t, 'sidebarButton', {
      enumerable: !0,
      get () {
        return A.sidebarButton
      }
    })
    const N = n(58)
    Object.defineProperty(t, 'weatherWidget', {
      enumerable: !0,
      get () {
        return N.weatherWidget
      }
    })
    const x = n(59)
    Object.defineProperty(t, 'deleteComments', {
      enumerable: !0,
      get () {
        return x.deleteComments
      }
    })
    const I = n(60)
    Object.defineProperty(t, 'hiddenRightbar', {
      enumerable: !0,
      get () {
        return I.hiddenRightbar
      }
    })
    const L = n(61)
    Object.defineProperty(t, 'playerDownload', {
      enumerable: !0,
      get () {
        return L.playerDownload
      }
    })
    const q = n(62)
    Object.defineProperty(t, 'settingsNotify', {
      enumerable: !0,
      get () {
        return q.settingsNotify
      }
    })
    const B = n(63)
    Object.defineProperty(t, 'disableRedirect', {
      enumerable: !0,
      get () {
        return B.disableRedirect
      }
    })
    const M = n(64)
    Object.defineProperty(t, 'settingsLogMenu', {
      enumerable: !0,
      get () {
        return M.settingsLogMenu
      }
    })
    const R = n(65)
    Object.defineProperty(t, 'settingsFriends', {
      enumerable: !0,
      get () {
        return R.settingsFriends
      }
    })
    const w = n(66)
    Object.defineProperty(t, 'settingsFeatures', {
      enumerable: !0,
      get () {
        return w.settingsFeatures
      }
    })
    const O = n(67)
    Object.defineProperty(t, 'videoSpeedPlayback', {
      enumerable: !0,
      get () {
        return O.videoSpeedPlayback
      }
    })
    const U = n(68)
    Object.defineProperty(t, 'settingsBackground', {
      enumerable: !0,
      get () {
        return U.settingsBackground
      }
    })
    const G = n(69)
    Object.defineProperty(t, 'settingsBackupMenu', {
      enumerable: !0,
      get () {
        return G.settingsBackupMenu
      }
    })
    const H = n(11)
    Object.defineProperty(t, 'checkUpdates', {
      enumerable: !0,
      get () {
        return H.checkUpdates
      }
    }),
    Object.defineProperty(t, 'getUpdater', {
      enumerable: !0,
      get: function () {
        return H.getUpdater
      }
    })
    const D = n(10)
    Object.defineProperty(t, 'settingsWeather', {
      enumerable: !0,
      get () {
        return D.settingsWeather
      }
    }),
    Object.defineProperty(t, 'ipWhois', {
      enumerable: !0,
      get: function () {
        return D.ipWhois
      }
    })
    const j = n(71)
    Object.defineProperty(t, 'settingsRecentSmiles', {
      enumerable: !0,
      get () {
        return j.settingsRecentSmiles
      }
    })
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.css = void 0)
    const s = n(6)
    t.css = (e, t) => {
      let n = t.split(';')
      for (let d in n) if (s.trim(n[d]) !== '') {
          let t = s.trim(n[d]).split(':')
          ;t[0].indexOf('-') !== -1 &&
          (t[0] = t[0].replace(/-([a-z])/g, t => t.replace('-', '').toUpperCase(),
            )),
          t[1] !== void 0 && (e.style[s.trim(t[0])] = s.trim(t[1]))
        }
    }
  },
  function (e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.trim = void 0),
    (t.trim = e => e.replace(/^[\s\xA0]+|[\s\xA0]+$/g, ''))
  },
  function (e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.extend = void 0),
    (t.extend = (e, t) => {
      if (t) { for (let n in t) t.hasOwnProperty(n) && (e[n] = t[n])
}
      return e
    })
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.setCookie = void 0)
    const s = n(7);
      const i = n(1)
    t.setCookie = (e, t, n) => {
      ;(n = s.extend(
        { path: '/', expires: 365, secure: !1, domain: `.${  i.BASE_URL}` },
        n,
      )),
      n.expires
          && !(n.expires instanceof Date)
          && (n.expires = new Date(Date.now() + 86400000 * n.expires))
      let d
        = null === t
          ? `${encodeURIComponent(e)  }=`
          : `${encodeURIComponent(e)  }=${  encodeURIComponent(t)}`
      n.expires && (d += `; expires=${  n.expires.toUTCString()}`),
      n.domain && (d += `; domain=${  n.domain}`),
      n.path && (d += `; path=${  n.path}`),
      n.secure && (d += '; secure'),
      (document.cookie = d)
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.setStyles = void 0)
    const s = n(0);
      const i = n(1);
      const d = n(2)
    t.setStyles = () => {
      let e
        = s.qs('#SP_PLUS_INJSTYLE')
        || s.ce('style', { id: 'SP_PLUS_INJSTYLE', type: 'text/css' })
      if (!s.qs('#SP_STICKER_CSS')) {
        let e = s.ce('link', {
          rel: 'stylesheet',
          type: 'text/css',
          id: 'SP_STICKER_CSS',
          href: `${i.ENV_PATH}/css/sticker.css?r=${i.REVISION}`,
        })
        document.getElementsByTagName('head')[0].appendChild(e)
      }
      if (!s.qs('#SP_PLUS_MENU')) {
        let e = s.ce('link', {
          rel: 'stylesheet',
          type: 'text/css',
          id: 'SP_PLUS_MENU',
          href: `${i.ENV_PATH}/css/menu.css?r=${i.REVISION}`,
        })
        document.getElementsByTagName('head')[0].appendChild(e)
      }
      d._SETTINGS.bodystyle
        && (d._SETTINGS.bodystyleSet.url
          && d._SETTINGS.bodystyleSet.urlchecked
          && (e.innerHTML = `body,#main_wrap{background-image:url(${d._SETTINGS.bodystyleSet.url})}`),
        d._SETTINGS.bodystyleSet.color
          && d._SETTINGS.bodystyleSet.colorchecked
          && (e.innerHTML = `body,#main_wrap{background-color:${d._SETTINGS.bodystyleSet.color}}`)),
      document.getElementsByTagName('head')[0].appendChild(e)
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.ipWhois = t.getWeather = t.settingsWeather = void 0)
    const s = n(0);
      const i = n(2)
    ;(t.settingsWeather = async (n) => {
      let e, d
      i._SETTINGS.hrightbar && s.qs('#hrightbar').click(),
      null !== (e = i._SETTINGS.weatherSet.city) && void 0 !== e
        ? e
        : t.ipWhois()
      let r = s.ce('div', {
          id: 'SP_WEATHER_SETTINGS',
          class: 'sp_settings-wrap',
        });
        let a = s.ce('label', {
          html: 'API-\u041A\u043B\u044E\u0447:<div class="label__desc"><a href="https://openweathermap.org/appid" target="_blank">\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043B\u044E\u0447</a></div>',
          class: 'label'
        });
        let l = s.ce('input', {
          type: 'text',
          class: 'text-input',
          style: 'margin-bottom: 7px',
          size: '32',
          value: i._SETTINGS.weatherSet.key,
        })
      l.addEventListener('keypress', (n) => {
        n.keyCode === 13 &&
        (/^[a-f0-9]{32}$/i.test(n.target.value)
            ? (s.setSettings('weatherSet.key', n.target.value),
              t.getWeather(),
              l.classList.remove('sp-input-error'))
            : l.classList.add('sp-input-error'))
      })
      let o = s.ce('label', {
          html: '\u0413\u043E\u0440\u043E\u0434:',
          class: 'label',
        });
        let p = s.ce('input', {
          type: 'text',
          class: 'text-input',
          style: 'margin-bottom: 7px',
          size: '32',
          id: 'SP-CITY-INPUT',
          value: i._SETTINGS.weatherSet.city,
        })
      p.addEventListener('keypress', (n) => {
        n.keyCode === 13 &&
        (/^([a-zа-яё]+-?[a-zа-яё]*-?[a-zа-яё]*-?[a-zа-яё]*)$/i.test(
            n.target.value,
          )
            ? (s.setSettings('weatherSet.city', n.target.value),
              t.getWeather(),
              p.classList.remove('sp-input-error'))
            : p.classList.add('sp-input-error'))
      })
      let c = s.ce('label', {
          html: '\u0418\u043D\u0442\u0435\u0440\u0432\u0430\u043B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F:<div class="label__desc">\u043E\u0442 1 \u0434\u043E 360 \u043C\u0438\u043D\u0443\u0442</a></div>',
          class: 'label',
        });
        let u = s.ce('input', {
          type: 'text',
          class: 'text-input',
          style: 'margin-bottom: 7px',
          size: 4,
          attr: { maxlength: 3 },
          value: i._SETTINGS.weatherSet.interval / 60,
        })
      u.addEventListener('input', (t) => {
        ;/^([1-9]|[1-8][0-9]|9[0-9]|[12][0-9]{2}|3[0-5][0-9]|360)$/.test(
          t.target.value,
        )
          ? (s.setSettings('weatherSet.interval', 60 * t.target.value),
            u.classList.remove('sp-input-error'))
          : u.classList.add('sp-input-error')
      }),
      r.appendChild(o),
      r.appendChild(p),
      r.appendChild(a),
      r.appendChild(l),
      r.appendChild(c),
      r.appendChild(u),
      null === (d = n.parentElement) || void 0 === d ? void 0 : d.after(r)
    }),
    (t.getWeather = async () => {
      const {
        language: e,
        units: t,
        city: n,
        key: d,
        } = i._SETTINGS.weatherSet
      try {
        await s
          .http(
            'GET',
            `https://api.openweathermap.org/data/2.5/weather?lang=${e}&units=${t}&q=${n}&appid=${d}`,
            !1,
            )
          .then((t) => {
            var e
            const i = t.parsedBody
            return t.status === 404
              ? (s.messageBox(
                  '\u0412\u0438\u0434\u0436\u0435\u0442 \u043F\u043E\u0433\u043E\u0434\u044B',
                  `Город <b>${n}</b> не найден`,
                  !0,
                  5
                ),
                !1)
              : (i === null || void 0 === i ? void 0 : i.message)
                  ? (s.messageBox(
                      '\u0412\u0438\u0434\u0436\u0435\u0442 \u043F\u043E\u0433\u043E\u0434\u044B',
                      i.message,
                      !0,
                      5,
                    ),
                    !1)
                  : void (s.qs('#SP-CITY-INPUT')
                      && (s.qs('#SP-CITY-INPUT').value = i.name),
                  null === (e = s.qs('#SP_WIDGET_WEATHER')) || void 0 === e
                    ? void 0
                    : e.remove(),
                  200 === (i === null || void 0 === i ? void 0 : i.cod)
                      && (s.setSettings('weatherSet.city', i.name),
                      s.setCookie('SP_WEATHER', JSON.stringify(i))))
          })
      } catch (t) {
        s.error('openweathermap', t)
      }
    }),
    (t.ipWhois = async () => {
      try {
        await s
          .http(
            'GET',
            'https://ipwhois.app/json/?objects=city,success&lang=ru',
            !1,
            )
          .then((n) => {
            const e = n.parsedBody
              ;(e === null || void 0 === e ? void 0 : e.success)
              ? (s.setSettings('weatherSet.city', e.city), t.getWeather())
              : s.messageBox(
                  '\u041E\u0448\u0438\u0431\u043A\u0430 ipWhois',
                  '\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0443!',
                  !0,
                  )
          })
      } catch (t) {
        s.error('ipWhois', t)
      }
    })
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.checkUpdates = t.getUpdater = void 0)
    const s = n(0);
      const i = n(2);
      const d = n(1)
    ;(t.getUpdater = (t) => {
      try {
        s.http('GET', `${d.ENV_PATH}/updater.json?r=${d.REVISION}`, !1).then(
          (n) => {
            const e = n.parsedBody
            if (
              (s.info(
                '\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439',
                n,
              ),
              n.status === 200 &&
              (e === null || void 0 === e ? void 0 : e.history))            ) return t(e)
          },
        )
      } catch (t) {
        s.error('getUpdater.ts', t)
      }
    }),
    (t.checkUpdates = () => {
      try {
        t.getUpdater((e) => {
          let t = 0
          if (
            (i._SETTINGS.upVersion && (t = i._SETTINGS.upVersion),
            (d.DATA.VERSION = Math.max(t, d.DATA.VERSION)),
            e.history[0].build > d.DATA.VERSION
                && (s.messageBox(
                  `Доступна новая версия Spaces+ ${s.rever(e.history[0].build)}`,
                  `<div class="pad_t_a"></div>${e.history[0].changes}<div id="SP_UPDATER_BUTTONS" class="pad_t_a"><a class="btn btn_green btn_input" href="${d.ENV_PATH}/spaces-plus.user.js?r=${d.REVISION}" onclick="document.body.removeChild(this.parentNode.parentNode.parentNode.parentNode)">Обновить</a></div>`,
                  !0,
                ),
                s.qs('#SP_PLUS_ALERT')))            ) {
            const t = s.ce('a', {
              href: '#',
              class: 'btn btn_white btn_input right sticker-close_btn',
              html: '\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C',
              onclick: () => (
                s.setSettings('upVersion', e.history[0].build),
                s.qs('#SP_PLUS_ALERT').remove(),
                !1
              )
            })
            s.qs('#SP_UPDATER_BUTTONS').appendChild(t)
          }
        })
      } catch (t) {
        s.error('checkUpdates.ts', t)
      }
    })
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    const s = n(4);
      const i = n(1);
      const d = n(0);
      const r = n(2)
    ;(() => {
      d.readSettings(),
      s.setStyles(),
      s.oldHeader(r._SETTINGS.oldheader),
      s.stickyHeader(r._SETTINGS.stickyheader),
      4 === i.DEVICE.id,
      setInterval(() => {
        s.settingsMenu(), s.qrCode()
      }, 200)
    })()
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.qrCode = void 0)
    const s = n(0);
      const i = n(1)
    t.qrCode = () => {
      try {
        let e = s.qs('#more_menu > div > div')
        if (s.getPath(1) === 'mysite' && e && !s.qs('#SP_QR_BUTTON')) {
          let t = s.ce('a', {
            class: 'stnd-link',
            id: 'SP_QR_BUTTON',
            html: `
                    <span class="sp sp-qrcode"></span>
                    <span class="t js-text">Получить QR-код</span>
                `,
            onclick: () => {
              s.messageBox(
                '\u0421\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 QR-\u043A\u043E\u0434 c \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430',
                `
                            <div id="SP_QR_CODE">
                                <img src="${i.HTTP}//spac.me/i/preloader.gif" class="sp_img-center" id="SP_QR_LOADER">
                            </div>
                        `,
                !0,
              )
              let e = d(
                  `https://chart.googleapis.com/chart?cht=qr&chs=256x256&chl=${i.DATA.SID}`,
                ),
                t = s.qs('#SP_QR_LOADER'),
                n = s.qs('#SP_QR_CODE')
              return (
                e.then((i) => {
                  t.remove(),
                  n.appendChild(i),
                  n.appendChild(
                    s.ce('ol', {
                      html: `
                                <li>Запустите <b>OpenSpaces</b> на телефоне</li>
                                <li>На странице авторизации нажмите «<b>Login by QR code</b>»</li>
                                <li>Сканируйте этот код для авторизации</li>
                            `,
                      })
                  )
                }),
                !1
              )
            },
          })
          e.appendChild(t)
        }
      } catch (t) {
        s.error('qrCode.ts', t)
      }
    }
    const d = e => new Promise((t, n) => {
        const s = new Image()
        ;(s.src = e),
        (s.className = 'sp_img-center'),
        (s.onload = () => t(s)),
        (s.onerror = () => n(new Error('loading error')))
      })
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.ce = void 0)
    const s = n(5)
    t.ce = (e, t) => {
      let n = document.createElement(e)
      for (let d in t) switch (d) {
          case 'html':
            n.innerHTML = t[d]
            break
          case 'style':
            s.css(n, t[d])
            break
          case 'class':
            n.className = t[d]
            break
          case 'attr':
            for (let e in t[d]) n.setAttribute(e, t[d][e])
            break
          default:
            n[d] = t[d]
        }
      return n
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.http = void 0)
    const s = n(3)
    t.http = async function (e, t, n, i) {
      const d = n
          ? { 'X-Proxy': 'spaces' }
          : { 'Content-Type': 'application/x-www-form-urlencoded' };
        const r = await fetch(t, { method: e, headers: d, body: i })
      try {
        r.parsedBody = await r.json()
      } catch (t) {
        s.error('http.ts', t)
      }
      return r
    }
  },
  function (e, t, n) {
    'use strict'
    n.r(t),
    n.d(t, 'Debugger', () => {
      return s
    })
    var s = (function () {
      function e(e, t, n) {
        void 0 === t && (t = !0),
        void 0 === n && (n = ''),
        (this.prefix = ''),
        (this.console = e),
        (this.isEnabled = t),
        (this.prefix = n)
      }
      return (
        Object.defineProperty(e.prototype, 'memory', {
          get () {
            return this.doIfEnabled(function () {
              return console.hasOwnProperty('memory') && console.memory
            })
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.assert = function (e, t) {
          for (var n = this, s = [], i = 2; i < arguments.length; i++) s[i - 2] = arguments[i]
          return this.doIfEnabled(() => {
            let i
            return (i = n.console).assert.apply(i, [e, t].concat(s))
          })
        }),
        (e.prototype.countReset = function (e) {
          let t = this
          return this.doIfEnabled(() => {
            return t.console.countReset(e)
          })
        }),
        (e.prototype.dir = function (e) {
          for (var t = this, n = [], s = 1; s < arguments.length; s++) n[s - 1] = arguments[s]
          return this.doIfEnabled(() => {
            let s
            return (s = t.console).dir.apply(s, [e].concat(n))
          })
        }),
        (e.prototype.error = function (e) {
          for (var t = this, n = [], s = 1; s < arguments.length; s++) n[s - 1] = arguments[s]
          return this.doIfEnabled(() => {
            let s
            return (s = t.console).error.apply(s, [t.addPrefix(e)].concat(n))
          })
        }),
        (e.prototype.info = function (e) {
          for (var t = this, n = [], s = 1; s < arguments.length; s++) n[s - 1] = arguments[s]
          return this.doIfEnabled(() => {
            let s
            return (s = t.console).info.apply(s, [t.addPrefix(e)].concat(n))
          })
        }),
        (e.prototype.log = function (e) {
          for (var t = this, n = [], s = 1; s < arguments.length; s++) n[s - 1] = arguments[s]
          return this.doIfEnabled(() => {
            let s
            return (s = t.console).log.apply(s, [t.addPrefix(e)].concat(n))
          })
        }),
        (e.prototype.time = function (e) {
          let t = this
          return this.doIfEnabled(() => {
            return t.console.time(e)
          })
        }),
        (e.prototype.timeEnd = function (e) {
          let t = this
          return this.doIfEnabled(() => {
            return t.console.timeEnd(e)
          })
        }),
        (e.prototype.timeLog = function (e) {
          for (var t = this, n = [], s = 1; s < arguments.length; s++) n[s - 1] = arguments[s]
          return this.doIfEnabled(() => {
            return t.console.timeLog(e, n)
          })
        }),
        (e.prototype.timeStamp = function (e) {
          let t = this
          return this.doIfEnabled(() => {
            return t.console.timeStamp(e)
          })
        }),
        (e.prototype.timeline = function (e) {
          let t = this
          return this.doIfEnabled(() => {
            return t.console.timeline(e)
          })
        }),
        (e.prototype.timelineEnd = function (e) {
          let t = this
          return this.doIfEnabled(() => {
            return t.console.timelineEnd(e)
          })
        }),
        (e.prototype.trace = function (e) {
          for (var t = this, n = [], s = 1; s < arguments.length; s++) n[s - 1] = arguments[s]
          return this.doIfEnabled(() => {
            let s
            return (s = t.console).trace.apply(s, [t.addPrefix(e)].concat(n))
          })
        }),
        (e.prototype.warn = function (e) {
          for (var t = this, n = [], s = 1; s < arguments.length; s++) n[s - 1] = arguments[s]
          return this.doIfEnabled(() => {
            let s
            return (s = t.console).warn.apply(s, [t.addPrefix(e)].concat(n))
          })
        }),
        (e.prototype.clear = function () {
          let e = this
          return this.doIfEnabled(() => {
            return e.console.clear()
          })
        }),
        (e.prototype.count = function () {
          let e = this
          return this.doIfEnabled(() => {
            return e.console.count()
          })
        }),
        (e.prototype.debug = function (e) {
          for (var t = this, n = [], s = 1; s < arguments.length; s++) n[s - 1] = arguments[s]
          return this.doIfEnabled(() => {
            let s
            return (s = t.console).debug.apply(s, [t.addPrefix(e)].concat(n))
          })
        }),
        (e.prototype.dirxml = function (e) {
          let t = this
          return this.doIfEnabled(() => {
            return t.console.dirxml(e)
          })
        }),
        (e.prototype.exception = function (e) {
          for (var t = this, n = [], s = 1; s < arguments.length; s++) n[s - 1] = arguments[s]
          return this.doIfEnabled(() => {
            let s
            return (s = t.console).exception.apply(
              s,
              [t.addPrefix(e)].concat(n),
            )
          })
        }),
        (e.prototype.group = function (e) {
          let t = this
          return this.doIfEnabled(() => {
            return t.console.group(e)
          })
        }),
        (e.prototype.groupCollapsed = function (e) {
          let t = this
          return this.doIfEnabled(() => {
            return t.console.groupCollapsed(e)
          })
        }),
        (e.prototype.groupEnd = function () {
          let e = this
          return this.doIfEnabled(() => {
            return e.console.groupEnd()
          })
        }),
        (e.prototype.markTimeline = function (e) {
          let t = this
          return this.doIfEnabled(() => {
            return t.console.markTimeline(e)
          })
        }),
        (e.prototype.profile = function (e) {
          let t = this
          return this.doIfEnabled(() => {
            return t.console.profile(e)
          })
        }),
        (e.prototype.profileEnd = function () {
          let e = this
          return this.doIfEnabled(() => {
            return e.console.profileEnd()
          })
        }),
        (e.prototype.table = function () {
          for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
          return this.doIfEnabled(() => {
            let n
            return (n = e.console).table.apply(n, t)
          })
        }),
        (e.prototype.throw = function (e) {
          if (((e.message = this.addPrefix(e.message)), this.isEnabled)) throw e
          setTimeout(() => {
            throw e
          })
        }),
        (e.prototype.doIfEnabled = function (e) {
          if (this.isEnabled) return e()
        }),
        (e.prototype.addPrefix = function (e) {
          return this.prefix && (typeof e == 'string' || !e)
            ? this.prefix + e
            : e
        }),
        e
      )
    })()
  },
  function (e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.qsa = t.qs = void 0),
    (t.qs = t => document.querySelector(t)),
    (t.qsa = t => document.querySelectorAll(t))
  },
  function (e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.rever = void 0),
    (t.rever = e => (e ? e.toString().split('').join('.') : e))
  },
  function (e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.getPath = void 0),
    (t.getPath = (e) => {
      let t = document.location.pathname;
          let n = t.replace(/\/\s*$/, '').split('/')
      return e ? n[e] : t
    })
  },
  function (e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.toUpper = void 0),
    (t.toUpper = e => e[0].toUpperCase() + e.substring(1))
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.getQuery = void 0)
    const s = n(3)
    t.getQuery = (e) => {
      let t;
        let n = document.location.search
      try {
        return (
          (e = e.toLowerCase()),
          n.toLowerCase().indexOf(e) !== -1 &&
          n
              .substring(1)
              .split('&')
              .forEach((n) => {
                let s = n.split('=')
                s[0].toLowerCase() === e && (t = s[1])
              }),
          t
        )
      } catch (t) {
        s.error('getQuery.ts', t)
      }
    }
  },
  function (e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.declOfNum = void 0),
    (t.declOfNum = (e, t) => {
      return t[e % 100 > 4 && e % 100 < 20 ? 2
: [
        2,
        0,
        1,
        1,
        1,
        2
      ][e % 10 < 5 ? e % 10 : 5]]
    })
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.delCookie = void 0)
    const s = n(8)
    t.delCookie = e => s.setCookie(e, null, { expires: -1 })
  },
  function (e) {
    e.exports = JSON.parse(
      '{"name":"spaces-plus","description":"\uD83D\uDE80 Powerful userscript for Spaces.ru","homepage":"https://spaces-dev.github.io/SpacesPlus","version":"3.1.2","author":{"name":"Vitalij Ryndin","email":"sys@crashmax.ru","url":"https://crashmax.ru"},"scripts":{"dev":"cross-env NODE_ENV=development webpack-dev-server --config-name main --host localhost --watch-poll","build":"cross-env NODE_ENV=production webpack --progress"},"devDependencies":{"@types/node":"^14.11.8","@types/resize-observer-browser":"^0.1.4","@types/webpack":"^4.41.22","@types/webpack-dev-server":"^3.11.0","clean-webpack-plugin":"^3.0.0","copy-webpack-plugin":"^6.2.1","cross-env":"^7.0.2","json-beautify":"^1.1.1","optimize-css-assets-webpack-plugin":"^5.0.4","ts-debug":"^1.3.0","ts-loader":"^8.0.4","ts-node":"^9.0.0","typescript":"^4.0.2","webpack":"^4.44.2","webpack-cli":"^3.3.12","webpack-dev-server":"^3.11.0","webpack-userscript":"^2.5.6","webpack-zip-files-plugin":"^1.0.0"}}',
    )
  },
  function (e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.getCookie = void 0),
    (t.getCookie = (e) => {
      let t = document.cookie.match(
        new RegExp(
          `(?:^|; )${e.replace(/([.$?*|{}(\)[\]\\/\+^])/g, '\\$1')}=([^;]*)`,
          )
      )
      return t ? decodeURIComponent(t[1]) : void 0
    })
  },
  function (e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.getParams = void 0),
    (t.getParams = (e) => {
      const t = {}
      let n = document.createElement('a')
      n.href = e
      let s = n.search.substring(1);
          let d = s.split('&')
      for (let n, s = 0; s < d.length; s++) (n = d[s].split('=')), (t[n[0]] = decodeURIComponent(n[1]))
      return t
    })
  },
  function (e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.playSound = void 0),
    (t.playSound = (e, t) => {
      let n = new Audio(e)
        ;(n.volume = t / 100), n.play()
    })
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.confirmBox = void 0)
    const s = n(0)
    t.confirmBox = (e, t, n) => {
      let d = s.qs('#SP_PLUS_ALERT');
        let r = s.qs('#SP_PLUS_CONFIRM');
        let a = s.ce('button', {
          html: '\u0414\u0430',
          href: '#',
          class: 'btn btn_red btn_input'
        });
        let l = s.ce('a', {
          html: '\u041E\u0442\u043C\u0435\u043D\u0430',
          href: '#',
          class: 'btn btn_white btn_input right sticker-close_btn'
        });
        let o = s.ce('small', {
          class: 'pad_t_a grey',
          html: '\u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.'
        });
        let p = s.ce('div', {
          class: 'content-item3 wbg oh',
          html: e + '<div class="pad_t_a"></div>'
        });
        let c = s.ce('div', { class: 'pad_t_a' })
      d === null || void 0 === d ? void 0 : d.remove(),
      null === r || void 0 === r ? void 0 : r.remove(),
      (a.onclick = () => (i(), n(), !1)),
      (l.onclick = () => (i(), !1))
      let u = s.ce('div', {
        id: 'SP_PLUS_CONFIRM',
        class: 'sticker sp-sticker-anim',
      })
      t && p.appendChild(o),
      p.appendChild(c),
      p.appendChild(a),
      p.appendChild(l),
      u.appendChild(p),
      document.body.appendChild(u)
    }
    const i = () => s.qs('#SP_PLUS_CONFIRM').remove()
  },
  function (e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.isValidUrl = void 0),
    (t.isValidUrl = (e) => {
      let t = e.match(
        /(http(s)?:\/\/.)?(www\.)?[-\w@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-\w@:%\+.~#?&/\/=]*)/g
      )
      return t !== null
    })
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.messageBox = void 0)
    const s = n(0)
    t.messageBox = (e, t, n, i) => {
      let d = s.qs('#SP_PLUS_ALERT');
        let r = s.qs('#SP_PLUS_CONFIRM');
        let a = s.ce('div', {
          class: 'sticker w400 sp-sticker-anim',
          id: 'SP_PLUS_ALERT',
        })
      d === null || void 0 === d ? void 0 : d.remove(),
      null === r || void 0 === r ? void 0 : r.remove()
      let l = s.ce('div', {
        class: 'content-item3 wbg oh',
        html:
          `${n
            ? '<span class="sp sp-remove-grey pointer right notif_close close_h" onclick="document.body.removeChild(this.parentNode.parentNode)" title="\u0417\u0430\u043A\u0440\u044B\u0442\u044C"></span>'
            : '' 
          }${e}<div class="pad_t_a"></div><span style="font-size: 13px" class="grey">${t}</span>`
      })
      a.appendChild(l),
      document.body.appendChild(a),
      i !== void 0
          && setTimeout(() => {
            let e, t
            (t =
                null === (e = l.parentNode) || void 0 === e
                  ? void 0
                  : e.parentNode) ===
              null || void 0 === t
              ? void 0
              : t.removeChild(a)
          }, 1e3 * i)
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.historyPush = void 0)
    const s = n(3)
    t.historyPush = (e, t, n) => {
      try {
        ;(document.title = n), history.pushState(e, n, t)
      } catch (t) {
        s.error('historyPush.ts', t)
      }
    }
  },
  function (e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.modifyObject = void 0),
    (t.modifyObject = (e, t, n, s) => {
      let d = {};
          let r = 0
      for (let i in e) e.hasOwnProperty(i)
            && (r === s && t && n && (d[t] = n), (d[i] = e[i]), r++)
      return !s && t && n && (d[t] = n), d
    })
  },
  function (e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.notification = void 0),
    (t.notification = (e, t, n) => {
      const s = new Notification(e, {
        body: t,
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWRSURBVHgB7VpdTBxVFP5mFujCDgos7GKM2pTSQtcirYEYS5smlb5Io/hgDMEaH0wfjEkbNfFNfWxiY3zQqA9GafWBJmKMbQKUSAvYCIa6CKz8BvCh+9eFdn9oKex478zOsuzuzNzZJSGb9EsmLNxzyfm+e849955ZDgQ1NS0fcxzOiiJKkAMgvq4A4vcu15Vz3P79pz7nOPEschOfcrW1Lcu5onwyiN8rfK46T0FCqYRHjuMRgZ1GHrKCmPQ7p2lL8o3GrY6dMWRMQBSj0rNJgiPO8bGf8u+JtjIBhQQXs+OQLZmMCCjOP9b8Ckpb30Q0EkJwoBvBwV5s3PFBjkxeIkIdprZHD7Xh4N6TeLAWwvBEF8Zmesi4SSKdDRGOVGHR2BQR0egGhCMnUPHOBymjwYEeLHddxDohQh2jqtdVn8CpYx9usVsJejBwq4MQuRYjkRkRwwSomtHoOp660IH8cruqHSUS6OrAQ58b771xCSXFlWntKJGxmW6JyL2wN7YqCgl9MgYJyOpbiPq2NOqnQ73rRzSsNiMUsmnaUSLTi0MYmezC3ZBPIpIun5JhKi/f9wlY3ZeSMApr2xnkV1QyzTn//NdoOHgZQrEPy4HdWFuzpLUz7xLwpK0WjY7X8Lhgg9s/I+WL4jxdFY7LioC8i5hrHChrPc00o848gdaSq9LnsrIFHHBcReUTk2Q1KhDWWBG7tQqNzypEZhOIcAnhZZCAon7pq+3Y9UwVyxS8b/sK9nzflr8Jgg97q/vJSgjw+6o158tEWqXw8gTmU5ynYK7ElEBeuQ3FR08y2dvzvKgrnFAdrz/UiYKCMFjQ/MKZ2NadOsZEQC5ERP3WdrCiveyy5jir8xTmAkHxJCUPGAmIMFmJ+k3s6jcX92vauG87VBM6Gc7pntgnLmUVdAmI0gwRQtNLYIWe+hRzs8fBirGZ3tgulFEOyMlrKPbNE5o2dBeaZSTgvjOHJfdY7JyVCh0CsvNCUzOpumz7fl3hZMrOkwznrdfBiuHxrqTqvBWaBOJbp5HkLe3UHDei/krQjX9mezWrsQYB4+rTxNVT3zXRAlbcGL0UCx11N1VHFPWLCQFW6KlPsbTUABZsqs+phg+FCgHl2FCHwtrnwAKauHrqz84cl0KIBVOLN3XVh9poRuozbJ3Ov40mb/oDXCJUCeSVV2zbsYHCiPq0cAUjXigHOC2kISAXLnpVZAWL+q7Jl8GKG6MXIV9J9ctUioUcPiIsh18ECyx8mOnYECB3ARY4p7vJzczHFD4UaSlud+vD2LHhWnznERnuiikE5C2Lx/IvHWBBOGrBzbD61pj5sYFNwDQXGnnig7l/yYXcg4Kn98BkETT/yfXQEWmaPc8HwRTZMjby59vM4fP7X9/Bu7wAns+KAOKFY21pHnd7fsZDvz6RsVUHWYlGzK/tRlXBgkSEqj80+C5YQAvXbwMXiPMmpuSN+6rdlRBjNyE5semRmtYGluJGE/uAKwTvPNvR4dfrn2F8rk8iYCT/GNsqYry40YdWaHo31iOycK4NjrJ6HDt8WrUvREHV/7LzrZj6JhgB46Wei+8M9Fn3+6Q24r3BbpiKhLSXfNrYCg/1wRtYwAhpJdKLud26R2qfJIO2Gv/zjCd057adQCIRfnObi0QQHv2DkOkBX2SJE1l1ORH46VvgfiTe//SSrgJ11EN2GqGoNL4ii7ed6Bv+Bhuk22dUfckj473RRIjx/KCf+aIi8ghkhTzxfudmPG/a0jCkLRM64gnMpbFlR5bvB5Swktvm4up9bJBHUV3dloOPbJcUctJm/p4lSwIK9HuYibY8z8VfdohZrD/FjrxiUpzO1nmKRy/5dhq5T0D+4kRuQvmqwRfIWUR/MPn90/1W675ScoKtIX8xIwcQi5rzU1NXPvof3uh4/Jx+XhEAAAAASUVORK5CYII=',
        tag: 'events',
        })
      n
        ? setTimeout(() => s.close(), 1e3 * n)
        : s.addEventListener('click', t => console.log(t))
    })
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.setSettings = t.readSettings = void 0)
    const s = n(0);
      const d = n(2)
    ;(t.readSettings = () => {
      let e = s.getCookie('SP_PLUS_SET')
      try {
        e && ((e = JSON.parse(e)), (d._SETTINGS = s.extend(d._SETTINGS, e)))
      } catch (t) {
        s.error('readSettings', t)
      }
    }),
    (t.setSettings = (e, t) => {
      try {
        if (e.indexOf('.') !== -1) {
          let n = e.split('.')
          d._SETTINGS[n[0]][n[1]] = t
        } else { d._SETTINGS[e] = t
}
        s.setCookie('SP_PLUS_SET', JSON.stringify(d._SETTINGS))
      } catch (t) {
        s.error('setSettings', t)
      }
    })
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.adBlock = void 0)
    const s = n(0)
    t.adBlock = () => {
      try {
        if (
          (s.qsa('img[src$="static/i/close3.png"]').forEach((t) => {
            let e, n
            return (n =
                null === (e = t.parentElement) || void 0 === e
                  ? void 0
                  : e.parentElement) ===
              null || void 0 === n
              ? void 0
              : n.remove()
          }),
          s
            .qsa('a[title="\u0420\u0435\u043A\u043B\u0430\u043C\u0430"')
            .forEach((t) => {
              let e
              return (e = t.parentElement) === null || void 0 === e
                ? void 0
                : e.remove()
            }),
          s.qsa('#vk_groups').forEach((t) => {
            let e
            return (e = t.parentElement) === null || void 0 === e
              ? void 0
              : e.remove()
          }),
          !s.qs('#SP_PLUS_ADBLOCK'))        ) {
          let e = s.ce('script', {
            type: 'text/javascript',
            id: 'SP_PLUS_ADBLOCK',
            html: 'var rawOpen = XMLHttpRequest.prototype.open; XMLHttpRequest.prototype.open = function() { if (!this._hooked) { this._hooked = true; setupHook(this); }; rawOpen.apply(this, arguments); }; function setupHook(xhr) { function getter() { delete xhr.responseText; var ret = xhr.responseText; var json = JSON.parse(ret); json.reklama = ""; json.rightbar_reklama = ""; json.rightbar_app = ""; json.sidebar_reklama = ""; ret = JSON.stringify(json); setup(); return ret; }; function setup() { Object.defineProperty(xhr, "responseText", { get: getter, configurable: true }); } setup(); };',
          })
          document.getElementsByTagName('head')[0].appendChild(e)
        }
      } catch (t) {
        s.error('adBlock.ts', t)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.oldHeader = void 0)
    const s = n(0)
    t.oldHeader = (e) => {
      s.qsa('span.horiz-menu__link-text').forEach(t => t.remove())
      let t = s.qsa('a.horiz-menu__link');
        let n = t[2].cloneNode(!0);
        let i = t[4].cloneNode(!0)
      ;(e || t[2].pathname === '/mail/')
        && (t[4].replaceWith(n), t[2].replaceWith(i))
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.scrollMove = void 0)
    const s = n(0);
      const i = n(2)
    t.scrollMove = (e) => {
      let t = s.qs('#scroll_page')
      try {
        e && !t.hasAttribute('sp-replace')
          ? ((t.style.left = 'auto'),
            (t.style.right = '0'),
            t.setAttribute('sp-replace', '1'))
          : !i._SETTINGS.rscroll
            && t.hasAttribute('sp-replace')
            && ((t.style.left = '0'),
            (t.style.right = 'auto'),
            t.removeAttribute('sp-replace'))
      } catch (t) {
        s.error('scrollMove.ts', t)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.userStatus = void 0)
    const s = n(0);
      const i = n(1)
    t.userStatus = (e) => {
      let t = s.ce('div', {
        html: '\u0414\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B <b>Spaces+</b> \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F!',
      })
      if (i.DEVICE.id === 1 || i.DEVICE.id === 2) {
        let n = s.ce('div', {
          class: 'oh busi',
          style: 'border: 1px solid #ff9a95; background: #fdf3ef',
          html: '\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0441\u0430\u0439\u0442\u0430 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B <b>Spaces+</b>',
        })
        return e === '01001' && n.prepend(t), s.qs('#main_wrap').prepend(n), !1
      }
      if ((i.DEVICE.id === 3 || i.DEVICE.id === 4) && e === '01001') {
        let e = s.ce('div', {
          class: 'oh nl system-message',
          style: 'border: 1px solid #ff9a95; background: #fdf3ef',
        })
        return e.prepend(t), s.qs('#top_info_block').prepend(e), !1
      }
      return !0
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.userOnline = void 0)
    const s = n(0);
      const i = n(1)
    t.userOnline = () => {
      let e = s.getPath();
        let t = s.getPath(3);
        let n = `/anketa/index/${t}/`
      if ((e !== n && (i.DATA.ONLINE = null), e === n && i.DATA.ONLINE !== t)) try {
          let n = Array.from(s.qsa('div.info-item__title')).filter(
            t => '\u0412\u0440\u0435\u043C\u044F \u043E\u043D\u043B\u0430\u0439\u043D:'
              === t.textContent,
          )
          t
            && n
            && ((i.DATA.ONLINE = t),
            s.http('GET', `${i.SPACES}/anketa/index/${t}/`, !0).then((t) => {
              let e, i
              const d
                = null
                  === (i
                    = null === (e = t.parsedBody) || void 0 === e
                      ? void 0
                      : e.user_widget) || void 0 === i
                  ? void 0
                  : i.online_time
              if (d) {
                let e = (d / 3600).toFixed(2).split('.');
                  let i
                    = 0 < e[0]
                      ? `${e[0]} ч, ${Math.trunc(e[1] / (100 / 60))} мин`
                      : `${Math.trunc(e[1] / (100 / 60))} мин`
                ;(n[0].nextElementSibling.textContent = i),
                s.info(`Время онлайн: ${i}`, t)
              }
            }))
        } catch (t) {
          s.error('userOnline.ts', t)
        }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.apiDebugger = void 0)
    const s = n(0)
    t.apiDebugger = (e) => {
      if (e && !s.qs('#spaces_api_debugger')) {
        let e = s.ce('script', {
          type: 'text/javascript',
          html: 'var Arr=[\'<div class="widgets-group widgets-group_top js-container__block" id="spaces_api_debugger"><div class="content"><a href="#" class="stnd-link list-link-blue c-blue" id="api_debug-button"><div class="text-gray"><span class="sp"></span><span class="t darkblue c-darkblue b js-text" style="margin-left: 5px">API Debugger</span></div></a><div id="api_debug-place"></div></div></div>\',"append","parent","#location_header","debugger"];$(Arr[3])[Arr[2]]()[Arr[1]](Arr[0]),require(Arr[4]);void(0);',
        })
        document.getElementsByTagName('head')[0].appendChild(e)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.coinsAccept = void 0)
    const s = n(0);
      const i = n(1)
    t.coinsAccept = () => {
      try {
        s.qsa(`a[href^="${i.SPACES}/services/gift_get/"`).forEach((t) => {
          let e
          t.click(),
          null === (e = t.parentElement) || void 0 === e
            ? void 0
            : e.remove(),
          s.info(
            '\u0421\u043E\u0431\u0440\u0430\u043B\u0438 \u043C\u043E\u043D\u0435\u0442\u043A\u0443',
            t
          )
        })
      } catch (t) {
        s.error('coinsAccept.ts', t)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.deleteBlogs = void 0)
    const s = n(0);
      const i = n(1)
    t.deleteBlogs = () => {
      let e, t
      let n = s.getPath().split('/');
        let r = s.qs('#SP_PLUS_BUTTONS_B');
        let a = s.qsa(`a[href^="${i.SPACES}/diary/editaccess/"`)
      try {
        if (
          (n[2] !== 'view' && r && r.remove(),
          n[1] === 'diary' &&
          'view' === n[2]
            && a
            && !s.qs('input[id^="SP_DB_"'))        ) {
          let n = []
          for (let i of a) {
            let d = `SP_DB_${s.getParams(i.href).id}`;
              let r = s.ce('input', {
                class: 'sp-cbfb sp-checkbox-square',
                type: 'checkbox',
                id: d,
              })
            (e = i.parentElement) === null || void 0 === e
              ? void 0
              : e.appendChild(r),
            null === (t = i.parentElement) || void 0 === t
              ? void 0
              : t.appendChild(
                  s.ce('label', {
                    class: 'sp-ch-blogs',
                    style: 'margin: 2px',
                    attr: { for: d },
                    })
                ),
            n.push(r)
          }
          let r = s.ce('div', {
            class: 'widgets-group user__tools_last',
            id: 'SP_PLUS_BUTTONS_B',
          })
          const l = s.ce('button', {
              class: 'user__tools-link table__cell sp_btn-list',
              html: `
                    <span class="sp sp-ok-blue"></span>
                    <span class="sp-ch-text">Выбрать все</span>
                `,
              onclick: (t) => {
                if (t.target instanceof Element) {
                  let e
                    = 'SPAN' === t.target.nodeName
                      ? t.target.parentNode
                      : t.target
                  for (let t of n) t.checked
                      = -1
                      !== e.innerHTML.indexOf(
                        '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435',
                      )
                  e.innerHTML = `
                            <span class="sp sp-ok-blue"></span>
                                <span class="sp-ch-text">
                                ${e.innerHTML.indexOf('\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435') === -1 ? '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435' : '\u0421\u043D\u044F\u0442\u044C \u043E\u0442\u043C\u0435\u0442\u043A\u0438'}
                            </span>
                        `
                }
              },
            });
            const o = s.ce('button', {
              class: 'user__tools-link table__cell sp_btn_line sp_btn-list',
              html: `
                    <span class="sp sp-remove-red"></span>
                    <span class="sp-del-text">Удалить выбранные</span>
                `,
              onclick: () => {
                let e = []
                for (let t of n) t.checked && e.push(/^SP_DB_(\d+)$/i.exec(t.id)[1])
                let t = e.length
                return (
                  t > 0
                    ? s.confirmBox(
                        `Вы действительно хотите удалить ${t} ${d(t)}?`,
                        !0,
                        async () => {
                          let n = t
                          for (let r of e) s.messageBox(
                              `Осталось удалить ${t--} из ${n} ${d(t)}`,
                              '\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u043D\u0435\u043C\u043D\u043E\u0433\u043E... <span style="padding-right: 10px" class="ico ico_spinner"></span>',
                              !1,
                            ),
                            await s
                              .http(
                                'GET',
                                `${i.SPACES}/diary/delete/?CK=${i.DATA.CK}&id=${r}&Sure=1`,
                                !0,
                                )
                              .then((t) => {
                                s.info(
                                  '\u0423\u0434\u0430\u043B\u0438\u043B\u0438 \u0431\u043B\u043E\u0433',
                                  t
                                )
                              })
                          document.location.reload()
                        },
                      )
                    : s.messageBox(
                        '\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!',
                        '\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0433\u0430\u043B\u043E\u0447\u043A\u043E\u0439, \u0442\u0435 \u0431\u043B\u043E\u0433\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437',
                        !0,
                        5,
                      ),
                  !1
                )
              },
            })
          r.appendChild(o),
          r.appendChild(l),
          s.qs('input[id^="SP_DB_"') && s.qs('#main').after(r)
        }
      } catch (t) {
        s.error('deleteBlogs.ts', t)
      }
    }
    const d = e => '\u0431\u043B\u043E\u0433'
      + s.declOfNum(e, [
        '',
        '\u0430',
        '\u043E\u0432',
      ])
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.firstLaunch = void 0)
    const s = n(0);
      const i = n(1)
    t.firstLaunch = () => {
      try {
        if (
          void 0 === s.getCookie('SP_LAUNCH')
          && 'spaces-blogs.com' !== i.BASE_URL
          && 'spac1.net' !== i.BASE_URL
        ) {
          if (
            (s.messageBox(
              '\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443 Spaces+',
              `
                <b style="color: #f86934">ВНИМАНИЕ!</b></br></br>
                Во избежания подделок, которые могут воровать пароли пользователей, скрипт скачивать только с официального <a href="https://spaces-dev.github.io" target="_blank">сайта</a></br></br>
                С вопросами по использованию скрипта, писать в сообщество <a href="${i.SPACES}/soo/extension/" target="_blank">Spaces+</a></br></br>
                <div id="SP_LAUNCH_BUTTON" class="pad_t_a"></div>
                `,
              !0,
            ),
            s.qs('#SP_LAUNCH_BUTTON'))          ) {
            const e = s.ce('a', {
              href: `${i.SPACES}/demo/?sp_plus_settings=1`,
              class: 'btn btn_white btn_input right sticker-close_btn',
              html: '\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u043C',
              onclick: () => s.qs('#SP_PLUS_ALERT').remove(),
            })
            s.qs('#SP_LAUNCH_BUTTON').appendChild(e)
          }
          s.setCookie('SP_LAUNCH', '1')
        }
      } catch (t) {
        s.error('firstLaunch.ts', t)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.karmaAccept = void 0)
    const s = n(0);
      const i = n(1)
    t.karmaAccept = () => {
      try {
        s.qsa(
          `a[href^="${i.SPACES}/mysite/rate_n_karma/karma/?Accept="`,
        ).forEach((t) => {
          let e
          t.click(),
          null === (e = t.parentElement) || void 0 === e
            ? void 0
            : e.remove(),
          s.info(
            '\u0421\u043E\u0431\u0440\u0430\u043B\u0438 \u043A\u0430\u0440\u043C\u0443!',
            t
          )
        })
      } catch (t) {
        s.error('karmaAccept.ts', t)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.soundNotify = void 0)
    const s = n(0);
      const i = n(1);
      const d = n(2)
    t.soundNotify = () => {
      try {
        const e = {
          mail: s.qs('#mail_notif_cnt'),
          journal: s.qs('#jour_notif_cnt'),
          feed: s.qs('#lent_notif_cnt'),
        }
        let t = 0
        for (let n in e) e[n]
            && d._SETTINGS.notifySet[n]
            && '' !== e[n].innerHTML
            && !isNaN(e[n].innerHTML)
            && (t += parseInt(e[n].innerHTML, 10))
        if (t > i.DATA.EVENTS) {
          s.playSound(d._SETTINGS.notifySet.url, d._SETTINGS.notifySet.volume)
          let e = s.declOfNum(t, [
            '\u043D\u043E\u0432\u043E\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u0435',
            '\u043D\u043E\u0432\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u044F',
            '\u043D\u043E\u0432\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439',
          ])
          s.notification(`${s.toUpper(e)} на Spaces!`, `У Вас ${t} ${e}!`, 5),
          (i.DATA.EVENTS = t)
        } else { t < i.DATA.EVENTS && (i.DATA.EVENTS = t)
}
      } catch (t) {
        s.error('soundEvents.ts', t)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.betaFeatures = void 0)
    const s = n(0)
    t.betaFeatures = () => {
      let e = s.qs('div.progress-item__label');
        let t = s.qs('div.progress-item__runner')
      if (e && t && !s.qs('#SP_BETA_FEATURES')) {
        let n = e.textContent.split('/');
          let s = Math.round(100 * (+n[0] / +n[1]))
        s > 30 && (e.style.color = '#f5f5f5'),
        (t.id = 'SP_BETA_FEATURES'),
        (t.style.width = `${s}%`)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.blockedFiles = void 0)
    const s = n(0)
    t.blockedFiles = () => {
      try {
        let e = s.qs('a[class*="__adv_download"');
          let t = s.qs('div[id^="download_wrap_"');
          let n = s.qs('#SP_LINK_SSL')
        if (
          s.getPath(1) === 'files' &&
          s.getPath(2) === 'view' &&
          t
          && !e
          && !n
        ) {
          let n = s.ce('a', {
            href: '#',
            class: 'list-link list-link-blue stnd-link_disabled c-blue',
            id: 'SP_LINK_SSL',
            html: `
                    <span class="ico bp ico_spinner"></span>
                    <span class="t js-text">Загрузка</span>
                `,
          })
          t.children[0].appendChild(n),
          s.http('GET', document.location.href, !0).then((t) => {
            var e
            const i
                = null === (e = t.parsedBody) || void 0 === e
                ? void 0
                : e.info.file_widget
            i
                && (n.classList.remove('stnd-link_disabled'),
                (n.href = i.preview.downloadLinkSSL),
                (n.innerHTML = `
                        <span class="js-ico ico ico_download2_blue"></span>
                        <span class="t js-text">Скачать (${i.downloadBox.weight})</span>
                    `),
                s.info(
                  '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430',
                  t,
                ))
          })
        }
      } catch (t) {
        s.error('blockedFiles.ts', t)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.favoriteUser = void 0)
    const s = n(0);
      const i = n(1)
    t.favoriteUser = async () => {
      let e, t, n
      try {
        let r = s.getPath(1);
          let a = s.getPath(2);
          let l = s.getPath(3);
          let o = s.qsa('td.table__cell_last');
          let p = s.qs('#SP_PLUS_INFAVORITE')
        if (
          (r === 'mysite' ||
            (r === 'anketa' && a !== 'edit')
            || 'activity' === r)
          && i.DATA.USERNAME !== s.trim(s.qs('#location_bar_1_0').textContent)
          && l
          && 0 < o.length
          && !p
        ) {
          let r = s.ce('td', {
              class: 'table__cell stnd-link_disabled',
              id: 'SP_PLUS_INFAVORITE',
            });
            let a = s.ce('a', {
              href: '#',
              id: 'SP_FV_LOADER',
              class: 'stnd-link',
              html: `
                        <span class="ico bp ico_spinner"></span>
                        <span class="t js-text">Загрузка</span>
                    `,
            })
          r.appendChild(a),
          null === (e = o[1].parentElement) || void 0 === e
            ? void 0
            : e.insertBefore(r, o[1])
          let p
            = null
              === (n
                = null === (t = o[1]) || void 0 === t
                  ? void 0
                  : t.parentElement) || void 0 === n
              ? void 0
              : n.childNodes
          for (let e in p) p[e].nodeName === 'TD' && (p[e].width = '25%')
          await s.http('GET', `${i.SPACES}/anketa/index/${l}`, !0).then((t) => {
            let e
            const n
              = null === (e = t.parsedBody) || void 0 === e
                ? void 0
                : e.user_widget
            if (void 0 !== n) {
              let e = s.ce('a', {
                href: `${i.SPACES}/bookmarks/add/?object_id=${n.id}&object_type=11`,
                class: 'stnd-link',
                attr: {
                  title:
                    '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438',
                },
                html: '<span class="sp sp-fav"></span> B \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438',
                onclick: () => (
                  s.confirmBox(
                    `Добавить пользователя <b>${n.name}</b> в закладки?`,
                    !1,
                    async () => {
                      await s
                        .http(
                          'POST',
                          `${i.SPACES}/ajax/bookmarks/add/`,
                          !1,
                          `object_id=${n.id}&object_type=11&show_all_tags_state=0&new_tags=Люди&cfms=Добавить&CK=${i.DATA.CK}`,
                        )
                        .then((t) => {
                          t.status === 200
                            ? d(n.id, n.name, r)
                            : s.error('bookmarks/add', t)
                        })
                    },
                  ),
                  !1
                ),
              })
              d(n.id, n.name, r),
              a.remove(),
              r.classList.remove('stnd-link_disabled'),
              r.appendChild(e)
            } else { a.parentElement.style.display = 'none'
}
            s.info('anketa/index', t)
          })
        }
      } catch (t) {
        s.error('favoriteUser.ts', t)
      }
    }
    const d = async (e, t, n) => {
      try {
        await s
          .http(
            'GET',
            `${i.SPACES}/bookmarks/add/?object_id=${e}&object_type=11`,
            !0,
          )
          .then((i) => {
            let e
            const d
              = null === (e = i.parsedBody) || void 0 === e
                ? void 0
                : e.delete_link
            d
              && ((n.firstElementChild.href = d.delete_URL),
              (n.firstElementChild.title
                = '\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u0437\u0430\u043A\u043B\u0430\u0434\u043E\u043A'),
              (n.firstElementChild.innerHTML
                = '<span class="sp sp-fav-on"></span><span style="color: #61a961"> \u0412 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0430\u0445</span>'),
              (n.onclick = () => (
                s.confirmBox(
                  `Вы действительно хотите удалить пользователя <b>${t}</b> из закладок?`,
                  !1,
                  async () => {
                    await s.http('GET', d.delete_URL, !1).then((t) => {
                      t.status === 200
                        ? document.location.reload()
                        : s.error('bookmarks/remove', t)
                    })
                  },
                ),
                !1
              ))),
            s.info(
              '\u0412 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0430\u0445?',
              i
            )
          })
      } catch (t) {
        s.error('isFav', t)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.freeStickers = void 0)
    const i = n(0)
    t.freeStickers = (e) => {
      let t = i.qs('#SP_PLUS_STICKERS')
      if (e && !t) {
        let e = i.ce('script', {
          type: 'text/javascript',
          id: 'SP_PLUS_STICKERS',
          html: 'var open=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(e,o,t){var n=open.apply(this,arguments);return-1==o.indexOf("mail/sendMessage")&&-1==o.indexOf("diary/new")&&-1==o.indexOf("comments/add")||this.setRequestHeader("X-Proxy","spaces"),n};',
        })
        document.getElementsByTagName('head')[0].appendChild(e)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.recentSmiles = void 0)
    const s = n(0);
      const i = n(1);
      const d = n(2)
    t.recentSmiles = () => {
      let e = s.qs('#SP_RECENT_SMILES');
        let t = s.qs('.smiles_menu-header');
        let n = JSON.parse(localStorage.getItem('sp_recent_smiles') || '{}')
      try {
        if (t) {
          let e = document.querySelectorAll('img[smile^=":"]')
          e && r(e, n)
        }
        if (t && !e) {
          let e = document.querySelectorAll('a[href^="#sm-tab="]')
          for (let t of e) t.addEventListener('click', () => {
              d._SETTINGS.sticker
                && document
                  .querySelectorAll('.stickers_list>div')
                  .forEach(t => t.remove())
              let e = document.querySelectorAll('img[smile^=":"]')
              e && r(e, n)
              let t = document.querySelectorAll('a[href^="#sm-cat="]')
              for (let s of t) s.addEventListener('click', () => {
                  r(e, n)
                })
            })
          let a = s.qs('.smiles_menu-body');
            let l = s.ce('span', {
              class: 'sp sp-grey-del trash-btn',
              onclick: () => {
                s.confirmBox(
                  '\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0440\u0430\u043D\u0435\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0441\u043C\u0430\u0439\u043B\u0438\u043A\u0438?',
                  !0,
                  () => {
                    localStorage.removeItem('sp_recent_smiles'),
                      document.location.reload()
                  }
                )
              }
            });
            let o = s.ce('img', {
              id: 'SP_RECENT_SMILES',
              class: 'sp_recent-smile-btn',
              attr: {
                src: `${i.HTTP}//spac.me/i/mail/restore_grey.png`,
                title:
                  '\u0420\u0430\u043D\u0435\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435',
              },
              onclick: () => {
                if (((a.innerHTML = ''), Object.keys(n).length > 0)) for (let [e, t] of Object.entries(n)) {
                    let n = s.ce('img', {
                      class: 'sp_recent-smile',
                      attr: { src: e, smile: t },
                      onclick: () => {
                        let e
                        let n
                          = null !== (e = s.qs('textarea[tabindex="1"]'))
                          && void 0 !== e
                            ? e
                            : s.qs('textarea[name="msg"]')
                        n.value += `${t  } `
                      },
                    })
                    a.append(n)
                  }
                else {
                  let e = s.ce('div', {
                    style: 'color: #a4b7c4; text-align: center',
                    html: `<img src="${i.HTTP}//spac.me/i/st/compdude11.gif"></br></br>Список ранее использованных смайликов пуст</br>Используйте смайлики из меню смайликов, чтобы добавить их сюда</br></br>`,
                  })
                  a.append(e)
                }
              },
            })
          t.prepend(o),
          t.prepend(l),
          d._SETTINGS.recentSmiles.show
              && 0 < Object.keys(n).length
              && s.qs('#SP_RECENT_SMILES').click()
        }
      } catch (t) {
        s.error('recentSmiles.ts', t)
      }
    }
    const r = (e, t) => {
      for (let n of e) n.addEventListener('click', () => {
          let e = s.modifyObject(t, n.src, n.attributes.smile.value, 0)
          localStorage.setItem('sp_recent_smiles', JSON.stringify(e))
        })
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.settingsMenu = void 0)
    const s = n(0);
      const i = n(4);
      const d = n(1);
      const r = n(2)
    t.settingsMenu = () => {
      let e, t
      if (
        (s.getPath(1) === 'demo' || s.getPath(2) === 'demo')
        && !s.qs('#SP_PLUS_SETLINK')
      ) try {
          const n = s.qs(`a[href="#notifications"`)
          if (n) {
            const a = s.getQuery('sp_plus_settings');
              const l = s.getQuery('sp_cookie_editor');
              const o = s.getQuery('sp_changelog');
              const p = s.getQuery('sp_backup');
              const c = s.ce('a', {
                href: `${d.SPACES}/demo/?sp_plus_settings=1`,
                id: 'SP_PLUS_SETLINK',
                class: n.className,
                html: `
                        <span>Настройки Spaces+</span>
                        <span class="ico ico_arr ico_m"></span>
                    `,
                onclick: () => {
                  let e, t, n
                  let a
                    = null
                      === (n
                        = null
                          === (t
                            = null
                              === (e = s.qs('#SP_PLUS_SETLINK').parentElement)
                            || void 0 === e
                              ? void 0
                              : e.parentNode) || void 0 === t
                          ? void 0
                          : t.parentNode) || void 0 === n
                      ? void 0
                      : n.parentNode
                  a.id === 'main' &&
                  ((s.qs('#header_path').innerHTML = s
                      .qs('#header_path')
                      .innerHTML
.replace(
                        '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438',
                        `
                                <a href="${d.SPACES}/demo/">Настройки</a>
                                <span class="location-bar__sep ico"></span>
                                <span id="SP_PLUS_SETHEAD2">Spaces+</span>
                            `,
                      )),
                    (a.innerHTML = `
                                <div class="widgets-group widgets-group_top js-container__block">
                                    <div class="b-title cl b-title_center b-title_first oh">
                                        <div class="b-title__item" id="SP_PLUS_SETHEAD">Настройки Spaces+</div>
                                    </div>
                                    <div class="content">
                                        <div class="list f-c_fll">
                                            <div id="SP_PLUS_SETAREA" class="no-select"></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="SP_PLUS_ABOUT"></div>
                                <a id="SP_PLUS_SETBACK" href="${d.SPACES}/demo/?" class="link-return full_link">
                                    <span class="ico ico_arrow-back"></span>
                                    <span class="m">Назад</span>
                                </a>
                            `))
                  const l = s.qs('#SP_PLUS_SETAREA')
                  if (l) {
                    for (let e in r._SETTINGS) if (void 0 !== r._SETSTRINGS[e]) {
                        let t
                            = 3 === d.DEVICE.id
                            && (e === 'rscroll' ||
                              e === 'hrightbar' ||
                              e === 'weather');
                          let n = s.ce('input', {
                            id: e,
                            type: 'checkbox',
                            class: 'sp-checkbox-square',
                            attr: { unsupported: t, disabled: 'true' },
                            checked: r._SETTINGS[e],
                            onclick: (t) => {
                              const { id: e, checked: n } = t.target
                              return 'true' ===
                                t.target.attributes.unsupported.value && n
                                ? (s.messageBox(
                                    '\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!',
                                    '\u0414\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0434\u0430\u043D\u043D\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0441\u0430\u0439\u0442\u0430',
                                    !0,
                                    5
                                  ),
                                  !1)
                                : void (s.setSettings(e, n),
                                  'rscroll' === e
                                    ? i.scrollMove(n)
                                    : 'hrightbar' === e
                                      ? i.hiddenRightbar(n)
                                      : 'sticker' === e
                                        ? n
                                          ? i.freeStickers(n)
                                          : s.qs('#SP_PLUS_STICKERS').remove()
                                        : 'stickyheader' === e
                                          ? i.stickyHeader(n)
                                          : 'oldheader' === e
                                            ? i.oldHeader(n)
                                            : void 0)
                            }
                          });
                          let a = s.ce('label', {
                            html: r._SETSTRINGS[e],
                            attr: { for: e }
                          });
                          let o = s.ce('label', {
                            class: `stnd-link bstrwrap${t ? ' sp_unsupported' : ''}`,
                          })
                        if (
                          (o.appendChild(n),
                          o.appendChild(a),
                          void 0 !== r._DESCSTRINGS[e])                        ) {
                          let t = s.ce('a', {
                            href: '#',
                            class: 'sp sp-info sp_info-btn',
                            onclick: () => (
                              s.messageBox(
                                r._SETSTRINGS[e],
                                r._DESCSTRINGS[e],
                                !0,
                              ),
                              !1
                            ),
                          })
                          o.appendChild(t)
                        }
                        l.appendChild(o),
                        l.appendChild(o),
                        t && r._SETTINGS[e] && s.qs(`#${  e}`).click()
                      }
                    r._SETTINGS.friendsOn
                      && i.settingsFriends(s.qs('#friendsOn')),
                    r._SETTINGS.bodystyle
                        && i.settingsBackground(s.qs('#bodystyle')),
                    r._SETTINGS.notify && i.settingsNotify(s.qs('#notify')),
                    r._SETTINGS.weather && i.settingsWeather(s.qs('#weather'))
                    let e = s.ce('div', {
                        class: 'sp_plus_line',
                        html: '<span class="sp_plus_text">\u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0441\u0430\u0439\u0442\u0430</span>',
                      });
                      let t = s.ce('div', {
                        class: 'sp_plus_line',
                        html: '<span class="sp_plus_text">\u041F\u0440\u043E\u0447\u0435\u0435</span>',
                      })
                    l.appendChild(e), i.settingsFeatures(l), l.appendChild(t)
                    const n = s.ce('a', {
                      href: `${d.SPACES}/demo/?sp_plus_settings=1&sp_backup=1`,
                      class: 'stnd-link stnd-link_arr sp_font_sm',
                      id: 'sp_backup',
                      html: `
                                    <span class="b" style="color: #2e7d32">
                                        <span class="sp sp-backup-g mr-14"></span>Импорт и экспорт настроек
                                        <span class="ico ico_arr ico_m"></span>
                                    </span>
                                `,
                      onclick: () => (
                        (s.qs('#SP_PLUS_SETHEAD').innerHTML
                          = '\u0418\u043C\u043F\u043E\u0440\u0442 \u0438 \u044D\u043A\u0441\u043F\u043E\u0440\u0442 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A'),
                        (s.qs('#SP_PLUS_SETHEAD2').innerHTML = `
                                        <a href="${d.SPACES}/demo/?sp_plus_settings=1">Spaces+</a>
                                        <span class="location-bar__sep ico"></span> Импорт и экспорт настроек
                                    `),
                        (s.qs('#SP_PLUS_SETBACK').href
                          = `${d.SPACES}/demo/?sp_plus_settings=1`),
                        i.settingsBackupMenu('#SP_PLUS_SETAREA'),
                        !1
                      ),
                    })
                    l.appendChild(n)
                    const a = s.ce('a', {
                      href: `${d.SPACES}/demo/?sp_plus_settings=1&sp_changelog=1`,
                      class: 'stnd-link stnd-link_arr sp_font_sm',
                      id: 'sp_changelog',
                      html: `
                                    <span class="b" style="color: #2196f3">
                                        <span class="sp sp-restore-blue mr-14"></span>История обновлений
                                        <span class="ico ico_arr ico_m"></span>
                                    </span>
                                `,
                      onclick: () => (
                        (s.qs('#SP_PLUS_SETHEAD').innerHTML
                          = '\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439'),
                        (s.qs('#SP_PLUS_SETHEAD2').innerHTML = `
                                        <a href="${d.SPACES}/demo/?sp_plus_settings=1">Spaces+</a>
                                        <span class="location-bar__sep ico"></span> История обновлений
                                    `),
                        (s.qs('#SP_PLUS_SETBACK').href
                          = `${d.SPACES}/demo/?sp_plus_settings=1`),
                        i.settingsLogMenu('#SP_PLUS_SETAREA'),
                        !1
                      ),
                    })
                    l.appendChild(a)
                    const o = s.ce('a', {
                      href: '#',
                      class: 'stnd-link stnd-link_arr sp_font_sm',
                      id: 'sp_plus_reset',
                      html: `
                                    <span class="b" style="color: #f86934">
                                        <span class="sp sp-alert mr-14"></span>Сброс настроек
                                        <span class="ico ico_arr ico_m"></span>
                                    </span>
                                `,
                      onclick: () => (
                        s.confirmBox(
                          '\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438?',
                          !0,
                          () => {
                            s.delCookie('SP_PLUS_SET'),
                            s.delCookie('SP_WEATHER'),
                            s.delCookie('gp_left_btn'),
                            s.delCookie('force_ajax_transport'),
                            s.delCookie('sandbox'),
                            document.location.reload()
                          },
                        ),
                        !1
                      ),
                    })
                    l.appendChild(o)
                    let p = 0;
                      let c = s.ce('div', {
                        class:
                          'widgets-group widgets-group_top nl wbg no-select'
                      });
                      let u = s.ce('div', {
                        style: 'float: right',
                        html: 'v' + d.PKG_VERSION
                      });
                      let _ = s.ce('div', { class: 'content-item3' });
                      let f = s.ce('div', {
                        html: '\u2764\uFE0F',
                        class: 'heart',
                        onclick: () => {
                          10 <= ++p &&
                            (document.location.href = 'https://t.me/spaces_dev')
                        }
                      });
                      let S = s.ce('div', {
                        class: 'grey',
                        html: 'Developed by <a href="https://crashmax.ru" target="_blank">crashmax</a> with love ',
                      })
                    c.appendChild(_),
                    S.appendChild(f),
                    _.appendChild(S),
                    S.appendChild(u),
                    s.qs('#SP_PLUS_ABOUT').appendChild(c)
                  }
                  return !1
                },
              })
            n.before(c)
            let u = document.createEvent('MouseEvent')
            a
              && ((document.title
                = '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 Spaces+'),
              u.initEvent('click', !0, !0),
              c.dispatchEvent(u)),
            p
                && ((document.title
                  = 'Spaces+: \u0418\u043C\u043F\u043E\u0440\u0442 \u0438 \u044D\u043A\u0441\u043F\u043E\u0440\u0442 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A'),
                u.initEvent('click', !0, !0),
                (e = s.qs('#sp_backup')) === null || void 0 === e
                  ? void 0
                  : e.dispatchEvent(u)),
            o
                && ((document.title
                  = 'Spaces+: \u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439'),
                u.initEvent('click', !0, !0),
                (t = s.qs('#sp_changelog')) === null || void 0 === t
                  ? void 0
                  : t.dispatchEvent(u))
          }
        } catch (t) {
          s.error('settingsMenu', t)
        }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.stickyHeader = void 0)
    const s = n(0)
    t.stickyHeader = (e) => {
      try {
        let t = s.qs('#wrap_all');
          let n = s.qs('#left_nav');
          let i = s.qs('#header_elements');
          let d = s.qs('#main_shadow');
          let r = s.qs('#top_info_block');
          let a = s.qs('div.sidebar-logo')
        if (e && !i.hasAttribute('sp-sticky-header')) {
          const e = new ResizeObserver((l) => {
            window.requestAnimationFrame(() => {
              Array.isArray(l)
                && l.length
                && (s.css(d, 'padding-top: 45px'),
                s.css(
                  r,
                  `
                        position: fixed;
                        width: ${d.clientWidth}px;
                        z-index: 9999
                    `,
                ),
                s.css(
                  a,
                  `
                        position: fixed;
                        width: ${n.clientWidth + 1}px;
                        left: ${t.offsetLeft}px;
                        top: 0px;
                        box-shadow: 0px 2px 2px rgba(93,109,157,0.2);
                        z-index: 9999
                    `,
                ),
                s.css(
                  i,
                  `
                        position: fixed;
                        width: ${d.clientWidth - n.clientWidth + 1}px;
                        left: ${t.offsetLeft + n.clientWidth}px;
                        top: 0px;
                        box-shadow: 0px 2px 2px rgba(93,109,157,0.2);
                        z-index: 9999
                    `,
                ))
            })
          })
          e.observe(document.body), i.setAttribute('sp-sticky-header', '1')
        } else i.hasAttribute('sp-sticky-header')
            && (i.removeAttribute('style'),
            r.removeAttribute('style'),
            d.removeAttribute('style'),
            a.removeAttribute('style'),
            i.removeAttribute('sp-sticky-header'))
      } catch (t) {
        s.error('stickyHeader.ts', t)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.bypassProfile = void 0)
    const s = n(0);
      const i = n(1)
    t.bypassProfile = () => {
      let e, t, n, a
      try {
        let l = s.qsa('td.table__cell_last');
          let o = s.qs(`a[href^="${i.SPACES}/blacklist/"`);
          let p = s.qs(`a[href^="${i.SPACES}/info/rules/"`);
          let c = s.qs('div.ico_noaccess_xlarge');
          let u = s.qs('#SP_PLUS_INBL')
        if (s.getPath(1) === 'mysite' && l) {
          let a = s.getPath(3)
          if (o && !u) {
            let r = s.ce('td', {
              class: 'table__cell',
              id: 'SP_PLUS_INBL',
              html: `
                        <a href="#" class="stnd-link" title="Показать профиль">
                        <span class="sp sp-eye-grey"></span> Показать</a>
                    `,
              onclick: () => (
                r.after(
                  s.ce('td', {
                    class: 'table__cell',
                    id: 'SP_PLUS_INBL',
                    attr: { width: '25%' },
                    html: `
                                <a href="#" class="stnd-link stnd-link_disabled" title="Загрузка">
                                <span class="ico bp ico_spinner"></span> Загрузка</a>
                            `,
                    onclick: () => !1,
                  })
                ),
                r.remove(),
                d(a),
                !1
              ),
            })
            (e = l[1].parentElement) === null || void 0 === e
              ? void 0
              : e.insertBefore(r, l[1])
            let o
              = null
                === (n
                  = null === (t = l[1]) || void 0 === t
                    ? void 0
                    : t.parentElement) || void 0 === n
                ? void 0
                : n.childNodes
            for (let e in o) o[e].nodeName === 'TD' && (o[e].width = '25%')
            i.DATA.NICKNAME === a && s.qs('#SP_PLUS_INBL').click()
          }
          ;(p || c)
            && !o
            && !s.qs('#SP_LIST_LINK')
            && ((s.qs('div.user__tools').style.borderTop = 'none'),
            r(s.trim(s.qs('#location_bar_1_0').textContent), o, p))
        } else null === (a = s.qs('#SP_LIST_LINK')) || void 0 === a
            ? void 0
            : a.remove()
      } catch (t) {
        s.error('bypassProfile.ts', t)
      }
    }
    const d = async (e) => {
        let t, n, d
        if (
          ((i.DATA.NICKNAME !== e || void 0 === i.DATA.CONTENT)
            && ((i.DATA.NICKNAME = e),
            await s
              .http(
                'GET',
                `https://crashmax.ru/api/proxy?url=${i.SPACES}/ajax/mysite/index/${e}/`,
                !1,
              )
              .then((t) => {
                let e
                let n
                  = null === (e = t.parsedBody) || void 0 === e
                    ? void 0
                    : e.status.http_code
                n === 200
                  ? (i.DATA.CONTENT = t.parsedBody.contents.content.replace(
                      /spac1\.net|spaces-blogs\.com/gi,
                      e => (e = i.BASE_URL),
                    ))
                  : s.messageBox(
                      '\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043F\u0440\u043E\u0444\u0438\u043B\u0435\u0439',
                      '\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u044F! \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0443',
                      !0,
                    ),
                s.info(
                  '\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043F\u0440\u043E\u0444\u0438\u043B\u0435\u0439',
                  t
                )
              })),
          i.DATA.CONTENT !== null)
        ) {
          s.qs('#main_content').innerHTML = i.DATA.CONTENT
          let e = s.qs('img[data-s*="101.100.0"')
          ;(e.src = e.dataset.s),
          s.qs('div.user__tools').remove(),
          null
              === (n
                = null === (t = s.qs('span[class$="ico_gifts"').parentElement)
                || void 0 === t
                  ? void 0
                  : t.parentElement) || void 0 === n
            ? void 0
            : n.remove(),
          null
              === (d = s.qs(`a[href^="${i.SPACES}/activity"`).parentElement)
            || void 0 === d
            ? void 0
            : d.remove(),
          s.qs('div.btn-single__wrap').remove()
        }
      };
      const r = (t, e, n) => {
        let d = [
          {
            ico: 'forum',
            text: '\u0422\u0435\u043C\u044B \u0438 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438',
            path: `/forums/search_user/?query=${t}`,
          },
          {
            ico: 'comm',
            text: '\u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430',
            path: `/comm/list/user/${t}`,
          },
          {
            ico: 'friends',
            text: '\u0414\u0440\u0443\u0437\u044C\u044F',
            path: `/friends/?name=${t}`,
          },
          {
            ico: 'readers',
            text: '\u0427\u0438\u0442\u0430\u0442\u0435\u043B\u0438',
            path: `/lenta/readers/?user=${t}`,
          },
          {
            ico: 'gifts',
            text: '\u041F\u043E\u0434\u0430\u0440\u043A\u0438',
            path: `/gifts/user_list/${t}`,
          }
        ]
        e === null &&
        null === n
          && (d = [
            {
              ico: 'blog',
              text: '\u041B\u0438\u0447\u043D\u044B\u0439 \u0431\u043B\u043E\u0433',
              path: `/diary/view/user/${t}/list/-/`,
            },
            {
              ico: 'photo',
              text: '\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438',
              path: `/pictures/user/${t}/list/-/`,
            },
            {
              ico: 'music',
              text: '\u041C\u0443\u0437\u044B\u043A\u0430',
              path: `/music/user/${t}/list/-/`,
            },
            {
              ico: 'video',
              text: '\u0412\u0438\u0434\u0435\u043E',
              path: `/video/user/${t}/list/-/`,
            },
            {
              ico: 'file',
              text: '\u0424\u0430\u0439\u043B\u044B',
              path: `/files/user/${t}/list/-/`,
            }
          ].concat(d))
        let r = s.ce('div', {
          id: 'SP_LIST_LINK',
          class: 'widgets-group links-group',
        })
        s.qs('div.js-pending-item').append(r)
        for (let a of d) {
          const { ico: e, text: t, path: n } = a
          let d = s.ce('a', {
            href: i.SPACES + n,
            class: 'list-link stnd-link_arr list-link-darkblue c-darkblue',
            html: `
                <span class="js-ico ico ico_${e}"></span>
                <span class="t js-text">${t}</span>
                <span class="ico ico_arr"></span>
            `,
          })
          r.append(d)
        }
      }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.deleteReaders = void 0)
    const s = n(0);
      const i = n(1)
    t.deleteReaders = () => {
      try {
        let e = s.qs('#SP_PLUS_BUTTONS_R');
          let t = s.qsa(`a[href^="${i.SPACES}/lenta/reader_delete/"`)
        if (s.getPath() === '/lenta/readers/' && t && !e) {
          let e = []
          for (let n of t) {
            let t = s.ce('label', {
                class: 'stnd-link icon-link sp-ch-readers',
              });
              let i = s.getParams(n.href).user;
              let d = s.ce('input', {
                type: 'checkbox',
                class: 'sp-cbfr sp-checkbox-square',
                id: i
              });
              let r = s.ce('label', { attr: { for: i } })
            t.appendChild(d), t.appendChild(r), n.after(t), e.push(d)
          }
          if (s.qs('.sp-ch-readers')) {
            let t = s.ce('div', {
              class: 'user__tools_last',
              id: 'SP_PLUS_BUTTONS_R',
            })
            const n = s.ce('button', {
                style: 'border-right: unset',
                class: 'user__tools-link table__cell sp_btn-list',
                html: `
                        <span class="sp sp-ok-blue"></span>
                        <span class="sp-ch-text">Выбрать все</span>
                    `,
                onclick: (t) => {
                  if (t.target instanceof Element) {
                    let n
                      = 'SPAN' === t.target.nodeName
                        ? t.target.parentNode
                        : t.target
                    for (let t of e) t.checked
                        = -1
                        !== n.innerHTML.indexOf(
                          '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435',
                        )
                    n.innerHTML = `
                                <span class="sp sp-ok-blue"></span>
                                <span class="sp-ch-text">
                                    ${n.innerHTML.indexOf('\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435') === -1 ? '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435' : '\u0421\u043D\u044F\u0442\u044C \u043E\u0442\u043C\u0435\u0442\u043A\u0438'}
                                </span>
                            `
                  }
                },
              });
              const r = s.ce('button', {
                class: 'user__tools-link table__cell sp_btn_line sp_btn-list',
                html: `
                        <span class="sp sp-remove-red"></span>
                        <span class="sp-del-text">Удалить выбранных</span>
                    `,
                onclick: () => {
                  let t = []
                  for (let n of e) n.checked && t.push(n.id)
                  let n = t.length
                  n > 0
                    ? s.confirmBox(
                        `Вы действительно хотите удалить ${n} ${d(n)}?`,
                        !0,
                        async () => {
                          let e = n
                          for (let r of t) s.messageBox(
                              `Осталось удалить ${n--} из ${e} ${d(n)}`,
                              '\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u043D\u0435\u043C\u043D\u043E\u0433\u043E... <span style="padding-right: 10px" class="ico ico_spinner"></span>',
                              !1,
                            ),
                            await s
                              .http(
                                'POST',
                                `${i.SPACES}/lenta/reader_delete/?user=${r}`,
                                !1,
                                `&CK=${i.DATA.CK}&cfms=Удалить`,
                                )
                              .then((t) => {
                                s.info(
                                  '\u0423\u0434\u0430\u043B\u0438\u043B\u0438 \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u044F',
                                  t
                                )
                              })
                          document.location.reload()
                        },
                      )
                    : s.messageBox(
                        '\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!',
                        '\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0433\u0430\u043B\u043E\u0447\u043A\u043E\u0439, \u0442\u0435x \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437',
                        !0,
                        5,
                      )
                },
              })
            t.appendChild(r), t.appendChild(n)
            let a = s.qs('div.pgn-wrapper');
              let l = s.qs('#main')
            a
              ? a.prepend(t)
              : l && (t.classList.add('widgets-group'), l.prepend(t))
          }
        }
      } catch (t) {
        s.error('deleteReaders.ts', t)
      }
    }
    const d = e => '\u0447\u0438\u0442\u0430\u0442\u0435\u043B'
      + s.declOfNum(e, [
        '\u044F',
        '\u044F',
        '\u0435\u0439',
      ])
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.friendsOnline = void 0)
    const s = n(0);
      const d = n(1);
      const r = n(2)
    t.friendsOnline = (e) => {
      let t, n
      try {
        let i = s.qs('#friends_cnt');
          let a = s.qs('#SP_PLUS_FRIENDS_B');
          let l = 0
        if ((i && (l = +i.textContent), e && l > 0)) {
          let e
            = null
              === (n
                = null
                  === (t = i === null || void 0 === i ? void 0 : i.parentNode)
                || void 0 === t
                  ? void 0
                  : t.parentNode) || void 0 === n
              ? void 0
              : n.parentNode
          ;(a
            = a
            || s.ce('div', { id: 'SP_PLUS_FRIENDS_B', class: 'list-link__wrap' })),
          s.http('GET', `${d.SPACES}/friends/?S=3`, !0).then((t) => {
            var e
            const n
                = null === (e = t.parsedBody) || void 0 === e
                ? void 0
                : e.tabbed_panel.tabs[1].content.list
            if (n) {
              let e = !!s.qs('span.s_i_exit');
                  let l = n;
                  let o
                    = r._SETTINGS.friendsSet.max > l.length
                    ? l.length
                    : r._SETTINGS.friendsSet.max
              for (let t = 0; t < o; t++) a.appendChild(
                  s.ce('a', {
                    href: `${d.SPACES}/mysite/index/${l[t].name}`,
                    class: 'li',
                    html:
                        `${e
                          ? `<span class="comm_ava m for_avatar"><img src="${l[t].avatar.previewURL}" class="preview s21_20"></span>`
                          : '' 
                        }<span class="online-status m"><img class="p14 online_status_ico" src="${d.HTTP}//spac.me/i/${l[t].online_status.on_img}" alt="(ON)"></span><span class="block-item__title m break-word">${l[t].name}</span>`
                  }),
                  )
              s.info(
                '\u041F\u0430\u043D\u0435\u043B\u044C \u0434\u0440\u0443\u0437\u0435\u0439 \u043E\u043D\u043B\u0430\u0439\u043D',
                t
              )
            }
          }),
          null === e || void 0 === e ? void 0 : e.appendChild(a)
        } else { null === a || void 0 === a ? void 0 : a.remove()
}
      } catch (t) {
        s.error('friendsOnline.ts', t)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.galleryRotate = void 0)
    const s = n(0);
      const i = n(2)
    t.galleryRotate = () => {
      let e = s.qs('#gallery-container');
        let t = s.qs('#SP_IMAGE_ROTATE');
        let n = s.qs('.player-dummy_wrap')
      try {
        if (e && !t && !n) {
          let t = s.ce('a', {
            class: 'gallery__tools_button',
            id: 'SP_IMAGE_ROTATE',
            title: '\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C',
            html: '<span class="ico_gallery ico_gallery_reload m"></span>',
            onclick: () => (
              s.setSettings('angle', (i._SETTINGS.angle + 90) % 360),
              (e.className = `accel-3d rotate${  i._SETTINGS.angle}`),
              !1
            ),
          })
          s.qs('#g_dloadlink').after(t)
        }
      } catch (t) {
        s.error('galleryRotate.ts', t)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.sidebarButton = void 0)
    const s = n(0);
      const i = n(1)
    t.sidebarButton = () => {
      s.qsa(`li.li>a[href^="${i.SPACES}/services/"]`).forEach((t) => {
        let e
        let n = s.qs('span.s_i_exit') ? '<span class="sp sp-ico"></span>' : '';
          let d = s.ce('li', {
            class: 'li',
            html: `
                <a href="${i.SPACES}/demo/?sp_plus_settings=1" title="Настройки Spaces+">
                ${n}
                <span class="m s_i_text"> Spaces+</span></a>
            `,
          })
        (e = t.parentElement) === null || void 0 === e ? void 0 : e.after(d)
      })
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.weatherWidget = void 0)
    const s = n(0);
      const i = n(10);
      const d = n(2)
    t.weatherWidget = () => {
      let e = s.qs('#SP_WIDGET_WEATHER');
        let t = s.qs('#page_rightbar')
      if (
        (r() - d._SETTINGS.weatherSet.time > d._SETTINGS.weatherSet.interval
          && null !== d._SETTINGS.weatherSet.city
          && ((d._SETTINGS.weatherSet.time = r()), i.getWeather()),
        !e && t && a())      ) {
        let { id: e, name: n, main: i, wind: d, weather: r, clouds: l } = a();
          let o = s.ce('div', {
            class: 'widgets-group_top js-container__block',
            style: 'box-shadow: 0px 3px 5px rgba(93,109,157,0.3)',
            id: 'SP_WIDGET_WEATHER'
          });
          let p = s.ce('div', {
            class: 'b-title cl b-title_first oh',
            html: `
                <a href="https://openweathermap.org/city/${e}" target="_blank" class="b-title__link" style="white-space: unset">
                    <h6 class="span">Погода в г. ${n}</h6>
                </a>
            `
          });
          let c = s.ce('div', {
            class: 'content',
            style: 'padding: 0px 16px 16px 16px',
            html: `
                <img src="https://openweathermap.org/img/wn/${r[0].icon}@2x.png" class="sp_img-center">
                    <div class="grey sp_weather-container">
                    <p>${Math.round(i.temp)}°C</p>
                    <p>${s.toUpper(r[0].description)}</p>
                </div>
                <table class="grey sp_weather-table">
                    <tbody>
                        <tr>
                            <td>Облачность: </td>
                            <td>${l.all}%</td>
                        </tr>
                        <tr>
                            <td>Влажность: </td>
                            <td>${i.humidity}%</td>
                        </tr>
                        <tr>
                            <td>Давление: </td>
                            <td>${Math.round(0.75 * i.pressure)}mmHg</td>
                        </tr>
                        <tr>
                            <td>Ветер: </td>
                            <td>${d.speed}m/sec</td>
                        </tr>
                    </tbody>
                </table>
            `,
          })
        o.appendChild(p), o.appendChild(c), t.appendChild(o)
      }
    }
    const r = () => Math.round(Date.now() / 1e3);
      const a = () => {
        const e = s.getCookie('SP_WEATHER')
        return void 0 === e ? void i.ipWhois() : JSON.parse(e)
      }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.deleteComments = void 0)
    const s = n(0);
      const i = n(1)
    t.deleteComments = () => {
      let e, t, n, r, a, l, o, p, c, u, _, f
      try {
        let S = s.qs('h2.span');
          let h = s.qsa('span.comment_date');
          let g = s.qs(`a[href^="${i.SPACES}/comment/delete/"`);
          let m = s.qs(`a[href^="${i.SPACES}/forums/moder/ban/"`);
          let y = !(
            '\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438' !==
            (null === S || void 0 === S ? void 0 : S.textContent)
          );
          let b = !(
            '\u0423\u0434\u0430\u043B\u0438\u0442\u044C' !==
            (null === g || void 0 === g ? void 0 : g.textContent)
          );
          let P = !(
            (null === m || void 0 === m ? void 0 : m.textContent) !==
            '\u0411\u0430\u043D'
          )
        if (h && y && (b || P)) {
          for (let d of h) if (!d.getElementsByTagName('input').length) {
              let S
                = 4 === i.DEVICE.id
                  ? (a =
                        null ===
                          (r =
                            null ===
                              (n =
                                null ===
                                  (t =
                                    null === (e = d.parentElement) ||
                                    void 0 === e
                                      ? void 0
                                      : e.parentElement) || void 0 === t
                                  ? void 0
                                  : t.parentElement) || void 0 === n
                              ? void 0
                              : n.parentElement) || void 0 === r
                          ? void 0
                          : r.parentElement) ===
                      null || void 0 === a
                    ? void 0
                    : a.id
                  : (f =
                          null ===
                            (_ =
                              null ===
                                (u =
                                  null ===
                                    (c =
                                      null ===
                                        (p =
                                          null ===
                                            (o =
                                              null === (l = d.parentElement) ||
                                              void 0 === l
                                                ? void 0
                                                : l.parentElement) ||
                                          void 0 === o
                                            ? void 0
                                            : o.parentElement) || void 0 === p
                                        ? void 0
                                        : p.parentElement) || void 0 === c
                                    ? void 0
                                    : c.parentElement) || void 0 === u
                                ? void 0
                                : u.parentElement) || void 0 === _
                            ? void 0
                            : _.parentElement) ===
                        null || void 0 === f
                    ? void 0
                    : f.id
              if (parseInt(S)) {
                let e = s.ce('input', {
                  type: 'checkbox',
                  class: 'sp-cbfc sp-checkbox-square',
                  id: `DC_${S}`,
                })
                d.appendChild(e),
                d.appendChild(s.ce('label', { attr: { for: `DC_${S}` } }))
              }
            }
          if (!s.qs('#SP_PLUS_BUTTONS')) {
            let e = s.ce('div', {
              class: 'widgets-group user__tools_last',
              id: 'SP_PLUS_BUTTONS',
            })
            const t = s.ce('button', {
                class: 'user__tools-link table__cell sp_btn-list',
                html: `
                        <span class="sp sp-ok-blue"></span>
                        <span class="sp-ch-text">Выбрать все</span>
                    `,
                onclick: (t) => {
                  if (t.target instanceof Element) {
                    let e = s.qsa('input[id^="DC_"]');
                      let n
                        = 'SPAN' === t.target.nodeName
                          ? t.target.parentNode
                          : t.target
                    for (let t of e) t.checked
                        = -1
                        !== n.innerHTML.indexOf(
                          '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435',
                        )
                    n.innerHTML = `
                                <span class="sp sp-ok-blue"></span>
                                    <span class="sp-ch-text">
                                    ${n.innerHTML.indexOf('\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435') === -1 ? '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435' : '\u0421\u043D\u044F\u0442\u044C \u043E\u0442\u043C\u0435\u0442\u043A\u0438'}
                                </span>
                            `
                  }
                },
              });
              const n = s.ce('button', {
                class: 'user__tools-link table__cell sp_btn_line sp_btn-list',
                html: `
                        <span class="sp sp-remove-red"></span>
                        <span class="sp-del-text">Удалить выбранные</span>
                    `,
                onclick: () => {
                  let e, t, n, r, a, l, o, p, c, u, _
                  let f = s.qsa('input[id^="DC_"]');
                    let S = []
                  for (let s of f) s.checked
                      && Array.prototype.slice
                        .call(
                          (_ =
                              4 === i.DEVICE.id
                                ? null ===
                                    (r =
                                      null ===
                                        (n =
                                          null ===
                                            (t =
                                              null ===
                                                (e =
                                                  null === s || void 0 === s
                                                    ? void 0
                                                    : s.parentNode) ||
                                              void 0 === e
                                                ? void 0
                                                : e.parentNode) || void 0 === t
                                            ? void 0
                                            : t.parentNode) || void 0 === n
                                        ? void 0
                                        : n.parentNode) || void 0 === r
                                  ? void 0
                                  : r.parentNode
                                : null ===
                                      (u =
                                        null ===
                                          (c =
                                            null ===
                                              (p =
                                                null ===
                                                  (o =
                                                    null ===
                                                      (l =
                                                        null ===
                                                          (a =
                                                            null === s ||
                                                            void 0 === s
                                                              ? void 0
                                                              : s.parentNode) ||
                                                        void 0 === a
                                                          ? void 0
                                                          : a.parentNode) ||
                                                    void 0 === l
                                                      ? void 0
                                                      : l.parentNode) ||
                                                void 0 === o
                                                  ? void 0
                                                  : o.parentNode) ||
                                            void 0 === p
                                              ? void 0
                                              : p.parentNode) || void 0 === c
                                          ? void 0
                                          : c.parentNode) || void 0 === u
                                  ? void 0
                                  : u.parentNode) ===
                            null || void 0 === _
                            ? void 0
                            : _.querySelectorAll(
                                `a[href^="${i.SPACES}/comment/delete/"]`,
                              )
                        )
                        .filter((t) => {
                          t.textContent ===
                            '\u0423\u0434\u0430\u043B\u0438\u0442\u044C' && S.push(t.href)
                        })
                  let h = S.length
                  return (
                    h > 0
                      ? s.confirmBox(
                          `Вы действительно хотите удалить ${h} ${d(h)}?`,
                          !0,
                          async () => {
                            let e = h
                            for (let t of S) s.messageBox(
                                `Осталось удалить ${h--} из ${e} ${d(h)}`,
                                '\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u043D\u0435\u043C\u043D\u043E\u0433\u043E... <span style="padding-right: 10px" class="ico ico_spinner"></span>',
                                !1,
                              ),
                              await s.http('GET', t, !0).then((t) => {
                                s.info(
                                  '\u0423\u0434\u0430\u043B\u0438\u043B \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439',
                                  t
                                )
                              })
                            document.location.reload()
                          },
                        )
                      : s.messageBox(
                          '\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!',
                          '\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0433\u0430\u043B\u043E\u0447\u043A\u043E\u0439, \u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437',
                          !0,
                          5,
                        ),
                    !1
                  )
                },
              })
            e.appendChild(n),
            e.appendChild(t),
            s.qs('div.js-comments-pgn').after(e)
          }
        }
      } catch (t) {
        s.error('deleteComments.ts', t)
      }
    }
    const d = e => '\u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438'
      + s.declOfNum(e, [
        '\u0439',
        '\u044F',
        '\u0435\u0432',
      ])
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.hiddenRightbar = void 0)
    const s = n(0);
      const i = n(2)
    t.hiddenRightbar = (e) => {
      let t = s.qs('#page_rightbar')
      e && i._SETTINGS.weather && s.qs('#weather').click()
      try {
        e && !t.hasAttribute('sp-hidden-rightbar')
          ? ((t.style.display = 'none'),
            t.setAttribute('sp-hidden-rightbar', '1'))
          : t.hasAttribute('sp-hidden-rightbar')
            && ((t.style.display = 'block'),
            t.removeAttribute('sp-hidden-rightbar'))
      } catch (t) {
        s.error('hidderRightbar.ts', t)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.playerDownload = void 0)
    const s = n(0);
      const i = n(1)
    t.playerDownload = () => {
      let e
      try {
        let t = 0;
          let n = sessionStorage.getItem('music:track');
          let d = sessionStorage.getItem('music:playlist');
          let r = s.qs('#SP_MUSIC_DOWN');
          let a = s.qs('#gp_main_player')
        if (a && n && d) {
          let a = JSON.parse(n);
            let l = JSON.parse(d)
          t = parseInt(a.id, 10)
          let o = l.playlist.playlist[t].src;
            let p = s.qs('a.js-music_repeat')
          if (p && !r) {
            i.DATA.PLAYER = t
            let n = s.ce('td', {
              id: 'SP_MUSIC_DOWN',
              class: 'ico_td',
              innerHTML:
                '<span style="margin: 0px 6px 0px 0px !important" class="sp sp-download-darkblue" title="\u0421\u043A\u0430\u0447\u0430\u0442\u044C"></span>',
              onclick: () => (location.href = o),
            })
            (e = p.parentElement) === null || void 0 === e ? void 0 : e.after(n)
          } else r
              && i.DATA.PLAYER !== t
              && ((i.DATA.PLAYER = t),
              (r.onclick = () => (location.href = o)),
              s.info(
                '\u041E\u0431\u043D\u043E\u0432\u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0442\u0440\u0435\u043A',
                a,
              ))
        }
      } catch (t) {
        s.error('playerDownload.ts', t)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.settingsNotify = void 0)
    const s = n(0);
      const i = n(1);
      const d = n(2)
    t.settingsNotify = (t) => {
      let e
      try {
        'Notification' in window
          ? Notification.permission.toLowerCase() === 'denied'
            ? s.messageBox(
                '\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!',
                `Вы запретили показывать уведомления для сайта ${i.BASE_URL}`,
                !0,
                5,
              )
            : Notification.requestPermission((e) => {
                e.toLowerCase() !== 'granted' &&
                s.messageBox(
                    '\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!',
                    `Разрешите браузеру показывать уведомления с сайта ${i.BASE_URL}, чтобы пользоваться функцией`,
                    !0,
                    5,
                  )
              })
          : s.messageBox(
              '\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!',
              '\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F',
              !0,
              5,
            )
        let n = s.ce('div', { id: 'SP_PLUS_EVENTS' });
          let r = s.ce('label', {
            html: '\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0430\u0443\u0434\u0438\u043E\u0444\u0430\u0439\u043B:<div class="label__desc">.ogg \u0438\u043B\u0438 .wav</div>',
            style: 'margin-right: -17px',
            class: 'label'
          });
          let a = s.ce('label', {
            html: '\u0413\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C:',
            class: 'label'
          });
          let l = s.ce('div', { class: 'text-input__wrap', style: 'margin: 15px' });
          let o = s.ce('div', { style: 'margin: 15px' });
          let p = s.ce('label', { class: 'stnd-link sp_noborder' });
          let c = s.ce('label', { class: 'stnd-link sp_noborder' });
          let u = s.ce('label', { class: 'stnd-link sp_noborder' });
          let _ = s.ce('input', {
            type: 'text',
            value: d._SETTINGS.notifySet.url,
            class: 'text-input',
          })
        _.addEventListener('input', (t) => {
          s.isValidUrl(t.target.value)
          && /\.(ogg|mp3|wav)$/i.test(t.target.value)
            ? (s.setSettings('notifySet.url', t.target.value),
              _.classList.remove('sp-input-error'))
            : _.classList.add('sp-input-error')
        })
        let f = s.ce('span', {
            class: 'text-input__btn',
            html: '<span class="sp sp-play-green"></span>',
            style: 'top: 23px',
            title:
              '\u041F\u0440\u043E\u0441\u043B\u0443\u0448\u0430\u0442\u044C',
            onclick: () => s.playSound(
                d._SETTINGS.notifySet.url,
                d._SETTINGS.notifySet.volume,
              )
          });
          let S = s.ce('div', {
            class: 'label__desc',
            html: `${d._SETTINGS.notifySet.volume}%`
          });
          let h = s.ce('input', {
            type: 'range',
            min: 0,
            max: 100,
            step: 1,
            value: d._SETTINGS.notifySet.volume,
          })
        h.addEventListener('input', (t) => {
          if (!isNaN(t.target.value)) {
            let e = parseInt(t.target.value, 10)
            ;(e < 0 || e > 100) && (e = 70),
            (S.innerHTML = `${e  }%`),
            s.setSettings('notifySet.volume', e)
          }
        })
        let g = s.ce('input', {
            type: 'checkbox',
            id: 'sp_event_mail',
            class: 'sp-checkbox-square',
            checked: d._SETTINGS.notifySet.mail,
            onclick: t => s.setSettings('notifySet.mail', t.target.checked),
          });
          let m = s.ce('label', {
            attr: { for: 'sp_event_mail' },
            html: '\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u044F\u0442\u044C \u043E \u043F\u043E\u0447\u0442\u0435'
          });
          let y = s.ce('input', {
            type: 'checkbox',
            id: 'sp_event_journal',
            class: 'sp-checkbox-square',
            checked: d._SETTINGS.notifySet.journal,
            onclick: (t) => s.setSettings('notifySet.journal', t.target.checked)
          });
          let b = s.ce('label', {
            attr: { for: 'sp_event_journal' },
            html: '\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u044F\u0442\u044C \u043E \u0436\u0443\u0440\u043D\u0430\u043B\u0435'
          });
          let P = s.ce('input', {
            type: 'checkbox',
            id: 'sp_event_feed',
            class: 'sp-checkbox-square',
            checked: d._SETTINGS.notifySet.feed,
            onclick: (t) => s.setSettings('notifySet.feed', t.target.checked)
          });
          let E = s.ce('label', {
            attr: { for: 'sp_event_feed' },
            html: '\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u044F\u0442\u044C \u043E \u043B\u0435\u043D\u0442\u0435',
          })
        l.appendChild(r),
        l.appendChild(_),
        l.appendChild(f),
        a.appendChild(S),
        o.appendChild(a),
        o.appendChild(h),
        n.appendChild(l),
        n.appendChild(o),
        p.appendChild(g),
        p.appendChild(m),
        c.appendChild(y),
        c.appendChild(b),
        u.appendChild(P),
        u.appendChild(E),
        n.appendChild(p),
        n.appendChild(c),
        n.appendChild(u),
        null === (e = t.parentElement) || void 0 === e ? void 0 : e.after(n)
      } catch (t) {
        s.error('settingsNotify.ts', t)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.disableRedirect = void 0)
    const s = n(0);
      const i = n(1)
    t.disableRedirect = () => {
      s.qsa(`a[href^="${i.SPACES}/redirect/"`).forEach(
        t => (t.href = s.getParams(t).redirect),
      )
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.settingsLogMenu = void 0)
    const s = n(0);
      const i = n(11);
      const d = n(1)
    t.settingsLogMenu = (e) => {
      window.scrollTo(0, 0)
      const t = s.qs(e)
      if (t) try {
          t.innerHTML = ''
          let e = s.ce('div', {
              class: 'wbg error__item_wrapper sp_plus_c_wrap',
            });
            let n = s.ce('div', { class: 'pad_t_a' });
            let r = s.ce('div', { class: 'js-input_error_wrap' });
            let a = s.ce('div', {
              class: 't_center',
              id: 'SP_JSON_PRELOADER',
              html: `<img src="${d.HTTP}//spac.me/i/preloader.gif">`,
            })
          r.appendChild(n),
          e.appendChild(r),
          t.appendChild(e),
          e.appendChild(a),
          i.getUpdater((e) => {
            for (let t of e.history) {
              let e = s.ce('label', {
                  class: 'label sp_plus_line_c',
                  html: `v${s.rever(t.build)}<div class="label__desc">${t.date}</div>`,
                  });
                  let i = s.ce('div', {
                  class: 'grey sp_plus_c_desc',
                  html: t.changes,
                  })
              n.appendChild(e), n.appendChild(i)
            }
            s.qs('#SP_JSON_PRELOADER').remove()
          })
        } catch (t) {
          s.error('settingsLogMenu.ts', t)
        }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.settingsFriends = void 0)
    const s = n(0);
      const i = n(2)
    t.settingsFriends = (t) => {
      let e
      try {
        let n = s.ce('div', { id: 'SP_PLUS_MAXFRIENDS' });
          let d = s.ce('div', { class: 'sp_settings-wrap' });
          let r = s.ce('input', {
            type: 'text',
            class: 'text-input',
            size: 4,
            attr: { maxlength: 2 },
            value: i._SETTINGS.friendsSet.max,
          })
        r.addEventListener('change', (t) => {
          ;/^([1-9]|1[0-5])$/.test(t.target.value)
            ? (s.setSettings('friendsSet.max', t.target.value),
              r.classList.remove('sp-input-error'))
            : r.classList.add('sp-input-error')
        })
        let a = s.ce('label', {
          html: '\u0412\u044B\u0432\u043E\u0434\u0438\u0442\u044C \u0434\u0440\u0443\u0437\u0435\u0439:<div class="label__desc">\u043E\u0442 1 \u0434\u043E 15</div>',
          class: 'label',
        })
        d.appendChild(a),
        d.appendChild(r),
        n.appendChild(d),
        null === (e = t.parentElement) || void 0 === e ? void 0 : e.after(n)
      } catch (t) {
        s.error('settingsFriends.ts', t)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.settingsFeatures = void 0)
    const s = n(0);
      const i = n(2)
    t.settingsFeatures = (e) => {
      let t = s.ce('div', { id: 'wrap_spaces_option' });
        let n = s.ce('a', {
          href: '#',
          class: 'stnd-link stnd-link_arr sp_font_sm',
          html: d(
            i._SETTINGS.apidebug
              ? '<span class="sp sp-remove-grey mr-14"></span>\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043E\u0442\u043B\u0430\u0434\u0447\u0438\u043A'
              : '<span class="sp sp-settings mr-14"></span>\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043E\u0442\u043B\u0430\u0434\u0447\u0438\u043A',
          ),
          onclick: () => !1,
        })
      const r = s.getCookie('sandbox')
      let a = s.ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_font_sm',
        id: 'sp_spacesAction_beta',
        html: d(
          r
            ? '<span class="sp sp-exit-grey mr-14"></span>\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u044B'
            : '<span class="sp sp-enter-grey mr-14"></span>\u0412\u043E\u0439\u0442\u0438 \u0432 \u043F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0443',
        ),
        onclick: () => !1,
      })
      const l = s.getCookie('force_ajax_transport')
      let o = s.ce('a', {
        href: '#',
        class: 'stnd-link stnd-link_arr sp_font_sm',
        id: 'sp_spacesFAT',
        html: d(
          l
            ? '<span class="sp sp-remove-grey mr-14"></span>\u0423\u0431\u0440\u0430\u0442\u044C \u043F\u043E\u043B\u043E\u0441\u0443 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438'
            : '<span class="sp sp-ok-grey mr-14"></span>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u043E\u0441\u0443 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B',
        ),
        onclick: () => !1,
      })
      const p = s.getCookie('gp_left_btn')
      let c = s.ce('a', {
          href: '#',
          class: 'stnd-link stnd-link_arr sp_last_btn',
          id: 'sp_spacesGLB',
          html: d(
            p
              ? '<span class="sp sp-remove-grey mr-14"></span>\u0423\u0431\u0440\u0430\u0442\u044C \u043F\u043B\u0435\u0435\u0440 \u0438\u0437 \u043B\u0435\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438'
              : '<span class="sp sp-ok-grey mr-14"></span>\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u043F\u043B\u0435\u0435\u0440 \u043D\u0430 \u043B\u0435\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438',
          ),
          onclick: () => !1,
        });
        let u = s.ce('a', {
          href: '#',
          style: 'display: none',
          id: 'sp_newbequest_togl',
          class: 'stnd-link stnd-link_arr sp_line sp_last_btn sp_newbq_l',
          html: d(
            '<span class="sp sp-remove-grey mr-14"></span>\u0421\u043A\u0440\u044B\u0442\u044C \u043A\u0432\u0435\u0441\u0442 \u043D\u043E\u0432\u0438\u0447\u043A\u0430',
          ),
          onclick: () => !1,
        })
      t.appendChild(n),
      t.appendChild(a),
      t.appendChild(o),
      t.appendChild(c),
      t.appendChild(u),
      e.appendChild(t)
    }
    const d = e => `<span class="b">${e}<span class="ico ico_arr ico_m"></span></span>`
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.videoSpeedPlayback = void 0)
    const s = n(0);
      const i = n(2)
    t.videoSpeedPlayback = () => {
      let e = s.qs('span.jwcontrols');
        let t = s.qs('#SP_PLAYBACK_VIDEO')
      try {
        if (
          (t && (s.qs('video').playbackRate = i._SETTINGS.videoSpeed), e && !t)
        ) {
          let e = s.qs('span[class*="jwtext jwduration jwhidden"]');
            let t = s.ce('span', {
              class: 'jwtext jwduration jwhidden',
              id: 'SP_PLAYBACK_VIDEO',
              html: `x${  i._SETTINGS.videoSpeed}`,
              onclick: () => {
                let e = (i._SETTINGS.videoSpeed + 0.25) % 2.25
                return (
                  e == 0 && (e = 0.5),
                  s.setSettings('videoSpeed', e),
                  (t.innerHTML = `x${  e}`),
                  !1
                )
              },
            })
          e.after(t)
        }
      } catch (t) {
        s.error('videoSpeedPlayback.ts', t)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.settingsBackground = void 0)
    const s = n(0);
      const i = n(9);
      const d = n(2);
      const r = n(1)
    t.settingsBackground = (t) => {
      let e
      try {
        let n = s.ce('div', { class: 'text-input__wrap' });
          let r = s.ce('div', { id: 'SP_PLUS_BODYSTYLE' });
          let o = s.ce('label', {
            class: 'stnd-link',
            style: 'border-bottom: none'
          });
          let p = s.ce('label', {
            class: 'stnd-link',
            style: 'border-bottom: none'
          });
          let c = s.ce('div', {
            class: 'bstrwrap',
            style: 'border-bottom: none; padding: 15px'
          });
          let u = s.ce('label', {
            html: '\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435:<div class="label__desc">.jpg \u0438\u043B\u0438 .png</div>',
            style: 'margin-right: -17px',
            class: 'label'
          });
          let _ = s.ce('label', {
            html: '\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430:<div class="label__desc">#RRGGBB</div>',
            style: 'margin-right: -17px',
            class: 'label'
          });
          let f = s.ce('input', {
            type: 'text',
            id: 'image-input',
            value: d._SETTINGS.bodystyleSet.url,
            style: 'margin-bottom: 7px',
            class: 'text-input',
          })
        f.addEventListener('change', (t) => {
          s.isValidUrl(t.target.value)
          && /\.(jpg|jpeg|png|gif)$/i.test(t.target.value)
            ? (s.setSettings('bodystyleSet.url', t.target.value),
              i.setStyles(),
              f.classList.remove('sp-input-error'))
            : f.classList.add('sp-input-error')
        })
        let S = s.ce('input', {
          type: 'text',
          class: 'text-input',
          id: 'color-input',
          value: d._SETTINGS.bodystyleSet.color,
        })
        S.addEventListener('input', (t) => {
          ;/^#([A-Z0-9]{3,6})$/i.test(t.target.value)
            ? (s.setSettings('bodystyleSet.color', t.target.value),
              i.setStyles(),
              S.classList.remove('sp-input-error'))
            : S.classList.add('sp-input-error')
        })
        let h = s.ce('input', {
            type: 'radio',
            id: 'sp_set_bodystyle_URL',
            checked: d._SETTINGS.bodystyleSet.urlchecked,
            class: 'sp-checkbox-circle',
            onclick: (t) => {
              s.setSettings('bodystyleSet.urlchecked', t.target.checked),
              t.target.checked
                  && g.checked
                  && ((g.checked = !1),
                  s.setSettings('bodystyleSet.colorchecked', !1)),
              d._SETTINGS.bodystyleSet.urlchecked
                ? (i.setStyles(), a())
                : s.qs('#SP_WRAP_IMAGE').remove()
            },
          });
          let g = s.ce('input', {
            type: 'radio',
            id: 'sp_set_bodystyle_color',
            checked: d._SETTINGS.bodystyleSet.colorchecked,
            class: 'sp-checkbox-circle',
            onclick: (t) => {
              s.setSettings('bodystyleSet.colorchecked', t.target.checked),
                t.target.checked &&
                  h.checked &&
                  ((h.checked = !1),
                  s.setSettings('bodystyleSet.urlchecked', !1)),
                d._SETTINGS.bodystyleSet.colorchecked
                  ? (i.setStyles(), l())
                  : s.qs('#SP_WRAP_COLOR').remove()
            }
          });
          let m = s.ce('label', {
            attr: { for: 'sp_set_bodystyle_URL' },
            html: '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435'
          });
          let y = s.ce('label', {
            attr: { for: 'sp_set_bodystyle_color' },
            html: '\u041F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0446\u0432\u0435\u0442',
          })
        n.appendChild(u),
        n.appendChild(f),
        n.appendChild(_),
        n.appendChild(S),
        o.appendChild(h),
        o.appendChild(m),
        p.appendChild(g),
        p.appendChild(y),
        c.appendChild(n),
        r.appendChild(c),
        r.appendChild(o),
        r.appendChild(p),
        null === (e = t.parentElement) || void 0 === e ? void 0 : e.after(r),
        d._SETTINGS.bodystyleSet.urlchecked && a(),
        d._SETTINGS.bodystyleSet.colorchecked && l()
      } catch (t) {
        s.error('settingsBackground.ts', t)
      }
    }
    const a = async () => {
        try {
          if (!s.qs('#SP_WRAP_IMAGE')) {
            s.qs('#SP_WRAP_COLOR')
              && (s.qs('#SP_WRAP_COLOR').remove(),
              s.qs('#SP_PLUS_CP_STYLE').remove())
            let e = s.ce('link', {
              rel: 'stylesheet',
              type: 'text/css',
              id: 'SP_PLUS_IMAGE_STYLE',
              href: `${r.ENV_PATH}/css/bodystyle.css?r=${r.REVISION}`,
            })
            document.getElementsByTagName('head')[0].appendChild(e)
            let t = s.qs('#SP_PLUS_BODYSTYLE');
              let n = s.ce('div', {
                class: 'js-gallery_skip wbg oh tiles_block tiles_wrapper'
              });
              let d = s.ce('div', {
                id: 'SP_WRAP_IMAGE',
                style: 'border-top: 1px solid #cdd4e1',
              })
            await s
              .http('GET', `${r.ENV_PATH}/data.json?r=${r.REVISION}`, !1)
              .then((a) => {
                let e, l
                if (
                  a.status === 200 &&
                  ((e = a.parsedBody) === null || void 0 === e
                    ? void 0
                    : e.backgrounds)
                ) {
                  for (let e of (l = a.parsedBody) === null || void 0 === l
                    ? void 0
                    : l.backgrounds) {
                    let t = s.ce('div', {
                        class: 'js-file_item tiled_item tiled_item-200',
                      });
                      let d = s.ce('div', {
                        class: 'tiled_inner t_center relative'
                      });
                      let a = s.ce('span', { class: 'relative sp_bg-items' });
                      let l = s.ce('div', { class: 'tiled-preview border' });
                      let o = s.ce('img', {
                        class: 'preview s201_200',
                        style: 'cursor: pointer',
                        src: `${r.ENV_PATH}/backgrounds/${e}`,
                        onclick: (t) => {
                          ;(s.qs('#image-input').value = t.target.src),
                          s.setSettings('bodystyleSet.url', t.target.src),
                          i.setStyles()
                        },
                      })
                    l.appendChild(o),
                    a.appendChild(l),
                    d.appendChild(a),
                    t.appendChild(d),
                    n.appendChild(t)
                  }
                  d.appendChild(n), t.appendChild(d)
                }
                i.setStyles()
              })
          }
        } catch (t) {
          s.error('setImage', t)
        }
      };
      const l = () => {
        try {
          if (!s.qs('#SP_WRAP_COLOR')) {
            s.qs('#SP_WRAP_IMAGE') &&
              (s.qs('#SP_WRAP_IMAGE').remove(),
              s.qs('#SP_PLUS_IMAGE_STYLE').remove())
            let e = s.ce('link', {
              rel: 'stylesheet',
              type: 'text/css',
              id: 'SP_PLUS_CP_STYLE',
              href: `${r.ENV_PATH}/css/user-content.css?r=${r.REVISION}`
            })
            document.getElementsByTagName('head')[0].appendChild(e)
            let t = s.ce('div', { class: 'stnd-block' }),
              n = s.qs('#SP_PLUS_BODYSTYLE'),
              a = s.ce('div', {
                id: 'SP_WRAP_COLOR',
                style: 'border-top: 1px solid #cdd4e1'
              }),
              l = s.ce('table', { class: 'table__wrap bb-colorpicker' }),
              p = s.ce('tbody'),
              c = s.ce('tr'),
              u = s.ce('td', { class: 'table__cell' })
            const _ = [
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
                '#9C27B0'
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

            ]
            for (let e of _) {
              for (let n in e) {
                let i = s.ce('div', {
                  style: `background-color: ${e[n]}`,
                  class: 'js-bb_color toolbar-color pointer',
                  attr: { 'data-val': e[n], 'data-tag': 'fon' }
                })
                t.appendChild(i)
              }
              t.appendChild(s.ce('br'))
            }
            u.appendChild(t), c.appendChild(u)
            let f = s.ce('td', { class: 'table__cell table__cell_last' }),
              S = s.ce('div', { class: 'stnd-block' }),
              h = s.ce('div', { class: 'js-bb_colorpicker' })
            S.appendChild(h),
              f.appendChild(S),
              c.appendChild(f),
              p.appendChild(c),
              l.appendChild(p),
              a.appendChild(l),
              n.appendChild(a),
              setTimeout(() => {
                let t = new CP(h, !1, h)
                s.qs('#color-input').addEventListener('change', (n) => {
                  ;/^\#([A-Za-z0-9]{3}|[A-Za-z0-9]{6})$/i.test(n.target.value)
                    ? (s.setSettings('bodystyleSet.color', n.target.value),
                      i.setStyles(),
                      t.set(d._SETTINGS.bodystyleSet.color),
                      n.target.classList.remove('sp-input-error'))
                    : n.target.classList.add('sp-input-error')
                }),
                  t.enter(),
                  t.set(d._SETTINGS.bodystyleSet.color),
                  t.on('change', (t) => {
                    const e = `#${t.toUpperCase()}`
                    o(e), s.setSettings('bodystyleSet.color', e), i.setStyles()
                  })
                const n = document.querySelectorAll('.js-bb_color')
                for (let e of n)
                  e.addEventListener('click', (n) => {
                    let e = n.target.getAttribute('data-val')
                    o(e),
                      s.setSettings('bodystyleSet.color', e),
                      i.setStyles(),
                      t.set(e)
                  })
              }, 100)
          }
        } catch (t) {
          s.error('setColor', t)
        }
      };
      const o = (e) => {
        ;(s.qs('input[name=color]').value = e),
        (s.qs('#color-input').value = e),
        (s.qs('.colorpicker-color').style.backgroundColor = e)
      }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.settingsBackupMenu = void 0)
    const s = n(0);
      const i = n(2)
    t.settingsBackupMenu = (e) => {
      let t
      window.scrollTo(0, 0)
      const d = s.qs(e);
        const r = n(70)
      if (d) try {
          if (((d.innerHTML = ''), !i._SETTINGS.hideNotify.configImport)) {
            let e = s.ce('span', {
                class: 'sp sp-remove-grey pointer right notif_close close_h',
                style: 'margin: 10px',
                title:
                  '\u041F\u043E\u043D\u044F\u0442\u043D\u043E, \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C.',
                onclick: () => {
                  s.setSettings('hideNotify.configImport', !0),
                  s.qs('#SP_CONFIG_JSON').remove()
                },
              });
              let t = s.ce('div', {
                class: 'stnd-block-yellow',
                style: 'padding: 16px',
                html: '<span class="sp sp-alert"></span>\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!</br></br><div style="font-size: small">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043E\u043F\u044B\u0442\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439! \u041F\u0435\u0440\u0435\u0434 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0444\u0430\u0439\u043B\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A, \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u042D\u043A\u0441\u043F\u043E\u0440\u0442, \u0435\u0441\u043B\u0438 \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A, \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0418\u043C\u043F\u043E\u0440\u0442 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A.</div>'
              });
              let n = s.ce('div', { id: 'SP_CONFIG_JSON' })
            n.appendChild(e), d.appendChild(n), n.appendChild(t)
          }
          let e = s.ce('div', { style: 'padding: 16px 16px 14px 16px' });
            let n = s.ce('div', {
              class: 'widgets-group user__tools_last',
              id: 'SP_PLUS_BOTTOM_DIVB'
            });
            let a = s.ce('div', {
              class: 'widgets-group user__tools_last',
              style: 'margin: unset'
            });
            let l = s.ce('div', { class: 'text-input__wrap' });
            let o = s.ce('div', { class: 'cl' });
            let p = s.ce('button', {
              class: 'user__tools-link table__cell sp_btn',
              style: 'border-right: none; border-top: 1px solid #cdd4e1',
              html: `
                    <span class="sp sp-ok-darkblue"></span>
                    <span style="color: #0E3C87; padding-left: 10px">Применить изменения</span>
                `,
              onclick: () => {
                var e
                let t,
                  n = s.qs('#SP_BACKUP_JSON').value
                try {
                  ;(t = JSON.parse(n)),
                    null === (e = s.qs('#SP_PLUS_ALERT')) || void 0 === e
                      ? void 0
                      : e.remove(),
                    s.setCookie('SP_PLUS_SET', n),
                    s.messageBox(
                      '\u0418\u043C\u043F\u043E\u0440\u0442 \u0438 \u044D\u043A\u0441\u043F\u043E\u0440\u0442 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A',
                      '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0431\u044B\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B',
                      !0,
                      3
                    )
                } catch (t) {
                  s.messageBox(
                    '\u041E\u0448\u0438\u0431\u043A\u0430 \u0440\u0430\u0437\u0431\u043E\u0440\u0430 \u0444\u0430\u0439\u043B\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A',
                    t,
                    !0
                  )
                }
              }
            });
            let c = s.ce('input', {
              id: 'SP_IMPORT',
              attr: { type: 'file', accept: 'application/JSON' },
              style: 'display: none',
            })
          c.addEventListener(
            'change',
            () => {
              let t;
                let n = s.qs('#SP_BACKUP_JSON');
                let i = s.qs('#SP_IMPORT').files[0]
              const e = new FileReader()
              ;(e.onload = (() => (i) => {
                try {
                  ;(t = JSON.parse(i.target.result)),
                  s.setCookie('SP_PLUS_SET', i.target.result),
                  (n.value = r(t, null, 4)),
                  s.messageBox(
                    '\u0418\u043C\u043F\u043E\u0440\u0442 \u0438 \u044D\u043A\u0441\u043F\u043E\u0440\u0442 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A',
                    '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0431\u044B\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B',
                    !0,
                    3
                  )
                } catch (t) {
                  s.messageBox(
                    '\u041E\u0448\u0438\u0431\u043A\u0430 \u0440\u0430\u0437\u0431\u043E\u0440\u0430 \u0444\u0430\u0439\u043B\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A',
                    t,
                    !0,
                  )
                }
              })(i)),
              e.readAsText(i)
            },
            !1,
          )
          let u = s.ce('button', {
              class: 'user__tools-link table__cell sp_btn_line sp_btn-list',
              html: `
                    <span class="sp sp-restore-g"></span>
                    <span style="color: #3CA93C; padding-left: 10px">Импорт</span>
                `,
              onclick: () => s.qs('#SP_IMPORT').click(),
            });
            let _ = s.ce('button', {
              class: 'user__tools-link sp_btn-list',
              html: `
                    <span class="sp sp-download-blue"></span>
                    <span style="color: #57A3EA; padding-left: 10px">Экспорт</span>
                `,
              onclick: () => {
                s.confirmBox(
                  '\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0444\u0430\u0439\u043B \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A?',
                  !1,
                  () => {
                    let e = s.ce('a', {
                      attr: {
                        href: URL.createObjectURL(
                          new Blob([r(i._SETTINGS, null, 4)], {
                            type: 'text/plain'
                          })
                        ),
                        download: `spaces-plus-${+new Date()}.json`
                      }
                    })
                    e.click(), e.remove()
                  }
                )
              }
            });
            let f = s.ce('textarea', {
              class: 'text-input',
              id: 'SP_BACKUP_JSON',
              rows: 20,
              html: r(i._SETTINGS, null, 4),
            })
          d.appendChild(e),
          e.appendChild(l),
          l.appendChild(o),
          o.appendChild(f),
          a.appendChild(p),
          d.appendChild(a),
          n.appendChild(c),
          n.appendChild(u),
          n.appendChild(_),
          null === (t = s.qs('#SP_PLUS_ABOUT').previousElementSibling)
            || void 0 === t
            ? void 0
            : t.after(n)
        } catch (t) {
          s.error('settingsBackupMenu.ts', t)
        }
    }
  },
  function (e) {
    function t(e) {
      return (
        (a.lastIndex = 0),
        a.test(e)
          ? `"${ 
            e.replace(a, function (e) {
              var t = l[e]
              return 'string' == typeof t
                ? t
                : '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4)
            }) 
            }"`
          : `"${  e  }"`
      )
    }
    function n(e, a, l) {
      let o;
        var p;
        var c;
        var u;
        var _;
        var f = s;
        var S = a[e]
      switch (
        (S
          && 'object' == typeof S
          && 'function' == typeof S.toJSON
          && (S = S.toJSON(e)),
        typeof r == 'function' && (S = r.call(a, e, S)),
        typeof S)
      ) {
        case 'string':
          return t(S)
        case 'number':
          return isFinite(S) ? `${S  }` : 'null'
        case 'boolean':
        case 'null':
          return `${S  }`
        case 'object':
          if (!S) return 'null'
          if (
            ((s += d),
            (_ = []),
            Object.prototype.toString.apply(S) === '[object Array]')
          ) {
            for (u = S.length, o = 0; o < u; o += 1) _[o] = n(o, S, l) || 'null'
            return (
              (c
                = 0 === _.length
                  ? '[]'
                  : s
                    ? s.length + _.join(', ').length + 4 > l
                      ? `[\n${  s  }${_.join(',\n' + s)  }\n${  f  }]`
                      : `[ ${  _.join(', ')  } ]`
                    : `[${  _.join(',')  }]`),
              (s = f),
              c
            )
          }
          if (r && typeof r == 'object') for (u = r.length, o = 0; o < u; o += 1) 'string' == typeof r[o]
                && ((p = r[o]),
                (c = n(p, S, l)),
                c && _.push(t(p) + (s ? ': ' : ':') + c))
          else for (p in S) Object.prototype.hasOwnProperty.call(S, p)
                && ((c = n(p, S, l)), c && _.push(t(p) + (s ? ': ' : ':') + c))
          return (
            (c
              = 0 === _.length
                ? '{}'
                : s
                  ? s.length + _.join(', ').length + 4 > l
                    ? `{\n${  s  }${_.join(',\n' + s)  }\n${  f  }}`
                    : `{ ${  _.join(', ')  } }`
                  : `{${  _.join(',')  }}`),
            (s = f),
            c
          )
      }
    }
    var s;
      var d;
      var r;
      var a =
        /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
      var l = {
        '': '\\b',
        '	': '\\t',
        '\n': '\\n',
        '': '\\f',
        '\r': '\\r',
        '"': '\\"',
        '\\': '\\\\',
      }
    e.exports = function (e, t, a, l) {
      let o
      if (((s = ''), (d = ''), l || (l = 0), typeof l != 'number')) throw new Error('beaufifier: limit must be a number')
      if (typeof a == 'number') { for (o = 0; o < a; o += 1) d += ' '
}
      else { 'string' == typeof a && (d = a)
}
      if (
        ((r = t),
        t
          && 'function' != typeof t
          && (typeof t != 'object' || typeof t.length != 'number'))      ) throw new Error('beautifier: wrong replacer parameter')
      return n('', { '': e }, l)
    }
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.settingsRecentSmiles = void 0)
    const s = n(0);
      const i = n(2)
    t.settingsRecentSmiles = (t) => {
      let e
      let n = s.ce('div', {
          id: 'SP_RECENTS_SETTINGS',
          class: 'sp_settings-wrap',
        });
        let d = s.ce('label', {
          html: '\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u0441\u043C\u0430\u0439\u043B\u0438\u043A\u043E\u0432:<div class="label__desc">\u043E\u0442 10 \u0434\u043E 60</div>',
          class: 'label'
        });
        let r = s.ce('input', {
          type: 'text',
          class: 'text-input',
          size: 4,
          attr: { maxlength: 2 },
          value: i._SETTINGS.recentSmiles.max,
        })
      r.addEventListener('change', (t) => {
        ;/^([1-5][0-9]|60)$/.test(t.target.value)
          ? (s.setSettings('recentSmiles.max', t.target.value),
            r.classList.remove('sp-input-error'))
          : r.classList.add('sp-input-error')
      }),
      n.appendChild(d),
      n.appendChild(r),
      null === (e = t.parentElement) || void 0 === e ? void 0 : e.after(n)
    }
  },

])
