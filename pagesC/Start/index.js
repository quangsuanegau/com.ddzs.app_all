!function () {
    var e = function () {
        return (() => {
            var e = {
                6756: (e, t, a) => {
                    e.exports = function (e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, o(n("@app-module/system.router"));
                        var i = o(a(7395));

                        function o(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        t.default = {
                            public: {
                                agree: !1,
                                pageDetail: {pageName: "启动页", pageUrl: "桌面", pageCode: "DESK_ROOT", pageOrigin: ""}
                            }, async onInit() {
                                LOG("onInit========>StartPage"), await this.initData(), await this.$app.$def.checkUserInstallShortCut()
                            }, onShow() {
                                REPORT_SDK && REPORT_SDK.page_show()
                            }, onHide() {
                                REPORT_SDK && REPORT_SDK.page_hide()
                            }, async initUser() {
                                console.log(this.$app.$def, "$app");
                                const e = {
                                    androidId: this.$app.$def.android,
                                    brand: this.$app.$def.brand,
                                    oaid: this.$app.$def.oaid,
                                    versionCode: this.$app.$def.versionCode,
                                    versionName: this.$app.$def.versionName
                                };
                                $apis.example.login(e).then((e => {
                                    if (e && 200 === e.code) {
                                        const {online_token: t, loginStatus: a} = e.data;
                                        this.isLogin = 1 === a, $utils.setStorage("token", t), $utils.setStorage("isLogin", e.data.loginStatus)
                                    }
                                }))
                            }, async initData() {
                                await i.default.page_param_handler(this.$app.$def, this), await i.default.page_user_data_init(this.$app.$def, this), $utils.getStorage("privacyAgree").then((e => {
                                    this.agree = !e || 1 != e, this.agree || "1" === e && $utils.routeReplacetheUrl("/pagesA/Main")
                                }))
                            }
                        };
                        const r = t.default || e.exports, s = ["public", "protected", "private"];
                        if (r.data && s.some((function (e) {
                            return r[e]
                        }))) throw new Error('页面VM对象中的属性data不可与"' + s.join(",") + '"同时存在，请使用private替换data名称');
                        r.data || (r.data = {}, r._descriptor = {}, s.forEach((function (e) {
                            const t = typeof r[e];
                            if ("object" === t) {
                                r.data = Object.assign(r.data, r[e]);
                                for (const t in r[e]) r._descriptor[t] = {access: e}
                            } else "function" === t && console.warn("页面VM对象中的属性" + e + "的值不能是函数，请使用对象")
                        })))
                    }
                }, 7937: (e, t, a) => {
                    e.exports = function (e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
                        var i, o = (i = n("@app-module/system.router")) && i.__esModule ? i : {default: i}, r = a(5987);
                        t.default = {
                            name: "privacy", onInit() {
                            }, handle: (0, r.debounce)((function () {
                                $utils.setStorage("privacyAgree", 1), o.default.push({uri: "/pagesA/Main"})
                            }), 500), notHandle() {
                                this.$app.exit()
                            }, goPrivacy(e) {
                                1 === e ? (console.log("数据这里加载"), o.default.push({
                                    uri: "/pagesB/Privacy",
                                    params: {type: 1}
                                })) : o.default.push({uri: "/pagesB/Privacy", params: {type: 2}})
                            }
                        }
                    }
                }, 6898: e => {
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
                        ".prompt-pop-modal .content": {
                            flexDirection: "column",
                            backgroundColor: "#ffffff",
                            justifyContent: "center",
                            width: "540px",
                            borderRadius: "20px",
                            paddingTop: "50px",
                            paddingRight: "45px",
                            paddingBottom: "34px",
                            paddingLeft: "45px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop-modal"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "content"}]
                            }
                        },
                        ".prompt-pop-modal .content .prompt-title": {
                            fontSize: "34px",
                            fontFamily: "PingFang SC, PingFang SC-Bold",
                            fontWeight: "700",
                            textAlign: "center",
                            color: "#529cfd",
                            lineHeight: "42px",
                            alignItems: "center",
                            marginTop: "0px",
                            marginRight: "auto",
                            marginBottom: "0px",
                            marginLeft: "auto",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop-modal"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "content"}, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-title"
                                }]
                            }
                        },
                        ".prompt-pop-modal .content .prompt-cxt": {
                            fontSize: "26px",
                            fontFamily: "PingFang SC, PingFang SC-Medium",
                            fontWeight: "500",
                            textAlign: "left",
                            color: "#707070",
                            lineHeight: "42px",
                            alignItems: "center",
                            flexDirection: "column",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop-modal"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "content"}, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-cxt"
                                }]
                            }
                        },
                        ".prompt-pop-modal .content .argeement": {
                            color: "#2aa8ff",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop-modal"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "content"}, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "argeement"
                                }]
                            }
                        },
                        ".prompt-pop-modal .content .prompt-btn": {
                            width: "430px",
                            height: "86px",
                            backgroundImage: "https://devims.readnos.com/image%2F2024-08-13%2F1723532069343_%E6%8C%89%E9%92%AE%201.png",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%",
                            marginTop: "42px",
                            marginRight: "auto",
                            marginBottom: "0px",
                            marginLeft: "auto",
                            textAlign: "center",
                            justifyContent: "center",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop-modal"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "content"}, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-btn"
                                }]
                            }
                        },
                        ".prompt-pop-modal .content .prompt-btn text": {
                            fontSize: "32px",
                            fontFamily: "PingFang SC, PingFang SC-Regular",
                            fontWeight: "400",
                            color: "#ffffff",
                            lineHeight: "32px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop-modal"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "content"}, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-btn"
                                }, {t: "d"}, {t: "t", n: "text"}]
                            }
                        },
                        ".prompt-pop-modal .content .prompt-not": {
                            fontSize: "34px",
                            fontFamily: "PingFang SC, PingFang SC-Regular",
                            fontWeight: "400",
                            textAlign: "center",
                            color: "#9d9d9d",
                            lineHeight: "32px",
                            letterSpacing: "0.64px",
                            marginTop: "30px",
                            marginRight: "auto",
                            marginBottom: "30px",
                            marginLeft: "auto",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-pop-modal"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "content"}, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "prompt-not"
                                }]
                            }
                        }
                    }
                }, 2369: e => {
                    e.exports = {
                        ".start-main": {
                            backgroundImage: "/assets/common/start-bg.png",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        ".start-main .star-1": {
                            width: "195px",
                            height: "586px",
                            marginTop: "50px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "start-main"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "star-1"}]
                            }
                        },
                        ".start-main .star-2": {
                            width: "162px",
                            height: "45px",
                            position: "absolute",
                            bottom: "110px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "start-main"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "star-2"}]
                            }
                        }
                    }
                }, 7578: e => {
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
                                    type: "text",
                                    attr: {value: "用户隐私政策概要"},
                                    classList: ["prompt-title"]
                                }, {
                                    type: "text",
                                    attr: {value: " 感谢您信用使用多点知识"},
                                    classList: ["prompt-cxt"],
                                    style: {marginTop: "45px"}
                                }, {
                                    type: "text",
                                    attr: {},
                                    classList: ["prompt-cxt"],
                                    children: [{
                                        type: "span",
                                        attr: {value: "我们非常重视您的个人信息和隐私保护为了更好的保障您的个人权益，在您使用我们的产品前，请认真的阅读"}
                                    }, {
                                        type: "a",
                                        attr: {value: "《用户协议》"},
                                        classList: ["argeement", "text"],
                                        events: {
                                            click: function (e) {
                                                return this.goPrivacy(1, e)
                                            }
                                        }
                                    }, {type: "span", attr: {value: "及"}, classList: ["text"]}, {
                                        type: "a",
                                        attr: {value: "《隐私政策》"},
                                        classList: ["argeement", "text"],
                                        events: {
                                            click: function (e) {
                                                return this.goPrivacy(2, e)
                                            }
                                        }
                                    }, {
                                        type: "span",
                                        attr: {value: "，如果您已同意以上协议内容，请点击“同意”，开始使用我们的产品和服务。"}
                                    }]
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["prompt-btn"],
                                    children: [{type: "text", attr: {value: "同意授权"}, events: {click: "handle"}}]
                                }, {
                                    type: "text",
                                    attr: {value: "拒绝"},
                                    classList: ["prompt-not"],
                                    events: {click: "notHandle"}
                                }]
                            }]
                        }]
                    }
                }, 5838: e => {
                    e.exports = {
                        type: "div",
                        attr: {},
                        classList: ["start-main"],
                        children: [{
                            type: "privacy", attr: {}, shown: function () {
                                return this.agree
                            }
                        }]
                    }
                }, 8643: (e, t, a) => {
                    var n = a(6898), i = a(7937);
                    $app_define$("@app-component/privacy", [], (function (e, t, o) {
                        i(o, t, e), t.__esModule && t.default && (o.exports = t.default), o.exports.template = a(7578), o.exports.style = n
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
                a(8643);
                var e = a(2369), t = a(6756);
                $app_define$("@app-component/index", [], (function (n, i, o) {
                    t(o, i, n), i.__esModule && i.default && (o.exports = i.default), o.exports.template = a(5838), o.exports.style = e
                })), $app_bootstrap$("@app-component/index", {packagerVersion: "1.9.14"})
            })()
        })()
    };
    if ("undefined" == typeof window) return e();
    window.createPageHandler = e
}();