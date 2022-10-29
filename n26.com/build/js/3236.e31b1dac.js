(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3236], {
        75504: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            const i = (0, n(36614).o)("WebsiteModuleContext", {
                moduleType: null,
                moduleId: null
            })
        },
        87548: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            const i = (0, n(36614).o)("WebsitePageContext", {
                dialogRef: null,
                banner: null,
                isCustomPage: !1,
                trackingData: {},
                showHeaderShadow: !1,
                setShowHeaderShadow: () => {}
            })
        },
        61785: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            var i = n(61250);
            const r = e => (0, i.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 32 32",
                ...e,
                children: (0, i.jsx)("path", {
                    d: "M8.77 32a1.53 1.53 0 0 1-1.08-2.61L21.07 16 7.68 2.61A1.53 1.53 0 1 1 9.85.45l14.47 14.47a1.53 1.53 0 0 1 0 2.16L9.85 31.55a1.53 1.53 0 0 1-1.08.45z"
                })
            })
        },
        76295: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var i = n(55443),
                r = n(7862),
                o = n.n(r),
                a = n(73352),
                s = n.n(a),
                l = n(61250);
            const c = {
                    allowForms: "allow-forms",
                    allowModals: "allow-modals",
                    allowOrientationLock: "allow-orientation-lock",
                    allowPointerLock: "allow-pointer-lock",
                    allowPopups: "allow-popups",
                    allowPopupsToEscapeSandbox: "allow-popups-to-escape-sandbox",
                    allowPresentation: "allow-presentation",
                    allowSameOrigin: "allow-same-origin",
                    allowScripts: "allow-scripts",
                    allowTopNavigation: "allow-top-navigation"
                },
                d = Object.keys(c),
                u = e => c[e],
                p = e => d.filter((e => t => Boolean(e[t]))(e)).map(u).join(" "),
                g = e => (0, l.jsx)("iframe", { ...s()(e, d),
                    title: e.title,
                    sandbox: p(e)
                });
            g.propTypes = {
                title: o().string.isRequired,
                src: o().string,
                referrerPolicy: o().string,
                allowForms: o().bool,
                allowModals: o().bool,
                allowOrientationLock: o().bool,
                allowPointerLock: o().bool,
                allowPopups: o().bool,
                allowPopupsToEscapeSandbox: o().bool,
                allowPresentation: o().bool,
                allowSameOrigin: o().bool,
                allowScripts: o().bool,
                allowTopNavigation: o().bool
            }, g.defaultProps = {
                src: "",
                referrerPolicy: "no-referrer"
            };
            const m = (0, i.Z)((() => ({})), g)
        },
        94456: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var i = n(29901),
                r = n(55851),
                o = n(45079),
                a = n(61250);
            const s = (0, i.forwardRef)(((e, t) => (0, a.jsx)("img", { ...e,
                    alt: (0, o.a)(e.alt),
                    ref: t
                }))),
                l = (0, r.Z)((() => ({})), s, ["alt", "data-testid", "height", "loading", "onClick", "onLoad", "src", "srcSet", "width"])
        },
        59144: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var i = n(55851),
                r = n(53623),
                o = n(84079);
            const a = {
                    display: "block",
                    marginTop: 0,
                    marginBottom: "1rem",
                    fontSize: "var(--font-size-5-xl)",
                    lineHeight: "var(--line-height-m)",
                    letterSpacing: o.f8,
                    fontWeight: 600,
                    [o.OV]: {
                        fontSize: "var(--font-size-6-xl)"
                    }
                },
                s = {
                    display: "block",
                    marginTop: 0,
                    marginBottom: "1rem",
                    fontSize: "var(--font-size-3-xl)",
                    letterSpacing: o.f8,
                    lineHeight: "var(--line-height-m)",
                    fontWeight: 600,
                    [o.sJ]: {
                        fontSize: "var(--font-size-5-xl)"
                    }
                },
                l = {
                    display: "block",
                    marginTop: 0,
                    marginBottom: "1rem",
                    fontSize: "170%",
                    fontWeight: 600,
                    lineHeight: "var(--line-height-m)",
                    letterSpacing: o.f8
                },
                c = {
                    display: "block",
                    marginTop: 0,
                    marginBottom: "1rem",
                    fontSize: "140%",
                    fontWeight: 600,
                    lineHeight: "var(--line-height-m)",
                    letterSpacing: o.f8
                },
                d = r.Z.create({
                    h1: a,
                    h2: s,
                    h3: l,
                    h4: c,
                    h5: {
                        display: "block",
                        marginTop: 0,
                        marginBottom: "1rem",
                        fontSize: "110%",
                        fontWeight: 600,
                        lineHeight: "var(--line-height-3-xl)"
                    }
                }),
                u = {
                    XL: (0, i.Z)(d.h1, "h1"),
                    L: (0, i.Z)(d.h2, "h2"),
                    M: (0, i.Z)(d.h3, "h3"),
                    S: (0, i.Z)(d.h4, "h4"),
                    XS: (0, i.Z)(d.h5, "h5")
                }
        },
        1712: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => j,
                Z: () => Z
            });
            var i = n(29901),
                r = n(7862),
                o = n.n(r),
                a = n(55443),
                s = n(29064),
                l = n(45079),
                c = n(84534),
                d = n(74638),
                u = n(94456);
            const p = (e = "") => {
                const t = e.split("?").reverse().pop().split(".").pop();
                return !t.includes("/") && t
            };
            var g = n(82243),
                m = n(98361);
            const f = e => ({
                jpg: "image/jpeg",
                jpeg: "image/jpeg",
                png: "image/png",
                webp: "image/webp",
                svg: "image/svg"
            }[e]);
            var h = n(61250);
            const v = e => {
                    const {
                        density: t = 1,
                        fit: n = "thumb",
                        src: i,
                        width: r,
                        originalWidth: o
                    } = e, a = !o || o > r, s = (0, m.Z)({
                        bg: e.bg,
                        density: t,
                        fit: n,
                        focus: e.focus,
                        format: e.format,
                        height: e.height,
                        quality: e.quality,
                        ratio: e.ratio,
                        src: i,
                        width: a ? r : o
                    }), l = i.includes("?") ? "&" : "?";
                    return 1 !== t ? `${i}${l}${s} ${t}x` : `${i}${l}${s}`
                },
                b = e => {
                    const {
                        effectiveConnectionType: t
                    } = (0, g.kH)(), n = (({
                        options: e,
                        effectiveConnectionType: t
                    }) => {
                        const n = v({ ...e,
                                density: 1
                            }),
                            i = v({ ...e,
                                density: 2
                            });
                        return "2g" === t || "slow-2g" === t ? [n].join(", ") : [n, i].join(", ")
                    })({
                        options: e,
                        effectiveConnectionType: t
                    }), i = f(e.format);
                    return "number" != typeof e.breakpoint ? (0, h.jsx)("source", {
                        srcSet: n,
                        type: i
                    }) : (0, h.jsx)("source", {
                        media: `(min-width: ${e.breakpoint}px)`,
                        srcSet: n,
                        type: i
                    })
                };
            v.propTypes = {
                bg: o().string,
                src: o().string.isRequired,
                width: o().number.isRequired,
                originalWidth: o().number,
                ratio: o().number,
                fit: o().oneOf(["pad", "fill", "thumb", "scale", "crop"]),
                focus: o().oneOf(["top", "right", "bottom", "left", "top_right", "right_top", "right", "bottom_right", "right_bottom", "bottom", "bottom_left", "left_bottom", "left", "top_left", "left_top", "face", "faces"])
            }, b.propTypes = {
                format: o().string.isRequired,
                breakpoint: o().oneOfType([o().number])
            };
            const y = b,
                x = (e = []) => e[e.length - 1],
                k = e => {
                    const t = (0, l.a)(e.alt);
                    return "function" == typeof e.renderFallback ? e.renderFallback({
                        alt: t,
                        loading: e.loading,
                        onLoad: e.onLoad,
                        src: e.fallbackSrc
                    }) : (0, h.jsx)(u.Z, {
                        alt: t,
                        loading: e.loading,
                        onLoad: e.onLoad,
                        src: e.fallbackSrc
                    })
                };
            k.propTypes = {
                alt: o().string,
                fallbackSrc: o().string.isRequired,
                loading: o().string,
                onLoad: o().func,
                renderFallback: o().func
            };
            const w = e => {
                    const t = (0, c.q)(e.sources).sort(((e, t) => t.breakpoint - e.breakpoint));
                    if (!t.every((({
                            src: e
                        }) => Boolean(e)))) return null;
                    const n = t.map((({
                            src: e
                        }) => {
                            const t = p(e);
                            return "webp" === t ? "jpg" : t
                        })),
                        r = x(t),
                        o = x(n),
                        a = v({
                            format: o,
                            src: r.src,
                            quality: e.quality,
                            width: r.width
                        });
                    if ((0, d.Z)("svg", r.src)) return (0, h.jsx)("div", {
                        className: e.className,
                        children: (0, h.jsx)(k, { ...e,
                            fallbackSrc: a
                        })
                    });
                    const s = !e.forceJpg,
                        l = (t, n) => {
                            const i = n || p(t.src);
                            return {
                                fit: e.fit,
                                focus: e.focus,
                                quality: e.quality,
                                ratio: e.ratio,
                                bg: e.bg,
                                ...t,
                                format: e.forceJpg ? "jpg" : i,
                                originalWidth: e.originalWidth
                            }
                        };
                    return (0, h.jsxs)("picture", {
                        className: e.className,
                        children: [s && t.map((e => (0, i.createElement)(y, { ...l(e, "webp"),
                            key: `${e.breakpoint}-${e.width}-webp`
                        }))), t.map((e => (0, i.createElement)(y, { ...l(e),
                            key: `${e.breakpoint}-${e.width}`
                        }))), (0, h.jsx)(k, { ...e,
                            fallbackSrc: a
                        })]
                    })
                },
                S = {
                    breakpoint: o().number,
                    src: o().string.isRequired,
                    width: o().number.isRequired
                };
            w.propTypes = {
                alt: o().string,
                className: o().oneOfType([o().string, o().func]),
                forceJpg: o().bool,
                originalWidth: o().number,
                quality: o().number,
                renderFallback: o().func,
                sources: o().oneOfType([o().arrayOf(o().shape(S)), o().shape(S)]).isRequired
            }, w.defaultProps = {
                alt: "",
                forceJpg: !1,
                quality: 70,
                sources: []
            };
            const j = (e, t) => (0, s.ZP)(e) === (0, s.ZP)(t),
                Z = (0, a.Z)((() => ({})), (0, i.memo)(w, j))
        },
        82636: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var i = n(55443),
                r = n(53623),
                o = n(84079);
            const a = {
                    display: "block",
                    marginTop: 0,
                    marginBottom: "1rem",
                    fontSize: "var(--font-size-3-xl)",
                    lineHeight: "var(--line-height-m)",
                    letterSpacing: o.f8,
                    fontWeight: 500,
                    [o.OV]: {
                        fontSize: "var(--font-size-6-xl)"
                    }
                },
                s = {
                    display: "block",
                    marginTop: 0,
                    marginBottom: "1rem",
                    fontSize: "var(--font-size-3-xl)",
                    letterSpacing: o.f8,
                    lineHeight: "var(--line-height-m)",
                    fontWeight: 500,
                    [o.sJ]: {
                        fontSize: "var(--font-size-5-xl)"
                    }
                },
                l = {
                    display: "block",
                    marginTop: 0,
                    marginBottom: "1rem",
                    fontSize: "170%",
                    fontWeight: 500,
                    lineHeight: 1.12,
                    letterSpacing: o.f8
                },
                c = {
                    display: "block",
                    marginTop: 0,
                    marginBottom: "1rem",
                    fontSize: "140%",
                    fontWeight: 500,
                    lineHeight: 1.14,
                    letterSpacing: o.f8
                },
                d = r.Z.create({
                    h1: a,
                    h2: s,
                    h3: l,
                    h4: c,
                    h5: {
                        display: "block",
                        marginTop: 0,
                        marginBottom: "1rem",
                        fontSize: "var(--font-size-s)",
                        fontWeight: 500,
                        lineHeight: 1.285
                    }
                }),
                u = {
                    XL: (0, i.Z)(d.h1, "h1"),
                    L: (0, i.Z)(d.h2, "h2"),
                    M: (0, i.Z)(d.h3, "h3"),
                    S: (0, i.Z)(d.h4, "h4"),
                    XS: (0, i.Z)(d.h5, "h5")
                }
        },
        98361: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var i = n(92372),
                r = n(74638);
            const o = /jpe?g/i,
                a = /jpeg/i,
                s = e => {
                    const {
                        bg: t,
                        density: n = 1,
                        fit: s,
                        focus: l,
                        format: c,
                        height: d,
                        quality: u,
                        ratio: p,
                        src: g,
                        width: m
                    } = e, f = !c && (0, r.Z)("jpg", g) ? "jpg" : c;
                    if ((0, r.Z)("svg", g)) return "";
                    const h = (e => ({
                            fm: a.test(e) ? "jpg" : e || void 0,
                            fl: e && e.match(o) ? "progressive" : void 0
                        }))(f),
                        v = {
                            bg: t,
                            fit: s,
                            f: l,
                            h: "number" == typeof d ? d * n : void 0,
                            w: m * n,
                            q: u,
                            ...h
                        };
                    return "number" == typeof p && (v.h = Math.round(m * p * n)), (0, i._)(v)
                }
        },
        38847: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            var i = n(45079);
            const r = (e, t) => {
                const n = t || "q33z48p65a6w",
                    r = e ? .fields ? ? {},
                    {
                        url: o,
                        dominantColor: a,
                        details: s,
                        ...l
                    } = r ? .file || {};
                let {
                    height: c,
                    width: d
                } = l || {};
                c || d || !s || (c = s ? .image ? .height, d = s ? .image ? .width);
                const u = `//${((e="")=>e.endsWith(".pdf")?"assets":e.endsWith(".mp4")?"videos":"images")(o)}.ctfassets.net/${n}/`,
                    p = (o || "").startsWith(u) ? o : o && u + o;
                return {
                    alt: (0, i.a)(r.description),
                    height: c,
                    dominantColor: a && "#" + a,
                    ratio: c / d * 100,
                    src: p,
                    width: d
                }
            }
        },
        74638: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            const i = (e, t = "") => {
                const n = e.startsWith(".") ? e : "." + e;
                return t.slice(t.lastIndexOf(".")).replace(".jpeg", ".jpg") === n.replace(".jpeg", ".jpg")
            }
        },
        39957: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            const i = e => {
                Array.isArray(window.dataLayer) && window.dataLayer.push(e)
            }
        },
        97048: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var i = n(29901),
                r = n(77837),
                o = n.n(r),
                a = n(63631),
                s = n(84079);
            const l = () => {
                const {
                    guessedDeviceType: e
                } = (0, i.useContext)(a.Z), [t, n] = (0, i.useState)("mobile" === e ? 320 : 1 / 0), [r, l] = (0, i.useState)("mobile" === e ? 568 : 1 / 0), [c, d] = (0, i.useState)(t <= s.Eb), [u, p] = (0, i.useState)(t > s.Eb && t <= s.qA), [g, m] = (0, i.useState)(t > s.qA && t <= s.a0), [f, h] = (0, i.useState)(t > s.a0), [v, b] = (0, i.useState)(!1), y = () => {
                    const e = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                        t = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                    n(e), l(t)
                };
                return (0, i.useEffect)((() => {
                    b(!0), y();
                    const e = o()(y, 100);
                    return window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e), b(!1)
                    }
                }), []), (0, i.useEffect)((() => {
                    v && (d(t <= s.Eb), p(t > s.Eb && t <= s.qA), m(t > s.qA && t <= s.a0), h(t > s.a0))
                }), [t, v]), {
                    viewportWidth: t,
                    viewportHeight: r,
                    isSmall: c,
                    isMedium: u,
                    isLarge: g,
                    isWide: f
                }
            }
        },
        76546: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Z
            });
            var i = n(29901),
                r = n(7862),
                o = n.n(r),
                a = n(55851),
                s = n(66468),
                l = n(26345),
                c = n(92372),
                d = n(87548),
                u = n(75504),
                p = n(41188),
                g = n(17414),
                m = n(39957),
                f = n(22773),
                h = n(73601),
                v = n(84929),
                b = n(53623);
            const y = {
                    left: "flex-start",
                    right: "flex-end"
                },
                x = b.Z.create({
                    wrap: ({
                        align: e,
                        pad: t
                    }) => ({
                        display: "flex",
                        justifyContent: y[e] || "center",
                        paddingTop: t ? "var(--spacing-m)" : void 0
                    })
                });
            var k = n(61250);
            const w = (0, a.Z)(x.wrap, "div"),
                S = e => {
                    const {
                        renderWrapper: t,
                        align: n,
                        extend: i,
                        pad: r,
                        children: o
                    } = e;
                    return "function" == typeof t ? t({ ...e
                    }) : (0, k.jsx)(w, {
                        align: n,
                        extend: i,
                        pad: r,
                        children: o
                    })
                },
                j = e => {
                    const {
                        pageCtaLink: t,
                        trackingData: n,
                        query: r,
                        extend: o,
                        color: a,
                        size: b,
                        type: y,
                        isBlock: x,
                        isDisabled: w,
                        isQueryPreserved: j,
                        children: Z,
                        dataAttributes: O
                    } = e, {
                        moduleId: N,
                        moduleType: C
                    } = (0, i.useContext)(u.Z), {
                        waitingListDialog: T
                    } = (0, i.useContext)(d.Z), {
                        country: E,
                        language: L
                    } = (0, f.Z)(), z = (0, s.o)(), {
                        trackStructuredEvent: P,
                        trackOptimizelyEvent: B
                    } = (0, v.D)(), {
                        labelsCTA: D,
                        hasOptimizelyExperiment: _
                    } = (0, g.ZP)(), A = (0, h.Z)(), q = (0, i.useCallback)((() => {
                        const {
                            text: e
                        } = t ? .fields ? ? {};
                        return "waitingList" === l.tR[E ? .toLowerCase()] ? A("cta.label.waiting_list") : e || (Z || A("cta.label"))
                    }), [A, Z, t ? .fields, E]), I = (0, i.useMemo)((() => _ ? D ? .signup : !1 === _ ? q() : void 0), [q, _, D ? .signup]), R = () => {
                        const e = (0, c._)({
                            pr: n.productPreference || void 0,
                            ch: n.trackingName || void 0,
                            residencyCountryCode: l.Up[E ? .toLowerCase()] ? .iso3CountryCode,
                            lang: L
                        });
                        return e || r ? r ? `${r}&${e}` : `?${e}` : ""
                    }, W = () => {
                        const e = R();
                        if (t) {
                            const n = z({
                                fields: t.fields
                            });
                            if (n) return n + e
                        }
                        return "https://get.n26.com" + e
                    }, $ = {
                        "data-cta-label": n.productPreference,
                        "data-cta-property": n.trackingName,
                        "data-cta": !0,
                        "data-testid": e["data-testid"],
                        ...O,
                        href: W()
                    };
                    return ($.href || $.to || T) && void 0 !== _ ? (0, k.jsxs)(S, {
                        extend: o,
                        children: [(0, k.jsx)(p.Z, {
                            color: a,
                            isBlock: x,
                            isDisabled: w,
                            isOpenedInNewTab: !1,
                            isQueryPreserved: j,
                            label: I,
                            onClick: (F = T, ({
                                currentTarget: e
                            }) => {
                                F && F.current && F.current.show();
                                const n = (e => {
                                    const t = document.querySelectorAll('[data-cta="true"]');
                                    if (!t || !t.length) return null;
                                    const n = [...t];
                                    return {
                                        cta_num: n.findIndex((t => e === t)) + 1,
                                        cta_text: q(),
                                        cta_total: n.length,
                                        destination_url: W(),
                                        event: "cta_click",
                                        module_id: N,
                                        module_type: C
                                    }
                                })(e);
                                if (n && (0, m.Z)(n), n) {
                                    let e = "website.cta.clicked";
                                    n.destination_url.includes("https://get.n26.com") && (e = "website.sui.clicked"), P(e, {
                                        locale: L,
                                        country: E,
                                        ...n
                                    })
                                }
                                const {
                                    optimizelyEventKey: i
                                } = t ? .fields ? ? {};
                                i && B(i), _ && B(g.gM)
                            }),
                            size: b,
                            type: y,
                            ...$.dataAttributes,
                            ...$
                        }), Z]
                    }) : null;
                    var F
                };
            j.defaultProps = {
                dataAttributes: {},
                isQueryPreserved: !0,
                query: "",
                trackingData: {},
                type: "PRIMARY"
            }, j.propTypes = {
                align: o().oneOf(["center", "left", "right"]),
                children: o().node,
                className: o().string,
                color: o().string,
                Component: o().func,
                dataAttributes: o().object,
                isDisabled: o().bool,
                isBlock: o().bool,
                extend: o().func,
                pad: o().bool,
                pageCtaLink: o().object,
                isQueryPreserved: o().bool,
                query: o().string,
                renderWrapper: o().func,
                size: o().oneOf(["SMALL", "BASE"]),
                trackingData: o().object,
                type: o().oneOf(["PRIMARY", "SECONDARY", "SECONDARY_BORDERLESS"])
            };
            const Z = j
        },
        2007: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Z
            });
            var i = n(39422),
                r = n(13339),
                o = n(62278),
                a = n(49679),
                s = n(73601),
                l = n(29901),
                c = n(7862),
                d = n.n(c),
                u = n(71794),
                p = n(96519),
                g = n(62665),
                m = n(54928),
                f = n(38847);
            const h = e => {
                    if (!e) return null;
                    const t = "string" == typeof e ? "" : (0, f.Z)(e) ? .alt;
                    return t || ""
                },
                v = e => {
                    const t = (0, f.Z)(e),
                        n = "string" == typeof e ? e : t.src;
                    if (!n) return null;
                    return n.startsWith("//") ? "https:" + n + "?w=1200&h=645&fit=thumb" : n
                };
            var b = n(61250);
            const y = e => {
                    const t = e.imageAlt || h(e.image);
                    return (0, b.jsxs)(u.ql, {
                        children: [(0, b.jsx)("meta", {
                            name: "twitter:card",
                            content: e.image ? "summary_large_image" : "summary"
                        }), Boolean(e.handler) && (0, b.jsx)("meta", {
                            name: "twitter:site",
                            content: e.handler
                        }), Boolean(e.title) && (0, b.jsx)("meta", {
                            name: "twitter:title",
                            content: e.title
                        }), Boolean(e.description) && (0, b.jsx)("meta", {
                            name: "twitter:description",
                            content: e.description
                        }), Boolean(e.image) && (0, b.jsx)("meta", {
                            name: "twitter:image",
                            content: v(e.image)
                        }), Boolean(t) && (0, b.jsx)("meta", {
                            name: "twitter:image:alt",
                            content: t
                        })]
                    })
                },
                x = e => {
                    const t = e.imageAlt || h(e.image);
                    return (0, b.jsxs)(u.ql, {
                        children: [(0, b.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), Boolean(e.siteName) && (0, b.jsx)("meta", {
                            property: "og:site_name",
                            content: e.siteName
                        }), Boolean(e.title) && (0, b.jsx)("meta", {
                            property: "og:title",
                            content: e.title
                        }), Boolean(e.description) && (0, b.jsx)("meta", {
                            property: "og:description",
                            content: e.description
                        }), Boolean(e.image) && (0, b.jsx)("meta", {
                            property: "og:image",
                            content: v(e.image)
                        }), Boolean(t) && (0, b.jsx)("meta", {
                            property: "og:image:alt",
                            content: t
                        }), Boolean(e.url) && (0, b.jsx)("meta", {
                            property: "og:url",
                            content: e.url
                        })]
                    })
                },
                k = e => (0, b.jsx)(u.ql, {
                    children: Boolean(e.appId) && (0, b.jsx)("meta", {
                        property: "fb:app_id",
                        content: e.appId
                    })
                }),
                w = e => e.canonical ? (0, b.jsx)(u.ql, {
                    children: (0, b.jsx)("link", {
                        rel: "canonical",
                        href: e.canonical
                    })
                }) : null,
                S = e => e.hrefLangs ? (0, b.jsx)(u.ql, {
                    children: e.hrefLangs
                }) : null,
                j = e => {
                    const {
                        title: t,
                        description: n,
                        robots: i,
                        themeColor: r,
                        children: o,
                        twitter: a,
                        og: s,
                        fb: c
                    } = e, {
                        isDark: d
                    } = (0, l.useContext)(p.Z), f = d ? r ? .dark || m.BACKGROUNDS.backgroundScreenDefault : r ? .light || g.BACKGROUNDS.backgroundScreenDefault;
                    return (0, b.jsxs)(b.Fragment, {
                        children: [(0, b.jsxs)(u.ql, {
                            children: [(0, b.jsx)("title", {
                                children: t
                            }), (0, b.jsx)("meta", {
                                name: "description",
                                content: n
                            }), (0, b.jsx)("meta", {
                                name: "robots",
                                content: i
                            }), (0, b.jsx)("meta", {
                                name: "theme-color",
                                content: f
                            }), o]
                        }), (0, b.jsx)(x, { ...s
                        }), (0, b.jsx)(y, { ...a
                        }), (0, b.jsx)(k, { ...c
                        }), (0, b.jsx)(w, { ...e
                        }), (0, b.jsx)(S, { ...e
                        })]
                    })
                };
            j.propTypes = {
                children: d().node,
                title: d().string,
                description: d().string,
                robots: d().string,
                canonical: d().string,
                hrefLangs: d().string,
                themeColor: d().shape({
                    light: d().string,
                    dark: d().string
                }),
                twitter: d().shape({
                    title: d().string,
                    description: d().string,
                    image: d().oneOfType([d().object, d().string]),
                    imageAlt: d().string,
                    handler: d().string
                }),
                og: d().shape({
                    title: d().string,
                    description: d().string,
                    image: d().oneOfType([d().object, d().string]),
                    imageAlt: d().string,
                    url: d().string,
                    siteName: d().string
                }),
                fb: d().shape({
                    appId: d().string
                })
            };
            const Z = e => {
                const t = (e => {
                    const t = (0, s.Z)(),
                        n = (0, i.UO)(),
                        {
                            hrefLangs: l,
                            page: c,
                            overrides: d = {}
                        } = e,
                        {
                            slug: u,
                            countryCodes: p,
                            seoData: g,
                            seaPage: m,
                            isIndexed: f
                        } = c ? .fields ? ? {},
                        h = g ? .fields ? ? {},
                        v = (0, a.ZP)({
                            slug: u,
                            countryCodes: p,
                            ...n,
                            overrides: d
                        }),
                        b = null == f || !0 === f,
                        y = d.ogImage ? ? h.ogImage ? ? o.o6 + r.Z,
                        x = d.title ? ? h.pageTitle ? ? t("n26.tagline"),
                        k = x.includes("N26") ? "" : " - N26";
                    return {
                        title: x + k,
                        description: d.description ? ? h.seoDescription,
                        og: {
                            title: d.ogTitle ? ? h.ogTitle,
                            description: d.ogDescription ? ? h.ogDescription,
                            image: y,
                            url: d.ogUrl ? ? v
                        },
                        twitter: {
                            title: d.ogTitle ? ? h.ogTitle,
                            description: d.ogDescription ? ? h.ogDescription,
                            image: d.twitterCardImage ? ? h.twitterCardImage ? ? y,
                            handler: d.twitterHandler ? ? h.twitterHandler ? ? "@n26"
                        },
                        canonical: v,
                        robots: d.isSeaPage ? ? (m || !b) ? "noindex, nofollow, noarchive, nocache, nosnippet, noimageindex" : "index, follow",
                        hrefLangs: l
                    }
                })(e);
                return (0, b.jsx)(j, { ...t,
                    children: e.children
                })
            }
        },
        71934: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => k
            });
            var i = n(55443),
                r = n(7721),
                o = n(33059),
                a = n(52351),
                s = n(98999),
                l = n(76546),
                c = n(34197);

            function d(e) {
                const t = /(\w+)=["\u201d\u201c]([^"\u201d\u201c]+)["\u201d\u201c]\s*/g,
                    n = {};
                let i;
                for (; i = t.exec(e);) n[i[1].toLowerCase()] = i[2].trim();
                return n
            }
            var u = n(73601),
                p = n(55851),
                g = n(76295);
            const m = n(53623).Z.create({
                wrapper: {
                    margin: "0 0 var(--spacing-m)",
                    ":last-child": {
                        marginBottom: 0
                    }
                },
                caption: {
                    fontSize: "var(--font-size-3-xs)",
                    color: "var(--typography-default)"
                },
                responsiveWrapper: e => ({
                    overflow: "hidden",
                    paddingTop: "56.25%",
                    position: "relative",
                    marginBottom: e.caption ? "var(--spacing-3-xs)" : "var(--spacing-m)"
                }),
                iframe: {
                    border: 0,
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%"
                }
            });
            var f = n(61250);
            const h = (0, p.Z)(m.wrapper, "figure"),
                v = (0, p.Z)(m.caption, "figcaption"),
                b = (0, p.Z)(m.responsiveWrapper, "div"),
                y = e => (0, f.jsx)(b, {
                    caption: e.caption,
                    children: (0, f.jsx)(g.Z, {
                        extend: m.iframe,
                        allowFullScreen: !0,
                        allowSameOrigin: !0,
                        allowScripts: !0,
                        frameBorder: "0",
                        src: `https://www.youtube-nocookie.com/embed/${e.id}?showinfo=0&autoplay=0&modestbranding=1`,
                        title: e.caption
                    })
                }),
                x = e => e.caption ? (0, f.jsxs)(h, {
                    children: [(0, f.jsx)(y, { ...e
                    }), (0, f.jsx)(v, {
                        children: e.caption
                    })]
                }) : (0, f.jsx)(y, { ...e
                }),
                k = (0, i.Z)((() => ({})), (e => {
                    const t = (0, u.Z)(),
                        n = e.className || null;
                    if (!e.children) return null;
                    if (e.children.length > 1) return (0, f.jsx)("p", {
                        className: n,
                        children: e.children
                    });
                    const i = e.children[0] || e.children.props ? .content ? .[0] ? .value,
                        p = (0, s.Z)(i, "CTA"),
                        g = (0, s.Z)(i, "YOUTUBE"),
                        m = (0, s.Z)(i, "VIDEO");
                    if (!p && !g && !m) {
                        const s = (0, r.J)(i);
                        if (!s.length) return (0, f.jsx)("p", {
                            className: n,
                            children: (0, o.s)(e.children)
                        });
                        const l = s.reduce(((e, n) => ({ ...e,
                                [n]: t(n.trim())
                            })), {}),
                            c = (0, a.B)(i, {
                                replacements: l,
                                ...e.campaignVariables
                            });
                        return (0, f.jsx)("p", {
                            className: n,
                            children: (0, o.s)(c)
                        })
                    }
                    const h = d(p),
                        v = d(g),
                        b = d(m);
                    return p ? (0, f.jsx)(l.Z, {
                        pad: !0,
                        size: (h.theme || "").toUpperCase(),
                        align: h.align,
                        trackingData: e.trackingData,
                        pageCtaLink: e.pageCtaLink,
                        dataAttributes: e.ctaDataAttributes,
                        children: h.text
                    }) : g ? (0, f.jsx)(x, {
                        id: v.id,
                        caption: v.caption
                    }) : m ? (0, f.jsx)(c.Z, {
                        isGif: ["true", "yes", "on"].includes(b.isgif),
                        src: b.src,
                        caption: b.caption
                    }) : void 0
                }))
        },
        34197: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => S
            });
            var i = n(29901),
                r = n(7862),
                o = n.n(r),
                a = n(55443),
                s = n(55851),
                l = n(77387),
                c = n(96519),
                d = n(73601),
                u = n(83406),
                p = n(2040);
            const g = n(53623).Z.create({
                videoWrapper: e => ({
                    display: "inline-block",
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: e.hasCaption ? "var(--spacing-m)" : void 0
                }),
                videoElement: e => ({
                    marginBottom: e.hasCaption ? "var(--spacing-3-xs)" : 0,
                    maxWidth: "100%"
                }),
                messageBox: {
                    border: "2px solid var(--divider-error)",
                    color: "var(--typography-error)",
                    marginBottom: "var(--spacing-m)",
                    padding: "var(--spacing-m)",
                    borderRadius: "var(--border-radius-m)"
                },
                noticeIcon: {
                    position: "relative",
                    top: "4px",
                    marginRight: "var(--spacing-s)"
                },
                caption: {
                    fontSize: "var(--font-size-3-xs)",
                    color: "var(--typography-light)"
                }
            });
            var m = n(61250);
            const f = (0, s.Z)(g.messageBox, "div"),
                h = e => {
                    const t = (0, d.Z)();
                    return (0, m.jsxs)(f, {
                        children: [(0, m.jsx)(p.Z, {
                            extend: g.noticeIcon,
                            icon: u.Z
                        }), t("video.play_error")]
                    })
                },
                v = (0, a.Z)(g.videoElement, "video"),
                b = (0, s.Z)(g.caption, "figcaption"),
                y = (e, t) => {
                    if (t || !e.paused) return;
                    const n = e.play();
                    n && n.catch((() => e.play()))
                },
                x = (0, i.forwardRef)(((e, t) => {
                    const n = (0, d.Z)(),
                        [r, o] = (0, i.useState)(!1);
                    if (r) return (0, m.jsx)(h, {});
                    const a = {
                        autoPlay: !0,
                        innerRef: t,
                        loop: e.loop,
                        muted: !0,
                        onError: () => o(!0),
                        playsInline: !0,
                        src: e.src
                    };
                    return "function" == typeof e.renderVideo ? e.renderVideo({ ...a,
                        children: n("video.unsupported_format")
                    }) : (0, m.jsx)(v, { ...a,
                        children: n("video.unsupported_format")
                    })
                })),
                k = e => {
                    const {
                        reducedMotion: t
                    } = (0, i.useContext)(c.Z), [n, r] = (0, i.useState)(!1), o = (0, i.useRef)(null), a = e.caption ? "figure" : "div";
                    return (0, m.jsx)(l.df, {
                        as: "div",
                        className: e.className,
                        onChange: e => {
                            !n && o.current && (e ? y(o.current, t) : o.current.pause())
                        },
                        children: (0, m.jsxs)(a, {
                            className: e.className,
                            role: "button",
                            tabIndex: 0,
                            onClick: () => {
                                o.current && (n || r(!0), o.current.paused ? y(o.current) : o.current.pause())
                            },
                            children: [(0, m.jsx)(x, {
                                src: e.src,
                                ref: o,
                                ...e
                            }), Boolean(e.caption) && (0, m.jsx)(b, {
                                children: e.caption
                            })]
                        })
                    })
                },
                w = e => {
                    const [t, n] = (0, i.useState)(!1), r = (0, d.Z)()("video.unsupported_format");
                    if (e.isGif) return (0, m.jsx)(k, { ...e
                    });
                    if (t) return (0, m.jsx)(h, {});
                    const o = e.caption ? "figure" : "div",
                        a = {
                            hasCaption: e.caption,
                            src: e.src,
                            poster: e.poster,
                            controls: !0,
                            playsInline: e.playsInline,
                            preload: "metadata",
                            onError: () => n(!0)
                        };
                    return (0, m.jsxs)(o, {
                        className: e.className,
                        children: ["function" == typeof e.renderVideo ? e.renderVideo({ ...a,
                            children: r
                        }) : (0, m.jsx)(v, { ...a,
                            children: r
                        }), Boolean(e.caption) && (0, m.jsx)(b, {
                            children: e.caption
                        })]
                    })
                };
            w.defaultProps = {
                loop: !0,
                playsInline: !0
            }, w.propTypes = {
                isGif: o().bool,
                src: o().string.isRequired,
                caption: o().string,
                renderVideo: o().func,
                loop: o().bool,
                poster: o().string,
                playsInline: o().bool
            };
            const S = (0, a.Z)(g.videoWrapper, w)
        },
        98999: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            const i = (e, t) => {
                const n = new RegExp("%?{?{\\s*" + t + "\\s*(?:([^}]+))?}?}", "gi").exec(e);
                return n ? (n[1] || "").trim() : null
            }
        },
        99798: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var i = n(54865),
                r = n(29901),
                o = n(56508),
                a = n(22773),
                s = n(13523),
                l = n.n(s);
            const c = e => {
                const {
                    country: t,
                    language: n,
                    pathname: s
                } = (0, a.Z)(), c = !(e.length && t && n && s);
                t && n && s || !e.length || o.Z.error("OPTIMIZELY_ACTIVATE_ERROR", {
                    pathname: s,
                    language: n,
                    country: t,
                    experimentKeys: e
                });
                const {
                    data: d,
                    loading: u
                } = (0, i.a)(l(), {
                    variables: {
                        experimentKeys: e,
                        attributes: {
                            pagePath: s,
                            country: t,
                            language: n
                        }
                    },
                    skip: c
                });
                return {
                    experiments: (0, r.useMemo)((() => d ? .activateOptimizely ? .experiments), [d]),
                    loading: u
                }
            }
        },
        17414: (e, t, n) => {
            "use strict";
            n.d(t, {
                US: () => s,
                ZP: () => l,
                gM: () => a
            });
            var i = n(29901),
                r = n(99798),
                o = n(22773);
            const a = "eu-signup-click-event",
                s = "eu-login-click-event",
                l = e => {
                    const {
                        pathname: t
                    } = (0, o.Z)(), [n, a] = (0, i.useState)(), [s, l] = (0, i.useState)(void 0), {
                        experiments: c,
                        loading: d
                    } = (0, r.Z)([]);
                    return (0, i.useEffect)((() => {
                        !1 === d && (l(!1), a({
                            login: e,
                            signup: void 0
                        }))
                    }), [e, c, d, t]), {
                        labelsCTA: n,
                        hasOptimizelyExperiment: s
                    }
                }
        },
        13339: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            const i = "/build/media/og-image-n26.e512c848b13455529700699c1b662537.jpg"
        },
        96363: e => {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "Image"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ContentfulMediaObject"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "sys"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "fields"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "description"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "file"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "url"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "width"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "height"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "dominantColor"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 166
                }
            };
            t.loc.source = {
                body: "fragment Image on ContentfulMediaObject {\n  sys {\n    id\n  }\n  fields {\n    description\n    file {\n      url\n      width\n      height\n      dominantColor\n    }\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };

            function n(e, t) {
                if ("FragmentSpread" === e.kind) t.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var i = e.type;
                    "NamedType" === i.kind && t.add(i.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    n(e, t)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    n(e, t)
                })), e.definitions && e.definitions.forEach((function(e) {
                    n(e, t)
                }))
            }
            var i = {};

            function r(e, t) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var i = e.definitions[n];
                    if (i.name && i.name.value == t) return i
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var t = new Set;
                    n(e, t), i[e.name.value] = t
                }
            })), e.exports = t, e.exports.Image = function(e, t) {
                var n = {
                    kind: e.kind,
                    definitions: [r(e, t)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var o = i[t] || new Set,
                    a = new Set,
                    s = new Set;
                for (o.forEach((function(e) {
                        s.add(e)
                    })); s.size > 0;) {
                    var l = s;
                    s = new Set, l.forEach((function(e) {
                        a.has(e) || (a.add(e), (i[e] || new Set).forEach((function(e) {
                            s.add(e)
                        })))
                    }))
                }
                return a.forEach((function(t) {
                    var i = r(e, t);
                    i && n.definitions.push(i)
                })), n
            }(t, "Image")
        },
        13523: e => {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "activateOptimizely"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "experimentKeys"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "ListType",
                                type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "String"
                                        }
                                    }
                                }
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "attributes"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "OptimizelyAttributes"
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "activateOptimizely"
                            },
                            name: {
                                kind: "Name",
                                value: "activateOptimizely"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "experimentKeys"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "experimentKeys"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "attributes"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "attributes"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "experiments"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 230
                }
            };
            t.loc.source = {
                body: "query activateOptimizely(\n  $experimentKeys: [String!]!\n  $attributes: OptimizelyAttributes\n) {\n  activateOptimizely: activateOptimizely(\n    experimentKeys: $experimentKeys\n    attributes: $attributes\n  ) {\n    experiments\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };

            function n(e, t) {
                if ("FragmentSpread" === e.kind) t.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var i = e.type;
                    "NamedType" === i.kind && t.add(i.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    n(e, t)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    n(e, t)
                })), e.definitions && e.definitions.forEach((function(e) {
                    n(e, t)
                }))
            }
            var i = {};

            function r(e, t) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var i = e.definitions[n];
                    if (i.name && i.name.value == t) return i
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var t = new Set;
                    n(e, t), i[e.name.value] = t
                }
            })), e.exports = t, e.exports.activateOptimizely = function(e, t) {
                var n = {
                    kind: e.kind,
                    definitions: [r(e, t)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var o = i[t] || new Set,
                    a = new Set,
                    s = new Set;
                for (o.forEach((function(e) {
                        s.add(e)
                    })); s.size > 0;) {
                    var l = s;
                    s = new Set, l.forEach((function(e) {
                        a.has(e) || (a.add(e), (i[e] || new Set).forEach((function(e) {
                            s.add(e)
                        })))
                    }))
                }
                return a.forEach((function(t) {
                    var i = r(e, t);
                    i && n.definitions.push(i)
                })), n
            }(t, "activateOptimizely")
        },
        92285: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var i = n(29901),
                r = n(1153),
                o = n(1589);

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var s = function(e) {
                var t = (0, i.useContext)(r.E).renderRule;
                return (0, i.useCallback)((function(n, i) {
                    return t(n, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            })))), i.forEach((function(t) {
                                a(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, e, e.themeProps, i))
                }), [e, t])
            };
            const l = function(e) {
                var t = e.themes,
                    n = e.themeOverrides,
                    r = void 0 === n ? {} : n,
                    a = e.themeName,
                    l = void 0 === a ? "" : a,
                    c = e.defaultTheme,
                    d = t[l] || t[c],
                    u = s(e);
                return (0, i.useCallback)((function(e, t) {
                    return u((0, o.Z)(d[e], r[e]), t)
                }), [d, u, r])
            }
        },
        77192: (e, t, n) => {
            "use strict";
            n.d(t, {
                I: () => o
            });
            var i = n(16454),
                r = n(26345);

            function o(e, t) {
                return `blog/${function(e,t){return[(0,i.l)({supportedLanguages:r.E7,defaultLang:r.k$,language:e,slugKey:r.f_.category}),t].filter(Boolean).join("/")}(e,t)}`
            }
        },
        24654: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => l
            });
            var i = n(13546),
                r = n.n(i),
                o = n(77192),
                a = n(26345),
                s = n(42959);

            function l({
                routeParams: e,
                fields: t,
                slugPrefix: n,
                domain: i,
                slugPath: l = "pageLink.fields.slug",
                query: c = ""
            }) {
                const {
                    language: d,
                    country: u = a.fu
                } = e || {}, p = r()(t, "link");
                if (p) return function(e, t) {
                    if ("string" == typeof t) return t.startsWith("http") || !e ? t : e + t
                }(i, p);
                const g = r()(t, "pageLink.sys.contentType.sys.id"),
                    m = "blogPost" === g ? "blog" : "blogCategory" === g ? (0, o.I)(d) : "";
                if (!d) {
                    (0, s.jl)().warn("HREF_CONSTRUCTION_WITHOUT_LANGUAGE", {
                        country: u,
                        slugPath: l
                    })
                }
                const f = `${i?"":"/"}${d}${u?"-"+u.toLowerCase():""}`,
                    h = r()(t, l),
                    v = [i, f, m, n, h].filter(Boolean).join("/");
                return h ? v + c : null
            }
        },
        45079: (e, t, n) => {
            "use strict";

            function i(e) {
                return "string" != typeof e || 0 === e.length || e.trim().match(/[.!?\u2026]$/) ? e : e.trim() + "."
            }
            n.d(t, {
                a: () => i
            })
        },
        7721: (e, t, n) => {
            "use strict";

            function i(e) {
                const t = /({{([^}]+)}})/g,
                    n = [],
                    i = () => t.exec(e);
                let r = i();
                for (; null !== r;) n.push(r[2]), r = i();
                return n
            }
            n.d(t, {
                J: () => i
            })
        },
        86981: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => r
            });
            var i = n(15932);

            function r(e) {
                return Boolean(e) && (0, i.K)(e.fields)
            }
        },
        66468: (e, t, n) => {
            "use strict";
            n.d(t, {
                o: () => a
            });
            var i = n(39422),
                r = n(24654);

            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function a() {
                const e = (0, i.UO)();
                return t => (0, r.w)(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), i.forEach((function(t) {
                            o(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    routeParams: e
                }, t))
            }
        }
    }
]);