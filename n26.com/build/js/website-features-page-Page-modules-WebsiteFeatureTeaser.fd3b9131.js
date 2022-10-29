(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [7774], {
        67726: (e, i, n) => {
            "use strict";
            n.d(i, {
                Z: () => l
            });
            var a = n(55851),
                t = n(9563);
            const d = n(53623).Z.create({
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
            var r = n(61250);
            const o = (0, a.Z)(d.loaderContainer, "div"),
                l = e => (0, r.jsx)(o, {
                    height: e.height,
                    children: (0, r.jsx)(t.Z, {})
                })
        },
        91306: (e, i, n) => {
            "use strict";
            n.r(i), n.d(i, {
                default: () => E
            });
            var a = n(55851),
                t = n(54865),
                d = n(34777),
                r = n(76546),
                o = n(81035),
                l = (n(55587), n(21045)),
                s = n(21106),
                c = n(33744),
                m = n(39957),
                u = n(38847),
                g = n(22773),
                p = n(67726),
                v = n(59144),
                k = n(11669),
                f = n(53623);
            const h = {
                    display: "flex",
                    justifyContent: "center"
                },
                x = { ...h,
                    marginBottom: "var(--spacing-m)"
                },
                b = h,
                T = h,
                N = f.Z.create({
                    coolBox: {
                        overflow: "hidden",
                        maxWidth: "100%",
                        textAlign: "center"
                    },
                    wideColumn: e => ({
                        flex: "0 1 var(--width-6-xl)",
                        marginLeft: "auto",
                        marginRight: "auto",
                        paddingBottom: e.hasImage ? 0 : void 0,
                        marginBottom: "DEVICE_MODE" === e.layoutMode ? 0 : "var(--spacing-xl)"
                    }),
                    ctaWrap: x,
                    imageWrap: b,
                    readMoreWrap: T
                });
            var w = n(18231),
                L = n.n(w),
                y = n(61250);
            const Z = (0, a.Z)(N.ctaWrap, "div"),
                S = (0, a.Z)(N.readMoreWrap, "div"),
                C = (0, a.Z)(N.imageWrap, "div"),
                E = e => {
                    const {
                        language: i,
                        preview: n
                    } = (0, g.Z)(), {
                        data: a,
                        loading: f,
                        error: h
                    } = (0, t.a)(L(), {
                        variables: {
                            id: e.id,
                            language: i,
                            preview: n
                        }
                    });
                    if (h) return null;
                    if (f) return (0, y.jsx)(p.Z, {});
                    const x = a ? .module ? .fields,
                        {
                            backgroundColorText: b,
                            backgroundImage: T,
                            countryAwareReadMore: w,
                            layoutMode: E,
                            heading: R,
                            readMore: B,
                            showCta: M,
                            text: A
                        } = x,
                        {
                            alt: F,
                            ratio: I,
                            src: _,
                            width: D
                        } = (0, u.Z)(T),
                        {
                            hex: O = "ffffff"
                        } = (0, d.I$)(b),
                        j = w ? .fields.externalLink,
                        H = j ? .includes(".pdf");
                    return (0, y.jsxs)(o.xu, {
                        extend: N.coolBox,
                        color: b,
                        children: [!1, (0, y.jsxs)(o.sg, {
                            extend: N.wideColumn,
                            layoutMode: E,
                            noPad: !0,
                            children: [R && (0, y.jsx)(v.Z.L, {
                                as: e.shouldRenderH1 ? "h1" : "h2",
                                children: R
                            }), (0, y.jsx)(l.Z, {
                                source: A
                            }), M && (0, y.jsx)(Z, {
                                children: (0, y.jsx)(r.Z, {
                                    align: "left",
                                    trackingData: e.trackingData,
                                    pageCtaLink: e.pageCtaLink
                                })
                            }), w && (0, y.jsx)(S, {
                                children: w ? (0, y.jsx)(s.Z, {
                                    onClick: H ? () => {
                                        const e = {
                                            event: "pdf_download_click",
                                            text: w ? .fields.label,
                                            destination_url: j
                                        };
                                        (0, m.Z)(e)
                                    } : null,
                                    readMore: w
                                }) : Boolean(B) && (0, y.jsx)(c.Z, {
                                    readMore: B
                                })
                            }), _ && (0, y.jsx)(C, {
                                children: (0, y.jsx)(k.Z, {
                                    alt: F,
                                    aspectRatio: I,
                                    bg: `rgb:${O}`,
                                    fit: "pad",
                                    originalWidth: D,
                                    sources: [{
                                        breakpoint: 500,
                                        width: 800,
                                        src: _
                                    }, {
                                        breakpoint: 0,
                                        width: 360,
                                        src: _
                                    }]
                                })
                            })]
                        })]
                    })
                }
        },
        33744: (e, i, n) => {
            "use strict";
            n.d(i, {
                Z: () => s
            });
            var a = n(66468),
                t = n(74345),
                d = n(61785),
                r = n(2040),
                o = n(39101),
                l = n(61250);
            const s = e => {
                const i = (0, a.o)()({
                    fields: e.readMore.fields
                });
                return i ? (0, l.jsxs)(o.Z.Blank, {
                    extend: t.Z.link,
                    href: i,
                    children: [e.readMore.fields.text, (0, l.jsx)(r.Z, {
                        extend: t.Z.arrowIcon,
                        icon: d.Z
                    })]
                }) : null
            }
        },
        81035: (e, i, n) => {
            "use strict";
            n.d(i, {
                EC: () => m,
                J9: () => u,
                N3: () => s,
                cQ: () => p,
                e4: () => g,
                sg: () => c,
                xu: () => l
            });
            var a = n(55851),
                t = n(7862),
                d = n.n(t),
                r = n(89238);
            const o = ["GRAY_LIGHT", "GRAY_LIGHTEST", "GRAY_200", "TEAL", "TEAL_LIGHT", "TEAL_200", "RHUBARB", "RHUBARB_LIGHT", "RHUBARB_200", "WHEAT", "WHEAT_LIGHT", "WHEAT_200", "PETROL", "PETROL_LIGHT", "PETROL_200", "WHITE"],
                l = (0, a.Z)(r.ZP.box, "div"),
                s = (0, a.Z)(r.ZP.padBox, "div"),
                c = (0, a.Z)(r.ZP.column, "div"),
                m = (0, a.Z)(r.ZP.fullSizeBox, "div"),
                u = (0, a.Z)(r.ZP.innerColumn, "div"),
                g = (0, a.Z)(r.ZP.omniBox, "div"),
                p = (0, a.Z)(r.ZP.innerOmniBox, "div");
            c.propTypes = {
                color: d().oneOf(o)
            }, l.propTypes = {
                bottomMargin: d().bool,
                color: d().oneOf(o)
            }, u.propTypes = {
                align: d().oneOf(["LEFT", "RIGHT", "CENTER"])
            }
        },
        89238: (e, i, n) => {
            "use strict";
            n.d(i, {
                BZ: () => c,
                ZP: () => g,
                cc: () => o
            });
            var a = n(53623),
                t = n(34777),
                d = n(84079);
            const r = `@media (min-width: ${d.Gu}px)`,
                o = "@media (min-width: 500px)",
                l = {
                    containIntrinsicSize: "0 500px",
                    contentVisibility: "auto",
                    maxWidth: d.JN,
                    marginLeft: "auto",
                    marginRight: "auto"
                },
                s = { ...l,
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
                c = e => ({ ...l,
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
                    omniBox: s,
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
        18231: (e, i, n) => {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "websiteFeatureTeaserModule"
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
                                value: "getFeatureTeaserModule"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 1055
                }
            };
            a.loc.source = {
                body: "#@TODO: Replace with aliases when babel-plugin-import-graphql supports it\n#import '../../../../../../shared/api/helpers/ContentfulMediaObject/Image.fragment.graphql'\n#@TODO: Replace with aliases when babel-plugin-import-graphql supports it\n#import '../../../../../../shared/api/helpers/LinkItem/Link.fragment.graphql'\n#@TODO: Replace with aliases when babel-plugin-import-graphql supports it\n#import '../../../../../../shared/api/helpers/CountryAwareLinkItem/CountryAwareLinkItem.fragment.graphql'\n\nquery websiteFeatureTeaserModule(\n  $id: ID!\n  $language: ContentfulLanguage!\n  $preview: Boolean\n) {\n  module: getFeatureTeaserModule(\n    id: $id\n    locale: $language\n    preview: $preview\n  ) {\n    sys {\n      id\n    }\n    fields {\n      heading\n      text\n      backgroundImage {\n        ...Image\n      }\n      backgroundMode\n      layoutMode\n      backgroundColorImage\n      backgroundColorText\n      showCta\n      readMore {\n        ...Link\n      }\n      countryAwareReadMore {\n        ...CountryAwareLink\n      }\n      imageColumnFirst\n    }\n  }\n}\n",
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
                    var i = e.name.value;
                    return !t[i] && (t[i] = !0, !0)
                }))
            }

            function r(e, i) {
                if ("FragmentSpread" === e.kind) i.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var n = e.type;
                    "NamedType" === n.kind && i.add(n.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    r(e, i)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    r(e, i)
                })), e.definitions && e.definitions.forEach((function(e) {
                    r(e, i)
                }))
            }
            a.definitions = a.definitions.concat(d(n(96363).definitions)), a.definitions = a.definitions.concat(d(n(84493).definitions)), a.definitions = a.definitions.concat(d(n(8013).definitions));
            var o = {};

            function l(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var a = e.definitions[n];
                    if (a.name && a.name.value == i) return a
                }
            }
            a.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    r(e, i), o[e.name.value] = i
                }
            })), e.exports = a, e.exports.websiteFeatureTeaserModule = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [l(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var a = o[i] || new Set,
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
                return t.forEach((function(i) {
                    var a = l(e, i);
                    a && n.definitions.push(a)
                })), n
            }(a, "websiteFeatureTeaserModule")
        }
    }
]);