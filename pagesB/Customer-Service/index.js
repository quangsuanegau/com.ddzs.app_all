!function () {
    var t = function () {
        return (() => {
            var t = {
                474: t => {
                    t.exports = function (t, e, a) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, e.default = Custom_page({
                            data: () => ({
                                backTitleIsCenter: !1,
                                pathUrl: "",
                                listData: [{
                                    img: "contact_phone",
                                    name: "客服电话",
                                    content: "18729278873"
                                }, {img: "contact_wechat", name: "客服微信", content: "18729278873"}],
                                pageDetail: {
                                    pageUrl: "客服页",
                                    pageName: "客服页",
                                    pageCode: "READ_COMMON",
                                    pageOrigin: ""
                                }
                            }), onInit() {
                                let t = this.$app.$def.getPagesCodeInfo();
                                this.pathUrl = t.pathUrl, this.$app.$def.changeCommonDataByPageShow(this)
                            }, onShow() {
                                let t = this.$app.$def.getPagesCodeInfo();
                                this.pathUrl = t.pathUrl
                            }, onHide() {
                            }, pageBack() {
                                this.$page.finish()
                            }, onBackPress() {
                            }
                        });
                        const n = e.default || t.exports, i = ["public", "protected", "private"];
                        if (n.data && i.some((function (t) {
                            return n[t]
                        }))) throw new Error('页面VM对象中的属性data不可与"' + i.join(",") + '"同时存在，请使用private替换data名称');
                        n.data || (n.data = {}, n._descriptor = {}, i.forEach((function (t) {
                            const e = typeof n[t];
                            if ("object" === e) {
                                n.data = Object.assign(n.data, n[t]);
                                for (const e in n[t]) n._descriptor[e] = {access: t}
                            } else "function" === e && console.warn("页面VM对象中的属性" + t + "的值不能是函数，请使用对象")
                        })))
                    }
                }, 3899: t => {
                    t.exports = function (t, e, a) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
                        var n = o(a("@app-module/system.package")), i = o(a("@app-module/system.router"));

                        function o(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        e.default = {
                            props: {
                                btnText: {type: String, default: ""},
                                packageName: {type: String, default: ""},
                                backUrl: {type: String, default: ""}
                            }, data: () => ({isVisible: !1}), onInit() {
                                this.isAppInstalled()
                            }, isAppInstalled() {
                                if ("" === this.packageName) return console.log("No package name");
                                let t = this;
                                n.default.hasInstalled({
                                    package: t.packageName, success: function (e) {
                                        console.log("handling success: ", e.result);
                                        try {
                                            t.isVisible = e.result
                                        } catch (t) {
                                        }
                                    }, fail: function (t, e) {
                                        console.log(`handling fail, code = ${e}`)
                                    }
                                })
                            }, backTencentApp() {
                                if ("" === this.backUrl) return console.log("No back url");
                                i.default.push({uri: this.backUrl})
                            }
                        }
                    }
                }, 5539: t => {
                    t.exports = function (t, e, a) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, e.default = {
                            data: {deviceInfo: {statusBarHeight: 40}},
                            onReady() {
                                DEVICE_UTILS.getInfo().then((t => {
                                    let e = this.$app.$def.getPagesCodeInfo();
                                    this.deviceInfo.statusBarHeight = Math.ceil(750 * t.statusBarHeight / t.screenWidth), "READ_READINFO" == e.pageCode && "huawei" == this.$app.$def.brand && (this.deviceInfo.statusBarHeight = 0)
                                }))
                            },
                            backClick() {
                                this.$emit("backClick")
                            },
                            props: {
                                title: {type: String, default: ""},
                                backgroudColor: {type: String, default: "transparent"},
                                textCenter: {type: Boolean, default: !1},
                                textColor: {type: String, default: "#ffffff"},
                                textWeight: {type: Number, default: 700},
                                fontSize: {type: Number, default: 32},
                                backIconShow: {type: Boolean, default: !0},
                                backImgUrl: {type: String, default: ""}
                            }
                        }
                    }
                }, 1496: t => {
                    t.exports = {
                        ".back-app-wrapper": {
                            position: "fixed",
                            top: "200px",
                            left: "0px",
                            height: "48px",
                            width: "200px"
                        },
                        ".back-app-content": {
                            paddingTop: "0px",
                            paddingRight: "10px",
                            paddingBottom: "0px",
                            paddingLeft: "10px",
                            height: "48px",
                            backgroundColor: "rgba(0,0,0,0.5)",
                            borderTopRightRadius: "24px",
                            borderBottomRightRadius: "24px",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        ".back-app-content > text": {
                            height: "20px",
                            fontSize: "20px",
                            color: "#ffffff",
                            lines: 1,
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "back-app-content"
                                }, {t: "child"}, {t: "t", n: "text"}]
                            }
                        }
                    }
                }, 3273: t => {
                    t.exports = {
                        ".common-back-header-wrapper .common-back-header": {
                            width: "750px",
                            flexDirection: "row",
                            paddingTop: "0px",
                            paddingRight: "20px",
                            paddingBottom: "0px",
                            paddingLeft: "20px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "common-back-header-wrapper"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "common-back-header"}]
                            }
                        },
                        ".common-back-header-wrapper .common-back-header .common-back-icon": {
                            width: "36px",
                            height: "88px",
                            paddingTop: "29px",
                            paddingRight: "20px",
                            paddingBottom: "29px",
                            paddingLeft: "0px",
                            objectFit: "fill",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "common-back-header-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "common-back-header"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "common-back-icon"}]
                            }
                        },
                        ".common-back-header-wrapper .common-back-header .common-title": {
                            fontSize: "34px",
                            fontWeight: "bold",
                            textAlign: "center",
                            flex: 1,
                            paddingRight: "68px",
                            lines: 1,
                            textOverflow: "ellipsis",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "common-back-header-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "common-back-header"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "common-title"}]
                            }
                        },
                        ".common-back-icon-qd": {
                            flexDirection: "column",
                            height: "88px",
                            paddingTop: "20px",
                            paddingRight: "0px",
                            paddingBottom: "20px",
                            paddingLeft: "25px",
                            alignContent: "center",
                            textAlign: "center",
                            justifyContent: "center"
                        },
                        ".common-back-icon-qd image": {
                            width: "42px",
                            height: "28px",
                            marginRight: "28px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "common-back-icon-qd"
                                }, {t: "d"}, {t: "t", n: "image"}]
                            }
                        }
                    }
                }, 2640: t => {
                    t.exports = {
                        ".customer-wrapper": {
                            width: "750px",
                            height: "100%",
                            flexDirection: "column",
                            backgroundColor: "#44A1F6"
                        },
                        ".customer-wrapper .customer-section": {
                            backgroundColor: "#ffffff",
                            flexDirection: "column",
                            borderRadius: "20px",
                            marginTop: "20px",
                            marginRight: "24px",
                            marginBottom: "20px",
                            marginLeft: "24px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "customer-wrapper"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "customer-section"}]
                            }
                        },
                        ".customer-wrapper .customer-section .customer-item": {
                            height: "100px",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: "0px",
                            paddingRight: "24px",
                            paddingBottom: "0px",
                            paddingLeft: "24px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "customer-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "customer-section"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "customer-item"}]
                            }
                        },
                        ".customer-wrapper .customer-section .customer-item .customer-item-icon": {
                            width: "40px",
                            height: "40px",
                            objectFit: "fill",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "customer-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "customer-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "customer-item"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "customer-item-icon"}]
                            }
                        },
                        ".customer-wrapper .customer-section .customer-item .customer-item-label": {
                            fontSize: "28px",
                            color: "#666666",
                            marginRight: "20px",
                            marginLeft: "10px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "customer-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "customer-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "customer-item"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "customer-item-label"}]
                            }
                        },
                        ".customer-wrapper .customer-section .customer-item .customer-item-content": {
                            fontSize: "30px",
                            fontWeight: "700",
                            color: "#333333",
                            flex: 1,
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "customer-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "customer-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "customer-item"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "customer-item-content"}]
                            }
                        }
                    }
                }, 6547: t => {
                    t.exports = {
                        type: "div",
                        attr: {},
                        classList: ["back-app-wrapper"],
                        events: {click: "backTencentApp"},
                        children: [{
                            type: "div", attr: {}, shown: function () {
                                return this.isVisible
                            }, classList: ["back-app-content"], children: [{
                                type: "text", attr: {
                                    value: function () {
                                        return "< " + this.btnText
                                    }
                                }
                            }]
                        }]
                    }
                }, 3082: t => {
                    t.exports = {
                        type: "div",
                        attr: {},
                        children: [{
                            type: "div",
                            attr: {},
                            classList: ["common-back-header-wrapper"],
                            style: {
                                backgroundColor: function () {
                                    return this.backgroudColor
                                }
                            },
                            children: [{
                                type: "div",
                                attr: {},
                                classList: ["common-back-header"],
                                style: {
                                    paddingTop: function () {
                                        return this.deviceInfo.statusBarHeight + "px"
                                    }, height: function () {
                                        return this.deviceInfo.statusBarHeight + 88 + "px"
                                    }
                                },
                                children: [{
                                    type: "div",
                                    attr: {},
                                    events: {click: "backClick"},
                                    classList: ["common-back-icon-qd"],
                                    children: [{type: "image", attr: {src: "/assets/star-detail/back-icon.png"}}]
                                }, {
                                    type: "div", attr: {}, children: [{
                                        type: "text", attr: {
                                            value: function () {
                                                return this.title
                                            }
                                        }, classList: ["common-title"], style: {
                                            color: function () {
                                                return this.textColor
                                            }, fontSize: function () {
                                                return this.fontSize + "px"
                                            }, fontWeight: function () {
                                                return this.textWeight
                                            }, textAlign: function () {
                                                return this.textCenter ? "center" : "left"
                                            }
                                        }
                                    }]
                                }]
                            }]
                        }]
                    }
                }, 4835: t => {
                    t.exports = {
                        type: "div",
                        attr: {},
                        classList: ["customer-wrapper"],
                        children: [{
                            type: "common-header",
                            attr: {title: "联系客服"},
                            events: {"back-click": "pageBack"}
                        }, {
                            type: "div",
                            attr: {},
                            classList: ["customer-section"],
                            children: [{
                                type: "div", attr: {}, classList: ["customer-item"], repeat: {
                                    exp: function () {
                                        return this.listData
                                    }, key: "index", value: "item"
                                }, children: [{
                                    type: "image", attr: {
                                        src: function () {
                                            return "../../assets/customer-service/" + this.item.img + ".png"
                                        }
                                    }, classList: ["customer-item-icon"]
                                }, {
                                    type: "text", attr: {
                                        value: function () {
                                            return this.item.name
                                        }
                                    }, classList: ["customer-item-label"]
                                }, {
                                    type: "text", attr: {
                                        value: function () {
                                            return this.item.content
                                        }
                                    }, classList: ["customer-item-content"]
                                }]
                            }]
                        }, {
                            type: "back-app-button", attr: {
                                btnText: function () {
                                    return this.$app.$def.tencentBackName
                                }, backUrl: function () {
                                    return this.$app.$def.tencentBackUrl
                                }, packageName: function () {
                                    return this.$app.$def.tencentBackPkg
                                }
                            }, shown: function () {
                                return this.$app.$def.isTencentBackButtonVisible
                            }
                        }]
                    }
                }, 1267: (t, e, a) => {
                    var n = a(1496), i = a(3899);
                    $app_define$("@app-component/back-app-button", [], (function (t, e, o) {
                        i(o, e, t), e.__esModule && e.default && (o.exports = e.default), o.exports.template = a(6547), o.exports.style = n
                    }))
                }, 4457: (t, e, a) => {
                    var n = a(3273), i = a(5539);
                    $app_define$("@app-component/common-header", [], (function (t, e, o) {
                        i(o, e, t), e.__esModule && e.default && (o.exports = e.default), o.exports.template = a(3082), o.exports.style = n
                    }))
                }
            }, e = {};

            function a(n) {
                var i = e[n];
                if (void 0 !== i) return i.exports;
                var o = e[n] = {exports: {}};
                return t[n](o, o.exports, a), o.exports
            }

            (() => {
                a(4457), a(1267);
                var t = a(2640), e = a(474);
                $app_define$("@app-component/index", [], (function (n, i, o) {
                    e(o, i, n), i.__esModule && i.default && (o.exports = i.default), o.exports.template = a(4835), o.exports.style = t
                })), $app_bootstrap$("@app-component/index", {packagerVersion: "1.9.14"})
            })()
        })()
    };
    if ("undefined" == typeof window) return t();
    window.createPageHandler = t
}();