!function(e) {
    var n = {};
    function o(t) {
        if (n[t])
            return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, o),
        r.l = !0,
        r.exports
    }
    o.m = e,
    o.c = n,
    o.d = function(t, r, e) {
        o.o(t, r) || Object.defineProperty(t, r, {
            enumerable: !0,
            get: e
        })
    }
    ,
    o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(r, t) {
        if (1 & t && (r = o(r)),
        8 & t)
            return r;
        if (4 & t && "object" == typeof r && r && r.__esModule)
            return r;
        var e = Object.create(null);
        if (o.r(e),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        }),
        2 & t && "string" != typeof r)
            for (var n in r)
                o.d(e, n, function(t) {
                    return r[t]
                }
                .bind(null, n));
        return e
    }
    ,
    o.n = function(t) {
        var r = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return o.d(r, "a", r),
        r
    }
    ,
    o.o = function(t, r) {
        return Object.prototype.hasOwnProperty.call(t, r)
    }
    ,
    o.p = "",
    o(o.s = 427)
}([, function(t, r) {
    var e = t.exports = {
        version: "2.5.7"
    };
    "number" == typeof __e && (__e = e)
}
, function(t, r) {
    var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = e)
}
, function(t, r, e) {
    var n = e(44)("wks")
      , o = e(33)
      , i = e(2).Symbol
      , u = "function" == typeof i;
    (t.exports = function(t) {
        return n[t] || (n[t] = u && i[t] || (u ? i : o)("Symbol." + t))
    }
    ).store = n
}
, function(t, r, e) {
    var d = e(2)
      , g = e(1)
      , y = e(15)
      , m = e(13)
      , w = e(17)
      , b = "prototype"
      , x = function(t, r, e) {
        var n, o, i, u = t & x.F, a = t & x.G, c = t & x.S, f = t & x.P, s = t & x.B, l = t & x.W, h = a ? g : g[r] || (g[r] = {}), p = h[b], v = a ? d : c ? d[r] : (d[r] || {})[b];
        for (n in a && (e = r),
        e)
            (o = !u && v && void 0 !== v[n]) && w(h, n) || (i = o ? v[n] : e[n],
            h[n] = a && "function" != typeof v[n] ? e[n] : s && o ? y(i, d) : l && v[n] == i ? function(n) {
                var t = function(t, r, e) {
                    if (this instanceof n) {
                        switch (arguments.length) {
                        case 0:
                            return new n;
                        case 1:
                            return new n(t);
                        case 2:
                            return new n(t,r)
                        }
                        return new n(t,r,e)
                    }
                    return n.apply(this, arguments)
                };
                return t[b] = n[b],
                t
            }(i) : f && "function" == typeof i ? y(Function.call, i) : i,
            f && ((h.virtual || (h.virtual = {}))[n] = i,
            t & x.R && p && !p[n] && m(p, n, i)))
    };
    x.F = 1,
    x.G = 2,
    x.S = 4,
    x.P = 8,
    x.B = 16,
    x.W = 32,
    x.U = 64,
    x.R = 128,
    t.exports = x
}
, function(t, r) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}
, , , function(t, r, e) {
    t.exports = !e(16)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(t, r, e) {
    var n = e(10)
      , o = e(65)
      , i = e(50)
      , u = Object.defineProperty;
    r.f = e(8) ? Object.defineProperty : function(t, r, e) {
        if (n(t),
        r = i(r, !0),
        n(e),
        o)
            try {
                return u(t, r, e)
            } catch (t) {}
        if ("get"in e || "set"in e)
            throw TypeError("Accessors not supported!");
        return "value"in e && (t[r] = e.value),
        t
    }
}
, function(t, r, e) {
    var n = e(5);
    t.exports = function(t) {
        if (!n(t))
            throw TypeError(t + " is not an object!");
        return t
    }
}
, , , function(t, r, e) {
    var n = e(9)
      , o = e(27);
    t.exports = e(8) ? function(t, r, e) {
        return n.f(t, r, o(1, e))
    }
    : function(t, r, e) {
        return t[r] = e,
        t
    }
}
, , function(t, r, e) {
    var i = e(20);
    t.exports = function(n, o, t) {
        if (i(n),
        void 0 === o)
            return n;
        switch (t) {
        case 1:
            return function(t) {
                return n.call(o, t)
            }
            ;
        case 2:
            return function(t, r) {
                return n.call(o, t, r)
            }
            ;
        case 3:
            return function(t, r, e) {
                return n.call(o, t, r, e)
            }
        }
        return function() {
            return n.apply(o, arguments)
        }
    }
}
, function(t, r) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}
, function(t, r) {
    var e = {}.hasOwnProperty;
    t.exports = function(t, r) {
        return e.call(t, r)
    }
}
, , , function(t, r) {
    t.exports = function(t) {
        if ("function" != typeof t)
            throw TypeError(t + " is not a function!");
        return t
    }
}
, function(t, r, e) {
    var n = e(51)
      , o = e(38);
    t.exports = function(t) {
        return n(o(t))
    }
}
, function(t, r) {
    t.exports = {}
}
, function(t, r) {
    t.exports = !0
}
, function(t, r) {
    var e = {}.toString;
    t.exports = function(t) {
        return e.call(t).slice(8, -1)
    }
}
, function(t, r, e) {
    var n = e(9).f
      , o = e(17)
      , i = e(3)("toStringTag");
    t.exports = function(t, r, e) {
        t && !o(t = e ? t : t.prototype, i) && n(t, i, {
            configurable: !0,
            value: r
        })
    }
}
, , function(t, r) {
    t.exports = function(t, r) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: r
        }
    }
}
, function(t, r, n) {
    var o = n(10)
      , i = n(89)
      , u = n(45)
      , a = n(39)("IE_PROTO")
      , c = function() {}
      , f = "prototype"
      , s = function() {
        var t, r = n(42)("iframe"), e = u.length;
        for (r.style.display = "none",
        n(68).appendChild(r),
        r.src = "javascript:",
        (t = r.contentWindow.document).open(),
        t.write("<script>document.F=Object<\/script>"),
        t.close(),
        s = t.F; e--; )
            delete s[f][u[e]];
        return s()
    };
    t.exports = Object.create || function(t, r) {
        var e;
        return null !== t ? (c[f] = o(t),
        e = new c,
        c[f] = null,
        e[a] = t) : e = s(),
        void 0 === r ? e : i(e, r)
    }
}
, function(t, r, e) {
    var n = e(38);
    t.exports = function(t) {
        return Object(n(t))
    }
}
, , , function(t, r, e) {
    var n = e(67)
      , o = e(45);
    t.exports = Object.keys || function(t) {
        return n(t, o)
    }
}
, function(t, r) {
    var e = 0
      , n = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + n).toString(36))
    }
}
, , , , function(t, r) {
    var e = Math.ceil
      , n = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (0 < t ? n : e)(t)
    }
}
, function(t, r) {
    t.exports = function(t) {
        if (null == t)
            throw TypeError("Can't call method on  " + t);
        return t
    }
}
, function(t, r, e) {
    var n = e(44)("keys")
      , o = e(33);
    t.exports = function(t) {
        return n[t] || (n[t] = o(t))
    }
}
, function(t, r, e) {
    var h = e(15)
      , p = e(108)
      , v = e(109)
      , d = e(10)
      , g = e(43)
      , y = e(110)
      , m = {}
      , w = {};
    (r = t.exports = function(t, r, e, n, o) {
        var i, u, a, c, f = o ? function() {
            return t
        }
        : y(t), s = h(e, n, r ? 2 : 1), l = 0;
        if ("function" != typeof f)
            throw TypeError(t + " is not iterable!");
        if (v(f)) {
            for (i = g(t.length); l < i; l++)
                if ((c = r ? s(d(u = t[l])[0], u[1]) : s(t[l])) === m || c === w)
                    return c
        } else
            for (a = f.call(t); !(u = a.next()).done; )
                if ((c = p(a, s, u.value, r)) === m || c === w)
                    return c
    }
    ).BREAK = m,
    r.RETURN = w
}
, , function(t, r, e) {
    var n = e(5)
      , o = e(2).document
      , i = n(o) && n(o.createElement);
    t.exports = function(t) {
        return i ? o.createElement(t) : {}
    }
}
, function(t, r, e) {
    var n = e(37)
      , o = Math.min;
    t.exports = function(t) {
        return 0 < t ? o(n(t), 9007199254740991) : 0
    }
}
, function(t, r, e) {
    var n = e(1)
      , o = e(2)
      , i = "__core-js_shared__"
      , u = o[i] || (o[i] = {});
    (t.exports = function(t, r) {
        return u[t] || (u[t] = void 0 !== r ? r : {})
    }
    )("versions", []).push({
        version: n.version,
        mode: e(23) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
}
, function(t, r) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, , , function(t, r, e) {
    "use strict";
    var n = e(103)(!0);
    e(49)(String, "String", function(t) {
        this._t = String(t),
        this._i = 0
    }, function() {
        var t, r = this._t, e = this._i;
        return e >= r.length ? {
            value: void 0,
            done: !0
        } : (t = n(r, e),
        this._i += t.length,
        {
            value: t,
            done: !1
        })
    })
}
, function(t, r, e) {
    "use strict";
    var w = e(23)
      , b = e(4)
      , x = e(66)
      , _ = e(13)
      , E = e(22)
      , A = e(104)
      , P = e(25)
      , S = e(69)
      , T = e(3)("iterator")
      , O = !([].keys && "next"in [].keys())
      , R = "values"
      , C = function() {
        return this
    };
    t.exports = function(t, r, e, n, o, i, u) {
        A(e, r, n);
        var a, c, f, s = function(t) {
            if (!O && t in v)
                return v[t];
            switch (t) {
            case "keys":
            case R:
                return function() {
                    return new e(this,t)
                }
            }
            return function() {
                return new e(this,t)
            }
        }, l = r + " Iterator", h = o == R, p = !1, v = t.prototype, d = v[T] || v["@@iterator"] || o && v[o], g = d || s(o), y = o ? h ? s("entries") : g : void 0, m = "Array" == r && v.entries || d;
        if (m && (f = S(m.call(new t))) !== Object.prototype && f.next && (P(f, l, !0),
        w || "function" == typeof f[T] || _(f, T, C)),
        h && d && d.name !== R && (p = !0,
        g = function() {
            return d.call(this)
        }
        ),
        w && !u || !O && !p && v[T] || _(v, T, g),
        E[r] = g,
        E[l] = C,
        o)
            if (a = {
                values: h ? g : s(R),
                keys: i ? g : s("keys"),
                entries: y
            },
            u)
                for (c in a)
                    c in v || x(v, c, a[c]);
            else
                b(b.P + b.F * (O || p), r, a);
        return a
    }
}
, function(t, r, e) {
    var o = e(5);
    t.exports = function(t, r) {
        if (!o(t))
            return t;
        var e, n;
        if (r && "function" == typeof (e = t.toString) && !o(n = e.call(t)))
            return n;
        if ("function" == typeof (e = t.valueOf) && !o(n = e.call(t)))
            return n;
        if (!r && "function" == typeof (e = t.toString) && !o(n = e.call(t)))
            return n;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(t, r, e) {
    var n = e(24);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == n(t) ? t.split("") : Object(t)
    }
}
, function(t, r, e) {
    var o = e(24)
      , i = e(3)("toStringTag")
      , u = "Arguments" == o(function() {
        return arguments
    }());
    t.exports = function(t) {
        var r, e, n;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function(t, r) {
            try {
                return t[r]
            } catch (t) {}
        }(r = Object(t), i)) ? e : u ? o(r) : "Object" == (n = o(r)) && "function" == typeof r.callee ? "Arguments" : n
    }
}
, function(t, r) {
    r.f = {}.propertyIsEnumerable
}
, , , , , , , , , , function(t, r, e) {
    t.exports = e(152)
}
, function(t, r) {}
, function(t, r, e) {
    t.exports = !e(8) && !e(16)(function() {
        return 7 != Object.defineProperty(e(42)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(t, r, e) {
    t.exports = e(13)
}
, function(t, r, e) {
    var u = e(17)
      , a = e(21)
      , c = e(105)(!1)
      , f = e(39)("IE_PROTO");
    t.exports = function(t, r) {
        var e, n = a(t), o = 0, i = [];
        for (e in n)
            e != f && u(n, e) && i.push(e);
        for (; r.length > o; )
            u(n, e = r[o++]) && (~c(i, e) || i.push(e));
        return i
    }
}
, function(t, r, e) {
    var n = e(2).document;
    t.exports = n && n.documentElement
}
, function(t, r, e) {
    var n = e(17)
      , o = e(29)
      , i = e(39)("IE_PROTO")
      , u = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = o(t),
        n(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
    }
}
, function(t, r, e) {
    e(139);
    for (var n = e(2), o = e(13), i = e(22), u = e(3)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < a.length; c++) {
        var f = a[c]
          , s = n[f]
          , l = s && s.prototype;
        l && !l[u] && o(l, u, f),
        i[f] = i.Array
    }
}
, function(t, r) {
    t.exports = function(t, r, e, n) {
        if (!(t instanceof r) || void 0 !== n && n in t)
            throw TypeError(e + ": incorrect invocation!");
        return t
    }
}
, function(t, r, e) {
    "use strict";
    var o = e(20);
    function n(t) {
        var e, n;
        this.promise = new t(function(t, r) {
            if (void 0 !== e || void 0 !== n)
                throw TypeError("Bad Promise constructor");
            e = t,
            n = r
        }
        ),
        this.resolve = o(e),
        this.reject = o(n)
    }
    t.exports.f = function(t) {
        return new n(t)
    }
}
, function(t, r, e) {
    var o = e(13);
    t.exports = function(t, r, e) {
        for (var n in r)
            e && t[n] ? t[n] = r[n] : o(t, n, r[n]);
        return t
    }
}
, function(t, r) {
    r.f = Object.getOwnPropertySymbols
}
, function(t, r, e) {
    r.f = e(3)
}
, function(t, r, e) {
    var n = e(33)("meta")
      , o = e(5)
      , i = e(17)
      , u = e(9).f
      , a = 0
      , c = Object.isExtensible || function() {
        return !0
    }
      , f = !e(16)(function() {
        return c(Object.preventExtensions({}))
    })
      , s = function(t) {
        u(t, n, {
            value: {
                i: "O" + ++a,
                w: {}
            }
        })
    }
      , l = t.exports = {
        KEY: n,
        NEED: !1,
        fastKey: function(t, r) {
            if (!o(t))
                return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!i(t, n)) {
                if (!c(t))
                    return "F";
                if (!r)
                    return "E";
                s(t)
            }
            return t[n].i
        },
        getWeak: function(t, r) {
            if (!i(t, n)) {
                if (!c(t))
                    return !0;
                if (!r)
                    return !1;
                s(t)
            }
            return t[n].w
        },
        onFreeze: function(t) {
            return f && l.NEED && c(t) && !i(t, n) && s(t),
            t
        }
    }
}
, function(t, r, e) {
    var n = e(2)
      , o = e(1)
      , i = e(23)
      , u = e(75)
      , a = e(9).f;
    t.exports = function(t) {
        var r = o.Symbol || (o.Symbol = i ? {} : n.Symbol || {});
        "_" == t.charAt(0) || t in r || a(r, t, {
            value: u.f(t)
        })
    }
}
, function(t, r) {
    var e, n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
    r.getSymbolSize = function(t) {
        if (!t)
            throw new Error('"version" cannot be null or undefined');
        if (t < 1 || 40 < t)
            throw new Error('"version" should be in range from 1 to 40');
        return 4 * t + 17
    }
    ,
    r.getSymbolTotalCodewords = function(t) {
        return n[t]
    }
    ,
    r.getBCHDigit = function(t) {
        for (var r = 0; 0 !== t; )
            r++,
            t >>>= 1;
        return r
    }
    ,
    r.setToSJISFunction = function(t) {
        if ("function" != typeof t)
            throw new Error('"toSJISFunc" is not a valid function.');
        e = t
    }
    ,
    r.isKanjiModeEnabled = function() {
        return void 0 !== e
    }
    ,
    r.toSJIS = function(t) {
        return e(t)
    }
}
, function(t, e, r) {
    var n = r(214)
      , o = r(215);
    e.NUMERIC = {
        id: "Numeric",
        bit: 1,
        ccBits: [10, 12, 14]
    },
    e.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 2,
        ccBits: [9, 11, 13]
    },
    e.BYTE = {
        id: "Byte",
        bit: 4,
        ccBits: [8, 16, 16]
    },
    e.KANJI = {
        id: "Kanji",
        bit: 8,
        ccBits: [8, 10, 12]
    },
    e.MIXED = {
        bit: -1
    },
    e.getCharCountIndicator = function(t, r) {
        if (!t.ccBits)
            throw new Error("Invalid mode: " + t);
        if (!n.isValid(r))
            throw new Error("Invalid version: " + r);
        return 1 <= r && r < 10 ? t.ccBits[0] : r < 27 ? t.ccBits[1] : t.ccBits[2]
    }
    ,
    e.getBestModeForData = function(t) {
        return o.testNumeric(t) ? e.NUMERIC : o.testAlphanumeric(t) ? e.ALPHANUMERIC : o.testKanji(t) ? e.KANJI : e.BYTE
    }
    ,
    e.toString = function(t) {
        if (t && t.id)
            return t.id;
        throw new Error("Invalid mode")
    }
    ,
    e.isValid = function(t) {
        return t && t.bit && t.ccBits
    }
    ,
    e.from = function(t, r) {
        if (e.isValid(t))
            return t;
        try {
            return function(t) {
                if ("string" != typeof t)
                    throw new Error("Param is not a string");
                switch (t.toLowerCase()) {
                case "numeric":
                    return e.NUMERIC;
                case "alphanumeric":
                    return e.ALPHANUMERIC;
                case "kanji":
                    return e.KANJI;
                case "byte":
                    return e.BYTE;
                default:
                    throw new Error("Unknown mode: " + t)
                }
            }(t)
        } catch (t) {
            return r
        }
    }
}
, , , , , , , function(t, r, e) {
    t.exports = e(160)
}
, function(t, r, e) {
    t.exports = e(163)
}
, function(t, r, e) {
    t.exports = e(180)
}
, function(t, r, e) {
    var u = e(9)
      , a = e(10)
      , c = e(32);
    t.exports = e(8) ? Object.defineProperties : function(t, r) {
        a(t);
        for (var e, n = c(r), o = n.length, i = 0; i < o; )
            u.f(t, e = n[i++], r[e]);
        return t
    }
}
, function(t, r, e) {
    var n = e(24);
    t.exports = Array.isArray || function(t) {
        return "Array" == n(t)
    }
}
, function(t, r, e) {
    "use strict";
    var u = e(183);
    var n = (f.TYPED_ARRAY_SUPPORT = function() {
        try {
            var t = new Uint8Array(1);
            return t.__proto__ = {
                __proto__: Uint8Array.prototype,
                foo: function() {
                    return 42
                }
            },
            42 === t.foo()
        } catch (t) {
            return !1
        }
    }()) ? 2147483647 : 1073741823;
    function f(t, r, e) {
        return f.TYPED_ARRAY_SUPPORT || this instanceof f ? "number" == typeof t ? a(this, t) : function(t, r, e, n) {
            if ("number" == typeof r)
                throw new TypeError('"value" argument must not be a number');
            if ("undefined" != typeof ArrayBuffer && r instanceof ArrayBuffer)
                return function(t, r, e, n) {
                    if (e < 0 || r.byteLength < e)
                        throw new RangeError("'offset' is out of bounds");
                    if (r.byteLength < e + (n || 0))
                        throw new RangeError("'length' is out of bounds");
                    var o;
                    o = void 0 === e && void 0 === n ? new Uint8Array(r) : void 0 === n ? new Uint8Array(r,e) : new Uint8Array(r,e,n);
                    f.TYPED_ARRAY_SUPPORT ? o.__proto__ = f.prototype : o = h(t, o);
                    return o
                }(t, r, e, n);
            return "string" != typeof r ? function(t, r) {
                if (f.isBuffer(r)) {
                    var e = 0 | s(r.length)
                      , n = l(t, e);
                    return 0 === n.length || r.copy(n, 0, 0, e),
                    n
                }
                if (r) {
                    if ("undefined" != typeof ArrayBuffer && r.buffer instanceof ArrayBuffer || "length"in r)
                        return "number" != typeof r.length || (o = r.length) != o ? l(t, 0) : h(t, r);
                    if ("Buffer" === r.type && Array.isArray(r.data))
                        return h(t, r.data)
                }
                var o;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(t, r) : (o = t,
            i = r,
            u = 0 | p(i),
            a = l(o, u),
            c = a.write(i),
            c !== u && (a = a.slice(0, c)),
            a);
            var o, i, u, a, c
        }(this, t, r, e) : new f(t,r,e)
    }
    function s(t) {
        if (n <= t)
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n.toString(16) + " bytes");
        return 0 | t
    }
    function l(t, r) {
        var e;
        return f.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(r)).__proto__ = f.prototype : (null === (e = t) && (e = new f(r)),
        e.length = r),
        e
    }
    function a(t, r) {
        var e = l(t, r < 0 ? 0 : 0 | s(r));
        if (!f.TYPED_ARRAY_SUPPORT)
            for (var n = 0; n < r; ++n)
                e[n] = 0;
        return e
    }
    function h(t, r) {
        for (var e = r.length < 0 ? 0 : 0 | s(r.length), n = l(t, e), o = 0; o < e; o += 1)
            n[o] = 255 & r[o];
        return n
    }
    function c(t, r) {
        var e;
        r = r || 1 / 0;
        for (var n = t.length, o = null, i = [], u = 0; u < n; ++u) {
            if (55295 < (e = t.charCodeAt(u)) && e < 57344) {
                if (!o) {
                    if (56319 < e) {
                        -1 < (r -= 3) && i.push(239, 191, 189);
                        continue
                    }
                    if (u + 1 === n) {
                        -1 < (r -= 3) && i.push(239, 191, 189);
                        continue
                    }
                    o = e;
                    continue
                }
                if (e < 56320) {
                    -1 < (r -= 3) && i.push(239, 191, 189),
                    o = e;
                    continue
                }
                e = 65536 + (o - 55296 << 10 | e - 56320)
            } else
                o && -1 < (r -= 3) && i.push(239, 191, 189);
            if (o = null,
            e < 128) {
                if ((r -= 1) < 0)
                    break;
                i.push(e)
            } else if (e < 2048) {
                if ((r -= 2) < 0)
                    break;
                i.push(e >> 6 | 192, 63 & e | 128)
            } else if (e < 65536) {
                if ((r -= 3) < 0)
                    break;
                i.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
            } else {
                if (!(e < 1114112))
                    throw new Error("Invalid code point");
                if ((r -= 4) < 0)
                    break;
                i.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
            }
        }
        return i
    }
    function p(t) {
        return f.isBuffer(t) ? t.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer) ? t.byteLength : ("string" != typeof t && (t = "" + t),
        0 === t.length ? 0 : c(t).length)
    }
    f.TYPED_ARRAY_SUPPORT && (f.prototype.__proto__ = Uint8Array.prototype,
    f.__proto__ = Uint8Array,
    "undefined" != typeof Symbol && Symbol.species && f[Symbol.species] === f && Object.defineProperty(f, Symbol.species, {
        value: null,
        configurable: !0,
        enumerable: !1,
        writable: !1
    })),
    f.prototype.write = function(t, r, e) {
        void 0 === r ? (e = this.length,
        r = 0) : void 0 === e && "string" == typeof r ? (e = this.length,
        r = 0) : isFinite(r) && (r |= 0,
        isFinite(e) ? e |= 0 : e = void 0);
        var n, o, i, u = this.length - r;
        if ((void 0 === e || u < e) && (e = u),
        0 < t.length && (e < 0 || r < 0) || r > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
        return o = r,
        i = e,
        function(t, r, e, n) {
            for (var o = 0; o < n && !(o + e >= r.length || o >= t.length); ++o)
                r[o + e] = t[o];
            return o
        }(c(t, (n = this).length - o), n, o, i)
    }
    ,
    f.prototype.slice = function(t, r) {
        var e, n = this.length;
        if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : n < t && (t = n),
        (r = void 0 === r ? n : ~~r) < 0 ? (r += n) < 0 && (r = 0) : n < r && (r = n),
        r < t && (r = t),
        f.TYPED_ARRAY_SUPPORT)
            (e = this.subarray(t, r)).__proto__ = f.prototype;
        else {
            var o = r - t;
            e = new f(o,void 0);
            for (var i = 0; i < o; ++i)
                e[i] = this[i + t]
        }
        return e
    }
    ,
    f.prototype.copy = function(t, r, e, n) {
        if (e || (e = 0),
        n || 0 === n || (n = this.length),
        r >= t.length && (r = t.length),
        r || (r = 0),
        0 < n && n < e && (n = e),
        n === e)
            return 0;
        if (0 === t.length || 0 === this.length)
            return 0;
        if (r < 0)
            throw new RangeError("targetStart out of bounds");
        if (e < 0 || e >= this.length)
            throw new RangeError("sourceStart out of bounds");
        if (n < 0)
            throw new RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length),
        t.length - r < n - e && (n = t.length - r + e);
        var o, i = n - e;
        if (this === t && e < r && r < n)
            for (o = i - 1; 0 <= o; --o)
                t[o + r] = this[o + e];
        else if (i < 1e3 || !f.TYPED_ARRAY_SUPPORT)
            for (o = 0; o < i; ++o)
                t[o + r] = this[o + e];
        else
            Uint8Array.prototype.set.call(t, this.subarray(e, e + i), r);
        return i
    }
    ,
    f.prototype.fill = function(t, r, e) {
        if ("string" == typeof t) {
            if ("string" == typeof r ? (r = 0,
            e = this.length) : "string" == typeof e && (e = this.length),
            1 === t.length) {
                var n = t.charCodeAt(0);
                n < 256 && (t = n)
            }
        } else
            "number" == typeof t && (t &= 255);
        if (r < 0 || this.length < r || this.length < e)
            throw new RangeError("Out of range index");
        if (e <= r)
            return this;
        var o;
        if (r >>>= 0,
        e = void 0 === e ? this.length : e >>> 0,
        t || (t = 0),
        "number" == typeof t)
            for (o = r; o < e; ++o)
                this[o] = t;
        else {
            var i = f.isBuffer(t) ? t : new f(t)
              , u = i.length;
            for (o = 0; o < e - r; ++o)
                this[o + r] = i[o % u]
        }
        return this
    }
    ,
    f.concat = function(t, r) {
        if (!u(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === t.length)
            return l(null, 0);
        var e;
        if (void 0 === r)
            for (e = r = 0; e < t.length; ++e)
                r += t[e].length;
        var n = a(null, r)
          , o = 0;
        for (e = 0; e < t.length; ++e) {
            var i = t[e];
            if (!f.isBuffer(i))
                throw new TypeError('"list" argument must be an Array of Buffers');
            i.copy(n, o),
            o += i.length
        }
        return n
    }
    ,
    f.byteLength = p,
    f.prototype._isBuffer = !0,
    f.isBuffer = function(t) {
        return !(null == t || !t._isBuffer)
    }
    ,
    t.exports = f
}
, , , , , , , , , , function(t, r, e) {
    t.exports = e(138)
}
, function(r, t, e) {
    var n = e(123)
      , o = e(63);
    function i(t) {
        return (i = "function" == typeof o && "symbol" == typeof n ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof o && t.constructor === o && t !== o.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function u(t) {
        return "function" == typeof o && "symbol" === i(n) ? r.exports = u = function(t) {
            return i(t)
        }
        : r.exports = u = function(t) {
            return t && "function" == typeof o && t.constructor === o && t !== o.prototype ? "symbol" : i(t)
        }
        ,
        u(t)
    }
    r.exports = u
}
, function(t, r, e) {
    var c = e(37)
      , f = e(38);
    t.exports = function(a) {
        return function(t, r) {
            var e, n, o = String(f(t)), i = c(r), u = o.length;
            return i < 0 || u <= i ? a ? "" : void 0 : (e = o.charCodeAt(i)) < 55296 || 56319 < e || i + 1 === u || (n = o.charCodeAt(i + 1)) < 56320 || 57343 < n ? a ? o.charAt(i) : e : a ? o.slice(i, i + 2) : n - 56320 + (e - 55296 << 10) + 65536
        }
    }
}
, function(t, r, e) {
    "use strict";
    var n = e(28)
      , o = e(27)
      , i = e(25)
      , u = {};
    e(13)(u, e(3)("iterator"), function() {
        return this
    }),
    t.exports = function(t, r, e) {
        t.prototype = n(u, {
            next: o(1, e)
        }),
        i(t, r + " Iterator")
    }
}
, function(t, r, e) {
    var c = e(21)
      , f = e(43)
      , s = e(106);
    t.exports = function(a) {
        return function(t, r, e) {
            var n, o = c(t), i = f(o.length), u = s(e, i);
            if (a && r != r) {
                for (; u < i; )
                    if ((n = o[u++]) != n)
                        return !0
            } else
                for (; u < i; u++)
                    if ((a || u in o) && o[u] === r)
                        return a || u || 0;
            return !a && -1
        }
    }
}
, function(t, r, e) {
    var n = e(37)
      , o = Math.max
      , i = Math.min;
    t.exports = function(t, r) {
        return (t = n(t)) < 0 ? o(t + r, 0) : i(t, r)
    }
}
, function(t, r) {
    t.exports = function(t, r) {
        return {
            value: r,
            done: !!t
        }
    }
}
, function(t, r, e) {
    var i = e(10);
    t.exports = function(r, t, e, n) {
        try {
            return n ? t(i(e)[0], e[1]) : t(e)
        } catch (t) {
            var o = r.return;
            throw void 0 !== o && i(o.call(r)),
            t
        }
    }
}
, function(t, r, e) {
    var n = e(22)
      , o = e(3)("iterator")
      , i = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (n.Array === t || i[o] === t)
    }
}
, function(t, r, e) {
    var n = e(52)
      , o = e(3)("iterator")
      , i = e(22);
    t.exports = e(1).getIteratorMethod = function(t) {
        if (null != t)
            return t[o] || t["@@iterator"] || i[n(t)]
    }
}
, function(t, r, e) {
    var o = e(10)
      , i = e(20)
      , u = e(3)("species");
    t.exports = function(t, r) {
        var e, n = o(t).constructor;
        return void 0 === n || null == (e = o(n)[u]) ? r : i(e)
    }
}
, function(t, r, e) {
    var n, o, i, u = e(15), a = e(113), c = e(68), f = e(42), s = e(2), l = s.process, h = s.setImmediate, p = s.clearImmediate, v = s.MessageChannel, d = s.Dispatch, g = 0, y = {}, m = "onreadystatechange", w = function() {
        var t = +this;
        if (y.hasOwnProperty(t)) {
            var r = y[t];
            delete y[t],
            r()
        }
    }, b = function(t) {
        w.call(t.data)
    };
    h && p || (h = function(t) {
        for (var r = [], e = 1; arguments.length > e; )
            r.push(arguments[e++]);
        return y[++g] = function() {
            a("function" == typeof t ? t : Function(t), r)
        }
        ,
        n(g),
        g
    }
    ,
    p = function(t) {
        delete y[t]
    }
    ,
    "process" == e(24)(l) ? n = function(t) {
        l.nextTick(u(w, t, 1))
    }
    : d && d.now ? n = function(t) {
        d.now(u(w, t, 1))
    }
    : v ? (i = (o = new v).port2,
    o.port1.onmessage = b,
    n = u(i.postMessage, i, 1)) : s.addEventListener && "function" == typeof postMessage && !s.importScripts ? (n = function(t) {
        s.postMessage(t + "", "*")
    }
    ,
    s.addEventListener("message", b, !1)) : n = m in f("script") ? function(t) {
        c.appendChild(f("script"))[m] = function() {
            c.removeChild(this),
            w.call(t)
        }
    }
    : function(t) {
        setTimeout(u(w, t, 1), 0)
    }
    ),
    t.exports = {
        set: h,
        clear: p
    }
}
, function(t, r) {
    t.exports = function(t, r, e) {
        var n = void 0 === e;
        switch (r.length) {
        case 0:
            return n ? t() : t.call(e);
        case 1:
            return n ? t(r[0]) : t.call(e, r[0]);
        case 2:
            return n ? t(r[0], r[1]) : t.call(e, r[0], r[1]);
        case 3:
            return n ? t(r[0], r[1], r[2]) : t.call(e, r[0], r[1], r[2]);
        case 4:
            return n ? t(r[0], r[1], r[2], r[3]) : t.call(e, r[0], r[1], r[2], r[3])
        }
        return t.apply(e, r)
    }
}
, function(t, r) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch (t) {
            return {
                e: !0,
                v: t
            }
        }
    }
}
, function(t, r, e) {
    var n = e(10)
      , o = e(5)
      , i = e(72);
    t.exports = function(t, r) {
        if (n(t),
        o(r) && r.constructor === t)
            return r;
        var e = i.f(t);
        return (0,
        e.resolve)(r),
        e.promise
    }
}
, function(t, r, e) {
    "use strict";
    var n = e(2)
      , o = e(1)
      , i = e(9)
      , u = e(8)
      , a = e(3)("species");
    t.exports = function(t) {
        var r = "function" == typeof o[t] ? o[t] : n[t];
        u && r && !r[a] && i.f(r, a, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}
, function(t, r, e) {
    var i = e(3)("iterator")
      , u = !1;
    try {
        var n = [7][i]();
        n.return = function() {
            u = !0
        }
        ,
        Array.from(n, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, r) {
        if (!r && !u)
            return !1;
        var e = !1;
        try {
            var n = [7]
              , o = n[i]();
            o.next = function() {
                return {
                    done: e = !0
                }
            }
            ,
            n[i] = function() {
                return o
            }
            ,
            t(n)
        } catch (t) {}
        return e
    }
}
, function(t, r, e) {
    var n = e(67)
      , o = e(45).concat("length", "prototype");
    r.f = Object.getOwnPropertyNames || function(t) {
        return n(t, o)
    }
}
, function(t, r, e) {
    var n = e(53)
      , o = e(27)
      , i = e(21)
      , u = e(50)
      , a = e(17)
      , c = e(65)
      , f = Object.getOwnPropertyDescriptor;
    r.f = e(8) ? f : function(t, r) {
        if (t = i(t),
        r = u(r, !0),
        c)
            try {
                return f(t, r)
            } catch (t) {}
        if (a(t, r))
            return o(!n.f.call(t, r), t[r])
    }
}
, function(t, r, e) {
    var n = e(5);
    t.exports = function(t, r) {
        if (!n(t) || t._t !== r)
            throw TypeError("Incompatible receiver, " + r + " required!");
        return t
    }
}
, , , function(t, r, e) {
    t.exports = e(151)
}
, function(t, r, e) {
    t.exports = e(146)
}
, function(t, r, e) {
    t.exports = e(149)
}
, function(t, r, e) {
    t.exports = e(158)
}
, function(t, r, e) {
    t.exports = e(166)
}
, function(t, r, e) {
    t.exports = e(253)
}
, function(t, r, e) {
    var o = e(4)
      , i = e(1)
      , u = e(16);
    t.exports = function(t, r) {
        var e = (i.Object || {})[t] || Object[t]
          , n = {};
        n[t] = r(e),
        o(o.S + o.F * u(function() {
            e(1)
        }), "Object", n)
    }
}
, , , , , , , , , function(t, r, e) {
    e(64),
    e(48),
    e(70),
    e(141),
    e(144),
    e(145),
    t.exports = e(1).Promise
}
, function(t, r, e) {
    "use strict";
    var n = e(140)
      , o = e(107)
      , i = e(22)
      , u = e(21);
    t.exports = e(49)(Array, "Array", function(t, r) {
        this._t = u(t),
        this._i = 0,
        this._k = r
    }, function() {
        var t = this._t
          , r = this._k
          , e = this._i++;
        return !t || e >= t.length ? (this._t = void 0,
        o(1)) : o(0, "keys" == r ? e : "values" == r ? t[e] : [e, t[e]])
    }, "values"),
    i.Arguments = i.Array,
    n("keys"),
    n("values"),
    n("entries")
}
, function(t, r) {
    t.exports = function() {}
}
, function(t, r, e) {
    "use strict";
    var n, o, i, u, a = e(23), c = e(2), f = e(15), s = e(52), l = e(4), h = e(5), p = e(20), v = e(71), d = e(40), g = e(111), y = e(112).set, m = e(142)(), w = e(72), b = e(114), x = e(143), _ = e(115), E = "Promise", A = c.TypeError, P = c.process, S = P && P.versions, T = S && S.v8 || "", O = c[E], R = "process" == s(P), C = function() {}, M = o = w.f, L = !!function() {
        try {
            var t = O.resolve(1)
              , r = (t.constructor = {})[e(3)("species")] = function(t) {
                t(C, C)
            }
            ;
            return (R || "function" == typeof PromiseRejectionEvent) && t.then(C)instanceof r && 0 !== T.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
        } catch (t) {}
    }(), B = function(t) {
        var r;
        return !(!h(t) || "function" != typeof (r = t.then)) && r
    }, j = function(s, e) {
        if (!s._n) {
            s._n = !0;
            var n = s._c;
            m(function() {
                for (var c = s._v, f = 1 == s._s, t = 0, r = function(t) {
                    var r, e, n, o = f ? t.ok : t.fail, i = t.resolve, u = t.reject, a = t.domain;
                    try {
                        o ? (f || (2 == s._h && k(s),
                        s._h = 1),
                        !0 === o ? r = c : (a && a.enter(),
                        r = o(c),
                        a && (a.exit(),
                        n = !0)),
                        r === t.promise ? u(A("Promise-chain cycle")) : (e = B(r)) ? e.call(r, i, u) : i(r)) : u(c)
                    } catch (t) {
                        a && !n && a.exit(),
                        u(t)
                    }
                }; n.length > t; )
                    r(n[t++]);
                s._c = [],
                s._n = !1,
                e && !s._h && I(s)
            })
        }
    }, I = function(i) {
        y.call(c, function() {
            var t, r, e, n = i._v, o = N(i);
            if (o && (t = b(function() {
                R ? P.emit("unhandledRejection", n, i) : (r = c.onunhandledrejection) ? r({
                    promise: i,
                    reason: n
                }) : (e = c.console) && e.error && e.error("Unhandled promise rejection", n)
            }),
            i._h = R || N(i) ? 2 : 1),
            i._a = void 0,
            o && t.e)
                throw t.v
        })
    }, N = function(t) {
        return 1 !== t._h && 0 === (t._a || t._c).length
    }, k = function(r) {
        y.call(c, function() {
            var t;
            R ? P.emit("rejectionHandled", r) : (t = c.onrejectionhandled) && t({
                promise: r,
                reason: r._v
            })
        })
    }, F = function(t) {
        var r = this;
        r._d || (r._d = !0,
        (r = r._w || r)._v = t,
        r._s = 2,
        r._a || (r._a = r._c.slice()),
        j(r, !0))
    }, U = function(t) {
        var e, n = this;
        if (!n._d) {
            n._d = !0,
            n = n._w || n;
            try {
                if (n === t)
                    throw A("Promise can't be resolved itself");
                (e = B(t)) ? m(function() {
                    var r = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        e.call(t, f(U, r, 1), f(F, r, 1))
                    } catch (t) {
                        F.call(r, t)
                    }
                }) : (n._v = t,
                n._s = 1,
                j(n, !1))
            } catch (t) {
                F.call({
                    _w: n,
                    _d: !1
                }, t)
            }
        }
    };
    L || (O = function(t) {
        v(this, O, E, "_h"),
        p(t),
        n.call(this);
        try {
            t(f(U, this, 1), f(F, this, 1))
        } catch (t) {
            F.call(this, t)
        }
    }
    ,
    (n = function(t) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    }
    ).prototype = e(73)(O.prototype, {
        then: function(t, r) {
            var e = M(g(this, O));
            return e.ok = "function" != typeof t || t,
            e.fail = "function" == typeof r && r,
            e.domain = R ? P.domain : void 0,
            this._c.push(e),
            this._a && this._a.push(e),
            this._s && j(this, !1),
            e.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }),
    i = function() {
        var t = new n;
        this.promise = t,
        this.resolve = f(U, t, 1),
        this.reject = f(F, t, 1)
    }
    ,
    w.f = M = function(t) {
        return t === O || t === u ? new i(t) : o(t)
    }
    ),
    l(l.G + l.W + l.F * !L, {
        Promise: O
    }),
    e(25)(O, E),
    e(116)(E),
    u = e(1)[E],
    l(l.S + l.F * !L, E, {
        reject: function(t) {
            var r = M(this);
            return (0,
            r.reject)(t),
            r.promise
        }
    }),
    l(l.S + l.F * (a || !L), E, {
        resolve: function(t) {
            return _(a && this === u ? O : this, t)
        }
    }),
    l(l.S + l.F * !(L && e(117)(function(t) {
        O.all(t).catch(C)
    })), E, {
        all: function(t) {
            var u = this
              , r = M(u)
              , a = r.resolve
              , c = r.reject
              , e = b(function() {
                var n = []
                  , o = 0
                  , i = 1;
                d(t, !1, function(t) {
                    var r = o++
                      , e = !1;
                    n.push(void 0),
                    i++,
                    u.resolve(t).then(function(t) {
                        e || (e = !0,
                        n[r] = t,
                        --i || a(n))
                    }, c)
                }),
                --i || a(n)
            });
            return e.e && c(e.v),
            r.promise
        },
        race: function(t) {
            var r = this
              , e = M(r)
              , n = e.reject
              , o = b(function() {
                d(t, !1, function(t) {
                    r.resolve(t).then(e.resolve, n)
                })
            });
            return o.e && n(o.v),
            e.promise
        }
    })
}
, function(t, r, e) {
    var a = e(2)
      , c = e(112).set
      , f = a.MutationObserver || a.WebKitMutationObserver
      , s = a.process
      , l = a.Promise
      , h = "process" == e(24)(s);
    t.exports = function() {
        var e, n, o, t = function() {
            var t, r;
            for (h && (t = s.domain) && t.exit(); e; ) {
                r = e.fn,
                e = e.next;
                try {
                    r()
                } catch (t) {
                    throw e ? o() : n = void 0,
                    t
                }
            }
            n = void 0,
            t && t.enter()
        };
        if (h)
            o = function() {
                s.nextTick(t)
            }
            ;
        else if (!f || a.navigator && a.navigator.standalone)
            if (l && l.resolve) {
                var r = l.resolve(void 0);
                o = function() {
                    r.then(t)
                }
            } else
                o = function() {
                    c.call(a, t)
                }
                ;
        else {
            var i = !0
              , u = document.createTextNode("");
            new f(t).observe(u, {
                characterData: !0
            }),
            o = function() {
                u.data = i = !i
            }
        }
        return function(t) {
            var r = {
                fn: t,
                next: void 0
            };
            n && (n.next = r),
            e || (e = r,
            o()),
            n = r
        }
    }
}
, function(t, r, e) {
    var n = e(2).navigator;
    t.exports = n && n.userAgent || ""
}
, function(t, r, e) {
    "use strict";
    var n = e(4)
      , o = e(1)
      , i = e(2)
      , u = e(111)
      , a = e(115);
    n(n.P + n.R, "Promise", {
        finally: function(r) {
            var e = u(this, o.Promise || i.Promise)
              , t = "function" == typeof r;
            return this.then(t ? function(t) {
                return a(e, r()).then(function() {
                    return t
                })
            }
            : r, t ? function(t) {
                return a(e, r()).then(function() {
                    throw t
                })
            }
            : r)
        }
    })
}
, function(t, r, e) {
    "use strict";
    var n = e(4)
      , o = e(72)
      , i = e(114);
    n(n.S, "Promise", {
        try: function(t) {
            var r = o.f(this)
              , e = i(t);
            return (e.e ? r.reject : r.resolve)(e.v),
            r.promise
        }
    })
}
, function(t, r, e) {
    e(147),
    t.exports = e(1).Object.assign
}
, function(t, r, e) {
    var n = e(4);
    n(n.S + n.F, "Object", {
        assign: e(148)
    })
}
, function(t, r, e) {
    "use strict";
    var h = e(32)
      , p = e(74)
      , v = e(53)
      , d = e(29)
      , g = e(51)
      , o = Object.assign;
    t.exports = !o || e(16)(function() {
        var t = {}
          , r = {}
          , e = Symbol()
          , n = "abcdefghijklmnopqrst";
        return t[e] = 7,
        n.split("").forEach(function(t) {
            r[t] = t
        }),
        7 != o({}, t)[e] || Object.keys(o({}, r)).join("") != n
    }) ? function(t, r) {
        for (var e = d(t), n = arguments.length, o = 1, i = p.f, u = v.f; o < n; )
            for (var a, c = g(arguments[o++]), f = i ? h(c).concat(i(c)) : h(c), s = f.length, l = 0; l < s; )
                u.call(c, a = f[l++]) && (e[a] = c[a]);
        return e
    }
    : o
}
, function(t, r, e) {
    e(150);
    var n = e(1).Object;
    t.exports = function(t, r, e) {
        return n.defineProperty(t, r, e)
    }
}
, function(t, r, e) {
    var n = e(4);
    n(n.S + n.F * !e(8), "Object", {
        defineProperty: e(9).f
    })
}
, function(t, r, e) {
    e(48),
    e(70),
    t.exports = e(75).f("iterator")
}
, function(t, r, e) {
    e(153),
    e(64),
    e(156),
    e(157),
    t.exports = e(1).Symbol
}
, function(t, r, e) {
    "use strict";
    var n = e(2)
      , u = e(17)
      , o = e(8)
      , i = e(4)
      , a = e(66)
      , c = e(76).KEY
      , f = e(16)
      , s = e(44)
      , l = e(25)
      , h = e(33)
      , p = e(3)
      , v = e(75)
      , d = e(77)
      , g = e(154)
      , y = e(90)
      , m = e(10)
      , w = e(5)
      , b = e(21)
      , x = e(50)
      , _ = e(27)
      , E = e(28)
      , A = e(155)
      , P = e(119)
      , S = e(9)
      , T = e(32)
      , O = P.f
      , R = S.f
      , C = A.f
      , M = n.Symbol
      , L = n.JSON
      , B = L && L.stringify
      , j = "prototype"
      , I = p("_hidden")
      , N = p("toPrimitive")
      , k = {}.propertyIsEnumerable
      , F = s("symbol-registry")
      , U = s("symbols")
      , D = s("op-symbols")
      , z = Object[j]
      , Y = "function" == typeof M
      , H = n.QObject
      , J = !H || !H[j] || !H[j].findChild
      , K = o && f(function() {
        return 7 != E(R({}, "a", {
            get: function() {
                return R(this, "a", {
                    value: 7
                }).a
            }
        })).a
    }) ? function(t, r, e) {
        var n = O(z, r);
        n && delete z[r],
        R(t, r, e),
        n && t !== z && R(z, r, n)
    }
    : R
      , V = function(t) {
        var r = U[t] = E(M[j]);
        return r._k = t,
        r
    }
      , G = Y && "symbol" == typeof M.iterator ? function(t) {
        return "symbol" == typeof t
    }
    : function(t) {
        return t instanceof M
    }
      , q = function(t, r, e) {
        return t === z && q(D, r, e),
        m(t),
        r = x(r, !0),
        m(e),
        u(U, r) ? (e.enumerable ? (u(t, I) && t[I][r] && (t[I][r] = !1),
        e = E(e, {
            enumerable: _(0, !1)
        })) : (u(t, I) || R(t, I, _(1, {})),
        t[I][r] = !0),
        K(t, r, e)) : R(t, r, e)
    }
      , Q = function(t, r) {
        m(t);
        for (var e, n = g(r = b(r)), o = 0, i = n.length; o < i; )
            q(t, e = n[o++], r[e]);
        return t
    }
      , W = function(t) {
        var r = k.call(this, t = x(t, !0));
        return !(this === z && u(U, t) && !u(D, t)) && (!(r || !u(this, t) || !u(U, t) || u(this, I) && this[I][t]) || r)
    }
      , $ = function(t, r) {
        if (t = b(t),
        r = x(r, !0),
        t !== z || !u(U, r) || u(D, r)) {
            var e = O(t, r);
            return !e || !u(U, r) || u(t, I) && t[I][r] || (e.enumerable = !0),
            e
        }
    }
      , Z = function(t) {
        for (var r, e = C(b(t)), n = [], o = 0; e.length > o; )
            u(U, r = e[o++]) || r == I || r == c || n.push(r);
        return n
    }
      , X = function(t) {
        for (var r, e = t === z, n = C(e ? D : b(t)), o = [], i = 0; n.length > i; )
            !u(U, r = n[i++]) || e && !u(z, r) || o.push(U[r]);
        return o
    };
    Y || (a((M = function() {
        if (this instanceof M)
            throw TypeError("Symbol is not a constructor!");
        var r = h(0 < arguments.length ? arguments[0] : void 0)
          , e = function(t) {
            this === z && e.call(D, t),
            u(this, I) && u(this[I], r) && (this[I][r] = !1),
            K(this, r, _(1, t))
        };
        return o && J && K(z, r, {
            configurable: !0,
            set: e
        }),
        V(r)
    }
    )[j], "toString", function() {
        return this._k
    }),
    P.f = $,
    S.f = q,
    e(118).f = A.f = Z,
    e(53).f = W,
    e(74).f = X,
    o && !e(23) && a(z, "propertyIsEnumerable", W, !0),
    v.f = function(t) {
        return V(p(t))
    }
    ),
    i(i.G + i.W + i.F * !Y, {
        Symbol: M
    });
    for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), rt = 0; tt.length > rt; )
        p(tt[rt++]);
    for (var et = T(p.store), nt = 0; et.length > nt; )
        d(et[nt++]);
    i(i.S + i.F * !Y, "Symbol", {
        for: function(t) {
            return u(F, t += "") ? F[t] : F[t] = M(t)
        },
        keyFor: function(t) {
            if (!G(t))
                throw TypeError(t + " is not a symbol!");
            for (var r in F)
                if (F[r] === t)
                    return r
        },
        useSetter: function() {
            J = !0
        },
        useSimple: function() {
            J = !1
        }
    }),
    i(i.S + i.F * !Y, "Object", {
        create: function(t, r) {
            return void 0 === r ? E(t) : Q(E(t), r)
        },
        defineProperty: q,
        defineProperties: Q,
        getOwnPropertyDescriptor: $,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: X
    }),
    L && i(i.S + i.F * (!Y || f(function() {
        var t = M();
        return "[null]" != B([t]) || "{}" != B({
            a: t
        }) || "{}" != B(Object(t))
    })), "JSON", {
        stringify: function(t) {
            for (var r, e, n = [t], o = 1; arguments.length > o; )
                n.push(arguments[o++]);
            if (e = r = n[1],
            (w(r) || void 0 !== t) && !G(t))
                return y(r) || (r = function(t, r) {
                    if ("function" == typeof e && (r = e.call(this, t, r)),
                    !G(r))
                        return r
                }
                ),
                n[1] = r,
                B.apply(L, n)
        }
    }),
    M[j][N] || e(13)(M[j], N, M[j].valueOf),
    l(M, "Symbol"),
    l(Math, "Math", !0),
    l(n.JSON, "JSON", !0)
}
, function(t, r, e) {
    var a = e(32)
      , c = e(74)
      , f = e(53);
    t.exports = function(t) {
        var r = a(t)
          , e = c.f;
        if (e)
            for (var n, o = e(t), i = f.f, u = 0; o.length > u; )
                i.call(t, n = o[u++]) && r.push(n);
        return r
    }
}
, function(t, r, e) {
    var n = e(21)
      , o = e(118).f
      , i = {}.toString
      , u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return u && "[object Window]" == i.call(t) ? function(t) {
            try {
                return o(t)
            } catch (t) {
                return u.slice()
            }
        }(t) : o(n(t))
    }
}
, function(t, r, e) {
    e(77)("asyncIterator")
}
, function(t, r, e) {
    e(77)("observable")
}
, function(t, r, e) {
    e(159),
    t.exports = e(1).Object.getPrototypeOf
}
, function(t, r, e) {
    var n = e(29)
      , o = e(69);
    e(129)("getPrototypeOf", function() {
        return function(t) {
            return o(n(t))
        }
    })
}
, function(t, r, e) {
    e(161),
    t.exports = e(1).Object.setPrototypeOf
}
, function(t, r, e) {
    var n = e(4);
    n(n.S, "Object", {
        setPrototypeOf: e(162).set
    })
}
, function(t, r, o) {
    var e = o(5)
      , n = o(10)
      , i = function(t, r) {
        if (n(t),
        !e(r) && null !== r)
            throw TypeError(r + ": can't set as prototype!")
    };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__"in {} ? function(t, e, n) {
            try {
                (n = o(15)(Function.call, o(119).f(Object.prototype, "__proto__").set, 2))(t, []),
                e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function(t, r) {
                return i(t, r),
                e ? t.__proto__ = r : n(t, r),
                t
            }
        }({}, !1) : void 0),
        check: i
    }
}
, function(t, r, e) {
    e(164);
    var n = e(1).Object;
    t.exports = function(t, r) {
        return n.create(t, r)
    }
}
, function(t, r, e) {
    var n = e(4);
    n(n.S, "Object", {
        create: e(28)
    })
}
, function(e, t, r) {
    var n = r(86);
    function o(t, r) {
        return e.exports = o = n || function(t, r) {
            return t.__proto__ = r,
            t
        }
        ,
        o(t, r)
    }
    e.exports = o
}
, function(t, r, e) {
    e(64),
    e(48),
    e(70),
    e(167),
    e(173),
    e(176),
    e(178),
    t.exports = e(1).Map
}
, function(t, r, e) {
    "use strict";
    var n = e(168)
      , o = e(120);
    t.exports = e(169)("Map", function(t) {
        return function() {
            return t(this, 0 < arguments.length ? arguments[0] : void 0)
        }
    }, {
        get: function(t) {
            var r = n.getEntry(o(this, "Map"), t);
            return r && r.v
        },
        set: function(t, r) {
            return n.def(o(this, "Map"), 0 === t ? 0 : t, r)
        }
    }, n, !0)
}
, function(t, r, e) {
    "use strict";
    var u = e(9).f
      , a = e(28)
      , c = e(73)
      , f = e(15)
      , s = e(71)
      , l = e(40)
      , n = e(49)
      , o = e(107)
      , i = e(116)
      , h = e(8)
      , p = e(76).fastKey
      , v = e(120)
      , d = h ? "_s" : "size"
      , g = function(t, r) {
        var e, n = p(r);
        if ("F" !== n)
            return t._i[n];
        for (e = t._f; e; e = e.n)
            if (e.k == r)
                return e
    };
    t.exports = {
        getConstructor: function(t, i, e, n) {
            var o = t(function(t, r) {
                s(t, o, i, "_i"),
                t._t = i,
                t._i = a(null),
                t._f = void 0,
                t._l = void 0,
                t[d] = 0,
                null != r && l(r, e, t[n], t)
            });
            return c(o.prototype, {
                clear: function() {
                    for (var t = v(this, i), r = t._i, e = t._f; e; e = e.n)
                        e.r = !0,
                        e.p && (e.p = e.p.n = void 0),
                        delete r[e.i];
                    t._f = t._l = void 0,
                    t[d] = 0
                },
                delete: function(t) {
                    var r = v(this, i)
                      , e = g(r, t);
                    if (e) {
                        var n = e.n
                          , o = e.p;
                        delete r._i[e.i],
                        e.r = !0,
                        o && (o.n = n),
                        n && (n.p = o),
                        r._f == e && (r._f = n),
                        r._l == e && (r._l = o),
                        r[d]--
                    }
                    return !!e
                },
                forEach: function(t) {
                    v(this, i);
                    for (var r, e = f(t, 1 < arguments.length ? arguments[1] : void 0, 3); r = r ? r.n : this._f; )
                        for (e(r.v, r.k, this); r && r.r; )
                            r = r.p
                },
                has: function(t) {
                    return !!g(v(this, i), t)
                }
            }),
            h && u(o.prototype, "size", {
                get: function() {
                    return v(this, i)[d]
                }
            }),
            o
        },
        def: function(t, r, e) {
            var n, o, i = g(t, r);
            return i ? i.v = e : (t._l = i = {
                i: o = p(r, !0),
                k: r,
                v: e,
                p: n = t._l,
                n: void 0,
                r: !1
            },
            t._f || (t._f = i),
            n && (n.n = i),
            t[d]++,
            "F" !== o && (t._i[o] = i)),
            t
        },
        getEntry: g,
        setStrong: function(t, e, r) {
            n(t, e, function(t, r) {
                this._t = v(t, e),
                this._k = r,
                this._l = void 0
            }, function() {
                for (var t = this, r = t._k, e = t._l; e && e.r; )
                    e = e.p;
                return t._t && (t._l = e = e ? e.n : t._t._f) ? o(0, "keys" == r ? e.k : "values" == r ? e.v : [e.k, e.v]) : (t._t = void 0,
                o(1))
            }, r ? "entries" : "values", !r, !0),
            i(e)
        }
    }
}
, function(t, r, e) {
    "use strict";
    var l = e(2)
      , h = e(4)
      , p = e(76)
      , v = e(16)
      , d = e(13)
      , g = e(73)
      , y = e(40)
      , m = e(71)
      , w = e(5)
      , b = e(25)
      , x = e(9).f
      , _ = e(170)(0)
      , E = e(8);
    t.exports = function(e, t, r, n, o, i) {
        var u = l[e]
          , a = u
          , c = o ? "set" : "add"
          , f = a && a.prototype
          , s = {};
        return E && "function" == typeof a && (i || f.forEach && !v(function() {
            (new a).entries().next()
        })) ? (a = t(function(t, r) {
            m(t, a, e, "_c"),
            t._c = new u,
            null != r && y(r, o, t[c], t)
        }),
        _("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(n) {
            var o = "add" == n || "set" == n;
            n in f && (!i || "clear" != n) && d(a.prototype, n, function(t, r) {
                if (m(this, a, n),
                !o && i && !w(t))
                    return "get" == n && void 0;
                var e = this._c[n](0 === t ? 0 : t, r);
                return o ? this : e
            })
        }),
        i || x(a.prototype, "size", {
            get: function() {
                return this._c.size
            }
        })) : (a = n.getConstructor(t, e, o, c),
        g(a.prototype, r),
        p.NEED = !0),
        b(a, e),
        s[e] = a,
        h(h.G + h.W + h.F, s),
        i || n.setStrong(a, e, o),
        a
    }
}
, function(t, r, e) {
    var w = e(15)
      , b = e(51)
      , x = e(29)
      , _ = e(43)
      , n = e(171);
    t.exports = function(l, t) {
        var h = 1 == l
          , p = 2 == l
          , v = 3 == l
          , d = 4 == l
          , g = 6 == l
          , y = 5 == l || g
          , m = t || n;
        return function(t, r, e) {
            for (var n, o, i = x(t), u = b(i), a = w(r, e, 3), c = _(u.length), f = 0, s = h ? m(t, c) : p ? m(t, 0) : void 0; f < c; f++)
                if ((y || f in u) && (o = a(n = u[f], f, i),
                l))
                    if (h)
                        s[f] = o;
                    else if (o)
                        switch (l) {
                        case 3:
                            return !0;
                        case 5:
                            return n;
                        case 6:
                            return f;
                        case 2:
                            s.push(n)
                        }
                    else if (d)
                        return !1;
            return g ? -1 : v || d ? d : s
        }
    }
}
, function(t, r, e) {
    var n = e(172);
    t.exports = function(t, r) {
        return new (n(t))(r)
    }
}
, function(t, r, e) {
    var n = e(5)
      , o = e(90)
      , i = e(3)("species");
    t.exports = function(t) {
        var r;
        return o(t) && ("function" != typeof (r = t.constructor) || r !== Array && !o(r.prototype) || (r = void 0),
        n(r) && null === (r = r[i]) && (r = void 0)),
        void 0 === r ? Array : r
    }
}
, function(t, r, e) {
    var n = e(4);
    n(n.P + n.R, "Map", {
        toJSON: e(174)("Map")
    })
}
, function(t, r, e) {
    var n = e(52)
      , o = e(175);
    t.exports = function(t) {
        return function() {
            if (n(this) != t)
                throw TypeError(t + "#toJSON isn't generic");
            return o(this)
        }
    }
}
, function(t, r, e) {
    var n = e(40);
    t.exports = function(t, r) {
        var e = [];
        return n(t, !1, e.push, e, r),
        e
    }
}
, function(t, r, e) {
    e(177)("Map")
}
, function(t, r, e) {
    "use strict";
    var n = e(4);
    t.exports = function(t) {
        n(n.S, t, {
            of: function() {
                for (var t = arguments.length, r = new Array(t); t--; )
                    r[t] = arguments[t];
                return new this(r)
            }
        })
    }
}
, function(t, r, e) {
    e(179)("Map")
}
, function(t, r, e) {
    "use strict";
    var n = e(4)
      , u = e(20)
      , a = e(15)
      , c = e(40);
    t.exports = function(t) {
        n(n.S, t, {
            from: function(t) {
                var r, e, n, o, i = arguments[1];
                return u(this),
                (r = void 0 !== i) && u(i),
                null == t ? new this : (e = [],
                r ? (n = 0,
                o = a(i, arguments[2], 2),
                c(t, !1, function(t) {
                    e.push(o(t, n++))
                })) : c(t, !1, e.push, e),
                new this(e))
            }
        })
    }
}
, function(t, r, e) {
    e(181),
    t.exports = e(1).Reflect.construct
}
, function(t, r, e) {
    var n = e(4)
      , a = e(28)
      , c = e(20)
      , f = e(10)
      , s = e(5)
      , o = e(16)
      , l = e(182)
      , h = (e(2).Reflect || {}).construct
      , p = o(function() {
        function t() {}
        return !(h(function() {}, [], t)instanceof t)
    })
      , v = !o(function() {
        h(function() {})
    });
    n(n.S + n.F * (p || v), "Reflect", {
        construct: function(t, r) {
            c(t),
            f(r);
            var e = arguments.length < 3 ? t : c(arguments[2]);
            if (v && !p)
                return h(t, r, e);
            if (t == e) {
                switch (r.length) {
                case 0:
                    return new t;
                case 1:
                    return new t(r[0]);
                case 2:
                    return new t(r[0],r[1]);
                case 3:
                    return new t(r[0],r[1],r[2]);
                case 4:
                    return new t(r[0],r[1],r[2],r[3])
                }
                var n = [null];
                return n.push.apply(n, r),
                new (l.apply(t, n))
            }
            var o = e.prototype
              , i = a(s(o) ? o : Object.prototype)
              , u = Function.apply.call(t, i, r);
            return s(u) ? u : i
        }
    })
}
, function(t, r, e) {
    "use strict";
    var i = e(20)
      , u = e(5)
      , a = e(113)
      , c = [].slice
      , f = {};
    t.exports = Function.bind || function(r) {
        var e = i(this)
          , n = c.call(arguments, 1)
          , o = function() {
            var t = n.concat(c.call(arguments));
            return this instanceof o ? function(t, r, e) {
                if (!(r in f)) {
                    for (var n = [], o = 0; o < r; o++)
                        n[o] = "a[" + o + "]";
                    f[r] = Function("F,a", "return new F(" + n.join(",") + ")")
                }
                return f[r](t, e)
            }(e, t.length, t) : a(e, t, r)
        };
        return u(e.prototype) && (o.prototype = e.prototype),
        o
    }
}
, function(t, r) {
    var e = {}.toString;
    t.exports = Array.isArray || function(t) {
        return "[object Array]" == e.call(t)
    }
}
, function(t, e) {
    e.L = {
        bit: 1
    },
    e.M = {
        bit: 0
    },
    e.Q = {
        bit: 3
    },
    e.H = {
        bit: 2
    },
    e.isValid = function(t) {
        return t && void 0 !== t.bit && 0 <= t.bit && t.bit < 4
    }
    ,
    e.from = function(t, r) {
        if (e.isValid(t))
            return t;
        try {
            return function(t) {
                if ("string" != typeof t)
                    throw new Error("Param is not a string");
                switch (t.toLowerCase()) {
                case "l":
                case "low":
                    return e.L;
                case "m":
                case "medium":
                    return e.M;
                case "q":
                case "quartile":
                    return e.Q;
                case "h":
                case "high":
                    return e.H;
                default:
                    throw new Error("Unknown EC Level: " + t)
                }
            }(t)
        } catch (t) {
            return r
        }
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , function(r, t, e) {
    var n = e(126)
      , o = e(86);
    function i(t) {
        return r.exports = i = o ? n : function(t) {
            return t.__proto__ || n(t)
        }
        ,
        i(t)
    }
    r.exports = i
}
, function(t, r, e) {
    var f = e(101);
    function c(t, r, e, n, o, i, u) {
        try {
            var a = t[i](u)
              , c = a.value
        } catch (t) {
            return void e(t)
        }
        a.done ? r(c) : f.resolve(c).then(n, o)
    }
    t.exports = function(a) {
        return function() {
            var t = this
              , u = arguments;
            return new f(function(r, e) {
                var n = a.apply(t, u);
                function o(t) {
                    c(n, r, e, o, i, "next", t)
                }
                function i(t) {
                    c(n, r, e, o, i, "throw", t)
                }
                o(void 0)
            }
            )
        }
    }
}
, function(t, r, e) {
    t.exports = e(257)
}
, function(t, r, e) {
    var n = e(184)
      , o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81]
      , i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
    r.getBlocksCount = function(t, r) {
        switch (r) {
        case n.L:
            return o[4 * (t - 1) + 0];
        case n.M:
            return o[4 * (t - 1) + 1];
        case n.Q:
            return o[4 * (t - 1) + 2];
        case n.H:
            return o[4 * (t - 1) + 3];
        default:
            return
        }
    }
    ,
    r.getTotalCodewordsCount = function(t, r) {
        switch (r) {
        case n.L:
            return i[4 * (t - 1) + 0];
        case n.M:
            return i[4 * (t - 1) + 1];
        case n.Q:
            return i[4 * (t - 1) + 2];
        case n.H:
            return i[4 * (t - 1) + 3];
        default:
            return
        }
    }
}
, function(t, r) {
    r.isValid = function(t) {
        return !isNaN(t) && 1 <= t && t <= 40
    }
}
, function(t, r) {
    var e = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+"
      , n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (e = e.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
    r.KANJI = new RegExp(e,"g"),
    r.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),
    r.BYTE = new RegExp(n,"g"),
    r.NUMERIC = new RegExp("[0-9]+","g"),
    r.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+","g");
    var o = new RegExp("^" + e + "$")
      , i = new RegExp("^[0-9]+$")
      , u = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    r.testKanji = function(t) {
        return o.test(t)
    }
    ,
    r.testNumeric = function(t) {
        return i.test(t)
    }
    ,
    r.testAlphanumeric = function(t) {
        return u.test(t)
    }
}
, function(t, p) {
    function o(t) {
        if ("string" != typeof t)
            throw new Error("Color should be defined as hex string");
        var r = t.slice().replace("#", "").split("");
        if (r.length < 3 || 5 === r.length || 8 < r.length)
            throw new Error("Invalid hex color: " + t);
        3 !== r.length && 4 !== r.length || (r = Array.prototype.concat.apply([], r.map(function(t) {
            return [t, t]
        }))),
        6 === r.length && r.push("F", "F");
        var e = parseInt(r.join(""), 16);
        return {
            r: e >> 24 & 255,
            g: e >> 16 & 255,
            b: e >> 8 & 255,
            a: 255 & e,
            hex: "#" + r.slice(0, 6).join("")
        }
    }
    p.getOptions = function(t) {
        t || (t = {}),
        t.color || (t.color = {});
        var r = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin
          , e = t.width && 21 <= t.width ? t.width : void 0
          , n = t.scale || 4;
        return {
            width: e,
            scale: e ? 4 : n,
            margin: r,
            color: {
                dark: o(t.color.dark || "#000000ff"),
                light: o(t.color.light || "#ffffffff")
            },
            type: t.type,
            rendererOpts: t.rendererOpts || {}
        }
    }
    ,
    p.getScale = function(t, r) {
        return r.width && r.width >= t + 2 * r.margin ? r.width / (t + 2 * r.margin) : r.scale
    }
    ,
    p.getImageWidth = function(t, r) {
        var e = p.getScale(t, r);
        return Math.floor((t + 2 * r.margin) * e)
    }
    ,
    p.qrToImageData = function(t, r, e) {
        for (var n = r.modules.size, o = r.modules.data, i = p.getScale(n, e), u = Math.floor((n + 2 * e.margin) * i), a = e.margin * i, c = [e.color.light, e.color.dark], f = 0; f < u; f++)
            for (var s = 0; s < u; s++) {
                var l = 4 * (f * u + s)
                  , h = e.color.light;
                if (a <= f && a <= s && f < u - a && s < u - a)
                    h = c[o[Math.floor((f - a) / i) * n + Math.floor((s - a) / i)] ? 1 : 0];
                t[l++] = h.r,
                t[l++] = h.g,
                t[l++] = h.b,
                t[l] = h.a
            }
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, r, e) {
    t.exports = e(255)
}
, function(t, r) {
    t.exports = function(t, r) {
        if (!(t instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
}
, function(t, r, e) {
    var o = e(125);
    function n(t, r) {
        for (var e = 0; e < r.length; e++) {
            var n = r[e];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            o(t, n.key, n)
        }
    }
    t.exports = function(t, r, e) {
        return r && n(t.prototype, r),
        e && n(t, e),
        t
    }
}
, function(t, r, e) {
    var n = e(102)
      , o = e(259);
    t.exports = function(t, r) {
        return !r || "object" !== n(r) && "function" != typeof r ? o(t) : r
    }
}
, function(t, r, e) {
    var n = e(87)
      , o = e(165);
    t.exports = function(t, r) {
        if ("function" != typeof r && null !== r)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = n(r && r.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        r && o(t, r)
    }
}
, function(r, t, e) {
    var n = e(87)
      , o = e(127)
      , i = e(210)
      , u = e(165)
      , a = e(260)
      , c = e(261);
    function f(t) {
        var e = "function" == typeof o ? new o : void 0;
        return r.exports = f = function(t) {
            if (null === t || !a(t))
                return t;
            if ("function" != typeof t)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t))
                    return e.get(t);
                e.set(t, r)
            }
            function r() {
                return c(t, arguments, i(this).constructor)
            }
            return r.prototype = n(t.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            u(r, t)
        }
        ,
        f(t)
    }
    r.exports = f
}
, function(t, r, e) {
    var f = e(262)
      , s = e(263)
      , n = e(280)
      , o = e(281);
    function i(n, o, i, u, r) {
        var t = [].slice.call(arguments, 1)
          , e = t.length
          , a = "function" == typeof t[e - 1];
        if (!a && !f())
            throw new Error("Callback required as last argument");
        if (!a) {
            if (e < 1)
                throw new Error("Too few arguments provided");
            return 1 === e ? (i = o,
            o = u = void 0) : 2 !== e || o.getContext || (u = i,
            i = o,
            o = void 0),
            new Promise(function(t, r) {
                try {
                    var e = s.create(i, u);
                    t(n(e, o, u))
                } catch (t) {
                    r(t)
                }
            }
            )
        }
        if (e < 2)
            throw new Error("Too few arguments provided");
        2 === e ? (r = i,
        i = o,
        o = u = void 0) : 3 === e && (o.getContext && void 0 === r ? (r = u,
        u = void 0) : (r = u,
        u = i,
        i = o,
        o = void 0));
        try {
            var c = s.create(i, u);
            r(null, n(c, o, u))
        } catch (t) {
            r(t)
        }
    }
    r.create = s.create,
    r.toCanvas = i.bind(null, n.render),
    r.toDataURL = i.bind(null, n.renderToDataURL),
    r.toString = i.bind(null, function(t, r, e) {
        return o.render(t, e)
    })
}
, , , function(t, r, e) {
    var n = function() {
        return this || "object" == typeof self && self
    }() || Function("return this")()
      , o = n.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")
      , i = o && n.regeneratorRuntime;
    if (n.regeneratorRuntime = void 0,
    t.exports = e(254),
    o)
        n.regeneratorRuntime = i;
    else
        try {
            delete n.regeneratorRuntime
        } catch (t) {
            n.regeneratorRuntime = void 0
        }
}
, function(L, t) {
    !function(t) {
        "use strict";
        var c, r = Object.prototype, f = r.hasOwnProperty, e = "function" == typeof Symbol ? Symbol : {}, o = e.iterator || "@@iterator", n = e.asyncIterator || "@@asyncIterator", i = e.toStringTag || "@@toStringTag", u = "object" == typeof L, a = t.regeneratorRuntime;
        if (a)
            u && (L.exports = a);
        else {
            (a = t.regeneratorRuntime = u ? L.exports : {}).wrap = w;
            var l = "suspendedStart"
              , h = "suspendedYield"
              , p = "executing"
              , v = "completed"
              , d = {}
              , s = {};
            s[o] = function() {
                return this
            }
            ;
            var g = Object.getPrototypeOf
              , y = g && g(g(C([])));
            y && y !== r && f.call(y, o) && (s = y);
            var m = E.prototype = x.prototype = Object.create(s);
            _.prototype = m.constructor = E,
            E.constructor = _,
            E[i] = _.displayName = "GeneratorFunction",
            a.isGeneratorFunction = function(t) {
                var r = "function" == typeof t && t.constructor;
                return !!r && (r === _ || "GeneratorFunction" === (r.displayName || r.name))
            }
            ,
            a.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, E) : (t.__proto__ = E,
                i in t || (t[i] = "GeneratorFunction")),
                t.prototype = Object.create(m),
                t
            }
            ,
            a.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            A(P.prototype),
            P.prototype[n] = function() {
                return this
            }
            ,
            a.AsyncIterator = P,
            a.async = function(t, r, e, n) {
                var o = new P(w(t, r, e, n));
                return a.isGeneratorFunction(r) ? o : o.next().then(function(t) {
                    return t.done ? t.value : o.next()
                })
            }
            ,
            A(m),
            m[i] = "Generator",
            m[o] = function() {
                return this
            }
            ,
            m.toString = function() {
                return "[object Generator]"
            }
            ,
            a.keys = function(e) {
                var n = [];
                for (var t in e)
                    n.push(t);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var r = n.pop();
                        if (r in e)
                            return t.value = r,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            a.values = C,
            R.prototype = {
                constructor: R,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = c,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = c,
                    this.tryEntries.forEach(O),
                    !t)
                        for (var r in this)
                            "t" === r.charAt(0) && f.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = c)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var n = this;
                    function t(t, r) {
                        return i.type = "throw",
                        i.arg = e,
                        n.next = t,
                        r && (n.method = "next",
                        n.arg = c),
                        !!r
                    }
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var o = this.tryEntries[r]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return t("end");
                        if (o.tryLoc <= this.prev) {
                            var u = f.call(o, "catchLoc")
                              , a = f.call(o, "finallyLoc");
                            if (u && a) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            } else if (u) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0)
                            } else {
                                if (!a)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, r) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc <= this.prev && f.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= r && r <= o.finallyLoc && (o = null);
                    var i = o ? o.completion : {};
                    return i.type = t,
                    i.arg = r,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    d) : this.complete(i)
                },
                complete: function(t, r) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && r && (this.next = r),
                    d
                },
                finish: function(t) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var e = this.tryEntries[r];
                        if (e.finallyLoc === t)
                            return this.complete(e.completion, e.afterLoc),
                            O(e),
                            d
                    }
                },
                catch: function(t) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var e = this.tryEntries[r];
                        if (e.tryLoc === t) {
                            var n = e.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                O(e)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, r, e) {
                    return this.delegate = {
                        iterator: C(t),
                        resultName: r,
                        nextLoc: e
                    },
                    "next" === this.method && (this.arg = c),
                    d
                }
            }
        }
        function w(t, r, e, n) {
            var i, u, a, c, o = r && r.prototype instanceof x ? r : x, f = Object.create(o.prototype), s = new R(n || []);
            return f._invoke = (i = t,
            u = e,
            a = s,
            c = l,
            function(t, r) {
                if (c === p)
                    throw new Error("Generator is already running");
                if (c === v) {
                    if ("throw" === t)
                        throw r;
                    return M()
                }
                for (a.method = t,
                a.arg = r; ; ) {
                    var e = a.delegate;
                    if (e) {
                        var n = S(e, a);
                        if (n) {
                            if (n === d)
                                continue;
                            return n
                        }
                    }
                    if ("next" === a.method)
                        a.sent = a._sent = a.arg;
                    else if ("throw" === a.method) {
                        if (c === l)
                            throw c = v,
                            a.arg;
                        a.dispatchException(a.arg)
                    } else
                        "return" === a.method && a.abrupt("return", a.arg);
                    c = p;
                    var o = b(i, u, a);
                    if ("normal" === o.type) {
                        if (c = a.done ? v : h,
                        o.arg === d)
                            continue;
                        return {
                            value: o.arg,
                            done: a.done
                        }
                    }
                    "throw" === o.type && (c = v,
                    a.method = "throw",
                    a.arg = o.arg)
                }
            }
            ),
            f
        }
        function b(t, r, e) {
            try {
                return {
                    type: "normal",
                    arg: t.call(r, e)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        function x() {}
        function _() {}
        function E() {}
        function A(t) {
            ["next", "throw", "return"].forEach(function(r) {
                t[r] = function(t) {
                    return this._invoke(r, t)
                }
            })
        }
        function P(c) {
            var r;
            this._invoke = function(e, n) {
                function t() {
                    return new Promise(function(t, r) {
                        !function r(t, e, n, o) {
                            var i = b(c[t], c, e);
                            if ("throw" !== i.type) {
                                var u = i.arg
                                  , a = u.value;
                                return a && "object" == typeof a && f.call(a, "__await") ? Promise.resolve(a.__await).then(function(t) {
                                    r("next", t, n, o)
                                }, function(t) {
                                    r("throw", t, n, o)
                                }) : Promise.resolve(a).then(function(t) {
                                    u.value = t,
                                    n(u)
                                }, function(t) {
                                    return r("throw", t, n, o)
                                })
                            }
                            o(i.arg)
                        }(e, n, t, r)
                    }
                    )
                }
                return r = r ? r.then(t, t) : t()
            }
        }
        function S(t, r) {
            var e = t.iterator[r.method];
            if (e === c) {
                if (r.delegate = null,
                "throw" === r.method) {
                    if (t.iterator.return && (r.method = "return",
                    r.arg = c,
                    S(t, r),
                    "throw" === r.method))
                        return d;
                    r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return d
            }
            var n = b(e, t.iterator, r.arg);
            if ("throw" === n.type)
                return r.method = "throw",
                r.arg = n.arg,
                r.delegate = null,
                d;
            var o = n.arg;
            return o ? o.done ? (r[t.resultName] = o.value,
            r.next = t.nextLoc,
            "return" !== r.method && (r.method = "next",
            r.arg = c),
            r.delegate = null,
            d) : o : (r.method = "throw",
            r.arg = new TypeError("iterator result is not an object"),
            r.delegate = null,
            d)
        }
        function T(t) {
            var r = {
                tryLoc: t[0]
            };
            1 in t && (r.catchLoc = t[1]),
            2 in t && (r.finallyLoc = t[2],
            r.afterLoc = t[3]),
            this.tryEntries.push(r)
        }
        function O(t) {
            var r = t.completion || {};
            r.type = "normal",
            delete r.arg,
            t.completion = r
        }
        function R(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            t.forEach(T, this),
            this.reset(!0)
        }
        function C(r) {
            if (r) {
                var t = r[o];
                if (t)
                    return t.call(r);
                if ("function" == typeof r.next)
                    return r;
                if (!isNaN(r.length)) {
                    var e = -1
                      , n = function t() {
                        for (; ++e < r.length; )
                            if (f.call(r, e))
                                return t.value = r[e],
                                t.done = !1,
                                t;
                        return t.value = c,
                        t.done = !0,
                        t
                    };
                    return n.next = n
                }
            }
            return {
                next: M
            }
        }
        function M() {
            return {
                value: c,
                done: !0
            }
        }
    }(function() {
        return this || "object" == typeof self && self
    }() || Function("return this")())
}
, function(t, r, e) {
    e(256),
    t.exports = e(1).Array.isArray
}
, function(t, r, e) {
    var n = e(4);
    n(n.S, "Array", {
        isArray: e(90)
    })
}
, function(t, r, e) {
    e(258),
    t.exports = e(1).Object.keys
}
, function(t, r, e) {
    var n = e(29)
      , o = e(32);
    e(129)("keys", function() {
        return function(t) {
            return o(n(t))
        }
    })
}
, function(t, r) {
    t.exports = function(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
}
, function(t, r) {
    t.exports = function(t) {
        return -1 !== Function.toString.call(t).indexOf("[native code]")
    }
}
, function(n, t, r) {
    var o = r(88)
      , i = r(165);
    function u(t, r, e) {
        return !function() {
            if ("undefined" == typeof Reflect || !o)
                return !1;
            if (o.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(o(Date, [], function() {})),
                !0
            } catch (t) {
                return !1
            }
        }() ? n.exports = u = function(t, r, e) {
            var n = [null];
            n.push.apply(n, r);
            var o = new (Function.bind.apply(t, n));
            return e && i(o, e.prototype),
            o
        }
        : n.exports = u = o,
        u.apply(null, arguments)
    }
    n.exports = u
}
, function(t, r) {
    t.exports = function() {
        return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
    }
}
, function(t, r, e) {
    var A = e(91)
      , P = e(78)
      , i = e(184)
      , a = e(264)
      , l = e(265)
      , h = e(266)
      , p = e(267)
      , v = e(268)
      , S = e(213)
      , T = e(269)
      , d = e(272)
      , c = e(273)
      , f = e(79)
      , g = e(274)
      , y = e(183);
    function m(t, r, e) {
        var n, o, i = t.size, u = c.getEncodedBits(r, e);
        for (n = 0; n < 15; n++)
            o = 1 == (u >> n & 1),
            n < 6 ? t.set(n, 8, o, !0) : n < 8 ? t.set(n + 1, 8, o, !0) : t.set(i - 15 + n, 8, o, !0),
            n < 8 ? t.set(8, i - n - 1, o, !0) : n < 9 ? t.set(8, 15 - n - 1 + 1, o, !0) : t.set(8, 15 - n - 1, o, !0);
        t.set(i - 8, 8, 1, !0)
    }
    function w(r, t, e) {
        var n = new a;
        e.forEach(function(t) {
            n.put(t.mode.bit, 4),
            n.put(t.getLength(), f.getCharCountIndicator(t.mode, r)),
            t.write(n)
        });
        var o = 8 * (P.getSymbolTotalCodewords(r) - S.getTotalCodewordsCount(r, t));
        for (n.getLengthInBits() + 4 <= o && n.put(0, 4); n.getLengthInBits() % 8 != 0; )
            n.putBit(0);
        for (var i = (o - n.getLengthInBits()) / 8, u = 0; u < i; u++)
            n.put(u % 2 ? 17 : 236, 8);
        return function(t, r, e) {
            for (var n = P.getSymbolTotalCodewords(r), o = S.getTotalCodewordsCount(r, e), i = n - o, u = S.getBlocksCount(r, e), a = u - n % u, c = Math.floor(n / u), f = Math.floor(i / u), s = f + 1, l = c - f, h = new T(l), p = 0, v = new Array(u), d = new Array(u), g = 0, y = new A(t.buffer), m = 0; m < u; m++) {
                var w = m < a ? f : s;
                v[m] = y.slice(p, p + w),
                d[m] = h.encode(v[m]),
                p += w,
                g = Math.max(g, w)
            }
            var b, x, _ = new A(n), E = 0;
            for (b = 0; b < g; b++)
                for (x = 0; x < u; x++)
                    b < v[x].length && (_[E++] = v[x][b]);
            for (b = 0; b < l; b++)
                for (x = 0; x < u; x++)
                    _[E++] = d[x][b];
            return _
        }(n, r, t)
    }
    function u(t, r, e, n) {
        var o;
        if (y(t))
            o = g.fromArray(t);
        else {
            if ("string" != typeof t)
                throw new Error("Invalid data");
            var i = r;
            if (!i) {
                var u = g.rawSplit(t);
                i = d.getBestVersionForData(u, e)
            }
            o = g.fromString(t, i || 40)
        }
        var a = d.getBestVersionForData(o, e);
        if (!a)
            throw new Error("The amount of data is too big to be stored in a QR Code");
        if (r) {
            if (r < a)
                throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + a + ".\n")
        } else
            r = a;
        var c = w(r, e, o)
          , f = P.getSymbolSize(r)
          , s = new l(f);
        return function(t, r) {
            for (var e = t.size, n = p.getPositions(r), o = 0; o < n.length; o++)
                for (var i = n[o][0], u = n[o][1], a = -1; a <= 7; a++)
                    if (!(i + a <= -1 || e <= i + a))
                        for (var c = -1; c <= 7; c++)
                            u + c <= -1 || e <= u + c || (0 <= a && a <= 6 && (0 === c || 6 === c) || 0 <= c && c <= 6 && (0 === a || 6 === a) || 2 <= a && a <= 4 && 2 <= c && c <= 4 ? t.set(i + a, u + c, !0, !0) : t.set(i + a, u + c, !1, !0))
        }(s, r),
        function(t) {
            for (var r = t.size, e = 8; e < r - 8; e++) {
                var n = e % 2 == 0;
                t.set(e, 6, n, !0),
                t.set(6, e, n, !0)
            }
        }(s),
        function(t, r) {
            for (var e = h.getPositions(r), n = 0; n < e.length; n++)
                for (var o = e[n][0], i = e[n][1], u = -2; u <= 2; u++)
                    for (var a = -2; a <= 2; a++)
                        -2 === u || 2 === u || -2 === a || 2 === a || 0 === u && 0 === a ? t.set(o + u, i + a, !0, !0) : t.set(o + u, i + a, !1, !0)
        }(s, r),
        m(s, e, 0),
        7 <= r && function(t, r) {
            for (var e, n, o, i = t.size, u = d.getEncodedBits(r), a = 0; a < 18; a++)
                e = Math.floor(a / 3),
                n = a % 3 + i - 8 - 3,
                o = 1 == (u >> a & 1),
                t.set(e, n, o, !0),
                t.set(n, e, o, !0)
        }(s, r),
        function(t, r) {
            for (var e = t.size, n = -1, o = e - 1, i = 7, u = 0, a = e - 1; 0 < a; a -= 2)
                for (6 === a && a--; ; ) {
                    for (var c = 0; c < 2; c++)
                        if (!t.isReserved(o, a - c)) {
                            var f = !1;
                            u < r.length && (f = 1 == (r[u] >>> i & 1)),
                            t.set(o, a - c, f),
                            -1 == --i && (u++,
                            i = 7)
                        }
                    if ((o += n) < 0 || e <= o) {
                        o -= n,
                        n = -n;
                        break
                    }
                }
        }(s, c),
        isNaN(n) && (n = v.getBestMask(s, m.bind(null, s, e))),
        v.applyMask(n, s),
        m(s, e, n),
        {
            modules: s,
            version: r,
            errorCorrectionLevel: e,
            maskPattern: n,
            segments: o
        }
    }
    r.create = function(t, r) {
        if (void 0 === t || "" === t)
            throw new Error("No input text");
        var e, n, o = i.M;
        return void 0 !== r && (o = i.from(r.errorCorrectionLevel, i.M),
        e = d.from(r.version),
        n = v.from(r.maskPattern),
        r.toSJISFunc && P.setToSJISFunction(r.toSJISFunc)),
        u(t, e, o, n)
    }
}
, function(t, r) {
    function e() {
        this.buffer = [],
        this.length = 0
    }
    e.prototype = {
        get: function(t) {
            var r = Math.floor(t / 8);
            return 1 == (this.buffer[r] >>> 7 - t % 8 & 1)
        },
        put: function(t, r) {
            for (var e = 0; e < r; e++)
                this.putBit(1 == (t >>> r - e - 1 & 1))
        },
        getLengthInBits: function() {
            return this.length
        },
        putBit: function(t) {
            var r = Math.floor(this.length / 8);
            this.buffer.length <= r && this.buffer.push(0),
            t && (this.buffer[r] |= 128 >>> this.length % 8),
            this.length++
        }
    },
    t.exports = e
}
, function(t, r, e) {
    var n = e(91);
    function o(t) {
        if (!t || t < 1)
            throw new Error("BitMatrix size must be defined and greater than 0");
        this.size = t,
        this.data = new n(t * t),
        this.data.fill(0),
        this.reservedBit = new n(t * t),
        this.reservedBit.fill(0)
    }
    o.prototype.set = function(t, r, e, n) {
        var o = t * this.size + r;
        this.data[o] = e,
        n && (this.reservedBit[o] = !0)
    }
    ,
    o.prototype.get = function(t, r) {
        return this.data[t * this.size + r]
    }
    ,
    o.prototype.xor = function(t, r, e) {
        this.data[t * this.size + r] ^= e
    }
    ,
    o.prototype.isReserved = function(t, r) {
        return this.reservedBit[t * this.size + r]
    }
    ,
    t.exports = o
}
, function(t, u, r) {
    var a = r(78).getSymbolSize;
    u.getRowColCoords = function(t) {
        if (1 === t)
            return [];
        for (var r = Math.floor(t / 7) + 2, e = a(t), n = 145 === e ? 26 : 2 * Math.ceil((e - 13) / (2 * r - 2)), o = [e - 7], i = 1; i < r - 1; i++)
            o[i] = o[i - 1] - n;
        return o.push(6),
        o.reverse()
    }
    ,
    u.getPositions = function(t) {
        for (var r = [], e = u.getRowColCoords(t), n = e.length, o = 0; o < n; o++)
            for (var i = 0; i < n; i++)
                0 === o && 0 === i || 0 === o && i === n - 1 || o === n - 1 && 0 === i || r.push([e[o], e[i]]);
        return r
    }
}
, function(t, r, e) {
    var n = e(78).getSymbolSize;
    r.getPositions = function(t) {
        var r = n(t);
        return [[0, 0], [r - 7, 0], [0, r - 7]]
    }
}
, function(t, a) {
    a.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    var s = 3
      , u = 3
      , c = 40
      , o = 10;
    function i(t, r, e) {
        switch (t) {
        case a.Patterns.PATTERN000:
            return (r + e) % 2 == 0;
        case a.Patterns.PATTERN001:
            return r % 2 == 0;
        case a.Patterns.PATTERN010:
            return e % 3 == 0;
        case a.Patterns.PATTERN011:
            return (r + e) % 3 == 0;
        case a.Patterns.PATTERN100:
            return (Math.floor(r / 2) + Math.floor(e / 3)) % 2 == 0;
        case a.Patterns.PATTERN101:
            return r * e % 2 + r * e % 3 == 0;
        case a.Patterns.PATTERN110:
            return (r * e % 2 + r * e % 3) % 2 == 0;
        case a.Patterns.PATTERN111:
            return (r * e % 3 + (r + e) % 2) % 2 == 0;
        default:
            throw new Error("bad maskPattern:" + t)
        }
    }
    a.isValid = function(t) {
        return null != t && "" !== t && !isNaN(t) && 0 <= t && t <= 7
    }
    ,
    a.from = function(t) {
        return a.isValid(t) ? parseInt(t, 10) : void 0
    }
    ,
    a.getPenaltyN1 = function(t) {
        for (var r = t.size, e = 0, n = 0, o = 0, i = null, u = null, a = 0; a < r; a++) {
            n = o = 0,
            i = u = null;
            for (var c = 0; c < r; c++) {
                var f = t.get(a, c);
                f === i ? n++ : (5 <= n && (e += s + (n - 5)),
                i = f,
                n = 1),
                (f = t.get(c, a)) === u ? o++ : (5 <= o && (e += s + (o - 5)),
                u = f,
                o = 1)
            }
            5 <= n && (e += s + (n - 5)),
            5 <= o && (e += s + (o - 5))
        }
        return e
    }
    ,
    a.getPenaltyN2 = function(t) {
        for (var r = t.size, e = 0, n = 0; n < r - 1; n++)
            for (var o = 0; o < r - 1; o++) {
                var i = t.get(n, o) + t.get(n, o + 1) + t.get(n + 1, o) + t.get(n + 1, o + 1);
                4 !== i && 0 !== i || e++
            }
        return e * u
    }
    ,
    a.getPenaltyN3 = function(t) {
        for (var r = t.size, e = 0, n = 0, o = 0, i = 0; i < r; i++) {
            n = o = 0;
            for (var u = 0; u < r; u++)
                n = n << 1 & 2047 | t.get(i, u),
                10 <= u && (1488 === n || 93 === n) && e++,
                o = o << 1 & 2047 | t.get(u, i),
                10 <= u && (1488 === o || 93 === o) && e++
        }
        return e * c
    }
    ,
    a.getPenaltyN4 = function(t) {
        for (var r = 0, e = t.data.length, n = 0; n < e; n++)
            r += t.data[n];
        return Math.abs(Math.ceil(100 * r / e / 5) - 10) * o
    }
    ,
    a.applyMask = function(t, r) {
        for (var e = r.size, n = 0; n < e; n++)
            for (var o = 0; o < e; o++)
                r.isReserved(o, n) || r.xor(o, n, i(t, o, n))
    }
    ,
    a.getBestMask = function(t, r) {
        for (var e = Object.keys(a.Patterns).length, n = 0, o = 1 / 0, i = 0; i < e; i++) {
            r(i),
            a.applyMask(i, t);
            var u = a.getPenaltyN1(t) + a.getPenaltyN2(t) + a.getPenaltyN3(t) + a.getPenaltyN4(t);
            a.applyMask(i, t),
            u < o && (o = u,
            n = i)
        }
        return n
    }
}
, function(t, r, e) {
    var u = e(91)
      , a = e(270);
    function n(t) {
        this.genPoly = void 0,
        this.degree = t,
        this.degree && this.initialize(this.degree)
    }
    n.prototype.initialize = function(t) {
        this.degree = t,
        this.genPoly = a.generateECPolynomial(this.degree)
    }
    ,
    n.prototype.encode = function(t) {
        if (!this.genPoly)
            throw new Error("Encoder not initialized");
        var r = new u(this.degree);
        r.fill(0);
        var e = u.concat([t, r], t.length + this.degree)
          , n = a.mod(e, this.genPoly)
          , o = this.degree - n.length;
        if (0 < o) {
            var i = new u(this.degree);
            return i.fill(0),
            n.copy(i, o),
            i
        }
        return n
    }
    ,
    t.exports = n
}
, function(t, n, r) {
    var u = r(91)
      , a = r(271);
    n.mul = function(t, r) {
        var e = new u(t.length + r.length - 1);
        e.fill(0);
        for (var n = 0; n < t.length; n++)
            for (var o = 0; o < r.length; o++)
                e[n + o] ^= a.mul(t[n], r[o]);
        return e
    }
    ,
    n.mod = function(t, r) {
        for (var e = new u(t); 0 <= e.length - r.length; ) {
            for (var n = e[0], o = 0; o < r.length; o++)
                e[o] ^= a.mul(r[o], n);
            for (var i = 0; i < e.length && 0 === e[i]; )
                i++;
            e = e.slice(i)
        }
        return e
    }
    ,
    n.generateECPolynomial = function(t) {
        for (var r = new u([1]), e = 0; e < t; e++)
            r = n.mul(r, [1, a.exp(e)]);
        return r
    }
}
, function(t, r, e) {
    var n = e(91)
      , o = new n(512)
      , i = new n(256);
    !function() {
        for (var t = 1, r = 0; r < 255; r++)
            o[r] = t,
            i[t] = r,
            256 & (t <<= 1) && (t ^= 285);
        for (r = 255; r < 512; r++)
            o[r] = o[r - 255]
    }(),
    r.log = function(t) {
        if (t < 1)
            throw new Error("log(" + t + ")");
        return i[t]
    }
    ,
    r.exp = function(t) {
        return o[t]
    }
    ,
    r.mul = function(t, r) {
        return 0 === t || 0 === r ? 0 : o[i[t] + i[r]]
    }
}
, function(t, o, r) {
    var i = r(78)
      , u = r(213)
      , a = r(184)
      , c = r(79)
      , f = r(214)
      , s = r(183)
      , e = i.getBCHDigit(7973);
    function l(t, r) {
        return c.getCharCountIndicator(t, r) + 4
    }
    function h(t, e) {
        var n = 0;
        return t.forEach(function(t) {
            var r = l(t.mode, e);
            n += r + t.getBitsLength()
        }),
        n
    }
    o.from = function(t, r) {
        return f.isValid(t) ? parseInt(t, 10) : r
    }
    ,
    o.getCapacity = function(t, r, e) {
        if (!f.isValid(t))
            throw new Error("Invalid QR Code version");
        void 0 === e && (e = c.BYTE);
        var n = 8 * (i.getSymbolTotalCodewords(t) - u.getTotalCodewordsCount(t, r));
        if (e === c.MIXED)
            return n;
        var o = n - l(e, t);
        switch (e) {
        case c.NUMERIC:
            return Math.floor(o / 10 * 3);
        case c.ALPHANUMERIC:
            return Math.floor(o / 11 * 2);
        case c.KANJI:
            return Math.floor(o / 13);
        case c.BYTE:
        default:
            return Math.floor(o / 8)
        }
    }
    ,
    o.getBestVersionForData = function(t, r) {
        var e, n = a.from(r, a.M);
        if (s(t)) {
            if (1 < t.length)
                return function(t, r) {
                    for (var e = 1; e <= 40; e++)
                        if (h(t, e) <= o.getCapacity(e, r, c.MIXED))
                            return e
                }(t, n);
            if (0 === t.length)
                return 1;
            e = t[0]
        } else
            e = t;
        return function(t, r, e) {
            for (var n = 1; n <= 40; n++)
                if (r <= o.getCapacity(n, e, t))
                    return n
        }(e.mode, e.getLength(), n)
    }
    ,
    o.getEncodedBits = function(t) {
        if (!f.isValid(t) || t < 7)
            throw new Error("Invalid QR Code version");
        for (var r = t << 12; 0 <= i.getBCHDigit(r) - e; )
            r ^= 7973 << i.getBCHDigit(r) - e;
        return t << 12 | r
    }
}
, function(t, r, e) {
    var o = e(78)
      , i = o.getBCHDigit(1335);
    r.getEncodedBits = function(t, r) {
        for (var e = t.bit << 3 | r, n = e << 10; 0 <= o.getBCHDigit(n) - i; )
            n ^= 1335 << o.getBCHDigit(n) - i;
        return 21522 ^ (e << 10 | n)
    }
}
, function(t, u, r) {
    var p = r(79)
      , o = r(275)
      , i = r(276)
      , a = r(277)
      , c = r(278)
      , f = r(215)
      , s = r(78)
      , l = r(279);
    function h(t) {
        return unescape(encodeURIComponent(t)).length
    }
    function v(t, r, e) {
        for (var n, o = []; null !== (n = t.exec(e)); )
            o.push({
                data: n[0],
                index: n.index,
                mode: r,
                length: n[0].length
            });
        return o
    }
    function d(t) {
        var r, e, n = v(f.NUMERIC, p.NUMERIC, t), o = v(f.ALPHANUMERIC, p.ALPHANUMERIC, t);
        return e = s.isKanjiModeEnabled() ? (r = v(f.BYTE, p.BYTE, t),
        v(f.KANJI, p.KANJI, t)) : (r = v(f.BYTE_KANJI, p.BYTE, t),
        []),
        n.concat(o, r, e).sort(function(t, r) {
            return t.index - r.index
        }).map(function(t) {
            return {
                data: t.data,
                mode: t.mode,
                length: t.length
            }
        })
    }
    function g(t, r) {
        switch (r) {
        case p.NUMERIC:
            return o.getBitsLength(t);
        case p.ALPHANUMERIC:
            return i.getBitsLength(t);
        case p.KANJI:
            return c.getBitsLength(t);
        case p.BYTE:
            return a.getBitsLength(t)
        }
    }
    function e(t, r) {
        var e, n = p.getBestModeForData(t);
        if ((e = p.from(r, n)) !== p.BYTE && e.bit < n.bit)
            throw new Error('"' + t + '" cannot be encoded with mode ' + p.toString(e) + ".\n Suggested mode is: " + p.toString(n));
        switch (e !== p.KANJI || s.isKanjiModeEnabled() || (e = p.BYTE),
        e) {
        case p.NUMERIC:
            return new o(t);
        case p.ALPHANUMERIC:
            return new i(t);
        case p.KANJI:
            return new c(t);
        case p.BYTE:
            return new a(t)
        }
    }
    u.fromArray = function(t) {
        return t.reduce(function(t, r) {
            return "string" == typeof r ? t.push(e(r, null)) : r.data && t.push(e(r.data, r.mode)),
            t
        }, [])
    }
    ,
    u.fromString = function(t, r) {
        for (var e = function(t, r) {
            for (var e = {}, n = {
                start: {}
            }, o = ["start"], i = 0; i < t.length; i++) {
                for (var u = t[i], a = [], c = 0; c < u.length; c++) {
                    var f = u[c]
                      , s = "" + i + c;
                    a.push(s),
                    e[s] = {
                        node: f,
                        lastCount: 0
                    },
                    n[s] = {};
                    for (var l = 0; l < o.length; l++) {
                        var h = o[l];
                        e[h] && e[h].node.mode === f.mode ? (n[h][s] = g(e[h].lastCount + f.length, f.mode) - g(e[h].lastCount, f.mode),
                        e[h].lastCount += f.length) : (e[h] && (e[h].lastCount = f.length),
                        n[h][s] = g(f.length, f.mode) + 4 + p.getCharCountIndicator(f.mode, r))
                    }
                }
                o = a
            }
            for (l = 0; l < o.length; l++)
                n[o[l]].end = 0;
            return {
                map: n,
                table: e
            }
        }(function(t) {
            for (var r = [], e = 0; e < t.length; e++) {
                var n = t[e];
                switch (n.mode) {
                case p.NUMERIC:
                    r.push([n, {
                        data: n.data,
                        mode: p.ALPHANUMERIC,
                        length: n.length
                    }, {
                        data: n.data,
                        mode: p.BYTE,
                        length: n.length
                    }]);
                    break;
                case p.ALPHANUMERIC:
                    r.push([n, {
                        data: n.data,
                        mode: p.BYTE,
                        length: n.length
                    }]);
                    break;
                case p.KANJI:
                    r.push([n, {
                        data: n.data,
                        mode: p.BYTE,
                        length: h(n.data)
                    }]);
                    break;
                case p.BYTE:
                    r.push([{
                        data: n.data,
                        mode: p.BYTE,
                        length: h(n.data)
                    }])
                }
            }
            return r
        }(d(t, s.isKanjiModeEnabled())), r), n = l.find_path(e.map, "start", "end"), o = [], i = 1; i < n.length - 1; i++)
            o.push(e.table[n[i]].node);
        return u.fromArray(o.reduce(function(t, r) {
            var e = 0 <= t.length - 1 ? t[t.length - 1] : null;
            return e && e.mode === r.mode ? t[t.length - 1].data += r.data : t.push(r),
            t
        }, []))
    }
    ,
    u.rawSplit = function(t) {
        return u.fromArray(d(t, s.isKanjiModeEnabled()))
    }
}
, function(t, r, e) {
    var n = e(79);
    function o(t) {
        this.mode = n.NUMERIC,
        this.data = t.toString()
    }
    o.getBitsLength = function(t) {
        return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
    }
    ,
    o.prototype.getLength = function() {
        return this.data.length
    }
    ,
    o.prototype.getBitsLength = function() {
        return o.getBitsLength(this.data.length)
    }
    ,
    o.prototype.write = function(t) {
        var r, e, n;
        for (r = 0; r + 3 <= this.data.length; r += 3)
            e = this.data.substr(r, 3),
            n = parseInt(e, 10),
            t.put(n, 10);
        var o = this.data.length - r;
        0 < o && (e = this.data.substr(r),
        n = parseInt(e, 10),
        t.put(n, 3 * o + 1))
    }
    ,
    t.exports = o
}
, function(t, r, e) {
    var n = e(79)
      , o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
    function i(t) {
        this.mode = n.ALPHANUMERIC,
        this.data = t
    }
    i.getBitsLength = function(t) {
        return 11 * Math.floor(t / 2) + t % 2 * 6
    }
    ,
    i.prototype.getLength = function() {
        return this.data.length
    }
    ,
    i.prototype.getBitsLength = function() {
        return i.getBitsLength(this.data.length)
    }
    ,
    i.prototype.write = function(t) {
        var r;
        for (r = 0; r + 2 <= this.data.length; r += 2) {
            var e = 45 * o.indexOf(this.data[r]);
            e += o.indexOf(this.data[r + 1]),
            t.put(e, 11)
        }
        this.data.length % 2 && t.put(o.indexOf(this.data[r]), 6)
    }
    ,
    t.exports = i
}
, function(t, r, e) {
    var n = e(91)
      , o = e(79);
    function i(t) {
        this.mode = o.BYTE,
        this.data = new n(t)
    }
    i.getBitsLength = function(t) {
        return 8 * t
    }
    ,
    i.prototype.getLength = function() {
        return this.data.length
    }
    ,
    i.prototype.getBitsLength = function() {
        return i.getBitsLength(this.data.length)
    }
    ,
    i.prototype.write = function(t) {
        for (var r = 0, e = this.data.length; r < e; r++)
            t.put(this.data[r], 8)
    }
    ,
    t.exports = i
}
, function(t, r, e) {
    var n = e(79)
      , o = e(78);
    function i(t) {
        this.mode = n.KANJI,
        this.data = t
    }
    i.getBitsLength = function(t) {
        return 13 * t
    }
    ,
    i.prototype.getLength = function() {
        return this.data.length
    }
    ,
    i.prototype.getBitsLength = function() {
        return i.getBitsLength(this.data.length)
    }
    ,
    i.prototype.write = function(t) {
        var r;
        for (r = 0; r < this.data.length; r++) {
            var e = o.toSJIS(this.data[r]);
            if (33088 <= e && e <= 40956)
                e -= 33088;
            else {
                if (!(57408 <= e && e <= 60351))
                    throw new Error("Invalid SJIS character: " + this.data[r] + "\nMake sure your charset is UTF-8");
                e -= 49472
            }
            e = 192 * (e >>> 8 & 255) + (255 & e),
            t.put(e, 13)
        }
    }
    ,
    t.exports = i
}
, function(t, r, e) {
    "use strict";
    var v = {
        single_source_shortest_paths: function(t, r, e) {
            var n = {}
              , o = {};
            o[r] = 0;
            var i, u, a, c, f, s, l, h = v.PriorityQueue.make();
            for (h.push(r, 0); !h.empty(); )
                for (a in u = (i = h.pop()).value,
                c = i.cost,
                f = t[u] || {})
                    f.hasOwnProperty(a) && (s = c + f[a],
                    l = o[a],
                    (void 0 === o[a] || s < l) && (o[a] = s,
                    h.push(a, s),
                    n[a] = u));
            if (void 0 === e || void 0 !== o[e])
                return n;
            var p = ["Could not find a path from ", r, " to ", e, "."].join("");
            throw new Error(p)
        },
        extract_shortest_path_from_predecessor_list: function(t, r) {
            for (var e = [], n = r; n; )
                e.push(n),
                t[n],
                n = t[n];
            return e.reverse(),
            e
        },
        find_path: function(t, r, e) {
            var n = v.single_source_shortest_paths(t, r, e);
            return v.extract_shortest_path_from_predecessor_list(n, e)
        },
        PriorityQueue: {
            make: function(t) {
                var r, e = v.PriorityQueue, n = {};
                for (r in t = t || {},
                e)
                    e.hasOwnProperty(r) && (n[r] = e[r]);
                return n.queue = [],
                n.sorter = t.sorter || e.default_sorter,
                n
            },
            default_sorter: function(t, r) {
                return t.cost - r.cost
            },
            push: function(t, r) {
                var e = {
                    value: t,
                    cost: r
                };
                this.queue.push(e),
                this.queue.sort(this.sorter)
            },
            pop: function() {
                return this.queue.shift()
            },
            empty: function() {
                return 0 === this.queue.length
            }
        }
    };
    t.exports = v
}
, function(t, a, r) {
    var s = r(216);
    a.render = function(t, r, e) {
        var n = e
          , o = r;
        void 0 !== n || r && r.getContext || (n = r,
        r = void 0),
        r || (o = function() {
            try {
                return document.createElement("canvas")
            } catch (t) {
                throw new Error("You need to specify a canvas element")
            }
        }()),
        n = s.getOptions(n);
        var i, u, a = s.getImageWidth(t.modules.size, n), c = o.getContext("2d"), f = c.createImageData(a, a);
        return s.qrToImageData(f.data, t, n),
        i = o,
        u = a,
        c.clearRect(0, 0, i.width, i.height),
        i.style || (i.style = {}),
        i.height = u,
        i.width = u,
        i.style.height = u + "px",
        i.style.width = u + "px",
        c.putImageData(f, 0, 0),
        o
    }
    ,
    a.renderToDataURL = function(t, r, e) {
        var n = e;
        void 0 !== n || r && r.getContext || (n = r,
        r = void 0),
        n || (n = {});
        var o = a.render(t, r, n)
          , i = n.type || "image/png"
          , u = n.rendererOpts || {};
        return o.toDataURL(i, u.quality)
    }
}
, function(t, r, e) {
    var l = e(216);
    function h(t, r) {
        var e = t.a / 255
          , n = r + '="' + t.hex + '"';
        return e < 1 ? n + " " + r + '-opacity="' + e.toFixed(2).slice(1) + '"' : n
    }
    function p(t, r, e) {
        var n = t + r;
        return void 0 !== e && (n += " " + e),
        n
    }
    r.render = function(t, r, e) {
        var n = l.getOptions(r)
          , o = t.modules.size
          , i = t.modules.data
          , u = o + 2 * n.margin
          , a = n.color.light.a ? "<path " + h(n.color.light, "fill") + ' d="M0 0h' + u + "v" + u + 'H0z"/>' : ""
          , c = "<path " + h(n.color.dark, "stroke") + ' d="' + function(t, r, e) {
            for (var n = "", o = 0, i = !1, u = 0, a = 0; a < t.length; a++) {
                var c = Math.floor(a % r)
                  , f = Math.floor(a / r);
                c || i || (i = !0),
                t[a] ? (u++,
                0 < a && 0 < c && t[a - 1] || (n += i ? p("M", c + e, .5 + f + e) : p("m", o, 0),
                o = 0,
                i = !1),
                c + 1 < r && t[a + 1] || (n += p("h", u),
                u = 0)) : o++
            }
            return n
        }(i, o, n.margin) + '"/>'
          , f = 'viewBox="0 0 ' + u + " " + u + '"'
          , s = '<svg xmlns="http://www.w3.org/2000/svg" ' + (n.width ? 'width="' + n.width + '" height="' + n.width + '" ' : "") + f + ' shape-rendering="crispEdges">' + a + c + "</svg>\n";
        return "function" == typeof e && e(null, s),
        s
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, r, e) {
    "use strict";
    e.r(r);
    var n = e(128)
      , p = e.n(n)
      , o = e(101)
      , f = e.n(o)
      , i = e(211)
      , u = e.n(i)
      , a = e(124)
      , c = e.n(a)
      , s = e(244)
      , l = e.n(s)
      , h = e(212)
      , v = e.n(h)
      , d = e(245)
      , g = e.n(d)
      , y = e(246)
      , m = e.n(y)
      , w = e(247)
      , b = e.n(w)
      , x = e(210)
      , _ = e.n(x)
      , E = e(248)
      , A = e.n(E)
      , P = e(249)
      , S = e.n(P)
      , T = e(250)
      , O = function(t) {
        function h() {
            var t;
            return g()(this, h),
            (t = b()(this, _()(h).call(this))).isInitialized = !1,
            t
        }
        var r, e;
        return A()(h, t),
        m()(h, [{
            key: "connectedCallback",
            value: function() {
                this.isInitialized || (this._assignDefaultAttributes(h.defaultAttributes),
                this.render(),
                this.isInitialized = !0)
            }
        }, {
            key: "attributeChangedCallback",
            value: function(t, r, e) {
                this.isInitialized && this.isConnected && null !== e && this.render()
            }
        }, {
            key: "_assignDefaultAttributes",
            value: function(t) {
                var e = this
                  , n = t;
                v()(n).map(function(t) {
                    var r = e.getAttribute(t);
                    null !== r && "" !== r || null === n[t] || e.setAttribute(t, n[t])
                })
            }
        }, {
            key: "_getAttributes",
            value: function(t) {
                var n = this;
                return l()(t) ? t.reduce(function(t, r) {
                    var e = {};
                    return e[r] = n.getAttribute(r),
                    c()(t, e)
                }, {}) : {}
            }
        }, {
            key: "_addCoverImage",
            value: (e = u()(p.a.mark(function t(r) {
                var e, n, o, i, u, a, c;
                return p.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return e = this._getAttributes(["cover", "coversize", "size"]),
                            n = e.cover,
                            o = e.coversize,
                            i = e.size,
                            u = new Image,
                            t.prev = 2,
                            t.next = 5,
                            new f.a(function(t, r) {
                                u.src = n,
                                u.complete && t(u),
                                u.onload = function() {
                                    return t(u)
                                }
                                ,
                                u.onerror = r
                            }
                            );
                        case 5:
                            c = a = 0,
                            c = u.width > u.height ? (a = o || .4 * i) * u.height / u.width : (a = (o || .4 * i) * u.width / u.height,
                            o || .4 * i),
                            r.getContext("2d").drawImage(u, i / 2 - a / 2, i / 2 - c / 2, a, c),
                            t.next = 15;
                            break;
                        case 12:
                            t.prev = 12,
                            t.t0 = t.catch(2),
                            console.warn(t.t0);
                        case 15:
                        case "end":
                            return t.stop()
                        }
                }, t, this, [[2, 12]])
            })),
            function(t) {
                return e.apply(this, arguments)
            }
            )
        }, {
            key: "_dispatchGeneratedEvent",
            value: function() {
                this.dispatchEvent(new CustomEvent("generated",{
                    bubbles: !1,
                    composed: !0
                }))
            }
        }, {
            key: "render",
            value: (r = u()(p.a.mark(function t() {
                var r, e, n, o, i, u, a, c, f, s, l;
                return p.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (r = this._getAttributes(h.observedAttributes),
                            e = r.data,
                            n = r.size,
                            o = r.margin,
                            i = r.scale,
                            u = r.colordark,
                            a = r.colorlight,
                            c = r.errorcorrectionlevel,
                            f = r.cover,
                            e)
                                return s = this,
                                l = document.createElement("canvas"),
                                t.prev = 4,
                                t.next = 7,
                                Object(T.toCanvas)(l, e, {
                                    type: "png",
                                    width: Number(n),
                                    margin: Number(o),
                                    scale: Number(i),
                                    errorCorrectionLevel: c,
                                    color: {
                                        light: a,
                                        dark: u
                                    }
                                });
                            t.next = 18;
                            break;
                        case 7:
                            if (t.t0 = f,
                            t.t0)
                                return t.next = 11,
                                this._addCoverImage(l);
                            t.next = 11;
                            break;
                        case 11:
                            s.src = l.toDataURL(),
                            this._dispatchGeneratedEvent(),
                            t.next = 18;
                            break;
                        case 15:
                            t.prev = 15,
                            t.t1 = t.catch(4),
                            console.error(t.t1);
                        case 18:
                        case "end":
                            return t.stop()
                        }
                }, t, this, [[4, 15]])
            })),
            function() {
                return r.apply(this, arguments)
            }
            )
        }], [{
            key: "defaultAttributes",
            get: function() {
                return {
                    data: null,
                    size: "200",
                    margin: "0",
                    scale: "4",
                    colordark: "#000000ff",
                    colorlight: "#ffffffff",
                    errorcorrectionlevel: "M",
                    cover: null,
                    coversize: null
                }
            }
        }, {
            key: "observedAttributes",
            get: function() {
                return v()(h.defaultAttributes)
            }
        }]),
        h
    }(S()(HTMLImageElement));
    window.customElements.define("qr-code-image", O, {
        extends: "img"
    })
}
]);
