(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4846], {
        67726: (e, i, n) => {
            "use strict";
            n.d(i, {
                Z: () => r
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
            var o = n(61250);
            const l = (0, a.Z)(d.loaderContainer, "div"),
                r = e => (0, o.jsx)(l, {
                    height: e.height,
                    children: (0, o.jsx)(t.Z, {})
                })
        },
        81724: (e, i, n) => {
            "use strict";
            n.r(i), n.d(i, {
                default: () => C
            });
            var a = n(55851),
                t = n(54865),
                d = n(86981),
                o = n(81035),
                l = (n(55587), n(38847)),
                r = n(22773),
                s = n(67726),
                c = n(59144),
                m = n(94456),
                g = n(39101),
                u = n(53623),
                v = n(84079);
            const p = {
                    paddingBottom: 0,
                    maxWidth: "100%",
                    [v.sJ]: {
                        paddingBottom: 0
                    }
                },
                f = {
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    width: "100%"
                },
                k = {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    minHeight: "var(--spacing-5-xl)",
                    paddingLeft: "var(--spacing-xl)",
                    paddingRight: "var(--spacing-xl)",
                    paddingBottom: "var(--spacing-2-xl)",
                    textAlign: "center",
                    width: "50%",
                    [v.sJ]: {
                        width: "25%"
                    }
                },
                h = { ...f
                },
                x = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 var(--spacing-2-xs)",
                    width: "25%",
                    [v.sJ]: {
                        width: "12.5%"
                    }
                },
                S = u.Z.create({
                    box: p,
                    dataCaption: {
                        fontWeight: 500,
                        lineHeight: 1.4
                    },
                    dataItem: k,
                    dataTitle: {
                        marginBottom: 0
                    },
                    innerBox: e => ({ ...f,
                        maxWidth: v.JN,
                        marginLeft: "auto",
                        marginRight: "auto",
                        color: e.hasLightBackground ? "var(--typography-default)" : "var(--typography-default-inverted)"
                    }),
                    logo: {
                        marginBottom: "var(--spacing-m)",
                        maxWidth: "100%",
                        maxHeight: "2.8em"
                    },
                    logoContainer: x,
                    logosWrapper: h
                });
            var N = n(94149),
                L = n.n(N),
                T = n(61250);
            const y = (0, a.Z)(S.innerBox, "div"),
                b = (0, a.Z)(S.dataItem, "div"),
                B = (0, a.Z)(S.dataCaption, "div"),
                Z = (0, a.Z)(S.logosWrapper, "div"),
                w = (0, a.Z)(S.logoContainer, "div"),
                C = e => {
                    const {
                        language: i,
                        preview: n
                    } = (0, r.Z)(), {
                        data: a,
                        loading: u,
                        error: v
                    } = (0, t.a)(L(), {
                        variables: {
                            id: e.id,
                            language: i,
                            preview: n
                        }
                    });
                    if (v) return null;
                    if (u) return (0, T.jsx)(s.Z, {});
                    const {
                        fields: p
                    } = a.module || {}, f = (p.featuredText || []).filter(d.s), k = ((e, i) => {
                        if (e) {
                            const i = (e || []).filter((e => (0, d.s)(e) && Boolean(e.fields.file)));
                            return i.map((e => (0, l.Z)(e)))
                        }
                        const n = (i || []).filter((e => (0, d.s)(e) && Boolean(e.fields.link.fields.externalLink)));
                        return n.map((e => ({
                            href: e.fields.link.fields.externalLink,
                            ...(0, l.Z)(e)
                        })))
                    })(p.logos, p.logoLinks), h = !p ? .backgroundColor || p ? .backgroundColor.endsWith("_LIGHT");
                    return (0, T.jsxs)(o.N3, {
                        extend: S.box,
                        color: p ? .backgroundColor,
                        children: [!1, f.length > 0 && (0, T.jsx)(y, {
                            hasLightBackground: h,
                            children: f.map((e => (0, T.jsxs)(b, {
                                children: [(0, T.jsx)(c.Z.M, {
                                    extend: S.dataTitle,
                                    as: "strong",
                                    children: e.fields.featuredTitle
                                }), (0, T.jsx)(B, {
                                    children: e.fields.caption
                                })]
                            }, e.sys.id)))
                        }), k.length > 0 && (0, T.jsx)(Z, {
                            children: k.map((e => (0, T.jsx)(w, {
                                children: e.href ? (0, T.jsx)(g.Z.Link, {
                                    href: e.href,
                                    children: (0, T.jsx)(m.Z, {
                                        extend: S.logo,
                                        src: e.src,
                                        alt: e.alt
                                    })
                                }) : (0, T.jsx)(m.Z, {
                                    extend: S.logo,
                                    src: e.src,
                                    alt: e.alt
                                })
                            }, e.src)))
                        })]
                    })
                }
        },
        81035: (e, i, n) => {
            "use strict";
            n.d(i, {
                EC: () => m,
                J9: () => g,
                N3: () => s,
                cQ: () => v,
                e4: () => u,
                sg: () => c,
                xu: () => r
            });
            var a = n(55851),
                t = n(7862),
                d = n.n(t),
                o = n(89238);
            const l = ["GRAY_LIGHT", "GRAY_LIGHTEST", "GRAY_200", "TEAL", "TEAL_LIGHT", "TEAL_200", "RHUBARB", "RHUBARB_LIGHT", "RHUBARB_200", "WHEAT", "WHEAT_LIGHT", "WHEAT_200", "PETROL", "PETROL_LIGHT", "PETROL_200", "WHITE"],
                r = (0, a.Z)(o.ZP.box, "div"),
                s = (0, a.Z)(o.ZP.padBox, "div"),
                c = (0, a.Z)(o.ZP.column, "div"),
                m = (0, a.Z)(o.ZP.fullSizeBox, "div"),
                g = (0, a.Z)(o.ZP.innerColumn, "div"),
                u = (0, a.Z)(o.ZP.omniBox, "div"),
                v = (0, a.Z)(o.ZP.innerOmniBox, "div");
            c.propTypes = {
                color: d().oneOf(l)
            }, r.propTypes = {
                bottomMargin: d().bool,
                color: d().oneOf(l)
            }, g.propTypes = {
                align: d().oneOf(["LEFT", "RIGHT", "CENTER"])
            }
        },
        89238: (e, i, n) => {
            "use strict";
            n.d(i, {
                BZ: () => c,
                ZP: () => u,
                cc: () => l
            });
            var a = n(53623),
                t = n(34777),
                d = n(84079);
            const o = `@media (min-width: ${d.Gu}px)`,
                l = "@media (min-width: 500px)",
                r = {
                    containIntrinsicSize: "0 500px",
                    contentVisibility: "auto",
                    maxWidth: d.JN,
                    marginLeft: "auto",
                    marginRight: "auto"
                },
                s = { ...r,
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
                c = e => ({ ...r,
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
                    [o]: {
                        height: `calc(100vh - ${d.Mz})`
                    }
                },
                g = {
                    margin: "auto",
                    maxWidth: "26em",
                    display: "flex",
                    [d.sJ]: {
                        maxWidth: "50em"
                    }
                },
                u = a.Z.create({
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
                        [l]: {
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
                    innerOmniBox: g
                })
        },
        94149: (e, i, n) => {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "websiteFactsModule"
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
                                value: "getFactsModule"
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
                                                value: "featuredText"
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
                                                                value: "featuredTitle"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "caption"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "logos"
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
                                                value: "logoLinks"
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
                                                                value: "image"
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
                                                                value: "alt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "link"
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
                                                        }]
                                                    }
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
                    end: 829
                }
            };
            a.loc.source = {
                body: "#import '../../../../../../shared/api/helpers/ContentfulMediaObject/Image.fragment.graphql'\n#import '../../../../../../shared/api/helpers/CountryAwareLinkItem/CountryAwareLinkItem.fragment.graphql'\n\nquery websiteFactsModule(\n  $id: ID!\n  $language: ContentfulLanguage!\n  $preview: Boolean\n) {\n  module: getFactsModule(id: $id, locale: $language, preview: $preview) {\n    sys {\n      id\n    }\n    fields {\n      featuredText {\n        sys {\n          id\n        }\n        fields {\n          featuredTitle\n          caption\n        }\n      }\n      logos {\n        ...Image\n      }\n      logoLinks {\n        sys {\n          id\n        }\n        fields {\n          image {\n            ...Image\n          }\n          alt\n          link {\n            ...CountryAwareLink\n          }\n        }\n      }\n      backgroundColor\n    }\n  }\n}\n",
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

            function o(e, i) {
                if ("FragmentSpread" === e.kind) i.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var n = e.type;
                    "NamedType" === n.kind && i.add(n.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    o(e, i)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    o(e, i)
                })), e.definitions && e.definitions.forEach((function(e) {
                    o(e, i)
                }))
            }
            a.definitions = a.definitions.concat(d(n(96363).definitions)), a.definitions = a.definitions.concat(d(n(8013).definitions));
            var l = {};

            function r(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var a = e.definitions[n];
                    if (a.name && a.name.value == i) return a
                }
            }
            a.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    o(e, i), l[e.name.value] = i
                }
            })), e.exports = a, e.exports.websiteFactsModule = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [r(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var a = l[i] || new Set,
                    t = new Set,
                    d = new Set;
                for (a.forEach((function(e) {
                        d.add(e)
                    })); d.size > 0;) {
                    var o = d;
                    d = new Set, o.forEach((function(e) {
                        t.has(e) || (t.add(e), (l[e] || new Set).forEach((function(e) {
                            d.add(e)
                        })))
                    }))
                }
                return t.forEach((function(i) {
                    var a = r(e, i);
                    a && n.definitions.push(a)
                })), n
            }(a, "websiteFactsModule")
        }
    }
]);