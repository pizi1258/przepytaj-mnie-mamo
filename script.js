(function(fe) {
  typeof define == "function" && define.amd ? define(fe) : fe();
})(function() {
  "use strict";

  // Preact setup and main logic
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
    xt = {},
    zo = [],
    ja = new RegExp();
  
  var Ct = Array.isArray;

  function Se(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  
  function H(e, t, n) {
    var o, r, i, a = {};
    for (i in t)
      i === "key"
        ? (o = t[i])
        : i === "ref"
        ? (r = t[i])
        : (a[i] = t[i]);
    
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? fe.call(arguments, 2) : n)) {
      var c = a;
      typeof e == "function" && e.defaultProps != null && (c = Object.assign({}, e.defaultProps, a));
    }
    return St(e, c, o, r, null);
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
      __v: r || ++Qe,
      __i: -1,
      __u: 0,
    };
    return r == null && P.vnode != null && P.vnode(i), i;
  }

  function jo() {
    return { current: null };
  }

  // The code continues to set up various utility functions and main preact component logic...

  // Implementation of the ElevenLabs Conversational AI component
  ts(Yd, "elevenlabs-convai", Hn, {
    shadow: !0,
  });

  // Function definitions and other supporting logic
  function ts(e, t, n, o) {
    function r() {
      var i = Reflect.construct(HTMLElement, [], r);
      return (i._vdomComponent = e), (i._root = i.attachShadow({ mode: o.mode || "open" })), i;
    }
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
      customElements.define(t, r);
  }

  // Continue with full component logic and further implementation

  // Finalize and complete the custom web component
});
