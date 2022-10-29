(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2700], {
        92895: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => p,
                e: () => u
            });
            var t = i(53623),
                r = i(86929),
                o = i(84079),
                a = i(89579);
            const s = o.BZ,
                d = `${o.BZ}, inset 0 0 0 1px var(--divider-teal)`,
                l = `${o.BZ}, inset 0 0 0 1px var(--divider-error)`,
                c = {
                    boxShadow: d,
                    border: "1px solid var(--divider-teal)",
                    ":hover": {
                        boxShadow: d
                    }
                },
                u = e => ({
                    height: "4em",
                    backgroundColor: "var(--background-default)",
                    border: "1px solid " + (e.isDark ? "rgb(61, 61, 61)" : "var(--divider-default)"),
                    borderRadius: "var(--border-radius-l)",
                    transitionProperty: "box-shadow, border-color",
                    transitionDuration: "400ms",
                    WebkitTapHighlightColor: "transparent",
                    ":focus-within": e.hasJavaScript ? c : {},
                    ...e.readOnly ? {} : {
                        ":hover": {
                            boxShadow: s
                        }
                    },
                    ...e.hasFocus ? c : {},
                    ...e.hasError ? {
                        borderColor: "var(--divider-error)",
                        ":focus-within": {
                            boxShadow: l
                        }
                    } : {}
                }),
                p = t.Z.create({
                    wrapper: e => ({ ...u(e),
                        position: "relative",
                        width: "100%"
                    }),
                    label: e => ({ ...a.PS,
                        zIndex: o.FP,
                        color: "var(--typography-light)",
                        position: "absolute",
                        top: "50%",
                        left: "var(--spacing-s)",
                        fontSize: "inherit",
                        transitionProperty: "transform",
                        transitionDuration: "300ms",
                        transformOrigin: "top left",
                        transform: e.isLabelNudgedUp ? "translateY(calc(var(--spacing-m) * -1.25)) scale(0.8)" : "translateY(-50%)",
                        marginLeft: "-2px",
                        cursor: "text",
                        pointerEvents: "none",
                        ...e.hiddenLabel ? r.jy : {},
                        "::selection": {
                            backgroundColor: e.hasError ? "var(--background-container-light-rhubarb)" : void 0
                        }
                    }),
                    field: e => ({ ...(0, a.EP)(e),
                        fontSize: "var(--font-size-s)",
                        appearance: "none",
                        outline: "none",
                        border: 0,
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "var(--border-radius-l)",
                        padding: "var(--spacing-xl) var(--spacing-s) var(--spacing-xs)",
                        fontVariantNumeric: e.tabularNums ? "tabular-nums" : void 0,
                        "::placeholder": {
                            transitionProperty: "opacity",
                            transitionDuration: "300ms",
                            ...!e.hasFocus && e.hasJavaScript ? {
                                transitionDuration: 0,
                                opacity: 0
                            } : {}
                        },
                        "::selection": {
                            backgroundColor: e.hasError ? "var(--background-container-light-rhubarb)" : void 0
                        },
                        '[type="date"]::-webkit-datetime-edit': {
                            color: e.isLabelNudgedUp ? "var(--typography-default)" : "transparent"
                        }
                    }),
                    suggestions: a.tJ,
                    suggestion: a.Jz,
                    geosuggest: a.vm
                })
        },
        89579: (e, n, i) => {
            "use strict";
            i.d(n, {
                EP: () => s,
                Jz: () => u,
                PS: () => l,
                tJ: () => c,
                vm: () => v
            });
            var t = i(84079),
                r = i(86929);
            const o = {
                    opacity: .8,
                    color: "rgb(150, 150, 150)"
                },
                a = {
                    appearance: "none"
                },
                s = e => ({
                    backgroundColor: "transparent",
                    borderRadius: 0,
                    boxShadow: "none",
                    position: "relative",
                    width: "100%",
                    fontSize: "var(--font-size-xs)",
                    lineHeight: 4 / 3,
                    color: "var(--typography-default)",
                    "[disabled]": d,
                    "[readonly]": d,
                    "& + ul": c(e),
                    "& + ul > li": u(e),
                    '& + ul > [aria-selected="true"]': p,
                    "& + ul mark": {
                        backgroundColor: "transparent",
                        borderBottom: "1px solid",
                        color: "inherit"
                    },
                    "::placeholder": o,
                    "::-ms-input-placeholder": o,
                    ..."number" === e.type ? {
                        MozAppearance: "textfield",
                        "::-webkit-inner-spin-button": a,
                        "::-webkit-outer-spin-button": a
                    } : {}
                }),
                d = {
                    cursor: "not-allowed",
                    opacity: .5,
                    pointerEvents: "none"
                },
                l = ({
                    hiddenLabel: e
                }) => e ? r.jy : {
                    display: "inline-block",
                    fontSize: "var(--font-size-xs)",
                    lineHeight: 1.35,
                    marginBottom: "var(--spacing-2-xs)"
                },
                c = ({
                    hidden: e
                }) => ({ ...r.cU,
                    backgroundColor: "var(--background-default)",
                    border: "1px solid var(--divider-default)",
                    boxShadow: t.BZ,
                    borderRadius: "var(--border-radius-l)",
                    position: "absolute",
                    marginTop: "6px",
                    marginLeft: "-1px",
                    marginRight: "-1px",
                    left: 0,
                    right: 0,
                    zIndex: t.nh,
                    [t.sJ]: {
                        overflowY: "auto",
                        maxHeight: "10em"
                    },
                    ...e ? {
                        borderWidth: 0,
                        maxHeight: 0,
                        overflow: "hidden",
                        visibility: "hidden"
                    } : {}
                }),
                u = ({
                    active: e
                }) => ({
                    ":not(:last-child)": {
                        borderBottom: "1px solid var(--divider-default)"
                    },
                    padding: "var(--spacing-2-xs) var(--spacing-xs)",
                    fontSize: "var(--font-size-s)",
                    textAlign: "left",
                    ...e ? p : {},
                    ":first-child": {
                        borderTopLeftRadius: "var(--border-radius-l)",
                        borderTopRightRadius: "var(--border-radius-l)"
                    },
                    ":last-child": {
                        borderBottomLeftRadius: "var(--border-radius-l)",
                        borderBottomRightRadius: "var(--border-radius-l)"
                    },
                    ":hover": { ...p,
                        cursor: "pointer"
                    }
                }),
                p = {
                    backgroundColor: "var(--background-container-teal)",
                    color: "var(--typography-default-inverted)",
                    ":not(:last-child)": {
                        borderBottom: "1px solid rgba(255, 255, 255, 0.4)"
                    }
                },
                v = {
                    position: "relative"
                }
        },
        54263: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => m
            });
            var t = i(29901),
                r = i(7862),
                o = i.n(r),
                a = i(55851),
                s = i(77387),
                d = i(33083),
                l = i(94456),
                c = i(53623),
                u = i(84079);
            const p = c.Z.create({
                wrap: e => ({
                    backgroundColor: e.dominantColor || void 0,
                    height: 0,
                    overflow: "hidden",
                    paddingTop: e.aspectRatio + "%",
                    position: "relative",
                    width: "100%"
                }),
                image: ({
                    isLoading: e
                }) => ({
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    opacity: e ? 0 : 1,
                    zIndex: u.FP
                })
            });
            var v = i(61250);
            const g = (0, a.Z)(p.wrap, "div"),
                f = e => {
                    const n = (0, t.useContext)(d.Z),
                        [i, r] = (0, t.useState)(n),
                        [o, a] = (0, t.useState)(!n),
                        [c, u] = (0, s.YD)({
                            triggerOnce: !0
                        }),
                        {
                            aspectRatio: f,
                            dominantColor: m,
                            src: b
                        } = e;
                    return (0, t.useEffect)((() => {
                        const e = "loading" in window.HTMLImageElement.prototype;
                        a(e || u)
                    }), [u]), (0, v.jsx)(g, {
                        aspectRatio: f,
                        innerRef: c,
                        dominantColor: m,
                        children: o && (0, v.jsx)(l.Z, { ...e,
                            loading: "lazy",
                            extend: p.image,
                            isLoading: i,
                            onLoad: () => r(!1),
                            src: b
                        })
                    })
                };
            f.defaultProps = {
                dominantColor: ""
            }, f.propTypes = {
                aspectRatio: o().number.isRequired,
                dominantColor: o().string,
                height: o().number,
                src: o().string.isRequired,
                width: o().number
            };
            const m = f
        },
        55587: (e, n, i) => {
            "use strict";
            var t = i(46973),
                r = i(7862),
                o = i.n(r),
                a = i(41188),
                s = i(52809),
                d = i(97048),
                l = i(77523),
                c = i(84079);
            const u = e => ({
                position: "absolute",
                top: e.isTopAligned ? void 0 : "20px",
                right: "40px",
                zIndex: c.nh,
                color: l.oC.PRIMARY_DEFAULT
            });
            var p = i(61250);
            const v = ({
                contentType: e,
                id: n,
                isTopAligned: i
            }) => {
                const {
                    css: r
                } = (0, t.Z)({
                    isTopAligned: i
                }), {
                    isSmall: o
                } = (0, d.Z)();
                if (o) return null;
                const l = `https://app.contentful.com/spaces/q33z48p65a6w/environments/development/entries/${n}`;
                return (0, p.jsx)("div", {
                    className: r(u),
                    children: (0, p.jsx)(a.Z, {
                        label: `Edit ${e}`,
                        href: l,
                        type: "BLANK",
                        icon: s.xC,
                        isLabelHidden: !0,
                        title: `Edit ${e}`
                    })
                })
            };
            v.propTypes = {
                contentType: o().string.isRequired,
                id: o().string.isRequired,
                isTopAligned: o().bool
            }
        },
        21106: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => v
            });
            var t = i(7862),
                r = i.n(t),
                o = i(3714),
                a = i(84929),
                s = i(61785),
                d = i(2040),
                l = i(39101),
                c = i(74345),
                u = i(61250);
            const p = ({
                readMore: e,
                extend: n,
                size: i,
                onClick: t,
                activeOptimizelyEventKey: r,
                activeHref: p,
                children: v,
                Component: g,
                isLightBackground: f,
                color: m
            }) => {
                const {
                    trackOptimizelyEvent: b
                } = (0, a.D)(), h = (0, o.T$)(e), k = p || h;
                if (!k) return null;
                const {
                    externalLink: y,
                    forceDownload: x
                } = e ? .fields ? ? {}, w = g === l.Z.Blank;
                return (0, u.jsxs)(g, {
                    download: !!y && x,
                    onClick: () => {
                        const n = e ? .fields ? .optimizelyEventKey || r;
                        b && n && b(n), t && t()
                    },
                    href: k,
                    size: i,
                    extend: w && !n ? c.Z.link : n,
                    isLightBackground: f,
                    color: m,
                    children: [v || e ? .fields ? .label, w && (0, u.jsx)(d.Z, {
                        size: i,
                        extend: c.Z.arrowIcon,
                        icon: s.Z
                    })]
                })
            };
            p.defaultProps = {
                Component: l.Z.Blank,
                isLightBackground: !0
            }, p.propTypes = {
                readMore: r().shape({
                    fields: r().shape({
                        label: r().string.isRequired,
                        externalLink: r().string,
                        forceDownload: r().bool,
                        pageLink: r().arrayOf(r().shape({
                            fields: r().shape({
                                countryCodes: r().array
                            })
                        }))
                    })
                }),
                onClick: r().func,
                size: r().string
            };
            const v = p
        },
        74345: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => o
            });
            var t = i(53623),
                r = i(77523);
            const o = t.Z.create({
                arrowIcon: e => ({
                    position: "relative",
                    top: "small" === e.size ? "2px" : "3px",
                    marginLeft: "0.3em",
                    height: "small" === e.size ? "12px" : "16px"
                }),
                link: e => {
                    const n = {
                        color: e.isLightBackground ? r.oC[`INTERACTIVE_PRIMARY_${e.color&&"GRAY_LIGHT"!==e.color?e.color.toUpperCase().trim():"TEAL"}_CONSISTENT`] : r.oC.PRIMARY_INVERTED,
                        textDecoration: "underline"
                    };
                    return {
                        fontWeight: 500,
                        color: e.isLightBackground ? r.oC.PRIMARY_DEFAULT : r.oC.PRIMARY_INVERTED,
                        transitionProperty: "color",
                        transitionDuration: "50ms",
                        ":hover": n,
                        ":active": n
                    }
                }
            })
        },
        3714: (e, n, i) => {
            "use strict";
            i.d(n, {
                T$: () => a,
                ZP: () => s
            });
            var t = i(39422),
                r = i(24654);
            const o = (e, n) => {
                    const i = ((e, n) => {
                        const i = e ? .fields ? .externalLink;
                        if (i) return i;
                        const t = e ? .fields ? .pageLink ? ? [];
                        return 1 === t.length ? t[0] : t.find((({
                            fields: e
                        }) => e ? .countryCodes.includes(n.toUpperCase())))
                    })(e, n.country);
                    if ("string" == typeof i) return i;
                    const t = {
                        pageLink: { ...i
                        }
                    };
                    return (0, r.w)({
                        routeParams: n,
                        fields: t
                    })
                },
                a = e => {
                    const n = (0, t.UO)();
                    return o(e, n)
                },
                s = o
        },
        8013: e => {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "CountryAwareLink"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "CountryAwareLinkItem"
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
                                        value: "label"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "externalLink"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "forceDownload"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "optimizelyEventKey"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "pageLink"
                                    },
                                    arguments: [],
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
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "contentType"
                                                    },
                                                    arguments: [],
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
                                                        }]
                                                    }
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
                                                        value: "slug"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "countryCodes"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 340
                }
            };
            n.loc.source = {
                body: "fragment CountryAwareLink on CountryAwareLinkItem {\n  sys {\n    id\n  }\n  fields {\n    label\n    externalLink\n    forceDownload\n    optimizelyEventKey\n    pageLink {\n      sys {\n        id\n        contentType {\n          sys {\n            id\n          }\n        }\n      }\n      fields {\n        slug\n        countryCodes\n      }\n    }\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };

            function i(e, n) {
                if ("FragmentSpread" === e.kind) n.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var t = e.type;
                    "NamedType" === t.kind && n.add(t.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    i(e, n)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    i(e, n)
                })), e.definitions && e.definitions.forEach((function(e) {
                    i(e, n)
                }))
            }
            var t = {};

            function r(e, n) {
                for (var i = 0; i < e.definitions.length; i++) {
                    var t = e.definitions[i];
                    if (t.name && t.name.value == n) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    i(e, n), t[e.name.value] = n
                }
            })), e.exports = n, e.exports.CountryAwareLink = function(e, n) {
                var i = {
                    kind: e.kind,
                    definitions: [r(e, n)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var o = t[n] || new Set,
                    a = new Set,
                    s = new Set;
                for (o.forEach((function(e) {
                        s.add(e)
                    })); s.size > 0;) {
                    var d = s;
                    s = new Set, d.forEach((function(e) {
                        a.has(e) || (a.add(e), (t[e] || new Set).forEach((function(e) {
                            s.add(e)
                        })))
                    }))
                }
                return a.forEach((function(n) {
                    var t = r(e, n);
                    t && i.definitions.push(t)
                })), i
            }(n, "CountryAwareLink")
        },
        47253: (e, n, i) => {
            "use strict";

            function t(e, n, i) {
                return n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i, e
            }

            function r(e, n) {
                return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var i = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        }))), i.push.apply(i, t)
                    }
                    return i
                }(Object(n)).forEach((function(i) {
                    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i))
                })), e
            }

            function o(e) {
                return Object.keys(e || {}).reduce(((n, i) => {
                    const o = null === e[i] ? void 0 : e[i];
                    return r(function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var i = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(i);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(i).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(i, e).enumerable
                            })))), r.forEach((function(n) {
                                t(e, n, i[n])
                            }))
                        }
                        return e
                    }({}, n), {
                        [i]: o
                    })
                }), {})
            }
            i.d(n, {
                D: () => o
            })
        }
    }
]);