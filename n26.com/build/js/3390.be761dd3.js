/*! For license information please see 3390.be761dd3.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3390], {
        21828: (e, t, n) => {
            "use strict";
            var r = n(66279),
                i = Object.prototype.hasOwnProperty,
                o = {
                    align: "text-align",
                    valign: "vertical-align",
                    height: "height",
                    width: "width"
                };

            function l(e) {
                var t;
                if ("tr" === e.tagName || "td" === e.tagName || "th" === e.tagName)
                    for (t in o) i.call(o, t) && void 0 !== e.properties[t] && (u(e, o[t], e.properties[t]), delete e.properties[t])
            }

            function u(e, t, n) {
                var r = (e.properties.style || "").trim();
                r && !/;\s*/.test(r) && (r += ";"), r && (r += " ");
                var i = r + t + ": " + n + ";";
                e.properties.style = i
            }
            e.exports = function(e) {
                return r(e, "element", l), e
            }
        },
        21156: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => i
            });
            var r = ['a[href]:not([tabindex^="-"])', 'area[href]:not([tabindex^="-"])', 'input:not([type="hidden"]):not([type="radio"]):not([disabled]):not([tabindex^="-"])', 'input[type="radio"]:not([disabled]):not([tabindex^="-"])', 'select:not([disabled]):not([tabindex^="-"])', 'textarea:not([disabled]):not([tabindex^="-"])', 'button:not([disabled]):not([tabindex^="-"])', 'iframe:not([tabindex^="-"])', 'audio[controls]:not([tabindex^="-"])', 'video[controls]:not([tabindex^="-"])', '[contenteditable]:not([tabindex^="-"])', '[tabindex]:not([tabindex^="-"])'];

            function i(e) {
                this._show = this.show.bind(this), this._hide = this.hide.bind(this), this._maintainFocus = this._maintainFocus.bind(this), this._bindKeypress = this._bindKeypress.bind(this), this.$el = e, this.shown = !1, this._id = this.$el.getAttribute("data-a11y-dialog") || this.$el.id, this._previouslyFocused = null, this._listeners = {}, this.create()
            }

            function o(e, t) {
                return n = (t || document).querySelectorAll(e), Array.prototype.slice.call(n);
                var n
            }

            function l(e) {
                (e.querySelector("[autofocus]") || e).focus()
            }

            function u() {
                o("[data-a11y-dialog]").forEach((function(e) {
                    new i(e)
                }))
            }
            i.prototype.create = function() {
                return this.$el.setAttribute("aria-hidden", !0), this.$el.setAttribute("aria-modal", !0), this.$el.setAttribute("tabindex", -1), this.$el.hasAttribute("role") || this.$el.setAttribute("role", "dialog"), this._openers = o('[data-a11y-dialog-show="' + this._id + '"]'), this._openers.forEach(function(e) {
                    e.addEventListener("click", this._show)
                }.bind(this)), this._closers = o("[data-a11y-dialog-hide]", this.$el).concat(o('[data-a11y-dialog-hide="' + this._id + '"]')), this._closers.forEach(function(e) {
                    e.addEventListener("click", this._hide)
                }.bind(this)), this._fire("create"), this
            }, i.prototype.show = function(e) {
                return this.shown || (this._previouslyFocused = document.activeElement, this.$el.removeAttribute("aria-hidden"), this.shown = !0, l(this.$el), document.body.addEventListener("focus", this._maintainFocus, !0), document.addEventListener("keydown", this._bindKeypress), this._fire("show", e)), this
            }, i.prototype.hide = function(e) {
                return this.shown ? (this.shown = !1, this.$el.setAttribute("aria-hidden", "true"), this._previouslyFocused && this._previouslyFocused.focus && this._previouslyFocused.focus(), document.body.removeEventListener("focus", this._maintainFocus, !0), document.removeEventListener("keydown", this._bindKeypress), this._fire("hide", e), this) : this
            }, i.prototype.destroy = function() {
                return this.hide(), this._openers.forEach(function(e) {
                    e.removeEventListener("click", this._show)
                }.bind(this)), this._closers.forEach(function(e) {
                    e.removeEventListener("click", this._hide)
                }.bind(this)), this._fire("destroy"), this._listeners = {}, this
            }, i.prototype.on = function(e, t) {
                return void 0 === this._listeners[e] && (this._listeners[e] = []), this._listeners[e].push(t), this
            }, i.prototype.off = function(e, t) {
                var n = (this._listeners[e] || []).indexOf(t);
                return n > -1 && this._listeners[e].splice(n, 1), this
            }, i.prototype._fire = function(e, t) {
                var n = this._listeners[e] || [],
                    r = new CustomEvent(e, {
                        detail: t
                    });
                this.$el.dispatchEvent(r), n.forEach(function(e) {
                    e(this.$el, t)
                }.bind(this))
            }, i.prototype._bindKeypress = function(e) {
                this.$el.contains(document.activeElement) && (this.shown && "Escape" === e.key && "alertdialog" !== this.$el.getAttribute("role") && (e.preventDefault(), this.hide(e)), this.shown && "Tab" === e.key && function(e, t) {
                    var n = function(e) {
                            return o(r.join(","), e).filter((function(e) {
                                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                            }))
                        }(e),
                        i = n.indexOf(document.activeElement);
                    t.shiftKey && 0 === i ? (n[n.length - 1].focus(), t.preventDefault()) : t.shiftKey || i !== n.length - 1 || (n[0].focus(), t.preventDefault())
                }(this.$el, e))
            }, i.prototype._maintainFocus = function(e) {
                !this.shown || e.target.closest('[aria-modal="true"]') || e.target.closest("[data-a11y-dialog-ignore-focus-trap]") || l(this.$el)
            }, "undefined" != typeof document && ("loading" === document.readyState ? document.addEventListener("DOMContentLoaded", u) : window.requestAnimationFrame ? window.requestAnimationFrame(u) : window.setTimeout(u, 16))
        },
        69344: e => {
            "use strict";
            e.exports = function(e) {
                if (e) throw e
            }
        },
        48692: (e, t) => {
            "use strict";
            t.parse = function(e) {
                var t, n = [],
                    r = String(e || ""),
                    i = r.indexOf(","),
                    o = 0,
                    l = !1;
                for (; !l;) - 1 === i && (i = r.length, l = !0), !(t = r.slice(o, i).trim()) && l || n.push(t), o = i + 1, i = r.indexOf(",", o);
                return n
            }, t.stringify = function(e, t) {
                var n = t || {},
                    r = !1 === n.padLeft ? "" : " ",
                    i = n.padRight ? " " : "";
                "" === e[e.length - 1] && (e = e.concat(""));
                return e.join(i + "," + r).trim()
            }
        },
        93405: e => {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                n = Object.prototype.toString,
                r = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                o = function(e) {
                    return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
                },
                l = function(e) {
                    if (!e || "[object Object]" !== n.call(e)) return !1;
                    var r, i = t.call(e, "constructor"),
                        o = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
                    if (e.constructor && !i && !o) return !1;
                    for (r in e);
                    return void 0 === r || t.call(e, r)
                },
                u = function(e, t) {
                    r && "__proto__" === t.name ? r(e, t.name, {
                        enumerable: !0,
                        configurable: !0,
                        value: t.newValue,
                        writable: !0
                    }) : e[t.name] = t.newValue
                },
                a = function(e, n) {
                    if ("__proto__" === n) {
                        if (!t.call(e, n)) return;
                        if (i) return i(e, n).value
                    }
                    return e[n]
                };
            e.exports = function e() {
                var t, n, r, i, s, c, f = arguments[0],
                    p = 1,
                    d = arguments.length,
                    h = !1;
                for ("boolean" == typeof f && (h = f, f = arguments[1] || {}, p = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); p < d; ++p)
                    if (null != (t = arguments[p]))
                        for (n in t) r = a(f, n), f !== (i = a(t, n)) && (h && i && (l(i) || (s = o(i))) ? (s ? (s = !1, c = r && o(r) ? r : []) : c = r && l(r) ? r : {}, u(f, {
                            name: n,
                            newValue: e(h, c, i)
                        })) : void 0 !== i && u(f, {
                            name: n,
                            newValue: i
                        }));
                return f
            }
        },
        66484: (e, t, n) => {
            "use strict";
            var r = n(85318),
                i = n(81301),
                o = n(92113),
                l = n(89359),
                u = n(40997),
                a = n(48692),
                s = n(14725),
                c = n(22416),
                f = n(57328),
                p = f("root"),
                d = f("element"),
                h = f("text");

            function g(e, t, n) {
                var r, o, l = n.schema,
                    u = l,
                    a = t.tagName,
                    s = {},
                    f = [],
                    p = -1;
                for (r in "html" === l.space && "svg" === a.toLowerCase() && (u = i, n.schema = u), t.properties) m(s, r, t.properties[r], n, a);
                if (n.vdom && ("html" === u.space ? a = a.toUpperCase() : s.namespace = c[u.space]), n.prefix && (n.key++, s.key = n.prefix + n.key), t.children)
                    for (; ++p < t.children.length;) o = t.children[p], d(o) ? f.push(g(e, o, n)) : h(o) && f.push(o.value);
                return n.schema = l, f.length ? e.call(t, a, s, f) : e.call(t, a, s)
            }

            function m(e, t, n, r, i) {
                var c, f = o(r.schema, t);
                null == n || n != n || !1 === n && (r.vue || r.vdom || r.hyperscript) || !n && f.boolean && (r.vue || r.vdom || r.hyperscript) || (n && "object" == typeof n && "length" in n && (n = (f.commaSeparated ? a : u).stringify(n)), f.boolean && r.hyperscript && (n = ""), "style" === f.property && "string" == typeof n && (r.react || r.vue || r.vdom) && (n = function(e, t) {
                    var n = {};
                    try {
                        s(e, r)
                    } catch (i) {
                        throw i.message = t + "[style]" + i.message.slice("undefined".length), i
                    }
                    return n;

                    function r(e, t) {
                        "-ms-" === e.slice(0, 4) && (e = "ms-" + e.slice(4)), n[e.replace(/-([a-z])/g, y)] = t
                    }
                }(n, i)), r.vue ? "style" !== f.property && (c = "attrs") : f.mustUseProperty || (r.vdom ? "style" !== f.property && (c = "attributes") : r.hyperscript && (c = "attrs")), c ? (e[c] || (e[c] = {}), e[c][f.attribute] = n) : f.space && r.react ? e[l[f.property] || f.property] = n : e[f.attribute] = n)
            }

            function v(e) {
                return Boolean(e && e.context && e.cleanup)
            }

            function y(e, t) {
                return t.toUpperCase()
            }
            e.exports = function(e, t, n) {
                var o, l = n || {},
                    u = function(e) {
                        var t = e && e("div");
                        return Boolean(t && ("_owner" in t || "_store" in t) && null == t.key)
                    }(e),
                    a = function(e) {
                        var t = e && e("div");
                        return Boolean(t && t.context && t.context._isVue)
                    }(e),
                    s = function(e) {
                        return e && "VirtualNode" === e("div").type
                    }(e);
                if ("function" != typeof e) throw new Error("h is not a function");
                "string" == typeof l || "boolean" == typeof l ? (o = l, l = {}) : o = l.prefix;
                if (p(t)) t = 1 === t.children.length && d(t.children[0]) ? t.children[0] : {
                    type: "element",
                    tagName: "div",
                    properties: {},
                    children: t.children
                };
                else if (!d(t)) throw new Error("Expected root or element, not `" + (t && t.type || t) + "`");
                return g(e, t, {
                    schema: "svg" === l.space ? i : r,
                    prefix: null == o ? u || a || s ? "h-" : null : o,
                    key: 0,
                    react: u,
                    vue: a,
                    vdom: s,
                    hyperscript: v(e)
                })
            }
        },
        36735: (e, t, n) => {
            "use strict";
            e.exports = n(65464)
        },
        65464: (e, t, n) => {
            "use strict";
            var r = n(31693),
                i = n(44214);
            e.exports = function(e, t) {
                var n, o = {
                    type: "root",
                    children: []
                };
                e && "object" == typeof e && e.type && (n = a(r(i, t || {}), e, [])) && ("length" in n ? 1 === n.length ? o = n[0] : o.children = n : o = n);
                return o
            };
            var o = {}.hasOwnProperty,
                l = [].push,
                u = {
                    root: {
                        children: s
                    },
                    doctype: function(e) {
                        return e.allowDoctypes ? {
                            name: p
                        } : null
                    },
                    comment: function(e) {
                        return e.allowComments ? {
                            value: h
                        } : null
                    },
                    element: {
                        tagName: d,
                        properties: function(e, t, n, i) {
                            var l, u, a, s = d(e, n.tagName, n, i),
                                p = e.required || {},
                                h = t || {},
                                m = r(g(e.attributes["*"]), g(o.call(e.attributes, s) ? e.attributes[s] : [])),
                                v = {};
                            for (u in h) {
                                if (o.call(m, u)) l = m[u];
                                else {
                                    if (!((y = u).length > 4 && "data" === y.slice(0, 4).toLowerCase() && o.call(m, "data*"))) continue;
                                    l = m["data*"]
                                }
                                null != (a = (a = h[u]) && "object" == typeof a && "length" in a ? c(e, a, u, l) : f(e, a, u, l)) && (v[u] = a)
                            }
                            var y;
                            if (o.call(p, s))
                                for (u in p[s]) o.call(v, u) || (v[u] = p[s][u]);
                            return v
                        },
                        children: s
                    },
                    text: {
                        value: function(e, t) {
                            return "string" == typeof t ? t : ""
                        }
                    },
                    "*": {
                        data: m,
                        position: m
                    }
                };

            function a(e, t, n) {
                var i, l, a, s, c, f = t && t.type,
                    p = {
                        type: t.type
                    };
                if (o.call(u, f) && ("function" == typeof(l = u[f]) && (l = l(e, t)), l))
                    for (c in i = !0, a = r(l, u["*"])) !1 === (s = a[c](e, t[c], t, n)) ? (i = null, p[c] = t[c]) : null != s && (p[c] = s);
                return i ? p : p.children && p.children.length && e.strip.indexOf(p.tagName) < 0 ? p.children : null
            }

            function s(e, t, n, r) {
                var i, o = [],
                    u = -1;
                if (t) {
                    for (r.push(n.tagName); ++u < t.length;)(i = a(e, t[u], r)) && ("length" in i ? l.apply(o, i) : o.push(i));
                    r.pop()
                }
                return o
            }

            function c(e, t, n, r) {
                for (var i, o = [], l = -1; ++l < t.length;) null != (i = f(e, t[l], n, r)) && o.push(i);
                return o
            }

            function f(e, t, n, r) {
                if (("boolean" == typeof t || "number" == typeof t || "string" == typeof t) && function(e, t, n) {
                        var r = String(t),
                            i = r.indexOf(":"),
                            l = r.indexOf("?"),
                            u = r.indexOf("#"),
                            a = r.indexOf("/"),
                            s = o.call(e.protocols, n) ? e.protocols[n].concat() : [],
                            c = -1;
                        if (!s.length || i < 0 || a > -1 && i > a || l > -1 && i > l || u > -1 && i > u) return !0;
                        for (; ++c < s.length;)
                            if (i === s[c].length && r.slice(0, s[c].length) === s[c]) return !0;
                        return !1
                    }(e, t, n) && (!r.length || r.indexOf(t) > -1)) return e.clobber.indexOf(n) < 0 ? t : e.clobberPrefix + t
            }

            function p() {
                return "html"
            }

            function d(e, t, n, r) {
                var i = "string" == typeof t && t,
                    l = -1;
                if (!i || "*" === i || e.tagNames.indexOf(i) < 0) return !1;
                if (o.call(e.ancestors, i)) {
                    for (; ++l < e.ancestors[i].length;)
                        if (r.indexOf(e.ancestors[i][l]) > -1) return i;
                    return !1
                }
                return i
            }

            function h(e, t) {
                var n = "string" == typeof t ? t : "",
                    r = n.indexOf("--\x3e");
                return r < 0 ? n : n.slice(0, r)
            }

            function g(e) {
                for (var t, n = {}, r = -1; ++r < e.length;)(t = e[r]) && "object" == typeof t && "length" in t ? n[t[0]] = t.slice(1) : n[t] = [];
                return n
            }

            function m(e, t) {
                return t
            }
        },
        52013: (e, t, n) => {
            "use strict";
            n(73656);
            var r = n(42873),
                i = n(84681),
                o = n(84853);
            e.exports = a;
            var l = {}.hasOwnProperty,
                u = ["history", "path", "basename", "stem", "extname", "dirname"];

            function a(e) {
                var t, n;
                if (e) {
                    if ("string" == typeof e || o(e)) e = {
                        contents: e
                    };
                    else if ("message" in e && "messages" in e) return e
                } else e = {};
                if (!(this instanceof a)) return new a(e);
                for (this.data = {}, this.messages = [], this.history = [], this.cwd = i.cwd(), n = -1; ++n < u.length;) t = u[n], l.call(e, t) && (this[t] = e[t]);
                for (t in e) u.indexOf(t) < 0 && (this[t] = e[t])
            }

            function s(e, t) {
                if (e && e.indexOf(r.sep) > -1) throw new Error("`" + t + "` cannot be a path: did not expect `" + r.sep + "`")
            }

            function c(e, t) {
                if (!e) throw new Error("`" + t + "` cannot be empty")
            }

            function f(e, t) {
                if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
            }
            a.prototype.toString = function(e) {
                return (this.contents || "").toString(e)
            }, Object.defineProperty(a.prototype, "path", {
                get: function() {
                    return this.history[this.history.length - 1]
                },
                set: function(e) {
                    c(e, "path"), this.path !== e && this.history.push(e)
                }
            }), Object.defineProperty(a.prototype, "dirname", {
                get: function() {
                    return "string" == typeof this.path ? r.dirname(this.path) : void 0
                },
                set: function(e) {
                    f(this.path, "dirname"), this.path = r.join(e || "", this.basename)
                }
            }), Object.defineProperty(a.prototype, "basename", {
                get: function() {
                    return "string" == typeof this.path ? r.basename(this.path) : void 0
                },
                set: function(e) {
                    c(e, "basename"), s(e, "basename"), this.path = r.join(this.dirname || "", e)
                }
            }), Object.defineProperty(a.prototype, "extname", {
                get: function() {
                    return "string" == typeof this.path ? r.extname(this.path) : void 0
                },
                set: function(e) {
                    if (s(e, "extname"), f(this.path, "extname"), e) {
                        if (46 !== e.charCodeAt(0)) throw new Error("`extname` must start with `.`");
                        if (e.indexOf(".", 1) > -1) throw new Error("`extname` cannot contain multiple dots")
                    }
                    this.path = r.join(this.dirname, this.stem + (e || ""))
                }
            }), Object.defineProperty(a.prototype, "stem", {
                get: function() {
                    return "string" == typeof this.path ? r.basename(this.path, this.extname) : void 0
                },
                set: function(e) {
                    c(e, "stem"), s(e, "stem"), this.path = r.join(this.dirname || "", e + (this.extname || ""))
                }
            })
        },
        90158: e => {
            var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                n = /\n/g,
                r = /^\s*/,
                i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                o = /^:\s*/,
                l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                u = /^[;\s]*/,
                a = /^\s+|\s+$/g,
                s = "";

            function c(e) {
                return e ? e.replace(a, s) : s
            }
            e.exports = function(e, a) {
                if ("string" != typeof e) throw new TypeError("First argument must be a string");
                if (!e) return [];
                a = a || {};
                var f = 1,
                    p = 1;

                function d(e) {
                    var t = e.match(n);
                    t && (f += t.length);
                    var r = e.lastIndexOf("\n");
                    p = ~r ? e.length - r : p + e.length
                }

                function h() {
                    var e = {
                        line: f,
                        column: p
                    };
                    return function(t) {
                        return t.position = new g(e), x(), t
                    }
                }

                function g(e) {
                    this.start = e, this.end = {
                        line: f,
                        column: p
                    }, this.source = a.source
                }
                g.prototype.content = e;
                var m = [];

                function v(t) {
                    var n = new Error(a.source + ":" + f + ":" + p + ": " + t);
                    if (n.reason = t, n.filename = a.source, n.line = f, n.column = p, n.source = e, !a.silent) throw n;
                    m.push(n)
                }

                function y(t) {
                    var n = t.exec(e);
                    if (n) {
                        var r = n[0];
                        return d(r), e = e.slice(r.length), n
                    }
                }

                function x() {
                    y(r)
                }

                function k(e) {
                    var t;
                    for (e = e || []; t = b();) !1 !== t && e.push(t);
                    return e
                }

                function b() {
                    var t = h();
                    if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                        for (var n = 2; s != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
                        if (n += 2, s === e.charAt(n - 1)) return v("End of comment missing");
                        var r = e.slice(2, n - 2);
                        return p += 2, d(r), e = e.slice(n), p += 2, t({
                            type: "comment",
                            comment: r
                        })
                    }
                }

                function w() {
                    var e = h(),
                        n = y(i);
                    if (n) {
                        if (b(), !y(o)) return v("property missing ':'");
                        var r = y(l),
                            a = e({
                                type: "declaration",
                                property: c(n[0].replace(t, s)),
                                value: r ? c(r[0].replace(t, s)) : s
                            });
                        return y(u), a
                    }
                }
                return x(),
                    function() {
                        var e, t = [];
                        for (k(t); e = w();) !1 !== e && (t.push(e), k(t));
                        return t
                    }()
            }
        },
        84853: e => {
            e.exports = function(e) {
                return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
        },
        42125: e => {
            "use strict";
            e.exports = e => {
                if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
                const t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }
        },
        49721: (e, t, n) => {
            "use strict";
            var r = n(99273);
            e.exports = function(e, t) {
                return function(e) {
                    return t;

                    function t(t) {
                        var n = t && o(t);
                        return n && i.call(e, n) ? e[n] : null
                    }
                }(function(e) {
                    var t = {};
                    if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
                    return r(e, "definition", n), t;

                    function n(e) {
                        var n = o(e.identifier);
                        i.call(t, n) || (t[n] = e)
                    }
                }(e))
            };
            var i = {}.hasOwnProperty;

            function o(e) {
                return e.toUpperCase()
            }
        },
        50110: (e, t, n) => {
            "use strict";
            e.exports = function(e, t, n) {
                "string" != typeof t && (n = t, t = void 0);
                return function(e) {
                    var t = e || {},
                        n = function(e, t) {
                            var n = -1;
                            for (; ++n < t.length;) d(e, t[n]);
                            return e
                        }({
                            transforms: [],
                            canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                            enter: {
                                autolink: v(pe),
                                autolinkProtocol: B,
                                autolinkEmail: B,
                                atxHeading: v(ae),
                                blockQuote: v(re),
                                characterEscape: B,
                                characterReference: B,
                                codeFenced: v(ie),
                                codeFencedFenceInfo: y,
                                codeFencedFenceMeta: y,
                                codeIndented: v(ie, y),
                                codeText: v(oe, y),
                                codeTextData: B,
                                data: B,
                                codeFlowValue: B,
                                definition: v(le),
                                definitionDestinationString: y,
                                definitionLabelString: y,
                                definitionTitleString: y,
                                emphasis: v(ue),
                                hardBreakEscape: v(se),
                                hardBreakTrailing: v(se),
                                htmlFlow: v(ce, y),
                                htmlFlowData: B,
                                htmlText: v(ce, y),
                                htmlTextData: B,
                                image: v(fe),
                                label: y,
                                link: v(pe),
                                listItem: v(he),
                                listItemValue: C,
                                listOrdered: v(de, S),
                                listUnordered: v(de),
                                paragraph: v(ge),
                                reference: J,
                                referenceString: y,
                                resourceDestinationString: y,
                                resourceTitleString: y,
                                setextHeading: v(ae),
                                strong: v(me),
                                thematicBreak: v(ye)
                            },
                            exit: {
                                atxHeading: k(),
                                atxHeadingSequence: _,
                                autolink: k(),
                                autolinkEmail: ne,
                                autolinkProtocol: te,
                                blockQuote: k(),
                                characterEscapeValue: R,
                                characterReferenceMarkerHexadecimal: G,
                                characterReferenceMarkerNumeric: G,
                                characterReferenceValue: ee,
                                codeFenced: k(O),
                                codeFencedFence: A,
                                codeFencedFenceInfo: E,
                                codeFencedFenceMeta: F,
                                codeFlowValue: R,
                                codeIndented: k(P),
                                codeText: k(U),
                                codeTextData: R,
                                data: R,
                                definition: k(),
                                definitionDestinationString: T,
                                definitionLabelString: I,
                                definitionTitleString: D,
                                emphasis: k(),
                                hardBreakEscape: k(j),
                                hardBreakTrailing: k(j),
                                htmlFlow: k(H),
                                htmlFlowData: R,
                                htmlText: k(V),
                                htmlTextData: R,
                                image: k(K),
                                label: W,
                                labelText: $,
                                lineEnding: N,
                                link: k(q),
                                listItem: k(),
                                listOrdered: k(),
                                listUnordered: k(),
                                paragraph: k(),
                                referenceString: Z,
                                resourceDestinationString: X,
                                resourceTitleString: Q,
                                resource: Y,
                                setextHeading: k(z),
                                setextHeadingLineSequence: M,
                                setextHeadingText: L,
                                strong: k(),
                                thematicBreak: k()
                            }
                        }, t.mdastExtensions || []),
                        a = {};
                    return s;

                    function s(e) {
                        for (var t, r = {
                                type: "root",
                                children: []
                            }, l = [], u = [], a = -1, s = {
                                stack: [r],
                                tokenStack: l,
                                config: n,
                                enter: x,
                                exit: b,
                                buffer: y,
                                resume: w,
                                setData: h,
                                getData: g
                            }; ++a < e.length;) "listOrdered" !== e[a][1].type && "listUnordered" !== e[a][1].type || ("enter" === e[a][0] ? u.push(a) : a = c(e, u.pop(a), a));
                        for (a = -1; ++a < e.length;) t = n[e[a][0]], o.call(t, e[a][1].type) && t[e[a][1].type].call(i({
                            sliceSerialize: e[a][2].sliceSerialize
                        }, s), e[a][1]);
                        if (l.length) throw new Error("Cannot close document, a token (`" + l[l.length - 1].type + "`, " + p({
                            start: l[l.length - 1].start,
                            end: l[l.length - 1].end
                        }) + ") is still open");
                        for (r.position = {
                                start: m(e.length ? e[0][1].start : {
                                    line: 1,
                                    column: 1,
                                    offset: 0
                                }),
                                end: m(e.length ? e[e.length - 2][1].end : {
                                    line: 1,
                                    column: 1,
                                    offset: 0
                                })
                            }, a = -1; ++a < n.transforms.length;) r = n.transforms[a](r) || r;
                        return r
                    }

                    function c(e, t, n) {
                        for (var r, i, o, l, u, a, s, c = t - 1, f = -1, p = !1; ++c <= n;)
                            if ("listUnordered" === (u = e[c])[1].type || "listOrdered" === u[1].type || "blockQuote" === u[1].type ? ("enter" === u[0] ? f++ : f--, s = void 0) : "lineEndingBlank" === u[1].type ? "enter" === u[0] && (!r || s || f || a || (a = c), s = void 0) : "linePrefix" === u[1].type || "listItemValue" === u[1].type || "listItemMarker" === u[1].type || "listItemPrefix" === u[1].type || "listItemPrefixWhitespace" === u[1].type || (s = void 0), !f && "enter" === u[0] && "listItemPrefix" === u[1].type || -1 === f && "exit" === u[0] && ("listUnordered" === u[1].type || "listOrdered" === u[1].type)) {
                                if (r) {
                                    for (i = c, o = void 0; i--;)
                                        if ("lineEnding" === (l = e[i])[1].type || "lineEndingBlank" === l[1].type) {
                                            if ("exit" === l[0]) continue;
                                            o && (e[o][1].type = "lineEndingBlank", p = !0), l[1].type = "lineEnding", o = i
                                        } else if ("linePrefix" !== l[1].type && "blockQuotePrefix" !== l[1].type && "blockQuotePrefixWhitespace" !== l[1].type && "blockQuoteMarker" !== l[1].type && "listItemIndent" !== l[1].type) break;
                                    a && (!o || a < o) && (r._spread = !0), r.end = m(o ? e[o][1].start : u[1].end), e.splice(o || c, 0, ["exit", r, u[2]]), c++, n++
                                }
                                "listItemPrefix" === u[1].type && (r = {
                                    type: "listItem",
                                    _spread: !1,
                                    start: m(u[1].start)
                                }, e.splice(c, 0, ["enter", r, u[2]]), c++, n++, a = void 0, s = !0)
                            }
                        return e[t][1]._spread = p, n
                    }

                    function h(e, t) {
                        a[e] = t
                    }

                    function g(e) {
                        return a[e]
                    }

                    function m(e) {
                        return {
                            line: e.line,
                            column: e.column,
                            offset: e.offset
                        }
                    }

                    function v(e, t) {
                        return n;

                        function n(n) {
                            x.call(this, e(n), n), t && t.call(this, n)
                        }
                    }

                    function y() {
                        this.stack.push({
                            type: "fragment",
                            children: []
                        })
                    }

                    function x(e, t) {
                        return this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push(t), e.position = {
                            start: m(t.start)
                        }, e
                    }

                    function k(e) {
                        return t;

                        function t(t) {
                            e && e.call(this, t), b.call(this, t)
                        }
                    }

                    function b(e) {
                        var t = this.stack.pop(),
                            n = this.tokenStack.pop();
                        if (!n) throw new Error("Cannot close `" + e.type + "` (" + p({
                            start: e.start,
                            end: e.end
                        }) + "): it\u2019s not open");
                        if (n.type !== e.type) throw new Error("Cannot close `" + e.type + "` (" + p({
                            start: e.start,
                            end: e.end
                        }) + "): a different token (`" + n.type + "`, " + p({
                            start: n.start,
                            end: n.end
                        }) + ") is open");
                        return t.position.end = m(e.end), t
                    }

                    function w() {
                        return r(this.stack.pop())
                    }

                    function S() {
                        h("expectingFirstListItemValue", !0)
                    }

                    function C(e) {
                        g("expectingFirstListItemValue") && (this.stack[this.stack.length - 2].start = parseInt(this.sliceSerialize(e), 10), h("expectingFirstListItemValue"))
                    }

                    function E() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].lang = e
                    }

                    function F() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].meta = e
                    }

                    function A() {
                        g("flowCodeInside") || (this.buffer(), h("flowCodeInside", !0))
                    }

                    function O() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), h("flowCodeInside")
                    }

                    function P() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function I(e) {
                        var t = this.resume();
                        this.stack[this.stack.length - 1].label = t, this.stack[this.stack.length - 1].identifier = l(this.sliceSerialize(e)).toLowerCase()
                    }

                    function D() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].title = e
                    }

                    function T() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].url = e
                    }

                    function _(e) {
                        this.stack[this.stack.length - 1].depth || (this.stack[this.stack.length - 1].depth = this.sliceSerialize(e).length)
                    }

                    function L() {
                        h("setextHeadingSlurpLineEnding", !0)
                    }

                    function M(e) {
                        this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
                    }

                    function z() {
                        h("setextHeadingSlurpLineEnding")
                    }

                    function B(e) {
                        var t = this.stack[this.stack.length - 1].children,
                            n = t[t.length - 1];
                        n && "text" === n.type || ((n = ve()).position = {
                            start: m(e.start)
                        }, this.stack[this.stack.length - 1].children.push(n)), this.stack.push(n)
                    }

                    function R(e) {
                        var t = this.stack.pop();
                        t.value += this.sliceSerialize(e), t.position.end = m(e.end)
                    }

                    function N(e) {
                        var t = this.stack[this.stack.length - 1];
                        if (g("atHardBreak")) return t.children[t.children.length - 1].position.end = m(e.end), void h("atHardBreak");
                        !g("setextHeadingSlurpLineEnding") && n.canContainEols.indexOf(t.type) > -1 && (B.call(this, e), R.call(this, e))
                    }

                    function j() {
                        h("atHardBreak", !0)
                    }

                    function H() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function V() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function U() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function q() {
                        var e = this.stack[this.stack.length - 1];
                        g("inReference") ? (e.type += "Reference", e.referenceType = g("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label, delete e.referenceType), h("referenceType")
                    }

                    function K() {
                        var e = this.stack[this.stack.length - 1];
                        g("inReference") ? (e.type += "Reference", e.referenceType = g("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label, delete e.referenceType), h("referenceType")
                    }

                    function $(e) {
                        this.stack[this.stack.length - 2].identifier = l(this.sliceSerialize(e)).toLowerCase()
                    }

                    function W() {
                        var e = this.stack[this.stack.length - 1],
                            t = this.resume();
                        this.stack[this.stack.length - 1].label = t, h("inReference", !0), "link" === this.stack[this.stack.length - 1].type ? this.stack[this.stack.length - 1].children = e.children : this.stack[this.stack.length - 1].alt = t
                    }

                    function X() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].url = e
                    }

                    function Q() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].title = e
                    }

                    function Y() {
                        h("inReference")
                    }

                    function J() {
                        h("referenceType", "collapsed")
                    }

                    function Z(e) {
                        var t = this.resume();
                        this.stack[this.stack.length - 1].label = t, this.stack[this.stack.length - 1].identifier = l(this.sliceSerialize(e)).toLowerCase(), h("referenceType", "full")
                    }

                    function G(e) {
                        h("characterReferenceType", e.type)
                    }

                    function ee(e) {
                        var t, n, r = this.sliceSerialize(e),
                            i = g("characterReferenceType");
                        i ? (t = u(r, "characterReferenceMarkerNumeric" === i ? 10 : 16), h("characterReferenceType")) : t = f(r), (n = this.stack.pop()).value += t, n.position.end = m(e.end)
                    }

                    function te(e) {
                        R.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
                    }

                    function ne(e) {
                        R.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e)
                    }

                    function re() {
                        return {
                            type: "blockquote",
                            children: []
                        }
                    }

                    function ie() {
                        return {
                            type: "code",
                            lang: null,
                            meta: null,
                            value: ""
                        }
                    }

                    function oe() {
                        return {
                            type: "inlineCode",
                            value: ""
                        }
                    }

                    function le() {
                        return {
                            type: "definition",
                            identifier: "",
                            label: null,
                            title: null,
                            url: ""
                        }
                    }

                    function ue() {
                        return {
                            type: "emphasis",
                            children: []
                        }
                    }

                    function ae() {
                        return {
                            type: "heading",
                            depth: void 0,
                            children: []
                        }
                    }

                    function se() {
                        return {
                            type: "break"
                        }
                    }

                    function ce() {
                        return {
                            type: "html",
                            value: ""
                        }
                    }

                    function fe() {
                        return {
                            type: "image",
                            title: null,
                            url: "",
                            alt: null
                        }
                    }

                    function pe() {
                        return {
                            type: "link",
                            title: null,
                            url: "",
                            children: []
                        }
                    }

                    function de(e) {
                        return {
                            type: "list",
                            ordered: "listOrdered" === e.type,
                            start: null,
                            spread: e._spread,
                            children: []
                        }
                    }

                    function he(e) {
                        return {
                            type: "listItem",
                            spread: e._spread,
                            checked: null,
                            children: []
                        }
                    }

                    function ge() {
                        return {
                            type: "paragraph",
                            children: []
                        }
                    }

                    function me() {
                        return {
                            type: "strong",
                            children: []
                        }
                    }

                    function ve() {
                        return {
                            type: "text",
                            value: ""
                        }
                    }

                    function ye() {
                        return {
                            type: "thematicBreak"
                        }
                    }
                }(n)(c(a(n).document().write(s()(e, t, !0))))
            };
            var r = n(22162),
                i = n(90399),
                o = n(96200),
                l = n(77158),
                u = n(25256),
                a = n(41401),
                s = n(47435),
                c = n(70450),
                f = n(18889),
                p = n(1839);

            function d(e, t) {
                var n, r;
                for (n in t) r = o.call(e, n) ? e[n] : e[n] = {}, "canContainEols" === n || "transforms" === n ? e[n] = [].concat(r, t[n]) : Object.assign(r, t[n])
            }
        },
        67814: (e, t, n) => {
            "use strict";
            e.exports = n(50110)
        },
        7498: (e, t, n) => {
            "use strict";
            e.exports = n(78680)
        },
        60071: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n, i, o = t.children || [],
                    l = o.length,
                    u = [],
                    a = -1;
                for (; ++a < l;)(n = r(e, o[a], t)) && (a && "break" === o[a - 1].type && (n.value && (n.value = n.value.replace(/^\s+/, "")), (i = n.children && n.children[0]) && i.value && (i.value = i.value.replace(/^\s+/, ""))), u = u.concat(n));
                return u
            };
            var r = n(43358)
        },
        20478: (e, t, n) => {
            "use strict";
            e.exports = function(e) {
                var t, n, l, u, a = e.footnoteById,
                    s = e.footnoteOrder,
                    c = s.length,
                    f = -1,
                    p = [];
                for (; ++f < c;)(t = a[s[f].toUpperCase()]) && (l = t.children.concat(), u = l[l.length - 1], n = {
                    type: "link",
                    url: "#fnref-" + t.identifier,
                    data: {
                        hProperties: {
                            className: ["footnote-backref"]
                        }
                    },
                    children: [{
                        type: "text",
                        value: "\u21a9"
                    }]
                }, u && "paragraph" === u.type || (u = {
                    type: "paragraph",
                    children: []
                }, l.push(u)), u.children.push(n), p.push({
                    type: "listItem",
                    data: {
                        hProperties: {
                            id: "fn-" + t.identifier
                        }
                    },
                    children: l,
                    position: t.position
                }));
                if (0 === p.length) return null;
                return e(null, "div", {
                    className: ["footnotes"]
                }, o([r(e), i(e, {
                    type: "list",
                    ordered: !0,
                    children: p
                })], !0))
            };
            var r = n(95987),
                i = n(64411),
                o = n(32837)
        },
        65561: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "blockquote", r(i(e, t), !0))
            };
            var r = n(32837),
                i = n(60071)
        },
        1475: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return [e(t, "br"), r("text", "\n")]
            };
            var r = n(64992)
        },
        3324: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n, i = t.value ? t.value + "\n" : "",
                    o = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/),
                    l = {};
                o && (l.className = ["language-" + o]);
                n = e(t, "code", l, [r("text", i)]), t.meta && (n.data = {
                    meta: t.meta
                });
                return e(t.position, "pre", [n])
            };
            var r = n(64992)
        },
        3262: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "del", r(e, t))
            };
            var r = n(60071)
        },
        71691: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "em", r(e, t))
            };
            var r = n(60071)
        },
        66078: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n = e.footnoteOrder,
                    i = String(t.identifier); - 1 === n.indexOf(i) && n.push(i);
                return e(t.position, "sup", {
                    id: "fnref-" + i
                }, [e(t, "a", {
                    href: "#fn-" + i,
                    className: ["footnote-ref"]
                }, [r("text", t.label || i)])])
            };
            var r = n(64992)
        },
        66876: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n = e.footnoteById,
                    i = e.footnoteOrder,
                    o = 1;
                for (; o in n;) o++;
                return o = String(o), i.push(o), n[o] = {
                    type: "footnoteDefinition",
                    identifier: o,
                    children: [{
                        type: "paragraph",
                        children: t.children
                    }],
                    position: t.position
                }, r(e, {
                    type: "footnoteReference",
                    identifier: o,
                    position: t.position
                })
            };
            var r = n(66078)
        },
        33472: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "h" + t.depth, r(e, t))
            };
            var r = n(60071)
        },
        69517: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e.dangerous ? e.augment(t, r("raw", t.value)) : null
            };
            var r = n(64992)
        },
        12278: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n, o = e.definition(t.identifier);
                if (!o) return i(e, t);
                n = {
                    src: r(o.url || ""),
                    alt: t.alt
                }, null !== o.title && void 0 !== o.title && (n.title = o.title);
                return e(t, "img", n)
            };
            var r = n(77385),
                i = n(28875)
        },
        85166: (e, t, n) => {
            "use strict";
            var r = n(77385);
            e.exports = function(e, t) {
                var n = {
                    src: r(t.url),
                    alt: t.alt
                };
                null !== t.title && void 0 !== t.title && (n.title = t.title);
                return e(t, "img", n)
            }
        },
        3828: (e, t, n) => {
            "use strict";

            function r() {
                return null
            }
            e.exports = {
                blockquote: n(65561),
                break: n(1475),
                code: n(3324),
                delete: n(3262),
                emphasis: n(71691),
                footnoteReference: n(66078),
                footnote: n(66876),
                heading: n(33472),
                html: n(69517),
                imageReference: n(12278),
                image: n(85166),
                inlineCode: n(79697),
                linkReference: n(96525),
                link: n(69379),
                listItem: n(85093),
                list: n(64411),
                paragraph: n(53170),
                root: n(61986),
                strong: n(71330),
                table: n(92724),
                text: n(557),
                thematicBreak: n(95987),
                toml: r,
                yaml: r,
                definition: r,
                footnoteDefinition: r
            }
        },
        79697: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n = t.value.replace(/\r?\n|\r/g, " ");
                return e(t, "code", [r("text", n)])
            };
            var r = n(64992)
        },
        96525: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n, l = e.definition(t.identifier);
                if (!l) return i(e, t);
                n = {
                    href: r(l.url || "")
                }, null !== l.title && void 0 !== l.title && (n.title = l.title);
                return e(t, "a", n, o(e, t))
            };
            var r = n(77385),
                i = n(28875),
                o = n(60071)
        },
        69379: (e, t, n) => {
            "use strict";
            var r = n(77385),
                i = n(60071);
            e.exports = function(e, t) {
                var n = {
                    href: r(t.url)
                };
                null !== t.title && void 0 !== t.title && (n.title = t.title);
                return e(t, "a", n, i(e, t))
            }
        },
        85093: (e, t, n) => {
            "use strict";
            e.exports = function(e, t, n) {
                var l, u, a, s = i(e, t),
                    c = s[0],
                    f = n ? function(e) {
                        var t = e.spread,
                            n = e.children,
                            r = n.length,
                            i = -1;
                        for (; !t && ++i < r;) t = o(n[i]);
                        return t
                    }(n) : o(t),
                    p = {},
                    d = [];
                "boolean" == typeof t.checked && (c && "p" === c.tagName || (c = e(null, "p", []), s.unshift(c)), c.children.length > 0 && c.children.unshift(r("text", " ")), c.children.unshift(e(null, "input", {
                    type: "checkbox",
                    checked: t.checked,
                    disabled: !0
                })), p.className = ["task-list-item"]);
                l = s.length, u = -1;
                for (; ++u < l;) a = s[u], (f || 0 !== u || "p" !== a.tagName) && d.push(r("text", "\n")), "p" !== a.tagName || f ? d.push(a) : d = d.concat(a.children);
                l && (f || "p" !== a.tagName) && d.push(r("text", "\n"));
                return e(t, "li", p, d)
            };
            var r = n(64992),
                i = n(60071);

            function o(e) {
                var t = e.spread;
                return null == t ? e.children.length > 1 : t
            }
        },
        64411: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n, o, l = {},
                    u = t.ordered ? "ol" : "ul",
                    a = -1;
                "number" == typeof t.start && 1 !== t.start && (l.start = t.start);
                n = i(e, t), o = n.length;
                for (; ++a < o;)
                    if (n[a].properties.className && -1 !== n[a].properties.className.indexOf("task-list-item")) {
                        l.className = ["contains-task-list"];
                        break
                    }
                return e(t, u, l, r(n, !0))
            };
            var r = n(32837),
                i = n(60071)
        },
        53170: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "p", r(e, t))
            };
            var r = n(60071)
        },
        61986: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e.augment(t, r("root", i(o(e, t))))
            };
            var r = n(64992),
                i = n(32837),
                o = n(60071)
        },
        71330: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "strong", r(e, t))
            };
            var r = n(60071)
        },
        92724: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n, l, u, a, s, c = t.children,
                    f = c.length,
                    p = t.align || [],
                    d = p.length,
                    h = [];
                for (; f--;) {
                    for (l = c[f].children, a = 0 === f ? "th" : "td", n = d || l.length, u = []; n--;) s = l[n], u[n] = e(s, a, {
                        align: p[n]
                    }, s ? o(e, s) : []);
                    h[f] = e(c[f], "tr", i(u, !0))
                }
                return e(t, "table", i([e(h[0].position, "thead", i([h[0]], !0))].concat(h[1] ? e({
                    start: r.start(h[1]),
                    end: r.end(h[h.length - 1])
                }, "tbody", i(h.slice(1), !0)) : []), !0))
            };
            var r = n(89225),
                i = n(32837),
                o = n(60071)
        },
        557: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                return e.augment(t, r("text", String(t.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1")))
            };
            var r = n(64992)
        },
        95987: e => {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "hr")
            }
        },
        78680: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n = function(e, t) {
                        var n = t || {};
                        void 0 === n.allowDangerousHTML || p || (p = !0, console.warn("mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead"));
                        var r = n.allowDangerousHtml || n.allowDangerousHTML,
                            a = {};
                        return d.dangerous = r, d.definition = u(e), d.footnoteById = a, d.footnoteOrder = [], d.augment = s, d.handlers = Object.assign({}, c, n.handlers), d.unknownHandler = n.unknownHandler, d.passThrough = n.passThrough, i(e, "footnoteDefinition", h), d;

                        function s(e, t) {
                            var n, r;
                            return e && e.data && ((n = e.data).hName && ("element" !== t.type && (t = {
                                type: "element",
                                tagName: "",
                                properties: {},
                                children: []
                            }), t.tagName = n.hName), "element" === t.type && n.hProperties && (t.properties = Object.assign({}, t.properties, n.hProperties)), t.children && n.hChildren && (t.children = n.hChildren)), r = e && e.position ? e : {
                                position: e
                            }, l(r) || (t.position = {
                                start: o.start(r),
                                end: o.end(r)
                            }), t
                        }

                        function d(e, t, n, r) {
                            return null == r && "object" == typeof n && "length" in n && (r = n, n = {}), s(e, {
                                type: "element",
                                tagName: t,
                                properties: n || {},
                                children: r || []
                            })
                        }

                        function h(e) {
                            var t = String(e.identifier).toUpperCase();
                            f.call(a, t) || (a[t] = e)
                        }
                    }(e, t),
                    d = a(n, e),
                    h = s(n);
                h && (d.children = d.children.concat(r("text", "\n"), h));
                return d
            };
            var r = n(64992),
                i = n(99273),
                o = n(89225),
                l = n(96259),
                u = n(49721),
                a = n(43358),
                s = n(20478),
                c = n(3828),
                f = {}.hasOwnProperty,
                p = !1
        },
        43358: (e, t, n) => {
            "use strict";
            e.exports = function(e, t, n) {
                var r, i = t && t.type;
                if (!i) throw new Error("Expected node, got `" + t + "`");
                r = o.call(e.handlers, i) ? e.handlers[i] : e.passThrough && e.passThrough.indexOf(i) > -1 ? u : e.unknownHandler;
                return ("function" == typeof r ? r : l)(e, t, n)
            };
            var r = n(64992),
                i = n(60071),
                o = {}.hasOwnProperty;

            function l(e, t) {
                return function(e) {
                    var t = e.data || {};
                    if (o.call(t, "hName") || o.call(t, "hProperties") || o.call(t, "hChildren")) return !1;
                    return "value" in e
                }(t) ? e.augment(t, r("text", t.value)) : e(t, "div", i(e, t))
            }

            function u(e, t) {
                var n;
                return t.children ? ((n = Object.assign({}, t)).children = i(e, t), n) : t
            }
        },
        28875: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n, o, l, u = t.referenceType,
                    a = "]";
                "collapsed" === u ? a += "[]" : "full" === u && (a += "[" + (t.label || t.identifier) + "]");
                if ("imageReference" === t.type) return r("text", "![" + t.alt + a);
                n = i(e, t), (o = n[0]) && "text" === o.type ? o.value = "[" + o.value : n.unshift(r("text", "["));
                (l = n[n.length - 1]) && "text" === l.type ? l.value += a : n.push(r("text", a));
                return n
            };
            var r = n(64992),
                i = n(60071)
        },
        32837: (e, t, n) => {
            "use strict";
            e.exports = function(e, t) {
                var n = [],
                    i = -1,
                    o = e.length;
                t && n.push(r("text", "\n"));
                for (; ++i < o;) i && n.push(r("text", "\n")), n.push(e[i]);
                t && e.length > 0 && n.push(r("text", "\n"));
                return n
            };
            var r = n(64992)
        },
        22162: e => {
            "use strict";

            function t(e) {
                return e && (e.value || e.alt || e.title || "children" in e && n(e.children) || "length" in e && n(e)) || ""
            }

            function n(e) {
                for (var n = [], r = -1; ++r < e.length;) n[r] = t(e[r]);
                return n.join("")
            }
            e.exports = t
        },
        77385: e => {
            "use strict";
            var t = {};

            function n(e, r, i) {
                var o, l, u, a, s, c = "";
                for ("string" != typeof r && (i = r, r = n.defaultChars), void 0 === i && (i = !0), s = function(e) {
                        var n, r, i = t[e];
                        if (i) return i;
                        for (i = t[e] = [], n = 0; n < 128; n++) r = String.fromCharCode(n), /^[0-9a-z]$/i.test(r) ? i.push(r) : i.push("%" + ("0" + n.toString(16).toUpperCase()).slice(-2));
                        for (n = 0; n < e.length; n++) i[e.charCodeAt(n)] = e[n];
                        return i
                    }(r), o = 0, l = e.length; o < l; o++)
                    if (u = e.charCodeAt(o), i && 37 === u && o + 2 < l && /^[0-9a-f]{2}$/i.test(e.slice(o + 1, o + 3))) c += e.slice(o, o + 3), o += 2;
                    else if (u < 128) c += s[u];
                else if (u >= 55296 && u <= 57343) {
                    if (u >= 55296 && u <= 56319 && o + 1 < l && (a = e.charCodeAt(o + 1)) >= 56320 && a <= 57343) {
                        c += encodeURIComponent(e[o] + e[o + 1]), o++;
                        continue
                    }
                    c += "%EF%BF%BD"
                } else c += encodeURIComponent(e[o]);
                return c
            }
            n.defaultChars = ";/?:@&=+$,-_.!~*'()#", n.componentChars = "-_.!~*'()", e.exports = n
        },
        45088: (e, t, n) => {
            "use strict";
            var r = n(64986)(/[A-Za-z]/);
            e.exports = r
        },
        28182: (e, t, n) => {
            "use strict";
            var r = n(64986)(/[\dA-Za-z]/);
            e.exports = r
        },
        90144: (e, t, n) => {
            "use strict";
            var r = n(64986)(/[#-'*+\--9=?A-Z^-~]/);
            e.exports = r
        },
        2878: e => {
            "use strict";
            e.exports = function(e) {
                return e < 32 || 127 === e
            }
        },
        30669: (e, t, n) => {
            "use strict";
            var r = n(64986)(/\d/);
            e.exports = r
        },
        55282: (e, t, n) => {
            "use strict";
            var r = n(64986)(/[\dA-Fa-f]/);
            e.exports = r
        },
        87978: (e, t, n) => {
            "use strict";
            var r = n(64986)(/[!-/:-@[-`{-~]/);
            e.exports = r
        },
        64164: e => {
            "use strict";
            e.exports = function(e) {
                return e < 0 || 32 === e
            }
        },
        86958: e => {
            "use strict";
            e.exports = function(e) {
                return e < -2
            }
        },
        80394: e => {
            "use strict";
            e.exports = function(e) {
                return -2 === e || -1 === e || 32 === e
            }
        },
        62743: (e, t, n) => {
            "use strict";
            var r = n(47080),
                i = n(64986)(r);
            e.exports = i
        },
        77749: (e, t, n) => {
            "use strict";
            var r = n(64986)(/\s/);
            e.exports = r
        },
        90399: e => {
            "use strict";
            var t = Object.assign;
            e.exports = t
        },
        51854: e => {
            "use strict";
            var t = String.fromCharCode;
            e.exports = t
        },
        96200: e => {
            "use strict";
            var t = {}.hasOwnProperty;
            e.exports = t
        },
        93804: e => {
            "use strict";
            e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
        },
        42928: e => {
            "use strict";
            e.exports = ["pre", "script", "style", "textarea"]
        },
        49233: e => {
            "use strict";
            var t = [].splice;
            e.exports = t
        },
        47080: e => {
            "use strict";
            e.exports = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        },
        26558: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(70993),
                i = n(36984),
                o = n(3555),
                l = n(3786),
                u = n(18137),
                a = n(95280),
                s = n(41749),
                c = n(34768),
                f = n(98378),
                p = n(11217),
                d = n(80425),
                h = n(15639),
                g = n(74350),
                m = n(48551),
                v = n(80741),
                y = n(86991),
                x = n(19260),
                k = n(68999),
                b = n(86074),
                w = n(56726),
                S = n(83605),
                C = {
                    42: b,
                    43: b,
                    45: b,
                    48: b,
                    49: b,
                    50: b,
                    51: b,
                    52: b,
                    53: b,
                    54: b,
                    55: b,
                    56: b,
                    57: b,
                    62: l
                },
                E = {
                    91: p
                },
                F = {
                    "-2": c,
                    "-1": c,
                    32: c
                },
                A = {
                    35: h,
                    42: S,
                    45: [w, S],
                    60: g,
                    61: w,
                    95: S,
                    96: s,
                    126: s
                },
                O = {
                    38: a,
                    92: u
                },
                P = {
                    "-5": k,
                    "-4": k,
                    "-3": k,
                    33: y,
                    38: a,
                    42: i,
                    60: [o, m],
                    91: x,
                    92: [d, u],
                    93: v,
                    95: i,
                    96: f
                },
                I = {
                    null: [i, r.resolver]
                };
            t.contentInitial = E, t.disable = {
                null: []
            }, t.document = C, t.flow = A, t.flowInitial = F, t.insideSpan = I, t.string = O, t.text = P
        },
        53224: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(86958),
                i = n(23194),
                o = function(e) {
                    var t, n = e.attempt(this.parser.constructs.contentInitial, (function(t) {
                        if (null === t) return void e.consume(t);
                        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i(e, n, "linePrefix")
                    }), (function(t) {
                        return e.enter("paragraph"), o(t)
                    }));
                    return n;

                    function o(n) {
                        var r = e.enter("chunkText", {
                            contentType: "text",
                            previous: t
                        });
                        return t && (t.next = r), t = r, l(n)
                    }

                    function l(t) {
                        return null === t ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(t)) : r(t) ? (e.consume(t), e.exit("chunkText"), o) : (e.consume(t), l)
                    }
                };
            t.tokenize = o
        },
        55405: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(86958),
                i = n(23194),
                o = n(6319),
                l = function(e) {
                    var t, n, i, l = this,
                        s = [],
                        c = 0,
                        f = {
                            tokenize: function(e, r) {
                                var i = 0;
                                return t = {}, c;

                                function c(r) {
                                    return i < s.length ? (l.containerState = s[i][1], e.attempt(s[i][0].continuation, f, p)(r)) : n.currentConstruct && n.currentConstruct.concrete ? (t.flowContinue = !0, g(r)) : (l.interrupt = n.currentConstruct && n.currentConstruct.interruptible, l.containerState = {}, e.attempt(u, h, g)(r))
                                }

                                function f(e) {
                                    return i++, l.containerState._closeFlow ? h(e) : c(e)
                                }

                                function p(t) {
                                    return n.currentConstruct && n.currentConstruct.lazy ? (l.containerState = {}, e.attempt(u, h, e.attempt(a, h, e.check(o, h, d)))(t)) : h(t)
                                }

                                function d(e) {
                                    return i = s.length, t.lazy = !0, t.flowContinue = !0, g(e)
                                }

                                function h(e) {
                                    return t.flowEnd = !0, g(e)
                                }

                                function g(e) {
                                    return t.continued = i, l.interrupt = l.containerState = void 0, r(e)
                                }
                            },
                            partial: !0
                        };
                    return p;

                    function p(t) {
                        return c < s.length ? (l.containerState = s[c][1], e.attempt(s[c][0].continuation, d, h)(t)) : h(t)
                    }

                    function d(e) {
                        return c++, p(e)
                    }

                    function h(r) {
                        return t && t.flowContinue ? m(r) : (l.interrupt = n && n.currentConstruct && n.currentConstruct.interruptible, l.containerState = {}, e.attempt(u, g, m)(r))
                    }

                    function g(e) {
                        return s.push([l.currentConstruct, l.containerState]), l.containerState = void 0, h(e)
                    }

                    function m(t) {
                        return null === t ? (k(0, !0), void e.consume(t)) : (n = n || l.parser.flow(l.now()), e.enter("chunkFlow", {
                            contentType: "flow",
                            previous: i,
                            _tokenizer: n
                        }), v(t))
                    }

                    function v(t) {
                        return null === t ? (x(e.exit("chunkFlow")), m(t)) : r(t) ? (e.consume(t), x(e.exit("chunkFlow")), e.check(f, y)) : (e.consume(t), v)
                    }

                    function y(e) {
                        return k(t.continued, t && t.flowEnd), c = 0, p(e)
                    }

                    function x(e) {
                        i && (i.next = e), i = e, n.lazy = t && t.lazy, n.defineSkip(e.start), n.write(l.sliceStream(e))
                    }

                    function k(t, r) {
                        var o = s.length;
                        for (n && r && (n.write([null]), i = n = void 0); o-- > t;) l.containerState = s[o][1], s[o][0].exit.call(l, e);
                        s.length = t
                    }
                },
                u = {
                    tokenize: function(e, t, n) {
                        return i(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                    }
                },
                a = {
                    tokenize: function(e, t, n) {
                        return i(e, e.lazy(this.parser.constructs.flow, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                    }
                };
            t.tokenize = l
        },
        49791: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(5391),
                i = n(23194),
                o = n(6319),
                l = function(e) {
                    var t = this,
                        n = e.attempt(o, (function(r) {
                            if (null === r) return void e.consume(r);
                            return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
                        }), e.attempt(this.parser.constructs.flowInitial, l, i(e, e.attempt(this.parser.constructs.flow, l, e.attempt(r, l)), "linePrefix")));
                    return n;

                    function l(r) {
                        if (null !== r) return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
                        e.consume(r)
                    }
                };
            t.tokenize = l
        },
        70993: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(90399),
                i = n(24578),
                o = a("text"),
                l = a("string"),
                u = {
                    resolveAll: s()
                };

            function a(e) {
                return {
                    tokenize: function(t) {
                        var n = this,
                            r = this.parser.constructs[e],
                            i = t.attempt(r, o, l);
                        return o;

                        function o(e) {
                            return a(e) ? i(e) : l(e)
                        }

                        function l(e) {
                            if (null !== e) return t.enter("data"), t.consume(e), u;
                            t.consume(e)
                        }

                        function u(e) {
                            return a(e) ? (t.exit("data"), i(e)) : (t.consume(e), u)
                        }

                        function a(e) {
                            var t = r[e],
                                i = -1;
                            if (null === e) return !0;
                            if (t)
                                for (; ++i < t.length;)
                                    if (!t[i].previous || t[i].previous.call(n, n.previous)) return !0
                        }
                    },
                    resolveAll: s("text" === e ? c : void 0)
                }
            }

            function s(e) {
                return function(t, n) {
                    var r, i = -1;
                    for (; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
                    return e ? e(t, n) : t
                }
            }

            function c(e, t) {
                for (var n, o, l, u, a, s, c, f, p = -1; ++p <= e.length;)
                    if ((p === e.length || "lineEnding" === e[p][1].type) && "data" === e[p - 1][1].type) {
                        for (o = e[p - 1][1], u = (n = t.sliceStream(o)).length, a = -1, s = 0, c = void 0; u--;)
                            if ("string" == typeof(l = n[u])) {
                                for (a = l.length; 32 === l.charCodeAt(a - 1);) s++, a--;
                                if (a) break;
                                a = -1
                            } else if (-2 === l) c = !0, s++;
                        else if (-1 !== l) {
                            u++;
                            break
                        }
                        s && (f = {
                            type: p === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
                            start: {
                                line: o.end.line,
                                column: o.end.column - s,
                                offset: o.end.offset - s,
                                _index: o.start._index + u,
                                _bufferIndex: u ? a : o.start._bufferIndex + a
                            },
                            end: i(o.end)
                        }, o.end = i(f.start), o.start.offset === o.end.offset ? r(o, f) : (e.splice(p, 0, ["enter", f, t], ["exit", f, t]), p += 2)), p++
                    }
                return e
            }
            t.resolver = u, t.string = l, t.text = o
        },
        41401: (e, t, n) => {
            "use strict";
            var r = n(53224),
                i = n(55405),
                o = n(49791),
                l = n(70993),
                u = n(17633),
                a = n(29525),
                s = n(28044),
                c = n(26558);
            e.exports = function(e) {
                var t = {
                    defined: [],
                    constructs: u([c].concat(s((e || {}).extensions))),
                    content: n(r),
                    document: n(i),
                    flow: n(o),
                    string: n(l.string),
                    text: n(l.text)
                };
                return t;

                function n(e) {
                    return function(n) {
                        return a(t, e, n)
                    }
                }
            }
        },
        70450: (e, t, n) => {
            "use strict";
            var r = n(45539);
            e.exports = function(e) {
                for (; !r(e););
                return e
            }
        },
        47435: e => {
            "use strict";
            var t = /[\0\t\n\r]/g;
            e.exports = function() {
                var e, n = !0,
                    r = 1,
                    i = "";
                return function(o, l, u) {
                    var a, s, c, f, p, d = [];
                    o = i + o.toString(l), c = 0, i = "", n && (65279 === o.charCodeAt(0) && c++, n = void 0);
                    for (; c < o.length;) {
                        if (t.lastIndex = c, a = t.exec(o), f = a ? a.index : o.length, p = o.charCodeAt(f), !a) {
                            i = o.slice(c);
                            break
                        }
                        if (10 === p && c === f && e) d.push(-3), e = void 0;
                        else if (e && (d.push(-5), e = void 0), c < f && (d.push(o.slice(c, f)), r += f - c), 0 === p) d.push(65533), r++;
                        else if (9 === p)
                            for (s = 4 * Math.ceil(r / 4), d.push(-2); r++ < s;) d.push(-1);
                        else 10 === p ? (d.push(-4), r = 1) : (e = !0, r = 1);
                        c = f + 1
                    }
                    u && (e && d.push(-5), i && d.push(i), d.push(null));
                    return d
                }
            }
        },
        36984: (e, t, n) => {
            "use strict";
            var r = n(7832),
                i = n(62773),
                o = n(80282),
                l = n(67249),
                u = n(95025),
                a = n(24578),
                s = {
                    name: "attention",
                    tokenize: function(e, t) {
                        var n, r = o(this.previous);
                        return function(t) {
                            return e.enter("attentionSequence"), n = t, i(t)
                        };

                        function i(l) {
                            var u, a, s, c;
                            return l === n ? (e.consume(l), i) : (u = e.exit("attentionSequence"), s = !(a = o(l)) || 2 === a && r, c = !r || 2 === r && a, u._open = 42 === n ? s : s && (r || !c), u._close = 42 === n ? c : c && (a || !s), t(l))
                        }
                    },
                    resolveAll: function(e, t) {
                        var n, o, s, c, f, p, d, h, g = -1;
                        for (; ++g < e.length;)
                            if ("enter" === e[g][0] && "attentionSequence" === e[g][1].type && e[g][1]._close)
                                for (n = g; n--;)
                                    if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[g][1]).charCodeAt(0)) {
                                        if ((e[n][1]._close || e[g][1]._open) && (e[g][1].end.offset - e[g][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[g][1].end.offset - e[g][1].start.offset) % 3)) continue;
                                        p = e[n][1].end.offset - e[n][1].start.offset > 1 && e[g][1].end.offset - e[g][1].start.offset > 1 ? 2 : 1, c = {
                                            type: p > 1 ? "strongSequence" : "emphasisSequence",
                                            start: l(a(e[n][1].end), -p),
                                            end: a(e[n][1].end)
                                        }, f = {
                                            type: p > 1 ? "strongSequence" : "emphasisSequence",
                                            start: a(e[g][1].start),
                                            end: l(a(e[g][1].start), p)
                                        }, s = {
                                            type: p > 1 ? "strongText" : "emphasisText",
                                            start: a(e[n][1].end),
                                            end: a(e[g][1].start)
                                        }, o = {
                                            type: p > 1 ? "strong" : "emphasis",
                                            start: a(c.start),
                                            end: a(f.end)
                                        }, e[n][1].end = a(c.start), e[g][1].start = a(f.end), d = [], e[n][1].end.offset - e[n][1].start.offset && (d = r(d, [
                                            ["enter", e[n][1], t],
                                            ["exit", e[n][1], t]
                                        ])), d = r(d, [
                                            ["enter", o, t],
                                            ["enter", c, t],
                                            ["exit", c, t],
                                            ["enter", s, t]
                                        ]), d = r(d, u(t.parser.constructs.insideSpan.null, e.slice(n + 1, g), t)), d = r(d, [
                                            ["exit", s, t],
                                            ["enter", f, t],
                                            ["exit", f, t],
                                            ["exit", o, t]
                                        ]), e[g][1].end.offset - e[g][1].start.offset ? (h = 2, d = r(d, [
                                            ["enter", e[g][1], t],
                                            ["exit", e[g][1], t]
                                        ])) : h = 0, i(e, n - 1, g - n + 3, d), g = n + d.length - h - 2;
                                        break
                                    }
                        g = -1;
                        for (; ++g < e.length;) "attentionSequence" === e[g][1].type && (e[g][1].type = "data");
                        return e
                    }
                };
            e.exports = s
        },
        3555: (e, t, n) => {
            "use strict";
            var r = n(45088),
                i = n(28182),
                o = n(90144),
                l = n(2878),
                u = {
                    name: "autolink",
                    tokenize: function(e, t, n) {
                        var u = 1;
                        return function(t) {
                            return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a
                        };

                        function a(t) {
                            return r(t) ? (e.consume(t), s) : o(t) ? p(t) : n(t)
                        }

                        function s(e) {
                            return 43 === e || 45 === e || 46 === e || i(e) ? c(e) : p(e)
                        }

                        function c(t) {
                            return 58 === t ? (e.consume(t), f) : (43 === t || 45 === t || 46 === t || i(t)) && u++ < 32 ? (e.consume(t), c) : p(t)
                        }

                        function f(t) {
                            return 62 === t ? (e.exit("autolinkProtocol"), m(t)) : 32 === t || 60 === t || l(t) ? n(t) : (e.consume(t), f)
                        }

                        function p(t) {
                            return 64 === t ? (e.consume(t), u = 0, d) : o(t) ? (e.consume(t), p) : n(t)
                        }

                        function d(e) {
                            return i(e) ? h(e) : n(e)
                        }

                        function h(t) {
                            return 46 === t ? (e.consume(t), u = 0, d) : 62 === t ? (e.exit("autolinkProtocol").type = "autolinkEmail", m(t)) : g(t)
                        }

                        function g(t) {
                            return (45 === t || i(t)) && u++ < 63 ? (e.consume(t), 45 === t ? g : h) : n(t)
                        }

                        function m(n) {
                            return e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t
                        }
                    }
                };
            e.exports = u
        },
        3786: (e, t, n) => {
            "use strict";
            var r = n(80394),
                i = n(23194),
                o = {
                    name: "blockQuote",
                    tokenize: function(e, t, n) {
                        var i = this;
                        return function(t) {
                            if (62 === t) return i.containerState.open || (e.enter("blockQuote", {
                                _container: !0
                            }), i.containerState.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), o;
                            return n(t)
                        };

                        function o(n) {
                            return r(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n))
                        }
                    },
                    continuation: {
                        tokenize: function(e, t, n) {
                            return i(e, e.attempt(o, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                        }
                    },
                    exit: function(e) {
                        e.exit("blockQuote")
                    }
                };
            e.exports = o
        },
        18137: (e, t, n) => {
            "use strict";
            var r = n(87978),
                i = {
                    name: "characterEscape",
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i
                        };

                        function i(i) {
                            return r(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i)
                        }
                    }
                };
            e.exports = i
        },
        95280: (e, t, n) => {
            "use strict";
            var r = n(18889),
                i = n(28182),
                o = n(30669),
                l = n(55282);

            function u(e) {
                return e && "object" == typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var a = u(r),
                s = {
                    name: "characterReference",
                    tokenize: function(e, t, n) {
                        var r, u, s = this,
                            c = 0;
                        return function(t) {
                            return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), f
                        };

                        function f(t) {
                            return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), p) : (e.enter("characterReferenceValue"), r = 31, u = i, d(t))
                        }

                        function p(t) {
                            return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, u = l, d) : (e.enter("characterReferenceValue"), r = 7, u = o, d(t))
                        }

                        function d(o) {
                            var l;
                            return 59 === o && c ? (l = e.exit("characterReferenceValue"), u !== i || a.default(s.sliceSerialize(l)) ? (e.enter("characterReferenceMarker"), e.consume(o), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(o)) : u(o) && c++ < r ? (e.consume(o), d) : n(o)
                        }
                    }
                };
            e.exports = s
        },
        41749: (e, t, n) => {
            "use strict";
            var r = n(86958),
                i = n(64164),
                o = n(24222),
                l = n(23194),
                u = {
                    name: "codeFenced",
                    tokenize: function(e, t, n) {
                        var u, a = this,
                            s = {
                                tokenize: function(e, t, n) {
                                    var i = 0;
                                    return l(e, o, "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);

                                    function o(t) {
                                        return e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), a(t)
                                    }

                                    function a(t) {
                                        return t === u ? (e.consume(t), i++, a) : i < f ? n(t) : (e.exit("codeFencedFenceSequence"), l(e, s, "whitespace")(t))
                                    }

                                    function s(i) {
                                        return null === i || r(i) ? (e.exit("codeFencedFence"), t(i)) : n(i)
                                    }
                                },
                                partial: !0
                            },
                            c = o(this.events, "linePrefix"),
                            f = 0;
                        return function(t) {
                            return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u = t, p(t)
                        };

                        function p(t) {
                            return t === u ? (e.consume(t), f++, p) : (e.exit("codeFencedFenceSequence"), f < 3 ? n(t) : l(e, d, "whitespace")(t))
                        }

                        function d(t) {
                            return null === t || r(t) ? v(t) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
                                contentType: "string"
                            }), h(t))
                        }

                        function h(t) {
                            return null === t || i(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), l(e, g, "whitespace")(t)) : 96 === t && t === u ? n(t) : (e.consume(t), h)
                        }

                        function g(t) {
                            return null === t || r(t) ? v(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
                                contentType: "string"
                            }), m(t))
                        }

                        function m(t) {
                            return null === t || r(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), v(t)) : 96 === t && t === u ? n(t) : (e.consume(t), m)
                        }

                        function v(n) {
                            return e.exit("codeFencedFence"), a.interrupt ? t(n) : y(n)
                        }

                        function y(t) {
                            return null === t ? k(t) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), e.attempt(s, k, c ? l(e, y, "linePrefix", c + 1) : y)) : (e.enter("codeFlowValue"), x(t))
                        }

                        function x(t) {
                            return null === t || r(t) ? (e.exit("codeFlowValue"), y(t)) : (e.consume(t), x)
                        }

                        function k(n) {
                            return e.exit("codeFenced"), t(n)
                        }
                    },
                    concrete: !0
                };
            e.exports = u
        },
        34768: (e, t, n) => {
            "use strict";
            var r = n(86958),
                i = n(62773),
                o = n(24222),
                l = n(23194),
                u = {
                    name: "codeIndented",
                    tokenize: function(e, t, n) {
                        return e.attempt(a, i, n);

                        function i(n) {
                            return null === n ? t(n) : r(n) ? e.attempt(a, i, t)(n) : (e.enter("codeFlowValue"), o(n))
                        }

                        function o(t) {
                            return null === t || r(t) ? (e.exit("codeFlowValue"), i(t)) : (e.consume(t), o)
                        }
                    },
                    resolve: function(e, t) {
                        var n = {
                            type: "codeIndented",
                            start: e[0][1].start,
                            end: e[e.length - 1][1].end
                        };
                        return i(e, 0, 0, [
                            ["enter", n, t]
                        ]), i(e, e.length, 0, [
                            ["exit", n, t]
                        ]), e
                    }
                },
                a = {
                    tokenize: function(e, t, n) {
                        var i = this;
                        return l(e, (function u(a) {
                            if (r(a)) return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), l(e, u, "linePrefix", 5);
                            return o(i.events, "linePrefix") < 4 ? n(a) : t(a)
                        }), "linePrefix", 5)
                    },
                    partial: !0
                };
            e.exports = u
        },
        98378: (e, t, n) => {
            "use strict";
            var r = n(86958),
                i = {
                    name: "codeText",
                    tokenize: function(e, t, n) {
                        var i, o, l = 0;
                        return function(t) {
                            return e.enter("codeText"), e.enter("codeTextSequence"), u(t)
                        };

                        function u(t) {
                            return 96 === t ? (e.consume(t), l++, u) : (e.exit("codeTextSequence"), a(t))
                        }

                        function a(t) {
                            return null === t ? n(t) : 96 === t ? (o = e.enter("codeTextSequence"), i = 0, c(t)) : 32 === t ? (e.enter("space"), e.consume(t), e.exit("space"), a) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : (e.enter("codeTextData"), s(t))
                        }

                        function s(t) {
                            return null === t || 32 === t || 96 === t || r(t) ? (e.exit("codeTextData"), a(t)) : (e.consume(t), s)
                        }

                        function c(n) {
                            return 96 === n ? (e.consume(n), i++, c) : i === l ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (o.type = "codeTextData", s(n))
                        }
                    },
                    resolve: function(e) {
                        var t, n, r = e.length - 4,
                            i = 3;
                        if (!("lineEnding" !== e[i][1].type && "space" !== e[i][1].type || "lineEnding" !== e[r][1].type && "space" !== e[r][1].type))
                            for (t = i; ++t < r;)
                                if ("codeTextData" === e[t][1].type) {
                                    e[r][1].type = e[i][1].type = "codeTextPadding", i += 2, r -= 2;
                                    break
                                }
                        t = i - 1, r++;
                        for (; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : t !== r && "lineEnding" !== e[t][1].type || (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
                        return e
                    },
                    previous: function(e) {
                        return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
                    }
                };
            e.exports = i
        },
        5391: (e, t, n) => {
            "use strict";
            var r = n(86958),
                i = n(24222),
                o = n(45539),
                l = n(23194),
                u = {
                    tokenize: function(e, t) {
                        var n;
                        return function(t) {
                            return e.enter("content"), n = e.enter("chunkContent", {
                                contentType: "content"
                            }), i(t)
                        };

                        function i(t) {
                            return null === t ? o(t) : r(t) ? e.check(a, l, o)(t) : (e.consume(t), i)
                        }

                        function o(n) {
                            return e.exit("chunkContent"), e.exit("content"), t(n)
                        }

                        function l(t) {
                            return e.consume(t), e.exit("chunkContent"), n = n.next = e.enter("chunkContent", {
                                contentType: "content",
                                previous: n
                            }), i
                        }
                    },
                    resolve: function(e) {
                        return o(e), e
                    },
                    interruptible: !0,
                    lazy: !0
                },
                a = {
                    tokenize: function(e, t, n) {
                        var o = this;
                        return function(t) {
                            return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), l(e, u, "linePrefix")
                        };

                        function u(l) {
                            return null === l || r(l) ? n(l) : o.parser.constructs.disable.null.indexOf("codeIndented") > -1 || i(o.events, "linePrefix") < 4 ? e.interrupt(o.parser.constructs.flow, n, t)(l) : t(l)
                        }
                    },
                    partial: !0
                };
            e.exports = u
        },
        11217: (e, t, n) => {
            "use strict";
            var r = n(86958),
                i = n(64164),
                o = n(77158),
                l = n(98540),
                u = n(43998),
                a = n(23194),
                s = n(86355),
                c = n(8671),
                f = {
                    name: "definition",
                    tokenize: function(e, t, n) {
                        var i, c = this;
                        return function(t) {
                            return e.enter("definition"), u.call(c, e, f, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t)
                        };

                        function f(t) {
                            return i = o(c.sliceSerialize(c.events[c.events.length - 1][1]).slice(1, -1)), 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), s(e, l(e, e.attempt(p, a(e, d, "whitespace"), a(e, d, "whitespace")), n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : n(t)
                        }

                        function d(o) {
                            return null === o || r(o) ? (e.exit("definition"), c.parser.defined.indexOf(i) < 0 && c.parser.defined.push(i), t(o)) : n(o)
                        }
                    }
                },
                p = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return i(t) ? s(e, o)(t) : n(t)
                        };

                        function o(t) {
                            return 34 === t || 39 === t || 40 === t ? c(e, a(e, l, "whitespace"), n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t) : n(t)
                        }

                        function l(e) {
                            return null === e || r(e) ? t(e) : n(e)
                        }
                    },
                    partial: !0
                };
            e.exports = f
        },
        98540: (e, t, n) => {
            "use strict";
            var r = n(2878),
                i = n(64164),
                o = n(86958);
            e.exports = function(e, t, n, l, u, a, s, c, f) {
                var p = f || 1 / 0,
                    d = 0;
                return function(t) {
                    if (60 === t) return e.enter(l), e.enter(u), e.enter(a), e.consume(t), e.exit(a), h;
                    if (r(t) || 41 === t) return n(t);
                    return e.enter(l), e.enter(s), e.enter(c), e.enter("chunkString", {
                        contentType: "string"
                    }), v(t)
                };

                function h(n) {
                    return 62 === n ? (e.enter(a), e.consume(n), e.exit(a), e.exit(u), e.exit(l), t) : (e.enter(c), e.enter("chunkString", {
                        contentType: "string"
                    }), g(n))
                }

                function g(t) {
                    return 62 === t ? (e.exit("chunkString"), e.exit(c), h(t)) : null === t || 60 === t || o(t) ? n(t) : (e.consume(t), 92 === t ? m : g)
                }

                function m(t) {
                    return 60 === t || 62 === t || 92 === t ? (e.consume(t), g) : g(t)
                }

                function v(o) {
                    return 40 === o ? ++d > p ? n(o) : (e.consume(o), v) : 41 === o ? d-- ? (e.consume(o), v) : (e.exit("chunkString"), e.exit(c), e.exit(s), e.exit(l), t(o)) : null === o || i(o) ? d ? n(o) : (e.exit("chunkString"), e.exit(c), e.exit(s), e.exit(l), t(o)) : r(o) ? n(o) : (e.consume(o), 92 === o ? y : v)
                }

                function y(t) {
                    return 40 === t || 41 === t || 92 === t ? (e.consume(t), v) : v(t)
                }
            }
        },
        43998: (e, t, n) => {
            "use strict";
            var r = n(86958),
                i = n(80394);
            e.exports = function(e, t, n, o, l, u) {
                var a, s = this,
                    c = 0;
                return function(t) {
                    return e.enter(o), e.enter(l), e.consume(t), e.exit(l), e.enter(u), f
                };

                function f(i) {
                    return null === i || 91 === i || 93 === i && !a || 94 === i && !c && "_hiddenFootnoteSupport" in s.parser.constructs || c > 999 ? n(i) : 93 === i ? (e.exit(u), e.enter(l), e.consume(i), e.exit(l), e.exit(o), t) : r(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), f) : (e.enter("chunkString", {
                        contentType: "string"
                    }), p(i))
                }

                function p(t) {
                    return null === t || 91 === t || 93 === t || r(t) || c++ > 999 ? (e.exit("chunkString"), f(t)) : (e.consume(t), a = a || !i(t), 92 === t ? d : p)
                }

                function d(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), c++, p) : p(t)
                }
            }
        },
        23194: (e, t, n) => {
            "use strict";
            var r = n(80394);
            e.exports = function(e, t, n, i) {
                var o = i ? i - 1 : 1 / 0,
                    l = 0;
                return function(i) {
                    if (r(i)) return e.enter(n), u(i);
                    return t(i)
                };

                function u(i) {
                    return r(i) && l++ < o ? (e.consume(i), u) : (e.exit(n), t(i))
                }
            }
        },
        8671: (e, t, n) => {
            "use strict";
            var r = n(86958),
                i = n(23194);
            e.exports = function(e, t, n, o, l, u) {
                var a;
                return function(t) {
                    return e.enter(o), e.enter(l), e.consume(t), e.exit(l), a = 40 === t ? 41 : t, s
                };

                function s(n) {
                    return n === a ? (e.enter(l), e.consume(n), e.exit(l), e.exit(o), t) : (e.enter(u), c(n))
                }

                function c(t) {
                    return t === a ? (e.exit(u), s(a)) : null === t ? n(t) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i(e, c, "linePrefix")) : (e.enter("chunkString", {
                        contentType: "string"
                    }), f(t))
                }

                function f(t) {
                    return t === a || null === t || r(t) ? (e.exit("chunkString"), c(t)) : (e.consume(t), 92 === t ? p : f)
                }

                function p(t) {
                    return t === a || 92 === t ? (e.consume(t), f) : f(t)
                }
            }
        },
        86355: (e, t, n) => {
            "use strict";
            var r = n(86958),
                i = n(80394),
                o = n(23194);
            e.exports = function(e, t) {
                var n;
                return function l(u) {
                    if (r(u)) return e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), n = !0, l;
                    if (i(u)) return o(e, l, n ? "linePrefix" : "lineSuffix")(u);
                    return t(u)
                }
            }
        },
        80425: (e, t, n) => {
            "use strict";
            var r = n(86958),
                i = {
                    name: "hardBreakEscape",
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(t), i
                        };

                        function i(i) {
                            return r(i) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(i)) : n(i)
                        }
                    }
                };
            e.exports = i
        },
        15639: (e, t, n) => {
            "use strict";
            var r = n(86958),
                i = n(64164),
                o = n(80394),
                l = n(62773),
                u = n(23194),
                a = {
                    name: "headingAtx",
                    tokenize: function(e, t, n) {
                        var l = this,
                            a = 0;
                        return function(t) {
                            return e.enter("atxHeading"), e.enter("atxHeadingSequence"), s(t)
                        };

                        function s(r) {
                            return 35 === r && a++ < 6 ? (e.consume(r), s) : null === r || i(r) ? (e.exit("atxHeadingSequence"), l.interrupt ? t(r) : c(r)) : n(r)
                        }

                        function c(n) {
                            return 35 === n ? (e.enter("atxHeadingSequence"), f(n)) : null === n || r(n) ? (e.exit("atxHeading"), t(n)) : o(n) ? u(e, c, "whitespace")(n) : (e.enter("atxHeadingText"), p(n))
                        }

                        function f(t) {
                            return 35 === t ? (e.consume(t), f) : (e.exit("atxHeadingSequence"), c(t))
                        }

                        function p(t) {
                            return null === t || 35 === t || i(t) ? (e.exit("atxHeadingText"), c(t)) : (e.consume(t), p)
                        }
                    },
                    resolve: function(e, t) {
                        var n, r, i = e.length - 2,
                            o = 3;
                        "whitespace" === e[o][1].type && (o += 2);
                        i - 2 > o && "whitespace" === e[i][1].type && (i -= 2);
                        "atxHeadingSequence" === e[i][1].type && (o === i - 1 || i - 4 > o && "whitespace" === e[i - 2][1].type) && (i -= o + 1 === i ? 2 : 4);
                        i > o && (n = {
                            type: "atxHeadingText",
                            start: e[o][1].start,
                            end: e[i][1].end
                        }, r = {
                            type: "chunkText",
                            start: e[o][1].start,
                            end: e[i][1].end,
                            contentType: "text"
                        }, l(e, o, i - o + 1, [
                            ["enter", n, t],
                            ["enter", r, t],
                            ["exit", r, t],
                            ["exit", n, t]
                        ]));
                        return e
                    }
                };
            e.exports = a
        },
        74350: (e, t, n) => {
            "use strict";
            var r = n(45088),
                i = n(28182),
                o = n(86958),
                l = n(64164),
                u = n(80394),
                a = n(51854),
                s = n(93804),
                c = n(42928),
                f = n(6319),
                p = {
                    name: "htmlFlow",
                    tokenize: function(e, t, n) {
                        var f, p, h, g, m, v = this;
                        return function(t) {
                            return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), y
                        };

                        function y(i) {
                            return 33 === i ? (e.consume(i), x) : 47 === i ? (e.consume(i), w) : 63 === i ? (e.consume(i), f = 3, v.interrupt ? t : V) : r(i) ? (e.consume(i), h = a(i), p = !0, S) : n(i)
                        }

                        function x(i) {
                            return 45 === i ? (e.consume(i), f = 2, k) : 91 === i ? (e.consume(i), f = 5, h = "CDATA[", g = 0, b) : r(i) ? (e.consume(i), f = 4, v.interrupt ? t : V) : n(i)
                        }

                        function k(r) {
                            return 45 === r ? (e.consume(r), v.interrupt ? t : V) : n(r)
                        }

                        function b(r) {
                            return r === h.charCodeAt(g++) ? (e.consume(r), g === h.length ? v.interrupt ? t : M : b) : n(r)
                        }

                        function w(t) {
                            return r(t) ? (e.consume(t), h = a(t), S) : n(t)
                        }

                        function S(r) {
                            return null === r || 47 === r || 62 === r || l(r) ? 47 !== r && p && c.indexOf(h.toLowerCase()) > -1 ? (f = 1, v.interrupt ? t(r) : M(r)) : s.indexOf(h.toLowerCase()) > -1 ? (f = 6, 47 === r ? (e.consume(r), C) : v.interrupt ? t(r) : M(r)) : (f = 7, v.interrupt ? n(r) : p ? F(r) : E(r)) : 45 === r || i(r) ? (e.consume(r), h += a(r), S) : n(r)
                        }

                        function C(r) {
                            return 62 === r ? (e.consume(r), v.interrupt ? t : M) : n(r)
                        }

                        function E(t) {
                            return u(t) ? (e.consume(t), E) : _(t)
                        }

                        function F(t) {
                            return 47 === t ? (e.consume(t), _) : 58 === t || 95 === t || r(t) ? (e.consume(t), A) : u(t) ? (e.consume(t), F) : _(t)
                        }

                        function A(t) {
                            return 45 === t || 46 === t || 58 === t || 95 === t || i(t) ? (e.consume(t), A) : O(t)
                        }

                        function O(t) {
                            return 61 === t ? (e.consume(t), P) : u(t) ? (e.consume(t), O) : F(t)
                        }

                        function P(t) {
                            return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), m = t, I) : u(t) ? (e.consume(t), P) : (m = void 0, D(t))
                        }

                        function I(t) {
                            return t === m ? (e.consume(t), T) : null === t || o(t) ? n(t) : (e.consume(t), I)
                        }

                        function D(t) {
                            return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t || l(t) ? O(t) : (e.consume(t), D)
                        }

                        function T(e) {
                            return 47 === e || 62 === e || u(e) ? F(e) : n(e)
                        }

                        function _(t) {
                            return 62 === t ? (e.consume(t), L) : n(t)
                        }

                        function L(t) {
                            return u(t) ? (e.consume(t), L) : null === t || o(t) ? M(t) : n(t)
                        }

                        function M(t) {
                            return 45 === t && 2 === f ? (e.consume(t), R) : 60 === t && 1 === f ? (e.consume(t), N) : 62 === t && 4 === f ? (e.consume(t), U) : 63 === t && 3 === f ? (e.consume(t), V) : 93 === t && 5 === f ? (e.consume(t), H) : !o(t) || 6 !== f && 7 !== f ? null === t || o(t) ? z(t) : (e.consume(t), M) : e.check(d, U, z)(t)
                        }

                        function z(t) {
                            return e.exit("htmlFlowData"), B(t)
                        }

                        function B(t) {
                            return null === t ? q(t) : o(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), B) : (e.enter("htmlFlowData"), M(t))
                        }

                        function R(t) {
                            return 45 === t ? (e.consume(t), V) : M(t)
                        }

                        function N(t) {
                            return 47 === t ? (e.consume(t), h = "", j) : M(t)
                        }

                        function j(t) {
                            return 62 === t && c.indexOf(h.toLowerCase()) > -1 ? (e.consume(t), U) : r(t) && h.length < 8 ? (e.consume(t), h += a(t), j) : M(t)
                        }

                        function H(t) {
                            return 93 === t ? (e.consume(t), V) : M(t)
                        }

                        function V(t) {
                            return 62 === t ? (e.consume(t), U) : M(t)
                        }

                        function U(t) {
                            return null === t || o(t) ? (e.exit("htmlFlowData"), q(t)) : (e.consume(t), U)
                        }

                        function q(n) {
                            return e.exit("htmlFlow"), t(n)
                        }
                    },
                    resolveTo: function(e) {
                        var t = e.length;
                        for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
                        t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2));
                        return e
                    },
                    concrete: !0
                },
                d = {
                    tokenize: function(e, t, n) {
                        return function(r) {
                            return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), e.attempt(f, t, n)
                        }
                    },
                    partial: !0
                };
            e.exports = p
        },
        48551: (e, t, n) => {
            "use strict";
            var r = n(45088),
                i = n(28182),
                o = n(86958),
                l = n(64164),
                u = n(80394),
                a = n(23194),
                s = {
                    name: "htmlText",
                    tokenize: function(e, t, n) {
                        var s, c, f, p, d = this;
                        return function(t) {
                            return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), h
                        };

                        function h(t) {
                            return 33 === t ? (e.consume(t), g) : 47 === t ? (e.consume(t), O) : 63 === t ? (e.consume(t), F) : r(t) ? (e.consume(t), D) : n(t)
                        }

                        function g(t) {
                            return 45 === t ? (e.consume(t), m) : 91 === t ? (e.consume(t), c = "CDATA[", f = 0, b) : r(t) ? (e.consume(t), E) : n(t)
                        }

                        function m(t) {
                            return 45 === t ? (e.consume(t), v) : n(t)
                        }

                        function v(t) {
                            return null === t || 62 === t ? n(t) : 45 === t ? (e.consume(t), y) : x(t)
                        }

                        function y(e) {
                            return null === e || 62 === e ? n(e) : x(e)
                        }

                        function x(t) {
                            return null === t ? n(t) : 45 === t ? (e.consume(t), k) : o(t) ? (p = x, N(t)) : (e.consume(t), x)
                        }

                        function k(t) {
                            return 45 === t ? (e.consume(t), H) : x(t)
                        }

                        function b(t) {
                            return t === c.charCodeAt(f++) ? (e.consume(t), f === c.length ? w : b) : n(t)
                        }

                        function w(t) {
                            return null === t ? n(t) : 93 === t ? (e.consume(t), S) : o(t) ? (p = w, N(t)) : (e.consume(t), w)
                        }

                        function S(t) {
                            return 93 === t ? (e.consume(t), C) : w(t)
                        }

                        function C(t) {
                            return 62 === t ? H(t) : 93 === t ? (e.consume(t), C) : w(t)
                        }

                        function E(t) {
                            return null === t || 62 === t ? H(t) : o(t) ? (p = E, N(t)) : (e.consume(t), E)
                        }

                        function F(t) {
                            return null === t ? n(t) : 63 === t ? (e.consume(t), A) : o(t) ? (p = F, N(t)) : (e.consume(t), F)
                        }

                        function A(e) {
                            return 62 === e ? H(e) : F(e)
                        }

                        function O(t) {
                            return r(t) ? (e.consume(t), P) : n(t)
                        }

                        function P(t) {
                            return 45 === t || i(t) ? (e.consume(t), P) : I(t)
                        }

                        function I(t) {
                            return o(t) ? (p = I, N(t)) : u(t) ? (e.consume(t), I) : H(t)
                        }

                        function D(t) {
                            return 45 === t || i(t) ? (e.consume(t), D) : 47 === t || 62 === t || l(t) ? T(t) : n(t)
                        }

                        function T(t) {
                            return 47 === t ? (e.consume(t), H) : 58 === t || 95 === t || r(t) ? (e.consume(t), _) : o(t) ? (p = T, N(t)) : u(t) ? (e.consume(t), T) : H(t)
                        }

                        function _(t) {
                            return 45 === t || 46 === t || 58 === t || 95 === t || i(t) ? (e.consume(t), _) : L(t)
                        }

                        function L(t) {
                            return 61 === t ? (e.consume(t), M) : o(t) ? (p = L, N(t)) : u(t) ? (e.consume(t), L) : T(t)
                        }

                        function M(t) {
                            return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), s = t, z) : o(t) ? (p = M, N(t)) : u(t) ? (e.consume(t), M) : (e.consume(t), s = void 0, R)
                        }

                        function z(t) {
                            return t === s ? (e.consume(t), B) : null === t ? n(t) : o(t) ? (p = z, N(t)) : (e.consume(t), z)
                        }

                        function B(e) {
                            return 62 === e || 47 === e || l(e) ? T(e) : n(e)
                        }

                        function R(t) {
                            return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 62 === t || l(t) ? T(t) : (e.consume(t), R)
                        }

                        function N(t) {
                            return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a(e, j, "linePrefix", d.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                        }

                        function j(t) {
                            return e.enter("htmlTextData"), p(t)
                        }

                        function H(r) {
                            return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r)
                        }
                    }
                };
            e.exports = s
        },
        80741: (e, t, n) => {
            "use strict";
            var r = n(64164),
                i = n(7832),
                o = n(62773),
                l = n(77158),
                u = n(95025),
                a = n(24578),
                s = n(98540),
                c = n(43998),
                f = n(8671),
                p = n(86355),
                d = {
                    name: "labelEnd",
                    tokenize: function(e, t, n) {
                        var r, i, o = this,
                            u = o.events.length;
                        for (; u--;)
                            if (("labelImage" === o.events[u][1].type || "labelLink" === o.events[u][1].type) && !o.events[u][1]._balanced) {
                                r = o.events[u][1];
                                break
                            }
                        return function(t) {
                            if (!r) return n(t);
                            return r._inactive ? s(t) : (i = o.parser.defined.indexOf(l(o.sliceSerialize({
                                start: r.end,
                                end: o.now()
                            }))) > -1, e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), a)
                        };

                        function a(n) {
                            return 40 === n ? e.attempt(h, t, i ? t : s)(n) : 91 === n ? e.attempt(g, t, i ? e.attempt(m, t, s) : s)(n) : i ? t(n) : s(n)
                        }

                        function s(e) {
                            return r._balanced = !0, n(e)
                        }
                    },
                    resolveTo: function(e, t) {
                        var n, r, l, s, c, f, p, d = e.length,
                            h = 0;
                        for (; d--;)
                            if (s = e[d][1], c) {
                                if ("link" === s.type || "labelLink" === s.type && s._inactive) break;
                                "enter" === e[d][0] && "labelLink" === s.type && (s._inactive = !0)
                            } else if (f) {
                            if ("enter" === e[d][0] && ("labelImage" === s.type || "labelLink" === s.type) && !s._balanced && (c = d, "labelLink" !== s.type)) {
                                h = 2;
                                break
                            }
                        } else "labelEnd" === s.type && (f = d);
                        return n = {
                            type: "labelLink" === e[c][1].type ? "link" : "image",
                            start: a(e[c][1].start),
                            end: a(e[e.length - 1][1].end)
                        }, r = {
                            type: "label",
                            start: a(e[c][1].start),
                            end: a(e[f][1].end)
                        }, l = {
                            type: "labelText",
                            start: a(e[c + h + 2][1].end),
                            end: a(e[f - 2][1].start)
                        }, p = i(p = [
                            ["enter", n, t],
                            ["enter", r, t]
                        ], e.slice(c + 1, c + h + 3)), p = i(p, [
                            ["enter", l, t]
                        ]), p = i(p, u(t.parser.constructs.insideSpan.null, e.slice(c + h + 4, f - 3), t)), p = i(p, [
                            ["exit", l, t], e[f - 2], e[f - 1],
                            ["exit", r, t]
                        ]), p = i(p, e.slice(f + 1)), p = i(p, [
                            ["exit", n, t]
                        ]), o(e, c, e.length, p), e
                    },
                    resolveAll: function(e) {
                        var t, n = -1;
                        for (; ++n < e.length;)(t = e[n][1])._used || "labelImage" !== t.type && "labelLink" !== t.type && "labelEnd" !== t.type || (e.splice(n + 1, "labelImage" === t.type ? 4 : 2), t.type = "data", n++);
                        return e
                    }
                },
                h = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), p(e, i)
                        };

                        function i(t) {
                            return 41 === t ? u(t) : s(e, o, n, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 3)(t)
                        }

                        function o(t) {
                            return r(t) ? p(e, l)(t) : u(t)
                        }

                        function l(t) {
                            return 34 === t || 39 === t || 40 === t ? f(e, p(e, u), n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t)
                        }

                        function u(r) {
                            return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r)
                        }
                    }
                },
                g = {
                    tokenize: function(e, t, n) {
                        var r = this;
                        return function(t) {
                            return c.call(r, e, i, n, "reference", "referenceMarker", "referenceString")(t)
                        };

                        function i(e) {
                            return r.parser.defined.indexOf(l(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) < 0 ? n(e) : t(e)
                        }
                    }
                },
                m = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r
                        };

                        function r(r) {
                            return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r)
                        }
                    }
                };
            e.exports = d
        },
        86991: (e, t, n) => {
            "use strict";
            var r = {
                name: "labelStartImage",
                tokenize: function(e, t, n) {
                    var r = this;
                    return function(t) {
                        return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), i
                    };

                    function i(t) {
                        return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t)
                    }

                    function o(e) {
                        return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                    }
                },
                resolveAll: n(80741).resolveAll
            };
            e.exports = r
        },
        19260: (e, t, n) => {
            "use strict";
            var r = {
                name: "labelStartLink",
                tokenize: function(e, t, n) {
                    var r = this;
                    return function(t) {
                        return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i
                    };

                    function i(e) {
                        return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                    }
                },
                resolveAll: n(80741).resolveAll
            };
            e.exports = r
        },
        68999: (e, t, n) => {
            "use strict";
            var r = n(23194),
                i = {
                    name: "lineEnding",
                    tokenize: function(e, t) {
                        return function(n) {
                            return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), r(e, t, "linePrefix")
                        }
                    }
                };
            e.exports = i
        },
        86074: (e, t, n) => {
            "use strict";
            var r = n(30669),
                i = n(80394),
                o = n(24222),
                l = n(22527),
                u = n(23194),
                a = n(6319),
                s = n(83605),
                c = {
                    name: "list",
                    tokenize: function(e, t, n) {
                        var u = this,
                            c = o(u.events, "linePrefix"),
                            p = 0;
                        return function(t) {
                            var i = u.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
                            if ("listUnordered" === i ? !u.containerState.marker || t === u.containerState.marker : r(t)) {
                                if (u.containerState.type || (u.containerState.type = i, e.enter(i, {
                                        _container: !0
                                    })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(s, n, h)(t) : h(t);
                                if (!u.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"), d(t)
                            }
                            return n(t)
                        };

                        function d(t) {
                            return r(t) && ++p < 10 ? (e.consume(t), d) : (!u.interrupt || p < 2) && (u.containerState.marker ? t === u.containerState.marker : 41 === t || 46 === t) ? (e.exit("listItemValue"), h(t)) : n(t)
                        }

                        function h(t) {
                            return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), u.containerState.marker = u.containerState.marker || t, e.check(a, u.interrupt ? n : g, e.attempt(f, v, m))
                        }

                        function g(e) {
                            return u.containerState.initialBlankLine = !0, c++, v(e)
                        }

                        function m(t) {
                            return i(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), v) : n(t)
                        }

                        function v(n) {
                            return u.containerState.size = c + l(u.sliceStream(e.exit("listItemPrefix"))), t(n)
                        }
                    },
                    continuation: {
                        tokenize: function(e, t, n) {
                            var r = this;
                            return r.containerState._closeFlow = void 0, e.check(a, (function(n) {
                                return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, u(e, t, "listItemIndent", r.containerState.size + 1)(n)
                            }), (function(n) {
                                if (r.containerState.furtherBlankLines || !i(n)) return r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0, o(n);
                                return r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0, e.attempt(p, t, o)(n)
                            }));

                            function o(i) {
                                return r.containerState._closeFlow = !0, r.interrupt = void 0, u(e, e.attempt(c, t, n), "linePrefix", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)(i)
                            }
                        }
                    },
                    exit: function(e) {
                        e.exit(this.containerState.type)
                    }
                },
                f = {
                    tokenize: function(e, t, n) {
                        var r = this;
                        return u(e, (function(e) {
                            return i(e) || !o(r.events, "listItemPrefixWhitespace") ? n(e) : t(e)
                        }), "listItemPrefixWhitespace", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 5)
                    },
                    partial: !0
                },
                p = {
                    tokenize: function(e, t, n) {
                        var r = this;
                        return u(e, (function(e) {
                            return o(r.events, "listItemIndent") === r.containerState.size ? t(e) : n(e)
                        }), "listItemIndent", r.containerState.size + 1)
                    },
                    partial: !0
                };
            e.exports = c
        },
        6319: (e, t, n) => {
            "use strict";
            var r = n(86958),
                i = n(23194),
                o = {
                    tokenize: function(e, t, n) {
                        return i(e, (function(e) {
                            return null === e || r(e) ? t(e) : n(e)
                        }), "linePrefix")
                    },
                    partial: !0
                };
            e.exports = o
        },
        56726: (e, t, n) => {
            "use strict";
            var r = n(86958),
                i = n(24578),
                o = n(23194),
                l = {
                    name: "setextUnderline",
                    tokenize: function(e, t, n) {
                        var i, l, u = this,
                            a = u.events.length;
                        for (; a--;)
                            if ("lineEnding" !== u.events[a][1].type && "linePrefix" !== u.events[a][1].type && "content" !== u.events[a][1].type) {
                                l = "paragraph" === u.events[a][1].type;
                                break
                            }
                        return function(t) {
                            if (!u.lazy && (u.interrupt || l)) return e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), i = t, s(t);
                            return n(t)
                        };

                        function s(t) {
                            return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), o(e, c, "lineSuffix")(t))
                        }

                        function c(i) {
                            return null === i || r(i) ? (e.exit("setextHeadingLine"), t(i)) : n(i)
                        }
                    },
                    resolveTo: function(e, t) {
                        var n, r, o, l, u = e.length;
                        for (; u--;)
                            if ("enter" === e[u][0]) {
                                if ("content" === e[u][1].type) {
                                    n = u;
                                    break
                                }
                                "paragraph" === e[u][1].type && (r = u)
                            } else "content" === e[u][1].type && e.splice(u, 1), o || "definition" !== e[u][1].type || (o = u);
                        l = {
                            type: "setextHeading",
                            start: i(e[r][1].start),
                            end: i(e[e.length - 1][1].end)
                        }, e[r][1].type = "setextHeadingText", o ? (e.splice(r, 0, ["enter", l, t]), e.splice(o + 1, 0, ["exit", e[n][1], t]), e[n][1].end = i(e[o][1].end)) : e[n][1] = l;
                        return e.push(["exit", l, t]), e
                    }
                };
            e.exports = l
        },
        83605: (e, t, n) => {
            "use strict";
            var r = n(86958),
                i = n(80394),
                o = n(23194),
                l = {
                    name: "thematicBreak",
                    tokenize: function(e, t, n) {
                        var l, u = 0;
                        return function(t) {
                            return e.enter("thematicBreak"), l = t, a(t)
                        };

                        function a(c) {
                            return c === l ? (e.enter("thematicBreakSequence"), s(c)) : i(c) ? o(e, a, "whitespace")(c) : u < 3 || null !== c && !r(c) ? n(c) : (e.exit("thematicBreak"), t(c))
                        }

                        function s(t) {
                            return t === l ? (e.consume(t), u++, s) : (e.exit("thematicBreakSequence"), a(t))
                        }
                    }
                };
            e.exports = l
        },
        7832: (e, t, n) => {
            "use strict";
            var r = n(62773);
            e.exports = function(e, t) {
                return e.length ? (r(e, e.length, 0, t), e) : t
            }
        },
        62773: (e, t, n) => {
            "use strict";
            var r = n(49233);
            e.exports = function(e, t, n, i) {
                var o, l = e.length,
                    u = 0;
                if (t = t < 0 ? -t > l ? 0 : l + t : t > l ? l : t, n = n > 0 ? n : 0, i.length < 1e4)(o = Array.from(i)).unshift(t, n), r.apply(e, o);
                else
                    for (n && r.apply(e, [t, n]); u < i.length;)(o = i.slice(u, u + 1e4)).unshift(t, 0), r.apply(e, o), u += 1e4, t += 1e4
            }
        },
        80282: (e, t, n) => {
            "use strict";
            var r = n(64164),
                i = n(62743),
                o = n(77749);
            e.exports = function(e) {
                return null === e || r(e) || o(e) ? 1 : i(e) ? 2 : void 0
            }
        },
        17633: (e, t, n) => {
            "use strict";
            var r = n(96200),
                i = n(62773),
                o = n(28044);

            function l(e, t) {
                var n, i, l, a;
                for (n in t)
                    for (a in i = r.call(e, n) ? e[n] : e[n] = {}, l = t[n]) i[a] = u(o(l[a]), r.call(i, a) ? i[a] : [])
            }

            function u(e, t) {
                for (var n = -1, r = []; ++n < e.length;)("after" === e[n].add ? t : r).push(e[n]);
                return i(t, 0, 0, r), t
            }
            e.exports = function(e) {
                for (var t = {}, n = -1; ++n < e.length;) l(t, e[n]);
                return t
            }
        },
        29525: (e, t, n) => {
            "use strict";
            var r = n(90399),
                i = n(86958),
                o = n(7832),
                l = n(62773),
                u = n(28044),
                a = n(95025),
                s = n(84758),
                c = n(24578),
                f = n(66833);
            e.exports = function(e, t, n) {
                var p = n ? c(n) : {
                        line: 1,
                        column: 1,
                        offset: 0
                    },
                    d = {},
                    h = [],
                    g = [],
                    m = [],
                    v = {
                        consume: function(e) {
                            i(e) ? (p.line++, p.column = 1, p.offset += -3 === e ? 2 : 1, A()) : -1 !== e && (p.column++, p.offset++);
                            p._bufferIndex < 0 ? p._index++ : (p._bufferIndex++, p._bufferIndex === g[p._index].length && (p._bufferIndex = -1, p._index++));
                            y.previous = e
                        },
                        enter: function(e, t) {
                            var n = t || {};
                            return n.type = e, n.start = b(), y.events.push(["enter", n, y]), m.push(n), n
                        },
                        exit: function(e) {
                            var t = m.pop();
                            return t.end = b(), y.events.push(["exit", t, y]), t
                        },
                        attempt: E((function(e, t) {
                            F(e, t.from)
                        })),
                        check: E(C),
                        interrupt: E(C, {
                            interrupt: !0
                        }),
                        lazy: E(C, {
                            lazy: !0
                        })
                    },
                    y = {
                        previous: null,
                        events: [],
                        parser: e,
                        sliceStream: k,
                        sliceSerialize: function(e) {
                            return s(k(e))
                        },
                        now: b,
                        defineSkip: function(e) {
                            d[e.line] = e.column, A()
                        },
                        write: function(e) {
                            if (g = o(g, e), w(), null !== g[g.length - 1]) return [];
                            return F(t, 0), y.events = a(h, y.events, y), y.events
                        }
                    },
                    x = t.tokenize.call(y, v);
                return t.resolveAll && h.push(t), p._index = 0, p._bufferIndex = -1, y;

                function k(e) {
                    return f(g, e)
                }

                function b() {
                    return c(p)
                }

                function w() {
                    for (var e, t; p._index < g.length;)
                        if ("string" == typeof(t = g[p._index]))
                            for (e = p._index, p._bufferIndex < 0 && (p._bufferIndex = 0); p._index === e && p._bufferIndex < t.length;) S(t.charCodeAt(p._bufferIndex));
                        else S(t)
                }

                function S(e) {
                    x = x(e)
                }

                function C(e, t) {
                    t.restore()
                }

                function E(e, t) {
                    return function(n, i, o) {
                        var l, a, s, c;
                        return n.tokenize || "length" in n ? f(u(n)) : function(e) {
                            if (e in n || null in n) return f(n.null ? u(n[e]).concat(u(n.null)) : n[e])(e);
                            return o(e)
                        };

                        function f(e) {
                            return l = e, d(e[a = 0])
                        }

                        function d(e) {
                            return function(n) {
                                c = function() {
                                    var e = b(),
                                        t = y.previous,
                                        n = y.currentConstruct,
                                        r = y.events.length,
                                        i = Array.from(m);
                                    return {
                                        restore: o,
                                        from: r
                                    };

                                    function o() {
                                        p = e, y.previous = t, y.currentConstruct = n, y.events.length = r, m = i, A()
                                    }
                                }(), s = e, e.partial || (y.currentConstruct = e);
                                if (e.name && y.parser.constructs.disable.null.indexOf(e.name) > -1) return g();
                                return e.tokenize.call(t ? r({}, y, t) : y, v, h, g)(n)
                            }
                        }

                        function h(t) {
                            return e(s, c), i
                        }

                        function g(e) {
                            return c.restore(), ++a < l.length ? d(l[a]) : o
                        }
                    }
                }

                function F(e, t) {
                    e.resolveAll && h.indexOf(e) < 0 && h.push(e), e.resolve && l(y.events, t, y.events.length - t, e.resolve(y.events.slice(t), y)), e.resolveTo && (y.events = e.resolveTo(y.events, y))
                }

                function A() {
                    p.line in d && p.column < 2 && (p.column = d[p.line], p.offset += d[p.line] - 1)
                }
            }
        },
        28044: e => {
            "use strict";
            e.exports = function(e) {
                return null == e ? [] : "length" in e ? e : [e]
            }
        },
        67249: e => {
            "use strict";
            e.exports = function(e, t) {
                return e.column += t, e.offset += t, e._bufferIndex += t, e
            }
        },
        77158: e => {
            "use strict";
            e.exports = function(e) {
                return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
            }
        },
        24222: (e, t, n) => {
            "use strict";
            var r = n(22527);
            e.exports = function(e, t) {
                var n = e[e.length - 1];
                return n && n[1].type === t ? r(n[2].sliceStream(n[1])) : 0
            }
        },
        64986: (e, t, n) => {
            "use strict";
            var r = n(51854);
            e.exports = function(e) {
                return function(t) {
                    return e.test(r(t))
                }
            }
        },
        95025: e => {
            "use strict";
            e.exports = function(e, t, n) {
                for (var r, i = [], o = -1; ++o < e.length;)(r = e[o].resolveAll) && i.indexOf(r) < 0 && (t = r(t, n), i.push(r));
                return t
            }
        },
        25256: (e, t, n) => {
            "use strict";
            var r = n(51854);
            e.exports = function(e, t) {
                var n = parseInt(e, t);
                return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || 65535 == (65535 & n) || 65534 == (65535 & n) || n > 1114111 ? "\ufffd" : r(n)
            }
        },
        84758: (e, t, n) => {
            "use strict";
            var r = n(51854);
            e.exports = function(e) {
                for (var t, n, i, o = -1, l = []; ++o < e.length;) {
                    if ("string" == typeof(t = e[o])) n = t;
                    else if (-5 === t) n = "\r";
                    else if (-4 === t) n = "\n";
                    else if (-3 === t) n = "\r\n";
                    else if (-2 === t) n = "\t";
                    else if (-1 === t) {
                        if (i) continue;
                        n = " "
                    } else n = r(t);
                    i = -2 === t, l.push(n)
                }
                return l.join("")
            }
        },
        24578: (e, t, n) => {
            "use strict";
            var r = n(90399);
            e.exports = function(e) {
                return r({}, e)
            }
        },
        22527: e => {
            "use strict";
            e.exports = function(e) {
                for (var t = -1, n = 0; ++t < e.length;) n += "string" == typeof e[t] ? e[t].length : 1;
                return n
            }
        },
        66833: e => {
            "use strict";
            e.exports = function(e, t) {
                var n, r = t.start._index,
                    i = t.start._bufferIndex,
                    o = t.end._index,
                    l = t.end._bufferIndex;
                return r === o ? n = [e[r].slice(i, l)] : (n = e.slice(r, o), i > -1 && (n[0] = n[0].slice(i)), l > 0 && n.push(e[o].slice(0, l))), n
            }
        },
        45539: (e, t, n) => {
            "use strict";
            var r = n(90399),
                i = n(62773),
                o = n(24578);

            function l(e, t) {
                for (var n, r, o, l, u, a, s = e[t][1], c = e[t][2], f = t - 1, p = [], d = s._tokenizer || c.parser[s.contentType](s.start), h = d.events, g = [], m = {}; s;) {
                    for (; e[++f][1] !== s;);
                    p.push(f), s._tokenizer || (n = c.sliceStream(s), s.next || n.push(null), r && d.defineSkip(s.start), s.isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = !0), d.write(n), s.isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)), r = s, s = s.next
                }
                for (s = r, o = h.length; o--;) "enter" === h[o][0] ? l = !0 : l && h[o][1].type === h[o - 1][1].type && h[o][1].start.line !== h[o][1].end.line && (v(h.slice(o + 1, u)), s._tokenizer = s.next = void 0, s = s.previous, u = o + 1);
                for (d.events = s._tokenizer = s.next = void 0, v(h.slice(0, u)), o = -1, a = 0; ++o < g.length;) m[a + g[o][0]] = a + g[o][1], a += g[o][1] - g[o][0] - 1;
                return m;

                function v(t) {
                    var n = p.pop();
                    g.unshift([n, n + t.length - 1]), i(e, n, 2, t)
                }
            }
            e.exports = function(e) {
                for (var t, n, u, a, s, c, f, p = {}, d = -1; ++d < e.length;) {
                    for (; d in p;) d = p[d];
                    if (t = e[d], d && "chunkFlow" === t[1].type && "listItemPrefix" === e[d - 1][1].type && ((u = 0) < (c = t[1]._tokenizer.events).length && "lineEndingBlank" === c[u][1].type && (u += 2), u < c.length && "content" === c[u][1].type))
                        for (; ++u < c.length && "content" !== c[u][1].type;) "chunkText" === c[u][1].type && (c[u][1].isInFirstContentOfListItem = !0, u++);
                    if ("enter" === t[0]) t[1].contentType && (r(p, l(e, d)), d = p[d], f = !0);
                    else if (t[1]._container || t[1]._movePreviousLineEndings) {
                        for (u = d, n = void 0; u-- && ("lineEnding" === (a = e[u])[1].type || "lineEndingBlank" === a[1].type);) "enter" === a[0] && (n && (e[n][1].type = "lineEndingBlank"), a[1].type = "lineEnding", n = u);
                        n && (t[1].end = o(e[n][1].start), (s = e.slice(n, d)).unshift(t), i(e, n, d - n + 1, s))
                    }
                }
                return !f
            }
        },
        18889: e => {
            "use strict";
            var t;
            e.exports = function(e) {
                var n, r = "&" + e + ";";
                if ((t = t || document.createElement("i")).innerHTML = r, 59 === (n = t.textContent).charCodeAt(n.length - 1) && "semi" !== e) return !1;
                return n !== r && n
            }
        },
        92113: (e, t, n) => {
            "use strict";
            var r = n(13725),
                i = n(51252),
                o = n(31364),
                l = "data";
            e.exports = function(e, t) {
                var n = r(t),
                    p = t,
                    d = o;
                if (n in e.normal) return e.property[e.normal[n]];
                n.length > 4 && n.slice(0, 4) === l && u.test(t) && ("-" === t.charAt(4) ? p = function(e) {
                    var t = e.slice(5).replace(a, f);
                    return l + t.charAt(0).toUpperCase() + t.slice(1)
                }(t) : t = function(e) {
                    var t = e.slice(4);
                    if (a.test(t)) return e;
                    "-" !== (t = t.replace(s, c)).charAt(0) && (t = "-" + t);
                    return l + t
                }(t), d = i);
                return new d(p, t)
            };
            var u = /^data[-\w.:]+$/i,
                a = /-[a-z]/g,
                s = /[A-Z]/g;

            function c(e) {
                return "-" + e.toLowerCase()
            }

            function f(e) {
                return e.charAt(1).toUpperCase()
            }
        },
        85318: (e, t, n) => {
            "use strict";
            var r = n(14470),
                i = n(90148),
                o = n(26407),
                l = n(75335),
                u = n(75107),
                a = n(42320);
            e.exports = r([o, i, l, u, a])
        },
        75107: (e, t, n) => {
            "use strict";
            var r = n(66280),
                i = n(94525),
                o = r.booleanish,
                l = r.number,
                u = r.spaceSeparated;
            e.exports = i({
                transform: function(e, t) {
                    return "role" === t ? t : "aria-" + t.slice(4).toLowerCase()
                },
                properties: {
                    ariaActiveDescendant: null,
                    ariaAtomic: o,
                    ariaAutoComplete: null,
                    ariaBusy: o,
                    ariaChecked: o,
                    ariaColCount: l,
                    ariaColIndex: l,
                    ariaColSpan: l,
                    ariaControls: u,
                    ariaCurrent: null,
                    ariaDescribedBy: u,
                    ariaDetails: null,
                    ariaDisabled: o,
                    ariaDropEffect: u,
                    ariaErrorMessage: null,
                    ariaExpanded: o,
                    ariaFlowTo: u,
                    ariaGrabbed: o,
                    ariaHasPopup: null,
                    ariaHidden: o,
                    ariaInvalid: null,
                    ariaKeyShortcuts: null,
                    ariaLabel: null,
                    ariaLabelledBy: u,
                    ariaLevel: l,
                    ariaLive: null,
                    ariaModal: o,
                    ariaMultiLine: o,
                    ariaMultiSelectable: o,
                    ariaOrientation: null,
                    ariaOwns: u,
                    ariaPlaceholder: null,
                    ariaPosInSet: l,
                    ariaPressed: o,
                    ariaReadOnly: o,
                    ariaRelevant: null,
                    ariaRequired: o,
                    ariaRoleDescription: u,
                    ariaRowCount: l,
                    ariaRowIndex: l,
                    ariaRowSpan: l,
                    ariaSelected: o,
                    ariaSetSize: l,
                    ariaSort: null,
                    ariaValueMax: l,
                    ariaValueMin: l,
                    ariaValueNow: l,
                    ariaValueText: null,
                    role: null
                }
            })
        },
        42320: (e, t, n) => {
            "use strict";
            var r = n(66280),
                i = n(94525),
                o = n(28874),
                l = r.boolean,
                u = r.overloadedBoolean,
                a = r.booleanish,
                s = r.number,
                c = r.spaceSeparated,
                f = r.commaSeparated;
            e.exports = i({
                space: "html",
                attributes: {
                    acceptcharset: "accept-charset",
                    classname: "class",
                    htmlfor: "for",
                    httpequiv: "http-equiv"
                },
                transform: o,
                mustUseProperty: ["checked", "multiple", "muted", "selected"],
                properties: {
                    abbr: null,
                    accept: f,
                    acceptCharset: c,
                    accessKey: c,
                    action: null,
                    allow: null,
                    allowFullScreen: l,
                    allowPaymentRequest: l,
                    allowUserMedia: l,
                    alt: null,
                    as: null,
                    async: l,
                    autoCapitalize: null,
                    autoComplete: c,
                    autoFocus: l,
                    autoPlay: l,
                    capture: l,
                    charSet: null,
                    checked: l,
                    cite: null,
                    className: c,
                    cols: s,
                    colSpan: null,
                    content: null,
                    contentEditable: a,
                    controls: l,
                    controlsList: c,
                    coords: s | f,
                    crossOrigin: null,
                    data: null,
                    dateTime: null,
                    decoding: null,
                    default: l,
                    defer: l,
                    dir: null,
                    dirName: null,
                    disabled: l,
                    download: u,
                    draggable: a,
                    encType: null,
                    enterKeyHint: null,
                    form: null,
                    formAction: null,
                    formEncType: null,
                    formMethod: null,
                    formNoValidate: l,
                    formTarget: null,
                    headers: c,
                    height: s,
                    hidden: l,
                    high: s,
                    href: null,
                    hrefLang: null,
                    htmlFor: c,
                    httpEquiv: c,
                    id: null,
                    imageSizes: null,
                    imageSrcSet: f,
                    inputMode: null,
                    integrity: null,
                    is: null,
                    isMap: l,
                    itemId: null,
                    itemProp: c,
                    itemRef: c,
                    itemScope: l,
                    itemType: c,
                    kind: null,
                    label: null,
                    lang: null,
                    language: null,
                    list: null,
                    loading: null,
                    loop: l,
                    low: s,
                    manifest: null,
                    max: null,
                    maxLength: s,
                    media: null,
                    method: null,
                    min: null,
                    minLength: s,
                    multiple: l,
                    muted: l,
                    name: null,
                    nonce: null,
                    noModule: l,
                    noValidate: l,
                    onAbort: null,
                    onAfterPrint: null,
                    onAuxClick: null,
                    onBeforePrint: null,
                    onBeforeUnload: null,
                    onBlur: null,
                    onCancel: null,
                    onCanPlay: null,
                    onCanPlayThrough: null,
                    onChange: null,
                    onClick: null,
                    onClose: null,
                    onContextMenu: null,
                    onCopy: null,
                    onCueChange: null,
                    onCut: null,
                    onDblClick: null,
                    onDrag: null,
                    onDragEnd: null,
                    onDragEnter: null,
                    onDragExit: null,
                    onDragLeave: null,
                    onDragOver: null,
                    onDragStart: null,
                    onDrop: null,
                    onDurationChange: null,
                    onEmptied: null,
                    onEnded: null,
                    onError: null,
                    onFocus: null,
                    onFormData: null,
                    onHashChange: null,
                    onInput: null,
                    onInvalid: null,
                    onKeyDown: null,
                    onKeyPress: null,
                    onKeyUp: null,
                    onLanguageChange: null,
                    onLoad: null,
                    onLoadedData: null,
                    onLoadedMetadata: null,
                    onLoadEnd: null,
                    onLoadStart: null,
                    onMessage: null,
                    onMessageError: null,
                    onMouseDown: null,
                    onMouseEnter: null,
                    onMouseLeave: null,
                    onMouseMove: null,
                    onMouseOut: null,
                    onMouseOver: null,
                    onMouseUp: null,
                    onOffline: null,
                    onOnline: null,
                    onPageHide: null,
                    onPageShow: null,
                    onPaste: null,
                    onPause: null,
                    onPlay: null,
                    onPlaying: null,
                    onPopState: null,
                    onProgress: null,
                    onRateChange: null,
                    onRejectionHandled: null,
                    onReset: null,
                    onResize: null,
                    onScroll: null,
                    onSecurityPolicyViolation: null,
                    onSeeked: null,
                    onSeeking: null,
                    onSelect: null,
                    onSlotChange: null,
                    onStalled: null,
                    onStorage: null,
                    onSubmit: null,
                    onSuspend: null,
                    onTimeUpdate: null,
                    onToggle: null,
                    onUnhandledRejection: null,
                    onUnload: null,
                    onVolumeChange: null,
                    onWaiting: null,
                    onWheel: null,
                    open: l,
                    optimum: s,
                    pattern: null,
                    ping: c,
                    placeholder: null,
                    playsInline: l,
                    poster: null,
                    preload: null,
                    readOnly: l,
                    referrerPolicy: null,
                    rel: c,
                    required: l,
                    reversed: l,
                    rows: s,
                    rowSpan: s,
                    sandbox: c,
                    scope: null,
                    scoped: l,
                    seamless: l,
                    selected: l,
                    shape: null,
                    size: s,
                    sizes: null,
                    slot: null,
                    span: s,
                    spellCheck: a,
                    src: null,
                    srcDoc: null,
                    srcLang: null,
                    srcSet: f,
                    start: s,
                    step: null,
                    style: null,
                    tabIndex: s,
                    target: null,
                    title: null,
                    translate: null,
                    type: null,
                    typeMustMatch: l,
                    useMap: null,
                    value: a,
                    width: s,
                    wrap: null,
                    align: null,
                    aLink: null,
                    archive: c,
                    axis: null,
                    background: null,
                    bgColor: null,
                    border: s,
                    borderColor: null,
                    bottomMargin: s,
                    cellPadding: null,
                    cellSpacing: null,
                    char: null,
                    charOff: null,
                    classId: null,
                    clear: null,
                    code: null,
                    codeBase: null,
                    codeType: null,
                    color: null,
                    compact: l,
                    declare: l,
                    event: null,
                    face: null,
                    frame: null,
                    frameBorder: null,
                    hSpace: s,
                    leftMargin: s,
                    link: null,
                    longDesc: null,
                    lowSrc: null,
                    marginHeight: s,
                    marginWidth: s,
                    noResize: l,
                    noHref: l,
                    noShade: l,
                    noWrap: l,
                    object: null,
                    profile: null,
                    prompt: null,
                    rev: null,
                    rightMargin: s,
                    rules: null,
                    scheme: null,
                    scrolling: a,
                    standby: null,
                    summary: null,
                    text: null,
                    topMargin: s,
                    valueType: null,
                    version: null,
                    vAlign: null,
                    vLink: null,
                    vSpace: s,
                    allowTransparency: null,
                    autoCorrect: null,
                    autoSave: null,
                    disablePictureInPicture: l,
                    disableRemotePlayback: l,
                    prefix: null,
                    property: null,
                    results: s,
                    security: null,
                    unselectable: null
                }
            })
        },
        2132: (e, t, n) => {
            "use strict";
            var r = n(66280),
                i = n(94525),
                o = n(83626),
                l = r.boolean,
                u = r.number,
                a = r.spaceSeparated,
                s = r.commaSeparated,
                c = r.commaOrSpaceSeparated;
            e.exports = i({
                space: "svg",
                attributes: {
                    accentHeight: "accent-height",
                    alignmentBaseline: "alignment-baseline",
                    arabicForm: "arabic-form",
                    baselineShift: "baseline-shift",
                    capHeight: "cap-height",
                    className: "class",
                    clipPath: "clip-path",
                    clipRule: "clip-rule",
                    colorInterpolation: "color-interpolation",
                    colorInterpolationFilters: "color-interpolation-filters",
                    colorProfile: "color-profile",
                    colorRendering: "color-rendering",
                    crossOrigin: "crossorigin",
                    dataType: "datatype",
                    dominantBaseline: "dominant-baseline",
                    enableBackground: "enable-background",
                    fillOpacity: "fill-opacity",
                    fillRule: "fill-rule",
                    floodColor: "flood-color",
                    floodOpacity: "flood-opacity",
                    fontFamily: "font-family",
                    fontSize: "font-size",
                    fontSizeAdjust: "font-size-adjust",
                    fontStretch: "font-stretch",
                    fontStyle: "font-style",
                    fontVariant: "font-variant",
                    fontWeight: "font-weight",
                    glyphName: "glyph-name",
                    glyphOrientationHorizontal: "glyph-orientation-horizontal",
                    glyphOrientationVertical: "glyph-orientation-vertical",
                    hrefLang: "hreflang",
                    horizAdvX: "horiz-adv-x",
                    horizOriginX: "horiz-origin-x",
                    horizOriginY: "horiz-origin-y",
                    imageRendering: "image-rendering",
                    letterSpacing: "letter-spacing",
                    lightingColor: "lighting-color",
                    markerEnd: "marker-end",
                    markerMid: "marker-mid",
                    markerStart: "marker-start",
                    navDown: "nav-down",
                    navDownLeft: "nav-down-left",
                    navDownRight: "nav-down-right",
                    navLeft: "nav-left",
                    navNext: "nav-next",
                    navPrev: "nav-prev",
                    navRight: "nav-right",
                    navUp: "nav-up",
                    navUpLeft: "nav-up-left",
                    navUpRight: "nav-up-right",
                    onAbort: "onabort",
                    onActivate: "onactivate",
                    onAfterPrint: "onafterprint",
                    onBeforePrint: "onbeforeprint",
                    onBegin: "onbegin",
                    onCancel: "oncancel",
                    onCanPlay: "oncanplay",
                    onCanPlayThrough: "oncanplaythrough",
                    onChange: "onchange",
                    onClick: "onclick",
                    onClose: "onclose",
                    onCopy: "oncopy",
                    onCueChange: "oncuechange",
                    onCut: "oncut",
                    onDblClick: "ondblclick",
                    onDrag: "ondrag",
                    onDragEnd: "ondragend",
                    onDragEnter: "ondragenter",
                    onDragExit: "ondragexit",
                    onDragLeave: "ondragleave",
                    onDragOver: "ondragover",
                    onDragStart: "ondragstart",
                    onDrop: "ondrop",
                    onDurationChange: "ondurationchange",
                    onEmptied: "onemptied",
                    onEnd: "onend",
                    onEnded: "onended",
                    onError: "onerror",
                    onFocus: "onfocus",
                    onFocusIn: "onfocusin",
                    onFocusOut: "onfocusout",
                    onHashChange: "onhashchange",
                    onInput: "oninput",
                    onInvalid: "oninvalid",
                    onKeyDown: "onkeydown",
                    onKeyPress: "onkeypress",
                    onKeyUp: "onkeyup",
                    onLoad: "onload",
                    onLoadedData: "onloadeddata",
                    onLoadedMetadata: "onloadedmetadata",
                    onLoadStart: "onloadstart",
                    onMessage: "onmessage",
                    onMouseDown: "onmousedown",
                    onMouseEnter: "onmouseenter",
                    onMouseLeave: "onmouseleave",
                    onMouseMove: "onmousemove",
                    onMouseOut: "onmouseout",
                    onMouseOver: "onmouseover",
                    onMouseUp: "onmouseup",
                    onMouseWheel: "onmousewheel",
                    onOffline: "onoffline",
                    onOnline: "ononline",
                    onPageHide: "onpagehide",
                    onPageShow: "onpageshow",
                    onPaste: "onpaste",
                    onPause: "onpause",
                    onPlay: "onplay",
                    onPlaying: "onplaying",
                    onPopState: "onpopstate",
                    onProgress: "onprogress",
                    onRateChange: "onratechange",
                    onRepeat: "onrepeat",
                    onReset: "onreset",
                    onResize: "onresize",
                    onScroll: "onscroll",
                    onSeeked: "onseeked",
                    onSeeking: "onseeking",
                    onSelect: "onselect",
                    onShow: "onshow",
                    onStalled: "onstalled",
                    onStorage: "onstorage",
                    onSubmit: "onsubmit",
                    onSuspend: "onsuspend",
                    onTimeUpdate: "ontimeupdate",
                    onToggle: "ontoggle",
                    onUnload: "onunload",
                    onVolumeChange: "onvolumechange",
                    onWaiting: "onwaiting",
                    onZoom: "onzoom",
                    overlinePosition: "overline-position",
                    overlineThickness: "overline-thickness",
                    paintOrder: "paint-order",
                    panose1: "panose-1",
                    pointerEvents: "pointer-events",
                    referrerPolicy: "referrerpolicy",
                    renderingIntent: "rendering-intent",
                    shapeRendering: "shape-rendering",
                    stopColor: "stop-color",
                    stopOpacity: "stop-opacity",
                    strikethroughPosition: "strikethrough-position",
                    strikethroughThickness: "strikethrough-thickness",
                    strokeDashArray: "stroke-dasharray",
                    strokeDashOffset: "stroke-dashoffset",
                    strokeLineCap: "stroke-linecap",
                    strokeLineJoin: "stroke-linejoin",
                    strokeMiterLimit: "stroke-miterlimit",
                    strokeOpacity: "stroke-opacity",
                    strokeWidth: "stroke-width",
                    tabIndex: "tabindex",
                    textAnchor: "text-anchor",
                    textDecoration: "text-decoration",
                    textRendering: "text-rendering",
                    typeOf: "typeof",
                    underlinePosition: "underline-position",
                    underlineThickness: "underline-thickness",
                    unicodeBidi: "unicode-bidi",
                    unicodeRange: "unicode-range",
                    unitsPerEm: "units-per-em",
                    vAlphabetic: "v-alphabetic",
                    vHanging: "v-hanging",
                    vIdeographic: "v-ideographic",
                    vMathematical: "v-mathematical",
                    vectorEffect: "vector-effect",
                    vertAdvY: "vert-adv-y",
                    vertOriginX: "vert-origin-x",
                    vertOriginY: "vert-origin-y",
                    wordSpacing: "word-spacing",
                    writingMode: "writing-mode",
                    xHeight: "x-height",
                    playbackOrder: "playbackorder",
                    timelineBegin: "timelinebegin"
                },
                transform: o,
                properties: {
                    about: c,
                    accentHeight: u,
                    accumulate: null,
                    additive: null,
                    alignmentBaseline: null,
                    alphabetic: u,
                    amplitude: u,
                    arabicForm: null,
                    ascent: u,
                    attributeName: null,
                    attributeType: null,
                    azimuth: u,
                    bandwidth: null,
                    baselineShift: null,
                    baseFrequency: null,
                    baseProfile: null,
                    bbox: null,
                    begin: null,
                    bias: u,
                    by: null,
                    calcMode: null,
                    capHeight: u,
                    className: a,
                    clip: null,
                    clipPath: null,
                    clipPathUnits: null,
                    clipRule: null,
                    color: null,
                    colorInterpolation: null,
                    colorInterpolationFilters: null,
                    colorProfile: null,
                    colorRendering: null,
                    content: null,
                    contentScriptType: null,
                    contentStyleType: null,
                    crossOrigin: null,
                    cursor: null,
                    cx: null,
                    cy: null,
                    d: null,
                    dataType: null,
                    defaultAction: null,
                    descent: u,
                    diffuseConstant: u,
                    direction: null,
                    display: null,
                    dur: null,
                    divisor: u,
                    dominantBaseline: null,
                    download: l,
                    dx: null,
                    dy: null,
                    edgeMode: null,
                    editable: null,
                    elevation: u,
                    enableBackground: null,
                    end: null,
                    event: null,
                    exponent: u,
                    externalResourcesRequired: null,
                    fill: null,
                    fillOpacity: u,
                    fillRule: null,
                    filter: null,
                    filterRes: null,
                    filterUnits: null,
                    floodColor: null,
                    floodOpacity: null,
                    focusable: null,
                    focusHighlight: null,
                    fontFamily: null,
                    fontSize: null,
                    fontSizeAdjust: null,
                    fontStretch: null,
                    fontStyle: null,
                    fontVariant: null,
                    fontWeight: null,
                    format: null,
                    fr: null,
                    from: null,
                    fx: null,
                    fy: null,
                    g1: s,
                    g2: s,
                    glyphName: s,
                    glyphOrientationHorizontal: null,
                    glyphOrientationVertical: null,
                    glyphRef: null,
                    gradientTransform: null,
                    gradientUnits: null,
                    handler: null,
                    hanging: u,
                    hatchContentUnits: null,
                    hatchUnits: null,
                    height: null,
                    href: null,
                    hrefLang: null,
                    horizAdvX: u,
                    horizOriginX: u,
                    horizOriginY: u,
                    id: null,
                    ideographic: u,
                    imageRendering: null,
                    initialVisibility: null,
                    in: null,
                    in2: null,
                    intercept: u,
                    k: u,
                    k1: u,
                    k2: u,
                    k3: u,
                    k4: u,
                    kernelMatrix: c,
                    kernelUnitLength: null,
                    keyPoints: null,
                    keySplines: null,
                    keyTimes: null,
                    kerning: null,
                    lang: null,
                    lengthAdjust: null,
                    letterSpacing: null,
                    lightingColor: null,
                    limitingConeAngle: u,
                    local: null,
                    markerEnd: null,
                    markerMid: null,
                    markerStart: null,
                    markerHeight: null,
                    markerUnits: null,
                    markerWidth: null,
                    mask: null,
                    maskContentUnits: null,
                    maskUnits: null,
                    mathematical: null,
                    max: null,
                    media: null,
                    mediaCharacterEncoding: null,
                    mediaContentEncodings: null,
                    mediaSize: u,
                    mediaTime: null,
                    method: null,
                    min: null,
                    mode: null,
                    name: null,
                    navDown: null,
                    navDownLeft: null,
                    navDownRight: null,
                    navLeft: null,
                    navNext: null,
                    navPrev: null,
                    navRight: null,
                    navUp: null,
                    navUpLeft: null,
                    navUpRight: null,
                    numOctaves: null,
                    observer: null,
                    offset: null,
                    onAbort: null,
                    onActivate: null,
                    onAfterPrint: null,
                    onBeforePrint: null,
                    onBegin: null,
                    onCancel: null,
                    onCanPlay: null,
                    onCanPlayThrough: null,
                    onChange: null,
                    onClick: null,
                    onClose: null,
                    onCopy: null,
                    onCueChange: null,
                    onCut: null,
                    onDblClick: null,
                    onDrag: null,
                    onDragEnd: null,
                    onDragEnter: null,
                    onDragExit: null,
                    onDragLeave: null,
                    onDragOver: null,
                    onDragStart: null,
                    onDrop: null,
                    onDurationChange: null,
                    onEmptied: null,
                    onEnd: null,
                    onEnded: null,
                    onError: null,
                    onFocus: null,
                    onFocusIn: null,
                    onFocusOut: null,
                    onHashChange: null,
                    onInput: null,
                    onInvalid: null,
                    onKeyDown: null,
                    onKeyPress: null,
                    onKeyUp: null,
                    onLoad: null,
                    onLoadedData: null,
                    onLoadedMetadata: null,
                    onLoadStart: null,
                    onMessage: null,
                    onMouseDown: null,
                    onMouseEnter: null,
                    onMouseLeave: null,
                    onMouseMove: null,
                    onMouseOut: null,
                    onMouseOver: null,
                    onMouseUp: null,
                    onMouseWheel: null,
                    onOffline: null,
                    onOnline: null,
                    onPageHide: null,
                    onPageShow: null,
                    onPaste: null,
                    onPause: null,
                    onPlay: null,
                    onPlaying: null,
                    onPopState: null,
                    onProgress: null,
                    onRateChange: null,
                    onRepeat: null,
                    onReset: null,
                    onResize: null,
                    onScroll: null,
                    onSeeked: null,
                    onSeeking: null,
                    onSelect: null,
                    onShow: null,
                    onStalled: null,
                    onStorage: null,
                    onSubmit: null,
                    onSuspend: null,
                    onTimeUpdate: null,
                    onToggle: null,
                    onUnload: null,
                    onVolumeChange: null,
                    onWaiting: null,
                    onZoom: null,
                    opacity: null,
                    operator: null,
                    order: null,
                    orient: null,
                    orientation: null,
                    origin: null,
                    overflow: null,
                    overlay: null,
                    overlinePosition: u,
                    overlineThickness: u,
                    paintOrder: null,
                    panose1: null,
                    path: null,
                    pathLength: u,
                    patternContentUnits: null,
                    patternTransform: null,
                    patternUnits: null,
                    phase: null,
                    ping: a,
                    pitch: null,
                    playbackOrder: null,
                    pointerEvents: null,
                    points: null,
                    pointsAtX: u,
                    pointsAtY: u,
                    pointsAtZ: u,
                    preserveAlpha: null,
                    preserveAspectRatio: null,
                    primitiveUnits: null,
                    propagate: null,
                    property: c,
                    r: null,
                    radius: null,
                    referrerPolicy: null,
                    refX: null,
                    refY: null,
                    rel: c,
                    rev: c,
                    renderingIntent: null,
                    repeatCount: null,
                    repeatDur: null,
                    requiredExtensions: c,
                    requiredFeatures: c,
                    requiredFonts: c,
                    requiredFormats: c,
                    resource: null,
                    restart: null,
                    result: null,
                    rotate: null,
                    rx: null,
                    ry: null,
                    scale: null,
                    seed: null,
                    shapeRendering: null,
                    side: null,
                    slope: null,
                    snapshotTime: null,
                    specularConstant: u,
                    specularExponent: u,
                    spreadMethod: null,
                    spacing: null,
                    startOffset: null,
                    stdDeviation: null,
                    stemh: null,
                    stemv: null,
                    stitchTiles: null,
                    stopColor: null,
                    stopOpacity: null,
                    strikethroughPosition: u,
                    strikethroughThickness: u,
                    string: null,
                    stroke: null,
                    strokeDashArray: c,
                    strokeDashOffset: null,
                    strokeLineCap: null,
                    strokeLineJoin: null,
                    strokeMiterLimit: u,
                    strokeOpacity: u,
                    strokeWidth: null,
                    style: null,
                    surfaceScale: u,
                    syncBehavior: null,
                    syncBehaviorDefault: null,
                    syncMaster: null,
                    syncTolerance: null,
                    syncToleranceDefault: null,
                    systemLanguage: c,
                    tabIndex: u,
                    tableValues: null,
                    target: null,
                    targetX: u,
                    targetY: u,
                    textAnchor: null,
                    textDecoration: null,
                    textRendering: null,
                    textLength: null,
                    timelineBegin: null,
                    title: null,
                    transformBehavior: null,
                    type: null,
                    typeOf: c,
                    to: null,
                    transform: null,
                    u1: null,
                    u2: null,
                    underlinePosition: u,
                    underlineThickness: u,
                    unicode: null,
                    unicodeBidi: null,
                    unicodeRange: null,
                    unitsPerEm: u,
                    values: null,
                    vAlphabetic: u,
                    vMathematical: u,
                    vectorEffect: null,
                    vHanging: u,
                    vIdeographic: u,
                    version: null,
                    vertAdvY: u,
                    vertOriginX: u,
                    vertOriginY: u,
                    viewBox: null,
                    viewTarget: null,
                    visibility: null,
                    width: null,
                    widths: null,
                    wordSpacing: null,
                    writingMode: null,
                    x: null,
                    x1: null,
                    x2: null,
                    xChannelSelector: null,
                    xHeight: u,
                    y: null,
                    y1: null,
                    y2: null,
                    yChannelSelector: null,
                    z: null,
                    zoomAndPan: null
                }
            })
        },
        28874: (e, t, n) => {
            "use strict";
            var r = n(83626);
            e.exports = function(e, t) {
                return r(e, t.toLowerCase())
            }
        },
        83626: e => {
            "use strict";
            e.exports = function(e, t) {
                return t in e ? e[t] : t
            }
        },
        94525: (e, t, n) => {
            "use strict";
            var r = n(13725),
                i = n(69725),
                o = n(51252);
            e.exports = function(e) {
                var t, n, l = e.space,
                    u = e.mustUseProperty || [],
                    a = e.attributes || {},
                    s = e.properties,
                    c = e.transform,
                    f = {},
                    p = {};
                for (t in s) n = new o(t, c(a, t), s[t], l), -1 !== u.indexOf(t) && (n.mustUseProperty = !0), f[t] = n, p[r(t)] = t, p[r(n.attribute)] = t;
                return new i(f, p, l)
            }
        },
        51252: (e, t, n) => {
            "use strict";
            var r = n(31364),
                i = n(66280);
            e.exports = u, u.prototype = new r, u.prototype.defined = !0;
            var o = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"],
                l = o.length;

            function u(e, t, n, u) {
                var s, c = -1;
                for (a(this, "space", u), r.call(this, e, t); ++c < l;) a(this, s = o[c], (n & i[s]) === i[s])
            }

            function a(e, t, n) {
                n && (e[t] = n)
            }
        },
        31364: e => {
            "use strict";
            e.exports = n;
            var t = n.prototype;

            function n(e, t) {
                this.property = e, this.attribute = t
            }
            t.space = null, t.attribute = null, t.property = null, t.boolean = !1, t.booleanish = !1, t.overloadedBoolean = !1, t.number = !1, t.commaSeparated = !1, t.spaceSeparated = !1, t.commaOrSpaceSeparated = !1, t.mustUseProperty = !1, t.defined = !1
        },
        14470: (e, t, n) => {
            "use strict";
            var r = n(31693),
                i = n(69725);
            e.exports = function(e) {
                var t, n, o = e.length,
                    l = [],
                    u = [],
                    a = -1;
                for (; ++a < o;) t = e[a], l.push(t.property), u.push(t.normal), n = t.space;
                return new i(r.apply(null, l), r.apply(null, u), n)
            }
        },
        69725: e => {
            "use strict";
            e.exports = n;
            var t = n.prototype;

            function n(e, t, n) {
                this.property = e, this.normal = t, n && (this.space = n)
            }
            t.space = null, t.normal = {}, t.property = {}
        },
        66280: (e, t) => {
            "use strict";
            var n = 0;

            function r() {
                return Math.pow(2, ++n)
            }
            t.boolean = r(), t.booleanish = r(), t.overloadedBoolean = r(), t.number = r(), t.spaceSeparated = r(), t.commaSeparated = r(), t.commaOrSpaceSeparated = r()
        },
        90148: (e, t, n) => {
            "use strict";
            var r = n(94525);
            e.exports = r({
                space: "xlink",
                transform: function(e, t) {
                    return "xlink:" + t.slice(5).toLowerCase()
                },
                properties: {
                    xLinkActuate: null,
                    xLinkArcRole: null,
                    xLinkHref: null,
                    xLinkRole: null,
                    xLinkShow: null,
                    xLinkTitle: null,
                    xLinkType: null
                }
            })
        },
        26407: (e, t, n) => {
            "use strict";
            var r = n(94525);
            e.exports = r({
                space: "xml",
                transform: function(e, t) {
                    return "xml:" + t.slice(3).toLowerCase()
                },
                properties: {
                    xmlLang: null,
                    xmlBase: null,
                    xmlSpace: null
                }
            })
        },
        75335: (e, t, n) => {
            "use strict";
            var r = n(94525),
                i = n(28874);
            e.exports = r({
                space: "xmlns",
                attributes: {
                    xmlnsxlink: "xmlns:xlink"
                },
                transform: i,
                properties: {
                    xmlns: null,
                    xmlnsXLink: null
                }
            })
        },
        13725: e => {
            "use strict";
            e.exports = function(e) {
                return e.toLowerCase()
            }
        },
        81301: (e, t, n) => {
            "use strict";
            var r = n(14470),
                i = n(90148),
                o = n(26407),
                l = n(75335),
                u = n(75107),
                a = n(2132);
            e.exports = r([o, i, l, u, a])
        },
        33920: (e, t, n) => {
            "use strict";
            t.cV = void 0;
            var r = u(n(29901)),
                i = u(n(10571)),
                o = u(n(21156)),
                l = u(n(7862));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a() {
                return a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, a.apply(this, arguments)
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var l, u = e[Symbol.iterator](); !(r = (l = u.next()).done) && (n.push(l.value), !t || n.length !== t); r = !0);
                    } catch (a) {
                        i = !0, o = a
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var f = function(e) {
                var t = function() {
                        var e = s(r.default.useState(null), 2),
                            t = e[0],
                            n = e[1];
                        return [t, r.default.useCallback((function(e) {
                            null !== e && n(new o.default(e))
                        }), [])]
                    }(),
                    n = s(t, 2),
                    i = n[0],
                    l = n[1],
                    u = r.default.useCallback((function() {
                        return i.hide()
                    }), [i]),
                    a = e.role || "dialog",
                    c = "alertdialog" === a,
                    f = e.titleId || e.id + "-title";
                return r.default.useEffect((function() {
                    return function() {
                        i && i.destroy()
                    }
                }), [i]), [i, {
                    container: {
                        id: e.id,
                        ref: l,
                        role: a,
                        tabIndex: -1,
                        "aria-modal": !0,
                        "aria-hidden": !0,
                        "aria-labelledby": f
                    },
                    overlay: {
                        onClick: c ? void 0 : u
                    },
                    dialog: {
                        role: "document"
                    },
                    closeButton: {
                        type: "button",
                        onClick: u
                    },
                    title: {
                        role: "heading",
                        "aria-level": 1,
                        id: f
                    }
                }]
            };
            var p = function(e) {
                var t = function() {
                        var e = s(r.default.useState(!1), 2),
                            t = e[0],
                            n = e[1];
                        return r.default.useEffect((function() {
                            return n(!0)
                        }), []), t
                    }(),
                    n = s(f(e), 2),
                    o = n[0],
                    l = n[1],
                    u = e.dialogRef;
                if (r.default.useEffect((function() {
                        return o && u(o),
                            function() {
                                return u(void 0)
                            }
                    }), [u, o]), !t) return null;
                var c = e.dialogRoot ? document.querySelector(e.dialogRoot) : document.body,
                    p = r.default.createElement("p", a({}, l.title, {
                        className: e.classNames.title,
                        key: "title"
                    }), e.title),
                    d = r.default.createElement("button", a({}, l.closeButton, {
                        className: e.classNames.closeButton,
                        "aria-label": e.closeButtonLabel,
                        key: "button"
                    }), e.closeButtonContent),
                    h = ["first" === e.closeButtonPosition && d, p, e.children, "last" === e.closeButtonPosition && d].filter(Boolean);
                return i.default.createPortal(r.default.createElement("div", a({}, l.container, {
                    className: e.classNames.container
                }), r.default.createElement("div", a({}, l.overlay, {
                    className: e.classNames.overlay
                })), r.default.createElement("div", a({}, l.dialog, {
                    className: e.classNames.dialog
                }), h)), c)
            };
            t.cV = p, p.defaultProps = {
                role: "dialog",
                closeButtonLabel: "Close this dialog window",
                closeButtonContent: "\xd7",
                closeButtonPosition: "first",
                classNames: {},
                dialogRef: function() {}
            }, p.propTypes = {
                role: l.default.oneOf(["dialog", "alertdialog"]),
                id: l.default.string.isRequired,
                title: l.default.node.isRequired,
                dialogRef: l.default.func,
                titleId: l.default.string,
                closeButtonLabel: l.default.string,
                closeButtonContent: l.default.node,
                closeButtonPosition: l.default.oneOf(["first", "last", "none"]),
                dialogRoot: l.default.string,
                classNames: l.default.exact({
                    container: l.default.string,
                    overlay: l.default.string,
                    dialog: l.default.string,
                    title: l.default.string,
                    closeButton: l.default.string
                }),
                children: l.default.node
            }
        },
        77387: (e, t, n) => {
            "use strict";
            n.d(t, {
                YD: () => g,
                df: () => h
            });
            var r = n(29901);

            function i() {
                return i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, i.apply(this, arguments)
            }

            function o(e, t) {
                return o = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, o(e, t)
            }
            var l = new Map,
                u = new WeakMap,
                a = 0,
                s = void 0;

            function c(e) {
                return Object.keys(e).sort().filter((function(t) {
                    return void 0 !== e[t]
                })).map((function(t) {
                    return t + "_" + ("root" === t ? (n = e.root) ? (u.has(n) || (a += 1, u.set(n, a.toString())), u.get(n)) : "0" : e[t]);
                    var n
                })).toString()
            }

            function f(e, t, n, r) {
                if (void 0 === n && (n = {}), void 0 === r && (r = s), void 0 === window.IntersectionObserver && void 0 !== r) {
                    var i = e.getBoundingClientRect();
                    return t(r, {
                            isIntersecting: r,
                            target: e,
                            intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
                            time: 0,
                            boundingClientRect: i,
                            intersectionRect: i,
                            rootBounds: i
                        }),
                        function() {}
                }
                var o = function(e) {
                        var t = c(e),
                            n = l.get(t);
                        if (!n) {
                            var r, i = new Map,
                                o = new IntersectionObserver((function(t) {
                                    t.forEach((function(t) {
                                        var n, o = t.isIntersecting && r.some((function(e) {
                                            return t.intersectionRatio >= e
                                        }));
                                        e.trackVisibility && void 0 === t.isVisible && (t.isVisible = o), null == (n = i.get(t.target)) || n.forEach((function(e) {
                                            e(o, t)
                                        }))
                                    }))
                                }), e);
                            r = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                                id: t,
                                observer: o,
                                elements: i
                            }, l.set(t, n)
                        }
                        return n
                    }(n),
                    u = o.id,
                    a = o.observer,
                    f = o.elements,
                    p = f.get(e) || [];
                return f.has(e) || f.set(e, p), p.push(t), a.observe(e),
                    function() {
                        p.splice(p.indexOf(t), 1), 0 === p.length && (f.delete(e), a.unobserve(e)), 0 === f.size && (a.disconnect(), l.delete(u))
                    }
            }
            var p = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];

            function d(e) {
                return "function" != typeof e.children
            }
            var h = function(e) {
                var t, n;

                function l(t) {
                    var n;
                    return (n = e.call(this, t) || this).node = null, n._unobserveCb = null, n.handleNode = function(e) {
                        n.node && (n.unobserve(), e || n.props.triggerOnce || n.props.skip || n.setState({
                            inView: !!n.props.initialInView,
                            entry: void 0
                        })), n.node = e || null, n.observeNode()
                    }, n.handleChange = function(e, t) {
                        e && n.props.triggerOnce && n.unobserve(), d(n.props) || n.setState({
                            inView: e,
                            entry: t
                        }), n.props.onChange && n.props.onChange(e, t)
                    }, n.state = {
                        inView: !!t.initialInView,
                        entry: void 0
                    }, n
                }
                n = e, (t = l).prototype = Object.create(n.prototype), t.prototype.constructor = t, o(t, n);
                var u = l.prototype;
                return u.componentDidUpdate = function(e) {
                    e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold && e.skip === this.props.skip && e.trackVisibility === this.props.trackVisibility && e.delay === this.props.delay || (this.unobserve(), this.observeNode())
                }, u.componentWillUnmount = function() {
                    this.unobserve(), this.node = null
                }, u.observeNode = function() {
                    if (this.node && !this.props.skip) {
                        var e = this.props,
                            t = e.threshold,
                            n = e.root,
                            r = e.rootMargin,
                            i = e.trackVisibility,
                            o = e.delay,
                            l = e.fallbackInView;
                        this._unobserveCb = f(this.node, this.handleChange, {
                            threshold: t,
                            root: n,
                            rootMargin: r,
                            trackVisibility: i,
                            delay: o
                        }, l)
                    }
                }, u.unobserve = function() {
                    this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
                }, u.render = function() {
                    if (!d(this.props)) {
                        var e = this.state,
                            t = e.inView,
                            n = e.entry;
                        return this.props.children({
                            inView: t,
                            entry: n,
                            ref: this.handleNode
                        })
                    }
                    var o = this.props,
                        l = o.children,
                        u = o.as,
                        a = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(o, p);
                    return r.createElement(u || "div", i({
                        ref: this.handleNode
                    }, a), l)
                }, l
            }(r.Component);

            function g(e) {
                var t = void 0 === e ? {} : e,
                    n = t.threshold,
                    i = t.delay,
                    o = t.trackVisibility,
                    l = t.rootMargin,
                    u = t.root,
                    a = t.triggerOnce,
                    s = t.skip,
                    c = t.initialInView,
                    p = t.fallbackInView,
                    d = r.useRef(),
                    h = r.useState({
                        inView: !!c
                    }),
                    g = h[0],
                    m = h[1],
                    v = r.useCallback((function(e) {
                        void 0 !== d.current && (d.current(), d.current = void 0), s || e && (d.current = f(e, (function(e, t) {
                            m({
                                inView: e,
                                entry: t
                            }), t.isIntersecting && a && d.current && (d.current(), d.current = void 0)
                        }), {
                            root: u,
                            rootMargin: l,
                            threshold: n,
                            trackVisibility: o,
                            delay: i
                        }, p))
                    }), [Array.isArray(n) ? n.toString() : n, u, l, a, s, o, p, i]);
                (0, r.useEffect)((function() {
                    d.current || !g.entry || a || s || m({
                        inView: !!c
                    })
                }));
                var y = [v, g.inView, g.entry];
                return y.ref = y[0], y.inView = y[1], y.entry = y[2], y
            }
            h.displayName = "InView", h.defaultProps = {
                threshold: 0,
                triggerOnce: !1,
                initialInView: !1
            }
        },
        26975: (e, t, n) => {
            "use strict";
            e.exports = function(e) {
                var t = this;
                this.Parser = function(n) {
                    return r(n, Object.assign({}, t.data("settings"), e, {
                        extensions: t.data("micromarkExtensions") || [],
                        mdastExtensions: t.data("fromMarkdownExtensions") || []
                    }))
                }
            };
            var r = n(67814)
        },
        98231: (e, t, n) => {
            "use strict";
            e.exports = function(e) {
                var t = e || {},
                    n = t.createElement || i,
                    r = t.fragment || o,
                    p = !1 !== t.sanitize,
                    d = p && "boolean" != typeof t.sanitize ? t.sanitize : null,
                    h = t.toHast || {},
                    g = t.remarkReactComponents || {};

                function m(e, t, r) {
                    return r && -1 !== f.indexOf(e) && (r = r.filter((function(e) {
                        return "\n" !== e
                    }))), n(c.call(g, e) ? g[e] : e, t, r)
                }
                this.Compiler = function(e) {
                    var i, o = l(e, h);
                    return p && (o = u(o, d)), "div" === (i = a(m, s(o), t.prefix)).type && r && (i = n(r, {}, i.props.children)), i
                }
            };
            var r, i, o, l = n(7498),
                u = n(36735),
                a = n(66484),
                s = n(21828);
            try {
                r = n(29901), i = r.createElement, o = r.Fragment
            } catch (p) {}
            var c = {}.hasOwnProperty,
                f = ["table", "thead", "tbody", "tfoot", "tr"]
        },
        40997: (e, t) => {
            "use strict";
            t.parse = function(e) {
                var t = String(e || "").trim();
                return "" === t ? [] : t.split(n)
            }, t.stringify = function(e) {
                return e.join(" ").trim()
            };
            var n = /[ \t\n\r\f]+/g
        },
        48061: function(e, t, n) {
            "use strict";
            var r;
            ! function(i) {
                if ("function" != typeof o) {
                    var o = function(e) {
                        return e
                    };
                    o.nonNative = !0
                }
                const l = o("plaintext"),
                    u = o("html"),
                    a = o("comment"),
                    s = /<(\w*)>/g,
                    c = /<\/?([^\s\/>]+)/;

                function f(e, t, n) {
                    return d(e = e || "", p(t = t || [], n = n || ""))
                }

                function p(e, t) {
                    return {
                        allowable_tags: e = function(e) {
                            let t = new Set;
                            if ("string" == typeof e) {
                                let n;
                                for (; n = s.exec(e);) t.add(n[1])
                            } else o.nonNative || "function" != typeof e[o.iterator] ? "function" == typeof e.forEach && e.forEach(t.add, t) : t = new Set(e);
                            return t
                        }(e),
                        tag_replacement: t,
                        state: l,
                        tag_buffer: "",
                        depth: 0,
                        in_quote_char: ""
                    }
                }

                function d(e, t) {
                    if ("string" != typeof e) throw new TypeError("'html' parameter must be a string");
                    let n = t.allowable_tags,
                        r = t.tag_replacement,
                        i = t.state,
                        o = t.tag_buffer,
                        s = t.depth,
                        c = t.in_quote_char,
                        f = "";
                    for (let p = 0, d = e.length; p < d; p++) {
                        let t = e[p];
                        if (i === l)
                            if ("<" === t) i = u, o += t;
                            else f += t;
                        else if (i === u) switch (t) {
                            case "<":
                                if (c) break;
                                s++;
                                break;
                            case ">":
                                if (c) break;
                                if (s) {
                                    s--;
                                    break
                                }
                                c = "", i = l, o += ">", n.has(h(o)) ? f += o : f += r, o = "";
                                break;
                            case '"':
                            case "'":
                                c = t === c ? "" : c || t, o += t;
                                break;
                            case "-":
                                "<!-" === o && (i = a), o += t;
                                break;
                            case " ":
                            case "\n":
                                if ("<" === o) {
                                    i = l, f += "< ", o = "";
                                    break
                                }
                                o += t;
                                break;
                            default:
                                o += t
                        } else if (i === a)
                            if (">" === t) "--" == o.slice(-2) && (i = l), o = "";
                            else o += t
                    }
                    return t.state = i, t.tag_buffer = o, t.depth = s, t.in_quote_char = c, f
                }

                function h(e) {
                    let t = c.exec(e);
                    return t ? t[1].toLowerCase() : null
                }
                f.init_streaming_mode = function(e, t) {
                    let n = p(e = e || [], t = t || "");
                    return function(e) {
                        return d(e || "", n)
                    }
                }, void 0 === (r = function() {
                    return f
                }.call(t, n, t, e)) || (e.exports = r)
            }()
        },
        14725: (e, t, n) => {
            var r = n(90158);
            e.exports = function(e, t) {
                var n, i = null;
                if (!e || "string" != typeof e) return i;
                for (var o, l, u = r(e), a = "function" == typeof t, s = 0, c = u.length; s < c; s++) o = (n = u[s]).property, l = n.value, a ? t(o, l, n) : l && (i || (i = {}), i[o] = l);
                return i
            }
        },
        57849: (e, t, n) => {
            "use strict";
            var r = n(34593);
            e.exports = o, o.wrap = r;
            var i = [].slice;

            function o() {
                var e = [],
                    t = {
                        run: function() {
                            var t = -1,
                                n = i.call(arguments, 0, -1),
                                o = arguments[arguments.length - 1];
                            if ("function" != typeof o) throw new Error("Expected function as last argument, not " + o);

                            function l(u) {
                                var a = e[++t],
                                    s = i.call(arguments, 0),
                                    c = s.slice(1),
                                    f = n.length,
                                    p = -1;
                                if (u) o(u);
                                else {
                                    for (; ++p < f;) null !== c[p] && void 0 !== c[p] || (c[p] = n[p]);
                                    n = c, a ? r(a, l).apply(null, n) : o.apply(null, [null].concat(n))
                                }
                            }
                            l.apply(null, [null].concat(n))
                        },
                        use: function(n) {
                            if ("function" != typeof n) throw new Error("Expected `fn` to be a function, not " + n);
                            return e.push(n), t
                        }
                    };
                return t
            }
        },
        34593: e => {
            "use strict";
            var t = [].slice;
            e.exports = function(e, n) {
                var r;
                return function() {
                    var n, l = t.call(arguments, 0),
                        u = e.length > l.length;
                    u && l.push(i);
                    try {
                        n = e.apply(null, l)
                    } catch (a) {
                        if (u && r) throw a;
                        return i(a)
                    }
                    u || (n && "function" == typeof n.then ? n.then(o, i) : n instanceof Error ? i(n) : o(n))
                };

                function i() {
                    r || (r = !0, n.apply(null, arguments))
                }

                function o(e) {
                    i(null, e)
                }
            }
        },
        56759: (e, t, n) => {
            "use strict";
            var r = n(69344),
                i = n(84853),
                o = n(93405),
                l = n(42125),
                u = n(57849),
                a = n(59228);
            e.exports = function e() {
                var t, n = [],
                    i = u(),
                    y = {},
                    x = -1;
                return k.data = function(e, n) {
                    if ("string" == typeof e) return 2 === arguments.length ? (g("data", t), y[e] = n, k) : c.call(y, e) && y[e] || null;
                    if (e) return g("data", t), y = e, k;
                    return y
                }, k.freeze = b, k.attachers = n, k.use = function(e) {
                    var r;
                    if (g("use", t), null == e);
                    else if ("function" == typeof e) c.apply(null, arguments);
                    else {
                        if ("object" != typeof e) throw new Error("Expected usable value, not `" + e + "`");
                        "length" in e ? a(e) : i(e)
                    }
                    r && (y.settings = o(y.settings || {}, r));
                    return k;

                    function i(e) {
                        a(e.plugins), e.settings && (r = o(r || {}, e.settings))
                    }

                    function u(e) {
                        if ("function" == typeof e) c(e);
                        else {
                            if ("object" != typeof e) throw new Error("Expected usable value, not `" + e + "`");
                            "length" in e ? c.apply(null, e) : i(e)
                        }
                    }

                    function a(e) {
                        var t = -1;
                        if (null == e);
                        else {
                            if ("object" != typeof e || !("length" in e)) throw new Error("Expected a list of plugins, not `" + e + "`");
                            for (; ++t < e.length;) u(e[t])
                        }
                    }

                    function c(e, t) {
                        var r = w(e);
                        r ? (l(r[1]) && l(t) && (t = o(!0, r[1], t)), r[1] = t) : n.push(s.call(arguments))
                    }
                }, k.parse = function(e) {
                    var t, n = a(e);
                    if (b(), d("parse", t = k.Parser), p(t, "parse")) return new t(String(n), n).parse();
                    return t(String(n), n)
                }, k.stringify = function(e, t) {
                    var n, r = a(t);
                    if (b(), h("stringify", n = k.Compiler), m(e), p(n, "compile")) return new n(e, r).compile();
                    return n(e, r)
                }, k.run = S, k.runSync = function(e, t) {
                    var n, i;
                    return S(e, t, o), v("runSync", "run", i), n;

                    function o(e, t) {
                        i = !0, n = t, r(e)
                    }
                }, k.process = C, k.processSync = function(e) {
                    var t, n;
                    return b(), d("processSync", k.Parser), h("processSync", k.Compiler), C(t = a(e), i), v("processSync", "process", n), t;

                    function i(e) {
                        n = !0, r(e)
                    }
                }, k;

                function k() {
                    for (var t = e(), r = -1; ++r < n.length;) t.use.apply(null, n[r]);
                    return t.data(o(!0, {}, y)), t
                }

                function b() {
                    var e, r;
                    if (t) return k;
                    for (; ++x < n.length;) !1 !== (e = n[x])[1] && (!0 === e[1] && (e[1] = void 0), "function" == typeof(r = e[0].apply(k, e.slice(1))) && i.use(r));
                    return t = !0, x = 1 / 0, k
                }

                function w(e) {
                    for (var t = -1; ++t < n.length;)
                        if (n[t][0] === e) return n[t]
                }

                function S(e, t, n) {
                    if (m(e), b(), n || "function" != typeof t || (n = t, t = null), !n) return new Promise(r);

                    function r(r, o) {
                        i.run(e, a(t), (function(t, i, l) {
                            i = i || e, t ? o(t) : r ? r(i) : n(null, i, l)
                        }))
                    }
                    r(null, n)
                }

                function C(e, t) {
                    if (b(), d("process", k.Parser), h("process", k.Compiler), !t) return new Promise(n);

                    function n(n, r) {
                        var i = a(e);
                        f.run(k, {
                            file: i
                        }, (function(e) {
                            e ? r(e) : n ? n(i) : t(null, i)
                        }))
                    }
                    n(null, t)
                }
            }().freeze();
            var s = [].slice,
                c = {}.hasOwnProperty,
                f = u().use((function(e, t) {
                    t.tree = e.parse(t.file)
                })).use((function(e, t, n) {
                    e.run(t.tree, t.file, (function(e, r, i) {
                        e ? n(e) : (t.tree = r, t.file = i, n())
                    }))
                })).use((function(e, t) {
                    var n = e.stringify(t.tree, t.file);
                    null == n || ("string" == typeof n || i(n) ? t.file.contents = n : t.file.result = n)
                }));

            function p(e, t) {
                return "function" == typeof e && e.prototype && (function(e) {
                    var t;
                    for (t in e) return !0;
                    return !1
                }(e.prototype) || t in e.prototype)
            }

            function d(e, t) {
                if ("function" != typeof t) throw new Error("Cannot `" + e + "` without `Parser`")
            }

            function h(e, t) {
                if ("function" != typeof t) throw new Error("Cannot `" + e + "` without `Compiler`")
            }

            function g(e, t) {
                if (t) throw new Error("Cannot invoke `" + e + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.")
            }

            function m(e) {
                if (!e || "string" != typeof e.type) throw new Error("Expected node, got `" + e + "`")
            }

            function v(e, t, n) {
                if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
            }
        },
        64992: e => {
            "use strict";
            e.exports = function(e, t, n) {
                var r;
                null != n || "object" == typeof t && !Array.isArray(t) || (n = t, t = {});
                r = Object.assign({
                    type: String(e)
                }, t), Array.isArray(n) ? r.children = n : null != n && (r.value = String(n));
                return r
            }
        },
        96259: e => {
            "use strict";
            e.exports = function(e) {
                return !(e && e.position && e.position.start && e.position.start.line && e.position.start.column && e.position.end && e.position.end.line && e.position.end.column)
            }
        },
        47790: e => {
            "use strict";

            function t(e) {
                if ("string" == typeof e) return function(e) {
                    return t;

                    function t(t) {
                        return Boolean(t && t.type === e)
                    }
                }(e);
                if (null == e) return i;
                if ("object" == typeof e) return ("length" in e ? r : n)(e);
                if ("function" == typeof e) return e;
                throw new Error("Expected function, string, or object as test")
            }

            function n(e) {
                return function(t) {
                    var n;
                    for (n in e)
                        if (t[n] !== e[n]) return !1;
                    return !0
                }
            }

            function r(e) {
                var n = function(e) {
                        for (var n = [], r = e.length, i = -1; ++i < r;) n[i] = t(e[i]);
                        return n
                    }(e),
                    r = n.length;
                return function() {
                    var e = -1;
                    for (; ++e < r;)
                        if (n[e].apply(this, arguments)) return !0;
                    return !1
                }
            }

            function i() {
                return !0
            }
            e.exports = t
        },
        57328: e => {
            "use strict";

            function t(e) {
                if (null == e) return n;
                if ("string" == typeof e) return function(e) {
                    return t;

                    function t(t) {
                        return Boolean(t && t.type === e)
                    }
                }(e);
                if ("object" == typeof e) return "length" in e ? function(e) {
                    var n = [],
                        r = -1;
                    for (; ++r < e.length;) n[r] = t(e[r]);
                    return i;

                    function i() {
                        for (var e = -1; ++e < n.length;)
                            if (n[e].apply(this, arguments)) return !0;
                        return !1
                    }
                }(e) : function(e) {
                    return t;

                    function t(t) {
                        var n;
                        for (n in e)
                            if (t[n] !== e[n]) return !1;
                        return !0
                    }
                }(e);
                if ("function" == typeof e) return e;
                throw new Error("Expected function, string, or object as test")
            }

            function n() {
                return !0
            }
            e.exports = t
        },
        89225: e => {
            "use strict";
            var t = i("start"),
                n = i("end");

            function r(e) {
                return {
                    start: t(e),
                    end: n(e)
                }
            }

            function i(e) {
                return t.displayName = e, t;

                function t(t) {
                    var n = t && t.position && t.position[e] || {};
                    return {
                        line: n.line || null,
                        column: n.column || null,
                        offset: isNaN(n.offset) ? null : n.offset
                    }
                }
            }
            e.exports = r, r.start = t, r.end = n
        },
        1839: e => {
            "use strict";
            var t = {}.hasOwnProperty;

            function n(e) {
                return e && "object" == typeof e || (e = {}), i(e.line) + ":" + i(e.column)
            }

            function r(e) {
                return e && "object" == typeof e || (e = {}), n(e.start) + "-" + n(e.end)
            }

            function i(e) {
                return e && "number" == typeof e ? e : 1
            }
            e.exports = function(e) {
                if (!e || "object" != typeof e) return "";
                if (t.call(e, "position") || t.call(e, "type")) return r(e.position);
                if (t.call(e, "start") || t.call(e, "end")) return r(e);
                if (t.call(e, "line") || t.call(e, "column")) return n(e);
                return ""
            }
        },
        1112: (e, t, n) => {
            "use strict";
            e.exports = l;
            var r = n(47790),
                i = "skip",
                o = !1;

            function l(e, t, n, l) {
                var a;

                function s(e, r, c) {
                    var f, p = [];
                    return (t && !a(e, r, c[c.length - 1] || null) || (p = u(n(e, c)))[0] !== o) && e.children && p[0] !== i ? (f = u(function(e, t) {
                        var n, r = -1,
                            i = l ? -1 : 1,
                            u = (l ? e.length : r) + i;
                        for (; u > r && u < e.length;) {
                            if ((n = s(e[u], u, t))[0] === o) return n;
                            u = "number" == typeof n[1] ? n[1] : u + i
                        }
                    }(e.children, c.concat(e))), f[0] === o ? f : p) : p
                }
                "function" == typeof t && "function" != typeof n && (l = n, n = t, t = null), a = r(t), s(e, null, [])
            }

            function u(e) {
                return null !== e && "object" == typeof e && "length" in e ? e : "number" == typeof e ? [true, e] : [e]
            }
            l.CONTINUE = true, l.SKIP = i, l.EXIT = o
        },
        55372: e => {
            e.exports = function(e) {
                return e
            }
        },
        40371: (e, t, n) => {
            "use strict";
            e.exports = a;
            var r = n(57328),
                i = n(55372),
                o = !0,
                l = "skip",
                u = !1;

            function a(e, t, n, a) {
                var s, c;
                "function" == typeof t && "function" != typeof n && (a = n, n = t, t = null), c = r(t), s = a ? -1 : 1,
                    function e(r, f, p) {
                        var d, h = "object" == typeof r && null !== r ? r : {};
                        "string" == typeof h.type && (d = "string" == typeof h.tagName ? h.tagName : "string" == typeof h.name ? h.name : void 0, g.displayName = "node (" + i(h.type + (d ? "<" + d + ">" : "")) + ")");
                        return g;

                        function g() {
                            var i, d, h = p.concat(r),
                                g = [];
                            if ((!t || c(r, f, p[p.length - 1] || null)) && (g = function(e) {
                                    if (null !== e && "object" == typeof e && "length" in e) return e;
                                    if ("number" == typeof e) return [o, e];
                                    return [e]
                                }(n(r, p)), g[0] === u)) return g;
                            if (r.children && g[0] !== l)
                                for (d = (a ? r.children.length : -1) + s; d > -1 && d < r.children.length;) {
                                    if (i = e(r.children[d], d, h)(), i[0] === u) return i;
                                    d = "number" == typeof i[1] ? i[1] : d + s
                                }
                            return g
                        }
                    }(e, null, [])()
            }
            a.CONTINUE = true, a.SKIP = l, a.EXIT = u
        },
        66279: (e, t, n) => {
            "use strict";
            e.exports = u;
            var r = n(1112),
                i = r.CONTINUE,
                o = r.SKIP,
                l = r.EXIT;

            function u(e, t, n, i) {
                "function" == typeof t && "function" != typeof n && (i = n, n = t, t = null), r(e, t, (function(e, t) {
                    var r = t[t.length - 1],
                        i = r ? r.children.indexOf(e) : null;
                    return n(e, i, r)
                }), i)
            }
            u.CONTINUE = i, u.SKIP = o, u.EXIT = l
        },
        99273: (e, t, n) => {
            "use strict";
            e.exports = u;
            var r = n(40371),
                i = r.CONTINUE,
                o = r.SKIP,
                l = r.EXIT;

            function u(e, t, n, i) {
                "function" == typeof t && "function" != typeof n && (i = n, n = t, t = null), r(e, t, (function(e, t) {
                    var r = t[t.length - 1],
                        i = r ? r.children.indexOf(e) : null;
                    return n(e, i, r)
                }), i)
            }
            u.CONTINUE = i, u.SKIP = o, u.EXIT = l
        },
        67540: (e, t, n) => {
            "use strict";
            var r = n(1839);

            function i() {}
            e.exports = l, i.prototype = Error.prototype, l.prototype = new i;
            var o = l.prototype;

            function l(e, t, n) {
                var i, o, l;
                "string" == typeof t && (n = t, t = null), i = function(e) {
                    var t, n = [null, null];
                    "string" == typeof e && (-1 === (t = e.indexOf(":")) ? n[1] = e : (n[0] = e.slice(0, t), n[1] = e.slice(t + 1)));
                    return n
                }(n), o = r(t) || "1:1", l = {
                    start: {
                        line: null,
                        column: null
                    },
                    end: {
                        line: null,
                        column: null
                    }
                }, t && t.position && (t = t.position), t && (t.start ? (l = t, t = t.start) : l.start = t), e.stack && (this.stack = e.stack, e = e.message), this.message = e, this.name = o, this.reason = e, this.line = t ? t.line : null, this.column = t ? t.column : null, this.location = l, this.source = i[0], this.ruleId = i[1]
            }
            o.file = "", o.name = "", o.reason = "", o.message = "", o.stack = "", o.fatal = null, o.column = null, o.line = null
        },
        59228: (e, t, n) => {
            "use strict";
            e.exports = n(36581)
        },
        36581: (e, t, n) => {
            "use strict";
            var r = n(67540),
                i = n(52013);
            e.exports = i, i.prototype.message = function(e, t, n) {
                var i = new r(e, t, n);
                this.path && (i.name = this.path + ":" + i.name, i.file = this.path);
                return i.fatal = !1, this.messages.push(i), i
            }, i.prototype.info = function() {
                var e = this.message.apply(this, arguments);
                return e.fatal = null, e
            }, i.prototype.fail = function() {
                var e = this.message.apply(this, arguments);
                throw e.fatal = !0, e
            }
        },
        42873: (e, t) => {
            "use strict";

            function n(e) {
                var t, n;
                return r(e), t = 47 === e.charCodeAt(0), n = function(e, t) {
                    var n, r, i = "",
                        o = 0,
                        l = -1,
                        u = 0,
                        a = -1;
                    for (; ++a <= e.length;) {
                        if (a < e.length) n = e.charCodeAt(a);
                        else {
                            if (47 === n) break;
                            n = 47
                        }
                        if (47 === n) {
                            if (l === a - 1 || 1 === u);
                            else if (l !== a - 1 && 2 === u) {
                                if (i.length < 2 || 2 !== o || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2))
                                    if (i.length > 2) {
                                        if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                            r < 0 ? (i = "", o = 0) : o = (i = i.slice(0, r)).length - 1 - i.lastIndexOf("/"), l = a, u = 0;
                                            continue
                                        }
                                    } else if (i.length) {
                                    i = "", o = 0, l = a, u = 0;
                                    continue
                                }
                                t && (i = i.length ? i + "/.." : "..", o = 2)
                            } else i.length ? i += "/" + e.slice(l + 1, a) : i = e.slice(l + 1, a), o = a - l - 1;
                            l = a, u = 0
                        } else 46 === n && u > -1 ? u++ : u = -1
                    }
                    return i
                }(e, !t), n.length || t || (n = "."), n.length && 47 === e.charCodeAt(e.length - 1) && (n += "/"), t ? "/" + n : n
            }

            function r(e) {
                if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
            }
            t.basename = function(e, t) {
                var n, i, o, l, u = 0,
                    a = -1;
                if (void 0 !== t && "string" != typeof t) throw new TypeError('"ext" argument must be a string');
                if (r(e), n = e.length, void 0 === t || !t.length || t.length > e.length) {
                    for (; n--;)
                        if (47 === e.charCodeAt(n)) {
                            if (o) {
                                u = n + 1;
                                break
                            }
                        } else a < 0 && (o = !0, a = n + 1);
                    return a < 0 ? "" : e.slice(u, a)
                }
                if (t === e) return "";
                i = -1, l = t.length - 1;
                for (; n--;)
                    if (47 === e.charCodeAt(n)) {
                        if (o) {
                            u = n + 1;
                            break
                        }
                    } else i < 0 && (o = !0, i = n + 1), l > -1 && (e.charCodeAt(n) === t.charCodeAt(l--) ? l < 0 && (a = n) : (l = -1, a = i));
                u === a ? a = i : a < 0 && (a = e.length);
                return e.slice(u, a)
            }, t.dirname = function(e) {
                var t, n, i;
                if (r(e), !e.length) return ".";
                t = -1, i = e.length;
                for (; --i;)
                    if (47 === e.charCodeAt(i)) {
                        if (n) {
                            t = i;
                            break
                        }
                    } else n || (n = !0);
                return t < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === t && 47 === e.charCodeAt(0) ? "//" : e.slice(0, t)
            }, t.extname = function(e) {
                var t, n, i, o = -1,
                    l = 0,
                    u = -1,
                    a = 0;
                r(e), i = e.length;
                for (; i--;)
                    if (47 !== (n = e.charCodeAt(i))) u < 0 && (t = !0, u = i + 1), 46 === n ? o < 0 ? o = i : 1 !== a && (a = 1) : o > -1 && (a = -1);
                    else if (t) {
                    l = i + 1;
                    break
                }
                if (o < 0 || u < 0 || 0 === a || 1 === a && o === u - 1 && o === l + 1) return "";
                return e.slice(o, u)
            }, t.join = function() {
                var e, t = -1;
                for (; ++t < arguments.length;) r(arguments[t]), arguments[t] && (e = void 0 === e ? arguments[t] : e + "/" + arguments[t]);
                return void 0 === e ? "." : n(e)
            }, t.sep = "/"
        },
        84681: (e, t) => {
            "use strict";
            t.cwd = function() {
                return "/"
            }
        },
        31693: e => {
            e.exports = function() {
                for (var e = {}, n = 0; n < arguments.length; n++) {
                    var r = arguments[n];
                    for (var i in r) t.call(r, i) && (e[i] = r[i])
                }
                return e
            };
            var t = Object.prototype.hasOwnProperty
        },
        44214: e => {
            "use strict";
            e.exports = JSON.parse('{"strip":["script"],"clobberPrefix":"user-content-","clobber":["name","id"],"ancestors":{"tbody":["table"],"tfoot":["table"],"thead":["table"],"td":["table"],"th":["table"],"tr":["table"]},"protocols":{"href":["http","https","mailto","xmpp","irc","ircs"],"cite":["http","https"],"src":["http","https"],"longDesc":["http","https"]},"tagNames":["h1","h2","h3","h4","h5","h6","br","b","i","strong","em","a","pre","code","img","tt","div","ins","del","sup","sub","p","ol","ul","table","thead","tbody","tfoot","blockquote","dl","dt","dd","kbd","q","samp","var","hr","ruby","rt","rp","li","tr","td","th","s","strike","summary","details","caption","figure","figcaption","abbr","bdo","cite","dfn","mark","small","span","time","wbr","input"],"attributes":{"a":["href"],"img":["src","longDesc"],"input":[["type","checkbox"],["disabled",true]],"li":[["className","task-list-item"]],"div":["itemScope","itemType"],"blockquote":["cite"],"del":["cite"],"ins":["cite"],"q":["cite"],"*":["abbr","accept","acceptCharset","accessKey","action","align","alt","ariaDescribedBy","ariaHidden","ariaLabel","ariaLabelledBy","axis","border","cellPadding","cellSpacing","char","charOff","charSet","checked","clear","cols","colSpan","color","compact","coords","dateTime","dir","disabled","encType","htmlFor","frame","headers","height","hrefLang","hSpace","isMap","id","label","lang","maxLength","media","method","multiple","name","noHref","noShade","noWrap","open","prompt","readOnly","rel","rev","rows","rowSpan","rules","scope","selected","shape","size","span","start","summary","tabIndex","target","title","type","useMap","vAlign","value","vSpace","width","itemProp"]},"required":{"input":{"type":"checkbox","disabled":true}}}')
        },
        89359: e => {
            "use strict";
            e.exports = JSON.parse('{"classId":"classID","dataType":"datatype","itemId":"itemID","strokeDashArray":"strokeDasharray","strokeDashOffset":"strokeDashoffset","strokeLineCap":"strokeLinecap","strokeLineJoin":"strokeLinejoin","strokeMiterLimit":"strokeMiterlimit","typeOf":"typeof","xLinkActuate":"xlinkActuate","xLinkArcRole":"xlinkArcrole","xLinkHref":"xlinkHref","xLinkRole":"xlinkRole","xLinkShow":"xlinkShow","xLinkTitle":"xlinkTitle","xLinkType":"xlinkType","xmlnsXLink":"xmlnsXlink"}')
        },
        22416: e => {
            "use strict";
            e.exports = JSON.parse('{"html":"http://www.w3.org/1999/xhtml","mathml":"http://www.w3.org/1998/Math/MathML","svg":"http://www.w3.org/2000/svg","xlink":"http://www.w3.org/1999/xlink","xml":"http://www.w3.org/XML/1998/namespace","xmlns":"http://www.w3.org/2000/xmlns/"}')
        }
    }
]);