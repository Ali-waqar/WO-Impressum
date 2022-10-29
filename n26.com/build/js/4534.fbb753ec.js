"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4534], {
        54534: (t, e, i) => {
            i.d(e, {
                B: () => _
            });
            var n = i(68224),
                r = i(64062),
                s = i(29901),
                o = i(10063),
                u = i.n(o),
                a = i(7862),
                p = i(54865);

            function c(t) {
                var e = t.children,
                    i = t.query,
                    n = (0, r._T)(t, ["children", "query"]),
                    s = (0, p.a)(i, n);
                return s ? e(s) : null
            }
            c.propTypes = {
                client: a.object,
                children: a.func.isRequired,
                fetchPolicy: a.string,
                notifyOnNetworkStatusChange: a.bool,
                onCompleted: a.func,
                onError: a.func,
                pollInterval: a.number,
                query: a.object.isRequired,
                variables: a.object,
                ssr: a.bool,
                partialRefetch: a.bool,
                returnPartialData: a.bool
            };
            var l = i(48203),
                f = function() {
                    return {}
                },
                b = function() {
                    return !1
                };

            function h(t) {
                return t.displayName || t.name || "Component"
            }

            function d(t, e) {
                for (var i = {}, n = 0, r = t.variables; n < r.length; n++) {
                    var s = r[n],
                        o = s.variable,
                        u = s.type;
                    if (o.name && o.name.value) {
                        var a = o.name.value,
                            p = e[a];
                        void 0 === p ? "NonNullType" !== u.kind && (i[a] = void 0) : i[a] = p
                    }
                }
                return i
            }
            var v = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return i.withRef = !1, i.setWrappedInstance = i.setWrappedInstance.bind(i), i
                }
                return (0, r.ZT)(e, t), e.prototype.getWrappedInstance = function() {
                    return (0, l.kG)(this.withRef, 31), this.wrappedInstance
                }, e.prototype.setWrappedInstance = function(t) {
                    this.wrappedInstance = t
                }, e
            }(s.Component);
            var y = i(71284);

            function O(t) {
                var e = (0, y.D)(t.mutation, t),
                    i = e[0],
                    n = e[1];
                return t.children ? t.children(i, n) : null
            }
            O.propTypes = {
                mutation: a.object.isRequired,
                variables: a.object,
                optimisticResponse: a.oneOfType([a.object, a.func]),
                refetchQueries: a.oneOfType([a.arrayOf(a.oneOfType([a.string, a.object])), a.func]),
                awaitRefetchQueries: a.bool,
                update: a.func,
                children: a.func.isRequired,
                onCompleted: a.func,
                onError: a.func,
                fetchPolicy: a.string
            };
            var m = i(86327),
                g = function(t) {
                    function e(e) {
                        var i = e.options,
                            n = e.context,
                            r = e.setResult,
                            s = t.call(this, i, n) || this;
                        return s.currentObservable = {}, s.setResult = r, s.initialize(i), s
                    }
                    return (0, r.ZT)(e, t), e.prototype.execute = function(t) {
                        if (!0 === this.getOptions().skip) return this.cleanup(), {
                            loading: !1,
                            error: void 0,
                            data: void 0,
                            variables: this.getOptions().variables
                        };
                        var e = t;
                        this.refreshClient().isNew && (e = this.getLoadingResult());
                        var i = this.getOptions().shouldResubscribe;
                        return "function" == typeof i && (i = !!i(this.getOptions())), !1 !== i && this.previousOptions && Object.keys(this.previousOptions).length > 0 && (this.previousOptions.subscription !== this.getOptions().subscription || !(0, m.D)(this.previousOptions.variables, this.getOptions().variables) || this.previousOptions.skip !== this.getOptions().skip) && (this.cleanup(), e = this.getLoadingResult()), this.initialize(this.getOptions()), this.startSubscription(), this.previousOptions = this.getOptions(), (0, r.pi)((0, r.pi)({}, e), {
                            variables: this.getOptions().variables
                        })
                    }, e.prototype.afterExecute = function() {
                        this.isMounted = !0
                    }, e.prototype.cleanup = function() {
                        this.endSubscription(), delete this.currentObservable.query
                    }, e.prototype.initialize = function(t) {
                        this.currentObservable.query || !0 === this.getOptions().skip || (this.currentObservable.query = this.refreshClient().client.subscribe({
                            query: t.subscription,
                            variables: t.variables,
                            fetchPolicy: t.fetchPolicy,
                            context: t.context
                        }))
                    }, e.prototype.startSubscription = function() {
                        this.currentObservable.subscription || (this.currentObservable.subscription = this.currentObservable.query.subscribe({
                            next: this.updateCurrentData.bind(this),
                            error: this.updateError.bind(this),
                            complete: this.completeSubscription.bind(this)
                        }))
                    }, e.prototype.getLoadingResult = function() {
                        return {
                            loading: !0,
                            error: void 0,
                            data: void 0
                        }
                    }, e.prototype.updateResult = function(t) {
                        this.isMounted && this.setResult(t)
                    }, e.prototype.updateCurrentData = function(t) {
                        var e = this.getOptions().onSubscriptionData;
                        this.updateResult({
                            data: t.data,
                            loading: !1,
                            error: void 0
                        }), e && e({
                            client: this.refreshClient().client,
                            subscriptionData: t
                        })
                    }, e.prototype.updateError = function(t) {
                        this.updateResult({
                            error: t,
                            loading: !1
                        })
                    }, e.prototype.completeSubscription = function() {
                        var t = this;
                        Promise.resolve().then((function() {
                            var e = t.getOptions().onSubscriptionComplete;
                            e && e(), t.endSubscription()
                        }))
                    }, e.prototype.endSubscription = function() {
                        this.currentObservable.subscription && (this.currentObservable.subscription.unsubscribe(), delete this.currentObservable.subscription)
                    }, e
                }(i(60820).V),
                R = i(22452);

            function E(t) {
                var e = function(t, e) {
                    (0, s.useReducer)((function(t) {
                        return t + 1
                    }), 0)[1];
                    var i = (0, s.useContext)((0, R.K)()),
                        n = e ? (0, r.pi)((0, r.pi)({}, e), {
                            subscription: t
                        }) : {
                            subscription: t
                        },
                        o = (0, s.useState)({
                            loading: !n.skip,
                            error: void 0,
                            data: void 0
                        }),
                        u = o[0],
                        a = o[1],
                        p = (0, s.useRef)(),
                        c = (p.current || (p.current = new g({
                            options: n,
                            context: i,
                            setResult: a
                        })), p.current);
                    return c.setOptions(n, !0), c.context = i, (0, s.useEffect)((function() {
                        return c.afterExecute()
                    })), (0, s.useEffect)((function() {
                        return function() {
                            c.cleanup(), p.current = void 0
                        }
                    }), []), c.execute(u)
                }(t.subscription, t);
                return t.children && e ? t.children(e) : null
            }

            function _(t, e) {
                switch (void 0 === e && (e = {}), (0, n.E2)(t).type) {
                    case n.n_.Mutation:
                        return function(t, e) {
                            void 0 === e && (e = {});
                            var i = (0, n.E2)(t),
                                o = e.options,
                                a = void 0 === o ? f : o,
                                p = e.alias,
                                c = void 0 === p ? "Apollo" : p,
                                l = a;
                            return "function" != typeof l && (l = function() {
                                    return a
                                }),
                                function(n) {
                                    var o = c + "(" + h(n) + ")",
                                        a = function(u) {
                                            function a() {
                                                return null !== u && u.apply(this, arguments) || this
                                            }
                                            return (0, r.ZT)(a, u), a.prototype.render = function() {
                                                var o = this.props,
                                                    u = l(o);
                                                return e.withRef && (this.withRef = !0, o = Object.assign({}, o, {
                                                    ref: this.setWrappedInstance
                                                })), !u.variables && i.variables.length > 0 && (u.variables = d(i, o)), s.createElement(O, (0, r.pi)({
                                                    ignoreResults: !0
                                                }, u, {
                                                    mutation: t
                                                }), (function(t, i) {
                                                    var u, a, p = i.data,
                                                        c = (0, r._T)(i, ["data"]),
                                                        l = Object.assign(c, p || {}),
                                                        f = e.name || "mutate",
                                                        b = e.name ? f + "Result" : "result",
                                                        h = ((u = {})[f] = t, u[b] = l, u);
                                                    if (e.props) {
                                                        var d = ((a = {})[f] = t, a[b] = l, a.ownProps = o, a);
                                                        h = e.props(d)
                                                    }
                                                    return s.createElement(n, (0, r.pi)({}, o, h))
                                                }))
                                            }, a.displayName = o, a.WrappedComponent = n, a
                                        }(v);
                                    return u()(a, n, {})
                                }
                        }(t, e);
                    case n.n_.Subscription:
                        return function(t, e) {
                            void 0 === e && (e = {});
                            var i = (0, n.E2)(t),
                                o = e.options,
                                a = void 0 === o ? f : o,
                                p = e.skip,
                                c = void 0 === p ? b : p,
                                l = e.alias,
                                y = void 0 === l ? "Apollo" : l,
                                O = e.shouldResubscribe,
                                m = a;
                            "function" != typeof m && (m = function() {
                                return a
                            });
                            var g, R = c;
                            return "function" != typeof R && (R = function() {
                                    return c
                                }),
                                function(n) {
                                    var o = y + "(" + h(n) + ")",
                                        a = function(u) {
                                            function a(t) {
                                                var e = u.call(this, t) || this;
                                                return e.state = {
                                                    resubscribe: !1
                                                }, e
                                            }
                                            return (0, r.ZT)(a, u), a.prototype.updateResubscribe = function(t) {
                                                this.setState({
                                                    resubscribe: t
                                                })
                                            }, a.prototype.componentDidUpdate = function(t) {
                                                var e = !(!O || !O(t, this.props));
                                                this.state.resubscribe !== e && this.updateResubscribe(e)
                                            }, a.prototype.render = function() {
                                                var u = this,
                                                    a = this.props,
                                                    p = R(a),
                                                    c = p ? Object.create(null) : m(a);
                                                return !p && !c.variables && i.variables.length > 0 && (c.variables = d(i, a)), s.createElement(E, (0, r.pi)({}, c, {
                                                    displayName: o,
                                                    skip: p,
                                                    subscription: t,
                                                    shouldResubscribe: this.state.resubscribe
                                                }), (function(t) {
                                                    var i, o, c = t.data,
                                                        l = (0, r._T)(t, ["data"]);
                                                    if (e.withRef && (u.withRef = !0, a = Object.assign({}, a, {
                                                            ref: u.setWrappedInstance
                                                        })), p) return s.createElement(n, (0, r.pi)({}, a, {}));
                                                    var f = Object.assign(l, c || {}),
                                                        b = e.name || "data",
                                                        h = ((i = {})[b] = f, i);
                                                    if (e.props) {
                                                        var d = ((o = {})[b] = f, o.ownProps = a, o);
                                                        h = g = e.props(d, g)
                                                    }
                                                    return s.createElement(n, (0, r.pi)({}, a, h))
                                                }))
                                            }, a.displayName = o, a.WrappedComponent = n, a
                                        }(v);
                                    return u()(a, n, {})
                                }
                        }(t, e);
                    case n.n_.Query:
                    default:
                        return function(t, e) {
                            void 0 === e && (e = {});
                            var i = (0, n.E2)(t),
                                o = e.options,
                                a = void 0 === o ? f : o,
                                p = e.skip,
                                l = void 0 === p ? b : p,
                                y = e.alias,
                                O = void 0 === y ? "Apollo" : y,
                                m = a;
                            "function" != typeof m && (m = function() {
                                return a
                            });
                            var g, R = l;
                            return "function" != typeof R && (R = function() {
                                    return l
                                }),
                                function(n) {
                                    var o = O + "(" + h(n) + ")",
                                        a = function(u) {
                                            function a() {
                                                return null !== u && u.apply(this, arguments) || this
                                            }
                                            return (0, r.ZT)(a, u), a.prototype.render = function() {
                                                var u = this,
                                                    a = this.props,
                                                    p = R(a),
                                                    l = p ? Object.create(null) : (0, r.pi)({}, m(a));
                                                return !p && !l.variables && i.variables.length > 0 && (l.variables = d(i, a)), s.createElement(c, (0, r.pi)({}, l, {
                                                    displayName: o,
                                                    skip: p,
                                                    query: t
                                                }), (function(t) {
                                                    t.client;
                                                    var i, o, c = t.data,
                                                        l = (0, r._T)(t, ["client", "data"]);
                                                    if (e.withRef && (u.withRef = !0, a = Object.assign({}, a, {
                                                            ref: u.setWrappedInstance
                                                        })), p) return s.createElement(n, (0, r.pi)({}, a, {}));
                                                    var f = Object.assign(l, c || {}),
                                                        b = e.name || "data",
                                                        h = ((i = {})[b] = f, i);
                                                    if (e.props) {
                                                        var d = ((o = {})[b] = f, o.ownProps = a, o);
                                                        h = g = e.props(d, g)
                                                    }
                                                    return s.createElement(n, (0, r.pi)({}, a, h))
                                                }))
                                            }, a.displayName = o, a.WrappedComponent = n, a
                                        }(v);
                                    return u()(a, n, {})
                                }
                        }(t, e)
                }
            }
            E.propTypes = {
                subscription: a.object.isRequired,
                variables: a.object,
                children: a.func,
                onSubscriptionData: a.func,
                onSubscriptionComplete: a.func,
                shouldResubscribe: a.oneOfType([a.func, a.bool])
            }
        }
    }
]);