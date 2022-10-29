(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [9582], {
        87646: (e, i, n) => {
            "use strict";
            n.d(i, {
                Z: () => u
            });
            var t = n(87252),
                a = n(29901),
                d = n(55443),
                s = n(10571);
            const l = n(53623).Z.create({
                wrapper: ({
                    isMounted: e
                }) => ({
                    height: "100%",
                    ...e ? {
                        flex: "1 1 auto",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        ":focus": {
                            outline: "none"
                        }
                    } : {}
                })
            });
            var r = n(61250);
            const o = {
                accessibility: !1,
                draggable: !0,
                pageDots: !1,
                prevNextButtons: !1,
                wrapAround: !1,
                selectedAttraction: .2,
                friction: .8
            };
            class c extends a.Component {
                constructor(...e) {
                    super(...e), (0, t.Z)(this, "state", {
                        flickityReady: !1
                    }), (0, t.Z)(this, "getSliderIndex", (() => this.props.currentIndex || this.props.flickityOptions.initialIndex || 0)), (0, t.Z)(this, "createSlider", (async e => {
                        const i = (await n.e(9009).then(n.t.bind(n, 19009, 23))).default,
                            t = e || this.getSliderIndex(),
                            a = { ...o,
                                ...this.props.flickityOptions,
                                viewport: this.viewPortNode,
                                slider: this.sliderNode,
                                initialIndex: t
                            };
                        if (!this.flickityNode) return null;
                        this.flickity = new i(this.flickityNode, a), this.props.flickityRef(this.flickity), this.setState({
                            flickityReady: !0
                        })
                    })), (0, t.Z)(this, "kickstartFlickity", (() => {
                        this.flickity.reloadCells(), this.flickity.select(this.getSliderIndex()), setTimeout((() => {
                            this.flickity && this.flickity.resize()
                        }), 0)
                    })), (0, t.Z)(this, "renderPortal", (() => {
                        if (!this.state.flickityReady || !this.flickityNode) return null;
                        const e = this.flickityNode.querySelector(".flickity-slider");
                        return e ? s.createPortal(this.props.children, e) : void 0
                    }))
                }
                componentDidMount() {
                    this.createSlider()
                }
                componentWillUnmount() {
                    void 0 !== this.flickity && setTimeout(this.flickity.destroy.bind(this.flickity), 0), this.props.flickityRef()
                }
                componentDidUpdate(e, i) {
                    !i.flickityReady && this.state.flickityReady && this.kickstartFlickity(), this.props.children.length !== e.children.length && setTimeout(this.flickity.reloadCells.bind(this.flickity), 0)
                }
                render() {
                    return [(0, r.jsx)("div", {
                        className: this.props.className,
                        ref: e => this.flickityNode = e
                    }, "flickityBase"), this.renderPortal()].filter(Boolean)
                }
            }(0, t.Z)(c, "defaultProps", {
                flickityOptions: {},
                flickityRef: () => {}
            });
            const u = (0, d.Z)(l.wrapper, c)
        },
        99963: (e, i, n) => {
            "use strict";
            n.d(i, {
                Z: () => R
            });
            var t = n(29901),
                a = n(55851),
                d = n(96519),
                s = n(33083),
                l = n(22199),
                r = n(22435),
                o = n(84079),
                c = n(21045),
                u = n(38847),
                m = n(97048),
                g = n(87646),
                p = n(59144),
                v = n(87093),
                h = n(61250);
            const f = (0, a.Z)(v.Z.blogPosts, "div"),
                k = (0, a.Z)(v.Z.sliderWrapper, "div"),
                x = (0, a.Z)(v.Z.textWrap, "div"),
                y = (0, a.Z)(v.Z.text, "div"),
                b = (0, a.Z)(v.Z.tileWrap, "div"),
                N = ({
                    heading: e,
                    shouldRenderH1: i,
                    text: n
                }) => (0, h.jsxs)(x, {
                    children: [e && (0, h.jsx)(p.Z.L, {
                        extend: v.Z.title,
                        as: i ? "h1" : "h2",
                        children: e
                    }), n && (0, h.jsx)(y, {
                        children: (0, h.jsx)(c.Z, {
                            source: n
                        })
                    })]
                }),
                Z = e => {
                    const {
                        previewImage: i,
                        title: n,
                        excerpt: t,
                        hrefWithFallback: a
                    } = e.post ? .fields || {}, {
                        alt: d,
                        src: s,
                        dominantColor: r
                    } = (0, u.Z)(i);
                    return (0, h.jsx)(l.Z.Landscape, {
                        alt: d,
                        dominantColor: r,
                        excerpt: t,
                        href: a,
                        isSmall: !0,
                        shouldDisableFocusableElements: e.shouldDisableFocusableElements,
                        src: s,
                        title: n
                    }, e.post.sys.id)
                },
                S = ({
                    blogPosts: e
                }) => {
                    const i = (0, t.useContext)(s.Z),
                        n = (0, t.useRef)(null),
                        {
                            reducedMotion: a
                        } = (0, t.useContext)(d.Z),
                        l = i && !a ? g.Z : f,
                        [r, o] = (0, t.useState)(0);
                    return (0, h.jsx)(l, {
                        flickityRef: e => {
                            n.current = e, n.current && n.current.on("select", (() => {
                                void 0 !== n.current ? .selectedIndex && o(n.current.selectedIndex)
                            }))
                        },
                        flickityOptions: {
                            contain: !0
                        },
                        children: e.map(((i, n) => (0, h.jsx)(b, {
                            isLast: e.length === n + 1,
                            children: (0, h.jsx)(Z, {
                                shouldDisableFocusableElements: r !== n,
                                post: i
                            }, i.sys.id)
                        }, i.sys.id)))
                    })
                },
                R = e => {
                    const {
                        blogPosts: i,
                        fields: n,
                        shouldRenderH1: t
                    } = e, {
                        viewportWidth: a
                    } = (0, m.Z)(), {
                        heading: d,
                        text: s
                    } = n || {}, l = a < o.qA;
                    return (0, h.jsxs)(h.Fragment, {
                        children: [(d || s) && (0, h.jsx)(N, {
                            heading: d,
                            text: s,
                            shouldRenderH1: t
                        }), l ? (0, h.jsx)(k, {
                            extend: e.extend,
                            children: (0, h.jsx)(S, {
                                blogPosts: i
                            })
                        }) : (0, h.jsx)(r.Z, {
                            spacing: ["BASE"],
                            children: i.map((e => (0, h.jsx)(r.Z.Column, {
                                width: "33.33333%",
                                children: (0, h.jsx)(Z, {
                                    post: e
                                })
                            }, e.sys.id)))
                        })]
                    })
                }
        },
        42223: (e, i, n) => {
            "use strict";
            n.d(i, {
                Z: () => o
            });
            var t = n(22435),
                a = n(91778),
                d = n(19309),
                s = n(40322),
                l = n(96027),
                r = n(61250);
            const o = ({
                renderHeader: e
            }) => (0, r.jsx)(l.Box, {
                children: (0, r.jsxs)(l.InnerBox, {
                    children: [e && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(s.Z, {
                            bottom: "TIGHT",
                            children: (0, r.jsx)(d.Z.Placeloader, {
                                size: 12,
                                width: 10
                            })
                        }), (0, r.jsx)(s.Z, {
                            bottom: "TIGHT",
                            children: (0, r.jsx)(d.Z.Placeloader, {
                                size: 3,
                                width: 13
                            })
                        })]
                    }), (0, r.jsx)(t.Z, {
                        spacing: ["BASE"],
                        children: [...Array(3).keys()].map(((e, i) => (0, r.jsx)(t.Z.Column, {
                            width: "33.33333%",
                            children: (0, r.jsx)(a.Z.Landscape, {})
                        }, i)))
                    })]
                })
            })
        },
        96027: (e, i, n) => {
            "use strict";
            n.r(i), n.d(i, {
                Box: () => p,
                InnerBox: () => v,
                default: () => h
            });
            var t = n(54865),
                a = n(55851),
                d = n(47253),
                s = n(81035),
                l = (n(55587), n(22773)),
                r = n(42223),
                o = n(99963),
                c = n(25792),
                u = n.n(c),
                m = n(87093),
                g = n(61250);
            const p = (0, a.Z)(m.Z.box, s.N3),
                v = (0, a.Z)(m.Z.innerBox, "div"),
                h = e => {
                    const {
                        id: i,
                        shouldRenderH1: n
                    } = e, {
                        country: a,
                        language: s,
                        preview: c
                    } = (0, l.Z)(), {
                        data: m,
                        loading: h,
                        error: f
                    } = (0, t.a)(u(), {
                        variables: {
                            id: i,
                            language: s,
                            country: a,
                            preview: c
                        }
                    });
                    if (f) return null;
                    if (h) return (0, g.jsx)(r.Z, {
                        renderHeader: !0
                    });
                    const {
                        blogPosts: k = [],
                        backgroundColor: x
                    } = (0, d.D)(m.module.fields);
                    if (!k.length) return null;
                    const y = k.filter((({
                        fields: e
                    }) => Boolean(e.slug)));
                    return (0, g.jsxs)(p, {
                        color: x,
                        children: [!1, (0, g.jsx)(v, {
                            children: (0, g.jsx)(o.Z, {
                                blogPosts: y,
                                fields: m.module.fields,
                                shouldRenderH1: n
                            })
                        })]
                    })
                }
        },
        87093: (e, i, n) => {
            "use strict";
            n.d(i, {
                Z: () => o
            });
            var t = n(53623),
                a = n(84079);
            const d = {
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: "var(--spacing-m)",
                    paddingBottom: 0,
                    overflow: "hidden",
                    marginLeft: 0,
                    marginRight: 0,
                    [a.sJ]: {
                        paddingLeft: 0,
                        paddingRight: 0,
                        marginLeft: 0,
                        marginRight: 0
                    }
                },
                s = {
                    paddingLeft: "var(--spacing-m)",
                    paddingRight: "var(--spacing-m)",
                    [a.sJ]: {
                        paddingLeft: 0,
                        paddingRight: 0
                    }
                },
                l = { ...s
                },
                r = { ...s,
                    overflowX: "hidden"
                },
                o = t.Z.create({
                    title: {
                        maxWidth: "var(--width-2-xl)"
                    },
                    tileWrap: ({
                        isLast: e
                    }) => ({
                        marginRight: e ? void 0 : "var(--spacing-m)",
                        width: "300px"
                    }),
                    blogPosts: {
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap"
                    },
                    blogPostSlide: {
                        marginRight: "1.5em",
                        width: "300px"
                    },
                    box: d,
                    innerBox: {
                        margin: "auto",
                        maxWidth: "50em",
                        marginLeft: 0,
                        marginRight: 0
                    },
                    textWrap: l,
                    text: {
                        marginBottom: "var(--spacing-l)",
                        maxWidth: "var(--width-xl)"
                    },
                    sliderWrapper: r
                })
        },
        81035: (e, i, n) => {
            "use strict";
            n.d(i, {
                EC: () => u,
                J9: () => m,
                N3: () => o,
                cQ: () => p,
                e4: () => g,
                sg: () => c,
                xu: () => r
            });
            var t = n(55851),
                a = n(7862),
                d = n.n(a),
                s = n(89238);
            const l = ["GRAY_LIGHT", "GRAY_LIGHTEST", "GRAY_200", "TEAL", "TEAL_LIGHT", "TEAL_200", "RHUBARB", "RHUBARB_LIGHT", "RHUBARB_200", "WHEAT", "WHEAT_LIGHT", "WHEAT_200", "PETROL", "PETROL_LIGHT", "PETROL_200", "WHITE"],
                r = (0, t.Z)(s.ZP.box, "div"),
                o = (0, t.Z)(s.ZP.padBox, "div"),
                c = (0, t.Z)(s.ZP.column, "div"),
                u = (0, t.Z)(s.ZP.fullSizeBox, "div"),
                m = (0, t.Z)(s.ZP.innerColumn, "div"),
                g = (0, t.Z)(s.ZP.omniBox, "div"),
                p = (0, t.Z)(s.ZP.innerOmniBox, "div");
            c.propTypes = {
                color: d().oneOf(l)
            }, r.propTypes = {
                bottomMargin: d().bool,
                color: d().oneOf(l)
            }, m.propTypes = {
                align: d().oneOf(["LEFT", "RIGHT", "CENTER"])
            }
        },
        89238: (e, i, n) => {
            "use strict";
            n.d(i, {
                BZ: () => c,
                ZP: () => g,
                cc: () => l
            });
            var t = n(53623),
                a = n(34777),
                d = n(84079);
            const s = `@media (min-width: ${d.Gu}px)`,
                l = "@media (min-width: 500px)",
                r = {
                    containIntrinsicSize: "0 500px",
                    contentVisibility: "auto",
                    maxWidth: d.JN,
                    marginLeft: "auto",
                    marginRight: "auto"
                },
                o = { ...r,
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
                    backgroundColor: (0, a.Lq)(e.color),
                    display: "block",
                    [d.sJ]: {
                        display: "flex"
                    }
                }),
                u = {
                    height: `calc(100vh - ${d.ei})`,
                    [s]: {
                        height: `calc(100vh - ${d.Mz})`
                    }
                },
                m = {
                    margin: "auto",
                    maxWidth: "26em",
                    display: "flex",
                    [d.sJ]: {
                        maxWidth: "50em"
                    }
                },
                g = t.Z.create({
                    omniBox: o,
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
                        backgroundColor: (0, a.Lq)(e.color),
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
                    fullSizeBox: u,
                    innerColumn: e => ({
                        maxWidth: "25em",
                        marginLeft: "RIGHT" === e.align || "CENTER" === e.align ? "auto" : void 0,
                        marginRight: "CENTER" === e.align ? "auto" : void 0
                    }),
                    innerOmniBox: m
                })
        },
        25792: (e, i, n) => {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "websiteAdditionalBlogPostsModule"
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
                                value: "getAdditionalBlogPostsModule"
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
                                                value: "backgroundColor"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "blogPosts"
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
                                                                value: "title"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
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
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "excerpt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "previewImage"
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
                                                                value: "hrefWithFallback"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 773
                }
            };
            t.loc.source = {
                body: "#TODO: Replace with aliases when babel-plugin-import-graphql supports it\n#import '../../../../../../shared/api/helpers/ContentfulMediaObject/Image.fragment.graphql'\n\nquery websiteAdditionalBlogPostsModule(\n  $id: ID!\n  $language: ContentfulLanguage!\n  $country: ContentfulCountry!\n  $preview: Boolean\n) {\n  module: getAdditionalBlogPostsModule(\n    id: $id\n    locale: $language\n    country: $country\n    preview: $preview\n  ) {\n    sys {\n      id\n    }\n    fields {\n      heading\n      text\n      backgroundColor\n      blogPosts {\n        sys {\n          id\n        }\n        fields {\n          title\n          slug\n          countryCodes\n          excerpt\n          previewImage {\n            ...Image\n          }\n          hrefWithFallback\n        }\n      }\n    }\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};

            function d(e, i) {
                if ("FragmentSpread" === e.kind) i.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var n = e.type;
                    "NamedType" === n.kind && i.add(n.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    d(e, i)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    d(e, i)
                })), e.definitions && e.definitions.forEach((function(e) {
                    d(e, i)
                }))
            }
            t.definitions = t.definitions.concat(n(96363).definitions.filter((function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var i = e.name.value;
                return !a[i] && (a[i] = !0, !0)
            })));
            var s = {};

            function l(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    d(e, i), s[e.name.value] = i
                }
            })), e.exports = t, e.exports.websiteAdditionalBlogPostsModule = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [l(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var t = s[i] || new Set,
                    a = new Set,
                    d = new Set;
                for (t.forEach((function(e) {
                        d.add(e)
                    })); d.size > 0;) {
                    var r = d;
                    d = new Set, r.forEach((function(e) {
                        a.has(e) || (a.add(e), (s[e] || new Set).forEach((function(e) {
                            d.add(e)
                        })))
                    }))
                }
                return a.forEach((function(i) {
                    var t = l(e, i);
                    t && n.definitions.push(t)
                })), n
            }(t, "websiteAdditionalBlogPostsModule")
        }
    }
]);