(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [6337], {
        7123: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => j
            });
            var t = i(87252),
                a = i(29901),
                s = i(7862),
                r = i.n(s),
                o = i(14272),
                l = i.n(o),
                d = i(19765),
                c = i(43565),
                u = i(96519),
                m = i(33083),
                p = i(82102),
                g = i(49806),
                v = i(4028),
                h = i(92285),
                f = i(7528),
                k = i(53623),
                b = i(84079),
                y = i(89579);
            const S = k.Z.create({
                    wrapper: {},
                    label: y.PS,
                    field: e => ({ ...(0, y.EP)(e),
                        border: "1px solid var(--divider-default)",
                        padding: "0.67em var(--spacing-xs)",
                        borderRadius: "var(--border-radius-l)",
                        color: "var(--typography-default)",
                        backgroundColor: "var(--background-default)",
                        transitionPropery: "box-shadow",
                        transitionDuration: "300ms",
                        ":hover": {
                            boxShadow: b.oZ
                        },
                        ":focus": {
                            outline: "none",
                            boxShadow: "0 0 0.5rem var(--primary-focus)",
                            borderColor: "var(--primary-focus)"
                        },
                        '[aria-invalid="true"]': {
                            borderColor: "var(--divider-error)"
                        }
                    }),
                    suggestions: y.tJ,
                    suggestion: y.Jz,
                    geosuggest: y.vm
                }),
                x = k.Z.create({
                    wrapper: {},
                    label: y.PS,
                    field: e => ({ ...(0, y.EP)(e),
                        padding: "0.67em 0",
                        borderBottom: "1px solid var(--deprecated-gray)",
                        borderTopWidth: "0",
                        borderLeftWidth: "0",
                        borderRightWidth: "0",
                        transitionProperty: "box-shadow",
                        transitionDuration: "250ms",
                        ":focus": {
                            outline: "none",
                            boxShadow: "inset 0 -1px 0 var(--primary-focus)",
                            borderColor: "var(--primary-focus)"
                        },
                        '[aria-invalid="true"]': {
                            borderColor: "var(--divider-error)"
                        }
                    }),
                    suggestions: y.tJ,
                    suggestion: y.Jz,
                    geosuggest: y.vm
                }),
                N = k.Z.create({
                    wrapper: {},
                    label: y.PS,
                    field: e => ({ ...(0, y.EP)(e),
                        fontSize: "var(--font-size-4-xl)",
                        maxWidth: "25ch",
                        margin: "-0.5rem",
                        padding: "0.5rem",
                        border: 0,
                        textAlign: "left",
                        transitionProperty: "text-indent, box-shadow",
                        transitionDuration: "250ms",
                        ":focus": {
                            outline: "none",
                            textIndent: b._d,
                            boxShadow: "inset 4px 0 0 var(--primary-focus)"
                        },
                        '[aria-invalid="true"]': {}
                    }),
                    suggestions: y.tJ,
                    suggestion: y.Jz,
                    geosuggest: y.vm
                });
            var w = i(92895),
                C = i(61250);
            const F = ["Select", "SelectComplete", "Open", "Close", "Highlight"];
            class Z extends a.Component {
                constructor(...e) {
                    super(...e), (0, t.Z)(this, "state", {
                        isLabelNudgedUp: !this.props.hasJavaScript || Boolean(this.props.value),
                        hasFocus: !1
                    }), (0, t.Z)(this, "updateAwesompleteList", (e => {
                        const {
                            list: n
                        } = this.props.awesompleteOptions;
                        e.list !== n && (this.awesomplete.list = n)
                    })), (0, t.Z)(this, "patchAwesomplete", (() => {
                        const e = this.props.awesompleteOptions;
                        e.list && this.input && (this.awesomplete = new(l())(this.input, e), this.addEventListeners())
                    })), (0, t.Z)(this, "addEventListeners", (() => {
                        F.map(this.getAwesompleteEvent).forEach((({
                            eventName: e,
                            callback: n
                        }) => {
                            this.input.addEventListener(e, n)
                        }))
                    })), (0, t.Z)(this, "removeEventListeners", (e => {
                        F.map((n => this.getAwesompleteEvent(n, e))).forEach((({
                            eventName: e,
                            callback: n
                        }) => {
                            this.input.removeEventListener(e, n)
                        }))
                    })), (0, t.Z)(this, "getAwesompleteEvent", ((e, n) => ({
                        eventName: "awesomplete-" + e.toLowerCase(),
                        callback: n ? .awesompleteOptions ? n.awesompleteOptions["on" + e] : this.props.awesompleteOptions["on" + e]
                    }))), (0, t.Z)(this, "hasGeosuggest", (() => Object.keys(this.props.geosuggest).length > 0)), (0, t.Z)(this, "handleOnGeosuggestChange", (e => {
                        this.props.onChange({
                            target: {
                                name: this.props.name,
                                value: e
                            }
                        })
                    })), (0, t.Z)(this, "setRef", (e => {
                        if (this.input = e, e && e.value && this.setState({
                                isLabelNudgedUp: !0
                            }), "function" == typeof this.props.refCallback) return this.props.refCallback(e)
                    })), (0, t.Z)(this, "handleOnGeosuggestFocus", (e => {
                        const n = {
                            target: {
                                name: this.props.name,
                                value: e
                            }
                        };
                        return "function" == typeof this.props.geosuggest.onFocus && this.props.geosuggest.onFocus(n), this.setState({
                            isLabelNudgedUp: !0,
                            hasFocus: !0
                        })
                    })), (0, t.Z)(this, "handleOnGeosuggestBlur", (e => {
                        const n = {
                            target: {
                                name: this.props.name,
                                value: e
                            }
                        };
                        return "function" == typeof this.props.geosuggest.onBlur && this.props.geosuggest.onBlur(n), this.setState({
                            isLabelNudgedUp: Boolean(e),
                            hasFocus: !1
                        })
                    })), (0, t.Z)(this, "handleFocus", (e => {
                        "function" == typeof this.props.onFocus && this.props.onFocus(e), this.setState({
                            isLabelNudgedUp: !0,
                            hasFocus: !0
                        })
                    })), (0, t.Z)(this, "handleBlur", (e => {
                        "function" == typeof this.props.onBlur && this.props.onBlur(e), this.setState({
                            isLabelNudgedUp: Boolean(e.target.value),
                            hasFocus: !1
                        })
                    })), (0, t.Z)(this, "handleSuggestSelect", (e => {
                        this.props.onSuggestSelect(e, this.input)
                    }))
                }
                componentDidMount() {
                    this.patchAwesomplete()
                }
                componentDidUpdate(e) {
                    this.awesomplete && (this.updateAwesompleteList(e.awesompleteOptions), this.removeEventListeners(e), this.addEventListeners()), e.value === this.props.value && e.hasJavaScript === this.props.hasJavaScript || this.setState((e => {
                        const n = this.input && Boolean(this.input.value),
                            i = Boolean(this.props.value) || n;
                        return {
                            isLabelNudgedUp: !this.props.hasJavaScript || e.hasFocus || i
                        }
                    }))
                }
                componentWillUnmount() {
                    this.props.awesompleteOptions.list && this.input && (this.removeEventListeners(), this.awesomplete = null)
                }
                render() {
                    const e = (0, g.Z)(p.Wy)(this.props),
                        n = this.props["aria-invalid"],
                        i = { ...e
                        };
                    "required" in e && (i["aria-required"] = e.required), "disabled" in e && (i["aria-disabled"] = e.disabled);
                    const t = { ...this.state,
                            hasError: n,
                            hasJavaScript: this.props.hasJavaScript,
                            hiddenLabel: this.props.hiddenLabel,
                            isDark: this.props.isDark
                        },
                        a = this.props.geosuggest && this.props["data-autofocus"] && "js-autofocus",
                        s = [this.props.resolveRule("field", t), this.props.className, a].filter(Boolean).join(" ");
                    return (0, C.jsxs)("div", {
                        className: this.props.resolveRule("wrapper", t),
                        children: [(0, C.jsx)(f.Z, {
                            condition: this.props.isLabelHidden,
                            wrapper: e => (0, C.jsx)(v.Z, {
                                children: e
                            }),
                            children: (0, C.jsx)("label", { ...this.props.labelProps,
                                className: this.props.resolveRule("label", t),
                                htmlFor: this.hasGeosuggest() ? "geosuggest__input--" + this.props.id : this.props.id,
                                children: this.props.label
                            })
                        }), this.hasGeosuggest() ? (0, C.jsx)(d.Z, { ...i,
                            autoComplete: "off",
                            className: this.props.resolveRule("geosuggest"),
                            inputClassName: s,
                            onChange: this.handleOnGeosuggestChange,
                            suggestsClassName: this.props.resolveRule("suggestions", {
                                hidden: !1
                            }),
                            suggestsHiddenClassName: this.props.resolveRule("suggestions", {
                                hidden: !0
                            }),
                            suggestItemClassName: this.props.resolveRule("suggestion", {
                                active: !1
                            }),
                            suggestItemActiveClassName: this.props.resolveRule("suggestion", {
                                active: !0
                            }),
                            ref: this.setRef,
                            onSuggestSelect: this.handleSuggestSelect,
                            ...this.props.geosuggest,
                            onFocus: this.handleOnGeosuggestFocus,
                            onBlur: this.handleOnGeosuggestBlur
                        }) : (0, C.jsx)("input", { ...i,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur,
                            onClick: this.props.onClick,
                            className: s,
                            ref: this.setRef
                        }), this.props.children]
                    })
                }
            }(0, t.Z)(Z, "propTypes", {
                id: r().string.isRequired,
                label: r().node.isRequired,
                name: r().string.isRequired
            }), (0, t.Z)(Z, "defaultProps", {
                geosuggest: {},
                awesompleteOptions: {},
                type: "text",
                maxLength: 128
            });
            const T = {
                    bordered: S,
                    underlined: x,
                    jumbotron: N,
                    bubble: w.Z
                },
                j = (0, c.Z)((e => ({
                    hasJavaScript: (0, a.useContext)(m.Z),
                    isDark: (0, a.useContext)(u.Z).isDark,
                    resolveRule: (0, h.Z)({ ...e,
                        themes: T,
                        defaultTheme: "bordered"
                    })
                })))(Z)
        },
        53861: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => o
            });
            var t = i(55443),
                a = i(4028);
            const s = i(53623).Z.create({
                base: {
                    color: "inherit",
                    fill: "currentcolor",
                    maxWidth: "100%"
                }
            });
            var r = i(61250);
            const o = (0, t.Z)(s.base, (e => (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("svg", {
                    viewBox: "0 0 46 32",
                    ...e,
                    children: (0, r.jsx)("path", {
                        d: "M40.649 12.795c-2.108 0-3.615.975-4.376 2.419 0-3.411 1.19-6.383 4.015-6.383 1.796 0 2.509 1.034 2.889 2.728l2.616-.523c-.615-2.926-2.474-4.347-5.487-4.347-3.785 0-6.617 2.906-6.617 9.42 0 5.783 2.361 8.641 6.43 8.641 3.363 0 5.881-2.296 5.881-6.08 0-2.956-1.576-5.875-5.351-5.875zm-.523 9.818c-2.087 0-3.531-1.92-3.782-4.463.634-2.172 2.04-3.253 3.701-3.253 2.136 0 3.342 1.577 3.342 3.82 0 2.407-1.373 3.896-3.261 3.896zM26.211 18.975c-.847.847-2.756 2.376-4.088 3.296h7.991v2.292H18.355V22.47c1.363-.973 4.193-3.086 5.964-4.858 1.695-1.695 2.805-3.244 2.805-5.518 0-2.237-1.229-3.167-2.89-3.167-1.702 0-3.062.984-3.062 3.039 0 .448.05.946.174 1.519l-2.671-.259a5.647 5.647 0 01-.174-1.395c0-2.743 1.924-5.142 5.821-5.142 3.215 0 5.593 1.669 5.593 5.318 0 3.318-2.423 5.705-3.513 6.779l-.191.189zM0 0h14.251v2.292H0zM11.579 6.875v12.1h-.001c0 1.071.025 1.719.075 2.342h-.05c-.262-.713-.571-1.338-1.031-2.152L3.416 6.875H.146v17.688h2.548v-12.1h.002c0-1.072-.025-1.719-.075-2.342h.05c.261.713.57 1.338 1.03 2.151l7.156 12.291h3.237V6.875h-2.515zM0 29.146h14.251v2.28H0z"
                    })
                }), (0, r.jsx)(a.Z, {
                    children: e.children || "N26"
                })]
            })))
        },
        11669: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => k
            });
            var t = i(29901),
                a = i(7862),
                s = i.n(a),
                r = i(77387),
                o = i(55851),
                l = i(55443),
                d = i(33083),
                c = i(1712),
                u = i(53623),
                m = i(84079);
            const p = {
                    left: 0,
                    position: "absolute",
                    top: 0,
                    transitionDuration: "200ms",
                    transitionProperty: "opacity",
                    width: "100%"
                },
                g = u.Z.create({
                    wrap: e => ({
                        backgroundColor: e.dominantColor || void 0,
                        height: "100%",
                        paddingTop: e.aspectRatio - 1 + "%",
                        position: "relative",
                        overflow: "hidden",
                        width: "100%"
                    }),
                    responsiveImage: ({
                        isLoading: e
                    }) => ({ ...p,
                        opacity: e ? 0 : 1,
                        zIndex: m.FP
                    })
                });
            var v = i(61250);
            const h = (0, o.Z)(g.wrap, "div"),
                f = e => {
                    const n = (0, t.useContext)(d.Z),
                        [i, a] = (0, t.useState)(n && !e.eagerLoad),
                        [s, o] = (0, t.useState)(!n || e.eagerLoad),
                        [l, u] = (0, r.YD)({
                            triggerOnce: !0,
                            rootMargin: "200px 0px"
                        }),
                        {
                            aspectRatio: m,
                            dominantColor: p
                        } = e;
                    return (0, t.useEffect)((() => {
                        if (e.eagerLoad) return;
                        const n = "loading" in window.HTMLImageElement.prototype;
                        o(n || u)
                    }), [u, e.eagerLoad]), (0, v.jsx)(h, {
                        aspectRatio: m,
                        className: e.className,
                        innerRef: l,
                        dominantColor: p,
                        children: s && (0, v.jsx)(c.Z, { ...e,
                            ratio: e.aspectRatio / 100,
                            extend: g.responsiveImage,
                            onLoad: () => a(!1),
                            isLoading: i,
                            loading: e.eagerLoad ? "eager" : "lazy"
                        })
                    })
                };
            f.defaultProps = {
                dominantColor: "",
                eagerLoad: !1
            }, f.propTypes = {
                alt: s().string,
                aspectRatio: s().number.isRequired,
                dominantColor: s().string,
                eagerLoad: s().bool
            };
            const k = (0, l.Z)((() => ({})), (0, t.memo)(f, c.w))
        },
        56921: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => r
            });
            var t = i(29901),
                a = i(76906),
                s = i(73601);
            const r = () => {
                const e = (0, s.Z)(),
                    n = (0, a.Z)();
                return (0, t.useCallback)(((i, t) => {
                    const a = `${i}.${t}`;
                    return n(a) ? e(a) : e(i)
                }), [e, n])
            }
        },
        40434: (e, n, i) => {
            "use strict";
            i.d(n, {
                UQ: () => w,
                bq: () => j,
                OY: () => T,
                e0: () => C,
                zx: () => F,
                HN: () => Z
            });
            var t = i(29901),
                a = i(7862),
                s = i.n(a),
                r = i(84602),
                o = i.n(r),
                l = i(55851),
                d = i(33083),
                c = i(2700),
                u = i(71934),
                m = i(21045),
                p = i(82636),
                g = i(19001),
                v = i(61785),
                h = i(2040),
                f = i(39101),
                k = i(53623),
                b = i(84079);
            const y = {
                    borderTop: "1px solid var(--divider-default)",
                    margin: "0 calc(var(--spacing-m) * -1)",
                    [b.OV]: {
                        margin: 0,
                        padding: 0
                    }
                },
                S = k.Z.create({
                    accordion: y,
                    arrow: e => ({
                        color: "currentcolor",
                        fill: "var(--background-container-teal)",
                        position: "absolute",
                        right: "1em",
                        top: "50%",
                        transform: "translateY(-50%) " + (e.isExpanded ? "rotate(90deg)" : ""),
                        transitionDuration: "200ms",
                        transitionProperty: "transform",
                        width: "0.8rem"
                    }),
                    accordionQuestion: {
                        borderBottom: "1px solid var(--divider-default)",
                        marginBottom: 0,
                        marginTop: 0
                    },
                    accordionAnswer: e => ({
                        margin: 0,
                        backgroundColor: e.isExpanded ? "var(--background-container-light)" : void 0,
                        maxHeight: e.isExpanded ? "2500px" : 0,
                        overflow: "hidden",
                        padding: "0 var(--spacing-m)",
                        transition: e.isExpanded ? "max-height 1s ease-in-out;" : "max-height 0.5s cubic-bezier(0, 1, 0, 1)"
                    }),
                    accordionParagraph: {
                        margin: "0 0 var(--spacing-m)",
                        ":first-child": {
                            margin: "var(--spacing-m) 0 var(--spacing-m)"
                        }
                    },
                    button: e => ({
                        display: "block",
                        fontSize: "var(--font-size-m)",
                        fontWeight: 500,
                        paddingBottom: "var(--spacing-m)",
                        paddingLeft: "var(--spacing-m)",
                        paddingRight: "var(--spacing-xl)",
                        paddingTop: "var(--spacing-m)",
                        position: "relative",
                        width: "100%",
                        ":focus": {
                            outline: "1px dotted var(--divider-teal)"
                        },
                        [b.OV]: {
                            paddingBottom: "var(--spacing-m)",
                            paddingLeft: e.isExpanded ? "var(--spacing-m)" : 0,
                            paddingRight: "var(--spacing-l)",
                            paddingTop: "var(--spacing-m)",
                            transitionDuration: "100ms",
                            transitionProperty: "padding-left"
                        }
                    })
                });
            var x = i(61250);
            const N = (0, l.Z)(S.accordionParagraph, u.Z),
                w = (0, l.Z)(S.accordion, "div"),
                C = ({
                    isExpanded: e
                }) => (0, x.jsx)(h.Z, {
                    isExpanded: e,
                    extend: S.arrow,
                    icon: v.Z
                }),
                F = e => {
                    const {
                        isExpanded: n,
                        id: i,
                        extend: a,
                        onClick: s
                    } = e, r = `accordion-${i}`, o = `sect-${i}`;
                    return (0, t.useContext)(d.Z) ? (0, x.jsx)(f.Z.Blank, {
                        "aria-controls": o,
                        "aria-expanded": n,
                        isExpanded: n,
                        extend: a || S.button,
                        id: r,
                        onClick: s,
                        children: e.children
                    }) : (0, x.jsx)(c.Z, {
                        extend: a || S.button,
                        id: r,
                        children: e.children
                    })
                };
            F.propTypes = {
                extend: s().func,
                id: s().string.isRequired,
                isExpanded: s().bool,
                onClick: s().func.isRequired
            };
            const Z = e => {
                const {
                    as: n,
                    extend: i,
                    isExpanded: a,
                    question: s,
                    id: r
                } = e, l = (0, t.useContext)(d.Z);
                return (0, x.jsx)(p.Z.XS, {
                    extend: i || S.accordionQuestion,
                    "aria-expanded": a.toString(),
                    as: n || "h3",
                    id: "faq-" + o()(s),
                    children: e.children || (0, x.jsx)(F, { ...e,
                        id: `accordion-${r}`,
                        children: (0, x.jsxs)(x.Fragment, {
                            children: [s, l && (0, x.jsx)(C, {
                                isExpanded: a
                            })]
                        })
                    })
                })
            };
            Z.propTypes = {
                extend: s().func,
                id: s().string.isRequired,
                isExpanded: s().bool,
                question: s().string.isRequired
            };
            const T = e => {
                const {
                    answer: n,
                    extend: i,
                    id: t,
                    isExpanded: a
                } = e, s = `accordion-${t}`, r = `sect-${t}`;
                return (0, x.jsx)(c.Z, {
                    "aria-hidden": !a,
                    "aria-labelledby": s,
                    extend: i || S.accordionAnswer,
                    id: r,
                    isExpanded: a,
                    role: "region",
                    passThrough: ["aria-hidden", "aria-labelledby", "role"],
                    children: e.children || (0, x.jsx)(m.Z, {
                        renderers: (o = e, {
                            li: g.HC,
                            ul: g.QI,
                            blockquote: e => e.children,
                            h1: N,
                            h2: N,
                            h3: N,
                            h4: N,
                            h5: N,
                            h6: N,
                            p: N,
                            ...o.renderers
                        }),
                        source: n
                    })
                }, "answer-" + s);
                var o
            };
            T.propTypes = {
                answer: s().string,
                children: s().node,
                extend: s().func,
                id: s().string.isRequired,
                isExpanded: s().bool
            };
            const j = e => {
                const {
                    answer: n,
                    id: i,
                    question: a
                } = e, s = (0, t.useContext)(d.Z), [r, o] = (0, t.useState)(!s);
                (0, t.useEffect)((() => {
                    o(!1)
                }), [s]);
                const l = () => {
                    o((e => !e))
                };
                return "function" == typeof e.children ? e.children({
                    onClick: l,
                    isExpanded: r,
                    answer: n,
                    id: i,
                    question: a
                }) : null
            };
            j.propTypes = {
                answer: s().string,
                id: s().string.isRequired,
                question: s().string.isRequired
            }
        },
        14123: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => z
            });
            var t = i(29901),
                a = i(39422),
                s = i(46973),
                r = i(47253),
                o = i(66468),
                l = i(86981),
                d = i(91932),
                c = i(33083),
                u = i(41188),
                m = i(19309),
                p = i(2700),
                g = i(84079),
                v = i(51166),
                h = i(7490),
                f = i(73601),
                k = i(84929),
                b = i(7862),
                y = i.n(b),
                S = i(61250);
            const x = ({
                handleClick: e,
                customClassName: n,
                children: i
            }) => {
                const {
                    css: t
                } = (0, s.Z)(), a = t({
                    border: "none",
                    background: "none",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    padding: 0
                });
                return (0, S.jsx)("button", {
                    type: "button",
                    id: "ot-sdk-btn",
                    className: `${a} ${n} ot-sdk-show-settings`,
                    suppressHydrationWarning: !0,
                    onClick: e,
                    children: i
                })
            };
            x.propTypes = {
                handleClick: y().func.isRequired,
                children: y().node.isRequired
            };
            const N = x;
            var w = i(26345),
                C = i(81357),
                F = i(58422),
                Z = i(22773),
                T = i(13286);
            const j = () => {
                const {
                    countryCode: e
                } = (0, t.useContext)(C.Z), {
                    legalEntity: n
                } = (0, t.useContext)(F.Z), {
                    country: i
                } = (0, Z.Z)(), {
                    region: a
                } = (0, T.Z)(), s = (i || n || a || e).substr(0, 2).toLowerCase();
                return (0, S.jsxs)(S.Fragment, {
                    children: ["\xa9\xa0", w.Up[s] ? .legalEntityName || w.Up.eu.legalEntityName, "\xa0", (new Date).getFullYear()]
                })
            };
            var L = i(97048),
                D = i(77523),
                E = i(89341),
                I = i(48337),
                O = i(24927);
            const A = {
                    flex: "1 1 auto",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    [g.U$]: {
                        alignItems: "flex-start",
                        display: "flex",
                        flexDirection: "column"
                    }
                },
                B = {
                    display: "flex",
                    alignItems: "baseline",
                    [g.U$]: {
                        flexDirection: "column",
                        "> *:not(:first-child)": {
                            marginTop: E.t.TIGHTEST
                        }
                    },
                    [g.sJ]: {
                        "> *:not(:first-child)": {
                            marginLeft: E.t.TIGHT
                        }
                    }
                },
                R = {
                    flex: "0 1 auto",
                    display: "flex",
                    [g.OV]: {
                        marginRight: E.t.LOOSER
                    },
                    [g.U$]: {
                        paddingBottom: E.t.TIGHTEST
                    }
                },
                _ = e => ({
                    lineHeight: 0,
                    padding: E.t.TIGHTER,
                    ...e ? {
                        ":hover": {
                            backgroundColor: D.HO.teal600,
                            borderRadius: 8
                        }
                    } : {}
                }),
                H = {
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "flex-end",
                    [g.U$]: {
                        flexDirection: "column",
                        alignItems: "flex-start"
                    }
                },
                $ = {
                    fontSize: `${I.u[1]} !important`,
                    paddingLeft: `${E.t.TIGHTER} !important`,
                    paddingRight: `${E.t.TIGHTER} !important`,
                    paddingTop: `${E.t.TIGHTER} !important`,
                    paddingBottom: `${E.t.TIGHTER} !important`,
                    color: `${D.oC.PRIMARY_INVERTED} !important`,
                    ":hover": {
                        color: `${D.oC.PRIMARY_INVERTED} !important`,
                        backgroundColor: `${D.HO.teal600} !important`,
                        borderRadius: O.T[4]
                    }
                },
                V = e => {
                    const {
                        css: n
                    } = (0, s.Z)(), {
                        languageDetails: i,
                        isMinimalHeader: b
                    } = (0, r.D)(e), y = (0, a.UO)(), x = (0, o.o)(), w = `/${y.language}-${y.country}/legal-documents`, C = (0, t.useContext)(c.Z), {
                        allowCookieNote: F,
                        openCookieNote: Z
                    } = (0, t.useContext)(d.Z), {
                        trackOptimizelyEvent: T
                    } = (0, k.D)(), D = (0, f.Z)(), E = (0, v.U6)("legal-documents", y.country), {
                        pathname: I
                    } = (0, a.TH)(), O = I.startsWith("/en/careers"), {
                        viewportWidth: V
                    } = (0, L.Z)(), z = V < g.Eb, P = ({
                        children: e,
                        hasHoverAction: i
                    }) => (0, S.jsx)("span", {
                        className: n(_(i)),
                        children: (0, S.jsx)(m.Z, {
                            size: 1,
                            color: "PRIMARY_INVERTED",
                            children: e
                        })
                    }), M = e => {
                        T(e)
                    };
                    return (0, S.jsxs)("div", {
                        className: n(A),
                        children: [(0, S.jsxs)(p.Z, {
                            extend: B,
                            children: [(0, S.jsx)(P, {
                                children: (0, S.jsx)(j, {})
                            }), E && (0, S.jsx)(P, {
                                hasHoverAction: !0,
                                children: (0, S.jsx)(u.Z, {
                                    href: w,
                                    label: D("footer.links.legal_docs_index.label"),
                                    type: "BLANK",
                                    onClick: () => M("ClickFooterColophonLegalDocs")
                                })
                            }), e.items.filter(l.s).map((e => (0, S.jsx)(P, {
                                hasHoverAction: !0,
                                children: (0, S.jsx)(u.Z, {
                                    label: e.fields.text,
                                    href: x({
                                        fields: e.fields
                                    }),
                                    isOpenedInNewTab: !0,
                                    type: "BLANK",
                                    iconSize: 1,
                                    onClick: () => M(e.fields ? .optimizelyEventKey)
                                })
                            }, e.sys.id)))]
                        }), (0, S.jsxs)("div", {
                            className: n(H),
                            children: [C && F && (0, S.jsx)("div", {
                                className: n(R),
                                children: (0, S.jsx)(N, {
                                    handleClick: () => {
                                        M("ClickFooterColophonCookieNoticeUpdateSettings"), Z()
                                    },
                                    customClassName: n($),
                                    children: D("cookie_notice.update_settings")
                                })
                            }), !b && !O && (0, S.jsx)(h.Z, {
                                languageDetails: i,
                                isFooter: !0,
                                position: z ? "RIGHT" : "LEFT"
                            })]
                        })]
                    })
                };
            V.defaultProps = {
                items: []
            };
            const z = V
        },
        7490: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => K
            });
            var t = i(7862),
                a = i.n(t),
                s = i(55851),
                r = i(26345),
                o = i(52809),
                l = i(29901),
                d = i(54865),
                c = i(87548),
                u = i(95502),
                m = i(19309),
                p = i(40322),
                g = i(22999),
                v = i(62278),
                h = i(22773),
                f = i(73601),
                k = i(84929),
                b = i(94456),
                y = i(39101),
                S = i(81454),
                x = i.n(S),
                N = i(53623),
                w = i(24927),
                C = i(89341),
                F = i(48337);
            const Z = {
                    background: "var(--background-container-secondary-gray)",
                    borderRadius: "var(--border-radius-half)",
                    display: "inline-block",
                    height: "16px",
                    left: C.t.TIGHTER,
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "16px"
                },
                T = N.Z.create({
                    button: e => ({
                        borderRadius: w.T[3],
                        color: e.isActive ? "var(--typography-interactive-teal)" : "var(--typography-primary-default)",
                        display: "block",
                        fontSize: F.u[4],
                        fontWeight: 500,
                        marginBottom: "var(--spacing-3-xs)",
                        paddingBottom: C.t.TIGHT,
                        paddingLeft: C.t.LOOSER,
                        paddingRight: C.t.TIGHT,
                        paddingTop: C.t.TIGHT,
                        position: "relative",
                        width: e.renderColumns ? "fit-content" : "50%",
                        ":hover": {
                            backgroundColor: "var(--background-container-light-teal)",
                            color: "var(--typography-interactive-primary-teal-consistent)"
                        }
                    }),
                    countryWrap: {
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)"
                    },
                    dropDownWrap: {
                        width: "37ch"
                    },
                    svgPlaceholder: Z
                });
            var j = i(61250);
            const L = (0, s.Z)(T.countryWrap, "div"),
                D = (0, s.Z)(T.dropDownWrap, "div"),
                E = (0, s.Z)(T.svgPlaceholder, "span"),
                I = (e = []) => e.map((e => "br" === e.countryCode ? { ...e,
                    href: v.nH
                } : e)),
                O = e => {
                    const n = null !== e.openedNavItem,
                        [t, a] = (0, l.useState)(!1),
                        [s, r] = (0, l.useState)(),
                        {
                            trackOptimizelyEvent: o
                        } = (0, k.D)();
                    (0, l.useEffect)((() => {
                        n && (s || async function(e) {
                            const n = await i(62929)(`./${e}.svg`);
                            r(n.default)
                        }(e.countryCode), a(!0))
                    }), [n, a, e.countryCode, s]);
                    const {
                        href: d,
                        hash: c
                    } = e || {}, u = c ? d + c : d;
                    return (0, j.jsxs)(y.Z.Blank, {
                        extend: T.button,
                        href: (m = u, (m || "").replace("/__root", "").toLowerCase()),
                        isActive: e.isActive,
                        renderColumns: e.renderColumns,
                        onClick: () => {
                            o("ActionCountrySwitcher", {
                                countrySwitcherCountryCode: e.countryCode
                            })
                        },
                        disabled: e.isActive,
                        children: [(0, j.jsx)(E, {
                            children: t && (0, j.jsx)(b.Z, {
                                alt: "",
                                "aria-hidden": !0,
                                focusable: !1,
                                passThrough: ["aria-hidden", "focusable"],
                                src: s
                            })
                        }), e.children]
                    });
                    var m
                },
                A = e => {
                    const {
                        country: n,
                        language: i,
                        preview: t,
                        slug: a,
                        hash: s
                    } = (0, h.Z)(), {
                        isCustomPage: r,
                        countryVersions: o
                    } = (0, l.useContext)(c.Z), k = (0, f.Z)(), {
                        data: b,
                        error: y,
                        loading: S
                    } = (0, d.a)(x(), {
                        variables: {
                            country: n,
                            language: i,
                            preview: t,
                            slug: a || "__root",
                            ssr: !1
                        },
                        skip: r
                    });
                    if (y || S) return null;
                    const N = (e => {
                            const {
                                country: n,
                                countryVersions: i,
                                data: t,
                                language: a
                            } = e, s = t ? .pageVariations;
                            if (s) {
                                const e = (0, g.xe)(s, {
                                    country: n,
                                    language: a
                                });
                                return I(e)
                            }
                            const r = (i || []).map((({
                                country: e,
                                countryCode: n,
                                href: i
                            }) => ({
                                country: e,
                                countryCode: n,
                                href: i.replace(v.o6, "")
                            })));
                            return I(r)
                        })({
                            country: n,
                            countryVersions: o,
                            language: i,
                            data: b
                        }),
                        w = N.length > 4;
                    return (0, j.jsxs)(D, {
                        children: [(0, j.jsx)(u.Z, {
                            as: "span",
                            bottom: "TIGHT",
                            level: 4,
                            children: k("country_picker.label")
                        }), (0, j.jsx)(p.Z, {
                            bottom: "LOOSE",
                            right: "BASE",
                            children: (0, j.jsx)(m.Z, {
                                as: "p",
                                color: "SECONDARY_DEFAULT",
                                children: k("country_picker.description")
                            })
                        }), (0, j.jsx)(L, {
                            renderColumns: w,
                            children: N.map((i => (0, j.jsx)(O, {
                                isActive: (n || "").toLowerCase() === i.countryCode,
                                openedNavItem: e.openedNavItem,
                                renderColumns: w,
                                ...i,
                                hash: s,
                                children: i.country
                            }, i.country)))
                        })]
                    })
                };
            var B = i(39422),
                R = i(46973),
                _ = i(78875),
                H = i(39957);
            const $ = N.Z.create({
                    languageWrapper: {
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row"
                    },
                    button: e => ({
                        width: "fit-content",
                        borderRadius: w.T[3],
                        color: e.disabled ? "var(--typography-interactive-teal)" : "var(--typography-primary-default)",
                        display: "block",
                        fontSize: F.u[4],
                        fontWeight: 500,
                        padding: C.t.TIGHT,
                        marginTop: C.t.TIGHT,
                        marginBottom: C.t.TIGHT,
                        marginRight: C.t.TIGHT,
                        ":hover": {
                            backgroundColor: "var(--background-container-light-teal)",
                            color: "var(--typography-interactive-primary-teal-consistent)"
                        }
                    })
                }),
                V = e => {
                    const {
                        trackOptimizelyEvent: n
                    } = (0, k.D)(), {
                        link: i,
                        hash: t
                    } = e.languageDetails || {}, a = t ? i + t : i, s = e.languageDetails ? .code;
                    return (0, j.jsx)(y.Z.Blank, { ...e,
                        extend: $.button,
                        href: (r = a, (r || "").replace("/__root", "").toLowerCase()),
                        onClick: () => {
                            (0, H.Z)({
                                event: "language_switcher",
                                value: a
                            }), n("ActionLanguageSwitcher", {
                                languageSwitcherLanguageCode: s
                            })
                        },
                        disabled: e.isDisabled,
                        children: e.label
                    });
                    var r
                };
            V.propTypes = {
                languageDetails: a().shape({
                    link: a().string
                })
            };
            const z = ({
                    languageDetails: e,
                    altLanguage: n
                }) => {
                    const {
                        css: i
                    } = (0, R.Z)();
                    return (0, j.jsxs)("div", {
                        className: i($.languageWrapper),
                        children: [!(0, _.x)(e) && (0, j.jsx)(V, {
                            hrefLang: r.k$,
                            label: r.BD[r.k$],
                            languageDetails: e,
                            rel: "alternate"
                        }), (0, j.jsx)(V, {
                            isDisabled: !0,
                            label: r.BD[n]
                        })]
                    })
                },
                P = e => {
                    const {
                        css: n
                    } = (0, R.Z)();
                    return (0, j.jsxs)("div", {
                        className: n($.languageWrapper),
                        children: [(0, j.jsx)(V, {
                            isDisabled: !0,
                            label: r.BD[r.k$]
                        }), (0, j.jsx)(V, {
                            hrefLang: e.altLanguage,
                            label: r.BD[e.altLanguage],
                            languageDetails: e.languageDetails,
                            rel: "alternate"
                        })]
                    })
                },
                M = ({
                    languageDetails: e
                }) => {
                    const {
                        country: n
                    } = (0, B.UO)(), i = r.Up[n].defaultLanguage, t = e.link || i !== r.k$, a = e.code === r.k$ || (0, _.x)(e), s = (0, f.Z)();
                    return (0, j.jsxs)(j.Fragment, {
                        children: [(0, j.jsx)(u.Z, {
                            as: "span",
                            level: 4,
                            children: s("language_picker.label")
                        }), t ? a ? (0, j.jsx)(z, {
                            altLanguage: i,
                            languageDetails: e
                        }) : (0, j.jsx)(P, {
                            altLanguage: i,
                            languageDetails: e
                        }) : (0, j.jsx)(V, {
                            isDisabled: !0,
                            label: r.BD[r.k$]
                        })]
                    })
                };
            M.defaultProps = {
                languageDetails: {},
                isLabelHidden: !1
            }, M.propTypes = {
                languageDetails: a().shape({
                    link: a().string,
                    code: a().string
                }).isRequired
            };
            const q = M;
            var G = i(12318),
                U = i(39839);
            const W = N.Z.create({
                    wrapper: e => ({
                        width: e.excludeCountrySwitcher ? U.Q[13] : U.Q[14],
                        height: "fit-content",
                        padding: C.t.TIGHTER
                    })
                }),
                Y = (0, s.Z)(W.wrapper, "div"),
                J = e => {
                    const {
                        countryOffset: n,
                        languageDetails: i,
                        position: t,
                        isFooter: a,
                        excludeCountrySwitcher: s
                    } = e, {
                        language: l,
                        country: d,
                        hash: c
                    } = (0, h.Z)(), u = a ? "countryLanguageSwitcherIdFooter" : "countryLanguageSwitcher", m = [{
                        sys: {
                            id: u
                        },
                        fields: {
                            id: u,
                            label: a ? r.BD[l] || r.BD[r.k$] : (l || r.k$).toUpperCase()
                        }
                    }];
                    return (0, j.jsx)(G.ZP, {
                        items: m,
                        children: e => {
                            const r = /countrySwitcher/.test(e.key),
                                l = o.Y7M[`ICON_${d}_UTILITY`],
                                u = r && n ? n : void 0;
                            return (0, j.jsx)(G.hP, { ...e,
                                offset: u,
                                icon: l,
                                iconSize: 1,
                                size: "TINY",
                                isFooter: a,
                                position: t,
                                verticalOffset: -7,
                                isLocaleSwitcher: !0,
                                children: (0, j.jsxs)(Y, {
                                    excludeCountrySwitcher: s,
                                    children: [(0, j.jsx)(q, {
                                        languageDetails: { ...i,
                                            hash: c
                                        }
                                    }), !s && (0, j.jsx)(A, {
                                        openedNavItem: e.openedNavItem
                                    })]
                                })
                            })
                        }
                    })
                };
            J.propTypes = {
                countryOffset: a().number,
                excludeCountrySwitcher: a().bool,
                languageDetails: a().object,
                position: a().string
            };
            const K = J
        },
        90207: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => v
            });
            var t = i(55851),
                a = i(39422),
                s = i(39957),
                r = i(53861),
                o = i(39101),
                l = i(53623),
                d = i(84079);
            const c = {
                    height: d.y7,
                    position: "relative",
                    verticalAlign: "top",
                    flex: "1 0 auto",
                    zIndex: d.FP
                },
                u = l.Z.create({
                    logo: c,
                    link: c,
                    logoWrapper: c
                });
            var m = i(61250);
            const p = (0, t.Z)(u.logoWrapper, "span"),
                g = (0, t.Z)(u.logo, r.Z),
                v = () => {
                    const e = (0, a.UO)(),
                        n = e.language && e.country ? `/${e.language}-${e.country}` : "/en-eu";
                    return (0, m.jsx)(p, {
                        children: (0, m.jsx)(o.Z.Blank, {
                            onClick: () => {
                                (0, s.Z)({
                                    event: "logo_click",
                                    cta_text: "Logo",
                                    destination_url: n
                                })
                            },
                            to: n,
                            extend: u.link,
                            title: "N26",
                            children: (0, m.jsx)(g, {
                                children: "N26"
                            })
                        })
                    })
                }
        },
        59781: (e, n, i) => {
            "use strict";
            i.d(n, {
                q: () => Oe,
                Z: () => _e
            });
            var t = i(29901),
                a = i(7862),
                s = i.n(a),
                r = i(87054),
                o = i(55851),
                l = i(63911),
                d = i(87548),
                c = i(75504),
                u = i(84079),
                m = i(96931),
                p = i(55443),
                g = i(33083),
                v = i(53623);
            const h = {
                    position: "absolute",
                    height: "5px",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                    border: "none",
                    width: "100%",
                    "[value]": {
                        background: "var(--background-default)"
                    },
                    "::-webkit-progress-value": {
                        background: "var(--typography-interactive-default)"
                    },
                    "::-webkit-progress-bar": {
                        background: "var(--background-default)"
                    },
                    "::-moz-progress-bar": {
                        background: "var(--typography-interactive-default)"
                    }
                },
                f = v.Z.create({
                    progressBar: h,
                    progressBarWrapper: {
                        width: "100%"
                    }
                });
            var k = i(61250);
            const b = (0, p.Z)(f.progressBar, "progress"),
                y = (0, o.Z)(f.progressBarWrapper, "div"),
                S = e => {
                    const n = (0, t.useContext)(g.Z),
                        {
                            progressRef: i
                        } = e,
                        [a, s] = (0, t.useState)(0),
                        r = i ? .current ? .getBoundingClientRect() ? .height - 450 || 0,
                        o = (0, t.useCallback)((() => {
                            const {
                                y: e
                            } = i ? .current ? .getBoundingClientRect() || {};
                            s(e > -150 ? 0 : Math.abs(e) - 150)
                        }), [i]);
                    return (0, t.useEffect)((() => (document.addEventListener("scroll", o), () => document.removeEventListener("scroll", o))), [o]), n ? (0, k.jsx)(y, {
                        children: (0, k.jsx)(b, {
                            "aria-hidden": !0,
                            max: r,
                            value: a
                        })
                    }) : null
                };
            var x = i(97048),
                N = i(54865),
                w = i(22773),
                C = i(3714),
                F = (i(55587), i(39957)),
                Z = i(61785),
                T = i(2040),
                j = i(39101),
                L = i(34777);
            const D = v.Z.create({
                    arrowIcon: e => ({
                        position: "relative",
                        marginLeft: "0.3em",
                        fill: e.isLightBackground ? "var(--border-secondary-gray)" : "var(--iconography-primary-default-inverted)",
                        height: "1em",
                        top: "3px"
                    }),
                    link: e => ({
                        transitionProperty: "color",
                        transitionDuration: "200ms",
                        color: "inherit",
                        ":hover": {
                            color: e.isLightBackground ? "var(--typography-secondary-consistent)" : "var(--typography-default)"
                        },
                        ":active": {
                            color: e.isLightBackground ? "var(--typography-secondary-consistent)" : "var(--typography-default)"
                        }
                    }),
                    banner: e => ({
                        fontSize: "80%",
                        color: e.isLightBackground ? "var(--typography-default)" : "var(--typography-default-inverted-consistent)",
                        backgroundColor: e.isLoader ? (0, L.Lq)("GRAY_200") : (0, L.Lq)(e.backgroundColor),
                        height: u.wt,
                        zIndex: u.nh,
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        marginBottom: 0
                    }),
                    text: e => ({
                        fontWeight: e.isBold ? 500 : void 0,
                        marginBottom: 0,
                        display: "inline-block",
                        lineHeight: 1.2,
                        ...e.showHorizontalLine ? {
                            paddingRight: "var(--spacing-m)",
                            marginRight: "var(--spacing-s)",
                            borderRight: "1px solid " + (e.isLightBackground ? "var(--border-secondary-gray)" : "var(--typography-default-inverted-consistent)")
                        } : {}
                    })
                }),
                E = (0, o.Z)(D.banner, "p"),
                I = (0, o.Z)(D.text, "span"),
                O = ({
                    isLightBackground: e,
                    content: n,
                    label: i,
                    hasLink: t
                }) => (0, k.jsxs)(k.Fragment, {
                    children: [(0, k.jsx)(I, {
                        showHorizontalLine: t,
                        isLightBackground: e,
                        children: n
                    }), t && (0, k.jsxs)(k.Fragment, {
                        children: [(0, k.jsx)(I, {
                            isBold: !0,
                            children: i
                        }), (0, k.jsx)(T.Z, {
                            extend: D.arrowIcon,
                            icon: Z.Z,
                            isLightBackground: e
                        })]
                    })]
                }),
                A = e => {
                    const {
                        viewportWidth: n
                    } = (0, x.Z)(), {
                        backgroundColor: i,
                        content: t,
                        isSticky: a,
                        readMore: s
                    } = e.data ? .banner ? .fields || {}, r = (0, C.T$)(s), o = n < u.Eb, {
                        label: l,
                        externalLink: d
                    } = s ? .fields || {}, c = i || "GRAY_LIGHT", m = /LIGHT|200/.test(c), p = d ? .includes(".pdf"), g = !o && r;
                    return (0, k.jsxs)(k.Fragment, {
                        children: [!1, (0, k.jsx)(E, {
                            backgroundColor: c,
                            isFixed: a,
                            isLightBackground: m,
                            children: g ? (0, k.jsx)(j.Z.Link, {
                                to: r,
                                extend: D.link,
                                isLightBackground: m,
                                onClick: () => {
                                    const e = {
                                            event: "banner_click",
                                            destination_url: r,
                                            text: t
                                        },
                                        n = {
                                            event: "pdf_download_click",
                                            text: l,
                                            destination_url: d
                                        };
                                    (0, F.Z)(e), p && (0, F.Z)(n)
                                },
                                children: (0, k.jsx)(O, {
                                    content: t,
                                    isLightBackground: m,
                                    label: l,
                                    hasLink: g
                                })
                            }) : (0, k.jsx)(O, {
                                content: t,
                                isLightBackground: m,
                                label: l,
                                hasLink: g
                            })
                        })]
                    })
                };
            var B = i(40088),
                R = i.n(B);
            const _ = ({
                id: e
            }) => {
                const {
                    country: n,
                    language: i,
                    preview: t
                } = (0, w.Z)(), {
                    data: a,
                    loading: s,
                    error: r
                } = (0, N.a)(R(), {
                    variables: {
                        id: e,
                        language: i,
                        country: n,
                        preview: t
                    }
                });
                return r ? null : s ? (0, k.jsx)(E, {
                    isLoader: !0
                }) : (0, k.jsx)(A, {
                    data: a
                })
            };
            var H = i(80488),
                $ = i(39422),
                V = i(66468),
                z = i(47253),
                P = i(86981),
                M = i(95502),
                q = i(19309),
                G = i(41188),
                U = i(40322),
                W = i(76546),
                Y = i(40434),
                J = i(21106),
                K = i(7490),
                Q = i(90207),
                X = i(56921),
                ee = i(62278),
                ne = i(73601),
                ie = i(38440),
                te = i(87252),
                ae = i(43565),
                se = i(4028);
            const re = e => ({
                    fill: e.willGoTranslucent && e.isTranslucent ? "rgb(255, 255, 255)" : "var(--typography-default)",
                    transitionDuration: "300ms",
                    transitionProperty: "transform, opacity",
                    transitionTimingFunction: "cubic-bezier(0.8, 0, 0.5, 2)",
                    transformOrigin: "center"
                }),
                oe = v.Z.create({
                    hamburgerButton: {
                        display: "inline-block",
                        paddingRight: "3px",
                        paddingLeft: "3px",
                        height: "26px",
                        width: "32px",
                        ":focus": {
                            outline: "1px dotted var(--divider-teal)"
                        }
                    },
                    lines: {
                        width: "100%",
                        height: "100%",
                        overflow: "visible",
                        verticalAlign: "top"
                    },
                    topLine: e => ({ ...re(e),
                        transform: e.morph ? "rotate(45deg)" : "translateY(-10px)"
                    }),
                    centerLine: e => ({ ...re(e),
                        opacity: e.morph ? 0 : void 0
                    }),
                    bottomLine: e => ({ ...re(e),
                        transform: e.morph ? "rotate(-45deg)" : "translateY(10px)"
                    })
                }),
                le = (0, o.Z)(oe.lines, "svg", ["height", "width", "x", "y", "xlmns", "aria-hidden", "focusable"]),
                de = (0, o.Z)(oe.topLine, "rect", ["height", "width", "x", "y"]),
                ce = (0, o.Z)(oe.centerLine, "rect", ["height", "width", "x", "y"]),
                ue = (0, o.Z)(oe.bottomLine, "rect", ["height", "width", "x", "y"]);
            class me extends t.Component {
                constructor(...e) {
                    super(...e), (0, te.Z)(this, "state", {
                        isMounted: !1
                    })
                }
                componentDidMount() {
                    this.setState({
                        isMounted: !0
                    })
                }
                render() {
                    const {
                        isNavOpen: e,
                        localiseString: n,
                        toggleNav: i,
                        isTranslucent: t,
                        willGoTranslucent: a
                    } = this.props, s = n(e ? "header.nav.toggle.close" : "header.nav.toggle.open"), r = {
                        isTranslucent: t,
                        willGoTranslucent: a,
                        morph: e
                    };
                    return (0, k.jsxs)(j.Z.Blank, {
                        onClick: this.state.isMounted ? i : void 0,
                        extend: oe.hamburgerButton,
                        title: s,
                        href: this.state.isMounted ? void 0 : "#navigation",
                        children: [(0, k.jsxs)(le, {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "26",
                            height: "26",
                            "aria-hidden": !0,
                            focusable: "false",
                            children: [(0, k.jsx)(de, {
                                x: "0",
                                y: "12",
                                width: "26",
                                height: "2",
                                ...r
                            }), (0, k.jsx)(ce, {
                                x: "0",
                                y: "12",
                                width: "26",
                                height: "2",
                                ...r
                            }), (0, k.jsx)(ue, {
                                x: "0",
                                y: "12",
                                width: "26",
                                height: "2",
                                ...r
                            })]
                        }), (0, k.jsx)(se.Z, {
                            children: s
                        })]
                    })
                }
            }
            const pe = (0, ae.Z)((() => ({
                localiseString: (0, ne.Z)()
            })))(me);
            var ge = i(89341),
                ve = i(48337),
                he = i(86929),
                fe = i(52327);
            const ke = ({
                    banner: e
                }) => ({
                    transform: `translateY(${e?u.wt:0})`,
                    opacity: 1
                }),
                be = {
                    justifyContent: "space-between",
                    paddingLeft: ge.t.TIGHT,
                    paddingRight: ge.t.TIGHT
                },
                ye = { ...he.cU,
                    margin: 0,
                    padding: 0
                },
                Se = {
                    color: "var(--typography-interactive-primary-teal-consistent)",
                    display: "block",
                    fontSize: ve.u[6],
                    margin: "var(--spacing-m) 0"
                },
                xe = v.Z.create({
                    headerInner: fe.l,
                    navElement: e => {
                        return {
                            backgroundColor: "rgba(255, 255, 255, 0.97)",
                            bottom: 0,
                            display: "flex",
                            flexDirection: "column",
                            height: (n = Boolean(e.banner), n ? `calc(100% - ${parseInt(u.ei,10)+parseInt(u.wt,10)}px)` : `calc(100% - ${u.ei})`),
                            left: 0,
                            opacity: 0,
                            overflow: "scroll",
                            position: "fixed",
                            right: 0,
                            top: u.ei,
                            transform: "translateY(-110%)",
                            transitionDuration: "400ms, 200ms, 200ms",
                            transitionProperty: "background-color, transform, opacity",
                            transitionTimingFunction: "ease-in-out",
                            zIndex: u.Xb,
                            ...e.isNavOpen ? ke(e) : {},
                            ":target": ke(e)
                        };
                        var n
                    },
                    navItemWrap: e => ({
                        display: "block",
                        padding: 0,
                        ...e.last && {
                            backgroundColor: "var(--background-default)",
                            display: "flex",
                            boxShadow: "0 0 var(--spacing-3-xs) var(--distinct-overlay)",
                            justifyContent: "space-around",
                            marginTop: "auto",
                            padding: ge.t.TIGHT
                        }
                    }),
                    navItem: e => ({
                        color: "currentcolor",
                        textDecoration: "none",
                        position: "relative",
                        ":hover": {
                            color: "var(--typography-interactive-default)"
                        },
                        ":active": {
                            color: "var(--typography-interactive-default)"
                        }
                    }),
                    inner: be,
                    answer: e => ({
                        margin: 0,
                        maxHeight: e.isExpanded ? "500px" : 0,
                        overflow: "hidden",
                        padding: `0 ${ge.t.BASE}`,
                        transitionDuration: "200ms",
                        transitionProperty: "max-height"
                    }),
                    question: {
                        fontSize: "var(--font-size-l)",
                        marginBottom: 0,
                        marginTop: 0
                    },
                    button: e => ({
                        display: "block",
                        fontWeight: 500,
                        padding: `${ge.t.TIGHT} ${ge.t.BASE}`,
                        position: "relative",
                        width: "100%",
                        ":focus": {
                            outline: "1px dotted var(--divider-teal)"
                        }
                    }),
                    textList: ye,
                    textListItem: {
                        marginBottom: "var(--spacing-2-xs)",
                        padding: 0
                    },
                    ctaButton: Se,
                    localeWrap: {
                        alignItems: "flex-end",
                        display: "flex"
                    }
                }),
                Ne = (0, o.Z)(xe.headerInner, "div"),
                we = (0, o.Z)(xe.navElement, "nav"),
                Ce = (0, o.Z)(xe.navItemWrap, "span"),
                Fe = (0, o.Z)(xe.textList, "ul"),
                Ze = (0, o.Z)(xe.textListItem, "li"),
                Te = (0, o.Z)(xe.button, "div"),
                je = (0, o.Z)(xe.localeWrap, "div"),
                Le = ({
                    dropdownItems: e = [],
                    toggleNav: n
                }) => {
                    const i = (0, V.o)();
                    return (0, k.jsx)(Fe, {
                        children: e.map((({
                            fields: t,
                            sys: a
                        }, s) => {
                            const {
                                externalUrl: r,
                                label: o
                            } = t, l = r || i({
                                fields: t
                            }), d = e.length - 1 === s;
                            return (0, k.jsx)(Ze, {
                                isLast: d,
                                children: (0, k.jsx)(q.Z, {
                                    lineHeight: 2,
                                    size: 6,
                                    children: (0, k.jsx)(G.Z, {
                                        isLabelBold: !1,
                                        label: o,
                                        to: l,
                                        type: "BLANK",
                                        onClick: n
                                    })
                                })
                            }, a.id)
                        }))
                    })
                },
                De = ({
                    item: e,
                    activeTab: n,
                    setActiveTab: i,
                    tabs: t,
                    toggleNav: a
                }) => {
                    const {
                        businessDropdownItems: s = [],
                        link: r,
                        label: o,
                        personalDropdownItems: l = []
                    } = (0, z.D)(e.fields), d = l.filter(P.s), c = s.filter(P.s), u = {
                        personal: d,
                        business: c,
                        default: d || c || []
                    }, m = d.length > 0 && c.length > 0, p = "HeaderNavigationItem" === e.__typename, g = (0, $.TH)().pathname.includes("/careers"), {
                        cta: v,
                        businessCta: h
                    } = e ? .fields ? ? {}, f = (0, C.T$)(v), b = (0, C.T$)(h), y = (e, n) => n === e ? .get("PERSONAL");
                    return g ? (0, k.jsx)(Ce, {
                        children: (0, k.jsx)(Te, {
                            children: (0, k.jsx)(G.Z, {
                                label: e.fields ? .text,
                                to: e.fields ? .link || e.fields ? .pageLink,
                                type: "BLANK"
                            })
                        })
                    }) : (0, k.jsx)(Ce, {
                        children: (0, k.jsx)(Y.bq, {
                            id: e.sys.id,
                            question: o,
                            children: s => (0, k.jsxs)(k.Fragment, {
                                children: [(0, k.jsx)(Y.HN, { ...s,
                                    extend: xe.question,
                                    children: p ? (0, k.jsx)(Te, {
                                        children: (0, k.jsx)(G.Z, {
                                            label: s.question,
                                            to: r,
                                            type: "BLANK"
                                        })
                                    }) : (0, k.jsxs)(Y.zx, { ...s,
                                        extend: xe.button,
                                        children: [s.question, (0, k.jsx)(Y.e0, { ...s
                                        })]
                                    })
                                }), !p && (0, k.jsx)(Y.OY, { ...s,
                                    extend: xe.answer,
                                    children: m ? (0, k.jsxs)(k.Fragment, {
                                        children: [(0, k.jsx)(U.Z, {
                                            top: "TIGHT",
                                            children: (0, k.jsx)(ie.Z, {
                                                item: e,
                                                activeTab: n,
                                                setActiveTab: i,
                                                tabs: t,
                                                children: e => (0, k.jsx)(Le, {
                                                    dropdownItems: u[e.tab],
                                                    toggleNav: a
                                                })
                                            })
                                        }), (0, k.jsx)(J.Z, {
                                            extend: xe.ctaButton,
                                            readMore: e,
                                            activeOptimizelyEventKey: y(t, n) ? v ? .fields ? .optimizelyEventKey : h ? .fields ? .optimizelyEventKey,
                                            activeHref: y(t, n) ? f : b,
                                            children: y(t, n) ? v ? .fields ? .label : h ? .fields ? .label
                                        })]
                                    }) : (0, k.jsx)(Le, {
                                        dropdownItems: u.default,
                                        toggleNav: a
                                    })
                                })]
                            })
                        })
                    })
                },
                Ee = e => {
                    const {
                        blogTitleElement: n,
                        ctaDataAttributes: i,
                        headerItems: a = [],
                        isNavOpen: s,
                        languageDetails: r,
                        navRef: o,
                        pageCtaLink: l,
                        toggleNav: c,
                        trackingData: u,
                        activeTab: m,
                        setActiveTab: p,
                        tabs: g
                    } = (0, z.D)(e), v = (0, ne.Z)(), h = (0, X.Z)(), f = (0, $.TH)(), {
                        country: b
                    } = (0, w.Z)(), y = f.pathname.includes("/careers"), {
                        banner: S
                    } = (0, t.useContext)(d.Z);
                    return (0, k.jsxs)(Ne, {
                        extend: xe.inner,
                        children: [(0, k.jsxs)("div", {
                            children: [(0, k.jsx)(U.Z, {
                                as: "span",
                                right: "TIGHT",
                                children: (0, k.jsx)(pe, {
                                    isNavOpen: s,
                                    toggleNav: c
                                })
                            }), (0, k.jsx)(Q.Z, {})]
                        }), n && (0, k.jsx)(M.Z, {
                            as: n,
                            level: 3,
                            children: "Blog"
                        }), s ? !y && (0, k.jsx)(je, {
                            children: (0, k.jsx)(K.Z, {
                                countryOffset: -68,
                                languageDetails: r,
                                position: "LEFT"
                            })
                        }) : (0, k.jsx)(W.Z, {
                            size: "SMALL",
                            trackingData: u,
                            pageCtaLink: l
                        }), (0, k.jsxs)(we, {
                            "aria-label": v("header.nav.label"),
                            banner: S,
                            id: "navigation",
                            innerRef: o,
                            isNavOpen: s,
                            role: "navigation",
                            children: [a ? .filter(P.s).map(((e, n) => (0, k.jsx)(De, {
                                item: e,
                                activeTab: m,
                                setActiveTab: p,
                                tabs: g,
                                toggleNav: c
                            }, e.sys.id))), (0, k.jsxs)(Ce, {
                                last: !0,
                                children: [(0, k.jsx)(W.Z, {
                                    dataAttributes: i,
                                    href: "https://get.n26.com",
                                    pageCtaLink: l,
                                    size: "SMALL",
                                    trackingData: u
                                }), (0, k.jsx)(G.Z, {
                                    extend: xe.navItem,
                                    size: "SMALL",
                                    href: ee.BA,
                                    isOpenedInNewTab: !1,
                                    label: h("header.buttons.login", b),
                                    type: "SECONDARY"
                                })]
                            })]
                        })]
                    })
                },
                Ie = (0, t.memo)(Ee),
                Oe = (0, o.Z)(fe.Z.headerElement, "header", ["role"]),
                Ae = (0, o.Z)(fe.Z.headerSticky, "div"),
                Be = new Map([
                    ["PERSONAL", "personal"],
                    ["BUSINESS", "business"]
                ]),
                Re = e => {
                    const {
                        ctaDataAttributes: n,
                        data: i,
                        isBlogPost: a,
                        languageDetails: s,
                        pageCtaLink: o,
                        progressRef: p,
                        trackingData: g
                    } = e, [v, h] = (0, t.useState)(!1), [f, b] = (0, t.useState)(!0), [y, N] = (0, t.useState)(Be ? .get("PERSONAL")), w = (0, t.useRef)(null), {
                        banner: C,
                        showHeaderShadow: F
                    } = (0, t.useContext)(d.Z), {
                        viewportWidth: Z
                    } = (0, x.Z)();
                    (0, t.useEffect)((() => {
                        const e = () => b(0 === (0, l.c)());
                        return document.addEventListener("scroll", e, {
                            passive: !0
                        }), () => document.removeEventListener("scroll", e)
                    }), []), (0, t.useEffect)((() => {
                        if (w.current) return v ? (0, r.Qp)(w.current) : (0, r.tG)(w.current), () => (0, r.tP)()
                    }), [v]);
                    const T = Z > u.Gu,
                        j = !!C && (C.isSticky ? ? !0),
                        L = C ? .sys ? .id;
                    return (0, k.jsxs)(k.Fragment, {
                        children: [(0, k.jsxs)(c.Z.Provider, {
                            value: {
                                moduleType: "header"
                            },
                            children: [C && !j && (0, k.jsx)(_, {
                                id: L
                            }), (0, k.jsxs)(Oe, {
                                isScrolledTop: f,
                                role: "banner",
                                showHeaderShadow: F,
                                children: [a && (0, k.jsx)(S, {
                                    progressRef: p
                                }), C && j && (0, k.jsx)(_, {
                                    id: L
                                }), (0, k.jsx)(Ae, {
                                    isBlogPost: a,
                                    children: T ? (0, k.jsx)(H.Z, {
                                        ctaDataAttributes: n,
                                        headerItems: i ? .headerItems,
                                        isBannerFixed: j,
                                        languageDetails: s,
                                        pageCtaLink: o,
                                        trackingData: g,
                                        activeTab: y,
                                        setActiveTab: N,
                                        tabs: Be
                                    }) : (0, k.jsx)(Ie, {
                                        ctaDataAttributes: n,
                                        headerItems: i ? .headerItems,
                                        isNavOpen: v,
                                        languageDetails: s,
                                        navRef: w,
                                        pageCtaLink: o,
                                        toggleNav: () => h((e => !e)),
                                        trackingData: g,
                                        activeTab: y,
                                        setActiveTab: N,
                                        tabs: Be
                                    })
                                })]
                            })]
                        }), (0, k.jsx)(m.Z, {
                            type: "logo"
                        })]
                    })
                };
            Re.propTypes = {
                data: s().object,
                ctaDataAttributes: s().object,
                headerItems: s().array,
                isBlogPost: s().bool,
                languageDetails: s().object,
                pageCtaLink: s().object,
                progressRef: s().object,
                trackingData: s().object
            };
            const _e = Re
        },
        12318: (e, n, i) => {
            "use strict";
            i.d(n, {
                hP: () => N,
                _2: () => x,
                ZP: () => C
            });
            var t = i(29901),
                a = i(7862),
                s = i.n(a),
                r = i(55851),
                o = i(66468),
                l = i(33083),
                d = i(2700),
                c = i(41188),
                u = i(53623),
                m = i(89341),
                p = i(77523),
                g = i(22727),
                v = i(48337),
                h = i(84079);
            const f = e => ({
                    color: e.isNavOpen ? "var(--typography-interactive-primary-teal-consistent)" : void 0,
                    backgroundColor: e.isNavOpen ? "var(--background-container-tertiary-teal)" : "inherit"
                }),
                k = {
                    BASE: v.u[5],
                    SMALL: v.u[4],
                    TINY: v.u[3]
                },
                b = u.Z.create({
                    dropdownLink: e => ({ ...f(e),
                        background: e.isFooter ? "var(--background-container-light-teal)" : "rgb(255, 255, 255)",
                        borderRadius: "var(--border-radius-s)",
                        fontSize: k[e.size],
                        lineHeight: e.isFooter ? 0 : 1,
                        margin: "0 0 0 var(--spacing-2-xs)",
                        padding: e.isFooter ? "var(--spacing-2-xs)" : "var(--spacing-3-xs)",
                        position: "relative",
                        top: e.isFooter ? void 0 : "TINY" === e.size && "3px",
                        bottom: e.isFooter ? "TINY" === e.size && "3px" : void 0,
                        zIndex: h.FP,
                        fontWeight: e.isLocaleSwitcher ? 500 : void 0,
                        ":hover": { ...f({
                                isNavOpen: !0
                            }),
                            ...!e.hasJavaScript && {
                                "> div": {
                                    display: "block"
                                }
                            }
                        }
                    }),
                    dropdown: ({
                        hasJavaScript: e,
                        isNavOpen: n,
                        isOpeningToRight: i,
                        verticalOffset: t = 0,
                        offset: a = 0,
                        isFooter: s
                    }) => ({
                        backgroundColor: "var(--background-screen-default)",
                        borderRadius: "var(--border-radius-l)",
                        boxShadow: e ? g.z.DEFAULT : `0 0 0.25rem 0 ${p.yb.DISTINCT}`,
                        color: "var(--typography-primary-default)",
                        display: n ? "block" : "none",
                        ...i ? {
                            left: `${a}px`
                        } : {
                            right: `${a}px`
                        },
                        lineHeight: 1,
                        padding: "var(--spacing-m)",
                        position: "absolute",
                        bottom: s && e ? `calc(${m.t.LOOSER} * 2)` : s && !e ? m.t.LOOSER : void 0,
                        top: e && !s ? `calc(${h.Mz} - var(--spacing-m) + 2px + ${t}px)` : void 0,
                        [h.U$]: {
                            bottom: s ? "4.8rem" : void 0
                        }
                    })
                });
            var y = i(61250);
            const S = (0, r.Z)(b.dropdown, "div", ["onMouseEnter", "onMouseLeave", "data-testid"]),
                x = e => (0, y.jsxs)(d.Z, {
                    as: "div",
                    extend: e.extend || b.dropdownLink,
                    isNavOpen: e.isNavOpen,
                    size: e.size,
                    isFooter: e.isFooter,
                    isLocaleSwitcher: e.isLocaleSwitcher,
                    hasJavaScript: e.hasJavaScript,
                    children: [(0, y.jsx)(c.Z, { ...e,
                        isLabelBold: !1,
                        isOpenedInNewTab: !1,
                        isTargetExpanded: !0,
                        type: "BLANK"
                    }), e.children]
                });
            x.propTypes = {
                children: s().node,
                extend: s().func,
                size: s().oneOf(["BASE", "SMALL", "TINY"])
            };
            const N = e => {
                const {
                    handleNavToggle: n,
                    icon: i,
                    iconSize: a,
                    isFooter: s,
                    isLabelHidden: r,
                    item: d,
                    offset: c,
                    openedNavItem: u,
                    position: m,
                    setNavHasBeenOpened: p,
                    size: g,
                    verticalOffset: v,
                    isLocaleSwitcher: h
                } = e, f = "RIGHT" === m, {
                    label: k,
                    id: b
                } = d.fields || {}, N = (0, o.o)()({
                    fields: d.fields
                }), w = (0, t.useContext)(l.Z), C = -1 !== (u || "").indexOf(k), F = e => (i, t) => {
                    "function" == typeof p && p(!0);
                    const a = t || i ? .target ? .textContent;
                    if ("click" !== i ? .type) n(e, a);
                    else {
                        const e = a === u;
                        n(!e, e ? null : a)
                    }
                };
                return (0, y.jsx)(x, {
                    "aria-expanded": C.toString(),
                    "aria-haspopup": !0,
                    hasJavaScript: w,
                    icon: i,
                    iconSize: a,
                    id: b || k,
                    isLabelHidden: r,
                    isNavOpen: C,
                    label: k,
                    onClick: F(!0),
                    onMouseEnter: F(!0),
                    onMouseLeave: F(!1),
                    size: g,
                    to: N,
                    isFooter: s,
                    isLocaleSwitcher: h,
                    children: (0, y.jsx)(S, {
                        hasJavaScript: w,
                        id: (b || k) + "-dropdown",
                        isNavOpen: C,
                        isOpeningToRight: f,
                        offset: c,
                        onMouseEnter: () => {
                            F(!0)(null, k)
                        },
                        onMouseLeave: () => {
                            F(!1)(null, k)
                        },
                        verticalOffset: v,
                        isFooter: s,
                        children: e.children
                    })
                })
            };
            N.defaultProps = {
                position: "RIGHT",
                isFooter: !1,
                isLocaleSwitcher: !1
            }, N.propTypes = {
                handleNavToggle: s().func,
                item: s().object.isRequired,
                openedNavItem: s().string,
                setNavHasBeenOpened: s().func,
                isFooter: s().bool,
                isLocaleSwitcher: s().bool
            };
            const w = e => {
                const {
                    children: n,
                    items: i
                } = e, [a, s] = (0, t.useState)(null), r = (0, t.useRef)(), o = (e, n) => {
                    n ? e ? (clearTimeout(r.current), s(n)) : r.current = setTimeout((() => {
                        s(null)
                    }), 500) : s(null)
                };
                return i.map(((e, t) => n({
                    handleNavToggle: o,
                    index: t,
                    isLast: i.length === t + 1,
                    item: e,
                    key: e.sys.id,
                    openedNavItem: a
                })))
            };
            w.propTypes = {
                children: s().func.isRequired,
                items: s().arrayOf(s().object).isRequired,
                position: s().oneOf(["LEFT", "RIGHT"])
            };
            const C = w
        },
        80488: (e, n, i) => {
            "use strict";
            i.d(n, {
                A: () => ee,
                Z: () => pe
            });
            var t = i(29901),
                a = i(54865),
                s = i(55851),
                r = i(39422),
                o = i(66468),
                l = i(47253),
                d = i(86981),
                c = i(33083),
                u = i(22435),
                m = i(52809),
                p = i(2700),
                g = i(41188),
                v = i(84079),
                h = i(3714),
                f = i(76546),
                k = i(90207),
                b = i(17414),
                y = i(39957),
                S = i(4960),
                x = i(38847),
                N = i(97048),
                w = i(22773),
                C = i(56921),
                F = i(73601),
                Z = i(1589),
                T = i(39101),
                j = i(53623);
            const L = j.Z.create({
                base: {
                    display: "block",
                    overflow: "hidden",
                    height: "1px",
                    width: "1px",
                    ":focus": {
                        height: "auto",
                        width: "auto",
                        lineHeight: "var(--line-height-m)",
                        outline: 0,
                        boxShadow: "0 2px var(--primary-focus)"
                    }
                }
            });
            var D = i(61250);
            const E = e => {
                const n = (0, F.Z)(),
                    i = e.extend ? (0, Z.Z)(L.base, e.extend) : L.base;
                return (0, D.jsx)(T.Z.Blank, { ...e,
                    extend: i,
                    children: e.children || n("ui.skip_link")
                })
            };
            E.defaultProps = {
                href: "#main"
            };
            const I = E;
            var O = i(11669),
                A = i(84929),
                B = i(62278),
                R = i(80756),
                _ = i.n(R),
                H = i(7490),
                $ = i(38440),
                V = i(12318),
                z = i(82935),
                P = i.n(z),
                M = i(77523),
                q = i(86929),
                G = i(52327);
            const U = {
                    padding: 0,
                    textAlign: "center",
                    position: "relative",
                    width: "calc(137px - var(--spacing-m) / 2)",
                    whiteSpace: "normal"
                },
                W = { ...q.cU,
                    marginBottom: "var(--spacing-m)",
                    textAlign: "center"
                },
                Y = { ...q.cU
                },
                J = j.Z.create({
                    logoWrapper: e => ({
                        display: "flex",
                        opacity: e.isHidden ? 0 : void 0,
                        zIndex: v.FP
                    }),
                    headerInner: e => ({ ...G.l,
                        justifyContent: "space-between",
                        width: "100%"
                    }),
                    nav: e => ({
                        alignItems: "center",
                        display: "flex",
                        flex: "1 0 auto",
                        justifyContent: "center",
                        zIndex: 0,
                        "@media (min-width: 1100px)": {
                            left: 0,
                            position: "absolute",
                            right: 0
                        }
                    }),
                    localeNav: {
                        display: "flex",
                        flex: "1 0 auto",
                        marginLeft: "var(--spacing-2-xs)",
                        justifyContent: "flex-start",
                        height: "fit-content"
                    },
                    divider: {
                        borderLeft: "1px solid var(--border-primary-gray)",
                        height: "25px",
                        marginLeft: "var(--spacing-2-xs)"
                    },
                    cta: {
                        whiteSpace: "nowrap"
                    },
                    imageList: e => ({ ...q.cU,
                        display: "flex",
                        justifyContent: "space-between",
                        width: `calc(${e.dropdownItemsCount} * 137px)`
                    }),
                    imageListItem: U,
                    listImage: e => ({
                        backgroundColor: M.Bd.SHIMMER_LOADER_BACKGROUND,
                        backgroundImage: `url(${P()})`,
                        borderRadius: "var(--border-radius-s)",
                        height: "80px",
                        marginBottom: "var(--spacing-3-xs)",
                        width: "100%"
                    }),
                    tabList: W,
                    tabListItem: e => ({
                        color: e.isActive ? "var(--typography-interactive-teal)" : void 0,
                        display: "inline",
                        marginRight: "var(--spacing-m)"
                    }),
                    tabButton: e => ({
                        color: e.isActive ? "var(--typography-interactive-teal)" : void 0
                    }),
                    tab: e => ({
                        display: e.hidden ? "none" : "block"
                    }),
                    cardImage: {
                        opacity: .5
                    },
                    textList: Y,
                    textListItem: e => ({
                        marginBottom: e.isLast ? 0 : "var(--spacing-3-xs)"
                    }),
                    closeIcon: {
                        display: "block",
                        height: "1px",
                        overflow: "hidden",
                        width: "1px",
                        ":focus": {
                            boxShadow: "0 2px var(--primary-focus)",
                            height: "auto",
                            lineHeight: "var(--line-height-m)",
                            outline: 0,
                            width: "auto"
                        }
                    },
                    skipLink: {
                        left: "var(--spacing-xl)",
                        position: "absolute"
                    },
                    ctaWrap: {
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "var(--spacing-m)"
                    }
                }),
                K = (0, s.Z)(J.nav, "nav", ["aria-label", "role"]),
                Q = (0, s.Z)(J.localeNav, "div"),
                X = (0, s.Z)(J.logoWrapper, "div"),
                ee = (0, s.Z)(J.headerInner, "div"),
                ne = (0, s.Z)(J.imageList, "ul"),
                ie = (0, s.Z)(J.imageListItem, "li"),
                te = (0, s.Z)(J.listImage, "div"),
                ae = (0, s.Z)(J.textList, "ul"),
                se = (0, s.Z)(J.textListItem, "li"),
                re = (0, s.Z)(J.divider, "span"),
                oe = (e, n) => {
                    (0, S.Z)("NAVIGATION_CLICK", e), (0, y.Z)({
                        event: "navigation_click",
                        destination_url: e,
                        navigation_text: n
                    })
                },
                le = e => {
                    const n = e.item ? .fields ? .cta ? ? {},
                        i = e.item ? .fields ? .businessCta ? ? {},
                        t = (0, h.T$)(n),
                        a = (0, h.T$)(i),
                        s = e.activeTab === e.tabs ? .get("PERSONAL") ? n ? .fields ? .label : i ? .fields ? .label,
                        r = e.activeTab === e.tabs ? .get("PERSONAL") ? t : a;
                    return s ? (0, D.jsx)(p.Z, {
                        extend: J.ctaWrap,
                        children: (0, D.jsx)(g.Z, {
                            label: s,
                            size: "SMALL",
                            to: r,
                            type: "SECONDARY",
                            onClick: () => e.handleNavToggle()
                        })
                    }) : null
                },
                de = e => {
                    const {
                        navHasBeenOpened: n,
                        dropdownItems: i
                    } = e, s = (0, t.useContext)(c.Z), {
                        country: r,
                        language: d,
                        preview: u
                    } = (0, w.Z)(), m = (0, o.o)(), p = (i || []).some((e => e.fields ? .card)), {
                        data: v,
                        error: h,
                        loading: f
                    } = (0, a.a)(_(), {
                        variables: {
                            country: r,
                            language: d,
                            preview: u
                        },
                        skip: s && !n && p
                    });
                    return h ? null : (0, D.jsx)(ne, {
                        dropdownItemsCount: i.length,
                        children: i.map((({
                            fields: n,
                            sys: i
                        }, t) => {
                            const {
                                card: a,
                                cardDesign: r,
                                externalUrl: o,
                                label: d
                            } = n, c = o || m({
                                fields: n
                            }), u = !s || !f && a, p = (v ? .cards ? ? []).find((e => e.fields.type === a)), {
                                designs: h = [],
                                defaultAsset: k = {}
                            } = (0, l.D)(p ? .fields), b = h.find((e => e ? .fields ? .designType === r)), {
                                alt: y,
                                dominantColor: S,
                                ratio: N,
                                src: w
                            } = (0, x.Z)(b ? .fields ? .landscape || k.fields ? .landscape);
                            return (0, D.jsxs)(ie, {
                                children: [(0, D.jsx)(te, {
                                    children: u && w ? (0, D.jsx)(O.Z, {
                                        alt: y,
                                        aspectRatio: N,
                                        bg: "rgb:ffffff",
                                        fit: "pad",
                                        dominantColor: S,
                                        sources: {
                                            breakpoint: 0,
                                            src: w,
                                            width: 137
                                        }
                                    }) : null
                                }), (0, D.jsx)(g.Z, {
                                    isTargetExpanded: !0,
                                    label: d,
                                    onClick: () => {
                                        e.handleNavToggle(), oe(c, d)
                                    },
                                    size: "SMALL",
                                    to: c,
                                    type: "TERTIARY"
                                })]
                            }, i.id)
                        }))
                    })
                },
                ce = e => {
                    const n = e.dropdownItems || [],
                        i = (0, o.o)(),
                        {
                            country: t
                        } = (0, w.Z)();
                    return n.some((e => e.fields ? .card)) && t ? t ? (0, D.jsx)(de, { ...e
                    }) : null : (0, D.jsx)(ae, {
                        children: n.map((({
                            fields: t,
                            sys: a
                        }, s) => {
                            const {
                                externalUrl: r,
                                label: o
                            } = t, l = r || i({
                                fields: t
                            }), d = n.length - 1 === s;
                            return (0, D.jsx)(se, {
                                isLast: d,
                                children: (0, D.jsx)(g.Z, {
                                    to: l,
                                    isOpenedInNewTab: !1,
                                    label: o,
                                    onClick: () => {
                                        e.handleNavToggle(), oe(l, o)
                                    },
                                    size: "SMALL",
                                    type: "TERTIARY"
                                })
                            }, a.id)
                        }))
                    })
                },
                ue = e => {
                    const {
                        item: n,
                        isLast: i,
                        handleNavToggle: a,
                        openedNavItem: s,
                        activeTab: r,
                        setActiveTab: o,
                        tabs: c
                    } = e, {
                        country: u
                    } = (0, w.Z)(), m = (0, t.useRef)(), [p, g] = (0, t.useState)(!1), {
                        businessDropdownItems: v = [],
                        link: h,
                        label: f,
                        personalDropdownItems: k = [],
                        text: b
                    } = (0, l.D)(n.fields), y = k.filter(d.s), S = v.filter(d.s), x = {
                        personal: y,
                        business: S,
                        default: y || S || []
                    }, N = f || b, C = y.length > 0 && S.length > 0 && u, F = -1 !== (s || "").indexOf(N), Z = i && "blog" === (N || "").toLowerCase(), T = (h || "").startsWith("http") ? {
                        href: h
                    } : {
                        to: h
                    };
                    return /HeaderNavigationItem|LinkItem/.test(n.__typename) ? (0, D.jsxs)(D.Fragment, {
                        children: [Z && (0, D.jsx)(re, {}), (0, D.jsx)(V._2, {
                            isActive: F,
                            label: N,
                            onClick: () => T && oe(T, N),
                            ...T
                        })]
                    }) : (0, D.jsxs)(D.Fragment, {
                        children: [Z && (0, D.jsx)(re, {}), (0, D.jsx)(V.hP, {
                            handleNavToggle: a,
                            item: n,
                            openedNavItem: s,
                            setNavHasBeenOpened: g,
                            children: C ? (0, D.jsxs)(D.Fragment, {
                                children: [(0, D.jsx)($.Z, {
                                    item: n,
                                    tabs: c,
                                    activeTab: r,
                                    setActiveTab: o,
                                    children: e => (0, D.jsx)(ce, {
                                        dropdownItems: x[e.tab],
                                        firstItemRef: m,
                                        navHasBeenOpened: p,
                                        handleNavToggle: a
                                    })
                                }), (0, D.jsx)(le, {
                                    item: n,
                                    activeTab: r,
                                    tabs: c,
                                    handleNavToggle: a
                                })]
                            }) : (0, D.jsx)(ce, {
                                dropdownItems: x.default,
                                firstItemRef: m,
                                navHasBeenOpened: p,
                                handleNavToggle: a
                            })
                        })]
                    })
                },
                me = e => {
                    const {
                        ctaDataAttributes: n,
                        headerItems: i = [],
                        isFixed: a,
                        pageCtaLink: s,
                        trackingData: o,
                        languageDetails: c,
                        activeTab: p,
                        setActiveTab: h,
                        tabs: S
                    } = (0, l.D)(e), [x, Z] = (0, t.useState)(!1), {
                        country: T
                    } = (0, w.Z)(), j = (0, F.Z)(), L = (0, C.Z)(), {
                        viewportWidth: E
                    } = (0, N.Z)(), {
                        pathname: O
                    } = (0, r.TH)(), R = O.startsWith("/en/careers"), _ = E < v.a0, $ = L("header.buttons.login", T), {
                        labelsCTA: z,
                        hasOptimizelyExperiment: P
                    } = (0, b.ZP)($), {
                        trackOptimizelyEvent: M
                    } = (0, A.D)(), q = z ? .login, G = {
                        fields: {
                            text: z ? .signup,
                            optimizelyEventKey: b.gM
                        }
                    };
                    return (0, D.jsxs)(ee, {
                        isFixed: a,
                        children: [(0, D.jsx)(I, {
                            extend: J.skipLink,
                            onFocus: () => Z(!0),
                            onBlur: () => Z(!1)
                        }), (0, D.jsxs)(X, {
                            isHidden: x,
                            children: [(0, D.jsx)(k.Z, {}), !R && (0, D.jsx)(Q, {
                                children: (0, D.jsx)(H.Z, {
                                    languageDetails: c
                                })
                            })]
                        }), (0, D.jsx)(K, {
                            "aria-label": j("header.nav.label"),
                            role: "navigation",
                            children: (0, D.jsx)(V.ZP, {
                                items: i ? .filter(d.s) || [],
                                children: e => (0, D.jsx)(ue, { ...e,
                                    activeTab: p,
                                    setActiveTab: h,
                                    tabs: S
                                })
                            })
                        }), q && (0, D.jsxs)(u.Z, {
                            spacing: "TIGHT",
                            alignY: "center",
                            alignX: "right",
                            children: [(0, D.jsx)(u.Z.Column, {
                                children: (0, D.jsx)(g.Z, {
                                    href: B.BA,
                                    isOpenedInNewTab: !1,
                                    icon: _ ? m.R3v.ICON_ARROW_OUT_SYSTEM : null,
                                    isLabelHidden: _,
                                    label: q,
                                    onClick: () => {
                                        var e, n;
                                        P && M(b.US), e = B.BA, n = $, (0, y.Z)({
                                            event: "login_click",
                                            destination_url: e,
                                            navigation_text: n
                                        })
                                    },
                                    size: "SMALL",
                                    type: _ ? "SECONDARY" : "TERTIARY"
                                })
                            }), (0, D.jsx)(u.Z.Column, {
                                children: (0, D.jsx)(f.Z, {
                                    dataAttributes: n,
                                    extend: J.cta,
                                    pageCtaLink: P ? G : s,
                                    size: "SMALL",
                                    trackingData: o
                                })
                            })]
                        })]
                    })
                },
                pe = (0, t.memo)(me)
        },
        38440: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => k
            });
            var t = i(29901),
                a = i(7862),
                s = i.n(a),
                r = i(55851),
                o = i(33083),
                l = i(41188),
                d = i(2700),
                c = i(53623),
                u = i(86929),
                m = i(84079);
            const p = { ...u.cU,
                    backgroundColor: "var(--background-info-card)",
                    border: "1px solid var(--divider-default)",
                    borderRadius: "var(--border-radius-l)",
                    display: "inline-flex",
                    fontWeight: 500,
                    marginBottom: "var(--spacing-m)",
                    position: "relative"
                },
                g = c.Z.create({
                    tabListWrap: {
                        display: "flex",
                        justifyContent: "center"
                    },
                    tabList: p,
                    tabListItem: ({
                        count: e,
                        isActive: n
                    }) => ({
                        color: n ? "var(--typography-interactive-primary-teal-consistent)" : "var(--typography-default)",
                        fontSize: "var(--font-size-2-xs)",
                        padding: "var(--spacing-2-xs) var(--spacing-l)",
                        position: "relative",
                        textAlign: "center",
                        transitionDuration: "300ms",
                        transitionProperty: "color",
                        width: `calc(100% / ${e})`,
                        zIndex: m.FP
                    }),
                    activeStateIndicator: ({
                        activeIndex: e,
                        count: n
                    }) => ({
                        backgroundColor: "var(--background-default)",
                        borderRadius: "var(--border-radius-l)",
                        height: "100%",
                        left: e * (100 / n) + "%",
                        position: "absolute",
                        transitionDuration: "200ms",
                        transitionProperty: "left",
                        transitionTimingFunction: "cubic-bezier(0.86, 0, 0.07, 1)",
                        top: 0,
                        width: `calc(100% / ${n})`
                    }),
                    tab: e => ({
                        display: e.hidden ? "none" : "block"
                    })
                });
            var v = i(61250);
            const h = (0, r.Z)(g.tab, "div", ["aria-labelledby", "hidden", "role"]),
                f = e => {
                    const {
                        children: n,
                        item: i,
                        tabs: a,
                        setActiveTab: s,
                        activeTab: r
                    } = e, c = (0, t.useContext)(o.Z), u = {}, m = e => {
                        s(e), u[e] && u[e].focus()
                    }, p = [...a.values()], f = e => {
                        const n = p.length - 1,
                            i = p.indexOf(e.target.id),
                            t = p[0],
                            a = p[n],
                            s = p[i + 1],
                            r = p[i - 1];
                        return 39 === e.keyCode ? m(n > i ? s : t) : 37 === e.keyCode ? m(i > 0 ? r : a) : (35 === e.keyCode && (e.preventDefault(e), m(a)), void(36 === e.keyCode && (e.preventDefault(e), m(t))))
                    }, k = e => {
                        e.preventDefault(e);
                        const n = "personal" === e.target.id ? "PERSONAL" : "BUSINESS";
                        s(a ? .get(n))
                    };
                    return (0, v.jsxs)(v.Fragment, {
                        children: [c ? (0, v.jsx)(d.Z, {
                            extend: g.tabListWrap,
                            children: (0, v.jsxs)(d.Z, {
                                extend: g.tabList,
                                role: "tablist",
                                passThrough: ["role"],
                                children: [p.map(((e, n) => {
                                    const t = c && r === e;
                                    return (0, v.jsx)(d.Z, {
                                        count: p.length,
                                        extend: g.tabListItem,
                                        isActive: t,
                                        children: (0, v.jsx)(l.Z, {
                                            "aria-selected": t,
                                            "aria-controls": `${e}-tab`,
                                            extend: g.tabButton,
                                            href: `#${e}-tab`,
                                            id: e,
                                            innerRef: n => u[e] = n,
                                            isTargetExpanded: !0,
                                            label: i.fields ? .[e + "TabName"] || e,
                                            onClick: k,
                                            onKeyDown: f,
                                            role: "tab",
                                            tabIndex: t ? void 0 : -1,
                                            type: "BLANK"
                                        })
                                    }, n)
                                })), (0, v.jsx)(d.Z, {
                                    activeIndex: p.indexOf(r),
                                    count: p.length,
                                    extend: g.activeStateIndicator
                                })]
                            })
                        }) : null, p.map((i => (0, v.jsx)(h, {
                            "aria-labelledby": i,
                            hidden: c ? r !== i : void 0,
                            id: `${i}-tab`,
                            role: "tabpanel",
                            tabIndex: 0,
                            children: "function" == typeof n && e.children({
                                tab: i
                            })
                        }, i)))]
                    })
                };
            f.propTypes = {
                children: s().func.isRequired,
                item: s().object.isRequired,
                tabs: s().object.isRequired
            };
            const k = f
        },
        48604: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => c
            });
            var t = i(59781),
                a = i(54865),
                s = i(22773),
                r = i(30739),
                o = i.n(r),
                l = i(61250);
            const d = e => {
                    const {
                        country: n,
                        language: i,
                        preview: r
                    } = (0, s.Z)(), {
                        data: d,
                        error: c,
                        loading: u
                    } = (0, a.a)(o(), {
                        variables: {
                            country: n,
                            language: i,
                            preview: r
                        }
                    });
                    return u || c ? null : (0, l.jsx)(t.Z, { ...e,
                        data: d
                    })
                },
                c = e => e.noData ? (0, l.jsx)(t.Z, { ...e,
                    data: {
                        headerItems: e.headerItems
                    }
                }) : (0, l.jsx)(d, { ...e
                })
        },
        52327: (e, n, i) => {
            "use strict";
            i.d(n, {
                Z: () => l,
                l: () => o
            });
            var t = i(53623),
                a = i(22727),
                s = i(84079);
            const r = `@media (min-width: ${s.Gu}px)`,
                o = {
                    margin: "0 auto",
                    padding: "0 var(--spacing-m)",
                    alignItems: "center",
                    display: "flex",
                    height: s.ei,
                    position: "relative",
                    maxWidth: s.JN,
                    transitionDuration: "200ms",
                    transitionProperty: "height",
                    transitionTimingFunction: "ease-in-out",
                    [r]: {
                        height: s.Mz
                    },
                    [s.Qx]: {
                        padding: "0 var(--spacing-xl)"
                    }
                },
                l = t.Z.create({
                    headerElement: e => ({
                        left: 0,
                        position: e.isStatic ? "static" : "sticky",
                        right: 0,
                        top: 0,
                        zIndex: s.nh,
                        ...!e.isStatic && {
                            "::after": {
                                boxShadow: !e.showHeaderShadow && a.z.DEFAULT,
                                content: "''",
                                height: "100%",
                                opacity: e.isScrolledTop ? 0 : 1,
                                pointerEvents: "none",
                                position: "absolute",
                                top: 0,
                                transition: "opacity 100ms",
                                width: "100%"
                            }
                        }
                    }),
                    headerSticky: e => ({
                        backgroundColor: "rgba(255, 255, 255, 0.98)",
                        transitionDuration: "400ms",
                        transitionProperty: "box-shadow, background-color",
                        transitionTimingFunction: "ease-in-out",
                        [r]: {
                            backgroundSize: s.JN,
                            backgroundPosition: "center top",
                            backgroundRepeat: "no-repeat"
                        },
                        ...e.isFixed ? {
                            transitionDelay: "200ms, 0ms"
                        } : {}
                    }),
                    headerInner: o
                })
        },
        56337: (e, n, i) => {
            "use strict";
            i.d(n, {
                XY: () => nn,
                VY: () => tn,
                ZP: () => an
            });
            var t = i(29901),
                a = i(55851),
                s = i(87548),
                r = i(54865),
                o = i(46973),
                l = i(86981),
                d = i(84079),
                c = i(97048),
                u = i(22773),
                m = i(39422),
                p = i(40322),
                g = i(19309),
                v = i(38847),
                h = i(73601),
                f = i(1589),
                k = i(34959),
                b = i(39957),
                y = {
                    ANDROID: {
                        "en-eu": "https://play.google.com/store/apps/details?id=de.number26.android&hl=en-eu",
                        "de-de": "https://play.google.com/store/apps/details?id=de.number26.android&hl=de-de",
                        "en-de": "https://play.google.com/store/apps/details?id=de.number26.android&hl=en-de",
                        "de-at": "https://play.google.com/store/apps/details?id=de.number26.android&hl=de-at",
                        "en-at": "https://play.google.com/store/apps/details?id=de.number26.android&hl=en-at",
                        "fr-fr": "https://play.google.com/store/apps/details?id=de.number26.android&hl=fr-fr",
                        "en-fr": "https://play.google.com/store/apps/details?id=de.number26.android&hl=en-fr",
                        "it-it": "https://play.google.com/store/apps/details?id=de.number26.android&hl=it-it",
                        "en-it": "https://play.google.com/store/apps/details?id=de.number26.android&hl=en-it",
                        "es-es": "https://play.google.com/store/apps/details?id=de.number26.android&hl=es-es",
                        "en-es": "https://play.google.com/store/apps/details?id=de.number26.android&hl=en-es",
                        "en-gb": "https://play.google.com/store/apps/details?id=de.number26.android&hl=en_GB",
                        "en-ch": "https://play.google.com/store/apps/details?id=de.number26.android&hl=en_CH",
                        "de-ch": "https://play.google.com/store/apps/details?id=de.number26.android&hl=de_CH",
                        "en-br": "https://play.google.com/store/apps/details?id=de.number26.android&hl=en_BR",
                        "pt-br": "https://play.google.com/store/apps/details?id=de.number26.android&hl=pt_BR",
                        universal: "https://play.google.com/store/apps/details?id=de.number26.android"
                    },
                    IOS: {
                        "en-eu": "https://apps.apple.com/app/n26-the-mobile-bank/id956857223",
                        "en-at": "https://apps.apple.com/at/app/n26-die-mobile-bank/id956857223?l=en&mt=8",
                        "de-at": "https://apps.apple.com/at/app/n26-die-mobile-bank/id956857223",
                        "en-de": "https://apps.apple.com/de/app/n26-die-mobile-bank/id956857223?l=en&mt=8",
                        "de-de": "https://apps.apple.com/de/app/n26-die-mobile-bank/id956857223",
                        "en-es": "https://apps.apple.com/es/app/n26-el-banco-movil/id956857223?l=en&mt=8",
                        "es-es": "https://apps.apple.com/es/app/n26-el-banco-movil/id956857223",
                        "en-fr": "https://apps.apple.com/fr/app/n26-la-banque-mobile/id956857223?l=en&mt=8",
                        "fr-fr": "https://apps.apple.com/fr/app/n26-la-banque-mobile/id956857223",
                        "en-it": "https://apps.apple.com/it/app/n26-la-banca-per-smartphone/id956857223?l=en&mt=8",
                        "it-it": "https://apps.apple.com/it/app/n26-la-banca-per-smartphone/id956857223",
                        "en-gb": "https://apps.apple.com/gb/app/n26-the-mobile-bank/id956857223",
                        "en-ch": "https://apps.apple.com/ch/app/n26-die-mobile-bank/id956857223?l=en&mt=8",
                        "de-ch": "https://apps.apple.com/ch/app/n26-die-mobile-bank/id956857223?l=de",
                        "en-br": "https://apps.apple.com/app/n26-the-mobile-bank/id956857223",
                        "pt-br": "https://apps.apple.com/app/n26-the-mobile-bank/id956857223?l=pt",
                        universal: "https://apps.apple.com/app/n26-the-mobile-bank/id956857223"
                    }
                };
            var S = y.ANDROID,
                x = y.IOS;
            const N = (e, n, i, t = !1) => {
                const a = `${e}-${n}`,
                    s = "android" === i.toLowerCase();
                return t ? s ? S.universal : x.universal : s ? S[a] : x[a]
            };
            var w = i(4028),
                C = i(84929),
                F = i(39101),
                Z = i(54263),
                T = i(53623);
            const j = T.Z.create({
                badge: {
                    display: "inline-block",
                    maxWidth: "150px",
                    width: "100%"
                }
            });
            var L = i(61250);
            const D = e => {
                    const {
                        locale: n
                    } = (0, t.useContext)(k.Z), {
                        trackOptimizelyEvent: i
                    } = (0, C.D)(), a = e.extend ? (0, f.Z)(j.badge, e.extend) : j.badge, s = N(n, e.country, "ios", e.useUniversalLinks);
                    return s ? (0, L.jsxs)(F.Z.Blank, {
                        onClick: () => {
                            const e = {
                                event: "app_store_icon_click",
                                app_store_icon_asset: "ios.svg",
                                destination_url: s
                            };
                            (0, b.Z)(e), i("ClickFooterIOSDownloadButton")
                        },
                        extend: a,
                        href: s,
                        target: "_blank",
                        title: e.children,
                        className: e.className,
                        children: [(0, L.jsx)(Z.Z, {
                            alt: e.children,
                            "aria-hidden": !0,
                            aspectRatio: 29,
                            loading: "lazy",
                            src: "/build/media/ios.a5ad099b78edc81ddc9f42b8c0f26d21.svg"
                        }), (0, L.jsx)(w.Z, {
                            children: e.children
                        })]
                    }) : null
                },
                E = T.Z.create({
                    badge: {
                        display: "inline-block",
                        maxWidth: "150px",
                        width: "100%"
                    }
                }),
                I = e => {
                    const {
                        locale: n
                    } = (0, t.useContext)(k.Z), {
                        trackOptimizelyEvent: i
                    } = (0, C.D)(), a = e.extend ? (0, f.Z)(E.badge, e.extend) : E.badge, s = N(n, e.country, "android", e.useUniversalLinks);
                    return s ? (0, L.jsxs)(F.Z.Blank, {
                        onClick: () => {
                            const e = {
                                event: "app_store_icon_click",
                                app_store_icon_asset: "android.svg",
                                destination_url: s
                            };
                            (0, b.Z)(e), i("ClickFooterAndroidDownloadButton")
                        },
                        extend: a,
                        href: s,
                        target: "_blank",
                        title: e.children,
                        className: e.className,
                        queryStrings: ["id"],
                        children: [(0, L.jsx)(Z.Z, {
                            alt: e.children,
                            "aria-hidden": !0,
                            aspectRatio: 29,
                            loading: "lazy",
                            src: "/build/media/android.116748e7ca0027b10310b9ffb91f899e.svg"
                        }), (0, L.jsx)(w.Z, {
                            children: e.children
                        })]
                    }) : null
                };
            var O = i(11669),
                A = i(77523),
                B = i(89341),
                R = i(34777);
            const _ = "@media (min-width: 1110px)",
                H = e => ({
                    display: e.isSingleColumnLayout ? "block" : "grid",
                    flex: "1 2 0px"
                }),
                $ = {
                    padding: `${B.t.TIGHTER} 0`
                },
                V = T.Z.create({
                    footer: ({
                        backgroundColor: e
                    }) => ({
                        backgroundColor: (0, R.Lq)(e),
                        display: "flex",
                        containIntrinsicSize: "0 760px",
                        contentVisibility: "auto",
                        borderTop: `1px solid ${A.HO.gray200}`
                    }),
                    innerFooter: ({
                        useColumnsOnTablet: e
                    }) => ({
                        margin: "0 auto",
                        padding: "0 var(--spacing-m)",
                        width: d.JN,
                        [_]: {
                            display: "grid",
                            gridTemplateColumns: "2fr 3fr"
                        },
                        [d.OV]: {
                            padding: "0 var(--spacing-xl)"
                        },
                        [d.sJ]: e ? {
                            flexDirection: "column"
                        } : {}
                    }),
                    navigationGroupWrapper: e => ({ ...H(e),
                        columnGap: B.t.TIGHT,
                        gridTemplateColumns: e.isSingleColumnLayout ? "repeat(4, minmax(180px, 1fr))" : "repeat(4, minmax(140px, 1fr))",
                        padding: `${B.t.LOOSER} 0 ${B.t.LOOSE} 0`
                    }),
                    adWrapper: H,
                    cardListWrapper: $
                }),
                z = {
                    alignSelf: "end",
                    [d.sJ]: {
                        marginBottom: "var(--spacing-l)"
                    }
                },
                P = {
                    flex: "1 1 auto",
                    [d.U$]: {
                        maxWidth: "48.5%"
                    }
                },
                M = T.Z.create({
                    wrapper: e => ({
                        display: "grid",
                        margin: "0 auto",
                        gridTemplateColumns: "fit-content(350px)",
                        gridTemplateRows: "min-content 1fr",
                        paddingTop: "var(--spacing-xl) ",
                        rowGap: "var(--spacing-xl)",
                        [d.sJ]: {
                            gridTemplateRows: "min-content 1fr",
                            gridTemplateColumns: "1fr minmax(260px, 1fr)",
                            rowGap: 0
                        },
                        [d.OV]: {
                            rowGap: 0,
                            gridTemplateColumns: "max(360px) minmax(260px, 340px)",
                            columnGap: "var(--spacing-m)",
                            gridTemplateRows: "1fr"
                        },
                        [_]: {
                            gridTemplateColumns: "1fr minmax(260px, 1fr)"
                        }
                    }),
                    textColumn: z,
                    badge: P,
                    imageColumn: {
                        alignSelf: "end",
                        justifySelf: "center",
                        maxWidth: "80%",
                        width: "100%"
                    },
                    logoWrapper: {
                        display: "flex",
                        gap: "3%"
                    }
                }),
                q = (0, a.Z)(M.wrapper, "div"),
                G = (0, a.Z)(M.textColumn, "div"),
                U = (0, a.Z)(M.imageColumn, "div"),
                W = (0, a.Z)(M.logoWrapper, "div"),
                Y = e => {
                    const {
                        isSmall: n
                    } = (0, c.Z)(), {
                        country: i,
                        language: t
                    } = (0, m.UO)(), a = (0, h.Z)(), {
                        heading: s,
                        subtitle: r,
                        media: o,
                        backgroundColor: l
                    } = e.fields, {
                        alt: d,
                        image: u,
                        smallImage: f
                    } = o.fields || {}, {
                        src: k,
                        ratio: b,
                        dominantColor: y
                    } = n && f ? (0, v.Z)(f) : (0, v.Z)(u);
                    return (0, L.jsxs)(q, {
                        backgroundColor: l,
                        children: [(0, L.jsxs)(G, {
                            children: [(0, L.jsx)(g.Z, {
                                size: 8,
                                as: "p",
                                isBold: !0,
                                bottom: "BASE",
                                children: s
                            }), (0, L.jsx)(p.Z, {
                                bottom: "LOOSE",
                                children: (0, L.jsx)(g.Z, {
                                    size: 5,
                                    as: "p",
                                    children: r
                                })
                            }), (0, L.jsxs)(W, {
                                children: [(0, L.jsx)(D, {
                                    language: t,
                                    country: i,
                                    extend: M.badge,
                                    children: a("ui.download.android")
                                }), (0, L.jsx)(I, {
                                    language: t,
                                    country: i,
                                    extend: M.badge,
                                    children: a("ui.download.ios")
                                })]
                            })]
                        }), (0, L.jsx)(U, {
                            children: (0, L.jsx)(O.Z, {
                                alt: d,
                                aspectRatio: b,
                                dominantColor: y,
                                forceJpg: !0,
                                sources: [{
                                    breakpoint: 0,
                                    width: 600,
                                    src: k
                                }]
                            })
                        })]
                    })
                };
            var J = i(66468),
                K = i(47253),
                Q = i(41188),
                X = i(3714);
            const ee = T.Z.create({
                    newNote: {
                        fontSize: "90%",
                        color: "var(--typography-interactive-primary-teal-consistent)",
                        marginLeft: 0
                    },
                    bullet: {
                        color: "var(--typography-primary-default)",
                        fontSize: "80%",
                        position: "relative",
                        top: "-2px"
                    }
                }),
                ne = e => {
                    const {
                        css: n
                    } = (0, o.Z)();
                    return e.item.fields.new ? (0, L.jsxs)("span", {
                        className: n(ee.newNote),
                        children: [(0, L.jsx)("span", {
                            className: n(ee.bullet),
                            children: "\xa0\u25cf"
                        }), "\xa0New"]
                    }) : null
                };
            var ie = i(4960),
                te = i(48337);
            const ae = T.Z.create({
                    base: e => ({
                        color: e.isActive ? "var(--typography-interactive-teal)" : "var(--typography-secondary-default)",
                        fontSize: te.u[5],
                        ":hover": {
                            color: "var(--typography-interactive-default)"
                        },
                        ":active": {
                            color: "var(--typography-interactive-default)"
                        },
                        [d.OV]: {
                            fontSize: te.u[4],
                            letterSpacing: -.4
                        }
                    })
                }),
                se = e => {
                    const {
                        to: n,
                        href: i,
                        isSubCluster: t,
                        children: a,
                        onClick: s
                    } = e, r = e => {
                        "function" == typeof s && s(e)
                    };
                    return i || n ? (0, L.jsx)(F.Z.Blank, { ...e,
                        onClick: r,
                        extend: ae.base,
                        preserveQuery: !0
                    }) : t ? (0, L.jsx)(g.Z, {
                        as: "span",
                        color: "SECONDARY_DEFAULT",
                        isBold: !0,
                        isUppercase: !0,
                        size: 3,
                        children: a
                    }) : (0, L.jsx)(g.Z, {
                        as: "div",
                        bottom: "LOOSER",
                        display: "block",
                        isBold: !0,
                        size: 6,
                        children: a
                    })
                },
                re = T.Z.create({
                    itemWrap: e => ({
                        [d.sJ]: {
                            marginBottom: e.isLast && !e.isSubCluster ? 0 : B.t.TIGHT,
                            lineHeight: "var(--line-height-l)",
                            ":last-child": {
                                marginBottom: 0
                            }
                        }
                    })
                }),
                oe = (0, a.Z)(re.itemWrap, "div"),
                le = e => (0, L.jsx)(oe, { ...e,
                    children: (0, L.jsx)(se, { ...e,
                        children: e.children
                    })
                }),
                de = {
                    display: "grid",
                    gap: "var(--spacing-m)",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    [_]: {
                        gridTemplateColumns: "2fr 2fr 1fr"
                    }
                },
                ce = T.Z.create({
                    footerNav: ({
                        isFirst: e
                    }) => ({
                        marginTop: e ? B.t.BASE : void 0
                    }),
                    clusterWrapper: de
                }),
                ue = e => {
                    const {
                        css: n
                    } = (0, o.Z)(), {
                        isFirst: i,
                        isSubCluster: t,
                        items: a
                    } = e, s = (0, J.o)(), {
                        name: r = "",
                        navigationCluster: l = [],
                        navigationItems: u = [],
                        readMore: m
                    } = (0, K.D)(a.fields), {
                        trackOptimizelyEvent: p
                    } = (0, C.D)(), {
                        viewportWidth: v
                    } = (0, c.Z)(), h = v >= d.Eb && v < d.qA, f = u.length > 0, k = l.length > 0, y = (0, X.T$)(m), S = m ? .fields ? .externalLink, x = S ? .includes(".pdf");
                    return (0, L.jsxs)("div", {
                        className: n(ce.footerNav({
                            isFirst: i
                        })),
                        children: [r && (0, L.jsx)(le, {
                            isSubCluster: t,
                            bold: !0,
                            children: r
                        }), f && u.map((n => {
                            const i = s({
                                fields: n.fields
                            });
                            if (!i) return null;
                            return (0, L.jsxs)(le, {
                                to: i,
                                onClick: () => {
                                    n.fields.trackingEvent && (0, ie.Z)(n.fields.trackingEvent);
                                    const e = {
                                        event: "footer click",
                                        text: n.fields.text,
                                        group: r
                                    };
                                    (0, b.Z)(e), p(n.fields ? .optimizelyEventkey)
                                },
                                isSubCluster: t,
                                children: [n.fields.text, (0, L.jsx)(ne, {
                                    item: n,
                                    ...e
                                })]
                            }, n.sys.id)
                        })), k && (0, L.jsx)("div", {
                            className: n(ce.clusterWrapper),
                            children: l.map((e => (0, L.jsx)(ue, {
                                isSubCluster: !0,
                                items: e
                            }, e.sys.id)))
                        }), m && (0, L.jsx)(g.Z, {
                            size: h ? 5 : 3,
                            color: "INTERACTIVE_PRIMARY_TEAL_CONSISTENT",
                            isBold: !0,
                            children: (0, L.jsx)(Q.Z, {
                                onClick: x ? () => {
                                    const e = {
                                        event: "pdf_download_click",
                                        text: m ? .fields ? .label,
                                        destination_url: S
                                    };
                                    (0, b.Z)(e)
                                } : null,
                                href: y,
                                label: m.fields.label,
                                type: "BLANK"
                            })
                        })]
                    })
                },
                me = ue;
            var pe = i(97043),
                ge = i(24086),
                ve = i(49164),
                he = i(23281);
            const fe = e => {
                    const {
                        isOpen: n,
                        items: i,
                        onClick: t
                    } = e, {
                        trackOptimizelyEvent: a
                    } = (0, C.D)(), s = (0, J.o)(), {
                        name: r = "",
                        navigationItems: o = [],
                        readMore: l
                    } = (0, K.D)(i.fields), d = (0, X.T$)(l), c = l ? .fields ? .externalLink, u = c ? .includes(".pdf"), m = o.find((e => e.fields.new));
                    return (0, L.jsx)(he.Z, {
                        isOpen: n,
                        label: [r, m ? (0, L.jsx)(ne, {
                            item: m
                        }, m.sys.id) : null],
                        isLabelBold: !0,
                        onClick: t,
                        panelSpacing: "NONE",
                        children: (0, L.jsxs)(pe.Z.List, {
                            shadow: "NONE",
                            children: [o.map((e => {
                                const n = s({
                                    fields: e.fields
                                });
                                if (!n) return null;
                                return (0, L.jsx)(ve.Z, {
                                    color: "PRIMARY_DEFAULT",
                                    spacing: "BASE",
                                    label: [e.fields.text, (0, L.jsx)(ne, {
                                        item: e
                                    }, e.sys.id)],
                                    to: ge.t ? null : n,
                                    href: ge.t ? n : null,
                                    onClick: () => {
                                        e.fields.trackingEvent && (0, ie.Z)(e.fields.trackingEvent);
                                        const n = {
                                            event: "footer click",
                                            text: e.fields.text,
                                            group: r
                                        };
                                        (0, b.Z)(n), a(e.fields ? .optimizelyEventkey)
                                    }
                                }, e.sys.id)
                            })), l && (0, L.jsx)(ve.Z, {
                                color: "INTERACTIVE_PRIMARY_TEAL_CONSISTENT",
                                spacing: "BASE",
                                label: l.fields.label,
                                to: ge.t ? null : d,
                                href: ge.t ? d : null,
                                onClick: u ? () => {
                                    const e = {
                                        event: "pdf_download_click",
                                        text: l ? .fields ? .label,
                                        destination_url: c
                                    };
                                    (0, b.Z)(e)
                                } : null,
                                isLabelBold: !0
                            })]
                        })
                    })
                },
                ke = T.Z.create({
                    footer: ({
                        backgroundColor: e
                    }) => ({
                        backgroundColor: (0, R.Lq)(e)
                    }),
                    innerFooter: ({
                        reverseColumnsOnSmallScreen: e
                    }) => ({
                        display: "flex",
                        flexDirection: e ? "column-reverse" : "column",
                        padding: `${B.t.LOOSE} ${B.t.BASE}`,
                        ":last-child": {
                            paddingBottom: 0
                        }
                    })
                }),
                be = e => {
                    const {
                        item: n
                    } = e, {
                        backgroundColor: i,
                        reverseColumnsOnSmallScreen: a,
                        firstColumn: s,
                        secondColumn: r
                    } = (0, K.D)(n.fields), {
                        css: d
                    } = (0, o.Z)({
                        reverseColumnsOnSmallScreen: a,
                        backgroundColor: i
                    }), c = [...s, ...r].filter(l.s), u = c.filter((e => "FooterNavigation" === e.__typename)), m = c.filter((e => "FooterAd" === e.__typename)), p = (e => {
                        const n = [];
                        return e.forEach((e => {
                            const {
                                navigationCluster: i = []
                            } = (0, K.D)(e.fields);
                            i.length > 0 ? n.push(...i) : n.push(e)
                        })), n
                    })(u), [g, v] = (0, t.useState)(null);
                    return (0, L.jsx)("div", {
                        className: d(ke.footer),
                        children: (0, L.jsxs)("div", {
                            className: d(ke.innerFooter),
                            children: [(0, L.jsx)(pe.Z.List, {
                                shadow: "NONE",
                                children: p.map(((n, i) => (0, L.jsx)(fe, {
                                    isOpen: g === i,
                                    onClick: () => (e => {
                                        if (g === e) return v(null);
                                        v(e)
                                    })(i),
                                    items: n,
                                    ...e
                                }, n.sys.id)))
                            }), m.map((e => (0, L.jsx)(Y, { ...e
                            }, e.sys.id)))]
                        })
                    })
                };
            var ye = i(416),
                Se = i.n(ye);
            const xe = e => e && 1 === e.length && "FooterAd" === e[0].__typename,
                Ne = e => {
                    const {
                        css: n
                    } = (0, o.Z)(), {
                        language: i,
                        preview: t,
                        country: a
                    } = (0, u.Z)(), {
                        data: s,
                        loading: m,
                        error: p
                    } = (0, r.a)(Se(), {
                        variables: {
                            language: i,
                            preview: t,
                            country: a
                        }
                    }), {
                        viewportWidth: g
                    } = (0, c.Z)(), v = g < d.Eb;
                    return m || p || !s ? .footer ? null : s.footer.filter(l.s).map((i => {
                        const {
                            backgroundColor: t,
                            firstColumn: a,
                            secondColumn: s
                        } = i.fields || {}, r = i.sys.id;
                        if (v) return (0, L.jsx)(be, {
                            item: i
                        }, r);
                        const o = [a, s].filter(Boolean),
                            d = !((c = o) && c.filter(xe).length > 0);
                        var c;
                        return (0, L.jsx)("div", {
                            className: n(V.footer({
                                backgroundColor: t
                            })),
                            children: (0, L.jsx)("div", {
                                className: n(V.innerFooter({
                                    useColumnsOnTablet: d
                                })),
                                children: o.map(((i, t) => {
                                    const a = xe(i),
                                        s = r + t;
                                    if (a) return (0, L.jsx)("div", {
                                        className: n(V.adWrapper),
                                        children: (0, L.jsx)(Y, { ...i[0]
                                        }, i[0].sys.id)
                                    }, s);
                                    const o = i.filter(l.s),
                                        c = 1 === o.length,
                                        u = V.navigationGroupWrapper({
                                            isSingleColumnLayout: c,
                                            useColumnsOnTablet: d
                                        });
                                    return (0, L.jsx)("div", {
                                        className: n(u),
                                        children: o.map((n => (0, L.jsx)(me, {
                                            items: n,
                                            ...e
                                        }, n.sys.id)))
                                    }, s)
                                }))
                            })
                        }, r)
                    }))
                };
            var we = i(7490),
                Ce = i(90207),
                Fe = i(59781),
                Ze = i(80488);
            const Te = ({
                languageDetails: e
            }) => (0, L.jsx)(Fe.q, {
                isStatic: !0,
                role: "banner",
                children: (0, L.jsxs)(Ze.A, {
                    children: [(0, L.jsx)(Ce.Z, {}), Boolean(e) && (0, L.jsx)(we.Z, {
                        excludeCountrySwitcher: !0,
                        languageDetails: e,
                        position: "LEFT"
                    })]
                })
            });
            var je = i(48604),
                Le = i(35983),
                De = i(87252),
                Ee = i(43565);
            const Ie = e => !!e && /[^@]+@[^.]+(\.[^.]{2,})+$/i.test(e);
            var Oe = i(82636),
                Ae = i(7123);
            const Be = e => (0, L.jsx)("svg", {
                viewBox: "0 0 32 32",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, L.jsx)("path", {
                    fill: "currentcolor",
                    d: "M18.642 16l9.73 9.73c.248.232.435.523.542.848.086.285.086.574 0 .86a2.034 2.034 0 0 1-.543.848l-.085.085a2.034 2.034 0 0 1-.848.543c-.281.086-.58.086-.86 0a2.034 2.034 0 0 1-.849-.543L16 18.64l-9.73 9.73a2.036 2.036 0 0 1-.848.544c-.28.085-.579.085-.86 0a2.036 2.036 0 0 1-.848-.544l-.085-.085a2.034 2.034 0 0 1-.543-.849 1.464 1.464 0 0 1 0-.86 2.02 2.02 0 0 1 .543-.847L13.36 16 3.629 6.27a2.034 2.034 0 0 1-.543-.848 1.464 1.464 0 0 1 0-.86 2.03 2.03 0 0 1 .543-.848l.085-.085a2.02 2.02 0 0 1 .848-.543c.281-.086.58-.086.86 0 .286.085.558.253.849.543L16 13.36l9.73-9.73c.232-.249.523-.436.848-.544.28-.085.579-.085.86 0 .285.086.558.254.848.544l.085.085c.25.233.436.524.543.849.086.285.086.574 0 .86a2.022 2.022 0 0 1-.543.847L18.64 16z"
                })
            });
            var Re = i(2040),
                _e = i(17254),
                He = i(49849);
            const $e = e => {
                    const n = (0, t.useContext)(He.Z);
                    return (0, L.jsx)("input", {
                        type: "hidden",
                        name: "_csrf",
                        value: n
                    })
                },
                Ve = T.Z.create({
                    buttonWrapper: {
                        margin: "var(--spacing-m) 0"
                    },
                    overlayTitle: {
                        maxWidth: ["60%", "var(--width-2-xs)"],
                        marginBottom: "var(--spacing-m)"
                    },
                    closeIcon: {
                        fontSize: "40%",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -30%)"
                    }
                }),
                ze = (0, a.Z)(Ve.buttonWrapper, "div");
            class Pe extends t.Component {
                constructor(e) {
                    super(e), (0, De.Z)(this, "registerDialog", (e => {
                        this.dialog = e, e && this.dialog.on("show", this.focusField)
                    })), (0, De.Z)(this, "focusField", (() => {
                        this.email = this.email || document.querySelector("#email"), this.email.focus()
                    })), (0, De.Z)(this, "onInputChange", (e => {
                        this.setState({
                            email: e.target.value
                        })
                    })), (0, De.Z)(this, "handleSubmit", (async e => {
                        e.preventDefault(), this.setState({
                            isSubmitting: !0
                        });
                        const n = (0, (await i.e(5099).then(i.bind(i, 15099))).default)("i3BmGtvTZCksaxLwdwOZVUuIJzH5cnU/n+3SWx1zSzHYVrRws/YDZfEwvwxRvRHnFCEX+oOKjks+x6dgTJikSyTPCbWNgTvP34Kug9OaX1H6Aqtb/G+CuCWIvbA7fiTt", {
                            variables: this.state.email
                        });
                        (0, ie.Z)(this.props.productKey, n.variables.payload), setTimeout((() => {
                            this.setState({
                                isSubmitting: !1,
                                success: !0
                            })
                        }), 250)
                    })), this.state = {
                        isSubmitting: !1,
                        email: "",
                        success: !1,
                        isMounted: !1
                    }
                }
                componentDidMount() {
                    this.setState({
                        isMounted: !0
                    })
                }
                render() {
                    const {
                        localiseString: e
                    } = this.props, n = !Ie(this.state.email), i = (0, L.jsx)(Re.Z, {
                        extend: Ve.closeIcon,
                        icon: Be
                    }), t = "product_waiting_list." + this.props.productKey;
                    return (0, L.jsx)(_e.Z, {
                        id: this.props.id,
                        title: e(t + ".dialog_title"),
                        dialogRef: this.registerDialog,
                        themeName: "light",
                        closeButtonContent: i,
                        children: this.state.success ? (0, L.jsx)(Oe.Z.L, {
                            extend: Ve.overlayTitle,
                            children: e(t + ".success")
                        }) : this.state.isMounted && void 0 !== window.snowplow ? (0, L.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, L.jsx)($e, {}), (0, L.jsx)(Oe.Z.L, {
                                children: e(t + ".title")
                            }), (0, L.jsx)(Ae.Z, {
                                onChange: this.onInputChange,
                                value: this.state.email,
                                name: "email",
                                type: "email",
                                id: "email",
                                placeholder: e(t + ".input.placeholder"),
                                label: e(t + "input.label"),
                                hiddenLabel: !0,
                                required: !0,
                                "aria-invalid": n
                            }), (0, L.jsx)(ze, {
                                children: (0, L.jsx)(F.Z.Default, {
                                    type: "submit",
                                    loading: this.state.isSubmitting,
                                    disabled: n || this.state.isSubmitting,
                                    children: e(t + ".submit")
                                })
                            })]
                        }) : (0, L.jsx)(Oe.Z.XS, {
                            children: e("product_waiting_list_overlay.blocked")
                        })
                    })
                }
            }
            const Me = (0, Ee.Z)((() => ({
                localiseString: (0, h.Z)()
            })))(Pe);
            var qe = i(54534),
                Ge = i(87942),
                Ue = i.n(Ge),
                We = i(14123),
                Ye = i(40439),
                Je = i.n(Ye);
            const Ke = {
                    height: "100%",
                    alignItems: "center",
                    margin: "0 auto",
                    padding: B.t.BASE,
                    display: "flex",
                    flexWrap: "wrap",
                    [d.sJ]: {
                        padding: `${B.t.BASE} ${B.t.LOOSE}`
                    }
                },
                Qe = T.Z.create({
                    colophon: ({
                        background: e
                    }) => ({
                        width: "100%",
                        backgroundColor: A.HO[e]
                    }),
                    nav: Ke
                }),
                Xe = Ue()((0, Ee.Z)(u.Z), (0, qe.B)(Je()))(((e, n) => {
                    const i = e.data.colophonItems || [],
                        t = e ? .background,
                        {
                            css: a
                        } = (0, o.Z)();
                    return (0, L.jsx)("div", {
                        className: a(Qe.colophon({
                            background: t
                        })),
                        children: (0, L.jsx)("div", {
                            className: a(Qe.nav),
                            children: (0, L.jsx)(We.Z, { ...e,
                                items: i,
                                context: n,
                                languageDetails: e.languageDetails,
                                isMinimalHeader: e.isMinimalHeader
                            })
                        })
                    })
                })),
                en = T.Z.create({
                    base: {
                        backgroundColor: "rgb(255, 255, 255)",
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: 1.75,
                        minHeight: "100vh"
                    },
                    content: {
                        flex: "1 0 auto"
                    }
                }),
                nn = (0, a.Z)(en.base, "div"),
                tn = (0, a.Z)(en.content, "main", ["role"]),
                an = e => {
                    const n = (0, t.useRef)(null),
                        i = (0, Le.Z)("content_only"),
                        [a, r] = (0, t.useState)(!1);
                    if (e.loading) return (0, L.jsx)(nn, {
                        children: (0, L.jsx)(je.Z, {})
                    });
                    if (i) return (0, L.jsx)(nn, {
                        children: (0, L.jsx)(tn, {
                            children: e.children
                        })
                    });
                    const o = Boolean(null),
                        {
                            isMinimalHeader: l,
                            showFooter: d
                        } = (c = e.headerFooterMode, e.seaPage ? {
                            isMinimalHeader: !0,
                            showFooter: !1
                        } : c && "DEFAULT" !== c ? "MINIMAL_HEADER" === c ? {
                            isMinimalHeader: !0,
                            showFooter: !0
                        } : "MINIMAL_HEADER_AND_NO_FOOTER" === c ? {
                            isMinimalHeader: !0,
                            showFooter: !1
                        } : "NO_FOOTER" === c ? {
                            isMinimalHeader: !1,
                            showFooter: !1
                        } : void 0 : {
                            isMinimalHeader: !1,
                            showFooter: !0
                        });
                    var c;
                    return (0, L.jsx)(s.Z.Provider, {
                        value: {
                            banner: e.banner,
                            countryVersions: e.countryVersions,
                            isCustomPage: e.isCustomPage,
                            waitingListDialog: n,
                            trackingData: e.trackingData,
                            showHeaderShadow: a,
                            setShowHeaderShadow: r
                        },
                        children: (0, L.jsxs)(nn, {
                            children: [l ? (0, L.jsx)(Te, {
                                languageDetails: e.language
                            }) : (0, L.jsx)(je.Z, {
                                blogTitleElement: e.blogTitleElement,
                                ctaDataAttributes: null,
                                headerStyle: e.headerStyle,
                                isBlogPost: e.isBlogPost,
                                languageDetails: e.language,
                                pageCtaLink: e.pageCtaLink,
                                progressRef: e.progressRef,
                                trackingData: e.trackingData
                            }), (0, L.jsx)(tn, {
                                id: "main",
                                role: "main",
                                children: e.children
                            }), (0, L.jsxs)("footer", {
                                role: "contentinfo",
                                children: [d && (0, L.jsx)(Ne, {}), (0, L.jsx)(Xe, {
                                    background: e.seaPage ? null : "teal500",
                                    region: e.region,
                                    languageDetails: e.language,
                                    isMinimalHeader: l
                                })]
                            }), o && (0, L.jsx)(Me, {})]
                        })
                    })
                }
        },
        22999: (e, n, i) => {
            "use strict";
            i.d(n, {
                ZP: () => Z,
                ku: () => v,
                xR: () => g,
                xe: () => f
            });
            var t = i(90292),
                a = i.n(t),
                s = i(3010),
                r = i.n(s),
                o = i(26345),
                l = i(78875),
                d = i(35748),
                c = i(62278),
                u = i(49679);
            const m = (e, n = {}, i = "") => e.map((e => {
                    if (e = e.toLowerCase(), !o.Up[e]) return [];
                    const t = [];
                    (n[o.k$] || (0, l.x)(n)) && t.push({
                        country: e,
                        language: o.k$,
                        slug: N(n[o.k$], i)
                    });
                    const a = o.Up[e].defaultLanguage;
                    return a !== o.k$ && t.push({
                        country: e,
                        language: a,
                        slug: N(n[a], i)
                    }), t
                })).flat().sort(((e, n) => e.language - n.language)),
                p = (e, n) => {
                    const {
                        hrefData: i = [],
                        routeParams: t,
                        renderXDefault: s = !0
                    } = n, {
                        language: r,
                        country: l
                    } = t, d = a()(i.map((e => e.country.toUpperCase())));
                    return i.map((({
                        country: n,
                        language: i,
                        slug: t
                    }) => {
                        const a = N(t),
                            s = w({
                                baseUrl: e,
                                language: i,
                                country: n,
                                slug: a
                            }),
                            c = "eu" === n ? o.k$.toLowerCase() : C(i, n);
                        if (i === r && n === l) return {
                            href: s,
                            hreflang: c
                        };
                        return (0, u.ZP)({
                            country: n,
                            countryCodes: d,
                            language: i,
                            slug: a
                        }) === s ? {
                            href: s,
                            hreflang: c
                        } : void 0
                    })).filter(Boolean).sort(k).map(((e, n) => s ? b(e, n) : e))
                },
                g = e => n => {
                    const {
                        pageVariations: i,
                        regions: t,
                        routeParams: a
                    } = n, {
                        language: s,
                        country: o,
                        slug: l
                    } = a;
                    if (!i) return null;
                    const c = ((e, n) => {
                        const {
                            pageVariations: i,
                            routeParams: t
                        } = n;
                        return i.reduce(((n, i) => {
                            const {
                                hrefData: a
                            } = i;
                            return [...n, p(e, {
                                hrefData: a,
                                routeParams: t,
                                renderXDefault: !1
                            })]
                        }), []).flat().sort(k).map(b)
                    })(e, {
                        pageVariations: i,
                        routeParams: a
                    });
                    if (!c) return null;
                    const m = i.map((e => e.hrefData)).flat(),
                        g = (0, u.ZP)({
                            slug: F(m, a),
                            countryCodes: t,
                            ...a
                        }),
                        {
                            href: v
                        } = (0, d.Q)({
                            location: e,
                            paths: [w({
                                language: s,
                                country: o,
                                slug: l
                            })]
                        });
                    return g !== v ? null : r()(c, "hreflang")
                },
                v = e => n => {
                    const {
                        regions: i = [],
                        routeParams: t,
                        slugs: a,
                        basePath: s = "",
                        hrefData: r
                    } = n, {
                        language: l
                    } = t, d = l === o.k$, c = S(Object.keys(o.Up), i.length > 0 ? i.map((e => e.toLowerCase())) : r.map((e => e.country))), u = h({
                        countries: c,
                        slug: s
                    });
                    return [...r || m(i, a, s), ...u].map((({
                        language: n,
                        country: i,
                        slug: t,
                        external: a
                    }) => {
                        const s = o.Up[i].defaultLanguage === n,
                            r = n === o.k$;
                        return !d && s || d && r ? {
                            country: x(n, i),
                            countryCode: i,
                            href: w({
                                baseUrl: e,
                                language: n,
                                country: i,
                                slug: t
                            }),
                            external: a
                        } : void 0
                    })).filter(Boolean).sort(((e, n) => e.country > n.country ? 1 : -1))
                },
                h = ({
                    countries: e = [],
                    slug: n = ""
                }) => e.map((e => {
                    const i = o.Up[e].defaultLanguage,
                        t = {
                            country: e,
                            slug: n,
                            external: !0
                        },
                        a = { ...t,
                            language: i
                        },
                        s = { ...t,
                            language: "en"
                        };
                    return [a, i !== o.k$ ? s : void 0]
                })).flat().filter(Boolean),
                f = (e, n) => {
                    const i = e.map((e => e.hrefData)).flat();
                    return v(c.o6)({
                        hrefData: i,
                        routeParams: n
                    })
                },
                k = (e, n) => o.wC.indexOf(e.hreflang) - o.wC.indexOf(n.hreflang),
                b = ({
                    href: e,
                    hreflang: n
                }, i) => 0 === i ? {
                    href: e,
                    hreflang: "x-default"
                } : {
                    href: e,
                    hreflang: n
                },
                y = (e, n, i) => {
                    const {
                        language: t,
                        country: a
                    } = i, s = n.find((e => e.country + e.language === a + t)) || {};
                    return w({
                        baseUrl: e,
                        language: s.language,
                        country: s.country,
                        slug: s.slug
                    })
                },
                S = (e = [], n = []) => e.map((e => n.includes(e) ? void 0 : e)).filter(Boolean),
                x = (e, n) => e === o.k$ ? o.Up[n].defaultName : o.Up[n].nativeName,
                N = (e, n) => "__root" === e ? "" : [n, e].filter(Boolean).join("/"),
                w = ({
                    baseUrl: e,
                    language: n,
                    country: i,
                    slug: t
                }) => {
                    t = (t || "").replace("__root", "");
                    const a = C(n, i),
                        s = (0, d.Q)({
                            location: e,
                            paths: [a, t]
                        });
                    return "string" == typeof s ? s : s.href
                },
                C = (e, n = "") => e + (n ? "-" : "") + n.toLowerCase(),
                F = (e, {
                    language: n,
                    country: i
                }) => e.find((e => e.language === n && e.country === i)) ? .slug.split("/").pop(),
                Z = e => n => {
                    const {
                        regions: i,
                        slugs: t,
                        basePath: a,
                        overrides: s,
                        routeParams: r
                    } = n, o = m(i, t, a), l = p(e, {
                        hrefData: o,
                        overrides: s,
                        routeParams: r
                    });
                    return y(e, o, r) !== (0, u.ZP)({
                        countryCodes: i,
                        slug: F(o, r),
                        overrides: s,
                        ...r
                    }) || o.length < 3 ? null : l
                }
        },
        22081: e => {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "Video"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ContentfulMediaObject"
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
                                        value: "description"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
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
                }],
                loc: {
                    start: 0,
                    end: 121
                }
            };
            n.loc.source = {
                body: "fragment Video on ContentfulMediaObject {\n  sys {\n    id\n  }\n  fields {\n    description\n    file {\n      url\n    }\n  }\n}\n",
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

            function a(e, n) {
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
            })), e.exports = n, e.exports.Video = function(e, n) {
                var i = {
                    kind: e.kind,
                    definitions: [a(e, n)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var s = t[n] || new Set,
                    r = new Set,
                    o = new Set;
                for (s.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(n) {
                    var t = a(e, n);
                    t && i.definitions.push(t)
                })), i
            }(n, "Video")
        },
        34048: e => {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "ContentfulSysObject"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ContentfulSysObject"
                        }
                    },
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
                }],
                loc: {
                    start: 0,
                    end: 106
                }
            };
            n.loc.source = {
                body: "fragment ContentfulSysObject on ContentfulSysObject {\n  id\n  contentType {\n    sys {\n      id\n    }\n  }\n}\n",
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

            function a(e, n) {
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
            })), e.exports = n, e.exports.ContentfulSysObject = function(e, n) {
                var i = {
                    kind: e.kind,
                    definitions: [a(e, n)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var s = t[n] || new Set,
                    r = new Set,
                    o = new Set;
                for (s.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(n) {
                    var t = a(e, n);
                    t && i.definitions.push(t)
                })), i
            }(n, "ContentfulSysObject")
        },
        40671: e => {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "NavigationItem"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "LinkItem"
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
                                        value: "link"
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
                                        value: "new"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "trackingEvent"
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
                    end: 281
                }
            };
            n.loc.source = {
                body: "fragment NavigationItem on LinkItem {\n  sys {\n    id\n  }\n  fields {\n    link\n    text\n    new\n    trackingEvent\n    pageLink {\n      sys {\n        id\n        contentType {\n          sys {\n            id\n          }\n        }\n      }\n      fields {\n        slug\n      }\n    }\n  }\n}\n",
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

            function a(e, n) {
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
            })), e.exports = n, e.exports.NavigationItem = function(e, n) {
                var i = {
                    kind: e.kind,
                    definitions: [a(e, n)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var s = t[n] || new Set,
                    r = new Set,
                    o = new Set;
                for (s.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(n) {
                    var t = a(e, n);
                    t && i.definitions.push(t)
                })), i
            }(n, "NavigationItem")
        },
        62786: (e, n, i) => {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "Media"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Media"
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
                                        value: "alt"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
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
                                        value: "smallImage"
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
                                        value: "video"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "Video"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "smallVideo"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "Video"
                                            },
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
                    end: 402
                }
            };
            t.loc.source = {
                body: "#TODO: Replace with aliases when babel-plugin-import-graphql supports it\n#import '../ContentfulMediaObject/Video.fragment.graphql'\n#import '../ContentfulMediaObject/Image.fragment.graphql'\n\nfragment Media on Media {\n  sys {\n    id\n  }\n  fields {\n    alt\n    image {\n      ...Image\n    }\n    smallImage {\n      ...Image\n    }\n    video {\n      ...Video\n    }\n    smallVideo {\n      ...Video\n    }\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};

            function s(e) {
                return e.filter((function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !a[n] && (a[n] = !0, !0)
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
            t.definitions = t.definitions.concat(s(i(22081).definitions)), t.definitions = t.definitions.concat(s(i(96363).definitions));
            var o = {};

            function l(e, n) {
                for (var i = 0; i < e.definitions.length; i++) {
                    var t = e.definitions[i];
                    if (t.name && t.name.value == n) return t
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    r(e, n), o[e.name.value] = n
                }
            })), e.exports = t, e.exports.Media = function(e, n) {
                var i = {
                    kind: e.kind,
                    definitions: [l(e, n)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var t = o[n] || new Set,
                    a = new Set,
                    s = new Set;
                for (t.forEach((function(e) {
                        s.add(e)
                    })); s.size > 0;) {
                    var r = s;
                    s = new Set, r.forEach((function(e) {
                        a.has(e) || (a.add(e), (o[e] || new Set).forEach((function(e) {
                            s.add(e)
                        })))
                    }))
                }
                return a.forEach((function(n) {
                    var t = l(e, n);
                    t && i.definitions.push(t)
                })), i
            }(t, "Media")
        },
        80756: (e, n, i) => {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "getCardsForCountryInCardsSlideShow"
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
                                                                value: "designName"
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
                                                                value: "designName"
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
                    end: 835
                }
            };
            t.loc.source = {
                body: "#TODO: Replace with aliases when babel-plugin-import-graphql supports it\n#import '../../../../../../shared/api/helpers/ContentfulMediaObject/Image.fragment.graphql'\n\nquery getCardsForCountryInCardsSlideShow(\n  $country: ContentfulCountry!\n  $language: ContentfulLanguage!\n  $preview: Boolean\n) {\n  cards: getCardsForCountry(\n    country: $country\n    language: $language\n    preview: $preview\n  ) {\n    sys {\n      id\n    }\n    fields {\n      type\n      defaultAsset {\n        sys {\n          id\n        }\n        fields {\n          designType\n          designName\n          landscape {\n            ...Image\n          }\n        }\n      }\n      designs {\n        sys {\n          id\n        }\n        fields {\n          designType\n          designName\n          landscape {\n            ...Image\n          }\n        }\n      }\n    }\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};

            function s(e, n) {
                if ("FragmentSpread" === e.kind) n.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var i = e.type;
                    "NamedType" === i.kind && n.add(i.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    s(e, n)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    s(e, n)
                })), e.definitions && e.definitions.forEach((function(e) {
                    s(e, n)
                }))
            }
            t.definitions = t.definitions.concat(i(96363).definitions.filter((function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var n = e.name.value;
                return !a[n] && (a[n] = !0, !0)
            })));
            var r = {};

            function o(e, n) {
                for (var i = 0; i < e.definitions.length; i++) {
                    var t = e.definitions[i];
                    if (t.name && t.name.value == n) return t
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    s(e, n), r[e.name.value] = n
                }
            })), e.exports = t, e.exports.getCardsForCountryInCardsSlideShow = function(e, n) {
                var i = {
                    kind: e.kind,
                    definitions: [o(e, n)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var t = r[n] || new Set,
                    a = new Set,
                    s = new Set;
                for (t.forEach((function(e) {
                        s.add(e)
                    })); s.size > 0;) {
                    var l = s;
                    s = new Set, l.forEach((function(e) {
                        a.has(e) || (a.add(e), (r[e] || new Set).forEach((function(e) {
                            s.add(e)
                        })))
                    }))
                }
                return a.forEach((function(n) {
                    var t = o(e, n);
                    t && i.definitions.push(t)
                })), i
            }(t, "getCardsForCountryInCardsSlideShow")
        },
        81454: (e, n, i) => {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "getPageVariations"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
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
                                value: "pageVariations"
                            },
                            name: {
                                kind: "Name",
                                value: "getPageVariations"
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
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ContentfulSysObject"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hrefData"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "country"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "language"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 471
                }
            };
            t.loc.source = {
                body: "#import '../../../../../shared/api/helpers/ContentfulSysObject/ContentfulSysObject.fragment.graphql'\n\nquery getPageVariations(\n  $country: ContentfulCountry!\n  $language: ContentfulLanguage!\n  $preview: Boolean\n  $slug: String!\n) {\n  pageVariations: getPageVariations(\n    country: $country\n    language: $language\n    preview: $preview\n    slug: $slug\n  ) {\n    sys {\n      ...ContentfulSysObject\n    }\n    hrefData {\n      country\n      language\n      slug\n    }\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};

            function s(e, n) {
                if ("FragmentSpread" === e.kind) n.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var i = e.type;
                    "NamedType" === i.kind && n.add(i.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    s(e, n)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    s(e, n)
                })), e.definitions && e.definitions.forEach((function(e) {
                    s(e, n)
                }))
            }
            t.definitions = t.definitions.concat(i(34048).definitions.filter((function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var n = e.name.value;
                return !a[n] && (a[n] = !0, !0)
            })));
            var r = {};

            function o(e, n) {
                for (var i = 0; i < e.definitions.length; i++) {
                    var t = e.definitions[i];
                    if (t.name && t.name.value == n) return t
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    s(e, n), r[e.name.value] = n
                }
            })), e.exports = t, e.exports.getPageVariations = function(e, n) {
                var i = {
                    kind: e.kind,
                    definitions: [o(e, n)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var t = r[n] || new Set,
                    a = new Set,
                    s = new Set;
                for (t.forEach((function(e) {
                        s.add(e)
                    })); s.size > 0;) {
                    var l = s;
                    s = new Set, l.forEach((function(e) {
                        a.has(e) || (a.add(e), (r[e] || new Set).forEach((function(e) {
                            s.add(e)
                        })))
                    }))
                }
                return a.forEach((function(n) {
                    var t = o(e, n);
                    t && i.definitions.push(t)
                })), i
            }(t, "getPageVariations")
        },
        40088: (e, n, i) => {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "getBanner"
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
                    }, {
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
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "banner"
                            },
                            name: {
                                kind: "Name",
                                value: "getBanner"
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
                            }, {
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
                                                value: "content"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isSticky"
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
                }],
                loc: {
                    start: 0,
                    end: 479
                }
            };
            t.loc.source = {
                body: "#import '../../../../../shared/api/helpers/CountryAwareLinkItem/CountryAwareLinkItem.fragment.graphql'\n\nquery getBanner(\n  $country: ContentfulCountry!\n  $language: ContentfulLanguage!\n  $preview: Boolean\n  $id: ID!\n) {\n  banner: getBanner(\n    country: $country\n    locale: $language\n    preview: $preview\n    id: $id\n  ) {\n    sys {\n      id\n    }\n    fields {\n      content\n      isSticky\n      backgroundColor\n      readMore {\n        ...CountryAwareLink\n      }\n    }\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};

            function s(e, n) {
                if ("FragmentSpread" === e.kind) n.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var i = e.type;
                    "NamedType" === i.kind && n.add(i.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    s(e, n)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    s(e, n)
                })), e.definitions && e.definitions.forEach((function(e) {
                    s(e, n)
                }))
            }
            t.definitions = t.definitions.concat(i(8013).definitions.filter((function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var n = e.name.value;
                return !a[n] && (a[n] = !0, !0)
            })));
            var r = {};

            function o(e, n) {
                for (var i = 0; i < e.definitions.length; i++) {
                    var t = e.definitions[i];
                    if (t.name && t.name.value == n) return t
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    s(e, n), r[e.name.value] = n
                }
            })), e.exports = t, e.exports.getBanner = function(e, n) {
                var i = {
                    kind: e.kind,
                    definitions: [o(e, n)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var t = r[n] || new Set,
                    a = new Set,
                    s = new Set;
                for (t.forEach((function(e) {
                        s.add(e)
                    })); s.size > 0;) {
                    var l = s;
                    s = new Set, l.forEach((function(e) {
                        a.has(e) || (a.add(e), (r[e] || new Set).forEach((function(e) {
                            s.add(e)
                        })))
                    }))
                }
                return a.forEach((function(n) {
                    var t = o(e, n);
                    t && i.definitions.push(t)
                })), i
            }(t, "getBanner")
        },
        30739: (e, n, i) => {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "getHeader"
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
                                value: "headerItems"
                            },
                            name: {
                                kind: "Name",
                                value: "getHeader"
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
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "HeaderNavigationGroup"
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
                                                        value: "link"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "personalTabName"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "businessTabName"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cta"
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
                                                        value: "businessCta"
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
                                                        value: "personalDropdownItems"
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
                                                                        value: "label"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "externalUrl"
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
                                                                                    kind: "FragmentSpread",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "ContentfulSysObject"
                                                                                    },
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
                                                                                        value: "slug"
                                                                                    },
                                                                                    arguments: [],
                                                                                    directives: []
                                                                                }, {
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
                                                                                        value: "countryCodes"
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
                                                                        value: "card"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "cardDesign"
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
                                                        value: "businessDropdownItems"
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
                                                                        value: "label"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "externalUrl"
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
                                                                                    kind: "FragmentSpread",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "ContentfulSysObject"
                                                                                    },
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
                                                                                        value: "slug"
                                                                                    },
                                                                                    arguments: [],
                                                                                    directives: []
                                                                                }, {
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
                                                                                        value: "countryCodes"
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
                                                                        value: "card"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "cardDesign"
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
                                }, {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "HeaderNavigationItem"
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
                                                        value: "link"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "externalUrl"
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
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "ContentfulSysObject"
                                                                    },
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
                                                                        value: "slug"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 1935
                }
            };
            t.loc.source = {
                body: "#TODO: Replace with aliases when babel-plugin-import-graphql supports it\n#import '../../../../shared/api/helpers/ContentfulSysObject/ContentfulSysObject.fragment.graphql'\n#import '../../../../shared/api/helpers/CountryAwareLinkItem/CountryAwareLinkItem.fragment.graphql'\n\nquery getHeader(\n  $country: ContentfulCountry!\n  $language: ContentfulLanguage!\n  $preview: Boolean\n) {\n  headerItems: getHeader(\n    country: $country\n    language: $language\n    preview: $preview\n  ) {\n    ... on HeaderNavigationGroup {\n      sys {\n        id\n      }\n      fields {\n        label\n        link\n        personalTabName\n        businessTabName\n        cta {\n          ...CountryAwareLink\n        }\n        businessCta {\n          ...CountryAwareLink\n        }\n        personalDropdownItems {\n          sys {\n            id\n          }\n          fields {\n            label\n            externalUrl\n            pageLink {\n              sys {\n                ...ContentfulSysObject\n              }\n              fields {\n                slug\n                title\n                countryCodes\n              }\n            }\n            card\n            cardDesign\n          }\n        }\n        businessDropdownItems {\n          sys {\n            id\n          }\n          fields {\n            label\n            externalUrl\n            pageLink {\n              sys {\n                ...ContentfulSysObject\n              }\n              fields {\n                slug\n                title\n                countryCodes\n              }\n            }\n            card\n            cardDesign\n          }\n        }\n      }\n    }\n    ... on HeaderNavigationItem {\n      sys {\n        id\n      }\n      fields {\n        label\n        link\n        externalUrl\n        pageLink {\n          sys {\n            ...ContentfulSysObject\n          }\n          fields {\n            slug\n            title\n            countryCodes\n          }\n        }\n      }\n    }\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};

            function s(e) {
                return e.filter((function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !a[n] && (a[n] = !0, !0)
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
            t.definitions = t.definitions.concat(s(i(34048).definitions)), t.definitions = t.definitions.concat(s(i(8013).definitions));
            var o = {};

            function l(e, n) {
                for (var i = 0; i < e.definitions.length; i++) {
                    var t = e.definitions[i];
                    if (t.name && t.name.value == n) return t
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    r(e, n), o[e.name.value] = n
                }
            })), e.exports = t, e.exports.getHeader = function(e, n) {
                var i = {
                    kind: e.kind,
                    definitions: [l(e, n)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var t = o[n] || new Set,
                    a = new Set,
                    s = new Set;
                for (t.forEach((function(e) {
                        s.add(e)
                    })); s.size > 0;) {
                    var r = s;
                    s = new Set, r.forEach((function(e) {
                        a.has(e) || (a.add(e), (o[e] || new Set).forEach((function(e) {
                            s.add(e)
                        })))
                    }))
                }
                return a.forEach((function(n) {
                    var t = l(e, n);
                    t && i.definitions.push(t)
                })), i
            }(t, "getHeader")
        },
        40439: (e, n, i) => {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "getColophonNavigation"
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
                                value: "colophonItems"
                            },
                            name: {
                                kind: "Name",
                                value: "getColophonNavigation"
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
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "NavigationItem"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 418
                }
            };
            t.loc.source = {
                body: "#TODO: Replace with aliases when babel-plugin-import-graphql supports it\n#import '../../../../../shared/api/helpers/LinkItem/NavigationItem.fragment.graphql'\n\nquery getColophonNavigation(\n  $country: ContentfulCountry!\n  $language: ContentfulLanguage!\n  $preview: Boolean\n) {\n  colophonItems: getColophonNavigation(\n    country: $country\n    language: $language\n    preview: $preview\n  ) {\n    ...NavigationItem\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};

            function s(e, n) {
                if ("FragmentSpread" === e.kind) n.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var i = e.type;
                    "NamedType" === i.kind && n.add(i.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    s(e, n)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    s(e, n)
                })), e.definitions && e.definitions.forEach((function(e) {
                    s(e, n)
                }))
            }
            t.definitions = t.definitions.concat(i(40671).definitions.filter((function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var n = e.name.value;
                return !a[n] && (a[n] = !0, !0)
            })));
            var r = {};

            function o(e, n) {
                for (var i = 0; i < e.definitions.length; i++) {
                    var t = e.definitions[i];
                    if (t.name && t.name.value == n) return t
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    s(e, n), r[e.name.value] = n
                }
            })), e.exports = t, e.exports.getColophonNavigation = function(e, n) {
                var i = {
                    kind: e.kind,
                    definitions: [o(e, n)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var t = r[n] || new Set,
                    a = new Set,
                    s = new Set;
                for (t.forEach((function(e) {
                        s.add(e)
                    })); s.size > 0;) {
                    var l = s;
                    s = new Set, l.forEach((function(e) {
                        a.has(e) || (a.add(e), (r[e] || new Set).forEach((function(e) {
                            s.add(e)
                        })))
                    }))
                }
                return a.forEach((function(n) {
                    var t = o(e, n);
                    t && i.definitions.push(t)
                })), i
            }(t, "getColophonNavigation")
        },
        416: (e, n, i) => {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "getFooter"
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
                                value: "footer"
                            },
                            name: {
                                kind: "Name",
                                value: "getFooter"
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
                                                value: "backgroundColor"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "reverseColumnsOnSmallScreen"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "firstColumn"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "InlineFragment",
                                                    typeCondition: {
                                                        kind: "NamedType",
                                                        name: {
                                                            kind: "Name",
                                                            value: "FooterAd"
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
                                                                        value: "heading"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "subtitle"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "media"
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
                                                }, {
                                                    kind: "InlineFragment",
                                                    typeCondition: {
                                                        kind: "NamedType",
                                                        name: {
                                                            kind: "Name",
                                                            value: "FooterNavigation"
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
                                                                        value: "name"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "navigationItems"
                                                                    },
                                                                    arguments: [],
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "FragmentSpread",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "NavigationItem"
                                                                            },
                                                                            directives: []
                                                                        }]
                                                                    }
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "navigationCluster"
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
                                                                                        value: "name"
                                                                                    },
                                                                                    arguments: [],
                                                                                    directives: []
                                                                                }, {
                                                                                    kind: "Field",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "navigationItems"
                                                                                    },
                                                                                    arguments: [],
                                                                                    directives: [],
                                                                                    selectionSet: {
                                                                                        kind: "SelectionSet",
                                                                                        selections: [{
                                                                                            kind: "FragmentSpread",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "NavigationItem"
                                                                                            },
                                                                                            directives: []
                                                                                        }]
                                                                                    }
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
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "secondColumn"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "InlineFragment",
                                                    typeCondition: {
                                                        kind: "NamedType",
                                                        name: {
                                                            kind: "Name",
                                                            value: "FooterAd"
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
                                                                        value: "heading"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "subtitle"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "media"
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
                                                }, {
                                                    kind: "InlineFragment",
                                                    typeCondition: {
                                                        kind: "NamedType",
                                                        name: {
                                                            kind: "Name",
                                                            value: "FooterNavigation"
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
                                                                        value: "name"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "navigationItems"
                                                                    },
                                                                    arguments: [],
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "FragmentSpread",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "NavigationItem"
                                                                            },
                                                                            directives: []
                                                                        }]
                                                                    }
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "navigationCluster"
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
                                                                                        value: "name"
                                                                                    },
                                                                                    arguments: [],
                                                                                    directives: []
                                                                                }, {
                                                                                    kind: "Field",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "navigationItems"
                                                                                    },
                                                                                    arguments: [],
                                                                                    directives: [],
                                                                                    selectionSet: {
                                                                                        kind: "SelectionSet",
                                                                                        selections: [{
                                                                                            kind: "FragmentSpread",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "NavigationItem"
                                                                                            },
                                                                                            directives: []
                                                                                        }]
                                                                                    }
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 2385
                }
            };
            t.loc.source = {
                body: "#TODO: Replace with aliases when babel-plugin-import-graphql supports it\n#import '../../../../../shared/api/helpers/LinkItem/NavigationItem.fragment.graphql'\n#import '../../../../../shared/api/helpers/Media/Media.fragment.graphql'\n#import '../../../../../shared/api/helpers/CountryAwareLinkItem/CountryAwareLinkItem.fragment.graphql'\n\nquery getFooter(\n  $country: ContentfulCountry!\n  $language: ContentfulLanguage!\n  $preview: Boolean\n) {\n  footer: getFooter(country: $country, language: $language, preview: $preview) {\n    sys {\n      id\n    }\n    fields {\n      backgroundColor\n      reverseColumnsOnSmallScreen\n\n      firstColumn {\n        ... on FooterAd {\n          sys {\n            id\n          }\n          fields {\n            heading\n            subtitle\n            media {\n              ...Media\n            }\n            backgroundColor\n          }\n        }\n        ... on FooterNavigation {\n          sys {\n            id\n          }\n          fields {\n            name\n            navigationItems {\n              ...NavigationItem\n            }\n            navigationCluster {\n              sys {\n                id\n              }\n              fields {\n                name\n                navigationItems {\n                  ...NavigationItem\n                }\n                readMore {\n                  ...CountryAwareLink\n                }\n              }\n            }\n            readMore {\n              ...CountryAwareLink\n            }\n          }\n        }\n      }\n      secondColumn {\n        ... on FooterAd {\n          sys {\n            id\n          }\n          fields {\n            heading\n            subtitle\n            media {\n              ...Media\n            }\n            backgroundColor\n          }\n        }\n        ... on FooterNavigation {\n          sys {\n            id\n          }\n          fields {\n            name\n            navigationItems {\n              ...NavigationItem\n            }\n            navigationCluster {\n              sys {\n                id\n              }\n              fields {\n                name\n                navigationItems {\n                  ...NavigationItem\n                }\n                readMore {\n                  ...CountryAwareLink\n                }\n              }\n            }\n            readMore {\n              ...CountryAwareLink\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};

            function s(e) {
                return e.filter((function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !a[n] && (a[n] = !0, !0)
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
            t.definitions = t.definitions.concat(s(i(40671).definitions)), t.definitions = t.definitions.concat(s(i(62786).definitions)), t.definitions = t.definitions.concat(s(i(8013).definitions));
            var o = {};

            function l(e, n) {
                for (var i = 0; i < e.definitions.length; i++) {
                    var t = e.definitions[i];
                    if (t.name && t.name.value == n) return t
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    r(e, n), o[e.name.value] = n
                }
            })), e.exports = t, e.exports.getFooter = function(e, n) {
                var i = {
                    kind: e.kind,
                    definitions: [l(e, n)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var t = o[n] || new Set,
                    a = new Set,
                    s = new Set;
                for (t.forEach((function(e) {
                        s.add(e)
                    })); s.size > 0;) {
                    var r = s;
                    s = new Set, r.forEach((function(e) {
                        a.has(e) || (a.add(e), (o[e] || new Set).forEach((function(e) {
                            s.add(e)
                        })))
                    }))
                }
                return a.forEach((function(n) {
                    var t = l(e, n);
                    t && i.definitions.push(t)
                })), i
            }(t, "getFooter")
        },
        62929: (e, n, i) => {
            var t = {
                "./at.svg": [57796, 7796],
                "./br.svg": [65332, 5332],
                "./ch.svg": [98512, 8512],
                "./de.svg": [58592, 8592],
                "./es.svg": [71152, 1152],
                "./eu.svg": [66698, 6698],
                "./fr.svg": [16646, 6646],
                "./gb.svg": [96133, 6133],
                "./it.svg": [17945, 7945],
                "./us.svg": [68979, 8979]
            };

            function a(e) {
                if (!i.o(t, e)) return Promise.resolve().then((() => {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }));
                var n = t[e],
                    a = n[0];
                return i.e(n[1]).then((() => i.t(a, 23)))
            }
            a.keys = () => Object.keys(t), a.id = 62929, e.exports = a
        }
    }
]);