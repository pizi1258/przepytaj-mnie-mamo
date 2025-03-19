(function(fe) {
  typeof define == "function" && define.amd ? define(fe) : fe();
})(function() {
  "use strict";
  var Xd = Object.defineProperty;
  var Zd = (fe, P, Qe) =>
    P in fe
      ? Xd(fe, P, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Qe,
        })
      : (fe[P] = Qe);
  var Be = (fe, P, Qe) =>
    Zd(fe, typeof P != "symbol" ? P + "" : P, Qe);
  var fe,
    P,
    Qe,
    Fo,
    et,
    Bo,
    Uo,
    Wo,
    Vo,
    yn,
    bn,
    wn,
    Ho,
    xt = {},
    zo = [],
    ja = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    Ct = Array.isArray;
  function Se(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function xn(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function H(e, t, n) {
    var o,
      r,
      i,
      a = {};
    for (i in t)
      i == "key"
        ? (o = t[i])
        : i == "ref"
        ? (r = t[i])
        : (a[i] = t[i]);
    if (
      (arguments.length > 2 &&
        (a.children = arguments.length > 3 ? fe.call(arguments, 2) : n),
      typeof e == "function" && e.defaultProps != null)
    )
      for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
    return St(e, a, o, r, null);
  }
  function St(e, t, n, o, r) {
    var i = {
      type: e,
      props: t,
      key: n,
      ref: o,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: r ?? ++Qe,
      __i: -1,
      __u: 0,
    };
    return r == null && P.vnode != null && P.vnode(i), i;
  }
  function jo() {
    return { current: null };
  }
  function ie(e) {
    return e.children;
  }
  function ye(e, t) {
    this.props = e;
    this.context = t;
  }
  function at(e, t) {
    if (t == null) return e.__ ? at(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
    return typeof e.type == "function" ? at(e) : null;
  }
  function qo(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return qo(e);
    }
  }
  function Cn(e) {
    (!e.__d && (e.__d = !0) && et.push(e) && !$t.__r++ ||
      Bo !== P.debounceRendering) &&
      ((Bo = P.debounceRendering) || Uo)($t);
  }
  function $t() {
    for (var e, t, n, o, r, i, a, s = 1; et.length; )
      et.length > s && et.sort(Wo),
        (e = et.shift()),
        (s = et.length),
        e.__d &&
          ((n = void 0),
          (r = (o = (t = e).__v).__e),
          (i = []),
          (a = []),
          t.__P &&
            ((n = Se({}, o)),
            (n.__v = o.__v + 1),
            P.vnode && P.vnode(n),
            Sn(
              t.__P,
              n,
              o,
              t.__n,
              t.__P.namespaceURI,
              32 & o.__u ? [r] : null,
              i,
              r ?? at(o),
              !!(32 & o.__u),
              a
            ),
            (n.__v = o.__v),
            (n.__.__k[n.__i] = n),
            Zo(i, n, a),
            n.__e != r && qo(n)));
    $t.__r = 0;
  }
  function Ko(e, t, n, o, r, i, a, s, c, l, d) {
    var u,
      p,
      h,
      v,
      f,
      _,
      y = (o && o.__k) || zo,
      g = t.length;
    for (
      c = qa(n, t, y, c, g), u = 0;
      u < g;
      u++
    )
      (h = n.__k[u]) != null &&
        ((p = h.__i === -1 ? xt : y[h.__i] || xt),
        (h.__i = u),
        (_ = Sn(e, h, p, r, i, a, s, c, l, d)),
        (v = h.__e),
        h.ref &&
          p.ref != h.ref &&
          (p.ref && kn(p.ref, null, h), d.push(h.ref, h.__c || v, h)),
        f == null && v != null && (f = v),
        4 & h.__u || p.__k === h.__k
          ? (c = Yo(h, c, e))
          : typeof h.type == "function" && _ !== void 0
          ? (c = _)
          : v && (c = v.nextSibling),
        (h.__u &= -7));
    return (n.__e = f), c;
  }
  function qa(e, t, n, o, r) {
    var i,
      a,
      s,
      c,
      l,
      d = n.length,
      u = d,
      p = 0;
    for (e.__k = new Array(r), i = 0; i < r; i++)
      (a = t[i]) != null &&
      typeof a != "boolean" &&
      typeof a != "function"
        ? ((c = i + p),
          (a =
            e.__k[i] =
            typeof a == "string" ||
            typeof a == "number" ||
            typeof a == "bigint" ||
            a.constructor == String
              ? St(null, a, null, null, null)
              : Ct(a)
              ? St(ie, { children: a }, null, null, null)
              : a.constructor === void 0 && a.__b > 0
              ? St(
                  a.type,
                  a.props,
                  a.key,
                  a.ref ? a.ref : null,
                  a.__v
                )
              : a).__ = e),
          (a.__b = e.__b + 1),
          (s = null),
          (l = a.__i = Ka(a, n, c, u)) !== -1 &&
            (u--, (s = n[l]) && (s.__u |= 2)),
          (s == null || s.__v === null) &&
            (l == -1
              ? r > d
                ? p--
                : r < d && p++
              : typeof a.type != "function" && (a.__u |= 4)))
        : (e.__k[i] = null);
    if (u)
      for (i = 0; i < d; i++)
        (s = n[i]) != null &&
          !(2 & s.__u) &&
          (s.__e == o && (o = at(s)), Qo(s, s));
    return o;
  }
  function Yo(e, t, n) {
    var o, r;
    if (typeof e.type == "function") {
      for (o = e.__k, r = 0; o && r < o.length; r++)
        o[r] && ((o[r].__ = e), (t = Yo(o[r], t, n)));
      return t;
    }
    return (
      e.__e != t &&
        (t && e.type && !n.contains(t) && (t = at(e)),
        n.insertBefore(e.__e, t || null),
        (t = e.__e)),
      t
    );
  }
  function Te(e, t) {
    return (
      (t = t || []),
      e == null ||
        typeof e == "boolean" ||
        (Ct(e)
          ? e.some(function (n) {
              Te(n, t);
            })
          : t.push(e)),
      t
    );
  }
  function Ka(e, t, n, o) {
    var r,
      i,
      a = e.key,
      s = e.type,
      c = t[n];
    if (
      (c === null && e.key == null) ||
      (c && a == c.key && s === c.type && !(2 & c.__u))
    )
      return n;
    if (o > (c != null && !(2 & c.__u) ? 1 : 0))
      for (r = n - 1, i = n + 1; r >= 0 || i < t.length; ) {
        if (
          r >= 0 &&
          (c = t[r]) &&
          !(2 & c.__u) &&
          a == c.key &&
          s === c.type
        )
          return r;
        r--;
        if (
          i < t.length &&
          (c = t[i]) &&
          !(2 & c.__u) &&
          a == c.key &&
          s === c.type
        )
          return i;
        i++;
      }
    return -1;
  }
  function Go(e, t, n) {
    t[0] == "-"
      ? e.setProperty(t, n ?? "")
      : (e[t] =
          n == null
            ? ""
            : typeof n != "number" || ja.test(t)
            ? n
            : n + "px");
  }
  function Ft(e, t, n, o, r) {
    var i;
    e: if (t == "style")
      if (typeof n == "string") e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o) n && t in n || Go(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Go(e.style, t, n[t]);
      }
    else if (t[0] == "o" && t[1] == "n")
      (i = t != (t = t.replace(Vo, "$1"))),
        (t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + i] = n),
        n
          ? o
            ? (n.t = o.t)
            : ((n.t = yn), e.addEventListener(t, i ? wn : bn, i))
          : e.removeEventListener(t, i ? wn : bn, i);
    else {
      if (r == "http://www.w3.org/2000/svg")
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        t != "width" &&
        t != "height" &&
        t != "href" &&
        t != "list" &&
        t != "form" &&
        t != "tabIndex" &&
        t != "download" &&
        t != "rowSpan" &&
        t != "colSpan" &&
        t != "role" &&
        t != "popover" &&
        t in e
      )
        try {
          e[t] = n ?? "";
          break e;
        } catch {}
      typeof n == "function" ||
        (n == null || (n === !1 && t[4] != "-")
          ? e.removeAttribute(t)
          : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
    }
  }
  function Xo(e) {
    return function (t) {
      if (this.l) {
        var n = this.l[t.type + e];
        if (t.u == null) t.u = yn++;
        else if (t.u < n.t) return;
        return n(P.event ? P.event(t) : t);
      }
    };
  }
  function Sn(e, t, n, o, r, i, a, s, c, l) {
    var d, u, p, h, v, f, _, y, g, b, w, x, E, S, A, M, F, L = t.type;
    if (t.constructor !== void 0) return null;
    128 & n.__u && ((c = !!(32 & n.__u)), (i = [s = t.__e = n.__e])),
      (d = P.__b) && d(t);
    e: if (typeof L == "function")
      try {
        if (
          ((y = t.props),
          (g = "prototype" in L && L.prototype.render),
          (b = (d = L.contextType) && o[d.__c]),
          (w = d ? (b ? b.props.value : d.__) : o),
          n.__c ? (_ = (u = t.__c = n.__c).__ = u.__E) : g
          ? (t.__c = u = new L(y, w))
          : ((t.__c = u = new ye(y, w)),
            (u.constructor = L),
            (u.render = Ga)),
          b && b.sub(u),
          (u.props = y),
          u.state || (u.state = {}),
          (u.context = w),
          (u.__n = o),
          (p = u.__d = !0),
          (u.__h = []),
          u._sb = []),
        g && u.__s == null && (u.__s = u.state),
        g &&
          L.getDerivedStateFromProps != null &&
          (u.__s == u.state && (u.__s = Se({}, u.__s)),
          Se(u.__s, L.getDerivedStateFromProps(y, u.__s))),
        (h = u.props),
        (v = u.state),
        (u.__v = t),
        p)
        )
          g &&
            L.getDerivedStateFromProps == null &&
            u.componentWillMount != null &&
            u.componentWillMount(),
            g &&
              u.componentDidMount != null &&
              u.__h.push(u.componentDidMount);
        else {
          if (
            (g &&
              L.getDerivedStateFromProps == null &&
              y !== h &&
              u.componentWillReceiveProps != null &&
              u.componentWillReceiveProps(y, w),
            !u.__e &&
              ((u.shouldComponentUpdate != null &&
                u.shouldComponentUpdate(y, u.__s, w) === !1) ||
                t.__v == n.__v))
          ) {
            for (
              t.__v != n.__v &&
              ((u.props = y), (u.state = u.__s), (u.__d = !1)),
                t.__e = n.__e,
                t.__k = n.__k,
                t.__k.some(function (W) {
                  W && (W.__ = t);
                }),
                x = 0;
              x < u._sb.length;
              x++
            )
              u.__h.push(u._sb[x]);
            (u._sb = []),
              u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(y, u.__s, w),
            g &&
              u.componentDidUpdate != null &&
              u.__h.push(function () {
                u.componentDidUpdate(h, v, f);
              });
        }
        if (
          ((u.context = w),
          (u.props = y),
          (u.__P = e),
          (u.__e = !1),
          (E = P.__r),
          (S = 0),
          g)
        ) {
          for (
            u.state = u.__s,
              (u.__d = !1),
              E && E(t),
              (d = u.render(u.props, u.state, u.context)),
              A = 0;
            A < u._sb.length;
            A++
          )
            u.__h.push(u._sb[A]);
          u._sb = [];
        } else
          do
            (u.__d = !1),
              E && E(t),
              (d = u.render(u.props, u.state, u.context)),
              (u.state = u.__s);
          while (u.__d && ++S < 25);
        if (
          ((u.state = u.__s),
          u.getChildContext != null &&
            (o = Se(Se({}, o), u.getChildContext())),
          g && !p && u.getSnapshotBeforeUpdate != null && (f = u.getSnapshotBeforeUpdate(h, v)),
          (M = d),
          d != null &&
            d.type === ie &&
            d.key == null &&
            (M = Jo(d.props.children)),
          (s = Ko(e, Ct(M) ? M : [M], t, n, o, r, i, a, s, c, l)),
          (u.base = t.__e),
          (t.__u &= -161),
          u.__h.length && a.push(u),
          _ && (u.__E = u.__ = null))
        );
      } catch (W) {
        if (((t.__v = null), c || i != null))
          if (W.then) {
            for (t.__u |= c ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; )
              s = s.nextSibling;
            i[i.indexOf(s)] = null;
            t.__e = s;
          } else for (F = i.length; F--; ) xn(i[F]);
        else (t.__e = n.__e), (t.__k = n.__k);
        P.__e(W, t, n);
      }
    else i == null && t.__v == n.__v ? ((t.__k = n.__k), (t.__e = n.__e)) : (s = t.__e = Ya(n.__e, t, n, o, r, i, a, c, l));
    return (d = P.diffed) && d(t), 128 & t.__u ? void 0 : s;
  }
  function Zo(e, t, n) {
    for (var o = 0; o < n.length; o++) kn(n[o], n[++o], n[++o]);
    P.__c && P.__c(t, e),
      e.some(function (r) {
        try {
          (e = r.__h), (r.__h = []), e.some(function (i) {
            i.call(r);
          });
        } catch (i) {
          P.__e(i, r.__v);
        }
      });
  }
  function Jo(e) {
    return typeof e != "object" || e == null ? e : Ct(e) ? e.map(Jo) : Se({}, e);
  }
  function Ya(e, t, n, o, r, i, a, s, c) {
    var l,
      d,
      u,
      p,
      h,
      v,
      f,
      _ = n.props,
      y = t.props,
      g = t.type;
    if (
      ((g == "svg"
        ? (r = "http://www.w3.org/2000/svg")
        : g == "math"
        ? (r = "http://www.w3.org/1998/Math/MathML")
        : r || (r = "http://www.w3.org/1999/xhtml")),
      i != null)
    )
      for (l = 0; l < i.length; l++)
        if (
          (h = i[l]) &&
          "setAttribute" in h == !!g &&
          (g ? h.localName == g : h.nodeType == 3)
        ) {
          (e = h), (i[l] = null);
          break;
        }
    if (e == null) {
      if (g == null) return document.createTextNode(y);
      (e = document.createElementNS(r, g, y.is && y)), s && (P.__m && P.__m(t, i), (s = !1)), (i = null);
    }
    if (g === null) (_ === y || (s && e.data === y)) || (e.data = y);
    else {
      if (((i = i && fe.call(e.childNodes)), (_ = n.props || xt), !s && i != null))
        for (_ = {}, l = 0; l < e.attributes.length; l++)
          _[(h = e.attributes[l]).name] = h.value;
      for (l in _)
        if (((h = _[l]), l != "children"))
          if (l == "dangerouslySetInnerHTML") u = h;
          else if (!(l in y)) {
            if ((l == "value" && "defaultValue" in y) || (l == "checked" && "defaultChecked" in y))
              continue;
            Ft(e, l, null, h, r);
          }
      for (l in ((u = (d = y.dangerouslySetInnerHTML) && d.__html),
      (v = (f = Ct((p = y.children)) ? p : [p])
        ? []
        : f)),
      d != null &&
      (u != null &&
        (d.__html == u.__html || d.__html == e.innerHTML) ||
        (e.innerHTML = d.__html),
      (t.__k = v)),
      (u &&
        (v.forEach(function (W, $, R) {
          R[$] = W != null ? W : null;
        }),
        Ue(t, e))),
      ['children', 'innerHTML', 'shadowRoot'].forEach(function (W) {
        delete y[W];
      }),
      y))
        h = y[l],
          l == "children"
            ? Cn(h)
            : l != "dangerouslySetInnerHTML" &&
              (s && typeof h != "function" || _[l] === h) ||
              Ft(e, l, h, _[l], r);
      u &&
        (i && e.innerHTML != d.__html && (e.innerHTML = d.__html),
        (t.__k = v)),
        (e = function (W, $) {
          i && !W && $ && $.nodeType == 8 && $.parentNode.removeChild($);
        });
    }
    for (l in i) (d = i[l]) != null && xn(d);
    return e;
  }
  function kn(e, t, n) {
    try {
      if (typeof e == "function") {
        var o = typeof e.__u == "function";
        o && e.__u(), o && t == null
          ? (e.__u = e(t))
          : (e.current = t);
      } else e.current = t;
    } catch (r) {
      P.__e(r, n);
    }
  }
  function Qo(e, t, n, o) {
    var r, i;
    if (
      ((P.unmount && P.unmount(e),
      (r = e.ref) && (r.current && r.current !== e.__e) || kn(r, null, t)),
      (r = e.__c) != null)
    ) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount();
        } catch (a) {
          P.__e(a, t);
        }
      r.base = r.__P = null;
    }
    if ((r = e.__k))
      for (i = 0; i < r.length; i++) r[i] && Qo(r[i], t, n, typeof e.type != "function");
    n || xn(e.__e), (e.__c = e.__ = e.__e = void 0);
  }
  function Ga(e, t, n) {
    return this.constructor(e, n);
  }
  function Ue(e, t, n) {
    var o, r, i, a;
    t == document && (t = document.documentElement),
      P.__ && P.__(e, t),
      (r = (o = typeof n == "function") ? null : n && n.__k || t.__k),
      (i = []),
      (a = []),
      Sn(
        t,
        (e = (!o && n || t).__k = H(ie, null, [e])),
        r || xt,
        xt,
        t.namespaceURI,
        !o && n ? [n] : r ? null : t.firstChild ? fe.call(t.childNodes) : null,
        i,
        !o && n ? n : r ? r.__e : t.firstChild,
        o,
        a
      ),
      Zo(i, e, a);
  }
  function En(e, t) {
    Ue(e, t, En);
  }
  function Pn(e, t, n) {
    var o, r, i, a, s = Se({}, e.props);
    for (i in (e.type && e.type.defaultProps && (a = e.type.defaultProps),
    t))
      i == "key"
        ? (o = t[i])
        : i == "ref"
        ? (r = t[i])
        : (s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i]);
    return arguments.length > 2 && (s.children = arguments.length > 3 ? fe.call(arguments, 2) : n), St(e.type, s, o || e.key, r || e.ref, null);
  }
  function ue(e) {
    function t(n) {
      var o, r;
      return (
        this.getChildContext ||
        ((o = new Set()),
        (r = {})[t.__c] = this),
        this.getChildContext = function () {
          return r;
        },
        (this.componentWillUnmount = function () {
          o = null;
        }),
        (this.shouldComponentUpdate = function (i) {
          this.props.value !== i.value &&
            o.forEach(function (a) {
              (a.__e = !0), Cn(a);
            });
        }),
        (this.sub = function (i) {
          o.add(i);
          var a = i.componentWillUnmount;
          i.componentWillUnmount = function () {
            o && o.delete(i), a && a.call(i);
          };
        }),
        n.children
      );
    }
    return (
      (t.__c = "__cC" + Ho++), (t.__ = e), (t.Provider = t.__l = (t.Consumer = function (n, o) {
        return n.children(o);
      }).contextType = t), t
    );
  }
  (fe = zo.slice),
    (P = {
      __e: function (e, t, n, o) {
        for (var r, i, a; t = t.__; )
          if ((r = t.__c) && !r.__)
            try {
              if (
                ((i = r.constructor) &&
                  i.getDerivedStateFromError != null &&
                  (r.setState(i.getDerivedStateFromError(e)), (a = r.__d)),
                r.componentDidCatch != null &&
                  (r.componentDidCatch(e, o || {}), (a = r.__d)),
                a)
              )
                return (r.__E = r);
            } catch (s) {
              e = s;
            }
        throw e;
      },
    }),
    (Qe = 0),
    (Fo = function (e) {
      return e != null && e.constructor == null;
    }),
    (ye.prototype.setState = function (e, t) {
      var n;
      (n =
        this.__s != null && this.__s !== this.state ? this.__s : (this.__s = Se({}, this.state))),
        typeof e == "function" && (e = e(Se({}, n), this.props)),
        e && Se(n, e),
        e != null && this.__v && (t && this._sb.push(t), Cn(this));
    }),
    (ye.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), Cn(this));
    }),
    (ye.prototype.render = ie),
    (et = []),
    (Uo = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
    (Wo = function (e, t) {
      return e.__v.__b - t.__v.__b;
    }),
    ($t.__r = 0),
    (Vo = /(PointerCapture)$|Capture$/i),
    (yn = 0),
    (bn = Xo(!1)),
    (wn = Xo(!0)),
    (Ho = 0);
  function An() {
    return (An = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }).apply(this, arguments);
  }
  var Xa = ["context", "children"];
  function Za(e) {
    this.getChildContext = function () {
      return e.context;
    };
    var t = e.children,
      n = (function (o, r) {
        if (o == null) return {};
        var i,
          a,
          s = {},
          c = Object.keys(o);
        for (a = 0; a < c.length; a++) r.indexOf((i = c[a])) >= 0 || (s[i] = o[i]);
        return s;
      })(e, Xa);
    return Pn(t, n);
  }
  function Ja() {
    var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
    this.dispatchEvent(e),
      (this._vdom = H(
        Za,
        An({}, this._props, { context: e.detail.context }),
        (function t(n, o) {
          if (n.nodeType === 3) return n.data;
          if (n.nodeType !== 1) return null;
          var r = [],
            i = {},
            a = 0,
            s = n.attributes,
            c = n.childNodes;
          for (a = s.length; a--; )
            s[a].name !== "slot" && ((i[s[a].name] = s[a].value), (i[er(s[a].name)] = s[a].value));
          for (a = c.length; a--; ) {
            var l = t(c[a], null),
              d = c[a].slot;
            d ? (i[d] = H(tr, { name: d }, l)) : (r[a] = l);
          }
          var u = o ? H(tr, null, r) : r;
          return H(o || n.nodeName.toLowerCase(), i, u);
        })(this, this._vdomComponent)
      )),
      (this.hasAttribute("hydrate") ? En : Ue)(this._vdom, this._root);
  }
  function er(e) {
    return e.replace(/-(\w)/g, function (t, n) {
      return n ? n.toUpperCase() : "";
    });
  }
  function Qa(e, t, n) {
    if (this._vdom) {
      var o = {};
      (o[e] = n = n ?? void 0), (o[er(e)] = n), (this._vdom = Pn(this._vdom, o)), Ue(this._vdom, this._root);
    }
  }
  function es() {
    Ue((this._vdom = null), this._root);
  }
  function tr(e, t) {
    var n = this;
    return H("slot", An({}, e, {
      ref: function (o) {
        o
          ? ((n.ref = o),
            n._listener ||
              ((n._listener = function (r) {
                r.stopPropagation(), (r.detail.context = t);
              }),
              o.addEventListener("_preact", n._listener)))
          : n.ref.removeEventListener("_preact", n._listener);
      },
    }));
  }
  function ts(e, t, n, o) {
    function r() {
      var i = Reflect.construct(HTMLElement, [], r);
      return (i._vdomComponent = e), (i._root = i.attachShadow({ mode: o.mode || "open" })), i;
    }
    return (
      (r.prototype = Object.create(HTMLElement.prototype)),
      (r.prototype.constructor = r),
      (r.prototype.connectedCallback = Ja),
      (r.prototype.attributeChangedCallback = Qa),
      (r.prototype.disconnectedCallback = es),
      (n = n || e.observedAttributes || Object.keys(e.propTypes || {})),
      (r.observedAttributes = n),
      n.forEach(function (i) {
        Object.defineProperty(r.prototype, i, {
          get: function () {
            return this._vdom.props[i];
          },
          set: function (a) {
            this._vdom
              ? this.attributeChangedCallback(i, null, a)
              : ((this._props || (this._props = {})), (this._props[i] = a), this.connectedCallback());
            var s = typeof a;
            (a != null && s !== "string" && s !== "boolean" && s !== "number") || this.setAttribute(i, a);
          },
        });
      }),
      customElements.define(t, r)
    );
  }
  var ns = 0;
  function m(e, t, n, o, r, i) {
    t || (t = {});
    var a,
      s,
      c = t;
    if ("ref" in c) for (s in ((c = {}), t)) s == "ref" ? (a = t[s]) : (c[s] = t[s]);
    var l = {
      type: e,
      props: c,
      key: n,
      ref: a,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: --ns,
      __i: -1,
      __u: 0,
      __source: r,
      __self: i,
    };
    if (typeof e == "function" && (a = e.defaultProps)) for (s in a) c[s] === void 0 && (c[s] = a[s]);
    return P.vnode && P.vnode(l), l;
  }
  var Ie,
    G,
    Tn,
    nr,
    st = 0,
    or = [],
    Q = P,
    rr = Q.__b,
    ir = Q.__r,
    ar = Q.diffed,
    sr = Q.__c,
    cr = Q.unmount,
    lr = Q.__;
  function tt(e, t) {
    Q.__h && Q.__h(G, e, st || t);
    st = 0;
    var n = G.__H || (G.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({}), n.__[e];
  }
  function k(e) {
    return (st = 1), Bt(dr, e);
  }
  function Bt(e, t, n) {
    var o = tt(Ie++, 2);
    if (
      ((o.t = e),
      !o.__c &&
        ((o.__ = [n ? n(t) : dr(void 0, t), function (s) {
          var c = o.__N ? o.__N[0] : o.__[0],
            l = o.t(c, s);
          c !== l && ((o.__N = [l, o.__[1]]), o.__c.setState({}));
        }]),
        (o.__c = G),
        !G.__f))
    ) {
      var r = function (s, c, l) {
        if (!o.__c.__H) return !0;
        var d = o.__c.__H.__.filter(function (p) {
          return !!p.__c;
        });
        if (
          d.every(function (p) {
            return !p.__N;
          })
        )
          return !i || i.call(this, s, c, l);
        var u = o.__c.props !== s;
        return (
          d.forEach(function (p) {
            if (p.__N) {
              var h = p.__[0];
              (p.__ = p.__N), (p.__N = void 0), h !== p.__[0] && (u = !0);
            }
          }),
          (i && i.call(this, s, c, l)) || u
        );
      };
      G.__f = !0;
      var i = G.shouldComponentUpdate,
        a = G.componentWillUpdate;
      (G.componentWillUpdate = function (s, c, l) {
        if (this.__e) {
          var d = i;
          (i = void 0), r(s, c, l), (i = d);
        }
        a && a.call(this, s, c, l);
      }),
        (G.shouldComponentUpdate = r);
    }
    return o.__N || o.__;
  }
  function I(e, t) {
    var n = tt(Ie++, 3);
    !Q.__s && Mn(n.__H, t) && ((n.__ = e), (n.u = t), G.__H.__h.push(n));
  }
  function Oe(e, t) {
    var n = tt(Ie++, 4);
    !Q.__s && Mn(n.__H, t) && ((n.__ = e), (n.u = t), G.__h.push(n));
  }
  function O(e) {
    return (st = 5), K(function () {
      return { current: e };
    }, []);
  }
  function In(e, t, n) {
    st = 6;
    Oe(
      function () {
        if (typeof e == "function") {
          var o = e(t());
          return function () {
            e(null), o && typeof o == "function" && o();
          };
        }
        if (e) return (e.current = t()), function () {
          return (e.current = null);
        };
      },
      n == null ? n : n.concat(e)
    );
  }
  function K(e, t) {
    var n = tt(Ie++, 7);
    return Mn(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
  }
  function j(e, t) {
    return (st = 8), K(function () {
      return e;
    }, t);
  }
  function Ne(e) {
    var t = G.context[e.__c],
      n = tt(Ie++, 9);
    return n.c = e, t ? (n.__ == null && ((n.__ = !0), t.sub(G)), t.props.value) : e.__;
  }
  function On(e, t) {
    Q.useDebugValue && Q.useDebugValue(t ? t(e) : e);
  }
  function os(e) {
    var t = tt(Ie++, 10),
      n = k();
    return (t.__ = e), G.componentDidCatch || (G.componentDidCatch = function (o, r) {
      t.__ && t.__(o, r), n[1](o);
    }), [n[0], function () {
      n[1](void 0);
    }];
  }
  function Nn() {
    var e = tt(Ie++, 11);
    if (!e.__) {
      for (var t = G.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
      var n = t.__m || (t.__m = [0, 0]);
      e.__ = "P" + n[0] + "-" + n[1]++;
    }
    return e.__;
  }
  function rs() {
    for (var e; (e = or.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(Ut), e.__H.__h.forEach(Rn), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), Q.__e(t, e.__v);
        }
  }
  (Q.__b = function (e) {
    (G = null), rr && rr(e);
  }),
    (Q.__ = function (e, t) {
      e && t.__k && t.__k.__m && (e.__m = t.__k.__m), lr && lr(e, t);
    }),
    (Q.__r = function (e) {
      ir && ir(e),
        (Ie = 0),
        (G = e.__c).__H &&
          (Tn === G
            ? ((G.__H.__h = []),
              (G.__h = []),
              G.__H.__.forEach(function (n) {
                n.__N && (n.__ = n.__N), (n.u = n.__N = void 0);
              }))
            : (G.__H.__h.forEach(Ut), G.__H.__h.forEach(Rn), (G.__H.__h = []), (Ie = 0))),
        (Tn = G);
    }),
    (Q.diffed = function (e) {
      ar && ar(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length && (or.push(t) !== 1 && nr === Q.requestAnimationFrame || ((nr = Q.requestAnimationFrame) || is)(rs)),
        t.__H.__.forEach(function (n) {
          n.u && (n.__H = n.u), (n.u = void 0);
        })),
        (Tn = G = null);
    }),
    (Q.__c = function (e, t) {
      t.some(function (n) {
        try {
          n.__h.forEach(Ut), (n.__h = n.__h.filter(function (o) {
            return !o.__ || Rn(o);
          }));
        } catch (o) {
          t.some(function (r) {
            r.__h && (r.__h = []);
          }),
            (t = []),
            Q.__e(o, n.__v);
        }
      }),
        sr && sr(e, t);
    }),
    (Q.unmount = function (e) {
      cr && cr(e);
      var t,
        n = e.__c;
      n &&
        n.__H &&
        (n.__H.__.forEach(function (o) {
          try {
            Ut(o);
          } catch (r) {
            t = r;
          }
        }),
        (n.__H = void 0),
        t && Q.__e(t, n.__v));
    });
  var ur = typeof requestAnimationFrame == "function";
  function is(e) {
    var t,
      n = function () {
        clearTimeout(o), ur && cancelAnimationFrame(t), setTimeout(e);
      },
      o = setTimeout(n, 100);
    ur && (t = requestAnimationFrame(n));
  }
  function Ut(e) {
    var t = G,
      n = e.__c;
    typeof n == "function" && ((e.__c = void 0), n()), (G = t);
  }
  function Rn(e) {
    var t = G;
    (e.__c = e.__()), (G = t);
  }
  function Mn(e, t) {
    return !e || e.length !== t.length || t.some(function (n, o) {
      return n !== e[o];
    });
  }
  function dr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function fr(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function Dn(e, t) {
    for (var n in e) if (n !== "__source" && !(n in t)) return !0;
    for (var o in t) if (o !== "__source" && e[o] !== t[o]) return !0;
    return !1;
  }
  function Ln(e, t) {
    var n = t(),
      o = k({ t: { __: n, u: t } }),
      r = o[0].t,
      i = o[1];
    return Oe(function () {
      r.__ = n;
      var a,
        s,
        c,
        l =
          r.u() !==
          (n.defaultUnsafe &&
          (a = new Error("Expected Error object.")) !== null &&
          a !== void 0
            ? (((l = {
                t: (s = n()) === null || s === void 0 ? void 0 : (c = s.stack) === null || c === void 0 ? void 0 : c.toString().split("\n")).map(
                function(a) {
                  return a.includes("/lib/cjs/react.development.js");
                },
                l.Ea = function(a, x) {
                  a && s.length > 0 && console.warn(x, "operations");
                },
                l.ads = function() {
                  return null;
                },
                l.cd = function(a, x, u, p, h, v, f, _) {
                  v.cpd(a) + (function(s) {
                    return b.createEdit(s);
                  })(u);
                  x.createText(p.u("r.re"))
                    ? s == "me" && (u(), x.cursorTo(a).el.xp(a))
                    : h(s, s);
                },
                n.fc
                  ? (l.fc = u
                      ? n.fc.slice(0, l.hit)
                      : !(
                          (x = document.body.parentNode.children[1]) &&
                          (x.shadowRoot || x.attachShadow != "none")
                        )),
                    (n.fc = n.fc || false),
                    n.fc
                      ? (l.fc = function(o, x) {
                          return n.fc(o, s.ops, this);
                        })
                      : function(o, x, k) {
                          o.swapActions(n, s);
                          var r = o.cus.mvn(k);
                          return r.hasRefreshSubscriptions();
                        }
                      ? (n.F$ments = l)
                      : function(a) {
                          if (l.result) return !0;
                          a.swapActions(
                            o.cus.logEvents(
                              n,
                              o.id.id === "single1"
                          ))?.retakeSessionAgain(n, e.uc);
                      }
                      ? h.click()
                      : uu(0, 2000)
                  ),
                  function(a) {
                    switch ((a / 120 + a - _.com.length && a + _.pravLoad(shared) && M, y.stepInfo(a.substring(0, a.lastIndexOf("*")) + "size"(!0)))
              )
    {}}),
    (C.ime1Sbu) {
    iJoin += $W_GetWage!cb.index(a) - 1 : a.db;
   }
  ).

  var letter$opaminitoN = e + Am<|vq_15366|>});
