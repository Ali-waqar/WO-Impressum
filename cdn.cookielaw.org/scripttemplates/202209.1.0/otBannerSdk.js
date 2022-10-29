/** 
 * onetrust-banner-sdk
 * v202209.1.0
 * by OneTrust LLC
 * Copyright 2022 
 */
! function() {
    "use strict";
    var o = function(e, t) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            })(e, t)
    };
    var k, e, r = function() {
        return (r = Object.assign || function(e) {
            for (var t, o = 1, n = arguments.length; o < n; o++)
                for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }).apply(this, arguments)
    };

    function d(i, s, a, l) {
        return new(a = a || Promise)(function(e, t) {
            function o(e) {
                try {
                    r(l.next(e))
                } catch (e) {
                    t(e)
                }
            }

            function n(e) {
                try {
                    r(l.throw(e))
                } catch (e) {
                    t(e)
                }
            }

            function r(t) {
                t.done ? e(t.value) : new a(function(e) {
                    e(t.value)
                }).then(o, n)
            }
            r((l = l.apply(i, s || [])).next())
        })
    }

    function g(o, n) {
        var r, i, s, e, a = {
            label: 0,
            sent: function() {
                if (1 & s[0]) throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return e = {
            next: t(0),
            throw: t(1),
            return: t(2)
        }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }), e;

        function t(t) {
            return function(e) {
                return function(t) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, i && (s = 2 & t[0] ? i.return : t[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, t[1])).done) return s;
                        switch (i = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                            case 0:
                            case 1:
                                s = t;
                                break;
                            case 4:
                                return a.label++, {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = t[1], t = [0];
                                continue;
                            case 7:
                                t = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                    a.label = t[1];
                                    break
                                }
                                if (6 === t[0] && a.label < s[1]) {
                                    a.label = s[1], s = t;
                                    break
                                }
                                if (s && a.label < s[2]) {
                                    a.label = s[2], a.ops.push(t);
                                    break
                                }
                                s[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        t = n.call(o, a)
                    } catch (e) {
                        t = [6, e], i = 0
                    } finally {
                        r = s = 0
                    }
                    if (5 & t[0]) throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }([t, e])
            }
        }
    }

    function u() {
        for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
        var n = Array(e),
            r = 0;
        for (t = 0; t < o; t++)
            for (var i = arguments[t], s = 0, a = i.length; s < a; s++, r++) n[r] = i[s];
        return n
    }(e = k = k || {})[e.ACTIVE = 0] = "ACTIVE", e[e.ALWAYS_ACTIVE = 1] = "ALWAYS_ACTIVE", e[e.EXPIRED = 2] = "EXPIRED", e[e.NO_CONSENT = 3] = "NO_CONSENT", e[e.OPT_OUT = 4] = "OPT_OUT", e[e.PENDING = 5] = "PENDING", e[e.WITHDRAWN = 6] = "WITHDRAWN";
    var t = setTimeout;

    function l(e) {
        return Boolean(e && void 0 !== e.length)
    }

    function n() {}

    function i(e) {
        if (!(this instanceof i)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], C(e, this)
    }

    function s(o, n) {
        for (; 3 === o._state;) o = o._value;
        0 !== o._state ? (o._handled = !0, i._immediateFn(function() {
            var e = 1 === o._state ? n.onFulfilled : n.onRejected;
            if (null !== e) {
                var t;
                try {
                    t = e(o._value)
                } catch (e) {
                    return void c(n.promise, e)
                }
                a(n.promise, t)
            } else(1 === o._state ? a : c)(n.promise, o._value)
        })) : o._deferreds.push(n)
    }

    function a(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var o = e.then;
                if (e instanceof i) return t._state = 3, t._value = e, void p(t);
                if ("function" == typeof o) return void C((n = o, r = e, function() {
                    n.apply(r, arguments)
                }), t)
            }
            t._state = 1, t._value = e, p(t)
        } catch (e) {
            c(t, e)
        }
        var n, r
    }

    function c(e, t) {
        e._state = 2, e._value = t, p(e)
    }

    function p(e) {
        2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() {
            e._handled || i._unhandledRejectionFn(e._value)
        });
        for (var t = 0, o = e._deferreds.length; t < o; t++) s(e, e._deferreds[t]);
        e._deferreds = null
    }

    function h(e, t, o) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = o
    }

    function C(e, t) {
        var o = !1;
        try {
            e(function(e) {
                o || (o = !0, a(t, e))
            }, function(e) {
                o || (o = !0, c(t, e))
            })
        } catch (e) {
            if (o) return;
            o = !0, c(t, e)
        }
    }

    function y() {}
    i.prototype.catch = function(e) {
        return this.then(null, e)
    }, i.prototype.then = function(e, t) {
        var o = new this.constructor(n);
        return s(this, new h(e, t, o)), o
    }, i.prototype.finally = function(t) {
        var o = this.constructor;
        return this.then(function(e) {
            return o.resolve(t()).then(function() {
                return e
            })
        }, function(e) {
            return o.resolve(t()).then(function() {
                return o.reject(e)
            })
        })
    }, i.all = function(t) {
        return new i(function(n, r) {
            if (!l(t)) return r(new TypeError("Promise.all accepts an array"));
            var i = Array.prototype.slice.call(t);
            if (0 === i.length) return n([]);
            var s = i.length;

            function a(t, e) {
                try {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var o = e.then;
                        if ("function" == typeof o) return void o.call(e, function(e) {
                            a(t, e)
                        }, r)
                    }
                    i[t] = e, 0 == --s && n(i)
                } catch (e) {
                    r(e)
                }
            }
            for (var e = 0; e < i.length; e++) a(e, i[e])
        })
    }, i.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === i ? t : new i(function(e) {
            e(t)
        })
    }, i.reject = function(o) {
        return new i(function(e, t) {
            t(o)
        })
    }, i.race = function(r) {
        return new i(function(e, t) {
            if (!l(r)) return t(new TypeError("Promise.race accepts an array"));
            for (var o = 0, n = r.length; o < n; o++) i.resolve(r[o]).then(e, t)
        })
    }, i._immediateFn = "function" == typeof setImmediate ? function(e) {
        setImmediate(e)
    } : function(e) {
        t(e, 0)
    }, i._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    };
    var f, v, m, b, P, S, A, T, I, L, _, V, E, B, w, x, O, G, W, N, D, H, F, R, q, M, U, j, z, K, J, Y, X, Q, $, Z, ee, te, oe, ne, re, ie, se, ae, le, ce, de, ue, pe, he, ge, Ce, ye, fe, ve, ke, me, be, Pe, Se, Ae, Te, Ie, Le = new(y.prototype.initPolyfill = function() {
        this.initArrayIncludesPolyfill(), this.initObjectAssignPolyfill(), this.initArrayFillPolyfill(), this.initClosestPolyfill(), this.initIncludesPolyfill(), this.initEndsWithPoly(), this.initCustomEventPolyfill(), this.promisesPolyfil()
    }, y.prototype.initArrayIncludesPolyfill = function() {
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(e) {
                for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
                if (null == this) throw new TypeError("Array.prototype.includes called on null or undefined");
                var n = Object(this),
                    r = parseInt(n.length, 10) || 0;
                if (0 === r) return !1;
                var i, s, a = t[1] || 0;
                for (0 <= a ? i = a : (i = r + a) < 0 && (i = 0); i < r;) {
                    if (e === (s = n[i]) || e != e && s != s) return !0;
                    i++
                }
                return !1
            },
            writable: !0,
            configurable: !0
        })
    }, y.prototype.initEndsWithPoly = function() {
        String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
            value: function(e, t) {
                return (void 0 === t || t > this.length) && (t = this.length), this.substring(t - e.length, t) === e
            },
            writable: !0,
            configurable: !0
        })
    }, y.prototype.initClosestPolyfill = function() {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || Object.defineProperty(Element.prototype, "closest", {
            value: function(e) {
                var t = this;
                do {
                    if (t.matches(e)) return t;
                    t = t.parentElement || t.parentNode
                } while (null !== t && 1 === t.nodeType);
                return null
            },
            writable: !0,
            configurable: !0
        })
    }, y.prototype.initIncludesPolyfill = function() {
        String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
            value: function(e, t) {
                return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
            },
            writable: !0,
            configurable: !0
        })
    }, y.prototype.initObjectAssignPolyfill = function() {
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(e, t) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                for (var o = Object(e), n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    if (null != r)
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (o[i] = r[i])
                }
                return o
            },
            writable: !0,
            configurable: !0
        })
    }, y.prototype.initArrayFillPolyfill = function() {
        Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
            value: function(e) {
                if (null == this) throw new TypeError("this is null or not defined");
                for (var t = Object(this), o = t.length >>> 0, n = arguments[1] >> 0, r = n < 0 ? Math.max(o + n, 0) : Math.min(n, o), i = arguments[2], s = void 0 === i ? o : i >> 0, a = s < 0 ? Math.max(o + s, 0) : Math.min(s, o); r < a;) t[r] = e, r++;
                return t
            }
        })
    }, y.prototype.initCustomEventPolyfill = function() {
        if ("function" == typeof window.CustomEvent) return !1;

        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var o = document.createEvent("CustomEvent");
            return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o
        }
        e.prototype = window.Event.prototype, window.CustomEvent = e
    }, y.prototype.insertViewPortTag = function() {
        var e = document.querySelector('meta[name="viewport"]'),
            t = document.createElement("meta");
        t.name = "viewport", t.content = "width=device-width, initial-scale=1", e || document.head.appendChild(t)
    }, y.prototype.promisesPolyfil = function() {
        "undefined" == typeof Promise && (window.Promise = i)
    }, y);
    (v = f = f || {})[v.Unknown = 0] = "Unknown", v[v.BannerCloseButton = 1] = "BannerCloseButton", v[v.ConfirmChoiceButton = 2] = "ConfirmChoiceButton", v[v.AcceptAll = 3] = "AcceptAll", v[v.RejectAll = 4] = "RejectAll", v[v.BannerSaveSettings = 5] = "BannerSaveSettings", v[v.ContinueWithoutAcceptingButton = 6] = "ContinueWithoutAcceptingButton", (b = m = m || {})[b.Banner = 1] = "Banner", b[b.PC = 2] = "PC", b[b.API = 3] = "API", (S = P = P || {}).AcceptAll = "AcceptAll", S.RejectAll = "RejectAll", S.UpdateConsent = "UpdateConsent", (T = A = A || {})[T.Purpose = 1] = "Purpose", T[T.SpecialFeature = 2] = "SpecialFeature", (L = I = I || {}).Legal = "legal", L.UserFriendly = "user_friendly", (V = _ = _ || {}).Top = "top", V.Bottom = "bottom", (B = E = E || {})[B.Banner = 0] = "Banner", B[B.PrefCenterHome = 1] = "PrefCenterHome", B[B.VendorList = 2] = "VendorList", B[B.CookieList = 3] = "CookieList", (x = w = w || {})[x.RightArrow = 39] = "RightArrow", x[x.LeftArrow = 37] = "LeftArrow", (G = O = O || {}).AfterTitle = "AfterTitle", G.AfterDescription = "AfterDescription", G.AfterDPD = "AfterDPD", (N = W = W || {}).PlusMinus = "Plusminus", N.Caret = "Caret", N.NoAccordion = "NoAccordion", (H = D = D || {}).Consent = "Consent", H.LI = "LI", H.AddtlConsent = "AddtlConsent", (R = F = F || {}).Iab1Pub = "eupubconsent", R.Iab2Pub = "eupubconsent-v2", R.Iab1Eu = "euconsent", R.Iab2Eu = "euconsent-v2", (M = q = q || {})[M.Disabled = 0] = "Disabled", M[M.Consent = 1] = "Consent", M[M.LegInt = 2] = "LegInt", (j = U = U || {})[j["Banner - Allow All"] = 1] = "Banner - Allow All", j[j["Banner - Reject All"] = 2] = "Banner - Reject All", j[j["Banner - Close"] = 3] = "Banner - Close", j[j["Preference Center - Allow All"] = 4] = "Preference Center - Allow All", j[j["Preference Center - Reject All"] = 5] = "Preference Center - Reject All", j[j["Preference Center - Confirm"] = 6] = "Preference Center - Confirm", (K = z = z || {}).Active = "1", K.InActive = "0", (Y = J = J || {}).Host = "Host", Y.GenVendor = "GenVen", (Q = X = X || {})[Q.Host = 1] = "Host", Q[Q.GenVen = 2] = "GenVen", Q[Q.HostAndGenVen = 3] = "HostAndGenVen", (Z = $ = $ || {})[Z.minDays = 1] = "minDays", Z[Z.maxDays = 30] = "maxDays", Z[Z.maxYear = 31536e3] = "maxYear", Z[Z.maxSecToDays = 86400] = "maxSecToDays", (te = ee = ee || {})[te.RTL = 0] = "RTL", te[te.LTR = 1] = "LTR", (ne = oe = oe || {})[ne.GoogleVendor = 1] = "GoogleVendor", ne[ne.GeneralVendor = 2] = "GeneralVendor", (ie = re = re || {})[ie.Days = 1] = "Days", ie[ie.Weeks = 7] = "Weeks", ie[ie.Months = 30] = "Months", ie[ie.Years = 365] = "Years", (ae = se = se || {}).Checkbox = "Checkbox", ae.Toggle = "Toggle", (ce = le = le || {}).SlideIn = "Slide_In", ce.FadeIn = "Fade_In", ce.RemoveAnimation = "Remove_Animation", (ue = de = de || {}).Link = "Link", ue.Icon = "Icon", (he = pe = pe || {}).consent = "consent", he.set = "set", (Ce = ge = ge || {}).update = "update", Ce.default = "default", Ce.ads_data_redaction = "ads_data_redaction", (fe = ye = ye || {}).analytics_storage = "analytics_storage", fe.ad_storage = "ad_storage", fe.functionality_storage = "functionality_storage", fe.personalization_storage = "personalization_storage", fe.security_storage = "security_storage", fe.region = "region", fe.wait_for_update = "wait_for_update", (ke = ve = ve || {}).granted = "granted", ke.denied = "denied", (be = me = me || {})[be.HostList = 0] = "HostList", be[be.IabVendors = 1] = "IabVendors", be[be.VendorServices = 2] = "VendorServices", (Se = Pe = Pe || {}).OBJECT_TO_LI = "ObjectToLI", Se.LI_ACTIVE_IF_LEGAL_BASIS = "LIActiveIfLegalBasis", (Te = Ae = Ae || {}).cookies = "cookies", Te.vendors = "vendors";
    var _e = "AwaitingReconsent",
        Ve = "consentId",
        Ee = "geolocation",
        Be = "interactionCount",
        we = "isIABGlobal",
        xe = "NotLandingPage",
        Oe = "isGpcEnabled",
        Ge = {
            ADDITIONAL_CONSENT_STRING: "OTAdditionalConsentString",
            ALERT_BOX_CLOSED: "OptanonAlertBoxClosed",
            OPTANON_CONSENT: "OptanonConsent",
            EU_PUB_CONSENT: "eupubconsent-v2",
            EU_CONSENT: "euconsent-v2",
            SELECTED_VARIANT: "OTVariant",
            OT_PREVIEW: "otpreview"
        },
        Ne = "CONFIRMED",
        De = "OPT_OUT",
        He = "NO_CHOICE",
        Fe = "NOTGIVEN",
        Re = "NO_OPT_OUT",
        qe = "always active",
        Me = "active",
        Ue = "inactive landingpage",
        je = "inactive",
        ze = "dnt",
        Ke = "LOCAL",
        We = "TEST",
        Je = "LOCAL_TEST",
        Ye = "data-language",
        Xe = "otCookieSettingsButton.json",
        Qe = "otCookieSettingsButtonRtl.json",
        $e = "otCenterRounded",
        Ze = "otFlat",
        et = "otFloatingRoundedCorner",
        tt = "otFloatingFlat",
        ot = "otFloatingRoundedIcon",
        nt = "otFloatingRounded",
        rt = "otChoicesBanner",
        it = "otNoBanner",
        st = "otPcCenter",
        at = "otPcList",
        lt = "otPcPanel",
        ct = "otPcPopup",
        dt = "otPcTab",
        ut = "hidebanner",
        pt = ((Ie = {})[re.Days] = "PCenterVendorListLifespanDay", Ie[re.Weeks] = "LfSpnWk", Ie[re.Months] = "PCenterVendorListLifespanMonth", Ie[re.Years] = "LfSpnYr", Ie),
        ht = "DNAC",
        gt = "Category",
        Ct = "Host",
        yt = "General Vendor",
        ft = "VendorService",
        vt = "aria-label",
        kt = "aria-hidden",
        mt = "BRANCH",
        bt = "COOKIE",
        Pt = "IAB2_FEATURE",
        St = "IAB2_PURPOSE",
        At = "IAB2_SPL_FEATURE",
        Tt = "IAB2_SPL_PURPOSE",
        It = "IAB2_STACK",
        Lt = ["IAB2_PURPOSE", "IAB2_STACK", "IAB2_FEATURE", "IAB2_SPL_PURPOSE", "IAB2_SPL_FEATURE"],
        _t = ["COOKIE", "BRANCH", "IAB2_STACK"],
        Vt = ["IAB2_PURPOSE", "IAB2_SPL_FEATURE"],
        Et = ["IAB2_FEATURE", "IAB2_SPL_PURPOSE"],
        Bt = ["IAB2_PURPOSE", "IAB2_SPL_PURPOSE", "IAB2_FEATURE", "IAB2_SPL_FEATURE"],
        wt = new function() {};

    function xt(e, t, o) {
        void 0 === o && (o = !1);

        function n(e) {
            if (!e) return null;
            var t = e.trim();
            return ";" !== t.charAt(t.length - 1) && (t += ";"), t.trim()
        }
        var i = n(e.getAttribute("style")),
            s = n(t),
            r = "";
        r = o && i ? function() {
            for (var e = i.split(";").concat(s.split(";")).filter(function(e) {
                    return 0 !== e.length
                }), t = "", o = "", n = e.length - 1; 0 <= n; n--) {
                var r = e[n].substring(0, e[n].indexOf(":")).trim();
                t.indexOf(r) < 0 && (t += r, o += e[n] + ";")
            }
            return o
        }() : s, e.setAttribute("style", r)
    }

    function Ot() {}
    var Gt, Nt = new(Ot.prototype.convertKeyValueLowerCase = function(e) {
            for (var t in e) e[t.toLowerCase()] ? e[t.toLowerCase()] = e[t].toLowerCase() : (e[t] && (e[t.toLowerCase()] = e[t].toLowerCase()), delete e[t]);
            return e
        }, Ot.prototype.arrToStr = function(e) {
            return e.toString()
        }, Ot.prototype.strToArr = function(e) {
            return e ? e.split(",") : []
        }, Ot.prototype.strToMap = function(e) {
            if (!e) return new Map;
            for (var t = new Map, o = 0, n = this.strToArr(e); o < n.length; o++) {
                var r = n[o].split(":");
                t.set(r[0], "1" === r[1])
            }
            return t
        }, Ot.prototype.empty = function(e) {
            var t = document.getElementById(e);
            if (t)
                for (; t.hasChildNodes();) t.removeChild(t.lastChild)
        }, Ot.prototype.show = function(e) {
            var t = document.getElementById(e);
            t && xt(t, "display: block;", !0)
        }, Ot.prototype.remove = function(e) {
            var t = document.getElementById(e);
            t && t.parentNode && t.parentNode.removeChild(t)
        }, Ot.prototype.appendTo = function(e, t) {
            var o, n = document.getElementById(e);
            n && ((o = document.createElement("div")).innerHTML = t, n.appendChild(o))
        }, Ot.prototype.contains = function(e, t) {
            var o;
            for (o = 0; o < e.length; o += 1)
                if (e[o].toString().toLowerCase() === t.toString().toLowerCase()) return !0;
            return !1
        }, Ot.prototype.indexOf = function(e, t) {
            var o;
            for (o = 0; o < e.length; o += 1)
                if (e[o] === t) return o;
            return -1
        }, Ot.prototype.endsWith = function(e, t) {
            return -1 !== e.indexOf(t, e.length - t.length)
        }, Ot.prototype.generateUUID = function() {
            var o = (new Date).getTime();
            return "undefined" != typeof performance && "function" == typeof performance.now && (o += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = (o + 16 * Math.random()) % 16 | 0;
                return o = Math.floor(o / 16), ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }, Ot.prototype.getActiveIdArray = function(e) {
            return e.filter(function(e) {
                return "true" === e.split(":")[1]
            }).map(function(e) {
                return parseInt(e.split(":")[0])
            })
        }, Ot.prototype.distinctArray = function(e) {
            var t = new Array;
            return e.forEach(function(e) {
                t.indexOf(e) < 0 && t.push(e)
            }), t
        }, Ot.prototype.findIndex = function(e, t) {
            for (var o = -1, n = 0; n < e.length; n++)
                if (void 0 !== e[n] && t(e[n], n)) {
                    o = n;
                    break
                }
            return o
        }, Ot.prototype.getURL = function(e) {
            var t = document.createElement("a");
            return t.href = e, t
        }, Ot.prototype.removeURLPrefixes = function(e) {
            return e.toLowerCase().replace(/(^\w+:|^)\/\//, "").replace("www.", "")
        }, Ot.prototype.removeChild = function(e) {
            if (e)
                if (e instanceof NodeList || e instanceof Array)
                    for (var t = 0; t < e.length; t++) e[t].parentElement.removeChild(e[t]);
                else e.parentElement.removeChild(e)
        }, Ot.prototype.getRelativeURL = function(e, t, o) {
            if (void 0 === o && (o = !1), t) {
                var n = "./" + e.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/").replace(".json", "");
                return o ? n : n + ".js"
            }
            return e
        }, Ot.prototype.setCheckedAttribute = function(e, t, o) {
            e && (t = document.querySelector(e)), t && (t.setAttribute("aria-checked", o.toString()), o ? t.setAttribute("checked", "") : t.removeAttribute("checked"), t.checked = o)
        }, Ot.prototype.setDisabledAttribute = function(e, t, o) {
            e && (t = document.querySelector(e)), t && (o ? t.setAttribute("disabled", o.toString()) : t.removeAttribute("disabled"))
        }, Ot.prototype.setHtmlAttributes = function(e, t) {
            for (var o in t) e.setAttribute(o, t[o]), e[o] = t[o]
        }, Ot.prototype.calculateCookieLifespan = function(e) {
            if (e < 0) return Mt.LifespanTypeText;
            var t = Math.floor(e / $.maxSecToDays);
            if (t < $.minDays) return "< 1 " + Mt.PCenterVendorListLifespanDay;
            if (t < $.maxDays) return t + " " + Mt.PCenterVendorListLifespanDays;
            var o = Math.floor(t / $.maxDays);
            return 1 === o ? o + " " + Mt.PCenterVendorListLifespanMonth : o + " " + Mt.PCenterVendorListLifespanMonths
        }, Ot.prototype.insertElement = function(e, t, o) {
            e && t && e.insertAdjacentElement(o, t)
        }, Ot.prototype.customQuerySelector = function(t) {
            return function(e) {
                return t.querySelector(e)
            }
        }, Ot.prototype.customQuerySelectorAll = function(t) {
            return function(e) {
                return t.querySelectorAll(e)
            }
        }, Ot),
        Dt = (Ht.prototype.removeAlertBox = function() {
            null !== this.getCookie(Ge.ALERT_BOX_CLOSED) && this.setCookie(Ge.ALERT_BOX_CLOSED, "", 0, !0)
        }, Ht.prototype.removeIab1 = function() {
            null !== this.getCookie(F.Iab1Pub) && this.setCookie(F.Iab1Pub, "", 0, !0)
        }, Ht.prototype.removeIab2 = function() {
            null !== this.getCookie(F.Iab2Pub) && this.setCookie(F.Iab2Pub, "", 0, !0)
        }, Ht.prototype.removeAddtlStr = function() {
            null !== this.getCookie(Ge.ADDITIONAL_CONSENT_STRING) && this.setCookie(Ge.ADDITIONAL_CONSENT_STRING, "", 0, !0)
        }, Ht.prototype.removeVariant = function() {
            null !== this.getCookie(Ge.SELECTED_VARIANT) && this.setCookie(Ge.SELECTED_VARIANT, "", 0, !0)
        }, Ht.prototype.removeOptanon = function() {
            null !== this.getCookie(Ge.OPTANON_CONSENT) && this.setCookie(Ge.OPTANON_CONSENT, "", 0, !0)
        }, Ht.prototype.removePreview = function() {
            null !== this.getCookie(Ge.OT_PREVIEW) && this.setCookie(Ge.OT_PREVIEW, "", 0, !0)
        }, Ht.prototype.writeCookieParam = function(e, t, o, n) {
            var r, i, s, a, l = {},
                c = this.getCookie(e);
            if (c)
                for (i = c.split("&"), r = 0; r < i.length; r += 1) s = i[r].split("="), l[decodeURIComponent(s[0])] = s[0] === t && n ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
            l[t] = o;
            var d = wt.moduleInitializer.TenantFeatures;
            d && d.CookieV2CookieDateTimeInISO ? l.datestamp = (new Date).toISOString() : l.datestamp = (new Date).toString(), l.version = jt.otSDKVersion, a = this.param(l), this.setCookie(e, a, Mt.ReconsentFrequencyDays)
        }, Ht.prototype.readCookieParam = function(e, t, o) {
            var n, r, i, s, a = this.getCookie(e);
            if (a) {
                for (r = {}, i = a.split("&"), n = 0; n < i.length; n += 1) s = i[n].split("="), r[decodeURIComponent(s[0])] = o ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
                return t && r[t] ? r[t] : t && !r[t] ? "" : r
            }
            return ""
        }, Ht.prototype.getCookie = function(e) {
            if (wt && wt.moduleInitializer && wt.moduleInitializer.MobileSDK) {
                var t = this.getCookieDataObj(e);
                if (t) return t.value
            }
            if (jt.isAMP && (jt.ampData = JSON.parse(localStorage.getItem(jt.dataDomainId)) || {}, jt.ampData)) return jt.ampData[e] || null;
            var o, n, r = e + "=",
                i = document.cookie.split(";");
            for (o = 0; o < i.length; o += 1) {
                for (n = i[o];
                    " " === n.charAt(0);) n = n.substring(1, n.length);
                if (0 === n.indexOf(r)) return n.substring(r.length, n.length)
            }
            return null
        }, Ht.prototype.setAmpStorage = function() {
            window.localStorage.setItem(jt.dataDomainId, JSON.stringify(jt.ampData))
        }, Ht.prototype.removeAmpStorage = function() {
            window.localStorage.removeItem(jt.dataDomainId)
        }, Ht.prototype.handleAmp = function(e, t) {
            "" !== t ? jt.ampData[e] = t : delete jt.ampData[e], 0 === Object.keys(jt.ampData).length ? this.removeAmpStorage() : this.setAmpStorage()
        }, Ht.prototype.setCookie = function(e, t, o, n, r) {
            if (void 0 === n && (n = !1), void 0 === r && (r = new Date), jt.isAMP) this.handleAmp(e, t);
            else {
                var i = void 0;
                i = o ? (r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3), "; expires=" + r.toUTCString()) : n ? "; expires=" + new Date(0).toUTCString() : "";
                var s = wt.moduleInitializer,
                    a = s && s.Domain ? s.Domain.split("/") : [],
                    l = "";
                a.length <= 1 ? a[1] = "" : l = a.slice(1).join("/");
                var c = "Samesite=Lax";
                s.CookieSameSiteNoneEnabled && (c = "Samesite=None; Secure");
                var d = s.ScriptType === We || s.ScriptType === Je;
                if (jt.isPreview || !d && !s.MobileSDK) u = t + i + "; path=/" + l + "; domain=." + a[0] + "; " + c, document.cookie = e + "=" + u;
                else {
                    var u = t + i + "; path=/; " + c;
                    s.MobileSDK ? this.setCookieDataObj({
                        name: e,
                        value: t,
                        expires: i,
                        date: r,
                        domainAndPath: a
                    }) : document.cookie = e + "=" + u
                }
            }
        }, Ht.prototype.setCookieDataObj = function(t) {
            if (t) {
                jt.otCookieData || (window.OneTrust && window.OneTrust.otCookieData ? jt.otCookieData = window.OneTrust.otCookieData : jt.otCookieData = []);
                var e = Nt.findIndex(jt.otCookieData, function(e) {
                    return e.name === t.name
                }); - 1 < e ? jt.otCookieData[e] = t : jt.otCookieData.push(t)
            }
        }, Ht.prototype.getCookieDataObj = function(t) {
            jt.otCookieData && 0 !== jt.otCookieData.length || (window.OneTrust && window.OneTrust.otCookieData ? jt.otCookieData = window.OneTrust.otCookieData : jt.otCookieData = []);
            var e = Nt.findIndex(jt.otCookieData, function(e) {
                return e.name === t
            });
            if (0 <= e) {
                var o = jt.otCookieData[e];
                if (o.date) return new Date(o.date) < new Date ? (jt.otCookieData.splice(e, 1), null) : o
            }
            return null
        }, Ht.prototype.param = function(e) {
            var t, o = "";
            for (t in e) e.hasOwnProperty(t) && ("" !== o && (o += "&"), o += t + "=" + encodeURIComponent(e[t]).replace(/%20/g, "+"));
            return o
        }, Ht);

    function Ht() {}
    var Ft = (Rt.prototype.setRegionRule = function(e) {
        this.rule = e
    }, Rt.prototype.getRegionRule = function() {
        return this.rule
    }, Rt.prototype.getRegionRuleType = function() {
        return this.multiVariantTestingEnabled && this.selectedVariant ? this.selectedVariant.TemplateType : this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition.TemplateType : this.rule.Type
    }, Rt.prototype.canUseGoogleVendors = function(e) {
        return !!e && (this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition.UseGoogleVendors : this.rule.UseGoogleVendors)
    }, Rt.prototype.initVariables = function() {
        this.consentableGrps = [], this.consentableIabGrps = [], this.iabGrps = [], this.iabGrpIdMap = {}, this.domainGrps = {}, this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        }
    }, Rt.prototype.init = function(e) {
        this.getGPCSignal(), this.initVariables();
        var t = e.DomainData;
        this.setPublicDomainData(JSON.parse(JSON.stringify(t))), this.domainDataMapper(t), this.commonDataMapper(e.CommonData), Mt.NtfyConfig = e.NtfyConfig || {}, this.setBannerName(), this.setPcName(), this.populateGPCSignal(), Mt.GoogleConsent.GCEnable && this.initGCM()
    }, Rt.prototype.getGPCSignal = function() {
        this.gpcEnabled = !0 === navigator.globalPrivacyControl
    }, Rt.prototype.isValidConsentNoticeGroup = function(e, t) {
        if (!e.ShowInPopup) return !1;
        var o = e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || e.VendorServices && e.VendorServices.length,
            n = !1,
            r = !1,
            i = !1;
        if (e && !e.Parent) {
            e.SubGroups.length && (n = e.SubGroups.some(function(e) {
                return e.GroupName && e.ShowInPopup && e.FirstPartyCookies.length
            }), r = e.SubGroups.some(function(e) {
                return e.GroupName && e.ShowInPopup && (e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length)
            }), !t || e.FirstPartyCookies.length && e.Hosts.length || (i = !e.SubGroups.some(function(e) {
                return -1 === Lt.indexOf(e.Type)
            })));
            var s = e.SubGroups.some(function(e) {
                return -1 < Lt.indexOf(e.Type)
            });
            (-1 < Lt.indexOf(e.Type) || s) && (e.ShowVendorList = !0), (e.Hosts.length || r || n) && (e.ShowHostList = !0)
        }
        return o || -1 < Lt.indexOf(e.Type) || n || r || i
    }, Rt.prototype.extractGroupIdForIabGroup = function(e) {
        return -1 < e.indexOf("ISPV2_") ? e = e.replace("ISPV2_", "") : -1 < e.indexOf("IABV2_") ? e = e.replace("IABV2_", "") : -1 < e.indexOf("IFEV2_") ? e = e.replace("IFEV2_", "") : -1 < e.indexOf("ISFV2_") && (e = e.replace("ISFV2_", "")), e
    }, Rt.prototype.populateGroups = function(e, r) {
        var i = this,
            s = {},
            a = [];
        e.forEach(function(e) {
            var t = e.CustomGroupId;
            if (void 0 !== e.HasConsentOptOut && e.IsIabPurpose || (e.HasConsentOptOut = !0), !(!r.IsIabEnabled && -1 < Lt.indexOf(e.Type) || "IAB2" === i.iabType && (e.Type === St || e.Type === It) && !e.HasConsentOptOut && !e.HasLegIntOptOut || e.Type === At && !e.HasConsentOptOut) && (t !== qt.purposeOneGrpId || e.ShowInPopup || (i.purposeOneTreatment = !0), i.grpContainLegalOptOut = e.HasLegIntOptOut || i.grpContainLegalOptOut, e.SubGroups = [], e.Parent ? a.push(e) : s[t] = e, "IAB2" === i.iabType && -1 < Lt.indexOf(e.Type))) {
                var o = i.extractGroupIdForIabGroup(t);
                i.iabGrpIdMap[t] = o, e.IabGrpId = o;
                var n = {
                    description: e.GroupDescription,
                    descriptionLegal: e.DescriptionLegal,
                    id: Number(o),
                    name: e.GroupName
                };
                switch (e.Type) {
                    case St:
                        i.iabGroups.purposes[o] = n;
                        break;
                    case Tt:
                        i.iabGroups.specialPurposes[o] = n;
                        break;
                    case Pt:
                        i.iabGroups.features[o] = n;
                        break;
                    case At:
                        i.iabGroups.specialFeatures[o] = n
                }
            }
        }), a.forEach(function(e) {
            s[e.Parent] && e.ShowInPopup && (e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || -1 < Lt.indexOf(e.Type)) && s[e.Parent].SubGroups.push(e)
        });
        var t = [];
        return Object.keys(s).forEach(function(e) {
            i.isValidConsentNoticeGroup(s[e], r.IsIabEnabled) && (s[e].SubGroups.sort(function(e, t) {
                return e.Order - t.Order
            }), t.push(s[e]))
        }), this.initGrpVar(t), t.sort(function(e, t) {
            return e.Order - t.Order
        })
    }, Rt.prototype.initGrpVar = function(e) {
        var o = this,
            n = !0,
            r = !0;
        e.forEach(function(e) {
            u([e], e.SubGroups).forEach(function(e) {
                var t;
                e.Type !== bt && e.Type !== St && e.Type !== At || (o.domainGrps[e.PurposeId.toLowerCase()] = e.CustomGroupId), -1 < _t.indexOf(e.Type) && o.consentableGrps.push(e), -1 < Vt.indexOf(e.Type) && o.consentableIabGrps.push(e), -1 === _t.indexOf(e.Type) && o.iabGrps.push(e), o.gpcEnabled && e.IsGpcEnabled && (e.Status = je), (t = o.DNTEnabled && e.IsDntEnabled ? ze : e.Status.toLowerCase()) !== Me && t !== Ue && t !== ze || (n = !1), t !== Ue && t !== qe && (r = !1), o.gpcForAGrpEnabled || (o.gpcForAGrpEnabled = e.IsGpcEnabled)
            })
        }), this.isOptInMode = n, this.isSoftOptInMode = r
    }, Rt.prototype.domainDataMapper = function(e) {
        var t = {
            AriaClosePreferences: e.AriaClosePreferences,
            AriaOpenPreferences: e.AriaOpenPreferences,
            AriaPrivacy: e.AriaPrivacy,
            CenterRounded: e.CenterRounded,
            Flat: e.Flat,
            FloatingFlat: e.FloatingFlat,
            FloatingRounded: e.FloatingRounded,
            FloatingRoundedCorner: e.FloatingRoundedCorner,
            FloatingRoundedIcon: e.FloatingRoundedIcon,
            VendorLevelOptOut: e.IsIabEnabled,
            AboutCookiesText: e.AboutCookiesText,
            AboutLink: e.AboutLink,
            AboutText: e.AboutText,
            ActiveText: e.ActiveText,
            AddLinksToCookiepedia: e.AddLinksToCookiepedia,
            AlertAllowCookiesText: e.AlertAllowCookiesText,
            AlertCloseText: e.AlertCloseText,
            AlertLayout: e.AlertLayout,
            AlertMoreInfoText: e.AlertMoreInfoText,
            AlertNoticeText: e.AlertNoticeText,
            AllowAllText: e.PreferenceCenterConfirmText,
            AlwaysActiveText: e.AlwaysActiveText,
            BannerAdditionalDescPlacement: e.BannerAdditionalDescPlacement,
            BannerAdditionalDescription: e.BannerAdditionalDescription,
            BannerCloseButtonText: e.BannerCloseButtonText,
            BannerFeatureDescription: e.BannerFeatureDescription,
            BannerFeatureTitle: e.BannerFeatureTitle,
            BannerIABPartnersLink: e.BannerIABPartnersLink,
            BannerInformationDescription: e.BannerInformationDescription,
            BannerInformationTitle: e.BannerInformationTitle,
            BannerNonIABVendorListText: e.BannerNonIABVendorListText,
            BannerPosition: e.BannerPosition,
            BannerPurposeDescription: e.BannerPurposeDescription,
            BannerPurposeTitle: e.BannerPurposeTitle,
            BannerRejectAllButtonText: e.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: e.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: e.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: e.BannerShowRejectAllButton,
            BannerTitle: e.BannerTitle,
            BCloseButtonType: e.BCloseButtonType,
            BContinueText: e.BContinueText,
            BCookiePolicyLinkScreenReader: e.BCookiePolicyLinkScreenReader,
            BnrLogoAria: e.BnrLogoAria,
            BImprintLinkScreenReader: e.BImprintLinkScreenReader,
            BInitialFocus: e.BInitialFocus,
            BInitialFocusLinkAndButton: e.BInitialFocusLinkAndButton,
            BRejectConsentType: e.BRejectConsentType,
            BSaveBtnTxt: e.BSaveBtnText,
            BShowImprintLink: e.BShowImprintLink,
            BShowPolicyLink: e.BShowPolicyLink,
            BShowSaveBtn: e.BShowSaveBtn,
            cctId: e.cctId,
            ChoicesBanner: e.ChoicesBanner,
            CloseShouldAcceptAllCookies: e.CloseShouldAcceptAllCookies,
            CloseText: e.CloseText,
            ConfirmText: e.ConfirmText,
            ConsentModel: {
                Name: e.ConsentModel
            },
            CookieListDescription: e.CookieListDescription,
            CookieListTitle: e.CookieListTitle,
            CookieSettingButtonText: e.CookieSettingButtonText,
            CookiesUsedText: e.CookiesUsedText,
            CustomJs: e.CustomJs,
            firstPartyTxt: e.CookieFirstPartyText,
            FooterDescriptionText: e.FooterDescriptionText,
            ForceConsent: e.ForceConsent,
            GeneralVendors: e.GeneralVendors,
            GeneralVendorsEnabled: e.PCenterUseGeneralVendorsToggle,
            GenVenOptOut: e.PCenterAllowVendorOptout,
            GlobalRestrictionEnabled: e.GlobalRestrictionEnabled,
            GlobalRestrictions: e.GlobalRestrictions,
            GoogleConsent: {
                GCAdStorage: e.GCAdStorage,
                GCAnalyticsStorage: e.GCAnalyticsStorage,
                GCEnable: e.GCEnable,
                GCFunctionalityStorage: e.GCFunctionalityStorage,
                GCPersonalizationStorage: e.GCPersonalizationStorage,
                GCRedactEnable: e.GCRedactEnable,
                GCSecurityStorage: e.GCSecurityStorage,
                GCWaitTime: e.GCWaitTime
            },
            GroupGenVenListLabel: e.PCenterGeneralVendorThirdPartyCookiesText,
            Groups: this.populateGroups(e.Groups, e),
            HideToolbarCookieList: e.HideToolbarCookieList,
            IabType: e.IabType,
            InactiveText: e.InactiveText,
            IsConsentLoggingEnabled: e.IsConsentLoggingEnabled,
            IsIabEnabled: e.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: e.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: e.IsLifespanEnabled,
            Language: e.Language,
            LastReconsentDate: e.LastReconsentDate,
            LfSpanSecs: e.PCLifeSpanSecs,
            LfSpnWk: e.PCLifeSpanWk,
            LfSpnWks: e.PCLifeSpanWks,
            LfSpnYr: e.PCLifeSpanYr,
            LfSpnYrs: e.PCLifeSpanYrs,
            LifespanDurationText: e.LifespanDurationText,
            MainInfoText: e.MainInfoText,
            MainText: e.MainText,
            ManagePreferenceText: e.PreferenceCenterManagePreferencesText,
            NewVendorsInactiveEnabled: e.NewVendorsInactiveEnabled,
            NewWinTxt: e.PreferenceCenterMoreInfoScreenReader,
            NextPageAcceptAllCookies: e.NextPageAcceptAllCookies,
            NextPageCloseBanner: e.NextPageCloseBanner,
            NoBanner: e.NoBanner,
            OnClickAcceptAllCookies: e.OnClickAcceptAllCookies,
            OnClickCloseBanner: e.OnClickCloseBanner,
            OverriddenVendors: e.OverriddenVendors,
            OverridenGoogleVendors: e.OverridenGoogleVendors,
            PCAccordionStyle: W.Caret,
            PCActiveText: e.PCActiveText,
            PCCloseButtonType: e.PCCloseButtonType,
            PCContinueText: e.PCContinueText,
            PCCookiePolicyLinkScreenReader: e.PCCookiePolicyLinkScreenReader,
            PCCookiePolicyText: e.PCCookiePolicyText,
            PCenterAllowAllConsentText: e.PCenterAllowAllConsentText,
            PCenterApplyFiltersText: e.PCenterApplyFiltersText,
            PCenterBackText: e.PCenterBackText,
            PCenterCancelFiltersText: e.PCenterCancelFiltersText,
            PCenterClearFiltersText: e.PCenterClearFiltersText,
            PCenterCookiesListText: e.PCenterCookiesListText,
            PCenterEnableAccordion: e.PCenterEnableAccordion,
            PCenterFilterText: e.PCenterFilterText,
            PCenterGeneralVendorsText: e.PCenterGeneralVendorsText,
            PCenterRejectAllButtonText: e.PCenterRejectAllButtonText,
            PCenterSelectAllVendorsText: e.PCenterSelectAllVendorsText,
            PCenterShowRejectAllButton: e.PCenterShowRejectAllButton,
            PCenterUserIdDescriptionText: e.PCenterUserIdDescriptionText,
            PCenterUserIdNotYetConsentedText: e.PCenterUserIdNotYetConsentedText,
            PCenterUserIdTimestampTitleText: e.PCenterUserIdTimestampTitleText,
            PCenterUserIdTitleText: e.PCenterUserIdTitleText,
            PCenterVendorListDescText: e.PCenterVendorListDescText,
            PCenterVendorListDisclosure: e.PCenterVendorListDisclosure,
            PCenterVendorListLifespan: e.PCenterVendorListLifespan,
            PCenterVendorListLifespanDay: e.PCenterVendorListLifespanDay,
            PCenterVendorListLifespanDays: e.PCenterVendorListLifespanDays,
            PCenterVendorListLifespanMonth: e.PCenterVendorListLifespanMonth,
            PCenterVendorListLifespanMonths: e.PCenterVendorListLifespanMonths,
            PCenterVendorListNonCookieUsage: e.PCenterVendorListNonCookieUsage,
            PCenterVendorListStorageDomain: e.PCenterVendorListStorageDomain,
            PCVLSDomainsUsed: e.PCVLSDomainsUsed,
            PCVLSUse: e.PCVLSUse,
            PCenterVendorListStorageIdentifier: e.PCenterVendorListStorageIdentifier,
            PCenterVendorListStoragePurposes: e.PCenterVendorListStoragePurposes,
            PCenterVendorListStorageType: e.PCenterVendorListStorageType,
            PCenterVendorsListText: e.PCenterVendorsListText,
            PCenterViewPrivacyPolicyText: e.PCenterViewPrivacyPolicyText,
            PCGoogleVendorsText: e.PCGoogleVendorsText,
            PCGrpDescLinkPosition: e.PCGrpDescLinkPosition,
            PCGrpDescType: e.PCGrpDescType,
            PCGVenPolicyTxt: e.PCGeneralVendorsPolicyText,
            PCIABVendorsText: e.PCIABVendorsText,
            PCInactiveText: e.PCInactiveText,
            PCLogoAria: e.PCLogoScreenReader,
            PCOpensCookiesDetailsAlert: e.PCOpensCookiesDetailsAlert,
            PCenterVendorListScreenReader: e.PCenterVendorListScreenReader,
            PCOpensVendorDetailsAlert: e.PCOpensVendorDetailsAlert,
            PCenterDynamicRenderingEnable: e.PCenterDynamicRenderingEnable,
            PCTemplateUpgrade: e.PCTemplateUpgrade,
            PCVendorFullLegalText: e.PCVendorFullLegalText,
            PCViewCookiesText: e.PCViewCookiesText,
            PCLayout: {
                Center: e.Center,
                List: e.List,
                Panel: e.Panel,
                Popup: e.Popup,
                Tab: e.Tab
            },
            PCenterVendorListLinkText: e.PCenterVendorListLinkText,
            PCenterVendorListLinkAriaLabel: e.PCenterVendorListLinkAriaLabel,
            PreferenceCenterPosition: e.PreferenceCenterPosition,
            Publisher: e.publisher,
            PublisherCC: e.PublisherCC,
            ReconsentFrequencyDays: e.ReconsentFrequencyDays,
            ScrollAcceptAllCookies: e.ScrollAcceptAllCookies,
            ScrollCloseBanner: e.ScrollCloseBanner,
            ShowAlertNotice: e.ShowAlertNotice,
            showBannerCloseButton: e.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: e.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: e.ThirdPartyCookieListText,
            thirdPartyTxt: e.CookieThirdPartyText,
            UseGoogleVendors: this.canUseGoogleVendors(e.PCTemplateUpgrade),
            VendorConsentModel: e.VendorConsentModel,
            VendorListText: e.VendorListText,
            Vendors: e.Vendors,
            PCCategoryStyle: e.PCCategoryStyle,
            PCShowAlwaysActiveToggle: e.PCShowAlwaysActiveToggle,
            VendorServiceConfig: {
                PCVSOptOut: e.PCVSOptOut,
                PCVSEnable: e.PCVSEnable,
                PCVSExpandCategory: e.PCVSExpandCategory,
                PCVSExpandGroup: e.PCVSExpandGroup,
                PCVSCategoryView: e.PCVSCategoryView,
                PCVSNameText: e.PCVSNameText,
                PCVSAllowAllText: e.PCVSAllowAllText,
                PCVSListTitle: e.PCVSListTitle,
                PCVSParentCompanyText: e.PCVSParentCompanyText,
                PCVSAddressText: e.PCVSAddressText,
                PCVSDefaultCategoryText: e.PCVSDefaultCategoryText,
                PCVSDefaultDescriptionText: e.PCVSDefaultDescriptionText,
                PCVSDPOEmailText: e.PCVSDPOEmailText,
                PCVSDPOLinkText: e.PCVSDPOLinkText,
                PCVSPrivacyPolicyLinkText: e.PCVSPrivacyPolicyLinkText,
                PCVSCookiePolicyLinkText: e.PCVSCookiePolicyLinkText,
                PCVSOptOutLinkText: e.PCVSOptOutLinkText,
                PCVSLegalBasisText: e.PCVSLegalBasisText
            },
            PCenterImprintLinkScreenReader: e.PCenterImprintLinkScreenReader,
            PCenterImprintLinkText: e.PCenterImprintLinkText,
            PCenterImprintLinkUrl: e.PCenterImprintLinkUrl
        };
        this.setDomainCommonDataDefaults(t, e), this.setDomainPCDataDefaults(t, e), e.PCTemplateUpgrade && (e.Center || e.Panel) && (t.PCAccordionStyle = e.PCAccordionStyle), t.PCenterEnableAccordion = e.PCAccordionStyle !== W.NoAccordion, this.legIntSettings = e.LegIntSettings || {}, void 0 === this.legIntSettings.PAllowLI && (this.legIntSettings.PAllowLI = !0), wt.moduleInitializer.MobileSDK || (this.pagePushedDown = e.BannerPushesDownPage), Mt = r(r({}, Mt), t)
    }, Rt.prototype.setDomainCommonDataDefaults = function(e, t) {
        e.AdvancedAnalyticsCategory = t.AdvancedAnalyticsCategory || "", e.BannerDPDDescription = t.BannerDPDDescription || [], e.BannerDPDDescriptionFormat = t.BannerDPDDescriptionFormat || "", e.BannerDPDTitle = t.BannerDPDTitle || "", e.CategoriesText = t.CategoriesText || "Categories", e.CookiesText = t.CookiesText || "Cookies", e.LifespanText = t.LifespanText || "Lifespan", e.LifespanTypeText = t.LifespanTypeText || "Session", e.PCenterConsentText = t.PCenterConsentText || "Consent"
    }, Rt.prototype.setDomainPCDataDefaults = function(e, t) {
        e.PCenterCookieListFilterAria = t.PCenterCookieListFilterAria || "Filter", e.PCenterCookieListSearch = t.PCenterCookieListSearch || "Search", e.PCenterCookieSearchAriaLabel = t.PCenterCookieSearchAriaLabel || "Cookie list search", e.PCenterFilterAppliedAria = t.PCenterFilterAppliedAria || "Applied", e.PCenterFilterClearedAria = t.PCenterFilterClearedAria || "Filters Cleared", e.PCenterLegIntColumnHeader = t.PCenterLegIntColumnHeader || "Legitimate Interest", e.PCenterLegitInterestText = t.PCenterLegitInterestText || "Legitimate Interest", e.PCenterVendorListFilterAria = t.PCenterVendorListFilterAria || "Filter", e.PCenterVendorListSearch = t.PCenterVendorListSearch || "Search", e.PCenterVendorSearchAriaLabel = t.PCenterVendorSearchAriaLabel || "Vendor list search", e.PCFirstPartyCookieListText = t.PCFirstPartyCookieListText || "First Party Cookies", e.PCShowConsentLabels = !(!t.Tab || !t.PCTemplateUpgrade) && t.PCShowConsentLabels, e.PCShowPersistentCookiesHoverButton = t.PCShowPersistentCookiesHoverButton || !1
    }, Rt.prototype.commonDataMapper = function(e) {
        var t = {
            iabThirdPartyConsentUrl: e.IabThirdPartyCookieUrl,
            optanonHideAcceptButton: e.OptanonHideAcceptButton,
            optanonHideCookieSettingButton: e.OptanonHideCookieSettingButton,
            optanonStyle: e.OptanonStyle,
            optanonStaticContentLocation: e.OptanonStaticContentLocation,
            bannerCustomCSS: e.BannerCustomCSS.replace(/\\n/g, ""),
            pcCustomCSS: e.PCCustomCSS.replace(/\\n/g, ""),
            textColor: e.TextColor,
            buttonColor: e.ButtonColor,
            buttonTextColor: e.ButtonTextColor,
            bannerMPButtonColor: e.BannerMPButtonColor,
            bannerMPButtonTextColor: e.BannerMPButtonTextColor,
            backgroundColor: e.BackgroundColor,
            bannerAccordionBackgroundColor: e.BannerAccordionBackgroundColor,
            BContinueColor: e.BContinueColor,
            PCContinueColor: e.PCContinueColor,
            pcTextColor: e.PcTextColor,
            pcButtonColor: e.PcButtonColor,
            pcButtonTextColor: e.PcButtonTextColor,
            pcAccordionBackgroundColor: e.PcAccordionBackgroundColor,
            pcLinksTextColor: e.PcLinksTextColor,
            bannerLinksTextColor: e.BannerLinksTextColor,
            pcEnableToggles: e.PcEnableToggles,
            pcBackgroundColor: e.PcBackgroundColor,
            pcMenuColor: e.PcMenuColor,
            pcMenuHighLightColor: e.PcMenuHighLightColor,
            legacyBannerLayout: e.LegacyBannerLayout,
            optanonLogo: e.OptanonLogo,
            oneTrustFtrLogo: e.OneTrustFooterLogo,
            optanonCookieDomain: e.OptanonCookieDomain,
            cookiePersistentLogo: e.CookiePersistentLogo,
            optanonGroupIdPerformanceCookies: e.OptanonGroupIdPerformanceCookies,
            optanonGroupIdFunctionalityCookies: e.OptanonGroupIdFunctionalityCookies,
            optanonGroupIdTargetingCookies: e.OptanonGroupIdTargetingCookies,
            optanonGroupIdSocialCookies: e.OptanonGroupIdSocialCookies,
            optanonShowSubGroupCookies: e.ShowSubGroupCookies,
            useRTL: e.UseRTL,
            showBannerCookieSettings: e.ShowBannerCookieSettings,
            showBannerAcceptButton: e.ShowBannerAcceptButton,
            showCookieList: e.ShowCookieList,
            allowHostOptOut: e.AllowHostOptOut,
            CookiesV2NewCookiePolicy: e.CookiesV2NewCookiePolicy,
            cookieListTitleColor: e.CookieListTitleColor,
            cookieListGroupNameColor: e.CookieListGroupNameColor,
            cookieListTableHeaderColor: e.CookieListTableHeaderColor,
            CookieListTableHeaderBackgroundColor: e.CookieListTableHeaderBackgroundColor,
            cookieListPrimaryColor: e.CookieListPrimaryColor,
            cookieListCustomCss: e.CookieListCustomCss,
            pcShowCookieHost: e.PCShowCookieHost,
            pcShowCookieDuration: e.PCShowCookieDuration,
            pcShowCookieType: e.PCShowCookieType,
            pcShowCookieCategory: e.PCShowCookieCategory,
            pcShowCookieDescription: e.PCShowCookieDescription,
            ConsentIntegration: e.ConsentIntegration,
            ConsentPurposesText: e.BConsentPurposesText || "Consent Purposes",
            FeaturesText: e.BFeaturesText || "Features",
            LegitimateInterestPurposesText: e.BLegitimateInterestPurposesText || "Legitimate Interest Purposes",
            ConsentText: e.BConsentText || "Consent",
            LegitInterestText: e.BLegitInterestText || "Legit. Interest",
            pcDialogClose: e.PCDialogClose || "dialog closed",
            pCFooterLogoUrl: e.PCFooterLogoUrl,
            SpecialFeaturesText: e.BSpecialFeaturesText || "Special Features",
            SpecialPurposesText: e.BSpecialPurposesText || "Special Purposes",
            pcCListName: e.PCCListName || "Name",
            pcCListHost: e.PCCListHost || "Host",
            pcCListDuration: e.PCCListDuration || "Duration",
            pcCListType: e.PCCListType || "Type",
            pcCListCategory: e.PCCListCategory || "Category",
            pcCListDescription: e.PCCListDescription || "Description",
            IabLegalTextUrl: e.IabLegalTextUrl,
            pcLegIntButtonColor: e.PcLegIntButtonColor,
            pcLegIntButtonTextColor: e.PcLegIntButtonTextColor,
            PCenterExpandToViewText: e.PCenterExpandToViewText,
            BCategoryContainerColor: e.BCategoryContainerColor,
            BCategoryStyleColor: e.BCategoryStyleColor,
            BLineBreakColor: e.BLineBreakColor,
            BSaveBtnColor: e.BSaveBtnColor,
            BCategoryStyle: e.BCategoryStyle,
            BAnimation: e.BAnimation,
            BFocusBorderColor: e.BFocusBorderColor,
            PCFocusBorderColor: e.PCFocusBorderColor,
            BnrLogo: e.BnrLogo
        };
        Mt = r(r({}, Mt), t), this.pubDomainData.CookiesV2NewCookiePolicy = e.CookiesV2NewCookiePolicy
    }, Rt.prototype.setPublicDomainData = function(r) {
        this.pubDomainData = {
            AboutCookiesText: r.AboutCookiesText,
            AboutLink: r.AboutLink,
            AboutText: r.AboutText,
            ActiveText: r.ActiveText,
            AddLinksToCookiepedia: r.AddLinksToCookiepedia,
            AlertAllowCookiesText: r.AlertAllowCookiesText,
            AlertCloseText: r.AlertCloseText,
            AlertLayout: r.AlertLayout,
            AlertMoreInfoText: r.AlertMoreInfoText,
            AlertNoticeText: r.AlertNoticeText,
            AllowAllText: r.PreferenceCenterConfirmText,
            AlwaysActiveText: r.AlwaysActiveText,
            BAnimation: r.BAnimation,
            BannerCloseButtonText: r.BannerCloseButtonText,
            BannerDPDDescription: r.BannerDPDDescription || [],
            BannerDPDDescriptionFormat: r.BannerDPDDescriptionFormat || "",
            BannerDPDTitle: r.BannerDPDTitle || "",
            BannerFeatureDescription: r.BannerFeatureDescription,
            BannerFeatureTitle: r.BannerFeatureTitle,
            BannerIABPartnersLink: r.BannerIABPartnersLink,
            BannerInformationDescription: r.BannerInformationDescription,
            BannerInformationTitle: r.BannerInformationTitle,
            BannerPosition: r.BannerPosition,
            BannerPurposeDescription: r.BannerPurposeDescription,
            BannerPurposeTitle: r.BannerPurposeTitle,
            BannerRejectAllButtonText: r.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: r.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: r.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: r.BannerShowRejectAllButton,
            BannerTitle: r.BannerTitle,
            BCategoryContainerColor: r.BCategoryContainerColor,
            BCategoryStyle: r.BCategoryStyle,
            BCategoryStyleColor: r.BCategoryStyleColor,
            BCloseButtonType: r.BCloseButtonType,
            BContinueText: r.BContinueText,
            BInitialFocus: r.BInitialFocus,
            BInitialFocusLinkAndButton: r.BInitialFocusLinkAndButton,
            BLineBreakColor: r.BLineBreakColor,
            BRejectConsentType: r.BRejectConsentType,
            BSaveBtnColor: r.BSaveBtnColor,
            BSaveBtnTxt: r.BSaveBtnText,
            BShowSaveBtn: r.BShowSaveBtn,
            CategoriesText: r.CategoriesText,
            cctId: r.cctId,
            ChoicesBanner: r.ChoicesBanner,
            CloseShouldAcceptAllCookies: r.CloseShouldAcceptAllCookies,
            CloseText: r.CloseText,
            ConfirmText: r.ConfirmText,
            ConsentIntegrationData: null,
            ConsentModel: {
                Name: r.ConsentModel
            },
            CookieListDescription: r.CookieListDescription,
            CookieListTitle: r.CookieListTitle,
            CookieSettingButtonText: r.CookieSettingButtonText,
            CookiesText: r.CookiesText,
            CookiesUsedText: r.CookiesUsedText,
            CustomJs: r.CustomJs,
            Domain: wt.moduleInitializer.Domain,
            FooterDescriptionText: r.FooterDescriptionText,
            ForceConsent: r.ForceConsent,
            GeneralVendors: r.GeneralVendors,
            GoogleConsent: {
                GCAdStorage: r.GCAdStorage,
                GCAnalyticsStorage: r.GCAnalyticsStorage,
                GCEnable: r.GCEnable,
                GCFunctionalityStorage: r.GCFunctionalityStorage,
                GCPersonalizationStorage: r.GCPersonalizationStorage,
                GCRedactEnable: r.GCRedactEnable,
                GCSecurityStorage: r.GCSecurityStorage,
                GCWaitTime: r.GCWaitTime
            },
            Groups: null,
            HideToolbarCookieList: r.HideToolbarCookieList,
            IabType: r.IabType,
            InactiveText: r.InactiveText,
            IsBannerLoaded: !1,
            IsConsentLoggingEnabled: r.IsConsentLoggingEnabled,
            IsIABEnabled: r.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: r.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: r.IsLifespanEnabled,
            Language: r.Language,
            LastReconsentDate: r.LastReconsentDate,
            LifespanDurationText: r.LifespanDurationText,
            LifespanText: r.LifespanText,
            LifespanTypeText: r.LifespanTypeText,
            MainInfoText: r.MainInfoText,
            MainText: r.MainText,
            ManagePreferenceText: r.PreferenceCenterManagePreferencesText,
            NextPageAcceptAllCookies: r.NextPageAcceptAllCookies,
            NextPageCloseBanner: r.NextPageCloseBanner,
            NoBanner: r.NoBanner,
            OnClickAcceptAllCookies: r.OnClickAcceptAllCookies,
            OnClickCloseBanner: r.OnClickCloseBanner,
            OverridenGoogleVendors: r.OverridenGoogleVendors,
            PCAccordionStyle: W.Caret,
            PCCloseButtonType: r.PCCloseButtonType,
            PCContinueText: r.PCContinueText,
            PCenterAllowAllConsentText: r.PCenterAllowAllConsentText,
            PCenterApplyFiltersText: r.PCenterApplyFiltersText,
            PCenterBackText: r.PCenterBackText,
            PCenterCancelFiltersText: r.PCenterCancelFiltersText,
            PCenterClearFiltersText: r.PCenterClearFiltersText,
            PCenterCookieSearchAriaLabel: r.PCenterCookieSearchAriaLabel || "Cookie list search",
            PCenterCookiesListText: r.PCenterCookiesListText,
            PCenterEnableAccordion: r.PCenterEnableAccordion,
            PCenterExpandToViewText: r.PCenterExpandToViewText,
            PCenterFilterAppliedAria: r.PCenterFilterAppliedAria || "Applied",
            PCenterFilterClearedAria: r.PCenterFilterClearedAria || "Filters Cleared",
            PCenterFilterText: r.PCenterFilterText,
            PCenterRejectAllButtonText: r.PCenterRejectAllButtonText,
            PCenterSelectAllVendorsText: r.PCenterSelectAllVendorsText,
            PCenterShowRejectAllButton: r.PCenterShowRejectAllButton,
            PCenterUserIdDescriptionText: r.PCenterUserIdDescriptionText,
            PCenterUserIdNotYetConsentedText: r.PCenterUserIdNotYetConsentedText,
            PCenterUserIdTimestampTitleText: r.PCenterUserIdTimestampTitleText,
            PCenterUserIdTitleText: r.PCenterUserIdTitleText,
            PCenterVendorListDescText: r.PCenterVendorListDescText,
            PCenterVendorSearchAriaLabel: r.PCenterVendorSearchAriaLabel || "Vendor list search",
            PCenterVendorsListText: r.PCenterVendorsListText,
            PCenterViewPrivacyPolicyText: r.PCenterViewPrivacyPolicyText,
            PCFirstPartyCookieListText: r.PCFirstPartyCookieListText,
            PCGoogleVendorsText: r.PCGoogleVendorsText,
            PCGrpDescLinkPosition: r.PCGrpDescLinkPosition,
            PCGrpDescType: r.PCGrpDescType,
            PCIABVendorsText: r.PCIABVendorsText,
            PCLogoAria: r.PCLogoScreenReader,
            PCOpensCookiesDetailsAlert: r.PCOpensCookiesDetailsAlert,
            PCenterVendorListScreenReader: r.PCenterVendorListScreenReader,
            PCOpensVendorDetailsAlert: r.PCOpensVendorDetailsAlert,
            PCShowPersistentCookiesHoverButton: r.PCShowPersistentCookiesHoverButton,
            PCenterDynamicRenderingEnable: r.PCenterDynamicRenderingEnable,
            PCTemplateUpgrade: r.PCTemplateUpgrade,
            PCVendorFullLegalText: r.PCVendorFullLegalText,
            PCViewCookiesText: r.PCViewCookiesText,
            PCLayout: {
                Center: r.Center,
                List: r.List,
                Panel: r.Panel,
                Popup: r.Popup,
                Tab: r.Tab
            },
            PCenterVendorListLinkText: r.PCenterVendorListLinkText,
            PCenterVendorListLinkAriaLabel: r.PCenterVendorListLinkAriaLabel,
            PCenterImprintLinkScreenReader: r.PCenterImprintLinkScreenReader,
            PCenterImprintLinkText: r.PCenterImprintLinkText,
            PCenterImprintLinkUrl: r.PCenterImprintLinkUrl,
            PreferenceCenterPosition: r.PreferenceCenterPosition,
            ScrollAcceptAllCookies: r.ScrollAcceptAllCookies,
            ScrollCloseBanner: r.ScrollCloseBanner,
            ShowAlertNotice: r.ShowAlertNotice,
            showBannerCloseButton: r.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: r.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: r.ThirdPartyCookieListText,
            UseGoogleVendors: this.canUseGoogleVendors(r.PCTemplateUpgrade),
            VendorConsentModel: r.VendorConsentModel,
            VendorLevelOptOut: r.IsIabEnabled,
            VendorListText: r.VendorListText,
            CookiesV2NewCookiePolicy: !1
        }, r.PCTemplateUpgrade && (r.Center || r.Panel) && r.PCAccordionStyle !== W.NoAccordion && (this.pubDomainData.PCAccordionStyle = r.PCAccordionStyle), this.pubDomainData.PCenterEnableAccordion = r.PCAccordionStyle !== W.NoAccordion;
        var i = [];
        r.Groups.forEach(function(e) {
            var t, o;
            if (r.IsIabEnabled || !e.IsIabPurpose) {
                e.Cookies = JSON.parse(JSON.stringify(e.FirstPartyCookies));
                var n = null === (o = e.Hosts) || void 0 === o ? void 0 : o.reduce(function(e, t) {
                    return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
                }, []);
                (t = e.Cookies).push.apply(t, n), i.push(e)
            }
        }), this.pubDomainData.Groups = i
    }, Rt.prototype.setBannerScriptElement = function(e) {
        this.bannerScriptElement = e, this.setDomainElementAttributes()
    }, Rt.prototype.setGCMcallback = function() {
        window.otEventListeners && window.otEventListeners.length && window.otEventListeners.forEach(function(e) {
            e && "consent.changed" === e.event && (qt.gcmUpdateCallback = e.listener)
        })
    }, Rt.prototype.setDomainElementAttributes = function() {
        this.bannerScriptElement && (this.bannerScriptElement.hasAttribute("data-document-language") && this.setUseDocumentLanguage("true" === this.bannerScriptElement.getAttribute("data-document-language")), this.bannerScriptElement.hasAttribute("data-ignore-ga") && (this.ignoreGoogleAnlyticsCall = "true" === this.bannerScriptElement.getAttribute("data-ignore-ga")), this.bannerScriptElement.hasAttribute("data-ignore-html") && (this.ignoreInjectingHtmlCss = "true" === this.bannerScriptElement.getAttribute("data-ignore-html")))
    }, Rt.prototype.setUseDocumentLanguage = function(e) {
        this.useDocumentLanguage = e
    }, Rt.prototype.setPcName = function() {
        var e = Mt.PCLayout;
        e.Center ? this.pcName = st : e.Panel ? this.pcName = lt : e.Popup ? this.pcName = ct : e.List ? this.pcName = at : e.Tab && (this.pcName = dt)
    }, Rt.prototype.setBannerName = function() {
        Mt.Flat ? this.bannerName = Ze : Mt.FloatingRoundedCorner ? this.bannerName = et : Mt.FloatingFlat ? this.bannerName = tt : Mt.FloatingRounded ? this.bannerName = nt : Mt.FloatingRoundedIcon ? this.bannerName = ot : Mt.CenterRounded ? this.bannerName = $e : Mt.ChoicesBanner ? this.bannerName = rt : Mt.NoBanner && (this.bannerName = it)
    }, Rt.prototype.populateGPCSignal = function() {
        var e = Gt.readCookieParam(Ge.OPTANON_CONSENT, Oe),
            t = this.gpcForAGrpEnabled && this.gpcEnabled ? "1" : "0";
        this.gpcValueChanged = e ? e != t : this.gpcForAGrpEnabled, this.gpcForAGrpEnabled && Gt.writeCookieParam(Ge.OPTANON_CONSENT, Oe, t)
    }, Rt.prototype.initGCM = function() {
        var o = [];
        Object.keys(this.rule.States).forEach(function(t) {
            qt.rule.States[t].forEach(function(e) {
                o.push((t + "-" + e).toUpperCase())
            })
        });
        var e = qt.rule.Countries.map(function(e) {
            return e.toUpperCase()
        });
        qt.gcmCountries = e.concat(o)
    }, Rt);

    function Rt() {
        var t = this;
        this.DNTEnabled = "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack, this.gpcEnabled = !1, this.gpcForAGrpEnabled = !1, this.pagePushedDown = !1, this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        }, this.iabType = null, this.grpContainLegalOptOut = !1, this.purposeOneTreatment = !1, this.ignoreInjectingHtmlCss = !1, this.ignoreGoogleAnlyticsCall = !1, this.mobileOnlineURL = [], this.iabGrpIdMap = {}, this.iabGrps = [], this.consentableGrps = [], this.consentableIabGrps = [], this.domainGrps = {}, this.thirdPartyiFrameLoaded = !1, this.thirdPartyiFrameResolve = null, this.thirdPartyiFramePromise = new Promise(function(e) {
            t.thirdPartyiFrameResolve = e
        }), this.isOptInMode = !1, this.isSoftOptInMode = !1, this.gpcValueChanged = !1, this.conditionalLogicEnabled = !1, this.allConditionsFailed = !1, this.canUseConditionalLogic = !1, this.gtmUpdatedinStub = !1, this.gcmDevIdSet = !1, this.purposeOneGrpId = "IABV2_1"
    }
    var qt, Mt = {};

    function Ut() {
        this.otSDKVersion = "202209.1.0", this.isAMP = !1, this.ampData = {}, this.otCookieData = window.OneTrust && window.OneTrust.otCookieData || [], this.syncRequired = !1, this.isIabSynced = !1, this.isGacSynced = !1, this.grpsSynced = [], this.syncedValidGrp = !1, this.groupsConsent = [], this.initialGroupsConsent = [], this.hostsConsent = [], this.initialHostConsent = [], this.genVendorsConsent = {}, this.vsConsent = new Map, this.initialGenVendorsConsent = {}, this.vendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        }, this.initialVendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        }, this.oneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        }, this.initialOneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        }, this.addtlVendors = {
            vendorConsent: [],
            vendorSelected: {}
        }, this.initialAddtlVendors = {
            vendorConsent: [],
            vendorSelected: {}
        }, this.addtlConsentVersion = "1~", this.initialAddtlVendorsList = {}, this.isAddtlConsent = !1, this.currentGlobalFilteredList = [], this.filterByIABCategories = [], this.filterByCategories = [], this.hosts = {
            hostTemplate: null,
            hostCookieTemplate: null
        }, this.generalVendors = {
            gvTemplate: null,
            gvCookieTemplate: null
        }, this.oneTrustAlwaysActiveHosts = [], this.alwaysActiveGenVendors = [], this.softOptInGenVendors = [], this.optInGenVendors = [], this.optanonHostList = [], this.srcExecGrps = [], this.htmlExecGrps = [], this.srcExecGrpsTemp = [], this.htmlExecGrpsTemp = [], this.isPCVisible = !1, this.dataGroupState = [], this.userLocation = {
            country: "",
            state: ""
        }, this.vendorsSetting = {}, this.dsParams = {}, this.isV2Stub = !1, this.fireOnetrustGrp = !1, this.showVendorService = !1, this.showGeneralVendors = !1, this.genVenOptOutEnabled = !1, this.vsIsActiveAndOptOut = !1, this.bAsset = {}, this.pcAsset = {}, this.csBtnAsset = {}, this.cStyles = {}, this.vendorDomInit = !1, this.genVendorDomInit = !1, this.syncNtfyContent = {}, this.ntfyRequired = !1, this.skipAddingHTML = !1, this.bnrAnimationInProg = !1, this.isPreview = !1, this.geoFromUrl = "", this.hideBanner = !1, this.setAttributePolyfillIsActive = !1, this.storageBaseURL = "", this.isKeyboardUser = !1, this.customerStyles = new Map
    }
    var jt = new(Ut.prototype.getVendorsInDomain = function() {
            var e;
            if (!jt._vendorsInDomain) {
                var t = new Map,
                    o = null != (e = Mt.Groups) ? e : [];
                jt.setVendorServicesMap(o, t), jt._vendorsInDomain = t
            }
            return jt._vendorsInDomain
        }, Ut.prototype.setVendorServicesMap = function(e, t) {
            for (var o, n = 0, r = e; n < r.length; n++) {
                var i = r[n];
                i.SubGroups && 0 < i.SubGroups.length && jt.setVendorServicesMap(i.SubGroups, t);
                for (var s = 0, a = null != (o = i.VendorServices) ? o : []; s < a.length; s++) {
                    var l = a[s],
                        c = Object.assign({}, i);
                    delete c.VendorServices, l.groupRef = c, t.set(l.CustomVendorServiceId, l)
                }
            }
        }, Ut.prototype.clearVendorsInDomain = function() {
            jt._vendorsInDomain = null
        }, Ut),
        zt = (Kt.insertAfter = function(e, t) {
            t.parentNode.insertBefore(e, t.nextSibling)
        }, Kt.insertBefore = function(e, t) {
            t.parentNode.insertBefore(e, t)
        }, Kt.inArray = function(e, t) {
            return t.indexOf(e)
        }, Kt.ajax = function(e) {
            var t, o, n, r, i, s, a = null,
                l = new XMLHttpRequest;
            t = e.type, o = e.url, e.dataType, n = e.contentType, r = e.data, i = e.success, a = e.error, s = e.sync, l.open(t, o, !s), l.setRequestHeader("Content-Type", n), l.onload = function() {
                if (200 <= this.status && this.status < 400) {
                    var e = JSON.parse(this.responseText);
                    i(e)
                } else a({
                    message: "Error Loading Data",
                    statusCode: this.status
                })
            }, l.onerror = function(e) {
                a(e)
            }, "post" === t.toLowerCase() || "put" === t.toLowerCase() ? l.send(r) : l.send()
        }, Kt.prevNextHelper = function(o, e, n) {
            var r = [];

            function i(e, t, o) {
                t[e] && o ? o.includes(".") ? (t[e].classList[0] || t[e].classList.value && t[e].classList.value.includes(o.split(".")[1])) && r.push(t[e]) : o.includes("#") ? t[e].id === o.split("#")[1] && r.push(t[e]) : t[e].tagName === document.createElement(o.trim()).tagName && r.push(t[e]) : t[e] && r.push(t[e])
            }
            return "string" == typeof e ? Array.prototype.forEach.call(document.querySelectorAll(e), function(e, t) {
                i(o, e, n)
            }) : i(o, e, n), r
        }, Kt.browser = function() {
            var e, t, o;
            return navigator.sayswho = (t = navigator.userAgent, o = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(o[1]) ? "IE " + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "") : "Chrome" === o[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e.slice(1).join(" ").replace("OPR", "Opera") : (o = o[2] ? [o[1], o[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && o.splice(1, 1, e[1]), o.join(" "))), {
                version: parseInt(navigator.sayswho.split(" ")[1]),
                type: navigator.sayswho.split(" ")[0],
                userAgent: navigator.userAgent
            }
        }, Kt.isNodeList = function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object NodeList]" === t || "[object Array]" === t
        }, Kt.prototype.fadeOut = function(e) {
            var t = this;
            if (void 0 === e && (e = 60), 1 <= this.el.length)
                for (var o = 0; o < this.el.length; o++) {
                    var n = "\n                    visibility: hidden;\n                    opacity: 0;\n                    transition: visibility 0s " + e + "ms, opacity " + e + "ms linear;\n                ";
                    xt(this.el[o], n, !0)
                }
            var r = setInterval(function() {
                if (1 <= t.el.length)
                    for (var e = 0; e < t.el.length; e++) t.el[e].style.opacity <= 0 && (xt(t.el[e], "display: none;", !0), clearInterval(r), "optanon-popup-bg" === t.el[e].id && t.el[e].removeAttribute("style"))
            }, e);
            return this
        }, Kt.prototype.hide = function() {
            if (1 <= this.el.length)
                for (var e = 0; e < this.el.length; e++) xt(this.el[e], "display: none;", !0);
            else Kt.isNodeList(this.el) || xt(this.el, "display: none;", !0);
            return this
        }, Kt.prototype.show = function(e) {
            if (void 0 === e && (e = "block"), 1 <= this.el.length)
                for (var t = 0; t < this.el.length; t++) xt(this.el[t], "display: " + e + ";", !0);
            else Kt.isNodeList(this.el) || xt(this.el, "display: " + e + ";", !0);
            return this
        }, Kt.prototype.remove = function() {
            if (1 <= this.el.length)
                for (var e = 0; e < this.el.length; e++) this.el[e].parentNode.removeChild(this.el[e]);
            else this.el.parentNode.removeChild(this.el);
            return this
        }, Kt.prototype.css = function(e) {
            if (e)
                if (1 <= this.el.length) {
                    if (!e.includes(":")) return this.el[0].style[e];
                    for (var t = 0; t < this.el.length; t++) xt(this.el[t], e)
                } else {
                    if (!e.includes(":")) return this.el.style[e];
                    xt(this.el, e)
                }
            return this
        }, Kt.prototype.removeClass = function(e) {
            if (1 <= this.el.length)
                for (var t = 0; t < this.el.length; t++) this.el[t].classList ? this.el[t].classList.remove(e) : this.el[t].className = this.el[t].className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
            else this.el.classList ? this.el.classList.remove(e) : this.el.className = this.el.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
            return this
        }, Kt.prototype.addClass = function(e) {
            if (1 <= this.el.length)
                for (var t = 0; t < this.el.length; t++) this.el[t].classList ? this.el[t].classList.add(e) : this.el[t].className += " " + e;
            else this.el.classList ? this.el.classList.add(e) : this.el.className += " " + e;
            return this
        }, Kt.prototype.on = function(r, i, s) {
            var e = this;
            if ("string" != typeof i)
                if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r) switch (r) {
                        case "load":
                            window.onload = i;
                            break;
                        case "resize":
                            window.onresize = i;
                            break;
                        case "scroll":
                            window.onscroll = i
                    } else if (this.el && 1 <= this.el.length)
                        for (var t = 0; t < this.el.length; t++) this.el[t].addEventListener(r, i);
                    else this.el && this.el instanceof Element && this.el.addEventListener(r, i);
            else if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r) switch (r) {
                case "load":
                    window.onload = s;
                    break;
                case "resize":
                    window.onresize = s;
                    break;
                case "scroll":
                    window.onscroll = s
            } else {
                var a = function(o) {
                    var n = o.target;
                    e.el.eventExecuted = !0, Array.prototype.forEach.call(document.querySelectorAll(i), function(e, t) {
                        Yt["" + r + i] && delete Yt["" + r + i], e.addEventListener(r, s), e === n && s && s.call(e, o)
                    }), e.el && e.el[0] ? e.el[0].removeEventListener(r, a) : e.el && e.el instanceof Element && e.el.removeEventListener(r, a)
                };
                if (this.el && 1 <= this.el.length)
                    for (t = 0; t < this.el.length; t++) this.el[t].eventExecuted = !1, this.el[t].eventExecuted || this.el[t].addEventListener(r, a);
                else this.el && (this.el.eventExecuted = !1, !this.el.eventExecuted && this.el instanceof Element && (Yt["" + r + i] || (Yt["" + r + i] = !0, this.el.addEventListener(r, a))))
            }
            return this
        }, Kt.prototype.off = function(e, t) {
            if (1 <= this.el.length)
                for (var o = 0; o < this.el.length; o++) this.el[o].removeEventListener(e, t);
            else this.el.removeEventListener(e, t);
            return this
        }, Kt.prototype.one = function(t, o) {
            var n = this;
            if (1 <= this.el.length)
                for (var e = 0; e < this.el.length; e++) this.el[e].addEventListener(t, function(e) {
                    e.stopPropagation(), e.currentTarget.dataset.triggered || (o(), e.currentTarget.dataset.triggered = !0)
                });
            else {
                var r = function(e) {
                    e.stopPropagation(), o(), n.off(t, r)
                };
                this.el.addEventListener(t, r)
            }
            return this
        }, Kt.prototype.trigger = function(e) {
            var t = new CustomEvent(e, {
                customEvent: "yes"
            });
            return this.el.dispatchEvent(t), this
        }, Kt.prototype.focus = function() {
            return 1 <= this.el.length ? this.el[0].focus() : this.el.focus(), this
        }, Kt.prototype.attr = function(e, t) {
            return this.el && 1 <= this.el.length ? t ? ("class" === e ? this.addClass(t) : this.el[0].setAttribute(e, t), this) : this.el[0].getAttribute(e) : t && this.el ? ("class" === e ? this.addClass(t) : this.el.setAttribute(e, t), this) : this.el && this.el.getAttribute(e)
        }, Kt.prototype.html = function(e) {
            if (null == e) return 1 <= this.el.length ? this.el[0].innerHTML : this.el.innerHTML;
            if (1 <= this.el.length)
                for (var t = 0; t < this.el.length; t++) this.el[t].innerHTML = e;
            else this.el.innerHTML = e;
            return this
        }, Kt.prototype.append = function(o) {
            if ("string" != typeof o || o.includes("<") || o.includes(">"))
                if (Array.isArray(o)) {
                    var n = this;
                    Array.prototype.forEach.call(o, function(e, t) {
                        document.querySelector(n.selector).appendChild(new Kt(e, "ce").el)
                    })
                } else if ("string" == typeof o || Array.isArray(o))
                if ("string" == typeof this.selector) document.querySelector(this.selector).appendChild(new Kt(o, "ce").el);
                else if (this.useEl) {
                var r = document.createDocumentFragment(),
                    i = !(!o.includes("<th") && !o.includes("<td"));
                if (i) {
                    var e = o.split(" ")[0].split("<")[1];
                    r.appendChild(document.createElement(e)), r.firstChild.innerHTML = o
                }
                Array.prototype.forEach.call(this.el, function(e, t) {
                    i ? e.appendChild(r.firstChild) : e.appendChild(new Kt(o, "ce").el)
                })
            } else this.selector.appendChild(new Kt(o, "ce").el);
            else if ("string" == typeof this.selector) document.querySelector(this.selector).appendChild(o);
            else if (1 <= o.length)
                for (var t = 0; t < o.length; t++) this.selector.appendChild(o[t]);
            else this.selector.appendChild(o);
            else this.el.insertAdjacentText("beforeend", o);
            return this
        }, Kt.prototype.text = function(o) {
            if (this.el) {
                if (1 <= this.el.length) {
                    if (!o) return this.el[0].textContent;
                    Array.prototype.forEach.call(this.el, function(e, t) {
                        e.textContent = o
                    })
                } else {
                    if (!o) return this.el.textContent;
                    this.el.textContent = o
                }
                return this
            }
        }, Kt.prototype.data = function(o, n) {
            if (this.el.length < 1) return this;
            if (!(1 <= this.el.length)) return r(this.el, n);

            function r(e, t) {
                if (!t) return JSON.parse(e.getAttribute("data-" + o));
                "object" == typeof t ? e.setAttribute("data-" + o, JSON.stringify(t)) : e.setAttribute("data-" + o, t)
            }
            return Array.prototype.forEach.call(this.el, function(e, t) {
                r(e, n)
            }), this
        }, Kt.prototype.height = function(e) {
            this.el.length && (this.el = this.el[0]);
            for (var t = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-top").split("px")[0]), o = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-bottom").split("px")[0]), n = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-top").split("px")[0]), r = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-bottom").split("px")[0]), i = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("height").split("px")[0]), s = [t, o, n, r], a = 0, l = 0; l < s.length; l++) 0 < s[l] && (a += s[l]);
            if (!e) return this.selector === document ? i : this.el.clientHeight - a;
            var c = e.toString().split(parseInt(e))[1] ? e.toString().split(parseInt(e))[1] : "px",
                d = "number" == typeof e ? e : parseInt(e.toString().split(c)[0]);
            return (c && "px" === c || "%" === c || "em" === c || "rem" === c) && (0 < d ? xt(this.el, "height: " + (a + d + c) + ";", !0) : "auto" === e && xt(this.el, "height: " + e + ";", !0)), this
        }, Kt.prototype.each = function(e) {
            var t = !1;
            return void 0 === this.el.length && (this.el = [this.el], t = !0), Array.prototype.forEach.call(this.el, e), t && (this.el = this.el[0]), this
        }, Kt.prototype.is = function(e) {
            return this.el.length ? (this.el[0].matches || this.el[0].matchesSelector || this.el[0].msMatchesSelector || this.el[0].mozMatchesSelector || this.el[0].webkitMatchesSelector || this.el[0].oMatchesSelector).call(this.el[0], e) : (this.el.matches || this.el.matchesSelector || this.el.msMatchesSelector || this.el.mozMatchesSelector || this.el.webkitMatchesSelector || this.el.oMatchesSelector).call(this.el, e)
        }, Kt.prototype.filter = function(e) {
            return this.el = Array.prototype.filter.call(document.querySelectorAll(this.selector), e), this
        }, Kt.prototype.animate = function(s, a) {
            var l, c = this;
            for (var e in this.el = document.querySelector(this.selector), s) l = e,
                function() {
                    var e = parseInt(s[l]),
                        t = s[l].split(parseInt(s[l]))[1] ? s[l].split(parseInt(s[l]))[1] : "px",
                        o = "\n                      @keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      @-webkit-keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      @-moz-keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      ",
                        n = document.head.querySelector("#onetrust-style");
                    if (n ? n.innerHTML += o : ((i = document.createElement("style")).id = "onetrust-legacy-style", i.type = "text/css", i.innerHTML = o, document.head.appendChild(i)), Kt.browser().type = Kt.browser().version <= 8) {
                        var r = "top" === l ? "-webkit-animation: slide-up-custom " : "-webkit-animation: slide-down-custom " + a + "ms ease-out forwards;";
                        xt(c.el, r)
                    } else {
                        var i = "\n                        animation-name: " + ("top" === l ? "slide-up-custom" : "slide-down-custom") + ";\n                        animation-duration: " + a + "ms;\n                        animation-fill-mode: forwards;\n                        animation-timing-function: ease-out;\n                    ";
                        xt(c.el, i, !0)
                    }
                }();
            return this
        }, Kt.prototype.scrollTop = function() {
            return this.el.scrollTop
        }, Kt);

    function Kt(e, t) {
        switch (void 0 === t && (t = ""), this.selector = e, this.useEl = !1, t) {
            case "ce":
                var o = Kt.browser().type.toLowerCase(),
                    n = Kt.browser().version;
                if (n < 10 && "safari" === o || "chrome" === o && n <= 44 || n <= 40 && "firefox" === o) {
                    var r = document.implementation.createHTMLDocument();
                    r.body.innerHTML = e, this.el = r.body.children[0]
                } else {
                    var i = document.createRange().createContextualFragment(e);
                    this.el = i.firstChild
                }
                this.length = 1;
                break;
            case "":
                this.el = e === document || e === window ? document.documentElement : "string" != typeof e ? e : document.querySelectorAll(e), this.length = e === document || e === window || "string" != typeof e ? 1 : this.el.length;
                break;
            default:
                this.length = 0
        }
    }

    function Wt(e, t) {
        return void 0 === t && (t = ""), new zt(e, t)
    }
    var Jt, Yt = {},
        Xt = (Qt.prototype.addLogoUrls = function() {
            Jt.checkMobileOfflineRequest(Jt.getBannerVersionUrl()) || (qt.mobileOnlineURL.push(Jt.updateCorrectUrl(Mt.optanonLogo)), qt.mobileOnlineURL.push(Jt.updateCorrectUrl(Mt.oneTrustFtrLogo)))
        }, Qt.prototype.getCookieLabel = function(e, t, o) {
            if (void 0 === o && (o = !0), !e) return "";
            var n = e.Name;
            return t && (n = '\n                <a  class="cookie-label"\n                    href="' + (o ? "http://cookiepedia.co.uk/cookies/" : "http://cookiepedia.co.uk/host/") + e.Name + '"\n                    rel="noopener"\n                    target="_blank"\n                >\n                    ' + e.Name + '&nbsp;<span class="ot-scrn-rdr">' + Mt.NewWinTxt + "</span>\n                </a>\n            "), n
        }, Qt.prototype.getBannerSDKAssestsUrl = function() {
            return this.getBannerVersionUrl() + "/assets"
        }, Qt.prototype.getBannerVersionUrl = function() {
            var e = qt.bannerScriptElement.getAttribute("src");
            return "" + (-1 !== e.indexOf("/consent/") ? e.split("consent/")[0] + "scripttemplates/" : e.split("otSDKStub")[0]) + wt.moduleInitializer.Version
        }, Qt.prototype.checkMobileOfflineRequest = function(e) {
            return wt.moduleInitializer.MobileSDK && new RegExp("^file://", "i").test(e)
        }, Qt.prototype.updateCorrectIABUrl = function(e) {
            var t = wt.moduleInitializer.ScriptType;
            if (t === Ke || t === Je) {
                var o = Nt.getURL(e),
                    n = qt.bannerScriptElement,
                    r = n && n.getAttribute("src") ? Nt.getURL(n.getAttribute("src")) : null;
                r && o && r.hostname !== o.hostname && (e = (e = (r = "" + qt.bannerDataParentURL) + o.pathname.split("/").pop().replace(/(^\/?)/, "/")).replace(o.hostname, r.hostname))
            }
            return e
        }, Qt.prototype.updateCorrectUrl = function(e, t) {
            void 0 === t && (t = !1);
            var o = Nt.getURL(e),
                n = qt.bannerScriptElement,
                r = n && n.getAttribute("src") ? Nt.getURL(n.getAttribute("src")) : null;
            if (r && o && r.hostname !== o.hostname) {
                var i = wt.moduleInitializer.ScriptType;
                if (i === Ke || i === Je) {
                    if (t) return e;
                    e = (r = qt.bannerDataParentURL + "/" + qt.getRegionRule().Id) + o.pathname.replace(/(^\/?)/, "/")
                } else e = e.replace(o.hostname, r.hostname)
            }
            return e
        }, Qt.prototype.isBundleOrStackActive = function(n, r) {
            void 0 === r && (r = null);
            var i = jt.oneTrustIABConsent,
                s = !0;
            r = r || jt.groupsConsent;
            for (var a = 0, e = function() {
                    var t = n.SubGroups[a];
                    if (t.Type === bt)(-1 < (e = Nt.findIndex(r, function(e) {
                        return e.split(":")[0] === t.CustomGroupId
                    })) && "0" === r[e].split(":")[1] || !r.length) && (s = !1);
                    else {
                        var e, o = t.Type === At ? i.specialFeatures : i.purpose;
                        (-1 < (e = Nt.findIndex(o, function(e) {
                            return e.split(":")[0] === t.IabGrpId
                        })) && "false" === o[e].split(":")[1] || !o.length) && (s = !1)
                    }
                    a++
                }; e(), s && a < n.SubGroups.length;);
            return s
        }, Qt.prototype.otFetchOfflineFile = function(r) {
            return d(this, void 0, void 0, function() {
                var t, o, n;
                return g(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return r = r.replace(".json", ".js"), t = r.split("/"), o = t[t.length - 1], n = o.split(".js")[0], [4, new Promise(function(e) {
                                function t() {
                                    e(window[n])
                                }
                                Jt.jsonp(r, t, t)
                            })];
                        case 1:
                            return [2, e.sent()]
                    }
                })
            })
        }, Qt.prototype.jsonp = function(e, t, o) {
            Jt.checkMobileOfflineRequest(e) || qt.mobileOnlineURL.push(e);
            var n = document.createElement("script"),
                r = document.getElementsByTagName("head")[0];

            function i() {
                t()
            }
            n.onreadystatechange = function() {
                "loaded" !== this.readyState && "complete" !== this.readyState || i()
            }, n.onload = i, n.onerror = function() {
                o()
            }, n.type = "text/javascript", n.async = !0, n.src = e, jt.crossOrigin && n.setAttribute("crossorigin", jt.crossOrigin), r.appendChild(n)
        }, Qt.prototype.isCookiePolicyPage = function(e) {
            var t = !1,
                o = Nt.removeURLPrefixes(window.location.href),
                n = Wt("<div></div>", "ce").el;
            Wt(n).html(e);
            for (var r = n.querySelectorAll("a"), i = 0; i < r.length; i++)
                if (Nt.removeURLPrefixes(r[i].href) === o) {
                    t = !0;
                    break
                }
            return t
        }, Qt.prototype.isBannerVisible = function() {
            var e = !1,
                t = document.getElementById("onetrust-banner-sdk");
            return t && t.getAttribute("style") && (e = -1 !== t.getAttribute("style").indexOf("display: none") || -1 !== t.getAttribute("style").indexOf("display:none")), e
        }, Qt.prototype.hideBanner = function() {
            var e = this;
            jt.bnrAnimationInProg ? setTimeout(function() {
                return e.hideBanner()
            }, 100) : Wt("#onetrust-banner-sdk").fadeOut(400)
        }, Qt.prototype.resetFocusToBody = function() {
            document.activeElement && document.activeElement.blur()
        }, Qt.prototype.getDuration = function(e) {
            var t = e.Length,
                o = e.DurationType,
                n = "";
            if (!t || 0 === parseInt(t)) return Mt.LfSpanSecs;
            var r = parseInt(t);
            if (o) {
                var i = 1 < (r = this.round_to_precision(r / o, .5)) ? pt[o] + "s" : pt[o];
                Mt.LifespanDurationText && 1 === o && (i = "LifespanDurationText"), n = r + " " + Mt[i]
            } else n = this.getDurationText(r);
            return n
        }, Qt.prototype.isDateCurrent = function(e) {
            var t = e.split("/"),
                o = parseInt(t[1]),
                n = parseInt(t[0]),
                r = parseInt(t[2]),
                i = new Date,
                s = i.getDate(),
                a = i.getFullYear(),
                l = i.getMonth() + 1;
            return a < r || r === a && l < n || r === a && n === l && s <= o
        }, Qt.prototype.insertFooterLogo = function(e) {
            var t = Wt(e).el;
            if (t.length && Mt.oneTrustFtrLogo) {
                var o = Jt.updateCorrectUrl(Mt.oneTrustFtrLogo);
                Jt.checkMobileOfflineRequest(Jt.getBannerVersionUrl()) && (o = Nt.getRelativeURL(o, !0, !0));
                for (var n = 0; n < t.length; n++) {
                    var r = t[n].querySelector("img"),
                        i = "Powered by OneTrust " + Mt.NewWinTxt;
                    Wt(t[n]).attr("href", Mt.pCFooterLogoUrl), r.setAttribute("src", o), r.setAttribute("title", i), Wt(t[n]).attr("aria-label", i)
                }
            }
        }, Qt.prototype.getUTCFormattedDate = function(e) {
            var t = new Date(e);
            return t.getUTCFullYear() + "-" + (t.getUTCMonth() + 1).toString().padStart(2, "0") + "-" + t.getUTCDate().toString().toString().padStart(2, "0") + " " + t.getUTCHours() + ":" + t.getUTCMinutes().toString().toString().padStart(2, "0") + ":" + t.getUTCSeconds().toString().toString().padStart(2, "0")
        }, Qt.prototype.getDurationText = function(e) {
            return 365 <= e ? (e /= 365, (e = this.round_to_precision(e, .5)) + " " + (1 < e ? Mt.LfSpnYrs : Mt.LfSpnYr)) : Mt.LifespanDurationText ? e + " " + Mt.LifespanDurationText : e + " " + (1 < e ? Mt.PCenterVendorListLifespanDays : Mt.PCenterVendorListLifespanDay)
        }, Qt.prototype.round_to_precision = function(e, t) {
            var o = +e + (void 0 === t ? .5 : t / 2);
            return o - o % (void 0 === t ? 1 : +t)
        }, Qt.prototype.isOptOutEnabled = function() {
            return Mt.PCTemplateUpgrade ? jt.genVenOptOutEnabled : Mt.allowHostOptOut
        }, Qt.prototype.findUserType = function(e) {
            jt.isKeyboardUser = !(!e || 0 !== e.detail)
        }, Qt.prototype.getCSSPropsFromString = function(e) {
            if (e) {
                var t = e.length,
                    n = {};
                return e.endsWith(";") && (e = e.substring(0, t - 1)), e.trim().split(";").forEach(function(e) {
                    var t = e.trim().toString().split(":"),
                        o = JSON.parse('{ "' + t[0].trim() + '" : "' + t[1].trim() + '" }');
                    n = Object.assign(n, o)
                }), n
            }
            return {}
        }, Qt);

    function Qt() {}
    var $t, Zt = {
            P_Content: "#ot-pc-content",
            P_Logo: ".ot-pc-logo",
            P_Title: "#ot-pc-title",
            P_Policy_Txt: "#ot-pc-desc",
            P_Vendor_Title_Elm: "#ot-lst-title",
            P_Vendor_Title: "#ot-lst-title h3",
            P_Manage_Cookies_Txt: "#ot-category-title",
            P_Label_Txt: ".ot-label-txt",
            P_Category_Header: ".ot-cat-header",
            P_Category_Grp: ".ot-cat-grp",
            P_Category_Item: ".ot-cat-item",
            P_Vendor_List: "#ot-pc-lst",
            P_Vendor_Content: "#ot-lst-cnt",
            P_Vendor_Container: "#ot-ven-lst",
            P_Ven_Bx: "ot-ven-box",
            P_Ven_Name: ".ot-ven-name",
            P_Ven_Link: ".ot-ven-link",
            P_Ven_Ctgl: "ot-ven-ctgl",
            P_Ven_Ltgl: "ot-ven-litgl",
            P_Ven_Ltgl_Only: "ot-ven-litgl-only",
            P_Ven_Opts: ".ot-ven-opts",
            P_Triangle: "#ot-anchor",
            P_Fltr_Modal: "#ot-fltr-modal",
            P_Fltr_Options: ".ot-fltr-opts",
            P_Fltr_Option: ".ot-fltr-opt",
            P_Select_Cntr: "#ot-sel-blk",
            P_Host_Cntr: "#ot-host-lst",
            P_Host_Hdr: ".ot-host-hdr",
            P_Host_Desc: ".ot-host-desc",
            P_Li_Hdr: ".ot-pli-hdr",
            P_Li_Title: ".ot-li-title",
            P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
            P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
            P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
            P_Host_Title: ".ot-host-name",
            P_Leg_Select_All: ".ot-sel-all-hdr",
            P_Leg_Header: ".ot-li-hdr",
            P_Acc_Header: ".ot-acc-hdr",
            P_Cnsnt_Header: ".ot-consent-hdr",
            P_Tgl_Cntr: ".ot-tgl-cntr",
            P_CBx_Cntr: ".ot-chkbox",
            P_Sel_All_Host_El: "ot-selall-hostcntr",
            P_Sel_All_Vendor_Consent_El: "ot-selall-vencntr",
            P_Sel_All_Vendor_Leg_El: "ot-selall-licntr",
            P_c_Name: "ot-c-name",
            P_c_Host: "ot-c-host",
            P_c_Duration: "ot-c-duration",
            P_c_Type: "ot-c-type",
            P_c_Category: "ot-c-category",
            P_c_Desc: "ot-c-description",
            P_Host_View_Cookies: ".ot-host-expand",
            P_Host_Opt: ".ot-host-opt",
            P_Host_Info: ".ot-host-info",
            P_Arrw_Cntr: ".ot-arw-cntr",
            P_Acc_Txt: ".ot-acc-txt",
            P_Vendor_CheckBx: "ot-ven-chkbox",
            P_Vendor_LegCheckBx: "ot-ven-leg-chkbox",
            P_Host_UI: "ot-hosts-ui",
            P_Host_Cnt: "ot-host-cnt",
            P_Host_Bx: "ot-host-box",
            P_Ven_Dets: ".ot-ven-dets",
            P_Ven_Disc: ".ot-ven-disc",
            P_Gven_List: "#ot-gn-venlst",
            P_Close_Btn: ".ot-close-icon",
            P_Ven_Lst_Cntr: ".ot-vlst-cntr",
            P_Host_Lst_cntr: ".ot-hlst-cntr",
            P_Sub_Grp_Cntr: ".ot-subgrp-cntr",
            P_Subgrp_Desc: ".ot-subgrp-desc",
            P_Subgp_ul: ".ot-subgrps",
            P_Subgrp_li: ".ot-subgrp",
            P_Subgrp_Tgl_Cntr: ".ot-subgrp-tgl",
            P_Grp_Container: ".ot-grps-cntr",
            P_Privacy_Txt: "#ot-pvcy-txt",
            P_Privacy_Hdr: "#ot-pvcy-hdr",
            P_Active_Menu: "ot-active-menu",
            P_Desc_Container: ".ot-desc-cntr",
            P_Tab_Grp_Hdr: "ot-grp-hdr1",
            P_Search_Cntr: "#ot-search-cntr",
            P_Clr_Fltr_Txt: "#clear-filters-handler",
            P_Acc_Grp_Desc: ".ot-acc-grpdesc",
            P_Acc_Container: ".ot-acc-grpcntr",
            P_Line_Through: "line-through",
            P_Vendor_Search_Input: "#vendor-search-handler"
        },
        eo = {
            P_Grp_Container: ".groups-container",
            P_Content: "#ot-content",
            P_Category_Header: ".category-header",
            P_Desc_Container: ".description-container",
            P_Label_Txt: ".label-text",
            P_Acc_Grp_Desc: ".ot-accordion-group-pc-container",
            P_Leg_Int_Hdr: ".leg-int-header",
            P_Not_Always_Active: "p:not(.ot-always-active)",
            P_Category_Grp: ".category-group",
            P_Category_Item: ".category-item",
            P_Sub_Grp_Cntr: ".cookie-subgroups-container",
            P_Acc_Container: ".ot-accordion-pc-container",
            P_Close_Btn: ".pc-close-button",
            P_Logo: ".pc-logo",
            P_Title: "#pc-title",
            P_Privacy_Txt: "#privacy-text",
            P_Privacy_Hdr: "#pc-privacy-header",
            P_Policy_Txt: "#pc-policy-text",
            P_Manage_Cookies_Txt: "#manage-cookies-text",
            P_Vendor_Title: "#vendors-list-title",
            P_Vendor_Title_Elm: "#vendors-list-title",
            P_Vendor_List: "#vendors-list",
            P_Vendor_Content: "#vendor-list-content",
            P_Vendor_Container: "#vendors-list-container",
            P_Ven_Bx: "vendor-box",
            P_Ven_Name: ".vendor-title",
            P_Ven_Link: ".vendor-privacy-notice",
            P_Ven_Ctgl: "ot-vendor-consent-tgl",
            P_Ven_Ltgl: "ot-leg-int-tgl",
            P_Ven_Ltgl_Only: "ot-leg-int-tgl-only",
            P_Ven_Opts: ".vendor-options",
            P_Triangle: "#ot-triangle",
            P_Fltr_Modal: "#ot-filter-modal",
            P_Fltr_Options: ".ot-group-options",
            P_Fltr_Option: ".ot-group-option",
            P_Select_Cntr: "#select-all-container",
            P_Host_Cntr: "#hosts-list-container",
            P_Host_Hdr: ".host-info",
            P_Host_Desc: ".host-description",
            P_Host_Opt: ".host-option-group",
            P_Host_Info: ".vendor-host",
            P_Ven_Dets: ".vendor-purpose-groups",
            P_Ven_Disc: ".ot-ven-disc",
            P_Gven_List: "#ot-gn-venlst",
            P_Arrw_Cntr: ".ot-arrow-container",
            P_Li_Hdr: ".leg-int-header",
            P_Li_Title: ".leg-int-title",
            P_Acc_Txt: ".accordion-text",
            P_Tgl_Cntr: ".ot-toggle-group",
            P_CBx_Cntr: ".ot-chkbox-container",
            P_Host_Title: ".host-title",
            P_Leg_Select_All: ".leg-int-sel-all-hdr",
            P_Leg_Header: ".leg-int-hdr",
            P_Cnsnt_Header: ".consent-hdr",
            P_Acc_Header: ".accordion-header",
            P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
            P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
            P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
            P_Sel_All_Host_El: "select-all-hosts-input-container",
            P_Sel_All_Vendor_Consent_El: "select-all-vendors-input-container",
            P_Sel_All_Vendor_Leg_El: "select-all-vendors-leg-input-container",
            P_c_Name: "cookie-name-container",
            P_c_Host: "cookie-host-container",
            P_c_Duration: "cookie-duration-container",
            P_c_Type: "cookie-type-container",
            P_c_Category: "cookie-category-container",
            P_c_Desc: "cookie-description-container",
            P_Host_View_Cookies: ".host-view-cookies",
            P_Vendor_CheckBx: "vendor-chkbox",
            P_Vendor_LegCheckBx: "vendor-leg-chkbox",
            P_Host_UI: "hosts-list",
            P_Host_Cnt: "host-list-content",
            P_Host_Bx: "host-box",
            P_Ven_Lst_Cntr: ".category-vendors-list-container",
            P_Host_Lst_cntr: ".category-host-list-container",
            P_Subgrp_Desc: ".cookie-subgroups-description-legal",
            P_Subgp_ul: ".cookie-subgroups",
            P_Subgrp_li: ".cookie-subgroup",
            P_Subgrp_Tgl_Cntr: ".cookie-subgroup-toggle",
            P_Active_Menu: "active-group",
            P_Tab_Grp_Hdr: "group-toggle",
            P_Search_Cntr: "#search-container",
            P_Clr_Fltr_Txt: "#clear-filters-handler p",
            P_Vendor_Search_Input: "#vendor-search-handler"
        };

    function to() {}
    var oo, no = new(to.prototype.initializeBannerVariables = function(e) {
            var t, o = e.DomainData;
            qt.iabType = o.IabType, t = o.PCTemplateUpgrade, $t = t ? Zt : eo, qt.init(e), jt.showGeneralVendors = Mt.GeneralVendorsEnabled && Mt.PCTemplateUpgrade, jt.showVendorService = wt.fp.CookieV2VendorServiceScript && Mt.VendorServiceConfig.PCVSEnable && "IAB2" !== Mt.IabType && Mt.PCTemplateUpgrade, jt.vsIsActiveAndOptOut = jt.showVendorService && Mt.VendorServiceConfig.PCVSOptOut, jt.genVenOptOutEnabled = jt.showGeneralVendors && Mt.GenVenOptOut, Jt.addLogoUrls(), this.setGeolocationInCookies(), this.setOrUpdate3rdPartyIABConsentFlag()
        }, to.prototype.initializeVendorInOverriddenVendors = function(e, t) {
            Mt.OverriddenVendors[e] = {
                disabledCP: [],
                disabledLIP: [],
                active: t,
                legInt: !1,
                consent: !1
            }
        }, to.prototype.applyGlobalRestrictionsonNewVendor = function(e, t, o, n) {
            var r = Mt.GlobalRestrictions,
                i = Mt.OverriddenVendors;
            switch (i[t] || this.initializeVendorInOverriddenVendors(t, !0), i[t].disabledCP || (i[t].disabledCP = []), i[t].disabledLIP || (i[t].disabledLIP = []), r[o]) {
                case q.Disabled:
                    n ? i[t].disabledCP.push(o) : i[t].disabledLIP.push(o), Mt.Publisher.restrictions[o][t] = q.Disabled;
                    break;
                case q.Consent:
                    n ? (i[t].consent = !0, Mt.Publisher.restrictions[o][t] = q.Consent) : (i[t].disabledLIP.push(o), this.checkFlexiblePurpose(e, t, o, !1));
                    break;
                case q.LegInt:
                    n ? (i[t].disabledCP.push(o), this.checkFlexiblePurpose(e, t, o, !0)) : (i[t].legInt = !0, Mt.Publisher.restrictions[o][t] = q.LegInt);
                    break;
                case void 0:
                    n ? i[t].consent = !0 : i[t].legInt = !0
            }
        }, to.prototype.checkFlexiblePurpose = function(e, t, o, n) {
            e.flexiblePurposes.includes(o) ? (n ? Mt.OverriddenVendors[t].legInt = !0 : Mt.OverriddenVendors[t].consent = !0, Mt.Publisher.restrictions[o][t] = n ? q.LegInt : q.Consent) : Mt.Publisher.restrictions[o][t] = q.Disabled
        }, to.prototype.removeInActiveVendorsForTcf = function(i) {
            var s = this,
                a = jt.iabData.vendorListVersion,
                e = Mt.Publisher,
                l = Mt.GlobalRestrictionEnabled,
                c = !(0 === Object.keys(e).length || e && 0 === Object.keys(e.restrictions).length);
            Object.keys(i.vendors).forEach(function(t) {
                var o = i.vendors[t];
                o.iab2GVLVersion > a && (Mt.NewVendorsInactiveEnabled ? s.initializeVendorInOverriddenVendors(t, !1) : l && (o.purposes.forEach(function(e) {
                    s.applyGlobalRestrictionsonNewVendor(o, t, e, !0)
                }), o.legIntPurposes.forEach(function(e) {
                    s.applyGlobalRestrictionsonNewVendor(o, t, e, !1)
                })));
                var e = !1;
                Mt.IsIabThirdPartyCookieEnabled || (qt.legIntSettings.PAllowLI ? Mt.OverriddenVendors[t] && !Mt.OverriddenVendors[t].active && (e = !0) : -1 < Mt.Vendors.indexOf(Number(t)) && (e = !0));
                var n = !o.purposes.length && !o.flexiblePurposes.length;
                Mt.OverriddenVendors[t] && !Mt.OverriddenVendors[t].consent && (n = !0);
                var r = !0;
                qt.legIntSettings.PAllowLI && (!o.legIntPurposes.length || Mt.OverriddenVendors[t] && !Mt.OverriddenVendors[t].legInt || (r = !1)), !n || !r || o.specialPurposes.length || o.features.length || o.specialFeatures.length || (e = !0), !l && c && o.iab2GVLVersion > a && (e = !0), e && delete i.vendors[t]
            })
        }, to.prototype.setPublisherRestrictions = function() {
            var e = Mt.Publisher;
            if (e && e.restrictions) {
                var s = this.iabStringSDK(),
                    t = e.restrictions,
                    a = jt.iabData,
                    l = jt.oneTrustIABConsent.vendorList.vendors;
                Object.keys(t).forEach(function(n) {
                    var r, i = t[n],
                        e = qt.iabGroups.purposes[n];
                    e && (r = {
                        description: e.description,
                        purposeId: e.id,
                        purposeName: e.name
                    }), Object.keys(i).forEach(function(e) {
                        if (jt.vendorsSetting[e]) {
                            var t = jt.vendorsSetting[e].arrIndex;
                            1 === i[e] && -1 === l[e].purposes.indexOf(Number(n)) ? a.vendors[t].purposes.push(r) : 2 === i[e] && -1 === l[e].legIntPurposes.indexOf(Number(n)) && a.vendors[t].legIntPurposes.push(r);
                            var o = s.purposeRestriction(Number(n), i[e]);
                            jt.tcModel.publisherRestrictions.add(Number(e), o)
                        }
                    })
                })
            }
        }, to.prototype.populateVendorListTCF = function() {
            return d(this, void 0, void 0, function() {
                var t, o, n, r, i, s, a, l, c;
                return g(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = this.iabStringSDK(), o = jt.iabData, n = Jt.updateCorrectIABUrl(o.globalVendorListUrl), r = !this.isIABCrossConsentEnabled(), Jt.checkMobileOfflineRequest(Jt.getBannerVersionUrl()) ? [3, 1] : (qt.mobileOnlineURL.push(n), i = t.gvl(n, jt.gvlObj), [3, 3]);
                        case 1:
                            return a = (s = t).gvl, l = [null], [4, Jt.otFetchOfflineFile(Nt.getRelativeURL(n, !0))];
                        case 2:
                            i = a.apply(s, l.concat([e.sent()])), e.label = 3;
                        case 3:
                            return this.removeInActiveVendorsForTcf(i), jt.oneTrustIABConsent.vendorList = i, this.assignIABDataWithGlobalVendorList(i), c = jt, [4, t.tcModel(i)];
                        case 4:
                            c.tcModel = e.sent(), r && this.setPublisherRestrictions(), jt.tcModel.cmpId = parseInt(o.cmpId), jt.tcModel.cmpVersion = parseInt(o.cmpVersion);
                            try {
                                jt.tcModel.consentLanguage = jt.consentLanguage
                            } catch (e) {
                                jt.tcModel.consentLanguage = "EN"
                            }
                            return jt.tcModel.consentScreen = parseInt(o.consentScreen), jt.tcModel.isServiceSpecific = r, jt.tcModel.purposeOneTreatment = qt.purposeOneTreatment, Mt.PublisherCC ? jt.tcModel.publisherCountryCode = Mt.PublisherCC : jt.userLocation.country && (jt.tcModel.publisherCountryCode = jt.userLocation.country), jt.cmpApi = t.cmpApi(jt.tcModel.cmpId, jt.tcModel.cmpVersion, r, Mt.UseGoogleVendors ? {
                                getTCData: this.addtlConsentString,
                                getInAppTCData: this.addtlConsentString
                            } : void 0), null !== this.alertBoxCloseDate() && !this.needReconsent() || this.resetTCModel(), [2]
                    }
                })
            })
        }, to.prototype.resetTCModel = function() {
            var e = this.iabStringSDK(),
                t = jt.tcModel.clone();
            if (t.unsetAll(), qt.legIntSettings.PAllowLI) {
                var o = qt.consentableIabGrps.filter(function(e) {
                        return e.HasLegIntOptOut && e.Type === St
                    }).map(function(e) {
                        return parseInt(qt.iabGrpIdMap[e.CustomGroupId])
                    }),
                    n = Object.keys(jt.vendorsSetting).filter(function(e) {
                        return jt.vendorsSetting[e].legInt
                    }).map(function(e) {
                        return parseInt(e)
                    });
                t.purposeLegitimateInterests.set(o), t.vendorLegitimateInterests.set(n), t.isServiceSpecific && t.publisherLegitimateInterests.set(o)
            }
            jt.cmpApi.update(e.tcString().encode(t), !0)
        }, to.prototype.addtlConsentString = function(e, t, o) {
            t && t.tcString && (t.addtlConsent = "" + jt.addtlConsentVersion + (jt.isAddtlConsent ? jt.addtlVendors.vendorConsent.join(".") : "")), "function" == typeof e ? e(t, o) : console.error("__tcfapi received invalid parameters.")
        }, to.prototype.setIabData = function() {
            jt.iabData = wt.moduleInitializer.IabV2Data, jt.iabData.consentLanguage = jt.consentLanguage
        }, to.prototype.assignIABDataWithGlobalVendorList = function(r) {
            var i = Mt.OverriddenVendors;
            jt.iabData.vendorListVersion = r.vendorListVersion, jt.iabData.vendors = [], Object.keys(r.vendors).forEach(function(n) {
                jt.vendorsSetting[n] = {
                    consent: !0,
                    legInt: !0,
                    arrIndex: 0,
                    specialPurposesOnly: !1
                };
                var e = {},
                    t = r.vendors[n];
                e.vendorId = n, e.vendorName = t.name, e.policyUrl = t.policyUrl, e.cookieMaxAge = Nt.calculateCookieLifespan(t.cookieMaxAgeSeconds), e.usesNonCookieAccess = t.usesNonCookieAccess, e.deviceStorageDisclosureUrl = t.deviceStorageDisclosureUrl || null;
                var o = !t.legIntPurposes.length && !t.purposes.length && t.specialPurposes.length;
                qt.legIntSettings.PAllowLI && ((!i[n] || i[n].legInt) && (i[n] || t.legIntPurposes.length) || o) || (jt.vendorsSetting[n].legInt = !1), qt.legIntSettings.PAllowLI && o && (jt.vendorsSetting[n].specialPurposesOnly = !0), i[n] && !i[n].consent || !i[n] && !t.purposes.length && !t.flexiblePurposes.length ? jt.vendorsSetting[n].consent = !1 : t.purposes.length || t.flexiblePurposes.length || (jt.vendorsSetting[n].consent = !1), e.features = t.features.map(function(e) {
                    var t, o = qt.iabGroups.features[e];
                    return o && (t = {
                        description: o.description,
                        featureId: o.id,
                        featureName: o.name
                    }), t
                }), e.specialFeatures = r.vendors[n].specialFeatures.reduce(function(e, t) {
                    var o = qt.iabGroups.specialFeatures[t];
                    return o && e.push({
                        description: o.description,
                        featureId: o.id,
                        featureName: o.name
                    }), e
                }, []), e.purposes = r.vendors[n].purposes.reduce(function(e, t) {
                    var o = qt.iabGroups.purposes[t];
                    return !o || i[n] && i[n].disabledCP && -1 !== i[n].disabledCP.indexOf(t) || e.push({
                        description: o.description,
                        purposeId: o.id,
                        purposeName: o.name
                    }), e
                }, []), e.legIntPurposes = r.vendors[n].legIntPurposes.reduce(function(e, t) {
                    var o = qt.iabGroups.purposes[t];
                    return !o || i[n] && i[n].disabledLIP && -1 !== i[n].disabledLIP.indexOf(t) || e.push({
                        description: o.description,
                        purposeId: o.id,
                        purposeName: o.name
                    }), e
                }, []), e.specialPurposes = t.specialPurposes.map(function(e) {
                    var t, o = qt.iabGroups.specialPurposes[e];
                    return o && (t = {
                        description: o.description,
                        purposeId: o.id,
                        purposeName: o.name
                    }), t
                }), jt.iabData.vendors.push(e), jt.vendorsSetting[n].arrIndex = jt.iabData.vendors.length - 1
            })
        }, to.prototype.populateIABCookies = function() {
            return d(this, void 0, void 0, function() {
                return g(this, function(e) {
                    switch (e.label) {
                        case 0:
                            if (!this.isIABCrossConsentEnabled()) return [3, 5];
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, this.setIAB3rdPartyCookie(Ge.EU_CONSENT, "", 0, !0)];
                        case 2:
                            return e.sent(), [3, 4];
                        case 3:
                            return e.sent(), this.setIABCookieData(), this.updateCrossConsentCookie(!1), [3, 4];
                        case 4:
                            return [3, 6];
                        case 5:
                            no.needReconsent() || this.setIABCookieData(), e.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        }, to.prototype.setIAB3rdPartyCookie = function(e, t, o, n) {
            var r = Mt.iabThirdPartyConsentUrl;
            try {
                if (r && document.body) return this.updateThirdPartyConsent(r, e, t, o, n);
                throw new ReferenceError
            } catch (e) {
                throw e
            }
        }, to.prototype.setIABCookieData = function() {
            jt.oneTrustIABConsent.IABCookieValue = Gt.getCookie(Ge.EU_PUB_CONSENT)
        }, to.prototype.updateThirdPartyConsent = function(n, r, i, s, a) {
            return d(this, void 0, void 0, function() {
                var t, o;
                return g(this, function(e) {
                    return t = window.location.protocol + "//" + n + "/?name=" + r + "&value=" + i + "&expire=" + s + "&isFirstRequest=" + a, document.getElementById("onetrustIabCookie") ? (document.getElementById("onetrustIabCookie").contentWindow.location.replace(t), [2]) : (xt(o = document.createElement("iframe"), "display: none;", !0), o.id = "onetrustIabCookie", o.setAttribute("title", "OneTrust IAB Cookie"), o.src = t, document.body.appendChild(o), [2, new Promise(function(e) {
                        o.onload = function() {
                            qt.thirdPartyiFrameResolve(), qt.thirdPartyiFrameLoaded = !0, e()
                        }, o.onerror = function() {
                            throw qt.thirdPartyiFrameResolve(), qt.thirdPartyiFrameLoaded = !0, e(), new URIError
                        }
                    })])
                })
            })
        }, to.prototype.setIABVendor = function(n, r) {
            if (void 0 === n && (n = !0), void 0 === r && (r = !1), jt.iabData.vendors.forEach(function(e) {
                    var t = e.vendorId;
                    if (qt.legIntSettings.PAllowLI) {
                        var o = void 0;
                        o = r ? n : !!jt.vendorsSetting[t].consent && n, jt.oneTrustIABConsent.vendors.push(t.toString() + ":" + o), jt.oneTrustIABConsent.legIntVendors.push(t.toString() + ":" + jt.vendorsSetting[t].legInt)
                    } else jt.oneTrustIABConsent.legIntVendors = [], jt.oneTrustIABConsent.vendors.push(t.toString() + ":" + n)
                }), Mt.UseGoogleVendors) {
                var t = jt.addtlVendors;
                Object.keys(jt.addtlVendorsList).forEach(function(e) {
                    n && (t.vendorSelected["" + e.toString()] = !0, t.vendorConsent.push("" + e.toString()))
                })
            }
        }, to.prototype.setOrUpdate3rdPartyIABConsentFlag = function() {
            var e = this.getIABCrossConsentflagData();
            Mt.IsIabEnabled ? e && !this.needReconsent() || this.updateCrossConsentCookie(Mt.IsIabThirdPartyCookieEnabled) : e && !this.reconsentRequired() && "true" !== e || this.updateCrossConsentCookie(!1)
        }, to.prototype.isIABCrossConsentEnabled = function() {
            return "true" === this.getIABCrossConsentflagData()
        }, to.prototype.getIABCrossConsentflagData = function() {
            return Gt.readCookieParam(Ge.OPTANON_CONSENT, we)
        }, to.prototype.setGeolocationInCookies = function() {
            var e = Gt.readCookieParam(Ge.OPTANON_CONSENT, Ee);
            if (jt.userLocation && !e && this.isAlertBoxClosedAndValid()) {
                var t = jt.userLocation.country + ";" + jt.userLocation.state;
                this.setUpdateGeolocationCookiesData(t)
            } else this.reconsentRequired() && e && this.setUpdateGeolocationCookiesData("")
        }, to.prototype.iabStringSDK = function() {
            var e = wt.moduleInitializer.otIABModuleData;
            if (Mt.IsIabEnabled && e) return {
                gvl: e.tcfSdkRef.gvl,
                tcModel: e.tcfSdkRef.tcModel,
                tcString: e.tcfSdkRef.tcString,
                cmpApi: e.tcfSdkRef.cmpApi,
                purposeRestriction: e.tcfSdkRef.purposeRestriction
            }
        }, to.prototype.setUpdateGeolocationCookiesData = function(e) {
            Gt.writeCookieParam(Ge.OPTANON_CONSENT, Ee, e)
        }, to.prototype.reconsentRequired = function() {
            return (wt.moduleInitializer.MobileSDK || this.awaitingReconsent()) && this.needReconsent()
        }, to.prototype.awaitingReconsent = function() {
            return "true" === Gt.readCookieParam(Ge.OPTANON_CONSENT, _e)
        }, to.prototype.needReconsent = function() {
            var e = this.alertBoxCloseDate(),
                t = Mt.LastReconsentDate;
            return e && t && new Date(t) > new Date(e)
        }, to.prototype.updateCrossConsentCookie = function(e) {
            Gt.writeCookieParam(Ge.OPTANON_CONSENT, we, e)
        }, to.prototype.alertBoxCloseDate = function() {
            return Gt.getCookie(Ge.ALERT_BOX_CLOSED)
        }, to.prototype.isAlertBoxClosedAndValid = function() {
            return null !== this.alertBoxCloseDate() && !this.reconsentRequired()
        }, to.prototype.generateLegIntButtonElements = function(e, t, o) {
            void 0 === o && (o = !1);
            var n = e ? "display:none;" : "";
            return '<div class="ot-leg-btn-container" data-group-id="' + t + '" data-el-id="' + t + '-leg-out" is-vendor="' + o + '">\n                    <button class="ot-obj-leg-btn-handler ' + (e ? "ot-leg-int-enabled ot-inactive-leg-btn" : "ot-active-leg-btn") + '">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">\n                            <path fill="' + Mt.pcButtonTextColor + '" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>\n                        </svg>\n                        <span>' + (e ? qt.legIntSettings.PObjectLegIntText : qt.legIntSettings.PObjectionAppliedText) + '\n                        </span>\n                    </button>\n                    <button\n                        class="ot-remove-objection-handler"\n                            data-style="color:' + Mt.pcButtonColor + "; " + n + '"\n                    >\n                        ' + qt.legIntSettings.PRemoveObjectionText + "\n                    </button>\n                </div>"
        }, to.prototype.syncAlertBoxCookie = function(e) {
            var t = Mt.ReconsentFrequencyDays;
            Gt.setCookie(Ge.ALERT_BOX_CLOSED, e, t, !1, new Date(e))
        }, to.prototype.syncCookieExpiry = function() {
            if (jt.syncRequired) {
                var e = Mt.ReconsentFrequencyDays,
                    t = Gt.getCookie(Ge.ALERT_BOX_CLOSED),
                    o = Gt.getCookie(Ge.OPTANON_CONSENT);
                Gt.setCookie(Ge.OPTANON_CONSENT, o, e, !1, new Date(t)), no.needReconsent() && Gt.removeAlertBox();
                var n = Gt.getCookie(Ge.EU_PUB_CONSENT);
                n && (no.isIABCrossConsentEnabled() ? Gt.removeIab2() : Gt.setCookie(Ge.EU_PUB_CONSENT, n, e, !1, new Date(t)));
                var r = Gt.getCookie(Ge.ADDITIONAL_CONSENT_STRING);
                r && Gt.setCookie(Ge.ADDITIONAL_CONSENT_STRING, r, e, !1, new Date(t))
            }
        }, to.prototype.syncOtPreviewCookie = function() {
            var e = Gt.getCookie(Ge.OT_PREVIEW);
            e && Gt.setCookie(Ge.OT_PREVIEW, e, 1, !1)
        }, to.prototype.dispatchConsentEvent = function() {
            window.dispatchEvent(new CustomEvent("OTConsentApplied", {
                OTConsentApplied: "yes"
            }))
        }, to),
        ro = function() {};
    var io, so = (ao.prototype.isAlwaysActiveGroup = function(e) {
        if (this.getGrpStatus(e)) {
            var t = this.getGrpStatus(e).toLowerCase();
            return e.Parent && t !== qe && (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()), t === qe
        }
        return !0
    }, ao.prototype.getGrpStatus = function(e) {
        return e && e.Status ? qt.DNTEnabled && e.IsDntEnabled ? ze : e.Status : ""
    }, ao.prototype.getParentGroup = function(t) {
        if (t) {
            var e = Mt.Groups.filter(function(e) {
                return e.OptanonGroupId === t
            });
            return 0 < e.length ? e[0] : null
        }
        return null
    }, ao.prototype.checkIfGroupHasConsent = function(t) {
        var e = jt.groupsConsent,
            o = Nt.findIndex(e, function(e) {
                return e.split(":")[0] === t.CustomGroupId
            });
        return -1 < o && "1" === e[o].split(":")[1]
    }, ao.prototype.checkIsActiveByDefault = function(e) {
        if (this.getGrpStatus(e)) {
            var t = this.getGrpStatus(e).toLowerCase();
            return e.Parent && t !== qe && (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()), t === qe || t === Ue || t === Me || t === ze && !qt.DNTEnabled
        }
        return !0
    }, ao.prototype.getGroupById = function(e) {
        for (var t = null, o = 0, n = Mt.Groups; o < n.length; o++) {
            for (var r = n[o], i = 0, s = u(r.SubGroups, [r]); i < s.length; i++) {
                var a = s[i];
                if (a.CustomGroupId === e) {
                    t = a;
                    break
                }
            }
            if (t) break
        }
        return t
    }, ao.prototype.isSoftOptInGrp = function(e) {
        if (e) {
            var t = e && !e.Parent ? e : io.getParentGroup(e.Parent);
            return "inactive landingpage" === io.getGrpStatus(t).toLowerCase()
        }
        return !1
    }, ao.prototype.isOptInGrp = function(e) {
        return !!e && "inactive" === io.getGrpStatus(e).toLowerCase()
    }, ao.prototype.getParentByGrp = function(e) {
        return e.Parent ? this.getGroupById(e.Parent) : null
    }, ao.prototype.getVSById = function(e) {
        return jt.getVendorsInDomain().get(e)
    }, ao.prototype.getGrpByVendorId = function(e) {
        var t = null;
        return jt.getVendorsInDomain().has(e) && (t = jt.getVendorsInDomain().get(e).groupRef), t
    }, ao);

    function ao() {}
    var lo, co = (uo.prototype.ensureConsentId = function(e, t) {
        var o, n = !1,
            r = Gt.readCookieParam(Ge.OPTANON_CONSENT, Ve, !0);
        if (o = !e && t ? (n = !0, 1) : 0, r) {
            var i = parseInt(Gt.readCookieParam(Ge.OPTANON_CONSENT, Be), 10);
            isNaN(i) || (o = t ? ++i : i, n = !1)
        } else r = Nt.generateUUID(), Gt.writeCookieParam(Ge.OPTANON_CONSENT, Ve, r);
        return Gt.writeCookieParam(Ge.OPTANON_CONSENT, Be, o), {
            id: r,
            count: o,
            addDfltInt: n
        }
    }, uo.prototype.isAnonymousConsent = function() {
        var e = !0,
            t = jt.dsParams;
        return t && t.hasOwnProperty("isAnonymous") && (e = t.isAnonymous), e
    }, uo.prototype.isAuthUsr = function(e) {
        jt.consentPreferences ? Gt.writeCookieParam(Ge.OPTANON_CONSENT, "iType", "") : Gt.writeCookieParam(Ge.OPTANON_CONSENT, "iType", "" + U[e])
    }, uo.prototype.createConsentTxn = function(e, t, o, n) {
        void 0 === t && (t = ""), void 0 === o && (o = !1), void 0 === n && (n = !0);
        var r = this.ensureConsentId(e, n),
            i = Mt.ConsentIntegration,
            s = window.navigator.userAgent,
            a = /OneTrustBot/.test(s);
        if (i.ConsentApi && i.RequestInformation && r.id && !a) {
            var l = wt.moduleInitializer;
            lo.noOptOutToogle = l.TenantFeatures.CookieV2NoOptOut;
            var c = jt.bannerCloseSource;
            lo.isCloseByIconOrLink = c === f.BannerCloseButton || c === f.ContinueWithoutAcceptingButton;
            var d = {
                requestInformation: i.RequestInformation,
                identifier: r.id,
                customPayload: {
                    Interaction: r.count,
                    AddDefaultInteraction: r.addDfltInt
                },
                isAnonymous: this.isAnonymousConsent(),
                test: l.ScriptType === We || l.ScriptType === Je,
                purposes: this.getConsetPurposes(e),
                dsDataElements: {}
            };
            jt.isV2Stub && (d.syncGroup = jt.syncGrpId, "IAB2" !== qt.iabType || no.isIABCrossConsentEnabled() || (d.tcStringV2 = Gt.getCookie(Ge.EU_PUB_CONSENT)), Mt.UseGoogleVendors && (d.gacString = Gt.getCookie(Ge.ADDITIONAL_CONSENT_STRING)));
            var u = io.getGroupById(Mt.AdvancedAnalyticsCategory);
            if (u && this.canSendAdvancedAnalytics(d.purposes, u) && (d.dsDataElements = {
                    InteractionType: t,
                    Country: jt && jt.userLocation ? jt.userLocation.country : "",
                    UserAgent: s
                }), !l.MobileSDK && n && d.purposes.length) {
                var p = JSON.stringify(d);
                e && navigator.sendBeacon ? (navigator.sendBeacon(i.ConsentApi, p), no.dispatchConsentEvent()) : !o && qt.apiSource !== P.UpdateConsent && jt.consentInteractionType === t || (jt.isV2Stub && t && this.isAuthUsr(t), zt.ajax({
                    url: i.ConsentApi,
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify(d),
                    sync: e,
                    success: function() {
                        no.dispatchConsentEvent()
                    },
                    error: function() {
                        no.dispatchConsentEvent()
                    }
                }))
            }
            qt.pubDomainData.ConsentIntegrationData = {
                consentApi: i.ConsentApi,
                consentPayload: d
            }
        }
        jt.consentInteractionType = t
    }, uo.prototype.getGrpDetails = function(e, i) {
        var s = [];
        return e.forEach(function(e) {
            var t = e.split(":"),
                o = t[0],
                n = "true" === t[1] ? "1" : "0",
                r = lo.getOptanonIdForIabGroup(o, i);
            s.push(r + ":" + n)
        }), s
    }, uo.prototype.getOptanonIdForIabGroup = function(e, t) {
        var o;
        return t === A.Purpose ? o = "IABV2_" + e : t === A.SpecialFeature && (o = "ISFV2_" + e), o
    }, uo.prototype.getConsetPurposes = function(r) {
        var e, t, i = this,
            s = [],
            o = [],
            n = jt.oneTrustIABConsent;
        return e = n && n.purpose ? this.getGrpDetails(n.purpose, A.Purpose) : [], t = n && n.specialFeatures ? this.getGrpDetails(n.specialFeatures, A.SpecialFeature) : [], o = u(n.specialPurposes, n.features), u(jt.groupsConsent, e, t).forEach(function(e) {
            var t = e.split(":"),
                o = io.getGroupById(t[0]);
            if (o && o.PurposeId) {
                var n = i.getTransactionType(o, t, r);
                s.push({
                    Id: o.PurposeId,
                    TransactionType: n.txnType
                }), i.setVSConsentByGroup(o, n).forEach(function(e) {
                    return s.push(e)
                })
            }
        }), o.forEach(function(e) {
            e.purposeId && s.push({
                Id: e.purposeId,
                TransactionType: He
            })
        }), jt.bannerCloseSource = f.Unknown, s
    }, uo.prototype.setVSConsentByGroup = function(e, o) {
        var n = [];
        return jt.showVendorService && e.VendorServices && e.VendorServices.forEach(function(e) {
            var t;
            t = o.useOwn ? jt.vsConsent.get(e.CustomVendorServiceId) ? Ne : De : o.txnType, n.push({
                Id: e.PurposeId,
                TransactionType: t
            })
        }), n
    }, uo.prototype.getTransactionType = function(e, t, o) {
        var n = {
            txnType: He,
            useOwn: !1
        };
        return e.Status === qe ? n.txnType = He : e.Status === je && lo.isCloseByIconOrLink || o ? n.txnType = Fe : e.Status === Me && lo.isCloseByIconOrLink ? n.txnType = lo.noOptOutToogle ? Re : Ne : (n.useOwn = !0, n.txnType = this.getTxnType(t[1])), n
    }, uo.prototype.getTxnType = function(e) {
        return "0" === e ? De : Ne
    }, uo.prototype.isPurposeConsentedTo = function(e, t) {
        var o = [Ne, He];
        return e.some(function(e) {
            return e.Id === t.PurposeId && -1 !== o.indexOf(e.TransactionType)
        })
    }, uo.prototype.canSendAdvancedAnalytics = function(t, e) {
        var o = this;
        return "BRANCH" === e.Type || "IAB2_STACK" === e.Type ? e.SubGroups.length && e.SubGroups.every(function(e) {
            return o.isPurposeConsentedTo(t, e)
        }) : this.isPurposeConsentedTo(t, e)
    }, uo);

    function uo() {}
    var po, ho = (go.prototype.isIabCookieValid = function() {
        var e = null;
        switch (qt.iabType) {
            case "IAB2":
                e = Gt.getCookie("eupubconsent-v2")
        }
        return null !== e
    }, go.prototype.iabTypeIsChanged = function() {
        this.isIabCookieValid() || (Gt.removeAlertBox(), Gt.removeIab1())
    }, go.prototype.initializeIABModule = function() {
        return d(this, void 0, void 0, function() {
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return Mt.IsIabEnabled ? (wt.moduleInitializer.otIABModuleData = window.otIabModule, no.setIabData(), [4, no.populateVendorListTCF()]) : [3, 2];
                    case 1:
                        return e.sent(), no.isIABCrossConsentEnabled() || this.iabTypeIsChanged(), no.populateIABCookies(), Mt.UseGoogleVendors && this.removeInActiveAddtlVendors(), [3, 3];
                    case 2:
                        Gt.removeIab1(), e.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, go.prototype.removeInActiveAddtlVendors = function() {
        var e = Mt.OverridenGoogleVendors;
        for (var t in jt.addtlVendorsList) e && e[t] && !e[t].active && delete jt.addtlVendorsList[t]
    }, go.prototype.getIABConsentData = function() {
        var e = jt.oneTrustIABConsent,
            t = no.iabStringSDK().tcString();
        jt.tcModel.unsetAllPurposeConsents(), jt.tcModel.unsetAllVendorConsents(), jt.tcModel.unsetAllVendorLegitimateInterests(), jt.tcModel.unsetAllSpecialFeatureOptins(), jt.tcModel.unsetAllPurposeLegitimateInterests(), jt.tcModel.publisherConsents.empty(), jt.tcModel.publisherLegitimateInterests.empty(), jt.tcModel.purposeConsents.set(Nt.getActiveIdArray(e.purpose)), jt.tcModel.publisherConsents.set(Nt.getActiveIdArray(e.purpose));
        var o = qt.legIntSettings.PAllowLI ? Nt.getActiveIdArray(e.legimateInterest) : [];
        jt.tcModel.purposeLegitimateInterests.set(o), jt.tcModel.publisherLegitimateInterests.set(o), jt.tcModel.vendorConsents.set(Nt.getActiveIdArray(Nt.distinctArray(e.vendors))), qt.legIntSettings.PAllowLI && !o.length && (e.legIntVendors = []), jt.tcModel.vendorLegitimateInterests.set(Nt.getActiveIdArray(Nt.distinctArray(e.legIntVendors))), jt.tcModel.specialFeatureOptins.set(Nt.getActiveIdArray(e.specialFeatures));
        var n = new Date,
            r = new Date(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), 0, 0, 0);
        jt.tcModel.lastUpdated = r, jt.tcModel.created = r;
        var i = t.encode(jt.tcModel);
        return jt.cmpApi.update(i, !1), i
    }, go.prototype.decodeTCString = function(e) {
        return no.iabStringSDK().tcString().decode(e)
    }, go.prototype.getVendorConsentsRequestV2 = function(e) {
        var o;
        return window.__tcfapi("getInAppTCData", 2, function(e, t) {
            o = [e, t]
        }), e.apply(this, o)
    }, go.prototype.getPingRequestForTcf = function(e) {
        var t;
        return window.__tcfapi("ping", 2, function(e) {
            t = [e]
        }), e.apply(this, t)
    }, go.prototype.populateVendorAndPurposeFromCookieData = function() {
        var r = jt.oneTrustIABConsent,
            e = po.decodeTCString(r.IABCookieValue),
            i = {},
            s = {};
        qt.iabGrps.forEach(function(e) {
            e.Type === St ? i[qt.iabGrpIdMap[e.CustomGroupId]] = e : e.Type === At && (s[qt.iabGrpIdMap[e.CustomGroupId]] = e)
        });
        var a = [];
        e.vendorConsents.forEach(function(e, t) {
            var o = e;
            jt.vendorsSetting[t] && jt.vendorsSetting[t].consent || !e || (a.push(t), o = !1), r.vendors.push(t + ":" + o)
        }), e.vendorConsents.unset(a), a = [], e.vendorLegitimateInterests.forEach(function(e, t) {
            var o = e;
            jt.vendorsSetting[t] && jt.vendorsSetting[t].legInt || !e || (a.push(t), o = !1), r.legIntVendors.push(t + ":" + o)
        }), e.vendorLegitimateInterests.unset(a), a = [], e.purposeConsents.forEach(function(e, o) {
            var t = e;
            i[o] && i[o].HasConsentOptOut || !e || (a.push(o), t = !1);
            var n = Nt.findIndex(r.purpose, function(e, t) {
                return e.split(":")[0] === o.toString()
            }); - 1 === n ? r.purpose.push(o + ":" + t) : r.purpose[n] = o + ":" + t
        }), e.purposeConsents.unset(a), e.publisherConsents.unset(a), a = [], e.specialFeatureOptins.forEach(function(e, o) {
            var t = e;
            s[o] && s[o].HasConsentOptOut || !e || (a.push(o), t = !1);
            var n = Nt.findIndex(r.specialFeatures, function(e, t) {
                return e.split(":")[0] === o.toString()
            }); - 1 === n ? r.specialFeatures.push(o + ":" + t) : r.specialFeatures[n] = o + ":" + t
        }), e.specialFeatureOptins.unset(a), a = [], e.purposeLegitimateInterests.forEach(function(e, o) {
            var t = e;
            i[o] && i[o].HasLegIntOptOut && qt.legIntSettings.PAllowLI || !e || (a.push(o), t = !1);
            var n = Nt.findIndex(r.legimateInterest, function(e, t) {
                return e.split(":")[0] === o.toString()
            }); - 1 === n ? r.legimateInterest.push(o + ":" + t) : r.legimateInterest[n] = o + ":" + t
        }), e.purposeLegitimateInterests.unset(a), e.publisherLegitimateInterests.unset(a), this.syncBundleAndStack(), e.gvl = jt.tcModel.gvl, e.isServiceSpecific = !no.isIABCrossConsentEnabled(), jt.tcModel = e;
        var t = no.iabStringSDK().tcString().encode(e);
        no.isAlertBoxClosedAndValid() ? (r.IABCookieValue !== t && (r.IABCookieValue = t, no.isIABCrossConsentEnabled() ? no.setIAB3rdPartyCookie(Ge.EU_CONSENT, r.IABCookieValue, Mt.ReconsentFrequencyDays, !1) : Gt.setCookie(Ge.EU_PUB_CONSENT, r.IABCookieValue, Mt.ReconsentFrequencyDays)), jt.cmpApi.update(t, !1)) : no.resetTCModel()
    }, go.prototype.syncBundleAndStack = function() {
        var e = Gt.readCookieParam(Ge.OPTANON_CONSENT, "groups");
        jt.groupsConsent = Nt.strToArr(e), Mt.Groups.forEach(function(t) {
            if (t.Type === mt || t.Type === It) {
                var e = Jt.isBundleOrStackActive(t),
                    o = Nt.findIndex(jt.groupsConsent, function(e) {
                        return e.split(":")[0] === t.CustomGroupId
                    }),
                    n = t.CustomGroupId + ":" + Number(e); - 1 < o ? jt.groupsConsent[o] = n : jt.groupsConsent.push(n)
            }
        }), Gt.writeCookieParam(Ge.OPTANON_CONSENT, "groups", jt.groupsConsent.join(","))
    }, go.prototype.populateGoogleConsent = function() {
        if (Mt.UseGoogleVendors) {
            var e = Gt.getCookie(Ge.ADDITIONAL_CONSENT_STRING);
            e && (jt.isAddtlConsent = !0, jt.addtlVendors.vendorConsent = e.replace(jt.addtlConsentVersion, "").split("."))
        }
    }, go.prototype.isInitIABCookieData = function(e) {
        return "init" === e || no.needReconsent()
    }, go.prototype.updateFromGlobalConsent = function(e) {
        var t = jt.oneTrustIABConsent;
        t.IABCookieValue = e, t.purpose = t.purpose || [], t.specialFeatures = t.specialFeatures || [], t.legIntVendors = [], t.legimateInterest = t.legimateInterest || [], t.vendors = [], po.populateVendorAndPurposeFromCookieData(), Gt.setCookie(Ge.EU_PUB_CONSENT, "", -1)
    }, go);

    function go() {}
    var Co, yo = "groups",
        fo = "hosts",
        vo = "genVendors",
        ko = "vs",
        mo = (bo.prototype.writeHstParam = function(e, t) {
            void 0 === t && (t = null), Gt.writeCookieParam(e, "hosts", Nt.arrToStr(t || jt.hostsConsent))
        }, bo.prototype.writeGenVenCookieParam = function(e) {
            var t = Mt.GeneralVendors,
                o = jt.genVendorsConsent,
                n = "";
            t.forEach(function(e) {
                n += e.VendorCustomId + ":" + (o[e.VendorCustomId] ? "1" : "0") + ","
            }), Gt.writeCookieParam(e, "genVendors", n)
        }, bo.prototype.writeVSConsentCookieParam = function(e) {
            var o = "";
            jt.vsConsent.forEach(function(e, t) {
                return o += t + ":" + (e ? "1" : "0") + ","
            }), o = o.slice(0, -1), Gt.writeCookieParam(e, ko, o)
        }, bo.prototype.updateGroupsInCookie = function(e, t) {
            void 0 === t && (t = null), Gt.writeCookieParam(e, "groups", Nt.arrToStr(t || jt.groupsConsent))
        }, bo.prototype.writeGrpParam = function(e, t) {
            void 0 === t && (t = null), this.updateGroupsInCookie(e, t), Mt.IsIabEnabled && no.isAlertBoxClosedAndValid() && this.insertOrUpdateIabCookies()
        }, bo.prototype.insertOrUpdateIabCookies = function() {
            var e = jt.oneTrustIABConsent;
            if (e.purpose && e.vendors) {
                jt.isAddtlConsent = Mt.UseGoogleVendors, e.IABCookieValue = po.getIABConsentData();
                var t = Mt.ReconsentFrequencyDays;
                no.isIABCrossConsentEnabled() ? no.setIAB3rdPartyCookie(Ge.EU_CONSENT, e.IABCookieValue, t, !1) : (Gt.setCookie(Ge.EU_PUB_CONSENT, e.IABCookieValue, t), Mt.UseGoogleVendors && Gt.setCookie(Ge.ADDITIONAL_CONSENT_STRING, "" + jt.addtlConsentVersion + jt.addtlVendors.vendorConsent.join("."), t))
            }
        }, bo);

    function bo() {}
    var Po, So = (Ao.prototype.initGenVendorConsent = function() {
        var n = this;
        if (Mt.GenVenOptOut) {
            var e = qt.consentableGrps,
                t = Gt.readCookieParam(Ge.OPTANON_CONSENT, "genVendors");
            t ? (jt.genVendorsConsent = {}, t.split(",").forEach(function(e) {
                if (e) {
                    var t = e.split(":");
                    "1" === t[1] && (jt.genVendorsConsent[t[0]] = !0)
                }
            })) : (jt.genVendorsConsent = {}, e.forEach(function(e) {
                var o = jt.syncRequired ? io.checkIfGroupHasConsent(e) : io.checkIsActiveByDefault(e);
                e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                    var t = n.isGenVenPartOfAlwaysActiveGroup(e);
                    jt.genVendorsConsent[e] = t || o
                })
            }))
        } else jt.genVendorsConsent = {}, Co.writeGenVenCookieParam(Ge.OPTANON_CONSENT)
    }, Ao.prototype.populateGenVendorLists = function() {
        qt.consentableGrps.forEach(function(e) {
            e.GeneralVendorsIds && (io.isAlwaysActiveGroup(e) ? e.GeneralVendorsIds.forEach(function(e) {
                jt.alwaysActiveGenVendors.push(e)
            }) : io.isOptInGrp(e) ? e.GeneralVendorsIds.forEach(function(e) {
                jt.optInGenVendors.push(e)
            }) : io.isSoftOptInGrp(e) && e.GeneralVendorsIds.forEach(function(e) {
                jt.optInGenVendors.includes(e) || jt.softOptInGenVendors.push(e)
            }))
        })
    }, Ao.prototype.updateGenVendorStatus = function(e, t) {
        jt.genVendorsConsent[e] = t || this.isGenVenPartOfAlwaysActiveGroup(e)
    }, Ao.prototype.isGenVenPartOfAlwaysActiveGroup = function(e) {
        return jt.alwaysActiveGenVendors.includes(e)
    }, Ao);

    function Ao() {}
    var To, Io = (Lo.prototype.synchroniseCookieGroupData = function(e) {
        var t = Gt.readCookieParam(Ge.OPTANON_CONSENT, "groups"),
            a = Nt.strToArr(t),
            l = Nt.strToArr(t.replace(/:0|:1/g, "")),
            c = no.needReconsent(),
            d = !no.isAlertBoxClosedAndValid(),
            u = !1,
            p = !1;
        e.forEach(function(e) {
            var t = e.CustomGroupId,
                o = e.Type === mt || e.Type === It;
            if (-1 === Nt.indexOf(l, t)) {
                if (o && Mt.IsIabEnabled) return;
                var n;
                n = e.Type === mt ? Jt.isBundleOrStackActive(e, a) : (u = !0, io.checkIsActiveByDefault(e)), p = !0, a.push(t + (n ? ":1" : ":0"))
            } else {
                if (qt.gpcEnabled && e.IsGpcEnabled && (d || c)) - 1 < (i = a.indexOf(t + ":1")) && (p = !0, a[i] = t + ":0");
                else if (qt.gpcValueChanged && d) {
                    var r = io.checkIsActiveByDefault(e); - 1 < (i = a.indexOf(t + ":" + (r ? "0" : "1"))) && (p = !0, a[i] = t + (r ? ":1" : ":0"))
                }
                if (c && "false" === no.getIABCrossConsentflagData() && o) {
                    var i, s = Jt.isBundleOrStackActive(e, a); - 1 < (i = a.indexOf(t + ":" + (s ? "0" : "1"))) && (p = !0, a[i] = t + (s ? ":1" : ":0"))
                }
            }
        });
        for (var o = a.length, n = function() {
                var t = a[o].replace(/:0|:1/g, "");
                Mt.Groups.some(function(e) {
                    return (!c || e.Type !== It) && (e.CustomGroupId === t || e.SubGroups.some(function(e) {
                        return e.CustomGroupId === t
                    }))
                }) || (p = !0, a.splice(o, 1))
            }; o--;) n();
        p && (jt.fireOnetrustGrp = !0, Co.updateGroupsInCookie(Ge.OPTANON_CONSENT, a), jt.syncRequired && u && Gt.removeAlertBox())
    }, Lo.prototype.groupHasConsent = function(t) {
        var e = Nt.strToArr(Gt.readCookieParam(Ge.OPTANON_CONSENT, "groups")),
            o = Nt.findIndex(e, function(e) {
                return e.split(":")[0] === t.CustomGroupId
            });
        return -1 < o && "1" === e[o].split(":")[1]
    }, Lo.prototype.synchroniseCookieHostData = function() {
        var n = this,
            e = Gt.readCookieParam(Ge.OPTANON_CONSENT, "hosts"),
            r = Nt.strToArr(e),
            i = Nt.strToArr(e.replace(/:0|:1/g, "")),
            s = !1;
        Mt.Groups.forEach(function(e) {
            u(e.SubGroups, [e]).forEach(function(o) {
                o.Hosts.length && o.Hosts.forEach(function(e) {
                    if (-1 === Nt.indexOf(i, e.HostId)) {
                        s = !0;
                        var t = jt.syncRequired ? n.groupHasConsent(o) : io.checkIsActiveByDefault(o);
                        r.push(e.HostId + (t ? ":1" : ":0"))
                    }
                })
            })
        });
        for (var o = r.length, t = function() {
                var t = r[o].replace(/:0|:1/g, "");
                Mt.Groups.some(function(e) {
                    return u(e.SubGroups, [e]).some(function(e) {
                        return e.Hosts.some(function(e) {
                            return e.HostId === t
                        })
                    })
                }) || (s = !0, r.splice(o, 1))
            }; o--;) t();
        s && (jt.fireOnetrustGrp = !0, Co.writeHstParam(Ge.OPTANON_CONSENT, r))
    }, Lo.prototype.toggleGroupHosts = function(e, t) {
        var o = this;
        e.Hosts.forEach(function(e) {
            o.updateHostStatus(e, t)
        })
    }, Lo.prototype.toggleGroupGenVendors = function(e, t) {
        e.GeneralVendorsIds.forEach(function(e) {
            Po.updateGenVendorStatus(e, t)
        })
    }, Lo.prototype.updateHostStatus = function(t, e) {
        var o = Nt.findIndex(jt.hostsConsent, function(e) {
            return !t.isActive && t.HostId === e.replace(/:0|:1/g, "")
        });
        if (-1 < o) {
            var n = e || this.isHostPartOfAlwaysActiveGroup(t.HostId);
            jt.hostsConsent[o] = t.HostId + ":" + (n ? "1" : "0")
        }
    }, Lo.prototype.isHostPartOfAlwaysActiveGroup = function(e) {
        return jt.oneTrustAlwaysActiveHosts.includes(e)
    }, Lo);

    function Lo() {}
    var _o, Vo = function() {
            this.assets = function() {
                return {
                    name: "otCookiePolicy",
                    html: '<div class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <h5 class="cookies-used-header">Cookies Used</h5>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description"><span\n                            class="ot-mobile-border"></span>These\n                        cookies are used to make sure\n                        visitor page requests are routed to the same server in all browsing sessions.</td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n    <section class="subgroup">\n        <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n        <p class="ot-sdk-cookie-policy-group-desc">description</p>\n        <h6 class="cookies-used-header">Cookies Used</h6>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>\n\x3c!-- New Cookies policy Link--\x3e\n<div id="ot-sdk-cookie-policy-v2" class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title" class="ot-sdk-cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <section class="ot-sdk-subgroup">\n            <ul>\n                <li>\n                    <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n                    <p class="ot-sdk-cookie-policy-group-desc">description</p>\n                </li>\n            </ul>\n        </section>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="ot-table-header ot-host">Host</th>\n                    <th scope="col" class="ot-table-header ot-host-description">Host Description</th>\n                    <th scope="col" class="ot-table-header ot-cookies">Cookies</th>\n                    <th scope="col" class="ot-table-header ot-cookies-type">Type</th>\n                    <th scope="col" class="ot-table-header ot-life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="ot-host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="ot-host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="ot-cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-td-content">ARRAffinity</span>\n                    </td>\n                    <td class="ot-cookies-type" data-label="Type">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-type-td-content">1st Party</span>\n                    </td>\n                    <td class="ot-life-span-td" data-label="Life Span">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-life-span-td-content">100 days</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>',
                    css: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-right:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:left}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;left:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;left:6px;width:40%;padding-right:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;left:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-right:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;left:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}",
                    cssRTL: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-left:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:right}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;right:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-right:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;right:6px;width:40%;padding-left:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;right:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-left:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;right:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}"
                }
            }
        },
        Eo = (Bo.prototype.isLandingPage = function() {
            var e = Gt.readCookieParam(Ge.OPTANON_CONSENT, "landingPath");
            return !e || e === location.href
        }, Bo.prototype.setLandingPathParam = function(e) {
            Gt.writeCookieParam(Ge.OPTANON_CONSENT, "landingPath", e)
        }, Bo);

    function Bo() {}
    var wo, xo = (Oo.prototype.loadBanner = function() {
        wt.moduleInitializer.ScriptDynamicLoadEnabled ? "complete" === document.readyState ? Wt(window).trigger("otloadbanner") : window.addEventListener("load", function(e) {
            Wt(window).trigger("otloadbanner")
        }) : "loading" !== document.readyState ? Wt(window).trigger("otloadbanner") : window.addEventListener("DOMContentLoaded", function(e) {
            Wt(window).trigger("otloadbanner")
        }), qt.pubDomainData.IsBannerLoaded = !0
    }, Oo.prototype.OnConsentChanged = function(e) {
        var t = e.toString();
        wo.consentChangedEventMap[t] || (wo.consentChangedEventMap[t] = !0, window.addEventListener("consent.onetrust", e))
    }, Oo.prototype.triggerGoogleAnalyticsEvent = function(e, t, o, n) {
        var r = !1;
        if (wt.moduleInitializer.GATrackToggle && ("AS" === wt.moduleInitializer.GATrackAssignedCategory || "" === wt.moduleInitializer.GATrackAssignedCategory || window.OnetrustActiveGroups.includes("," + wt.moduleInitializer.GATrackAssignedCategory + ",")) && (r = !0), !qt.ignoreGoogleAnlyticsCall && r) {
            void 0 !== window._gaq && window._gaq.push(["_trackEvent", e, t, o, n]), "function" == typeof window.ga && window.ga("send", "event", e, t, o, n);
            var i = window[qt.otDataLayer.name];
            !qt.otDataLayer.ignore && void 0 !== i && i && i.constructor === Array && i.push({
                event: "trackOptanonEvent",
                optanonCategory: e,
                optanonAction: t,
                optanonLabel: o,
                optanonValue: n
            })
        }
    }, Oo.prototype.setAlertBoxClosed = function(e) {
        var t = (new Date).toISOString();
        e ? Gt.setCookie(Ge.ALERT_BOX_CLOSED, t, Mt.ReconsentFrequencyDays) : Gt.setCookie(Ge.ALERT_BOX_CLOSED, t, 0);
        var o = Wt(".onetrust-pc-dark-filter").el[0];
        o && "none" !== getComputedStyle(o).getPropertyValue("display") && Wt(".onetrust-pc-dark-filter").fadeOut(400)
    }, Oo.prototype.updateConsentFromCookie = function(t) {
        return d(this, void 0, void 0, function() {
            return g(this, function(e) {
                return t ? (po.isInitIABCookieData(t) || po.updateFromGlobalConsent(t), "init" === t && (Gt.removeIab1(), no.isAlertBoxClosedAndValid() && no.resetTCModel(), Gt.removeAlertBox())) : (no.resetTCModel(), no.updateCrossConsentCookie(!1), no.setIABCookieData()), wo.assetPromise.then(function() {
                    wo.loadBanner()
                }), [2]
            })
        })
    }, Oo);

    function Oo() {
        var t = this;
        this.consentChangedEventMap = {}, this.assetResolve = null, this.assetPromise = new Promise(function(e) {
            t.assetResolve = e
        })
    }
    var Go, No = "opt-out",
        Do = "OneTrust Cookie Consent",
        Ho = "Banner Auto Close",
        Fo = "Banner Close Button",
        Ro = "Banner - Continue without Accepting",
        qo = "Banner - Confirm",
        Mo = "Preferences Close Button",
        Uo = "Preference Center Opened From Banner",
        jo = "Preference Center Opened From Button",
        zo = "Preference Center Opened From Function",
        Ko = "Preferences Save Settings",
        Wo = "Vendors List Opened From Function",
        Jo = "Floating Cookie Settings Open Button",
        Yo = "Floating Cookie Settings Close Button",
        Xo = "Preferences Toggle On",
        Qo = "Preferences Toggle Off",
        $o = "General Vendor Toggle On",
        Zo = "General Vendor Toggle Off",
        en = "Host Toggle On",
        tn = "Host Toggle Off",
        on = "Preferences Legitimate Interest Objection",
        nn = "Preferences Legitimate Interest Remove Objection",
        rn = "IAB Vendor Toggle ON",
        sn = "IAB Vendor Toggle Off",
        an = "IAB Vendor Legitimate Interest Objection",
        ln = "IAB Vendor Legitimate Interest Remove Objection",
        cn = "Vendor Service Toggle On",
        dn = "Vendor Service Toggle Off",
        un = (pn.prototype.getDataLanguageCulture = function() {
            var e = qt.bannerScriptElement;
            return e && e.getAttribute(Ye) ? this.checkAndTansformLangCodeWithUnderdscore(e.getAttribute(Ye).toLowerCase()) : this.detectDocumentOrBrowserLanguage().toLowerCase()
        }, pn.prototype.checkAndTansformLangCodeWithUnderdscore = function(e) {
            return e.replace(/\_/, "-")
        }, pn.prototype.detectDocumentOrBrowserLanguage = function() {
            var e = "";
            if (qt.langSwitcherPldr) {
                var t = Nt.convertKeyValueLowerCase(qt.langSwitcherPldr),
                    o = this.getUserLanguage().toLowerCase();
                if (!(e = t[o] || t[o + "-" + o] || (t.default === o ? t.default : null)))
                    if (2 === o.length)
                        for (var n = 0; n < Object.keys(t).length; n += 1) {
                            var r = Object.keys(t)[n];
                            if (r.substr(0, 2) === o) {
                                e = t[r];
                                break
                            }
                        } else 2 < o.length && (e = t[o.substr(0, 2)]);
                e = e || t.default
            }
            return e
        }, pn.prototype.getUserLanguage = function() {
            return qt.useDocumentLanguage ? this.checkAndTansformLangCodeWithUnderdscore(document.documentElement.lang) : navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage
        }, pn.prototype.isValidLanguage = function(e, t) {
            var o = Nt.convertKeyValueLowerCase(qt.langSwitcherPldr);
            return !(!o || !o[t] && !o[t + "-" + t] && o.default !== t)
        }, pn.prototype.getLangJsonUrl = function(e) {
            void 0 === e && (e = null);
            var t, o = qt.getRegionRule();
            if (e) {
                if (e = e.toLowerCase(), !this.isValidLanguage(o, e)) return null
            } else e = this.getDataLanguageCulture();
            return jt.lang = e, jt.consentLanguage = e.substr(0, 2), t = qt.canUseConditionalLogic ? qt.bannerDataParentURL + "/" + o.Id + "/" + qt.Condition.Id + "/" + e : qt.bannerDataParentURL + "/" + o.Id + "/" + e, qt.multiVariantTestingEnabled && (t = qt.bannerDataParentURL + "/" + o.Id + "/variants/" + qt.selectedVariant.Id + "/" + e), t
        }, pn.prototype.populateLangSwitcherPlhdr = function() {
            var e = qt.getRegionRule();
            if (e) {
                var t = e.Variants;
                if (qt.multiVariantTestingEnabled && t) {
                    var o = Gt.getCookie(Ge.SELECTED_VARIANT),
                        n = void 0;
                    o && (n = t[Nt.findIndex(t, function(e) {
                        return e.Id === o
                    })]), o && n || (n = t[Math.floor(Math.random() * t.length)]), qt.langSwitcherPldr = n.LanguageSwitcherPlaceholder, qt.selectedVariant = n
                } else qt.canUseConditionalLogic ? qt.langSwitcherPldr = qt.Condition.LanguageSwitcherPlaceholder : qt.langSwitcherPldr = e.LanguageSwitcherPlaceholder
            }
        }, pn);

    function pn() {}
    var hn, gn = (Cn.prototype.getLangJson = function(e) {
        if (void 0 === e && (e = null), qt.previewMode) {
            var t = JSON.parse(window.sessionStorage.getItem("otPreviewData"));
            return Promise.resolve(t.langJson)
        }
        var o = Go.getLangJsonUrl(e);
        return o ? hn.otFetch(o + ".json") : Promise.resolve(null)
    }, Cn.prototype.getPersistentCookieSvg = function() {
        var e = Mt.cookiePersistentLogo;
        return e ? hn.otFetch(e, !0) : Promise.resolve(null)
    }, Cn.prototype.fetchGvlObj = function() {
        return this.otFetch(wt.moduleInitializer.IabV2Data.globalVendorListUrl)
    }, Cn.prototype.fetchGoogleVendors = function() {
        var e = Jt.updateCorrectIABUrl(wt.moduleInitializer.GoogleData.googleVendorListUrl);
        return Jt.checkMobileOfflineRequest(Jt.getBannerVersionUrl()) ? Jt.otFetchOfflineFile(Nt.getRelativeURL(e, !0)) : (qt.mobileOnlineURL.push(e), this.otFetch(e))
    }, Cn.prototype.getStorageDisclosure = function(t) {
        return d(this, void 0, void 0, function() {
            return g(this, function(e) {
                return [2, this.otFetch(t, !1, !0)]
            })
        })
    }, Cn.prototype.loadCMP = function() {
        var o = this;
        return new Promise(function(e) {
            var t = o.checkIfRequiresPollyfill() ? "otTCF-ie" : "otTCF";
            Jt.jsonp(Jt.getBannerVersionUrl() + "/" + t + ".js", e, e)
        })
    }, Cn.prototype.getCSBtnContent = function() {
        return d(this, void 0, void 0, function() {
            var t, o, n, r;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = Mt.useRTL ? ee.RTL : ee.LTR, jt.csBtnAsset[t] ? [3, 2] : (o = Jt.getBannerSDKAssestsUrl() + "/" + (Mt.useRTL ? Qe : Xe), n = jt.csBtnAsset, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, jt.csBtnAsset[t]]
                }
            })
        })
    }, Cn.prototype.getPcContent = function(s) {
        return void 0 === s && (s = !1), d(this, void 0, void 0, function() {
            var t, o, n, r, i;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = Mt.useRTL ? ee.RTL : ee.LTR, jt.pcAsset[t] && !s ? [3, 2] : (o = Jt.getBannerSDKAssestsUrl(), Mt.PCTemplateUpgrade && (o += "/v2"), n = o + "/" + qt.pcName + (Mt.useRTL ? "Rtl" : "") + ".json", r = jt.pcAsset, i = t, [4, this.otFetch(n)]);
                    case 1:
                        r[i] = e.sent(), e.label = 2;
                    case 2:
                        return [2, jt.pcAsset[t]]
                }
            })
        })
    }, Cn.prototype.getBannerContent = function(l, c) {
        return void 0 === l && (l = !1), void 0 === c && (c = null), d(this, void 0, void 0, function() {
            var t, o, n, r, i, s, a;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        if (t = Mt.useRTL ? ee.RTL : ee.LTR, o = c || Go.getDataLanguageCulture(), jt.bAsset[t] && !l) return [3, 2];
                        if (n = qt.getRegionRule(), r = void 0, wt.fp.CookieV2SSR) {
                            if (qt.previewMode) return i = JSON.parse(window.sessionStorage.getItem("otPreviewData")), [2, Promise.resolve(i.bLayout)];
                            r = qt.bannerDataParentURL + "/" + n.Id, qt.canUseConditionalLogic && (r += "/" + qt.Condition.Id), r += "/bLayout-" + o + ".json"
                        } else r = Jt.getBannerSDKAssestsUrl() + "/" + qt.bannerName + (Mt.useRTL ? "Rtl" : "") + ".json";
                        return s = jt.bAsset, a = t, [4, this.otFetch(r)];
                    case 1:
                        s[a] = e.sent(), e.label = 2;
                    case 2:
                        return [2, jt.bAsset[t]]
                }
            })
        })
    }, Cn.prototype.getCommonStyles = function(i) {
        return void 0 === i && (i = !1), d(this, void 0, void 0, function() {
            var t, o, n, r;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = Mt.useRTL ? ee.RTL : ee.LTR, jt.cStyles[t] && !i ? [3, 2] : (o = Jt.getBannerSDKAssestsUrl() + "/otCommonStyles" + (Mt.useRTL ? "Rtl" : "") + ".css", n = jt.cStyles, r = t, [4, this.otFetch(o, !0)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, jt.cStyles[t]]
                }
            })
        })
    }, Cn.prototype.getSyncNtfyContent = function() {
        return d(this, void 0, void 0, function() {
            var t, o, n, r;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = Mt.useRTL ? ee.RTL : ee.LTR, jt.syncNtfyContent[t] ? [3, 2] : (o = Jt.getBannerSDKAssestsUrl() + "/otSyncNotification" + (Mt.useRTL ? "Rtl" : "") + ".json", n = jt.syncNtfyContent, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, jt.syncNtfyContent[t]]
                }
            })
        })
    }, Cn.prototype.getConsentProfile = function(e, t) {
        var o = this,
            n = {
                Identifier: e,
                TenantId: jt.tenantId,
                Authorization: t
            };
        return new Promise(function(e) {
            o.getJSON(jt.consentApi, n, e, e)
        })
    }, Cn.prototype.checkIfRequiresPollyfill = function() {
        var e = window.navigator.userAgent;
        return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/") || "undefined" == typeof Set
    }, Cn.prototype.otFetch = function(r, i, s) {
        return void 0 === i && (i = !1), void 0 === s && (s = !1), d(this, void 0, void 0, function() {
            var t, o, n = this;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return Jt.checkMobileOfflineRequest(r) ? [4, Jt.otFetchOfflineFile(r)] : [3, 2];
                    case 1:
                        return [2, e.sent()];
                    case 2:
                        return e.trys.push([2, 9, , 10]), qt.mobileOnlineURL.push(r), "undefined" != typeof fetch ? [3, 3] : [2, new Promise(function(e) {
                            n.getJSON(r, null, e, e, i)
                        })];
                    case 3:
                        return [4, fetch(r)];
                    case 4:
                        return t = e.sent(), s && t.headers.get("Access-Control-Allow-Credentials") ? [2, Promise.resolve()] : i ? [4, t.text()] : [3, 6];
                    case 5:
                        return [2, e.sent()];
                    case 6:
                        return [4, t.json()];
                    case 7:
                        return [2, e.sent()];
                    case 8:
                        return [3, 10];
                    case 9:
                        return o = e.sent(), console.log("Error in fetch URL : " + r + " Exception :" + o), [3, 10];
                    case 10:
                        return [2]
                }
            })
        })
    }, Cn.prototype.getJSON = function(e, t, o, n, r) {
        void 0 === t && (t = null), void 0 === r && (r = !1);
        var i = new XMLHttpRequest;
        if (i.open("GET", e, !0), t)
            for (var s in t) i.setRequestHeader(s, t[s]);
        i.onload = function() {
            if (200 <= this.status && this.status < 400 && this.responseText) {
                var e = void 0;
                e = r ? this.responseText : JSON.parse(this.responseText), o(e)
            } else n({
                message: "Error Loading Data",
                statusCode: this.status
            })
        }, i.onerror = function(e) {
            n(e)
        }, i.send()
    }, Cn);

    function Cn() {}
    var yn, fn = (vn.prototype.initializeFeaturesAndSpecialPurposes = function() {
        jt.oneTrustIABConsent.features = [], jt.oneTrustIABConsent.specialPurposes = [], Mt.Groups.forEach(function(e) {
            if ("IAB2_FEATURE" === e.Type || "IAB2_SPL_PURPOSE" === e.Type) {
                var t = {};
                t.groupId = e.OptanonGroupId, t.purposeId = e.PurposeId, t.value = !0, "IAB2_FEATURE" === e.Type ? jt.oneTrustIABConsent.features.push(t) : jt.oneTrustIABConsent.specialPurposes.push(t)
            }
        })
    }, vn.prototype.initGrpsAndHosts = function() {
        this.initializeGroupData(qt.consentableGrps), Mt.showCookieList && Jt.isOptOutEnabled() ? this.initializeHostData(qt.consentableGrps) : (jt.hostsConsent = [], Co.writeHstParam(Ge.OPTANON_CONSENT))
    }, vn.prototype.ensureHtmlGroupDataInitialised = function() {
        if (this.initGrpsAndHosts(), jt.showGeneralVendors && (Po.populateGenVendorLists(), Po.initGenVendorConsent()), Mt.IsIabEnabled && (this.initializeIABData(), this.initializeFeaturesAndSpecialPurposes()), jt.vsIsActiveAndOptOut && this.initializeVendorsService(), no.setOrUpdate3rdPartyIABConsentFlag(), no.setGeolocationInCookies(), Mt.IsConsentLoggingEnabled) {
            var e = window.OneTrust.dataSubjectParams || {},
                t = Gt.readCookieParam(Ge.OPTANON_CONSENT, "iType"),
                o = "",
                n = !1;
            t && jt.isV2Stub && e.id && e.token && (n = !0, o = U[t]), lo.createConsentTxn(!1, o, !1, n)
        }
    }, vn.prototype.initializeVendorsService = function() {
        var n = no.isAlertBoxClosedAndValid(),
            e = Gt.readCookieParam(Ge.OPTANON_CONSENT, ko),
            r = Nt.strToMap(e);
        jt.getVendorsInDomain().forEach(function(e, t) {
            if (!r.has(t)) {
                var o = !n && io.checkIsActiveByDefault(e.groupRef);
                r.set(t, o)
            }
        }), jt.vsConsent = r
    }, vn.prototype.initializeGroupData = function(e) {
        var t = Gt.readCookieParam(Ge.OPTANON_CONSENT, yo);
        t ? (To.synchroniseCookieGroupData(e), t = Gt.readCookieParam(Ge.OPTANON_CONSENT, yo), jt.groupsConsent = Nt.strToArr(t)) : (jt.groupsConsent = [], e.forEach(function(e) {
            jt.groupsConsent.push(e.CustomGroupId + (io.checkIsActiveByDefault(e) && e.HasConsentOptOut ? ":1" : ":0"))
        }), Mt.IsConsentLoggingEnabled && window.addEventListener("beforeunload", this.consentDefaulCall))
    }, vn.prototype.initializeHostData = function(e) {
        var t = Gt.readCookieParam(Ge.OPTANON_CONSENT, "hosts");
        if (t) To.synchroniseCookieHostData(), t = Gt.readCookieParam(Ge.OPTANON_CONSENT, "hosts"), jt.hostsConsent = Nt.strToArr(t), e.forEach(function(e) {
            io.isAlwaysActiveGroup(e) && e.Hosts.length && e.Hosts.forEach(function(e) {
                jt.oneTrustAlwaysActiveHosts.push(e.HostId)
            })
        });
        else {
            jt.hostsConsent = [];
            var r = {};
            e.forEach(function(e) {
                var o = io.isAlwaysActiveGroup(e),
                    n = jt.syncRequired ? To.groupHasConsent(e) : io.checkIsActiveByDefault(e);
                e.Hosts.length && e.Hosts.forEach(function(e) {
                    if (r[e.HostId]) To.updateHostStatus(e, n);
                    else {
                        r[e.HostId] = !0, o && jt.oneTrustAlwaysActiveHosts.push(e.HostId);
                        var t = To.isHostPartOfAlwaysActiveGroup(e.HostId);
                        jt.hostsConsent.push(e.HostId + (t || n ? ":1" : ":0"))
                    }
                })
            })
        }
    }, vn.prototype.consentDefaulCall = function() {
        var e = parseInt(Gt.readCookieParam(Ge.OPTANON_CONSENT, Be), 10);
        !isNaN(e) && 0 !== e || (wo.triggerGoogleAnalyticsEvent(Do, "Click", "No interaction"), Mt.IsConsentLoggingEnabled && lo.createConsentTxn(!0), window.removeEventListener("beforeunload", yn.consentDefaulCall))
    }, vn.prototype.fetchAssets = function(h) {
        return void 0 === h && (h = null), d(this, void 0, void 0, function() {
            var t, o, n, r, i, s, a, l, c, d, u, p;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return s = wt.moduleInitializer, a = no.isAlertBoxClosedAndValid(), l = !!h, c = yn.isFetchBanner(s.IsSuppressBanner, a), d = yn.cookieSettingBtnPresent(), i = "IAB2" === Mt.IabType ? Mt.PCShowPersistentCookiesHoverButton && (!Mt.PCenterDynamicRenderingEnable || Mt.PCenterDynamicRenderingEnable && !d) : Mt.PCShowPersistentCookiesHoverButton, u = "true" === jt.urlParams.get(ut), jt.hideBanner = u, [4, Promise.all([!c || Mt.NoBanner || u ? Promise.resolve(null) : hn.getBannerContent(l, h), !s.IsSuppressPC || jt.isPCVisible ? hn.getPcContent() : Promise.resolve(null), i ? hn.getCSBtnContent() : Promise.resolve(null), hn.getCommonStyles()])];
                    case 1:
                        return p = e.sent(), t = p[0], o = p[1], n = p[2], r = p[3], yn.fetchContent(t, o, n, r), yn.setCookieListGroupData(), [2]
                }
            })
        })
    }, vn.prototype.fetchContent = function(e, t, o, n) {
        if (e) {
            var r = e.html;
            wt.fp.CookieV2SSR || (r = atob(e.html)), this.bannerGroup = {
                name: e.name,
                html: r,
                css: e.css
            }
        }
        t && (this.preferenceCenterGroup = {
            name: t.name,
            html: atob(t.html),
            css: t.css
        }, wt.isV2Template = Mt.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name)), o && (this.csBtnGroup = {
            name: "CookieSettingsButton",
            html: atob(o.html),
            css: o.css
        }), n && (this.commonStyles = n)
    }, vn.prototype.cookieSettingBtnPresent = function() {
        return Wt("#ot-sdk-btn").length || Wt(".ot-sdk-show-settings").length || Wt(".optanon-show-settings").length
    }, vn.prototype.isFetchBanner = function(e, t) {
        return !e || Mt.ShowAlertNotice && !t && e && !Wt("#onetrust-banner-sdk").length
    }, vn.prototype.setCookieListGroupData = function() {
        if (!wt.fp.CookieV2TrackingTechnologies) {
            var e = (new Vo).assets();
            yn.cookieListGroup = {
                name: e.name,
                html: e.html,
                css: Mt.useRTL ? e.cssRTL : e.css
            }
        }
    }, vn.prototype.initializeIabPurposeConsentOnReload = function() {
        var t = this;
        qt.consentableIabGrps.forEach(function(e) {
            t.setIABConsent(e, !1), e.IsLegIntToggle = !0, t.setIABConsent(e, !1)
        })
    }, vn.prototype.initializeIABData = function(o, n, r) {
        var i = this;
        void 0 === o && (o = !1), void 0 === n && (n = !1), void 0 === r && (r = !1);
        var e = jt.oneTrustIABConsent;
        e.purpose = [], e.vendors = [], e.legIntVendors = [], e.specialFeatures = [], e.legimateInterest = [];
        var t = jt.addtlVendors,
            s = Mt.VendorConsentModel === No;
        if (t.vendorConsent = [], !e.IABCookieValue || o || n || no.reconsentRequired()) {
            qt.consentableIabGrps.forEach(function(e) {
                if (n && !r) i.setIABConsent(e, io.isAlwaysActiveGroup(e));
                else if (r) e.HasConsentOptOut && i.setIABConsent(e, !1);
                else {
                    var t = o && e.HasConsentOptOut;
                    i.setIABConsent(e, t), "IAB2_PURPOSE" === e.Type && (e.IsLegIntToggle = !0, i.setIABConsent(e, e.HasLegIntOptOut))
                }
            }), Mt.IsIabEnabled && r && (jt.oneTrustIABConsent.legimateInterest = jt.vendors.selectedLegInt.slice());
            var a = o || !n && s;
            r && (a = s), no.setIABVendor(a, r), !no.reconsentRequired() || o || n || no.resetTCModel()
        } else this.initializeIabPurposeConsentOnReload(), po.populateGoogleConsent(), po.populateVendorAndPurposeFromCookieData()
    }, vn.prototype.canSoftOptInInsertForGroup = function(e) {
        var t = io.getGroupById(e);
        if (t) {
            var o = t && !t.Parent ? t : io.getParentGroup(t.Parent);
            return "inactive landingpage" !== io.getGrpStatus(o).toLowerCase() || !_o.isLandingPage()
        }
    }, vn.prototype.setIABConsent = function(e, t) {
        e.Type === At ? this.setIabSpeciFeatureConsent(e, t) : e.IsLegIntToggle ? (this.setIabLegIntConsent(e, t), e.IsLegIntToggle = !1) : this.setIabPurposeConsent(e, t)
    }, vn.prototype.setIabPurposeConsent = function(o, n) {
        var r = !1;
        jt.oneTrustIABConsent.purpose = jt.oneTrustIABConsent.purpose.map(function(e) {
            var t = e.split(":")[0];
            return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
        }), r || jt.oneTrustIABConsent.purpose.push(o.IabGrpId + ":" + n)
    }, vn.prototype.setIabLegIntConsent = function(o, n) {
        var r = !1;
        jt.oneTrustIABConsent.legimateInterest = jt.oneTrustIABConsent.legimateInterest.map(function(e) {
            var t = e.split(":")[0];
            return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
        }), r || jt.oneTrustIABConsent.legimateInterest.push(o.IabGrpId + ":" + n)
    }, vn.prototype.setIabSpeciFeatureConsent = function(o, n) {
        var r = !1;
        jt.oneTrustIABConsent.specialFeatures = jt.oneTrustIABConsent.specialFeatures.map(function(e) {
            var t = e.split(":")[0];
            return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
        }), r || jt.oneTrustIABConsent.specialFeatures.push(o.IabGrpId + ":" + n)
    }, vn);

    function vn() {}
    var kn, mn = (bn.prototype.getAllowAllButton = function() {
        return Wt("#onetrust-pc-sdk #accept-recommended-btn-handler")
    }, bn.prototype.getSelectedVendors = function() {
        return Wt("#onetrust-pc-sdk " + $t.P_Tgl_Cntr + " .ot-checkbox input:checked")
    }, bn);

    function bn() {}
    var Pn, Sn = (An.prototype.setBannerFocus = function() {
        var e = Array.prototype.slice.call(Wt("#onetrust-banner-sdk .onetrust-vendors-list-handler").el),
            t = Array.prototype.slice.call(Wt('#onetrust-banner-sdk #onetrust-policy-text [href],#onetrust-banner-sdk #onetrust-policy-text button,#onetrust-banner-sdk #onetrust-policy-text [tabindex]:not([tabindex="-1"])').el),
            o = Array.prototype.slice.call(Wt("#onetrust-banner-sdk .ot-bnr-save-handler").el),
            n = Array.prototype.slice.call(Wt("#onetrust-banner-sdk #onetrust-pc-btn-handler").el),
            r = Array.prototype.concat.call(Array.prototype.slice.call(Wt("#onetrust-banner-sdk .category-switch-handler:not([disabled])").el), Array.prototype.slice.call(Wt("#onetrust-banner-sdk .ot-cat-lst button").el), e),
            i = Array.prototype.concat.call(t, r),
            s = Array.prototype.slice.call(Wt("#onetrust-banner-sdk .onetrust-close-btn-handler").el);
        qt.bannerName === tt && (i = Array.prototype.concat.call(e, t));
        var a = Array.prototype.slice.call(Wt("#onetrust-banner-sdk #onetrust-accept-btn-handler").el),
            l = Array.prototype.slice.call(Wt("#onetrust-banner-sdk #onetrust-reject-all-handler").el),
            c = Array.prototype.concat.call(o, a, l, n);
        (qt.bannerName !== Ze || Mt.IsIabEnabled) && qt.bannerName !== $e && qt.bannerName !== nt || (c = Array.prototype.concat.call(n, l, a));
        var d = Array.prototype.slice.call(Wt("#onetrust-banner-sdk .ot-gv-list-handler").el);
        qt.bannerName === rt ? (i = Array.prototype.concat.call(d, i), c = Array.prototype.slice.call(Wt("#onetrust-banner-sdk #onetrust-button-group button").el)) : i = Array.prototype.concat.call(i, d), this.bannerEl = Array.prototype.concat.call(Array.prototype.slice.call(Wt("#onetrust-banner-sdk #onetrust-cookie-btn").el), i, Array.prototype.slice.call(Wt("#onetrust-banner-sdk .banner-option-input").el), c, Array.prototype.slice.call(Wt("#onetrust-banner-sdk .ot-bnr-footer-logo a").el), s), this.banner = Wt("#onetrust-banner-sdk").el[0], (Mt.BInitialFocus || Mt.BInitialFocusLinkAndButton || Mt.ForceConsent) && (Mt.BInitialFocus ? this.banner.focus() : this.bannerEl[0].focus())
    }, An.prototype.handleBannerFocus = function(e, t) {
        var o = e.target,
            n = Pn.bannerEl,
            r = n.indexOf(o),
            i = n.length - 1,
            s = null;
        if (this.handleBannerFocusBodyReset(t, r, i)) Jt.resetFocusToBody();
        else if (this.banner === o) s = this.handleInitialBannerFocus(t, n, i, s);
        else
            for (; !s;) {
                var a = void 0;
                0 !== (a = t ? r <= 0 ? n[i] : n[r - 1] : r === i ? n[0] : n[r + 1]).clientHeight || 0 !== a.offsetHeight ? s = a : t ? r-- : r++
            }
        s && (e.preventDefault(), s.focus())
    }, An.prototype.handleBannerFocusBodyReset = function(e, t, o) {
        return !(Mt.ForceConsent || !Mt.BInitialFocus && !Mt.BInitialFocusLinkAndButton || !(e && 0 === t || !e && t === o))
    }, An.prototype.handleInitialBannerFocus = function(e, t, o, n) {
        return e && Mt.ForceConsent ? n = t[o] : e || (n = t[0]), n
    }, An.prototype.setPCFocus = function(e) {
        if (e && !(e.length <= 0)) {
            for (var t = 0; t < e.length; t++) e[t].setAttribute("tabindex", "0");
            this.setFirstAndLast(e);
            var o = Mt.ShowPreferenceCenterCloseButton,
                n = o ? this.getElementForFocus(e, Mt.PCLayout.Popup ? 2 : 1, !0) : null,
                r = {
                    preventScroll: !0
                };
            this.firstItem ? o ? n.focus(r) : this.firstItem.focus(r) : e[0].focus(), this.firstItem && Wt(this.firstItem).on("keydown", Pn.firstItemHandler), this.lastItem && Wt(this.lastItem).on("keydown", Pn.lastItemHandler)
        }
    }, An.prototype.setFirstAndLast = function(e) {
        this.firstItem = this.getElementForFocus(e, 0, !0), this.lastItem = this.firstItem ? this.getElementForFocus(e, e.length - 1, !1) : null
    }, An.prototype.setLastItem = function() {
        var e = this.getPCElements(),
            t = this.getElementForFocus(e, e.length - 1, !1);
        t !== this.lastItem && (Wt(this.lastItem).off("keydown", Pn.lastItemHandler), this.lastItem = t, Wt(t).on("keydown", Pn.lastItemHandler))
    }, An.prototype.getPCElements = function() {
        var e = "#onetrust-pc-sdk #close-pc-btn-handler,\n            #onetrust-pc-sdk .back-btn-handler,\n            #onetrust-pc-sdk ." + $t.P_Active_Menu + ',\n            #onetrust-pc-sdk input,\n            #onetrust-pc-sdk a,\n            #onetrust-pc-sdk [tabindex="0"] button,\n            #onetrust-pc-sdk .save-preference-btn-handler,\n            #onetrust-pc-sdk .ot-pc-refuse-all-handler,\n            #onetrust-pc-sdk #accept-recommended-btn-handler';
        return jt.pcLayer === E.CookieList ? e += " ,#onetrust-pc-sdk " + $t.P_Content + " .powered-by-logo" : e += ",#onetrust-pc-sdk #vendor-list-save-btn .powered-by-logo", Array.prototype.slice.call(Wt(e).el)
    }, An.prototype.getActiveTab = function() {
        return document.querySelector('#onetrust-pc-sdk .category-menu-switch-handler[tabindex="0"]')
    }, An.prototype.getElementForFocus = function(e, t, o) {
        for (var n = e[t]; o ? n && null === n.offsetParent && t < e.length - 1 : n && null === n.offsetParent && 0 < t;) n = e[t], o ? ++t : --t;
        return n
    }, An.prototype.firstItemHandler = function(e) {
        var t = document.getElementById("onetrust-banner-sdk");
        if (9 === e.keyCode && e.shiftKey && Pn.firstItem !== t) e.preventDefault(), Pn.lastItem.focus();
        else {
            var o = "close-pc-btn-handler" === e.target.id && ("13" === e.keyCode || "32" === e.keyCode || "Enter" === e.code || "Space" === e.code);
            if (Mt.PCLayout.Tab && jt.pcLayer === E.PrefCenterHome && !o) {
                var n = Pn.getActiveTab();
                n && (e.preventDefault(), n.focus())
            }
        }
    }, An.prototype.lastItemHandler = function(e) {
        if (9 === e.keyCode && !e.shiftKey) {
            e.preventDefault();
            var t = jt.pcLayer === E.VendorList || jt.pcLayer === E.CookieList;
            Mt.PCLayout.Tab && jt.isPCVisible && !Mt.ShowPreferenceCenterCloseButton && !t ? Pn.getActiveTab().focus() : Pn.firstItem.focus()
        }
    }, An);

    function An() {
        this.bannerEl = []
    }
    var Tn, In = (Ln.prototype.getAllGroupElements = function() {
        return document.querySelectorAll("div#onetrust-pc-sdk " + $t.P_Category_Grp + " " + $t.P_Category_Item + ":not(.ot-vnd-item)")
    }, Ln.prototype.toggleGrpElements = function(e, t, o, n) {
        void 0 === n && (n = !1), qt.pcName === dt && Mt.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
        for (var r = e.querySelectorAll('input[class*="category-switch-handler"]'), i = 0; i < r.length; i++) {
            var s = r[i].getAttribute("id").includes("leg-out");
            n && (!n || s) || (Nt.setCheckedAttribute(null, r[i], o), r[i] && Mt.PCShowConsentLabels && (r[i].parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? Mt.PCActiveText : Mt.PCInactiveText))
        }
        qt.legIntSettings.PAllowLI && qt.legIntSettings.PShowLegIntBtn && t.Type === St && t.HasLegIntOptOut && !n && Tn.updateLegIntBtnElement(e.querySelector(".ot-leg-btn-container"), o)
    }, Ln.prototype.toogleAllSubGrpElements = function(e, t) {
        if (e.ShowSubgroup) {
            var o = e.CustomGroupId,
                n = this.getGroupElementByOptanonGroupId(o.toString());
            Tn.toogleSubGroupElement(n, t, e.IsLegIntToggle)
        } else this.updateHiddenSubGroupData(e, t)
    }, Ln.prototype.toogleSubGroupElement = function(e, t, o, n) {
        void 0 === o && (o = !1), void 0 === n && (n = !1), qt.pcName === dt && Mt.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
        for (var r = e.querySelectorAll("li" + $t.P_Subgrp_li), i = 0; i < r.length; i++) {
            var s = io.getGroupById(r[i].getAttribute("data-optanongroupid")),
                a = s.OptanonGroupId,
                l = io.getParentGroup(s.Parent);
            qt.legIntSettings.PAllowLI && qt.legIntSettings.PShowLegIntBtn && o && s.Type === St && s.HasLegIntOptOut && l.ShowSubgroupToggle && Tn.updateLegIntBtnElement(r[i], t);
            var c = o ? "[id='ot-sub-group-id-" + a + "-leg-out']" : "[id='ot-sub-group-id-" + a + "']",
                d = r[i].querySelector('input[class*="cookie-subgroup-handler"]' + c);
            Nt.setCheckedAttribute(null, d, t), d && Mt.PCShowConsentLabels && (d.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = t ? Mt.PCActiveText : Mt.PCInactiveText), n || (s.IsLegIntToggle = o, Tn.toggleGrpStatus(s, t), s.IsLegIntToggle = !1, To.toggleGroupHosts(s, t), jt.genVenOptOutEnabled && To.toggleGroupGenVendors(s, t))
        }
    }, Ln.prototype.toggleGrpStatus = function(e, t) {
        var o = e.IsLegIntToggle && e.Type === St ? t ? nn : on : t ? Xo : Qo;
        wo.triggerGoogleAnalyticsEvent(Do, o, e.GroupName + ": " + e.OptanonGroupId), t ? this.updateEnabledGroupData(e) : this.updateDisabledGroupData(e)
    }, Ln.prototype.setInputID = function(e, t, o, n, r) {
        Wt(e).attr("id", t), Wt(e).attr("name", t), Wt(e).data("optanonGroupId", o), Nt.setCheckedAttribute(null, e, n), Wt(e).attr("aria-labelledby", r)
    }, Ln.prototype.updateEnabledGroupData = function(e) {
        if (-1 < Vt.indexOf(e.Type)) this.updateIabGroupData(e, !0);
        else {
            var t = Tn.getGroupVariable(),
                o = Nt.indexOf(t, e.CustomGroupId + ":0"); - 1 !== o && (t[o] = e.CustomGroupId + ":1")
        }
    }, Ln.prototype.updateDisabledGroupData = function(e) {
        if (-1 < Vt.indexOf(e.Type)) this.updateIabGroupData(e, !1);
        else if (e.Status !== qe) {
            var t = Tn.getGroupVariable(),
                o = Nt.indexOf(t, e.CustomGroupId + ":1"); - 1 !== o && (t[o] = e.CustomGroupId + ":0")
        }
    }, Ln.prototype.updateIabGroupData = function(e, t) {
        if (e.Type === At) this.updateIabSpecialFeatureData(e.IabGrpId, t);
        else {
            var o = e.IsLegIntToggle ? jt.vendors.selectedLegInt : jt.vendors.selectedPurpose;
            this.updateIabPurposeData(e.IabGrpId, t, o)
        }
    }, Ln.prototype.isAllSubgroupsDisabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return Tn.isGroupActive(e)
        })
    }, Ln.prototype.isAllSubgroupsEnabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return Tn.IsGroupInActive(e)
        })
    }, Ln.prototype.toggleGroupHtmlElement = function(e, t, o) {
        if (qt.legIntSettings.PAllowLI && qt.legIntSettings.PShowLegIntBtn && e.Type === St && e.HasLegIntOptOut) {
            var n = document.querySelector("[data-el-id=" + t + "]");
            n && this.updateLegIntBtnElement(n, o)
        }
        var r = Wt("#ot-group-id-" + t).el[0];
        Nt.setCheckedAttribute(null, r, o), r && Mt.PCShowConsentLabels && (r.parentElement.querySelector(".ot-label-status").innerHTML = o ? Mt.PCActiveText : Mt.PCInactiveText)
    }, Ln.prototype.updateLegIntBtnElement = function(e, t) {
        var o = qt.legIntSettings,
            n = e.querySelector(".ot-obj-leg-btn-handler"),
            r = e.querySelector(".ot-remove-objection-handler");
        t ? (n.classList.add("ot-inactive-leg-btn"), n.classList.add("ot-leg-int-enabled"), n.classList.remove("ot-active-leg-btn")) : (n.classList.add("ot-active-leg-btn"), n.classList.remove("ot-inactive-leg-btn"), n.classList.remove("ot-leg-int-enabled")), n.querySelector("span").innerText = t ? o.PObjectLegIntText : o.PObjectionAppliedText, xt(r, "display: " + (t ? "none" : "inline-block") + ";", !0)
    }, Ln.prototype.isGroupActive = function(e) {
        return -1 < Vt.indexOf(e.Type) ? -1 !== this.isIabPurposeActive(e) : -1 !== zt.inArray(e.CustomGroupId + ":1", Tn.getGroupVariable())
    }, Ln.prototype.safeFormattedGroupDescription = function(e) {
        return e && e.GroupDescription ? e.GroupDescription.replace(/\r\n/g, "<br>") : ""
    }, Ln.prototype.canInsertForGroup = function(e, t) {
        void 0 === t && (t = !1);
        var o, n = null != e && void 0 !== e,
            r = Gt.readCookieParam(Ge.OPTANON_CONSENT, "groups"),
            i = jt.groupsConsent.join(","),
            s = Gt.readCookieParam(Ge.OPTANON_CONSENT, "hosts"),
            a = jt.hostsConsent.join(",");
        if (t) return !0;
        r === i && s === a || yn.ensureHtmlGroupDataInitialised();
        var l = [];
        if (jt.showGeneralVendors)
            for (var c = 0, d = Object.entries(jt.genVendorsConsent); c < d.length; c++) {
                var u = d[c],
                    p = u[0],
                    h = u[1];
                l.push(p + ":" + (h ? "1" : "0"))
            }
        jt.showVendorService && jt.vsConsent.forEach(function(e, t) {
            l.push(t + ":" + (e ? "1" : "0"))
        });
        var g = jt.groupsConsent.concat(jt.hostsConsent).concat(l);
        o = Nt.contains(g, e + ":1");
        var C = this.doesHostExist(e),
            y = this.doesGroupExist(e),
            f = !1;
        jt.showGeneralVendors ? f = this.doesGenVendorExist(e) : jt.showVendorService && (f = this.doesVendorServiceExist(e));
        var v = !(!C && !f) || o && yn.canSoftOptInInsertForGroup(e);
        return !(!n || !(o && v || !y && !C && !f))
    }, Ln.prototype.setAllowAllButton = function() {
        var t = 0,
            e = Mt.Groups.some(function(e) {
                if (-1 === Et.indexOf(e.Type)) return Tn.IsGroupInActive(e) && t++, e.SubGroups.some(function(e) {
                    return Tn.IsGroupInActive(e)
                }) && t++, 1 <= t
            }),
            o = kn.getAllowAllButton();
        return e ? o.show("inline-block") : o.hide(), Pn.lastItem && Pn.setLastItem(), e
    }, Ln.prototype.getGroupVariable = function() {
        return jt.groupsConsent
    }, Ln.prototype.IsGroupInActive = function(e) {
        return -1 < Vt.indexOf(e.Type) ? -1 === this.isIabPurposeActive(e) : !(-1 < Et.indexOf(e.Type)) && -1 === zt.inArray(e.CustomGroupId + ":1", Tn.getGroupVariable())
    }, Ln.prototype.updateIabPurposeData = function(t, e, o) {
        var n = Nt.findIndex(o, function(e) {
            return e.split(":")[0] === t
        });
        o[n = -1 === n ? Number(t) : n] = t + ":" + e
    }, Ln.prototype.updateIabSpecialFeatureData = function(t, e) {
        var o = Nt.findIndex(jt.vendors.selectedSpecialFeatures, function(e) {
            return e.split(":")[0] === t
        });
        o = -1 === o ? Number(t) : o, jt.vendors.selectedSpecialFeatures[o] = t + ":" + e
    }, Ln.prototype.getGroupElementByOptanonGroupId = function(e) {
        return document.querySelector("#onetrust-pc-sdk " + $t.P_Category_Grp + " " + $t.P_Category_Item + '[data-optanongroupid=\n            "' + e + '"]')
    }, Ln.prototype.updateHiddenSubGroupData = function(e, t) {
        e.SubGroups.forEach(function(e) {
            Tn.toggleGrpStatus(e, t), To.toggleGroupHosts(e, t), jt.genVenOptOutEnabled && To.toggleGroupGenVendors(e, t)
        })
    }, Ln.prototype.isIabPurposeActive = function(e) {
        var t;
        return t = e.Type === At ? jt.vendors.selectedSpecialFeatures : e.IsLegIntToggle ? jt.vendors.selectedLegInt : jt.vendors.selectedPurpose, zt.inArray(e.IabGrpId + ":true", t)
    }, Ln.prototype.doesGroupExist = function(e) {
        return !!io.getGroupById(e)
    }, Ln.prototype.doesHostExist = function(e) {
        var t = jt.hostsConsent;
        return -1 !== t.indexOf(e + ":0") || -1 !== t.indexOf(e + ":1")
    }, Ln.prototype.doesGenVendorExist = function(t) {
        return !!Mt.GeneralVendors && !!Mt.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        })
    }, Ln.prototype.doesVendorServiceExist = function(e) {
        return jt.getVendorsInDomain().has(e)
    }, Ln);

    function Ln() {}
    var _n, Vn = (En.prototype.updateFilterSelection = function(e) {
        var t, o;
        void 0 === e && (e = !1), o = e ? (t = jt.filterByCategories, "data-optanongroupid") : (t = jt.filterByIABCategories, "data-purposeid");
        for (var n = Wt("#onetrust-pc-sdk .category-filter-handler").el, r = 0; r < n.length; r++) {
            var i = n[r].getAttribute(o),
                s = -1 < t.indexOf(i);
            Nt.setCheckedAttribute(null, n[r], s)
        }
    }, En.prototype.cancelHostFilter = function() {
        for (var e = Wt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid"),
                n = 0 <= jt.filterByCategories.indexOf(o);
            Nt.setCheckedAttribute(null, e[t], n)
        }
    }, En.prototype.updateHostFilterList = function() {
        for (var e = Wt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid");
            if (e[t].checked && jt.filterByCategories.indexOf(o) < 0) jt.filterByCategories.push(o);
            else if (!e[t].checked && -1 < jt.filterByCategories.indexOf(o)) {
                var n = jt.filterByCategories;
                jt.filterByCategories.splice(n.indexOf(o), 1)
            }
        }
        return jt.filterByCategories
    }, En.prototype.InitializeHostList = function() {
        jt.hosts.hostTemplate = Wt($t.P_Vendor_List + " " + $t.P_Host_Cntr + " li").el[0].cloneNode(!0), jt.hosts.hostCookieTemplate = Wt($t.P_Vendor_List + " " + $t.P_Host_Cntr + " " + $t.P_Host_Opt + " li").el[0].cloneNode(!0)
    }, En.prototype.getCookiesForGroup = function(t) {
        var o = [],
            n = [];
        return t.FirstPartyCookies.length && t.FirstPartyCookies.forEach(function(e) {
            n.push(r(r({}, e), {
                groupName: t.GroupName
            }))
        }), t.Hosts.length && t.Hosts.forEach(function(e) {
            o.push(r(r({}, e), {
                isActive: "always active" === io.getGrpStatus(t).toLowerCase(),
                groupName: t.GroupName,
                Type: J.Host
            }))
        }), {
            firstPartyCookiesList: n,
            thirdPartyCookiesList: o
        }
    }, En.prototype.reactivateSrcTag = function(e) {
        var t = ["src"];
        e.setAttribute(t[0], e.getAttribute("data-" + t[0])), e.removeAttribute("data-src")
    }, En.prototype.reactivateScriptTag = function(e) {
        var t = e.parentNode,
            o = document.createElement(e.tagName);
        o.innerHTML = e.innerHTML;
        var n = e.attributes;
        if (0 < n.length)
            for (var r = 0; r < n.length; r++) "type" !== n[r].name ? o.setAttribute(n[r].name, n[r].value, !0) : o.setAttribute("type", "text/javascript", !0);
        t.appendChild(o), t.removeChild(e)
    }, En.prototype.reactivateTag = function(e, t) {
        var o, n = 0 <= e.className.indexOf("ot-vscat"),
            r = 0 <= e.className.indexOf("optanon-category");
        n && r ? o = this.getGroupElements(e.className, jt.showVendorService) : n ? jt.showVendorService ? o = this.getGroupElements(e.className, !0) : this.unBlockTag(t, e) : r && (jt.showVendorService ? this.unBlockTag(t, e) : o = this.getGroupElements(e.className, !1));
        var i = !0;
        if (o && 0 < o.length) {
            for (var s = 0; s < o.length; s++)
                if (!Tn.canInsertForGroup(o[s].trim())) {
                    i = !1;
                    break
                }
            i && this.unBlockTag(t, e)
        }
    }, En.prototype.unBlockTag = function(e, t) {
        e ? this.reactivateSrcTag(t) : this.reactivateScriptTag(t)
    }, En.prototype.getGroupElements = function(e, t) {
        return t ? e.match(/ot-vscat(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/ot-vscat-/i)[1].split("-") : e.match(/optanon-category(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/optanon-category-/i)[1].split("-")
    }, En.prototype.substitutePlainTextScriptTags = function() {
        var t = this,
            e = [].slice.call(document.querySelectorAll('script[class*="optanon-category"]')),
            o = [].slice.call(document.querySelectorAll('*[class*="optanon-category"]'));
        e = Array.from(new Set(e.concat([].slice.call(document.querySelectorAll('script[class*="ot-vscat"]') || [])))), o = Array.from(new Set(o.concat([].slice.call(document.querySelectorAll('*[class*="ot-vscat"]') || [])))), Array.prototype.forEach.call(o, function(e) {
            "SCRIPT" !== e.tagName && e.hasAttribute("data-src") && t.reactivateTag(e, !0)
        }), Array.prototype.forEach.call(e, function(e) {
            e.hasAttribute("type") && "text/plain" === e.getAttribute("type") && t.reactivateTag(e, !1)
        })
    }, En);

    function En() {}
    var Bn, wn = (xn.prototype.getSearchQuery = function(e) {
        var t = this,
            o = e.trim().split(/\s+/g);
        return new RegExp(o.map(function(e) {
            return t.escapeRegExp(e)
        }).join("|") + "(.+)?", "gi")
    }, xn.prototype.escapeRegExp = function(e) {
        return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
    }, xn.prototype.setGlobalFilteredList = function(e) {
        return jt.currentGlobalFilteredList = e
    }, xn.prototype.filterList = function(t, e, n) {
        var o = n && n.length;
        if ("" === t && !o) return this.setGlobalFilteredList(e);
        if (o) {
            var r = Wt("#onetrust-pc-sdk " + $t.P_Fltr_Options + " input").el.length,
                i = [],
                s = !1;
            r !== n.length ? e.forEach(function(o) {
                s = !0, o.vendorName && n.forEach(function(e) {
                    var t = parseInt(qt.iabGrpIdMap[e]); - 1 < e.indexOf("IFEV2_") ? (o.features || []).forEach(function(e) {
                        e.featureId === t && i.push(o)
                    }) : -1 < e.indexOf("ISFV2_") ? o.specialFeatures.forEach(function(e) {
                        e.featureId === t && i.push(o)
                    }) : -1 < e.indexOf("ISPV2_") ? (o.specialPurposes || []).forEach(function(e) {
                        e.purposeId === t && i.push(o)
                    }) : (o.purposes.forEach(function(e) {
                        e.purposeId === t && i.push(o)
                    }), o.legIntPurposes.forEach(function(e) {
                        e.purposeId === t && i.push(o)
                    }))
                })
            }) : i = e, s && (i = i.filter(function(e, t, o) {
                return o.indexOf(e) === t
            })), this.setGlobalFilteredList(i)
        }
        return "" === t ? jt.currentGlobalFilteredList : jt.currentGlobalFilteredList.filter(function(e) {
            if (e.vendorName) return e.vendorName.toLowerCase().includes(t.toLowerCase())
        })
    }, xn.prototype.loadVendorList = function(e, t) {
        void 0 === e && (e = "");
        var o = jt.vendors;
        jt.currentGlobalFilteredList = o.list, e ? (o.searchParam = e, jt.filterByIABCategories = [], _n.updateFilterSelection(!1)) : o.searchParam !== e ? o.searchParam = "" : t = jt.filterByIABCategories;
        var n = this.filterList(o.searchParam, o.list, t);
        Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content).el[0].scrollTop = 0, this.initVendorsData(e, n)
    }, xn.prototype.searchVendors = function(e, t, o, n) {
        if (n) {
            var r = this.getSearchQuery(n),
                i = 0;
            for (var s in t)
                if (s) {
                    var a = o === oe.GoogleVendor ? s : t[s].VendorCustomId,
                        l = Wt("" + e.vendorAccBtn + a).el[0].parentElement;
                    r.lastIndex = 0, r.test(t[s][e.name]) ? (xt(l, this._displayNull, !0), i++) : xt(l, "display: none;", !0)
                }
            0 === i ? (Wt(e.accId).hide(), o === oe.GoogleVendor ? this.hasGoogleVendors = !1 : this.hasGenVendors = !1) : (o === oe.GoogleVendor ? this.hasGoogleVendors = !0 : this.hasGenVendors = !0, Wt(e.accId).show()), this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, n)
        } else
            for (var c = Wt(" " + e.venListId + ' li[style^="display: none"]').el, d = 0; d < c.length; d++) xt(c[d], this._displayNull, !0);
        var u = Wt("#onetrust-pc-sdk " + e.selectAllEvntHndlr).el[0];
        document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input[checked]") ? Nt.setCheckedAttribute("", u, !0) : Nt.setCheckedAttribute("", u, !1), document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input:not([checked])") ? u.parentElement.classList.add("line-through") : u.parentElement.classList.remove("line-through")
    }, xn.prototype.initGoogleVendors = function() {
        this.populateAddtlVendors(jt.addtlVendorsList), this.venAdtlSelAllTglEvent()
    }, xn.prototype.initGenVendors = function() {
        this.populateGeneralVendors(), Mt.GenVenOptOut && Mt.GeneralVendors && Mt.GeneralVendors.length && this.genVenSelectAllTglEvent()
    }, xn.prototype.resetAddtlVendors = function() {
        Bn.searchVendors(Bn.googleSearchSelectors, jt.addtlVendorsList, oe.GoogleVendor), this.showConsentHeader()
    }, xn.prototype.venAdtlSelAllTglEvent = function() {
        Bn.selectAllEventHandler({
            vendorsList: '#ot-addtl-venlst li:not([style^="display: none"]) .ot-ven-adtlctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-adtlvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-adtlven-handler"
        })
    }, xn.prototype.genVenSelectAllTglEvent = function() {
        var e = {
            vendorsList: $t.P_Gven_List + ' li:not([style^="display: none"]) .ot-ven-gvctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-gnven-handler"
        };
        Bn.selectAllEventHandler(e)
    }, xn.prototype.selectAllEventHandler = function(e) {
        for (var t = Wt(e.vendorsList).el, o = Wt(e.selAllCntr).el[0], n = Wt(e.selAllChkbox).el[0], r = !0, i = 0; i < t.length; i++) {
            if (!t[i].checked) {
                r = !1;
                break
            }
            r = !0
        }
        o && (r ? o.classList.remove("line-through") : o.classList.add("line-through")), n.checked = !0;
        for (var s = 0; s < t.length && !t[s].checked; s++) s !== t.length - 1 || t[s].checked || (n.checked = !1);
        Nt.setCheckedAttribute("", n, n.checked)
    }, xn.prototype.vendorLegIntToggleEvent = function() {
        for (var e = Wt($t.P_Vendor_Container + ' li:not([style^="display: none"]) .' + $t.P_Ven_Ltgl + " input").el, t = Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Vendor_Leg_El).el[0], o = Wt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++) i !== e.length - 1 || e[i].checked || (o.checked = !1);
        Nt.setCheckedAttribute("", o, o.checked)
    }, xn.prototype.vendorsListEvent = function() {
        for (var e = Wt($t.P_Vendor_Container + ' li:not([style^="display: none"]) .' + $t.P_Ven_Ctgl + " input").el, t = Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Vendor_Consent_El).el[0], o = Wt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++) i !== e.length - 1 || e[i].checked || (o.checked = !1);
        Nt.setCheckedAttribute("", o, o.checked)
    }, xn.prototype.showEmptyResults = function(e, t, o) {
        void 0 === o && (o = !1);
        var n = Wt("#onetrust-pc-sdk #no-results");
        e ? this.setNoResultsContent(t, o) : (Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content).removeClass("no-results"), n.length && n.remove())
    }, xn.prototype.playSearchStatus = function(e) {
        var t = e ? document.querySelectorAll($t.P_Host_Cntr + " > li") : document.querySelectorAll($t.P_Vendor_Container + ' li:not([style$="none;"]),' + $t.P_Gven_List + ' li:not([style$="none;"])'),
            o = t.length,
            n = Wt('#onetrust-pc-sdk [role="status"]');
        o ? n.text(t.length + " " + (e ? "host" : "vendor") + (1 < o ? "s" : "") + " returned.") : n.el[0].textContent = ""
    }, xn.prototype.setNoResultsContent = function(e, t) {
        void 0 === t && (t = !1);
        var o = Wt("#onetrust-pc-sdk #no-results").el[0];
        if (!o) {
            var n = document.createElement("div"),
                r = document.createElement("p"),
                i = document.createTextNode(" did not match any " + (t ? "hosts." : "vendors.")),
                s = document.createElement("span");
            return n.id = "no-results", s.id = "user-text", s.innerText = e, r.appendChild(s), r.appendChild(i), n.appendChild(r), Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content).addClass("no-results"), Wt("#vendor-search-handler").el[0].setAttribute("aria-describedby", n.id), Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content).append(n)
        }
        o.querySelector("span").innerText = e
    }, xn.prototype.searchHostList = function(e) {
        var t = jt.currentGlobalFilteredList;
        e && (t = this.searchList(e, t)), this.initHostData(e, t)
    }, xn.prototype.searchList = function(e, t) {
        var o = this.getSearchQuery(e);
        return t.filter(function(e) {
            return o.lastIndex = 0, o.test(e.DisplayName || e.HostName)
        })
    }, xn.prototype.setListSearchValues = function(e) {
        var t = Mt.PCenterVendorSearchAriaLabel,
            o = Mt.PCenterVendorListSearch,
            n = Mt.PCenterVendorsListText;
        e === Ae.cookies && (t = Mt.PCenterCookieSearchAriaLabel, o = Mt.PCenterCookieListSearch, n = Mt.PCenterCookiesListText), document.querySelector("#onetrust-pc-sdk " + $t.P_Vendor_Title).innerText = n;
        var r = Wt("#onetrust-pc-sdk " + $t.P_Vendor_Search_Input);
        r.el[0].placeholder = o, r.attr("aria-label", t)
    }, xn.prototype.initHostData = function(e, t) {
        jt.optanonHostList = t;
        var o = !1;
        this.setBackBtnTxt(), Wt($t.P_Vendor_List + " #select-all-text-container p").html(Mt.PCenterAllowAllConsentText), Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content + " ul" + $t.P_Host_Cntr).html(""), this.showEmptyResults(t && 0 === t.length, e, !0), this.setHostListSearchValues(), Wt("#filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, Mt.PCenterCookieListFilterAria), Wt("#filter-btn-handler title").html(Mt.PCenterCookieListFilterAria), wt.isV2Template && Wt("#ot-sel-blk span:first-child").html(Mt.PCenterAllowAllConsentText || Mt.ConsentText);
        for (var n = 0; n < t.length; n++) {
            var r = jt.hosts.hostTemplate.cloneNode(!0),
                i = t[n].DisplayName || t[n].HostName;
            this.createHostAccordions(i, r, n), o = this.createHostCheckboxes(i, t, n, r, o), i = this.populateHostDataIntoDOMElements(r, t, i, n)
        }
        var s = 1 === t.length && t[0].HostName === Mt.PCFirstPartyCookieListText;
        if (Jt.isOptOutEnabled() && !s) {
            Nt.setDisabledAttribute("#onetrust-pc-sdk #select-all-hosts-groups-handler", null, !o);
            for (var a = Wt("#onetrust-pc-sdk " + $t.P_Host_Cntr + " .ot-host-tgl input").el, l = 0; l < a.length; l++) a[l].addEventListener("click", this.hostsListEvent);
            Wt("#onetrust-pc-sdk " + $t.P_Select_Cntr).removeClass("ot-hide"), this.hostsListEvent()
        } else Wt("#onetrust-pc-sdk " + $t.P_Select_Cntr).addClass("ot-hide")
    }, xn.prototype.setHostListSearchValues = function() {
        var e = qt.pcName;
        Mt.GeneralVendorsEnabled && (wt.isV2Template || e !== dt) && this.setListSearchValues(Ae.vendors), Mt.GeneralVendorsEnabled || !wt.isV2Template && e === dt || this.setListSearchValues(Ae.cookies)
    }, xn.prototype.createHostAccordions = function(e, t, o) {
        var n = t.querySelector("." + $t.P_Host_Bx);
        n && Nt.setHtmlAttributes(n, {
            id: "host-" + o,
            name: "host-" + o,
            "aria-label": e + " " + Mt.PCViewCookiesText,
            "aria-controls": "ot-host-acc-txt-" + o
        });
        var r = t.querySelector($t.P_Acc_Txt);
        r && Nt.setHtmlAttributes(r, {
            id: "ot-host-acc-txt-" + o,
            role: "region",
            "aria-labelledby": n.id
        })
    }, xn.prototype.createHostCheckboxes = function(e, t, o, n, r) {
        var i = Jt.isOptOutEnabled(),
            s = wt.isV2Template,
            a = qt.pcName;
        if (!i || t[o].isFirstParty) {
            var l = n.querySelector(".ot-host-tgl");
            l && l.parentElement.removeChild(l)
        } else {
            var c = void 0;
            s ? ((c = oo.chkboxEl.cloneNode(!0)).classList.add("ot-host-tgl"), c.querySelector("input").classList.add("host-checkbox-handler"), a === dt ? n.querySelector($t.P_Host_Hdr).insertAdjacentElement("beforebegin", c) : n.querySelector($t.P_Tgl_Cntr).insertAdjacentElement("beforeend", c)) : c = n.querySelector(".ot-host-tgl"), Nt.setHtmlAttributes(c.querySelector("input"), {
                id: "ot-host-chkbox-" + o,
                "aria-label": e,
                hostId: t[o].HostId,
                ckType: t[o].Type
            }), c.querySelector("label").setAttribute("for", "ot-host-chkbox-" + o), (t[o].Type === J.GenVendor ? jt.genVendorsConsent[t[o].HostId] : -1 !== jt.hostsConsent.indexOf(t[o].HostId + ":1")) ? (Nt.setCheckedAttribute(null, c.querySelector("input"), !0), t[o].isActive ? Nt.setDisabledAttribute(null, c.querySelector("input"), !0) : r = r || !0) : (r = !0, Nt.setCheckedAttribute(null, c.querySelector("input"), !1)), c.querySelector($t.P_Label_Txt).innerText = e
        }
        return r
    }, xn.prototype.populateHostDataIntoDOMElements = function(o, n, e, r) {
        var i = this,
            t = wt.isV2Template,
            s = qt.pcName;
        if (Mt.PCAccordionStyle === W.PlusMinus) o.querySelector($t.P_Acc_Header).insertAdjacentElement("afterbegin", oo.plusMinusEl.cloneNode(!0));
        else if (t) {
            var a = oo.arrowEl.cloneNode(!0);
            s === dt ? o.querySelector($t.P_Host_View_Cookies).insertAdjacentElement("afterend", a) : o.querySelector($t.P_Tgl_Cntr).insertAdjacentElement("beforeend", a)
        }
        Mt.AddLinksToCookiepedia && !n[r].isFirstParty && (e = '\n                            <a  class="cookie-label"\n                                href="http://cookiepedia.co.uk/host/' + n[r].HostName + '"\n                                rel="noopener"\n                                target="_blank"\n                            >\n                                ' + e + '&nbsp;<span class="ot-scrn-rdr">' + Mt.NewWinTxt + "</span>\n                            </a>\n                        "), o.querySelector($t.P_Host_Title).innerHTML = e, o.querySelector($t.P_Host_Desc).innerHTML = n[r].Description, n[r].PrivacyPolicy && Mt.pcShowCookieHost && o.querySelector($t.P_Host_Desc).insertAdjacentHTML("afterend", '<a href="' + n[r].PrivacyPolicy + '" rel="noopener" target="_blank">' + (t ? Mt.PCGVenPolicyTxt : Mt.PCCookiePolicyText) + '&nbsp;<span class="ot-scrn-rdr">' + Mt.NewWinTxt + "</span></a>");
        var l = o.querySelector($t.P_Host_View_Cookies);
        if (jt.showGeneralVendors && !n[r].Cookies.length ? (Nt.removeChild(l), Wt(o).addClass("ot-hide-acc")) : Mt.PCViewCookiesText && (l.innerHTML = Mt.PCViewCookiesText), !n[r].Description || !Mt.pcShowCookieHost) {
            var c = o.querySelector($t.P_Host_Desc);
            c.parentElement.removeChild(c)
        }
        return Wt(o.querySelector($t.P_Host_Opt)).html(""), n[r].Cookies.forEach(function(e) {
            var t = i.getCookieElement(e, n[r]);
            Wt(o.querySelector($t.P_Host_Opt)).append(t)
        }), Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content + " ul" + $t.P_Host_Cntr).append(o), e
    }, xn.prototype.hostsListEvent = function() {
        for (var e = Wt("#onetrust-pc-sdk " + $t.P_Host_Cntr + " .ot-host-tgl input").el, t = Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Host_El).el[0], o = Wt("#onetrust-pc-sdk #select-all-hosts-groups-handler").el[0], n = Wt("#onetrust-pc-sdk " + $t.P_Cnsnt_Header).el[0], r = !0, i = 0; i < e.length; i++) {
            if (!e[i].checked) {
                r = !1;
                break
            }
            r = !0
        }
        r ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var s = 0; s < e.length && !e[s].checked; s++) s !== e.length - 1 || e[s].checked || (o.checked = !1);
        Nt.setCheckedAttribute("", o, o.checked), o && n && o.setAttribute(this.ARIA_LABEL_ATTRIBUTE, n.textContent + " " + Mt.PCenterSelectAllVendorsText)
    }, xn.prototype.loadHostList = function(e, o) {
        void 0 === e && (e = "");
        var n = [],
            r = [],
            t = [];
        if (jt.cookieListType !== X.GenVen && (Mt.Groups.forEach(function(e) {
                u(e.SubGroups, [e]).forEach(function(e) {
                    if (o.length) {
                        if (-1 !== o.indexOf(e.CustomGroupId)) {
                            var t = _n.getCookiesForGroup(e);
                            r = u(r, t.firstPartyCookiesList), n = u(n, t.thirdPartyCookiesList)
                        }
                    } else t = _n.getCookiesForGroup(e), r = u(r, t.firstPartyCookiesList), n = u(n, t.thirdPartyCookiesList)
                })
            }), r.length && n.unshift({
                HostName: Mt.PCFirstPartyCookieListText,
                DisplayName: Mt.PCFirstPartyCookieListText,
                HostId: "first-party-cookies-group",
                isFirstParty: !0,
                Cookies: r,
                Description: ""
            })), jt.showGeneralVendors) {
            var i = this.getFilteredGenVendorsList(o),
                s = this.mapGenVendorListToHostFormat(i);
            t = u(n, s)
        } else t = n;
        jt.currentGlobalFilteredList = t, this.initHostData(e, t)
    }, xn.prototype.mapGenVendorListToHostFormat = function(e) {
        return e.map(function(e) {
            return {
                Cookies: e.Cookies,
                DisplayName: e.Name,
                HostName: e.Name,
                HostId: e.VendorCustomId,
                Description: e.Description,
                Type: J.GenVendor,
                PrivacyPolicy: e.PrivacyPolicyUrl,
                isActive: -1 < jt.alwaysActiveGenVendors.indexOf(e.VendorCustomId)
            }
        })
    }, xn.prototype.mapGenVendorToHostFormat = function(e) {
        return {
            Cookies: e.Cookies,
            DisplayName: e.Name,
            HostName: e.Name,
            HostId: e.VendorCustomId,
            Description: e.Description,
            Type: J.GenVendor
        }
    }, xn.prototype.getFilteredGenVendorsList = function(t) {
        var o = [],
            e = [];
        if (t.length) {
            Mt.Groups.forEach(function(e) {
                u(e.SubGroups, [e]).forEach(function(e) {
                    -1 !== t.indexOf(e.CustomGroupId) && e.GeneralVendorsIds && e.GeneralVendorsIds.forEach(function(e) {
                        o.push(e)
                    })
                })
            });
            var n = Mt.GeneralVendors;
            return o.length && (e = n.filter(function(e) {
                if (-1 < o.indexOf(e.VendorCustomId)) return e
            })), e
        }
        return Mt.GeneralVendors
    }, xn.prototype.initVendorsData = function(e, t) {
        var o = this,
            n = t,
            r = jt.vendors.list;
        if (this.setBackBtnTxt(), Wt($t.P_Vendor_List + " #select-all-text-container p").html(Mt.PCenterAllowAllConsentText), wt.isV2Template && (Wt("#ot-sel-blk span:first-child").html(Mt.PCenterAllowAllConsentText || Mt.ConsentText), Wt("#ot-sel-blk span:last-child").html(Mt.LegitInterestText), Wt("#onetrust-pc-sdk " + $t.P_Cnsnt_Header).html(Mt.PCenterAllowAllConsentText), qt.legIntSettings.PAllowLI && !qt.legIntSettings.PShowLegIntBtn && Wt("#onetrust-pc-sdk .ot-sel-all-hdr .ot-li-hdr").html(Mt.PCenterLegitInterestText), qt.legIntSettings.PAllowLI && !qt.legIntSettings.PShowLegIntBtn || xt(Wt("#ot-sel-blk span:first-child").el[0], "max-width: 100%;", !0)), Wt("#onetrust-pc-sdk #filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, Mt.PCenterVendorListFilterAria), Wt("#onetrust-pc-sdk #filter-btn-handler title").html(Mt.PCenterVendorListFilterAria), this.hasIabVendors = 0 < n.length, this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, e, !1), 0 === n.length ? Wt("#ot-lst-cnt .ot-acc-cntr").hide() : Wt("#ot-lst-cnt .ot-acc-cntr").show(), Wt("#onetrust-pc-sdk " + $t.P_Vendor_Container + " ." + $t.P_Ven_Bx).length !== r.length && this.attachVendorsToDOM(), n.length !== r.length) r.forEach(function(e) {
            var t = Wt($t.P_Vendor_Container + " #IAB" + e.vendorId).el[0].parentElement; - 1 === n.indexOf(e) ? xt(t, "display: none;", !0) : xt(t, o._displayNull, !0)
        });
        else
            for (var i = Wt($t.P_Vendor_Container + ' li[style^="display: none"]').el, s = 0; s < i.length; s++) xt(i[s], this._displayNull, !0);
        !wt.isV2Template && qt.pcName === dt || this.setListSearchValues(Ae.vendors);
        var a = document.querySelector("#vdr-lst-dsc");
        if (!a && Mt.PCenterVendorListDescText)
            if ((a = document.createElement("p")).id = "vdr-lst-dsc", Wt(a).html(Mt.PCenterVendorListDescText), qt.pcName !== dt && qt.pcName !== at) {
                var l = document.querySelector("#onetrust-pc-sdk " + $t.P_Vendor_Title_Elm);
                l && l.insertAdjacentElement("afterend", a)
            } else {
                var c = document.querySelector($t.P_Vendor_Content + " .ot-sdk-row");
                c && c.insertAdjacentElement("beforebegin", a)
            }
        Wt("#onetrust-pc-sdk " + $t.P_Select_Cntr).removeClass("ot-hide"), this.vendorsListEvent(), qt.legIntSettings.PAllowLI && this.vendorLegIntToggleEvent()
    }, xn.prototype.updateVendorsDOMToggleStatus = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = Wt($t.P_Vendor_Container + " " + $t.P_Tgl_Cntr).el, n = Mt.VendorConsentModel === No, r = 0; r < o.length; r++) {
            var i = o[r].querySelector("." + $t.P_Ven_Ctgl + " input"),
                s = o[r].querySelector("." + $t.P_Ven_Ltgl + " input");
            t ? (i && Nt.setCheckedAttribute("", i, n), s && Nt.setCheckedAttribute("", s, !0)) : (i && Nt.setCheckedAttribute("", i, e), s && Nt.setCheckedAttribute("", s, e))
        }
        var a = Wt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        if (a) {
            a.parentElement.classList.remove("line-through");
            var l = !!t || e;
            Nt.setCheckedAttribute("", a, l)
        }
        var c = Wt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        c && (c.parentElement.classList.remove("line-through"), l = t ? n : e, Nt.setCheckedAttribute("", c, l)), Mt.UseGoogleVendors && (t ? this.updateGoogleCheckbox(n) : this.updateGoogleCheckbox(e)), jt.showGeneralVendors && Mt.GenVenOptOut && this.updateGenVenCheckbox(e)
    }, xn.prototype.updateGenVenCheckbox = function(e) {
        for (var t = Wt($t.P_Gven_List + " .ot-ven-gvctgl input").el, o = 0; o < t.length; o++) Nt.setCheckedAttribute("", t[o], e);
        var n = Wt("#onetrust-pc-sdk #ot-selall-gnven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"), Nt.setCheckedAttribute("", n, e))
    }, xn.prototype.updateGoogleCheckbox = function(e) {
        for (var t = Wt("#ot-addtl-venlst .ot-tgl-cntr input").el, o = 0; o < t.length; o++) Nt.setCheckedAttribute("", t[o], e);
        var n = Wt("#onetrust-pc-sdk #ot-selall-adtlven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"), Nt.setCheckedAttribute("", n, e))
    }, xn.prototype.updateVendorDisclosure = function(e, t) {
        var o = Wt($t.P_Vendor_Container + " #IAB" + e).el[0].parentElement;
        if (t && t.disclosures) {
            var r = o.querySelector($t.P_Ven_Dets),
                i = o.querySelector($t.P_Ven_Disc).cloneNode(!0),
                n = i.cloneNode(!0);
            n.innerHTML = "<p><b>" + Mt.PCenterVendorListDisclosure + ": </b></p>", r.insertAdjacentElement("beforeend", n), t.disclosures.forEach(function(e) {
                var t = i.cloneNode(!0),
                    o = "<p>" + Mt.PCenterVendorListStorageIdentifier + " </p> <p>" + (e.name || e.identifier) + " </p>";
                if (e.type && (o += "<p>" + Mt.PCenterVendorListStorageType + " </p> <p>" + e.type + " </p>"), e.maxAgeSeconds) {
                    var n = Nt.calculateCookieLifespan(e.maxAgeSeconds);
                    o += "<p>" + Mt.PCenterVendorListLifespan + " </p> <p>" + n + " </p>"
                }
                e.domain && (o += "<p>" + Mt.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"), e.purposes && (o += "<p>" + Mt.PCenterVendorListStoragePurposes + ' </p><div class="disc-pur-cont">', e.purposes.forEach(function(e) {
                    var t = qt.iabGroups.purposes[e].name;
                    t && (o += ' <p class="disc-pur">' + t + " </p>")
                }), o += "</div>"), t.innerHTML = o, r.insertAdjacentElement("beforeend", t)
            }), this.updateDomainsUsageInDisclosures(t, i, r)
        }
    }, xn.prototype.updateDomainsUsageInDisclosures = function(e, n, r) {
        if (e.domains && e.domains.length) {
            var t = n.cloneNode(!0);
            t.innerHTML = "<p><b>" + Mt.PCVLSDomainsUsed + ": </b></p>", r.insertAdjacentElement("beforeend", t), e.domains.forEach(function(e) {
                var t, o = n.cloneNode(!0);
                e.domain && (t = "<p>" + Mt.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"), e.use && (t += "<p>" + Mt.PCVLSUse + " </p> <p>" + e.use + " </p>"), o.innerHTML = t, r.insertAdjacentElement("beforeend", o)
            })
        }
    }, xn.prototype.addDescriptionElement = function(e, t) {
        var o = document.createElement("p");
        o.innerHTML = t || "", e.parentNode.insertBefore(o, e)
    }, xn.prototype.attachVendorsToDOM = function() {
        var R, q, M = jt.vendors.list,
            U = Mt.IabType,
            j = qt.pcName,
            z = jt.vendors.vendorTemplate.cloneNode(!0);
        jt.discVendors = {}, wt.isV2Template && (R = z.querySelector(".ot-ven-pur").cloneNode(!0), q = z.querySelector($t.P_Ven_Disc).cloneNode(!0), Wt(z.querySelector(".ot-ven-dets")).html(""));
        for (var e = function(e) {
                var t = z.cloneNode(!0),
                    o = M[e].vendorId,
                    n = M[e].vendorName,
                    r = t.querySelector("." + $t.P_Ven_Bx),
                    i = jt.vendorsSetting[o],
                    s = t.querySelector($t.P_Ven_Link);
                Nt.setHtmlAttributes(r, {
                    id: "IAB" + o,
                    name: "IAB" + o,
                    "aria-controls": "IAB-ACC-TXT" + o,
                    "aria-label": n
                }), r.nextElementSibling.setAttribute("for", "IAB" + o), t.querySelector($t.P_Ven_Name).innerText = n, Nt.setHtmlAttributes(s, {
                    href: M[e].policyUrl,
                    rel: "noopener",
                    target: "_blank"
                }), s.innerHTML = Mt.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + n + " " + Mt.NewWinTxt + "</span>";
                var a = wt.isV2Template ? oo.chkboxEl.cloneNode(!0) : t.querySelector(".ot-checkbox"),
                    l = a.cloneNode(!0),
                    c = a.cloneNode(!0),
                    d = t.querySelector($t.P_Tgl_Cntr);
                wt.isV2Template || a.parentElement.removeChild(a);
                var u = t.querySelector($t.P_Arrw_Cntr);
                if (i.consent) {
                    c.classList.add($t.P_Ven_Ctgl);
                    var p = -1 !== zt.inArray(o + ":true", jt.vendors.selectedVendors),
                        h = c.querySelector("input");
                    if (wt.isV2Template) {
                        h.classList.add("vendor-checkbox-handler");
                        var g = c.querySelector(".ot-label-status");
                        Mt.PCShowConsentLabels ? g.innerHTML = p ? Mt.PCActiveText : Mt.PCInactiveText : Nt.removeChild(g)
                    }
                    Nt.setCheckedAttribute("", h, p), Nt.setHtmlAttributes(h, {
                        id: $t.P_Vendor_CheckBx + "-" + e,
                        vendorid: o,
                        "aria-label": n
                    }), c.querySelector("label").setAttribute("for", $t.P_Vendor_CheckBx + "-" + e), c.querySelector($t.P_Label_Txt).textContent = n, j === dt ? Mt.PCTemplateUpgrade ? d.insertAdjacentElement("beforeend", c) : Wt(d).append(c) : d.insertBefore(c, u)
                }
                if (i.legInt && !i.specialPurposesOnly) {
                    var C = -1 !== zt.inArray(o + ":true", jt.vendors.selectedLegIntVendors);
                    if (qt.legIntSettings.PShowLegIntBtn) {
                        var y = no.generateLegIntButtonElements(C, o, !0);
                        t.querySelector($t.P_Acc_Txt).insertAdjacentHTML("beforeend", y);
                        var f = t.querySelector(".ot-remove-objection-handler");
                        f && xt(f, f.getAttribute("data-style"))
                    } else h = l.querySelector("input"), wt.isV2Template && (h.classList.add("vendor-checkbox-handler"), g = l.querySelector(".ot-label-status"), Mt.PCShowConsentLabels ? g.innerHTML = C ? Mt.PCActiveText : Mt.PCInactiveText : Nt.removeChild(g)), l.classList.add($t.P_Ven_Ltgl), h.classList.remove("vendor-checkbox-handler"), h.classList.add("vendor-leg-checkbox-handler"), Nt.setCheckedAttribute("", h, C), Nt.setHtmlAttributes(h, {
                        id: $t.P_Vendor_LegCheckBx + "-" + e,
                        "leg-vendorid": o,
                        "aria-label": n
                    }), l.querySelector("label").setAttribute("for", $t.P_Vendor_LegCheckBx + "-" + e), l.querySelector($t.P_Label_Txt).textContent = n, t.querySelector("." + $t.P_Ven_Ctgl) && (u = t.querySelector("." + $t.P_Ven_Ctgl)), j !== dt || d.children.length ? d.insertBefore(l, u) : Wt(d).append(l), i.consent || j !== dt || l.classList.add($t.P_Ven_Ltgl_Only)
                }
                wt.isV2Template && (d.insertAdjacentElement("beforeend", oo.arrowEl.cloneNode(!0)), Mt.PCAccordionStyle !== W.Caret && t.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", oo.plusMinusEl.cloneNode(!0)));
                var v = t.querySelector($t.P_Acc_Txt);
                if (v && Nt.setHtmlAttributes(v, {
                        id: "IAB-ACC-TXT" + o,
                        "aria-labelledby": "IAB-ACC-TXT" + o,
                        role: "region"
                    }), M[e].deviceStorageDisclosureUrl && (Nt.setHtmlAttributes(r, {
                        "disc-vid": o
                    }), jt.discVendors[o] = {
                        isFetched: !1,
                        disclosureUrl: M[e].deviceStorageDisclosureUrl
                    }), wt.isV2Template) K.populateVendorDetailsHtml(t, R, M[e], q);
                else {
                    var k = t.querySelector(".vendor-option-purpose"),
                        m = t.querySelector(".vendor-consent-group"),
                        b = t.querySelector(".legitimate-interest"),
                        P = t.querySelector(".legitimate-interest-group"),
                        S = t.querySelector(".spl-purpose"),
                        A = t.querySelector(".spl-purpose-grp"),
                        T = t.querySelector(".vendor-feature"),
                        I = t.querySelector(".vendor-feature-group"),
                        L = t.querySelector(".vendor-spl-feature"),
                        _ = t.querySelector(".vendor-spl-feature-grp"),
                        V = m.cloneNode(!0),
                        E = P.cloneNode(!0),
                        B = A.cloneNode(!0),
                        w = I.cloneNode(!0),
                        x = _.cloneNode(!0);
                    q = t.querySelector($t.P_Ven_Disc);
                    var O = t.querySelector($t.P_Ven_Dets),
                        G = q.cloneNode(!0);
                    q.parentElement.removeChild(q), K.attachVendorDisclosure(G, M[e]), O.insertAdjacentElement("afterbegin", G), m.parentElement.removeChild(m), i.consent && (Wt(k.querySelector("p")).text(Mt.ConsentPurposesText), M[e].purposes.forEach(function(e) {
                        Wt(V.querySelector(".consent-category")).text(e.purposeName);
                        var t = V.querySelector(".consent-status");
                        t && V.removeChild(t), b.insertAdjacentHTML("beforebegin", V.outerHTML)
                    })), i.consent || k.parentElement.removeChild(k);
                    var N = E.querySelector(".vendor-opt-out-handler");
                    "IAB2" === Mt.IabType && N.parentElement.removeChild(N), P.parentElement.removeChild(P), i.legInt && (Wt(b.querySelector("p")).text(Mt.LegitimateInterestPurposesText), qt.legIntSettings.PAllowLI && "IAB2" === Mt.IabType && M[e].legIntPurposes.forEach(function(e) {
                        Wt(E.querySelector(".consent-category")).text(e.purposeName), b.insertAdjacentHTML("afterend", E.outerHTML)
                    })), i.legInt || b.parentElement.removeChild(b), A.parentElement.removeChild(A), "IAB2" === U && M[e].specialPurposes.forEach(function(e) {
                        Wt(B.querySelector(".consent-category")).text(e.purposeName), S.insertAdjacentHTML("afterend", B.outerHTML)
                    }), 0 === M[e].specialPurposes.length ? S.parentElement.removeChild(S) : Wt(S.querySelector("p")).text(Mt.SpecialPurposesText), I.parentElement.removeChild(I), Wt(T.querySelector("p")).text(Mt.FeaturesText), M[e].features.forEach(function(e) {
                        Wt(w.querySelector(".consent-category")).text(e.featureName), T.insertAdjacentHTML("afterend", w.outerHTML)
                    }), 0 === M[e].features.length && T.parentElement.removeChild(T), L.parentElement.removeChild(_), "IAB2" === U && M[e].specialFeatures.forEach(function(e) {
                        Wt(x.querySelector(".consent-category")).text(e.featureName), L.insertAdjacentHTML("afterend", x.outerHTML)
                    }), 0 === M[e].specialFeatures.length ? L.parentElement.removeChild(L) : Wt(L.querySelector("p")).text(Mt.SpecialFeaturesText);
                    var D = r.parentElement.querySelector(".vendor-purposes p");
                    D.parentElement.removeChild(D)
                }
                Wt("#onetrust-pc-sdk " + $t.P_Vendor_Container).append(t);
                var H = Wt("#onetrust-pc-sdk " + $t.P_Sel_All_Vendor_Consent_Handler).el[0];
                H && H.setAttribute(K.ARIA_LABEL_ATTRIBUTE, Mt.PCenterSelectAllVendorsText + " " + Mt.LegitInterestText);
                var F = Wt("#onetrust-pc-sdk " + $t.P_Sel_All_Vendor_Leg_Handler).el[0];
                F && F.setAttribute(K.ARIA_LABEL_ATTRIBUTE, Mt.PCenterSelectAllVendorsText + " " + Mt.ConsentText)
            }, K = this, t = 0; t < M.length; t++) e(t)
    }, xn.prototype.populateVendorDetailsHtml = function(e, t, o, n) {
        var r = e.querySelector(".ot-ven-dets"),
            i = jt.vendorsSetting[o.vendorId],
            s = n.cloneNode(!0);
        if (this.attachVendorDisclosure(s, o), r.insertAdjacentElement("beforeEnd", s), i.consent) {
            var a = t.cloneNode(!0),
                l = "<h4>" + Mt.ConsentPurposesText + "</h4>";
            l += "<ul>", o.purposes.forEach(function(e) {
                l += "<li><p>" + e.purposeName + "</p></li>"
            }), l += "</ul>", a.innerHTML = l, r.insertAdjacentElement("beforeEnd", a)
        }
        if (i.legInt && o.legIntPurposes.length) {
            var c = t.cloneNode(!0),
                d = "<h4>" + Mt.LegitimateInterestPurposesText + "</h4>";
            d += "<ul>", o.legIntPurposes.forEach(function(e) {
                d += "<li><p>" + e.purposeName + "</p></li>"
            }), d += "</ul>", c.innerHTML = d, r.insertAdjacentElement("beforeEnd", c)
        }
        if ("IAB2" === qt.iabType && o.specialPurposes.length) {
            var u = t.cloneNode(!0),
                p = "<h4>" + Mt.SpecialPurposesText + "</h4>";
            p += "<ul>", o.specialPurposes.forEach(function(e) {
                p += "<li><p>" + e.purposeName + "</p></li>"
            }), p += "</ul>", u.innerHTML = p, r.insertAdjacentElement("beforeEnd", u)
        }
        if (o.features.length) {
            var h = t.cloneNode(!0),
                g = "<h4>" + Mt.FeaturesText + "</h4>";
            g += "<ul>", o.features.forEach(function(e) {
                g += "<li><p>" + e.featureName + "</p></li>"
            }), g += "</ul>", h.innerHTML = g, r.insertAdjacentElement("beforeEnd", h)
        }
        if ("IAB2" === qt.iabType && o.specialFeatures.length) {
            var C = t.cloneNode(!0),
                y = "<h4>" + Mt.SpecialFeaturesText + "</h4>";
            y += "<ul>", o.specialFeatures.forEach(function(e) {
                y += "<li><p>" + e.featureName + "</p></li>"
            }), y += "</ul>", C.innerHTML = y, r.insertAdjacentElement("beforeEnd", C)
        }
    }, xn.prototype.InitializeVendorList = function() {
        if (jt.vendors.list = jt.iabData ? jt.iabData.vendors : null, jt.vendors.vendorTemplate = Wt($t.P_Vendor_Container + " li").el[0].cloneNode(!0), Wt("#onetrust-pc-sdk " + $t.P_Vendor_Container).html(""), !wt.isV2Template && qt.pcName === dt) {
            var e, t = jt.vendors.vendorTemplate.querySelectorAll($t.P_Acc_Header);
            qt.legIntSettings.PAllowLI && "IAB2" === qt.iabType ? (e = t[0]).parentElement.removeChild(e) : (e = t[1]).parentElement.removeChild(e)
        }
    }, xn.prototype.cancelVendorFilter = function() {
        for (var e = Wt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid"),
                n = 0 <= jt.filterByIABCategories.indexOf(o);
            Nt.setCheckedAttribute(null, e[t], n)
        }
    }, xn.prototype.attachVendorDisclosure = function(e, t) {
        var o = "<h4>" + Mt.PCenterVendorListLifespan + " :</h4><span> " + t.cookieMaxAge + "</span>";
        t.usesNonCookieAccess && (o += "<p>" + Mt.PCenterVendorListNonCookieUsage + "</p>"), e.innerHTML = o
    }, xn.prototype.updateVendorFilterList = function() {
        for (var e = Wt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid");
            if (e[t].checked && jt.filterByIABCategories.indexOf(o) < 0) jt.filterByIABCategories.push(o);
            else if (!e[t].checked && -1 < jt.filterByIABCategories.indexOf(o)) {
                var n = jt.filterByIABCategories;
                jt.filterByIABCategories.splice(n.indexOf(o), 1)
            }
        }
        return jt.filterByIABCategories
    }, xn.prototype.saveVendorStatus = function() {
        var e = jt.vendors,
            t = jt.oneTrustIABConsent;
        t.purpose = e.selectedPurpose.slice(), t.legimateInterest = e.selectedLegInt.slice(), t.vendors = e.selectedVendors.slice(), t.legIntVendors = e.selectedLegIntVendors.slice(), t.specialFeatures = e.selectedSpecialFeatures.slice();
        var o = jt.addtlVendors;
        o.vendorConsent = Object.keys(o.vendorSelected)
    }, xn.prototype.updateIabVariableReference = function() {
        var e = jt.oneTrustIABConsent,
            t = jt.vendors;
        t.selectedPurpose = e.purpose.slice(), t.selectedLegInt = e.legimateInterest.slice(), t.selectedVendors = e.vendors.slice(), t.selectedLegIntVendors = e.legIntVendors.slice(), t.selectedSpecialFeatures = e.specialFeatures.slice();
        var o = jt.addtlVendors;
        o.vendorSelected = {}, o.vendorConsent.forEach(function(e) {
            o.vendorSelected[e] = !0
        })
    }, xn.prototype.allowAllhandler = function() {
        yn.initializeIABData(!0, !1)
    }, xn.prototype.rejectAllHandler = function(e) {
        void 0 === e && (e = !1), yn.initializeIABData(!1, !0, e)
    }, xn.prototype.populateAddtlVendors = function(e) {
        var t = Mt.PCAccordionStyle === W.Caret ? oo.arrowEl.cloneNode(!0) : oo.plusMinusEl.cloneNode(!0),
            o = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
            n = o.cloneNode(!0);
        Nt.removeChild(n.querySelector("#ot-selall-hostcntr")), Nt.removeChild(o.querySelector("#ot-selall-vencntr")), Nt.removeChild(o.querySelector("#ot-selall-licntr"));
        var r = oo.accordionEl.cloneNode(!0);
        r.classList.add("ot-iab-acc"), r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t.cloneNode(!0)), r.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + Mt.PCIABVendorsText + "</div>"), r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n), r.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", Wt("#ot-ven-lst").el[0]), Wt("#ot-lst-cnt .ot-sdk-column").append(r), r.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, Mt.PCIABVendorsText), this.iabAccInit = !0;
        var i = n.cloneNode(!0);
        Nt.removeChild(i.querySelector("#ot-selall-licntr")), i.querySelector(".ot-chkbox").id = "ot-selall-adtlvencntr", i.querySelector("input").id = "ot-selall-adtlven-handler", i.querySelector("label").setAttribute("for", "ot-selall-adtlven-handler");
        var s = oo.accordionEl.cloneNode(!0);
        s.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t.cloneNode(!0)), s.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + Mt.PCGoogleVendorsText + "</div>"), s.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", i), s.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-addtl-venlst'></ul>"), s.classList.add("ot-adtlv-acc"), s.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, Mt.PCGoogleVendorsText);
        var a = jt.vendors.vendorTemplate.cloneNode(!0);
        for (var l in a.querySelector("button").classList.remove("ot-ven-box"), a.querySelector("button").classList.add("ot-addtl-venbox"), Nt.removeChild(a.querySelector(".ot-acc-txt")), e)
            if (e[l]) {
                var c = a.cloneNode(!0),
                    d = e[l].name;
                c.querySelector($t.P_Ven_Name).innerText = d;
                var u = c.querySelector("button");
                Nt.setHtmlAttributes(u, {
                    id: "Adtl-IAB" + l
                }), Nt.setHtmlAttributes(c.querySelector($t.P_Ven_Link), {
                    href: e[l].policyUrl,
                    rel: "noopener",
                    target: "_blank"
                }), c.querySelector($t.P_Ven_Link).innerHTML = Mt.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + d + " " + Mt.NewWinTxt + "</span>";
                var p = oo.chkboxEl.cloneNode(!0);
                p.classList.remove("ot-ven-ctgl"), p.classList.add("ot-ven-adtlctgl");
                var h = Boolean(jt.addtlVendors.vendorSelected[l]),
                    g = p.querySelector("input");
                g.classList.add("ot-addtlven-chkbox-handler");
                var C = p.querySelector(".ot-label-status");
                Mt.PCShowConsentLabels ? C.innerHTML = h ? Mt.PCActiveText : Mt.PCInactiveText : Nt.removeChild(C), Nt.setCheckedAttribute("", g, h), Nt.setHtmlAttributes(g, {
                    id: "ot-addtlven-chkbox-" + l,
                    "addtl-vid": l,
                    "aria-label": d
                }), p.querySelector("label").setAttribute("for", "ot-addtlven-chkbox-" + l), p.querySelector($t.P_Label_Txt).textContent = d;
                var y = c.querySelector($t.P_Tgl_Cntr);
                Wt(y).append(p), y.insertAdjacentElement("beforeend", oo.arrowEl.cloneNode(!0)), Mt.PCAccordionStyle !== W.Caret && c.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", oo.plusMinusEl.cloneNode(!0)), Wt(s.querySelector("#ot-addtl-venlst")).append(c)
            }
        Wt("#ot-lst-cnt .ot-sdk-column").append(s), Wt("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            Nt.setCheckedAttribute(null, e.target, e.target.checked)
        }), this.showConsentHeader()
    }, xn.prototype.populateGeneralVendors = function() {
        var p = this,
            e = Mt.GeneralVendors,
            t = document.querySelector(".ot-gv-acc"),
            h = !!t;
        if (!e.length) return this.hasGenVendors = !1, void(t && Wt(t).hide());
        this.hasGenVendors = !0, t && Wt(t).show();
        var o = Mt.PCAccordionStyle === W.Caret ? oo.arrowEl.cloneNode(!0) : oo.plusMinusEl.cloneNode(!0);
        this.iabAccInit || this.addIabAccordion();
        var n = document.createElement("div");
        n.setAttribute("class", "ot-sel-all-chkbox");
        var r = oo.chkboxEl.cloneNode(!0);
        r.id = "ot-selall-gnvencntr", r.querySelector("input").id = "ot-selall-gnven-handler", r.querySelector("label").setAttribute("for", "ot-selall-gnven-handler"), Wt(n).append(r);
        var g = oo.accordionEl.cloneNode(!0);
        g.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o.cloneNode(!0)), g.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + Mt.PCenterGeneralVendorsText + "</div>"), Mt.GenVenOptOut && g.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n), g.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-gn-venlst'></ul>"), g.classList.add("ot-gv-acc"), g.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, Mt.PCenterGeneralVendorsText);
        var C = jt.vendors.vendorTemplate.cloneNode(!0);
        C.querySelector("button").classList.remove("ot-ven-box"), C.querySelector("button").classList.add("ot-gv-venbox"), Wt(C.querySelector(".ot-acc-txt")).html('<ul class="ot-host-opt"></ul>'), h && Wt("" + $t.P_Gven_List).html("");
        var y = !0;
        e.forEach(function(e) {
            var o = p.mapGenVendorToHostFormat(e),
                n = C.cloneNode(!0),
                t = e.VendorCustomId,
                r = e.Name,
                i = n.querySelector($t.P_Ven_Link);
            n.querySelector($t.P_Ven_Name).innerText = r;
            var s = n.querySelector("button");
            if (Nt.setHtmlAttributes(s, {
                    id: "Gn-" + t
                }), e.PrivacyPolicyUrl ? (Nt.setHtmlAttributes(i, {
                    href: e.PrivacyPolicyUrl,
                    rel: "noopener",
                    target: "_blank"
                }), i.innerHTML = Mt.PCGVenPolicyTxt + "&nbsp;<span class='ot-scrn-rdr'>" + r + " " + Mt.NewWinTxt + "</span>") : i.classList.add("ot-hide"), p.addDescriptionElement(i, e.Description), Mt.GenVenOptOut) {
                var a = oo.chkboxEl.cloneNode(!0);
                a.classList.remove("ot-ven-ctgl"), a.classList.add("ot-ven-gvctgl");
                var l = Boolean(jt.genVendorsConsent[t]),
                    c = a.querySelector("input");
                c.classList.add("ot-gnven-chkbox-handler");
                var d = a.querySelector(".ot-label-status");
                Mt.PCShowConsentLabels ? d.innerHTML = l ? Mt.PCActiveText : Mt.PCInactiveText : Nt.removeChild(d), Nt.setCheckedAttribute("", c, l), Nt.setHtmlAttributes(c, {
                    id: "ot-gnven-chkbox-" + t,
                    "gn-vid": t,
                    "aria-label": r
                }), Po.isGenVenPartOfAlwaysActiveGroup(t) ? Nt.setDisabledAttribute(null, c, !0) : y = !1, a.querySelector("label").setAttribute("for", "ot-gnven-chkbox-" + t), a.querySelector($t.P_Label_Txt).textContent = r;
                var u = n.querySelector($t.P_Tgl_Cntr);
                Wt(u).append(a), u.insertAdjacentElement("beforeend", oo.arrowEl.cloneNode(!0))
            }
            Mt.PCAccordionStyle !== W.Caret && n.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", oo.plusMinusEl.cloneNode(!0)), e.Cookies.length || Wt(n).addClass("ot-hide-acc"), e.Cookies.forEach(function(e) {
                var t = p.getCookieElement(e, o);
                Wt(n.querySelector(".ot-host-opt")).append(t)
            }), h ? Wt("" + $t.P_Gven_List).append(n) : Wt(g.querySelector("" + $t.P_Gven_List)).append(n)
        }), h || Wt("#ot-lst-cnt .ot-sdk-column").append(g), Wt("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            Nt.setCheckedAttribute(null, e.target, e.target.checked)
        }), this.showConsentHeader(), y && Nt.setDisabledAttribute("#ot-selall-gnven-handler", null, !0)
    }, xn.prototype.addIabAccordion = function() {
        var e = Mt.PCAccordionStyle === W.Caret ? oo.arrowEl.cloneNode(!0) : oo.plusMinusEl.cloneNode(!0),
            t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
            o = t.cloneNode(!0);
        Nt.removeChild(o.querySelector("#ot-selall-hostcntr")), Nt.removeChild(t.querySelector("#ot-selall-vencntr")), Nt.removeChild(t.querySelector("#ot-selall-licntr"));
        var n = oo.accordionEl.cloneNode(!0);
        n.classList.add("ot-iab-acc"), n.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)), n.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + Mt.PCIABVendorsText + "</div>"), n.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o), n.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", Wt("#ot-ven-lst").el[0]), Wt("#ot-lst-cnt .ot-sdk-column").append(n), n.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, Mt.PCIABVendorsText), this.iabAccInit = !0
    }, xn.prototype.showConsentHeader = function() {
        var e = qt.legIntSettings;
        Wt("#onetrust-pc-sdk .ot-sel-all-hdr").show(), e.PAllowLI && !e.PShowLegIntBtn || Wt("#onetrust-pc-sdk .ot-li-hdr").hide()
    }, xn.prototype.setBackBtnTxt = function() {
        wt.isV2Template ? (Wt($t.P_Vendor_List + " .back-btn-handler").attr(this.ARIA_LABEL_ATTRIBUTE, Mt.PCenterBackText), Wt($t.P_Vendor_List + " .back-btn-handler title").html(Mt.PCenterBackText)) : Wt($t.P_Vendor_List + " .back-btn-handler .pc-back-button-text").html(Mt.PCenterBackText)
    }, xn.prototype.getCookieElement = function(e, t) {
        var o = jt.hosts.hostCookieTemplate.cloneNode(!0),
            n = o.querySelector("div").cloneNode(!0);
        n.classList.remove("cookie-name-container"), Wt(o).html("");
        var r = e.Name;
        Mt.AddLinksToCookiepedia && t.isFirstParty && (r = Jt.getCookieLabel(e, Mt.AddLinksToCookiepedia));
        var i = n.cloneNode(!0);
        if (i.classList.add($t.P_c_Name), i.querySelector("div:nth-child(1)").innerHTML = Mt.pcCListName, i.querySelector("div:nth-child(2)").innerHTML = r, Wt(o).append(i), Mt.pcShowCookieHost) {
            var s = n.cloneNode(!0);
            s.classList.add($t.P_c_Host), s.querySelector("div:nth-child(1)").innerHTML = Mt.pcCListHost, s.querySelector("div:nth-child(2)").innerHTML = e.Host, Wt(o).append(s)
        }
        if (Mt.pcShowCookieDuration) {
            var a = n.cloneNode(!0);
            a.classList.add($t.P_c_Duration), a.querySelector("div:nth-child(1)").innerHTML = Mt.pcCListDuration, a.querySelector("div:nth-child(2)").innerHTML = e.IsSession ? Mt.LifespanTypeText : Jt.getDuration(e), Wt(o).append(a)
        }
        if (Mt.pcShowCookieType) {
            var l = t.Type === J.GenVendor ? !e.isThirdParty : t.isFirstParty,
                c = n.cloneNode(!0);
            c.classList.add($t.P_c_Type), c.querySelector("div:nth-child(1)").innerHTML = Mt.pcCListType, c.querySelector("div:nth-child(2)").innerHTML = l ? Mt.firstPartyTxt : Mt.thirdPartyTxt, Wt(o).append(c)
        }
        if (Mt.pcShowCookieCategory) {
            var d = void 0;
            if (d = t.Type === J.GenVendor ? e.category : t.isFirstParty ? e.groupName : t.groupName) {
                var u = n.cloneNode(!0);
                u.classList.add($t.P_c_Category), u.querySelector("div:nth-child(1)").innerHTML = Mt.pcCListCategory, u.querySelector("div:nth-child(2)").innerHTML = d, Wt(o).append(u)
            }
        }
        if (Mt.pcShowCookieDescription && e.description) {
            var p = n.cloneNode(!0);
            p.classList.add($t.P_c_Desc), p.querySelector("div:nth-child(1)").innerHTML = Mt.pcCListDescription, p.querySelector("div:nth-child(2)").innerHTML = e.description, Wt(o).append(p)
        }
        return o
    }, xn);

    function xn() {
        this.hasIabVendors = !1, this.hasGoogleVendors = !1, this.hasGenVendors = !1, this.iabAccInit = !1, this._displayNull = "display: '';", this.ARIA_LABEL_ATTRIBUTE = "aria-label", this.googleSearchSelectors = {
            vendorAccBtn: "#ot-addtl-venlst #Adtl-IAB",
            name: "name",
            accId: ".ot-adtlv-acc",
            selectAllEvntHndlr: "#ot-selall-adtlven-handler",
            venListId: "#ot-addtl-venlst",
            ctgl: ".ot-ven-adtlctgl"
        }, this.genVendorSearchSelectors = {
            vendorAccBtn: "#ot-gn-venlst #Gn-",
            name: "Name",
            accId: ".ot-gv-acc",
            selectAllEvntHndlr: "#ot-selall-gnven-handler",
            venListId: "#ot-gn-venlst",
            ctgl: ".ot-ven-gvctgl"
        }
    }

    function On() {
        return jt.showVendorService && Mt.PCCategoryStyle === se.Toggle ? oo.toggleEl.cloneNode(!0) : oo.chkboxEl.cloneNode(!0)
    }
    var Gn, Nn = (Dn.prototype.setHtmlTemplate = function(e) {
        Gn.setInternalData(), Gn.rootHtml = e, Gn.cloneHtmlElements()
    }, Dn.prototype.getVendorListEle = function(e) {
        var t = document.createDocumentFragment(),
            r = document.createElement("div");
        r.classList.add("ot-vs-list");
        var i = Mt.VendorServiceConfig.PCVSExpandGroup;
        return e.forEach(function(e, t) {
            var o = "ot-vs-lst-id-" + t,
                n = Gn.createVendor(e.groupRef, e, i, o);
            r.appendChild(n)
        }), t.appendChild(r), t
    }, Dn.prototype.insertVendorServiceHtml = function(e, t) {
        if (!Gn.checkIfIsInvalid(e, t)) {
            var o = document.createDocumentFragment();
            if (Gn.setVendorContainer(o, e), Gn.setVendorList(o, e), e.SubGroups && 0 < e.SubGroups.length) {
                o.querySelector(this.MAIN_CONT_ELE).classList.add("ot-vnd-subgrp-cnt");
                var n = t.children[1];
                qt.pcName === dt && (n = t.children[2]), t.insertBefore(o, n)
            } else t.appendChild(o)
        }
    }, Dn.prototype.toggleVendorService = function(e, t, o, n) {
        var r = io.getGroupById(e),
            i = io.getVSById(t);
        n = n || Gn.getVendorInputElement(i.CustomVendorServiceId), Gn.setVendorServiceState(n, i, o), o ? Gn.changeGroupState(r, o, Gn.isToggle) : Gn.checkGroupChildrenState(r) || Gn.changeGroupState(r, !1, Gn.isToggle)
    }, Dn.prototype.setVendorStateByGroup = function(e, t) {
        var o = e.VendorServices;
        if (jt.showVendorService && o)
            for (var n = 0, r = o; n < r.length; n++) {
                var i = r[n],
                    s = Gn.getVendorInputElement(i.CustomVendorServiceId);
                Gn.setVendorServiceState(s, i, t)
            }
    }, Dn.prototype.resetVendorUIState = function(e) {
        e.forEach(function(e, t) {
            var o = Gn.getVendorInputElement(t);
            Gn.changeVendorServiceUIState(o, e)
        })
    }, Dn.prototype.setVendorServiceState = function(e, t, o) {
        Gn.changeVendorServiceState(t, o), Gn.changeVendorServiceUIState(e, o);
        var n = o ? cn : dn;
        wo.triggerGoogleAnalyticsEvent(Do, n, t.ServiceName + ": " + t.CustomVendorServiceId)
    }, Dn.prototype.removeVSUITemplate = function(e) {
        var t = e.querySelector(this.MAIN_CONT_ELE);
        t && e.removeChild(t)
    }, Dn.prototype.consentAll = function(o) {
        jt.getVendorsInDomain().forEach(function(e) {
            var t = o;
            o || (t = io.isAlwaysActiveGroup(e.groupRef)), Gn.toggleVendorService(e.groupRef.CustomGroupId, e.CustomVendorServiceId, t || o)
        })
    }, Dn.prototype.cloneHtmlElements = function() {
        var e = Gn.rootHtml.querySelector(this.MAIN_CONT_ELE);
        if (e) {
            var t = e.querySelector(".ot-vnd-serv-hdr-cntr"),
                o = e.querySelector(".ot-vnd-lst-cont"),
                n = o.querySelector(".ot-vnd-item"),
                r = n.querySelector(".ot-vnd-info");
            Gn.vendorLabelContainerClone = t.cloneNode(!0), e.removeChild(t), Gn.vendorInfoClone = r.cloneNode(!0), n.querySelector(".ot-vnd-info-cntr").removeChild(r), Gn.vendorItemClone = n.cloneNode(!0), o.removeChild(n), Gn.vendorListContainerClone = o.cloneNode(!0), e.removeChild(o), Gn.vendorServMainContainerClone = e.cloneNode(!0), Gn.rootHtml.removeChild(e)
        }
    }, Dn.prototype.setInternalData = function() {
        Gn.isToggle = Mt.PCCategoryStyle === se.Toggle;
        var e = Mt.VendorServiceConfig;
        Gn.stringTranslation = new Map, Gn.stringTranslation.set("ServiceName", e.PCVSNameText || "ServiceName"), Gn.stringTranslation.set("ParentCompany", e.PCVSParentCompanyText || "ParentCompany"), Gn.stringTranslation.set("Address", e.PCVSAddressText || "Address"), Gn.stringTranslation.set("DefaultCategoryName", e.PCVSDefaultCategoryText || "DefaultCategoryName"), Gn.stringTranslation.set("Description", e.PCVSDefaultDescriptionText || "Description"), Gn.stringTranslation.set("DPOEmail", e.PCVSDPOEmailText || "DPOEmail"), Gn.stringTranslation.set("DPOLink", e.PCVSDPOLinkText || "DPOLink"), Gn.stringTranslation.set("PrivacyPolicyLink", e.PCVSPrivacyPolicyLinkText || "PrivacyPolicyLink"), Gn.stringTranslation.set("CookiePolicyLink", e.PCVSCookiePolicyLinkText || "CookiePolicyLink"), Gn.stringTranslation.set("OptOutLink", e.PCVSOptOutLinkText || "OptOutLink"), Gn.stringTranslation.set("LegalBasis", e.PCVSLegalBasisText || "LegalBasis")
    }, Dn.prototype.setVendorContainer = function(e, t) {
        var o = Gn.vendorServMainContainerClone.cloneNode(!0);
        o.setAttribute("data-group-id", t.CustomGroupId);
        var n = Gn.vendorLabelContainerClone.cloneNode(!0);
        n.querySelector(".ot-vnd-serv-hdr").innerHTML = Mt.VendorServiceConfig.PCVSListTitle, o.appendChild(n), e.appendChild(o)
    }, Dn.prototype.setVendorList = function(e, t) {
        for (var o = 0, n = Gn.getVSFromGroupAndSubgroups(t), r = n.length, i = e.querySelector(this.MAIN_CONT_ELE), s = Gn.vendorListContainerClone.cloneNode(), a = Mt.VendorServiceConfig.PCVSExpandCategory; o < r; o++) {
            var l = Gn.createVendor(t, n[o], a);
            s.appendChild(l)
        }
        i.appendChild(s)
    }, Dn.prototype.getVSFromGroupAndSubgroups = function(e, t) {
        var o, n, r;
        void 0 === t && (t = !1);
        var i = null != (o = e.VendorServices) ? o : [];
        if (t)
            for (var s = 0, a = null != (n = e.SubGroups) ? n : []; s < a.length; s++) {
                var l = null != (r = a[s].VendorServices) ? r : [];
                i.push.apply(i, l)
            }
        return i
    }, Dn.prototype.createVendor = function(e, t, o, n) {
        var r = Gn.vendorItemClone.cloneNode(!0);
        if (r.setAttribute("data-vnd-id", t.CustomVendorServiceId), Mt.PCAccordionStyle === W.NoAccordion) {
            r.classList.remove("ot-accordion-layout");
            var i = r.querySelector("button");
            i && r.removeChild(i)
        } else Gn.setExpandVendorList(r, o);
        Gn.setVendorHeader(e, t, r, n);
        var s = r.querySelector(".ot-vnd-info-cntr");
        return Gn.setVendorInfo(s, t), r
    }, Dn.prototype.setExpandVendorList = function(e, t) {
        e.querySelector("button").setAttribute("aria-expanded", "" + t)
    }, Dn.prototype.setVendorHeader = function(e, t, o, n) {
        var r = Mt.PCShowAlwaysActiveToggle,
            i = "always active" === io.getGrpStatus(e).toLowerCase(),
            s = o.querySelector(".ot-acc-hdr");
        i && s.classList.add("ot-always-active-group");
        var a = null;
        i && Mt.PCCategoryStyle === se.Toggle || (a = Gn.setHeaderInputStyle(e, t, i, n));
        var l = Gn.setHeaderText(t, s);
        s.appendChild(l);
        var c = Gn.getPositionForElement(Mt.PCAccordionStyle, Gn.isToggle),
            d = c.positionIcon,
            u = c.positionInput;
        if (a && s.insertAdjacentElement(u, a), i && r) {
            var p = Gn.getAlwaysActiveElement();
            s.insertAdjacentElement("beforeend", p)
        }
        if (Mt.PCAccordionStyle !== W.NoAccordion) {
            var h = Gn.setHeaderAccordionIcon();
            s.insertAdjacentElement(d, h)
        }
    }, Dn.prototype.getPositionForElement = function(e, t) {
        var o = "beforeend",
            n = "beforeend";
        return t && e === W.PlusMinus && (o = "afterbegin"), t || (n = "afterbegin"), {
            positionIcon: o,
            positionInput: n
        }
    }, Dn.prototype.setHeaderAccordionIcon = function() {
        return Mt.PCAccordionStyle === W.Caret ? oo.arrowEl.cloneNode(!0) : oo.plusMinusEl.cloneNode(!0)
    }, Dn.prototype.setHeaderText = function(e, t) {
        var o = t.querySelector(".ot-cat-header"),
            n = o.cloneNode();
        return t.removeChild(o), n.innerText = e.ServiceName, n
    }, Dn.prototype.setHeaderInputStyle = function(e, t, o, n) {
        if (!Mt.VendorServiceConfig.PCVSOptOut) return null;
        var r = io.checkIsActiveByDefault(e),
            i = !1,
            s = jt.vsConsent;
        i = s.has(t.CustomVendorServiceId) ? s.get(t.CustomVendorServiceId) : r;
        var a = On();
        a.querySelector("input").classList.add("category-switch-handler");
        var l = a.querySelector("input"),
            c = t.CustomVendorServiceId,
            d = null != n ? n : "ot-vendor-id-" + c,
            u = "ot-vendor-header-id-" + c;
        Wt(l).attr("id", d), Wt(l).attr("name", d), Wt(l).attr("aria-labelledby", u), Wt(l).data("ot-vs-id", c), Wt(l).data("optanongroupid", t.groupRef.CustomGroupId), l.disabled = o, Nt.setCheckedAttribute(null, l, i);
        var p = Gn.isToggle ? d : u;
        return Wt(a.querySelector("label")).attr("for", p), Wt(a.querySelector(".ot-label-txt")).html(t.ServiceName), a
    }, Dn.prototype.getAlwaysActiveElement = function() {
        var e = document.createElement("div");
        return e.classList.add("ot-always-active"), e.innerText = Mt.AlwaysActiveText, e
    }, Dn.prototype.setVendorInfo = function(e, t) {
        var o, n = ["DPOLink", "PrivacyPolicyLink", "CookiePolicyLink", "OptOutLink"];
        for (o in t)
            if (!Gn.skipVendorInfoKey(o, t)) {
                var r = t[o],
                    i = Gn.vendorInfoClone.cloneNode(!0);
                i.dataset.vndInfoKey = o + "-" + t.CustomVendorServiceId;
                var s = i.querySelector(".ot-vnd-lbl"),
                    a = i.querySelector(".ot-vnd-cnt");
                if (s.innerHTML = Gn.getLocalizedString(o), n.includes(o)) {
                    a.remove();
                    var l = document.createElement("a");
                    Wt(l).attr("href", r), Wt(l).attr("target", "_blank"), Wt(l).attr("rel", "noopener"), Wt(l).attr("aria-label", r + " " + Mt.NewWinTxt), l.classList.add("ot-vnd-cnt"), l.innerText = r, s.insertAdjacentElement("afterend", l)
                } else a.innerHTML = r;
                e.appendChild(i)
            }
    }, Dn.prototype.skipVendorInfoKey = function(e, t) {
        return "VendorServiceId" === e || "DefaultCategoryId" === e || "ServiceName" === e || "groupRef" === e || "CustomVendorServiceId" === e || "PurposeId" === e || !t[e]
    }, Dn.prototype.getLocalizedString = function(e) {
        return Gn.stringTranslation.has(e) ? Gn.stringTranslation.get(e) : "DEFAULT"
    }, Dn.prototype.checkGroupChildrenState = function(e) {
        for (var t, o, n = 0, r = null != (t = e.SubGroups) ? t : []; n < r.length; n++) {
            var i = r[n];
            if (Gn.checkGroupChildrenState(i)) return !0
        }
        for (var s = 0, a = null != (o = e.VendorServices) ? o : []; s < a.length; s++) {
            var l = a[s];
            if (jt.vsConsent.get(l.CustomVendorServiceId)) return !0
        }
        return !1
    }, Dn.prototype.changeVendorServiceState = function(e, t) {
        jt.vsConsent.set(e.CustomVendorServiceId, t)
    }, Dn.prototype.changeVendorServiceUIState = function(e, t) {
        e && (Nt.setCheckedAttribute(null, e, t), Gn.isToggle && e.parentElement.querySelector(".ot-switch-nob").setAttribute("aria-checked", "" + t))
    }, Dn.prototype.changeGroupState = function(e, t, o) {
        var n = io.getParentByGrp(e);
        if (Tn.toggleGrpStatus(e, t), Gn.updateGroupUIState(e.CustomGroupId, t, o, null !== n), n) {
            var r = Gn.checkGroupChildrenState(n);
            Gn.changeGroupState(n, r, o)
        }
    }, Dn.prototype.updateGroupUIState = function(e, t, o, n) {
        void 0 === n && (n = !1);
        var r = n ? "#ot-sub-group-id-" : "#ot-group-id-",
            i = document.querySelector(r + e);
        i && (Nt.setCheckedAttribute(null, i, t), o && i.parentElement.querySelector(".ot-switch-nob").setAttribute("aria-checked", "" + t))
    }, Dn.prototype.getVendorInputElement = function(e) {
        return document.getElementById("ot-vendor-id-" + e)
    }, Dn.prototype.checkIfIsInvalid = function(e, t) {
        return !e || !e.VendorServices || !t || e.VendorServices.length <= 0
    }, Dn);

    function Dn() {
        this.MAIN_CONT_ELE = ".ot-vnd-serv"
    }
    var Hn, Fn = "#onetrust-banner-sdk",
        Rn = ".banner_logo",
        qn = "#onetrust-pc-sdk",
        Mn = (Un.prototype.insertPcHtml = function() {
            Hn.jsonAddAboutCookies(Mt);
            var t = document.createDocumentFragment();
            if (yn.preferenceCenterGroup) {
                var e = document.createElement("div");
                Wt(e).html(yn.preferenceCenterGroup.html);
                var o = e.querySelector("#onetrust-pc-sdk");
                Hn.addClassesPerConfig(o), Wt(t).append(o);
                var n = function(e) {
                        return t.querySelector(e)
                    },
                    r = function(e) {
                        return t.querySelectorAll(e)
                    };
                Hn.manageCloseButtons(o, r), Mt.Language && Mt.Language.Culture && Wt(n("#onetrust-pc-sdk")).attr("lang", Mt.Language.Culture), Hn.addLogos(n, r), Wt(n($t.P_Title)).html(Mt.MainText), Mt.PCCloseButtonType === de.Link && Mt.PCTemplateUpgrade && qt.pcName === dt && Wt(n($t.P_Title)).addClass("ot-pc-title-shrink"), Wt(n(qn)).attr(this._ariaLabel, Mt.MainText), qt.pcName === dt && (Wt(n($t.P_Privacy_Txt)).html(Mt.AboutCookiesText), Wt(n($t.P_Privacy_Hdr)).html(Mt.AboutCookiesText)), Wt(n($t.P_Policy_Txt)).html(Mt.MainInfoText), Hn.configureLinkFields(n), Hn.configureSubjectDataFields(n), Hn.configureButtons(n, r), Hn.setManagePreferenceText(n), Hn.initializePreferenceCenterGroups(n, t), Hn.removeListsWhenAppropriate(n)
            }
            var i = document.createElement("iframe");
            i.setAttribute("class", "ot-text-resize"), i.setAttribute("title", "onetrust-text-resize"), xt(i, "position: absolute; top: -50000px; width: 100em;"), i.setAttribute(this._ariaHidden, "true"), Wt(t.querySelector("#onetrust-pc-sdk")).append(i);
            var s = document.getElementById("onetrust-consent-sdk");
            Wt(s).append(t), qt.ignoreInjectingHtmlCss || Wt(document.body).append(s), (Mt.showCookieList || jt.showGeneralVendors) && _n.InitializeHostList()
        }, Un.prototype.addClassesPerConfig = function(e) {
            /Chrome|Safari/i.test(navigator.userAgent) && /Google Inc|Apple Computer/i.test(navigator.vendor) || Wt(e).addClass("ot-sdk-not-webkit"), Mt.useRTL && Wt(e).attr("dir", "rtl"), qt.legIntSettings.PAllowLI && "IAB2" === qt.iabType && (Wt(e).addClass("ot-leg-opt-out"), qt.legIntSettings.PShowLegIntBtn && Wt(e).addClass("ot-leg-btn")), Mt.BannerRelativeFontSizesToggle && Wt(e).addClass("otRelFont"), Mt.PCShowConsentLabels && Wt(e).addClass("ot-tgl-with-label"), (Mt.UseGoogleVendors || jt.showGeneralVendors) && Wt(e).addClass("ot-addtl-vendors"), "right" === Mt.PreferenceCenterPosition && Wt(e).addClass(Mt.useRTL ? "right-rtl" : "right")
        }, Un.prototype.manageCloseButtons = function(e, t) {
            var o = Wt(t($t.P_Close_Btn)).el;
            if (Mt.ShowPreferenceCenterCloseButton) {
                Mt.CloseText || (Mt.CloseText = "Close Preference Center");
                for (var n = 0, r = o; n < r.length; n++) {
                    var i = r[n];
                    Mt.PCCloseButtonType === de.Link && Mt.PCTemplateUpgrade ? (Wt(i).html(Mt.PCContinueText), Wt(e).addClass("ot-close-btn-link"), Wt(i).el.removeAttribute(this._ariaLabel)) : Wt(i).el.setAttribute(this._ariaLabel, Mt.CloseText)
                }
            } else
                for (var s = 0; s < o.length; s++) Wt(o[s].parentElement).el.removeChild(o[s])
        }, Un.prototype.addLogos = function(e, t) {
            var o = e($t.P_Logo);
            if (o && Mt.optanonLogo) {
                var n = Jt.updateCorrectUrl(Mt.optanonLogo);
                Jt.checkMobileOfflineRequest(Jt.getBannerVersionUrl()) && (n = Nt.getRelativeURL(n, !0, !0));
                var r = document.createElement("img");
                r.setAttribute("alt", Mt.PCLogoAria), r.setAttribute("src", n), o.append(r), Mt.PCLogoAria && Wt(o).attr(this._ariaLabel, Mt.PCLogoAria)
            }
            Jt.insertFooterLogo(t(".ot-pc-footer-logo a"))
        }, Un.prototype.configureLinkFields = function(e) {
            if (Mt.AboutText && Wt(e($t.P_Policy_Txt)).html(Wt(e($t.P_Policy_Txt)).html() + '\n            <br/><a href="' + Mt.AboutLink + '" class="privacy-notice-link" rel="noopener" target="_blank"\n                    aria-label="' + Mt.PCCookiePolicyLinkScreenReader + '">' + Mt.AboutText + "</a>"), Mt.PCenterImprintLinkText) {
                Mt.AboutText || e($t.P_Policy_Txt).insertAdjacentHTML("beforeend", "<br/>");
                var t = document.createElement("a");
                t.classList.add("ot-link-btn", "ot-imprint-handler"), t.textContent = Mt.PCenterImprintLinkText, t.setAttribute(this._ariaLabel, Mt.PCenterImprintLinkScreenReader), t.setAttribute("href", Mt.PCenterImprintLinkUrl), e($t.P_Policy_Txt).appendChild(t)
            }
            if (Mt.PCenterVendorListLinkText) {
                var o = !Mt.IsIabEnabled && jt.showGeneralVendors ? "ot-gv-list-handler" : "onetrust-vendors-list-handler";
                e($t.P_Policy_Txt).insertAdjacentHTML("beforeend", '<button class="ot-link-btn ' + o + '" aria-label="' + Mt.PCenterVendorListLinkAriaLabel + '">\n            ' + Mt.PCenterVendorListLinkText + "\n            </button>")
            }
        }, Un.prototype.configureSubjectDataFields = function(e) {
            if (Mt.PCTemplateUpgrade && Mt.PCenterUserIdTitleText && Mt.IsConsentLoggingEnabled) {
                var t = Gt.readCookieParam(Ge.OPTANON_CONSENT, Ve);
                if (e($t.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-title"><span>' + Mt.PCenterUserIdTitleText + ": </span> " + t + "</div>"), Mt.PCenterUserIdDescriptionText && e($t.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-desc">' + Mt.PCenterUserIdDescriptionText + "</div>"), Mt.PCenterUserIdTimestampTitleText) {
                    var o = Gt.getCookie(Ge.ALERT_BOX_CLOSED),
                        n = o && Jt.getUTCFormattedDate(o),
                        r = n || Mt.PCenterUserIdNotYetConsentedText;
                    e($t.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-timestamp"><span>' + Mt.PCenterUserIdTimestampTitleText + ": </span> " + r + "</div>")
                }
            }
        }, Un.prototype.setManagePreferenceText = function(e) {
            var t = e($t.P_Manage_Cookies_Txt),
                o = Wt(t);
            t && (o.html(Mt.ManagePreferenceText), Mt.ManagePreferenceText || o.attr(this._ariaHidden, !0))
        }, Un.prototype.configureButtons = function(e, t) {
            Mt.ConfirmText.trim() ? Wt(e("#accept-recommended-btn-handler")).html(Mt.ConfirmText) : e("#accept-recommended-btn-handler").parentElement.removeChild(e("#accept-recommended-btn-handler"));
            for (var o = t(".save-preference-btn-handler"), n = 0; n < o.length; n++) Wt(o[n]).html(Mt.AllowAllText);
            var r = t(".ot-pc-refuse-all-handler");
            if (Mt.PCenterShowRejectAllButton && Mt.PCenterRejectAllButtonText.trim())
                for (n = 0; n < r.length; n++) Wt(r[n]).html(Mt.PCenterRejectAllButtonText);
            else Nt.removeChild(r)
        }, Un.prototype.removeListsWhenAppropriate = function(e) {
            if (!Mt.IsIabEnabled) {
                var t = e($t.P_Vendor_Container);
                t && t.parentElement.removeChild(t)
            }
            if (!Mt.showCookieList && !jt.showGeneralVendors) {
                var o = e($t.P_Host_Cntr);
                o && o.parentElement.removeChild(o)
            }
        }, Un.prototype.setParentGroupName = function(e, t, o, n) {
            var r = e.querySelector(".category-header,.ot-cat-header,.category-menu-switch-handler>h3");
            Wt(r).html(t), Wt(r).attr("id", o), qt.pcName === dt && (e.querySelector($t.P_Category_Header).innerHTML = t, e.querySelector("" + $t.P_Desc_Container).setAttribute("id", n), e.querySelector(".category-menu-switch-handler").setAttribute("aria-controls", n))
        }, Un.prototype.setLegIntButton = function(e, t, o, n) {
            void 0 === o && (o = !1);
            var r = !0; - 1 < jt.vendors.selectedLegInt.indexOf(t.IabGrpId + ":false") && (r = !1);
            var i = no.generateLegIntButtonElements(r, t.OptanonGroupId);
            o ? n.insertAdjacentHTML("afterend", i) : e.insertAdjacentHTML("beforeend", i);
            var s = e.querySelector(".ot-remove-objection-handler");
            s && xt(s, s.getAttribute("data-style"))
        }, Un.prototype.setParentGroupDescription = function(e, t, o, n, r) {
            var i = Tn.safeFormattedGroupDescription(t),
                s = e.querySelector("p:not(.ot-always-active)"),
                a = e.querySelector($t.P_Acc_Grp_Desc),
                l = s || a;
            return -1 < Bt.indexOf(t.Type) && o.PCGrpDescType === I.Legal ? i = t.DescriptionLegal : l.classList.add("ot-category-desc"), qt.legIntSettings.PAllowLI && !qt.legIntSettings.PShowLegIntBtn && (t.SubGroups.some(function(e) {
                return e.HasLegIntOptOut
            }) || t.HasLegIntOptOut ? l.parentElement.classList.add("ot-leg-border-color") : Nt.removeChild(e.querySelector($t.P_Li_Hdr))), qt.pcName !== dt && l.setAttribute("id", n), Wt(l).html(i), t.Type === It && Nt.removeChild(l), l
        }, Un.prototype.cloneOtHtmlEls = function(e) {
            var t = /otPcPanel|otPcCenter/;
            oo.toggleEl = Wt(e(".ot-tgl")).el.cloneNode(!0), oo.arrowEl = Wt(e("#onetrust-pc-sdk > " + $t.P_Arrw_Cntr)).el.cloneNode(!0), oo.subGrpEl = Wt(e($t.P_Sub_Grp_Cntr)).el.cloneNode(!0), oo.vListEl = Wt(e($t.P_Ven_Lst_Cntr)).el.cloneNode(!0), oo.cListEl = Wt(e($t.P_Host_Lst_cntr)).el.cloneNode(!0), oo.chkboxEl = Wt(e($t.P_CBx_Cntr)).el.cloneNode(!0), oo.accordionEl = Wt(e(".ot-acc-cntr")).el.cloneNode(!0), t.test(qt.pcName) && (oo.plusMinusEl = Wt(e(".ot-plus-minus")).el.cloneNode(!0)), Nt.removeChild(e(".ot-tgl")), Nt.removeChild(e("#onetrust-pc-sdk > " + $t.P_Arrw_Cntr)), Nt.removeChild(e($t.P_Sub_Grp_Cntr)), Nt.removeChild(e($t.P_Ven_Lst_Cntr)), Nt.removeChild(e($t.P_Host_Lst_cntr)), Nt.removeChild(e($t.P_CBx_Cntr)), Nt.removeChild(e(".ot-acc-cntr")), t.test(qt.pcName) && Nt.removeChild(e(".ot-plus-minus"))
        }, Un.prototype.insertSelectAllEls = function(e) {
            var t = e($t.P_Select_Cntr + " .ot-sel-all-chkbox"),
                o = On();
            o.id = $t.P_Sel_All_Host_El, o.querySelector("input").id = "select-all-hosts-groups-handler", o.querySelector("label").setAttribute("for", "select-all-hosts-groups-handler"), Wt(t).append(o);
            var n = On();
            n.id = $t.P_Sel_All_Vendor_Consent_El, n.querySelector("input").id = "select-all-vendor-groups-handler", n.querySelector("label").setAttribute("for", "select-all-vendor-groups-handler"), Wt(t).append(n);
            var r = On();
            r.id = $t.P_Sel_All_Vendor_Leg_El, r.querySelector("input").id = "select-all-vendor-leg-handler", r.querySelector("label").setAttribute("for", "select-all-vendor-leg-handler"), Wt(t).append(r)
        }, Un.prototype.initializePreferenceCenterGroups = function(e, t) {
            var o = qt.pcName;
            if (wt.isV2Template) {
                Hn.cloneOtHtmlEls(e);
                var n = oo.chkboxEl.cloneNode(!0);
                n.querySelector("input").classList.add("category-filter-handler"), Wt(e($t.P_Fltr_Modal + " " + $t.P_Fltr_Option)).append(n), Hn.insertSelectAllEls(e)
            }
            var r = Wt(e("#onetrust-pc-sdk " + $t.P_Category_Grp));
            o === st || o === lt || o === at ? Mt.PCenterEnableAccordion ? Nt.removeChild(r.el.querySelector($t.P_Category_Item + ":not(.ot-accordion-layout)")) : Nt.removeChild(r.el.querySelector($t.P_Category_Item + ".ot-accordion-layout")) : o === dt && (Mt.PCenterEnableAccordion = !1);
            var i, s = e("#onetrust-pc-sdk " + $t.P_Category_Item),
                a = wt.isV2Template ? oo.subGrpEl.cloneNode(!0) : Wt(e($t.P_Sub_Grp_Cntr)),
                l = wt.isV2Template ? "" : Wt(e($t.P_Acc_Container + " " + $t.P_Sub_Grp_Cntr));
            Mt.PCTemplateUpgrade && /otPcTab/.test(o) && (i = e(".ot-abt-tab").cloneNode(!0), Nt.removeChild(e(".ot-abt-tab"))), r.el.removeChild(s), Hn.setVendorListClass(e, s), Hn.setPCHeader(e, s), Hn.createHtmlForEachGroup({
                fm: e,
                fragment: t,
                categoryGroupTemplate: s,
                cookiePreferencesContainer: r,
                popupSubGrpContainer: l,
                subGrpContainer: a
            }), Hn.setPcTabLayout(e, t, i)
        }, Un.prototype.setPcTabLayout = function(e, t, o) {
            var n = e(".ot-tab-desc");
            if ("otPcTab" === qt.pcName)
                if (o && e("#onetrust-pc-sdk " + $t.P_Category_Grp).insertAdjacentElement("afterbegin", o), n && 640 < window.innerWidth && Wt(n).append(t.querySelectorAll("#onetrust-pc-sdk " + $t.P_Desc_Container)), Mt.IsIabEnabled) e($t.P_Desc_Container + " .category-vendors-list-handler").innerHTML = Mt.VendorListText + "&#x200E;";
                else {
                    var r = e($t.P_Desc_Container + " .category-vendors-list-handler");
                    r && r.parentElement.removeChild(r)
                }
        }, Un.prototype.setVendorListClass = function(e, t) {
            wt.isV2Template ? Mt.PCAccordionStyle === W.Caret && (Wt(e("#onetrust-pc-sdk " + $t.P_Vendor_List)).addClass("ot-enbl-chr"), Mt.PCenterEnableAccordion && Wt(e("#onetrust-pc-sdk " + $t.P_Content)).addClass("ot-enbl-chr")) : Wt(t.querySelector($t.P_Sub_Grp_Cntr)).remove()
        }, Un.prototype.setPCHeader = function(e, t) {
            var o = qt.pcName,
                n = e($t.P_Li_Hdr) || t.querySelector($t.P_Li_Hdr);
            qt.legIntSettings.PAllowLI && qt.grpContainLegalOptOut && "IAB2" === Mt.IabType && !qt.legIntSettings.PShowLegIntBtn ? (n.querySelector("span:first-child").innerText = Mt.ConsentText, n.querySelector("span:last-child").innerText = Mt.LegitInterestText, wt.isV2Template && (n.querySelector("span:first-child").innerText = Mt.PCenterConsentText, n.querySelector("span:last-child").innerText = Mt.PCenterLegIntColumnHeader), Mt.PCenterEnableAccordion && n ? n.classList.add("ot-leg-border-color") : "otPcList" === o && t.insertAdjacentElement("afterbegin", n)) : (Nt.removeChild(e("#onetrust-pc-sdk " + $t.P_Li_Hdr)), Nt.removeChild(t.querySelector($t.P_Li_Hdr)))
        }, Un.prototype.createHtmlForEachGroup = function(e) {
            var t = e.fm,
                o = e.fragment,
                n = e.categoryGroupTemplate,
                r = e.cookiePreferencesContainer,
                i = e.popupSubGrpContainer,
                s = e.subGrpContainer,
                a = Mt.Groups.filter(function(e) {
                    return e.Order
                }),
                l = 0 === r.el.children.length;
            Mt.PCTemplateUpgrade && (jt.showVendorService ? Gn.setHtmlTemplate(t("#onetrust-pc-sdk")) : Gn.removeVSUITemplate(t("#onetrust-pc-sdk")));
            for (var c = 0, d = a; c < d.length; c++) {
                var u = d[c],
                    p = u.GroupName,
                    h = u.CustomGroupId,
                    g = n.cloneNode(!0),
                    C = "ot-group-id-" + h,
                    y = "ot-header-id-" + h,
                    f = "ot-desc-id-" + h;
                (g = Wt(g).el).setAttribute("data-optanongroupid", h);
                var v = g.querySelector("input,button");
                v && (v.setAttribute("aria-controls", f), v.setAttribute("aria-labelledby", y)), Hn.setParentGroupName(g, p, y, f), Hn.setPopupData(u, g);
                var k = Hn.setParentGroupDescription(g, u, Mt, f, C);
                wt.isV2Template ? Hn.setToggle(g, k, u, C, y) : Hn.setToggleProps(g, k, u, C, y);
                var m = !!t("#onetrust-pc-sdk " + $t.P_Category_Grp).querySelector($t.P_Category_Item),
                    b = r.el.querySelectorAll($t.P_Category_Item + ":not(.ot-vnd-item)");
                b = b[b.length - 1], l ? r.append(g) : m ? zt.insertAfter(g, b) : zt.insertAfter(g, r.el.querySelector($t.P_Li_Hdr) || r.el.querySelector("h3")), Hn.setSubGroupData(u, g, i, s);
                var P = Mt.PCGrpDescLinkPosition === _.Top;
                u.Type === It && P && (k = g.querySelector($t.P_Sub_Grp_Cntr));
                var S = P ? k : null;
                Hn.setVendorListBtn(g, t, o, u, S, Mt), Hn.setHostListBtn(g, t, o, u), Hn.setVendorServiceData(u, g), jt.dataGroupState.push(u)
            }
        }, Un.prototype.setPopupData = function(e, t) {
            qt.pcName === ct && (e.ShowVendorList && "IAB2" === Mt.IabType ? (Nt.removeChild(t.querySelector("p:not(.ot-always-active)")), Nt.removeChild(t.querySelector($t.P_Acc_Txt + ":not(" + $t.P_Acc_Container + ")")), e.SubGroups.length || wt.isV2Template || Nt.removeChild(t.querySelector($t.P_Sub_Grp_Cntr))) : Nt.removeChild(t.querySelector($t.P_Acc_Container)))
        }, Un.prototype.setSubGroupData = function(e, t, o, n) {
            var r = qt.pcName;
            if (0 < e.SubGroups.length && e.ShowSubgroup) {
                var i = r === ct && e.ShowVendorList && "IAB2" === Mt.IabType && !Mt.PCTemplateUpgrade;
                Hn.setSubGrps(e, i ? o : n, t, Mt)
            }
        }, Un.prototype.setVendorServiceData = function(e, t) {
            var o = qt.pcName;
            if (jt.showVendorService && Mt.VendorServiceConfig.PCVSCategoryView) {
                var n = $t.P_Acc_Txt;
                o === dt && (n = $t.P_Desc_Container);
                var r = t.querySelector(n);
                Mt.PCAccordionStyle === W.NoAccordion && (r = t), Gn.insertVendorServiceHtml(e, r)
            }
        }, Un.prototype.jsonAddAboutCookies = function(e) {
            var t = {};
            return t.GroupName = e.AboutCookiesText, t.GroupDescription = e.MainInfoText, t.ShowInPopup = !0, t.Order = 0, t.IsAboutGroup = !0, t
        }, Un.prototype.setVendorListBtn = function(e, t, o, n, r, i) {
            var s = qt.pcName;
            if (n.ShowVendorList) {
                var a = void 0,
                    l = void 0;
                if (wt.isV2Template ? a = (l = oo.vListEl.cloneNode(!0)).querySelector(".category-vendors-list-handler") : l = (a = e.querySelector(".category-vendors-list-handler")).parentElement, a.innerHTML = i.VendorListText + "&#x200E;", a.setAttribute(this._ariaLabel, Mt.PCOpensVendorDetailsAlert), a.setAttribute("data-parent-id", n.CustomGroupId), i.PCGrpDescType === I.UserFriendly && a.insertAdjacentHTML("afterend", "<a href='" + Mt.IabLegalTextUrl + "?lang=" + jt.consentLanguage + "' rel=\"noopener\" target='_blank'>&nbsp;|&nbsp;" + i.PCVendorFullLegalText + '&nbsp;<span class="ot-scrn-rdr">' + Mt.NewWinTxt + "</span></a>"), wt.isV2Template) {
                    var c = e;
                    s === dt ? c = e.querySelector("" + $t.P_Desc_Container) : i.PCenterEnableAccordion && (c = e.querySelector($t.P_Acc_Txt)), c.insertAdjacentElement("beforeend", l)
                }
                r && r.insertAdjacentElement("beforebegin", l)
            } else if (!wt.isV2Template) {
                if (s !== lt && s !== st || i.PCenterEnableAccordion) {
                    if (s === ct || s === lt || s === st && i.PCenterEnableAccordion) {
                        var d = t("#vendor-list-container"),
                            u = e.querySelector($t.P_Acc_Txt);
                        d && o.querySelector("" + $t.P_Content).removeChild(d), wt.isV2Template || Wt(u).el.removeChild(u.querySelector($t.P_Ven_Lst_Cntr))
                    }
                } else Nt.removeChild(e.querySelector($t.P_Ven_Lst_Cntr));
                if (s === dt || s === at) {
                    var p = e.querySelector($t.P_Ven_Lst_Cntr);
                    p && p.parentElement.removeChild(p)
                }
            }
        }, Un.prototype.setHostListBtn = function(e, t, o, n) {
            var r = qt.pcName,
                i = !1;
            Mt.showCookieList && (i = -1 < Nt.findIndex(u(n.SubGroups, [n]), function(e) {
                return -1 === Lt.indexOf(e.Type) && e.FirstPartyCookies.length
            }));
            var s = jt.showGeneralVendors && n.GeneralVendorsIds && n.GeneralVendorsIds.length;
            if (!jt.showVendorService && (Mt.showCookieList || jt.showGeneralVendors) && (n.ShowHostList || i || s)) {
                var a = void 0;
                if (wt.isV2Template) {
                    var l = oo.cListEl.cloneNode(!0);
                    a = l.querySelector(".category-host-list-handler");
                    var c = e;
                    r === dt ? c = e.querySelector("" + $t.P_Desc_Container) : Mt.PCenterEnableAccordion && (c = e.querySelector($t.P_Acc_Txt)), c.insertAdjacentElement("beforeend", l)
                } else a = e.querySelector(".category-host-list-handler");
                Hn.setcListHandler(a, n)
            } else Hn.setHostListVendorList(t, o, e)
        }, Un.prototype.setcListHandler = function(e, t) {
            if (e) {
                var o = jt.showGeneralVendors ? Mt.GroupGenVenListLabel : Mt.ThirdPartyCookieListText,
                    n = jt.showGeneralVendors ? Mt.PCenterVendorListScreenReader : Mt.PCOpensCookiesDetailsAlert;
                e.innerHTML = o + "&#x200E;", e.setAttribute(this._ariaLabel, n), e.setAttribute("data-parent-id", t.CustomGroupId)
            }
        }, Un.prototype.setHostListVendorList = function(e, t, o) {
            if (qt.pcName === ct) {
                var n = e("#vendor-list-container"),
                    r = o.querySelector($t.P_Acc_Txt);
                n && t.querySelector("" + $t.P_Content).removeChild(n), r.querySelector($t.P_Host_Lst_cntr) && Wt(r).el.removeChild(r.querySelector($t.P_Host_Lst_cntr))
            } else {
                var i = o.querySelector($t.P_Host_Lst_cntr);
                i && i.parentElement.removeChild(i)
            }
        }, Un.prototype.setSubGrps = function(L, _, V, E) {
            var B = this,
                w = qt.pcName,
                x = E.PCGrpDescType === I.Legal,
                O = u(Vt, _t),
                G = w === ct && L.ShowVendorList && "IAB2" === E.IabType;
            if (G && !Mt.PCTemplateUpgrade) {
                var e = V.querySelector($t.P_Sub_Grp_Cntr);
                e.parentElement.removeChild(e)
            }
            L.SubGroups.forEach(function(e) {
                var t;
                "IAB2" !== qt.iabType || e.Type !== St || e.HasConsentOptOut || (t = !0);
                var o, n, r = wt.isV2Template ? _.cloneNode(!0) : _.el.cloneNode(!0),
                    i = r.querySelector($t.P_Subgp_ul),
                    s = r.querySelector($t.P_Subgrp_li).cloneNode(!0),
                    a = e.CustomGroupId,
                    l = "ot-sub-group-id-" + a,
                    c = io.getGrpStatus(e).toLowerCase(),
                    d = io.getGrpStatus(L).toLowerCase(),
                    u = s.querySelector(".cookie-subgroup>h4, .cookie-subgroup>h5, .cookie-subgroup>h6, .ot-subgrp>h4, .ot-subgrp>h5, .ot-subgrp>h6"),
                    p = s.querySelector($t.P_Tgl_Cntr);
                if (s.setAttribute("data-optanongroupid", a), wt.isV2Template ? ((n = Hn.getInputEle()).querySelector("input").setAttribute("data-optanongroupid", a), n.querySelector("input").classList.add("cookie-subgroup-handler"), o = n.cloneNode(!0), p.insertAdjacentElement("beforeend", o)) : (o = s.querySelector(".ot-toggle")).querySelector("input").setAttribute("data-optanongroupid", a), Wt(r.querySelector($t.P_Subgp_ul)).html(""), Wt(u).html(e.GroupName), jt.showVendorService) {
                    var h = document.createElement("div");
                    h.classList.add("ot-acc-hdr"), u.classList.add("ot-cat-header"), h.appendChild(u);
                    var g = "afterbegin";
                    Mt.PCCategoryStyle === se.Toggle && (g = "beforeend"), h.insertAdjacentElement(g, o), s.removeChild(s.querySelector($t.P_Subgrp_Tgl_Cntr)), s.insertAdjacentElement("afterbegin", h)
                }
                o.querySelector("input").setAttribute("id", l), o.querySelector("input").setAttribute(B._ariaLabel, e.GroupName), o.querySelector("label").setAttribute("for", l);
                var C = Wt(s.querySelector($t.P_Subgrp_Desc));
                if (G) {
                    var y = e.DescriptionLegal && x ? e.DescriptionLegal : e.GroupDescription;
                    C.html(y)
                } else {
                    y = Tn.safeFormattedGroupDescription(e);
                    var f = !1; - 1 < Bt.indexOf(e.Type) && x && (f = !0, y = e.DescriptionLegal), E.PCenterEnableAccordion && f || (C = Wt(s.querySelector("p"))), L.ShowSubGroupDescription ? C.html(y) : C.html("")
                }
                if (L.ShowSubgroupToggle && -1 < O.indexOf(e.Type)) {
                    var v = Tn.isGroupActive(e);
                    v && (s.querySelector("input").setAttribute("checked", ""), "always active" === d && -1 === Bt.indexOf(e.Type) && (s.querySelector("input").disabled = !0, s.querySelector("input").setAttribute("disabled", !0)));
                    var k = p.querySelector(".ot-label-status");
                    if (Mt.PCShowConsentLabels ? k.innerHTML = v ? Mt.PCActiveText : Mt.PCInactiveText : Nt.removeChild(k), qt.legIntSettings.PAllowLI && e.Type === St && e.HasLegIntOptOut)
                        if (qt.legIntSettings.PShowLegIntBtn) Hn.setLegIntButton(s, e);
                        else {
                            var m = p.cloneNode(!0);
                            p.insertAdjacentElement("afterend", m);
                            var b = m.querySelector(".ot-label-status"),
                                P = m.querySelector("input");
                            P.setAttribute("id", l + "-leg-out"), m.querySelector("label").setAttribute("for", l + "-leg-out"), e.IsLegIntToggle = !0;
                            var S = Tn.isGroupActive(e);
                            Mt.PCShowConsentLabels ? b.innerHTML = S ? Mt.PCActiveText : Mt.PCInactiveText : Nt.removeChild(b), Nt.setCheckedAttribute(null, P, S), e.IsLegIntToggle = !1
                        }
                } else "always active" === c && (L.ShowSubgroupToggle || -1 === Et.indexOf(e.Type)) || (t = !0);
                if (t && (o.classList.add("ot-hide-tgl"), o.querySelector("input").setAttribute(B._ariaHidden, !0)), "always active" !== c || t || (o && o.parentElement.removeChild(o), s.querySelector($t.P_Tgl_Cntr).classList.add("ot-always-active-subgroup"), Hn.setAlwaysActive(s, !0)), "COOKIE" === e.Type && -1 !== e.Parent.indexOf("STACK") && xt(r, "display: none;"), Wt(i).append(s), wt.isV2Template) {
                    var A = V;
                    "otPcTab" === w ? A = V.querySelector("" + $t.P_Desc_Container) : E.PCenterEnableAccordion && (A = V.querySelector($t.P_Acc_Txt)), A.insertAdjacentElement("beforeend", r)
                } else {
                    var T = V.querySelector($t.P_Category_Item + " " + $t.P_Ven_Lst_Cntr);
                    T && T.insertAdjacentElement("beforebegin", r)
                }
                if (jt.showVendorService && Mt.VendorServiceConfig.PCVSCategoryView) {
                    var I = i;
                    Gn.insertVendorServiceHtml(e, I)
                }
            })
        }, Un.prototype.getInputEleForCategory = function(e) {
            return jt.showVendorService && Mt.PCCategoryStyle === se.Checkbox && e.classList.add("ot-checkbox-consent"), Hn.getInputEle()
        }, Un.prototype.getInputEle = function() {
            return jt.showVendorService ? On() : oo.toggleEl.cloneNode(!0)
        }, Un.prototype.setToggle = function(e, t, o, n, r) {
            var i = Hn.getInputEleForCategory(e);
            i.querySelector("input").classList.add("category-switch-handler");
            var s = i.querySelector("input"),
                a = e.querySelector($t.P_Category_Header),
                l = Tn.isGroupActive(o),
                c = "always active" === io.getGrpStatus(o).toLowerCase(),
                d = o.OptanonGroupId.toString(),
                u = !0;
            if ("IAB2" !== qt.iabType || o.Type !== St && o.Type !== It || o.HasConsentOptOut || (u = !1), Wt(i.querySelector("label")).attr("for", n), Wt(i.querySelector(".ot-label-txt")).html(o.GroupName), qt.legIntSettings.PAllowLI && o.Type === St && o.HasLegIntOptOut)
                if (qt.legIntSettings.PShowLegIntBtn) Hn.setLegIntButton(e, o, !0, t);
                else {
                    var p = i.cloneNode(!0);
                    o.IsLegIntToggle = !0;
                    var h = Tn.isGroupActive(o),
                        g = p.querySelector(".ot-label-status");
                    Mt.PCShowConsentLabels ? g.innerHTML = h ? Mt.PCActiveText : Mt.PCInactiveText : Nt.removeChild(g), o.IsLegIntToggle = !1, Tn.setInputID(p.querySelector("input"), n + "-leg-out", d, h, r), Wt(p.querySelector("label")).attr("for", n + "-leg-out"), a.insertAdjacentElement("afterend", p)
                }
            var C = i.querySelector(".ot-label-status");
            Mt.PCShowConsentLabels ? C.innerHTML = l ? Mt.PCActiveText : Mt.PCInactiveText : Nt.removeChild(C);
            var y = Mt.PCCategoryStyle === se.Toggle;
            this.hideToggleContainer(c, u, y, i), u && this.setAlwaysActiveOrToggleInput(o, e, i, s, n, r), Hn.setNoAccordionHeader(e, c)
        }, Un.prototype.setNoAccordionHeader = function(e, t) {
            if (jt.showVendorService) {
                var o = Mt.PCCategoryStyle === se.Checkbox;
                if (Mt.PCAccordionStyle === W.NoAccordion && o) {
                    var n = document.createElement("div");
                    n.classList.add("ot-acc-hdr");
                    var r = e.querySelector(".ot-chkbox"),
                        i = e.querySelector(".ot-always-active"),
                        s = e.querySelector($t.P_Category_Header);
                    r && n.appendChild(r), n.appendChild(s), t && n.appendChild(i), e.insertBefore(n, e.firstChild)
                }
            }
        }, Un.prototype.hideToggleContainer = function(e, t, o, n) {
            !e && t || !o || (n.classList.add("ot-hide-tgl"), n.querySelector("input").setAttribute(this._ariaHidden, "true"))
        }, Un.prototype.setAlwaysActiveOrToggleInput = function(e, t, o, n, r, i) {
            var s = "always active" === io.getGrpStatus(e).toLowerCase(),
                a = Mt.PCCategoryStyle === se.Toggle,
                l = e.OptanonGroupId.toString(),
                c = Tn.isGroupActive(e),
                d = t.querySelector($t.P_Category_Header);
            jt.showVendorService ? (s && Mt.PCShowAlwaysActiveToggle && (Hn.setAlwaysActive(t), o.querySelector("input").setAttribute("disabled", "true")), s && a || Hn.insertAccordionInputHeader(d, o), Tn.setInputID(n, r, l, c, i), Hn.insertAccordionPointer(t, d)) : (Hn.insertAccordionPointer(t, d), s ? Mt.PCShowAlwaysActiveToggle && Hn.setAlwaysActive(t) : (Hn.insertAccordionInputHeader(d, o), Tn.setInputID(n, r, l, c, i)))
        }, Un.prototype.insertAccordionInputHeader = function(e, t) {
            var o = Hn.getPositionForInputEle();
            e.insertAdjacentElement(o, t)
        }, Un.prototype.getPositionForInputEle = function() {
            var e = "beforebegin";
            return jt.showVendorService ? Mt.PCCategoryStyle === se.Toggle && (e = "afterend") : e = "afterend", e
        }, Un.prototype.insertAccordionPointer = function(e, t) {
            if (e.classList.add("ot-vs-config"), Mt.PCenterEnableAccordion)
                if (jt.showVendorService) {
                    var o = e.querySelector($t.P_Acc_Header),
                        n = void 0,
                        r = void 0;
                    n = Mt.PCAccordionStyle === W.Caret ? (r = "beforeend", oo.arrowEl.cloneNode(!0)) : (r = Mt.PCCategoryStyle === se.Checkbox ? "beforeend" : "afterbegin", oo.plusMinusEl.cloneNode(!0)), o.insertAdjacentElement(r, n)
                } else Mt.PCAccordionStyle === W.Caret ? t.insertAdjacentElement("afterend", oo.arrowEl.cloneNode(!0)) : t.insertAdjacentElement("beforebegin", oo.plusMinusEl.cloneNode(!0))
        }, Un.prototype.setToggleProps = function(e, t, o, n, r) {
            var i = e.querySelectorAll("input:not(.cookie-subgroup-handler)"),
                s = e.querySelectorAll("label"),
                a = Tn.isGroupActive(o),
                l = o.CustomGroupId,
                c = e.querySelector(".label-text");
            c && Wt(c).html(o.GroupName);
            for (var d = 0; d < i.length; d++)
                if (s[d] && Wt(s[d]).attr("for", n), 2 <= i.length && 0 === d) Wt(i[d]).attr("id", n + "-toggle");
                else {
                    var u = !0;
                    if ("IAB2" !== qt.iabType || o.Type !== St && o.Type !== It || o.HasConsentOptOut || (u = !1), qt.legIntSettings.PAllowLI && o.Type === St && o.HasLegIntOptOut)
                        if (qt.legIntSettings.PShowLegIntBtn) Hn.setLegIntButton(e, o, !0, t);
                        else {
                            var p = e.querySelector($t.P_Tgl_Cntr + ":not(" + $t.P_Subgrp_Tgl_Cntr + ")") || e.querySelector(".ot-toggle"),
                                h = p.cloneNode(!0);
                            p.insertAdjacentElement("afterend", h);
                            var g = h.querySelector("input");
                            o.IsLegIntToggle = !0;
                            var C = Tn.isGroupActive(o);
                            o.IsLegIntToggle = !1, Tn.setInputID(g, n + "-leg-out", l, C, r), Wt(h.querySelector("label")).attr("for", n + "-leg-out"), Nt.removeChild(h.querySelector($t.P_Arrw_Cntr))
                        }
                    var y = "always active" === io.getGrpStatus(o).toLowerCase();
                    if (y || !u) {
                        var f = i[d].closest(".ot-toggle");
                        f && (f.classList.add("ot-hide-tgl"), f.querySelector("input").setAttribute(this._ariaHidden, !0))
                    }
                    u && (y && Hn.setAlwaysActive(e), Tn.setInputID(i[d], n, l, a, r))
                }
        }, Un.prototype.setAlwaysActive = function(e, t) {
            void 0 === t && (t = !1);
            var o = qt.pcName;
            if (o === ct || o === dt || t) e.querySelector($t.P_Tgl_Cntr).insertAdjacentElement("afterbegin", Wt("<div class='ot-always-active'>" + Mt.AlwaysActiveText + "</div>", "ce").el);
            else {
                var n = e.querySelector($t.P_Category_Header);
                !wt.isV2Template && Mt.PCenterEnableAccordion && (n = e.querySelector($t.P_Arrw_Cntr)), Wt(n).el.insertAdjacentElement("afterend", Wt("<div class='ot-always-active'>" + Mt.AlwaysActiveText + "</div>", "ce").el)
            }
            if (Mt.PCenterEnableAccordion) {
                var r = e.querySelector($t.P_Acc_Header);
                r && r.classList.add("ot-always-active-group")
            } else {
                var i = e.querySelector("" + $t.P_Desc_Container);
                i && i.classList.add("ot-always-active-group"), e.classList.add("ot-always-active-group")
            }
        }, Un);

    function Un() {
        this._ariaHidden = "aria-hidden", this._ariaLabel = "aria-label"
    }
    var jn, zn = (Kn.prototype.updateGtmMacros = function(e) {
        void 0 === e && (e = !0);
        var n = [];
        jt.groupsConsent.forEach(function(e) {
            var t = e.replace(":1", ""),
                o = io.getGrpStatus(io.getGroupById(t)).toLowerCase() === qe;
            Nt.endsWith(e, ":1") && (yn.canSoftOptInInsertForGroup(t) || o) && n.push(t)
        }), jt.hostsConsent.forEach(function(e) {
            Nt.endsWith(e, ":1") && n.push(e.replace(":1", ""))
        }), jt.showGeneralVendors && Mt.GenVenOptOut && Mt.GeneralVendors.forEach(function(e) {
            jt.genVendorsConsent[e.VendorCustomId] && (jt.softOptInGenVendors.includes(e.VendorCustomId) && _o.isLandingPage() || n.push(e.VendorCustomId))
        }), jt.vsIsActiveAndOptOut && jt.getVendorsInDomain().forEach(function(e) {
            jt.vsConsent.get(e.CustomVendorServiceId) && n.push(e.CustomVendorServiceId)
        });
        var t = "," + Nt.arrToStr(n) + ",";
        Mt.GoogleConsent.GCEnable && this.updateGCMTags(n), window.OnetrustActiveGroups = t, window.OptanonActiveGroups = t, qt.gcmUpdateCallback && qt.gcmUpdateCallback(), qt.otDataLayer.ignore || void 0 === this._window[qt.otDataLayer.name] || this._window[qt.otDataLayer.name].constructor !== Array ? !qt.otDataLayer.ignore && qt.otDataLayer.name && (this._window[qt.otDataLayer.name] = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: t
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: t
        }]) : (this._window[qt.otDataLayer.name].push({
            event: "OneTrustLoaded",
            OnetrustActiveGroups: t
        }), this._window[qt.otDataLayer.name].push({
            event: "OptanonLoaded",
            OptanonActiveGroups: t
        })), this.dispatchEvents(e, n, t)
    }, Kn.prototype.dispatchEvents = function(e, t, o) {
        var n, r;
        !e && qt.gtmUpdatedinStub || (n = new CustomEvent("consent.onetrust", {
            detail: t
        }));
        var i = Gt.readCookieParam(Ge.OPTANON_CONSENT, "groups"),
            s = jt.fireOnetrustGrp || !i || e || !qt.gtmUpdatedinStub;
        s && (jt.fireOnetrustGrp = !1, !qt.otDataLayer.ignore && this._window[qt.otDataLayer.name] && this._window[qt.otDataLayer.name].constructor === Array && this._window[qt.otDataLayer.name].push({
            event: "OneTrustGroupsUpdated",
            OnetrustActiveGroups: o
        }), r = new CustomEvent("OneTrustGroupsUpdated", {
            detail: t
        })), setTimeout(function() {
            n && s && window.dispatchEvent(n), r && window.dispatchEvent(r)
        })
    }, Kn.prototype.updateGCMTags = function(e) {
        var t = {};
        if (this.canUpdateGCMCategories()) {
            if (Mt.GoogleConsent.GCAdStorage !== ht) {
                var o = e.includes(Mt.GoogleConsent.GCAdStorage) ? ve.granted : ve.denied;
                t[ye.ad_storage] = o
            }
            if (Mt.GoogleConsent.GCAnalyticsStorage !== ht) {
                var n = e.includes(Mt.GoogleConsent.GCAnalyticsStorage) ? ve.granted : ve.denied;
                t[ye.analytics_storage] = n
            }
            if (Mt.GoogleConsent.GCFunctionalityStorage !== ht) {
                var r = e.includes(Mt.GoogleConsent.GCFunctionalityStorage) ? ve.granted : ve.denied;
                t[ye.functionality_storage] = r
            }
            if (Mt.GoogleConsent.GCPersonalizationStorage !== ht) {
                var i = e.includes(Mt.GoogleConsent.GCPersonalizationStorage) ? ve.granted : ve.denied;
                t[ye.personalization_storage] = i
            }
            if (Mt.GoogleConsent.GCSecurityStorage !== ht) {
                var s = e.includes(Mt.GoogleConsent.GCSecurityStorage) ? ve.granted : ve.denied;
                t[ye.security_storage] = s
            }
        }
        var a = Gt.getCookie(Ge.ALERT_BOX_CLOSED),
            l = qt.getRegionRule().Global;
        if ("function" != typeof window.gtag) {
            var c = this._window;
            window.gtag = function(e, t, o) {
                qt.otDataLayer.ignore || (c[qt.otDataLayer.name] ? c[qt.otDataLayer.name].push(arguments) : c[qt.otDataLayer.name] = [arguments])
            }
        }
        "function" == typeof window.gtag && (qt.gcmDevIdSet || (window.gtag(pe.set, "developer_id.dYWJhMj", !0), qt.gcmDevIdSet = !0), a && (l || (t[ye.region] = qt.gcmCountries), 0 !== Object.keys(t).length && window.gtag(pe.consent, ge.update, t)))
    }, Kn.prototype.canUpdateGCMCategories = function() {
        return Mt.GoogleConsent.GCAdStorage !== ht || Mt.GoogleConsent.GCAnalyticsStorage !== ht || Mt.GoogleConsent.GCFunctionalityStorage !== ht || Mt.GoogleConsent.GCPersonalizationStorage !== ht || Mt.GoogleConsent.GCSecurityStorage !== ht
    }, Kn);

    function Kn() {
        this._window = window
    }
    var Wn, Jn, Yn, Xn = "Banner",
        Qn = "Preference Center",
        $n = "API",
        Zn = "Close",
        er = "Allow All",
        tr = "Reject All",
        or = "Confirm",
        nr = "Confirm",
        rr = "Continue without Accepting",
        ir = (sr.prototype.BannerPushDownHandler = function() {
            this.checkIsBrowserIE11OrBelow() || (Yn.pushPageDown(Fn), Wt(window).on("resize", function() {
                "none" !== Wt(Fn).css("display") && Yn.pushPageDown(Fn)
            }))
        }, sr.prototype.checkIsBrowserIE11OrBelow = function() {
            var e = window.navigator.userAgent;
            return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/")
        }, sr.prototype.addOTCssPropertiesToBody = function(e, t) {
            var o = Yn.getCssData(e, t);
            jt.customerStyles.set(e, o), Yn.setStylesOnBody(t), e === Wn.PC && Yn.setStylesOnHtml(t)
        }, sr.prototype.removeAddedOTCssStyles = function(e) {
            void 0 === e && (e = Wn.Banner);
            var t = jt.customerStyles.get(e);
            t ? (Yn.setStylesOnBody(t.customerBodyCSS), Yn.setStylesOnHtml(t.customerHtmlCSS), jt.customerStyles.delete(e)) : 0 < jt.customerStyles.size && jt.customerStyles.forEach(function(e, t) {
                return Yn.removeAddedOTCssStyles(t)
            })
        }, sr.prototype.getCssData = function(e, t) {
            var o = Wt("body").el[0],
                n = Wt("html").el[0],
                r = {},
                i = {},
                s = jt.customerStyles.get(e);
            if (s) {
                var a = s.scriptBodyCSS,
                    l = s.customerBodyCSS,
                    c = s.customerHtmlCSS;
                o.style.top !== a.top && (l.top = o.style.top), o.style.position !== a.position && (l.position = o.style.position), o.style.overflow !== a.overflow && (l.overflow = o.style.overflow), n.style.overflow !== a.overflow && (c.overflow = n.style.overflow), r = l, i = c
            } else r = {
                top: o.style.top,
                position: o.style.position,
                overflow: o.style.overflow
            }, i = {
                overflow: n.style.overflow
            };
            return {
                scriptBodyCSS: t,
                customerBodyCSS: r,
                customerHtmlCSS: i
            }
        }, sr.prototype.setStylesOnBody = function(e) {
            var t = Wt("body").el[0];
            Yn.setStylesOnHtmlElement(t, e)
        }, sr.prototype.setStylesOnHtml = function(e) {
            var t = Wt("html").el[0];
            Yn.setStylesOnHtmlElement(t, {
                overflow: e.overflow
            })
        }, sr.prototype.setStylesOnHtmlElement = function(e, t) {
            for (var o = "", n = 0, r = Object.entries(t); n < r.length; n++) {
                var i = r[n],
                    s = i[0],
                    a = i[1];
                a ? o += s + ": " + a + ";" : e.style.removeProperty(s)
            }
            o && xt(e, o, !0)
        }, sr.prototype.pushPageDown = function(e) {
            var t = Wt(e).height() + "px";
            Wt(e).show().css("\n            bottom: auto;\n            position: absolute;\n            top: -" + t + ";\n        ");
            var o = jt.isPCVisible ? Wn.PC : Wn.Banner,
                n = {
                    position: "relative",
                    top: t
                };
            jt.isPCVisible && (n.overflow = "hidden"), Yn.addOTCssPropertiesToBody(o, n)
        }, sr);

    function sr() {}(Jn = Wn = Wn || {}).Banner = "Banner", Jn.PC = "PC";
    var ar, lr = (cr.prototype.showConsentNotice = function() {
        switch (!Mt.NoBanner || Mt.ForceConsent ? Wt(".onetrust-pc-dark-filter").removeClass("ot-hide") : Wt(".onetrust-pc-dark-filter").addClass("ot-hide"), Wt("#onetrust-pc-sdk").removeClass("ot-hide"), qt.pcName) {
            case lt:
                Wt("#onetrust-pc-sdk").el[0].classList.contains("ot-animated") || Wt("#onetrust-pc-sdk").addClass("ot-animated");
                var e = Mt.PreferenceCenterPosition,
                    t = Mt.useRTL,
                    o = t ? "right" : "left",
                    n = t ? "left" : "right";
                Wt("#onetrust-pc-sdk").el[0].classList.contains("ot-slide-out-" + ("right" === e ? n : o)) && Wt("#onetrust-pc-sdk").removeClass("ot-slide-out-" + ("right" === e ? n : o)), Wt("#onetrust-pc-sdk").addClass("ot-slide-in-" + ("right" === e ? n : o))
        }
        Tn.setAllowAllButton(), Pn.setPCFocus(Pn.getPCElements()), Mt.NoBanner && Mt.ScrollCloseBanner || this.pcHasScroll()
    }, cr.prototype.hideConsentNoticeV2 = function() {
        if (0 !== Wt(this.ONETRUST_PC_SDK).length) {
            if (wt.isV2Template && this.closePCText(), Mt.ForceConsent && !Jt.isCookiePolicyPage(Mt.AlertNoticeText) && !no.isAlertBoxClosedAndValid() && Mt.ShowAlertNotice ? Wt("" + this.ONETRUST_PC_DARK_FILTER).css("z-index: 2147483645;").show() : Wt("" + this.ONETRUST_PC_DARK_FILTER).fadeOut(Mt.PCLayout.Panel ? 500 : 400), Mt.PCLayout.Panel) {
                var e = Mt.PreferenceCenterPosition,
                    t = Mt.useRTL,
                    o = t ? "right" : "left",
                    n = t ? "left" : "right";
                Wt("" + this.ONETRUST_PC_SDK).removeClass("ot-slide-in-" + ("right" === e ? n : o)), Wt("" + this.ONETRUST_PC_SDK).addClass("ot-slide-out-" + ("right" === e ? n : o))
            }
            Wt("" + this.ONETRUST_PC_SDK).fadeOut(Mt.PCLayout.Panel ? 500 : 400), jt.isPCVisible = !1, jt.pcLayer = E.Banner, this.setFocus()
        } else this.setFocusOnPage()
    }, cr.prototype.setFocus = function() {
        if (jt.pcSource || no.isAlertBoxClosedAndValid()) jt.pcSource ? (jt.pcSource.focus(), jt.pcSource = null) : Mt.BInitialFocus ? Jt.resetFocusToBody() : this.setFocusOnPage();
        else {
            var e = Wt("#onetrust-banner-sdk #onetrust-pc-btn-handler").el[0];
            e && e.focus()
        }
    }, cr.prototype.setFocusOnPage = function() {
        var e = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        jt.isKeyboardUser && e.length && e[0].focus()
    }, cr.prototype.closePCText = function() {
        var e = document.querySelector("#onetrust-pc-sdk span[aria-live]"),
            t = Mt.AboutCookiesText;
        e.innerText = t + " " + Mt.pcDialogClose
    }, cr.prototype.pcHasScroll = function() {
        var e = Wt($t.P_Grp_Container).el[0] || Wt("#onetrust-pc-sdk " + $t.P_Content).el[0];
        if (e.scrollHeight > e.clientHeight) {
            this.bodyStyleChanged = !0;
            var t = Wt("body");
            t && t.length && Yn.addOTCssPropertiesToBody(Wn.PC, {
                overflow: "hidden"
            })
        }
    }, cr.prototype.checkIfPcSdkContainerExist = function() {
        return !Wt("#onetrust-pc-sdk").length
    }, cr);

    function cr() {
        this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter", this.bodyStyleChanged = !1
    }
    var dr, ur = (pr.prototype.init = function() {
        this.insertHtml(), this.insertCss(), this.showNty(), this.initHandler()
    }, pr.prototype.getContent = function() {
        return d(this, void 0, void 0, function() {
            return g(this, function(e) {
                return [2, hn.getSyncNtfyContent().then(function(e) {
                    jt.syncNtfyGrp = {
                        name: e.name,
                        html: atob(e.html),
                        css: e.css
                    }
                })]
            })
        })
    }, pr.prototype.insertHtml = function() {
        function e(e) {
            return t.querySelector(e)
        }
        this.removeHtml();
        var t = document.createDocumentFragment(),
            o = document.createElement("div");
        Wt(o).html(jt.syncNtfyGrp.html);
        var n = o.querySelector(this.El);
        Mt.BannerRelativeFontSizesToggle && Wt(n).addClass("otRelFont"), Mt.useRTL && Wt(n).attr("dir", "rtl"), Wt(t).append(n);
        var r = Mt.NtfyConfig;
        this.initHtml("Sync", r.Sync, e, t.querySelector(this.El)), r.ShowCS ? Wt(e(".ot-pc-handler")).html(r.CSTxt) : (Wt(n).addClass("ot-hide-csbtn"), e(".ot-sync-btncntr").parentElement.removeChild(e(".ot-sync-btncntr")));
        var i = document.createElement("div");
        Wt(i).append(t), Wt("#onetrust-consent-sdk").append(i.firstChild)
    }, pr.prototype.initHandler = function() {
        Wt(this.El + " .ot-sync-close-handler").on("click", function() {
            return dr.close()
        })
    }, pr.prototype.showNty = function() {
        var e = Wt(this.El);
        e.css("bottom: -300px;"), e.animate({
            bottom: "1em;"
        }, 1e3), setTimeout(function() {
            e.css("bottom: 1rem;")
        }, 1e3), e.focus()
    }, pr.prototype.changeState = function() {
        setTimeout(function() {
            dr.refreshState()
        }, 1500)
    }, pr.prototype.refreshState = function() {
        function e(e) {
            return t.querySelector(e)
        }
        var t = Wt(this.El).el[0];
        t.classList.add("ot-nty-complete"), t.classList.remove("ot-nty-sync");
        var o = Mt.NtfyConfig;
        this.initHtml("Complete", o.Complete, e, t), o.ShowCS && ("LINK" === o.CSType && Wt(e(".ot-pc-handler")).addClass("ot-pc-link"), Wt(".ot-sync-btncntr").show("inline-block"), this.alignContent(), Wt(window).on("resize", function() {
            return dr.resizeEvent
        })), setTimeout(function() {
            dr.close()
        }, 1e3 * Mt.NtfyConfig.NtfyDuration)
    }, pr.prototype.insertCss = function() {
        var e = document.getElementById("onetrust-style");
        e.innerHTML += jt.syncNtfyGrp.css, e.innerHTML += this.addCustomStyles()
    }, pr.prototype.addCustomStyles = function() {
        var e = Mt.NtfyConfig,
            t = e.Sync,
            o = e.Complete,
            n = e.CSButton,
            r = e.CSLink;
        return "\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync {\n            background-color: " + t.BgColor + ";\n            border: 1px solid " + t.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-refresh>g {\n            fill: " + t.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync #ot-sync-title {\n            text-align: " + t.TitleAlign + ";\n            color: " + t.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync .ot-sync-desc  {\n            text-align: " + t.DescAlign + ";\n            color: " + t.DescColor + "; \n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete {\n            background-color: " + o.BgColor + ";\n            border: 1px solid " + o.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-check>g {\n            fill: " + o.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete #ot-sync-title {\n            text-align: " + o.TitleAlign + ";\n            color: " + o.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete .ot-sync-desc  {\n            text-align: " + o.DescAlign + ";\n            color: " + o.DescColor + "; \n        }\n        " + ("BUTTON" === e.CSType ? "\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler {\n            background-color: " + n.BgColor + ";\n            border: 1px solid " + n.BdrColor + ";\n            color: " + n.Color + ";\n            text-align: " + n.Align + ";\n        }" : " #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler.ot-pc-link {\n            color: " + r.Color + ";\n            text-align: " + r.Align + ";\n        }") + "\n        "
    }, pr.prototype.initHtml = function(e, t, o, n) {
        var r = "Sync" === e ? ".ot-sync-refresh" : ".ot-sync-check",
            i = "Complete" === e ? ".ot-sync-refresh" : ".ot-sync-check";
        t.ShowIcon ? (Wt(o(r)).show(), Wt(o(i)).hide(), Wt(o(".ot-sync-icon")).show("inline-block"), n.classList.remove("ot-hide-icon")) : (Wt(o(".ot-sync-icon")).hide(), n.classList.add("ot-hide-icon")), t.Title ? Wt(o("#ot-sync-title")).html(t.Title) : Wt(o("#ot-sync-title")).hide(), t.Desc ? Wt(o(".ot-sync-desc")).html(t.Desc) : Wt(o(".ot-sync-desc")).hide(), t.ShowClose ? (Wt(o(".ot-sync-close-handler")).show("inline-block"), Wt(o(".ot-close-icon")).attr("aria-label", t.CloseAria), n.classList.remove("ot-hide-close")) : (Wt(o(".ot-sync-close-handler")).hide(), n.classList.add("ot-hide-close"))
    }, pr.prototype.close = function() {
        this.hideSyncNtfy(), Jt.resetFocusToBody()
    }, pr.prototype.hideSyncNtfy = function() {
        Mt.NtfyConfig.ShowCS && window.removeEventListener("resize", dr.resizeEvent), Wt("#ot-sync-ntfy").fadeOut(400)
    }, pr.prototype.removeHtml = function() {
        var e = Wt(this.El).el;
        e && Nt.removeChild(e)
    }, pr.prototype.alignContent = function() {
        Wt(".ot-sync-btncntr").el[0].clientHeight > Wt(".ot-sync-titlecntr").el[0].clientHeight && (Wt(".ot-sync-titlecntr").addClass("ot-pos-abs"), Wt(".ot-sync-btncntr").addClass("ot-pos-rel"))
    }, pr.prototype.resizeEvent = function() {
        window.innerWidth <= 896 && dr.alignContent()
    }, pr);

    function pr() {
        this.El = "#ot-sync-ntfy"
    }
    var hr, gr = (Cr.prototype.toggleVendorConsent = function(e, t) {
        void 0 === e && (e = []), void 0 === t && (t = null), e.length || (e = jt.oneTrustIABConsent.vendors), e.forEach(function(e) {
            var t = e.split(":"),
                o = t[0],
                n = t[1],
                r = Wt($t.P_Vendor_Container + " ." + $t.P_Ven_Ctgl + ' [vendorid="' + o + '"]').el[0];
            r && Nt.setCheckedAttribute("", r, "true" === n)
        });
        var o = Wt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        if (o) {
            var n = Nt.getActiveIdArray(Nt.distinctArray(e));
            null === t && (t = n.length === e.length), t || 0 === n.length ? o.parentElement.classList.remove(Zt.P_Line_Through) : o.parentElement.classList.add(Zt.P_Line_Through), Nt.setCheckedAttribute("", o, t)
        }
    }, Cr.prototype.toggleVendorLi = function(e, t) {
        void 0 === e && (e = []), void 0 === t && (t = null), e.length || (e = jt.oneTrustIABConsent.legIntVendors), e.forEach(function(e) {
            var t = e.split(":"),
                o = t[0],
                n = t[1],
                r = Wt($t.P_Vendor_Container + " ." + $t.P_Ven_Ltgl + ' [leg-vendorid="' + o + '"]').el[0];
            r && Nt.setCheckedAttribute("", r, "true" === n)
        });
        var o = Wt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        if (o) {
            var n = Nt.getActiveIdArray(Nt.distinctArray(e));
            null === t && (t = n.length === e.length), t || 0 === n.length ? o.parentElement.classList.remove(Zt.P_Line_Through) : o.parentElement.classList.add(Zt.P_Line_Through), Nt.setCheckedAttribute("", o, t)
        }
    }, Cr.prototype.updateVendorLegBtns = function(e) {
        void 0 === e && (e = []), e.length || (e = jt.oneTrustIABConsent.legIntVendors), e.forEach(function(e) {
            var t = e.split(":"),
                o = t[0],
                n = t[1],
                r = Wt($t.P_Vendor_Container + ' .ot-leg-btn-container[data-group-id="' + o + '"]').el[0];
            r && Tn.updateLegIntBtnElement(r, "true" === n)
        })
    }, Cr);

    function Cr() {}
    var yr, fr = (vr.prototype.setFilterList = function(t) {
        var o = this,
            n = Wt("#onetrust-pc-sdk " + $t.P_Fltr_Modal + " " + $t.P_Fltr_Option).el[0].cloneNode(!0);
        Wt("#onetrust-pc-sdk " + $t.P_Fltr_Modal + " " + $t.P_Fltr_Options).html(""), (wt.isV2Template || Mt.PCLayout.Popup) && Wt("#onetrust-pc-sdk #filter-cancel-handler").html(Mt.PCenterCancelFiltersText || "Cancel"), !wt.isV2Template && Mt.PCLayout.Popup || (Wt("#onetrust-pc-sdk " + $t.P_Clr_Fltr_Txt).html(Mt.PCenterClearFiltersText), Wt("#filter-btn-handler").el[0].setAttribute("aria-label", Mt.PCenterFilterText)), Wt("#onetrust-pc-sdk #filter-apply-handler").html(Mt.PCenterApplyFiltersText), t ? qt.consentableGrps.forEach(function(e) {
            (jt.cookieListType === X.GenVen || jt.cookieListType === X.HostAndGenVen ? e.Hosts.length || e.FirstPartyCookies.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length : e.Hosts.length || e.FirstPartyCookies.length) && o.filterGroupOptionSetter(n, e, t)
        }) : qt.iabGrps.forEach(function(e) {
            o.filterGroupOptionSetter(n, e, t)
        })
    }, vr.prototype.setFilterListByGroup = function(e, t) {
        var o = this;
        if (!e || e.length <= 0) Wt("#onetrust-pc-sdk " + $t.P_Fltr_Modal + " " + $t.P_Fltr_Options).html("");
        else {
            var n = Wt("#onetrust-pc-sdk " + $t.P_Fltr_Modal + " " + $t.P_Fltr_Option).el[0].cloneNode(!0);
            Wt("#onetrust-pc-sdk " + $t.P_Fltr_Modal + " " + $t.P_Fltr_Options).html(""), (wt.isV2Template || Mt.PCLayout.Popup) && Wt("#onetrust-pc-sdk #filter-cancel-handler").html(Mt.PCenterCancelFiltersText || "Cancel"), !wt.isV2Template && Mt.PCLayout.Popup || (Wt("#onetrust-pc-sdk " + $t.P_Clr_Fltr_Txt).html(Mt.PCenterClearFiltersText), Wt("#filter-btn-handler").el[0].setAttribute("aria-label", Mt.PCenterFilterText)), Wt("#onetrust-pc-sdk #filter-apply-handler").html(Mt.PCenterApplyFiltersText), e.forEach(function(e) {
                o.filterGroupOptionSetter(n, e, t)
            })
        }
    }, vr.prototype.filterGroupOptionSetter = function(e, t, o) {
        var n = t.CustomGroupId,
            r = n + "-filter",
            i = e.cloneNode(!0);
        Wt($t.P_Fltr_Modal + " " + $t.P_Fltr_Options).append(i), Wt(i.querySelector("input")).attr("id", r), Wt(i.querySelector("label")).attr("for", r), wt.isV2Template ? Wt(i.querySelector($t.P_Label_Txt)).html(t.GroupName) : Wt(i.querySelector("label span")).html(t.GroupName), Wt(i.querySelector("input")).attr(o ? "data-optanongroupid" : "data-purposeid", n)
    }, vr);

    function vr() {
        this.bodyScrollProp = "", this.htmlScrollProp = "", this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter"
    }
    var kr, mr = (br.prototype.initialiseCssReferences = function() {
        var e, t = "";
        document.getElementById("onetrust-style") ? e = document.getElementById("onetrust-style") : ((e = document.createElement("style")).id = "onetrust-style", wt.moduleInitializer.CookieV2CSPEnabled && jt.nonce && e.setAttribute("nonce", jt.nonce)), yn.commonStyles && (t += yn.commonStyles), yn.bannerGroup && (t += yn.bannerGroup.css, wt.fp.CookieV2SSR || (t += this.addCustomBannerCSS()), Mt.bannerCustomCSS && (t += Mt.bannerCustomCSS)), yn.preferenceCenterGroup && (t += yn.preferenceCenterGroup.css, t += this.addCustomPreferenceCenterCSS()), yn.cookieListGroup && !wt.fp.CookieV2TrackingTechnologies && (t += yn.cookieListGroup.css, t += this.addCustomCookieListCSS()), Mt.cookiePersistentLogo && !Mt.cookiePersistentLogo.includes("ot_guard_logo.svg") && (t += ".ot-floating-button__front{background-image:url('" + Mt.cookiePersistentLogo + "')}"), this.processedCSS = t, qt.ignoreInjectingHtmlCss || (e.textContent = t, Wt(document.head).append(e))
    }, br);

    function br() {
        this.processedCSS = "", this.addCustomBannerCSS = function() {
            var e = Mt.backgroundColor,
                t = Mt.buttonColor,
                o = Mt.textColor,
                n = Mt.buttonTextColor,
                r = Mt.bannerMPButtonColor,
                i = Mt.bannerMPButtonTextColor,
                s = Mt.bannerAccordionBackgroundColor,
                a = Mt.BSaveBtnColor,
                l = Mt.BCategoryContainerColor,
                c = Mt.BLineBreakColor,
                d = Mt.BCategoryStyleColor,
                u = Mt.bannerLinksTextColor,
                p = Mt.BFocusBorderColor,
                h = "\n        " + (qt.bannerName === tt ? e ? "#onetrust-consent-sdk #onetrust-banner-sdk .ot-sdk-container {\n                    background-color: " + e + ";}" : "" : e ? "#onetrust-consent-sdk #onetrust-banner-sdk {background-color: " + e + ";}" : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-policy-title,\n                    #onetrust-consent-sdk #onetrust-policy-text,\n                    #onetrust-consent-sdk .ot-b-addl-desc,\n                    #onetrust-consent-sdk .ot-dpd-desc,\n                    #onetrust-consent-sdk .ot-dpd-title,\n                    #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,\n                    #onetrust-banner-sdk .ot-cat-header {\n                        color: " + o + ";\n                    }" : "") + "\n            " + (s ? "#onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {\n                    background-color: " + s + ";}" : "") + "\n            " + (u ? " #onetrust-consent-sdk #onetrust-banner-sdk a[href],\n                    #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,\n                    #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn\n                        {\n                            color: " + u + ";\n                        }" : "");
            if ((t || n) && (h += "#onetrust-consent-sdk #onetrust-accept-btn-handler,\n                         #onetrust-banner-sdk #onetrust-reject-all-handler {\n                            " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (n ? "color: " + n + ";" : "") + "\n            }"), p && (h += "\n            #onetrust-consent-sdk #onetrust-banner-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-banner-sdk:focus {\n               outline-color: " + p + ";\n               outline-width: 1px;\n            }"), (i || r) && (h += "\n            #onetrust-consent-sdk #onetrust-pc-btn-handler,\n            #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {\n                " + (i ? "color: " + i + "; border-color: " + i + ";" : "") + "\n                background-color:\n                " + (r && !Mt.BannerSettingsButtonDisplayLink ? r : e) + ";\n            }"), qt.bannerName === rt) {
                var g = void 0,
                    C = void 0,
                    y = void 0,
                    f = void 0,
                    v = void 0;
                a && (g = "color: " + n + ";border-color: " + n + ";background-color: " + a + ";"), l && (C = "background-color: " + l + ";"), c && (y = "border-color: " + c + ";"), d && (f = "background-color: " + d + ";", v = "border-color: " + d + ";"), p && (h += "\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-tgl input:focus+.ot-switch .ot-switch-nob,\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-chkbox input:focus + label::before {\n                    outline-color: " + p + ";\n                    outline-width: 1px;\n                }"), h += "#onetrust-banner-sdk .ot-bnr-save-handler {" + g + "}#onetrust-banner-sdk .ot-cat-lst {" + C + "}#onetrust-banner-sdk .ot-cat-bdr {" + y + "}#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob:before,#onetrust-banner-sdk .ot-chkbox input:checked~label::before {" + f + "}#onetrust-banner-sdk .ot-chkbox label::before,#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob {" + v + "}#onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {background: inherit}"
            }
            return Mt.BCloseButtonType === de.Link && (h += "#onetrust-banner-sdk.ot-close-btn-link .banner-close-button {color: " + Mt.BContinueColor + "}"), h
        }, this.addCustomPreferenceCenterCSS = function() {
            var e = Mt.pcBackgroundColor,
                t = Mt.pcButtonColor,
                o = Mt.pcTextColor,
                n = Mt.pcButtonTextColor,
                r = Mt.pcLinksTextColor,
                i = Mt.PCenterEnableAccordion,
                s = Mt.pcAccordionBackgroundColor,
                a = Mt.pcMenuColor,
                l = Mt.pcMenuHighLightColor,
                c = Mt.pcLegIntButtonColor,
                d = Mt.pcLegIntButtonTextColor,
                u = Mt.PCFocusBorderColor,
                p = "\n            " + (e ? (qt.pcName === at ? "#onetrust-consent-sdk #onetrust-pc-sdk .group-parent-container,\n                        #onetrust-consent-sdk #onetrust-pc-sdk .manage-pc-container,\n                        #onetrust-pc-sdk " + $t.P_Vendor_List : "#onetrust-consent-sdk #onetrust-pc-sdk") + ",\n                #onetrust-consent-sdk " + $t.P_Search_Cntr + ",\n                " + (i && qt.pcName === at ? "#onetrust-consent-sdk #onetrust-pc-sdk .ot-accordion-layout" + $t.P_Category_Item : "#onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle") + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Tab_Grp_Hdr + " .checkbox,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Title + ":after\n                " + (wt.isV2Template ? ",#onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,\n                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,\n                        #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Triangle : "") + " {\n                    background-color: " + e + ";\n                }\n               " : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-pc-sdk h3,\n                #onetrust-consent-sdk #onetrust-pc-sdk h4,\n                #onetrust-consent-sdk #onetrust-pc-sdk h5,\n                #onetrust-consent-sdk #onetrust-pc-sdk h6,\n                #onetrust-consent-sdk #onetrust-pc-sdk p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Vendor_Container + " " + $t.P_Ven_Opts + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Policy_Txt + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Li_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Leg_Select_All + " span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Host_Cntr + " " + $t.P_Host_Info + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Fltr_Modal + " #modal-header,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Vendor_List + " " + $t.P_Select_Cntr + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Vendor_List + " " + $t.P_Vendor_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Vendor_List + " .back-btn-handler p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Vendor_List + " " + $t.P_Ven_Name + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Vendor_List + " " + $t.P_Vendor_Container + " .consent-category,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler\n                {\n                    color: " + o + ";\n                }" : "") + "\n            " + (r ? " #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Ven_Link + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Host_Cntr + " " + $t.P_Host_Title + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Host_Cntr + " " + $t.P_Acc_Header + " " + $t.P_Host_View_Cookies + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Host_Cntr + " " + $t.P_Host_Info + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Content + " " + $t.P_Policy_Txt + " .ot-link-btn,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info a\n                    {\n                        color: " + r + ";\n                    }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover { text-decoration: underline;}\n            " + (i && s ? "#onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Acc_Container + $t.P_Acc_Txt + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Acc_Txt + " " + $t.P_Subgrp_Tgl_Cntr + " .ot-switch.ot-toggle\n             {\n                background-color: " + s + ";\n            }" : "") + "\n            " + (s ? " #onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Host_Cntr + " " + $t.P_Host_Info + ",\n                    " + (wt.isV2Template ? "#onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Acc_Txt + " .ot-ven-dets" : "#onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Acc_Txt + " " + $t.P_Ven_Opts) + "\n                            {\n                                background-color: " + s + ";\n                            }" : "") + "\n        ";
            return (t || n) && (p += "#onetrust-consent-sdk #onetrust-pc-sdk\n            button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {\n                " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (n ? "color: " + n + ";" : "") + "\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk ." + $t.P_Active_Menu + " {\n                " + (t ? "border-color: " + t + ";" : "") + "\n            }\n            " + (qt.pcName === at ? "#onetrust-consent-sdk #onetrust-pc-sdk " + $t.P_Category_Item + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk.ot-leg-opt-out " + $t.P_Li_Hdr + "{\n                border-color: " + t + ";\n            }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler{\n                background-color: transparent;\n                border: 1px solid transparent;\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {\n                " + (c ? "background-color: " + c + ";" : "") + "\n                " + (d ? "color: " + d + "; border-color: " + d + ";" : "") + "\n            }\n            "), u && (p += '\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-tgl input:focus + .ot-switch, .ot-switch .ot-switch-nob, .ot-switch .ot-switch-nob:before,\n            #onetrust-pc-sdk .ot-checkbox input[type="checkbox"]:focus + label::before,\n            #onetrust-pc-sdk .ot-chkbox input[type="checkbox"]:focus + label::before {\n                outline-color: ' + u + ";\n                outline-width: 1px;\n            }\n            #onetrust-pc-sdk .ot-host-item > button:focus, #onetrust-pc-sdk .ot-ven-item > button:focus {\n                border: 1px solid " + u + ";\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-vlst-cntr > a:focus {\n               outline: 1px solid " + u + ";\n            }"), Mt.PCCloseButtonType === de.Link && (p += "#onetrust-pc-sdk.ot-close-btn-link .ot-close-icon {color: " + Mt.PCContinueColor + "}"), qt.pcName === dt && (a && (p += "#onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {\n                    background-color: " + a + "\n                }"), l && (p += "#onetrust-consent-sdk #onetrust-pc-sdk ." + $t.P_Active_Menu + " {\n                    background-color: " + l + "\n                }")), !Mt.PCTemplateUpgrade && u && (p += '\n            #onetrust-pc-sdk input[type="checkbox"]:focus + .accordion-header,\n            #onetrust-pc-sdk .category-item .ot-switch.ot-toggle input:focus + .ot-switch-label,\n            #onetrust-pc-sdk .checkbox input:focus + label::after {\n                outline-color: ' + u + ";\n                outline-width: 1px;\n            }"), Mt.pcCustomCSS && (p += Mt.pcCustomCSS), p
        }, this.addCustomCookieListCSS = function() {
            var e = Mt.CookiesV2NewCookiePolicy ? "-v2.ot-sdk-cookie-policy" : "",
                t = "\n                " + (Mt.cookieListPrimaryColor ? "\n                    #ot-sdk-cookie-policy" + e + " h5,\n                    #ot-sdk-cookie-policy" + e + " h6,\n                    #ot-sdk-cookie-policy" + e + " li,\n                    #ot-sdk-cookie-policy" + e + " p,\n                    #ot-sdk-cookie-policy" + e + " a,\n                    #ot-sdk-cookie-policy" + e + " span,\n                    #ot-sdk-cookie-policy" + e + " td,\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-description {\n                        color: " + Mt.cookieListPrimaryColor + ";\n                    }" : "") + "\n                    " + (Mt.cookieListTableHeaderColor ? "#ot-sdk-cookie-policy" + e + " th {\n                        color: " + Mt.cookieListTableHeaderColor + ";\n                    }" : "") + "\n                    " + (Mt.cookieListGroupNameColor ? "#ot-sdk-cookie-policy" + e + " .ot-sdk-cookie-policy-group {\n                        color: " + Mt.cookieListGroupNameColor + ";\n                    }" : "") + "\n                    " + (Mt.cookieListTitleColor ? "\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-title {\n                            color: " + Mt.cookieListTitleColor + ";\n                        }\n                    " : "") + "\n            " + (e && Mt.CookieListTableHeaderBackgroundColor ? "\n                    #ot-sdk-cookie-policy" + e + " table th {\n                            background-color: " + Mt.CookieListTableHeaderBackgroundColor + ";\n                        }\n                    " : "") + "\n            ";
            return Mt.cookieListCustomCss && (t += Mt.cookieListCustomCss), t
        }
    }
    var Pr, Sr = (Ar.prototype.showBanner = function() {
        var e = qt.bannerName,
            t = Wt(this.El);
        jt.skipAddingHTML && "none" === getComputedStyle(t.el[0]).getPropertyValue("display") && e !== et && e !== Ze && e !== nt ? t.css("display: block;") : Mt.BAnimation === le.SlideIn ? this.slideInAnimation(t, e) : Mt.BAnimation === le.FadeIn && t.addClass("ot-fade-in")
    }, Ar.prototype.insertAlertHtml = function() {
        function e(e) {
            return r.querySelector(e)
        }

        function t(e) {
            return r.querySelectorAll(e)
        }
        var o = this,
            n = Mt.BannerPurposeTitle || Mt.BannerPurposeDescription || Mt.BannerFeatureTitle || Mt.BannerFeatureDescription || Mt.BannerInformationTitle || Mt.BannerInformationDescription,
            r = document.createDocumentFragment(),
            i = qt.bannerName,
            s = document.createElement("div");
        Wt(s).html(yn.bannerGroup.html);
        var a = s.querySelector("#onetrust-banner-sdk");
        if (this.setAriaModalForBanner(a), wt.fp.CookieV2SSR) Wt(r).append(a), this._rejectBtn = e("#onetrust-reject-all-handler"), this._acceptBtn = e("#onetrust-accept-btn-handler");
        else {
            var l = [{
                type: "purpose",
                titleKey: "BannerPurposeTitle",
                descriptionKey: "BannerPurposeDescription",
                identifier: "purpose-option"
            }, {
                type: "feature",
                titleKey: "BannerFeatureTitle",
                descriptionKey: "BannerFeatureDescription",
                identifier: "feature-option"
            }, {
                type: "information",
                titleKey: "BannerInformationTitle",
                descriptionKey: "BannerInformationDescription",
                identifier: "information-option"
            }];
            if (yn.bannerGroup) {
                Mt.BannerRelativeFontSizesToggle && Wt(a).addClass("otRelFont"), (Mt.BInitialFocus || Mt.BInitialFocusLinkAndButton) && a.setAttribute("tabindex", "0"), Mt.useRTL && Wt(a).attr("dir", "rtl"), "IAB2" === qt.iabType && Mt.BannerDPDDescription.length && Wt(a).addClass("ot-iab-2");
                var c = Mt.BannerPosition;
                if (c && ("bottom-left" === c ? Wt(a).addClass("ot-bottom-left") : "bottom-right" === c ? Wt(a).addClass("ot-bottom-right") : Wt(a).addClass(c)), Wt(r).append(a), Mt.BannerTitle ? (Wt(e("#onetrust-policy-title")).html(Mt.BannerTitle), Wt(e('[role="alertdialog"]')).attr("aria-label", Mt.BannerTitle)) : (Nt.removeChild(e("#onetrust-policy-title")), Wt(e("#onetrust-banner-sdk")).addClass("ot-wo-title"), Wt(e('[role="alertdialog"]')).attr("aria-label", Mt.AriaPrivacy)), !Mt.IsIabEnabled && jt.showGeneralVendors && Mt.BannerNonIABVendorListText) {
                    var d = document.createElement("div");
                    d.setAttribute("id", "ot-gv-link-ctnr"), Wt(d).html('<button class="ot-link-btn ot-gv-list-handler">' + Mt.BannerNonIABVendorListText + "</button>"), Wt(e("#onetrust-policy")).el.appendChild(d)
                }
                Wt(e("#onetrust-policy-text")).html(Mt.AlertNoticeText), Mt.BShowPolicyLink && Mt.BShowImprintLink && Wt(e("#onetrust-policy-text a")).length ? (Wt(e("#onetrust-policy-text a:first-child")).attr("aria-label", Mt.BCookiePolicyLinkScreenReader), Wt(e("#onetrust-policy-text a:last-child")).attr("aria-label", Mt.BImprintLinkScreenReader)) : Mt.BShowPolicyLink && Wt(e("#onetrust-policy-text a")).length ? Wt(e("#onetrust-policy-text a")).attr("aria-label", Mt.BCookiePolicyLinkScreenReader) : Mt.BShowImprintLink && Wt(e("#onetrust-policy-text a")).length && Wt(e("#onetrust-policy-text a")).attr("aria-label", Mt.BImprintLinkScreenReader), "IAB2" === Mt.IabType && Mt.BannerDPDDescription.length && i !== rt ? (Wt(e(".ot-dpd-container .ot-dpd-title")).html(Mt.BannerDPDTitle), Wt(e(".ot-dpd-container .ot-dpd-desc")).html(Mt.BannerDPDDescription.join(",&nbsp;"))) : Nt.removeChild(e(".ot-dpd-container"));
                var u = Wt(e("#onetrust-group-container"));
                "IAB2" === qt.iabType && Mt.BannerAdditionalDescription.trim() && this.setAdditionalDesc(e);
                var p = "IAB2" === Mt.IabType && Mt.BannerDPDDescription.length ? i !== rt ? Wt(e(".ot-dpd-container .ot-dpd-desc")) : u : Wt(e("#onetrust-policy-text"));
                Mt.IsIabEnabled && Mt.BannerIABPartnersLink && p.append('<button class="ot-link-btn onetrust-vendors-list-handler">\n                ' + Mt.BannerIABPartnersLink + "\n                </button>"), Mt.showBannerAcceptButton ? (this._acceptBtn = e("#onetrust-accept-btn-handler"), Wt(this._acceptBtn).html(Mt.AlertAllowCookiesText), i !== nt || Mt.showBannerCookieSettings || Mt.BannerShowRejectAllButton || Wt(this._acceptBtn.parentElement).addClass("accept-btn-only")) : Nt.removeChild(e("#onetrust-accept-btn-handler")), Mt.BannerShowRejectAllButton && Mt.BannerRejectAllButtonText.trim() ? (this._rejectBtn = e("#onetrust-reject-all-handler"), Wt(this._rejectBtn).html(Mt.BannerRejectAllButtonText), e("#onetrust-button-group-parent").classList.add("has-reject-all-button")) : (Nt.removeChild(e("#onetrust-reject-all-handler")), Nt.removeChild(e("#onetrust-reject-btn-container")));
                var h = Wt(e("#onetrust-pc-btn-handler"));
                Mt.showBannerCookieSettings ? (h.html(Mt.AlertMoreInfoText), Mt.BannerSettingsButtonDisplayLink && h.addClass("cookie-setting-link"), i !== nt || Mt.showBannerAcceptButton || h.addClass("cookie-settings-btn-only")) : Nt.removeChild(h.el);
                var g = !Mt.showBannerAcceptButton && !Mt.showBannerCookieSettings && !Mt.BannerShowRejectAllButton;
                g && e("#onetrust-button-group-parent").parentElement.removeChild(e("#onetrust-button-group-parent"));
                var C = Mt.showBannerCloseButton,
                    y = Wt(t(".banner-close-button")).el,
                    f = e("#onetrust-button-group"),
                    v = Mt.BCloseButtonType === de.Link;
                if (C)
                    for (k = 0; k < y.length; k++) v ? (Wt(y[k]).html(Mt.BContinueText), Wt(a).addClass("ot-close-btn-link"), Wt(y[k]).addClass("ot-close-link"), Wt(y[k]).removeClass("onetrust-close-btn-ui"), Wt(y[k]).removeClass("ot-close-icon"), i !== tt && i !== ot || (f.insertAdjacentElement("afterbegin", e(".onetrust-close-btn-handler").parentElement), Wt(y[k]).attr("tabindex", "1"))) : Wt(y[k]).el.setAttribute("aria-label", Mt.BannerCloseButtonText || "Close Cookie Banner");
                else {
                    for (var k = 0; k < y.length; k++) Wt(y[k].parentElement).el.removeChild(y[k]);
                    i !== Ze && i !== ot || Nt.removeChild(e("#onetrust-close-btn-container-mobile"))
                }
                if (i === Ze && ("IAB2" === qt.iabType && (u.removeClass("ot-sdk-eight"), Mt.showBannerAcceptButton && f.insertAdjacentElement("afterbegin", this._acceptBtn), Mt.showBannerCookieSettings && f.insertAdjacentElement("beforeend", e("#onetrust-pc-btn-handler"))), C && !g && "IAB2" === qt.iabType ? u.addClass("ot-sdk-nine") : C && g ? u.addClass("ot-sdk-eleven") : !C && g ? u.addClass("ot-sdk-twelve") : C || g || "IAB2" !== qt.iabType || (u.addClass("ot-sdk-ten"), Wt(e("#onetrust-button-group-parent")).addClass("ot-sdk-two"), Wt(e("#onetrust-button-group-parent")).removeClass("ot-sdk-three"))), C && i === tt && "IAB2" === qt.iabType && !v) {
                    var m = e(".banner-close-btn-container");
                    m.parentElement.removeChild(m), Wt(a).el.insertAdjacentElement("beforeEnd", m), Wt(e("#onetrust-banner-sdk .ot-sdk-container")).addClass("ot-top-cntr")
                }
                var b = Wt(e("#banner-options")).el;
                n ? (i === ot ? this.setFloatingRoundedIconBannerCmpOptions(e, l) : (this.setCmpBannerOptions(e, l), i === rt && u.el.insertAdjacentElement("beforeend", b)), Wt(window).on("resize", function() {
                    window.innerWidth <= 896 && o.setBannerOptionContent()
                })) : (qt.bannerName === tt && (b = Wt(e(".banner-options-card")).el), Nt.removeChild(b)), this.setBannerLogo(a, e)
            }
        }
        qt.bannerName === rt && wt.moduleInitializer.IsSuppressPC && (jt.dataGroupState = Mt.Groups.filter(function(e) {
            return e.Order
        })), qt.bannerName === rt && (this._fourBtns = Mt.BannerShowRejectAllButton && Mt.showBannerAcceptButton && Mt.showBannerCookieSettings && Mt.BShowSaveBtn, this._saveBtn = e(".ot-bnr-save-handler"), this._settingsBtn = e("#onetrust-pc-btn-handler"), this._btnsCntr = e(".banner-actions-container"), Mt.BShowSaveBtn ? Wt(this._saveBtn).html(Mt.BSaveBtnTxt) : (Nt.removeChild(this._saveBtn), this._saveBtn = null), Jt.insertFooterLogo(t(".ot-bnr-footer-logo a")), this._descriptCntr = e(".ot-cat-lst"), this.setBannerBtn(), window.addEventListener("resize", function() {
            o.setBannerBtn()
        }), this._fourBtns && Wt(e("#onetrust-banner-sdk")).addClass("has-reject-all-button"), this.insertGrps(e));
        var P = document.createElement("div");
        Wt(P).append(r), qt.ignoreInjectingHtmlCss || (Wt("#onetrust-consent-sdk").append(P.firstChild), n && this.setBannerOptionContent()), this.setBnrBtnGrpAlignment()
    }, Ar.prototype.setAriaModalForBanner = function(e) {
        Mt.ForceConsent && e.querySelector('[role="alertdialog"]').setAttribute("aria-modal", "true")
    }, Ar.prototype.setBnrBtnGrpAlignment = function() {
        var e = Wt("#onetrust-group-container").el,
            t = Wt("#onetrust-button-group-parent").el;
        (e.length && e[0].clientHeight) < (t.length && t[0].clientHeight) ? Wt("#onetrust-banner-sdk").removeClass("vertical-align-content"): Wt("#onetrust-banner-sdk").addClass("vertical-align-content");
        var o = document.querySelector("#onetrust-button-group-parent button:first-of-type"),
            n = document.querySelector("#onetrust-button-group-parent button:last-of-type");
        n && o && 1 < Math.abs(n.offsetTop - o.offsetTop) && Wt("#onetrust-banner-sdk").addClass("ot-buttons-fw")
    }, Ar.prototype.slideInAnimation = function(e, t) {
        t === Ze ? "bottom" === Mt.BannerPosition ? (e.css("bottom: -99px;"), e.animate({
            bottom: "0px"
        }, 1e3), jt.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("bottom: 0px;"), jt.bnrAnimationInProg = !1
        }, 1e3)) : (e.css("top: -99px; bottom: auto;"), qt.pagePushedDown && !Yn.checkIsBrowserIE11OrBelow() ? Yn.BannerPushDownHandler() : (e.animate({
            top: "0"
        }, 1e3), jt.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("top: 0px; bottom: auto;"), jt.bnrAnimationInProg = !1
        }, 1e3))) : t !== et && t !== nt || (e.css("bottom: -300px;"), e.animate({
            bottom: "1em"
        }, 2e3), jt.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("bottom: 1rem;"), jt.bnrAnimationInProg = !1
        }, 2e3))
    }, Ar.prototype.setBannerBtn = function() {
        window.innerWidth <= 600 ? (Nt.insertElement(this._btnsCntr, this._settingsBtn, "afterbegin"), Nt.insertElement(this._btnsCntr, this._saveBtn, "afterbegin"), Nt.insertElement(this._btnsCntr, this._acceptBtn, "afterbegin"), Nt.insertElement(this._btnsCntr, this._rejectBtn, "afterbegin")) : this._fourBtns ? (this._descriptCntr.insertAdjacentElement("beforeend", this._settingsBtn), this._acceptBtn.insertAdjacentElement("beforebegin", this._rejectBtn), this._btnsCntr.insertAdjacentElement("beforebegin", this._saveBtn)) : (Nt.insertElement(this._btnsCntr, this._settingsBtn, "beforebegin"), Nt.insertElement(this._btnsCntr, this._saveBtn, this._settingsBtn ? "afterbegin" : "beforebegin"), Nt.insertElement(this._btnsCntr, this._rejectBtn, "beforeend"), Nt.insertElement(this._btnsCntr, this._acceptBtn, "beforeend"))
    }, Ar.prototype.setCmpBannerOptions = function(i, e) {
        var s = Wt(i("#banner-options .banner-option")).el.cloneNode(!0);
        Wt(i("#banner-options")).html("");
        var a = 1;
        e.forEach(function(e) {
            var t = s.cloneNode(!0),
                o = Mt[e.titleKey],
                n = Mt[e.descriptionKey];
            if (o || n) {
                t.querySelector(".banner-option-header :first-child").innerHTML = o;
                var r = t.querySelector(".banner-option-details");
                n ? (r.setAttribute("id", "option-details-" + a++), r.innerHTML = n) : r.parentElement.removeChild(r), Wt(i("#banner-options")).el.appendChild(t)
            }
        })
    }, Ar.prototype.setFloatingRoundedIconBannerCmpOptions = function(r, e) {
        var i = Wt(r("#banner-options button")).el.cloneNode(!0),
            n = Wt(r(".banner-option-details")).el.cloneNode(!0);
        Wt(r("#banner-options")).html(""), e.forEach(function(e) {
            var t = i.cloneNode(!0),
                o = Mt[e.titleKey],
                n = Mt[e.descriptionKey];
            (o || n) && (t.setAttribute("id", e.identifier), t.querySelector(".banner-option-header :first-child").innerHTML = o, Wt(r("#banner-options")).el.appendChild(t))
        }), e.forEach(function(e) {
            var t = Mt[e.descriptionKey];
            if (t) {
                var o = n.cloneNode(!0);
                o.innerHTML = t, o.classList.add(e.identifier), Wt(r("#banner-options")).el.appendChild(o)
            }
        })
    }, Ar.prototype.setBannerOptionContent = function() {
        qt.bannerName !== Ze && qt.bannerName !== ot || setTimeout(function() {
            if (window.innerWidth < 769) {
                var e = Wt("#banner-options").el[0];
                Wt("#onetrust-group-container").el[0].appendChild(e)
            } else e = Wt("#banner-options").el[0], qt.bannerName === ot ? Wt(".banner-content").el[0].appendChild(e) : Wt("#onetrust-banner-sdk .ot-sdk-container").el[0].appendChild(e)
        })
    }, Ar.prototype.setAdditionalDesc = function(e) {
        var t = Mt.BannerAdditionalDescPlacement,
            o = document.createElement("span");
        o.classList.add("ot-b-addl-desc"), o.innerHTML = Mt.BannerAdditionalDescription;
        var n = e("#onetrust-policy-text");
        if (t === O.AfterTitle) n.insertAdjacentElement("beforeBegin", o);
        else if (t === O.AfterDescription) n.insertAdjacentElement("afterEnd", o);
        else if (t === O.AfterDPD) {
            var r = e(".ot-dpd-container .ot-dpd-desc");
            Mt.ChoicesBanner && (r = e("#onetrust-group-container")), r.insertAdjacentElement("beforeEnd", o)
        }
    }, Ar.prototype.insertGrps = function(e) {
        var p = e(".ot-cat-item").cloneNode(!0);
        Nt.removeChild(e(".ot-cat-item")), Mt.BCategoryStyle === se.Checkbox ? Nt.removeChild(p.querySelector(".ot-tgl")) : (Nt.removeChild(p.querySelector(".ot-chkbox")), Wt(p).addClass("ot-cat-bdr"));
        var h = e(".ot-cat-lst ul");
        Mt.Groups.forEach(function(e) {
            var t = p.cloneNode(!0),
                o = t.querySelector(".ot-tgl,.ot-chkbox"),
                n = e.GroupName,
                r = e.CustomGroupId,
                i = "ot-bnr-grp-id-" + r,
                s = "ot-bnr-hdr-id-" + r,
                a = -1 !== Et.indexOf(e.Type),
                l = io.getGrpStatus(e).toLowerCase() === qe || a,
                c = Tn.isGroupActive(e) || a;
            Wt(o.querySelector("label")).attr("for", i), Wt(o.querySelector(".ot-label-txt")).html(e.GroupName);
            var d = o.querySelector("input");
            l && (Mt.BCategoryStyle === se.Toggle ? (Nt.removeChild(o), t.insertAdjacentElement("beforeend", Wt("<div class='ot-always-active'>" + Mt.AlwaysActiveText + "</div>", "ce").el)) : Wt(d).attr("disabled", !0)), d.classList.add("category-switch-handler"), Tn.setInputID(d, i, r, c, s);
            var u = t.querySelector("h4");
            Wt(u).html(n), Wt(u).attr("id", s), Wt(h).append(t)
        })
    }, Ar.prototype.setBannerLogo = function(e, t) {
        if (wt.fp.CookieV2BannerLogo && Mt.BnrLogo) {
            var o = t(Rn),
                n = "afterend";
            qt.bannerName === ot && (o = t("#onetrust-cookie-btn"), n = "beforeend"), Wt(e).addClass("ot-bnr-w-logo"), Wt(o).el.innerHTML = "", o.insertAdjacentHTML(n, "<img class='ot-bnr-logo' src='" + Mt.BnrLogo + "'\n            title='" + Mt.BnrLogoAria + "'\n            alt='" + Mt.BnrLogoAria + "'/>")
        }
    }, Ar);

    function Ar() {
        this.El = "#onetrust-banner-sdk", this._saveBtn = null, this._settingsBtn = null, this._acceptBtn = null, this._rejectBtn = null, this._descriptCntr = null, this._btnsCntr = null, this._fourBtns = !1
    }
    var Tr, Ir = (Lr.prototype.setHeaderConfig = function() {
        Tr.setHeader(), Tr.setSearchInput(), Tr.setHeaderUIConsent();
        var e = Tr.getGroupsForFilter();
        yr.setFilterListByGroup(e, !1)
    }, Lr.prototype.filterVendorByString = function(e) {
        Tr.searchQuery = e, Tr.filterVendorByGroupOrQuery()
    }, Lr.prototype.filterVendorByGroup = function(e) {
        Tr.filterGroups = e, Tr.filterVendorByGroupOrQuery()
    }, Lr.prototype.showVSList = function() {
        Tr.removeListeners(), Tr.showEmptyResults(!1, ""), Tr.clearUIElementsInMain(), Tr.addVSList(jt.getVendorsInDomain())
    }, Lr.prototype.showEmptyResults = function(e, t) {
        if (e) this.setNoResultsContent(t);
        else {
            Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content).removeClass("no-results");
            var o = Wt("#onetrust-pc-sdk #no-results");
            o.length && o.remove()
        }
    }, Lr.prototype.setNoResultsContent = function(e) {
        var t = Wt("#onetrust-pc-sdk #no-results").el[0];
        if (!t) {
            var o = document.createElement("div"),
                n = document.createElement("p"),
                r = document.createTextNode(" did not match any vendors."),
                i = document.createElement("span");
            return o.id = "no-results", i.id = "user-text", i.innerText = e, n.appendChild(i), n.appendChild(r), o.appendChild(n), Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content).addClass("no-results"), Wt("#vendor-search-handler").el[0].setAttribute("aria-describedby", o.id), Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content).append(o)
        }
        t.querySelector("span").innerText = e
    }, Lr.prototype.getGroupsFilter = function() {
        for (var e = [], t = 0, o = Wt("#onetrust-pc-sdk .category-filter-handler").el; t < o.length; t++) {
            var n = o[t],
                r = n.getAttribute("data-purposeid");
            n.checked && e.push(r)
        }
        return e
    }, Lr.prototype.cancelFilter = function() {
        for (var e = 0, t = Wt("#onetrust-pc-sdk .category-filter-handler").el; e < t.length; e++) {
            var o = t[e],
                n = o.getAttribute("data-optanongroupid"),
                r = 0 <= jt.filterByCategories.indexOf(n);
            Nt.setCheckedAttribute(null, o, r)
        }
        var i = Tr.getGroupsFilter();
        Tr.filterVendorByGroup(i)
    }, Lr.prototype.clearFilter = function() {
        Tr.searchQuery = "", Tr.filterGroups = []
    }, Lr.prototype.toggleVendors = function(r) {
        jt.getVendorsInDomain().forEach(function(e, t) {
            if (!io.isAlwaysActiveGroup(e.groupRef)) {
                var o = document.getElementById("ot-vendor-id-" + t),
                    n = document.getElementById("ot-vs-lst-id-" + t);
                Gn.toggleVendorService(e.groupRef.CustomGroupId, t, r, o), Gn.toggleVendorService(e.groupRef.CustomGroupId, t, r, n)
            }
        })
    }, Lr.prototype.hideVendorList = function() {
        Tr.removeListeners(), Tr.clearUIElementsInMain()
    }, Lr.prototype.addListeners = function() {
        Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content + " .ot-vs-list .category-switch-handler").on("click", Tr.toggleVendorHandler), Wt("#onetrust-pc-sdk").on("click", ".ot-vs-list", _r.onCategoryItemToggle.bind(this))
    }, Lr.prototype.removeListeners = function() {
        document.querySelectorAll("#onetrust-pc-sdk .ot-vs-list .category-switch-handler").forEach(function(e) {
            return e.removeEventListener("click", _r.toggleGroupORVendorHandler)
        });
        var e = document.querySelector("#onetrust-pc-sdk .ot-vs-list");
        null != e && e.removeEventListener("click", _r.onCategoryItemToggle)
    }, Lr.prototype.toggleVendorHandler = function(e) {
        _r.toggleVendorFromListHandler(e), Tr.checkAllowAllCheckedValue()
    }, Lr.prototype.filterVendorByGroupOrQuery = function() {
        var o = new Map;
        jt.getVendorsInDomain().forEach(function(e, t) {
            Tr.checkVendorConditions(e) && o.set(t, e)
        }), Tr.showEmptyResults(o.size <= 0, Tr.searchQuery), Tr.removeListeners(), Tr.clearUIElementsInMain(), Tr.addVSList(o)
    }, Lr.prototype.checkVendorConditions = function(e) {
        return !("" !== Tr.searchQuery && e.ServiceName.toLowerCase().indexOf(Tr.searchQuery.toLowerCase()) < 0 || 0 < Tr.filterGroups.length && Tr.filterGroups.indexOf(e.groupRef.CustomGroupId) < 0)
    }, Lr.prototype.addVSList = function(e) {
        var t = Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content + " .ot-sdk-column"),
            o = Gn.getVendorListEle(e);
        t.append(o), Tr.addListeners()
    }, Lr.prototype.getGroupsForFilter = function() {
        var t = new Map;
        return jt.getVendorsInDomain().forEach(function(e) {
            t.has(e.groupRef.CustomGroupId) || t.set(e.groupRef.CustomGroupId, e.groupRef)
        }), Array.from(t.values())
    }, Lr.prototype.clearUIElementsInMain = function() {
        Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content + " ul" + $t.P_Host_Cntr).html(""), Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content + " ul" + $t.P_Host_Cntr).hide(), Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content + " ul" + $t.P_Vendor_Container).html(""), Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content + " ul" + $t.P_Vendor_Container).hide();
        var e = Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content + " .ot-vs-list");
        e && e.length && e.remove()
    }, Lr.prototype.setHeader = function() {
        var e = Mt.VendorServiceConfig.PCVSListTitle,
            t = document.querySelector("#onetrust-pc-sdk " + $t.P_Vendor_Title);
        t && (t.innerText = e)
    }, Lr.prototype.setSearchInput = function() {
        var e = Mt.PCenterCookieListSearch,
            t = Mt.PCenterCookieSearchAriaLabel,
            o = Wt("#onetrust-pc-sdk " + $t.P_Vendor_Search_Input);
        o.el[0].placeholder = e, o.attr("aria-label", t)
    }, Lr.prototype.setHeaderUIConsent = function() {
        var e;
        if (Wt("#onetrust-pc-sdk " + $t.P_Select_Cntr).addClass("ot-vnd-list-cnt"), Wt("#onetrust-pc-sdk " + $t.P_Select_Cntr + " .ot-sel-all").addClass("ot-vs-selc-all"), Mt.PCCategoryStyle === se.Toggle && (Wt("#onetrust-pc-sdk " + $t.P_Select_Cntr + " .ot-sel-all").addClass("ot-toggle-conf"), Mt.PCAccordionStyle === W.Caret && Wt("#onetrust-pc-sdk " + $t.P_Select_Cntr + " .ot-sel-all").addClass("ot-caret-conf")), Wt("#onetrust-pc-sdk " + $t.P_Leg_Select_All).hide(), Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Host_El).hide(), Wt("#onetrust-pc-sdk " + $t.P_Host_Cntr).hide(), Wt($t.P_Vendor_List + " #select-all-text-container").hide(), Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Vendor_Leg_El).hide(), Wt("#onetrust-pc-sdk " + $t.P_Vendor_Container).show(), Wt("#onetrust-pc-sdk " + $t.P_Select_Cntr).show(), Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Vendor_Consent_El).show("inline-block"), Wt("#onetrust-pc-sdk " + $t.P_Vendor_List).removeClass($t.P_Host_UI), Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content).removeClass($t.P_Host_Cnt), !document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox .sel-all-hdr")) {
            var t = document.createElement("h4");
            t.className = "sel-all-hdr", t.textContent = (null === (e = Mt.VendorServiceConfig) || void 0 === e ? void 0 : e.PCVSAllowAllText) || "PCVSAllowAllText";
            var o = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
                n = Mt.PCCategoryStyle === se.Checkbox ? "beforeend" : "afterbegin";
            o.insertAdjacentElement(n, t)
        }
        Tr.checkAllowAllCheckedValue()
    }, Lr.prototype.checkAllowAllCheckedValue = function() {
        var t = !0;
        jt.vsConsent.forEach(function(e) {
            e || (t = !1)
        });
        var e = document.getElementById("#select-all-vendor-groups-handler");
        Nt.setCheckedAttribute(null, e, t)
    }, Lr);

    function Lr() {
        this.searchQuery = "", this.filterGroups = []
    }
    var _r, Vr = (Er.prototype.initCookieSettingHandlers = function() {
        Wt(document).on("click", ".optanon-show-settings, .optanon-toggle-display, .ot-sdk-show-settings, .ot-pc-handler", this.cookiesSettingsBoundListener)
    }, Er.prototype.initFlgtCkStgBtnEventHandlers = function() {
        Wt(".ot-floating-button__open").on("click", _r.floatingCookieSettingOpenBtnClicked), Wt(".ot-floating-button__close").on("click", _r.floatingCookieSettingCloseBtnClicked)
    }, Er.prototype.floatingCookieSettingOpenBtnClicked = function(e) {
        Wt(_r.fltgBtnSltr).addClass("ot-pc-open"), Mt.cookiePersistentLogo.includes("ot_guard_logo.svg") && Wt(_r.fltgBtnFSltr).attr(kt, "true"), Wt(_r.fltgBtnBSltr).attr(kt, ""), Wt(_r.fltgBtnFrontBtn).el[0].setAttribute(kt, !0), Wt(_r.fltgBtnBackBtn).el[0].setAttribute(vt, Mt.AriaClosePreferences), Wt(_r.fltgBtnBackBtn).el[0].setAttribute(kt, !1), wo.triggerGoogleAnalyticsEvent(Do, Jo), _r.showCookieSettingsHandler(e)
    }, Er.prototype.floatingCookieSettingCloseBtnClicked = function(e) {
        Wt(_r.fltgBtnFrontBtn).el[0].setAttribute(vt, Mt.AriaOpenPreferences), Wt(_r.fltgBtnFrontBtn).el[0].setAttribute(kt, !1), Wt(_r.fltgBtnBackBtn).el[0].setAttribute(kt, !0), e && (wo.triggerGoogleAnalyticsEvent(Do, Yo), _r.hideCookieSettingsHandler(e))
    }, Er.prototype.initialiseLegIntBtnHandlers = function() {
        Wt(document).on("click", ".ot-obj-leg-btn-handler", _r.onLegIntButtonClick), Wt(document).on("click", ".ot-remove-objection-handler", _r.onLegIntButtonClick)
    }, Er.prototype.initialiseAddtlVenHandler = function() {
        Wt("#onetrust-pc-sdk #ot-addtl-venlst").on("click", _r.selectVendorsGroupHandler), Wt("#onetrust-pc-sdk #ot-selall-adtlven-handler").on("click", _r.selAllAdtlVenHandler)
    }, Er.prototype.initializeGenVenHandlers = function() {
        Wt("#onetrust-pc-sdk #ot-gn-venlst .ot-gnven-chkbox-handler").on("click", _r.genVendorToggled), Wt("#onetrust-pc-sdk #ot-gn-venlst .ot-gv-venbox").on("click", _r.genVendorDetails), Wt("#onetrust-pc-sdk #ot-selall-gnven-handler").on("click", _r.selectAllGenVenHandler)
    }, Er.prototype.initialiseConsentNoticeHandlers = function() {
        var e = this,
            t = 37,
            o = 39;
        if (qt.pcName === dt && _r.categoryMenuSwitchHandler(), Wt("#onetrust-pc-sdk .onetrust-close-btn-handler").on("click", _r.bannerCloseButtonHandler), Wt("#onetrust-pc-sdk #accept-recommended-btn-handler").on("click", Br.allowAllEventHandler.bind(this, !0)), Wt("#onetrust-pc-sdk .ot-pc-refuse-all-handler").on("click", Br.rejectAllEventHandler.bind(this, !0)), Wt("#onetrust-pc-sdk #close-pc-btn-handler").on("click", _r.hideCookieSettingsHandler), Wt(document).on("keydown", function(e) {
                var t = document.getElementById(_r.pcSDKSelector),
                    o = "none" !== window.getComputedStyle(t).display;
                if (27 === e.keyCode && t && o) {
                    var n = Wt("#onetrust-pc-sdk " + $t.P_Fltr_Modal).el[0];
                    "block" === n.style.display || "0px" < n.style.width ? (_r.closeFilter(), Wt("#onetrust-pc-sdk #filter-btn-handler").focus()) : Mt.NoBanner && !Mt.ShowPreferenceCenterCloseButton || _r.hideCookieSettingsHandler(), _r.confirmPC()
                }(o && 32 === e.keyCode || "Space" === e.code || 13 === e.keyCode || "Enter" === e.code) && Jt.findUserType(e)
            }), Wt("#onetrust-pc-sdk #vendor-close-pc-btn-handler").on("click", _r.hideCookieSettingsHandler), Wt("#onetrust-pc-sdk .category-switch-handler").on("click", _r.toggleGroupORVendorHandler), Wt("#onetrust-pc-sdk .cookie-subgroup-handler").on("click", _r.toggleSubCategory), Wt("#onetrust-pc-sdk .category-menu-switch-handler").on("keydown", function(e) {
                qt.pcName === dt && (e.keyCode !== t && e.keyCode !== o || (Mt.PCTemplateUpgrade ? _r.changeSelectedTabV2(e) : _r.changeSelectedTab(e)))
            }), Wt("#onetrust-pc-sdk").on("click", $t.P_Category_Item + " > input:first-child," + $t.P_Category_Item + " > button:first-child", _r.onCategoryItemToggle.bind(this)), (Mt.showCookieList || jt.showGeneralVendors) && (Wt("#onetrust-pc-sdk .category-host-list-handler").on("click", function(e) {
                jt.showGeneralVendors && Mt.showCookieList ? jt.cookieListType = X.HostAndGenVen : jt.showGeneralVendors ? jt.cookieListType = X.GenVen : jt.cookieListType = X.Host, _r.pcLinkSource = e.target, _r.loadCookieList(e.target)
            }), Jt.isOptOutEnabled() ? (Wt("#onetrust-pc-sdk #select-all-hosts-groups-handler").on("click", _r.selectAllHostsGroupsHandler), Wt("#onetrust-pc-sdk " + $t.P_Host_Cntr).on("click", _r.selectHostsGroupHandler)) : Wt("#onetrust-pc-sdk " + $t.P_Host_Cntr).on("click", _r.toggleAccordionStatus)), Mt.IsIabEnabled && (Wt("#onetrust-pc-sdk .category-vendors-list-handler").on("click", function(e) {
                _r.pcLinkSource = e.target, _r.showVendorsList(e.target)
            }), Wt("#onetrust-pc-sdk " + $t.P_Vendor_Container).on("click", _r.selectVendorsGroupHandler), Mt.UseGoogleVendors || _r.bindSelAllHandlers(), _r.initialiseLegIntBtnHandlers()), Mt.IsIabEnabled || Mt.showCookieList || jt.showGeneralVendors || jt.showVendorService) {
            Wt(document).on("click", ".back-btn-handler", _r.backBtnHandler), Wt("#onetrust-pc-sdk #vendor-search-handler").on("keyup", function(e) {
                var t = e.target.value.trim();
                jt.showVendorService ? Tr.filterVendorByString(t) : _r.isCookieList ? Bn.searchHostList(t) : (Bn.loadVendorList(t, []), Mt.UseGoogleVendors && Bn.searchVendors(Bn.googleSearchSelectors, jt.addtlVendorsList, oe.GoogleVendor, t), jt.showGeneralVendors && Mt.GeneralVendors.length && Bn.searchVendors(Bn.genVendorSearchSelectors, Mt.GeneralVendors, oe.GeneralVendor, t)), Bn.playSearchStatus(_r.isCookieList)
            }), Wt("#onetrust-pc-sdk #filter-btn-handler").on("click", _r.toggleVendorFiltersHandler), Wt("#onetrust-pc-sdk #filter-apply-handler").on("click", _r.applyFilterHandler), Wt("#onetrust-pc-sdk " + $t.P_Fltr_Modal).on("click", _r.tglFltrOptionHandler), !wt.isV2Template && qt.pcName !== ct || Wt("#onetrust-pc-sdk #filter-cancel-handler").on("click", _r.cancelFilterHandler), !wt.isV2Template && qt.pcName === ct || Wt("#onetrust-pc-sdk #clear-filters-handler").on("click", _r.clearFiltersHandler), wt.isV2Template ? Wt("#onetrust-pc-sdk #filter-cancel-handler").on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(), Wt("#onetrust-pc-sdk #clear-filters-handler").el[0].focus())
            }) : Wt("#onetrust-pc-sdk #filter-apply-handler").on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(), Wt("#onetrust-pc-sdk .category-filter-handler").el[0].focus())
            });
            var n = Wt("#onetrust-pc-sdk .category-filter-handler").el;
            Wt(n[0]).on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || !e.shiftKey || (e.preventDefault(), Wt("#onetrust-pc-sdk #filter-apply-handler").el[0].focus())
            })
        }
        Mt.NoBanner && (Mt.OnClickCloseBanner && document.body.addEventListener("click", Br.bodyClickEvent), Mt.ScrollCloseBanner && window.addEventListener("scroll", Br.scrollCloseBanner)), Wt("#onetrust-pc-sdk .ot-gv-list-handler").on("click", function(t) {
            return d(e, void 0, void 0, function() {
                return g(this, function(e) {
                    return jt.cookieListType = X.GenVen, _r.loadCookieList(t.target), [2]
                })
            })
        }), jt.showVendorService && (_r.bindSelAllHandlers(), Wt("#onetrust-pc-sdk .onetrust-vendors-list-handler").on("click", function() {
            return _r.showVendorsList(null, !0)
        }))
    }, Er.prototype.bindSelAllHandlers = function() {
        Wt("#onetrust-pc-sdk #select-all-vendor-leg-handler").on("click", _r.selectAllVendorsLegIntHandler), Wt("#onetrust-pc-sdk #select-all-vendor-groups-handler").on("click", _r.SelectAllVendorConsentHandler)
    }, Er.prototype.hideCookieSettingsHandler = function(e) {
        return void 0 === e && (e = window.event), wo.triggerGoogleAnalyticsEvent(Do, Mo), Yn.removeAddedOTCssStyles(Wn.PC), ar.hideConsentNoticeV2(), _r.getResizeElement().removeEventListener("resize", _r.setCenterLayoutFooterHeight), window.removeEventListener("resize", _r.setCenterLayoutFooterHeight), !wt.isV2Template && qt.pcName !== ct || _r.closeFilter(!1), qt.pcName === at && Wt("#onetrust-pc-sdk " + $t.P_Content).removeClass("ot-hide"), Br.hideVendorsList(), yn.csBtnGroup && (Wt(_r.fltgBtnSltr).removeClass("ot-pc-open"), _r.floatingCookieSettingCloseBtnClicked(null)), _r.confirmPC(e), Br.resetConsent(), !1
    }, Er.prototype.selectAllHostsGroupsHandler = function(e) {
        var t = e.target.checked,
            o = Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Host_El).el[0],
            n = o.classList.contains("line-through"),
            r = Wt("#onetrust-pc-sdk .host-checkbox-handler").el;
        Nt.setCheckedAttribute("#select-all-hosts-groups-handler", null, t);
        for (var i = 0; i < r.length; i++) r[i].getAttribute("disabled") || Nt.setCheckedAttribute(null, r[i], t);
        jt.optanonHostList.forEach(function(e) {
            To.updateHostStatus(e, t)
        }), r.forEach(function(e) {
            Po.updateGenVendorStatus(e.getAttribute("hostId"), t)
        }), n && o.classList.remove("line-through")
    }, Er.prototype.selectHostsGroupHandler = function(e) {
        _r.toggleAccordionStatus(e);
        var t = e.target.getAttribute("hostId"),
            o = e.target.getAttribute("ckType"),
            n = e.target.checked;
        if (null !== t) {
            if (o === J.GenVendor) {
                var r = Mt.GeneralVendors.find(function(e) {
                    return e.VendorCustomId === t
                }).Name;
                wo.triggerGoogleAnalyticsEvent(Do, n ? $o : Zo, r + ": VEN_" + t), Po.updateGenVendorStatus(t, n)
            } else {
                var i = Nt.findIndex(jt.optanonHostList, function(e) {
                        return e.HostId === t
                    }),
                    s = jt.optanonHostList[i];
                _r.toggleHostStatus(s, n)
            }
            Nt.setCheckedAttribute(null, e.target, n)
        }
    }, Er.prototype.onCategoryItemToggle = function(e) {
        e.stopPropagation();
        var t = e.target;
        "BUTTON" !== t.tagName && "INPUT" !== t.tagName || (qt.pcName === at && this.setPcListContainerHeight(), _r.toggleAccordionStatus(e))
    }, Er.prototype.toggleAccordionStatus = function(e) {
        var t = e.target;
        if (t && t.getAttribute("aria-expanded")) {
            var o = "true" === t.getAttribute("aria-expanded") ? "false" : "true";
            t.setAttribute("aria-expanded", o)
        }
    }, Er.prototype.toggleHostStatus = function(e, t) {
        wo.triggerGoogleAnalyticsEvent(Do, t ? en : tn, e.HostName + ": H_" + e.HostId), To.updateHostStatus(e, t)
    }, Er.prototype.toggleBannerOptions = function(e) {
        Wt(".banner-option-input").each(function(e) {
            Wt(e).el.setAttribute("aria-expanded", !1)
        }), _r.toggleAccordionStatus(e)
    }, Er.prototype.bannerCloseButtonHandler = function(e) {
        if (Wt(document).off("keydown", _r.shiftBannerFocus), e && e.target && e.target.className) {
            var t = e.target.className;
            if (-1 < t.indexOf("save-preference-btn-handler")) jt.bannerCloseSource = f.ConfirmChoiceButton, wo.triggerGoogleAnalyticsEvent(Do, Ko);
            else if (-1 < t.indexOf("banner-close-button")) {
                jt.bannerCloseSource = f.BannerCloseButton;
                var o = Fo; - 1 < t.indexOf("ot-close-link") && (o = Ro, jt.bannerCloseSource = f.ContinueWithoutAcceptingButton), wo.triggerGoogleAnalyticsEvent(Do, o)
            } else -1 < t.indexOf("ot-bnr-save-handler") && (jt.bannerCloseSource = f.BannerSaveSettings, wo.triggerGoogleAnalyticsEvent(Do, qo))
        }
        return Yn.removeAddedOTCssStyles(), Br.hideVendorsList(), Br.bannerCloseButtonHandler()
    }, Er.prototype.onLegIntButtonClick = function(e) {
        if (e) {
            var t = e.currentTarget,
                o = "true" === t.parentElement.getAttribute("is-vendor"),
                n = t.parentElement.getAttribute("data-group-id"),
                r = !t.classList.contains("ot-leg-int-enabled");
            if (o) _r.onVendorToggle(n, D.LI);
            else {
                var i = io.getGroupById(n);
                i.Parent ? _r.updateSubGroupToggles(i, r, !0) : _r.updateGroupToggles(i, r, !0)
            }
            Tn.updateLegIntBtnElement(t.parentElement, r)
        }
    }, Er.prototype.updateGroupToggles = function(t, o, e) {
        To.toggleGroupHosts(t, o), jt.genVenOptOutEnabled && To.toggleGroupGenVendors(t, o), t.IsLegIntToggle = e, Tn.toggleGrpStatus(t, o), t.SubGroups && t.SubGroups.length && (qt.bannerName === rt && wt.moduleInitializer.IsSuppressPC && t.SubGroups.length ? t.SubGroups.forEach(function(e) {
            e.IsLegIntToggle = t.IsLegIntToggle, Tn.toggleGrpStatus(e, o), e.IsLegIntToggle = !1, To.toggleGroupHosts(e, o), jt.genVenOptOutEnabled && To.toggleGroupGenVendors(e, o), Gn.setVendorStateByGroup(e, o)
        }) : Tn.toogleAllSubGrpElements(t, o), t.SubGroups.forEach(function(e) {
            return Gn.setVendorStateByGroup(e, o)
        })), Gn.setVendorStateByGroup(t, o), this.allowAllVisible(Tn.setAllowAllButton()), t.IsLegIntToggle = !1
    }, Er.prototype.updateSubGroupToggles = function(e, t, o) {
        To.toggleGroupHosts(e, t), jt.genVenOptOutEnabled && To.toggleGroupGenVendors(e, t);
        var n = io.getGroupById(e.Parent);
        e.IsLegIntToggle = o, n.IsLegIntToggle = e.IsLegIntToggle;
        var r = Tn.isGroupActive(n);
        t ? (Tn.toggleGrpStatus(e, !0), Tn.isAllSubgroupsEnabled(n) && !r && (Tn.toggleGrpStatus(n, !0), To.toggleGroupHosts(n, t), jt.genVenOptOutEnabled && To.toggleGroupGenVendors(n, t), Tn.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !0))) : (Tn.toggleGrpStatus(e, !1), Tn.isAllSubgroupsDisabled(n) && r ? (Tn.toggleGrpStatus(n, !1), To.toggleGroupHosts(n, t), jt.genVenOptOutEnabled && To.toggleGroupGenVendors(n, t), Tn.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), t)) : (Tn.toggleGrpStatus(n, !1), To.toggleGroupHosts(n, !1), jt.genVenOptOutEnabled && To.toggleGroupGenVendors(n, t), Tn.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !1))), this.allowAllVisible(Tn.setAllowAllButton()), e.IsLegIntToggle = !1, n.IsLegIntToggle = e.IsLegIntToggle
    }, Er.prototype.hideCategoryContainer = function(e) {
        void 0 === e && (e = !1);
        var t = qt.pcName;
        this.isCookieList = e, Mt.PCTemplateUpgrade ? Wt("#onetrust-pc-sdk " + $t.P_Content).addClass("ot-hide") : Wt("#onetrust-pc-sdk .ot-main-content").hide(), Wt("#onetrust-pc-sdk " + $t.P_Vendor_List).removeClass("ot-hide"), t !== ct && t !== at && Wt("#onetrust-pc-sdk #close-pc-btn-handler.main").hide(), t === at && xt(Wt("#onetrust-pc-sdk").el[0], 'height: "";', !0), jt.showVendorService ? Tr.setHeaderConfig() : (e ? _r.setCookieListTemplate() : _r.setVendorListTemplate(), yr.setFilterList(e))
    }, Er.prototype.setCookieListTemplate = function() {
        var e = wt.isV2Template;
        Wt($t.P_Vendor_List + " #select-all-text-container").show("inline-block"), Wt("#onetrust-pc-sdk " + $t.P_Host_Cntr).show(), Jt.isOptOutEnabled() ? Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Host_El).show("inline-block") : Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Host_El).hide(), Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Vendor_Leg_El).hide(), Wt("#onetrust-pc-sdk " + $t.P_Leg_Header).hide(), e || Wt("#onetrust-pc-sdk " + $t.P_Leg_Select_All).hide(), Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Vendor_Consent_El).hide(), Wt("#onetrust-pc-sdk  " + $t.P_Vendor_Container).hide(), (Mt.UseGoogleVendors || jt.showGeneralVendors) && Wt("#onetrust-pc-sdk .ot-acc-cntr").hide(), Wt("#onetrust-pc-sdk " + $t.P_Vendor_List).addClass($t.P_Host_UI), Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content).addClass($t.P_Host_Cnt)
    }, Er.prototype.setVendorListTemplate = function() {
        Wt("#onetrust-pc-sdk " + $t.P_Vendor_Container).show(), Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Vendor_Consent_El).show("inline-block"), Mt.UseGoogleVendors && Wt("#onetrust-pc-sdk .ot-acc-cntr").show(), qt.legIntSettings.PAllowLI && "IAB2" === qt.iabType ? (Wt("#onetrust-pc-sdk " + $t.P_Select_Cntr).show(wt.isV2Template ? void 0 : "inline-block"), Wt("#onetrust-pc-sdk " + $t.P_Leg_Select_All).show("inline-block"), Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Vendor_Leg_El).show("inline-block"), Wt($t.P_Vendor_List + " #select-all-text-container").hide(), qt.legIntSettings.PShowLegIntBtn ? (Wt("#onetrust-pc-sdk " + $t.P_Leg_Header).hide(), Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Vendor_Leg_El).hide()) : Wt("#onetrust-pc-sdk " + $t.P_Leg_Header).show()) : (Wt("#onetrust-pc-sdk " + $t.P_Select_Cntr).show(), Wt($t.P_Vendor_List + " #select-all-text-container").show("inline-block"), Wt("#onetrust-pc-sdk " + $t.P_Leg_Select_All).hide(), Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Vendor_Leg_El).hide()), Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Host_El).hide(), Wt("#onetrust-pc-sdk " + $t.P_Host_Cntr).hide(), Wt("#onetrust-pc-sdk " + $t.P_Vendor_List).removeClass($t.P_Host_UI), Wt("#onetrust-pc-sdk " + $t.P_Vendor_Content).removeClass($t.P_Host_Cnt)
    }, Er.prototype.showAllVendors = function(t) {
        return d(this, void 0, void 0, function() {
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, _r.fetchAndSetupPC()];
                    case 1:
                        return e.sent(), _r.showVendorsList(null, !0), jt.isPCVisible ? [3, 3] : [4, _r.showCookieSettingsHandler(t)];
                    case 2:
                        e.sent(), e.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, Er.prototype.fetchAndSetupPC = function() {
        return d(this, void 0, void 0, function() {
            var t, o;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return wt.moduleInitializer.IsSuppressPC && 0 === Wt("#onetrust-pc-sdk").length ? [4, hn.getPcContent()] : [3, 2];
                    case 1:
                        t = e.sent(), yn.preferenceCenterGroup = {
                            name: t.name,
                            html: atob(t.html),
                            css: t.css
                        }, wt.isV2Template = Mt.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name), (o = document.getElementById("onetrust-style")).innerHTML += yn.preferenceCenterGroup.css, o.innerHTML += kr.addCustomPreferenceCenterCSS(), Hn.insertPcHtml(), _r.initialiseConsentNoticeHandlers(), Mt.IsIabEnabled && Bn.InitializeVendorList(), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, Er.prototype.setVendorContent = function() {
        Wt("#onetrust-pc-sdk #filter-count").text(jt.filterByIABCategories.length.toString()), Bn.loadVendorList("", jt.filterByIABCategories), Mt.UseGoogleVendors && (jt.vendorDomInit ? Bn.resetAddtlVendors() : (Bn.initGoogleVendors(), Wt("#onetrust-pc-sdk").on("click", ".ot-acc-cntr > button", _r.toggleAccordionStatus.bind(this)))), jt.vendorDomInit || (jt.vendorDomInit = !0, _r.initialiseLegIntBtnHandlers(), Mt.UseGoogleVendors && (_r.initialiseAddtlVenHandler(), _r.bindSelAllHandlers())), jt.showGeneralVendors && !jt.genVendorDomInit && (jt.genVendorDomInit = !0, Bn.initGenVendors(), _r.initializeGenVenHandlers(), Mt.UseGoogleVendors || (_r.bindSelAllHandlers(), Wt("#onetrust-pc-sdk").on("click", ".ot-acc-cntr > button", _r.toggleAccordionStatus.bind(this))))
    }, Er.prototype.showVendorsList = function(e, t) {
        if (void 0 === t && (t = !1), _r.hideCategoryContainer(!1), Yn.addOTCssPropertiesToBody(Wn.PC, {}), jt.showVendorService) Tr.showVSList();
        else {
            if (!t) {
                var o = e.getAttribute("data-parent-id");
                if (o) {
                    var n = io.getGroupById(o);
                    if (n) {
                        var r = u(n.SubGroups, [n]).reduce(function(e, t) {
                            return -1 < Lt.indexOf(t.Type) && e.push(t.CustomGroupId), e
                        }, []);
                        jt.filterByIABCategories = u(jt.filterByIABCategories, r)
                    }
                }
            }
            _r.setVendorContent(), _n.updateFilterSelection(!1)
        }
        return jt.pcLayer = E.VendorList, e && Pn.setPCFocus(Pn.getPCElements()), this.setSearchInputFocus(), !1
    }, Er.prototype.loadCookieList = function(e) {
        jt.filterByCategories = [], _r.hideCategoryContainer(!0);
        var t = e && e.getAttribute("data-parent-id");
        if (t) {
            var o = io.getGroupById(t);
            jt.filterByCategories.push(t), o.SubGroups.length && o.SubGroups.forEach(function(e) {
                if (-1 === Lt.indexOf(e.Type)) {
                    var t = e.CustomGroupId;
                    jt.filterByCategories.indexOf(t) < 0 && jt.filterByCategories.push(t)
                }
            })
        }
        return Bn.loadHostList("", jt.filterByCategories), Wt("#onetrust-pc-sdk #filter-count").text(jt.filterByCategories.length.toString()), _n.updateFilterSelection(!0), jt.pcLayer = E.CookieList, Pn.setPCFocus(Pn.getPCElements()), this.setSearchInputFocus(), !1
    }, Er.prototype.selectAllVendorsLegIntHandler = function(e) {
        var t = Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Vendor_Leg_El).el[0],
            o = t.classList.contains("line-through"),
            n = Wt($t.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-leg-checkbox-handler').el,
            r = e.target.checked,
            i = {};
        jt.vendors.selectedLegIntVendors.map(function(e, t) {
            i[e.split(":")[0]] = t
        });
        for (var s = 0; s < n.length; s++) {
            Nt.setCheckedAttribute(null, n[s], r), Mt.PCShowConsentLabels && (n[s].parentElement.querySelector(".ot-label-status").innerHTML = r ? Mt.PCActiveText : Mt.PCInactiveText);
            var a = n[s].getAttribute("leg-vendorid"),
                l = i[a];
            void 0 === l && (l = a), jt.vendors.selectedLegIntVendors[l] = a + ":" + r
        }
        o && t.classList.remove("line-through"), Nt.setCheckedAttribute(null, e.target, r)
    }, Er.prototype.selAllAdtlVenHandler = function(e) {
        for (var t = Wt("#onetrust-pc-sdk #ot-selall-adtlvencntr").el[0], o = t.classList.contains("line-through"), n = Wt("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el, r = e.target.checked, i = 0; i < n.length; i++) Nt.setCheckedAttribute(null, n[i], r), Mt.PCShowConsentLabels && (n[i].parentElement.querySelector(".ot-label-status").innerHTML = r ? Mt.PCActiveText : Mt.PCInactiveText);
        r ? Mt.UseGoogleVendors && Object.keys(jt.addtlVendorsList).forEach(function(e) {
            jt.addtlVendors.vendorSelected[e] = !0
        }) : jt.addtlVendors.vendorSelected = {}, o && t.classList.remove("line-through")
    }, Er.prototype.selectAllGenVenHandler = function(e) {
        var t = e.target.checked;
        _r.selectAllHandler({
            selAllEl: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            vendorBoxes: "#onetrust-pc-sdk .ot-gnven-chkbox-handler"
        }, "genven", t)
    }, Er.prototype.selectAllHandler = function(e, t, o) {
        for (var n = Wt(e.selAllEl).el[0], r = n.classList.contains("line-through"), i = Wt(e.vendorBoxes).el, s = 0; s < i.length; s++) "genven" === t && !o && jt.alwaysActiveGenVendors.includes(i[s].getAttribute("gn-vid")) ? (Nt.setDisabledAttribute(null, i[s], !0), Nt.setCheckedAttribute(null, i[s], !0)) : Nt.setCheckedAttribute(null, i[s], o), Mt.PCShowConsentLabels && (i[s].parentElement.querySelector(".ot-label-status").innerHTML = o ? Mt.PCActiveText : Mt.PCInactiveText);
        o ? "googleven" === t && Mt.UseGoogleVendors ? Object.keys(jt.addtlVendorsList).forEach(function(e) {
            jt.addtlVendors.vendorSelected[e] = !0
        }) : "genven" === t && jt.showGeneralVendors && Mt.GeneralVendors.forEach(function(e) {
            jt.genVendorsConsent[e.VendorCustomId] = !0
        }) : "googleven" === t ? jt.addtlVendors.vendorSelected = {} : (jt.genVendorsConsent = {}, jt.alwaysActiveGenVendors.forEach(function(e) {
            jt.genVendorsConsent[e] = !0
        })), r && n.classList.remove("line-through")
    }, Er.prototype.SelectAllVendorConsentHandler = function(e) {
        var t = e.target.checked;
        if (jt.showVendorService) Tr.toggleVendors(t);
        else {
            var o = Wt("#onetrust-pc-sdk #" + $t.P_Sel_All_Vendor_Consent_El).el[0],
                n = o.classList.contains("line-through"),
                r = Wt($t.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-checkbox-handler').el,
                i = {};
            jt.vendors.selectedVendors.map(function(e, t) {
                i[e.split(":")[0]] = t
            });
            for (var s = 0; s < r.length; s++) {
                Nt.setCheckedAttribute(null, r[s], t), Mt.PCShowConsentLabels && (r[s].parentElement.querySelector(".ot-label-status").innerHTML = t ? Mt.PCActiveText : Mt.PCInactiveText);
                var a = r[s].getAttribute("vendorid"),
                    l = i[a];
                void 0 === l && (l = a), jt.vendors.selectedVendors[l] = a + ":" + t
            }
            n && o.classList.remove("line-through")
        }
        Nt.setCheckedAttribute(null, e.target, t)
    }, Er.prototype.onVendorToggle = function(n, e) {
        var t = jt.vendors,
            o = jt.addtlVendors,
            r = e === D.LI ? t.selectedLegIntVendors : e === D.AddtlConsent ? [] : t.selectedVendors,
            i = !1,
            s = Number(n);
        r.some(function(e, t) {
            var o = e.split(":");
            if (o[0] === n) return s = t, i = "true" === o[1], !0
        }), e === D.LI ? (wo.triggerGoogleAnalyticsEvent(Do, i ? an : ln, t.list.find(function(e) {
            return e.vendorId === n
        }).vendorName + ": IABV2_" + n), t.selectedLegIntVendors[s] = n + ":" + !i, qt.legIntSettings.PShowLegIntBtn || Bn.vendorLegIntToggleEvent()) : e === D.AddtlConsent ? (o.vendorSelected[n] ? delete o.vendorSelected[n] : o.vendorSelected[n] = !0, Bn.venAdtlSelAllTglEvent()) : (wo.triggerGoogleAnalyticsEvent(Do, i ? sn : rn, t.list.find(function(e) {
            return e.vendorId === n
        }).vendorName + ": IABV2_" + n), t.selectedVendors[s] = n + ":" + !i, Bn.vendorsListEvent())
    }, Er.prototype.onVendorDisclosure = function(n) {
        return d(this, void 0, void 0, function() {
            var t, o;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = jt.discVendors)[n].isFetched ? [3, 2] : (t[n].isFetched = !0, [4, hn.getStorageDisclosure(t[n].disclosureUrl)]);
                    case 1:
                        o = e.sent(), Bn.updateVendorDisclosure(n, o), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, Er.prototype.tglFltrOptionHandler = function(e) {
        e && e.target.classList.contains("category-filter-handler") && Nt.setCheckedAttribute(null, e.target, e.target.checked)
    }, Er.prototype.selectVendorsGroupHandler = function(e) {
        _r.toggleAccordionStatus(e);
        var t = e.target.getAttribute("leg-vendorid"),
            o = e.target.getAttribute("vendorid"),
            n = e.target.getAttribute("addtl-vid"),
            r = e.target.getAttribute("disc-vid");
        t ? _r.onVendorToggle(t, D.LI) : o ? _r.onVendorToggle(o, D.Consent) : n && _r.onVendorToggle(n, D.AddtlConsent), r && _r.onVendorDisclosure(r), (t || o || n) && (Nt.setCheckedAttribute(null, e.target, e.target.checked), Mt.PCShowConsentLabels && (e.target.parentElement.querySelector(".ot-label-status").innerHTML = e.target.checked ? Mt.PCActiveText : Mt.PCInactiveText))
    }, Er.prototype.toggleVendorFiltersHandler = function() {
        var e = !1,
            t = Wt("#onetrust-pc-sdk " + $t.P_Fltr_Modal).el[0];
        switch (qt.pcName) {
            case lt:
            case st:
            case at:
            case dt:
                if (e = "block" === t.style.display) _r.closeFilter();
                else {
                    var o = Wt("#onetrust-pc-sdk " + $t.P_Triangle).el[0];
                    Wt(o).attr("style", "display: block;"), Wt(t).attr("style", "display: block;");
                    var n = Array.prototype.slice.call(t.querySelectorAll("[href], input, button"));
                    Pn.setPCFocus(n)
                }
                break;
            case ct:
                896 < window.innerWidth || 896 < window.screen.height ? xt(t, "width: 400px;", !0) : xt(t, "height: 100%; width: 100%;"), t.querySelector(".ot-checkbox input").focus();
                break;
            default:
                return
        }
        wt.isV2Template && !e && (Wt("#onetrust-pc-sdk").addClass("ot-shw-fltr"), Wt("#onetrust-pc-sdk .ot-fltr-scrlcnt").el[0].scrollTop = 0)
    }, Er.prototype.clearFiltersHandler = function() {
        _r.setAriaLabelforButtonInFilter(Mt.PCenterFilterClearedAria);
        for (var e = Wt("#onetrust-pc-sdk " + $t.P_Fltr_Modal + " input").el, t = 0; t < e.length; t++) Nt.setCheckedAttribute(null, e[t], !1);
        _r.isCookieList ? jt.filterByCategories = [] : jt.filterByIABCategories = []
    }, Er.prototype.cancelFilterHandler = function() {
        jt.showVendorService ? Tr.cancelFilter() : _r.isCookieList ? _n.cancelHostFilter() : Bn.cancelVendorFilter(), _r.closeFilter(), Wt("#onetrust-pc-sdk #filter-btn-handler").focus()
    }, Er.prototype.applyFilterHandler = function() {
        var e;
        _r.setAriaLabelforButtonInFilter(Mt.PCenterFilterAppliedAria), jt.showVendorService ? (e = Tr.getGroupsFilter(), Tr.filterVendorByGroup(e)) : _r.isCookieList ? (e = _n.updateHostFilterList(), Bn.loadHostList("", e)) : (e = Bn.updateVendorFilterList(), Bn.loadVendorList("", e)), Wt("#onetrust-pc-sdk #filter-count").text(String(e.length)), _r.closeFilter(), Wt("#onetrust-pc-sdk #filter-btn-handler").focus()
    }, Er.prototype.setAriaLabelforButtonInFilter = function(e) {
        var t = jt.isPCVisible ? document.querySelector("#onetrust-pc-sdk span[aria-live]") : document.querySelector("#onetrust-banner-sdk span[aria-live]");
        t || ((t = document.createElement("span")).classList.add("ot-scrn-rdr"), t.setAttribute("aria-atomic", "true"), (jt.isPCVisible ? document.getElementById(_r.pcSDKSelector) : document.getElementById(_r.bannerSelector)).appendChild(t)), t.setAttribute("aria-atomic", "true"), t.setAttribute("aria-relevant", "additions"), t.setAttribute("aria-live", "assertive"), t.setAttribute(vt, e), _r.timeCallback && clearTimeout(_r.timeCallback), _r.timeCallback = setTimeout(function() {
            _r.timeCallback = null, t.setAttribute(vt, "")
        }, 900)
    }, Er.prototype.setPcListContainerHeight = function() {
        Wt("#onetrust-pc-sdk " + $t.P_Content).el[0].classList.contains("ot-hide") ? xt(Wt("#onetrust-pc-sdk").el[0], 'height: "";', !0) : setTimeout(function() {
            var e = window.innerHeight;
            768 <= window.innerWidth && 600 <= window.innerHeight && (e = .8 * window.innerHeight), !Wt("#onetrust-pc-sdk " + $t.P_Content).el[0].scrollHeight || Wt("#onetrust-pc-sdk " + $t.P_Content).el[0].scrollHeight >= e ? xt(Wt("#onetrust-pc-sdk").el[0], "height: " + e + "px;", !0) : xt(Wt("#onetrust-pc-sdk").el[0], "height: auto;", !0)
        })
    }, Er.prototype.changeSelectedTab = function(e) {
        var t, o = Wt("#onetrust-pc-sdk .category-menu-switch-handler"),
            n = 0,
            r = Wt(o.el[0]);
        o.each(function(e, t) {
            Wt(e).el.classList.contains($t.P_Active_Menu) && (n = t, Wt(e).el.classList.remove($t.P_Active_Menu), r = Wt(e))
        }), e.keyCode === w.RightArrow ? t = n + 1 >= o.el.length ? Wt(o.el[0]) : Wt(o.el[n + 1]) : e.keyCode === w.LeftArrow && (t = Wt(n - 1 < 0 ? o.el[o.el.length - 1] : o.el[n - 1])), this.tabMenuToggle(t, r)
    }, Er.prototype.changeSelectedTabV2 = function(e) {
        var t, o = e.target.parentElement;
        e.keyCode === w.RightArrow ? t = o.nextElementSibling || o.parentElement.firstChild : e.keyCode === w.LeftArrow && (t = o.previousElementSibling || o.parentElement.lastChild);
        var n = t.querySelector(".category-menu-switch-handler");
        n.focus(), this.groupTabClick(n)
    }, Er.prototype.categoryMenuSwitchHandler = function() {
        for (var t = this, e = Wt("#onetrust-pc-sdk .category-menu-switch-handler").el, o = 0; o < e.length; o++) e[o].addEventListener("click", this.groupTabClick), e[o].addEventListener("keydown", function(e) {
            if (32 === e.keyCode || "space" === e.code) return t.groupTabClick(e.currentTarget), e.preventDefault(), !1
        })
    }, Er.prototype.groupTabClick = function(e) {
        var t = Wt("#onetrust-pc-sdk " + $t.P_Grp_Container).el[0],
            o = t.querySelector("." + $t.P_Active_Menu),
            n = e.currentTarget || e,
            r = n.getAttribute("aria-controls");
        o.setAttribute("tabindex", -1), o.setAttribute("aria-selected", !1), o.classList.remove($t.P_Active_Menu), t.querySelector($t.P_Desc_Container + ":not(.ot-hide)").classList.add("ot-hide"), t.querySelector("#" + r).classList.remove("ot-hide"), n.setAttribute("tabindex", 0), n.setAttribute("aria-selected", !0), n.classList.add($t.P_Active_Menu)
    }, Er.prototype.tabMenuToggle = function(e, t) {
        e.el.setAttribute("tabindex", 0), e.el.setAttribute("aria-selected", !0), t.el.setAttribute("tabindex", -1), t.el.setAttribute("aria-selected", !1), e.focus(), t.el.parentElement.parentElement.querySelector("" + $t.P_Desc_Container).classList.add("ot-hide"), e.el.parentElement.parentElement.querySelector("" + $t.P_Desc_Container).classList.remove("ot-hide"), e.el.classList.add($t.P_Active_Menu)
    }, Er.prototype.closeFilter = function(e) {
        if (void 0 === e && (e = !0), !ar.checkIfPcSdkContainerExist()) {
            var t = Wt("#onetrust-pc-sdk " + $t.P_Fltr_Modal).el[0],
                o = Wt("#onetrust-pc-sdk " + $t.P_Triangle).el[0];
            qt.pcName === ct ? 896 < window.innerWidth || 896 < window.screen.height ? xt(t, "width: 0;", !0) : xt(t, "height: 0;") : xt(t, "display: none;"), o && Wt(o).attr("style", "display: none;"), wt.isV2Template && Wt("#onetrust-pc-sdk").removeClass("ot-shw-fltr"), e && Pn.setFirstAndLast(Pn.getPCElements())
        }
    }, Er.prototype.setBackButtonFocus = function() {
        Wt("#onetrust-pc-sdk .back-btn-handler").el[0].focus()
    }, Er.prototype.setSearchInputFocus = function() {
        Wt("#onetrust-pc-sdk #vendor-search-handler").el[0].focus()
    }, Er.prototype.setCenterLayoutFooterHeight = function() {
        var e = _r.pc;
        if (_r.setMainContentHeight(), qt.pcName === dt && e) {
            var t = e.querySelectorAll("" + $t.P_Desc_Container),
                o = e.querySelectorAll("li .category-menu-switch-handler");
            if (!e.querySelector(".category-menu-switch-handler + " + $t.P_Desc_Container) && window.innerWidth < 640)
                for (var n = 0; n < t.length; n++) o[n].insertAdjacentElement("afterend", t[n]);
            else e.querySelector(".category-menu-switch-handler + " + $t.P_Desc_Container) && 640 < window.innerWidth && Wt(e.querySelector(".ot-tab-desc")).append(t)
        }
    }, Er.prototype.setMainContentHeight = function() {
        var e = this.pc,
            t = e.querySelector(".ot-pc-footer"),
            o = e.querySelector(".ot-pc-header"),
            n = e.querySelectorAll(".ot-pc-footer button"),
            r = n[n.length - 1],
            i = Mt.PCLayout;
        if (e.classList.remove("ot-ftr-stacked"), n[0] && r && 1 < Math.abs(n[0].offsetTop - r.offsetTop) && e.classList.add("ot-ftr-stacked"), !Mt.PCTemplateUpgrade && !i.Center) {
            var s = e.clientHeight - t.clientHeight - o.clientHeight - 3;
            if (Mt.PCTemplateUpgrade && !i.Tab && Mt.PCenterVendorListDescText) {
                var a = Wt("#vdr-lst-dsc").el;
                s = s - (a.length && a[0].clientHeight) - 10
            }
            xt(e.querySelector("" + $t.P_Vendor_List), "height: " + s + "px;", !0)
        }
        var l = e.querySelector("" + $t.P_Content);
        if (Mt.PCTemplateUpgrade && i.Center) {
            var c = 600 < window.innerWidth && 475 < window.innerHeight;
            if (!this.pcBodyHeight && c && (this.pcBodyHeight = l.scrollHeight), c) {
                var d = this.pcBodyHeight + t.clientHeight + o.clientHeight + 20;
                d > .8 * window.innerHeight || 0 === this.pcBodyHeight ? xt(e, "height: " + .8 * window.innerHeight + "px;", !0) : xt(e, "height: " + d + "px;", !0)
            } else xt(e, "height: 100%;", !0)
        } else xt(e.querySelector("" + $t.P_Content), "height: " + (e.clientHeight - t.clientHeight - o.clientHeight - 3) + "px;", !0)
    }, Er.prototype.allowAllVisible = function(e) {
        e !== this.allowVisible && Mt.PCLayout.Tab && Mt.PCTemplateUpgrade && (this.pc && this.setMainContentHeight(), this.allowVisible = e)
    }, Er.prototype.restorePc = function() {
        jt.pcLayer === E.CookieList ? (_r.hideCategoryContainer(!0), Bn.loadHostList("", jt.filterByCategories), Wt("#onetrust-pc-sdk #filter-count").text(jt.filterByCategories.length.toString())) : jt.pcLayer === E.VendorList && (_r.hideCategoryContainer(!1), _r.setVendorContent()), jt.isPCVisible = !1, _r.toggleInfoDisplay(), jt.pcLayer !== E.VendorList && jt.pcLayer !== E.CookieList || (_n.updateFilterSelection(jt.pcLayer === E.CookieList), _r.setBackButtonFocus(), Pn.setPCFocus(Pn.getPCElements()))
    }, Er.prototype.toggleInfoDisplay = function() {
        return d(this, void 0, void 0, function() {
            var t, o;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return yn.csBtnGroup && (Wt(_r.fltgBtnSltr).addClass("ot-pc-open"), _r.otGuardLogoPromise.then(function() {
                            Mt.cookiePersistentLogo.includes("ot_guard_logo.svg") && Wt(_r.fltgBtnFSltr).attr(kt, "true")
                        }), Wt(_r.fltgBtnBSltr).attr(kt, "")), [4, _r.fetchAndSetupPC()];
                    case 1:
                        return e.sent(), qt.pcName === at && this.setPcListContainerHeight(), void 0 !== jt.pcLayer && jt.pcLayer !== E.Banner || (jt.pcLayer = E.PrefCenterHome), t = Wt("#onetrust-pc-sdk").el[0], Wt(".onetrust-pc-dark-filter").el[0].removeAttribute("style"), t.removeAttribute("style"), jt.isPCVisible || (ar.showConsentNotice(), jt.isPCVisible = !0, Mt.PCTemplateUpgrade && (this.pc = t, o = t.querySelector("#accept-recommended-btn-handler"), this.allowVisible = o && 0 < o.clientHeight, this.setCenterLayoutFooterHeight(), _r.getResizeElement().addEventListener("resize", _r.setCenterLayoutFooterHeight), window.addEventListener("resize", _r.setCenterLayoutFooterHeight))), window.dispatchEvent(new CustomEvent("OneTrustPCLoaded", {
                            OneTrustPCLoaded: "yes"
                        })), _r.captureInitialConsent(), [2]
                }
            })
        })
    }, Er.prototype.close = function(e) {
        Mt.BCloseButtonType === de.Link ? jt.bannerCloseSource = f.ContinueWithoutAcceptingButton : jt.bannerCloseSource = f.BannerCloseButton, Br.bannerCloseButtonHandler(e), _r.getResizeElement().removeEventListener("resize", _r.setCenterLayoutFooterHeight), window.removeEventListener("resize", _r.setCenterLayoutFooterHeight)
    }, Er.prototype.closePreferenceCenter = function(e) {
        e && e.preventDefault(), window.location.href = "http://otsdk//consentChanged"
    }, Er.prototype.initializeAlartHtmlAndHandler = function() {
        jt.skipAddingHTML = 0 < Wt("#onetrust-banner-sdk").length, jt.skipAddingHTML || Pr.insertAlertHtml(), this.initialiseAlertHandlers()
    }, Er.prototype.initialiseAlertHandlers = function() {
        var e = this;
        Pr.showBanner(), Mt.ForceConsent && !Jt.isCookiePolicyPage(Mt.AlertNoticeText) && Wt(".onetrust-pc-dark-filter").removeClass("ot-hide").css("z-index:2147483645;"), Mt.OnClickCloseBanner && document.body.addEventListener("click", Br.bodyClickEvent), Mt.ScrollCloseBanner && (window.addEventListener("scroll", Br.scrollCloseBanner), Wt(document).on("click", ".onetrust-close-btn-handler", Br.rmScrollAndClickBodyEvents), Wt(document).on("click", "#onetrust-accept-btn-handler", Br.rmScrollAndClickBodyEvents), Wt(document).on("click", "#accept-recommended-btn-handler", Br.rmScrollAndClickBodyEvents)), (Mt.IsIabEnabled || Mt.UseGoogleVendors || jt.showGeneralVendors) && !jt.showVendorService && Wt(document).on("click", ".onetrust-vendors-list-handler", _r.showAllVendors), Mt.FloatingRoundedIcon && Wt("#onetrust-banner-sdk #onetrust-cookie-btn").on("click", function(e) {
            jt.pcSource = e.currentTarget, _r.showCookieSettingsHandler(e)
        }), Wt("#onetrust-banner-sdk .onetrust-close-btn-handler, #onetrust-banner-sdk .ot-bnr-save-handler").on("click", _r.bannerCloseButtonHandler), Wt("#onetrust-banner-sdk #onetrust-pc-btn-handler").on("click", _r.showCookieSettingsHandler), Wt("#onetrust-banner-sdk #onetrust-accept-btn-handler").on("click", Br.allowAllEventHandler.bind(this, !1)), Wt("#onetrust-banner-sdk #onetrust-reject-all-handler").on("click", Br.rejectAllEventHandler.bind(this, !1)), Wt("#onetrust-banner-sdk .banner-option-input").on("click", qt.bannerName === ot ? _r.toggleBannerOptions : _r.toggleAccordionStatus), Wt("#onetrust-banner-sdk .ot-gv-list-handler").on("click", function(t) {
            return d(e, void 0, void 0, function() {
                return g(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return jt.cookieListType = X.GenVen, [4, _r.fetchAndSetupPC()];
                        case 1:
                            return e.sent(), _r.loadCookieList(t.target), _r.showCookieSettingsHandler(t), [2]
                    }
                })
            })
        }), Wt("#onetrust-banner-sdk .category-switch-handler").on("click", _r.toggleBannerCategory);
        var t = document.getElementById("onetrust-banner-sdk");
        Mt.ForceConsent && t && "none" !== window.getComputedStyle(t).display && Wt(document).on("keydown", _r.shiftBannerFocus), Wt("#onetrust-banner-sdk").on("keydown", function(e) {
            32 !== e.keyCode && "Space" !== e.code && 13 !== e.keyCode && "Enter" !== e.code || Jt.findUserType(e)
        })
    }, Er.prototype.getResizeElement = function() {
        var e = document.querySelector("#onetrust-pc-sdk .ot-text-resize");
        return e ? e.contentWindow || e : document
    }, Er.prototype.insertCookieSettingText = function(e) {
        var t, o;
        void 0 === e && (e = !1);
        for (var n = Mt.CookieSettingButtonText, r = Wt(".ot-sdk-show-settings").el, i = Wt(".optanon-toggle-display").el, s = 0; s < r.length; s++) Wt(r[s]).text(n), Wt(i[s]).text(n);
        e ? (null !== (t = document.querySelector(".ot-sdk-show-settings")) && void 0 !== t && t.addEventListener("click", this.cookiesSettingsBoundListener), null !== (o = document.querySelector(".optanon-toggle-display")) && void 0 !== o && o.addEventListener("click", this.cookiesSettingsBoundListener)) : _r.initCookieSettingHandlers()
    }, Er.prototype.genVendorToggled = function(e) {
        var t = e.target.getAttribute("gn-vid");
        Po.updateGenVendorStatus(t, e.target.checked);
        var o = Mt.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        }).Name;
        wo.triggerGoogleAnalyticsEvent(Do, e.target.checked ? $o : Zo, o + ": VEN_" + t), Bn.genVenSelectAllTglEvent()
    }, Er.prototype.genVendorDetails = function(e) {
        _r.toggleAccordionStatus(e)
    }, Er.prototype.confirmPC = function(e) {
        var t = no.isAlertBoxClosedAndValid();
        Mt.NoBanner && Mt.ShowPreferenceCenterCloseButton && !t && Br.bannerCloseButtonHandler();
        var o = Jt.isBannerVisible();
        !wt.moduleInitializer.MobileSDK || !t && o || _r.closePreferenceCenter(e)
    }, Er.prototype.captureInitialConsent = function() {
        jt.initialGroupsConsent = JSON.parse(JSON.stringify(jt.groupsConsent)), jt.initialHostConsent = JSON.parse(JSON.stringify(jt.hostsConsent)), jt.showGeneralVendors && (jt.initialGenVendorsConsent = JSON.parse(JSON.stringify(jt.genVendorsConsent))), Mt.IsIabEnabled && (jt.initialOneTrustIABConsent = JSON.parse(JSON.stringify(jt.oneTrustIABConsent)), jt.initialVendors = JSON.parse(JSON.stringify(jt.vendors)), jt.initialVendors.vendorTemplate = jt.vendors.vendorTemplate), Mt.UseGoogleVendors && (jt.initialAddtlVendorsList = JSON.parse(JSON.stringify(jt.addtlVendorsList)), jt.initialAddtlVendors = JSON.parse(JSON.stringify(jt.addtlVendors))), jt.vsIsActiveAndOptOut && (jt.initialVendorsServiceConsent = new Map(jt.vsConsent))
    }, Er);

    function Er() {
        var t = this;
        this.allowVisible = !1, this.fltgBtnBackBtn = ".ot-floating-button__back button", this.fltgBtnBSltr = ".ot-floating-button__back svg", this.fltgBtnFrontBtn = ".ot-floating-button__front button", this.fltgBtnFSltr = ".ot-floating-button__front svg", this.fltgBtnSltr = "#ot-sdk-btn-floating", this.isCookieList = !1, this.pc = null, this.pcLinkSource = null, this.pcSDKSelector = "onetrust-pc-sdk", this.bannerSelector = "onetrust-banner-sdk", this.otGuardLogoResolve = null, this.otGuardLogoPromise = new Promise(function(e) {
            t.otGuardLogoResolve = e
        }), this.showCookieSettingsHandler = function(s) {
            return d(t, void 0, void 0, function() {
                var t, o, n, r, i;
                return g(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return (t = document.getElementById(_r.pcSDKSelector), t && "none" !== window.getComputedStyle(t).getPropertyValue("display")) ? [2] : (s && s.stopPropagation(), s && s.target && (o = s.target.className, n = "onetrust-pc-btn-handler" === s.target.id, r = "ot-sdk-show-settings" === o, (n || r) && (i = n ? Uo : jo, wo.triggerGoogleAnalyticsEvent(Do, i)), jt.pcSource = s.target), [4, _r.toggleInfoDisplay()]);
                        case 1:
                            return e.sent(), [2, !1]
                    }
                })
            })
        }, this.cookiesSettingsBoundListener = this.showCookieSettingsHandler.bind(this), this.backBtnHandler = function() {
            return jt.showVendorService && Tr.hideVendorList(), Br.hideVendorsList(), qt.pcName === at && (Wt("#onetrust-pc-sdk " + $t.P_Content).removeClass("ot-hide"), Wt("#onetrust-pc-sdk").el[0].removeAttribute("style"), t.setPcListContainerHeight()), Wt("#onetrust-pc-sdk #filter-count").text("0"), Wt("#onetrust-pc-sdk #vendor-search-handler").length && (Wt("#onetrust-pc-sdk #vendor-search-handler").el[0].value = ""), jt.currentGlobalFilteredList = [], jt.filterByCategories = [], jt.filterByIABCategories = [], jt.vendors.searchParam = "", _r.closeFilter(), jt.pcLayer = E.PrefCenterHome, t.pcLinkSource ? (t.pcLinkSource.focus(), t.pcLinkSource = null) : Pn.setPCFocus(Pn.getPCElements()), !1
        }, this.bannerCloseBoundListener = this.bannerCloseButtonHandler.bind(this), this.toggleGroupORVendorHandler = function(e) {
            var t = e.currentTarget,
                o = t.dataset.otVsId;
            o ? _r.toggleVendorServiceHandler.bind(this)(e) : (o = t.dataset.optanongroupid) && _r.toggleV2Category.bind(this)()
        }, this.toggleVendorFromListHandler = function(e) {
            var t = e.currentTarget,
                o = t.checked,
                n = t.dataset.otVsId,
                r = t.dataset.optanongroupid,
                i = document.getElementById("ot-vendor-id-" + n);
            Gn.toggleVendorService(r, n, o, i)
        }, this.toggleVendorServiceHandler = function(e) {
            var t = e.currentTarget,
                o = t.checked,
                n = t.dataset.otVsId,
                r = t.dataset.optanongroupid;
            Gn.toggleVendorService(r, n, o, t);
            var i = io.getVSById(n);
            _r.setAriaLabelforButtonInFilter(i.ServiceName)
        }, this.toggleV2Category = function(e, t, o, n) {
            if (!t) {
                var r = this.getAttribute("data-optanongroupid"),
                    i = "function" == typeof this.getAttribute,
                    s = Nt.findIndex(jt.dataGroupState, function(e) {
                        return i && e.CustomGroupId === r
                    });
                t = jt.dataGroupState[s]
            }
            var a;
            if (void 0 === o && (o = Wt(this).is(":checked")), Mt.ChoicesBanner && Nt.setCheckedAttribute("#ot-bnr-grp-id-" + t.CustomGroupId, null, o), n) document.querySelector("#ot-group-id-" + n) && (Nt.setCheckedAttribute("#ot-group-id-" + n, null, o), a = document.querySelector("#ot-group-id-" + n));
            else {
                a = this, Nt.setCheckedAttribute(null, this, o);
                var l = a.parentElement.querySelector(".ot-switch-nob");
                wt.fp.CookieV2VendorServiceScript ? Mt.PCCategoryStyle === se.Toggle && l && l.setAttribute("aria-checked", o) : Mt.PCTemplateUpgrade && l && l.setAttribute("aria-checked", o)
            }
            Mt.PCShowConsentLabels && (a.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? Mt.PCActiveText : Mt.PCInactiveText);
            var c = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            _r.setAriaLabelforButtonInFilter(t.GroupName), _r.updateGroupToggles(t, o, c)
        }, this.toggleBannerCategory = function() {
            var t = this,
                e = Nt.findIndex(jt.dataGroupState, function(e) {
                    return "function" == typeof t.getAttribute && e.CustomGroupId === t.getAttribute("data-optanongroupid")
                }),
                o = jt.dataGroupState[e],
                n = Wt(t).is(":checked");
            _r.toggleV2Category(null, o, n, o.CustomGroupId)
        }, this.shiftBannerFocus = function(e) {
            var t = document.getElementById(_r.pcSDKSelector),
                o = "none" !== window.getComputedStyle(t).display;
            "Tab" !== e.code || o || Pn.handleBannerFocus(e, e.shiftKey)
        }, this.toggleSubCategory = function(e, t, o, n) {
            t = t || this.getAttribute("data-optanongroupid");
            var r, i = io.getGroupById(t);
            void 0 === o && (o = Wt(this).is(":checked")), n ? (Nt.setCheckedAttribute("#ot-sub-group-id-" + n, null, o), r = document.querySelector("#ot-sub-group-id-" + n)) : (r = this, Nt.setCheckedAttribute(null, this, o)), Mt.PCShowConsentLabels && (r.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? Mt.PCActiveText : Mt.PCInactiveText);
            var s = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            _r.setAriaLabelforButtonInFilter(i.GroupName), _r.updateSubGroupToggles(i, o, s), Gn.setVendorStateByGroup(i, o)
        }
    }
    var Br, wr = (xr.prototype.updateDataSubjectTimestamp = function() {
        var e = no.alertBoxCloseDate(),
            t = e && Jt.getUTCFormattedDate(e);
        Wt(".ot-userid-timestamp").html(Mt.PCenterUserIdTimestampTitleText + ": " + t)
    }, xr.prototype.closeBanner = function(e) {
        this.closeOptanonAlertBox(), e ? this.allowAll(!1) : this.close(!1)
    }, xr.prototype.allowAll = function(e, t) {
        void 0 === t && (t = !1), wt.moduleInitializer.MobileSDK ? window.OneTrust.AllowAll() : this.AllowAllV2(e, t)
    }, xr.prototype.bannerActionsHandler = function(t, n, e) {
        var r = this;
        void 0 === e && (e = !1), _o.setLandingPathParam(xe), jt.groupsConsent = [], jt.hostsConsent = [], jt.genVendorsConsent = {};
        var i = {};
        Mt.Groups.forEach(function(e) {
            if (e.IsAboutGroup) return !1;
            u(e.SubGroups, [e]).forEach(function(e) {
                var o = r.getGroupStatus(t, n, e);
                r.setGroupConsent(o, e), e.Hosts.length && Jt.isOptOutEnabled() && e.Hosts.forEach(function(e) {
                    if (i[e.HostId]) To.updateHostStatus(e, o);
                    else {
                        i[e.HostId] = !0;
                        var t = To.isHostPartOfAlwaysActiveGroup(e.HostId) || o;
                        jt.hostsConsent.push(e.HostId + ":" + (t ? "1" : "0"))
                    }
                }), jt.genVenOptOutEnabled && e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                    Po.updateGenVendorStatus(e, o)
                })
            })
        }), Mt.IsIabEnabled && (t ? this.iab.allowAllhandler() : this.iab.rejectAllHandler(e)), Yn.removeAddedOTCssStyles(), ar.hideConsentNoticeV2(), Co.writeGrpParam(Ge.OPTANON_CONSENT), Co.writeHstParam(Ge.OPTANON_CONSENT), jt.genVenOptOutEnabled && Co.writeGenVenCookieParam(Ge.OPTANON_CONSENT), jt.vsIsActiveAndOptOut && Co.writeVSConsentCookieParam(Ge.OPTANON_CONSENT), _n.substitutePlainTextScriptTags(), jn.updateGtmMacros(), this.executeOptanonWrapper()
    }, xr.prototype.getGroupStatus = function(e, t, o) {
        return !!e || !!t && io.isAlwaysActiveGroup(o)
    }, xr.prototype.setGroupConsent = function(e, t) {
        -1 < _t.indexOf(t.Type) && jt.groupsConsent.push(t.CustomGroupId + ":" + (e && t.HasConsentOptOut ? "1" : "0"))
    }, xr.prototype.nextPageCloseBanner = function() {
        _o.isLandingPage() || no.isAlertBoxClosedAndValid() || this.closeBanner(Mt.NextPageAcceptAllCookies)
    }, xr.prototype.rmScrollAndClickBodyEvents = function() {
        Mt.ScrollCloseBanner && window.removeEventListener("scroll", this.scrollCloseBanner), Mt.OnClickCloseBanner && document.body.removeEventListener("click", this.bodyClickEvent)
    }, xr.prototype.onClickCloseBanner = function(e) {
        no.isAlertBoxClosedAndValid() || (wo.triggerGoogleAnalyticsEvent(Do, Ho), this.closeBanner(Mt.OnClickAcceptAllCookies), e.stopPropagation()), Br.rmScrollAndClickBodyEvents()
    }, xr.prototype.scrollCloseBanner = function() {
        var e = Wt(document).height() - Wt(window).height();
        0 === e && (e = Wt(window).height());
        var t = 100 * Wt(window).scrollTop() / e;
        t <= 0 && (t = 100 * (document.scrollingElement && document.scrollingElement.scrollTop || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop) / (document.scrollingElement && document.scrollingElement.scrollHeight || document.documentElement && document.documentElement.scrollHeight || document.body && document.body.scrollHeight)), 25 < t && !no.isAlertBoxClosedAndValid() && (!jt.isPCVisible || Mt.NoBanner) ? (wo.triggerGoogleAnalyticsEvent(Do, Ho), Br.closeBanner(Mt.ScrollAcceptAllCookies), Br.rmScrollAndClickBodyEvents()) : no.isAlertBoxClosedAndValid() && Br.rmScrollAndClickBodyEvents()
    }, xr.prototype.AllowAllV2 = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = this.groupsClass.getAllGroupElements(), n = 0; n < o.length; n++) {
            var r = io.getGroupById(o[n].getAttribute("data-optanongroupid"));
            this.groupsClass.toggleGrpElements(o[n], r, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !1, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !0, !0)
        }
        jt.showVendorService && Gn.consentAll(!0), this.bannerActionsHandler(!0, !1), this.consentTransactions(e, !0, t), Mt.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!0), this.updateVendorLegBtns(!0))
    }, xr.prototype.rejectAll = function(e, t) {
        void 0 === t && (t = !1);
        var o, n, r = t ? U[5] : U[2],
            i = this.groupsClass.getAllGroupElements();
        n = wt.fp.CookieV2RejectAll ? (o = this.initializeObjectToLIRejectAll(t), this.initializeAllowLIRejectAll(t)) : !(o = !0);
        for (var s = 0; s < i.length; s++) {
            var a = io.getGroupById(i[s].getAttribute("data-optanongroupid"));
            "always active" !== io.getGrpStatus(a).toLowerCase() && (Tn.toggleGrpElements(i[s], a, !1, n), this.groupsClass.toogleSubGroupElement(i[s], !1, !1, !0), (!Mt.IsIabEnabled || Mt.IsIabEnabled && o) && this.groupsClass.toogleSubGroupElement(i[s], !1, !0, !0))
        }
        jt.showVendorService && Gn.consentAll(!1), this.bannerActionsHandler(!1, !0, n), r !== jt.consentInteractionType && this.consentTransactions(e, !1, t), Mt.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!1, n), n || this.updateVendorLegBtns(!1))
    }, xr.prototype.initializeObjectToLIRejectAll = function(e) {
        return !e && Mt.BannerShowRejectAllButton && Mt.BRejectConsentType === Pe.OBJECT_TO_LI || e && Mt.PCenterShowRejectAllButton && Mt.BRejectConsentType === Pe.OBJECT_TO_LI
    }, xr.prototype.initializeAllowLIRejectAll = function(e) {
        return Mt.IsIabEnabled && (!e && Mt.BannerShowRejectAllButton && Mt.BRejectConsentType === Pe.LI_ACTIVE_IF_LEGAL_BASIS || e && Mt.PCenterShowRejectAllButton && Mt.BRejectConsentType === Pe.LI_ACTIVE_IF_LEGAL_BASIS)
    }, xr.prototype.executeCustomScript = function() {
        Mt.CustomJs && new Function(Mt.CustomJs)()
    }, xr.prototype.updateConsentData = function(e) {
        _o.setLandingPathParam(xe), Mt.IsIabEnabled && !e && this.iab.saveVendorStatus(), Co.writeGrpParam(Ge.OPTANON_CONSENT), Co.writeHstParam(Ge.OPTANON_CONSENT), jt.showGeneralVendors && Mt.GenVenOptOut && Co.writeGenVenCookieParam(Ge.OPTANON_CONSENT), jt.vsIsActiveAndOptOut && Co.writeVSConsentCookieParam(Ge.OPTANON_CONSENT), _n.substitutePlainTextScriptTags(), jn.updateGtmMacros()
    }, xr.prototype.close = function(e, t) {
        if (void 0 === t && (t = m.Banner), ar.hideConsentNoticeV2(), this.updateConsentData(e), Mt.IsConsentLoggingEnabled) {
            var o = t === m.PC ? or : t === m.Banner ? Zn : qt.apiSource,
                n = t === m.PC ? Qn : t === m.Banner ? Xn : $n;
            jt.bannerCloseSource === f.ContinueWithoutAcceptingButton && (o = rr), jt.bannerCloseSource === f.BannerSaveSettings && (o = nr), lo.createConsentTxn(!1, n + " - " + o, t === m.PC)
        } else no.dispatchConsentEvent();
        this.executeOptanonWrapper()
    }, xr.prototype.executeOptanonWrapper = function() {
        try {
            if (this.executeCustomScript(), "function" == typeof window.OptanonWrapper && "undefined" !== window.OptanonWrapper) {
                window.OptanonWrapper();
                for (var e = 0, t = jt.srcExecGrpsTemp; e < t.length; e++) {
                    var o = t[e]; - 1 === jt.srcExecGrps.indexOf(o) && jt.srcExecGrps.push(o)
                }
                jt.srcExecGrpsTemp = [];
                for (var n = 0, r = jt.htmlExecGrpsTemp; n < r.length; n++) o = r[n], -1 === jt.htmlExecGrps.indexOf(o) && jt.htmlExecGrps.push(o);
                jt.htmlExecGrpsTemp = []
            }
        } catch (e) {
            console.warn("Error in Optanon wrapper, please review your code. " + e)
        }
    }, xr.prototype.updateVendorLegBtns = function(e) {
        if (qt.legIntSettings.PAllowLI && qt.legIntSettings.PShowLegIntBtn)
            for (var t = Wt($t.P_Vendor_Container + " .ot-leg-btn-container").el, o = 0; o < t.length; o++) this.groupsClass.updateLegIntBtnElement(t[o], e)
    }, xr.prototype.showFltgCkStgButton = function() {
        var e = Wt("#ot-sdk-btn-floating");
        e.removeClass("ot-hide"), e.removeClass("ot-pc-open"), Mt.cookiePersistentLogo.includes("ot_guard_logo.svg") && Wt(".ot-floating-button__front svg").attr("aria-hidden", ""), Wt(".ot-floating-button__back svg").attr("aria-hidden", "true")
    }, xr.prototype.consentTransactions = function(e, t, o) {
        void 0 === o && (o = !1), lo && !e && Mt.IsConsentLoggingEnabled ? lo.createConsentTxn(!1, (o ? Qn : Xn) + " - " + (t ? er : tr), o) : no.dispatchConsentEvent()
    }, xr.prototype.hideVendorsList = function() {
        ar.checkIfPcSdkContainerExist() || (Mt.PCTemplateUpgrade ? Wt("#onetrust-pc-sdk " + $t.P_Content).removeClass("ot-hide") : Wt("#onetrust-pc-sdk .ot-main-content").show(), Wt("#onetrust-pc-sdk #close-pc-btn-handler.main").show(), Wt("#onetrust-pc-sdk " + $t.P_Vendor_List).addClass("ot-hide"))
    }, xr.prototype.resetConsent = function() {
        var e = this;
        jt.groupsConsent = JSON.parse(JSON.stringify(jt.initialGroupsConsent)), jt.hostsConsent = JSON.parse(JSON.stringify(jt.initialHostConsent)), jt.showGeneralVendors && (jt.genVendorsConsent = JSON.parse(JSON.stringify(jt.initialGenVendorsConsent))), jt.vsIsActiveAndOptOut && (jt.vsConsent = new Map(jt.initialVendorsServiceConsent)), Mt.IsIabEnabled && (jt.oneTrustIABConsent = JSON.parse(JSON.stringify(jt.initialOneTrustIABConsent)), jt.vendors = JSON.parse(JSON.stringify(jt.initialVendors)), jt.vendors.vendorTemplate = jt.initialVendors.vendorTemplate), Mt.UseGoogleVendors && (jt.addtlVendors = JSON.parse(JSON.stringify(jt.initialAddtlVendors)), jt.addtlVendorsList = JSON.parse(JSON.stringify(jt.initialAddtlVendorsList))), this.updateConsentData(!1), setTimeout(function() {
            e.resetConsentUI()
        }, 400)
    }, xr.prototype.resetConsentUI = function() {
        Tn.getAllGroupElements().forEach(function(e) {
            var t = e.getAttribute("data-optanongroupid"),
                o = io.getGroupById(t),
                n = Br.isGroupActive(o, t);
            qt.pcName === dt && Mt.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
            var r = e.querySelector(".ot-label-status");
            if (Mt.PCShowConsentLabels && r && (r.innerHTML = n ? Mt.PCActiveText : Mt.PCInactiveText), o.Type === mt || o.Type === It) {
                var i = Jt.isBundleOrStackActive(o, jt.initialGroupsConsent),
                    s = e.querySelector('input[class*="category-switch-handler"]');
                Nt.setCheckedAttribute(null, s, i);
                for (var a = e.querySelectorAll("li" + $t.P_Subgrp_li), l = 0; l < a.length; l++) {
                    var c = io.getGroupById(a[l].getAttribute("data-optanongroupid")),
                        d = c.OptanonGroupId,
                        u = Br.isGroupActive(c, d),
                        p = a[l].querySelector('input[class*="cookie-subgroup-handler"]'),
                        h = a[l].querySelector(".ot-label-status");
                    Mt.PCShowConsentLabels && h && (r.innerHTML = u ? Mt.PCActiveText : Mt.PCInactiveText), Nt.setCheckedAttribute(null, p, u), Br.resetLegIntButton(c, a[l])
                }
            } else s = e.querySelector('input[class*="category-switch-handler"]'), Nt.setCheckedAttribute(null, s, n), Br.resetLegIntButton(o, e)
        }), Mt.IsIabEnabled && hr.toggleVendorConsent();
        var e = Wt("#onetrust-pc-sdk .ot-gnven-chkbox-handler").el;
        if (jt.showGeneralVendors && e && e.length) {
            for (var t = 0, o = e; t < o.length; t++) {
                var n = (l = o[t]).getAttribute("gn-vid"),
                    r = Boolean(jt.genVendorsConsent[n]);
                Nt.setCheckedAttribute("", l, r), Po.updateGenVendorStatus(n, r)
            }
            Bn.genVenSelectAllTglEvent()
        }
        var i = Wt("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el;
        if (Mt.UseGoogleVendors && i && i.length)
            for (var s = 0, a = i; s < a.length; s++) {
                var l;
                n = (l = a[s]).getAttribute("addtl-vid"), jt.addtlVendorsList[n] && (r = Boolean(jt.addtlVendors.vendorSelected[n]), Nt.setCheckedAttribute("", l, r))
            }
        jt.vsIsActiveAndOptOut && Gn.resetVendorUIState(jt.vsConsent)
    }, xr.prototype.isGroupActive = function(e, t) {
        var o;
        if (e.IabGrpId) {
            var n = void 0;
            n = e.Type === At ? jt.initialVendors.selectedSpecialFeatures : e.IsLegIntToggle ? jt.initialVendors.selectedLegInt : jt.initialVendors.selectedPurpose, o = -1 !== zt.inArray(e.IabGrpId + ":true", n)
        } else o = -1 !== zt.inArray(t + ":1", jt.initialGroupsConsent);
        return o
    }, xr.prototype.resetLegIntButton = function(e, t) {
        if (qt.legIntSettings.PAllowLI && e.Type === St && e.HasLegIntOptOut && qt.legIntSettings.PShowLegIntBtn) {
            var o = !0; - 1 < jt.vendors.selectedLegInt.indexOf(e.IabGrpId + ":false") && (o = !1), Tn.updateLegIntBtnElement(t, o)
        }
    }, xr.prototype.handleTogglesOnSingularConsentUpdate = function(e, t, o) {
        if (this.closeOptanonAlertBox(), e === gt)
            for (var n = io.getGroupById(t), r = this.groupsClass.getAllGroupElements(), i = 0; i < r.length; i++) {
                var s = io.getGroupById(r[i].getAttribute("data-optanongroupid"));
                if (s.OptanonGroupId === n.OptanonGroupId && !s.Parent) {
                    _r.toggleV2Category(null, s, o, s.CustomGroupId);
                    break
                }
                var a = s.SubGroups.find(function(e) {
                    return e.OptanonGroupId === n.OptanonGroupId
                });
                a && _r.toggleSubCategory(null, a.CustomGroupId, o, a.CustomGroupId)
            } else if (e === ft) {
                var l = io.getGrpByVendorId(t);
                l && Gn.toggleVendorService(l.CustomGroupId, t, o)
            }
        this.close(!1, m.API)
    }, xr);

    function xr() {
        var o = this;
        this.iab = Bn, this.groupsClass = Tn, this.closeOptanonAlertBox = function() {
            if (Jt.hideBanner(), Mt.NtfyConfig.ShowNtfy && dr.hideSyncNtfy(), qt.isOptInMode || !qt.isOptInMode && !no.isAlertBoxClosedAndValid()) wo.setAlertBoxClosed(!0), Mt.PCTemplateUpgrade && Mt.PCenterUserIdTitleText && Mt.IsConsentLoggingEnabled && o.updateDataSubjectTimestamp();
            else if (no.isAlertBoxClosedAndValid()) {
                var e = Wt(".onetrust-pc-dark-filter").el[0];
                e && "none" !== getComputedStyle(e).getPropertyValue("display") && Wt(".onetrust-pc-dark-filter").fadeOut(400)
            }
            yn.csBtnGroup && o.showFltgCkStgButton()
        }, this.bodyClickEvent = function(e) {
            var t = e.target;
            t.closest("#onetrust-banner-sdk") || t.closest("#onetrust-pc-sdk") || t.closest(".onetrust-pc-dark-filter") || t.closest(".ot-sdk-show-settings") || t.closest(".optanon-show-settings") || t.closest(".optanon-toggle-display") || Br.onClickCloseBanner(e)
        }, this.bannerCloseButtonHandler = function(e) {
            if (void 0 === e && (e = !1), Br.closeOptanonAlertBox(), wt.moduleInitializer.MobileSDK) window.OneTrust.Close();
            else {
                var t = jt.bannerCloseSource === f.ConfirmChoiceButton ? m.PC : m.Banner;
                Br.close(e, t)
            }
            return !1
        }, this.allowAllEventHandler = function(e) {
            void 0 === e && (e = !1), Wt(document).off("keydown", _r.shiftBannerFocus);
            var t = e ? "Preferences Allow All" : "Banner Accept Cookies";
            wo.triggerGoogleAnalyticsEvent(Do, t), o.allowAllEvent(!1, e), o.hideVendorsList()
        }, this.allowAllEvent = function(e, t) {
            void 0 === e && (e = !1), void 0 === t && (t = !1), o.closeOptanonAlertBox(), Br.allowAll(e, t)
        }, this.rejectAllEventHandler = function(e) {
            void 0 === e && (e = !1), Wt(document).off("keydown", _r.shiftBannerFocus);
            var t = e ? "Preferences Reject All" : "Banner Reject All";
            wo.triggerGoogleAnalyticsEvent(Do, t), wt.moduleInitializer.MobileSDK ? window.OneTrust.RejectAll() : (o.rejectAllEvent(!1, e), o.hideVendorsList())
        }, this.rejectAllEvent = function(e, t) {
            void 0 === e && (e = !1), void 0 === t && (t = !1), o.closeOptanonAlertBox(), no.isIABCrossConsentEnabled() ? qt.thirdPartyiFrameLoaded ? o.rejectAll(e, t) : qt.thirdPartyiFramePromise.then(function() {
                o.rejectAll(e, t)
            }) : o.rejectAll(e, t)
        }
    }
    var Or, Gr = (Nr.prototype.insertCookiePolicyHtml = function() {
        if (Wt(this.ONETRUST_COOKIE_POLICY).length) {
            var e, t = document.createDocumentFragment();
            if (yn.cookieListGroup) {
                var o = Mt.CookiesV2NewCookiePolicy ? ".ot-sdk-cookie-policy" : "#ot-sdk-cookie-policy-v2",
                    n = document.createElement("div");
                Wt(n).html(yn.cookieListGroup.html), n.removeChild(n.querySelector(o)), e = n.querySelector(".ot-sdk-cookie-policy"), Mt.useRTL && Wt(e).attr("dir", "rtl")
            }
            e.querySelector("#cookie-policy-title").innerHTML = Mt.CookieListTitle || "", e.querySelector("#cookie-policy-description").innerHTML = Mt.CookieListDescription || "";
            var r = e.querySelector("section"),
                i = e.querySelector("section tbody tr"),
                s = null,
                a = null;
            Mt.CookiesV2NewCookiePolicy || (s = e.querySelector("section.subgroup"), a = e.querySelector("section.subgroup tbody tr"), Wt(e).el.removeChild(e.querySelector("section.subgroup"))), Wt(e).el.removeChild(e.querySelector("section")), !Wt(this.COOKIE_POLICY_SELECTOR).length && Wt(this.OPTANON_POLICY_SELECTOR).length ? Wt(this.OPTANON_POLICY_SELECTOR).append('<div id="ot-sdk-cookie-policy"></div>') : (Wt(this.COOKIE_POLICY_SELECTOR).html(""), Wt(this.OPTANON_POLICY_SELECTOR).html(""));
            for (var l = 0, c = Mt.Groups; l < c.length; l++) {
                var d = c[l],
                    u = {
                        json: Mt,
                        group: d,
                        sectionTemplate: r,
                        tableRowTemplate: i,
                        cookieList: e,
                        fragment: t
                    };
                if (Mt.CookiesV2NewCookiePolicy) this.insertGroupHTMLV2(u);
                else if (this.insertGroupHTML(u), d.ShowSubgroup)
                    for (var p = 0, h = d.SubGroups; p < h.length; p++) {
                        var g = h[p],
                            C = {
                                json: Mt,
                                group: g,
                                sectionTemplate: s,
                                tableRowTemplate: a,
                                cookieList: e,
                                fragment: t
                            };
                        this.insertGroupHTML(C)
                    }
            }
        }
    }, Nr.prototype.insertGroupHTMLV2 = function(e) {
        function t(e) {
            return c.querySelector(e)
        }
        var o = this,
            n = e.json,
            r = e.group,
            i = e.sectionTemplate,
            s = e.tableRowTemplate,
            a = e.cookieList,
            l = e.fragment,
            c = i.cloneNode(!0),
            d = r.SubGroups;
        Wt(t("tbody")).html("");
        var u = r.Hosts.slice(),
            p = r.FirstPartyCookies.slice(),
            h = u.length || p.length ? r.GroupName : "";
        if (r.ShowSubgroup && d.length) {
            var g = c.querySelector("section.ot-sdk-subgroup ul li");
            d.forEach(function(e) {
                var t = g.cloneNode(!0);
                u = u.concat(e.Hosts), p = p.concat(e.FirstPartyCookies), (e.Hosts.length || e.FirstPartyCookies.length) && (h += "," + e.GroupName), Wt(t.querySelector(".ot-sdk-cookie-policy-group")).html(e.GroupName), Wt(t.querySelector(".ot-sdk-cookie-policy-group-desc")).html(o.groupsClass.safeFormattedGroupDescription(e)), Wt(g.parentElement).append(t)
            }), c.querySelector("section.ot-sdk-subgroup ul").removeChild(g)
        } else c.removeChild(c.querySelector("section.ot-sdk-subgroup"));
        n.IsLifespanEnabled ? Wt(t("th.ot-life-span")).el.innerHTML = n.LifespanText : Wt(t("thead tr")).el.removeChild(Wt(t("th.ot-life-span")).el), Wt(t("th.ot-cookies")).el.innerHTML = n.CookiesText, Wt(t("th.ot-host")).el.innerHTML = n.CategoriesText, Wt(t("th.ot-cookies-type")).el.innerHTML = n.CookiesUsedText;
        var C = this.transformFirstPartyCookies(p, u, r),
            y = !1;
        C.some(function(e) {
            return e.Description
        }) ? y = !0 : Wt(t("thead tr")).el.removeChild(Wt(t("th.ot-host-description")).el), Wt(t(".ot-sdk-cookie-policy-group")).html(r.GroupName), Wt(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(r)), this.insertHostHtmlV2({
            json: n,
            hosts: C,
            tableRowTemplate: s,
            showHostDescription: y,
            st: t
        }), 0 === C.length ? c.removeChild(c.querySelector("table")) : Wt(t("caption")).el.innerHTML = h, Wt(a).append(c), Wt(l).append(a), Wt(this.COOKIE_POLICY_SELECTOR).append(l)
    }, Nr.prototype.insertHostHtmlV2 = function(e) {
        for (var d, u = e.json, t = e.hosts, p = e.tableRowTemplate, h = e.showHostDescription, g = e.st, C = "data-label", y = ".ot-host-td", o = function(e) {
                function t(e) {
                    return o.querySelector(e)
                }
                var o = p.cloneNode(!0);
                Wt(t(".ot-cookies-td span")).text(""), Wt(t(".ot-life-span-td span")).text(""), Wt(t(".ot-cookies-type span")).text(""), Wt(t(".ot-cookies-td .ot-cookies-td-content")).html(""), Wt(t(y)).html(""), Wt(t(".ot-host-description-td")).html('<span class="ot-mobile-border"></span><p>' + e.Description + "</p> ");
                for (var n = [], r = [], i = 0, s = e.Cookies; i < s.length; i++) {
                    var a = s[i];
                    (d = a).IsSession ? n.push(u.LifespanTypeText) : n.push(Jt.getDuration(d));
                    var l = d.Name;
                    e.Type && (l = '\n                    <a href="https://cookiepedia.co.uk/cookies/' + d.Name + '" \n                        rel="noopener" target="_blank" aria-label="' + d.Name + " " + Mt.NewWinTxt + '">\n                        ' + d.Name + "\n                    </a>"), r.push(l)
                }
                Wt(t(y)).append('<span class="ot-mobile-border"></span>'), t(y).setAttribute(C, u.CategoriesText), t(".ot-cookies-td").setAttribute(C, u.CookiesText), t(".ot-cookies-type").setAttribute(C, u.CookiesUsedText), t(".ot-life-span-td").setAttribute(C, u.LifespanText);
                var c = e.DisplayName || e.HostName;
                Wt(t(y)).append(e.Type ? c : '<a href="https://cookiepedia.co.uk/host/' + d.Host + '" rel="noopener" target="_blank" \n                        aria-label="' + c + " " + Mt.NewWinTxt + '">\n                        ' + c + "\n                        </a>"), t(".ot-cookies-td .ot-cookies-td-content").insertAdjacentHTML("beforeend", r.join(", ")), t(".ot-life-span-td .ot-life-span-td-content").innerText = n.join(", "), t(".ot-cookies-type .ot-cookies-type-td-content").innerText = e.Type ? Mt.firstPartyTxt : Mt.thirdPartyTxt, u.IsLifespanEnabled || o.removeChild(t("td.ot-life-span-td")), h || o.removeChild(t("td.ot-host-description-td")), Wt(g("tbody")).append(o)
            }, n = 0, r = t; n < r.length; n++) o(r[n])
    }, Nr.prototype.insertGroupHTML = function(e) {
        function t(e) {
            return c.querySelector(e)
        }
        var o, n = e.json,
            r = e.group,
            i = e.sectionTemplate,
            s = e.tableRowTemplate,
            a = e.cookieList,
            l = e.fragment,
            c = i.cloneNode(!0);
        Wt(t("caption")).el.innerHTML = r.GroupName, Wt(t("tbody")).html(""), Wt(t("thead tr")), n.IsLifespanEnabled ? Wt(t("th.life-span")).el.innerHTML = n.LifespanText : Wt(t("thead tr")).el.removeChild(Wt(t("th.life-span")).el), Wt(t("th.cookies")).el.innerHTML = n.CookiesText, Wt(t("th.host")).el.innerHTML = n.CategoriesText;
        var d = !1;
        if (r.Hosts.some(function(e) {
                return e.description
            }) ? d = !0 : Wt(t("thead tr")).el.removeChild(Wt(t("th.host-description")).el), Wt(t(".ot-sdk-cookie-policy-group")).html(r.GroupName), Wt(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(r)), 0 < r.FirstPartyCookies.length) {
            Wt(t(".cookies-used-header")).html(n.CookiesUsedText), Wt(t(".cookies-list")).html("");
            for (var u = 0; u < r.FirstPartyCookies.length; u++) o = r.FirstPartyCookies[u], Wt(t(".cookies-list")).append("<li> " + Jt.getCookieLabel(o, n.AddLinksToCookiepedia) + " <li>")
        } else c.removeChild(t(".cookies-used-header")), c.removeChild(t(".cookies-list"));
        this.insertHostHtmlV1({
            json: n,
            hosts: r.Hosts,
            tableRowTemplate: s,
            showHostDescription: d,
            st: t
        }), Wt(a).append(c), Wt(l).append(a), Wt(this.COOKIE_POLICY_SELECTOR).append(l)
    }, Nr.prototype.insertHostHtmlV1 = function(e) {
        for (var d = e.json, t = e.hosts, u = e.tableRowTemplate, p = e.showHostDescription, h = e.st, o = function(e) {
                function t(e) {
                    return o.querySelector(e)
                }
                var o = u.cloneNode(!0);
                Wt(t(".cookies-td ul")).html(""), Wt(t(".life-span-td ul")).html(""), Wt(t(".host-td")).html(""), Wt(t(".host-description-td")).html('<span class="ot-mobile-border"></span><p>' + e.Description + "</p> ");
                for (var n = 0, r = 0, i = e.Cookies; r < i.length; r++) {
                    var s = i[r],
                        a = "";
                    a = s.IsSession ? d.LifespanTypeText : 0 === s.Length ? "<1 " + d.LifespanDurationText || d.PCenterVendorListLifespanDays : s.Length + " " + d.LifespanDurationText || d.PCenterVendorListLifespanDays;
                    var l = d.IsLifespanEnabled ? "&nbsp;(" + a + ")" : "";
                    if (Wt(t(".cookies-td ul")).append("<li> " + s.Name + " " + l + " </li>"), d.IsLifespanEnabled) {
                        var c = s.Length ? s.Length + " days" : "N/A";
                        Wt(t(".life-span-td ul")).append("<li>" + c + "</li>")
                    }
                    0 === n && (Wt(t(".host-td")).append('<span class="ot-mobile-border"></span>'), Wt(t(".host-td")).append('<a href="https://cookiepedia.co.uk/host/' + s.Host + '" rel="noopener" target="_blank"\n                        aria-label="' + (e.DisplayName || e.HostName) + " " + Mt.NewWinTxt + '">' + (e.DisplayName || e.HostName) + "</a>")), n++
                }
                p || o.removeChild(t("td.host-description-td")), Wt(h("tbody")).append(o)
            }, n = 0, r = t; n < r.length; n++) o(r[n]);
        0 === t.length && Wt(h("table")).el.removeChild(Wt(h("thead")).el)
    }, Nr.prototype.transformFirstPartyCookies = function(e, t, o) {
        var n = this,
            r = t.slice();
        e.forEach(function(e) {
            n.populateHostGroup(e, r, Mt.firstPartyTxt)
        });
        var i = o.GeneralVendorsIds;
        this.populateGenVendor(i, o, r);
        var s = o.SubGroups;
        return s.length && s.forEach(function(e) {
            var t = e.GeneralVendorsIds;
            n.populateGenVendor(t, e, r)
        }), r
    }, Nr.prototype.populateGenVendor = function(e, o, n) {
        var r = this;
        e.length && e.forEach(function(t) {
            var e = Mt.GeneralVendors.find(function(e) {
                return e.VendorCustomId === t
            });
            e.Cookies.length && e.Cookies.forEach(function(e) {
                if (e.category === o.GroupName) {
                    var t = e.isThirdParty ? "" : Mt.firstPartyTxt;
                    r.populateHostGroup(e, n, t)
                }
            })
        })
    }, Nr.prototype.populateHostGroup = function(t, e, o) {
        e.some(function(e) {
            if (e.HostName === t.Host && e.Type === o) return e.Cookies.push(t), !0
        }) || e.unshift({
            HostName: t.Host,
            DisplayName: t.Host,
            HostId: "",
            Description: "",
            Type: o,
            Cookies: [t]
        })
    }, Nr);

    function Nr() {
        this.groupsClass = Tn, this.COOKIE_POLICY_SELECTOR = "#ot-sdk-cookie-policy", this.OPTANON_POLICY_SELECTOR = "#optanon-cookie-policy", this.ONETRUST_COOKIE_POLICY = "#ot-sdk-cookie-policy, #optanon-cookie-policy"
    }
    var Dr, Hr = (Fr.prototype.initBanner = function() {
        this.canImpliedConsentLandingPage(), wt.moduleInitializer.CookieSPAEnabled ? Wt(window).on("otloadbanner", this.windowLoadBanner.bind(this)) : Wt(window).one("otloadbanner", this.windowLoadBanner.bind(this))
    }, Fr.prototype.insertCSBtnHtmlAndCss = function(e) {
        document.getElementById("onetrust-style").innerHTML += yn.csBtnGroup.css;
        var t = document.createElement("div");
        Wt(t).html(yn.csBtnGroup.html);
        var o = t.querySelector("#ot-sdk-btn-floating");
        e && o && Wt(o).removeClass("ot-hide"), Wt("#onetrust-consent-sdk").append(o), Mt.cookiePersistentLogo && (Mt.cookiePersistentLogo.includes("ot_guard_logo.svg") ? this.applyPersistentSvgOnDOM() : Wt(".ot-floating-button__front, .ot-floating-button__back").addClass("custom-persistent-icon"))
    }, Fr.prototype.applyPersistentSvgOnDOM = function() {
        return d(this, void 0, void 0, function() {
            var t;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, hn.getPersistentCookieSvg()];
                    case 1:
                        return t = e.sent(), Wt(this.FLOATING_COOKIE_FRONT_BTN).html(t), _r.otGuardLogoResolve(!0), [2]
                }
            })
        })
    }, Fr.prototype.canImpliedConsentLandingPage = function() {
        this.isImpliedConsent() && !_o.isLandingPage() && "true" === Gt.readCookieParam(Ge.OPTANON_CONSENT, _e) && this.checkForRefreshCloseImplied()
    }, Fr.prototype.isImpliedConsent = function() {
        return Mt.ConsentModel && "implied consent" === Mt.ConsentModel.Name.toLowerCase()
    }, Fr.prototype.checkForRefreshCloseImplied = function() {
        Br.closeOptanonAlertBox(), Br.close(!0)
    }, Fr.prototype.hideCustomHtml = function() {
        var e = document.getElementById("onetrust-banner-sdk");
        e && xt(e, "display: none;")
    }, Fr.prototype.windowLoadBanner = function() {
        return d(this, void 0, void 0, function() {
            var t, o, n, r, i, s;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return this.core.substitutePlainTextScriptTags(), t = wt.moduleInitializer, Wt("#onetrust-consent-sdk").length ? n = document.getElementById("onetrust-consent-sdk") : (n = document.createElement("div"), Wt(n).attr("id", "onetrust-consent-sdk"), Wt(document.body).append(n)), Wt(".onetrust-pc-dark-filter").length || (o = document.createElement("div"), Wt(o).attr("class", "onetrust-pc-dark-filter"), Wt(o).attr("class", "ot-hide"), Wt(o).attr("class", "ot-fade-in"), n.firstChild ? n.insertBefore(o, n.firstChild) : Wt(n).append(o)), Mt.IsIabEnabled && this.iab.updateIabVariableReference(), r = no.isAlertBoxClosedAndValid(), i = Mt.ShowAlertNotice && !r && !Mt.NoBanner && !jt.hideBanner, s = Mt.ShowAlertNotice && !r && Mt.NoBanner, jt.ntfyRequired ? (this.hideCustomHtml(), dr.init(), dr.changeState()) : i ? _r.initializeAlartHtmlAndHandler() : this.hideCustomHtml(), t.IsSuppressPC || (Hn.insertPcHtml(), _r.initialiseConsentNoticeHandlers(), Mt.IsIabEnabled && this.iab.InitializeVendorList()), this.initializeHbbTvScript(), this.insertCSBtn(!i), s ? [4, _r.toggleInfoDisplay()] : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return _r.insertCookieSettingText(), this.initializeFloatingButtonOnBannerLoad(s), Dr.insertTrackigTechOrCookiePolicy(), Br.executeOptanonWrapper(), this.initializeCookieParamsOnBannerLoad(i), [2]
                }
            })
        })
    }, Fr.prototype.initializeFloatingButtonOnBannerLoad = function(e) {
        var t = Wt(this.FLOATING_COOKIE_BTN),
            o = Wt(this.FLOATING_COOKIE_FRONT_BTN),
            n = Wt(this.FLOATING_COOKIE_BACK_BTN);
        t.length && (t.attr("title", Mt.CookieSettingButtonText), o.el[0].setAttribute("aria-label", Mt.AriaOpenPreferences), n.el[0].setAttribute("aria-label", Mt.AriaClosePreferences), e ? o.el[0].setAttribute("aria-hidden", !0) : n.el[0].setAttribute("aria-hidden", !0))
    }, Fr.prototype.initializeCookieParamsOnBannerLoad = function(e) {
        Gt.readCookieParam(Ge.OPTANON_CONSENT, yo) || Co.writeGrpParam(Ge.OPTANON_CONSENT), Gt.readCookieParam(Ge.OPTANON_CONSENT, fo) || Co.writeHstParam(Ge.OPTANON_CONSENT), jt.showGeneralVendors && !Gt.readCookieParam(Ge.OPTANON_CONSENT, vo) && Co.writeGenVenCookieParam(Ge.OPTANON_CONSENT), jt.vsIsActiveAndOptOut && !Gt.readCookieParam(Ge.OPTANON_CONSENT, ko) && Co.writeVSConsentCookieParam(Ge.OPTANON_CONSENT), e && Pn.setBannerFocus()
    }, Fr.prototype.initializeHbbTvScript = function() {
        if (wt.moduleInitializer.RemoteActionsEnabled) {
            var e = document.getElementById("hbbtv");
            e && e.remove();
            var t = document.createElement("script");
            t.id = "hbbtv", t.src = jt.storageBaseURL + "/scripttemplates/" + wt.moduleInitializer.Version + "/hbbtv.js", t.type = "text/javascript", Wt(document.body).append(t)
        }
    }, Fr.prototype.insertCSBtn = function(e) {
        yn.csBtnGroup && (this.insertCSBtnHtmlAndCss(e), _r.initFlgtCkStgBtnEventHandlers())
    }, Fr.prototype.insertTrackingTechnologies = function() {
        if (Wt("#ot-sdk-cookie-policy, #optanon-cookie-policy").length)
            if (window.OnetrustCookiePolicy && window.OnetrustCookiePolicy.InsertCookiePolicyHtml) window.OnetrustCookiePolicy.InsertCookiePolicyHtml(Jt, Mt, Wt);
            else {
                var e = document.createElement("script");
                e.id = "cookie-policy-script", e.onload = function() {
                    return window.OnetrustCookiePolicy.InsertCookiePolicyHtml(Jt, Mt, Wt)
                }, e.type = "text/javascript", e.src = jt.storageBaseURL + "/scripttemplates/" + wt.moduleInitializer.Version + "/trackingTechnologies.js", document.head.appendChild(e)
            }
    }, Fr.prototype.insertTrackigTechOrCookiePolicy = function() {
        wt.fp.CookieV2TrackingTechnologies ? Dr.insertTrackingTechnologies() : Or.insertCookiePolicyHtml()
    }, Fr);

    function Fr() {
        this.iab = Bn, this.core = _n, this.FLOATING_COOKIE_BTN = "#ot-sdk-btn-floating", this.FLOATING_COOKIE_FRONT_BTN = "#ot-sdk-btn-floating .ot-floating-button__front .ot-floating-button__open", this.FLOATING_COOKIE_BACK_BTN = "#ot-sdk-btn-floating .ot-floating-button__back .ot-floating-button__close"
    }
    var Rr, qr = (Mr.prototype.initialiseLandingPath = function() {
        var e = no.needReconsent();
        if (_o.isLandingPage()) _o.setLandingPathParam(location.href);
        else {
            if (e && !no.awaitingReconsent()) return _o.setLandingPathParam(location.href), void Gt.writeCookieParam(Ge.OPTANON_CONSENT, _e, !0);
            e || Gt.writeCookieParam(Ge.OPTANON_CONSENT, _e, !1), _o.setLandingPathParam(xe), qt.isSoftOptInMode && !wt.moduleInitializer.MobileSDK && wo.setAlertBoxClosed(!0), Mt.NextPageCloseBanner && Mt.ShowAlertNotice && Br.nextPageCloseBanner()
        }
    }, Mr);

    function Mr() {}
    var Ur, jr = (zr.prototype.IsAlertBoxClosedAndValid = function() {
        return no.isAlertBoxClosedAndValid()
    }, zr.prototype.LoadBanner = function() {
        wo.loadBanner()
    }, zr.prototype.Init = function(e) {
        void 0 === e && (e = !1), Le.insertViewPortTag(), yn.ensureHtmlGroupDataInitialised(), jn.updateGtmMacros(!1), Rr.initialiseLandingPath(), e || kr.initialiseCssReferences()
    }, zr.prototype.FetchAndDownloadPC = function() {
        _r.fetchAndSetupPC()
    }, zr.prototype.ToggleInfoDisplay = function() {
        wo.triggerGoogleAnalyticsEvent(Do, zo), _r.toggleInfoDisplay()
    }, zr.prototype.Close = function(e) {
        _r.close(e)
    }, zr.prototype.AllowAll = function(e) {
        Br.allowAllEvent(e)
    }, zr.prototype.RejectAll = function(e) {
        Br.rejectAllEvent(e)
    }, zr.prototype.setDataSubjectIdV2 = function(e, t) {
        void 0 === t && (t = !1), e && e.trim() && (e = e.replace(/ /g, ""), Gt.writeCookieParam(Ge.OPTANON_CONSENT, Ve, e, !0), jt.dsParams.isAnonymous = t)
    }, zr.prototype.getDataSubjectId = function() {
        return Gt.readCookieParam(Ge.OPTANON_CONSENT, Ve, !0)
    }, zr.prototype.synchroniseCookieWithPayload = function(i) {
        var e = Gt.readCookieParam(Ge.OPTANON_CONSENT, "groups"),
            t = Nt.strToArr(e),
            s = [];
        t.forEach(function(e) {
            var t = e.split(":"),
                o = io.getGroupById(t[0]),
                n = Nt.findIndex(i, function(e) {
                    return e.Id === o.PurposeId
                }),
                r = i[n];
            r ? r.TransactionType === Ne ? (s.push(t[0] + ":1"), o.Parent ? _r.toggleSubCategory(null, o.CustomGroupId, !0, o.CustomGroupId) : _r.toggleV2Category(null, o, !0, o.CustomGroupId)) : (s.push(t[0] + ":0"), o.Parent ? _r.toggleSubCategory(null, o.CustomGroupId, !1, o.CustomGroupId) : _r.toggleV2Category(null, o, !1, o.CustomGroupId)) : s.push(t[0] + ":" + t[1])
        }), Co.writeGrpParam(Ge.OPTANON_CONSENT, s)
    }, zr.prototype.getGeolocationData = function() {
        return jt.userLocation
    }, zr.prototype.TriggerGoogleAnalyticsEvent = function(e, t, o, n) {
        wo.triggerGoogleAnalyticsEvent(e, t, o, n)
    }, zr.prototype.ReconsentGroups = function() {
        var r = !1,
            e = Gt.readCookieParam(Ge.OPTANON_CONSENT, "groups"),
            i = Nt.strToArr(e),
            s = Nt.strToArr(e.replace(/:0|:1/g, "")),
            a = !1,
            t = Gt.readCookieParam(Ge.OPTANON_CONSENT, "hosts"),
            l = Nt.strToArr(t),
            c = Nt.strToArr(t.replace(/:0|:1/g, "")),
            d = ["inactive", "inactive landingpage", "do not track"];
        e && (Mt.Groups.forEach(function(e) {
            u(e.SubGroups, [e]).forEach(function(e) {
                var t = e.CustomGroupId,
                    o = Nt.indexOf(s, t);
                if (-1 !== o) {
                    var n = io.getGrpStatus(e).toLowerCase(); - 1 < d.indexOf(n) && (r = !0, i[o] = t + ("inactive landingpage" === n ? ":1" : ":0"))
                }
            })
        }), r && Co.writeGrpParam(Ge.OPTANON_CONSENT, i)), t && (Mt.Groups.forEach(function(e) {
            u(e.SubGroups, [e]).forEach(function(n) {
                n.Hosts.forEach(function(e) {
                    var t = Nt.indexOf(c, e.HostId);
                    if (-1 !== t) {
                        var o = io.getGrpStatus(n).toLowerCase(); - 1 < d.indexOf(o) && (a = !0, l[t] = e.HostId + ("inactive landingpage" === o ? ":1" : ":0"))
                    }
                })
            })
        }), a && Co.writeHstParam(Ge.OPTANON_CONSENT, l))
    }, zr.prototype.SetAlertBoxClosed = function(e) {
        wo.setAlertBoxClosed(e)
    }, zr.prototype.GetDomainData = function() {
        return qt.pubDomainData
    }, zr.prototype.setGeoLocation = function(e, t) {
        void 0 === t && (t = ""), jt.userLocation = {
            country: e,
            state: t
        }
    }, zr.prototype.changeLang = function(t) {
        if (t !== jt.lang) {
            var o = wt.moduleInitializer;
            hn.getLangJson(t).then(function(e) {
                e ? (qt.init(e), yn.fetchAssets(t).then(function() {
                    var e = document.getElementById("onetrust-style");
                    e && (e.textContent = ""), kr.initialiseCssReferences(), o.IsSuppressPC && !jt.isPCVisible || (Nt.removeChild(Wt("#onetrust-pc-sdk").el), jt.vendorDomInit = !1, jt.genVendorDomInit = !1, Hn.insertPcHtml(), _r.initialiseConsentNoticeHandlers(), Mt.IsIabEnabled && Bn.InitializeVendorList(), jt.isPCVisible && _r.restorePc());
                    var t = !0;
                    no.isAlertBoxClosedAndValid() || o.IsSuppressBanner && (!o.IsSuppressBanner || jt.skipAddingHTML) || Mt.NoBanner || (Nt.removeChild(Wt("#onetrust-banner-sdk").el), _r.initializeAlartHtmlAndHandler(), t = !1), Ur.initCookiePolicyAndSettings(), Nt.removeChild(Wt("#ot-sdk-btn-floating").el), Dr.insertCSBtn(t), Ur.processedHtml = null
                })) : console.error("Language:" + t + " doesn't exist for the geo rule")
            })
        }
    }, zr.prototype.initCookiePolicyAndSettings = function(e) {
        var t, o;
        void 0 === e && (e = !1), e && (null !== (t = document.querySelector(".ot-sdk-show-settings")) && void 0 !== t && t.removeEventListener("click", _r.cookiesSettingsBoundListener), null !== (o = document.querySelector(".optanon-toggle-display")) && void 0 !== o && o.removeEventListener("click", _r.cookiesSettingsBoundListener)), wt.fp.CookieV2TrackingTechnologies ? Dr.insertTrackingTechnologies() : Or.insertCookiePolicyHtml(), _r.insertCookieSettingText(e)
    }, zr.prototype.showVendorsList = function() {
        jt.pcLayer !== E.VendorList && (_r.showAllVendors(), wo.triggerGoogleAnalyticsEvent(Do, Wo))
    }, zr.prototype.getTestLogData = function() {
        var e = Mt.Groups,
            t = qt.pubDomainData,
            o = wt.moduleInitializer.Version;
        console.info("%cWelcome to OneTrust Log", "padding: 8px; background-color: #43c233; color: white; font-style: italic; border: 1px solid black; font-size: 1.5em;"), console.info("Script is for: %c" + (t.Domain ? t.Domain : Mt.optanonCookieDomain), "padding: 4px 6px; font-style: italic; border: 2px solid #43c233; font-size: 12px;"), console.info("Script Version Published: " + o), console.info("The consent model is: " + t.ConsentModel.Name);
        var n = null !== no.alertBoxCloseDate();
        console.info("Consent has " + (n ? "" : "not ") + "been given " + (n ? "👍" : "🛑"));
        var r = [];
        e.forEach(function(e) {
            var t = "";
            t = e.Status && "always active" === e.Status.toLowerCase() ? "Always Active" : Tn.isGroupActive(e) ? "Active" : "Inactive", r.push({
                CustomGroupId: e.CustomGroupId,
                GroupName: e.GroupName,
                Status: t
            })
        }), console.groupCollapsed("Current Category Status"), console.table(r), console.groupEnd();
        var i = [];
        t.GeneralVendors.forEach(function(e) {
            i.push({
                CustomGroupId: e.VendorCustomId,
                Name: e.Name,
                Status: Ur.isCategoryActive(e.VendorCustomId) ? "active" : "inactive"
            })
        }), console.groupCollapsed("General Vendor Ids"), console.table(i), console.groupEnd();
        var s = qt.getRegionRule(),
            a = jt.userLocation,
            l = wt.moduleInitializer.GeoRuleGroupName;
        qt.conditionalLogicEnabled ? console.groupCollapsed("Geolocation, Template & Condition") : console.groupCollapsed("Geolocation and Template"), jt.userLocation.country && console.info("The Geolocation is " + a.country.toUpperCase()), console.info("The Geolocation rule is " + s.Name), console.info("The GeolocationRuleGroup is " + l), qt.canUseConditionalLogic ? (console.info("The Condition name is " + qt.Condition.Name), console.info("The TemplateName is " + qt.Condition.TemplateName)) : console.info("The TemplateName is " + s.TemplateName), console.groupEnd();
        var c = e.filter(function(e) {
            return Tn.isGroupActive(e) && "COOKIE" === e.Type
        });
        console.groupCollapsed("The cookies expected to be active if blocking has been implemented are"), c.forEach(function(e) {
            console.groupCollapsed(e.GroupName);
            var t = Ur.getAllFormatCookiesForAGroup(e);
            console.table(t, ["Name", "Host", "description"]), console.groupEnd()
        }), console.groupEnd()
    }, zr.prototype.isCategoryActive = function(e) {
        return -1 !== window.OptanonActiveGroups.indexOf(e)
    }, zr.prototype.getAllFormatCookiesForAGroup = function(e) {
        var t, o = [];
        return e.FirstPartyCookies.forEach(function(e) {
            return o.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }), (null === (t = e.Hosts) || void 0 === t ? void 0 : t.reduce(function(e, t) {
            return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
        }, [])).forEach(function(e) {
            return o.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }), o
    }, zr.prototype.updateSingularConsent = function(r, i) {
        return d(this, void 0, void 0, function() {
            var t, o, n;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, _r.fetchAndSetupPC()];
                    case 1:
                        return e.sent(), qt.apiSource = P.UpdateConsent, t = i.split(":")[0], o = i.split(":")[1], n = Boolean(Number(o)), r === gt ? "always active" === io.getGrpStatus(io.getGroupById(t)) || (Ur.updateConsentArray(jt.groupsConsent, t, o), Br.handleTogglesOnSingularConsentUpdate(r, t, n)) : r === Ct ? (Ur.updateConsentArray(jt.hostsConsent, t, o), Br.handleTogglesOnSingularConsentUpdate(r)) : r === yt ? (jt.genVendorsConsent[t] = n, Br.handleTogglesOnSingularConsentUpdate(r)) : r === ft && Br.handleTogglesOnSingularConsentUpdate(r, t, n), [2]
                }
            })
        })
    }, zr.prototype.vendorServiceEnabled = function() {
        return jt.showVendorService
    }, zr.prototype.updateGCM = function(e) {
        e || console.error("No callback passed to the UpdateGCM"), qt.gcmUpdateCallback = e
    }, zr.prototype.updateConsentArray = function(e, t, o) {
        var n = e.findIndex(function(e) {
            return e.includes(t + ":0") || e.includes(t + ":1")
        }); - 1 < n ? e[n] = t + ":" + o : e.push(t + ":" + o)
    }, zr);

    function zr() {
        this.processedHtml = "", this.useGeoLocationService = !0, this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid, this.InitializeBanner = function() {
            return Dr.initBanner()
        }, this.getHTML = function() {
            return document.getElementById("onetrust-banner-sdk") || (Hn.insertPcHtml(), Pr.insertAlertHtml()), Ur.processedHtml || (Ur.processedHtml = document.querySelector("#onetrust-consent-sdk").outerHTML), Ur.processedHtml
        }, this.getCSS = function() {
            return kr.processedCSS
        }, this.setConsentProfile = function(e) {
            if (e.customPayload) {
                var t = e.customPayload;
                t.Interaction && Gt.writeCookieParam(Ge.OPTANON_CONSENT, Be, t.Interaction)
            }
            Ur.setDataSubjectIdV2(e.identifier, e.isAnonymous), Ur.synchroniseCookieWithPayload(e.purposes), Br.executeOptanonWrapper()
        }, this.InsertScript = function(e, t, o, n, r, i) {
            var s, a = null != n && void 0 !== n,
                l = a && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (Tn.canInsertForGroup(r, l) && !Nt.contains(jt.srcExecGrps, r)) {
                jt.srcExecGrpsTemp.push(r), a && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && Nt.empty(t);
                var c = document.createElement("script");
                switch (null != o && void 0 !== o && (s = !1, c.onload = c.onreadystatechange = function() {
                    s || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (s = !0, o())
                }), c.type = "text/javascript", c.src = e, i && (c.async = i), t) {
                    case "head":
                        document.getElementsByTagName("head")[0].appendChild(c);
                        break;
                    case "body":
                        document.getElementsByTagName("body")[0].appendChild(c);
                        break;
                    default:
                        var d = document.getElementById(t);
                        d && (d.appendChild(c), a && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && Nt.show(t))
                }
                if (a && void 0 !== n.makeElementsVisible)
                    for (var u = 0, p = n.makeElementsVisible; u < p.length; u++) {
                        var h = p[u];
                        Nt.show(h)
                    }
                if (a && void 0 !== n.deleteElements)
                    for (var g = 0, C = n.deleteElements; g < C.length; g++) {
                        h = C[g];
                        Nt.remove(h)
                    }
            }
        }, this.InsertHtml = function(e, t, o, n, r) {
            var i = null != n && void 0 !== n,
                s = i && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (Tn.canInsertForGroup(r, s) && !Nt.contains(jt.htmlExecGrps, r)) {
                if (jt.htmlExecGrpsTemp.push(r), i && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && Nt.empty(t), Nt.appendTo(t, e), i && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && Nt.show(t), i && void 0 !== n.makeElementsVisible)
                    for (var a = 0, l = n.makeElementsVisible; a < l.length; a++) {
                        var c = l[a];
                        Nt.show(c)
                    }
                if (i && void 0 !== n.deleteElements)
                    for (var d = 0, u = n.deleteElements; d < u.length; d++) {
                        c = u[d];
                        Nt.remove(c)
                    }
                null != o && void 0 !== o && o()
            }
        }, this.BlockGoogleAnalytics = function(e, t) {
            window["ga-disable-" + e] = !Tn.canInsertForGroup(t)
        }
    }
    var Kr, Wr, Jr, Yr, Xr = (o(Wr = $r, Jr = Kr = jr), Wr.prototype = null === Jr ? Object.create(Jr) : (Qr.prototype = Jr.prototype, new Qr), $r.prototype.Close = function(e) {
        Br.closeBanner(!1), window.location.href = "http://otsdk//consentChanged"
    }, $r.prototype.RejectAll = function(e) {
        Br.rejectAllEvent(), window.location.href = "http://otsdk//consentChanged"
    }, $r.prototype.AllowAll = function(e) {
        Br.AllowAllV2(e), window.location.href = "http://otsdk//consentChanged"
    }, $r.prototype.ToggleInfoDisplay = function() {
        _r.toggleInfoDisplay()
    }, $r);

    function Qr() {
        this.constructor = Wr
    }

    function $r() {
        var e = null !== Kr && Kr.apply(this, arguments) || this;
        return e.mobileOnlineURL = qt.mobileOnlineURL, e
    }
    var Zr, ei = (ti.prototype.syncConsentProfile = function(e, t, o) {
        void 0 === o && (o = !1), e ? (jt.dsParams.id = e.trim(), Ur.setDataSubjectIdV2(e)) : e = jt.dsParams.id, o && (jt.dsParams.isAnonymous = o), t = t || jt.dsParams.token, e && t && hn.getConsentProfile(e, t).then(function(e) {
            return Zr.consentProfileCallback(e)
        })
    }, ti.prototype.getConsentValue = function(e) {
        var t = null;
        switch (e) {
            case k[k.ACTIVE]:
            case k[k.ALWAYS_ACTIVE]:
                t = z.Active;
                break;
            case k[k.EXPIRED]:
            case k[k.OPT_OUT]:
            case k[k.PENDING]:
            case k[k.WITHDRAWN]:
                t = z.InActive
        }
        return t
    }, ti.prototype.isCookieGroup = function(e) {
        return !/IABV2|ISPV2|IFEV2|ISFV2/.test(e)
    }, ti.prototype.syncPreferences = function(e, t) {
        void 0 === t && (t = !1);
        var o = Gt.getCookie(Ge.ALERT_BOX_CLOSED),
            n = o,
            r = !1,
            i = !0,
            s = !1,
            a = Nt.strToArr(Gt.readCookieParam(Ge.OPTANON_CONSENT, "groups"));
        if (e && e.preferences.length)
            for (var l = 0, c = e.preferences; l < c.length; l++) {
                var d = c[l],
                    u = d.status === k[k.NO_CONSENT],
                    p = qt.domainGrps[d.id];
                if (p)
                    if (-1 < jt.grpsSynced.indexOf(p) && (jt.syncedValidGrp = !0), u && a.length) {
                        for (var h = -1, g = 0; g < a.length; g++)
                            if (a[g].split(":")[0] === p) {
                                h = g;
                                break
                            } - 1 < h && (a.splice(h, 1), jt.grpsSynced.push(p))
                    } else if (!u && (!o || new Date(d.lastInteractionDate) > new Date(n))) {
                    var C = this.getConsentValue(d.status);
                    if (s = !0, o = d.lastInteractionDate, !t && this.isCookieGroup(p)) {
                        var y = p + ":" + C,
                            f = -1;
                        for (g = 0; g < a.length; g++) {
                            var v = a[g].split(":");
                            if (v[0] === p) {
                                v[1] !== C && (a[g] = y, r = !0), f = g;
                                break
                            }
                        } - 1 === f && (a.push(y), r = !0)
                    }
                }
            } else i = !1;
        return {
            alertBoxCookieVal: o,
            groupsConsent: a,
            profileFound: i,
            syncRequired: r,
            syncOnlyDate: s = s && !r
        }
    }, ti.prototype.hideBannerAndPc = function() {
        var e = Jt.isBannerVisible();
        e && Jt.hideBanner(), (e || jt.isPCVisible) && (Yn.removeAddedOTCssStyles(), ar.hideConsentNoticeV2())
    }, ti.prototype.setOptanonConsentCookie = function(e, t) {
        if (e.syncRequired) {
            Gt.writeCookieParam(Ge.OPTANON_CONSENT, "groups", e.groupsConsent.toString());
            var o = Gt.getCookie(Ge.OPTANON_CONSENT);
            Gt.setCookie(Ge.OPTANON_CONSENT, o, t, !1, new Date(e.alertBoxCookieVal))
        }
    }, ti.prototype.setIabCookie = function(e, t, o) {
        o.syncGroups && o.syncGroups[jt.syncGrpId] && o.syncGroups[jt.syncGrpId].tcStringV2 ? Gt.getCookie(Ge.EU_PUB_CONSENT) !== o.syncGroups[jt.syncGrpId].tcStringV2 && (e.syncRequired = !0, Gt.setCookie(Ge.EU_PUB_CONSENT, o.syncGroups[jt.syncGrpId].tcStringV2, t, !1, new Date(e.alertBoxCookieVal))) : e.profileFound = !1
    }, ti.prototype.setAddtlVendorsCookie = function(e, t) {
        Mt.UseGoogleVendors && (Gt.getCookie(Ge.ADDITIONAL_CONSENT_STRING) || Gt.setCookie(Ge.ADDITIONAL_CONSENT_STRING, jt.addtlConsentVersion, t, !1, new Date(e.alertBoxCookieVal)))
    }, ti.prototype.createTrans = function() {
        var e = Gt.readCookieParam(Ge.OPTANON_CONSENT, "iType");
        lo.createConsentTxn(!1, U[e], !1, !0)
    }, ti.prototype.updateGrpsDom = function() {
        for (var e = function(e) {
                var t = e.getAttribute("data-optanongroupid"),
                    o = io.getGroupById(t),
                    n = !0,
                    r = Nt.findIndex(jt.groupsConsent, function(e) {
                        return e.split(":")[0] === t
                    }); - 1 < r && jt.groupsConsent[r].split(":")[1] === z.InActive && (n = !1), Tn.toggleGrpElements(e, o, n), Tn.toogleSubGroupElement(e, n, !1, !0), Tn.toogleSubGroupElement(e, n, !0, !0)
            }, t = 0, o = Tn.getAllGroupElements(); t < o.length; t++) e(o[t])
    }, ti.prototype.updateVendorsDom = function() {
        Mt.IsIabEnabled && (Bn.updateIabVariableReference(), hr.toggleVendorConsent(), qt.legIntSettings.PAllowLI && (qt.legIntSettings.PShowLegIntBtn ? hr.updateVendorLegBtns() : hr.toggleVendorLi()))
    }, ti.prototype.consentProfileCallback = function(r) {
        return d(this, void 0, void 0, function() {
            var t, o, n;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = this.syncPreferences(r), o = Mt.ReconsentFrequencyDays, n = no.isIABCrossConsentEnabled(), this.setOptanonConsentCookie(t, o), Mt.IsIabEnabled && !n && this.setIabCookie(t, o, r), t.syncOnlyDate && (no.syncAlertBoxCookie(t.alertBoxCookieVal), no.syncCookieExpiry()), t.syncRequired && t.profileFound ? (jt.syncRequired = t.syncRequired, no.syncAlertBoxCookie(t.alertBoxCookieVal), this.setAddtlVendorsCookie(t, o), this.hideBannerAndPc(), yn.initGrpsAndHosts(), !n && Mt.NtfyConfig.ShowNtfy && no.isAlertBoxClosedAndValid() ? [4, dr.getContent()] : [3, 2]) : [3, 3];
                    case 1:
                        e.sent(), dr.init(), dr.changeState(), e.label = 2;
                    case 2:
                        return Mt.IsIabEnabled && (no.setIABCookieData(), po.populateVendorAndPurposeFromCookieData()), this.updateGrpsDom(), this.updateVendorsDom(), _o.setLandingPathParam(xe), _n.substitutePlainTextScriptTags(), jn.updateGtmMacros(!0), Br.executeOptanonWrapper(), [3, 4];
                    case 3:
                        !t.profileFound && t.alertBoxCookieVal && this.createTrans(), e.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    }, ti);

    function ti() {}
    var oi, ni = (ri.prototype.removeCookies = function() {
        Gt.removePreview(), Gt.removeOptanon(), Gt.removeAlertBox(), Gt.removeIab2(), Gt.removeAddtlStr(), Gt.removeVariant(), jt.isPreview && oi.setPreviewCookie(), jt.urlParams.get("otreset") && jt.urlParams.set("otreset", "false");
        var e = window.location.pathname + "?" + jt.urlParams.toString() + window.location.hash;
        oi.replaceHistory(e)
    }, ri.prototype.setPreviewCookie = function() {
        var e = new Date;
        e.setTime(e.getTime() + 864e5);
        var t = jt.geoFromUrl ? "&geo=" + jt.geoFromUrl : "",
            o = "expiry=" + e.toISOString() + t;
        Gt.setCookie(Ge.OT_PREVIEW, o, 1, !1)
    }, ri.prototype.bindStopPreviewEvent = function() {
        (window.attachEvent || window.addEventListener)("message", function(e) {
            return oi.onMessage(e)
        })
    }, ri.prototype.replaceHistory = function(e) {
        history.pushState({}, "", e), location.reload()
    }, ri.prototype.onMessage = function(e) {
        "string" == typeof e.data && e.data === oi.CLEAR_COOKIES && (oi.removeCookies(), e.source && e.source.postMessage && e.source.postMessage(oi.CLEARED_COOKIES, e.origin))
    }, ri);

    function ri() {
        this.CLEAR_COOKIES = "CLEAR_OT_COOKIES", this.CLEARED_COOKIES = "CLEARED_OT_COOKIES"
    }

    function ii(e) {
        if (e) {
            var t = window.atob(e);
            return Function('"use strict"; return ' + t)()
        }
    }
    Le.initPolyfill(), Gt = new Dt, Jt = new Xt, qt = new Ft, Go = new un, oi = new ni,
        function() {
            var e, t = window.otStubData;
            if (t) {
                wt.moduleInitializer = t.domainData, wt.fp = wt.moduleInitializer.TenantFeatures, jt.isAMP = t.isAmp, jt.dataDomainId = t.domainId, jt.isPreview = t.isPreview, jt.urlParams = t.urlParams, jt.isV2Stub = t.isV2Stub || !1, qt.gtmUpdatedinStub = t.gtmUpdated, t.isReset ? oi.removeCookies() : t.isPreview && oi.setPreviewCookie(), qt.setBannerScriptElement(t.stubElement), qt.setRegionRule(t.regionRule), wt.fp.CookieV2TargetedTemplates && (qt.conditionalLogicEnabled = !(null === (e = qt.getRegionRule().Conditions) || void 0 === e || !e.length), qt.conditionalLogicEnabled && (function() {
                    for (var e = qt.getRegionRule(), t = 0; t < e.Conditions.length; t++) try {
                        if (ii(e.Conditions[t].Expression)) return qt.Condition = e.Conditions[t]
                    } catch (e) {
                        console.warn(e);
                        continue
                    }
                    qt.allConditionsFailed = !0
                }(), qt.canUseConditionalLogic = !qt.allConditionsFailed)), jt.userLocation = t.userLocation, jt.crossOrigin = t.crossOrigin, qt.bannerDataParentURL = t.bannerBaseDataURL, qt.mobileOnlineURL = u(qt.mobileOnlineURL, t.mobileOnlineURL);
                var o = qt.getRegionRule();
                qt.multiVariantTestingEnabled = wt.moduleInitializer.MultiVariantTestingEnabled && 0 < o.Variants.length && Jt.isDateCurrent(o.TestEndTime), qt.otDataLayer = t.otDataLayer, jt.grpsSynced = t.grpsSynced || [], jt.isIabSynced = t.isIabSynced, jt.isGacSynced = t.isGacSynced, jt.syncRequired = t.isIabSynced || t.isGacSynced || t.grpsSynced && 0 < t.grpsSynced.length, jt.consentPreferences = t.preferences, jt.syncGrpId = t.syncGrpId, jt.consentApi = t.consentApi, jt.tenantId = t.tenantId, jt.geoFromUrl = t.geoFromUrl, jt.nonce = t.nonce, jt.setAttributePolyfillIsActive = t.setAttributePolyfillIsActive, jt.storageBaseURL = t.storageBaseURL, qt.previewMode = t.previewMode, Go.populateLangSwitcherPlhdr(), window.otStubData = {
                    userLocation: jt.userLocation
                }, window.OneTrustStub = null
            }
        }(),
        function() {
            d(this, void 0, void 0, function() {
                var t, o, n, r, i, s;
                return g(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return io = new so, Tn = new In, kn = new mn, Bn = new wn, _n = new Vn, Br = new wr, _r = new Vr, Hn = new Mn, Pr = new Sr, Dr = new Hr, wt.fp.CookieV2TrackingTechnologies || (Or = new Gr), kr = new mr, Po = new So, yn = new fn, jn = new zn, Rr = new qr, wo = new xo, oo = new ro, Zr = new ei, hr = new gr, hn = new gn, Pn = new Sn, ar = new lr, Gn = new Nn, Tr = new Ir, wt.moduleInitializer.MobileSDK ? Yr = new Xr : Ur = new jr, po = new ho, qt.setGCMcallback(), t = qt.getRegionRule(), o = qt.canUseConditionalLogic ? qt.Condition.UseGoogleVendors : t.UseGoogleVendors, "IAB2" !== qt.getRegionRuleType() ? [3, 2] : [4, Promise.all([hn.getLangJson(), hn.fetchGvlObj(), o ? hn.fetchGoogleVendors() : Promise.resolve(null), hn.loadCMP()])];
                        case 1:
                            return s = e.sent(), n = s[0], r = s[1], i = s[2], jt.gvlObj = r, jt.addtlVendorsList = i ? i.vendors : null, [3, 4];
                        case 2:
                            return [4, hn.getLangJson()];
                        case 3:
                            n = e.sent(), e.label = 4;
                        case 4:
                            return function(r) {
                                d(this, void 0, void 0, function() {
                                    var t, o, n;
                                    return g(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return window.OneTrust = window.Optanon = Object.assign({}, window.OneTrust, function(e) {
                                                        var t, o = wt.moduleInitializer.MobileSDK;
                                                        t = o ? Yr : Ur;
                                                        var n = {
                                                            AllowAll: t.AllowAll,
                                                            BlockGoogleAnalytics: t.BlockGoogleAnalytics,
                                                            Close: t.Close,
                                                            getCSS: t.getCSS,
                                                            GetDomainData: t.GetDomainData,
                                                            getGeolocationData: t.getGeolocationData,
                                                            getHTML: t.getHTML,
                                                            Init: t.Init,
                                                            InitializeBanner: t.InitializeBanner,
                                                            initializeCookiePolicyHtml: t.initCookiePolicyAndSettings,
                                                            InsertHtml: t.InsertHtml,
                                                            InsertScript: t.InsertScript,
                                                            IsAlertBoxClosed: t.IsAlertBoxClosed,
                                                            IsAlertBoxClosedAndValid: t.IsAlertBoxClosedAndValid,
                                                            LoadBanner: t.LoadBanner,
                                                            OnConsentChanged: wo.OnConsentChanged,
                                                            ReconsentGroups: t.ReconsentGroups,
                                                            RejectAll: t.RejectAll,
                                                            SetAlertBoxClosed: t.SetAlertBoxClosed,
                                                            setGeoLocation: t.setGeoLocation,
                                                            ToggleInfoDisplay: t.ToggleInfoDisplay,
                                                            TriggerGoogleAnalyticsEvent: t.TriggerGoogleAnalyticsEvent,
                                                            useGeoLocationService: t.useGeoLocationService,
                                                            FetchAndDownloadPC: t.FetchAndDownloadPC,
                                                            changeLanguage: t.changeLang,
                                                            testLog: t.getTestLogData,
                                                            UpdateConsent: t.updateSingularConsent,
                                                            IsVendorServiceEnabled: t.vendorServiceEnabled,
                                                            UpdateGCM: t.updateGCM
                                                        };
                                                        e.IsConsentLoggingEnabled && (n.getDataSubjectId = t.getDataSubjectId, n.setConsentProfile = t.setConsentProfile, n.setDataSubjectId = t.setDataSubjectIdV2, jt.isV2Stub && (n.syncConsentProfile = Zr.syncConsentProfile));
                                                        o && (n.mobileOnlineURL = t.mobileOnlineURL, n.otCookieData = jt.otCookieData);
                                                        e.IsIabEnabled && (n.updateConsentFromCookies = wo.updateConsentFromCookie, n.getPingRequest = po.getPingRequestForTcf, n.getVendorConsentsRequestV2 = po.getVendorConsentsRequestV2, n.showVendorsList = t.showVendorsList);
                                                        return n
                                                    }(r.DomainData)), no.initializeBannerVariables(r), Co = new mo, To = new Io, lo = new co, Yn = new ir, _o = new Eo, yr = new fr, dr = new ur,
                                                    function() {
                                                        var o = window.OTExternalConsent;
                                                        if (o && o.consentedDate && (o.groups || o.tcString || o.addtlString)) {
                                                            var n = [],
                                                                e = o.groups.split(",");
                                                            e.forEach(function(e) {
                                                                var t = e.split(":");
                                                                n.push({
                                                                    lastInteractionDate: o.consentedDate,
                                                                    status: "1" === t[1] ? k[k.ACTIVE] : k[k.OPT_OUT],
                                                                    id: t[0]
                                                                }), jt.grpsSynced.push(t[0])
                                                            }), jt.consentPreferences = {
                                                                preferences: n,
                                                                syncGroups: null
                                                            }, jt.syncRequired = !0, Co.updateGroupsInCookie(Ge.OPTANON_CONSENT, e), Gt.setCookie(Ge.ALERT_BOX_CLOSED, o.consentedDate, 365), o.tcString && (jt.isIabSynced = !0, Gt.setCookie(Ge.EU_PUB_CONSENT, o.tcString, 365)), o.addtlString && (jt.isGacSynced = !0, Gt.setCookie(Ge.ADDITIONAL_CONSENT_STRING, "" + o.addtlString, 365))
                                                        }
                                                    }(), jt.isPreview && (no.syncOtPreviewCookie(), oi.bindStopPreviewEvent()), t = Zr.syncPreferences(jt.consentPreferences, !0), (jt.syncRequired || t.syncRequired) && no.syncAlertBoxCookie(t.alertBoxCookieVal), no.syncCookieExpiry(), o = window.OneTrust.dataSubjectParams || {}, (jt.dsParams = o).id && Ur.setDataSubjectIdV2(o.id, o.isAnonymous), qt.multiVariantTestingEnabled && qt.selectedVariant && Gt.setCookie(Ge.SELECTED_VARIANT, qt.selectedVariant.Id, Mt.ReconsentFrequencyDays), [4, po.initializeIABModule()];
                                            case 1:
                                                return e.sent(), window.OneTrust.Init(!0), [4, yn.fetchAssets()];
                                            case 2:
                                                return (e.sent(), Dr.initBanner(), wo.assetResolve(!0), kr.initialiseCssReferences(), n = no.isIABCrossConsentEnabled(), (jt.syncedValidGrp || jt.isIabSynced || jt.isGacSynced) && !n && Mt.NtfyConfig.ShowNtfy && no.isAlertBoxClosedAndValid()) ? (jt.ntfyRequired = !0, [4, dr.getContent()]) : [3, 4];
                                            case 3:
                                                e.sent(), e.label = 4;
                                            case 4:
                                                return n || window.OneTrust.LoadBanner(), [2]
                                        }
                                    })
                                })
                            }(n), wt.moduleInitializer.WebFormIntegrationEnabled && function() {
                                var e = window.otStubData,
                                    t = document.createElement("script");
                                t.type = "text/javascript", t.src = wt.moduleInitializer.WebFormSrcUrl, t.setAttribute("dataId", wt.moduleInitializer.TenantGuid), t.setAttribute("worker", wt.moduleInitializer.WebFormWorkerUrl), e.charset && t.setAttribute("charset", e.charset);
                                e.crossOrigin && t.setAttribute("crossorigin", e.crossOrigin);
                                document.getElementsByTagName("head")[0].appendChild(t)
                            }(), [2]
                    }
                })
            })
        }()
}();