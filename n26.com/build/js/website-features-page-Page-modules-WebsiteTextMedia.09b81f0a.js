"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5541], {
        34677: (e, L) => {
            Object.defineProperty(L, "__esModule", {
                    value: !0
                }), L.BLOCKS = void 0,
                function(e) {
                    e.DOCUMENT = "document", e.PARAGRAPH = "paragraph", e.HEADING_1 = "heading-1", e.HEADING_2 = "heading-2", e.HEADING_3 = "heading-3", e.HEADING_4 = "heading-4", e.HEADING_5 = "heading-5", e.HEADING_6 = "heading-6", e.OL_LIST = "ordered-list", e.UL_LIST = "unordered-list", e.LIST_ITEM = "list-item", e.HR = "hr", e.QUOTE = "blockquote", e.EMBEDDED_ENTRY = "embedded-entry-block", e.EMBEDDED_ASSET = "embedded-asset-block", e.TABLE = "table", e.TABLE_ROW = "table-row", e.TABLE_CELL = "table-cell", e.TABLE_HEADER_CELL = "table-header-cell"
                }(L.BLOCKS || (L.BLOCKS = {}))
        },
        2e3: (e, L, E) => {
            Object.defineProperty(L, "__esModule", {
                value: !0
            });
            var t = E(34677),
                S = {
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
            L.default = S
        },
        57556: (e, L, E) => {
            Object.defineProperty(L, "__esModule", {
                value: !0
            }), L.isText = L.isBlock = L.isInline = void 0;
            var t = E(34677),
                S = E(84864);

            function O(e, L) {
                for (var E = 0, t = Object.keys(e); E < t.length; E++) {
                    if (L === e[t[E]]) return !0
                }
                return !1
            }
            L.isInline = function(e) {
                return O(S.INLINES, e.nodeType)
            }, L.isBlock = function(e) {
                return O(t.BLOCKS, e.nodeType)
            }, L.isText = function(e) {
                return "text" === e.nodeType
            }
        },
        12745: function(e, L, E) {
            var t = this && this.__createBinding || (Object.create ? function(e, L, E, t) {
                    void 0 === t && (t = E), Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function() {
                            return L[E]
                        }
                    })
                } : function(e, L, E, t) {
                    void 0 === t && (t = E), e[t] = L[E]
                }),
                S = this && this.__setModuleDefault || (Object.create ? function(e, L) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: L
                    })
                } : function(e, L) {
                    e.default = L
                }),
                O = this && this.__exportStar || function(e, L) {
                    for (var E in e) "default" === E || Object.prototype.hasOwnProperty.call(L, E) || t(L, e, E)
                },
                _ = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var L = {};
                    if (null != e)
                        for (var E in e) "default" !== E && Object.prototype.hasOwnProperty.call(e, E) && t(L, e, E);
                    return S(L, e), L
                },
                r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(L, "__esModule", {
                value: !0
            }), L.helpers = L.EMPTY_DOCUMENT = L.MARKS = L.INLINES = L.BLOCKS = void 0;
            var B = E(34677);
            Object.defineProperty(L, "BLOCKS", {
                enumerable: !0,
                get: function() {
                    return B.BLOCKS
                }
            });
            var n = E(84864);
            Object.defineProperty(L, "INLINES", {
                enumerable: !0,
                get: function() {
                    return n.INLINES
                }
            });
            var C = E(12014);
            Object.defineProperty(L, "MARKS", {
                enumerable: !0,
                get: function() {
                    return r(C).default
                }
            }), O(E(63199), L), O(E(97717), L), O(E(69819), L);
            var A = E(2e3);
            Object.defineProperty(L, "EMPTY_DOCUMENT", {
                enumerable: !0,
                get: function() {
                    return r(A).default
                }
            });
            var K = _(E(57556));
            L.helpers = K
        },
        84864: (e, L) => {
            Object.defineProperty(L, "__esModule", {
                    value: !0
                }), L.INLINES = void 0,
                function(e) {
                    e.HYPERLINK = "hyperlink", e.ENTRY_HYPERLINK = "entry-hyperlink", e.ASSET_HYPERLINK = "asset-hyperlink", e.EMBEDDED_ENTRY = "embedded-entry-inline"
                }(L.INLINES || (L.INLINES = {}))
        },
        12014: (e, L) => {
            var E;
            Object.defineProperty(L, "__esModule", {
                    value: !0
                }),
                function(e) {
                    e.BOLD = "bold", e.ITALIC = "italic", e.UNDERLINE = "underline", e.CODE = "code"
                }(E || (E = {})), L.default = E
        },
        69819: (e, L) => {
            Object.defineProperty(L, "__esModule", {
                value: !0
            })
        },
        63199: function(e, L, E) {
            var t, S = this && this.__spreadArray || function(e, L, E) {
                if (E || 2 === arguments.length)
                    for (var t, S = 0, O = L.length; S < O; S++) !t && S in L || (t || (t = Array.prototype.slice.call(L, 0, S)), t[S] = L[S]);
                return e.concat(t || Array.prototype.slice.call(L))
            };
            Object.defineProperty(L, "__esModule", {
                value: !0
            }), L.V1_NODE_TYPES = L.TEXT_CONTAINERS = L.HEADINGS = L.CONTAINERS = L.VOID_BLOCKS = L.TABLE_BLOCKS = L.LIST_ITEM_BLOCKS = L.TOP_LEVEL_BLOCKS = void 0;
            var O = E(34677),
                _ = E(84864);
            L.TOP_LEVEL_BLOCKS = [O.BLOCKS.PARAGRAPH, O.BLOCKS.HEADING_1, O.BLOCKS.HEADING_2, O.BLOCKS.HEADING_3, O.BLOCKS.HEADING_4, O.BLOCKS.HEADING_5, O.BLOCKS.HEADING_6, O.BLOCKS.OL_LIST, O.BLOCKS.UL_LIST, O.BLOCKS.HR, O.BLOCKS.QUOTE, O.BLOCKS.EMBEDDED_ENTRY, O.BLOCKS.EMBEDDED_ASSET, O.BLOCKS.TABLE], L.LIST_ITEM_BLOCKS = [O.BLOCKS.PARAGRAPH, O.BLOCKS.HEADING_1, O.BLOCKS.HEADING_2, O.BLOCKS.HEADING_3, O.BLOCKS.HEADING_4, O.BLOCKS.HEADING_5, O.BLOCKS.HEADING_6, O.BLOCKS.OL_LIST, O.BLOCKS.UL_LIST, O.BLOCKS.HR, O.BLOCKS.QUOTE, O.BLOCKS.EMBEDDED_ENTRY, O.BLOCKS.EMBEDDED_ASSET], L.TABLE_BLOCKS = [O.BLOCKS.TABLE, O.BLOCKS.TABLE_ROW, O.BLOCKS.TABLE_CELL, O.BLOCKS.TABLE_HEADER_CELL], L.VOID_BLOCKS = [O.BLOCKS.HR, O.BLOCKS.EMBEDDED_ENTRY, O.BLOCKS.EMBEDDED_ASSET], L.CONTAINERS = ((t = {})[O.BLOCKS.OL_LIST] = [O.BLOCKS.LIST_ITEM], t[O.BLOCKS.UL_LIST] = [O.BLOCKS.LIST_ITEM], t[O.BLOCKS.LIST_ITEM] = L.LIST_ITEM_BLOCKS, t[O.BLOCKS.QUOTE] = [O.BLOCKS.PARAGRAPH], t[O.BLOCKS.TABLE] = [O.BLOCKS.TABLE_ROW], t[O.BLOCKS.TABLE_ROW] = [O.BLOCKS.TABLE_CELL, O.BLOCKS.TABLE_HEADER_CELL], t[O.BLOCKS.TABLE_CELL] = [O.BLOCKS.PARAGRAPH], t[O.BLOCKS.TABLE_HEADER_CELL] = [O.BLOCKS.PARAGRAPH], t), L.HEADINGS = [O.BLOCKS.HEADING_1, O.BLOCKS.HEADING_2, O.BLOCKS.HEADING_3, O.BLOCKS.HEADING_4, O.BLOCKS.HEADING_5, O.BLOCKS.HEADING_6], L.TEXT_CONTAINERS = S([O.BLOCKS.PARAGRAPH], L.HEADINGS, !0), L.V1_NODE_TYPES = [O.BLOCKS.DOCUMENT, O.BLOCKS.PARAGRAPH, O.BLOCKS.HEADING_1, O.BLOCKS.HEADING_2, O.BLOCKS.HEADING_3, O.BLOCKS.HEADING_4, O.BLOCKS.HEADING_5, O.BLOCKS.HEADING_6, O.BLOCKS.OL_LIST, O.BLOCKS.UL_LIST, O.BLOCKS.LIST_ITEM, O.BLOCKS.HR, O.BLOCKS.QUOTE, O.BLOCKS.EMBEDDED_ENTRY, O.BLOCKS.EMBEDDED_ASSET, _.INLINES.HYPERLINK, _.INLINES.ENTRY_HYPERLINK, _.INLINES.ASSET_HYPERLINK, _.INLINES.EMBEDDED_ENTRY, "text"]
        },
        97717: (e, L) => {
            Object.defineProperty(L, "__esModule", {
                value: !0
            })
        }
    }
]);