!function () {
    var e = function () {
        return (() => {
            var e, t, r = {
                1826: e => {
                    e.exports = function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, t.default = {
                            protected: {type: ""},
                            onInit() {
                                switch (Number(this.type)) {
                                    case 1:
                                        this.webUrl = "https://ddzsapi.syreads.com/licensing.html";
                                        break;
                                    case 2:
                                        this.webUrl = "https://ddzsapi.syreads.com/privacy.html"
                                }
                            },
                            onShow() {
                                REPORT_SDK && REPORT_SDK.page_show()
                            },
                            onHide() {
                                REPORT_SDK && REPORT_SDK.page_hide()
                            }
                        };
                        const o = t.default || e.exports, a = ["public", "protected", "private"];
                        if (o.data && a.some((function (e) {
                            return o[e]
                        }))) throw new Error('页面VM对象中的属性data不可与"' + a.join(",") + '"同时存在，请使用private替换data名称');
                        o.data || (o.data = {}, o._descriptor = {}, a.forEach((function (e) {
                            const t = typeof o[e];
                            if ("object" === t) {
                                o.data = Object.assign(o.data, o[e]);
                                for (const t in o[e]) o._descriptor[t] = {access: e}
                            } else "function" === t && console.warn("页面VM对象中的属性" + e + "的值不能是函数，请使用对象")
                        })))
                    }
                }, 6387: e => {
                    e.exports = {}
                }, 4131: e => {
                    e.exports = {
                        type: "div", attr: {}, children: [{
                            type: "web", attr: {
                                id: "web", src: function () {
                                    return this.webUrl
                                }
                            }, id: "web", classList: ["web"]
                        }]
                    }
                }
            }, o = {};

            function a(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var n = o[e] = {exports: {}};
                return r[e](n, n.exports, a), n.exports
            }

            e = a(6387), t = a(1826), $app_define$("@app-component/index", [], (function (r, o, n) {
                t(n, o, r), o.__esModule && o.default && (n.exports = o.default), n.exports.template = a(4131), n.exports.style = e
            })), $app_bootstrap$("@app-component/index", {packagerVersion: "1.9.14"})
        })()
    };
    if ("undefined" == typeof window) return e();
    window.createPageHandler = e
}();