(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [8241], {
        67726: (e, i, n) => {
            "use strict";
            n.d(i, {
                Z: () => r
            });
            var a = n(55851),
                d = n(9563);
            const t = n(53623).Z.create({
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
            var l = n(61250);
            const o = (0, a.Z)(t.loaderContainer, "div"),
                r = e => (0, l.jsx)(o, {
                    height: e.height,
                    children: (0, l.jsx)(d.Z, {})
                })
        },
        33544: (e, i, n) => {
            "use strict";
            n.r(i), n.d(i, {
                default: () => A
            });
            var a = n(46973),
                d = n(54865),
                t = n(66468),
                l = n(86981),
                o = n(95502),
                r = n(84079),
                s = n(34777),
                c = n(71934),
                m = n(81035),
                u = (n(55587), n(21106)),
                g = n(39957),
                v = n(38847),
                p = n(98361),
                k = n(97048),
                f = n(22773),
                h = n(67726),
                x = n(39101),
                S = n(54263),
                N = n(53623);
            const T = {
                    padding: "var(--spacing-xl) var(--spacing-m)",
                    position: "relative",
                    [r.OV]: {
                        padding: "var(--spacing-2-xl)"
                    }
                },
                y = {
                    flex: "0 0 100%",
                    [r.sJ]: {
                        flex: "0 0 50%"
                    }
                },
                b = {
                    margin: "0 auto 2rem",
                    maxWidth: r.Eb + "px",
                    textAlign: "center"
                },
                w = N.Z.create({
                    box: T,
                    inner: {
                        display: "flex",
                        flexWrap: "wrap"
                    },
                    column: y,
                    icon: {
                        height: "50px",
                        marginBottom: "var(--spacing-m)"
                    },
                    innerColumn: e => ({
                        margin: "var(--spacing-m) auto",
                        padding: "0 var(--spacing-m)",
                        maxWidth: "26em"
                    }),
                    columnTitle: {
                        maxWidth: "80%",
                        hyphens: "auto"
                    },
                    moduleHeading: b,
                    imageWrap: {
                        marginBottom: "var(--spacing-m)"
                    }
                });
            var L = n(42539),
                B = n.n(L),
                E = n(61250),
                Z = n(29901);
            const R = e => {
                    const i = (0, t.o)(),
                        {
                            viewportWidth: n
                        } = (0, k.Z)(),
                        {
                            column: d,
                            hasModuleTitle: l
                        } = e,
                        {
                            body: s,
                            countryAwareReadMore: m,
                            heading: f,
                            icon: h,
                            readMore: N
                        } = d ? .fields ? ? {},
                        T = N ? .fields ? ? {},
                        y = i({
                            fields: T
                        }),
                        {
                            alt: b,
                            src: L
                        } = (0, v.Z)(h),
                        {
                            css: B
                        } = (0, a.Z)(),
                        Z = `${L}?${(0,p.Z)({fit:"thumb",height:50,src:L})}`,
                        R = m ? .fields.externalLink,
                        A = R ? .includes(".pdf");
                    return (0, E.jsx)("div", {
                        className: B(w.column),
                        children: (0, E.jsxs)("div", {
                            className: B(w.innerColumn),
                            children: [L && (0, E.jsx)("div", {
                                className: B({
                                    height: 50,
                                    width: 50
                                }, w.imageWrap),
                                children: (0, E.jsx)(S.Z, {
                                    alt: b,
                                    aspectRatio: 100,
                                    extend: w.icon,
                                    height: 50,
                                    src: Z,
                                    width: 50
                                })
                            }), Boolean(f) && (0, E.jsx)("div", {
                                className: B(w.columnTitle),
                                children: (0, E.jsx)(o.Z, {
                                    as: l ? "h3" : "h2",
                                    level: n < r.Eb ? 3 : 2,
                                    bottom: "BASE",
                                    children: f
                                })
                            }), (0, E.jsx)(c.Z, {
                                children: s
                            }), m ? (0, E.jsx)(u.Z, {
                                onClick: A ? () => {
                                    const e = {
                                        event: "pdf_download_click",
                                        text: m ? .fields.label,
                                        destination_url: R
                                    };
                                    (0, g.Z)(e)
                                } : null,
                                readMore: m
                            }) : Boolean(y) && (0, E.jsx)(x.Z.Link, {
                                href: y,
                                children: T.text
                            })]
                        })
                    })
                },
                A = e => {
                    const {
                        language: i,
                        preview: n
                    } = (0, f.Z)(), {
                        css: t
                    } = (0, a.Z)(), {
                        data: r,
                        loading: c,
                        error: u
                    } = (0, d.a)(B(), {
                        variables: {
                            id: e.id,
                            language: i,
                            preview: n
                        }
                    });
                    if (u) return null;
                    if (c) return (0, E.jsx)(h.Z, {});
                    const g = r.module ? .fields ? .columns ? ? [],
                        {
                            heading: v,
                            backgroundColor: p
                        } = r.module ? .fields ? ? {};
                    return (0, E.jsxs)("div", {
                        className: t({
                            backgroundColor: (0, s.Lq)(p)
                        }, w.box),
                        children: [!1, Boolean(v) && (0, E.jsx)("div", {
                            className: t(w.moduleHeading),
                            children: (0, E.jsx)(o.Z, {
                                as: e.shouldRenderH1 ? "h1" : "h2",
                                level: 1,
                                isCentered: !0,
                                isExtended: !0,
                                children: v
                            })
                        }), (0, E.jsx)(m.cQ, {
                            children: (0, E.jsx)(m.cQ, {
                                extend: w.inner,
                                children: g.filter(l.s).map((i => (0, Z.createElement)(R, { ...e,
                                    hasModuleTitle: Boolean(v),
                                    column: i,
                                    key: i.sys.id
                                })))
                            })
                        })]
                    })
                }
        },
        81035: (e, i, n) => {
            "use strict";
            n.d(i, {
                EC: () => m,
                J9: () => u,
                N3: () => s,
                cQ: () => v,
                e4: () => g,
                sg: () => c,
                xu: () => r
            });
            var a = n(55851),
                d = n(7862),
                t = n.n(d),
                l = n(89238);
            const o = ["GRAY_LIGHT", "GRAY_LIGHTEST", "GRAY_200", "TEAL", "TEAL_LIGHT", "TEAL_200", "RHUBARB", "RHUBARB_LIGHT", "RHUBARB_200", "WHEAT", "WHEAT_LIGHT", "WHEAT_200", "PETROL", "PETROL_LIGHT", "PETROL_200", "WHITE"],
                r = (0, a.Z)(l.ZP.box, "div"),
                s = (0, a.Z)(l.ZP.padBox, "div"),
                c = (0, a.Z)(l.ZP.column, "div"),
                m = (0, a.Z)(l.ZP.fullSizeBox, "div"),
                u = (0, a.Z)(l.ZP.innerColumn, "div"),
                g = (0, a.Z)(l.ZP.omniBox, "div"),
                v = (0, a.Z)(l.ZP.innerOmniBox, "div");
            c.propTypes = {
                color: t().oneOf(o)
            }, r.propTypes = {
                bottomMargin: t().bool,
                color: t().oneOf(o)
            }, u.propTypes = {
                align: t().oneOf(["LEFT", "RIGHT", "CENTER"])
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
                d = n(34777),
                t = n(84079);
            const l = `@media (min-width: ${t.Gu}px)`,
                o = "@media (min-width: 500px)",
                r = {
                    containIntrinsicSize: "0 500px",
                    contentVisibility: "auto",
                    maxWidth: t.JN,
                    marginLeft: "auto",
                    marginRight: "auto"
                },
                s = { ...r,
                    margin: "0 auto",
                    paddingBottom: "var(--spacing-xl)",
                    paddingLeft: "var(--spacing-m)",
                    paddingRight: "var(--spacing-m)",
                    paddingTop: "var(--spacing-xl)",
                    [t.OV]: {
                        paddingBottom: "var(--spacing-l)",
                        paddingLeft: "var(--spacing-2-xl)",
                        paddingRight: "var(--spacing-2-xl)",
                        paddingTop: "var(--spacing-l)"
                    }
                },
                c = e => ({ ...r,
                    maxWidth: "100%",
                    marginBottom: e.bottomMargin ? "var(--spacing-2-xs)" : void 0,
                    backgroundColor: (0, d.Lq)(e.color),
                    display: "block",
                    [t.sJ]: {
                        display: "flex"
                    }
                }),
                m = {
                    height: `calc(100vh - ${t.ei})`,
                    [l]: {
                        height: `calc(100vh - ${t.Mz})`
                    }
                },
                u = {
                    margin: "auto",
                    maxWidth: "26em",
                    display: "flex",
                    [t.sJ]: {
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
                        [t.sJ]: {
                            paddingTop: "var(--spacing-2-xl)",
                            paddingRight: "var(--spacing-2-xl)",
                            paddingBottom: "var(--spacing-2-xl)",
                            paddingLeft: "var(--spacing-2-xl)"
                        }
                    }),
                    column: e => ({
                        backgroundColor: (0, d.Lq)(e.color),
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
        42539: (e, i, n) => {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "websiteTwoByTwoModule"
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
                                value: "getTwoByTwoModule"
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
                                                value: "backgroundColor"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "columns"
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
                                                                value: "icon"
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
                                                                value: "heading"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "body"
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
                    end: 940
                }
            };
            a.loc.source = {
                body: "#@TODO: Replace with aliases when babel-plugin-import-graphql supports it\n#import '../../../../../../shared/api/helpers/LinkItem/Link.fragment.graphql'\n#import '../../../../../../shared/api/helpers/CountryAwareLinkItem/CountryAwareLinkItem.fragment.graphql'\n\nquery websiteTwoByTwoModule(\n  $id: ID!\n  $language: ContentfulLanguage!\n  $preview: Boolean\n) {\n  module: getTwoByTwoModule(id: $id, locale: $language, preview: $preview) {\n    sys {\n      id\n    }\n    fields {\n      heading\n      backgroundColor\n      columns {\n        sys {\n          id\n        }\n        fields {\n          icon {\n            sys {\n              id\n            }\n            fields {\n              file {\n                url\n              }\n            }\n          }\n          heading\n          body\n          readMore {\n            ...Link\n          }\n          countryAwareReadMore {\n            ...CountryAwareLink\n          }\n        }\n      }\n    }\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var d = {};

            function t(e) {
                return e.filter((function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var i = e.name.value;
                    return !d[i] && (d[i] = !0, !0)
                }))
            }

            function l(e, i) {
                if ("FragmentSpread" === e.kind) i.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var n = e.type;
                    "NamedType" === n.kind && i.add(n.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    l(e, i)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    l(e, i)
                })), e.definitions && e.definitions.forEach((function(e) {
                    l(e, i)
                }))
            }
            a.definitions = a.definitions.concat(t(n(84493).definitions)), a.definitions = a.definitions.concat(t(n(8013).definitions));
            var o = {};

            function r(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var a = e.definitions[n];
                    if (a.name && a.name.value == i) return a
                }
            }
            a.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    l(e, i), o[e.name.value] = i
                }
            })), e.exports = a, e.exports.websiteTwoByTwoModule = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [r(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var a = o[i] || new Set,
                    d = new Set,
                    t = new Set;
                for (a.forEach((function(e) {
                        t.add(e)
                    })); t.size > 0;) {
                    var l = t;
                    t = new Set, l.forEach((function(e) {
                        d.has(e) || (d.add(e), (o[e] || new Set).forEach((function(e) {
                            t.add(e)
                        })))
                    }))
                }
                return d.forEach((function(i) {
                    var a = r(e, i);
                    a && n.definitions.push(a)
                })), n
            }(a, "websiteTwoByTwoModule")
        }
    }
]);