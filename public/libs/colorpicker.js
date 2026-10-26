!(function (U, Z) {
  let r
  let o = '__instance__'
  let c = 'firstChild'
  let s = setTimeout
  function h(t) {
    return void 0 !== t
  }
  function tt(t) {
    return typeof t == 'object'
  }
  function u(t) {
    return Object.keys(t).length
  }
  function et(t, e, n) {
    return t < e ? e : n < t ? n : t
  }
  function e(t, e) {
    return Number.parseInt(t, e || 10)
  }
  function d(t) {
    return Math.round(t)
  }
  function nt(t) {
    let e
    let n
    let r
    let i
    let o
    let c
    let s
    let u
    let a = +t[0]
    let f = +t[1]
    let l = +t[2]
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
      d(255 * r),
    ]
  }
  function rt(t) {
    return n(nt(t))
  }
  function i(t) {
    let e
    let n = +t[0]
    let r = +t[1]
    let i = +t[2]
    let o = Math.max(n, r, i)
    let c = Math.min(n, r, i)
    let s = o - c
    let u = o === 0 ? 0 : s / o
    let a = o / 255
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
      a,
    ]
  }
  function n(t) {
    let e = +t[2] | (+t[1] << 8) | (+t[0] << 16)
    return (e = `000000${e.toString(16)}`).slice(-6)
  }
  function a(t) {
    return i(f(t))
  }
  function f(t) {
    return t.length === 3 && (t = t.replace(/./g, '$&$&')), [
      e(t[0] + t[1], 16),
      e(t[2] + t[3], 16),
      e(t[4] + t[5], 16),
    ]
  }
  function l(t) {
    return [
      t[0] / 360,
      t[1] / 100,
      t[2] / 100,
    ]
  }
  function v(t) {
    return [
      d(360 * t[0]),
      d(100 * t[1]),
      d(100 * t[2]),
    ]
  }
  ;((r = U.CP
    = function (g, y, b) {
      let m = Z.body
      let l = Z.documentElement
      let x = this
      let e = U.CP
      let n = !1
      let i = {}
      let k = Z.createElement('div')
      let H = 'touchstart mousedown'
      let w = 'touchmove mousemove'
      let _ = 'touchend mouseup'
      let E = 'orientationchange resize'
      if (!(x instanceof e)) return new e(g, y)
      function S(t, e, n) {
        for (let r = 0, i = (t = t.split(/\s+/)).length; r < i; ++r) e.addEventListener(t[r], n, !1)
      }
      function X(t, e, n) {
        for (let r = 0, i = (t = t.split(/\s+/)).length; r < i; ++r) e.removeEventListener(t[r], n)
      }
      function B(t, e) {
        let n = 'touches'
        let r = 'clientX'
        let i = 'clientY'
        let o = e[n] ? e[n][0][r] : e[r]
        let c = e[n] ? e[n][0][i] : e[i]
        let s = d(t)
        return { x: o - s.l, y: c - s.t }
      }
      function d(t) {
        let e, n, r
        return (
          (n
            = t === U
              ? ((e = U.pageXOffset || l.scrollLeft),
                U.pageYOffset || l.scrollTop)
              : ((e = (r = t.getBoundingClientRect()).left), r.top)),
          { l: e, t: n }
        )
      }
      function R(t, e) {
        for (; (t = t.parentElement) && t !== e;);
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
        if (h(n)) {
          h(i[t][n]) && i[t][n].apply(x, e)
        } else {
          for (let r in i[t]) i[t][r].apply(x, e)
        }
        return x
      }
      ;(e[o][g.id || g.name || u(e[o])] = x),
      (h(y) && !0 !== y) || (y = H),
      M(
        e.parse(
          g.getAttribute('data-color') || g.value || [
            0,
            1,
            1,
          ],
        ),
      ),
      (k.className = 'colorpicker'),
      (k.innerHTML
        = '<table style="margin: auto;"><tbody><tr><td><div class="colorpicker-rect"><div><div class="colorpicker-gradient_cursor"></div></div></div></td><td><div class="colorpicker-spectrum"><div class="colorpicker-spectrum_cursor"></div></div></td><td class="colorpicker-big" style="display: none;"><div class="normal-stnd">Выбранный цвет:</div><div class="colorpicker-row"><div class="colorpicker-color" style="background: rgb(70, 88, 187);"></div></div><div class="colorpicker-row"><div class="text-input__wrap colorpicker-pad"><input type="text" class="text-input" autocomplete="off" name="color" value="" maxlength="64"></div></div></td></tr></tbody></table>')
      let L
      let t = k[c][c][c].children
      let j = G([
        0,
        1,
        1,
      ])
      let O = t[1][c]
      let T = t[0][c]
      let N = O[c]
      let P = T[c][c]
      let W = 0
      let Y = 0
      let z = 0
      let A = 0
      let v = 0
      let p = 0
      let D = 0
      let I = 0
      let q = rt(j)
      function F(t, e) {
        ;(t && t !== 'h') || $('change:h', e),
        (t && t !== 'sv') || $('change:sv', e),
        $('change', e)
      }
      function J() {
        return k.parentNode
      }
      function K(t, e) {
        t || ((b || e || m).appendChild(k), (x.visible = !0)),
        (D = C(k).w),
        (I = C(k).h)
        let n = C(T)
        let r = C(P)
        let s = C(O).h
        let u = n.w
        let a = n.h
        let f = C(N).h
        let l = r.w
        let d = r.h
        if (t) {
          function i(t) {
            let e = t.target
            let n = e === g || R(e, g) === g
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
        } else {
          Q()
        }
        function v(t) {
          nt(j)
          let e = nt([
            j[0],
            1,
            1,
          ])
          ;(T.style.backgroundColor = `rgb(${e.join(',')})`), M(j), V(t)
        }
        function o(t) {
          let e, n, r, i, o, c
          z
          && ((n = et(B(O, (e = t)).y, 0, s)),
          (j[0] = (s - n) / s),
          (N.style.top = `${n - f / 2}px`),
          v(e),
          (q = rt(j)),
          W || ($('drag:h', [q, x]), $('drag', [q, x]), F('h', [q, x]))),
          A
          && ((o = et((i = B(T, (r = t))).x, 0, u)),
          (c = et(i.y, 0, a)),
          (j[1] = 1 - (u - o) / u),
          (j[2] = (a - c) / a),
          (P.style.right = `${u - o - l / 2}px`),
          (P.style.top = `${c - d / 2}px`),
          v(r),
          (q = rt(j)),
          Y || ($('drag:sv', [q, x]), $('drag', [q, x]), F('sv', [q, x]))),
          (Y = W = 0)
        }
        function c(t) {
          let e = t.target
          let n = z ? 'h' : 'sv'
          let r = [rt(j), x]
          let i = e === g || R(e, g) === g
          let o = e === k || R(e, k) === k
          i || o
            ? o && ($(`stop:${n}`, r), $('stop', r), F(n, r))
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
          (N.style.top = `${s - f / 2 - s * j[0]}px`),
          (P.style.right = `${u - l / 2 - u * j[1]}px`),
          (P.style.top = `${a - d / 2 - a * j[2]}px`)
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
        s(() => {
          let t = [rt(j), x]
          $('create', t), F(0, t)
        }, 0),
        (x.fit = function (t) {
          let e = C(U)
          let n = C(l)
          let r = e.w - n.w
          let i = e.h - l.clientHeight
          let o = d(U)
          let c = d(g)
          if (((v = c.l + o.l), (p = c.t + o.t + C(g).h), tt(t))) {
            h(t[0]) && (v = t[0]), h(t[1]) && (p = t[1])
          } else {
            let s = o.l
            let u = o.t
            let a = o.l + e.w - D - r
            let f = o.t + e.h - I - i
            ;(v = et(v, s, a) >> 0), (p = et(p, u, f) >> 0)
          }
          return (
            (k.style.left = `${v}px`),
            (k.style.top = `${p}px`),
            $('fit', [x]),
            x
          )
        }),
        (x.set = function (t) {
          return h(t)
            ? (typeof t == 'string' && (t = e.parse(t)), M(t), L(), x)
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
        () => {
          let t
          let e = r[o]
          for (t in e) n(e[t], t, e)
        },
        t === 0 ? 0 : t || 1,
      ),
      r
    )
  }),
  (r.parse = function (t) {
    if (tt(t)) return t
    let e = /\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i.exec(t)
    let n = /\s*hsv\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)\s*$/i.exec(t)
    return t[0] === '#' && /^#([\da-f]{3}|[\da-f]{6})$/i.test(t)
      ? a(t.slice(1))
      : n
        ? l([
            +n[1],
            +n[2],
            +n[3],
          ])
        : e
          ? i([
              +e[1],
              +e[2],
              +e[3],
            ])
          : [
              0,
              1,
              1,
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
      e[2] / 255,
    ]
    let e
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
