"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5610], {
        70040: (e, i, r) => {
            r.d(i, {
                Z: () => m
            });
            var a = r(39760),
                t = r(19309),
                l = r(77523),
                s = r(2700),
                n = r(53623),
                d = r(89341),
                o = r(24927);
            const c = n.Z.create({
                wrap: e => ({
                    backgroundColor: e.backgroundColor,
                    border: e.isBordered ? "2px solid var(--divider-default)" : void 0,
                    borderRadius: `${o.T[e.borderRadius]}`,
                    display: "inline-block",
                    marginBottom: 0,
                    lineHeight: 0,
                    padding: `${d.t.TIGHTEST} ${d.t.TIGHTER}`
                })
            });
            var g = r(61250);
            const h = e => {
                const {
                    as: i,
                    background: r,
                    label: a,
                    isBordered: n,
                    isBold: d,
                    borderRadius: o
                } = e, h = l.Bd[r];
                return (0, g.jsx)(s.Z, {
                    backgroundColor: h,
                    extend: c.wrap,
                    isBordered: n,
                    as: i,
                    borderRadius: o,
                    children: (0, g.jsx)(t.Z, {
                        size: 1,
                        isBold: d,
                        children: a
                    })
                })
            };
            (0, a.ZP)(h, {
                background: { ...a.gh,
                    default: "CONTAINER_TERTIARY_GRAY"
                },
                isBordered: { ...a.U5,
                    description: "Controls border around the tag.",
                    default: !1
                },
                as: a.Oq,
                label: { ...a.N0,
                    description: "The text that goes in the tag.",
                    isRequired: !0
                },
                isBold: { ...a.U5,
                    description: "Controls wether the tag text is bold.",
                    default: !1
                },
                borderRadius: { ...a.Ck,
                    description: "Controls the border radius around the tag.",
                    default: 3
                }
            });
            const m = h
        },
        91778: (e, i, r) => {
            r.d(i, {
                Z: () => j
            });
            var a = r(7862),
                t = r.n(a),
                l = r(2700),
                s = r(40322),
                n = r(4028),
                d = r(73601),
                o = r(92178),
                c = r(61250);
            const g = e => (0, c.jsx)(l.Z, { ...e,
                    as: "div",
                    extend: o.Z.titlePlaceholder
                }),
                h = e => (0, c.jsx)(l.Z, { ...e,
                    as: "div",
                    extend: o.Z.textPlaceholder
                }),
                m = e => {
                    const {
                        announce: i,
                        isSmall: r
                    } = e, a = (0, d.Z)();
                    return (0, c.jsxs)(l.Z, {
                        "aria-live": i ? "assertive" : void 0,
                        extend: o.Z.landscape,
                        passThrough: ["aria-live", "role"],
                        role: i ? "alert" : void 0,
                        width: 680,
                        children: [i && (0, c.jsx)(n.Z, {
                            children: a("ui.loading")
                        }), (0, c.jsx)(s.Z, {
                            bottom: "BASE",
                            children: (0, c.jsx)(l.Z, {
                                extend: o.Z.imageWrapLandscape,
                                isSmall: r,
                                imageWidth: 680,
                                children: (0, c.jsx)(l.Z, {
                                    extend: o.Z.placeholderImage,
                                    imageWidth: 680
                                })
                            })
                        }), (0, c.jsx)(g, {
                            width: "70%",
                            isSmall: r
                        }), (0, c.jsx)(h, {
                            width: "90%",
                            isSmall: r
                        }), (0, c.jsx)(h, {
                            width: "50%",
                            isSmall: r
                        })]
                    })
                },
                x = e => {
                    const {
                        announce: i,
                        isSmall: r,
                        imageOnRight: a
                    } = e, t = r ? 120 : 350, m = (0, d.Z)();
                    return (0, c.jsxs)(l.Z, {
                        "aria-live": i ? "assertive" : void 0,
                        extend: o.Z.wrap,
                        isSmall: r,
                        passThrough: ["aria-live", "role"],
                        role: i ? "alert" : void 0,
                        children: [i && (0, c.jsx)(n.Z, {
                            children: m("ui.loading")
                        }), (0, c.jsx)(s.Z, {
                            right: "BASE",
                            children: (0, c.jsx)(l.Z, {
                                extend: o.Z.imageWrap,
                                imageWidth: t,
                                isSmall: r,
                                children: (0, c.jsx)(l.Z, {
                                    extend: o.Z.squarePlaceholderImage,
                                    imageWidth: t,
                                    imageWrapWidth: t,
                                    isSmall: r
                                })
                            })
                        }), (0, c.jsx)(l.Z, {
                            extend: o.Z.squarePlaceholderTextWrap,
                            imageOnRight: a,
                            children: (0, c.jsxs)("div", {
                                children: [(0, c.jsx)(g, {
                                    width: "70%",
                                    isSmall: r
                                }), (0, c.jsx)(h, {
                                    width: "90%",
                                    isSmall: r
                                }), (0, c.jsx)(h, {
                                    width: "50%",
                                    isSmall: r
                                })]
                            })
                        })]
                    })
                },
                p = e => {
                    const {
                        announce: i
                    } = e, r = (0, d.Z)();
                    return (0, c.jsxs)(l.Z, {
                        "aria-live": i ? "assertive" : void 0,
                        extend: o.Z.wrap,
                        passThrough: ["aria-live", "role"],
                        role: i ? "alert" : void 0,
                        children: [i && (0, c.jsx)(n.Z, {
                            children: r("ui.loading")
                        }), (0, c.jsx)(l.Z, {
                            extend: o.Z.wideImageColumn,
                            children: (0, c.jsx)(s.Z, {
                                right: "BASE",
                                children: (0, c.jsx)(l.Z, {
                                    extend: o.Z.imageWrapLandscape,
                                    imageWidth: 650,
                                    children: (0, c.jsx)(l.Z, {
                                        extend: o.Z.placeholderImage,
                                        imageWidth: 650
                                    })
                                })
                            })
                        }), (0, c.jsx)(l.Z, {
                            extend: o.Z.wideTextColumn,
                            children: (0, c.jsxs)("div", {
                                children: [(0, c.jsx)(g, {
                                    width: "70%"
                                }), (0, c.jsx)(h, {
                                    width: "90%"
                                }), (0, c.jsx)(h, {
                                    width: "50%"
                                })]
                            })
                        })]
                    })
                },
                u = e => {
                    const {
                        announce: i
                    } = e, r = (0, d.Z)();
                    return (0, c.jsxs)(l.Z, {
                        "aria-live": i ? "assertive" : void 0,
                        extend: o.Z.wrap,
                        isSmall: !0,
                        passThrough: ["aria-live", "role"],
                        role: i ? "alert" : void 0,
                        children: [i && (0, c.jsx)(n.Z, {
                            children: r("ui.loading")
                        }), (0, c.jsx)(l.Z, {
                            extend: o.Z.squarePlaceholderTextWrap,
                            children: (0, c.jsxs)("div", {
                                children: [(0, c.jsx)(g, {
                                    width: "70%",
                                    isSmall: !0
                                }), (0, c.jsx)(h, {
                                    width: "90%",
                                    isSmall: !0
                                }), (0, c.jsx)(h, {
                                    width: "50%",
                                    isSmall: !0
                                })]
                            })
                        })]
                    })
                },
                Z = e => {
                    const {
                        announce: i,
                        isSmall: r
                    } = e, a = r ? 200 : 350, t = (0, d.Z)();
                    return (0, c.jsxs)("div", {
                        "aria-live": i ? "assertive" : void 0,
                        role: i ? "alert" : void 0,
                        children: [(0, c.jsxs)(s.Z, {
                            bottom: "BASE",
                            children: [i && (0, c.jsx)(n.Z, {
                                children: t("ui.loading")
                            }), (0, c.jsx)(l.Z, {
                                extend: o.Z.imageWrapStacked,
                                imageWidth: a,
                                isSmall: r,
                                children: (0, c.jsx)(l.Z, {
                                    extend: o.Z.squarePlaceholderImage,
                                    imageWidth: a,
                                    imageWrapWidth: a,
                                    isSmall: r
                                })
                            })]
                        }), (0, c.jsx)(g, {
                            width: "70%",
                            isSmall: r
                        }), (0, c.jsx)(h, {
                            width: "90%",
                            isSmall: r
                        }), (0, c.jsx)(h, {
                            width: "50%",
                            isSmall: r
                        })]
                    })
                };
            m.propTypes = {
                isSmall: t().bool,
                announce: t().bool
            }, m.defaultProps = {
                announce: !0
            }, p.propTypes = {
                announce: t().bool
            }, p.defaultProps = {
                announce: !0
            }, u.propTypes = {
                announce: t().bool
            }, u.defaultProps = {
                announce: !0
            }, x.propTypes = {
                isSmall: t().bool,
                announce: t().bool,
                imageOnRight: t().bool
            }, x.defaultProps = {
                announce: !0,
                imageOnRight: !1
            }, Z.propTypes = {
                isSmall: t().bool,
                announce: t().bool
            }, Z.defaultProps = {
                announce: !0
            };
            const j = {
                Landscape: m,
                Square: x,
                Wide: p,
                List: u,
                Stacked: Z
            }
        },
        22199: (e, i, r) => {
            r.d(i, {
                S: () => u,
                Z: () => v
            });
            var a = r(7862),
                t = r.n(a),
                l = r(2700),
                s = r(70040),
                n = r(19309),
                d = r(95502),
                o = r(40322),
                c = r(73601),
                g = r(96154),
                h = r(39101),
                m = r(11669),
                x = r(92178),
                p = r(61250);
            const u = e => {
                    const i = (0, g.Z)(),
                        r = (0, c.Z)();
                    return e ? e <= 1 ? r("read_time.minute") : i("read_time.minutes", {
                        readTime: e
                    }).join("") : null
                },
                Z = e => {
                    const {
                        categoryHref: i,
                        categoryLabel: r,
                        excerpt: a,
                        href: t,
                        isSmall: l,
                        readingTime: c,
                        smallTitle: g,
                        title: m
                    } = e, Z = u(c), j = l ? 2 : 3, b = l ? 4 : 2, S = l ? 5 : 6;
                    return (0, p.jsxs)(p.Fragment, {
                        children: [Boolean(r) && Boolean(i) && (0, p.jsx)(o.Z, {
                            bottom: "BASE",
                            children: (0, p.jsx)(n.Z, {
                                as: "p",
                                isUppercase: !0,
                                letterSpacing: 3,
                                size: j,
                                children: (0, p.jsx)(h.Z.Blank, {
                                    extend: x.Z.categoryLink,
                                    to: i,
                                    children: r
                                })
                            })
                        }), g ? (0, p.jsx)(o.Z, {
                            bottom: "BASE",
                            children: (0, p.jsx)(n.Z, {
                                as: "p",
                                size: 5,
                                isBold: !0,
                                children: (0, p.jsx)(h.Z.Link, {
                                    extend: x.Z.headingLink,
                                    to: t,
                                    children: m
                                })
                            })
                        }) : (0, p.jsx)(d.Z, {
                            as: "p",
                            isExtended: !l,
                            level: b,
                            top: "NONE",
                            bottom: "BASE",
                            children: (0, p.jsx)(h.Z.Link, {
                                extend: x.Z.headingLink,
                                to: t,
                                children: m
                            })
                        }), a && (0, p.jsx)(o.Z, {
                            bottom: "BASE",
                            children: (0, p.jsx)(n.Z, {
                                size: S,
                                as: "p",
                                children: a
                            })
                        }), Z && (0, p.jsx)("div", {
                            children: (0, p.jsx)(s.Z, {
                                as: "p",
                                label: Z
                            })
                        })]
                    })
                },
                j = e => {
                    const {
                        alt: i,
                        aspectRatio: r,
                        href: a,
                        extend: t,
                        imageWidth: l,
                        dominantColor: s,
                        src: n
                    } = e;
                    return (0, p.jsx)(m.Z, {
                        alt: i,
                        aspectRatio: r,
                        extend: t,
                        dominantColor: s,
                        imageWidth: l,
                        sources: [{
                            breakpoint: 0,
                            src: n,
                            width: l
                        }],
                        zoomsOnHover: Boolean(a)
                    })
                },
                b = e => {
                    const {
                        categoryHref: i,
                        categoryLabel: r,
                        excerpt: a,
                        href: t,
                        isSmall: s,
                        readingTime: n,
                        smallTitle: d,
                        shouldDisableFocusableElements: c,
                        title: g
                    } = e;
                    return (0, p.jsxs)(l.Z, {
                        extend: x.Z.landscape,
                        width: 680,
                        children: [(0, p.jsx)(o.Z, {
                            bottom: "LOOSE",
                            children: (0, p.jsx)(h.Z.Link, {
                                extend: x.Z.headingLink,
                                to: t,
                                disabled: c,
                                children: (0, p.jsx)(l.Z, {
                                    extend: x.Z.imageWrapLandscape,
                                    isSmall: s,
                                    imageWidth: 680,
                                    children: (0, p.jsx)(j, { ...e,
                                        aspectRatio: 60,
                                        extend: x.Z.image,
                                        imageWidth: 680
                                    })
                                })
                            })
                        }), (0, p.jsx)(Z, {
                            categoryHref: i,
                            categoryLabel: r,
                            excerpt: a,
                            href: t,
                            isSmall: s,
                            readingTime: n,
                            smallTitle: d,
                            title: g
                        })]
                    })
                },
                S = e => {
                    const {
                        categoryHref: i,
                        categoryLabel: r,
                        excerpt: a,
                        href: t,
                        imageOnRight: s,
                        isSmall: n,
                        readingTime: d,
                        smallTitle: c,
                        title: g
                    } = e, m = n ? 120 : 350;
                    return (0, p.jsxs)(l.Z, {
                        extend: x.Z.wrap,
                        isSmall: n,
                        children: [(0, p.jsx)(o.Z, {
                            left: s ? "BASE" : void 0,
                            right: s ? void 0 : "BASE",
                            children: (0, p.jsx)(h.Z.Link, {
                                extend: x.Z.headingLink,
                                to: t,
                                children: (0, p.jsx)(l.Z, {
                                    extend: x.Z.imageWrap,
                                    imageWidth: m,
                                    isSmall: n,
                                    children: (0, p.jsx)(j, { ...e,
                                        aspectRatio: 100,
                                        extend: x.Z.squareImage,
                                        imageWidth: m,
                                        imageWrapWidth: m,
                                        isSmall: n
                                    })
                                })
                            })
                        }), (0, p.jsx)(l.Z, {
                            extend: x.Z.squareTextWrap,
                            imageOnRight: s,
                            children: (0, p.jsx)(Z, {
                                categoryHref: i,
                                categoryLabel: r,
                                excerpt: n ? "" : a,
                                href: t,
                                isSmall: n,
                                readingTime: d,
                                smallTitle: c,
                                title: g
                            })
                        })]
                    })
                },
                f = e => {
                    const {
                        categoryHref: i,
                        categoryLabel: r,
                        excerpt: a,
                        href: t,
                        smallTitle: s,
                        readingTime: n,
                        title: d
                    } = e;
                    return (0, p.jsxs)(l.Z, {
                        extend: x.Z.wrap,
                        children: [(0, p.jsx)(l.Z, {
                            extend: x.Z.wideImageColumn,
                            children: (0, p.jsx)(o.Z, {
                                right: "BASE",
                                children: (0, p.jsx)(l.Z, {
                                    extend: x.Z.imageWrapLandscape,
                                    imageWidth: 650,
                                    children: (0, p.jsx)(h.Z.Link, {
                                        extend: x.Z.headingLink,
                                        to: t,
                                        children: (0, p.jsx)(j, { ...e,
                                            aspectRatio: 60,
                                            extend: x.Z.image,
                                            imageWidth: 650,
                                            imageWrapWidth: 650
                                        })
                                    })
                                })
                            })
                        }), (0, p.jsx)(l.Z, {
                            extend: x.Z.wideTextColumn,
                            children: (0, p.jsx)(Z, {
                                categoryHref: i,
                                categoryLabel: r,
                                excerpt: a,
                                href: t,
                                readingTime: n,
                                smallTitle: s,
                                title: d
                            })
                        })]
                    })
                },
                T = e => {
                    const {
                        categoryHref: i,
                        categoryLabel: r,
                        href: a,
                        smallTitle: t,
                        readingTime: s,
                        title: n
                    } = e;
                    return (0, p.jsx)(l.Z, {
                        extend: x.Z.wrap,
                        isSmall: !0,
                        children: (0, p.jsx)(l.Z, {
                            extend: x.Z.squareTextWrap,
                            children: (0, p.jsx)(Z, {
                                categoryHref: i,
                                categoryLabel: r,
                                href: a,
                                isSmall: !0,
                                smallTitle: t,
                                readingTime: s,
                                title: n
                            })
                        })
                    })
                },
                W = e => {
                    const {
                        categoryHref: i,
                        categoryLabel: r,
                        excerpt: a,
                        href: t,
                        imageWidth: s,
                        isSmall: n,
                        readingTime: d,
                        smallImageWidth: c,
                        smallTitle: g,
                        title: m
                    } = e, u = n ? c : s;
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsx)(o.Z, {
                            bottom: "BASE",
                            children: (0, p.jsx)(h.Z.Link, {
                                extend: x.Z.headingLink,
                                to: e.href,
                                children: (0, p.jsx)(l.Z, {
                                    extend: x.Z.imageWrapStacked,
                                    imageWidth: u,
                                    isSmall: n,
                                    children: (0, p.jsx)(j, { ...e,
                                        aspectRatio: 100,
                                        extend: x.Z.squareImage,
                                        imageWidth: u,
                                        imageWrapWidth: u
                                    })
                                })
                            })
                        }), (0, p.jsx)(Z, {
                            categoryHref: i,
                            categoryLabel: r,
                            excerpt: n ? "" : a,
                            href: t,
                            isSmall: n,
                            readingTime: d,
                            smallTitle: g,
                            title: m
                        })]
                    })
                };
            Z.propTypes = {
                categoryHref: t().string,
                categoryLabel: t().string,
                excerpt: t().string,
                href: t().string.isRequired,
                isSmall: t().bool,
                readingTime: t().number,
                smallTitle: t().bool,
                title: t().string.isRequired
            }, j.propTypes = {
                alt: t().string.isRequired,
                aspectRatio: t().number.isRequired,
                dominantColor: t().string.isRequired,
                extend: t().func,
                href: t().string,
                imageWidth: t().number.isRequired,
                src: t().string.isRequired
            }, b.propTypes = {
                categoryHref: t().string,
                categoryLabel: t().string,
                excerpt: t().string,
                href: t().string.isRequired,
                imageWidth: t().number,
                isSmall: t().bool,
                readingTime: t().number,
                smallImageWidth: t().number,
                smallTitle: t().bool,
                title: t().string.isRequired
            }, S.propTypes = {
                href: t().string.isRequired,
                title: t().string.isRequired,
                fluidWidth: t().bool,
                isSmall: t().bool,
                imageWidth: t().number,
                smallImageWidth: t().number,
                categoryHref: t().string,
                categoryLabel: t().string,
                excerpt: t().string,
                smallTitle: t().bool,
                text: t().string,
                imageOnRight: t().bool
            }, S.defaultProps = {
                fluidWidth: !1,
                isSmall: !1,
                imageOnRight: !1
            }, f.propTypes = {
                categoryHref: t().string,
                categoryLabel: t().string,
                excerpt: t().string,
                href: t().string.isRequired,
                readingTime: t().number,
                smallTitle: t().bool,
                title: t().string.isRequired
            }, T.propTypes = {
                categoryHref: t().string,
                categoryLabel: t().string,
                href: t().string.isRequired,
                readingTime: t().number,
                smallTitle: t().bool,
                title: t().string.isRequired
            }, W.propTypes = {
                categoryHref: t().string,
                categoryLabel: t().string,
                excerpt: t().string,
                fluidWidth: t().bool,
                href: t().string.isRequired,
                imageWidth: t().number,
                isSmall: t().bool,
                readingTime: t().number,
                smallImageWidth: t().number,
                smallTitle: t().bool,
                title: t().string.isRequired
            }, W.defaultProps = {
                fluidWidth: !1,
                isSmall: !1,
                imageWidth: 350,
                smallImageWidth: 200
            };
            const v = {
                Landscape: b,
                Square: S,
                Stacked: W,
                List: T,
                Wide: f
            }
        },
        92178: (e, i, r) => {
            r.d(i, {
                Z: () => c
            });
            var a = r(53623),
                t = r(24927);
            const l = e => ({
                    borderRadius: e.isSmall ? t.T[1] : t.T[2],
                    overflow: "hidden"
                }),
                s = e => ({
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    order: e.imageOnRight ? -1 : 2
                }),
                n = e => ({ ...e.zoomsOnHover && {
                        transitionDuration: "300ms",
                        transitionProperty: "transform",
                        ":hover": {
                            transform: "scale(1.02)"
                        }
                    }
                }),
                d = e => ({ ...n(e),
                    height: "100%",
                    width: "100%"
                }),
                o = e => ({
                    backgroundColor: "var(--background-info-card)",
                    borderRadius: "var(--border-radius-m)",
                    flex: `1 1 ${e.width}`,
                    width: e.width || "90%",
                    ":last-child": {
                        marginBottom: 0
                    }
                }),
                c = a.Z.create({
                    wrap: {
                        display: "flex"
                    },
                    landscape: e => ({
                        maxWidth: e.width,
                        width: "100%"
                    }),
                    squareTextWrap: s,
                    imageWrap: e => ({ ...l(e),
                        height: e.imageWidth,
                        width: e.imageWidth
                    }),
                    imageWrapStacked: e => ({ ...l(e),
                        maxHeight: e.imageWidth,
                        maxWidth: e.imageWidth
                    }),
                    imageWrapLandscape: e => ({ ...l(e),
                        maxWidth: e.imageWidth
                    }),
                    image: n,
                    squareImage: d,
                    categoryLink: {
                        transitionProperty: "color",
                        transitionDuration: "100ms",
                        ":hover": {
                            color: "var(--typography-interactive-default)"
                        },
                        ":focus": {
                            color: "var(--typography-interactive-default)"
                        }
                    },
                    headingLink: {
                        textDecoration: "none"
                    },
                    wideImageColumn: {
                        flex: "1 0 55%"
                    },
                    wideTextColumn: e => ({ ...s(e),
                        flex: "1 0 45%"
                    }),
                    placeholderImage: {
                        backgroundColor: "var(--background-info-card)",
                        paddingTop: "60%"
                    },
                    titlePlaceholder: e => ({ ...o(e),
                        height: e.isSmall ? "22px" : "32px",
                        marginBottom: e.isSmall ? "var(--spacing-xs)" : "var(--spacing-s)"
                    }),
                    textPlaceholder: e => ({ ...o(e),
                        height: e.isSmall ? "14px" : "22px",
                        marginBottom: e.isSmall ? "var(--spacing-2-xs)" : "var(--spacing-xs)"
                    }),
                    squarePlaceholderImage: e => ({ ...d(e),
                        backgroundColor: "var(--background-info-card)",
                        paddingTop: "100%"
                    }),
                    squarePlaceholderTextWrap: e => ({ ...s(e),
                        width: "100%"
                    })
                })
        }
    }
]);