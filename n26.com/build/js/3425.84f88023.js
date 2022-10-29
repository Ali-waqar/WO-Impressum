(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3425], {
        76678: (e, n, i) => {
            "use strict";
            i.d(n, {
                s: () => m,
                J: () => u
            });
            var a = i(55851),
                t = i(81035),
                d = i(53623),
                r = i(84079);
            const o = `@media (min-width: ${r.Eb}px)`,
                l = e => ({
                    display: "flex",
                    justifyContent: "RIGHT" === e.align ? "flex-end" : void 0,
                    alignItems: "center"
                }),
                s = { ...l,
                    height: "100%"
                },
                c = d.Z.create({
                    column: e => ({ ...l(e),
                        ...e.image ? {
                            backgroundImage: `url(${e.image})`,
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            minHeight: "60vh",
                            [o]: {
                                backgroundSize: "cover",
                                minHeight: `calc(100vh - ${r.Mz})`
                            }
                        } : {}
                    }),
                    innerColumn: s
                }),
                m = (0, a.Z)(c.column, t.sg),
                u = (0, a.Z)(c.innerColumn, t.J9)
        },
        44895: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => f
            });
            var a = i(55851),
                t = i(53623),
                d = i(84079);
            const r = `calc(100vh - ${d.ei})`,
                o = {
                    marginBottom: "1rem",
                    borderRadius: "var(--border-radius-l)",
                    backgroundColor: "var(--background-container-light)"
                },
                l = t.Z.create({
                    loaderContainer: ({
                        height: e = "30em"
                    }) => ({
                        containIntrinsicSize: "0 500px",
                        contentVisibility: "auto",
                        height: r,
                        display: "flex",
                        flexDirection: "column-reverse",
                        marginBottom: "1em",
                        [d.sJ]: {
                            flexDirection: "row",
                            height: e
                        }
                    }),
                    textColumn: ({
                        wideImageColumn: e
                    }) => ({
                        width: e ? "70%" : "100%",
                        display: "flex",
                        alignItems: "center",
                        padding: "2em"
                    }),
                    imageColumn: {
                        width: "100%",
                        height: "100%",
                        backgroundColor: "var(--background-container-light)"
                    },
                    title: ({
                        long: e
                    }) => ({ ...o,
                        height: "2.3em",
                        width: e ? "75%" : "64%"
                    }),
                    subline: ({
                        long: e
                    }) => ({ ...o,
                        height: "1.4em",
                        width: "80%",
                        [d.sJ]: {
                            width: e ? "80%" : "64%"
                        }
                    }),
                    wrapper: {
                        width: "90%",
                        margin: "0 auto"
                    }
                });
            var s = i(61250);
            const c = (0, a.Z)(l.loaderContainer, "div"),
                m = (0, a.Z)(l.textColumn, "div"),
                u = (0, a.Z)(l.imageColumn, "div"),
                g = (0, a.Z)(l.title, "div"),
                k = (0, a.Z)(l.subline, "div"),
                v = (0, a.Z)(l.wrapper, "div"),
                f = e => e.empty ? (0, s.jsx)(c, {
                    height: e.height
                }) : (0, s.jsxs)(c, {
                    height: e.height,
                    children: [(0, s.jsx)(m, {
                        wideImageColumn: e.wideImageColumn,
                        children: (0, s.jsxs)(v, {
                            children: [(0, s.jsx)(g, {}), (0, s.jsx)(g, {
                                long: !0
                            }), (0, s.jsx)(k, {
                                long: !0
                            }), (0, s.jsx)(k, {})]
                        })
                    }), (0, s.jsx)(u, {
                        wide: e.wideImageColumn
                    })]
                })
        },
        33744: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => s
            });
            var a = i(66468),
                t = i(74345),
                d = i(61785),
                r = i(2040),
                o = i(39101),
                l = i(61250);
            const s = e => {
                const n = (0, a.o)()({
                    fields: e.readMore.fields
                });
                return n ? (0, l.jsxs)(o.Z.Blank, {
                    extend: t.Z.link,
                    href: n,
                    children: [e.readMore.fields.text, (0, l.jsx)(r.Z, {
                        extend: t.Z.arrowIcon,
                        icon: d.Z
                    })]
                }) : null
            }
        },
        73425: (e, n, i) => {
            "use strict";
            i.r(n), i.d(n, {
                TextColumn: () => R,
                WebsiteImageColumn: () => B,
                default: () => $
            });
            var a = i(7862),
                t = i.n(a),
                d = i(54865),
                r = i(55851),
                o = i(34777),
                l = i(84079),
                s = i(3714),
                c = i(76546),
                m = i(44895),
                u = i(81035),
                g = i(50745),
                k = (i(55587), i(21106)),
                v = i(98820),
                f = i(33744),
                p = i(57463),
                h = i(39957),
                x = i(38847),
                b = i(97048),
                C = i(22773),
                w = i(59144),
                y = i(94456),
                M = i(39101),
                N = i(11669),
                S = i(49455),
                j = i(76678),
                Z = i(7406),
                I = i(61142),
                F = i.n(I),
                L = i(61250);
            const B = (0, r.Z)(Z.Z.websiteImageColumn, j.s),
                D = (0, r.Z)(Z.Z.ctaWrap, "div"),
                T = (0, r.Z)(Z.Z.intermediateColumn, "div"),
                E = (0, r.Z)(Z.Z.textMediaInnerColumn, u.J9),
                A = ({
                    secondaryButton: e
                }) => {
                    const n = (0, s.T$)(e);
                    if (!n) return null;
                    const {
                        externalLink: i,
                        forceDownload: a,
                        label: t
                    } = e.fields;
                    return (0, L.jsx)(M.Z.Hollow, {
                        extend: Z.Z.secondaryButton,
                        download: !!i && a,
                        href: n,
                        children: t
                    })
                },
                R = e => {
                    const {
                        viewportWidth: n
                    } = (0, b.Z)(), i = n <= l.Eb, {
                        heading: a,
                        text: t,
                        backgroundColorText: d,
                        readMore: r,
                        countryAwareReadMore: o,
                        showCta: s,
                        secondaryButton: m
                    } = e.fields, u = "TEAL" === d ? "SECONDARY_BORDERLESS" : "PRIMARY", g = e.isImageColumnFirst ? "LEFT" : "RIGHT", v = !d || d.includes("_LIGHT") || d.includes("200"), x = o ? .fields.externalLink, C = x ? .includes(".pdf");
                    return (0, L.jsx)(j.s, {
                        color: d,
                        align: g,
                        children: (0, L.jsx)(T, {
                            children: (0, L.jsxs)(E, {
                                align: i ? "CENTER" : g,
                                darkText: v,
                                children: [a && (0, L.jsx)(w.Z.L, {
                                    as: e.shouldRenderH1 ? "h1" : "h2",
                                    children: a
                                }), t && (0, L.jsx)(S.Z, {
                                    ast: t,
                                    components: (0, p.D)(v)
                                }), (m || s) && (0, L.jsxs)(D, {
                                    children: [(0, L.jsx)(A, {
                                        secondaryButton: m
                                    }), s && (0, L.jsx)(c.Z, {
                                        align: "left",
                                        pageCtaLink: e.pageCtaLink,
                                        trackingData: e.trackingData,
                                        type: u
                                    })]
                                }), o ? (0, L.jsx)(k.Z, {
                                    onClick: C ? () => {
                                        const e = {
                                            event: "pdf_download_click",
                                            text: o ? .fields.label,
                                            destination_url: x
                                        };
                                        (0, h.Z)(e)
                                    } : null,
                                    readMore: o
                                }) : Boolean(r) && (0, L.jsx)(f.Z, {
                                    readMore: r
                                })]
                            })
                        })
                    })
                },
                _ = ({
                    isBackgroundMode: e,
                    backgroundColor: n,
                    media: i
                }) => {
                    const {
                        alt: a,
                        src: t,
                        ratio: d
                    } = i || {};
                    if (!t) return null;
                    const r = {
                        breakpoint: 1200,
                        width: 900,
                        src: t
                    };
                    if (/mp4|webm$/.test(t)) return (0, L.jsx)(v.Z, {
                        src: t,
                        isBackgroundMode: e
                    });
                    const {
                        hex: l = "ffffff"
                    } = (0, o.I$)(n);
                    return (0, L.jsx)(N.Z, {
                        alt: a,
                        aspectRatio: d,
                        bg: `rgb:${l}`,
                        extend: Z.Z.image,
                        fit: "pad",
                        isBackgroundMode: e,
                        renderFallback: n => (0, L.jsx)(y.Z, {
                            extend: Z.Z.image,
                            isBackgroundMode: e,
                            ...n
                        }),
                        sources: [...e ? [r] : [], {
                            breakpoint: 361,
                            width: 500,
                            src: t
                        }, {
                            breakpoint: 0,
                            width: 360,
                            src: t
                        }],
                        eagerLoad: !0,
                        usePlaceholderColor: !0
                    })
                },
                O = e => {
                    const {
                        viewportWidth: n
                    } = (0, b.Z)(), {
                        backgroundColorImage: i,
                        backgroundImage: a,
                        backgroundMode: t,
                        layoutMode: d,
                        mediaAdvanced: r
                    } = e.fields, o = (0, x.Z)(a), s = "BACKGROUND_MODE" === d || t, c = n <= l.Eb;
                    if (r) {
                        const n = r.some((({
                            fields: e
                        }) => Boolean(e ? .video) || Boolean(e ? .smallVideo)));
                        return (0, L.jsx)(B, {
                            alignLeft: e.isImageColumnFirst,
                            color: i,
                            isVideo: n,
                            layoutMode: d,
                            children: (0, L.jsx)(g.Z, {
                                media: r
                            })
                        })
                    }
                    return c && !o.src ? null : (0, L.jsx)(B, {
                        alignLeft: e.isImageColumnFirst,
                        color: i,
                        layoutMode: d,
                        children: s ? (0, L.jsx)(_, {
                            isBackgroundMode: s,
                            backgroundColor: i,
                            media: o
                        }) : (0, L.jsx)(T, {
                            withPaddingCompensation: !0,
                            children: (0, L.jsx)(E, {
                                align: "CENTER",
                                children: (0, L.jsx)(_, {
                                    backgroundColor: i,
                                    media: o
                                })
                            })
                        })
                    })
                },
                V = e => {
                    const {
                        language: n,
                        preview: i
                    } = (0, C.Z)(), {
                        data: a,
                        loading: t,
                        error: r
                    } = (0, d.a)(F(), {
                        variables: {
                            id: e.id,
                            language: n,
                            preview: i
                        }
                    });
                    if (r) return null;
                    if (t) return (0, L.jsx)(m.Z, {});
                    const o = a ? .module ? .fields,
                        l = o ? .imageColumnFirst;
                    return (0, L.jsxs)(u.xu, {
                        extend: Z.Z.textMediaBox,
                        children: [!1, l ? (0, L.jsxs)(L.Fragment, {
                            children: [(0, L.jsx)(O, { ...e,
                                fields: o,
                                isImageColumnFirst: !0
                            }), (0, L.jsx)(R, { ...e,
                                fields: o,
                                isImageColumnFirst: !0
                            })]
                        }) : (0, L.jsxs)(L.Fragment, {
                            children: [(0, L.jsx)(R, { ...e,
                                fields: o
                            }), (0, L.jsx)(O, { ...e,
                                fields: o
                            })]
                        })]
                    })
                };
            V.propTypes = {
                shouldRenderH1: t().bool,
                trackingData: t().object,
                pageCtaLink: t().object,
                id: t().string.isRequired
            };
            const $ = V
        },
        7406: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => s,
                j: () => l
            });
            var a = i(53623),
                t = i(84079),
                d = i(34777),
                r = i(89238);
            const o = `@media (min-width: ${t.Eb}px)`,
                l = {
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "100%",
                    [o]: {
                        flexDirection: "row"
                    }
                },
                s = a.Z.create({
                    textMediaInnerColumn: ({
                        darkText: e
                    }) => ({
                        color: e ? void 0 : "var(--typography-default-inverted)",
                        maxWidth: "28em"
                    }),
                    textMediaBox: l,
                    image: e => ({
                        margin: "0 auto",
                        width: e.isBackgroundMode ? "100%" : void 0,
                        height: e.isBackgroundMode ? "100%" : void 0,
                        objectFit: e.isBackgroundMode ? "cover" : void 0
                    }),
                    websiteImageColumn: ({
                        layoutMode: e,
                        color: n,
                        alignLeft: i,
                        isVideo: a
                    }) => {
                        const l = "CENTERED_MODE" === e,
                            s = l ? "var(--spacing-xl)" : 0,
                            c = l && !n;
                        return {
                            alignItems: l || a ? "center" : "flex-end",
                            justifyContent: i ? "flex-end" : "flex-start",
                            order: -1,
                            paddingBottom: c ? 0 : "var(--spacing-m)",
                            paddingLeft: "var(--spacing-m)",
                            paddingRight: "var(--spacing-m)",
                            paddingTop: "var(--spacing-m)",
                            position: "relative",
                            backgroundColor: (0, d.Lq)(n),
                            [r.cc]: {
                                paddingBottom: c ? 0 : s,
                                paddingLeft: s,
                                paddingRight: s,
                                paddingTop: s
                            },
                            [o]: {
                                order: "unset"
                            },
                            [t.OV]: {
                                paddingBottom: s,
                                maxHeight: "34em",
                                overflow: "hidden"
                            }
                        }
                    },
                    ctaWrap: {
                        marginBottom: "var(--spacing-m)",
                        display: "flex"
                    },
                    intermediateColumn: e => ({
                        flexBasis: e.withPaddingCompensation ? "calc(38em + var(--spacing-xl))" : "38em"
                    }),
                    secondaryButton: {
                        marginRight: "var(--spacing-m)"
                    }
                })
        },
        57463: (e, n, i) => {
            "use strict";
            i.d(n, {
                D: () => o
            });
            var a = i(12745),
                t = i(53348),
                d = i(83858),
                r = i(61250);
            const o = e => ({ ...d.Fy,
                [a.BLOCKS.QUOTE]: n => (0, r.jsx)(t.Z, { ...n,
                    onLightBackground: e
                })
            })
        },
        61142: (e, n, i) => {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "getTextMediaModule"
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
                                value: "getTextMediaModule"
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
                                                value: "heading"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "text"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "backgroundImage"
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
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "backgroundMode"
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
                                                        value: "CountryAwareLink"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "layoutMode"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "backgroundColorImage"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "backgroundColorText"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "showCta"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "readMore"
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
                                                value: "countryAwareReadMore"
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
                                                value: "imageColumnFirst"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "mediaAdvanced"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "Media"
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
                }],
                loc: {
                    start: 0,
                    end: 1064
                }
            };
            a.loc.source = {
                body: "#@TODO: Replace with aliases when babel-plugin-import-graphql supports it\n#import '../../../../../../shared/api/helpers/ContentfulMediaObject/Image.fragment.graphql'\n#import '../../../../../../shared/api/helpers/LinkItem/Link.fragment.graphql'\n#import '../../../../../../shared/api/helpers/CountryAwareLinkItem/CountryAwareLinkItem.fragment.graphql'\n#import '../../../../../../shared/api/helpers/Media/Media.fragment.graphql'\n\nquery getTextMediaModule(\n  $id: ID!\n  $language: ContentfulLanguage!\n  $preview: Boolean\n) {\n  module: getTextMediaModule(id: $id, locale: $language, preview: $preview) {\n    sys {\n      id\n    }\n    fields {\n      heading\n      text\n      backgroundImage {\n        ...Image\n      }\n      backgroundMode\n      secondaryButton {\n        ...CountryAwareLink\n      }\n      layoutMode\n      backgroundColorImage\n      backgroundColorText\n      showCta\n      readMore {\n        ...Link\n      }\n      countryAwareReadMore {\n        ...CountryAwareLink\n      }\n      imageColumnFirst\n      mediaAdvanced {\n        ...Media\n      }\n    }\n  }\n}\n",
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
            a.definitions = a.definitions.concat(d(i(96363).definitions)), a.definitions = a.definitions.concat(d(i(84493).definitions)), a.definitions = a.definitions.concat(d(i(8013).definitions)), a.definitions = a.definitions.concat(d(i(62786).definitions));
            var o = {};

            function l(e, n) {
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
            })), e.exports = a, e.exports.getTextMediaModule = function(e, n) {
                var i = {
                    kind: e.kind,
                    definitions: [l(e, n)]
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
                    var a = l(e, n);
                    a && i.definitions.push(a)
                })), i
            }(a, "getTextMediaModule")
        }
    }
]);