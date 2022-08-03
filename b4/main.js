! function (n) {
    var r = {};

    function o(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    o.m = n, o.c = r, o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) o.d(n, r, function (e) {
                return t[e]
            }.bind(null, r));
        return n
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 10)
}([function (e, t, r) {
    var n, o, i, l = {},
        c = (n = function () {
            return window && document && document.all && !window.atob
        }, function () {
            return void 0 === o && (o = n.apply(this, arguments)), o
        }),
        s = (i = {}, function (e, t) {
            if ("function" == typeof e) return e();
            if (void 0 === i[e]) {
                var n = function (e, t) {
                    return t ? t.querySelector(e) : document.querySelector(e)
                }.call(this, e, t);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                    n = n.contentDocument.head
                } catch (e) {
                    n = null
                }
                i[e] = n
            }
            return i[e]
        }),
        a = null,
        u = 0,
        f = [],
        d = r(1);

    function h(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                o = l[r.id];
            if (o) {
                o.refs++;
                for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
                for (; i < r.parts.length; i++) o.parts.push(m(r.parts[i], t))
            } else {
                var s = [];
                for (i = 0; i < r.parts.length; i++) s.push(m(r.parts[i], t));
                l[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function p(e, t) {
        for (var n = [], r = {}, o = 0; o < e.length; o++) {
            var i = e[o],
                s = t.base ? i[0] + t.base : i[0],
                a = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
            r[s] ? r[s].parts.push(a) : n.push(r[s] = {
                id: s,
                parts: [a]
            })
        }
        return n
    }

    function v(e, t) {
        var n = s(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = f[f.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), f.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = s(e.insertAt.before, n);
            n.insertBefore(t, o)
        }
    }

    function y(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = f.indexOf(e);
        0 <= t && f.splice(t, 1)
    }

    function b(e) {
        var t = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
            var n = function () {
                0;
                return r.nc
            }();
            n && (e.attrs.nonce = n)
        }
        return g(t, e.attrs), v(e, t), t
    }

    function g(t, n) {
        Object.keys(n).forEach(function (e) {
            t.setAttribute(e, n[e])
        })
    }

    function m(t, e) {
        var n, r, o, i;
        if (e.transform && t.css) {
            if (!(i = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () {};
            t.css = i
        }
        if (e.singleton) {
            var s = u++;
            n = a = a || b(e), r = w.bind(null, n, s, !1), o = w.bind(null, n, s, !0)
        } else o = t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
            var t = document.createElement("link");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", g(t, e.attrs), v(e, t), t
        }(e), r = function (e, t, n) {
            var r = n.css,
                o = n.sourceMap,
                i = void 0 === t.convertToAbsoluteUrls && o;
            (t.convertToAbsoluteUrls || i) && (r = d(r));
            o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var s = new Blob([r], {
                    type: "text/css"
                }),
                a = e.href;
            e.href = URL.createObjectURL(s), a && URL.revokeObjectURL(a)
        }.bind(null, n, e), function () {
            y(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = b(e), r = function (e, t) {
            var n = t.css,
                r = t.media;
            r && e.setAttribute("media", r);
            if (e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), function () {
            y(n)
        });
        return r(t),
            function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    r(t = e)
                } else o()
            }
    }
    e.exports = function (e, s) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (s = s || {}).attrs = "object" == typeof s.attrs ? s.attrs : {}, s.singleton || "boolean" == typeof s.singleton || (s.singleton = c()), s.insertInto || (s.insertInto = "head"), s.insertAt || (s.insertAt = "bottom");
        var a = p(e, s);
        return h(a, s),
            function (e) {
                for (var t = [], n = 0; n < a.length; n++) {
                    var r = a[n];
                    (o = l[r.id]).refs--, t.push(o)
                }
                e && h(p(e, s), s);
                for (n = 0; n < t.length; n++) {
                    var o;
                    if (0 === (o = t[n]).refs) {
                        for (var i = 0; i < o.parts.length; i++) o.parts[i]();
                        delete l[o.id]
                    }
                }
            }
    };
    var x, _ = (x = [], function (e, t) {
        return x[e] = t, x.filter(Boolean).join("\n")
    });

    function w(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = _(t, o);
        else {
            var i = document.createTextNode(o),
                s = e.childNodes;
            s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(i, s[t]) : e.appendChild(i)
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var o = t.protocol + "//" + t.host,
            i = o + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
            var n, r = t.trim().replace(/^"(.*)"$/, function (e, t) {
                return t
            }).replace(/^'(.*)'$/, function (e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? e : (n = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? o + r : i + r.replace(/^\.\//, ""), "url(" + JSON.stringify(n) + ")")
        })
    }
}, function (e, t, n) {
    var r = n(3);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(0)(r, o);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {}, function (e, s, t) {
    (function (e) {
        var t, n, r, o;

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        /*!
         * circletype 2.3.0
         * A JavaScript library that lets you curve type on the web.
         * Copyright © 2014-2018 Peter Hrynkow
         * Licensed MIT
         * https://github.com/peterhry/CircleType#readme
         */
        "undefined" != typeof self && self, o = function () {
            return o = {}, r.m = n = [function (e, t, n) {
                var r = n(24)("wks"),
                    o = n(12),
                    i = n(1).Symbol,
                    s = "function" == typeof i;
                (e.exports = function (e) {
                    return r[e] || (r[e] = s && i[e] || (s ? i : o)("Symbol." + e))
                }).store = r
            }, function (e, t) {
                var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = n)
            }, function (e, t) {
                var n = e.exports = {
                    version: "2.5.6"
                };
                "number" == typeof __e && (__e = n)
            }, function (e, t, n) {
                var r = n(4),
                    o = n(11);
                e.exports = n(6) ? function (e, t, n) {
                    return r.f(e, t, o(1, n))
                } : function (e, t, n) {
                    return e[t] = n, e
                }
            }, function (e, t, n) {
                var r = n(5),
                    o = n(34),
                    i = n(35),
                    s = Object.defineProperty;
                t.f = n(6) ? Object.defineProperty : function (e, t, n) {
                    if (r(e), t = i(t, !0), r(n), o) try {
                        return s(e, t, n)
                    } catch (e) {}
                    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                    return "value" in n && (e[t] = n.value), e
                }
            }, function (e, t, n) {
                var r = n(10);
                e.exports = function (e) {
                    if (!r(e)) throw TypeError(e + " is not an object!");
                    return e
                }
            }, function (e, t, n) {
                e.exports = !n(17)(function () {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function () {
                            return 7
                        }
                    }).a
                })
            }, function (e, t) {
                var n = {}.hasOwnProperty;
                e.exports = function (e, t) {
                    return n.call(e, t)
                }
            }, function (e, t) {
                var n = Math.ceil,
                    r = Math.floor;
                e.exports = function (e) {
                    return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
                }
            }, function (e, t) {
                e.exports = function (e) {
                    if (null == e) throw TypeError("Can't call method on  " + e);
                    return e
                }
            }, function (e, t) {
                e.exports = function (e) {
                    return "object" == i(e) ? null !== e : "function" == typeof e
                }
            }, function (e, t) {
                e.exports = function (e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    }
                }
            }, function (e, t) {
                var n = 0,
                    r = Math.random();
                e.exports = function (e) {
                    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
                }
            }, function (e, t) {
                e.exports = {}
            }, function (e, t, n) {
                var r = n(24)("keys"),
                    o = n(12);
                e.exports = function (e) {
                    return r[e] || (r[e] = o(e))
                }
            }, function (e, t) {
                e.exports = !1
            }, function (e, t, n) {
                function p(e, t, n) {
                    var r, o, i, s, a = e & p.F,
                        l = e & p.G,
                        c = e & p.P,
                        u = e & p.B,
                        f = l ? v : e & p.S ? v[t] || (v[t] = {}) : (v[t] || {}).prototype,
                        d = l ? y : y[t] || (y[t] = {}),
                        h = d.prototype || (d.prototype = {});
                    for (r in l && (n = t), n) i = ((o = !a && f && void 0 !== f[r]) ? f : n)[r], s = u && o ? m(i, v) : c && "function" == typeof i ? m(Function.call, i) : i, f && g(f, r, i, e & p.U), d[r] != i && b(d, r, s), c && h[r] != i && (h[r] = i)
                }
                var v = n(1),
                    y = n(2),
                    b = n(3),
                    g = n(19),
                    m = n(20);
                v.core = y, p.F = 1, p.G = 2, p.S = 4, p.P = 8, p.B = 16, p.W = 32, p.U = 64, p.R = 128, e.exports = p
            }, function (e, t) {
                e.exports = function (e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                }
            }, function (e, t, n) {
                var r = n(10),
                    o = n(1).document,
                    i = r(o) && r(o.createElement);
                e.exports = function (e) {
                    return i ? o.createElement(e) : {}
                }
            }, function (e, t, n) {
                var i = n(1),
                    s = n(3),
                    a = n(7),
                    l = n(12)("src"),
                    r = Function.toString,
                    c = ("" + r).split("toString");
                n(2).inspectSource = function (e) {
                    return r.call(e)
                }, (e.exports = function (e, t, n, r) {
                    var o = "function" == typeof n;
                    o && (a(n, "name") || s(n, "name", t)), e[t] !== n && (o && (a(n, l) || s(n, l, e[t] ? "" + e[t] : c.join(String(t)))), e === i ? e[t] = n : r ? e[t] ? e[t] = n : s(e, t, n) : (delete e[t], s(e, t, n)))
                })(Function.prototype, "toString", function () {
                    return "function" == typeof this && this[l] || r.call(this)
                })
            }, function (e, t, n) {
                var i = n(36);
                e.exports = function (r, o, e) {
                    if (i(r), void 0 === o) return r;
                    switch (e) {
                        case 1:
                            return function (e) {
                                return r.call(o, e)
                            };
                        case 2:
                            return function (e, t) {
                                return r.call(o, e, t)
                            };
                        case 3:
                            return function (e, t, n) {
                                return r.call(o, e, t, n)
                            }
                    }
                    return function () {
                        return r.apply(o, arguments)
                    }
                }
            }, function (e, t, n) {
                var r = n(42),
                    o = n(9);
                e.exports = function (e) {
                    return r(o(e))
                }
            }, function (e, t) {
                var n = {}.toString;
                e.exports = function (e) {
                    return n.call(e).slice(8, -1)
                }
            }, function (e, t, n) {
                var r = n(8),
                    o = Math.min;
                e.exports = function (e) {
                    return 0 < e ? o(r(e), 9007199254740991) : 0
                }
            }, function (e, t, n) {
                var r = n(2),
                    o = n(1),
                    i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
                (e.exports = function (e, t) {
                    return i[e] || (i[e] = void 0 !== t ? t : {})
                })("versions", []).push({
                    version: r.version,
                    mode: n(15) ? "pure" : "global",
                    copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
                })
            }, function (e, t) {
                e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
            }, function (e, t, n) {
                var r = n(4).f,
                    o = n(7),
                    i = n(0)("toStringTag");
                e.exports = function (e, t, n) {
                    e && !o(e = n ? e : e.prototype, i) && r(e, i, {
                        configurable: !0,
                        value: t
                    })
                }
            }, function (e, t, n) {
                var r = n(9);
                e.exports = function (e) {
                    return Object(r(e))
                }
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = Math.PI / 180;
                t.default = function (e) {
                    return e * r
                }
            }, function (e, t, n) {
                "use strict";
                n(30);
                var r, o = n(54),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                e.exports = i.default
            }, function (e, t, n) {
                n(31), n(47), e.exports = n(2).Array.from
            }, function (e, t, n) {
                "use strict";
                var r = n(32)(!0);
                n(33)(String, "String", function (e) {
                    this._t = String(e), this._i = 0
                }, function () {
                    var e, t = this._t,
                        n = this._i;
                    return n >= t.length ? {
                        value: void 0,
                        done: !0
                    } : (e = r(t, n), this._i += e.length, {
                        value: e,
                        done: !1
                    })
                })
            }, function (e, t, n) {
                var l = n(8),
                    c = n(9);
                e.exports = function (a) {
                    return function (e, t) {
                        var n, r, o = String(c(e)),
                            i = l(t),
                            s = o.length;
                        return i < 0 || s <= i ? a ? "" : void 0 : (n = o.charCodeAt(i)) < 55296 || 56319 < n || i + 1 === s || (r = o.charCodeAt(i + 1)) < 56320 || 57343 < r ? a ? o.charAt(i) : n : a ? o.slice(i, i + 2) : r - 56320 + (n - 55296 << 10) + 65536
                    }
                }
            }, function (e, t, n) {
                "use strict";

                function m() {
                    return this
                }
                var x = n(15),
                    _ = n(16),
                    w = n(19),
                    S = n(3),
                    T = n(13),
                    O = n(37),
                    L = n(26),
                    E = n(46),
                    C = n(0)("iterator"),
                    M = !([].keys && "next" in [].keys());
                e.exports = function (e, t, n, r, o, i, s) {
                    O(n, t, r);

                    function a(e) {
                        if (!M && e in p) return p[e];
                        switch (e) {
                            case "keys":
                            case "values":
                                return function () {
                                    return new n(this, e)
                                }
                        }
                        return function () {
                            return new n(this, e)
                        }
                    }
                    var l, c, u, f = t + " Iterator",
                        d = "values" == o,
                        h = !1,
                        p = e.prototype,
                        v = p[C] || p["@@iterator"] || o && p[o],
                        y = v || a(o),
                        b = o ? d ? a("entries") : y : void 0,
                        g = "Array" == t && p.entries || v;
                    if (g && (u = E(g.call(new e))) !== Object.prototype && u.next && (L(u, f, !0), x || "function" == typeof u[C] || S(u, C, m)), d && v && "values" !== v.name && (h = !0, y = function () {
                            return v.call(this)
                        }), x && !s || !M && !h && p[C] || S(p, C, y), T[t] = y, T[f] = m, o)
                        if (l = {
                                values: d ? y : a("values"),
                                keys: i ? y : a("keys"),
                                entries: b
                            }, s)
                            for (c in l) c in p || w(p, c, l[c]);
                        else _(_.P + _.F * (M || h), t, l);
                    return l
                }
            }, function (e, t, n) {
                e.exports = !n(6) && !n(17)(function () {
                    return 7 != Object.defineProperty(n(18)("div"), "a", {
                        get: function () {
                            return 7
                        }
                    }).a
                })
            }, function (e, t, n) {
                var o = n(10);
                e.exports = function (e, t) {
                    if (!o(e)) return e;
                    var n, r;
                    if (t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
                    if ("function" == typeof (n = e.valueOf) && !o(r = n.call(e))) return r;
                    if (!t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
                    throw TypeError("Can't convert object to primitive value")
                }
            }, function (e, t) {
                e.exports = function (e) {
                    if ("function" != typeof e) throw TypeError(e + " is not a function!");
                    return e
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(38),
                    o = n(11),
                    i = n(26),
                    s = {};
                n(3)(s, n(0)("iterator"), function () {
                    return this
                }), e.exports = function (e, t, n) {
                    e.prototype = r(s, {
                        next: o(1, n)
                    }), i(e, t + " Iterator")
                }
            }, function (e, t, r) {
                function o() {}
                var i = r(5),
                    s = r(39),
                    a = r(25),
                    l = r(14)("IE_PROTO"),
                    c = function () {
                        var e, t = r(18)("iframe"),
                            n = a.length;
                        for (t.style.display = "none", r(45).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; n--;) delete c.prototype[a[n]];
                        return c()
                    };
                e.exports = Object.create || function (e, t) {
                    var n;
                    return null !== e ? (o.prototype = i(e), n = new o, o.prototype = null, n[l] = e) : n = c(), void 0 === t ? n : s(n, t)
                }
            }, function (e, t, n) {
                var s = n(4),
                    a = n(5),
                    l = n(40);
                e.exports = n(6) ? Object.defineProperties : function (e, t) {
                    a(e);
                    for (var n, r = l(t), o = r.length, i = 0; i < o;) s.f(e, n = r[i++], t[n]);
                    return e
                }
            }, function (e, t, n) {
                var r = n(41),
                    o = n(25);
                e.exports = Object.keys || function (e) {
                    return r(e, o)
                }
            }, function (e, t, n) {
                var s = n(7),
                    a = n(21),
                    l = n(43)(!1),
                    c = n(14)("IE_PROTO");
                e.exports = function (e, t) {
                    var n, r = a(e),
                        o = 0,
                        i = [];
                    for (n in r) n != c && s(r, n) && i.push(n);
                    for (; t.length > o;) s(r, n = t[o++]) && (~l(i, n) || i.push(n));
                    return i
                }
            }, function (e, t, n) {
                var r = n(22);
                e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
                    return "String" == r(e) ? e.split("") : Object(e)
                }
            }, function (e, t, n) {
                var l = n(21),
                    c = n(23),
                    u = n(44);
                e.exports = function (a) {
                    return function (e, t, n) {
                        var r, o = l(e),
                            i = c(o.length),
                            s = u(n, i);
                        if (a && t != t) {
                            for (; s < i;)
                                if ((r = o[s++]) != r) return !0
                        } else
                            for (; s < i; s++)
                                if ((a || s in o) && o[s] === t) return a || s || 0;
                        return !a && -1
                    }
                }
            }, function (e, t, n) {
                var r = n(8),
                    o = Math.max,
                    i = Math.min;
                e.exports = function (e, t) {
                    return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
                }
            }, function (e, t, n) {
                var r = n(1).document;
                e.exports = r && r.documentElement
            }, function (e, t, n) {
                var r = n(7),
                    o = n(27),
                    i = n(14)("IE_PROTO"),
                    s = Object.prototype;
                e.exports = Object.getPrototypeOf || function (e) {
                    return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
                }
            }, function (e, t, n) {
                "use strict";
                var p = n(20),
                    r = n(16),
                    v = n(27),
                    y = n(48),
                    b = n(49),
                    g = n(23),
                    m = n(50),
                    x = n(51);
                r(r.S + r.F * !n(53)(function (e) {
                    Array.from(e)
                }), "Array", {
                    from: function (e, t, n) {
                        var r, o, i, s, a = v(e),
                            l = "function" == typeof this ? this : Array,
                            c = arguments.length,
                            u = 1 < c ? t : void 0,
                            f = void 0 !== u,
                            d = 0,
                            h = x(a);
                        if (f && (u = p(u, 2 < c ? n : void 0, 2)), null == h || l == Array && b(h))
                            for (o = new l(r = g(a.length)); d < r; d++) m(o, d, f ? u(a[d], d) : a[d]);
                        else
                            for (s = h.call(a), o = new l; !(i = s.next()).done; d++) m(o, d, f ? y(s, u, [i.value, d], !0) : i.value);
                        return o.length = d, o
                    }
                })
            }, function (e, t, n) {
                var i = n(5);
                e.exports = function (e, t, n, r) {
                    try {
                        return r ? t(i(n)[0], n[1]) : t(n)
                    } catch (t) {
                        var o = e.return;
                        throw void 0 !== o && i(o.call(e)), t
                    }
                }
            }, function (e, t, n) {
                var r = n(13),
                    o = n(0)("iterator"),
                    i = Array.prototype;
                e.exports = function (e) {
                    return void 0 !== e && (r.Array === e || i[o] === e)
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(4),
                    o = n(11);
                e.exports = function (e, t, n) {
                    t in e ? r.f(e, t, o(0, n)) : e[t] = n
                }
            }, function (e, t, n) {
                var r = n(52),
                    o = n(0)("iterator"),
                    i = n(13);
                e.exports = n(2).getIteratorMethod = function (e) {
                    if (null != e) return e[o] || e["@@iterator"] || i[r(e)]
                }
            }, function (e, t, n) {
                var o = n(22),
                    i = n(0)("toStringTag"),
                    s = "Arguments" == o(function () {
                        return arguments
                    }());
                e.exports = function (e) {
                    var t, n, r;
                    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                        try {
                            return e[t]
                        } catch (e) {}
                    }(t = Object(e), i)) ? n : s ? o(t) : "Object" == (r = o(t)) && "function" == typeof t.callee ? "Arguments" : r
                }
            }, function (e, t, n) {
                var i = n(0)("iterator"),
                    s = !1;
                try {
                    var r = [7][i]();
                    r.return = function () {
                        s = !0
                    }, Array.from(r, function () {
                        throw 2
                    })
                } catch (e) {}
                e.exports = function (e, t) {
                    if (!t && !s) return !1;
                    var n = !1;
                    try {
                        var r = [7],
                            o = r[i]();
                        o.next = function () {
                            return {
                                done: n = !0
                            }
                        }, r[i] = function () {
                            return o
                        }, e(r)
                    } catch (e) {}
                    return n
                }
            }, function (e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = function (e, t, n) {
                        return t && a(e.prototype, t), n && a(e, n), e
                    },
                    l = r(n(55)),
                    c = r(n(56)),
                    u = r(n(57)),
                    f = r(n(58)),
                    d = r(n(59)),
                    h = Math.PI,
                    i = Math.max,
                    p = Math.min,
                    s = (o(v, [{
                        key: "radius",
                        value: function (e) {
                            return void 0 !== e ? (this._radius = i(this._minRadius, e), this._invalidate(), this) : this._radius
                        }
                    }, {
                        key: "dir",
                        value: function (e) {
                            return void 0 !== e ? (this._dir = e, this._invalidate(), this) : this._dir
                        }
                    }, {
                        key: "forceWidth",
                        value: function (e) {
                            return void 0 !== e ? (this._forceWidth = e, this._invalidate(), this) : this._forceWidth
                        }
                    }, {
                        key: "forceHeight",
                        value: function (e) {
                            return void 0 !== e ? (this._forceHeight = e, this._invalidate(), this) : this._forceHeight
                        }
                    }, {
                        key: "refresh",
                        value: function () {
                            return this._invalidate()
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            return this.element.innerHTML = this.originalHTML, this
                        }
                    }, {
                        key: "_invalidate",
                        value: function () {
                            var e = this;
                            return cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(function () {
                                e._layout()
                            }), this
                        }
                    }, {
                        key: "_layout",
                        value: function () {
                            var i = this,
                                e = this._radius,
                                s = this._dir,
                                a = "center " + (-1 === s ? -e + this._lineHeight : e) / this._fontSize + "em",
                                t = e - this._lineHeight,
                                n = (0, d.default)(this._metrics, t),
                                l = n.rotations,
                                c = n.θ;
                            if (this._letters.forEach(function (e, t) {
                                    var n = e.style,
                                        r = (-.5 * c + l[t]) * s,
                                        o = "translateX(" + -.5 * i._metrics[t].width / i._fontSize + "em) rotate(" + r + "deg)";
                                    n.position = "absolute", n.bottom = -1 === s ? 0 : "auto", n.left = "50%", n.transform = o, n.transformOrigin = a, n.webkitTransform = o, n.webkitTransformOrigin = a
                                }), this._forceHeight) {
                                var r = 180 < c ? (0, u.default)(e, c) : (0, u.default)(t, c) + this._lineHeight;
                                this.container.style.height = r / this._fontSize + "em"
                            }
                            if (this._forceWidth) {
                                var o = (0, f.default)(e, p(180, c));
                                this.container.style.width = o / this._fontSize + "em"
                            }
                            return this
                        }
                    }]), v);

                function v(e, t) {
                    (function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, v), this.element = e, this.originalHTML = this.element.innerHTML;
                    var n = document.createElement("div"),
                        r = document.createDocumentFragment();
                    n.setAttribute("aria-label", e.innerText), n.style.position = "relative", this.container = n, this._letters = (0, c.default)(e, t), this._letters.forEach(function (e) {
                        return r.appendChild(e)
                    }), n.appendChild(r), this.element.innerHTML = "", this.element.appendChild(n);
                    var o = window.getComputedStyle(this.element),
                        i = o.fontSize,
                        s = o.lineHeight;
                    this._fontSize = parseFloat(i), this._lineHeight = parseFloat(s) || this._fontSize, this._metrics = this._letters.map(l.default);
                    var a = this._metrics.reduce(function (e, t) {
                        return e + t.width
                    }, 0);
                    this._minRadius = a / h / 2 + this._lineHeight, this._dir = 1, this._forceWidth = !1, this._forceHeight = !0, this._radius = this._minRadius, this._invalidate()
                }

                function a(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                t.default = s
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function (e) {
                    var t = e.getBoundingClientRect();
                    return {
                        height: t.height,
                        left: t.left + window.pageXOffset,
                        top: t.top + window.pageYOffset,
                        width: t.width
                    }
                }
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function (e, t) {
                    var n = document.createElement("span"),
                        r = e.innerText.trim();
                    return (t ? t(r) : [].concat(function (e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                            return n
                        }
                        return Array.from(e)
                    }(r))).map(function (e) {
                        var t = n.cloneNode();
                        return t.insertAdjacentHTML("afterbegin", " " === e ? "&nbsp;" : e), t
                    })
                }
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, o = n(28),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                t.default = function (e, t) {
                    return e * (1 - Math.cos((0, i.default)(t / 2)))
                }
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, o = n(28),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                t.default = function (e, t) {
                    return 2 * e * Math.sin((0, i.default)(t / 2))
                }
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, o = n(60),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                t.default = function (e, o) {
                    return e.reduce(function (e, t) {
                        var n = t.width,
                            r = (0, i.default)(n / o);
                        return {
                            "θ": e.θ + r,
                            rotations: e.rotations.concat([e.θ + r / 2])
                        }
                    }, {
                        "θ": 0,
                        rotations: []
                    })
                }
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = 180 / Math.PI;
                t.default = function (e) {
                    return e * r
                }
            }], r.c = o, r.d = function (e, t, n) {
                r.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                })
            }, r.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return r.d(t, "a", t), t
            }, r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, r.p = "", r(r.s = 29);

            function r(e) {
                if (o[e]) return o[e].exports;
                var t = o[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return n[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
            }
            var n, o
        }, "object" == i(s) && "object" == i(e) ? e.exports = o() : (n = [], void 0 === (r = "function" == typeof (t = o) ? t.apply(s, n) : t) || (e.exports = r))
    }).call(this, t(6)(e))
}, function (e, t) {
    e.exports = function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.tagName,
            i = void 0 === n ? "span" : n,
            s = t.split,
            r = t.setClassName,
            a = void 0 === r ? function (e) {
                return "char" + e
            } : r;
        e.normalize();
        var l = 1;

        function o(r) {
            var o = r.parentNode,
                e = r.nodeValue;
            (s ? s(e) : e.split("")).forEach(function (e) {
                var t = document.createElement(i),
                    n = a(l++, e);
                n && (t.className = n), t.appendChild(document.createTextNode(e)), t.setAttribute("aria-hidden", "true"), o.insertBefore(t, r)
            }), "" !== e.trim() && o.setAttribute("aria-label", e), o.removeChild(r)
        }! function t(e) {
            if (3 === e.nodeType) return o(e);
            var n = Array.prototype.slice.call(e.childNodes);
            if (1 === n.length && 3 === n[0].nodeType) return o(n[0]);
            n.forEach(function (e) {
                t(e)
            })
        }(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t) {
    window.addEventListener("readyForTwitter", function e(t) {
        var n = document.querySelector(".grid .box .box__overlay__inner"),
            r = new XMLHttpRequest;
        r.open("GET", "https://graph.contentfry.com/v2.0/rooms/20148/broadcasts?connections=21221%2C%2021218%2C%2021217&limit=24&offset=0&access_token=pk.eyJ1IjozMDksInQiOjUxLCJhIjoiNDEyMmUwZTk0Y2FlZGY2ZjkzNWY2NCJ9"), r.send(), r.onload = function () {
            if (200 != r.status) n.innerHTML += "<div class='box__overlay__content'>Oh no! Zurzeit kann der Feed nicht geladen werden. Bitte versuche es später erneut.</div>";
            else {
                var e = JSON.parse(r.response);
                n.innerHTML += function (e) {
                    var t = document.getElementById("feed__template").innerHTML,
                        n = "";
                    for (var r in e) n += t.replace(/%link%/g, e[r].link).replace(/%source%/g, e[r].source).replace(/%description%/g, e[r].description).replace(/%image%/g, "image" in e[r] ? '<img class="feed__img" src="' + e[r].image.replace(/:\w+$/, "") + '" loading="lazy">' : "");
                    return n
                }(e.data)
            }
        }, r.onerror = function () {
            n.innerHTML += "<div class='box__overlay__content'>Oh no! Zurzeit kann der Feed nicht geladen werden. Bitte versuche es später erneut.</div>"
        }, window.removeEventListener("readyForTwitter", e, !1)
    }, !1)
}, , , function (e, t, n) {
    "use strict";
    n.r(t);
    n(2);
    var r = n(4),
        s = n.n(r),
        o = n(5),
        a = n.n(o);

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    try {
        var i = document.querySelector("html");
        i.className = i.className.replace("no-js", "js")
    } catch (e) {}
    var u = function () {
        function i(e, t, n, r, o) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), this.gridContainer = e, this.gridEl = t, this.titleEl = n, this.titleLabel = r, this.allBoxes = o, this.boxesOffset = [], this.boxesTopOffset = [], this.boxesTriggerShiftUp = [], this.boxesTriggerShiftDown = [], this.boxScrollCounter = 0, this.allTitles = [], this.allLabels = [], this.circleTypeInstance = [], this.pageReveal = document.querySelector(".pagereveal__container"), this.revealer = document.querySelector(".revealer"), this.overlay = document.querySelector(".overlay"), this.overlayClose = document.querySelector(".nav__overlay__close"), this.logo = document.querySelector(".logo"), this.body = document.querySelector("body"), this.overlayState = !1
        }
        return function (e, t, n) {
            t && l(e.prototype, t), n && l(e, n)
        }(i, [{
            key: "setHeights",
            value: function (e, t, n) {
                this.containerHeight = e, this.winHeight = t, this.revealerOffset = n, this.newRevealerOffset
            }
        }, {
            key: "setDimensions",
            value: function (e, t) {
                var i = this;
                this.setHeights(this.gridEl.getBoundingClientRect().height, window.innerHeight, this.revealer.getBoundingClientRect()), this.boxesOffset = [], this.boxesTopOffset = [], this.boxesTriggerShiftUp = [], this.boxesTriggerShiftDown = [], this.allBoxes.forEach(function (e, t) {
                    var n = e.getBoundingClientRect(),
                        r = e.getBoundingClientRect().top,
                        o = getComputedStyle(e, "::before").getPropertyValue("content");
                    i.boxesOffset.push(n), i.boxesTopOffset.push(r), o.includes("up") ? i.boxesTriggerShiftUp.push(n.height / 2) : i.boxesTriggerShiftUp.push(0), o.includes("down") ? i.boxesTriggerShiftDown.push(n.height / 2) : i.boxesTriggerShiftDown.push(0)
                }), this.gridContainer.classList.remove("no-transitions"), 0 < this.boxScrollCounter && (this.boxScrollCounter = 0, this.allBoxes[0].classList.add("animate-in"), this.titleEl.innerHTML = this.allTitles[0], this.titleLabel.innerHTML = this.allLabels[0], this.animateTitle(this.titleEl))
            }
        }, {
            key: "showHide",
            value: function (e, t) {
                var n = this;
                if ("down" == e && t > this.boxesTriggerShiftDown[this.boxScrollCounter + 1] + this.boxesOffset[this.boxScrollCounter + 1 < this.boxesOffset.length - 1 ? this.boxScrollCounter + 1 : this.boxesOffset.length - 1].top - this.revealerOffset.top) {
                    if (this.boxScrollCounter === this.boxesOffset.length - 1) return;
                    this.boxScrollCounter++, this.titleEl.innerHTML = this.allTitles[this.boxScrollCounter], this.titleLabel.innerHTML = this.allLabels[this.boxScrollCounter], this.animateTitle(this.titleEl), this.allBoxes[this.boxScrollCounter].classList.add("animate-in"), 1 === this.boxScrollCounter ? this.allBoxes[this.boxScrollCounter - 1].classList.add("animate-in", "animate-out") : (this.body.classList.add("going-down"), this.body.classList.remove("going-up"), this.allBoxes[this.boxScrollCounter - 1].classList.add("animate-out"))
                }
                if ("up" == e && t < this.boxesOffset[0 < this.boxScrollCounter - 1 ? this.boxScrollCounter - 1 : 0].bottom - this.revealerOffset.top - this.boxesTriggerShiftUp[0 < this.boxScrollCounter - 1 ? this.boxScrollCounter - 1 : 0]) {
                    if (0 === this.boxScrollCounter) return;
                    0 < this.boxScrollCounter ? this.boxScrollCounter-- : this.boxScrollCounter = 0, this.titleEl.innerHTML = this.allTitles[this.boxScrollCounter], this.titleLabel.innerHTML = this.allLabels[this.boxScrollCounter], this.animateTitle(this.titleEl), this.allBoxes[this.boxScrollCounter + 1].classList.remove("animate-in", "animate-out"), this.allBoxes[this.boxScrollCounter].classList.remove("animate-out"), this.body.classList.remove("going-down"), this.body.classList.add("going-up")
                }
                this.gridContainer.classList.remove("has-hover"), this.debounce(function () {
                    n.gridContainer.classList.add("has-hover")
                });
                var r = this.debounce(function () {
                    n.gridContainer.classList.add("has-hover")
                }, 200);
                window.addEventListener("scroll", r)
            }
        }, {
            key: "animateTitle",
            value: function (e) {
                a()(e, {
                    setClassName: function (e, t) {
                        return "letter-".concat(t)
                    }
                });
                var r = ["$", "%", "#", "@", "&", "(", ")", "=", "*", "/"],
                    t = Array.from(e.querySelectorAll("span")),
                    o = t.length;
                t.forEach(function (e) {
                    return e.dataset.initial = e.innerHTML
                });
                var i = [],
                    s = 0;
                t.forEach(function (e, t) {
                    var n = setTimeout(function () {
                        e.innerHTML = r[function (e, t) {
                            return Math.floor(Math.random() * (t - e)) + e
                        }(0, r.length - 1)], setTimeout(function () {
                            e.innerHTML = e.dataset.initial, ++s === o && !0
                        }, 100)
                    }, 25 * t);
                    i.push(n)
                })
            }
        }, {
            key: "circleType",
            value: function () {
                var o = this;
                this.allBoxes.forEach(function (e, t) {
                    var n = e.querySelector(".box__title"),
                        r = (n.innerHTML.length, getComputedStyle(n, "::after").getPropertyValue("content"));
                    o.circleTypeInstance[t] && (n.style = "", o.circleTypeInstance[t].destroy()), "none" !== r && r && (o.circleTypeInstance[t] = new s.a(n), o.circleTypeInstance[t].dir(r.includes("negative") ? -1 : 1).radius((2 * e.offsetWidth - e.offsetWidth / 16 * 10) / 2), o.circleTypeInstance[t].forceHeight(!1), n.style.transform = r.includes("-45") ? "rotate(-45deg)" : "rotate(45deg)")
                })
            }
        }, {
            key: "scrollToY",
            value: function (r, e) {
                var o = window.scrollY,
                    i = (r = r || 0, e = e || 2e3, 0),
                    s = Math.max(.1, Math.min(Math.abs(o - r) / e, .8)),
                    a = function (e) {
                        return -.5 * (Math.cos(Math.PI * e) - 1)
                    };
                ! function e() {
                    var t = (i += 1 / 60) / s,
                        n = a(t);
                    t < 1 ? (window.requestAnimationFrame(e), window.scrollTo(0, o + (r - o) * n)) : window.scrollTo(0, r)
                }()
            }
        }, {
            key: "showOverlay",
            value: function (e, t) {
                var r = this;
                t.querySelectorAll(".box__overlay img:not(.feed__img)").forEach(function (e) {
                    r.lazyLoadImage(e)
                }), this.overlay.innerHTML = t.querySelector(".box__overlay").innerHTML, e && this.overlay.querySelectorAll(".box__overlay__accordion__trigger").forEach(function (e, t) {
                    var n = r.overlay.querySelectorAll(".box__overlay__accordion__checkbox")[t];
                    e.setAttribute("for", "accordionCheckBox_copy" + t), n.setAttribute("id", "accordionCheckBox_copy" + t)
                });
                document.body.classList.add("overlay--open"), document.body.classList.remove("overlay--closed"), this.overlayState = !0, this.overlay.scrollTop = window.innerHeight / 2
            }
        }, {
            key: "edgeClip",
            value: function () {
                this.gridContainer.classList.add("has-fallback"), this.allBoxes.forEach(function (n, r) {
                    new Promise(function (e, t) {
                        n.querySelector(".box__mask").insertAdjacentHTML("beforeend", '\n\t\t  <svg class="box__fallback" viewBox="0 0 100 100">\n\t\t\t<defs>\n\t\t\t  <pattern id="fallback'.concat(r, '" height="100%" width="100%">\n\t\t\t\t<image height="100%" width="100%" xlink:href="" preserveAspectRatio="xMidYMid meet"></image>\n\t\t\t  </pattern>\n\t\t\t</defs>\n\t\t\t<polygon points="100 100, 94.85 99.87, 89.78 99.48, 84.78 98.85, 79.85 98, 75 96.85, 70.26 95.5, 65.62 93.93, 61.08 92.14, 56.65 90.14, 52.33 87.93, 48.15 85.52, 44.09 82.92, 40.17 80.13, 36.39 77.13, 32.76 74, 29.29 70.69, 26 67.24, 22.86 63.61, 19.86 59.83, 17.07 55.91, 14.47 51.85, 12.06 47.67, 9.86 43.35, 7.86 38.92, 6.07 34.38, 4.5 29.74, 3.15 25, 2 20.15, 1.12 15.23, 0.49 10.23, 0.13 5.15, 0 0, 62.5 0, 62.5 1.93, 62.64 3.83, 62.88 5.71, 63.21 7.56, 63.63 9.37, 64.14 11.15, 64.73 12.89, 65.4 14.6, 66.15 16.26, 67 17.87, 67.9 19.45, 68.9 20.97, 69.9 22.44, 71.01 23.85, 72.19 25.21, 73.43 26.52, 74.74 27.76, 76.1 28.94, 77.51 30.05, 79 31.1, 80.52 32.1, 82.1 33, 83.71 33.83, 85.37 34.58, 87.08 35.25, 88.82 35.84, 90.6 36.35, 92.41 36.77, 94.26 37.1, 96.14 37.34, 98.04 37.48, 99.97 37.48, 99.97 100" fill="url(#fallback').concat(r, ')"></polygon>\n\t\t  </svg>\n\t\t')), e()
                    }).then(function () {
                        var e = n.querySelector(".box__fallback"),
                            t = n.querySelector(".box__img");
                        e.querySelector("#fallback" + r + " image").setAttribute("xlink:href", t.src), t.style.display = "none"
                    })
                })
            }
        }, {
            key: "orientationChanged",
            value: function () {
                return new window.Promise(function (r) {
                    ! function e(t, n) {
                        window.innerHeight != n || 120 <= t ? r() : window.requestAnimationFrame(function () {
                            return e(t + 1, n)
                        })
                    }(0, window.innerHeight)
                })
            }
        }, {
            key: "debounce",
            value: function (n, r) {
                var o;
                return function () {
                    var e = this,
                        t = arguments;
                    clearTimeout(o), o = setTimeout(function () {
                        o = null, n.apply(e, t)
                    }, r || 200)
                }
            }
        }, {
            key: "lazyLoadImage",
            value: function (e) {
                e.src = e.dataset.src, e.srcset = e.dataset.srcset
            }
        }]), i
    }();
    window.addEventListener("load", function () {
        var e = document.querySelectorAll(".grid__container"),
            s = void 0 !== window.orientation && "ontouchstart",
            a = 0 < navigator.userAgent.indexOf("MSIE") || 0 < navigator.appVersion.indexOf("Trident/") || 0 < navigator.userAgent.indexOf("Edge/"),
            c = [];
        e.forEach(function (e, t) {
            c[t] = new u(e, e.querySelector(".grid"), document.querySelector(".title__main"), document.querySelector(".title__label"), e.querySelectorAll(".box"));
            var l = c[t];
            if (l.allBoxes.forEach(function (e) {
                    l.allTitles.push(e.querySelector(".box__title").innerHTML)
                }), l.allBoxes.forEach(function (e) {
                    l.allLabels.push(e.querySelector(".box__label").innerHTML)
                }), l.setDimensions(t, e), document.querySelector("body").classList.add("loaded"), window.innerWidth <= 990 ? l.scrollToY(l.boxesOffset[1].bottom - l.boxesTriggerShiftUp[1] - l.revealerOffset.top - l.boxesOffset[1].height / 4, 1e3) : l.scrollToY(l.boxesOffset[1].top + l.boxesTriggerShiftDown[1] - l.revealerOffset.top + l.boxesOffset[1].height / 4, 1e3), window.addEventListener("beforeunload", function (e) {
                    window.scrollTo(0, 0), l.pageReveal.classList.add("reload")
                }), s) window.addEventListener("orientationchange", function () {
                l.gridContainer.classList.add("no-transitions"), 0 < l.boxScrollCounter && (window.scrollTo(0, 0), l.allBoxes.forEach(function (e, t) {
                    e.classList.remove("animate-in", "animate-out")
                })), l.orientationChanged().then(function () {
                    l.setDimensions(t, e), l.scrollToY(l.boxesOffset[1].bottom - l.boxesTriggerShiftUp[1] - l.revealerOffset.top - l.boxesOffset[1].height / 4, 1e3)
                })
            });
            else {
                window.addEventListener("resize", function () {
                    l.gridContainer.classList.add("no-transitions"), 0 < l.boxScrollCounter && (window.scrollTo(0, 0), l.allBoxes.forEach(function (e, t) {
                        e.classList.remove("animate-in", "animate-out")
                    }))
                });
                var n = l.debounce(function () {
                    l.debounce(l.setDimensions(t, e)), l.circleType()
                }, 500);
                window.addEventListener("resize", n);
                var r = l.debounce(function () {
                    l.scrollToY(l.boxesOffset[1].top + l.boxesTriggerShiftDown[1] - l.revealerOffset.top + l.boxesOffset[1].height / 4, 1e3)
                }, 500);
                window.addEventListener("resize", r)
            }
            a && l.edgeClip(), window.addEventListener("scroll", function (e) {
                if (!l.overlayState) {
                    var t = window.scrollY;
                    l.showHide(window.oldScroll > window.scrollY ? "up" : "down", t), window.oldScroll = window.scrollY
                }
            }), l.allBoxes.forEach(function (a) {
                a.addEventListener("click", function (e) {
                    var t = e.currentTarget,
                        n = Array.prototype.indexOf.call(l.allBoxes, t),
                        r = a.querySelector(".box__overlay"),
                        o = a.querySelectorAll(".box__overlay__accordion__trigger");
                    if (l.boxScrollCounter != n && l.boxScrollCounter < n) {
                        if (l.scrollToY(l.boxesOffset[n].top + l.boxesTriggerShiftDown[n] - l.revealerOffset.top + l.boxesOffset[n].height / 4, 1e3), r) {
                            var i = l.debounce(function () {
                                l.showOverlay(o, t), window.removeEventListener("scroll", i)
                            }, 200);
                            window.addEventListener("scroll", i)
                        }
                    } else if (l.boxScrollCounter != n && l.boxScrollCounter > n) {
                        if (l.scrollToY(l.boxesOffset[n].bottom - l.boxesTriggerShiftUp[n] - l.revealerOffset.top - l.boxesOffset[n].height / 4, 1e3), r) {
                            var s = l.debounce(function () {
                                l.showOverlay(o, t), window.removeEventListener("scroll", s)
                            }, 200);
                            window.addEventListener("scroll", s)
                        }
                    } else t.querySelector(".box__overlay") && !document.body.classList.contains("overlay--open") && l.showOverlay(o, t)
                })
            }), l.circleType(), l.overlayClose.addEventListener("click", function (e) {
                document.body.classList.remove("overlay--open"), document.body.classList.add("overlay--closed"), l.overlayState = !1
            }), l.overlay.addEventListener("click", function (e) {
                var t = l.overlay.querySelector(".box__overlay__inner"),
                    n = e.target;
                do {
                    if (n == t) return;
                    n = n.parentNode
                } while (n);
                document.body.classList.remove("overlay--open"), document.body.classList.add("overlay--closed"), l.overlayState = !1
            }), l.overlay.addEventListener("scroll", function (e) {
                l.overlay.scrollHeight - l.overlay.scrollTop < l.overlay.clientHeight + 1 && (document.body.classList.remove("overlay--open"), document.body.classList.add("overlay--closed"), l.overlayState = !1), l.overlay.scrollTop <= 0 && (document.body.classList.remove("overlay--open"), document.body.classList.add("overlay--closed"), l.overlayState = !1)
            }), document.querySelectorAll(".nav__list__entry").forEach(function (e) {
                var t = e.dataset.box,
                    n = e.parentElement.parentElement.querySelector(".nav__trigger__checkbox");
                e.addEventListener("click", function (e) {
                    l.scrollToY(l.boxesOffset[t].top + l.boxesTriggerShiftDown[t] - l.revealerOffset.top + l.boxesOffset[t].height / 4, 1e3), n.checked = !1
                })
            }), l.titleEl.addEventListener("animationend", function () {
                setTimeout(function () {
                    l.titleEl.classList.remove("is-revealing"), l.logo.classList.remove("is-revealing"), l.titleLabel.classList.remove("is-revealing")
                }, 100);
                var e = new Event("readyForTwitter");
                window.dispatchEvent(e)
            });
            var o = [].slice.call(document.querySelectorAll("img.lazy"));
            if (window.IntersectionObserver) {
                var i = new IntersectionObserver(function (e, t) {
                    e.forEach(function (e) {
                        if (e.isIntersecting) {
                            var t = e.target.querySelector("img.lazy");
                            l.lazyLoadImage(t), t.classList.remove("lazy"), i.unobserve(e.target)
                        }
                    })
                }, {
                    rootMargin: "0% 0% 15% 0%"
                });
                l.allBoxes.forEach(function (e) {
                    i.observe(e)
                })
            } else o.forEach(function (e) {
                l.lazyLoadImage(e)
            })
        })
    });
    n(7)
}]);
