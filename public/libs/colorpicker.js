!(function (U, Z) {
  var r,
    o = '__instance__',
    c = 'firstChild',
    s = setTimeout
  function h(t) {
    return void 0 !== t
  }
  function tt(t) {
    return 'object' == typeof t
  }
  function u(t) {
    return Object.keys(t).length
  }
  function et(t, e, n) {
    return t < e ? e : n < t ? n : t
  }
  function e(t, e) {
    return parseInt(t, e || 10)
  }
  function d(t) {
    return Math.round(t)
  }
  function nt(t) {
    var e,
      n,
      r,
      i,
      o,
      c,
      s,
      u,
      a = +t[0],
      f = +t[1],
      l = +t[2]
    switch (
      ((c = l * (1 - f)),
      (s = (s = l * (1 - (o = 6 * a - (i = Math.floor(6 * a))) * f)) || 0),
      (u = (u = l * (1 - (1 - o) * f)) || 0),
      (i = i || 0) % 6)
    ) {
      case 0:
        ;(e = l), (n = u), (r = c)
        break
      case 1:
        ;(e = s), (n = l), (r = c)
        break
      case 2:
        ;(e = c), (n = l), (r = u)
        break
      case 3:
        ;(e = c), (n = s), (r = l)
        break
      case 4:
        ;(e = u), (n = c), (r = l)
        break
      case 5:
        ;(e = l), (n = c), (r = s)
    }
    return [
      d(255 * e),
      d(255 * n),
      d(255 * r)]
  }
  function rt(t) {
    return n(nt(t))
  }
  function i(t) {
    var e,
      n = +t[0],
      r = +t[1],
      i = +t[2],
      o = Math.max(n, r, i),
      c = Math.min(n, r, i),
      s = o - c,
      u = 0 === o ? 0 : s / o,
      a = o / 255
    switch (o) {
      case c:
        e = 0
        break
      case n:
        ;(e = r - i + s * (r < i ? 6 : 0)), (e /= 6 * s)
        break
      case r:
        ;(e = i - n + 2 * s), (e /= 6 * s)
        break
      case i:
        ;(e = n - r + 4 * s), (e /= 6 * s)
    }
    return [
      e,
      u,
      a
    ]
  }
  function n(t) {
    var e = +t[2] | (+t[1] << 8) | (+t[0] << 16)
    return (e = '000000' + e.toString(16)).slice(-6)
  }
  function a(t) {
    return i(f(t))
  }
  function f(t) {
    return 3 === t.length && (t = t.replace(/./g, '$&$&')), [
        e(t[0] + t[1], 16),
        e(t[2] + t[3], 16),
        e(t[4] + t[5], 16)]
  }
  function l(t) {
    return [
      t[0] / 360,
      t[1] / 100,
      t[2] / 100
    ]
  }
  function v(t) {
    return [
      d(360 * t[0]),
      d(100 * t[1]),
      d(100 * t[2])]
  }
  ;((r = U.CP =
    function (g, y, b) {
      var m = Z.body,
        l = Z.documentElement,
        x = this,
        e = U.CP,
        n = !1,
        i = {},
        k = Z.createElement('div'),
        H = 'touchstart mousedown',
        w = 'touchmove mousemove',
        _ = 'touchend mouseup',
        E = 'orientationchange resize'
      if (!(x instanceof e)) return new e(g, y)
      function S(t, e, n) {
        for (var r = 0, i = (t = t.split(/\s+/)).length; r < i; ++r)
          e.addEventListener(t[r], n, !1)
      }
      function X(t, e, n) {
        for (var r = 0, i = (t = t.split(/\s+/)).length; r < i; ++r)
          e.removeEventListener(t[r], n)
      }
      function B(t, e) {
        var n = 'touches',
          r = 'clientX',
          i = 'clientY',
          o = e[n] ? e[n][0][r] : e[r],
          c = e[n] ? e[n][0][i] : e[i],
          s = d(t)
        return { x: o - s.l, y: c - s.t }
      }
      function d(t) {
        var e, n, r
        return (
          (n =
            t === U
              ? ((e = U.pageXOffset || l.scrollLeft),
                U.pageYOffset || l.scrollTop)
              : ((e = (r = t.getBoundingClientRect()).left), r.top)),
          { l: e, t: n }
        )
      }
      function R(t, e) {
        for (; (t = t.parentElement) && t !== e; );
        return t
      }
      function V(t) {
        t && t.preventDefault()
      }
      function C(t) {
        return t === U
          ? { w: U.innerWidth, h: U.innerHeight }
          : { w: t.offsetWidth, h: t.offsetHeight }
      }
      function G(t) {
        return n || (!!h(t) && t)
      }
      function M(t) {
        n = t
      }
      function $(t, e, n) {
        if (!h(i[t])) return x
        if (h(n)) h(i[t][n]) && i[t][n].apply(x, e)
        else for (var r in i[t]) i[t][r].apply(x, e)
        return x
      }
      ;(e[o][g.id || g.name || u(e[o])] = x),
        (h(y) && !0 !== y) || (y = H),
        M(
          e.parse(
            g.getAttribute('data-color') || g.value || [
                0,
                1,
                1
              ]
          )
        ),
        (k.className = 'colorpicker'),
        (k.innerHTML =
          '<table style="margin: auto;"><tbody><tr><td><div class="colorpicker-rect"><div><div class="colorpicker-gradient_cursor"></div></div></div></td><td><div class="colorpicker-spectrum"><div class="colorpicker-spectrum_cursor"></div></div></td><td class="colorpicker-big" style="display: none;"><div class="normal-stnd">Выбранный цвет:</div><div class="colorpicker-row"><div class="colorpicker-color" style="background: rgb(70, 88, 187);"></div></div><div class="colorpicker-row"><div class="text-input__wrap colorpicker-pad"><input type="text" class="text-input" autocomplete="off" name="color" value="" maxlength="64"></div></div></td></tr></tbody></table>')
      var L,
        t = k[c][c][c].children,
        j = G([
          0,
          1,
          1
        ]),
        O = t[1][c],
        T = t[0][c],
        N = O[c],
        P = T[c][c],
        W = 0,
        Y = 0,
        z = 0,
        A = 0,
        v = 0,
        p = 0,
        D = 0,
        I = 0,
        q = rt(j)
      function F(t, e) {
        ;(t && 'h' !== t) || $('change:h', e),
          (t && 'sv' !== t) || $('change:sv', e),
          $('change', e)
      }
      function J() {
        return k.parentNode
      }
      function K(t, e) {
        t || ((b || e || m).appendChild(k), (x.visible = !0)),
          (D = C(k).w),
          (I = C(k).h)
        var n = C(T),
          r = C(P),
          s = C(O).h,
          u = n.w,
          a = n.h,
          f = C(N).h,
          l = r.w,
          d = r.h
        if (t) {
          function i(t) {
            var e = t.target,
              n = e === g || R(e, g) === g
            n ? K() : x.exit(), $(n ? 'enter' : 'exit', [x])
          }
          ;(k.style.left = k.style.top = '-9999px'),
            !1 !== y && S(y, g, i),
            (x.create = function () {
              return K(1), $('create', [x]), x
            }),
            (x.destroy = function () {
              return (
                !1 !== y && X(y, g, i), x.exit(), M(!1), $('destroy', [x]), x
              )
            })
        } else Q()
        function v(t) {
          nt(j)
          var e = nt([
            j[0],
            1,
            1
          ])
          ;(T.style.backgroundColor = 'rgb(' + e.join(',') + ')'), M(j), V(t)
        }
        function o(t) {
          var e, n, r, i, o, c
          z &&
            ((n = et(B(O, (e = t)).y, 0, s)),
            (j[0] = (s - n) / s),
            (N.style.top = n - f / 2 + 'px'),
            v(e),
            (q = rt(j)),
            W || ($('drag:h', [q, x]), $('drag', [q, x]), F('h', [q, x]))),
            A &&
              ((o = et((i = B(T, (r = t))).x, 0, u)),
              (c = et(i.y, 0, a)),
              (j[1] = 1 - (u - o) / u),
              (j[2] = (a - c) / a),
              (P.style.right = u - o - l / 2 + 'px'),
              (P.style.top = c - d / 2 + 'px'),
              v(r),
              (q = rt(j)),
              Y || ($('drag:sv', [q, x]), $('drag', [q, x]), F('sv', [q, x]))),
            (Y = W = 0)
        }
        function c(t) {
          var e = t.target,
            n = z ? 'h' : 'sv',
            r = [rt(j), x],
            i = e === g || R(e, g) === g,
            o = e === k || R(e, k) === k
          i || o
            ? o && ($('stop:' + n, r), $('stop', r), F(n, r))
            : J() && !1 !== y && (x.exit(), $('exit', [x]), F(0, r)),
            (A = z = 0)
        }
        function p(t) {
          ;(z = W = 1),
            o(t),
            V(t),
            $('start:h', [q, x]),
            $('start', [q, x]),
            F('h', [q, x])
        }
        function h(t) {
          ;(A = Y = 1),
            o(t),
            V(t),
            $('start:sv', [q, x]),
            $('start', [q, x]),
            F('sv', [q, x])
        }
        ;(L = function () {
          ;(j = G(j)),
            v(),
            (N.style.top = s - f / 2 - s * j[0] + 'px'),
            (P.style.right = u - l / 2 - u * j[1] + 'px'),
            (P.style.top = a - d / 2 - a * j[2] + 'px')
        }),
          (x.exit = function (t) {
            return (
              J() && (J().removeChild(k), (x.visible = !1)),
              X(H, O, p),
              X(H, T, h),
              X(w, Z, o),
              X(_, Z, c),
              X(E, U, Q),
              x
            )
          }),
          L(),
          t || (S(H, O, p), S(H, T, h), S(w, Z, o), S(_, Z, c), S(E, U, Q))
      }
      function Q() {
        return x.fit()
      }
      return (
        K(1),
        s(function () {
          var t = [rt(j), x]
          $('create', t), F(0, t)
        }, 0),
        (x.fit = function (t) {
          var e = C(U),
            n = C(l),
            r = e.w - n.w,
            i = e.h - l.clientHeight,
            o = d(U),
            c = d(g)
          if (((v = c.l + o.l), (p = c.t + o.t + C(g).h), tt(t)))
            h(t[0]) && (v = t[0]), h(t[1]) && (p = t[1])
          else {
            var s = o.l,
              u = o.t,
              a = o.l + e.w - D - r,
              f = o.t + e.h - I - i
            ;(v = et(v, s, a) >> 0), (p = et(p, u, f) >> 0)
          }
          return (
            (k.style.left = v + 'px'),
            (k.style.top = p + 'px'),
            $('fit', [x]),
            x
          )
        }),
        (x.set = function (t) {
          return h(t)
            ? ('string' == typeof t && (t = e.parse(t)), M(t), L(), x)
            : G()
        }),
        (x.get = function (t) {
          return G(t)
        }),
        (x.target = g),
        (x.picker = k),
        (x.visible = !1),
        (x.on = function (t, e, n) {
          return h(t)
            ? h(e)
              ? (h(i[t]) || (i[t] = {}),
                h(n) || (n = u(i[t])),
                (i[t][n] = e),
                x)
              : i[t]
            : i
        }),
        (x.off = function (t, e) {
          return h(t) ? (h(e) ? delete i[t][e] : (i[t] = {})) : (i = {}), x
        }),
        (x.fire = $),
        (x.hooks = i),
        (x.enter = function (t) {
          return K(0, t)
        }),
        x
      )
    }).version = '1.3.10'),
    (r[o] = {}),
    (r.each = function (n, t) {
      return (
        s(
          function () {
            var t,
              e = r[o]
            for (t in e) n(e[t], t, e)
          },
          0 === t ? 0 : t || 1
        ),
        r
      )
    }),
    (r.parse = function (t) {
      if (tt(t)) return t
      var e = /\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i.exec(t),
        n = /\s*hsv\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)\s*$/i.exec(t)
      return '#' === t[0] && t.match(/^#([\da-f]{3}|[\da-f]{6})$/i)
        ? a(t.slice(1))
        : n
          ? l([
              +n[1],
              +n[2],
              +n[3]
            ])
          : e
            ? i([
                +e[1],
                +e[2],
                +e[3]
              ])
            : [
                0,
                1,
                1
              ]
    }),
    (r._HSV2RGB = nt),
    (r._HSV2HEX = rt),
    (r._RGB2HSV = i),
    (r._HEX2HSV = a),
    (r._HEX2RGB = function (t) {
      return [
        (e = f(t))[0] / 255,
        e[1] / 255,
        e[2] / 255
      ]
      var e
    }),
    (r.HSV2RGB = function (t) {
      return nt(l(t))
    }),
    (r.HSV2HEX = function (t) {
      return rt(l(t))
    }),
    (r.RGB2HSV = function (t) {
      return v(i(t))
    }),
    (r.RGB2HEX = n),
    (r.HEX2HSV = function (t) {
      return v(a(t))
    }),
    (r.HEX2RGB = f)
})(window, document)
