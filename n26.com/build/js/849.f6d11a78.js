"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [849, 8069], {
        61237: (i, t, e) => {
            e.d(t, {
                Z: () => n
            });
            var r = e(61250);
            const n = i => (0, r.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 32 32",
                ...i,
                children: (0, r.jsx)("path", {
                    d: "M23.23 32a1.53 1.53 0 0 0 1.08-2.61L10.93 16 24.32 2.61A1.53 1.53 0 0 0 22.15.45L7.68 14.92a1.53 1.53 0 0 0 0 2.16l14.47 14.47a1.53 1.53 0 0 0 1.08.45z"
                })
            })
        },
        49455: (i, t, e) => {
            e.d(t, {
                Z: () => L
            });
            var r = e(29901),
                n = e(39422),
                o = e(7862),
                s = e.n(o),
                a = e(12745),
                d = e(24654),
                l = e(78875),
                c = e(33059),
                p = e(19314),
                h = e(82636),
                g = e(94456),
                u = e(39101),
                m = e(61250);
            const x = i => {
                    const t = i.type || i.nodeType,
                        e = i.components[t];
                    if (e) return "string" == typeof e ? e : t => (0, m.jsx)(e, { ...t,
                        node: i
                    });
                    switch (t) {
                        case a.BLOCKS.HEADING_2:
                            return ({
                                children: i
                            }) => (0, m.jsx)(h.Z.M, {
                                as: "h2",
                                children: i
                            });
                        case a.BLOCKS.HEADING_3:
                            return ({
                                children: i
                            }) => (0, m.jsx)(h.Z.S, {
                                as: "h3",
                                children: i
                            });
                        case a.BLOCKS.PARAGRAPH:
                            return "p";
                        case a.BLOCKS.UL_LIST:
                            return "ul";
                        case a.BLOCKS.OL_LIST:
                            return "ol";
                        case a.BLOCKS.LIST_ITEM:
                            return "li";
                        case a.BLOCKS.QUOTE:
                            return "blockquote";
                        case a.BLOCKS.HR:
                            return "hr";
                        case a.INLINES.HYPERLINK:
                            return ({
                                children: t
                            }) => (0, m.jsx)(u.Z.Link, {
                                openInBrowser: !0,
                                to: i.data.uri,
                                children: t
                            });
                        case a.INLINES.ENTRY_HYPERLINK:
                            return ({
                                children: t
                            }) => {
                                const e = (0, n.UO)(),
                                    r = (0, d.w)({
                                        slugPath: "slug",
                                        routeParams: e,
                                        fields: { ...i.data.target.fields,
                                            pageLink: i.data.target
                                        }
                                    });
                                return (0, m.jsx)(u.Z.Link, {
                                    to: r,
                                    children: t
                                })
                            };
                        case a.MARKS.BOLD:
                            return "strong";
                        case a.MARKS.ITALIC:
                            return "em";
                        case "text":
                            return () => (0, m.jsx)(f, { ...i
                            });
                        case a.BLOCKS.EMBEDDED_ASSET:
                            {
                                const t = i.data ? .target ? .fields ? .file ? .url || i.fields ? .file ? .url,
                                    e = i.data ? .target ? .fields ? .description || i.data ? .target ? .fields ? .title || i.fields ? .file ? .title || "";
                                return t ? () => (0, m.jsx)(g.Z, {
                                    src: t + "?w=1050&fit=thumb",
                                    alt: e
                                }) : null
                            }
                        case a.BLOCKS.EMBEDDED_ENTRY:
                            {
                                const t = !(0, l.x)(i.fields) && Object.values(i.fields).find((i => i.nodeType === a.BLOCKS.DOCUMENT));
                                return t ? () => (0, m.jsx)(k, {
                                    ast: t
                                }) : null
                            }
                        case a.BLOCKS.TABLE:
                            return p.iA;
                        case a.BLOCKS.TABLE_CELL:
                            return p.Td;
                        case a.BLOCKS.TABLE_HEADER_CELL:
                            return p.Th;
                        case a.BLOCKS.TABLE_ROW:
                            return p.Tr;
                        case a.BLOCKS.DOCUMENT:
                        case a.INLINES.ENTRY_HYPERLINK + "_DEACTIVATED":
                        default:
                            return r.Fragment
                    }
                },
                f = ({
                    marks: i,
                    components: t,
                    value: e
                }) => (i || []).reduce(((i, e, r) => {
                    const n = x({ ...e,
                        components: t
                    });
                    return (0, m.jsx)(n, {
                        children: (0, c.s)(i)
                    }, r)
                }), e),
                v = i => {
                    const t = x(i),
                        e = [a.BLOCKS.HR, a.BLOCKS.EMBEDDED_ASSET],
                        r = i.type || i.nodeType,
                        n = e.includes(r);
                    return t ? n ? (0, m.jsx)(t, {}) : (0, m.jsx)(t, {
                        children: (0, m.jsx)(y, { ...i
                        })
                    }) : (0, m.jsx)(y, { ...i
                    })
                },
                y = ({
                    content: i,
                    components: t
                }) => (i || []).map(((i, e) => (0, r.createElement)(v, { ...i,
                    key: e,
                    components: t
                }))),
                k = ({
                    ast: i,
                    components: t
                }) => (0, m.jsx)(v, { ...i,
                    components: t
                });
            k.propTypes = {
                ast: s().object.isRequired,
                components: s().object
            }, k.defaultProps = {
                components: {}
            };
            const L = k
        },
        87646: (i, t, e) => {
            e.d(t, {
                Z: () => p
            });
            var r = e(87252),
                n = e(29901),
                o = e(55443),
                s = e(10571);
            const a = e(53623).Z.create({
                wrapper: ({
                    isMounted: i
                }) => ({
                    height: "100%",
                    ...i ? {
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
            var d = e(61250);
            const l = {
                accessibility: !1,
                draggable: !0,
                pageDots: !1,
                prevNextButtons: !1,
                wrapAround: !1,
                selectedAttraction: .2,
                friction: .8
            };
            class c extends n.Component {
                constructor(...i) {
                    super(...i), (0, r.Z)(this, "state", {
                        flickityReady: !1
                    }), (0, r.Z)(this, "getSliderIndex", (() => this.props.currentIndex || this.props.flickityOptions.initialIndex || 0)), (0, r.Z)(this, "createSlider", (async i => {
                        const t = (await e.e(9009).then(e.t.bind(e, 19009, 23))).default,
                            r = i || this.getSliderIndex(),
                            n = { ...l,
                                ...this.props.flickityOptions,
                                viewport: this.viewPortNode,
                                slider: this.sliderNode,
                                initialIndex: r
                            };
                        if (!this.flickityNode) return null;
                        this.flickity = new t(this.flickityNode, n), this.props.flickityRef(this.flickity), this.setState({
                            flickityReady: !0
                        })
                    })), (0, r.Z)(this, "kickstartFlickity", (() => {
                        this.flickity.reloadCells(), this.flickity.select(this.getSliderIndex()), setTimeout((() => {
                            this.flickity && this.flickity.resize()
                        }), 0)
                    })), (0, r.Z)(this, "renderPortal", (() => {
                        if (!this.state.flickityReady || !this.flickityNode) return null;
                        const i = this.flickityNode.querySelector(".flickity-slider");
                        return i ? s.createPortal(this.props.children, i) : void 0
                    }))
                }
                componentDidMount() {
                    this.createSlider()
                }
                componentWillUnmount() {
                    void 0 !== this.flickity && setTimeout(this.flickity.destroy.bind(this.flickity), 0), this.props.flickityRef()
                }
                componentDidUpdate(i, t) {
                    !t.flickityReady && this.state.flickityReady && this.kickstartFlickity(), this.props.children.length !== i.children.length && setTimeout(this.flickity.reloadCells.bind(this.flickity), 0)
                }
                render() {
                    return [(0, d.jsx)("div", {
                        className: this.props.className,
                        ref: i => this.flickityNode = i
                    }, "flickityBase"), this.renderPortal()].filter(Boolean)
                }
            }(0, r.Z)(c, "defaultProps", {
                flickityOptions: {},
                flickityRef: () => {}
            });
            const p = (0, o.Z)(a.wrapper, c)
        },
        19314: (i, t, e) => {
            e.d(t, {
                iA: () => b,
                Td: () => C,
                Th: () => R,
                Tr: () => B,
                ZP: () => I
            });
            var r = e(29901),
                n = e(7862),
                o = e.n(n),
                s = e(74811),
                a = e(55851),
                d = e(87548),
                l = e(83858),
                c = e(97048),
                p = e(73601),
                h = e(4028),
                g = e(39101),
                u = e(96937),
                m = e(53623),
                x = e(48337),
                f = e(46814);
            const v = {
                    borderCollapse: "collapse",
                    fontSize: x.u[3],
                    marginBottom: "var(--spacing-l)",
                    width: "calc(100% - 1px)"
                },
                y = { ...f.m8,
                    textAlign: "left"
                },
                k = m.Z.create({
                    box: f.BZ,
                    gradient: f.FL,
                    innerBox: {
                        padding: "0 0 var(--spacing-l) 0"
                    },
                    table: v,
                    caption: f.VJ,
                    thead: f.r,
                    tr: f.tr,
                    th: y,
                    stickyTh: ({
                        isFirst: i,
                        hasBanner: t,
                        isSmall: e
                    }) => ({ ...i ? f.m8 : f.e9,
                        boxShadow: i ? void 0 : "0 1px 0 var(--border-primary-gray)",
                        backgroundColor: "var(--background-screen-default)",
                        position: "sticky",
                        top: e ? 0 : (0, f.CF)(t, e),
                        textAlign: "left"
                    }),
                    td: i => ({ ...f.e9,
                        border: "1px solid var(--border-primary-gray)",
                        fontWeight: i.isBold ? 500 : void 0,
                        "> p:last-child": {
                            marginBottom: 0
                        }
                    }),
                    icon: f.qv,
                    arrow: f.x7
                });
            var L = e(61250);
            (0, a.Z)(k.innerBox, "div");
            const b = (0, a.Z)(k.table, "table", ["role"]),
                Z = (0, a.Z)(k.caption, "caption"),
                B = (0, a.Z)(k.tr, "tr"),
                S = (0, a.Z)(k.th, "th", ["scope", "aria-sort"]),
                C = (0, a.Z)(k.td, "td"),
                T = (0, a.Z)(k.thead, "thead"),
                E = (0, a.Z)(k.stickyTh, "th", ["scope", "aria-sort"]),
                j = (0, a.Z)(k.arrow, "span"),
                R = i => (0, L.jsx)(l.Cr.Provider, {
                    value: {
                        isWithinWrapper: !0
                    },
                    children: (0, L.jsx)(S, {
                        children: i.children
                    })
                }),
                w = i => {
                    const {
                        data: t,
                        isStriped: e,
                        isSortable: n,
                        withHeadingColumn: o
                    } = i, a = (0, p.Z)(), {
                        viewportWidth: l
                    } = (0, c.Z)(), m = (0, r.useRef)(), {
                        banner: x
                    } = (0, r.useContext)(d.Z), {
                        csv: f,
                        heading: v
                    } = t ? .dataTable ? .fields ? ? {}, y = (0, s.n)(f), {
                        items: k,
                        requestSort: S,
                        sortConfig: w
                    } = (0, u.Z)(y);
                    if (y.length < 1) return null;
                    const I = i => {
                            if (w) return w.key === i ? w.direction : void 0
                        },
                        A = l < 600,
                        O = Object.keys(y[0]),
                        W = a("data_table.sort_button_label");
                    return (0, L.jsxs)(b, {
                        innerRef: m,
                        role: "grid",
                        children: [v && (0, L.jsx)(Z, {
                            children: v
                        }), (0, L.jsx)(T, {
                            children: (0, L.jsx)(B, {
                                children: O.map(((i, t) => {
                                    const e = (i => {
                                            const t = I(i);
                                            return t ? "ascending" === t ? "\u2191" : "\u2193" : "\u2195"
                                        })(i),
                                        r = e && n;
                                    return (0, L.jsx)(E, {
                                        "aria-sort": I(i) || "none",
                                        hasBanner: Boolean(x),
                                        isFirst: 0 === t,
                                        isSmall: A,
                                        scope: "col",
                                        title: i,
                                        children: n ? (0, L.jsx)(g.Z.Blank, {
                                            onClick: () => S(i),
                                            children: r && (0, L.jsxs)(L.Fragment, {
                                                children: [(0, L.jsx)(h.Z, {
                                                    children: W
                                                }), (0, L.jsx)(j, {
                                                    children: e
                                                })]
                                            })
                                        }) : i
                                    }, i)
                                }))
                            })
                        }), (0, L.jsx)("tbody", {
                            children: k.map(((i, t) => {
                                const r = Object.values(i);
                                return (0, L.jsx)(B, {
                                    isStriped: e,
                                    children: r.map(((i, t) => {
                                        const e = o ? C : R;
                                        return 0 === t ? (0, L.jsx)(e, {
                                            children: " " + i + " "
                                        }, t) : (0, L.jsx)(C, {
                                            isBold: !o,
                                            children: i
                                        }, t)
                                    }))
                                }, t)
                            }))
                        })]
                    })
                };
            w.defaultProps = {
                isStriped: !0,
                isSortable: !0,
                withHeadingColumn: !1
            }, w.propTypes = {
                isStriped: o().bool,
                isSortable: o().bool,
                withHeadingColumn: o().bool
            };
            const I = w
        },
        46814: (i, t, e) => {
            e.d(t, {
                BZ: () => s,
                CF: () => o,
                FL: () => a,
                VJ: () => d,
                e9: () => p,
                m8: () => h,
                qv: () => g,
                r: () => l,
                tr: () => c,
                x7: () => u
            });
            var r = e(84079),
                n = e(86929);
            const o = (i, t) => {
                    const e = t ? r.ei : r.Mz;
                    return i ? parseInt(e, 10) + parseInt(r.wt, 10) + "px" : e
                },
                s = i => ({
                    overflow: i.isSmall ? "auto" : void 0
                }),
                a = {
                    position: "relative",
                    ":after": {
                        background: "linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
                        content: '""',
                        display: "block",
                        height: "100%",
                        pointerEvents: "none",
                        position: "absolute",
                        right: 0,
                        top: 0,
                        width: "70px"
                    }
                },
                d = { ...n.jy
                },
                l = {
                    lineHeight: 1.2
                },
                c = i => ({ ...i.isStriped ? {
                        ":nth-child(odd) > td": {
                            backgroundColor: "var(--background-container-tertiary-teal)"
                        }
                    } : {}
                }),
                p = {
                    padding: "var(--spacing-xs) var(--spacing-m)"
                },
                h = {
                    padding: "var(--spacing-xs) var(--spacing-m) var(--spacing-xs) var(--spacing-m)"
                },
                g = {
                    color: "var(--typography-interactive-primary-teal-consistent)",
                    fontSize: "170%"
                },
                u = {
                    color: "var(--typography-secondary-default)",
                    position: "absolute",
                    right: "5px",
                    top: "50%",
                    transform: "translateY(-50%)"
                }
        },
        96937: (i, t, e) => {
            e.d(t, {
                Z: () => n
            });
            var r = e(29901);
            const n = (i = [], t = null) => {
                const [e, n] = (0, r.useState)(t);
                return {
                    items: (0, r.useMemo)((() => {
                        const t = [...i];
                        return null !== e && t.sort(((i, t) => i[e.key] < t[e.key] ? "ascending" === e.direction ? -1 : 1 : i[e.key] > t[e.key] ? "ascending" === e.direction ? 1 : -1 : 0)), t
                    }), [i, e]),
                    requestSort: i => {
                        let t = "descending";
                        e && e.key === i && "descending" === e.direction && (t = "ascending"), n({
                            key: i,
                            direction: t
                        })
                    },
                    sortConfig: e
                }
            }
        },
        98820: (i, t, e) => {
            e.d(t, {
                Z: () => p
            });
            var r = e(7862),
                n = e.n(r),
                o = e(55443),
                s = e(34197);
            const a = e(53623).Z.create({
                videoComponent: {
                    display: "block",
                    height: "100%",
                    marginBottom: 0,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%"
                },
                customVideo: i => ({
                    display: "block",
                    height: i.isBackgroundMode ? "100%" : void 0,
                    margin: "0 auto",
                    maxWidth: "100%",
                    objectFit: i.isBackgroundMode ? "cover" : void 0,
                    width: i.isBackgroundMode ? "100%" : void 0
                })
            });
            var d = e(61250);
            const l = (0, o.Z)(a.customVideo, "video"),
                c = i => (0, d.jsx)(s.Z, {
                    extend: a.videoComponent,
                    playsInline: i.playsInline,
                    isGif: i.isGif,
                    loop: i.loop,
                    renderVideo: t => (0, d.jsx)(l, { ...t,
                        isBackgroundMode: i.isBackgroundMode
                    }),
                    src: i.src
                });
            c.defaultProps = {
                isGif: !0,
                loop: !0
            }, c.propTypes = {
                isBackgroundMode: n().bool,
                isGif: n().bool,
                loop: n().bool,
                src: n().string.isRequired,
                playsInline: n().bool
            };
            const p = c
        },
        53348: (i, t, e) => {
            e.d(t, {
                Z: () => s
            });
            var r = e(46973);
            const n = e(53623).Z.create({
                blockquote: ({
                    onLightBackground: i = !0
                }) => ({
                    borderLeftWidth: "5px",
                    borderLeftStyle: "solid",
                    borderLeftColor: i ? "var(--typography-light)" : "var(--typography-primary-inverted)",
                    color: i ? "var(--typography-light)" : "var(--typography-primary-inverted)",
                    marginLeft: 0,
                    paddingLeft: "var(--spacing-s)"
                })
            });
            var o = e(61250);
            const s = ({
                children: i,
                onLightBackground: t
            }) => {
                const {
                    css: e
                } = (0, r.Z)({
                    onLightBackground: t
                });
                return (0, o.jsx)("blockquote", {
                    className: e(n.blockquote),
                    children: i
                })
            }
        },
        50745: (i, t, e) => {
            e.d(t, {
                Z: () => F
            });
            var r = e(29901),
                n = e(55851),
                o = e(86981),
                s = e(96519),
                a = e(33083),
                d = e(84079),
                l = e(77248),
                c = e(34197),
                p = e(38847),
                h = e(97048),
                g = e(73601),
                u = e(4028),
                m = e(87646),
                x = e(94456),
                f = e(61785),
                v = e(61237),
                y = e(2040),
                k = e(39101),
                L = e(1712),
                b = e(53623);
            const Z = `calc(100vh - ${1.5*parseInt(d.Mz,10)}px)`,
                B = `calc(100vh - ${d.ei})`,
                S = `@media (min-width: ${d.Eb}px) and (max-width: ${d.E0}px)`,
                C = `@media (min-width: ${d.Eb}px)`,
                T = {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    borderRadius: "var(--border-radius-half)",
                    display: "inline-block",
                    position: "absolute",
                    top: "50%",
                    transform: "scale(0.8) translateY(-50%)",
                    height: "2.75em",
                    width: "2.75em",
                    zIndex: d.FP
                },
                E = { ...T,
                    right: "0.5em"
                },
                j = { ...T,
                    left: "0.5em"
                },
                R = b.Z.create({
                    next: E,
                    prev: j,
                    image: i => ({
                        height: i.isFullWidth ? Z : i.isSliderImage ? "100%" : "auto",
                        objectFit: "cover",
                        width: "100%",
                        [C]: {
                            height: "35em",
                            objectFit: "contain"
                        },
                        [d.U$]: {
                            width: "100%",
                            height: i.isFullWidth ? B : void 0
                        }
                    }),
                    arrowIcon: {
                        position: "absolute",
                        top: "50%",
                        left: 0,
                        right: 0,
                        margin: "0 auto",
                        transform: "translateY(-50%)",
                        color: "rgba(255, 255, 255)"
                    },
                    sliderWrap: i => ({
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        maxHeight: i.isFullWidth ? void 0 : "35em",
                        [d.U$]: {
                            width: "100%",
                            maxHeight: i.isFullWidth ? void 0 : "30em"
                        },
                        [S]: {
                            height: "auto"
                        }
                    }),
                    slide: i => ({
                        height: i.isFullWidth ? Z : i.height,
                        width: "100%",
                        [d.U$]: {
                            height: i.isFullWidth ? B : void 0
                        }
                    }),
                    videoComponent: i => ({
                        display: "flex",
                        height: "100%",
                        width: "100%",
                        ...i.aspectRatio && {
                            left: 0,
                            position: "absolute",
                            top: 0
                        }
                    }),
                    figure: ({
                        hasCaption: i,
                        aspectRatio: t,
                        dominantColor: e
                    }) => ({
                        margin: i ? "0 0 var(--spacing-m) 0" : 0,
                        ...t ? {
                            backgroundColor: e || void 0,
                            paddingTop: `${t}%`,
                            position: "relative",
                            width: "100%"
                        } : {}
                    }),
                    caption: {
                        color: "var(--typography-secondary-default)",
                        fontSize: "var(--font-size-xs)",
                        margin: 0,
                        padding: 0
                    }
                });
            var w = e(61250);
            const I = (0, n.Z)(R.sliderWrap, "div"),
                A = (0, n.Z)(R.slide, "div"),
                O = (0, n.Z)(R.figure, "figure"),
                W = (0, n.Z)(R.caption, "figcaption"),
                _ = i => {
                    const t = (0, g.Z)();
                    return (0, w.jsxs)(w.Fragment, {
                        children: [(0, w.jsxs)(k.Z.Blank, {
                            extend: R.prev,
                            onClick: i.handlePrevious,
                            children: [(0, w.jsx)(u.Z, {
                                children: t("ui.previous")
                            }), (0, w.jsx)(y.Z, {
                                extend: R.arrowIcon,
                                icon: v.Z
                            })]
                        }), (0, w.jsxs)(k.Z.Blank, {
                            extend: R.next,
                            onClick: i.handleNext,
                            children: [(0, w.jsx)(u.Z, {
                                children: t("ui.next")
                            }), (0, w.jsx)(y.Z, {
                                extend: R.arrowIcon,
                                icon: f.Z
                            })]
                        })]
                    })
                },
                N = i => {
                    const {
                        fields: t = {},
                        isSliderImage: e,
                        isFullWidth: r,
                        sources: n
                    } = i, {
                        isSmall: o
                    } = (0, h.Z)(), {
                        alt: s,
                        caption: a,
                        smallVideo: d,
                        video: l,
                        smallImage: g,
                        image: u
                    } = t, {
                        src: m
                    } = (0, p.Z)(o ? d : l), {
                        src: f,
                        dominantColor: v = "",
                        ratio: y
                    } = (0, p.Z)(o ? g : u), k = y && m ? y : void 0;
                    return (0, w.jsxs)(O, {
                        hasCaption: a,
                        aspectRatio: k,
                        dominantColor: v,
                        children: [m ? (0, w.jsx)(c.Z, {
                            extend: R.videoComponent,
                            src: m,
                            poster: `${f}?w=800&fm=jpg&q=70`,
                            aspectRatio: k
                        }) : (0, w.jsx)(L.Z, {
                            alt: s,
                            sources: n || [{
                                breakpoint: 640,
                                width: 900,
                                src: f
                            }, {
                                breakpoint: 360,
                                width: 640,
                                src: f
                            }, {
                                breakpoint: 0,
                                width: 360,
                                src: f
                            }],
                            renderFallback: i => (0, w.jsx)(x.Z, {
                                isFullWidth: r,
                                isSliderImage: e,
                                extend: R.image,
                                ...i
                            })
                        }), a && (0, w.jsx)(W, {
                            children: a
                        })]
                    })
                },
                P = (0, r.memo)((i => {
                    const {
                        getFlickity: t,
                        handleNext: e,
                        handlePrevious: n,
                        isFullWidth: o,
                        media: s
                    } = i, {
                        viewportWidth: a
                    } = (0, h.Z)(), [c, g] = (0, r.useState)();
                    return (0, r.useEffect)((() => {
                        if (s[0].fields.video) {
                            const i = a < d.Eb ? a : a / 2;
                            g(9 * i / 16)
                        } else {
                            const {
                                height: i,
                                width: t
                            } = (0, p.Z)(s[0].fields.image), e = a < d.Eb ? a : 800;
                            g((0, l._)(e, t, i))
                        }
                    }), [s, c, a, o]), (0, w.jsxs)(I, {
                        isFullWidth: o,
                        children: [(0, w.jsx)(_, {
                            handlePrevious: n,
                            handleNext: e
                        }), (0, w.jsx)(m.Z, {
                            flickityRef: t,
                            flickityOptions: {
                                wrapAround: !0
                            },
                            children: s.map((({
                                sys: i,
                                fields: t
                            }) => (0, w.jsx)(A, {
                                isFullWidth: o,
                                height: c,
                                children: (0, w.jsx)(N, {
                                    isFullWidth: o,
                                    isSliderImage: !0,
                                    fields: t
                                })
                            }, i.id)))
                        })]
                    })
                }), ((i, t) => i.media[0].sys.id === t.media[0].sys.id)),
                F = i => {
                    const {
                        reducedMotion: t
                    } = (0, r.useContext)(s.Z), e = (0, r.useContext)(a.Z), n = (0, r.useRef)(null), d = !t && e, l = (i.media || []).filter((t => !(i.isFullWidth && (t.fields.video || t.fields.videoSmall)) && (0, o.s)(t)));
                    if (0 === l.length) return null;
                    return !d || !e || 1 === l.length ? (0, w.jsx)(N, {
                        isFullWidth: i.isFullWidth,
                        fields: l[0].fields
                    }) : (0, w.jsx)(P, {
                        getFlickity: i => {
                            n.current = i
                        },
                        media: l,
                        handlePrevious: () => {
                            n.current && n.current.previous()
                        },
                        handleNext: () => {
                            n.current && n.current.next()
                        },
                        isFullWidth: i.isFullWidth
                    })
                }
        },
        81035: (i, t, e) => {
            e.d(t, {
                EC: () => p,
                J9: () => h,
                N3: () => l,
                cQ: () => u,
                e4: () => g,
                sg: () => c,
                xu: () => d
            });
            var r = e(55851),
                n = e(7862),
                o = e.n(n),
                s = e(89238);
            const a = ["GRAY_LIGHT", "GRAY_LIGHTEST", "GRAY_200", "TEAL", "TEAL_LIGHT", "TEAL_200", "RHUBARB", "RHUBARB_LIGHT", "RHUBARB_200", "WHEAT", "WHEAT_LIGHT", "WHEAT_200", "PETROL", "PETROL_LIGHT", "PETROL_200", "WHITE"],
                d = (0, r.Z)(s.ZP.box, "div"),
                l = (0, r.Z)(s.ZP.padBox, "div"),
                c = (0, r.Z)(s.ZP.column, "div"),
                p = (0, r.Z)(s.ZP.fullSizeBox, "div"),
                h = (0, r.Z)(s.ZP.innerColumn, "div"),
                g = (0, r.Z)(s.ZP.omniBox, "div"),
                u = (0, r.Z)(s.ZP.innerOmniBox, "div");
            c.propTypes = {
                color: o().oneOf(a)
            }, d.propTypes = {
                bottomMargin: o().bool,
                color: o().oneOf(a)
            }, h.propTypes = {
                align: o().oneOf(["LEFT", "RIGHT", "CENTER"])
            }
        },
        89238: (i, t, e) => {
            e.d(t, {
                BZ: () => c,
                ZP: () => g,
                cc: () => a
            });
            var r = e(53623),
                n = e(34777),
                o = e(84079);
            const s = `@media (min-width: ${o.Gu}px)`,
                a = "@media (min-width: 500px)",
                d = {
                    containIntrinsicSize: "0 500px",
                    contentVisibility: "auto",
                    maxWidth: o.JN,
                    marginLeft: "auto",
                    marginRight: "auto"
                },
                l = { ...d,
                    margin: "0 auto",
                    paddingBottom: "var(--spacing-xl)",
                    paddingLeft: "var(--spacing-m)",
                    paddingRight: "var(--spacing-m)",
                    paddingTop: "var(--spacing-xl)",
                    [o.OV]: {
                        paddingBottom: "var(--spacing-l)",
                        paddingLeft: "var(--spacing-2-xl)",
                        paddingRight: "var(--spacing-2-xl)",
                        paddingTop: "var(--spacing-l)"
                    }
                },
                c = i => ({ ...d,
                    maxWidth: "100%",
                    marginBottom: i.bottomMargin ? "var(--spacing-2-xs)" : void 0,
                    backgroundColor: (0, n.Lq)(i.color),
                    display: "block",
                    [o.sJ]: {
                        display: "flex"
                    }
                }),
                p = {
                    height: `calc(100vh - ${o.ei})`,
                    [s]: {
                        height: `calc(100vh - ${o.Mz})`
                    }
                },
                h = {
                    margin: "auto",
                    maxWidth: "26em",
                    display: "flex",
                    [o.sJ]: {
                        maxWidth: "50em"
                    }
                },
                g = r.Z.create({
                    omniBox: l,
                    box: c,
                    padBox: i => ({ ...c(i),
                        maxWidth: "100%",
                        paddingTop: "var(--spacing-xl)",
                        paddingRight: "var(--spacing-m)",
                        paddingBottom: "var(--spacing-xl)",
                        paddingLeft: "var(--spacing-m)",
                        [o.sJ]: {
                            paddingTop: "var(--spacing-2-xl)",
                            paddingRight: "var(--spacing-2-xl)",
                            paddingBottom: "var(--spacing-2-xl)",
                            paddingLeft: "var(--spacing-2-xl)"
                        }
                    }),
                    column: i => ({
                        backgroundColor: (0, n.Lq)(i.color),
                        flex: "0 1 50%",
                        paddingTop: "var(--spacing-m)",
                        paddingRight: "var(--spacing-m)",
                        paddingBottom: i.noPad ? 0 : "var(--spacing-m)",
                        paddingLeft: "var(--spacing-m)",
                        [a]: {
                            paddingBottom: i.noPad ? 0 : "var(--spacing-xl)",
                            paddingTop: "var(--spacing-xl)",
                            paddingLeft: "var(--spacing-xl)",
                            paddingRight: "var(--spacing-xl)"
                        }
                    }),
                    fullSizeBox: p,
                    innerColumn: i => ({
                        maxWidth: "25em",
                        marginLeft: "RIGHT" === i.align || "CENTER" === i.align ? "auto" : void 0,
                        marginRight: "CENTER" === i.align ? "auto" : void 0
                    }),
                    innerOmniBox: h
                })
        },
        83858: (i, t, e) => {
            e.d(t, {
                Cr: () => a,
                Fy: () => l,
                HC: () => d
            });
            var r = e(29901),
                n = e(36614),
                o = e(12745),
                s = e(61250);
            const a = (0, n.o)("WrapperContext", {
                    isWithinWrapper: !1
                }),
                d = ({
                    children: i
                }) => (0, s.jsx)(a.Provider, {
                    value: {
                        isWithinWrapper: !0
                    },
                    children: (0, s.jsx)("li", {
                        children: i
                    })
                }),
                l = {
                    [o.BLOCKS.PARAGRAPH]: ({
                        children: i
                    }) => {
                        const {
                            isWithinWrapper: t
                        } = (0, r.useContext)(a);
                        return t ? i : (0, s.jsx)("p", {
                            children: i
                        })
                    },
                    [o.BLOCKS.LIST_ITEM]: d
                }
        },
        77248: (i, t, e) => {
            e.d(t, {
                _: () => r
            });
            const r = (i, t, e) => Math.round(i * e / t)
        },
        74811: (i, t, e) => {
            e.d(t, {
                n: () => s
            });
            const r = (i, t, e) => t < e.length - 1,
                n = i => i.endsWith(",") ? i.slice(0, -1) : i,
                o = /(?:[\t ]?)+("+)?(.*?)\1(?:[\t ]?)+(?:,|$)/gm;

            function s(i) {
                if (!i) return [];
                const t = i.split("\n");
                if (!(t.length > 1 && t[0].includes(","))) return [];
                const e = t.splice(0, 1)[0].match(o).filter(r).map(n),
                    s = [];
                for (const n of t) {
                    const i = {},
                        t = [...n.matchAll(o)].filter(r).entries();
                    for (const [r, n] of t) {
                        const t = n[2];
                        i[e[r]] = t.length > 0 ? Number(t) || t : null
                    }
                    s.push(i)
                }
                return s
            }
        }
    }
]);