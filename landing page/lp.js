import React from "react";
import { useHistory } from 'react-router-dom';
(() => {
    var lt = (e, y) => () => (y || e((y = {
        exports: {}
    }).exports, y), y.exports);
    var Pt = lt(() => {
        "use strict";
        window.tram = function (e) {
            function y(t, n) {
                var i = new J.Bare;
                return i.init(t, n)
            }
            function l(t) {
                return t.replace(/[A-Z]/g, function (n) {
                    return "-" + n.toLowerCase()
                })
            }
            function T(t) {
                var n = parseInt(t.slice(1), 16),
                    i = n >> 16 & 255,
                    r = n >> 8 & 255,
                    s = 255 & n;
                return [i, r, s]
            }
            function C(t, n, i) {
                return "#" + (1 << 24 | t << 16 | n << 8 | i).toString(16).slice(1)
            }
            function g() { }
            function L(t, n) {
                B("Type warning: Expected: [" + t + "] Got: [" + typeof n + "] " + n)
            }
            function _(t, n, i) {
                B("Units do not match [" + t + "]: " + n + ", " + i)
            }
            function I(t, n, i) {
                if (n !== void 0 && (i = n), t === void 0)
                    return i;
                var r = i;
                return we.test(t) || !Xt.test(t) ? r = parseInt(t, 10) : Xt.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r === r ? r : i
            }
            function B(t) {
                et.debug && window && window.console.warn(t)
            }
            function U(t) {
                for (var n = -1, i = t ? t.length : 0, r = []; ++n < i;) {
                    var s = t[n];
                    s && r.push(s)
                }
                return r
            }
            var P = function (t, n, i) {
                function r(x) {
                    return typeof x == "object"
                }
                function s(x) {
                    return typeof x == "function"
                }
                function o() { }
                function p(x, K) {
                    function c() {
                        var j = new A;
                        return s(j.init) && j.init.apply(j, arguments), j
                    }
                    function A() { }
                    K === i && (K = x, x = Object),
                        c.Bare = A;
                    var z,
                        Z = o[t] = x[t],
                        ft = A[t] = c[t] = new o;
                    return ft.constructor = c, c.mixin = function (j) {
                        return A[t] = c[t] = p(c, j)[t], c
                    }, c.open = function (j) {
                        if (z = {}, s(j) ? z = j.call(c, ft, Z, c, x) : r(j) && (z = j), r(z))
                            for (var At in z)
                                n.call(z, At) && (ft[At] = z[At]);
                        return s(ft.init) || (ft.init = x), c
                    }, c.open(K)
                }
                return p
            }("prototype", {}.hasOwnProperty),
                R = {
                    ease: ["ease", function (t, n, i, r) {
                        var s = (t /= r) * t,
                            o = s * t;
                        return n + i * (-2.75 * o * s + 11 * s * s + -15.5 * o + 8 * s + .25 * t)
                    }],
                    "ease-in": ["ease-in", function (t, n, i, r) {
                        var s = (t /= r) * t,
                            o = s * t;
                        return n + i * (-1 * o * s + 3 * s * s + -3 * o + 2 * s)
                    }],
                    "ease-out": ["ease-out", function (t, n, i, r) {
                        var s = (t /= r) * t,
                            o = s * t;
                        return n + i * (.3 * o * s + -1.6 * s * s + 2.2 * o + -1.8 * s + 1.9 * t)
                    }],
                    "ease-in-out": ["ease-in-out", function (t, n, i, r) {
                        var s = (t /= r) * t,
                            o = s * t;
                        return n + i * (2 * o * s + -5 * s * s + 2 * o + 2 * s)
                    }],
                    linear: ["linear", function (t, n, i, r) {
                        return i * t / r + n
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, n, i, r) {
                        return i * (t /= r) * t + n
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, n, i, r) {
                        return -i * (t /= r) * (t - 2) + n
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, n, i, r) {
                        return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, n, i, r) {
                        return i * (t /= r) * t * t + n
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, n, i, r) {
                        return i * ((t = t / r - 1) * t * t + 1) + n
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, n, i, r) {
                        return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, n, i, r) {
                        return i * (t /= r) * t * t * t + n
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, n, i, r) {
                        return -i * ((t = t / r - 1) * t * t * t - 1) + n
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, n, i, r) {
                        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, n, i, r) {
                        return i * (t /= r) * t * t * t * t + n
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, n, i, r) {
                        return i * ((t = t / r - 1) * t * t * t * t + 1) + n
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, n, i, r) {
                        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, n, i, r) {
                        return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, n, i, r) {
                        return i * Math.sin(t / r * (Math.PI / 2)) + n
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, n, i, r) {
                        return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, n, i, r) {
                        return t === 0 ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, n, i, r) {
                        return t === r ? n + i : i * (-Math.pow(2, -10 * t / r) + 1) + n
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, n, i, r) {
                        return t === 0 ? n : t === r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (-Math.pow(2, -10 * --t) + 2) + n
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, n, i, r) {
                        return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, n, i, r) {
                        return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, n, i, r) {
                        return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, n, i, r, s) {
                        return s === void 0 && (s = 1.70158), i * (t /= r) * t * ((s + 1) * t - s) + n
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, n, i, r, s) {
                        return s === void 0 && (s = 1.70158), i * ((t = t / r - 1) * t * ((s + 1) * t + s) + 1) + n
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, n, i, r, s) {
                        return s === void 0 && (s = 1.70158), (t /= r / 2) < 1 ? i / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : i / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
                    }]
                },
                W = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                X = document,
                H = window,
                $ = "bkwld-tram",
                q = /[\-\.0-9]/g,
                b = /[A-Z]/,
                f = "number",
                E = /^(rgb|#)/,
                m = /(em|cm|mm|in|pt|pc|px)$/,
                M = /(em|cm|mm|in|pt|pc|px|%)$/,
                G = /(deg|rad|turn)$/,
                it = "unitless",
                dt = /(all|none) 0s ease 0s/,
                kt = /^(width|height)$/,
                vt = " ",
                d = X.createElement("a"),
                a = ["Webkit", "Moz", "O", "ms"],
                u = ["-webkit-", "-moz-", "-o-", "-ms-"],
                v = function (t) {
                    if (t in d.style)
                        return {
                            dom: t,
                            css: t
                        };
                    var n,
                        i,
                        r = "",
                        s = t.split("-");
                    for (n = 0; n < s.length; n++)
                        r += s[n].charAt(0).toUpperCase() + s[n].slice(1);
                    for (n = 0; n < a.length; n++)
                        if (i = a[n] + r, i in d.style)
                            return {
                                dom: i,
                                css: u[n] + t
                            }
                },
                h = y.support = {
                    bind: Function.prototype.bind,
                    transform: v("transform"),
                    transition: v("transition"),
                    backface: v("backface-visibility"),
                    timing: v("transition-timing-function")
                };
            if (h.transition) {
                var F = h.timing.dom;
                if (d.style[F] = R["ease-in-back"][0], !d.style[F])
                    for (var k in W)
                        R[k][0] = W[k]
            }
            var V = y.frame = function () {
                var t = H.requestAnimationFrame || H.webkitRequestAnimationFrame || H.mozRequestAnimationFrame || H.oRequestAnimationFrame || H.msRequestAnimationFrame;
                return t && h.bind ? t.bind(H) : function (n) {
                    H.setTimeout(n, 16)
                }
            }(),
                ct = y.now = function () {
                    var t = H.performance,
                        n = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                    return n && h.bind ? n.bind(t) : Date.now || function () {
                        return +new Date
                    }
                }(),
                pt = P(function (t) {
                    function n(w, O) {
                        var Y = U(("" + w).split(vt)),
                            N = Y[0];
                        O = O || {};
                        var tt = Ot[N];
                        if (!tt)
                            return B("Unsupported property: " + N);
                        if (!O.weak || !this.props[N]) {
                            var st = tt[0],
                                nt = this.props[N];
                            return nt || (nt = this.props[N] = new st.Bare), nt.init(this.$el, Y, tt, O), nt
                        }
                    }
                    function i(w, O, Y) {
                        if (w) {
                            var N = typeof w;
                            if (O || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), N == "number" && O)
                                return this.timer = new qt({
                                    duration: w,
                                    context: this,
                                    complete: o
                                }), void (this.active = !0);
                            if (N == "string" && O) {
                                switch (w) {
                                    case "hide":
                                        c.call(this);
                                        break;
                                    case "stop":
                                        p.call(this);
                                        break;
                                    case "redraw":
                                        A.call(this);
                                        break;
                                    default:
                                        n.call(this, w, Y && Y[1])
                                }
                                return o.call(this)
                            }
                            if (N == "function")
                                return void w.call(this, this);
                            if (N == "object") {
                                var tt = 0;
                                ft.call(this, w, function (Q, be) {
                                    Q.span > tt && (tt = Q.span),
                                        Q.stop(),
                                        Q.animate(be)
                                }, function (Q) {
                                    "wait" in Q && (tt = I(Q.wait, 0))
                                }),
                                    Z.call(this),
                                    tt > 0 && (this.timer = new qt({
                                        duration: tt,
                                        context: this
                                    }), this.active = !0, O && (this.timer.complete = o));
                                var st = this,
                                    nt = !1,
                                    Ft = {};
                                V(function () {
                                    ft.call(st, w, function (Q) {
                                        Q.active && (nt = !0, Ft[Q.name] = Q.nextStyle)
                                    }),
                                        nt && st.$el.css(Ft)
                                })
                            }
                        }
                    }
                    function r(w) {
                        w = I(w, 0),
                            this.active ? this.queue.push({
                                options: w
                            }) : (this.timer = new qt({
                                duration: w,
                                context: this,
                                complete: o
                            }), this.active = !0)
                    }
                    function s(w) {
                        return this.active ? (this.queue.push({
                            options: w,
                            args: arguments
                        }), void (this.timer.complete = o)) : B("No active transition timer. Use start() or wait() before then().")
                    }
                    function o() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var w = this.queue.shift();
                            i.call(this, w.options, !0, w.args)
                        }
                    }
                    function p(w) {
                        this.timer && this.timer.destroy(),
                            this.queue = [],
                            this.active = !1;
                        var O;
                        typeof w == "string" ? (O = {}, O[w] = 1) : O = typeof w == "object" && w != null ? w : this.props,
                            ft.call(this, O, j),
                            Z.call(this)
                    }
                    function x(w) {
                        p.call(this, w),
                            ft.call(this, w, At, ge)
                    }
                    function K(w) {
                        typeof w != "string" && (w = "block"),
                            this.el.style.display = w
                    }
                    function c() {
                        p.call(this),
                            this.el.style.display = "none"
                    }
                    function A() {
                        this.el.offsetHeight
                    }
                    function z() {
                        p.call(this),
                            e.removeData(this.el, $),
                            this.$el = this.el = null
                    }
                    function Z() {
                        var w,
                            O,
                            Y = [];
                        this.upstream && Y.push(this.upstream);
                        for (w in this.props)
                            O = this.props[w],
                                O.active && Y.push(O.string);
                        Y = Y.join(","),
                            this.style !== Y && (this.style = Y, this.el.style[h.transition.dom] = Y)
                    }
                    function ft(w, O, Y) {
                        var N,
                            tt,
                            st,
                            nt,
                            Ft = O !== j,
                            Q = {};
                        for (N in w)
                            st = w[N],
                                N in mt ? (Q.transform || (Q.transform = {}), Q.transform[N] = st) : (b.test(N) && (N = l(N)), N in Ot ? Q[N] = st : (nt || (nt = {}), nt[N] = st));
                        for (N in Q) {
                            if (st = Q[N], tt = this.props[N], !tt) {
                                if (!Ft)
                                    continue;
                                tt = n.call(this, N)
                            }
                            O.call(this, tt, st)
                        }
                        Y && nt && Y.call(this, nt)
                    }
                    function j(w) {
                        w.stop()
                    }
                    function At(w, O) {
                        w.set(O)
                    }
                    function ge(w) {
                        this.$el.css(w)
                    }
                    function ot(w, O) {
                        t[w] = function () {
                            return this.children ? ye.call(this, O, arguments) : (this.el && O.apply(this, arguments), this)
                        }
                    }
                    function ye(w, O) {
                        var Y,
                            N = this.children.length;
                        for (Y = 0; N > Y; Y++)
                            w.apply(this.children[Y], O);
                        return this
                    }
                    t.init = function (w) {
                        if (this.$el = e(w), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, et.keepInherited && !et.fallback) {
                            var O = Dt(this.el, "transition");
                            O && !dt.test(O) && (this.upstream = O)
                        }
                        h.backface && et.hideBackface && bt(this.el, h.backface.css, "hidden")
                    },
                        ot("add", n),
                        ot("start", i),
                        ot("wait", r),
                        ot("then", s),
                        ot("next", o),
                        ot("stop", p),
                        ot("set", x),
                        ot("show", K),
                        ot("hide", c),
                        ot("redraw", A),
                        ot("destroy", z)
                }),
                J = P(pt, function (t) {
                    function n(i, r) {
                        var s = e.data(i, $) || e.data(i, $, new pt.Bare);
                        return s.el || s.init(i), r ? s.start(r) : s
                    }
                    t.init = function (i, r) {
                        var s = e(i);
                        if (!s.length)
                            return this;
                        if (s.length === 1)
                            return n(s[0], r);
                        var o = [];
                        return s.each(function (p, x) {
                            o.push(n(x, r))
                        }), this.children = o, this
                    }
                }),
                S = P(function (t) {
                    function n() {
                        var o = this.get();
                        this.update("auto");
                        var p = this.get();
                        return this.update(o), p
                    }
                    function i(o, p, x) {
                        return p !== void 0 && (x = p), o in R ? o : x
                    }
                    function r(o) {
                        var p = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(o);
                        return (p ? C(p[1], p[2], p[3]) : o).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var s = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    t.init = function (o, p, x, K) {
                        this.$el = o,
                            this.el = o[0];
                        var c = p[0];
                        x[2] && (c = x[2]),
                            Ht[c] && (c = Ht[c]),
                            this.name = c,
                            this.type = x[1],
                            this.duration = I(p[1], this.duration, s.duration),
                            this.ease = i(p[2], this.ease, s.ease),
                            this.delay = I(p[3], this.delay, s.delay),
                            this.span = this.duration + this.delay,
                            this.active = !1,
                            this.nextStyle = null,
                            this.auto = kt.test(this.name),
                            this.unit = K.unit || this.unit || et.defaultUnit,
                            this.angle = K.angle || this.angle || et.defaultAngle,
                            et.fallback || K.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + vt + this.duration + "ms" + (this.ease != "ease" ? vt + R[this.ease][0] : "") + (this.delay ? vt + this.delay + "ms" : ""))
                    },
                        t.set = function (o) {
                            o = this.convert(o, this.type),
                                this.update(o),
                                this.redraw()
                        },
                        t.transition = function (o) {
                            this.active = !0,
                                o = this.convert(o, this.type),
                                this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), o == "auto" && (o = n.call(this))),
                                this.nextStyle = o
                        },
                        t.fallback = function (o) {
                            var p = this.el.style[this.name] || this.convert(this.get(), this.type);
                            o = this.convert(o, this.type),
                                this.auto && (p == "auto" && (p = this.convert(this.get(), this.type)), o == "auto" && (o = n.call(this))),
                                this.tween = new St({
                                    from: p,
                                    to: o,
                                    duration: this.duration,
                                    delay: this.delay,
                                    ease: this.ease,
                                    update: this.update,
                                    context: this
                                })
                        },
                        t.get = function () {
                            return Dt(this.el, this.name)
                        },
                        t.update = function (o) {
                            bt(this.el, this.name, o)
                        },
                        t.stop = function () {
                            (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, bt(this.el, this.name, this.get()));
                            var o = this.tween;
                            o && o.context && o.destroy()
                        },
                        t.convert = function (o, p) {
                            if (o == "auto" && this.auto)
                                return o;
                            var x,
                                K = typeof o == "number",
                                c = typeof o == "string";
                            switch (p) {
                                case f:
                                    if (K)
                                        return o;
                                    if (c && o.replace(q, "") === "")
                                        return +o;
                                    x = "number(unitless)";
                                    break;
                                case E:
                                    if (c) {
                                        if (o === "" && this.original)
                                            return this.original;
                                        if (p.test(o))
                                            return o.charAt(0) == "#" && o.length == 7 ? o : r(o)
                                    }
                                    x = "hex or rgb string";
                                    break;
                                case m:
                                    if (K)
                                        return o + this.unit;
                                    if (c && p.test(o))
                                        return o;
                                    x = "number(px) or string(unit)";
                                    break;
                                case M:
                                    if (K)
                                        return o + this.unit;
                                    if (c && p.test(o))
                                        return o;
                                    x = "number(px) or string(unit or %)";
                                    break;
                                case G:
                                    if (K)
                                        return o + this.angle;
                                    if (c && p.test(o))
                                        return o;
                                    x = "number(deg) or string(angle)";
                                    break;
                                case it:
                                    if (K || c && M.test(o))
                                        return o;
                                    x = "number(unitless) or string(unit or %)"
                            }
                            return L(x, o), o
                        },
                        t.redraw = function () {
                            this.el.offsetHeight
                        }
                }),
                rt = P(S, function (t, n) {
                    t.init = function () {
                        n.init.apply(this, arguments),
                            this.original || (this.original = this.convert(this.get(), E))
                    }
                }),
                Lt = P(S, function (t, n) {
                    t.init = function () {
                        n.init.apply(this, arguments),
                            this.animate = this.fallback
                    },
                        t.get = function () {
                            return this.$el[this.name]()
                        },
                        t.update = function (i) {
                            this.$el[this.name](i)
                        }
                }),
                Tt = P(S, function (t, n) {
                    function i(r, s) {
                        var o,
                            p,
                            x,
                            K,
                            c;
                        for (o in r)
                            K = mt[o],
                                x = K[0],
                                p = K[1] || o,
                                c = this.convert(r[o], x),
                                s.call(this, p, c, x)
                    }
                    t.init = function () {
                        n.init.apply(this, arguments),
                            this.current || (this.current = {}, mt.perspective && et.perspective && (this.current.perspective = et.perspective, bt(this.el, this.name, this.style(this.current)), this.redraw()))
                    },
                        t.set = function (r) {
                            i.call(this, r, function (s, o) {
                                this.current[s] = o
                            }),
                                bt(this.el, this.name, this.style(this.current)),
                                this.redraw()
                        },
                        t.transition = function (r) {
                            var s = this.values(r);
                            this.tween = new Nt({
                                current: this.current,
                                values: s,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease
                            });
                            var o,
                                p = {};
                            for (o in this.current)
                                p[o] = o in s ? s[o] : this.current[o];
                            this.active = !0,
                                this.nextStyle = this.style(p)
                        },
                        t.fallback = function (r) {
                            var s = this.values(r);
                            this.tween = new Nt({
                                current: this.current,
                                values: s,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        },
                        t.update = function () {
                            bt(this.el, this.name, this.style(this.current))
                        },
                        t.style = function (r) {
                            var s,
                                o = "";
                            for (s in r)
                                o += s + "(" + r[s] + ") ";
                            return o
                        },
                        t.values = function (r) {
                            var s,
                                o = {};
                            return i.call(this, r, function (p, x, K) {
                                o[p] = x,
                                    this.current[p] === void 0 && (s = 0, ~p.indexOf("scale") && (s = 1), this.current[p] = this.convert(s, K))
                            }), o
                        }
                }),
                St = P(function (t) {
                    function n(c) {
                        x.push(c) === 1 && V(i)
                    }
                    function i() {
                        var c,
                            A,
                            z,
                            Z = x.length;
                        if (Z)
                            for (V(i), A = ct(), c = Z; c--;)
                                z = x[c],
                                    z && z.render(A)
                    }
                    function r(c) {
                        var A,
                            z = e.inArray(c, x);
                        z >= 0 && (A = x.slice(z + 1), x.length = z, A.length && (x = x.concat(A)))
                    }
                    function s(c) {
                        return Math.round(c * K) / K
                    }
                    function o(c, A, z) {
                        return C(c[0] + z * (A[0] - c[0]), c[1] + z * (A[1] - c[1]), c[2] + z * (A[2] - c[2]))
                    }
                    var p = {
                        ease: R.ease[1],
                        from: 0,
                        to: 1
                    };
                    t.init = function (c) {
                        this.duration = c.duration || 0,
                            this.delay = c.delay || 0;
                        var A = c.ease || p.ease;
                        R[A] && (A = R[A][1]),
                            typeof A != "function" && (A = p.ease),
                            this.ease = A,
                            this.update = c.update || g,
                            this.complete = c.complete || g,
                            this.context = c.context || this,
                            this.name = c.name;
                        var z = c.from,
                            Z = c.to;
                        z === void 0 && (z = p.from),
                            Z === void 0 && (Z = p.to),
                            this.unit = c.unit || "",
                            typeof z == "number" && typeof Z == "number" ? (this.begin = z, this.change = Z - z) : this.format(Z, z),
                            this.value = this.begin + this.unit,
                            this.start = ct(),
                            c.autoplay !== !1 && this.play()
                    },
                        t.play = function () {
                            this.active || (this.start || (this.start = ct()), this.active = !0, n(this))
                        },
                        t.stop = function () {
                            this.active && (this.active = !1, r(this))
                        },
                        t.render = function (c) {
                            var A,
                                z = c - this.start;
                            if (this.delay) {
                                if (z <= this.delay)
                                    return;
                                z -= this.delay
                            }
                            if (z < this.duration) {
                                var Z = this.ease(z, 0, 1, this.duration);
                                return A = this.startRGB ? o(this.startRGB, this.endRGB, Z) : s(this.begin + Z * this.change), this.value = A + this.unit, void this.update.call(this.context, this.value)
                            }
                            A = this.endHex || this.begin + this.change,
                                this.value = A + this.unit,
                                this.update.call(this.context, this.value),
                                this.complete.call(this.context),
                                this.destroy()
                        },
                        t.format = function (c, A) {
                            if (A += "", c += "", c.charAt(0) == "#")
                                return this.startRGB = T(A), this.endRGB = T(c), this.endHex = c, this.begin = 0, void (this.change = 1);
                            if (!this.unit) {
                                var z = A.replace(q, ""),
                                    Z = c.replace(q, "");
                                z !== Z && _("tween", A, c),
                                    this.unit = z
                            }
                            A = parseFloat(A),
                                c = parseFloat(c),
                                this.begin = this.value = A,
                                this.change = c - A
                        },
                        t.destroy = function () {
                            this.stop(),
                                this.context = null,
                                this.ease = this.update = this.complete = g
                        };
                    var x = [],
                        K = 1e3
                }),
                qt = P(St, function (t) {
                    t.init = function (n) {
                        this.duration = n.duration || 0,
                            this.complete = n.complete || g,
                            this.context = n.context,
                            this.play()
                    },
                        t.render = function (n) {
                            var i = n - this.start;
                            i < this.duration || (this.complete.call(this.context), this.destroy())
                        }
                }),
                Nt = P(St, function (t, n) {
                    t.init = function (i) {
                        this.context = i.context,
                            this.update = i.update,
                            this.tweens = [],
                            this.current = i.current;
                        var r,
                            s;
                        for (r in i.values)
                            s = i.values[r],
                                this.current[r] !== s && this.tweens.push(new St({
                                    name: r,
                                    from: this.current[r],
                                    to: s,
                                    duration: i.duration,
                                    delay: i.delay,
                                    ease: i.ease,
                                    autoplay: !1
                                }));
                        this.play()
                    },
                        t.render = function (i) {
                            var r,
                                s,
                                o = this.tweens.length,
                                p = !1;
                            for (r = o; r--;)
                                s = this.tweens[r],
                                    s.context && (s.render(i), this.current[s.name] = s.value, p = !0);
                            return p ? void (this.update && this.update.call(this.context)) : this.destroy()
                        },
                        t.destroy = function () {
                            if (n.destroy.call(this), this.tweens) {
                                var i,
                                    r = this.tweens.length;
                                for (i = r; i--;)
                                    this.tweens[i].destroy();
                                this.tweens = null,
                                    this.current = null
                            }
                        }
                }),
                et = y.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !h.transition,
                    agentTests: []
                };
            y.fallback = function (t) {
                if (!h.transition)
                    return et.fallback = !0;
                et.agentTests.push("(" + t + ")");
                var n = new RegExp(et.agentTests.join("|"), "i");
                et.fallback = n.test(navigator.userAgent)
            },
                y.fallback("6.0.[2-5] Safari"),
                y.tween = function (t) {
                    return new St(t)
                },
                y.delay = function (t, n, i) {
                    return new qt({
                        complete: n,
                        duration: t,
                        context: i
                    })
                },
                e.fn.tram = function (t) {
                    return y.call(null, this, t)
                };
            var bt = e.style,
                Dt = e.css,
                Ht = {
                    transform: h.transform && h.transform.css
                },
                Ot = {
                    color: [rt, E],
                    background: [rt, E, "background-color"],
                    "outline-color": [rt, E],
                    "border-color": [rt, E],
                    "border-top-color": [rt, E],
                    "border-right-color": [rt, E],
                    "border-bottom-color": [rt, E],
                    "border-left-color": [rt, E],
                    "border-width": [S, m],
                    "border-top-width": [S, m],
                    "border-right-width": [S, m],
                    "border-bottom-width": [S, m],
                    "border-left-width": [S, m],
                    "border-spacing": [S, m],
                    "letter-spacing": [S, m],
                    margin: [S, m],
                    "margin-top": [S, m],
                    "margin-right": [S, m],
                    "margin-bottom": [S, m],
                    "margin-left": [S, m],
                    padding: [S, m],
                    "padding-top": [S, m],
                    "padding-right": [S, m],
                    "padding-bottom": [S, m],
                    "padding-left": [S, m],
                    "outline-width": [S, m],
                    opacity: [S, f],
                    top: [S, M],
                    right: [S, M],
                    bottom: [S, M],
                    left: [S, M],
                    "font-size": [S, M],
                    "text-indent": [S, M],
                    "word-spacing": [S, M],
                    width: [S, M],
                    "min-width": [S, M],
                    "max-width": [S, M],
                    height: [S, M],
                    "min-height": [S, M],
                    "max-height": [S, M],
                    "line-height": [S, it],
                    "scroll-top": [Lt, f, "scrollTop"],
                    "scroll-left": [Lt, f, "scrollLeft"]
                },
                mt = {};
            h.transform && (Ot.transform = [Tt], mt = {
                x: [M, "translateX"],
                y: [M, "translateY"],
                rotate: [G],
                rotateX: [G],
                rotateY: [G],
                scale: [f],
                scaleX: [f],
                scaleY: [f],
                skew: [G],
                skewX: [G],
                skewY: [G]
            }),
                h.transform && h.backface && (mt.z = [M, "translateZ"], mt.rotateZ = [G], mt.scaleZ = [f], mt.perspective = [m]);
            var we = /ms/,
                Xt = /s|\./;
            return e.tram = y
        }(window.jQuery)
    });
    var Vt = lt((We, Kt) => {
        "use strict";
        var Ee = window.$,
            xe = Pt() && Ee.tram;
        Kt.exports = function () {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var y = {},
                l = Array.prototype,
                T = Object.prototype,
                C = Function.prototype,
                g = l.push,
                L = l.slice,
                _ = l.concat,
                I = T.toString,
                B = T.hasOwnProperty,
                U = l.forEach,
                P = l.map,
                R = l.reduce,
                W = l.reduceRight,
                X = l.filter,
                H = l.every,
                $ = l.some,
                q = l.indexOf,
                b = l.lastIndexOf,
                f = Array.isArray,
                E = Object.keys,
                m = C.bind,
                M = e.each = e.forEach = function (a, u, v) {
                    if (a == null)
                        return a;
                    if (U && a.forEach === U)
                        a.forEach(u, v);
                    else if (a.length === +a.length) {
                        for (var h = 0, F = a.length; h < F; h++)
                            if (u.call(v, a[h], h, a) === y)
                                return
                    } else
                        for (var k = e.keys(a), h = 0, F = k.length; h < F; h++)
                            if (u.call(v, a[k[h]], k[h], a) === y)
                                return;
                    return a
                };
            e.map = e.collect = function (a, u, v) {
                var h = [];
                return a == null ? h : P && a.map === P ? a.map(u, v) : (M(a, function (F, k, V) {
                    h.push(u.call(v, F, k, V))
                }), h)
            },
                e.find = e.detect = function (a, u, v) {
                    var h;
                    return G(a, function (F, k, V) {
                        if (u.call(v, F, k, V))
                            return h = F, !0
                    }), h
                },
                e.filter = e.select = function (a, u, v) {
                    var h = [];
                    return a == null ? h : X && a.filter === X ? a.filter(u, v) : (M(a, function (F, k, V) {
                        u.call(v, F, k, V) && h.push(F)
                    }), h)
                };
            var G = e.some = e.any = function (a, u, v) {
                u || (u = e.identity);
                var h = !1;
                return a == null ? h : $ && a.some === $ ? a.some(u, v) : (M(a, function (F, k, V) {
                    if (h || (h = u.call(v, F, k, V)))
                        return y
                }), !!h)
            };
            e.contains = e.include = function (a, u) {
                return a == null ? !1 : q && a.indexOf === q ? a.indexOf(u) != -1 : G(a, function (v) {
                    return v === u
                })
            },
                e.delay = function (a, u) {
                    var v = L.call(arguments, 2);
                    return setTimeout(function () {
                        return a.apply(null, v)
                    }, u)
                },
                e.defer = function (a) {
                    return e.delay.apply(e, [a, 1].concat(L.call(arguments, 1)))
                },
                e.throttle = function (a) {
                    var u,
                        v,
                        h;
                    return function () {
                        u || (u = !0, v = arguments, h = this, xe.frame(function () {
                            u = !1,
                                a.apply(h, v)
                        }))
                    }
                },
                e.debounce = function (a, u, v) {
                    var h,
                        F,
                        k,
                        V,
                        ct,
                        pt = function () {
                            var J = e.now() - V;
                            J < u ? h = setTimeout(pt, u - J) : (h = null, v || (ct = a.apply(k, F), k = F = null))
                        };
                    return function () {
                        k = this,
                            F = arguments,
                            V = e.now();
                        var J = v && !h;
                        return h || (h = setTimeout(pt, u)), J && (ct = a.apply(k, F), k = F = null), ct
                    }
                },
                e.defaults = function (a) {
                    if (!e.isObject(a))
                        return a;
                    for (var u = 1, v = arguments.length; u < v; u++) {
                        var h = arguments[u];
                        for (var F in h)
                            a[F] === void 0 && (a[F] = h[F])
                    }
                    return a
                },
                e.keys = function (a) {
                    if (!e.isObject(a))
                        return [];
                    if (E)
                        return E(a);
                    var u = [];
                    for (var v in a)
                        e.has(a, v) && u.push(v);
                    return u
                },
                e.has = function (a, u) {
                    return B.call(a, u)
                },
                e.isObject = function (a) {
                    return a === Object(a)
                },
                e.now = Date.now || function () {
                    return new Date().getTime()
                },
                e.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
            var it = /(.)^/,
                dt = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                kt = /\\|'|\r|\n|\u2028|\u2029/g,
                vt = function (a) {
                    return "\\" + dt[a]
                },
                d = /^\s*(\w|\$)+\s*$/;
            return e.template = function (a, u, v) {
                !u && v && (u = v),
                    u = e.defaults({}, u, e.templateSettings);
                var h = RegExp([(u.escape || it).source, (u.interpolate || it).source, (u.evaluate || it).source].join("|") + "|$", "g"),
                    F = 0,
                    k = "__p+='";
                a.replace(h, function (J, S, rt, Lt, Tt) {
                    return k += a.slice(F, Tt).replace(kt, vt), F = Tt + J.length, S ? k += `'+
((__t=(`
                        + S + `))==null?'':_.escape(__t))+
'`
                        : rt ? k += `'+
((__t=(`
                            + rt + `))==null?'':__t)+
'`
                            : Lt && (k += `';
`
                                + Lt + `
__p+='`
                            ), J
                }),
                    k += `';
`
                    ;
                var V = u.variable;
                if (V) {
                    if (!d.test(V))
                        throw new Error("variable is not a bare identifier: " + V)
                } else
                    k = `with(obj||{}){
`
                        + k + `}
`
                        ,
                        V = "obj";
                k = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`
                    + k + `return __p;
`
                    ;
                var ct;
                try {
                    ct = new Function(u.variable || "obj", "_", k)
                } catch (J) {
                    throw J.source = k, J
                }
                var pt = function (J) {
                    return ct.call(this, J, e)
                };
                return pt.source = "function(" + V + `){
`
                    + k + "}", pt
            }, e
        }()
    });
    var gt = lt((Ie, te) => {
        "use strict";
        var D = {},
            Et = {},
            xt = [],
            It = window.Webflow || [],
            wt = window.jQuery,
            ut = wt(window),
            _e = wt(document),
            ht = wt.isFunction,
            at = D._ = Vt(),
            Yt = D.tram = Pt() && wt.tram,
            Mt = !1,
            $t = !1;
        Yt.config.hideBackface = !1;
        Yt.config.keepInherited = !0;
        D.define = function (e, y, l) {
            Et[e] && Zt(Et[e]);
            var T = Et[e] = y(wt, at, l) || {};
            return Gt(T), T
        };
        D.require = function (e) {
            return Et[e]
        };
        function Gt(e) {
            D.env() && (ht(e.design) && ut.on("__wf_design", e.design), ht(e.preview) && ut.on("__wf_preview", e.preview)),
                ht(e.destroy) && ut.on("__wf_destroy", e.destroy),
                e.ready && ht(e.ready) && ke(e)
        }
        function ke(e) {
            if (Mt) {
                e.ready();
                return
            }
            at.contains(xt, e.ready) || xt.push(e.ready)
        }
        function Zt(e) {
            ht(e.design) && ut.off("__wf_design", e.design),
                ht(e.preview) && ut.off("__wf_preview", e.preview),
                ht(e.destroy) && ut.off("__wf_destroy", e.destroy),
                e.ready && ht(e.ready) && Le(e)
        }
        function Le(e) {
            xt = at.filter(xt, function (y) {
                return y !== e.ready
            })
        }
        D.push = function (e) {
            if (Mt) {
                ht(e) && e();
                return
            }
            It.push(e)
        };
        D.env = function (e) {
            var y = window.__wf_design,
                l = typeof y < "u";
            if (!e)
                return l;
            if (e === "design")
                return l && y;
            if (e === "preview")
                return l && !y;
            if (e === "slug")
                return l && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        };
        var zt = navigator.userAgent.toLowerCase(),
            Qt = D.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            Se = D.env.chrome = /chrome/.test(zt) && /Google/.test(navigator.vendor) && parseInt(zt.match(/chrome\/(\d+)\./)[1], 10),
            Ae = D.env.ios = /(ipod|iphone|ipad)/.test(zt);
        D.env.safari = /safari/.test(zt) && !Se && !Ae;
        var Wt;
        Qt && _e.on("touchstart mousedown", function (e) {
            Wt = e.target
        });
        D.validClick = Qt ? function (e) {
            return e === Wt || wt.contains(e, Wt)
        } : function () {
            return !0
        };
        var Jt = "resize.webflow orientationchange.webflow load.webflow",
            Te = "scroll.webflow " + Jt;
        D.resize = Rt(ut, Jt);
        D.scroll = Rt(ut, Te);
        D.redraw = Rt();
        function Rt(e, y) {
            var l = [],
                T = {};
            return T.up = at.throttle(function (C) {
                at.each(l, function (g) {
                    g(C)
                })
            }), e && y && e.on(y, T.up), T.on = function (C) {
                typeof C == "function" && (at.contains(l, C) || l.push(C))
            }, T.off = function (C) {
                if (!arguments.length) {
                    l = [];
                    return
                }
                l = at.filter(l, function (g) {
                    return g !== C
                })
            }, T
        }
        D.location = function (e) {
            window.location = e
        };
        D.env() && (D.location = function () { });
        D.ready = function () {
            Mt = !0,
                $t ? qe() : at.each(xt, Ut),
                at.each(It, Ut),
                D.resize.up()
        };
        function Ut(e) {
            ht(e) && e()
        }
        function qe() {
            $t = !1,
                at.each(Et, Gt)
        }
        var yt;
        D.load = function (e) {
            yt.then(e)
        };
        function jt() {
            yt && (yt.reject(), ut.off("load", yt.resolve)),
                yt = new wt.Deferred,
                ut.on("load", yt.resolve)
        }
        D.destroy = function (e) {
            e = e || {},
                $t = !0,
                ut.triggerHandler("__wf_destroy"),
                e.domready != null && (Mt = e.domready),
                at.each(Et, Zt),
                D.resize.off(),
                D.scroll.off(),
                D.redraw.off(),
                xt = [],
                It = [],
                yt.state() === "pending" && jt()
        };
        wt(D.ready);
        jt();
        te.exports = window.Webflow = D
    });
    var ie = lt(($e, ne) => {
        "use strict";
        var ee = gt();
        ee.define("brand", ne.exports = function (e) {
            var y = {},
                l = document,
                T = e("html"),
                C = e("body"),
                g = ".w-webflow-badge",
                L = window.location,
                _ = /PhantomJS/i.test(navigator.userAgent),
                I = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                B;
            y.ready = function () {
                var W = T.attr("data-wf-status"),
                    X = T.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(X) && L.hostname !== X && (W = !0),
                    W && !_ && (B = B || P(), R(), setTimeout(R, 500), e(l).off(I, U).on(I, U))
            };
            function U() {
                var W = l.fullScreen || l.mozFullScreen || l.webkitIsFullScreen || l.msFullscreenElement || !!l.webkitFullscreenElement;
                e(B).attr("style", W ? "display: none !important;" : "")
            }
            function P() {
                return;
            }
            function R() {
                var W = C.children(g),
                    X = W.length && W.get(0) === B,
                    H = ee.env("editor");
                if (X) {
                    H && W.remove();
                    return
                }
                W.length && W.remove(),
                    H || C.append(B)
            }
            return y
        })
    });
    var oe = lt((Re, re) => {
        "use strict";
        var Bt = gt();
        Bt.define("edit", re.exports = function (e, y, l) {
            if (l = l || {}, (Bt.env("test") || Bt.env("frame")) && !l.fixture && !Fe())
                return {
                    exit: 1
                };
            var T = {},
                C = e(window),
                g = e(document.documentElement),
                L = document.location,
                _ = "hashchange",
                I,
                B = l.load || R,
                U = !1;
            try {
                U = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch { }
            U ? B() : L.search ? (/[?&](edit)(?:[=&?]|$)/.test(L.search) || /\?edit$/.test(L.href)) && B() : C.on(_, P).triggerHandler(_);
            function P() {
                I || /\?edit/.test(L.hash) && B()
            }
            function R() {
                I = !0,
                    window.WebflowEditor = !0,
                    C.off(_, P),
                    b(function (E) {
                        e.ajax({
                            url: q("https://editor-api.webflow.com/api/editor/view"),
                            data: {
                                siteId: g.attr("data-wf-site")
                            },
                            xhrFields: {
                                withCredentials: !0
                            },
                            dataType: "json",
                            crossDomain: !0,
                            success: W(E)
                        })
                    })
            }
            function W(E) {
                return function (m) {
                    if (!m) {
                        console.error("Could not load editor data");
                        return
                    }
                    m.thirdPartyCookiesSupported = E,
                        X($(m.scriptPath), function () {
                            window.WebflowEditor(m)
                        })
                }
            }
            function X(E, m) {
                e.ajax({
                    type: "GET",
                    url: E,
                    dataType: "script",
                    cache: !0
                }).then(m, H)
            }
            function H(E, m, M) {
                throw console.error("Could not load editor script: " + m), M
            }
            function $(E) {
                return E.indexOf("//") >= 0 ? E : q("https://editor-api.webflow.com" + E)
            }
            function q(E) {
                return E.replace(/([^:])\/\//g, "$1/")
            }
            function b(E) {
                var m = window.document.createElement("iframe");
                m.src = "https://webflow.com/site/third-party-cookie-check.html",
                    m.style.display = "none",
                    m.sandbox = "allow-scripts allow-same-origin";
                var M = function (G) {
                    G.data === "WF_third_party_cookies_unsupported" ? (f(m, M), E(!1)) : G.data === "WF_third_party_cookies_supported" && (f(m, M), E(!0))
                };
                m.onerror = function () {
                    f(m, M),
                        E(!1)
                },
                    window.addEventListener("message", M, !1),
                    window.document.body.appendChild(m)
            }
            function f(E, m) {
                window.removeEventListener("message", m, !1),
                    E.remove()
            }
            return T
        });
        function Fe() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var ae = lt((Be, se) => {
        "use strict";
        var ze = gt();
        ze.define("focus-visible", se.exports = function () {
            function e(l) {
                var T = !0,
                    C = !1,
                    g = null,
                    L = {
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
                        "datetime-local": !0
                    };
                function _(f) {
                    return !!(f && f !== document && f.nodeName !== "HTML" && f.nodeName !== "BODY" && "classList" in f && "contains" in f.classList)
                }
                function I(f) {
                    var E = f.type,
                        m = f.tagName;
                    return !!(m === "INPUT" && L[E] && !f.readOnly || m === "TEXTAREA" && !f.readOnly || f.isContentEditable)
                }
                function B(f) {
                    f.getAttribute("data-wf-focus-visible") || f.setAttribute("data-wf-focus-visible", "true")
                }
                function U(f) {
                    f.getAttribute("data-wf-focus-visible") && f.removeAttribute("data-wf-focus-visible")
                }
                function P(f) {
                    f.metaKey || f.altKey || f.ctrlKey || (_(l.activeElement) && B(l.activeElement), T = !0)
                }
                function R() {
                    T = !1
                }
                function W(f) {
                    _(f.target) && (T || I(f.target)) && B(f.target)
                }
                function X(f) {
                    _(f.target) && f.target.hasAttribute("data-wf-focus-visible") && (C = !0, window.clearTimeout(g), g = window.setTimeout(function () {
                        C = !1
                    }, 100), U(f.target))
                }
                function H() {
                    document.visibilityState === "hidden" && (C && (T = !0), $())
                }
                function $() {
                    document.addEventListener("mousemove", b),
                        document.addEventListener("mousedown", b),
                        document.addEventListener("mouseup", b),
                        document.addEventListener("pointermove", b),
                        document.addEventListener("pointerdown", b),
                        document.addEventListener("pointerup", b),
                        document.addEventListener("touchmove", b),
                        document.addEventListener("touchstart", b),
                        document.addEventListener("touchend", b)
                }
                function q() {
                    document.removeEventListener("mousemove", b),
                        document.removeEventListener("mousedown", b),
                        document.removeEventListener("mouseup", b),
                        document.removeEventListener("pointermove", b),
                        document.removeEventListener("pointerdown", b),
                        document.removeEventListener("pointerup", b),
                        document.removeEventListener("touchmove", b),
                        document.removeEventListener("touchstart", b),
                        document.removeEventListener("touchend", b)
                }
                function b(f) {
                    f.target.nodeName && f.target.nodeName.toLowerCase() === "html" || (T = !1, q())
                }
                document.addEventListener("keydown", P, !0),
                    document.addEventListener("mousedown", R, !0),
                    document.addEventListener("pointerdown", R, !0),
                    document.addEventListener("touchstart", R, !0),
                    document.addEventListener("visibilitychange", H, !0),
                    $(),
                    l.addEventListener("focus", W, !0),
                    l.addEventListener("blur", X, !0)
            }
            function y() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: y
            }
        })
    });
    var fe = lt((Ne, ce) => {
        "use strict";
        var ue = gt();
        ue.define("focus", ce.exports = function () {
            var e = [],
                y = !1;
            function l(L) {
                y && (L.preventDefault(), L.stopPropagation(), L.stopImmediatePropagation(), e.unshift(L))
            }
            function T(L) {
                var _ = L.target,
                    I = _.tagName;
                return /^a$/i.test(I) && _.href != null || /^(button|textarea)$/i.test(I) && _.disabled !== !0 || /^input$/i.test(I) && /^(button|reset|submit|radio|checkbox)$/i.test(_.type) && !_.disabled || !/^(button|input|textarea|select|a)$/i.test(I) && !Number.isNaN(Number.parseFloat(_.tabIndex)) || /^audio$/i.test(I) || /^video$/i.test(I) && _.controls === !0
            }
            function C(L) {
                T(L) && (y = !0, setTimeout(() => {
                    for (y = !1, L.target.focus(); e.length > 0;) {
                        var _ = e.pop();
                        _.target.dispatchEvent(new MouseEvent(_.type, _))
                    }
                }, 0))
            }
            function g() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && ue.env.safari && (document.addEventListener("mousedown", C, !0), document.addEventListener("mouseup", l, !0), document.addEventListener("click", l, !0))
            }
            return {
                ready: g
            }
        })
    });
    var he = lt((De, le) => {
        "use strict";
        var _t = gt();
        _t.define("links", le.exports = function (e, y) {
            var l = {},
                T = e(window),
                C,
                g = _t.env(),
                L = window.location,
                _ = document.createElement("a"),
                I = "w--current",
                B = /index\.(html|php)$/,
                U = /\/$/,
                P,
                R;
            l.ready = l.design = l.preview = W;
            function W() {
                C = g && _t.env("design"),
                    R = _t.env("slug") || L.pathname || "",
                    _t.scroll.off(H),
                    P = [];
                for (var q = document.links, b = 0; b < q.length; ++b)
                    X(q[b]);
                P.length && (_t.scroll.on(H), H())
            }
            function X(q) {
                if (!q.getAttribute("hreflang")) {
                    var b = C && q.getAttribute("href-disabled") || q.getAttribute("href");
                    if (_.href = b, !(b.indexOf(":") >= 0)) {
                        var f = e(q);
                        if (_.hash.length > 1 && _.host + _.pathname === L.host + L.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(_.hash))
                                return;
                            var E = e(_.hash);
                            E.length && P.push({
                                link: f,
                                sec: E,
                                active: !1
                            });
                            return
                        }
                        if (!(b === "#" || b === "")) {
                            var m = _.href === L.href || b === R || B.test(b) && U.test(R);
                            $(f, I, m)
                        }
                    }
                }
            }
            function H() {
                var q = T.scrollTop(),
                    b = T.height();
                y.each(P, function (f) {
                    if (!f.link.attr("hreflang")) {
                        var E = f.link,
                            m = f.sec,
                            M = m.offset().top,
                            G = m.outerHeight(),
                            it = b * .5,
                            dt = m.is(":visible") && M + G - it >= q && M + it <= q + b;
                        f.active !== dt && (f.active = dt, $(E, I, dt))
                    }
                })
            }
            function $(q, b, f) {
                var E = q.hasClass(b);
                f && E || !f && !E || (f ? q.addClass(b) : q.removeClass(b))
            }
            return l
        })
    });
    var ve = lt((He, de) => {
        "use strict";
        var Ct = gt();
        Ct.define("scroll", de.exports = function (e) {
            var y = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            },
                l = window.location,
                T = X() ? null : window.history,
                C = e(window),
                g = e(document),
                L = e(document.body),
                _ = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (d) {
                    window.setTimeout(d, 15)
                },
                I = Ct.env("editor") ? ".w-editor-body" : "body",
                B = "header, " + I + " > .header, " + I + " > .w-nav:not([data-no-scroll])",
                U = 'a[href="#"]',
                P = 'a[href*="#"]:not(.w-tab-link):not(' + U + ")",
                R = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                W = document.createElement("style");
            W.appendChild(document.createTextNode(R));
            function X() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var H = /^#[a-zA-Z0-9][\w:.-]*$/;
            function $(d) {
                return H.test(d.hash) && d.host + d.pathname === l.host + l.pathname
            }
            let q = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function b() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || q.matches
            }
            function f(d, a) {
                var u;
                switch (a) {
                    case "add":
                        u = d.attr("tabindex"),
                            u ? d.attr("data-wf-tabindex-swap", u) : d.attr("tabindex", "-1");
                        break;
                    case "remove":
                        u = d.attr("data-wf-tabindex-swap"),
                            u ? (d.attr("tabindex", u), d.removeAttr("data-wf-tabindex-swap")) : d.removeAttr("tabindex");
                        break
                }
                d.toggleClass("wf-force-outline-none", a === "add")
            }
            function E(d) {
                var a = d.currentTarget;
                if (!(Ct.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(a.className))) {
                    var u = $(a) ? a.hash : "";
                    if (u !== "") {
                        var v = e(u);
                        v.length && (d && (d.preventDefault(), d.stopPropagation()), m(u, d), window.setTimeout(function () {
                            M(v, function () {
                                f(v, "add"),
                                    v.get(0).focus({
                                        preventScroll: !0
                                    }),
                                    f(v, "remove")
                            })
                        }, d ? 0 : 300))
                    }
                }
            }
            function m(d) {
                if (l.hash !== d && T && T.pushState && !(Ct.env.chrome && l.protocol === "file:")) {
                    var a = T.state && T.state.hash;
                    a !== d && T.pushState({
                        hash: d
                    }, "", d)
                }
            }
            function M(d, a) {
                var u = C.scrollTop(),
                    v = G(d);
                if (u !== v) {
                    var h = it(d, u, v),
                        F = Date.now(),
                        k = function () {
                            var V = Date.now() - F;
                            window.scroll(0, dt(u, v, V, h)),
                                V <= h ? _(k) : typeof a == "function" && a()
                        };
                    _(k)
                }
            }
            function G(d) {
                var a = e(B),
                    u = a.css("position") === "fixed" ? a.outerHeight() : 0,
                    v = d.offset().top - u;
                if (d.data("scroll") === "mid") {
                    var h = C.height() - u,
                        F = d.outerHeight();
                    F < h && (v -= Math.round((h - F) / 2))
                }
                return v
            }
            function it(d, a, u) {
                if (b())
                    return 0;
                var v = 1;
                return L.add(d).each(function (h, F) {
                    var k = parseFloat(F.getAttribute("data-scroll-time"));
                    !isNaN(k) && k >= 0 && (v = k)
                }), (472.143 * Math.log(Math.abs(a - u) + 125) - 2e3) * v
            }
            function dt(d, a, u, v) {
                return u > v ? a : d + (a - d) * kt(u / v)
            }
            function kt(d) {
                return d < .5 ? 4 * d * d * d : (d - 1) * (2 * d - 2) * (2 * d - 2) + 1
            }
            function vt() {
                var { WF_CLICK_EMPTY: d, WF_CLICK_SCROLL: a } = y;
                g.on(a, P, E),
                    g.on(d, U, function (u) {
                        u.preventDefault()
                    }),
                    document.head.insertBefore(W, document.head.firstChild)
            }
            return {
                ready: vt
            }
        })
    });
    var me = lt((Xe, pe) => {
        "use strict";
        var Me = gt();
        Me.define("touch", pe.exports = function (e) {
            var y = {},
                l = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
                y.init = function (g) {
                    return g = typeof g == "string" ? e(g).get(0) : g, g ? new T(g) : null
                };
            function T(g) {
                var L = !1,
                    _ = !1,
                    I = Math.min(Math.round(window.innerWidth * .04), 40),
                    B,
                    U;
                g.addEventListener("touchstart", P, !1),
                    g.addEventListener("touchmove", R, !1),
                    g.addEventListener("touchend", W, !1),
                    g.addEventListener("touchcancel", X, !1),
                    g.addEventListener("mousedown", P, !1),
                    g.addEventListener("mousemove", R, !1),
                    g.addEventListener("mouseup", W, !1),
                    g.addEventListener("mouseout", X, !1);
                function P($) {
                    var q = $.touches;
                    q && q.length > 1 || (L = !0, q ? (_ = !0, B = q[0].clientX) : B = $.clientX, U = B)
                }
                function R($) {
                    if (L) {
                        if (_ && $.type === "mousemove") {
                            $.preventDefault(),
                                $.stopPropagation();
                            return
                        }
                        var q = $.touches,
                            b = q ? q[0].clientX : $.clientX,
                            f = b - U;
                        U = b,
                            Math.abs(f) > I && l && String(l()) === "" && (C("swipe", $, {
                                direction: f > 0 ? "right" : "left"
                            }), X())
                    }
                }
                function W($) {
                    if (L && (L = !1, _ && $.type === "mouseup")) {
                        $.preventDefault(),
                            $.stopPropagation(),
                            _ = !1;
                        return
                    }
                }
                function X() {
                    L = !1
                }
                function H() {
                    g.removeEventListener("touchstart", P, !1),
                        g.removeEventListener("touchmove", R, !1),
                        g.removeEventListener("touchend", W, !1),
                        g.removeEventListener("touchcancel", X, !1),
                        g.removeEventListener("mousedown", P, !1),
                        g.removeEventListener("mousemove", R, !1),
                        g.removeEventListener("mouseup", W, !1),
                        g.removeEventListener("mouseout", X, !1),
                        g = null
                }
                this.destroy = H
            }
            function C(g, L, _) {
                var I = e.Event(g, {
                    originalEvent: L
                });
                e(L.target).trigger(I, _)
            }
            return y.instance = y.init(document), y
        })
    });
    ie();
    oe();
    ae();
    fe();
    he();
    ve();
    me();
})();

