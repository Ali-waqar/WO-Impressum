"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1741], {
        17254: (t, e, n) => {
            n.d(e, {
                Z: () => W
            });
            var o = n(29901),
                r = n(33920),
                a = n(7862),
                i = n.n(a),
                l = n(92285),
                s = n(73601),
                c = n(53623),
                d = n(86929),
                u = n(84079),
                g = n(90563);
            const p = {
                    container: {
                        display: "flex",
                        bottom: 0,
                        left: 0,
                        position: "fixed",
                        right: 0,
                        top: 0,
                        zIndex: u.QA,
                        '[aria-hidden="true"]': {
                            display: "none"
                        }
                    },
                    overlay: {
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        bottom: 0,
                        left: 0,
                        position: "fixed",
                        right: 0,
                        top: 0
                    },
                    dialog: {
                        margin: "auto",
                        padding: "var(--spacing-m)",
                        backgroundColor: "var(--background-default)",
                        color: "var(--typography-default)",
                        maxHeight: "calc(100vh - var(--spacing-xl))",
                        maxWidth: "calc(100% - var(--spacing-xl))",
                        overflow: "auto",
                        position: "relative",
                        width: "20em",
                        minHeight: "20em",
                        zIndex: u.FP,
                        boxShadow: u.oZ,
                        borderRadius: "var(--border-radius-l)",
                        display: "flex",
                        flexDirection: "column",
                        animationName: g.Ji,
                        animationDuration: "200ms",
                        animationTimingFunction: "ease-out"
                    },
                    title: { ...d.jy
                    },
                    closeButton: {
                        display: "none"
                    }
                },
                m = (t, e) => {
                    switch (t) {
                        case "top":
                            return `translateY(${e})`;
                        case "bottom":
                            return `translateY(-${e})`;
                        case "left":
                            return `translateX(-${e})`;
                        case "right":
                            return `translateX(${e})`;
                        default:
                            return
                    }
                },
                f = { ...p.overlay,
                    backgroundColor: "rgba(0, 0, 0, 0)"
                },
                h = { ...p.inner
                },
                b = { ...p.title,
                    ...d.jy
                },
                v = { ...d.Ph,
                    color: "var(--typography-default)",
                    position: "absolute",
                    top: "var(--spacing-xs)",
                    right: "var(--spacing-xs)",
                    fontSize: "var(--font-size-3-xs)",
                    lineHeight: 0,
                    padding: "var(--spacing-2-xs)",
                    borderRadius: "var(--border-radius-xs)",
                    transitionProperty: "box-shadow",
                    transitionDuration: "250ms",
                    ":focus": {
                        outline: "none",
                        boxShadow: "0 0 0 3px var(--primary-focus)"
                    },
                    ":hover": {
                        cursor: "pointer",
                        boxShadow: "0 0 0 3px var(--primary-focus)"
                    }
                },
                x = ({
                    direction: t,
                    animationOffset: e = "var(--spacing-2-xs)"
                }) => ({
                    from: {
                        opacity: 0,
                        transform: m(t, e)
                    },
                    "50%": {
                        opacity: 1
                    },
                    to: {
                        transform: "translate(0, 0)"
                    }
                }),
                y = ({
                    direction: t,
                    animationOffset: e = "var(--spacing-2-xs)"
                }) => ({
                    from: {
                        transform: "translate(0, 0)"
                    },
                    "75%": {
                        opacity: 1
                    },
                    to: {
                        opacity: 0,
                        transform: m(t, e)
                    }
                }),
                w = c.Z.create({
                    container: t => ({
                        display: t.isExited ? "none" : "flex",
                        bottom: 0,
                        left: 0,
                        position: "fixed",
                        right: 0,
                        top: 0,
                        zIndex: u.nh,
                        animationDuration: `${t.transitionDuration}ms`,
                        animationFillMode: "both",
                        animationTimingFunction: "ease-in",
                        animationName: t.isEntering ? x(t) : t.isExiting ? y(t) : void 0
                    }),
                    overlay: f,
                    dialog: ({
                        dialogStyles: t,
                        backgroundColor: e = "var(--background-default)"
                    }) => ({
                        backgroundColor: e,
                        borderRadius: "var(--border-radius-m)",
                        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
                        position: "fixed",
                        width: "auto",
                        zIndex: u.FP,
                        padding: "var(--spacing-xs) var(--spacing-m)",
                        ...t
                    }),
                    inner: h,
                    title: b,
                    closeButton: v
                }),
                $ = c.Z.create(p),
                Z = {
                    bottom: 0,
                    left: 0,
                    position: "fixed",
                    right: 0,
                    top: 0,
                    zIndex: u.QA,
                    animationName: {
                        from: {
                            transform: "translateY(100%)"
                        },
                        to: {
                            transform: "translateY(0)"
                        }
                    },
                    animationDuration: "450ms",
                    '[aria-hidden="true"]': {
                        display: "none"
                    }
                },
                j = { ...d.jy
                },
                k = c.Z.create({
                    container: Z,
                    overlay: {
                        display: "none"
                    },
                    dialog: {
                        backgroundColor: "rgb(255, 255, 255)",
                        overflow: "auto",
                        position: "relative",
                        width: "100%",
                        height: "100%"
                    },
                    title: j,
                    closeButton: {
                        display: "none"
                    }
                }),
                C = {
                    animationDuration: "450ms",
                    animationName: {
                        from: {
                            opacity: 0,
                            transform: "scale(1.2)"
                        },
                        to: {
                            opacity: 1,
                            transform: "scale(1)"
                        }
                    },
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    bottom: 0,
                    height: "100vh",
                    left: 0,
                    position: "fixed",
                    right: 0,
                    top: 0,
                    width: "100vw",
                    zIndex: u.QA,
                    '[aria-hidden="true"]': {
                        display: "none"
                    }
                },
                S = {
                    backgroundColor: "rgb(0, 0, 0)",
                    bottom: 0,
                    height: "450px",
                    left: 0,
                    margin: "0 auto",
                    maxWidth: "800px",
                    overflow: "auto",
                    position: "fixed",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)"
                },
                D = { ...d.jy
                },
                E = { ...d.Ph,
                    color: "rgb(255, 255, 255)",
                    fontSize: "var(--font-size-4-xl)",
                    height: "1.2em",
                    lineHeight: "1.2em",
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "1.2em",
                    backgroundColor: "var(--iconography-default)",
                    zIndex: u.QA
                },
                O = c.Z.create({
                    container: C,
                    overlay: {
                        display: "none"
                    },
                    dialog: S,
                    title: D,
                    closeButton: E
                }),
                R = {
                    from: {
                        opacity: 0,
                        transform: "scale(1.1)"
                    },
                    "80%": {
                        opacity: 1
                    },
                    to: {
                        transform: "none"
                    }
                },
                B = {
                    margin: "auto",
                    padding: "var(--spacing-m)",
                    backgroundColor: "var(--background-default)",
                    borderRadius: "var(--border-radius-l)",
                    position: "relative",
                    width: "500px",
                    zIndex: u.FP
                },
                L = { ...d.jy
                },
                N = { ...d.Ph,
                    padding: "var(--spacing-2-xs)",
                    color: "var(--typography-interactive-default)",
                    fontSize: "var(--font-size-4-xl)",
                    lineHeight: "1.2em",
                    position: "absolute",
                    right: 0,
                    top: 0,
                    ":focus": {
                        outline: "none",
                        boxShadow: "inset 0 0 0 3px var(--primary-focus)",
                        borderRadius: "var(--border-radius-m)"
                    },
                    [u.U$]: {
                        position: "fixed",
                        top: "var(--spacing-2-xs)",
                        right: "var(--spacing-2-xs)"
                    }
                },
                z = c.Z.create({
                    container: t => ({
                        display: "flex",
                        bottom: 0,
                        left: 0,
                        position: "fixed",
                        right: 0,
                        top: 0,
                        zIndex: u.QA,
                        animationName: R,
                        animationDuration: "650ms",
                        animationTimingFunction: "ease-out",
                        '[aria-hidden="true"]': {
                            display: "none"
                        }
                    }),
                    overlay: {
                        backgroundColor: "rgba(255, 255, 255, .97)",
                        bottom: 0,
                        left: 0,
                        position: "fixed",
                        right: 0,
                        top: 0
                    },
                    dialog: B,
                    title: L,
                    closeButton: N
                }),
                T = { ...d.jy
                },
                A = { ...d.Ph,
                    padding: "1.35em",
                    color: "var(--typography-default)",
                    fontSize: "65%",
                    lineHeight: 1,
                    position: "absolute",
                    right: 0,
                    top: 0,
                    borderRadius: "var(--border-radius-m)",
                    transitionProperty: "box-shadow",
                    transitionDuration: "250ms",
                    ":focus": {
                        outline: "none",
                        boxShadow: "inset 0 0 0 3px var(--primary-focus)"
                    },
                    ":hover": {
                        cursor: "pointer",
                        boxShadow: "inset 0 0 0 3px var(--primary-focus)"
                    },
                    [u.sJ]: {
                        display: "none"
                    }
                },
                I = c.Z.create({
                    container: t => ({
                        bottom: 0,
                        left: 0,
                        right: 0,
                        position: "fixed",
                        zIndex: u.QA,
                        display: t.isExited ? "none" : void 0,
                        [u.sJ]: {
                            top: "var(--spacing-2-xl)",
                            bottom: "auto"
                        }
                    }),
                    overlay: t => ({
                        backgroundColor: "var(--distinct-overlay)",
                        bottom: 0,
                        left: 0,
                        position: "fixed",
                        right: 0,
                        top: 0,
                        animationDuration: `${t.transitionDuration}ms`,
                        animationFillMode: "forwards",
                        animationName: t.isEntering || t.isExiting ? g.Ji : void 0,
                        animationTimingFunction: t.isEntering ? "ease-in" : t.isExiting ? "ease-out" : void 0,
                        animationDirection: t.isExiting ? "reverse" : void 0
                    }),
                    dialog: t => ({
                        margin: "0 auto",
                        paddingTop: "1.35em",
                        paddingBottom: "0.9em",
                        backgroundColor: "var(--background-default)",
                        width: "100%",
                        minHeight: "14em",
                        position: "relative",
                        zIndex: u.FP,
                        display: "flex",
                        borderTopLeftRadius: "var(--border-radius-l)",
                        borderTopRightRadius: "var(--border-radius-l)",
                        boxShadow: u.oZ,
                        animationDuration: `${t.transitionDuration}ms`,
                        animationFillMode: "forwards",
                        [u.U$]: {
                            animationName: t.isEntering || t.isExiting ? g.iM : void 0,
                            animationTimingFunction: t.isEntering ? "ease-in" : t.isExiting ? "ease-out" : void 0,
                            animationDirection: t.isExiting ? "reverse" : void 0
                        },
                        [u.sJ]: {
                            padding: "0 0.9em 0 1.35em",
                            maxWidth: u.$_,
                            minHeight: "6.25em",
                            height: "auto",
                            borderBottomLeftRadius: "var(--border-radius-l)",
                            borderBottomRightRadius: "var(--border-radius-l)",
                            animationName: t.isEntering || t.isExiting ? g.Ji : void 0,
                            animationTimingFunction: t.isEntering ? "ease-in" : t.isExiting ? "ease-out" : void 0,
                            animationDirection: t.isExiting ? "reverse" : void 0
                        }
                    }),
                    title: T,
                    closeButton: A
                });
            var F = n(61250);
            const P = ["container", "overlay", "dialog", "title", "closeButton"],
                H = t => {
                    const e = (0, l.Z)({ ...t,
                            defaultTheme: "default",
                            themes: U
                        }),
                        n = (0, s.Z)();
                    (0, o.useEffect)((() => () => {
                        document.documentElement.style.overflowY = ""
                    }), []);
                    const a = P.reduce(((t, n) => (t[n] = e(n), t)), {});
                    return (0, F.jsx)(r.cV, { ...t,
                        closeButtonLabel: n("ui.close"),
                        dialogRef: e => {
                            e && e.on("show", (() => {
                                document.documentElement.style.overflowY = "hidden"
                            })).on("hide", (() => {
                                document.documentElement.style.overflowY = ""
                            })), t.dialogRef(e)
                        },
                        dialogRoot: "#dialog-root",
                        classNames: a,
                        children: t.children
                    })
                },
                U = {
                    default: $,
                    dropdown: w,
                    viewer: k,
                    player: O,
                    light: z,
                    action: I
                };
            H.propTypes = {
                id: i().string.isRequired,
                title: i().string.isRequired,
                children: i().node.isRequired,
                dialogRef: i().func.isRequired,
                titleId: i().string,
                closeButtonContent: i().node,
                role: i().oneOf(["dialog", "alertdialog"]),
                closeButtonPosition: i().oneOf(["first", "last", "none"]),
                themeOverrides: i().shape({
                    container: i().oneOfType([i().object, i().func]),
                    overlay: i().oneOfType([i().object, i().func]),
                    dialog: i().oneOfType([i().object, i().func]),
                    title: i().oneOfType([i().object, i().func]),
                    closeButton: i().oneOfType([i().object, i().func])
                }),
                themeProps: i().object,
                themeName: i().oneOf(["default", "dropdown", "viewer", "player", "light", "action"])
            };
            const W = H
        },
        60104: (t, e, n) => {
            n.d(e, {
                Z: () => a
            });
            var o = n(55851);
            const r = n(53623).Z.create({
                    base: {
                        border: 0,
                        margin: "var(--spacing-xl) auto",
                        backgroundColor: "var(--deprecated-gray)",
                        width: "6.75em",
                        height: "1px"
                    }
                }),
                a = (0, o.Z)(r.base, "hr")
        },
        76906: (t, e, n) => {
            n.d(e, {
                Z: () => a
            });
            var o = n(29901),
                r = n(34959);
            const a = () => {
                const {
                    translations: t = {}
                } = (0, o.useContext)(r.Z);
                return (0, o.useCallback)((e => Boolean(t[e])), [t])
            }
        },
        96931: (t, e, n) => {
            n.d(e, {
                Z: () => i
            });
            var o = n(7862),
                r = n.n(o);
            n(71794), n(56759), n(26975), n(78875), n(13339);
            n(48061);
            n(62278), n(94070), n(54265);
            n(56508), n(61250);
            const a = t => null;
            a.propTypes = {
                type: r().string.isRequired,
                data: r().oneOfType([r().array, r().object])
            };
            const i = a
        },
        21045: (t, e, n) => {
            n.d(e, {
                Z: () => et
            });
            var o = n(49335),
                r = n.n(o),
                a = n(29901),
                i = n(33059),
                l = n(71934);
            var s = n(56759),
                c = n.n(s),
                d = n(26975),
                u = n.n(d),
                g = n(98231),
                p = n.n(g),
                m = n(44214),
                f = n(73601),
                h = n(7721),
                b = n(52351);
            const v = (t, e, n) => {
                    const o = (0, h.J)(t),
                        r = Object.fromEntries(o.map((t => [t, e(t.trim())])));
                    return (0, b.B)(t, {
                        replacements: r,
                        ...n
                    }).join("")
                },
                x = { ...m,
                    protocols: { ...m.protocols,
                        href: [...m.protocols.href, "tel"]
                    }
                },
                y = t => {
                    const e = (0, f.Z)();
                    return (0, a.useMemo)((() => ((t, e, n) => {
                        if (!t) return null;
                        const o = c()().use(u()).use(p(), e).processSync(n ? v(t, e.localiseString, n) : t);
                        return o.result || o.contents
                    })(t.source, {
                        remarkReactComponents: t.renderers,
                        sanitize: x,
                        localiseString: e
                    }, t.campaignVariables)), [t.source, t.renderers, e, t.campaignVariables])
                };
            y.defaultProps = {
                renderers: {}
            };
            const w = y;
            var $ = n(13286),
                Z = n(55443),
                j = n(53623);
            const k = "1px solid var(--divider-default)",
                C = {
                    border: k,
                    margin: "var(--spacing-xl) 0",
                    borderRadius: "var(--border-radius-xs)",
                    overflow: "hidden",
                    borderSpacing: 0,
                    minWidth: "100%",
                    tableLayout: "fixed"
                },
                S = {
                    borderLeft: k,
                    padding: "var(--spacing-m)",
                    backgroundColor: "var(--background-container-light)",
                    fontWeight: 500,
                    textAlign: "left",
                    verticalAlign: "top",
                    ":first-of-type": {
                        borderLeftWidth: 0
                    }
                },
                D = {
                    borderTop: k,
                    borderLeft: k,
                    padding: "var(--spacing-m)",
                    ":first-child": {
                        borderLeftWidth: 0
                    }
                },
                E = j.Z.create({
                    table: C,
                    tableHead: S,
                    tableRow: {
                        verticalAlign: "top"
                    },
                    tableData: D
                });
            var O = n(61250);
            const R = (0, Z.Z)(E.table, "table"),
                B = t => (0, O.jsx)(R, {
                    extend: t.extend,
                    children: t.children
                }),
                L = (0, Z.Z)(E.tableHead, "th"),
                N = (0, Z.Z)(E.tableRow, "tr"),
                z = (0, Z.Z)(E.tableData, "td");
            var T = n(59144),
                A = n(19001),
                I = n(60104),
                F = n(39101),
                P = n(55851);
            const H = t => (0, O.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 63.67 54.33",
                ...t,
                children: (0, O.jsx)("path", {
                    d: "M7.59 2.28l24.31-.36s-2.32 16.62-3.22 22.34S23 47 5.63 53l-3.75-9.44s14.3-6.43 13-17.52L4 26.23zm29.25.13L61.15 2s-2.32 16.62-3.22 22.34-5.72 22.7-23.06 28.78l-3.75-9.47s14.3-6.43 13-17.52l-10.9.18z"
                })
            });
            var U = n(2040),
                W = n(84079);
            const _ = {
                    border: "2px solid var(--divider-default)",
                    margin: "var(--spacing-xl) 0",
                    padding: "var(--spacing-m)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    [W.WC]: {
                        border: 0,
                        margin: "var(--spacing-xl)",
                        padding: 0,
                        alignItems: "flex-start",
                        flexDirection: "row"
                    }
                },
                M = {
                    marginBottom: "var(--spacing-m)",
                    [W.WC]: {
                        marginBottom: 0,
                        marginRight: "var(--spacing-xl)"
                    }
                },
                q = {
                    margin: 0,
                    "> :first-child": {
                        marginTop: 0
                    },
                    "> :last-child": {
                        marginBottom: 0
                    },
                    [W.WC]: {
                        "> p": {
                            borderLeft: "3px solid rgba(72, 172, 152, 0.22)",
                            paddingLeft: "var(--spacing-m)"
                        }
                    }
                },
                Q = j.Z.create({
                    base: _,
                    iconWrapper: M,
                    icon: {
                        fill: "var(--background-container-teal)",
                        fontSize: "330%"
                    },
                    block: q
                }),
                Y = (0, P.Z)(Q.base, "div"),
                J = (0, P.Z)(Q.iconWrapper, "div"),
                V = (0, P.Z)(Q.block, "blockquote"),
                X = t => (0, O.jsxs)(Y, {
                    children: [(0, O.jsx)(J, {
                        children: (0, O.jsx)(U.Z, {
                            extend: Q.icon,
                            icon: H
                        })
                    }), (0, O.jsx)(V, {
                        children: t.children
                    })]
                }),
                K = j.Z.create({
                    paragraph: {
                        ":last-child": {
                            marginBottom: 0
                        }
                    }
                }),
                G = ({
                    validatedCampaignCode: t
                }) => ({
                    a: t => {
                        const e = t.href.replace("http://www.n26.com", "https://n26.com").replace("http://n26.com", "https://n26.com").replace("http://support.n26.com", "https://support.n26.com").replace("http://get.n26.com", "https://get.n26.com").replace("http://app.n26.com", "https://app.n26.com");
                        return (0, O.jsx)(F.Z.Link, {
                            href: e,
                            children: (0, i.s)(t.children)
                        })
                    },
                    p: e => (0, O.jsx)(l.Z, {
                        campaignVariables: t,
                        ctaDataAttributes: e.ctaDataAttributes,
                        extend: K.paragraph,
                        pageCtaLink: e.pageCtaLink,
                        trackingData: e.trackingData,
                        children: (0, i.s)(e.children)
                    }),
                    h1: t => t.children ? (0, O.jsx)(T.Z.L, {
                        as: "h1",
                        children: t.children
                    }) : null,
                    h2: t => t.children ? (0, O.jsx)(T.Z.L, {
                        children: t.children
                    }) : null,
                    h3: t => t.children ? (0, O.jsx)(T.Z.M, {
                        children: t.children
                    }) : null,
                    h4: t => t.children ? (0, O.jsx)(T.Z.S, {
                        children: t.children
                    }) : null,
                    h5: t => t.children ? (0, O.jsx)(T.Z.XS, {
                        children: t.children
                    }) : null,
                    h6: t => t.children ? (0, O.jsx)(T.Z.XS, {
                        as: "h6",
                        children: t.children
                    }) : null,
                    table: B,
                    th: L,
                    tr: N,
                    td: z,
                    hr: I.Z,
                    blockquote: X,
                    li: A.HC,
                    ul: A.QI,
                    ol: A.GS
                }),
                tt = t => {
                    const e = (0, $.Z)(),
                        n = (0, a.useMemo)((() => {
                            return t = r()(e, ["cve", "cvn"]), n = 8, o = "STC", Object.entries(t).reduce(((t, e) => {
                                const [r, a] = e;
                                return a.length === n && a.startsWith(o) ? { ...t,
                                    [r]: a
                                } : t
                            }), {});
                            var t, n, o
                        }), [e]),
                        o = (0, a.useMemo)((() => ({ ...G({
                                validatedCampaignCode: n
                            }),
                            ...t.renderers
                        })), [t.renderers, n]);
                    return (0, O.jsx)(w, {
                        source: t.source,
                        campaignVariables: n,
                        renderers: o
                    })
                };
            tt.defaultProps = {
                renderers: {}
            };
            const et = tt
        },
        94070: (t, e, n) => {
            n.d(e, {
                FM: () => h,
                IF: () => w,
                N0: () => x,
                PI: () => y,
                QG: () => u,
                Ub: () => l,
                VK: () => $,
                dx: () => b,
                j: () => v,
                xn: () => d,
                xq: () => f
            });
            var o = n(39422),
                r = n(54265);

            function a(t) {
                return `/${t.language}-${t.country}/blog`
            }

            function i(t) {
                return (0, r.l)(t, "archive")
            }

            function l(t) {
                return `blog/${i(t)}`
            }

            function s(t, e) {
                return [(0, r.l)(t, "category"), e].filter(Boolean).join("/")
            }

            function c(t, e) {
                return [(0, r.l)(t, "topic"), e].filter(Boolean).join("/")
            }

            function d({
                country: t,
                language: e
            }) {
                return `/${e}-${t}/blog/${i(e)}`
            }

            function u(t) {
                return `${a(t)}/${s(t.language)}/${t.categorySlug}`
            }

            function g(t) {
                return `${a(t)}/${c(t.language)}/${t.slug}`
            }

            function p(t) {
                return `blog/${s(t.language)}/${t.categorySlug}`
            }

            function m(t) {
                return `blog/${c(t.language)}/${t.slug}`
            }

            function f() {
                const {
                    language: t,
                    country: e
                } = (0, o.UO)();
                return n => function({
                    country: t,
                    language: e,
                    slug: n
                }) {
                    return `${a({country:t,language:e})}/${n}`
                }({
                    country: e,
                    language: t,
                    slug: n
                })
            }

            function h() {
                const {
                    language: t,
                    country: e
                } = (0, o.UO)();
                return (n, o) => o ? p({
                    language: t,
                    categorySlug: n
                }) : u({
                    country: e,
                    language: t,
                    categorySlug: n
                })
            }

            function b() {
                const {
                    language: t,
                    country: e,
                    slug: n
                } = (0, o.UO)();
                return o => o ? m({
                    language: t,
                    slug: n
                }) : g({
                    country: e,
                    language: t,
                    slug: n
                })
            }

            function v() {
                const {
                    language: t,
                    country: e
                } = (0, o.UO)();
                return d({
                    country: e,
                    language: t
                })
            }

            function x() {
                const {
                    language: t,
                    country: e
                } = (0, o.UO)();
                return (n, o) => function(t) {
                    const {
                        language: e,
                        pageNumber: n
                    } = t;
                    return `${u(t)}/${(0,r.l)(e,"page")}/${n}`
                }({
                    language: t,
                    country: e,
                    categorySlug: n,
                    pageNumber: o
                })
            }

            function y() {
                const {
                    language: t,
                    country: e,
                    slug: n
                } = (0, o.UO)();
                return o => function(t) {
                    const {
                        language: e,
                        pageNumber: n
                    } = t;
                    return `${g(t)}/${(0,r.l)(e,"page")}/${n}`
                }({
                    language: t,
                    country: e,
                    slug: n,
                    pageNumber: o
                })
            }

            function w() {
                const {
                    language: t
                } = (0, o.UO)();
                return (e, n) => function(t) {
                    const {
                        language: e,
                        pageNumber: n
                    } = t;
                    return `${p(t)}/${(0,r.l)(e,"page")}/${n}`
                }({
                    language: t,
                    pageNumber: n,
                    categorySlug: e
                })
            }

            function $() {
                const {
                    language: t,
                    country: e
                } = (0, o.UO)();
                return (n, o) => o ? function(t) {
                    const {
                        language: e,
                        pageNumber: n
                    } = t;
                    return `${l(e)}/${(0,r.l)(e,"page")}/${n}`
                }({
                    language: t,
                    pageNumber: n
                }) : function(t) {
                    const {
                        language: e,
                        pageNumber: n
                    } = t;
                    return `${d(t)}/${(0,r.l)(e,"page")}/${n}`
                }({
                    language: t,
                    country: e,
                    pageNumber: n
                })
            }
        },
        78875: (t, e, n) => {
            function o(t) {
                return "string" == typeof t ? 0 === t.trim().length : Array.isArray(t) ? 0 === t.length : "object" == typeof t && null !== t ? 0 === Object.keys(t).length : !t
            }
            n.d(e, {
                x: () => o
            })
        }
    }
]);