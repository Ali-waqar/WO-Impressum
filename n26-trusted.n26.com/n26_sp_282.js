/*! * Snowplow - The world's most powerful web analytics platform
 *
 * @description JavaScript tracker for Snowplow
 * @version     2.8.2
 * @author      Alex Dean, Simon Andersson, Anthon Pang, Fred Blundun, Joshua Beemster
 * @copyright   Anthon Pang, Snowplow Analytics Ltd
 * @license     Simplified BSD
 */
"app.n-26.net" === window.location.hostname && (window.location.href = "https://app.n26.com");
(function e(b, g, d) {
    function c(m, j) {
        if (!g[m]) {
            if (!b[m]) {
                var i = typeof require == "function" && require;
                if (!j && i) {
                    return i(m, !0)
                }
                if (a) {
                    return a(m, !0)
                }
                var k = new Error("Cannot find module '" + m + "'");
                throw k.code = "MODULE_NOT_FOUND", k
            }
            var h = g[m] = {
                exports: {}
            };
            b[m][0].call(h.exports, function(l) {
                var o = b[m][1][l];
                return c(o ? o : l)
            }, h, h.exports, e, b, g, d)
        }
        return g[m].exports
    }
    var a = typeof require == "function" && require;
    for (var f = 0; f < d.length; f++) {
        c(d[f])
    }
    return c
})({
    1: [function(b, c, a) {
        this.cookie = function(f, h, d, j, g, i) {
            if (arguments.length > 1) {
                return document.cookie = f + "=" + escape(h) + (d ? "; expires=" + new Date(+new Date() + (d * 1000)).toUTCString() : "") + (j ? "; path=" + j : "") + (g ? "; domain=" + g : "") + (i ? "; secure" : "")
            }
            return unescape((("; " + document.cookie).split("; " + f + "=")[1] || "").split(";")[0])
        }
    }, {}],
    2: [function(c, d, b) {
        var a = {
            utf8: {
                stringToBytes: function(f) {
                    return a.bin.stringToBytes(unescape(encodeURIComponent(f)))
                },
                bytesToString: function(f) {
                    return decodeURIComponent(escape(a.bin.bytesToString(f)))
                }
            },
            bin: {
                stringToBytes: function(h) {
                    for (var f = [], g = 0; g < h.length; g++) {
                        f.push(h.charCodeAt(g) & 255)
                    }
                    return f
                },
                bytesToString: function(f) {
                    for (var h = [], g = 0; g < f.length; g++) {
                        h.push(String.fromCharCode(f[g]))
                    }
                    return h.join("")
                }
            }
        };
        d.exports = a
    }, {}],
    3: [function(b, c, a) {
        (function() {
            var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                f = {
                    rotl: function(h, g) {
                        return (h << g) | (h >>> (32 - g))
                    },
                    rotr: function(h, g) {
                        return (h << (32 - g)) | (h >>> g)
                    },
                    endian: function(h) {
                        if (h.constructor == Number) {
                            return f.rotl(h, 8) & 16711935 | f.rotl(h, 24) & 4278255360
                        }
                        for (var g = 0; g < h.length; g++) {
                            h[g] = f.endian(h[g])
                        }
                        return h
                    },
                    randomBytes: function(h) {
                        for (var g = []; h > 0; h--) {
                            g.push(Math.floor(Math.random() * 256))
                        }
                        return g
                    },
                    bytesToWords: function(h) {
                        for (var k = [], j = 0, g = 0; j < h.length; j++, g += 8) {
                            k[g >>> 5] |= h[j] << (24 - g % 32)
                        }
                        return k
                    },
                    wordsToBytes: function(i) {
                        for (var h = [], g = 0; g < i.length * 32; g += 8) {
                            h.push((i[g >>> 5] >>> (24 - g % 32)) & 255)
                        }
                        return h
                    },
                    bytesToHex: function(g) {
                        for (var j = [], h = 0; h < g.length; h++) {
                            j.push((g[h] >>> 4).toString(16));
                            j.push((g[h] & 15).toString(16))
                        }
                        return j.join("")
                    },
                    hexToBytes: function(h) {
                        for (var g = [], i = 0; i < h.length; i += 2) {
                            g.push(parseInt(h.substr(i, 2), 16))
                        }
                        return g
                    },
                    bytesToBase64: function(h) {
                        for (var g = [], l = 0; l < h.length; l += 3) {
                            var m = (h[l] << 16) | (h[l + 1] << 8) | h[l + 2];
                            for (var k = 0; k < 4; k++) {
                                if (l * 8 + k * 6 <= h.length * 8) {
                                    g.push(d.charAt((m >>> 6 * (3 - k)) & 63))
                                } else {
                                    g.push("=")
                                }
                            }
                        }
                        return g.join("")
                    },
                    base64ToBytes: function(h) {
                        h = h.replace(/[^A-Z0-9+\/]/ig, "");
                        for (var g = [], j = 0, k = 0; j < h.length; k = ++j % 4) {
                            if (k == 0) {
                                continue
                            }
                            g.push(((d.indexOf(h.charAt(j - 1)) & (Math.pow(2, -2 * k + 8) - 1)) << (k * 2)) | (d.indexOf(h.charAt(j)) >>> (6 - k * 2)))
                        }
                        return g
                    }
                };
            c.exports = f
        })()
    }, {}],
    4: [function(b, c, a) {
        (function(d) {
            var f = (function() {
                var h = "s",
                    i = function(p) {
                        var q = -p.getTimezoneOffset();
                        return (q !== null ? q : 0)
                    },
                    l = function(q, r, p) {
                        var s = new Date();
                        if (q !== undefined) {
                            s.setFullYear(q)
                        }
                        s.setMonth(r);
                        s.setDate(p);
                        return s
                    },
                    j = function(p) {
                        return i(l(p, 0, 2))
                    },
                    m = function(p) {
                        return i(l(p, 5, 2))
                    },
                    g = function(q) {
                        var r = q.getMonth() > 7,
                            u = r ? m(q.getFullYear()) : j(q.getFullYear()),
                            p = i(q),
                            t = u < 0,
                            s = u - p;
                        if (!t && !r) {
                            return s < 0
                        }
                        return s !== 0
                    },
                    k = function() {
                        var p = j(),
                            q = m(),
                            r = p - q;
                        if (r < 0) {
                            return p + ",1"
                        } else {
                            if (r > 0) {
                                return q + ",1," + h
                            }
                        }
                        return p + ",0"
                    },
                    n = function() {
                        var p = k();
                        return new f.TimeZone(f.olson.timezones[p])
                    },
                    o = function(p) {
                        var q = new Date(2010, 6, 15, 1, 0, 0, 0),
                            r = {
                                "America/Denver": new Date(2011, 2, 13, 3, 0, 0, 0),
                                "America/Mazatlan": new Date(2011, 3, 3, 3, 0, 0, 0),
                                "America/Chicago": new Date(2011, 2, 13, 3, 0, 0, 0),
                                "America/Mexico_City": new Date(2011, 3, 3, 3, 0, 0, 0),
                                "America/Asuncion": new Date(2012, 9, 7, 3, 0, 0, 0),
                                "America/Santiago": new Date(2012, 9, 3, 3, 0, 0, 0),
                                "America/Campo_Grande": new Date(2012, 9, 21, 5, 0, 0, 0),
                                "America/Montevideo": new Date(2011, 9, 2, 3, 0, 0, 0),
                                "America/Sao_Paulo": new Date(2011, 9, 16, 5, 0, 0, 0),
                                "America/Los_Angeles": new Date(2011, 2, 13, 8, 0, 0, 0),
                                "America/Santa_Isabel": new Date(2011, 3, 5, 8, 0, 0, 0),
                                "America/Havana": new Date(2012, 2, 10, 2, 0, 0, 0),
                                "America/New_York": new Date(2012, 2, 10, 7, 0, 0, 0),
                                "Europe/Helsinki": new Date(2013, 2, 31, 5, 0, 0, 0),
                                "Pacific/Auckland": new Date(2011, 8, 26, 7, 0, 0, 0),
                                "America/Halifax": new Date(2011, 2, 13, 6, 0, 0, 0),
                                "America/Goose_Bay": new Date(2011, 2, 13, 2, 1, 0, 0),
                                "America/Miquelon": new Date(2011, 2, 13, 5, 0, 0, 0),
                                "America/Godthab": new Date(2011, 2, 27, 1, 0, 0, 0),
                                "Europe/Moscow": q,
                                "Asia/Amman": new Date(2013, 2, 29, 1, 0, 0, 0),
                                "Asia/Beirut": new Date(2013, 2, 31, 2, 0, 0, 0),
                                "Asia/Damascus": new Date(2013, 3, 6, 2, 0, 0, 0),
                                "Asia/Jerusalem": new Date(2013, 2, 29, 5, 0, 0, 0),
                                "Asia/Yekaterinburg": q,
                                "Asia/Omsk": q,
                                "Asia/Krasnoyarsk": q,
                                "Asia/Irkutsk": q,
                                "Asia/Yakutsk": q,
                                "Asia/Vladivostok": q,
                                "Asia/Baku": new Date(2013, 2, 31, 4, 0, 0),
                                "Asia/Yerevan": new Date(2013, 2, 31, 3, 0, 0),
                                "Asia/Kamchatka": q,
                                "Asia/Gaza": new Date(2010, 2, 27, 4, 0, 0),
                                "Africa/Cairo": new Date(2010, 4, 1, 3, 0, 0),
                                "Europe/Minsk": q,
                                "Pacific/Apia": new Date(2010, 10, 1, 1, 0, 0, 0),
                                "Pacific/Fiji": new Date(2010, 11, 1, 0, 0, 0),
                                "Australia/Perth": new Date(2008, 10, 1, 1, 0, 0, 0)
                            };
                        return r[p]
                    };
                return {
                    determine: n,
                    date_is_dst: g,
                    dst_start_for: o
                }
            }());
            f.TimeZone = function(g) {
                var h = {
                        "America/Denver": ["America/Denver", "America/Mazatlan"],
                        "America/Chicago": ["America/Chicago", "America/Mexico_City"],
                        "America/Santiago": ["America/Santiago", "America/Asuncion", "America/Campo_Grande"],
                        "America/Montevideo": ["America/Montevideo", "America/Sao_Paulo"],
                        "Asia/Beirut": ["Asia/Amman", "Asia/Jerusalem", "Asia/Beirut", "Europe/Helsinki", "Asia/Damascus"],
                        "Pacific/Auckland": ["Pacific/Auckland", "Pacific/Fiji"],
                        "America/Los_Angeles": ["America/Los_Angeles", "America/Santa_Isabel"],
                        "America/New_York": ["America/Havana", "America/New_York"],
                        "America/Halifax": ["America/Goose_Bay", "America/Halifax"],
                        "America/Godthab": ["America/Miquelon", "America/Godthab"],
                        "Asia/Dubai": ["Europe/Moscow"],
                        "Asia/Dhaka": ["Asia/Yekaterinburg"],
                        "Asia/Jakarta": ["Asia/Omsk"],
                        "Asia/Shanghai": ["Asia/Krasnoyarsk", "Australia/Perth"],
                        "Asia/Tokyo": ["Asia/Irkutsk"],
                        "Australia/Brisbane": ["Asia/Yakutsk"],
                        "Pacific/Noumea": ["Asia/Vladivostok"],
                        "Pacific/Tarawa": ["Asia/Kamchatka", "Pacific/Fiji"],
                        "Pacific/Tongatapu": ["Pacific/Apia"],
                        "Asia/Baghdad": ["Europe/Minsk"],
                        "Asia/Baku": ["Asia/Yerevan", "Asia/Baku"],
                        "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"]
                    },
                    i = g,
                    k = function() {
                        var l = h[i],
                            n = l.length,
                            m = 0,
                            o = l[0];
                        for (; m < n; m += 1) {
                            o = l[m];
                            if (f.date_is_dst(f.dst_start_for(o))) {
                                i = o;
                                return
                            }
                        }
                    },
                    j = function() {
                        return typeof(h[i]) !== "undefined"
                    };
                if (j()) {
                    k()
                }
                return {
                    name: function() {
                        return i
                    }
                }
            };
            f.olson = {};
            f.olson.timezones = {
                "-720,0": "Pacific/Majuro",
                "-660,0": "Pacific/Pago_Pago",
                "-600,1": "America/Adak",
                "-600,0": "Pacific/Honolulu",
                "-570,0": "Pacific/Marquesas",
                "-540,0": "Pacific/Gambier",
                "-540,1": "America/Anchorage",
                "-480,1": "America/Los_Angeles",
                "-480,0": "Pacific/Pitcairn",
                "-420,0": "America/Phoenix",
                "-420,1": "America/Denver",
                "-360,0": "America/Guatemala",
                "-360,1": "America/Chicago",
                "-360,1,s": "Pacific/Easter",
                "-300,0": "America/Bogota",
                "-300,1": "America/New_York",
                "-270,0": "America/Caracas",
                "-240,1": "America/Halifax",
                "-240,0": "America/Santo_Domingo",
                "-240,1,s": "America/Santiago",
                "-210,1": "America/St_Johns",
                "-180,1": "America/Godthab",
                "-180,0": "America/Argentina/Buenos_Aires",
                "-180,1,s": "America/Montevideo",
                "-120,0": "America/Noronha",
                "-120,1": "America/Noronha",
                "-60,1": "Atlantic/Azores",
                "-60,0": "Atlantic/Cape_Verde",
                "0,0": "UTC",
                "0,1": "Europe/London",
                "60,1": "Europe/Berlin",
                "60,0": "Africa/Lagos",
                "60,1,s": "Africa/Windhoek",
                "120,1": "Asia/Beirut",
                "120,0": "Africa/Johannesburg",
                "180,0": "Asia/Baghdad",
                "180,1": "Europe/Moscow",
                "210,1": "Asia/Tehran",
                "240,0": "Asia/Dubai",
                "240,1": "Asia/Baku",
                "270,0": "Asia/Kabul",
                "300,1": "Asia/Yekaterinburg",
                "300,0": "Asia/Karachi",
                "330,0": "Asia/Kolkata",
                "345,0": "Asia/Kathmandu",
                "360,0": "Asia/Dhaka",
                "360,1": "Asia/Omsk",
                "390,0": "Asia/Rangoon",
                "420,1": "Asia/Krasnoyarsk",
                "420,0": "Asia/Jakarta",
                "480,0": "Asia/Shanghai",
                "480,1": "Asia/Irkutsk",
                "525,0": "Australia/Eucla",
                "525,1,s": "Australia/Eucla",
                "540,1": "Asia/Yakutsk",
                "540,0": "Asia/Tokyo",
                "570,0": "Australia/Darwin",
                "570,1,s": "Australia/Adelaide",
                "600,0": "Australia/Brisbane",
                "600,1": "Asia/Vladivostok",
                "600,1,s": "Australia/Sydney",
                "630,1,s": "Australia/Lord_Howe",
                "660,1": "Asia/Kamchatka",
                "660,0": "Pacific/Noumea",
                "690,0": "Pacific/Norfolk",
                "720,1,s": "Pacific/Auckland",
                "720,0": "Pacific/Tarawa",
                "765,1,s": "Pacific/Chatham",
                "780,0": "Pacific/Tongatapu",
                "780,1,s": "Pacific/Apia",
                "840,0": "Pacific/Kiritimati"
            };
            if (typeof a !== "undefined") {
                a.jstz = f
            } else {
                d.jstz = f
            }
        })(this)
    }, {}],
    5: [function(b, c, a) {
        (function() {
            var i = this;

            function g(q, m) {
                var j = q.length,
                    p = m ^ j,
                    o = 0,
                    n;
                while (j >= 4) {
                    n = ((q.charCodeAt(o) & 255)) | ((q.charCodeAt(++o) & 255) << 8) | ((q.charCodeAt(++o) & 255) << 16) | ((q.charCodeAt(++o) & 255) << 24);
                    n = (((n & 65535) * 1540483477) + ((((n >>> 16) * 1540483477) & 65535) << 16));
                    n ^= n >>> 24;
                    n = (((n & 65535) * 1540483477) + ((((n >>> 16) * 1540483477) & 65535) << 16));
                    p = (((p & 65535) * 1540483477) + ((((p >>> 16) * 1540483477) & 65535) << 16)) ^ n;
                    j -= 4;
                    ++o
                }
                switch (j) {
                    case 3:
                        p ^= (q.charCodeAt(o + 2) & 255) << 16;
                    case 2:
                        p ^= (q.charCodeAt(o + 1) & 255) << 8;
                    case 1:
                        p ^= (q.charCodeAt(o) & 255);
                        p = (((p & 65535) * 1540483477) + ((((p >>> 16) * 1540483477) & 65535) << 16))
                }
                p ^= p >>> 13;
                p = (((p & 65535) * 1540483477) + ((((p >>> 16) * 1540483477) & 65535) << 16));
                p ^= p >>> 15;
                return p >>> 0
            }

            function f(s, o) {
                var t, u, q, k, n, j, l, r, p, m;
                t = s.length & 3;
                u = s.length - t;
                q = o;
                n = 3432918353;
                l = 461845907;
                m = 0;
                while (m < u) {
                    p = ((s.charCodeAt(m) & 255)) | ((s.charCodeAt(++m) & 255) << 8) | ((s.charCodeAt(++m) & 255) << 16) | ((s.charCodeAt(++m) & 255) << 24);
                    ++m;
                    p = ((((p & 65535) * n) + ((((p >>> 16) * n) & 65535) << 16))) & 4294967295;
                    p = (p << 15) | (p >>> 17);
                    p = ((((p & 65535) * l) + ((((p >>> 16) * l) & 65535) << 16))) & 4294967295;
                    q ^= p;
                    q = (q << 13) | (q >>> 19);
                    k = ((((q & 65535) * 5) + ((((q >>> 16) * 5) & 65535) << 16))) & 4294967295;
                    q = (((k & 65535) + 27492) + ((((k >>> 16) + 58964) & 65535) << 16))
                }
                p = 0;
                switch (t) {
                    case 3:
                        p ^= (s.charCodeAt(m + 2) & 255) << 16;
                    case 2:
                        p ^= (s.charCodeAt(m + 1) & 255) << 8;
                    case 1:
                        p ^= (s.charCodeAt(m) & 255);
                        p = (((p & 65535) * n) + ((((p >>> 16) * n) & 65535) << 16)) & 4294967295;
                        p = (p << 15) | (p >>> 17);
                        p = (((p & 65535) * l) + ((((p >>> 16) * l) & 65535) << 16)) & 4294967295;
                        q ^= p
                }
                q ^= s.length;
                q ^= q >>> 16;
                q = (((q & 65535) * 2246822507) + ((((q >>> 16) * 2246822507) & 65535) << 16)) & 4294967295;
                q ^= q >>> 13;
                q = ((((q & 65535) * 3266489909) + ((((q >>> 16) * 3266489909) & 65535) << 16))) & 4294967295;
                q ^= q >>> 16;
                return q >>> 0
            }
            var d = f;
            d.v2 = g;
            d.v3 = f;
            if (typeof(c) != "undefined") {
                c.exports = d
            } else {
                var h = i.murmur;
                d.noConflict = function() {
                    i.murmur = h;
                    return d
                };
                i.murmur = d
            }
        }())
    }, {}],
    6: [function(b, c, a) {
        (function() {
            var h = b("crypt"),
                d = b("charenc").utf8,
                f = b("charenc").bin,
                i = function(q) {
                    if (q.constructor == String) {
                        q = d.stringToBytes(q)
                    }
                    var y = h.bytesToWords(q),
                        z = q.length * 8,
                        r = [],
                        u = 1732584193,
                        s = -271733879,
                        p = -1732584194,
                        o = 271733878,
                        k = -1009589776;
                    y[z >> 5] |= 128 << (24 - z % 32);
                    y[((z + 64 >>> 9) << 4) + 15] = z;
                    for (var B = 0; B < y.length; B += 16) {
                        var G = u,
                            F = s,
                            E = p,
                            D = o,
                            C = k;
                        for (var A = 0; A < 80; A++) {
                            if (A < 16) {
                                r[A] = y[B + A]
                            } else {
                                var x = r[A - 3] ^ r[A - 8] ^ r[A - 14] ^ r[A - 16];
                                r[A] = (x << 1) | (x >>> 31)
                            }
                            var v = ((u << 5) | (u >>> 27)) + k + (r[A] >>> 0) + (A < 20 ? (s & p | ~s & o) + 1518500249 : A < 40 ? (s ^ p ^ o) + 1859775393 : A < 60 ? (s & p | s & o | p & o) - 1894007588 : (s ^ p ^ o) - 899497514);
                            k = o;
                            o = p;
                            p = (s << 30) | (s >>> 2);
                            s = u;
                            u = v
                        }
                        u += G;
                        s += F;
                        p += E;
                        o += D;
                        k += C
                    }
                    return [u, s, p, o, k]
                },
                g = function(l, j) {
                    var k = h.wordsToBytes(i(l));
                    return j && j.asBytes ? k : j && j.asString ? f.bytesToString(k) : h.bytesToHex(k)
                };
            g._blocksize = 16;
            g._digestsize = 20;
            c.exports = g
        })()
    }, {
        charenc: 2,
        crypt: 3
    }],
    7: [function(b, c, a) {
        Object.defineProperty(a, "__esModule", {
            value: true
        });
        var d = b("./lib/core");
        a.trackerCore = d.trackerCore
    }, {
        "./lib/core": 9
    }],
    8: [function(c, d, a) {
        Object.defineProperty(a, "__esModule", {
            value: true
        });

        function b(o) {
            var k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var j, h, g, t, s, q, p, u, n = 0,
                v = 0,
                m, l = [];
            if (!o) {
                return o
            }
            o = unescape(encodeURIComponent(o));
            do {
                j = o.charCodeAt(n++);
                h = o.charCodeAt(n++);
                g = o.charCodeAt(n++);
                u = j << 16 | h << 8 | g;
                t = u >> 18 & 63;
                s = u >> 12 & 63;
                q = u >> 6 & 63;
                p = u & 63;
                l[v++] = k.charAt(t) + k.charAt(s) + k.charAt(q) + k.charAt(p)
            } while (n < o.length);
            m = l.join("");
            var f = o.length % 3;
            return (f ? m.slice(0, f - 3) : m) + "===".slice(f || 3)
        }
        a.base64encode = b
    }, {}],
    9: [function(b, d, a) {
        Object.defineProperty(a, "__esModule", {
            value: true
        });
        var f = b("uuid");
        var h = b("./payload");

        function c(i) {
            if (i == null) {
                return {
                    type: "dtm",
                    value: new Date().getTime()
                }
            } else {
                if (typeof i === "number") {
                    return {
                        type: "dtm",
                        value: i
                    }
                } else {
                    if (i.type === "ttm") {
                        return {
                            type: "ttm",
                            value: i.value
                        }
                    } else {
                        return {
                            type: "dtm",
                            value: (i.value || new Date().getTime())
                        }
                    }
                }
            }
        }

        function g(k, p) {
            if (typeof k === "undefined") {
                k = true
            }
            var i = {};

            function m(q, r) {
                i[q] = r
            }

            function l(s, t) {
                var r = {};
                t = t || {};
                for (var q in s) {
                    if (t[q] || (s[q] !== null && typeof s[q] !== "undefined")) {
                        r[q] = s[q]
                    }
                }
                return r
            }

            function o(q) {
                if (q && q.length) {
                    return {
                        schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",
                        data: q
                    }
                }
            }

            function j(u, r, q) {
                u.addDict(i);
                u.add("eid", f.v4());
                var t = c(q);
                u.add(t.type, t.value.toString());
                var s = o(r);
                if (s !== undefined) {
                    u.addJson("cx", "co", s)
                }
                if (typeof p === "function") {
                    p(u)
                }
                return u
            }

            function n(s, r, q) {
                var u = h.payloadBuilder(k);
                var t = {
                    schema: "iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0",
                    data: s
                };
                u.add("e", "ue");
                u.addJson("ue_px", "ue_pr", t);
                return j(u, r, q)
            }
            return {
                setBase64Encoding: function(q) {
                    k = q
                },
                addPayloadPair: m,
                addPayloadDict: function(r) {
                    for (var q in r) {
                        if (r.hasOwnProperty(q)) {
                            i[q] = r[q]
                        }
                    }
                },
                resetPayloadPairs: function(q) {
                    i = h.isJson(q) ? q : {}
                },
                setTrackerVersion: function(q) {
                    m("tv", q)
                },
                setTrackerNamespace: function(q) {
                    m("tna", q)
                },
                setAppId: function(q) {
                    m("aid", q)
                },
                setPlatform: function(q) {
                    m("p", q)
                },
                setUserId: function(q) {
                    m("uid", q)
                },
                setScreenResolution: function(r, q) {
                    m("res", r + "x" + q)
                },
                setViewport: function(r, q) {
                    m("vp", r + "x" + q)
                },
                setColorDepth: function(q) {
                    m("cd", q)
                },
                setTimezone: function(q) {
                    m("tz", q)
                },
                setLang: function(q) {
                    m("lang", q)
                },
                setIpAddress: function(q) {
                    m("ip", q)
                },
                trackUnstructEvent: n,
                trackSelfDescribingEvent: n,
                trackPageView: function(u, t, s, r, q) {
                    var v = h.payloadBuilder(k);
                    v.add("e", "pv");
                    v.add("url", u);
                    v.add("page", t);
                    v.add("refr", s);
                    return j(v, r, q)
                },
                trackPagePing: function(s, t, x, y, u, r, z, q, v) {
                    var w = h.payloadBuilder(k);
                    w.add("e", "pp");
                    w.add("url", s);
                    w.add("page", t);
                    w.add("refr", x);
                    w.add("pp_mix", y.toString());
                    w.add("pp_max", u.toString());
                    w.add("pp_miy", r.toString());
                    w.add("pp_may", z.toString());
                    return j(w, q, v)
                },
                trackStructEvent: function(t, w, r, v, u, s, q) {
                    var x = h.payloadBuilder(k);
                    x.add("e", "se");
                    x.add("se_ca", t);
                    x.add("se_ac", w);
                    x.add("se_la", r);
                    x.add("se_pr", v);
                    x.add("se_va", (u == null ? undefined : u.toString()));
                    return j(x, s, q)
                },
                trackEcommerceTransaction: function(x, w, u, t, q, y, r, v, A, s, z) {
                    var B = h.payloadBuilder(k);
                    B.add("e", "tr");
                    B.add("tr_id", x);
                    B.add("tr_af", w);
                    B.add("tr_tt", u);
                    B.add("tr_tx", t);
                    B.add("tr_sh", q);
                    B.add("tr_ci", y);
                    B.add("tr_st", r);
                    B.add("tr_co", v);
                    B.add("tr_cu", A);
                    return j(B, s, z)
                },
                trackEcommerceTransactionItem: function(t, x, q, r, v, u, y, s, w) {
                    var z = h.payloadBuilder(k);
                    z.add("e", "ti");
                    z.add("ti_id", t);
                    z.add("ti_sk", x);
                    z.add("ti_nm", q);
                    z.add("ti_ca", r);
                    z.add("ti_pr", v);
                    z.add("ti_qu", u);
                    z.add("ti_cu", y);
                    return j(z, s, w)
                },
                trackScreenView: function(r, t, s, q) {
                    return n({
                        schema: "iglu:com.snowplowanalytics.snowplow/screen_view/jsonschema/1-0-0",
                        data: l({
                            name: r,
                            id: t
                        })
                    }, s, q)
                },
                trackLinkClick: function(x, s, u, r, w, v, q) {
                    var t = {
                        schema: "iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1",
                        data: l({
                            targetUrl: x,
                            elementId: s,
                            elementClasses: u,
                            elementTarget: r,
                            elementContent: w
                        })
                    };
                    return n(t, v, q)
                },
                trackAdImpression: function(u, q, s, t, A, v, w, z, r, y) {
                    var x = {
                        schema: "iglu:com.snowplowanalytics.snowplow/ad_impression/jsonschema/1-0-0",
                        data: l({
                            impressionId: u,
                            costModel: q,
                            cost: s,
                            targetUrl: t,
                            bannerId: A,
                            zoneId: v,
                            advertiserId: w,
                            campaignId: z
                        })
                    };
                    return n(x, r, y)
                },
                trackAdClick: function(s, y, q, t, B, v, u, w, A, r, z) {
                    var x = {
                        schema: "iglu:com.snowplowanalytics.snowplow/ad_click/jsonschema/1-0-0",
                        data: l({
                            targetUrl: s,
                            clickId: y,
                            costModel: q,
                            cost: t,
                            bannerId: B,
                            zoneId: v,
                            impressionId: u,
                            advertiserId: w,
                            campaignId: A
                        })
                    };
                    return n(x, r, z)
                },
                trackAdConversion: function(B, q, t, s, v, z, A, u, y, r, x) {
                    var w = {
                        schema: "iglu:com.snowplowanalytics.snowplow/ad_conversion/jsonschema/1-0-0",
                        data: l({
                            conversionId: B,
                            costModel: q,
                            cost: t,
                            category: s,
                            action: v,
                            property: z,
                            initialValue: A,
                            advertiserId: u,
                            campaignId: y
                        })
                    };
                    return n(w, r, x)
                },
                trackSocialInteraction: function(u, t, v, s, q) {
                    var r = {
                        schema: "iglu:com.snowplowanalytics.snowplow/social_interaction/jsonschema/1-0-0",
                        data: l({
                            action: u,
                            network: t,
                            target: v
                        })
                    };
                    return n(r, s, q)
                },
                trackAddToCart: function(x, s, u, v, w, r, t, q) {
                    return n({
                        schema: "iglu:com.snowplowanalytics.snowplow/add_to_cart/jsonschema/1-0-0",
                        data: l({
                            sku: x,
                            name: s,
                            category: u,
                            unitPrice: v,
                            quantity: w,
                            currency: r
                        })
                    }, t, q)
                },
                trackRemoveFromCart: function(x, s, u, v, w, r, t, q) {
                    return n({
                        schema: "iglu:com.snowplowanalytics.snowplow/remove_from_cart/jsonschema/1-0-0",
                        data: l({
                            sku: x,
                            name: s,
                            category: u,
                            unitPrice: v,
                            quantity: w,
                            currency: r
                        })
                    }, t, q)
                },
                trackFormChange: function(w, r, x, u, s, v, t, q) {
                    return n({
                        schema: "iglu:com.snowplowanalytics.snowplow/change_form/jsonschema/1-0-0",
                        data: l({
                            formId: w,
                            elementId: r,
                            nodeName: x,
                            type: u,
                            elementClasses: s,
                            value: v
                        }, {
                            value: true
                        })
                    }, t, q)
                },
                trackFormSubmission: function(u, s, t, r, q) {
                    return n({
                        schema: "iglu:com.snowplowanalytics.snowplow/submit_form/jsonschema/1-0-0",
                        data: l({
                            formId: u,
                            formClasses: s,
                            elements: t
                        })
                    }, r, q)
                },
                trackSiteSearch: function(v, u, r, s, t, q) {
                    return n({
                        schema: "iglu:com.snowplowanalytics.snowplow/site_search/jsonschema/1-0-0",
                        data: l({
                            terms: v,
                            filters: u,
                            totalResults: r,
                            pageResults: s
                        })
                    }, t, q)
                }
            }
        }
        a.trackerCore = g
    }, {
        "./payload": 10,
        uuid: 12
    }],
    10: [function(g, h, c) {
        Object.defineProperty(c, "__esModule", {
            value: true
        });
        var a = g("./base64");

        function f(k) {
            if (!k) {
                return k
            }
            var j = a.base64encode(k);
            return j.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
        }

        function d(k) {
            if (!i(k)) {
                return false
            }
            for (var j in k) {
                if (k.hasOwnProperty(j)) {
                    return true
                }
            }
            return false
        }
        c.isNonEmptyJson = d;

        function i(j) {
            return (typeof j !== "undefined" && j !== null && (j.constructor === {}.constructor || j.constructor === [].constructor))
        }
        c.isJson = i;

        function b(k) {
            var n = {};
            var m = function(o, p) {
                if (p != null && p !== "") {
                    n[o] = p
                }
            };
            var j = function(p) {
                for (var o in p) {
                    if (p.hasOwnProperty(o)) {
                        m(o, p[o])
                    }
                }
            };
            var l = function(o, p, q) {
                if (d(q)) {
                    var r = JSON.stringify(q);
                    if (k) {
                        m(o, f(r))
                    } else {
                        m(p, r)
                    }
                }
            };
            return {
                add: m,
                addDict: j,
                addJson: l,
                build: function() {
                    return n
                }
            }
        }
        c.payloadBuilder = b
    }, {
        "./base64": 8
    }],
    11: [function(b, c, a) {
        (function(j) {
            var f;
            var i = j.crypto || j.msCrypto;
            if (i && i.getRandomValues) {
                var d = new Uint8Array(16);
                f = function g() {
                    i.getRandomValues(d);
                    return d
                }
            }
            if (!f) {
                var h = new Array(16);
                f = function() {
                    for (var k = 0, l; k < 16; k++) {
                        if ((k & 3) === 0) {
                            l = Math.random() * 4294967296
                        }
                        h[k] = l >>> ((k & 3) << 3) & 255
                    }
                    return h
                }
            }
            c.exports = f
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {}],
    12: [function(c, b, h) {
        var d = c("./rng");
        var q = [];
        var j = {};
        for (var k = 0; k < 256; k++) {
            q[k] = (k + 256).toString(16).substr(1);
            j[q[k]] = k
        }

        function f(w, t, x) {
            var u = (t && x) || 0,
                v = 0;
            t = t || [];
            w.toLowerCase().replace(/[0-9a-f]{2}/g, function(i) {
                if (v < 16) {
                    t[u + v++] = j[i]
                }
            });
            while (v < 16) {
                t[u + v++] = 0
            }
            return t
        }

        function m(t, v) {
            var u = v || 0,
                w = q;
            return w[t[u++]] + w[t[u++]] + w[t[u++]] + w[t[u++]] + "-" + w[t[u++]] + w[t[u++]] + "-" + w[t[u++]] + w[t[u++]] + "-" + w[t[u++]] + w[t[u++]] + "-" + w[t[u++]] + w[t[u++]] + w[t[u++]] + w[t[u++]] + w[t[u++]] + w[t[u++]]
        }
        var s = d();
        var p = [s[0] | 1, s[1], s[2], s[3], s[4], s[5]];
        var g = (s[6] << 8 | s[7]) & 16383;
        var n = 0,
            l = 0;

        function r(F, v, z) {
            var A = v && z || 0;
            var B = v || [];
            F = F || {};
            var y = F.clockseq !== undefined ? F.clockseq : g;
            var t = F.msecs !== undefined ? F.msecs : new Date().getTime();
            var E = F.nsecs !== undefined ? F.nsecs : l + 1;
            var u = (t - n) + (E - l) / 10000;
            if (u < 0 && F.clockseq === undefined) {
                y = y + 1 & 16383
            }
            if ((u < 0 || t > n) && F.nsecs === undefined) {
                E = 0
            }
            if (E >= 10000) {
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
            }
            n = t;
            l = E;
            g = y;
            t += 12219292800000;
            var D = ((t & 268435455) * 10000 + E) % 4294967296;
            B[A++] = D >>> 24 & 255;
            B[A++] = D >>> 16 & 255;
            B[A++] = D >>> 8 & 255;
            B[A++] = D & 255;
            var C = (t / 4294967296 * 10000) & 268435455;
            B[A++] = C >>> 8 & 255;
            B[A++] = C & 255;
            B[A++] = C >>> 24 & 15 | 16;
            B[A++] = C >>> 16 & 255;
            B[A++] = y >>> 8 | 128;
            B[A++] = y & 255;
            var x = F.node || p;
            for (var w = 0; w < 6; w++) {
                B[A + w] = x[w]
            }
            return v ? v : m(B)
        }

        function o(u, t, y) {
            var v = t && y || 0;
            if (typeof(u) == "string") {
                t = u == "binary" ? new Array(16) : null;
                u = null
            }
            u = u || {};
            var x = u.random || (u.rng || d)();
            x[6] = (x[6] & 15) | 64;
            x[8] = (x[8] & 63) | 128;
            if (t) {
                for (var w = 0; w < 16; w++) {
                    t[v + w] = x[w]
                }
            }
            return t || m(x)
        }
        var a = o;
        a.v1 = r;
        a.v4 = o;
        a.parse = f;
        a.unparse = m;
        b.exports = a
    }, {
        "./rng": 11
    }],
    13: [function(d, f, a) {
        var h = d("./lib_managed/lodash"),
            g = d("./lib/helpers"),
            c = typeof a !== "undefined" ? a : this,
            b = window;
        c.errorManager = function(j) {
            function i(p, m, q, o, n, r) {
                var l = (n && n.stack) ? n.stack : null;
                j.trackSelfDescribingEvent({
                    schema: "iglu:com.snowplowanalytics.snowplow/application_error/jsonschema/1-0-1",
                    data: {
                        programmingLanguage: "JAVASCRIPT",
                        message: p || "JS Exception. Browser doesn't support ErrorEvent API",
                        stackTrace: l,
                        lineNumber: q,
                        lineColumn: o,
                        fileName: m
                    }
                }, r)
            }

            function k(o, l, n) {
                var m;
                if (h.isFunction(n)) {
                    m = l.concat(n(o))
                } else {
                    m = l
                }
                i(o.message, o.filename, o.lineno, o.colno, o.error, m)
            }
            return {
                trackError: i,
                enableErrorTracking: function(l, o, n) {
                    function m(p) {
                        if (h.isFunction(l) && l(p) || l == null) {
                            k(p, n, o)
                        }
                    }
                    g.addEventListener(b, "error", m, true)
                }
            }
        }
    }, {
        "./lib/helpers": 18,
        "./lib_managed/lodash": 20
    }],
    14: [function(c, d, a) {
        var g = c("./lib_managed/lodash"),
            f = c("./lib/helpers"),
            b = typeof a !== "undefined" ? a : this;
        b.getFormTrackingManager = function(l, k, n) {
            var q = ["textarea", "input", "select"];
            var h = k + "form";
            var r = function() {
                return true
            };
            var j = function() {
                return true
            };

            function p(t) {
                return t[g.find(["name", "id", "type", "nodeName"], function(u) {
                    return t[u] && typeof t[u] === "string"
                })]
            }

            function s(t) {
                while (t && t.nodeName && t.nodeName.toUpperCase() !== "HTML" && t.nodeName.toUpperCase() !== "FORM") {
                    t = t.parentNode
                }
                if (t && t.nodeName && t.nodeName.toUpperCase() === "FORM") {
                    return p(t)
                }
            }

            function i(u) {
                var t = [];
                g.forEach(q, function(v) {
                    var w = g.filter(u.getElementsByTagName(v), function(x) {
                        return x.hasOwnProperty(h)
                    });
                    g.forEach(w, function(y) {
                        if (y.type === "submit") {
                            return
                        }
                        var x = {
                            name: p(y),
                            value: y.value,
                            nodeName: y.nodeName
                        };
                        if (y.type && y.nodeName.toUpperCase() === "INPUT") {
                            x.type = y.type
                        }
                        if ((y.type === "checkbox" || y.type === "radio") && !y.checked) {
                            x.value = null
                        }
                        t.push(x)
                    })
                });
                return t
            }

            function m(t) {
                return function(x) {
                    var u = x.target;
                    var v = (u.nodeName && u.nodeName.toUpperCase() === "INPUT") ? u.type : null;
                    var w = (u.type === "checkbox" && !u.checked) ? null : u.value;
                    l.trackFormChange(s(u), p(u), u.nodeName, v, f.getCssClasses(u), w, n(t))
                }
            }

            function o(t) {
                return function(w) {
                    var v = w.target;
                    var u = i(v);
                    l.trackFormSubmission(p(v), f.getCssClasses(v), u, n(t))
                }
            }
            return {
                configureFormTracking: function(t) {
                    if (t) {
                        r = f.getFilter(t.forms, true);
                        j = f.getFilter(t.fields, false)
                    }
                },
                addFormListeners: function(t) {
                    g.forEach(document.getElementsByTagName("form"), function(u) {
                        if (r(u) && !u[h]) {
                            g.forEach(q, function(v) {
                                g.forEach(u.getElementsByTagName(v), function(w) {
                                    if (j(w) && !w[h] && w.type.toLowerCase() !== "password") {
                                        f.addEventListener(w, "change", m(t), false);
                                        w[h] = true
                                    }
                                })
                            });
                            f.addEventListener(u, "submit", o(t));
                            u[h] = true
                        }
                    })
                }
            }
        }
    }, {
        "./lib/helpers": 18,
        "./lib_managed/lodash": 20
    }],
    15: [function(b, c, a) {
        (function() {
            var g = b("./lib_managed/lodash"),
                f = b("./lib/helpers"),
                d = typeof a !== "undefined" ? a : this;
            d.InQueueManager = function(h, o, n, k, p) {
                var j = {};

                function r(v) {
                    var w = [];
                    if (!v || v.length === 0) {
                        w = g.map(j)
                    } else {
                        for (var u = 0; u < v.length; u++) {
                            if (j.hasOwnProperty(v[u])) {
                                w.push(j[v[u]])
                            } else {
                                f.warn('Warning: Tracker namespace "' + v[u] + '" not configured')
                            }
                        }
                    }
                    if (w.length === 0) {
                        f.warn("Warning: No tracker configured")
                    }
                    return w
                }

                function l(v, w, u) {
                    f.warn(v + " is deprecated. Set the collector when a new tracker instance using newTracker.");
                    var i;
                    if (g.isUndefined(u)) {
                        i = "sp"
                    } else {
                        i = u
                    }
                    q(i);
                    j[i][v](w)
                }

                function q(u, v, i) {
                    i = i || {};
                    if (!j.hasOwnProperty(u)) {
                        j[u] = new h(p, u, o, n, i);
                        j[u].setCollectorUrl(v)
                    } else {
                        f.warn("Tracker namespace " + u + " already exists.")
                    }
                }

                function t(w) {
                    var v = w.split(":"),
                        i = v[0],
                        u = (v.length > 1) ? v[1].split(";") : [];
                    return [i, u]
                }

                function s() {
                    var w, v, y, x, u, B, z, A;
                    for (w = 0; w < arguments.length; w += 1) {
                        x = arguments[w];
                        u = Array.prototype.shift.call(x);
                        if (g.isFunction(u)) {
                            u.apply(j, x);
                            continue
                        }
                        B = t(u);
                        y = B[0];
                        z = B[1];
                        if (y === "newTracker") {
                            q(x[0], x[1], x[2]);
                            continue
                        }
                        if ((y === "setCollectorCf" || y === "setCollectorUrl") && (!z || z.length === 0)) {
                            l(y, x[0], x[1]);
                            continue
                        }
                        A = r(z);
                        for (v = 0; v < A.length; v++) {
                            A[v][y].apply(A[v], x)
                        }
                    }
                }
                for (var m = 0; m < k.length; m++) {
                    s(k[m])
                }
                return {
                    push: s
                }
            }
        }())
    }, {
        "./lib/helpers": 18,
        "./lib_managed/lodash": 20
    }],
    16: [function(d, f, b) {
        var h = d("./snowplow"),
            g, a, c = window;
        if (c.GlobalSnowplowNamespace && c.GlobalSnowplowNamespace.length > 0) {
            g = c.GlobalSnowplowNamespace.shift();
            a = c[g];
            a.q = new h.Snowplow(a.q, g)
        } else {
            c._snaq = c._snaq || [];
            c._snaq = new h.Snowplow(c._snaq, "_snaq")
        }
    }, {
        "./snowplow": 23
    }],
    17: [function(b, c, a) {
        (function() {
            var m = b("../lib_managed/lodash"),
                l = b("murmurhash").v3,
                h = b("jstimezonedetect").jstz.determine(),
                f = b("browser-cookie-lite"),
                i = typeof a !== "undefined" ? a : this,
                k = window,
                d = navigator,
                j = screen,
                g = document;
            i.hasSessionStorage = function() {
                try {
                    return !!k.sessionStorage
                } catch (n) {
                    return true
                }
            };
            i.hasLocalStorage = function() {
                try {
                    return !!k.localStorage
                } catch (n) {
                    return true
                }
            };
            i.localStorageAccessible = function() {
                var n = "modernizr";
                if (!i.hasLocalStorage()) {
                    return false
                }
                try {
                    k.localStorage.setItem(n, n);
                    k.localStorage.removeItem(n);
                    return true
                } catch (o) {
                    return false
                }
            };
            i.hasCookies = function(n) {
                var o = n || "testcookie";
                if (m.isUndefined(d.cookieEnabled)) {
                    f.cookie(o, "1");
                    return f.cookie(o) === "1" ? "1" : "0"
                }
                return d.cookieEnabled ? "1" : "0"
            };
            i.detectSignature = function(s) {
                var q = [d.userAgent, [j.height, j.width, j.colorDepth].join("x"), (new Date()).getTimezoneOffset(), i.hasSessionStorage(), i.hasLocalStorage()];
                var n = [];
                if (d.plugins) {
                    for (var r = 0; r < d.plugins.length; r++) {
                        if (d.plugins[r]) {
                            var o = [];
                            for (var p = 0; p < d.plugins[r].length; p++) {
                                o.push([d.plugins[r][p].type, d.plugins[r][p].suffixes])
                            }
                            n.push([d.plugins[r].name + "::" + d.plugins[r].description, o.join("~")])
                        }
                    }
                }
                return l(q.join("###") + "###" + n.sort().join(";"), s)
            };
            i.detectTimezone = function() {
                return (typeof(h) === "undefined") ? "" : h.name()
            };
            i.detectViewport = function() {
                var q = k,
                    o = "inner";
                if (!("innerWidth" in k)) {
                    o = "client";
                    q = g.documentElement || g.body
                }
                var p = q[o + "Width"];
                var n = q[o + "Height"];
                if (p >= 0 && n >= 0) {
                    return p + "x" + n
                } else {
                    return null
                }
            };
            i.detectDocumentSize = function() {
                var r = g.documentElement,
                    p = g.body,
                    q = p ? Math.max(p.offsetHeight, p.scrollHeight) : 0;
                var n = Math.max(r.clientWidth, r.offsetWidth, r.scrollWidth);
                var o = Math.max(r.clientHeight, r.offsetHeight, r.scrollHeight, q);
                return isNaN(n) || isNaN(o) ? "" : n + "x" + o
            };
            i.detectBrowserFeatures = function(p, o) {
                var n, r, s = {
                        pdf: "application/pdf",
                        qt: "video/quicktime",
                        realp: "audio/x-pn-realaudio-plugin",
                        wma: "application/x-mplayer2",
                        dir: "application/x-director",
                        fla: "application/x-shockwave-flash",
                        java: "application/x-java-vm",
                        gears: "application/x-googlegears",
                        ag: "application/x-silverlight"
                    },
                    q = {};
                if (d.mimeTypes && d.mimeTypes.length) {
                    for (n in s) {
                        if (Object.prototype.hasOwnProperty.call(s, n)) {
                            r = d.mimeTypes[s[n]];
                            q[n] = (r && r.enabledPlugin) ? "1" : "0"
                        }
                    }
                }
                if (d.constructor === window.Navigator && typeof d.javaEnabled !== "unknown" && !m.isUndefined(d.javaEnabled) && d.javaEnabled()) {
                    q.java = "1"
                }
                if (m.isFunction(k.GearsFactory)) {
                    q.gears = "1"
                }
                q.res = j.width + "x" + j.height;
                q.cd = j.colorDepth;
                if (p) {
                    q.cookie = i.hasCookies(o)
                }
                return q
            }
        }())
    }, {
        "../lib_managed/lodash": 20,
        "browser-cookie-lite": 1,
        jstimezonedetect: 4,
        murmurhash: 5
    }],
    18: [function(b, c, a) {
        (function() {
            var h = b("../lib_managed/lodash"),
                f = b("browser-cookie-lite"),
                d = typeof a !== "undefined" ? a : this;
            d.fixupTitle = function(j) {
                if (!h.isString(j)) {
                    j = j.text || "";
                    var i = document.getElementsByTagName("title");
                    if (i && !h.isUndefined(i[0])) {
                        j = i[0].text
                    }
                }
                return j
            };
            d.getHostName = function(i) {
                var k = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
                    j = k.exec(i);
                return j ? j[1] : i
            };
            d.fixupDomain = function(j) {
                var i = j.length;
                if (j.charAt(--i) === ".") {
                    j = j.slice(0, i)
                }
                if (j.slice(0, 2) === "*.") {
                    j = j.slice(1)
                }
                return j
            };
            d.getReferrer = function(k) {
                var j = "";
                var i = d.fromQuerystring("referrer", window.location.href) || d.fromQuerystring("referer", window.location.href);
                if (i) {
                    return i
                }
                if (k) {
                    return k
                }
                try {
                    j = window.top.document.referrer
                } catch (m) {
                    if (window.parent) {
                        try {
                            j = window.parent.document.referrer
                        } catch (l) {
                            j = ""
                        }
                    }
                }
                if (j === "") {
                    j = document.referrer
                }
                return j
            };
            d.addEventListener = function(l, k, j, i) {
                if (l.addEventListener) {
                    l.addEventListener(k, j, i);
                    return true
                }
                if (l.attachEvent) {
                    return l.attachEvent("on" + k, j)
                }
                l["on" + k] = j
            };
            d.fromQuerystring = function(k, j) {
                var i = new RegExp("^[^#]*[?&]" + k + "=([^&#]*)").exec(j);
                if (!i) {
                    return null
                }
                return decodeURIComponent(i[1].replace(/\+/g, " "))
            };
            d.warn = function(i) {
                if (typeof console !== "undefined") {
                    console.warn("Snowplow: " + i)
                }
            };
            d.getCssClasses = function(i) {
                return i.className.match(/\S+/g) || []
            };

            function g(j, m) {
                var l = d.getCssClasses(j),
                    k;
                for (k = 0; k < l.length; k++) {
                    if (m[l[k]]) {
                        return true
                    }
                }
                return false
            }
            d.getFilter = function(n, o) {
                if (h.isArray(n) || !h.isObject(n)) {
                    return function() {
                        return true
                    }
                }
                if (n.hasOwnProperty("filter")) {
                    return n.filter
                } else {
                    var k = n.hasOwnProperty("whitelist");
                    var m = n.whitelist || n.blacklist;
                    if (!h.isArray(m)) {
                        m = [m]
                    }
                    var j = {};
                    for (var l = 0; l < m.length; l++) {
                        j[m[l]] = true
                    }
                    if (o) {
                        return function(i) {
                            return g(i, j) === k
                        }
                    } else {
                        return function(i) {
                            return i.name in j === k
                        }
                    }
                }
            };
            d.decorateQuerystring = function(j, k, s) {
                var q = k + "=" + s;
                var p = j.split("#");
                var l = p[0].split("?");
                var o = l.shift();
                var t = l.join("?");
                if (!t) {
                    t = q
                } else {
                    var m = true;
                    var r = t.split("&");
                    for (var n = 0; n < r.length; n++) {
                        if (r[n].substr(0, k.length + 1) === k + "=") {
                            m = false;
                            r[n] = q;
                            t = r.join("&");
                            break
                        }
                    }
                    if (m) {
                        t = q + "&" + t
                    }
                }
                p[0] = o + "?" + t;
                return p.join("#")
            };
            d.attemptGetLocalStorage = function(i) {
                try {
                    return localStorage.getItem(i)
                } catch (j) {}
            };
            d.attemptWriteLocalStorage = function(i, j) {
                try {
                    localStorage.setItem(i, j);
                    return true
                } catch (k) {
                    return false
                }
            };
            d.findRootDomain = function() {
                var k = "_sp_root_domain_test_";
                var q = k + new Date().getTime();
                var o = "_test_value_" + new Date().getTime();
                var m = window.location.hostname.split(".");
                var j = m.length - 1;
                while (j >= 0) {
                    var n = m.slice(j, m.length).join(".");
                    f.cookie(q, o, 0, "/", n);
                    if (f.cookie(q) === o) {
                        d.deleteCookie(q, n);
                        var p = d.getCookiesWithPrefix(k);
                        for (var l = 0; l < p.length; l++) {
                            d.deleteCookie(p[l], n)
                        }
                        return n
                    }
                    j -= 1
                }
                return window.location.hostname
            };
            d.isValueInArray = function(k, l) {
                for (var j = 0; j < l.length; j++) {
                    if (l[j] === k) {
                        return true
                    }
                }
                return false
            };
            d.deleteCookie = function(j, i) {
                f.cookie(j, "", -1, "/", i)
            };
            d.getCookiesWithPrefix = function(j) {
                var l = document.cookie.split("; ");
                var m = [];
                for (var k = 0; k < l.length; k++) {
                    if (l[k].substring(0, j.length) === j) {
                        m.push(l[k])
                    }
                }
                return m
            };
            d.parseInt = function(j) {
                var i = parseInt(j);
                return isNaN(i) ? undefined : i
            };
            d.parseFloat = function(j) {
                var i = parseFloat(j);
                return isNaN(i) ? undefined : i
            }
        }())
    }, {
        "../lib_managed/lodash": 20,
        "browser-cookie-lite": 1
    }],
    19: [function(b, c, a) {
        (function() {
            var g = b("./helpers"),
                d = typeof a !== "undefined" ? a : this;

            function i(k) {
                var j = new RegExp("^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$");
                return j.test(k)
            }

            function f(m) {
                var k, j;
                if (i(m)) {
                    try {
                        k = document.body.children[0].children[0].children[0].children[0].children[0].children[0].innerHTML;
                        j = "You have reached the cached page for";
                        return k.slice(0, j.length) === j
                    } catch (l) {
                        return false
                    }
                }
            }

            function h(l, k) {
                var n = new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+))([?][^#]+)"),
                    m = n.exec(l),
                    j = g.fromQuerystring(k, m[1]);
                return j
            }
            d.fixupUrl = function(l, j, k) {
                if (l === "translate.googleusercontent.com") {
                    if (k === "") {
                        k = j
                    }
                    j = h(j, "u");
                    l = g.getHostName(j)
                } else {
                    if (l === "cc.bingj.com" || l === "webcache.googleusercontent.com" || f(l)) {
                        j = document.links[0].href;
                        l = g.getHostName(j)
                    }
                }
                return [l, j, k]
            }
        }())
    }, {
        "./helpers": 18
    }],
    20: [function(b, c, a) {
        (function(d) {
            (function() {
                var J;
                var aC = "3.10.1";
                var C = "[object Arguments]",
                    aJ = "[object Array]",
                    a0 = "[object Boolean]",
                    E = "[object Date]",
                    aT = "[object Error]",
                    g = "[object Function]",
                    aV = "[object Map]",
                    o = "[object Number]",
                    m = "[object Object]",
                    ab = "[object RegExp]",
                    j = "[object Set]",
                    D = "[object String]",
                    B = "[object WeakMap]";
                var a3 = "[object ArrayBuffer]",
                    bw = "[object Float32Array]",
                    ae = "[object Float64Array]",
                    z = "[object Int8Array]",
                    aN = "[object Int16Array]",
                    I = "[object Int32Array]",
                    aZ = "[object Uint8Array]",
                    at = "[object Uint8ClampedArray]",
                    ay = "[object Uint16Array]",
                    v = "[object Uint32Array]";
                var bm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
                    x = /^\w*$/,
                    au = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
                var bz = /\\(\\)?/g;
                var aL = /\w*$/;
                var l = /^\[object .+?Constructor\]$/;
                var X = /^\d+$/;
                var br = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
                var ar = {};
                ar[bw] = ar[ae] = ar[z] = ar[aN] = ar[I] = ar[aZ] = ar[at] = ar[ay] = ar[v] = true;
                ar[C] = ar[aJ] = ar[a3] = ar[a0] = ar[E] = ar[aT] = ar[g] = ar[aV] = ar[o] = ar[m] = ar[ab] = ar[j] = ar[D] = ar[B] = false;
                var ax = {};
                ax[C] = ax[aJ] = ax[a3] = ax[a0] = ax[E] = ax[bw] = ax[ae] = ax[z] = ax[aN] = ax[I] = ax[o] = ax[m] = ax[ab] = ax[D] = ax[aZ] = ax[at] = ax[ay] = ax[v] = true;
                ax[aT] = ax[g] = ax[aV] = ax[j] = ax[B] = false;
                var aO = {
                    "function": true,
                    object: true
                };
                var G = aO[typeof a] && a && !a.nodeType && a;
                var al = aO[typeof c] && c && !c.nodeType && c;
                var aU = G && al && typeof d == "object" && d && d.Object && d;
                var bp = aO[typeof self] && self && self.Object && self;
                var ac = aO[typeof window] && window && window.Object && window;
                var bx = al && al.exports === G && G;
                var bl = aU || ((ac !== (this && this.window)) && ac) || bp || this;

                function L(bH, bD, bG) {
                    var bF = bH.length,
                        bE = bG ? bF : -1;
                    while ((bG ? bE-- : ++bE < bF)) {
                        if (bD(bH[bE], bE, bH)) {
                            return bE
                        }
                    }
                    return -1
                }

                function aI(bD) {
                    return bD == null ? "" : (bD + "")
                }
                var Y = (function() {
                    try {
                        Object({
                            toString: 0
                        } + "")
                    } catch (bD) {
                        return function() {
                            return false
                        }
                    }
                    return function(bE) {
                        return typeof bE.toString != "function" && typeof(bE + "") == "string"
                    }
                }());

                function n(bD) {
                    return !!bD && typeof bD == "object"
                }
                var am = Array.prototype,
                    p = Error.prototype,
                    bq = Object.prototype,
                    aA = String.prototype;
                var M = Function.prototype.toString;
                var aF = bq.hasOwnProperty;
                var r = bq.toString;
                var w = RegExp("^" + M.call(aF).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                var bh = bl.ArrayBuffer,
                    aE = bq.propertyIsEnumerable,
                    a2 = am.splice,
                    Z = bl.Uint8Array;
                var A = aD(Array, "isArray"),
                    by = aD(Object, "keys");
                var aq = 9007199254740991;
                var R = {};
                R[bw] = bl.Float32Array;
                R[ae] = bl.Float64Array;
                R[z] = bl.Int8Array;
                R[aN] = bl.Int16Array;
                R[I] = bl.Int32Array;
                R[aZ] = Z;
                R[at] = bl.Uint8ClampedArray;
                R[ay] = bl.Uint16Array;
                R[v] = bl.Uint32Array;
                var a4 = {};
                a4[aJ] = a4[E] = a4[o] = {
                    constructor: true,
                    toLocaleString: true,
                    toString: true,
                    valueOf: true
                };
                a4[a0] = a4[D] = {
                    constructor: true,
                    toString: true,
                    valueOf: true
                };
                a4[aT] = a4[g] = a4[ab] = {
                    constructor: true,
                    toString: true
                };
                a4[m] = {
                    constructor: true
                };
                a5(br, function(bE) {
                    for (var bD in a4) {
                        if (aF.call(a4, bD)) {
                            var bF = a4[bD];
                            bF[bE] = aF.call(bF, bE)
                        }
                    }
                });

                function Q() {}
                var bt = Q.support = {};
                (function(bD) {
                    var bF = function() {
                            this.x = bD
                        },
                        bE = {
                            "0": bD,
                            length: bD
                        },
                        bH = [];
                    bF.prototype = {
                        valueOf: bD,
                        y: bD
                    };
                    for (var bG in new bF) {
                        bH.push(bG)
                    }
                    bt.enumErrorProps = aE.call(p, "message") || aE.call(p, "name");
                    bt.enumPrototypes = aE.call(bF, "prototype");
                    bt.nonEnumShadows = !/valueOf/.test(bH);
                    bt.spliceObjects = (a2.call(bE, 0, 1), !bE[0]);
                    bt.unindexedChars = ("x" [0] + Object("x")[0]) != "xx"
                }(1, 0));

                function t(bF, bG) {
                    var bD = -1,
                        bE = bF.length;
                    bG || (bG = Array(bE));
                    while (++bD < bE) {
                        bG[bD] = bF[bD]
                    }
                    return bG
                }

                function a5(bG, bF) {
                    var bD = -1,
                        bE = bG.length;
                    while (++bD < bE) {
                        if (bF(bG[bD], bD, bG) === false) {
                            break
                        }
                    }
                    return bG
                }

                function bC(bJ, bE) {
                    var bF = -1,
                        bH = bJ.length,
                        bG = -1,
                        bD = [];
                    while (++bF < bH) {
                        var bI = bJ[bF];
                        if (bE(bI, bF, bJ)) {
                            bD[++bG] = bI
                        }
                    }
                    return bD
                }

                function bc(bH, bG) {
                    var bE = -1,
                        bF = bH.length,
                        bD = Array(bF);
                    while (++bE < bF) {
                        bD[bE] = bG(bH[bE], bE, bH)
                    }
                    return bD
                }

                function u(bG, bD) {
                    var bE = -1,
                        bF = bG.length;
                    while (++bE < bF) {
                        if (bD(bG[bE], bE, bG)) {
                            return true
                        }
                    }
                    return false
                }

                function ba(bD, bE) {
                    return bE == null ? bD : aY(bE, aa(bE), bD)
                }

                function aY(bI, bG, bE) {
                    bE || (bE = {});
                    var bD = -1,
                        bH = bG.length;
                    while (++bD < bH) {
                        var bF = bG[bD];
                        bE[bF] = bI[bF]
                    }
                    return bE
                }

                function F(bF, bD, bG) {
                    var bE = typeof bF;
                    if (bE == "function") {
                        return bD === J ? bF : S(bF, bD, bG)
                    }
                    if (bF == null) {
                        return ao
                    }
                    if (bE == "object") {
                        return bn(bF)
                    }
                    return bD === J ? aW(bF) : aX(bF, bD)
                }

                function aR(bL, bJ, bE, bM, bG, bH, bF) {
                    var bO;
                    if (bE) {
                        bO = bG ? bE(bL, bM, bG) : bE(bL)
                    }
                    if (bO !== J) {
                        return bO
                    }
                    if (!U(bL)) {
                        return bL
                    }
                    var bI = i(bL);
                    if (bI) {
                        bO = aw(bL);
                        if (!bJ) {
                            return t(bL, bO)
                        }
                    } else {
                        var bN = r.call(bL),
                            bK = bN == g;
                        if (bN == m || bN == C || (bK && !bG)) {
                            if (Y(bL)) {
                                return bG ? bL : {}
                            }
                            bO = bA(bK ? {} : bL);
                            if (!bJ) {
                                return ba(bO, bL)
                            }
                        } else {
                            return ax[bN] ? az(bL, bN, bJ) : (bG ? bL : {})
                        }
                    }
                    bH || (bH = []);
                    bF || (bF = []);
                    var bD = bH.length;
                    while (bD--) {
                        if (bH[bD] == bL) {
                            return bF[bD]
                        }
                    }
                    bH.push(bL);
                    bF.push(bO);
                    (bI ? a5 : av)(bL, function(bQ, bP) {
                        bO[bP] = aR(bQ, bJ, bE, bP, bL, bH, bF)
                    });
                    return bO
                }
                var ag = V(av);

                function N(bF, bE) {
                    var bD = [];
                    ag(bF, function(bH, bG, bI) {
                        if (bE(bH, bG, bI)) {
                            bD.push(bH)
                        }
                    });
                    return bD
                }

                function ah(bH, bE, bG, bF) {
                    var bD;
                    bG(bH, function(bJ, bI, bK) {
                        if (bE(bJ, bI, bK)) {
                            bD = bF ? bI : bJ;
                            return false
                        }
                    });
                    return bD
                }
                var bg = ai();

                function av(bD, bE) {
                    return bg(bD, bE, aa)
                }

                function af(bF, bH, bD) {
                    if (bF == null) {
                        return
                    }
                    bF = s(bF);
                    if (bD !== J && bD in bF) {
                        bH = [bD]
                    }
                    var bE = 0,
                        bG = bH.length;
                    while (bF != null && bE < bG) {
                        bF = s(bF)[bH[bE++]]
                    }
                    return (bE && bE == bG) ? bF : J
                }

                function bi(bH, bE, bG, bF, bD, bI) {
                    if (bH === bE) {
                        return true
                    }
                    if (bH == null || bE == null || (!U(bH) && !n(bE))) {
                        return bH !== bH && bE !== bE
                    }
                    return a9(bH, bE, bi, bG, bF, bD, bI)
                }

                function a9(bU, bH, bO, bL, bN, bR, bP) {
                    var bK = i(bU),
                        bM = i(bH),
                        bF = aJ,
                        bS = aJ;
                    if (!bK) {
                        bF = r.call(bU);
                        if (bF == C) {
                            bF = m
                        } else {
                            if (bF != m) {
                                bK = O(bU)
                            }
                        }
                    }
                    if (!bM) {
                        bS = r.call(bH);
                        if (bS == C) {
                            bS = m
                        } else {
                            if (bS != m) {
                                bM = O(bH)
                            }
                        }
                    }
                    var bD = bF == m && !Y(bU),
                        bE = bS == m && !Y(bH),
                        bJ = bF == bS;
                    if (bJ && !(bK || bD)) {
                        return P(bU, bH, bF)
                    }
                    if (!bN) {
                        var bT = bD && aF.call(bU, "__wrapped__"),
                            bQ = bE && aF.call(bH, "__wrapped__");
                        if (bT || bQ) {
                            return bO(bT ? bU.value() : bU, bQ ? bH.value() : bH, bL, bN, bR, bP)
                        }
                    }
                    if (!bJ) {
                        return false
                    }
                    bR || (bR = []);
                    bP || (bP = []);
                    var bG = bR.length;
                    while (bG--) {
                        if (bR[bG] == bU) {
                            return bP[bG] == bH
                        }
                    }
                    bR.push(bU);
                    bP.push(bH);
                    var bI = (bK ? bo : bk)(bU, bH, bO, bL, bN, bR, bP);
                    bR.pop();
                    bP.pop();
                    return bI
                }

                function aH(bH, bL, bG) {
                    var bK = bL.length,
                        bE = bK,
                        bF = !bG;
                    if (bH == null) {
                        return !bE
                    }
                    bH = s(bH);
                    while (bK--) {
                        var bI = bL[bK];
                        if ((bF && bI[2]) ? bI[1] !== bH[bI[0]] : !(bI[0] in bH)) {
                            return false
                        }
                    }
                    while (++bK < bE) {
                        bI = bL[bK];
                        var bM = bI[0],
                            bJ = bH[bM],
                            bD = bI[1];
                        if (bF && bI[2]) {
                            if (bJ === J && !(bM in bH)) {
                                return false
                            }
                        } else {
                            var bN = bG ? bG(bJ, bD, bM) : J;
                            if (!(bN === J ? bi(bD, bJ, bG, true) : bN)) {
                                return false
                            }
                        }
                    }
                    return true
                }

                function bs(bG, bF) {
                    var bE = -1,
                        bD = a1(bG) ? Array(bG.length) : [];
                    ag(bG, function(bI, bH, bJ) {
                        bD[++bE] = bF(bI, bH, bJ)
                    });
                    return bD
                }

                function bn(bG) {
                    var bD = aS(bG);
                    if (bD.length == 1 && bD[0][2]) {
                        var bE = bD[0][0],
                            bF = bD[0][1];
                        return function(bH) {
                            if (bH == null) {
                                return false
                            }
                            bH = s(bH);
                            return bH[bE] === bF && (bF !== J || (bE in bH))
                        }
                    }
                    return function(bH) {
                        return aH(bH, bD)
                    }
                }

                function aX(bH, bG) {
                    var bF = i(bH),
                        bE = be(bH) && aG(bG),
                        bD = (bH + "");
                    bH = bj(bH);
                    return function(bI) {
                        if (bI == null) {
                            return false
                        }
                        var bJ = bD;
                        bI = s(bI);
                        if ((bF || !bE) && !(bJ in bI)) {
                            bI = bH.length == 1 ? bI : af(bI, aM(bH, 0, -1));
                            if (bI == null) {
                                return false
                            }
                            bJ = an(bH);
                            bI = s(bI)
                        }
                        return bI[bJ] === bG ? (bG !== J || (bJ in bI)) : bi(bG, bI[bJ], J, true)
                    }
                }

                function aQ(bD) {
                    return function(bE) {
                        return bE == null ? J : s(bE)[bD]
                    }
                }

                function aP(bE) {
                    var bD = (bE + "");
                    bE = bj(bE);
                    return function(bF) {
                        return af(bF, bE, bD)
                    }
                }

                function aM(bI, bH, bE) {
                    var bF = -1,
                        bG = bI.length;
                    bH = bH == null ? 0 : (+bH || 0);
                    if (bH < 0) {
                        bH = -bH > bG ? 0 : (bG + bH)
                    }
                    bE = (bE === J || bE > bG) ? bG : (+bE || 0);
                    if (bE < 0) {
                        bE += bG
                    }
                    bG = bH > bE ? 0 : ((bE - bH) >>> 0);
                    bH >>>= 0;
                    var bD = Array(bG);
                    while (++bF < bG) {
                        bD[bF] = bI[bF + bH]
                    }
                    return bD
                }

                function S(bE, bD, bF) {
                    if (typeof bE != "function") {
                        return ao
                    }
                    if (bD === J) {
                        return bE
                    }
                    switch (bF) {
                        case 1:
                            return function(bG) {
                                return bE.call(bD, bG)
                            };
                        case 3:
                            return function(bH, bG, bI) {
                                return bE.call(bD, bH, bG, bI)
                            };
                        case 4:
                            return function(bG, bI, bH, bJ) {
                                return bE.call(bD, bG, bI, bH, bJ)
                            };
                        case 5:
                            return function(bK, bG, bI, bH, bJ) {
                                return bE.call(bD, bK, bG, bI, bH, bJ)
                            }
                    }
                    return function() {
                        return bE.apply(bD, arguments)
                    }
                }

                function q(bF) {
                    var bD = new bh(bF.byteLength),
                        bE = new Z(bD);
                    bE.set(new Z(bF));
                    return bD
                }

                function V(bE, bD) {
                    return function(bJ, bI) {
                        var bG = bJ ? a8(bJ) : 0;
                        if (!aB(bG)) {
                            return bE(bJ, bI)
                        }
                        var bF = bD ? bG : -1,
                            bH = s(bJ);
                        while ((bD ? bF-- : ++bF < bG)) {
                            if (bI(bH[bF], bF, bH) === false) {
                                break
                            }
                        }
                        return bJ
                    }
                }

                function ai(bD) {
                    return function(bF, bL, bJ) {
                        var bK = s(bF),
                            bH = bJ(bF),
                            bI = bH.length,
                            bE = bD ? bI : -1;
                        while ((bD ? bE-- : ++bE < bI)) {
                            var bG = bH[bE];
                            if (bL(bK[bG], bG, bK) === false) {
                                break
                            }
                        }
                        return bF
                    }
                }

                function bf(bE, bD) {
                    return function(bI, bF, bG) {
                        bF = bb(bF, bG, 3);
                        if (i(bI)) {
                            var bH = L(bI, bF, bD);
                            return bH > -1 ? bI[bH] : J
                        }
                        return ah(bI, bF, bE)
                    }
                }

                function ad(bD, bE) {
                    return function(bH, bG, bF) {
                        return (typeof bG == "function" && bF === J && i(bH)) ? bD(bH, bG) : bE(bH, S(bG, bF, 3))
                    }
                }

                function bv(bD) {
                    return function(bG, bH, bF) {
                        var bE = {};
                        bH = bb(bH, bF, 3);
                        av(bG, function(bL, bK, bJ) {
                            var bI = bH(bL, bK, bJ);
                            bK = bD ? bI : bK;
                            bL = bD ? bL : bI;
                            bE[bK] = bL
                        });
                        return bE
                    }
                }

                function bo(bK, bL, bO, bE, bG, bH, bF) {
                    var bJ = -1,
                        bM = bK.length,
                        bN = bL.length;
                    if (bM != bN && !(bG && bN > bM)) {
                        return false
                    }
                    while (++bJ < bM) {
                        var bD = bK[bJ],
                            bI = bL[bJ],
                            bP = bE ? bE(bG ? bI : bD, bG ? bD : bI, bJ) : J;
                        if (bP !== J) {
                            if (bP) {
                                continue
                            }
                            return false
                        }
                        if (bG) {
                            if (!u(bL, function(bQ) {
                                    return bD === bQ || bO(bD, bQ, bE, bG, bH, bF)
                                })) {
                                return false
                            }
                        } else {
                            if (!(bD === bI || bO(bD, bI, bE, bG, bH, bF))) {
                                return false
                            }
                        }
                    }
                    return true
                }

                function P(bF, bE, bD) {
                    switch (bD) {
                        case a0:
                        case E:
                            return +bF == +bE;
                        case aT:
                            return bF.name == bE.name && bF.message == bE.message;
                        case o:
                            return (bF != +bF) ? bE != +bE : bF == +bE;
                        case ab:
                        case D:
                            return bF == (bE + "")
                    }
                    return false
                }

                function bk(bT, bF, bQ, bL, bN, bS, bR) {
                    var bI = aa(bT),
                        bK = bI.length,
                        bJ = aa(bF),
                        bO = bJ.length;
                    if (bK != bO && !bN) {
                        return false
                    }
                    var bG = bK;
                    while (bG--) {
                        var bU = bI[bG];
                        if (!(bN ? bU in bF : aF.call(bF, bU))) {
                            return false
                        }
                    }
                    var bD = bN;
                    while (++bG < bK) {
                        bU = bI[bG];
                        var bV = bT[bU],
                            bE = bF[bU],
                            bH = bL ? bL(bN ? bE : bV, bN ? bV : bE, bU) : J;
                        if (!(bH === J ? bQ(bV, bE, bL, bN, bS, bR) : bH)) {
                            return false
                        }
                        bD || (bD = bU == "constructor")
                    }
                    if (!bD) {
                        var bM = bT.constructor,
                            bP = bF.constructor;
                        if (bM != bP && ("constructor" in bT && "constructor" in bF) && !(typeof bM == "function" && bM instanceof bM && typeof bP == "function" && bP instanceof bP)) {
                            return false
                        }
                    }
                    return true
                }

                function bb(bF, bE, bG) {
                    var bD = Q.callback || W;
                    bD = bD === W ? F : bD;
                    return bG ? bD(bF, bE, bG) : bD
                }
                var a8 = aQ("length");

                function aS(bE) {
                    var bD = h(bE),
                        bF = bD.length;
                    while (bF--) {
                        bD[bF][2] = aG(bD[bF][1])
                    }
                    return bD
                }

                function aD(bD, bE) {
                    var bF = bD == null ? J : bD[bE];
                    return ak(bF) ? bF : J
                }

                function aw(bF) {
                    var bE = bF.length,
                        bD = new bF.constructor(bE);
                    if (bE && typeof bF[0] == "string" && aF.call(bF, "index")) {
                        bD.index = bF.index;
                        bD.input = bF.input
                    }
                    return bD
                }

                function bA(bE) {
                    var bD = bE.constructor;
                    if (!(typeof bD == "function" && bD instanceof bD)) {
                        bD = Object
                    }
                    return new bD
                }

                function az(bI, bE, bG) {
                    var bH = bI.constructor;
                    switch (bE) {
                        case a3:
                            return q(bI);
                        case a0:
                        case E:
                            return new bH(+bI);
                        case bw:
                        case ae:
                        case z:
                        case aN:
                        case I:
                        case aZ:
                        case at:
                        case ay:
                        case v:
                            if (bH instanceof bH) {
                                bH = R[bE]
                            }
                            var bF = bI.buffer;
                            return new bH(bG ? q(bF) : bF, bI.byteOffset, bI.length);
                        case o:
                        case D:
                            return new bH(bI);
                        case ab:
                            var bD = new bH(bI.source, aL.exec(bI));
                            bD.lastIndex = bI.lastIndex
                    }
                    return bD
                }

                function a1(bD) {
                    return bD != null && aB(a8(bD))
                }

                function H(bE, bD) {
                    bE = (typeof bE == "number" || X.test(bE)) ? +bE : -1;
                    bD = bD == null ? aq : bD;
                    return bE > -1 && bE % 1 == 0 && bE < bD
                }

                function f(bH, bF, bE) {
                    if (!U(bE)) {
                        return false
                    }
                    var bG = typeof bF;
                    if (bG == "number" ? (a1(bE) && H(bF, bE.length)) : (bG == "string" && bF in bE)) {
                        var bD = bE[bF];
                        return bH === bH ? (bH === bD) : (bD !== bD)
                    }
                    return false
                }

                function be(bG, bE) {
                    var bF = typeof bG;
                    if ((bF == "string" && x.test(bG)) || bF == "number") {
                        return true
                    }
                    if (i(bG)) {
                        return false
                    }
                    var bD = !bm.test(bG);
                    return bD || (bE != null && bG in s(bE))
                }

                function aB(bD) {
                    return typeof bD == "number" && bD > -1 && bD % 1 == 0 && bD <= aq
                }

                function aG(bD) {
                    return bD === bD && !U(bD)
                }

                function ap(bG) {
                    var bJ = a6(bG),
                        bI = bJ.length,
                        bK = bI && bG.length;
                    var bE = !!bK && aB(bK) && (i(bG) || k(bG) || bu(bG));
                    var bF = -1,
                        bD = [];
                    while (++bF < bI) {
                        var bH = bJ[bF];
                        if ((bE && H(bH, bK)) || aF.call(bG, bH)) {
                            bD.push(bH)
                        }
                    }
                    return bD
                }

                function s(bG) {
                    if (Q.support.unindexedChars && bu(bG)) {
                        var bE = -1,
                            bF = bG.length,
                            bD = Object(bG);
                        while (++bE < bF) {
                            bD[bE] = bG.charAt(bE)
                        }
                        return bD
                    }
                    return U(bG) ? bG : Object(bG)
                }

                function bj(bE) {
                    if (i(bE)) {
                        return bE
                    }
                    var bD = [];
                    aI(bE).replace(au, function(bH, bI, bF, bG) {
                        bD.push(bF ? bG.replace(bz, "$1") : (bI || bH))
                    });
                    return bD
                }

                function an(bE) {
                    var bD = bE ? bE.length : 0;
                    return bD ? bE[bD - 1] : J
                }

                function T(bG, bD, bE) {
                    var bF = i(bG) ? bC : N;
                    bD = bb(bD, bE, 3);
                    return bF(bG, bD)
                }
                var bB = bf(ag);
                var a7 = ad(a5, ag);

                function K(bG, bF, bD) {
                    var bE = i(bG) ? bc : bs;
                    bF = bb(bF, bD, 3);
                    return bE(bG, bF)
                }

                function k(bD) {
                    return n(bD) && a1(bD) && aF.call(bD, "callee") && !aE.call(bD, "callee")
                }
                var i = A || function(bD) {
                    return n(bD) && aB(bD.length) && r.call(bD) == aJ
                };

                function bd(bD) {
                    return U(bD) && r.call(bD) == g
                }

                function U(bE) {
                    var bD = typeof bE;
                    return !!bE && (bD == "object" || bD == "function")
                }

                function ak(bD) {
                    if (bD == null) {
                        return false
                    }
                    if (bd(bD)) {
                        return w.test(M.call(bD))
                    }
                    return n(bD) && (Y(bD) ? w : l).test(bD)
                }

                function bu(bD) {
                    return typeof bD == "string" || (n(bD) && r.call(bD) == D)
                }

                function O(bD) {
                    return n(bD) && aB(bD.length) && !!ar[r.call(bD)]
                }

                function aj(bD) {
                    return bD === J
                }
                var aa = !by ? ap : function(bE) {
                    var bD = bE == null ? J : bE.constructor;
                    if ((typeof bD == "function" && bD.prototype === bE) || (typeof bE == "function" ? Q.support.enumPrototypes : a1(bE))) {
                        return ap(bE)
                    }
                    return U(bE) ? by(bE) : []
                };

                function a6(bF) {
                    if (bF == null) {
                        return []
                    }
                    if (!U(bF)) {
                        bF = Object(bF)
                    }
                    var bD = bF.length,
                        bN = Q.support;
                    bD = (bD && aB(bD) && (i(bF) || k(bF) || bu(bF)) && bD) || 0;
                    var bE = bF.constructor,
                        bK = -1,
                        bH = (bd(bE) && bE.prototype) || bq,
                        bG = bH === bF,
                        bR = Array(bD),
                        bJ = bD > 0,
                        bL = bN.enumErrorProps && (bF === p || bF instanceof Error),
                        bQ = bN.enumPrototypes && bd(bF);
                    while (++bK < bD) {
                        bR[bK] = (bK + "")
                    }
                    for (var bM in bF) {
                        if (!(bQ && bM == "prototype") && !(bL && (bM == "message" || bM == "name")) && !(bJ && H(bM, bD)) && !(bM == "constructor" && (bG || !aF.call(bF, bM)))) {
                            bR.push(bM)
                        }
                    }
                    if (bN.nonEnumShadows && bF !== bq) {
                        var bP = bF === aA ? D : (bF === p ? aT : r.call(bF)),
                            bO = a4[bP] || a4[m];
                        if (bP == m) {
                            bH = bq
                        }
                        bD = br.length;
                        while (bD--) {
                            bM = br[bD];
                            var bI = bO[bM];
                            if (!(bG && bI) && (bI ? aF.call(bF, bM) : bF[bM] !== bH[bM])) {
                                bR.push(bM)
                            }
                        }
                    }
                    return bR
                }
                var aK = bv();

                function h(bF) {
                    bF = s(bF);
                    var bE = -1,
                        bH = aa(bF),
                        bI = bH.length,
                        bD = Array(bI);
                    while (++bE < bI) {
                        var bG = bH[bE];
                        bD[bE] = [bG, bF[bG]]
                    }
                    return bD
                }

                function W(bF, bD, bE) {
                    if (bE && f(bF, bD, bE)) {
                        bD = J
                    }
                    return n(bF) ? y(bF) : F(bF, bD)
                }

                function ao(bD) {
                    return bD
                }

                function y(bD) {
                    return bn(aR(bD, true))
                }

                function aW(bD) {
                    return be(bD) ? aQ(bD) : aP(bD)
                }
                Q.callback = W;
                Q.filter = T;
                Q.forEach = a7;
                Q.keys = aa;
                Q.keysIn = a6;
                Q.map = K;
                Q.mapValues = aK;
                Q.matches = y;
                Q.pairs = h;
                Q.property = aW;
                Q.collect = K;
                Q.each = a7;
                Q.iteratee = W;
                Q.select = T;
                Q.find = bB;
                Q.identity = ao;
                Q.isArguments = k;
                Q.isArray = i;
                Q.isFunction = bd;
                Q.isNative = ak;
                Q.isObject = U;
                Q.isString = bu;
                Q.isTypedArray = O;
                Q.isUndefined = aj;
                Q.last = an;
                Q.detect = bB;
                Q.VERSION = aC;
                if (G && al) {
                    if (bx) {
                        (al.exports = Q)._ = Q
                    }
                }
            }.call(this))
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {}],
    21: [function(c, d, a) {
        var g = c("./lib_managed/lodash"),
            f = c("./lib/helpers"),
            b = typeof a !== "undefined" ? a : this;
        b.getLinkTrackingManager = function(n, j, q) {
            var i, h, m, r, l, o;

            function s(v, u) {
                var C, E, A, B, z, D;
                while ((C = v.parentNode) !== null && !g.isUndefined(C) && ((E = v.tagName.toUpperCase()) !== "A" && E !== "AREA")) {
                    v = C
                }
                if (!g.isUndefined(v.href)) {
                    var y = v.hostname || f.getHostName(v.href),
                        w = y.toLowerCase(),
                        t = v.href.replace(y, w),
                        x = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):", "i");
                    if (!x.test(t)) {
                        A = v.id;
                        B = f.getCssClasses(v);
                        z = v.target;
                        D = m ? v.innerHTML : null;
                        t = unescape(t);
                        n.trackLinkClick(t, A, B, z, D, q(u))
                    }
                }
            }

            function p(t) {
                return function(u) {
                    var v, w;
                    u = u || window.event;
                    v = u.which || u.button;
                    w = u.target || u.srcElement;
                    if (u.type === "click") {
                        if (w) {
                            s(w, t)
                        }
                    } else {
                        if (u.type === "mousedown") {
                            if ((v === 1 || v === 2) && w) {
                                l = v;
                                o = w
                            } else {
                                l = o = null
                            }
                        } else {
                            if (u.type === "mouseup") {
                                if (v === l && w === o) {
                                    s(w, t)
                                }
                                l = o = null
                            }
                        }
                    }
                }
            }

            function k(t) {
                if (h) {
                    f.addEventListener(t, "mouseup", p(r), false);
                    f.addEventListener(t, "mousedown", p(r), false)
                } else {
                    f.addEventListener(t, "click", p(r), false)
                }
            }
            return {
                configureLinkClickTracking: function(v, t, w, u) {
                    m = w;
                    r = u;
                    h = t;
                    i = f.getFilter(v, true)
                },
                addClickListeners: function() {
                    var u = document.links,
                        t;
                    for (t = 0; t < u.length; t++) {
                        if (i(u[t]) && !u[t][j]) {
                            k(u[t]);
                            u[t][j] = true
                        }
                    }
                }
            }
        }
    }, {
        "./lib/helpers": 18,
        "./lib_managed/lodash": 20
    }],
    22: [function(b, c, a) {
        (function() {
            var h = b("./lib_managed/lodash"),
                f = b("./lib/detectors").localStorageAccessible,
                g = b("./lib/helpers"),
                d = typeof a !== "undefined" ? a : this;
            d.OutQueueManager = function(y, r, t, A, x, n, k) {
                var l, i = false,
                    w, j;
                x = x && window.XMLHttpRequest && ("withCredentials" in new XMLHttpRequest());
                var s = x ? "/com.snowplowanalytics.snowplow/tp2" : "/i";
                n = (f() && A && x && n) || 1;
                l = ["snowplowOutQueue", y, r, x ? "post2" : "get"].join("_");
                if (A) {
                    try {
                        j = JSON.parse(localStorage.getItem(l))
                    } catch (v) {}
                }
                if (!h.isArray(j)) {
                    j = []
                }
                t.outQueues.push(j);
                if (x && n > 1) {
                    t.bufferFlushers.push(function() {
                        if (!i) {
                            z()
                        }
                    })
                }

                function p(I) {
                    var E = "?",
                        F = {
                            co: true,
                            cx: true
                        },
                        D = true;
                    for (var H in I) {
                        if (I.hasOwnProperty(H) && !(F.hasOwnProperty(H))) {
                            if (!D) {
                                E += "&"
                            } else {
                                D = false
                            }
                            E += encodeURIComponent(H) + "=" + encodeURIComponent(I[H])
                        }
                    }
                    for (var G in F) {
                        if (I.hasOwnProperty(G) && F.hasOwnProperty(G)) {
                            E += "&" + G + "=" + encodeURIComponent(I[G])
                        }
                    }
                    return E
                }

                function B(D) {
                    var E = h.mapValues(D, function(F) {
                        return F.toString()
                    });
                    return {
                        evt: E,
                        bytes: C(JSON.stringify(E))
                    }
                }

                function C(F) {
                    var D = 0;
                    for (var E = 0; E < F.length; E++) {
                        var G = F.charCodeAt(E);
                        if (G <= 127) {
                            D += 1
                        } else {
                            if (G <= 2047) {
                                D += 2
                            } else {
                                if (G >= 55296 && G <= 57343) {
                                    D += 4;
                                    E++
                                } else {
                                    if (G < 65535) {
                                        D += 3
                                    } else {
                                        D += 4
                                    }
                                }
                            }
                        }
                    }
                    return D
                }

                function u(G, F) {
                    w = F + s;
                    if (x) {
                        var D = B(G);
                        if (D.bytes >= k) {
                            g.warn("Event of size " + D.bytes + " is too long - the maximum size is " + k);
                            var H = o(w);
                            H.send(q(m([D.evt])));
                            return
                        } else {
                            j.push(D)
                        }
                    } else {
                        j.push(p(G))
                    }
                    var E = false;
                    if (A) {
                        E = g.attemptWriteLocalStorage(l, JSON.stringify(j))
                    }
                    if (!i && (!E || j.length >= n)) {
                        z()
                    }
                }

                function z() {
                    while (j.length && typeof j[0] !== "string" && typeof j[0] !== "object") {
                        j.shift()
                    }
                    if (j.length < 1) {
                        i = false;
                        return
                    }
                    if (!h.isString(w)) {
                        throw "No Snowplow collector configured, cannot track"
                    }
                    i = true;
                    var H = j[0];
                    if (x) {
                        var I = o(w);
                        var D = setTimeout(function() {
                            I.abort();
                            i = false
                        }, 5000);

                        function E(K) {
                            var M = 0;
                            var L = 0;
                            while (M < K.length) {
                                L += K[M].bytes;
                                if (L >= k) {
                                    break
                                } else {
                                    M += 1
                                }
                            }
                            return M
                        }
                        var J = E(j);
                        I.onreadystatechange = function() {
                            if (I.readyState === 4 && I.status >= 200 && I.status < 400) {
                                for (var K = 0; K < J; K++) {
                                    j.shift()
                                }
                                if (A) {
                                    g.attemptWriteLocalStorage(l, JSON.stringify(j))
                                }
                                clearTimeout(D);
                                z()
                            } else {
                                if (I.readyState === 4 && I.status >= 400) {
                                    clearTimeout(D);
                                    i = false
                                }
                            }
                        };
                        var F = h.map(j.slice(0, J), function(K) {
                            return K.evt
                        });
                        if (F.length > 0) {
                            I.send(q(m(F)))
                        }
                    } else {
                        var G = new Image(1, 1);
                        G.onload = function() {
                            j.shift();
                            if (A) {
                                g.attemptWriteLocalStorage(l, JSON.stringify(j))
                            }
                            z()
                        };
                        G.onerror = function() {
                            i = false
                        };
                        G.src = w + H.replace("?", "?stm=" + new Date().getTime() + "&")
                    }
                }

                function o(D) {
                    var E = new XMLHttpRequest();
                    E.open("POST", D, true);
                    E.withCredentials = true;
                    E.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
                    return E
                }

                function q(D) {
                    return JSON.stringify({
                        schema: "iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4",
                        data: D
                    })
                }

                function m(F) {
                    var D = new Date().getTime().toString();
                    for (var E = 0; E < F.length; E++) {
                        F[E]["stm"] = D
                    }
                    return F
                }
                return {
                    enqueueRequest: u,
                    executeQueue: z
                }
            }
        }())
    }, {
        "./lib/detectors": 17,
        "./lib/helpers": 18,
        "./lib_managed/lodash": 20
    }],
    23: [function(b, c, a) {
        (function() {
            var g = b("uuid"),
                j = b("./lib_managed/lodash"),
                i = b("./lib/helpers"),
                d = b("./in_queue"),
                h = b("./tracker"),
                f = typeof a !== "undefined" ? a : this;
            f.Snowplow = function(m, r) {
                var l = document,
                    n = window,
                    p = "js-2.8.2",
                    o = {
                        outQueues: [],
                        bufferFlushers: [],
                        expireDateTime: null,
                        hasLoaded: false,
                        registeredOnLoadHandlers: [],
                        pageViewId: null
                    };

                function q() {
                    var t;
                    j.forEach(o.bufferFlushers, function(u) {
                        u()
                    });
                    if (o.expireDateTime) {
                        do {
                            t = new Date();
                            if (j.filter(o.outQueues, function(u) {
                                    return u.length > 0
                                }).length === 0) {
                                break
                            }
                        } while (t.getTime() < o.expireDateTime)
                    }
                }

                function s() {
                    var t;
                    if (!o.hasLoaded) {
                        o.hasLoaded = true;
                        for (t = 0; t < o.registeredOnLoadHandlers.length; t++) {
                            o.registeredOnLoadHandlers[t]()
                        }
                    }
                    return true
                }

                function k() {
                    var u;
                    if (l.addEventListener) {
                        i.addEventListener(l, "DOMContentLoaded", function t() {
                            l.removeEventListener("DOMContentLoaded", t, false);
                            s()
                        })
                    } else {
                        if (l.attachEvent) {
                            l.attachEvent("onreadystatechange", function t() {
                                if (l.readyState === "complete") {
                                    l.detachEvent("onreadystatechange", t);
                                    s()
                                }
                            });
                            if (l.documentElement.doScroll && n === n.top) {
                                (function t() {
                                    if (!o.hasLoaded) {
                                        try {
                                            l.documentElement.doScroll("left")
                                        } catch (v) {
                                            setTimeout(t, 0);
                                            return
                                        }
                                        s()
                                    }
                                }())
                            }
                        }
                    }
                    if ((new RegExp("WebKit")).test(navigator.userAgent)) {
                        u = setInterval(function() {
                            if (o.hasLoaded || /loaded|complete/.test(l.readyState)) {
                                clearInterval(u);
                                s()
                            }
                        }, 10)
                    }
                    i.addEventListener(n, "load", s, false)
                }
                n.Snowplow = {
                    getTrackerCf: function(v) {
                        var u = new h.Tracker(r, "", p, o, {});
                        u.setCollectorCf(v);
                        return u
                    },
                    getTrackerUrl: function(u) {
                        var v = new h.Tracker(r, "", p, o, {});
                        v.setCollectorUrl(u);
                        return v
                    },
                    getAsyncTracker: function() {
                        return new h.Tracker(r, "", p, o, {})
                    }
                };
                i.addEventListener(n, "beforeunload", q, false);
                k();
                return new d.InQueueManager(h.Tracker, p, o, m, r)
            }
        }())
    }, {
        "./in_queue": 15,
        "./lib/helpers": 18,
        "./lib_managed/lodash": 20,
        "./tracker": 24,
        uuid: 12
    }],
    24: [function(b, c, a) {
        (function() {
            var r = b("./lib_managed/lodash"),
                g = b("./lib/helpers"),
                j = b("./lib/proxies"),
                h = b("browser-cookie-lite"),
                o = b("./lib/detectors"),
                n = b("sha1"),
                q = b("./links"),
                f = b("./forms"),
                p = b("./errors"),
                l = b("./out_queue"),
                m = b("snowplow-tracker-core").trackerCore,
                d = b("uuid"),
                i = typeof a !== "undefined" ? a : this;
            i.Tracker = function k(bw, a3, V, D, aJ) {
                var A = m(true, function(bF) {
                        O(bF);
                        an(bF, aS)
                    }),
                    ax = document,
                    al = window,
                    X = navigator,
                    w = j.fixupUrl(ax.domain, al.location.href, g.getReferrer()),
                    bf = g.fixupDomain(w[0]),
                    bv = w[1],
                    aW = w[2],
                    bE, ao, aJ = aJ || {},
                    aU = "GET",
                    M = aJ.hasOwnProperty("platform") ? aJ.platform : "web",
                    y, bi = aJ.hasOwnProperty("appId") ? aJ.appId : "",
                    aD, a0 = ax.title,
                    E, aS = aJ.hasOwnProperty("pageUnloadTimer") ? aJ.pageUnloadTimer : 500,
                    Q = false,
                    G, W, H, bs = aJ.hasOwnProperty("cookieName") ? aJ.cookieName : "_sp_",
                    J = aJ.hasOwnProperty("cookieDomain") ? aJ.cookieDomain : null,
                    bt = "/",
                    ad = X.doNotTrack || X.msDoNotTrack || al.doNotTrack,
                    bm = aJ.hasOwnProperty("respectDoNotTrack") ? aJ.respectDoNotTrack && (ad === "yes" || ad === "1") : false,
                    av, ar, N = aJ.hasOwnProperty("cookieLifetime") ? aJ.cookieLifetime : 63072000,
                    S = aJ.hasOwnProperty("sessionCookieTimeout") ? aJ.sessionCookieTimeout : 1800,
                    Y = aJ.hasOwnProperty("userFingerprintSeed") ? aJ.userFingerprintSeed : 123412414,
                    bk = ax.characterSet || ax.charset,
                    a4 = aJ.hasOwnProperty("forceSecureTracker") ? (aJ.forceSecureTracker === true) : false,
                    ag = !a4 && aJ.hasOwnProperty("forceUnsecureTracker") ? (aJ.forceUnsecureTracker === true) : false,
                    aq = aJ.hasOwnProperty("useLocalStorage") ? (g.warn("argmap.useLocalStorage is deprecated. Use argmap.stateStorageStrategy instead."), aJ.useLocalStorage) : true,
                    aM = aJ.hasOwnProperty("useCookies") ? (g.warn("argmap.useCookies is deprecated. Use argmap.stateStorageStrategy instead."), aJ.useCookies) : true,
                    aY = aJ.hasOwnProperty("stateStorageStrategy") ? aJ.stateStorageStrategy : (!aM && !aq ? "none" : (aM && aq ? "cookieAndLocalStorage" : (aM ? "cookie" : "localStorage"))),
                    L = X.userLanguage || X.language,
                    bj = o.detectBrowserFeatures(aY == "cookie" || aY == "cookieAndLocalStorage", R("testcookie")),
                    z = (aJ.userFingerprint === false) ? "" : o.detectSignature(Y),
                    P = bw + "_" + a3,
                    aZ = false,
                    aV, br = new Date().getTime(),
                    aQ, aE, ay, af, ak = n,
                    a1, at, ac, ab = 1,
                    bD, F = bc(),
                    v = q.getLinkTrackingManager(A, P, bp),
                    az = f.getFormTrackingManager(A, P, bp),
                    aT = p.errorManager(A),
                    bo = new l.OutQueueManager(bw, a3, D, aY == "localStorage" || aY == "cookieAndLocalStorage", aJ.post, aJ.bufferSize, aJ.maxPostBytes || 40000),
                    a9 = false,
                    bx = aJ.contexts || {},
                    bz = [],
                    u = [],
                    aL = false,
                    K = false;
                if (aJ.hasOwnProperty("discoverRootDomain") && aJ.discoverRootDomain) {
                    J = g.findRootDomain()
                }
                if (bx.gaCookies) {
                    bz.push(I())
                }
                if (bx.geolocation) {
                    bu()
                }
                A.setBase64Encoding(aJ.hasOwnProperty("encodeBase64") ? aJ.encodeBase64 : true);
                A.setTrackerVersion(V);
                A.setTrackerNamespace(a3);
                A.setAppId(bi);
                A.setPlatform(M);
                A.setTimezone(o.detectTimezone());
                A.addPayloadPair("lang", L);
                A.addPayloadPair("cs", bk);
                for (var ai in bj) {
                    if (Object.prototype.hasOwnProperty.call(bj, ai)) {
                        if (ai === "res" || ai === "cd" || ai === "cookie") {
                            A.addPayloadPair(ai, bj[ai])
                        } else {
                            A.addPayloadPair("f_" + ai, bj[ai])
                        }
                    }
                }

                function bB() {
                    w = j.fixupUrl(ax.domain, al.location.href, g.getReferrer());
                    if (w[1] !== bv) {
                        aW = g.getReferrer(bv)
                    }
                    bf = g.fixupDomain(w[0]);
                    bv = w[1]
                }

                function au() {
                    var bF = new Date().getTime();
                    if (this.href) {
                        this.href = g.decorateQuerystring(this.href, "_sp", at + "." + bF)
                    }
                }

                function x(bH) {
                    for (var bG = 0; bG < ax.links.length; bG++) {
                        var bF = ax.links[bG];
                        if (!bF.spDecorationEnabled && bH(bF)) {
                            g.addEventListener(bF, "click", au, true);
                            g.addEventListener(bF, "mousedown", au, true);
                            bF.spDecorationEnabled = true
                        }
                    }
                }

                function bc() {
                    return {
                        transaction: {},
                        items: []
                    }
                }

                function bn(bF) {
                    var bG;
                    if (H) {
                        bG = new RegExp("#.*");
                        return bF.replace(bG, "")
                    }
                    return bF
                }

                function by(bF) {
                    var bH = new RegExp("^([a-z]+):"),
                        bG = bH.exec(bF);
                    return bG ? bG[1] : null
                }

                function be(bH, bF) {
                    var bI = by(bF),
                        bG;
                    if (bI) {
                        return bF
                    }
                    if (bF.slice(0, 1) === "/") {
                        return by(bH) + "://" + g.getHostName(bH) + bF
                    }
                    bH = bn(bH);
                    if ((bG = bH.indexOf("?")) >= 0) {
                        bH = bH.slice(0, bG)
                    }
                    if ((bG = bH.lastIndexOf("/")) !== bH.length - 1) {
                        bH = bH.slice(0, bG + 1)
                    }
                    return bH + bF
                }

                function an(bH, bG) {
                    var bF = new Date();
                    var bI = !!h.cookie(av);
                    if (!(bm || bI)) {
                        bo.enqueueRequest(bH.build(), y);
                        D.expireDateTime = bF.getTime() + bG
                    }
                }

                function R(bF) {
                    return bs + bF + "." + a1
                }

                function ap(bF) {
                    if (aY == "localStorage") {
                        return g.attemptGetLocalStorage(bF)
                    } else {
                        if (aY == "cookie" || aY == "cookieAndLocalStorage") {
                            return h.cookie(R(bF))
                        }
                    }
                }

                function aO() {
                    bB();
                    a1 = ak((J || bf) + (bt || "/")).slice(0, 4)
                }

                function bg() {
                    var bF = new Date();
                    aV = bF.getTime()
                }

                function a6() {
                    aB();
                    bg()
                }

                function aH() {
                    var bF = (ax.compatMode && ax.compatMode !== "BackCompat") ? ax.documentElement : ax.body;
                    return [bF.scrollLeft || al.pageXOffset, bF.scrollTop || al.pageYOffset]
                }

                function aN() {
                    var bG = aH();
                    var bF = bG[0];
                    aQ = bF;
                    aE = bF;
                    var bH = bG[1];
                    ay = bH;
                    af = bH
                }

                function aB() {
                    var bG = aH();
                    var bF = bG[0];
                    if (bF < aQ) {
                        aQ = bF
                    } else {
                        if (bF > aE) {
                            aE = bF
                        }
                    }
                    var bH = bG[1];
                    if (bH < ay) {
                        ay = bH
                    } else {
                        if (bH > af) {
                            af = bH
                        }
                    }
                }

                function Z(bG) {
                    var bF = Math.round(bG);
                    if (!isNaN(bF)) {
                        return bF
                    }
                }

                function aw() {
                    var bG = R("ses");
                    var bF = "*";
                    ba(bG, bF, S)
                }

                function bq(bH, bG, bF, bJ, bI, bL) {
                    var bM = R("id");
                    var bK = bH + "." + bG + "." + bF + "." + bJ + "." + bI + "." + bL;
                    ba(bM, bK, N)
                }

                function ba(bF, bH, bG) {
                    if (aY == "localStorage") {
                        g.attemptWriteLocalStorage(bF, bH)
                    } else {
                        if (aY == "cookie" || aY == "cookieAndLocalStorage") {
                            h.cookie(bF, bH, bG, bt, J)
                        }
                    }
                }

                function aP() {
                    return d.v4()
                }

                function C() {
                    var bG = aY != "none" && !!ap("ses");
                    var bF = a8();
                    if (bF[1]) {
                        at = bF[1]
                    } else {
                        at = aP();
                        bF[1] = at
                    }
                    ac = bF[6];
                    if (!bG) {
                        bF[3]++;
                        ac = d.v4();
                        bF[6] = ac;
                        bF[5] = bF[4]
                    }
                    if (aY != "none") {
                        aw();
                        bF[4] = Math.round(new Date().getTime() / 1000);
                        bF.shift();
                        bq.apply(null, bF)
                    }
                }

                function a8() {
                    if (aY == "none") {
                        return []
                    }
                    var bG = new Date(),
                        bF = Math.round(bG.getTime() / 1000),
                        bI = ap("id"),
                        bH;
                    if (bI) {
                        bH = bI.split(".");
                        bH.unshift("0")
                    } else {
                        bH = ["1", at, bF, 0, bF, ""]
                    }
                    if (!bH[6]) {
                        bH[6] = d.v4()
                    }
                    return bH
                }

                function O(bM) {
                    var bH = Math.round(new Date().getTime() / 1000),
                        bK = R("id"),
                        bJ = R("ses"),
                        bO = ap("ses"),
                        bG = a8(),
                        bP = bG[0],
                        bN = bG[1],
                        bS = bG[2],
                        bI = bG[3],
                        bR = bG[4],
                        bF = bG[5],
                        bL = bG[6];
                    var bQ = !!h.cookie(av);
                    if ((bm || bQ) && aY != "none") {
                        if (aY == "localStorage") {
                            g.attemptWriteLocalStorage(bK, "");
                            g.attemptWriteLocalStorage(sesName, "")
                        } else {
                            if (aY == "cookie" || aY == "cookieAndLocalStorage") {
                                h.cookie(bK, "", -1, bt, J);
                                h.cookie(bJ, "", -1, bt, J)
                            }
                        }
                        return
                    }
                    if (bP === "0") {
                        ac = bL;
                        if (!bO && aY != "none") {
                            bI++;
                            bF = bR;
                            ac = d.v4()
                        }
                        ab = bI
                    } else {
                        if ((new Date().getTime() - br) > S * 1000) {
                            ac = d.v4();
                            ab++
                        }
                    }
                    bM.add("vp", o.detectViewport());
                    bM.add("ds", o.detectDocumentSize());
                    bM.add("vid", ab);
                    bM.add("sid", ac);
                    bM.add("duid", bN);
                    bM.add("fp", z);
                    bM.add("uid", bD);
                    bB();
                    bM.add("refr", bn(ao || aW));
                    bM.add("url", bn(aD || bv));
                    if (aY != "none") {
                        bq(bN, bS, ab, bH, bF, ac);
                        aw()
                    }
                    br = new Date().getTime()
                }

                function am(bF) {
                    return bd(bF + ".cloudfront.net")
                }

                function bd(bF) {
                    if (a4) {
                        return ("https://" + bF)
                    }
                    if (ag) {
                        return ("http://" + bF)
                    }
                    return ("https:" === ax.location.protocol ? "https" : "http") + "://" + bF
                }

                function bp(bM) {
                    var bJ = bz.concat(bM || []);
                    if (bx.webPage) {
                        bJ.push(bh())
                    }
                    if (bx.performanceTiming) {
                        var bO = T();
                        if (bO) {
                            bJ.push(bO)
                        }
                    }
                    if (al.optimizely) {
                        if (bx.optimizelySummary) {
                            var bL = aj();
                            r.each(bL, function(bS) {
                                bJ.push(bS)
                            })
                        }
                        if (bx.optimizelyXSummary) {
                            var bL = a2();
                            r.each(bL, function(bS) {
                                bJ.push(bS)
                            })
                        }
                        if (bx.optimizelyExperiments) {
                            var bF = ah();
                            for (var bK = 0; bK < bF.length; bK++) {
                                bJ.push(bF[bK])
                            }
                        }
                        if (bx.optimizelyStates) {
                            var bQ = s();
                            for (var bK = 0; bK < bQ.length; bK++) {
                                bJ.push(bQ[bK])
                            }
                        }
                        if (bx.optimizelyVariations) {
                            var bR = bA();
                            for (var bK = 0; bK < bR.length; bK++) {
                                bJ.push(bR[bK])
                            }
                        }
                        if (bx.optimizelyVisitor) {
                            var bI = a7();
                            if (bI) {
                                bJ.push(bI)
                            }
                        }
                        if (bx.optimizelyAudiences) {
                            var bG = U();
                            for (var bK = 0; bK < bG.length; bK++) {
                                bJ.push(bG[bK])
                            }
                        }
                        if (bx.optimizelyDimensions) {
                            var bH = aX();
                            for (var bK = 0; bK < bH.length; bK++) {
                                bJ.push(bH[bK])
                            }
                        }
                    }
                    if (bx.augurIdentityLite) {
                        var bP = aG();
                        if (bP) {
                            bJ.push(bP)
                        }
                    }
                    if (bx.parrable) {
                        var bN = bC();
                        if (bN) {
                            bJ.push(bN)
                        }
                    }
                    return bJ
                }

                function aA() {
                    if (!aL || D.pageViewId == null) {
                        D.pageViewId = d.v4()
                    }
                }

                function aC() {
                    if (D.pageViewId == null) {
                        D.pageViewId = d.v4()
                    }
                    return D.pageViewId
                }

                function bh() {
                    return {
                        schema: "iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0",
                        data: {
                            id: aC()
                        }
                    }
                }

                function T() {
                    var bF = ["navigationStart", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "secureConnectionStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "unloadEventStart", "unloadEventEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", "msFirstPaint", "chromeFirstPaint", "requestEnd", "proxyStart", "proxyEnd"];
                    var bI = al.performance || al.mozPerformance || al.msPerformance || al.webkitPerformance;
                    if (bI) {
                        var bH = {};
                        for (var bG in bI.timing) {
                            if (g.isValueInArray(bG, bF)) {
                                bH[bG] = bI.timing[bG]
                            }
                        }
                        delete bH.requestEnd;
                        if (al.chrome && al.chrome.loadTimes && typeof al.chrome.loadTimes().firstPaintTime === "number") {
                            bH.chromeFirstPaint = Math.round(al.chrome.loadTimes().firstPaintTime * 1000)
                        }
                        return {
                            schema: "iglu:org.w3/PerformanceTiming/jsonschema/1-0-0",
                            data: bH
                        }
                    }
                }

                function B(bH, bF) {
                    var bG;
                    if (al.optimizely && al.optimizely.data) {
                        bG = al.optimizely.data[bH];
                        if (typeof bF !== "undefined" && bG !== undefined) {
                            bG = bG[bF]
                        }
                    }
                    return bG
                }

                function aI(bH, bF) {
                    var bG;
                    if (al.optimizely) {
                        bG = al.optimizely.get(bH);
                        if (typeof bF !== "undefined" && bG !== undefined) {
                            bG = bG[bF]
                        }
                    }
                    return bG
                }

                function bb() {
                    var bG = B("state");
                    var bF = B("experiments");
                    return r.map(bG && bF && bG.activeExperiments, function(bH) {
                        var bI = bF[bH];
                        return {
                            activeExperimentId: bH.toString(),
                            variation: bG.variationIdsMap[bH][0].toString(),
                            conditional: bI && bI.conditional,
                            manual: bI && bI.manual,
                            name: bI && bI.name
                        }
                    })
                }

                function aa() {
                    var bI = aI("state");
                    var bH = bI.getActiveExperimentIds();
                    var bF = aI("data", "experiments");
                    var bG = aI("visitor");
                    return r.map(bH, function(bJ) {
                        variation = bI.getVariationMap()[bJ];
                        variationName = variation.name;
                        variationId = variation.id;
                        visitorId = bG.visitorId;
                        return {
                            experimentId: parseInt(bJ),
                            variationName: variationName,
                            variation: parseInt(variationId),
                            visitorId: visitorId
                        }
                    })
                }

                function ah() {
                    var bI = B("experiments");
                    if (bI) {
                        var bJ = [];
                        for (var bH in bI) {
                            if (bI.hasOwnProperty(bH)) {
                                var bG = {};
                                bG.id = bH;
                                var bF = bI[bH];
                                bG.code = bF.code;
                                bG.manual = bF.manual;
                                bG.conditional = bF.conditional;
                                bG.name = bF.name;
                                bG.variationIds = bF.variation_ids;
                                bJ.push({
                                    schema: "iglu:com.optimizely/experiment/jsonschema/1-0-0",
                                    data: bG
                                })
                            }
                        }
                        return bJ
                    }
                    return []
                }

                function s() {
                    var bG = [];
                    var bQ = B("experiments");
                    if (bQ) {
                        for (var bO in bQ) {
                            if (bQ.hasOwnProperty(bO)) {
                                bG.push(bO)
                            }
                        }
                    }
                    var bH = B("state");
                    if (bH) {
                        var bJ = [];
                        var bL = bH.activeExperiments || [];
                        for (var bK = 0; bK < bG.length; bK++) {
                            var bM = bG[bK];
                            var bI = {};
                            bI.experimentId = bM;
                            bI.isActive = g.isValueInArray(bG[bK], bL);
                            var bP = bH.variationMap || {};
                            bI.variationIndex = bP[bM];
                            var bF = bH.variationNamesMap || {};
                            bI.variationName = bF[bM];
                            var bN = bH.variationIdsMap || {};
                            if (bN[bM] && bN[bM].length === 1) {
                                bI.variationId = bN[bM][0]
                            }
                            bJ.push({
                                schema: "iglu:com.optimizely/state/jsonschema/1-0-0",
                                data: bI
                            })
                        }
                        return bJ
                    }
                    return []
                }

                function bA() {
                    var bI = B("variations");
                    if (bI) {
                        var bJ = [];
                        for (var bH in bI) {
                            if (bI.hasOwnProperty(bH)) {
                                var bG = {};
                                bG.id = bH;
                                var bF = bI[bH];
                                bG.name = bF.name;
                                bG.code = bF.code;
                                bJ.push({
                                    schema: "iglu:com.optimizely/variation/jsonschema/1-0-0",
                                    data: bG
                                })
                            }
                        }
                        return bJ
                    }
                    return []
                }

                function a7() {
                    var bI = B("visitor");
                    if (bI) {
                        var bH = {};
                        bH.browser = bI.browser;
                        bH.browserVersion = bI.browserVersion;
                        bH.device = bI.device;
                        bH.deviceType = bI.deviceType;
                        bH.ip = bI.ip;
                        var bF = bI.platform || {};
                        bH.platformId = bF.id;
                        bH.platformVersion = bF.version;
                        var bG = bI.location || {};
                        bH.locationCity = bG.city;
                        bH.locationRegion = bG.region;
                        bH.locationCountry = bG.country;
                        bH.mobile = bI.mobile;
                        bH.mobileId = bI.mobileId;
                        bH.referrer = bI.referrer;
                        bH.os = bI.os;
                        return {
                            schema: "iglu:com.optimizely/visitor/jsonschema/1-0-0",
                            data: bH
                        }
                    }
                }

                function U() {
                    var bI = B("visitor", "audiences");
                    if (bI) {
                        var bH = [];
                        for (var bG in bI) {
                            if (bI.hasOwnProperty(bG)) {
                                var bF = {
                                    id: bG,
                                    isMember: bI[bG]
                                };
                                bH.push({
                                    schema: "iglu:com.optimizely/visitor_audience/jsonschema/1-0-0",
                                    data: bF
                                })
                            }
                        }
                        return bH
                    }
                    return []
                }

                function aX() {
                    var bF = B("visitor", "dimensions");
                    if (bF) {
                        var bI = [];
                        for (var bH in bF) {
                            if (bF.hasOwnProperty(bH)) {
                                var bG = {
                                    id: bH,
                                    value: bF[bH]
                                };
                                bI.push({
                                    schema: "iglu:com.optimizely/visitor_dimension/jsonschema/1-0-0",
                                    data: bG
                                })
                            }
                        }
                        return bI
                    }
                    return []
                }

                function aj() {
                    return r.map(bb(), function(bF) {
                        return {
                            schema: "iglu:com.optimizely.snowplow/optimizely_summary/jsonschema/1-0-0",
                            data: bF
                        }
                    })
                }

                function a2() {
                    return r.map(aa(), function(bF) {
                        return {
                            schema: "iglu:com.optimizely.optimizelyx/summary/jsonschema/1-0-0",
                            data: bF
                        }
                    })
                }

                function aG() {
                    var bI = al.augur;
                    if (bI) {
                        var bH = {
                            consumer: {},
                            device: {}
                        };
                        var bG = bI.consumer || {};
                        bH.consumer.UUID = bG.UID;
                        var bJ = bI.device || {};
                        bH.device.ID = bJ.ID;
                        bH.device.isBot = bJ.isBot;
                        bH.device.isProxied = bJ.isProxied;
                        bH.device.isTor = bJ.isTor;
                        var bF = bJ.fingerprint || {};
                        bH.device.isIncognito = bF.browserHasIncognitoEnabled;
                        return {
                            schema: "iglu:io.augur.snowplow/identity_lite/jsonschema/1-0-0",
                            data: bH
                        }
                    }
                }

                function bC() {
                    var bH = window._hawk;
                    if (bH) {
                        var bG = {
                            encryptedId: null,
                            optout: null
                        };
                        bG.encryptedId = bH.browserid;
                        var bI = new RegExp("(?:^|;)\\s?" + "_parrable_hawk_optout".replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1") + "=(.*?)(?:;|$)", "i"),
                            bF = document.cookie.match(bI);
                        bG.optout = (bF && decodeURIComponent(bF[1])) ? bF && decodeURIComponent(bF[1]) : "false";
                        return {
                            schema: "iglu:com.parrable/encrypted_payload/jsonschema/1-0-0",
                            data: bG
                        }
                    }
                }

                function bu() {
                    if (!a9 && X.geolocation && X.geolocation.getCurrentPosition) {
                        a9 = true;
                        X.geolocation.getCurrentPosition(function(bF) {
                            var bH = bF.coords;
                            var bG = {
                                schema: "iglu:com.snowplowanalytics.snowplow/geolocation_context/jsonschema/1-1-0",
                                data: {
                                    latitude: bH.latitude,
                                    longitude: bH.longitude,
                                    latitudeLongitudeAccuracy: bH.accuracy,
                                    altitude: bH.altitude,
                                    altitudeAccuracy: bH.altitudeAccuracy,
                                    bearing: bH.heading,
                                    speed: bH.speed,
                                    timestamp: bF.timestamp
                                }
                            };
                            bz.push(bG)
                        })
                    }
                }

                function I() {
                    var bF = {};
                    r.forEach(["__utma", "__utmb", "__utmc", "__utmv", "__utmz", "_ga"], function(bG) {
                        var bH = h.cookie(bG);
                        if (bH) {
                            bF[bG] = bH
                        }
                    });
                    return {
                        schema: "iglu:com.google.analytics/cookies/jsonschema/1-0-0",
                        data: bF
                    }
                }

                function aR(bG, bF) {
                    return (bG || []).concat(bF ? bF() : [])
                }

                function aK(bL, bI, bG, bF) {
                    bB();
                    if (K) {
                        aA()
                    }
                    K = true;
                    a0 = ax.title;
                    E = bL;
                    var bK = g.fixupTitle(E || a0);
                    A.trackPageView(bn(aD || bv), bK, bn(ao || aW), bp(aR(bI, bG)), bF);
                    var bH = new Date();
                    if (Q && !aZ) {
                        aZ = true;
                        aN();
                        g.addEventListener(ax, "click", bg);
                        g.addEventListener(ax, "mouseup", bg);
                        g.addEventListener(ax, "mousedown", bg);
                        g.addEventListener(ax, "mousemove", bg);
                        g.addEventListener(ax, "mousewheel", bg);
                        g.addEventListener(al, "DOMMouseScroll", bg);
                        g.addEventListener(al, "scroll", a6);
                        g.addEventListener(ax, "keypress", bg);
                        g.addEventListener(ax, "keydown", bg);
                        g.addEventListener(ax, "keyup", bg);
                        g.addEventListener(al, "resize", bg);
                        g.addEventListener(al, "focus", bg);
                        g.addEventListener(al, "blur", bg);
                        aV = bH.getTime();
                        clearInterval(bE);
                        bE = setInterval(function bJ() {
                            var bM = new Date();
                            if ((aV + W) > bM.getTime()) {
                                if (G < bM.getTime()) {
                                    t(aR(bI, bG))
                                }
                            }
                        }, W)
                    }
                }

                function t(bF) {
                    bB();
                    newDocumentTitle = ax.title;
                    if (newDocumentTitle !== a0) {
                        a0 = newDocumentTitle;
                        E = null
                    }
                    A.trackPagePing(bn(aD || bv), g.fixupTitle(E || a0), bn(ao || aW), Z(aQ), Z(aE), Z(ay), Z(af), bp(bF));
                    aN()
                }

                function a5(bK, bJ, bP, bL, bF, bM, bG, bI, bO, bH, bN) {
                    A.trackEcommerceTransaction(bK, bJ, bP, bL, bF, bM, bG, bI, bO, bp(bH), bN)
                }

                function aF(bI, bM, bF, bG, bK, bJ, bN, bH, bL) {
                    A.trackEcommerceTransactionItem(bI, bM, bF, bG, bK, bJ, bN, bp(bH), bL)
                }

                function bl(bG, bF) {
                    if (bG !== "") {
                        return bG + bF.charAt(0).toUpperCase() + bF.slice(1)
                    }
                    return bF
                }

                function ae(bK) {
                    var bJ, bF, bI = ["", "webkit", "ms", "moz"],
                        bH;
                    if (!ar) {
                        for (bF = 0; bF < bI.length; bF++) {
                            bH = bI[bF];
                            if (ax[bl(bH, "hidden")]) {
                                if (ax[bl(bH, "visibilityState")] === "prerender") {
                                    bJ = true
                                }
                                break
                            } else {
                                if (ax[bl(bH, "hidden")] === false) {
                                    break
                                }
                            }
                        }
                    }
                    if (bJ) {
                        g.addEventListener(ax, bH + "visibilitychange", function bG() {
                            ax.removeEventListener(bH + "visibilitychange", bG, false);
                            bK()
                        });
                        return
                    }
                    bK()
                }
                aO();
                C();
                if (aJ.crossDomainLinker) {
                    x(aJ.crossDomainLinker)
                }
                return {
                    getDomainSessionIndex: function() {
                        return ab
                    },
                    getPageViewId: function() {
                        return aC()
                    },
                    getCookieName: function(bF) {
                        return R(bF)
                    },
                    getUserId: function() {
                        return bD
                    },
                    getDomainUserId: function() {
                        return (a8())[1]
                    },
                    getDomainUserInfo: function() {
                        return a8()
                    },
                    getUserFingerprint: function() {
                        return z
                    },
                    setAppId: function(bF) {
                        g.warn('setAppId is deprecated. Instead add an "appId" field to the argmap argument of newTracker.');
                        A.setAppId(bF)
                    },
                    setReferrerUrl: function(bF) {
                        ao = bF
                    },
                    setCustomUrl: function(bF) {
                        bB();
                        aD = be(bv, bF)
                    },
                    setDocumentTitle: function(bF) {
                        a0 = ax.title;
                        E = bF
                    },
                    discardHashTag: function(bF) {
                        H = bF
                    },
                    setCookieNamePrefix: function(bF) {
                        g.warn('setCookieNamePrefix is deprecated. Instead add a "cookieName" field to the argmap argument of newTracker.');
                        bs = bF
                    },
                    setCookieDomain: function(bF) {
                        g.warn('setCookieDomain is deprecated. Instead add a "cookieDomain" field to the argmap argument of newTracker.');
                        J = g.fixupDomain(bF);
                        aO()
                    },
                    setCookiePath: function(bF) {
                        bt = bF;
                        aO()
                    },
                    setVisitorCookieTimeout: function(bF) {
                        N = bF
                    },
                    setSessionCookieTimeout: function(bF) {
                        g.warn('setSessionCookieTimeout is deprecated. Instead add a "sessionCookieTimeout" field to the argmap argument of newTracker.');
                        S = bF
                    },
                    setUserFingerprintSeed: function(bF) {
                        g.warn('setUserFingerprintSeed is deprecated. Instead add a "userFingerprintSeed" field to the argmap argument of newTracker.');
                        Y = bF;
                        z = o.detectSignature(Y)
                    },
                    enableUserFingerprint: function(bF) {
                        g.warn('enableUserFingerprintSeed is deprecated. Instead add a "userFingerprint" field to the argmap argument of newTracker.');
                        if (!bF) {
                            z = ""
                        }
                    },
                    respectDoNotTrack: function(bG) {
                        g.warn('This usage of respectDoNotTrack is deprecated. Instead add a "respectDoNotTrack" field to the argmap argument of newTracker.');
                        var bF = X.doNotTrack || X.msDoNotTrack;
                        bm = bG && (bF === "yes" || bF === "1")
                    },
                    crossDomainLinker: function(bF) {
                        x(bF)
                    },
                    addListener: function(bH, bF, bG) {
                        addClickListener(bH, bF, bG)
                    },
                    enableLinkClickTracking: function(bH, bF, bI, bG) {
                        if (D.hasLoaded) {
                            v.configureLinkClickTracking(bH, bF, bI, bG);
                            v.addClickListeners()
                        } else {
                            D.registeredOnLoadHandlers.push(function() {
                                v.configureLinkClickTracking(bH, bF, bI, bG);
                                v.addClickListeners()
                            })
                        }
                    },
                    refreshLinkClickTracking: function() {
                        if (D.hasLoaded) {
                            v.addClickListeners()
                        } else {
                            D.registeredOnLoadHandlers.push(function() {
                                v.addClickListeners()
                            })
                        }
                    },
                    enableActivityTracking: function(bG, bF) {
                        if (bG === parseInt(bG, 10) && bF === parseInt(bF, 10)) {
                            Q = true;
                            G = new Date().getTime() + bG * 1000;
                            W = bF * 1000
                        } else {
                            g.warn("Activity tracking not enabled, please provide integer values for minimumVisitLength and heartBeatDelay.")
                        }
                    },
                    updatePageActivity: function() {
                        bg()
                    },
                    enableFormTracking: function(bF, bG) {
                        if (D.hasLoaded) {
                            az.configureFormTracking(bF);
                            az.addFormListeners(bG)
                        } else {
                            D.registeredOnLoadHandlers.push(function() {
                                az.configureFormTracking(bF);
                                az.addFormListeners(bG)
                            })
                        }
                    },
                    killFrame: function() {
                        if (al.location !== al.top.location) {
                            al.top.location = al.location
                        }
                    },
                    redirectFile: function(bF) {
                        if (al.location.protocol === "file:") {
                            al.location = bF
                        }
                    },
                    setOptOutCookie: function(bF) {
                        av = bF
                    },
                    setCountPreRendered: function(bF) {
                        ar = bF
                    },
                    setUserId: function(bF) {
                        bD = bF
                    },
                    setUserIdFromLocation: function(bF) {
                        bB();
                        bD = g.fromQuerystring(bF, bv)
                    },
                    setUserIdFromReferrer: function(bF) {
                        bB();
                        bD = g.fromQuerystring(bF, aW)
                    },
                    setUserIdFromCookie: function(bF) {
                        bD = h.cookie(bF)
                    },
                    setCollectorCf: function(bF) {
                        y = am(bF)
                    },
                    setCollectorUrl: function(bF) {
                        y = bd(bF)
                    },
                    setPlatform: function(bF) {
                        g.warn('setPlatform is deprecated. Instead add a "platform" field to the argmap argument of newTracker.');
                        A.setPlatform(bF)
                    },
                    encodeBase64: function(bF) {
                        g.warn('This usage of encodeBase64 is deprecated. Instead add an "encodeBase64" field to the argmap argument of newTracker.');
                        A.setBase64Encoding(bF)
                    },
                    flushBuffer: function() {
                        bo.executeQueue()
                    },
                    enableGeolocationContext: bu,
                    trackPageView: function(bI, bH, bG, bF) {
                        ae(function() {
                            aK(bI, bH, bG, bF)
                        })
                    },
                    trackStructEvent: function(bI, bL, bG, bK, bJ, bH, bF) {
                        ae(function() {
                            A.trackStructEvent(bI, bL, bG, bK, bJ, bp(bH), bF)
                        })
                    },
                    trackSelfDescribingEvent: function(bG, bH, bF) {
                        ae(function() {
                            A.trackSelfDescribingEvent(bG, bp(bH), bF)
                        })
                    },
                    trackUnstructEvent: function(bG, bH, bF) {
                        ae(function() {
                            A.trackSelfDescribingEvent(bG, bp(bH), bF)
                        })
                    },
                    addTrans: function(bK, bJ, bP, bL, bF, bM, bG, bI, bO, bH, bN) {
                        F.transaction = {
                            orderId: bK,
                            affiliation: bJ,
                            total: bP,
                            tax: bL,
                            shipping: bF,
                            city: bM,
                            state: bG,
                            country: bI,
                            currency: bO,
                            context: bH,
                            tstamp: bN
                        }
                    },
                    addItem: function(bI, bM, bF, bG, bK, bJ, bN, bH, bL) {
                        F.items.push({
                            orderId: bI,
                            sku: bM,
                            name: bF,
                            category: bG,
                            price: bK,
                            quantity: bJ,
                            currency: bN,
                            context: bH,
                            tstamp: bL
                        })
                    },
                    trackTrans: function() {
                        ae(function() {
                            a5(F.transaction.orderId, F.transaction.affiliation, F.transaction.total, F.transaction.tax, F.transaction.shipping, F.transaction.city, F.transaction.state, F.transaction.country, F.transaction.currency, F.transaction.context, F.transaction.tstamp);
                            for (var bF = 0; bF < F.items.length; bF++) {
                                var bG = F.items[bF];
                                aF(bG.orderId, bG.sku, bG.name, bG.category, bG.price, bG.quantity, bG.currency, bG.context, bG.tstamp)
                            }
                            F = bc()
                        })
                    },
                    trackLinkClick: function(bL, bH, bI, bG, bK, bJ, bF) {
                        ae(function() {
                            A.trackLinkClick(bL, bH, bI, bG, bK, bp(bJ), bF)
                        })
                    },
                    trackAdImpression: function(bJ, bF, bH, bI, bO, bK, bL, bN, bG, bM) {
                        ae(function() {
                            A.trackAdImpression(bJ, bF, bH, bI, bO, bK, bL, bN, bp(bG), bM)
                        })
                    },
                    trackAdClick: function(bH, bM, bF, bI, bP, bK, bJ, bL, bO, bG, bN) {
                        ae(function() {
                            A.trackAdClick(bH, bM, bF, bI, bP, bK, bJ, bL, bO, bp(bG), bN)
                        })
                    },
                    trackAdConversion: function(bP, bF, bI, bH, bK, bN, bO, bJ, bM, bG, bL) {
                        ae(function() {
                            A.trackAdConversion(bP, bF, bI, bH, bK, bN, bO, bJ, bM, bp(bG), bL)
                        })
                    },
                    trackSocialInteraction: function(bI, bH, bJ, bG, bF) {
                        ae(function() {
                            A.trackSocialInteraction(bI, bH, bJ, bp(bG), bF)
                        })
                    },
                    trackAddToCart: function(bM, bH, bJ, bK, bL, bG, bI, bF) {
                        ae(function() {
                            A.trackAddToCart(bM, bH, bJ, bK, bL, bG, bp(bI), bF)
                        })
                    },
                    trackRemoveFromCart: function(bM, bH, bJ, bK, bL, bG, bI, bF) {
                        ae(function() {
                            A.trackRemoveFromCart(bM, bH, bJ, bK, bL, bG, bp(bI), bF)
                        })
                    },
                    trackSiteSearch: function(bK, bJ, bG, bH, bI, bF) {
                        ae(function() {
                            A.trackSiteSearch(bK, bJ, bG, bH, bp(bI), bF)
                        })
                    },
                    trackTiming: function(bK, bH, bJ, bG, bI, bF) {
                        ae(function() {
                            A.trackSelfDescribingEvent({
                                schema: "iglu:com.snowplowanalytics.snowplow/timing/jsonschema/1-0-0",
                                data: {
                                    category: bK,
                                    variable: bH,
                                    timing: bJ,
                                    label: bG
                                }
                            }, bp(bI), bF)
                        })
                    },
                    trackEnhancedEcommerceAction: function(bI, bG, bF) {
                        var bH = u.concat(bG || []);
                        u.length = 0;
                        ae(function() {
                            A.trackSelfDescribingEvent({
                                schema: "iglu:com.google.analytics.enhanced-ecommerce/action/jsonschema/1-0-0",
                                data: {
                                    action: bI
                                }
                            }, bp(bH), bF)
                        })
                    },
                    addEnhancedEcommerceActionContext: function(bH, bK, bG, bL, bF, bI, bN, bJ, bM, bO) {
                        u.push({
                            schema: "iglu:com.google.analytics.enhanced-ecommerce/actionFieldObject/jsonschema/1-0-0",
                            data: {
                                id: bH,
                                affiliation: bK,
                                revenue: g.parseFloat(bG),
                                tax: g.parseFloat(bL),
                                shipping: g.parseFloat(bF),
                                coupon: bI,
                                list: bN,
                                step: g.parseInt(bJ),
                                option: bM,
                                currency: bO
                            }
                        })
                    },
                    addEnhancedEcommerceImpressionContext: function(bG, bF, bM, bI, bH, bJ, bK, bL, bN) {
                        u.push({
                            schema: "iglu:com.google.analytics.enhanced-ecommerce/impressionFieldObject/jsonschema/1-0-0",
                            data: {
                                id: bG,
                                name: bF,
                                list: bM,
                                brand: bI,
                                category: bH,
                                variant: bJ,
                                position: g.parseInt(bK),
                                price: g.parseFloat(bL),
                                currency: bN
                            }
                        })
                    },
                    addEnhancedEcommerceProductContext: function(bG, bF, bO, bJ, bH, bL, bN, bK, bI, bM, bP) {
                        u.push({
                            schema: "iglu:com.google.analytics.enhanced-ecommerce/productFieldObject/jsonschema/1-0-0",
                            data: {
                                id: bG,
                                name: bF,
                                list: bO,
                                brand: bJ,
                                category: bH,
                                variant: bL,
                                price: g.parseFloat(bN),
                                quantity: g.parseInt(bK),
                                coupon: bI,
                                position: g.parseInt(bM),
                                currency: bP
                            }
                        })
                    },
                    addEnhancedEcommercePromoContext: function(bJ, bI, bH, bF, bG) {
                        u.push({
                            schema: "iglu:com.google.analytics.enhanced-ecommerce/promoFieldObject/jsonschema/1-0-0",
                            data: {
                                id: bJ,
                                name: bI,
                                creative: bH,
                                position: bF,
                                currency: bG
                            }
                        })
                    },
                    enableErrorTracking: function(bF, bG) {
                        aT.enableErrorTracking(bF, bG, bp())
                    },
                    trackError: function(bI, bF, bK, bH, bG, bL) {
                        var bJ = bp(bL);
                        aT.trackError(bI, bF, bK, bH, bG, bJ)
                    },
                    preservePageViewId: function() {
                        aL = true
                    }
                }
            }
        }())
    }, {
        "./errors": 13,
        "./forms": 14,
        "./lib/detectors": 17,
        "./lib/helpers": 18,
        "./lib/proxies": 19,
        "./lib_managed/lodash": 20,
        "./links": 21,
        "./out_queue": 22,
        "browser-cookie-lite": 1,
        sha1: 6,
        "snowplow-tracker-core": 7,
        uuid: 12
    }]
}, {}, [16]);