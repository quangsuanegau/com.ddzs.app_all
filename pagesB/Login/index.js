!function () {
    var e = function () {
        return (() => {
            var e = {
                3003: (e, t, a) => {
                    e.exports = function (e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
                        var i = a(5187), o = a(5987), r = p(n("@app-module/system.router")),
                            s = p(n("@app-module/system.prompt"));

                        function p(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        p(a(7395)), t.default = {
                            name: "",
                            data: () => ({
                                time: null,
                                choose: !1,
                                phoneNumber: "",
                                verificationCode: "",
                                showModal: !1,
                                countTimer: null
                            }),
                            onInit() {
                                this.$on("clickBack", this.backClickHandle), this.$on("disagree", this.disagreeHandle), this.$on("agree", this.agreeHandle)
                            },
                            onShow() {
                                REPORT_SDK && REPORT_SDK.page_show()
                            },
                            onHide() {
                                REPORT_SDK && REPORT_SDK.page_hide(), this.$app.setAppData("dataUser", {
                                    destPageName: "Main",
                                    params: {getUser: !0}
                                })
                            },
                            onBackPress() {
                                return this.showModal = !0, this.showModal
                            },
                            changePhone(e) {
                                this.phoneNumber = e && e.value
                            },
                            changeCode(e) {
                                this.verificationCode = e && e.value
                            },
                            goPrivacy(e) {
                                1 === e ? r.default.push({
                                    uri: "/pagesB/Privacy",
                                    params: {type: 1}
                                }) : r.default.push({uri: "/pagesB/Privacy", params: {type: 2}})
                            },
                            getVerification() {
                                if (!this.phoneNumber) return $utils.showToast("请输入手机号");
                                $apis.user.getShortCode({phone: this.phoneNumber}).then((e => {
                                    if (e && 200 === e.code) {
                                        console.log("here");
                                        let e = parseInt((new Date).getTime() / 1e3);
                                        (new i.Countdown).start().start({startTime: e, endTime: e + 60}).then((e => {
                                            this.countTimer = null !== e ? e : null
                                        })).catch((e => {
                                            console.log(e)
                                        }))
                                    }
                                }))
                            },
                            disagreeHandle() {
                                this.$app.setAppData("dataUser", {
                                    destPageName: "Main",
                                    params: {getUser: !0}
                                }), r.default.back()
                            },
                            agreeHandle() {
                                this.showModal = !1
                            },
                            goHandle: (0, o.debounce)((function () {
                                if (!this.choose) return $utils.showToast("请先阅读并勾选协议");
                                if (!(0, o.phoneVerify)(this.phoneNumber)) return $utils.showToast("请输入正确手机号");
                                if (!this.verificationCode) return $utils.showToast("请输入验证码");
                                const e = {
                                    androidId: this.$app.$def.android,
                                    brand: this.$app.$def.brand,
                                    phone: this.phoneNumber,
                                    validate: this.verificationCode,
                                    versionCode: this.$app.$def.versionCode,
                                    versionName: this.$app.$def.versionName
                                };
                                $apis.user.login(e).then((e => {
                                    200 === e.code ? (this.$app.$def.isLogin = !0, $utils.setStorage("isLogin", e.data.loginStatus), this.showToast("登录成功", (() => {
                                        r.default.back()
                                    }))) : $utils.showToast(e.msg)
                                }))
                            })),
                            showToast(e, t) {
                                s.default.showToast({message: e, duration: 0}), t && setTimeout((() => {
                                    t()
                                }), 1e3)
                            },
                            selectHandle() {
                                this.choose = !this.choose
                            },
                            backClickHandle() {
                                this.showModal = !0
                            }
                        };
                        const l = t.default || e.exports, c = ["public", "protected", "private"];
                        if (l.data && c.some((function (e) {
                            return l[e]
                        }))) throw new Error('页面VM对象中的属性data不可与"' + c.join(",") + '"同时存在，请使用private替换data名称');
                        l.data || (l.data = {}, l._descriptor = {}, c.forEach((function (e) {
                            const t = typeof l[e];
                            if ("object" === t) {
                                l.data = Object.assign(l.data, l[e]);
                                for (const t in l[e]) l._descriptor[t] = {access: e}
                            } else "function" === t && console.warn("页面VM对象中的属性" + e + "的值不能是函数，请使用对象")
                        })))
                    }
                }, 6914: e => {
                    e.exports = function (e, t, a) {
                        "use strict";
                        var n;
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, (n = a("@app-module/system.router")) && n.__esModule, t.default = {
                            data: {
                                pageName: "书城",
                                deviceInfo: {statusBarHeight: 40}
                            },
                            onReady() {
                                console.log(this.props, "prop")
                            },
                            backClick() {
                                this.$dispatch("clickBack", {params: "来自子组件的消息"})
                            },
                            props: {
                                title: {type: String, default: ""},
                                backgroudColor: {type: String, default: "transparent"},
                                paddingLeft: {type: String, default: "45"},
                                textCenter: {type: Boolean, default: !0},
                                textColor: {type: String, default: "#333333"},
                                textWeight: {type: Number, default: 700},
                                fontSize: {type: Number, default: 36},
                                backIconShow: {type: Boolean, default: !0},
                                backImgUrl: {type: String, default: ""}
                            }
                        }
                    }
                }, 2729: e => {
                    e.exports = function (e, t, a) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, t.default = {
                            disagree() {
                                this.$dispatch("disagree")
                            }, agree() {
                                this.$dispatch("agree")
                            }
                        }
                    }
                }, 7489: e => {
                    e.exports = {
                        ".common-back-header-wrapper .common-back-header": {
                            width: "100%",
                            flexDirection: "row",
                            alignItems: "center",
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
                            width: "62px",
                            height: "84px",
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
                        ".common-back": {width: "42px", height: "42px"},
                        ".title": {
                            marginLeft: "239px",
                            fontSize: "38px",
                            fontFamily: "PingFang SC, PingFang SC-Bold",
                            fontWeight: "700",
                            textAlign: "left",
                            color: "#000000",
                            lineHeight: "40px"
                        }
                    }
                }, 2234: e => {
                    e.exports = {
                        ".prompt-pop-modal": {
                            position: "fixed",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0,0,0,0.85)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        ".prompt-pop-modal .prompt-pop": {
                            width: "540px",
                            height: "460px",
                            backgroundColor: "#ffffff",
                            borderRadius: "20px",
                            flexDirection: "column",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop-modal"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "prompt-pop"}]
                            }
                        },
                        ".prompt-pop-modal .prompt-pop text": {
                            fontSize: "28px",
                            color: "#666666",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop-modal"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop"
                                }, {t: "d"}, {t: "t", n: "text"}]
                            }
                        },
                        ".prompt-pop-modal .prompt-pop .content": {
                            flexDirection: "column",
                            backgroundColor: "#ffffff",
                            height: "100%",
                            borderRadius: "20px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop-modal"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "content"}]
                            }
                        },
                        ".prompt-pop-modal .prompt-pop .content .title": {
                            width: "100%",
                            textAlign: "center",
                            fontSize: "34px",
                            color: "#af8c2f",
                            fontWeight: "800",
                            height: "80px",
                            fontFamily: "myfont, serif",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop-modal"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "content"}, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "title"
                                }]
                            }
                        },
                        ".prompt-pop-modal .prompt-pop .content a": {
                            color: "#af8c2f",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop-modal"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "content"}, {t: "d"}, {
                                    t: "t",
                                    n: "a"
                                }]
                            }
                        },
                        ".prompt-pop-modal .prompt-pop .bottom": {
                            width: "100%",
                            backgroundColor: "#ffffff",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: "100px",
                            paddingTop: "0px",
                            paddingRight: "105px",
                            paddingBottom: "0px",
                            paddingLeft: "105px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop-modal"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "bottom"}]
                            }
                        },
                        ".prompt-pop-modal .prompt-pop .bottom .line": {
                            width: "1px",
                            height: "26px",
                            backgroundColor: "#CCCCCC",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop-modal"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "bottom"}, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "line"
                                }]
                            }
                        },
                        ".prompt-pop-modal .prompt-pop .bottom .btn": {
                            fontSize: "32px",
                            fontFamily: "PingFang SC, PingFang SC-Regular",
                            fontWeight: "400",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop-modal"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "bottom"}, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "btn"
                                }]
                            }
                        },
                        ".prompt-pop-modal .prompt-pop .bottom .default-btn": {
                            fontSize: "32px",
                            fontFamily: "PingFang SC, PingFang SC-Regular",
                            fontWeight: "400",
                            textAlign: "left",
                            color: "#a0a0a0",
                            lineHeight: "32px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop-modal"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "bottom"}, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "default-btn"
                                }]
                            }
                        },
                        ".prompt-pop-modal .prompt-pop .bottom .active-btn": {
                            fontSize: "32px",
                            fontFamily: "PingFang SC, PingFang SC-Regular",
                            fontWeight: "400",
                            textAlign: "left",
                            color: "#f34434",
                            lineHeight: "32px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop-modal"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "bottom"}, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "active-btn"
                                }]
                            }
                        },
                        ".title-tips": {
                            fontSize: "28px",
                            fontFamily: "PingFang SC, PingFang SC-Bold",
                            fontWeight: "700",
                            textAlign: "center",
                            color: "#000000",
                            lineHeight: "42px",
                            marginTop: "62px",
                            marginLeft: "81px",
                            marginRight: "67px"
                        },
                        ".content-img": {
                            width: "109px",
                            height: "103px",
                            marginTop: "38px",
                            marginRight: "auto",
                            marginBottom: "0px",
                            marginLeft: "auto"
                        }
                    }
                }, 4052: e => {
                    e.exports = {
                        ".login-warpper": {
                            flexDirection: "column",
                            paddingTop: "0px",
                            paddingRight: "45px",
                            paddingBottom: "0px",
                            paddingLeft: "45px"
                        },
                        ".login-title": {
                            height: "42px",
                            fontSize: "44px",
                            fontFamily: "PingFang SC, PingFang SC-Bold",
                            fontWeight: "700",
                            textAlign: "left",
                            color: "#333333",
                            lineHeight: "32px",
                            marginTop: "127px"
                        },
                        ".choose-ing": {width: "24px", height: "24px", marginRight: "13px"},
                        ".login-tips": {
                            height: "23px",
                            fontSize: "24px",
                            marginTop: "28px",
                            fontFamily: "PingFang SC, PingFang SC-Regular",
                            fontWeight: "400",
                            textAlign: "left",
                            color: "#c7c7c7",
                            lineHeight: "32px"
                        },
                        ".phone-cxt": {
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "182px",
                            borderBottomWidth: "1px",
                            borderBottomStyle: "solid",
                            borderBottomColor: "#e8e8e8"
                        },
                        ".phone-cxt > input": {
                            width: "100%",
                            height: "121px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "phone-cxt"
                                }, {t: "child"}, {t: "t", n: "input"}]
                            }
                        },
                        ".pass-cxt": {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "122px",
                            borderBottomWidth: "1px",
                            borderBottomStyle: "solid",
                            borderBottomColor: "#e8e8e8"
                        },
                        ".pass-cxt .pass-input": {
                            flex: 1,
                            height: "100%",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "pass-cxt"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "pass-input"}]
                            }
                        },
                        ".pass-cxt .pass-code": {
                            fontSize: "28px",
                            fontFamily: "PingFang SC, PingFang SC-Regular",
                            fontWeight: "400",
                            textAlign: "left",
                            color: "#f34333",
                            lineHeight: "32px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "pass-cxt"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "pass-code"}]
                            }
                        },
                        ".pass-cxt .pass-count": {
                            color: "#afafaf",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "pass-cxt"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "pass-count"}]
                            }
                        },
                        ".login-btn": {
                            width: "650px",
                            height: "88px",
                            borderRadius: "44px",
                            backgroundImage: "/assets/my/login-btn.png",
                            marginTop: "91px",
                            justifyContent: "center",
                            backgroundSize: "100% 100%"
                        },
                        ".login-btn > text": {
                            fontSize: "32px",
                            fontFamily: "PingFang SC, PingFang SC-Regular",
                            fontWeight: "400",
                            textAlign: "left",
                            color: "#ffffff",
                            lineHeight: "32px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "login-btn"
                                }, {t: "child"}, {t: "t", n: "text"}]
                            }
                        },
                        ".re-cxt": {
                            marginTop: "36px",
                            alignItems: "center",
                            fontSize: "24px",
                            fontFamily: "PingFang SC, PingFang SC-Regular",
                            fontWeight: "400",
                            textAlign: "left",
                            color: "#bfbfbf",
                            lineHeight: "32px"
                        },
                        ".re-cxt .re-tips": {
                            color: "#F44636",
                            _meta: {
                                ruleDef: [{t: "a", n: "class", i: !1, a: "element", v: "re-cxt"}, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "re-tips"
                                }]
                            }
                        },
                        ".re-cxt .radio-not": {
                            width: "24px",
                            height: "24px",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderStyle: "solid",
                            borderTopColor: "#f34535",
                            borderRightColor: "#f34535",
                            borderBottomColor: "#f34535",
                            borderLeftColor: "#f34535",
                            marginRight: "13px",
                            borderRadius: "50%",
                            _meta: {
                                ruleDef: [{t: "a", n: "class", i: !1, a: "element", v: "re-cxt"}, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "radio-not"
                                }]
                            }
                        }
                    }
                }, 7693: e => {
                    e.exports = {
                        type: "div",
                        attr: {},
                        children: [{
                            type: "div",
                            attr: {},
                            classList: ["common-back-header-wrapper"],
                            style: {
                                backgroundColor: function () {
                                    return this.backgroudColor
                                }, paddingLeft: function () {
                                    return this.paddingLeft + "px"
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
                                    classList: ["common-back"],
                                    children: [{type: "image", attr: {src: "/assets/common/back-icon.png"}}]
                                }, {
                                    type: "text", attr: {
                                        value: function () {
                                            return this.title
                                        }
                                    }, classList: ["title"]
                                }]
                            }]
                        }]
                    }
                }, 4709: e => {
                    e.exports = {
                        type: "div",
                        attr: {},
                        classList: ["prompt-pop-modal"],
                        children: [{
                            type: "div",
                            attr: {},
                            classList: ["prompt-pop"],
                            children: [{
                                type: "div",
                                attr: {},
                                classList: ["content"],
                                children: [{
                                    type: "image",
                                    attr: {src: "/assets/common/tips.png"},
                                    classList: ["content-img"]
                                }, {
                                    type: "div",
                                    attr: {},
                                    children: [{
                                        type: "text",
                                        attr: {value: "未登录账户可能会造成数据丢失 确定放弃登录么？"},
                                        classList: ["title-tips"]
                                    }]
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["bottom"],
                                    children: [{
                                        type: "text",
                                        attr: {value: "确定"},
                                        classList: ["default-btn", "btn"],
                                        events: {click: "disagree"}
                                    }, {type: "text", attr: {}, classList: ["line"]}, {
                                        type: "text",
                                        attr: {value: "取消"},
                                        classList: ["active-btn", "btn"],
                                        events: {click: "agree"}
                                    }]
                                }]
                            }]
                        }]
                    }
                }, 2342: e => {
                    e.exports = {
                        type: "div",
                        attr: {},
                        classList: ["login-warpper"],
                        children: [{
                            type: "commonheader",
                            attr: {backgroudColor: "#fff", paddingLeft: "0"}
                        }, {type: "text", attr: {value: "手机快捷登录"}, classList: ["login-title"]}, {
                            type: "text",
                            attr: {value: "未注册过的手机号将自动创建账号"},
                            classList: ["login-tips"]
                        }, {
                            type: "div",
                            attr: {},
                            classList: ["phone-cxt"],
                            children: [{
                                type: "input", attr: {
                                    type: "tel", value: function () {
                                        return this.phoneNumber
                                    }, placeholder: "请输入手机号"
                                }, events: {change: "changePhone"}
                            }]
                        }, {
                            type: "div",
                            attr: {},
                            classList: ["pass-cxt"],
                            children: [{
                                type: "input", attr: {
                                    type: "number", value: function () {
                                        return this.verificationCode
                                    }, maxlength: "11", placeholder: "请输入验证码"
                                }, events: {change: "changeCode"}, classList: ["pass-input"]
                            }, {
                                type: "text", attr: {
                                    value: function () {
                                        return this.countTimer ? `重新获取（${this.countTimer.second}）` : "获取验证码"
                                    }
                                }, classList: function () {
                                    return ["pass-code", this.countTimer ? "pass-count" : ""]
                                }, events: {click: "getVerification"}
                            }]
                        }, {
                            type: "div",
                            attr: {},
                            classList: ["login-btn"],
                            events: {click: "goHandle"},
                            children: [{type: "text", attr: {value: "登录"}}]
                        }, {
                            type: "div",
                            attr: {},
                            classList: ["re-cxt"],
                            children: [{
                                type: "div",
                                attr: {},
                                classList: ["radio-cxt"],
                                events: {click: "selectHandle"},
                                children: [{
                                    type: "div", attr: {}, shown: function () {
                                        return !this.choose
                                    }, classList: ["radio-not"]
                                }, {
                                    type: "image", attr: {src: "/assets/my/radio-select.png"}, shown: function () {
                                        return this.choose
                                    }, classList: ["choose-ing"]
                                }]
                            }, {type: "text", attr: {value: "登录即代表同意"}}, {
                                type: "text",
                                attr: {value: "《用户协议》"},
                                classList: ["re-tips"],
                                events: {
                                    click: function (e) {
                                        return this.goPrivacy(1, e)
                                    }
                                }
                            }, {type: "text", attr: {value: "和"}}, {
                                type: "text",
                                attr: {value: "《隐私政策》"},
                                classList: ["re-tips"],
                                events: {
                                    click: function (e) {
                                        return this.goPrivacy(2, e)
                                    }
                                }
                            }]
                        }, {
                            type: "modal", attr: {}, shown: function () {
                                return this.showModal
                            }
                        }]
                    }
                }, 3611: (e, t, a) => {
                    var n = a(7489), i = a(6914);
                    $app_define$("@app-component/commonheader", [], (function (e, t, o) {
                        i(o, t, e), t.__esModule && t.default && (o.exports = t.default), o.exports.template = a(7693), o.exports.style = n
                    }))
                }, 7549: (e, t, a) => {
                    var n = a(2234), i = a(2729);
                    $app_define$("@app-component/modal", [], (function (e, t, o) {
                        i(o, t, e), t.__esModule && t.default && (o.exports = t.default), o.exports.template = a(4709), o.exports.style = n
                    }))
                }, 7395: (e, t) => {
                    "use strict";

                    function a(e, t) {
                        const a = e;
                        for (let e = 0; e < a._childrenVms.length; e++) if ("start-mask" === a._childrenVms[e]._type) {
                            a._childrenVms[e].isShowPage = t;
                            break
                        }
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, t.default = {
                        page_param_handler: async function (e, t) {
                            if (LOG("page_param_handler===================>", t.$page.query), 0 == Number(t.intent) || !t.intent) try {
                                t.$app.$emit("pageParamHandler", {})
                            } catch (e) {
                            }
                            if (0 == Number(t.intent)) {
                                let a = e.getPagesCodeInfo(NaN != Number(t.selectIndex) ? Number(t.selectIndex) : 0);
                                return t.pathUrl = a.pathUrl, t.pageDetail.pageOrigin = a.pageOrigin, void e.changeCommonDataByPageShow(t)
                            }
                            await e.initDeviceInfo(), TACTICS_SDK_UTILS.tactics_sdk_data.isTacticsSdkInit = !1, COMMON_REPORT_UTILS.set_attr("init_status", 0), 2 != t.intent && 3 != t.intent || (e.utm_ad_id = t.$page.query.adid || t.$page.query.aid || t.$page.query.ad_id || t.$page.query.campaign_id || "", e.utm_source = t.$page.query.ua || t.$page.query.site || t.$page.query.adgroup_id || t.$page.query.encrypted_position_id || t.$page.query.unionid || "", e.utm_content = t.$page.query.cid || t.$page.query.creativeid || t.$page.query.content_id || "", e.utm_campaign = t.$page.query.campaignid && "__CAMPAIGN_ID__" !== t.$page.query.campaignid ? `${t.$page.query.campaignid}`.split(",")[0] : "", e.channelId = $utils.getExchangeChannelId(t.channelId), e.linkId = t.linkId, e.linkId || 3 != t.intent || (e.linkId = "tzlmoren"), e.intent = t.intent, e.materialType = t.materialType ? `${t.materialType}` : "", e.uniqueId = t.$page.query.uniqueId, e.hapKey = t.$page.query.hapKey, e.utm_term = t.$page.query.clickid, e.imei = t.$page.query.imei || "", e.utm_medium = t.$page.query.rtype || "", e.sourceId = t.$page.query.bookId || ""), 2 == t.intent ? (e.pageCodeInfo.pathUrl = "hap链接", e.pageCodeInfo.pageOrigin = "CHANNEL_ROOT") : 3 == t.intent ? (e.pageCodeInfo.pathUrl = "通知栏", e.pageCodeInfo.pageOrigin = "NOTICE_ROOT") : (e.pageCodeInfo.pathUrl = "桌面", e.pageCodeInfo.pageOrigin = "DESK_ROOT", await $utils.getStorage("addDesktopUserInfo").then((t => {
                                if (t) {
                                    let a = JSON.parse(t);
                                    e.utm_ad_id = a.addTime || "", e.utm_campaign = a.channelId || "", e.utm_content = a.creativeid || "", e.utm_medium = a.linkId || ""
                                }
                            })));
                            let a = e.getPagesCodeInfo(NaN != Number(t.selectIndex) ? Number(t.selectIndex) : 0);
                            t.pathUrl = a.pathUrl, t.pageDetail.pageOrigin = a.pageOrigin, AD_SDK_UTILS.updataAdConfigData({uploadFristPopClick: 0}), LOG("VIEW", "appInfo.getPagesCodeInfo()2", t.pageDetail, a), e.changeCommonDataByPageShow(t), COMMON_REPORT_UTILS.report_initSdk(e);
                            let n = await $utils.getStorage("tacticsData"),
                                i = n ? String(JSON.parse(n).number_of_visits_today + 1) : "1";
                            COMMON_REPORT_UTILS.hap_report($utils.getSourceType(), $utils.getExtraScene(), e.utm_term, e.imei, e.oaid, i), 1 == t.$page.query.notification_status && 3 == t.intent && COMMON_REPORT_UTILS.notification_click_report(t.$page.query.notification_title || "", t.$page.query.notification_text || "", t.$page.query.notification_url || "", t.$page.query.oChannelId || "", t.$page.query.oLinkId || "")
                        }, page_user_data_init: function (e, t) {
                            return new Promise((async n => {
                                await TACTICS_SDK_UTILS.tacticsSdkInit(e), function (e, t) {
                                    try {
                                        const n = TACTICS_SDK.getGlobalData("configInfo").config;
                                        let i = n.delay_time;
                                        if (i = i && Number(i.val) || 0, e.isOpenScreenAd && e.isOpenScreenAd() && i > 0) setTimeout((() => {
                                            const e = !t.kdxfConfig || t.kdxfConfig && !t.kdxfConfig.isShow;
                                            t.checkPageEnterPop && t.nativeBoostGroupController && !t.nativeBoostGroupController.popShow && e && "SCREEN_TOUCH" == t.nativeBoostGroupController.actionCode && t.checkPageEnterPop(), a(t, !0)
                                        }), i); else {
                                            let e = 0;
                                            "READ_READINFO" === t.pageDetail.pageCode && Number(n.is_open_homeScreen_advert.val) && (e = n.zs_delay_time, e = e && Number(e.val) || 0), e < 200 && (e = 200), setTimeout((() => {
                                                a(t, !0), t.check2GetBannerAdConfig && t.check2GetBannerAdConfig()
                                            }), e)
                                        }
                                    } catch (e) {
                                        LOG("delayTime", e), a(t, !0)
                                    }
                                }(e, t), function (e) {
                                    const t = TACTICS_SDK.getGlobalData("configInfo").config.is_intercept_backpress,
                                        a = t && t.val || 1, n = 1 !== Number(a);
                                    !e.isAllowBackPress && n && (e.isAllowBackPress = n)
                                }(t), e.initAdInfo(t.pageDetail.pageName, t.$app, !0, (e => {
                                    n(e)
                                }))
                            }))
                        }, sMaskChange: a
                    }
                }, 5187: (e, t) => {
                    "use strict";

                    function a(e, t) {
                        var a = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), a.push.apply(a, n)
                        }
                        return a
                    }

                    function n(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? a(Object(n), !0).forEach((function (t) {
                                var a, i, o, r;
                                a = e, i = t, o = n[t], (i = "symbol" == typeof (r = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var a = e[Symbol.toPrimitive];
                                    if (void 0 !== a) {
                                        var n = a.call(e, "string");
                                        if ("object" != typeof n) return n;
                                        throw new TypeError("@@toPrimitive must return a primitive value.")
                                    }
                                    return String(e)
                                }(i)) ? r : String(r)) in a ? Object.defineProperty(a, i, {
                                    value: o,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : a[i] = o
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.Countdown = void 0;

                    class i {
                        static isEmpty(e) {
                            let t;
                            return "object" == typeof e && null !== e && (t = Object.keys(e).length > 0), !t
                        }

                        static fixTime(e) {
                            return e ? 13 === String(e).length ? parseInt(String(Number(e) / 1e3)) : Number(e) : ""
                        }

                        translateTime(e) {
                            let t = i.fixTime(e);
                            const a = Math.floor(t / 3600 / 24),
                                n = this.useHeaven ? Math.floor(t / 3600 % 24) : Math.floor(t / 3600),
                                o = Math.floor(t / 60 % 60), r = Math.floor(t % 60), s = this.msArr[this.msIndex];
                            return this.msIndex++, {
                                heaven: a,
                                hour: n < 10 ? "0" + n : String(n),
                                minute: o < 10 ? "0" + o : String(o),
                                second: r < 10 ? "0" + r : String(r),
                                ms: s
                            }
                        }

                        constructor(e = {}) {
                            const {useMs: t = 1, useHeaven: a, useNowTime: n} = e;
                            this.useMs = t, this.useHeaven = a, this.useNowTime = n;
                            let i = t;
                            for (this.msArr = []; i >= 0;) this.msArr.push(String(i - 1)), i--;
                            this.msIndex = 0, this.init()
                        }

                        start(e, t) {
                            this.init();
                            const a = i.isEmpty(e), n = i.isEmpty(this.config);
                            if (a) return this.error = "params error!", this;
                            e = n ? e : this.config, n && (this.config = e), this.cb = t;
                            const o = 1e3 / this.useMs;
                            Object.assign(e, {
                                startTime: i.fixTime(e.startTime),
                                endTime: i.fixTime(e.endTime),
                                nowTime: i.fixTime(e.nowTime)
                            });
                            const {endTime: r} = e;
                            return clearInterval(this.timer), this.timer = setInterval((() => {
                                const a = e.nowTime || parseInt(String((new Date).getTime() / 1e3));
                                this.msIndex === this.useMs && (this.msIndex = 0);
                                const n = this.translateTime(r - a);
                                a - 1 >= r ? (clearInterval(this.timer), t && t(null), this.callback && this.callback(null)) : (t && t(n), this.callback && this.callback(n)), this.useNowTime && (1 === this.useMs || this.msIndex === this.msArr.length - 1) && (this.config.nowTime += 1)
                            }), o), this
                        }

                        stop() {
                            return clearInterval(this.timer), this.init(), this
                        }

                        restart(e, t) {
                            this.stop();
                            const a = t || this.cb;
                            return this.start(n(n({}, this.config), e), a), this
                        }

                        init() {
                            this.config = {}, this.cb = null, this.error = ""
                        }

                        then(e) {
                            return this.callback = e, this.useNowTime && (this.config.nowTime += 1), this.start(this.config), this
                        }

                        finally(e) {
                            return this.callback = e, this.restart(this.config), this
                        }

                        catch(e) {
                            e(this.error)
                        }
                    }

                    t.Countdown = i
                }, 5987: (e, t) => {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {value: !0}), t.toDate = t.phoneVerify = t.maxPeak = t.getUserId = t.getTimeText = t.getRandomNumber = t.getPlatform = t.getOAID = t.getInfo = t.getId = t.getAstro = t.generateUUID = t.debounce2 = t.debounce = t.astroList = void 0;
                    var a, n = (a = $app_require$("@app-module/system.device")) && a.__esModule ? a : {default: a};
                    t.debounce = (e, t, a) => {
                        let n;
                        return function () {
                            let i = this, o = arguments;
                            n && clearTimeout(n), n = setTimeout((() => {
                                e.apply(i, o)
                            }), t), a && !n && e.apply(i, o)
                        }
                    }, t.debounce2 = (e, t, a) => {
                        let n;
                        return function () {
                            let i = this, o = arguments;
                            if (n && clearTimeout(n), a) {
                                var r = !n;
                                n = setTimeout((() => {
                                    n = null
                                }), t), r && e.apply(i, o)
                            } else n = setTimeout((function () {
                                e.apply(i, o)
                            }), t)
                        }
                    };
                    let i = {getInfo: null, getPlatform: null};
                    t.getInfo = () => new Promise(((e, t) => {
                        i.getInfo ? e(i.getInfo) : n.default.getInfo({
                            success: t => {
                                e(t)
                            }, fail: e => {
                                t(e)
                            }
                        })
                    })), t.getPlatform = () => (i.getPlatform || (i.getPlatform = n.default.platform), i.getPlatform), t.toDate = (e, t) => {
                        e.toString().length < 13 && (e = 1e3 * parseInt(e));
                        let a = new Date(e), n = a.getFullYear(), i = a.getMonth() + 1, o = a.getDate(),
                            r = a.getHours(), s = a.getMinutes(), p = a.getSeconds(), l = a.getDay(), c = function (e) {
                                return (e < 10 ? "0" : "") + e
                            };
                        return {
                            nowTime: t ? function (e) {
                                return e.replace(/yyyy|MM|dd|hh|mm|ss/g, (function (e) {
                                    let t = "";
                                    switch (e) {
                                        case"yyyy":
                                            t = c(n);
                                            break;
                                        case"MM":
                                            t = c(i);
                                            break;
                                        case"dd":
                                            t = c(o);
                                            break;
                                        case"hh":
                                            t = c(r);
                                            break;
                                        case"mm":
                                            t = c(s);
                                            break;
                                        case"ss":
                                            t = c(p)
                                    }
                                    return t
                                }))
                            }(t) : "",
                            nowYear: n,
                            nowMonth: i,
                            nowDate: o,
                            nowHour: r,
                            nowMinutes: s,
                            nowSeconds: p,
                            nowDayOfWeek: l
                        }
                    }, t.getId = (e = ["device"]) => new Promise(((t, a) => {
                        i.getId ? t(i.getId) : n.default.getId({
                            type: e, success: e => {
                                i.getId = e, t(e)
                            }, fail: e => {
                                a(e)
                            }
                        })
                    })), t.getUserId = () => new Promise(((e, t) => {
                        i.getUserId ? e(i.getUserId) : n.default.getUserId({
                            success: t => {
                                i.getUserId = t, e(t)
                            }, fail: e => {
                                t(e)
                            }
                        })
                    })), t.getOAID = () => new Promise(((e, t) => {
                        i.getOAID ? e(i.getOAID) : n.default.getOAID({
                            success: t => {
                                i.getOAID = t, e(t)
                            }, fail: e => {
                                t(e)
                            }
                        })
                    })), t.phoneVerify = e => !!/^((13\d)|(14[5,7,9])|(15[0-3,5-9])|(166)|(17[0,1,3,5,7,8])|(18[0-9])|(19[8,9]))\d{8}/.test(e), t.maxPeak = e => e.reduce(((e, t) => e.money > t.money ? e : t)), t.generateUUID = () => {
                        let e = (new Date).getTime();
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (t) {
                            let a = (e + 16 * Math.random()) % 16 | 0;
                            return e = Math.floor(e / 16), ("x" === t ? a : 3 & a | 8).toString(16)
                        }))
                    }, t.getTimeText = () => {
                        const e = new Date;
                        return `${e.getFullYear()}-${e.getMonth() + 1}-${e.getDate()}`
                    }, t.astroList = () => [{
                        name: "摩羯座",
                        icon: "/assets/star-sign/capricorn-mj.png",
                        time: "12月22日～1月19日",
                        desc: "摩羯座实际、谨慎且有远见，是脚踏实地的工作者和计划者。他们追求成功和地位，对自己要求严格，有时会被认为过于保守或严肃，但他们的决心和坚韧让他们能在事业上取得显著成就。"
                    }, {
                        name: "水瓶座",
                        icon: "/assets/star-sign/aquarius-sp.png",
                        time: "1月20日～2月18日",
                        desc: "水瓶座的人通常被认为是理性的思想者，具有超前思维和独立精神，厌恶受到束缚。他们喜欢追求自由和革新，对社会公正和个人成长有着深厚的兴趣，同时也倾向于展现出博爱的一面。"
                    }, {
                        name: "双鱼座",
                        icon: "/assets/star-sign/pisces-sy.png",
                        time: "2月19日～3月20日",
                        desc: "双鱼座以其多情、富有想象力和创造力而著称。他们情感丰富且易受情绪影响，常常生活在自己的梦幻世界中。尽管内心柔弱，但对待感情非常投入，有时过于付出可能会让自己受伤。"
                    }, {
                        name: "白羊座",
                        icon: "/assets/star-sign/aries-by.png",
                        time: "3月21日～4月19日",
                        desc: "白羊座是充满活力与热情的星座，他们的行动力强、直率坦诚，总是勇往直前。虽然有时候显得冲动和自我中心，但他们内心纯真，热爱冒险，是天生的领导者。"
                    }, {
                        name: "金牛座",
                        icon: "/assets/star-sign/taurus-jn.png",
                        time: "4月20日～5月20日",
                        desc: "金牛座踏实稳重，对物质世界的享受有深刻理解，崇尚稳定与安全感。他们做事耐心、坚定，并拥有出色的耐力，但同时可能较为固执，不易改变已有的观点或习惯。"
                    }, {
                        name: "双子座",
                        icon: "/assets/star-sign/gemini-sz.png",
                        time: "5月21日～6月21日",
                        desc: "双子座灵活机智、善于沟通交流，对新事物充满好奇心。他们是适应力极强的思想者，但也可能表现出善变和不安分的性格特点，难以长时间专注于单一事务。"
                    }, {
                        name: "巨蟹座",
                        icon: "/assets/star-sign/cancer-jx.png",
                        time: "6月22日～7月22日",
                        desc: "巨蟹座的人温柔体贴、富有同情心和保护欲，家庭观念强烈。他们的情绪化可能导致行为上的波动，但其忠诚和关怀他人的特质为他们在人际关系中赢得信任。"
                    }, {
                        name: "狮子座",
                        icon: "/assets/star-sign/leo-sz.png",
                        time: "7月23日～8月22日",
                        desc: "狮子座自信、慷慨、热情洋溢，天生自带领导风范。他们渴望被关注和赞美，有时会表现出自恋倾向，但他们的忠诚与勇气使他们在团体中成为焦点人物。"
                    }, {
                        name: "处女座",
                        icon: "/assets/star-sign/virgo-cn.png",
                        time: "8月23日～9月22日",
                        desc: "处女座注重细节、追求完美，是个典型的实用主义者。他们勤奋努力，擅长分析问题，但过分挑剔可能导致压力过大，不过他们的服务精神和组织能力令人钦佩。"
                    }, {
                        name: "天秤座",
                        icon: "/assets/star-sign/libra-tp.png",
                        time: "9月23日～10月22日",
                        desc: "天秤座优雅和谐，主张公平正义，擅长在人际交往中寻找平衡点。他们是和平的使者，但对于决策时往往犹豫不决，因为他们希望兼顾各方利益。"
                    }, {
                        name: "天蝎座",
                        icon: "/assets/star-sign/scorpio-tx.png",
                        time: "10月23日～11月21日",
                        desc: "天蝎座深沉、神秘，意志坚定且执着。他们拥有强烈的洞察力和直觉，对于目标矢志不渝，但也会因为太过猜忌和占有欲过强而招致误解。"
                    }, {
                        name: "射手座",
                        icon: "/assets/star-sign/sagittarius-ss.png",
                        time: "11月22日～12月21日",
                        desc: "射手座乐观开朗、热爱自由，热衷于探索真理和新知。他们向往远方，不受拘束，但有时容易给人留下承诺太多却疏于兑现的印象。"
                    }], t.getAstro = () => {
                        const e = new Date, t = e.getMonth() + 1;
                        return t - (e.getDate() < "102223444433".charAt(t - 1) - -19)
                    }, t.getRandomNumber = (e, t) => Math.floor(Math.random() * (t - e) + e)
                }
            }, t = {};

            function a(n) {
                var i = t[n];
                if (void 0 !== i) return i.exports;
                var o = t[n] = {exports: {}};
                return e[n](o, o.exports, a), o.exports
            }

            (() => {
                a(3611), a(7549);
                var e = a(4052), t = a(3003);
                $app_define$("@app-component/index", [], (function (n, i, o) {
                    t(o, i, n), i.__esModule && i.default && (o.exports = i.default), o.exports.template = a(2342), o.exports.style = e
                })), $app_bootstrap$("@app-component/index", {packagerVersion: "1.9.14"})
            })()
        })()
    };
    if ("undefined" == typeof window) return e();
    window.createPageHandler = e
}();