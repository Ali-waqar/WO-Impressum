(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5988], {
        67726: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => s
            });
            var a = i(55851),
                t = i(9563);
            const d = i(53623).Z.create({
                loaderContainer: ({
                    height: e = "10em"
                }) => ({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: e,
                    fontSize: "var(--font-size-2-xl)"
                })
            });
            var r = i(61250);
            const o = (0, a.Z)(d.loaderContainer, "div"),
                s = e => (0, r.jsx)(o, {
                    height: e.height,
                    children: (0, r.jsx)(t.Z, {})
                })
        },
        37206: (e, n, i) => {
            "use strict";
            i.r(n), i.d(n, {
                default: () => ne
            });
            var a = i(39422),
                t = i(66468),
                d = i(54865),
                r = i(3714),
                o = i(22773),
                s = i(67726),
                l = i(29901),
                c = i(54534),
                m = i(87942),
                u = i.n(m),
                g = i(55851),
                v = i(77387),
                p = i(43565),
                f = i(86981),
                k = i(34959),
                S = i(76546),
                h = i(81035),
                y = (i(55587), i(80971)),
                x = i(38847),
                N = i(73601),
                b = i(59144),
                C = i(21013),
                T = i(39101),
                A = i(11669),
                E = i(84929),
                L = i(53623),
                B = i(84079);
            const w = {
                    paddingTop: "var(--spacing-4-xl)",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    [B.sJ]: {
                        paddingTop: "var(--spacing-xl)"
                    }
                },
                D = {
                    maxWidth: ["24em", "var(--width-xl)"],
                    [B.OV]: {
                        maxWidth: ["38em", "var(--width-6-xl)"]
                    }
                },
                I = {
                    [B.sJ]: {
                        display: "flex",
                        justifyContent: "center"
                    }
                },
                R = {
                    margin: "0 auto 6em",
                    textAlign: "center",
                    maxWidth: "100%",
                    position: "relative",
                    [B.sJ]: {
                        marginBottom: "var(--spacing-5-xl)"
                    }
                },
                Z = e => e > 2 ? 50 : 33,
                F = e => ({
                    position: "relative",
                    zIndex: 3 * B.FP,
                    transform: 2 === e.cardCount ? `translateX(-25%) rotate(-${90+(e.animate?10:14)}deg)` : "rotate(-90deg)",
                    [B.sJ]: {
                        transform: 1 === e.cardCount ? `rotate(${e.animate?"18deg":"15deg"})` : 2 === e.cardCount ? `translateX(-${Z(e.cardCount)}%) rotate(${e.animate?"18deg":"15deg"})` : e.cardCount > 2 ? `translateY(calc(var(--spacing-6-xs) * -1)) rotate(${e.animate?"18deg":"15deg"})` : void 0
                    }
                }),
                O = e => ({
                    zIndex: 2 * B.FP,
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transitionDelay: "200ms",
                    transform: `\n    translate(-50%, -50%)\n    translateX(25%)\n    rotate(-${90-(e.animate?10:12)}deg)\n  `,
                    [B.sJ]: {
                        transform: 2 === e.cardCount ? `\n          translate(-50%, -50%)\n          translateX(${Z(e.cardCount)}%)\n          rotate(${e.animate?"18deg":"15deg"})\n        ` : 3 === e.cardCount ? `\n          translate(-50%, -50%)\n          translateX(-${Z(e.cardCount)}%)\n          rotate(${e.animate?"18deg":"15deg"})\n        ` : void 0
                    }
                }),
                _ = e => ({
                    zIndex: B.FP,
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transitionDelay: "400ms",
                    transform: `\n    translate(-50%, -50%)\n    translateX(-25%)\n    rotate(-${90+(e.animate?10:12)}deg)\n  `,
                    [B.sJ]: {
                        transform: `\n      translate(-50%, -50%)\n      translateX(${Z(e.cardCount)}%)\n      rotate(${e.animate?"18deg":"15deg"})\n    `
                    }
                }),
                U = L.Z.create({
                    box: {
                        maxWidth: "100%"
                    },
                    compareWrapper: D,
                    buttonWrap: I,
                    buttonItem: e => ({
                        marginBottom: e.last ? 0 : "var(--spacing-m)",
                        marginRight: "var(--spacing-s)",
                        marginLeft: "var(--spacing-s)",
                        textAlign: "center",
                        [B.sJ]: {
                            marginBottom: 0
                        }
                    }),
                    cardWrapper: R,
                    cardItem: e => ({
                        margin: "0 auto",
                        width: "15em",
                        maxWidth: "100%",
                        borderRadius: "var(--border-radius-credit-card)",
                        overflow: "hidden",
                        filter: "drop-shadow(0 0 4px rgba(0, 0, 0, 0.25))",
                        transitionProperty: "transform",
                        transitionDuration: "1000ms",
                        ...0 === e.index ? F(e) : {},
                        ...1 === e.index ? O(e) : {},
                        ...2 === e.index ? _(e) : {}
                    }),
                    maestroNotice: {
                        color: "var(--typography-light)",
                        fontSize: "var(--font-size-3-xs)"
                    },
                    boxInner: w,
                    copy: {
                        maxWidth: "var(--width-5-xl)"
                    }
                });
            var $ = i(7625),
                V = i.n($),
                j = i(61250);
            const H = (0, g.Z)(U.compareWrapper, "div"),
                W = (0, g.Z)(U.copy, "p"),
                M = (0, g.Z)(U.buttonWrap, "div"),
                P = (0, g.Z)(U.buttonItem, "div"),
                z = (0, g.Z)(U.maestroNotice, "div"),
                G = (0, g.Z)(U.cardWrapper, "div"),
                q = (0, g.Z)(U.cardItem, "div"),
                J = (e, n = "YOU") => {
                    if (!(e.card.fields ? .type === n)) return;
                    const i = e ? .card.fields ? .designs ? ? [];
                    return (a = i)[Math.floor(Math.random() * a.length)];
                    var a
                },
                K = e => {
                    const n = (0, N.Z)(),
                        i = e ? .card.fields ? .defaultAsset ? ? {},
                        [a, t] = (0, l.useState)(i);
                    (0, l.useEffect)((() => {
                        const n = e ? .card.fields ? .type ? ? "";
                        "STANDARD" !== n && "BUSINESS" !== n && t(J(e, n))
                    }), [e]);
                    const {
                        alt: d,
                        ratio: r,
                        src: o
                    } = (0, x.Z)(a ? .fields ? .landscape);
                    return o ? (0, j.jsx)(v.df, {
                        children: ({
                            inView: i,
                            ref: a
                        }) => (0, j.jsx)(q, {
                            innerRef: a,
                            index: e.index,
                            cardCount: e.cardCount,
                            animate: i,
                            children: (0, j.jsx)(A.Z, {
                                alt: d || n("card_image.alt_text"),
                                aspectRatio: r,
                                loading: "lazy",
                                sources: {
                                    width: 280,
                                    src: o
                                }
                            })
                        })
                    }) : null
                },
                Y = e => {
                    const n = e.cards.slice(0, 3);
                    return (0, j.jsx)(G, {
                        children: n.map(((e, i) => (0, j.jsx)(K, {
                            card: e,
                            index: i,
                            cardCount: n.length
                        }, e.sys.id)))
                    })
                },
                X = u()((0, p.Z)(o.Z), (0, p.Z)((() => ({
                    locale: (0, l.useContext)(k.Z).locale
                }))), (0, c.B)(V()))((e => {
                    const n = (0, a.UO)(),
                        {
                            trackOptimizelyEvent: i
                        } = (0, E.D)(),
                        t = (0, N.Z)(),
                        d = (e => {
                            const n = (e => {
                                    const n = e.data ? .cards ? ? [],
                                        i = e ? .cards ? ? [];
                                    return n.filter((e => i.includes(e.fields.type)))
                                })(e),
                                i = e => n.find((n => n.fields.type === e)) || [];
                            return [i(y.g.METAL), i(y.g.STANDARD), i(y.g.YOU), i(y.g.BUSINESS), i(y.g.BUSINESS_METAL), i(y.g.BUSINESS_YOU), i(y.g.BLACK), i(y.g.MAESTRO), i(y.g.VIRTUAL)].filter(f.s)
                        })(e),
                        r = Boolean(d.length),
                        o = "GB" === n.country,
                        s = d.some((({
                            fields: e
                        }) => "maestro" === e.type)) && !o;
                    return (0, j.jsxs)(h.N3, {
                        extend: U.box,
                        color: e.backgroundColor,
                        children: [!1, (0, j.jsx)(h.cQ, {
                            extend: U.boxInner,
                            children: (0, j.jsxs)(H, {
                                children: [r && (0, j.jsx)(Y, { ...e,
                                    cards: d
                                }), Boolean(e.title) && (0, j.jsx)(b.Z.L, {
                                    as: e.shouldRenderH1 ? "h1" : "h2",
                                    children: (0, j.jsx)(C.Z, {
                                        children: e.title
                                    })
                                }), (0, j.jsx)(W, {
                                    children: e.copy
                                }), (0, j.jsxs)(M, {
                                    children: [Boolean(e.buttonHref) && (0, j.jsx)(P, {
                                        children: (0, j.jsx)(T.Z.Hollow, {
                                            href: e.buttonHref,
                                            onClick: () => {
                                                {
                                                    const n = e ? .trackingData.secondaryButtonTrackingData ? .optimizelyEventKey;
                                                    n && i(n)
                                                }
                                            },
                                            children: e.compareLabel
                                        })
                                    }), (0, j.jsx)(P, {
                                        last: !0,
                                        children: (0, j.jsx)(S.Z, {
                                            pageCtaLink: e.pageCtaLink,
                                            trackingData: e.trackingData,
                                            dataAttributes: e.ctaDataAttributes
                                        })
                                    })]
                                }), s && (0, j.jsxs)(z, {
                                    children: ["* ", t("compare.maestro_notice")]
                                })]
                            })
                        })]
                    })
                }));
            var Q = i(84849),
                ee = i.n(Q);
            const ne = e => {
                const {
                    language: n,
                    preview: i
                } = (0, o.Z)(), l = (0, a.UO)(), c = (0, t.o)(), {
                    data: m,
                    loading: u,
                    error: g
                } = (0, d.a)(ee(), {
                    variables: {
                        id: e.id,
                        language: n,
                        preview: i
                    }
                });
                if (g) return null;
                if (u) return (0, j.jsx)(s.Z, {});
                const v = m.module ? .fields ? ? {},
                    p = v ? .countryAwareSecondaryButton ? ? {},
                    f = (0, r.ZP)(p, l),
                    k = v ? .secondaryButton ? .fields ? ? {},
                    S = v ? .backgroundColor,
                    h = c({
                        fields: k
                    }),
                    y = p ? .fields ? .label || k.text,
                    x = e.trackingData;
                if (f) {
                    const e = p ? .fields ? .optimizelyEventKey;
                    e && (x.secondaryButtonTrackingData = {
                        optimizelyEventKey: e
                    })
                } else if (h) {
                    const e = k ? .optimizelyEventKey;
                    e && (x.secondaryButtonTrackingData = {
                        optimizelyEventKey: e
                    })
                }
                return (0, j.jsx)(X, {
                    backgroundColor: S,
                    cards: m ? .module ? .fields ? .cards,
                    title: m ? .module ? .fields ? .headline,
                    copy: m ? .module ? .fields ? .copy,
                    compareLabel: y,
                    buttonHref: f || h,
                    trackingData: x,
                    pageCtaLink: e.pageCtaLink,
                    ctaDataAttributes: e.ctaDataAttributes,
                    smallPad: !0,
                    shouldRenderH1: e.shouldRenderH1,
                    id: e.id
                })
            }
        },
        81035: (e, n, i) => {
            "use strict";
            i.d(n, {
                EC: () => m,
                J9: () => u,
                N3: () => l,
                cQ: () => v,
                e4: () => g,
                sg: () => c,
                xu: () => s
            });
            var a = i(55851),
                t = i(7862),
                d = i.n(t),
                r = i(89238);
            const o = ["GRAY_LIGHT", "GRAY_LIGHTEST", "GRAY_200", "TEAL", "TEAL_LIGHT", "TEAL_200", "RHUBARB", "RHUBARB_LIGHT", "RHUBARB_200", "WHEAT", "WHEAT_LIGHT", "WHEAT_200", "PETROL", "PETROL_LIGHT", "PETROL_200", "WHITE"],
                s = (0, a.Z)(r.ZP.box, "div"),
                l = (0, a.Z)(r.ZP.padBox, "div"),
                c = (0, a.Z)(r.ZP.column, "div"),
                m = (0, a.Z)(r.ZP.fullSizeBox, "div"),
                u = (0, a.Z)(r.ZP.innerColumn, "div"),
                g = (0, a.Z)(r.ZP.omniBox, "div"),
                v = (0, a.Z)(r.ZP.innerOmniBox, "div");
            c.propTypes = {
                color: d().oneOf(o)
            }, s.propTypes = {
                bottomMargin: d().bool,
                color: d().oneOf(o)
            }, u.propTypes = {
                align: d().oneOf(["LEFT", "RIGHT", "CENTER"])
            }
        },
        89238: (e, n, i) => {
            "use strict";
            i.d(n, {
                BZ: () => c,
                ZP: () => g,
                cc: () => o
            });
            var a = i(53623),
                t = i(34777),
                d = i(84079);
            const r = `@media (min-width: ${d.Gu}px)`,
                o = "@media (min-width: 500px)",
                s = {
                    containIntrinsicSize: "0 500px",
                    contentVisibility: "auto",
                    maxWidth: d.JN,
                    marginLeft: "auto",
                    marginRight: "auto"
                },
                l = { ...s,
                    margin: "0 auto",
                    paddingBottom: "var(--spacing-xl)",
                    paddingLeft: "var(--spacing-m)",
                    paddingRight: "var(--spacing-m)",
                    paddingTop: "var(--spacing-xl)",
                    [d.OV]: {
                        paddingBottom: "var(--spacing-l)",
                        paddingLeft: "var(--spacing-2-xl)",
                        paddingRight: "var(--spacing-2-xl)",
                        paddingTop: "var(--spacing-l)"
                    }
                },
                c = e => ({ ...s,
                    maxWidth: "100%",
                    marginBottom: e.bottomMargin ? "var(--spacing-2-xs)" : void 0,
                    backgroundColor: (0, t.Lq)(e.color),
                    display: "block",
                    [d.sJ]: {
                        display: "flex"
                    }
                }),
                m = {
                    height: `calc(100vh - ${d.ei})`,
                    [r]: {
                        height: `calc(100vh - ${d.Mz})`
                    }
                },
                u = {
                    margin: "auto",
                    maxWidth: "26em",
                    display: "flex",
                    [d.sJ]: {
                        maxWidth: "50em"
                    }
                },
                g = a.Z.create({
                    omniBox: l,
                    box: c,
                    padBox: e => ({ ...c(e),
                        maxWidth: "100%",
                        paddingTop: "var(--spacing-xl)",
                        paddingRight: "var(--spacing-m)",
                        paddingBottom: "var(--spacing-xl)",
                        paddingLeft: "var(--spacing-m)",
                        [d.sJ]: {
                            paddingTop: "var(--spacing-2-xl)",
                            paddingRight: "var(--spacing-2-xl)",
                            paddingBottom: "var(--spacing-2-xl)",
                            paddingLeft: "var(--spacing-2-xl)"
                        }
                    }),
                    column: e => ({
                        backgroundColor: (0, t.Lq)(e.color),
                        flex: "0 1 50%",
                        paddingTop: "var(--spacing-m)",
                        paddingRight: "var(--spacing-m)",
                        paddingBottom: e.noPad ? 0 : "var(--spacing-m)",
                        paddingLeft: "var(--spacing-m)",
                        [o]: {
                            paddingBottom: e.noPad ? 0 : "var(--spacing-xl)",
                            paddingTop: "var(--spacing-xl)",
                            paddingLeft: "var(--spacing-xl)",
                            paddingRight: "var(--spacing-xl)"
                        }
                    }),
                    fullSizeBox: m,
                    innerColumn: e => ({
                        maxWidth: "25em",
                        marginLeft: "RIGHT" === e.align || "CENTER" === e.align ? "auto" : void 0,
                        marginRight: "CENTER" === e.align ? "auto" : void 0
                    }),
                    innerOmniBox: u
                })
        },
        80971: (e, n, i) => {
            "use strict";
            i.d(n, {
                g: () => a
            });
            const a = {
                BLACK: "BLACK",
                BUSINESS_BLACK: "BUSINESS_BLACK",
                BUSINESS_METAL: "BUSINESS_METAL",
                BUSINESS_YOU: "BUSINESS_YOU",
                BUSINESS: "BUSINESS",
                FLEX: "FLEX",
                MAESTRO: "MAESTRO",
                METAL: "METAL",
                STANDARD: "STANDARD",
                YOU: "YOU",
                VIRTUAL: "VIRTUAL"
            }
        },
        7625: (e, n, i) => {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CompareAssets"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "country"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ContentfulCountry"
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
                                value: "language"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ContentfulLanguage"
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
                                value: "preview"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
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
                                value: "cards"
                            },
                            name: {
                                kind: "Name",
                                value: "getCardsForCountry"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "country"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "country"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "language"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "language"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "preview"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "preview"
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
                                                value: "type"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "defaultAsset"
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
                                                                value: "designType"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "landscape"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "Image"
                                                                    },
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
                                                value: "designs"
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
                                                                value: "designType"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "landscape"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "Image"
                                                                    },
                                                                    directives: []
                                                                }]
                                                            }
                                                        }]
                                                    }
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
                    end: 776
                }
            };
            a.loc.source = {
                body: "#@TODO: Replace with aliases when babel-plugin-import-graphql supports it\n#import '../../../../../../../shared/api/helpers/ContentfulMediaObject/Image.fragment.graphql'\n\nquery CompareAssets(\n  $country: ContentfulCountry!\n  $language: ContentfulLanguage!\n  $preview: Boolean\n) {\n  cards: getCardsForCountry(\n    country: $country\n    language: $language\n    preview: $preview\n  ) {\n    sys {\n      id\n    }\n    fields {\n      type\n      defaultAsset {\n        sys {\n          id\n        }\n        fields {\n          designType\n          landscape {\n            ...Image\n          }\n        }\n      }\n      designs {\n        sys {\n          id\n        }\n        fields {\n          designType\n          landscape {\n            ...Image\n          }\n        }\n      }\n    }\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var t = {};

            function d(e, n) {
                if ("FragmentSpread" === e.kind) n.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var i = e.type;
                    "NamedType" === i.kind && n.add(i.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    d(e, n)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    d(e, n)
                })), e.definitions && e.definitions.forEach((function(e) {
                    d(e, n)
                }))
            }
            a.definitions = a.definitions.concat(i(96363).definitions.filter((function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var n = e.name.value;
                return !t[n] && (t[n] = !0, !0)
            })));
            var r = {};

            function o(e, n) {
                for (var i = 0; i < e.definitions.length; i++) {
                    var a = e.definitions[i];
                    if (a.name && a.name.value == n) return a
                }
            }
            a.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    d(e, n), r[e.name.value] = n
                }
            })), e.exports = a, e.exports.CompareAssets = function(e, n) {
                var i = {
                    kind: e.kind,
                    definitions: [o(e, n)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var a = r[n] || new Set,
                    t = new Set,
                    d = new Set;
                for (a.forEach((function(e) {
                        d.add(e)
                    })); d.size > 0;) {
                    var s = d;
                    d = new Set, s.forEach((function(e) {
                        t.has(e) || (t.add(e), (r[e] || new Set).forEach((function(e) {
                            d.add(e)
                        })))
                    }))
                }
                return t.forEach((function(n) {
                    var a = o(e, n);
                    a && i.definitions.push(a)
                })), i
            }(a, "CompareAssets")
        },
        84849: (e, n, i) => {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "websiteCompareModule"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "id"
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
                                value: "language"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ContentfulLanguage"
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
                                value: "preview"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
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
                                value: "module"
                            },
                            name: {
                                kind: "Name",
                                value: "getCompareModule"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "id"
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
                                        value: "language"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "preview"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "preview"
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
                                                value: "headline"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "copy"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "cards"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "secondaryButton"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "Link"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "countryAwareSecondaryButton"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "CountryAwareLink"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "backgroundColor"
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
                    end: 661
                }
            };
            a.loc.source = {
                body: "#@TODO: Replace with aliases when babel-plugin-import-graphql supports it\n#import '../../../../../../shared/api/helpers/LinkItem/Link.fragment.graphql'\n#import '../../../../../../shared/api/helpers/CountryAwareLinkItem/CountryAwareLinkItem.fragment.graphql'\n\nquery websiteCompareModule(\n  $id: ID!\n  $language: ContentfulLanguage!\n  $preview: Boolean\n) {\n  module: getCompareModule(id: $id, locale: $language, preview: $preview) {\n    sys {\n      id\n    }\n    fields {\n      headline\n      copy\n      cards\n      secondaryButton {\n        ...Link\n      }\n      countryAwareSecondaryButton {\n        ...CountryAwareLink\n      }\n      backgroundColor\n    }\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var t = {};

            function d(e) {
                return e.filter((function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !t[n] && (t[n] = !0, !0)
                }))
            }

            function r(e, n) {
                if ("FragmentSpread" === e.kind) n.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var i = e.type;
                    "NamedType" === i.kind && n.add(i.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    r(e, n)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    r(e, n)
                })), e.definitions && e.definitions.forEach((function(e) {
                    r(e, n)
                }))
            }
            a.definitions = a.definitions.concat(d(i(84493).definitions)), a.definitions = a.definitions.concat(d(i(8013).definitions));
            var o = {};

            function s(e, n) {
                for (var i = 0; i < e.definitions.length; i++) {
                    var a = e.definitions[i];
                    if (a.name && a.name.value == n) return a
                }
            }
            a.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    r(e, n), o[e.name.value] = n
                }
            })), e.exports = a, e.exports.websiteCompareModule = function(e, n) {
                var i = {
                    kind: e.kind,
                    definitions: [s(e, n)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var a = o[n] || new Set,
                    t = new Set,
                    d = new Set;
                for (a.forEach((function(e) {
                        d.add(e)
                    })); d.size > 0;) {
                    var r = d;
                    d = new Set, r.forEach((function(e) {
                        t.has(e) || (t.add(e), (o[e] || new Set).forEach((function(e) {
                            d.add(e)
                        })))
                    }))
                }
                return t.forEach((function(n) {
                    var a = s(e, n);
                    a && i.definitions.push(a)
                })), i
            }(a, "websiteCompareModule")
        }
    }
]);