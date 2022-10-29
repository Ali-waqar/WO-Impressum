(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [6047], {
        63955: (e, t, r) => {
            var n = {
                "./duet-date-picker.entry.js": [65643, 5643]
            };

            function i(e) {
                if (!r.o(n, e)) return Promise.resolve().then((() => {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = n[e],
                    i = t[0];
                return r.e(t[1]).then((() => r(i)))
            }
            i.keys = () => Object.keys(n), i.id = 63955, e.exports = i
        },
        88447: (e, t, r) => {
            "use strict";
            r.d(t, {
                i: () => d
            });
            var n = r(29901),
                i = r(74336),
                a = r(61250);
            const o = (0, i.ZP)({
                resolved: {},
                chunkName: () => "DevPanel",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!r.m[t]
                },
                importAsync: () => Promise.all([r.e(2286), r.e(8717)]).then(r.bind(r, 22852)),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return r(t)
                },
                resolve() {
                    return 22852
                }
            }, {
                resolveComponent: e => e.DevPanel
            });

            function s(e, t) {
                switch (t.type) {
                    case "open":
                        return e.visible ? e : {
                            visible: !0
                        };
                    case "close":
                        return {
                            visible: !1
                        };
                    default:
                        throw new Error(`No such action ${t.type}`)
                }
            }
            const l = {
                    visible: !1,
                    open: () => {},
                    close: () => {}
                },
                d = n.createContext(l);

            function c({
                children: e
            }) {
                const [t, r] = (0, n.useReducer)(s, l), i = (0, n.useMemo)((() => ({ ...t,
                    dispatch: r
                })), [t]);
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(d.Provider, {
                        value: i,
                        children: [e, (0, a.jsx)(o, {})]
                    })
                })
            }
        },
        96519: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = (0, r(36614).o)("AppearancePreferencesContext", {})
        },
        39252: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = (0, r(36614).o)("AuthStatusContext", {
                expiresAt: null,
                isAuthenticated: !1
            })
        },
        91932: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = (0, r(36614).o)("CookieNoteContext", {})
        },
        49849: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = (0, r(36614).o)("CsrfTokenContext", "")
        },
        63631: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = (0, r(36614).o)("GuessedSystemDataContext", {})
        },
        33083: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = (0, r(36614).o)("HasJavaScriptContext", !1)
        },
        95564: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = (0, r(36614).o)("PreserveQueryContext", !1)
        },
        81357: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = (0, r(36614).o)("RegionContext", {
                countryCode: "",
                iso2CountryCode: ""
            })
        },
        3178: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = (0, r(36614).o)("RequestCookiesContext", {})
        },
        44684: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = (0, r(36614).o)("StatusesContext", {})
        },
        34959: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => a
            });
            var n = r(36614),
                i = r(26345);
            const a = (0, n.o)("TranslatorContext", {
                locale: i.k$,
                translations: {}
            })
        },
        58422: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = (0, r(36614).o)("UserInfoContext", {})
        },
        30784: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = (0, r(36614).o)("WebviewContext", !1)
        },
        41188: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => z
            });
            var n = r(29901),
                i = r(46973),
                a = r(7862),
                o = r.n(a),
                s = r(39422),
                l = r(84246),
                d = r(24086),
                c = r(31741),
                u = r(20875),
                h = r(30784),
                p = r(95564),
                v = r(39760),
                C = r(2700),
                f = r(44800),
                g = r(19309),
                m = r(4880),
                x = r(52809),
                y = r(77523),
                b = r(24927),
                R = r(8873),
                E = r(74824),
                j = r(73601),
                _ = r(4028),
                A = r(53623),
                k = r(89341),
                B = r(22727),
                L = r(48337);
            const M = {
                    BASE: k.t.BASE,
                    SMALL: k.t.TIGHT,
                    TINY: k.t.TIGHTER
                },
                S = {
                    BASE: L.u[5],
                    SMALL: L.u[2],
                    TINY: L.u[1]
                },
                T = e => ({
                    display: e.display,
                    backgroundColor: e.color.primary,
                    border: "1px solid transparent",
                    color: y.oC.PRIMARY_INVERTED,
                    width: e.width,
                    lineHeight: L.bm[0],
                    textAlign: "center",
                    textDecoration: "none",
                    alignItems: "center",
                    borderRadius: e.borderRadius,
                    paddingLeft: M[e.size],
                    paddingRight: M[e.size],
                    paddingTop: M[e.size],
                    paddingBottom: M[e.size],
                    position: e.position,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    ":hover": {
                        boxShadow: B.z.DEFAULT,
                        "::before": {
                            opacity: 1
                        }
                    },
                    ":active": {
                        borderColor: "transparent",
                        backgroundColor: e.color.dark,
                        boxShadow: B.z.NONE
                    },
                    "::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        zIndex: 1,
                        borderRadius: e.isTargetExpanded ? void 0 : e.borderRadius
                    },
                    ":focus": {
                        outline: "none",
                        "::after": {
                            boxShadow: `${e.isTargetExpanded?"inset":""} 0 0 0 3px ${e.color.light}`
                        }
                    },
                    ":focus:not(:focus-visible)": {
                        "::after": {
                            boxShadow: "none"
                        }
                    },
                    ...e.isExpandedHoverable ? {
                        "::before": {
                            content: '""',
                            width: "4px",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            position: "absolute",
                            backgroundColor: e.color.primary,
                            opacity: 0,
                            transitionProperty: "opacity",
                            transitionDuration: "200ms"
                        }
                    } : {},
                    ...e.disabled ? {
                        borderColor: "transparent",
                        backgroundColor: e.color.light,
                        color: y.oC.PRIMARY_INVERTED,
                        pointerEvents: "none",
                        cursor: "not-allowed",
                        ":hover": {
                            boxShadow: B.z.NONE
                        },
                        ":active": {
                            borderColor: "transparent",
                            backgroundColor: e.color.light
                        },
                        "::after": {
                            boxShadow: "none"
                        }
                    } : {}
                }),
                D = e => ({ ...T(e),
                    backgroundColor: y.Bd.SCREEN_DEFAULT,
                    borderColor: y.wn.DEFAULT,
                    color: e.color.primary,
                    ":hover": {
                        backgroundColor: y.Bd.SCREEN_DEFAULT,
                        "::before": {
                            opacity: 1
                        }
                    },
                    ":active": {
                        color: e.color.dark
                    },
                    ...e.disabled ? {
                        color: e.color.light,
                        pointerEvents: "none",
                        cursor: "not-allowed",
                        ":hover": {
                            backgroundColor: y.Bd.SCREEN_DEFAULT
                        },
                        ":active": {
                            color: e.color.light,
                            backgroundColor: y.Bd.SCREEN_DEFAULT
                        }
                    } : {}
                }),
                O = e => ({ ...D(e),
                    borderColor: "transparent",
                    backgroundColor: "transparent",
                    ":hover": {
                        backgroundColor: y.Bd.SCREEN_DEFAULT,
                        "::before": {
                            opacity: 1
                        }
                    },
                    ":active": {
                        borderColor: "transparent",
                        color: e.color.dark
                    },
                    ...e.disabled ? {
                        cursor: "not-allowed",
                        pointerEvents: "none",
                        ":hover": {
                            color: e.color.light,
                            backgroundColor: "transparent"
                        },
                        ":active": {
                            color: e.color.light,
                            backgroundColor: "transparent"
                        }
                    } : {}
                }),
                w = e => ({ ...O(e),
                    textDecoration: "underline",
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    whiteSpace: "normal",
                    ":visited": {
                        color: e.color.primary
                    },
                    ":hover": {
                        "::before": {
                            opacity: 1
                        }
                    },
                    ":active": {
                        color: e.color.dark
                    },
                    ...e.isWithNewTabIcon && e.isInline ? {
                        "> span > span:first-child": {
                            paddingRight: x.t2G[e.iconSize]
                        },
                        "> span > span:last-child": {
                            marginLeft: `-${x.t2G[e.iconSize]}`
                        }
                    } : {},
                    ...e.disabled ? {
                        cursor: "not-allowed",
                        pointerEvents: "none",
                        color: e.color.light,
                        ":hover": {
                            color: e.color.light
                        },
                        ":active": {
                            color: e.color.light
                        }
                    } : {}
                }),
                N = A.Z.create({
                    primary: T,
                    secondary: D,
                    secondaryBorderless: e => ({ ...D(e),
                        backgroundClip: "padding-box",
                        backgroundColor: `rgba(255, 255, 255, ${e.disabled?.4:.7})`,
                        borderColor: `rgba(255, 255, 255, ${e.disabled?.4:.7})`,
                        color: e.disabled ? e.color.primary : e.color.dark
                    }),
                    tertiary: O,
                    link: w,
                    blank: e => ({ ...w(e),
                        background: "none",
                        fontWeight: "inherit",
                        border: "none",
                        lineHeight: "inherit",
                        textDecoration: "inherit",
                        letterSpacing: "inherit",
                        fontSize: "inherit",
                        color: "inherit",
                        textAlign: "inherit",
                        display: e.display,
                        ":visited": {
                            color: "unset"
                        },
                        ":active": {
                            color: "unset"
                        },
                        ...e.disabled ? {
                            cursor: "not-allowed",
                            pointerEvents: "none"
                        } : {}
                    }),
                    icon: e => ({
                        width: e.isBlank ? S.BASE : S[e.size],
                        height: e.isBlank ? S.BASE : S[e.size],
                        ..."right" === e.iconPosition ? {
                            marginLeft: k.t.TIGHTEST
                        } : {
                            marginRight: M[e.size]
                        },
                        overflow: "visible",
                        position: "relative",
                        "> *": {
                            position: "absolute",
                            top: "50%",
                            left: 0,
                            transform: "translateY(-50%)"
                        }
                    }),
                    iconWrapper: e => e.isInline ? {
                        display: "inline",
                        "> span:nth-child(2)": {
                            verticalAlign: "top"
                        }
                    } : {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    newTabIconWrapper: {
                        flexShrink: 0
                    }
                });
            var H = r(61250);
            const I = {
                    PRIMARY: N.primary,
                    SECONDARY: N.secondary,
                    SECONDARY_BORDERLESS: N.secondaryBorderless,
                    TERTIARY: N.tertiary,
                    LINK: N.link,
                    BLANK: N.blank
                },
                P = {
                    TEAL: {
                        primary: y.Bd.CONTAINER_PRIMARY_TEAL,
                        light: y.Bd.TEAL_ALPHA,
                        dark: y.Bd.TEAL_DARK
                    },
                    PETROL: {
                        primary: y.Bd.CONTAINER_PRIMARY_PETROL,
                        light: y.Bd.PETROL_ALPHA,
                        dark: y.Bd.PETROL_DARK
                    },
                    WHEAT: {
                        primary: y.Bd.CONTAINER_PRIMARY_WHEAT,
                        light: y.Bd.WHEAT_ALPHA,
                        dark: y.Bd.WHEAT_DARK
                    },
                    RHUBARB: {
                        primary: y.Bd.CONTAINER_PRIMARY_RHUBARB,
                        light: y.Bd.RHUBARB_ALPHA,
                        dark: y.Bd.RHUBARB_DARK
                    },
                    NEUTRAL: {
                        primary: y.Y6.NEUTRAL,
                        light: y.Bd.TEAL_ALPHA,
                        dark: y.Bd.TEAL_DARK
                    }
                },
                Z = (e, t, r) => {
                    if ((0, R.Z)(e)) return "string" == typeof e && e.startsWith("#") ? e : r && t && e ? (0, E.ZP)({
                        search: t,
                        href: e
                    }) : e
                },
                V = e => {
                    const t = (0, n.useContext)(h.Z),
                        r = (0, n.useContext)(u.Z),
                        a = (0, n.useContext)(p.Z),
                        o = (0, s.TH)(),
                        v = (0, j.Z)(),
                        {
                            css: y
                        } = (0, i.Z)(),
                        [R, E] = (0, n.useState)(!1);
                    (0, n.useEffect)((() => E(!0)), []);
                    const A = e.icon || e.isLoading,
                        k = e.isDisabled || e.isLoading,
                        B = (0, d.t)(e.href),
                        L = e.to && !(0, d.t)(e.to),
                        M = e.isOpenedInBrowser ? ? e.href ? .includes(".pdf"),
                        S = e.isOpenedInNewTab ? ? B,
                        T = S && !e["aria-label"] && !e.title,
                        D = (A || e.isTargetExpanded) && e.isLabelHidden,
                        O = B && (!e.isQueryPreserved || !a),
                        w = R && !(e.href || "").trim().startsWith("mailto:") && !O && (e.isQueryPreserved || a),
                        V = "BLANK" === e.type,
                        z = V ? e.iconSize : {
                            TINY: 0,
                            SMALL: 1,
                            BASE: 2
                        }[e.size],
                        F = e.isBlock ? "block" : e.isInline ? "inline" : "inline-block",
                        W = e.isTargetExpanded ? "static" : "relative",
                        Y = e.isBlock ? "100%" : "auto",
                        U = e.rel || S ? "noopener noreferrer" : void 0,
                        G = S ? "_blank" : void 0,
                        K = L ? l.rU : e.href || e.to ? "a" : "button",
                        $ = e.tabIndex ? ? (k && (L || "a" === K)) ? -1 : void 0,
                        q = !("button" !== K || !k) || void 0,
                        J = "button" !== K ? void 0 : e.isSubmit ? "submit" : "button",
                        Q = !("a" !== K || !k) || void 0,
                        X = L ? void 0 : Z(e.href, o.search, w),
                        ee = L ? ((e, t, r, n) => {
                            let i = e;
                            if (e && r && t) {
                                const [e] = i.split("?");
                                i = Z(e, t, r)
                            }
                            return n ? "object" == typeof i && null !== i ? ("/" === i.pathname[0] && (i.pathname = "/webviews" + i.pathname), i) : "string" == typeof i ? "/" === i[0] ? "/webviews" + i : i : void 0 : i
                        })(e.to, o.search, w, t) : void 0,
                        te = [e.isDisabledPropAllowed && "disabled", "button" === K && k && "aria-disabled", L && "to", K === l.rU && "replace"].filter(Boolean);
                    return (0, H.jsx)(C.Z, {
                        width: Y,
                        color: P[e.color],
                        borderRadius: D ? b.T[10] : b.T[3],
                        download: e.download,
                        display: F,
                        disabled: k,
                        lang: e.lang,
                        hrefLang: e.hrefLang,
                        onClick: n => {
                            if (!k && ("function" == typeof e.onClick && e.onClick(n), t && X && X && !X.startsWith("number26://"))) return n.preventDefault(), M ? (0, c.x)("openInBrowser", {
                                url: X
                            }) : r(X)
                        },
                        href: X,
                        to: ee,
                        target: G,
                        type: J,
                        title: e.title,
                        rel: U,
                        tabIndex: $,
                        position: W,
                        isTargetExpanded: e.isTargetExpanded,
                        isExpandedHoverable: e.isExpandedHoverable,
                        "aria-haspopup": e["aria-haspopup"],
                        "aria-hidden": Q,
                        "aria-disabled": q,
                        "aria-label": e["aria-label"],
                        "aria-expanded": e["aria-expanded"],
                        "aria-controls": e["aria-controls"],
                        "data-cta-label": e["data-cta-label"],
                        "data-cta": e["data-cta"],
                        "data-cta-property": e["data-cta-property"],
                        "aria-pressed": e["aria-pressed"],
                        "aria-selected": e["aria-selected"],
                        replace: e.isReplacingHistory,
                        role: e.role,
                        form: e.form,
                        as: K,
                        id: e.id,
                        innerRef: e.innerRef,
                        iconSize: z,
                        isWithNewTabIcon: T,
                        isInline: e.isInline,
                        passThrough: ["download", "tabIndex", "form", "target", "title", "href", "rel", "type", "aria-haspopup", "aria-hidden", "aria-expanded", "aria-controls", "aria-label", "aria-selected", "onClick", "data-testid", "data-cta-label", "data-cta", "data-cta-property", "aria-pressed", "id", "role", "lang", "hrefLang", "onKeyDown", "innerRef", "onMouseEnter", "onMouseLeave", "onMouseDown", ...te],
                        extend: I[e.type],
                        size: e.size,
                        onKeyDown: e.onKeyDown,
                        onMouseEnter: e.onMouseEnter,
                        onMouseDown: e.onMouseDown,
                        onMouseLeave: e.onMouseLeave,
                        children: (0, H.jsx)(C.Z, {
                            extend: N.iconWrapper,
                            as: "span",
                            isInline: e.isInline,
                            children: D && A ? e.isLoading ? (0, H.jsx)(m.Z, {
                                color: e.color,
                                size: 0
                            }) : (0, H.jsx)(f.Z, {
                                token: e.icon,
                                size: z,
                                label: e.label,
                                role: "img"
                            }) : (0, H.jsxs)(H.Fragment, {
                                children: [(e.icon || e.isLoading) && "left" === e.iconPosition && (0, H.jsx)(C.Z, {
                                    extend: N.icon,
                                    isBlank: V,
                                    size: e.size,
                                    iconPosition: e.iconPosition,
                                    children: e.isLoading ? (0, H.jsx)(m.Z, {
                                        color: e.color,
                                        size: 1
                                    }) : (0, H.jsx)(f.Z, {
                                        token: e.icon,
                                        size: z
                                    })
                                }), D ? (0, H.jsx)(_.Z, {
                                    children: e.label
                                }) : "BLANK" === e.type ? e.screenReaderLabel ? (0, H.jsxs)(H.Fragment, {
                                    children: [(0, H.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: e.label
                                    }), e.screenReaderLabel && (0, H.jsx)(_.Z, {
                                        children: e.screenReaderLabel
                                    })]
                                }) : e.label : (0, H.jsxs)(H.Fragment, {
                                    children: [(0, H.jsx)(g.Z, {
                                        size: {
                                            TINY: 2,
                                            SMALL: 3,
                                            BASE: 5
                                        }[e.size],
                                        isBold: e.isLabelBold,
                                        isBlock: !e.isInline,
                                        lineHeight: {
                                            TINY: 1,
                                            SMALL: 2,
                                            BASE: 3
                                        }[e.size],
                                        as: "span",
                                        "aria-hidden": Boolean(e.screenReaderLabel),
                                        children: e.label
                                    }), e.screenReaderLabel && (0, H.jsx)(_.Z, {
                                        children: e.screenReaderLabel
                                    })]
                                }), T && (0, H.jsx)("span", {
                                    className: y(N.newTabIconWrapper),
                                    children: (0, H.jsx)(f.Z, {
                                        token: x.j0B,
                                        size: z,
                                        label: ` ${v("ui.new_tab_link")}`
                                    })
                                }), (e.icon || e.isLoading) && "right" === e.iconPosition && (0, H.jsx)(C.Z, {
                                    extend: N.icon,
                                    isBlank: V,
                                    size: e.size,
                                    iconPosition: e.iconPosition,
                                    children: e.isLoading ? (0, H.jsx)(m.Z, {
                                        color: e.color,
                                        size: 1
                                    }) : (0, H.jsx)(f.Z, {
                                        token: e.icon,
                                        size: z
                                    })
                                })]
                            })
                        })
                    })
                };
            (0, v.ZP)(V, {
                color: { ...v.WG,
                    default: "TEAL"
                },
                href: v.HI,
                hrefLang: { ...v.N0,
                    description: "Helps search engines to show the most appropriate page version to users."
                },
                lang: { ...v.N0,
                    description: "Defines the language of an element.",
                    example: '<p lang="fr">RIB - Relev\xe9 d\u2019Identit\xe9 Bancaire</p>'
                },
                icon: v.py,
                iconPosition: { ...v.N0,
                    default: "left",
                    description: "Shows the icon either left of right"
                },
                isBlock: v.t6,
                isDisabled: { ...v.U5,
                    description: "Controls whether or not the action will be interactable by the user."
                },
                isDisabledPropAllowed: { ...v.U5,
                    description: "Controls whether or not the disabled prop will pass down to the element."
                },
                isExpandedHoverable: { ...v.U5,
                    description: "Controls the hover style of the expanded target."
                },
                isLabelHidden: { ...v.U5,
                    description: "Controls the visibility of the button text. Used for icon-only buttons."
                },
                isLabelBold: { ...v.U5,
                    description: "Controls the font weight of the button text.",
                    default: !0
                },
                isLoading: { ...v.U5,
                    description: "A loading button will show a spinner and will not be interactable."
                },
                isOpenedInBrowser: { ...v.U5,
                    description: "Force the link to be opened in the browser and not a webview."
                },
                isOpenedInNewTab: { ...v.U5,
                    description: "Force the link to be opened in a new tab or window."
                },
                isReplacingHistory: { ...v.U5,
                    description: "Replace the current history entry instead of pushing a new one."
                },
                isQueryPreserved: { ...v.U5,
                    description: "The link will preserve any query parameters that are already set in the URL."
                },
                isSubmit: { ...v.U5,
                    description: "Controls whether or not the action will act as a submit button."
                },
                isTargetExpanded: { ...v.U5,
                    description: "Controls the click target of the action. If true, the click target of the button will fill the container."
                },
                label: { ...v.Gp,
                    isRequired: !0,
                    description: "The text that displays in the button. Is accessible by screen readers if hidden."
                },
                screenReaderLabel: v.hy,
                onClick: v.HA,
                to: v.Vv,
                type: {
                    validator: o().oneOf(Object.keys(I)),
                    type: "ACTION_TYPE",
                    description: "The style variation to render.",
                    default: "PRIMARY",
                    example: '"PRIMARY" | "SECONDARY" | "TERTIARY" | "LINK" | "BLANK"'
                },
                "aria-label": v.YU,
                "aria-pressed": v.wk,
                "aria-expanded": v.f2,
                "aria-controls": v.Bn,
                "data-testid": v.eo,
                form: { ...v.N0,
                    description: "The ID of a form to be submitted when this submit imput is clicked."
                },
                id: v.K5,
                rel: v.el,
                tabIndex: { ...v.jg,
                    description: "Represents the tab order of the current element. Setting the tabIndex property will also set the tabindex attribute."
                },
                size: {
                    validator: o().oneOf(["BASE", "SMALL", "TINY"]),
                    type: "ACTION_SIZE",
                    description: "Controls the button size.",
                    default: "BASE",
                    example: '"BASE" | "SMALL"'
                },
                iconSize: { ...v.lY,
                    default: 2,
                    description: "An optional icon size, works only when using the BLANK type."
                },
                isInline: { ...v.U5,
                    default: !1,
                    description: "Used to render a link that must be displayed inline with other text"
                }
            });
            const z = V
        },
        2700: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => o
            });
            var n = r(55851),
                i = r(39760);
            const a = (0, n.Z)({}, "div");
            (0, i.ZP)(a, {
                extend: i.YM,
                passThrough: { ...i.aJ,
                    description: "An array of props which will pass through to the element."
                },
                as: i.Oq,
                id: i.K5
            });
            const o = a
        },
        44800: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => f
            });
            var n = r(46973),
                i = r(84534),
                a = r(39760),
                o = r(52809),
                s = r(77523),
                l = r(2700),
                d = r(53623),
                c = r(86929),
                u = r(9502);
            const h = { ...c.jy
                },
                p = d.Z.create({
                    base: e => ({
                        display: "inline-block",
                        verticalAlign: "-2px",
                        overflow: "hidden",
                        pointerEvents: "none",
                        color: e.color,
                        ...(0, u.Z)({
                            width: e.width,
                            height: e.height
                        })
                    }),
                    svg: {
                        fill: "currentcolor",
                        verticalAlign: "top"
                    },
                    label: h
                });
            var v = r(61250);
            const C = e => {
                const {
                    css: t
                } = (0, n.Z)();
                if (!e.token) return null;
                const r = (0, i.q)(e.size).map((e => o.t2G[e])),
                    a = (0, i.q)(e.size).map((e => o.t2G[e])),
                    d = s.oC[e.color] || "inherit";
                return (0, v.jsxs)(l.Z, {
                    title: e.label,
                    role: e.role,
                    "aria-live": e["aria-live"],
                    width: r,
                    height: a,
                    extend: p.base,
                    color: d,
                    passThrough: ["title", "aria-live", "role", "data-testid"],
                    as: "span",
                    children: [e.token({
                        "aria-hidden": !0,
                        focusable: !1,
                        className: t(p.svg)
                    }), e.label && (0, v.jsx)(l.Z, {
                        extend: p.label,
                        as: "span",
                        children: e.label
                    })]
                })
            };
            (0, a.ZP)(C, {
                token: a.py,
                size: { ...a.lY,
                    default: 0
                },
                color: a.Op,
                label: { ...a.N0,
                    description: "The label which describes this icon to screen readers."
                },
                as: a.Oq,
                role: a.HV,
                "aria-live": a.$j,
                "data-testid": a.eo
            });
            const f = C
        },
        4880: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => g
            });
            var n = r(84534),
                i = r(39760),
                a = r(2700),
                o = r(52809),
                s = r(73601),
                l = r(53623),
                d = r(86929),
                c = r(9502);
            const u = "var(--spacing-6-xs)",
                h = {
                    to: {
                        transform: "rotate(1turn)"
                    }
                },
                p = { ...d.jy
                },
                v = l.Z.create({
                    base: e => ({
                        display: "inline-block",
                        position: "relative",
                        verticalAlign: "-2px",
                        ...(0, c.Z)(e.responsiveProps),
                        ":before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            border: `${u} solid currentColor`,
                            opacity: .4
                        },
                        "::after": {
                            content: '""',
                            animationName: h,
                            animationDuration: "1000ms",
                            animationIterationCount: "infinite",
                            animationTimingFunction: "linear",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            border: `${u} solid transparent`,
                            borderTop: `${u} solid currentColor`
                        }
                    }),
                    label: p
                });
            var C = r(61250);
            const f = e => {
                const t = (0, n.q)(e.size).map((e => o.t2G[e])),
                    r = (0, s.Z)();
                return (0, C.jsx)(a.Z, {
                    responsiveProps: {
                        height: t,
                        width: t
                    },
                    extend: v.base,
                    role: "alert",
                    "aria-live": "assertive",
                    passThrough: ["data-testid", "role", "aria-live"],
                    as: e.as,
                    children: (0, C.jsx)(a.Z, {
                        extend: v.label,
                        children: e.label || r("ui.loading")
                    })
                })
            };
            (0, i.ZP)(f, {
                label: { ...i.N0,
                    description: "The label which describes this loader to screen readers."
                },
                size: { ...i.lY,
                    default: 0
                },
                as: { ...i.Oq,
                    default: "span"
                },
                "data-testid": i.eo
            });
            const g = f
        },
        40322: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => h
            });
            var n = r(84534),
                i = r(39760),
                a = r(89341),
                o = r(2700),
                s = r(53623),
                l = r(9502);
            const d = s.Z.create({
                base: e => ({ ...(0, l.Z)({
                        marginTop: e.marginTop,
                        marginBottom: e.marginBottom,
                        marginLeft: e.marginLeft,
                        marginRight: e.marginRight
                    }),
                    display: e.display
                })
            });
            var c = r(61250);
            const u = e => {
                const t = (0, n.q)(e.top).map((e => a.t[e])),
                    r = (0, n.q)(e.bottom).map((e => a.t[e])),
                    i = (0, n.q)(e.right).map((e => a.t[e])),
                    s = (0, n.q)(e.left).map((e => a.t[e])),
                    l = e.isBlock && "block";
                return (0, c.jsx)(o.Z, {
                    marginTop: t,
                    marginRight: i,
                    marginBottom: r,
                    marginLeft: s,
                    display: l,
                    extend: d.base,
                    as: e.as,
                    passThrough: ["data-testid"],
                    children: e.children
                })
            };
            (0, i.ZP)(u, {
                top: { ...i.jR,
                    isResponsive: !0
                },
                right: { ...i.jR,
                    isResponsive: !0
                },
                bottom: { ...i.jR,
                    isResponsive: !0
                },
                left: { ...i.jR,
                    isResponsive: !0
                },
                as: { ...i.Oq,
                    default: "div"
                },
                isBlock: { ...i.t6
                },
                children: i.Gp,
                "data-testid": i.eo
            });
            const h = u
        },
        19309: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => y
            });
            var n = r(29901),
                i = r(84534),
                a = r(82935),
                o = r.n(a),
                s = r(39760),
                l = r(48337),
                d = r(89341),
                c = r(77523),
                u = r(2700);
            const h = ["address", "article", "aside", "blockquote", "dd", "details", "dialog", "div", "dl", "dt", "fieldset", "figcaption", "figure", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "ol", "p", "pre", "section", "table", "ul"],
                p = e => !e || h.includes(e);
            var v = r(53623),
                C = r(24927),
                f = r(9502);
            const g = v.Z.create({
                base: e => ({
                    display: e.display,
                    textTransform: e.textTransform,
                    ...e.textOverflow,
                    ...(0, f.Z)({
                        fontSize: e.fontSize,
                        lineHeight: e.lineHeight,
                        letterSpacing: e.letterSpacing,
                        color: e.color,
                        maxWidth: e.maxWidth,
                        fontStyle: e.fontStyle,
                        textAlign: e.textAlign,
                        fontWeight: e.fontWeight,
                        marginTop: e.marginTop,
                        marginBottom: e.marginBottom,
                        textDecoration: e.textDecoration,
                        "::before": e.textBefore,
                        "::after": e.textAfter
                    })
                }),
                placeloaderBase: e => ({
                    display: "block",
                    backgroundColor: c.Bd.SHIMMER_LOADER_BACKGROUND,
                    backgroundImage: e.backgroundImage,
                    borderRadius: C.T[4],
                    ...(0, f.Z)(e.responsiveProps)
                })
            });
            var m = r(61250);
            const x = e => {
                const t = (0, i.q)(e.top).map((e => d.t[e])),
                    r = (0, i.q)(e.bottom).map((e => d.t[e])),
                    a = (0, i.q)(e.size).map((e => l.u[e])),
                    o = (0, i.q)(e.lineHeight).map((e => l.bm[e])),
                    s = (0, i.q)(e.color).map((e => c.oC[e])),
                    h = (0, i.q)(e.letterSpacing).map((e => l.X$[e])),
                    v = (0, i.q)(e.width).map((e => l.HR[e])),
                    C = e.isExtended ? [600] : (0, i.q)(e.isBold).map((e => e ? 500 : 400)),
                    f = (0, i.q)(e.isCentered).map((e => e ? "center" : "left")),
                    x = (0, i.q)(e.isItalic).map((e => e ? "italic" : void 0)),
                    y = e.isBlock ? "block" : void 0,
                    b = e.isUppercase ? "uppercase" : void 0,
                    R = e.isTruncated ? {
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis"
                    } : {},
                    E = p(e.as) || e.isBlock,
                    j = E ? o.map(((e, t) => {
                        const r = a[t] || a[a.length - 1];
                        return {
                            marginTop: `calc(\n            ((${r} * (${e} / 2)) - (${r} / 2) * 0.75) * -1\n          )`,
                            height: 0,
                            content: '""',
                            display: "block"
                        }
                    })) : [],
                    _ = E ? o.map(((e, t) => {
                        const r = a[t] || a[a.length - 1];
                        return {
                            marginBottom: `calc(\n            ((${r} * (${e} / 2)) - (${r} / 2) * 0.8) * -1\n          )`,
                            height: 0,
                            content: '""',
                            display: "block"
                        }
                    })) : [],
                    A = (0, n.useMemo)((() => {
                        const t = [];
                        return e.isLineThrough && t.push("line-through"), e.isUnderlined && t.push("underline"), [t.join(" ")].filter(Boolean)
                    }), [e.isLineThrough, e.isUnderlined]);
                return (0, m.jsx)(u.Z, {
                    id: e.id,
                    marginTop: t,
                    marginBottom: r,
                    fontSize: a,
                    lineHeight: o,
                    letterSpacing: h,
                    color: s,
                    maxWidth: v,
                    display: y,
                    fontStyle: x,
                    textAlign: f,
                    fontWeight: C,
                    textTransform: b,
                    textBefore: j,
                    textAfter: _,
                    textOverflow: R,
                    textDecoration: A,
                    extend: g.base,
                    role: e.role,
                    htmlFor: e.htmlFor,
                    as: e.as,
                    "aria-hidden": e["aria-hidden"],
                    passThrough: ["id", "data-testid", "role", "aria-hidden", "htmlFor"],
                    children: e.children
                })
            };
            (0, s.ZP)(x, {
                color: s.Op,
                top: { ...s.jR,
                    default: "NONE",
                    isResponsive: !0
                },
                bottom: { ...s.jR,
                    default: "NONE",
                    isResponsive: !0
                },
                size: { ...s.$6,
                    isResponsive: !0,
                    default: 5
                },
                lineHeight: { ...s.Tt,
                    isResponsive: !0,
                    default: 3
                },
                letterSpacing: { ...s.sL,
                    isResponsive: !0
                },
                width: { ...s.Oh,
                    isResponsive: !0
                },
                isCentered: { ...s.U5,
                    description: "Horizontally centers the text.",
                    isResponsive: !0,
                    default: !1
                },
                isBold: { ...s.U5,
                    description: "Changes the font weight to bold.",
                    isResponsive: !0,
                    default: !1
                },
                isItalic: { ...s.U5,
                    description: "Enables italic font styling on the text.",
                    isResponsive: !0,
                    default: !1
                },
                isUppercase: { ...s.U5,
                    description: "Transforms the text to all uppercase.",
                    default: !1
                },
                isExtended: { ...s.U5,
                    description: "Enables the GT America Extended font.",
                    default: !1
                },
                isLineThrough: { ...s.U5,
                    description: "Add the line through decoration on the text.",
                    isResponsive: !0,
                    default: !1
                },
                isUnderlined: { ...s.U5,
                    description: "Adds underline decoration on the text.",
                    isResponsive: !0,
                    default: !1
                },
                isBlock: { ...s.t6,
                    default: !1
                },
                isTruncated: s.EP,
                as: { ...s.Oq,
                    default: "span"
                },
                id: s.K5,
                role: s.HV,
                for: s.kZ,
                children: s.Gp,
                "data-testid": s.eo,
                "aria-hidden": s.pY
            }), x.Placeloader = e => {
                const t = (0, i.q)(e.size).map((e => l.u[e])),
                    r = e.width ? (0, i.q)(e.width).map((e => l.HR[e])) : ["100%"],
                    n = (0, i.q)(e.top).map((e => d.t[e])),
                    a = (0, i.q)(e.bottom).map((e => d.t[e]));
                return (0, m.jsx)(u.Z, {
                    responsiveProps: {
                        height: t,
                        width: r,
                        marginTop: n,
                        marginBottom: a
                    },
                    backgroundImage: e.isShimmering ? `url(${o()})` : void 0,
                    extend: g.placeloaderBase
                })
            }, (0, s.ZP)(x.Placeloader, {
                size: { ...s.$6,
                    default: 3,
                    isResponsive: !0
                },
                width: { ...s.Oh,
                    default: 5,
                    isResponsive: !0
                },
                top: { ...s.jR,
                    default: "NONE",
                    isResponsive: !0
                },
                bottom: { ...s.jR,
                    default: "NONE",
                    isResponsive: !0
                },
                isShimmering: { ...s.U5,
                    description: "Toggles a shimmer on the placeholder element.",
                    default: !0
                }
            }), x.Placeloader.displayName = "Text.Placeloader";
            const y = x
        },
        95502: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => u
            });
            var n = r(7862),
                i = r.n(n),
                a = r(39760),
                o = r(19309),
                s = r(61250);
            const l = ["h1", "h2", "h3", "h4", "h5"],
                d = e => {
                    switch (e) {
                        case 1:
                        default:
                            return 12;
                        case 2:
                            return 10;
                        case 3:
                            return 8;
                        case 4:
                            return 7;
                        case 5:
                            return 1
                    }
                },
                c = e => {
                    const {
                        level: t,
                        top: r,
                        bottom: n,
                        as: i,
                        ...a
                    } = e, c = i || l[t - 1] || "h1", u = 4 === t ? 3 : 2;
                    return (0, s.jsx)(o.Z, {
                        as: c,
                        size: d(e.level),
                        lineHeight: u,
                        isBold: !0,
                        letterSpacing: 5 === t ? 4 : 0,
                        isUppercase: 5 === t,
                        color: 5 === t ? "SECONDARY_DEFAULT" : void 0,
                        top: r,
                        bottom: n,
                        ...a
                    })
                };
            (0, a.ZP)(c, {
                level: {
                    validator: i().oneOf([1, 2, 3, 4, 5]),
                    type: "Number",
                    description: "The heading level for the title (h1, h2) indexed by number.",
                    isRequired: !0,
                    default: 1
                },
                top: a.jR,
                bottom: a.jR,
                children: a.Gp,
                as: a.Oq
            });
            const u = c
        },
        39760: (e, t, r) => {
            "use strict";
            r.d(t, {
                Bn: () => f,
                g$: () => g,
                f2: () => C,
                pY: () => m,
                YU: () => p,
                $j: () => h,
                wk: () => v,
                aJ: () => M,
                Oq: () => x,
                U5: () => b,
                Gp: () => E,
                eo: () => j,
                me: () => N,
                j8: () => H,
                AB: () => z,
                kY: () => F,
                HA: () => Z,
                K9: () => V,
                YM: () => I,
                HI: () => _,
                kZ: () => T,
                K5: () => A,
                t6: () => D,
                EP: () => O,
                sM: () => B,
                jg: () => y,
                el: () => k,
                HV: () => S,
                hy: () => P,
                N0: () => R,
                Vv: () => L,
                WG: () => W,
                gh: () => Y,
                Ck: () => X,
                py: () => re,
                lY: () => J,
                Jv: () => Q,
                SI: () => ee,
                jR: () => te,
                Op: () => q,
                sL: () => G,
                Tt: () => $,
                $6: () => U,
                Oh: () => K,
                IH: () => w,
                ZP: () => ae
            });
            var n = r(7862),
                i = r.n(n);
            var a = r(77523),
                o = r(24927),
                s = r(22727),
                l = r(89341),
                d = r(52809),
                c = r(39839),
                u = r(48337);
            const h = {
                    validator: i().oneOf(["off", "polite", "assertive"]),
                    type: "String",
                    description: "Indicates to screen readers that this region will receive updates."
                },
                p = {
                    validator: i().string,
                    type: "String",
                    description: "Labels the element for screen readers. Should be used if there is no visible text label."
                },
                v = {
                    validator: i().bool,
                    type: "Boolean",
                    description: "Tells screen readers that the button has been pressed and is temporarily activated."
                },
                C = {
                    validator: i().string,
                    type: "String",
                    description: "Expresses which state an expandable/collapsable region is in.",
                    example: '"true" | "false"'
                },
                f = {
                    validator: i().string,
                    type: "String",
                    description: "Refers to the ID of an element that this is related to or controlled."
                },
                g = {
                    validator: i().string,
                    type: "String",
                    description: "Refers to the ID of an element that describes this element."
                },
                m = {
                    validator: i().bool,
                    type: "Boolean",
                    description: "Is responsible for hiding element from screen readers."
                },
                x = {
                    validator: i().oneOfType([i().string, i().object]),
                    type: "String | React.Node",
                    description: "Defines which HTML element type we will be rendered.",
                    example: "div"
                },
                y = {
                    validator: i().number,
                    type: "Number"
                },
                b = {
                    validator: i().bool,
                    type: "Boolean"
                },
                R = {
                    validator: i().string,
                    type: "String"
                },
                E = {
                    validator: i().node,
                    type: "React.Node",
                    description: "One or more JSX child elements.",
                    example: "<div>Example!</div>"
                },
                j = (i().func, i().element, {
                    validator: i().string,
                    type: "String",
                    description: "An identifier for this element used in testing."
                }),
                _ = {
                    validator: i().string,
                    type: "String",
                    description: "External hyperlink to be opened in a new tab.",
                    example: "https://example.com"
                },
                A = {
                    validator: i().string,
                    type: "String",
                    description: "Passes down the value to the ID property of the element."
                },
                k = {
                    validator: i().string,
                    type: "String",
                    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel",
                    description: "Defines the relationship between a linked resource and the document."
                },
                B = {
                    validator: i().string,
                    type: "String",
                    description: "Passes down the value to the name property of the element."
                },
                L = {
                    validator: i().oneOfType([i().string, i().shape({
                        pathname: i().string,
                        search: i().string,
                        hash: i().string,
                        state: i().object
                    })]),
                    type: "ReactRouter.To",
                    url: "https://reactrouter.com/web/api/Link/to-object",
                    description: "Used for internal links.",
                    example: '{ pathname: "/foo", search: "?bar=true" }'
                },
                M = {
                    validator: i().array,
                    type: "Array",
                    description: "An array of values."
                },
                S = {
                    validator: i().string,
                    type: "String",
                    description: "The semantic role of the element."
                },
                T = {
                    validator: i().string,
                    type: "String",
                    description: "The for attribute to be used with label tags."
                },
                D = {
                    validator: i().bool,
                    type: "Boolean",
                    description: "Determines whether the component will be displayed as a full-width block."
                },
                O = {
                    validator: i().bool,
                    type: "Boolean",
                    default: !1,
                    description: "Whether to apply ellipsis text overflow to the text. Requires the container to have a (maximum) width."
                },
                w = {
                    validator: (e, t, r) => {
                        const n = "auto" === e[t],
                            i = e[t].toString().endsWith("%");
                        if (!n && !i && !c.Q[e[t]]) return new Error(`\n        Invalid prop \`${t}\` supplied to \`${r}\`.\n        Validation failed. Must be a width token, percentage, or auto.\n      `)
                    },
                    type: "WIDTH_TOKEN | String",
                    description: "Applies a width of a given value or token to the element.",
                    example: '3 | "50%" | "auto"'
                },
                N = {
                    validator: i().shape({
                        title: i().string,
                        field: i().string,
                        message: i().string,
                        translationKey: i().string,
                        userMessage: i().shape({
                            title: i().string,
                            detail: i().string
                        })
                    }),
                    type: "N26.Error",
                    description: "An error object describing the problem with a key or a message.",
                    example: '{ title: "Localised string!", message: "Localised string!", translationKey: "unlocalised.key", userMessage: { title: "Title String", detail: "Detail String"} }'
                },
                H = {
                    validator: i().arrayOf(N.validator),
                    type: "N26.Error[]",
                    description: "A list of errors to be shown all at once.",
                    example: '[{ translationKey: "unlocalised.key" }]',
                    default: []
                },
                I = {
                    validator: i().oneOfType([i().object, i().func]),
                    type: "Fela.StyleObject",
                    url: "https://fela.js.org/docs/latest/basics/rules#style-object",
                    description: "Applies Fela styles to an element.",
                    example: '{ backgroundColor: "red" }'
                },
                P = { ...R,
                    description: "An optional label that screen readers should use. Useful for when there is a visual context that screen readers can\u2018t pick up on."
                },
                Z = {
                    validator: i().func,
                    type: "(event: React.SyntheticEvent) => {}",
                    url: "https://reactjs.org/docs/events.html",
                    description: "A function which will be called upon click.",
                    default: () => {}
                },
                V = {
                    validator: i().func,
                    type: "(event: React.SyntheticEvent) => {}",
                    url: "https://reactjs.org/docs/events.html",
                    description: "A function which will be called when an element receives focus.",
                    default: () => {}
                },
                z = {
                    validator: i().func,
                    type: "(event: React.SyntheticEvent) => {}",
                    url: "https://reactjs.org/docs/events.html",
                    description: "A function which will be called when an element loses focus.",
                    default: () => {}
                },
                F = {
                    validator: i().func,
                    type: "(event: React.SyntheticEvent) => {}",
                    url: "https://reactjs.org/docs/events.html",
                    description: "A function which will be called upon change.",
                    default: () => {}
                },
                W = (i().oneOf(Object.keys(c.Q).map(Number)), {
                    validator: i().oneOf(Object.keys(a.Y6)),
                    type: "COLOR_ACTION_TOKEN",
                    url: "/nxd/tokens/color",
                    description: "Applies a background color of a given type to the element."
                }),
                Y = {
                    validator: i().oneOf(Object.keys(a.Bd)),
                    type: "COLOR_BACKGROUND_TOKEN",
                    url: "/nxd/tokens/color",
                    description: "Applies a background color of a given type to the element."
                },
                U = {
                    validator: i().oneOf(Object.keys(u.u).map(Number)),
                    type: "TEXT_SIZE_TOKEN",
                    url: "/nxd/tokens/text",
                    description: "Applies a text size of a given type to the element."
                },
                G = {
                    validator: i().oneOf(Object.keys(u.X$).map(Number)),
                    type: "TEXT_LETTER_SPACING_TOKEN",
                    url: "/nxd/tokens/text",
                    description: "Applies a letter spacing of a given type to the element."
                },
                K = {
                    validator: i().oneOf(Object.keys(u.HR).map(Number)),
                    type: "TEXT_WIDTH_TOKEN",
                    url: "/nxd/tokens/text",
                    description: "Applies a width of a given type to the element."
                },
                $ = {
                    validator: i().oneOf(Object.keys(u.bm).map(Number)),
                    type: "TEXT_LINE_HEIGHT_TOKEN",
                    url: "/nxd/tokens/text",
                    description: "Applies a line height of a given type to the element."
                },
                q = {
                    validator: i().oneOf(Object.keys(a.oC)),
                    type: "COLOR_TEXT_TOKEN",
                    url: "/nxd/tokens/color",
                    description: "Applies a text color of a given type to the element."
                },
                J = {
                    validator: i().oneOf(Object.keys(d.t2G).map(Number)),
                    type: "ICON_SIZE_TOKEN",
                    url: "/nxd/tokens/icon",
                    description: "Applies a size of a given type to the icon."
                },
                Q = {
                    validator: i().oneOf(Object.keys(d.bKY).map(Number)),
                    type: "PROFILE_ICON_SIZE_TOKENS",
                    url: "/nxd/components/profile#size",
                    description: "Applies a size of a given type to the profile icon."
                },
                X = {
                    validator: i().oneOf(Object.keys(o.T).map(Number)),
                    type: "BORDER_RADIUS_TOKEN",
                    url: "/nxd/tokens/border",
                    description: "Applies a radius of a given type to the element."
                },
                ee = {
                    validator: i().oneOf(Object.keys(s.z)),
                    type: "SHADOW_TOKEN",
                    url: "/nxd/tokens/shadow",
                    description: "Applies a shadow of a given type to the element."
                },
                te = {
                    validator: i().oneOf(Object.keys(l.t)),
                    type: "SPACING_TOKEN",
                    url: "/nxd/tokens/spacing",
                    description: "Applies a spacing of a given type to the element."
                },
                re = {
                    validator: i().oneOf([...Object.values(d.Os8), ...Object.values(d.R3v), ...Object.values(d.MHR), ...Object.values(d.Y7M)]),
                    type: "ICON_TOKEN",
                    url: "/nxd/tokens/icon",
                    description: "A system or spot icon directly imported from the icon tokens.",
                    example: "ICON_SYSTEM_TOKENS.ICON_GEAR_SYSTEM"
                },
                ne = (i().oneOf(Object.values(d.R3v)), i().elementType, e => e.isRequired ? e.validator.isRequired : e.validator),
                ie = e => {
                    return e.isResponsive ? (t = ne(e), i().oneOfType([t, i().arrayOf(t)])) : ne(e);
                    var t
                },
                ae = (e, t) => {
                    e.propTypes = Object.keys(t).reduce(((e, r) => ({ ...e,
                        [r]: ie(t[r])
                    })), {}), e.defaultProps = Object.keys(t).reduce(((e, r) => ({ ...e,
                        [r]: t[r].default
                    })), {}), e.propDocs = { ...t
                    }
                }
        },
        24927: (e, t, r) => {
            "use strict";
            r.d(t, {
                T: () => n
            });
            const n = ["2px", "4px", "5px", "6px", "8px", "10px", "14px", "22px", "27px", "34px", "100%"]
        },
        87787: (e, t, r) => {
            "use strict";
            r.d(t, {
                T: () => n
            });
            const n = ["350px", "768px", "900px"]
        },
        82261: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                gray100: () => X,
                gray200: () => ee,
                gray300: () => te,
                gray400: () => re,
                gray50: () => Q,
                gray500: () => ne,
                gray600: () => ie,
                gray700: () => ae,
                gray800: () => oe,
                gray815: () => se,
                gray825: () => le,
                gray850: () => de,
                gray900: () => ce,
                gray950: () => ue,
                petrol100: () => B,
                petrol200: () => L,
                petrol300: () => M,
                petrol400: () => S,
                petrol50: () => k,
                petrol500: () => T,
                petrol600: () => D,
                petrol700: () => O,
                petrol800: () => w,
                petrol825: () => N,
                petrol850: () => H,
                petrol900: () => I,
                rhubarb100: () => Z,
                rhubarb200: () => V,
                rhubarb300: () => z,
                rhubarb400: () => F,
                rhubarb50: () => P,
                rhubarb500: () => W,
                rhubarb600: () => Y,
                rhubarb700: () => U,
                rhubarb800: () => G,
                rhubarb825: () => K,
                rhubarb850: () => $,
                rhubarb900: () => q,
                teal100: () => i,
                teal200: () => a,
                teal300: () => o,
                teal400: () => s,
                teal50: () => n,
                teal500: () => l,
                teal600: () => d,
                teal700: () => c,
                teal800: () => u,
                teal825: () => h,
                teal850: () => p,
                teal900: () => v,
                wheat100: () => f,
                wheat200: () => g,
                wheat300: () => m,
                wheat400: () => x,
                wheat50: () => C,
                wheat500: () => y,
                wheat600: () => b,
                wheat700: () => R,
                wheat800: () => E,
                wheat825: () => j,
                wheat850: () => _,
                wheat900: () => A,
                white00: () => J
            });
            const n = "rgb(244, 250, 247)",
                i = "rgb(232, 242, 238)",
                a = "rgb(204, 227, 218)",
                o = "rgb(130, 196, 178)",
                s = "rgb(92, 179, 160)",
                l = "rgb(54, 161, 139)",
                d = "rgb(31, 117, 96)",
                c = "rgb(20, 94, 74)",
                u = "rgb(8, 72, 52)",
                h = "rgb(44, 85, 76)",
                p = "rgb(34, 64, 58)",
                v = "rgb(4, 57, 45)",
                C = "rgb(250, 248, 245)",
                f = "rgb(242, 236, 225)",
                g = "rgb(235, 221, 204)",
                m = "rgb(225, 197, 161)",
                x = "rgb(214, 177, 125)",
                y = "rgb(200, 157, 88)",
                b = "rgb(166, 121, 49)",
                R = "rgb(128, 91, 32)",
                E = "rgb(89, 59, 11)",
                j = "rgb(97, 78, 49)",
                _ = "rgb(74, 61, 41)",
                A = "rgb(64, 42, 4)",
                k = "rgb(245, 248, 250)",
                B = "rgb(233, 238, 242)",
                L = "rgb(204, 220, 226)",
                M = "rgb(121, 161, 173)",
                S = "rgb(79, 131, 146)",
                T = "rgb(43, 105, 122)",
                D = "rgb(32, 91, 107)",
                O = "rgb(24, 81, 97)",
                w = "rgb(9, 61, 77)",
                N = "rgb(34, 60, 68)",
                H = "rgb(24, 43, 49)",
                I = "rgb(0, 42, 53)",
                P = "rgb(250, 245, 245)",
                Z = "rgb(242, 232, 232)",
                V = "rgb(235, 214, 214)",
                z = "rgb(222, 172, 171)",
                F = "rgb(203, 124, 122)",
                W = "rgb(179, 93, 91)",
                Y = "rgb(142, 70, 68)",
                U = "rgb(111, 35, 33)",
                G = "rgb(94, 12, 9)",
                K = "rgb(96, 63, 62)",
                $ = "rgb(73, 50, 49)",
                q = "rgb(55, 2, 1)",
                J = "rgb(255, 255, 255)",
                Q = "rgb(249, 249, 249)",
                X = "rgb(242, 242, 242)",
                ee = "rgb(233, 233, 233)",
                te = "rgb(217, 217, 217)",
                re = "rgb(171, 171, 171)",
                ne = "rgb(150, 150, 150)",
                ie = "rgb(105, 105, 105)",
                ae = "rgb(90, 90, 90)",
                oe = "rgb(59, 59, 59)",
                se = "rgb(45, 45, 45)",
                le = "rgb(35, 35, 35)",
                de = "rgb(30, 30, 30)",
                ce = "rgb(27, 27, 27)",
                ue = "rgb(18, 18, 18)"
        },
        77523: (e, t, r) => {
            "use strict";
            r.d(t, {
                $J: () => a,
                Bd: () => s,
                HO: () => n,
                Y6: () => l,
                f8: () => i,
                oC: () => o,
                wn: () => d,
                yb: () => c
            });
            var n = r(82261),
                i = r(62665),
                a = r(54928);
            const o = {
                    PRIMARY_DEFAULT: "var(--typography-primary-default)",
                    PRIMARY_INVERTED: "var(--typography-primary-inverted)",
                    PRIMARY_CONSISTENT: "var(--typography-primary-consistent)",
                    PRIMARY_INVERTED_CONSISTENT: "var(--typography-primary-inverted-consistent)",
                    SECONDARY_DEFAULT: "var(--typography-secondary-default)",
                    SECONDARY_CONSISTENT: "var(--typography-secondary-consistent)",
                    DISABLED: "var(--typography-disabled)",
                    INTERACTIVE_PRIMARY_TEAL_CONSISTENT: "var(--typography-interactive-primary-teal-consistent)",
                    INTERACTIVE_PRIMARY_WHEAT_CONSISTENT: "var(--typography-interactive-primary-wheat-consistent)",
                    INTERACTIVE_PRIMARY_PETROL_DEFAULT: "var(--typography-interactive-primary-petrol-default)",
                    INTERACTIVE_PRIMARY_PETROL_CONSISTENT: "var(--typography-interactive-primary-petrol-consistent)",
                    INTERACTIVE_PRIMARY_RHUBARB_DEFAULT: "var(--typography-interactive-primary-rhubarb-default)",
                    INTERACTIVE_PRIMARY_RHUBARB_CONSISTENT: "var(--typography-interactive-primary-rhubarb-consistent)",
                    INTERACTIVE_SECONDARY_TEAL_DEFAULT: "var(--typography-interactive-secondary-teal-default)",
                    INTERACTIVE_SECONDARY_TEAL_CONSISTENT: "var(--typography-interactive-secondary-teal-consistent)",
                    INTERACTIVE_SECONDARY_WHEAT_CONSISTENT: "var(--typography-interactive-secondary-wheat-consistent)",
                    INTERACTIVE_SECONDARY_PETROL_DEFAULT: "var(--typography-interactive-secondary-petrol-default)",
                    INTERACTIVE_SECONDARY_PETROL_CONSISTENT: "var(--typography-interactive-secondary-petrol-consistent)",
                    INTERACTIVE_SECONDARY_RHUBARB_CONSISTENT: "var(--typography-interactive-secondary-rhubarb-consistent)",
                    POSITIVE_AMOUNT: "var(--typography-positive-amount)"
                },
                s = {
                    SCREEN_DEFAULT: "var(--background-screen-default)",
                    CONTAINER_PRIMARY_DEFAULT: "var(--background-container-primary-default)",
                    CONTAINER_PRIMARY_TEAL: "var(--background-container-primary-teal)",
                    CONTAINER_PRIMARY_WHEAT: "var(--background-container-primary-wheat)",
                    CONTAINER_PRIMARY_PETROL: "var(--background-container-primary-petrol)",
                    CONTAINER_PRIMARY_RHUBARB: "var(--background-container-primary-rhubarb)",
                    CONTAINER_PRIMARY_GRAY: "var(--background-container-primary-gray)",
                    CONTAINER_PRIMARY_HOVERED: "var(--background-container-primary-hovered)",
                    CONTAINER_PRIMARY_PRESSED: "var(--background-container-primary-pressed)",
                    ELEVATED_CONTAINER_PRIMARY_DEFAULT: "var(--background-elevated-container-primary-default)",
                    CONTAINER_SECONDARY_TEAL: "var(--background-container-secondary-teal)",
                    CONTAINER_SECONDARY_WHEAT: "var(--background-container-secondary-wheat)",
                    CONTAINER_SECONDARY_PETROL: "var(--background-container-secondary-petrol)",
                    CONTAINER_SECONDARY_RHUBARB: "var(--background-container-secondary-rhubarb)",
                    CONTAINER_SECONDARY_GRAY: "var(--background-container-secondary-gray)",
                    CONTAINER_TERTIARY_TEAL: "var(--background-container-tertiary-teal)",
                    CONTAINER_TERTIARY_TEAL_PRESSED: "var(--background-container-tertiary-teal-pressed)",
                    CONTAINER_TERTIARY_WHEAT: "var(--background-container-tertiary-wheat)",
                    CONTAINER_TERTIARY_WHEAT_PRESSED: "var(--background-container-tertiary-wheat-pressed)",
                    CONTAINER_TERTIARY_PETROL: "var(--background-container-tertiary-petrol)",
                    CONTAINER_TERTIARY_PETROL_PRESSED: "var(--background-container-tertiary-petrol-pressed)",
                    CONTAINER_TERTIARY_RHUBARB: "var(--background-container-tertiary-rhubarb)",
                    CONTAINER_TERTIARY_RHUBARB_PRESSED: "var(--background-container-tertiary-rhubarb-pressed)",
                    CONTAINER_TERTIARY_GRAY: "var(--background-container-tertiary-gray)",
                    CONTAINER_TERTIARY_GRAY_PRESSED: "var(--background-container-tertiary-gray-pressed)",
                    ERROR: "var(--background-error)",
                    POSITIVE_AMOUNT: "var(--background-positive-amount)",
                    NAVIGATION_BOTTOM: "var(--background-navigation-bottom)",
                    SHIMMER_LOADER_FOREGROUND: "var(--shimmer-loader-foreground)",
                    SHIMMER_LOADER_BACKGROUND: "var(--shimmer-loader-background)",
                    TEAL_DARK: "var(--background-container-dark-teal)",
                    TEAL_ALPHA: "var(--background-container-alpha-teal)",
                    RHUBARB_DARK: "var(--background-container-dark-rhubarb)",
                    RHUBARB_ALPHA: "var(--background-container-alpha-rhubarb)",
                    WHEAT_DARK: "var(--background-container-dark-wheat)",
                    WHEAT_ALPHA: "var(--background-container-alpha-wheat)",
                    PETROL_DARK: "var(--background-container-dark-petrol)",
                    PETROL_ALPHA: "var(--background-container-alpha-petrol)"
                },
                l = {
                    NEUTRAL: "var(--background-container-gray)",
                    TEAL: "var(--background-container-teal)",
                    PETROL: "var(--background-container-petrol)",
                    WHEAT: "var(--background-container-wheat)",
                    RHUBARB: "var(--background-container-rhubarb)"
                },
                d = {
                    DEFAULT: "var(--divider-default)",
                    TEAL: "var(--divider-teal)",
                    ERROR: "var(--divider-error)",
                    DARK: "var(--divider-dark)"
                },
                c = {
                    BRIGHT: "var(--bright-overlay)",
                    MILD: "var(--mild-overlay)",
                    DISTINCT: "var(--distinct-overlay)"
                }
        },
        54928: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                BACKGROUNDS: () => a,
                DIVIDERS: () => o,
                ICONOGRAPHY: () => l,
                LOADERS: () => d,
                SHADOWS: () => s,
                TYPOGRAPHY: () => i
            });
            var n = r(82261);
            const i = {
                    typographyPrimaryDefault: n.gray200,
                    typographyPrimaryInverted: n.gray900,
                    typographyPrimaryConsistent: n.gray900,
                    typographyPrimaryInvertedConsistent: n.gray300,
                    typographySecondaryDefault: n.gray400,
                    typographySecondaryConsistent: n.gray600,
                    typographyDisabled: n.gray700,
                    typographyInteractivePrimaryTealConsistent: n.teal500,
                    typographyInteractivePrimaryWheatConsistent: n.wheat500,
                    typographyInteractivePrimaryPetrolDefault: n.petrol300,
                    typographyInteractivePrimaryPetrolConsistent: n.petrol500,
                    typographyInteractivePrimaryRhubarbDefault: n.rhubarb400,
                    typographyInteractivePrimaryRhubarbConsistent: n.rhubarb500,
                    typographyInteractiveSecondaryTealDefault: n.teal200,
                    typographyInteractiveSecondaryTealConsistent: n.teal600,
                    typographyInteractiveSecondaryWheatConsistent: n.wheat600,
                    typographyInteractiveSecondaryPetrolDefault: n.petrol200,
                    typographyInteractiveSecondaryPetrolConsistent: n.petrol600,
                    typographyInteractiveSecondaryRhubarbConsistent: n.rhubarb600,
                    typographyPositiveAmount: n.teal500
                },
                a = {
                    backgroundScreenDefault: n.gray950,
                    backgroundContainerPrimaryDefault: n.gray900,
                    backgroundContainerPrimaryTeal: n.teal500,
                    backgroundContainerPrimaryWheat: n.wheat500,
                    backgroundContainerPrimaryPetrol: n.petrol500,
                    backgroundContainerPrimaryRhubarb: n.rhubarb500,
                    backgroundContainerPrimaryGray: n.gray500,
                    backgroundContainerPrimaryHovered: n.gray850,
                    backgroundContainerPrimaryPressed: n.gray815,
                    backgroundElevatedContainerPrimaryDefault: n.gray850,
                    backgroundContainerSecondaryTeal: n.teal825,
                    backgroundContainerSecondaryWheat: n.wheat825,
                    backgroundContainerSecondaryPetrol: n.petrol825,
                    backgroundContainerSecondaryRhubarb: n.rhubarb825,
                    backgroundContainerSecondaryGray: n.gray825,
                    backgroundContainerTertiaryTeal: n.teal850,
                    backgroundContainerTertiaryTealPressed: n.teal800,
                    backgroundContainerTertiaryWheat: n.wheat850,
                    backgroundContainerTertiaryWheatPressed: n.wheat800,
                    backgroundContainerTertiaryPetrol: n.petrol850,
                    backgroundContainerTertiaryPetrolPressed: n.petrol800,
                    backgroundContainerTertiaryRhubarb: n.rhubarb850,
                    backgroundContainerTertiaryRhubarbPressed: n.rhubarb800,
                    backgroundContainerTertiaryGray: n.gray815,
                    backgroundContainerTertiaryGrayPressed: n.gray800,
                    backgroundError: n.rhubarb100,
                    backgroundPositiveAmount: n.teal500,
                    backgroundNavigationBottom: n.gray825,
                    backgroundButtonPrimaryTealDefault: n.teal500,
                    backgroundButtonPrimaryTealPressed: n.teal300,
                    backgroundButtonPrimaryTealDisabled: n.teal800,
                    backgroundButtonPrimaryTealHoverAndFocused: n.teal500,
                    backgroundButtonPrimaryWheatDefault: n.wheat600,
                    backgroundButtonPrimaryWheatPressed: n.wheat400,
                    backgroundButtonPrimaryWheatDisabled: n.wheat800,
                    backgroundButtonPrimaryWheatHoverAndFocused: n.wheat600,
                    backgroundButtonPrimaryPetrolDefault: n.petrol500,
                    backgroundButtonPrimaryPetrolPressed: n.petrol300,
                    backgroundButtonPrimaryPetrolDisabled: n.petrol800,
                    backgroundButtonPrimaryPetrolHoverAndFocused: n.petrol500,
                    backgroundButtonPrimaryRhubarbDefault: n.rhubarb500,
                    backgroundButtonPrimaryRhubarbPressed: n.rhubarb300,
                    backgroundButtonPrimaryRhubarbDisabled: n.rhubarb700,
                    backgroundButtonPrimaryRhubarbHoverAndFocused: n.rhubarb500,
                    backgroundButtonSecondaryDefault: n.gray950,
                    backgroundButtonSecondaryPressed: n.gray850,
                    backgroundButtonTertiaryTealPressed: n.teal900,
                    backgroundButtonTertiaryWheatPressed: n.wheat900,
                    backgroundButtonTertiaryPetrolPressed: n.petrol900,
                    backgroundButtonTertiaryRhubarbPressed: n.rhubarb900,
                    backgroundButtonTertiaryHoverAndFocused: n.gray950,
                    overlayDefault: n.gray100,
                    overlayDefaultConsistent: n.gray900
                },
                o = {
                    borderPrimaryGray: n.gray800,
                    borderPrimaryTeal: n.teal300,
                    borderPrimaryPetrol: n.petrol300,
                    borderPrimaryWheat: n.wheat400,
                    borderPrimaryRhubarb: n.rhubarb300,
                    borderSecondaryGray: n.gray500,
                    borderSecondaryTeal: n.teal500,
                    borderSecondaryPetrol: n.petrol500,
                    borderSecondaryWheat: n.wheat600,
                    borderSecondaryRhubarb: n.rhubarb500,
                    dividerDefault: n.gray950,
                    dividerDefaultConsistent: n.gray300
                },
                s = {
                    shadowDefault: n.gray900,
                    phoneFrameForeground: n.gray850,
                    phoneFrameBackground: n.gray800
                },
                l = {
                    iconographyPrimaryDefault: n.gray300,
                    iconographyPrimaryConsistent: n.gray900,
                    iconographyPrimaryDefaultInverted: n.gray900,
                    iconographyPrimaryInvertedConsistent: n.gray300,
                    iconographySecondaryDefault: n.gray500,
                    iconographyDisabled: n.gray700,
                    iconographyInteractivePrimaryTealConsistent: n.teal500,
                    iconographyInteractivePrimaryTealDisabled: n.teal800,
                    iconographyInteractivePrimaryPetrolDefault: n.petrol300,
                    iconographyInteractivePrimaryPetrolConsistent: n.petrol500,
                    iconographyInteractivePrimaryPetrolDisabled: n.petrol800,
                    iconographyInteractivePrimaryRhubarbDefault: n.rhubarb400,
                    iconographyInteractivePrimaryRhubarbConsistent: n.rhubarb500,
                    iconographyInteractivePrimaryRhubarbDisabled: n.rhubarb800,
                    iconographyInteractiveSecondaryTealDefault: n.teal200,
                    iconographyInteractiveSecondaryTealConsistent: n.teal600,
                    iconographyInteractiveSecondaryPetrolDefault: n.petrol200,
                    iconographyInteractiveSecondaryPetrolConsistent: n.petrol600
                },
                d = {
                    progressBackground: n.teal700,
                    progressForeground: n.teal500,
                    shimmerLoaderBackground: n.gray815,
                    shimmerLoaderForeground: n.gray850
                }
        },
        62665: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                BACKGROUNDS: () => a,
                DIVIDERS: () => o,
                ICONOGRAPHY: () => l,
                LOADERS: () => d,
                SHADOWS: () => s,
                TYPOGRAPHY: () => i
            });
            var n = r(82261);
            const i = {
                    typographyPrimaryDefault: n.gray900,
                    typographyPrimaryInverted: n.white00,
                    typographyPrimaryConsistent: n.gray900,
                    typographyPrimaryInvertedConsistent: n.white00,
                    typographySecondaryDefault: n.gray600,
                    typographySecondaryConsistent: n.gray600,
                    typographyDisabled: n.gray400,
                    typographyInteractivePrimaryTealConsistent: n.teal500,
                    typographyInteractivePrimaryWheatConsistent: n.wheat500,
                    typographyInteractivePrimaryPetrolDefault: n.petrol500,
                    typographyInteractivePrimaryPetrolConsistent: n.petrol500,
                    typographyInteractivePrimaryRhubarbDefault: n.rhubarb500,
                    typographyInteractivePrimaryRhubarbConsistent: n.rhubarb500,
                    typographyInteractiveSecondaryTealDefault: n.teal600,
                    typographyInteractiveSecondaryTealConsistent: n.teal600,
                    typographyInteractiveSecondaryWheatConsistent: n.wheat600,
                    typographyInteractiveSecondaryPetrolDefault: n.petrol600,
                    typographyInteractiveSecondaryPetrolConsistent: n.petrol600,
                    typographyInteractiveSecondaryRhubarbConsistent: n.rhubarb600,
                    typographyPositiveAmount: n.teal500
                },
                a = {
                    backgroundScreenDefault: n.white00,
                    backgroundContainerPrimaryDefault: n.white00,
                    backgroundContainerPrimaryTeal: n.teal500,
                    backgroundContainerPrimaryWheat: n.wheat500,
                    backgroundContainerPrimaryPetrol: n.petrol500,
                    backgroundContainerPrimaryRhubarb: n.rhubarb500,
                    backgroundContainerPrimaryGray: n.gray500,
                    backgroundContainerPrimaryHovered: n.gray50,
                    backgroundContainerPrimaryPressed: n.gray100,
                    backgroundElevatedContainerPrimaryDefault: n.white00,
                    backgroundContainerSecondaryTeal: n.teal200,
                    backgroundContainerSecondaryWheat: n.wheat200,
                    backgroundContainerSecondaryPetrol: n.petrol200,
                    backgroundContainerSecondaryRhubarb: n.rhubarb200,
                    backgroundContainerSecondaryGray: n.gray200,
                    backgroundContainerTertiaryTeal: n.teal100,
                    backgroundContainerTertiaryTealPressed: n.teal200,
                    backgroundContainerTertiaryWheat: n.wheat100,
                    backgroundContainerTertiaryWheatPressed: n.wheat200,
                    backgroundContainerTertiaryPetrol: n.petrol100,
                    backgroundContainerTertiaryPetrolPressed: n.petrol200,
                    backgroundContainerTertiaryRhubarb: n.rhubarb100,
                    backgroundContainerTertiaryRhubarbPressed: n.rhubarb200,
                    backgroundContainerTertiaryGray: n.gray100,
                    backgroundContainerTertiaryGrayPressed: n.gray200,
                    backgroundError: n.rhubarb100,
                    backgroundPositiveAmount: n.teal100,
                    backgroundNavigationBottom: n.white00,
                    backgroundButtonPrimaryTealDefault: n.teal500,
                    backgroundButtonPrimaryTealPressed: n.teal600,
                    backgroundButtonPrimaryTealDisabled: n.teal300,
                    backgroundButtonPrimaryTealHoverAndFocused: n.teal500,
                    backgroundButtonPrimaryWheatDefault: n.wheat600,
                    backgroundButtonPrimaryWheatPressed: n.wheat700,
                    backgroundButtonPrimaryWheatDisabled: n.wheat300,
                    backgroundButtonPrimaryWheatHoverAndFocused: n.wheat600,
                    backgroundButtonPrimaryPetrolDefault: n.petrol500,
                    backgroundButtonPrimaryPetrolPressed: n.petrol700,
                    backgroundButtonPrimaryPetrolDisabled: n.petrol200,
                    backgroundButtonPrimaryPetrolHoverAndFocused: n.petrol500,
                    backgroundButtonPrimaryRhubarbDefault: n.rhubarb500,
                    backgroundButtonPrimaryRhubarbPressed: n.rhubarb600,
                    backgroundButtonPrimaryRhubarbDisabled: n.rhubarb300,
                    backgroundButtonPrimaryRhubarbHoverAndFocused: n.rhubarb500,
                    backgroundButtonSecondaryDefault: n.white00,
                    backgroundButtonSecondaryPressed: n.gray100,
                    backgroundButtonTertiaryTealPressed: n.teal100,
                    backgroundButtonTertiaryWheatPressed: n.wheat100,
                    backgroundButtonTertiaryPetrolPressed: n.petrol100,
                    backgroundButtonTertiaryRhubarbPressed: n.rhubarb100,
                    backgroundButtonTertiaryHoverAndFocused: n.white00,
                    overlayDefault: n.gray900,
                    overlayDefaultConsistent: n.gray900
                },
                o = {
                    borderPrimaryGray: n.gray200,
                    borderPrimaryTeal: n.teal600,
                    borderPrimaryPetrol: n.petrol700,
                    borderPrimaryWheat: n.wheat700,
                    borderPrimaryRhubarb: n.rhubarb600,
                    borderSecondaryGray: n.gray500,
                    borderSecondaryTeal: n.teal500,
                    borderSecondaryPetrol: n.petrol500,
                    borderSecondaryWheat: n.wheat600,
                    borderSecondaryRhubarb: n.rhubarb500,
                    dividerDefault: n.gray200,
                    dividerDefaultConsistent: n.gray200
                },
                s = {
                    shadowDefault: n.gray900,
                    phoneFrameForeground: n.gray200,
                    phoneFrameBackground: n.gray50
                },
                l = {
                    iconographyPrimaryDefault: n.gray900,
                    iconographyPrimaryConsistent: n.gray900,
                    iconographyPrimaryDefaultInverted: n.white00,
                    iconographyPrimaryInvertedConsistent: n.white00,
                    iconographySecondaryDefault: n.gray600,
                    iconographyDisabled: n.gray400,
                    iconographyInteractivePrimaryTealConsistent: n.teal500,
                    iconographyInteractivePrimaryTealDisabled: n.teal300,
                    iconographyInteractivePrimaryPetrolDefault: n.petrol500,
                    iconographyInteractivePrimaryPetrolConsistent: n.petrol500,
                    iconographyInteractivePrimaryPetrolDisabled: n.petrol300,
                    iconographyInteractivePrimaryRhubarbDefault: n.rhubarb500,
                    iconographyInteractivePrimaryRhubarbConsistent: n.rhubarb500,
                    iconographyInteractivePrimaryRhubarbDisabled: n.rhubarb300,
                    iconographyInteractiveSecondaryTealDefault: n.teal600,
                    iconographyInteractiveSecondaryTealConsistent: n.teal600,
                    iconographyInteractiveSecondaryPetrolDefault: n.petrol600,
                    iconographyInteractiveSecondaryPetrolConsistent: n.petrol600
                },
                d = {
                    progressBackground: n.teal200,
                    progressForeground: n.teal500,
                    shimmerLoaderBackground: n.gray100,
                    shimmerLoaderForeground: n.gray50
                }
        },
        80341: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => o
            });
            var n = r(29901),
                i = r(96519),
                a = r(61250);
            const o = e => {
                const {
                    isDark: t
                } = (0, n.useContext)(i.Z);
                return (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M11.9998 13.0607L18.5406 19.6014L19.6012 18.5407L13.0605 12L19.6012 5.45927L18.5406 4.39861L11.9998 10.9393L5.4591 4.39861L4.39844 5.45927L10.9392 12L4.39844 18.5407L5.4591 19.6014L11.9998 13.0607Z",
                        fill: t ? "#fff" : "#2D2D2D"
                    })
                })
            }
        },
        52809: (e, t, r) => {
            "use strict";
            r.d(t, {
                j0B: () => or,
                tqD: () => xr,
                Fzq: () => sr,
                rXI: () => lr,
                Lxr: () => dr,
                pxh: () => cr,
                ovx: () => yr,
                agr: () => ur,
                MHR: () => Er,
                EUb: () => br,
                Fa$: () => jr,
                Jdu: () => hr,
                kZo: () => gr,
                xC: () => pr,
                osi: () => vr,
                zCz: () => Cr,
                t2G: () => _r,
                Os8: () => mr,
                R3v: () => ar,
                Y7M: () => Rr,
                QWW: () => fr,
                bKY: () => Ar
            });
            var n = r(29901),
                i = r(96519),
                a = r(61250);
            const o = () => {
                    const {
                        isDark: e
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        width: "48",
                        height: "48",
                        viewBox: "0 0 48 48",
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: e ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            d: "M15.75 15C15.5511 15 15.3603 15.079 15.2197 15.2197C15.079 15.3603 15 15.5511 15 15.75V21.5H16.5V17.5607L23.25 24.3107V33H24.75V24C24.75 23.8011 24.671 23.6103 24.5303 23.4697L17.5607 16.5H21.5V15H15.75Z",
                            fill: e ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M26.5 16.5L30.4393 16.5L25.4697 21.4697L26.5303 22.5303L31.5 17.5607V21.5H33V15.75C33 15.5511 32.921 15.3603 32.7803 15.2197C32.6397 15.079 32.4489 15 32.25 15H26.5V16.5Z",
                            fill: e ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                s = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#4A3D29" : "#F2ECE1"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M33.476 30.7593L23.9999 14.9541L14.5238 30.7593L33.476 30.7593ZM25.2864 14.1828C24.7039 13.2112 23.2959 13.2112 22.7134 14.1828L13.2373 29.9879C12.6379 30.9877 13.3581 32.2593 14.5238 32.2593H33.476C34.6417 32.2593 35.3619 30.9877 34.7624 29.9879L25.2864 14.1828Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M23.25 20V26H24.75V20H23.25Z",
                            fill: t ? "#D6B17D" : "#C89D58"
                        }), (0, a.jsx)("path", {
                            d: "M24 29C24.5523 29 25 28.5523 25 28C25 27.4477 24.5523 27 24 27C23.4477 27 23 27.4477 23 28C23 28.5523 23.4477 29 24 29Z",
                            fill: t ? "#D6B17D" : "#C89D58"
                        })]
                    })
                },
                l = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 32 32",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M22 11L10.5 22.5M10.44 11H22v11.56",
                        fill: "none",
                        strokeWidth: "2",
                        stroke: "currentcolor"
                    })
                }),
                d = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#182B31" : "#E9EEF2"
                        }), (0, a.jsx)("path", {
                            d: "M19.6371 22.4623L16.8473 19.75H33V18.25H16.8473L19.6371 15.5378L18.5915 14.4623L14.4772 18.4623C14.3319 18.6035 14.25 18.7975 14.25 19C14.25 19.2026 14.3319 19.3966 14.4772 19.5378L18.5915 23.5378L19.6371 22.4623Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M28.3629 25.5378L31.1527 28.25L15 28.25L15 29.75L31.1527 29.75L28.3629 32.4623L29.4085 33.5378L33.5228 29.5378C33.6681 29.3966 33.75 29.2026 33.75 29C33.75 28.7975 33.6681 28.6035 33.5228 28.4623L29.4085 24.4623L28.3629 25.5378Z",
                            fill: t ? "#79A1AD" : "#2B697A"
                        })]
                    })
                },
                c = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fill: t ? "#2D2D2D" : "#F2F2F2",
                            fillRule: "evenodd",
                            d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z",
                            clipRule: "evenodd"
                        }), (0, a.jsx)("path", {
                            fill: t ? "#D9D9D9" : "#1B1B1B",
                            fillRule: "evenodd",
                            d: "M24 14.411l9 4.5V20.5H15V18.91l9-4.5zM29.823 19L24 16.088 18.177 19h11.646zM31.5 30v-8H30v8h1.5zM18 22v8h-1.5v-8H18zm15 11H15v-1.5h18V33zm-10.5-3v-8H21v8h1.5zm4.5-8v8h-1.5v-8H27z",
                            clipRule: "evenodd"
                        })]
                    })
                },
                u = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("circle", {
                                cx: "24",
                                cy: "24",
                                r: "24",
                                fill: t ? "#22403A" : "#E8F2EE",
                                fillRule: "nonzero"
                            }), (0, a.jsx)("path", {
                                stroke: t ? "#D9D9D9" : "#1B1B1B",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2.038",
                                d: "M13.29 29.986h18.817m-19.892 3.172H33.72M16.516 20.53v9.285m4.301-9.285v9.285m4.301-9.285v9.285m4.301-9.285l.278 1.962"
                            }), (0, a.jsx)("path", {
                                fill: t ? "#D9D9D9" : "#1B1B1B",
                                fillRule: "nonzero",
                                d: "M31.57 19.414l-8.655-4.228-9.087 4.228H31.57zm0 1.586H13.828c-1.72 0-2.245-2.295-.69-3.02l9.088-4.228a1.638 1.638 0 0 1 1.407.014l8.655 4.229c1.526.745.986 3.005-.718 3.005z"
                            }), (0, a.jsx)("g", {
                                stroke: t ? "#82C4B2" : "#36A18B",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "1.5",
                                children: (0, a.jsx)("path", {
                                    d: "M29.2 26.074h9.424M35.88 28.96l2.972-2.801-2.906-2.74"
                                })
                            })]
                        })
                    })
                },
                h = () => {
                    const {
                        isDark: e
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        width: "48",
                        height: "48",
                        viewBox: "0 0 48 48",
                        fill: "none",
                        children: [(0, a.jsx)("circle", {
                            cx: "24",
                            cy: "24",
                            r: "24",
                            fill: e ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M24 14.4114L33 18.9114L33 20.4999H15V18.9114L24 14.4114ZM29.823 18.9999L24 16.0884L18.1771 18.9999H29.823ZM31.5 29.9999V21.9999H30V29.9999H31.5ZM18 21.9999V29.9999H16.5V21.9999H18ZM33 32.9999H15V31.4999H33V32.9999ZM22.5 29.9999V21.9999H21V29.9999H22.5ZM27 21.9999V29.9999H25.5V21.9999H27Z",
                            fill: e ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                p = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M24,0 C37.255,0 48,10.745 48,24 C48,37.255 37.255,48 24,48 C10.745,48 0,37.255 0,24 C0,10.745 10.745,0 24,0 Z",
                            fill: t ? "#4A3D29" : "#F2ECE1",
                            fillRule: "nonzero"
                        }), (0, a.jsx)("path", {
                            d: "M20.703,35.678 C19.6144431,35.0500105 18.971658,33.8631215 19.040537,32.6082978 C19.109416,31.353474 19.8782478,30.2440707 21.029,29.739 C22.276,29.192 25.446,30.937 25.66,32.26 C25.866167,33.5305652 25.3222895,34.8062789 24.2628016,35.537255 C23.2033137,36.2682311 21.8176151,36.3237964 20.703,35.68 L20.703,35.678 Z M21.907,31.672 C21.8465892,31.6529211 21.7851603,31.63723 21.723,31.625 C21.1457263,31.9451541 20.8897133,32.6395929 21.1210328,33.2578443 C21.3523524,33.8760958 22.0013272,34.2319322 22.646977,34.0945279 C23.2926268,33.9571236 23.7404711,33.3678669 23.7,32.709 C23.6568415,32.6647118 23.6114491,32.622657 23.564,32.583 C23.3181086,32.3822076 23.05357,32.2054021 22.774,32.055 C22.497876,31.8992786 22.2071526,31.7709986 21.906,31.672 L21.907,31.672 Z",
                            fill: t ? "#D6B17D" : "#C89D58"
                        }), (0, a.jsx)("path", {
                            d: "M30.299,12.73 C31.0037825,13.1431759 31.2472162,14.0432301 30.8506143,14.7543021 C31.8127555,15.6433786 32.5140506,16.7937478 32.8588667,18.0801822 C33.339523,19.8734073 33.088133,21.7841268 32.16,23.392 L29.764,27.542 C29.4871359,28.0216976 29.6349747,28.630045 30.0909106,28.9315301 C30.1150818,28.9395747 30.1376824,28.9513112 30.16,28.964 C31.594,29.792 32.05,31.59 31.22,33.026 L30.999,33.411 C30.6011593,34.1002904 29.9457295,34.6032497 29.1769694,34.8091777 C28.4082093,35.0151056 27.5891266,34.9071242 26.9,34.509 L13.044,26.509 C11.6091955,25.6805489 11.117612,23.8458409 11.946,22.411 L12.168,22.026 C13.01,20.569 14.565,19.966 16,20.794 L16.0235893,20.8090249 L16.1087006,20.8526511 C16.5873991,21.0595026 17.155696,20.879426 17.423,20.417 L19.819,16.267 C21.5476269,13.2731703 25.153844,12.0393111 28.2914074,13.1940646 C28.417538,13.0034318 28.588064,12.8411925 28.7932739,12.7233222 C29.2600258,12.455225 29.8346444,12.4577734 30.299,12.73 Z M21.551,17.267 L19.155,21.417 C18.3148334,22.8715335 16.4547484,23.3697946 15,22.53 L14.9755893,22.5130249 L14.9111953,22.4813792 C14.5562367,22.329432 14.2055385,22.4970769 13.9,23.026 L13.678,23.411 C13.4018707,23.8892803 13.5657318,24.5008496 14.044,24.777 L27.9,32.777 C28.3782803,33.0531293 28.9898496,32.8892682 29.266,32.411 L29.489,32.026 C29.7599744,31.5551579 29.637609,31.0104491 29.2132885,30.7290222 C29.1892535,30.7210799 29.1669894,30.7095022 29.145,30.697 C27.6904665,29.8568334 27.1922054,27.9967484 28.032,26.542 L30.428,22.392 C31.8086467,20.0005985 30.9893408,16.9427519 28.598,15.562 L28.381,15.437 C25.9895985,14.0563533 22.9317519,14.8756592 21.551,17.267 Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                v = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                fill: t ? "#22403A" : "#E8F2EE",
                                d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z"
                            }), (0, a.jsxs)("g", {
                                fillRule: "nonzero",
                                children: [(0, a.jsx)("path", {
                                    stroke: t ? "#D9D9D9" : "#1B1B1B",
                                    strokeWidth: "1.5",
                                    d: "M27.747 18.25h-8.494c-.446 0-.858.238-1.082.624l-2.753 4.754c-.11.19-.168.407-.168.627l.25 5.495 4.263-.073.414-.414a1.746 1.746 0 011.237-.513h4.172c.464 0 .909.184 1.237.513l.591.487 4.336-.25v-5.245c0-.22-.058-.436-.168-.627l-2.753-4.754a1.251 1.251 0 00-1.082-.624z"
                                }), (0, a.jsx)("path", {
                                    fill: t ? "#D9D9D9" : "#1B1B1B",
                                    d: "M15 30h3v1.25a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75V30zm14 0h3v1.25a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75V30zm-15-9.25h1a1 1 0 011 1v1h-2a1 1 0 010-2zm19 0h-1a1 1 0 00-1 1v1h2a1 1 0 000-2z"
                                }), (0, a.jsx)("path", {
                                    stroke: t ? "#D9D9D9" : "#1B1B1B",
                                    strokeWidth: "1.5",
                                    d: "M16 22h15"
                                }), (0, a.jsx)("path", {
                                    fill: t ? "#82C4B2" : "#36A18B",
                                    d: "M28.5 24a1.5 1.5 0 010 3h-10a1.5 1.5 0 010-3h10zm-9.75.75a.75.75 0 100 1.5.75.75 0 000-1.5zm9.5 0a.75.75 0 100 1.5.75.75 0 000-1.5z"
                                })]
                            })]
                        })
                    })
                },
                C = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            d: "M32.5 18.5h-17v11H27V31H15.5a1.5 1.5 0 01-1.5-1.5v-11a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 011.5 1.5V23h-1.5v-4.5z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M22 22h-4v3h4v-3z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M33.798 26.202L31.5 23.904l-2.298 2.298a3.25 3.25 0 104.596 0zm-2.298-.177l-1.237 1.238A1.75 1.75 0 0031.5 30.25v-4.225z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        })]
                    })
                },
                f = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#4A3D29" : "#F2ECE1"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 18.5C14 17.6716 14.6716 17 15.5 17H32.5C33.3284 17 34 17.6716 34 18.5V29.5C34 30.3284 33.3284 31 32.5 31H15.5C14.6716 31 14 30.3284 14 29.5V18.5ZM15.5 18.5H32.5V29.5H15.5L15.5 18.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M22 22H18V25H22V22Z",
                            fill: t ? "#D6B17D" : "#C89D58"
                        })]
                    })
                },
                g = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fill: t ? "#82C4B2" : "#36A18B",
                            d: "M20 26h4v6h-4z"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M15 15.25a.75.75 0 00-.75.75v3c0 1.227.59 2.316 1.5 3v9.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V22a3.744 3.744 0 001.5-3v-3a.75.75 0 00-.75-.75H15zm15.75 7.425A3.744 3.744 0 0127 21.25a3.744 3.744 0 01-3 1.5 3.744 3.744 0 01-3-1.5 3.744 3.744 0 01-3.75 1.425v8.575h13.5v-8.575zM24 21.25A2.25 2.25 0 0121.75 19a.75.75 0 00-1.5 0 2.25 2.25 0 01-4.5 0v-2.25h16.5V19a2.25 2.25 0 01-4.5 0 .75.75 0 00-1.5 0A2.25 2.25 0 0124 21.25z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                m = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", { ...e,
                        viewBox: "0 0 48 48",
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            d: "M0 24A24.01 24.01 0 017.029 7.029 24.01 24.01 0 0124 0a24.01 24.01 0 0116.971 7.029A24.01 24.01 0 0148 24a24.01 24.01 0 01-7.029 16.971A24.01 24.01 0 0124 48a24.01 24.01 0 01-16.971-7.029A24.01 24.01 0 010 24z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M24 23s-4.217-3.389-4.8-5.021c-.582-1.633.149-3.355 1.635-3.847 1.134-.376 2.38.075 3.165 1.036.785-.961 2.031-1.412 3.165-1.036 1.486.492 2.217 2.214 1.635 3.847C28.217 19.611 24 23 24 23z",
                            fill: "#36A18B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M26.75 29.75H20.5v-1.5h4.725c-.116-.57-.62-1-1.225-1h-2a.75.75 0 01-.335-.079l-2.842-1.421H14v-1.5h5.177l.158.079 2.842 1.421H24a2.75 2.75 0 012.505 1.613l4.884-1.23a2.749 2.749 0 013.018 1.233l.648 1.056-11.009 5.904-10.324-4.13.557-1.392 9.675 3.87 8.948-4.8a1.25 1.25 0 00-1.146-.287l-5.006 1.26v.903z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                x = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", { ...e,
                        viewBox: "0 0 48 48",
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z",
                            fill: t ? "#223C44" : "#CCDCE2"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z",
                            fill: t ? "#223C44" : "#CCDCE2"
                        }), (0, a.jsx)("path", {
                            d: "M18 16v16h3V16h-3zM25.5 32V16H30v16h-4.5z",
                            fill: t ? "#CCDCE2" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M15 32V16h1.5v16H15zM22.5 32V16H24v16h-1.5zM31.5 16v16H33V16h-1.5z",
                            fill: t ? "#CCDCE2" : "#1B1B1B"
                        })]
                    })
                },
                y = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            children: [(0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z",
                                fill: t ? "#22403A" : "#E8F2EE"
                            }), (0, a.jsx)("circle", {
                                cx: "23",
                                cy: "24",
                                r: "7.25",
                                stroke: t ? "#D9D9D9" : "#1B1B1B",
                                strokeWidth: "1.5"
                            }), (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M27.7189 30.4607C26.9137 31.0498 25.9943 31.4921 25 31.748C25.6392 31.9125 26.3094 32 27 32C31.4183 32 35 28.4183 35 24C35 19.5817 31.4183 16 27 16C26.3094 16 25.6392 16.0875 25 16.252C25.9943 16.5079 26.9137 16.9502 27.7189 17.5393C30.9705 17.8971 33.5 20.6531 33.5 24C33.5 27.3469 30.9705 30.1029 27.7189 30.4607Z",
                                fill: t ? "#D9D9D9" : "#1B1B1B"
                            }), (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M23.75 19.5V20.6035C24.827 20.9081 25.6354 21.8524 25.7388 23H24.225C24.1092 22.4294 23.6047 22 23 22C22.3096 22 21.75 22.5596 21.75 23.25V24.75C21.75 25.4404 22.3096 26 23 26C23.6047 26 24.1092 25.5706 24.225 25H25.7388C25.6354 26.1476 24.827 27.0919 23.75 27.3965V28.5H22.25V27.3965C21.0957 27.07 20.25 26.0088 20.25 24.75V23.25C20.25 21.9912 21.0957 20.93 22.25 20.6035V19.5H23.75Z",
                                fill: t ? "#82C4B2" : "#36A18B"
                            })]
                        })
                    })
                },
                b = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("circle", {
                            cx: "24",
                            cy: "24",
                            r: "24",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            d: "M33.5294 18.5303L21.5294 30.5303C21.2365 30.8232 20.7616 30.8232 20.4688 30.5303L14.4688 24.5303L15.5294 23.4697L20.9991 28.9393L32.4688 17.4697L33.5294 18.5303Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                R = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, a.jsx)("path", {
                        fill: "currentcolor",
                        d: "M19.5303 1.53033L7.53033 13.5303C7.23743 13.8232 6.76256 13.8232 6.46967 13.5303L0.469666 7.53033L1.53033 6.46967L7 11.9393L18.4697 0.469666L19.5303 1.53033Z"
                    })
                }),
                E = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 18 18",
                        color: "#36A18B",
                        ...e,
                        children: [(0, a.jsx)("circle", {
                            cx: 9,
                            cy: 9,
                            r: 8,
                            fill: "#36A18B",
                            stroke: t ? "none" : "#fff",
                            strokeWidth: 1.5
                        }), (0, a.jsx)("path", {
                            d: "M5.854 8.854L8 11l4.646-4.646",
                            stroke: t ? "#2D2D2D" : "#fff",
                            strokeWidth: 1.5
                        })]
                    })
                },
                j = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 16 16",
                    ...e,
                    children: (0, a.jsx)("path", {
                        fill: "currentcolor",
                        d: "M5.462 10.553l7.633-7.634a1.198 1.198 0 1 1 1.694 1.694l-8.464 8.466a1.206 1.206 0 0 1-.894.353 1.183 1.183 0 0 1-.821-.344L1.207 9.685a1.199 1.199 0 0 1 1.694-1.694l2.561 2.561v.001z"
                    })
                }),
                _ = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M32.53 18.53L24 27.06l-4.53-4.53 1.06-1.06L24 24.94l7.47-7.47 1.06 1.06z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M24 15.5a8.5 8.5 0 108.5 8.5H34a10 10 0 11-10-10v1.5z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                };
            const A = function(e) {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ...e,
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.94 12L9.47 6.53l1.06-1.06 6 6a.75.75 0 010 1.06l-6 6-1.06-1.06L14.94 12z",
                            fill: t ? "#fff" : "#2D2D2D"
                        })
                    })
                },
                k = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24ZM32.5 24C32.5 28.6944 28.6944 32.5 24 32.5C19.3056 32.5 15.5 28.6944 15.5 24C15.5 19.3056 19.3056 15.5 24 15.5C28.6944 15.5 32.5 19.3056 32.5 24Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M23.25 24.433L27.0891 26.6495L27.8391 25.3505L24.75 23.567V18H23.25V24.433Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        })]
                    })
                },
                B = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M28 19a4 4 0 11-8 0 4 4 0 018 0zm-1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M25.5 31.5V33H16a7.995 7.995 0 012.343-5.657 8 8 0 018.948-1.634l-1.153 1.153a6.5 6.5 0 00-8.463 4.638H25.5z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M32.47 27l1.06 1.06L29 32.592l-2.53-2.53L27.53 29 29 30.47 32.47 27z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        })]
                    })
                };
            const L = e => (0, a.jsxs)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M14.75 18.75H14v-1.5h.75v-.75a2.75 2.75 0 115.5 0h-1.5a1.25 1.25 0 00-2.5 0v.75H18v1.5h-1.75V20c0 .263-.045.515-.128.75H20v1.5h-6v-1.5a.75.75 0 00.75-.75v-1.25zM3.97 15.03l2.219 2.22H5v1.5h1.75v.5H5v1.5h1.75v1.5h1.5v-1.5H10v-1.5H8.25v-.5H10v-1.5H8.811l2.219-2.22-1.06-1.06-2.47 2.469-2.47-2.469-1.06 1.06zM14.761 5.25a2.75 2.75 0 015.489.25h-1.5a1.25 1.25 0 00-2.475-.25H18v1.5h-1.75v.5H18v1.5h-1.725a1.25 1.25 0 002.475-.25h1.5a2.75 2.75 0 01-5.489.25H14v-1.5h.75v-.5H14v-1.5h.761z"
                    }), (0, a.jsx)("path", {
                        d: "M8.25 2.764V2h-1.5v.769a2.296 2.296 0 00-.731 4.329l.731.366v2.243A.75.75 0 016.25 9h-1.5a2.25 2.25 0 002 2.236V12h1.5v-.769a2.296 2.296 0 00.731-4.329l-.731-.366V4.293c.291.103.5.38.5.707h1.5a2.25 2.25 0 00-2-2.236zm-1.5 1.543a.794.794 0 00-.06 1.449l.06.03V4.307zm1.5 3.907v1.479a.794.794 0 00.06-1.449l-.06-.03z"
                    })]
                }),
                M = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsx)("path", {
                        fill: "currentcolor",
                        d: "M19.466 4.035a.5.5 0 01.646.646l-6.21 16.145a.5.5 0 01-.93.006L10.53 14.73a2 2 0 00-1.114-1.114l-6.102-2.44a.5.5 0 01.007-.932l16.145-6.21z"
                    })
                }),
                S = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("circle", {
                            cx: "24",
                            cy: "24",
                            r: "24",
                            fill: t ? "#2D2D2D" : "#F2F2F2"
                        }), (0, a.jsx)("rect", {
                            x: "16",
                            y: "23",
                            width: "16",
                            height: "2",
                            fill: t ? "#D9D9D9" : "#6D6D6D"
                        })]
                    })
                },
                T = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ...e,
                        children: (0, a.jsx)("rect", {
                            x: "4",
                            y: "11",
                            width: "16",
                            height: "2",
                            fill: t ? "#fff" : "#B6B6B6"
                        })
                    })
                },
                D = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            d: "M24 32.5C28.6944 32.5 32.5 28.6944 32.5 24C32.5 22.4699 32.0957 21.0342 31.3881 19.7939L32.4817 18.7003C33.4438 20.2368 34 22.0534 34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C25.9466 14 27.7632 14.5562 29.2997 15.5183L28.2061 16.6119C26.9658 15.9043 25.5301 15.5 24 15.5C19.3056 15.5 15.5 19.3056 15.5 24C15.5 28.6944 19.3056 32.5 24 32.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M26.3432 18.4748C25.6233 18.1691 24.8314 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30C27.3137 30 30 27.3137 30 24C30 23.1686 29.8309 22.3767 29.5252 21.6568L28.3476 22.8344C28.447 23.2062 28.5 23.5969 28.5 24C28.5 26.4853 26.4853 28.5 24 28.5C21.5147 28.5 19.5 26.4853 19.5 24C19.5 21.5147 21.5147 19.5 24 19.5C24.4031 19.5 24.7938 19.553 25.1656 19.6524L26.3432 18.4748Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M26 24C26 25.1046 25.1046 26 24 26C22.8954 26 22 25.1046 22 24C22 22.8954 22.8954 22 24 22C24.2771 22 24.5411 22.0564 24.7811 22.1583L30.25 16.6893V15H31.75V16.25H33V17.75H31.3107L25.8417 23.2189C25.9436 23.4589 26 23.7229 26 24Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        })]
                    })
                },
                O = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 10.4699 20.0957 9.03417 19.3881 7.79391L20.4817 6.70026C21.4438 8.23678 22 10.0534 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C13.9466 2 15.7632 2.55618 17.2997 3.51828L16.2061 4.61193C14.9658 3.90431 13.5301 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        d: "M14.3432 6.4748C13.6233 6.16911 12.8314 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 11.1686 17.8309 10.3767 17.5252 9.65678L16.3476 10.8344C16.447 11.2062 16.5 11.5969 16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C12.4031 7.5 12.7938 7.553 13.1656 7.65242L14.3432 6.4748Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        d: "M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C12.2771 10 12.5411 10.0564 12.7811 10.1583L18.25 4.68934V3H19.75V4.25H21V5.75H19.3107L13.8417 11.2189C13.9436 11.4589 14 11.7229 14 12Z",
                        fill: "currentcolor"
                    })]
                }),
                w = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    fillRule: "evenodd",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M13.97 8.97l-5 5 1.06 1.06 5-5-1.06-1.06zM11.25 10a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM15.25 14a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
                    }), (0, a.jsx)("path", {
                        d: "M22 6.5V10a2 2 0 100 4v3.5a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 17.5V14a2 2 0 100-4V6.5A1.5 1.5 0 013.5 5h17A1.5 1.5 0 0122 6.5zm-18.5 0h17v2.337a3.5 3.5 0 000 6.326V17.5h-17v-2.337a3.501 3.501 0 000-6.326V6.5z"
                    })]
                }),
                N = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M32.4697 28.9697L33.5304 30.0304L29.0001 34.5607L26.4697 32.0304L27.5304 30.9697L29.0001 32.4394L32.4697 28.9697Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M32 27V20.25L25.75 14H17.5C16.6716 14 16 14.6716 16 15.5V32.5C16 33.3284 16.6716 34 17.5 34H25V32.5H17.5V15.5H25V21H30.5V27H32ZM29.1287 19.5L26.5 16.8713V19.5H29.1287Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M20 24.5H26V23H20V24.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M24 27.5H20V26H24V27.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                H = e => (0, a.jsxs)("svg", {
                    viewBox: "-4 -2 24 24",
                    fill: "none",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M8 8a.75.75 0 01.75.75v.5h3v3a.75.75 0 01-1.5 0v-1.5h-1.5v3.5H11v1.5H5v-1.5h2.25v-3.5h-1.5v1.5a.75.75 0 01-1.5 0v-3h3v-.5A.75.75 0 018 8z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16 18.5V6.25L9.75 0H1.5A1.5 1.5 0 000 1.5v17A1.5 1.5 0 001.5 20h13a1.5 1.5 0 001.5-1.5zm-7-17V7h5.5v11.5h-13v-17H9zm4.129 4L10.5 2.871V5.5h2.629z",
                        fill: "currentcolor"
                    })]
                }),
                I = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z",
                            fill: t ? "#4A3D29" : "#F2ECE1"
                        }), (0, a.jsx)("path", {
                            d: "M30.943 30.037a.75.75 0 10-1.443-.287H28a2.25 2.25 0 113 2.121v.629h-1.5v-2h.75a.75.75 0 00.693-.463zM30.25 35a1 1 0 100-2 1 1 0 000 2z",
                            fill: t ? "#D6B17D" : "#C89D58"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M32 26v-5.75L25.75 14H17.5a1.5 1.5 0 00-1.5 1.5v17a1.5 1.5 0 001.5 1.5H27v-1.5h-9.5v-17H25V21h5.5v5H32zm-2.871-6.5L26.5 16.871V19.5h2.629z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M20 24.5h6V23h-6v1.5zM24 27.5h-4V26h4v1.5z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                P = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M14 12.5H8V11H14V12.5Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        d: "M8 15.5H16V14H8V15.5Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        d: "M12 18.5H8V17H12V18.5Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M20 20.5V8.25L13.75 2H5.5C4.67157 2 4 2.67157 4 3.5V20.5C4 21.3284 4.67157 22 5.5 22H18.5C19.3284 22 20 21.3284 20 20.5ZM13 3.5V9H18.5V20.5H5.5V3.5H13ZM17.1287 7.5L14.5 4.87132V7.5H17.1287Z",
                        fill: "currentcolor"
                    })]
                }),
                Z = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M15.4697 12.4697L12.75 15.1893V7H11.25V15.1893L8.53033 12.4697L7.46967 13.5303L11.4697 17.5303C11.7626 17.8232 12.2374 17.8232 12.5303 17.5303L16.5303 13.5303L15.4697 12.4697Z",
                        fill: "currentColor"
                    }), (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z",
                        fill: "currentColor"
                    })]
                }),
                V = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fill: t ? "#D9D9D9" : "#1B1B1B",
                            d: "M19.5 8.5v11h-15v-11H9V7H4.5A1.5 1.5 0 003 8.5v11A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0019.5 7H15v1.5h4.5z"
                        }), (0, a.jsx)("path", {
                            fill: t ? "#D9D9D9" : "#1B1B1B",
                            d: "M11.47 16.53a.75.75 0 001.06 0l4-4-1.06-1.06-2.72 2.72V3h-1.5v11.19l-2.72-2.72-1.06 1.06 4 4z"
                        })]
                    })
                },
                z = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M34 29.5V18.5C34 17.6716 33.3284 17 32.5 17H15.5C14.6716 17 14 17.6716 14 18.5V29.5C14 30.3284 14.6716 31 15.5 31H32.5C33.3284 31 34 30.3284 34 29.5ZM32.5 19.0625V29.5L15.5 29.5L15.5 19.0625L24 25.4375L32.5 19.0625ZM30.75 18.5L17.25 18.5L24 23.5625L30.75 18.5Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M34 29.5V18.5C34 17.6716 33.3284 17 32.5 17H15.5C14.6716 17 14 17.6716 14 18.5V29.5C14 30.3284 14.6716 31 15.5 31H32.5C33.3284 31 34 30.3284 34 29.5ZM32.5 18.5V29.5L15.5 29.5L15.5 19.0625L15.5 18.5L17.25 18.5L32.5 18.5ZM30.75 18.5L17.25 18.5L32 18.5H30.75Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                F = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M22 17.5v-11A1.5 1.5 0 0020.5 5h-17A1.5 1.5 0 002 6.5v11A1.5 1.5 0 003.5 19h17a1.5 1.5 0 001.5-1.5zM20.5 7.062V17.5h-17V7.062l8.5 6.375 8.5-6.374zM18.75 6.5H5.25L12 11.563 18.75 6.5z",
                        fill: "currentcolor"
                    })
                }),
                W = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        fill: "currentcolor",
                        d: "M9.125 12.436L6.53 15.03l-1.06-1.06 2.47-2.47-2.47-2.47 1.06-1.06 2.595 2.594L11.72 7.97l1.06 1.06-2.47 2.47 2.47 2.47-1.06 1.06-2.595-2.594z"
                    }), (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        fill: "currentcolor",
                        d: "M4.75 1.5h8.5V0h1.5v1.5h1.75A1.5 1.5 0 0118 3v14a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 010 17V3a1.5 1.5 0 011.5-1.5h1.75V0h1.5v1.5zM1.5 3h15v1.5h-15V3zm0 3v11h15V6h-15z"
                    })]
                }),
                Y = e => (0, a.jsx)("svg", {
                    fill: "none",
                    viewBox: "0 0 16 16",
                    ...e,
                    children: (0, a.jsx)("path", {
                        fill: "currentcolor",
                        fillRule: "evenodd",
                        d: "M8 15c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zM7.25 4.5V9h1.5V3.5h-1.5v1zm-.25 7c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1z",
                        clipRule: "evenodd"
                    })
                }),
                U = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#493231" : "#F2E8E8"
                        }), (0, a.jsx)("path", {
                            d: "M24 25.414L26.8284 28.2424L28.2426 26.8282L25.4142 23.9998L28.2428 21.1713L26.8285 19.7571L24 22.5856L21.1715 19.7571L19.7573 21.1713L22.5858 23.9998L19.7575 26.8281L21.1717 28.2424L24 25.414Z",
                            fill: t ? "#DEACAB" : "#B35D5B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M24 14.75C18.8914 14.75 14.75 18.8914 14.75 24C14.75 29.1086 18.8914 33.25 24 33.25C29.1086 33.25 33.25 29.1086 33.25 24C33.25 18.8914 29.1086 14.75 24 14.75ZM13.25 24C13.25 18.0629 18.0629 13.25 24 13.25C29.9371 13.25 34.75 18.0629 34.75 24C34.75 29.9371 29.9371 34.75 24 34.75C18.0629 34.75 13.25 29.9371 13.25 24Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                G = e => (0, a.jsxs)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M9 10.5l1-2 1 2 2 1-2 1-1 2-1-2-2-1 2-1zM15 11.5l-.667 1.333L13 13.5l1.333.667L15 15.5l.667-1.333L17 13.5l-1.333-.667L15 11.5z"
                    }), (0, a.jsx)("path", {
                        d: "M22 10V6.5A1.5 1.5 0 0020.5 5h-17A1.5 1.5 0 002 6.5V10a2 2 0 110 4v3.5A1.5 1.5 0 003.5 19h17a1.5 1.5 0 001.5-1.5V14a2 2 0 110-4zm-1.5-3.5h-17v2.337a3.501 3.501 0 010 6.326V17.5h17v-2.337a3.5 3.5 0 010-6.326V6.5z"
                    })]
                }),
                K = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M1.46912 9.53039C7.28486 15.3461 16.714 15.3461 22.5298 9.53039L21.4691 8.46973C16.2392 13.6997 7.75973 13.6997 2.52978 8.46973L1.46912 9.53039Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        d: "M18.8153 17.4951L17.6672 14.7235L16.2814 15.2975L17.4295 18.0691L18.8153 17.4951Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        d: "M12.7494 19.0001V16.0001H11.2494V19.0001L12.7494 19.0001Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        d: "M7.71748 15.2975L6.56943 18.0692L5.18361 17.4951L6.33166 14.7235L7.71748 15.2975Z",
                        fill: "currentcolor"
                    })]
                }),
                $ = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M15.9995 12C15.9995 14.2091 14.2087 16 11.9995 16C9.79037 16 7.99951 14.2091 7.99951 12C7.99951 9.79086 9.79037 8 11.9995 8C14.2087 8 15.9995 9.79086 15.9995 12ZM14.4995 12C14.4995 13.3807 13.3802 14.5 11.9995 14.5C10.6188 14.5 9.49951 13.3807 9.49951 12C9.49951 10.6193 10.6188 9.5 11.9995 9.5C13.3802 9.5 14.4995 10.6193 14.4995 12Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.9995 5C16.8425 5 21.0155 7.86896 22.9115 12C21.0155 16.1311 16.8426 19 11.9996 19C7.15658 19 2.98365 16.131 1.08765 12C2.98367 7.86892 7.15657 5 11.9995 5ZM11.9996 17.5C8.01299 17.5 4.54253 15.2782 2.76382 12C4.54254 8.72175 8.01298 6.5 11.9995 6.5C15.9861 6.5 19.4566 8.72178 21.2353 12C19.4566 15.2783 15.9861 17.5 11.9996 17.5Z",
                        fill: "currentcolor"
                    })]
                }),
                q = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.5938 2H13.1115V9.25H19.287L13.1961 22H11.6784V14.75H5.50293L11.5938 2ZM7.82181 13.25H13.1115V18.8229L16.9681 10.75H11.6784V5.17705L7.82181 13.25Z",
                        fill: "currentcolor"
                    })
                }),
                J = e => (0, a.jsx)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M16.712 3.399a2.75 2.75 0 113.889 3.889l-3.207 3.207 2.475 7.425-2.707 2.707-4.243-5.657-2.596 2.596.707 2.122-2.273 2.272-6.717-6.717 2.272-2.273 2.122.707 2.596-2.596-5.657-4.243L6.08 4.131l7.425 2.475 3.207-3.207zm2.829 1.06a1.25 1.25 0 00-1.768 0L13.91 8.323 6.485 5.848l-.828.828 5.656 4.243-4.474 4.475-2.122-.708-.556.557 4.596 4.596.557-.556-.708-2.122 4.475-4.474 4.243 5.656.828-.828-2.474-7.425 3.863-3.863a1.25 1.25 0 000-1.768z"
                    })
                }),
                Q = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M5.5 3.5h13V10H20V3.5A1.5 1.5 0 0018.5 2h-13A1.5 1.5 0 004 3.5v17A1.5 1.5 0 005.5 22H10v-1.5H5.5v-17z"
                    }), (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.25 11.69L12 18.94V22h3.06l7.25-7.25-3.06-3.06zm-5.44 7.56l5.44-5.44.94.94-5.44 5.44-.94-.94z"
                    }), (0, a.jsx)("path", {
                        d: "M11.25 8a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM13.97 6.97l-5 5 1.06 1.06 5-5-1.06-1.06zM15.25 12a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
                    })]
                }),
                X = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.5002 12C16.5002 14.4853 14.4855 16.5 12.0002 16.5C9.51496 16.5 7.50024 14.4853 7.50024 12C7.50024 9.51472 9.51496 7.5 12.0002 7.5C14.4855 7.5 16.5002 9.51472 16.5002 12ZM15.0002 12C15.0002 13.6569 13.6571 15 12.0002 15C10.3434 15 9.00024 13.6569 9.00024 12C9.00024 10.3431 10.3434 9 12.0002 9C13.6571 9 15.0002 10.3431 15.0002 12Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.87946 4.1861C8.46348 4.55489 9.23663 4.23464 9.38881 3.5609L9.54287 2.87887C9.62699 2.5065 9.91509 2.21018 10.2913 2.14541C10.8466 2.04981 11.4175 2 12 2C12.5827 2 13.1538 2.04984 13.7092 2.1455C14.0854 2.21029 14.3735 2.5066 14.4576 2.87896L14.6117 3.5609C14.7639 4.23464 15.537 4.55489 16.121 4.1861L16.7112 3.81341C17.034 3.60957 17.4473 3.60381 17.7592 3.82393C18.6965 4.48534 19.5149 5.30384 20.1763 6.24112C20.3964 6.55304 20.3906 6.9663 20.1868 7.28909L19.8141 7.87922C19.4454 8.46323 19.7656 9.23638 20.4393 9.38857L21.1211 9.54256C21.4934 9.62667 21.7898 9.91476 21.8545 10.291C21.9502 10.8463 22 11.4173 22 12C22 12.5827 21.9502 13.1537 21.8545 13.709C21.7898 14.0852 21.4934 14.3733 21.1211 14.4574L20.4393 14.6114C19.7656 14.7636 19.4454 15.5368 19.8141 16.1208L20.1868 16.7109C20.3906 17.0337 20.3964 17.447 20.1763 17.7589C19.5149 18.6962 18.6965 19.5147 17.7592 20.1761C17.4473 20.3962 17.034 20.3904 16.7112 20.1866L16.121 19.8139C15.537 19.4451 14.7639 19.7654 14.6117 20.4391L14.4576 21.121C14.3735 21.4934 14.0854 21.7897 13.7092 21.8545C13.1538 21.9502 12.5827 22 12 22C11.4175 22 10.8466 21.9502 10.2913 21.8546C9.91509 21.7898 9.62699 21.4935 9.54287 21.1211L9.38881 20.4391C9.23663 19.7654 8.46348 19.4451 7.87946 19.8139L7.28903 20.1867C6.96623 20.3906 6.55297 20.3964 6.24104 20.1762C5.30382 19.5149 4.48537 18.6965 3.82398 17.7593C3.60385 17.4474 3.60962 17.0341 3.81346 16.7113L4.18634 16.1208C4.55513 15.5368 4.23488 14.7636 3.56114 14.6114L2.87891 14.4573C2.50654 14.3732 2.21022 14.0851 2.14544 13.7089C2.04982 13.1536 2 12.5826 2 12C2 11.4174 2.04982 10.8464 2.14544 10.2911C2.21022 9.91489 2.50654 9.62679 2.87891 9.54268L3.56114 9.38857C4.23488 9.23638 4.55513 8.46323 4.18634 7.87922L3.81346 7.28873C3.60962 6.96592 3.60385 6.55265 3.82398 6.24072C4.48537 5.30352 5.30382 4.4851 6.24104 3.82375C6.55297 3.60364 6.96623 3.60941 7.28903 3.81325L7.87946 4.1861ZM6.79792 5.27717C6.22937 5.71786 5.71811 6.22911 5.27739 6.79764L5.45463 7.07832C6.37661 8.53836 5.57599 10.4712 3.89164 10.8517L3.56717 10.925C3.52289 11.2765 3.5 11.6353 3.5 12C3.5 12.3647 3.52289 12.7235 3.56717 13.075L3.89164 13.1483C5.57599 13.5288 6.37661 15.4616 5.45463 16.9217L5.27739 17.2024C5.71811 17.7709 6.22937 18.2821 6.79792 18.7228L7.07857 18.5456C8.53861 17.6236 10.4715 18.4243 10.852 20.1086L10.9252 20.4329C11.2767 20.4771 11.6353 20.5 12 20.5C12.3648 20.5 12.7237 20.4771 13.0753 20.4328L13.1485 20.1086C13.529 18.4243 15.4619 17.6236 16.9219 18.5456L17.2023 18.7227C17.7709 18.2819 18.2822 17.7706 18.7229 17.202L18.5459 16.9217C17.6239 15.4616 18.4245 13.5288 20.1088 13.1483L20.4328 13.0751C20.4771 12.7236 20.5 12.3648 20.5 12C20.5 11.6352 20.4771 11.2764 20.4328 10.9249L20.1088 10.8517C18.4245 10.4712 17.6239 8.53836 18.5459 7.07832L18.7229 6.79799C18.2822 6.22939 17.7709 5.71808 17.2023 5.27734L16.9219 5.45439C15.4619 6.37637 13.529 5.57574 13.1485 3.8914L13.0753 3.56721C12.7237 3.5229 12.3648 3.5 12 3.5C11.6353 3.5 11.2767 3.52288 10.9252 3.56714L10.852 3.8914C10.4715 5.57575 8.53861 6.37637 7.07857 5.45439L6.79792 5.27717Z",
                        fill: "currentcolor"
                    })]
                }),
                ee = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.0001 22.5001C15.1716 22.5001 14.5001 21.8285 14.5001 21.0001V19.5001C14.5001 18.6717 15.1716 18.0001 16.0001 18.0001H32.0001C32.8285 18.0001 33.5001 18.6717 33.5001 19.5001V21.0001C33.5001 21.8285 32.8285 22.5001 32.0001 22.5001V31.5001C32.0001 32.3285 31.3285 33.0001 30.5001 33.0001H17.5001C16.6716 33.0001 16.0001 32.3285 16.0001 31.5001L16.0001 22.5001ZM16.0001 19.5001H32.0001V21.0001H16.0001L16.0001 19.5001ZM30.5001 22.5001H17.5001V31.5001H30.5001V22.5001Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M20.2501 17.2501C20.2501 16.0075 21.2574 15.0001 22.5001 15.0001C23.0763 15.0001 23.602 15.2168 24.0001 15.573C24.3981 15.2168 24.9238 15.0001 25.5001 15.0001C26.7427 15.0001 27.7501 16.0075 27.7501 17.2501C27.7501 18.4928 26.7427 19.5001 25.5001 19.5001H24.7501V33.0001H23.2501V19.5001H22.5001C21.2574 19.5001 20.2501 18.4928 20.2501 17.2501ZM23.2501 18.0001V17.2501C23.2501 16.8359 22.9143 16.5001 22.5001 16.5001C22.0858 16.5001 21.7501 16.8359 21.7501 17.2501C21.7501 17.6643 22.0858 18.0001 22.5001 18.0001H23.2501ZM24.7501 17.2501V18.0001H25.5001C25.9143 18.0001 26.2501 17.6643 26.2501 17.2501C26.2501 16.8359 25.9143 16.5001 25.5001 16.5001C25.0858 16.5001 24.7501 16.8359 24.7501 17.2501Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        })]
                    })
                },
                te = e => (0, a.jsx)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-18.467-.75h4.01a13.43 13.43 0 012.878-7.604 8.504 8.504 0 00-6.888 7.604zm4.01 1.5h-4.01a8.504 8.504 0 006.888 7.604 13.43 13.43 0 01-2.878-7.604zm1.502 0h5.91A11.935 11.935 0 0112 19.904a11.929 11.929 0 01-2.955-7.154zm5.91-1.5h-5.91A11.929 11.929 0 0112 4.096a11.935 11.935 0 012.955 7.154zm1.502 1.5a13.424 13.424 0 01-2.879 7.604 8.504 8.504 0 006.889-7.604h-4.01zm4.01-1.5h-4.01a13.424 13.424 0 00-2.879-7.604 8.504 8.504 0 016.889 7.604z"
                    })
                }),
                re = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 33V17.5C14 16.6716 14.6716 16 15.5 16H32.5C33.3284 16 34 16.6716 34 17.5V28.5C34 29.3284 33.3284 30 32.5 30H17L14 33ZM16.3787 28.5H32.5V17.5H15.5V29.3787L16.3787 28.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21.4393 20.9393C22.0251 20.3536 22.9749 20.3536 23.5607 20.9393L24 21.3787L24.4393 20.9393C25.0251 20.3536 25.9749 20.3536 26.5607 20.9393C27.1464 21.5251 27.1464 22.4749 26.5607 23.0607L24 25.6213L21.4393 23.0607C20.8536 22.4749 20.8536 21.5251 21.4393 20.9393Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        })]
                    })
                },
                ne = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                fill: t ? "#22403A" : "#E8F2EE",
                                d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z"
                            }), (0, a.jsxs)("g", {
                                fillRule: "nonzero",
                                children: [(0, a.jsx)("path", {
                                    stroke: t ? "#D9D9D9" : "#1B1B1B",
                                    strokeWidth: "1.5",
                                    d: "M31 18.75H17A1.247 1.247 0 0015.75 20v5.75h16.5V20A1.247 1.247 0 0031 18.75zm1 7H16A1.247 1.247 0 0014.75 27v3.25h18.5V27A1.247 1.247 0 0032 25.75z"
                                }), (0, a.jsx)("path", {
                                    fill: t ? "#D9D9D9" : "#1B1B1B",
                                    d: "M15 31h1.5v1.5H15zm16.5 0H33v1.5h-1.5z"
                                }), (0, a.jsx)("path", {
                                    fill: t ? "#82C4B2" : "#36A18B",
                                    d: "M25 22h5v3h-5zm-7 0h5v3h-5z"
                                })]
                            })]
                        })
                    })
                },
                ie = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("circle", {
                            cx: "24",
                            cy: "24",
                            r: "24",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            d: "M20.0323 29C21.8065 29 22.9032 28.1964 24 26.4929C24.8387 27.9071 26.129 29 27.9677 29C30.2903 29 32 27.0393 32 24.4679C32 21.8643 30.3871 20 27.9677 20C26.1935 20 25.0968 20.8036 24 22.5071C23.1613 21.0929 21.871 20 20.0323 20C17.7097 20 16 21.9607 16 24.5321C16 27.1357 17.6129 29 20.0323 29ZM27.7097 22.3143C29.0323 22.3143 29.7097 23.2464 29.7097 24.5C29.7097 25.7857 29.0323 26.6857 27.8065 26.6857C26.5806 26.6857 25.9355 25.9464 25.129 24.4679C25.871 23.0857 26.3871 22.3143 27.7097 22.3143ZM20.1935 22.3143C21.4194 22.3143 22.0645 23.0536 22.871 24.5321C22.129 25.9143 21.6129 26.6857 20.2903 26.6857C18.9677 26.6857 18.2903 25.7536 18.2903 24.5C18.2903 23.2143 18.9677 22.3143 20.1935 22.3143Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                ae = e => (0, a.jsx)("svg", {
                    fill: "none",
                    viewBox: "0 0 16 16",
                    ...e,
                    children: (0, a.jsx)("path", {
                        fill: "currentcolor",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8 16A8 8 0 108 0a8 8 0 000 16zM6 5.75h2.75v5.5H10v1.5H6v-1.5h1.25v-4H6v-1.5zM8 5a1 1 0 100-2 1 1 0 000 2z"
                    })
                }),
                oe = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 28 28",
                    ...e,
                    children: (0, a.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, a.jsx)("circle", {
                            stroke: "currentcolor",
                            cx: "14",
                            cy: "14",
                            r: "11"
                        }), (0, a.jsx)("circle", {
                            fill: "currentcolor",
                            fillRule: "nonzero",
                            cx: "14",
                            cy: "9.5",
                            r: "1"
                        }), (0, a.jsx)("path", {
                            fill: "currentcolor",
                            fillRule: "nonzero",
                            d: "M13 12h2v8h-2z"
                        })]
                    })
                });
            const se = function(e) {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            d: "M24 20.25a1 1 0 100-2 1 1 0 000 2z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        }), (0, a.jsx)("path", {
                            d: "M22 21.5h2.75V28H26v1.5h-4V28h1.25v-5H22v-1.5z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M34 24c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm-10 8.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                le = e => (0, a.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 22 16",
                    fill: "none",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        fill: "currentcolor",
                        d: "M10.25 0V16H11.75V0H10.25Z"
                    }), (0, a.jsx)("path", {
                        fill: "currentcolor",
                        d: "M2.81066 8.75L5.53033 11.4697L4.46967 12.5303L0.46967 8.53033C0.329018 8.38967 0.25 8.19891 0.25 8C0.25 7.80108 0.329018 7.61032 0.46967 7.46967L4.46967 3.46967L5.53033 4.53033L2.81066 7.25L8.75 7.25V8.75H2.81066Z"
                    }), (0, a.jsx)("path", {
                        fill: "currentcolor",
                        d: "M19.1893 7.25L16.4697 4.53033L17.5303 3.46968L21.5303 7.46967C21.671 7.61033 21.75 7.80109 21.75 8C21.75 8.19892 21.671 8.38968 21.5303 8.53033L17.5303 12.5303L16.4697 11.4697L19.1893 8.75H13.25V7.25L19.1893 7.25Z"
                    })]
                }),
                de = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.5 12.5V11H7v1.5H5.5V8.25a2.25 2.25 0 014.5 0v4.25H8.5zm0-4.25V9.5H7V8.25a.75.75 0 011.5 0z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 3H3.5A1.5 1.5 0 002 4.5v10A1.5 1.5 0 003.5 16H12a1.5 1.5 0 001.5-1.5v-10A1.5 1.5 0 0012 3zM3.5 4.5H12v10H3.5v-10z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M15 8v1.5h5.5v10H12v-2h-1.5v2A1.5 1.5 0 0012 21h8.5a1.5 1.5 0 001.5-1.5v-10A1.5 1.5 0 0020.5 8H15z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M17 12v-1h-1.5v1H14v1.5h3c0 .76-.283 1.455-.75 1.984a2.998 2.998 0 01-.58-.984h-1.559c.155.681.464 1.304.89 1.83-.313.11-.65.17-1.001.17V18c.82 0 1.588-.22 2.25-.602A4.48 4.48 0 0018.5 18v-1.5c-.35 0-.688-.06-1-.17.625-.774 1-1.758 1-2.83V12H17z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                ce = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21.5 14.25C17.4959 14.25 14.25 17.4959 14.25 21.5C14.25 25.5041 17.4959 28.75 21.5 28.75C23.2319 28.75 24.8219 28.1427 26.0689 27.1295L31.5 32.5607L32.5607 31.5L27.1295 26.0689C28.1427 24.8219 28.75 23.2319 28.75 21.5C28.75 17.4959 25.5041 14.25 21.5 14.25ZM15.75 21.5C15.75 18.3244 18.3244 15.75 21.5 15.75C24.6756 15.75 27.25 18.3244 27.25 21.5C27.25 24.6756 24.6756 27.25 21.5 27.25C18.3244 27.25 15.75 24.6756 15.75 21.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M23.9697 18.7197L25.0303 19.7804L21.0303 23.7804C20.7374 24.0733 20.2626 24.0733 19.9697 23.7804L17.9697 21.7804L19.0303 20.7197L20.5 22.1894L23.9697 18.7197Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        })]
                    })
                },
                ue = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M23.5875 47.0735C36.5825 47.0735 47.1169 36.539 47.1169 23.5441C47.1169 10.5491 36.5825 0.0146484 23.5875 0.0146484C10.5926 0.0146484 0.0581055 10.5491 0.0581055 23.5441C0.0581055 36.539 10.5926 47.0735 23.5875 47.0735Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M20.0623 27.9377C16.6397 27.4795 14 24.548 14 21C14 17.134 17.134 14 21 14C24.548 14 27.4795 16.6397 27.9377 20.0623C31.3603 20.5205 34 23.452 34 27C34 30.866 30.866 34 27 34C23.452 34 20.5205 31.3603 20.0623 27.9377ZM20.0242 26.4137C20.306 23.0154 23.0154 20.306 26.4137 20.0242C25.9532 17.4521 23.7046 15.5 21 15.5C17.9624 15.5 15.5 17.9624 15.5 21C15.5 23.7046 17.4521 25.9532 20.0242 26.4137ZM21.5863 27.9758C22.0468 30.5479 24.2954 32.5 27 32.5C30.0376 32.5 32.5 30.0376 32.5 27C32.5 24.2954 30.5479 22.0468 27.9758 21.5863C27.694 24.9846 24.9846 27.694 21.5863 27.9758ZM26.4753 21.5247C23.8566 21.7725 21.7725 23.8566 21.5247 26.4753C24.1434 26.2275 26.2275 24.1434 26.4753 21.5247Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21.5247 26.4753C21.7725 23.8566 23.8566 21.7725 26.4753 21.5247C26.2275 24.1434 24.1434 26.2275 21.5247 26.4753ZM20.0623 27.9377C20.0212 27.631 20 27.318 20 27C20 23.134 23.134 20 27 20C27.318 20 27.631 20.0212 27.9377 20.0623C27.9788 20.369 28 20.682 28 21C28 24.866 24.866 28 21 28C20.682 28 20.369 27.9788 20.0623 27.9377Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        })]
                    })
                },
                he = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            xmlns: "http://www.w3.org/2000/svg",
                            d: "M48,24 C48,37.254 37.2557,48 24.0007,48 C10.7457,48 0,37.254 0,24 C0,10.7446 10.7457,0 24.0007,0 C37.2557,0 48,10.7446 48,24 Z",
                            fillOpacity: "0.2",
                            fill: "#36A18B"
                        }), (0, a.jsxs)("g", {
                            strokeWidth: "1.5",
                            fillRule: "nonzero",
                            transform: "translate(16.000000, 14.000000)",
                            children: [(0, a.jsx)("rect", {
                                stroke: t ? "#D9D9D9" : "#1B1B1B",
                                x: "0.75",
                                y: "0.75",
                                width: "14.5",
                                height: "18.5",
                                rx: "0.75",
                                fill: "none"
                            }), (0, a.jsx)("line", {
                                x1: "6.5",
                                y1: "6",
                                x2: "12.5",
                                y2: "6",
                                stroke: t ? "#D9D9D9" : "#1B1B1B"
                            }), (0, a.jsx)("circle", {
                                fill: t ? "#82C4B2" : "#36A18B",
                                cx: "4.5",
                                cy: "6",
                                r: "1"
                            }), (0, a.jsx)("line", {
                                x1: "6.5",
                                y1: "10",
                                x2: "12.5",
                                y2: "10",
                                stroke: t ? "#D9D9D9" : "#1B1B1B"
                            }), (0, a.jsx)("circle", {
                                fill: t ? "#82C4B2" : "#36A18B",
                                cx: "4.5",
                                cy: "10",
                                r: "1"
                            }), (0, a.jsx)("line", {
                                x1: "6.5",
                                y1: "14",
                                x2: "12.5",
                                y2: "14",
                                stroke: t ? "#D9D9D9" : "#1B1B1B"
                            }), (0, a.jsx)("circle", {
                                fill: t ? "#82C4B2" : "#36A18B",
                                cx: "4.5",
                                cy: "14",
                                r: "1"
                            })]
                        })]
                    })
                },
                pe = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, a.jsx)("g", {
                            fill: "currentcolor",
                            children: (0, a.jsx)("g", {
                                children: (0, a.jsx)("g", {
                                    children: (0, a.jsx)("path", {
                                        d: "M12.107.44c.585-.586 1.535-.586 2.12 0l4.597 4.596c.586.585.586 1.535 0 2.12l-3.889 3.89c-.586.586-1.535.586-2.121 0l-.884-.884 1.06-1.06.884.883 3.89-3.889L13.166 1.5 9.278 5.39l.884.883-1.06 1.06-.884-.883c-.586-.586-.586-1.536 0-2.122L12.107.44zM5.212 12.99l7.779-7.778 1.06 1.061-7.778 7.778-1.06-1.06zm-.884-4.772c.586-.586 1.536-.586 2.122 0l.884.883-1.061 1.061-.884-.884-3.889 3.89 4.596 4.595 3.89-3.889-.885-.883 1.061-1.061.884.884c.586.586.586 1.535 0 2.121l-3.89 3.89c-.585.585-1.535.585-2.12 0L.439 14.227c-.585-.586-.585-1.536 0-2.121l3.89-3.89z",
                                        transform: "translate(-605 -806) translate(605 806) translate(2.368 2.368)"
                                    })
                                })
                            })
                        })
                    })
                }),
                ve = e => (0, a.jsxs)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M12.75 17.049a1.5 1.5 0 10-1.5 0V18.5h1.5v-1.451z"
                    }), (0, a.jsx)("path", {
                        d: "M7 10.5V7a5 5 0 0110 0v3.5h.5A1.5 1.5 0 0119 12v9a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 015 21v-9a1.5 1.5 0 011.5-1.5H7zM15.5 7v3.5h-7V7a3.5 3.5 0 117 0zm-9 5v9h11v-9h-11z"
                    })]
                }),
                Ce = e => (0, a.jsxs)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 2.25C9.37665 2.25 7.25 4.37665 7.25 7H8.75C8.75 5.20507 10.2051 3.75 12 3.75C13.7949 3.75 15.25 5.20507 15.25 7V10H6.5C5.67157 10 5 10.6716 5 11.5V20.5C5 21.3284 5.67157 22 6.5 22H17.5C18.3284 22 19 21.3284 19 20.5V11.5C19 10.6716 18.3284 10 17.5 10H16.75V7C16.75 4.37665 14.6234 2.25 12 2.25ZM6.5 20.5L6.5 11.5H17.5V20.5H6.5Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        d: "M12.75 16.5493C13.1984 16.29 13.5 15.8052 13.5 15.25C13.5 14.4216 12.8284 13.75 12 13.75C11.1716 13.75 10.5 14.4216 10.5 15.25C10.5 15.8052 10.8016 16.29 11.25 16.5493V18H12.75V16.5493Z",
                        fill: "currentcolor"
                    })]
                }),
                fe = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#4A3D29" : "#F2ECE1"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M27.5 22V18.5C27.5 16.567 25.933 15 24 15C22.067 15 20.5 16.567 20.5 18.5H19C19 15.7386 21.2386 13.5 24 13.5C26.7614 13.5 29 15.7386 29 18.5V22H29.5C30.3284 22 31 22.6716 31 23.5V32.5C31 33.3284 30.3284 34 29.5 34H18.5C17.6716 34 17 33.3284 17 32.5V23.5C17 22.6716 17.6716 22 18.5 22H27.5ZM18.5 23.5L18.5 32.5H29.5V23.5H18.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M24.75 28.5493C25.1984 28.29 25.5 27.8052 25.5 27.25C25.5 26.4216 24.8284 25.75 24 25.75C23.1716 25.75 22.5 26.4216 22.5 27.25C22.5 27.8052 22.8016 28.29 23.25 28.5493V30H24.75V28.5493Z",
                            fill: t ? "#D6B17D" : "#C89D58"
                        })]
                    })
                },
                ge = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19 22V18.5C19 15.7386 21.2386 13.5 24 13.5C26.7614 13.5 29 15.7386 29 18.5V22H29.5C30.3284 22 31 22.6716 31 23.5V32.5C31 33.3284 30.3284 34 29.5 34H18.5C17.6716 34 17 33.3284 17 32.5V23.5C17 22.6716 17.6716 22 18.5 22H19ZM27.5 18.5V22H20.5V18.5C20.5 16.567 22.067 15 24 15C25.933 15 27.5 16.567 27.5 18.5ZM18.5 23.5V32.5H29.5V23.5H18.5Z"
                        }), (0, a.jsx)("path", {
                            d: "M24.75 28.5493C25.1984 28.29 25.5 27.8052 25.5 27.25C25.5 26.4216 24.8284 25.75 24 25.75C23.1716 25.75 22.5 26.4216 22.5 27.25C22.5 27.8052 22.8016 28.29 23.25 28.5493V30H24.75V28.5493Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        })]
                    })
                },
                me = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z",
                            fill: t ? "#182B31" : "#E9EEF2"
                        }), (0, a.jsx)("path", {
                            d: "M28.53 24.53a.75.75 0 000-1.061l-4-4-1.06 1.06 2.72 2.72H15v1.5h11.19l-2.72 2.72 1.06 1.06 4-4z",
                            fill: t ? "#79A1AD" : "#2B697A"
                        }), (0, a.jsx)("path", {
                            d: "M20.5 16.5h11v15h-11V27H19v4.5a1.5 1.5 0 001.5 1.5h11a1.5 1.5 0 001.5-1.5v-15a1.5 1.5 0 00-1.5-1.5h-11a1.5 1.5 0 00-1.5 1.5V21h1.5v-4.5z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                xe = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 44 44",
                        ...e,
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("circle", {
                                cx: "22",
                                cy: "22",
                                r: "22",
                                fill: t ? "#D6B17D" : "#C89D58"
                            }), (0, a.jsxs)("g", {
                                fill: "#FFF",
                                fillRule: "nonzero",
                                children: [(0, a.jsx)("path", {
                                    d: "M25.348 15.248v9.236c0 .818.019 1.312.057 1.788h-.038c-.2-.545-.436-1.022-.787-1.643l-5.463-9.381H16.62v13.501h1.945v-9.237c0-.818-.019-1.312-.056-1.788h.04c.2.545.435 1.022.787 1.642l5.46 9.383h2.47V15.248h-1.918zM27.388 32.248v1.75H16.5v-1.75zM27.388 10v1.75H16.5V10z"
                                }), (0, a.jsx)("path", {
                                    d: "M25.348 15.248v9.236c0 .818.019 1.312.057 1.788h-.038c-.2-.545-.436-1.022-.787-1.643l-5.463-9.381H16.62v13.501h1.945v-9.237c0-.818-.019-1.312-.056-1.788h.04c.2.545.435 1.022.787 1.642l5.46 9.383h2.47V15.248h-1.918z"
                                })]
                            })]
                        })
                    })
                },
                ye = e => (0, a.jsx)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M8.5 5v1.5h-5A1.5 1.5 0 002 8v11a1.5 1.5 0 001.5 1.5h17A1.5 1.5 0 0022 19V8a1.5 1.5 0 00-1.5-1.5h-5V5A1.5 1.5 0 0014 3.5h-4A1.5 1.5 0 008.5 5zM14 5h-4v1.5h4V5zm3.5 3v11h-11V8h11zM5 8H3.5v11H5V8zm14 11h1.5V8H19v11z"
                    })
                }),
                be = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 25",
                    ...e,
                    children: (0, a.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        stroke: "currentcolor",
                        strokeWidth: "1.5",
                        transform: "translate(3 3)",
                        children: [(0, a.jsx)("circle", {
                            cx: "7.5",
                            cy: "7.5",
                            r: "6.75"
                        }), (0, a.jsx)("path", {
                            strokeLinecap: "square",
                            d: "M12.417 12.417L17 17"
                        })]
                    })
                }),
                Re = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z",
                                fill: t ? "#22403A" : "#E8F2EE"
                            }), (0, a.jsx)("path", {
                                d: "M33.28 16.67H14.84C13.8238 16.67 13 17.4938 13 18.51V29.5C13 30.5162 13.8238 31.34 14.84 31.34H33.28C34.2962 31.34 35.12 30.5162 35.12 29.5V18.51C35.12 17.4938 34.2962 16.67 33.28 16.67Z",
                                stroke: t ? "#D9D9D9" : "#1B1B1B",
                                strokeWidth: "1.5",
                                strokeMiterlimit: "10"
                            }), (0, a.jsx)("path", {
                                d: "M30.54 28.63C31.4789 28.63 32.24 27.8689 32.24 26.93C32.24 25.9911 31.4789 25.23 30.54 25.23C29.6011 25.23 28.84 25.9911 28.84 26.93C28.84 27.8689 29.6011 28.63 30.54 28.63Z",
                                fill: t ? "#82C4B2" : "#36A18B"
                            }), (0, a.jsx)("path", {
                                d: "M27.67 28.63C28.6089 28.63 29.37 27.8689 29.37 26.93C29.37 25.9911 28.6089 25.23 27.67 25.23C26.7311 25.23 25.97 25.9911 25.97 26.93C25.97 27.8689 26.7311 28.63 27.67 28.63Z",
                                fill: t ? "#82C4B2" : "#36A18B"
                            }), (0, a.jsx)("path", {
                                d: "M15.83 26.93H20.44",
                                stroke: t ? "#D9D9D9" : "#1B1B1B",
                                strokeWidth: "1.5",
                                strokeMiterlimit: "10"
                            }), (0, a.jsx)("path", {
                                d: "M13 20.59H35.12",
                                stroke: t ? "#D9D9D9" : "#1B1B1B",
                                strokeWidth: "1.5",
                                strokeMiterlimit: "10"
                            })]
                        })
                    })
                },
                Ee = e => (0, a.jsxs)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M11.5 10.5a1 1 0 11-2 0 1 1 0 012 0zM10.5 14.5a1 1 0 100-2 1 1 0 000 2zM14.5 10.5a1 1 0 11-2 0 1 1 0 012 0zM13.5 14.5a1 1 0 100-2 1 1 0 000 2z"
                    }), (0, a.jsx)("path", {
                        d: "M7 17v3.5A1.5 1.5 0 008.5 22h7a1.5 1.5 0 001.5-1.5V17h3.5a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0020.5 7H17V3.5A1.5 1.5 0 0015.5 2h-7A1.5 1.5 0 007 3.5V7H3.5A1.5 1.5 0 002 8.5v7A1.5 1.5 0 003.5 17H7zm8.5 0h-7v3.5h7V17zm-7-10h7V3.5h-7V7zm-5 1.5h17v7h-17v-7z"
                    })]
                }),
                je = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        fill: "none",
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsxs)("g", {
                            clipPath: "url(#clip0)",
                            children: [(0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24",
                                fill: t ? "white" : "#1B1B1B",
                                fillOpacity: "0.05"
                            }), (0, a.jsx)("path", {
                                d: "M40 48C44.4183 48 48 44.4183 48 40C48 35.5817 44.4183 32 40 32C35.5817 32 32 35.5817 32 40C32 44.4183 35.5817 48 40 48Z",
                                fill: "#B35D5B",
                                stroke: t ? "#2D2D2D" : "white",
                                strokeWidth: "2"
                            }), (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M43.5109 37.5607L37.5109 43.5607L36.4502 42.5L42.4502 36.5L43.5109 37.5607Z",
                                fill: t ? "#1B1B1B" : "white"
                            }), (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M42.4502 43.5607L36.4502 37.5607L37.5109 36.5L43.5109 42.5L42.4502 43.5607Z",
                                fill: t ? "#1B1B1B" : "white"
                            }), (0, a.jsx)("path", {
                                d: "M15.5 30C14.6716 30 14 29.3284 14 28.5V19.5C14 18.6716 14.6716 18 15.5 18H32.5C33.3284 18 34 18.6716 34 19.5V22H32.5V19.5H15.5V28.5H26V30H15.5Z",
                                fill: t ? "#D9D9D9" : "#1B1B1B"
                            }), (0, a.jsx)("path", {
                                d: "M26 24C26 25.1046 25.1046 26 24 26C22.8954 26 22 25.1046 22 24C22 22.8954 22.8954 22 24 22C25.1046 22 26 22.8954 26 24Z",
                                fill: t ? "#D9D9D9" : "#1B1B1B"
                            }), (0, a.jsx)("path", {
                                d: "M31.5 26.7929V25H30.5V27.2071L31.6464 28.3536L32.3536 27.6464L31.5 26.7929Z",
                                fill: t ? "#D9D9D9" : "#1B1B1B"
                            }), (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M31 31C33.2091 31 35 29.2091 35 27C35 24.7909 33.2091 23 31 23C28.7909 23 27 24.7909 27 27C27 29.2091 28.7909 31 31 31ZM31 29.5C32.3807 29.5 33.5 28.3807 33.5 27C33.5 25.6193 32.3807 24.5 31 24.5C29.6193 24.5 28.5 25.6193 28.5 27C28.5 28.3807 29.6193 29.5 31 29.5Z",
                                fill: t ? "#D9D9D9" : "#1B1B1B"
                            })]
                        }), (0, a.jsx)("defs", {
                            children: (0, a.jsx)("clipPath", {
                                id: "clip0",
                                children: (0, a.jsx)("rect", {
                                    width: "48",
                                    height: "48",
                                    fill: "white"
                                })
                            })
                        })]
                    })
                },
                _e = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                opacity: "0.15",
                                d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z",
                                fill: t ? "#82C4B2" : "#36A18B"
                            }), (0, a.jsx)("path", {
                                d: "M20 26.3605H15.82C15.3496 26.3712 14.894 26.1953 14.553 25.8711C14.2119 25.5469 14.0131 25.1008 14 24.6305V15.7305C14.0131 15.2601 14.2119 14.814 14.553 14.4899C14.894 14.1657 15.3496 13.9897 15.82 14.0005H34.14C34.6105 13.9897 35.066 14.1657 35.4071 14.4899C35.7481 14.814 35.9469 15.2601 35.96 15.7305V24.6305C35.9469 25.1008 35.7481 25.5469 35.4071 25.8711C35.066 26.1953 34.6105 26.3712 34.14 26.3605H30",
                                stroke: t ? "#D9D9D9" : "#1B1B1B",
                                strokeWidth: "2",
                                strokeMiterlimit: "10"
                            }), (0, a.jsx)("path", {
                                d: "M24.56 22.96C25.9573 22.96 27.09 21.8273 27.09 20.43C27.09 19.0327 25.9573 17.9 24.56 17.9C23.1627 17.9 22.03 19.0327 22.03 20.43C22.03 21.8273 23.1627 22.96 24.56 22.96Z",
                                fill: t ? "#D9D9D9" : "#1B1B1B"
                            }), (0, a.jsx)("path", {
                                d: "M25 25.47V34.75",
                                stroke: t ? "#82C4B2" : "#36A18B",
                                strokeWidth: "2",
                                strokeMiterlimit: "10"
                            }), (0, a.jsx)("path", {
                                d: "M21.5 32L24.8586 35.3586C24.9367 35.4367 25.0633 35.4367 25.1414 35.3586L28.5 32",
                                stroke: t ? "#82C4B2" : "#36A18B",
                                strokeWidth: "2"
                            })]
                        })
                    })
                },
                Ae = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                opacity: "0.15",
                                d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z",
                                fill: t ? "#82C4B2" : "#36A18B"
                            }), (0, a.jsx)("path", {
                                d: "M29 20.6395L33.18 20.6395C33.6504 20.6288 34.106 20.8047 34.447 21.1289C34.7881 21.4531 34.9869 21.8992 35 22.3695L35 31.2695C34.9869 31.7399 34.7881 32.186 34.447 32.5101C34.106 32.8343 33.6504 33.0103 33.18 32.9995L14.86 32.9995C14.3895 33.0103 13.934 32.8343 13.5929 32.5101C13.2519 32.186 13.0531 31.7399 13.04 31.2695L13.04 22.3695C13.0531 21.8992 13.2519 21.4531 13.5929 21.1289C13.934 20.8047 14.3895 20.6288 14.86 20.6395L19 20.6395",
                                stroke: t ? "#D9D9D9" : "#1B1B1B",
                                strokeWidth: "2",
                                strokeMiterlimit: "10"
                            }), (0, a.jsx)("path", {
                                d: "M24.44 24.04C23.0427 24.04 21.91 25.1727 21.91 26.57C21.91 27.9673 23.0427 29.1 24.44 29.1C25.8373 29.1 26.97 27.9673 26.97 26.57C26.97 25.1727 25.8373 24.04 24.44 24.04Z",
                                fill: t ? "#D9D9D9" : "#1B1B1B"
                            }), (0, a.jsx)("path", {
                                d: "M24 21.53L24 12.25",
                                stroke: t ? "#82C4B2" : "#36A18B",
                                strokeWidth: "2",
                                strokeMiterlimit: "10"
                            }), (0, a.jsx)("path", {
                                d: "M27.5 15L24.1414 11.6414C24.0633 11.5633 23.9367 11.5633 23.8586 11.6414L20.5 15",
                                stroke: t ? "#82C4B2" : "#36A18B",
                                strokeWidth: "2"
                            })]
                        })
                    })
                },
                ke = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                fill: t ? "#22403A" : "#E8F2EE",
                                d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z"
                            }), (0, a.jsx)("path", {
                                fill: "currentColor",
                                d: "M29 24a2 2 0 11-4 0 2 2 0 014 0z"
                            }), (0, a.jsx)("path", {
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                d: "M19 21.917v-1.25c0-.92.796-1.667 1.778-1.667h12.444c.982 0 1.778.746 1.778 1.667v6.666c0 .92-.796 1.667-1.778 1.667H20.778C19.796 29 19 28.254 19 27.333v-1.25h0"
                            }), (0, a.jsx)("path", {
                                stroke: t ? "#82C4B2" : "#36A18B",
                                strokeWidth: "1.5",
                                d: "M13 24h6m-8 3h5.5M11 21h5.5"
                            })]
                        })
                    })
                },
                Be = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 16 16",
                    fillRule: "evenodd",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM8.18934 9.25L4.46967 5.53033L5.53033 4.46967L9.25 8.18934V6H10.75V10V10.75H10H6V9.25H8.18934Z",
                        fill: "currentcolor"
                    })
                }),
                Le = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 16 16",
                    fillRule: "evenodd",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM9.25 7.81066L5.53033 11.5303L4.46967 10.4697L8.18934 6.75L6 6.75L6 5.25L10 5.25L10.75 5.25L10.75 6L10.75 10L9.25 10L9.25 7.81066Z",
                        fill: "currentcolor"
                    })
                }),
                Me = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 16 16",
                    fill: "none",
                    alignmentBaseline: "middle",
                    ...e,
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6.28 1.177A6.866 6.866 0 017.2 1c.38-.047.627.367.477.72a6.99 6.99 0 00.385 6.228 6.989 6.989 0 005.2 3.448c.382.047.618.467.386.774a6.965 6.965 0 01-.613.708h-.001a7 7 0 11-6.755-11.7zm-.523 1.777a8.469 8.469 0 001.006 5.744 8.47 8.47 0 004.471 3.744 5.5 5.5 0 11-5.478-9.488z",
                        fill: "currentcolor"
                    })
                }),
                Se = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                fill: t ? "#22403A" : "#E8F2EE",
                                d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z"
                            }), (0, a.jsxs)("g", {
                                fillRule: "nonzero",
                                transform: "translate(14 10)",
                                children: [(0, a.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M3.5 12.5h3v2h-3z"
                                }), (0, a.jsx)("rect", {
                                    width: "18.5",
                                    height: "12.5",
                                    x: ".75",
                                    y: "7.75",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    rx: "2"
                                }), (0, a.jsx)("path", {
                                    stroke: t ? "#82C4B2" : "#36A18B",
                                    strokeWidth: "1.5",
                                    d: "M21.409 6.341l3.182-3.182M22 10.5h4.5M17 5V.5"
                                })]
                            })]
                        })
                    })
                },
                Te = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fill: t ? "#4A3D29" : "#F2ECE1",
                            fillRule: "evenodd",
                            d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z",
                            clipRule: "evenodd"
                        }), (0, a.jsx)("path", {
                            fill: t ? "#D6B17D" : "#C89D58",
                            d: "M22 22h12v-1.5H22V22zM22 25h12v-1.5H22V25zM34 28H22v-1.5h12V28zM22 31h12v-1.5H22V31z"
                        }), (0, a.jsx)("path", {
                            fill: t ? "#D9D9D9" : "#1B1B1B",
                            fillRule: "evenodd",
                            d: "M21.5 14.25a7.25 7.25 0 104.569 12.88l5.431 5.43 1.06-1.06-5.43-5.431A7.25 7.25 0 0021.5 14.25zm-5.75 7.25a5.75 5.75 0 1111.5 0 5.75 5.75 0 01-11.5 0z",
                            clipRule: "evenodd"
                        })]
                    })
                },
                De = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#493231" : "#F2E8E8"
                        }), (0, a.jsx)("path", {
                            d: "M22.8537 18.4024C23.1494 17.8659 23.9204 17.8659 24.2161 18.4024L29.9721 28.8468C30.2578 29.3652 29.8828 30 29.2909 30H17.7789C17.187 30 16.812 29.3652 17.0977 28.8468L22.8537 18.4024Z",
                            fill: "#CB7C7A"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21.5 14.25C17.4959 14.25 14.25 17.4959 14.25 21.5C14.25 25.5041 17.4959 28.75 21.5 28.75C23.2319 28.75 24.8219 28.1427 26.0689 27.1295L31.5 32.5607L32.5607 31.5L27.1295 26.0689C28.1427 24.8219 28.75 23.2319 28.75 21.5C28.75 17.4959 25.5041 14.25 21.5 14.25ZM15.75 21.5C15.75 18.3244 18.3244 15.75 21.5 15.75C24.6756 15.75 27.25 18.3244 27.25 21.5C27.25 24.6756 24.6756 27.25 21.5 27.25C18.3244 27.25 15.75 24.6756 15.75 21.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                Oe = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                fill: t ? "#22403A" : "#E8F2EE",
                                d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z"
                            }), (0, a.jsx)("path", {
                                fill: t ? "#D9D9D9" : "#1B1B1B",
                                d: "M15.533 23.25h4.01a13.437 13.437 0 012.878-7.604 8.504 8.504 0 00-6.888 7.604zm4.01 1.5h-4.01a8.504 8.504 0 006.889 7.604 13.425 13.425 0 01-2.88-7.604zm1.502 0h5.91A11.929 11.929 0 0124 31.904a11.929 11.929 0 01-2.955-7.154zm5.91-1.5h-5.91A11.929 11.929 0 0124 16.096a11.929 11.929 0 012.955 7.154zm1.502 1.5a13.431 13.431 0 01-2.879 7.604 8.506 8.506 0 006.89-7.604h-4.01zm4.01-1.5h-4.01a13.431 13.431 0 00-2.879-7.604 8.506 8.506 0 016.89 7.604zM34 24c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z"
                            }), (0, a.jsx)("path", {
                                fill: t ? "#82C4B2" : "#36A18B",
                                fillRule: "nonzero",
                                d: "M30.965 35.903l1.884-2.54 2.007 2.867 2.458-1.72-2.008-2.868 3.031-.901-9.422-5.61z"
                            })]
                        })
                    })
                },
                we = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsx)("path", {
                        fill: "none",
                        fillRule: "nonzero",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        d: "M7 8.994V15.5c-.126 3 1.54 4.5 5 4.5s5.126-1.496 5-4.49V6.8c.052-1.867-1.114-2.8-3.5-2.8s-3.552.93-3.5 2.789v8.21C9.954 16.334 10.621 17 12 17s2.046-.663 2-1.99V7.003"
                    })
                }),
                Ne = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z",
                            fill: t ? "#493231" : "#F2E8E8"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M24.46 18.48a1.75 1.75 0 012.824.497l5.233 11.214c.691 1.481-.845 3.017-2.326 2.326l-11.214-5.233a1.75 1.75 0 01-.497-2.823l5.98-5.981zm1.464 1.131a.25.25 0 00-.403-.07l-5.98 5.98a.25.25 0 00.07.404l2.321 1.083 5.076-5.075-1.084-2.322zm.1 9.306l-2.645-1.234 4.303-4.304 1.235 2.644-2.894 2.894zm1.446.675l3.355 1.566a.25.25 0 00.333-.332l-1.566-3.356-2.122 2.122z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M22.878 14.182l.776 2.897-1.449.389-.776-2.898 1.449-.388zM19.874 18.814l-1.06 1.06-2.122-2.12 1.06-1.062 2.122 2.122zM17.467 22.206l-2.898-.776-.388 1.448 2.898.777.388-1.449z",
                            fill: t ? "#DEACAB" : "#B35D5B"
                        })]
                    })
                },
                He = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 50",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("circle", {
                            cx: 24,
                            cy: 26,
                            r: 24,
                            fill: "#F9F9F9"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.156 13.46l.776 2.899-1.449.388-.776-2.898 1.449-.388zm-5.125 2.512l2.12 2.121-1.06 1.06-2.121-2.12 1.06-1.061zm6.96 1.535a1.5 1.5 0 012.42.426l5.675 12.161c.592 1.27-.724 2.586-1.994 1.994l-12.16-5.675a1.5 1.5 0 01-.427-2.42l6.486-6.486zm2.295 3.705l-1.235-2.644-6.485 6.485 2.644 1.235 5.076-5.076zm.675 1.447l-4.304 4.303 2.644 1.235 2.894-2.894-1.234-2.645zm1.909 4.09l-2.122 2.123 3.979 1.856-1.857-3.979zm-15.023-6.04l2.898.776-.388 1.449-2.898-.777.388-1.448z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                Ie = e => (0, a.jsx)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M7 17a5 5 0 004.944-4.25H17V17h3v-4.25h1.5v-1.5h-9.556A5 5 0 107 17zm0-1.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                    })
                }),
                Pe = e => (0, a.jsxs)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 19 18",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M14.97 3.666a8.25 8.25 0 010 11.668l1.06 1.06c3.808-3.807 3.808-9.981 0-13.788l-1.06 1.06z"
                    }), (0, a.jsx)("path", {
                        d: "M12.848 13.212a5.248 5.248 0 000-7.424l1.061-1.061a6.75 6.75 0 010 9.546l-1.061-1.061z"
                    }), (0, a.jsx)("path", {
                        d: "M10.727 7.909a2.25 2.25 0 010 3.182l1.061 1.061a3.752 3.752 0 000-5.304l-1.061 1.061z"
                    }), (0, a.jsx)("path", {
                        d: "M3 1.5h.25a.75.75 0 01.75.75c0 .414.336.75.75.75h2.5A.75.75 0 008 2.25a.75.75 0 01.75-.75H9A1.5 1.5 0 0110.5 3v2H12V3a3 3 0 00-3-3H3a3 3 0 00-3 3v12a3 3 0 003 3h6a3 3 0 003-3v-1h-1.5v1A1.5 1.5 0 019 16.5H3A1.5 1.5 0 011.5 15V3A1.5 1.5 0 013 1.5z"
                    })]
                }),
                Ze = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.9393 6.93936C20.5251 7.52514 20.5251 8.47489 19.9393 9.06068L9.43934 19.5607C9.15803 19.842 8.7765 20 8.37868 20H4V15.6213C4 15.2235 4.15804 14.842 4.43934 14.5607L14.9393 4.06068C15.5251 3.47489 16.4749 3.47489 17.0607 4.06068L19.9393 6.93936ZM13.5303 7.59101L16.409 10.4697L8.96967 17.909L6.09099 15.0303L13.5303 7.59101ZM5.5 16.5607L5.5 18.5H7.43934L5.5 16.5607ZM14.591 6.53035L17.4697 9.40903L18.8787 8.00002L16 5.12134L14.591 6.53035Z",
                        fill: "currentcolor"
                    })
                }),
                Ve = e => (0, a.jsxs)("svg", {
                    fill: "none",
                    viewBox: "0 0 25 24",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.9971 7C16.9971 9.20914 15.2062 11 12.9971 11C10.7879 11 8.99707 9.20914 8.99707 7C8.99707 4.79086 10.7879 3 12.9971 3C15.2062 3 16.9971 4.79086 16.9971 7ZM15.4971 7C15.4971 8.38071 14.3778 9.5 12.9971 9.5C11.6164 9.5 10.4971 8.38071 10.4971 7C10.4971 5.61929 11.6164 4.5 12.9971 4.5C14.3778 4.5 15.4971 5.61929 15.4971 7Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        d: "M13.9971 19.5V21H4.99707C4.99707 20.4954 5.0448 19.9932 5.13895 19.5C5.24084 18.9662 5.39709 18.443 5.60603 17.9385C6.00807 16.9679 6.59735 16.086 7.34022 15.3431C8.08309 14.6003 8.965 14.011 9.9356 13.609C10.9062 13.2069 11.9465 13 12.9971 13C14.0476 13 15.0879 13.2069 16.0585 13.609C16.1358 13.641 16.2125 13.6741 16.2886 13.7085L15.1353 14.8618C14.4487 14.6226 13.7259 14.5 12.9971 14.5C12.1435 14.5 11.2982 14.6681 10.5096 14.9948C9.72101 15.3214 9.00446 15.8002 8.40088 16.4038C7.7973 17.0074 7.31851 17.7239 6.99185 18.5126C6.85895 18.8334 6.75229 19.1636 6.67252 19.5H13.9971Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        d: "M18.2471 18.75H15.9971V17.25H18.2471V15H19.7471V17.25H21.9971V18.75H19.7471V21H18.2471V18.75Z",
                        fill: "currentcolor"
                    })]
                }),
                ze = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#4A3D29" : "#F2ECE1"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M28 19C28 21.2091 26.2091 23 24 23C21.7909 23 20 21.2091 20 19C20 16.7909 21.7909 15 24 15C26.2091 15 28 16.7909 28 19ZM26.5 19C26.5 20.3807 25.3807 21.5 24 21.5C22.6193 21.5 21.5 20.3807 21.5 19C21.5 17.6193 22.6193 16.5 24 16.5C25.3807 16.5 26.5 17.6193 26.5 19Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M25.5 31.5V33H16C16 32.4954 16.0477 31.9932 16.1419 31.5C16.2438 30.9662 16.4 30.443 16.609 29.9385C17.011 28.9679 17.6003 28.086 18.3431 27.3431C19.086 26.6003 19.9679 26.011 20.9385 25.609C21.9091 25.2069 22.9494 25 24 25C25.0506 25 26.0909 25.2069 27.0615 25.609C27.1387 25.641 27.2154 25.6741 27.2915 25.7085L26.1382 26.8618C25.4516 26.6226 24.7289 26.5 24 26.5C23.1464 26.5 22.3012 26.6681 21.5126 26.9948C20.7239 27.3214 20.0074 27.8002 19.4038 28.4038C18.8002 29.0074 18.3214 29.7239 17.9948 30.5126C17.8619 30.8334 17.7552 31.1636 17.6754 31.5H25.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M30.5001 28.9394L32.4697 26.9697L33.5304 28.0304L31.5607 30.0001L33.5304 31.9697L32.4697 33.0304L30.5001 31.0607L28.5304 33.0304L27.4697 31.9697L29.4394 30.0001L27.4697 28.0304L28.5304 26.9697L30.5001 28.9394Z",
                            fill: t ? "#D6B17D" : "#C89D58"
                        })]
                    })
                },
                Fe = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zm-1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    }), (0, a.jsx)("path", {
                        d: "M13.5 19.5V21H4a8 8 0 0111.291-7.291l-1.153 1.153A6.5 6.5 0 005.675 19.5H13.5zM18.5 16.94l1.97-1.97 1.06 1.06L19.56 18l1.97 1.97-1.06 1.06-1.97-1.97-1.97 1.97-1.06-1.06L17.44 18l-1.97-1.97 1.06-1.06 1.97 1.97z"
                    })]
                }),
                We = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zm-1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM4.142 19.5A8 8 0 004 21h16a7.995 7.995 0 00-2.343-5.657A8 8 0 004.142 19.5zm13.863-.987c.133.32.24.65.32.987H5.675a6.497 6.497 0 016.325-5 6.499 6.499 0 016.005 4.013z"
                    })
                }),
                Ye = e => (0, a.jsxs)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M14.571 2.569l-.776 2.898-1.449-.389.777-2.897 1.448.388zM16.127 6.813l1.06 1.06 2.122-2.121-1.061-1.061-2.121 2.122zM18.922 11.654l2.897-.777-.388-1.449-2.898.777.389 1.449z"
                    }), (0, a.jsx)("path", {
                        d: "M12.257 18.682a15.317 15.317 0 01-6.939-6.939L7.53 9.53A.747.747 0 007.75 9V5A.75.75 0 007 4.25H3a.75.75 0 00-.75.75c0 9.251 7.499 16.75 16.75 16.75a.75.75 0 00.75-.75v-4a.75.75 0 00-.75-.75h-4a.747.747 0 00-.53.22l-2.213 2.212zm-7.576-8.424a15.207 15.207 0 01-.913-4.508H6.25v2.939l-1.569 1.569zm9.061 9.061c1.416.52 2.93.836 4.508.913V17.75h-2.939l-1.569 1.569z"
                    })]
                }),
                Ue = e => (0, a.jsx)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M5 5a3 3 0 013-3h8a3 3 0 013 3v14a3 3 0 01-3 3H8a3 3 0 01-3-3V5zm10.75-1.5H16A1.5 1.5 0 0117.5 5v14a1.5 1.5 0 01-1.5 1.5H8A1.5 1.5 0 016.5 19V5A1.5 1.5 0 018 3.5h.25a.75.75 0 01.75.75c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75.75.75 0 01.75-.75z"
                    })
                }),
                Ge = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M13 4.5h-2c-1.425 0-2.403.001-3.162.063-.74.06-1.139.172-1.427.318a3.5 3.5 0 00-1.53 1.53c-.146.288-.257.686-.318 1.427C4.501 8.597 4.5 9.575 4.5 11v2c0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 001.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063h2c1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 001.53-1.529c.146-.288.257-.686.318-1.427.062-.759.063-1.737.063-3.162v-2H21v2c0 2.8 0 4.2-.545 5.27a5 5 0 01-2.185 2.185C17.2 21 15.8 21 13 21h-2c-2.8 0-4.2 0-5.27-.545a5 5 0 01-2.185-2.185C3 17.2 3 15.8 3 13v-2c0-2.8 0-4.2.545-5.27A5 5 0 015.73 3.545C6.8 3 8.2 3 11 3h2v1.5z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        d: "M18 9a3 3 0 100-6 3 3 0 000 6z",
                        fill: "currentcolor"
                    })]
                }),
                Ke = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M12.75 11.25V2H11.25V11.25H2V12.75H11.25V22H12.75V12.75H22V11.25H12.75Z",
                        fill: "currentcolor"
                    })
                }),
                $e = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M48,24 C48,37.254 37.2557,48 24.0007,48 C10.7457,48 0,37.254 0,24 C0,10.7446 10.7457,0 24.0007,0 C37.2557,0 48,10.7446 48,24 Z",
                            fillOpacity: "0.2",
                            fill: "#36A18B"
                        }), (0, a.jsxs)("g", {
                            transform: "translate(16.000000, 14.000000)",
                            children: [(0, a.jsx)("path", {
                                d: "M16,6.25 L16,18 C16,19.1046 15.1046,20 14,20 L2,20 C0.89543,20 0,19.1046 0,18 L0,2 C0,0.89543 0.89543,0 2,0 L9.75,0 L16,6.25 Z M9,7 L9,1.5 L2,1.5 C1.72386,1.5 1.5,1.72386 1.5,2 L1.5,18 C1.5,18.2761 1.72386,18.5 2,18.5 L14,18.5 C14.2761,18.5 14.5,18.2761 14.5,18 L14.5,7 L9,7 Z M10.5,2.87132 L13.1287,5.5 L10.5,5.5 L10.5,2.87132 Z",
                                fill: t ? "#D9D9D9" : "#1B1B1B"
                            }), (0, a.jsx)("circle", {
                                r: "1",
                                cy: "15",
                                cx: "6.5",
                                fillRule: "nonzero",
                                fill: t ? "#D9D9D9" : "#1B1B1B"
                            }), (0, a.jsx)("circle", {
                                id: "Oval",
                                fill: t ? "#D9D9D9" : "#1B1B1B",
                                fillRule: "nonzero",
                                cx: "9.5",
                                cy: "15",
                                r: "1"
                            }), (0, a.jsx)("line", {
                                x1: "4",
                                y1: "12.75",
                                x2: "12",
                                y2: "12.75",
                                id: "Path",
                                stroke: t ? "#82C4B2" : "#36A18B",
                                strokeWidth: "1.5"
                            }), (0, a.jsx)("path", {
                                d: "M10.0851,12.75 L5.91485,12.75 L6.4787,9.9309 C6.511,9.7693 6.6882,9.6826 6.8356,9.7563 L7.2174,9.9472 C7.71,10.1936 8.29,10.1935 8.7826,9.9472 L9.1644,9.7563 C9.3118,9.6826 9.489,9.7693 9.5213,9.9309 L10.0851,12.75 Z",
                                fill: "none",
                                stroke: t ? "#82C4B2" : "#36A18B",
                                strokeWidth: "1.5"
                            })]
                        })]
                    })
                },
                qe = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M11.25 4V20H12.75V4H11.25Z",
                        fill: "var(--iconography-default-inverted)"
                    }), (0, a.jsx)("path", {
                        d: "M3.81066 12.75L6.53033 15.4697L5.46967 16.5303L1.46967 12.5303C1.32902 12.3897 1.25 12.1989 1.25 12C1.25 11.8011 1.32902 11.6103 1.46967 11.4697L5.46967 7.46967L6.53033 8.53033L3.81066 11.25L9.75 11.25V12.75H3.81066Z",
                        fill: "var(--iconography-default-inverted)"
                    }), (0, a.jsx)("path", {
                        d: "M20.1893 11.25L17.4697 8.53033L18.5303 7.46968L22.5303 11.4697C22.671 11.6103 22.75 11.8011 22.75 12C22.75 12.1989 22.671 12.3897 22.5303 12.5303L18.5303 16.5303L17.4697 15.4697L20.1893 12.75H14.25V11.25L20.1893 11.25Z",
                        fill: "var(--iconography-default-inverted)"
                    })]
                }),
                Je = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6.5 13.03C6.5 9.85444 9.07424 7.28012 12.2498 7.28L12.25 7.28033H12.4891L10.7695 9L11.8248 10.0553L14.9004 6.97973C15.1208 6.68595 15.0974 6.26723 14.8301 6L11.8301 3L10.7695 4.06066L12.4891 5.78033H12.2502L12.25 5.78C8.24594 5.78 5 9.02593 5 13.03C5 17.0341 8.24594 20.28 12.25 20.28C16.2541 20.28 19.5 17.0341 19.5 13.03C19.5 11.6769 19.1292 10.4106 18.4842 9.327L17.3805 10.4307C17.7768 11.2115 18 12.0948 18 13.03C18 16.2056 15.4256 18.78 12.25 18.78C9.07436 18.78 6.5 16.2056 6.5 13.03Z"
                    })
                }),
                Qe = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("circle", {
                            cx: "24",
                            cy: "24",
                            r: "24",
                            fill: t ? "#223C44" : "#CCDCE2"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21.75 16.4361V15.5C21.75 14.2574 22.7574 13.25 24 13.25C25.2426 13.25 26.25 14.2574 26.25 15.5V16.4361C28.4489 17.3262 30 19.482 30 22V26.5C30 27.3284 30.6716 28 31.5 28H32V31H24.372C24.4549 31.2346 24.5 31.487 24.5 31.75C24.5 32.9926 23.4926 34 22.25 34C21.0074 34 20 32.9926 20 31.75C20 31.487 20.0451 31.2346 20.128 31H16V28H16.5C17.3284 28 18 27.3284 18 26.5V22C18 19.482 19.5511 17.3262 21.75 16.4361ZM23.25 15.5C23.25 15.0858 23.5858 14.75 24 14.75C24.4142 14.75 24.75 15.0858 24.75 15.5V16.0464C24.5043 16.0158 24.254 16 24 16C23.746 16 23.4957 16.0158 23.25 16.0464V15.5ZM22.25 31C21.8358 31 21.5 31.3358 21.5 31.75C21.5 32.1642 21.8358 32.5 22.25 32.5C22.6642 32.5 23 32.1642 23 31.75C23 31.3358 22.6642 31 22.25 31ZM30.5 29.5V29.3293C29.3348 28.9175 28.5 27.8062 28.5 26.5V22C28.5 19.5147 26.4853 17.5 24 17.5C21.5147 17.5 19.5 19.5147 19.5 22V26.5C19.5 27.8062 18.6652 28.9175 17.5 29.3293V29.5H30.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M31.3032 18.6494L33.9013 17.1494L33.1513 15.8504L30.5532 17.3504L31.3032 18.6494Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M16 22.75H13V21.25H16V22.75Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M35 22.75H32V21.25H35V22.75Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M16.6966 18.6496L14.0986 17.1496L14.8486 15.8506L17.4466 17.3506L16.6966 18.6496Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                Xe = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.25 23.25V24C14.25 26.0711 15.9289 27.75 18 27.75C20.0711 27.75 21.75 26.0711 21.75 24V23.25H14.25ZM18 26.25C17.0203 26.25 16.1869 25.6239 15.878 24.75H20.122C19.8131 25.6239 18.9797 26.25 18 26.25Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M33.75 23.25V24C33.75 26.0711 32.0711 27.75 30 27.75C27.9289 27.75 26.25 26.0711 26.25 24V23.25H33.75ZM30 26.25C30.9797 26.25 31.8131 25.6239 32.122 24.75H27.878C28.1869 25.6239 29.0203 26.25 30 26.25Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        }), (0, a.jsx)("path", {
                            d: "M24.75 16.25V18.25H30.75V21.75H29.25V19.75H24.75V30.25H27.75V31.75H20.25V30.25H23.25V19.75H18.75V21.75H17.25V18.25H23.25V16.25H24.75Z",
                            fill: "currentcolor"
                        })]
                    })
                },
                et = e => (0, a.jsx)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M14.281 6.949c.292-.342.509-.75.624-1.199H18v-1.5h-3.095a3 3 0 00-5.81 0H6v1.5h3.095c.115.449.332.857.624 1.199A6.002 6.002 0 006 12.5V17a1.5 1.5 0 001.5 1.5H9v1a3 3 0 106 0v-1h1.5A1.5 1.5 0 0018 17v-4.5a6.002 6.002 0 00-3.719-5.551zM12 6.5a1.5 1.5 0 10-.001-3.001A1.5 1.5 0 0012 6.5zM15 17h1.5v-4.5a4.5 4.5 0 00-9 0V17H9v-1.5a3 3 0 116 0V17zm-1.5 2.5v-4a1.5 1.5 0 00-3 0v4a1.5 1.5 0 003 0z"
                    })
                }),
                tt = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            children: [(0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                                fill: t ? "#22403A" : "#E8F2EE"
                            }), (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                                fill: t ? "#22403A" : "#E8F2EE"
                            }), (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M16 23V17.0001L24 14.3301L32 17.0001V23.0001C32 28.2249 28.6607 32.6698 24 34.3172C19.3393 32.6698 16 28.2248 16 23ZM17.5 23V18.0808L24 15.9114L30.5 18.0808V23.0001C30.5 27.3806 27.8167 31.1379 24 32.7117C20.1833 31.1379 17.5 27.3805 17.5 23Z",
                                fill: t ? "#D9D9D9" : "#1B1B1B"
                            }), (0, a.jsx)("path", {
                                d: "M27.5304 21.5304L26.4697 20.4697L23.0001 23.9394L21.5304 22.4697L20.4697 23.5304L23.0001 26.0607L27.5304 21.5304Z",
                                fill: t ? "#82C4B2" : "#36A18B"
                            })]
                        })
                    })
                },
                rt = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 32 32",
                        ...e,
                        children: (0, a.jsx)("g", {
                            stroke: "none",
                            strokeWidth: "1",
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, a.jsx)("g", {
                                transform: "translate(-326.000000, -535.000000)",
                                fillRule: "nonzero",
                                children: (0, a.jsxs)("g", {
                                    transform: "translate(332.400000, 538.200000)",
                                    children: [(0, a.jsx)("path", {
                                        d: "M19.1555,2.91202359 L19.1555,13.2837449 C19.1555,16.2693795 17.7836048,19.0954466 15.4181861,20.9918198 L11.4542384,24.1712416 C10.3573479,25.0510407 8.79656,25.0509311 7.69979302,24.170978 L3.7374931,20.9919635 C1.37189515,19.0954466 -1.42108547e-12,16.2693795 -1.42108547e-12,13.2837449 L-1.42108547e-12,2.91206129 L9.57697457,0 L19.1555,2.91202359 Z M2,4.39433753 L2,13.2837449 C2,15.6592544 3.0938581,17.9125726 4.98879566,19.4317578 L8.95138434,22.6110039 C9.31697333,22.9043216 9.83723596,22.9043581 10.2028661,22.6110918 L14.1669931,19.4315262 C16.0616419,17.9125726 17.1555,15.6592544 17.1555,13.2837449 L17.1555,4.39437523 L9.57702543,2.09039882 L2,4.39433753 Z",
                                        fill: "currentcolor"
                                    }), (0, a.jsx)("polygon", {
                                        fill: t ? "#82C4B2" : "#36A18B",
                                        points: "7.04218502 10.9044824 5.64939147 12.3397963 8.77252503 15.3704088 14.4449183 9.86802898 13.0523817 8.43246566 8.77277453 12.5838042"
                                    })]
                                })
                            })
                        })
                    })
                },
                nt = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 32 32",
                    ...e,
                    children: (0, a.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        transform: "translate(7 5)",
                        children: [(0, a.jsx)("path", {
                            stroke: "currentcolor",
                            strokeLinecap: "square",
                            strokeWidth: "1.75",
                            d: "M1.641 16.25H17.36c.906 0 1.641-.735 1.641-1.641a2.83 2.83 0 0 0-1.425-2.456l-.155-.09a3.935 3.935 0 0 1-1.915-2.692l-.914-4.893A5.18 5.18 0 0 0 9.5.25a5.094 5.094 0 0 0-5 4.121l-.972 4.994a3.978 3.978 0 0 1-1.939 2.699l-.162.092A2.821 2.821 0 0 0 0 14.61c0 .906.735 1.641 1.641 1.641z"
                        }), (0, a.jsx)("circle", {
                            cx: "10.5",
                            cy: "18.5",
                            r: "3",
                            fill: "currentcolor"
                        })]
                    })
                }),
                it = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            d: "M21.5 20.5H14.5L14.5 27.5H21.5V26H23V27.5C23 28.3284 22.3284 29 21.5 29H14.5C13.6716 29 13 28.3284 13 27.5V20.5C13 19.6716 13.6716 19 14.5 19H21.5C22.3284 19 23 19.6716 23 20.5V22H21.5V20.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M25 26V27.5C25 28.3284 25.6716 29 26.5 29H33.5C34.3284 29 35 28.3284 35 27.5V20.5C35 19.6716 34.3284 19 33.5 19H26.5C25.6716 19 25 19.6716 25 20.5V22H26.5V20.5H33.5V27.5H26.5V26H25Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M30 25.5C30.8284 25.5 31.5 24.8284 31.5 24C31.5 23.1716 30.8284 22.5 30 22.5C29.4448 22.5 28.96 22.8016 28.7007 23.25H18C17.5858 23.25 17.25 23.5858 17.25 24C17.25 24.4142 17.5858 24.75 18 24.75H28.7007C28.96 25.1984 29.4448 25.5 30 25.5Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        })]
                    })
                },
                at = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M17.5 16C16.6716 16 16 16.6716 16 17.5V21.5C16 22.3284 16.6716 23 17.5 23H21.5C22.3284 23 23 22.3284 23 21.5V17.5C23 16.6716 22.3284 16 21.5 16H17.5ZM21.5 17.5H17.5L17.5 21.5L21.5 21.5L21.5 17.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M25 17.5C25 16.6716 25.6716 16 26.5 16H30.5C31.3284 16 32 16.6716 32 17.5V21.5C32 22.3284 31.3284 23 30.5 23H26.5C25.6716 23 25 22.3284 25 21.5V17.5ZM26.5 17.5H30.5V21.5L26.5 21.5V17.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16 26.5C16 25.6716 16.6716 25 17.5 25H21.5C22.3284 25 23 25.6716 23 26.5V30.5C23 31.3284 22.3284 32 21.5 32H17.5C16.6716 32 16 31.3284 16 30.5V26.5ZM17.5 26.5H21.5L21.5 30.5H17.5L17.5 26.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M25 26.5C25 25.6716 25.6716 25 26.5 25H30.5C31.3284 25 32 25.6716 32 26.5V30.5C32 31.3284 31.3284 32 30.5 32H26.5C25.6716 32 25 31.3284 25 30.5V26.5ZM26.5 26.5H30.5V30.5H26.5V26.5Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        })]
                    })
                },
                ot = e => (0, a.jsx)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M5.5 4A1.5 1.5 0 004 5.5v4A1.5 1.5 0 005.5 11h4A1.5 1.5 0 0011 9.5v-4A1.5 1.5 0 009.5 4h-4zm4 1.5h-4v4h4v-4zM13 5.5A1.5 1.5 0 0114.5 4h4A1.5 1.5 0 0120 5.5v4a1.5 1.5 0 01-1.5 1.5h-4A1.5 1.5 0 0113 9.5v-4zm1.5 0h4v4h-4v-4zM13 14.5a1.5 1.5 0 011.5-1.5h4a1.5 1.5 0 011.5 1.5v4a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-4zm1.5 0h4v4h-4v-4zM4 14.5A1.5 1.5 0 015.5 13h4a1.5 1.5 0 011.5 1.5v4A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-4zm1.5 0h4v4h-4v-4z"
                    })
                }),
                st = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            d: "M32.4999 24C32.4999 26.3472 31.5486 28.4722 30.0104 30.0104L31.071 31.0711C32.8807 29.2614 33.9999 26.7614 33.9999 24C33.9999 18.4772 29.5228 14 23.9999 14C21.5085 14 19.2298 14.9111 17.479 16.4184L18.5432 17.4826C20.0196 16.2451 21.9228 15.5 23.9999 15.5C28.6944 15.5 32.4999 19.3056 32.4999 24Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M17.4826 18.5432C16.2451 20.0196 15.5 21.9228 15.5 23.9999C15.5 26.3472 16.4514 28.4722 17.9896 30.0104L16.9289 31.071C15.1193 29.2614 14 26.7614 14 23.9999C14 21.5085 14.9111 19.2298 16.4184 17.479L17.4826 18.5432Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        }), (0, a.jsx)("path", {
                            d: "M22.1583 23.2189C22.0564 23.4588 22 23.7228 22 23.9999C22 25.1045 22.8954 25.9999 24 25.9999C25.1046 25.9999 26 25.1045 26 23.9999C26 22.8954 25.1046 21.9999 24 21.9999C23.7229 21.9999 23.4589 22.0563 23.2189 22.1582L21 19.9393L19.9393 20.9999L22.1583 23.2189Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        })]
                    })
                },
                lt = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21 27H18C16.3431 27 15 25.6569 15 24V18C15 16.3431 16.3431 15 18 15H24C25.6569 15 27 16.3431 27 18V21H30C31.6569 21 33 22.3431 33 24V30C33 31.6569 31.6569 33 30 33H24C22.3431 33 21 31.6569 21 30V27ZM18 16.5H24C24.8284 16.5 25.5 17.1716 25.5 18V21H24C22.3431 21 21 22.3431 21 24V25.5H18C17.1716 25.5 16.5 24.8284 16.5 24V18C16.5 17.1716 17.1716 16.5 18 16.5ZM27 22.5H30C30.8284 22.5 31.5 23.1716 31.5 24V30C31.5 30.8284 30.8284 31.5 30 31.5H24C23.1716 31.5 22.5 30.8284 22.5 30V27H24C25.6569 27 27 25.6569 27 24V22.5ZM25.5 22.5V24C25.5 24.8284 24.8284 25.5 24 25.5H22.5V24C22.5 23.1716 23.1716 22.5 24 22.5H25.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M25.5 24V22.5H24C23.1716 22.5 22.5 23.1716 22.5 24V25.5H24C24.8284 25.5 25.5 24.8284 25.5 24ZM27 21H24C22.3431 21 21 22.3431 21 24V27H24C25.6569 27 27 25.6569 27 24V21Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        })]
                    })
                },
                dt = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 20 20",
                    fill: "none",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.3148 5.55585C19.5873 6.21365 19.7801 6.89991 19.8904 7.6C19.9631 8.06204 19.9999 8.53011 19.9999 9L10.9999 9V0C11.4698 0 11.9379 0.0367969 12.3999 0.109555C13.1 0.219802 13.7863 0.412613 14.4441 0.685084C15.536 1.13738 16.5281 1.80031 17.3639 2.63604C18.1996 3.47177 18.8625 4.46392 19.3148 5.55585ZM12.3999 1.53006C12.9156 1.62672 13.4212 1.77675 13.9083 1.97852C14.8304 2.36045 15.6682 2.92026 16.3739 3.62599C17.0796 4.33171 17.6395 5.16953 18.0214 6.09161C18.2232 6.5787 18.3732 7.08428 18.4698 7.6L12.3999 7.6V1.53006Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M9.39991 1.5V10.5H18.3999C18.3999 10.9708 18.363 11.4388 18.2904 11.9C18.0884 13.1823 17.6105 14.4116 16.8831 15.5001C15.8942 16.9802 14.4886 18.1337 12.8441 18.8149C11.1995 19.4961 9.38992 19.6743 7.64409 19.3271C5.89826 18.9798 4.29462 18.1226 3.03595 16.864C1.77727 15.6053 0.920106 14.0016 0.572839 12.2558C0.225572 10.51 0.403802 8.70038 1.08499 7.05585C1.76618 5.41131 2.91973 4.00571 4.39977 3.01677C5.48834 2.28941 6.71757 1.81149 7.99991 1.60955C8.46106 1.53693 8.92909 1.5 9.39991 1.5ZM7.99991 11.9H16.8699C16.6817 12.9041 16.292 13.8649 15.7191 14.7223C14.884 15.9721 13.697 16.9463 12.3083 17.5215C10.9196 18.0967 9.39148 18.2472 7.91722 17.954C6.44296 17.6607 5.08877 16.9369 4.02589 15.874C2.96302 14.8111 2.23919 13.4569 1.94594 11.9827C1.65269 10.5084 1.8032 8.98032 2.37842 7.59161C2.95365 6.20289 3.92776 5.01593 5.17757 4.18083C6.03501 3.60791 6.99578 3.21825 7.99991 3.03006V11.9Z",
                        fill: "currentcolor"
                    })]
                }),
                ct = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 48 49",
                        ...e,
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            children: [(0, a.jsx)("path", {
                                d: "M48,24 C48,37.254 37.2557,48 24.0007,48 C10.7457,48 0,37.254 0,24 C0,10.7446 10.7457,0 24.0007,0 C37.2557,0 48,10.7446 48,24 Z",
                                fill: t ? "#22403A" : "#E8F2EE"
                            }), (0, a.jsxs)("g", {
                                transform: "translate(14, 15)",
                                children: [(0, a.jsx)("rect", {
                                    stroke: t ? "#D9D9D9" : "#1B1B1B",
                                    strokeWidth: "1.5",
                                    x: "6",
                                    y: "12",
                                    width: "3",
                                    height: "5"
                                }), (0, a.jsx)("path", {
                                    d: "M2,7.25 L2,16.5 C2,16.9142 2.33579,17.25 2.75,17.25 L17.25,17.25 C17.6642,17.25 18,16.9142 18,16.5 L18,7.25",
                                    stroke: t ? "#D9D9D9" : "#1B1B1B",
                                    strokeWidth: "1.5"
                                }), (0, a.jsx)("path", {
                                    d: "M19.25,5.5 L19.25,0.93 C19.25,0.76274 19.25,0.6791 19.2367,0.60946 C19.1791,0.30727 18.9427,0.07093 18.6405,0.01328 C18.5709,0 18.4873,0 18.32,0 L1.68,0 C1.51274,0 1.4291,0 1.35946,0.01328 C1.05727,0.07093 0.82093,0.30727 0.76328,0.60946 C0.75,0.6791 0.75,0.76274 0.75,0.93 L0.75,5.5",
                                    stroke: t ? "#D9D9D9" : "#1B1B1B",
                                    strokeWidth: "1.5"
                                }), (0, a.jsx)("path", {
                                    d: "M0.75,5.29175 C0.75,6.9944 2.13069,8.3751 3.83333,8.3751 C5.53597,8.3751 6.91667,6.9944 6.91667,5.29175 C6.91667,6.9944 8.2974,8.3751 10,8.3751 C11.7026,8.3751 13.0833,6.9944 13.0833,5.29175 C13.0833,6.9944 14.464,8.3751 16.1667,8.3751 C17.8693,8.3751 19.25,6.9944 19.25,5.29175",
                                    stroke: t ? "#D9D9D9" : "#1B1B1B",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })]
                            })]
                        })
                    })
                },
                ut = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 16 16",
                    fill: "none",
                    ...e,
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.25 1H8.75V3H7.25V1ZM8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM1 7.25H3V8.75H1V7.25ZM15 7.25H13V8.75H15V7.25ZM8.75 15V13H7.25V15H8.75ZM2.51992 12.4194L3.93414 11.0052L4.9948 12.0659L3.58058 13.4801L2.51992 12.4194ZM12.4194 2.51987L11.0052 3.93408L12.0659 4.99474L13.4801 3.58053L12.4194 2.51987ZM2.51992 3.58057L3.58058 2.51991L4.9948 3.93412L3.93414 4.99478L2.51992 3.58057ZM12.0659 11.0053L11.0052 12.0659L12.4194 13.4801L13.4801 12.4195L12.0659 11.0053Z",
                        fill: "currentcolor"
                    })
                }),
                ht = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, a.jsx)("defs", {
                        children: (0, a.jsx)("circle", {
                            id: "prefix__a",
                            cx: "10",
                            cy: "10",
                            r: "10"
                        })
                    }), (0, a.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        transform: "translate(2 2)",
                        children: [(0, a.jsx)("path", {
                            stroke: "currentcolor",
                            strokeLinecap: "round",
                            strokeWidth: "1.5",
                            d: "M3 17v-.5C3 14.567 4.567 13 6.5 13h7c1.933 0 3.5 1.567 3.5 3.5v.5"
                        }), (0, a.jsx)("circle", {
                            cx: "10",
                            cy: "7.5",
                            r: "3",
                            fillRule: "nonzero",
                            stroke: "currentcolor",
                            strokeWidth: "1.5"
                        }), (0, a.jsx)("use", {
                            fillRule: "nonzero",
                            stroke: "currentcolor",
                            strokeWidth: "1.5",
                            xlinkHref: "#prefix__a"
                        })]
                    })]
                }),
                pt = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, a.jsx)("path", {
                            fill: "none",
                            d: "M0 0H1440V1907H0z",
                            transform: "translate(-399 -791)"
                        }), (0, a.jsxs)("g", {
                            children: [(0, a.jsx)("path", {
                                fillRule: "nonzero",
                                d: "M0 0H652V84H0z",
                                transform: "translate(-399 -791) translate(394 761)"
                            }), (0, a.jsxs)("g", {
                                children: [(0, a.jsx)("path", {
                                    fillRule: "nonzero",
                                    stroke: "currentcolor",
                                    strokeWidth: "1.5",
                                    d: "M7.41 1h9.18c2.23 0 3.037.232 3.852.668.815.436 1.454 1.075 1.89 1.89.436.815.668 1.623.668 3.852v9.18c0 2.23-.232 3.037-.668 3.852-.436.815-1.075 1.454-1.89 1.89-.815.436-1.623.668-3.852.668H7.41c-2.23 0-3.037-.232-3.852-.668-.815-.436-1.454-1.075-1.89-1.89C1.232 19.627 1 18.82 1 16.59V7.41c0-2.23.232-3.037.668-3.852.436-.815 1.075-1.454 1.89-1.89C4.373 1.232 5.18 1 7.41 1z",
                                    transform: "translate(-399 -791) translate(394 761) translate(5 30)"
                                }), (0, a.jsxs)("g", {
                                    fill: "currentcolor",
                                    children: [(0, a.jsx)("path", {
                                        fillRule: "nonzero",
                                        d: "M0 10.385v-7.27h1.542l2.78 4.761c.199.328.355.645.46.932h.02c-.01-.266-.02-.553-.02-.942v-4.75H6v7.269H4.49L1.667 5.603c-.198-.348-.334-.614-.448-.91h-.021c.02.276.02.562.02.961v4.73H0z",
                                        transform: "translate(-399 -791) translate(394 761) translate(5 30) translate(9 5.25)"
                                    }), (0, a.jsx)("path", {
                                        d: "M0 12.721L6 12.721 6 11.423 0 11.423zM0 2.077L6 2.077 6 .779 0 .779z",
                                        transform: "translate(-399 -791) translate(394 761) translate(5 30) translate(9 5.25)"
                                    })]
                                })]
                            })]
                        })]
                    })
                }),
                vt = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsxs)("g", {
                        fill: "none",
                        transform: "translate(1 5)",
                        children: [(0, a.jsx)("path", {
                            stroke: "currentcolor",
                            strokeWidth: "1.5",
                            d: "M19 3h1c1.105 0 2 .895 2 2v8c0 1.657-1.343 3-3 3H5c-1.105 0-2-.895-2-2v-1"
                        }), (0, a.jsx)("rect", {
                            width: "19",
                            height: "13",
                            stroke: "currentcolor",
                            strokeWidth: "1.5",
                            rx: "2"
                        }), (0, a.jsx)("rect", {
                            width: "3.5",
                            height: "3",
                            x: "3",
                            y: "5",
                            fill: "currentcolor",
                            rx: "1"
                        })]
                    })
                }),
                Ct = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, a.jsx)("path", {
                            fillRule: "nonzero",
                            stroke: "currentcolor",
                            strokeWidth: "1.5",
                            d: "M19.936 4.5c.892 0 1.215.093 1.54.267.327.174.583.43.757.756.174.326.267.65.267 1.54v11.591c0 1.337-.14 1.822-.4 2.311a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401H7.063c-.892 0-1.215-.093-1.54-.267a1.817 1.817 0 0 1-.757-.756c-.174-.326-.267-.65-.267-1.54"
                        }), (0, a.jsx)("path", {
                            fillRule: "nonzero",
                            stroke: "currentcolor",
                            strokeWidth: "1.5",
                            d: "M4.064 1.5h12.872c.892 0 1.215.093 1.54.267.327.174.583.43.757.756.174.326.267.65.267 1.54v12.873c0 .892-.093 1.215-.267 1.54-.174.327-.43.583-.756.757-.326.174-.65.267-1.54.267H4.063c-.892 0-1.215-.093-1.54-.267a1.817 1.817 0 0 1-.757-.756c-.174-.326-.267-.65-.267-1.54V4.063c0-.892.093-1.215.267-1.54.174-.327.43-.583.756-.757.326-.174.65-.267 1.54-.267z"
                        }), (0, a.jsxs)("g", {
                            fill: "currentcolor",
                            children: [(0, a.jsx)("path", {
                                fillRule: "nonzero",
                                d: "M8 14V7h1.413l2.55 4.585c.181.315.324.62.42.897h.019c-.01-.257-.02-.533-.02-.907V7H13.5v7h-1.385L9.528 9.396a6.464 6.464 0 0 1-.41-.878h-.02c.02.267.02.543.02.927V14H8z"
                            }), (0, a.jsx)("path", {
                                d: "M8 16.25h5.5V15H8zM8 6h5.5V4.75H8z"
                            })]
                        })]
                    })
                }),
                ft = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsxs)("g", {
                        fill: "none",
                        transform: "translate(1 5)",
                        children: [(0, a.jsx)("path", {
                            stroke: "currentcolor",
                            strokeWidth: "1.5",
                            d: "M19 13v1c0 1.105-.895 2-2 2H3c-1.657 0-3-1.343-3-3V5c0-1.105.895-2 2-2h1"
                        }), (0, a.jsx)("rect", {
                            width: "19",
                            height: "13",
                            x: "3",
                            stroke: "currentcolor",
                            strokeWidth: "1.5",
                            rx: "2"
                        }), (0, a.jsx)("path", {
                            fill: "currentcolor",
                            d: "M13.492 3.5l2.331 2.419c.242.266.328.581.052.95L13.492 9.5l-1-1 1.081-1.25H9v-1.5h4.598L12.492 4.5l1-1z"
                        })]
                    })
                }),
                gt = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        stroke: "currentcolor",
                        strokeWidth: "1.5",
                        children: [(0, a.jsx)("path", {
                            strokeLinejoin: "round",
                            d: "M9.416 19.292l2.147-1.609C14.373 15.577 16 12.446 16 9.143v-5.81C13.005 3.333 9.883 2.18 8.098 0H7.9C6.117 2.18 2.995 3.333 0 3.333v5.81c0 3.303 1.636 6.434 4.446 8.54l2.148 1.609.883.557c.317.201.739.201 1.056 0l.883-.557z",
                            transform: "translate(4 2)"
                        }), (0, a.jsx)("path", {
                            fillRule: "nonzero",
                            d: "M4.5 9.5l2.43 2.43c.038.038.102.038.14 0L11.5 7.5h0L11 8",
                            transform: "translate(4 2)"
                        })]
                    })
                }),
                mt = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M8 12a1 1 0 100-2 1 1 0 000 2zM13 11a1 1 0 11-2 0 1 1 0 012 0zM16 12a1 1 0 100-2 1 1 0 000 2z"
                    }), (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 5.5V21l3-3h15.5a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 4h-17A1.5 1.5 0 002 5.5zm18.5 11H4.379l-.879.879V5.5h17v11z"
                    })]
                }),
                xt = e => (0, a.jsxs)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M8 10.5a1 1 0 100-2 1 1 0 000 2zM17 9.5a1 1 0 11-2 0 1 1 0 012 0zM9.47 12.03a3.577 3.577 0 005.06 0l-1.06-1.06a2.08 2.08 0 01-2.94 0l-1.06 1.06z"
                    }), (0, a.jsx)("path", {
                        d: "M2 5v15.5l3-3h15.5A1.5 1.5 0 0022 16V5a1.5 1.5 0 00-1.5-1.5h-17A1.5 1.5 0 002 5zm18.5 11H4.379l-.879.879V5h17v11z"
                    })]
                }),
                yt = e => (0, a.jsxs)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M8 10.5a1 1 0 100-2 1 1 0 000 2zM17 9.5a1 1 0 11-2 0 1 1 0 012 0zM9.47 12.03a3.577 3.577 0 005.06 0l-1.06-1.06a2.08 2.08 0 01-2.94 0l-1.06 1.06z"
                    }), (0, a.jsx)("path", {
                        d: "M2 5v15.5l3-3h15.5A1.5 1.5 0 0022 16V5a1.5 1.5 0 00-1.5-1.5h-17A1.5 1.5 0 002 5zm18.5 11H4.379l-.879.879V5h17v11z"
                    })]
                }),
                bt = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 32 32",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M11 16.5c0-1.375-1.125-2.5-2.5-2.5A2.507 2.507 0 0 0 6 16.5C6 17.875 7.125 19 8.5 19s2.5-1.125 2.5-2.5zm3 0c0 1.375 1.125 2.5 2.5 2.5s2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5a2.507 2.507 0 0 0-2.5 2.5zm8 0c0 1.375 1.125 2.5 2.5 2.5s2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5a2.507 2.507 0 0 0-2.5 2.5z",
                        fill: "currentcolor",
                        fillRule: "evenodd"
                    })
                }),
                Rt = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 18 18",
                    fill: "none",
                    ...e,
                    children: [(0, a.jsx)("circle", {
                        cx: 9,
                        cy: 9,
                        r: 8,
                        fill: "#C89D58",
                        stroke: "#fff",
                        strokeWidth: 1.5
                    }), (0, a.jsx)("circle", {
                        cx: 6,
                        cy: 9,
                        r: 1,
                        fill: "#fff"
                    }), (0, a.jsx)("circle", {
                        cx: 9,
                        cy: 9,
                        r: 1,
                        fill: "#fff"
                    }), (0, a.jsx)("circle", {
                        cx: 12,
                        cy: 9,
                        r: 1,
                        fill: "#fff"
                    })]
                }),
                Et = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            d: "M24 14.25H28V15.75H24V14.25Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M30.9242 19.0152C29.5853 17.9123 27.87 17.25 26 17.25H14V18.75H26C29.4518 18.75 32.25 21.5482 32.25 25C32.25 28.4518 29.4518 31.25 26 31.25C22.473 31.25 19.75 28.8804 19.75 25.5V25.25H16V26.75H18.3517C18.9594 30.3978 22.2119 32.75 26 32.75C30.2802 32.75 33.75 29.2802 33.75 25C33.75 23.13 33.0877 21.4147 31.9848 20.0758L33.5303 18.5303L32.4697 17.4697L30.9242 19.0152Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M15 21.25H20V22.75H15V21.25Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M27.4492 24.6115C27.4823 24.7354 27.5 24.8656 27.5 25C27.5 25.8284 26.8284 26.5 26 26.5C25.1716 26.5 24.5 25.8284 24.5 25C24.5 24.1716 25.1716 23.5 26 23.5C26.1344 23.5 26.2646 23.5177 26.3885 23.5508L27.9697 21.9697L29.0303 23.0303L27.4492 24.6115Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        })]
                    })
                },
                jt = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M28 18.5H20C16.9624 18.5 14.5 20.9624 14.5 24C14.5 27.0376 16.9624 29.5 20 29.5H28C31.0376 29.5 33.5 27.0376 33.5 24C33.5 20.9624 31.0376 18.5 28 18.5ZM20 17C16.134 17 13 20.134 13 24C13 27.866 16.134 31 20 31H28C31.866 31 35 27.866 35 24C35 20.134 31.866 17 28 17H20Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("circle", {
                            cx: "28",
                            cy: "24",
                            r: "4",
                            fill: t ? "#82C4B2" : "#36A18B"
                        })]
                    })
                },
                _t = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 25 24",
                    fill: "none",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M4.49829 18C3.66986 18 2.99829 17.3284 2.99829 16.5V7.5C2.99829 6.67157 3.66986 6 4.49829 6H21.4983C22.3267 6 22.9983 6.67157 22.9983 7.5V10H21.4983V7.5H4.49829V16.5H15.9983V18H4.49829Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        d: "M14.9983 12C14.9983 13.1046 14.1029 14 12.9983 14C11.8937 14 10.9983 13.1046 10.9983 12C10.9983 10.8954 11.8937 10 12.9983 10C14.1029 10 14.9983 10.8954 14.9983 12Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        d: "M19.9983 19H20.4983C20.9579 19 21.413 18.9095 21.8377 18.7336C22.2623 18.5577 22.6482 18.2999 22.9732 17.9749C23.2982 17.6499 23.556 17.264 23.7319 16.8394C23.9078 16.4148 23.9983 15.9596 23.9983 15.5H22.4983C22.4983 15.7626 22.4466 16.0227 22.3461 16.2654C22.2455 16.508 22.0982 16.7285 21.9125 16.9142C21.7268 17.0999 21.5063 17.2472 21.2637 17.3478C21.021 17.4483 20.7609 17.5 20.4983 17.5H19.9983V16.25L17.9983 18.25L19.9983 20.25V19Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        d: "M20.9983 12L20.4983 12C20.0387 12 19.5835 12.0905 19.1589 12.2664C18.7343 12.4423 18.3484 12.7001 18.0234 13.0251C17.6984 13.3501 17.4406 13.736 17.2647 14.1606C17.0888 14.5853 16.9983 15.0404 16.9983 15.5H18.4983C18.4983 15.2374 18.55 14.9773 18.6505 14.7346C18.751 14.492 18.8984 14.2715 19.0841 14.0858C19.2698 13.9001 19.4903 13.7528 19.7329 13.6522C19.9756 13.5517 20.2356 13.5 20.4983 13.5L20.9983 13.5V14.75L22.9983 12.75L20.9983 10.75V12Z",
                        fill: "currentcolor"
                    })]
                }),
                At = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z",
                            fill: t ? "#493231" : "#F2E8E8"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21 17V15.5C21 14.6716 21.6716 14 22.5 14H25.5C26.3284 14 27 14.6716 27 15.5V17H32.25V18.5H31V30C31 31.6569 29.6569 33 28 33H20C18.3431 33 17 31.6569 17 30V18.5H15.75V17H21ZM22.5 15.5H25.5V17H22.5V15.5ZM18.5 18.5V30C18.5 30.8284 19.1716 31.5 20 31.5H28C28.8284 31.5 29.5 30.8284 29.5 30V18.5H18.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M21 21V29H22.5V21H21Z",
                            fill: t ? "#DEACAB" : "#B35D5B"
                        }), (0, a.jsx)("path", {
                            d: "M25.5 29V21H27V29H25.5Z",
                            fill: t ? "#DEACAB" : "#B35D5B"
                        })]
                    })
                },
                kt = e => (0, a.jsxs)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M16 10.17a1 1 0 11-2 0 1 1 0 012 0zM15 14.84a1 1 0 100-2 1 1 0 000 2z"
                    }), (0, a.jsx)("path", {
                        d: "M22 10V6.5A1.5 1.5 0 0020.5 5h-17A1.5 1.5 0 002 6.5V10a2 2 0 110 4v3.5A1.5 1.5 0 003.5 19h17a1.5 1.5 0 001.5-1.5V14a2 2 0 110-4zm-8-3.5H3.5v2.337a3.501 3.501 0 010 6.326V17.5H14a1 1 0 012 0h4.5v-2.337a3.5 3.5 0 010-6.326V6.5H16a1 1 0 01-2 0z"
                    })]
                }),
                Bt = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsx)("g", {
                        fill: "none",
                        fillRule: "nonzero",
                        stroke: "currentcolor",
                        strokeLinecap: "square",
                        strokeWidth: "1.5",
                        children: (0, a.jsx)("path", {
                            d: "M2 13.5l3.293 3.293a1 1 0 0 0 1.414 0L15.5 8M11 15.5l1.293 1.293a1 1 0 0 0 1.414 0L22.5 8"
                        })
                    })
                }),
                Lt = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M23.5875 47.0735C36.5825 47.0735 47.1169 36.539 47.1169 23.5441C47.1169 10.5491 36.5825 0.0146484 23.5875 0.0146484C10.5926 0.0146484 0.0581055 10.5491 0.0581055 23.5441C0.0581055 36.539 10.5926 47.0735 23.5875 47.0735Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            d: "M31.5 20C31.5 21.3807 30.3807 22.5 29 22.5C27.6193 22.5 26.5 21.3807 26.5 20C26.5 18.6193 27.6193 17.5 29 17.5C30.3807 17.5 31.5 18.6193 31.5 20Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        }), (0, a.jsx)("path", {
                            d: "M34.0001 28.5C34.0001 27.8434 33.8708 27.1932 33.6195 26.5866C33.3682 25.98 32.9999 25.4288 32.5356 24.9645C32.0713 24.5002 31.5201 24.1319 30.9135 23.8806C30.3069 23.6293 29.6567 23.5 29.0001 23.5C28.3435 23.5 27.6933 23.6293 27.0867 23.8806C26.4801 24.1319 25.9289 24.5002 25.4646 24.9645C25.0003 25.4288 24.632 25.98 24.3807 26.5866C24.2923 26.8 24.219 27.0187 24.1611 27.2413L25.0003 28.5H34.0001Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M20 23C21.6569 23 23 21.6569 23 20C23 18.3431 21.6569 17 20 17C18.3431 17 17 18.3431 17 20C17 21.6569 18.3431 23 20 23ZM21.5 20C21.5 20.8284 20.8284 21.5 20 21.5C19.1716 21.5 18.5 20.8284 18.5 20C18.5 19.1716 19.1716 18.5 20 18.5C20.8284 18.5 21.5 19.1716 21.5 20Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M25.5433 27.7039C25.6507 27.9633 25.7396 28.2293 25.8095 28.5C25.9357 28.9889 26 29.4928 26 30H14C14 29.4928 14.0643 28.9889 14.1905 28.5C14.2604 28.2293 14.3493 27.9633 14.4567 27.7039C14.7583 26.9759 15.2002 26.3145 15.7574 25.7574C16.3145 25.2002 16.9759 24.7583 17.7039 24.4567C18.4319 24.1552 19.2121 24 20 24C20.7879 24 21.5681 24.1552 22.2961 24.4567C23.0241 24.7583 23.6855 25.2002 24.2426 25.7574C24.7998 26.3145 25.2417 26.9759 25.5433 27.7039ZM24.1575 28.2779C24.1878 28.3513 24.2162 28.4253 24.2426 28.5H15.7574C15.7838 28.4253 15.8122 28.3513 15.8425 28.2779C16.0687 27.732 16.4002 27.2359 16.818 26.818C17.2359 26.4002 17.732 26.0687 18.2779 25.8425C18.8239 25.6164 19.4091 25.5 20 25.5C20.5909 25.5 21.1761 25.6164 21.7221 25.8425C22.268 26.0687 22.7641 26.4002 23.182 26.818C23.5998 27.2359 23.9313 27.732 24.1575 28.2779Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                Mt = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M19.5 8C19.5 9.38071 18.3807 10.5 17 10.5C15.6193 10.5 14.5 9.38071 14.5 8C14.5 6.61929 15.6193 5.5 17 5.5C18.3807 5.5 19.5 6.61929 19.5 8Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        }), (0, a.jsx)("path", {
                            d: "M22.0001 16.5C22.0001 15.8434 21.8708 15.1932 21.6195 14.5866C21.3682 13.98 20.9999 13.4288 20.5356 12.9645C20.0713 12.5002 19.5201 12.1319 18.9135 11.8806C18.3069 11.6293 17.6567 11.5 17.0001 11.5C16.3435 11.5 15.6933 11.6293 15.0867 11.8806C14.4801 12.1319 13.9289 12.5002 13.4646 12.9645C13.0003 13.4288 12.632 13.98 12.3807 14.5866C12.2923 14.8 12.219 15.0187 12.1611 15.2413L13.0003 16.5H22.0001Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8Z",
                            fill: t ? "#fff" : "#2D2D2D"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.5433 15.7039C13.6507 15.9633 13.7396 16.2293 13.8095 16.5C13.9357 16.9889 14 17.4928 14 18H2C2 17.4928 2.0643 16.9889 2.19052 16.5C2.26041 16.2293 2.34927 15.9633 2.45672 15.7039C2.75825 14.9759 3.20021 14.3145 3.75736 13.7574C4.31451 13.2002 4.97595 12.7583 5.7039 12.4567C6.43185 12.1552 7.21207 12 8 12C8.78793 12 9.56815 12.1552 10.2961 12.4567C11.0241 12.7583 11.6855 13.2002 12.2426 13.7574C12.7998 14.3145 13.2417 14.9759 13.5433 15.7039ZM12.1575 16.2779C12.1878 16.3513 12.2162 16.4253 12.2426 16.5H3.75736C3.78376 16.4253 3.81216 16.3513 3.84254 16.2779C4.06869 15.732 4.40016 15.2359 4.81802 14.818C5.23588 14.4002 5.73196 14.0687 6.27792 13.8425C6.82389 13.6164 7.40905 13.5 8 13.5C8.59095 13.5 9.17611 13.6164 9.72208 13.8425C10.268 14.0687 10.7641 14.4002 11.182 14.818C11.5998 15.2359 11.9313 15.732 12.1575 16.2779Z",
                            fill: t ? "#fff" : "#2D2D2D"
                        })]
                    })
                },
                St = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        ...e,
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            d: "M15.5 29C14.6716 29 14 28.3284 14 27.5V18.5C14 17.6716 14.6716 17 15.5 17H32.5C33.3284 17 34 17.6716 34 18.5V21H32.5V18.5H15.5V27.5H26V29H15.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M26 23C26 24.1046 25.1046 25 24 25C22.8954 25 22 24.1046 22 23C22 21.8954 22.8954 21 24 21C25.1046 21 26 21.8954 26 23Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M31.5 25.7929V24H30.5V26.2071L31.6464 27.3536L32.3536 26.6464L31.5 25.7929Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M31 30C33.2091 30 35 28.2091 35 26C35 23.7909 33.2091 22 31 22C28.7909 22 27 23.7909 27 26C27 28.2091 28.7909 30 31 30ZM31 28.5C32.3807 28.5 33.5 27.3807 33.5 26C33.5 24.6193 32.3807 23.5 31 23.5C29.6193 23.5 28.5 24.6193 28.5 26C28.5 27.3807 29.6193 28.5 31 28.5Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                Tt = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        fill: "currentcolor",
                        d: "M3.5 17A1.5 1.5 0 012 15.5v-9A1.5 1.5 0 013.5 5h17A1.5 1.5 0 0122 6.5V9h-1.5V6.5h-17v9H14V17H3.5z"
                    }), (0, a.jsx)("path", {
                        fill: "currentcolor",
                        d: "M14 11a2 2 0 11-4 0 2 2 0 014 0zM19.5 13.793V12h-1v2.207l1.146 1.147.708-.708-.854-.853z"
                    }), (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        fill: "currentcolor",
                        d: "M19 18a4 4 0 100-8 4 4 0 000 8zm0-1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                    })]
                }),
                Dt = () => {
                    const {
                        isDark: e
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        width: "48",
                        height: "48",
                        viewBox: "0 0 48 48",
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: e ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            d: "M25.5 23C25.5 23.5552 25.1984 24.04 24.75 24.2993V25.75H23.25V24.2993C22.8016 24.04 22.5 23.5552 22.5 23C22.5 22.1716 23.1716 21.5 24 21.5C24.8284 21.5 25.5 22.1716 25.5 23Z",
                            fill: e ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M15 16.5C15 15.6716 15.6716 15 16.5 15H31.5C32.3284 15 33 15.6716 33 16.5V30.5C33 31.3284 32.3284 32 31.5 32H30V34H28.5V32H19.5V34H18V32H16.5C15.6716 32 15 31.3284 15 30.5V16.5ZM16.5 16.5H31.5V30.5H16.5L16.5 16.5Z",
                            fill: e ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                Ot = e => (0, a.jsxs)("svg", {
                    fillRule: "evenodd",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M13.5 10.5a1.5 1.5 0 01-.75 1.299v1.451h-1.5v-1.451A1.5 1.5 0 1113.5 10.5z"
                    }), (0, a.jsx)("path", {
                        d: "M3 4a1.5 1.5 0 011.5-1.5h15A1.5 1.5 0 0121 4v14a1.5 1.5 0 01-1.5 1.5h-1.75V21h-1.5v-1.5h-8.5V21h-1.5v-1.5H4.5A1.5 1.5 0 013 18V4zm1.5 0h15v14h-15V4z"
                    })]
                }),
                wt = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24C48 37.254 37.2557 48 24.0007 48C10.7457 48 0 37.254 0 24C0 10.7446 10.7457 0 24.0007 0C37.2557 0 48 10.7446 48 24Z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M17.25 15C16.0074 15 15 16.0074 15 17.25V29.9999C15 31.6568 16.3431 32.9999 18 32.9999H33V29.5H31.5V31.4999H18C17.1716 31.4999 16.5 30.8284 16.5 29.9999V19.372C16.7346 19.4549 16.987 19.5 17.25 19.5H31.5V21.5H33V17.9999H31.5V15H17.25ZM17.2499 17.9999C16.9011 17.9999 16.6079 17.7618 16.5241 17.4392C16.5084 17.3788 16.5 17.3154 16.5 17.25C16.5 16.8358 16.8358 16.5 17.25 16.5H30V17.9999H17.2499Z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M29.5 26.5C30.0523 26.5 30.5 26.0523 30.5 25.5C30.5 24.9477 30.0523 24.5 29.5 24.5C28.9477 24.5 28.5 24.9477 28.5 25.5C28.5 26.0523 28.9477 26.5 29.5 26.5Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M25.5 25.5C25.5 23.2909 27.2909 21.5 29.5 21.5H34.5V29.5H29.5C27.2909 29.5 25.5 27.7091 25.5 25.5ZM29.5 23H33V28H29.5C28.1193 28 27 26.8807 27 25.5C27 24.1193 28.1193 23 29.5 23Z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        })]
                    })
                },
                Nt = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 16 16",
                    fill: "none",
                    ...e,
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8 15A7 7 0 108 1a7 7 0 000 14zM7.25 4.5V9h1.5V3.5h-1.5v1zm-.25 7a1 1 0 112 0 1 1 0 01-2 0z",
                        fill: "currentcolor"
                    })
                }),
                Ht = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 18 18",
                    fill: "none",
                    ...e,
                    children: [(0, a.jsx)("circle", {
                        cx: 9,
                        cy: 9,
                        r: 8,
                        fill: "#B35D5B",
                        stroke: "#fff",
                        strokeWidth: 1.5
                    }), (0, a.jsx)("path", {
                        d: "M9.75 10h-1.5V4.5h1.5V10zM9 11.5a1 1 0 100 2 1 1 0 000-2z",
                        fill: "#fff"
                    })]
                }),
                It = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsxs)("g", {
                        fill: "none",
                        fillRule: "nonzero",
                        transform: "translate(2 1.5)",
                        children: [(0, a.jsx)("circle", {
                            cx: "10",
                            cy: "10.5",
                            r: "9.25",
                            stroke: "currentcolor",
                            strokeWidth: "1.5"
                        }), (0, a.jsx)("path", {
                            fill: "currentcolor",
                            d: "M9.363 12.63l-.364-7.28h2.002l-.364 7.28zM10.959 14v1.792H9.041V14z"
                        })]
                    })
                }),
                Pt = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M12.75 10.701l4.129-2.384V5.25h1.5v2.201l1.906-1.101.75 1.299-1.906 1.101 1.906 1.101-.75 1.299-2.656-1.534L13.5 12l4.129 2.384 2.656-1.533.75 1.299-1.906 1.1 1.906 1.101-.75 1.299-1.906-1.101v2.201h-1.5v-3.067l-4.129-2.384v4.768l2.656 1.534-.75 1.299-1.906-1.101V22h-1.5v-2.201L9.344 20.9l-.75-1.299 2.656-1.534v-4.768l-4.129 2.384v3.067h-1.5v-2.201L3.715 17.65l-.75-1.299 1.906-1.101-1.906-1.101.75-1.299 2.656 1.534L10.5 12 6.371 9.616l-2.656 1.533-.75-1.299 1.906-1.1-1.906-1.1.75-1.3 1.906 1.101V5.25h1.5v3.067l4.129 2.384V5.933L8.594 4.4l.75-1.3 1.906 1.101V2h1.5v2.201L14.656 3.1l.75 1.3-2.656 1.533v4.768z"
                    })
                }),
                Zt = e => (0, a.jsx)("svg", {
                    viewBox: "0 0 32 32",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M0 8.77a1.53 1.53 0 0 1 2.61-1.09L16 21.07 29.39 7.68a1.53 1.53 0 0 1 2.16 2.16L17.08 24.32a1.53 1.53 0 0 1-2.16 0L.45 9.85A1.53 1.53 0 0 1 0 8.77z"
                    })
                }),
                Vt = e => (0, a.jsxs)("svg", {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11 19.5H12L18.3246 19.5C18.2448 19.1636 18.1381 18.8334 18.0052 18.5126C17.6786 17.7239 17.1998 17.0074 16.5962 16.4038C15.9926 15.8002 15.2761 15.3214 14.4874 14.9948C13.6988 14.6681 12.8536 14.5 12 14.5C11.2711 14.5 10.5484 14.6226 9.86176 14.8618L8.7085 13.7085C8.7846 13.6741 8.86128 13.641 8.93853 13.609C9.90914 13.2069 10.9494 13 12 13C13.0506 13 14.0909 13.2069 15.0615 13.609C16.0321 14.011 16.914 14.6003 17.6569 15.3431C18.3997 16.086 18.989 16.9679 19.391 17.9385C19.6 18.443 19.7562 18.9662 19.8581 19.5C19.9523 19.9932 20 20.4954 20 21H18.5L12 21H11V19.5Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("circle", {
                        cx: "12",
                        cy: "7",
                        r: "3.25",
                        fill: "none",
                        stroke: "currentcolor",
                        strokeWidth: "1.5"
                    }), (0, a.jsx)("path", {
                        d: "M9 18.25L3 18.25M9 18.25L6 15.25M9 18.25L6 21.25",
                        stroke: "currentcolor",
                        strokeWidth: "1.5"
                    })]
                }),
                zt = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            d: "M31 31h.5a3.5 3.5 0 003.5-3.5h-1.5a2 2 0 01-2 2H31v-1.25l-2 2 2 2V31zM32 24h-.5a3.5 3.5 0 00-3.5 3.5h1.5a2 2 0 012-2h.5v1.25l2-2-2-2V24z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        }), (0, a.jsx)("path", {
                            d: "M15.5 30a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 011.5 1.5V22h-1.5v-2.5h-17v9H27V30H15.5z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M26 24a2 2 0 11-4 0 2 2 0 014 0z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                Ft = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48 24c0 13.254-10.744 24-24 24C10.747 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.256 0 24 10.745 24 24z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            d: "M31.5 26.793V25h-1v2.207l1.146 1.147.708-.708-.854-.853z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M31 31a4 4 0 100-8 4 4 0 000 8zm0-1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        }), (0, a.jsx)("path", {
                            d: "M15.5 30a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 011.5 1.5V22h-1.5v-2.5h-17v9H26V30H15.5z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M26 24a2 2 0 11-4 0 2 2 0 014 0z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                Wt = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21.75 16.436V15.5a2.25 2.25 0 014.5 0v.936A6.002 6.002 0 0130 22v4.5a1.5 1.5 0 001.5 1.5h.5v3H16v-3h.5a1.5 1.5 0 001.5-1.5V22a6.002 6.002 0 013.75-5.564zm1.5-.936a.75.75 0 011.5 0v.546a6.067 6.067 0 00-1.5 0V15.5zm-3.75 11V22a4.5 4.5 0 119 0v4.5c0 1.306.835 2.418 2 2.83v.17h-13v-.17a3.001 3.001 0 002-2.83z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        }), (0, a.jsx)("path", {
                            d: "M31.303 18.65l2.598-1.5-.75-1.3-2.598 1.5.75 1.3zM16 22.75h-3v-1.5h3v1.5zM35 22.75h-3v-1.5h3v1.5zM16.697 18.65l-2.598-1.5.75-1.3 2.598 1.5-.75 1.3zM24.5 31.75a2.25 2.25 0 11-4.372-.75h4.244c.083.235.128.487.128.75z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        })]
                    })
                },
                Yt = e => {
                    const {
                        isDark: t
                    } = (0, n.useContext)(i.Z);
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 48 48",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z",
                            fill: t ? "#22403A" : "#E8F2EE"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M33.253 17.929L26.182 25H23v-3.182l7.071-7.071 3.182 3.182zm-2.121 0l-5.48 5.48-1.061-1.06 5.48-5.48 1.06 1.06z",
                            fill: t ? "#82C4B2" : "#36A18B"
                        }), (0, a.jsx)("path", {
                            d: "M17.5 18H23v1.5h-5.5v11h11V25H30v5.5a1.5 1.5 0 01-1.5 1.5h-11a1.5 1.5 0 01-1.5-1.5v-11a1.5 1.5 0 011.5-1.5z",
                            fill: t ? "#D9D9D9" : "#1B1B1B"
                        })]
                    })
                },
                Ut = e => (0, a.jsx)("svg", {
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    ...e,
                    children: (0, a.jsx)("path", {
                        d: "M9.89 1.111c-.104.057-.313.12-.463.141-.15.021-.329.083-.398.137a.872.872 0 0 1-.296.136c-.187.041-.268.107-.948.775-.252.247-.458.48-.458.519 0 .037-.049.099-.109.136-.06.038-.109.109-.109.158 0 .05-.059.191-.131.315a1.99 1.99 0 0 0-.189.535 2.152 2.152 0 0 1-.142.473.996.996 0 0 0-.083.384c0 .41-.076.439-1.135.439h-.917l-.393.193c-.215.106-.392.218-.392.248s-.062.117-.138.192c-.279.28-.408.817-.465 1.936-.031.607-.085 1.122-.134 1.282-.047.15-.107.683-.138 1.221-.03.525-.09 1.09-.13 1.255-.104.412-.132.656-.195 1.657a14.48 14.48 0 0 1-.135 1.31c-.045.243-.105.835-.134 1.315-.03.5-.093 1.012-.146 1.2-.16.555-.145 2.326.02 2.48.067.063.123.145.123.183 0 .1.319.368.627.525l.273.139 2.642.027 2.643.028.094.245c.249.652.354.871.417.872.038 0 .096.06.129.131.04.088.12.14.245.16a.85.85 0 0 1 .329.143c.142.112.172.112 5.576.112h5.434l.272-.135c.15-.074.314-.135.365-.136.05 0 .107-.05.126-.108a.242.242 0 0 1 .14-.14c.069-.022.127-.117.166-.272.033-.131.107-.28.163-.332.1-.09.104-.253.104-5.076V10.93h-1.605c-1.904 0-1.746.065-1.798-.735a6.351 6.351 0 0 0-.123-.917c-.048-.185-.118-.828-.156-1.428-.045-.715-.099-1.168-.155-1.31a1.317 1.317 0 0 1-.088-.317c-.003-.128-.475-.632-.684-.731a5.418 5.418 0 0 1-.3-.155c-.103-.059-.359-.078-1.038-.079-1.09 0-1.115-.01-1.158-.482-.016-.177-.068-.383-.116-.456a1.173 1.173 0 0 1-.12-.402 1.11 1.11 0 0 0-.132-.41 1.292 1.292 0 0 1-.151-.328c-.076-.271-.934-1.205-1.274-1.387-.079-.042-.158-.115-.175-.16a.143.143 0 0 0-.125-.084c-.05 0-.193-.058-.315-.129a2.19 2.19 0 0 0-.563-.193 2.354 2.354 0 0 1-.49-.144c-.24-.125-1.295-.106-1.543.027Zm1.95 1.639c.218.105.396.221.396.259 0 .037.031.067.069.067.11-.002.69.665.758.873.035.105.106.253.158.328.156.223.186.738.052.872-.155.155-4.85.173-5.068.02-.172-.12-.134-.649.075-1.04.076-.143.138-.287.138-.32 0-.032.055-.11.123-.174.13-.123.218-.212.329-.329.036-.039.099-.1.138-.136l.182-.166a.944.944 0 0 1 .283-.158.95.95 0 0 0 .262-.135c.306-.263 1.527-.241 2.106.039Zm4.838 4.122c.061.061.086.196.088.477.001.215.025.49.052.61l.104.469c.116.542.173 2.3.077 2.406-.083.09-.345.098-4.266.11l-4.178.015-.028 3.915c-.023 3.4-.038 3.923-.109 3.969-.181.116-4.799.038-4.887-.083-.043-.059-.067-.139-.052-.177.014-.038.054-.553.087-1.144.04-.707.088-1.141.141-1.268.054-.13.1-.542.135-1.23.029-.57.092-1.221.14-1.446.049-.225.12-.85.159-1.39.039-.54.107-1.155.151-1.364.045-.21.106-.8.136-1.31.03-.515.09-1.036.134-1.172.044-.135.095-.491.113-.791.025-.425.053-.56.126-.614.157-.115 11.761-.098 11.877.018Zm3.674 5.672.12.084v3.893c0 3.467-.009 3.903-.085 3.98-.077.076-.616.085-5.124.085h-5.039l-.085-.121c-.149-.214-.126-7.747.025-7.897.15-.151 9.973-.174 10.188-.024Zm-8.078 1.804c-.07.07-.036.373.07.607.058.128.122.317.141.42.02.104.094.257.164.34.071.082.144.217.163.301.018.083.068.152.112.152.043 0 .106.06.14.135.034.075.106.15.16.166a.233.233 0 0 1 .131.138c.019.058.08.106.138.106.057 0 .184.07.282.156a.812.812 0 0 0 .416.186c.13.017.283.074.342.127.15.137 1.21.143 1.412.009a1.15 1.15 0 0 1 .374-.128.93.93 0 0 0 .382-.16.977.977 0 0 1 .263-.157c.157-.05.781-.66.781-.765 0-.045.074-.166.164-.269.1-.114.164-.247.164-.342 0-.086.05-.23.109-.32.073-.112.108-.256.109-.452v-.288l-.75.015-.75.016-.035.281c-.035.293-.34.746-.543.811a.833.833 0 0 0-.23.157c-.298.277-1.268.23-1.582-.077-.092-.09-.185-.163-.208-.163-.022 0-.056-.05-.075-.11a1.057 1.057 0 0 0-.17-.27.982.982 0 0 1-.175-.395l-.04-.234-.71-.016c-.391-.008-.728.002-.749.023Z",
                        fill: "currentcolor"
                    })
                }),
                Gt = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 18 18",
                    fill: "none",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        d: "M18 4.75L15 4.75L15 3.25L18 3.25L18 4.75Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        d: "M9 4.75L-2.07629e-07 4.75L-1.42062e-07 3.25L9 3.25L9 4.75Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 1.25C10.4812 1.25 9.25 2.48122 9.25 4C9.25 5.51878 10.4812 6.75 12 6.75C13.5188 6.75 14.75 5.51878 14.75 4C14.75 2.48122 13.5188 1.25 12 1.25ZM12 -2.62268e-07C9.79086 -4.55397e-07 8 1.79086 8 4C8 6.20914 9.79086 8 12 8C14.2091 8 16 6.20914 16 4C16 1.79086 14.2091 -6.91388e-08 12 -2.62268e-07Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        d: "M-5.79176e-07 13.25L3 13.25L3 14.75L-6.44743e-07 14.75L-5.79176e-07 13.25Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        d: "M9 13.25L18 13.25L18 14.75L9 14.75L9 13.25Z",
                        fill: "currentcolor"
                    }), (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6 16.75C7.51878 16.75 8.75 15.5188 8.75 14C8.75 12.4812 7.51878 11.25 6 11.25C4.48122 11.25 3.25 12.4812 3.25 14C3.25 15.5188 4.48122 16.75 6 16.75ZM6 18C8.20914 18 10 16.2091 10 14C10 11.7909 8.20914 10 6 10C3.79086 10 2 11.7909 2 14C2 16.2091 3.79086 18 6 18Z",
                        fill: "currentcolor"
                    })]
                }),
                Kt = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 14 14",
                    ...e,
                    children: [(0, a.jsx)("circle", {
                        cx: "7",
                        cy: "7",
                        r: "7",
                        fill: "#F2F2F2"
                    }), (0, a.jsx)("path", {
                        d: "M4 6.5H10V8H4V6.5Z",
                        fill: "#6D6D6D"
                    })]
                }),
                $t = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 512 512",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        fill: "#eee",
                        d: "M496 345a255.4 255.4 0 0 0 0-178l-240-22.3L16 167a255.5 255.5 0 0 0 0 178l240 22.3L496 345z"
                    }), (0, a.jsx)("path", {
                        fill: "#d80027",
                        d: "M256 512a256 256 0 0 0 240-167H16a256 256 0 0 0 240 167zm0-512A256 256 0 0 0 16 167h480A256 256 0 0 0 256 0z"
                    })]
                }),
                qt = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 512 512",
                    ...e,
                    children: [(0, a.jsx)("circle", {
                        cx: "256",
                        cy: "256",
                        r: "256",
                        fill: "#6da544"
                    }), (0, a.jsx)("path", {
                        fill: "#ffda44",
                        d: "M256 100.2L467.5 256 256 411.8 44.5 256z"
                    }), (0, a.jsx)("circle", {
                        cx: "256",
                        cy: "256",
                        r: "89",
                        fill: "#eee"
                    }), (0, a.jsx)("path", {
                        fill: "#0052b4",
                        d: "M211.5 250.4a149 149 0 0 0-44.5 6.8A89 89 0 0 0 329 307a150 150 0 0 0-117.5-56.7zm131.9 22.7A89.5 89.5 0 0 0 345 256a89 89 0 0 0-170.8-35.1 183.7 183.7 0 0 1 37.3-3.9c51.7 0 98.5 21.5 131.9 56z"
                    })]
                }),
                Jt = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 512 512",
                    ...e,
                    children: [(0, a.jsx)("circle", {
                        cx: "256",
                        cy: "256",
                        r: "256",
                        fill: "#0052b4"
                    }), (0, a.jsx)("path", {
                        fill: "#ffda44",
                        d: "M256 100.2l8.3 25.5H291l-21.7 15.7 8.3 25.6-21.7-15.8-21.7 15.8 8.3-25.6-21.7-15.7h26.8zm-110.2 45.6l24 12.2 18.9-19-4.2 26.5 23.9 12.2-26.5 4.2-4.2 26.5-12.2-24-26.5 4.3 19-19zM100.2 256l25.5-8.3V221l15.7 21.7 25.6-8.3-15.8 21.7 15.8 21.7-25.6-8.3-15.7 21.7v-26.8zm45.6 110.2l12.2-24-19-18.9 26.5 4.2 12.2-23.9 4.2 26.5 26.5 4.2-24 12.2 4.3 26.5-19-19zM256 411.8l-8.3-25.5H221l21.7-15.7-8.3-25.6 21.7 15.8 21.7-15.8-8.3 25.6 21.7 15.7h-26.8zm110.2-45.6l-24-12.2-18.9 19 4.2-26.5-23.9-12.2 26.5-4.2 4.2-26.5 12.2 24 26.5-4.3-19 19zM411.8 256l-25.5 8.3V291l-15.7-21.7-25.6 8.3 15.8-21.7-15.8-21.7 25.6 8.3 15.7-21.7v26.8zm-45.6-110.2l-12.2 24 19 18.9-26.5-4.2-12.2 23.9-4.2-26.5-26.5-4.2 24-12.2-4.3-26.5 19 19z"
                    })]
                }),
                Qt = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 512 512",
                    ...e,
                    children: [(0, a.jsx)("circle", {
                        cx: "256",
                        cy: "256",
                        r: "256",
                        fill: "#eee"
                    }), (0, a.jsx)("path", {
                        fill: "#d80027",
                        d: "M512 256A256 256 0 0 0 345 16v480a256 256 0 0 0 167-240z"
                    }), (0, a.jsx)("path", {
                        fill: "#0052b4",
                        d: "M0 256a256 256 0 0 0 167 240V16A256 256 0 0 0 0 256z"
                    })]
                }),
                Xt = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 512 512",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        fill: "#ffda44",
                        d: "M16 345a256 256 0 0 0 480 0l-240-22.2L16 345z"
                    }), (0, a.jsx)("path", {
                        fill: "#333",
                        d: "M256 0A256 256 0 0 0 16 167l240 22.2L496 167A256 256 0 0 0 256 0z"
                    }), (0, a.jsx)("path", {
                        fill: "#d80027",
                        d: "M16 167a255.5 255.5 0 0 0 0 178h480a255.4 255.4 0 0 0 0-178H16z"
                    })]
                }),
                er = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 512 512",
                    ...e,
                    children: [(0, a.jsx)("circle", {
                        cx: "256",
                        cy: "256",
                        r: "256",
                        fill: "#eee"
                    }), (0, a.jsx)("path", {
                        fill: "#d80027",
                        d: "M512 256A256 256 0 0 0 345 16v480a256 256 0 0 0 167-240z"
                    }), (0, a.jsx)("path", {
                        fill: "#6da544",
                        d: "M0 256a256 256 0 0 0 167 240V16A256 256 0 0 0 0 256z"
                    })]
                }),
                tr = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 512 512",
                    ...e,
                    children: [(0, a.jsx)("path", {
                        fill: "#ffda44",
                        d: "M0 256c0 31.3 5.6 61.3 16 89l240 22.3L496 345a255.5 255.5 0 0 0 0-178l-240-22.3L16 167a255.5 255.5 0 0 0-16 89z"
                    }), (0, a.jsx)("path", {
                        fill: "#d80027",
                        d: "M496 167a256 256 0 0 0-480 0h480zM16 345a256 256 0 0 0 480 0H16z"
                    })]
                }),
                rr = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 512 512",
                    ...e,
                    children: [(0, a.jsx)("circle", {
                        cx: "256",
                        cy: "256",
                        r: "256",
                        fill: "#d80027"
                    }), (0, a.jsx)("path", {
                        fill: "#eee",
                        d: "M389.6 211.5h-89v-89h-89.1v89h-89v89h89v89h89v-89h89z"
                    })]
                }),
                nr = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 512 512",
                    ...e,
                    children: [(0, a.jsx)("circle", {
                        cx: "256",
                        cy: "256",
                        r: "256",
                        fill: "#eee"
                    }), (0, a.jsx)("path", {
                        fill: "#0052b4",
                        d: "M53 100.1a255 255 0 0 0-44.2 89.1H142l-89-89zm450.2 89.1a255 255 0 0 0-44.1-89l-89 89h133zM8.8 322.8a255 255 0 0 0 44.1 89l89-89H9zm403-269.9a255 255 0 0 0-89-44V142l89-89zM100.2 459.1a255 255 0 0 0 89.1 44V370l-89 89zm89-450.3a255 255 0 0 0-89 44.1l89 89.1V8.8zm133.6 494.4a255 255 0 0 0 89-44.1l-89-89v133zM370 322.8l89 89a255 255 0 0 0 44.2-89H370z"
                    }), (0, a.jsxs)("g", {
                        fill: "#d80027",
                        children: [(0, a.jsx)("path", {
                            d: "M509.8 222.6H289.4V2.2A258.6 258.6 0 0 0 256 0c-11.3 0-22.5.7-33.4 2.2v220.4H2.2A258.6 258.6 0 0 0 0 256c0 11.3.7 22.5 2.2 33.4h220.4v220.4a258.4 258.4 0 0 0 66.8 0V289.4h220.4A258.5 258.5 0 0 0 512 256c0-11.3-.7-22.5-2.2-33.4z"
                        }), (0, a.jsx)("path", {
                            d: "M322.8 322.8L437 437a256.6 256.6 0 0 0 15-16.4l-97.7-97.8h-31.5zm-133.6 0L75 437a256.6 256.6 0 0 0 16.4 15l97.8-97.7v-31.5zm0-133.6L75 75a256.6 256.6 0 0 0-15 16.4l97.7 97.8h31.5zm133.6 0L437 75a256.3 256.3 0 0 0-16.4-15l-97.8 97.7v31.5z"
                        })]
                    })]
                }),
                ir = e => (0, a.jsxs)("svg", {
                    viewBox: "0 0 512 512",
                    ...e,
                    children: [(0, a.jsx)("circle", {
                        cx: "256",
                        cy: "256",
                        r: "256",
                        fill: "#eee"
                    }), (0, a.jsx)("path", {
                        fill: "#d80027",
                        d: "M244.9 256H512c0-23.1-3-45.5-8.8-66.8H244.9V256zm0-133.6h229.5a257.4 257.4 0 0 0-59-66.7H244.9v66.7zM256 512c60.2 0 115.6-20.8 159.4-55.7H96.6A254.9 254.9 0 0 0 256 512zM37.6 389.6h436.8a254.5 254.5 0 0 0 28.8-66.8H8.8a254.5 254.5 0 0 0 28.8 66.8z"
                    }), (0, a.jsx)("path", {
                        fill: "#0052b4",
                        d: "M118.6 40h23.3l-21.7 15.7 8.3 25.6-21.7-15.8-21.7 15.8 7.2-22a257.4 257.4 0 0 0-49.7 55.3h7.5l-13.8 10a255.6 255.6 0 0 0-6.2 11l6.6 20.2-12.3-9a253.6 253.6 0 0 0-8.4 20l7.3 22.3H50L28.4 205l8.3 25.5L15 214.6l-13 9.5A258.5 258.5 0 0 0 0 256h256V0c-50.6 0-97.7 14.7-137.4 40zm9.9 190.4l-21.7-15.8-21.7 15.8 8.3-25.5L71.7 189h26.8l8.3-25.5 8.3 25.5h26.8l-21.7 16 8.3 25.5zm-8.3-100l8.3 25.4-21.7-15.7-21.7 15.7 8.3-25.5-21.7-15.7h26.8l8.3-25.6 8.3 25.6h26.8l-21.7 15.7zm100.1 100l-21.7-15.8-21.7 15.8 8.3-25.5-21.7-15.8h26.8l8.3-25.5 8.3 25.5h26.8L212 205l8.3 25.5zm-8.3-100l8.3 25.4-21.7-15.7-21.7 15.7 8.3-25.5-21.7-15.7h26.8l8.3-25.6 8.3 25.6h26.8L212 130.3zm0-74.7l8.3 25.6-21.7-15.8L177 81.3l8.3-25.6L163.5 40h26.8l8.3-25.5L207 40h26.8L212 55.7z"
                    })]
                }),
                ar = {
                    ICON_ACCOUNT_SWITCH_SYSTEM: e => (0, a.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        ...e,
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21 6.911l-9-4.5-9 4.5V8.5h18V6.91zm-9-2.823L17.823 7H6.177L12 4.088zM19.5 10v8H18v-8h1.5zM6 10v8H4.5v-8H6zM3 21h18v-1.5H3V21zm9-9.948h.429V10l1.714 1.684-1.714 1.684v-1.052H12a1.74 1.74 0 00-1.212.493 1.682 1.682 0 00-.502 1.19H9c0-.386.078-.77.228-1.127.151-.358.372-.683.65-.956.28-.274.61-.491.974-.64A3.046 3.046 0 0112 11.053zm0 5.895h-.429V18l-1.714-1.684 1.714-1.685v1.053H12a1.742 1.742 0 001.212-.493A1.684 1.684 0 0013.714 14H15c0 .387-.078.77-.228 1.128-.151.357-.372.682-.65.956a3.046 3.046 0 01-2.121.863z"
                        })
                    }),
                    ICON_APP_SETTINGS_SYSTEM: e => (0, a.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M13 4.5h-2c-1.425 0-2.403.001-3.162.063-.74.06-1.139.172-1.427.318a3.5 3.5 0 00-1.53 1.53c-.146.288-.257.686-.318 1.427C4.501 8.597 4.5 9.575 4.5 11v2c0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 001.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063h1V21h-1c-2.8 0-4.2 0-5.27-.545a5 5 0 01-2.185-2.185C3 17.2 3 15.8 3 13v-2c0-2.8 0-4.2.545-5.27A5 5 0 015.73 3.545C6.8 3 8.2 3 11 3h2c2.8 0 4.2 0 5.27.545a5 5 0 012.185 2.185C21 6.8 21 8.2 21 11v1h-1.5v-1c0-1.425-.001-2.403-.063-3.162-.06-.74-.172-1.139-.319-1.427a3.5 3.5 0 00-1.529-1.53c-.288-.146-.686-.257-1.427-.318C15.403 4.501 14.425 4.5 13 4.5z"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M15.597 15.184l-1.068-.358c-.369.41-.654.897-.829 1.434l.845.746a3.027 3.027 0 000 .988l-.845.746c.175.537.46 1.024.829 1.434l1.068-.358c.253.209.542.377.855.495l.224 1.103a4.019 4.019 0 001.656 0l.224-1.104c.313-.117.602-.285.855-.494l1.068.358c.369-.41.654-.897.829-1.434l-.845-.746a3.027 3.027 0 000-.988l.845-.746a3.995 3.995 0 00-.829-1.434l-1.068.358a2.994 2.994 0 00-.855-.494l-.224-1.104a4.019 4.019 0 00-1.656 0l-.224 1.104a2.994 2.994 0 00-.855.494zM19 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                        })]
                    }),
                    ICON_ARROW_CIRCLE_UP_SYSTEM: e => {
                        const {
                            isDark: t
                        } = (0, n.useContext)(i.Z);
                        return (0, a.jsxs)("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            ...e,
                            children: [(0, a.jsx)("path", {
                                d: "M8.53033 11.5303L11.25 8.81066L11.25 17L12.75 17L12.75 8.81066L15.4697 11.5303L16.5303 10.4697L12.5303 6.46967C12.2374 6.17678 11.7626 6.17678 11.4697 6.46967L7.46967 10.4697L8.53033 11.5303Z",
                                fill: t ? "#EBDDCC" : "#A67931"
                            }), (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z",
                                fill: t ? "#EBDDCC" : "#A67931"
                            })]
                        })
                    },
                    ICON_MONEYBEAM_SYSTEM: e => (0, a.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M20.5 18h-14v-1.5h14v-9h-14V6h14A1.5 1.5 0 0 1 22 7.5v9a1.5 1.5 0 0 1-1.5 1.5ZM5 9.5H.5V11H5V9.5ZM2 6h3v1.5H2V6ZM2 14.5h3V13H2v1.5ZM5 18H3.5v-1.5H5V18Z",
                            fill: "currentColor"
                        }), (0, a.jsx)("path", {
                            d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                            fill: "currentColor"
                        })]
                    }),
                    ICON_TRANSFER_BANK_SYSTEM: e => (0, a.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        ...e,
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m12 2.411 9 4.5V8.5H3V6.91l9-4.5ZM17.823 7 12 4.088 6.177 7h11.646ZM19.5 18v-8H18v8h1.5ZM6 10v8H4.5v-8H6Zm15 11H3v-1.5h18V21Zm-10.5-3v-8H9v8h1.5Zm4.5-8v8h-1.5v-8H15Z",
                            fill: "currentColor"
                        })
                    }),
                    ICON_ARROW_DOWN_SYSTEM: Zt,
                    ICON_ARROW_LEFT_THIN_SYSTEM: e => {
                        const {
                            isDark: t
                        } = (0, n.useContext)(i.Z);
                        return (0, a.jsx)("svg", {
                            viewBox: "0 0 18 16",
                            fill: "none",
                            ...e,
                            children: (0, a.jsx)("path", {
                                d: "M2.565 8.747l5.72 5.697-1.06 1.056-7-6.972a.745.745 0 010-1.056l7-6.972 1.06 1.056-5.72 5.697H18v1.494H2.565z",
                                fill: t ? "#D9D9D9" : "#1B1B1B"
                            })
                        })
                    },
                    ICON_ARROW_OUT_SYSTEM: e => (0, a.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M8.50001 4.5L19.5 4.5L19.5 19.5L8.50001 19.5V15H7.00001V19.5C7.00001 20.3284 7.67158 21 8.50001 21L19.5 21C20.3284 21 21 20.3284 21 19.5L21 4.5C21 3.67157 20.3284 3 19.5 3L8.50001 3C7.67158 3 7.00001 3.67157 7.00001 4.5L7.00001 9H8.50001V4.5Z",
                            fill: "currentcolor"
                        }), (0, a.jsx)("path", {
                            d: "M16.5303 12.5303C16.8232 12.2374 16.8232 11.7626 16.5303 11.4697L12.5303 7.46967L11.4697 8.53033L14.1893 11.25L3 11.25L3 12.75L14.1893 12.75L11.4697 15.4697L12.5303 16.5303L16.5303 12.5303Z",
                            fill: "currentcolor"
                        })]
                    }),
                    ICON_ARROW_RIGHT_BOLD_SYSTEM: e => (0, a.jsx)("svg", {
                        viewBox: "0 0 32 32",
                        fill: "none",
                        ...e,
                        children: (0, a.jsx)("path", {
                            d: "M19.414 27.414l10-10a2 2 0 0 0 0-2.828l-10-10a2 2 0 1 0-2.828 2.828L23.172 14H4a2 2 0 1 0 0 4h19.172l-6.586 6.586c-.39.39-.586.902-.586 1.414s.195 1.024.586 1.414a2 2 0 0 0 2.828 0z"
                        })
                    }),
                    ICON_ARROW_RIGHT_THIN_SYSTEM: e => (0, a.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ...e,
                        children: (0, a.jsx)("path", {
                            d: "M20.1893 11.2501L13.4697 4.53039L14.5303 3.46973L22.5303 11.4697C22.8232 11.7626 22.8232 12.2375 22.5303 12.5304L14.5303 20.5304L13.4697 19.4697L20.1893 12.7501L2 12.7501L2 11.2501L20.1893 11.2501Z",
                            fill: "currentcolor"
                        })
                    }),
                    ICON_ARROW_TOP_RIGHT_SYSTEM: l,
                    ICON_ARROW_SPLIT_SYSTEM: e => {
                        const {
                            isDark: t
                        } = (0, n.useContext)(i.Z);
                        return (0, a.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            ...e,
                            children: (0, a.jsx)("path", {
                                d: "M3.75 3a.75.75 0 00-.75.75V9.5h1.5V5.56l6.75 6.75V21h1.5v-9a.75.75 0 00-.22-.53L5.56 4.5H9.5V3H3.75zM14.5 4.5h3.94l-4.97 4.97 1.06 1.06 4.97-4.97V9.5H21V3.75a.75.75 0 00-.75-.75H14.5v1.5z",
                                fill: t ? "#D9D9D9" : "#1B1B1B"
                            })
                        })
                    },
                    ICON_ATM_WITHDRAWAL_SYSTEM: e => (0, a.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M12 14C12.8284 14 13.5 13.3284 13.5 12.5C13.5 11.6716 12.8284 11 12 11C11.1716 11 10.5 11.6716 10.5 12.5C10.5 13.3284 11.1716 14 12 14Z"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M17.5 11.5H20C21.1046 11.5 22 10.6046 22 9.5V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V9.5C2 10.6046 2.89543 11.5 4 11.5H6.5L6.5 18.5C6.5 19.3284 7.17157 20 8 20H16C16.3978 20 16.7794 19.842 17.0607 19.5607C17.342 19.2794 17.5 18.8978 17.5 18.5V11.5ZM20 5.5H4C3.72386 5.5 3.5 5.72386 3.5 6V9.5C3.5 9.77614 3.72386 10 4 10H6.5V8.50002L5 8.5V7H19V8.5H17.5V10H20C20.2761 10 20.5 9.77614 20.5 9.5V6C20.5 5.72386 20.2761 5.5 20 5.5ZM16 8.50002V18.5H8V8.50002L16 8.50002Z"
                        })]
                    }),
                    ICON_BIN_SYSTEM: e => (0, a.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M8.99902 9V17H10.499V9H8.99902Z",
                            fill: "currentcolor"
                        }), (0, a.jsx)("path", {
                            d: "M13.499 17V9.00001H14.999V17H13.499Z",
                            fill: "currentcolor"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.99902 5V3.5C8.99902 2.67157 9.6706 2 10.499 2H13.499C14.3275 2 14.999 2.67157 14.999 3.5V5H20.249V6.5H18.999V18C18.999 19.6569 17.6559 21 15.999 21H7.99902C6.34217 21 4.99902 19.6569 4.99902 18V6.5H3.74902V5H8.99902ZM10.499 3.5H13.499V5H10.499V3.5ZM6.49902 6.5V18C6.49902 18.8284 7.1706 19.5 7.99902 19.5H15.999C16.8275 19.5 17.499 18.8284 17.499 18V6.5H6.49902Z",
                            fill: "currentcolor"
                        })]
                    }),
                    ICON_BAR_CODE_SYSTEM: e => (0, a.jsx)("svg", {
                        fill: "none",
                        viewBox: "0 0 24 24",
                        ...e,
                        children: (0, a.jsx)("path", {
                            fill: "currentcolor",
                            fillRule: "evenodd",
                            d: "M3 20V4h1.5v16H3zm7.5 0V4H12v16h-1.5zM6 4v16h3V4H6zm7.5 16V4H18v16h-4.5zm6-16v16H21V4h-1.5z"
                        })
                    }),
                    ICON_CALENDAR_SYSTEM: e => (0, a.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.5 5.5H4.5L4.5 19.5H19.5V5.5ZM4.5 4C3.67157 4 3 4.67157 3 5.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V5.5C21 4.67157 20.3284 4 19.5 4H4.5Z",
                            fill: "currentcolor"
                        }), (0, a.jsx)("path", {
                            d: "M7 2.5V4.5",
                            stroke: "currentcolor",
                            strokeWidth: "1.5"
                        }), (0, a.jsx)("path", {
                            d: "M17 2.5V4.5",
                            stroke: "currentcolor",
                            strokeWidth: "1.5"
                        }), (0, a.jsx)("line", {
                            x1: "20",
                            y1: "7.75",
                            x2: "4",
                            y2: "7.75",
                            stroke: "currentcolor",
                            strokeWidth: "1.5"
                        })]
                    }),
                    ICON_CARD_COLORED_SYSTEM: e => (0, a.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M20.5 6.5h-17v11H15V19H3.5A1.5 1.5 0 012 17.5v-11A1.5 1.5 0 013.5 5h17A1.5 1.5 0 0122 6.5V11h-1.5V6.5z"
                        }), (0, a.jsx)("path", {
                            d: "M6 10h4v3H6z"
                        }), (0, a.jsx)("path", {
                            d: "M21.798 14.202L19.5 11.904l-2.298 2.298a3.25 3.25 0 104.596 0zm-2.298-.177l-1.237 1.238A1.748 1.748 0 0019.5 18.25v-4.225z"
                        })]
                    }),
                    ICON_CARD_MULTIPLE_SYSTEM: e => (0, a.jsxs)("svg", {
                        fillRule: "evenodd",
                        viewBox: "0 0 24 24",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M2 5.5A1.5 1.5 0 013.5 4h13A1.5 1.5 0 0118 5.5V8h2.5A1.5 1.5 0 0122 9.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 016 18.5V16H3.5A1.5 1.5 0 012 14.5v-9zm1.5 0h13v9h-13v-9zm4 10.5v2.5h13v-9H18v5a1.5 1.5 0 01-1.5 1.5h-9z"
                        }), (0, a.jsx)("path", {
                            d: "M6 8h3v2H6z"
                        })]
                    }),
                    ICON_CARD_SHINY_SYSTEM: e => (0, a.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M20.5 6.5h-17v11H15V19H3.5A1.5 1.5 0 012 17.5v-11A1.5 1.5 0 013.5 5h17A1.5 1.5 0 0122 6.5V12h-1.5V6.5z"
                        }), (0, a.jsx)("path", {
                            d: "M6 10h4v3H6zM18.5 15.5l1-2 1 2 2 1-2 1-1 2-1-2-2-1 2-1zM16.5 11.5l-.667 1.333-1.333.667 1.333.667.667 1.333.667-1.333L18.5 13.5l-1.333-.667L16.5 11.5z"
                        })]
                    }),
                    ICON_CARD_SYSTEM: e => (0, a.jsxs)("svg", {
                        fillRule: "evenodd",
                        viewBox: "0 0 24 24",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M6 10h4v3H6z"
                        }), (0, a.jsx)("path", {
                            d: "M2 6.5A1.5 1.5 0 013.5 5h17A1.5 1.5 0 0122 6.5v11a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 17.5v-11zm1.5 0h17v11h-17v-11z"
                        })]
                    }),
                    ICON_CAR_SYSTEM: e => (0, a.jsxs)("svg", {
                        fillRule: "evenodd",
                        viewBox: "0 0 24 24",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M20.5 18a1.5 1.5 0 001.5-1.5v-3.084c0-.49-.06-.978-.178-1.451a1.5 1.5 0 00.878-.565l.002-.003c.036-.047.069-.098.099-.15l.004-.007a1.5 1.5 0 00-1.122-2.229l-.011-.001A1.394 1.394 0 0021.5 9h-1l-1.671-3.342A3 3 0 0016.146 4H7.854a3 3 0 00-2.683 1.658L3.5 9h-1a1.578 1.578 0 00-.302.03 1.5 1.5 0 00-.999 2.218l.004.006c.029.05.062.099.097.146l.036.047c.211.258.505.445.842.518A5.999 5.999 0 002 13.416V16.5A1.5 1.5 0 003.5 18v2A1.5 1.5 0 005 21.5h2A1.5 1.5 0 008.5 20v-2h7v2a1.5 1.5 0 001.5 1.5h2a1.5 1.5 0 001.5-1.5v-2zm0-1.5v-3.084c0-.698-.163-1.387-.475-2.012l-.452-.904H4.427l-.452.904a4.506 4.506 0 00-.475 2.012V16.5h17zM5.177 9h13.646l-1.335-2.671a1.5 1.5 0 00-1.342-.829H7.854c-.568 0-1.087.321-1.342.829L5.177 9zM19 18h-2v2h2v-2zM5 18h2v2H5v-2z"
                        }), (0, a.jsx)("path", {
                            d: "M17.5 15a1.5 1.5 0 10-.001-3.001A1.5 1.5 0 0017.5 15zM9.5 12.75h5v1.5h-5zM8 13.5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 018 13.5z"
                        })]
                    }),
                    ICON_CASHBACK_EURO_SYSTEM: e => (0, a.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M13.19 3.25l-.72-.72 1.06-1.06 2 2a.75.75 0 010 1.06l-2 2-1.06-1.06.72-.72H12a7.25 7.25 0 00-5.127 12.377l-1.06 1.06A8.75 8.75 0 0112 3.25h1.19zM10.47 22.53l-2-2a.75.75 0 010-1.06l2-2 1.06 1.06-.72.72H12a7.25 7.25 0 005.127-12.376l1.06-1.061A8.75 8.75 0 0112 20.75h-1.19l.72.72-1.06 1.06z"
                        }), (0, a.jsx)("path", {
                            d: "M12 7.75a2.75 2.75 0 00-2.739 2.5H8.5v1.5h.75v.5H8.5v1.5h.761a2.75 2.75 0 005.489-.25h-1.5a1.25 1.25 0 01-2.475.25H12.5v-1.5h-1.75v-.5h1.75v-1.5h-1.725a1.25 1.25 0 012.475.25h1.5A2.75 2.75 0 0012 7.75z"
                        })]
                    }),
                    ICON_CENT_COINS_SYSTEM: e => (0, a.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        ...e,
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "nonzero",
                            children: [(0, a.jsx)("circle", {
                                cx: "10",
                                cy: "12",
                                r: "7.25",
                                stroke: "currentcolor",
                                strokeWidth: "1.5"
                            }), (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M14.7189 18.4607C13.9137 19.0498 12.9943 19.4921 12 19.748C12.6392 19.9125 13.3094 20 14 20C18.4183 20 22 16.4183 22 12C22 7.58172 18.4183 4 14 4C13.3094 4 12.6392 4.08751 12 4.25203C12.9943 4.50794 13.9137 4.95018 14.7189 5.53931C17.9705 5.89707 20.5 8.65313 20.5 12C20.5 15.3469 17.9705 18.1029 14.7189 18.4607Z",
                                fill: "currentcolor"
                            }), (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M10.75 7.5V8.60352C11.827 8.90812 12.6354 9.85242 12.7388 11H11.225C11.1092 10.4294 10.6047 10 10 10C9.30964 10 8.75 10.5596 8.75 11.25V12.75C8.75 13.4404 9.30964 14 10 14C10.6047 14 11.1092 13.5706 11.225 13H12.7388C12.6354 14.1476 11.827 15.0919 10.75 15.3965V16.5H9.25V15.3965C8.09575 15.07 7.25 14.0088 7.25 12.75V11.25C7.25 9.99122 8.09575 8.92998 9.25 8.60352V7.5H10.75Z",
                                fill: "currentcolor"
                            })]
                        })
                    }),
                    ICON_CHECKBOX_CHECKED_SYSTEM: e => (0, a.jsx)("svg", {
                        viewBox: "0 0 32 32",
                        ...e,
                        children: (0, a.jsx)("path", {
                            d: "M 4 0 C 1.784 0 0 1.784 0 4 L 0 28 C 0 30.216 1.784 32 4 32 L 28 32 C 30.216 32 32 30.216 32 28 L 32 4 C 32 1.784 30.216 0 28 0 L 4 0 z M 22 9.5859375 L 23.414062 11 L 22.707031 11.707031 L 13.001953 21.414062 L 9.2929688 17.705078 L 8.5859375 16.998047 L 10 15.583984 L 10.707031 16.291016 L 13.001953 18.585938 L 21.292969 10.292969 L 22 9.5859375 z ",
                            fill: "currentColor"
                        })
                    }),
                    ICON_CHECKBOX_UNCHECKED_SYSTEM: e => (0, a.jsx)("svg", {
                        viewBox: "0 0 32 32",
                        ...e,
                        children: (0, a.jsx)("rect", {
                            stroke: "currentColor",
                            strokeWidth: "1",
                            fill: "none",
                            width: "30",
                            height: "30",
                            rx: "4",
                            ry: "4",
                            x: "1",
                            y: "1"
                        })
                    }),
                    ICON_CHECKMARK_CIRCLED_SYSTEM: e => (0, a.jsx)("svg", {
                        viewBox: "0 0 16 16",
                        ...e,
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            transform: "translate(2 2)",
                            children: [(0, a.jsx)("path", {
                                fill: "currentColor",
                                d: "M8.775 3.194a.662.662 0 1 1 .936.935L5.035 8.804A.662.662 0 0 1 4.542 9a.65.65 0 0 1-.453-.19l-1.88-1.88A.657.657 0 0 1 2.215 6a.661.661 0 0 1 .931-.005L4.559 7.41l4.216-4.215z"
                            }), (0, a.jsx)("circle", {
                                cx: "6",
                                cy: "6",
                                r: "6.75",
                                stroke: "currentColor",
                                strokeWidth: "1.5"
                            })]
                        })
                    }),
                    ICON_CHECKMARK_FILLED_SYSTEM: e => (0, a.jsxs)("svg", {
                        viewBox: "0 0 26 26",
                        fill: "none",
                        ...e,
                        children: [(0, a.jsx)("rect", {
                            x: 0,
                            y: 0,
                            width: 26,
                            height: 26,
                            rx: 13,
                            fill: "currentColor",
                            stroke: "none"
                        }), (0, a.jsx)("path", {
                            className: "animated-tick",
                            d: "M7 14.998L10.002 18 19 9",
                            fill: "none",
                            stroke: "var(--iconography-default-inverted)",
                            strokeWidth: 2,
                            "stroke-line-cap": "square",
                            "stroke-dash-array": 20,
                            "stroke-dash-offset": 0,
                            "transition-property": "stroke-dashoffset",
                            "transition-duration": 0,
                            "transition-timing-function": "cubic-bezier(0.445, 0.05, 0.55, 0.95)"
                        })]
                    }),
                    ICON_CHECKMARK_INSTALMENTS_SYSTEM: R,
                    ICON_CHECKMARK_OUTLINED_CIRCLED_SYSTEM: E,
                    ICON_CHECKMARK_SIMPLE_SYSTEM: j,
                    ICON_CHECKMARK_UNCHECKED_SYSTEM: e => (0, a.jsx)("svg", {
                        viewBox: "0 0 26 26",
                        fill: "none",
                        ...e,
                        children: (0, a.jsx)("rect", {
                            x: .5,
                            y: .5,
                            width: 25,
                            height: 25,
                            rx: 13,
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: 1
                        })
                    }),
                    ICON_CHEVRON_LEFT_SYSTEM: function(e) {
                        const {
                            isDark: t
                        } = (0, n.useContext)(i.Z);
                        return (0, a.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            ...e,
                            children: (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M9.06 12l5.47 5.47-1.06 1.06-6-6a.75.75 0 010-1.06l6-6 1.06 1.06L9.06 12z",
                                fill: t ? "#fff" : "#2D2D2D"
                            })
                        })
                    },
                    ICON_CHEVRON_RIGHT_SYSTEM: A,
                    ICON_CONTACTLESS_PAYMENTS_SYSTEM: e => (0, a.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fillRule: "evenodd",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M14.257 9.879a2.998 2.998 0 010 4.242M16.379 7.757a6.001 6.001 0 010 8.486M18.5 5.636a9 9 0 010 12.728",
                            fill: "none",
                            stroke: "currentcolor",
                            strokeWidth: 1.5
                        }), (0, a.jsx)("path", {
                            d: "M6 10h3v2H6z"
                        }), (0, a.jsx)("path", {
                            d: "M15 7.5H3.5v9H15V18H3.5A1.5 1.5 0 012 16.5v-9A1.5 1.5 0 013.5 6H15v1.5z"
                        })]
                    }),
                    ICON_COPY_SYSTEM: e => (0, a.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        ...e,
                        children: [(0, a.jsx)("path", {
                            d: "M9.429 1.765a.598.598 0 0 0-.608.588V5.29h7.075v12.944h5.675a.598.598 0 0 0 .608-.588V2.353a.598.598 0 0 0-.608-.588H9.43zm0-1.765H21.57C22.913 0 24 1.053 24 2.353v15.294c0 1.3-1.087 2.353-2.429 2.353h-5.677V5.294H7V2.353C7 1.053 8.087 0 9.429 0z"
                        }), (0, a.jsx)("path", {
                            d: "M2.429 5.765a.598.598 0 0 0-.608.588v15.294c0 .325.272.588.608.588H14.57a.598.598 0 0 0 .608-.588V6.353a.598.598 0 0 0-.608-.588H2.43zm0-1.765H14.57C15.913 4 17 5.053 17 6.353v15.294c0 1.3-1.087 2.353-2.429 2.353H2.43C1.087 24 0 22.947 0 21.647V6.353C0 5.053 1.087 4 2.429 4z"
                        })]
                    }),
                    ICON_CORNERED_SHEET_SYSTEM: e => (0, a.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        ...e,
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "nonzero",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: [(0, a.jsx)("path", {
                                d: "M6 2h7.172a2 2 0 0 1 1.414.586l4.828 4.828A2 2 0 0 1 20 8.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
                            }), (0, a.jsx)("path", {
                                d: "M14 2v4a2 2 0 0 0 2 2h4"
                            })]
                        })
                    }),
                    ICON_CROSS_SYSTEM: r(80341).Z,
                    ICON_CURRENCY_SYSTEM: L,
                    ICON_CURRENT_LOCATION_SYSTEM: M,
                    ICON_DASH_SYSTEM: T,
                    ICON_DARTS_PIE_SYSTEM: O,
                    ICON_DISCOUNT_SYSTEM: w,
                    ICON_DOCUMENT_SYSTEM: P,
                    ICON_DOCUMENT_LEGAL_SYSTEM: H,
                    ICON_DOWNLOAD_CIRCLED_SYSTEM: Z,
                    ICON_DOWNLOAD_SYSTEM: V,
                    ICON_EMAIL_SYSTEM: F,
                    ICON_END_DATE_SYSTEM: W,
                    ICON_EXPERIENCES_SYSTEM: G,
                    ICON_EYE_CLOSED_SYSTEM: K,
                    ICON_EYE_OPENED_SYSTEM: $,
                    ICON_FLASH_ON_SYSTEM: q,
                    ICON_FLIGHT_SYSTEM: J,
                    ICON_FORM_TAX_SYSTEM: Q,
                    ICON_GEAR_SYSTEM: X,
                    ICON_GLOBE_SYSTEM: te,
                    ICON_INFORMATION_SYSTEM: oe,
                    ICON_INSTALMENTS_SYSTEM: le,
                    ICON_LANGUAGE_SYSTEM: de,
                    ICON_LOCK_CLOSED_SYSTEM: ve,
                    ICON_LINK_SYSTEM: pe,
                    ICON_LOCK_OPENED_SYSTEM: Ce,
                    ICON_LUGGAGE_SYSTEM: ye,
                    ICON_MAGNIFIER_SYSTEM: be,
                    ICON_MEDICAL_SYSTEM: Ee,
                    ICON_MONEY_DOWN_SYSTEM: Be,
                    ICON_MONEY_UP_SYSTEM: Le,
                    ICON_MOON_SYSTEM: Me,
                    ICON_PAPERCLIP_SYSTEM: we,
                    ICON_PASSWORD_SYSTEM: Ie,
                    ICON_PAYMENT_MOBILE_SYSTEM: Pe,
                    ICON_PENCIL_SYSTEM: Ze,
                    ICON_PERSON_ADD_SYSTEM: Ve,
                    ICON_PERSON_ARROW_IN_SYSTEM: Vt,
                    ICON_PERSON_REMOVE_SYSTEM: Fe,
                    ICON_PERSON_SYSTEM: We,
                    ICON_PHONE_COMMUNICATION_SYSTEM: Ye,
                    ICON_PHONE_PAYMENTS_SYSTEM: Ue,
                    ICON_PUSH_NOTIFICATIONS_SYSTEM: Ge,
                    ICON_PLUS_SYSTEM: Ke,
                    ICON_REFRESH_SYSTEM: Je,
                    ICON_SCOOTER_SYSTEM: et,
                    ICON_SHIELD_CHECKMARK_SYSTEM: rt,
                    ICON_SHOPPING_BAG_SYSTEM: Ut,
                    ICON_SIMPLE_BELL_SYSTEM: nt,
                    ICON_SPACES_SYSTEM: ot,
                    ICON_INSIGHTS_SYSTEM: dt,
                    ICON_SUN_SYSTEM: ut,
                    ICON_SUPPORT_CATEGORY_ACCOUNT_SYSTEM: ht,
                    ICON_SUPPORT_CATEGORY_APP_SYSTEM: pt,
                    ICON_SUPPORT_CATEGORY_CARDS_SYSTEM: vt,
                    ICON_SUPPORT_CATEGORY_MEMBERSHIP_SYSTEM: Ct,
                    ICON_SUPPORT_CATEGORY_PAYMENTS_SYSTEM: ft,
                    ICON_SUPPORT_CATEGORY_SECURITY_SYSTEM: gt,
                    ICON_SUPPORT_CATEGORY_SETTINGS_SYSTEM: mt,
                    ICON_SUPPORT_CHAT_BOT_SYSTEM: xt,
                    ICON_SUPPORT_CHAT_SYSTEM: yt,
                    ICON_THREE_DOTS_SYSTEM: bt,
                    ICON_THREE_DOTS_OUTLINED_CIRCLED_SYSTEM: Rt,
                    ICON_TRANSFER_RECURRENT_SYSTEM: _t,
                    ICON_TRIP_SYSTEM: kt,
                    ICON_TWO_CHECKMARKS_SYSTEM: Bt,
                    ICON_TWO_PERSONS_SYSTEM: Mt,
                    ICON_UPCOMING_PAYMENTS_SYSTEM: Tt,
                    ICON_VAULT_SYSTEM: Ot,
                    ICON_WARNING_FILLED_SYSTEM: Nt,
                    ICON_WARNING_OUTLINED_CIRCLED_SYSTEM: Ht,
                    ICON_WARNING_SYSTEM: It,
                    ICON_WINTER_SYSTEM: Pt,
                    ICON_FILTER_OPTIONS_SYSTEM: Gt,
                    ICON_MINUS_CIRCLE: Kt
                },
                or = l,
                sr = R,
                lr = E,
                dr = j,
                cr = A,
                ur = T,
                hr = oe,
                pr = Ze,
                vr = We,
                Cr = Ut,
                fr = It,
                gr = Kt,
                mr = {
                    ICON_ALERT_IMPORTANT_SPOT: s,
                    ICON_ARROW_SPLIT_SPOT: o,
                    ICON_ARROWS_SPOT: d,
                    ICON_BANK_BUILDING_GREY_SPOT: c,
                    ICON_BANK_BUILDING_SPOT: u,
                    ICON_BANK_LIGHT_SPOT: h,
                    ICON_BELL_SPOT: p,
                    ICON_CARD_SPOT: f,
                    ICON_CAR_SPOT: v,
                    ICON_CARD_COLORED_SPOT: C,
                    ICON_CASH_26_SPOT: x,
                    ICON_CENT_COINS_SPOT: y,
                    ICON_CHECKMARK_INSTALMENTS_SPOT: b,
                    ICON_CHECKMARK_SPOT: _,
                    ICON_CLOCK_SPOT: k,
                    ICON_CONFIRM_IDENTITY_SPOT: B,
                    ICON_DARTS_PIE_SPOT: D,
                    ICON_DASH_SPOT: S,
                    ICON_DOCUMENT_CHECKMARK_SPOT: N,
                    ICON_DOCUMENT_NOTIFICATION_LIGHT_SPOT: I,
                    ICON_DONATE_SPOT: m,
                    ICON_EMAIL_SPOT: z,
                    ICON_ERROR_LIGHT_SPOT: U,
                    ICON_GIFTBOX_SPOT: ee,
                    ICON_HEART_MAIL_SPOT: re,
                    ICON_HOTEL_SPOT: ne,
                    ICON_INFINITY_SPOT: ie,
                    ICON_INFORMATION_SPOT: se,
                    ICON_LENSE_CHECKMARK_SPOT: ce,
                    ICON_LINKED_CIRCLES_SPOT: ue,
                    ICON_LIST_SPOT: he,
                    ICON_LOCK_SPOT: ge,
                    ICON_LOCK_OPEN_WARNING_SPOT: fe,
                    ICON_LOGIN_SPOT: me,
                    ICON_LOGO_SPOT: xe,
                    ICON_MASTERCARD_SPOT: Re,
                    ICON_MISSED_PAYMENTS_SPOT: je,
                    ICON_MONEY_ARROW_DOWN_SPOT: _e,
                    ICON_MONEY_ARROW_UP_SPOT: Ae,
                    ICON_MONEY_BEAM_SPOT: ke,
                    ICON_NEW_CARD_SPOT: Se,
                    ICON_NO_RESULTS_SPOT: Te,
                    ICON_FAILED_SEARCH_SPOT: De,
                    ICON_ONLINE_SERVICE_SPOT: Oe,
                    ICON_PARTY_SPOT: Ne,
                    ICON_PARTY_LIGHT_SPOT: He,
                    ICON_PERSON_REMOVE_SPOT: ze,
                    ICON_POLICE_SPOT: $e,
                    ICON_REPAYMENT_SPOT: qe,
                    ICON_RING_BELL_SPOT: Qe,
                    ICON_SCALES_SPOT: Xe,
                    ICON_SHIELD_CHECKMARK: tt,
                    ICON_SPACES_MOVE_SPOT: it,
                    ICON_SPACES_SPOT: at,
                    ICON_SPEEDOMETER_SPOT: st,
                    ICON_STORE_CARD_SPOT: g,
                    ICON_SQUARES_SPOT: lt,
                    ICON_STORE_SPOT: ct,
                    ICON_TIMER_SPOT: Et,
                    ICON_TOGGLE_SPOT: jt,
                    ICON_TRASH_BIN_SPOT: At,
                    ICON_TWO_PEOPLE_SPOT: Lt,
                    ICON_UPCOMING_PAYMENTS_SPOT: St,
                    ICON_TRANSFERS_RECURRENT_SPOT: zt,
                    ICON_TRANSFERS_SCHEDULED_SPOT: Ft,
                    ICON_VAULT_SPOT: Dt,
                    ICON_WALLET_SPOT: wt,
                    ICON_NOTIFICATIONS_SPOT: Wt,
                    ICON_EDIT_SPOT: Yt
                },
                xr = b,
                yr = S,
                br = ie,
                Rr = {
                    ICON_AT_UTILITY: $t,
                    ICON_BR_UTILITY: qt,
                    ICON_CH_UTILITY: rr,
                    ICON_DE_UTILITY: Xt,
                    ICON_ES_UTILITY: tr,
                    ICON_EU_UTILITY: Jt,
                    ICON_FR_UTILITY: Qt,
                    ICON_GB_UTILITY: nr,
                    ICON_IT_UTILITY: er,
                    ICON_US_UTILITY: ir
                },
                Er = {
                    ICON_ERROR_INDICATOR: Y,
                    ICON_INFORMATION_FILLED_INDICATOR: ae
                },
                jr = ae,
                _r = ["0.75em", "1rem", "1.5rem", "2rem", "3rem", "6rem"],
                Ar = ["1.5rem", "2rem", "3rem", "4.5rem"]
        },
        22727: (e, t, r) => {
            "use strict";
            r.d(t, {
                z: () => n
            });
            const n = {
                NONE: "none",
                DEFAULT: `0 0.125rem 0.25rem 0 ${r(77523).yb.DISTINCT}`
            }
        },
        89341: (e, t, r) => {
            "use strict";
            r.d(t, {
                t: () => n
            });
            const n = {
                NONE: "0",
                TIGHTEST: "0.25rem",
                TIGHTER: "0.5rem",
                TIGHT: "0.75rem",
                BASE: "1rem",
                LOOSE: "1.5rem",
                LOOSER: "2rem",
                LOOSEST: "3rem"
            }
        },
        48337: (e, t, r) => {
            "use strict";
            r.d(t, {
                HR: () => o,
                X$: () => a,
                bm: () => i,
                u: () => n
            });
            const n = ["0.625rem", "0.75rem", "0.8125rem", "0.875rem", "0.9375rem", "1rem", "1.125rem", "1.1875rem", "1.3125rem", "1.5rem", "1.8125rem", "2rem", "2.125rem", "3rem"],
                i = ["var(--line-height-xs)", "var(--line-height-s)", "var(--line-height-m)", "var(--line-height-l)", "var(--line-height-xl)", "var(--line-height-2-xl)", "var(--line-height-3-xl)", "var(--line-height-4-xl)", "var(--line-height-5-xl)"],
                a = ["-0.025em", "-0.00625em", "0.00625em", "0.0625em", "0.08em"],
                o = ["0.11ch", "0.33ch", "0.55ch", "0.825ch", "1.1ch", "3.3ch", "5.5ch", "8.8ch", "11ch", "13.2ch", "15.4ch", "22ch", "27.5ch", "33ch", "41.8ch", "44ch", "48.4ch", "49.5ch", "66ch", "71.5ch", "77ch", "88ch"]
        },
        39839: (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => n
            });
            const n = ["0rem", "0.25rem", "0.5rem", "1rem", "1.5rem", "2rem", "3rem", "5rem", "6rem", "8rem", "9rem", "10rem", "13rem", "15rem", "20rem", "25rem", "30rem", "45rem", "55rem", "65rem", "75rem"]
        },
        31623: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => k
            });
            var n = r(29901),
                i = r(39422),
                a = r(74336),
                o = r(26345),
                s = r(34959),
                l = r(54265),
                d = r(76504),
                c = r(43661),
                u = r(49062),
                h = r(60375),
                p = r(36756),
                v = r(10228),
                C = r(63538),
                f = r(75018),
                g = r(62996),
                m = r(61376),
                x = r(53908),
                y = r(6918),
                b = r(72793),
                R = r(61250);
            const E = null,
                j = (0, a.ZP)({
                    resolved: {},
                    chunkName: () => "website-shared-components-WebsiteEntryPreview",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => r.e(1999).then(r.bind(r, 62675)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve() {
                        return 62675
                    }
                }),
                _ = () => {
                    const {
                        language: e,
                        country: t
                    } = (0, i.UO)(), r = o.Up[t];
                    if (!r || e !== o.k$ && r.defaultLanguage !== e) throw new Error(f.L1);
                    return null
                },
                A = e => {
                    const t = (0, n.useContext)(s.Z).locale;
                    return (0, R.jsx)(i.AW, {
                        exact: !0,
                        path: e.path,
                        render: ({
                            match: r,
                            location: n,
                            staticContext: i
                        }) => {
                            const {
                                country: a
                            } = r.params, o = {
                                country: a,
                                language: t,
                                request: e.request,
                                location: n,
                                staticContext: i
                            };
                            return (0, R.jsx)(x.l_, {
                                to: (0, g.Z)(o),
                                status: 301
                            })
                        }
                    })
                },
                k = ({
                    request: e,
                    contextData: t
                }) => () => (0, R.jsx)(b.Z, {
                    children: (0, R.jsx)(m.Z, {
                        children: (0, R.jsxs)(i.rs, {
                            children: [!1, !1, !1, !1, (0, R.jsx)(x.l_, {
                                from: "/careers",
                                to: "/en/careers",
                                status: 301
                            }), (0, R.jsx)(i.AW, {
                                path: "/:language/careers",
                                children: (0, R.jsx)(u.z, {
                                    contextData: t
                                })
                            }), (0, R.jsxs)(i.AW, {
                                path: "/:language-:country",
                                children: [(0, R.jsx)(_, {}), (0, R.jsx)(B, {
                                    contextData: t
                                })]
                            }), (0, R.jsx)(A, {
                                exact: !0,
                                path: "/:country?",
                                request: e
                            }), (0, R.jsx)(x.TX, {})]
                        })
                    })
                });

            function B({
                contextData: e
            }) {
                const {
                    path: t
                } = (0, i.$B)(), r = (0, n.useContext)(s.Z).locale, a = (0, l.l)(r, "press"), o = (0, l.l)(r, "press-releases"), u = (0, l.l)(r, "press-release");
                return (0, R.jsx)(d.Z, {
                    nonce: e.nonce,
                    children: (0, R.jsxs)(i.rs, {
                        children: [(0, R.jsx)(i.AW, {
                            path: `${t}/blog`,
                            children: (0, R.jsx)(c.A, {})
                        }), (0, R.jsx)(i.AW, {
                            path: [`${t}/legal-documents/:section?/:sectionFragment?`, `${t}/webviews/legal-documents/:section?`],
                            children: (0, R.jsx)(h.$, {})
                        }), (0, R.jsx)(i.AW, {
                            path: [`${t}/${a}/${o}`, `${t}/${a}/${u}`],
                            children: (0, R.jsx)(v.z, {})
                        }), (0, R.jsx)(i.AW, {
                            path: `${t}/:slug?`,
                            children: (0, R.jsx)(p.d, {})
                        })]
                    })
                })
            }
        },
        39101: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => k
            });
            var n = r(29901),
                i = r(55443),
                a = r(7862),
                o = r.n(a),
                s = r(84246),
                l = r(39422),
                d = r(31741),
                c = r(24086),
                u = r(20875),
                h = r(30784),
                p = r(95564),
                v = r(82102),
                C = r(8873),
                f = r(74824),
                g = r(49806),
                m = r(73601),
                x = r(9563),
                y = r(61250);
            const b = e => (0, y.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 32 32",
                ...e,
                children: (0, y.jsx)("path", {
                    d: "M22 11L10.5 22.5M10.44 11H22v11.56",
                    fill: "none"
                })
            });
            var R = r(2040),
                E = r(8428);
            const j = ({
                    href: e,
                    search: t,
                    preserveQuery: r,
                    queryStrings: n
                }) => {
                    if ((0, C.Z)(e)) return "string" == typeof e && e.startsWith("#") ? e : r && t && e ? (0, f.ZP)({
                        search: t,
                        href: e,
                        queryStrings: n
                    }) : e
                },
                _ = e => {
                    const [t, r] = (0, n.useState)(!1);
                    (0, n.useEffect)((() => r(!0)), []);
                    const i = (0, n.useContext)(p.Z),
                        a = (0, n.useContext)(h.Z),
                        o = (0, n.useContext)(u.Z),
                        C = (0, m.Z)(),
                        f = (0, l.TH)(),
                        _ = (0, c.t)(e.to) ? e.to : e.href,
                        A = (0, c.t)(e.to) ? void 0 : "object" == typeof e.to && null !== e.to ? { ...e.to
                        } : e.to,
                        k = ((e, t) => void 0 !== t ? s.rU : e ? "a" : "button")(_, A),
                        B = "button" === k ? v.eR : v.dS,
                        L = e.disabled || e.loading,
                        M = ((e, t, r) => !!t && !(e || "").trim().startsWith("mailto:") && (r || !1))(_, t, e.preserveQuery || i),
                        S = e.openInBrowser || _ ? .includes(".pdf"),
                        T = j({
                            href: _,
                            search: f.search,
                            preserveQuery: M,
                            queryStrings: e.queryStrings
                        }),
                        D = (({
                            onClick: e,
                            isWebview: t,
                            url: r,
                            openPageViewer: n,
                            shouldOpenInBrowser: i
                        }) => a => {
                            if ("function" == typeof e && e(a), t && r && !r.startsWith("number26://")) return a.preventDefault(), i ? (0, d.x)("openInBrowser", {
                                url: r
                            }) : n(r)
                        })({
                            isWebview: a,
                            onClick: e.onClick,
                            url: T,
                            shouldOpenInBrowser: S,
                            openPageViewer: o
                        }),
                        O = ((e, t) => "_blank" === t ? (e || "") + " noopener noreferrer" : e)(e.rel, e.target),
                        w = (e => {
                            let {
                                to: t,
                                search: r,
                                preserveQuery: n,
                                isWebview: i,
                                queryStrings: a
                            } = e;
                            if ("string" == typeof t && n && r) {
                                const [e] = t.split("?");
                                t = j({
                                    href: e,
                                    search: r,
                                    preserveQuery: n,
                                    queryStrings: a
                                })
                            }
                            return i ? "object" == typeof t && null !== t ? ("/" === t.pathname[0] && (t.pathname = "/webviews" + t.pathname), t) : "string" == typeof t ? "/" === t[0] ? "/webviews" + t : t : void 0 : t
                        })({
                            to: A,
                            search: f.search,
                            preserveQuery: M,
                            isWebview: a,
                            queryStrings: e.queryStrings
                        }),
                        N = { ...(0, g.Z)(B)(e),
                            ...e.dataAttributes,
                            onClick: D,
                            "aria-disabled": L || void 0,
                            ["button" === k || "a" === k ? "ref" : "innerRef"]: e.refCallback,
                            ..."button" !== k ? {
                                rel: O,
                                to: w,
                                href: T,
                                "aria-hidden": L || e["aria-hidden"],
                                tabIndex: L ? -1 : e.tabIndex
                            } : {
                                disabled: e.allowDisabled ? L : void 0
                            }
                        },
                        H = ((e, t) => r => {
                            "function" == typeof e && e(r), ("Enter" === r.key || " " === r.key) && t && r.preventDefault()
                        })(N.onKeyDown, e.loading);
                    N.onKeyDown = H;
                    const I = Boolean(e.target),
                        P = Boolean(e["aria-label"] || e.title),
                        Z = I && !P;
                    return (0, y.jsxs)(k, { ...N,
                        children: [e.loading && (0, y.jsx)(x.Z, { ...e,
                            className: void 0
                        }), e.children, Z && (0, y.jsx)(R.Z, {
                            icon: b,
                            extend: () => E.Wr,
                            label: ` ${C("ui.new_tab_link")}`
                        })]
                    })
                };
            _.defaultProps = {
                type: "button",
                openInBrowser: !1,
                href: "",
                dataAttributes: {}
            }, _.propTypes = {
                "aria-label": o().string,
                disabled: o().bool,
                loading: o().bool,
                onKeyDown: o().func,
                onClick: o().func,
                type: o().string,
                form: o().string,
                to: o().oneOfType([o().string, o().object]),
                href: o().string,
                target: o().string,
                rel: o().string,
                preserveQuery: o().bool,
                openInBrowser: o().bool
            };
            const A = ["disabled", "loading"],
                k = {
                    Blank: (0, i.Z)(E.yU.blank, _, A),
                    Default: (0, i.Z)(E.yU.default, _, A),
                    Hollow: (0, i.Z)(E.yU.hollow, _, A),
                    Inverted: (0, i.Z)(E.yU.inverted, _, A),
                    Link: (0, i.Z)(E.yU.link, _, A)
                }
        },
        8428: (e, t, r) => {
            "use strict";
            r.d(t, {
                yU: () => C,
                JU: () => d,
                _Y: () => h,
                V_: () => c,
                Wr: () => p,
                f2: () => v,
                yG: () => u
            });
            var n = r(53623),
                i = r(84079),
                a = r(86929);
            const o = {
                color: "inherit",
                textDecoration: "none",
                textAlign: "left"
            };
            var s = r(34777);
            const l = e => ({
                    cursor: "pointer",
                    padding: "var(--spacing-2-xs) var(--spacing-l)",
                    border: "2px solid transparent",
                    borderRadius: "var(--border-radius-l)",
                    backgroundColor: "var(--background-container-teal)",
                    color: "var(--typography-default-inverted)",
                    display: "inline-block",
                    textAlign: "center",
                    fontWeight: 500,
                    textDecoration: "none",
                    transitionDuration: "250ms",
                    lineHeight: "var(--line-height-l)",
                    WebkitTapHighlightColor: "transparent",
                    position: "relative",
                    ":hover": {
                        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
                        transform: "translateY(-2px)"
                    },
                    "::after": {
                        content: '""',
                        position: "absolute",
                        top: "-4px",
                        bottom: "-4px",
                        right: "-4px",
                        left: "-4px",
                        opacity: 0,
                        boxShadow: "0 0 0 2px var(--primary-focus)",
                        pointerEvents: "none",
                        borderRadius: "var(--border-radius-xl)",
                        transitionDuration: "inherit"
                    },
                    ":focus": {
                        outline: "none"
                    },
                    ":focus::after": {
                        opacity: 1
                    },
                    ...e.raisedUp ? v(e) : {},
                    ...e.loading ? c : {},
                    ...e.disabled ? d : {},
                    ..."jumbo" === e.size ? {
                        padding: "0.65em var(--spacing-xl)",
                        ...h,
                        ":hover": {
                            boxShadow: "0 7px 14px rgba(0, 0, 0, 0.2)",
                            transform: "translateY(-4px)"
                        }
                    } : {},
                    ..."small" === e.size ? {
                        padding: "var(--spacing-2-xs) var(--spacing-m)",
                        ...u,
                        ":hover": {
                            borderColor: "var(--divider-teal)",
                            backgroundColor: "var(--background-container-teal)"
                        }
                    } : {},
                    ...e.color ? {
                        backgroundClip: "padding-box",
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        borderColor: "rgba(255, 255, 255, 0.7)",
                        color: (0, s.QI)(e.color)
                    } : {}
                }),
                d = {
                    cursor: "not-allowed",
                    opacity: .5,
                    pointerEvents: "none"
                },
                c = {
                    cursor: "hourglass",
                    opacity: .75,
                    pointerEvents: "none"
                },
                u = {
                    fontSize: "var(--font-size-3-xs)"
                },
                h = {
                    fontSize: "115%"
                },
                p = {
                    fill: "none",
                    stroke: "currentcolor",
                    strokeWidth: "2px"
                },
                v = e => ({
                    position: "relative",
                    zIndex: "number" == typeof e.raisedUp ? e.raisedUp : i.FP
                }),
                C = n.Z.create({
                    blank: e => ({ ...a.Ph,
                        ...o,
                        ...e.raisedUp ? v(e) : {},
                        ...e.loading ? c : {},
                        ...e.disabled ? d : {},
                        ..."jumbo" === e.size ? h : {},
                        ..."small" === e.size ? u : {},
                        cursor: "pointer"
                    }),
                    default: l,
                    hollow: e => ({
                        position: "relative",
                        display: "inline-block",
                        cursor: "pointer",
                        paddingTop: "var(--spacing-2-xs)",
                        paddingRight: "var(--spacing-l)",
                        paddingBottom: "var(--spacing-2-xs)",
                        paddingLeft: "var(--spacing-l)",
                        border: "2px solid transparent",
                        borderRadius: "var(--border-radius-l)",
                        backgroundColor: "transparent",
                        color: "var(--typography-default)",
                        textAlign: "center",
                        textDecoration: "none",
                        transitionDuration: "250ms",
                        lineHeight: "var(--line-height-l)",
                        WebkitTapHighlightColor: "transparent",
                        "::before": {
                            content: '""',
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            boxShadow: "0 0 0 2px currentColor",
                            opacity: .3,
                            borderRadius: "var(--border-radius-m)"
                        },
                        ":hover": {
                            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
                            transform: "translateY(-2px)"
                        },
                        ":focus": {
                            outline: "none",
                            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2), 0 0 0 3px var(--primary-focus)"
                        },
                        ...e.raisedUp ? v(e) : {},
                        ...e.loading ? c : {},
                        ...e.disabled ? d : {},
                        ..."jumbo" === e.size ? {
                            padding: "var(--spacing-s) var(--spacing-xl)",
                            ...h,
                            ":hover": {
                                boxShadow: "0 7px 14px rgba(0, 0, 0, 0.2)",
                                transform: "translateY(-4px)"
                            }
                        } : {},
                        ..."small" === e.size ? {
                            padding: "0.3em var(--spacing-m)",
                            ...u
                        } : {}
                    }),
                    inverted: e => ({ ...l(e),
                        borderColor: "var(--background-default)",
                        backgroundColor: "var(--background-default)",
                        color: "var(--typography-interactive-default)",
                        cursor: "pointer"
                    }),
                    link: e => ({ ...a.Ph,
                        cursor: "pointer",
                        color: "inherit",
                        display: "inline",
                        textDecoration: "underline",
                        textDecorationSkipInk: "auto",
                        textDecorationSkip: ["skip", "ink"],
                        textAlign: ["initial", "left"],
                        transitionDuration: "250ms",
                        ":hover": {
                            color: "var(--typography-interactive-default)"
                        },
                        ":focus": {
                            color: "var(--typography-interactive-default)"
                        },
                        ...e.raisedUp ? v(e) : {},
                        ...e.loading ? c : {},
                        ...e.disabled ? d : {},
                        ..."jumbo" === e.size ? h : {},
                        ..."small" === e.size ? u : {}
                    })
                })
        },
        38879: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => f
            });
            var n = r(29901),
                i = r(54865),
                a = r(71284),
                o = r(32068),
                s = r(96519),
                l = r(9960),
                d = r(72963),
                c = r.n(d),
                u = r(91600),
                h = r.n(u),
                p = r(48789),
                v = r.n(p),
                C = r(61250);
            const f = ({
                children: e
            }) => {
                const {
                    forcedPreferences: t,
                    ...r
                } = (0, n.useContext)(s.Z), {
                    data: d
                } = (0, i.a)(c()), u = d ? .preferences ? ? {}, p = e => t.includes(e) ? r[e] : u[e], f = {
                    refetchQueries: [{
                        query: c()
                    }],
                    awaitRefetchQueries: !0
                }, [g] = (0, a.D)(h(), f), [m] = (0, a.D)(v(), f), {
                    getCookie: x
                } = (0, l.Z)(), y = p("reducedMotion"), b = window.self !== window.top;
                return (0, n.useEffect)((() => {
                    const e = window.matchMedia("(prefers-reduced-motion: reduce)");
                    e.matches && null === x(o.jZ) && !b && g({
                        variables: {
                            reducedMotion: !0
                        }
                    });
                    const t = ({
                        matches: t
                    } = {
                        matches: e.matches
                    }) => {
                        g({
                            variables: {
                                reducedMotion: t
                            }
                        })
                    };
                    return e.addListener(t), () => e.removeListener(t)
                }), [x, g, b]), (0, n.useEffect)((() => {
                    const e = window.matchMedia("(prefers-color-scheme: dark)");
                    e.matches && null === x(o.L6) && !b && m({
                        variables: {
                            dark: !0
                        }
                    });
                    const t = ({
                        matches: t
                    } = {
                        matches: e.matches
                    }) => {
                        m({
                            variables: {
                                dark: t
                            }
                        })
                    };
                    return e.addListener(t), () => e.removeListener(t)
                }), [x, m, b]), (0, n.useEffect)((() => {
                    document.documentElement.style.setProperty("--duration", Number(y ? 0 : 1))
                }), [y]), (0, C.jsx)(s.Z.Provider, {
                    value: {
                        forcedPreferences: t,
                        alertDuration: p("alertDuration"),
                        isDark: !1,
                        discreet: p("discreet"),
                        notifications: p("notifications"),
                        reducedMotion: p("reducedMotion"),
                        sound: p("sound")
                    },
                    children: e
                })
            }
        },
        2040: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(61768),
                i = r(46973),
                a = r(55443),
                o = r(4028),
                s = r(53623);
            const l = {
                    color: "inherit",
                    fill: "currentcolor",
                    verticalAlign: "baseline"
                },
                d = { ...l,
                    width: "inherit",
                    height: "inherit"
                },
                c = s.Z.create({
                    base: e => ({
                        display: "inline-block",
                        height: "var(--spacing-m)",
                        width: "var(--spacing-m)",
                        verticalAlign: "-2px",
                        overflow: "hidden",
                        pointerEvents: e.ignorePointerEvents ? "none" : void 0
                    }),
                    svg: l,
                    labelledSvg: d
                });
            var u = r(61250);
            const h = e => {
                const {
                    css: t
                } = (0, i.Z)();
                return e.icon ? e.label ? (0, u.jsxs)("span", {
                    title: e.label,
                    className: e.className,
                    role: e.role,
                    "aria-live": e["aria-live"],
                    children: [(0, u.jsx)(e.icon, {
                        "aria-hidden": !0,
                        focusable: "false",
                        className: t(c.labelledSvg),
                        ...e.iconProps
                    }), (0, u.jsx)(o.Z, {
                        children: e.label
                    })]
                }) : (0, u.jsx)(e.icon, {
                    "aria-hidden": !0,
                    focusable: "false",
                    className: (0, n.Z)([t(c.svg), e.className]),
                    ...e.iconProps
                }) : null
            };
            h.defaultProps = {
                iconProps: {}
            };
            const p = (0, a.Z)(c.base, h)
        },
        83406: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => i
            });
            var n = r(61250);
            const i = e => (0, n.jsx)("svg", {
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, n.jsx)("path", {
                    fill: "currentcolor",
                    fillRule: "nonzero",
                    d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zM9 9h2v6H9V9zm0-4h2v2H9V5z"
                })
            })
        },
        21013: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => d,
                v: () => l
            });
            var n = r(52351),
                i = r(70736),
                a = r(61250);
            const o = new Map;
            o.set(i.ZO, "REPLACE"), o.set(i.IS, "APPEND");
            const s = e => {
                    if (!e.children) return null;
                    if ("string" != typeof e.children) return e.children;
                    const {
                        content: t,
                        replacements: r
                    } = l(e.children, e.patterns);
                    return (0, n.B)(t, r)
                },
                l = (e, t = []) => {
                    let r = e.trim();
                    const n = t.reduce(((e, t) => (r = r.replace(t, ((r, n) => {
                        const i = `__BREAK_${n}__`,
                            s = "{{" + i + "}}";
                        return e[i] = (0, a.jsx)("br", {}, n), "REPLACE" === o.get(t) ? s : r + s
                    })), e)), {});
                    return {
                        content: r,
                        replacements: n
                    }
                };
            s.defaultProps = {
                patterns: [i.ZO, i.IS]
            };
            const d = s
        },
        19001: (e, t, r) => {
            "use strict";
            r.d(t, {
                HC: () => l,
                GS: () => c,
                QI: () => d
            });
            r(29901);
            var n = r(46973),
                i = r(33059),
                a = r(44800);
            const o = r(53623).Z.create({
                list: ({
                    hasIcon: e
                }) => ({
                    listStyleType: e ? "none" : void 0,
                    marginLeft: 0,
                    marginTop: 0,
                    paddingLeft: "var(--spacing-m)",
                    position: "relative",
                    ":last-child": {
                        marginBottom: 0
                    },
                    "@supports (-webkit-overflow-scrolling: touch)": {
                        paddingLeft: "var(--spacing-l)"
                    }
                }),
                listItem: ({
                    hasIcon: e
                }) => ({
                    lineHeight: "var(--line-height-2-xl)",
                    marginBottom: "var(--spacing-2-xs)",
                    ":last-child": {
                        marginBottom: 0
                    }
                }),
                iconWrap: {
                    left: "-0.2em",
                    position: "absolute"
                }
            });
            var s = r(61250);
            const l = e => {
                    const {
                        children: t,
                        extend: r = {},
                        icon: l,
                        ...d
                    } = e, c = Boolean(l), {
                        css: u
                    } = (0, n.Z)({
                        hasIcon: c,
                        ...d
                    });
                    return (0, s.jsxs)("li", {
                        className: u([o.listItem, r]),
                        children: [c && (0, s.jsx)("div", {
                            className: u(o.iconWrap),
                            children: (0, s.jsx)(a.Z, {
                                size: 1,
                                token: l
                            })
                        }), (0, i.s)(t)]
                    })
                },
                d = ({
                    children: e,
                    extend: t = {},
                    hasIcon: r
                }) => {
                    const {
                        css: a
                    } = (0, n.Z)({
                        hasIcon: r
                    });
                    return (0, s.jsx)("ul", {
                        className: a([o.list, t]),
                        children: (0, i.s)(e)
                    })
                },
                c = ({
                    children: e,
                    extend: t = {}
                }) => {
                    const {
                        css: r
                    } = (0, n.Z)();
                    return (0, s.jsx)("ol", {
                        className: r([o.list, t]),
                        children: (0, i.s)(e)
                    })
                }
        },
        9563: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => d
            });
            var n = r(55443),
                i = r(4028),
                a = r(73601),
                o = r(56686),
                s = r(61250);
            const l = e => {
                const t = (0, a.Z)();
                return (0, s.jsx)("div", {
                    className: e.className,
                    role: "alert",
                    "aria-live": "assertive",
                    children: (0, s.jsx)(i.Z, {
                        children: e.text || t("ui.loading")
                    })
                })
            };
            l.defaultProps = {
                size: "small",
                loadingIcon: o.Z.loadingIcon
            };
            const d = (0, n.Z)(o.Z.loadingIcon, l)
        },
        56686: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => o
            });
            const n = "var(--spacing-6-xs)",
                i = {
                    to: {
                        transform: "rotate(1turn)"
                    }
                },
                a = {
                    display: "inline-block",
                    position: "relative",
                    width: "1em",
                    height: "1em",
                    verticalAlign: "-2px",
                    marginRight: "var(--spacing-2-xs)",
                    ":before": {
                        content: '""',
                        animationName: i,
                        animationDuration: "1000ms",
                        animationIterationCount: "infinite",
                        animationTimingFunction: "cubic-bezier(0.62, 0.29, 0.61, 0.38)",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "var(--border-radius-half)",
                        border: `${n} solid var(--deprecated-gray)`,
                        borderTop: `${n} solid currentcolor`,
                        opacity: .5
                    },
                    "::after": {
                        content: '""',
                        animationName: i,
                        animationDuration: "1000ms",
                        animationIterationCount: "infinite",
                        animationTimingFunction: "linear",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "var(--border-radius-half)",
                        border: `${n} solid transparent`,
                        borderTop: `${n} solid currentcolor`
                    }
                },
                o = r(53623).Z.create({
                    loadingIcon: a,
                    loaderWrapper: ({
                        headerHeight: e,
                        footerHeight: t
                    }) => ({
                        height: `calc(100vh - ${e} - ${t})`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    })
                })
        },
        7698: (e, t, r) => {
            "use strict";
            r.d(t, {
                uj: () => P,
                ZP: () => W
            });
            var n = r(29901),
                i = r(10571),
                a = r(36614),
                o = r(96519),
                s = r(87252),
                l = r(7862),
                d = r.n(l);
            const c = "ENTERING",
                u = "ENTERED",
                h = "EXITING",
                p = "EXITED";
            class v extends n.Component {
                constructor(e) {
                    super(e), (0, s.Z)(this, "performEnter", (() => this.updateStatus(c, u))), (0, s.Z)(this, "performExit", (() => this.updateStatus(h, p))), (0, s.Z)(this, "updateStatus", ((e, t) => {
                        clearTimeout(this.duration), this.setState({
                            status: e
                        }, (() => {
                            this.duration = setTimeout((() => this.setState({
                                status: t
                            })), this.props.duration)
                        }))
                    })), this.state = {
                        status: e.isVisible ? u : p
                    }
                }
                componentWillUnmount() {
                    clearTimeout(this.duration)
                }
                componentDidUpdate(e) {
                    const t = !e.isVisible && this.props.isVisible,
                        r = e.isVisible && !this.props.isVisible;
                    t && this.performEnter(), r && this.performExit()
                }
                render() {
                    return this.props.shouldUnmount && this.state.status === p ? null : this.props.children(this.state.status)
                }
            }(0, s.Z)(v, "defaultProps", {
                duration: 300,
                shouldUnmount: !0
            }), (0, s.Z)(v, "propTypes", {
                children: d().func.isRequired,
                isVisible: d().bool.isRequired,
                duration: d().number
            });
            const C = v;
            var f = r(55443),
                g = r(44800),
                m = r(52809),
                x = r(53623),
                y = r(84079),
                b = r(90563);
            const R = {
                    display: "flex",
                    position: "fixed",
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: y.QA,
                    "@supports (padding-bottom: env(safe-area-inset-bottom)": {
                        paddingBottom: "env(safe-area-inset-bottom)"
                    },
                    [y.sJ]: {
                        top: "var(--spacing-m)",
                        bottom: "auto",
                        margin: "0 auto",
                        paddingLeft: "var(--spacing-m)",
                        paddingRight: "var(--spacing-m)",
                        maxWidth: y.$_
                    }
                },
                E = {
                    from: {
                        transform: "translateY(calc(-100% - var(--spacing-m) - 0.45em))"
                    },
                    to: {
                        transform: "translateY(0)"
                    }
                },
                j = x.Z.create({
                    wrapper: R,
                    base: e => ({
                        margin: "0 auto",
                        padding: "var(--spacing-2-xs) 1.2em",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "FAILURE" === e.type ? "rgb(250, 243, 242)" : "rgb(237, 251, 251)",
                        borderRadius: 0,
                        width: "100%",
                        height: "auto",
                        minHeight: "var(--spacing-3-xl)",
                        boxShadow: y.oZ,
                        animationDuration: "300ms",
                        animationFillMode: "forwards",
                        animationName: e.isEntering || e.isExiting ? b.iM : void 0,
                        animationDirection: e.isExiting ? "reverse" : void 0,
                        [y.sJ]: {
                            border: "1px solid var(--deprecated-gray)",
                            borderRadius: "var(--border-radius-l)",
                            animationName: e.isEntering || e.isExiting ? E : void 0
                        }
                    }),
                    iconWrapper: e => ({
                        color: "FAILURE" === e.type ? "var(--typography-error)" : "var(--typography-interactive-default)",
                        marginRight: "1.2em",
                        marginTop: "var(--spacing-4-xs)",
                        lineHeight: 0
                    }),
                    copy: {
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        lineHeight: "var(--line-height-m)",
                        fontSize: "100%",
                        color: "rgb(27, 27, 27)"
                    }
                });
            var _ = r(61250);
            const A = (0, f.Z)(j.base, "div"),
                k = (0, f.Z)(j.iconWrapper, "div"),
                B = (0, f.Z)(j.copy, "span"),
                L = e => {
                    const t = e.iconToken || ("FAILURE" === e.type ? m.QWW : m.Lxr),
                        r = e.iconSize || ("FAILURE" === e.type ? 2 : 1);
                    return (0, _.jsx)("div", {
                        className: e.className,
                        children: (0, _.jsxs)(A, {
                            type: e.type,
                            isExiting: e.status === h,
                            isEntering: e.status === c,
                            children: [(0, _.jsx)(k, {
                                type: e.type,
                                children: (0, _.jsx)(g.Z, {
                                    size: r,
                                    token: t
                                })
                            }), (0, _.jsx)(B, {
                                children: e.children
                            })]
                        })
                    })
                };
            L.propTypes = {
                children: d().node.isRequired,
                "data-testid": d().string,
                type: d().string,
                iconToken: d().elementType,
                iconSize: d().number,
                status: d().string
            };
            const M = (0, f.Z)(j.wrapper, L);
            var S = r(55851);
            const T = {
                    display: "flex",
                    position: "fixed",
                    right: 0,
                    top: r(89341).t.BASE,
                    left: 0,
                    zIndex: y.QA,
                    [y.sJ]: {
                        top: "var(--spacing-2-xl)",
                        bottom: "auto"
                    }
                },
                D = x.Z.create({
                    wrapper: T,
                    base: e => ({
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                        width: "100%",
                        backgroundColor: "var(--background-default)",
                        borderRadius: "var(--border-radius-l)",
                        padding: "1.25em",
                        boxShadow: y.rt,
                        animationDuration: "300ms",
                        animationFillMode: "forwards",
                        animationName: e.isEntering || e.isExiting ? b.qw : void 0,
                        animationDirection: e.isExiting ? "reverse" : void 0,
                        [y.U$]: {
                            marginLeft: y.S$,
                            marginRight: y.S$
                        },
                        [y.sJ]: {
                            maxWidth: y.$_
                        }
                    }),
                    copyWrapper: {
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 0,
                        paddingLeft: "1.25em"
                    },
                    copy: {
                        fontSize: "var(--font-size-xs)",
                        color: "var(--typography-light)",
                        lineHeight: "var(--line-height-l)"
                    }
                }),
                O = (0, f.Z)(D.base, "div"),
                w = (0, S.Z)(D.copyWrapper, "p"),
                N = (0, S.Z)(D.copy, "span"),
                H = e => (0, _.jsx)("div", {
                    className: e.className,
                    children: (0, _.jsxs)(O, {
                        isExiting: e.status === h,
                        isEntering: e.status === c,
                        children: [e.icon && (0, _.jsx)(e.icon, {}), (0, _.jsxs)(w, {
                            children: [(0, _.jsx)("strong", {
                                children: e.title
                            }), (0, _.jsx)(N, {
                                children: e.copy
                            })]
                        })]
                    })
                });
            H.propTypes = {
                copy: d().node,
                "data-testid": d().string,
                icon: d().elementType,
                title: d().node,
                status: d().string
            };
            const I = (0, f.Z)(D.wrapper, H),
                P = (0, a.o)("NotificationContext", {}),
                Z = "#notification-root",
                V = {
                    ALERT: {
                        Component: M,
                        durations: {
                            FAST: 4e3,
                            MEDIUM: 6e3,
                            SLOW: 1e4
                        },
                        getRootSelector: e => "ERROR" === e.type ? "#error-notification-root" : Z
                    },
                    INFO_BANNER: {
                        Component: I,
                        durations: {
                            FAST: 5e3,
                            MEDIUM: 7e3,
                            SLOW: 12e3
                        },
                        getRootSelector: () => Z
                    }
                },
                z = ({
                    notificationType: e,
                    ...t
                }) => {
                    const {
                        alertDuration: r
                    } = (0, n.useContext)(o.Z), {
                        Component: a,
                        getRootSelector: s,
                        durations: l
                    } = V[e], d = l[r], {
                        showNotification: c,
                        isVisible: u
                    } = (e => {
                        const [t, r] = (0, n.useState)(!1), i = (0, n.useRef)(), a = (0, n.useCallback)((() => {
                            r(!0), clearTimeout(i.current), i.current = setTimeout((() => r(!1)), e)
                        }), []);
                        return (0, n.useEffect)((() => () => clearTimeout(i.current)), []), {
                            showNotification: a,
                            isVisible: t
                        }
                    })(d);
                    return (0, n.useEffect)((() => c()), [c]), i.createPortal((0, _.jsx)(C, {
                        isVisible: u,
                        duration: 500,
                        shouldUnmount: !0,
                        children: e => (0, _.jsx)(a, {
                            status: e,
                            ...t
                        })
                    }), document.querySelector(s(t)))
                },
                F = (e, t) => ({
                    notification: t,
                    key: e.key + 1
                }),
                W = e => {
                    const [{
                        notification: t,
                        key: r
                    }, i] = (0, n.useReducer)(F, {
                        notification: null,
                        key: 0
                    }), a = (0, n.useCallback)((e => i({ ...e,
                        notificationType: "ALERT"
                    })), []), o = (0, n.useCallback)((e => i({ ...e,
                        notificationType: "INFO_BANNER"
                    })), []);
                    return (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsx)(P.Provider, {
                            value: {
                                dispatchAlert: a,
                                dispatchInfoBanner: o
                            },
                            children: e.children
                        }), Boolean(t) && (0, n.createElement)(z, { ...t,
                            key: String(r)
                        })]
                    })
                }
        },
        6918: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => _
            });
            var n = r(55851),
                i = r(29901),
                a = r(71794),
                o = r(84602),
                s = r.n(o);
            var l = r(96519),
                d = r(84079),
                c = r(61250);
            const u = () => {
                const {
                    isDark: e
                } = (0, i.useContext)(l.Z), t = e ? d.VH : d.sn, r = (n = t, Object.keys(n).map((e => `--${s()(e)}: ${n[e]};`)).join(" "));
                var n;
                return () => (0, c.jsx)(a.ql, {
                    children: (0, c.jsx)("style", {
                        children: `:root { ${r} }`
                    })
                })
            };
            var h = r(55443),
                p = r(7862),
                v = r.n(p),
                C = r(53623);
            const f = C.Z.create({
                    animatedGradient: e => ({
                        animationName: e.animating ? {
                            from: {
                                transform: "translateX(-100%)"
                            },
                            to: {
                                transform: "translateX(100%)"
                            }
                        } : void 0,
                        animationDuration: "1500ms",
                        animationTimingFunction: "ease-in-out",
                        animationIterationCount: "infinite",
                        width: "100%",
                        height: "100%"
                    }),
                    baseBackground: {
                        fill: "rgb(160,160,160)",
                        opacity: "0.2",
                        width: "100%",
                        height: "100%"
                    },
                    transparentStop: {
                        stopOpacity: 0
                    },
                    colorStop: {
                        stopColor: "rgb(160,160,160)",
                        stopOpacity: "0.25"
                    },
                    base: {
                        width: "calc(12.5rem * var(--responsive-base))"
                    }
                }),
                g = (0, h.Z)(f.animatedGradient, "rect"),
                m = (0, h.Z)(f.baseBackground, "rect"),
                x = (0, h.Z)(f.transparentStop, "stop"),
                y = (0, h.Z)(f.colorStop, "stop"),
                b = e => {
                    const [t, r] = (0, i.useState)(!1), {
                        idPrefix: n,
                        ...a
                    } = e, o = `${n}gradient`, s = `${n}logo`;
                    return (0, i.useEffect)((() => r(!0)), []), (0, c.jsxs)("svg", { ...a,
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 1200 819.91",
                        xmlSpace: "preserve",
                        id: "placeloader-logo",
                        children: [(0, c.jsxs)("defs", {
                            children: [(0, c.jsxs)("linearGradient", {
                                id: o,
                                children: [(0, c.jsx)(x, {
                                    offset: "0%"
                                }), (0, c.jsx)(y, {
                                    offset: "50%"
                                }), (0, c.jsx)(x, {
                                    offset: "100%"
                                })]
                            }), (0, c.jsxs)("clipPath", {
                                id: s,
                                children: [(0, c.jsx)("path", {
                                    d: "m302.29 179.3v315.58c0 27.93.65 44.83 1.95 61.07h-1.3c-6.83-18.6-14.88-34.9-26.89-56.12l-186.64-320.53h-85.3v461.3h66.46v-315.6c0-27.94-.65-44.83-1.94-61.08h1.37c6.82 18.6 14.87 34.89 26.89 56.1l186.58 320.58h84.4v-461.3z"
                                }), (0, c.jsx)("path", {
                                    d: "m1060.44 333.69c-55 0-94.27 25.44-114.12 63.1 0-89 31-166.47 104.7-166.47 46.84 0 65.43 26.95 75.36 71.14l68.22-13.65c-16-76.29-64.53-113.37-143.1-113.37-98.72 0-172.58 75.8-172.58 245.69 0 150.81 61.59 225.35 167.71 225.35 87.69 0 153.37-59.88 153.37-158.55 0-77.09-41.1-153.24-139.56-153.24zm-13.64 256.05c-54.42 0-92.1-50-98.62-116.39 16.53-56.63 53.18-84.84 96.52-84.84 55.71 0 87.14 41.14 87.14 99.63 0 62.78-35.84 101.6-85.04 101.6z"
                                }), (0, c.jsx)("path", {
                                    d: "m577.29 580.84c34.73-24 84.52-63.87 106.61-86 25.11-25.12 96.59-89.69 96.59-181.74 0-95.15-62-138.7-145.85-138.7-101.64.04-151.83 62.6-151.83 134.17a146.72 146.72 0 0 0 4.55 36.43l69.64 6.7a185.21 185.21 0 0 1 -4.55-39.63c0-53.6 35.47-79.25 79.88-79.25 43.3 0 75.35 24.26 75.35 82.6 0 59.29-29 99.7-73.16 143.91-46.17 46.2-119.97 101.32-155.52 126.67v54.6h306.67v-59.76z"
                                }), (0, c.jsx)("path", {
                                    d: "m372 760.14v59.77h-372v-59.77z"
                                }), (0, c.jsx)("path", {
                                    d: "m372 0v59.77h-372v-59.77z"
                                }), (0, c.jsx)("path", {
                                    d: "m302.29 179.3v315.58c0 27.93.65 44.83 1.95 61.07h-1.3c-6.83-18.6-14.88-34.9-26.89-56.12l-186.64-320.53h-85.3v461.3h66.46v-315.6c0-27.94-.65-44.83-1.94-61.08h1.37c6.82 18.6 14.87 34.89 26.89 56.1l186.58 320.58h84.4v-461.3z"
                                })]
                            })]
                        }), (0, c.jsxs)("g", {
                            clipPath: `url(#${s})`,
                            children: [(0, c.jsx)(g, {
                                animating: t,
                                fill: `url(#${o})`
                            }), (0, c.jsx)(m, {})]
                        })]
                    })
                };
            b.defaultProps = {
                idPrefix: ""
            }, b.propTypes = {
                idPrefix: v().string
            };
            const R = (0, h.Z)(f.base, b),
                E = C.Z.create({
                    wrapper: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexGrow: 1
                    }
                }),
                j = (0, n.Z)(E.wrapper, "div"),
                _ = e => {
                    const t = u();
                    return (0, c.jsxs)(j, {
                        children: [(0, c.jsx)(R, { ...e
                        }), (0, c.jsx)(t, {})]
                    })
                }
        },
        3537: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => x
            });
            var n = r(39422),
                i = r(94649),
                a = r(92372),
                o = r(13286),
                s = r(73601),
                l = r(96154),
                d = r(35983),
                c = r(46973),
                u = r(83406),
                h = r(2040),
                p = r(84079);
            const v = ({
                    isFixed: e
                }) => ({
                    position: "relative",
                    zIndex: p.QA,
                    width: "100%",
                    textAlign: "center",
                    padding: `0.6em ${p.S$}`,
                    color: "rgb(38, 102, 120)",
                    backgroundColor: "rgb(246, 224, 206)",
                    ...e ? {
                        position: "fixed",
                        bottom: 0,
                        left: 0
                    } : {}
                }),
                C = {
                    transform: "translateY(4px)",
                    marginRight: "var(--spacing-2-xs)"
                };
            var f = r(61250);
            const g = e => {
                const {
                    css: t
                } = (0, c.Z)({
                    isFixed: e.isFixed
                });
                return (0, f.jsxs)("div", {
                    className: t(v),
                    children: [(0, f.jsx)(h.Z, {
                        className: t(C),
                        icon: u.Z
                    }), e.children]
                })
            };
            var m = r(39101);
            const x = e => {
                const {
                    pathname: t
                } = (0, n.TH)(), r = (0, o.Z)(), c = (0, s.Z)(), u = (0, l.Z)();
                if (!(0, d.Z)("noscript")) return null;
                const h = ((e, t) => {
                    const r = (0, i.H)(t.flags).filter((e => "noscript" !== e)).join(","),
                        n = { ...t,
                            flags: r || void 0
                        };
                    return e + (0, a._)(n, {
                        addQueryPrefix: !0
                    })
                })(t, r);
                return (0, f.jsx)(g, {
                    isFixed: !0,
                    children: u("ui.client_error_banner", {
                        link: (0, f.jsx)(m.Z.Link, {
                            href: h,
                            children: c("ui.client_error_banner.link")
                        }, "go-back-link")
                    })
                })
            }
        },
        47255: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(87252),
                i = r(29901),
                a = r(39422),
                o = r(43565),
                s = r(94649),
                l = r(92372),
                d = r(49849),
                c = r(85916),
                u = r(13286);
            class h extends i.Component {
                constructor(...e) {
                    super(...e), (0, n.Z)(this, "state", {
                        hasError: !1
                    })
                }
                static getDerivedStateFromError() {
                    return {
                        hasError: !0
                    }
                }
                componentDidCatch(e) {
                    (0, c.Z)(e, this.props.csrfToken); {
                        const {
                            queryParams: e
                        } = this.props, t = { ...e,
                            flags: [...(0, s.H)(e.flags), "noscript"].join(",")
                        };
                        window.location.href = this.props.pathname + (0, l._)(t, {
                            addQueryPrefix: !0
                        })
                    }
                }
                render() {
                    return this.state.hasError ? null : this.props.children
                }
            }
            const p = (0, o.Z)((() => {
                const {
                    pathname: e
                } = (0, a.TH)(), t = (0, u.Z)();
                return {
                    csrfToken: (0, i.useContext)(d.Z),
                    pathname: e,
                    queryParams: t
                }
            }))(h)
        },
        72793: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => j
            });
            var n = r(29901),
                i = r(39422),
                a = r(82243),
                o = r(71794),
                s = r(74336),
                l = r(32068),
                d = r(95564),
                c = r(33083),
                u = r(26112),
                h = r(9960),
                p = r(4028),
                v = r(29810),
                C = r(32986),
                f = r(7698),
                g = r(38879),
                m = r(3537),
                x = r(47255),
                y = r(61250);
            const b = (0, s.ZP)({
                    resolved: {},
                    chunkName: () => "WebpackLoadingIndicator",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => Promise.all([r.e(4697), r.e(6774)]).then(r.bind(r, 53185)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve() {
                        return 53185
                    }
                }),
                R = () => {
                    const {
                        effectiveConnectionType: e
                    } = (0, a.kH)("3g"), {
                        setCookie: t
                    } = (0, h.Z)();
                    (0, n.useEffect)((() => {
                        t(l.MS, ["3g", "4g"].includes(e), (0, u.Z)({
                            crossDomain: !0
                        }))
                    }), [t, e])
                },
                E = e => {
                    const t = (0, n.useContext)(c.Z),
                        r = (0, n.useRef)(),
                        [a, s] = (0, n.useState)(""),
                        {
                            pathname: l,
                            state: u
                        } = (0, i.TH)();
                    return R(), (0, n.useEffect)((() => {
                        if (u ? .noScroll) return;
                        r.current && r.current.focus();
                        const e = window.location.hash,
                            t = e && document.getElementById(e.slice(1));
                        t && t.scrollIntoView ? t.scrollIntoView({
                            inline: "center"
                        }) : window.scrollTo(0, 0)
                    }), [l, u ? .noScroll]), (0, y.jsxs)(y.Fragment, {
                        children: [t && (0, y.jsx)(p.Z, {
                            as: "p",
                            tabIndex: -1,
                            innerRef: r,
                            id: "a11y-page-name-paragraph",
                            children: a
                        }), !1, (0, y.jsxs)(d.Z.Provider, {
                            value: !1,
                            children: [(0, y.jsx)(o.ql, {
                                onChangeClientState: ({
                                    title: e
                                }) => s(e)
                            }), (0, y.jsx)(x.Z, {
                                children: (0, y.jsx)(C.Z, {
                                    projects: ["clownfish"],
                                    children: (0, y.jsx)(g.Z, {
                                        children: (0, y.jsxs)(f.ZP, {
                                            children: [(0, y.jsx)(m.Z, {}), (0, y.jsx)(v.Z, {
                                                children: e.children
                                            })]
                                        })
                                    })
                                })
                            })]
                        })]
                    })
                },
                j = E
        },
        53908: (e, t, r) => {
            "use strict";
            r.d(t, {
                TX: () => l,
                l_: () => d
            });
            r(29901);
            var n = r(39422),
                i = r(7862),
                a = r.n(i);
            r(39252), r(44684), r(58422);
            var o = r(75018);
            var s = r(61250);
            a().string.isRequired, a().node.isRequired;
            a().bool;
            const l = () => (0, s.jsx)(n.AW, {
                    path: "*",
                    render: () => {
                        throw new Error(o.L1)
                    }
                }),
                d = ({
                    from: e,
                    to: t,
                    status: r = 302
                }) => (0, s.jsx)(n.AW, {
                    render: ({
                        staticContext: i
                    }) => (i && (i.status = r), (0, s.jsx)(n.l_, {
                        from: e,
                        to: t
                    }))
                })
        },
        61376: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var n = r(29901),
                i = r(39422),
                a = r(58422),
                o = r(4960);
            const s = e => {
                const {
                    pathname: t
                } = (0, i.TH)(), {
                    shadowUserId: r
                } = (0, n.useContext)(a.Z);
                return (0, n.useEffect)((() => {
                    (0, o.Z)("PAGE_VIEW", t)
                }), [t]), (0, n.useEffect)((() => {
                    r && window.snowplow("setUserId", r)
                }), [r]), e.children
            }
        },
        32986: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => h
            });
            var n = r(29901),
                i = r(71794),
                a = r(54865),
                o = r(34959),
                s = r(6918),
                l = r(47541),
                d = r.n(l),
                c = r(61250);
            const u = e => {
                const {
                    locale: t,
                    translations: r,
                    setLocale: s
                } = (0, n.useContext)(o.Z), [l, u] = (0, n.useState)(t), {
                    previousData: h,
                    data: p,
                    loading: v
                } = (0, a.a)(d(), {
                    variables: {
                        locale: l,
                        projects: e.projects
                    }
                }), C = p || h, f = (0, n.useMemo)((() => C ? .translations ? .value || {}), [C]), g = (0, n.useCallback)((e => {
                    "function" == typeof s && s(e), u(e)
                }), [s]), m = (0, n.useMemo)((() => ({
                    locale: l,
                    translations: { ...r,
                        ...f
                    },
                    loading: v,
                    setLocale: g
                })), [l, r, f, v, g]);
                return v && 0 === Object.keys(f).length ? (0, c.jsx)(e.LoadingComponent, {}) : (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(i.ql, {
                        children: (0, c.jsx)("html", {
                            lang: l
                        })
                    }), (0, c.jsx)(o.Z.Provider, {
                        value: m,
                        children: e.children
                    })]
                })
            };
            u.defaultProps = {
                LoadingComponent: s.Z
            };
            const h = u
        },
        29810: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => C
            });
            var n = r(29901),
                i = r(55851),
                a = r(36614),
                o = r(73601),
                s = r(21013),
                l = r(7698);
            const d = r(53623).Z.create({
                list: {
                    margin: 0
                },
                listItem: ({
                    isLast: e
                }) => ({
                    marginBottom: e ? 0 : "var(--spacing-2-xs)"
                })
            });
            var c = r(61250);
            const u = (0, a.o)("UncaughtErrorsContext", {}),
                h = {
                    translationKey: "ui.connectivity_error",
                    field: "connectivity"
                },
                p = (0, i.Z)(d.list, "ul"),
                v = (0, i.Z)(d.listItem, "li"),
                C = e => {
                    const [t, r] = (0, n.useState)([]), i = (0, n.useCallback)((e => e && r((t => [...t, e]))), []), a = (0, n.useCallback)(((e = [], t = {}) => {
                        if (!e.length) return;
                        const n = t.addLineBreaks ? e.map((e => ({ ...e,
                            message: (0, c.jsx)(s.Z, {
                                children: e.message
                            })
                        }))) : e;
                        r((e => [...e, ...n]))
                    }), []);
                    ((e, t) => {
                        const r = (0, o.Z)(),
                            i = e.length > 0,
                            a = e.length > 1,
                            s = 1 === e.length,
                            {
                                dispatchAlert: d
                            } = (0, n.useContext)(l.uj);
                        (0, n.useEffect)((() => {
                            i && (t(), d({
                                "data-testid": "uncaught-errors-alert",
                                type: "FAILURE",
                                children: (0, c.jsxs)(c.Fragment, {
                                    children: [a && (0, c.jsx)(p, {
                                        children: e.map(((t, n) => {
                                            const i = t.message || r(t.translationKey);
                                            return (0, c.jsx)(v, {
                                                isLast: n === e.length - 1,
                                                children: i
                                            }, n)
                                        }))
                                    }), s && (e[0].message || r(e[0].translationKey))]
                                })
                            }))
                        }), [d, t, e, i, r, a, s])
                    })(t, (0, n.useCallback)((() => r([])), []));
                    const d = (0, n.useCallback)((() => i(h)), [i]);
                    return (0, n.useEffect)((() => (window.addEventListener("offline", d), window.setError = i, () => window.removeEventListener("offline", d))), [i, d]), (0, c.jsx)(u.Provider, {
                        value: {
                            setError: i,
                            setErrors: a
                        },
                        children: e.children
                    })
                }
        },
        4028: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => a
            });
            var n = r(55443),
                i = r(86929);
            const a = (0, n.Z)((() => i.jy), "span")
        },
        54194: (e, t, r) => {
            const n = {
                banking: "shark",
                website: "clownfish",
                support: "angelfish",
                registration: "seahorse"
            };
            "test" === r(73656).env.BABEL_ENV && (n.goldfish = "goldfish"), e.exports = n
        },
        62278: (e, t, r) => {
            "use strict";
            r.d(t, {
                BA: () => i,
                Yt: () => u,
                av: () => a,
                mR: () => h,
                nH: () => s,
                o6: () => o,
                v9: () => p
            });
            r(20386);
            var n = r(73656);
            const i = "https://app.n26.com/login",
                a = "https://support.n26.com",
                o = "https://n26.com",
                s = "https://n26brasil.com",
                l = ((() => {
                    const e = {
                        registration: "http://seahorse-live-fra.tech26.de",
                        banking: "http://shark-live-fra.tech26.de",
                        website: "http://clownfish-live-fra.tech26.de",
                        support: "http://angelfish-live-fra.tech26.de"
                    };
                    n.env.N26_REGION
                })(), ["adgroupid", "cve", "cvn", "device", "fbclid", "gclid", "gh_jid", "gh_src", "irgwc", "irclickid", "keyword", "loc_physical_ms", "matchtype", "s_id", "sid", "term", "rc", "utm_campaign", "utm_content", "utm_medium", "utm_source", "utm_term", "targetid", "obj", "op", "gtm_debug"]),
                d = [],
                c = [],
                u = {
                    flags: ["content_only"]
                },
                h = [...c, ...l, ...d],
                p = ["ch", "pr", ...l, ...d]
        },
        62996: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => l
            });
            var n = r(26345),
                i = r(35748),
                a = r(92372),
                o = r(75018);
            const s = (e, t = n.Up) => {
                    if (void 0 === e) return n.fu.toLowerCase();
                    const r = (e.get("geoip-country-code") || n.fu).toLowerCase();
                    return t[r] ? r : n.fu.toLowerCase()
                },
                l = ({
                    country: e,
                    language: t,
                    request: r,
                    location: l,
                    staticContext: d,
                    acceptedRegions: c = n.Up
                }) => {
                    const u = e || s(r);
                    if (!c[u]) throw new Error(o.L1);
                    return d && (d.status = 301), t === c[u].defaultLanguage ? (0, i.Q)({
                        paths: [`/${t}-${u}`],
                        query: (0, a.d)(l.search)
                    }) : (0, i.Q)({
                        paths: [`/${n.k$}-${u}`],
                        query: (0, a.d)(l.search)
                    })
                }
        },
        49679: (e, t, r) => {
            "use strict";
            r.d(t, {
                ZP: () => c
            });
            var n = r(26345),
                i = r(62278);
            const a = (e = "") => e.toLowerCase(),
                o = (e = "") => e.toUpperCase(),
                s = ({
                    canonical: e = "",
                    language: t,
                    slug: r
                }) => {
                    const n = t + (t && e ? "-" : "") + e.toLowerCase();
                    return [i.o6, n, r].filter(Boolean).join("/")
                },
                l = (e = {}) => {
                    const {
                        countryCodes: t,
                        defaultCanonical: r,
                        isNativeLanguagePage: i,
                        overrides: a
                    } = e, s = a ? .canonicals ? .country;
                    if (s) return s.toLowerCase();
                    const l = ((e = []) => n.pE.find((t => e.map(o).includes(t))))(t);
                    return (i && r || l || "").toLowerCase()
                },
                d = (e = {}) => {
                    const {
                        overrides: t
                    } = e, r = e.language.toLowerCase(), i = (e ? .country ? ? "").toLowerCase(), o = (e ? .countryCodes ? ? []).map(a), d = ((e, t) => {
                        const r = e ? .slug,
                            {
                                slug: n
                            } = t ? .canonicals ? ? {};
                        return n || ("__root" === r ? "" : r)
                    })(e, t), c = s({
                        canonical: i,
                        language: r,
                        slug: d
                    });
                    if (!i) return c;
                    if (o.length < 2) return c;
                    const u = n.Up[i].defaultLanguage === r,
                        h = n.Up[i].canonical;
                    if (u && !h) return c;
                    if (h && u) {
                        return o.includes(h) ? s({
                            canonical: h,
                            language: r,
                            slug: d
                        }) : c
                    }
                    const p = l({
                        countryCodes: o,
                        defaultCanonical: h,
                        isNativeLanguagePage: u,
                        overrides: t
                    });
                    return s({
                        canonical: p,
                        language: r,
                        slug: d
                    })
                },
                c = d
        },
        26112: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => o
            });
            var n = r(56508),
                i = (r(62278), r(73656));
            const a = e => {
                    Number(i.env.LOCAL_PRODUCTION);
                    return !1
                },
                o = (e = {}) => {
                    const t = {
                        secure: !0,
                        sameSite: "strict"
                    };
                    return e.sensitive && (t.signed = !0, t.httpOnly = !0), e.crossDomain && (a(e.request) ? n.Z.warn("GOLDEN_SERVER_WITH_NO_COOKIE_DOMAIN") : t.domain = ".n26.com"), t
                }
        },
        74824: (e, t, r) => {
            "use strict";
            r.d(t, {
                ZP: () => p
            });
            var n = r(49335),
                i = r.n(n),
                a = r(57383),
                o = r.n(a),
                s = r(92372),
                l = r(62278);
            const d = {
                    parseArrays: !1,
                    depth: 1,
                    parameterLimit: 8
                },
                c = {
                    skipNulls: !0,
                    addQueryPrefix: !0
                },
                u = (e, t) => {
                    const r = ((e = {}) => Object.keys(e).reduce(((t, r) => {
                        const n = e[r];
                        return t[r] = Array.isArray(n) || "object" == typeof n ? n ? .[0] : n, t
                    }), {}))((0, s.d)(e, d));
                    return void 0 === t ? r : i()(r, t)
                },
                h = (e, t = l.Yt, r = l.mR) => {
                    const n = u(e, void 0),
                        i = o()(n, ((e, t) => !r ? .includes(t)));
                    return Object.entries(i).map((([e, r]) => !!t[e] ? .includes(r) && e)).filter(Boolean)
                },
                p = ({
                    search: e,
                    href: t,
                    queryStrings: r
                }) => {
                    const [n, i] = t.split("?"), a = r || ((e => e.startsWith("/") || e.startsWith(l.o6) || e.startsWith(l.av))(n) ? void 0 === l.mR ? void 0 : [...h(e), ...l.mR] : l.v9), o = { ...u(i, a),
                        ...u(e, a)
                    };
                    return n + (0, s._)(o, c)
                }
        },
        8873: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => i
            });
            const n = ["https:", "http:", "number26:", "intent:", "mailto:", "tel:"],
                i = e => {
                    if (!e) return !1;
                    const t = e.replace(/\s+/g, "");
                    if (t.startsWith("/")) return !0;
                    if (t.startsWith("#")) return !0;
                    try {
                        const e = new URL(t);
                        return n.includes(e.protocol)
                    } catch (r) {
                        return !1
                    }
                }
        },
        56508: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => o
            });
            var n = r(42959),
                i = r(54194),
                a = r.n(i);
            const o = function(e) {
                const t = (r = e, (0, n.hu)({
                    serviceName: r,
                    verbosity: "info",
                    sanitizeConfig: !0,
                    enableSerializer: !0,
                    enableFormatter: !0,
                    enableObfuscation: !1,
                    enableLogger: !1,
                    customHeaders: []
                }));
                var r;
                return (0, n.CY)(t)
            }(function(e) {
                const t = Object.keys(a());
                return Object.values(a())[t.indexOf(e)] || "goldfish"
            }("website"))
        },
        9502: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => a
            });
            var n = r(87787);
            const i = new TypeError("The value defined for each property must be an array."),
                a = e => {
                    const t = {},
                        r = Object.keys(e);
                    return r.forEach((r => {
                        if (!Array.isArray(e[r])) throw i;
                        t[r] = e[r][0]
                    })), n.T.forEach(((n, i) => {
                        const a = {};
                        r.forEach((t => {
                            const r = e[t][i + 1];
                            r && (a[t] = r)
                        })), t[`@media (min-width: ${n})`] = a
                    })), t
                }
        },
        85916: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => l
            });
            var n = r(13975),
                i = r(63911);
            const a = new Set([/^can't redefine non-configurable property/, /The node before which the new node is to be inserted is not a child of this node.$/, /The node to be removed is not a child of this node.$/]),
                o = () => {
                    const {
                        clientWidth: e,
                        clientHeight: t
                    } = document.documentElement, {
                        innerWidth: r = 0,
                        innerHeight: n = 0
                    } = window;
                    return [Math.max(e, r), Math.max(t, n)].join("x")
                },
                s = e => JSON.stringify({ ...e,
                    message: e.message,
                    trace: (e.stack || "").split(/\n\s+/g),
                    url: window.location.href,
                    userAgent: {
                        viewport: o(),
                        pixelRatio: window.devicePixelRatio,
                        scroll: (0, i.c)()
                    }
                }),
                l = (e, t) => {
                    if (e && !window.__N26_REPORTED_ERRORS__.has(e.message) && !(e => {
                            for (const t of a)
                                if (t.test(e)) return !0;
                            return !1
                        })(e.message)) return (0, n.Z)("/js-error", {
                        method: "POST",
                        body: s(e),
                        headers: {
                            "csrf-token": t,
                            "Content-Type": "application/json"
                        }
                    }).then((t => (window.__N26_REPORTED_ERRORS__.add(e.message), t)))
                }
        },
        24428: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => c
            });
            var n = r(63293),
                i = r(15932),
                a = r(32068),
                o = r(84534),
                s = r(56508);
            window.recordSnowplowEvent = e => {
                s.Z.debug("SNOWPLOW_TRACKING", e)
            };
            const l = () => d("website") + "",
                d = e => {
                    try {
                        if ("website" === e) {
                            const e = (0, n.ej)(a.Oh);
                            if (e) {
                                const t = JSON.parse(decodeURIComponent(e)),
                                    r = Object.keys(t).find((e => (0, o.q)(t[e].url).includes(window.location.pathname)));
                                if (r) return r + "_" + t[r].variant
                            }
                        }
                        const t = (0, n.ej)(a._e);
                        return JSON.parse(decodeURIComponent(t))[e].name
                    } catch (t) {
                        return "default"
                    }
                },
                c = (e, t, r = "", n = "Goldfish", a = l()) => {
                    "" !== r && "number" != typeof r && isNaN(parseFloat(r)) && s.Z.debug("SNOWPLOW_NON_FLOAT_VALUE", {
                        value: r
                    });
                    const o = (0, i.K)(t) ? JSON.stringify(t) : t;
                    window.recordSnowplowEvent({
                        category: n,
                        action: e,
                        label: o,
                        version: a,
                        value: r
                    }), window.snowplow("trackStructEvent", n, e, o, a, r)
                }
        },
        4960: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = r(24428).Z
        },
        9960: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => o
            });
            var n = r(29901),
                i = r(63293),
                a = r(3178);
            const o = () => {
                const e = (0, n.useContext)(a.Z),
                    [t, r] = e ? [t => {
                        const r = e[t];
                        return void 0 === r ? null : r
                    }, () => e] : [i.ej, i.go];
                return {
                    getCookie: t,
                    getAllCookies: r,
                    setCookie: i.d8,
                    removeCookie: i.nJ
                }
            }
        },
        84929: (e, t, r) => {
            "use strict";
            r.d(t, {
                D: () => C
            });
            var n = r(29901),
                i = r(71284),
                a = r(4960),
                o = r(56508),
                s = r(22773),
                l = r(58422),
                d = r(49557),
                c = r.n(d);
            const u = () => {
                const [e] = (0, i.D)(c()), {
                    userId: t
                } = (0, n.useContext)(l.Z);
                return {
                    logOptimizelyEvent: (0, n.useCallback)(((e, t, r) => null), [e, t])
                }
            };
            var h = r(24154),
                p = r.n(h);
            const v = {
                    actions_tab_viewed: {
                        entityId: "21825251236"
                    },
                    explore_view: {
                        entityId: "21735970629"
                    },
                    "feed.page_viewed": {
                        entityId: "21725211512"
                    },
                    "feed.page_viewed_MAIN": {
                        entityId: "21737390078"
                    },
                    "feed.page_viewed_ALL": {
                        entityId: "21714550369"
                    },
                    "feed.search.tag_selected": {
                        entityId: "21727910105"
                    },
                    "search_suggested.contact_clicked": {
                        entityId: "21709170292"
                    },
                    "search_suggested.merchant_clicked": {
                        entityId: "21706890365"
                    },
                    "feed.quickactions.statistics.clicked": {
                        entityId: "21723890236"
                    },
                    "feed.quickactions.scheduled.clicked": {
                        entityId: "21728510826"
                    },
                    "feed.quickactions.downloads.clicked": {
                        entityId: "21921550261"
                    },
                    "feed.payments_pane.money_in.clicked": {
                        entityId: "21760960534"
                    },
                    "feed.payments_pane.money_out.clicked": {
                        entityId: "21728540363"
                    },
                    search_viewed: {
                        entityId: "21721230476"
                    },
                    "transaction.details_action_tapped_move": {
                        entityId: "21713790125"
                    },
                    "transaction.details_action_tapped_moneybeam": {
                        entityId: "21686520617"
                    },
                    "transaction.details_action_tapped_payback": {
                        entityId: "21709640467"
                    },
                    "transaction.details_action_tapped_transfer": {
                        entityId: "21710780376"
                    },
                    "transaction.details_action_tapped_help": {
                        entityId: "21711990431"
                    },
                    "transaction.details_action_tapped_learn more": {
                        entityId: "21724461179"
                    },
                    "transaction.details_action_tapped_failure action": {
                        entityId: "21718810793"
                    },
                    "transaction.details_action_tapped_crypto portfolio": {
                        entityId: "21724461180"
                    },
                    "transaction.details_action_tapped_income_sorter": {
                        entityId: "21734331255"
                    },
                    "transaction.details_action_tapped_split_bill": {
                        entityId: "21724430653"
                    },
                    "transactions.transaction_details_viewed": {
                        entityId: "21703610358"
                    },
                    "transactions.transaction_details_viewed_TX_LIST": {
                        entityId: "21741010470"
                    },
                    "transactions.transaction_details_viewed_ALL_ACTIVITY_TX_LIST": {
                        entityId: "21696110580"
                    },
                    "transactions.transaction_details_viewed_TX_SEARCH": {
                        entityId: "21706800398"
                    },
                    "transactions.transaction_details_viewed_LINKED_TX": {
                        entityId: "21690310316"
                    },
                    "transactions.transaction_details_viewed_STATS": {
                        entityId: "21713171694"
                    },
                    "spaces.createflow_viewed": {
                        entityId: "21849910142"
                    },
                    spaces_viewed: {
                        entityId: "21688131277"
                    },
                    "balance_overview.viewed": {
                        entityId: "21867184288"
                    },
                    "balance_overview.month_toggle_backward": {
                        entityId: "21879710516"
                    },
                    "balance_overview.month_toggle_forward": {
                        entityId: "21872330032"
                    },
                    "dashboard.viewed": {
                        entityId: "21874240860"
                    },
                    "feed.transaction_group.balance_overview_clicked": {
                        entityId: "21897350778"
                    },
                    search_filter_clicked: {
                        entityId: "21898370437"
                    },
                    "feed.back_to_top_button.clicked": {
                        entityId: "21916870044"
                    },
                    search_filter_apply_clicked: {
                        entityId: "22148270473"
                    },
                    "search.no_results_found_viewed": {
                        entityId: "22211160181"
                    },
                    "search_time.range.filter_start.date_clicked": {
                        entityId: "22178080201"
                    },
                    "search_time.range.filter_end.date_clicked": {
                        entityId: "22183640112"
                    },
                    "search_direction.filter_default_selected": {
                        entityId: "22191790393"
                    },
                    "search_direction.filter_incoming_selected": {
                        entityId: "22176440293"
                    },
                    "search_direction.filter_outgoing_selected": {
                        entityId: "22162660298"
                    },
                    search_filter_reset_clicked: {
                        entityId: "22205320014"
                    },
                    "search_category.filter_selected": {
                        entityId: "22174320170"
                    },
                    search_category_save_selection: {
                        entityId: "22159900568"
                    },
                    search_category_select_all: {
                        entityId: "22172340350"
                    },
                    "feed.activity_switch_opened": {
                        entityId: "21779370207"
                    }
                },
                C = () => {
                    const [e] = (0, i.D)(p()), {
                        logOptimizelyEvent: t
                    } = u(), {
                        country: r,
                        language: l,
                        pathname: d
                    } = (0, s.Z)(), c = (0, n.useCallback)(((t, n) => {
                        if (t) {
                            if (o.Z.debug("OPTIMIZELY_EVENT_TRACKING", {
                                    eventKey: t
                                }), !d || !l || !r) return void o.Z.error("OPTIMIZELY_EVENT_TRACKING_ERROR", {
                                pathname: d,
                                language: l,
                                country: r,
                                eventKey: t
                            });
                            e({
                                variables: {
                                    eventKey: t,
                                    tags: n,
                                    attributes: {
                                        pagePath: d,
                                        language: l,
                                        country: r
                                    }
                                }
                            })
                        }
                    }), [e, d, l, r]), h = (0, n.useCallback)(((e, r, n, i, o) => {
                        const s = r ? `${e}_${r}` : e;
                        return s in v && t(v[s].entityId, s, n), (0, a.Z)(e, r, n, i, o)
                    }), [t]);
                    return (0, n.useMemo)((() => ({
                        trackStructuredEvent: h,
                        trackOptimizelyEvent: c
                    })), [c, h])
                }
        },
        35983: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => a
            });
            var n = r(12006),
                i = r(13286);
            const a = e => {
                const t = (0, i.Z)();
                return (0, n.y)(t.flags)(e)
            }
        },
        73601: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var n = r(29901),
                i = r(34959),
                a = r(56508),
                o = r(83444);
            const s = () => {
                const e = (0, o.Z)(),
                    {
                        translations: t = {}
                    } = (0, n.useContext)(i.Z);
                return (0, n.useCallback)(((r, n) => (e(r), void 0 !== n && a.Z.warn("TEMPLATED_STATIC_TRANSLATION", {
                    key: r
                }), (e => t => e[t] || t)(t)(r))), [t, e])
            }
        },
        96154: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => d
            });
            var n = r(29901),
                i = r(52351),
                a = r(34959),
                o = r(70736),
                s = r(83444),
                l = r(21013);
            const d = e => {
                const t = (0, s.Z)(),
                    {
                        translations: r = {}
                    } = (0, n.useContext)(a.Z);
                return (0, n.useCallback)(((e, n) => (t(e), (e => (t, r = {}) => {
                    const n = e[t] || t,
                        a = (0, l.v)(n, [o.ZO]),
                        s = { ...a.replacements,
                            ...r
                        };
                    return (0, i.B)(a.content, s)
                })(r)(e, n))), [r, t])
            }
        },
        83444: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var n = r(29901),
                i = r(34959),
                a = r(56508);
            const o = [],
                s = () => {
                    const {
                        translations: e = {},
                        locale: t,
                        loading: r
                    } = (0, n.useContext)(i.Z);
                    return (0, n.useCallback)((n => {
                        const i = void 0 === e[n],
                            s = i && o.includes(n);
                        if (!r && i && !s) {
                            const e = (e => !/\s/.test(e))(n) ? n : "UNSAFE_KEY_OBFUSCATED";
                            a.Z.warn("MISSING_TRANSLATION_KEY", {
                                key: e,
                                locale: t
                            }), o.push(n)
                        }
                    }), [e, r, t])
                }
        },
        22773: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => o
            });
            var n = r(39422),
                i = r(13286),
                a = r(35983);
            const o = () => {
                const e = (0, n.TH)(),
                    t = (0, n.UO)(),
                    r = (0, i.Z)(),
                    o = (0, a.Z)("preview"),
                    {
                        language: s,
                        country: l,
                        slug: d,
                        category: c,
                        page: u
                    } = t,
                    h = o || Boolean(r.preview);
                return {
                    queryString: e.search,
                    pathname: e.pathname,
                    hash: e.hash,
                    slug: d || null,
                    country: l ? l.toUpperCase() : null,
                    language: s,
                    preview: h,
                    category: c,
                    page: u
                }
            }
        },
        51622: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                enhancers: () => C,
                plugins: () => f
            });
            var n = r(24960),
                i = r(44039),
                a = r(29073),
                o = r(63887),
                s = r(40617),
                l = r(27703),
                d = r(50729),
                c = r(81051),
                u = r(34777),
                h = function(e) {
                    return null == e || "string" == typeof e && null !== e.match(/(undefined|null)/)
                },
                p = function(e) {
                    return "object" == typeof e && null !== e && !Array.isArray(e)
                },
                v = function(e) {
                    for (var t in e) {
                        var r = e[t];
                        p(r) ? e[t] = v(r) : Array.isArray(r) ? e[t] = r.filter((function(e) {
                            return !h(e)
                        })) : h(r) && delete e[t]
                    }
                    return e
                };
            const C = [(0, i.Z)(), (0, a.Z)()],
                f = [v, (0, l.Z)({
                    transitionDuration: (0, u.x9)("transitionDuration"),
                    transitionDelay: (0, u.x9)("transitionDelay"),
                    animationDuration: (0, u.x9)("animationDuration"),
                    animationDelay: (0, u.x9)("animationDelay")
                }), (0, s.Z)(), (0, n.Z)(), (0, o.Z)(), (0, d.Z)(), (0, c.Z)()]
        },
        34777: (e, t, r) => {
            "use strict";
            r.d(t, {
                I$: () => l,
                Lq: () => d,
                QI: () => c,
                x9: () => s
            });
            var n = r(89309),
                i = r.n(n),
                a = r(66477);
            const o = ["inherit", "unset", "initial", "0ms", "0s"],
                s = e => t => ({
                    [e]: String(t).split(",").map((e => {
                        const t = e.trim(),
                            r = o.includes(t);
                        return t.includes("var(--duration)") || r ? t : `calc(var(--duration) * ${t})`
                    })).join(", ")
                }),
                l = e => {
                    const t = d(e);
                    if ("transparent" === t) return {};
                    const r = t.match(/var\(([\w-]+)\)/) || [],
                        n = i()(r[1]),
                        o = a.s[n].match(/rgb\(([\d, ]+)\)/)[1],
                        s = o.split(",").map((e => parseInt(e, 10)));
                    return {
                        hex: u(...s),
                        rgb: o,
                        rgbArray: s
                    }
                },
                d = e => {
                    switch (e) {
                        case "TEAL":
                            return "var(--background-container-teal)";
                        case "RHUBARB":
                            return "var(--background-container-rhubarb)";
                        case "WHEAT":
                            return "var(--background-container-wheat)";
                        case "PETROL":
                            return "var(--background-container-petrol)";
                        case "TEAL_LIGHT":
                        case "OCEAN":
                            return "var(--background-container-tertiary-teal)";
                        case "TEAL_200":
                            return "var(--background-container-secondary-teal)";
                        case "RHUBARB_LIGHT":
                            return "var(--background-container-tertiary-rhubarb)";
                        case "RHUBARB_200":
                            return "var(--background-container-secondary-rhubarb)";
                        case "WHEAT_LIGHT":
                            return "var(--background-container-tertiary-wheat)";
                        case "WHEAT_LIGHTEST":
                            return "var(--background-container-light-wheat)";
                        case "WHEAT_200":
                            return "var(--background-container-secondary-wheat)";
                        case "TEAL_LIGHTEST":
                            return "var(--background-container-light-teal)";
                        case "PETROL_LIGHTEST":
                            return "var(--background-container-lightest-petrol)";
                        case "PETROL_LIGHT":
                        case "AQUA":
                            return "var(--background-container-tertiary-petrol)";
                        case "PETROL_200":
                            return "var(--background-container-tertiary-petrol-pressed)";
                        case "WHITE":
                            return "var(--background-default)";
                        case "GRAY_LIGHT":
                            return "var(--background-container-primary-pressed)";
                        case "GRAY_200":
                            return "var(--background-container-secondary-gray)";
                        case "GRAY_LIGHTEST":
                            return "var(--background-screen)";
                        default:
                            return "transparent"
                    }
                },
                c = e => {
                    switch (e) {
                        case "TEAL":
                        case "TEAL_200":
                            return "var(--typography-interactive-teal)";
                        case "RHUBARB":
                        case "RHUBARB_200":
                            return "var(--typography-interactive-rhubarb)";
                        case "WHEAT":
                        case "WHEAT_200":
                            return "var(--typography-interactive-primary-wheat-consistent)";
                        case "PETROL":
                        case "PETROL_200":
                            return "var(--typography-interactive-primary-petrol-consistent)";
                        default:
                            return "var(--typography-default)"
                    }
                },
                u = (e, t, r) => {
                    const n = e => {
                        const t = e.toString(16);
                        return 1 === t.length ? `0${t}` : t
                    };
                    return n(e) + n(t) + n(r)
                }
        },
        86929: (e, t, r) => {
            "use strict";
            r.d(t, {
                DZ: () => s,
                Ph: () => a,
                cU: () => o,
                jy: () => i
            });
            r(77523);
            var n = r(84079);
            const i = {
                    borderTopWidth: "0 !important",
                    borderRightWidth: "0 !important",
                    borderBottomWidth: "0 !important",
                    borderLeftWidth: "0 !important",
                    clip: "rect(1px, 1px, 1px, 1px) !important",
                    height: "1px !important",
                    overflow: "hidden !important",
                    paddingTop: "0 !important",
                    paddingRight: "0 !important",
                    paddingBottom: "0 !important",
                    paddingLeft: "0 !important",
                    position: "absolute !important",
                    whiteSpace: "nowrap !important",
                    width: "1px !important"
                },
                a = {
                    paddingTop: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderBottomWidth: 0,
                    borderLeftWidth: 0,
                    backgroundColor: "transparent",
                    fontStyle: "inherit",
                    fontWeight: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    fontFamily: "inherit"
                },
                o = {
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                    paddingTop: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    listStyle: "none",
                    "> ::before": {
                        position: "absolute",
                        content: '"\\200B"'
                    }
                },
                s = (n.FP, {
                    transitionDuration: "300ms",
                    transitionProperty: "box-shadow",
                    "&:hover": {
                        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.05)"
                    }
                })
        },
        66477: (e, t, r) => {
            "use strict";
            r.d(t, {
                V: () => G,
                s: () => U
            });
            var n = r(77523);
            const {
                TYPOGRAPHY: i,
                DIVIDERS: a,
                BACKGROUNDS: o,
                ICONOGRAPHY: s,
                LOADERS: l,
                SHADOWS: d
            } = n.f8, {
                TYPOGRAPHY: c,
                DIVIDERS: u,
                BACKGROUNDS: h,
                ICONOGRAPHY: p,
                LOADERS: v,
                SHADOWS: C
            } = n.$J, f = "rgba(0, 0, 0, 0.2)", g = "rgb(72, 172, 152, 0.5)", m = "rgba(38, 102, 120, 0.5)", x = "rgb(205, 163, 95, 0.5)", y = "rgb(203, 124, 122, 0.5)", b = "rgb(27, 27, 27)", R = "rgb(51, 51, 51)", E = "rgb(116, 116, 116)", j = "rgb(191, 191, 191)", _ = "rgb(180, 75, 70)", A = "rgb(248, 237, 237)", k = "rgb(158, 89, 87)", B = "rgb(72, 172, 152)", L = "rgb(42, 126, 109)", M = "rgb(140, 108, 58)", S = {
                primaryFocus: "rgba(54, 161, 139, 0.6)"
            }, T = {
                brightOverlay: "rgb(255, 255, 255, 0.75)",
                mildOverlay: "rgba(0, 0, 0, 0.075)",
                distinctOverlay: f
            }, D = {
                mildOverlay: "rgba(0, 0, 0, 0.3)",
                distinctOverlay: "rgba(0, 0, 0, 0.4)"
            }, O = {
                shadowDefault: f
            }, w = {
                shadowDefault: f
            }, N = {
                typographyDefault: n.HO.gray950,
                typographyDefaultInverted: n.HO.white00,
                typographyDefaultConsistent: n.HO.gray950,
                typographyDefaultInvertedConsistent: n.HO.white00,
                typographyInteractiveRhubarb: n.HO.rhubarb400,
                typographyInteractiveDefault: B,
                typographyInteractiveTeal: B,
                typographyExtraLight: j,
                typographyLight: E,
                typographyError: _
            }, H = {
                typographyDefault: n.HO.white00,
                typographyDefaultInverted: n.HO.gray950,
                typographyDefaultConsistent: n.HO.gray950,
                typographyDefaultInvertedConsistent: n.HO.white00,
                typographyInteractiveRhubarb: n.HO.rhubarb400,
                typographyInteractiveDefault: B,
                typographyInteractiveTeal: B,
                typographyLight: j,
                typographyExtraLight: "rgb(140, 140, 140)",
                typographyError: _
            }, I = {
                dividerDefault: n.HO.gray200,
                dividerTeal: B,
                dividerError: _,
                dividerDark: E
            }, P = {
                dividerDefault: R,
                dividerTeal: B,
                dividerError: _,
                dividerDark: j
            }, Z = {
                backgroundDefault: n.HO.white00,
                backgroundAlternate: n.HO.gray50,
                backgroundScreen: n.HO.gray50,
                backgroundButtonPrimaryActive: B,
                backgroundButtonPrimaryPressed: B,
                backgroundButtonPrimaryDisabled: n.HO.teal100,
                backgroundButtonSecondary: n.HO.white00,
                backgroundContainerTeal: B,
                backgroundContainerRhubarb: n.HO.rhubarb400,
                backgroundContainerWheat: n.HO.wheat500,
                backgroundContainerPetrol: n.HO.petrol500,
                backgroundContainerSecondaryTeal: "rgb(202, 215, 202)",
                backgroundContainerSecondaryRhubarb: "rgb(229, 195, 199)",
                backgroundContainerSecondaryWheat: "rgb(245, 214, 186)",
                backgroundContainerSecondaryPetrol: n.HO.petrol200,
                backgroundContainerLight: n.HO.gray100,
                backgroundContainerLightTeal: n.HO.teal100,
                backgroundContainerLightRhubarb: "rgb(242, 228, 228)",
                backgroundContainerLightWheat: n.HO.wheat100,
                backgroundContainerLightPetrol: n.HO.petrol100,
                backgroundContainerLightestPetrol: n.HO.petrol100,
                backgroundContainerDarkTeal: L,
                backgroundContainerDarkWheat: M,
                backgroundContainerDarkPetrol: n.HO.petrol800,
                backgroundContainerDarkRhubarb: k,
                backgroundContainerAlphaTeal: g,
                backgroundContainerAlphaWheat: x,
                backgroundContainerAlphaPetrol: m,
                backgroundContainerAlphaRhubarb: y,
                backgroundLightErrorRed: A,
                backgroundInfoCard: n.HO.gray200
            }, V = {
                backgroundDefault: b,
                backgroundAlternate: n.HO.gray950,
                backgroundScreen: n.HO.gray950,
                backgroundButtonPrimaryActive: B,
                backgroundButtonPrimaryPressed: B,
                backgroundButtonPrimaryDisabled: n.HO.teal100,
                backgroundButtonSecondary: n.HO.white00,
                backgroundContainerTeal: B,
                backgroundContainerRhubarb: n.HO.rhubarb400,
                backgroundContainerWheat: n.HO.wheat500,
                backgroundContainerPetrol: n.HO.petrol500,
                backgroundContainerSecondaryTeal: n.HO.teal850,
                backgroundContainerSecondaryRhubarb: n.HO.rhubarb850,
                backgroundContainerSecondaryWheat: n.HO.wheat850,
                backgroundContainerSecondaryPetrol: n.HO.petrol850,
                backgroundContainerLight: n.HO.gray800,
                backgroundContainerLightTeal: n.HO.teal850,
                backgroundContainerLightRhubarb: n.HO.rhubarb850,
                backgroundContainerLightWheat: n.HO.wheat850,
                backgroundContainerLightPetrol: n.HO.petrol850,
                backgroundContainerDarkTeal: L,
                backgroundContainerDarkWheat: M,
                backgroundContainerDarkPetrol: n.HO.petrol800,
                backgroundContainerDarkRhubarb: k,
                backgroundContainerAlphaTeal: g,
                backgroundContainerAlphaWheat: x,
                backgroundContainerAlphaPetrol: m,
                backgroundContainerAlphaRhubarb: y,
                backgroundLightErrorRed: A,
                backgroundInfoCard: n.HO.gray815
            }, z = {
                iconographyDefault: n.HO.gray950,
                iconographyDefaultInverted: n.HO.white00,
                iconographyLight: E,
                iconographyBright: n.HO.gray200,
                iconographyAction: B,
                iconographyRhubarb: n.HO.rhubarb500
            }, F = {
                iconographyDefault: n.HO.white00,
                iconographyDefaultInverted: n.HO.gray950,
                iconographyLight: j,
                iconographyBright: R,
                iconographyAction: B,
                iconographyRhubarb: n.HO.rhubarb500
            }, W = {
                shimmerBackground: n.HO.gray200,
                shimmerForeground: n.HO.gray50
            }, Y = {
                shimmerBackground: n.HO.gray815,
                shimmerForeground: b
            }, U = { ...Z,
                ...i,
                ...a,
                ...o,
                ...d,
                ...s,
                ...l,
                ...T,
                ...S,
                ...N,
                ...I,
                ...z,
                ...W,
                ...T,
                deprecatedGray: "rgb(201, 201, 201)",
                ...O
            }, G = { ...c,
                ...u,
                ...h,
                ...C,
                ...p,
                ...v,
                ...D,
                ...S,
                ...H,
                ...P,
                ...V,
                ...F,
                ...Y,
                ...D,
                deprecatedGray: "rgb(136, 136, 136)",
                ...w
            }
        },
        84079: (e, t, r) => {
            "use strict";
            r.d(t, {
                sX: () => _.sX,
                ad: () => _.ad,
                S$: () => _.S$,
                $_: () => _.$_,
                wt: () => _.wt,
                Th: () => j,
                bT: () => _.bT,
                VH: () => x.V,
                rt: () => R,
                _d: () => E,
                Gu: () => C,
                Mz: () => _.Mz,
                ei: () => _.ei,
                Y_: () => _.Y_,
                Rf: () => _.Rf,
                f8: () => A,
                W3: () => l,
                BZ: () => b,
                G: () => c,
                Qx: () => u,
                E0: () => v,
                a0: () => h,
                OV: () => d,
                sn: () => x.s,
                y7: () => _.y7,
                qA: () => s,
                sJ: () => o,
                oZ: () => y,
                Qd: () => _.Qd,
                JN: () => _.JN,
                fc: () => _.fc,
                Eb: () => i,
                U$: () => a,
                B4: () => g,
                yI: () => _.yI,
                xm: () => m,
                sC: () => n,
                WC: () => f,
                jd: () => p,
                nh: () => B,
                Xb: () => M,
                FP: () => L,
                QA: () => k
            });
            var n = "@media (max-width: ".concat(349, "px)"),
                i = 768,
                a = "@media (max-width: ".concat(i - 1, "px)"),
                o = "@media (min-width: ".concat(i, "px)"),
                s = 900,
                l = "@media (min-width: ".concat(450, "px) and (max-width: 766px)"),
                d = "@media (min-width: ".concat(s, "px)"),
                c = 1e3,
                u = "@media (min-width: ".concat(c, "px)"),
                h = 1200,
                p = "@media (min-width: ".concat(h, "px)"),
                v = 1440,
                C = ("@media (min-width: ".concat(v, "px)"), 930),
                f = "@media (min-width: 450px)",
                g = "@media (max-height: 575.98px) and (orientation: landscape)",
                m = ("@media (min-width: ".concat(568, "px)"), "@media (min-width: ".concat(720, "px)"), "@media (min-width: ".concat(1024, "px)")),
                x = ("@media (min-width: ".concat(1440, "px)"), r(66477)),
                y = "0 var(--spacing-4-xs) var(--spacing-3-xs) var(--mild-overlay)",
                b = "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
                R = "0 var(--spacing-4-xs) var(--spacing-3-xs) var(--distinct-overlay)",
                E = (["0 8px 17px 2px rgba(100, 100, 100, 0.14)", "0 3px 14px 2px rgba(100, 100, 100, 0.12)", "0 5px 5px -3px rgba(100, 100, 100, 0.2)"].join(", "), "10px"),
                j = 63.1,
                _ = r(73912),
                A = "-0.4px",
                k = 100,
                B = 50,
                L = 1,
                M = -1
        },
        43661: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => C
            });
            var n = r(74336),
                i = r(39422),
                a = r(29901),
                o = r(34959),
                s = r(51166),
                l = r(54265),
                d = r(53908),
                c = r(61250);
            const u = (0, n.ZP)({
                    resolved: {},
                    chunkName: () => "Blog",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => Promise.all([r.e(5150), r.e(4534), r.e(3390), r.e(333), r.e(3236), r.e(1741), r.e(2286), r.e(2700), r.e(6337), r.e(5610), r.e(8594), r.e(5578), r.e(3397)]).then(r.bind(r, 6688)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve() {
                        return 6688
                    }
                }),
                h = (0, n.ZP)({
                    resolved: {},
                    chunkName: () => "BlogPost",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => Promise.all([r.e(5150), r.e(4534), r.e(3390), r.e(333), r.e(9105), r.e(3236), r.e(1741), r.e(2286), r.e(2700), r.e(6337), r.e(849), r.e(5610), r.e(857), r.e(2424), r.e(8307)]).then(r.bind(r, 56414)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve() {
                        return 56414
                    }
                }),
                p = (0, n.ZP)({
                    resolved: {},
                    chunkName: () => "Archive",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => Promise.all([r.e(5150), r.e(4534), r.e(3390), r.e(333), r.e(3236), r.e(1741), r.e(2286), r.e(2700), r.e(6337), r.e(5610), r.e(8594), r.e(5578), r.e(9057)]).then(r.bind(r, 68006)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve() {
                        return 68006
                    }
                }),
                v = (0, n.ZP)({
                    resolved: {},
                    chunkName: () => "TopicPosts",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => Promise.all([r.e(5150), r.e(4534), r.e(3390), r.e(333), r.e(3236), r.e(1741), r.e(2286), r.e(2700), r.e(6337), r.e(5610), r.e(8594), r.e(4855)]).then(r.bind(r, 6924)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve() {
                        return 6924
                    }
                });

            function C() {
                const {
                    params: e,
                    path: t
                } = (0, i.$B)(), r = (0, s.U6)("blog", e.country), n = (0, a.useContext)(o.Z).locale, C = (0, l.l)(n, "archive"), f = (0, l.l)(n, "topic"), g = (0, l.l)(n, "page"), m = (0, l.l)(n, "category"), x = [`${t}/${C}/${g}/:page`, `${t}/${C}`], y = [`${t}/${m}/:category/${g}/:page`, `${t}/${m}/:category`], b = [`${t}/${f}/:slug/${g}/:page`, `${t}/${f}/:slug`];
                return (0, c.jsxs)(i.rs, {
                    children: [r && (0, c.jsx)(i.AW, {
                        exact: !0,
                        path: y,
                        children: (0, c.jsx)(p, {})
                    }), r && (0, c.jsx)(i.AW, {
                        exact: !0,
                        path: b,
                        children: (0, c.jsx)(v, {})
                    }), r && (0, c.jsx)(i.AW, {
                        exact: !0,
                        path: x,
                        children: (0, c.jsx)(p, {})
                    }), r && (0, c.jsx)(i.AW, {
                        exact: !0,
                        path: `${t}/:slug`,
                        children: (0, c.jsx)(h, {})
                    }), r && (0, c.jsx)(i.AW, {
                        exact: !0,
                        path: t,
                        children: (0, c.jsx)(u, {})
                    }), (0, c.jsx)(d.TX, {})]
                })
            }
        },
        49062: (e, t, r) => {
            "use strict";
            r.d(t, {
                z: () => C
            });
            var n = r(74336),
                i = r(39422),
                a = r(26345),
                o = r(76504),
                s = r(75018),
                l = r(53908),
                d = r(61250);
            const c = (0, n.ZP)({
                    resolved: {},
                    chunkName: () => "shared-components-CareersIndex",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => Promise.all([r.e(5150), r.e(4534), r.e(3390), r.e(333), r.e(3236), r.e(1741), r.e(2286), r.e(2700), r.e(6337), r.e(4458)]).then(r.bind(r, 55935)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve() {
                        return 55935
                    }
                }),
                u = (0, n.ZP)({
                    resolved: {},
                    chunkName: () => "Department",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => Promise.all([r.e(5150), r.e(4534), r.e(3236), r.e(2700), r.e(9324)]).then(r.bind(r, 24210)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve() {
                        return 24210
                    }
                }),
                h = (0, n.ZP)({
                    resolved: {},
                    chunkName: () => "Application",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => Promise.all([r.e(4534), r.e(6928)]).then(r.bind(r, 43507)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve() {
                        return 43507
                    }
                }),
                p = (0, n.ZP)({
                    resolved: {},
                    chunkName: () => "Position",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => Promise.all([r.e(5150), r.e(3390), r.e(3236), r.e(1741), r.e(4133)]).then(r.bind(r, 7814)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve() {
                        return 7814
                    }
                }),
                v = ({
                    children: e
                }) => {
                    const {
                        language: t
                    } = (0, i.UO)();
                    if (!a.E7.includes(t)) throw new Error(s.L1);
                    return "en" !== t ? (0, d.jsx)(l.l_, {
                        to: "/en/careers",
                        status: 301
                    }) : e
                };

            function C({
                contextData: e
            }) {
                const {
                    path: t
                } = (0, i.$B)(), r = [t, `${t}/locations/:location/departments/:department`, `${t}/locations/:location`, `${t}/departments/:department`];
                return (0, d.jsx)(v, {
                    children: (0, d.jsx)(o.Z, {
                        nonce: e.nonce,
                        children: (0, d.jsx)(c, {
                            children: (0, d.jsxs)(i.rs, {
                                children: [(0, d.jsx)(i.AW, {
                                    exact: !0,
                                    path: r,
                                    children: (0, d.jsx)(u, {})
                                }), (0, d.jsx)(i.AW, {
                                    exact: !0,
                                    path: `${t}/positions/:position/apply`,
                                    children: (0, d.jsx)(h, {})
                                }), (0, d.jsx)(i.AW, {
                                    exact: !0,
                                    path: `${t}/positions/:position`,
                                    children: (0, d.jsx)(p, {})
                                }), (0, d.jsx)(l.TX, {})]
                            })
                        })
                    })
                })
            }
        },
        63538: (e, t, r) => {
            "use strict";
            r(29901), r(40322), r(19309), r(95502), r(41188), r(49679), r(19001);
            var n = r(53623);
            n.Z.create({
                wrap: {
                    backgroundColor: "var(--background-container-primary-pressed)",
                    fontSize: "80%",
                    padding: "var(--spacing-m)",
                    width: "100%"
                },
                label: {
                    display: "inline-block",
                    marginRight: "var(--spacing-s)"
                },
                checkbox: {
                    display: "inline-block",
                    marginRight: "3px"
                },
                listItem: e => ({
                    fontFamily: "Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                    ...e.isCanonical ? {
                        "::marker": {
                            color: "var(--typography-interactive-secondary-teal-default)"
                        }
                    } : {}
                }),
                button: {
                    lineHeight: .6,
                    marginRight: "var(--spacing-xs)",
                    padding: "3px",
                    width: "20px"
                }
            });
            r(61250);
            n.Z.create({
                wrap: {
                    margin: "0 auto",
                    maxWidth: "900px",
                    width: "100%"
                },
                innerWrap: {
                    padding: "var(--spacing-m)"
                }
            })
        },
        60375: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => o
            });
            var n = r(74336),
                i = r(61250);
            const a = (0, n.ZP)({
                resolved: {},
                chunkName: () => "WebsiteLegalPage",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!r.m[t]
                },
                importAsync: () => Promise.all([r.e(5150), r.e(4534), r.e(3390), r.e(333), r.e(3236), r.e(1741), r.e(2286), r.e(2700), r.e(6337), r.e(6565)]).then(r.bind(r, 64586)),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return r(t)
                },
                resolve() {
                    return 64586
                }
            });

            function o() {
                return (0, i.jsx)(a, {})
            }
        },
        36756: (e, t, r) => {
            "use strict";
            r.d(t, {
                d: () => c
            });
            var n = r(74336),
                i = r(29901),
                a = r(39422),
                o = r(34959),
                s = r(54265),
                l = r(61250);
            const d = (0, n.ZP)({
                resolved: {},
                chunkName: () => "Page",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!r.m[t]
                },
                importAsync: () => Promise.all([r.e(5150), r.e(4534), r.e(3390), r.e(333), r.e(3236), r.e(1741), r.e(2286), r.e(2700), r.e(6337), r.e(439)]).then(r.bind(r, 25625)),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return r(t)
                },
                resolve() {
                    return 25625
                }
            });

            function c() {
                const {
                    params: e,
                    path: t
                } = (0, a.$B)(), r = (0, i.useContext)(o.Z).locale, n = [`${t}/${(0,s.l)(r,"page")}/:page`, `${t}`];
                return (0, l.jsx)(a.rs, {
                    children: (0, l.jsx)(a.AW, {
                        exact: !0,
                        path: n,
                        children: (0, l.jsx)(d, {
                            usePageAsFrontPage: Boolean(!e.slug)
                        })
                    })
                })
            }
        },
        10228: (e, t, r) => {
            "use strict";
            r.d(t, {
                z: () => p
            });
            var n = r(74336),
                i = r(29901),
                a = r(39422),
                o = r(34959),
                s = r(51166),
                l = r(54265),
                d = r(53908),
                c = r(61250);
            const u = (0, n.ZP)({
                    resolved: {},
                    chunkName: () => "PressArchivePage",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => Promise.all([r.e(5150), r.e(4534), r.e(3390), r.e(333), r.e(3236), r.e(1741), r.e(2286), r.e(2700), r.e(6337), r.e(173), r.e(5537)]).then(r.bind(r, 87225)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve() {
                        return 87225
                    }
                }),
                h = (0, n.ZP)({
                    resolved: {},
                    chunkName: () => "PressRelease",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => Promise.all([r.e(5150), r.e(4534), r.e(3390), r.e(333), r.e(3236), r.e(1741), r.e(2286), r.e(2700), r.e(6337), r.e(3660)]).then(r.bind(r, 35561)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve() {
                        return 35561
                    }
                });

            function p() {
                const {
                    params: e,
                    path: t
                } = (0, a.$B)(), r = (0, s.U6)("press-releases", e.country), n = (0, i.useContext)(o.Z).locale, p = `/:language-:country/${(0,l.l)(n,"press")}/${(0,l.l)(n,"press-releases")}`, v = [`${p}/${(0,l.l)(n,"page")}/:page`, `${p}`];
                return (0, c.jsxs)(a.rs, {
                    children: [r && (0, c.jsx)(a.AW, {
                        exact: !0,
                        path: v,
                        children: (0, c.jsx)(u, {})
                    }), r && (0, c.jsx)(a.AW, {
                        exact: !0,
                        path: `${t}/:slug`,
                        children: (0, c.jsx)(h, {})
                    }), (0, c.jsx)(d.TX, {})]
                })
            }
        },
        76504: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => _
            });
            var n = r(29901),
                i = r(7862),
                a = r.n(i),
                o = r(71794),
                s = r(95564),
                l = r(22773),
                d = r(32986),
                c = r(32068),
                u = r(91932),
                h = r(56508),
                p = r(92372);
            const v = "gtm-tag",
                C = e => {
                    if (document.getElementById(v)) return;
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        "gtm.start": (new Date).getTime(),
                        event: "gtm.js"
                    });
                    const t = document.getElementsByTagName("script")[0],
                        r = document.createElement("script");
                    r.async = !0, r.src = (() => {
                        const e = {
                            id: "GTM-5F8WSWT",
                            gtm_preview: "env-1",
                            gtm_auth: "O3FWzqjy22q63L9Y2Lcpog",
                            gtm_cookies_win: "x"
                        };
                        return `https://www.googletagmanager.com/gtm.js?${(0,p._)(e)}`
                    })(), r.id = v, r.setAttribute("nonce", e), r.setAttribute("data-nonce", e), t.parentNode.insertBefore(r, t)
                };
            var f = r(84929),
                g = r(9960);
            const m = (e, t) => {
                    if ("undefined" == typeof document) return;
                    const r = e => document.getElementById(e),
                        n = r("onetrust-accept-btn-handler"),
                        i = r("onetrust-reject-all-handler"),
                        a = r("onetrust-pc-btn-handler"),
                        o = r("ot-cookie-policy-link"),
                        s = r("ot-privacy-policy-link"),
                        l = r("ot-imprint-link"),
                        d = document.querySelector(".banner-close-button"),
                        c = r("accept-recommended-btn-handler"),
                        u = document.querySelector(".ot-pc-refuse-all-handler"),
                        h = document.querySelector(".save-preference-btn-handler"),
                        p = document.querySelector(".privacy-notice-link"),
                        v = r("close-pc-btn-handler"),
                        C = new Map([
                            [n, () => {
                                e("onetrust_cookie_banner.accept_all_banner_clicked", t)
                            }],
                            [i, () => e("onetrust_cookie_banner.reject_all_banner_clicked", t)],
                            [a, () => e("onetrust_cookie_banner.cookie_preferences_banner_clicked", t)],
                            [o, () => e("onetrust_cookie_banner.cookie-policy_clicked", t)],
                            [s, () => e("onetrust_cookie_banner.privacy-policy_clicked", t)],
                            [l, () => e("onetrust_cookie_banner.imprint_clicked", t)],
                            [d, () => e("onetrust_cookie_banner.close_clicked", t)],
                            [c, () => e("onetrust_cookie_banner.accept_all_pc_clicked", t)],
                            [u, () => e("onetrust_cookie_banner.reject_all_pc_clicked", t)],
                            [h, () => e("onetrust_cookie_banner.confirm_clicked", { ...t,
                                activeGroups: window.OnetrustActiveGroups
                            })],
                            [p, () => e("onetrust_cookie_banner.more-information_clicked", t)],
                            [v, () => e("onetrust_cookie_banner.close_pc_clicked", t)]
                        ]);
                    for (const [f, g] of C) f && f.addEventListener("click", g);
                    return () => {
                        for (const [e, t] of C) e && e.removeEventListener("click", t)
                    }
                },
                x = ["_gcl", "_dc_gtm_UA-", "_gat_", "_ga_"],
                y = () => {
                    const e = window.previousOnetrustActiveGroups.split(",").filter(Boolean),
                        t = window.OnetrustActiveGroups.split(",").filter(Boolean),
                        r = e.filter((e => -1 === t.indexOf(e))),
                        n = window ? .location ? .hostname.split(".").slice(-2).join(".");
                    if (r.length) {
                        window.Optanon.GetDomainData().GeneralVendors.filter((({
                            VendorCustomId: e
                        }) => -1 !== r.indexOf(e))).reduce(((e, {
                            Cookies: t
                        }) => e.concat(t)), []).map((({
                            Name: e
                        }) => e)).forEach((e => {
                            document.cookie = e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;", document.cookie = e + `=; Domain=.${n}; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
                        }))
                    }
                    if (r.includes("C0003")) {
                        document.cookie.split(";").map((e => e.trim())).forEach((e => {
                            const [t] = e.split("=");
                            x.some((e => t.startsWith(e))) && (document.cookie = t + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;", document.cookie = t + `=; Domain=.${n}; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`)
                        }))
                    }
                    window.previousOnetrustActiveGroups = window.OnetrustActiveGroups
                };
            var b = r(61250);
            const R = ({
                nonce: e,
                children: t
            }) => {
                const {
                    getCookie: r
                } = (0, g.Z)(), {
                    language: i,
                    country: a
                } = (0, l.Z)(), {
                    trackStructuredEvent: o
                } = (0, f.D)(), s = r(c.Q1), d = !s || "false" === s;
                (0, n.useEffect)((() => {
                    document.cookie = "num26GDPR=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;", document.cookie = "num26CookiesGDPR=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                }), []);
                const p = (0, n.useMemo)((() => ({
                        locale: i,
                        country: a
                    })), [i, a]),
                    x = (0, n.useCallback)((() => {
                        void 0 !== window.OnetrustActiveGroups && (window.OnetrustActiveGroups.includes("V61") ? Boolean(document.getElementById(v)) || (C(e), o("onetrust_cookie_banner.GTM-script-loaded", p)) : ((() => {
                            const e = document.getElementById(v);
                            e && e.parentElement.removeChild(e), window.dataLayer = []
                        })(), o("onetrust_cookie_banner.GTM-script-not-loaded", p)))
                    }), [e, o, p]),
                    R = (0, n.useCallback)((() => {
                        x(), window.OneTrust ? .OnConsentChanged(x)
                    }), [x]),
                    E = (0, n.useCallback)((() => {
                        void 0 === window.previousOnetrustActiveGroups && (window.previousOnetrustActiveGroups = window.OnetrustActiveGroups), window.OneTrust ? .OnConsentChanged(y)
                    }), []);
                return (0, n.useEffect)((() => {
                    if (!d || !window.OneTrust) return;
                    const e = m(o, p);
                    return R(), E(), e
                }), [d, x, E, R, o, p]), (0, n.useEffect)((() => {
                    if (!d || window.OneTrust || !window.MutationObserver) return;
                    let e;
                    const t = new window.MutationObserver(((t, r) => {
                        for (const n of t)
                            if ("childList" === n.type)
                                for (const t of n.addedNodes)
                                    if ("onetrust-consent-sdk" === t.id) return e = m(o, p), R(), E(), void r.disconnect()
                    }));
                    return t.observe(document.body, {
                        childList: !0
                    }), () => {
                        t.disconnect(), e ? .()
                    }
                }), [d, x, E, R, o, p]), (0, b.jsx)(u.Z.Provider, {
                    value: {
                        openCookieNote: e => {
                            if (e.stopPropagation(), void 0 === window.OneTrust) return h.Z.error("ONE_TRUST_LOADING_ERROR");
                            window.OneTrust.ToggleInfoDisplay(), o("onetrust_cookie_banner.pc_open", p)
                        },
                        allowCookieNote: d
                    },
                    children: t
                })
            };
            R.propTypes = {
                nonce: a().string.isRequired,
                children: a().node.isRequired
            };
            const E = R,
                j = ({
                    children: e,
                    nonce: t
                }) => {
                    const {
                        language: r,
                        country: i
                    } = (0, l.Z)(), a = ["https://api.tech26.de", "https://n26-trusted.n26.com", "https://images.ctfassets.net"];
                    return (0, b.jsxs)(d.Z, {
                        projects: ["clownfish"],
                        children: [(0, b.jsxs)(o.ql, {
                            children: [(0, b.jsx)("html", {
                                lang: r + "-" + i
                            }), a.map((e => (0, b.jsxs)(n.Fragment, {
                                children: [(0, b.jsx)("link", {
                                    rel: "preconnect",
                                    href: e,
                                    crossOrigin: "anonymous"
                                }), (0, b.jsx)("link", {
                                    rel: "dns-prefetch",
                                    href: e,
                                    crossOrigin: "anonymous"
                                })]
                            }, e)))]
                        }), (0, b.jsx)(s.Z.Provider, {
                            value: JSON.parse(!0),
                            children: (0, b.jsx)(E, {
                                nonce: t,
                                children: e
                            })
                        })]
                    })
                };
            j.propTypes = {
                nonce: a().string.isRequired,
                children: a().node.isRequired
            };
            const _ = j
        },
        51166: (e, t, r) => {
            "use strict";
            r.d(t, {
                U6: () => i,
                ZP: () => a
            });
            var n = r(26345);
            const i = (e, t = "") => (n.Jb[t.toLowerCase()] || []).includes(e),
                a = e => Object.keys(n.Jb).filter((t => n.Jb[t].includes(e))).map((e => e.toUpperCase()))
        },
        54265: (e, t, r) => {
            "use strict";
            r.d(t, {
                l: () => a
            });
            var n = r(16454),
                i = r(26345);

            function a(e, t) {
                return (0, n.l)({
                    supportedLanguages: i.E7,
                    defaultLang: i.k$,
                    language: e,
                    slugKey: i.f_[t]
                })
            }
        },
        48789: e => {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "updateDarkPreference"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "dark"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "InputBoolean"
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "updateDarkPreference"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "dark"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "dark"
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
                                        value: "status"
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
                    end: 108
                }
            };
            t.loc.source = {
                body: "mutation updateDarkPreference($dark: InputBoolean) {\n  updateDarkPreference(dark: $dark) {\n    status\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };

            function r(e, t) {
                if ("FragmentSpread" === e.kind) t.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var n = e.type;
                    "NamedType" === n.kind && t.add(n.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    r(e, t)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    r(e, t)
                })), e.definitions && e.definitions.forEach((function(e) {
                    r(e, t)
                }))
            }
            var n = {};

            function i(e, t) {
                for (var r = 0; r < e.definitions.length; r++) {
                    var n = e.definitions[r];
                    if (n.name && n.name.value == t) return n
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var t = new Set;
                    r(e, t), n[e.name.value] = t
                }
            })), e.exports = t, e.exports.updateDarkPreference = function(e, t) {
                var r = {
                    kind: e.kind,
                    definitions: [i(e, t)]
                };
                e.hasOwnProperty("loc") && (r.loc = e.loc);
                var a = n[t] || new Set,
                    o = new Set,
                    s = new Set;
                for (a.forEach((function(e) {
                        s.add(e)
                    })); s.size > 0;) {
                    var l = s;
                    s = new Set, l.forEach((function(e) {
                        o.has(e) || (o.add(e), (n[e] || new Set).forEach((function(e) {
                            s.add(e)
                        })))
                    }))
                }
                return o.forEach((function(t) {
                    var n = i(e, t);
                    n && r.definitions.push(n)
                })), r
            }(t, "updateDarkPreference")
        },
        91600: e => {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "updateMotionPreference"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "reducedMotion"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "InputBoolean"
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "updateMotionPreference"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "reducedMotion"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "reducedMotion"
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
                                        value: "status"
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
                    end: 139
                }
            };
            t.loc.source = {
                body: "mutation updateMotionPreference($reducedMotion: InputBoolean) {\n  updateMotionPreference(reducedMotion: $reducedMotion) {\n    status\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };

            function r(e, t) {
                if ("FragmentSpread" === e.kind) t.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var n = e.type;
                    "NamedType" === n.kind && t.add(n.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    r(e, t)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    r(e, t)
                })), e.definitions && e.definitions.forEach((function(e) {
                    r(e, t)
                }))
            }
            var n = {};

            function i(e, t) {
                for (var r = 0; r < e.definitions.length; r++) {
                    var n = e.definitions[r];
                    if (n.name && n.name.value == t) return n
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var t = new Set;
                    r(e, t), n[e.name.value] = t
                }
            })), e.exports = t, e.exports.updateMotionPreference = function(e, t) {
                var r = {
                    kind: e.kind,
                    definitions: [i(e, t)]
                };
                e.hasOwnProperty("loc") && (r.loc = e.loc);
                var a = n[t] || new Set,
                    o = new Set,
                    s = new Set;
                for (a.forEach((function(e) {
                        s.add(e)
                    })); s.size > 0;) {
                    var l = s;
                    s = new Set, l.forEach((function(e) {
                        o.has(e) || (o.add(e), (n[e] || new Set).forEach((function(e) {
                            s.add(e)
                        })))
                    }))
                }
                return o.forEach((function(t) {
                    var n = i(e, t);
                    n && r.definitions.push(n)
                })), r
            }(t, "updateMotionPreference")
        },
        72963: e => {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "getAppearancePreferences"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "preferences"
                            },
                            name: {
                                kind: "Name",
                                value: "getAppearancePreferences"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "alertDuration"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "dark"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "discreet"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "reducedMotion"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "notifications"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "sound"
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
                    end: 167
                }
            };
            t.loc.source = {
                body: "query getAppearancePreferences {\n  preferences: getAppearancePreferences {\n    alertDuration\n    dark\n    discreet\n    reducedMotion\n    notifications\n    sound\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };

            function r(e, t) {
                if ("FragmentSpread" === e.kind) t.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var n = e.type;
                    "NamedType" === n.kind && t.add(n.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    r(e, t)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    r(e, t)
                })), e.definitions && e.definitions.forEach((function(e) {
                    r(e, t)
                }))
            }
            var n = {};

            function i(e, t) {
                for (var r = 0; r < e.definitions.length; r++) {
                    var n = e.definitions[r];
                    if (n.name && n.name.value == t) return n
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var t = new Set;
                    r(e, t), n[e.name.value] = t
                }
            })), e.exports = t, e.exports.getAppearancePreferences = function(e, t) {
                var r = {
                    kind: e.kind,
                    definitions: [i(e, t)]
                };
                e.hasOwnProperty("loc") && (r.loc = e.loc);
                var a = n[t] || new Set,
                    o = new Set,
                    s = new Set;
                for (a.forEach((function(e) {
                        s.add(e)
                    })); s.size > 0;) {
                    var l = s;
                    s = new Set, l.forEach((function(e) {
                        o.has(e) || (o.add(e), (n[e] || new Set).forEach((function(e) {
                            s.add(e)
                        })))
                    }))
                }
                return o.forEach((function(t) {
                    var n = i(e, t);
                    n && r.definitions.push(n)
                })), r
            }(t, "getAppearancePreferences")
        },
        47541: e => {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "getTranslations"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "projects"
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
                                            value: "TranslationProject"
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
                                value: "locale"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Locale"
                                }
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
                                value: "translations"
                            },
                            name: {
                                kind: "Name",
                                value: "getTranslations"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "projects"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "projects"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "locale"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "locale"
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
                                        value: "value"
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
                    end: 165
                }
            };
            t.loc.source = {
                body: "query getTranslations($projects: [TranslationProject!]!, $locale: Locale!) {\n  translations: getTranslations(projects: $projects, locale: $locale) {\n    value\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };

            function r(e, t) {
                if ("FragmentSpread" === e.kind) t.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var n = e.type;
                    "NamedType" === n.kind && t.add(n.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    r(e, t)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    r(e, t)
                })), e.definitions && e.definitions.forEach((function(e) {
                    r(e, t)
                }))
            }
            var n = {};

            function i(e, t) {
                for (var r = 0; r < e.definitions.length; r++) {
                    var n = e.definitions[r];
                    if (n.name && n.name.value == t) return n
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var t = new Set;
                    r(e, t), n[e.name.value] = t
                }
            })), e.exports = t, e.exports.getTranslations = function(e, t) {
                var r = {
                    kind: e.kind,
                    definitions: [i(e, t)]
                };
                e.hasOwnProperty("loc") && (r.loc = e.loc);
                var a = n[t] || new Set,
                    o = new Set,
                    s = new Set;
                for (a.forEach((function(e) {
                        s.add(e)
                    })); s.size > 0;) {
                    var l = s;
                    s = new Set, l.forEach((function(e) {
                        o.has(e) || (o.add(e), (n[e] || new Set).forEach((function(e) {
                            s.add(e)
                        })))
                    }))
                }
                return o.forEach((function(t) {
                    var n = i(e, t);
                    n && r.definitions.push(n)
                })), r
            }(t, "getTranslations")
        },
        24154: e => {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "trackEventOptimizely"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "eventKey"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
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
                                value: "tags"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "JSON"
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
                                value: "JSON"
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "trackEventOptimizely"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "eventKey"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "eventKey"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "tags"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "tags"
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
                                        value: "eventKey"
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
                    end: 207
                }
            };
            t.loc.source = {
                body: "mutation trackEventOptimizely(\n  $eventKey: String!\n  $tags: JSON\n  $attributes: JSON\n) {\n  trackEventOptimizely(\n    eventKey: $eventKey\n    tags: $tags\n    attributes: $attributes\n  ) {\n    eventKey\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };

            function r(e, t) {
                if ("FragmentSpread" === e.kind) t.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var n = e.type;
                    "NamedType" === n.kind && t.add(n.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    r(e, t)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    r(e, t)
                })), e.definitions && e.definitions.forEach((function(e) {
                    r(e, t)
                }))
            }
            var n = {};

            function i(e, t) {
                for (var r = 0; r < e.definitions.length; r++) {
                    var n = e.definitions[r];
                    if (n.name && n.name.value == t) return n
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var t = new Set;
                    r(e, t), n[e.name.value] = t
                }
            })), e.exports = t, e.exports.trackEventOptimizely = function(e, t) {
                var r = {
                    kind: e.kind,
                    definitions: [i(e, t)]
                };
                e.hasOwnProperty("loc") && (r.loc = e.loc);
                var a = n[t] || new Set,
                    o = new Set,
                    s = new Set;
                for (a.forEach((function(e) {
                        s.add(e)
                    })); s.size > 0;) {
                    var l = s;
                    s = new Set, l.forEach((function(e) {
                        o.has(e) || (o.add(e), (n[e] || new Set).forEach((function(e) {
                            s.add(e)
                        })))
                    }))
                }
                return o.forEach((function(t) {
                    var n = i(e, t);
                    n && r.definitions.push(n)
                })), r
            }(t, "trackEventOptimizely")
        },
        49557: e => {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "logOptimizelyEvent"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "visitor_id"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                value: "entity_id"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
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
                                value: "key"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
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
                                value: "value"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Float"
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "logOptimizelyEvent"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "visitor_id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "visitor_id"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "entity_id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "entity_id"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "key"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "key"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "value"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "value"
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
                                        value: "status"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "errors"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "message"
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
                    end: 270
                }
            };
            t.loc.source = {
                body: "mutation logOptimizelyEvent(\n  $visitor_id: ID!\n  $entity_id: String!\n  $key: String!\n  $value: Float\n) {\n  logOptimizelyEvent(\n    visitor_id: $visitor_id\n    entity_id: $entity_id\n    key: $key\n    value: $value\n  ) {\n    status\n    errors {\n      message\n    }\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };

            function r(e, t) {
                if ("FragmentSpread" === e.kind) t.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var n = e.type;
                    "NamedType" === n.kind && t.add(n.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    r(e, t)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    r(e, t)
                })), e.definitions && e.definitions.forEach((function(e) {
                    r(e, t)
                }))
            }
            var n = {};

            function i(e, t) {
                for (var r = 0; r < e.definitions.length; r++) {
                    var n = e.definitions[r];
                    if (n.name && n.name.value == t) return n
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var t = new Set;
                    r(e, t), n[e.name.value] = t
                }
            })), e.exports = t, e.exports.logOptimizelyEvent = function(e, t) {
                var r = {
                    kind: e.kind,
                    definitions: [i(e, t)]
                };
                e.hasOwnProperty("loc") && (r.loc = e.loc);
                var a = n[t] || new Set,
                    o = new Set,
                    s = new Set;
                for (a.forEach((function(e) {
                        s.add(e)
                    })); s.size > 0;) {
                    var l = s;
                    s = new Set, l.forEach((function(e) {
                        o.has(e) || (o.add(e), (n[e] || new Set).forEach((function(e) {
                            s.add(e)
                        })))
                    }))
                }
                return o.forEach((function(t) {
                    var n = i(e, t);
                    n && r.definitions.push(n)
                })), r
            }(t, "logOptimizelyEvent")
        },
        82935: e => {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPiA8c3R5bGU+IEBrZXlmcmFtZXMgZ3JhZGllbnRBbmltYXRpb24geyB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgfSB9IHJlY3QgeyBmaWxsOiB1cmwoI2dyYWRpZW50KTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgYW5pbWF0aW9uOiAycyBsaW5lYXIgaW5maW5pdGUgZ3JhZGllbnRBbmltYXRpb247IH0gPC9zdHlsZT4gPGRlZnM+IDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiPiA8c3RvcCBvZmZzZXQ9IjE1JSIgc3RvcC1vcGFjaXR5PSIwIiAvPiA8c3RvcCBvZmZzZXQ9IjQ1JSIgc3RvcC1jb2xvcj0icmdiKDE2MCwgMTYwLCAxNjApIiBzdG9wLW9wYWNpdHk9IjAuMDY1IiAvPiA8c3RvcCBvZmZzZXQ9IjU1JSIgc3RvcC1jb2xvcj0icmdiKDE2MCwgMTYwLCAxNjApIiBzdG9wLW9wYWNpdHk9IjAuMDY1IiAvPiA8c3RvcCBvZmZzZXQ9Ijg1JSIgc3RvcC1vcGFjaXR5PSIwIiAvPiA8L2xpbmVhckdyYWRpZW50PiA8L2RlZnM+IDxnIHRyYW5zZm9ybT0ic2tld1goLTEyKSI+IDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIC8+IDwvZz4gPC9zdmc+"
        },
        20875: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = (0, r(36614).o)("PageViewerContext", (function(e) {}))
        },
        64507: (e, t, r) => {
            "use strict";
            var n = r(29901),
                i = r(63293),
                a = r(10571),
                o = r(84246),
                s = r(35725),
                l = r(98314),
                d = r(74336),
                c = r(71794),
                u = r(65260),
                h = r(32068),
                p = r(56265),
                v = r(84079),
                C = r(51622);
            const f = ["ad", "ads", "adv", "bi", "fb", "ig", "pin", "tw", "vk"];
            let g, m;
            try {
                g = C.plugins, m = C.enhancers
            } catch (V) {
                g = [], m = []
            }
            r(88447);
            var x = r(61250);

            function y({
                children: e
            }) {
                return (0, x.jsx)(x.Fragment, {
                    children: e
                })
            }
            var b = r(85916),
                R = r(26112),
                E = r(54194),
                j = r.n(E);
            const _ = {
                AD: "AND",
                AE: "ARE",
                AF: "AFG",
                AG: "ATG",
                AI: "AIA",
                AL: "ALB",
                AM: "ARM",
                AO: "AGO",
                AR: "ARG",
                AS: "ASM",
                AT: "AUT",
                AU: "AUS",
                AW: "ABW",
                AZ: "AZE",
                BA: "BIH",
                BB: "BRB",
                BD: "BGD",
                BE: "BEL",
                BF: "BFA",
                BG: "BGR",
                BH: "BHR",
                BI: "BDI",
                BJ: "BEN",
                BM: "BMU",
                BN: "BRN",
                BO: "BOL",
                BR: "BRA",
                BS: "BHS",
                BT: "BTN",
                BV: "BVT",
                BW: "BWA",
                BY: "BLR",
                BZ: "BLZ",
                CA: "CAN",
                CC: "CCK",
                CD: "COD",
                CF: "CAF",
                CG: "COG",
                CH: "CHE",
                CI: "CIV",
                CK: "COK",
                CL: "CHL",
                CM: "CMR",
                CN: "CHN",
                CO: "COL",
                CR: "CRI",
                CU: "CUB",
                CV: "CPV",
                CX: "CXR",
                CY: "CYP",
                CZ: "CZE",
                DE: "DEU",
                DJ: "DJI",
                DK: "DNK",
                DM: "DMA",
                DO: "DOM",
                DZ: "DZA",
                EC: "ECU",
                EE: "EST",
                EG: "EGY",
                ER: "ERI",
                ES: "ESP",
                ET: "ETH",
                FI: "FIN",
                FJ: "FJI",
                FK: "FLK",
                FM: "FSM",
                FO: "FRO",
                FR: "FRA",
                GA: "GAB",
                GB: "GBR",
                GD: "GRD",
                GE: "GEO",
                GH: "GHA",
                GI: "GIB",
                GL: "GRL",
                GM: "GMB",
                GN: "GIN",
                GQ: "GNQ",
                GR: "GRC",
                GS: "SGS",
                GT: "GTM",
                GU: "GUM",
                GW: "GNB",
                GY: "GUY",
                HK: "HKG",
                HM: "HMD",
                HN: "HND",
                HR: "HRV",
                HT: "HTI",
                HU: "HUN",
                ID: "IDN",
                IE: "IRL",
                IL: "ISR",
                IN: "IND",
                IO: "IOT",
                IQ: "IRQ",
                IR: "IRN",
                IS: "ISL",
                IT: "ITA",
                JM: "JAM",
                JO: "JOR",
                JP: "JPN",
                KE: "KEN",
                KG: "KGZ",
                KH: "KHM",
                KI: "KIR",
                KM: "COM",
                KN: "KNA",
                KP: "PRK",
                KR: "KOR",
                KW: "KWT",
                KY: "CYM",
                KZ: "KAZ",
                LA: "LAO",
                LB: "LBN",
                LC: "LCA",
                LI: "LIE",
                LK: "LKA",
                LR: "LBR",
                LS: "LSO",
                LT: "LTU",
                LU: "LUX",
                LV: "LVA",
                LY: "LBY",
                MA: "MAR",
                MC: "MCO",
                MD: "MDA",
                ME: "MNE",
                MG: "MDG",
                MH: "MHL",
                MK: "MKD",
                ML: "MLI",
                MM: "MMR",
                MN: "MNG",
                MO: "MAC",
                MP: "MNP",
                MR: "MRT",
                MS: "MSR",
                MT: "MLT",
                MU: "MUS",
                MV: "MDV",
                MW: "MWI",
                MX: "MEX",
                MY: "MYS",
                MZ: "MOZ",
                NA: "NAM",
                NC: "NCL",
                NE: "NER",
                NF: "NFK",
                NG: "NGA",
                NI: "NIC",
                NL: "NLD",
                NO: "NOR",
                NP: "NPL",
                NR: "NRU",
                NU: "NIU",
                NZ: "NZL",
                OM: "OMN",
                PA: "PAN",
                PE: "PER",
                PF: "PYF",
                PG: "PNG",
                PH: "PHL",
                PK: "PAK",
                PL: "POL",
                PM: "SPM",
                PN: "PCN",
                PR: "PRI",
                PS: "PSE",
                PT: "PRT",
                PW: "PLW",
                PY: "PRY",
                QA: "QAT",
                RO: "ROU",
                RS: "SRB",
                RU: "RUS",
                RW: "RWA",
                SA: "SAU",
                SB: "SLB",
                SC: "SYC",
                SD: "SDN",
                SE: "SWE",
                SG: "SGP",
                SH: "SHN",
                SI: "SVN",
                SK: "SVK",
                SL: "SLE",
                SM: "SMR",
                SN: "SEN",
                SO: "SOM",
                SR: "SUR",
                SS: "SSD",
                ST: "STP",
                SV: "SLV",
                SY: "SYR",
                SZ: "SWZ",
                TC: "TCA",
                TD: "TCD",
                TF: "ATF",
                TG: "TGO",
                TH: "THA",
                TJ: "TJK",
                TK: "TKL",
                TL: "TLS",
                TM: "TKM",
                TN: "TUN",
                TO: "TON",
                TR: "TUR",
                TT: "TTO",
                TV: "TUV",
                TW: "TWN",
                TZ: "TZA",
                UA: "UKR",
                UG: "UGA",
                US: "USA",
                UY: "URY",
                UZ: "UZB",
                VA: "VAT",
                VC: "VCT",
                VE: "VEN",
                VG: "VGB",
                VI: "VIR",
                VN: "VNM",
                VU: "VUT",
                WF: "WLF",
                WS: "WSM",
                XK: "XKX",
                YE: "YEM",
                YT: "MYT",
                ZA: "ZAF",
                ZM: "ZMB",
                ZW: "ZWE"
            };

            function A(e, t, r) {
                const n = e[t];
                if (!n) return !1;
                const {
                    allowedCountries: i,
                    deniedCountries: a
                } = n;
                if (i || a) {
                    if (!r) return !1;
                    const e = _[r] || r;
                    if (i) return i.includes(e);
                    if (a) return !a.includes(e)
                }
                return !0
            }
            var k = r(20386);
            var B = r(12006),
                L = r(56508);
            Object.keys(j());
            const M = (e, t) => {
                    const r = (0, B.y)(t);
                    return e.find((({
                        name: e
                    }) => r(e)))
                },
                S = (e, t) => {
                    const r = M(e, t),
                        n = (0, B.y)(t)("default"),
                        i = !r || "default" !== r.name;
                    return n && i ? e.find((e => e.name.endsWith("_control"))) : r || (e => {
                        const t = e.reduce(((e, t) => e + t.probability), 0),
                            r = Math.random() * t;
                        let n = 0;
                        return e.find((e => (n += e.probability, r <= n)))
                    })(e)
                };
            var T = r(92372);
            const D = e => (0, T.d)(window.location.search),
                O = Object.keys(j()),
                w = (0, i.ej)(h._e),
                N = () => {
                    const {
                        flags: e
                    } = D(), t = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.countryCode,
                            r = e.fermiumFlags;
                        return {
                            support: [],
                            registration: [{
                                name: "introductory_page_v2_eu",
                                enabled: !1
                            }, {
                                name: "introductory_page_v2_us",
                                enabled: !1
                            }, {
                                name: "nationality_demonyms",
                                enabled: !1
                            }, {
                                name: "data_review",
                                enabled: A(void 0 === r ? {} : r, k.jZ, t)
                            }, {
                                name: "user_reengagement",
                                enabled: !1
                            }, {
                                name: "french_iban",
                                enabled: !1
                            }],
                            website: [],
                            banking: []
                        }
                    }();
                    return M(t, e) ? w : O.reduce(((r, n) => (t[n] = S(t, e), r)), {})
                };
            var H = r(83182),
                I = r(18594),
                P = r(57182),
                Z = r(51262),
                V = r(2420),
                z = r(82435),
                F = r(6576);
            var W = r(71256),
                Y = r(19873),
                U = r(31741),
                G = r(75018);
            const K = ({
                graphQLErrors: e,
                networkError: t
            }) => {
                void 0 !== e && e.forEach((e => {
                    if (L.Z.error("APOLLO_CLIENT_ERROR", e), e.message === G.CT) {
                        if ((0, Y.Sp)()) return (0, U.x)("close");
                        window.location.href = "/logout"
                    }
                })), void 0 !== t && L.Z.error("APOLLO_NETWORK_ERROR", t), "function" == typeof window.setError && window.setError(G.qU)
            };
            var $ = r(13975);
            const q = ({
                    csrfToken: e,
                    platformHeaders: t
                }) => (n, i) => {
                    const a = window.__PEK__,
                        o = JSON.parse(i.body),
                        s = ["website", "support"].includes("website"),
                        l = r => (0, $.Z)(n, { ...i,
                            headers: { ...i.headers,
                                ...t,
                                "csrf-token": e
                            },
                            body: JSON.stringify(r)
                        });
                    return s ? l(o) : (L.Z.debug("PRE_ENCRYPTION_PAYLOAD", o), r.e(5099).then(r.bind(r, 15099)).then((e => e.default)).then((e => e(a, o))).then((e => l(e))).then((r => r.ok || i.isRetry ? r : r.json().then((r => (window.__PEK__ = r.key, q({
                        csrfToken: e,
                        platformHeaders: t
                    })(n, { ...i,
                        isRetry: !0
                    })))))))
                },
                J = q,
                Q = (new I.i(((e, t) => {
                    const r = `${F.Z2}?op=${e.operationName}`;
                    return e.setContext((() => ({
                        uri: r
                    }))), t ? t(e) : null
                })), e => {
                    const t = P.A,
                        r = (0, V.q)(K),
                        n = new t({
                            uri: F.Z2,
                            credentials: "same-origin",
                            fetch: J(e)
                        }),
                        i = (0, Z.v)((() => ({
                            headers: {
                                "x-requested-with": "XMLHttpRequest"
                            }
                        }))),
                        a = ((0, z.Nq)({
                            sha256: W.JQ
                        }), [!1, r, i, !1, n].filter(Boolean));
                    return I.i.from(a)
                });
            var X = r(42391);
            const ee = /a|e|i|o|u/gi,
                te = e => (e || "").slice(0, 8),
                re = (e, {
                    typename: t
                }) => `${((e="")=>e.replace("Contentful","").replace(ee,""))(t)}:${te(e.sys.id)}`,
                ne = { ...["TrackingSettings", "ContentfulMediaObject", "Author", "BlogArchivePage", "BlogPost", "BlogTopicPage", "MinimalBlogPost", "BlogPostCategory", "PopularBlogPosts", "PopularPostsCategory", "CategoryNavigation", "CareersDepartments", "CountryAwareLinkItem", "CountryAwarePageLink", "PageLink", "Media", "PageSEOData", "CountryPages", "SEOdata", "PricingProduct", "PlanFeatureClusters", "PlanFeatures", "PricingProductMatrix", "PlanFeatureClustersMatrix", "PlanFeaturesMatrix", "PlanFeatureItemsMatrix", "LegalDocsSection", "LegalDocument", "WebsiteLatestPressReleases", "PressPage", "PressContacts", "PressReleasePage", "PressReleaseFooter", "PressRelease", "FooterRow", "FooterNavigation", "HeaderNavigationGroup", "HeaderNavigationItem", "TwoByTwo", "LinkList", "WebsiteBanner", "WebsitePageAdditionalBlogPosts", "WebsitePageAdditionalBlogPostsItem", "WebsitePageButton", "WebsitePageCardDesignComparison", "WebsitePageChecklist", "WebsitePageChecklistItem", "WebsitePageCompare", "WebsiteConversionCard", "WebsiteDataTable", "WebsitePageFactsBanner", "WebsitePageFAQ", "WebsitePageFAQItem", "FeatureHighlights", "HighlightedFeatures", "WebsitePageFeaturesSlider", "SliderAssets", "WebsitePageFeatureTeaser", "WebsitePageFullSizeMedia", "WebsiteIframe", "WebsitePageImage", "WebsitePageIntro", "WebsitePageOverdraftCalculator", "WebsitePagePricing", "WebsiteSpanishRiskIndicator", "WebsiteSplitView", "WebsitePageTextCardSlider", "WebsitePageTextImageGroup", "WebsitePageTextImage", "WebsitePageTextMediaComparison", "WebsitePageTextMediaEmbed", "WebsitePageTextMediaIntro", "WebsitePageTextMedia", "WebsitePageText", "WebsitePage", "WebsitePageContentReference", "SupportArticle", "SupportCategory", "SupportCountry", "SupportTopic", "Tutorial", "CardViews"].reduce(((e, t) => ({ ...e,
                        [t]: {
                            keyFields: re
                        }
                    })), {}),
                    CountryPageVariation: {
                        keyFields: ["country"],
                        merge: !0
                    },
                    CardFields: {
                        keyFields: ["type"]
                    },
                    ContentfulSysObject: {
                        keyFields: e => "s:" + te(e ? .id)
                    },
                    ContentfulFile: {
                        keyFields: e => {
                            const t = (e ? .url || "").split("/") ? .[4] || "";
                            return te(t)
                        }
                    },
                    ContentfulMediaFields: {
                        merge: !0
                    },
                    ContentfulMediaObject: {
                        keyFields: e => "m:" + te(e ? .sys ? .id)
                    },
                    PressArchivePageFields: {
                        merge: !0
                    },
                    PressReleaseCollection: {
                        merge: !0
                    },
                    PageLinkFields: {
                        merge: !0
                    },
                    CategoryNavigationFields: {
                        keyFields: ["categoryId"]
                    },
                    BlogPostCategoryFields: {
                        keyFields: ["categoryId"]
                    },
                    LegalDocumentFields: {
                        merge: !0
                    },
                    LegalDocSectionFields: {
                        merge: !0
                    },
                    BlogSettings: {
                        keyFields: re,
                        fields: {
                            fields: {
                                merge: !1
                            }
                        }
                    },
                    BlogSettingsFields: {
                        keyFields: []
                    },
                    BlogPostPageFields: {
                        keyFields: ["slug"]
                    },
                    MinimalBlogPostPageFields: {
                        keyFields: ["slug"]
                    },
                    SupportArticleFields: {
                        keyFields: ["slug"]
                    },
                    SupportTopicFields: {
                        keyFields: ["slug"],
                        fields: {
                            articles: {
                                merge: !1
                            }
                        }
                    },
                    SupportCategoryFields: {
                        keyFields: ["slug"]
                    },
                    CurrentMembership: {
                        keyFields: []
                    },
                    MembershipDetails: {
                        keyFields: []
                    },
                    MembershipDefinition: {
                        keyFields: ["name"]
                    },
                    Space: {
                        fields: {
                            balance: {
                                merge: (e, t) => ({ ...e,
                                    ...t
                                })
                            },
                            features: {
                                merge: (e, t) => ({ ...e,
                                    ...t
                                })
                            }
                        }
                    },
                    Spaces: {
                        keyFields: []
                    },
                    SpacesOverview: {
                        keyFields: []
                    },
                    QuickAction: {
                        keyFields: !1
                    },
                    DropdownAction: {
                        keyFields: !1
                    },
                    UserPreferences: {
                        keyFields: []
                    },
                    RecurringPayments: {
                        keyFields: []
                    },
                    TopupInformation: {
                        keyFields: []
                    },
                    SupportCountryFields: {
                        keyFields: []
                    },
                    CareersFields: {
                        keyFields: []
                    },
                    LinkItem: {
                        keyFields: re,
                        fields: {
                            fields: {
                                merge: !1
                            }
                        }
                    },
                    PressReleaseFields: {
                        merge: !0
                    },
                    Address: {
                        fields: {
                            country: {
                                merge: (e, t) => ({ ...e,
                                    ...t
                                })
                            }
                        }
                    },
                    CardSection: {
                        keyFields: []
                    },
                    MembershipFinalizePaymentPage: {
                        keyFields: []
                    }
                },
                ie = e => {
                    const {
                        types: t
                    } = e.__schema;
                    return t.reduce(((e, t) => t.possibleTypes ? { ...e,
                        [t.name]: t.possibleTypes.map((e => e.name))
                    } : e), {})
                },
                ae = e => new X.h({
                    possibleTypes: ie(window.__N26_INTROSPECTION__),
                    freezeResults: !0,
                    ...e.schemaConfig,
                    typePolicies: ne
                }).restore(window.__N26_APOLLO_STATE__),
                oe = e => {
                    const t = ae(e);
                    return new H.f({
                        cache: t,
                        connectToDevTools: !1,
                        link: Q({ ...e,
                            cache: t
                        }),
                        assumeImmutableResults: !0
                    })
                };
            var se = r(39422),
                le = r(36614);
            const de = function(e) {
                    var t = (0, n.useRef)();
                    return (0, n.useEffect)((function() {
                        t.current = e
                    }), [e]), t.current
                },
                ce = (0, le.o)("PreviousLocationContext"),
                ue = ({
                    children: e
                }) => {
                    const t = (0, se.TH)(),
                        r = de(t);
                    return (0, x.jsx)(ce.Provider, {
                        value: {
                            previousLocation: r
                        },
                        children: e
                    })
                };
            var he = r(7862),
                pe = r.n(he);
            const ve = (0, le.o)("ABContext", {});
            var Ce = r(39252),
                fe = r(49849),
                ge = r(96519);
            const me = (0, le.o)("MutationFormPayloadContext", {});
            var xe = r(63631),
                ye = r(81357),
                be = r(58422),
                Re = r(44684),
                Ee = r(3178),
                je = r(33083),
                _e = r(34959);
            const Ae = (0, le.o)("FeatureListContext", []),
                ke = (0, le.o)("FermiumFlagsContext", {}),
                Be = (0, le.o)("FeedSelectedAccountContext", {}),
                Le = ({
                    contextData: e,
                    children: t
                }) => {
                    const [r, i] = (0, n.useState)(e.requestCookies[h.t1]), a = {
                        guessedDeviceType: e.system.guessedDeviceType,
                        guessedBrowserName: e.system.guessedBrowserName,
                        guessedOSName: e.system.guessedOSName
                    }, o = {
                        isAuthenticated: e.isAuthenticated,
                        expiresAt: e.expiresAt
                    }, s = [
                        [ve, e.AB],
                        [fe.Z, e.csrfToken],
                        [me, e.mutationFormPayload],
                        [xe.Z, a],
                        [Ae, e.featureList],
                        [ke, e.fermiumFlags],
                        [ye.Z, e.region],
                        [ge.Z, e.preferences],
                        [be.Z, e.info || {}],
                        [Re.Z, e.statuses],
                        [Ce.Z, o],
                        [_e.Z, {
                            locale: e.locale
                        }],
                        [Be, {
                            selectedAccount: r,
                            setSelectedAccount: i
                        }]
                    ];
                    return (0, x.jsx)(Me, {
                        isExpectingJavaScript: e.isExpectingJavaScript,
                        children: (0, x.jsx)(Se, {
                            requestCookies: e.requestCookies,
                            children: s.reverse().reduce(((e, [t, r]) => (0, x.jsx)(t.Provider, {
                                value: r,
                                children: e
                            })), t)
                        })
                    })
                };

            function Me({
                isExpectingJavaScript: e,
                children: t
            }) {
                const r = Te({
                    skip: e
                });
                return (0, x.jsx)(je.Z.Provider, {
                    value: r,
                    children: t
                })
            }

            function Se({
                children: e,
                requestCookies: t
            }) {
                const r = Te();
                return (0, x.jsx)(Ee.Z.Provider, {
                    value: r ? null : t,
                    children: e
                })
            }

            function Te({
                skip: e = !1
            } = {}) {
                const [t, r] = (0, n.useState)(e);
                return (0, n.useEffect)((() => {
                    e || r(!0)
                }), [e]), t
            }
            Le.propTypes = {
                children: pe().node.isRequired,
                contextData: pe().object.isRequired
            };
            const De = Le,
                Oe = (0, R.Z)({
                    sensitive: !1,
                    crossDomain: !0
                });
            (0, i.d8)(h.C_, (new Date).getTimezoneOffset(), Oe);
            try {
                (0, i.d8)(h.cc, (new Intl.DateTimeFormat).resolvedOptions().timeZone, Oe)
            } catch (we) {}(async (e, t = {}) => {
                const {
                    origin: i
                } = new URL(window.location.href), h = "https://n26.com";
                if (void 0 === window.IntersectionObserver && await r.e(5886).then(r.t.bind(r, 15886, 23)), i !== h) return window.location.href = h;
                const C = (0, p.Z)({
                        plugins: g,
                        enhancers: m,
                        keyframePrefixes: [],
                        mediaQueryOrder: [v.sC, v.WC, v.W3, v.U$, v.sJ, v.OV, v.Qx, v.jd].map((e => e.replace("@media ", ""))),
                        filterClassName: e => !f.includes(e)
                    }),
                    R = (() => {
                        try {
                            const e = N();
                            return { ...window.__N26_CONTEXT__,
                                AB: e
                            }
                        } catch (V) {
                            return window.__N26_CONTEXT__
                        }
                    })(),
                    E = oe({
                        csrfToken: R.csrfToken,
                        platform: R.system.platformHeaders,
                        schemaConfig: t
                    }),
                    j = document.getElementById("root");
                console.log("%c _   _ ___   __   \n| \\ | |__ \\ / /   \n|  \\| |  ) / /_   \n| . ` | / /  _ \\ \n| |\\  |/ /| (_) | \n|_| \\_|____\\___/ ", "font-size: 14px; color: rgb(72, 172, 152)"), console.log(""), console.log("%cFound a security issue? security@n26.com", "font-size: 16px"), console.log("%cWe\u2019re hiring! https://n26.com/en/careers/ | recruiting@n26.com", "font-size: 16px"), console.log(""), console.log("%cDANGER!", "font-size:20px; color: rgb(215, 75, 75)"), console.log("This browser feature is only intended for IT professionals."), console.log("Do not paste code or text in here unless you know exactly what you are doing."), console.log("You might be endangering your N26 account security. "), window.__N26_REPORTED_ERRORS__ = new Set, window.addEventListener("error", (e => {
                    (0, b.Z)(e.error, R.csrfToken)
                }));
                const _ = e({
                    contextData: R
                });
                window && (0, u.q)(window), (0, d.TA)((() => (0, a.hydrate)((0, x.jsx)(n.StrictMode, {
                    children: (0, x.jsx)(s.e, {
                        client: E,
                        children: (0, x.jsx)(l.Z, {
                            renderer: C,
                            children: (0, x.jsx)(De, {
                                contextData: R,
                                children: (0, x.jsx)(c.B6, {
                                    children: (0, x.jsx)(o.VK, {
                                        children: (0, x.jsx)(ue, {
                                            children: (0, x.jsx)(y, {
                                                children: (0, x.jsx)(_, {})
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                }), j))), delete window.__N26_APOLLO_STATE__, delete window.__N26_INTROSPECTION__, delete window.__N26_CONTEXT__
            })(r(31623).Z)
        },
        75018: (e, t, r) => {
            "use strict";
            r.d(t, {
                CT: () => n,
                L1: () => i,
                qU: () => a
            });
            var n = "401 Unauthorized",
                i = "404 Not Found",
                a = {
                    title: "ui.generic_error.title",
                    translationKey: "ui.generic_error.description",
                    field: "generic"
                }
        },
        70736: (e, t, r) => {
            "use strict";
            r.d(t, {
                IS: () => i,
                ZO: () => n
            });
            var n = /\r?\n|\r/g,
                i = /\./g
        },
        20386: (e, t, r) => {
            "use strict";
            r.d(t, {
                jZ: () => n
            });
            var n = "seahorse.data_review"
        },
        82102: (e, t, r) => {
            "use strict";

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function i(e) {
                return function(e) {
                    if (Array.isArray(e)) return n(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            r.d(t, {
                Bd: () => p,
                Wy: () => u,
                dS: () => v,
                eR: () => C,
                xB: () => h
            });
            var a = ["onKeyUp", "onKeyDown", "onKeyPress"],
                o = ["onFocus", "onBlur"],
                s = ["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp"],
                l = ["onChange", "onInput", "onSubmit"],
                d = ["id", "className", "tabIndex", "lang", "aria-hidden", "data-testid", "draggable"],
                c = i(d).concat(["name", "disabled", "readOnly", "required", "pattern", "minLength", "maxLength", "aria-required", "aria-disabled", "aria-invalid", "aria-describedby", "aria-activedescendant", "aria-controls", "aria-labelledby", "aria-expanded", "value", "defaultValue", "placeholder", "data-autofocus", "role"], i(a), i(o), i(l)),
                u = i(d).concat(i(c), ["type", "autoComplete", "aria-autocomplete", "data-lpignore", "min", "max", "step", "list", "enterkeyhint"], i(a), i(o), i(l)),
                h = (i(d).concat(i(c), ["cols", "rows", "resize"], i(a), i(o), i(l)), i(d).concat(["name", "disabled", "readOnly", "required", "checked", "aria-required", "aria-invalid", "aria-disabled", "aria-describedby", "value", "data-autofocus"], i(a), i(o), i(l))),
                p = i(d).concat(["name", "disabled", "readOnly", "required", "aria-required", "aria-invalid", "aria-describedby", "value", "defaultValue", "data-autofocus", "title"], i(o), i(l)),
                v = i(d).concat(["href", "hrefLang", "rel", "role", "target", "autoFocus", "aria-label", "aria-current", "aria-describedby", "aria-selected", "to", "download", "title"], i(s), i(o)),
                C = i(d).concat(["type", "disabled", "autoFocus", "data-autofocus", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-describedby", "aria-grabbed", "aria-dropeffect", "aria-pressed", "aria-selected", "role", "title", "value", "name", "form"], i(o), i(s), i(a))
        },
        49806: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return function(t) {
                    return e.reduce((function(e, r) {
                        return r in t && (e[r] = t[r]), e
                    }), {})
                }
            }
        },
        13286: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => o
            });
            var n = r(39422),
                i = r(29901),
                a = r(92372);
            const o = function() {
                var e = (0, n.TH)();
                return (0, i.useMemo)((function() {
                    return (0, a.d)(e.search)
                }), [e.search])
            }
        },
        90563: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ji: () => n,
                iM: () => i,
                qw: () => a
            });
            var n = {
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: 1
                    }
                },
                i = {
                    from: {
                        transform: "translate(0, 100%)"
                    },
                    to: {
                        transform: "translate(0, 0)"
                    }
                },
                a = {
                    from: {
                        transform: "translate(0, -100%)"
                    },
                    to: {
                        transform: "translate(0, 0)"
                    }
                }
        },
        73912: (e, t, r) => {
            "use strict";
            r.d(t, {
                $_: () => s,
                JN: () => n,
                Mz: () => v,
                Qd: () => i,
                Rf: () => p,
                S$: () => o,
                Tx: () => f,
                Y_: () => u,
                ad: () => d,
                bT: () => c,
                bg: () => C,
                ei: () => h,
                fc: () => a,
                sX: () => l,
                wt: () => g,
                y7: () => m,
                yI: () => x
            });
            var n = "79.2em",
                i = "1920px",
                a = 1440,
                o = "calc(var(--responsive-base) * 1.1rem)",
                s = "calc(860px + ".concat(o, " * 2)"),
                l = 85,
                d = "3.3rem",
                c = "calc(var(--responsive-base) * 0.99rem)",
                u = 60,
                h = u + "px",
                p = 70,
                v = p + "px",
                C = "187px",
                f = "75px",
                g = "32px",
                m = "30px",
                x = {
                    spacing5xl: "4.4em",
                    spacing4xl: "3.85em",
                    spacing3xl: "3.3em",
                    spacing2xl: "2.75em",
                    spacingXl: "2.2em",
                    spacingL: "1.65em",
                    spacingM: "1.1em",
                    spacingS: "0.88em",
                    spacingXs: "0.825em",
                    spacing2xs: "0.55em",
                    spacing3xs: "0.275em",
                    spacing4xs: "0.22em",
                    spacing5xs: "0.165em",
                    spacing6xs: "0.11em"
                }
        },
        6576: (e, t, r) => {
            "use strict";
            r.d(t, {
                I8: () => i,
                Z2: () => n
            });
            const n = "/graphql",
                i = "https://boards.greenhouse.io/embed/job_board/js?for=n26"
        },
        32068: (e, t, r) => {
            "use strict";
            r.d(t, {
                C_: () => c,
                L6: () => o,
                MS: () => l,
                Oh: () => s,
                Q1: () => h,
                Vy: () => n,
                _e: () => i,
                cc: () => u,
                jZ: () => a,
                t1: () => d
            });
            const n = "num26locale",
                i = "n26.ab_data",
                a = "num26ReducedMotion",
                o = "num26DarkMode",
                s = "num26ABCMS",
                l = "n26.render_js_version",
                d = "n26.selected_account_activity_switch",
                c = "n26.timezone",
                u = "n26.timezone_identifier",
                h = "n26.ask_not_to_track"
        },
        26345: (e, t, r) => {
            "use strict";
            r.d(t, {
                BD: () => d,
                E7: () => o,
                Jb: () => u,
                Up: () => p,
                f_: () => v,
                fu: () => l,
                k$: () => s,
                pE: () => f,
                tR: () => h,
                wC: () => C
            });
            var n = r(73352),
                i = r.n(n),
                a = r(32068);
            const o = ["de", "en", "fr", "es", "it", "pt"],
                s = (o.filter((e => "pt" !== e)), "en"),
                l = "EU",
                d = {
                    en: "English",
                    de: "Deutsch",
                    es: "Espa\xf1ol",
                    fr: "Fran\xe7ais",
                    it: "Italiano",
                    pt: "Portugu\xeas"
                },
                c = ["blog", "legal-documents", "press-releases"],
                u = {
                    at: c,
                    br: [],
                    ch: c,
                    de: c,
                    es: c,
                    eu: c,
                    fr: c,
                    gb: ["legal-documents", "press-releases"],
                    it: c,
                    us: ["legal-documents"]
                },
                h = {
                    at: "signup",
                    br: "signup",
                    ch: "signup",
                    de: "signup",
                    es: "signup",
                    eu: "signup",
                    fr: "signup",
                    gb: "signup",
                    it: "waitingList",
                    us: "signup"
                },
                p = {
                    at: {
                        defaultLanguage: "de",
                        defaultName: "Austria",
                        nativeName: "\xd6sterreich",
                        canonical: "de",
                        currency: "\u20ac",
                        legalEntityName: "N26 GmbH",
                        iso3CountryCode: "AUT"
                    },
                    de: {
                        defaultLanguage: "de",
                        defaultName: "Germany",
                        nativeName: "Deutschland",
                        currency: "\u20ac",
                        legalEntityName: "N26 GmbH",
                        iso3CountryCode: "DEU"
                    },
                    es: {
                        defaultLanguage: "es",
                        defaultName: "Spain",
                        nativeName: "Espa\xf1a",
                        currency: "\u20ac",
                        legalEntityName: "N26 GmbH",
                        iso3CountryCode: "ESP"
                    },
                    eu: {
                        defaultLanguage: "en",
                        defaultName: "Europe",
                        nativeName: "Europe",
                        currency: "\u20ac",
                        legalEntityName: "N26 GmbH"
                    },
                    fr: {
                        defaultLanguage: "fr",
                        defaultName: "France",
                        nativeName: "France",
                        currency: "\u20ac",
                        legalEntityName: "N26 GmbH",
                        iso3CountryCode: "FRA"
                    },
                    it: {
                        defaultLanguage: "it",
                        defaultName: "Italy",
                        nativeName: "Italia",
                        currency: "\u20ac",
                        legalEntityName: "N26 GmbH",
                        iso3CountryCode: "ITA"
                    },
                    us: {
                        defaultLanguage: "en",
                        defaultName: "United States",
                        nativeName: "United States",
                        currency: "$",
                        legalEntityName: "N26 Inc.",
                        iso3CountryCode: "USA"
                    },
                    gb: {
                        defaultLanguage: "en",
                        defaultName: "United Kingdom",
                        nativeName: "United Kingdom",
                        currency: "\xa3",
                        legalEntityName: "N26 GmbH",
                        iso3CountryCode: "GBR"
                    },
                    ch: {
                        defaultLanguage: "de",
                        defaultName: "Switzerland",
                        nativeName: "Schweiz",
                        canonical: "de",
                        currency: "CHF",
                        legalEntityName: "N26 GmbH",
                        iso3CountryCode: "CHE"
                    },
                    br: {
                        defaultLanguage: "pt",
                        defaultName: "Brazil",
                        nativeName: "Brasil",
                        currency: "R$",
                        legalEntityName: "N26 SCD S.A.",
                        iso3CountryCode: "BRA"
                    }
                },
                v = {
                    page: {
                        en: "page",
                        de: "seite",
                        it: "pagina",
                        es: "pagina",
                        fr: "page"
                    },
                    category: {
                        en: "category",
                        de: "kategorie",
                        it: "categoria",
                        es: "categoria",
                        fr: "categorie"
                    },
                    archive: {
                        en: "all",
                        de: "alle",
                        it: "tutte",
                        es: "todas",
                        fr: "toute"
                    },
                    topic: {
                        en: "topic",
                        de: "thema",
                        it: "argomento",
                        es: "tema",
                        fr: "sujette"
                    },
                    press: {
                        en: "press",
                        de: "presse",
                        it: "stampa",
                        es: "prensa",
                        fr: "presse"
                    },
                    "press-releases": {
                        en: "press-releases",
                        de: "pressemeldungen",
                        it: "comunicati-stampa",
                        es: "comunicado-de-prensa",
                        fr: "communiques-de-presse"
                    },
                    "press-release": {
                        en: "press-release",
                        de: "pressemitteilung",
                        it: "comunicato-stampa",
                        es: "comunicados-de-prensa",
                        fr: "communique-de-presse"
                    }
                },
                C = (i()(p, ["ch", "br"]), a.Vy, ["en", "en-de", "en-fr", "en-it", "en-es", "en-gb", "en-us", "en-at", "en-ch", "en-br", "de-de", "fr-fr", "it-it", "es-es", "de-ch", "de-at", "pt-br"]),
                f = ["EU", "DE", "FR", "IT", "ES", "GB", "US", "AT", "CH", "BR"]
        },
        35748: (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => l
            });
            var n = r(15932),
                i = r(92372);

            function a(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), n.forEach((function(t) {
                        a(e, t, r[t])
                    }))
                }
                return e
            }
            const s = "http://_";

            function l({
                location: e = "",
                paths: t = [],
                query: r = {},
                hash: a = {}
            }) {
                const l = (0, n.K)(r) ? r : (0, i.d)(r.replace(/\?/g, ""));
                let d, c = !0;
                try {
                    d = new URL(e)
                } catch (p) {
                    d = new URL(s), d.pathname = e, c = !1
                }
                d.search = (0, i._)(o({}, (0, i.d)(d.search), l), {
                    addQueryPrefix: !0
                });
                const h = d.hash.replace(/#/g, "");
                return d.hash = (0, n.K)(a) ? (0, i._)(o({}, (0, i.d)(h), a), {
                    addQueryPrefix: !1
                }) : a.replace(/#/g, ""), d.pathname = t.length ? t.filter(Boolean).map(u).join("/") : d.pathname, c ? d : d.href.replace(s, "")
            }
            const d = /^\/*/,
                c = /\/*$/,
                u = (e, t) => 0 === t ? e.replace(c, "") : e.replace(d, "").replace(c, "")
        },
        31741: (e, t, r) => {
            "use strict";
            r.d(t, {
                x: () => a
            });
            var n = r(19873),
                i = r(42959);

            function a(e, t) {
                try {
                    const r = function(e) {
                            const t = (0, n.A5)();
                            return (0, n.Dt)() ? t[e].bind(t) : (0, n.gn)() ? t[e].postMessage.bind(t[e]) : void 0
                        }(e),
                        i = function(e) {
                            return void 0 !== e ? e : (0, n.gn)() ? {} : void 0
                        }(t);
                    void 0 !== i ? r(JSON.stringify(i)) : r()
                } catch (r) {
                    (0, i.jl)().error("NATIVE_CALLBACK_ERROR", r)
                }
            }
        },
        36614: (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => i
            });
            var n = r(29901);

            function i(e, t = null) {
                if ("string" != typeof e) throw new Error("You must pass a valid 'string' as the context name");
                const r = (0, n.createContext)(t);
                return r.displayName = e, r
            }
        },
        63911: (e, t, r) => {
            "use strict";

            function n() {
                return "undefined" == typeof document ? 0 : document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
            }
            r.d(t, {
                c: () => n
            })
        },
        12006: (e, t, r) => {
            "use strict";
            r.d(t, {
                y: () => i
            });
            var n = r(94649);

            function i(e = "") {
                return function(t) {
                    try {
                        Array.isArray(e) && (e = e.join(","));
                        const r = decodeURIComponent(e).toUpperCase();
                        return (0, n.H)(r).includes(t.toUpperCase())
                    } catch (r) {
                        return !1
                    }
                }
            }
        },
        24086: (e, t, r) => {
            "use strict";

            function n(e = "") {
                return "string" == typeof e && (!!e.startsWith("mailto") || (!!e.startsWith("tel") || (/^https?:\/\//.test(e) || function(e) {
                    return e.startsWith("number26://")
                }(e))))
            }
            r.d(t, {
                t: () => n
            })
        },
        15932: (e, t, r) => {
            "use strict";

            function n(e) {
                return "object" == typeof e && null !== e && !Array.isArray(e)
            }
            r.d(t, {
                K: () => n
            })
        },
        19873: (e, t, r) => {
            "use strict";
            r.d(t, {
                A5: () => o,
                Dt: () => i,
                Sp: () => s,
                gn: () => a
            });
            const n = "/webviews";

            function i() {
                return "undefined" != typeof window && void 0 !== window.Android
            }

            function a() {
                return "undefined" != typeof window && void 0 !== window.webkit
            }

            function o() {
                return i() ? window.Android : a() ? window.webkit.messageHandlers : void 0
            }

            function s(e) {
                return void 0 !== e ? Boolean(e.get("x-n26-app-version")) || e.userAgent.ua.toLowerCase().includes("number26") || [e.get("referer"), e.url].filter(Boolean).some((e => e.includes(n))) : "undefined" != typeof window && (i() || a() && (t = window.navigator.userAgent, /(?!.*Safari).*AppleWebKit/i.test(t)) || window.location.href.includes(n));
                var t
            }
        },
        16454: (e, t, r) => {
            "use strict";

            function n({
                supportedLanguages: e,
                defaultLang: t,
                slugKey: r,
                language: n
            }) {
                return e.includes(n) ? r[n] : r[t]
            }
            r.d(t, {
                l: () => n
            })
        },
        42959: (e, t, r) => {
            "use strict";
            r.d(t, {
                hu: () => k,
                jl: () => M,
                CY: () => L
            });
            var n = r(87942),
                i = r.n(n);

            function a(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), n.forEach((function(t) {
                        a(e, t, r[t])
                    }))
                }
                return e
            }

            function s(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                })), e
            }
            const l = ["Accept", "Cache-Control", "Connection", "Content-Length", "Content-Type", "Pragma", "Server", "User-Agent", "X-Content-Type-Options", "x-datadog-sampled", "x-datadog-sampling-priority", "X-Frame-Options", "X-XSS-Protection"];
            const d = class {
                transform(e) {
                    var t, r, n;
                    if (!e.data.isAxiosError) return e;
                    const i = o({}, e.data),
                        a = null === (t = i.request) || void 0 === t || null === (r = t.headers) || void 0 === r ? void 0 : r["x-request-id"];
                    i.response && (delete i.response.config, delete i.response.request, delete i.response.headers), delete i.request, delete i.toJSON, i.config && (delete i.config.adapter, delete i.config.transformRequest, delete i.config.transformResponse, delete i.config.validateStatus, delete i.config.xsrfCookieName, delete i.config.xsrfHeaderName, delete i.config.maxBodyLength, delete i.config.maxContentLength, delete i.config.timeout, i.config.headers && l.forEach((e => {
                        delete i.config.headers[e]
                    }))), a && (i.request = {
                        headers: {
                            "x-request-id": a
                        }
                    }), this.sanitizeConfig && i.config && delete i.config.data;
                    let d = e.config.level;
                    const c = (null === (n = i.response) || void 0 === n ? void 0 : n.status) || "";
                    return String(c).startsWith("5") && "error" !== d && (console.log("LOG_SEVERITY_INCREASE", {
                        log: i.logName,
                        level: d,
                        message: "Failing with HTTP 500; bumping log severity."
                    }), d = "error"), {
                        data: i,
                        config: s(o({}, e.config), {
                            level: d
                        })
                    }
                }
                constructor(e = {}) {
                    var t, r;
                    this.enabled = null === (t = e.enabled) || void 0 === t || t, this.sanitizeConfig = null === (r = e.sanitizeConfig) || void 0 === r || r
                }
            };
            const c = class {
                transform(e) {
                    const {
                        config: t,
                        data: r
                    } = e, {
                        level: n
                    } = t, i = (new Date).toISOString(), a = n.toUpperCase();
                    return {
                        data: `[${this.service}] [${i}] [${a}] [-] [] ${r}`,
                        config: e.config
                    }
                }
                constructor(e = {}) {
                    var t;
                    this.enabled = null === (t = e.enabled) || void 0 === t || t, this.service = e.service || ""
                }
            };
            var u = r(29064);

            function h(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const p = class {
                transform(e) {
                    const t = [this.flattenObject, this.serialiseValues, this.convertToPairs],
                        r = this.preventCircularReferences(e.data);
                    return {
                        data: i()(...t.reverse())(r),
                        config: e.config
                    }
                }
                constructor(e = {}) {
                    var t;
                    this.preventCircularReferences = e => {
                        try {
                            return JSON.parse((0, u.ZP)(e))
                        } catch (t) {
                            return e
                        }
                    }, this.flattenObject = e => Object.keys(e).reduce(((t, r) => {
                        const n = e[r];
                        if ("object" == typeof n && null !== n) {
                            const e = this.prefixKeys(r + "_");
                            return function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    })))), n.forEach((function(t) {
                                        h(e, t, r[t])
                                    }))
                                }
                                return e
                            }({}, t, this.flattenObject(e(n)))
                        }
                        return t[r.replace(/-/g, "_")] = n, t
                    }), {}), this.prefixKeys = e => t => Object.keys(t).reduce(((r, n) => (r[e + n] = t[n], r)), {}), this.serialiseValues = e => Object.keys(e).reduce(((t, r) => (t[r] = (0, u.ZP)(e[r]), t)), {}), this.convertToPairs = e => Object.keys(e).map((t => t + "=" + e[t])).join(", "), this.enabled = null === (t = e.enabled) || void 0 === t || t
                }
            };

            function v(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const C = ["cert", "fullName", "password", "passwordPlain", "pin", "oldPassword", "newPassword", "transactionPin", "newTransactionPin", "newTransactionPinRepeat", "iban", "partnerIban", "bic", "partnerBic", "cardToken", "zipCode", "publicToken", "email", "phoneNumber", "emailOrPhone", "partnerName", "partnerAccountNumber", "partnerName", "street", "number", "idNumber", "taxNumber", "newPinConfirm", "newPin", "newPinRepeat", "idExpiryDateMonth", "idExpiryDateYear", "firstName", "lastName", "documentNumber", "dob", "surname", "birthDate", "mobilePhoneNumber", "to", "stripe-signature", "birthDateDay", "birthDateMonth", "birthDateYear", "socialSecurityNumber", "middleName", "shippingAddress_street", "shippingAddress_number", "legalAddress_number", "legalAddress_street", "taxNumbers", "issue_incidentLocation", "issue_incidentDescription", "referenceText"];

            function f(e) {
                const t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        })))), n.forEach((function(t) {
                            v(e, t, r[t])
                        }))
                    }
                    return e
                }({}, e);
                return C.forEach((e => {
                    e in t && (t[e] = "UNSAFE_FIELD_OBFUSCATED")
                })), t
            }
            var g = r(73656);

            function m(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function x(e) {
                const t = e.map((e => ({
                        displayName: e,
                        name: g.env[e]
                    }))),
                    r = ["Authorization", "x-vault-token", "encrypted-pin", "encrypted-secret", "AccessKeyId", "SecretAccessKey", ...e.map((e => g.env[e]))];
                return function(e) {
                    const n = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            })))), n.forEach((function(t) {
                                m(e, t, r[t])
                            }))
                        }
                        return e
                    }({}, e);
                    return r.forEach((e => {
                        e in n && (n[e] = "UNSAFE_HEADER_VALUE_OBFUSCATED")
                    })), t.forEach((({
                        displayName: e,
                        name: t
                    }) => {
                        var r;
                        t in n && (n[(r = e, `UNSAFE_${r}_OBFUSCATED`)] = n[t], delete n[t])
                    })), n
                }
            }
            var y = r(15932);
            const b = class {
                obfuscate(e, t = 0) {
                    const r = this.sanitize(e);
                    return t++ >= this.maximumDepth ? r : Object.keys(r).reduce(((e, n) => (e[n] = (0, y.K)(r[n]) ? this.obfuscate(r[n], t + 1) : r[n], e)), {})
                }
                transform(e) {
                    return {
                        data: this.obfuscate(e.data),
                        config: e.config
                    }
                }
                constructor(e = {}) {
                    var t;
                    this.enabled = null === (t = e.enabled) || void 0 === t || t, this.maximumDepth = e.depth || 5, this.sanitize = i()(f, x(e.customHeaders || []))
                }
            };

            function R(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), n.forEach((function(t) {
                        R(e, t, r[t])
                    }))
                }
                return e
            }

            function j(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                })), e
            }
            const _ = {
                enabled: !0,
                verbosity: "debug",
                plugins: [{
                    enabled: !0,
                    transform: e => e
                }]
            };
            class A {
                _prepare(e, t, r) {
                    return r instanceof Error && (r = j(E({}, r), {
                        message: r.message,
                        trace: (r.stack || "").split(/\n\s+/g)
                    })), this.formatter({
                        data: E({
                            logName: t
                        }, r),
                        config: {
                            level: e
                        }
                    })
                }
                constructor(e) {
                    this._send = e => (t, r) => {
                        if (this.options.enabled && A.SEVERITY_LEVELS.indexOf(this.options.verbosity) <= A.SEVERITY_LEVELS.indexOf(e)) {
                            const {
                                data: n
                            } = this._prepare(e, t, r);
                            console["debug" === e ? "log" : e](n)
                        }
                    }, this.debug = (e, t = {}) => {
                        this._send("debug")(e, t)
                    }, this.info = (e, t = {}) => {
                        this._send("info")(e, t)
                    }, this.warn = (e, t = {}) => {
                        this._send("warn")(e, t)
                    }, this.error = (e, t = {}) => {
                        this._send("error")(e, t)
                    }, this.options = E({}, _, e);
                    const t = this.options.plugins.filter((e => e.enabled)).map((e => e.transform.bind(e)));
                    this.formatter = i()(...t)
                }
            }

            function k(e) {
                const t = [new A.plugins.AxiosCleaner({
                    enabled: !0,
                    sanitizeConfig: e.sanitizeConfig
                }), new A.plugins.Obfuscater({
                    enabled: e.enableObfuscation,
                    depth: 5,
                    customHeaders: e.customHeaders
                }), new A.plugins.Serialiser({
                    enabled: e.enableSerializer
                }), new A.plugins.Formatter({
                    enabled: e.enableFormatter,
                    service: "n26/" + e.serviceName
                })].reverse();
                return new A({
                    enabled: e.enableLogger,
                    verbosity: e.verbosity,
                    plugins: t
                })
            }
            A.SEVERITY_LEVELS = ["debug", "info", "warn", "error"], A.plugins = {
                AxiosCleaner: d,
                Formatter: c,
                Serialiser: p,
                Obfuscater: b
            };
            let B = null;

            function L(e) {
                return null === B && (B = void 0 === e ? k({
                    serviceName: "@goldfish/core",
                    enableLogger: !0,
                    verbosity: "info",
                    enableObfuscation: !1,
                    enableFormatter: !1,
                    enableSerializer: !1,
                    sanitizeConfig: !1,
                    customHeaders: []
                }) : e instanceof A ? e : k(e)), B
            }

            function M() {
                return null === B ? L() : B
            }
        },
        92372: (e, t, r) => {
            "use strict";
            r.d(t, {
                _: () => s,
                d: () => o
            });
            var n = r(15932);
            var i = r(42959);

            function a(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function o(e) {
                const t = (0, i.jl)();
                try {
                    const t = new URLSearchParams(e);
                    return Object.fromEntries(t.entries())
                } catch (r) {
                    t.error("QUERY_STRING_PARSE", r)
                }
            }

            function s(e, t = {}) {
                const r = (0, i.jl)(),
                    o = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            })))), n.forEach((function(t) {
                                a(e, t, r[t])
                            }))
                        }
                        return e
                    }({}, {
                        addQueryPrefix: !1
                    }, t);
                try {
                    const t = (0, n.K)(e) ? function(e) {
                            const t = {};
                            for (const [r, n] of Object.entries(e)) null != n && 0 !== n.length && ("number" == typeof n && isNaN(n) || (t[r] = n));
                            return t
                        }(e) : e,
                        r = new URLSearchParams(t);
                    r.sort();
                    const i = r.toString();
                    return (o.addQueryPrefix && i ? "?" : "") + i
                } catch (s) {
                    r.error("QUERY_STRING_STRINGIFY", s)
                }
            }
        },
        52351: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => i
            });
            const n = /({{([^}]+)}})/;

            function i(e, t = {}) {
                const r = e.match(n);
                if (null === r) return [e];
                const a = r[1],
                    o = r[2];
                if (!a || !o) return [e];
                const s = e.slice(0, r.index),
                    l = i(e.slice(r.index + a.length), t);
                return [s, t[o.trim()], ...l].filter((e => Boolean(e) || 0 === e))
            }
        },
        94649: (e, t, r) => {
            "use strict";

            function n(e = "") {
                return Array.isArray(e) ? e.filter(Boolean) : "string" == typeof e ? e.split(/\s*,\s*/g).filter(Boolean) : []
            }
            r.d(t, {
                H: () => n
            })
        },
        33059: (e, t, r) => {
            "use strict";
            r.d(t, {
                s: () => s
            });
            var n = r(29901),
                i = r(84534),
                a = r(52351);
            const o = /[\xa9\xae]/g;

            function s(e) {
                return (0, i.q)(e).filter(Boolean).map((e => {
                    if ("string" != typeof e || !o.test(e)) return e;
                    const t = {},
                        r = e.replace(o, function(e) {
                            return (t, r) => {
                                const i = t.trim() + r;
                                return e(i, n.createElement("sup", {
                                    key: i
                                }, t)), `{{${i}}}`
                            }
                        }(((e, r) => {
                            t[e] = r
                        })));
                    return (0, a.B)(r, t)
                }))
            }
        },
        84534: (e, t, r) => {
            "use strict";

            function n(e) {
                return void 0 === e ? [] : Array.isArray(e) ? e : [e]
            }
            r.d(t, {
                q: () => n
            })
        }
    },
    e => {
        e.O(0, [5150, 2584, 8917], (() => {
            return t = 64507, e(e.s = t);
            var t
        }));
        e.O()
    }
]);