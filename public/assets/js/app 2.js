/*!
 * digipants: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var digipants = digipants || [];
 *   digipants.push(readyFunction);
 */ !(function (t) {
    var e = {};
    function n(r) {
        if (e[r]) return e[r].exports;
        var i = (e[r] = { i: r, l: !1, exports: {} });
        return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
        }),
        (n.r = function (t) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (
                (n.r(r),
                    Object.defineProperty(r, "default", { enumerable: !0, value: t }),
                    2 & e && "string" != typeof t)
            )
                for (var i in t)
                    n.d(
                        r,
                        i,
                        function (e) {
                            return t[e];
                        }.bind(null, i)
                    );
            return r;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                        return t.default;
                    }
                    : function () {
                        return t;
                    };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 129));
})([
    function (t, e, n) {
        (function (e) {
            var n = function (t) {
                return t && t.Math == Math && t;
            };
            t.exports =
                n("object" == typeof globalThis && globalThis) ||
                n("object" == typeof window && window) ||
                n("object" == typeof self && self) ||
                n("object" == typeof e && e) ||
                (function () {
                    return this;
                })() ||
                Function("return this")();
        }.call(this, n(26)));
    },
    function (t, e) {
        t.exports = function (t) {
            return t && t.__esModule ? t : { default: t };
        };
    },
    function (t, e) {
        var n = Array.isArray;
        t.exports = n;
    },
    function (t, e, n) {
        "use strict";
        var r = {},
            i = {},
            o = [],
            a = window.digipants || [],
            u = window.jQuery,
            c = u(window),
            s = u(document),
            f = u.isFunction,
            l = (r._ = n(131)),
            d = (r.tram = n(69) && u.tram),
            p = !1,
            v = !1;
        function h(t) {
            r.env() &&
                (f(t.design) && c.on("__wf_design", t.design),
                    f(t.preview) && c.on("__wf_preview", t.preview)),
                f(t.destroy) && c.on("__wf_destroy", t.destroy),
                t.ready &&
                f(t.ready) &&
                (function (t) {
                    if (p) return void t.ready();
                    if (l.contains(o, t.ready)) return;
                    o.push(t.ready);
                })(t);
        }
        function E(t) {
            f(t.design) && c.off("__wf_design", t.design),
                f(t.preview) && c.off("__wf_preview", t.preview),
                f(t.destroy) && c.off("__wf_destroy", t.destroy),
                t.ready &&
                f(t.ready) &&
                (function (t) {
                    o = l.filter(o, function (e) {
                        return e !== t.ready;
                    });
                })(t);
        }
        (d.config.hideBackface = !1),
            (d.config.keepInherited = !0),
            (r.define = function (t, e, n) {
                i[t] && E(i[t]);
                var r = (i[t] = e(u, l, n) || {});
                return h(r), r;
            }),
            (r.require = function (t) {
                return i[t];
            }),
            (r.push = function (t) {
                p ? f(t) && t() : a.push(t);
            }),
            (r.env = function (t) {
                var e = window.__wf_design,
                    n = void 0 !== e;
                return t
                    ? "design" === t
                        ? n && e
                        : "preview" === t
                            ? n && !e
                            : "slug" === t
                                ? n && window.__wf_slug
                                : "editor" === t
                                    ? window.digipantsEditor
                                    : "test" === t
                                        ? window.__wf_test
                                        : "frame" === t
                                            ? window !== window.top
                                            : void 0
                    : n;
            });
        var g,
            m = navigator.userAgent.toLowerCase(),
            y = (r.env.touch =
                "ontouchstart" in window ||
                (window.DocumentTouch && document instanceof window.DocumentTouch)),
            _ = (r.env.chrome =
                /chrome/.test(m) &&
                /Google/.test(navigator.vendor) &&
                parseInt(m.match(/chrome\/(\d+)\./)[1], 10)),
            I = (r.env.ios = /(ipod|iphone|ipad)/.test(m));
        (r.env.safari = /safari/.test(m) && !_ && !I),
            y &&
            s.on("touchstart mousedown", function (t) {
                g = t.target;
            }),
            (r.validClick = y
                ? function (t) {
                    return t === g || u.contains(t, g);
                }
                : function () {
                    return !0;
                });
        var b,
            T = "resize.digipants orientationchange.digipants load.digipants";
        function w(t, e) {
            var n = [],
                r = {};
            return (
                (r.up = l.throttle(function (t) {
                    l.each(n, function (e) {
                        e(t);
                    });
                })),
                t && e && t.on(e, r.up),
                (r.on = function (t) {
                    "function" == typeof t && (l.contains(n, t) || n.push(t));
                }),
                (r.off = function (t) {
                    n = arguments.length
                        ? l.filter(n, function (e) {
                            return e !== t;
                        })
                        : [];
                }),
                r
            );
        }
        function O(t) {
            f(t) && t();
        }
        function A() {
            b && (b.reject(), c.off("load", b.resolve)),
                (b = new u.Deferred()),
                c.on("load", b.resolve);
        }
        (r.resize = w(c, T)),
            (r.scroll = w(
                c,
                "scroll.digipants resize.digipants orientationchange.digipants load.digipants"
            )),
            (r.redraw = w()),
            (r.location = function (t) {
                window.location = t;
            }),
            r.env() && (r.location = function () { }),
            (r.ready = function () {
                (p = !0),
                    v ? ((v = !1), l.each(i, h)) : l.each(o, O),
                    l.each(a, O),
                    r.resize.up();
            }),
            (r.load = function (t) {
                b.then(t);
            }),
            (r.destroy = function (t) {
                (t = t || {}),
                    (v = !0),
                    c.triggerHandler("__wf_destroy"),
                    null != t.domready && (p = t.domready),
                    l.each(i, E),
                    r.resize.off(),
                    r.scroll.off(),
                    r.redraw.off(),
                    (o = []),
                    (a = []),
                    "pending" === b.state() && A();
            }),
            u(r.ready),
            A(),
            (t.exports = window.digipants = r);
    },
    function (t, e, n) {
        "use strict";
        var r = n(19);
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
        e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
        var o = n(188);
        Object.keys(o).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                (Object.prototype.hasOwnProperty.call(i, t) ||
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function () {
                            return o[t];
                        },
                    }));
        });
        var a = n(94);
        Object.keys(a).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                (Object.prototype.hasOwnProperty.call(i, t) ||
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function () {
                            return a[t];
                        },
                    }));
        });
        var u = n(189);
        Object.keys(u).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                (Object.prototype.hasOwnProperty.call(i, t) ||
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function () {
                            return u[t];
                        },
                    }));
        });
        var c = n(190);
        Object.keys(c).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                (Object.prototype.hasOwnProperty.call(i, t) ||
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function () {
                            return c[t];
                        },
                    }));
        });
        var s = r(n(191));
        e.IX2EngineActionTypes = s;
        var f = r(n(192));
        e.IX2EngineConstants = f;
    },
    function (t, e) {
        var n = Function.prototype,
            r = n.bind,
            i = n.call,
            o = r && r.bind(i);
        t.exports = r
            ? function (t) {
                return t && o(i, t);
            }
            : function (t) {
                return (
                    t &&
                    function () {
                        return i.apply(t, arguments);
                    }
                );
            };
    },
    function (t, e, n) {
        var r = n(99),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r || i || Function("return this")();
        t.exports = o;
    },
    function (t, e) {
        t.exports = function (t) {
            return "function" == typeof t;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
        };
    },
    function (t, e, n) {
        var r = n(5),
            i = n(156),
            o = r({}.hasOwnProperty);
        t.exports =
            Object.hasOwn ||
            function (t, e) {
                return o(i(t), e);
            };
    },
    function (t, e, n) {
        var r = n(195),
            i = n(249),
            o = n(63),
            a = n(2),
            u = n(258);
        t.exports = function (t) {
            return "function" == typeof t
                ? t
                : null == t
                    ? o
                    : "object" == typeof t
                        ? a(t)
                            ? i(t[0], t[1])
                            : r(t)
                        : u(t);
        };
    },
    function (t, e, n) {
        var r = n(207),
            i = n(212);
        t.exports = function (t, e) {
            var n = i(t, e);
            return r(n) ? n : void 0;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return null != t && "object" == typeof t;
        };
    },
    function (t, e, n) {
        var r = n(20);
        t.exports = !r(function () {
            return (
                7 !=
                Object.defineProperty({}, 1, {
                    get: function () {
                        return 7;
                    },
                })[1]
            );
        });
    },
    function (t, e, n) {
        "use strict";
        var r = n(19);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.IX2VanillaUtils =
                e.IX2VanillaPlugins =
                e.IX2ElementsReducer =
                e.IX2EasingUtils =
                e.IX2Easings =
                e.IX2BrowserSupport =
                void 0);
        var i = r(n(48));
        e.IX2BrowserSupport = i;
        var o = r(n(116));
        e.IX2Easings = o;
        var a = r(n(118));
        e.IX2EasingUtils = a;
        var u = r(n(267));
        e.IX2ElementsReducer = u;
        var c = r(n(120));
        e.IX2VanillaPlugins = c;
        var s = r(n(269));
        e.IX2VanillaUtils = s;
    },
    function (t, e, n) {
        var r = n(24),
            i = n(208),
            o = n(209),
            a = "[object Null]",
            u = "[object Undefined]",
            c = r ? r.toStringTag : void 0;
        t.exports = function (t) {
            return null == t
                ? void 0 === t
                    ? u
                    : a
                : c && c in Object(t)
                    ? i(t)
                    : o(t);
        };
    },
    function (t, e, n) {
        var r = n(98),
            i = n(56);
        t.exports = function (t) {
            return null != t && i(t.length) && !r(t);
        };
    },
    function (t, e) {
        function n(t) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                    }
                    : function (t) {
                        return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                    })(t);
        }
        function r(e) {
            return (
                "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
                    ? (t.exports = r =
                        function (t) {
                            return n(t);
                        })
                    : (t.exports = r =
                        function (t) {
                            return t &&
                                "function" == typeof Symbol &&
                                t.constructor === Symbol &&
                                t !== Symbol.prototype
                                ? "symbol"
                                : n(t);
                        }),
                r(e)
            );
        }
        t.exports = r;
    },
    function (t, e, n) {
        "use strict";
        var r = n(136);
        function i(t, e) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n);
        }
        var o = window.jQuery,
            a = {},
            u = {
                reset: function (t, e) {
                    r.triggers.reset(t, e);
                },
                intro: function (t, e) {
                    r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE");
                },
                outro: function (t, e) {
                    r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE");
                },
            };
        (a.triggers = {}),
            (a.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }),
            o.extend(a.triggers, u),
            (t.exports = a);
    },
    function (t, e) {
        t.exports = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var r =
                            Object.defineProperty && Object.getOwnPropertyDescriptor
                                ? Object.getOwnPropertyDescriptor(t, n)
                                : {};
                        r.get || r.set ? Object.defineProperty(e, n, r) : (e[n] = t[n]);
                    }
            return (e.default = t), e;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    },
    function (t, e, n) {
        var r = n(7);
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : r(t);
        };
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            return (
                e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                    })
                    : (t[e] = n),
                t
            );
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                }
                : function (t) {
                    return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                };
        (e.clone = c),
            (e.addLast = l),
            (e.addFirst = d),
            (e.removeLast = p),
            (e.removeFirst = v),
            (e.insert = h),
            (e.removeAt = E),
            (e.replaceAt = g),
            (e.getIn = m),
            (e.set = y),
            (e.setIn = _),
            (e.update = I),
            (e.updateIn = b),
            (e.merge = T),
            (e.mergeDeep = w),
            (e.mergeIn = O),
            (e.omit = A),
            (e.addDefaults = S);
        /*!
         * Timm
         *
         * Immutability helpers with fast reads and acceptable writes.
         *
         * @copyright Guillermo Grau Panea 2016
         * @license MIT
         */
        var i = "INVALID_ARGS";
        function o(t) {
            throw new Error(t);
        }
        function a(t) {
            var e = Object.keys(t);
            return Object.getOwnPropertySymbols
                ? e.concat(Object.getOwnPropertySymbols(t))
                : e;
        }
        var u = {}.hasOwnProperty;
        function c(t) {
            if (Array.isArray(t)) return t.slice();
            for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
                var i = e[r];
                n[i] = t[i];
            }
            return n;
        }
        function s(t, e, n) {
            var r = n;
            null == r && o(i);
            for (
                var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3;
                p < l;
                p++
            )
                d[p - 3] = arguments[p];
            for (var v = 0; v < d.length; v++) {
                var h = d[v];
                if (null != h) {
                    var E = a(h);
                    if (E.length)
                        for (var g = 0; g <= E.length; g++) {
                            var m = E[g];
                            if (!t || void 0 === r[m]) {
                                var y = h[m];
                                e && f(r[m]) && f(y) && (y = s(t, e, r[m], y)),
                                    void 0 !== y &&
                                    y !== r[m] &&
                                    (u || ((u = !0), (r = c(r))), (r[m] = y));
                            }
                        }
                }
            }
            return r;
        }
        function f(t) {
            var e = void 0 === t ? "undefined" : r(t);
            return null != t && ("object" === e || "function" === e);
        }
        function l(t, e) {
            return Array.isArray(e) ? t.concat(e) : t.concat([e]);
        }
        function d(t, e) {
            return Array.isArray(e) ? e.concat(t) : [e].concat(t);
        }
        function p(t) {
            return t.length ? t.slice(0, t.length - 1) : t;
        }
        function v(t) {
            return t.length ? t.slice(1) : t;
        }
        function h(t, e, n) {
            return t
                .slice(0, e)
                .concat(Array.isArray(n) ? n : [n])
                .concat(t.slice(e));
        }
        function E(t, e) {
            return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1));
        }
        function g(t, e, n) {
            if (t[e] === n) return t;
            for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
            return (i[e] = n), i;
        }
        function m(t, e) {
            if ((!Array.isArray(e) && o(i), null != t)) {
                for (var n = t, r = 0; r < e.length; r++) {
                    var a = e[r];
                    if (void 0 === (n = null != n ? n[a] : void 0)) return n;
                }
                return n;
            }
        }
        function y(t, e, n) {
            var r = null == t ? ("number" == typeof e ? [] : {}) : t;
            if (r[e] === n) return r;
            var i = c(r);
            return (i[e] = n), i;
        }
        function _(t, e, n) {
            return e.length
                ? (function t(e, n, r, i) {
                    var o = void 0,
                        a = n[i];
                    o =
                        i === n.length - 1
                            ? r
                            : t(
                                f(e) && f(e[a])
                                    ? e[a]
                                    : "number" == typeof n[i + 1]
                                        ? []
                                        : {},
                                n,
                                r,
                                i + 1
                            );
                    return y(e, a, o);
                })(t, e, n, 0)
                : n;
        }
        function I(t, e, n) {
            return y(t, e, n(null == t ? void 0 : t[e]));
        }
        function b(t, e, n) {
            return _(t, e, n(m(t, e)));
        }
        function T(t, e, n, r, i, o) {
            for (
                var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
                c < a;
                c++
            )
                u[c - 6] = arguments[c];
            return u.length
                ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u))
                : s(!1, !1, t, e, n, r, i, o);
        }
        function w(t, e, n, r, i, o) {
            for (
                var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
                c < a;
                c++
            )
                u[c - 6] = arguments[c];
            return u.length
                ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u))
                : s(!1, !0, t, e, n, r, i, o);
        }
        function O(t, e, n, r, i, o, a) {
            var u = m(t, e);
            null == u && (u = {});
            for (
                var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7;
                l < c;
                l++
            )
                f[l - 7] = arguments[l];
            return _(
                t,
                e,
                f.length
                    ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f))
                    : s(!1, !1, u, n, r, i, o, a)
            );
        }
        function A(t, e) {
            for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
                if (u.call(t, n[i])) {
                    r = !0;
                    break;
                }
            if (!r) return t;
            for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
                var f = c[s];
                n.indexOf(f) >= 0 || (o[f] = t[f]);
            }
            return o;
        }
        function S(t, e, n, r, i, o) {
            for (
                var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
                c < a;
                c++
            )
                u[c - 6] = arguments[c];
            return u.length
                ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u))
                : s(!0, !1, t, e, n, r, i, o);
        }
        var x = {
            clone: c,
            addLast: l,
            addFirst: d,
            removeLast: p,
            removeFirst: v,
            insert: h,
            removeAt: E,
            replaceAt: g,
            getIn: m,
            set: y,
            setIn: _,
            update: I,
            updateIn: b,
            merge: T,
            mergeDeep: w,
            mergeIn: O,
            omit: A,
            addDefaults: S,
        };
        e.default = x;
    },
    function (t, e, n) {
        var r = n(6).Symbol;
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(39),
            i = 1 / 0;
        t.exports = function (t) {
            if ("string" == typeof t || r(t)) return t;
            var e = t + "";
            return "0" == e && 1 / t == -i ? "-0" : e;
        };
    },
    function (t, e) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (t) {
            "object" == typeof window && (n = window);
        }
        t.exports = n;
    },
    function (t, e, n) {
        var r = n(145),
            i = n(72);
        t.exports = function (t) {
            return r(i(t));
        };
    },
    function (t, e, n) {
        var r = n(0),
            i = n(7);
        t.exports = function (t, e) {
            return arguments.length < 2
                ? ((n = r[t]), i(n) ? n : void 0)
                : r[t] && r[t][e];
            var n;
        };
    },
    function (t, e, n) {
        var r = n(0),
            i = n(13),
            o = n(80),
            a = n(30),
            u = n(73),
            c = r.TypeError,
            s = Object.defineProperty;
        e.f = i
            ? s
            : function (t, e, n) {
                if ((a(t), (e = u(e)), a(n), o))
                    try {
                        return s(t, e, n);
                    } catch (t) { }
                if ("get" in n || "set" in n) throw c("Accessors not supported");
                return "value" in n && (t[e] = n.value), t;
            };
    },
    function (t, e, n) {
        var r = n(0),
            i = n(21),
            o = r.String,
            a = r.TypeError;
        t.exports = function (t) {
            if (i(t)) return t;
            throw a(o(t) + " is not an object");
        };
    },
    function (t, e) {
        function n() {
            return (
                (t.exports = n =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                        }
                        return t;
                    }),
                n.apply(this, arguments)
            );
        }
        t.exports = n;
    },
    function (t, e, n) {
        var r = n(197),
            i = n(198),
            o = n(199),
            a = n(200),
            u = n(201);
        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r),
            (c.prototype.delete = i),
            (c.prototype.get = o),
            (c.prototype.has = a),
            (c.prototype.set = u),
            (t.exports = c);
    },
    function (t, e, n) {
        var r = n(49);
        t.exports = function (t, e) {
            for (var n = t.length; n--;) if (r(t[n][0], e)) return n;
            return -1;
        };
    },
    function (t, e, n) {
        var r = n(11)(Object, "create");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(221);
        t.exports = function (t, e) {
            var n = t.__data__;
            return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
        };
    },
    function (t, e, n) {
        var r = n(106),
            i = n(57),
            o = n(16);
        t.exports = function (t) {
            return o(t) ? r(t) : i(t);
        };
    },
    function (t, e, n) {
        var r = n(239),
            i = n(12),
            o = Object.prototype,
            a = o.hasOwnProperty,
            u = o.propertyIsEnumerable,
            c = r(
                (function () {
                    return arguments;
                })()
            )
                ? r
                : function (t) {
                    return i(t) && a.call(t, "callee") && !u.call(t, "callee");
                };
        t.exports = c;
    },
    function (t, e, n) {
        var r = n(2),
            i = n(62),
            o = n(250),
            a = n(253);
        t.exports = function (t, e) {
            return r(t) ? t : i(t, e) ? [t] : o(a(t));
        };
    },
    function (t, e, n) {
        var r = n(15),
            i = n(12),
            o = "[object Symbol]";
        t.exports = function (t) {
            return "symbol" == typeof t || (i(t) && r(t) == o);
        };
    },
    function (t, e) {
        var n = Function.prototype.call;
        t.exports = n.bind
            ? n.bind(n)
            : function () {
                return n.apply(n, arguments);
            };
    },
    function (t, e, n) {
        var r = n(0),
            i = n(42),
            o = r["__core-js_shared__"] || i("__core-js_shared__", {});
        t.exports = o;
    },
    function (t, e, n) {
        var r = n(0),
            i = Object.defineProperty;
        t.exports = function (t, e) {
            try {
                i(r, t, { value: e, configurable: !0, writable: !0 });
            } catch (n) {
                r[t] = e;
            }
            return e;
        };
    },
    function (t, e, n) {
        var r = n(13),
            i = n(29),
            o = n(71);
        t.exports = r
            ? function (t, e, n) {
                return i.f(t, e, o(1, n));
            }
            : function (t, e, n) {
                return (t[e] = n), t;
            };
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e) {
        t.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
        ];
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "ActionTypes", function () {
                return o;
            }),
            n.d(e, "default", function () {
                return a;
            });
        var r = n(88),
            i = n(183),
            o = { INIT: "@@redux/INIT" };
        function a(t, e, n) {
            var u;
            if (
                ("function" == typeof e && void 0 === n && ((n = e), (e = void 0)),
                    void 0 !== n)
            ) {
                if ("function" != typeof n)
                    throw new Error("Expected the enhancer to be a function.");
                return n(a)(t, e);
            }
            if ("function" != typeof t)
                throw new Error("Expected the reducer to be a function.");
            var c = t,
                s = e,
                f = [],
                l = f,
                d = !1;
            function p() {
                l === f && (l = f.slice());
            }
            function v() {
                return s;
            }
            function h(t) {
                if ("function" != typeof t)
                    throw new Error("Expected listener to be a function.");
                var e = !0;
                return (
                    p(),
                    l.push(t),
                    function () {
                        if (e) {
                            (e = !1), p();
                            var n = l.indexOf(t);
                            l.splice(n, 1);
                        }
                    }
                );
            }
            function E(t) {
                if (!Object(r.default)(t))
                    throw new Error(
                        "Actions must be plain objects. Use custom middleware for async actions."
                    );
                if (void 0 === t.type)
                    throw new Error(
                        'Actions may not have an undefined "type" property. Have you misspelled a constant?'
                    );
                if (d) throw new Error("Reducers may not dispatch actions.");
                try {
                    (d = !0), (s = c(s, t));
                } finally {
                    d = !1;
                }
                for (var e = (f = l), n = 0; n < e.length; n++) e[n]();
                return t;
            }
            return (
                E({ type: o.INIT }),
                ((u = {
                    dispatch: E,
                    subscribe: h,
                    getState: v,
                    replaceReducer: function (t) {
                        if ("function" != typeof t)
                            throw new Error("Expected the nextReducer to be a function.");
                        (c = t), E({ type: o.INIT });
                    },
                })[i.default] = function () {
                    var t,
                        e = h;
                    return (
                        ((t = {
                            subscribe: function (t) {
                                if ("object" != typeof t)
                                    throw new TypeError("Expected the observer to be an object.");
                                function n() {
                                    t.next && t.next(v());
                                }
                                return n(), { unsubscribe: e(n) };
                            },
                        })[i.default] = function () {
                            return this;
                        }),
                        t
                    );
                }),
                u
            );
        }
    },
    function (t, e, n) {
        "use strict";
        function r() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            if (0 === e.length)
                return function (t) {
                    return t;
                };
            if (1 === e.length) return e[0];
            var r = e[e.length - 1],
                i = e.slice(0, -1);
            return function () {
                return i.reduceRight(function (t, e) {
                    return e(t);
                }, r.apply(void 0, arguments));
            };
        }
        n.r(e),
            n.d(e, "default", function () {
                return r;
            });
    },
    function (t, e, n) {
        "use strict";
        var r = n(1);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.TRANSFORM_STYLE_PREFIXED =
                e.TRANSFORM_PREFIXED =
                e.FLEX_PREFIXED =
                e.ELEMENT_MATCHES =
                e.withBrowser =
                e.IS_BROWSER_ENV =
                void 0);
        var i = r(n(95)),
            o = "undefined" != typeof window;
        e.IS_BROWSER_ENV = o;
        var a = function (t, e) {
            return o ? t() : e;
        };
        e.withBrowser = a;
        var u = a(function () {
            return (0,
                i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (t) {
                    return t in Element.prototype;
                });
        });
        e.ELEMENT_MATCHES = u;
        var c = a(function () {
            var t = document.createElement("i"),
                e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
            try {
                for (var n = e.length, r = 0; r < n; r++) {
                    var i = e[r];
                    if (((t.style.display = i), t.style.display === i)) return i;
                }
                return "";
            } catch (t) {
                return "";
            }
        }, "flex");
        e.FLEX_PREFIXED = c;
        var s = a(function () {
            var t = document.createElement("i");
            if (null == t.style.transform)
                for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
                    var i = e[r] + "Transform";
                    if (void 0 !== t.style[i]) return i;
                }
            return "transform";
        }, "transform");
        e.TRANSFORM_PREFIXED = s;
        var f = s.split("transform")[0],
            l = f ? f + "TransformStyle" : "transformStyle";
        e.TRANSFORM_STYLE_PREFIXED = l;
    },
    function (t, e) {
        t.exports = function (t, e) {
            return t === e || (t != t && e != e);
        };
    },
    function (t, e, n) {
        var r = n(11)(n(6), "Map");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(213),
            i = n(220),
            o = n(222),
            a = n(223),
            u = n(224);
        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r),
            (c.prototype.delete = i),
            (c.prototype.get = o),
            (c.prototype.has = a),
            (c.prototype.set = u),
            (t.exports = c);
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
            return t;
        };
    },
    function (t, e, n) {
        (function (t) {
            var r = n(6),
                i = n(240),
                o = e && !e.nodeType && e,
                a = o && "object" == typeof t && t && !t.nodeType && t,
                u = a && a.exports === o ? r.Buffer : void 0,
                c = (u ? u.isBuffer : void 0) || i;
            t.exports = c;
        }.call(this, n(107)(t)));
    },
    function (t, e) {
        var n = 9007199254740991,
            r = /^(?:0|[1-9]\d*)$/;
        t.exports = function (t, e) {
            var i = typeof t;
            return (
                !!(e = null == e ? n : e) &&
                ("number" == i || ("symbol" != i && r.test(t))) &&
                t > -1 &&
                t % 1 == 0 &&
                t < e
            );
        };
    },
    function (t, e, n) {
        var r = n(241),
            i = n(242),
            o = n(243),
            a = o && o.isTypedArray,
            u = a ? i(a) : r;
        t.exports = u;
    },
    function (t, e) {
        var n = 9007199254740991;
        t.exports = function (t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
        };
    },
    function (t, e, n) {
        var r = n(58),
            i = n(244),
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (!r(t)) return i(t);
            var e = [];
            for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
            return e;
        };
    },
    function (t, e) {
        var n = Object.prototype;
        t.exports = function (t) {
            var e = t && t.constructor;
            return t === (("function" == typeof e && e.prototype) || n);
        };
    },
    function (t, e, n) {
        var r = n(245),
            i = n(50),
            o = n(246),
            a = n(247),
            u = n(109),
            c = n(15),
            s = n(100),
            f = s(r),
            l = s(i),
            d = s(o),
            p = s(a),
            v = s(u),
            h = c;
        ((r && "[object DataView]" != h(new r(new ArrayBuffer(1)))) ||
            (i && "[object Map]" != h(new i())) ||
            (o && "[object Promise]" != h(o.resolve())) ||
            (a && "[object Set]" != h(new a())) ||
            (u && "[object WeakMap]" != h(new u()))) &&
            (h = function (t) {
                var e = c(t),
                    n = "[object Object]" == e ? t.constructor : void 0,
                    r = n ? s(n) : "";
                if (r)
                    switch (r) {
                        case f:
                            return "[object DataView]";
                        case l:
                            return "[object Map]";
                        case d:
                            return "[object Promise]";
                        case p:
                            return "[object Set]";
                        case v:
                            return "[object WeakMap]";
                    }
                return e;
            }),
            (t.exports = h);
    },
    function (t, e, n) {
        var r = n(61);
        t.exports = function (t, e, n) {
            var i = null == t ? void 0 : r(t, e);
            return void 0 === i ? n : i;
        };
    },
    function (t, e, n) {
        var r = n(38),
            i = n(25);
        t.exports = function (t, e) {
            for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;)
                t = t[i(e[n++])];
            return n && n == o ? t : void 0;
        };
    },
    function (t, e, n) {
        var r = n(2),
            i = n(39),
            o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            a = /^\w*$/;
        t.exports = function (t, e) {
            if (r(t)) return !1;
            var n = typeof t;
            return (
                !(
                    "number" != n &&
                    "symbol" != n &&
                    "boolean" != n &&
                    null != t &&
                    !i(t)
                ) ||
                a.test(t) ||
                !o.test(t) ||
                (null != e && t in Object(e))
            );
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return t;
        };
    },
    function (t, e, n) {
        var r = n(262),
            i = n(8),
            o = n(39),
            a = NaN,
            u = /^[-+]0x[0-9a-f]+$/i,
            c = /^0b[01]+$/i,
            s = /^0o[0-7]+$/i,
            f = parseInt;
        t.exports = function (t) {
            if ("number" == typeof t) return t;
            if (o(t)) return a;
            if (i(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = i(e) ? e + "" : e;
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = r(t);
            var n = c.test(t);
            return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? a : +t;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(1);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.mediaQueriesDefined =
                e.viewportWidthChanged =
                e.actionListPlaybackChanged =
                e.elementStateChanged =
                e.instanceRemoved =
                e.instanceStarted =
                e.instanceAdded =
                e.parameterChanged =
                e.animationFrameChanged =
                e.eventStateChanged =
                e.testFrameRendered =
                e.eventListenerAdded =
                e.clearRequested =
                e.stopRequested =
                e.playbackRequested =
                e.previewRequested =
                e.sessionStopped =
                e.sessionStarted =
                e.sessionInitialized =
                e.rawDataImported =
                void 0);
        var i = r(n(31)),
            o = n(4),
            a = n(14),
            u = o.IX2EngineActionTypes,
            c = u.IX2_RAW_DATA_IMPORTED,
            s = u.IX2_SESSION_INITIALIZED,
            f = u.IX2_SESSION_STARTED,
            l = u.IX2_SESSION_STOPPED,
            d = u.IX2_PREVIEW_REQUESTED,
            p = u.IX2_PLAYBACK_REQUESTED,
            v = u.IX2_STOP_REQUESTED,
            h = u.IX2_CLEAR_REQUESTED,
            E = u.IX2_EVENT_LISTENER_ADDED,
            g = u.IX2_TEST_FRAME_RENDERED,
            m = u.IX2_EVENT_STATE_CHANGED,
            y = u.IX2_ANIMATION_FRAME_CHANGED,
            _ = u.IX2_PARAMETER_CHANGED,
            I = u.IX2_INSTANCE_ADDED,
            b = u.IX2_INSTANCE_STARTED,
            T = u.IX2_INSTANCE_REMOVED,
            w = u.IX2_ELEMENT_STATE_CHANGED,
            O = u.IX2_ACTION_LIST_PLAYBACK_CHANGED,
            A = u.IX2_VIEWPORT_WIDTH_CHANGED,
            S = u.IX2_MEDIA_QUERIES_DEFINED,
            x = a.IX2VanillaUtils.reifyState;
        e.rawDataImported = function (t) {
            return { type: c, payload: (0, i.default)({}, x(t)) };
        };
        e.sessionInitialized = function (t) {
            var e = t.hasBoundaryNodes,
                n = t.reducedMotion;
            return { type: s, payload: { hasBoundaryNodes: e, reducedMotion: n } };
        };
        e.sessionStarted = function () {
            return { type: f };
        };
        e.sessionStopped = function () {
            return { type: l };
        };
        e.previewRequested = function (t) {
            var e = t.rawData,
                n = t.defer;
            return { type: d, payload: { defer: n, rawData: e } };
        };
        e.playbackRequested = function (t) {
            var e = t.actionTypeId,
                n = void 0 === e ? o.ActionTypeConsts.GENERAL_START_ACTION : e,
                r = t.actionListId,
                i = t.actionItemId,
                a = t.eventId,
                u = t.allowEvents,
                c = t.immediate,
                s = t.testManual,
                f = t.verbose,
                l = t.rawData;
            return {
                type: p,
                payload: {
                    actionTypeId: n,
                    actionListId: r,
                    actionItemId: i,
                    testManual: s,
                    eventId: a,
                    allowEvents: u,
                    immediate: c,
                    verbose: f,
                    rawData: l,
                },
            };
        };
        e.stopRequested = function (t) {
            return { type: v, payload: { actionListId: t } };
        };
        e.clearRequested = function () {
            return { type: h };
        };
        e.eventListenerAdded = function (t, e) {
            return { type: E, payload: { target: t, listenerParams: e } };
        };
        e.testFrameRendered = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return { type: g, payload: { step: t } };
        };
        e.eventStateChanged = function (t, e) {
            return { type: m, payload: { stateKey: t, newState: e } };
        };
        e.animationFrameChanged = function (t, e) {
            return { type: y, payload: { now: t, parameters: e } };
        };
        e.parameterChanged = function (t, e) {
            return { type: _, payload: { key: t, value: e } };
        };
        e.instanceAdded = function (t) {
            return { type: I, payload: (0, i.default)({}, t) };
        };
        e.instanceStarted = function (t, e) {
            return { type: b, payload: { instanceId: t, time: e } };
        };
        e.instanceRemoved = function (t) {
            return { type: T, payload: { instanceId: t } };
        };
        e.elementStateChanged = function (t, e, n, r) {
            return {
                type: w,
                payload: { elementId: t, actionTypeId: e, current: n, actionItem: r },
            };
        };
        e.actionListPlaybackChanged = function (t) {
            var e = t.actionListId,
                n = t.isPlaying;
            return { type: O, payload: { actionListId: e, isPlaying: n } };
        };
        e.viewportWidthChanged = function (t) {
            var e = t.width,
                n = t.mediaQueries;
            return { type: A, payload: { width: e, mediaQueries: n } };
        };
        e.mediaQueriesDefined = function () {
            return { type: S };
        };
    },
    function (t, e, n) {
        var r = n(126),
            i = n(67);
        function o(t, e) {
            (this.__wrapped__ = t),
                (this.__actions__ = []),
                (this.__chain__ = !!e),
                (this.__index__ = 0),
                (this.__values__ = void 0);
        }
        (o.prototype = r(i.prototype)),
            (o.prototype.constructor = o),
            (t.exports = o);
    },
    function (t, e) {
        t.exports = function () { };
    },
    function (t, e, n) {
        var r = n(126),
            i = n(67),
            o = 4294967295;
        function a(t) {
            (this.__wrapped__ = t),
                (this.__actions__ = []),
                (this.__dir__ = 1),
                (this.__filtered__ = !1),
                (this.__iteratees__ = []),
                (this.__takeCount__ = o),
                (this.__views__ = []);
        }
        (a.prototype = r(i.prototype)),
            (a.prototype.constructor = a),
            (t.exports = a);
    },
    function (t, e, n) {
        "use strict";
        var r = n(1)(n(17));
        window.tram = (function (t) {
            function e(t, e) {
                return new F.Bare().init(t, e);
            }
            function n(t) {
                return t.replace(/[A-Z]/g, function (t) {
                    return "-" + t.toLowerCase();
                });
            }
            function i(t) {
                var e = parseInt(t.slice(1), 16);
                return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
            }
            function o(t, e, n) {
                return (
                    "#" + ((1 << 24) | (t << 16) | (e << 8) | n).toString(16).slice(1)
                );
            }
            function a() { }
            function u(t, e, n) {
                s("Units do not match [" + t + "]: " + e + ", " + n);
            }
            function c(t, e, n) {
                if ((void 0 !== e && (n = e), void 0 === t)) return n;
                var r = n;
                return (
                    $.test(t) || !Z.test(t)
                        ? (r = parseInt(t, 10))
                        : Z.test(t) && (r = 1e3 * parseFloat(t)),
                    0 > r && (r = 0),
                    r == r ? r : n
                );
            }
            function s(t) {
                H.debug && window && window.console.warn(t);
            }
            var f = (function (t, e, n) {
                function i(t) {
                    return "object" == (0, r.default)(t);
                }
                function o(t) {
                    return "function" == typeof t;
                }
                function a() { }
                return function r(u, c) {
                    function s() {
                        var t = new f();
                        return o(t.init) && t.init.apply(t, arguments), t;
                    }
                    function f() { }
                    c === n && ((c = u), (u = Object)), (s.Bare = f);
                    var l,
                        d = (a[t] = u[t]),
                        p = (f[t] = s[t] = new a());
                    return (
                        (p.constructor = s),
                        (s.mixin = function (e) {
                            return (f[t] = s[t] = r(s, e)[t]), s;
                        }),
                        (s.open = function (t) {
                            if (
                                ((l = {}),
                                    o(t) ? (l = t.call(s, p, d, s, u)) : i(t) && (l = t),
                                    i(l))
                            )
                                for (var n in l) e.call(l, n) && (p[n] = l[n]);
                            return o(p.init) || (p.init = u), s;
                        }),
                        s.open(c)
                    );
                };
            })("prototype", {}.hasOwnProperty),
                l = {
                    ease: [
                        "ease",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return (
                                e +
                                n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * t)
                            );
                        },
                    ],
                    "ease-in": [
                        "ease-in",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
                        },
                    ],
                    "ease-out": [
                        "ease-out",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return (
                                e +
                                n * (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
                            );
                        },
                    ],
                    "ease-in-out": [
                        "ease-in-out",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
                        },
                    ],
                    linear: [
                        "linear",
                        function (t, e, n, r) {
                            return (n * t) / r + e;
                        },
                    ],
                    "ease-in-quad": [
                        "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t + e;
                        },
                    ],
                    "ease-out-quad": [
                        "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                        function (t, e, n, r) {
                            return -n * (t /= r) * (t - 2) + e;
                        },
                    ],
                    "ease-in-out-quad": [
                        "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1
                                ? (n / 2) * t * t + e
                                : (-n / 2) * (--t * (t - 2) - 1) + e;
                        },
                    ],
                    "ease-in-cubic": [
                        "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t * t + e;
                        },
                    ],
                    "ease-out-cubic": [
                        "cubic-bezier(0.215, 0.610, 0.355, 1)",
                        function (t, e, n, r) {
                            return n * ((t = t / r - 1) * t * t + 1) + e;
                        },
                    ],
                    "ease-in-out-cubic": [
                        "cubic-bezier(0.645, 0.045, 0.355, 1)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1
                                ? (n / 2) * t * t * t + e
                                : (n / 2) * ((t -= 2) * t * t + 2) + e;
                        },
                    ],
                    "ease-in-quart": [
                        "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t * t * t + e;
                        },
                    ],
                    "ease-out-quart": [
                        "cubic-bezier(0.165, 0.840, 0.440, 1)",
                        function (t, e, n, r) {
                            return -n * ((t = t / r - 1) * t * t * t - 1) + e;
                        },
                    ],
                    "ease-in-out-quart": [
                        "cubic-bezier(0.770, 0, 0.175, 1)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1
                                ? (n / 2) * t * t * t * t + e
                                : (-n / 2) * ((t -= 2) * t * t * t - 2) + e;
                        },
                    ],
                    "ease-in-quint": [
                        "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t * t * t * t + e;
                        },
                    ],
                    "ease-out-quint": [
                        "cubic-bezier(0.230, 1, 0.320, 1)",
                        function (t, e, n, r) {
                            return n * ((t = t / r - 1) * t * t * t * t + 1) + e;
                        },
                    ],
                    "ease-in-out-quint": [
                        "cubic-bezier(0.860, 0, 0.070, 1)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1
                                ? (n / 2) * t * t * t * t * t + e
                                : (n / 2) * ((t -= 2) * t * t * t * t + 2) + e;
                        },
                    ],
                    "ease-in-sine": [
                        "cubic-bezier(0.470, 0, 0.745, 0.715)",
                        function (t, e, n, r) {
                            return -n * Math.cos((t / r) * (Math.PI / 2)) + n + e;
                        },
                    ],
                    "ease-out-sine": [
                        "cubic-bezier(0.390, 0.575, 0.565, 1)",
                        function (t, e, n, r) {
                            return n * Math.sin((t / r) * (Math.PI / 2)) + e;
                        },
                    ],
                    "ease-in-out-sine": [
                        "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                        function (t, e, n, r) {
                            return (-n / 2) * (Math.cos((Math.PI * t) / r) - 1) + e;
                        },
                    ],
                    "ease-in-expo": [
                        "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                        function (t, e, n, r) {
                            return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e;
                        },
                    ],
                    "ease-out-expo": [
                        "cubic-bezier(0.190, 1, 0.220, 1)",
                        function (t, e, n, r) {
                            return t === r ? e + n : n * (1 - Math.pow(2, (-10 * t) / r)) + e;
                        },
                    ],
                    "ease-in-out-expo": [
                        "cubic-bezier(1, 0, 0, 1)",
                        function (t, e, n, r) {
                            return 0 === t
                                ? e
                                : t === r
                                    ? e + n
                                    : (t /= r / 2) < 1
                                        ? (n / 2) * Math.pow(2, 10 * (t - 1)) + e
                                        : (n / 2) * (2 - Math.pow(2, -10 * --t)) + e;
                        },
                    ],
                    "ease-in-circ": [
                        "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                        function (t, e, n, r) {
                            return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e;
                        },
                    ],
                    "ease-out-circ": [
                        "cubic-bezier(0.075, 0.820, 0.165, 1)",
                        function (t, e, n, r) {
                            return n * Math.sqrt(1 - (t = t / r - 1) * t) + e;
                        },
                    ],
                    "ease-in-out-circ": [
                        "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1
                                ? (-n / 2) * (Math.sqrt(1 - t * t) - 1) + e
                                : (n / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
                        },
                    ],
                    "ease-in-back": [
                        "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                        function (t, e, n, r, i) {
                            return (
                                void 0 === i && (i = 1.70158),
                                n * (t /= r) * t * ((i + 1) * t - i) + e
                            );
                        },
                    ],
                    "ease-out-back": [
                        "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                        function (t, e, n, r, i) {
                            return (
                                void 0 === i && (i = 1.70158),
                                n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
                            );
                        },
                    ],
                    "ease-in-out-back": [
                        "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                        function (t, e, n, r, i) {
                            return (
                                void 0 === i && (i = 1.70158),
                                (t /= r / 2) < 1
                                    ? (n / 2) * t * t * ((1 + (i *= 1.525)) * t - i) + e
                                    : (n / 2) *
                                    ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) +
                                    e
                            );
                        },
                    ],
                },
                d = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
                },
                p = document,
                v = window,
                h = "bkwld-tram",
                E = /[\-\.0-9]/g,
                g = /[A-Z]/,
                m = "number",
                y = /^(rgb|#)/,
                _ = /(em|cm|mm|in|pt|pc|px)$/,
                I = /(em|cm|mm|in|pt|pc|px|%)$/,
                b = /(deg|rad|turn)$/,
                T = "unitless",
                w = /(all|none) 0s ease 0s/,
                O = /^(width|height)$/,
                A = " ",
                S = p.createElement("a"),
                x = ["Webkit", "Moz", "O", "ms"],
                R = ["-webkit-", "-moz-", "-o-", "-ms-"],
                N = function (t) {
                    if (t in S.style) return { dom: t, css: t };
                    var e,
                        n,
                        r = "",
                        i = t.split("-");
                    for (e = 0; e < i.length; e++)
                        r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                    for (e = 0; e < x.length; e++)
                        if ((n = x[e] + r) in S.style) return { dom: n, css: R[e] + t };
                },
                C = (e.support = {
                    bind: Function.prototype.bind,
                    transform: N("transform"),
                    transition: N("transition"),
                    backface: N("backface-visibility"),
                    timing: N("transition-timing-function"),
                });
            if (C.transition) {
                var L = C.timing.dom;
                if (((S.style[L] = l["ease-in-back"][0]), !S.style[L]))
                    for (var D in d) l[D][0] = d[D];
            }
            var P = (e.frame = (function () {
                var t =
                    v.requestAnimationFrame ||
                    v.webkitRequestAnimationFrame ||
                    v.mozRequestAnimationFrame ||
                    v.oRequestAnimationFrame ||
                    v.msRequestAnimationFrame;
                return t && C.bind
                    ? t.bind(v)
                    : function (t) {
                        v.setTimeout(t, 16);
                    };
            })()),
                M = (e.now = (function () {
                    var t = v.performance,
                        e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                    return e && C.bind
                        ? e.bind(t)
                        : Date.now ||
                        function () {
                            return +new Date();
                        };
                })()),
                j = f(function (e) {
                    function i(t, e) {
                        var n = (function (t) {
                            for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                                var i = t[e];
                                i && r.push(i);
                            }
                            return r;
                        })(("" + t).split(A)),
                            r = n[0];
                        e = e || {};
                        var i = Q[r];
                        if (!i) return s("Unsupported property: " + r);
                        if (!e.weak || !this.props[r]) {
                            var o = i[0],
                                a = this.props[r];
                            return (
                                a || (a = this.props[r] = new o.Bare()),
                                a.init(this.$el, n, i, e),
                                a
                            );
                        }
                    }
                    function o(t, e, n) {
                        if (t) {
                            var o = (0, r.default)(t);
                            if (
                                (e ||
                                    (this.timer && this.timer.destroy(),
                                        (this.queue = []),
                                        (this.active = !1)),
                                    "number" == o && e)
                            )
                                return (
                                    (this.timer = new W({
                                        duration: t,
                                        context: this,
                                        complete: a,
                                    })),
                                    void (this.active = !0)
                                );
                            if ("string" == o && e) {
                                switch (t) {
                                    case "hide":
                                        f.call(this);
                                        break;
                                    case "stop":
                                        u.call(this);
                                        break;
                                    case "redraw":
                                        l.call(this);
                                        break;
                                    default:
                                        i.call(this, t, n && n[1]);
                                }
                                return a.call(this);
                            }
                            if ("function" == o) return void t.call(this, this);
                            if ("object" == o) {
                                var s = 0;
                                p.call(
                                    this,
                                    t,
                                    function (t, e) {
                                        t.span > s && (s = t.span), t.stop(), t.animate(e);
                                    },
                                    function (t) {
                                        "wait" in t && (s = c(t.wait, 0));
                                    }
                                ),
                                    d.call(this),
                                    s > 0 &&
                                    ((this.timer = new W({ duration: s, context: this })),
                                        (this.active = !0),
                                        e && (this.timer.complete = a));
                                var v = this,
                                    h = !1,
                                    E = {};
                                P(function () {
                                    p.call(v, t, function (t) {
                                        t.active && ((h = !0), (E[t.name] = t.nextStyle));
                                    }),
                                        h && v.$el.css(E);
                                });
                            }
                        }
                    }
                    function a() {
                        if (
                            (this.timer && this.timer.destroy(),
                                (this.active = !1),
                                this.queue.length)
                        ) {
                            var t = this.queue.shift();
                            o.call(this, t.options, !0, t.args);
                        }
                    }
                    function u(t) {
                        var e;
                        this.timer && this.timer.destroy(),
                            (this.queue = []),
                            (this.active = !1),
                            "string" == typeof t
                                ? ((e = {})[t] = 1)
                                : (e =
                                    "object" == (0, r.default)(t) && null != t
                                        ? t
                                        : this.props),
                            p.call(this, e, v),
                            d.call(this);
                    }
                    function f() {
                        u.call(this), (this.el.style.display = "none");
                    }
                    function l() {
                        this.el.offsetHeight;
                    }
                    function d() {
                        var t,
                            e,
                            n = [];
                        for (t in (this.upstream && n.push(this.upstream), this.props))
                            (e = this.props[t]).active && n.push(e.string);
                        (n = n.join(",")),
                            this.style !== n &&
                            ((this.style = n), (this.el.style[C.transition.dom] = n));
                    }
                    function p(t, e, r) {
                        var o,
                            a,
                            u,
                            c,
                            s = e !== v,
                            f = {};
                        for (o in t)
                            (u = t[o]),
                                o in q
                                    ? (f.transform || (f.transform = {}), (f.transform[o] = u))
                                    : (g.test(o) && (o = n(o)),
                                        o in Q ? (f[o] = u) : (c || (c = {}), (c[o] = u)));
                        for (o in f) {
                            if (((u = f[o]), !(a = this.props[o]))) {
                                if (!s) continue;
                                a = i.call(this, o);
                            }
                            e.call(this, a, u);
                        }
                        r && c && r.call(this, c);
                    }
                    function v(t) {
                        t.stop();
                    }
                    function E(t, e) {
                        t.set(e);
                    }
                    function m(t) {
                        this.$el.css(t);
                    }
                    function y(t, n) {
                        e[t] = function () {
                            return this.children
                                ? function (t, e) {
                                    var n,
                                        r = this.children.length;
                                    for (n = 0; r > n; n++) t.apply(this.children[n], e);
                                    return this;
                                }.call(this, n, arguments)
                                : (this.el && n.apply(this, arguments), this);
                        };
                    }
                    (e.init = function (e) {
                        if (
                            ((this.$el = t(e)),
                                (this.el = this.$el[0]),
                                (this.props = {}),
                                (this.queue = []),
                                (this.style = ""),
                                (this.active = !1),
                                H.keepInherited && !H.fallback)
                        ) {
                            var n = Y(this.el, "transition");
                            n && !w.test(n) && (this.upstream = n);
                        }
                        C.backface &&
                            H.hideBackface &&
                            z(this.el, C.backface.css, "hidden");
                    }),
                        y("add", i),
                        y("start", o),
                        y("wait", function (t) {
                            (t = c(t, 0)),
                                this.active
                                    ? this.queue.push({ options: t })
                                    : ((this.timer = new W({
                                        duration: t,
                                        context: this,
                                        complete: a,
                                    })),
                                        (this.active = !0));
                        }),
                        y("then", function (t) {
                            return this.active
                                ? (this.queue.push({ options: t, args: arguments }),
                                    void (this.timer.complete = a))
                                : s(
                                    "No active transition timer. Use start() or wait() before then()."
                                );
                        }),
                        y("next", a),
                        y("stop", u),
                        y("set", function (t) {
                            u.call(this, t), p.call(this, t, E, m);
                        }),
                        y("show", function (t) {
                            "string" != typeof t && (t = "block"),
                                (this.el.style.display = t);
                        }),
                        y("hide", f),
                        y("redraw", l),
                        y("destroy", function () {
                            u.call(this),
                                t.removeData(this.el, h),
                                (this.$el = this.el = null);
                        });
                }),
                F = f(j, function (e) {
                    function n(e, n) {
                        var r = t.data(e, h) || t.data(e, h, new j.Bare());
                        return r.el || r.init(e), n ? r.start(n) : r;
                    }
                    e.init = function (e, r) {
                        var i = t(e);
                        if (!i.length) return this;
                        if (1 === i.length) return n(i[0], r);
                        var o = [];
                        return (
                            i.each(function (t, e) {
                                o.push(n(e, r));
                            }),
                            (this.children = o),
                            this
                        );
                    };
                }),
                k = f(function (t) {
                    function e() {
                        var t = this.get();
                        this.update("auto");
                        var e = this.get();
                        return this.update(t), e;
                    }
                    function n(t) {
                        var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                        return (e ? o(e[1], e[2], e[3]) : t).replace(
                            /#(\w)(\w)(\w)$/,
                            "#$1$1$2$2$3$3"
                        );
                    }
                    var i = 500,
                        a = "ease",
                        u = 0;
                    (t.init = function (t, e, n, r) {
                        (this.$el = t), (this.el = t[0]);
                        var o = e[0];
                        n[2] && (o = n[2]),
                            K[o] && (o = K[o]),
                            (this.name = o),
                            (this.type = n[1]),
                            (this.duration = c(e[1], this.duration, i)),
                            (this.ease = (function (t, e, n) {
                                return void 0 !== e && (n = e), t in l ? t : n;
                            })(e[2], this.ease, a)),
                            (this.delay = c(e[3], this.delay, u)),
                            (this.span = this.duration + this.delay),
                            (this.active = !1),
                            (this.nextStyle = null),
                            (this.auto = O.test(this.name)),
                            (this.unit = r.unit || this.unit || H.defaultUnit),
                            (this.angle = r.angle || this.angle || H.defaultAngle),
                            H.fallback || r.fallback
                                ? (this.animate = this.fallback)
                                : ((this.animate = this.transition),
                                    (this.string =
                                        this.name +
                                        A +
                                        this.duration +
                                        "ms" +
                                        ("ease" != this.ease ? A + l[this.ease][0] : "") +
                                        (this.delay ? A + this.delay + "ms" : "")));
                    }),
                        (t.set = function (t) {
                            (t = this.convert(t, this.type)), this.update(t), this.redraw();
                        }),
                        (t.transition = function (t) {
                            (this.active = !0),
                                (t = this.convert(t, this.type)),
                                this.auto &&
                                ("auto" == this.el.style[this.name] &&
                                    (this.update(this.get()), this.redraw()),
                                    "auto" == t && (t = e.call(this))),
                                (this.nextStyle = t);
                        }),
                        (t.fallback = function (t) {
                            var n =
                                this.el.style[this.name] || this.convert(this.get(), this.type);
                            (t = this.convert(t, this.type)),
                                this.auto &&
                                ("auto" == n && (n = this.convert(this.get(), this.type)),
                                    "auto" == t && (t = e.call(this))),
                                (this.tween = new U({
                                    from: n,
                                    to: t,
                                    duration: this.duration,
                                    delay: this.delay,
                                    ease: this.ease,
                                    update: this.update,
                                    context: this,
                                }));
                        }),
                        (t.get = function () {
                            return Y(this.el, this.name);
                        }),
                        (t.update = function (t) {
                            z(this.el, this.name, t);
                        }),
                        (t.stop = function () {
                            (this.active || this.nextStyle) &&
                                ((this.active = !1),
                                    (this.nextStyle = null),
                                    z(this.el, this.name, this.get()));
                            var t = this.tween;
                            t && t.context && t.destroy();
                        }),
                        (t.convert = function (t, e) {
                            if ("auto" == t && this.auto) return t;
                            var i,
                                o = "number" == typeof t,
                                a = "string" == typeof t;
                            switch (e) {
                                case m:
                                    if (o) return t;
                                    if (a && "" === t.replace(E, "")) return +t;
                                    i = "number(unitless)";
                                    break;
                                case y:
                                    if (a) {
                                        if ("" === t && this.original) return this.original;
                                        if (e.test(t))
                                            return "#" == t.charAt(0) && 7 == t.length ? t : n(t);
                                    }
                                    i = "hex or rgb string";
                                    break;
                                case _:
                                    if (o) return t + this.unit;
                                    if (a && e.test(t)) return t;
                                    i = "number(px) or string(unit)";
                                    break;
                                case I:
                                    if (o) return t + this.unit;
                                    if (a && e.test(t)) return t;
                                    i = "number(px) or string(unit or %)";
                                    break;
                                case b:
                                    if (o) return t + this.angle;
                                    if (a && e.test(t)) return t;
                                    i = "number(deg) or string(angle)";
                                    break;
                                case T:
                                    if (o) return t;
                                    if (a && I.test(t)) return t;
                                    i = "number(unitless) or string(unit or %)";
                            }
                            return (
                                (function (t, e) {
                                    s(
                                        "Type warning: Expected: [" +
                                        t +
                                        "] Got: [" +
                                        (0, r.default)(e) +
                                        "] " +
                                        e
                                    );
                                })(i, t),
                                t
                            );
                        }),
                        (t.redraw = function () {
                            this.el.offsetHeight;
                        });
                }),
                G = f(k, function (t, e) {
                    t.init = function () {
                        e.init.apply(this, arguments),
                            this.original || (this.original = this.convert(this.get(), y));
                    };
                }),
                X = f(k, function (t, e) {
                    (t.init = function () {
                        e.init.apply(this, arguments), (this.animate = this.fallback);
                    }),
                        (t.get = function () {
                            return this.$el[this.name]();
                        }),
                        (t.update = function (t) {
                            this.$el[this.name](t);
                        });
                }),
                V = f(k, function (t, e) {
                    function n(t, e) {
                        var n, r, i, o, a;
                        for (n in t)
                            (i = (o = q[n])[0]),
                                (r = o[1] || n),
                                (a = this.convert(t[n], i)),
                                e.call(this, r, a, i);
                    }
                    (t.init = function () {
                        e.init.apply(this, arguments),
                            this.current ||
                            ((this.current = {}),
                                q.perspective &&
                                H.perspective &&
                                ((this.current.perspective = H.perspective),
                                    z(this.el, this.name, this.style(this.current)),
                                    this.redraw()));
                    }),
                        (t.set = function (t) {
                            n.call(this, t, function (t, e) {
                                this.current[t] = e;
                            }),
                                z(this.el, this.name, this.style(this.current)),
                                this.redraw();
                        }),
                        (t.transition = function (t) {
                            var e = this.values(t);
                            this.tween = new B({
                                current: this.current,
                                values: e,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                            });
                            var n,
                                r = {};
                            for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
                            (this.active = !0), (this.nextStyle = this.style(r));
                        }),
                        (t.fallback = function (t) {
                            var e = this.values(t);
                            this.tween = new B({
                                current: this.current,
                                values: e,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this,
                            });
                        }),
                        (t.update = function () {
                            z(this.el, this.name, this.style(this.current));
                        }),
                        (t.style = function (t) {
                            var e,
                                n = "";
                            for (e in t) n += e + "(" + t[e] + ") ";
                            return n;
                        }),
                        (t.values = function (t) {
                            var e,
                                r = {};
                            return (
                                n.call(this, t, function (t, n, i) {
                                    (r[t] = n),
                                        void 0 === this.current[t] &&
                                        ((e = 0),
                                            ~t.indexOf("scale") && (e = 1),
                                            (this.current[t] = this.convert(e, i)));
                                }),
                                r
                            );
                        });
                }),
                U = f(function (e) {
                    function n() {
                        var t,
                            e,
                            r,
                            i = c.length;
                        if (i) for (P(n), e = M(), t = i; t--;) (r = c[t]) && r.render(e);
                    }
                    var r = { ease: l.ease[1], from: 0, to: 1 };
                    (e.init = function (t) {
                        (this.duration = t.duration || 0), (this.delay = t.delay || 0);
                        var e = t.ease || r.ease;
                        l[e] && (e = l[e][1]),
                            "function" != typeof e && (e = r.ease),
                            (this.ease = e),
                            (this.update = t.update || a),
                            (this.complete = t.complete || a),
                            (this.context = t.context || this),
                            (this.name = t.name);
                        var n = t.from,
                            i = t.to;
                        void 0 === n && (n = r.from),
                            void 0 === i && (i = r.to),
                            (this.unit = t.unit || ""),
                            "number" == typeof n && "number" == typeof i
                                ? ((this.begin = n), (this.change = i - n))
                                : this.format(i, n),
                            (this.value = this.begin + this.unit),
                            (this.start = M()),
                            !1 !== t.autoplay && this.play();
                    }),
                        (e.play = function () {
                            var t;
                            this.active ||
                                (this.start || (this.start = M()),
                                    (this.active = !0),
                                    (t = this),
                                    1 === c.push(t) && P(n));
                        }),
                        (e.stop = function () {
                            var e, n, r;
                            this.active &&
                                ((this.active = !1),
                                    (e = this),
                                    (r = t.inArray(e, c)) >= 0 &&
                                    ((n = c.slice(r + 1)),
                                        (c.length = r),
                                        n.length && (c = c.concat(n))));
                        }),
                        (e.render = function (t) {
                            var e,
                                n = t - this.start;
                            if (this.delay) {
                                if (n <= this.delay) return;
                                n -= this.delay;
                            }
                            if (n < this.duration) {
                                var r = this.ease(n, 0, 1, this.duration);
                                return (
                                    (e = this.startRGB
                                        ? (function (t, e, n) {
                                            return o(
                                                t[0] + n * (e[0] - t[0]),
                                                t[1] + n * (e[1] - t[1]),
                                                t[2] + n * (e[2] - t[2])
                                            );
                                        })(this.startRGB, this.endRGB, r)
                                        : (function (t) {
                                            return Math.round(t * s) / s;
                                        })(this.begin + r * this.change)),
                                    (this.value = e + this.unit),
                                    void this.update.call(this.context, this.value)
                                );
                            }
                            (e = this.endHex || this.begin + this.change),
                                (this.value = e + this.unit),
                                this.update.call(this.context, this.value),
                                this.complete.call(this.context),
                                this.destroy();
                        }),
                        (e.format = function (t, e) {
                            if (((e += ""), "#" == (t += "").charAt(0)))
                                return (
                                    (this.startRGB = i(e)),
                                    (this.endRGB = i(t)),
                                    (this.endHex = t),
                                    (this.begin = 0),
                                    void (this.change = 1)
                                );
                            if (!this.unit) {
                                var n = e.replace(E, "");
                                n !== t.replace(E, "") && u("tween", e, t), (this.unit = n);
                            }
                            (e = parseFloat(e)),
                                (t = parseFloat(t)),
                                (this.begin = this.value = e),
                                (this.change = t - e);
                        }),
                        (e.destroy = function () {
                            this.stop(),
                                (this.context = null),
                                (this.ease = this.update = this.complete = a);
                        });
                    var c = [],
                        s = 1e3;
                }),
                W = f(U, function (t) {
                    (t.init = function (t) {
                        (this.duration = t.duration || 0),
                            (this.complete = t.complete || a),
                            (this.context = t.context),
                            this.play();
                    }),
                        (t.render = function (t) {
                            t - this.start < this.duration ||
                                (this.complete.call(this.context), this.destroy());
                        });
                }),
                B = f(U, function (t, e) {
                    (t.init = function (t) {
                        var e, n;
                        for (e in ((this.context = t.context),
                            (this.update = t.update),
                            (this.tweens = []),
                            (this.current = t.current),
                            t.values))
                            (n = t.values[e]),
                                this.current[e] !== n &&
                                this.tweens.push(
                                    new U({
                                        name: e,
                                        from: this.current[e],
                                        to: n,
                                        duration: t.duration,
                                        delay: t.delay,
                                        ease: t.ease,
                                        autoplay: !1,
                                    })
                                );
                        this.play();
                    }),
                        (t.render = function (t) {
                            var e,
                                n,
                                r = !1;
                            for (e = this.tweens.length; e--;)
                                (n = this.tweens[e]).context &&
                                    (n.render(t), (this.current[n.name] = n.value), (r = !0));
                            return r
                                ? void (this.update && this.update.call(this.context))
                                : this.destroy();
                        }),
                        (t.destroy = function () {
                            if ((e.destroy.call(this), this.tweens)) {
                                var t;
                                for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                                (this.tweens = null), (this.current = null);
                            }
                        });
                }),
                H = (e.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !C.transition,
                    agentTests: [],
                });
            (e.fallback = function (t) {
                if (!C.transition) return (H.fallback = !0);
                H.agentTests.push("(" + t + ")");
                var e = new RegExp(H.agentTests.join("|"), "i");
                H.fallback = e.test(navigator.userAgent);
            }),
                e.fallback("6.0.[2-5] Safari"),
                (e.tween = function (t) {
                    return new U(t);
                }),
                (e.delay = function (t, e, n) {
                    return new W({ complete: e, duration: t, context: n });
                }),
                (t.fn.tram = function (t) {
                    return e.call(null, this, t);
                });
            var z = t.style,
                Y = t.css,
                K = { transform: C.transform && C.transform.css },
                Q = {
                    color: [G, y],
                    background: [G, y, "background-color"],
                    "outline-color": [G, y],
                    "border-color": [G, y],
                    "border-top-color": [G, y],
                    "border-right-color": [G, y],
                    "border-bottom-color": [G, y],
                    "border-left-color": [G, y],
                    "border-width": [k, _],
                    "border-top-width": [k, _],
                    "border-right-width": [k, _],
                    "border-bottom-width": [k, _],
                    "border-left-width": [k, _],
                    "border-spacing": [k, _],
                    "letter-spacing": [k, _],
                    margin: [k, _],
                    "margin-top": [k, _],
                    "margin-right": [k, _],
                    "margin-bottom": [k, _],
                    "margin-left": [k, _],
                    padding: [k, _],
                    "padding-top": [k, _],
                    "padding-right": [k, _],
                    "padding-bottom": [k, _],
                    "padding-left": [k, _],
                    "outline-width": [k, _],
                    opacity: [k, m],
                    top: [k, I],
                    right: [k, I],
                    bottom: [k, I],
                    left: [k, I],
                    "font-size": [k, I],
                    "text-indent": [k, I],
                    "word-spacing": [k, I],
                    width: [k, I],
                    "min-width": [k, I],
                    "max-width": [k, I],
                    height: [k, I],
                    "min-height": [k, I],
                    "max-height": [k, I],
                    "line-height": [k, T],
                    "scroll-top": [X, m, "scrollTop"],
                    "scroll-left": [X, m, "scrollLeft"],
                },
                q = {};
            C.transform &&
                ((Q.transform = [V]),
                    (q = {
                        x: [I, "translateX"],
                        y: [I, "translateY"],
                        rotate: [b],
                        rotateX: [b],
                        rotateY: [b],
                        scale: [m],
                        scaleX: [m],
                        scaleY: [m],
                        skew: [b],
                        skewX: [b],
                        skewY: [b],
                    })),
                C.transform &&
                C.backface &&
                ((q.z = [I, "translateZ"]),
                    (q.rotateZ = [b]),
                    (q.scaleZ = [m]),
                    (q.perspective = [_]));
            var $ = /ms/,
                Z = /s|\./;
            return (t.tram = e);
        })(window.jQuery);
    },
    function (t, e, n) {
        var r = n(13),
            i = n(40),
            o = n(144),
            a = n(71),
            u = n(27),
            c = n(73),
            s = n(9),
            f = n(80),
            l = Object.getOwnPropertyDescriptor;
        e.f = r
            ? l
            : function (t, e) {
                if (((t = u(t)), (e = c(e)), f))
                    try {
                        return l(t, e);
                    } catch (t) { }
                if (s(t, e)) return a(!i(o.f, t, e), t[e]);
            };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e,
            };
        };
    },
    function (t, e, n) {
        var r = n(0).TypeError;
        t.exports = function (t) {
            if (null == t) throw r("Can't call method on " + t);
            return t;
        };
    },
    function (t, e, n) {
        var r = n(147),
            i = n(74);
        t.exports = function (t) {
            var e = r(t, "string");
            return i(e) ? e : e + "";
        };
    },
    function (t, e, n) {
        var r = n(0),
            i = n(28),
            o = n(7),
            a = n(148),
            u = n(75),
            c = r.Object;
        t.exports = u
            ? function (t) {
                return "symbol" == typeof t;
            }
            : function (t) {
                var e = i("Symbol");
                return o(e) && a(e.prototype, c(t));
            };
    },
    function (t, e, n) {
        var r = n(76);
        t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    function (t, e, n) {
        var r = n(149),
            i = n(20);
        t.exports =
            !!Object.getOwnPropertySymbols &&
            !i(function () {
                var t = Symbol();
                return (
                    !String(t) ||
                    !(Object(t) instanceof Symbol) ||
                    (!Symbol.sham && r && r < 41)
                );
            });
    },
    function (t, e, n) {
        var r = n(0),
            i = n(78),
            o = n(9),
            a = n(79),
            u = n(76),
            c = n(75),
            s = i("wks"),
            f = r.Symbol,
            l = f && f.for,
            d = c ? f : (f && f.withoutSetter) || a;
        t.exports = function (t) {
            if (!o(s, t) || (!u && "string" != typeof s[t])) {
                var e = "Symbol." + t;
                u && o(f, t) ? (s[t] = f[t]) : (s[t] = c && l ? l(e) : d(e));
            }
            return s[t];
        };
    },
    function (t, e, n) {
        var r = n(155),
            i = n(41);
        (t.exports = function (t, e) {
            return i[t] || (i[t] = void 0 !== e ? e : {});
        })("versions", []).push({
            version: "3.19.0",
            mode: r ? "pure" : "global",
            copyright: "Â© 2021 Denis Pushkarev (zloirock.ru)",
        });
    },
    function (t, e, n) {
        var r = n(5),
            i = 0,
            o = Math.random(),
            a = r((1).toString);
        t.exports = function (t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++i + o, 36);
        };
    },
    function (t, e, n) {
        var r = n(13),
            i = n(20),
            o = n(81);
        t.exports =
            !r &&
            !i(function () {
                return (
                    7 !=
                    Object.defineProperty(o("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (t, e, n) {
        var r = n(0),
            i = n(21),
            o = r.document,
            a = i(o) && i(o.createElement);
        t.exports = function (t) {
            return a ? o.createElement(t) : {};
        };
    },
    function (t, e, n) {
        var r = n(5),
            i = n(7),
            o = n(41),
            a = r(Function.toString);
        i(o.inspectSource) ||
            (o.inspectSource = function (t) {
                return a(t);
            }),
            (t.exports = o.inspectSource);
    },
    function (t, e, n) {
        var r = n(78),
            i = n(79),
            o = r("keys");
        t.exports = function (t) {
            return o[t] || (o[t] = i(t));
        };
    },
    function (t, e, n) {
        var r = n(5),
            i = n(9),
            o = n(27),
            a = n(85).indexOf,
            u = n(44),
            c = r([].push);
        t.exports = function (t, e) {
            var n,
                r = o(t),
                s = 0,
                f = [];
            for (n in r) !i(u, n) && i(r, n) && c(f, n);
            for (; e.length > s;) i(r, (n = e[s++])) && (~a(f, n) || c(f, n));
            return f;
        };
    },
    function (t, e, n) {
        var r = n(27),
            i = n(164),
            o = n(165),
            a = function (t) {
                return function (e, n, a) {
                    var u,
                        c = r(e),
                        s = o(c),
                        f = i(a, s);
                    if (t && n != n) {
                        for (; s > f;) if ((u = c[f++]) != u) return !0;
                    } else
                        for (; s > f; f++)
                            if ((t || f in c) && c[f] === n) return t || f || 0;
                    return !t && -1;
                };
            };
        t.exports = { includes: a(!0), indexOf: a(!1) };
    },
    function (t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            var e = +t;
            return e != e || 0 === e ? 0 : (e > 0 ? r : n)(e);
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(46);
        n.d(e, "createStore", function () {
            return r.default;
        });
        var i = n(90);
        n.d(e, "combineReducers", function () {
            return i.default;
        });
        var o = n(92);
        n.d(e, "bindActionCreators", function () {
            return o.default;
        });
        var a = n(93);
        n.d(e, "applyMiddleware", function () {
            return a.default;
        });
        var u = n(47);
        n.d(e, "compose", function () {
            return u.default;
        });
        n(91);
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(175),
            i = n(180),
            o = n(182),
            a = "[object Object]",
            u = Function.prototype,
            c = Object.prototype,
            s = u.toString,
            f = c.hasOwnProperty,
            l = s.call(Object);
        e.default = function (t) {
            if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
            var e = Object(i.default)(t);
            if (null === e) return !0;
            var n = f.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && s.call(n) == l;
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(176).default.Symbol;
        e.default = r;
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "default", function () {
                return o;
            });
        var r = n(46);
        n(88), n(91);
        function i(t, e) {
            var n = e && e.type;
            return (
                "Given action " +
                ((n && '"' + n.toString() + '"') || "an action") +
                ', reducer "' +
                t +
                '" returned undefined. To ignore an action, you must explicitly return the previous state.'
            );
        }
        function o(t) {
            for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
                var a = e[o];
                0, "function" == typeof t[a] && (n[a] = t[a]);
            }
            var u,
                c = Object.keys(n);
            try {
                !(function (t) {
                    Object.keys(t).forEach(function (e) {
                        var n = t[e];
                        if (void 0 === n(void 0, { type: r.ActionTypes.INIT }))
                            throw new Error(
                                'Reducer "' +
                                e +
                                '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
                            );
                        if (
                            void 0 ===
                            n(void 0, {
                                type:
                                    "@@redux/PROBE_UNKNOWN_ACTION_" +
                                    Math.random().toString(36).substring(7).split("").join("."),
                            })
                        )
                            throw new Error(
                                'Reducer "' +
                                e +
                                "\" returned undefined when probed with a random type. Don't try to handle " +
                                r.ActionTypes.INIT +
                                ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.'
                            );
                    });
                })(n);
            } catch (t) {
                u = t;
            }
            return function () {
                var t =
                    arguments.length <= 0 || void 0 === arguments[0]
                        ? {}
                        : arguments[0],
                    e = arguments[1];
                if (u) throw u;
                for (var r = !1, o = {}, a = 0; a < c.length; a++) {
                    var s = c[a],
                        f = n[s],
                        l = t[s],
                        d = f(l, e);
                    if (void 0 === d) {
                        var p = i(s, e);
                        throw new Error(p);
                    }
                    (o[s] = d), (r = r || d !== l);
                }
                return r ? o : t;
            };
        }
    },
    function (t, e, n) {
        "use strict";
        function r(t) {
            "undefined" != typeof console &&
                "function" == typeof console.error &&
                console.error(t);
            try {
                throw new Error(t);
            } catch (t) { }
        }
        n.r(e),
            n.d(e, "default", function () {
                return r;
            });
    },
    function (t, e, n) {
        "use strict";
        function r(t, e) {
            return function () {
                return e(t.apply(void 0, arguments));
            };
        }
        function i(t, e) {
            if ("function" == typeof t) return r(t, e);
            if ("object" != typeof t || null === t)
                throw new Error(
                    "bindActionCreators expected an object or a function, instead received " +
                    (null === t ? "null" : typeof t) +
                    '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
                );
            for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
                var a = n[o],
                    u = t[a];
                "function" == typeof u && (i[a] = r(u, e));
            }
            return i;
        }
        n.r(e),
            n.d(e, "default", function () {
                return i;
            });
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "default", function () {
                return o;
            });
        var r = n(47),
            i =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                };
        function o() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return function (t) {
                return function (n, o, a) {
                    var u,
                        c = t(n, o, a),
                        s = c.dispatch,
                        f = {
                            getState: c.getState,
                            dispatch: function (t) {
                                return s(t);
                            },
                        };
                    return (
                        (u = e.map(function (t) {
                            return t(f);
                        })),
                        (s = r.default.apply(void 0, u)(c.dispatch)),
                        i({}, c, { dispatch: s })
                    );
                };
            };
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ActionAppliesTo = e.ActionTypeConsts = void 0);
        e.ActionTypeConsts = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        };
        e.ActionAppliesTo = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    function (t, e, n) {
        var r = n(96)(n(260));
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(10),
            i = n(16),
            o = n(36);
        t.exports = function (t) {
            return function (e, n, a) {
                var u = Object(e);
                if (!i(e)) {
                    var c = r(n, 3);
                    (e = o(e)),
                        (n = function (t) {
                            return c(u[t], t, u);
                        });
                }
                var s = t(e, n, a);
                return s > -1 ? u[c ? e[s] : s] : void 0;
            };
        };
    },
    function (t, e, n) {
        var r = n(32),
            i = n(202),
            o = n(203),
            a = n(204),
            u = n(205),
            c = n(206);
        function s(t) {
            var e = (this.__data__ = new r(t));
            this.size = e.size;
        }
        (s.prototype.clear = i),
            (s.prototype.delete = o),
            (s.prototype.get = a),
            (s.prototype.has = u),
            (s.prototype.set = c),
            (t.exports = s);
    },
    function (t, e, n) {
        var r = n(15),
            i = n(8),
            o = "[object AsyncFunction]",
            a = "[object Function]",
            u = "[object GeneratorFunction]",
            c = "[object Proxy]";
        t.exports = function (t) {
            if (!i(t)) return !1;
            var e = r(t);
            return e == a || e == u || e == o || e == c;
        };
    },
    function (t, e, n) {
        (function (e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n;
        }.call(this, n(26)));
    },
    function (t, e) {
        var n = Function.prototype.toString;
        t.exports = function (t) {
            if (null != t) {
                try {
                    return n.call(t);
                } catch (t) { }
                try {
                    return t + "";
                } catch (t) { }
            }
            return "";
        };
    },
    function (t, e, n) {
        var r = n(225),
            i = n(12);
        t.exports = function t(e, n, o, a, u) {
            return (
                e === n ||
                (null == e || null == n || (!i(e) && !i(n))
                    ? e != e && n != n
                    : r(e, n, o, a, t, u))
            );
        };
    },
    function (t, e, n) {
        var r = n(226),
            i = n(229),
            o = n(230),
            a = 1,
            u = 2;
        t.exports = function (t, e, n, c, s, f) {
            var l = n & a,
                d = t.length,
                p = e.length;
            if (d != p && !(l && p > d)) return !1;
            var v = f.get(t),
                h = f.get(e);
            if (v && h) return v == e && h == t;
            var E = -1,
                g = !0,
                m = n & u ? new r() : void 0;
            for (f.set(t, e), f.set(e, t); ++E < d;) {
                var y = t[E],
                    _ = e[E];
                if (c) var I = l ? c(_, y, E, e, t, f) : c(y, _, E, t, e, f);
                if (void 0 !== I) {
                    if (I) continue;
                    g = !1;
                    break;
                }
                if (m) {
                    if (
                        !i(e, function (t, e) {
                            if (!o(m, e) && (y === t || s(y, t, n, c, f))) return m.push(e);
                        })
                    ) {
                        g = !1;
                        break;
                    }
                } else if (y !== _ && !s(y, _, n, c, f)) {
                    g = !1;
                    break;
                }
            }
            return f.delete(t), f.delete(e), g;
        };
    },
    function (t, e, n) {
        var r = n(52),
            i = n(2);
        t.exports = function (t, e, n) {
            var o = e(t);
            return i(t) ? o : r(o, n(t));
        };
    },
    function (t, e, n) {
        var r = n(237),
            i = n(105),
            o = Object.prototype.propertyIsEnumerable,
            a = Object.getOwnPropertySymbols,
            u = a
                ? function (t) {
                    return null == t
                        ? []
                        : ((t = Object(t)),
                            r(a(t), function (e) {
                                return o.call(t, e);
                            }));
                }
                : i;
        t.exports = u;
    },
    function (t, e) {
        t.exports = function () {
            return [];
        };
    },
    function (t, e, n) {
        var r = n(238),
            i = n(37),
            o = n(2),
            a = n(53),
            u = n(54),
            c = n(55),
            s = Object.prototype.hasOwnProperty;
        t.exports = function (t, e) {
            var n = o(t),
                f = !n && i(t),
                l = !n && !f && a(t),
                d = !n && !f && !l && c(t),
                p = n || f || l || d,
                v = p ? r(t.length, String) : [],
                h = v.length;
            for (var E in t)
                (!e && !s.call(t, E)) ||
                    (p &&
                        ("length" == E ||
                            (l && ("offset" == E || "parent" == E)) ||
                            (d &&
                                ("buffer" == E || "byteLength" == E || "byteOffset" == E)) ||
                            u(E, h))) ||
                    v.push(E);
            return v;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return (
                t.webpackPolyfill ||
                ((t.deprecate = function () { }),
                    (t.paths = []),
                    t.children || (t.children = []),
                    Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return t.l;
                        },
                    }),
                    Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function () {
                            return t.i;
                        },
                    }),
                    (t.webpackPolyfill = 1)),
                t
            );
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return function (n) {
                return t(e(n));
            };
        };
    },
    function (t, e, n) {
        var r = n(11)(n(6), "WeakMap");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(8);
        t.exports = function (t) {
            return t == t && !r(t);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return function (n) {
                return null != n && n[t] === e && (void 0 !== e || t in Object(n));
            };
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;)
                i[n] = e(t[n], n, t);
            return i;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return function (e) {
                return null == e ? void 0 : e[t];
            };
        };
    },
    function (t, e) {
        t.exports = function (t, e, n, r) {
            for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                if (e(t[o], o, t)) return o;
            return -1;
        };
    },
    function (t, e, n) {
        var r = n(261);
        t.exports = function (t) {
            var e = r(t),
                n = e % 1;
            return e == e ? (n ? e - n : e) : 0;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(1);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.inQuad = function (t) {
                return Math.pow(t, 2);
            }),
            (e.outQuad = function (t) {
                return -(Math.pow(t - 1, 2) - 1);
            }),
            (e.inOutQuad = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 2);
                return -0.5 * ((t -= 2) * t - 2);
            }),
            (e.inCubic = function (t) {
                return Math.pow(t, 3);
            }),
            (e.outCubic = function (t) {
                return Math.pow(t - 1, 3) + 1;
            }),
            (e.inOutCubic = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 3);
                return 0.5 * (Math.pow(t - 2, 3) + 2);
            }),
            (e.inQuart = function (t) {
                return Math.pow(t, 4);
            }),
            (e.outQuart = function (t) {
                return -(Math.pow(t - 1, 4) - 1);
            }),
            (e.inOutQuart = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 4);
                return -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
            }),
            (e.inQuint = function (t) {
                return Math.pow(t, 5);
            }),
            (e.outQuint = function (t) {
                return Math.pow(t - 1, 5) + 1;
            }),
            (e.inOutQuint = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 5);
                return 0.5 * (Math.pow(t - 2, 5) + 2);
            }),
            (e.inSine = function (t) {
                return 1 - Math.cos(t * (Math.PI / 2));
            }),
            (e.outSine = function (t) {
                return Math.sin(t * (Math.PI / 2));
            }),
            (e.inOutSine = function (t) {
                return -0.5 * (Math.cos(Math.PI * t) - 1);
            }),
            (e.inExpo = function (t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
            }),
            (e.outExpo = function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
            }),
            (e.inOutExpo = function (t) {
                if (0 === t) return 0;
                if (1 === t) return 1;
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
                return 0.5 * (2 - Math.pow(2, -10 * --t));
            }),
            (e.inCirc = function (t) {
                return -(Math.sqrt(1 - t * t) - 1);
            }),
            (e.outCirc = function (t) {
                return Math.sqrt(1 - Math.pow(t - 1, 2));
            }),
            (e.inOutCirc = function (t) {
                if ((t /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
                return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            }),
            (e.outBounce = function (t) {
                return t < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                        ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                        : t < 2.5 / 2.75
                            ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                            : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            (e.inBack = function (t) {
                return t * t * ((o + 1) * t - o);
            }),
            (e.outBack = function (t) {
                return (t -= 1) * t * ((o + 1) * t + o) + 1;
            }),
            (e.inOutBack = function (t) {
                var e = o;
                if ((t /= 0.5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * 0.5;
                return 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            }),
            (e.inElastic = function (t) {
                var e = o,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (1 === t) return 1;
                n || (n = 0.3);
                r < 1
                    ? ((r = 1), (e = n / 4))
                    : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                return (
                    -r *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin(((t - e) * (2 * Math.PI)) / n)
                );
            }),
            (e.outElastic = function (t) {
                var e = o,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (1 === t) return 1;
                n || (n = 0.3);
                r < 1
                    ? ((r = 1), (e = n / 4))
                    : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                return (
                    r * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / n) + 1
                );
            }),
            (e.inOutElastic = function (t) {
                var e = o,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (2 == (t /= 0.5)) return 1;
                n || (n = 0.3 * 1.5);
                r < 1
                    ? ((r = 1), (e = n / 4))
                    : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                if (t < 1)
                    return (
                        r *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin(((t - e) * (2 * Math.PI)) / n) *
                        -0.5
                    );
                return (
                    r *
                    Math.pow(2, -10 * (t -= 1)) *
                    Math.sin(((t - e) * (2 * Math.PI)) / n) *
                    0.5 +
                    1
                );
            }),
            (e.swingFromTo = function (t) {
                var e = o;
                return (t /= 0.5) < 1
                    ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                    : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            }),
            (e.swingFrom = function (t) {
                return t * t * ((o + 1) * t - o);
            }),
            (e.swingTo = function (t) {
                return (t -= 1) * t * ((o + 1) * t + o) + 1;
            }),
            (e.bounce = function (t) {
                return t < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                        ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                        : t < 2.5 / 2.75
                            ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                            : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            (e.bouncePast = function (t) {
                return t < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                        ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                        : t < 2.5 / 2.75
                            ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                            : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            }),
            (e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0);
        var i = r(n(117)),
            o = 1.70158,
            a = (0, i.default)(0.25, 0.1, 0.25, 1);
        e.ease = a;
        var u = (0, i.default)(0.42, 0, 1, 1);
        e.easeIn = u;
        var c = (0, i.default)(0, 0, 0.58, 1);
        e.easeOut = c;
        var s = (0, i.default)(0.42, 0, 0.58, 1);
        e.easeInOut = s;
    },
    function (t, e) {
        var n = 4,
            r = 0.001,
            i = 1e-7,
            o = 10,
            a = 11,
            u = 1 / (a - 1),
            c = "function" == typeof Float32Array;
        function s(t, e) {
            return 1 - 3 * e + 3 * t;
        }
        function f(t, e) {
            return 3 * e - 6 * t;
        }
        function l(t) {
            return 3 * t;
        }
        function d(t, e, n) {
            return ((s(e, n) * t + f(e, n)) * t + l(e)) * t;
        }
        function p(t, e, n) {
            return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e);
        }
        t.exports = function (t, e, s, f) {
            if (!(0 <= t && t <= 1 && 0 <= s && s <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var l = c ? new Float32Array(a) : new Array(a);
            if (t !== e || s !== f) for (var v = 0; v < a; ++v) l[v] = d(v * u, t, s);
            function h(e) {
                for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) c += u;
                var h = c + ((e - l[--f]) / (l[f + 1] - l[f])) * u,
                    E = p(h, t, s);
                return E >= r
                    ? (function (t, e, r, i) {
                        for (var o = 0; o < n; ++o) {
                            var a = p(e, r, i);
                            if (0 === a) return e;
                            e -= (d(e, r, i) - t) / a;
                        }
                        return e;
                    })(e, h, t, s)
                    : 0 === E
                        ? h
                        : (function (t, e, n, r, a) {
                            var u,
                                c,
                                s = 0;
                            do {
                                (u = d((c = e + (n - e) / 2), r, a) - t) > 0
                                    ? (n = c)
                                    : (e = c);
                            } while (Math.abs(u) > i && ++s < o);
                            return c;
                        })(e, c, c + u, t, s);
            }
            return function (n) {
                return t === e && s === f
                    ? n
                    : 0 === n
                        ? 0
                        : 1 === n
                            ? 1
                            : d(h(n), e, f);
            };
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(1)(n(119)),
            i = n(1),
            o = n(19);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.optimizeFloat = c),
            (e.createBezierEasing = function (t) {
                return u.default.apply(void 0, (0, r.default)(t));
            }),
            (e.applyEasing = function (t, e, n) {
                if (0 === e) return 0;
                if (1 === e) return 1;
                if (n) return c(e > 0 ? n(e) : e);
                return c(e > 0 && t && a[t] ? a[t](e) : e);
            });
        var a = o(n(116)),
            u = i(n(117));
        function c(t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                r = Math.pow(n, e),
                i = Number(Math.round(t * r) / r);
            return Math.abs(i) > 1e-4 ? i : 0;
        }
    },
    function (t, e, n) {
        var r = n(264),
            i = n(265),
            o = n(266);
        t.exports = function (t) {
            return r(t) || i(t) || o();
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(1)(n(22));
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.isPluginType = function (t) {
                return t === o.ActionTypeConsts.PLUGIN_LOTTIE;
            }),
            (e.clearPlugin =
                e.renderPlugin =
                e.createPluginInstance =
                e.getPluginDestination =
                e.getPluginDuration =
                e.getPluginOrigin =
                e.getPluginConfig =
                void 0);
        var i = n(268),
            o = n(4),
            a = n(48),
            u = (0, r.default)({}, o.ActionTypeConsts.PLUGIN_LOTTIE, {
                getConfig: i.getPluginConfig,
                getOrigin: i.getPluginOrigin,
                getDuration: i.getPluginDuration,
                getDestination: i.getPluginDestination,
                createInstance: i.createPluginInstance,
                render: i.renderPlugin,
                clear: i.clearPlugin,
            });
        var c = function (t) {
            return function (e) {
                if (!a.IS_BROWSER_ENV)
                    return function () {
                        return null;
                    };
                var n = u[e];
                if (!n) throw new Error("IX2 no plugin configured for: ".concat(e));
                var r = n[t];
                if (!r) throw new Error("IX2 invalid plugin method: ".concat(t));
                return r;
            };
        },
            s = c("getConfig");
        e.getPluginConfig = s;
        var f = c("getOrigin");
        e.getPluginOrigin = f;
        var l = c("getDuration");
        e.getPluginDuration = l;
        var d = c("getDestination");
        e.getPluginDestination = d;
        var p = c("createInstance");
        e.createPluginInstance = p;
        var v = c("render");
        e.renderPlugin = v;
        var h = c("clear");
        e.clearPlugin = h;
    },
    function (t, e, n) {
        var r = n(122),
            i = n(275)(r);
        t.exports = i;
    },
    function (t, e, n) {
        var r = n(273),
            i = n(36);
        t.exports = function (t, e) {
            return t && r(t, e, i);
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(1)(n(119)),
            i = n(19),
            o = n(1);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.observeRequests = function (t) {
                D({
                    store: t,
                    select: function (t) {
                        var e = t.ixRequest;
                        return e.preview;
                    },
                    onChange: et,
                }),
                    D({
                        store: t,
                        select: function (t) {
                            var e = t.ixRequest;
                            return e.playback;
                        },
                        onChange: rt,
                    }),
                    D({
                        store: t,
                        select: function (t) {
                            var e = t.ixRequest;
                            return e.stop;
                        },
                        onChange: it,
                    }),
                    D({
                        store: t,
                        select: function (t) {
                            var e = t.ixRequest;
                            return e.clear;
                        },
                        onChange: ot,
                    });
            }),
            (e.startEngine = at),
            (e.stopEngine = ut),
            (e.stopAllActionGroups = ht),
            (e.stopActionGroup = Et),
            (e.startActionGroup = gt);
        var a = o(n(31)),
            u = o(n(282)),
            c = o(n(95)),
            s = o(n(60)),
            f = o(n(283)),
            l = o(n(289)),
            d = o(n(301)),
            p = o(n(302)),
            v = o(n(303)),
            h = o(n(306)),
            E = n(4),
            g = n(14),
            m = n(65),
            y = i(n(309)),
            _ = o(n(310)),
            I = Object.keys(E.QuickEffectIds),
            b = function (t) {
                return I.includes(t);
            },
            T = E.IX2EngineConstants,
            w = T.COLON_DELIMITER,
            O = T.BOUNDARY_SELECTOR,
            A = T.HTML_ELEMENT,
            S = T.RENDER_GENERAL,
            x = T.W_MOD_IX,
            R = g.IX2VanillaUtils,
            N = R.getAffectedElements,
            C = R.getElementId,
            L = R.getDestinationValues,
            D = R.observeStore,
            P = R.getInstanceId,
            M = R.renderHTMLElement,
            j = R.clearAllStyles,
            F = R.getMaxDurationItemIndex,
            k = R.getComputedStyle,
            G = R.getInstanceOrigin,
            X = R.reduceListToGroup,
            V = R.shouldNamespaceEventParameter,
            U = R.getNamespacedParameterId,
            W = R.shouldAllowMediaQuery,
            B = R.cleanupHTMLElement,
            H = R.stringifyTarget,
            z = R.mediaQueriesEqual,
            Y = R.shallowEqual,
            K = g.IX2VanillaPlugins,
            Q = K.isPluginType,
            q = K.createPluginInstance,
            $ = K.getPluginDuration,
            Z = navigator.userAgent,
            J = Z.match(/iPad/i) || Z.match(/iPhone/),
            tt = 12;
        function et(t, e) {
            var n = t.rawData,
                r = function () {
                    at({ store: e, rawData: n, allowEvents: !0 }), nt();
                };
            t.defer ? setTimeout(r, 0) : r();
        }
        function nt() {
            document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
        }
        function rt(t, e) {
            var n = t.actionTypeId,
                r = t.actionListId,
                i = t.actionItemId,
                o = t.eventId,
                a = t.allowEvents,
                u = t.immediate,
                c = t.testManual,
                s = t.verbose,
                f = void 0 === s || s,
                l = t.rawData;
            if (r && i && l && u) {
                var d = l.actionLists[r];
                d && (l = X({ actionList: d, actionItemId: i, rawData: l }));
            }
            if (
                (at({ store: e, rawData: l, allowEvents: a, testManual: c }),
                    (r && n === E.ActionTypeConsts.GENERAL_START_ACTION) || b(n))
            ) {
                Et({ store: e, actionListId: r }),
                    vt({ store: e, actionListId: r, eventId: o });
                var p = gt({
                    store: e,
                    eventId: o,
                    actionListId: r,
                    immediate: u,
                    verbose: f,
                });
                f &&
                    p &&
                    e.dispatch(
                        (0, m.actionListPlaybackChanged)({ actionListId: r, isPlaying: !u })
                    );
            }
        }
        function it(t, e) {
            var n = t.actionListId;
            n ? Et({ store: e, actionListId: n }) : ht({ store: e }), ut(e);
        }
        function ot(t, e) {
            ut(e), j({ store: e, elementApi: y });
        }
        function at(t) {
            var e,
                n = t.store,
                i = t.rawData,
                o = t.allowEvents,
                a = t.testManual,
                u = n.getState().ixSession;
            i && n.dispatch((0, m.rawDataImported)(i)),
                u.active ||
                (n.dispatch(
                    (0, m.sessionInitialized)({
                        hasBoundaryNodes: Boolean(document.querySelector(O)),
                        reducedMotion:
                            document.body.hasAttribute("data-wf-ix-vacation") &&
                            window.matchMedia("(prefers-reduced-motion)").matches,
                    })
                ),
                    o &&
                    ((function (t) {
                        var e = t.getState().ixData.eventTypeMap;
                        ft(t),
                            (0, v.default)(e, function (e, n) {
                                var i = _.default[n];
                                i
                                    ? (function (t) {
                                        var e = t.logic,
                                            n = t.store,
                                            i = t.events;
                                        !(function (t) {
                                            if (J) {
                                                var e = {},
                                                    n = "";
                                                for (var r in t) {
                                                    var i = t[r],
                                                        o = i.eventTypeId,
                                                        a = i.target,
                                                        u = y.getQuerySelector(a);
                                                    e[u] ||
                                                        (o !== E.EventTypeConsts.MOUSE_CLICK &&
                                                            o !== E.EventTypeConsts.MOUSE_SECOND_CLICK) ||
                                                        ((e[u] = !0),
                                                            (n +=
                                                                u +
                                                                "{cursor: pointer;touch-action: manipulation;}"));
                                                }
                                                if (n) {
                                                    var c = document.createElement("style");
                                                    (c.textContent = n), document.body.appendChild(c);
                                                }
                                            }
                                        })(i);
                                        var o = e.types,
                                            a = e.handler,
                                            u = n.getState().ixData,
                                            l = u.actionLists,
                                            d = lt(i, pt);
                                        if ((0, f.default)(d)) {
                                            (0, v.default)(d, function (t, e) {
                                                var o = i[e],
                                                    a = o.action,
                                                    f = o.id,
                                                    d = o.mediaQueries,
                                                    p = void 0 === d ? u.mediaQueryKeys : d,
                                                    v = a.config.actionListId;
                                                if (
                                                    (z(p, u.mediaQueryKeys) ||
                                                        n.dispatch((0, m.mediaQueriesDefined)()),
                                                        a.actionTypeId ===
                                                        E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION)
                                                ) {
                                                    var h = Array.isArray(o.config)
                                                        ? o.config
                                                        : [o.config];
                                                    h.forEach(function (e) {
                                                        var i = e.continuousParameterGroupId,
                                                            o = (0, s.default)(
                                                                l,
                                                                "".concat(v, ".continuousParameterGroups"),
                                                                []
                                                            ),
                                                            a = (0, c.default)(o, function (t) {
                                                                var e = t.id;
                                                                return e === i;
                                                            }),
                                                            u = (e.smoothing || 0) / 100,
                                                            d = (e.restingState || 0) / 100;
                                                        a &&
                                                            t.forEach(function (t, i) {
                                                                var o = f + w + i;
                                                                !(function (t) {
                                                                    var e = t.store,
                                                                        n = t.eventStateKey,
                                                                        i = t.eventTarget,
                                                                        o = t.eventId,
                                                                        a = t.eventConfig,
                                                                        u = t.actionListId,
                                                                        c = t.parameterGroup,
                                                                        f = t.smoothing,
                                                                        l = t.restingValue,
                                                                        d = e.getState(),
                                                                        p = d.ixData,
                                                                        v = d.ixSession,
                                                                        h = p.events[o],
                                                                        E = h.eventTypeId,
                                                                        g = {},
                                                                        m = {},
                                                                        _ = [],
                                                                        I = c.continuousActionGroups,
                                                                        b = c.id;
                                                                    V(E, a) && (b = U(n, b));
                                                                    var T =
                                                                        v.hasBoundaryNodes && i
                                                                            ? y.getClosestElement(i, O)
                                                                            : null;
                                                                    I.forEach(function (t) {
                                                                        var e = t.keyframe,
                                                                            n = t.actionItems;
                                                                        n.forEach(function (t) {
                                                                            var n = t.actionTypeId,
                                                                                o = t.config.target;
                                                                            if (o) {
                                                                                var a = o.boundaryMode ? T : null,
                                                                                    u = H(o) + w + n;
                                                                                if (
                                                                                    ((m[u] = (function () {
                                                                                        var t,
                                                                                            e =
                                                                                                arguments.length > 0 &&
                                                                                                    void 0 !== arguments[0]
                                                                                                    ? arguments[0]
                                                                                                    : [],
                                                                                            n =
                                                                                                arguments.length > 1
                                                                                                    ? arguments[1]
                                                                                                    : void 0,
                                                                                            i =
                                                                                                arguments.length > 2
                                                                                                    ? arguments[2]
                                                                                                    : void 0,
                                                                                            o = (0, r.default)(e);
                                                                                        return (
                                                                                            o.some(function (e, r) {
                                                                                                return (
                                                                                                    e.keyframe === n &&
                                                                                                    ((t = r), !0)
                                                                                                );
                                                                                            }),
                                                                                            null == t &&
                                                                                            ((t = o.length),
                                                                                                o.push({
                                                                                                    keyframe: n,
                                                                                                    actionItems: [],
                                                                                                })),
                                                                                            o[t].actionItems.push(i),
                                                                                            o
                                                                                        );
                                                                                    })(m[u], e, t)),
                                                                                        !g[u])
                                                                                ) {
                                                                                    g[u] = !0;
                                                                                    var c = t.config;
                                                                                    N({
                                                                                        config: c,
                                                                                        event: h,
                                                                                        eventTarget: i,
                                                                                        elementRoot: a,
                                                                                        elementApi: y,
                                                                                    }).forEach(function (t) {
                                                                                        _.push({ element: t, key: u });
                                                                                    });
                                                                                }
                                                                            }
                                                                        });
                                                                    }),
                                                                        _.forEach(function (t) {
                                                                            var n = t.element,
                                                                                r = t.key,
                                                                                i = m[r],
                                                                                a = (0, s.default)(
                                                                                    i,
                                                                                    "[0].actionItems[0]",
                                                                                    {}
                                                                                ),
                                                                                c = a.actionTypeId,
                                                                                d = Q(c) ? q(c)(n, a) : null,
                                                                                p = L(
                                                                                    {
                                                                                        element: n,
                                                                                        actionItem: a,
                                                                                        elementApi: y,
                                                                                    },
                                                                                    d
                                                                                );
                                                                            mt({
                                                                                store: e,
                                                                                element: n,
                                                                                eventId: o,
                                                                                actionListId: u,
                                                                                actionItem: a,
                                                                                destination: p,
                                                                                continuous: !0,
                                                                                parameterId: b,
                                                                                actionGroups: i,
                                                                                smoothing: f,
                                                                                restingValue: l,
                                                                                pluginInstance: d,
                                                                            });
                                                                        });
                                                                })({
                                                                    store: n,
                                                                    eventStateKey: o,
                                                                    eventTarget: t,
                                                                    eventId: f,
                                                                    eventConfig: e,
                                                                    actionListId: v,
                                                                    parameterGroup: a,
                                                                    smoothing: u,
                                                                    restingValue: d,
                                                                });
                                                            });
                                                    });
                                                }
                                                (a.actionTypeId ===
                                                    E.ActionTypeConsts.GENERAL_START_ACTION ||
                                                    b(a.actionTypeId)) &&
                                                    vt({ store: n, actionListId: v, eventId: f });
                                            });
                                            var p = function (t) {
                                                var e = n.getState(),
                                                    r = e.ixSession;
                                                dt(d, function (e, o, c) {
                                                    var s = i[o],
                                                        f = r.eventState[c],
                                                        l = s.action,
                                                        d = s.mediaQueries,
                                                        p = void 0 === d ? u.mediaQueryKeys : d;
                                                    if (W(p, r.mediaQueryKey)) {
                                                        var v = function () {
                                                            var r =
                                                                arguments.length > 0 &&
                                                                    void 0 !== arguments[0]
                                                                    ? arguments[0]
                                                                    : {},
                                                                i = a(
                                                                    {
                                                                        store: n,
                                                                        element: e,
                                                                        event: s,
                                                                        eventConfig: r,
                                                                        nativeEvent: t,
                                                                        eventStateKey: c,
                                                                    },
                                                                    f
                                                                );
                                                            Y(i, f) ||
                                                                n.dispatch(
                                                                    (0, m.eventStateChanged)(c, i)
                                                                );
                                                        };
                                                        if (
                                                            l.actionTypeId ===
                                                            E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                                                        ) {
                                                            var h = Array.isArray(s.config)
                                                                ? s.config
                                                                : [s.config];
                                                            h.forEach(v);
                                                        } else v();
                                                    }
                                                });
                                            },
                                                g = (0, h.default)(p, tt),
                                                _ = function (t) {
                                                    var e = t.target,
                                                        r = void 0 === e ? document : e,
                                                        i = t.types,
                                                        o = t.throttle;
                                                    i.split(" ")
                                                        .filter(Boolean)
                                                        .forEach(function (t) {
                                                            var e = o ? g : p;
                                                            r.addEventListener(t, e),
                                                                n.dispatch(
                                                                    (0, m.eventListenerAdded)(r, [t, e])
                                                                );
                                                        });
                                                };
                                            Array.isArray(o)
                                                ? o.forEach(_)
                                                : "string" == typeof o && _(e);
                                        }
                                    })({ logic: i, store: t, events: e })
                                    : console.warn("IX2 event type not configured: ".concat(n));
                            }),
                            t.getState().ixSession.eventListeners.length &&
                            (function (t) {
                                var e = function () {
                                    ft(t);
                                };
                                st.forEach(function (n) {
                                    window.addEventListener(n, e),
                                        t.dispatch((0, m.eventListenerAdded)(window, [n, e]));
                                }),
                                    e();
                            })(t);
                    })(n),
                        -1 === (e = document.documentElement).className.indexOf(x) &&
                        (e.className += " ".concat(x)),
                        n.getState().ixSession.hasDefinedMediaQueries &&
                        (function (t) {
                            D({
                                store: t,
                                select: function (t) {
                                    return t.ixSession.mediaQueryKey;
                                },
                                onChange: function () {
                                    ut(t),
                                        j({ store: t, elementApi: y }),
                                        at({ store: t, allowEvents: !0 }),
                                        nt();
                                },
                            });
                        })(n)),
                    n.dispatch((0, m.sessionStarted)()),
                    (function (t, e) {
                        !(function n(r) {
                            var i = t.getState(),
                                o = i.ixSession,
                                a = i.ixParameters;
                            o.active &&
                                (t.dispatch((0, m.animationFrameChanged)(r, a)),
                                    e
                                        ? (function (t, e) {
                                            var n = D({
                                                store: t,
                                                select: function (t) {
                                                    return t.ixSession.tick;
                                                },
                                                onChange: function (t) {
                                                    e(t), n();
                                                },
                                            });
                                        })(t, n)
                                        : requestAnimationFrame(n));
                        })(window.performance.now());
                    })(n, a));
        }
        function ut(t) {
            var e = t.getState().ixSession;
            e.active &&
                (e.eventListeners.forEach(ct), t.dispatch((0, m.sessionStopped)()));
        }
        function ct(t) {
            var e = t.target,
                n = t.listenerParams;
            e.removeEventListener.apply(e, n);
        }
        var st = ["resize", "orientationchange"];
        function ft(t) {
            var e = t.getState(),
                n = e.ixSession,
                r = e.ixData,
                i = window.innerWidth;
            if (i !== n.viewportWidth) {
                var o = r.mediaQueries;
                t.dispatch((0, m.viewportWidthChanged)({ width: i, mediaQueries: o }));
            }
        }
        var lt = function (t, e) {
            return (0, l.default)((0, p.default)(t, e), d.default);
        },
            dt = function (t, e) {
                (0, v.default)(t, function (t, n) {
                    t.forEach(function (t, r) {
                        e(t, n, n + w + r);
                    });
                });
            },
            pt = function (t) {
                var e = { target: t.target, targets: t.targets };
                return N({ config: e, elementApi: y });
            };
        function vt(t) {
            var e = t.store,
                n = t.actionListId,
                r = t.eventId,
                i = e.getState(),
                o = i.ixData,
                a = i.ixSession,
                u = o.actionLists,
                c = o.events[r],
                f = u[n];
            if (f && f.useFirstGroupAsInitialState) {
                var l = (0, s.default)(f, "actionItemGroups[0].actionItems", []),
                    d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
                if (!W(d, a.mediaQueryKey)) return;
                l.forEach(function (t) {
                    var i,
                        o = t.config,
                        a = t.actionTypeId,
                        u =
                            !0 ===
                                (null == o
                                    ? void 0
                                    : null === (i = o.target) || void 0 === i
                                        ? void 0
                                        : i.useEventTarget)
                                ? { target: c.target, targets: c.targets }
                                : o,
                        s = N({ config: u, event: c, elementApi: y }),
                        f = Q(a);
                    s.forEach(function (i) {
                        var o = f ? q(a)(i, t) : null;
                        mt({
                            destination: L({ element: i, actionItem: t, elementApi: y }, o),
                            immediate: !0,
                            store: e,
                            element: i,
                            eventId: r,
                            actionItem: t,
                            actionListId: n,
                            pluginInstance: o,
                        });
                    });
                });
            }
        }
        function ht(t) {
            var e = t.store,
                n = e.getState().ixInstances;
            (0, v.default)(n, function (t) {
                if (!t.continuous) {
                    var n = t.actionListId,
                        r = t.verbose;
                    yt(t, e),
                        r &&
                        e.dispatch(
                            (0, m.actionListPlaybackChanged)({
                                actionListId: n,
                                isPlaying: !1,
                            })
                        );
                }
            });
        }
        function Et(t) {
            var e = t.store,
                n = t.eventId,
                r = t.eventTarget,
                i = t.eventStateKey,
                o = t.actionListId,
                a = e.getState(),
                u = a.ixInstances,
                c =
                    a.ixSession.hasBoundaryNodes && r ? y.getClosestElement(r, O) : null;
            (0, v.default)(u, function (t) {
                var r = (0, s.default)(t, "actionItem.config.target.boundaryMode"),
                    a = !i || t.eventStateKey === i;
                if (t.actionListId === o && t.eventId === n && a) {
                    if (c && r && !y.elementContains(c, t.element)) return;
                    yt(t, e),
                        t.verbose &&
                        e.dispatch(
                            (0, m.actionListPlaybackChanged)({
                                actionListId: o,
                                isPlaying: !1,
                            })
                        );
                }
            });
        }
        function gt(t) {
            var e,
                n = t.store,
                r = t.eventId,
                i = t.eventTarget,
                o = t.eventStateKey,
                a = t.actionListId,
                u = t.groupIndex,
                c = void 0 === u ? 0 : u,
                f = t.immediate,
                l = t.verbose,
                d = n.getState(),
                p = d.ixData,
                v = d.ixSession,
                h = p.events[r] || {},
                E = h.mediaQueries,
                g = void 0 === E ? p.mediaQueryKeys : E,
                m = (0, s.default)(p, "actionLists.".concat(a), {}),
                _ = m.actionItemGroups,
                I = m.useFirstGroupAsInitialState;
            if (!_ || !_.length) return !1;
            c >= _.length && (0, s.default)(h, "config.loop") && (c = 0),
                0 === c && I && c++;
            var T =
                (0 === c || (1 === c && I)) &&
                    b(null === (e = h.action) || void 0 === e ? void 0 : e.actionTypeId)
                    ? h.config.delay
                    : void 0,
                w = (0, s.default)(_, [c, "actionItems"], []);
            if (!w.length) return !1;
            if (!W(g, v.mediaQueryKey)) return !1;
            var A = v.hasBoundaryNodes && i ? y.getClosestElement(i, O) : null,
                S = F(w),
                x = !1;
            return (
                w.forEach(function (t, e) {
                    var u = t.config,
                        s = t.actionTypeId,
                        d = Q(s),
                        p = u.target;
                    if (p) {
                        var v = p.boundaryMode ? A : null;
                        N({
                            config: u,
                            event: h,
                            eventTarget: i,
                            elementRoot: v,
                            elementApi: y,
                        }).forEach(function (u, p) {
                            var v = d ? q(s)(u, t) : null,
                                h = d ? $(s)(u, t) : null;
                            x = !0;
                            var E = S === e && 0 === p,
                                g = k({ element: u, actionItem: t }),
                                m = L({ element: u, actionItem: t, elementApi: y }, v);
                            mt({
                                store: n,
                                element: u,
                                actionItem: t,
                                eventId: r,
                                eventTarget: i,
                                eventStateKey: o,
                                actionListId: a,
                                groupIndex: c,
                                isCarrier: E,
                                computedStyle: g,
                                destination: m,
                                immediate: f,
                                verbose: l,
                                pluginInstance: v,
                                pluginDuration: h,
                                instanceDelay: T,
                            });
                        });
                    }
                }),
                x
            );
        }
        function mt(t) {
            var e,
                n,
                r = t.store,
                i = t.computedStyle,
                o = (0, u.default)(t, ["store", "computedStyle"]),
                c = o.element,
                s = o.actionItem,
                f = o.immediate,
                l = o.pluginInstance,
                d = o.continuous,
                p = o.restingValue,
                v = o.eventId,
                h = !d,
                g = P(),
                _ = r.getState(),
                I = _.ixElements,
                b = _.ixSession,
                T = _.ixData,
                w = C(I, c),
                O = (I[w] || {}).refState,
                A = y.getRefType(c),
                S = b.reducedMotion && E.ReducedMotionTypes[s.actionTypeId];
            if (S && d)
                switch (
                null === (e = T.events[v]) || void 0 === e ? void 0 : e.eventTypeId
                ) {
                    case E.EventTypeConsts.MOUSE_MOVE:
                    case E.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                        n = p;
                        break;
                    default:
                        n = 0.5;
                }
            var x = G(c, O, i, s, y, l);
            r.dispatch(
                (0, m.instanceAdded)(
                    (0, a.default)(
                        {
                            instanceId: g,
                            elementId: w,
                            origin: x,
                            refType: A,
                            skipMotion: S,
                            skipToValue: n,
                        },
                        o
                    )
                )
            ),
                _t(document.body, "ix2-animation-started", g),
                f
                    ? (function (t, e) {
                        var n = t.getState().ixParameters;
                        t.dispatch((0, m.instanceStarted)(e, 0)),
                            t.dispatch((0, m.animationFrameChanged)(performance.now(), n)),
                            It(t.getState().ixInstances[e], t);
                    })(r, g)
                    : (D({
                        store: r,
                        select: function (t) {
                            return t.ixInstances[g];
                        },
                        onChange: It,
                    }),
                        h && r.dispatch((0, m.instanceStarted)(g, b.tick)));
        }
        function yt(t, e) {
            _t(document.body, "ix2-animation-stopping", {
                instanceId: t.id,
                state: e.getState(),
            });
            var n = t.elementId,
                r = t.actionItem,
                i = e.getState().ixElements[n] || {},
                o = i.ref;
            i.refType === A && B(o, r, y), e.dispatch((0, m.instanceRemoved)(t.id));
        }
        function _t(t, e, n) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r);
        }
        function It(t, e) {
            var n = t.active,
                r = t.continuous,
                i = t.complete,
                o = t.elementId,
                a = t.actionItem,
                u = t.actionTypeId,
                c = t.renderType,
                s = t.current,
                f = t.groupIndex,
                l = t.eventId,
                d = t.eventTarget,
                p = t.eventStateKey,
                v = t.actionListId,
                h = t.isCarrier,
                E = t.styleProp,
                g = t.verbose,
                _ = t.pluginInstance,
                I = e.getState(),
                b = I.ixData,
                T = I.ixSession,
                w = (b.events[l] || {}).mediaQueries,
                O = void 0 === w ? b.mediaQueryKeys : w;
            if (W(O, T.mediaQueryKey) && (r || n || i)) {
                if (s || (c === S && i)) {
                    e.dispatch((0, m.elementStateChanged)(o, u, s, a));
                    var x = e.getState().ixElements[o] || {},
                        R = x.ref,
                        N = x.refType,
                        C = x.refState,
                        L = C && C[u];
                    switch (N) {
                        case A:
                            M(R, C, L, l, a, E, y, c, _);
                    }
                }
                if (i) {
                    if (h) {
                        var D = gt({
                            store: e,
                            eventId: l,
                            eventTarget: d,
                            eventStateKey: p,
                            actionListId: v,
                            groupIndex: f + 1,
                            verbose: g,
                        });
                        g &&
                            !D &&
                            e.dispatch(
                                (0, m.actionListPlaybackChanged)({
                                    actionListId: v,
                                    isPlaying: !1,
                                })
                            );
                    }
                    yt(t, e);
                }
            }
        }
    },
    function (t, e, n) {
        var r = n(125);
        t.exports = function (t, e, n) {
            "__proto__" == e && r
                ? r(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 })
                : (t[e] = n);
        };
    },
    function (t, e, n) {
        var r = n(11),
            i = (function () {
                try {
                    var t = r(Object, "defineProperty");
                    return t({}, "", {}), t;
                } catch (t) { }
            })();
        t.exports = i;
    },
    function (t, e, n) {
        var r = n(8),
            i = Object.create,
            o = (function () {
                function t() { }
                return function (e) {
                    if (!r(e)) return {};
                    if (i) return i(e);
                    t.prototype = e;
                    var n = new t();
                    return (t.prototype = void 0), n;
                };
            })();
        t.exports = o;
    },
    function (t, e, n) {
        var r = n(323),
            i = n(324),
            o = r
                ? function (t) {
                    return r.get(t);
                }
                : i;
        t.exports = o;
    },
    function (t, e, n) {
        var r = n(325),
            i = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            for (
                var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0;
                o--;

            ) {
                var a = n[o],
                    u = a.func;
                if (null == u || u == t) return a.name;
            }
            return e;
        };
    },
    function (t, e, n) {
        n(130),
            n(132),
            n(133),
            n(134),
            n(135),
            n(18),
            n(137),
            n(332),
            n(333),
            n(334),
            n(335),
            n(336),
            n(341),
            n(342),
            (t.exports = n(343));
    },
    function (t, e, n) {
        "use strict";
        var r = n(3);
        r.define(
            "brand",
            (t.exports = function (t) {
                var e,
                    n = {},
                    i = document,
                    o = t("html"),
                    a = t("body"),
                    u = ".w-digipants-badge",
                    c = window.location,
                    s = /PhantomJS/i.test(navigator.userAgent),
                    f =
                        "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
                function l() {
                    var n =
                        i.fullScreen ||
                        i.mozFullScreen ||
                        i.webkitIsFullScreen ||
                        i.msFullscreenElement ||
                        Boolean(i.webkitFullscreenElement);
                    t(e).attr("style", n ? "display: none !important;" : "");
                }
                function d() {
                    var t = a.children(u),
                        n = t.length && t.get(0) === e,
                        i = r.env("editor");
                    n ? i && t.remove() : (t.length && t.remove(), i || a.append(e));
                }
                return (
                    (n.ready = function () {
                        var n,
                            r,
                            a,
                            u = o.attr("data-wf-status"),
                            p = o.attr("data-wf-domain") || "";
                        /\.digipants\.io$/i.test(p) && c.hostname !== p && (u = !0),
                            u &&
                            !s &&
                            ((e =
                                e ||
                                ((n = t('<a class="w-digipants-badge"></a>').attr(
                                    "href",
                                    "https://digipants.com?utm_campaign=brandjs"
                                )),
                                    (r = t("<img>")
                                        .attr(
                                            "src",
                                            "https://d3e54v103j8qbb.cloudfront.net/img/digipants-badge-icon.f67cd735e3.svg"
                                        )
                                        .attr("alt", "")
                                        .css({ marginRight: "8px", width: "16px" })),
                                    (a = t("<img>")
                                        .attr(
                                            "src",
                                            "https://d1otoma47x30pg.cloudfront.net/img/digipants-badge-text.6faa6a38cd.svg"
                                        )
                                        .attr("alt", "Made in digipants")),
                                    n.append(r, a),
                                    n[0])),
                                d(),
                                setTimeout(d, 500),
                                t(i).off(f, l).on(f, l));
                    }),
                    n
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = window.$,
            i = n(69) && r.tram;
        /*!
         * digipants._ (aka) Underscore.js 1.6.0 (custom build)
         * _.each
         * _.map
         * _.find
         * _.filter
         * _.any
         * _.contains
         * _.delay
         * _.defer
         * _.throttle (digipants)
         * _.debounce
         * _.keys
         * _.has
         * _.now
         *
         * http://underscorejs.org
         * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         * Underscore may be freely distributed under the MIT license.
         * @license MIT
         */
        t.exports = (function () {
            var t = { VERSION: "1.6.0-digipants" },
                e = {},
                n = Array.prototype,
                r = Object.prototype,
                o = Function.prototype,
                a = (n.push, n.slice),
                u = (n.concat, r.toString, r.hasOwnProperty),
                c = n.forEach,
                s = n.map,
                f = (n.reduce, n.reduceRight, n.filter),
                l = (n.every, n.some),
                d = n.indexOf,
                p = (n.lastIndexOf, Array.isArray, Object.keys),
                v =
                    (o.bind,
                        (t.each = t.forEach =
                            function (n, r, i) {
                                if (null == n) return n;
                                if (c && n.forEach === c) n.forEach(r, i);
                                else if (n.length === +n.length) {
                                    for (var o = 0, a = n.length; o < a; o++)
                                        if (r.call(i, n[o], o, n) === e) return;
                                } else {
                                    var u = t.keys(n);
                                    for (o = 0, a = u.length; o < a; o++)
                                        if (r.call(i, n[u[o]], u[o], n) === e) return;
                                }
                                return n;
                            }));
            (t.map = t.collect =
                function (t, e, n) {
                    var r = [];
                    return null == t
                        ? r
                        : s && t.map === s
                            ? t.map(e, n)
                            : (v(t, function (t, i, o) {
                                r.push(e.call(n, t, i, o));
                            }),
                                r);
                }),
                (t.find = t.detect =
                    function (t, e, n) {
                        var r;
                        return (
                            h(t, function (t, i, o) {
                                if (e.call(n, t, i, o)) return (r = t), !0;
                            }),
                            r
                        );
                    }),
                (t.filter = t.select =
                    function (t, e, n) {
                        var r = [];
                        return null == t
                            ? r
                            : f && t.filter === f
                                ? t.filter(e, n)
                                : (v(t, function (t, i, o) {
                                    e.call(n, t, i, o) && r.push(t);
                                }),
                                    r);
                    });
            var h =
                (t.some =
                    t.any =
                    function (n, r, i) {
                        r || (r = t.identity);
                        var o = !1;
                        return null == n
                            ? o
                            : l && n.some === l
                                ? n.some(r, i)
                                : (v(n, function (t, n, a) {
                                    if (o || (o = r.call(i, t, n, a))) return e;
                                }),
                                    !!o);
                    });
            (t.contains = t.include =
                function (t, e) {
                    return (
                        null != t &&
                        (d && t.indexOf === d
                            ? -1 != t.indexOf(e)
                            : h(t, function (t) {
                                return t === e;
                            }))
                    );
                }),
                (t.delay = function (t, e) {
                    var n = a.call(arguments, 2);
                    return setTimeout(function () {
                        return t.apply(null, n);
                    }, e);
                }),
                (t.defer = function (e) {
                    return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)));
                }),
                (t.throttle = function (t) {
                    var e, n, r;
                    return function () {
                        e ||
                            ((e = !0),
                                (n = arguments),
                                (r = this),
                                i.frame(function () {
                                    (e = !1), t.apply(r, n);
                                }));
                    };
                }),
                (t.debounce = function (e, n, r) {
                    var i,
                        o,
                        a,
                        u,
                        c,
                        s = function s() {
                            var f = t.now() - u;
                            f < n
                                ? (i = setTimeout(s, n - f))
                                : ((i = null), r || ((c = e.apply(a, o)), (a = o = null)));
                        };
                    return function () {
                        (a = this), (o = arguments), (u = t.now());
                        var f = r && !i;
                        return (
                            i || (i = setTimeout(s, n)),
                            f && ((c = e.apply(a, o)), (a = o = null)),
                            c
                        );
                    };
                }),
                (t.defaults = function (e) {
                    if (!t.isObject(e)) return e;
                    for (var n = 1, r = arguments.length; n < r; n++) {
                        var i = arguments[n];
                        for (var o in i) void 0 === e[o] && (e[o] = i[o]);
                    }
                    return e;
                }),
                (t.keys = function (e) {
                    if (!t.isObject(e)) return [];
                    if (p) return p(e);
                    var n = [];
                    for (var r in e) t.has(e, r) && n.push(r);
                    return n;
                }),
                (t.has = function (t, e) {
                    return u.call(t, e);
                }),
                (t.isObject = function (t) {
                    return t === Object(t);
                }),
                (t.now =
                    Date.now ||
                    function () {
                        return new Date().getTime();
                    }),
                (t.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g,
                });
            var E = /(.)^/,
                g = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029",
                },
                m = /\\|'|\r|\n|\u2028|\u2029/g,
                y = function (t) {
                    return "\\" + g[t];
                };
            return (
                (t.template = function (e, n, r) {
                    !n && r && (n = r), (n = t.defaults({}, n, t.templateSettings));
                    var i = RegExp(
                        [
                            (n.escape || E).source,
                            (n.interpolate || E).source,
                            (n.evaluate || E).source,
                        ].join("|") + "|$",
                        "g"
                    ),
                        o = 0,
                        a = "__p+='";
                    e.replace(i, function (t, n, r, i, u) {
                        return (
                            (a += e.slice(o, u).replace(m, y)),
                            (o = u + t.length),
                            n
                                ? (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                                : r
                                    ? (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                                    : i && (a += "';\n" + i + "\n__p+='"),
                            t
                        );
                    }),
                        (a += "';\n"),
                        n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
                        (a =
                            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
                            a +
                            "return __p;\n");
                    try {
                        var u = new Function(n.variable || "obj", "_", a);
                    } catch (t) {
                        throw ((t.source = a), t);
                    }
                    var c = function (e) {
                        return u.call(this, e, t);
                    },
                        s = n.variable || "obj";
                    return (c.source = "function(" + s + "){\n" + a + "}"), c;
                }),
                t
            );
        })();
    },
    function (t, e, n) {
        "use strict";
        var r = n(3);
        r.define(
            "edit",
            (t.exports = function (t, e, n) {
                if (
                    ((n = n || {}),
                        (r.env("test") || r.env("frame")) &&
                        !n.fixture &&
                        !(function () {
                            try {
                                return window.top.__Cypress__;
                            } catch (t) {
                                return !1;
                            }
                        })())
                )
                    return { exit: 1 };
                var i,
                    o = t(window),
                    a = t(document.documentElement),
                    u = document.location,
                    c = "hashchange",
                    s =
                        n.load ||
                        function () {
                            (i = !0),
                                (window.digipantsEditor = !0),
                                o.off(c, l),
                                (function (t) {
                                    var e = window.document.createElement("iframe");
                                    (e.src =
                                        "https://digipants.com/site/third-party-cookie-check.html"),
                                        (e.style.display = "none"),
                                        (e.sandbox = "allow-scripts allow-same-origin");
                                    var n = function n(r) {
                                        "WF_third_party_cookies_unsupported" === r.data
                                            ? (g(e, n), t(!1))
                                            : "WF_third_party_cookies_supported" === r.data &&
                                            (g(e, n), t(!0));
                                    };
                                    (e.onerror = function () {
                                        g(e, n), t(!1);
                                    }),
                                        window.addEventListener("message", n, !1),
                                        window.document.body.appendChild(e);
                                })(function (e) {
                                    t.ajax({
                                        url: E("https://editor-api.digipants.com/api/editor/view"),
                                        data: { siteId: a.attr("data-wf-site") },
                                        xhrFields: { withCredentials: !0 },
                                        dataType: "json",
                                        crossDomain: !0,
                                        success: d(e),
                                    });
                                });
                        },
                    f = !1;
                try {
                    f =
                        localStorage &&
                        localStorage.getItem &&
                        localStorage.getItem("digipantsEditor");
                } catch (t) { }
                function l() {
                    i || (/\?edit/.test(u.hash) && s());
                }
                function d(t) {
                    return function (e) {
                        e
                            ? ((e.thirdPartyCookiesSupported = t),
                                p(h(e.bugReporterScriptPath), function () {
                                    p(h(e.scriptPath), function () {
                                        window.digipantsEditor(e);
                                    });
                                }))
                            : console.error("Could not load editor data");
                    };
                }
                function p(e, n) {
                    t.ajax({ type: "GET", url: e, dataType: "script", cache: !0 }).then(
                        n,
                        v
                    );
                }
                function v(t, e, n) {
                    throw (console.error("Could not load editor script: " + e), n);
                }
                function h(t) {
                    return t.indexOf("//") >= 0
                        ? t
                        : E("https://editor-api.digipants.com" + t);
                }
                function E(t) {
                    return t.replace(/([^:])\/\//g, "$1/");
                }
                function g(t, e) {
                    window.removeEventListener("message", e, !1), t.remove();
                }
                return (
                    f
                        ? s()
                        : u.search
                            ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) ||
                                /\?edit$/.test(u.href)) &&
                            s()
                            : o.on(c, l).triggerHandler(c),
                    {}
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        n(3).define(
            "focus-visible",
            (t.exports = function () {
                function t(t) {
                    var e = !0,
                        n = !1,
                        r = null,
                        i = {
                            text: !0,
                            search: !0,
                            url: !0,
                            tel: !0,
                            email: !0,
                            password: !0,
                            number: !0,
                            date: !0,
                            month: !0,
                            week: !0,
                            time: !0,
                            datetime: !0,
                            "datetime-local": !0,
                        };
                    function o(t) {
                        return !!(
                            t &&
                            t !== document &&
                            "HTML" !== t.nodeName &&
                            "BODY" !== t.nodeName &&
                            "classList" in t &&
                            "contains" in t.classList
                        );
                    }
                    function a(t) {
                        t.getAttribute("data-wf-focus-visible") ||
                            t.setAttribute("data-wf-focus-visible", "true");
                    }
                    function u() {
                        e = !1;
                    }
                    function c() {
                        document.addEventListener("mousemove", s),
                            document.addEventListener("mousedown", s),
                            document.addEventListener("mouseup", s),
                            document.addEventListener("pointermove", s),
                            document.addEventListener("pointerdown", s),
                            document.addEventListener("pointerup", s),
                            document.addEventListener("touchmove", s),
                            document.addEventListener("touchstart", s),
                            document.addEventListener("touchend", s);
                    }
                    function s(t) {
                        (t.target.nodeName && "html" === t.target.nodeName.toLowerCase()) ||
                            ((e = !1),
                                document.removeEventListener("mousemove", s),
                                document.removeEventListener("mousedown", s),
                                document.removeEventListener("mouseup", s),
                                document.removeEventListener("pointermove", s),
                                document.removeEventListener("pointerdown", s),
                                document.removeEventListener("pointerup", s),
                                document.removeEventListener("touchmove", s),
                                document.removeEventListener("touchstart", s),
                                document.removeEventListener("touchend", s));
                    }
                    document.addEventListener(
                        "keydown",
                        function (n) {
                            n.metaKey ||
                                n.altKey ||
                                n.ctrlKey ||
                                (o(t.activeElement) && a(t.activeElement), (e = !0));
                        },
                        !0
                    ),
                        document.addEventListener("mousedown", u, !0),
                        document.addEventListener("pointerdown", u, !0),
                        document.addEventListener("touchstart", u, !0),
                        document.addEventListener(
                            "visibilitychange",
                            function () {
                                "hidden" === document.visibilityState && (n && (e = !0), c());
                            },
                            !0
                        ),
                        c(),
                        t.addEventListener(
                            "focus",
                            function (t) {
                                var n, r, u;
                                o(t.target) &&
                                    (e ||
                                        ((n = t.target),
                                            (r = n.type),
                                            ("INPUT" === (u = n.tagName) && i[r] && !n.readOnly) ||
                                            ("TEXTAREA" === u && !n.readOnly) ||
                                            n.isContentEditable)) &&
                                    a(t.target);
                            },
                            !0
                        ),
                        t.addEventListener(
                            "blur",
                            function (t) {
                                var e;
                                o(t.target) &&
                                    t.target.hasAttribute("data-wf-focus-visible") &&
                                    ((n = !0),
                                        window.clearTimeout(r),
                                        (r = window.setTimeout(function () {
                                            n = !1;
                                        }, 100)),
                                        (e = t.target).getAttribute("data-wf-focus-visible") &&
                                        e.removeAttribute("data-wf-focus-visible"));
                            },
                            !0
                        );
                }
                return {
                    ready: function () {
                        if ("undefined" != typeof document)
                            try {
                                document.querySelector(":focus-visible");
                            } catch (e) {
                                t(document);
                            }
                    },
                };
            })
        );
    },
    function (t, e, n) {
        "use strict";
        n(3).define(
            "focus-within",
            (t.exports = function () {
                function t(t) {
                    for (
                        var e = [t], n = null;
                        (n = t.parentNode || t.host || t.defaultView);

                    )
                        e.push(n), (t = n);
                    return e;
                }
                function e(t) {
                    "function" != typeof t.getAttribute ||
                        t.getAttribute("data-wf-focus-within") ||
                        t.setAttribute("data-wf-focus-within", "true");
                }
                function n(t) {
                    "function" == typeof t.getAttribute &&
                        t.getAttribute("data-wf-focus-within") &&
                        t.removeAttribute("data-wf-focus-within");
                }
                return {
                    ready: function () {
                        if (
                            "undefined" != typeof document &&
                            document.body.hasAttribute("data-wf-focus-within")
                        )
                            try {
                                document.querySelector(":focus-within");
                            } catch (i) {
                                (r = function (r) {
                                    var i;
                                    i ||
                                        (window.requestAnimationFrame(function () {
                                            (i = !1),
                                                "blur" === r.type &&
                                                Array.prototype.slice.call(t(r.target)).forEach(n),
                                                "focus" === r.type &&
                                                Array.prototype.slice.call(t(r.target)).forEach(e);
                                        }),
                                            (i = !0));
                                }),
                                    document.addEventListener("focus", r, !0),
                                    document.addEventListener("blur", r, !0),
                                    e(document.body);
                            }
                        var r;
                    },
                };
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(3);
        r.define(
            "focus",
            (t.exports = function () {
                var t = [],
                    e = !1;
                function n(n) {
                    e &&
                        (n.preventDefault(),
                            n.stopPropagation(),
                            n.stopImmediatePropagation(),
                            t.unshift(n));
                }
                function i(n) {
                    (function (t) {
                        var e = t.target,
                            n = e.tagName;
                        return (
                            (/^a$/i.test(n) && null != e.href) ||
                            (/^(button|textarea)$/i.test(n) && !0 !== e.disabled) ||
                            (/^input$/i.test(n) &&
                                /^(button|reset|submit|radio|checkbox)$/i.test(e.type) &&
                                !e.disabled) ||
                            (!/^(button|input|textarea|select|a)$/i.test(n) &&
                                !Number.isNaN(Number.parseFloat(e.tabIndex))) ||
                            /^audio$/i.test(n) ||
                            (/^video$/i.test(n) && !0 === e.controls)
                        );
                    })(n) &&
                        ((e = !0),
                            setTimeout(function () {
                                for (e = !1, n.target.focus(); t.length > 0;) {
                                    var r = t.pop();
                                    r.target.dispatchEvent(new MouseEvent(r.type, r));
                                }
                            }, 0));
                }
                return {
                    ready: function () {
                        "undefined" != typeof document &&
                            document.body.hasAttribute("data-wf-focus-within") &&
                            r.env.safari &&
                            (document.addEventListener("mousedown", i, !0),
                                document.addEventListener("mouseup", n, !0),
                                document.addEventListener("click", n, !0));
                    },
                };
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = window.jQuery,
            i = {},
            o = [],
            a = {
                reset: function (t, e) {
                    e.__wf_intro = null;
                },
                intro: function (t, e) {
                    e.__wf_intro ||
                        ((e.__wf_intro = !0), r(e).triggerHandler(i.types.INTRO));
                },
                outro: function (t, e) {
                    e.__wf_intro &&
                        ((e.__wf_intro = null), r(e).triggerHandler(i.types.OUTRO));
                },
            };
        (i.triggers = {}),
            (i.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }),
            (i.init = function () {
                for (var t = o.length, e = 0; e < t; e++) {
                    var n = o[e];
                    n[0](0, n[1]);
                }
                (o = []), r.extend(i.triggers, a);
            }),
            (i.async = function () {
                for (var t in a) {
                    var e = a[t];
                    a.hasOwnProperty(t) &&
                        (i.triggers[t] = function (t, n) {
                            o.push([e, n]);
                        });
                }
            }),
            i.async(),
            (t.exports = i);
    },
    function (t, e, n) {
        "use strict";
        var r = n(3),
            i = n(138);
        i.setEnv(r.env),
            r.define(
                "ix2",
                (t.exports = function () {
                    return i;
                })
            );
    },
    function (t, e, n) {
        "use strict";
        var r = n(19),
            i = n(1);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.setEnv = function (t) {
                t() && (0, u.observeRequests)(s);
            }),
            (e.init = function (t) {
                f(), (0, u.startEngine)({ store: s, rawData: t, allowEvents: !0 });
            }),
            (e.destroy = f),
            (e.actions = e.store = void 0),
            n(139);
        var o = n(87),
            a = i(n(186)),
            u = n(123),
            c = r(n(65));
        e.actions = c;
        var s = (0, o.createStore)(a.default);
        function f() {
            (0, u.stopEngine)(s);
        }
        e.store = s;
    },
    function (t, e, n) {
        var r = n(140);
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(141);
        t.exports = r;
    },
    function (t, e, n) {
        n(142);
        var r = n(174);
        t.exports = r("Array", "includes");
    },
    function (t, e, n) {
        "use strict";
        var r = n(143),
            i = n(85).includes,
            o = n(169);
        r(
            { target: "Array", proto: !0 },
            {
                includes: function (t) {
                    return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
                },
            }
        ),
            o("includes");
    },
    function (t, e, n) {
        var r = n(0),
            i = n(70).f,
            o = n(43),
            a = n(157),
            u = n(42),
            c = n(161),
            s = n(168);
        t.exports = function (t, e) {
            var n,
                f,
                l,
                d,
                p,
                v = t.target,
                h = t.global,
                E = t.stat;
            if ((n = h ? r : E ? r[v] || u(v, {}) : (r[v] || {}).prototype))
                for (f in e) {
                    if (
                        ((d = e[f]),
                            (l = t.noTargetGet ? (p = i(n, f)) && p.value : n[f]),
                            !s(h ? f : v + (E ? "." : "#") + f, t.forced) && void 0 !== l)
                    ) {
                        if (typeof d == typeof l) continue;
                        c(d, l);
                    }
                    (t.sham || (l && l.sham)) && o(d, "sham", !0), a(n, f, d, t);
                }
        };
    },
    function (t, e, n) {
        "use strict";
        var r = {}.propertyIsEnumerable,
            i = Object.getOwnPropertyDescriptor,
            o = i && !r.call({ 1: 2 }, 1);
        e.f = o
            ? function (t) {
                var e = i(this, t);
                return !!e && e.enumerable;
            }
            : r;
    },
    function (t, e, n) {
        var r = n(0),
            i = n(5),
            o = n(20),
            a = n(146),
            u = r.Object,
            c = i("".split);
        t.exports = o(function () {
            return !u("z").propertyIsEnumerable(0);
        })
            ? function (t) {
                return "String" == a(t) ? c(t, "") : u(t);
            }
            : u;
    },
    function (t, e, n) {
        var r = n(5),
            i = r({}.toString),
            o = r("".slice);
        t.exports = function (t) {
            return o(i(t), 8, -1);
        };
    },
    function (t, e, n) {
        var r = n(0),
            i = n(40),
            o = n(21),
            a = n(74),
            u = n(151),
            c = n(154),
            s = n(77),
            f = r.TypeError,
            l = s("toPrimitive");
        t.exports = function (t, e) {
            if (!o(t) || a(t)) return t;
            var n,
                r = u(t, l);
            if (r) {
                if ((void 0 === e && (e = "default"), (n = i(r, t, e)), !o(n) || a(n)))
                    return n;
                throw f("Can't convert object to primitive value");
            }
            return void 0 === e && (e = "number"), c(t, e);
        };
    },
    function (t, e, n) {
        var r = n(5);
        t.exports = r({}.isPrototypeOf);
    },
    function (t, e, n) {
        var r,
            i,
            o = n(0),
            a = n(150),
            u = o.process,
            c = o.Deno,
            s = (u && u.versions) || (c && c.version),
            f = s && s.v8;
        f && (i = (r = f.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
            !i &&
            a &&
            (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
            (r = a.match(/Chrome\/(\d+)/)) &&
            (i = +r[1]),
            (t.exports = i);
    },
    function (t, e, n) {
        var r = n(28);
        t.exports = r("navigator", "userAgent") || "";
    },
    function (t, e, n) {
        var r = n(152);
        t.exports = function (t, e) {
            var n = t[e];
            return null == n ? void 0 : r(n);
        };
    },
    function (t, e, n) {
        var r = n(0),
            i = n(7),
            o = n(153),
            a = r.TypeError;
        t.exports = function (t) {
            if (i(t)) return t;
            throw a(o(t) + " is not a function");
        };
    },
    function (t, e, n) {
        var r = n(0).String;
        t.exports = function (t) {
            try {
                return r(t);
            } catch (t) {
                return "Object";
            }
        };
    },
    function (t, e, n) {
        var r = n(0),
            i = n(40),
            o = n(7),
            a = n(21),
            u = r.TypeError;
        t.exports = function (t, e) {
            var n, r;
            if ("string" === e && o((n = t.toString)) && !a((r = i(n, t)))) return r;
            if (o((n = t.valueOf)) && !a((r = i(n, t)))) return r;
            if ("string" !== e && o((n = t.toString)) && !a((r = i(n, t)))) return r;
            throw u("Can't convert object to primitive value");
        };
    },
    function (t, e) {
        t.exports = !1;
    },
    function (t, e, n) {
        var r = n(0),
            i = n(72),
            o = r.Object;
        t.exports = function (t) {
            return o(i(t));
        };
    },
    function (t, e, n) {
        var r = n(0),
            i = n(7),
            o = n(9),
            a = n(43),
            u = n(42),
            c = n(82),
            s = n(158),
            f = n(160).CONFIGURABLE,
            l = s.get,
            d = s.enforce,
            p = String(String).split("String");
        (t.exports = function (t, e, n, c) {
            var s,
                l = !!c && !!c.unsafe,
                v = !!c && !!c.enumerable,
                h = !!c && !!c.noTargetGet,
                E = c && void 0 !== c.name ? c.name : e;
            i(n) &&
                ("Symbol(" === String(E).slice(0, 7) &&
                    (E = "[" + String(E).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
                    (!o(n, "name") || (f && n.name !== E)) && a(n, "name", E),
                    (s = d(n)).source ||
                    (s.source = p.join("string" == typeof E ? E : ""))),
                t !== r
                    ? (l ? !h && t[e] && (v = !0) : delete t[e],
                        v ? (t[e] = n) : a(t, e, n))
                    : v
                        ? (t[e] = n)
                        : u(e, n);
        })(Function.prototype, "toString", function () {
            return (i(this) && l(this).source) || c(this);
        });
    },
    function (t, e, n) {
        var r,
            i,
            o,
            a = n(159),
            u = n(0),
            c = n(5),
            s = n(21),
            f = n(43),
            l = n(9),
            d = n(41),
            p = n(83),
            v = n(44),
            h = u.TypeError,
            E = u.WeakMap;
        if (a || d.state) {
            var g = d.state || (d.state = new E()),
                m = c(g.get),
                y = c(g.has),
                _ = c(g.set);
            (r = function (t, e) {
                if (y(g, t)) throw new h("Object already initialized");
                return (e.facade = t), _(g, t, e), e;
            }),
                (i = function (t) {
                    return m(g, t) || {};
                }),
                (o = function (t) {
                    return y(g, t);
                });
        } else {
            var I = p("state");
            (v[I] = !0),
                (r = function (t, e) {
                    if (l(t, I)) throw new h("Object already initialized");
                    return (e.facade = t), f(t, I, e), e;
                }),
                (i = function (t) {
                    return l(t, I) ? t[I] : {};
                }),
                (o = function (t) {
                    return l(t, I);
                });
        }
        t.exports = {
            set: r,
            get: i,
            has: o,
            enforce: function (t) {
                return o(t) ? i(t) : r(t, {});
            },
            getterFor: function (t) {
                return function (e) {
                    var n;
                    if (!s(e) || (n = i(e)).type !== t)
                        throw h("Incompatible receiver, " + t + " required");
                    return n;
                };
            },
        };
    },
    function (t, e, n) {
        var r = n(0),
            i = n(7),
            o = n(82),
            a = r.WeakMap;
        t.exports = i(a) && /native code/.test(o(a));
    },
    function (t, e, n) {
        var r = n(13),
            i = n(9),
            o = Function.prototype,
            a = r && Object.getOwnPropertyDescriptor,
            u = i(o, "name"),
            c = u && "something" === function () { }.name,
            s = u && (!r || (r && a(o, "name").configurable));
        t.exports = { EXISTS: u, PROPER: c, CONFIGURABLE: s };
    },
    function (t, e, n) {
        var r = n(9),
            i = n(162),
            o = n(70),
            a = n(29);
        t.exports = function (t, e) {
            for (var n = i(e), u = a.f, c = o.f, s = 0; s < n.length; s++) {
                var f = n[s];
                r(t, f) || u(t, f, c(e, f));
            }
        };
    },
    function (t, e, n) {
        var r = n(28),
            i = n(5),
            o = n(163),
            a = n(167),
            u = n(30),
            c = i([].concat);
        t.exports =
            r("Reflect", "ownKeys") ||
            function (t) {
                var e = o.f(u(t)),
                    n = a.f;
                return n ? c(e, n(t)) : e;
            };
    },
    function (t, e, n) {
        var r = n(84),
            i = n(45).concat("length", "prototype");
        e.f =
            Object.getOwnPropertyNames ||
            function (t) {
                return r(t, i);
            };
    },
    function (t, e, n) {
        var r = n(86),
            i = Math.max,
            o = Math.min;
        t.exports = function (t, e) {
            var n = r(t);
            return n < 0 ? i(n + e, 0) : o(n, e);
        };
    },
    function (t, e, n) {
        var r = n(166);
        t.exports = function (t) {
            return r(t.length);
        };
    },
    function (t, e, n) {
        var r = n(86),
            i = Math.min;
        t.exports = function (t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0;
        };
    },
    function (t, e) {
        e.f = Object.getOwnPropertySymbols;
    },
    function (t, e, n) {
        var r = n(20),
            i = n(7),
            o = /#|\.prototype\./,
            a = function (t, e) {
                var n = c[u(t)];
                return n == f || (n != s && (i(e) ? r(e) : !!e));
            },
            u = (a.normalize = function (t) {
                return String(t).replace(o, ".").toLowerCase();
            }),
            c = (a.data = {}),
            s = (a.NATIVE = "N"),
            f = (a.POLYFILL = "P");
        t.exports = a;
    },
    function (t, e, n) {
        var r = n(77),
            i = n(170),
            o = n(29),
            a = r("unscopables"),
            u = Array.prototype;
        null == u[a] && o.f(u, a, { configurable: !0, value: i(null) }),
            (t.exports = function (t) {
                u[a][t] = !0;
            });
    },
    function (t, e, n) {
        var r,
            i = n(30),
            o = n(171),
            a = n(45),
            u = n(44),
            c = n(173),
            s = n(81),
            f = n(83),
            l = f("IE_PROTO"),
            d = function () { },
            p = function (t) {
                return "<script>" + t + "</script>";
            },
            v = function (t) {
                t.write(p("")), t.close();
                var e = t.parentWindow.Object;
                return (t = null), e;
            },
            h = function () {
                try {
                    r = new ActiveXObject("htmlfile");
                } catch (t) { }
                var t, e;
                h =
                    "undefined" != typeof document
                        ? document.domain && r
                            ? v(r)
                            : (((e = s("iframe")).style.display = "none"),
                                c.appendChild(e),
                                (e.src = String("javascript:")),
                                (t = e.contentWindow.document).open(),
                                t.write(p("document.F=Object")),
                                t.close(),
                                t.F)
                        : v(r);
                for (var n = a.length; n--;) delete h.prototype[a[n]];
                return h();
            };
        (u[l] = !0),
            (t.exports =
                Object.create ||
                function (t, e) {
                    var n;
                    return (
                        null !== t
                            ? ((d.prototype = i(t)),
                                (n = new d()),
                                (d.prototype = null),
                                (n[l] = t))
                            : (n = h()),
                        void 0 === e ? n : o(n, e)
                    );
                });
    },
    function (t, e, n) {
        var r = n(13),
            i = n(29),
            o = n(30),
            a = n(27),
            u = n(172);
        t.exports = r
            ? Object.defineProperties
            : function (t, e) {
                o(t);
                for (var n, r = a(e), c = u(e), s = c.length, f = 0; s > f;)
                    i.f(t, (n = c[f++]), r[n]);
                return t;
            };
    },
    function (t, e, n) {
        var r = n(84),
            i = n(45);
        t.exports =
            Object.keys ||
            function (t) {
                return r(t, i);
            };
    },
    function (t, e, n) {
        var r = n(28);
        t.exports = r("document", "documentElement");
    },
    function (t, e, n) {
        var r = n(0),
            i = n(5);
        t.exports = function (t, e) {
            return i(r[t].prototype[e]);
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(89),
            i = n(178),
            o = n(179),
            a = "[object Null]",
            u = "[object Undefined]",
            c = r.default ? r.default.toStringTag : void 0;
        e.default = function (t) {
            return null == t
                ? void 0 === t
                    ? u
                    : a
                : c && c in Object(t)
                    ? Object(i.default)(t)
                    : Object(o.default)(t);
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(177),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r.default || i || Function("return this")();
        e.default = o;
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            function (t) {
                var n = "object" == typeof t && t && t.Object === Object && t;
                e.default = n;
            }.call(this, n(26));
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(89),
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = i.toString,
            u = r.default ? r.default.toStringTag : void 0;
        e.default = function (t) {
            var e = o.call(t, u),
                n = t[u];
            try {
                t[u] = void 0;
                var r = !0;
            } catch (t) { }
            var i = a.call(t);
            return r && (e ? (t[u] = n) : delete t[u]), i;
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = Object.prototype.toString;
        e.default = function (t) {
            return r.call(t);
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(181),
            i = Object(r.default)(Object.getPrototypeOf, Object);
        e.default = i;
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            (e.default = function (t, e) {
                return function (n) {
                    return t(e(n));
                };
            });
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            (e.default = function (t) {
                return null != t && "object" == typeof t;
            });
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            function (t, r) {
                var i,
                    o = n(185);
                i =
                    "undefined" != typeof self
                        ? self
                        : "undefined" != typeof window
                            ? window
                            : void 0 !== t
                                ? t
                                : r;
                var a = Object(o.default)(i);
                e.default = a;
            }.call(this, n(26), n(184)(t));
    },
    function (t, e) {
        t.exports = function (t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []),
                    Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return e.l;
                        },
                    }),
                    Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function () {
                            return e.i;
                        },
                    }),
                    Object.defineProperty(e, "exports", { enumerable: !0 }),
                    (e.webpackPolyfill = 1);
            }
            return e;
        };
    },
    function (t, e, n) {
        "use strict";
        function r(t) {
            var e,
                n = t.Symbol;
            return (
                "function" == typeof n
                    ? n.observable
                        ? (e = n.observable)
                        : ((e = n("observable")), (n.observable = e))
                    : (e = "@@observable"),
                e
            );
        }
        n.r(e),
            n.d(e, "default", function () {
                return r;
            });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var r = n(87),
            i = n(187),
            o = n(193),
            a = n(194),
            u = n(14),
            c = n(280),
            s = n(281),
            f = u.IX2ElementsReducer.ixElements,
            l = (0, r.combineReducers)({
                ixData: i.ixData,
                ixRequest: o.ixRequest,
                ixSession: a.ixSession,
                ixElements: f,
                ixInstances: c.ixInstances,
                ixParameters: s.ixParameters,
            });
        e.default = l;
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ixData = void 0);
        var r = n(4).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
        e.ixData = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : Object.freeze({}),
                e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case r:
                    return e.payload.ixData || Object.freeze({});
                default:
                    return t;
            }
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.QuickEffectDirectionConsts =
                e.QuickEffectIds =
                e.EventLimitAffectedElements =
                e.EventContinuousMouseAxes =
                e.EventBasedOn =
                e.EventAppliesTo =
                e.EventTypeConsts =
                void 0);
        e.EventTypeConsts = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL",
        };
        e.EventAppliesTo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
        e.EventBasedOn = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
        e.EventContinuousMouseAxes = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
        e.EventLimitAffectedElements = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        };
        e.QuickEffectIds = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        };
        e.QuickEffectDirectionConsts = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.InteractionTypeConsts = void 0);
        e.InteractionTypeConsts = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION",
        };
    },
    function (t, e, n) {
        "use strict";
        var r,
            i = n(1)(n(22));
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ReducedMotionTypes = void 0);
        var o = n(94).ActionTypeConsts,
            a = o.TRANSFORM_MOVE,
            u = o.TRANSFORM_SCALE,
            c = o.TRANSFORM_ROTATE,
            s = o.TRANSFORM_SKEW,
            f = o.STYLE_SIZE,
            l = o.STYLE_FILTER,
            d = o.STYLE_FONT_VARIATION,
            p =
                ((r = {}),
                    (0, i.default)(r, a, !0),
                    (0, i.default)(r, u, !0),
                    (0, i.default)(r, c, !0),
                    (0, i.default)(r, s, !0),
                    (0, i.default)(r, f, !0),
                    (0, i.default)(r, l, !0),
                    (0, i.default)(r, d, !0),
                    r);
        e.ReducedMotionTypes = p;
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.IX2_TEST_FRAME_RENDERED =
                e.IX2_MEDIA_QUERIES_DEFINED =
                e.IX2_VIEWPORT_WIDTH_CHANGED =
                e.IX2_ACTION_LIST_PLAYBACK_CHANGED =
                e.IX2_ELEMENT_STATE_CHANGED =
                e.IX2_INSTANCE_REMOVED =
                e.IX2_INSTANCE_STARTED =
                e.IX2_INSTANCE_ADDED =
                e.IX2_PARAMETER_CHANGED =
                e.IX2_ANIMATION_FRAME_CHANGED =
                e.IX2_EVENT_STATE_CHANGED =
                e.IX2_EVENT_LISTENER_ADDED =
                e.IX2_CLEAR_REQUESTED =
                e.IX2_STOP_REQUESTED =
                e.IX2_PLAYBACK_REQUESTED =
                e.IX2_PREVIEW_REQUESTED =
                e.IX2_SESSION_STOPPED =
                e.IX2_SESSION_STARTED =
                e.IX2_SESSION_INITIALIZED =
                e.IX2_RAW_DATA_IMPORTED =
                void 0);
        e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
        e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
        e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
        e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
        e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
        e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
        e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
        e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
        e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
        e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
        e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
        e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
        e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
        e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
        e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
        e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
        e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
        e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
        e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
        e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED";
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.RENDER_PLUGIN =
                e.RENDER_STYLE =
                e.RENDER_GENERAL =
                e.RENDER_TRANSFORM =
                e.ABSTRACT_NODE =
                e.PLAIN_OBJECT =
                e.HTML_ELEMENT =
                e.PRESERVE_3D =
                e.PARENT =
                e.SIBLINGS =
                e.IMMEDIATE_CHILDREN =
                e.CHILDREN =
                e.BAR_DELIMITER =
                e.COLON_DELIMITER =
                e.COMMA_DELIMITER =
                e.AUTO =
                e.WILL_CHANGE =
                e.FLEX =
                e.DISPLAY =
                e.COLOR =
                e.BORDER_COLOR =
                e.BACKGROUND =
                e.BACKGROUND_COLOR =
                e.HEIGHT =
                e.WIDTH =
                e.FONT_VARIATION_SETTINGS =
                e.FILTER =
                e.OPACITY =
                e.SKEW_Y =
                e.SKEW_X =
                e.SKEW =
                e.ROTATE_Z =
                e.ROTATE_Y =
                e.ROTATE_X =
                e.SCALE_3D =
                e.SCALE_Z =
                e.SCALE_Y =
                e.SCALE_X =
                e.TRANSLATE_3D =
                e.TRANSLATE_Z =
                e.TRANSLATE_Y =
                e.TRANSLATE_X =
                e.TRANSFORM =
                e.CONFIG_UNIT =
                e.CONFIG_Z_UNIT =
                e.CONFIG_Y_UNIT =
                e.CONFIG_X_UNIT =
                e.CONFIG_VALUE =
                e.CONFIG_Z_VALUE =
                e.CONFIG_Y_VALUE =
                e.CONFIG_X_VALUE =
                e.BOUNDARY_SELECTOR =
                e.W_MOD_IX =
                e.W_MOD_JS =
                e.WF_PAGE =
                e.IX2_ID_DELIMITER =
                void 0);
        e.IX2_ID_DELIMITER = "|";
        e.WF_PAGE = "data-wf-page";
        e.W_MOD_JS = "w-mod-js";
        e.W_MOD_IX = "w-mod-ix";
        e.BOUNDARY_SELECTOR = ".w-dyn-item";
        e.CONFIG_X_VALUE = "xValue";
        e.CONFIG_Y_VALUE = "yValue";
        e.CONFIG_Z_VALUE = "zValue";
        e.CONFIG_VALUE = "value";
        e.CONFIG_X_UNIT = "xUnit";
        e.CONFIG_Y_UNIT = "yUnit";
        e.CONFIG_Z_UNIT = "zUnit";
        e.CONFIG_UNIT = "unit";
        e.TRANSFORM = "transform";
        e.TRANSLATE_X = "translateX";
        e.TRANSLATE_Y = "translateY";
        e.TRANSLATE_Z = "translateZ";
        e.TRANSLATE_3D = "translate3d";
        e.SCALE_X = "scaleX";
        e.SCALE_Y = "scaleY";
        e.SCALE_Z = "scaleZ";
        e.SCALE_3D = "scale3d";
        e.ROTATE_X = "rotateX";
        e.ROTATE_Y = "rotateY";
        e.ROTATE_Z = "rotateZ";
        e.SKEW = "skew";
        e.SKEW_X = "skewX";
        e.SKEW_Y = "skewY";
        e.OPACITY = "opacity";
        e.FILTER = "filter";
        e.FONT_VARIATION_SETTINGS = "font-variation-settings";
        e.WIDTH = "width";
        e.HEIGHT = "height";
        e.BACKGROUND_COLOR = "backgroundColor";
        e.BACKGROUND = "background";
        e.BORDER_COLOR = "borderColor";
        e.COLOR = "color";
        e.DISPLAY = "display";
        e.FLEX = "flex";
        e.WILL_CHANGE = "willChange";
        e.AUTO = "AUTO";
        e.COMMA_DELIMITER = ",";
        e.COLON_DELIMITER = ":";
        e.BAR_DELIMITER = "|";
        e.CHILDREN = "CHILDREN";
        e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
        e.SIBLINGS = "SIBLINGS";
        e.PARENT = "PARENT";
        e.PRESERVE_3D = "preserve-3d";
        e.HTML_ELEMENT = "HTML_ELEMENT";
        e.PLAIN_OBJECT = "PLAIN_OBJECT";
        e.ABSTRACT_NODE = "ABSTRACT_NODE";
        e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
        e.RENDER_GENERAL = "RENDER_GENERAL";
        e.RENDER_STYLE = "RENDER_STYLE";
        e.RENDER_PLUGIN = "RENDER_PLUGIN";
    },
    function (t, e, n) {
        "use strict";
        var r,
            i = n(1)(n(22)),
            o = n(1);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ixRequest = void 0);
        var a = o(n(31)),
            u = n(4),
            c = n(23),
            s = u.IX2EngineActionTypes,
            f = s.IX2_PREVIEW_REQUESTED,
            l = s.IX2_PLAYBACK_REQUESTED,
            d = s.IX2_STOP_REQUESTED,
            p = s.IX2_CLEAR_REQUESTED,
            v = { preview: {}, playback: {}, stop: {}, clear: {} },
            h = Object.create(
                null,
                ((r = {}),
                    (0, i.default)(r, f, { value: "preview" }),
                    (0, i.default)(r, l, { value: "playback" }),
                    (0, i.default)(r, d, { value: "stop" }),
                    (0, i.default)(r, p, { value: "clear" }),
                    r)
            );
        e.ixRequest = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
                e = arguments.length > 1 ? arguments[1] : void 0;
            if (e.type in h) {
                var n = [h[e.type]];
                return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload));
            }
            return t;
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ixSession = void 0);
        var r = n(4),
            i = n(23),
            o = r.IX2EngineActionTypes,
            a = o.IX2_SESSION_INITIALIZED,
            u = o.IX2_SESSION_STARTED,
            c = o.IX2_TEST_FRAME_RENDERED,
            s = o.IX2_SESSION_STOPPED,
            f = o.IX2_EVENT_LISTENER_ADDED,
            l = o.IX2_EVENT_STATE_CHANGED,
            d = o.IX2_ANIMATION_FRAME_CHANGED,
            p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
            v = o.IX2_VIEWPORT_WIDTH_CHANGED,
            h = o.IX2_MEDIA_QUERIES_DEFINED,
            E = {
                active: !1,
                tick: 0,
                eventListeners: [],
                eventState: {},
                playbackState: {},
                viewportWidth: 0,
                mediaQueryKey: null,
                hasBoundaryNodes: !1,
                hasDefinedMediaQueries: !1,
                reducedMotion: !1,
            };
        e.ixSession = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
                e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case a:
                    var n = e.payload,
                        r = n.hasBoundaryNodes,
                        o = n.reducedMotion;
                    return (0, i.merge)(t, { hasBoundaryNodes: r, reducedMotion: o });
                case u:
                    return (0, i.set)(t, "active", !0);
                case c:
                    var g = e.payload.step,
                        m = void 0 === g ? 20 : g;
                    return (0, i.set)(t, "tick", t.tick + m);
                case s:
                    return E;
                case d:
                    var y = e.payload.now;
                    return (0, i.set)(t, "tick", y);
                case f:
                    var _ = (0, i.addLast)(t.eventListeners, e.payload);
                    return (0, i.set)(t, "eventListeners", _);
                case l:
                    var I = e.payload,
                        b = I.stateKey,
                        T = I.newState;
                    return (0, i.setIn)(t, ["eventState", b], T);
                case p:
                    var w = e.payload,
                        O = w.actionListId,
                        A = w.isPlaying;
                    return (0, i.setIn)(t, ["playbackState", O], A);
                case v:
                    for (
                        var S = e.payload,
                        x = S.width,
                        R = S.mediaQueries,
                        N = R.length,
                        C = null,
                        L = 0;
                        L < N;
                        L++
                    ) {
                        var D = R[L],
                            P = D.key,
                            M = D.min,
                            j = D.max;
                        if (x >= M && x <= j) {
                            C = P;
                            break;
                        }
                    }
                    return (0, i.merge)(t, { viewportWidth: x, mediaQueryKey: C });
                case h:
                    return (0, i.set)(t, "hasDefinedMediaQueries", !0);
                default:
                    return t;
            }
        };
    },
    function (t, e, n) {
        var r = n(196),
            i = n(248),
            o = n(111);
        t.exports = function (t) {
            var e = i(t);
            return 1 == e.length && e[0][2]
                ? o(e[0][0], e[0][1])
                : function (n) {
                    return n === t || r(n, t, e);
                };
        };
    },
    function (t, e, n) {
        var r = n(97),
            i = n(101),
            o = 1,
            a = 2;
        t.exports = function (t, e, n, u) {
            var c = n.length,
                s = c,
                f = !u;
            if (null == t) return !s;
            for (t = Object(t); c--;) {
                var l = n[c];
                if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
            }
            for (; ++c < s;) {
                var d = (l = n[c])[0],
                    p = t[d],
                    v = l[1];
                if (f && l[2]) {
                    if (void 0 === p && !(d in t)) return !1;
                } else {
                    var h = new r();
                    if (u) var E = u(p, v, d, t, e, h);
                    if (!(void 0 === E ? i(v, p, o | a, u, h) : E)) return !1;
                }
            }
            return !0;
        };
    },
    function (t, e) {
        t.exports = function () {
            (this.__data__ = []), (this.size = 0);
        };
    },
    function (t, e, n) {
        var r = n(33),
            i = Array.prototype.splice;
        t.exports = function (t) {
            var e = this.__data__,
                n = r(e, t);
            return !(
                n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0)
            );
        };
    },
    function (t, e, n) {
        var r = n(33);
        t.exports = function (t) {
            var e = this.__data__,
                n = r(e, t);
            return n < 0 ? void 0 : e[n][1];
        };
    },
    function (t, e, n) {
        var r = n(33);
        t.exports = function (t) {
            return r(this.__data__, t) > -1;
        };
    },
    function (t, e, n) {
        var r = n(33);
        t.exports = function (t, e) {
            var n = this.__data__,
                i = r(n, t);
            return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this;
        };
    },
    function (t, e, n) {
        var r = n(32);
        t.exports = function () {
            (this.__data__ = new r()), (this.size = 0);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = this.__data__,
                n = e.delete(t);
            return (this.size = e.size), n;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return this.__data__.get(t);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return this.__data__.has(t);
        };
    },
    function (t, e, n) {
        var r = n(32),
            i = n(50),
            o = n(51),
            a = 200;
        t.exports = function (t, e) {
            var n = this.__data__;
            if (n instanceof r) {
                var u = n.__data__;
                if (!i || u.length < a - 1)
                    return u.push([t, e]), (this.size = ++n.size), this;
                n = this.__data__ = new o(u);
            }
            return n.set(t, e), (this.size = n.size), this;
        };
    },
    function (t, e, n) {
        var r = n(98),
            i = n(210),
            o = n(8),
            a = n(100),
            u = /^\[object .+?Constructor\]$/,
            c = Function.prototype,
            s = Object.prototype,
            f = c.toString,
            l = s.hasOwnProperty,
            d = RegExp(
                "^" +
                f
                    .call(l)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                    ) +
                "$"
            );
        t.exports = function (t) {
            return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t));
        };
    },
    function (t, e, n) {
        var r = n(24),
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = i.toString,
            u = r ? r.toStringTag : void 0;
        t.exports = function (t) {
            var e = o.call(t, u),
                n = t[u];
            try {
                t[u] = void 0;
                var r = !0;
            } catch (t) { }
            var i = a.call(t);
            return r && (e ? (t[u] = n) : delete t[u]), i;
        };
    },
    function (t, e) {
        var n = Object.prototype.toString;
        t.exports = function (t) {
            return n.call(t);
        };
    },
    function (t, e, n) {
        var r,
            i = n(211),
            o = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + r
                : "";
        t.exports = function (t) {
            return !!o && o in t;
        };
    },
    function (t, e, n) {
        var r = n(6)["__core-js_shared__"];
        t.exports = r;
    },
    function (t, e) {
        t.exports = function (t, e) {
            return null == t ? void 0 : t[e];
        };
    },
    function (t, e, n) {
        var r = n(214),
            i = n(32),
            o = n(50);
        t.exports = function () {
            (this.size = 0),
                (this.__data__ = {
                    hash: new r(),
                    map: new (o || i)(),
                    string: new r(),
                });
        };
    },
    function (t, e, n) {
        var r = n(215),
            i = n(216),
            o = n(217),
            a = n(218),
            u = n(219);
        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r),
            (c.prototype.delete = i),
            (c.prototype.get = o),
            (c.prototype.has = a),
            (c.prototype.set = u),
            (t.exports = c);
    },
    function (t, e, n) {
        var r = n(34);
        t.exports = function () {
            (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = this.has(t) && delete this.__data__[t];
            return (this.size -= e ? 1 : 0), e;
        };
    },
    function (t, e, n) {
        var r = n(34),
            i = "__lodash_hash_undefined__",
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var e = this.__data__;
            if (r) {
                var n = e[t];
                return n === i ? void 0 : n;
            }
            return o.call(e, t) ? e[t] : void 0;
        };
    },
    function (t, e, n) {
        var r = n(34),
            i = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var e = this.__data__;
            return r ? void 0 !== e[t] : i.call(e, t);
        };
    },
    function (t, e, n) {
        var r = n(34),
            i = "__lodash_hash_undefined__";
        t.exports = function (t, e) {
            var n = this.__data__;
            return (
                (this.size += this.has(t) ? 0 : 1),
                (n[t] = r && void 0 === e ? i : e),
                this
            );
        };
    },
    function (t, e, n) {
        var r = n(35);
        t.exports = function (t) {
            var e = r(this, t).delete(t);
            return (this.size -= e ? 1 : 0), e;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e
                ? "__proto__" !== t
                : null === t;
        };
    },
    function (t, e, n) {
        var r = n(35);
        t.exports = function (t) {
            return r(this, t).get(t);
        };
    },
    function (t, e, n) {
        var r = n(35);
        t.exports = function (t) {
            return r(this, t).has(t);
        };
    },
    function (t, e, n) {
        var r = n(35);
        t.exports = function (t, e) {
            var n = r(this, t),
                i = n.size;
            return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
        };
    },
    function (t, e, n) {
        var r = n(97),
            i = n(102),
            o = n(231),
            a = n(235),
            u = n(59),
            c = n(2),
            s = n(53),
            f = n(55),
            l = 1,
            d = "[object Arguments]",
            p = "[object Array]",
            v = "[object Object]",
            h = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, n, E, g, m) {
            var y = c(t),
                _ = c(e),
                I = y ? p : u(t),
                b = _ ? p : u(e),
                T = (I = I == d ? v : I) == v,
                w = (b = b == d ? v : b) == v,
                O = I == b;
            if (O && s(t)) {
                if (!s(e)) return !1;
                (y = !0), (T = !1);
            }
            if (O && !T)
                return (
                    m || (m = new r()),
                    y || f(t) ? i(t, e, n, E, g, m) : o(t, e, I, n, E, g, m)
                );
            if (!(n & l)) {
                var A = T && h.call(t, "__wrapped__"),
                    S = w && h.call(e, "__wrapped__");
                if (A || S) {
                    var x = A ? t.value() : t,
                        R = S ? e.value() : e;
                    return m || (m = new r()), g(x, R, n, E, m);
                }
            }
            return !!O && (m || (m = new r()), a(t, e, n, E, g, m));
        };
    },
    function (t, e, n) {
        var r = n(51),
            i = n(227),
            o = n(228);
        function a(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.__data__ = new r(); ++e < n;) this.add(t[e]);
        }
        (a.prototype.add = a.prototype.push = i),
            (a.prototype.has = o),
            (t.exports = a);
    },
    function (t, e) {
        var n = "__lodash_hash_undefined__";
        t.exports = function (t) {
            return this.__data__.set(t, n), this;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return this.__data__.has(t);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                if (e(t[n], n, t)) return !0;
            return !1;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return t.has(e);
        };
    },
    function (t, e, n) {
        var r = n(24),
            i = n(232),
            o = n(49),
            a = n(102),
            u = n(233),
            c = n(234),
            s = 1,
            f = 2,
            l = "[object Boolean]",
            d = "[object Date]",
            p = "[object Error]",
            v = "[object Map]",
            h = "[object Number]",
            E = "[object RegExp]",
            g = "[object Set]",
            m = "[object String]",
            y = "[object Symbol]",
            _ = "[object ArrayBuffer]",
            I = "[object DataView]",
            b = r ? r.prototype : void 0,
            T = b ? b.valueOf : void 0;
        t.exports = function (t, e, n, r, b, w, O) {
            switch (n) {
                case I:
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                        return !1;
                    (t = t.buffer), (e = e.buffer);
                case _:
                    return !(t.byteLength != e.byteLength || !w(new i(t), new i(e)));
                case l:
                case d:
                case h:
                    return o(+t, +e);
                case p:
                    return t.name == e.name && t.message == e.message;
                case E:
                case m:
                    return t == e + "";
                case v:
                    var A = u;
                case g:
                    var S = r & s;
                    if ((A || (A = c), t.size != e.size && !S)) return !1;
                    var x = O.get(t);
                    if (x) return x == e;
                    (r |= f), O.set(t, e);
                    var R = a(A(t), A(e), r, b, w, O);
                    return O.delete(t), R;
                case y:
                    if (T) return T.call(t) == T.call(e);
            }
            return !1;
        };
    },
    function (t, e, n) {
        var r = n(6).Uint8Array;
        t.exports = r;
    },
    function (t, e) {
        t.exports = function (t) {
            var e = -1,
                n = Array(t.size);
            return (
                t.forEach(function (t, r) {
                    n[++e] = [r, t];
                }),
                n
            );
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = -1,
                n = Array(t.size);
            return (
                t.forEach(function (t) {
                    n[++e] = t;
                }),
                n
            );
        };
    },
    function (t, e, n) {
        var r = n(236),
            i = 1,
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, n, a, u, c) {
            var s = n & i,
                f = r(t),
                l = f.length;
            if (l != r(e).length && !s) return !1;
            for (var d = l; d--;) {
                var p = f[d];
                if (!(s ? p in e : o.call(e, p))) return !1;
            }
            var v = c.get(t),
                h = c.get(e);
            if (v && h) return v == e && h == t;
            var E = !0;
            c.set(t, e), c.set(e, t);
            for (var g = s; ++d < l;) {
                var m = t[(p = f[d])],
                    y = e[p];
                if (a) var _ = s ? a(y, m, p, e, t, c) : a(m, y, p, t, e, c);
                if (!(void 0 === _ ? m === y || u(m, y, n, a, c) : _)) {
                    E = !1;
                    break;
                }
                g || (g = "constructor" == p);
            }
            if (E && !g) {
                var I = t.constructor,
                    b = e.constructor;
                I != b &&
                    "constructor" in t &&
                    "constructor" in e &&
                    !(
                        "function" == typeof I &&
                        I instanceof I &&
                        "function" == typeof b &&
                        b instanceof b
                    ) &&
                    (E = !1);
            }
            return c.delete(t), c.delete(e), E;
        };
    },
    function (t, e, n) {
        var r = n(103),
            i = n(104),
            o = n(36);
        t.exports = function (t) {
            return r(t, o, i);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
                var a = t[n];
                e(a, n, t) && (o[i++] = a);
            }
            return o;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
            return r;
        };
    },
    function (t, e, n) {
        var r = n(15),
            i = n(12),
            o = "[object Arguments]";
        t.exports = function (t) {
            return i(t) && r(t) == o;
        };
    },
    function (t, e) {
        t.exports = function () {
            return !1;
        };
    },
    function (t, e, n) {
        var r = n(15),
            i = n(56),
            o = n(12),
            a = {};
        (a["[object Float32Array]"] =
            a["[object Float64Array]"] =
            a["[object Int8Array]"] =
            a["[object Int16Array]"] =
            a["[object Int32Array]"] =
            a["[object Uint8Array]"] =
            a["[object Uint8ClampedArray]"] =
            a["[object Uint16Array]"] =
            a["[object Uint32Array]"] =
            !0),
            (a["[object Arguments]"] =
                a["[object Array]"] =
                a["[object ArrayBuffer]"] =
                a["[object Boolean]"] =
                a["[object DataView]"] =
                a["[object Date]"] =
                a["[object Error]"] =
                a["[object Function]"] =
                a["[object Map]"] =
                a["[object Number]"] =
                a["[object Object]"] =
                a["[object RegExp]"] =
                a["[object Set]"] =
                a["[object String]"] =
                a["[object WeakMap]"] =
                !1),
            (t.exports = function (t) {
                return o(t) && i(t.length) && !!a[r(t)];
            });
    },
    function (t, e) {
        t.exports = function (t) {
            return function (e) {
                return t(e);
            };
        };
    },
    function (t, e, n) {
        (function (t) {
            var r = n(99),
                i = e && !e.nodeType && e,
                o = i && "object" == typeof t && t && !t.nodeType && t,
                a = o && o.exports === i && r.process,
                u = (function () {
                    try {
                        var t = o && o.require && o.require("util").types;
                        return t || (a && a.binding && a.binding("util"));
                    } catch (t) { }
                })();
            t.exports = u;
        }.call(this, n(107)(t)));
    },
    function (t, e, n) {
        var r = n(108)(Object.keys, Object);
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(11)(n(6), "DataView");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(11)(n(6), "Promise");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(11)(n(6), "Set");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(110),
            i = n(36);
        t.exports = function (t) {
            for (var e = i(t), n = e.length; n--;) {
                var o = e[n],
                    a = t[o];
                e[n] = [o, a, r(a)];
            }
            return e;
        };
    },
    function (t, e, n) {
        var r = n(101),
            i = n(60),
            o = n(255),
            a = n(62),
            u = n(110),
            c = n(111),
            s = n(25),
            f = 1,
            l = 2;
        t.exports = function (t, e) {
            return a(t) && u(e)
                ? c(s(t), e)
                : function (n) {
                    var a = i(n, t);
                    return void 0 === a && a === e ? o(n, t) : r(e, a, f | l);
                };
        };
    },
    function (t, e, n) {
        var r = n(251),
            i =
                /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            o = /\\(\\)?/g,
            a = r(function (t) {
                var e = [];
                return (
                    46 === t.charCodeAt(0) && e.push(""),
                    t.replace(i, function (t, n, r, i) {
                        e.push(r ? i.replace(o, "$1") : n || t);
                    }),
                    e
                );
            });
        t.exports = a;
    },
    function (t, e, n) {
        var r = n(252),
            i = 500;
        t.exports = function (t) {
            var e = r(t, function (t) {
                return n.size === i && n.clear(), t;
            }),
                n = e.cache;
            return e;
        };
    },
    function (t, e, n) {
        var r = n(51),
            i = "Expected a function";
        function o(t, e) {
            if ("function" != typeof t || (null != e && "function" != typeof e))
                throw new TypeError(i);
            var n = function () {
                var r = arguments,
                    i = e ? e.apply(this, r) : r[0],
                    o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = t.apply(this, r);
                return (n.cache = o.set(i, a) || o), a;
            };
            return (n.cache = new (o.Cache || r)()), n;
        }
        (o.Cache = r), (t.exports = o);
    },
    function (t, e, n) {
        var r = n(254);
        t.exports = function (t) {
            return null == t ? "" : r(t);
        };
    },
    function (t, e, n) {
        var r = n(24),
            i = n(112),
            o = n(2),
            a = n(39),
            u = 1 / 0,
            c = r ? r.prototype : void 0,
            s = c ? c.toString : void 0;
        t.exports = function t(e) {
            if ("string" == typeof e) return e;
            if (o(e)) return i(e, t) + "";
            if (a(e)) return s ? s.call(e) : "";
            var n = e + "";
            return "0" == n && 1 / e == -u ? "-0" : n;
        };
    },
    function (t, e, n) {
        var r = n(256),
            i = n(257);
        t.exports = function (t, e) {
            return null != t && i(t, e, r);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return null != t && e in Object(t);
        };
    },
    function (t, e, n) {
        var r = n(38),
            i = n(37),
            o = n(2),
            a = n(54),
            u = n(56),
            c = n(25);
        t.exports = function (t, e, n) {
            for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
                var d = c(e[s]);
                if (!(l = null != t && n(t, d))) break;
                t = t[d];
            }
            return l || ++s != f
                ? l
                : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t));
        };
    },
    function (t, e, n) {
        var r = n(113),
            i = n(259),
            o = n(62),
            a = n(25);
        t.exports = function (t) {
            return o(t) ? r(a(t)) : i(t);
        };
    },
    function (t, e, n) {
        var r = n(61);
        t.exports = function (t) {
            return function (e) {
                return r(e, t);
            };
        };
    },
    function (t, e, n) {
        var r = n(114),
            i = n(10),
            o = n(115),
            a = Math.max;
        t.exports = function (t, e, n) {
            var u = null == t ? 0 : t.length;
            if (!u) return -1;
            var c = null == n ? 0 : o(n);
            return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c);
        };
    },
    function (t, e, n) {
        var r = n(64),
            i = 1 / 0,
            o = 1.7976931348623157e308;
        t.exports = function (t) {
            return t
                ? (t = r(t)) === i || t === -i
                    ? (t < 0 ? -1 : 1) * o
                    : t == t
                        ? t
                        : 0
                : 0 === t
                    ? t
                    : 0;
        };
    },
    function (t, e, n) {
        var r = n(263),
            i = /^\s+/;
        t.exports = function (t) {
            return t ? t.slice(0, r(t) + 1).replace(i, "") : t;
        };
    },
    function (t, e) {
        var n = /\s/;
        t.exports = function (t) {
            for (var e = t.length; e-- && n.test(t.charAt(e)););
            return e;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n;
            }
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (
                Symbol.iterator in Object(t) ||
                "[object Arguments]" === Object.prototype.toString.call(t)
            )
                return Array.from(t);
        };
    },
    function (t, e) {
        t.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.createElementState = I),
            (e.mergeActionState = b),
            (e.ixElements = void 0);
        var r = n(23),
            i = n(4),
            o = i.IX2EngineConstants,
            a = (o.HTML_ELEMENT, o.PLAIN_OBJECT),
            u = (o.ABSTRACT_NODE, o.CONFIG_X_VALUE),
            c = o.CONFIG_Y_VALUE,
            s = o.CONFIG_Z_VALUE,
            f = o.CONFIG_VALUE,
            l = o.CONFIG_X_UNIT,
            d = o.CONFIG_Y_UNIT,
            p = o.CONFIG_Z_UNIT,
            v = o.CONFIG_UNIT,
            h = i.IX2EngineActionTypes,
            E = h.IX2_SESSION_STOPPED,
            g = h.IX2_INSTANCE_ADDED,
            m = h.IX2_ELEMENT_STATE_CHANGED,
            y = {},
            _ = "refState";
        function I(t, e, n, i, o) {
            var u =
                n === a ? (0, r.getIn)(o, ["config", "target", "objectId"]) : null;
            return (0, r.mergeIn)(t, [i], { id: i, ref: e, refId: u, refType: n });
        }
        function b(t, e, n, i, o) {
            var a = (function (t) {
                var e = t.config;
                return T.reduce(function (t, n) {
                    var r = n[0],
                        i = n[1],
                        o = e[r],
                        a = e[i];
                    return null != o && null != a && (t[i] = a), t;
                }, {});
            })(o),
                u = [e, _, n];
            return (0, r.mergeIn)(t, u, i, a);
        }
        e.ixElements = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (e.type) {
                case E:
                    return y;
                case g:
                    var n = e.payload,
                        i = n.elementId,
                        o = n.element,
                        a = n.origin,
                        u = n.actionItem,
                        c = n.refType,
                        s = u.actionTypeId,
                        f = t;
                    return (
                        (0, r.getIn)(f, [i, o]) !== o && (f = I(f, o, c, i, u)),
                        b(f, i, s, a, u)
                    );
                case m:
                    var l = e.payload;
                    return b(t, l.elementId, l.actionTypeId, l.current, l.actionItem);
                default:
                    return t;
            }
        };
        var T = [
            [u, l],
            [c, d],
            [s, p],
            [f, v],
        ];
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.clearPlugin =
                e.renderPlugin =
                e.createPluginInstance =
                e.getPluginDestination =
                e.getPluginOrigin =
                e.getPluginDuration =
                e.getPluginConfig =
                void 0);
        e.getPluginConfig = function (t) {
            return t.value;
        };
        e.getPluginDuration = function (t, e) {
            if ("auto" !== e.config.duration) return null;
            var n = parseFloat(t.getAttribute("data-duration"));
            return n > 0
                ? 1e3 * n
                : 1e3 * parseFloat(t.getAttribute("data-default-duration"));
        };
        e.getPluginOrigin = function (t) {
            return t || { value: 0 };
        };
        e.getPluginDestination = function (t) {
            return { value: t.value };
        };
        e.createPluginInstance = function (t) {
            var e = window.digipants.require("lottie").createInstance(t);
            return e.stop(), e.setSubframe(!0), e;
        };
        e.renderPlugin = function (t, e, n) {
            if (t) {
                var r = e[n.actionTypeId].value / 100;
                t.goToFrame(t.frames * r);
            }
        };
        e.clearPlugin = function (t) {
            window.digipants.require("lottie").createInstance(t).stop();
        };
    },
    function (t, e, n) {
        "use strict";
        var r,
            i,
            o,
            a = n(1),
            u = a(n(17)),
            c = a(n(22)),
            s = n(1);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.getInstanceId = function () {
                return "i" + Et++;
            }),
            (e.getElementId = function (t, e) {
                for (var n in t) {
                    var r = t[n];
                    if (r && r.ref === e) return r.id;
                }
                return "e" + gt++;
            }),
            (e.reifyState = function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.events,
                    n = t.actionLists,
                    r = t.site,
                    i = (0, l.default)(
                        e,
                        function (t, e) {
                            var n = e.eventTypeId;
                            return t[n] || (t[n] = {}), (t[n][e.id] = e), t;
                        },
                        {}
                    ),
                    o = r && r.mediaQueries,
                    a = [];
                o
                    ? (a = o.map(function (t) {
                        return t.key;
                    }))
                    : ((o = []), console.warn("IX2 missing mediaQueries in site data"));
                return {
                    ixData: {
                        events: e,
                        actionLists: n,
                        eventTypeMap: i,
                        mediaQueries: o,
                        mediaQueryKeys: a,
                    },
                };
            }),
            (e.observeStore = function (t) {
                var e = t.store,
                    n = t.select,
                    r = t.onChange,
                    i = t.comparator,
                    o = void 0 === i ? mt : i,
                    a = e.getState,
                    u = (0, e.subscribe)(function () {
                        var t = n(a());
                        if (null == t) return void u();
                        o(t, c) || r((c = t), e);
                    }),
                    c = n(a());
                return u;
            }),
            (e.getAffectedElements = _t),
            (e.getComputedStyle = function (t) {
                var e = t.element,
                    n = t.actionItem;
                if (!m.IS_BROWSER_ENV) return {};
                switch (n.actionTypeId) {
                    case at:
                    case ut:
                    case ct:
                    case st:
                    case ft:
                        return window.getComputedStyle(e);
                    default:
                        return {};
                }
            }),
            (e.getInstanceOrigin = function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
                    o = r.actionTypeId;
                if ((0, g.isPluginType)(o)) return (0, g.getPluginOrigin)(o)(e[o]);
                switch (r.actionTypeId) {
                    case J:
                    case tt:
                    case et:
                    case nt:
                        return e[r.actionTypeId] || St[r.actionTypeId];
                    case it:
                        return bt(e[r.actionTypeId], r.config.filters);
                    case ot:
                        return Tt(e[r.actionTypeId], r.config.fontVariations);
                    case rt:
                        return { value: (0, f.default)(parseFloat(i(t, N)), 1) };
                    case at:
                        var a,
                            u,
                            c = i(t, D),
                            s = i(t, P);
                        return (
                            (a =
                                r.config.widthUnit === B
                                    ? It.test(c)
                                        ? parseFloat(c)
                                        : parseFloat(n.width)
                                    : (0, f.default)(parseFloat(c), parseFloat(n.width))),
                            (u =
                                r.config.heightUnit === B
                                    ? It.test(s)
                                        ? parseFloat(s)
                                        : parseFloat(n.height)
                                    : (0, f.default)(parseFloat(s), parseFloat(n.height))),
                            { widthValue: a, heightValue: u }
                        );
                    case ut:
                    case ct:
                    case st:
                        return (function (t) {
                            var e = t.element,
                                n = t.actionTypeId,
                                r = t.computedStyle,
                                i = t.getStyle,
                                o = pt[n],
                                a = i(e, o),
                                u = Lt.test(a) ? a : r[o],
                                c = (function (t, e) {
                                    var n = t.exec(e);
                                    return n ? n[1] : "";
                                })(Dt, u).split(H);
                            return {
                                rValue: (0, f.default)(parseInt(c[0], 10), 255),
                                gValue: (0, f.default)(parseInt(c[1], 10), 255),
                                bValue: (0, f.default)(parseInt(c[2], 10), 255),
                                aValue: (0, f.default)(parseFloat(c[3]), 1),
                            };
                        })({
                            element: t,
                            actionTypeId: r.actionTypeId,
                            computedStyle: n,
                            getStyle: i,
                        });
                    case ft:
                        return { value: (0, f.default)(i(t, U), n.display) };
                    case lt:
                        return e[r.actionTypeId] || { value: 0 };
                    default:
                        return;
                }
            }),
            (e.getDestinationValues = function (t) {
                var e = t.element,
                    n = t.actionItem,
                    r = t.elementApi;
                if ((0, g.isPluginType)(n.actionTypeId))
                    return (0, g.getPluginDestination)(n.actionTypeId)(n.config);
                switch (n.actionTypeId) {
                    case J:
                    case tt:
                    case et:
                    case nt:
                        var i = n.config,
                            o = i.xValue,
                            a = i.yValue,
                            u = i.zValue;
                        return { xValue: o, yValue: a, zValue: u };
                    case at:
                        var c = r.getStyle,
                            s = r.setStyle,
                            f = r.getProperty,
                            l = n.config,
                            d = l.widthUnit,
                            p = l.heightUnit,
                            v = n.config,
                            h = v.widthValue,
                            E = v.heightValue;
                        if (!m.IS_BROWSER_ENV) return { widthValue: h, heightValue: E };
                        if (d === B) {
                            var y = c(e, D);
                            s(e, D, ""), (h = f(e, "offsetWidth")), s(e, D, y);
                        }
                        if (p === B) {
                            var _ = c(e, P);
                            s(e, P, ""), (E = f(e, "offsetHeight")), s(e, P, _);
                        }
                        return { widthValue: h, heightValue: E };
                    case ut:
                    case ct:
                    case st:
                        var I = n.config,
                            b = I.rValue,
                            T = I.gValue,
                            w = I.bValue,
                            O = I.aValue;
                        return { rValue: b, gValue: T, bValue: w, aValue: O };
                    case it:
                        return n.config.filters.reduce(wt, {});
                    case ot:
                        return n.config.fontVariations.reduce(Ot, {});
                    default:
                        var A = n.config.value;
                        return { value: A };
                }
            }),
            (e.getRenderType = At),
            (e.getStyleProp = function (t, e) {
                return t === q ? e.replace("STYLE_", "").toLowerCase() : null;
            }),
            (e.renderHTMLElement = function (t, e, n, r, i, o, a, u, c) {
                switch (u) {
                    case K:
                        return (function (t, e, n, r, i) {
                            var o = Ct.map(function (t) {
                                var n = St[t],
                                    r = e[t] || {},
                                    i = r.xValue,
                                    o = void 0 === i ? n.xValue : i,
                                    a = r.yValue,
                                    u = void 0 === a ? n.yValue : a,
                                    c = r.zValue,
                                    s = void 0 === c ? n.zValue : c,
                                    f = r.xUnit,
                                    l = void 0 === f ? "" : f,
                                    d = r.yUnit,
                                    p = void 0 === d ? "" : d,
                                    v = r.zUnit,
                                    h = void 0 === v ? "" : v;
                                switch (t) {
                                    case J:
                                        return ""
                                            .concat(b, "(")
                                            .concat(o)
                                            .concat(l, ", ")
                                            .concat(u)
                                            .concat(p, ", ")
                                            .concat(s)
                                            .concat(h, ")");
                                    case tt:
                                        return ""
                                            .concat(T, "(")
                                            .concat(o)
                                            .concat(l, ", ")
                                            .concat(u)
                                            .concat(p, ", ")
                                            .concat(s)
                                            .concat(h, ")");
                                    case et:
                                        return ""
                                            .concat(w, "(")
                                            .concat(o)
                                            .concat(l, ") ")
                                            .concat(O, "(")
                                            .concat(u)
                                            .concat(p, ") ")
                                            .concat(A, "(")
                                            .concat(s)
                                            .concat(h, ")");
                                    case nt:
                                        return ""
                                            .concat(S, "(")
                                            .concat(o)
                                            .concat(l, ", ")
                                            .concat(u)
                                            .concat(p, ")");
                                    default:
                                        return "";
                                }
                            }).join(" "),
                                a = i.setStyle;
                            Pt(t, m.TRANSFORM_PREFIXED, i),
                                a(t, m.TRANSFORM_PREFIXED, o),
                                (u = r),
                                (c = n),
                                (s = u.actionTypeId),
                                (f = c.xValue),
                                (l = c.yValue),
                                (d = c.zValue),
                                ((s === J && void 0 !== d) ||
                                    (s === tt && void 0 !== d) ||
                                    (s === et && (void 0 !== f || void 0 !== l))) &&
                                a(t, m.TRANSFORM_STYLE_PREFIXED, x);
                            var u, c, s, f, l, d;
                        })(t, e, n, i, a);
                    case q:
                        return (function (t, e, n, r, i, o) {
                            var a = o.setStyle;
                            switch (r.actionTypeId) {
                                case at:
                                    var u = r.config,
                                        c = u.widthUnit,
                                        s = void 0 === c ? "" : c,
                                        f = u.heightUnit,
                                        d = void 0 === f ? "" : f,
                                        p = n.widthValue,
                                        v = n.heightValue;
                                    void 0 !== p &&
                                        (s === B && (s = "px"), Pt(t, D, o), a(t, D, p + s)),
                                        void 0 !== v &&
                                        (d === B && (d = "px"), Pt(t, P, o), a(t, P, v + d));
                                    break;
                                case it:
                                    !(function (t, e, n, r) {
                                        var i = (0, l.default)(
                                            e,
                                            function (t, e, r) {
                                                return ""
                                                    .concat(t, " ")
                                                    .concat(r, "(")
                                                    .concat(e)
                                                    .concat(Nt(r, n), ")");
                                            },
                                            ""
                                        ),
                                            o = r.setStyle;
                                        Pt(t, C, r), o(t, C, i);
                                    })(t, n, r.config, o);
                                    break;
                                case ot:
                                    !(function (t, e, n, r) {
                                        var i = (0, l.default)(
                                            e,
                                            function (t, e, n) {
                                                return t.push('"'.concat(n, '" ').concat(e)), t;
                                            },
                                            []
                                        ).join(", "),
                                            o = r.setStyle;
                                        Pt(t, L, r), o(t, L, i);
                                    })(t, n, r.config, o);
                                    break;
                                case ut:
                                case ct:
                                case st:
                                    var h = pt[r.actionTypeId],
                                        E = Math.round(n.rValue),
                                        g = Math.round(n.gValue),
                                        m = Math.round(n.bValue),
                                        y = n.aValue;
                                    Pt(t, h, o),
                                        a(
                                            t,
                                            h,
                                            y >= 1
                                                ? "rgb(".concat(E, ",").concat(g, ",").concat(m, ")")
                                                : "rgba("
                                                    .concat(E, ",")
                                                    .concat(g, ",")
                                                    .concat(m, ",")
                                                    .concat(y, ")")
                                        );
                                    break;
                                default:
                                    var _ = r.config.unit,
                                        I = void 0 === _ ? "" : _;
                                    Pt(t, i, o), a(t, i, n.value + I);
                            }
                        })(t, 0, n, i, o, a);
                    case Q:
                        return (function (t, e, n) {
                            var r = n.setStyle;
                            switch (e.actionTypeId) {
                                case ft:
                                    var i = e.config.value;
                                    return void (i === R && m.IS_BROWSER_ENV
                                        ? r(t, U, m.FLEX_PREFIXED)
                                        : r(t, U, i));
                            }
                        })(t, i, a);
                    case $:
                        var s = i.actionTypeId;
                        if ((0, g.isPluginType)(s)) return (0, g.renderPlugin)(s)(c, e, i);
                }
            }),
            (e.clearAllStyles = function (t) {
                var e = t.store,
                    n = t.elementApi,
                    r = e.getState().ixData,
                    i = r.events,
                    o = void 0 === i ? {} : i,
                    a = r.actionLists,
                    u = void 0 === a ? {} : a;
                Object.keys(o).forEach(function (t) {
                    var e = o[t],
                        r = e.action.config,
                        i = r.actionListId,
                        a = u[i];
                    a && jt({ actionList: a, event: e, elementApi: n });
                }),
                    Object.keys(u).forEach(function (t) {
                        jt({ actionList: u[t], elementApi: n });
                    });
            }),
            (e.cleanupHTMLElement = function (t, e, n) {
                var r = n.setStyle,
                    i = n.getStyle,
                    o = e.actionTypeId;
                if (o === at) {
                    var a = e.config;
                    a.widthUnit === B && r(t, D, ""), a.heightUnit === B && r(t, P, "");
                }
                i(t, W) && kt({ effect: Mt, actionTypeId: o, elementApi: n })(t);
            }),
            (e.getMaxDurationItemIndex = Xt),
            (e.getActionListProgress = function (t, e) {
                var n = t.actionItemGroups,
                    r = t.useFirstGroupAsInitialState,
                    i = e.actionItem,
                    o = e.verboseTimeElapsed,
                    a = void 0 === o ? 0 : o,
                    u = 0,
                    c = 0;
                return (
                    n.forEach(function (t, e) {
                        if (!r || 0 !== e) {
                            var n = t.actionItems,
                                o = n[Xt(n)],
                                s = o.config,
                                f = o.actionTypeId;
                            i.id === o.id && (c = u + a);
                            var l = At(f) === Q ? 0 : s.duration;
                            u += s.delay + l;
                        }
                    }),
                    u > 0 ? (0, E.optimizeFloat)(c / u) : 0
                );
            }),
            (e.reduceListToGroup = function (t) {
                var e = t.actionList,
                    n = t.actionItemId,
                    r = t.rawData,
                    i = e.actionItemGroups,
                    o = e.continuousParameterGroups,
                    a = [],
                    u = function (t) {
                        return (
                            a.push((0, p.mergeIn)(t, ["config"], { delay: 0, duration: 0 })),
                            t.id === n
                        );
                    };
                return (
                    i &&
                    i.some(function (t) {
                        return t.actionItems.some(u);
                    }),
                    o &&
                    o.some(function (t) {
                        return t.continuousActionGroups.some(function (t) {
                            return t.actionItems.some(u);
                        });
                    }),
                    (0, p.setIn)(
                        r,
                        ["actionLists"],
                        (0, c.default)({}, e.id, {
                            id: e.id,
                            actionItemGroups: [{ actionItems: a }],
                        })
                    )
                );
            }),
            (e.shouldNamespaceEventParameter = function (t, e) {
                var n = e.basedOn;
                return (
                    (t === v.EventTypeConsts.SCROLLING_IN_VIEW &&
                        (n === v.EventBasedOn.ELEMENT || null == n)) ||
                    (t === v.EventTypeConsts.MOUSE_MOVE && n === v.EventBasedOn.ELEMENT)
                );
            }),
            (e.getNamespacedParameterId = function (t, e) {
                return t + z + e;
            }),
            (e.shouldAllowMediaQuery = function (t, e) {
                if (null == e) return !0;
                return -1 !== t.indexOf(e);
            }),
            (e.mediaQueriesEqual = function (t, e) {
                return (0, h.default)(t && t.sort(), e && e.sort());
            }),
            (e.stringifyTarget = function (t) {
                if ("string" == typeof t) return t;
                var e = t.id,
                    n = void 0 === e ? "" : e,
                    r = t.selector,
                    i = void 0 === r ? "" : r,
                    o = t.useEventTarget;
                return n + Y + i + Y + (void 0 === o ? "" : o);
            }),
            Object.defineProperty(e, "shallowEqual", {
                enumerable: !0,
                get: function () {
                    return h.default;
                },
            }),
            (e.getItemConfigByKey = void 0);
        var f = s(n(270)),
            l = s(n(271)),
            d = s(n(277)),
            p = n(23),
            v = n(4),
            h = s(n(279)),
            E = n(118),
            g = n(120),
            m = n(48),
            y = v.IX2EngineConstants,
            _ = y.BACKGROUND,
            I = y.TRANSFORM,
            b = y.TRANSLATE_3D,
            T = y.SCALE_3D,
            w = y.ROTATE_X,
            O = y.ROTATE_Y,
            A = y.ROTATE_Z,
            S = y.SKEW,
            x = y.PRESERVE_3D,
            R = y.FLEX,
            N = y.OPACITY,
            C = y.FILTER,
            L = y.FONT_VARIATION_SETTINGS,
            D = y.WIDTH,
            P = y.HEIGHT,
            M = y.BACKGROUND_COLOR,
            j = y.BORDER_COLOR,
            F = y.COLOR,
            k = y.CHILDREN,
            G = y.IMMEDIATE_CHILDREN,
            X = y.SIBLINGS,
            V = y.PARENT,
            U = y.DISPLAY,
            W = y.WILL_CHANGE,
            B = y.AUTO,
            H = y.COMMA_DELIMITER,
            z = y.COLON_DELIMITER,
            Y = y.BAR_DELIMITER,
            K = y.RENDER_TRANSFORM,
            Q = y.RENDER_GENERAL,
            q = y.RENDER_STYLE,
            $ = y.RENDER_PLUGIN,
            Z = v.ActionTypeConsts,
            J = Z.TRANSFORM_MOVE,
            tt = Z.TRANSFORM_SCALE,
            et = Z.TRANSFORM_ROTATE,
            nt = Z.TRANSFORM_SKEW,
            rt = Z.STYLE_OPACITY,
            it = Z.STYLE_FILTER,
            ot = Z.STYLE_FONT_VARIATION,
            at = Z.STYLE_SIZE,
            ut = Z.STYLE_BACKGROUND_COLOR,
            ct = Z.STYLE_BORDER,
            st = Z.STYLE_TEXT_COLOR,
            ft = Z.GENERAL_DISPLAY,
            lt = "OBJECT_VALUE",
            dt = function (t) {
                return t.trim();
            },
            pt = Object.freeze(
                ((r = {}),
                    (0, c.default)(r, ut, M),
                    (0, c.default)(r, ct, j),
                    (0, c.default)(r, st, F),
                    r)
            ),
            vt = Object.freeze(
                ((i = {}),
                    (0, c.default)(i, m.TRANSFORM_PREFIXED, I),
                    (0, c.default)(i, M, _),
                    (0, c.default)(i, N, N),
                    (0, c.default)(i, C, C),
                    (0, c.default)(i, D, D),
                    (0, c.default)(i, P, P),
                    (0, c.default)(i, L, L),
                    i)
            ),
            ht = {},
            Et = 1;
        var gt = 1;
        var mt = function (t, e) {
            return t === e;
        };
        function yt(t) {
            var e = (0, u.default)(t);
            return "string" === e
                ? { id: t }
                : null != t && "object" === e
                    ? {
                        id: t.id,
                        objectId: t.objectId,
                        selector: t.selector,
                        selectorGuids: t.selectorGuids,
                        appliesTo: t.appliesTo,
                        useEventTarget: t.useEventTarget,
                    }
                    : {};
        }
        function _t(t) {
            var e,
                n,
                r,
                i = t.config,
                o = t.event,
                a = t.eventTarget,
                u = t.elementRoot,
                c = t.elementApi;
            if (!c) throw new Error("IX2 missing elementApi");
            var s = i.targets;
            if (Array.isArray(s) && s.length > 0)
                return s.reduce(function (t, e) {
                    return t.concat(
                        _t({
                            config: { target: e },
                            event: o,
                            eventTarget: a,
                            elementRoot: u,
                            elementApi: c,
                        })
                    );
                }, []);
            var f = c.getValidDocument,
                l = c.getQuerySelector,
                d = c.queryDocument,
                p = c.getChildElements,
                h = c.getSiblingElements,
                E = c.matchSelector,
                g = c.elementContains,
                y = c.isSiblingNode,
                _ = i.target;
            if (!_) return [];
            var I = yt(_),
                b = I.id,
                T = I.objectId,
                w = I.selector,
                O = I.selectorGuids,
                A = I.appliesTo,
                S = I.useEventTarget;
            if (T) return [ht[T] || (ht[T] = {})];
            if (A === v.EventAppliesTo.PAGE) {
                var x = f(b);
                return x ? [x] : [];
            }
            var R,
                N,
                C,
                L =
                    (null !==
                        (e =
                            null == o
                                ? void 0
                                : null === (n = o.action) || void 0 === n
                                    ? void 0
                                    : null === (r = n.config) || void 0 === r
                                        ? void 0
                                        : r.affectedElements) && void 0 !== e
                        ? e
                        : {})[b || w] || {},
                D = Boolean(L.id || L.selector),
                P = o && l(yt(o.target));
            if (
                (D
                    ? ((R = L.limitAffectedElements), (N = P), (C = l(L)))
                    : (N = C = l({ id: b, selector: w, selectorGuids: O })),
                    o && S)
            ) {
                var M = a && (C || !0 === S) ? [a] : d(P);
                if (C) {
                    if (S === V)
                        return d(C).filter(function (t) {
                            return M.some(function (e) {
                                return g(t, e);
                            });
                        });
                    if (S === k)
                        return d(C).filter(function (t) {
                            return M.some(function (e) {
                                return g(e, t);
                            });
                        });
                    if (S === X)
                        return d(C).filter(function (t) {
                            return M.some(function (e) {
                                return y(e, t);
                            });
                        });
                }
                return M;
            }
            return null == N || null == C
                ? []
                : m.IS_BROWSER_ENV && u
                    ? d(C).filter(function (t) {
                        return u.contains(t);
                    })
                    : R === k
                        ? d(N, C)
                        : R === G
                            ? p(d(N)).filter(E(C))
                            : R === X
                                ? h(d(N)).filter(E(C))
                                : d(C);
        }
        var It = /px/,
            bt = function (t, e) {
                return e.reduce(function (t, e) {
                    return null == t[e.type] && (t[e.type] = xt[e.type]), t;
                }, t || {});
            },
            Tt = function (t, e) {
                return e.reduce(function (t, e) {
                    return (
                        null == t[e.type] &&
                        (t[e.type] = Rt[e.type] || e.defaultValue || 0),
                        t
                    );
                }, t || {});
            };
        var wt = function (t, e) {
            return e && (t[e.type] = e.value || 0), t;
        },
            Ot = function (t, e) {
                return e && (t[e.type] = e.value || 0), t;
            };
        function At(t) {
            return /^TRANSFORM_/.test(t)
                ? K
                : /^STYLE_/.test(t)
                    ? q
                    : /^GENERAL_/.test(t)
                        ? Q
                        : /^PLUGIN_/.test(t)
                            ? $
                            : void 0;
        }
        e.getItemConfigByKey = function (t, e, n) {
            if ((0, g.isPluginType)(t)) return (0, g.getPluginConfig)(t)(n, e);
            switch (t) {
                case it:
                    var r = (0, d.default)(n.filters, function (t) {
                        return t.type === e;
                    });
                    return r ? r.value : 0;
                case ot:
                    var i = (0, d.default)(n.fontVariations, function (t) {
                        return t.type === e;
                    });
                    return i ? i.value : 0;
                default:
                    return n[e];
            }
        };
        var St =
            ((o = {}),
                (0, c.default)(
                    o,
                    J,
                    Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })
                ),
                (0, c.default)(
                    o,
                    tt,
                    Object.freeze({ xValue: 1, yValue: 1, zValue: 1 })
                ),
                (0, c.default)(
                    o,
                    et,
                    Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })
                ),
                (0, c.default)(o, nt, Object.freeze({ xValue: 0, yValue: 0 })),
                o),
            xt = Object.freeze({
                blur: 0,
                "hue-rotate": 0,
                invert: 0,
                grayscale: 0,
                saturate: 100,
                sepia: 0,
                contrast: 100,
                brightness: 100,
            }),
            Rt = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
            Nt = function (t, e) {
                var n = (0, d.default)(e.filters, function (e) {
                    return e.type === t;
                });
                if (n && n.unit) return n.unit;
                switch (t) {
                    case "blur":
                        return "px";
                    case "hue-rotate":
                        return "deg";
                    default:
                        return "%";
                }
            },
            Ct = Object.keys(St);
        var Lt = /^rgb/,
            Dt = RegExp("rgba?".concat("\\(([^)]+)\\)"));
        function Pt(t, e, n) {
            if (m.IS_BROWSER_ENV) {
                var r = vt[e];
                if (r) {
                    var i = n.getStyle,
                        o = n.setStyle,
                        a = i(t, W);
                    if (a) {
                        var u = a.split(H).map(dt);
                        -1 === u.indexOf(r) && o(t, W, u.concat(r).join(H));
                    } else o(t, W, r);
                }
            }
        }
        function Mt(t, e, n) {
            if (m.IS_BROWSER_ENV) {
                var r = vt[e];
                if (r) {
                    var i = n.getStyle,
                        o = n.setStyle,
                        a = i(t, W);
                    a &&
                        -1 !== a.indexOf(r) &&
                        o(
                            t,
                            W,
                            a
                                .split(H)
                                .map(dt)
                                .filter(function (t) {
                                    return t !== r;
                                })
                                .join(H)
                        );
                }
            }
        }
        function jt(t) {
            var e = t.actionList,
                n = void 0 === e ? {} : e,
                r = t.event,
                i = t.elementApi,
                o = n.actionItemGroups,
                a = n.continuousParameterGroups;
            o &&
                o.forEach(function (t) {
                    Ft({ actionGroup: t, event: r, elementApi: i });
                }),
                a &&
                a.forEach(function (t) {
                    t.continuousActionGroups.forEach(function (t) {
                        Ft({ actionGroup: t, event: r, elementApi: i });
                    });
                });
        }
        function Ft(t) {
            var e = t.actionGroup,
                n = t.event,
                r = t.elementApi;
            e.actionItems.forEach(function (t) {
                var e,
                    i = t.actionTypeId,
                    o = t.config;
                (e = (0, g.isPluginType)(i)
                    ? (0, g.clearPlugin)(i)
                    : kt({ effect: Gt, actionTypeId: i, elementApi: r })),
                    _t({ config: o, event: n, elementApi: r }).forEach(e);
            });
        }
        var kt = function (t) {
            var e = t.effect,
                n = t.actionTypeId,
                r = t.elementApi;
            return function (t) {
                switch (n) {
                    case J:
                    case tt:
                    case et:
                    case nt:
                        e(t, m.TRANSFORM_PREFIXED, r);
                        break;
                    case it:
                        e(t, C, r);
                        break;
                    case ot:
                        e(t, L, r);
                        break;
                    case rt:
                        e(t, N, r);
                        break;
                    case at:
                        e(t, D, r), e(t, P, r);
                        break;
                    case ut:
                    case ct:
                    case st:
                        e(t, pt[n], r);
                        break;
                    case ft:
                        e(t, U, r);
                }
            };
        };
        function Gt(t, e, n) {
            var r = n.setStyle;
            Mt(t, e, n),
                r(t, e, ""),
                e === m.TRANSFORM_PREFIXED && r(t, m.TRANSFORM_STYLE_PREFIXED, "");
        }
        function Xt(t) {
            var e = 0,
                n = 0;
            return (
                t.forEach(function (t, r) {
                    var i = t.config,
                        o = i.delay + i.duration;
                    o >= e && ((e = o), (n = r));
                }),
                n
            );
        }
    },
    function (t, e) {
        t.exports = function (t, e) {
            return null == t || t != t ? e : t;
        };
    },
    function (t, e, n) {
        var r = n(272),
            i = n(121),
            o = n(10),
            a = n(276),
            u = n(2);
        t.exports = function (t, e, n) {
            var c = u(t) ? r : a,
                s = arguments.length < 3;
            return c(t, o(e, 4), n, s, i);
        };
    },
    function (t, e) {
        t.exports = function (t, e, n, r) {
            var i = -1,
                o = null == t ? 0 : t.length;
            for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
            return n;
        };
    },
    function (t, e, n) {
        var r = n(274)();
        t.exports = r;
    },
    function (t, e) {
        t.exports = function (t) {
            return function (e, n, r) {
                for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
                    var c = a[t ? u : ++i];
                    if (!1 === n(o[c], c, o)) break;
                }
                return e;
            };
        };
    },
    function (t, e, n) {
        var r = n(16);
        t.exports = function (t, e) {
            return function (n, i) {
                if (null == n) return n;
                if (!r(n)) return t(n, i);
                for (
                    var o = n.length, a = e ? o : -1, u = Object(n);
                    (e ? a-- : ++a < o) && !1 !== i(u[a], a, u);

                );
                return n;
            };
        };
    },
    function (t, e) {
        t.exports = function (t, e, n, r, i) {
            return (
                i(t, function (t, i, o) {
                    n = r ? ((r = !1), t) : e(n, t, i, o);
                }),
                n
            );
        };
    },
    function (t, e, n) {
        var r = n(96)(n(278));
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(114),
            i = n(10),
            o = n(115),
            a = Math.max,
            u = Math.min;
        t.exports = function (t, e, n) {
            var c = null == t ? 0 : t.length;
            if (!c) return -1;
            var s = c - 1;
            return (
                void 0 !== n && ((s = o(n)), (s = n < 0 ? a(c + s, 0) : u(s, c - 1))),
                r(t, i(e, 3), s, !0)
            );
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(1)(n(17));
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var i = Object.prototype.hasOwnProperty;
        function o(t, e) {
            return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e;
        }
        var a = function (t, e) {
            if (o(t, e)) return !0;
            if (
                "object" !== (0, r.default)(t) ||
                null === t ||
                "object" !== (0, r.default)(e) ||
                null === e
            )
                return !1;
            var n = Object.keys(t),
                a = Object.keys(e);
            if (n.length !== a.length) return !1;
            for (var u = 0; u < n.length; u++)
                if (!i.call(e, n[u]) || !o(t[n[u]], e[n[u]])) return !1;
            return !0;
        };
        e.default = a;
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ixInstances = void 0);
        var r = n(4),
            i = n(14),
            o = n(23),
            a = r.IX2EngineActionTypes,
            u = a.IX2_RAW_DATA_IMPORTED,
            c = a.IX2_SESSION_STOPPED,
            s = a.IX2_INSTANCE_ADDED,
            f = a.IX2_INSTANCE_STARTED,
            l = a.IX2_INSTANCE_REMOVED,
            d = a.IX2_ANIMATION_FRAME_CHANGED,
            p = i.IX2EasingUtils,
            v = p.optimizeFloat,
            h = p.applyEasing,
            E = p.createBezierEasing,
            g = r.IX2EngineConstants.RENDER_GENERAL,
            m = i.IX2VanillaUtils,
            y = m.getItemConfigByKey,
            _ = m.getRenderType,
            I = m.getStyleProp,
            b = function (t, e) {
                var n = t.position,
                    r = t.parameterId,
                    i = t.actionGroups,
                    a = t.destinationKeys,
                    u = t.smoothing,
                    c = t.restingValue,
                    s = t.actionTypeId,
                    f = t.customEasingFn,
                    l = t.skipMotion,
                    d = t.skipToValue,
                    p = e.payload.parameters,
                    E = Math.max(1 - u, 0.01),
                    g = p[r];
                null == g && ((E = 1), (g = c));
                var m,
                    _,
                    I,
                    b,
                    T = Math.max(g, 0) || 0,
                    w = v(T - n),
                    O = l ? d : v(n + w * E),
                    A = 100 * O;
                if (O === n && t.current) return t;
                for (var S = 0, x = i.length; S < x; S++) {
                    var R = i[S],
                        N = R.keyframe,
                        C = R.actionItems;
                    if ((0 === S && (m = C[0]), A >= N)) {
                        m = C[0];
                        var L = i[S + 1],
                            D = L && A !== N;
                        (_ = D ? L.actionItems[0] : null),
                            D && ((I = N / 100), (b = (L.keyframe - N) / 100));
                    }
                }
                var P = {};
                if (m && !_)
                    for (var M = 0, j = a.length; M < j; M++) {
                        var F = a[M];
                        P[F] = y(s, F, m.config);
                    }
                else if (m && _ && void 0 !== I && void 0 !== b)
                    for (
                        var k = (O - I) / b,
                        G = m.config.easing,
                        X = h(G, k, f),
                        V = 0,
                        U = a.length;
                        V < U;
                        V++
                    ) {
                        var W = a[V],
                            B = y(s, W, m.config),
                            H = (y(s, W, _.config) - B) * X + B;
                        P[W] = H;
                    }
                return (0, o.merge)(t, { position: O, current: P });
            },
            T = function (t, e) {
                var n = t,
                    r = n.active,
                    i = n.origin,
                    a = n.start,
                    u = n.immediate,
                    c = n.renderType,
                    s = n.verbose,
                    f = n.actionItem,
                    l = n.destination,
                    d = n.destinationKeys,
                    p = n.pluginDuration,
                    E = n.instanceDelay,
                    m = n.customEasingFn,
                    y = n.skipMotion,
                    _ = f.config.easing,
                    I = f.config,
                    b = I.duration,
                    T = I.delay;
                null != p && (b = p),
                    (T = null != E ? E : T),
                    c === g ? (b = 0) : (u || y) && (b = T = 0);
                var w = e.payload.now;
                if (r && i) {
                    var O = w - (a + T);
                    if (s) {
                        var A = w - a,
                            S = b + T,
                            x = v(Math.min(Math.max(0, A / S), 1));
                        t = (0, o.set)(t, "verboseTimeElapsed", S * x);
                    }
                    if (O < 0) return t;
                    var R = v(Math.min(Math.max(0, O / b), 1)),
                        N = h(_, R, m),
                        C = {},
                        L = null;
                    return (
                        d.length &&
                        (L = d.reduce(function (t, e) {
                            var n = l[e],
                                r = parseFloat(i[e]) || 0,
                                o = (parseFloat(n) - r) * N + r;
                            return (t[e] = o), t;
                        }, {})),
                        (C.current = L),
                        (C.position = R),
                        1 === R && ((C.active = !1), (C.complete = !0)),
                        (0, o.merge)(t, C)
                    );
                }
                return t;
            };
        e.ixInstances = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : Object.freeze({}),
                e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case u:
                    return e.payload.ixInstances || Object.freeze({});
                case c:
                    return Object.freeze({});
                case s:
                    var n = e.payload,
                        r = n.instanceId,
                        i = n.elementId,
                        a = n.actionItem,
                        p = n.eventId,
                        v = n.eventTarget,
                        h = n.eventStateKey,
                        g = n.actionListId,
                        m = n.groupIndex,
                        y = n.isCarrier,
                        w = n.origin,
                        O = n.destination,
                        A = n.immediate,
                        S = n.verbose,
                        x = n.continuous,
                        R = n.parameterId,
                        N = n.actionGroups,
                        C = n.smoothing,
                        L = n.restingValue,
                        D = n.pluginInstance,
                        P = n.pluginDuration,
                        M = n.instanceDelay,
                        j = n.skipMotion,
                        F = n.skipToValue,
                        k = a.actionTypeId,
                        G = _(k),
                        X = I(G, k),
                        V = Object.keys(O).filter(function (t) {
                            return null != O[t];
                        }),
                        U = a.config.easing;
                    return (0, o.set)(t, r, {
                        id: r,
                        elementId: i,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: w,
                        destination: O,
                        destinationKeys: V,
                        immediate: A,
                        verbose: S,
                        current: null,
                        actionItem: a,
                        actionTypeId: k,
                        eventId: p,
                        eventTarget: v,
                        eventStateKey: h,
                        actionListId: g,
                        groupIndex: m,
                        renderType: G,
                        isCarrier: y,
                        styleProp: X,
                        continuous: x,
                        parameterId: R,
                        actionGroups: N,
                        smoothing: C,
                        restingValue: L,
                        pluginInstance: D,
                        pluginDuration: P,
                        instanceDelay: M,
                        skipMotion: j,
                        skipToValue: F,
                        customEasingFn: Array.isArray(U) && 4 === U.length ? E(U) : void 0,
                    });
                case f:
                    var W = e.payload,
                        B = W.instanceId,
                        H = W.time;
                    return (0, o.mergeIn)(t, [B], { active: !0, complete: !1, start: H });
                case l:
                    var z = e.payload.instanceId;
                    if (!t[z]) return t;
                    for (
                        var Y = {}, K = Object.keys(t), Q = K.length, q = 0;
                        q < Q;
                        q++
                    ) {
                        var $ = K[q];
                        $ !== z && (Y[$] = t[$]);
                    }
                    return Y;
                case d:
                    for (
                        var Z = t, J = Object.keys(t), tt = J.length, et = 0;
                        et < tt;
                        et++
                    ) {
                        var nt = J[et],
                            rt = t[nt],
                            it = rt.continuous ? b : T;
                        Z = (0, o.set)(Z, nt, it(rt, e));
                    }
                    return Z;
                default:
                    return t;
            }
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ixParameters = void 0);
        var r = n(4).IX2EngineActionTypes,
            i = r.IX2_RAW_DATA_IMPORTED,
            o = r.IX2_SESSION_STOPPED,
            a = r.IX2_PARAMETER_CHANGED;
        e.ixParameters = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case i:
                    return e.payload.ixParameters || {};
                case o:
                    return {};
                case a:
                    var n = e.payload,
                        r = n.key,
                        u = n.value;
                    return (t[r] = u), t;
                default:
                    return t;
            }
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            if (null == t) return {};
            var n,
                r,
                i = {},
                o = Object.keys(t);
            for (r = 0; r < o.length; r++)
                (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
        };
    },
    function (t, e, n) {
        var r = n(57),
            i = n(59),
            o = n(16),
            a = n(284),
            u = n(285),
            c = "[object Map]",
            s = "[object Set]";
        t.exports = function (t) {
            if (null == t) return 0;
            if (o(t)) return a(t) ? u(t) : t.length;
            var e = i(t);
            return e == c || e == s ? t.size : r(t).length;
        };
    },
    function (t, e, n) {
        var r = n(15),
            i = n(2),
            o = n(12),
            a = "[object String]";
        t.exports = function (t) {
            return "string" == typeof t || (!i(t) && o(t) && r(t) == a);
        };
    },
    function (t, e, n) {
        var r = n(286),
            i = n(287),
            o = n(288);
        t.exports = function (t) {
            return i(t) ? o(t) : r(t);
        };
    },
    function (t, e, n) {
        var r = n(113)("length");
        t.exports = r;
    },
    function (t, e) {
        var n = RegExp(
            "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
        );
        t.exports = function (t) {
            return n.test(t);
        };
    },
    function (t, e) {
        var n = "[\\ud800-\\udfff]",
            r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            i = "\\ud83c[\\udffb-\\udfff]",
            o = "[^\\ud800-\\udfff]",
            a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            c = "(?:" + r + "|" + i + ")" + "?",
            s =
                "[\\ufe0e\\ufe0f]?" +
                c +
                ("(?:\\u200d(?:" +
                    [o, a, u].join("|") +
                    ")[\\ufe0e\\ufe0f]?" +
                    c +
                    ")*"),
            f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
            l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
        t.exports = function (t) {
            for (var e = (l.lastIndex = 0); l.test(t);) ++e;
            return e;
        };
    },
    function (t, e, n) {
        var r = n(10),
            i = n(290),
            o = n(291);
        t.exports = function (t, e) {
            return o(t, i(r(e)));
        };
    },
    function (t, e) {
        var n = "Expected a function";
        t.exports = function (t) {
            if ("function" != typeof t) throw new TypeError(n);
            return function () {
                var e = arguments;
                switch (e.length) {
                    case 0:
                        return !t.call(this);
                    case 1:
                        return !t.call(this, e[0]);
                    case 2:
                        return !t.call(this, e[0], e[1]);
                    case 3:
                        return !t.call(this, e[0], e[1], e[2]);
                }
                return !t.apply(this, e);
            };
        };
    },
    function (t, e, n) {
        var r = n(112),
            i = n(10),
            o = n(292),
            a = n(295);
        t.exports = function (t, e) {
            if (null == t) return {};
            var n = r(a(t), function (t) {
                return [t];
            });
            return (
                (e = i(e)),
                o(t, n, function (t, n) {
                    return e(t, n[0]);
                })
            );
        };
    },
    function (t, e, n) {
        var r = n(61),
            i = n(293),
            o = n(38);
        t.exports = function (t, e, n) {
            for (var a = -1, u = e.length, c = {}; ++a < u;) {
                var s = e[a],
                    f = r(t, s);
                n(f, s) && i(c, o(s, t), f);
            }
            return c;
        };
    },
    function (t, e, n) {
        var r = n(294),
            i = n(38),
            o = n(54),
            a = n(8),
            u = n(25);
        t.exports = function (t, e, n, c) {
            if (!a(t)) return t;
            for (
                var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t;
                null != d && ++s < f;

            ) {
                var p = u(e[s]),
                    v = n;
                if ("__proto__" === p || "constructor" === p || "prototype" === p)
                    return t;
                if (s != l) {
                    var h = d[p];
                    void 0 === (v = c ? c(h, p, d) : void 0) &&
                        (v = a(h) ? h : o(e[s + 1]) ? [] : {});
                }
                r(d, p, v), (d = d[p]);
            }
            return t;
        };
    },
    function (t, e, n) {
        var r = n(124),
            i = n(49),
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, n) {
            var a = t[e];
            (o.call(t, e) && i(a, n) && (void 0 !== n || e in t)) || r(t, e, n);
        };
    },
    function (t, e, n) {
        var r = n(103),
            i = n(296),
            o = n(298);
        t.exports = function (t) {
            return r(t, o, i);
        };
    },
    function (t, e, n) {
        var r = n(52),
            i = n(297),
            o = n(104),
            a = n(105),
            u = Object.getOwnPropertySymbols
                ? function (t) {
                    for (var e = []; t;) r(e, o(t)), (t = i(t));
                    return e;
                }
                : a;
        t.exports = u;
    },
    function (t, e, n) {
        var r = n(108)(Object.getPrototypeOf, Object);
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(106),
            i = n(299),
            o = n(16);
        t.exports = function (t) {
            return o(t) ? r(t, !0) : i(t);
        };
    },
    function (t, e, n) {
        var r = n(8),
            i = n(58),
            o = n(300),
            a = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (!r(t)) return o(t);
            var e = i(t),
                n = [];
            for (var u in t)
                ("constructor" != u || (!e && a.call(t, u))) && n.push(u);
            return n;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = [];
            if (null != t) for (var n in Object(t)) e.push(n);
            return e;
        };
    },
    function (t, e, n) {
        var r = n(57),
            i = n(59),
            o = n(37),
            a = n(2),
            u = n(16),
            c = n(53),
            s = n(58),
            f = n(55),
            l = "[object Map]",
            d = "[object Set]",
            p = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (null == t) return !0;
            if (
                u(t) &&
                (a(t) ||
                    "string" == typeof t ||
                    "function" == typeof t.splice ||
                    c(t) ||
                    f(t) ||
                    o(t))
            )
                return !t.length;
            var e = i(t);
            if (e == l || e == d) return !t.size;
            if (s(t)) return !r(t).length;
            for (var n in t) if (p.call(t, n)) return !1;
            return !0;
        };
    },
    function (t, e, n) {
        var r = n(124),
            i = n(122),
            o = n(10);
        t.exports = function (t, e) {
            var n = {};
            return (
                (e = o(e, 3)),
                i(t, function (t, i, o) {
                    r(n, i, e(t, i, o));
                }),
                n
            );
        };
    },
    function (t, e, n) {
        var r = n(304),
            i = n(121),
            o = n(305),
            a = n(2);
        t.exports = function (t, e) {
            return (a(t) ? r : i)(t, o(e));
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (
                var n = -1, r = null == t ? 0 : t.length;
                ++n < r && !1 !== e(t[n], n, t);

            );
            return t;
        };
    },
    function (t, e, n) {
        var r = n(63);
        t.exports = function (t) {
            return "function" == typeof t ? t : r;
        };
    },
    function (t, e, n) {
        var r = n(307),
            i = n(8),
            o = "Expected a function";
        t.exports = function (t, e, n) {
            var a = !0,
                u = !0;
            if ("function" != typeof t) throw new TypeError(o);
            return (
                i(n) &&
                ((a = "leading" in n ? !!n.leading : a),
                    (u = "trailing" in n ? !!n.trailing : u)),
                r(t, e, { leading: a, maxWait: e, trailing: u })
            );
        };
    },
    function (t, e, n) {
        var r = n(8),
            i = n(308),
            o = n(64),
            a = "Expected a function",
            u = Math.max,
            c = Math.min;
        t.exports = function (t, e, n) {
            var s,
                f,
                l,
                d,
                p,
                v,
                h = 0,
                E = !1,
                g = !1,
                m = !0;
            if ("function" != typeof t) throw new TypeError(a);
            function y(e) {
                var n = s,
                    r = f;
                return (s = f = void 0), (h = e), (d = t.apply(r, n));
            }
            function _(t) {
                var n = t - v;
                return void 0 === v || n >= e || n < 0 || (g && t - h >= l);
            }
            function I() {
                var t = i();
                if (_(t)) return b(t);
                p = setTimeout(
                    I,
                    (function (t) {
                        var n = e - (t - v);
                        return g ? c(n, l - (t - h)) : n;
                    })(t)
                );
            }
            function b(t) {
                return (p = void 0), m && s ? y(t) : ((s = f = void 0), d);
            }
            function T() {
                var t = i(),
                    n = _(t);
                if (((s = arguments), (f = this), (v = t), n)) {
                    if (void 0 === p)
                        return (function (t) {
                            return (h = t), (p = setTimeout(I, e)), E ? y(t) : d;
                        })(v);
                    if (g) return clearTimeout(p), (p = setTimeout(I, e)), y(v);
                }
                return void 0 === p && (p = setTimeout(I, e)), d;
            }
            return (
                (e = o(e) || 0),
                r(n) &&
                ((E = !!n.leading),
                    (l = (g = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l),
                    (m = "trailing" in n ? !!n.trailing : m)),
                (T.cancel = function () {
                    void 0 !== p && clearTimeout(p), (h = 0), (s = v = f = p = void 0);
                }),
                (T.flush = function () {
                    return void 0 === p ? d : b(i());
                }),
                T
            );
        };
    },
    function (t, e, n) {
        var r = n(6);
        t.exports = function () {
            return r.Date.now();
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(1)(n(17));
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.setStyle = function (t, e, n) {
                t.style[e] = n;
            }),
            (e.getStyle = function (t, e) {
                return t.style[e];
            }),
            (e.getProperty = function (t, e) {
                return t[e];
            }),
            (e.matchSelector = function (t) {
                return function (e) {
                    return e[a](t);
                };
            }),
            (e.getQuerySelector = function (t) {
                var e = t.id,
                    n = t.selector;
                if (e) {
                    var r = e;
                    if (-1 !== e.indexOf(c)) {
                        var i = e.split(c),
                            o = i[0];
                        if (((r = i[1]), o !== document.documentElement.getAttribute(l)))
                            return null;
                    }
                    return '[data-w-id="'
                        .concat(r, '"], [data-w-id^="')
                        .concat(r, '_instance"]');
                }
                return n;
            }),
            (e.getValidDocument = function (t) {
                if (null == t || t === document.documentElement.getAttribute(l))
                    return document;
                return null;
            }),
            (e.queryDocument = function (t, e) {
                return Array.prototype.slice.call(
                    document.querySelectorAll(e ? t + " " + e : t)
                );
            }),
            (e.elementContains = function (t, e) {
                return t.contains(e);
            }),
            (e.isSiblingNode = function (t, e) {
                return t !== e && t.parentNode === e.parentNode;
            }),
            (e.getChildElements = function (t) {
                for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
                    var i = t[n].children,
                        o = i.length;
                    if (o) for (var a = 0; a < o; a++) e.push(i[a]);
                }
                return e;
            }),
            (e.getSiblingElements = function () {
                for (
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [],
                    e = [],
                    n = [],
                    r = 0,
                    i = t.length;
                    r < i;
                    r++
                ) {
                    var o = t[r].parentNode;
                    if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
                        n.push(o);
                        for (var a = o.firstElementChild; null != a;)
                            -1 === t.indexOf(a) && e.push(a), (a = a.nextElementSibling);
                    }
                }
                return e;
            }),
            (e.getRefType = function (t) {
                if (null != t && "object" == (0, r.default)(t))
                    return t instanceof Element ? s : f;
                return null;
            }),
            (e.getClosestElement = void 0);
        var i = n(14),
            o = n(4),
            a = i.IX2BrowserSupport.ELEMENT_MATCHES,
            u = o.IX2EngineConstants,
            c = u.IX2_ID_DELIMITER,
            s = u.HTML_ELEMENT,
            f = u.PLAIN_OBJECT,
            l = u.WF_PAGE;
        var d = Element.prototype.closest
            ? function (t, e) {
                return document.documentElement.contains(t) ? t.closest(e) : null;
            }
            : function (t, e) {
                if (!document.documentElement.contains(t)) return null;
                var n = t;
                do {
                    if (n[a] && n[a](e)) return n;
                    n = n.parentNode;
                } while (null != n);
                return null;
            };
        e.getClosestElement = d;
    },
    function (t, e, n) {
        "use strict";
        var r,
            i = n(1),
            o = i(n(22)),
            a = i(n(17)),
            u = n(1);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var c,
            s,
            f,
            l = u(n(31)),
            d = u(n(311)),
            p = u(n(60)),
            v = u(n(330)),
            h = n(4),
            E = n(123),
            g = n(65),
            m = n(14),
            y = h.EventTypeConsts,
            _ = y.MOUSE_CLICK,
            I = y.MOUSE_SECOND_CLICK,
            b = y.MOUSE_DOWN,
            T = y.MOUSE_UP,
            w = y.MOUSE_OVER,
            O = y.MOUSE_OUT,
            A = y.DROPDOWN_CLOSE,
            S = y.DROPDOWN_OPEN,
            x = y.SLIDER_ACTIVE,
            R = y.SLIDER_INACTIVE,
            N = y.TAB_ACTIVE,
            C = y.TAB_INACTIVE,
            L = y.NAVBAR_CLOSE,
            D = y.NAVBAR_OPEN,
            P = y.MOUSE_MOVE,
            M = y.PAGE_SCROLL_DOWN,
            j = y.SCROLL_INTO_VIEW,
            F = y.SCROLL_OUT_OF_VIEW,
            k = y.PAGE_SCROLL_UP,
            G = y.SCROLLING_IN_VIEW,
            X = y.PAGE_FINISH,
            V = y.ECOMMERCE_CART_CLOSE,
            U = y.ECOMMERCE_CART_OPEN,
            W = y.PAGE_START,
            B = y.PAGE_SCROLL,
            H = "COMPONENT_ACTIVE",
            z = "COMPONENT_INACTIVE",
            Y = h.IX2EngineConstants.COLON_DELIMITER,
            K = m.IX2VanillaUtils.getNamespacedParameterId,
            Q = function (t) {
                return function (e) {
                    return !("object" !== (0, a.default)(e) || !t(e)) || e;
                };
            },
            q = Q(function (t) {
                return t.element === t.nativeEvent.target;
            }),
            $ = Q(function (t) {
                var e = t.element,
                    n = t.nativeEvent;
                return e.contains(n.target);
            }),
            Z = (0, d.default)([q, $]),
            J = function (t, e) {
                if (e) {
                    var n = t.getState().ixData.events[e];
                    if (n && !at[n.eventTypeId]) return n;
                }
                return null;
            },
            tt = function (t, e) {
                var n = t.store,
                    r = t.event,
                    i = t.element,
                    o = t.eventStateKey,
                    a = r.action,
                    u = r.id,
                    c = a.config,
                    s = c.actionListId,
                    f = c.autoStopEventId,
                    l = J(n, f);
                return (
                    l &&
                    (0, E.stopActionGroup)({
                        store: n,
                        eventId: f,
                        eventTarget: i,
                        eventStateKey: f + Y + o.split(Y)[1],
                        actionListId: (0, p.default)(l, "action.config.actionListId"),
                    }),
                    (0, E.stopActionGroup)({
                        store: n,
                        eventId: u,
                        eventTarget: i,
                        eventStateKey: o,
                        actionListId: s,
                    }),
                    (0, E.startActionGroup)({
                        store: n,
                        eventId: u,
                        eventTarget: i,
                        eventStateKey: o,
                        actionListId: s,
                    }),
                    e
                );
            },
            et = function (t, e) {
                return function (n, r) {
                    return !0 === t(n, r) ? e(n, r) : r;
                };
            },
            nt = { handler: et(Z, tt) },
            rt = (0, l.default)({}, nt, { types: [H, z].join(" ") }),
            it = [
                { target: window, types: "resize orientationchange", throttle: !0 },
                {
                    target: document,
                    types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                    throttle: !0,
                },
            ],
            ot = { types: it },
            at = { PAGE_START: W, PAGE_FINISH: X },
            ut =
                ((c = void 0 !== window.pageXOffset),
                    (s =
                        "CSS1Compat" === document.compatMode
                            ? document.documentElement
                            : document.body),
                    function () {
                        return {
                            scrollLeft: c ? window.pageXOffset : s.scrollLeft,
                            scrollTop: c ? window.pageYOffset : s.scrollTop,
                            stiffScrollTop: (0, v.default)(
                                c ? window.pageYOffset : s.scrollTop,
                                0,
                                s.scrollHeight - window.innerHeight
                            ),
                            scrollWidth: s.scrollWidth,
                            scrollHeight: s.scrollHeight,
                            clientWidth: s.clientWidth,
                            clientHeight: s.clientHeight,
                            innerWidth: window.innerWidth,
                            innerHeight: window.innerHeight,
                        };
                    }),
            ct = function (t) {
                var e = t.element,
                    n = t.nativeEvent,
                    r = n.type,
                    i = n.target,
                    o = n.relatedTarget,
                    a = e.contains(i);
                if ("mouseover" === r && a) return !0;
                var u = e.contains(o);
                return !("mouseout" !== r || !a || !u);
            },
            st = function (t) {
                var e,
                    n,
                    r = t.element,
                    i = t.event.config,
                    o = ut(),
                    a = o.clientWidth,
                    u = o.clientHeight,
                    c = i.scrollOffsetValue,
                    s = "PX" === i.scrollOffsetUnit ? c : (u * (c || 0)) / 100;
                return (
                    (e = r.getBoundingClientRect()),
                    (n = { left: 0, top: s, right: a, bottom: u - s }),
                    !(
                        e.left > n.right ||
                        e.right < n.left ||
                        e.top > n.bottom ||
                        e.bottom < n.top
                    )
                );
            },
            ft = function (t) {
                return function (e, n) {
                    var r = e.nativeEvent.type,
                        i = -1 !== [H, z].indexOf(r) ? r === H : n.isActive,
                        o = (0, l.default)({}, n, { isActive: i });
                    return n && o.isActive === n.isActive ? o : t(e, o) || o;
                };
            },
            lt = function (t) {
                return function (e, n) {
                    var r = { elementHovered: ct(e) };
                    return (
                        ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) &&
                            t(e, r)) ||
                        r
                    );
                };
            },
            dt = function (t) {
                return function (e) {
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        r = ut(),
                        i = r.stiffScrollTop,
                        o = r.scrollHeight,
                        a = r.innerHeight,
                        u = e.event,
                        c = u.config,
                        s = u.eventTypeId,
                        f = c.scrollOffsetValue,
                        d = "PX" === c.scrollOffsetUnit,
                        p = o - a,
                        v = Number((i / p).toFixed(2));
                    if (n && n.percentTop === v) return n;
                    var h,
                        E,
                        g = (d ? f : (a * (f || 0)) / 100) / p,
                        m = 0;
                    n &&
                        ((h = v > n.percentTop),
                            (m = (E = n.scrollingDown !== h) ? v : n.anchorTop));
                    var y = s === M ? v >= m + g : v <= m - g,
                        _ = (0, l.default)({}, n, {
                            percentTop: v,
                            inBounds: y,
                            anchorTop: m,
                            scrollingDown: h,
                        });
                    return (n && y && (E || _.inBounds !== n.inBounds) && t(e, _)) || _;
                };
            },
            pt = function (t) {
                return function (e) {
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : { clickCount: 0 },
                        r = { clickCount: (n.clickCount % 2) + 1 };
                    return (r.clickCount !== n.clickCount && t(e, r)) || r;
                };
            },
            vt = function () {
                var t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return (0, l.default)({}, rt, {
                    handler: et(
                        t ? Z : q,
                        ft(function (t, e) {
                            return e.isActive ? nt.handler(t, e) : e;
                        })
                    ),
                });
            },
            ht = function () {
                var t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return (0, l.default)({}, rt, {
                    handler: et(
                        t ? Z : q,
                        ft(function (t, e) {
                            return e.isActive ? e : nt.handler(t, e);
                        })
                    ),
                });
            },
            Et = (0, l.default)({}, ot, {
                handler:
                    ((f = function (t, e) {
                        var n = e.elementVisible,
                            r = t.event;
                        return !t.store.getState().ixData.events[
                            r.action.config.autoStopEventId
                        ] && e.triggered
                            ? e
                            : (r.eventTypeId === j) === n
                                ? (tt(t), (0, l.default)({}, e, { triggered: !0 }))
                                : e;
                    }),
                        function (t, e) {
                            var n = (0, l.default)({}, e, { elementVisible: st(t) });
                            return (
                                ((e ? n.elementVisible !== e.elementVisible : n.elementVisible) &&
                                    f(t, n)) ||
                                n
                            );
                        }),
            }),
            gt =
                ((r = {}),
                    (0, o.default)(r, x, vt()),
                    (0, o.default)(r, R, ht()),
                    (0, o.default)(r, S, vt()),
                    (0, o.default)(r, A, ht()),
                    (0, o.default)(r, D, vt(!1)),
                    (0, o.default)(r, L, ht(!1)),
                    (0, o.default)(r, N, vt()),
                    (0, o.default)(r, C, ht()),
                    (0, o.default)(r, U, {
                        types: "ecommerce-cart-open",
                        handler: et(Z, tt),
                    }),
                    (0, o.default)(r, V, {
                        types: "ecommerce-cart-close",
                        handler: et(Z, tt),
                    }),
                    (0, o.default)(r, _, {
                        types: "click",
                        handler: et(
                            Z,
                            pt(function (t, e) {
                                var n,
                                    r,
                                    i,
                                    o = e.clickCount;
                                (r = (n = t).store),
                                    (i = n.event.action.config.autoStopEventId),
                                    Boolean(J(r, i)) ? 1 === o && tt(t) : tt(t);
                            })
                        ),
                    }),
                    (0, o.default)(r, I, {
                        types: "click",
                        handler: et(
                            Z,
                            pt(function (t, e) {
                                2 === e.clickCount && tt(t);
                            })
                        ),
                    }),
                    (0, o.default)(r, b, (0, l.default)({}, nt, { types: "mousedown" })),
                    (0, o.default)(r, T, (0, l.default)({}, nt, { types: "mouseup" })),
                    (0, o.default)(r, w, {
                        types: "mouseover mouseout",
                        handler: et(
                            Z,
                            lt(function (t, e) {
                                e.elementHovered && tt(t);
                            })
                        ),
                    }),
                    (0, o.default)(r, O, {
                        types: "mouseover mouseout",
                        handler: et(
                            Z,
                            lt(function (t, e) {
                                e.elementHovered || tt(t);
                            })
                        ),
                    }),
                    (0, o.default)(r, P, {
                        types: "mousemove mouseout scroll",
                        handler: function (t) {
                            var e = t.store,
                                n = t.element,
                                r = t.eventConfig,
                                i = t.nativeEvent,
                                o = t.eventStateKey,
                                a =
                                    arguments.length > 1 && void 0 !== arguments[1]
                                        ? arguments[1]
                                        : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
                                u = r.basedOn,
                                c = r.selectedAxis,
                                s = r.continuousParameterGroupId,
                                f = r.reverse,
                                l = r.restingState,
                                d = void 0 === l ? 0 : l,
                                p = i.clientX,
                                v = void 0 === p ? a.clientX : p,
                                E = i.clientY,
                                m = void 0 === E ? a.clientY : E,
                                y = i.pageX,
                                _ = void 0 === y ? a.pageX : y,
                                I = i.pageY,
                                b = void 0 === I ? a.pageY : I,
                                T = "X_AXIS" === c,
                                w = "mouseout" === i.type,
                                O = d / 100,
                                A = s,
                                S = !1;
                            switch (u) {
                                case h.EventBasedOn.VIEWPORT:
                                    O = T
                                        ? Math.min(v, window.innerWidth) / window.innerWidth
                                        : Math.min(m, window.innerHeight) / window.innerHeight;
                                    break;
                                case h.EventBasedOn.PAGE:
                                    var x = ut(),
                                        R = x.scrollLeft,
                                        N = x.scrollTop,
                                        C = x.scrollWidth,
                                        L = x.scrollHeight;
                                    O = T ? Math.min(R + _, C) / C : Math.min(N + b, L) / L;
                                    break;
                                case h.EventBasedOn.ELEMENT:
                                default:
                                    A = K(o, s);
                                    var D = 0 === i.type.indexOf("mouse");
                                    if (D && !0 !== Z({ element: n, nativeEvent: i })) break;
                                    var P = n.getBoundingClientRect(),
                                        M = P.left,
                                        j = P.top,
                                        F = P.width,
                                        k = P.height;
                                    if (
                                        !D &&
                                        !(function (t, e) {
                                            return (
                                                t.left > e.left &&
                                                t.left < e.right &&
                                                t.top > e.top &&
                                                t.top < e.bottom
                                            );
                                        })({ left: v, top: m }, P)
                                    )
                                        break;
                                    (S = !0), (O = T ? (v - M) / F : (m - j) / k);
                            }
                            return (
                                w && (O > 0.95 || O < 0.05) && (O = Math.round(O)),
                                (u !== h.EventBasedOn.ELEMENT || S || S !== a.elementHovered) &&
                                ((O = f ? 1 - O : O),
                                    e.dispatch((0, g.parameterChanged)(A, O))),
                                { elementHovered: S, clientX: v, clientY: m, pageX: _, pageY: b }
                            );
                        },
                    }),
                    (0, o.default)(r, B, {
                        types: it,
                        handler: function (t) {
                            var e = t.store,
                                n = t.eventConfig,
                                r = n.continuousParameterGroupId,
                                i = n.reverse,
                                o = ut(),
                                a = o.scrollTop / (o.scrollHeight - o.clientHeight);
                            (a = i ? 1 - a : a), e.dispatch((0, g.parameterChanged)(r, a));
                        },
                    }),
                    (0, o.default)(r, G, {
                        types: it,
                        handler: function (t) {
                            var e = t.element,
                                n = t.store,
                                r = t.eventConfig,
                                i = t.eventStateKey,
                                o =
                                    arguments.length > 1 && void 0 !== arguments[1]
                                        ? arguments[1]
                                        : { scrollPercent: 0 },
                                a = ut(),
                                u = a.scrollLeft,
                                c = a.scrollTop,
                                s = a.scrollWidth,
                                f = a.scrollHeight,
                                l = a.clientHeight,
                                d = r.basedOn,
                                p = r.selectedAxis,
                                v = r.continuousParameterGroupId,
                                E = r.startsEntering,
                                m = r.startsExiting,
                                y = r.addEndOffset,
                                _ = r.addStartOffset,
                                I = r.addOffsetValue,
                                b = void 0 === I ? 0 : I,
                                T = r.endOffsetValue,
                                w = void 0 === T ? 0 : T,
                                O = "X_AXIS" === p;
                            if (d === h.EventBasedOn.VIEWPORT) {
                                var A = O ? u / s : c / f;
                                return (
                                    A !== o.scrollPercent &&
                                    n.dispatch((0, g.parameterChanged)(v, A)),
                                    { scrollPercent: A }
                                );
                            }
                            var S = K(i, v),
                                x = e.getBoundingClientRect(),
                                R = (_ ? b : 0) / 100,
                                N = (y ? w : 0) / 100;
                            (R = E ? R : 1 - R), (N = m ? N : 1 - N);
                            var C = x.top + Math.min(x.height * R, l),
                                L = x.top + x.height * N - C,
                                D = Math.min(l + L, f),
                                P = Math.min(Math.max(0, l - C), D) / D;
                            return (
                                P !== o.scrollPercent &&
                                n.dispatch((0, g.parameterChanged)(S, P)),
                                { scrollPercent: P }
                            );
                        },
                    }),
                    (0, o.default)(r, j, Et),
                    (0, o.default)(r, F, Et),
                    (0, o.default)(
                        r,
                        M,
                        (0, l.default)({}, ot, {
                            handler: dt(function (t, e) {
                                e.scrollingDown && tt(t);
                            }),
                        })
                    ),
                    (0, o.default)(
                        r,
                        k,
                        (0, l.default)({}, ot, {
                            handler: dt(function (t, e) {
                                e.scrollingDown || tt(t);
                            }),
                        })
                    ),
                    (0, o.default)(r, X, {
                        types: "readystatechange IX2_PAGE_UPDATE",
                        handler: et(
                            q,
                            (function (t) {
                                return function (e, n) {
                                    var r = { finished: "complete" === document.readyState };
                                    return !r.finished || (n && n.finshed) || t(e), r;
                                };
                            })(tt)
                        ),
                    }),
                    (0, o.default)(r, W, {
                        types: "readystatechange IX2_PAGE_UPDATE",
                        handler: et(
                            q,
                            (function (t) {
                                return function (e, n) {
                                    return n || t(e), { started: !0 };
                                };
                            })(tt)
                        ),
                    }),
                    r);
        e.default = gt;
    },
    function (t, e, n) {
        var r = n(312)();
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(66),
            i = n(313),
            o = n(127),
            a = n(128),
            u = n(2),
            c = n(326),
            s = "Expected a function",
            f = 8,
            l = 32,
            d = 128,
            p = 256;
        t.exports = function (t) {
            return i(function (e) {
                var n = e.length,
                    i = n,
                    v = r.prototype.thru;
                for (t && e.reverse(); i--;) {
                    var h = e[i];
                    if ("function" != typeof h) throw new TypeError(s);
                    if (v && !E && "wrapper" == a(h)) var E = new r([], !0);
                }
                for (i = E ? i : n; ++i < n;) {
                    h = e[i];
                    var g = a(h),
                        m = "wrapper" == g ? o(h) : void 0;
                    E =
                        m && c(m[0]) && m[1] == (d | f | l | p) && !m[4].length && 1 == m[9]
                            ? E[a(m[0])].apply(E, m[3])
                            : 1 == h.length && c(h)
                                ? E[g]()
                                : E.thru(h);
                }
                return function () {
                    var t = arguments,
                        r = t[0];
                    if (E && 1 == t.length && u(r)) return E.plant(r).value();
                    for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;)
                        o = e[i].call(this, o);
                    return o;
                };
            });
        };
    },
    function (t, e, n) {
        var r = n(314),
            i = n(317),
            o = n(319);
        t.exports = function (t) {
            return o(i(t, void 0, r), t + "");
        };
    },
    function (t, e, n) {
        var r = n(315);
        t.exports = function (t) {
            return null != t && t.length ? r(t, 1) : [];
        };
    },
    function (t, e, n) {
        var r = n(52),
            i = n(316);
        t.exports = function t(e, n, o, a, u) {
            var c = -1,
                s = e.length;
            for (o || (o = i), u || (u = []); ++c < s;) {
                var f = e[c];
                n > 0 && o(f)
                    ? n > 1
                        ? t(f, n - 1, o, a, u)
                        : r(u, f)
                    : a || (u[u.length] = f);
            }
            return u;
        };
    },
    function (t, e, n) {
        var r = n(24),
            i = n(37),
            o = n(2),
            a = r ? r.isConcatSpreadable : void 0;
        t.exports = function (t) {
            return o(t) || i(t) || !!(a && t && t[a]);
        };
    },
    function (t, e, n) {
        var r = n(318),
            i = Math.max;
        t.exports = function (t, e, n) {
            return (
                (e = i(void 0 === e ? t.length - 1 : e, 0)),
                function () {
                    for (
                        var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u);
                        ++a < u;

                    )
                        c[a] = o[e + a];
                    a = -1;
                    for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
                    return (s[e] = n(c)), r(t, this, s);
                }
            );
        };
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            switch (n.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, n[0]);
                case 2:
                    return t.call(e, n[0], n[1]);
                case 3:
                    return t.call(e, n[0], n[1], n[2]);
            }
            return t.apply(e, n);
        };
    },
    function (t, e, n) {
        var r = n(320),
            i = n(322)(r);
        t.exports = i;
    },
    function (t, e, n) {
        var r = n(321),
            i = n(125),
            o = n(63),
            a = i
                ? function (t, e) {
                    return i(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: r(e),
                        writable: !0,
                    });
                }
                : o;
        t.exports = a;
    },
    function (t, e) {
        t.exports = function (t) {
            return function () {
                return t;
            };
        };
    },
    function (t, e) {
        var n = 800,
            r = 16,
            i = Date.now;
        t.exports = function (t) {
            var e = 0,
                o = 0;
            return function () {
                var a = i(),
                    u = r - (a - o);
                if (((o = a), u > 0)) {
                    if (++e >= n) return arguments[0];
                } else e = 0;
                return t.apply(void 0, arguments);
            };
        };
    },
    function (t, e, n) {
        var r = n(109),
            i = r && new r();
        t.exports = i;
    },
    function (t, e) {
        t.exports = function () { };
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e, n) {
        var r = n(68),
            i = n(127),
            o = n(128),
            a = n(327);
        t.exports = function (t) {
            var e = o(t),
                n = a[e];
            if ("function" != typeof n || !(e in r.prototype)) return !1;
            if (t === n) return !0;
            var u = i(n);
            return !!u && t === u[0];
        };
    },
    function (t, e, n) {
        var r = n(68),
            i = n(66),
            o = n(67),
            a = n(2),
            u = n(12),
            c = n(328),
            s = Object.prototype.hasOwnProperty;
        function f(t) {
            if (u(t) && !a(t) && !(t instanceof r)) {
                if (t instanceof i) return t;
                if (s.call(t, "__wrapped__")) return c(t);
            }
            return new i(t);
        }
        (f.prototype = o.prototype), (f.prototype.constructor = f), (t.exports = f);
    },
    function (t, e, n) {
        var r = n(68),
            i = n(66),
            o = n(329);
        t.exports = function (t) {
            if (t instanceof r) return t.clone();
            var e = new i(t.__wrapped__, t.__chain__);
            return (
                (e.__actions__ = o(t.__actions__)),
                (e.__index__ = t.__index__),
                (e.__values__ = t.__values__),
                e
            );
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            var n = -1,
                r = t.length;
            for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
            return e;
        };
    },
    function (t, e, n) {
        var r = n(331),
            i = n(64);
        t.exports = function (t, e, n) {
            return (
                void 0 === n && ((n = e), (e = void 0)),
                void 0 !== n && (n = (n = i(n)) == n ? n : 0),
                void 0 !== e && (e = (e = i(e)) == e ? e : 0),
                r(i(t), e, n)
            );
        };
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            return (
                t == t &&
                (void 0 !== n && (t = t <= n ? t : n),
                    void 0 !== e && (t = t >= e ? t : e)),
                t
            );
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(3);
        r.define(
            "links",
            (t.exports = function (t, e) {
                var n,
                    i,
                    o,
                    a = {},
                    u = t(window),
                    c = r.env(),
                    s = window.location,
                    f = document.createElement("a"),
                    l = "w--current",
                    d = /index\.(html|php)$/,
                    p = /\/$/;
                function v(e) {
                    var r =
                        (n && e.getAttribute("href-disabled")) || e.getAttribute("href");
                    if (((f.href = r), !(r.indexOf(":") >= 0))) {
                        var a = t(e);
                        if (
                            f.hash.length > 1 &&
                            f.host + f.pathname === s.host + s.pathname
                        ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash)) return;
                            var u = t(f.hash);
                            u.length && i.push({ link: a, sec: u, active: !1 });
                        } else if ("#" !== r && "" !== r) {
                            var c = f.href === s.href || r === o || (d.test(r) && p.test(o));
                            E(a, l, c);
                        }
                    }
                }
                function h() {
                    var t = u.scrollTop(),
                        n = u.height();
                    e.each(i, function (e) {
                        var r = e.link,
                            i = e.sec,
                            o = i.offset().top,
                            a = i.outerHeight(),
                            u = 0.5 * n,
                            c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
                        e.active !== c && ((e.active = c), E(r, l, c));
                    });
                }
                function E(t, e, n) {
                    var r = t.hasClass(e);
                    (n && r) || ((n || r) && (n ? t.addClass(e) : t.removeClass(e)));
                }
                return (
                    (a.ready =
                        a.design =
                        a.preview =
                        function () {
                            (n = c && r.env("design")),
                                (o = r.env("slug") || s.pathname || ""),
                                r.scroll.off(h),
                                (i = []);
                            for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
                            i.length && (r.scroll.on(h), h());
                        }),
                    a
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(3);
        r.define(
            "scroll",
            (t.exports = function (t) {
                var e = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll",
                },
                    n = window.location,
                    i = (function () {
                        try {
                            return Boolean(window.frameElement);
                        } catch (t) {
                            return !0;
                        }
                    })()
                        ? null
                        : window.history,
                    o = t(window),
                    a = t(document),
                    u = t(document.body),
                    c =
                        window.requestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        function (t) {
                            window.setTimeout(t, 15);
                        },
                    s = r.env("editor") ? ".w-editor-body" : "body",
                    f =
                        "header, " +
                        s +
                        " > .header, " +
                        s +
                        " > .w-nav:not([data-no-scroll])",
                    l = 'a[href="#"]',
                    d = 'a[href*="#"]:not(.w-tab-link):not(' + l + ")",
                    p = document.createElement("style");
                p.appendChild(
                    document.createTextNode(
                        '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
                    )
                );
                var v = /^#[a-zA-Z0-9][\w:.-]*$/;
                var h =
                    "function" == typeof window.matchMedia &&
                    window.matchMedia("(prefers-reduced-motion: reduce)");
                function E(t, e) {
                    var n;
                    switch (e) {
                        case "add":
                            (n = t.attr("tabindex"))
                                ? t.attr("data-wf-tabindex-swap", n)
                                : t.attr("tabindex", "-1");
                            break;
                        case "remove":
                            (n = t.attr("data-wf-tabindex-swap"))
                                ? (t.attr("tabindex", n), t.removeAttr("data-wf-tabindex-swap"))
                                : t.removeAttr("tabindex");
                    }
                    t.toggleClass("wf-force-outline-none", "add" === e);
                }
                function g(e) {
                    var a = e.currentTarget;
                    if (
                        !(
                            r.env("design") ||
                            (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(a.className))
                        )
                    ) {
                        var s,
                            l =
                                ((s = a),
                                    v.test(s.hash) && s.host + s.pathname === n.host + n.pathname
                                        ? a.hash
                                        : "");
                        if ("" !== l) {
                            var d = t(l);
                            d.length &&
                                (e && (e.preventDefault(), e.stopPropagation()),
                                    (function (t) {
                                        if (
                                            n.hash !== t &&
                                            i &&
                                            i.pushState &&
                                            (!r.env.chrome || "file:" !== n.protocol)
                                        ) {
                                            var e = i.state && i.state.hash;
                                            e !== t && i.pushState({ hash: t }, "", t);
                                        }
                                    })(l),
                                    window.setTimeout(
                                        function () {
                                            !(function (e, n) {
                                                var r = o.scrollTop(),
                                                    i = (function (e) {
                                                        var n = t(f),
                                                            r =
                                                                "fixed" === n.css("position")
                                                                    ? n.outerHeight()
                                                                    : 0,
                                                            i = e.offset().top - r;
                                                        if ("mid" === e.data("scroll")) {
                                                            var a = o.height() - r,
                                                                u = e.outerHeight();
                                                            u < a && (i -= Math.round((a - u) / 2));
                                                        }
                                                        return i;
                                                    })(e);
                                                if (r === i) return;
                                                var a = (function (t, e, n) {
                                                    if (
                                                        "none" ===
                                                        document.body.getAttribute(
                                                            "data-wf-scroll-motion"
                                                        ) ||
                                                        h.matches
                                                    )
                                                        return 0;
                                                    var r = 1;
                                                    return (
                                                        u.add(t).each(function (t, e) {
                                                            var n = parseFloat(
                                                                e.getAttribute("data-scroll-time")
                                                            );
                                                            !isNaN(n) && n >= 0 && (r = n);
                                                        }),
                                                        (472.143 * Math.log(Math.abs(e - n) + 125) - 2e3) *
                                                        r
                                                    );
                                                })(e, r, i),
                                                    s = Date.now();
                                                c(function t() {
                                                    var e = Date.now() - s;
                                                    window.scroll(
                                                        0,
                                                        (function (t, e, n, r) {
                                                            return n > r
                                                                ? e
                                                                : t +
                                                                (e - t) *
                                                                ((i = n / r) < 0.5
                                                                    ? 4 * i * i * i
                                                                    : (i - 1) * (2 * i - 2) * (2 * i - 2) +
                                                                    1);
                                                            var i;
                                                        })(r, i, e, a)
                                                    ),
                                                        e <= a ? c(t) : "function" == typeof n && n();
                                                });
                                            })(d, function () {
                                                E(d, "add"),
                                                    d.get(0).focus({ preventScroll: !0 }),
                                                    E(d, "remove");
                                            });
                                        },
                                        e ? 0 : 300
                                    ));
                        }
                    }
                }
                return {
                    ready: function () {
                        var t = e.WF_CLICK_EMPTY,
                            n = e.WF_CLICK_SCROLL;
                        a.on(n, d, g),
                            a.on(t, l, function (t) {
                                t.preventDefault();
                            }),
                            document.head.insertBefore(p, document.head.firstChild);
                    },
                };
            })
        );
    },
    function (t, e, n) {
        "use strict";
        n(3).define(
            "touch",
            (t.exports = function (t) {
                var e = {},
                    n = window.getSelection;
                function r(e) {
                    var r,
                        i,
                        o = !1,
                        a = !1,
                        u = Math.min(Math.round(0.04 * window.innerWidth), 40);
                    function c(t) {
                        var e = t.touches;
                        (e && e.length > 1) ||
                            ((o = !0),
                                e ? ((a = !0), (r = e[0].clientX)) : (r = t.clientX),
                                (i = r));
                    }
                    function s(e) {
                        if (o) {
                            if (a && "mousemove" === e.type)
                                return e.preventDefault(), void e.stopPropagation();
                            var r = e.touches,
                                c = r ? r[0].clientX : e.clientX,
                                s = c - i;
                            (i = c),
                                Math.abs(s) > u &&
                                n &&
                                "" === String(n()) &&
                                (!(function (e, n, r) {
                                    var i = t.Event(e, { originalEvent: n });
                                    t(n.target).trigger(i, r);
                                })("swipe", e, { direction: s > 0 ? "right" : "left" }),
                                    l());
                        }
                    }
                    function f(t) {
                        if (o)
                            return (
                                (o = !1),
                                a && "mouseup" === t.type
                                    ? (t.preventDefault(), t.stopPropagation(), void (a = !1))
                                    : void 0
                            );
                    }
                    function l() {
                        o = !1;
                    }
                    e.addEventListener("touchstart", c, !1),
                        e.addEventListener("touchmove", s, !1),
                        e.addEventListener("touchend", f, !1),
                        e.addEventListener("touchcancel", l, !1),
                        e.addEventListener("mousedown", c, !1),
                        e.addEventListener("mousemove", s, !1),
                        e.addEventListener("mouseup", f, !1),
                        e.addEventListener("mouseout", l, !1),
                        (this.destroy = function () {
                            e.removeEventListener("touchstart", c, !1),
                                e.removeEventListener("touchmove", s, !1),
                                e.removeEventListener("touchend", f, !1),
                                e.removeEventListener("touchcancel", l, !1),
                                e.removeEventListener("mousedown", c, !1),
                                e.removeEventListener("mousemove", s, !1),
                                e.removeEventListener("mouseup", f, !1),
                                e.removeEventListener("mouseout", l, !1),
                                (e = null);
                        });
                }
                return (
                    (t.event.special.tap = { bindType: "click", delegateType: "click" }),
                    (e.init = function (e) {
                        return (e = "string" == typeof e ? t(e).get(0) : e)
                            ? new r(e)
                            : null;
                    }),
                    (e.instance = e.init(document)),
                    e
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(3),
            i = n(18),
            o = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35,
            },
            a = !0,
            u = /^#[a-zA-Z0-9\-_]+$/;
        r.define(
            "dropdown",
            (t.exports = function (t, e) {
                var n,
                    c,
                    s = e.debounce,
                    f = {},
                    l = r.env(),
                    d = !1,
                    p = r.env.touch,
                    v = ".w-dropdown",
                    h = "w--open",
                    E = i.triggers,
                    g = 900,
                    m = "focusout" + v,
                    y = "keydown" + v,
                    _ = "mouseenter" + v,
                    I = "mousemove" + v,
                    b = "mouseleave" + v,
                    T = (p ? "click" : "mouseup") + v,
                    w = "w-close" + v,
                    O = "setting" + v,
                    A = t(document);
                function S() {
                    (n = l && r.env("design")), (c = A.find(v)).each(x);
                }
                function x(e, i) {
                    var c = t(i),
                        f = t.data(i, v);
                    f ||
                        (f = t.data(i, v, {
                            open: !1,
                            el: c,
                            config: {},
                            selectedIdx: -1,
                        })),
                        (f.toggle = f.el.children(".w-dropdown-toggle")),
                        (f.list = f.el.children(".w-dropdown-list")),
                        (f.links = f.list.find("a:not(.w-dropdown .w-dropdown a)")),
                        (f.complete = (function (t) {
                            return function () {
                                t.list.removeClass(h),
                                    t.toggle.removeClass(h),
                                    t.manageZ && t.el.css("z-index", "");
                            };
                        })(f)),
                        (f.mouseLeave = (function (t) {
                            return function () {
                                (t.hovering = !1), t.links.is(":focus") || L(t);
                            };
                        })(f)),
                        (f.mouseUpOutside = (function (e) {
                            e.mouseUpOutside && A.off(T, e.mouseUpOutside);
                            return s(function (n) {
                                if (e.open) {
                                    var i = t(n.target);
                                    if (!i.closest(".w-dropdown-toggle").length) {
                                        var o = -1 === t.inArray(e.el[0], i.parents(v)),
                                            a = r.env("editor");
                                        if (o) {
                                            if (a) {
                                                var u =
                                                    1 === i.parents().length &&
                                                    1 === i.parents("svg").length,
                                                    c = i.parents(
                                                        ".w-editor-bem-EditorHoverControls"
                                                    ).length;
                                                if (u || c) return;
                                            }
                                            L(e);
                                        }
                                    }
                                }
                            });
                        })(f)),
                        (f.mouseMoveOutside = (function (e) {
                            return s(function (n) {
                                if (e.open) {
                                    var r = t(n.target),
                                        i = -1 === t.inArray(e.el[0], r.parents(v));
                                    if (i) {
                                        var o = r.parents(
                                            ".w-editor-bem-EditorHoverControls"
                                        ).length,
                                            a = r.parents(".w-editor-bem-RTToolbar").length,
                                            u = t(".w-editor-bem-EditorOverlay"),
                                            c =
                                                u.find(".w-editor-edit-outline").length ||
                                                u.find(".w-editor-bem-RTToolbar").length;
                                        if (o || a || c) return;
                                        (e.hovering = !1), L(e);
                                    }
                                }
                            });
                        })(f)),
                        R(f);
                    var d = f.toggle.attr("id"),
                        p = f.list.attr("id");
                    d || (d = "w-dropdown-toggle-" + e),
                        p || (p = "w-dropdown-list-" + e),
                        f.toggle.attr("id", d),
                        f.toggle.attr("aria-controls", p),
                        f.toggle.attr("aria-haspopup", "menu"),
                        f.toggle.attr("aria-expanded", "false"),
                        f.toggle
                            .find(".w-icon-dropdown-toggle")
                            .attr("aria-hidden", "true"),
                        "BUTTON" !== f.toggle.prop("tagName") &&
                        (f.toggle.attr("role", "button"),
                            f.toggle.attr("tabindex") || f.toggle.attr("tabindex", "0")),
                        f.list.attr("id", p),
                        f.list.attr("aria-labelledby", d),
                        f.links.each(function (t, e) {
                            e.hasAttribute("tabindex") || e.setAttribute("tabindex", "0"),
                                u.test(e.hash) && e.addEventListener("click", L.bind(null, f));
                        }),
                        f.el.off(v),
                        f.toggle.off(v),
                        f.nav && f.nav.off(v);
                    var E = N(f, a);
                    n &&
                        f.el.on(
                            O,
                            (function (t) {
                                return function (e, n) {
                                    (n = n || {}),
                                        R(t),
                                        !0 === n.open && C(t),
                                        !1 === n.open && L(t, { immediate: !0 });
                                };
                            })(f)
                        ),
                        n ||
                        (l && ((f.hovering = !1), L(f)),
                            f.config.hover &&
                            f.toggle.on(
                                _,
                                (function (t) {
                                    return function () {
                                        (t.hovering = !0), C(t);
                                    };
                                })(f)
                            ),
                            f.el.on(w, E),
                            f.el.on(
                                y,
                                (function (t) {
                                    return function (e) {
                                        if (!n && t.open)
                                            switch (
                                            ((t.selectedIdx = t.links.index(
                                                document.activeElement
                                            )),
                                                e.keyCode)
                                            ) {
                                                case o.HOME:
                                                    if (!t.open) return;
                                                    return (t.selectedIdx = 0), D(t), e.preventDefault();
                                                case o.END:
                                                    if (!t.open) return;
                                                    return (
                                                        (t.selectedIdx = t.links.length - 1),
                                                        D(t),
                                                        e.preventDefault()
                                                    );
                                                case o.ESCAPE:
                                                    return L(t), t.toggle.focus(), e.stopPropagation();
                                                case o.ARROW_RIGHT:
                                                case o.ARROW_DOWN:
                                                    return (
                                                        (t.selectedIdx = Math.min(
                                                            t.links.length - 1,
                                                            t.selectedIdx + 1
                                                        )),
                                                        D(t),
                                                        e.preventDefault()
                                                    );
                                                case o.ARROW_LEFT:
                                                case o.ARROW_UP:
                                                    return (
                                                        (t.selectedIdx = Math.max(-1, t.selectedIdx - 1)),
                                                        D(t),
                                                        e.preventDefault()
                                                    );
                                            }
                                    };
                                })(f)
                            ),
                            f.el.on(
                                m,
                                (function (t) {
                                    return s(function (e) {
                                        var n = e.relatedTarget,
                                            r = e.target,
                                            i = t.el[0],
                                            o = i.contains(n) || i.contains(r);
                                        return o || L(t), e.stopPropagation();
                                    });
                                })(f)
                            ),
                            f.toggle.on(T, E),
                            f.toggle.on(
                                y,
                                (function (t) {
                                    var e = N(t, a);
                                    return function (r) {
                                        if (!n) {
                                            if (!t.open)
                                                switch (r.keyCode) {
                                                    case o.ARROW_UP:
                                                    case o.ARROW_DOWN:
                                                        return r.stopPropagation();
                                                }
                                            switch (r.keyCode) {
                                                case o.SPACE:
                                                case o.ENTER:
                                                    return e(), r.stopPropagation(), r.preventDefault();
                                            }
                                        }
                                    };
                                })(f)
                            ),
                            (f.nav = f.el.closest(".w-nav")),
                            f.nav.on(w, E));
                }
                function R(t) {
                    var e = Number(t.el.css("z-index"));
                    (t.manageZ = e === g || e === g + 1),
                        (t.config = {
                            hover: "true" === t.el.attr("data-hover") && !p,
                            delay: t.el.attr("data-delay"),
                        });
                }
                function N(t, e) {
                    return s(function (n) {
                        if (t.open || (n && "w-close" === n.type))
                            return L(t, { forceClose: e });
                        C(t);
                    });
                }
                function C(e) {
                    if (!e.open) {
                        !(function (e) {
                            var n = e.el[0];
                            c.each(function (e, r) {
                                var i = t(r);
                                i.is(n) || i.has(n).length || i.triggerHandler(w);
                            });
                        })(e),
                            (e.open = !0),
                            e.list.addClass(h),
                            e.toggle.addClass(h),
                            e.toggle.attr("aria-expanded", "true"),
                            E.intro(0, e.el[0]),
                            r.redraw.up(),
                            e.manageZ && e.el.css("z-index", g + 1);
                        var i = r.env("editor");
                        n || A.on(T, e.mouseUpOutside),
                            e.hovering && !i && e.el.on(b, e.mouseLeave),
                            e.hovering && i && A.on(I, e.mouseMoveOutside),
                            window.clearTimeout(e.delayId);
                    }
                }
                function L(t) {
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        n = e.immediate,
                        r = e.forceClose;
                    if (t.open && (!t.config.hover || !t.hovering || r)) {
                        t.toggle.attr("aria-expanded", "false"), (t.open = !1);
                        var i = t.config;
                        if (
                            (E.outro(0, t.el[0]),
                                A.off(T, t.mouseUpOutside),
                                A.off(I, t.mouseMoveOutside),
                                t.el.off(b, t.mouseLeave),
                                window.clearTimeout(t.delayId),
                                !i.delay || n)
                        )
                            return t.complete();
                        t.delayId = window.setTimeout(t.complete, i.delay);
                    }
                }
                function D(t) {
                    t.links[t.selectedIdx] && t.links[t.selectedIdx].focus();
                }
                return (
                    (f.ready = S),
                    (f.design = function () {
                        d &&
                            A.find(v).each(function (e, n) {
                                t(n).triggerHandler(w);
                            }),
                            (d = !1),
                            S();
                    }),
                    (f.preview = function () {
                        (d = !0), S();
                    }),
                    f
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(1)(n(337)),
            i = n(3);
        i.define(
            "forms",
            (t.exports = function (t, e) {
                var n,
                    o,
                    a,
                    u,
                    c,
                    s = {},
                    f = t(document),
                    l = window.location,
                    d = window.XDomainRequest && !window.atob,
                    p = ".w-form",
                    v = /e(-)?mail/i,
                    h = /^\S+@\S+$/,
                    E = window.alert,
                    g = i.env(),
                    m = /list-manage[1-9]?.com/i,
                    y = e.debounce(function () {
                        E(
                            "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
                        );
                    }, 100);
                function _(e, n) {
                    var r = t(n),
                        i = t.data(n, p);
                    i || (i = t.data(n, p, { form: r })), I(i);
                    var a = r.closest("div.w-form");
                    (i.done = a.find("> .w-form-done")),
                        (i.fail = a.find("> .w-form-fail")),
                        (i.fileUploads = a.find(".w-file-upload")),
                        i.fileUploads.each(function (e) {
                            !(function (e, n) {
                                if (!n.fileUploads || !n.fileUploads[e]) return;
                                var r,
                                    i = t(n.fileUploads[e]),
                                    o = i.find("> .w-file-upload-default"),
                                    a = i.find("> .w-file-upload-uploading"),
                                    u = i.find("> .w-file-upload-success"),
                                    s = i.find("> .w-file-upload-error"),
                                    f = o.find(".w-file-upload-input"),
                                    l = o.find(".w-file-upload-label"),
                                    d = l.children(),
                                    p = s.find(".w-file-upload-error-msg"),
                                    v = u.find(".w-file-upload-file"),
                                    h = u.find(".w-file-remove-link"),
                                    E = v.find(".w-file-upload-file-name"),
                                    m = p.attr("data-w-size-error"),
                                    y = p.attr("data-w-type-error"),
                                    _ = p.attr("data-w-generic-error");
                                g ||
                                    l.on("click keydown", function (t) {
                                        ("keydown" === t.type &&
                                            13 !== t.which &&
                                            32 !== t.which) ||
                                            (t.preventDefault(), f.click());
                                    });
                                if (
                                    (l
                                        .find(".w-icon-file-upload-icon")
                                        .attr("aria-hidden", "true"),
                                        h
                                            .find(".w-icon-file-upload-remove")
                                            .attr("aria-hidden", "true"),
                                        g)
                                )
                                    f.on("click", function (t) {
                                        t.preventDefault();
                                    }),
                                        l.on("click", function (t) {
                                            t.preventDefault();
                                        }),
                                        d.on("click", function (t) {
                                            t.preventDefault();
                                        });
                                else {
                                    h.on("click keydown", function (t) {
                                        if ("keydown" === t.type) {
                                            if (13 !== t.which && 32 !== t.which) return;
                                            t.preventDefault();
                                        }
                                        f.removeAttr("data-value"),
                                            f.val(""),
                                            E.html(""),
                                            o.toggle(!0),
                                            u.toggle(!1),
                                            l.focus();
                                    }),
                                        f.on("change", function (i) {
                                            (r = i.target && i.target.files && i.target.files[0]) &&
                                                (o.toggle(!1),
                                                    s.toggle(!1),
                                                    a.toggle(!0),
                                                    a.focus(),
                                                    E.text(r.name),
                                                    S() || b(n),
                                                    (n.fileUploads[e].uploading = !0),
                                                    (function (e, n) {
                                                        var r = new URLSearchParams({
                                                            name: e.name,
                                                            size: e.size,
                                                        });
                                                        t.ajax({
                                                            type: "GET",
                                                            url: "".concat(c, "?").concat(r),
                                                            crossDomain: !0,
                                                        })
                                                            .done(function (t) {
                                                                n(null, t);
                                                            })
                                                            .fail(function (t) {
                                                                n(t);
                                                            });
                                                    })(r, O));
                                        });
                                    var T = l.outerHeight();
                                    f.height(T), f.width(1);
                                }
                                function w(t) {
                                    var r = t.responseJSON && t.responseJSON.msg,
                                        i = _;
                                    "string" == typeof r &&
                                        0 === r.indexOf("InvalidFileTypeError")
                                        ? (i = y)
                                        : "string" == typeof r &&
                                        0 === r.indexOf("MaxFileSizeError") &&
                                        (i = m),
                                        p.text(i),
                                        f.removeAttr("data-value"),
                                        f.val(""),
                                        a.toggle(!1),
                                        o.toggle(!0),
                                        s.toggle(!0),
                                        s.focus(),
                                        (n.fileUploads[e].uploading = !1),
                                        S() || I(n);
                                }
                                function O(e, n) {
                                    if (e) return w(e);
                                    var i = n.fileName,
                                        o = n.postData,
                                        a = n.fileId,
                                        u = n.s3Url;
                                    f.attr("data-value", a),
                                        (function (e, n, r, i, o) {
                                            var a = new FormData();
                                            for (var u in n) a.append(u, n[u]);
                                            a.append("file", r, i),
                                                t
                                                    .ajax({
                                                        type: "POST",
                                                        url: e,
                                                        data: a,
                                                        processData: !1,
                                                        contentType: !1,
                                                    })
                                                    .done(function () {
                                                        o(null);
                                                    })
                                                    .fail(function (t) {
                                                        o(t);
                                                    });
                                        })(u, o, r, i, A);
                                }
                                function A(t) {
                                    if (t) return w(t);
                                    a.toggle(!1),
                                        u.css("display", "inline-block"),
                                        u.focus(),
                                        (n.fileUploads[e].uploading = !1),
                                        S() || I(n);
                                }
                                function S() {
                                    var t = (n.fileUploads && n.fileUploads.toArray()) || [];
                                    return t.some(function (t) {
                                        return t.uploading;
                                    });
                                }
                            })(e, i);
                        });
                    var u =
                        i.form.attr("aria-label") || i.form.attr("data-name") || "Form";
                    i.done.attr("aria-label") || i.form.attr("aria-label", u),
                        i.done.attr("tabindex", "-1"),
                        i.done.attr("role", "region"),
                        i.done.attr("aria-label") ||
                        i.done.attr("aria-label", u + " success"),
                        i.fail.attr("tabindex", "-1"),
                        i.fail.attr("role", "region"),
                        i.fail.attr("aria-label") ||
                        i.fail.attr("aria-label", u + " failure");
                    var s = (i.action = r.attr("action"));
                    (i.handler = null),
                        (i.redirect = r.attr("data-redirect")),
                        m.test(s) ? (i.handler = A) : s || (o ? (i.handler = O) : y());
                }
                function I(t) {
                    var e = (t.btn = t.form.find(':input[type="submit"]'));
                    (t.wait = t.btn.attr("data-wait") || null),
                        (t.success = !1),
                        e.prop("disabled", !1),
                        t.label && e.val(t.label);
                }
                function b(t) {
                    var e = t.btn,
                        n = t.wait;
                    e.prop("disabled", !0), n && ((t.label = e.val()), e.val(n));
                }
                function T(e, n) {
                    var r = null;
                    return (
                        (n = n || {}),
                        e
                            .find(':input:not([type="submit"]):not([type="file"])')
                            .each(function (i, o) {
                                var a = t(o),
                                    u = a.attr("type"),
                                    c =
                                        a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
                                    s = a.val();
                                if ("checkbox" === u) s = a.is(":checked");
                                else if ("radio" === u) {
                                    if (null === n[c] || "string" == typeof n[c]) return;
                                    s =
                                        e
                                            .find('input[name="' + a.attr("name") + '"]:checked')
                                            .val() || null;
                                }
                                "string" == typeof s && (s = t.trim(s)),
                                    (n[c] = s),
                                    (r =
                                        r ||
                                        (function (t, e, n, r) {
                                            var i = null;
                                            "password" === e
                                                ? (i = "Passwords cannot be submitted.")
                                                : t.attr("required")
                                                    ? r
                                                        ? v.test(t.attr("type")) &&
                                                        (h.test(r) ||
                                                            (i =
                                                                "Please enter a valid email address for: " + n))
                                                        : (i = "Please fill out the required field: " + n)
                                                    : "g-recaptcha-response" !== n ||
                                                    r ||
                                                    (i = "Please confirm youâ€™re not a robot.");
                                            return i;
                                        })(a, u, c, s));
                            }),
                        r
                    );
                }
                s.ready =
                    s.design =
                    s.preview =
                    function () {
                        !(function () {
                            (o = t("html").attr("data-wf-site")),
                                (u = "https://digipants.com/api/v1/form/" + o),
                                d &&
                                u.indexOf("https://digipants.com") >= 0 &&
                                (u = u.replace(
                                    "https://digipants.com",
                                    "https://formdata.digipants.com"
                                ));
                            if (
                                ((c = "".concat(u, "/signFile")),
                                    !(n = t(p + " form")).length)
                            )
                                return;
                            n.each(_);
                        })(),
                            g ||
                            a ||
                            (function () {
                                (a = !0),
                                    f.on("submit", p + " form", function (e) {
                                        var n = t.data(this, p);
                                        n.handler && ((n.evt = e), n.handler(n));
                                    });
                                var e = [
                                    ["checkbox", ".w-checkbox-input"],
                                    ["radio", ".w-radio-input"],
                                ];
                                f.on(
                                    "change",
                                    p + ' form input[type="checkbox"]:not(.w-checkbox-input)',
                                    function (e) {
                                        t(e.target)
                                            .siblings(".w-checkbox-input")
                                            .toggleClass("w--redirected-checked");
                                    }
                                ),
                                    f.on(
                                        "change",
                                        p + ' form input[type="radio"]',
                                        function (e) {
                                            t(
                                                'input[name="'
                                                    .concat(e.target.name, '"]:not(')
                                                    .concat(".w-checkbox-input", ")")
                                            ).map(function (e, n) {
                                                return t(n)
                                                    .siblings(".w-radio-input")
                                                    .removeClass("w--redirected-checked");
                                            });
                                            var n = t(e.target);
                                            n.hasClass("w-radio-input") ||
                                                n
                                                    .siblings(".w-radio-input")
                                                    .addClass("w--redirected-checked");
                                        }
                                    ),
                                    e.forEach(function (e) {
                                        var n = (0, r.default)(e, 2),
                                            i = n[0],
                                            o = n[1];
                                        f.on(
                                            "focus",
                                            p +
                                            ' form input[type="'.concat(i, '"]:not(') +
                                            o +
                                            ")",
                                            function (e) {
                                                t(e.target)
                                                    .siblings(o)
                                                    .addClass("w--redirected-focus"),
                                                    t(e.target)
                                                        .filter(
                                                            ":focus-visible, [data-wf-focus-visible]"
                                                        )
                                                        .siblings(o)
                                                        .addClass("w--redirected-focus-visible");
                                            }
                                        ),
                                            f.on(
                                                "blur",
                                                p +
                                                ' form input[type="'.concat(i, '"]:not(') +
                                                o +
                                                ")",
                                                function (e) {
                                                    t(e.target)
                                                        .siblings(o)
                                                        .removeClass(
                                                            ""
                                                                .concat("w--redirected-focus", " ")
                                                                .concat("w--redirected-focus-visible")
                                                        );
                                                }
                                            );
                                    });
                            })();
                    };
                var w = { _mkto_trk: "marketo" };
                function O(e) {
                    I(e);
                    var n = e.form,
                        r = {
                            name: n.attr("data-name") || n.attr("name") || "Untitled Form",
                            source: l.href,
                            test: i.env(),
                            fields: {},
                            fileUploads: {},
                            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                                n.html()
                            ),
                            trackingCookies: document.cookie
                                .split("; ")
                                .reduce(function (t, e) {
                                    var n = e.split("="),
                                        r = n[0];
                                    if (r in w) {
                                        var i = w[r],
                                            o = n.slice(1).join("=");
                                        t[i] = o;
                                    }
                                    return t;
                                }, {}),
                        },
                        a = n.attr("data-wf-flow");
                    a && (r.wfFlow = a), x(e);
                    var c = T(n, r.fields);
                    if (c) return E(c);
                    (r.fileUploads = (function (e) {
                        var n = {};
                        return (
                            e.find(':input[type="file"]').each(function (e, r) {
                                var i = t(r),
                                    o =
                                        i.attr("data-name") || i.attr("name") || "File " + (e + 1),
                                    a = i.attr("data-value");
                                "string" == typeof a && (a = t.trim(a)), (n[o] = a);
                            }),
                            n
                        );
                    })(n)),
                        b(e),
                        o
                            ? t
                                .ajax({
                                    url: u,
                                    type: "POST",
                                    data: r,
                                    dataType: "json",
                                    crossDomain: !0,
                                })
                                .done(function (t) {
                                    t && 200 === t.code && (e.success = !0), S(e);
                                })
                                .fail(function () {
                                    S(e);
                                })
                            : S(e);
                }
                function A(n) {
                    I(n);
                    var r = n.form,
                        i = {};
                    if (!/^https/.test(l.href) || /^https/.test(n.action)) {
                        x(n);
                        var o,
                            a = T(r, i);
                        if (a) return E(a);
                        b(n),
                            e.each(i, function (t, e) {
                                v.test(e) && (i.EMAIL = t),
                                    /^((full[ _-]?)?name)$/i.test(e) && (o = t),
                                    /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t),
                                    /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t);
                            }),
                            o &&
                            !i.FNAME &&
                            ((o = o.split(" ")),
                                (i.FNAME = o[0]),
                                (i.LNAME = i.LNAME || o[1]));
                        var u = n.action.replace("/post?", "/post-json?") + "&c=?",
                            c = u.indexOf("u=") + 2;
                        c = u.substring(c, u.indexOf("&", c));
                        var s = u.indexOf("id=") + 3;
                        (s = u.substring(s, u.indexOf("&", s))),
                            (i["b_" + c + "_" + s] = ""),
                            t
                                .ajax({ url: u, data: i, dataType: "jsonp" })
                                .done(function (t) {
                                    (n.success = "success" === t.result || /already/.test(t.msg)),
                                        n.success || console.info("MailChimp error: " + t.msg),
                                        S(n);
                                })
                                .fail(function () {
                                    S(n);
                                });
                    } else r.attr("method", "post");
                }
                function S(t) {
                    var e = t.form,
                        n = t.redirect,
                        r = t.success;
                    r && n
                        ? i.location(n)
                        : (t.done.toggle(r),
                            t.fail.toggle(!r),
                            r ? t.done.focus() : t.fail.focus(),
                            e.toggle(!r),
                            I(t));
                }
                function x(t) {
                    t.evt && t.evt.preventDefault(), (t.evt = null);
                }
                return s;
            })
        );
    },
    function (t, e, n) {
        var r = n(338),
            i = n(339),
            o = n(340);
        t.exports = function (t, e) {
            return r(t) || i(t, e) || o();
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (Array.isArray(t)) return t;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (
                    var a, u = t[Symbol.iterator]();
                    !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e);
                    r = !0
                );
            } catch (t) {
                (i = !0), (o = t);
            } finally {
                try {
                    r || null == u.return || u.return();
                } finally {
                    if (i) throw o;
                }
            }
            return n;
        };
    },
    function (t, e) {
        t.exports = function () {
            throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
            );
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(3),
            i = n(18),
            o = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35,
            };
        r.define(
            "navbar",
            (t.exports = function (t, e) {
                var n,
                    a,
                    u,
                    c,
                    s = {},
                    f = t.tram,
                    l = t(window),
                    d = t(document),
                    p = e.debounce,
                    v = r.env(),
                    h = '<div class="w-nav-overlay" data-wf-ignore />',
                    E = ".w-nav",
                    g = "w--open",
                    m = "w--nav-dropdown-open",
                    y = "w--nav-dropdown-toggle-open",
                    _ = "w--nav-dropdown-list-open",
                    I = "w--nav-link-open",
                    b = i.triggers,
                    T = t();
                function w() {
                    r.resize.off(O);
                }
                function O() {
                    a.each(M);
                }
                function A(n, r) {
                    var i = t(r),
                        a = t.data(r, E);
                    a ||
                        (a = t.data(r, E, {
                            open: !1,
                            el: i,
                            config: {},
                            selectedIdx: -1,
                        })),
                        (a.menu = i.find(".w-nav-menu")),
                        (a.links = a.menu.find(".w-nav-link")),
                        (a.dropdowns = a.menu.find(".w-dropdown")),
                        (a.dropdownToggle = a.menu.find(".w-dropdown-toggle")),
                        (a.dropdownList = a.menu.find(".w-dropdown-list")),
                        (a.button = i.find(".w-nav-button")),
                        (a.container = i.find(".w-container")),
                        (a.overlayContainerId = "w-nav-overlay-" + n),
                        (a.outside = (function (e) {
                            e.outside && d.off("click" + E, e.outside);
                            return function (n) {
                                var r = t(n.target);
                                (c && r.closest(".w-editor-bem-EditorOverlay").length) ||
                                    P(e, r);
                            };
                        })(a));
                    var s = i.find(".w-nav-brand");
                    s &&
                        "/" === s.attr("href") &&
                        null == s.attr("aria-label") &&
                        s.attr("aria-label", "home"),
                        a.button.attr("style", "-webkit-user-select: text;"),
                        null == a.button.attr("aria-label") &&
                        a.button.attr("aria-label", "menu"),
                        a.button.attr("role", "button"),
                        a.button.attr("tabindex", "0"),
                        a.button.attr("aria-controls", a.overlayContainerId),
                        a.button.attr("aria-haspopup", "menu"),
                        a.button.attr("aria-expanded", "false"),
                        a.el.off(E),
                        a.button.off(E),
                        a.menu.off(E),
                        R(a),
                        u
                            ? (x(a),
                                a.el.on(
                                    "setting" + E,
                                    (function (t) {
                                        return function (n, r) {
                                            r = r || {};
                                            var i = l.width();
                                            R(t),
                                                !0 === r.open && G(t, !0),
                                                !1 === r.open && V(t, !0),
                                                t.open &&
                                                e.defer(function () {
                                                    i !== l.width() && C(t);
                                                });
                                        };
                                    })(a)
                                ))
                            : (!(function (e) {
                                if (e.overlay) return;
                                (e.overlay = t(h).appendTo(e.el)),
                                    e.overlay.attr("id", e.overlayContainerId),
                                    (e.parent = e.menu.parent()),
                                    V(e, !0);
                            })(a),
                                a.button.on("click" + E, L(a)),
                                a.menu.on("click" + E, "a", D(a)),
                                a.button.on(
                                    "keydown" + E,
                                    (function (t) {
                                        return function (e) {
                                            switch (e.keyCode) {
                                                case o.SPACE:
                                                case o.ENTER:
                                                    return (
                                                        L(t)(), e.preventDefault(), e.stopPropagation()
                                                    );
                                                case o.ESCAPE:
                                                    return V(t), e.preventDefault(), e.stopPropagation();
                                                case o.ARROW_RIGHT:
                                                case o.ARROW_DOWN:
                                                case o.HOME:
                                                case o.END:
                                                    return t.open
                                                        ? (e.keyCode === o.END
                                                            ? (t.selectedIdx = t.links.length - 1)
                                                            : (t.selectedIdx = 0),
                                                            N(t),
                                                            e.preventDefault(),
                                                            e.stopPropagation())
                                                        : (e.preventDefault(), e.stopPropagation());
                                            }
                                        };
                                    })(a)
                                ),
                                a.el.on(
                                    "keydown" + E,
                                    (function (t) {
                                        return function (e) {
                                            if (t.open)
                                                switch (
                                                ((t.selectedIdx = t.links.index(
                                                    document.activeElement
                                                )),
                                                    e.keyCode)
                                                ) {
                                                    case o.HOME:
                                                    case o.END:
                                                        return (
                                                            e.keyCode === o.END
                                                                ? (t.selectedIdx = t.links.length - 1)
                                                                : (t.selectedIdx = 0),
                                                            N(t),
                                                            e.preventDefault(),
                                                            e.stopPropagation()
                                                        );
                                                    case o.ESCAPE:
                                                        return (
                                                            V(t),
                                                            t.button.focus(),
                                                            e.preventDefault(),
                                                            e.stopPropagation()
                                                        );
                                                    case o.ARROW_LEFT:
                                                    case o.ARROW_UP:
                                                        return (
                                                            (t.selectedIdx = Math.max(-1, t.selectedIdx - 1)),
                                                            N(t),
                                                            e.preventDefault(),
                                                            e.stopPropagation()
                                                        );
                                                    case o.ARROW_RIGHT:
                                                    case o.ARROW_DOWN:
                                                        return (
                                                            (t.selectedIdx = Math.min(
                                                                t.links.length - 1,
                                                                t.selectedIdx + 1
                                                            )),
                                                            N(t),
                                                            e.preventDefault(),
                                                            e.stopPropagation()
                                                        );
                                                }
                                        };
                                    })(a)
                                )),
                        M(n, r);
                }
                function S(e, n) {
                    var r = t.data(n, E);
                    r && (x(r), t.removeData(n, E));
                }
                function x(t) {
                    t.overlay && (V(t, !0), t.overlay.remove(), (t.overlay = null));
                }
                function R(t) {
                    var n = {},
                        r = t.config || {},
                        i = (n.animation = t.el.attr("data-animation") || "default");
                    (n.animOver = /^over/.test(i)),
                        (n.animDirect = /left$/.test(i) ? -1 : 1),
                        r.animation !== i && t.open && e.defer(C, t),
                        (n.easing = t.el.attr("data-easing") || "ease"),
                        (n.easing2 = t.el.attr("data-easing2") || "ease");
                    var o = t.el.attr("data-duration");
                    (n.duration = null != o ? Number(o) : 400),
                        (n.docHeight = t.el.attr("data-doc-height")),
                        (t.config = n);
                }
                function N(t) {
                    if (t.links[t.selectedIdx]) {
                        var e = t.links[t.selectedIdx];
                        e.focus(), D(e);
                    }
                }
                function C(t) {
                    t.open && (V(t, !0), G(t, !0));
                }
                function L(t) {
                    return p(function () {
                        t.open ? V(t) : G(t);
                    });
                }
                function D(e) {
                    return function (n) {
                        var i = t(this).attr("href");
                        r.validClick(n.currentTarget)
                            ? i && 0 === i.indexOf("#") && e.open && V(e)
                            : n.preventDefault();
                    };
                }
                (s.ready =
                    s.design =
                    s.preview =
                    function () {
                        if (
                            ((u = v && r.env("design")),
                                (c = r.env("editor")),
                                (n = t(document.body)),
                                !(a = d.find(E)).length)
                        )
                            return;
                        a.each(A), w(), r.resize.on(O);
                    }),
                    (s.destroy = function () {
                        (T = t()), w(), a && a.length && a.each(S);
                    });
                var P = p(function (t, e) {
                    if (t.open) {
                        var n = e.closest(".w-nav-menu");
                        t.menu.is(n) || V(t);
                    }
                });
                function M(e, n) {
                    var r = t.data(n, E),
                        i = (r.collapsed = "none" !== r.button.css("display"));
                    if ((!r.open || i || u || V(r, !0), r.container.length)) {
                        var o = (function (e) {
                            var n = e.container.css(j);
                            "none" === n && (n = "");
                            return function (e, r) {
                                (r = t(r)).css(j, ""), "none" === r.css(j) && r.css(j, n);
                            };
                        })(r);
                        r.links.each(o), r.dropdowns.each(o);
                    }
                    r.open && X(r);
                }
                var j = "max-width";
                function F(t, e) {
                    e.setAttribute("data-nav-menu-open", "");
                }
                function k(t, e) {
                    e.removeAttribute("data-nav-menu-open");
                }
                function G(t, e) {
                    if (!t.open) {
                        (t.open = !0),
                            t.menu.each(F),
                            t.links.addClass(I),
                            t.dropdowns.addClass(m),
                            t.dropdownToggle.addClass(y),
                            t.dropdownList.addClass(_),
                            t.button.addClass(g);
                        var n = t.config;
                        ("none" === n.animation ||
                            !f.support.transform ||
                            n.duration <= 0) &&
                            (e = !0);
                        var i = X(t),
                            o = t.menu.outerHeight(!0),
                            a = t.menu.outerWidth(!0),
                            c = t.el.height(),
                            s = t.el[0];
                        if (
                            (M(0, s),
                                b.intro(0, s),
                                r.redraw.up(),
                                u || d.on("click" + E, t.outside),
                                e)
                        )
                            v();
                        else {
                            var l = "transform " + n.duration + "ms " + n.easing;
                            if (
                                (t.overlay &&
                                    ((T = t.menu.prev()), t.overlay.show().append(t.menu)),
                                    n.animOver)
                            )
                                return (
                                    f(t.menu)
                                        .add(l)
                                        .set({ x: n.animDirect * a, height: i })
                                        .start({ x: 0 })
                                        .then(v),
                                    void (t.overlay && t.overlay.width(a))
                                );
                            var p = c + o;
                            f(t.menu).add(l).set({ y: -p }).start({ y: 0 }).then(v);
                        }
                    }
                    function v() {
                        t.button.attr("aria-expanded", "true");
                    }
                }
                function X(t) {
                    var e = t.config,
                        r = e.docHeight ? d.height() : n.height();
                    return (
                        e.animOver
                            ? t.menu.height(r)
                            : "fixed" !== t.el.css("position") && (r -= t.el.outerHeight(!0)),
                        t.overlay && t.overlay.height(r),
                        r
                    );
                }
                function V(t, e) {
                    if (t.open) {
                        (t.open = !1), t.button.removeClass(g);
                        var n = t.config;
                        if (
                            (("none" === n.animation ||
                                !f.support.transform ||
                                n.duration <= 0) &&
                                (e = !0),
                                b.outro(0, t.el[0]),
                                d.off("click" + E, t.outside),
                                e)
                        )
                            return f(t.menu).stop(), void c();
                        var r = "transform " + n.duration + "ms " + n.easing2,
                            i = t.menu.outerHeight(!0),
                            o = t.menu.outerWidth(!0),
                            a = t.el.height();
                        if (n.animOver)
                            f(t.menu)
                                .add(r)
                                .start({ x: o * n.animDirect })
                                .then(c);
                        else {
                            var u = a + i;
                            f(t.menu).add(r).start({ y: -u }).then(c);
                        }
                    }
                    function c() {
                        t.menu.height(""),
                            f(t.menu).set({ x: 0, y: 0 }),
                            t.menu.each(k),
                            t.links.removeClass(I),
                            t.dropdowns.removeClass(m),
                            t.dropdownToggle.removeClass(y),
                            t.dropdownList.removeClass(_),
                            t.overlay &&
                            t.overlay.children().length &&
                            (T.length ? t.menu.insertAfter(T) : t.menu.prependTo(t.parent),
                                t.overlay.attr("style", "").hide()),
                            t.el.triggerHandler("w-close"),
                            t.button.attr("aria-expanded", "false");
                    }
                }
                return s;
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(3),
            i = n(18),
            o = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35,
            },
            a =
                'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        r.define(
            "slider",
            (t.exports = function (t, e) {
                var n,
                    u,
                    c,
                    s = {},
                    f = t.tram,
                    l = t(document),
                    d = r.env(),
                    p = ".w-slider",
                    v = '<div class="w-slider-dot" data-wf-ignore />',
                    h =
                        '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
                    E = "w-slider-force-show",
                    g = i.triggers,
                    m = !1;
                function y() {
                    (n = l.find(p)).length &&
                        (n.each(b), c || (_(), r.resize.on(I), r.redraw.on(s.redraw)));
                }
                function _() {
                    r.resize.off(I), r.redraw.off(s.redraw);
                }
                function I() {
                    n.filter(":visible").each(P);
                }
                function b(e, n) {
                    var r = t(n),
                        i = t.data(n, p);
                    i ||
                        (i = t.data(n, p, {
                            index: 0,
                            depth: 1,
                            hasFocus: { keyboard: !1, mouse: !1 },
                            el: r,
                            config: {},
                        })),
                        (i.mask = r.children(".w-slider-mask")),
                        (i.left = r.children(".w-slider-arrow-left")),
                        (i.right = r.children(".w-slider-arrow-right")),
                        (i.nav = r.children(".w-slider-nav")),
                        (i.slides = i.mask.children(".w-slide")),
                        i.slides.each(g.reset),
                        m && (i.maskWidth = 0),
                        void 0 === r.attr("role") && r.attr("role", "region"),
                        void 0 === r.attr("aria-label") && r.attr("aria-label", "carousel");
                    var o = i.mask.attr("id");
                    if (
                        (o || ((o = "w-slider-mask-" + e), i.mask.attr("id", o)),
                            u || i.ariaLiveLabel || (i.ariaLiveLabel = t(h).appendTo(i.mask)),
                            i.left.attr("role", "button"),
                            i.left.attr("tabindex", "0"),
                            i.left.attr("aria-controls", o),
                            void 0 === i.left.attr("aria-label") &&
                            i.left.attr("aria-label", "previous slide"),
                            i.right.attr("role", "button"),
                            i.right.attr("tabindex", "0"),
                            i.right.attr("aria-controls", o),
                            void 0 === i.right.attr("aria-label") &&
                            i.right.attr("aria-label", "next slide"),
                            !f.support.transform)
                    )
                        return i.left.hide(), i.right.hide(), i.nav.hide(), void (c = !0);
                    i.el.off(p),
                        i.left.off(p),
                        i.right.off(p),
                        i.nav.off(p),
                        T(i),
                        u
                            ? (i.el.on("setting" + p, C(i)), N(i), (i.hasTimer = !1))
                            : (i.el.on("swipe" + p, C(i)),
                                i.left.on("click" + p, S(i)),
                                i.right.on("click" + p, x(i)),
                                i.left.on("keydown" + p, A(i, S)),
                                i.right.on("keydown" + p, A(i, x)),
                                i.nav.on("keydown" + p, "> div", C(i)),
                                i.config.autoplay &&
                                !i.hasTimer &&
                                ((i.hasTimer = !0), (i.timerCount = 1), R(i)),
                                i.el.on("mouseenter" + p, O(i, !0, "mouse")),
                                i.el.on("focusin" + p, O(i, !0, "keyboard")),
                                i.el.on("mouseleave" + p, O(i, !1, "mouse")),
                                i.el.on("focusout" + p, O(i, !1, "keyboard"))),
                        i.nav.on("click" + p, "> div", C(i)),
                        d ||
                        i.mask
                            .contents()
                            .filter(function () {
                                return 3 === this.nodeType;
                            })
                            .remove();
                    var a = r.filter(":hidden");
                    a.addClass(E);
                    var s = r.parents(":hidden");
                    s.addClass(E), m || P(e, n), a.removeClass(E), s.removeClass(E);
                }
                function T(t) {
                    var e = { crossOver: 0 };
                    (e.animation = t.el.attr("data-animation") || "slide"),
                        "outin" === e.animation &&
                        ((e.animation = "cross"), (e.crossOver = 0.5)),
                        (e.easing = t.el.attr("data-easing") || "ease");
                    var n = t.el.attr("data-duration");
                    if (
                        ((e.duration = null != n ? parseInt(n, 10) : 500),
                            w(t.el.attr("data-infinite")) && (e.infinite = !0),
                            w(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0),
                            w(t.el.attr("data-hide-arrows"))
                                ? (e.hideArrows = !0)
                                : t.config.hideArrows && (t.left.show(), t.right.show()),
                            w(t.el.attr("data-autoplay")))
                    ) {
                        (e.autoplay = !0),
                            (e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3),
                            (e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10));
                        var r = "mousedown" + p + " touchstart" + p;
                        u ||
                            t.el.off(r).one(r, function () {
                                N(t);
                            });
                    }
                    var i = t.right.width();
                    (e.edge = i ? i + 40 : 100), (t.config = e);
                }
                function w(t) {
                    return "1" === t || "true" === t;
                }
                function O(e, n, r) {
                    return function (i) {
                        if (n) e.hasFocus[r] = n;
                        else {
                            if (t.contains(e.el.get(0), i.relatedTarget)) return;
                            if (
                                ((e.hasFocus[r] = n),
                                    (e.hasFocus.mouse && "keyboard" === r) ||
                                    (e.hasFocus.keyboard && "mouse" === r))
                            )
                                return;
                        }
                        n
                            ? (e.ariaLiveLabel.attr("aria-live", "polite"),
                                e.hasTimer && N(e))
                            : (e.ariaLiveLabel.attr("aria-live", "off"), e.hasTimer && R(e));
                    };
                }
                function A(t, e) {
                    return function (n) {
                        switch (n.keyCode) {
                            case o.SPACE:
                            case o.ENTER:
                                return e(t)(), n.preventDefault(), n.stopPropagation();
                        }
                    };
                }
                function S(t) {
                    return function () {
                        D(t, { index: t.index - 1, vector: -1 });
                    };
                }
                function x(t) {
                    return function () {
                        D(t, { index: t.index + 1, vector: 1 });
                    };
                }
                function R(t) {
                    N(t);
                    var e = t.config,
                        n = e.timerMax;
                    (n && t.timerCount++ > n) ||
                        (t.timerId = window.setTimeout(function () {
                            null == t.timerId || u || (x(t)(), R(t));
                        }, e.delay));
                }
                function N(t) {
                    window.clearTimeout(t.timerId), (t.timerId = null);
                }
                function C(n) {
                    return function (i, a) {
                        a = a || {};
                        var c = n.config;
                        if (u && "setting" === i.type) {
                            if ("prev" === a.select) return S(n)();
                            if ("next" === a.select) return x(n)();
                            if ((T(n), M(n), null == a.select)) return;
                            !(function (n, r) {
                                var i = null;
                                r === n.slides.length && (y(), M(n)),
                                    e.each(n.anchors, function (e, n) {
                                        t(e.els).each(function (e, o) {
                                            t(o).index() === r && (i = n);
                                        });
                                    }),
                                    null != i && D(n, { index: i, immediate: !0 });
                            })(n, a.select);
                        } else {
                            if ("swipe" === i.type) {
                                if (c.disableSwipe) return;
                                if (r.env("editor")) return;
                                return "left" === a.direction
                                    ? x(n)()
                                    : "right" === a.direction
                                        ? S(n)()
                                        : void 0;
                            }
                            if (n.nav.has(i.target).length) {
                                var s = t(i.target).index();
                                if (
                                    ("click" === i.type && D(n, { index: s }),
                                        "keydown" === i.type)
                                )
                                    switch (i.keyCode) {
                                        case o.ENTER:
                                        case o.SPACE:
                                            D(n, { index: s }), i.preventDefault();
                                            break;
                                        case o.ARROW_LEFT:
                                        case o.ARROW_UP:
                                            L(n.nav, Math.max(s - 1, 0)), i.preventDefault();
                                            break;
                                        case o.ARROW_RIGHT:
                                        case o.ARROW_DOWN:
                                            L(n.nav, Math.min(s + 1, n.pages)), i.preventDefault();
                                            break;
                                        case o.HOME:
                                            L(n.nav, 0), i.preventDefault();
                                            break;
                                        case o.END:
                                            L(n.nav, n.pages), i.preventDefault();
                                            break;
                                        default:
                                            return;
                                    }
                            }
                        }
                    };
                }
                function L(t, e) {
                    var n = t.children().eq(e).focus();
                    t.children().not(n);
                }
                function D(e, n) {
                    n = n || {};
                    var r = e.config,
                        i = e.anchors;
                    e.previous = e.index;
                    var o = n.index,
                        c = {};
                    o < 0
                        ? ((o = i.length - 1),
                            r.infinite &&
                            ((c.x = -e.endX), (c.from = 0), (c.to = i[0].width)))
                        : o >= i.length &&
                        ((o = 0),
                            r.infinite &&
                            ((c.x = i[i.length - 1].width),
                                (c.from = -i[i.length - 1].x),
                                (c.to = c.from - c.x))),
                        (e.index = o);
                    var s = e.nav
                        .children()
                        .eq(o)
                        .addClass("w-active")
                        .attr("aria-pressed", "true")
                        .attr("tabindex", "0");
                    e.nav
                        .children()
                        .not(s)
                        .removeClass("w-active")
                        .attr("aria-pressed", "false")
                        .attr("tabindex", "-1"),
                        r.hideArrows &&
                        (e.index === i.length - 1 ? e.right.hide() : e.right.show(),
                            0 === e.index ? e.left.hide() : e.left.show());
                    var l = e.offsetX || 0,
                        d = (e.offsetX = -i[e.index].x),
                        p = { x: d, opacity: 1, visibility: "" },
                        v = t(i[e.index].els),
                        h = t(i[e.previous] && i[e.previous].els),
                        E = e.slides.not(v),
                        y = r.animation,
                        _ = r.easing,
                        I = Math.round(r.duration),
                        b = n.vector || (e.index > e.previous ? 1 : -1),
                        T = "opacity " + I + "ms " + _,
                        w = "transform " + I + "ms " + _;
                    if (
                        (v.find(a).removeAttr("tabindex"),
                            v.removeAttr("aria-hidden"),
                            v.find("*").removeAttr("aria-hidden"),
                            E.find(a).attr("tabindex", "-1"),
                            E.attr("aria-hidden", "true"),
                            E.find("*").attr("aria-hidden", "true"),
                            u || (v.each(g.intro), E.each(g.outro)),
                            n.immediate && !m)
                    )
                        return f(v).set(p), void S();
                    if (e.index !== e.previous) {
                        if (
                            (u ||
                                e.ariaLiveLabel.text(
                                    "Slide ".concat(o + 1, " of ").concat(i.length, ".")
                                ),
                                "cross" === y)
                        ) {
                            var O = Math.round(I - I * r.crossOver),
                                A = Math.round(I - O);
                            return (
                                (T = "opacity " + O + "ms " + _),
                                f(h).set({ visibility: "" }).add(T).start({ opacity: 0 }),
                                void f(v)
                                    .set({ visibility: "", x: d, opacity: 0, zIndex: e.depth++ })
                                    .add(T)
                                    .wait(A)
                                    .then({ opacity: 1 })
                                    .then(S)
                            );
                        }
                        if ("fade" === y)
                            return (
                                f(h).set({ visibility: "" }).stop(),
                                void f(v)
                                    .set({ visibility: "", x: d, opacity: 0, zIndex: e.depth++ })
                                    .add(T)
                                    .start({ opacity: 1 })
                                    .then(S)
                            );
                        if ("over" === y)
                            return (
                                (p = { x: e.endX }),
                                f(h).set({ visibility: "" }).stop(),
                                void f(v)
                                    .set({
                                        visibility: "",
                                        zIndex: e.depth++,
                                        x: d + i[e.index].width * b,
                                    })
                                    .add(w)
                                    .start({ x: d })
                                    .then(S)
                            );
                        r.infinite && c.x
                            ? (f(e.slides.not(h))
                                .set({ visibility: "", x: c.x })
                                .add(w)
                                .start({ x: d }),
                                f(h)
                                    .set({ visibility: "", x: c.from })
                                    .add(w)
                                    .start({ x: c.to }),
                                (e.shifted = h))
                            : (r.infinite &&
                                e.shifted &&
                                (f(e.shifted).set({ visibility: "", x: l }),
                                    (e.shifted = null)),
                                f(e.slides).set({ visibility: "" }).add(w).start({ x: d }));
                    }
                    function S() {
                        (v = t(i[e.index].els)),
                            (E = e.slides.not(v)),
                            "slide" !== y && (p.visibility = "hidden"),
                            f(E).set(p);
                    }
                }
                function P(e, n) {
                    var r = t.data(n, p);
                    if (r)
                        return (function (t) {
                            var e = t.mask.width();
                            if (t.maskWidth !== e) return (t.maskWidth = e), !0;
                            return !1;
                        })(r)
                            ? M(r)
                            : void (
                                u &&
                                (function (e) {
                                    var n = 0;
                                    if (
                                        (e.slides.each(function (e, r) {
                                            n += t(r).outerWidth(!0);
                                        }),
                                            e.slidesWidth !== n)
                                    )
                                        return (e.slidesWidth = n), !0;
                                    return !1;
                                })(r) &&
                                M(r)
                            );
                }
                function M(e) {
                    var n = 1,
                        r = 0,
                        i = 0,
                        o = 0,
                        a = e.maskWidth,
                        c = a - e.config.edge;
                    c < 0 && (c = 0),
                        (e.anchors = [{ els: [], x: 0, width: 0 }]),
                        e.slides.each(function (u, s) {
                            i - r > c &&
                                (n++,
                                    (r += a),
                                    (e.anchors[n - 1] = { els: [], x: i, width: 0 })),
                                (o = t(s).outerWidth(!0)),
                                (i += o),
                                (e.anchors[n - 1].width += o),
                                e.anchors[n - 1].els.push(s);
                            var f = u + 1 + " of " + e.slides.length;
                            t(s).attr("aria-label", f), t(s).attr("role", "group");
                        }),
                        (e.endX = i),
                        u && (e.pages = null),
                        e.nav.length &&
                        e.pages !== n &&
                        ((e.pages = n),
                            (function (e) {
                                var n,
                                    r = [],
                                    i = e.el.attr("data-nav-spacing");
                                i && (i = parseFloat(i) + "px");
                                for (var o = 0, a = e.pages; o < a; o++)
                                    (n = t(v))
                                        .attr("aria-label", "Show slide " + (o + 1) + " of " + a)
                                        .attr("aria-pressed", "false")
                                        .attr("role", "button")
                                        .attr("tabindex", "-1"),
                                        e.nav.hasClass("w-num") && n.text(o + 1),
                                        null != i && n.css({ "margin-left": i, "margin-right": i }),
                                        r.push(n);
                                e.nav.empty().append(r);
                            })(e));
                    var s = e.index;
                    s >= n && (s = n - 1), D(e, { immediate: !0, index: s });
                }
                return (
                    (s.ready = function () {
                        (u = r.env("design")), y();
                    }),
                    (s.design = function () {
                        (u = !0), setTimeout(y, 1e3);
                    }),
                    (s.preview = function () {
                        (u = !1), y();
                    }),
                    (s.redraw = function () {
                        (m = !0), y(), (m = !1);
                    }),
                    (s.destroy = _),
                    s
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(3),
            i = n(18);
        r.define(
            "tabs",
            (t.exports = function (t) {
                var e,
                    n,
                    o = {},
                    a = t.tram,
                    u = t(document),
                    c = r.env,
                    s = c.safari,
                    f = c(),
                    l = "data-w-tab",
                    d = "data-w-pane",
                    p = ".w-tabs",
                    v = "w--current",
                    h = "w--tab-active",
                    E = i.triggers,
                    g = !1;
                function m() {
                    (n = f && r.env("design")),
                        (e = u.find(p)).length &&
                        (e.each(I),
                            r.env("preview") && !g && e.each(_),
                            y(),
                            r.redraw.on(o.redraw));
                }
                function y() {
                    r.redraw.off(o.redraw);
                }
                function _(e, n) {
                    var r = t.data(n, p);
                    r &&
                        (r.links && r.links.each(E.reset),
                            r.panes && r.panes.each(E.reset));
                }
                function I(e, r) {
                    var i = p.substr(1) + "-" + e,
                        o = t(r),
                        a = t.data(r, p);
                    if (
                        (a || (a = t.data(r, p, { el: o, config: {} })),
                            (a.current = null),
                            (a.tabIdentifier = i + "-" + l),
                            (a.paneIdentifier = i + "-" + d),
                            (a.menu = o.children(".w-tab-menu")),
                            (a.links = a.menu.children(".w-tab-link")),
                            (a.content = o.children(".w-tab-content")),
                            (a.panes = a.content.children(".w-tab-pane")),
                            a.el.off(p),
                            a.links.off(p),
                            a.menu.attr("role", "tablist"),
                            a.links.attr("tabindex", "-1"),
                            (function (t) {
                                var e = {};
                                e.easing = t.el.attr("data-easing") || "ease";
                                var n = parseInt(t.el.attr("data-duration-in"), 10);
                                n = e.intro = n == n ? n : 0;
                                var r = parseInt(t.el.attr("data-duration-out"), 10);
                                (r = e.outro = r == r ? r : 0),
                                    (e.immediate = !n && !r),
                                    (t.config = e);
                            })(a),
                            !n)
                    ) {
                        a.links.on(
                            "click" + p,
                            (function (t) {
                                return function (e) {
                                    e.preventDefault();
                                    var n = e.currentTarget.getAttribute(l);
                                    n && b(t, { tab: n });
                                };
                            })(a)
                        ),
                            a.links.on(
                                "keydown" + p,
                                (function (t) {
                                    return function (e) {
                                        var n = (function (t) {
                                            var e = t.current;
                                            return Array.prototype.findIndex.call(
                                                t.links,
                                                function (t) {
                                                    return t.getAttribute(l) === e;
                                                },
                                                null
                                            );
                                        })(t),
                                            r = e.key,
                                            i = {
                                                ArrowLeft: n - 1,
                                                ArrowUp: n - 1,
                                                ArrowRight: n + 1,
                                                ArrowDown: n + 1,
                                                End: t.links.length - 1,
                                                Home: 0,
                                            };
                                        if (r in i) {
                                            e.preventDefault();
                                            var o = i[r];
                                            -1 === o && (o = t.links.length - 1),
                                                o === t.links.length && (o = 0);
                                            var a = t.links[o],
                                                u = a.getAttribute(l);
                                            u && b(t, { tab: u });
                                        }
                                    };
                                })(a)
                            );
                        var u = a.links.filter("." + v).attr(l);
                        u && b(a, { tab: u, immediate: !0 });
                    }
                }
                function b(e, n) {
                    n = n || {};
                    var i = e.config,
                        o = i.easing,
                        u = n.tab;
                    if (u !== e.current) {
                        var c;
                        (e.current = u),
                            e.links.each(function (r, o) {
                                var a = t(o);
                                if (n.immediate || i.immediate) {
                                    var s = e.panes[r];
                                    o.id || (o.id = e.tabIdentifier + "-" + r),
                                        s.id || (s.id = e.paneIdentifier + "-" + r),
                                        (o.href = "#" + s.id),
                                        o.setAttribute("role", "tab"),
                                        o.setAttribute("aria-controls", s.id),
                                        o.setAttribute("aria-selected", "false"),
                                        s.setAttribute("role", "tabpanel"),
                                        s.setAttribute("aria-labelledby", o.id);
                                }
                                o.getAttribute(l) === u
                                    ? ((c = o),
                                        a
                                            .addClass(v)
                                            .removeAttr("tabindex")
                                            .attr({ "aria-selected": "true" })
                                            .each(E.intro))
                                    : a.hasClass(v) &&
                                    a
                                        .removeClass(v)
                                        .attr({ tabindex: "-1", "aria-selected": "false" })
                                        .each(E.outro);
                            });
                        var f = [],
                            d = [];
                        e.panes.each(function (e, n) {
                            var r = t(n);
                            n.getAttribute(l) === u ? f.push(n) : r.hasClass(h) && d.push(n);
                        });
                        var p = t(f),
                            m = t(d);
                        if (n.immediate || i.immediate)
                            return (
                                p.addClass(h).each(E.intro),
                                m.removeClass(h),
                                void (g || r.redraw.up())
                            );
                        var y = window.scrollX,
                            _ = window.scrollY;
                        c.focus(),
                            window.scrollTo(y, _),
                            m.length && i.outro
                                ? (m.each(E.outro),
                                    a(m)
                                        .add("opacity " + i.outro + "ms " + o, { fallback: s })
                                        .start({ opacity: 0 })
                                        .then(function () {
                                            return T(i, m, p);
                                        }))
                                : T(i, m, p);
                    }
                }
                function T(t, e, n) {
                    if (
                        (e
                            .removeClass(h)
                            .css({
                                opacity: "",
                                transition: "",
                                transform: "",
                                width: "",
                                height: "",
                            }),
                            n.addClass(h).each(E.intro),
                            r.redraw.up(),
                            !t.intro)
                    )
                        return a(n).set({ opacity: 1 });
                    a(n)
                        .set({ opacity: 0 })
                        .redraw()
                        .add("opacity " + t.intro + "ms " + t.easing, { fallback: s })
                        .start({ opacity: 1 });
                }
                return (
                    (o.ready = o.design = o.preview = m),
                    (o.redraw = function () {
                        (g = !0), m(), (g = !1);
                    }),
                    (o.destroy = function () {
                        (e = u.find(p)).length && (e.each(_), y());
                    }),
                    o
                );
            })
        );
    },
]);
/**
 * ----------------------------------------------------------------------
 * digipants: Interactions 2.0: Init
 */
digipants.require("ix2").init({
    events: {
        e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-2",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".button-primary",
                originalId:
                    "638ed5ab213c111ebebb3ac5|78173e44-d899-9844-e1f4-64a11a3da641",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".button-primary",
                    originalId:
                        "638ed5ab213c111ebebb3ac5|78173e44-d899-9844-e1f4-64a11a3da641",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1671612131313,
        },
        "e-2": {
            id: "e-2",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-2",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".button-primary",
                originalId:
                    "638ed5ab213c111ebebb3ac5|78173e44-d899-9844-e1f4-64a11a3da641",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".button-primary",
                    originalId:
                        "638ed5ab213c111ebebb3ac5|78173e44-d899-9844-e1f4-64a11a3da641",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1671612131316,
        },
        "e-3": {
            id: "e-3",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-3",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-4",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63afc46367bbed58bf80a31b|45536d0f-4b52-f997-ecaa-4aca8c8cf86b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63afc46367bbed58bf80a31b|45536d0f-4b52-f997-ecaa-4aca8c8cf86b",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1672823160931,
        },
        "e-4": {
            id: "e-4",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-4",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-3",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63afc46367bbed58bf80a31b|45536d0f-4b52-f997-ecaa-4aca8c8cf86b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63afc46367bbed58bf80a31b|45536d0f-4b52-f997-ecaa-4aca8c8cf86b",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1672823160931,
        },
        "e-7": {
            id: "e-7",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-5",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-80",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63afc46367bbed58bf80a31b|12dd49da-5832-1ad3-5a44-202733d40d41",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63afc46367bbed58bf80a31b|12dd49da-5832-1ad3-5a44-202733d40d41",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1673671822394,
        },
        "e-8": {
            id: "e-8",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-6",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-76",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63afc46367bbed58bf80a31b|12dd49da-5832-1ad3-5a44-202733d40d41",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63afc46367bbed58bf80a31b|12dd49da-5832-1ad3-5a44-202733d40d41",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1673671822395,
        },
        "e-9": {
            id: "e-9",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-7",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-77",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".single-team-link-block",
                originalId:
                    "63afc46367bbed58bf80a31b|76e016ba-5743-de70-acd2-b7e83fbc9f68",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".single-team-link-block",
                    originalId:
                        "63afc46367bbed58bf80a31b|76e016ba-5743-de70-acd2-b7e83fbc9f68",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1673672264902,
        },
        "e-10": {
            id: "e-10",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-8",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-81",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".single-team-link-block",
                originalId:
                    "63afc46367bbed58bf80a31b|76e016ba-5743-de70-acd2-b7e83fbc9f68",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".single-team-link-block",
                    originalId:
                        "63afc46367bbed58bf80a31b|76e016ba-5743-de70-acd2-b7e83fbc9f68",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1673672264902,
        },
        "e-11": {
            id: "e-11",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-11",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-12",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".single-blog-wrapper",
                originalId:
                    "63afc46367bbed58bf80a31b|5f97594b-ec8f-2234-1496-aa1ac1fd24f9",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".single-blog-wrapper",
                    originalId:
                        "63afc46367bbed58bf80a31b|5f97594b-ec8f-2234-1496-aa1ac1fd24f9",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1673758958724,
        },
        "e-12": {
            id: "e-12",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-12",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-11",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".single-blog-wrapper",
                originalId:
                    "63afc46367bbed58bf80a31b|5f97594b-ec8f-2234-1496-aa1ac1fd24f9",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".single-blog-wrapper",
                    originalId:
                        "63afc46367bbed58bf80a31b|5f97594b-ec8f-2234-1496-aa1ac1fd24f9",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1673758958724,
        },
        "e-13": {
            id: "e-13",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-13",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-74",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63afc46367bbed58bf80a31b|d6f8fe98-081f-6d8e-5d16-ae370ffe6b47",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63afc46367bbed58bf80a31b|d6f8fe98-081f-6d8e-5d16-ae370ffe6b47",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1673759236426,
        },
        "e-14": {
            id: "e-14",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-79",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63afc46367bbed58bf80a31b|d6f8fe98-081f-6d8e-5d16-ae370ffe6b47",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63afc46367bbed58bf80a31b|d6f8fe98-081f-6d8e-5d16-ae370ffe6b47",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1673759236426,
        },
        "e-15": {
            id: "e-15",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-16" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".accordion-item",
                originalId:
                    "6391b1289a998988fe8004db|03c51403-01fd-421e-32f5-4372c3d97b3f",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".accordion-item",
                    originalId:
                        "6391b1289a998988fe8004db|03c51403-01fd-421e-32f5-4372c3d97b3f",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1661081483389,
        },
        "e-19": {
            id: "e-19",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-20" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".footer-logo-block",
                originalId:
                    "63afc46367bbed58bf80a31b|c71c4297-7deb-7547-8c04-2a8c7c101bc6",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".footer-logo-block",
                    originalId:
                        "63afc46367bbed58bf80a31b|c71c4297-7deb-7547-8c04-2a8c7c101bc6",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1659346694430,
        },
        "e-21": {
            id: "e-21",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-22" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".footer-block",
                originalId:
                    "63afc46367bbed58bf80a31b|c71c4297-7deb-7547-8c04-2a8c7c101bd4",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".footer-block",
                    originalId:
                        "63afc46367bbed58bf80a31b|c71c4297-7deb-7547-8c04-2a8c7c101bd4",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1659346707214,
        },
        "e-25": {
            id: "e-25",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-5",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-26",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63c4e14cafad0b225fe3fb0c|c49ff552-9841-cf16-a249-f1158ccaaa0a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63c4e14cafad0b225fe3fb0c|c49ff552-9841-cf16-a249-f1158ccaaa0a",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1673847140379,
        },
        "e-26": {
            id: "e-26",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-6",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-25",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63c4e14cafad0b225fe3fb0c|c49ff552-9841-cf16-a249-f1158ccaaa0a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63c4e14cafad0b225fe3fb0c|c49ff552-9841-cf16-a249-f1158ccaaa0a",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1673847140379,
        },
        "e-27": {
            id: "e-27",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-13",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-28",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63c4e14cafad0b225fe3fb0c|c49ff552-9841-cf16-a249-f1158ccaaa59",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63c4e14cafad0b225fe3fb0c|c49ff552-9841-cf16-a249-f1158ccaaa59",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1673847140379,
        },
        "e-28": {
            id: "e-28",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-27",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63c4e14cafad0b225fe3fb0c|c49ff552-9841-cf16-a249-f1158ccaaa59",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63c4e14cafad0b225fe3fb0c|c49ff552-9841-cf16-a249-f1158ccaaa59",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1673847140379,
        },
        "e-29": {
            id: "e-29",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-5",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-30",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63c7bcda42c0ed582011caa2|503fdec5-36a9-4534-d242-547a45c11ade",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63c7bcda42c0ed582011caa2|503fdec5-36a9-4534-d242-547a45c11ade",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674035699159,
        },
        "e-30": {
            id: "e-30",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-6",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-29",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63c7bcda42c0ed582011caa2|503fdec5-36a9-4534-d242-547a45c11ade",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63c7bcda42c0ed582011caa2|503fdec5-36a9-4534-d242-547a45c11ade",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674035699159,
        },
        "e-31": {
            id: "e-31",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-5",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-32",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63c90139cbe2f613c8ed7371|416faa4d-cdcd-234b-58af-53b6502b791a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63c90139cbe2f613c8ed7371|416faa4d-cdcd-234b-58af-53b6502b791a",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674117536803,
        },
        "e-32": {
            id: "e-32",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-6",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-31",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63c90139cbe2f613c8ed7371|416faa4d-cdcd-234b-58af-53b6502b791a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63c90139cbe2f613c8ed7371|416faa4d-cdcd-234b-58af-53b6502b791a",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674117536803,
        },
        "e-33": {
            id: "e-33",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-5",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-34",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63b65582723165ec8f12c57e|dd45b26b-cb99-5998-0457-6bd598a886af",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63b65582723165ec8f12c57e|dd45b26b-cb99-5998-0457-6bd598a886af",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674119653805,
        },
        "e-34": {
            id: "e-34",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-6",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-33",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63b65582723165ec8f12c57e|dd45b26b-cb99-5998-0457-6bd598a886af",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63b65582723165ec8f12c57e|dd45b26b-cb99-5998-0457-6bd598a886af",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674119653805,
        },
        "e-35": {
            id: "e-35",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-5",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-36",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63b65582723165ec8f12c57e|1f826992-e8f8-2a96-bb6e-5f9f302501be",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63b65582723165ec8f12c57e|1f826992-e8f8-2a96-bb6e-5f9f302501be",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674119714775,
        },
        "e-36": {
            id: "e-36",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-6",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-35",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63b65582723165ec8f12c57e|1f826992-e8f8-2a96-bb6e-5f9f302501be",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63b65582723165ec8f12c57e|1f826992-e8f8-2a96-bb6e-5f9f302501be",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674119714775,
        },
        "e-37": {
            id: "e-37",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-38" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".relative-product-title-block",
                originalId:
                    "63995967dbae1ba396eaf227|87d6eeda-644a-c1ca-399f-4650f86e6674",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".relative-product-title-block",
                    originalId:
                        "63995967dbae1ba396eaf227|87d6eeda-644a-c1ca-399f-4650f86e6674",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1671611266011,
        },
        "e-40": {
            id: "e-40",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "FADE_EFFECT",
                instant: false,
                config: { actionListId: "fadeIn", autoStopEventId: "e-261" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".button-primary-2",
                originalId:
                    "63391ae20a9495ba2f40c3c6|916cc880-9a02-ea9c-f44a-b112db342cb5",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".button-primary-2",
                    originalId:
                        "63391ae20a9495ba2f40c3c6|916cc880-9a02-ea9c-f44a-b112db342cb5",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 300,
                direction: null,
                effectIn: true,
            },
            createdOn: 1664773992990,
        },
        "e-42": {
            id: "e-42",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-43" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63b65500a775aabbbc8ae39b|7a296da2-afab-cf39-b848-4722bf7a1155",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63b65500a775aabbbc8ae39b|7a296da2-afab-cf39-b848-4722bf7a1155",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1662353156735,
        },
        "e-44": {
            id: "e-44",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-47" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".agent-message-details",
                originalId:
                    "63b65500a775aabbbc8ae39b|7a296da2-afab-cf39-b848-4722bf7a115a",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".agent-message-details",
                    originalId:
                        "63b65500a775aabbbc8ae39b|7a296da2-afab-cf39-b848-4722bf7a115a",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1659349268938,
        },
        "e-45": {
            id: "e-45",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-50" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".form-field",
                originalId:
                    "6301fbe5d624e2abb2f178e3|a016f666-3d05-a142-822d-25442d346c11",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".form-field",
                    originalId:
                        "6301fbe5d624e2abb2f178e3|a016f666-3d05-a142-822d-25442d346c11",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1659432729123,
        },
        "e-48": {
            id: "e-48",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-41" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63b65500a775aabbbc8ae39b|7a296da2-afab-cf39-b848-4722bf7a1143",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63b65500a775aabbbc8ae39b|7a296da2-afab-cf39-b848-4722bf7a1143",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1659349136563,
        },
        "e-49": {
            id: "e-49",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-46" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".property-single-amenities",
                originalId:
                    "63b65500a775aabbbc8ae39b|7a296da2-afab-cf39-b848-4722bf7a1148",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".property-single-amenities",
                    originalId:
                        "63b65500a775aabbbc8ae39b|7a296da2-afab-cf39-b848-4722bf7a1148",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1659349161771,
        },
        "e-51": {
            id: "e-51",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-52" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63b65500a775aabbbc8ae39b|7a296da2-afab-cf39-b848-4722bf7a1145",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63b65500a775aabbbc8ae39b|7a296da2-afab-cf39-b848-4722bf7a1145",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1659349148307,
        },
        "e-53": {
            id: "e-53",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-13",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-54",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63cb608f8de9f29b3b2d4615|2d6a31fe-6965-1cc4-2fde-19cb2ea7f444",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63cb608f8de9f29b3b2d4615|2d6a31fe-6965-1cc4-2fde-19cb2ea7f444",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674273270439,
        },
        "e-54": {
            id: "e-54",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-53",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63cb608f8de9f29b3b2d4615|2d6a31fe-6965-1cc4-2fde-19cb2ea7f444",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63cb608f8de9f29b3b2d4615|2d6a31fe-6965-1cc4-2fde-19cb2ea7f444",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674273270439,
        },
        "e-55": {
            id: "e-55",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-13",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-56",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63c2880af3d9c50c112f2b40|bb89a7dd-4751-0a7e-8cae-beb9f05a348d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63c2880af3d9c50c112f2b40|bb89a7dd-4751-0a7e-8cae-beb9f05a348d",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674281461800,
        },
        "e-56": {
            id: "e-56",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-55",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63c2880af3d9c50c112f2b40|bb89a7dd-4751-0a7e-8cae-beb9f05a348d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63c2880af3d9c50c112f2b40|bb89a7dd-4751-0a7e-8cae-beb9f05a348d",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674281461800,
        },
        "e-57": {
            id: "e-57",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-13",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-58",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63cb7ca4d802df24186cfc5d|0be843f4-fff1-9c13-949a-1092d7226401",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63cb7ca4d802df24186cfc5d|0be843f4-fff1-9c13-949a-1092d7226401",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674282928655,
        },
        "e-58": {
            id: "e-58",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-57",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63cb7ca4d802df24186cfc5d|0be843f4-fff1-9c13-949a-1092d7226401",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63cb7ca4d802df24186cfc5d|0be843f4-fff1-9c13-949a-1092d7226401",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674282928655,
        },
        "e-59": {
            id: "e-59",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-13",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-60",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63cb7ca4d802df24186cfc5d|7db7a64c-b20d-293d-57dc-6b56640d96ce",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63cb7ca4d802df24186cfc5d|7db7a64c-b20d-293d-57dc-6b56640d96ce",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674283015504,
        },
        "e-60": {
            id: "e-60",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-59",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63cb7ca4d802df24186cfc5d|7db7a64c-b20d-293d-57dc-6b56640d96ce",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63cb7ca4d802df24186cfc5d|7db7a64c-b20d-293d-57dc-6b56640d96ce",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674283015504,
        },
        "e-61": {
            id: "e-61",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-13",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-62",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63cb745257b94e7bedc59819|4313f24b-3939-678f-fcba-e69cbc4d2675",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63cb745257b94e7bedc59819|4313f24b-3939-678f-fcba-e69cbc4d2675",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674289342314,
        },
        "e-62": {
            id: "e-62",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-61",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63cb745257b94e7bedc59819|4313f24b-3939-678f-fcba-e69cbc4d2675",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63cb745257b94e7bedc59819|4313f24b-3939-678f-fcba-e69cbc4d2675",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674289342314,
        },
        "e-63": {
            id: "e-63",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-13",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-64",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63cb745257b94e7bedc59819|a0faad55-3886-263e-4b43-b26cd25b0bb6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63cb745257b94e7bedc59819|a0faad55-3886-263e-4b43-b26cd25b0bb6",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674289353263,
        },
        "e-64": {
            id: "e-64",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-63",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63cb745257b94e7bedc59819|a0faad55-3886-263e-4b43-b26cd25b0bb6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63cb745257b94e7bedc59819|a0faad55-3886-263e-4b43-b26cd25b0bb6",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674289353263,
        },
        "e-65": {
            id: "e-65",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-13",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-66",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63c37b319bcbb48a007da1f9|f8749c07-e3be-588d-d08c-5fdf12f5de6a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63c37b319bcbb48a007da1f9|f8749c07-e3be-588d-d08c-5fdf12f5de6a",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674289962174,
        },
        "e-66": {
            id: "e-66",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-65",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63c37b319bcbb48a007da1f9|f8749c07-e3be-588d-d08c-5fdf12f5de6a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63c37b319bcbb48a007da1f9|f8749c07-e3be-588d-d08c-5fdf12f5de6a",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674289962174,
        },
        "e-67": {
            id: "e-67",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-13",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-68",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63c37b319bcbb48a007da1f9|288d5285-3f71-d869-ef9e-9f7d56f529a3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63c37b319bcbb48a007da1f9|288d5285-3f71-d869-ef9e-9f7d56f529a3",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674290047394,
        },
        "e-68": {
            id: "e-68",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-14",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-67",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63c37b319bcbb48a007da1f9|288d5285-3f71-d869-ef9e-9f7d56f529a3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63c37b319bcbb48a007da1f9|288d5285-3f71-d869-ef9e-9f7d56f529a3",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674290047394,
        },
        "e-69": {
            id: "e-69",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-70" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".form-field-2",
                originalId:
                    "6301fbe5d624e2abb2f178e3|a016f666-3d05-a142-822d-25442d346c11",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".form-field-2",
                    originalId:
                        "6301fbe5d624e2abb2f178e3|a016f666-3d05-a142-822d-25442d346c11",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1659432729123,
        },
        "e-73": {
            id: "e-73",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-71" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".form-field-3",
                originalId:
                    "6301fbe5d624e2abb2f178e3|a016f666-3d05-a142-822d-25442d346c11",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".form-field-3",
                    originalId:
                        "6301fbe5d624e2abb2f178e3|a016f666-3d05-a142-822d-25442d346c11",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1659432729123,
        },
        "e-75": {
            id: "e-75",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-86" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".section-image-wrapper",
                originalId:
                    "63cbc31e5c439a0715868356|58f3be4c-300e-e8c7-84b1-bcd0d9413e5d",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".section-image-wrapper",
                    originalId:
                        "63cbc31e5c439a0715868356|58f3be4c-300e-e8c7-84b1-bcd0d9413e5d",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1659348413694,
        },
        "e-76": {
            id: "e-76",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-80" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".section-heading",
                originalId:
                    "62c3b7111a998e3ff18476eb|0128728e-d30a-25ea-8624-0c42f727deb7",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".section-heading",
                    originalId:
                        "62c3b7111a998e3ff18476eb|0128728e-d30a-25ea-8624-0c42f727deb7",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1659346267838,
        },
        "e-79": {
            id: "e-79",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-74" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".title-top-block",
                originalId:
                    "62eb83fe467fa54964f5d86c|516842bc-f007-c2eb-029b-5ea5292449fe",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".title-top-block",
                    originalId:
                        "62eb83fe467fa54964f5d86c|516842bc-f007-c2eb-029b-5ea5292449fe",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1659859852643,
        },
        "e-81": {
            id: "e-81",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-77" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".sub-heading",
                originalId:
                    "62eb83fe467fa54964f5d86c|98f2fa3b-9147-df34-cc73-3e8d8f3370cf",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".sub-heading",
                    originalId:
                        "62eb83fe467fa54964f5d86c|98f2fa3b-9147-df34-cc73-3e8d8f3370cf",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1659345596939,
        },
        "e-82": {
            id: "e-82",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-78" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".contact-inner",
                originalId:
                    "63cbc31e5c439a0715868356|58f3be4c-300e-e8c7-84b1-bcd0d9413e6f",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".contact-inner",
                    originalId:
                        "63cbc31e5c439a0715868356|58f3be4c-300e-e8c7-84b1-bcd0d9413e6f",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1659348327319,
        },
        "e-83": {
            id: "e-83",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-85" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".message-title",
                originalId:
                    "63cbc31e5c439a0715868356|58f3be4c-300e-e8c7-84b1-bcd0d9413e90",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".message-title",
                    originalId:
                        "63cbc31e5c439a0715868356|58f3be4c-300e-e8c7-84b1-bcd0d9413e90",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1659348339416,
        },
        "e-87": {
            id: "e-87",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-88",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".button-primary-4",
                originalId:
                    "638ed5ab213c111ebebb3ac5|78173e44-d899-9844-e1f4-64a11a3da641",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".button-primary-4",
                    originalId:
                        "638ed5ab213c111ebebb3ac5|78173e44-d899-9844-e1f4-64a11a3da641",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1671612131313,
        },
        "e-88": {
            id: "e-88",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-18",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-87",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".button-primary-4",
                originalId:
                    "638ed5ab213c111ebebb3ac5|78173e44-d899-9844-e1f4-64a11a3da641",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".button-primary-4",
                    originalId:
                        "638ed5ab213c111ebebb3ac5|78173e44-d899-9844-e1f4-64a11a3da641",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1671612131316,
        },
        "e-89": {
            id: "e-89",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-90" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "63ccd31570ce98bba450cb81|405ad4c9-c96c-7e40-45ca-90b997f26d18",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "63ccd31570ce98bba450cb81|405ad4c9-c96c-7e40-45ca-90b997f26d18",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1665900779092,
        },
        "e-91": {
            id: "e-91",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInLeft", autoStopEventId: "e-92" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".slider-content",
                originalId:
                    "63afc46367bbed58bf80a31b|6891c6d3-69c4-e5a0-4795-98b3c8f0ce71",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".slider-content",
                    originalId:
                        "63afc46367bbed58bf80a31b|6891c6d3-69c4-e5a0-4795-98b3c8f0ce71",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 500,
                direction: "LEFT",
                effectIn: true,
            },
            createdOn: 1674446838494,
        },
        "e-93": {
            id: "e-93",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInLeft", autoStopEventId: "e-94" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".our-achievement",
                originalId:
                    "63afc46367bbed58bf80a31b|3f87fac2-0963-7dee-9fdf-5c7fede5c01e",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".our-achievement",
                    originalId:
                        "63afc46367bbed58bf80a31b|3f87fac2-0963-7dee-9fdf-5c7fede5c01e",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 700,
                direction: "LEFT",
                effectIn: true,
            },
            createdOn: 1674446899199,
        },
        "e-95": {
            id: "e-95",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-96" },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".feature-wrapper",
                originalId:
                    "63afc46367bbed58bf80a31b|fdef0c9a-865e-8a0c-d66a-1215ec3fa051",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".feature-wrapper",
                    originalId:
                        "63afc46367bbed58bf80a31b|fdef0c9a-865e-8a0c-d66a-1215ec3fa051",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674447086207,
        },
        "e-97": {
            id: "e-97",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-98" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".section-title-block",
                originalId:
                    "63afc46367bbed58bf80a31b|fb697445-d609-8b47-1f7b-607d7f344cd9",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".section-title-block",
                    originalId:
                        "63afc46367bbed58bf80a31b|fb697445-d609-8b47-1f7b-607d7f344cd9",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674447128239,
        },
        "e-99": {
            id: "e-99",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GROW_EFFECT",
                instant: false,
                config: { actionListId: "growIn", autoStopEventId: "e-100" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".about-left-image",
                originalId:
                    "63afc46367bbed58bf80a31b|cb3bb258-c21c-0c96-5df3-6e57347ba315",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".about-left-image",
                    originalId:
                        "63afc46367bbed58bf80a31b|cb3bb258-c21c-0c96-5df3-6e57347ba315",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: null,
                effectIn: true,
            },
            createdOn: 1674447255503,
        },
        "e-101": {
            id: "e-101",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-102" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".about-right-content",
                originalId:
                    "63afc46367bbed58bf80a31b|babd104d-356e-d3d1-b41e-cd5515ce0e6f",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".about-right-content",
                    originalId:
                        "63afc46367bbed58bf80a31b|babd104d-356e-d3d1-b41e-cd5515ce0e6f",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674447318773,
        },
        "e-103": {
            id: "e-103",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GROW_EFFECT",
                instant: false,
                config: { actionListId: "growIn", autoStopEventId: "e-104" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".service-image-block",
                originalId:
                    "63afc46367bbed58bf80a31b|acf5cb77-96d7-e106-e2d7-183aabc259ea",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".service-image-block",
                    originalId:
                        "63afc46367bbed58bf80a31b|acf5cb77-96d7-e106-e2d7-183aabc259ea",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: null,
                effectIn: true,
            },
            createdOn: 1674447372767,
        },
        "e-105": {
            id: "e-105",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "FLIP_EFFECT",
                instant: false,
                config: { actionListId: "flipInLeft", autoStopEventId: "e-106" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".single-service-block",
                originalId:
                    "63afc46367bbed58bf80a31b|45536d0f-4b52-f997-ecaa-4aca8c8cf86b",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".single-service-block",
                    originalId:
                        "63afc46367bbed58bf80a31b|45536d0f-4b52-f997-ecaa-4aca8c8cf86b",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "LEFT",
                effectIn: true,
            },
            createdOn: 1674447402878,
        },
        "e-107": {
            id: "e-107",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-108" },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".counter-wrapper",
                originalId:
                    "63afc46367bbed58bf80a31b|e2c6b5be-4e7b-d7e8-1dd1-6c58f648b2fa",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".counter-wrapper",
                    originalId:
                        "63afc46367bbed58bf80a31b|e2c6b5be-4e7b-d7e8-1dd1-6c58f648b2fa",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674447472542,
        },
        "e-109": {
            id: "e-109",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-110" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".choose-single-content",
                originalId:
                    "63afc46367bbed58bf80a31b|c1b2a13d-39b2-3cb0-acc5-e51539706955",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".choose-single-content",
                    originalId:
                        "63afc46367bbed58bf80a31b|c1b2a13d-39b2-3cb0-acc5-e51539706955",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674447513615,
        },
        "e-111": {
            id: "e-111",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GROW_EFFECT",
                instant: false,
                config: { actionListId: "growIn", autoStopEventId: "e-112" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".choose-thumbnail-inner",
                originalId:
                    "63afc46367bbed58bf80a31b|f576e64a-7c1f-ee4c-276e-3787a4576e2c",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".choose-thumbnail-inner",
                    originalId:
                        "63afc46367bbed58bf80a31b|f576e64a-7c1f-ee4c-276e-3787a4576e2c",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: null,
                effectIn: true,
            },
            createdOn: 1674447543830,
        },
        "e-113": {
            id: "e-113",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-114" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".single-team-wrapper",
                originalId:
                    "63afc46367bbed58bf80a31b|12dd49da-5832-1ad3-5a44-202733d40d41",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".single-team-wrapper",
                    originalId:
                        "63afc46367bbed58bf80a31b|12dd49da-5832-1ad3-5a44-202733d40d41",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674447597456,
        },
        "e-115": {
            id: "e-115",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GROW_EFFECT",
                instant: false,
                config: { actionListId: "growIn", autoStopEventId: "e-116" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".testimonial-image-inner",
                originalId:
                    "63afc46367bbed58bf80a31b|34934297-d294-9a49-1a14-46a78995f323",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".testimonial-image-inner",
                    originalId:
                        "63afc46367bbed58bf80a31b|34934297-d294-9a49-1a14-46a78995f323",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: null,
                effectIn: true,
            },
            createdOn: 1674447634398,
        },
        "e-117": {
            id: "e-117",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-118" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".testimonial-content",
                originalId:
                    "63afc46367bbed58bf80a31b|a4f8b874-5ee0-f2ee-334e-35a7f9014d04",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".testimonial-content",
                    originalId:
                        "63afc46367bbed58bf80a31b|a4f8b874-5ee0-f2ee-334e-35a7f9014d04",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674447666863,
        },
        "e-119": {
            id: "e-119",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-120" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".single-blog-wrapper",
                originalId:
                    "63afc46367bbed58bf80a31b|5f97594b-ec8f-2234-1496-aa1ac1fd24f9",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".single-blog-wrapper",
                    originalId:
                        "63afc46367bbed58bf80a31b|5f97594b-ec8f-2234-1496-aa1ac1fd24f9",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674447706639,
        },
        "e-121": {
            id: "e-121",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-122" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".service-tabs",
                originalId:
                    "63c4e14cafad0b225fe3fb0c|90b7f012-fb67-0e4d-5633-381f73fcfa5f",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".service-tabs",
                    originalId:
                        "63c4e14cafad0b225fe3fb0c|90b7f012-fb67-0e4d-5633-381f73fcfa5f",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674448107567,
        },
        "e-123": {
            id: "e-123",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-124" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".testimonial-two-wrapper",
                originalId:
                    "63c4e14cafad0b225fe3fb0c|62bb71ce-206b-2069-e4f8-8791bc730bcf",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".testimonial-two-wrapper",
                    originalId:
                        "63c4e14cafad0b225fe3fb0c|62bb71ce-206b-2069-e4f8-8791bc730bcf",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674448225999,
        },
        "e-125": {
            id: "e-125",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-126" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".testimonial-button-block",
                originalId:
                    "63c4e14cafad0b225fe3fb0c|5dd88214-341e-8694-aad1-deefc796dcb7",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".testimonial-button-block",
                    originalId:
                        "63c4e14cafad0b225fe3fb0c|5dd88214-341e-8694-aad1-deefc796dcb7",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674448240759,
        },
        "e-127": {
            id: "e-127",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-128" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".single-counter",
                originalId:
                    "63c4e14cafad0b225fe3fb0c|fc69fd01-c2d4-bbf4-52ba-e91d88077a65",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".single-counter",
                    originalId:
                        "63c4e14cafad0b225fe3fb0c|fc69fd01-c2d4-bbf4-52ba-e91d88077a65",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674448343528,
        },
        "e-129": {
            id: "e-129",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-130" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".breadcrumb-wrapper",
                originalId:
                    "63c776bab962f03eeb37e785|e68fd4ce-7c61-2eb1-ad09-f4572d7542d7",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".breadcrumb-wrapper",
                    originalId:
                        "63c776bab962f03eeb37e785|e68fd4ce-7c61-2eb1-ad09-f4572d7542d7",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674448522270,
        },
        "e-131": {
            id: "e-131",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-132" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".about-summary",
                originalId:
                    "63c4e14cafad0b225fe3fb0c|fc69fd01-c2d4-bbf4-52ba-e91d88077a60",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".about-summary",
                    originalId:
                        "63c4e14cafad0b225fe3fb0c|fc69fd01-c2d4-bbf4-52ba-e91d88077a60",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674449909871,
        },
        "e-133": {
            id: "e-133",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-134" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".about-summary-two",
                originalId:
                    "63c4e14cafad0b225fe3fb0c|fc69fd01-c2d4-bbf4-52ba-e91d88077a62",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".about-summary-two",
                    originalId:
                        "63c4e14cafad0b225fe3fb0c|fc69fd01-c2d4-bbf4-52ba-e91d88077a62",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674449926134,
        },
        "e-135": {
            id: "e-135",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-136" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".subscription-form-side",
                originalId:
                    "63c7bcda42c0ed582011caa2|a28fd1ea-6e07-ed39-7b92-c5e6d13b4a65",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".subscription-form-side",
                    originalId:
                        "63c7bcda42c0ed582011caa2|a28fd1ea-6e07-ed39-7b92-c5e6d13b4a65",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674450163710,
        },
        "e-137": {
            id: "e-137",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInRight", autoStopEventId: "e-138" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".section-image",
                originalId:
                    "63c7bcda42c0ed582011caa2|a28fd1ea-6e07-ed39-7b92-c5e6d13b4a70",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".section-image",
                    originalId:
                        "63c7bcda42c0ed582011caa2|a28fd1ea-6e07-ed39-7b92-c5e6d13b4a70",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "RIGHT",
                effectIn: true,
            },
            createdOn: 1674450194111,
        },
        "e-139": {
            id: "e-139",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-140" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".about-feature-wrapper.appointment-page",
                originalId:
                    "63cba4d80760e70289296585|91513887-b1e0-06f5-ab53-31647d2a3678",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".about-feature-wrapper.appointment-page",
                    originalId:
                        "63cba4d80760e70289296585|91513887-b1e0-06f5-ab53-31647d2a3678",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674450345439,
        },
        "e-141": {
            id: "e-141",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInRight", autoStopEventId: "e-142" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".appointment-image-iner",
                originalId:
                    "63cba4d80760e70289296585|83ab1156-aa18-d033-23b1-e05f87565cbf",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".appointment-image-iner",
                    originalId:
                        "63cba4d80760e70289296585|83ab1156-aa18-d033-23b1-e05f87565cbf",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "RIGHT",
                effectIn: true,
            },
            createdOn: 1674450380814,
        },
        "e-143": {
            id: "e-143",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-144" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".appointment-title-block",
                originalId:
                    "63cba4d80760e70289296585|df6d78dd-6dbe-a73e-7352-78d5031229ec",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".appointment-title-block",
                    originalId:
                        "63cba4d80760e70289296585|df6d78dd-6dbe-a73e-7352-78d5031229ec",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674450824254,
        },
        "e-145": {
            id: "e-145",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-146" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".send-message-summary",
                originalId:
                    "63cbc31e5c439a0715868356|66d4748d-c96a-a800-5839-80f368ede80a",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".send-message-summary",
                    originalId:
                        "63cbc31e5c439a0715868356|66d4748d-c96a-a800-5839-80f368ede80a",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674451007743,
        },
        "e-147": {
            id: "e-147",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-148" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".blog-details-content-block",
                originalId:
                    "63c2880af3d9c50c112f2b40|1ef907bf-2f41-5809-5b91-a5c3c44bda22",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".blog-details-content-block",
                    originalId:
                        "63c2880af3d9c50c112f2b40|1ef907bf-2f41-5809-5b91-a5c3c44bda22",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674451135462,
        },
        "e-149": {
            id: "e-149",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-150" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".blog-details-sidebar-block",
                originalId:
                    "63c2880af3d9c50c112f2b40|e6765b20-3920-59cd-2af7-d50983ac8c53",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".blog-details-sidebar-block",
                    originalId:
                        "63c2880af3d9c50c112f2b40|e6765b20-3920-59cd-2af7-d50983ac8c53",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674451146086,
        },
        "e-151": {
            id: "e-151",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GROW_EFFECT",
                instant: false,
                config: { actionListId: "growIn", autoStopEventId: "e-152" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".team-details-thunmbnail",
                originalId:
                    "63b65500a775aabbbc8ae39b|f6ee99d4-3878-9016-90cc-77372c660e52",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".team-details-thunmbnail",
                    originalId:
                        "63b65500a775aabbbc8ae39b|f6ee99d4-3878-9016-90cc-77372c660e52",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: null,
                effectIn: true,
            },
            createdOn: 1674451187831,
        },
        "e-153": {
            id: "e-153",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-154" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".team-details-content-block",
                originalId:
                    "63b65500a775aabbbc8ae39b|b43cb55e-c84c-d688-f013-e37295f88f4e",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".team-details-content-block",
                    originalId:
                        "63b65500a775aabbbc8ae39b|b43cb55e-c84c-d688-f013-e37295f88f4e",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674451201759,
        },
        "e-155": {
            id: "e-155",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-156" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".agent-property-amenitie",
                originalId:
                    "63b65500a775aabbbc8ae39b|7a296da2-afab-cf39-b848-4722bf7a1142",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".agent-property-amenitie",
                    originalId:
                        "63b65500a775aabbbc8ae39b|7a296da2-afab-cf39-b848-4722bf7a1142",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674451224399,
        },
        "e-157": {
            id: "e-157",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-158" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".agent-contact-side",
                originalId:
                    "63b65500a775aabbbc8ae39b|7a296da2-afab-cf39-b848-4722bf7a1154",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".agent-contact-side",
                    originalId:
                        "63b65500a775aabbbc8ae39b|7a296da2-afab-cf39-b848-4722bf7a1154",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674451267687,
        },
        "e-159": {
            id: "e-159",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-160" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".service-details-link",
                originalId:
                    "63b3f9e31c7774a5975abf7c|d9c944fe-3779-5703-4a30-1d94304d9837",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".service-details-link",
                    originalId:
                        "63b3f9e31c7774a5975abf7c|d9c944fe-3779-5703-4a30-1d94304d9837",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674451321151,
        },
        "e-161": {
            id: "e-161",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-162" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".service-details-content-block",
                originalId:
                    "63b3f9e31c7774a5975abf7c|2b25eb6f-870e-055e-672c-a89e9f4ef158",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".service-details-content-block",
                    originalId:
                        "63b3f9e31c7774a5975abf7c|2b25eb6f-870e-055e-672c-a89e9f4ef158",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674451343671,
        },
        "e-163": {
            id: "e-163",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-164" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".service-details-sidebar-block",
                originalId:
                    "63b3f9e31c7774a5975abf7c|4ddb80e5-6141-39f4-87f4-a8ab3256c89c",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".service-details-sidebar-block",
                    originalId:
                        "63b3f9e31c7774a5975abf7c|4ddb80e5-6141-39f4-87f4-a8ab3256c89c",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674451356760,
        },
        "e-165": {
            id: "e-165",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-166" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".search-item-block",
                originalId:
                    "63cb79e4fbf4f5550f0921fb|63cb79e4fbf4f580330921fc000000000014",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".search-item-block",
                    originalId:
                        "63cb79e4fbf4f5550f0921fb|63cb79e4fbf4f580330921fc000000000014",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674451464744,
        },
        "e-167": {
            id: "e-167",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-168" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".blog-details-search-wrapper",
                originalId:
                    "63c2880af3d9c50c112f2b40|088cc027-f22d-9e78-181d-f4bf9c1f81b0",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".blog-details-search-wrapper",
                    originalId:
                        "63c2880af3d9c50c112f2b40|088cc027-f22d-9e78-181d-f4bf9c1f81b0",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1674539150152,
        },
        "e-169": {
            id: "e-169",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-19",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-170",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".accordion-item-trigger",
                originalId:
                    "63afc46367bbed58bf80a31b|15f7002a-8635-946e-45d6-f1e93c5558f5",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".accordion-item-trigger",
                    originalId:
                        "63afc46367bbed58bf80a31b|15f7002a-8635-946e-45d6-f1e93c5558f5",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674553984721,
        },
        "e-170": {
            id: "e-170",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-20",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-169",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".accordion-item-trigger",
                originalId:
                    "63afc46367bbed58bf80a31b|15f7002a-8635-946e-45d6-f1e93c5558f5",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".accordion-item-trigger",
                    originalId:
                        "63afc46367bbed58bf80a31b|15f7002a-8635-946e-45d6-f1e93c5558f5",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1674553984724,
        },
    },
    actionLists: {
        a: {
            id: "a",
            title: "Button Hover In",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {},
                                xValue: 0,
                                xUnit: "px",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {},
                                xValue: 5,
                                xUnit: "px",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1671612139886,
        },
        "a-2": {
            id: "a-2",
            title: "Button Hover Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-2-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {},
                                xValue: 0,
                                xUnit: "px",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1671612139886,
        },
        "a-3": {
            id: "a-3",
            title: "Single Service Hover In",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-3-n-2",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".service-icon-block",
                                    selectorGuids: ["0e40c784-aecd-6f49-792e-d653e069f956"],
                                },
                                globalSwatchId: "",
                                rValue: 235,
                                bValue: 255,
                                gValue: 242,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-3-n-3",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".service-title",
                                    selectorGuids: ["0e88d426-cb14-df98-c97e-676171eca812"],
                                },
                                globalSwatchId: "a0cbd7fa",
                                rValue: 18,
                                bValue: 41,
                                gValue: 18,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-3-n-4",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".service-summary",
                                    selectorGuids: ["320985d5-514d-605d-94e2-06a89dd3c7b9"],
                                },
                                globalSwatchId: "a722293b",
                                rValue: 57,
                                bValue: 74,
                                gValue: 57,
                                aValue: 1,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-3-n-8",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".service-summary",
                                    selectorGuids: ["320985d5-514d-605d-94e2-06a89dd3c7b9"],
                                },
                                globalSwatchId: "f03183dc",
                                rValue: 255,
                                bValue: 255,
                                gValue: 255,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-3-n-7",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".service-title",
                                    selectorGuids: ["0e88d426-cb14-df98-c97e-676171eca812"],
                                },
                                globalSwatchId: "f03183dc",
                                rValue: 255,
                                bValue: 255,
                                gValue: 255,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-3-n-6",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".service-icon-block",
                                    selectorGuids: ["0e40c784-aecd-6f49-792e-d653e069f956"],
                                },
                                globalSwatchId: "",
                                rValue: 235,
                                bValue: 255,
                                gValue: 242,
                                aValue: 1,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1672823165851,
        },
        "a-4": {
            id: "a-4",
            title: "Single Service Hover  Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-4-n",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".service-icon-block",
                                    selectorGuids: ["0e40c784-aecd-6f49-792e-d653e069f956"],
                                },
                                globalSwatchId: "",
                                rValue: 235,
                                bValue: 255,
                                gValue: 242,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-4-n-2",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".service-title",
                                    selectorGuids: ["0e88d426-cb14-df98-c97e-676171eca812"],
                                },
                                globalSwatchId: "a0cbd7fa",
                                rValue: 18,
                                bValue: 41,
                                gValue: 18,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-4-n-3",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".service-summary",
                                    selectorGuids: ["320985d5-514d-605d-94e2-06a89dd3c7b9"],
                                },
                                globalSwatchId: "a722293b",
                                rValue: 57,
                                bValue: 74,
                                gValue: 57,
                                aValue: 1,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1672823165851,
        },
        "a-5": {
            id: "a-5",
            title: "Single Team Hover In",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-5-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team-thumbnail",
                                    selectorGuids: ["304e677c-7468-2e5e-e12a-a394529df18a"],
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true,
                            },
                        },
                        {
                            id: "a-5-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team-thumbnail",
                                    selectorGuids: ["304e677c-7468-2e5e-e12a-a394529df18a"],
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-5-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team-thumbnail",
                                    selectorGuids: ["304e677c-7468-2e5e-e12a-a394529df18a"],
                                },
                                xValue: 1.1,
                                yValue: 1.1,
                                locked: true,
                            },
                        },
                        {
                            id: "a-5-n-4",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team-thumbnail",
                                    selectorGuids: ["304e677c-7468-2e5e-e12a-a394529df18a"],
                                },
                                zValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1673671832151,
        },
        "a-6": {
            id: "a-6",
            title: "Single Team Hover Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-6-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team-thumbnail",
                                    selectorGuids: ["304e677c-7468-2e5e-e12a-a394529df18a"],
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true,
                            },
                        },
                        {
                            id: "a-6-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team-thumbnail",
                                    selectorGuids: ["304e677c-7468-2e5e-e12a-a394529df18a"],
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1673671832151,
        },
        "a-7": {
            id: "a-7",
            title: "Team Title Hover In",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-7-n",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team-member-name",
                                    selectorGuids: ["cd00b63b-31a7-431f-4fe5-360c9a6756c4"],
                                },
                                globalSwatchId: "a0cbd7fa",
                                rValue: 18,
                                bValue: 41,
                                gValue: 18,
                                aValue: 1,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-7-n-2",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team-member-name",
                                    selectorGuids: ["cd00b63b-31a7-431f-4fe5-360c9a6756c4"],
                                },
                                globalSwatchId: "003a34df",
                                rValue: 65,
                                bValue: 161,
                                gValue: 93,
                                aValue: 1,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1673672270447,
        },
        "a-8": {
            id: "a-8",
            title: "Team Title Hover Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-8-n",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team-member-name",
                                    selectorGuids: ["cd00b63b-31a7-431f-4fe5-360c9a6756c4"],
                                },
                                globalSwatchId: "a0cbd7fa",
                                rValue: 18,
                                bValue: 41,
                                gValue: 18,
                                aValue: 1,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1673672270447,
        },
        "a-11": {
            id: "a-11",
            title: "Single Blog Wrapper Hover In",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-11-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog-thumbnail-image",
                                    selectorGuids: ["29cd5d87-dd5d-a4d1-98dc-e89c18b54430"],
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true,
                            },
                        },
                        {
                            id: "a-11-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog-thumbnail-image",
                                    selectorGuids: ["29cd5d87-dd5d-a4d1-98dc-e89c18b54430"],
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-11-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog-thumbnail-image",
                                    selectorGuids: ["29cd5d87-dd5d-a4d1-98dc-e89c18b54430"],
                                },
                                xValue: 1.2,
                                yValue: 1.2,
                                locked: true,
                            },
                        },
                        {
                            id: "a-11-n-4",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog-thumbnail-image",
                                    selectorGuids: ["29cd5d87-dd5d-a4d1-98dc-e89c18b54430"],
                                },
                                zValue: 5,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1673758962157,
        },
        "a-12": {
            id: "a-12",
            title: "Single Blog Wrapper Hover Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-12-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog-thumbnail-image",
                                    selectorGuids: ["29cd5d87-dd5d-a4d1-98dc-e89c18b54430"],
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true,
                            },
                        },
                        {
                            id: "a-12-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog-thumbnail-image",
                                    selectorGuids: ["29cd5d87-dd5d-a4d1-98dc-e89c18b54430"],
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1673758962157,
        },
        "a-13": {
            id: "a-13",
            title: "Blog Title Hover In",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-13-n",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog-title",
                                    selectorGuids: ["ceb131a7-3d3c-5d0c-ccb6-d4fa52ab0649"],
                                },
                                globalSwatchId: "a0cbd7fa",
                                rValue: 18,
                                bValue: 41,
                                gValue: 18,
                                aValue: 1,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-13-n-2",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog-title",
                                    selectorGuids: ["ceb131a7-3d3c-5d0c-ccb6-d4fa52ab0649"],
                                },
                                globalSwatchId: "003a34df",
                                rValue: 65,
                                bValue: 161,
                                gValue: 93,
                                aValue: 1,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1673759249619,
        },
        "a-14": {
            id: "a-14",
            title: "Blog Title Hover Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-14-n",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog-title",
                                    selectorGuids: ["ceb131a7-3d3c-5d0c-ccb6-d4fa52ab0649"],
                                },
                                globalSwatchId: "a0cbd7fa",
                                rValue: 18,
                                bValue: 41,
                                gValue: 18,
                                aValue: 1,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1673759249619,
        },
        "a-17": {
            id: "a-17",
            title: "Button Hover In 2",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-17-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {},
                                xValue: 0,
                                xUnit: "px",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-17-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {},
                                xValue: 5,
                                xUnit: "px",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1671612139886,
        },
        "a-18": {
            id: "a-18",
            title: "Button Hover Out 2",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-18-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {},
                                xValue: 0,
                                xUnit: "px",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1671612139886,
        },
        "a-19": {
            id: "a-19",
            title: "Accordion Open",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-19-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".accordion-item-content",
                                    selectorGuids: ["b07aa2d6-8445-41e3-8bb7-59957d3afb14"],
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: false,
                            },
                        },
                        {
                            id: "a-19-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".icon-block",
                                    selectorGuids: ["b07aa2d6-8445-41e3-8bb7-59957d3afb13"],
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-19-n-3",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".accordion-item-content",
                                    selectorGuids: ["b07aa2d6-8445-41e3-8bb7-59957d3afb14"],
                                },
                                heightValue: 100,
                                widthUnit: "PX",
                                heightUnit: "%",
                                locked: false,
                            },
                        },
                        {
                            id: "a-19-n-4",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".icon-block",
                                    selectorGuids: ["b07aa2d6-8445-41e3-8bb7-59957d3afb13"],
                                },
                                zValue: 180,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1674553993838,
        },
        "a-20": {
            id: "a-20",
            title: "Accordion Close",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-20-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".accordion-item-content",
                                    selectorGuids: ["b07aa2d6-8445-41e3-8bb7-59957d3afb14"],
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: false,
                            },
                        },
                        {
                            id: "a-20-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".icon-block",
                                    selectorGuids: ["b07aa2d6-8445-41e3-8bb7-59957d3afb13"],
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1674553993838,
        },
        slideInBottom: {
            id: "slideInBottom",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 0,
                                yValue: 100,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 1,
                            },
                        },
                    ],
                },
            ],
        },
        fadeIn: {
            id: "fadeIn",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 1,
                            },
                        },
                    ],
                },
            ],
        },
        slideInLeft: {
            id: "slideInLeft",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: -100,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 1,
                            },
                        },
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
        },
        growIn: {
            id: "growIn",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 0.7500000000000001,
                                yValue: 0.7500000000000001,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 1,
                                yValue: 1,
                            },
                        },
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 1,
                            },
                        },
                    ],
                },
            ],
        },
        flipInLeft: {
            id: "flipInLeft",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                duration: 0,
                                delay: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 0,
                                yValue: -90,
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 0,
                                yValue: 0,
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG",
                            },
                        },
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 1,
                            },
                        },
                    ],
                },
            ],
        },
        slideInRight: {
            id: "slideInRight",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 100,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 1,
                            },
                        },
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
        },
    },
    site: {
        mediaQueries: [
            { key: "main", min: 992, max: 10000 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
        ],
    },
});