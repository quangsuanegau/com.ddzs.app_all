!function () {
    var e = function () {
        return (() => {
            var e = {
                7560: e => {
                    e.exports = function (e, t, a) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
                        var n = i(a("@app-module/service.share"));

                        function i(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        i(a("@app-module/system.router")), t.default = Custom_page({
                            private: {
                                pushId: null,
                                webUrl: "http://zwshare.syreads.com/#/invite",
                                targetUrl: "http://zwshare.syreads.com/#/startPage",
                                pageDetail: {
                                    pageRoute: "/pagesB/Activity",
                                    pageName: "邀请好友页",
                                    pageUrl: "邀请好友页",
                                    pageCode: "READ_COMMON",
                                    pageOrigin: ""
                                }
                            }, public: {pathUrl: "", taskCode: "invite"}, onInit() {
                                this.pathUrl = this.pathUrl, this.pushId = this.pushId, this.shareType = this.getShareTypeByTaskCode(), console.log(this.shareType), $utils.getStorage("userInfo").then((e => {
                                    if (e) {
                                        var t = JSON.parse(e).id;
                                        this.targetUrl = `${this.targetUrl}?shareType=${this.shareType}&shareId=${t}`
                                    }
                                })), COMMON_REPORT_UTILS.page_show_report(this.pathUrl)
                            }, onShow() {
                                REPORT_SDK && REPORT_SDK.page_show()
                            }, onHide() {
                                REPORT_SDK && REPORT_SDK.page_hide()
                            }, getShareTypeByTaskCode() {
                                let e = 4;
                                switch (this.taskCode) {
                                    case"mornShare":
                                        e = 1;
                                        break;
                                    case"noonShare":
                                        e = 2;
                                        break;
                                    case"nightShare":
                                        e = 3;
                                        break;
                                    case"invite":
                                        e = 4
                                }
                                return e
                            }, toShare(e) {
                                const t = this;
                                n.default.share({
                                    shareType: 0,
                                    title: "邀请好友得金币",
                                    imagePath: "/assets/image/logo.jpg",
                                    targetUrl: t.targetUrl,
                                    platforms: e,
                                    success: function (e) {
                                        console.log("handling success"), t.$app.$def.taskInfoUpdateHandle({task_code: t.taskCode})
                                    },
                                    fail: function (e, t) {
                                        console.log(`handling fail, failMess=${e},code=${t}`)
                                    },
                                    cancel: function (e) {
                                        console.log("handling success"), t.$app.$def.taskInfoUpdateHandle({task_code: t.taskCode})
                                    }
                                })
                            }, onMessageHandle(e) {
                                console.log("接收H5发送的消息", e), COMMON_REPORT_UTILS.page_click_report("邀请好友");
                                var t = this;
                                n.default.getAvailablePlatforms({
                                    success: function (e) {
                                        console.log("res=", e.platforms), e.platforms.length > 0 ? t.toShare(e.platforms) : t.toShare(["SYSTEM"])
                                    }, fail: function (e) {
                                        console.log("err=", e)
                                    }
                                })
                            }, onPageFinishHandle(e) {
                                let t = this;
                                $utils.getStorage("token").then((e => {
                                    t.$element("web").postMessage({message: e})
                                }))
                            }, backClickHandle() {
                                this.stacksPath(), COMMON_REPORT_UTILS.page_click_report("返回")
                            }, onBackPress() {
                                return this.stacksPath(), !0
                            }, stacksPath() {
                                null != this.pushId && null != this.pushId ? $utils.routeReplacetheUrl("pagesA/Main") : this.$page.finish()
                            }
                        });
                        const o = t.default || e.exports, r = ["public", "protected", "private"];
                        if (o.data && r.some((function (e) {
                            return o[e]
                        }))) throw new Error('页面VM对象中的属性data不可与"' + r.join(",") + '"同时存在，请使用private替换data名称');
                        o.data || (o.data = {}, o._descriptor = {}, r.forEach((function (e) {
                            const t = typeof o[e];
                            if ("object" === t) {
                                o.data = Object.assign(o.data, o[e]);
                                for (const t in o[e]) o._descriptor[t] = {access: e}
                            } else "function" === t && console.warn("页面VM对象中的属性" + e + "的值不能是函数，请使用对象")
                        })))
                    }
                }, 3899: e => {
                    e.exports = function (e, t, a) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
                        var n = o(a("@app-module/system.package")), i = o(a("@app-module/system.router"));

                        function o(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        t.default = {
                            props: {
                                btnText: {type: String, default: ""},
                                packageName: {type: String, default: ""},
                                backUrl: {type: String, default: ""}
                            }, data: () => ({isVisible: !1}), onInit() {
                                this.isAppInstalled()
                            }, isAppInstalled() {
                                if ("" === this.packageName) return console.log("No package name");
                                let e = this;
                                n.default.hasInstalled({
                                    package: e.packageName, success: function (t) {
                                        console.log("handling success: ", t.result);
                                        try {
                                            e.isVisible = t.result
                                        } catch (e) {
                                        }
                                    }, fail: function (e, t) {
                                        console.log(`handling fail, code = ${t}`)
                                    }
                                })
                            }, backTencentApp() {
                                if ("" === this.backUrl) return console.log("No back url");
                                i.default.push({uri: this.backUrl})
                            }
                        }
                    }
                }, 366: e => {
                    e.exports = function (e, t, a) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, t.default = {
                            data: {
                                pageName: "书城",
                                deviceInfo: {statusBarHeight: 40}
                            },
                            onReady() {
                                DEVICE_UTILS.getInfo().then((e => {
                                    let t = this.$app.$def.getPagesCodeInfo();
                                    this.deviceInfo.statusBarHeight = Math.ceil(750 * e.statusBarHeight / e.screenWidth), "READ_READINFO" == t.pageCode && "huawei" == this.$app.$def.brand && (this.deviceInfo.statusBarHeight = 0)
                                }))
                            },
                            backClick() {
                                this.$emit("backClick")
                            },
                            props: {
                                title: {type: String, default: ""},
                                backgroudColor: {type: String, default: "transparent"},
                                textCenter: {type: Boolean, default: !0},
                                textColor: {type: String, default: "#333333"},
                                textWeight: {type: Number, default: 700},
                                fontSize: {type: Number, default: 36},
                                backIconShow: {type: Boolean, default: !0},
                                backImgUrl: {type: String, default: ""}
                            }
                        }
                    }
                }, 1496: e => {
                    e.exports = {
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
                }, 4523: e => {
                    e.exports = {
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
                            width: "68px",
                            height: "88px",
                            paddingTop: "20px",
                            paddingRight: "10px",
                            paddingBottom: "20px",
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
                            width: "50px",
                            height: "88px",
                            paddingTop: "20px",
                            paddingRight: "0px",
                            paddingBottom: "20px",
                            paddingLeft: "5px",
                            alignContent: "center",
                            textAlign: "center",
                            justifyContent: "center"
                        },
                        ".common-back-icon-qd image": {
                            width: "12px",
                            height: "20px",
                            marginLeft: "23px",
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
                }, 9772: e => {
                    e.exports = {
                        ".activity-wrappar": {width: "100%", flexDirection: "column"},
                        ".activity-wrappar .web-container": {
                            width: "100%",
                            height: "100%",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "activity-wrappar"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "web-container"}]
                            }
                        },
                        ".activity-wrappar .web-container .web": {
                            width: "100%",
                            height: "100%",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "activity-wrappar"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "web-container"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "web"}]
                            }
                        }
                    }
                }, 6547: e => {
                    e.exports = {
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
                }, 3979: e => {
                    e.exports = {
                        type: "div", attr: {}, children: [{
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
                                    shown: function () {
                                        return this.backIconShow && this.backImgUrl
                                    },
                                    events: {click: "backClick"},
                                    classList: ["common-back-icon-qd"],
                                    children: [{
                                        type: "image", attr: {
                                            src: function () {
                                                return this.backImgUrl
                                            }
                                        }
                                    }]
                                }, {
                                    type: "image", attr: {
                                        src: function () {
                                            return "#FFFFFF" === this.textColor ? "/assets/common/common-back-white.png" : "/assets/common/common-back-black.png"
                                        }
                                    }, shown: function () {
                                        return this.backIconShow && !this.backImgUrl && !(this.backIconShow && this.backImgUrl)
                                    }, events: {click: "backClick"}, classList: ["common-back-icon"]
                                }, {
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
                    }
                }, 1227: e => {
                    e.exports = {
                        type: "div",
                        attr: {},
                        classList: ["activity-wrappar"],
                        children: [{
                            type: "common-header", attr: {
                                title: "邀请好友", textCenter: function () {
                                    return !1
                                }
                            }, events: {"back-click": "backClickHandle"}
                        }, {
                            type: "div",
                            attr: {},
                            classList: ["web-container"],
                            children: [{
                                type: "web",
                                attr: {
                                    id: "web", src: function () {
                                        return this.webUrl
                                    }
                                },
                                id: "web",
                                classList: ["web"],
                                events: {pagefinish: "onPageFinishHandle", message: "onMessageHandle"}
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
                }, 1267: (e, t, a) => {
                    var n = a(1496), i = a(3899);
                    $app_define$("@app-component/back-app-button", [], (function (e, t, o) {
                        i(o, t, e), t.__esModule && t.default && (o.exports = t.default), o.exports.template = a(6547), o.exports.style = n
                    }))
                }, 3172: (e, t, a) => {
                    var n = a(4523), i = a(366);
                    $app_define$("@app-component/common-header", [], (function (e, t, o) {
                        i(o, t, e), t.__esModule && t.default && (o.exports = t.default), o.exports.template = a(3979), o.exports.style = n
                    }))
                }
            }, t = {};

            function a(n) {
                var i = t[n];
                if (void 0 !== i) return i.exports;
                var o = t[n] = {exports: {}};
                return e[n](o, o.exports, a), o.exports
            }

            (() => {
                a(3172), a(1267);
                var e = a(9772), t = a(7560);
                $app_define$("@app-component/index", [], (function (n, i, o) {
                    t(o, i, n), i.__esModule && i.default && (o.exports = i.default), o.exports.template = a(1227), o.exports.style = e
                })), $app_bootstrap$("@app-component/index", {packagerVersion: "1.9.14"})
            })()
        })()
    };
    if ("undefined" == typeof window) return e();
    window.createPageHandler = e
}();