(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2691, 5541], {
        34677: (e, i) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i.BLOCKS = void 0,
                function(e) {
                    e.DOCUMENT = "document", e.PARAGRAPH = "paragraph", e.HEADING_1 = "heading-1", e.HEADING_2 = "heading-2", e.HEADING_3 = "heading-3", e.HEADING_4 = "heading-4", e.HEADING_5 = "heading-5", e.HEADING_6 = "heading-6", e.OL_LIST = "ordered-list", e.UL_LIST = "unordered-list", e.LIST_ITEM = "list-item", e.HR = "hr", e.QUOTE = "blockquote", e.EMBEDDED_ENTRY = "embedded-entry-block", e.EMBEDDED_ASSET = "embedded-asset-block", e.TABLE = "table", e.TABLE_ROW = "table-row", e.TABLE_CELL = "table-cell", e.TABLE_HEADER_CELL = "table-header-cell"
                }(i.BLOCKS || (i.BLOCKS = {}))
        },
        2e3: (e, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var t = n(34677),
                a = {
                    nodeType: t.BLOCKS.DOCUMENT,
                    data: {},
                    content: [{
                        nodeType: t.BLOCKS.PARAGRAPH,
                        data: {},
                        content: [{
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {}
                        }]
                    }]
                };
            i.default = a
        },
        57556: (e, i, n) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.isText = i.isBlock = i.isInline = void 0;
            var t = n(34677),
                a = n(84864);

            function r(e, i) {
                for (var n = 0, t = Object.keys(e); n < t.length; n++) {
                    if (i === e[t[n]]) return !0
                }
                return !1
            }
            i.isInline = function(e) {
                return r(a.INLINES, e.nodeType)
            }, i.isBlock = function(e) {
                return r(t.BLOCKS, e.nodeType)
            }, i.isText = function(e) {
                return "text" === e.nodeType
            }
        },
        12745: function(e, i, n) {
            "use strict";
            var t = this && this.__createBinding || (Object.create ? function(e, i, n, t) {
                    void 0 === t && (t = n), Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function() {
                            return i[n]
                        }
                    })
                } : function(e, i, n, t) {
                    void 0 === t && (t = n), e[t] = i[n]
                }),
                a = this && this.__setModuleDefault || (Object.create ? function(e, i) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: i
                    })
                } : function(e, i) {
                    e.default = i
                }),
                r = this && this.__exportStar || function(e, i) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(i, n) || t(i, e, n)
                },
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var i = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && t(i, e, n);
                    return a(i, e), i
                },
                l = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.helpers = i.EMPTY_DOCUMENT = i.MARKS = i.INLINES = i.BLOCKS = void 0;
            var d = n(34677);
            Object.defineProperty(i, "BLOCKS", {
                enumerable: !0,
                get: function() {
                    return d.BLOCKS
                }
            });
            var c = n(84864);
            Object.defineProperty(i, "INLINES", {
                enumerable: !0,
                get: function() {
                    return c.INLINES
                }
            });
            var s = n(12014);
            Object.defineProperty(i, "MARKS", {
                enumerable: !0,
                get: function() {
                    return l(s).default
                }
            }), r(n(63199), i), r(n(97717), i), r(n(69819), i);
            var u = n(2e3);
            Object.defineProperty(i, "EMPTY_DOCUMENT", {
                enumerable: !0,
                get: function() {
                    return l(u).default
                }
            });
            var v = o(n(57556));
            i.helpers = v
        },
        84864: (e, i) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i.INLINES = void 0,
                function(e) {
                    e.HYPERLINK = "hyperlink", e.ENTRY_HYPERLINK = "entry-hyperlink", e.ASSET_HYPERLINK = "asset-hyperlink", e.EMBEDDED_ENTRY = "embedded-entry-inline"
                }(i.INLINES || (i.INLINES = {}))
        },
        12014: (e, i) => {
            "use strict";
            var n;
            Object.defineProperty(i, "__esModule", {
                    value: !0
                }),
                function(e) {
                    e.BOLD = "bold", e.ITALIC = "italic", e.UNDERLINE = "underline", e.CODE = "code"
                }(n || (n = {})), i.default = n
        },
        69819: (e, i) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            })
        },
        63199: function(e, i, n) {
            "use strict";
            var t, a = this && this.__spreadArray || function(e, i, n) {
                if (n || 2 === arguments.length)
                    for (var t, a = 0, r = i.length; a < r; a++) !t && a in i || (t || (t = Array.prototype.slice.call(i, 0, a)), t[a] = i[a]);
                return e.concat(t || Array.prototype.slice.call(i))
            };
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.V1_NODE_TYPES = i.TEXT_CONTAINERS = i.HEADINGS = i.CONTAINERS = i.VOID_BLOCKS = i.TABLE_BLOCKS = i.LIST_ITEM_BLOCKS = i.TOP_LEVEL_BLOCKS = void 0;
            var r = n(34677),
                o = n(84864);
            i.TOP_LEVEL_BLOCKS = [r.BLOCKS.PARAGRAPH, r.BLOCKS.HEADING_1, r.BLOCKS.HEADING_2, r.BLOCKS.HEADING_3, r.BLOCKS.HEADING_4, r.BLOCKS.HEADING_5, r.BLOCKS.HEADING_6, r.BLOCKS.OL_LIST, r.BLOCKS.UL_LIST, r.BLOCKS.HR, r.BLOCKS.QUOTE, r.BLOCKS.EMBEDDED_ENTRY, r.BLOCKS.EMBEDDED_ASSET, r.BLOCKS.TABLE], i.LIST_ITEM_BLOCKS = [r.BLOCKS.PARAGRAPH, r.BLOCKS.HEADING_1, r.BLOCKS.HEADING_2, r.BLOCKS.HEADING_3, r.BLOCKS.HEADING_4, r.BLOCKS.HEADING_5, r.BLOCKS.HEADING_6, r.BLOCKS.OL_LIST, r.BLOCKS.UL_LIST, r.BLOCKS.HR, r.BLOCKS.QUOTE, r.BLOCKS.EMBEDDED_ENTRY, r.BLOCKS.EMBEDDED_ASSET], i.TABLE_BLOCKS = [r.BLOCKS.TABLE, r.BLOCKS.TABLE_ROW, r.BLOCKS.TABLE_CELL, r.BLOCKS.TABLE_HEADER_CELL], i.VOID_BLOCKS = [r.BLOCKS.HR, r.BLOCKS.EMBEDDED_ENTRY, r.BLOCKS.EMBEDDED_ASSET], i.CONTAINERS = ((t = {})[r.BLOCKS.OL_LIST] = [r.BLOCKS.LIST_ITEM], t[r.BLOCKS.UL_LIST] = [r.BLOCKS.LIST_ITEM], t[r.BLOCKS.LIST_ITEM] = i.LIST_ITEM_BLOCKS, t[r.BLOCKS.QUOTE] = [r.BLOCKS.PARAGRAPH], t[r.BLOCKS.TABLE] = [r.BLOCKS.TABLE_ROW], t[r.BLOCKS.TABLE_ROW] = [r.BLOCKS.TABLE_CELL, r.BLOCKS.TABLE_HEADER_CELL], t[r.BLOCKS.TABLE_CELL] = [r.BLOCKS.PARAGRAPH], t[r.BLOCKS.TABLE_HEADER_CELL] = [r.BLOCKS.PARAGRAPH], t), i.HEADINGS = [r.BLOCKS.HEADING_1, r.BLOCKS.HEADING_2, r.BLOCKS.HEADING_3, r.BLOCKS.HEADING_4, r.BLOCKS.HEADING_5, r.BLOCKS.HEADING_6], i.TEXT_CONTAINERS = a([r.BLOCKS.PARAGRAPH], i.HEADINGS, !0), i.V1_NODE_TYPES = [r.BLOCKS.DOCUMENT, r.BLOCKS.PARAGRAPH, r.BLOCKS.HEADING_1, r.BLOCKS.HEADING_2, r.BLOCKS.HEADING_3, r.BLOCKS.HEADING_4, r.BLOCKS.HEADING_5, r.BLOCKS.HEADING_6, r.BLOCKS.OL_LIST, r.BLOCKS.UL_LIST, r.BLOCKS.LIST_ITEM, r.BLOCKS.HR, r.BLOCKS.QUOTE, r.BLOCKS.EMBEDDED_ENTRY, r.BLOCKS.EMBEDDED_ASSET, o.INLINES.HYPERLINK, o.INLINES.ENTRY_HYPERLINK, o.INLINES.ASSET_HYPERLINK, o.INLINES.EMBEDDED_ENTRY, "text"]
        },
        97717: (e, i) => {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            })
        },
        18806: (e, i, n) => {
            "use strict";
            n.d(i, {
                Z: () => p
            });
            var t = n(7862),
                a = n.n(t),
                r = n(55851),
                o = n(76546),
                l = n(2040),
                d = n(61250);
            const c = e => (0, d.jsx)("svg", {
                    viewBox: "0 0 52 32",
                    ...e,
                    children: (0, d.jsx)("path", {
                        d: "M0 7.6v1h3.9v-1c-1.1 0-1.3-.2-1.3-1V1.8L5 8.5h1l2.5-6.7v4.7c0 1 0 1-1.4 1.1v1h4.6v-1c-1.3 0-1.4-.1-1.4-.8V2c0-.8.1-1 1.4-1V0H7.8l-2 5.4L3.9 0H0v1c1.1 0 1.3 0 1.3 1v4.5c0 .9 0 1.1-1.3 1.1zM15.7 7.7c-1 0-1.6-.8-1.6-2h4.1c0-2-1.1-3.4-2.8-3.4-1.8 0-3 1.4-3 3.3 0 2.1 1.4 3.1 3.1 3.1 1.5 0 2.5-.8 2.7-2.4h-1.1c-.1.8-.5 1.4-1.4 1.4zm-.3-4.4c.7 0 1.1.4 1.1 1.4h-2.3c0-.9.5-1.4 1.2-1.4zM19.1 7.6v1h3.6v-1c-.9 0-.9-.1-.9-1.4v-1c0-1 .4-1.8 1.4-1.8.7 0 1 .5 1 1.1v2.2c0 .7 0 .9-.9.9v1h3.3v-1c-.8 0-.8-.1-.8-.8V5.3c0-1 .5-1.9 1.4-1.9.7 0 .9.4.9 1.3v2.2c0 .6 0 .7-.9.7v1h3.6v-1c-1.1 0-1.2 0-1.2-.6V4.5c0-1.4-.3-2.2-1.8-2.2-.8 0-1.4.3-2.1 1.1-.4-.7-.9-1.1-1.8-1.1s-1.5.5-2.1 1.2v-1H19v.9c1.1 0 1.2 0 1.2.9v2c.1 1.3.1 1.3-1.1 1.3zM35.6 2.3c-.7 0-1.1.2-1.8.8V0h-2.6v.9c1 0 1 .1 1 1.1v6.6h.8l.5-.7c.6.6 1.1.8 1.9.8 1.7 0 2.7-1.3 2.7-3.3 0-1.8-1-3.1-2.5-3.1zm-.5 5.4c-.8 0-1.3-.8-1.3-2.1 0-1.4.4-2.2 1.4-2.2.7 0 1.3.7 1.3 2.1-.2 1.5-.7 2.2-1.4 2.2zM42.5 7.7c-1 0-1.5-.8-1.5-2h4c0-2-1.1-3.4-2.8-3.4-1.8 0-2.9 1.4-2.9 3.3 0 2.1 1.3 3.1 3.1 3.1 1.5 0 2.5-.8 2.7-2.4H44c-.3.8-.7 1.4-1.5 1.4zm-.3-4.4c.8 0 1.1.5 1.1 1.4H41c0-.9.4-1.4 1.2-1.4zM45.9 7.6v1h4v-1c-1.1 0-1.2 0-1.2-.8V5.4c0-1.2.4-2.3 1.5-2.3.1 0 .1 0 .4.1-.4.2-.6.4-.6.8 0 .5.4.8.8.8.6 0 1-.4 1-1.1 0-.8-.6-1.4-1.4-1.4-.7 0-1.1.3-1.7 1v-.8H46v.9c1 0 1.2 0 1.2.8v2.5c-.1.8-.1.9-1.3.9zM.2 11.6v20.3h5.5l.1-7.8h5.4v-4.7H5.8v-3.1h5.8v-4.7zM19.5 11.6h-7.1v20.2h5.9c7.2 0 11.7-3.3 11.7-10.1 0-6.1-4.1-10.1-10.5-10.1zM18 27.2V16.3h1c3.1 0 5.4 1.8 5.4 5.3 0 4.2-2.8 5.6-6.4 5.6zM30.6 11.6h5.6v20.2h-5.6zM52 17.5v-5.3c-1.4-.6-2.7-.9-4.5-.9-5.9 0-10.7 4.5-10.7 10.4S41.5 32 47.4 32c2.1 0 3.5-.4 4.6-1.3v-5.3c-1.7 1-2.8 1.5-4.3 1.5-3 0-5.3-2.2-5.3-5.4 0-3.1 2.4-5.4 5.3-5.4 1.6-.1 2.8.5 4.3 1.4z"
                    })
                }),
                s = e => (0, d.jsxs)("svg", {
                    viewBox: "0 0 42 32",
                    ...e,
                    children: [(0, d.jsx)("path", {
                        d: "M8 31.7v-2.1c0-.8-.5-1.3-1.3-1.3-.4 0-.9.1-1.2.6-.2-.4-.6-.6-1.1-.6-.4 0-.7.1-1 .5v-.4h-.8v3.4h.7v-1.9c0-.6.3-.9.8-.9s.7.3.7.9v1.9h.7v-1.9c.2-.6.5-.9 1-.9s.7.3.7.9v1.9H8zM18.9 28.3h-1.2v-1H17v1h-.7v.7h.7v1.5c0 .8.3 1.2 1.2 1.2.3 0 .7-.1.9-.3l-.2-.6c-.2.1-.5.2-.6.2-.4 0-.5-.2-.5-.6V29H19v-.7zM25.1 28.3c-.4 0-.7.2-.9.5v-.4h-.7v3.4h.7v-1.9c0-.6.2-.9.7-.9.1 0 .3 0 .5.1l.2-.7c-.1-.1-.3-.1-.5-.1zM15.7 28.6c-.4-.2-.8-.4-1.4-.4-.9 0-1.4.4-1.4 1.1 0 .5.4.9 1.2 1h.3c.4.1.6.2.6.4 0 .3-.3.4-.8.4s-.9-.2-1.1-.4l-.3.6c.4.3.9.4 1.5.4 1 0 1.5-.5 1.5-1.1 0-.6-.4-.9-1.2-1h-.3c-.3 0-.6-.1-.6-.3 0-.2.2-.4.6-.4.4 0 .8.2 1 .3l.4-.6zM35.3 28.3c-.4 0-.7.2-.9.5v-.4h-.7v3.4h.7v-1.9c0-.6.2-.9.7-.9.1 0 .3 0 .5.1l.2-.7c-.1-.1-.3-.1-.5-.1zM25.9 30c0 1 .7 1.8 1.8 1.8.5 0 .8-.1 1.2-.4l-.4-.6c-.3.2-.6.3-.9.3-.6 0-1-.4-1-1.1 0-.6.4-1.1 1-1.1.3 0 .6.1.9.3l.4-.6c-.4-.3-.7-.4-1.2-.4-1.1.1-1.8.8-1.8 1.8zM32 28.3v.4c-.2-.3-.6-.5-1.1-.5-.9 0-1.7.7-1.7 1.8s.7 1.8 1.7 1.8c.5 0 .8-.2 1.1-.5v.4h.7v-3.4H32zm-1 2.8c-.6 0-1-.5-1-1.1 0-.6.4-1.1 1-1.1s1 .5 1 1.1-.4 1.1-1 1.1zM22.8 30c0-1-.7-1.8-1.6-1.8-1 0-1.7.7-1.7 1.8s.7 1.8 1.7 1.8c.5 0 1-.1 1.4-.5l-.4-.5c-.3.2-.6.4-1 .4-.5 0-.9-.2-1-.8h2.5c.1-.2.1-.3.1-.4zm-2.5-.3c.1-.5.4-.8.9-.8s.8.3.9.8h-1.8zM38.8 27v1.8c-.2-.3-.6-.5-1.1-.5-.9 0-1.7.7-1.7 1.7s.7 1.8 1.7 1.8c.5 0 .8-.2 1.1-.5v.4h.7V27h-.7zm-1 4.1c-.6 0-1-.5-1-1.1 0-.6.4-1.1 1-1.1s1 .5 1 1.1-.4 1.1-1 1.1zM11.3 28.3v.4c-.2-.3-.6-.5-1.1-.5-.9 0-1.7.7-1.7 1.8s.7 1.8 1.7 1.8c.5 0 .8-.2 1.1-.5v.4h.7v-3.4h-.7zm-.9 2.8c-.6 0-1-.5-1-1.1 0-.6.4-1.1 1-1.1s1 .5 1 1.1-.4 1.1-1 1.1z"
                    }), (0, d.jsx)("path", {
                        d: "M41.5 12.7c0 7-5.7 12.7-12.7 12.7-3 0-5.7-1-7.8-2.7 2.9-2.3 4.8-5.9 4.8-10 0-4-1.9-7.6-4.8-10C23.2 1 25.9 0 28.8 0c7 0 12.7 5.7 12.7 12.7z",
                        fill: "#b8b8b8"
                    }), (0, d.jsx)("path", {
                        d: "M16.2 12.7c0-4 1.9-7.6 4.8-10C18.8 1 16.1 0 13.2 0 6.2 0 .5 5.7.5 12.7c0 7 5.7 12.7 12.7 12.7 3 0 5.7-1 7.8-2.7-2.9-2.4-4.8-6-4.8-10z",
                        fill: "#404040"
                    }), (0, d.jsx)("path", {
                        d: "M25.8 12.7c0-4-1.9-7.6-4.8-10-2.9 2.3-4.8 5.9-4.8 10 0 4 1.9 7.6 4.8 10 2.9-2.4 4.8-6 4.8-10z",
                        fill: "#7a7a7a"
                    })]
                }),
                u = e => (0, d.jsx)("svg", {
                    viewBox: "0 0 64 32",
                    ...e,
                    children: (0, d.jsx)("path", {
                        d: "M.2 32h14.6V17.4H.2V32zm6.1-8.8l1.2-3.7 1.2 3.7h3.9l-3.1 2.2-1.9 1.4 2.2-.6.9 2.9-3.1-2.3-3.1 2.3 1.2-3.7-3.1-2.3 3.7.1zM16.4 32H31V17.4H16.4V32zm6.1-8.8l1.2-3.7 1.2 3.7h3.9l-3.1 2.2-1.9 1.4 2.2-.6.9 2.9-3.1-2.3-3.1 2.3 1.2-3.7-3.1-2.3 3.7.1zM32.6 32h14.6V17.4H32.6V32zm6.1-8.8l1.2-3.7 1.2 3.7H45l-3.1 2.2-1.9 1.4 2.2-.6.9 2.9-3.1-2.3-3.1 2.3 1.2-3.7-3.1-2.3 3.7.1zM48.8 17.4V32h14.6V17.4H48.8zm9.5 8.9l.9 2.9-3.1-2.3-3.1 2.3 1.2-3.7-3.2-2.3h3.9l1.2-3.7 1.2 3.7h3.9l-3.1 2.2-1.9 1.4 2.1-.5zM12.6 4.2h4.8v.9h-1.9v5.1h-1V5.1h-1.9v-.9zm4.6 1.6h.9v.8c0-.1.1-.2.2-.3l.3-.3c.1-.1.3-.2.4-.2.1-.1.3-.1.4-.1H19.7v.9h-.4c-.2 0-.3 0-.5.1-.1.1-.3.2-.4.3-.1.1-.2.3-.2.5-.1.2-.1.4-.1.6v2.1h-1l.1-4.4zm7 4.4h-.9v-.7c-.1.2-.3.4-.5.5-.2.1-.5.2-.7.2-.5 0-.9-.1-1.2-.4-.3-.4-.4-.8-.4-1.3V5.8h1v2.7c0 .3.1.6.2.8.2.2.4.3.6.2.2 0 .3 0 .5-.1.1-.1.2-.1.3-.2.1-.1.2-.2.2-.4s.1-.3.1-.5V5.8h1l-.2 4.4zm1.6-1.4c0 .2.1.5.3.6.2.1.4.2.7.2h.3c.1 0 .2 0 .3-.1.1 0 .2-.1.2-.2.1-.1.1-.2.1-.3 0-.1-.1-.2-.1-.3-.1-.1-.2-.1-.3-.2-.1-.1-.3-.1-.4-.1-.2 0-.3-.1-.5-.1s-.4-.1-.5-.1c-.3-.2-.4-.2-.5-.3-.1-.1-.2-.2-.3-.4-.1-.2-.1-.4-.1-.6 0-.2.1-.4.2-.6.1-.2.3-.3.4-.4.2-.1.4-.2.6-.2.2 0 .4-.1.6-.1.2 0 .4 0 .6.1.2 0 .4.1.6.2.2.1.3.2.4.4.1.2.2.4.2.6h-1c0-.2-.1-.4-.3-.5-.2-.1-.4-.1-.6-.1h-.2c-.1 0-.2 0-.3.1-.1 0-.1.1-.2.1-.1.1-.1.1-.1.2s0 .2.1.3c.1.1.2.1.3.2.1.1.3.1.4.1.2 0 .3.1.5.1s.3.1.5.1.3.1.4.2c.1.1.2.2.3.4.1.2.1.3.1.5s-.1.5-.2.7c-.1.2-.3.3-.5.4-.2.1-.4.2-.6.2-.2 0-.5.1-.7.1-.3 0-.5 0-.8-.1l-.6-.3c-.2-.1-.3-.3-.4-.5-.1-.2-.2-.4-.2-.7l1.3.4zm3.2-3h.7V4.5h1v1.3h.9v.7h-.9V9.1c0 .1 0 .1.1.2l.1.1h.7v.7h-.3c-.3 0-.6 0-.9-.1-.1 0-.3-.1-.4-.2-.1-.1-.1-.2-.2-.3 0-.2-.1-.3-.1-.5V6.5H29v-.7zm3.2 0h.9v.6c.1-.2.3-.4.6-.5.2-.1.5-.2.8-.2.3 0 .6.1.9.2.2.1.4.3.6.5.2.2.3.5.4.7.1.3.1.6.1.9 0 .3 0 .6-.1.8-.1.3-.2.5-.3.7-.2.2-.4.4-.6.5-.3.1-.5.2-.8.2h-.4c-.1 0-.3-.1-.4-.1-.1-.1-.2-.1-.4-.2l-.3-.3v2.2h-1v-6zM35.5 8c0-.2 0-.4-.1-.6 0-.2-.1-.3-.2-.5-.1-.1-.2-.3-.4-.3-.2-.1-.3-.1-.5-.1-.4 0-.7.1-.9.4-.2.3-.3.7-.3 1.1 0 .2 0 .4.1.6 0 .2.1.3.2.5.1.1.2.2.4.3.2.1.3.1.5.1s.4 0 .6-.1c.1-.1.3-.2.4-.4.1-.1.2-.3.2-.5V8zm1.7-3.8h1v.9h-1v-.9zm0 1.6h1v4.3h-1V5.8zM39 4.2h1v6h-1v-6zm3.9 6.1c-.3 0-.6-.1-.9-.2-.3-.1-.5-.3-.7-.5-.2-.2-.3-.5-.4-.7-.1-.3-.2-.6-.2-.9 0-.3 0-.6.2-.9.1-.3.2-.5.4-.7.2-.2.4-.4.7-.5.3-.1.6-.2.9-.2.3 0 .6.1.9.2.3.1.5.3.7.5.2.2.3.5.4.7.1.3.2.6.2.9 0 .3 0 .6-.2.9-.1.3-.2.5-.4.7-.2.2-.4.4-.7.5-.3.1-.6.2-.9.2zm0-.8c.2 0 .4 0 .6-.1.2-.1.3-.2.4-.3.1-.2.1-.4.2-.6 0-.2.1-.4.1-.6 0-.2 0-.4-.1-.5 0-.2-.1-.3-.2-.5-.1-.1-.2-.3-.4-.3-.2-.1-.4-.1-.6-.1-.2 0-.4 0-.5.1-.2.1-.3.2-.4.3-.1.1-.2.3-.2.5s-.1.4-.1.5c0 .2 0 .4.1.6 0 .2.1.3.2.5.1.1.2.3.4.3.1.2.3.2.5.2zm2.5-3.7h.7V4.5h1v1.3h.9v.7h-.9V9.1c0 .1 0 .1.1.2l.1.1h.7v.7h-.6c-.2 0-.4 0-.6-.1-.1 0-.3-.1-.4-.2-.1-.1-.1-.2-.2-.3 0-.2-.1-.3-.1-.5V6.5h-.7v-.7zM5.7 8.3l2.2-1.6H8l.3-.2 3.2-2.3H7.1L5.7 0 4.4 4.2H0l3.5 2.5-1.3 4.2 3.5-2.6 3.6 2.6-1.1-3.2z"
                    })
                }),
                v = e => (0, d.jsx)("svg", {
                    viewBox: "0 0 100 32",
                    ...e,
                    children: (0, d.jsx)("path", {
                        d: "M20.9 21.6c.1-.1.1-.2.1-.3l4.4-11.1C26.6 7.1 27.8 4 29 1c.1-.4.1-.4.5-.4h7.9c0 .1 0 .3-.1.4-.6 1.4-1.2 2.8-1.8 4.3L24.8 31.2c-.2.5-.1.4-.6.4h-7.6c-.5 0-.4 0-.5-.4-2.2-8.2-4.3-16.3-6.4-24.4-.1-.3-.2-.6-.3-1-.2-.6-.6-1.2-1.2-1.5-.6-.4-1.2-.7-1.8-.9-2-.8-4-1.4-6.1-1.9-.3-.1-.3-.1-.3-.4S.1.8.1.7C.1.6.2.5.3.5h13.1c.3 0 .6 0 .9.1 1.3.2 2.4 1 2.9 2.3.1.3.2.7.3 1.1 1.1 5.7 2.2 11.5 3.3 17.2v.3l.1.1zM49 .6V1c-2.1 10-4.3 20-6.4 30 0 .1 0 .3-.1.4 0 .1 0 .1-.1.2h-8v-.4c.7-3.5 1.5-7 2.2-10.5 1.5-6.6 3-13.2 4.4-19.7.1-.5 0-.5.6-.5l7.4.1zM49.4 23.6l.3.1c.8.3 1.6.7 2.4 1 1.9.6 3.9.9 5.9.8.9 0 1.7-.2 2.5-.6.4-.2.8-.5 1.2-.8.8-.9.9-2.2.1-3.1-.3-.4-.7-.7-1.2-1-.7-.5-1.5-.9-2.2-1.3-1-.5-1.9-1-2.8-1.6-.8-.5-1.5-1.1-2.1-1.8-1.8-1.7-2.6-4.2-2.1-6.6.4-2.3 1.7-4.3 3.6-5.7 1.4-1 2.9-1.8 4.6-2.2 1.7-.6 3.6-.8 5.5-.8 2.3 0 4.7.5 6.9 1.3.3.1.3.1.2.4-.3 1.9-.8 3.9-1.3 5.9 0 .1-.1.2-.1.3l-.4-.1c-2-.9-4.2-1.3-6.3-1.3-.7 0-1.4.1-2.1.3-.6.2-1.2.4-1.6.8-.3.2-.5.5-.7.8-.3.6-.3 1.2 0 1.8.2.3.4.5.7.7.4.4.9.7 1.5 1l2.7 1.5c1.1.6 2.1 1.2 3.1 2 .7.6 1.3 1.2 1.8 2 .8 1.1 1.2 2.5 1.2 3.8.1 1.9-.4 3.8-1.4 5.4-.8 1.3-1.9 2.4-3.2 3.2-1.5.9-3.2 1.6-5 1.9-2.1.4-4.2.5-6.3.3-1.7-.1-3.5-.5-5.1-.9-.5-.1-1-.3-1.5-.5s-.3-.1-.2-.4c.4-2 .9-4.1 1.3-6.2l.1-.4zM99.1 31.5h-7.2c-.1 0-.2 0-.2-.2v-.7c-.2-1.1-.4-2.2-.7-3.2v-.2s0-.1-.1-.1h-10c-.3 0-.3 0-.4.3-.5 1.3-1 2.6-1.4 4v.2c0 .1-.1.2-.2.2h-8.3c0-.1 0-.2.1-.3l1.5-3.6L81.3 6l1.2-2.8C83 1.8 84.4.8 86 .9h6.4c.3 0 .3 0 .4.3l2.4 11.3c1.3 6.3 2.6 12.6 4 18.9-.1-.1-.1-.1-.1.1zM87 9c0 .1 0 .2-.1.3-1.3 3.6-2.6 7.3-4 10.9-.1.4-.1.4.3.4h5.9c.4 0 .4 0 .3-.4-.3-1.5-.6-3-1-4.5-.4-2.1-.9-4.2-1.3-6.3L87 9z"
                    })
                });
            var m = n(53623);
            const h = e => ({
                    color: "light" === e.colorTheme ? "var(--typography-light)" : "var(--iconography-bright)",
                    height: "24px",
                    width: "auto",
                    marginRight: "var(--spacing-m)"
                }),
                L = h,
                S = h,
                E = m.Z.create({
                    base: h,
                    trustSymbolWrap: {
                        alignItems: "center",
                        display: "flex",
                        marginTop: "var(--spacing-2-xs)"
                    },
                    visaLogo: e => ({ ...h(e),
                        height: "22px"
                    }),
                    fdicLogo: L,
                    mastercardLogo: e => ({ ...h(e),
                        height: "31px",
                        position: "relative",
                        top: "3px"
                    }),
                    trustPilotLogo: S
                }),
                g = (0, r.Z)(E.trustSymbolWrap, "div"),
                C = e => (0, d.jsxs)("div", {
                    children: [(0, d.jsx)(o.Z, { ...e
                    }), e.trustSymbols ? (0, d.jsx)(g, {
                        children: e.trustSymbols.map((i => (({
                            symbol: e,
                            colorTheme: i
                        }) => ({
                            FDIC: (0, d.jsx)(l.Z, {
                                extend: E.fdicLogo,
                                colorTheme: i,
                                icon: c,
                                label: "FDIC"
                            }, e),
                            MASTERCARD: (0, d.jsx)(l.Z, {
                                extend: E.mastercardLogo,
                                colorTheme: i,
                                icon: s,
                                label: "Mastercard"
                            }, e),
                            TRUSTPILOT: (0, d.jsx)(l.Z, {
                                extend: E.trustPilotLogo,
                                colorTheme: i,
                                icon: u,
                                label: "Trustpilot"
                            }, e),
                            VISA: (0, d.jsx)(l.Z, {
                                extend: E.visaLogo,
                                colorTheme: i,
                                icon: v,
                                label: "Visa"
                            }, e)
                        }[e] || null))({ ...e,
                            symbol: i
                        })))
                    }) : null]
                });
            C.defaultProps = {
                trustSymbols: []
            }, C.propTypes = {
                trustSymbols: a().array
            };
            const p = C
        },
        76678: (e, i, n) => {
            "use strict";
            n.d(i, {
                s: () => u,
                J: () => v
            });
            var t = n(55851),
                a = n(81035),
                r = n(53623),
                o = n(84079);
            const l = `@media (min-width: ${o.Eb}px)`,
                d = e => ({
                    display: "flex",
                    justifyContent: "RIGHT" === e.align ? "flex-end" : void 0,
                    alignItems: "center"
                }),
                c = { ...d,
                    height: "100%"
                },
                s = r.Z.create({
                    column: e => ({ ...d(e),
                        ...e.image ? {
                            backgroundImage: `url(${e.image})`,
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            minHeight: "60vh",
                            [l]: {
                                backgroundSize: "cover",
                                minHeight: `calc(100vh - ${o.Mz})`
                            }
                        } : {}
                    }),
                    innerColumn: c
                }),
                u = (0, t.Z)(s.column, a.sg),
                v = (0, t.Z)(s.innerColumn, a.J9)
        },
        44895: (e, i, n) => {
            "use strict";
            n.d(i, {
                Z: () => S
            });
            var t = n(55851),
                a = n(53623),
                r = n(84079);
            const o = `calc(100vh - ${r.ei})`,
                l = {
                    marginBottom: "1rem",
                    borderRadius: "var(--border-radius-l)",
                    backgroundColor: "var(--background-container-light)"
                },
                d = a.Z.create({
                    loaderContainer: ({
                        height: e = "30em"
                    }) => ({
                        containIntrinsicSize: "0 500px",
                        contentVisibility: "auto",
                        height: o,
                        display: "flex",
                        flexDirection: "column-reverse",
                        marginBottom: "1em",
                        [r.sJ]: {
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
                    }) => ({ ...l,
                        height: "2.3em",
                        width: e ? "75%" : "64%"
                    }),
                    subline: ({
                        long: e
                    }) => ({ ...l,
                        height: "1.4em",
                        width: "80%",
                        [r.sJ]: {
                            width: e ? "80%" : "64%"
                        }
                    }),
                    wrapper: {
                        width: "90%",
                        margin: "0 auto"
                    }
                });
            var c = n(61250);
            const s = (0, t.Z)(d.loaderContainer, "div"),
                u = (0, t.Z)(d.textColumn, "div"),
                v = (0, t.Z)(d.imageColumn, "div"),
                m = (0, t.Z)(d.title, "div"),
                h = (0, t.Z)(d.subline, "div"),
                L = (0, t.Z)(d.wrapper, "div"),
                S = e => e.empty ? (0, c.jsx)(s, {
                    height: e.height
                }) : (0, c.jsxs)(s, {
                    height: e.height,
                    children: [(0, c.jsx)(u, {
                        wideImageColumn: e.wideImageColumn,
                        children: (0, c.jsxs)(L, {
                            children: [(0, c.jsx)(m, {}), (0, c.jsx)(m, {
                                long: !0
                            }), (0, c.jsx)(h, {
                                long: !0
                            }), (0, c.jsx)(h, {})]
                        })
                    }), (0, c.jsx)(v, {
                        wide: e.wideImageColumn
                    })]
                })
        },
        92530: (e, i, n) => {
            "use strict";
            n.r(i), n.d(i, {
                default: () => R
            });
            var t = n(54865),
                a = n(55851),
                r = n(40322),
                o = n(34777),
                l = n(84079),
                d = n(3714),
                c = n(44895),
                s = n(81035),
                u = n(50745),
                v = (n(55587), n(27537)),
                m = n(98820),
                h = n(57463),
                L = n(21106),
                S = n(38847),
                E = n(97048),
                g = n(22773),
                C = n(59144),
                p = n(94456),
                f = n(11669),
                O = n(49455),
                _ = n(76678),
                T = n(18806),
                B = n(53623),
                I = n(77523);
            const N = e => e && "GRAY_LIGHT" !== e ? I.oC.PRIMARY_DEFAULT : I.oC.SECONDARY_CONSISTENT,
                A = {
                    flex: "0 1",
                    [l.sJ]: {
                        flex: "0 1 650px"
                    }
                },
                k = {
                    justifyContent: "center",
                    "@media (min-width: 1600px)": {
                        marginLeft: "5%"
                    }
                },
                D = B.Z.create({
                    wideBox: ({
                        color: e
                    }) => ({
                        position: "relative",
                        backgroundColor: (0, o.Lq)(e),
                        color: e && "GRAY_LIGHT" !== e ? I.oC.PRIMARY_INVERTED : I.oC.PRIMARY_DEFAULT,
                        display: "flex",
                        flexDirection: "column-reverse",
                        [l.sJ]: {
                            flexDirection: "row",
                            justifyContent: "space-between"
                        },
                        "& p > a": {
                            ":hover": {
                                color: N(e)
                            },
                            ":focus": {
                                color: N(e)
                            }
                        }
                    }),
                    buttonCTA: {
                        marginRight: "var(--spacing-m)"
                    },
                    imageColumn: A,
                    buttonWrapper: {
                        alignItems: "flex-start",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap"
                    },
                    image: {
                        height: "100%",
                        margin: "0 auto",
                        objectFit: "cover",
                        width: "100%"
                    },
                    textColumn: k
                });
            var b = n(11581),
                x = n.n(b),
                M = n(61250);
            const K = (0, a.Z)(D.wideBox, "div"),
                y = (0, a.Z)(D.imageColumn, "div"),
                H = (0, a.Z)(D.buttonWrapper, "div"),
                R = e => {
                    const {
                        viewportWidth: i
                    } = (0, E.Z)(), {
                        language: n,
                        preview: a
                    } = (0, g.Z)(), {
                        data: B,
                        loading: I,
                        error: N
                    } = (0, t.a)(x(), {
                        variables: {
                            id: e.id,
                            language: n,
                            preview: a
                        }
                    }), {
                        backgroundColor: A,
                        heading: k,
                        loopTheVideo: b,
                        media: R,
                        mediaAdvanced: j,
                        mediaSmall: w,
                        showCta: z,
                        subheading: P,
                        text: G,
                        trustSymbols: V,
                        readMore: Z
                    } = B ? .module ? .fields ? ? {}, F = (0, d.T$)(Z) || "";
                    if (N) return null;
                    if (I) return (0, M.jsx)(c.Z, {
                        wideImageColumn: !0
                    });
                    const Y = i < l.Eb,
                        {
                            alt: U,
                            dominantColor: $,
                            ratio: W,
                            src: q
                        } = Y && Boolean(w) ? (0, S.Z)(w) : (0, S.Z)(R),
                        J = (0, v.d)(q),
                        {
                            hex: Q = "ffffff"
                        } = (0, o.I$)(A),
                        X = A ? .includes("_LIGHT") || A ? .includes("200") || !A;
                    return (0, M.jsxs)(K, {
                        color: A,
                        children: [!1, (0, M.jsx)(_.s, {
                            extend: D.textColumn,
                            children: (0, M.jsxs)(s.J9, {
                                children: [Boolean(P) && (0, M.jsx)("p", {
                                    children: P
                                }), (0, M.jsx)(C.Z.L, {
                                    as: e.shouldRenderH1 ? "h1" : "h2",
                                    children: k
                                }), (0, M.jsx)(O.Z, {
                                    ast: G,
                                    components: (0, h.D)(X)
                                }), z && (0, M.jsxs)(H, {
                                    children: [(0, M.jsx)(T.Z, {
                                        color: "GRAY_LIGHT" === A ? "TEAL" : A || "TEAL",
                                        dataAttributes: e.ctaDataAttributes,
                                        extend: D.buttonCTA,
                                        pageCtaLink: e.pageCtaLink,
                                        renderWrapper: e => (0, M.jsx)("span", { ...e
                                        }),
                                        trackingData: e.trackingData,
                                        trustSymbols: V,
                                        type: X ? "PRIMARY" : "SECONDARY_BORDERLESS",
                                        colorTheme: "GRAY_LIGHT" === A || !A && "light"
                                    }), Z && (0, M.jsx)(r.Z, {
                                        top: "TIGHTER",
                                        left: "LOOSER",
                                        children: (0, M.jsx)(L.Z, {
                                            activeHref: F,
                                            isLightBackground: X,
                                            color: A,
                                            Component: F.startsWith("#") ? "a" : void 0,
                                            children: Z.fields.label
                                        })
                                    })]
                                })]
                            })
                        }), (0, M.jsx)(y, {
                            children: j ? (0, M.jsx)(u.Z, {
                                media: j
                            }) : q ? J ? (0, M.jsx)(m.Z, {
                                isBackgroundMode: !0,
                                loop: b,
                                src: q
                            }) : (0, M.jsx)(f.Z, {
                                alt: U,
                                aspectRatio: W,
                                bg: `rgb:${Q}`,
                                extend: D.image,
                                fit: "pad",
                                dominantColor: $,
                                renderFallback: e => (0, M.jsx)(p.Z, {
                                    extend: D.image,
                                    ...e
                                }),
                                sources: [{
                                    breakpoint: 361,
                                    width: 650,
                                    height: 650,
                                    src: q
                                }, {
                                    breakpoint: 0,
                                    width: 360,
                                    height: 360,
                                    src: q
                                }],
                                eagerLoad: !0,
                                usePlaceholderColor: !0
                            }) : null
                        })]
                    })
                }
        },
        57463: (e, i, n) => {
            "use strict";
            n.d(i, {
                D: () => l
            });
            var t = n(12745),
                a = n(53348),
                r = n(83858),
                o = n(61250);
            const l = e => ({ ...r.Fy,
                [t.BLOCKS.QUOTE]: i => (0, o.jsx)(a.Z, { ...i,
                    onLightBackground: e
                })
            })
        },
        27537: (e, i, n) => {
            "use strict";

            function t(e) {
                return /\.(?:mp4|webm)$/i.test(e)
            }
            n.d(i, {
                d: () => t
            })
        },
        11581: (e, i, n) => {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "websiteTextMediaIntro"
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
                                value: "getTextMediaIntroModule"
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
                                                value: "heading"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "subheading"
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
                                                        value: "Image"
                                                    },
                                                    directives: []
                                                }]
                                            }
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
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "mediaSmall"
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
                                                value: "loopTheVideo"
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
                                                        value: "CountryAwareLink"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "trustSymbols"
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
                    end: 957
                }
            };
            t.loc.source = {
                body: "#@TODO: Replace with aliases when babel-plugin-import-graphql supports it\n#import '../../../../../../shared/api/helpers/ContentfulMediaObject/Image.fragment.graphql'\n#import '../../../../../../shared/api/helpers/Media/Media.fragment.graphql'\n#import '../../../../../../shared/api/helpers/CountryAwareLinkItem/CountryAwareLinkItem.fragment.graphql'\n\nquery websiteTextMediaIntro(\n  $id: ID!\n  $language: ContentfulLanguage!\n  $preview: Boolean\n) {\n  module: getTextMediaIntroModule(\n    id: $id\n    locale: $language\n    preview: $preview\n  ) {\n    sys {\n      id\n      contentType {\n        sys {\n          id\n        }\n      }\n    }\n    fields {\n      heading\n      subheading\n      text\n      backgroundColor\n      media {\n        ...Image\n      }\n      mediaAdvanced {\n        ...Media\n      }\n      mediaSmall {\n        ...Image\n      }\n      loopTheVideo\n      showCta\n      readMore {\n        ...CountryAwareLink\n      }\n      trustSymbols\n    }\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};

            function r(e) {
                return e.filter((function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var i = e.name.value;
                    return !a[i] && (a[i] = !0, !0)
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
            t.definitions = t.definitions.concat(r(n(96363).definitions)), t.definitions = t.definitions.concat(r(n(62786).definitions)), t.definitions = t.definitions.concat(r(n(8013).definitions));
            var l = {};

            function d(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    o(e, i), l[e.name.value] = i
                }
            })), e.exports = t, e.exports.websiteTextMediaIntro = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [d(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var t = l[i] || new Set,
                    a = new Set,
                    r = new Set;
                for (t.forEach((function(e) {
                        r.add(e)
                    })); r.size > 0;) {
                    var o = r;
                    r = new Set, o.forEach((function(e) {
                        a.has(e) || (a.add(e), (l[e] || new Set).forEach((function(e) {
                            r.add(e)
                        })))
                    }))
                }
                return a.forEach((function(i) {
                    var t = d(e, i);
                    t && n.definitions.push(t)
                })), n
            }(t, "websiteTextMediaIntro")
        }
    }
]);