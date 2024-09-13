/*! For license information please see app.js.LICENSE.txt */
(function () {
    var $app_define_wrap$ = $app_define_wrap$ || function () {
    }, manifestJson = {
        package: "com.ddzs.app",
        name: "多点知识",
        versionName: "1.0.10",
        versionCode: 100010,
        minPlatformVersion: 1080,
        icon: "/assets/icon/logo.png",
        features: [{name: "system.animate"}, {name: "system.request"}, {name: "system.prompt"}, {name: "system.router"}, {name: "system.shortcut"}, {name: "system.fetch"}, {name: "system.network"}, {name: "service.account"}, {name: "system.storage"}, {name: "system.device"}, {name: "system.brightness"}, {name: "system.app"}, {name: "service.push"}, {name: "system.notification"}, {name: "system.wifi"}, {name: "system.file"}, {name: "service.alipay"}, {name: "service.ad"}, {name: "system.calendar"}, {name: "system.package"}, {name: "system.webview"}, {
            name: "service.wxpay", params: {
                package: "com.shiyueread.home",
                sign: "MIIGQDCCBCigAwIBAgIJAJa410xto5buMA0GCSqGSIb3DQEBCwUAMIG0MQswCQYDVQQGEwJaSDEQMA4GA1UECAwHSGFpIE5hbjEQMA4GA1UEBwwHSGFpIGtvdTEyMDAGA1UECgwpSGFpbmFuIGd1YW5vdSBOZXR3b3JrIFRlY2hub2xvZ3kgQ28uLCBMdGQxEzARBgNVBAsMCk9wZXJhdGlvbnMxFDASBgNVBAMMC3N5cmVhZHMuY29tMSIwIAYJKoZIhvcNAQkBFhNkZWZhdWx0QGRlZmF1bHQuY29tMB4XDTIyMDMxMDA2NTE1NFoXDTMyMDMwNzA2NTE1NFowgbQxCzAJBgNVBAYTAlpIMRAwDgYDVQQIDAdIYWkgTmFuMRAwDgYDVQQHDAdIYWkga291MTIwMAYDVQQKDClIYWluYW4gZ3Vhbm91IE5ldHdvcmsgVGVjaG5vbG9neSBDby4sIEx0ZDETMBEGA1UECwwKT3BlcmF0aW9uczEUMBIGA1UEAwwLc3lyZWFkcy5jb20xIjAgBgkqhkiG9w0BCQEWE2RlZmF1bHRAZGVmYXVsdC5jb20wggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQC01asXcjKm11x0Ai72IdI+4sCVbDGEHbPcIHJDhtw383fuFZnTdEoQnK1+3OUYmHV9YxT9OBwnfuL/rJHOOsyWjZoe9WUkg4zxQIG96Nr1ioAGqjBKfrDeRlEKkxz82jmijOOYRlekLh2JzpLN65oE70lv8pcPRuzXld741igUvd3blG6Ys6vxHM9PyuQW972osgcxH50bOmOR77G7GgdOFYLsEruL4P3m7/9FuTLF3HqHK5NAF3fOs3pp6sPrmFIGnpdsUSjw++O+TT6lsvC2OHhbpST6pHTsMHdrPsavrKkNe80RmmDI1rlFGfvdWkq8gXHEQSO0ueTDBLfe1UabcCAIvoic8rXC31tAKn72LOSbHzl2726+Ogi3hFAY/d1GAQTL5BNRuaAnL5TXUr9wgTD5UJukiroU9fqnlAlW7g2Yg3XO3eC7mO/nfvzyGyTq5h58CzZ+LOm/IFrDNu+fGa0cskgsQxqVJr+/57b9choaDPEsLi2rfQaJFABEqYZMU7CKzhox5DYNRdIK2mh/AenhcmGuBspx9E225a8XU7c6nZLGDn90IldA/gh3QV85qpfZUy49LKD5cP9W5arePlu/tR79W1H2rsjCzylI9Su6hNIMwNQacHuZhc/jbwbKIiPcTX66NlRIxWxEqIjkYbkN/wTJTnOKZM++lXNNuwIDAQABo1MwUTAdBgNVHQ4EFgQUtW8fbqCF3XYRHPjVmKJar0yKNTUwHwYDVR0jBBgwFoAUtW8fbqCF3XYRHPjVmKJar0yKNTUwDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAgEAUc2YZGT86jfrdK4G9Gh55xwl7hUYjEnYG04CB5FR9UXNdOmboySMm2ysMx955kALv1I2gSDAPMsctMGMWEhQEO/nDe7GzQ64OyEJeHvVwRPutXylpMbpbKdr0s4gf6qH45KKWGIHSRsF5wmP2TCACKqy470g//6W53hv09aNLgLYPZ0PiyZK22BW/eWh35foHt4pHulm85nnxJoDNSL5gODoWH+quftMywS4X1Nd7DH/uJGOTFgm1rThKcgo1CqFxtTAVemso9guDTaY7uD70MMNAiyBoSRgwBDq5oKh/Wovsx8LZAUGzjC+75AKklo/75w/7RAxhFSmVYRhJmfGWXUQTycyoOkDZYf+WZiKP9ENVQlLePwJm66Nukehs+iyTKbzyzYsLct7A2isQv5xEc7+PXs1xyOvoTFFSfOX4L7PWIDOOSi38erdNxoiEouttbYH8/mU8676jleMFOdDov7/KoGO6wz+OA2Zz7OOLsMLJu8mFd0PNFH68IJNdWLvOO6iMYZk5rnpMAOuCTM6gIyg0Q9pzzxjTfBxs7ojADrNMkioCV0/cAliiaWALg6jerSO2tGBtC5YC/yue/IjyKk678bLVMO3XT5LZ0GZY9R7/GKcSi8lK14aQdDlxlb69PXJPxMp9AmwavnVBUznhbLRzzcjjmvQcZKcUSa19yI=",
                url: "http://www.syreads.com"
            }
        }, {
            name: "service.share", params: {
                appSign: "MIIGQDCCBCigAwIBAgIJAJa410xto5buMA0GCSqGSIb3DQEBCwUAMIG0MQswCQYDVQQGEwJaSDEQMA4GA1UECAwHSGFpIE5hbjEQMA4GA1UEBwwHSGFpIGtvdTEyMDAGA1UECgwpSGFpbmFuIGd1YW5vdSBOZXR3b3JrIFRlY2hub2xvZ3kgQ28uLCBMdGQxEzARBgNVBAsMCk9wZXJhdGlvbnMxFDASBgNVBAMMC3N5cmVhZHMuY29tMSIwIAYJKoZIhvcNAQkBFhNkZWZhdWx0QGRlZmF1bHQuY29tMB4XDTIyMDMxMDA2NTE1NFoXDTMyMDMwNzA2NTE1NFowgbQxCzAJBgNVBAYTAlpIMRAwDgYDVQQIDAdIYWkgTmFuMRAwDgYDVQQHDAdIYWkga291MTIwMAYDVQQKDClIYWluYW4gZ3Vhbm91IE5ldHdvcmsgVGVjaG5vbG9neSBDby4sIEx0ZDETMBEGA1UECwwKT3BlcmF0aW9uczEUMBIGA1UEAwwLc3lyZWFkcy5jb20xIjAgBgkqhkiG9w0BCQEWE2RlZmF1bHRAZGVmYXVsdC5jb20wggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQC01asXcjKm11x0Ai72IdI+4sCVbDGEHbPcIHJDhtw383fuFZnTdEoQnK1+3OUYmHV9YxT9OBwnfuL/rJHOOsyWjZoe9WUkg4zxQIG96Nr1ioAGqjBKfrDeRlEKkxz82jmijOOYRlekLh2JzpLN65oE70lv8pcPRuzXld741igUvd3blG6Ys6vxHM9PyuQW972osgcxH50bOmOR77G7GgdOFYLsEruL4P3m7/9FuTLF3HqHK5NAF3fOs3pp6sPrmFIGnpdsUSjw++O+TT6lsvC2OHhbpST6pHTsMHdrPsavrKkNe80RmmDI1rlFGfvdWkq8gXHEQSO0ueTDBLfe1UabcCAIvoic8rXC31tAKn72LOSbHzl2726+Ogi3hFAY/d1GAQTL5BNRuaAnL5TXUr9wgTD5UJukiroU9fqnlAlW7g2Yg3XO3eC7mO/nfvzyGyTq5h58CzZ+LOm/IFrDNu+fGa0cskgsQxqVJr+/57b9choaDPEsLi2rfQaJFABEqYZMU7CKzhox5DYNRdIK2mh/AenhcmGuBspx9E225a8XU7c6nZLGDn90IldA/gh3QV85qpfZUy49LKD5cP9W5arePlu/tR79W1H2rsjCzylI9Su6hNIMwNQacHuZhc/jbwbKIiPcTX66NlRIxWxEqIjkYbkN/wTJTnOKZM++lXNNuwIDAQABo1MwUTAdBgNVHQ4EFgQUtW8fbqCF3XYRHPjVmKJar0yKNTUwHwYDVR0jBBgwFoAUtW8fbqCF3XYRHPjVmKJar0yKNTUwDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAgEAUc2YZGT86jfrdK4G9Gh55xwl7hUYjEnYG04CB5FR9UXNdOmboySMm2ysMx955kALv1I2gSDAPMsctMGMWEhQEO/nDe7GzQ64OyEJeHvVwRPutXylpMbpbKdr0s4gf6qH45KKWGIHSRsF5wmP2TCACKqy470g//6W53hv09aNLgLYPZ0PiyZK22BW/eWh35foHt4pHulm85nnxJoDNSL5gODoWH+quftMywS4X1Nd7DH/uJGOTFgm1rThKcgo1CqFxtTAVemso9guDTaY7uD70MMNAiyBoSRgwBDq5oKh/Wovsx8LZAUGzjC+75AKklo/75w/7RAxhFSmVYRhJmfGWXUQTycyoOkDZYf+WZiKP9ENVQlLePwJm66Nukehs+iyTKbzyzYsLct7A2isQv5xEc7+PXs1xyOvoTFFSfOX4L7PWIDOOSi38erdNxoiEouttbYH8/mU8676jleMFOdDov7/KoGO6wz+OA2Zz7OOLsMLJu8mFd0PNFH68IJNdWLvOO6iMYZk5rnpMAOuCTM6gIyg0Q9pzzxjTfBxs7ojADrNMkioCV0/cAliiaWALg6jerSO2tGBtC5YC/yue/IjyKk678bLVMO3XT5LZ0GZY9R7/GKcSi8lK14aQdDlxlb69PXJPxMp9AmwavnVBUznhbLRzzcjjmvQcZKcUSa19yI=",
                wxKey: "wxf9cfe9377c2396ee"
            }
        }],
        permissions: [{origin: "*"}],
        "template/official": "demo-template",
        config: {logLevel: "debug"},
        router: {
            entry: "pagesC/Start",
            pages: {
                "pagesA/Main": {component: "index"},
                "pagesA/WelfareNew": {component: "index"},
                "pagesA/MyIncome": {component: "index"},
                "pagesA/CashOut": {component: "index"},
                "pagesA/CashRecord": {component: "index"},
                "pagesB/Login": {component: "index"},
                "pagesB/Activity": {component: "index"},
                "pagesB/FeedBack": {component: "index"},
                "pagesB/Privacy": {component: "index"},
                "pagesB/Customer-Service": {component: "index"},
                "pagesC/Start": {component: "index"},
                "UnionAd/AdPage": {component: "index"},
                "UnionAd/AdLanding": {component: "index"},
                "UnionAd/AdReward": {component: "index"},
                "pagesA/Welfare": {component: "index"},
                "pagesA/AstroDetail": {component: "index"},
                "pagesA/CpDetail": {component: "index"},
                "pagesA/AssessPage": {component: "index"},
                "pagesA/AssessPageNew": {component: "index"},
                "pagesA/Result": {component: "index"},
                "pagesA/ResultNew": {component: "index"},
                "pagesA/BackgroundPage": {component: "index"},
                "pagesA/VideoBackgroundPage": {component: "index"}
            },
            widgets: {}
        },
        subpackages: [{name: "pkgB", resource: "pagesB"}, {name: "pkgA", resource: "pagesA"}],
        display: {
            themeMode: 0,
            menu: !1,
            titleBar: !1,
            statusBarImmersive: !0,
            statusBarBackgroundOpacity: 0,
            statusBarTextStyle: "dark",
            menuBarData: {menuBar: !1},
            pages: {
                "pagesA/Welfare": {
                    fullScreen: !0,
                    fitCutout: "portrait|landscape",
                    statusBarTextStyle: "light",
                    menuBarData: {menuBar: !1}
                },
                "pagesC/Read": {fullScreen: !0, fitCutout: "portrait|landscape", menuBarData: {menuBar: !1}},
                "pagesA/AssessPage": {fullScreen: !0, fitCutout: "portrait|landscape", menuBarData: {menuBar: !1}},
                "pagesA/Main": {menuBarData: {menuBar: !1}},
                "pagesA/WelfareNew": {
                    fullScreen: !0,
                    fitCutout: "portrait|landscape",
                    statusBarTextStyle: "light",
                    menuBarData: {menuBar: !1}
                },
                "pagesB/Lottery": {fullScreen: !0, menuBarData: {menuBar: !1}},
                "UnionAd/AdPage": {
                    fullScreen: !0,
                    titleBar: !1,
                    statusBarImmersive: !0,
                    menu: !1,
                    menuBarData: {menuBar: !1}
                },
                "UnionAd/AdReward": {
                    fullScreen: !0,
                    titleBar: !1,
                    statusBarImmersive: !0,
                    menu: !1,
                    menuBarData: {menuBar: !1}
                },
                "UnionAd/AdLanding": {
                    fullScreen: !0,
                    titleBar: !1,
                    statusBarImmersive: !0,
                    menu: !1,
                    menuBarData: {menuBar: !1}
                },
                "pagesC/Empty": {fullScreen: !0, fitCutout: "portrait|landscape"},
                "pagesA/BackgroundPage": {
                    fullScreen: !0,
                    fitCutout: "portrait|landscape",
                    statusBarTextStyle: "auto",
                    menuBarData: {menuBar: !0}
                },
                "pagesA/VideoBackgroundPage": {
                    fullScreen: !0,
                    fitCutout: "portrait|landscape",
                    statusBarTextStyle: "auto",
                    menuBarData: {menuBar: !0}
                }
            }
        }
    }, createAppHandler = function () {
        return (() => {
            var __webpack_modules__ = {
                8465: (e, t, a) => {
                    var o = {
                        "./active.js": 9010,
                        "./common.js": 2398,
                        "./example.js": 1734,
                        "./index.js": 8377,
                        "./tactics.js": 6270,
                        "./user.js": 1498
                    };

                    function i(e) {
                        var t = n(e);
                        return a(t)
                    }

                    function n(e) {
                        if (!a.o(o, e)) {
                            var t = new Error("Cannot find module '" + e + "'");
                            throw t.code = "MODULE_NOT_FOUND", t
                        }
                        return o[e]
                    }

                    i.keys = function () {
                        return Object.keys(o)
                    }, i.resolve = n, e.exports = i, i.id = 8465
                }, 1497: (e, t, a) => {
                    e.exports = function (e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, a(9802), a(2759), a(617), a(3662), a(2401), a(1588), a(5556), a(2815);
                        var i = m(a(2594)), n = m(a(1218)), r = m(a(1078)), s = m(a(2551)), d = m(a(9990)),
                            p = m(a(2449)), c = m(a(3026)), u = m(o("@app-module/system.app")),
                            l = m(o("@app-module/system.router")), _ = m(a(8484)), f = m(a(2847)), g = m(a(966));

                        function m(e) {
                            return e && e.__esModule ? e : {default: e}
                        }

                        (Object.getPrototypeOf(a.g) || a.g).regeneratorRuntime = a(7701);
                        const h = a(9121).default, y = a(8377).default, A = a.g.__proto__ || a.g;
                        A.$utils = h, A.$apis = y, A.TOOLS_UTILS = r.default, A.DEVICE_UTILS = s.default, A.AD_UTILS = p.default, A.POP_TOOLS = d.default, A.LOG = n.default, A.EVENT_BUS = new c.default, A.ZHX_UUP_UTILS = g.default, t.default = {
                            versionCode: "",
                            versionName: "",
                            brand: "",
                            oaid: "",
                            model: "",
                            android: "",
                            auditOnline: 0,
                            intent: 1,
                            deviceInfo: null,
                            adInitFailconut: 0,
                            tacticsName: "",
                            pageCodeInfo: {pathUrl: "", pageOrigin: "", pageCode: "DESK_ROOT", pathCurUrl: "桌面"},
                            hapKey: "",
                            channelId: "desktop",
                            linkId: "x888",
                            materialType: "",
                            utm_ad_id: "",
                            utm_campaign: "",
                            utm_content: "",
                            utm_source: "",
                            boxConfig: null,
                            dataCache: null,
                            uniqueId: "",
                            imei: "",
                            utm_term: "",
                            utm_medium: "",
                            sourceId: "",
                            sourcePkg: "",
                            isAppHide: !1,
                            bqt_ad_id: "",
                            bqt_ad_position: "",
                            addDeskTopDays: 0,
                            sex: 1,
                            regId: "",
                            tabListType: [0, 0, 0, 0, 0],
                            loginStatus: 0,
                            coupon: "",
                            isVip: !1,
                            screenHeight: 0,
                            isTacticsSdkInit: !1,
                            readIndoTakeVideTime: 0,
                            addDeskTopTimes: 0,
                            regId: null,
                            isTencentBackButtonVisible: !1,
                            tencentBackName: "",
                            tencentBackUrl: "",
                            tencentBackPkg: "",
                            adDefaultImg1: "https://imgs.syreads.com/image/2022-06-29/adDefaultImg1.png",
                            adDefaultImg2: "https://imgs.syreads.com/image/2022-06-29/adDefaultImg2.png",
                            adDefaultImg3: "https://imgs.syreads.com/image/2022-06-29/adDefaultImg3.png",
                            customADMaterialData: "",
                            customADMaterialIndex: 0,
                            readPageStartTime: Date.now(),
                            readPageStartTime2: Date.now(),
                            lastReadStatus: 0,
                            addDeskTopStatus: 0,
                            appIshow: !1,
                            isScreenShow: !0,
                            isSecondScreenShow: !1,
                            isFirstAddShelf: 0,
                            routerParams: {},
                            wakeUpTimer: null,
                            wakeUpCount: 0,
                            reportWakeUp: !1,
                            timeoutPopTimer: null,
                            isWakeUp: !0,
                            wakeUpSwitch: !1,
                            isVideoTrigger: !1,
                            oppoTempParams: [],
                            getScreenStatus() {
                                return this.isScreenShow
                            },
                            async onCreate() {
                                this.dataCache = {}, APP_STATISTICS.app_sta_init(this), p.default.ad_utils_init(), this.pubsubModelApp = createOrRetrieveInst("app"), await this.initDeviceInfo(), await this.getInfoUser()
                            },
                            onShow() {
                                if (this.getAddDesktopStatus(!0), !this.$def.isAppHide) return;
                                this.$def.isWakeUp = !0, (0, n.default)("app-------------------\x3eshow");
                                let e = "";
                                this.$def.reportWakeUp && (e = "自唤醒", this.$def.reportWakeUp = !1), COMMON_REPORT_UTILS.app_state_report(this.$def.pageCodeInfo.pathCurUrl, "onShow", e), f.default.wakeUpHandle("测评页", this.$def, 1), EVENT_BUS.emit("appShow")
                            },
                            onHide() {
                                (0, n.default)("app-------------------\x3ehide"), this.showNotification(), this.getAddDesktopStatus(!1), this.$def.isAppHide = !0, COMMON_REPORT_UTILS.app_state_report(this.$def.pageCodeInfo.pathCurUrl, "onHide"), f.default.wakeUpHandle("测评页", this.$def, 0), EVENT_BUS.emit("xiaomiAtob")
                            },
                            onDestroy() {
                                (0, n.default)("app-------------------\x3edsetory")
                            },
                            onError(e) {
                                try {
                                    APP_STATISTICS.on_err(e)
                                } catch (e) {
                                }
                                try {
                                    COMMON_REPORT_UTILS.error_log_report(this.$def.pageCodeInfo.pathCurUrl, `${JSON.stringify(e).substr(0, 1024).trim()}`, "全局异常", "程序异常")
                                } catch (e) {
                                }
                            },
                            async getAddDesktopDays() {
                                await h.getStorage("addDesktopTimestamp").then((e => {
                                    if (e && !isNaN(Number(e)) && Number(e) > 0) {
                                        let t = Number(e), a = (new Date).getTime(), o = (t - t % 864e5) / 864e5,
                                            i = (a - a % 864e5) / 864e5;
                                        o < i && (this.addDeskTopDays = i - o)
                                    }
                                }))
                            },
                            async getInfoUser(e) {
                                const t = {
                                    androidId: this.android,
                                    brand: this.brand,
                                    oaid: this.oaid,
                                    versionCode: this.versionCode,
                                    versionName: this.versionName
                                };
                                y.example.login(e || t).then((e => {
                                    if (console.log(e.data, "res"), e && 200 === e.code) {
                                        const {online_token: t, loginStatus: a} = e.data;
                                        this.isLogin = 1 === a, h.setStorage("token", t), h.setStorage("isLogin", e.data.loginStatus)
                                    }
                                }))
                            },
                            async initDeviceInfo() {
                                let e = this;
                                return new Promise((async t => {
                                    await e.getAddDesktopDays(), e.versionName = u.default.getInfo().versionName, e.versionCode = u.default.getInfo().versionCode, await s.default.getInfo().then((t => {
                                        (0, n.default)("deviceInfo===>", t);
                                        let a = t.brand.toLowerCase();
                                        "oppo" == a || "realme" == a || "oneplus" == a ? a = "oppo" : "honor" == a || "huawei" == a ? a = "huawei" : "redmi" == a || "xiaomi" == a || "小米" == a || "Redmi" == a || "小米红米" == a ? a = "xiaomi" : "vivo" == a ? (a = "vivo", e.isBrandVivo = !0) : a = "other", e.screenHeight = Math.ceil(750 * t.screenHeight / t.screenWidth), e.deviceInfo = t, e.brand = a, e.model = a + " " + t.model
                                    })), await s.default.getUserId().then((t => {
                                        e.android = t.userId
                                    })), await s.default.getOAID().then((t => {
                                        e.oaid = t.oaid
                                    })), t()
                                }))
                            },
                            getPagesCodeInfo(e = 0) {
                                let t = Object.assign({}, this.pageCodeInfo);
                                var a = l.default.getState();
                                let o = i.default[`${a.path}`];
                                return (0, n.default)("pageInfo", o), (0, n.default)("originInfo", t), o && t.pageCode == o.pageCode && t.pathCurUrl == o.pathUrl ? ((0, n.default)(`getPagesCodeInfo==================页面2code${this.pageCodeInfo.pageCode}_来源code${this.pageCodeInfo.pageOrigin}`, this.pageCodeInfo), this.pageCodeInfo) : (AD_SDK_UTILS.updataAdConfigData({uploadFristPopClick: 3}), o && "MAIN" == o.pageCode && t.pageCode == o[`pageCode${e}`] && t.pathCurUrl == o[`pathUrl${e}`] ? ((0, n.default)(`getPagesCodeInfo==================页面1code${this.pageCodeInfo.pageCode}_来源code${this.pageCodeInfo.pageOrigin}`, this.pageCodeInfo), this.pageCodeInfo) : (this.pageCodeInfo.pageOrigin = t.pageCode, this.pageCodeInfo.pathUrl = t.pathCurUrl, o ? "MAIN" == o.pageCode ? (this.pageCodeInfo.pageCode = o[`pageCode${e}`], this.pageCodeInfo.pathCurUrl = o[`pathUrl${e}`]) : (this.pageCodeInfo.pageCode = o.pageCode, this.pageCodeInfo.pathCurUrl = o.pathUrl) : (this.pageCodeInfo.pageCode = "", this.pageCodeInfo.pathCurUr = ""), (0, n.default)(`getPagesCodeInfo==================页面code${this.pageCodeInfo.pageCode}_来源code${this.pageCodeInfo.pageOrigin}_code=`, this.pageCodeInfo), this.pageCodeInfo))
                            },
                            async initAdInfo(e, t, a = !1, o) {
                                A.APPDEF = t.$def;
                                let i = await TACTICS_SDK.getNewAdPostionInfo();
                                (0, n.default)("广告配置请求成功===>", i);
                                let r = (new Date).getTime();
                                h.setStorage("UNION_AD_CACHE", {
                                    hasAuthored: {
                                        expire_time: r - r % 864e5 + 864e5 - 288e5,
                                        val: !0
                                    }
                                }), setTimeout((() => {
                                    new _.default(t)
                                }), 50);
                                let s = await TACTICS_SDK.getAdConfigInfo(), d = TACTICS_SDK.getBqtAdConfigInfo(),
                                    p = Number(TACTICS_SDK.getGlobalData("configInfo").config.ad_btn_text_type.val),
                                    c = Number(TACTICS_SDK.getGlobalData("configInfo").config.is_used_ad_button.val),
                                    l = Number(TACTICS_SDK.getGlobalData("configInfo").config.is_bqt_can_show_dialog.val);
                                AD_SDK_UTILS.updataAdConfigData({advConfig: s, materialType: p});
                                let {
                                    deviceInfo: f,
                                    android: g,
                                    channelId: m,
                                    manifest: y,
                                    linkId: C,
                                    tacticsName: v,
                                    utm_ad_id: O,
                                    utm_source: S,
                                    utm_content: T
                                } = t.$def, b = u.default.getInfo();
                                t.$def.sourcePkg = b.source.packageName, AD_SDK_UTILS.initSdk({
                                    isCheckStatus: a,
                                    deviceInfo: f,
                                    android: g,
                                    qudao: m,
                                    adPlanId: O,
                                    pkg: y.package,
                                    link_id: C,
                                    pageUrl: e,
                                    tacticsName: v,
                                    sourcePkg: b.source.packageName ? b.source.packageName : "noSourcePackage",
                                    unionid: S,
                                    utm_content: T,
                                    vivoChannelFilter: s.vivo ? s.vivo : "",
                                    materialType: p,
                                    isUsedAdButton: c,
                                    adNewPostionConfig: Object.assign({}, i, d),
                                    isBqtCanShowDialog: l,
                                    applicationInstall: 1,
                                    success: function () {
                                        (0, n.default)("SDK初始化成功"), o(1)
                                    },
                                    fail: function () {
                                        if (t.$def.adInitFailconut++, 3 == t.$def.adInitFailconut) return t.$def.adInitFailconut = 0, (0, n.default)("广告初始化3次失败！"), void o(2);
                                        t.$def.initAdInfo(e, t, a, o)
                                    }
                                })
                            },
                            isNeedShowDialogForAdClick(e = "img", t = !1) {
                                return new Promise(((a, o) => {
                                    let i = Number(TACTICS_SDK.getGlobalData("configInfo").config.is_reviewer.val),
                                        n = Number(TACTICS_SDK.getGlobalData("configInfo").config.is_used_ad_button.val);
                                    "btn" == e && n && this.deviceInfo.platformVersionCode >= 1100 && "huawei" === this.brand || "huawei" != this.brand && !p.default.isXM1(this.brand) || 1 != this.auditOnline && 1 != i ? a() : h.showDialog("提示", "确定进行下载吗?", [{
                                        text: "确定",
                                        color: "#333333"
                                    }, {text: "取消", color: "#333333"}], (e => {
                                        0 == e.index ? a() : (t && o(), h.showToast("您已取消"))
                                    }))
                                }))
                            },
                            changeCommonDataByPageShow(e) {
                                let t = `${e.pageDetail.pageUrl}`;
                                (0, n.default)("=============>changeCommonDataByPageShow", t), COMMON_REPORT_UTILS.set_attr("page_url", t), d.default.changeCurrentView(e), this.currentView = e, AD_SDK.updatePageUrl(t)
                            },
                            getMaterialUrl: e => AD_SDK.getMaterialUrlByAdData(e),
                            getManuAdvCommon(e, t = "", a = 0, o = 0, i = "", n = "", r = 1) {
                                return console.log("获取广告", ...arguments), new Promise(((s, d) => {
                                    AD_SDK_UTILS.getAd({
                                        scenario: e,
                                        sceneCode: t,
                                        adType: a,
                                        adTimes: o,
                                        popName: i,
                                        popGroupName: n,
                                        requestNum: r,
                                        success: async function (e) {
                                            s({type: "success", data: e})
                                        },
                                        fail: function (e) {
                                            s({type: "failed", data: e})
                                        }
                                    })
                                }))
                            },
                            getBannerAdvCommon: e => new Promise(((t, a) => {
                                AD_SDK.getBannerAdv({
                                    scenario: e, success: function (e) {
                                        t(e)
                                    }, fail: function (e) {
                                        a(e)
                                    }
                                })
                            })),
                            getAppData(e) {
                                return this.dataCache.hasOwnProperty(`${e}`) ? this.dataCache[e] : ""
                            },
                            setAppData(e, t) {
                                this.dataCache[e] = t
                            },
                            async checkUserInstallShortCut() {
                                try {
                                    let e = JSON.parse(await h.getStorage("_SD_BD_ICON_STATE_"));
                                    e && "object" == typeof e && e.last_state.state !== e.tod_state.state && 1 == e.tod_state.state && (this.setAddDesktopInfo(), COMMON_REPORT_UTILS.add_icon_report("成功", "被动加桌", "桌面"))
                                } catch (e) {
                                }
                            },
                            async setAddDesktopInfo() {
                                await h.setStorage("addDesktopTimestamp", (new Date).getTime()), await h.setStorage("addDesktopUserInfo", {
                                    linkId: this.linkId,
                                    channelId: this.channelId,
                                    creativeid: this.utm_content,
                                    addTime: h.dateToString()
                                })
                            },
                            taskInfoUpdateHandle: e => new Promise((t => {
                                y.example.taskUpdataApi(e).then((a => {
                                    200 == a.code && (t(), console.log("任务上报成功===>", e))
                                }))
                            })),
                            uploadListShow(e, t) {
                                if (e.length > 0) {
                                    var a = [];
                                    e.forEach((e => {
                                        a.push(`${e.bookId}`)
                                    })), a.sort(((e, t) => e - t)), console.log("uploadListShow", a), COMMON_REPORT_UTILS.list_show_report("1", a, t)
                                }
                            },
                            showNotification() {
                                try {
                                    if (Number(TACTICS_SDK.getGlobalData("configInfo").config.is_show_notification.val)) {
                                        let e = TACTICS_SDK.getGlobalData("configInfo").config.notification_title.val,
                                            t = TACTICS_SDK.getGlobalData("configInfo").config.notification_text.val,
                                            a = TACTICS_SDK.getGlobalData("configInfo").config.notification_url.val;
                                        COMMON_REPORT_UTILS.notification_show_report(e, t, a, this.channelId, this.linkId), a = a + `&notification_title=${e}` + `&notification_text=${t}` + `&notification_url=${a}&notification_status=1` + `&oChannelId=${this.channelId}` + `&oLinkId=${this.linkId}`, o("@app-module/system.notification").show({
                                            contentTitle: e,
                                            contentText: t,
                                            clickAction: {uri: a}
                                        })
                                    }
                                } catch (e) {
                                }
                            },
                            getAddDesktopStatus(e = !1) {
                                let t = this;
                                (0, n.default)("getAddDesktopStatus================>1", t.$def.addDeskTopStatus, e), t.$def.addDeskTopStatus || t.$def.appIshow && e || (t.$def.appIshow = !0, o("@app-module/system.shortcut").hasInstalled({
                                    success: function (a) {
                                        (0, n.default)("getAddDesktopStatus================>2", a, t.$def.addDeskTopStatus), e && a ? (t.$def.addDeskTopStatus = 1, (0, n.default)("getAddDesktopStatus================>3", t.$def.addDeskTopStatus)) : a && 0 == t.$def.addDeskTopStatus && ((0, n.default)("getAddDesktopStatus================>4", t.$def.addDeskTopStatus), t.$def.addDeskTopStatus = 1, t.setAddDesktopInfo(), COMMON_REPORT_UTILS.add_icon_report("成功", "系统加桌", ""))
                                    }
                                }))
                            },
                            async getUserInfo() {
                                await h.getStorage("userInfo").then((e => {
                                    if ("" != e && void 0 !== e) {
                                        let t = JSON.parse(e);
                                        this.isVip = t.isvip
                                    }
                                }))
                            },
                            isOpenScreenAd: () => !1,
                            screenAdHandle() {
                                const e = this.currentView, t = this;
                                let a = this.isOpenScreenAd();
                                return new Promise((o => {
                                    a && (d.default.commonFunc2PatchPopShow(e.pageDetail, "SCREEN_TOUCH", "", e.pageDetail.pageRoute, e.$app.$def), t.isScreenShow = !0), o(a)
                                }))
                            },
                            screenAdEnd(e) {
                                if (e) {
                                    if ("SCREEN_TOUCH" === e.detail.actionCode || "SECOND_SCREEN_TOUCH" === e.detail.actionCode) {
                                        const e = this.currentView;
                                        for (let t = 0; t < e._childrenVms.length; t++) if ("start-mask" === e._childrenVms[t]._type) {
                                            e._childrenVms[t].isShowPage = !0;
                                            break
                                        }
                                        e.checkPageEnterPop ? e.checkPageEnterPop() : (0, n.default)("请在页面定义checkPageEnterPop函数"), (0, n.default)("双开屏", "双开屏结束，打开禁用截屏"), h.setSecure(e, !0)
                                    }
                                } else (0, n.default)("screenAdEnd请传入参数")
                            },
                            isOpenSecondScreenAd() {
                                let e = TACTICS_SDK.getGlobalData("configInfo").config.is_open_second_screen_ad;
                                return e = e && Number(e.val) || 0, e || (this.isSecondScreenShow = !0), e && !this.isSecondScreenShow
                            },
                            secondScreenAdHandle() {
                                try {
                                    const e = this.currentView;
                                    let t = this.isOpenSecondScreenAd();
                                    return new Promise((a => {
                                        t && d.default.commonFunc2PatchPopShow(e.pageDetail, "SECOND_SCREEN_TOUCH", "", e.pageDetail.pageRoute, e.$app.$def), a(t)
                                    }))
                                } catch (e) {
                                    (0, n.default)("双开屏", "触发二次开屏广告弹框报错", e)
                                }
                            },
                            oppoWakeUpHandle() {
                                (0, n.default)("oppo自唤醒跳转页面", this.oppoTempParams), this.isScreenShow = !1, h.routeReplacetheUrl(...this.oppoTempParams), this.oppoTempParams = []
                            }
                        }
                    }
                }, 489: e => {
                    "use strict";
                    var t = {
                        utf8: {
                            stringToBytes: function (e) {
                                return t.bin.stringToBytes(unescape(encodeURIComponent(e)))
                            }, bytesToString: function (e) {
                                return decodeURIComponent(escape(t.bin.bytesToString(e)))
                            }
                        }, bin: {
                            stringToBytes: function (e) {
                                for (var t = [], a = 0; a < e.length; a++) t.push(255 & e.charCodeAt(a));
                                return t
                            }, bytesToString: function (e) {
                                for (var t = [], a = 0; a < e.length; a++) t.push(String.fromCharCode(e[a]));
                                return t.join("")
                            }
                        }
                    };
                    e.exports = t
                }, 1179: e => {
                    "use strict";
                    var t, a;
                    t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = {
                        rotl: function (e, t) {
                            return e << t | e >>> 32 - t
                        }, rotr: function (e, t) {
                            return e << 32 - t | e >>> t
                        }, endian: function (e) {
                            if (e.constructor == Number) return 16711935 & a.rotl(e, 8) | 4278255360 & a.rotl(e, 24);
                            for (var t = 0; t < e.length; t++) e[t] = a.endian(e[t]);
                            return e
                        }, randomBytes: function (e) {
                            for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                            return t
                        }, bytesToWords: function (e) {
                            for (var t = [], a = 0, o = 0; a < e.length; a++, o += 8) t[o >>> 5] |= e[a] << 24 - o % 32;
                            return t
                        }, wordsToBytes: function (e) {
                            for (var t = [], a = 0; a < 32 * e.length; a += 8) t.push(e[a >>> 5] >>> 24 - a % 32 & 255);
                            return t
                        }, bytesToHex: function (e) {
                            for (var t = [], a = 0; a < e.length; a++) t.push((e[a] >>> 4).toString(16)), t.push((15 & e[a]).toString(16));
                            return t.join("")
                        }, hexToBytes: function (e) {
                            for (var t = [], a = 0; a < e.length; a += 2) t.push(parseInt(e.substr(a, 2), 16));
                            return t
                        }, bytesToBase64: function (e) {
                            for (var a = [], o = 0; o < e.length; o += 3) for (var i = e[o] << 16 | e[o + 1] << 8 | e[o + 2], n = 0; n < 4; n++) 8 * o + 6 * n <= 8 * e.length ? a.push(t.charAt(i >>> 6 * (3 - n) & 63)) : a.push("=");
                            return a.join("")
                        }, base64ToBytes: function (e) {
                            e = e.replace(/[^A-Z0-9+\/]/gi, "");
                            for (var a = [], o = 0, i = 0; o < e.length; i = ++o % 4) 0 != i && a.push((t.indexOf(e.charAt(o - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(o)) >>> 6 - 2 * i);
                            return a
                        }
                    }, e.exports = a
                }, 8202: e => {
                    "use strict";

                    function t(e) {
                        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                    }

                    e.exports = function (e) {
                        return null != e && (t(e) || function (e) {
                            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && t(e.slice(0, 0))
                        }(e) || !!e._isBuffer)
                    }
                }, 726: (e, t, a) => {
                    "use strict";
                    var o, i, n, r, s;
                    o = a(1179), i = a(489).utf8, n = a(8202), r = a(489).bin, (s = function (e, t) {
                        e.constructor == String ? e = t && "binary" === t.encoding ? r.stringToBytes(e) : i.stringToBytes(e) : n(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
                        for (var a = o.bytesToWords(e), d = 8 * e.length, p = 1732584193, c = -271733879, u = -1732584194, l = 271733878, _ = 0; _ < a.length; _++) a[_] = 16711935 & (a[_] << 8 | a[_] >>> 24) | 4278255360 & (a[_] << 24 | a[_] >>> 8);
                        a[d >>> 5] |= 128 << d % 32, a[14 + (d + 64 >>> 9 << 4)] = d;
                        var f = s._ff, g = s._gg, m = s._hh, h = s._ii;
                        for (_ = 0; _ < a.length; _ += 16) {
                            var y = p, A = c, C = u, v = l;
                            p = f(p, c, u, l, a[_ + 0], 7, -680876936), l = f(l, p, c, u, a[_ + 1], 12, -389564586), u = f(u, l, p, c, a[_ + 2], 17, 606105819), c = f(c, u, l, p, a[_ + 3], 22, -1044525330), p = f(p, c, u, l, a[_ + 4], 7, -176418897), l = f(l, p, c, u, a[_ + 5], 12, 1200080426), u = f(u, l, p, c, a[_ + 6], 17, -1473231341), c = f(c, u, l, p, a[_ + 7], 22, -45705983), p = f(p, c, u, l, a[_ + 8], 7, 1770035416), l = f(l, p, c, u, a[_ + 9], 12, -1958414417), u = f(u, l, p, c, a[_ + 10], 17, -42063), c = f(c, u, l, p, a[_ + 11], 22, -1990404162), p = f(p, c, u, l, a[_ + 12], 7, 1804603682), l = f(l, p, c, u, a[_ + 13], 12, -40341101), u = f(u, l, p, c, a[_ + 14], 17, -1502002290), p = g(p, c = f(c, u, l, p, a[_ + 15], 22, 1236535329), u, l, a[_ + 1], 5, -165796510), l = g(l, p, c, u, a[_ + 6], 9, -1069501632), u = g(u, l, p, c, a[_ + 11], 14, 643717713), c = g(c, u, l, p, a[_ + 0], 20, -373897302), p = g(p, c, u, l, a[_ + 5], 5, -701558691), l = g(l, p, c, u, a[_ + 10], 9, 38016083), u = g(u, l, p, c, a[_ + 15], 14, -660478335), c = g(c, u, l, p, a[_ + 4], 20, -405537848), p = g(p, c, u, l, a[_ + 9], 5, 568446438), l = g(l, p, c, u, a[_ + 14], 9, -1019803690), u = g(u, l, p, c, a[_ + 3], 14, -187363961), c = g(c, u, l, p, a[_ + 8], 20, 1163531501), p = g(p, c, u, l, a[_ + 13], 5, -1444681467), l = g(l, p, c, u, a[_ + 2], 9, -51403784), u = g(u, l, p, c, a[_ + 7], 14, 1735328473), p = m(p, c = g(c, u, l, p, a[_ + 12], 20, -1926607734), u, l, a[_ + 5], 4, -378558), l = m(l, p, c, u, a[_ + 8], 11, -2022574463), u = m(u, l, p, c, a[_ + 11], 16, 1839030562), c = m(c, u, l, p, a[_ + 14], 23, -35309556), p = m(p, c, u, l, a[_ + 1], 4, -1530992060), l = m(l, p, c, u, a[_ + 4], 11, 1272893353), u = m(u, l, p, c, a[_ + 7], 16, -155497632), c = m(c, u, l, p, a[_ + 10], 23, -1094730640), p = m(p, c, u, l, a[_ + 13], 4, 681279174), l = m(l, p, c, u, a[_ + 0], 11, -358537222), u = m(u, l, p, c, a[_ + 3], 16, -722521979), c = m(c, u, l, p, a[_ + 6], 23, 76029189), p = m(p, c, u, l, a[_ + 9], 4, -640364487), l = m(l, p, c, u, a[_ + 12], 11, -421815835), u = m(u, l, p, c, a[_ + 15], 16, 530742520), p = h(p, c = m(c, u, l, p, a[_ + 2], 23, -995338651), u, l, a[_ + 0], 6, -198630844), l = h(l, p, c, u, a[_ + 7], 10, 1126891415), u = h(u, l, p, c, a[_ + 14], 15, -1416354905), c = h(c, u, l, p, a[_ + 5], 21, -57434055), p = h(p, c, u, l, a[_ + 12], 6, 1700485571), l = h(l, p, c, u, a[_ + 3], 10, -1894986606), u = h(u, l, p, c, a[_ + 10], 15, -1051523), c = h(c, u, l, p, a[_ + 1], 21, -2054922799), p = h(p, c, u, l, a[_ + 8], 6, 1873313359), l = h(l, p, c, u, a[_ + 15], 10, -30611744), u = h(u, l, p, c, a[_ + 6], 15, -1560198380), c = h(c, u, l, p, a[_ + 13], 21, 1309151649), p = h(p, c, u, l, a[_ + 4], 6, -145523070), l = h(l, p, c, u, a[_ + 11], 10, -1120210379), u = h(u, l, p, c, a[_ + 2], 15, 718787259), c = h(c, u, l, p, a[_ + 9], 21, -343485551), p = p + y >>> 0, c = c + A >>> 0, u = u + C >>> 0, l = l + v >>> 0
                        }
                        return o.endian([p, c, u, l])
                    })._ff = function (e, t, a, o, i, n, r) {
                        var s = e + (t & a | ~t & o) + (i >>> 0) + r;
                        return (s << n | s >>> 32 - n) + t
                    }, s._gg = function (e, t, a, o, i, n, r) {
                        var s = e + (t & o | a & ~o) + (i >>> 0) + r;
                        return (s << n | s >>> 32 - n) + t
                    }, s._hh = function (e, t, a, o, i, n, r) {
                        var s = e + (t ^ a ^ o) + (i >>> 0) + r;
                        return (s << n | s >>> 32 - n) + t
                    }, s._ii = function (e, t, a, o, i, n, r) {
                        var s = e + (a ^ (t | ~o)) + (i >>> 0) + r;
                        return (s << n | s >>> 32 - n) + t
                    }, s._blocksize = 16, s._digestsize = 16, e.exports = function (e, t) {
                        if (null == e) throw new Error("Illegal argument " + e);
                        var a = o.wordsToBytes(s(e, t));
                        return t && t.asBytes ? a : t && t.asString ? r.bytesToString(a) : o.bytesToHex(a)
                    }
                }, 8484: (e, t, a) => {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
                    var o = y($app_require$("@app-module/system.device")),
                        i = y($app_require$("@app-module/system.app")),
                        n = y($app_require$("@app-module/system.network")),
                        r = y($app_require$("@app-module/system.fetch")),
                        s = y($app_require$("@app-module/system.package")),
                        d = y($app_require$("@app-module/system.webview")),
                        p = y($app_require$("@app-module/system.prompt")),
                        c = y($app_require$("@app-module/system.router")),
                        u = y($app_require$("@app-module/system.request")),
                        l = y($app_require$("@app-module/system.storage")),
                        _ = y($app_require$("@app-module/service.account")),
                        f = y($app_require$("@app-module/system.sensor")),
                        g = y($app_require$("@app-module/system.file")),
                        m = y($app_require$("@app-module/system.image")), h = a(3875);

                    function y(e) {
                        return e && e.__esModule ? e : {default: e}
                    }

                    var A = Object.getPrototypeOf(a.g) || a.g,
                        C = "internal://files/unionad/".concat(h.version, "/ad-render-quick.min.js");

                    function v(e, t) {
                        var a = this;
                        try {
                            new Function(e)()
                        } catch (e) {
                            t && S.call(this).then((function (e) {
                                v(e, !1), O.call(a)
                            }))
                        }
                    }

                    function O(e) {
                        try {
                            A.$union_quick_app_sdk && (A.$union_quick_app_sdk.api = {
                                device: o.default,
                                app: i.default,
                                network: n.default,
                                fetch: r.default,
                                pkg: s.default,
                                webview: d.default,
                                prompt: p.default,
                                router: c.default,
                                request: u.default,
                                storage: l.default,
                                account: _.default,
                                file: g.default,
                                sensor: f.default,
                                image: m.default
                            }, A.$union_quick_app_sdk.sdkVersion = h.version, A.$union_quick_app_sdk.fileUrl = C, new A.$union_quick_app_sdk(this, e))
                        } catch (e) {
                        }
                    }

                    function S() {
                        return new Promise((function (e, t) {
                            r.default.fetch({
                                url: "https://cpro.baidustatic.com/cpro/xcx/js/ad-render-quick.min.js",
                                responseType: "text",
                                method: "GET",
                                success: function (t) {
                                    g.default.writeText({
                                        uri: C, text: t.data, success: function () {
                                        }, fail: function (e, t) {
                                        }
                                    }), e(t.data)
                                },
                                fail: function (e, a) {
                                    t()
                                }
                            })
                        }))
                    }

                    var T, b = (T = function e(t, a) {
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        })(this, e), A && A.$union_quick_app_sdk ? O.call(t, a) : g.default.readText({
                            uri: C,
                            success: function (e) {
                                v.call(t, e.text, !0), O.call(t, a)
                            },
                            fail: function (e, o) {
                                S.call(t).then((function (e) {
                                    v.call(t, e, !1), O.call(t, a)
                                }))
                            }
                        })
                    }, Object.defineProperty(T, "prototype", {writable: !1}), T);
                    t.default = b
                }, 4415: (e, t, a) => {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
                    var o = n($app_require$("@app-module/system.fetch")), i = n(a(9121));

                    function n(e) {
                        return e && e.__esModule ? e : {default: e}
                    }

                    function r(e, t) {
                        console.log("请求信息", JSON.stringify(e)), console.log("请求信息page_name==>", t);
                        let a = e.url.split("?")[0];
                        return a || (a = e.url), console.log("请求接口前缀", a), new Promise(((t, n) => {
                            i.default.getStorage("token").then((r => {
                                let s = (new Date).getTime();
                                o.default.fetch({
                                    url: e.url,
                                    method: e.method,
                                    data: JSON.stringify(e.data),
                                    header: {authorization: "Bearer " + r}
                                }).then((e => {
                                    try {
                                        COMMON_REPORT_UTILS.error_log_report(`${a}`, `${e.data.code}`, "" + ((new Date).getTime() - s), "请求成功")
                                    } catch (e) {
                                    }
                                    if ((new Date).getTime() - s > 1e3) try {
                                        COMMON_REPORT_UTILS.error_log_report(`${a}`, "响应超过1000ms上报", "接口请求", "响应超时")
                                    } catch (e) {
                                    }
                                    if (e.data.code < 500) {
                                        console.log("🐛 response:", JSON.parse(e.data.data));
                                        let o = JSON.parse(e.data.data);
                                        if (201 === o.tokenCode && i.default.setStorage("token", o.refreshToken), 404 == o.code) try {
                                            let t = JSON.stringify(e.data);
                                            COMMON_REPORT_UTILS.error_log_report(`${a}`, `${t.substring(0, 1024).trim()}`, "接口请求", "找不到接口")
                                        } catch (e) {
                                        }
                                        t(o)
                                    } else {
                                        try {
                                            let t = JSON.stringify(e.data);
                                            COMMON_REPORT_UTILS.error_log_report(`${a}`, `${t.substring(0, 1024).trim()}`, "接口请求", "内部错误")
                                        } catch (e) {
                                        }
                                        n(e.data)
                                    }
                                })).catch(((e, t) => {
                                    try {
                                        COMMON_REPORT_UTILS.error_log_report(`${a}`, `${e && e.code && e.code}`, "" + ((new Date).getTime() - s), "请求失败")
                                    } catch (e) {
                                    }
                                    try {
                                        if (e && e.code && 2001 == e.code) return
                                    } catch (e) {
                                    }
                                    try {
                                        let t = e.constructor == Object ? JSON.stringify(e) : `${e}`;
                                        COMMON_REPORT_UTILS.error_log_report(`${a}`, `${t.substring(0, 1024).trim()}`, "接口请求", "响应超时")
                                    } catch (e) {
                                    }
                                    n(e)
                                }))
                            }))
                        }))
                    }

                    function s(e, t) {
                        try {
                            return Promise.race([r(e, t)])
                        } catch (e) {
                            console.log(e)
                        }
                    }

                    Promise.prototype.finally = function (e) {
                        const t = this.constructor;
                        return this.then((a => t.resolve(e()).then((() => a))), (a => t.resolve(e()).then((() => {
                            throw a
                        }))))
                    }, t.default = {
                        post: function (e, t, a) {
                            return s({method: "post", url: e, data: t}, a)
                        }, get: function (e, t, a) {
                            return s({method: "get", url: i.default.queryString(e, t)}, a)
                        }, put: function (e, t, a) {
                            return s({method: "put", url: e, data: t}, a)
                        }, delete: function (e, t, a) {
                            return s({method: "delete", url: e, data: t}, a)
                        }, getExternal: function (e, t, a) {
                            console.log("请求信息page_name==>", a);
                            const n = {method: "get", url: i.default.queryString(e, t)};
                            return new Promise(((e, t) => {
                                o.default.fetch({url: n.url, method: n.method}).then((a => {
                                    try {
                                        if (a.data.code < 500) {
                                            console.log("🐛 response:", JSON.parse(a.data.data));
                                            let t = JSON.parse(a.data.data);
                                            e(t)
                                        } else t(a.data)
                                    } catch (e) {
                                        t(e)
                                    }
                                })).catch((e => {
                                    t(e)
                                }))
                            }))
                        }, postExternal: function (e, t, a) {
                            console.log("请求信息page_name==>", a);
                            const i = {method: "post", url: e, data: t};
                            return new Promise(((e, t) => {
                                const a = setTimeout((() => {
                                    t()
                                }), 3e3);
                                o.default.fetch({
                                    url: i.url,
                                    method: i.method,
                                    data: JSON.stringify(i.data),
                                    header: {"Content-Type": "application/json; charset=UTF-8"}
                                }).then((o => {
                                    try {
                                        if (clearTimeout(a), o.data.code < 500) {
                                            console.log("🐛 response:", JSON.parse(o.data.data));
                                            let t = JSON.parse(o.data.data);
                                            e(t)
                                        } else t(o.data)
                                    } catch (e) {
                                        t(e)
                                    }
                                })).catch((e => {
                                    t(e)
                                }))
                            }))
                        }
                    }
                }, 9121: (e, t) => {
                    "use strict";

                    function a(e, t) {
                        var a = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            t && (o = o.filter((function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), a.push.apply(a, o)
                        }
                        return a
                    }

                    function o(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? a(Object(o), !0).forEach((function (t) {
                                var a, i, n, r;
                                a = e, i = t, n = o[t], (i = "symbol" == typeof (r = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var a = e[Symbol.toPrimitive];
                                    if (void 0 !== a) {
                                        var o = a.call(e, "string");
                                        if ("object" != typeof o) return o;
                                        throw new TypeError("@@toPrimitive must return a primitive value.")
                                    }
                                    return String(e)
                                }(i)) ? r : String(r)) in a ? Object.defineProperty(a, i, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : a[i] = n
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : a(Object(o)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                            }))
                        }
                        return e
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
                    const i = $app_require$("@app-module/system.prompt"),
                        n = $app_require$("@app-module/system.storage"), r = $app_require$("@app-module/system.router"),
                        s = $app_require$("@app-module/system.fetch");

                    function d(e) {
                        var t = 0;
                        if (!e) return t;
                        for (var a = 0; a < e.length; a++) e[a] && (null != e[a].match(/[^\x00-\xff]/gi) ? t += 2 : t += 1);
                        return t
                    }

                    t.default = {
                        showToast: function (e = "", t = 0) {
                            e && i.showToast({message: e, duration: t})
                        }, queryString: function (e, t) {
                            let a = [];
                            for (let e in t) a.push(e + "=" + t[e]);
                            let o = a.join("&");
                            return o ? `${e}?${o}` : e
                        }, phone: function (e) {
                            if (!/^1[34578]\d{9}$/.test(e)) return !0
                        }, setStorage: function (e, t) {
                            n.set({
                                key: e, value: t, fail(e, t) {
                                    console.log(`setStorage fail, code = ${t}`)
                                }
                            })
                        }, getStorage: function (e) {
                            return new Promise(((t, a) => {
                                n.get({
                                    key: e, success(e) {
                                        t(e || "")
                                    }, fail(e, t) {
                                        console.log(`getStorage fail, code = ${t}`), a({data: e, code: t})
                                    }
                                })
                            }))
                        }, routetheUrl: function (e, t, a = !1) {
                            if (e) {
                                if (e.indexOf("/pagesA/Welfare") > -1) try {
                                    e = 2 === Number(TACTICS_SDK.getGlobalData("configInfo").config.is_open_welfare_menuBar.val) ? "/pagesA/WelfareNew" : "/pagesA/Welfare"
                                } catch (t) {
                                    e = "/pagesA/Welfare"
                                }
                                AD_SDK.clearVideoCallMap(), POP_TOOLS.isFakePage(e) ? POP_TOOLS.handleFakePage(e, t, a) : (POP_TOOLS.setFakePageView(null), REPORT_SDK.set_attr("ext_field_7", ""), r.push({
                                    uri: e,
                                    params: o(o({}, t), {}, {clearRouter: a})
                                }))
                            } else LOG("routetheUrl 参数url不能为空")
                        }, routeReplacetheUrl: function (e, t) {
                            if (e.indexOf("/pagesA/Welfare") > -1) try {
                                e = 2 === Number(TACTICS_SDK.getGlobalData("configInfo").config.is_open_welfare_menuBar.val) ? "/pagesA/WelfareNew" : "/pagesA/Welfare"
                            } catch (t) {
                                e = "/pagesA/Welfare"
                            }
                            r.replace({uri: e, params: t})
                        }, goBack: function () {
                            r.back()
                        }, goBackTo: function (e) {
                            r.back({path: e})
                        }, clear: function () {
                            r.clear()
                        }, deleteStorage: function (e) {
                            n.delete({
                                key: e, success: function (e) {
                                    console.log("handling success")
                                }, fail: function (e, t) {
                                    console.log(`handling fail, code = ${t}`)
                                }
                            })
                        }, pushMessageInfo: function (e) {
                            $apis.example.pushMessage({pushId: e}).then((e => {
                            })).catch((e => {
                            }))
                        }, backTime: function (e, t) {
                            return (new Date).getTime() - e < t.$app.$def.backTime
                        }, backTimeCommon: function (e, t) {
                            return (new Date).getTime() - e < t
                        }, routeCheckUrl: function (e) {
                            let t = r.getPages();
                            return console.log("判断当前要跳转的路由是否为当前页面routeCheckUrl==>", t), t[t.length - 1].path == e
                        }, formatTime: function (e) {
                            let t = Math.floor(e / 3600), a = Math.floor(Math.floor(e % 3600) / 60), o = e % 60;
                            return t = 1 === t.toString().length ? `0${t}` : t, a = 1 === a.toString().length ? `0${a}` : a, o = 1 === o.toString().length ? `0${o}` : o, t + ":" + a + ":" + o
                        }, routeCheckPages: function () {
                            return r.getPages().length > 1
                        }, clearStorage: function () {
                            return new Promise(((e, t) => {
                                n.clear({
                                    success: function (t) {
                                        e()
                                    }, fail: function (e, a) {
                                        t()
                                    }
                                })
                            }))
                        }, showDialog: function (e, t, a, o) {
                            i.showDialog({
                                title: e, message: t, buttons: a, autocancel: !1, success: function (e) {
                                    o(e)
                                }, cancel: function () {
                                    console.log("handling cancel")
                                }, fail: function (e, t) {
                                    console.log(`handling fail, code = ${t}`)
                                }
                            })
                        }, cutStrByte: function (e, t) {
                            if (!e || !t) return {cutStr: "", code: 0};
                            var a, o = "1", i = e.length;
                            if (i <= t / 2) a = e, o = "0"; else for (var n = 0, r = 0; r < i; r++) {
                                if ((n += d(e.charAt(r))) > t) {
                                    a = e.substring(0, r);
                                    break
                                }
                                if (n == t) {
                                    a = e.substring(0, r + 1);
                                    break
                                }
                            }
                            return a || (a = e, o = "0"), {cutStr: a, code: o}
                        }, getByteLen: d, adFreeTimeDifference: function (e) {
                            let t = Date.parse(new Date), a = Math.floor((e - t) / 6e4);
                            return console.log(`剩余看视频免广告时间======>${a}`), e > t
                        }, pageTimeCompute: function (e) {
                            let t = 0, a = (new Date).getTime();
                            return a > e && (t = Math.ceil((a - e) / 1e3)), t
                        }, cutStr: function (e, t) {
                            for (var a = [], o = 0, i = e.length; o < i / t; o++) {
                                var n = e.slice(t * o, t * (o + 1));
                                a.push(n)
                            }
                            return a
                        }, stacksRouter: function (e) {
                            let t = [];
                            return r.getPages().forEach((e => {
                                t.push(e.path)
                            })), -1 != t.indexOf(e)
                        }, uploadHuaweiLaunchData: function (e) {
                            if (!e) return;
                            let t = Object.assign({
                                APIVersion: "0.6.0",
                                rtype: "huawei",
                                pkg: "com.yunshangxiaoshuo.quansheng"
                            }, e);
                            console.log("启动参数===>", t), s.fetch({
                                url: "https://rpclusters.cn-beijing.log.aliyuncs.com/logstores/rpclusters/track.gif",
                                method: "get",
                                data: t,
                                success: e => {
                                    console.log("启动参数上报成功"), LOG("华为站内上报成功=====>", t)
                                },
                                fail: (e, t) => {
                                    console.log("启动参数上报失败", e, t)
                                }
                            })
                        }, checkKeyValueConditionSatisfied: function (e, t, a) {
                            if ("is" != a && "not_is" != a && "less" != a && "greater" != a) return console.error("function checkKeyValueConditionSatisfied’s param(cond) not included is or not_is or less or greater"), !1;
                            let o = !1;
                            switch (a) {
                                case"is":
                                    o = e == t;
                                    break;
                                case"not_is":
                                    o = e != t;
                                    break;
                                case"less":
                                    o = e < t;
                                    break;
                                case"greater":
                                    o = e > t
                            }
                            return "boolean" == typeof o && o
                        }, getExchangeChannelId: function (e) {
                            let t = new Map([["1", "ttzn"], ["5", "ttzw"], ["6", "kszn"], ["3", "kszw"], ["2", "opzn"], ["9", "opzw"], ["11", "vvzn"], ["7", "vvzw"], ["10", "xmzn"], ["4", "xmzw"], ["12", "hwzn"], ["8", "hwzw"], ["13", "iqyzn"], ["14", "iqyzw"], ["15", "gdtzn"], ["16", "gdtzw"], ["17", "xigua"], ["18", "tths"], ["19", "zchc"], ["20", "djhc"], ["21", "qdhc"], ["22", "ceshi"], ["23", "wbzn"]]).get(`${e}`);
                            return LOG("getExchangeChannelId==========>", e, t), t || e
                        }, getSourceType: function () {
                            return LOG("getSourceType==========>", $app_require$("@app-module/system.app").getInfo()), $app_require$("@app-module/system.app").getInfo().source.type
                        }, getExtraScene: function () {
                            return $app_require$("@app-module/system.app").getInfo().source.extra.scene || ""
                        }, dateToString: function () {
                            let e = new Date;
                            var t = e.getFullYear(), a = e.getMonth() + 1, o = e.getDate();
                            return e.getHours(), e.getMinutes(), e.getSeconds(), Math.floor((e.getMonth() + 3) / 3), `${t}${a}${o}`
                        }, setSecure: function (e, t = !1) {
                            const a = e.$app.$def.deviceInfo.platformVersionCode,
                                o = TACTICS_SDK.getGlobalData("configInfo").config.is_disabled_secure;
                            let i = !1;
                            LOG(o, "是否允许截图"), o && o.val ? (i = 1 === Number(o.val), a > 1090 ? e.$page.setSecure(i) : LOG("setSecure方法不支持", a), LOG("setSecure", i, a, e.$page.setSecure)) : (a > 1090 ? e.$page.setSecure(t) : LOG("setSecure方法不支持", a), LOG("setSecure", t, a, e.$page.setSecure))
                        }, isShowFuli: function () {
                            let e = !1;
                            try {
                                e = Number(TACTICS_SDK.getGlobalData("configInfo").config.is_show_welfare_page.val)
                            } catch (e) {
                            }
                            return e
                        }, getProbabilityNum: function (e, t) {
                            var a = Math.floor(100 * Math.random()) + 1;
                            return a >= 1 && a <= t ? e : 0
                        }, requestFullscreen: function (e) {
                            try {
                                if ("huawei" !== e.$app.$def.brand) {
                                    let t = TACTICS_SDK.getGlobalData("configInfo").config.is_full_screen;
                                    t = t && Number(t.val) || 0, t && e.$element("fStack").requestFullscreen()
                                }
                            } catch (e) {
                            }
                        }, getRouterInfo: function () {
                            return r.getState()
                        }
                    }
                }, 3662: (e, t, a) => {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
                    var o = p($app_require$("@app-module/system.fetch")), i = p(a(4415)), n = p(a(726)),
                        r = p($app_require$("@app-module/system.app")), s = a(2854), d = p(a(966));

                    function p(e) {
                        return e && e.__esModule ? e : {default: e}
                    }

                    function c(e, t) {
                        var a = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            t && (o = o.filter((function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), a.push.apply(a, o)
                        }
                        return a
                    }

                    function u(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? c(Object(a), !0).forEach((function (t) {
                                var o, i, n, r;
                                o = e, i = t, n = a[t], (i = "symbol" == typeof (r = function (e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var a = e[Symbol.toPrimitive];
                                    if (void 0 !== a) {
                                        var o = a.call(e, "string");
                                        if ("object" != typeof o) return o;
                                        throw new TypeError("@@toPrimitive must return a primitive value.")
                                    }
                                    return String(e)
                                }(i)) ? r : String(r)) in o ? Object.defineProperty(o, i, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : o[i] = n
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }))
                        }
                        return e
                    }

                    const l = a.g.__proto__ || a.g;
                    var _ = null, f = null, g = [], m = {
                        deviceInfo: null,
                        pkg: "",
                        qudao: "NULL",
                        link_id: "NULL",
                        serviceAd: !0,
                        initStatus: 0,
                        insertId: "",
                        insertAd: null,
                        bannerId: "",
                        nativeBannerId: "",
                        bannerAd: null,
                        videoId: "",
                        nativeScreen: "",
                        nativeChapter: "",
                        encourageIds: "",
                        nativeAdvIdsConfig: null,
                        nativePageEntry: "",
                        nativePageBack: "",
                        templateAdvIdsConfig: "",
                        nativeBoost: "",
                        templateAdIds: "",
                        ylhAdIds: "",
                        nativeAdvIdArr: [],
                        manuAdvSourceArr: [],
                        isCreate: !1,
                        pageUrl: "",
                        tacticsName: "",
                        loadFailAdIdArr: [],
                        adConfigType: 1,
                        bqtAdIdArr: [],
                        kdxfAdIdArr: [],
                        vivoAdCount: 1,
                        ad_group_id: "NULL",
                        ad_plan_id: "NULL",
                        isPreloading: !1,
                        source_pkg: "NULL",
                        unionid: "NULL",
                        utm_content: "NULL",
                        vivoChannelFilter: null,
                        vivoChannel: "",
                        materialType: 1,
                        hwPageThis: null,
                        applicationInstall: 1,
                        isUsedAdButton: 2,
                        isUsedXiaomiButton: 3,
                        defaultAdImg: "https://imgs.syreads.com/image/2022-06-29/adDefaultImg1.png",
                        adNewPostionConfig: null,
                        isBqtCanShowDialog: 0,
                        adgNum: 1,
                        failObject: {},
                        failObjectCycle: {},
                        isOpenHome: 0,
                        isOpenScreen1: 0,
                        isOpenScreen2: 0,
                        templateAdConfig: {
                            huawei: {template_ids: ["JiL3gLazKW4"], index: 0},
                            vivo: {template_ids: ["a7941daada724b158c231615cbe78659"], index: 0},
                            oppo: {template_ids: ["635808"], index: 0}
                        },
                        templateAds: {huawei: null, vivo: null, oppo: null},
                        adArrComputedType: !1,
                        adRequestNum: 0,
                        videoAd: null,
                        videoAdCallFnObj: {},
                        callFunctionType: 1,
                        videoAdDebonceObj: {},
                        videoQueue: [],
                        ylhAdvSourceArr: []
                    }, h = {adv_data: null, context: null, func_name: ""}, y = !1, A = {};

                    function C(e) {
                        let t = [].concat((e = e || []).filter((e => e))), a = t.length;
                        return t = t.map((e => {
                            let t = I(e.split(","));
                            return {curIndex: 0, maxIndex: t.length, adsArr: t}
                        })), {maxLayer: a, curLayer: 0, layers: t}
                    }

                    function v(e = !1) {
                        LOG("AD", "原生广告"), m.nativeAdvIdsConfig.curLayer = e ? 0 : m.nativeAdvIdsConfig.curLayer;
                        const {cool_switch: t, cool_time: a, fail_num: o} = m.adNewPostionConfig.cool_config;
                        let i = JSON.parse(JSON.stringify(m.nativeAdvIdsConfig)), n = "", r = 0, s = [];
                        for (let e in m.failObject) m.failObject[e] >= o && s.push(e);
                        if (1 === t && a > 0) {
                            if (i.curLayer + 1 <= i.maxLayer) {
                                r = i.curLayer;
                                let e = i.layers[r];
                                const t = e.adsArr[e.curIndex], a = t;
                                n = s.includes(t) ? "冷却" : e.adsArr[e.curIndex], LOG("AD", `第${r + 1}梯度`, `对比数据前id:${a}`, `当前ID:${n}`, `当前失败的key:${JSON.stringify(s)}`, JSON.stringify(m.failObject), "冷却处理"), m.nativeAdvIdsConfig.curLayer++, m.nativeAdvIdsConfig.layers[r].curIndex = (e.curIndex + 1) % e.maxIndex
                            }
                            return {id: n, layer: r}
                        }
                        if (i.curLayer + 1 <= i.maxLayer) {
                            r = i.curLayer;
                            let e = i.layers[r];
                            n = e.adsArr[e.curIndex], m.nativeAdvIdsConfig.curLayer++, m.nativeAdvIdsConfig.layers[r].curIndex = (e.curIndex + 1) % e.maxIndex
                        }
                        return {id: n, layer: r}
                    }

                    function O(e = !1) {
                        m.nativeBannerId.curIndex = e ? 0 : m.nativeBannerId.curIndex;
                        let t = JSON.parse(JSON.stringify(m.nativeBannerId)), a = "";
                        return t.curIndex + 1 <= t.maxIndex && (a = m.nativeBannerId.adsArr[m.nativeBannerId.curIndex], m.nativeBannerId.curIndex++), {
                            id: a,
                            layer: 0
                        }
                    }

                    function S(e, t = !1) {
                        if ("screen" === e) {
                            m.nativeScreen.curLayer = t ? 0 : m.nativeScreen.curLayer;
                            let e = JSON.parse(JSON.stringify(m.nativeScreen)), a = "", o = 0;
                            if (e.curLayer + 1 <= e.maxLayer) {
                                o = e.curLayer;
                                let t = e.layers[o];
                                a = t.adsArr[t.curIndex], m.nativeScreen.curLayer++, m.nativeScreen.layers[o].curIndex = (t.curIndex + 1) % t.maxIndex
                            }
                            return {id: a, layer: o}
                        }
                        {
                            m.nativeChapter.curLayer = t ? 0 : m.nativeChapter.curLayer;
                            let e = JSON.parse(JSON.stringify(m.nativeChapter)), a = "", o = 0;
                            if (e.curLayer + 1 <= e.maxLayer) {
                                o = e.curLayer;
                                let t = e.layers[o];
                                a = t.adsArr[t.curIndex], m.nativeChapter.curLayer++, m.nativeChapter.layers[o].curIndex = (t.curIndex + 1) % t.maxIndex
                            }
                            return LOG(a, "章首id"), {id: a, layer: o}
                        }
                    }

                    function T(e = !1) {
                        console.log(e, "isFirstLoad"), m.templateAdvIdsConfig.curLayer = e ? 0 : m.templateAdvIdsConfig.curLayer;
                        let t = JSON.parse(JSON.stringify(m.templateAdvIdsConfig));
                        const {cool_switch: a, cool_time: o, fail_num: i} = m.adNewPostionConfig.cool_config;
                        let n = "", r = 0, s = [];
                        for (let e in m.failObject) m.failObject[e] >= i && s.push(e);
                        if (1 === a && o > 0) {
                            if (t.curLayer + 1 <= t.maxLayer) {
                                r = t.curLayer;
                                let e = t.layers[r];
                                const a = e.adsArr[e.curIndex], o = a;
                                n = s.includes(a) ? "冷却" : e.adsArr[e.curIndex], LOG("AD", `模版第${r + 1}梯度`, `对比数据前id:${o}`, `当前ID:${n}`, `当前失败的key:${JSON.stringify(s)}`, JSON.stringify(m.failObject), "冷却处理"), m.templateAdvIdsConfig.curLayer++, m.templateAdvIdsConfig.layers[r].curIndex = (e.curIndex + 1) % e.maxIndex
                            }
                            return {id: n, layer: r}
                        }
                        if (t.curLayer + 1 <= t.maxLayer) {
                            r = t.curLayer;
                            let e = t.layers[r];
                            n = e.adsArr[e.curIndex], m.templateAdvIdsConfig.curLayer++, m.templateAdvIdsConfig.layers[r].curIndex = (e.curIndex + 1) % e.maxIndex
                        }
                        return console.log(n, "nextLayer444"), {id: n, layer: r}
                    }

                    let b;

                    function D(e, t) {
                        var a = new Array;
                        for (var o in e) a.push(e[o]);
                        for (var i = new Array, n = 0; n < t && a.length > 0; n++) {
                            var r = Math.floor(Math.random() * a.length);
                            i[n] = a[r], a.splice(r, 1)
                        }
                        return i
                    }

                    function I(e) {
                        var t = new Array;
                        for (var a in e) t.push(e[a]);
                        return function (e) {
                            for (var t, a, o = e.length; o > 0;) t = Math.floor(Math.random() * o), a = e[o - 1], e[o - 1] = e[t], e[t] = a, o--;
                            return LOG("AD", e), e
                        }(t)
                    }

                    function w(e, t = !1, a = {}) {
                        let o = null, {
                            scenario: i,
                            sceneCode: n,
                            adType: r,
                            adTimes: s,
                            popName: d,
                            popGroupName: p,
                            requestNum: c,
                            actionCode: u,
                            nativeAdvObj: l
                        } = e, _ = {};
                        if ("boost" === u) {
                            const {cool_switch: e, cool_time: o, fail_num: i} = m.adNewPostionConfig.cool_config;
                            1 == e && o > 0 ? (_ = a, function () {
                                if (!(m.adNewPostionConfig.cool_config && m.adNewPostionConfig.cool_config.cool_switch)) return !1;
                                let e;
                                e = 1 == Object.keys(m.failObjectCycle).length ? m.adNewPostionConfig.cool_config.fail_num - 1 : m.adNewPostionConfig.cool_config.fail_num;
                                for (let t in m.failObjectCycle) Number(JSON.stringify(m.failObjectCycle[t])) >= e && (k[t] ? LOG("AD", m.failObjectCycle, "native-boost-list倒计时中") : k[t] = setTimeout((() => {
                                    m.failObjectCycle[t] >= m.adNewPostionConfig.cool_config.fail_num && (m.failObjectCycle[t] = 0), LOG("AD", m.failObjectCycle, "native-boost-list倒计时结束"), k[t] = null, clearTimeout(k[t])
                                }), 1e3 * m.adNewPostionConfig.cool_config.cool_time))
                            }()) : _ = V(t, !0), LOG("AD", "getBoostAdId XmTemplateAd", t, _)
                        } else _ = a && a.id && 1 != a.id ? a : T(t), l && "冷却" !== l.id && (m.failObject[l.id] ? m.failObject[l.id]++ : m.failObject[l.id] = 1), x();
                        if (LOG("小米模版广告", "getNextXiaomiAdData", _, u), _.id) {
                            var f = new Object({
                                id: _.id,
                                ad_network: 1,
                                ad_type: "模版",
                                scenario: i,
                                type: "manu_ad",
                                popName: d,
                                popGroupName: p,
                                requestNum: c,
                                actionCode: u
                            });
                            m.adRequestNum++, U_report("request", Object.assign(f, {
                                result: "发起请求",
                                adRequestNum: m.adRequestNum
                            }));
                            let e = {adId: ""}, t = {};
                            t.id = _.id, t.layer = _.layer, t.adMethod = "2.0", t.brand = "xiaomi", t.advDetail = e, t.title = "", t.type = "manu_ad", t.clickBtnTxt = "立即查看", t.source = "", t.materialUrl = m.defaultAdImg, t.ad_network = 1, t.ad_type = "模版", t.is_ad_click = "no", t.adType = r, t.adTimes = s, t.sceneCode = n, t.popName = d, t.popGroupName = p, t.requestNum = c, t.ad_style = "", t.scenario = i, t.isUsedAdButton = m.isUsedAdButton, t.adRequestNum = m.adRequestNum, t.isUsedXiaomiButton = m.isUsedXiaomiButton, t.actionCode = u, t.result = "有广告", function (e) {
                                m.adNewPostionConfig.ad_template_ecpm || (m.adNewPostionConfig.ad_template_ecpm = []), e.price = Number(m.adNewPostionConfig.ad_template_ecpm[e.layer] || 0)
                            }(t), o = t
                        }
                        return o
                    }

                    function P(e) {
                        return m.isOpenScreen1 && m.isOpenScreen2 && m.isOpenHome ? 1 === m.adgNum && m.nativeScreen.layers.length > 0 || 2 === m.adgNum && m.nativeScreen.layers.length > 0 ? (LOG("AD", "取开屏", "开屏1,开屏2,章首都开启", m.adgNum), S("screen", e)) : 3 === m.adgNum && m.nativeChapter.layers.length > 0 ? (LOG("AD", "取章首", "开屏1,开屏2,章首都开启", m.adgNum), S("frist", e)) : (LOG("AD", "取原生", "开屏1,开屏2,章首都开启", m.adgNum), v(e)) : m.isOpenScreen1 && m.isOpenScreen2 && !m.isOpenHome ? (LOG("AD", "开屏1,开屏2,章首关闭"), 1 === m.adgNum && m.nativeScreen.layers.length > 0 || 2 === m.adgNum && m.nativeScreen.layers.length > 0 ? S("screen", e) : (LOG("AD", "取原生", "开屏1,开屏2,章首关闭"), v(e))) : m.isOpenScreen1 && !m.isOpenScreen2 && m.isOpenHome ? 1 === m.adgNum && m.nativeScreen.layers.length > 0 ? (LOG("AD", "取开屏", "开屏1,章首开启,开屏2关闭", m.adgNum), S("screen", e)) : 2 === m.adgNum && m.nativeChapter.layers.length > 0 ? (LOG("AD", "取章首", "开屏1,章首开启,开屏2关闭", m.adgNum), S("frist", e)) : (LOG("AD", "取原生", "开屏1,章首开启,开屏2关闭", m.adgNum), v(e)) : !m.isOpenScreen1 || m.isOpenScreen2 || m.isOpenHome ? !m.isOpenScreen1 && m.isOpenHome ? 1 === m.adgNum && m.nativeChapter.layers.length > 0 ? (LOG("AD", "取章首", "仅开启章首", m.adgNum), S("frist", e)) : (LOG("AD", "取原生", "仅开启章首", m.adgNum), v(e)) : v(e) : 1 === m.adgNum && m.nativeScreen.layers.length > 0 ? (LOG("AD", "取开屏", "仅开屏1开启", m.adgNum), S("screen", e)) : (LOG("AD", "取原生", "仅开屏1开启", m.adgNum), v(e))
                    }

                    async function N(e, t, a = true) {
                        LOG("AD", "getNewNativeAdv", e);
                        let {
                            scenario: i,
                            sceneCode: n,
                            adType: r,
                            adTimes: s,
                            popName: d,
                            popGroupName: p,
                            requestNum: c,
                            actionCode: l
                        } = e, _ = {};
                        const f = 7 === r && AD_UTILS.isXM2(m.deviceInfo.brand),
                            g = TACTICS_SDK.getGlobalData("configInfo").config.priorty_adid_mode,
                            h = g ? Number(g.val) : 0;
                        let y = !1;
                        if (!POP_TOOLS.getPriorityAdReq() && 1 === h && m.priorityNativeIds.layers.length > 0) _ = function (e = !1) {
                            m.priorityNativeIds.curLayer = e ? 0 : m.priorityNativeIds.curLayer;
                            let t = JSON.parse(JSON.stringify(m.priorityNativeIds)), a = "", o = 0;
                            if (t.curLayer + 1 <= t.maxLayer) {
                                o = t.curLayer;
                                let e = t.layers[o];
                                a = e.adsArr[e.curIndex], m.priorityNativeIds.curLayer++, m.priorityNativeIds.layers[o].curIndex = (e.curIndex + 1) % e.maxIndex
                            }
                            return {id: a, layer: o}
                        }(a), POP_TOOLS.setPriorityAdReq(), POP_TOOLS.clearPriorityTimer(), LOG("AD", "getNativePriorityAdId==>", _), y = !0; else if (!POP_TOOLS.getPriorityAdReq() && 2 === h && m.priorityTemplateIds.layers.length > 0) _ = function (e = !1) {
                            m.priorityTemplateIds.curLayer = e ? 0 : m.priorityTemplateIds.curLayer;
                            let t = JSON.parse(JSON.stringify(m.priorityTemplateIds)), a = "", o = 0;
                            if (t.curLayer + 1 <= t.maxLayer) {
                                o = t.curLayer;
                                let e = t.layers[o];
                                a = e.adsArr[e.curIndex], m.priorityTemplateIds.curLayer++, m.priorityTemplateIds.layers[o].curIndex = (e.curIndex + 1) % e.maxIndex
                            }
                            return {id: a, layer: o}
                        }(a), POP_TOOLS.setPriorityAdReq(), POP_TOOLS.clearPriorityTimer(), LOG("AD", "getTemplatePriorityAdId==>", _), y = !0; else if ("AD_SCENE_READ_BANNER" == n) _ = O(a), LOG("AD", "getNextNativeBannerAdId==>", _); else if ("boost" === l) _ = V(a, f), LOG("AD", "getBoostAdId", _); else if (f) {
                            const {cool_switch: e, cool_time: t, fail_num: o} = m.adNewPostionConfig.cool_config;
                            1 == e && t > 0 ? _.id = "1" : (_ = T(a), LOG("AD", "getNextTemplateAdId", _))
                        } else "PAGE_ENTRY" === l ? (_ = function (e = !1) {
                            m.nativePageEntry.curLayer = e ? 0 : m.nativePageEntry.curLayer;
                            let t = JSON.parse(JSON.stringify(m.nativePageEntry)), a = "", o = 0;
                            if (t.curLayer + 1 <= t.maxLayer) {
                                o = t.curLayer;
                                let e = t.layers[o];
                                a = e.adsArr[e.curIndex], m.nativePageEntry.curLayer++, m.nativePageEntry.layers[o].curIndex = (e.curIndex + 1) % e.maxIndex
                            }
                            return {id: a, layer: o}
                        }(a), LOG("AD", "getNextNativePageEntryAdId", _)) : "PAGE_BACK" === l ? (_ = function (e = !1) {
                            m.nativePageBack.curLayer = e ? 0 : m.nativePageBack.curLayer;
                            let t = JSON.parse(JSON.stringify(m.nativePageBack)), a = "", o = 0;
                            if (t.curLayer + 1 <= t.maxLayer) {
                                o = t.curLayer;
                                let e = t.layers[o];
                                a = e.adsArr[e.curIndex], m.nativePageBack.curLayer++, m.nativePageBack.layers[o].curIndex = (e.curIndex + 1) % e.maxIndex
                            }
                            return {id: a, layer: o}
                        }(!1), LOG("AD", "getNextNativePageBackAdId", _)) : m.isOpenScreen1 || m.isOpenHome ? ("nextAdId" === l && (a = !1), _ = P(a), LOG("AD", "getNextAdId1222==>", _)) : ("nextAdId" === l && (a = !1), _ = v(a), LOG("AD", "getNextAdId==>", _));
                        if (_.id && "冷却" !== _.id) {
                            LOG("AD", "创建广告组件");
                            var A = new Object({
                                id: _.id,
                                ad_network: 1,
                                ad_type: f ? "模版" : "原生",
                                scenario: i,
                                type: "manu_ad",
                                popName: d,
                                popGroupName: p,
                                requestNum: c,
                                actionCode: l
                            });
                            f || (m.adRequestNum++, U_report("request", Object.assign(A, {
                                result: "发起请求",
                                adRequestNum: m.adRequestNum
                            })));
                            let a = await new Promise(((t, a) => {
                                if ("vivo" == m.deviceInfo.brand && void 0 !== $app_require$("@app-module/service.ad").preloadAd && m.deviceInfo.platformVersionCode > 1093) {
                                    let e = !1;
                                    try {
                                        e = $app_require$("@app-module/service.ad").canIUse({type: "feedMultiAd"})
                                    } catch (e) {
                                    }
                                    LOG("AD", "vivo是否支持队列请求", e);
                                    let a = {adUnitId: _.id, type: "native"};
                                    e && (a.adCount = m.vivoAdCount), LOG("AD", "当前位VIVO渠道字段===>", m.vivoChannel), a.channel = m.vivoChannel.replace("@@", i), LOG("AD", "当前位VIVO渠道字段===>", a.channel), $app_require$("@app-module/service.ad").preloadAd(u(u({}, a), {}, {
                                        success: e => {
                                            LOG("AD", "广告ADSDK========>vivo2.0获取广告成功", e);
                                            let a = [];
                                            e.adList.map((e => {
                                                let t = e, u = {};
                                                u.id = _.id, u.layer = _.layer, u.adMethod = "2.0", u.brand = "vivo", u.advDetail = t, u.title = u.advDetail.title, u.type = "manu_ad", u.clickBtnTxt = u.advDetail.clickBtnTxt ? u.advDetail.clickBtnTxt : "立即查看", u.source = u.advDetail.desc, u.materialUrl = B(u.advDetail), u.icon = u.advDetail.icon, u.ad_network = 1, u.ad_type = "原生", u.is_ad_click = "no", u.adType = r, u.adTimes = s, u.sceneCode = n, u.popName = d, u.popGroupName = p, u.requestNum = c, u.ad_style = `${u.advDetail.interactionType}`, u.scenario = i, u.isUsedAdButton = m.isUsedAdButton, u.adRequestNum = m.adRequestNum, u.isPriorityAd = y, o.default.fetch({
                                                    url: u.materialUrl,
                                                    method: "get"
                                                }), u.result = "有广告", U_report("request", u), a.push(u)
                                            })), t(a)
                                        }, fail: (e, a) => {
                                            if (205 === a) {
                                                LOG("AD", "广告ADSDK========>vivo2.0获取广告成功", e);
                                                let a = [];
                                                e.adList.map((e => {
                                                    let t = e, u = {};
                                                    u.id = _.id, u.layer = _.layer, u.adMethod = "2.0", u.brand = "vivo", u.advDetail = t, u.title = u.advDetail.title, u.type = "manu_ad", u.showCount = 1, u.clickBtnTxt = u.advDetail.clickBtnTxt ? u.advDetail.clickBtnTxt : "立即查看", u.source = u.advDetail.desc, u.materialUrl = B(u.advDetail), u.icon = u.advDetail.icon, u.ad_network = 1, u.ad_type = "原生", u.is_ad_click = "no", u.adType = r, u.adTimes = s, u.sceneCode = n, u.popName = d, u.popGroupName = p, u.requestNum = c, u.ad_style = `${u.advDetail.interactionType}`, u.scenario = i, u.isUsedAdButton = m.isUsedAdButton, u.adRequestNum = m.adRequestNum, u.isPriorityAd = y, o.default.fetch({
                                                        url: u.materialUrl,
                                                        method: "get"
                                                    }), u.result = "有广告", U_report("request", u), a.push(u)
                                                })), t(a)
                                            } else LOG("AD", "广告ADSDK========>vivo2.0获取广告失败", e), A.result = `无广告${e.errCode ? e.errCode : "错误码获取失败"}`, U_report("request", A), m.failObject[_.id] ? m.failObject[_.id]++ : m.failObject[_.id] = 1, LOG("失败的key", m.failObject), t(!1)
                                        }
                                    }))
                                } else if ("oppo" == m.deviceInfo.brand && m.deviceInfo.platformVersionCode > 1091) {
                                    let e = {};
                                    e.id = _.id, e.layer = _.layer, e.adMethod = "2.0", e.brand = "oppo", e.title = "", e.type = "manu_ad", e.showCount = 1, e.clickBtnTxt = "领取奖励", e.source = "", e.materialUrl = m.defaultAdImg, e.ad_network = 1, e.ad_type = "原生", e.is_ad_click = "no", e.isAdLoadError = !0, e.result = "无广告", e.adType = r, e.adTimes = s, e.sceneCode = n, e.scenario = i, e.popName = d, e.popGroupName = p, e.requestNum = c, e.ad_style = "", e.isUsedAdButton = m.isUsedAdButton, e.adRequestNum = m.adRequestNum, e.isPriorityAd = y, t([e])
                                } else if (AD_UTILS.isXM2(m.deviceInfo.brand) && void 0 !== $app_require$("@app-module/service.ad").preloadAd) if (f) {
                                    let a = w(e, !0, _);
                                    a.isPriorityAd = y, t([a])
                                } else {
                                    let e = {adUnitId: _.id, adCount: 1, type: "native"};
                                    $app_require$("@app-module/service.ad").preloadAd(u(u({}, e), {}, {
                                        success: e => {
                                            let a = [];
                                            e.adList ? (LOG("AD", "广告ADSDK========>xiaomi2.0获取广告成功", e), e.adList.map((e => {
                                                let t = e, u = {};
                                                u.id = _.id, u.layer = _.layer, u.adMethod = "2.0", u.brand = "xiaomi", u.advDetail = t, u.title = u.advDetail.title, u.type = "manu_ad", u.clickBtnTxt = u.advDetail.clickBtnTxt ? u.advDetail.clickBtnTxt : "立即查看", u.source = u.advDetail.desc, u.materialUrl = B(u.advDetail), u.icon = u.advDetail.icon, u.ad_network = 1, u.ad_type = "原生", u.is_ad_click = "no", u.adType = r, u.adTimes = s, u.sceneCode = n, u.popName = d, u.popGroupName = p, u.requestNum = c, u.ad_style = `${u.advDetail.interactionType}`, u.scenario = i, u.isUsedAdButton = m.isUsedAdButton, u.adRequestNum = m.adRequestNum, u.isUsedXiaomiButton = m.isUsedXiaomiButton, o.default.fetch({
                                                    url: u.materialUrl,
                                                    method: "get"
                                                }), u.actionCode = l, function (e, t, a) {
                                                    "vivoTag" === e ? (a.layer = 0, a.priority = 1e-4, a.price = t.price || 0) : (m.adNewPostionConfig.ad_protogenesis_ecpm || (m.adNewPostionConfig.ad_protogenesis_ecpm = []), a.priority = 0, a.price = Number(m.adNewPostionConfig.ad_protogenesis_ecpm[a.layer] || 0))
                                                }(l, t, u), u.result = "有广告", u.isPriorityAd = y, U_report("request", u), a.push(u)
                                            })), t(a)) : (LOG("AD", `广告ADSDK========>${m.deviceInfo.brand}2.0获取广告失败`, e.errCode), A.result = `无广告${e.errCode ? e.errCode : "错误码获取失败"}`, A.actionCode = l, U_report("request", A), m.failObject[_.id] ? m.failObject[_.id]++ : m.failObject[_.id] = 1, t(!1))
                                        }, fail: function (e, a) {
                                            const o = e.errCode || a;
                                            LOG("AD", `广告ADSDK========>${m.deviceInfo.brand}2.0获取广告失败`, e, a, o), A.result = `无广告${o || "错误码获取失败"}`, A.actionCode = l, U_report("request", A), m.failObject[_.id] ? m.failObject[_.id]++ : m.failObject[_.id] = 1, t(!1)
                                        }
                                    }))
                                } else {
                                    let e = m.serviceAd && $app_require$("@app-module/service.ad").createNativeAd({adUnitId: _.id});
                                    "object" == typeof e ? (e.id = _.id, e.layer = _.layer, e.adMethod = "0.0", e.brand = m.deviceInfo.brand, e && e.onLoad((a => {
                                        LOG("AD", `广告ADSDK========>${m.deviceInfo.brand}0.0获取广告成功`, a), e.advDetail = a.adList && a.adList[0], e.type = "manu_ad", e.clickBtnTxt = e.advDetail.clickBtnTxt ? e.advDetail.clickBtnTxt : "立即查看", "huawei" == m.deviceInfo.brand ? (e.source = e.advDetail.title, e.title = e.advDetail.source) : (e.source = e.advDetail.desc, e.title = e.advDetail.title), e.materialUrl = B(e.advDetail), e.icon = e.advDetail.icon, e.ad_network = 1, e.ad_type = "原生", e.is_ad_click = "no", e.adType = r, e.adTimes = s, e.sceneCode = n, e.scenario = i, e.popName = d, e.popGroupName = p, e.requestNum = c, e.isUsedAdButton = m.isUsedAdButton, e.adRequestNum = m.adRequestNum, e.isPriorityAd = y, o.default.fetch({
                                            url: e.materialUrl,
                                            method: "get"
                                        }), e.ad_style = `${e.advDetail.interactionType}`, "huawei" == m.deviceInfo.brand && (e.ad_style = `${e.advDetail.creativeType}`), e.result = "有广告", U_report("request", e), e && e.reportAdShow({adId: e.advDetail.adId}), LOG("AD", "nativeAdvObj", e), e.offLoad(), e.offError(), t([e])
                                    })), e.onError((a => {
                                        LOG("AD", `广告ADSDK========>${m.deviceInfo.brand}0.0获取广告失败`, a), A.result = `无广告${a.errCode ? a.errCode : "错误码获取失败"}`, U_report("request", A), e.offLoad(), e.offError(), e.destroy(), m.failObject[_.id] ? m.failObject[_.id]++ : m.failObject[_.id] = 1, LOG("失败的key", m.failObject), t(!1)
                                    })), e.load()) : (LOG("AD", `广告ADSDK========>${m.deviceInfo.brand}0.0获取广告失败`, e), t(!1))
                                }
                            }));
                            if (LOG("AD", "广告ADSDK========>获取的广告", a), a) f || (C = _.id, m.failObject[C] && (m.failObject[C] = 0)), m.manuAdvSourceArr = a.concat(m.manuAdvSourceArr), t && t(); else {
                                const a = TACTICS_SDK.getGlobalData("new_ad_pos") && TACTICS_SDK.getGlobalData("new_ad_pos").config || {};
                                "boost" !== l || a.ad_click_rate_switch ? (await N(e, t, !1), f || L()) : (x(), t && t())
                            }
                        } else "冷却" === _.id || void 0 === _.id ? setTimeout((async () => {
                            await N(e, t, !1)
                        }), 1500) : (LOG("AD", "广告ADSDK========>无可用广告位ID"), t && t());
                        var C
                    }

                    const E = {}, k = {};

                    function x() {
                        if (!m.adNewPostionConfig.cool_config || !m.adNewPostionConfig.cool_config.cool_switch) return !1;
                        for (let e in m.failObject) m.failObject[e] >= m.adNewPostionConfig.cool_config.fail_num && (E[e] ? LOG("AD", JSON.stringify(m.failObject), "倒计时中") : E[e] = setTimeout((() => {
                            m.failObject[e] >= m.adNewPostionConfig.cool_config.fail_num && (m.failObject[e] = 0), LOG("AD", m.failObject, "倒计时结束"), E[e] = null, clearTimeout(E[e])
                        }), 1e3 * m.adNewPostionConfig.cool_config.cool_time))
                    }

                    function L() {
                        if (!m.adNewPostionConfig.cool_config || !m.adNewPostionConfig.cool_config.cool_switch) return !1;
                        for (let e in m.failObject) m.failObject[e] >= m.adNewPostionConfig.cool_config.fail_num && (new s.Countdown).start({
                            startTime: (new Date).getTime(),
                            endTime: (new Date).getTime() + 1e3 * m.adNewPostionConfig.cool_config.cool_time
                        }).then((e => {
                            if (null == e) {
                                for (let e in m.failObject) m.failObject[e] >= m.adNewPostionConfig.cool_config.fail_num && (m.failObject[e] = 0);
                                LOG("AD", m.failObject, "倒计时结束")
                            } else LOG("AD", JSON.stringify(m.failObject), e, "倒计时中")
                        })).catch((e => {
                            console.log(e)
                        }))
                    }

                    function B(e) {
                        let t = "", a = e.icon && "object" != typeof e.icon ? e.icon : "",
                            o = e.imgUrlList && e.imgUrlList[0] ? e.imgUrlList[0] : "";
                        return t = 2 == m.materialType ? a || o : o || a, (t && -1 != t.indexOf(".mp4") || !t || "string" != typeof t) && (t = m.defaultAdImg), t
                    }

                    function R(e, t) {
                        let {scenario: a, sceneCode: o, popName: i, popGroupName: n, requestNum: r} = e;
                        if ("vivo" == m.deviceInfo.brand || "oppo" == m.deviceInfo.brand || "huawei" == m.deviceInfo.brand && m.deviceInfo.platformVersionCode > 1069 || "xiaomi" == m.deviceInfo.brand && m.deviceInfo.platformVersionCode > 1073) if (m.manuAdvSourceArr && m.manuAdvSourceArr[0]) {
                            let e = m.manuAdvSourceArr.splice(0, 1);
                            e[0].scenario = a, e[0].sceneCode = o, e[0].popName = i, e[0].popGroupName = n, e[0].requestNum = r, t && t(e[0])
                        } else N(e, (() => {
                            if (LOG("AD", "广告ADSDK========>广告池数据111", m.manuAdvSourceArr), m.manuAdvSourceArr && m.manuAdvSourceArr[0]) {
                                let e = m.manuAdvSourceArr.splice(0, 1);
                                e[0].scenario = a, e[0].sceneCode = o, t && t(e[0])
                            } else t && t("")
                        }))
                    }

                    function U_report(e, t, a = "btn") {
                        // 检查广告数据的有效性
                        if (!adData || !adData.id || adData.id === "冷却") return;

                        LOG(adData.id, "上报请求id");

                        // 构建上报对象
                        const reportData = {
                            ad_id: adData.id,
                            ad_network: adData.ad_network || 1,
                            ad_type: adData.ad_type || "原生",
                            result: adData.result || "",
                            page_name: adData.scenario || "",
                            ad_position: adData.popName || adData.scenario || "",
                            page_type: adData.popGroupName || adData.scenario || "",
                            duration: `${adData.requestNum || 1}`,
                            ad_style: adData.ad_style || "",
                            adRequestNum: `${adData.adRequestNum || "1"}`,
                            referer: `${adData.referer || ""}`,
                            scene: `${adData.scene || ""}`,
                            utm_term: adData.zhxUupCount > 0 ? "zhx" : "非zhx"
                        };

                        // 特殊处理曝光池
                        if (adData.actionCode === "boost") {
                            reportData.ad_position += "(曝光池)";
                        }

                        const reportSource = source === "btn" ? "按钮" : "素材";

                        // 解构上报对象
                        const {
                            ad_id,
                            ad_network,
                            ad_type,
                            page_name,
                            page_type,
                            ad_position,
                            result,
                            ad_style,
                            adRequestNum,
                            referer,
                            scene,
                            utm_term
                        } = reportData;

                        LOG("AD", "uploadAdInfo==============>", eventType, reportData, source);

                        // 根据事件类型进行不同的上报
                        switch (eventType) {
                            case "request":
                                COMMON_REPORT_UTILS.ad_sdk_request_report(ad_id, ad_network, ad_type, page_name, page_type, ad_position, result, adRequestNum, ad_style);
                                break;
                            case "show":
                                COMMON_REPORT_UTILS.ad_sdk_show_report(ad_id, ad_network, ad_type, page_name, page_type, ad_position, adRequestNum, ad_style, result, q(adData), `${adData.layer + 1}`);
                                break;
                            case "click":
                                COMMON_REPORT_UTILS.ad_sdk_click_report(ad_id, ad_network, ad_type, page_name, page_type, ad_position, adRequestNum, ad_style, scene, q(adData), `${adData.layer + 1}`, utm_term);
                                break;
                            case "success":
                                reportData.event_name = "视频广告播放完成SDK";
                                reportData.event_id = "ad_sdk_success";
                                break;
                            case "incomplete":
                                reportData.event_name = "视频广告播放未完成SDK";
                                reportData.event_id = "ad_sdk_incomplete";
                                break;
                            case "install":
                                COMMON_REPORT_UTILS.ad_sdk_install_report(ad_id, ad_network, ad_type, page_name, page_type, ad_position, reportSource, ad_style);
                                break;
                            case "take":
                                COMMON_REPORT_UTILS.ad_sdk_take(reportData, adData.pageName);
                                break;
                        }
                    }

                    // if (!t || !t.id || "冷却" == t.id) return;
                    // LOG(t.id, "上报请求id");
                    // let o = new Object;
                    // o.ad_id = t.id, o.ad_network = t.ad_network ? t.ad_network : 1, o.ad_type = t.ad_type ? t.ad_type : "原生", o.result = t.result ? t.result : "", o.page_name = t.scenario ? t.scenario : "", o.ad_position = t.popName ? t.popName : o.page_name, o.page_type = t.popGroupName ? t.popGroupName : o.page_name, o.duration = `${t.requestNum ? t.requestNum : 1}`, o.ad_style = t.ad_style ? t.ad_style : "", o.adRequestNum = `${t.adRequestNum || "1"}`, o.referer = `${t.referer || ""}`, o.scene = `${t.scene || ""}`, o.utm_term = t.zhxUupCount > 0 ? "zhx" : "非zhx", "boost" === t.actionCode && (o.ad_position = o.ad_position + "(曝光池)");
                    // let i = "btn" == a ? "按钮" : "素材", {
                    //     ad_id: n,
                    //     ad_network: r,
                    //     ad_type: s,
                    //     page_name: d,
                    //     page_type: p,
                    //     ad_position: c,
                    //     result: u,
                    //     duration: l,
                    //     ad_style: _,
                    //     adRequestNum: f,
                    //     referer: g,
                    //     scene: m,
                    //     utm_term: h
                    // } = o;
                    // switch (LOG("AD", "uploadAdInfo==============>", e, o, a), e) {
                    //     case"request":
                    //         COMMON_REPORT_UTILS.ad_sdk_request_report(n, r, s, d, p, c, u, f, _);
                    //         break;
                    //     case"show":
                    //         COMMON_REPORT_UTILS.ad_sdk_show_report(n, r, s, d, p, c, f, _, u, q(t), `${t.layer + 1}`);
                    //         break;
                    //     case"click":
                    //         COMMON_REPORT_UTILS.ad_sdk_click_report(n, r, s, d, p, c, i, f, _, m, q(t), `${t.layer + 1}`, h);
                    //         break;
                    //     case"success":
                    //         o.event_name = "视频广告播放完成SDK", o.event_id = "ad_sdk_success";
                    //         break;
                    //     case"incomplete":
                    //         o.event_name = "视频广告播放未完成SDK", o.event_id = "ad_sdk_incomplete";
                    //         break;
                    //     case"install":
                    //         COMMON_REPORT_UTILS.ad_sdk_install_report(n, r, s, d, p, c, i, f, _);
                    //         break;
                    //     case"take":
                    //         COMMON_REPORT_UTILS.ad_sdk_take(o, t.pageName)
                }
            }

            function G(advConfig, pageName) {
                const creativeTypes = [103, 106, 107, 108, 101, 102, 110];
                const isCreativeTypeIncluded = creativeTypes.includes(advConfig.advDetail.creativeType);
                const appStatus = advConfig.getAppStatus({adId: advConfig.advDetail.adId});

                if (isCreativeTypeIncluded) {
                    if (appStatus !== "INSTALLED") {
                        // 如果应用未安装，推送报告并设置定时器
                        g.push(Object.assign(advConfig, {isReport: false}));

                        if (!_ && !f) {
                            M();
                            f = setTimeout(() => {
                                clearTimeout(_);
                                clearTimeout(f);
                                f = null;
                                _ = null;
                                console.log("onStatusChanged=====555 ");
                            }, 300000); // 5分钟
                        }
                    } else {
                        // 如果应用已唤醒，记录唤醒事件
                        console.log("app_wakeup=====app_wakeup ", advConfig, pageName);
                        COMMON_REPORT_UTILS.app_wakeup(advConfig, pageName);
                    }
                }

                // [103, 106, 107, 108, 101, 102, 110].includes(advConfig.advDetail.creativeType) && ("INSTALLED" != advConfig.getAppStatus({adId: advConfig.advDetail.adId}) ? (g.push(Object.assign(advConfig, {isReport: !1})), _ || (M(), f = setTimeout((() => {
                //     clearTimeout(_), clearTimeout(f), f = null, _ = null, console.log("onStatusChanged=====555 ")
                // }), 3e5))) : (console.log("app_wakeup=====app_wakeup ", advConfig, pageName), COMMON_REPORT_UTILS.app_wakeup(advConfig, pageName)))
            }

            function M() {
                let e = 0;
                console.log("onStatusChanged=====000000 ");
                for (var t = 0; t < g.length; t++) {
                    if (g[t].isReport) {
                        e++;
                        continue
                    }
                    let a = g[t].getAppStatus({adId: g[t].advDetail.adId});
                    console.log("onStatusChanged=====1111 ", a), "INSTALLED" === a && (e++, g[t].isReport = !0, U("install", g[t]), console.log("onStatusChanged=====444 ", a))
                }
                if (g.length == e) return clearTimeout(_), clearTimeout(f), f = null, void (_ = null);
                _ = setTimeout((() => {
                    M()
                }), 5e3)
            }

            let K = {};

            function $() {
                console.log("hideBannerAdv=============>2", m.bannerAd), m.bannerAd && m.bannerAd.show()
            }

            function j() {
                try {
                    m.templateAds.huawei && (m.templateAds.huawei.destroy(), m.templateAds.huawei = null)
                } catch (e) {
                }
            }

            function F(e) {
                let t = (new Date).getTime(), a = m.videoAdDebonceObj[e];
                return a && t - a <= 1e3 ? (LOG("激励视频回调函数防抖false", e), !1) : (m.videoAdDebonceObj[e] = t, !0)
            }

            function q(e) {
                if (!e || e.type !== "manu_ad" || !e.advDetail) {
                    return "";
                }

                const isHuaweiDevice = m.deviceInfo && m.deviceInfo.brand === "huawei";
                const isPlatformVersionValid = isHuaweiDevice && m.deviceInfo.platformVersionCode > 1077;
                const isCreativeTypeValid = [103, 106, 107, 108, 101, 102, 110].includes(e.advDetail.creativeType);

                if (isPlatformVersionValid && isCreativeTypeValid) {
                    return e.getAppStatus({adId: e.advDetail.adId}) === "INSTALLED" ? "$app唤醒" : "$下载";
                }

                if (e.advDetail.appInfo && !isHuaweiDevice) {
                    return e.advDetail.appInfo.appName ? e.advDetail.appInfo.appName : "-";
                }

                return "";
                // return e && "manu_ad" == e.type && e.advDetail && m.deviceInfo && "huawei" == m.deviceInfo.brand && m.deviceInfo.platformVersionCode > 1077 && [103, 106, 107, 108, 101, 102, 110].includes(e.advDetail.creativeType) ? "INSTALLED" === e.getAppStatus({adId: e.advDetail.adId}) ? "$app唤醒" : "$下载" : e && "manu_ad" == e.type && e.advDetail && e.advDetail.appInfo && m.deviceInfo && "huawei" !== m.deviceInfo.brand ? e.advDetail.appInfo.appName ? `${e.advDetail.appInfo.appName}` : "-" : ""
            }

            function V(e, t) {
                let a = {id: ""};
                const o = TACTICS_SDK.getGlobalData("new_ad_pos") && TACTICS_SDK.getGlobalData("new_ad_pos").ad_circulate_config;
                let i = null;
                i = t ? o && o.templateAdIds : o && o.adIds;
                const {cool_switch: n, cool_time: r, fail_num: s} = m.adNewPostionConfig.cool_config;
                let d = [];
                if (t) for (let e in m.failObjectCycle) m.failObjectCycle[e] >= s && d.push(e); else for (let e in m.failObject) m.failObject[e] >= s && d.push(e);
                if (i && (a = (TACTICS_SDK.getGlobalData("new_ad_pos") && TACTICS_SDK.getGlobalData("new_ad_pos").config || {}).ad_click_rate_switch ? t ? function (e = !1) {
                    m.templateAdIds.curIndex = e ? 0 : m.templateAdIds.curIndex;
                    let t = JSON.parse(JSON.stringify(m.templateAdIds)), a = "";
                    return t.curIndex + 1 <= t.maxIndex && (a = m.templateAdIds.adsArr[m.templateAdIds.curIndex], m.templateAdIds.curIndex++), {
                        id: a,
                        layer: 0
                    }
                }(e) : function (e = !1) {
                    m.nativeBoost.curIndex = e ? 0 : m.nativeBoost.curIndex;
                    let t = JSON.parse(JSON.stringify(m.nativeBoost)), a = "";
                    return t.curIndex + 1 <= t.maxIndex && (a = m.nativeBoost.adsArr[m.nativeBoost.curIndex], m.nativeBoost.curIndex++), {
                        id: a,
                        layer: 0
                    }
                }(e) : {id: D(i.split(","), 1)[0]}, 1 === n && r > 0)) {
                    let e = a.id;
                    d.includes(e) && (e = "冷却"), LOG("AD", `循环补量对比数据前id:${a.id}`, `当前ID:${e}`, `当前失败的key:${JSON.stringify(d)}`, JSON.stringify(m.failObjectCycle), "循环补量冷却处理"), a.id = e
                }
                return a
            }

            async function H(e, t, a = !0) {
                let {
                    scenario: o,
                    sceneCode: i,
                    adType: n,
                    adTimes: r,
                    popName: s,
                    popGroupName: d,
                    requestNum: p
                } = e;
                LOG("YLH_AD", "getYlhAdv", e);
                let c = z(a);
                if (LOG("YLH_AD", "getNextYlhAdId", c), c && c.id) {
                    let a = {
                        count: 1,
                        appId: m.adNewPostionConfig.ylh_product_id,
                        placementId: c.id,
                        recommendation: 0,
                        ad_type: "优量汇"
                    };
                    3 === AD_SDK_UTILS.getEcpmType() && (a.ad_type = "优量汇bidding");
                    let u = await new Promise(((e, t) => {
                        l.YLHSDK.onYlhReady((() => {
                            U("request", Object.assign({}, a, {
                                result: "发起请求",
                                adRequestNum: m.adRequestNum
                            })), l.YLHSDK.loadFeedAd(a).then((t => {
                                t ? (t = t.map((e => {
                                    let t = {};
                                    return t.price = e.getECPM(), t.id = c.id, t.advDetail = e, t.adId = e.id, t.materialUrl = e.img, t.btnTxt = e.isApp ? "立即下载" : "查看详情", t.size = e.pkgSizeBytes ? `${(e.pkgSizeBytes / 1024 / 1024).toFixed(2)}MB` : "0MB", t.layer = c.layer, t.ad_type = a.ad_type + t.price, t.showCount = 1, t.ad_network = 18, t.type = "ylh_ad", t.is_ad_click = "no", t.adType = n, t.adTimes = r, t.sceneCode = i, t.popName = s, t.popGroupName = d, t.requestNum = p, t.brand = "xiaomi", t.scenario = o, t.adRequestNum = m.adRequestNum, t.result = "有广告", t.isUsedAdButton = m.isUsedAdButton, U("request", t), t
                                })), e(t)) : e(!1)
                            })).catch((t => {
                                LOG("YLH_AD", t), e()
                            }))
                        }))
                    }));
                    u ? (LOG("YLH_AD", "优量汇获取广告成功", u), m.ylhAdvSourceArr = u.concat(m.ylhAdvSourceArr), t && t()) : (LOG("YLH_AD", "优量汇获取广告失败"), U("request", Object.assign({result: "无广告"}, a, e)), await H(e, t, !1))
                } else LOG("YLH_AD", "广告ylhSDK========>无可用广告位ID"), t && t()
            }

            function z(e = !1) {
                m.ylhAdIds.curIndex = e ? 0 : m.ylhAdIds.curIndex;
                let t = JSON.parse(JSON.stringify(m.ylhAdIds)), a = "";
                return t.curIndex + 1 <= t.maxIndex && (a = m.ylhAdIds.adsArr[m.ylhAdIds.curIndex], m.ylhAdIds.curIndex++), {
                    id: a,
                    layer: 0
                }
            }

            let J = !1;
            const Y = {
                initSdk: function (e) {
                    return LOG("AD", "initSdk", e), new Promise(((t, a) => {
                        if (2 == m.initStatus && !e.isCheckStatus) return m.pageUrl = e.pageUrl ? e.pageUrl : "", e && e.success && e.success(), t();
                        if (!e.deviceInfo || !e.pkg || !e.adNewPostionConfig) return console.error("ADNEWSDK===>初始化部分必传字段为空，请检查"), e && e.fail && e.fail(), a();
                        !function (e) {
                            var t;
                            LOG("AD", "assignParame==>arguments", e), m.initStatus = 1, m.manuAdvSourceArr = [], m.nativeAdvIdArr = [], m.bqtAdIdArr = [], m.kdxfAdIdArr = [];
                            let a = e.deviceInfo, o = a.brand && a.brand.toLowerCase();
                            o = "honor" == o || "huawei" == o ? "huawei" : "redmi" == o || "xiaomi" == o || "小米" == o || "Redmi" == o || "小米红米" == o ? "xiaomi" : "oppo" == o || "realme" == o || "oneplus" == o ? "oppo" : "vivo" == o ? "vivo" : "other", a.brand = o, m.deviceInfo = a, m.pkg = e.pkg, m.qudao = e.qudao ? e.qudao : "NULL", m.link_id = e.link_id ? e.link_id : "NULL", m.ad_plan_id = e.adPlanId ? e.adPlanId : "NULL", m.ad_group_id = e.adGroupId ? e.adGroupId : "NULL", m.source_pkg = e.sourcePkg ? e.sourcePkg : "NULL", m.utm_content = e.utm_content ? e.utm_content : "NULL", m.unionid = e.unionid ? e.unionid : "NULL", m.tacticsName = e.tacticsName ? e.tacticsName : "", m.pageUrl = e.pageUrl ? e.pageUrl : "", m.vivoChannelFilter = e.vivoChannelFilter, m.materialType = null !== (t = e.materialType) && void 0 !== t ? t : 2, m.applicationInstall = e.applicationInstall ? e.applicationInstall : 1, m.vivoChannel = function () {
                                if (LOG("AD", "joinVivoChannelParams", m.vivoChannelFilter), "vivo" !== m.deviceInfo.brand) return "";
                                if (m.vivoChannelFilter && "object" == typeof m.vivoChannelFilter) {
                                    let e = "";
                                    for (let [t, a] of Object.entries(m.vivoChannelFilter)) if (LOG("AD", [t, a]), a) switch (t) {
                                        case"campaign_id_status":
                                            e = e + "|" + m.ad_plan_id;
                                            break;
                                        case"channel_status":
                                            e = e + "|" + m.qudao;
                                            break;
                                        case"link_status":
                                            e = e + "|" + m.link_id;
                                            break;
                                        case"site_status":
                                            e = e + "|" + m.unionid;
                                            break;
                                        case"source_pkg_status":
                                            e = e + "|" + m.source_pkg;
                                            break;
                                        case"utm_content_status":
                                            e = e + "|" + m.utm_content;
                                            break;
                                        case"ad_scene_status":
                                            e += "|@@";
                                            break;
                                        case"ad_group_id":
                                            e = e + "|" + m.ad_group_id
                                    } else e += "|NA";
                                    return "" == e ? "|||||||" : e.substring(1)
                                }
                                return "|||||||"
                            }(), m.isUsedAdButton = e.isUsedAdButton && a.platformVersionCode >= 1100 && "huawei" === a.brand ? e.isUsedAdButton : 0;
                            const i = TACTICS_SDK.getGlobalData("configInfo").config.is_used_xiaomi_button && Number(TACTICS_SDK.getGlobalData("configInfo").config.is_used_xiaomi_button.val);
                            m.isUsedXiaomiButton = i && "xiaomi" === a.brand && DEVICE_UTILS.getHost().versionCode >= 11060002 ? i : 3, m.adNewPostionConfig = e.adNewPostionConfig, m.isBqtCanShowDialog = e.isBqtCanShowDialog || 0, LOG("AD", "joinVivoChannelParams", m, m.vivoChannel, e.isUsedAdButton, a.platformVersionCode, a.brand)
                        }(e), function () {
                            let e = TACTICS_SDK.getGlobalData("configInfo").config.is_open_homeScreen_advert;
                            m.isOpenHome = e && Number(e.val) || 0;
                            let t = TACTICS_SDK.getGlobalData("configInfo").config.is_open_screen_ad;
                            m.isOpenScreen1 = t && Number(t.val) || 0;
                            let a = TACTICS_SDK.getGlobalData("configInfo").config.is_open_second_screen_ad;
                            m.isOpenScreen2 = a && Number(a.val) || 0
                        }();
                        try {
                            $app_require$("@app-module/service.ad")
                        } catch (e) {
                            m.serviceAd = !1
                        }
                        !function (e) {
                            if (m.bannerId = m.adNewPostionConfig.ad_banner, m.adNewPostionConfig.ad_native_banner) {
                                let e = I(m.adNewPostionConfig.ad_native_banner.split(","));
                                m.nativeBannerId = {curIndex: 0, maxIndex: e.length, adsArr: e}
                            } else m.nativeBannerId = {curIndex: 0, maxIndex: 0, adsArr: []};
                            if (m.adNewPostionConfig.ad_open_screen) {
                                let e = C(m.adNewPostionConfig.ad_open_screen);
                                m.nativeScreen = e
                            } else m.nativeScreen = {curLayer: 0, maxLayer: 0, layers: []};
                            if (m.adNewPostionConfig.ad_chapter_head) {
                                let e = C(m.adNewPostionConfig.ad_chapter_head);
                                m.nativeChapter = e
                            } else m.nativeChapter = {curLayer: 0, maxLayer: 0, layers: []};
                            if (m.adNewPostionConfig.ad_page_entry) {
                                let e = C(m.adNewPostionConfig.ad_page_entry);
                                m.nativePageEntry = e
                            } else m.nativePageEntry = {curLayer: 0, maxLayer: 0, layers: []};
                            if (m.adNewPostionConfig.ad_page_return) {
                                let e = C(m.adNewPostionConfig.ad_page_return);
                                m.nativePageBack = e
                            } else m.nativePageBack = {curLayer: 0, maxLayer: 0, layers: []};
                            if (m.adNewPostionConfig.ad_template_config) {
                                let e = C(m.adNewPostionConfig.ad_template_config);
                                m.templateAdvIdsConfig = e
                            } else m.templateAdvIdsConfig = {curLayer: 0, maxLayer: 0, layers: []};
                            if (m.adNewPostionConfig.ad_encourage_price) {
                                let e = C(m.adNewPostionConfig.ad_encourage_price);
                                m.encourageIds = e
                            } else m.encourageIds = {curLayer: 0, maxLayer: 0, layers: []};
                            if (m.adNewPostionConfig.ad_circulate_config && m.adNewPostionConfig.ad_circulate_config.adIds) {
                                let e = m.adNewPostionConfig.ad_circulate_config.adIds.split(",");
                                m.nativeBoost = {curIndex: 0, maxIndex: e.length, adsArr: e}
                            } else m.nativeBoost = {curLayer: 0, maxLayer: 0, layers: []};
                            if (m.adNewPostionConfig.ad_circulate_config && m.adNewPostionConfig.ad_circulate_config.templateAdIds) {
                                let e = m.adNewPostionConfig.ad_circulate_config.templateAdIds.split(",");
                                m.templateAdIds = {curIndex: 0, maxIndex: e.length, adsArr: e}
                            } else m.templateAdIds = {curIndex: 0, maxIndex: 0, adsArr: []};
                            if (m.adNewPostionConfig.ylh_ad_bidding) {
                                let e = m.adNewPostionConfig.ylh_ad_bidding.split(",");
                                m.ylhAdIds = {curIndex: 0, maxIndex: e.length, adsArr: e}
                            } else m.ylhAdIds = {curIndex: 0, maxIndex: 0, adsArr: []};
                            if (m.videoId = m.adNewPostionConfig.ad_encourage, m.adNewPostionConfig.config.ad_priority_template) {
                                let e = C(m.adNewPostionConfig.config.ad_priority_template);
                                m.priorityTemplateIds = e
                            } else m.priorityTemplateIds = {curLayer: 0, maxLayer: 0, layers: []};
                            if (m.adNewPostionConfig.config.ad_priority_native) {
                                let e = C(m.adNewPostionConfig.config.ad_priority_native);
                                m.priorityNativeIds = e
                            } else m.priorityNativeIds = {curLayer: 0, maxLayer: 0, layers: []};
                            const t = e.qudao + e.link_id;
                            let a = !1;
                            if (b && b != t && (a = !0), b = t, !m.adArrComputedType || !m.nativeAdvIdsConfig || a) {
                                let e = C(m.adNewPostionConfig.ad_protogenesis);
                                LOG("AD", "computeAdvId=>advIdsConfig", e), m.nativeAdvIdsConfig = e, m.adArrComputedType = !0
                            }
                            m.adNewPostionConfig.baidu_ad && (m.adNewPostionConfig.baidu_ad.baidu_ad_config.map(((e, t) => {
                                let a = e.ad_ids.split(",");
                                m.bqtAdIdArr = m.bqtAdIdArr.concat(a.map((t => ({
                                    id: t,
                                    inUse: !1,
                                    grade: e.temp_id,
                                    appid: m.adNewPostionConfig.baidu_ad.product_id
                                }))))
                            })), LOG("AD", "百度广告位数组", m.bqtAdIdArr)), m.adNewPostionConfig.kdxf_ad && (m.adNewPostionConfig.kdxf_ad.kdxf_ad_config.map((e => {
                                let t = e.ad_ids.split(",");
                                m.kdxfAdIdArr = m.kdxfAdIdArr.concat(t.map((t => ({id: t, grade: e.temp_id}))))
                            })), LOG("AD", "科大讯飞广告位数组", m.kdxfAdIdArr))
                        }(e), m.initStatus = 2, e && e.success && e.success(), t()
                    }))
                }, getManuAdv: async function e(t, a = 0) {
                    if (LOG("AD", "getManuAdv============>", t), 2 == m.initStatus) if (t.sceneCode) switch (t.scenario = t && t.scenario ? t.scenario : "未知", t.adTimes = t && t.adTimes ? t.adTimes : 0, t.adType) {
                        case 1:
                        case 2:
                            R(t, (e => {
                                e ? t && t.success && t.success(e) : t && t.fail && t.fail(t.adType)
                            }));
                            break;
                        case 3:
                            !function (e, t) {
                                if ("vivo" == m.deviceInfo.brand && m.deviceInfo.platformVersionCode < 1070) t && t(""); else {
                                    let {
                                        scenario: a,
                                        sceneCode: o,
                                        adTimes: i,
                                        bqtTempId: n,
                                        popName: r,
                                        popGroupName: s,
                                        requestNum: d
                                    } = e, p = D(m.bqtAdIdArr.filter((e => !e.inUse && e.grade == n)), 1);
                                    if (LOG("AD", "广告ADSDK========>获取百度广告", p, e), m.adRequestNum++, p.length > 0) {
                                        let e = {
                                            bqt_reload_count: 0,
                                            is_auto_play_feed_video_ads: 0,
                                            is_mute_feed_video_ads: 0,
                                            is_request_feed_video_ads: 0,
                                            is_show_second_dialog: m.isBqtCanShowDialog || 0,
                                            is_show_volume_icon: 0,
                                            bqt_template_encode: n,
                                            id: p[0].id,
                                            app_id: p[0].appid,
                                            ad_network: 5,
                                            ad_type: "信息流",
                                            type: "bqt_ad",
                                            adMethod: "2.0",
                                            sceneCode: o,
                                            scenario: a,
                                            adTimes: i,
                                            popName: r,
                                            popGroupName: s,
                                            requestNum: d,
                                            adRequestNum: m.adRequestNum
                                        };
                                        U("request", Object.assign({}, e, {
                                            result: "发起请求",
                                            adRequestNum: m.adRequestNum
                                        })), LOG("AD", "广告ADSDK========>获取百度广告", e), t && t(e)
                                    } else t && t("")
                                }
                            }(t, (e => {
                                e ? t && t.success && t.success(e) : t && t.fail && t.fail(t.adType)
                            }));
                        case 6:
                            !function (e, t) {
                                let {
                                    scenario: a,
                                    sceneCode: o,
                                    adTimes: i,
                                    bqtTempId: n,
                                    popName: r,
                                    popGroupName: s,
                                    requestNum: d
                                } = e, p = D(m.kdxfAdIdArr.filter((e => e.grade == n)), 1);
                                if (LOG("KDXF_AD", "广告ADSDK========>获取科大讯飞广告", n, m.kdxfAdIdArr, p, e), m.adRequestNum++, p.length > 0) {
                                    let e = {
                                        id: p[0].id,
                                        kdxf_template_encode: n,
                                        ad_type: "信息流",
                                        type: "kdxf_ad",
                                        ad_network: 15,
                                        adMethod: "2.0",
                                        sceneCode: o,
                                        scenario: a,
                                        adTimes: i,
                                        popName: r,
                                        popGroupName: s,
                                        requestNum: d,
                                        adRequestNum: m.adRequestNum
                                    };
                                    U("request", Object.assign({}, e, {
                                        result: "发起请求",
                                        adRequestNum: m.adRequestNum
                                    })), LOG("KDXF_AD", "广告ADSDK========>获取科大讯飞广告", e), t && t(e)
                                } else t && t("")
                            }(t, (e => {
                                e ? t && t.success && t.success(e) : t && t.fail && t.fail(t.adType)
                            }));
                            break;
                        case 7:
                            R(t, (e => {
                                e ? t && t.success && t.success(e) : t && t.fail && t.fail(t.adType)
                            }));
                            break;
                        case 9:
                            !function (e, t) {
                                if (!l.YLHSDK) return LOG("YLH_AD", "sdk不支持"), void (t && t(""));
                                let {scenario: a, sceneCode: o, popName: i, popGroupName: n, requestNum: r} = e;
                                if (m.ylhAdvSourceArr && m.ylhAdvSourceArr[0]) {
                                    let e = m.ylhAdvSourceArr.splice(0, 1);
                                    e[0].scenario = a, e[0].sceneCode = o, e[0].popName = i, e[0].popGroupName = n, e[0].requestNum = r, t && t(e[0])
                                } else H(e, (() => {
                                    if (LOG("YLH_AD", "广告ylhsdk========>广告池数据", m.ylhAdvSourceArr), m.ylhAdvSourceArr && m.ylhAdvSourceArr[0]) {
                                        let e = m.ylhAdvSourceArr.splice(0, 1);
                                        e[0].scenario = a, e[0].sceneCode = o, t && t(e[0])
                                    } else t && t("")
                                }))
                            }(t, (e => {
                                e ? t && t.success && t.success(e) : t && t.fail && t.fail(t.adType)
                            }))
                    } else t && t.fail && t.fail("场景code为空"); else if (a < 2) {
                        LOG("AD", `广告ADSDK========>初始化未完，广告重新拿取次数${a + 1}`);
                        let o = setTimeout((() => {
                            e(t, a + 1), clearTimeout(o), o = null
                        }), 50)
                    } else t && t.fail && t.fail("广告sdk还没初始化完")
                }, setManuAdv: function (e) {
                    e && e.id && "function" == typeof e.destroy && e.destroy && e.destroy()
                }, clickManuAdvForBtn: function (advConfig, pageName) {
                    if (LOG("AD", "广告ADSDK========>广告按钮点击", advConfig), advConfig && advConfig.id) {
                        if ("boolean" == typeof advConfig.isAdLoadError && advConfig.isAdLoadError) return;
                        if (advConfig.is_ad_click && "no" != advConfig.is_ad_click || U("click", advConfig, "btn"), "manu_ad" == advConfig.type) {
                            if (A[advConfig.title] = !0, "huawei" == m.deviceInfo.brand && m.deviceInfo.platformVersionCode > 1077) {
                                m.isUsedAdButton || advConfig.startDownload({adId: advConfig.advDetail.adId}), h.adv_data = advConfig;
                                const {context: a, func_name: o, adv_data: i} = h;
                                a && o && i && a[o](i);
                                try {
                                    G(Object.assign({}, advConfig), pageName)
                                } catch (e) {
                                    console.log("onStatusChanged======00000", e)
                                }
                            }
                            if ("xiaomi" == m.deviceInfo.brand) {
                                let t = {
                                    adX: advConfig.adX,
                                    adY: advConfig.adY,
                                    height: advConfig.height,
                                    width: advConfig.width,
                                    downX: advConfig.downX,
                                    downY: advConfig.downY,
                                    upX: advConfig.upX,
                                    upY: advConfig.upY
                                };
                                LOG("AD", "小米回传携带坐标", t), advConfig.reportAdClick && advConfig.reportAdClick(u({adId: advConfig.advDetail.adId}, t))
                            } else advConfig.reportAdClick && advConfig.reportAdClick({adId: advConfig.advDetail.adId})
                        }
                        y = !0
                    }
                }, clickManuAdvForImg: function (e, t) {
                    if (LOG("AD", "广告ADSDK========>广告图片点击", e), e && e.id) {
                        if ("boolean" == typeof e.isAdLoadError && e.isAdLoadError) return;
                        if (e.is_ad_click && "no" != e.is_ad_click || U("click", e, "img"), "manu_ad" == e.type) {
                            if (A[e.title] = !0, "huawei" == m.deviceInfo.brand && m.deviceInfo.platformVersionCode > 1077) {
                                h.adv_data = e;
                                const {context: a, func_name: o, adv_data: i} = h;
                                a && o && i && a[o](i);
                                try {
                                    G(Object.assign({}, e), t)
                                } catch (e) {
                                    console.log("onStatusChanged======00000", e)
                                }
                            }
                            if ("xiaomi" == m.deviceInfo.brand) {
                                let t = {
                                    adX: e.adX,
                                    adY: e.adY,
                                    height: e.height,
                                    width: e.width,
                                    downX: e.downX,
                                    downY: e.downY,
                                    upX: e.upX,
                                    upY: e.upY
                                };
                                LOG("AD", "小米回传携带坐标", t), e.reportAdClick && e.reportAdClick(u({adId: e.advDetail.adId}, t))
                            } else e.reportAdClick && e.reportAdClick({adId: e.advDetail.adId})
                        }
                        y = !0
                    }
                }, pageRedisplay: function (e) {
                    return new Promise(((t, a) => {
                        m.initStatus = 1, m.manuAdvSourceArr = [], m.nativeAdvIdArr && m.nativeAdvIdArr[0] && m.nativeAdvIdArr.map((e => {
                            e.inUse = !1
                        })), m.initStatus = 2, e && e.success && e.success(), t(!0)
                    }))
                }, getVedioAdv: function (e) {
                    return new Promise((async (t, a) => {
                        let o = e && e.scenario ? e.scenario : "未知", i = e && e.popName ? e.popName : "未知",
                            n = e && e.popGroupName ? e.popGroupName : "未知",
                            r = e && e.pageName ? e.pageName : "未知";
                        if (!m.serviceAd || !m.videoId) return e && e.fail && e.fail("不支持广告或未配置广告id"), void a("不支持广告或未配置广告id");
                        var s = new Object({
                            id: m.videoId,
                            ad_network: 1,
                            ad_type: "视频",
                            scenario: o,
                            type: "manu_ad",
                            popName: i,
                            popGroupName: n
                        });
                        m.adRequestNum++, U("request", Object.assign(s, {
                            result: "发起请求",
                            adRequestNum: m.adRequestNum
                        }));
                        let d = await $app_require$("@app-module/service.ad").createRewardedVideoAd({adUnitId: m.videoId});
                        d.onLoad((function (e) {
                            s.result = "有广告", U("request", s), U("take", Object.assign(s, {
                                adRequestNum: m.adRequestNum,
                                pageName: r
                            })), d.show(), d.offError(), d.offLoad()
                        })), d.onError((function (t) {
                            s.result = `无广告${t.errCode ? t.errCode : "错误码获取失败"}`, U("request", s), e && e.fail && e.fail({
                                msg: "请求失败",
                                videoId: m.videoId
                            }), U("take", Object.assign(s, {
                                adRequestNum: m.adRequestNum,
                                pageName: r
                            })), a({
                                msg: "请求失败",
                                videoId: m.videoId
                            }), d.offError(), d.offLoad(), d.destroy()
                        })), "vivo" != m.deviceInfo.brand || m.isCreate ? d.load() : m.isCreate = !0, d.onClose((o => {
                            o.isEnded ? (U("show", Object.assign(s, {result: "播放完成"})), e && e.success && e.success({
                                msg: "播放完成",
                                videoId: m.videoId
                            }), t({
                                msg: "播放完成",
                                videoId: m.videoId
                            })) : (U("show", Object.assign(s, {result: "播放未完成"})), e && e.incomplete && e.incomplete({
                                msg: "播放未完成",
                                videoId: m.videoId
                            }), a({msg: "播放未完成", videoId: m.videoId})), d.offClose()
                        }))
                    }))
                }, setPreloadVedioAdv: function e(t) {
                    return new Promise((async (a, o) => {
                        if (K[t.type] = {ready: t.ready}, !m.videoAd && (m.videoQueue.push(t), m.videoQueue.length > 1)) return;
                        let i = t && t.scenario ? t.scenario : "未知", n = t && t.popName ? t.popName : "未知",
                            r = t && t.popGroupName ? t.popGroupName : "未知",
                            s = t && t.pageName ? t.pageName : "未知";
                        if (m.serviceAd && m.videoId) if (m.callFunctionType = t.type, m.videoAdCallFnObj[t.type] = t, m.videoAd && "vivo" !== m.deviceInfo.brand) m.videoAd.load(); else {
                            if (2 === AD_SDK_UTILS.getEcpmType() && AD_SDK_UTILS.getEcpmCompareTypes().includes("2")) {
                                let e = function (e = !1) {
                                    m.encourageIds.curLayer = e ? 0 : m.encourageIds.curLayer;
                                    let t = JSON.parse(JSON.stringify(m.encourageIds)), a = "", o = 0;
                                    if (t.curLayer + 1 <= t.maxLayer) {
                                        o = t.curLayer;
                                        let e = t.layers[o];
                                        a = e.adsArr[e.curIndex], m.encourageIds.curLayer++, m.encourageIds.layers[o].curIndex = (e.curIndex + 1) % e.maxIndex
                                    }
                                    return {id: a, layer: o}
                                }(!m.videoAdPrice);
                                if (!e.id) return void (m.videoAdPrice ? (m.videoQueue.shift(), "vivo" !== m.deviceInfo.brand && (m.videoAdPrice = 0, m.videoAdCallFnObj[m.callFunctionType].fail({msg: "ecpm 激励视频未配置广告id"}))) : (m.videoAdPrice = 0, LOG("ecpm 激励视频未配置广告id")));
                                m.videoId = e.id, m.videoAdPrice = Number(m.adNewPostionConfig.ad_encourage_ecpm[e.layer] || 0), LOG("ecpm", "videoId", e)
                            }
                            var d = new Object({
                                id: m.videoId,
                                ad_network: 1,
                                ad_type: "视频",
                                scenario: i,
                                type: "manu_ad",
                                popName: n,
                                popGroupName: r
                            });
                            m.adRequestNum++, U("request", Object.assign(d, {
                                result: "发起请求",
                                adRequestNum: m.adRequestNum
                            })), m.videoAd = await $app_require$("@app-module/service.ad").createRewardedVideoAd({adUnitId: m.videoId}), m.videoQueue.shift(), m.videoQueue.length > 0 && e(m.videoQueue[0]), m.isCreate = !1, m.videoAd && m.videoAd.onLoad((function (e) {
                                if (F("onLoad")) {
                                    d.result = "有广告", U("request", d), U("take", Object.assign(d, {
                                        adRequestNum: m.adRequestNum,
                                        pageName: s
                                    }));
                                    try {
                                        for (let e in K) K[e].ready()
                                    } catch (e) {
                                        LOG("video ready", e)
                                    }
                                    m.isVideoReady = !0, m.isVivoLoad = !0
                                }
                            })), m.videoAd && m.videoAd.onError((function (e) {
                                m.isVideoReady = !1, F("onError") && (d.result = `无广告${e.errCode ? e.errCode : "错误码获取失败"}`, U("request", d), m.videoAdCallFnObj[m.callFunctionType].fail({
                                    msg: "请求失败",
                                    error: e
                                }), U("take", Object.assign(d, {
                                    adRequestNum: m.adRequestNum,
                                    pageName: s
                                })), o({
                                    msg: "请求失败",
                                    videoId: m.videoId
                                }), m.videoAd && "vivo" !== m.deviceInfo.brand && (m.videoAd.offError(), m.videoAd.offLoad(), m.videoAd.offClose(), m.videoAd.destroy(), m.videoAd = null, m.videoQueue = []))
                            })), m.isCreate || "vivo" === m.deviceInfo.brand ? (m.isVivoLoad && m.videoAdCallFnObj[m.callFunctionType].ready(), m.isVideoReady = !0) : (m.videoAd && m.videoAd.load(), m.isCreate = !0), m.videoAd && m.videoAd.onClose((function (i) {
                                m.isVideoReady = !1, F("onClose") && (i.isEnded ? (U("show", Object.assign(d, {result: "播放完成"})), m.videoAdCallFnObj[m.callFunctionType].success({
                                    msg: "播放完成",
                                    videoId: m.videoId
                                }), a({
                                    msg: "播放完成",
                                    videoId: m.videoId
                                })) : (U("show", Object.assign(d, {result: "播放未完成"})), m.videoAdCallFnObj[m.callFunctionType].incomplete({
                                    msg: "播放完成",
                                    videoId: m.videoId
                                }), o({
                                    msg: "播放未完成",
                                    videoId: m.videoId
                                })), "huawei" == m.deviceInfo.brand ? (m.videoAd = null, e(t)) : m.videoAd && m.videoAd.load())
                            })), "honor" == m.deviceInfo.brand && m.videoAd && m.videoAd.onReward((function () {
                                m.isVideoReady = !1, F("onClose") && (U("show", Object.assign(d, {result: "播放完成"})), m.videoAdCallFnObj[m.callFunctionType].success({
                                    msg: "播放完成",
                                    videoId: m.videoId
                                }), a({msg: "播放完成", videoId: m.videoId}), m.videoAd && m.videoAd.load())
                            }))
                        } else o("不支持广告或未配置广告id")
                    }))
                }, getPreloadVedioAdv: function (e) {
                    return d.default.setVideoTrigger(!0), new Promise(((t, a) => {
                        m.videoAd ? (m.videoAd.show().then((e => {
                            t(e);
                            const a = TACTICS_SDK.getGlobalData("configInfo");
                            if (!a) return void LOG("激励视频toast弹窗", "没有应用配置");
                            const o = a.config.is_open_video_toast;
                            if (0 === (o ? Number(o.val) : 0)) return void LOG("激励视频toast弹窗", "未开启激励视频toast提示");
                            const i = a.config.video_toast_content, n = i ? i.val : "";
                            "" !== n ? $utils.showToast(n) : LOG("激励视频toast弹窗", "未配置激励视频toast提示内容")
                        })).catch((e => {
                            d.default.setVideoTrigger(!1), a(e)
                        })), setTimeout((() => {
                            d.default.setVideoTrigger(!1), a("timeout")
                        }), 1e3), m.callFunctionType = e) : a(!1)
                    }))
                }, destroyVideoAdv: function () {
                    if (m.videoAd && "vivo" !== m.deviceInfo.brand) {
                        try {
                            m.videoAd.destroy()
                        } catch (e) {
                            console.log("激励视频", e)
                        }
                        m.videoAd = null, m.videoAdDebonceObj.onLoad = null, m.videoQueue = []
                    }
                }, getBannerAdv: function (e) {
                    return new Promise(((t, a) => {
                        if (m.bannerAd) $(), e && e.success && e.success("请求成功"), t("请求成功"); else {
                            let i = e && e.scenario ? e.scenario : "未知", n = {};
                            if ("huawei" == m.deviceInfo.brand && (n = {
                                width: 360,
                                height: 57,
                                left: 0,
                                top: m.deviceInfo.screenHeight / m.deviceInfo.windowWidth * 750 - 170 / m.deviceInfo.screenHeight * m.deviceInfo.windowWidth
                            }), m.bannerId) {
                                m.bannerAd = m.serviceAd && $app_require$("@app-module/service.ad").createBannerAd({
                                    adUnitId: m.bannerId,
                                    style: n
                                });
                                var o = new Object({
                                    ad_type: "横幅",
                                    ad_network: 1,
                                    id: m.bannerId,
                                    scenario: i
                                });
                                "object" == typeof m.bannerAd && (m.bannerAd.show(), m.bannerAd.onLoad((() => {
                                    o.result = "有广告", U("request", o), U("show", o), e && e.success && e.success("请求成功"), t("请求成功"), m.bannerAd.offError(), m.bannerAd.offLoad()
                                })), m.bannerAd.onError((t => {
                                    o.result = `无广告${t.errCode ? t.errCode : "错误码获取失败"}`, U("request", o), e && e.fail && e.fail("请求失败"), a("请求失败"), m.bannerAd.offLoad(), m.bannerAd.offError()
                                })))
                            } else e && e.fail && e.fail("没有banner广告id"), a("没有banner广告id")
                        }
                    }))
                }, hideBannerAdv: function () {
                    console.log("hideBannerAdv=============>1", m.bannerAd), m.bannerAd && m.bannerAd.hide()
                }, showBannerAdv: $, destroyBannerAdv: function () {
                    m.bannerAd && (m.bannerAd.destroy(), m.bannerAd = null)
                }, updatePageUrl: function (e) {
                    m.pageUrl = e || "未知"
                }, updataAdGlobalData: function (e) {
                    try {
                        Object.assign(m, e), LOG("AD", "广告ADSDK========>ad_sdk_global数据更新完成", m, e)
                    } catch (e) {
                        LOG("AD", "广告ADSDK========>ad_sdk_global数据更新失败", e)
                    }
                }, getInsertAdv: function (e) {
                    return new Promise(((t, a) => {
                        let o = e && e.scenario ? e.scenario : "未知";
                        if (m.insertId) {
                            LOG("AD", "1111", m.insertId), m.insertAd = m.serviceAd && $app_require$("@app-module/service.ad").createInterstitialAd({adUnitId: m.insertId});
                            var i = new Object({ad_type: "开屏", ad_network: 1, id: m.insertId, scenario: o});
                            "object" == typeof m.insertAd && (m.insertAd.onLoad((() => {
                                m.insertAd.show(), i.result = "有广告", U("request", i), U("show", i), e && e.success && e.success("请求成功"), t("请求成功"), m.insertAd.offError(), m.insertAd.offLoad()
                            })), m.insertAd.onError((t => {
                                LOG("AD", t), i.result = `无广告${t.errCode ? t.errCode : "错误码获取失败"}`, U("request", i), e && e.fail && e.fail("请求失败"), a("请求失败"), m.insertAd.offLoad(), m.insertAd.offError()
                            })))
                        } else e && e.fail && e.fail("没有插屏广告id"), a("没有插屏广告id")
                    }))
                }, hideInsertAdv: function () {
                    m.insertAd && (m.insertAd.destroy(), m.insertAd = null)
                }, uploadAdInfo: U, setHWAd: function (e, t) {
                    h.context = e, h.func_name = t
                }, clearHWAd: function () {
                    h.adv_data = null, h.context = null, h.func_name = ""
                }, getMaterialUrlByAdData: B, getNextAdId: v, getNextOppoAdData: function (e) {
                    let t = null, {
                        scenario: a,
                        sceneCode: o,
                        adType: i,
                        adTimes: n,
                        popName: r,
                        popGroupName: s,
                        requestNum: d,
                        nativeAdvObj: p
                    } = e, c = {};
                    if ("AD_SCENE_READ_BANNER" == o ? (c = O(!1), LOG("AD", "getNextNativeBannerAdId==>", c)) : m.isOpenScreen1 || m.isOpenHome ? (c = P(!1), LOG("AD", "getNextAdId1222==>", c)) : (c = v(!1), LOG("AD", "getNextOppoAdData==>", c)), "冷却" !== p.id && (m.failObject[p.id] ? m.failObject[p.id]++ : m.failObject[p.id] = 1), L(), c.id) {
                        var u = new Object({
                            id: c.id,
                            ad_network: 1,
                            ad_type: "原生",
                            scenario: a,
                            type: "manu_ad",
                            popName: r,
                            popGroupName: s,
                            requestNum: d
                        });
                        m.adRequestNum++, U("request", Object.assign(u, {
                            result: "发起请求",
                            adRequestNum: m.adRequestNum
                        }));
                        let e = {};
                        e.id = c.id, e.layer = c.layer, e.adMethod = "2.0", e.brand = "oppo", e.title = "", e.type = "manu_ad", e.showCount = 1, e.clickBtnTxt = "领取奖励", e.source = "", e.materialUrl = m.defaultAdImg, e.ad_network = 1, e.ad_type = "原生", e.is_ad_click = "no", e.isAdLoadError = !0, e.result = "无广告", e.adType = i, e.adTimes = n, e.sceneCode = o, e.scenario = a, e.popName = r, e.popGroupName = s, e.requestNum = d, e.ad_style = "", e.isUsedAdButton = m.isUsedAdButton, e.adRequestNum = m.adRequestNum, t = e
                    }
                    return t
                }, getNextXiaomiAdData: w, getRequestHandle: function (e) {
                    e ? m.adgNum = e : m.adgNum += 1, LOG(e, m.adgNum, "jiajiajia")
                }, getTempleteAdv: function (e) {
                    return new Promise(((t, a) => {
                        const {scenario: o, sceneCode: i, popGroupName: n, popName: r} = e;
                        var s = {
                            res_type: "fail",
                            type: "temp_ad",
                            scenario: o,
                            sceneCode: i,
                            popGroupName: n,
                            popName: r,
                            advDetail: null,
                            id: "",
                            brand: m.deviceInfo.brand,
                            adMethod: "2.0",
                            ad_network: 1,
                            ad_type: "icon",
                            result: "发起请求",
                            ad_style: ""
                        };
                        if ("huawei" == m.deviceInfo.brand && m.deviceInfo.platformVersionCode > 1100) {
                            j();
                            let a = {
                                adUnitId: m.templateAdConfig.huawei.template_ids[m.templateAdConfig.huawei.index],
                                type: "appList",
                                darkMode: 0,
                                width: 750,
                                height: 450,
                                personalizedAd: 0
                            };
                            console.log("getTempleteAdv load ready, _params=", JSON.stringify(a)), U("request", Object.assign({}, s, {id: m.templateAdConfig.huawei.template_ids[m.templateAdConfig.huawei.index]})), m.templateAds.huawei = $app_require$("@app-module/service.ad").createTemplateAd(a), m.templateAds.huawei.load({
                                success: function (a) {
                                    console.log("getTempleteAdv load success, code=", JSON.stringify(a)), s.id = m.templateAdConfig.huawei.template_ids[m.templateAdConfig.huawei.index], s.res_type = "success", s.advDetail = a, s.result = "有广告", U("request", s), e && e.success && e.success(s), t(s)
                                }, fail: function (a, o) {
                                    s.id = m.templateAdConfig.huawei.template_ids[m.templateAdConfig.huawei.index], s.res_type = "fail", s.result = "无广告", U("request", s), e && e.fail && e.fail(s), t(s), console.log("getTempleteAdv load fail, code=" + o, a)
                                }
                            })
                        } else console.log("getTempleteAdv 当前环境不支持模板广告"), s.res_type = "fail", e && e.fail && e.fail(s), t(s), console.log("当前环境不支持模板广告")
                    }))
                }, destroyTempleteAdv: j, isScreenAdClick: function () {
                    return y
                }, resetScreenAdClick: function () {
                    y = !1
                }, kdxfAd: function (e, t) {
                    let a = {};
                    try {
                        const o = e,
                            s = Math.round(1e7 * Math.random()) + "-" + Date.now() + "-" + Math.round(1e7 * Math.random()), {
                                oaid: d,
                                android: p,
                                brand: c,
                                model: u,
                                mac: l,
                                versionName: _,
                                userAgent: f,
                                geolocation: g = {}
                            } = o.$app.$def, {name: m, packageName: h} = r.default.getInfo();
                        return a = {
                            id: s,
                            api_ver: "1.0.0",
                            imps: [{
                                adw: 960,
                                adh: 640,
                                adunit_id: t,
                                bidfloor: .01,
                                dp_support_status: [1, 2],
                                secure: 2
                            }],
                            app: {bundle: h, app_ver: _, app_name: m},
                            device: {
                                ua: f,
                                geo: {lat: g.latitude, lon: g.longitude},
                                oaid: d,
                                imei: "",
                                imei_md5: "",
                                mac: l,
                                mac_md5: l ? (0, n.default)(l) : "",
                                adid: p,
                                dvw: 720,
                                dvh: 1080,
                                make: c,
                                model: u,
                                os: 0,
                                osv: "7.0",
                                net: 6,
                                carrier: 3,
                                lan: "zh-CN",
                                device_type: 0,
                                ip: REPORT_SDK.get_attr("ip")
                            }
                        }, LOG("KDXF_AD", "ad_sdk", a), new Promise((e => {
                            i.default.postExternal("https://mt.voiceads.cn/c/req", a, o.pageName).then((t => {
                                LOG("KDXF_AD", "sdk请求结果", t), t.ads ? e(t) : e()
                            })).catch((t => {
                                LOG("KDXF_AD", "fetchAd", t), e()
                            }))
                        }))
                    } catch (e) {
                        LOG("KDXF_AD", "ad_sdk", e)
                    }
                }, isSameAd: function (e) {
                    return A[e]
                }, getAppStatus: q, getVideoEcpm: function () {
                    return 2 === AD_SDK_UTILS.getEcpmType() && m.videoAdPrice || 0
                }, coolHandle: function (e) {
                    "冷却" !== e.id && (m.failObjectCycle[e.id] ? m.failObjectCycle[e.id]++ : m.failObjectCycle[e.id] = 1)
                }, clearVideoCallMap: function () {
                    K = {}
                }, createYlhSplashAd: function (e = {}) {
                    if (J || !l.YLHSDK) return;
                    let t = {}, a = z(!0);
                    if (LOG("YLH_AD", "createYlhSplashAd", a, l.YLHSDK), !a.id) return void LOG("createYlhSplashAd 未配置优量汇id");
                    const o = {id: a.id, ad_type: "优量汇开屏", ad_network: 18, scenario: "优量汇开屏广告"};
                    l.YLHSDK.onYlhReady((() => {
                        try {
                            U("request", Object.assign({}, o, {result: "发起请求"})), J = !0, t = l.YLHSDK.createSplashAd({
                                placementId: a.id,
                                recommendation: 0,
                                entry: e.entry
                            });
                            const i = () => {
                                EVENT_BUS.emit("YlhSplashAdEvent", !0), U("request", Object.assign({}, o, {result: "有广告"})), t.show(), U("show", Object.assign({}, o, {result: "有广告"})), console.log("onLoad: 加载成功")
                            };
                            t.onLoad(i), t.onError(((e = {}) => {
                                EVENT_BUS.emit("YlhSplashAdEvent", !1), AD_SDK.uploadAdInfo("request", Object.assign({}, o, {result: "无广告"})), console.log("onError:", e)
                            })), t.onExpose((() => {
                                console.log("onExpose")
                            })), t.onClick((() => {
                                AD_SDK.uploadAdInfo("click", Object.assign({}, o, {result: "有广告"}), "素材"), e.onClick && e.onClick(), console.log("onClick: 广告点击")
                            })), t.onClose((() => {
                                EVENT_BUS.emit("YlhSplashAdEvent", !1), e.onClose && e.onClose(), console.log("onClose:广告关闭")
                            })), t.load()
                        } catch (e) {
                            console.warn("创建开屏异常:", e)
                        }
                    }))
                }
            };
            (a.g.__proto__ || a.g).AD_SDK = Y, t.default = Y
        }, 6560: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var a, o, i = i || function (e, t)
        {
            var a = {}, o = a.lib = {}, i = function () {
            }, n = o.Base = {
                extend: function (e) {
                    i.prototype = this;
                    var t = new i;
                    return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function () {
                        t.$super.init.apply(this, arguments)
                    }), t.init.prototype = t, t.$super = this, t
                }, create: function () {
                    var e = this.extend();
                    return e.init.apply(e, arguments), e
                }, init: function () {
                }, mixIn: function (e) {
                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                }, clone: function () {
                    return this.init.prototype.extend(this)
                }
            }, r = o.WordArray = n.extend({
                init: function (e, t) {
                    e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
                }, toString: function (e) {
                    return (e || d).stringify(this)
                }, concat: function (e) {
                    var t = this.words, a = e.words, o = this.sigBytes;
                    if (e = e.sigBytes, this.clamp(), o % 4) for (var i = 0; i < e; i++) t[o + i >>> 2] |= (a[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 24 - (o + i) % 4 * 8; else if (65535 < a.length) for (i = 0; i < e; i += 4) t[o + i >>> 2] = a[i >>> 2]; else t.push.apply(t, a);
                    return this.sigBytes += e, this
                }, clamp: function () {
                    var t = this.words, a = this.sigBytes;
                    t[a >>> 2] &= 4294967295 << 32 - a % 4 * 8, t.length = e.ceil(a / 4)
                }, clone: function () {
                    var e = n.clone.call(this);
                    return e.words = this.words.slice(0), e
                }, random: function (t) {
                    for (var a = [], o = 0; o < t; o += 4) a.push(4294967296 * e.random() | 0);
                    return new r.init(a, t)
                }
            }), s = a.enc = {}, d = s.Hex = {
                stringify: function (e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var a = [], o = 0; o < e; o++) {
                        var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                        a.push((i >>> 4).toString(16)), a.push((15 & i).toString(16))
                    }
                    return a.join("")
                }, parse: function (e) {
                    for (var t = e.length, a = [], o = 0; o < t; o += 2) a[o >>> 3] |= parseInt(e.substr(o, 2), 16) << 24 - o % 8 * 4;
                    return new r.init(a, t / 2)
                }
            }, p = s.Latin1 = {
                stringify: function (e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var a = [], o = 0; o < e; o++) a.push(String.fromCharCode(t[o >>> 2] >>> 24 - o % 4 * 8 & 255));
                    return a.join("")
                }, parse: function (e) {
                    for (var t = e.length, a = [], o = 0; o < t; o++) a[o >>> 2] |= (255 & e.charCodeAt(o)) << 24 - o % 4 * 8;
                    return new r.init(a, t)
                }
            }, c = s.Utf8 = {
                stringify: function (e) {
                    try {
                        return decodeURIComponent(escape(p.stringify(e)))
                    } catch (e) {
                        throw Error("Malformed UTF-8 data")
                    }
                }, parse: function (e) {
                    return p.parse(unescape(encodeURIComponent(e)))
                }
            }, u = o.BufferedBlockAlgorithm = n.extend({
                reset: function () {
                    this._data = new r.init, this._nDataBytes = 0
                }, _append: function (e) {
                    "string" == typeof e && (e = c.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                }, _process: function (t) {
                    var a = this._data, o = a.words, i = a.sigBytes, n = this.blockSize, s = i / (4 * n);
                    if (t = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * n, i = e.min(4 * t, i), t) {
                        for (var d = 0; d < t; d += n) this._doProcessBlock(o, d);
                        d = o.splice(0, t), a.sigBytes -= i
                    }
                    return new r.init(d, i)
                }, clone: function () {
                    var e = n.clone.call(this);
                    return e._data = this._data.clone(), e
                }, _minBufferSize: 0
            });
            o.Hasher = u.extend({
                cfg: n.extend(), init: function (e) {
                    this.cfg = this.cfg.extend(e), this.reset()
                }, reset: function () {
                    u.reset.call(this), this._doReset()
                }, update: function (e) {
                    return this._append(e), this._process(), this
                }, finalize: function (e) {
                    return e && this._append(e), this._doFinalize()
                }, blockSize: 16, _createHelper: function (e) {
                    return function (t, a) {
                        return new e.init(a).finalize(t)
                    }
                }, _createHmacHelper: function (e) {
                    return function (t, a) {
                        return new l.HMAC.init(e, a).finalize(t)
                    }
                }
            });
            var l = a.algo = {};
            return a
        }
        (Math);
        o = (a = i).lib.WordArray, a.enc.Base64 = {
            stringify: function (e) {
                var t = e.words, a = e.sigBytes, o = this._map;
                e.clamp(), e = [];
                for (var i = 0; i < a; i += 3) for (var n = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, r = 0; 4 > r && i + .75 * r < a; r++) e.push(o.charAt(n >>> 6 * (3 - r) & 63));
                if (t = o.charAt(64)) for (; e.length % 4;) e.push(t);
                return e.join("")
            }, parse: function (e) {
                var t = e.length, a = this._map;
                (i = a.charAt(64)) && -1 != (i = e.indexOf(i)) && (t = i);
                for (var i = [], n = 0, r = 0; r < t; r++) if (r % 4) {
                    var s = a.indexOf(e.charAt(r - 1)) << r % 4 * 2,
                        d = a.indexOf(e.charAt(r)) >>> 6 - r % 4 * 2;
                    i[n >>> 2] |= (s | d) << 24 - n % 4 * 8, n++
                }
                return o.create(i, n)
            }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }, function (e) {
            function t(e, t, a, o, i, n, r) {
                return ((e = e + (t & a | ~t & o) + i + r) << n | e >>> 32 - n) + t
            }

            function a(e, t, a, o, i, n, r) {
                return ((e = e + (t & o | a & ~o) + i + r) << n | e >>> 32 - n) + t
            }

            function o(e, t, a, o, i, n, r) {
                return ((e = e + (t ^ a ^ o) + i + r) << n | e >>> 32 - n) + t
            }

            function n(e, t, a, o, i, n, r) {
                return ((e = e + (a ^ (t | ~o)) + i + r) << n | e >>> 32 - n) + t
            }

            for (var r = i, s = (p = r.lib).WordArray, d = p.Hasher, p = r.algo, c = [], u = 0; 64 > u; u++) c[u] = 4294967296 * e.abs(e.sin(u + 1)) | 0;
            p = p.MD5 = d.extend({
                _doReset: function () {
                    this._hash = new s.init([1732584193, 4023233417, 2562383102, 271733878])
                }, _doProcessBlock: function (e, i) {
                    for (var r = 0; 16 > r; r++) {
                        var s = e[d = i + r];
                        e[d] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                    }
                    r = this._hash.words;
                    var d = e[i + 0], p = (s = e[i + 1], e[i + 2]), u = e[i + 3], l = e[i + 4],
                        _ = e[i + 5], f = e[i + 6], g = e[i + 7], m = e[i + 8], h = e[i + 9], y = e[i + 10],
                        A = e[i + 11], C = e[i + 12], v = e[i + 13], O = e[i + 14], S = e[i + 15],
                        T = t(T = r[0], I = r[1], D = r[2], b = r[3], d, 7, c[0]),
                        b = t(b, T, I, D, s, 12, c[1]), D = t(D, b, T, I, p, 17, c[2]),
                        I = t(I, D, b, T, u, 22, c[3]);
                    T = t(T, I, D, b, l, 7, c[4]), b = t(b, T, I, D, _, 12, c[5]), D = t(D, b, T, I, f, 17, c[6]), I = t(I, D, b, T, g, 22, c[7]), T = t(T, I, D, b, m, 7, c[8]), b = t(b, T, I, D, h, 12, c[9]), D = t(D, b, T, I, y, 17, c[10]), I = t(I, D, b, T, A, 22, c[11]), T = t(T, I, D, b, C, 7, c[12]), b = t(b, T, I, D, v, 12, c[13]), D = t(D, b, T, I, O, 17, c[14]), T = a(T, I = t(I, D, b, T, S, 22, c[15]), D, b, s, 5, c[16]), b = a(b, T, I, D, f, 9, c[17]), D = a(D, b, T, I, A, 14, c[18]), I = a(I, D, b, T, d, 20, c[19]), T = a(T, I, D, b, _, 5, c[20]), b = a(b, T, I, D, y, 9, c[21]), D = a(D, b, T, I, S, 14, c[22]), I = a(I, D, b, T, l, 20, c[23]), T = a(T, I, D, b, h, 5, c[24]), b = a(b, T, I, D, O, 9, c[25]), D = a(D, b, T, I, u, 14, c[26]), I = a(I, D, b, T, m, 20, c[27]), T = a(T, I, D, b, v, 5, c[28]), b = a(b, T, I, D, p, 9, c[29]), D = a(D, b, T, I, g, 14, c[30]), T = o(T, I = a(I, D, b, T, C, 20, c[31]), D, b, _, 4, c[32]), b = o(b, T, I, D, m, 11, c[33]), D = o(D, b, T, I, A, 16, c[34]), I = o(I, D, b, T, O, 23, c[35]), T = o(T, I, D, b, s, 4, c[36]), b = o(b, T, I, D, l, 11, c[37]), D = o(D, b, T, I, g, 16, c[38]), I = o(I, D, b, T, y, 23, c[39]), T = o(T, I, D, b, v, 4, c[40]), b = o(b, T, I, D, d, 11, c[41]), D = o(D, b, T, I, u, 16, c[42]), I = o(I, D, b, T, f, 23, c[43]), T = o(T, I, D, b, h, 4, c[44]), b = o(b, T, I, D, C, 11, c[45]), D = o(D, b, T, I, S, 16, c[46]), T = n(T, I = o(I, D, b, T, p, 23, c[47]), D, b, d, 6, c[48]), b = n(b, T, I, D, g, 10, c[49]), D = n(D, b, T, I, O, 15, c[50]), I = n(I, D, b, T, _, 21, c[51]), T = n(T, I, D, b, C, 6, c[52]), b = n(b, T, I, D, u, 10, c[53]), D = n(D, b, T, I, y, 15, c[54]), I = n(I, D, b, T, s, 21, c[55]), T = n(T, I, D, b, m, 6, c[56]), b = n(b, T, I, D, S, 10, c[57]), D = n(D, b, T, I, f, 15, c[58]), I = n(I, D, b, T, v, 21, c[59]), T = n(T, I, D, b, l, 6, c[60]), b = n(b, T, I, D, A, 10, c[61]), D = n(D, b, T, I, p, 15, c[62]), I = n(I, D, b, T, h, 21, c[63]), r[0] = r[0] + T | 0, r[1] = r[1] + I | 0, r[2] = r[2] + D | 0, r[3] = r[3] + b | 0
                }, _doFinalize: function () {
                    var t = this._data, a = t.words, o = 8 * this._nDataBytes, i = 8 * t.sigBytes;
                    a[i >>> 5] |= 128 << 24 - i % 32;
                    var n = e.floor(o / 4294967296);
                    for (a[15 + (i + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), a[14 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (a.length + 1), this._process(), a = (t = this._hash).words, o = 0; 4 > o; o++) i = a[o], a[o] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                    return t
                }, clone: function () {
                    var e = d.clone.call(this);
                    return e._hash = this._hash.clone(), e
                }
            }), r.MD5 = d._createHelper(p), r.HmacMD5 = d._createHmacHelper(p)
        }(Math), function () {
            var e, t = i, a = (e = t.lib).Base, o = e.WordArray, n = (e = t.algo).EvpKDF = a.extend({
                cfg: a.extend({
                    keySize: 4,
                    hasher: e.MD5,
                    iterations: 1
                }), init: function (e) {
                    this.cfg = this.cfg.extend(e)
                }, compute: function (e, t) {
                    for (var a = (s = this.cfg).hasher.create(), i = o.create(), n = i.words, r = s.keySize, s = s.iterations; n.length < r;) {
                        d && a.update(d);
                        var d = a.update(e).finalize(t);
                        a.reset();
                        for (var p = 1; p < s; p++) d = a.finalize(d), a.reset();
                        i.concat(d)
                    }
                    return i.sigBytes = 4 * r, i
                }
            });
            t.EvpKDF = function (e, t, a) {
                return n.create(a).compute(e, t)
            }
        }(), i.lib.Cipher || function (e) {
            var t = (f = i).lib, a = t.Base, o = t.WordArray, n = t.BufferedBlockAlgorithm,
                r = f.enc.Base64, s = f.algo.EvpKDF, d = t.Cipher = n.extend({
                    cfg: a.extend(),
                    createEncryptor: function (e, t) {
                        return this.create(this._ENC_XFORM_MODE, e, t)
                    },
                    createDecryptor: function (e, t) {
                        return this.create(this._DEC_XFORM_MODE, e, t)
                    },
                    init: function (e, t, a) {
                        this.cfg = this.cfg.extend(a), this._xformMode = e, this._key = t, this.reset()
                    },
                    reset: function () {
                        n.reset.call(this), this._doReset()
                    },
                    process: function (e) {
                        return this._append(e), this._process()
                    },
                    finalize: function (e) {
                        return e && this._append(e), this._doFinalize()
                    },
                    keySize: 4,
                    ivSize: 4,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: function (e) {
                        return {
                            encrypt: function (t, a, o) {
                                return ("string" == typeof a ? g : _).encrypt(e, t, a, o)
                            }, decrypt: function (t, a, o) {
                                return ("string" == typeof a ? g : _).decrypt(e, t, a, o)
                            }
                        }
                    }
                });
            t.StreamCipher = d.extend({
                _doFinalize: function () {
                    return this._process(!0)
                }, blockSize: 1
            });
            var p = f.mode = {}, c = function (e, t, a) {
                var o = this._iv;
                o ? this._iv = void 0 : o = this._prevBlock;
                for (var i = 0; i < a; i++) e[t + i] ^= o[i]
            }, u = (t.BlockCipherMode = a.extend({
                createEncryptor: function (e, t) {
                    return this.Encryptor.create(e, t)
                }, createDecryptor: function (e, t) {
                    return this.Decryptor.create(e, t)
                }, init: function (e, t) {
                    this._cipher = e, this._iv = t
                }
            })).extend();
            u.Encryptor = u.extend({
                processBlock: function (e, t) {
                    var a = this._cipher, o = a.blockSize;
                    c.call(this, e, t, o), a.encryptBlock(e, t), this._prevBlock = e.slice(t, t + o)
                }
            }), u.Decryptor = u.extend({
                processBlock: function (e, t) {
                    var a = this._cipher, o = a.blockSize, i = e.slice(t, t + o);
                    a.decryptBlock(e, t), c.call(this, e, t, o), this._prevBlock = i
                }
            }), p = p.CBC = u, u = (f.pad = {}).Pkcs7 = {
                pad: function (e, t) {
                    for (var a, i = (a = (a = 4 * t) - e.sigBytes % a) << 24 | a << 16 | a << 8 | a, n = [], r = 0; r < a; r += 4) n.push(i);
                    a = o.create(n, a), e.concat(a)
                }, unpad: function (e) {
                    e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2]
                }
            }, t.BlockCipher = d.extend({
                cfg: d.cfg.extend({mode: p, padding: u}), reset: function () {
                    d.reset.call(this);
                    var e = (t = this.cfg).iv, t = t.mode;
                    if (this._xformMode == this._ENC_XFORM_MODE) var a = t.createEncryptor; else a = t.createDecryptor, this._minBufferSize = 1;
                    this._mode = a.call(t, this, e && e.words)
                }, _doProcessBlock: function (e, t) {
                    this._mode.processBlock(e, t)
                }, _doFinalize: function () {
                    var e = this.cfg.padding;
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        e.pad(this._data, this.blockSize);
                        var t = this._process(!0)
                    } else t = this._process(!0), e.unpad(t);
                    return t
                }, blockSize: 4
            });
            var l = t.CipherParams = a.extend({
                init: function (e) {
                    this.mixIn(e)
                }, toString: function (e) {
                    return (e || this.formatter).stringify(this)
                }
            }), _ = (p = (f.format = {}).OpenSSL = {
                stringify: function (e) {
                    var t = e.ciphertext;
                    return ((e = e.salt) ? o.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(r)
                }, parse: function (e) {
                    var t = (e = r.parse(e)).words;
                    if (1398893684 == t[0] && 1701076831 == t[1]) {
                        var a = o.create(t.slice(2, 4));
                        t.splice(0, 4), e.sigBytes -= 16
                    }
                    return l.create({ciphertext: e, salt: a})
                }
            }, t.SerializableCipher = a.extend({
                cfg: a.extend({format: p}), encrypt: function (e, t, a, o) {
                    o = this.cfg.extend(o);
                    var i = e.createEncryptor(a, o);
                    return t = i.finalize(t), i = i.cfg, l.create({
                        ciphertext: t,
                        key: a,
                        iv: i.iv,
                        algorithm: e,
                        mode: i.mode,
                        padding: i.padding,
                        blockSize: e.blockSize,
                        formatter: o.format
                    })
                }, decrypt: function (e, t, a, o) {
                    return o = this.cfg.extend(o), t = this._parse(t, o.format), e.createDecryptor(a, o).finalize(t.ciphertext)
                }, _parse: function (e, t) {
                    return "string" == typeof e ? t.parse(e, this) : e
                }
            })), f = (f.kdf = {}).OpenSSL = {
                execute: function (e, t, a, i) {
                    return i || (i = o.random(8)), e = s.create({keySize: t + a}).compute(e, i), a = o.create(e.words.slice(t), 4 * a), e.sigBytes = 4 * t, l.create({
                        key: e,
                        iv: a,
                        salt: i
                    })
                }
            }, g = t.PasswordBasedCipher = _.extend({
                cfg: _.cfg.extend({kdf: f}),
                encrypt: function (e, t, a, o) {
                    return a = (o = this.cfg.extend(o)).kdf.execute(a, e.keySize, e.ivSize), o.iv = a.iv, (e = _.encrypt.call(this, e, t, a.key, o)).mixIn(a), e
                },
                decrypt: function (e, t, a, o) {
                    return o = this.cfg.extend(o), t = this._parse(t, o.format), a = o.kdf.execute(a, e.keySize, e.ivSize, t.salt), o.iv = a.iv, _.decrypt.call(this, e, t, a.key, o)
                }
            })
        }(), function () {
            for (var e = i, t = e.lib.BlockCipher, a = e.algo, o = [], n = [], r = [], s = [], d = [], p = [], c = [], u = [], l = [], _ = [], f = [], g = 0; 256 > g; g++) f[g] = 128 > g ? g << 1 : g << 1 ^ 283;
            var m = 0, h = 0;
            for (g = 0; 256 > g; g++) {
                var y = (y = h ^ h << 1 ^ h << 2 ^ h << 3 ^ h << 4) >>> 8 ^ 255 & y ^ 99;
                o[m] = y, n[y] = m;
                var A = f[m], C = f[A], v = f[C], O = 257 * f[y] ^ 16843008 * y;
                r[m] = O << 24 | O >>> 8, s[m] = O << 16 | O >>> 16, d[m] = O << 8 | O >>> 24, p[m] = O, O = 16843009 * v ^ 65537 * C ^ 257 * A ^ 16843008 * m, c[y] = O << 24 | O >>> 8, u[y] = O << 16 | O >>> 16, l[y] = O << 8 | O >>> 24, _[y] = O, m ? (m = A ^ f[f[f[v ^ A]]], h ^= f[f[h]]) : m = h = 1
            }
            var S = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            a = a.AES = t.extend({
                _doReset: function () {
                    for (var e = (a = this._key).words, t = a.sigBytes / 4, a = 4 * ((this._nRounds = t + 6) + 1), i = this._keySchedule = [], n = 0; n < a; n++) if (n < t) i[n] = e[n]; else {
                        var r = i[n - 1];
                        n % t ? 6 < t && 4 == n % t && (r = o[r >>> 24] << 24 | o[r >>> 16 & 255] << 16 | o[r >>> 8 & 255] << 8 | o[255 & r]) : (r = o[(r = r << 8 | r >>> 24) >>> 24] << 24 | o[r >>> 16 & 255] << 16 | o[r >>> 8 & 255] << 8 | o[255 & r], r ^= S[n / t | 0] << 24), i[n] = i[n - t] ^ r
                    }
                    for (e = this._invKeySchedule = [], t = 0; t < a; t++) n = a - t, r = t % 4 ? i[n] : i[n - 4], e[t] = 4 > t || 4 >= n ? r : c[o[r >>> 24]] ^ u[o[r >>> 16 & 255]] ^ l[o[r >>> 8 & 255]] ^ _[o[255 & r]]
                }, encryptBlock: function (e, t) {
                    this._doCryptBlock(e, t, this._keySchedule, r, s, d, p, o)
                }, decryptBlock: function (e, t) {
                    var a = e[t + 1];
                    e[t + 1] = e[t + 3], e[t + 3] = a, this._doCryptBlock(e, t, this._invKeySchedule, c, u, l, _, n), a = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = a
                }, _doCryptBlock: function (e, t, a, o, i, n, r, s) {
                    for (var d = this._nRounds, p = e[t] ^ a[0], c = e[t + 1] ^ a[1], u = e[t + 2] ^ a[2], l = e[t + 3] ^ a[3], _ = 4, f = 1; f < d; f++) {
                        var g = o[p >>> 24] ^ i[c >>> 16 & 255] ^ n[u >>> 8 & 255] ^ r[255 & l] ^ a[_++],
                            m = o[c >>> 24] ^ i[u >>> 16 & 255] ^ n[l >>> 8 & 255] ^ r[255 & p] ^ a[_++],
                            h = o[u >>> 24] ^ i[l >>> 16 & 255] ^ n[p >>> 8 & 255] ^ r[255 & c] ^ a[_++];
                        l = o[l >>> 24] ^ i[p >>> 16 & 255] ^ n[c >>> 8 & 255] ^ r[255 & u] ^ a[_++], p = g, c = m, u = h
                    }
                    g = (s[p >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & l]) ^ a[_++], m = (s[c >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & p]) ^ a[_++], h = (s[u >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & c]) ^ a[_++], l = (s[l >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & u]) ^ a[_++], e[t] = g, e[t + 1] = m, e[t + 2] = h, e[t + 3] = l
                }, keySize: 8
            }), e.AES = t._createHelper(a)
        }(), t.default = i
    },
        4418
    :
        (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, t.default = {
                getDefaultAdPostionConfigByBrand: function (e) {
                    let t = "";
                    switch (e) {
                        case"vivo":
                            t = '{"baidu_ad":{"product_id":"a4036263","baidu_ad_config":[{"temp_id":"3303","ad_ids":"8004118"},{"temp_id":"3002","ad_ids":"8004119"},{"temp_id":"0","ad_ids":"8004119"}]},"brand_ad":{"ad":"44f7da52c38c4e17a1008de38e2550ad,cb61a69a00244b08b064151da1f9baf4,82694f59e3d041c494cfce351cadb01b,80efad734cc14f5a872f90286c85a2cf,889a8b2f25b64c41bfbff53a032c6af8,e4dbde2a0898459b8f203db790b8f868","ad_video":"","ad_banner":"4e978c216d0f477aa033f6fb316386f3"}}';
                            break;
                        case"oppo":
                            t = '{"baidu_ad":{"product_id":"a4036263","baidu_ad_config":[{"temp_id":"3303","ad_ids":"8004118"},{"temp_id":"3002","ad_ids":"8004119"},{"temp_id":"0","ad_ids":"8004119"}]},"brand_ad":{"ad":"500792,500793,500794,500797,500799,500802","ad_video":"","ad_banner":"500806"}}';
                            break;
                        case"huawei":
                            t = '{"baidu_ad":{"product_id":"a4036263","baidu_ad_config":[{"temp_id":"3303","ad_ids":"8004118"},{"temp_id":"3002","ad_ids":"8004119"},{"temp_id":"0","ad_ids":"8004119"}]},"brand_ad":{"ad":"s7d087h2tx,y6t303q3su,y0vxvrhdlz,c6jlatx5l5","ad_video":"","ad_banner":"b4m1yad7mk"}}';
                            break;
                        case"xiaomi":
                            t = '{"baidu_ad":{"product_id":"a4036263","baidu_ad_config":[{"temp_id":"3303","ad_ids":"8004118"},{"temp_id":"3002","ad_ids":"8004119"},{"temp_id":"0","ad_ids":"8004119"}]},"brand_ad":{"ad":"3829b9fadc77d979d5f096dda7005df4,bdd688e3bbb910d8a4e8a7005f35e117,69567393d40b2980641fc53d1c0826a2,4d1cd8d27a63bac48d1c63ff3598da1f,acaad193852c7c9ec23edb23bb6d1aaa,7e80de3455d42e1bd4116b2cbf42e128","ad_video":"","ad_banner":"a10d390931ab7c025748250b6a43704c"}}'
                    }
                    return JSON.parse(t)
                },
                getNewDefaultAdPostionConfigByBrand: function (e) {
                    let t = "";
                    switch (e) {
                        case"vivo":
                            t = '{"ad_protogenesis":["23cdf2ad0c064610b7c0dd4c5248dde4,34cbe912009e4949bef01af1f20e8948,65d4fd1df99848aa9da78f914b8095e9,574088617e1f44298d1cdff4ca7e6377,6174a1bdd9584db6887f46bae79e01ec"],"ad_encourage":"ae67c5f848a3434e818e9c2ab3acd02e","ad_banner":"b07fc453ce1c4b27a58cb0ba0037032a","ad_name":"本地广告配置名称"}';
                            break;
                        case"oppo":
                            t = '{"ad_protogenesis":["527567,527569,527570,527571,527573,527575"],"ad_encourage":"493635","ad_banner":"493635","ad_name":"本地广告配置名称"}';
                            break;
                        case"huawei":
                            t = '{"ad_protogenesis":["x960pk5yaa,b544oqjbe2,y7smp9vlkr,a99081e2jz,i3q2lok1gj,j78ptv4zjb"],"ad_encourage":"testx9dtjwj8hp","ad_banner":"w6w4oz39ap","ad_name":"本地广告配置名称"}';
                            break;
                        case"xiaomi":
                            t = '{"ad_protogenesis":["f17b412625e479097e691d9ff777cf4d,126d8ad6fd7bd4bb390ee7d26b86a940,7a6abd406945dc92cc6b836c227fd34e,1d559ddfc4abeaa83e91774cecda4d84,e7768a42a868d328a25641954888f10d,64f6cb34a97be7d416c6b6186162c661"],"ad_encourage": "654719afe33c1bf551fdd0bbc8704359","ad_banner": "796895139b377c94119e66321eb41b90","ad_name":"本地广告配置名称"}'
                    }
                    return JSON.parse(t)
                },
                getDefaultAdConfigByBrand: function (e) {
                    let t = "";
                    switch (e) {
                        case"vivo":
                            t = '{"scene_switch_list":[{"scene_code":"AD_SCENE_READ_INFO_BANNER","native_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_READ_FRIST","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"3002","nature_status":1,"status":1},{"scene_code":"AD_SCENE_READ_BANNER","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"3303","nature_status":1,"status":1},{"scene_code":"AD_SCENE_SHELF","native_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_STORE","native_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_WELFARE","native_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_MINE","native_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_ZC","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"3002","nature_status":1,"status":1}],"popup_switch_list":[{"scene_code":"AD_POP_GETWAY","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":1,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_COIN","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":1,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_BOX","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":1,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_EXIT","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":""},{"scene_code":"AD_POP_READINFO_BACK_POP","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":1,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_WELFARE_BACK_POP","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":1,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_EXIT_PROMPT","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":""},{"scene_code":"AD_POP_BACK","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":""},{"scene_code":"AD_SCENE_BACK_POP_BOTTOM","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":""},{"scene_code":"AD_POP_UNLOCK","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":""}],"ad_request_config":[],"vivo":{"channel_status":1,"link_status":1,"campaign_id_status":1,"utm_content_status":0,"site_status":0,"source_pkg_status":0}}';
                            break;
                        case"oppo":
                            t = '{"scene_switch_list":[{"scene_code":"AD_SCENE_READ_INFO_BANNER","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_READ_FRIST","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"3002","nature_status":1,"status":1},{"scene_code":"AD_SCENE_READ_BANNER","native_ad_priority":2,"baidu_ad_priority":3,"baidu_ad_template":"3303","nature_status":1,"status":1},{"scene_code":"AD_SCENE_SHELF","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_STORE","native_ad_priority":0,"baidu_ad_priority":1,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_WELFARE","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_MINE","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_ZC","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"3002","nature_status":1,"status":1}],"popup_switch_list":[{"scene_code":"AD_POP_GETWAY","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_COIN","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_BOX","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_EXIT","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":""},{"scene_code":"AD_POP_READINFO_BACK_POP","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_WELFARE_BACK_POP","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_EXIT_PROMPT","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":""},{"scene_code":"AD_POP_BACK","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":""},{"scene_code":"AD_SCENE_BACK_POP_BOTTOM","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":""},{"scene_code":"AD_POP_UNLOCK","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":""}],"ad_request_config":[]}}';
                            break;
                        case"huawei":
                            t = '{"scene_switch_list":[{"scene_code":"AD_SCENE_READ_INFO_BANNER","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_READ_FRIST","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"3002","nature_status":1,"status":1},{"scene_code":"AD_SCENE_READ_BANNER","native_ad_priority":2,"baidu_ad_priority":3,"baidu_ad_template":"3303","nature_status":1,"status":1},{"scene_code":"AD_SCENE_SHELF","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_STORE","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_WELFARE","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_MINE","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_ZC","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"3002","nature_status":1,"status":1}],"popup_switch_list":[{"scene_code":"AD_POP_GETWAY","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_COIN","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_BOX","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_EXIT","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":""},{"scene_code":"AD_POP_READINFO_BACK_POP","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_WELFARE_BACK_POP","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_EXIT_PROMPT","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":""},{"scene_code":"AD_POP_BACK","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":""},{"scene_code":"AD_SCENE_BACK_POP_BOTTOM","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":""},{"scene_code":"AD_POP_UNLOCK","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":""}],"ad_request_config":[]}}';
                            break;
                        case"xiaomi":
                            t = '{"scene_switch_list":[{"scene_code":"AD_SCENE_READ_INFO_BANNER","native_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_READ_FRIST","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"3002","nature_status":1,"status":1},{"scene_code":"AD_SCENE_READ_BANNER","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"3303","nature_status":1,"status":1},{"scene_code":"AD_SCENE_SHELF","native_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_STORE","native_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_WELFARE","native_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_MINE","native_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":"0","nature_status":1,"status":1},{"scene_code":"AD_SCENE_ZC","native_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":"3002","nature_status":1,"status":1}],"popup_switch_list":[{"scene_code":"AD_POP_GETWAY","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":1,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_COIN","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":1,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_BOX","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":1,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_EXIT","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":""},{"scene_code":"AD_POP_READINFO_BACK_POP","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":1,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_WELFARE_BACK_POP","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":1,"baidu_ad_priority":0,"baidu_ad_template":""},{"scene_code":"AD_POP_EXIT_PROMPT","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":""},{"scene_code":"AD_POP_BACK","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":""},{"scene_code":"AD_SCENE_BACK_POP_BOTTOM","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":1,"baidu_ad_template":""},{"scene_code":"AD_POP_UNLOCK","native_ad_download_priority":0,"native_ad_awaken_priority":0,"app_ad_priority":2,"baidu_ad_priority":0,"baidu_ad_template":""}],"ad_request_config":[]}}'
                    }
                    return JSON.parse(t)
                },
                getBqtDefaultAdConfigByBrand: function (e) {
                    let t = "";
                    switch (e) {
                        case"vivo":
                        case"oppo":
                        case"huawei":
                        case"xiaomi":
                            t = '{"baidu_ad":{"baidu_ad_config":[{"temp_id": "3002", "ad_ids": "8004119"},{"temp_id": "3303", "ad_ids": "8004118"},{"temp_id": "0", "ad_ids": "8004119"}],"product_id":"accd5568"}}'
                    }
                    return JSON.parse(t)
                },
                CUSTOM_POP_DEFAULT_DATA: {
                    popName: "默认自定义原生弹窗",
                    tabBarSwitch: "1",
                    adSwitch: "1",
                    closeIcon: "https://img.hdyxi.com/image/default/popClose.png",
                    popBg: "https://img.hdyxi.com/image/default/pop_bg.jpg",
                    maskOpacity: "0.8",
                    boxBg: "https://img.hdyxi.com/image/default/box_bg.png",
                    popScale: .8,
                    closeDelay: 1e3,
                    btnStyle: {
                        btnRadius: 48,
                        btnTop: 554,
                        btnText: "查看领取",
                        btnBgColor: "#07CC5A",
                        btnWidth: 550,
                        btnHeight: 96,
                        btnFont: 36,
                        btnTextColor: "#FFFFFF",
                        btnIcon: "https://img.hdyxi.com/image/default/btn_icon.png",
                        btnCancelText: "关闭",
                        btnCancelFont: 26,
                        btnCancelColor: "#B2B2B2",
                        btnCancelMarginTop: 10
                    },
                    btnJumpKey: "welfarePage",
                    backPressAdSwitch: 0,
                    templateType: 1
                },
                CUSTOM_BACK_POP_DEFAULT_DATA: {
                    popName: "默认自定义退出弹窗",
                    popKey: "UL9H7FBF",
                    topAdShow: 1,
                    middleAdShow: 2,
                    middleScale: "0.80",
                    bottomAdShow: 1,
                    boxBg: "https://img.hdyxi.com/image%2F2022-06-28%2F1656385307556_back.png",
                    popBg: "",
                    closeIcon: "https://img.hdyxi.com/image%2F2022-06-28%2F1656404166255_Group%20330%20(1).png",
                    btnIcon: "https://img.hdyxi.com/image%2F2022-06-28%2F1656385299183_button.png",
                    negIcon: "",
                    maskOpacity: .8,
                    popScale: "0.90",
                    backLockTime: 0,
                    crowdStyle: {
                        crowdSwitch: 1,
                        crowdText: "确定要离开吗",
                        crowdDelay: 0,
                        crowdDistance: 34,
                        crowdFont: 34,
                        crowdHeight: 34,
                        crowdTextPosition: 1,
                        crowdTextColor: "#FFFFFF"
                    },
                    btnStyle: {
                        btnHotTop: 0,
                        btnHotBottom: 0,
                        btnHotAbout: 0,
                        btnJumpKey: 2,
                        btnJumpValue: "",
                        btnBreatheSwitch: 1,
                        btnRadius: "86",
                        btnTop: 120,
                        btnWidth: 721,
                        btnHeight: 173,
                        btnBgColor: "",
                        btnTextColor: "#FFFFFF",
                        btnFont: 48,
                        btnText: "是",
                        btnLeft: 15
                    },
                    negStyle: {
                        negJumpKey: 2,
                        negDelay: 0,
                        negText: "否",
                        negFont: 32,
                        negTextColor: "#DFDFDF",
                        negRadius: "",
                        negTop: 282,
                        negLeft: 360,
                        negHeight: 0,
                        negWidth: 0
                    },
                    closeStyle: {
                        closePosition: 4,
                        closeDelay: 0,
                        closeOpacity: 1,
                        closeTop: 0,
                        closeWidth: 54,
                        closeHeight: 54
                    }
                },
                COMMON_NATIVE_POP_DEFAULT_DATA: [{
                    isFail: !0,
                    popName: "自定义通用弹窗",
                    popKey: "UL9H7FBF",
                    popGroupName: "补量池广告组",
                    btnBackIsDisplay: !1,
                    closeStyle: {
                        isShow: !0,
                        width: 25,
                        height: 25,
                        distance: 50,
                        position: 4,
                        delay: 2e3,
                        opacity: 1,
                        translateX: 0,
                        top: 20,
                        image: "https://tacticsclusters.oss-cn-beijing.aliyuncs.com/image%2F2023-06-19%2F1687168698801_def-close.png"
                    },
                    crowdStyle: {
                        isShow: !1,
                        width: 750,
                        height: 40,
                        color: "#ff9900",
                        text: "这里是挤动文案",
                        distance: 0,
                        position: 1,
                        delay: 3e3,
                        image: "",
                        font: 30,
                        between: 30
                    },
                    popStyle: {
                        height: 768,
                        width: 633,
                        image: "https://tacticsclusters.oss-cn-beijing.aliyuncs.com/image%2F2023-06-19%2F1687168686358_def-popup-bg.png"
                    },
                    btnStyle: {
                        width: 497,
                        height: 117,
                        radio: 59,
                        image: "",
                        icon: "https://ims.readnos.com/image%2F2022-06-23%2F1655954565193_FL-JB%402x.png",
                        iconSwitch: 0,
                        hotTop: 0,
                        hotBottom: 30,
                        hotAbout: 20,
                        bgColor: "#3563e0",
                        color: "#FFFFFF",
                        font: 36,
                        text: "返回",
                        breath: 0,
                        jumpKey: 4,
                        jumpValue: "PAGE_CODE",
                        top: 543,
                        left: 68,
                        isBindingAd: 1
                    },
                    negStyle: {
                        isShow: !0,
                        width: 129,
                        height: 40,
                        font: 32,
                        color: "#4875E3",
                        left: 252,
                        top: 694,
                        radio: 0,
                        jumpKey: 4,
                        text: "继续观看",
                        delay: 2e3,
                        icon: ""
                    },
                    materialStyle: {width: 400, height: 225, top: 807},
                    maskStyle: {opacity: .5, image: ""},
                    commonStyle: {scale: 1, backLockTime: 5e3},
                    menubarStyle: {
                        isShow: !1,
                        showType: 1,
                        font: 40,
                        text: "这里是滚动的menubar",
                        image: "https://ims.readnos.com/image%2F2022-06-28%2F1656399103317_button.png",
                        width: 750,
                        height: 400,
                        radio: 0
                    }
                }],
                COMMON_VIDEO_POP_DEFAULT_DATA: [],
                COMMON_BAIDU_POP_DEFAULT_DATA: [],
                COMMON_MIDDLE_POP_DEFAULT_DATA: [{
                    popName: "自定义通用中插广告弹窗",
                    popKey: "UL9H7FBF",
                    popGroupName: "自定义通用中插广告弹窗组",
                    popStyle: {
                        layoutType: 1,
                        width: 686,
                        height: 784,
                        bgWidth: 686,
                        bgHeight: 654,
                        bgColor: "#F2F2F2",
                        bgRadio: 28,
                        bgType: 1,
                        bgImage: "https://ims.readnos.com/image%2F2022-09-13%2F1663055558609_BJ%402x.jpg"
                    },
                    maskStyle: {
                        isShow: !1,
                        maskType: 1,
                        bgColor: "#000000",
                        opacity: .5,
                        image: "https://ims.readnos.com/image%2F2022-09-13%2F1663055558609_BJ%402x.jpg",
                        tip: {
                            position: 1,
                            distance: 30,
                            width: 750,
                            height: 120,
                            image: "https://ims.readnos.com/image%2F2022-09-09%2F1662715426617_Slice%205%402x.png"
                        }
                    },
                    wholeStyle: {
                        bgType: 1,
                        bgColor: "#ffffff",
                        bgOpacity: 1,
                        image: "https://ims.readnos.com/image%2F2022-08-19%2F1660905413369_9-9.jpg"
                    },
                    guideStyle: {
                        isShow: !0,
                        width: 686,
                        height: 136,
                        top: 524,
                        image: "https://ims.readnos.com/image%2F2022-09-13%2F1663057413233_Slice%202%402x.png"
                    },
                    tipStyle: {
                        isShow: !0,
                        width: 684,
                        height: 184,
                        distance: 20,
                        image: "https://ims.readnos.com/image%2F2022-09-09%2F1662713486488_JRTJ%402x.png"
                    },
                    commonStyle: {lockTime: 3e3, mistakeType: 0, isCover: !1},
                    btnStyle: {
                        breath: !0,
                        text: "正向按钮文案",
                        type: 1,
                        radio: 50,
                        height: 100,
                        width: 686,
                        bgColor: "#38415f",
                        color: "#ffffff",
                        size: 36,
                        top: 680,
                        image: "https://ims.readnos.com/image%2F2022-06-28%2F1656399103317_button.png"
                    },
                    descStyle: {
                        text: "开局只有一个秘书，你能培养她成为你公司的大总裁是嘛我能?",
                        top: 404,
                        width: 646,
                        height: 88,
                        size: 28,
                        color: "#444444"
                    },
                    meterialStyle: {
                        width: 660,
                        height: 360,
                        image: "https://ims.readnos.com/image%2F2022-09-13%2F1663055558609_BJ%402x.jpg",
                        top: 20,
                        radio: 20
                    },
                    functionConfig: {isCloseAd2ClickAd: 0}
                }],
                COMMON_TEMPLETE_POP_DEFAULT_DATA: [{
                    popName: "自定义模板中插广告弹窗",
                    popKey: "UL9H7FBF",
                    popGroupName: "自定义模板中插广告弹窗组",
                    popStyle: {
                        layoutType: 1,
                        width: 750,
                        height: 800,
                        bgWidth: 750,
                        bgHeight: 800,
                        bgColor: "#F2F2F2",
                        bgRadio: 0,
                        bgType: 2,
                        bgImage: "https://ims.readnos.com/image%2F2022-09-26%2Fbj%402x.png"
                    },
                    maskStyle: {
                        isShow: !1,
                        maskType: 1,
                        bgColor: "#000000",
                        opacity: .5,
                        image: "https://ims.readnos.com/image%2F2022-09-13%2F1663055558609_BJ%402x.jpg",
                        tip: {
                            position: 1,
                            distance: 30,
                            width: 750,
                            height: 180,
                            image: "https://ims.readnos.com/image%2F2022-09-09%2F1662715426617_Slice%205%402x.png"
                        }
                    },
                    wholeStyle: {
                        bgType: 1,
                        bgColor: "#ffffff",
                        bgOpacity: .99,
                        image: "https://ims.readnos.com/image%2F2022-08-19%2F1660905413369_9-9.jpg"
                    },
                    guideStyle: {
                        isShow: !1,
                        width: 686,
                        height: 144.5,
                        top: 413,
                        image: "https://imgs.syreads.com/image%2F2022-08-19%2F%E7%BB%BF%E8%89%B2.gif"
                    },
                    tipStyle: {
                        isShow: !1,
                        width: 684,
                        height: 184,
                        distance: 20,
                        image: "https://ims.readnos.com/image%2F2022-09-09%2F1662713486488_JRTJ%402x.png"
                    },
                    commonStyle: {
                        lockTime: 0,
                        mistakeType: 0,
                        isCover: !1,
                        bottomExemptAd: 1,
                        materialExemptAd: 1,
                        exemptAdTime: 20
                    },
                    btnStyle: {
                        breath: !0,
                        text: "正向按钮文案",
                        type: 1,
                        radio: 50,
                        height: 100,
                        width: 686,
                        bgColor: "#38415f",
                        color: "#ffffff",
                        size: 36,
                        top: 680,
                        image: "https://ims.readnos.com/image%2F2022-06-28%2F1656399103317_button.png"
                    },
                    descStyle: {
                        text: "开局只有一个秘书，你能培养她成为你公司的大总裁是嘛我能?",
                        top: 404,
                        width: 646,
                        height: 88,
                        size: 28,
                        color: "#444444"
                    },
                    meterialStyle: {
                        width: 750,
                        height: 450,
                        image: "https://ims.readnos.com/image%2F2022-09-13%2F1663055558609_BJ%402x.jpg",
                        top: 277.4,
                        radio: 0
                    },
                    functionConfig: {isCloseAd2ClickAd: 0}
                }],
                COMMON_BAIDU_SCREEN_POP_DEFAULT_DATA: [{
                    popName: "自定义百度插屏插屏弹窗",
                    popKey: "UCV7BMBN",
                    popGroupName: "自定义百度插屏插屏弹窗组",
                    configBaseFormData: {
                        configure_name: "测试李凡",
                        function_type: "common",
                        custom_content_code: "1000",
                        weight: 1,
                        close_delay: 3e3,
                        crowd_delay: 0,
                        neg_delay: 1e3,
                        back_lock_time: 3e3,
                        btn_jump_key: 4,
                        btn_jump_value: "",
                        neg_jump_key: 2,
                        function_name: "通用",
                        custom_content: "h5活动"
                    }
                }]
            }
        }, 2759
    :
        (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = l($app_require$("@app-module/system.fetch")),
                i = l($app_require$("@app-module/system.device")),
                n = l($app_require$("@app-module/system.app")),
                r = l($app_require$("@app-module/system.storage")),
                s = l($app_require$("@app-module/system.shortcut")), d = l(a(726)),
                p = l($app_require$("@app-module/system.network")),
                c = (l($app_require$("@app-module/system.prompt")), l($app_require$("@app-module/system.router"))),
                u = l(a(4415));

            function l(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var _ = "https://applogs-qt.xayabx.com", f = "yunyousj@2021", g = 0, m = !1, h = 1, y = [], A = "",
                C = 0, v = {
                    event_id: "",
                    event_name: "",
                    scene: "",
                    lib_version: "1.1.4",
                    platform: "Quickapp",
                    platform_code: 0,
                    os: "android",
                    os_version: "",
                    app_version: "",
                    first_qid: "",
                    this_qid: "",
                    first_lid: "",
                    this_lid: "",
                    brand: "other",
                    model: "",
                    ip: "",
                    time_stamp: "",
                    time_stamp_millis: "",
                    city: "",
                    province: "",
                    country: "",
                    device_id: "",
                    source_pkg: "",
                    newer_state: 0,
                    icon_state: 0,
                    menubar_state: 0,
                    ad_style: "",
                    ad_type: "",
                    ext_field_1: "",
                    ext_field_2: "",
                    ext_field_3: "",
                    ext_field_4: "",
                    ext_field_5: "",
                    ext_field_6: "",
                    ext_field_7: "",
                    ext_field_8: "",
                    ext_field_9: "",
                    ext_field_10: "",
                    screen_width: 0,
                    screen_height: 0,
                    network: 0,
                    login_state: 0,
                    pay_state: 0,
                    mode_state: "",
                    page_url: "",
                    ad_id: "",
                    ad_network: 0,
                    result: "",
                    ad_position: "",
                    referer: "",
                    page_type: "",
                    page_name: "",
                    element_name: "",
                    duration: 0,
                    pay_amount: 0,
                    session_id: "",
                    utm_ad_id: "",
                    utm_campaign: "",
                    utm_content: "",
                    utm_medium: "",
                    utm_source: "",
                    utm_term: ""
                }, O = null;

            async function S(e) {
                try {
                    if ("object" != typeof e) return console.error("SDK传入的参数不正确，必须是对象"), !1;
                    if (!e.event_id) return console.error("SDK传入的参数event_id为必传"), !1;
                    if (!e.event_name) return console.error("SDK传入的参数event_name为必传"), !1;
                    let t = Date.now() + 1e3 * g, a = Math.floor(t / 1e3);
                    m || await new Promise(((e, t) => {
                        h++;
                        let a = JSON.parse(JSON.stringify(h)), o = setInterval((() => {
                            try {
                                m && (e(!0), y.forEach((e => {
                                    e.time == a && e.timer && clearInterval(e.timer)
                                })))
                            } catch (t) {
                                console.error("----------------上报SDK等待出错", t), e(!0)
                            }
                        }), 1e3);
                        y.push({timer: o, time: a})
                    }));
                    let n = JSON.parse(JSON.stringify(v));
                    if ("huawei" === n.brand) {
                        let e = {data: ""};
                        try {
                            e = await i.default.getInfo({})
                        } catch (e) {
                        }
                        "honor" == (e.data.brand && e.data.brand.toLowerCase()) && (n.brand = "honor")
                    }
                    n.time_stamp = a, n.time_stamp_millis = t;
                    let s = Object.assign(n, e), p = !0;
                    false;
                    try {
                        s.pay_amount = parseFloat(s.pay_amount.toFixed(2))
                    } catch (e) {
                        LOG("REPORT", "----------------转化金额出错", e)
                    }
                    p && (LOG("REPORT", "----------------上报SDK上报的数据", s), o.default.fetch({
                        url: _ + "/" + A,
                        data: s,
                        method: "POST",
                        header: {
                            "Content-Type": "application/json",
                            Xts: a,
                            Xsign: (0, d.default)("/" + A + f + a)
                        }
                    }).then((async t => {
                        if (200 != t.data.code && console.error("----------------上报接口状态码出错", t.data.code), 403 == t.data.code && C < 10) {
                            C += 1;
                            try {
                                let a = JSON.parse(t.data.data);
                                2e3 == a.STATUS && (g = a.DATA.Time - Math.round(new Date / 1e3), r.default.set({
                                    key: "reportsdk_time_diff",
                                    value: g
                                }), S(e))
                            } catch (e) {
                                console.error("----------------本地时间校验出错", e)
                            }
                        }
                    })).catch((e => {
                        console.error("----------------上报SDK返回逻辑执行出错", e)
                    })))
                } catch (e) {
                    console.error("----------------上报SDK执行出错", e)
                }
            }

            const T = {
                sdk_init: async function (e) {
                    m = !1;
                    let t = n.default.getInfo();
                    if (v.app_version = t.versionName ? t.versionName.replace(/\./g, "").toString() : "", v.source_pkg = t.source.packageName ? t.source.packageName : "", A = t.packageName, e && e.utm_ad_id && (v.utm_ad_id = e.utm_ad_id), e && e.utm_campaign && (v.utm_campaign = e.utm_campaign), e && e.utm_content && (v.utm_content = e.utm_content), e && e.utm_medium && (v.utm_medium = e.utm_medium), e && e.utm_source && (v.utm_source = e.utm_source), e && e.utm_term && (v.utm_term = e.utm_term), 0 == v.platform_code) {
                        let e = {data: ""};
                        try {
                            e = await i.default.getInfo({})
                        } catch (e) {
                        }
                        v.platform_code = e.data.platformVersionCode ? Number(e.data.platformVersionCode) : 0, v.os = e.data.osType ? e.data.osType.toLowerCase() : "", v.os_version = e.data.osVersionName ? e.data.osVersionName : "", v.screen_width = e.data.screenWidth ? ~~e.data.screenWidth : 0, v.screen_height = e.data.screenHeight ? ~~e.data.screenHeight : 0;
                        let t = e.data.brand && e.data.brand.toLowerCase();
                        v.brand = "honor" == t || "huawei" == t ? "huawei" : "redmi" == t || "xiaomi" == t ? "xiaomi" : "oppo" == t || "realme" == t || "oneplus" == t ? "oppo" : "vivo" == t ? "vivo" : "other", v.model = e.data.model ? e.data.model : ""
                    }
                    let a = {data: ""};
                    try {
                        a = await p.default.getType({})
                    } catch (e) {
                    }
                    switch (a.data.type) {
                        case"2g":
                            v.network = 3;
                            break;
                        case"3g":
                            v.network = 4;
                            break;
                        case"4g":
                            v.network = 5;
                            break;
                        case"wifi":
                            v.network = 2;
                            break;
                        case"none":
                            v.network = 1;
                            break;
                        case"5g":
                            v.network = 6;
                            break;
                        default:
                            v.network = 0
                    }
                    "huawei" == v.brand ? v.menubar_state = 1 : v.menubar_state = e.menubar_state ? 1 : 0, v.login_state = e && e.login_state ? 1 : 0, v.pay_state = e && e.pay_state ? 1 : 0, v.mode_state = e && e.mode_state ? 1 : 0;
                    let c = "abcdef0123456789";
                    if (!v.device_id) {
                        let e = {data: ""};
                        try {
                            e = await i.default.getUserId({})
                        } catch (e) {
                        }
                        if (e.data.userId) v.device_id = e.data.userId, LOG("AB分组数据上报埋点1", `${c.indexOf(e.data.userId.slice(0, 1).toLowerCase()) + 1}`), v.ext_field_5 = `${c.indexOf(e.data.userId.slice(0, 1).toLowerCase()) + 1}`, r.default.set({
                            key: "reportsdk_deviceid",
                            value: v.device_id
                        }); else {
                            let t = {data: ""};
                            try {
                                t = await r.default.get({key: "reportsdk_deviceid"})
                            } catch (e) {
                            }
                            t.data ? (v.device_id = t.data, LOG("AB分组数据上报埋点2", `${c.indexOf(e.data.userId.slice(0, 1).toLowerCase()) + 1}`), v.ext_field_5 = `${c.indexOf(e.data.userId.slice(0, 1).toLowerCase()) + 1}`) : (v.device_id = "SZ00" + Date.now() + parseInt(899999999999 * Math.random() + 1e11), LOG("AB分组数据上报埋点3", `${c.indexOf(e.data.userId.slice(0, 1).toLowerCase()) + 1}`), v.ext_field_5 = `${c.indexOf(e.data.userId.slice(0, 1).toLowerCase()) + 1}`, r.default.set({
                                key: "reportsdk_deviceid",
                                value: v.device_id
                            }))
                        }
                    }
                    if (v.session_id = (0, d.default)(v.device_id) + Date.now(), 0 == v.newer_state) {
                        let e = {data: ""};
                        try {
                            e = await r.default.get({key: "reportsdk_isNewUser"})
                        } catch (e) {
                        }
                        e.data ? async function () {
                            let e = await r.default.get({key: "first_visit"});
                            if (!e.data) return v.newer_state = 0;
                            try {
                                let t = (await r.default.get({key: "last_login_time"})).data,
                                    a = (new Date).getTime(), o = 864e5, i = Number(t) + e.data * o;
                                return Number(a) > Number(i) ? (LOG("首次访问过期"), r.default.set({
                                    key: "last_login_time",
                                    value: (new Date).getTime()
                                }), v.newer_state = 1) : (LOG("首次访问未过期"), r.default.set({
                                    key: "last_login_time",
                                    value: (new Date).getTime()
                                }), v.newer_state = 0)
                            } catch (e) {
                                LOG(e, "diff time error")
                            }
                        }() : (v.newer_state = 1, r.default.set({
                            key: "last_login_time",
                            value: (new Date).getTime()
                        }), r.default.set({
                            key: "reportsdk_isNewUser",
                            value: "1"
                        }), LOG("开屏", "首次进入"), r.default.set({
                            key: "FIRST_LOGIN_TIME",
                            value: (new Date).getTime()
                        }))
                    }
                    e && e.qd_id ? v.this_qid = e.qd_id : v.this_qid = "-1", e && e.link_id ? v.this_lid = e.link_id : v.this_lid = "-1";
                    let u = (new Date).getFullYear() + "/" + (new Date).getMonth() + "/" + (new Date).getDate(),
                        l = {data: ""};
                    try {
                        l = await r.default.get({key: "reportsdk_qudao"})
                    } catch (e) {
                    }
                    if (l.data) {
                        let e = JSON.parse(l.data);
                        e.date == u ? (v.first_qid = e.first_qid, v.first_lid = e.first_lid) : (v.first_qid = v.this_qid, v.first_lid = v.this_lid, r.default.set({
                            key: "reportsdk_qudao",
                            value: {date: u, first_qid: v.this_qid, first_lid: v.this_lid}
                        }))
                    } else v.first_qid = v.this_qid, v.first_lid = v.this_lid, r.default.set({
                        key: "reportsdk_qudao",
                        value: {date: u, first_qid: v.this_qid, first_lid: v.this_lid}
                    });
                    let _ = {data: ""};
                    try {
                        _ = await s.default.hasInstalled({})
                    } catch (e) {
                    }
                    v.icon_state = _.data ? 1 : 0;
                    let f = {data: ""};
                    try {
                        f = await r.default.get({key: "reportsdk_time_diff"})
                    } catch (e) {
                    }
                    if (f.data && (g = ~~f.data), !v.ip) if (e && e.ip && e.country && e.province && e.city) v.ip = e.ip, v.country = e.country, v.province = e.province, v.city = e.city; else try {
                        let e = Math.round(new Date / 1e3) + g, t = await o.default.fetch({
                            url: "https://ip.xayabx.com/",
                            header: {Xts: e, Xsign: (0, d.default)("/yunyousj@2021" + e)}
                        }), a = JSON.parse(t.data.data);
                        v.ip = a.ip ? a.ip : "", v.country = a.country ? a.country : "", v.province = a.region ? a.region : "", v.city = a.city ? a.city : ""
                    } catch (e) {
                        LOG("REPORT", "----------------获取ip信息出错", e), v.ip = "", v.country = "", v.province = "", v.city = ""
                    }
                    m = !0
                }, report: S, set_attr: function (e, t) {
                    v.hasOwnProperty(e) && (v[e] = t)
                }, get_attr: function (e) {
                    return v[e]
                }, page_show: function () {
                    {
                        let e = Date.now(), t = "";
                        try {
                            t = c.default.getState().path || "未知"
                        } catch (e) {
                            t = "未知"
                        }
                        O = {page_time: e, page_url: t}
                    }
                }, page_hide: async function () {
                    if (!O) return;
                    let e = Date.now(), t = e + 1e3 * g, a = Math.floor(t / 1e3), n = e - O.page_time,
                        s = O.page_url;
                    O = null, m || await new Promise(((e, t) => {
                        h++;
                        let a = JSON.parse(JSON.stringify(h)), o = setInterval((() => {
                            try {
                                m && (e(!0), y.forEach((e => {
                                    e.time == a && e.timer && clearInterval(e.timer)
                                })))
                            } catch (t) {
                                console.error("----------------上报SDK等待出错", t), e(!0)
                            }
                        }), 1e3);
                        y.push({timer: o, time: a})
                    }));
                    let p = JSON.parse(JSON.stringify(v));
                    if ("huawei" === p.brand) {
                        let e = {data: ""};
                        try {
                            e = await i.default.getInfo({})
                        } catch (e) {
                        }
                        "honor" == (e.data.brand && e.data.brand.toLowerCase()) && (p.brand = "honor")
                    }
                    let c = {
                        event_id: "used_duration",
                        event_name: "用户使用时长",
                        time_stamp: a,
                        time_stamp_millis: t,
                        duration: n,
                        page_url: s
                    }, u = Object.assign(p, c);
                    LOG("REPORT", "----------------上报SDK用户上报的数据", u), o.default.fetch({
                        url: _ + "/" + A,
                        data: u,
                        method: "POST",
                        header: {
                            "Content-Type": "application/json",
                            Xts: a,
                            Xsign: (0, d.default)("/" + A + f + a)
                        }
                    }).then((async e => {
                        if (200 != e.data.code && console.error("----------------上报接口状态码出错", e.data.code), 403 == e.data.code && C < 10) {
                            C += 1;
                            try {
                                let t = JSON.parse(e.data.data);
                                2e3 == t.STATUS && (g = t.DATA.Time - Math.round(new Date / 1e3), r.default.set({
                                    key: "reportsdk_time_diff",
                                    value: g
                                }), S(c))
                            } catch (e) {
                                console.error("----------------本地时间校验出错", e)
                            }
                        }
                    })).catch((e => {
                        console.error("----------------上报SDK返回逻辑执行出错", e)
                    }))
                }, kdxfReport: function (e, t, a) {
                    if (1 === a) {
                        let a = e.monitor.impress_urls;
                        const o = String(Date.now() / 1e3).split(".")[0];
                        for (let e of a) {
                            let a = e.replace("__REQ_WIDTH__", 960).replace("__REQ_HEIGHT__", 640).replace("__WIDTH__", 640).replace("__HEIGHT__", 320).replace("__TIMESTAMP__", o).replace("__TS__", Date.now());
                            u.default.getExternal(a, {}, t)
                        }
                    } else if (2 === a) {
                        let a = e.monitor.click_urls;
                        const o = Math.round(100 * Math.random()) + 540,
                            i = Math.round(100 * Math.random()) + 220,
                            n = String(Date.now() / 1e3).split(".")[0];
                        for (let e of a) {
                            let a = e.replace("__REQ_WIDTH__", 960).replace("__REQ_HEIGHT__", 640).replace("__WIDTH__", 640).replace("__HEIGHT__", 320).replace("__DOWN_X__", o).replace("__DOWN_Y__", i).replace("__UP_X__", o).replace("__UP_Y__", i).replace("__TIMESTAMP__", n).replace("__TS__", Date.now());
                            u.default.getExternal(a, {}, t)
                        }
                    } else 3 === a && (setTimeout((() => {
                        let a = e.monitor.download_start_urls;
                        for (let e of a) u.default.getExternal(e, {}, t)
                    }), 500), setTimeout((() => {
                        let a = e.monitor.download_complete_urls;
                        for (let e of a) u.default.getExternal(e, {}, t);
                        setTimeout((() => {
                            let a = e.monitor.install_start_urls;
                            for (let e of a) u.default.getExternal(e, {}, t);
                            setTimeout((() => {
                                let a = e.monitor.install_complete_urls;
                                for (let e of a) u.default.getExternal(e, {}, t)
                            }), 2e3)
                        }), 2e3)
                    }), 5e3))
                }
            };
            (a.g.__proto__ || a.g).REPORT_SDK = T, t.default = T
        }, 1588
    :
        (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = {
                advConfig: null,
                adClickBetweenTimes: 2e3,
                adRequestTimesTemp: 0,
                isShowToast: !1,
                materialType: 1,
                uploadFristPopClick: 0,
                adType: 1
            };
            let i = 0;

            function n(e, t) {
                LOG("AD", "广告ADSDKUTILS=>markAdRequestInterval===========>", e, t, o.uploadFristPopClick), 1 == o.uploadFristPopClick && -1 != t.sceneCode.indexOf("POP") && (COMMON_REPORT_UTILS.page_popup_click_report(t.popGroupName, t.popName), o.uploadFristPopClick = 2)
            }

            function r() {
                const e = TACTICS_SDK.getGlobalData("configInfo").config.is_open_template_ad, t = e && e.val,
                    a = POP_TOOLS.getAppInfoAttr("brand"),
                    o = POP_TOOLS.getAppInfoAttr("deviceInfo") && POP_TOOLS.getAppInfoAttr("deviceInfo").platformVersionCode;
                let i = Number(t) || 0;
                return 0 !== i && "xiaomi" === a && o < 1105 && (i = 0), i
            }

            function s() {
                let e = TACTICS_SDK.getGlobalData("new_ad_pos") && TACTICS_SDK.getGlobalData("new_ad_pos").ad_compare_price_type;
                return e ? e.split(",") : []
            }

            const d = {
                adConfigData: o, updataAdConfigData: function (e) {
                    try {
                        Object.assign(o, e), LOG("AD", "广告ADSDKUTILS========>updataAdConfigData数据更新完成", o, e)
                    } catch (e) {
                        LOG("AD", "广告ADSDKUTILS========>updataAdConfigData数据更新失败", e)
                    }
                }, getAd: function e(t) {
                    let {
                        scenario: a,
                        sceneCode: n,
                        adType: d,
                        adTimes: p,
                        popName: c,
                        popGroupName: u,
                        requestNum: l,
                        actionCode: _
                    } = t;
                    if (p >= 2) return LOG("AD", "广告ADSDKUTILS========>请求轮询完毕", t), t && t.fail && t.fail("没有获取到广告1");
                    if (5 == d) return LOG("AD", "广告ADSDKUTILS========>请求间隔限制toast提示", t), t && t.fail && t.fail({
                        message: "没有获取到广告",
                        code: 1
                    });
                    let f = function (e) {
                        LOG("AD", "广告ADSDKUTILS=>getAdType1", o.advConfig), LOG("AD", "广告ADSDKUTILS=>getAdType2", JSON.parse(JSON.stringify(e)));
                        let {sceneCode: t, adType: a, actionCode: n} = e, d = r();
                        if (2 === d) "boost" === n ? (d = i % 2 != 0, i++) : s().includes("1") && s().includes("3") ? d = 7 === AD_SDK_UTILS.adConfigData.adType : s().includes("3") || (d = !1); else if (3 === d) {
                            if (7 === a || 9 === a) return {adType: a, bqtTempId: ""}
                        } else {
                            let e = TACTICS_SDK.getGlobalData("configInfo").config.ad_type_priority;
                            const t = e ? Number(e.val) : 0;
                            if (t) if ("boost" === n) {
                                const e = TACTICS_SDK.getGlobalData("new_ad_pos") && TACTICS_SDK.getGlobalData("new_ad_pos").ad_template_config;
                                d = !!(e && e.length > 0)
                            } else d = 7 === AD_SDK_UTILS.adConfigData.adType;
                            LOG("SwapAd 广告类型 isOpenSwapAd:", t, "isOpenTemplateAd:", d, n)
                        }
                        if ("AD_POP_COMMON" === t && d) return {adType: 7, bqtTempId: ""};
                        if (o.advConfig.scene_switch_list) {
                            let e = o.advConfig.scene_switch_list.filter((e => e.scene_code == t && e.status));
                            if (e.length > 0) {
                                let t = e[0];
                                return 0 == a && (t.baidu_ad_priority && t.native_ad_priority < t.baidu_ad_priority || t.kdxf_ad_priority && t.native_ad_priority < t.kdxf_ad_priority) ? t.kdxf_ad_priority > t.baidu_ad_priority ? {
                                    adType: 6,
                                    bqtTempId: t.kdxf_ad_template
                                } : {adType: 3, bqtTempId: t.baidu_ad_template} : 3 == a ? {
                                    adType: 3,
                                    bqtTempId: t.baidu_ad_priority ? t.baidu_ad_template : ""
                                } : 6 == a ? {
                                    adType: 6,
                                    bqtTempId: t.kdxf_ad_priority ? t.kdxf_ad_template : ""
                                } : -1 == a ? t.kdxf_ad_priority > t.baidu_ad_priority ? {
                                    adType: 6,
                                    bqtTempId: t.kdxf_ad_priority ? t.kdxf_ad_template : ""
                                } : {
                                    adType: 3,
                                    bqtTempId: t.baidu_ad_priority ? t.baidu_ad_template : ""
                                } : {adType: 1, bqtTempId: ""}
                            }
                        }
                        if (o.advConfig.popup_switch_list) {
                            let e = o.advConfig.popup_switch_list.filter((e => e.scene_code == t));
                            if (e.length > 0) {
                                let t = e[0];
                                return LOG("AD", "广告ADSDKUTILS=>getAdType4", t), 0 == a && (t.baidu_ad_priority && t.app_ad_priority < t.baidu_ad_priority || t.kdxf_ad_priority && t.app_ad_priority < t.kdxf_ad_priority) ? t.kdxf_ad_priority > t.baidu_ad_priority ? {
                                    adType: 6,
                                    bqtTempId: "3002"
                                } : {adType: 3, bqtTempId: "3002"} : 3 == a ? {
                                    adType: 3,
                                    bqtTempId: t.baidu_ad_priority ? "3002" : ""
                                } : 4 == a ? {
                                    adType: 3,
                                    bqtTempId: t.baidu_ad_priority ? "9999" : ""
                                } : 6 == a ? {
                                    adType: 6,
                                    bqtTempId: t.kdxf_ad_priority ? "3002" : ""
                                } : {adType: 1, bqtTempId: ""}
                            }
                        }
                        return null
                    }(t);
                    if (!f) return LOG("AD", "广告ADSDKUTILS========>场景配置关闭", t), t && t.fail && t.fail("没有获取到广告");
                    if ((3 == f.adType || 6 == f.adType) && !f.bqtTempId) {
                        const a = 3 == f.adType ? "百度" : "科大讯飞";
                        return LOG("AD", `广告ADSDKUTILS========>命中${a}广告，且无${a}配置`, f), t.adTimes++, t.adType = 1, e(t)
                    }
                    t.adType = t && t.adType && 4 != t.adType && "AD_SCENE_READ_BANNER" !== n ? t.adType : f.adType, 7 === f.adType && (t.adType = 7);
                    let g = function (e) {
                        let {sceneCode: t} = e, a = 0;
                        return 0 == o.adRequestTimesTemp || o.advConfig.ad_request_config == [] || (o.adRequestTimesTemp + o.advConfig.ad_request_config.interval_time > (new Date).getTime() && ("AD_POP_CUSTOM" == t && (a = o.advConfig.ad_request_config.interval_custom_popup_type), -1 != t.indexOf("BACK") && (a = o.advConfig.ad_request_config.interval_back_popup_type), LOG("AD", "广告ADSDKUTILS=>checkRequestInterval 请求间隔命中", a)), LOG("AD", "广告ADSDKUTILS=>checkIsGetBqtAd", !1)), a
                    }(t);
                    if (3 !== t.adType && 6 !== t.adType && g) return 1 == g ? (LOG("AD", "广告ADSDKUTILS========>命中请求间隔,不触发"), t.adTimes = 2, e(t)) : 2 == g ? (LOG("AD", "广告ADSDKUTILS========>命中请求间隔,按照优先级继续请求"), t.adTimes++, t.adType = 3, e(t)) : 3 == g ? (o.isShowToast || (LOG("AD", "广告ADSDKUTILS========>命中请求间隔,Toas提示"), o.isShowToast = !0, setTimeout((() => {
                        o.isShowToast = !1
                    }), 500), $app_require$("@app-module/system.prompt").showToast({message: "操作太快了请重试!"})), t.adType = 5, e(t)) : void 0;
                    AD_SDK.getManuAdv({
                        scenario: a,
                        sceneCode: n,
                        popName: c,
                        popGroupName: u,
                        requestNum: l,
                        adType: t.adType,
                        adTimes: t.adTimes,
                        bqtTempId: f.bqtTempId,
                        actionCode: _,
                        success: function (e) {
                            t && t.success && t.success(e)
                        },
                        fail: function (a) {
                            1 == a || 2 == a ? (t.adTimes++, t.adType = -1, e(t)) : (t.adTimes++, t.adType = 1, e(t))
                        }
                    })
                }, markAdRequestInterval: n, clickManuAdvForBtn: function (advConfig, pageName) {
                    n("adClick", advConfig)
                    if ("manu_ad" == advConfig.type && POP_TOOLS.setIntervalAttr()) {
                        AD_SDK.clickManuAdvForBtn(advConfig, pageName)
                    }
                }, clickManuAdvForImg: function (e, t) {
                    n("adClick", e), "manu_ad" == e.type && POP_TOOLS.setIntervalAttr(), AD_SDK.clickManuAdvForImg(e, t)
                }, initSdk: function (e) {
                    return AD_SDK.initSdk(e)
                }, getNextOppoAdData: function (e, t, a, o, i, n, r, s) {
                    return AD_SDK.getNextOppoAdData({
                        scenario: e,
                        sceneCode: t,
                        adType: a,
                        adTimes: o,
                        popName: i,
                        popGroupName: n,
                        requestNum: r,
                        nativeAdvObj: s
                    })
                }, getNextXiaomiAdData: function (e, t, a, o, i, n, r, s, d) {
                    return AD_SDK.getNextXiaomiAdData({
                        scenario: e,
                        sceneCode: t,
                        adType: a,
                        adTimes: o,
                        popName: i,
                        popGroupName: n,
                        requestNum: r,
                        actionCode: s,
                        nativeAdvObj: d
                    }, d.isFirstLoad)
                }, getRequestHandle: function (e) {
                    return AD_SDK.getRequestHandle(e)
                }, getSpecialCondJudgment: function () {
                    let e, t, a = 0,
                        o = TACTICS_SDK.getGlobalData("configInfo").config.is_open_homeScreen_advert;
                    a = o && Number(o.val);
                    let i = TACTICS_SDK.getGlobalData("configInfo").config.is_open_screen_ad;
                    t = i && Number(i.val);
                    let n = TACTICS_SDK.getGlobalData("configInfo").config.is_open_second_screen_ad;
                    return e = n && Number(n.val), {
                        fristScreen: t,
                        secondScreen: e,
                        homeFristHeader: a,
                        adScreen: TACTICS_SDK.getGlobalData("new_ad_pos") && TACTICS_SDK.getGlobalData("new_ad_pos").ad_open_screen,
                        adChapterHead: TACTICS_SDK.getGlobalData("new_ad_pos") && TACTICS_SDK.getGlobalData("new_ad_pos").ad_chapter_head
                    }
                }, getEcpmType: r, getEcpmCompareTypes: s, createYlhSplashAd: function (e) {
                    let t = TACTICS_SDK.getGlobalData("configInfo").config.is_open_ylh_splash;
                    t = t && Number(t.val) || 0, t && AD_SDK.createYlhSplashAd(e)
                }
            };
            (a.g.__proto__ || a.g).AD_SDK_UTILS = d, t.default = d
        }, 2449
    :
        (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var a = {
                AD_TYPE: 0,
                CURRENT_AD_TYPE: 0,
                CURRENT_CONTEXT: null,
                TIMER: null,
                FUNC_NAME: "",
                ARGUMENTS: [],
                TIMES: 2e3,
                AD_UTILS_DATA_INIT_TYPE: 1,
                CURRENT_REPORT_UTILS: null
            };

            function o(e = !1) {
                e && (a.ARGUMENTS = a.ARGUMENTS.concat([e])), a.CURRENT_CONTEXT[a.FUNC_NAME](...a.ARGUMENTS), a.CURRENT_CONTEXT = null, a.FUNC_NAME = "", a.ARGUMENTS = [], a.AD_TYPE = 0, a.TIMER && (clearTimeout(a.TIMER), a.TIMER = null)
            }

            function i(e) {
                if ("xiaomi" !== e) return !1;
                let t = TACTICS_SDK.getGlobalData("configInfo").config.xiaomi_self_rendering_2;
                return t = t && Number(t.val) || 0, t && DEVICE_UTILS.getHost().versionCode >= 11030201
            }

            t.default = {
                ad_utils_init: function () {
                    1 === a.AD_UTILS_DATA_INIT_TYPE && (Object.defineProperty(a, "AD_TYPE", {
                        set: function (e) {
                            switch (a.CURRENT_AD_TYPE = e, Number(e)) {
                                case 1:
                                    a.TIMER = setTimeout((() => {
                                        LOG("AD_UTILS", "timeout"), o(!0)
                                    }), a.TIMES);
                                    break;
                                case 2:
                                    a.TIMER && (clearTimeout(a.TIMER), a.TIMER = null)
                            }
                        }, get: function () {
                            return a.CURRENT_AD_TYPE
                        }
                    }), a.AD_UTILS_DATA_INIT_TYPE = 2)
                }, adClickHandler: function (e, t, o) {
                    1 != a.CURRENT_AD_TYPE && e && t && (LOG("AD_UTILS", "adclick"), a.CURRENT_CONTEXT = e, a.ARGUMENTS = o, a.FUNC_NAME = t, a.AD_TYPE = 1)
                }, viewShowHandler: function () {
                    2 === a.CURRENT_AD_TYPE && (LOG("AD_UTILS", "viewshow"), o())
                }, viewHideHandler: function e(t = !0) {
                    a.FUNC_NAME || a.CURRENT_CONTEXT || !t ? 1 === a.CURRENT_AD_TYPE && (LOG("AD_UTILS", "viewhide"), a.AD_TYPE = 2) : setTimeout((() => {
                        e(!1)
                    }), a.TIMES > 1e3 ? 1e3 : a.TIMES)
                }, change_ad_utils_data: function (e) {
                    "object" == typeof e && Object.assign(a, e)
                }, isXM1: function (e) {
                    return "xiaomi" === e && !i(e)
                }, isXM2: i, isVivo1: function (e) {
                    let t = !1;
                    try {
                        t = e && "vivo" == e.$app.$def.brand && e.$app.$def.deviceInfo && e.$app.$def.deviceInfo.platformVersionCode <= 1093
                    } catch (e) {
                    }
                    return t
                }, isVivo2: function (e) {
                    let t = !1;
                    try {
                        e && "vivo" == e.$app.$def.brand && (t = !0), t = e && "vivo" == e.$app.$def.brand && e.$app.$def.deviceInfo && e.$app.$def.deviceInfo.platformVersionCode > 1093
                    } catch (e) {
                    }
                    return t
                }, isOpenScreenSlideTouch: function () {
                    let e = TACTICS_SDK.getGlobalData("configInfo").config["open_screen_ slide_touch"];
                    return e && Number(e.val) || 0
                }
            }
        }, 2401
    :
        (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = {clickEventNameData: {}};
            const i = {
                clearClickData: function () {
                    for (var e in o.clickEventNameData) delete o.clickEventNameData[e]
                }, dom_click_vali_shake: function (e, t = 500) {
                    if (o.clickEventNameData[e]) {
                        let a = (new Date).getTime();
                        if (a <= o.clickEventNameData[e].endTimestamp) return !1;
                        {
                            let i = {timestamp: a, endTimestamp: a + t};
                            return o.clickEventNameData[e] = i, !0
                        }
                    }
                    {
                        let a = (new Date).getTime();
                        return o.clickEventNameData[e] = {timestamp: a, endTimestamp: a + t}, !0
                    }
                }, click_utils_data: o
            };
            (a.g.__proto__ || a.g).CLICK_UTILS = i, t.default = i
        }, 5556
    :
        (e, t, a) => {
            "use strict";

            function o(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, o)
                }
                return a
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(a), !0).forEach((function (t) {
                        var o, i, n, r;
                        o = e, i = t, n = a[t], (i = "symbol" == typeof (r = function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var a = e[Symbol.toPrimitive];
                            if (void 0 !== a) {
                                var o = a.call(e, "string");
                                if ("object" != typeof o) return o;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(i)) ? r : String(r)) in o ? Object.defineProperty(o, i, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : o[i] = n
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var n = {
                ext_field_10: "",
                ext_field_4: "",
                ext_field_1: "",
                page_url: "",
                isCheckReport: !1,
                channelId: "",
                linkId: "",
                utm_ad_id: "",
                utm_campaign: "",
                utm_content: "",
                utm_source: "",
                utm_term: "",
                utm_medium: "",
                init_status: 0
            };

            function r(e, t) {
                n.hasOwnProperty(e) ? (n[e] = t, console.log("=============>set_attr", e, t, n)) : console.error(`common_report_utils.js -> function (set_attr) error -> reason:reprot_utils_data key:${e} is undefined`)
            }

            function s(e) {
                const {ext_field_10: t, page_url: a, ext_field_4: o, ext_field_1: r} = n;
                try {
                    let n = JSON.parse(JSON.stringify(e));
                    LOG("reportFunc==========>", i(i({}, n), {}, {
                        ext_field_10: t,
                        page_url: a
                    })), REPORT_SDK.report(i(i({}, n), {}, {
                        ext_field_10: t,
                        page_url: a,
                        ext_field_4: o,
                        ext_field_1: r
                    }))
                } catch (e) {
                }
            }

            function d(e, t, a) {
                if (e && t) {
                    const o = n[e];
                    r(e, t), a && a(), r(e, o || "")
                } else a && a()
            }

            const p = {
                set_attr: r,
                report_initSdk: function (e) {
                    if ("object" != typeof e || n.init_status) return;
                    r("init_status", 1);
                    const {
                        channelId: t,
                        linkId: a,
                        utm_ad_id: o,
                        utm_campaign: i,
                        utm_content: s,
                        utm_source: d,
                        utm_term: p,
                        utm_medium: c
                    } = e;
                    n = Object.assign({}, n, e), REPORT_SDK.sdk_init({
                        qd_id: t,
                        link_id: a,
                        utm_ad_id: o,
                        utm_campaign: i,
                        utm_content: s,
                        utm_source: d,
                        utm_medium: c,
                        menu_bar: 0,
                        login_state: 0,
                        pay_state: 0,
                        mode_state: 0
                    })
                },
                page_show_report: function (e, t = "", a = "", o = "", i = "", n = "") {
                    try {
                        s({
                            event_id: "page_show",
                            event_name: "n_页面展示",
                            referer: e,
                            result: t,
                            page_name: a,
                            page_type: o,
                            utm_term: n,
                            ext_field_9: i
                        })
                    } catch (e) {
                    }
                },
                pop_show_report: function (e, t, a, o, i, n = "原生") {
                    try {
                        s({
                            event_id: "popup_show",
                            event_name: "n_弹窗展示",
                            ad_position: e,
                            page_type: t,
                            ad_network: a,
                            referer: o,
                            ext_field_9: i,
                            ad_type: n
                        })
                    } catch (e) {
                    }
                },
                page_click_report: function (e, t = "", a = "", o = "", i = "", n = "", r = 0, d = "") {
                    try {
                        s({
                            event_id: "page_click",
                            event_name: "n_页面点击元素",
                            element_name: e,
                            result: a,
                            page_name: o,
                            ad_position: i,
                            page_type: n,
                            duration: r,
                            ext_field_9: t,
                            ext_field_1: d
                        })
                    } catch (e) {
                    }
                },
                pop_click_report: function (e, t, a, o, i, n, r) {
                    try {
                        s({
                            event_id: "popup_click",
                            event_name: "n_弹窗点击",
                            ad_position: e,
                            result: t,
                            ad_network: a,
                            ad_type: o,
                            element_name: i,
                            ext_field_9: n,
                            scene: r
                        })
                    } catch (e) {
                    }
                },
                hap_report: function (e = "", t = "", a = "", o = "", i = "", n = "") {
                    try {
                        s({
                            event_id: "hap",
                            event_name: "启动",
                            ad_type: e,
                            ad_position: t,
                            ad_id: a,
                            ad_style: o,
                            element_name: i,
                            page_type: n
                        })
                    } catch (e) {
                    }
                },
                add_icon_report: function (e, t, a, o = "") {
                    try {
                        s({
                            event_id: "add_icon",
                            event_name: "创建图标",
                            result: e,
                            scene: t,
                            referer: a,
                            page_name: o
                        })
                    } catch (e) {
                    }
                },
                error_log_report: function (e, t, a, o) {
                    try {
                        s({
                            event_id: "error_log",
                            event_name: "系统异常",
                            page_name: e,
                            result: t,
                            referer: a,
                            page_type: o
                        })
                    } catch (e) {
                    }
                },
                used_duration_report: function (e) {
                    try {
                        s({event_id: "used_duration", event_name: "用户使用时长", duration: e})
                    } catch (e) {
                    }
                },
                strategy_obtain_report: function (e, t, a, o, i) {
                    try {
                        s({
                            event_id: "strategy_obtain",
                            event_name: "策略获取",
                            result: e,
                            element_name: t,
                            referer: a,
                            ext_field_4: o,
                            scene: i
                        })
                    } catch (e) {
                    }
                },
                ad_overtime_report: function (e) {
                    try {
                        s({event_id: "ad_overtime", event_name: "广告跳转超时", ad_position: e})
                    } catch (e) {
                    }
                },
                back_click_report: function (e, t, a) {
                    try {
                        s({
                            event_id: "back_click",
                            event_name: "物理返回",
                            ad_position: e,
                            page_type: t,
                            element_name: a
                        })
                    } catch (e) {
                    }
                },
                app_state_report: function (e, t, a = "") {
                    EVENT_BUS.emit("appStatus", t);
                    try {
                        s({event_id: "app_state", event_name: "应用状态", referer: e, result: t, utm_term: a})
                    } catch (e) {
                    }
                },
                ad_sdk_request_report: function (e, t, a, o, i, n, r, d = "1", p = "null") {
                    try {
                        s({
                            event_id: "ad_sdk_request",
                            event_name: "广告请求SDK",
                            ad_id: e,
                            ad_network: t,
                            ad_type: a,
                            page_name: o,
                            page_type: i,
                            ad_position: n,
                            result: r,
                            ext_field_9: d,
                            ad_style: p
                        })
                    } catch (e) {
                    }
                },
                ad_sdk_show_report: function (e, t, a, o, i, n, r = "1", p = "null", c = "", u, l) {
                    try {
                        d("ext_field_1", u, (() => {
                            s({
                                event_id: "ad_sdk_show",
                                event_name: "广告展示SDK",
                                ad_id: e,
                                ad_network: t,
                                ad_type: a,
                                page_name: o,
                                page_type: i,
                                ad_position: n,
                                ext_field_9: r,
                                ad_style: p,
                                result: c,
                                ext_field_2: l
                            })
                        }))
                    } catch (e) {
                    }
                },
                ad_sdk_click_report: function (e, t, a, o, i, n, r, p = "1", c = "null", u, l, _, f) {
                    if (CLICK_UTILS.dom_click_vali_shake("ad_sdk_click_report", 1e3)) try {
                        d("ext_field_1", l, (() => {
                            s({
                                event_id: "ad_sdk_click",
                                event_name: "广告点击SDK",
                                ad_id: e,
                                ad_network: t,
                                ad_type: a,
                                page_name: o,
                                page_type: i,
                                ad_position: n,
                                element_name: r,
                                ext_field_9: p,
                                ad_style: c,
                                scene: u,
                                ext_field_2: _,
                                utm_term: f
                            })
                        }))
                    } catch (e) {
                    } else LOG("广告点击SDK上报防抖拦截")
                },
                custom_popup_show_report: function (e, t, a, o, i, n, r, p, c = "", u = "", l, _ = "原生", f) {
                    try {
                        d("ext_field_1", f, (() => {
                            s({
                                event_id: "custom_popup_show",
                                event_name: "n_自定义弹窗展示",
                                ad_id: c,
                                ad_network: e,
                                page_type: t,
                                ad_position: a,
                                ad_style: o,
                                page_name: i,
                                ad_type: _,
                                ext_field_9: n,
                                ext_field_2: r,
                                ext_field_3: p,
                                scene: u,
                                referer: l
                            })
                        }))
                    } catch (e) {
                    }
                },
                custom_popup_click_report: function (e, t, a, o, i, n, r, p, c, u = "", l = "", _, f = "原生", g) {
                    try {
                        d("ext_field_1", g, (() => {
                            s({
                                event_id: "custom_popup_click",
                                event_name: "n_自定义弹窗点击",
                                page_type: e,
                                ad_position: t,
                                ad_network: a,
                                element_name: o,
                                ad_style: i,
                                page_name: n,
                                ext_field_9: r,
                                ad_type: f,
                                ad_id: u,
                                scene: l,
                                ext_field_2: p,
                                ext_field_3: c,
                                referer: _
                            })
                        }))
                    } catch (e) {
                    }
                },
                custom_back_popup_show_report: function (e, t, a, o, i = "原生") {
                    try {
                        s({
                            event_id: "custom_back_popup_show",
                            event_name: "n_自定义返回弹窗展示",
                            ad_network: a,
                            page_type: e,
                            ad_position: t,
                            ad_style: o,
                            ad_type: i
                        })
                    } catch (e) {
                    }
                },
                custom_back_popup_click_report: function (e, t, a, o, i, n = "原生") {
                    try {
                        s({
                            event_id: "custom_back_popup_click",
                            event_name: "n_自定义返回弹窗点击",
                            ad_network: a,
                            page_type: e,
                            ad_position: t,
                            element_name: o,
                            ad_style: i,
                            ad_type: n
                        })
                    } catch (e) {
                    }
                },
                page_popup_click_report: function (e, t) {
                    try {
                        s({
                            event_id: "page_popup_click",
                            event_name: "n_拉起首个弹窗点击",
                            page_type: e,
                            ad_position: t
                        })
                    } catch (e) {
                    }
                },
                page_close_report: function (e) {
                    try {
                        s({event_id: "page_close", event_name: "n_页面关闭", ext_field_9: e})
                    } catch (e) {
                    }
                },
                ad_sdk_take: function (e, t) {
                    try {
                        s({
                            event_id: "ad_sdk_take",
                            event_name: "广告拿取SDK",
                            ad_id: e.id,
                            ad_network: e.ad_network,
                            ad_type: e.ad_type,
                            page_name: e.scenario,
                            page_type: e.popGroupName,
                            ad_position: e.popName,
                            ad_style: e.ad_style,
                            ext_field_9: String(e.adRequestNum),
                            page_url: t,
                            result: e.result,
                            referer: e.referer || ""
                        })
                    } catch (e) {
                    }
                },
                ad_sdk_back: function (e, t) {
                    try {
                        s({
                            event_id: "ad_sdk_back",
                            event_name: "广告回池SDK",
                            ad_id: e.id,
                            ad_network: e.ad_network,
                            ad_type: e.ad_type,
                            page_name: e.scenario,
                            page_type: e.popGroupName,
                            ad_position: e.popName,
                            ad_style: e.ad_style,
                            ext_field_9: String(e.adRequestNum),
                            page_url: t,
                            result: e.result
                        })
                    } catch (e) {
                    }
                },
                app_wakeup: function (e, t) {
                    try {
                        s({
                            event_id: "app_wakeup",
                            event_name: "APP唤醒",
                            ad_id: e.id,
                            ad_type: e.ad_type,
                            page_name: e.scenario,
                            page_type: e.popGroupName,
                            ad_position: e.popName,
                            ext_field_9: String(e.adRequestNum),
                            page_url: t
                        })
                    } catch (e) {
                    }
                },
                area_show_report: function (e, t, a, o, i) {
                    try {
                        s({
                            event_id: "area_show",
                            event_name: "n_区域展示",
                            ad_network: a,
                            ad_type: o,
                            page_name: i,
                            page_type: e,
                            ad_position: t
                        })
                    } catch (e) {
                    }
                },
                monitor_control_index_report: function (e, t, a = "") {
                    const {ext_field_10: o} = n;
                    try {
                        let n = JSON.parse(JSON.stringify({
                            event_id: "monitor_control_index",
                            event_name: "监控指标",
                            page_type: e,
                            duration: t,
                            result: a
                        }));
                        LOG("reportFunc==========>monitor_control_index_report", i(i({}, n), {}, {page_url: o})), REPORT_SDK.report(i(i({}, n), {}, {page_url: o}))
                    } catch (e) {
                    }
                },
                ad_sdk_install_report: function (e, t, a, o, i, n, r, d = "1", p = "null") {
                    try {
                        s({
                            event_id: "Install_status",
                            event_name: "安装状态监听",
                            ad_id: e,
                            ad_network: t,
                            ad_type: a,
                            page_name: o,
                            page_type: i,
                            ad_position: n,
                            element_name: r,
                            ext_field_9: d,
                            ad_style: p
                        })
                    } catch (e) {
                    }
                },
                list_show_report: function (e, t, a) {
                    try {
                        s({event_id: "list_show", event_name: "列表曝光", page_type: e, item_ids: t, result: a})
                    } catch (e) {
                    }
                },
                list_click_report: function (e, t, a) {
                    try {
                        s({
                            event_id: "list_click",
                            event_name: "列表点击",
                            page_type: e,
                            item_ids: t,
                            result: a
                        })
                    } catch (e) {
                    }
                },
                notification_show_report: function (e, t, a, o = "", i = "") {
                    try {
                        s({
                            event_id: "message_show",
                            event_name: "通知消息推送",
                            page_type: e,
                            element_name: t,
                            page_name: a,
                            ad_position: o,
                            result: i
                        })
                    } catch (e) {
                    }
                },
                notification_click_report: function (e, t, a, o = "", i = "") {
                    try {
                        s({
                            event_id: "message_click",
                            event_name: "通知消息点击",
                            page_type: e,
                            element_name: t,
                            page_name: a,
                            ad_position: o,
                            result: i
                        })
                    } catch (e) {
                    }
                },
                ad_cancel_report: function (e, t = "", a = "") {
                    try {
                        s({event_id: "ad_cancel", event_name: "广告免除", referer: e, page_name: a, result: t})
                    } catch (e) {
                    }
                },
                element_show_report: function (e = "", t = 0, a = "") {
                    try {
                        s({
                            event_id: "element_show",
                            event_name: "n_页面展示元素",
                            duration: t,
                            element_name: a,
                            result: e
                        })
                    } catch (e) {
                    }
                },
                return_source_app_report: function (e = "") {
                    try {
                        d("page_url", e, (() => {
                            s({event_id: "return_source_app", event_name: "返回来源应用"})
                        }))
                    } catch (e) {
                    }
                }
            };
            (a.g.__proto__ || a.g).COMMON_REPORT_UTILS = p, t.default = p
        }, 2854
    :
        (e, t) => {
            "use strict";

            function a(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, o)
                }
                return a
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(o), !0).forEach((function (t) {
                        var a, i, n, r;
                        a = e, i = t, n = o[t], (i = "symbol" == typeof (r = function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var a = e[Symbol.toPrimitive];
                            if (void 0 !== a) {
                                var o = a.call(e, "string");
                                if ("object" != typeof o) return o;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(i)) ? r : String(r)) in a ? Object.defineProperty(a, i, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : a[i] = n
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : a(Object(o)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
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
                        o = this.useHeaven ? Math.floor(t / 3600 % 24) : Math.floor(t / 3600),
                        n = Math.floor(t / 60 % 60), r = Math.floor(t % 60), s = this.msArr[this.msIndex];
                    return this.msIndex++, {
                        heaven: a,
                        hour: o < 10 ? "0" + o : String(o),
                        minute: n < 10 ? "0" + n : String(n),
                        second: r < 10 ? "0" + r : String(r),
                        ms: s
                    }
                }

                constructor(e = {}) {
                    const {useMs: t = 1, useHeaven: a, useNowTime: o} = e;
                    this.useMs = t, this.useHeaven = a, this.useNowTime = o;
                    let i = t;
                    for (this.msArr = []; i >= 0;) this.msArr.push(String(i - 1)), i--;
                    this.msIndex = 0, this.init()
                }

                start(e, t) {
                    this.init();
                    const a = i.isEmpty(e), o = i.isEmpty(this.config);
                    if (a) return this.error = "params error!", this;
                    e = o ? e : this.config, o && (this.config = e), this.cb = t;
                    const n = 1e3 / this.useMs;
                    Object.assign(e, {
                        startTime: i.fixTime(e.startTime),
                        endTime: i.fixTime(e.endTime),
                        nowTime: i.fixTime(e.nowTime)
                    });
                    const {endTime: r} = e;
                    return clearInterval(this.timer), this.timer = setInterval((() => {
                        const a = e.nowTime || parseInt(String((new Date).getTime() / 1e3));
                        this.msIndex === this.useMs && (this.msIndex = 0);
                        const o = this.translateTime(r - a);
                        a - 1 >= r ? (clearInterval(this.timer), t && t(null), this.callback && this.callback(null)) : (t && t(o), this.callback && this.callback(o)), this.useNowTime && (1 === this.useMs || this.msIndex === this.msArr.length - 1) && (this.config.nowTime += 1)
                    }), n), this
                }

                stop() {
                    return clearInterval(this.timer), this.init(), this
                }

                restart(e, t) {
                    this.stop();
                    const a = t || this.cb;
                    return this.start(o(o({}, this.config), e), a), this
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
        }, 2551
    :
        (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var a = i($app_require$("@app-module/system.device")),
                o = (i($app_require$("@app-module/system.vibrator")), i($app_require$("@app-module/system.geolocation")));

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var n = {
                getInfo: null,
                getId: null,
                getUserId: null,
                getOAID: null,
                getPlatform: null,
                getHost: null,
                geolocation: null
            };
            t.default = {
                getInfo: function () {
                    return new Promise(((e, t) => {
                        n.getInfo ? e(n.getInfo) : a.default.getInfo({
                            success: t => {
                                e(t)
                            }, fail: e => {
                                t(e)
                            }
                        })
                    }))
                }, getId: function (e = ["device", "mac"]) {
                    return new Promise(((t, o) => {
                        n.getId ? t({id: n.getId, mac: n.mac}) : a.default.getId({
                            type: e, success: e => {
                                n.getId = e.device, n.mac = e.mac, t(e)
                            }, fail: e => {
                                o(e)
                            }
                        })
                    }))
                }, getUserId: function () {
                    return new Promise(((e, t) => {
                        n.getUserId ? e(n.getUserId) : a.default.getUserId({
                            success: t => {
                                n.getUserId = t, e(t)
                            }, fail: e => {
                                t(e)
                            }
                        })
                    }))
                }, getOAID: function () {
                    return new Promise(((e, t) => {
                        n.getOAID ? e(n.getOAID) : a.default.getOAID({
                            success: t => {
                                n.getOAID = t, e(t)
                            }, fail: e => {
                                t(e)
                            }
                        })
                    }))
                }, getPlatform: function () {
                    return n.getPlatform || (n.getPlatform = a.default.platform), n.getPlatform
                }, getHost: function () {
                    return n.getHost || (n.getHost = a.default.host), n.getHost
                }, getGeolocation: function () {
                    return new Promise((e => {
                        n.geolocation ? e(n.geolocation) : o.default.getLocation({
                            success: function (t) {
                                n.geolocation = t, e(n.geolocation)
                            }, fail: function (t, a) {
                                n.geolocation = {}, e(n.geolocation)
                            }
                        })
                    }))
                }
            }
        }, 3026
    :
        (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            const o = a.g.__proto__ || a.g;
            t.default = class {
                constructor() {
                    o.eventBus = {}
                }

                on(e, t, a) {
                    if ("string" != typeof e) throw TypeError("传入的事件名数据类型需为string类型");
                    if ("function" != typeof t) throw TypeError("传入的回调函数数据类型需为function类型");
                    let i = o.eventBus[e];
                    i || (i = [], o.eventBus[e] = i), i.push({eventCallback: t, thisArg: a})
                }

                emit(e, ...t) {
                    if ("string" != typeof e) throw TypeError("传入的事件名数据类型需为string类型");
                    const a = o.eventBus[e];
                    a ? a.forEach((e => {
                        e.eventCallback.apply(e.thisArg, t)
                    })) : console.warn(`${a}该触发的事件名并未挂载到 eventBus 上`)
                }

                off(e, t) {
                    if ("string" != typeof e) throw TypeError("传入的事件名数据类型需为string类型");
                    if ("function" != typeof t) throw TypeError("传入的回调函数数据类型需为function类型");
                    const a = o.eventBus[e] || [];
                    if (a.length) {
                        const e = [...a];
                        for (let o = 0; o < e.length; o++) {
                            const i = e[o];
                            if (i.eventCallback === t) {
                                const e = a.indexOf(i);
                                a.splice(e, 1)
                            }
                        }
                    }
                    0 === a.length && delete o.eventBus[e]
                }

                once(e, t, a) {
                    if ("string" != typeof e) throw TypeError("传入的事件名数据类型需为string类型");
                    if ("function" != typeof t) throw TypeError("传入的回调函数数据类型需为function类型");
                    const i = (...n) => {
                        o.off(e, i), t.apply(a, n)
                    };
                    o.on(e, i)
                }

                clear(e) {
                    "string" == typeof e ? o.eventBus[e] = [] : console.warn("传入的事件名数据类型需为string类型")
                }
            }
        }, 1218
    :
        (e, t, a) => {
            "use strict";
            var o;
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, (o = $app_require$("@app-module/system.fetch")) && o.__esModule, a.g.__proto__ || a.g, t.default = function (e, ...t) {
            }
        }, 9990
    :
        (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = n(a(8903)), i = n(a(8242));

            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function r(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, o)
                }
                return a
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(a), !0).forEach((function (t) {
                        var o, i, n, r;
                        o = e, i = t, n = a[t], (i = "symbol" == typeof (r = function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var a = e[Symbol.toPrimitive];
                            if (void 0 !== a) {
                                var o = a.call(e, "string");
                                if ("object" != typeof o) return o;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(i)) ? r : String(r)) in o ? Object.defineProperty(o, i, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : o[i] = n
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : r(Object(a)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            n($app_require$("@app-module/system.prompt"));
            var d = null;
            let p = 0, c = "", u = !0;
            var l = {
                name: "Main",
                incloudCodeArr: ["READ_WELFARE", "READ_READINFO", "READ_BOOKINFO"],
                tabCheckName: "selectIndex",
                tabDefaultIndex: 1,
                defaultRoutePath: "/pagesA/Main"
            };
            let _ = "", f = {}, g = {}, m = null, h = null;

            function y(e, t, a) {
                switch (LOG("customPopBackPressHandler===>无可用广告", e, t), e.actionCode) {
                    case"PAGE_ENTRY":
                    case"POPUP_CLOSE":
                    default:
                        u && A(e, t).catch((e => {
                        }));
                        break;
                    case"PAGE_BACK":
                        u ? A(e, t).catch((e => {
                            S(t.pageCode, a, !0, {ad_position: "", page_type: ""})
                        })) : S(t.pageCode, a, !0, {ad_position: "", page_type: ""})
                }
            }

            function A(e, t, a = "request_fail") {
                return LOG("canShowActionPop mxt ", e), new Promise(((o, i) => {
                    "request_fail" == a && (u = !1), TACTICS_SDK_UTILS.getActionPopupCode(e.actionCode, a, t.pageCode, t.pageOrigin).then((n => {
                        if (LOG("popUtils mxt ", n), _ = a, n.code) "Baidu" == n.code.split("_")[0] || n.code.includes("Encourage") ? d.addBqtVideoPop({}, n.code, e.actionCode, e.customAction) : -1 !== n.code.indexOf("MiddleNative") ? d.addMiddlePop({}, n.code, e.actionCode, e.customAction) : -1 !== n.code.indexOf("MiddleVideo") || -1 !== n.code.indexOf("MiddleBaidu") ? d.addMiddleBaiduVideoAdPop({}, n.code, e.actionCode, e.customAction) : -1 !== n.code.indexOf("MiddleApp") ? d.addAppMiddlePop({}, n.code, e.actionCode, e.customAction) : -1 !== n.code.indexOf("AppAd") ? d.addAppPop({}, n.code, e.actionCode, e.customAction) : -1 !== n.code.indexOf("BaiduScreenInsertion") ? d.bqtScreenInsPop({}, n.code, e.actionCode, e.customAction) : "Kdxf" == n.code.split("_")[0] || -1 !== n.code.indexOf("MiddleKdxf") ? d.addKdxfAdPop && d.addKdxfAdPop({}, n.code, e.actionCode, e.customAction) : (d.nativeBoostGroupController.actionCode = e.actionCode, d.nativeBoostGroupController.customAction = e.customAction, d.nativeBoostGroupController.popCode = n.code, d.nativeBoostGroupController.backPressTimes++), d.isAllowBackPress = !0, o(); else {
                            d.isAllowBackPress = !0;
                            let a = {
                                ad_id: "",
                                ad_network: 1,
                                ad_type: "",
                                page_name: w(e.actionCode),
                                page_type: "",
                                ad_position: "",
                                ad_style: "",
                                ext_field_9: "1",
                                result: "失败",
                                referer: w(e.actionCode)
                            };
                            console.log("2222222222", a), COMMON_REPORT_UTILS.ad_sdk_take(a, t.pageName), i()
                        }
                    })).catch((t => {
                        if (LOG("==err", t, e.actionCode), d.isAllowBackPress = !0, "READ_AD_TEXT_CUSTOM" == e.actionCode) try {
                            d.textAdLoadFaildHandler()
                        } catch (e) {
                        }
                        i(t)
                    }))
                }))
            }

            function C(e, t, a, o) {
                switch (LOG("customPopAdClickHandler===================>广告点击,广告类型：", o, t), o) {
                    case 1:
                        AD_SDK_UTILS.clickManuAdvForBtn(e.popData.advConfig, t.pageName, !1);
                        break;
                    case 2:
                        AD_SDK_UTILS.clickManuAdvForImg(e.popData.advConfig, t.pageName, !1);
                        break;
                    case 3:
                        D(e, t, a);
                        break;
                    default:
                        console.info("dialog 广告点击参数错误")
                }
                3 != o && (LOG("customPopAdClickHandler===>", e), AD_UTILS.adClickHandler(POP_TOOLS, "readFunctionPopAdClick", [e, t, a]))
            }

            function v(e, t, a = !1, o = null) {
                if (LOG("-----------------stacksPath", e, t), e) {
                    let n = {pageOrigin: t, pathUrl: d.pathUrl};
                    n.pathUrl = d.pathUrl;
                    var i = "";
                    if (-1 !== e.indexOf("?")) {
                        let t = e.split("?");
                        if (i = t[0], t.length > 1) if (-1 !== t[1].indexOf("&")) {
                            let e = t[1].split("&");
                            for (let t = 0; t < e.length; t++) {
                                let a = e[t].split("=");
                                n[a[0]] = a[1]
                            }
                        } else {
                            let e = t[1].split("=");
                            n[e[0]] = e[1]
                        }
                    } else i = e;
                    let r = $utils.routeCheckUrl(i);
                    LOG("-----------------stacksPath isCur", r), r ? d.routerJumpSelfHandeler(n) : (d.$app && (d.$app.$def.tabListType = [0, 0, 0, 0, 0]), $utils.routetheUrl(i, n, !0)), a && COMMON_REPORT_UTILS.back_click_report(o.ad_position, o.page_type, "跳转页面")
                } else !d.pageDetail.pageRoute || -1 === d.pageDetail.pageRoute.indexOf(l.name) && -1 === d.pageDetail.pageRoute.indexOf("Power-Page") ? (a && COMMON_REPORT_UTILS.back_click_report(o.ad_position, o.page_type, "跳转页面"), setTimeout((() => {
                    if ($utils.routeCheckPages()) LOG("-----------------stacksPath", 2), $utils.goBack(); else {
                        let e = new Object;
                        d.$app.$def.tabListType = [0, 0, 0, 0, 0], e[`${l.tabCheckName}`] = l.tabDefaultIndex, e.pathUrl = d.pageDetail.pageName, $utils.routeReplacetheUrl(l.defaultRoutePath, e), LOG("-----------------stacksPath", 3)
                    }
                }), 200)) : (LOG("-----------------stacksPath", 1), a && COMMON_REPORT_UTILS.back_click_report(o.ad_position, o.page_type, "退出应用"), d.$app.exit())
            }

            async function O(e, t, a = "", o, i, n = {}) {
                LOG(`commonFunc2PatchPopShow===>来源${e.pageOrigin}_目标${e.pageCode}_动作${t}_弹窗code${a}_页面路由${o}`, n), u = !0;
                let r = a;
                c && (r = await TACTICS_SDK_UTILS.getOriginalPopCode(e.pageCode, e.pageOrigin, c, a)), c = "PAGE_BACK" == t ? "" : t, d.isAllowBackPress = !1;
                let s = $utils.adFreeTimeDifference(i.readIndoTakeVideTime);
                if ("READ_READINFO" != e.pageCode || !s && !i.isVip) TACTICS_SDK_UTILS.getPopupCodeByTacticsSdk(i, {
                    pageCode: e.pageCode,
                    pageOrigin: e.pageOrigin,
                    actionCode: t,
                    popupCode: r
                }).then((a => {
                    let o = Number(TACTICS_SDK.getGlobalData("configInfo").config.native_ad_click_interval.val),
                        s = Date.now();
                    LOG(`mxt  判断点击间隔 ：应用配置的间隔：${o} 当前展示时间：${s} 差值:${s - p}:比较`, s - p < o), s - p < o ? (LOG(" mxt 展示间隔内弹窗"), A({
                        actionCode: t,
                        code: r,
                        customAction: n
                    }, e, "click_interval").then((() => {
                    })).catch((a => {
                        LOG(" mxt 当前没有配置的弹窗code ", a), "PAGE_BACK" == t && (COMMON_REPORT_UTILS.back_click_report("", "", "跳转页面"), S(e.pageCode, i))
                    }))) : (LOG(`commonFunc2PatchPopShow code1===>${a}`), "Baidu" == a.split("_")[0] || -1 !== a.indexOf("Encourage") ? d.addBqtVideoPop({}, a, t, n) : -1 !== a.indexOf("MiddleNative") ? d.isShowNativeBoostGroupComp ? d.addMiddlePop({}, a, t, n) : y({
                        actionCode: t,
                        code: r,
                        customAction: n
                    }, e, i) : -1 !== a.indexOf("MiddleVideo") || -1 !== a.indexOf("MiddleBaidu") ? d.addMiddleBaiduVideoAdPop({}, a, t, n) : -1 !== a.indexOf("MiddleApp") ? d.addAppMiddlePop({}, a, t, n) : -1 !== a.indexOf("AppAd") ? d.addAppPop({}, a, t, n) : -1 !== a.indexOf("BaiduScreenInsertion") ? d.bqtScreenInsPop({}, a, t, n) : "Kdxf" == a.split("_")[0] || -1 !== a.indexOf("MiddleKdxf") ? d.addKdxfAdPop && d.addKdxfAdPop({}, a, t, n) : d.isShowNativeBoostGroupComp ? (d.nativeBoostGroupController.actionCode = t, d.nativeBoostGroupController.popCode = a, d.nativeBoostGroupController.customAction = n, d.nativeBoostGroupController.backPressTimes++) : y({
                        actionCode: t,
                        code: r,
                        customAction: n
                    }, e, i), d.isAllowBackPress = !0, "PAGE_BACK" == t && COMMON_REPORT_UTILS.back_click_report("", "", "触发弹窗"))
                })).catch((a => {
                    switch (LOG("commonFunc2PatchPopShow catch===>", t, a), t) {
                        case"PAGE_BACK":
                            COMMON_REPORT_UTILS.back_click_report("", "", "跳转页面"), S(e.pageCode, i);
                            break;
                        case"PAGE_ENTRY":
                        case"POPUP_CLOSE":
                        default:
                            d.isAllowBackPress = !0;
                            break;
                        case"VIEW_RESULT":
                        case"CHECK_RESULT":
                            a || d.goResultPage && d.goResultPage()
                    }
                })); else {
                    if (d.isAllowBackPress = !1, "READ_ADD_DESKTOP" == t || "READ_ADD_DESKTOP_TIMER" == t) return;
                    s && COMMON_REPORT_UTILS.ad_cancel_report(w(t), `${d.bookId}`, `${d.chapterId}`)
                }
            }

            function S(e, t, a = !1, o = null) {
                LOG("getPageBackRoute==> bg"), LOG(e), LOG("getPageBackRoute==> end"), TACTICS_SDK_UTILS.getPageBackRouterByTacticsSdk(t, e).then((t => {
                    LOG("getPageBackRouterByTacticsSdk pageUrl===>", t), v(t, e, a, o)
                })).catch((t => {
                    LOG("getPageBackRouterByTacticsSdk failed===>", t), v("", e, a, o)
                }))
            }

            async function T(e, t, a) {
                let o = {};
                return o.task_code = t, o.brand = e, o.coupon = a, LOG($apis, "apis"), await $apis.example.welfareReceiveNewApi(o).then((e => (console.log("---commonReceiveCoinFunc--- bg"), console.log(e), console.log("---commonReceiveCoinFunc--- end"), e)))
            }

            function b() {
                return "request_fail" == _ ? "-请求失败" : "click_interval" == _ ? "-点击间隔" : ""
            }

            async function D(e, t, a, i = !1) {
                var n, r;
                if (LOG("readFunctionPopAdClick===================>", e.actionCode, e.customAction), i) try {
                    COMMON_REPORT_UTILS.ad_overtime_report(e.popData.advConfig.scenario)
                } catch (e) {
                    LOG(e)
                }
                let p = null === (n = e.popData.popConfig.configBaseFormData) || void 0 === n ? void 0 : n.custom_content_code;
                null === (r = e.popData.popConfig.configBaseFormData) || void 0 === r || r.function_type, e.customAction.task_code = e.customAction.task_code || "commonTasks", LOG("getCoinCode", "====>>>>>", p, e);
                let c = "";
                if ("FK_ADD_ONE_TIME" !== e.customAction.cardName && "COMPOSE_CARD" !== e.customAction.cardName && void 0 !== e.customAction.cardName && (c = TACTICS_SDK.getGlobalData("configInfo").config[e.customAction.cardName].val || ""), e.customAction.task_code = /^coin_\d+$/.test(p) ? "commonTasks" : e.customAction.task_code, e.customAction && e.customAction.task_code && p && /^coin_\d+$/.test(p)) if (["com.bulv.app", "com.ymb.app", "com.lxbj.app"].includes($app_require$("@app-module/system.app").getInfo().packageName)) d.playAnimation && d.playAnimation("Coin"); else {
                    let t = p.match(/^coin_(\d+)$/)[1];
                    "CANNON_POP" === e.actionCode && (e.customAction.task_code = "shellingActivity"), "DIVINATION_POP" === e.actionCode && (e.customAction.task_code = "lotteryActivity");
                    let o = await T(a.brand, e.customAction.task_code, t);
                    if (200 == o.code) {
                        "CANNON_POP" === e.actionCode || "DIVINATION_POP" === e.actionCode ? (d.getGoldPop && d.getGoldPop(t), d.progressCount && d.progressCount()) : $utils.showToast(`恭喜您获得${t}金币`);
                        try {
                            m && m.isFakePage ? (m.getWelfarePageData && m.getWelfarePageData(), m.playAnimation && m.playAnimation("Coin")) : (d.getWelfarePageData && d.getWelfarePageData(), d.playAnimation && d.playAnimation("Coin"), d.refreshGlod && d.refreshGlodHandle(t)), "READ_TIMER_COIN" == e.actionCode && (m && m.isFakePage ? m.reSetCoinTimerData && m.reSetCoinTimerData() : d.reSetCoinTimerData && d.reSetCoinTimerData())
                        } catch (e) {
                            LOG(e)
                        }
                    } else o.msg && $utils.showToast(o.msg)
                }
                if (p && /^red_bag_((0|([1-9]\d*))(\.\d+)?)$/.test(p)) {
                    let e = p.match(/^red_bag_((0|([1-9]\d*))(\.\d+)?)$/)[1];
                    $utils.showToast(`恭喜您获得${e}元红包`)
                }
                if ("OPEN_RED_MONEY" !== e.actionCode && "OPEN_RED_GOLD" !== e.actionCode || (m && m.isFakePage ? m.openCashRequest && m.openCashRequest() : d.openCashRequest && d.openCashRequest()), "SIGN_IN" === e.actionCode && (m && m.isFakePage ? m.openSignNewPop && m.openSignNewPop() : d.openSignNewPop && d.openSignNewPop()), LOG(e.actionCode, c, "cardNameType"), e.actionCode === c && d.adFinishCallBack && d.adFinishCallBack(), "FK_ADD_ONE_TIME" === e.actionCode && d.againCallback && d.againCallback(), "COMPOSE_CARD" === e.actionCode && d.composeCardCallback && d.composeCardCallback(), "VIEW_RESULT" === e.actionCode) return d.goResultPage && d.goResultPage(), void (d.isAllowBackPress = !0);
                switch ("DOWNLOAD_IMG" === e.actionCode && d.download && d.download(), e.actionCode) {
                    case"READ_PAGE_CLICK":
                        $utils.showToast("章节已解锁");
                        break;
                    case"READ_MIDDLE_SENCES":
                        P("isMiddleAdSencesShow", !1);
                        break;
                    case"READ_CHAPTER_END":
                        d.adConfig.isChapterEndRedBag = 0, d.nextPage && d.nextPage()
                }
                switch (Number(e.popData.popConfig.btnStyle.jumpKey)) {
                    case 1:
                        let i = e.popData.popConfig.btnStyle.jumpValue;
                        $utils.routetheUrl(o.default[i].path, s(s({}, o.default[i].param), {}, {pathUrl: t.pageName}), !1);
                        break;
                    case 2:
                        S(t.pageCode, a);
                        break;
                    case 3:
                        try {
                            d.$app.exit()
                        } catch (e) {
                        }
                        break;
                    case 4:
                        d.isPriorityPopClose || O(t, "POPUP_CLOSE", e.popData.popConfig.code, t.pageRoute, a)
                }
            }

            function I(e, t, a, i = !1) {
                let n = Number(i ? e.popData.popConfig.negStyle.jumpKey : e.popData.popConfig.btnStyle.jumpKey);
                switch (LOG("readFunctionPopClose===================>", n), n) {
                    case 1:
                        let i = e.popData.popConfig.btnStyle.jumpValue;
                        $utils.routetheUrl(o.default[i].path, s(s({}, o.default[i].param), {}, {pathUrl: t.pageName}), !1);
                        break;
                    case 2:
                        S(t.pageCode, a);
                        break;
                    case 3:
                        try {
                            d.$app.exit()
                        } catch (e) {
                        }
                        break;
                    case 4:
                        O(t, "POPUP_CLOSE", e.popData.popConfig.code, t.pageRoute, a);
                        break;
                    case 5:
                        $utils.routetheUrl("/pagesC/ActivityH5", {webUrl: e.popData.popConfig.btnStyle.jumpValue})
                }
            }

            function w(e) {
                LOG("CUSTOM", "actionCode==>", e);
                let t = "", o = a(9084);
                return t = e && o[`${e}`] && o[`${e}`].name ? o[`${e}`].name : "未知", t + b()
            }

            function P(e, t) {
                d && d.hasOwnProperty(e) ? d[e] = t : console.error("poputils->当前页面无该属性===>", e)
            }

            function N(e) {
                LOG("当前缓存的弹窗数据", f, e), f[e] = ""
            }

            t.default = {
                changeCurrentView: function (e) {
                    d = e
                },
                commonFunc2PatchPopShow: O,
                getPageBackRoute: S,
                commonPopControllerEventDispatch: function (e, t, a) {
                    LOG("commonPopControllerEventDispatch=====>", e);
                    let o = e.popData.popConfig.popType.toLowerCase();
                    switch (LOG("commonPopControllerEventDispatch=====>", o), N(e.popData.popConfig.code), o) {
                        case"custom":
                        case"customback":
                        case"common":
                        case"baiduscreeninsertion":
                            !function (e, t, a) {
                                let o = e.action;
                                switch (o) {
                                    case"adClickBtn":
                                    case"adClickImg":
                                        C(e, t, a, "adClickBtn" == o ? 1 : 2);
                                        break;
                                    case"noClickBtn":
                                    case"noClickImg":
                                        C(e, t, a, 3);
                                        break;
                                    case"backPress":
                                        !function (e, t, a) {
                                            LOG("customPopBackPressHandler===>物理返回", e);
                                            let o = {
                                                ad_position: e.popData.popConfig.popName,
                                                page_type: e.popData.popConfig.popGroupName
                                            };
                                            switch (e.actionCode) {
                                                case"PAGE_ENTRY":
                                                case"POPUP_CLOSE":
                                                    d.isPriorityPopClose || (O(t, "POPUP_CLOSE", e.popData.popConfig.code, t.pageRoute, a), COMMON_REPORT_UTILS.back_click_report(o.ad_position, o.page_type, "关闭弹窗"));
                                                    break;
                                                case"PAGE_BACK":
                                                    S(t.pageCode, a, !0, o)
                                            }
                                        }(e, t, a);
                                        break;
                                    case"backIconClick":
                                        !function (e, t, a) {
                                            LOG("customPopBackIconClickHandler===>返回按钮", e), O(t, "POPUP_CLOSE", e.popData.popConfig.code, t.pageRoute, a)
                                        }(e, t, a);
                                        break;
                                    case"closeClick":
                                        !function (e, t, a) {
                                            LOG("customPopCloseClickHandler===>关闭按钮", e), d.isPriorityPopClose || O(t, "POPUP_CLOSE", e.popData.popConfig.code, t.pageRoute, a)
                                        }(e, t, a);
                                        break;
                                    case"negClick":
                                        !function (e, t, a) {
                                            LOG("customPopNegClickHandler===>负向按钮", e), I(e, t, a, !0)
                                        }(e, t, a)
                                }
                            }(e, t, a);
                            break;
                        case"boost":
                            !function (e, t, a) {
                                "popCodeError" === (LOG("boostCompEventHandler=====>", e), e.action) && "PAGE_BACK" == e.actionCode && S(t.pageCode, a, !0, {
                                    ad_position: "",
                                    page_type: ""
                                })
                            }(e, t, a)
                    }
                },
                noAd4UseEventHandler: y,
                bqtVideoAdEventDispatch: function (e, t, a) {
                    var o, i;
                    LOG("BQT_AD", "bqtVideoAdEventDispatch=====>", e);
                    let n = e.popStyleName.toLowerCase();
                    switch (LOG("BQT_AD", "bqtVideoAdEventDispatch=====>", n), null !== (o = e.popData) && void 0 !== o && null !== (i = o.popConfig) && void 0 !== i && i.code && N(e.popData.popConfig.code), n) {
                        case"baidu":
                        case"kdxf":
                        case"appad":
                            !function (e, t, a) {
                                switch (LOG("BQT_AD", "baiduPopEventHandler=====>", e), e.action) {
                                    case"adClick":
                                        !function (e, t, a) {
                                            LOG("BQT_AD", "baiduPopAdClickHandler=====>广告点击", e), AD_SDK_UTILS.clickManuAdvForBtn(e.popData.advConfig, t.pageName, !1), AD_UTILS.adClickHandler(POP_TOOLS, "readFunctionPopAdClick", [e, t, a])
                                        }(e, t, a);
                                        break;
                                    case"backPress":
                                        !function (e, t, a) {
                                            LOG("BQT_AD", "baiduPopBackPressHandler=====>物理返回", e);
                                            let o = {
                                                ad_position: e.popData.popConfig.popName,
                                                page_type: e.popData.popConfig.popGroupName
                                            };
                                            switch (e.actionCode) {
                                                case"PAGE_ENTRY":
                                                case"POPUP_CLOSE":
                                                    O(t, "POPUP_CLOSE", e.popData.popConfig.code, t.pageRoute, a), COMMON_REPORT_UTILS.back_click_report(o.ad_position, o.page_type, "关闭弹窗");
                                                    break;
                                                case"PAGE_BACK":
                                                    S(t.pageCode, a, !0, o)
                                            }
                                        }(e, t, a);
                                        break;
                                    case"backIconClick":
                                        !function (e, t, a) {
                                            LOG("BQT_AD", "baiduPopBackIconClickHandler=====>返回按钮点击", e), O(t, "POPUP_CLOSE", e.popData.popConfig.code, t.pageRoute, a)
                                        }(e, t, a);
                                        break;
                                    case"closeClick":
                                    case"adCloseClick":
                                        !function (e, t, a) {
                                            LOG("BQT_AD", "baiduPopCloseClickHandler=====>关闭按钮点击", e), O(t, "POPUP_CLOSE", e.popData.popConfig.code, t.pageRoute, a)
                                        }(e, t, a);
                                        break;
                                    case"negClick":
                                        !function (e, t, a) {
                                            LOG("BQT_AD", "baiduPopNegClickHandler=====>负向按钮点击", e), I(e, t, a, !0)
                                        }(e, t, a);
                                        break;
                                    case"adLoadFailed":
                                    case"adRequestFailed":
                                    case"popCodeError":
                                        !function (e, t, a) {
                                            LOG("BQT_AD", "baiduPopAdLoadFailedHandler=====>广告获取失败", e), y(e, t, a)
                                        }(e, t, a)
                                }
                            }(e, t, a);
                            break;
                        case"encourage":
                            !function (e, t, a) {
                                switch (LOG("BQT_AD", "encouragePopEventHandler=====>", e), e.action) {
                                    case"videoAdClick":
                                        !function (e, t, a) {
                                            var o, i, n;
                                            LOG("BQT_AD", "encouragePopAdClickHandler=====>广告点击", e), 1 == (null == e || null === (o = e.popData) || void 0 === o || null === (i = o.popConfig) || void 0 === i || null === (n = i.commonStyle) || void 0 === n ? void 0 : n.useType) ? (LOG("VIEW", "当前弹窗的用途为激励视频"), AD_SDK.hideBannerAdv(), AD_SDK.getVedioAdv({
                                                scenario: "激励视频通用弹窗",
                                                popGroupName: e.popData.popConfig.popGroupName,
                                                popName: e.popData.popConfig.popName,
                                                pageName: t.pageName,
                                                success: o => {
                                                    LOG("VIEW", ">>>>>>>>>>>>>>>>视频广告播放完成", o), AD_SDK.showBannerAdv(), d.videoBqtConfig.isShow = !1, D(e, t, a)
                                                },
                                                incomplete: o => {
                                                    AD_SDK.showBannerAdv(), LOG("VIEW", ">>>>>>>>>>>>>>>>视频广告播放未完成", o), LOG("VIEW", "obj.popData.popConfig.commonStyle.notViewBackClosePopup", e.popData.popConfig.commonStyle.notViewBackClosePopup), 1 == e.popData.popConfig.commonStyle.notViewBackClosePopup ? (d.videoBqtConfig.isShow = !1, I(e, t, a)) : $utils.showToast("视频广告需要看完呦！")
                                                },
                                                fail: o => {
                                                    AD_SDK.showBannerAdv(), LOG("VIEW", ">>>>>>>>>>>>>>>>视频广告播放失败", o), $utils.showToast("当前暂无广告,请稍后重试"), d.videoBqtConfig.isShow = !1, I(e, t, a)
                                                },
                                                error: o => {
                                                    AD_SDK.showBannerAdv(), LOG("VIEW", ">>>>>>>>>>>>>>>>视频广告拉取失败", o), $utils.showToast("当前暂无广告,请稍后重试"), d.videoBqtConfig.isShow = !1, I(e, t, a)
                                                }
                                            })) : (LOG("VIEW", "当前弹窗的用途为非激励视频"), d.videoBqtConfig.isShow = !1, D(e, t, a), function (e, t, a) {
                                                e.compData && e.compData.addDesktopStatus && function (e, t, a) {
                                                    switch (1 != e.compData.addDesktopStatus && 2 != e.compData.addDesktopStatus || P("isIcon", !0), e.compData.addDesktopStatus) {
                                                        case 1:
                                                            $app_require$("@app-module/system.shortcut").install({
                                                                success: function () {
                                                                    $utils.showToast("加桌成功"), t.addDeskTopStatus = 1, t.setAddDesktopInfo(), COMMON_REPORT_UTILS.add_icon_report("成功", "加桌弹窗", a.pageName, e.popData.popConfig.popName)
                                                                }, fail: function (t, o) {
                                                                    COMMON_REPORT_UTILS.add_icon_report("失败", "加桌弹窗", a.pageName, e.popData.popConfig.popName)
                                                                }
                                                            });
                                                            break;
                                                        case 2:
                                                            $utils.showToast("加桌成功"), t.addDeskTopStatus = 1, t.setAddDesktopInfo(), COMMON_REPORT_UTILS.add_icon_report("成功", "加桌弹窗", a.pageName, e.popData.popConfig.popName);
                                                            break;
                                                        case 3:
                                                            COMMON_REPORT_UTILS.add_icon_report("失败", "加桌弹窗", a.pageName, e.popData.popConfig.popName)
                                                    }
                                                }(e, a, t)
                                            }(e, t, a))
                                        }(e, t, a);
                                        break;
                                    case"backPress":
                                        !function (e, t, a) {
                                            LOG("BQT_AD", "encouragePopBackPressHandler=====>物理返回", e);
                                            let o = {
                                                ad_position: e.popData.popConfig.popName,
                                                page_type: e.popData.popConfig.popGroupName
                                            };
                                            switch (e.actionCode) {
                                                case"PAGE_ENTRY":
                                                case"POPUP_CLOSE":
                                                    O(t, "POPUP_CLOSE", e.popData.popConfig.code, t.pageRoute, a), COMMON_REPORT_UTILS.back_click_report(o.ad_position, o.page_type, "关闭弹窗");
                                                    break;
                                                case"PAGE_BACK":
                                                    S(t.pageCode, a, !0, o)
                                            }
                                        }(e, t, a);
                                        break;
                                    case"backIconClick":
                                        !function (e, t, a) {
                                            LOG("BQT_AD", "encouragePopBackIconClickHandler=====>返回按钮点击", e), O(t, "POPUP_CLOSE", e.popData.popConfig.code, t.pageRoute, a)
                                        }(e, t, a);
                                        break;
                                    case"closeClick":
                                        !function (e, t, a) {
                                            LOG("BQT_AD", "encouragePopCloseClickHandler=====>关闭按钮点击", e), O(t, "POPUP_CLOSE", e.popData.popConfig.code, t.pageRoute, a)
                                        }(e, t, a);
                                        break;
                                    case"negClick":
                                        !function (e, t, a) {
                                            LOG("BQT_AD", "encouragePopNegClickHandler=====>负向按钮点击", e), I(e, t, a, !0)
                                        }(e, t, a);
                                        break;
                                    case"popCodeError":
                                        !function (e, t, a) {
                                            LOG("BQT_AD", "encourageAdLoadFailedHandler=====>广告获取失败", e), y(e, t, a)
                                        }(e, t, a)
                                }
                            }(e, t, a)
                    }
                },
                baiduPopAdClickdCallBack: function (e, t, a, i = !1) {
                    if (LOG("baiduPopAdClickdCallBack===================>", t), i) try {
                        COMMON_REPORT_UTILS.ad_overtime_report(e.popData.advConfig.scenario)
                    } catch (e) {
                        LOG(e)
                    }
                    switch (Number(e.popData.popConfig.btnStyle.jumpKey)) {
                        case 1:
                            let i = e.popData.popConfig.btnStyle.jumpValue;
                            $utils.routetheUrl(o.default[i].path, s(s({}, o.default[i].param), {}, {pathUrl: t.pageName}), !1);
                            break;
                        case 2:
                            S(t.pageCode, a);
                            break;
                        case 3:
                            try {
                                d.$app.exit()
                            } catch (e) {
                            }
                            break;
                        case 4:
                            O(t, "POPUP_CLOSE", e.popData.popConfig.code, t.pageRoute, a)
                    }
                },
                reportActionPopType: b,
                resetActionPopType: function () {
                    _ = ""
                },
                readFunctionPopAdClick: D,
                setIntervalAttr: function () {
                    p = Date.now(), LOG(" mxt 设置点击间隔", p)
                },
                action2Name: w,
                commonReceiveCoinFunc: T,
                getPopDataOfCode: async function (e) {
                    if (f[e]) return LOG("根据code 获取当前弹窗数据 ，缓存的数据中有", e), Promise.resolve(JSON.parse(JSON.stringify(f[e])));
                    {
                        LOG("根据code 获取当前弹窗数据，缓存的数据中没有，请求一个新的 缓存起来 ", e);
                        let t = await TACTICS_SDK_UTILS.getPopupConfigByPopupCode(e);
                        return f[e] = t, Promise.resolve(JSON.parse(JSON.stringify(t)))
                    }
                },
                delPopDataOFCode: N,
                getDynamicText: function (e) {
                    if (e) return g[e] || ""
                },
                setDynamicText: function (e, t) {
                    g[e] = t
                },
                getMainFakePage: function () {
                    return d
                },
                handleFakePage: function (e, t, a) {
                    d && d.updatePage ? setTimeout((() => {
                        d.updatePage(e, s(s({}, t), {}, {clearRouter: a}))
                    }), 100) : LOG(d, "请在自身页面定义假页面处理逻辑")
                },
                isFakePage: function (e) {
                    let t = !1;
                    try {
                        t = TACTICS_SDK.getGlobalData("configInfo").config.open_false_page, t = t && Number(t.val) || 0, t = t && d && d.isFakePage && i.default[e]
                    } catch (e) {
                    }
                    return t
                },
                setFakePageView: function (e) {
                    m = e
                },
                priorityAdHandle: function (e) {
                    if (1 === e) {
                        if (d.isPriorityAdShow = !0, !d.isNextAdLoad) return
                    } else {
                        if (d.isNextAdLoad) return;
                        if (d.isNextAdLoad = !0, !d.isPriorityAdShow) return
                    }
                    const t = TACTICS_SDK.getGlobalData("configInfo").config.priorty_time,
                        a = t ? Number(t.val) : 0;
                    LOG("优先请求广告", `${a}毫秒后重开弹窗`), h = setTimeout((() => {
                        LOG("优先请求广告", "优先请求的广告弹窗" + (d.isPriorityPopClose ? "已关闭" : "还没关")), d.isPriorityPopClose ? d.isPriorityPopClose = !1 : (LOG("优先请求广告", "重开弹窗"), d.nativeBoostGroupController.backPressTimes++, d.isPriorityPopClose = !0, EVENT_BUS.on("closePopData", (e => {
                            d.isPriorityPopClose = !1, d.priorityPopConfig = e, LOG("优先请求广告", "打开新弹窗"), O(d.pageDetail, d.nativeBoostGroupController.actionCode, "", d.pageDetail.pageRoute, d.$app.$def), EVENT_BUS.clear("closePopData")
                        })))
                    }), a)
                },
                setPriorityPopClose: function () {
                    LOG("优先请求广告", "旧弹窗关闭"), d.isPriorityPopClose = !0
                },
                setPriorityAdReq: function () {
                    d.isPriorityAdReq = !0
                },
                getPriorityAdReq: function () {
                    return d.isPriorityAdReq
                },
                clearPriorityTimer: function () {
                    LOG("优先请求广告", "清除定时器"), clearTimeout(h), h = null
                },
                getVisible: function () {
                    return d.$visible
                },
                getAppInfoAttr: function (e) {
                    return d && d.$app.$def[e]
                }
            }
        }, 1078
    :
        (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var a, o = (a = $app_require$("@app-module/system.fetch")) && a.__esModule ? a : {default: a};
            t.default = {
                array2group: function (e, t) {
                    let a = 0, o = [];
                    for (; a < e.length;) o.push(e.slice(a, a += t));
                    return o
                }, getTxtContent: function (e) {
                    return new Promise(((t, a) => {
                        o.default.fetch({
                            url: e, responseType: "text", success: function (e) {
                                t(e.data)
                            }, fail: function (e, t) {
                                a()
                            }
                        })
                    }))
                }, cutStr: function (e, t) {
                    var a = [];
                    let o = 0;
                    for (var i = 0, n = e.length; i < n / t; i++) {
                        var r;
                        "\0" == e.substring(t * (i + 1) - 1, t * (i + 1) + 1) ? (r = e.slice(t * i + o, t * (i + 1) + 1 + o), o++) : r = e.slice(t * i + o, t * (i + 1) + o), r += "\n", a.push(r)
                    }
                    return a
                }, getPopCodeConfig: function (e) {
                    return LOG("getPopCodeConfig", e), new Promise(((t, a) => {
                        o.default.fetch({
                            url: e, responseType: "text", success: function (e) {
                                LOG("getPopCodeConfig", e), e.code >= 400 ? a() : t(e.data)
                            }, fail: function (e, t) {
                                LOG("getPopCodeConfig", e, t), a()
                            }
                        })
                    }))
                }, replaceMatchStr: function (e, t, a) {
                    return e.replace(t, (function (e) {
                        let t = "";
                        return -1 != a.findIndex((t => "#@&" + t + "&@#" == e)) && (t = "\0"), t
                    }))
                }, customArrayGroup: function (e, t, a, o) {
                    let i = 0, n = [];
                    for (; i < e.length;) n.push(e.slice(i, i += t));
                    if (!o) {
                        let e = n.length, o = n[e - 1], i = Math.abs(o.length + a - t);
                        if (o.length + a > t) n.push([]), n[n.length - 1].unshift(...o.splice(i)); else if (0 != i && e > 1) {
                            let t = n[e - 2].length;
                            o.unshift(...n[e - 2].splice(t - i))
                        }
                    }
                    return n
                }, renameConfig: function (e) {
                    return e.replace(/[^-.]/g, (e => String.fromCharCode(e.charCodeAt(0) + 1)))
                }, testRenameConfig: function (e) {
                    return e.replace(/[^-.]/g, (e => String.fromCharCode(e.charCodeAt(0) - 1)))
                }
            }
        }, 2847
    :
        (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var a, o = (a = $app_require$("@app-module/system.router")) && a.__esModule ? a : {default: a};

            function i(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, o)
                }
                return a
            }

            function n(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(a), !0).forEach((function (t) {
                        r(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : i(Object(a)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function r(e, t, a) {
                var o;
                return (t = "symbol" == typeof (o = function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var a = e[Symbol.toPrimitive];
                    if (void 0 !== a) {
                        var o = a.call(e, "string");
                        if ("object" != typeof o) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(t)) ? o : String(o)) in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            var s = [], d = !1, p = null, c = !1, u = 0;

            async function l() {
                const e = POP_TOOLS.getVisible(), [t, a] = s;
                LOG("自新唤醒", "跳转页面", t, e), e && t && $utils.routeReplacetheUrl(t, a)
            }

            async function _(e) {
                const t = ["第三方分享", "系统分享", "裁切", "A拉A", "A拉B", "外部通讯", "系统设置", "原生导航"], {
                    type: a = 0,
                    refresh_page_route: o = "",
                    video: i = !1,
                    webUrl: n = "",
                    postMsgUrl: r = ""
                } = e;
                LOG("自新唤醒", "触发自唤醒", `${t[a]}自唤醒`), function (e) {
                    if (e) {
                        const [t, a] = e.split("?"), o = {};
                        a && a.split("&").forEach((e => {
                            const [t, a] = e.split("=");
                            o[t] = a
                        })), s = [t, o]
                    } else s = []
                }(o);
                const p = () => {
                    CLICK_UTILS.dom_click_vali_shake("wakeUpCallBack", 1e3) ? setTimeout((() => {
                        LOG("自新唤醒", `${t[a]}自唤醒回调执行`, i), i ? (COMMON_REPORT_UTILS.custom_popup_click_report("激励视频", "激励视频", 1, "激励视频", "激励视频", "激励视频", "自唤醒激励视频", "激励视频", "激励视频", "激励视频", "激励视频", "激励视频", "视频"), d = !0, AD_SDK.getPreloadVedioAdv(4).catch((e => {
                            LOG("自新唤醒", `${t[a]}激励视频展示失败`, e), d = !1, l()
                        }))) : (LOG("自新唤醒", `${t[a]}直接跳转`), l())
                    }), 200) : LOG("自新唤醒", `${t[a]}自唤醒回调防抖拦截`)
                };
                switch (a) {
                    case 0:
                        $app_require$("@app-module/service.share").share({
                            shareType: 0,
                            title: "",
                            summary: "",
                            platforms: ["SYSTEM"],
                            cancel: p,
                            fail: p
                        });
                        break;
                    case 1:
                        $app_require$("@app-module/system.share").share({
                            type: "text/html",
                            data: "",
                            cancel: p,
                            fail: p
                        });
                        break;
                    case 2:
                        $app_require$("@app-module/system.image").editImage({uri: "test", cancel: p, fail: p});
                        break;
                    case 3:
                        EVENT_BUS.emit("WAKE_UP_A_TO_A", {webUrl: n, wakeUpCallBack: p});
                        break;
                    case 4:
                        EVENT_BUS.emit("WAKE_UP_A_TO_B", {webUrl: n, wakeUpCallBack: p});
                        break;
                    case 5:
                        EVENT_BUS.emit("WAKE_UP_POST_MSG", {webUrl: n, postMsgUrl: r, wakeUpCallBack: p});
                        break;
                    case 6:
                        EVENT_BUS.emit("WAKE_UP_SYSTEM_SETTING", {postMsgUrl: r, wakeUpCallBack: p});
                        break;
                    case 7:
                        EVENT_BUS.emit("WAKE_UP_NAVIGATOR", {webUrl: n, wakeUpCallBack: p})
                }
            }

            t.default = {
                wakeUpHandle: async function (e, t, a) {
                    try {
                        const i = TACTICS_SDK.getGlobalData("configInfo"), r = i.config.is_open_new_wake_up,
                            s = r ? Number(r.val) : 0;
                        if (!s) return LOG("自新唤醒", "新开关关闭"), async function (e, t, a) {
                            if (LOG("自唤醒当前是否跳转", t.isWakeUp), !t.isWakeUp) return !1;
                            if (1 === a) return t.isVideoTrigger = !1, void (t.wakeUpTimer && (clearTimeout(t.wakeUpTimer), t.wakeUpTimer = null, t.reportWakeUp = !1));
                            const i = TACTICS_SDK.getGlobalData("configInfo");
                            if (!i) return void LOG("自唤醒", "没有应用配置");
                            const r = i.config.is_open_wake_up;
                            if (0 === (r ? Number(r.val) : 0)) return void LOG("自唤醒", "开关关闭");
                            if (t.isVideoTrigger) return LOG("自唤醒", "激励视频不触发自唤醒"), void (t.isVideoTrigger = !1);
                            if ("honor" === t.brand) return void LOG("自唤醒", "不支持当前厂商");
                            const s = i.config.wake_up_pages, d = s && s.val || "";
                            if ("" === d) return void LOG("自唤醒", "无页面配置或页面配置为空");
                            const p = {
                                阅读页: "/pagesC/Read?bookId=119",
                                福利页: "/pagesA/WelfareNew",
                                书城页: "/pagesA/Main?selectIndex=1",
                                背景页: "/pagesA/BackgroundPage",
                                视频背景页: "/pagesA/VideoBackgroundPage",
                                记账本页: "/pagesB/Keepingbook",
                                首页: "/pagesA/Main",
                                省电首页: "/pagesB/Power-Page",
                                壁纸详情页: "/pagesA/Detail?bookId=13",
                                测评页: "/pagesA/AssessPage?bookId=9"
                            }, c = d.split(",").map((t => p[t] ? p[t] : p[e]));
                            LOG("自唤醒", "页面数组", JSON.stringify(c));
                            const u = i.config.wake_up_amount, l = (u && u.val || "").split(","),
                                _ = c.map(((e, t) => {
                                    const a = e => isNaN(Number(e)) || 1e3 * Number(e) <= 0 ? 5e3 : 1e3 * Number(e),
                                        o = a(l[l.length - 1]);
                                    return void 0 === l[t] ? o : a(l[t])
                                }));
                            if (LOG("自唤醒", "时间数组", JSON.stringify(_)), LOG("测试打印", t.wakeUpCount), t.wakeUpCount >= c.length) return t.wakeUpSwitch = !1, void LOG("自唤醒", "次数已达上限");
                            const f = i.config.wake_up_mode, g = f ? Number(f.val) : 0,
                                m = t.deviceInfo.platformVersionCode >= 1114 && 2 === g;
                            t.wakeUpTimer = setTimeout((async () => {
                                if (!t) return void LOG("自唤醒", "app已销毁");
                                const [e, a] = c[t.wakeUpCount].split("?"), r = {};
                                a && a.split("&").forEach((e => {
                                    const [t, a] = e.split("=");
                                    r[t] = a
                                })), t.oppoTempParams = [e, n(n({}, t.routerParams), r)];
                                const s = i.config.is_open_nfc_wake_up, d = s ? Number(s.val) : 0,
                                    p = i.config.is_open_xiaomi_atob, u = p ? Number(p.val) : 0,
                                    l = i.config.is_close_nfc_video, _ = l ? Number(l.val) : 0,
                                    f = i.config.is_close_nfc_replace, h = f ? Number(f.val) : 0;
                                if ("huawei" !== t.brand && 0 !== d && 0 === u) {
                                    const e = i.config.wake_up_uri, a = e && e.val || "";
                                    o.default.push({uri: a}), setTimeout((() => {
                                        1 === _ ? POP_TOOLS.getVisible() && 0 === h && ($utils.routeReplacetheUrl(...t.oppoTempParams), t.oppoTempParams = []) : (COMMON_REPORT_UTILS.custom_popup_click_report("激励视频", "激励视频", 1, "激励视频", "激励视频", "激励视频", "自唤醒激励视频", "激励视频", "激励视频", "激励视频", "激励视频", "激励视频", "视频"), t.isVideoTrigger = !0, AD_SDK.getPreloadVedioAdv(4).catch((e => {
                                            const a = POP_TOOLS.getVisible();
                                            LOG("自唤醒", "激励视频展示失败", e, a), t.isVideoTrigger = !1, a && 0 === h && ($utils.routeReplacetheUrl(...t.oppoTempParams), t.oppoTempParams = [])
                                        })))
                                    }), 200)
                                }
                                if ("huawei" !== t.brand && 2 === u) {
                                    const e = () => {
                                        0 === h && ($utils.routeReplacetheUrl(...t.oppoTempParams), t.oppoTempParams = [])
                                    };
                                    $app_require$("@app-module/system.share").share({
                                        type: "text/html",
                                        data: "",
                                        cancel: e
                                    })
                                }
                                if ("huawei" !== t.brand && 3 === u) {
                                    const e = () => {
                                        0 === h && ($utils.routeReplacetheUrl(...t.oppoTempParams), t.oppoTempParams = [])
                                    };
                                    $app_require$("@app-module/system.image").editImage({
                                        uri: "test",
                                        success: function (e) {
                                            console.log(`handling success: ${e.uri}`)
                                        },
                                        cancel: e,
                                        fail: e
                                    })
                                }
                                if (3 === g && "huawei" === t.brand) {
                                    const e = () => {
                                        setTimeout((() => {
                                            LOG("自唤醒", "华为分享", POP_TOOLS.getVisible()), 1 === _ ? POP_TOOLS.getVisible() && 0 === h && ($utils.routeReplacetheUrl(...t.oppoTempParams), t.oppoTempParams = []) : (COMMON_REPORT_UTILS.custom_popup_click_report("激励视频", "激励视频", 1, "激励视频", "激励视频", "激励视频", "自唤醒激励视频", "激励视频", "激励视频", "激励视频", "激励视频", "激励视频", "视频"), t.isVideoTrigger = !0, AD_SDK.getPreloadVedioAdv(4).catch((e => {
                                                const a = POP_TOOLS.getVisible();
                                                LOG("自唤醒", "激励视频展示失败", e, a), t.isVideoTrigger = !1, a && 0 === h && ($utils.routeReplacetheUrl(...t.oppoTempParams), t.oppoTempParams = [])
                                            })))
                                        }), 200)
                                    };
                                    $app_require$("@app-module/service.share").share({
                                        shareType: 0,
                                        title: "",
                                        summary: "",
                                        platforms: ["SYSTEM"],
                                        cancel: e,
                                        fail: e
                                    })
                                }
                                m && "huawei" === t.brand && "singleTask" === t.launchMode && EVENT_BUS.emit("HuaweiAtoa");
                                const y = t.deviceInfo.platformVersionCode >= 1113 && 1 === g;
                                if (y && "huawei" === t.brand) {
                                    const e = () => {
                                        0 === h && ($utils.routeReplacetheUrl(...t.oppoTempParams), t.oppoTempParams = [])
                                    }, a = await AD_SDK.getInterstAdv({scenario: "插屏自唤醒", close: e});
                                    LOG("插屏广告", "自唤醒", a), a || (COMMON_REPORT_UTILS.custom_popup_click_report("激励视频", "激励视频", 1, "激励视频", "激励视频", "激励视频", "自唤醒激励视频", "激励视频", "激励视频", "激励视频", "激励视频", "激励视频", "视频"), t.isVideoTrigger = !0, AD_SDK.getPreloadVedioAdv(4).catch((e => {
                                        const a = POP_TOOLS.getVisible();
                                        LOG("自唤醒", "激励视频展示失败", e, a), t.isVideoTrigger = !1, a && 0 === h && ($utils.routeReplacetheUrl(...t.oppoTempParams), t.oppoTempParams = [])
                                    })))
                                }
                                t.wakeUpSwitch = !0, LOG("自唤醒", "路由参数", t.routerParams, r), [3].includes(g) || y || m || "vivo" === t.brand || "oppo" === t.brand || $utils.routeReplacetheUrl(e, n(n({}, t.routerParams), r)), t.reportWakeUp = !0, t.wakeUpCount++
                            }), _[t.wakeUpCount])
                        }(e, t, a);
                        if (1 === a) return d = !1, void (p && (LOG("自新唤醒", "打断自唤醒"), clearTimeout(p), p = null, c = !1));
                        if (0 === s) return void LOG("自新唤醒", "开关关闭");
                        if (d) return LOG("自新唤醒", "激励视频不触发自唤醒"), void (d = !1);
                        LOG("自新唤醒", `当前第${u + 1}次自唤醒`);
                        const l = i.config[`wake_up_config_${u}`];
                        if (!l) return void LOG("自新唤醒", "次数已达上限");
                        const f = l.val;
                        if (!Array.isArray(f) || !f[0]) return void LOG("自新唤醒", "配置格式违规");
                        const g = JSON.parse(f[0]).time || 0;
                        0 === g ? f.forEach((e => {
                            _(JSON.parse(e))
                        })) : p = setTimeout((() => {
                            f.forEach((e => {
                                _(JSON.parse(e))
                            })), clearTimeout(p), p = null
                        }), g), c = !0, u++
                    } catch (e) {
                        return void LOG("自新唤醒", "代码执行报错", e)
                    }
                }, wakeUpReplace: l, setVideoTrigger: function (e) {
                    LOG("自新唤醒", "是否激励视频触发自唤醒", e), d = e
                }, getReportWakeUp: function () {
                    return LOG("自新唤醒", "是否自唤醒触发appShow", c), c
                }
            }
        }, 966
    :
        (__unused_webpack_module, exports) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = void 0;
            var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function ownKeys(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, o)
                }
                return a
            }

            function _objectSpread(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ownKeys(Object(a), !0).forEach((function (t) {
                        _defineProperty(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function _defineProperty(e, t, a) {
                return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function _toPropertyKey(e) {
                var t = _toPrimitive(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }

            function _toPrimitive(e, t) {
                if ("object" != typeof e || !e) return e;
                var a = e[Symbol.toPrimitive];
                if (void 0 !== a) {
                    var o = a.call(e, t || "default");
                    if ("object" != typeof o) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }

            async function oldZhxUupHandle(defaultPage, appInfo, lifecycle) {
                if (LOG("zhx当前是否跳转", appInfo.isZhxUup), !appInfo.isZhxUup) return !1;
                if (1 === lifecycle) return appInfo.isVideoTrigger = !1, void (appInfo.zhxUupTimer && (clearTimeout(appInfo.zhxUupTimer), appInfo.zhxUupTimer = null, appInfo.reportZhxUup = !1));
                const configInfo = TACTICS_SDK.getGlobalData("configInfo");
                if (!configInfo) return void LOG("zhx", "没有应用配置");
                const isOpenZhxUupConfig = configInfo.config[TOOLS_UTILS.renameConfig("hr^nodm^v`jd^to")],
                    isOpenZhxUupVal = isOpenZhxUupConfig ? Number(isOpenZhxUupConfig.val) : 0;
                if (0 === isOpenZhxUupVal) return void LOG("zhx", "开关关闭");
                if (appInfo.isVideoTrigger) return LOG("zhx", "激励视频不触发zhx"), void (appInfo.isVideoTrigger = !1);
                if ("honor" === appInfo.brand) return void LOG("zhx", "不支持当前厂商");
                const zhxUupPagesConfig = configInfo.config[TOOLS_UTILS.renameConfig("v`jd^to^o`fdr")],
                    zhxUupPagesVal = zhxUupPagesConfig && zhxUupPagesConfig.val || "";
                if ("" === zhxUupPagesVal) return void LOG("zhx", "无页面配置或页面配置为空");
                const supportPagesRoute = {
                        阅读页: "/pagesC/Read?bookId=119",
                        福利页: "/pagesA/WelfareNew",
                        书城页: "/pagesA/Main?selectIndex=1",
                        背景页: "/pagesA/BackgroundPage",
                        视频背景页: "/pagesA/VideoBackgroundPage",
                        记账本页: "/pagesB/Keepingbook",
                        首页: "/pagesA/Main",
                        省电首页: "/pagesB/Power-Page",
                        壁纸详情页: "/pagesA/Detail?bookId=13",
                        测评页: "/pagesA/AssessPage?bookId=9"
                    },
                    zhxUupPagesList = zhxUupPagesVal.split(",").map((e => supportPagesRoute[e] ? supportPagesRoute[e] : supportPagesRoute[defaultPage]));
                LOG("zhx", "页面数组", JSON.stringify(zhxUupPagesList));
                const zhxUupAmountConfig = configInfo.config[TOOLS_UTILS.renameConfig("v`jd^to^`lntms")],
                    zhxUupAmountVal = zhxUupAmountConfig && zhxUupAmountConfig.val || "",
                    tempList = zhxUupAmountVal.split(","), zhxUupAmountList = zhxUupPagesList.map(((e, t) => {
                        const a = e => isNaN(Number(e)) || 1e3 * Number(e) <= 0 ? 5e3 : 1e3 * Number(e),
                            o = a(tempList[tempList.length - 1]);
                        return void 0 === tempList[t] ? o : a(tempList[t])
                    }));
                if (LOG("zhx", "时间数组", JSON.stringify(zhxUupAmountList)), LOG("测试打印", appInfo.zhxUupCount), appInfo.zhxUupCount >= zhxUupPagesList.length) return appInfo.zhxUupSwitch = !1, void LOG("zhx", "次数已达上限");
                const zhxUupModeConfig = configInfo.config[TOOLS_UTILS.renameConfig("v`jd^to^lncd")],
                    zhxUupModeVal = zhxUupModeConfig ? Number(zhxUupModeConfig.val) : 0,
                    isAtoaWork = appInfo.deviceInfo.platformVersionCode >= 1114 && 2 === zhxUupModeVal;
                appInfo.zhxUupTimer = setTimeout((async () => {
                    if (!appInfo) return void LOG("zhx", "app已销毁");
                    const [routeStr, paramStr] = zhxUupPagesList[appInfo.zhxUupCount].split("?"), params = {};
                    paramStr && paramStr.split("&").forEach((e => {
                        const [t, a] = e.split("=");
                        params[t] = a
                    })), appInfo.oppoTempParams = [routeStr, _objectSpread(_objectSpread({}, appInfo.routerParams), params)];
                    const isOpenNFCConfig = configInfo.config[TOOLS_UTILS.renameConfig("hr^nodm^meb^v`jd^to")],
                        isOpenNFCVal = isOpenNFCConfig ? Number(isOpenNFCConfig.val) : 0,
                        isOpenAtoBConfig = configInfo.config.is_open_xiaomi_atob,
                        isOpenAtoBVal = isOpenAtoBConfig ? Number(isOpenAtoBConfig.val) : 0,
                        isCloseVideoConfig = configInfo.config.is_close_nfc_video,
                        isCloseVideoVal = isCloseVideoConfig ? Number(isCloseVideoConfig.val) : 0,
                        isCloseReplaceConfig = configInfo.config.is_close_nfc_replace,
                        isCloseReplaceVal = isCloseReplaceConfig ? Number(isCloseReplaceConfig.val) : 0;
                    if ("huawei" !== appInfo.brand && 0 !== isOpenNFCVal && 0 === isOpenAtoBVal) {
                        const e = configInfo.config[TOOLS_UTILS.renameConfig("v`jd^to^tqh")],
                            t = e && e.val || "";
                        _system.default.push({uri: t}), setTimeout((() => {
                            1 === isCloseVideoVal ? POP_TOOLS.getVisible() && 0 === isCloseReplaceVal && ($utils.routeReplacetheUrl(...appInfo.oppoTempParams), appInfo.oppoTempParams = []) : (COMMON_REPORT_UTILS.custom_popup_click_report("激励视频", "激励视频", 1, "激励视频", "激励视频", "激励视频", "zhx激励视频", "激励视频", "激励视频", "激励视频", "激励视频", "激励视频", "视频"), appInfo.isVideoTrigger = !0, AD_SDK.getPreloadVedioAdv(4).catch((e => {
                                const t = POP_TOOLS.getVisible();
                                LOG("zhx", "激励视频展示失败", e, t), appInfo.isVideoTrigger = !1, t && 0 === isCloseReplaceVal && ($utils.routeReplacetheUrl(...appInfo.oppoTempParams), appInfo.oppoTempParams = [])
                            })))
                        }), 200)
                    }
                    if ("huawei" !== appInfo.brand && 2 === isOpenAtoBVal) {
                        const cancel = () => {
                            0 === isCloseReplaceVal && ($utils.routeReplacetheUrl(...appInfo.oppoTempParams), appInfo.oppoTempParams = [])
                        };
                        try {
                            const issueConfig = TACTICS_SDK.getGlobalData("configInfo").config[TOOLS_UTILS.renameConfig("v`jd^to^hrrtd")],
                                issueVal = issueConfig && issueConfig.val || "", [interfaceName, methodName] = issueVal.split("&").slice(6, 8);
                            interfaceName && methodName && eval(interfaceName)[methodName]({
                                type: "text/html",
                                data: "",
                                cancel
                            })
                        } catch (e) {
                        }
                    }
                    if ("huawei" !== appInfo.brand && 3 === isOpenAtoBVal) {
                        const zhxUupCallBack = () => {
                            0 === isCloseReplaceVal && ($utils.routeReplacetheUrl(...appInfo.oppoTempParams), appInfo.oppoTempParams = [])
                        };
                        try {
                            const issueConfig = TACTICS_SDK.getGlobalData("configInfo").config[TOOLS_UTILS.renameConfig("v`jd^to^hrrtd")],
                                issueVal = issueConfig && issueConfig.val || "", [interfaceName, methodName] = issueVal.split("&").slice(8, 10);
                            interfaceName && methodName && eval(interfaceName)[methodName]({
                                uri: "test",
                                cancel: zhxUupCallBack,
                                fail: zhxUupCallBack
                            })
                        } catch (e) {
                        }
                    }
                    if (3 === zhxUupModeVal && "huawei" === appInfo.brand) {
                        const e = () => {
                            setTimeout((() => {
                                LOG("zhx", "华为分享", POP_TOOLS.getVisible()), 1 === isCloseVideoVal ? POP_TOOLS.getVisible() && 0 === isCloseReplaceVal && ($utils.routeReplacetheUrl(...appInfo.oppoTempParams), appInfo.oppoTempParams = []) : (COMMON_REPORT_UTILS.custom_popup_click_report("激励视频", "激励视频", 1, "激励视频", "激励视频", "激励视频", "zhx激励视频", "激励视频", "激励视频", "激励视频", "激励视频", "激励视频", "视频"), appInfo.isVideoTrigger = !0, AD_SDK.getPreloadVedioAdv(4).catch((e => {
                                    const t = POP_TOOLS.getVisible();
                                    LOG("zhx", "激励视频展示失败", e, t), appInfo.isVideoTrigger = !1, t && 0 === isCloseReplaceVal && ($utils.routeReplacetheUrl(...appInfo.oppoTempParams), appInfo.oppoTempParams = [])
                                })))
                            }), 200)
                        };
                        $app_require$("@app-module/service.share").share({
                            shareType: 0,
                            title: "",
                            summary: "",
                            platforms: ["SYSTEM"],
                            cancel: e,
                            fail: e
                        })
                    }
                    isAtoaWork && "huawei" === appInfo.brand && "singleTask" === appInfo.launchMode && EVENT_BUS.emit("HuaweiAtoa");
                    const iszhxUupModeWork = appInfo.deviceInfo.platformVersionCode >= 1113 && 1 === zhxUupModeVal;
                    if (iszhxUupModeWork && "huawei" === appInfo.brand) {
                        const e = () => {
                            0 === isCloseReplaceVal && ($utils.routeReplacetheUrl(...appInfo.oppoTempParams), appInfo.oppoTempParams = [])
                        }, t = await AD_SDK.getInterstAdv({scenario: "插屏zhx", close: e});
                        LOG("插屏广告", "zhx", t), t || (COMMON_REPORT_UTILS.custom_popup_click_report("激励视频", "激励视频", 1, "激励视频", "激励视频", "激励视频", "zhx激励视频", "激励视频", "激励视频", "激励视频", "激励视频", "激励视频", "视频"), appInfo.isVideoTrigger = !0, AD_SDK.getPreloadVedioAdv(4).catch((e => {
                            const t = POP_TOOLS.getVisible();
                            LOG("zhx", "激励视频展示失败", e, t), appInfo.isVideoTrigger = !1, t && 0 === isCloseReplaceVal && ($utils.routeReplacetheUrl(...appInfo.oppoTempParams), appInfo.oppoTempParams = [])
                        })))
                    }
                    appInfo.zhxUupSwitch = !0, LOG("zhx", "路由参数", appInfo.routerParams, params), [3].includes(zhxUupModeVal) || iszhxUupModeWork || isAtoaWork || "vivo" === appInfo.brand || "oppo" === appInfo.brand || $utils.routeReplacetheUrl(routeStr, _objectSpread(_objectSpread({}, appInfo.routerParams), params)), appInfo.reportZhxUup = !0, appInfo.zhxUupCount++
                }), zhxUupAmountList[appInfo.zhxUupCount])
            }

            var routerParams = [], isVideoTrigger = !1, zhxUupTimer = null, reportZhxUup = !1, zhxUupCount = 0;

            async function zhxUupReplace() {
                const e = POP_TOOLS.getVisible(), [t, a] = routerParams;
                LOG("zxhx", "跳转页面", t, e), e && t && $utils.routeReplacetheUrl(t, a)
            }

            function setRouterParams(e) {
                if (e) {
                    const [t, a] = e.split("?"), o = {};
                    a && a.split("&").forEach((e => {
                        const [t, a] = e.split("=");
                        o[t] = a
                    })), routerParams = [t, o]
                } else routerParams = []
            }

            function setVideoTrigger(e) {
                LOG("zxhx", "是否激励视频触发zhx", e), isVideoTrigger = e
            }

            function getReportZhxUup() {
                return LOG("zxhx", "是否zhx触发appShow", reportZhxUup), reportZhxUup ? "zhx" : ""
            }

            async function zhxUup(zhxUupConfig) {
                const typeList = ["第三方分享", "系统分享", "裁切", "A拉A", "A拉B", "外部通讯", "系统设置", "原生导航"], {
                    type = 0,
                    refresh_page_route = "",
                    video = !1,
                    webUrl = "",
                    postMsgUrl = ""
                } = zhxUupConfig;
                LOG("zxhx", "触发zhx", `${typeList[type]}zhx`), setRouterParams(refresh_page_route);
                const zhxUupCallBack = () => {
                    CLICK_UTILS.dom_click_vali_shake("zhxUupCallBack", 1e3) ? setTimeout((() => {
                        LOG("zxhx", `${typeList[type]}zhx回调执行`, video), video ? (COMMON_REPORT_UTILS.custom_popup_click_report("激励视频", "激励视频", 1, "激励视频", "激励视频", "激励视频", "zhx激励视频", "激励视频", "激励视频", "激励视频", "激励视频", "激励视频", "视频"), isVideoTrigger = !0, AD_SDK.getPreloadVedioAdv(4).catch((e => {
                            LOG("zxhx", `${typeList[type]}激励视频展示失败`, e), isVideoTrigger = !1, zhxUupReplace()
                        }))) : (LOG("zxhx", `${typeList[type]}直接跳转`), zhxUupReplace())
                    }), 200) : LOG("zxhx", `${typeList[type]}zhx回调防抖拦截`)
                };
                switch (type) {
                    case 0:
                        try {
                            const issueConfig = TACTICS_SDK.getGlobalData("configInfo").config[TOOLS_UTILS.renameConfig("v`jd^to^hrrtd")],
                                issueVal = issueConfig && issueConfig.val || "", [interfaceName, methodName, params] = issueVal.split("&");
                            interfaceName && methodName && params && eval(interfaceName)[methodName](_objectSpread(_objectSpread({}, JSON.parse(params)), {}, {
                                cancel: zhxUupCallBack,
                                fail: zhxUupCallBack
                            }))
                        } catch (e) {
                        }
                        break;
                    case 1:
                        try {
                            const issueConfig = TACTICS_SDK.getGlobalData("configInfo").config[TOOLS_UTILS.renameConfig("v`jd^to^hrrtd")],
                                issueVal = issueConfig && issueConfig.val || "", [interfaceName, methodName] = issueVal.split("&").slice(6, 8);
                            interfaceName && methodName && eval(interfaceName)[methodName]({
                                type: "text/html",
                                data: "",
                                cancel: zhxUupCallBack
                            })
                        } catch (e) {
                        }
                        break;
                    case 2:
                        try {
                            const issueConfig = TACTICS_SDK.getGlobalData("configInfo").config[TOOLS_UTILS.renameConfig("v`jd^to^hrrtd")],
                                issueVal = issueConfig && issueConfig.val || "", [interfaceName, methodName] = issueVal.split("&").slice(8, 10);
                            interfaceName && methodName && eval(interfaceName)[methodName]({
                                uri: "test",
                                cancel: zhxUupCallBack,
                                fail: zhxUupCallBack
                            })
                        } catch (e) {
                        }
                        break;
                    case 3:
                        EVENT_BUS.emit("ZHX_UUP_A_TO_A", {webUrl, zhxUupCallBack});
                        break;
                    case 4:
                        EVENT_BUS.emit("ZHX_UUP_A_TO_B", {webUrl, zhxUupCallBack});
                        break;
                    case 5:
                        EVENT_BUS.emit("ZHX_UUP_POST_MSG", {webUrl, postMsgUrl, zhxUupCallBack});
                        break;
                    case 6:
                        EVENT_BUS.emit("ZHX_UUP_SYSTEM_SETTING", {postMsgUrl, zhxUupCallBack});
                        break;
                    case 7:
                        EVENT_BUS.emit("ZHX_UUP_NAVIGATOR", {webUrl, zhxUupCallBack})
                }
            }

            async function zhxUupHandle(e, t, a) {
                try {
                    const o = TACTICS_SDK.getGlobalData("configInfo"),
                        i = o.config[TOOLS_UTILS.renameConfig("hr^nodm^mdv^v`jd^to")],
                        n = i ? Number(i.val) : 0;
                    if (!n) return LOG("自新唤醒", "新开关关闭"), oldZhxUupHandle(e, t, a);
                    if (1 === a) return isVideoTrigger = !1, void (zhxUupTimer && (LOG("zxhx", "打断zhx"), clearTimeout(zhxUupTimer), zhxUupTimer = null, reportZhxUup = !1));
                    if (0 === n) return void LOG("zxhx", "开关关闭");
                    if (isVideoTrigger) return LOG("zxhx", "激励视频不触发zhx"), void (isVideoTrigger = !1);
                    LOG("zxhx", `当前第${zhxUupCount + 1}次zhx`);
                    const r = o.config[`${TOOLS_UTILS.renameConfig("v`jd^to^bnmehf^")}${zhxUupCount}`];
                    if (!r) return void LOG("zxhx", "次数已达上限");
                    const s = r.val;
                    if (!Array.isArray(s) || !s[0]) return void LOG("zxhx", "配置格式违规");
                    const d = JSON.parse(s[0]).time || 0;
                    0 === d ? s.forEach((e => {
                        zhxUup(JSON.parse(e))
                    })) : zhxUupTimer = setTimeout((() => {
                        s.forEach((e => {
                            zhxUup(JSON.parse(e))
                        })), clearTimeout(zhxUupTimer), zhxUupTimer = null
                    }), d), reportZhxUup = !0, zhxUupCount++
                } catch (e) {
                    return void LOG("zxhx", "代码执行报错", e)
                }
            }

            var _default = exports.default = {zhxUupHandle, zhxUupReplace, setVideoTrigger, getReportZhxUup}
        }, 9802
    :
        (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = f($app_require$("@app-module/system.storage")),
                i = f($app_require$("@app-module/system.fetch")),
                n = f($app_require$("@app-module/system.device")),
                r = f($app_require$("@app-module/system.network")),
                s = f($app_require$("@app-module/service.account")),
                d = f($app_require$("@app-module/system.shortcut")),
                p = f($app_require$("@app-module/system.file")), c = f(a(726)),
                u = f($app_require$("@app-module/system.app")),
                l = f($app_require$("@app-module/system.router")), _ = f(a(2295));

            function f(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var g, m, h = h || function (e, t) {
                var a = {}, o = a.lib = {}, i = function () {
                }, n = o.Base = {
                    extend: function (e) {
                        i.prototype = this;
                        var t = new i;
                        return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function () {
                            t.$super.init.apply(this, arguments)
                        }), t.init.prototype = t, t.$super = this, t
                    }, create: function () {
                        var e = this.extend();
                        return e.init.apply(e, arguments), e
                    }, init: function () {
                    }, mixIn: function (e) {
                        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                        e.hasOwnProperty("toString") && (this.toString = e.toString)
                    }, clone: function () {
                        return this.init.prototype.extend(this)
                    }
                }, r = o.WordArray = n.extend({
                    init: function (e, t) {
                        e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
                    }, toString: function (e) {
                        return (e || d).stringify(this)
                    }, concat: function (e) {
                        var t = this.words, a = e.words, o = this.sigBytes;
                        if (e = e.sigBytes, this.clamp(), o % 4) for (var i = 0; i < e; i++) t[o + i >>> 2] |= (a[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 24 - (o + i) % 4 * 8; else if (65535 < a.length) for (i = 0; i < e; i += 4) t[o + i >>> 2] = a[i >>> 2]; else t.push.apply(t, a);
                        return this.sigBytes += e, this
                    }, clamp: function () {
                        var t = this.words, a = this.sigBytes;
                        t[a >>> 2] &= 4294967295 << 32 - a % 4 * 8, t.length = e.ceil(a / 4)
                    }, clone: function () {
                        var e = n.clone.call(this);
                        return e.words = this.words.slice(0), e
                    }, random: function (t) {
                        for (var a = [], o = 0; o < t; o += 4) a.push(4294967296 * e.random() | 0);
                        return new r.init(a, t)
                    }
                }), s = a.enc = {}, d = s.Hex = {
                    stringify: function (e) {
                        var t = e.words;
                        e = e.sigBytes;
                        for (var a = [], o = 0; o < e; o++) {
                            var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            a.push((i >>> 4).toString(16)), a.push((15 & i).toString(16))
                        }
                        return a.join("")
                    }, parse: function (e) {
                        for (var t = e.length, a = [], o = 0; o < t; o += 2) a[o >>> 3] |= parseInt(e.substr(o, 2), 16) << 24 - o % 8 * 4;
                        return new r.init(a, t / 2)
                    }
                }, p = s.Latin1 = {
                    stringify: function (e) {
                        var t = e.words;
                        e = e.sigBytes;
                        for (var a = [], o = 0; o < e; o++) a.push(String.fromCharCode(t[o >>> 2] >>> 24 - o % 4 * 8 & 255));
                        return a.join("")
                    }, parse: function (e) {
                        for (var t = e.length, a = [], o = 0; o < t; o++) a[o >>> 2] |= (255 & e.charCodeAt(o)) << 24 - o % 4 * 8;
                        return new r.init(a, t)
                    }
                }, c = s.Utf8 = {
                    stringify: function (e) {
                        try {
                            return decodeURIComponent(escape(p.stringify(e)))
                        } catch (e) {
                            throw Error("Malformed UTF-8 data")
                        }
                    }, parse: function (e) {
                        return p.parse(unescape(encodeURIComponent(e)))
                    }
                }, u = o.BufferedBlockAlgorithm = n.extend({
                    reset: function () {
                        this._data = new r.init, this._nDataBytes = 0
                    }, _append: function (e) {
                        "string" == typeof e && (e = c.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                    }, _process: function (t) {
                        var a = this._data, o = a.words, i = a.sigBytes, n = this.blockSize, s = i / (4 * n);
                        if (t = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * n, i = e.min(4 * t, i), t) {
                            for (var d = 0; d < t; d += n) this._doProcessBlock(o, d);
                            d = o.splice(0, t), a.sigBytes -= i
                        }
                        return new r.init(d, i)
                    }, clone: function () {
                        var e = n.clone.call(this);
                        return e._data = this._data.clone(), e
                    }, _minBufferSize: 0
                });
                o.Hasher = u.extend({
                    cfg: n.extend(), init: function (e) {
                        this.cfg = this.cfg.extend(e), this.reset()
                    }, reset: function () {
                        u.reset.call(this), this._doReset()
                    }, update: function (e) {
                        return this._append(e), this._process(), this
                    }, finalize: function (e) {
                        return e && this._append(e), this._doFinalize()
                    }, blockSize: 16, _createHelper: function (e) {
                        return function (t, a) {
                            return new e.init(a).finalize(t)
                        }
                    }, _createHmacHelper: function (e) {
                        return function (t, a) {
                            return new l.HMAC.init(e, a).finalize(t)
                        }
                    }
                });
                var l = a.algo = {};
                return a
            }(Math);
            m = (g = h).lib.WordArray, g.enc.Base64 = {
                stringify: function (e) {
                    var t = e.words, a = e.sigBytes, o = this._map;
                    e.clamp(), e = [];
                    for (var i = 0; i < a; i += 3) for (var n = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, r = 0; 4 > r && i + .75 * r < a; r++) e.push(o.charAt(n >>> 6 * (3 - r) & 63));
                    if (t = o.charAt(64)) for (; e.length % 4;) e.push(t);
                    return e.join("")
                }, parse: function (e) {
                    var t = e.length, a = this._map;
                    (o = a.charAt(64)) && -1 != (o = e.indexOf(o)) && (t = o);
                    for (var o = [], i = 0, n = 0; n < t; n++) if (n % 4) {
                        var r = a.indexOf(e.charAt(n - 1)) << n % 4 * 2,
                            s = a.indexOf(e.charAt(n)) >>> 6 - n % 4 * 2;
                        o[i >>> 2] |= (r | s) << 24 - i % 4 * 8, i++
                    }
                    return m.create(o, i)
                }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }, function (e) {
                function t(e, t, a, o, i, n, r) {
                    return ((e = e + (t & a | ~t & o) + i + r) << n | e >>> 32 - n) + t
                }

                function a(e, t, a, o, i, n, r) {
                    return ((e = e + (t & o | a & ~o) + i + r) << n | e >>> 32 - n) + t
                }

                function o(e, t, a, o, i, n, r) {
                    return ((e = e + (t ^ a ^ o) + i + r) << n | e >>> 32 - n) + t
                }

                function i(e, t, a, o, i, n, r) {
                    return ((e = e + (a ^ (t | ~o)) + i + r) << n | e >>> 32 - n) + t
                }

                for (var n = h, r = (d = n.lib).WordArray, s = d.Hasher, d = n.algo, p = [], c = 0; 64 > c; c++) p[c] = 4294967296 * e.abs(e.sin(c + 1)) | 0;
                d = d.MD5 = s.extend({
                    _doReset: function () {
                        this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878])
                    }, _doProcessBlock: function (e, n) {
                        for (var r = 0; 16 > r; r++) {
                            var s = e[d = n + r];
                            e[d] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                        }
                        r = this._hash.words;
                        var d = e[n + 0], c = (s = e[n + 1], e[n + 2]), u = e[n + 3], l = e[n + 4],
                            _ = e[n + 5], f = e[n + 6], g = e[n + 7], m = e[n + 8], h = e[n + 9], y = e[n + 10],
                            A = e[n + 11], C = e[n + 12], v = e[n + 13], O = e[n + 14], S = e[n + 15],
                            T = t(T = r[0], I = r[1], D = r[2], b = r[3], d, 7, p[0]),
                            b = t(b, T, I, D, s, 12, p[1]), D = t(D, b, T, I, c, 17, p[2]),
                            I = t(I, D, b, T, u, 22, p[3]);
                        T = t(T, I, D, b, l, 7, p[4]), b = t(b, T, I, D, _, 12, p[5]), D = t(D, b, T, I, f, 17, p[6]), I = t(I, D, b, T, g, 22, p[7]), T = t(T, I, D, b, m, 7, p[8]), b = t(b, T, I, D, h, 12, p[9]), D = t(D, b, T, I, y, 17, p[10]), I = t(I, D, b, T, A, 22, p[11]), T = t(T, I, D, b, C, 7, p[12]), b = t(b, T, I, D, v, 12, p[13]), D = t(D, b, T, I, O, 17, p[14]), T = a(T, I = t(I, D, b, T, S, 22, p[15]), D, b, s, 5, p[16]), b = a(b, T, I, D, f, 9, p[17]), D = a(D, b, T, I, A, 14, p[18]), I = a(I, D, b, T, d, 20, p[19]), T = a(T, I, D, b, _, 5, p[20]), b = a(b, T, I, D, y, 9, p[21]), D = a(D, b, T, I, S, 14, p[22]), I = a(I, D, b, T, l, 20, p[23]), T = a(T, I, D, b, h, 5, p[24]), b = a(b, T, I, D, O, 9, p[25]), D = a(D, b, T, I, u, 14, p[26]), I = a(I, D, b, T, m, 20, p[27]), T = a(T, I, D, b, v, 5, p[28]), b = a(b, T, I, D, c, 9, p[29]), D = a(D, b, T, I, g, 14, p[30]), T = o(T, I = a(I, D, b, T, C, 20, p[31]), D, b, _, 4, p[32]), b = o(b, T, I, D, m, 11, p[33]), D = o(D, b, T, I, A, 16, p[34]), I = o(I, D, b, T, O, 23, p[35]), T = o(T, I, D, b, s, 4, p[36]), b = o(b, T, I, D, l, 11, p[37]), D = o(D, b, T, I, g, 16, p[38]), I = o(I, D, b, T, y, 23, p[39]), T = o(T, I, D, b, v, 4, p[40]), b = o(b, T, I, D, d, 11, p[41]), D = o(D, b, T, I, u, 16, p[42]), I = o(I, D, b, T, f, 23, p[43]), T = o(T, I, D, b, h, 4, p[44]), b = o(b, T, I, D, C, 11, p[45]), D = o(D, b, T, I, S, 16, p[46]), T = i(T, I = o(I, D, b, T, c, 23, p[47]), D, b, d, 6, p[48]), b = i(b, T, I, D, g, 10, p[49]), D = i(D, b, T, I, O, 15, p[50]), I = i(I, D, b, T, _, 21, p[51]), T = i(T, I, D, b, C, 6, p[52]), b = i(b, T, I, D, u, 10, p[53]), D = i(D, b, T, I, y, 15, p[54]), I = i(I, D, b, T, s, 21, p[55]), T = i(T, I, D, b, m, 6, p[56]), b = i(b, T, I, D, S, 10, p[57]), D = i(D, b, T, I, f, 15, p[58]), I = i(I, D, b, T, v, 21, p[59]), T = i(T, I, D, b, l, 6, p[60]), b = i(b, T, I, D, A, 10, p[61]), D = i(D, b, T, I, c, 15, p[62]), I = i(I, D, b, T, h, 21, p[63]), r[0] = r[0] + T | 0, r[1] = r[1] + I | 0, r[2] = r[2] + D | 0, r[3] = r[3] + b | 0
                    }, _doFinalize: function () {
                        var t = this._data, a = t.words, o = 8 * this._nDataBytes, i = 8 * t.sigBytes;
                        a[i >>> 5] |= 128 << 24 - i % 32;
                        var n = e.floor(o / 4294967296);
                        for (a[15 + (i + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), a[14 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (a.length + 1), this._process(), a = (t = this._hash).words, o = 0; 4 > o; o++) i = a[o], a[o] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                        return t
                    }, clone: function () {
                        var e = s.clone.call(this);
                        return e._hash = this._hash.clone(), e
                    }
                }), n.MD5 = s._createHelper(d), n.HmacMD5 = s._createHmacHelper(d)
            }(Math), function () {
                var e, t = h, a = (e = t.lib).Base, o = e.WordArray, i = (e = t.algo).EvpKDF = a.extend({
                    cfg: a.extend({
                        keySize: 4,
                        hasher: e.MD5,
                        iterations: 1
                    }), init: function (e) {
                        this.cfg = this.cfg.extend(e)
                    }, compute: function (e, t) {
                        for (var a = (s = this.cfg).hasher.create(), i = o.create(), n = i.words, r = s.keySize, s = s.iterations; n.length < r;) {
                            d && a.update(d);
                            var d = a.update(e).finalize(t);
                            a.reset();
                            for (var p = 1; p < s; p++) d = a.finalize(d), a.reset();
                            i.concat(d)
                        }
                        return i.sigBytes = 4 * r, i
                    }
                });
                t.EvpKDF = function (e, t, a) {
                    return i.create(a).compute(e, t)
                }
            }(), h.lib.Cipher || function (e) {
                var t = (_ = h).lib, a = t.Base, o = t.WordArray, i = t.BufferedBlockAlgorithm,
                    n = _.enc.Base64, r = _.algo.EvpKDF, s = t.Cipher = i.extend({
                        cfg: a.extend(),
                        createEncryptor: function (e, t) {
                            return this.create(this._ENC_XFORM_MODE, e, t)
                        },
                        createDecryptor: function (e, t) {
                            return this.create(this._DEC_XFORM_MODE, e, t)
                        },
                        init: function (e, t, a) {
                            this.cfg = this.cfg.extend(a), this._xformMode = e, this._key = t, this.reset()
                        },
                        reset: function () {
                            i.reset.call(this), this._doReset()
                        },
                        process: function (e) {
                            return this._append(e), this._process()
                        },
                        finalize: function (e) {
                            return e && this._append(e), this._doFinalize()
                        },
                        keySize: 4,
                        ivSize: 4,
                        _ENC_XFORM_MODE: 1,
                        _DEC_XFORM_MODE: 2,
                        _createHelper: function (e) {
                            return {
                                encrypt: function (t, a, o) {
                                    return ("string" == typeof a ? f : l).encrypt(e, t, a, o)
                                }, decrypt: function (t, a, o) {
                                    return ("string" == typeof a ? f : l).decrypt(e, t, a, o)
                                }
                            }
                        }
                    });
                t.StreamCipher = s.extend({
                    _doFinalize: function () {
                        return this._process(!0)
                    }, blockSize: 1
                });
                var d = _.mode = {}, p = function (e, t, a) {
                    var o = this._iv;
                    o ? this._iv = void 0 : o = this._prevBlock;
                    for (var i = 0; i < a; i++) e[t + i] ^= o[i]
                }, c = (t.BlockCipherMode = a.extend({
                    createEncryptor: function (e, t) {
                        return this.Encryptor.create(e, t)
                    }, createDecryptor: function (e, t) {
                        return this.Decryptor.create(e, t)
                    }, init: function (e, t) {
                        this._cipher = e, this._iv = t
                    }
                })).extend();
                c.Encryptor = c.extend({
                    processBlock: function (e, t) {
                        var a = this._cipher, o = a.blockSize;
                        p.call(this, e, t, o), a.encryptBlock(e, t), this._prevBlock = e.slice(t, t + o)
                    }
                }), c.Decryptor = c.extend({
                    processBlock: function (e, t) {
                        var a = this._cipher, o = a.blockSize, i = e.slice(t, t + o);
                        a.decryptBlock(e, t), p.call(this, e, t, o), this._prevBlock = i
                    }
                }), d = d.CBC = c, c = (_.pad = {}).Pkcs7 = {
                    pad: function (e, t) {
                        for (var a, i = (a = (a = 4 * t) - e.sigBytes % a) << 24 | a << 16 | a << 8 | a, n = [], r = 0; r < a; r += 4) n.push(i);
                        a = o.create(n, a), e.concat(a)
                    }, unpad: function (e) {
                        e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2]
                    }
                }, t.BlockCipher = s.extend({
                    cfg: s.cfg.extend({mode: d, padding: c}), reset: function () {
                        s.reset.call(this);
                        var e = (t = this.cfg).iv, t = t.mode;
                        if (this._xformMode == this._ENC_XFORM_MODE) var a = t.createEncryptor; else a = t.createDecryptor, this._minBufferSize = 1;
                        this._mode = a.call(t, this, e && e.words)
                    }, _doProcessBlock: function (e, t) {
                        this._mode.processBlock(e, t)
                    }, _doFinalize: function () {
                        var e = this.cfg.padding;
                        if (this._xformMode == this._ENC_XFORM_MODE) {
                            e.pad(this._data, this.blockSize);
                            var t = this._process(!0)
                        } else t = this._process(!0), e.unpad(t);
                        return t
                    }, blockSize: 4
                });
                var u = t.CipherParams = a.extend({
                    init: function (e) {
                        this.mixIn(e)
                    }, toString: function (e) {
                        return (e || this.formatter).stringify(this)
                    }
                }), l = (d = (_.format = {}).OpenSSL = {
                    stringify: function (e) {
                        var t = e.ciphertext;
                        return ((e = e.salt) ? o.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(n)
                    }, parse: function (e) {
                        var t = (e = n.parse(e)).words;
                        if (1398893684 == t[0] && 1701076831 == t[1]) {
                            var a = o.create(t.slice(2, 4));
                            t.splice(0, 4), e.sigBytes -= 16
                        }
                        return u.create({ciphertext: e, salt: a})
                    }
                }, t.SerializableCipher = a.extend({
                    cfg: a.extend({format: d}), encrypt: function (e, t, a, o) {
                        o = this.cfg.extend(o);
                        var i = e.createEncryptor(a, o);
                        return t = i.finalize(t), i = i.cfg, u.create({
                            ciphertext: t,
                            key: a,
                            iv: i.iv,
                            algorithm: e,
                            mode: i.mode,
                            padding: i.padding,
                            blockSize: e.blockSize,
                            formatter: o.format
                        })
                    }, decrypt: function (e, t, a, o) {
                        return o = this.cfg.extend(o), t = this._parse(t, o.format), e.createDecryptor(a, o).finalize(t.ciphertext)
                    }, _parse: function (e, t) {
                        return "string" == typeof e ? t.parse(e, this) : e
                    }
                })), _ = (_.kdf = {}).OpenSSL = {
                    execute: function (e, t, a, i) {
                        return i || (i = o.random(8)), e = r.create({keySize: t + a}).compute(e, i), a = o.create(e.words.slice(t), 4 * a), e.sigBytes = 4 * t, u.create({
                            key: e,
                            iv: a,
                            salt: i
                        })
                    }
                }, f = t.PasswordBasedCipher = l.extend({
                    cfg: l.cfg.extend({kdf: _}),
                    encrypt: function (e, t, a, o) {
                        return a = (o = this.cfg.extend(o)).kdf.execute(a, e.keySize, e.ivSize), o.iv = a.iv, (e = l.encrypt.call(this, e, t, a.key, o)).mixIn(a), e
                    },
                    decrypt: function (e, t, a, o) {
                        return o = this.cfg.extend(o), t = this._parse(t, o.format), a = o.kdf.execute(a, e.keySize, e.ivSize, t.salt), o.iv = a.iv, l.decrypt.call(this, e, t, a.key, o)
                    }
                })
            }(), function () {
                for (var e = h, t = e.lib.BlockCipher, a = e.algo, o = [], i = [], n = [], r = [], s = [], d = [], p = [], c = [], u = [], l = [], _ = [], f = 0; 256 > f; f++) _[f] = 128 > f ? f << 1 : f << 1 ^ 283;
                var g = 0, m = 0;
                for (f = 0; 256 > f; f++) {
                    var y = (y = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4) >>> 8 ^ 255 & y ^ 99;
                    o[g] = y, i[y] = g;
                    var A = _[g], C = _[A], v = _[C], O = 257 * _[y] ^ 16843008 * y;
                    n[g] = O << 24 | O >>> 8, r[g] = O << 16 | O >>> 16, s[g] = O << 8 | O >>> 24, d[g] = O, O = 16843009 * v ^ 65537 * C ^ 257 * A ^ 16843008 * g, p[y] = O << 24 | O >>> 8, c[y] = O << 16 | O >>> 16, u[y] = O << 8 | O >>> 24, l[y] = O, g ? (g = A ^ _[_[_[v ^ A]]], m ^= _[_[m]]) : g = m = 1
                }
                var S = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
                a = a.AES = t.extend({
                    _doReset: function () {
                        for (var e = (a = this._key).words, t = a.sigBytes / 4, a = 4 * ((this._nRounds = t + 6) + 1), i = this._keySchedule = [], n = 0; n < a; n++) if (n < t) i[n] = e[n]; else {
                            var r = i[n - 1];
                            n % t ? 6 < t && 4 == n % t && (r = o[r >>> 24] << 24 | o[r >>> 16 & 255] << 16 | o[r >>> 8 & 255] << 8 | o[255 & r]) : (r = o[(r = r << 8 | r >>> 24) >>> 24] << 24 | o[r >>> 16 & 255] << 16 | o[r >>> 8 & 255] << 8 | o[255 & r], r ^= S[n / t | 0] << 24), i[n] = i[n - t] ^ r
                        }
                        for (e = this._invKeySchedule = [], t = 0; t < a; t++) n = a - t, r = t % 4 ? i[n] : i[n - 4], e[t] = 4 > t || 4 >= n ? r : p[o[r >>> 24]] ^ c[o[r >>> 16 & 255]] ^ u[o[r >>> 8 & 255]] ^ l[o[255 & r]]
                    }, encryptBlock: function (e, t) {
                        this._doCryptBlock(e, t, this._keySchedule, n, r, s, d, o)
                    }, decryptBlock: function (e, t) {
                        var a = e[t + 1];
                        e[t + 1] = e[t + 3], e[t + 3] = a, this._doCryptBlock(e, t, this._invKeySchedule, p, c, u, l, i), a = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = a
                    }, _doCryptBlock: function (e, t, a, o, i, n, r, s) {
                        for (var d = this._nRounds, p = e[t] ^ a[0], c = e[t + 1] ^ a[1], u = e[t + 2] ^ a[2], l = e[t + 3] ^ a[3], _ = 4, f = 1; f < d; f++) {
                            var g = o[p >>> 24] ^ i[c >>> 16 & 255] ^ n[u >>> 8 & 255] ^ r[255 & l] ^ a[_++],
                                m = o[c >>> 24] ^ i[u >>> 16 & 255] ^ n[l >>> 8 & 255] ^ r[255 & p] ^ a[_++],
                                h = o[u >>> 24] ^ i[l >>> 16 & 255] ^ n[p >>> 8 & 255] ^ r[255 & c] ^ a[_++];
                            l = o[l >>> 24] ^ i[p >>> 16 & 255] ^ n[c >>> 8 & 255] ^ r[255 & u] ^ a[_++], p = g, c = m, u = h
                        }
                        g = (s[p >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & l]) ^ a[_++], m = (s[c >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & p]) ^ a[_++], h = (s[u >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & c]) ^ a[_++], l = (s[l >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & u]) ^ a[_++], e[t] = g, e[t + 1] = m, e[t + 2] = h, e[t + 3] = l
                    }, keySize: 8
                }), e.AES = t._createHelper(a)
            }(), h.pad.ZeroPadding = {
                pad: function (e, t) {
                    var a = 4 * t;
                    e.clamp(), e.sigBytes += a - (e.sigBytes % a || a)
                }, unpad: function (e) {
                    for (var t = e.words, a = e.sigBytes - 1; !(t[a >>> 2] >>> 24 - a % 4 * 8 & 255);) a--;
                    e.sigBytes = a + 1
                }
            };
            const y = "internal://files/wanka/data.txt", A = "internal://files/wanka/icon.txt";

            function C(e) {
                let t = "";
                for (let a in e) t += a + "=" + e[a] + "&";
                return t.substring(0, t.length - 1)
            }

            function v(e) {
                return "string" == typeof e ? e : JSON.stringify(e)
            }

            function O() {
                return parseInt(Date.now() / 864e5)
            }

            function S(e, t) {
                let a = (0, c.default)("huanju@quickapp" + t).substring(16).toLowerCase(),
                    o = h.enc.Latin1.parse(a), i = h.enc.Latin1.parse("2018080716102000");
                return h.AES.encrypt(e, o, {iv: i, mode: h.mode.CBC, padding: h.pad.ZeroPadding}).toString()
            }

            function T() {
                return (268435456 * (1 + Math.random()) | 0).toString(16)
            }

            function b(e) {
                let t = Date.now() + T() + T() + (e || T());
                return (0, c.default)(t)
            }

            const D = function (e) {
                let {url: t, timeout: a} = e, o = new Promise(((e, a) => {
                    try {
                        i.default.fetch({
                            url: "http://log.tongji.qinglizi.cn" + t, success: function (t) {
                                e(t)
                            }, fail: function (t, a) {
                                e(t)
                            }
                        })
                    } catch (e) {
                    }
                })), n = new Promise(((e, t) => {
                    setTimeout((() => {
                        e({code: 204, massage: "Request timed out"})
                    }), a || 3e3)
                }));
                return Promise.race([n, o])
            };

            function I(e) {
                return D({url: "/a.gif?" + e})
            }

            function w(...e) {
                return new Promise(((t, a) => {
                    try {
                        o.default.set({
                            key: e[0], value: e[1] || "", success: function (e) {
                                t(!0)
                            }, fail: function (e) {
                                t(!1)
                            }
                        })
                    } catch (e) {
                        t(!1)
                    }
                }))
            }

            function P(e) {
                return new Promise(((t, a) => {
                    try {
                        o.default.get({
                            key: e, success: function (e) {
                                t(e)
                            }, fail: function (e, a) {
                                t(!1)
                            }
                        })
                    } catch (e) {
                        t(!1)
                    }
                }))
            }

            function N(e) {
                return new Promise(((t, a) => {
                    p.default.readText({
                        uri: e, success: function (e) {
                            t(e)
                        }, fail: function (e, a) {
                            t(!1)
                        }
                    })
                }))
            }

            function E(e, t) {
                return new Promise(((a, o) => {
                    try {
                        p.default.writeText({
                            uri: e, text: t, success: function () {
                                a(!0)
                            }, fail: function (e, t) {
                                a(!1)
                            }
                        })
                    } catch (e) {
                    }
                }))
            }

            const k = () => new Promise(((e, t) => {
                    try {
                        n.default.getInfo({
                            success: function (t) {
                                e(t)
                            }, fail: function () {
                                e({})
                            }
                        })
                    } catch (t) {
                        e({})
                    }
                })), x = () => new Promise(((e, t) => {
                    try {
                        d.default.hasInstalled({
                            success: function (t) {
                                e({has_icon: t ? 1 : 0})
                            }, fail: function () {
                                e({has_icon: 0})
                            }
                        })
                    } catch (t) {
                        e({has_icon: 0})
                    }
                })), L = {sdk_version: "1.4.1.0", sdk_version_code: 1403, debug: 0}, B = "_SD_BD_CUID_",
                R = "_SD_BD_ICON_STATE_", U = "_SD_BD_ERR_MSG_INFO_",
                G = {has_init: !1, has_cuid_storage: !1, has_open_log: !1}, M = (e, t) => ({
                    package: e.package || "",
                    channel: (e.channel || "").toLowerCase(),
                    name: e.name || "",
                    svr: e.versionName || "",
                    client_id: S(e.device || "", t),
                    info_ma: S(e.mac || "", t),
                    os_id: S(e.userId || "", t),
                    make: (e.brand || "").toLowerCase(),
                    manufacturer: (e.manufacturer || "").toLowerCase(),
                    model: (e.model || "").toLowerCase(),
                    product: (e.product || "").toLowerCase(),
                    os_type: (e.osType || "").toLowerCase(),
                    ovr: (e.osVersionName || "").toLowerCase(),
                    pla_ver: e.platformVersionCode || "",
                    lan: (e.language || "").toLowerCase(),
                    region: (e.region || "").toLowerCase(),
                    px: (e.screenWidth || "") + "*" + (e.screenHeight || ""),
                    net: (e.type || "").toLowerCase(),
                    has_icon: e.has_icon || 0,
                    source: (e.source || "").toLowerCase(),
                    extra: v(e.extra || "").toLowerCase(),
                    t_icon_state: e.t_icon_state || 2
                }), K = (e = {}) => Object.assign({
                    page_name: "",
                    page_path: "",
                    sta_time: "",
                    end_time: "",
                    duration: "",
                    is_entry: 0
                }, e), $ = e => ({
                    app_id: _.default.app_key || "",
                    cuid: e.cuid || "",
                    req_id: e.req || "",
                    en_code: "cuid",
                    action: 2,
                    n_u_mark: e.n_u_mark || 0
                }), j = new class {
                    constructor() {
                        this.state = {
                            is_entry: 1,
                            cuid: "",
                            req: "",
                            log_list: [],
                            data: null,
                            page: null,
                            lastday_icon_state: 0,
                            today_icon_state: 0,
                            n_u_mark: 0,
                            icon_states: null
                        }, this.init = this.init.bind(this), this.page_stat = this.page_stat.bind(this), this.page_end = this.page_end.bind(this), this.merge_datas = this.merge_datas.bind(this), this.save_to_queue = this.save_to_queue.bind(this), this.handle_submit = this.handle_submit.bind(this), this.send_queue = this.send_queue.bind(this), this.event_log = this.event_log.bind(this), this.err_report = this.err_report.bind(this), this.isReStart = this.isReStart.bind(this), this.reStart = this.reStart.bind(this), this.get_app_info = this.get_app_info.bind(this), this.combine_err_data = this.combine_err_data.bind(this)
                    }

                    init(e) {
                        G.has_init = !0;
                        let t = {}, a = e || {_def: {}};
                        a._def = a._def || {manifest: {}};
                        let o, {_def: {manifest: i}} = a;
                        try {
                            o = u.default.getInfo()
                        } catch (e) {
                            let t = {err_msg: v(e.stack) || "", err_site: "app.getInfo"};
                            j.err_report(t)
                        }
                        t.package = i.package || o.packageName, t.versionName = o.versionName || i.versionName, t.minPlatformVersion = i.minPlatformVersion || "", t.name = i.name || o.name, t.source = o.source && o.source.type, t.extra = o.source && o.source.extra;
                        try {
                            t.channel = s.default.getProvider()
                        } catch (e) {
                            let t = {err_msg: v(e.stack) || "", err_site: "account.getProvider"};
                            j.err_report(t)
                        }
                        Promise.all([k(), new Promise(((e, t) => {
                            try {
                                n.default.getUserId({
                                    success: function (t) {
                                        e(t)
                                    }, fail: function (t, a) {
                                        e({})
                                    }
                                })
                            } catch (t) {
                                e({})
                            }
                        })), new Promise(((e, t) => {
                            try {
                                r.default.getType({
                                    success: function (t) {
                                        e(t)
                                    }, fail: function () {
                                        e({})
                                    }
                                })
                            } catch (t) {
                                e({})
                            }
                        })), x()]).then((e => {
                            let a = Object.assign(t, ...e), o = {};
                            this.state.today_icon_state = e[3].has_icon, Promise.all([P(B), N(y), P(R), N(A)]).then((e => {
                                let t = e[0], i = e[1];
                                e[2], e[3], t || i ? t && i ? (o.cuid = t, o.n_u_mark = this.state.n_u_mark = 1) : (o.cuid = t || JSON.parse(i.text)[B], this.save_uuids_to_client(o.cuid), o.n_u_mark = this.state.n_u_mark = 1) : (o.cuid = function (e) {
                                    let t = e || T();
                                    return (0, c.default)(Date.now() + "-" + T() + "-" + T() + "-" + T() + "-" + t)
                                }(a.userId || ""), this.save_uuids_to_client(o.cuid), o.n_u_mark = this.state.n_u_mark = 0), this.state.cuid = o.cuid, o.req = this.state.req = b(o.cuid), this.state.data = Object.assign({}, M(a, this.state.cuid), $(o))
                            }))
                        }))
                    }

                    get_app_info(e) {
                        let t = {}, a = {};
                        try {
                            a = u.default.getInfo()
                        } catch (e) {
                            let t = {err_msg: v(e.stack) || "", err_site: "app.getInfo"};
                            j.err_report(t)
                        }
                        t.package = a.packageName, t.versionName = a.versionName, t.name = a.name, t.source = a.source && a.source.type, t.extra = a.source && a.source.extra;
                        try {
                            t.channel = s.default.getProvider()
                        } catch (e) {
                            let t = {err_msg: v(e.stack) || "", err_site: "account.getProvider"};
                            j.err_report(t)
                        }
                        k().then((a => {
                            t = Object.assign(t, a);
                            let o = Object.assign({}, M(t, this.state.cuid), $({}));
                            e && e(o)
                        }))
                    }

                    page_stat(e) {
                        let t, a, o;
                        Promise.all([x(), P(R), N(A)]).then((e => {
                            let t = e[0].has_icon, a = e[1] || e[2].text, o = O();
                            if (a || (this.state.lastday_icon_state = this.state.lastday_icon_state || 0, this.icon_states = {
                                tod_state: {
                                    update_time: o,
                                    state: t
                                }, last_state: {update_time: o, state: this.state.lastday_icon_state}
                            }), a) {
                                let e = JSON.parse(a);
                                o != e.tod_state.update_time ? (this.state.lastday_icon_state = e.tod_state.state, this.icon_states = {
                                    tod_state: {
                                        update_time: o,
                                        state: t
                                    }, last_state: {update_time: e.tod_state.update_time, state: e.tod_state.state}
                                }) : (this.state.lastday_icon_state = e.last_state.state, t != e.tod_state.state && (this.icon_states = Object.assign({}, e, {
                                    tod_state: {
                                        update_time: o,
                                        state: t
                                    }
                                })))
                            }
                            this.state.data.t_icon_state = t == this.state.lastday_icon_state ? 2 : t, this.state.data.has_icon = t
                        }));
                        try {
                            a = (t = l.default.getState() || {}).name, o = t.path
                        } catch (e) {
                            let t = {err_msg: v(e.stack) || "", err_site: "router.getState"};
                            j.err_report(t)
                        }
                        try {
                            this.isReStart(a) && this.reStart()
                        } catch (e) {
                            let t = {err_msg: v(e.stack) || "", err_site: "computed reStart"};
                            j.err_report(t)
                        }
                        this.state.page = K({
                            sta_time: Date.now(),
                            page_name: a || "",
                            page_path: o || "",
                            is_entry: this.state.is_entry || 0
                        }), this.state.is_entry = 0, G.has_open_log = !0
                    }

                    page_end(e) {
                        try {
                            O();
                            let e = Date.now();
                            if (!this.state.cuid || !this.state.data) return;
                            if (this.state.page) this.state.page.duration = e - this.state.page.sta_time, this.state.page.end_time = e, this.handle_submit({}, (() => {
                                null != this.icon_states && this.update_icon_state({}, this.icon_states)
                            })); else {
                                let e = {
                                    err_msg: "this.state.page is" + this.state.page,
                                    err_site: "get_page_data"
                                };
                                j.err_report(e)
                            }
                        } catch (e) {
                            console.log("error", e)
                        }
                    }

                    isReStart(e) {
                        let t = this.state.page || {page_name: "", end_time: 0};
                        if ("" == t.end_time) return !1;
                        let a = Date.now() - t.end_time;
                        return e && e === t.page_name && a >= 3e4
                    }

                    reStart() {
                        this.state.is_entry = 1, this.state.req = b(this.state.cuid), this.state.data && (this.state.data.req_id = this.state.req)
                    }

                    merge_datas() {
                        return Object.assign(this.state.data || {}, this.state.page || {}, L)
                    }

                    handle_submit(e = {}, t) {
                        let a = Object.assign({}, this.merge_datas(), e), o = C(a), i = S(o, a.cuid);
                        I(C({
                            package: a.package,
                            svr: a.svr,
                            cuid: a.cuid,
                            en_code: "cuid",
                            sdk_version: a.sdk_version,
                            sdk_version_code: a.sdk_version_code,
                            action: a.action,
                            params: i
                        })).then((e => {
                            200 == e.code ? (this.send_queue(), t && t()) : this.save_to_queue(o)
                        })).catch((e => {
                            this.save_to_queue(o)
                        }))
                    }

                    save_to_queue(e) {
                        let t = this.state.log_list && this.state.log_list.length;
                        return t && t < 50 && this.state.log_list.push(e + "&retry=1"), this.state.log_list
                    }

                    send_queue() {
                        try {
                            let e = [...this.state.log_list];
                            this.state.log_list = [], e.forEach((e => {
                                I(e).then((t => {
                                    200 != t.code && this.save_to_queue(e)
                                })).catch((t => {
                                    this.save_to_queue(e)
                                }))
                            }))
                        } catch (e) {
                            console.log("error", e)
                        }
                    }

                    event_log(e = {}) {
                        if (!this.state.req) return void console.error("event err:Please execute the “track_event” after the initialization is complete");
                        let t = Object.assign({}, e, {action: 3});
                        this.handle_submit(t)
                    }

                    err_report(e = {}) {
                        if (this.state.data.svr) this.combine_err_data(Object.assign({}, this.merge_datas(), e)); else try {
                            this.get_app_info(((t = {}) => {
                                this.combine_err_data(Object.assign({}, t, e))
                            }))
                        } catch (e) {
                        }
                    }

                    combine_err_data(e = {}) {
                        let t = Object.assign({action: 9, err_time: (new Date).getTime(), err_id: ""}, e);
                        t.app_id = _.default.app_key || "";
                        let a = S(C(t), t.cuid), o = {
                            package: t.package || "",
                            svr: t.svr,
                            app_id: t.app_id || "",
                            cuid: t.cuid || "",
                            en_code: "cuid",
                            sdk_version: t.sdk_version || "",
                            sdk_version_code: t.sdk_version_code,
                            action: t.action || "",
                            params: a
                        };
                        P(U).then((e => {
                            let t = (new Date).getDate(), a = {day: t, len: 0};
                            if (e) try {
                                a = JSON.parse(e)
                            } catch (e) {
                            }
                            a.day !== t && (a.len = 0), a.len < 50 && ++a.len, a.len > 50 || function (e) {
                                return D({url: "/e.gif?" + e})
                            }(C(o)).then((e => {
                                w(U, v(a)).then()
                            }))
                        })).catch()
                    }

                    save_uuids_to_client(e) {
                        w(B, e).then((e => {
                            e && (G.has_cuid_storage = !0)
                        }));
                        let t = {};
                        t[B] = e, E(y, t).then((e => {
                        }))
                    }

                    update_icon_state(e, t = "") {
                        w(R, t).then((e => {
                        })), E(A, t).then((e => {
                        }))
                    }
                }, F = {
                    open_app(e) {
                        try {
                            if (!_.default.app_key) return void console.error("Not configured app_key!");
                            j.init(e)
                        } catch (e) {
                            let t = {err_msg: v(e.stack) || "", err_site: "open_app"};
                            j.err_report(t)
                        }
                    }, page_show(e) {
                        try {
                            j.page_stat(e)
                        } catch (e) {
                            let t = {err_msg: v(e.stack) || "", err_site: "page_show"};
                            j.err_report(t)
                        }
                    }, page_hide(e) {
                        try {
                            G.has_init && G.has_open_log && j.page_end(e)
                        } catch (e) {
                            let t = {err_msg: v(e.stack) || "", err_site: "open_app"};
                            j.err_report(t)
                        }
                        G.has_open_log = !1
                    }, track_event(e, t) {
                        try {
                            if (!_.default.app_key) return void console.error("Not configured app_key!");
                            let a = null == t ? "" : t;
                            if (!function (e) {
                                return "string" == typeof e && "" !== e && /^[0-9a-zA-Z_\u4e00-\u9fa5]{1,255}$/.test(e)
                            }(e)) return void console.error('"event error": please check track_event id. id should be "string" and not null.');
                            if (!function (e) {
                                let t = /^[0-9a-zA-Z_\u4e00-\u9fa5]{0,255}$/, a = 0;
                                if ("string" == typeof e && t.test(e)) return !0;
                                if (function (e) {
                                    if ("object" != typeof e || null == e) return !1;
                                    if (null === Object.getPrototypeOf(e)) return !0;
                                    let t = e;
                                    for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                                    return Object.getPrototypeOf(e) === t
                                }(e)) {
                                    for (let o in e) {
                                        let i = e[o];
                                        if ("string" != typeof o && "number" != typeof o || !/^[0-9a-zA-Z_\u4e00-\u9fa5]{1,255}$/.test(o)) return !1;
                                        if ("string" != typeof i && "number" != typeof i || !t.test(i)) return !1;
                                        a++
                                    }
                                    return !(a > 100)
                                }
                                return !1
                            }(a)) return void console.error('"event error":  please check track_event parameter. parameter should be "string" or "object"');
                            j.event_log({ev_id: e, ev_args: "string" == typeof a ? a : v(a)})
                        } catch (e) {
                            let t = {err_msg: v(e.stack) || "", err_site: "track_event"};
                            j.err_report(t)
                        }
                    }, on_err(e) {
                        try {
                            if (!_.default.app_key) return void console.error("Not configured app_key!");
                            let t = {
                                err_msg: v(e.stack) || "",
                                err_site: "",
                                action: 8,
                                err_id: (0, c.default)(e.message.replace(/^[\S\s]+:/, ""))
                            };
                            j.err_report(t)
                        } catch (e) {
                            let t = {err_msg: v(e.stack) || "", err_site: "on_err"};
                            j.err_report(t)
                        }
                    }
                }, q = {
                    app_sta_init: F.open_app,
                    page_show: F.page_show,
                    page_hide: F.page_hide,
                    track_event: F.track_event,
                    on_err: F.on_err
                }, V = a.g.__proto__ || a.g;
            V.APP_STATISTICS = q, V.Custom_page = APP_STATISTICS.Custom_page = function (e) {
                let t = e.onShow, a = e.onHide;
                return e.onShow = function () {
                    F.page_show(this), t && t.call(this)
                }, e.onHide = function () {
                    F.page_hide(this), a && a.call(this)
                }, e
            }, t.default = q
        }, 5092
    :
        (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = n($app_require$("@app-module/system.fetch")), i = n(a(4038));

            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function r(e) {
                return new Promise(((t, a) => {
                    e.isAuth ? (console.log("需要token鉴权的接口"), i.default.getStorage("token").then((i => {
                        o.default.fetch({
                            url: e.url,
                            method: e.method,
                            data: JSON.stringify(e.data),
                            header: {authorization: "Bearer " + i}
                        }).then((e => {
                            200 === e.data.code ? t(JSON.parse(e.data.data)) : a(e.data)
                        })).catch(((e, t) => {
                            a(e)
                        }))
                    }))) : o.default.fetch({url: e.url, method: e.method, data: e.data}).then((e => {
                        e && 200 === e.data.code && t(JSON.parse(e.data.data))
                    })).catch(((e, t) => {
                        console.log(`🐛 request fail, code = ${t}`), a(e)
                    })).finally((() => {
                        console.log(`✔️ request @${e.url} has been completed.`), t()
                    }))
                }))
            }

            function s(e, t = 2e4) {
                try {
                    return Promise.race([r(e), new Promise(((e, a) => {
                        setTimeout((() => {
                            a(new Error("网络状况不太好，再刷新一次？"))
                        }), t)
                    }))])
                } catch (e) {
                    console.log(e)
                }
            }

            Promise.prototype.finally = function (e) {
                const t = this.constructor;
                return this.then((a => t.resolve(e()).then((() => a))), (a => t.resolve(e()).then((() => {
                    throw a
                }))))
            }, t.default = {
                post: function (e, t, a) {
                    return s({method: "post", url: e, data: t, isAuth: a})
                }, get: function (e, t, a) {
                    return s({method: "get", url: i.default.queryString(e, t), isAuth: a})
                }, put: function (e, t, a) {
                    return s({method: "put", url: e, data: t, isAuth: a})
                }
            }
        }, 9010
    :
        (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o, i = (o = a(5092)) && o.__esModule ? o : {default: o};
            const n = "https://ddzsapi.syreads.com/";
            t.default = {
                getRecord: e => i.default.post(`${n}apicom/activity/get-turntable-record`, e, !0),
                getCoinGlod: e => i.default.post(`${n}apicom/activity/receive-award`, e, !0)
            }
        }, 2398
    :
        (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o, i = (o = a(5092)) && o.__esModule ? o : {default: o};
            t.default = {getUserData: e => i.default.get("https://ddzsapi.syreads.com/api/user/mine", e, !0)}
        }, 1734
    :
        (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o, i = (o = a(4415)) && o.__esModule ? o : {default: o};
            const n = "https://ddzsapi.syreads.com/";
            var r = null;

            function s() {
                return r ? r.pageCodeInfo.pathCurUrl : "默认页面"
            }

            t.default = {
                setAppDef(e) {
                    e && (r = e)
                },
                login: e => i.default.post(`${n}api/quick/open-v3`, e, s()),
                userDataInfo: e => i.default.get(`${n}api/user/mine`, e, s()),
                uploadInfo: e => i.default.post(`${n}user/upload`, e, s()),
                logout: e => i.default.post(`${n}user/logout`, e, s()),
                addDeskTopInfo: e => i.default.get(`${n}api/quick/desk`, e, s()),
                pushMessage: e => i.default.post(`${n}api/push/report`, e, s()),
                getActivityList: e => i.default.get(`${n}api/activity/list`, e, s()),
                getTask: e => i.default.get(`${n}api/weal/index`, e, s()),
                getTaskNew: e => i.default.get(`${n}api/weal/welfare`, e, s()),
                openCash: e => i.default.get(`${n}api/weal/get-red-packet`, e, s()),
                openSignPop: e => i.default.get(`${n}api/weal/sign-in-v2`, e, s()),
                userBookTickets: e => i.default.get(`${n}api/user/book-tickets`, e, s()),
                userIncomeDetail: e => i.default.get(`${n}api/cash/income`, e, s()),
                cashOutList: e => i.default.get(`${n}api/cash/amounts-list`, e, s()),
                cashOutRecordList: e => i.default.get(`${n}api/cash/get-cash-list`, e, s()),
                cashOutCheck: e => i.default.post(`${n}api/cash/check-account`, e, s()),
                cashOutSubmit: e => i.default.post(`${n}api/cash/cash-out`, e, s()),
                homeBottomApi: e => i.default.get(`${n}api/home/bottom`, e, s()),
                welfareReceiveApi: e => i.default.post(`${n}api/weal/get-bt`, e, s()),
                welfareReceiveNewApi: e => i.default.post(`${n}api/weal/get-bt2`, e, s()),
                welfareSignInApi: e => i.default.get(`${n}api/weal/sign-in`, e, s()),
                complaintApi: e => i.default.post(`${n}complaint/add`, e, s()),
                centerTypeApi: e => i.default.post(`${n}api/weal/center-type`, e, s()),
                writeOffApi: e => i.default.get(`${n}api/user/del-user`, e, s()),
                subscribeAddApi: e => i.default.get(`${n}api/subscribe/add`, e, s()),
                subscribeCheckApi: e => i.default.get(`${n}api/subscribe/is-subscribe`, e, s()),
                subscribeListApi: e => i.default.get(`${n}api/subscribe/list`, e, s()),
                subscribeCancelApi: e => i.default.get(`${n}api/subscribe/cancel`, e, s()),
                vipPriceApi: e => i.default.get(`${n}${vip_price_url}`, e, s()),
                taskUpdataApi: e => i.default.get(`${n}api/weal/edit-user-task`, e, s()),
                getHomeData: e => i.default.post(`${n}api/home/data`, e, s()),
                getTestDetail: e => i.default.post(`${n}api/home/evaluation`, e, s()),
                astroCp: e => i.default.post(`${n}api/starsign/pairing`, e, s()),
                astroLuck: e => i.default.post(`${n}api/starsign/fortune`, e, s()),
                answerTopic: e => i.default.post(`${n}api/answer/get-info`, e, s()),
                answerIndex: e => i.default.post(`${n}api/answer/list`, e, s())
            }
        }, 8377
    :
        (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            const o = a(8465), i = {};
            o.keys().forEach((e => {
                "./index.js" !== e && (i[e.replace(/(^\.\/|\.js$)/g, "")] = o(e).default)
            })), t.default = i
        }, 6270
    :
        (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o, i = (o = a(4415)) && o.__esModule ? o : {default: o};
            t.default = {
                getCustomadMaterial: e => i.default.get("https://clapi.readnos.com/api/ad/material", function (e) {
                    return e.secret_key = "mMdHzOBplKp9oGyM", e
                }(e), "")
            }
        }, 1498
    :
        (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o, i = (o = a(5092)) && o.__esModule ? o : {default: o};
            const n = "https://ddzsapi.syreads.com/", r = !0;
            t.default = {
                getTourist: e => i.default.post(`${n}api/quick/open-v3`, e, r),
                login: e => i.default.post(`${n}api/user/register`, e, r),
                getShortCode: e => i.default.post(`${n}api/index/code`, e, r),
                getFeedBack: e => i.default.post(`${n}api/complaint/add`, e, r),
                loginOut: e => i.default.get(`${n}api/user/del-user`, e, r)
            }
        }, 4038
    :
        (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            const a = $app_require$("@app-module/system.prompt"),
                o = $app_require$("@app-module/system.storage"), i = $app_require$("@app-module/system.router");
            t.default = {
                showToast: function (e = "", t = 0) {
                    e && a.showToast({message: e, duration: t})
                }, queryString: function (e, t) {
                    let a = [];
                    for (let e in t) a.push(e + "=" + t[e]);
                    let o = a.join("&");
                    return o ? `${e}?${o}` : e
                }, getStorage: e => new Promise(((t, a) => {
                    o.get({
                        key: e, success(e) {
                            t(e || "")
                        }, fail(e, t) {
                            console.log(`getStorage fail, code = ${t}`), a({data: e, code: t})
                        }
                    })
                })), setStorage: (e, t) => {
                    o.set({
                        key: e, value: t, fail: (e, t) => {
                            console.log(`setStorage fail, code = ${t}`)
                        }
                    })
                }, deleteStorage: e => {
                    console.log(e, "key"), o.delete({
                        key: e, success: e => {
                            console.log(`handling success, code=${e}`)
                        }, fail: e => {
                            console.log(`handling fila, code=${e}`)
                        }
                    })
                }, showDialog: (e, t, o, i) => {
                    a.showDialog({
                        title: e, message: t, buttons: o, autocancel: !1, success: function (e) {
                            i(e)
                        }, cancel: function () {
                            console.log("handling cancel")
                        }, fail: function (e, t) {
                            console.log(`handling fail, code = ${t}`)
                        }
                    })
                }, back: () => {
                    i.back()
                }, routeReplace: e => {
                    i.replace({uri: e})
                }, routePush: (e, t) => {
                    i.push({uri: e, params: t})
                }
            }
        }, 617
    :
        (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = u($app_require$("@app-module/system.fetch")),
                i = u($app_require$("@app-module/system.app")), n = u(a(7711)),
                r = u($app_require$("@app-module/system.storage")),
                s = u($app_require$("@app-module/system.device")),
                d = u($app_require$("@app-module/system.package")), p = u(a(6560)), c = u(a(4418));

            function u(e) {
                return e && e.__esModule ? e : {default: e}
            }

            let l = {
                SECRET_KEY: "",
                HAPKEY: "",
                INTENDED_USER: 0,
                CHANNEL: "",
                LINK_ID: "",
                SOURCE_PACKAGR: "",
                DEEP_LINK_ACCESS: 0,
                REVIEW_STATUS: 0,
                CLIENT_VERSION: "",
                INSTALLED_PACKAGE_NAME: "",
                TIMESTAMP: "",
                MOBIL_FACTORY: "",
                ANDROID_VERSION: "",
                MOBIL_VERSION: "",
                QUICKAPP_VERSION: "",
                ANDROID_ID: "",
                FIRST_VISITED_CITY: "",
                NUMBER_OF_VISITS: 0,
                MATERIAL_TYPE: "",
                IDEAS_ID: "",
                PLAN_ID: "",
                UTM_SOURCE_ID: "",
                NUMBER_OF_VISITS_TODAY: "",
                DATE_TIME: 0,
                LAST_VISITED_CITY: "",
                INSTALL_APP: {},
                SOURCE_ID: "",
                NUMBER_OF_ADDDESK_START: 0,
                VISIT_INTERVAL_TIME: 0
            };
            var _ = {
                tacticsInfo: null,
                routesInfo: [],
                popupInfo: null,
                initStatus: 0,
                tacticsType: 4,
                configInfo: null,
                customPopupData: {},
                backPopupData: {},
                commonNativePopupData: {},
                baiduPopupData: {},
                videoPopupData: {},
                middlePopupData: {},
                adPostionInfo: null,
                adConfigInfo: null,
                appPackageInfo: {},
                reviewStatus: 0,
                ad_pool: null,
                app_ad_packet: "",
                new_ad_pos: null,
                bqtAdConfigInfo: null,
                qdConfig: {},
                middleVideoPopupData: {},
                middleBaiduPopupData: {},
                middleTempletePopupData: {},
                baiduScreenInsertionPopupData: {},
                adRequestNum: 0,
                appPopupData: {},
                readViewConfig: {},
                event_info: {}
            };

            async function f() {
                let e = ["com.huawei.fastapp.dev", "org.hapjs.mockup", "org.hapjs.debugger", "com.zouqi.qingfeng", "com.fvcorp.android.aijiasuclient", "com.zaozhu.netplus", "com.qlbd.quanliangpromote", "cn.ccspeed", "com.zx.a2_quickfox", "com.dongguo.feiyu", "com.linghang520.iphainet"];
                return new Promise((async t => {
                    const a = await function () {
                        const e = (new Date).getTime();
                        return new Promise((t => {
                            o.default.fetch({url: `https://ims.readnos.com/json/packageList/duodianzhishi/${l.MOBIL_FACTORY}.json?time=${e}`}).then((e => {
                                200 === e.data.code && e.data.data ? t(JSON.parse(e.data.data)) : t([])
                            })).catch((e => {
                                t([])
                            }))
                        }))
                    }();
                    g(e, a, (e => {
                        LOG("TACTICS", "checkAbnormalPersonsFn==>", e), t(function (e) {
                            try {
                                var t = p.default.enc.Utf8.parse("00F35FCAA967B789"),
                                    a = p.default.enc.Utf8.parse("A041FCA49EF0B983"),
                                    o = p.default.enc.Utf8.parse(e);
                                const i = p.default.AES.encrypt(o, t, {
                                    iv: a,
                                    mode: p.default.mode.CBC,
                                    padding: p.default.pad.Pkcs7
                                });
                                return LOG("TACTICS", i.toString()), i.toString()
                            } catch (t) {
                                return LOG("TACTICS", "aesEncrypt", t), e
                            }
                        }(JSON.stringify(e)))
                    }))
                }))
            }

            function g(e, t, a) {
                !function o(i, n, r) {
                    n >= r.length ? a(i) : d.default.hasInstalled({
                        package: r[n], success: function (a) {
                            if (a.result) {
                                if (n >= e.length) {
                                    const a = t[n - e.length].name;
                                    COMMON_REPORT_UTILS.return_source_app_report(a)
                                }
                                i[`${r[n]}`] = 1, n++, o(i, n, r)
                            } else i[`${r[n]}`] = 0, n++, o(i, n, r)
                        }, fail: function (e, t) {
                            i[`${r[n]}`] = 0, n++, o(i, n, r)
                        }
                    })
                }({}, 0, e.concat(t.map((e => e.package))))
            }

            async function m(e, t, a) {
                return new Promise(((i, n) => {
                    o.default.fetch({
                        url: "https://clapi.readnos.com/api" + e,
                        method: t,
                        data: a,
                        header: {"Content-Type": "application/json"},
                        success: e => {
                            LOG("TACTICS", "http====>", e);
                            try {
                                const t = JSON.parse(e.data);
                                200 === t.code ? i(t) : n(t.message)
                            } catch (e) {
                                n("接口异常")
                            }
                        },
                        fail: (e, t) => {
                            LOG("TACTICS", `🐛tactics request fail, code = ${t} `, e), n(e)
                        }
                    })
                }))
            }

            function h() {
                let e = _.app_ad_packet;
                return new Promise((t => {
                    g(e.split(","), (e => {
                        let a = [];
                        for (let t in e) e[t] && a.push(t);
                        t(a.toString())
                    }))
                }))
            }

            function y(e, t, a = "btn") {
                if (!t || !t.id) return;
                let o = new Object;
                o.ad_id = t.id, o.ad_network = t.ad_network ? t.ad_network : 1, o.ad_type = t.ad_type ? t.ad_type : "原生", o.result = t.result ? t.result : "", o.page_name = t.scenario ? t.scenario : "", o.ad_position = t.popName ? t.popName : o.page_name, o.page_type = t.popGroupName ? t.popGroupName : o.page_name, o.duration = `${t.requestNum ? t.requestNum : 1}`, o.ad_style = t.ad_style ? t.ad_style : "", o.adRequestNum = `${t.adRequestNum || "1"}`, o.referer = `${t.referer || ""}`;
                let i = "btn" == a ? "按钮" : "素材", {
                    ad_id: n,
                    ad_network: r,
                    ad_type: s,
                    page_name: d,
                    page_type: p,
                    ad_position: c,
                    result: u,
                    duration: l,
                    ad_style: _,
                    adRequestNum: f,
                    referer: g
                } = o;
                switch (LOG("TACTICS", "uploadAdInfo==============>", e, o, a), e) {
                    case"request":
                        COMMON_REPORT_UTILS.ad_sdk_request_report(n, r, s, d, p, c, u, f, _);
                        break;
                    case"show":
                        COMMON_REPORT_UTILS.ad_sdk_show_report(n, r, s, d, p, c, f, _, u);
                        break;
                    case"click":
                        COMMON_REPORT_UTILS.ad_sdk_click_report(n, r, s, d, p, c, i, f, _);
                        break;
                    case"take":
                        COMMON_REPORT_UTILS.ad_sdk_take(o, t.pageName)
                }
            }

            const A = {
                initSdk: async function (e) {
                    return new Promise(((t, a) => e.secretKey ? e.android ? (_.initStatus = 1, void function (e) {
                        return LOG("TACTICS", "策略路由参数===>", e), new Promise((async t => {
                            l.SECRET_KEY = e.secretKey, l.ANDROID_ID = e.android, l.CLIENT_VERSION = i.default.getInfo().versionName, l.SOURCE_PACKAGR = i.default.getInfo().source.packageName, l.TIMESTAMP = (new Date).getTime(), l.CHANNEL = e.channelId ? e.channelId : "", l.LINK_ID = e.linkId ? e.linkId : "", l.HAPKEY = e.hapKey ? decodeURIComponent(e.hapKey) : "", l.INTENDED_USER = e.intendedUser ? e.intendedUser : 0, l.DEEP_LINK_ACCESS = e.deepLinkAccess, l.REVIEW_STATUS = e.reviewStatus ? 1 : 0, l.MATERIAL_TYPE = e.materialType ? e.materialType : "", l.IDEAS_ID = e.ideasId ? e.ideasId : "", l.PLAN_ID = e.planId ? e.planId : "", l.UTM_SOURCE_ID = e.mediaId ? e.mediaId : "", l.SOURCE_ID = e.sourceId ? e.sourceId : "", l.NUMBER_OF_ADDDESK_START = e.addDeskTopDays ? e.addDeskTopDays : 0;
                            let a = (new Date).getTime(), o = (a - a % 864e5) / 864e5;
                            if (l.DATE_TIME = o, e.deviceInfo) {
                                l.QUICKAPP_VERSION = e.deviceInfo.platformVersionCode, l.ANDROID_VERSION = e.deviceInfo.osVersionName, l.MOBIL_VERSION = e.deviceInfo.model;
                                let a = e.deviceInfo.brand && e.deviceInfo.brand.toLowerCase();
                                a = "honor" == a || "huawei" == a ? "huawei" : "redmi" == a || "xiaomi" == a || "小米" == a || "Redmi" == a || "小米红米" == a ? "xiaomi" : "oppo" == a || "realme" == a || "oneplus" == a ? "oppo" : "vivo" == a ? "vivo" : "other", l.MOBIL_FACTORY = a, l.INSTALL_APP = await f(), LOG("TACTICS", "策略路由参数===>", l.INSTALL_APP), t(1)
                            } else s.default.getInfo().then((async e => {
                                l.QUICKAPP_VERSION = e.data.platformVersionCode, l.ANDROID_VERSION = e.data.osVersionName, l.MOBIL_VERSION = e.data.model;
                                let a = e.data.brand && e.data.brand.toLowerCase();
                                a = "honor" == a || "huawei" == a ? "huawei" : "redmi" == a || "xiaomi" == a || "小米" == a || "Redmi" == a || "小米红米" == a ? "xiaomi" : "oppo" == a || "realme" == a || "oneplus" == a ? "oppo" : "vivo" == a ? "vivo" : "other", l.MOBIL_FACTORY = a, l.INSTALL_APP = await f(), LOG("TACTICS", "策略路由参数===>", l.INSTALL_APP), t(1)
                            }))
                        }))
                    }(e).then((() => {
                        LOG("TACTICS", "TACTICE_SDK->初始化获取的城市以及访问次数", l), r.default.get({key: "tacticsData"}).then((e => {
                            if (LOG("TACTICS", "TACTICE_SDK->初始化获取的城市以及访问次数", e), e.data) {
                                let t = JSON.parse(e.data);
                                l.FIRST_VISITED_CITY = t.first_visited_city ? t.first_visited_city : "", l.LAST_VISITED_CITY = t.last_visited_city ? t.last_visited_city : "", l.NUMBER_OF_VISITS = t.number_of_visits ? Number(t.number_of_visits) : 0, l.NUMBER_OF_VISITS_TODAY = t.number_of_visits_today ? Number(t.number_of_visits_today) : 0, Number(t.date_time) != l.DATE_TIME && (l.NUMBER_OF_VISITS_TODAY = 0), t.access_time ? l.VISIT_INTERVAL_TIME = parseInt((l.TIMESTAMP - t.access_time) / 1e3 / 60) : l.VISIT_INTERVAL_TIME = 1440
                            }
                            m("/users/sdk_init_v4", "POST", l).then((e => {
                                e.data.activity_list, _.activity_list = e.data.activity_list, e.data.tacticsInfo ? _.tacticsInfo = e.data.tacticsInfo : _.tacticsInfo = n.default.tacticsInfo, e.data.popupInfo ? _.popupInfo = e.data.popupInfo : _.popupInfo = n.default.popupInfo, e.data.ad_pool ? _.ad_pool = e.data.ad_pool : _.ad_pool = {
                                    status: 0,
                                    scene_list: ""
                                }, e.data.app_ad_packet && (_.app_ad_packet = e.data.app_ad_packet), e.data.new_ad_pos ? _.new_ad_pos = e.data.new_ad_pos : _.new_ad_pos = c.default.getNewDefaultAdPostionConfigByBrand(l.MOBIL_FACTORY), e.data.ad_pos && e.data.ad_pos.baidu_ad ? _.bqtAdConfigInfo = e.data.ad_pos : _.bqtAdConfigInfo = c.default.getBqtDefaultAdConfigByBrand(l.MOBIL_FACTORY), _.qdConfig = {
                                    ad_pos: e.data.ad_pos,
                                    ad_material: e.data.ad_material,
                                    ad_config: e.data.ad_config,
                                    page_config: e.data.page_config
                                }, e.data.configInfo && (_.configInfo = e.data.configInfo), e.data.routesInfo ? _.routesInfo = e.data.routesInfo : _.routesInfo = n.default.routesInfo, e.data.timeInfo && (_.timeInfo = e.data.timeInfo), e.data.event_info ? _.event_info = e.data.event_info : _.event_info = {
                                    is_open: 0,
                                    events: ""
                                }, e.data.first_visited_city && e.data.number_of_visits && r.default.set({
                                    key: "tacticsData",
                                    value: {
                                        first_visited_city: e.data.first_visited_city,
                                        number_of_visits: e.data.number_of_visits,
                                        number_of_visits_today: e.data.number_of_visits_today,
                                        date_time: l.DATE_TIME,
                                        last_visited_city: e.data.currently_visited_city,
                                        access_time: (new Date).getTime()
                                    }
                                }), _.vistisTimes = e.data.number_of_visits, _.reviewStatus = e.data.review_status, e.data.complaint_tel && (_.complaint_tel = e.data.complaint_tel), _.initStatus = 2, LOG("TACTICS", "TACTICE_SDK->策略路由SDK初始化成功"), _.tacticsType = 1, t(_)
                            })).catch((e => {
                                _.tacticsInfo = n.default.tacticsInfo, _.routesInfo = n.default.routesInfo, _.popupInfo = n.default.popupInfo, _.new_ad_pos = c.default.getNewDefaultAdPostionConfigByBrand(l.MOBIL_FACTORY), _.bqtAdConfigInfo = c.default.getBqtDefaultAdConfigByBrand(l.MOBIL_FACTORY), _.ad_pool = {
                                    status: 0,
                                    scene_list: ""
                                }, _.configInfo = n.default.configInfo, _.timeInfo = n.default.timeInfo, _.vistisTimes = 1, _.initStatus = 2, console.error("TACTICE_SDK->策略路由SDK初始化失败,初始化接口出错!已使用默认策略"), _.tacticsType = 3, t(_)
                            }))
                        }))
                    }))) : (console.error("TACTICE_SDK->参数android为必传"), void a("SDK传入的参数android为必传")) : (console.error("TACTICE_SDK->参数secretKey为必传"), void a("SDK传入的参数advConfig为必传"))))
                }, getPopupCodeByPageInfo: function e(t) {
                    if (2 != _.initStatus) return console.error("TACTICE_SDK->SDK初始化未完成!"), "";
                    if (!t.pageCode) return console.error("TACTICE_SDK->参数pageCode为必传!"), "";
                    if (!t.actionCode) return console.error("TACTICE_SDK->参数actionCode为必传!"), "";
                    if (!t.pageOrigin) return console.error("TACTICE_SDK->参数pageOrigin为必传!"), "";
                    if (("BUTTON_CLICK" == t.actionCode || "POPUP_CLOSE" == t.actionCode) && !t.popupCode) return console.error(`TACTICE_SDK->事件为${t.actionCode}时，popupCode不可以为空`), "";
                    if (_.tacticsInfo && _.tacticsInfo.pageTactics) {
                        let o = [];
                        if (o = "SCREEN_TOUCH" === t.actionCode ? _.tacticsInfo.pageTactics.filter((e => "ALL" == e.page_code && "OUTSIDE_FROM" == e.page_origin)) : _.tacticsInfo.pageTactics.filter((e => e.page_code == t.pageCode && e.page_origin == t.pageOrigin)), 0 == o.length) return "ALL" != t.pageOrigin && e({
                            pageCode: t.pageCode,
                            actionCode: t.actionCode,
                            popupCode: t.popupCode,
                            pageOrigin: "ALL"
                        });
                        let i = o[0].popup_config;
                        if (!i.hasOwnProperty(`${t.actionCode}`)) return "ALL" != t.pageOrigin && e({
                            pageCode: t.pageCode,
                            actionCode: t.actionCode,
                            popupCode: t.popupCode,
                            pageOrigin: "ALL"
                        });
                        var a = "";
                        switch (t.actionCode) {
                            case"BUTTON_CLICK":
                                break;
                            case"PAGE_BACK":
                                a = i.PAGE_BACK[0] && i.PAGE_BACK[0].popup_code ? i.PAGE_BACK[0].popup_code : "";
                                break;
                            case"PAGE_ENTRY":
                                a = i.PAGE_ENTRY[0] && i.PAGE_ENTRY[0].popup_code ? i.PAGE_ENTRY[0].popup_code : "";
                                break;
                            case"POPUP_CLOSE":
                                let e = i.POPUP_CLOSE.filter((e => e.popup_code == t.popupCode));
                                a = e[0] && e[0].next_popup_code ? e[0].next_popup_code : "";
                                break;
                            default:
                                a = i[`${t.actionCode}`] && i[`${t.actionCode}`][0] && i[`${t.actionCode}`][0].popup_code ? i[`${t.actionCode}`][0].popup_code : ""
                        }
                        return LOG("TACTICS", `TACTICE_SDK->策略路由匹配到的弹窗code为${a}`), a || "ALL" != t.pageOrigin ? a || e({
                            pageCode: t.pageCode,
                            actionCode: t.actionCode,
                            popupCode: t.popupCode,
                            pageOrigin: "ALL"
                        }) : a
                    }
                    return console.error("TACTICE_SDK->参数策略路由信息为空,请检查初始化或后台配置!"), ""
                }, getPageBackRouter: function (e) {
                    if (!e) return console.error("TACTICE_SDK->参数curPageRouter为必传!"), "";
                    if (_.routesInfo && _.routesInfo.routers && _.routesInfo.routers.length > 1) {
                        var t = "";
                        for (let a = 0; a < _.routesInfo.routers.length; a++) _.routesInfo.routers[a].page_code == e && a < _.routesInfo.routers.length - 1 && (t = _.routesInfo.routers[a + 1].router);
                        return LOG("TACTICS", `TACTICE_SDK->获取返回页面路由结果${t}`), t
                    }
                    return console.error("TACTICE_SDK->暂无路由配置或者无效配置!"), ""
                }, getCommonPopupCodeByPrefix: function (e) {
                    if (2 != _.initStatus) return console.error("TACTICE_SDK->SDK初始化未完成!"), "";
                    if (!e.popupPrefix) return console.error("TACTICE_SDK->参数codePrefix为必传!"), "";
                    if (_.tacticsInfo && _.tacticsInfo.popups) {
                        var t = "";
                        if (-1 != _.tacticsInfo.popups.indexOf(",")) {
                            let a = _.tacticsInfo.popups.split(",").filter((t => t.split("_")[0] == e.popupPrefix));
                            a.length > 0 && (t = a[0])
                        } else _.tacticsInfo.popups.split("_")[0] == e.popupPrefix && (t = _.tacticsInfo.popups);
                        return LOG("TACTICS", `TACTICE_SDK->前缀为${e.popupPrefix}的弹窗完整code为${t}`), t
                    }
                    return console.error(` ->公共弹窗获取失败!请检查是否配置${e.popupPrefix}开头的公共弹窗？`), ""
                }, getPageCommonPopupCodeByPrefix: function (e) {
                    if (2 != _.initStatus) return console.error("TACTICE_SDK->SDK初始化未完成!"), "";
                    if (!e.pageCode) return console.error("TACTICE_SDK->参数pageCode为必传!"), "";
                    if (!e.popupPrefix) return console.error("TACTICE_SDK->参数popupPrefix为必传!"), "";
                    if (_.popupInfo && _.popupInfo[`${e.pageCode}`]) {
                        let t = _.popupInfo[`${e.pageCode}`].split(",").filter((t => t.split("_")[0] == e.popupPrefix));
                        return 0 == t.length ? "" : (LOG("TACTICS", `TACTICE_SDK->策略路由匹配到的页面弹窗code为${t[0]}_页面code为${e.pageCode}`), t[0])
                    }
                    return console.error(`TACTICE_SDK->页面弹窗获取失败!请检查页面${e.pageCode}是否配置${e.popupPrefix}开头的页面弹窗？`), ""
                }, setGlobalData: function (e, t) {
                    Object.keys(_).includes(e) ? _[e] = t : console.error(`tactics_sdk setGlobalData key[${e}] is undefined ! Please check or add key[${e}]`)
                }, getGlobalData: function (e) {
                    return Object.keys(_).includes(e) ? _[e] : (console.error(`tactics_sdk getGlobalData key[${e}]'s value is undefined ! Please check !`), "")
                }, getCustomPopupData: function (e) {
                    return new Promise(((t, a) => {
                        if (_.customPopupData && _.customPopupData.hasOwnProperty(`${e}`)) return void t(JSON.parse(JSON.stringify(_.customPopupData[`${e}`])));
                        let o = i.default.getInfo().source.packageName, n = l.SECRET_KEY;
                        m(`/${-1 !== e.indexOf("Back") ? "back" : "custom"}/json`, "GET", {
                            secret_key: n,
                            packet: o,
                            pop_code: e
                        }).then((a => {
                            if (200 == a.code) {
                                let o = JSON.parse(a.data), i = {};
                                i[`${e}`] = o, Object.assign(_.customPopupData, i), t(JSON.parse(JSON.stringify(o)))
                            } else t([c.default.CUSTOM_POP_DEFAULT_DATA])
                        })).catch((e => {
                            t([c.default.CUSTOM_POP_DEFAULT_DATA])
                        }))
                    }))
                }, geBackPopupData: function (e) {
                    return new Promise(((t, a) => {
                        if (_.backPopupData && _.backPopupData.hasOwnProperty(`${e}`)) return void t(JSON.parse(JSON.stringify(_.backPopupData[`${e}`])));
                        let o = i.default.getInfo().source.packageName;
                        m("/back/json", "GET", {secret_key: l.SECRET_KEY, packet: o, pop_code: e}).then((a => {
                            if (200 == a.code) {
                                let o = JSON.parse(a.data), i = {};
                                i[`${e}`] = o, Object.assign(_.backPopupData, i), t(JSON.parse(JSON.stringify(o)))
                            } else t([c.default.CUSTOM_BACK_POP_DEFAULT_DATA])
                        })).catch((e => {
                            t([c.default.CUSTOM_BACK_POP_DEFAULT_DATA])
                        }))
                    }))
                }, gePopupShowTimes: function (e) {
                    return new Promise((t => {
                        r.default.get({
                            key: "popupShowInfo", success(a) {
                                if (a) {
                                    let o = JSON.parse(a);
                                    if ("object" == typeof o && o.hasOwnProperty(`${e}`)) return t(Number(o[`${e}`]))
                                }
                                t(0)
                            }, fail(e, a) {
                                t(0)
                            }
                        })
                    }))
                }, sePopupShowTimes: async function (e) {
                    let t = {data: ""}, a = {};
                    try {
                        t = await r.default.get({key: "popupShowInfo"})
                    } catch (e) {
                    }
                    if (t.data) if (a = JSON.parse(t.data), a.hasOwnProperty(`${e}`)) LOG("TACTICS", "sePopupShowTimes======>2", a), a[`${e}`]++; else {
                        let t = {};
                        t[`${e}`] = 1, Object.assign(a, t)
                    } else {
                        let t = {};
                        t[`${e}`] = 1, Object.assign(a, t)
                    }
                    LOG("TACTICS", "sePopupShowTimes======>3", a), r.default.set({
                        key: "popupShowInfo",
                        value: a
                    })
                }, getNewAdPostionInfo: function () {
                    let e = null;
                    if (_.new_ad_pos) e = _.new_ad_pos; else {
                        let t = l.MOBIL_FACTORY;
                        e = c.default.getNewDefaultAdPostionConfigByBrand(t)
                    }
                    return e
                }, getBqtAdConfigInfo: function () {
                    let e = null;
                    if (_.bqtAdConfigInfo) e = _.bqtAdConfigInfo; else {
                        let t = l.MOBIL_FACTORY;
                        e = c.default.getBqtDefaultAdConfigByBrand(t)
                    }
                    return e
                }, getAdConfigInfo: function () {
                    return new Promise(((e, t) => {
                        let a = l.MOBIL_FACTORY;
                        if (_.qdConfig.ad_config) return e(_.qdConfig.ad_config);
                        e(c.default.getDefaultAdConfigByBrand(a))
                    }))
                }, getCommonNativePopupData: function (e, t) {
                    return new Promise(((a, o) => {
                        if (_.commonNativePopupData && _.commonNativePopupData.hasOwnProperty(`${e}`)) return void a(JSON.parse(JSON.stringify(_.commonNativePopupData[`${e}`])));
                        let n = i.default.getInfo().source.packageName, r = l.SECRET_KEY, s = l.LINK_ID;
                        m("/common/json", "GET", {
                            secret_key: r,
                            packet: n,
                            group_code: e,
                            ad_id: t,
                            link_id: s
                        }).then((t => {
                            if (200 == t.code) {
                                let o = JSON.parse(t.data);
                                o.forEach((e => e.commonStyle.isAgdAd = t.is_agd_ad));
                                let i = {};
                                i[`${e}`] = o, Object.assign(_.commonNativePopupData, i), a(JSON.parse(JSON.stringify(o)))
                            } else a(c.default.COMMON_NATIVE_POP_DEFAULT_DATA)
                        })).catch((e => {
                            a(c.default.COMMON_NATIVE_POP_DEFAULT_DATA)
                        }))
                    }))
                }, getEncouragePopupData: function (e) {
                    return new Promise(((t, a) => {
                        if (_.videoPopupData && _.videoPopupData.hasOwnProperty(`${e}`)) return void t(JSON.parse(JSON.stringify(_.videoPopupData[`${e}`])));
                        let o = i.default.getInfo().source.packageName;
                        m("/encourage/json", "GET", {
                            secret_key: l.SECRET_KEY,
                            packet: o,
                            group_code: e
                        }).then((a => {
                            if (200 == a.code) {
                                let o = JSON.parse(a.data), i = {};
                                i[`${e}`] = o, Object.assign(_.videoPopupData, i), t(JSON.parse(JSON.stringify(o)))
                            } else t(c.default.COMMON_VIDEO_POP_DEFAULT_DATA)
                        })).catch((e => {
                            t(c.default.COMMON_VIDEO_POP_DEFAULT_DATA)
                        }))
                    }))
                }, getBaiduPopupData: function (e) {
                    return new Promise(((t, a) => {
                        if (_.baiduPopupData && _.baiduPopupData.hasOwnProperty(`${e}`)) return void t(JSON.parse(JSON.stringify(_.baiduPopupData[`${e}`])));
                        let o = i.default.getInfo().source.packageName;
                        m("/baidu/json", "GET", {
                            secret_key: l.SECRET_KEY,
                            packet: o,
                            group_code: e
                        }).then((a => {
                            if (200 == a.code) {
                                let o = JSON.parse(a.data), i = {};
                                i[`${e}`] = o, Object.assign(_.baiduPopupData, i), t(JSON.parse(JSON.stringify(o)))
                            } else t(c.default.COMMON_BAIDU_POP_DEFAULT_DATA)
                        })).catch((e => {
                            t(c.default.COMMON_BAIDU_POP_DEFAULT_DATA)
                        }))
                    }))
                }, getAppPopupData: function (e) {
                    return new Promise(((t, a) => {
                        if (_.appPopupData && _.appPopupData.hasOwnProperty(`${e}`)) return void t(JSON.parse(JSON.stringify(_.appPopupData[`${e}`])));
                        let o = i.default.getInfo().source.packageName;
                        m("/ad/app", "GET", {secret_key: l.SECRET_KEY, packet: o, group_code: e}).then((a => {
                            if (200 == a.code) {
                                let o = JSON.parse(a.data), i = {};
                                i[`${e}`] = o, LOG("==getAppPopupData555", o), Object.assign(_.appPopupData, i), t(JSON.parse(JSON.stringify(o)))
                            } else t(-1 !== e.indexOf("Middle") ? c.default.COMMON_TEMPLETE_POP_DEFAULT_DATA : c.default.COMMON_NATIVE_POP_DEFAULT_DATA)
                        })).catch((a => {
                            t(-1 !== e.indexOf("Middle") ? c.default.COMMON_TEMPLETE_POP_DEFAULT_DATA : c.default.COMMON_NATIVE_POP_DEFAULT_DATA)
                        }))
                    }))
                }, getActionPopupCode: function (e, t, a, o) {
                    return LOG("策略sdk mxt:getActionPopupCode ", e, t, a, o), new Promise(((i, n) => {
                        if (_.tacticsInfo && _.tacticsInfo.pageTactics) {
                            let r = _.tacticsInfo.pageTactics.filter((e => {
                                if (e.page_code == a && e.page_origin == o) return e
                            })), s = _.tacticsInfo.pageTactics.filter((e => {
                                if (e.page_code == a && "ALL" == e.page_origin) return e
                            }));
                            "SCREEN_TOUCH" === e && (s = _.tacticsInfo.pageTactics.filter((e => "ALL" == e.page_code && "OUTSIDE_FROM" == e.page_origin))), LOG("策略sdk mxt :actionInfo", e, r, s), r.length > 0 || s.length > 0 ? r.length && r[0].popup_config[e] && r[0].popup_config[e].length > 0 && r[0].popup_config[e][0].action && r[0].popup_config[e][0].action[t] ? i(r[0].popup_config[e][0].action[t]) : s.length && s[0].popup_config[e] && s[0].popup_config[e].length > 0 && s[0].popup_config[e][0].action && s[0].popup_config[e][0].action[t] ? i(s[0].popup_config[e][0].action[t]) : n("withoutCode") : n("withoutCode")
                        } else n("withoutCode")
                    }))
                }, getOriginalPopCode: function (e, t, a, o) {
                    return LOG("策略sdk mxt:getActionPopupCode ", e, t, a, o), new Promise(((i, n) => {
                        if (_.tacticsInfo && _.tacticsInfo.pageTactics) {
                            let n = _.tacticsInfo.pageTactics.filter((a => {
                                if (a.page_code == e && a.page_origin == t) return a
                            }));
                            LOG("策略sdk mxt :actionInfo", n), n.length > 0 && n[0].popup_config[a] && n[0].popup_config[a][0] && n[0].popup_config[a][0].action && (LOG("== 策略sdk mxt :click_interval", n[0].popup_config[a][0].action.click_interval), LOG("== 策略sdk mxt :request_fail", n[0].popup_config[a][0].action.request_fail), n[0].popup_config[a][0].action.click_interval != o && n[0].popup_config[a][0].action.request_fail != o || (LOG("== 策略sdk mxt :popup_code", n[0].popup_config[a][0].popup_code), i("POPUP_CLOSE" == a ? n[0].popup_config[a][0].next_popup_code : n[0].popup_config[a][0].popup_code)))
                        }
                        i(o)
                    }))
                }, getQdConfig: function (e) {
                    return e ? _.qdConfig[e] || {} : _.qdConfig
                }, filterAppRouse: h, getMiddlePopupData: function (e) {
                    return new Promise(((t, a) => {
                        if (_.middlePopupData && _.middlePopupData.hasOwnProperty(`${e}`)) return void t(JSON.parse(JSON.stringify(_.middlePopupData[`${e}`])));
                        let o = i.default.getInfo().source.packageName, n = l.SECRET_KEY, r = l.LINK_ID;
                        m("/middle/native", "GET", {
                            secret_key: n,
                            packet: o,
                            group_code: e,
                            link_id: r
                        }).then((a => {
                            if (200 == a.code) {
                                let o = JSON.parse(a.data), i = {};
                                i[`${e}`] = o, Object.assign(_.middlePopupData, i), t(JSON.parse(JSON.stringify(o)))
                            } else t(c.default.COMMON_MIDDLE_POP_DEFAULT_DATA)
                        })).catch((e => {
                            t(c.default.COMMON_MIDDLE_POP_DEFAULT_DATA)
                        }))
                    }))
                }, getMiddleVideoPopupData: function (e) {
                    return new Promise(((t, a) => {
                        if (_.middleVideoPopupData && _.middleVideoPopupData.hasOwnProperty(`${e}`)) return void t(JSON.parse(JSON.stringify(_.middleVideoPopupData[`${e}`])));
                        let o = i.default.getInfo().source.packageName;
                        m("/middle/video", "GET", {
                            secret_key: l.SECRET_KEY,
                            packet: o,
                            group_code: e
                        }).then((a => {
                            if (200 == a.code) {
                                let o = JSON.parse(a.data), i = {};
                                i[`${e}`] = o, Object.assign(_.middleVideoPopupData, i), t(JSON.parse(JSON.stringify(o)))
                            } else t(c.default.COMMON_MIDDLE_POP_DEFAULT_DATA)
                        })).catch((e => {
                            t(c.default.COMMON_MIDDLE_POP_DEFAULT_DATA)
                        }))
                    }))
                }, getMiddleBaiduPopupData: function (e) {
                    return new Promise(((t, a) => {
                        if (_.middleBaiduPopupData && _.middleBaiduPopupData.hasOwnProperty(`${e}`)) return void t(JSON.parse(JSON.stringify(_.middleBaiduPopupData[`${e}`])));
                        let o = i.default.getInfo().source.packageName;
                        m("/middle/baidu", "GET", {
                            secret_key: l.SECRET_KEY,
                            packet: o,
                            group_code: e
                        }).then((a => {
                            if (200 == a.code) {
                                let o = JSON.parse(a.data), i = {};
                                i[`${e}`] = o, Object.assign(_.middleBaiduPopupData, i), t(JSON.parse(JSON.stringify(o)))
                            } else t(c.default.COMMON_MIDDLE_POP_DEFAULT_DATA)
                        })).catch((e => {
                            t(c.default.COMMON_MIDDLE_POP_DEFAULT_DATA)
                        }))
                    }))
                }, getMiddleTempletePopupData: function (e) {
                    return new Promise(((t, a) => {
                        if (_.middleTempletePopupData && _.middleTempletePopupData.hasOwnProperty(`${e}`)) return void t(JSON.parse(JSON.stringify(_.middleTempletePopupData[`${e}`])));
                        let o = i.default.getInfo().source.packageName;
                        m("/middle/templete", "GET", {
                            secret_key: l.SECRET_KEY,
                            packet: o,
                            group_code: e
                        }).then((a => {
                            if (200 == a.code) {
                                let o = JSON.parse(a.data), i = {};
                                i[`${e}`] = o, Object.assign(_.middleTempletePopupData, i), t(JSON.parse(JSON.stringify(o)))
                            } else t(c.default.COMMON_TEMPLETE_POP_DEFAULT_DATA)
                        })).catch((e => {
                            t(c.default.COMMON_TEMPLETE_POP_DEFAULT_DATA)
                        }))
                    }))
                }, getBaiduScreenInsertionPopupData: function (e) {
                    return new Promise(((t, a) => {
                        if (_.baiduScreenInsertionPopupData && _.baiduScreenInsertionPopupData.hasOwnProperty(`${e}`)) return void t(JSON.parse(JSON.stringify(_.baiduScreenInsertionPopupData[`${e}`])));
                        let o = i.default.getInfo().source.packageName;
                        m("/ad/baidu-insertion", "GET", {
                            secret_key: l.SECRET_KEY,
                            packet: o,
                            group_code: e
                        }).then((a => {
                            if (200 == a.code) {
                                let o = JSON.parse(a.data), i = {};
                                i[`${e}`] = o, Object.assign(_.baiduScreenInsertionPopupData, i), t(JSON.parse(JSON.stringify(o)))
                            } else t(c.default.COMMON_BAIDU_SCREEN_POP_DEFAULT_DATA)
                        })).catch((e => {
                            t(c.default.COMMON_BAIDU_SCREEN_POP_DEFAULT_DATA)
                        }))
                    }))
                }, showAppAdv: function (e) {
                    let {scenario: t, sceneCode: a, adTimes: i, popName: n, popGroupName: r, requestNum: s} = e;
                    return new Promise(((d, p) => {
                        LOG("TACTICS", "广告ADSDK========>获取app唤醒广告", e), _.adRequestNum++;
                        var c = {
                            type: "app_rouse",
                            clickBtnTxt: "立即查看",
                            source: "",
                            title: "",
                            materialUrl: "",
                            id: "000",
                            icon: "",
                            ad_network: 3,
                            ad_type: "APP唤醒",
                            is_ad_click: "no",
                            adType: "4",
                            adTimes: i,
                            sceneCode: a,
                            scenario: t,
                            popName: n,
                            popGroupName: r,
                            requestNum: s,
                            adRequestNum: _.adRequestNum,
                            ad_style: "4",
                            result: ""
                        };
                        y("request", Object.assign({}, c, {result: "发起请求"}));
                        let u = l.SECRET_KEY, f = l.MOBIL_FACTORY, g = l.ANDROID_ID;
                        h().then((e => {
                            m("/ad/advertising", "GET", {
                                secret_key: u,
                                brand: f,
                                android_id: g,
                                packet: e
                            }).then((e => {
                                c.advDetail = {
                                    adId: `${e.data.id}`,
                                    title: e.data.pop_title,
                                    desc: e.data.media_name,
                                    icon: e.data.adver_url,
                                    imgUrlList: [e.data.adver_url],
                                    logoUrl: e.data.adver_url,
                                    clickBtnTxt: e.data.btn_text,
                                    creativeType: "0",
                                    interactionType: " 4",
                                    adver_name: e.data.adver_name,
                                    url: e.data.url,
                                    mediaId: `${e.data.media_id}`
                                }, c.source = e.data.media_name, c.title = e.data.pop_title, c.materialUrl = e.data.adver_url, c.icon = e.data.adver_url, c.id = `${e.data.id}`, c.mediaId = `${e.data.media_id}`, o.default.fetch({
                                    url: c.materialUrl,
                                    method: "get"
                                }), y("request", Object.assign({}, c, {result: "有广告"})), d(JSON.parse(JSON.stringify(c)))
                            })).catch((e => {
                                y("request", Object.assign({}, c, {result: "无广告"})), p(!1)
                            }))
                        }))
                    }))
                }, uploadAdInfo: y, clickAppAdv: function (e, t) {
                    return LOG("TASTICS", "点击了唤醒广告，上报给后端"), new Promise(((a, o) => {
                        let i = l.SECRET_KEY, n = l.ANDROID_ID;
                        m("/ad/click-adver", "GET", {
                            id: e,
                            media_id: t,
                            secret_key: i,
                            android_id: n
                        }).then((e => {
                            a(!0)
                        })).catch((e => {
                            o(!1)
                        }))
                    }))
                }
            };
            (a.g.__proto__ || a.g).TACTICS_SDK = A, t.default = A
        }, 2295
    :
        (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, t.default = {app_key: "2f559ac6b00d51ecbd5eebdbd28592c0"}
        }, 2815
    :
        (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = n(a(8572)), i = n(a(7162));

            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var r = {isTacticsSdkInit: !1, popupConfigData: {}, currentBoostConfig: {}};

            function s(e) {
                let t = Object.assign({}, e), a = {}, i = o.default;
                if (a.config = t.config ? t.config : i.config, a.appCode = t.config ? t.appCode : i.appCode, a.configName = t.config ? t.configName : i.configName, t.config) {
                    let e = Object.keys(i.config).filter((e => !t.config[e]));
                    e.length > 0 && e.forEach((e => {
                        a.config[e] = i.config[e]
                    }))
                }
                return LOG("校验策略返回的应用配置数据是否完整==>", a), a
            }

            function d(e) {
                let t = e;
                return LOG("tacticsSdkInit======>begin"), new Promise(((e, a) => {
                    r.isTacticsSdkInit ? (LOG("tacticsSdkInit======>has to out"), e(!0)) : (LOG("tacticsSdkInit======>in"), TACTICS_SDK.initSdk({
                        secretKey: i.default.pro,
                        android: t.android,
                        deviceInfo: t.deviceInfo,
                        channelId: t.channelId,
                        linkId: t.linkId,
                        hapKey: t.hapKey ? t.hapKey : t.uniqueId,
                        intendedUser: 0,
                        deepLinkAccess: Number(t.intent) > 0 ? Number(t.intent) - 1 : 0,
                        materialType: t.materialType,
                        ideasId: t.utm_content,
                        planId: t.utm_ad_id,
                        mediaId: t.utm_source,
                        addDeskTopDays: t.addDeskTopDays || 0,
                        sourceId: t.sourceId
                    }).then((a => {
                        LOG("tacticsSdkInit======>inre", a), console.log(a.activity_list, "res.activity_list"), TACTICS_SDK.setGlobalData("activity_list", a.activity_list), TACTICS_SDK.setGlobalData("configInfo", s(a.configInfo)), t.auditOnline = a.reviewStatus, t.tacticsName = a.tacticsInfo.tacticsName ? a.tacticsInfo.tacticsName : "策略名称不存在", COMMON_REPORT_UTILS.set_attr("ext_field_10", t.tacticsName), COMMON_REPORT_UTILS.set_attr("ext_field_4", a.configInfo && a.configInfo.configName ? a.configInfo.configName : "");
                        let o = TACTICS_SDK.getGlobalData("configInfo").config;
                        if (AD_UTILS.change_ad_utils_data({TIMES: Number(o.ads_show_interval_min.val)}), AD_SDK.updataAdGlobalData({tacticsName: t.tacticsName}), r.isTacticsSdkInit = !0, a.tacticsType) {
                            let e = "", o = t.tacticsName,
                                i = a.routesInfo && a.routesInfo.routerName ? a.routesInfo.routerName : "路由配置名称不存在",
                                n = a.configInfo && a.configInfo.configName ? a.configInfo.configName : "应用配置名称不存在",
                                r = a.new_ad_pos && a.new_ad_pos.ad_name ? a.new_ad_pos.ad_name : "广告配置名称不存在";
                            switch (Number(a.tacticsType)) {
                                case 1:
                                    e = "成功";
                                    break;
                                case 2:
                                case 3:
                                    e = "失败"
                            }
                            COMMON_REPORT_UTILS.strategy_obtain_report(e, o, i, n, r)
                        }
                        e(!0)
                    })).catch((t => {
                        e(!1)
                    })))
                }))
            }

            function p(e, t) {
                LOG("CUSTOM", "==>", 777, ...arguments);
                let a = {};
                switch (e) {
                    case"CUSTOM_BACK":
                        a = function (e) {
                            let t = {};
                            return t = {
                                popType: "customBack",
                                popGroupName: e.popGroupName,
                                popName: e.popName,
                                popKey: e.popKey,
                                btnBackIsDisplay: !1,
                                closeStyle: {
                                    isShow: !0,
                                    width: e.closeStyle.closeWidth,
                                    height: e.closeStyle.closeHeight,
                                    distance: 50,
                                    position: e.closeStyle.closePosition,
                                    delay: e.closeStyle.closeDelay,
                                    opacity: e.closeStyle.closeOpacity,
                                    top: e.closeStyle.closeTop,
                                    image: e.closeIcon
                                },
                                crowdStyle: {
                                    isShow: 1 == e.crowdStyle.crowdSwitch,
                                    width: 750,
                                    height: e.crowdStyle.crowdHeight,
                                    color: e.crowdStyle.crowdTextColor,
                                    text: e.crowdStyle.crowdText,
                                    distance: e.crowdStyle.crowdDistance,
                                    position: e.crowdStyle.crowdTextPosition,
                                    delay: e.crowdStyle.crowdDelay,
                                    image: "",
                                    font: e.crowdStyle.crowdFont,
                                    between: 30
                                },
                                popStyle: {height: e.popHeight, width: 750, image: e.boxBg},
                                btnStyle: {
                                    width: e.btnStyle.btnWidth,
                                    height: e.btnStyle.btnHeight,
                                    radio: e.btnStyle.btnRadius,
                                    image: e.btnIcon,
                                    icon: "",
                                    iconSwitch: 0,
                                    hotTop: e.btnStyle.btnHotTop,
                                    hotBottom: e.btnStyle.btnHotBottom,
                                    hotAbout: e.btnStyle.btnHotAbout,
                                    bgColor: "",
                                    color: e.btnStyle.btnTextColor,
                                    font: e.btnStyle.btnFont,
                                    text: e.btnStyle.btnText,
                                    breath: e.btnStyle.btnBreatheSwitch,
                                    jumpKey: e.btnStyle.btnJumpKey,
                                    jumpValue: e.btnStyle.btnJumpValue,
                                    top: e.btnStyle.btnTop,
                                    left: e.btnStyle.btnLeft
                                },
                                negStyle: {
                                    isShow: !0,
                                    width: e.negStyle.negWidth,
                                    height: e.negStyle.negHeight,
                                    font: e.negStyle.negFont,
                                    color: e.negStyle.negTextColor,
                                    left: e.negStyle.negLeft,
                                    top: e.negStyle.negTop,
                                    radio: e.negStyle.negRadius,
                                    jumpKey: e.negStyle.negJumpKey,
                                    text: e.negStyle.negText,
                                    delay: e.negStyle.negDelay,
                                    icon: e.negIcon
                                },
                                materialStyle: {
                                    width: e.materialWidth,
                                    height: e.materialHeight,
                                    top: e.middleTop
                                },
                                maskStyle: {opacity: e.maskOpacity, image: e.popBg},
                                commonStyle: {scale: e.popScale, backLockTime: e.backLockTime},
                                menubarStyle: {
                                    isShow: !1,
                                    showType: 2,
                                    font: 40,
                                    text: "这里是滚动的menubar",
                                    image: "https://ims.readnos.com/image%2F2022-06-28%2F1656399103317_button.png",
                                    width: 750,
                                    height: 220,
                                    radio: 0
                                }
                            }, t
                        }(t), LOG("CUSTOM", "==>", 999, a);
                        break;
                    case"CUSTOM":
                        a = function (e) {
                            let t = {};
                            return t = {
                                popType: "custom",
                                popGroupName: e.popGroupName,
                                popName: e.popName,
                                popKey: e.popKey,
                                btnBackIsDisplay: !!e.btnBackIsDisplay,
                                closeStyle: {
                                    isShow: !0,
                                    width: 60,
                                    height: 60,
                                    distance: 50,
                                    position: 1,
                                    delay: e.closeDelay,
                                    opacity: 1,
                                    top: 0,
                                    image: e.closeIcon
                                },
                                crowdStyle: {
                                    isShow: !1,
                                    width: 750,
                                    height: 0,
                                    color: "#ffffff",
                                    text: "",
                                    distance: 0,
                                    position: 1,
                                    delay: 0,
                                    image: "",
                                    font: 0,
                                    between: 0
                                },
                                popStyle: {height: e.popHeight, width: 750, image: e.boxBg},
                                btnStyle: {
                                    width: e.btnStyle.btnWidth,
                                    height: e.btnStyle.btnHeight,
                                    radio: e.btnStyle.btnRadius,
                                    image: e.btnStyle.btnBgImage,
                                    icon: e.btnStyle.btnIcon && "0" != e.btnStyle.btnIcon ? e.btnStyle.btnIcon : "",
                                    iconSwitch: e.btnStyle.btnIcon && "0" != e.btnStyle.btnIcon ? 1 : 0,
                                    hotTop: 0,
                                    hotBottom: 0,
                                    hotAbout: 0,
                                    bgColor: e.btnStyle.btnBgColor,
                                    color: e.btnStyle.btnTextColor,
                                    font: e.btnStyle.btnFont,
                                    text: e.btnStyle.btnText,
                                    breath: e.btnStyle.btnDynamic,
                                    jumpKey: "ClosePop" == e.btnJumpKey ? 4 : 1,
                                    jumpValue: "ClosePop" !== e.btnJumpKey ? e.btnJumpKey.replace("toPage$$", "") : "",
                                    top: e.btnStyle.btnTop,
                                    left: (750 - e.btnStyle.btnWidth) / 2
                                },
                                negStyle: {
                                    isShow: e.btnStyle.btnCancelText.length > 0,
                                    width: e.btnStyle.btnCancelText.length * (e.btnStyle.btnCancelFont + 2),
                                    height: e.btnStyle.btnCancelFont + 2,
                                    font: e.btnStyle.btnCancelFont,
                                    color: e.btnStyle.btnCancelColor,
                                    left: (750 - e.btnStyle.btnCancelText.length * (e.btnStyle.btnCancelFont + 2)) / 2,
                                    top: e.btnStyle.btnTop + e.btnStyle.btnHeight + e.btnStyle.btnCancelMarginTop,
                                    radio: 0,
                                    jumpKey: 4,
                                    text: e.btnStyle.btnCancelText,
                                    delay: 0,
                                    icon: ""
                                },
                                materialStyle: {
                                    width: e.materialWidth,
                                    height: e.materialHeight,
                                    top: e.middleTop
                                },
                                maskStyle: {opacity: e.maskOpacity, image: e.popBg},
                                commonStyle: {scale: e.popScale, backLockTime: e.backLockTime},
                                menubarStyle: {
                                    isShow: !1,
                                    showType: 1,
                                    font: 40,
                                    text: "这里是滚动的menubar",
                                    image: "https://ims.readnos.com/image%2F2022-06-28%2F1656399103317_button.png",
                                    width: 750,
                                    height: 400,
                                    radio: 0
                                }
                            }, t
                        }(t), LOG("CUSTOM", "==>", 101010, a)
                }
                return a
            }

            const c = {
                validataTacticSdkConfigInfo: s, getPopupCodeByTacticsSdk: function (e, t) {
                    let a = e;
                    return new Promise(((e, o) => {
                        d(a).then((a => {
                            let i = TACTICS_SDK.getPopupCodeByPageInfo({
                                pageCode: t.pageCode,
                                pageOrigin: t.pageOrigin,
                                actionCode: t.actionCode,
                                popupCode: t.popupCode ? t.popupCode : ""
                            });
                            i ? e(i) : o(!1)
                        })).catch((e => {
                            o(!1)
                        }))
                    }))
                }, tacticsSdkInit: d, getPageBackRouterByTacticsSdk: function (e, t) {
                    let a = e;
                    return new Promise(((e, o) => {
                        d(a).then((a => {
                            let i = TACTICS_SDK.getPageBackRouter(t);
                            i ? e(i) : o(!1)
                        })).catch((e => {
                            o(!1)
                        }))
                    }))
                }, getCommonPopupByPopupPrefix: function (e, t) {
                    let a = e;
                    return new Promise(((e, o) => {
                        d(a).then((a => {
                            let i = TACTICS_SDK.getCommonPopupCodeByPrefix(t);
                            i ? e(i) : o(!1)
                        })).catch((e => {
                            o(!1)
                        }))
                    }))
                }, getPageCommonPopupCodeByPrefix: function (e, t) {
                    let a = e;
                    return LOG("获取公共弹窗完整 getCommonPopupByPopupPrefix===>", a.auditOnline), new Promise(((e, o) => {
                        if (1 == Number(a.auditOnline)) {
                            let a = "",
                                i = ["Box_fB4mv61T", "SignIn_PO0msjJq"].filter((e => e.split("_")[0] == t.popupPrefix));
                            i.length > 0 && (a = i[0]), LOG(`审核模式 TACTICE_SDK->前缀为${t.popupPrefix}的弹窗完整code为${i[0]}`), a ? e(a) : o(!1)
                        } else d(a).then((a => {
                            let i = TACTICS_SDK.getPageCommonPopupCodeByPrefix(t);
                            i ? e(i) : o(!1)
                        })).catch((e => {
                            o(!1)
                        }))
                    }))
                }, getPopupConfigByPopupCode: function (e, t = "", a = "") {
                    return new Promise((async (o, i) => {
                        if (r.popupConfigData && r.popupConfigData[`${e}`]) {
                            let a = e.split("_")[0].toLowerCase(), i = r.popupConfigData[`${e}`], n = -1, s = 0;
                            t ? (n = i.findIndex((e => e.popKey == t)), s = -1 !== n ? n : await TACTICS_SDK.gePopupShowTimes(e)) : s = await TACTICS_SDK.gePopupShowTimes(e);
                            let d = {};
                            switch (a) {
                                case"custom":
                                case"customback":
                                    d = i[s % i.length], d = Object.assign({}, {
                                        code: e,
                                        popup_name: d.popName
                                    }, d), d = p(-1 !== e.indexOf("Back") ? "CUSTOM_BACK" : "CUSTOM", d), o(JSON.parse(JSON.stringify(d)));
                                    break;
                                case"common":
                                case"encourage":
                                case"baidu":
                                case"middlenative":
                                case"middlevideo":
                                case"middlebaidu":
                                case"middletemplete":
                                case"encourage":
                                case"appad":
                                case"middleapp":
                                case"baiduscreeninsertion":
                                    d = i[s % i.length], d = Object.assign({}, {
                                        code: e,
                                        popup_name: d.popName,
                                        popType: "middlenative" == a ? "middle" : a
                                    }, d), LOG("==getAppPopupData444 ", d), o(JSON.parse(JSON.stringify(d)));
                                    break;
                                default:
                                    LOG("CUSTOM", `本地存储 传入的弹窗code无效,code=${e}`), console.error(`本地存储 tactics_sdk_utils.js 函数getPopupConfigByPopupCode 传入的弹窗code无效,code=${e}`), o()
                            }
                        } else {
                            let i = {}, n = 0, s = [], d = -1;
                            -1 !== e.indexOf("Custom") ? (s = await TACTICS_SDK[-1 !== e.indexOf("Back") ? "geBackPopupData" : "getCustomPopupData"](e), r.popupConfigData[`${e}`] = s, n = await TACTICS_SDK.gePopupShowTimes(e), i = s[n % s.length], i = p(-1 !== e.indexOf("Back") ? "CUSTOM_BACK" : "CUSTOM", i), i = Object.assign({}, {
                                code: e,
                                popup_name: i.popName
                            }, i), o(JSON.parse(JSON.stringify(i)))) : -1 !== e.indexOf("Common") ? (s = await TACTICS_SDK.getCommonNativePopupData(e, a), r.popupConfigData[`${e}`] = s, d = s.findIndex((e => e.popKey == t)), t ? (d = _popDataArr.findIndex((e => e.popKey == t)), n = -1 !== d ? d : await TACTICS_SDK.gePopupShowTimes(e)) : n = await TACTICS_SDK.gePopupShowTimes(e), i = s[n % s.length], i = Object.assign({}, {
                                code: e,
                                popup_name: i.popName,
                                popType: "common"
                            }, i), o(JSON.parse(JSON.stringify(i)))) : -1 !== e.indexOf("Encourage") ? (s = await TACTICS_SDK.getEncouragePopupData(e), r.popupConfigData[`${e}`] = s, d = s.findIndex((e => e.popKey == t)), t ? (d = _popDataArr.findIndex((e => e.popKey == t)), n = -1 !== d ? d : await TACTICS_SDK.gePopupShowTimes(e)) : n = await TACTICS_SDK.gePopupShowTimes(e), i = s[n % s.length], i = Object.assign({}, {
                                code: e,
                                popup_name: i.popName,
                                popType: "encourage"
                            }, i), o(JSON.parse(JSON.stringify(i)))) : "Baidu" == e.split("_")[0] ? (s = await TACTICS_SDK.getBaiduPopupData(e), r.popupConfigData[`${e}`] = s, d = s.findIndex((e => e.popKey == t)), t ? (d = _popDataArr.findIndex((e => e.popKey == t)), n = -1 !== d ? d : await TACTICS_SDK.gePopupShowTimes(e)) : n = await TACTICS_SDK.gePopupShowTimes(e), i = s[n % s.length], i = Object.assign({}, {
                                code: e,
                                popup_name: i.popName,
                                popType: "baidu"
                            }, i), o(JSON.parse(JSON.stringify(i)))) : -1 !== e.indexOf("AppAd") ? (s = await TACTICS_SDK.getAppPopupData(e), LOG("==getAppPopupData111 ", s), r.popupConfigData[`${e}`] = s, t ? (d = _popDataArr.findIndex((e => e.popKey == t)), n = -1 !== d ? d : await TACTICS_SDK.gePopupShowTimes(e)) : n = await TACTICS_SDK.gePopupShowTimes(e), i = s[n % s.length], i = Object.assign({}, {
                                code: e,
                                popup_name: i.popName,
                                popType: "appad"
                            }, i), LOG("==getAppPopupData 333", JSON.parse(JSON.stringify(i))), o(JSON.parse(JSON.stringify(i)))) : -1 !== e.indexOf("MiddleApp") ? (s = await TACTICS_SDK.getAppPopupData(e), LOG("==getAppPopupData222 ", s), r.popupConfigData[`${e}`] = s, t ? (d = _popDataArr.findIndex((e => e.popKey == t)), n = -1 !== d ? d : await TACTICS_SDK.gePopupShowTimes(e)) : n = await TACTICS_SDK.gePopupShowTimes(e), i = s[n % s.length], i = Object.assign({}, {
                                code: e,
                                popup_name: i.popName,
                                popType: "appad"
                            }, i), o(JSON.parse(JSON.stringify(i)))) : -1 !== e.indexOf("MiddleNative") ? (s = await TACTICS_SDK.getMiddlePopupData(e), r.popupConfigData[`${e}`] = s, d = s.findIndex((e => e.popKey == t)), t ? (d = _popDataArr.findIndex((e => e.popKey == t)), n = -1 !== d ? d : await TACTICS_SDK.gePopupShowTimes(e)) : n = await TACTICS_SDK.gePopupShowTimes(e), i = s[n % s.length], i = Object.assign({}, {
                                code: e,
                                popup_name: i.popName,
                                popType: "middle"
                            }, i), o(JSON.parse(JSON.stringify(i)))) : -1 !== e.indexOf("MiddleVideo") ? (s = await TACTICS_SDK.getMiddleVideoPopupData(e), r.popupConfigData[`${e}`] = s, d = s.findIndex((e => e.popKey == t)), t ? (d = _popDataArr.findIndex((e => e.popKey == t)), n = -1 !== d ? d : await TACTICS_SDK.gePopupShowTimes(e)) : n = await TACTICS_SDK.gePopupShowTimes(e), i = s[n % s.length], i = Object.assign({}, {
                                code: e,
                                popup_name: i.popName,
                                popType: "middlevideo"
                            }, i), o(JSON.parse(JSON.stringify(i)))) : -1 !== e.indexOf("MiddleBaidu") ? (s = await TACTICS_SDK.getMiddleBaiduPopupData(e), r.popupConfigData[`${e}`] = s, d = s.findIndex((e => e.popKey == t)), t ? (d = _popDataArr.findIndex((e => e.popKey == t)), n = -1 !== d ? d : await TACTICS_SDK.gePopupShowTimes(e)) : n = await TACTICS_SDK.gePopupShowTimes(e), i = s[n % s.length], i = Object.assign({}, {
                                code: e,
                                popup_name: i.popName,
                                popType: "middlebaidu"
                            }, i), o(JSON.parse(JSON.stringify(i)))) : -1 !== e.indexOf("MiddleTemplete") ? (s = await TACTICS_SDK.getMiddleTempletePopupData(e), r.popupConfigData[`${e}`] = s, d = s.findIndex((e => e.popKey == t)), t ? (d = _popDataArr.findIndex((e => e.popKey == t)), n = -1 !== d ? d : await TACTICS_SDK.gePopupShowTimes(e)) : n = await TACTICS_SDK.gePopupShowTimes(e), i = s[n % s.length], i = Object.assign({}, {
                                code: e,
                                popup_name: i.popName,
                                popType: "middletemplete"
                            }, i), o(JSON.parse(JSON.stringify(i)))) : -1 !== e.indexOf("BaiduScreenInsertion") ? (s = await TACTICS_SDK.getBaiduScreenInsertionPopupData(e), r.popupConfigData[`${e}`] = s, d = s.findIndex((e => e.popKey == t)), t ? (d = _popDataArr.findIndex((e => e.popKey == t)), n = -1 !== d ? d : await TACTICS_SDK.gePopupShowTimes(e)) : n = await TACTICS_SDK.gePopupShowTimes(e), i = s[n % s.length], i = Object.assign({}, {
                                code: e,
                                popup_name: i.popName,
                                popType: "baiduscreeninsertion"
                            }, i), o(JSON.parse(JSON.stringify(i)))) : (LOG("CUSTOM", `传入的弹窗code无效,code=${e}`), console.error(`tactics_sdk_utils.js 函数getPopupConfigByPopupCode 传入的弹窗code无效,code=${e}`), o())
                        }
                    }))
                }, getActionPopupCode: function (e, t, a, o) {
                    return new Promise((async (i, n) => {
                        try {
                            let n = await TACTICS_SDK.getActionPopupCode(e, t, a, o);
                            LOG(" 策略sdk ：maxt actionPopupCode", n), i({code: n, adStatus: t})
                        } catch (e) {
                            n(e)
                        }
                    }))
                }, getOriginalPopCode: function (e, t, a, o) {
                    return new Promise((async (i, n) => {
                        try {
                            let n = await TACTICS_SDK.getOriginalPopCode(e, t, a, o);
                            LOG(" 策略sdk ：maxt originalPopCode", n), i(n)
                        } catch (e) {
                            n(e)
                        }
                    }))
                }, initBoostGroupConfig: function (e) {
                    let t = {
                        maxAdCount: 2,
                        isBoostType: !1,
                        isShowBoostComp: !0,
                        isAuditUser: !1,
                        loopTimes: 3e4
                    }, a = Number(TACTICS_SDK.getGlobalData("configInfo").config.boost_group_ad_count.val);
                    t.isAuditUser = 1 == a;
                    let o = Number(TACTICS_SDK.getGlobalData("ad_pool").distance);
                    t.loopTimes = o || 3e4;
                    try {
                        let a = TACTICS_SDK.getGlobalData("ad_pool").scene_list;
                        LOG("CUSTOM", "initBoostGroupConfig==>_scene_list", a, e);
                        let o = a && a.length > 0 ? a.filter((t => t.page_code == e)) : [];
                        if (LOG("CUSTOM", "initBoostGroupConfig==>_filter_scene", o, e), o.length > 0) {
                            let e = 1 == Number(TACTICS_SDK.getGlobalData("ad_pool").status), a = o[0].is_open,
                                i = o[0].is_polling, n = o[0].upper_num;
                            t.maxAdCount = Number(n), t.isBoostType = e && 1 == a && 1 == i, t.isShowBoostComp = 1 == a
                        } else t.maxAdCount = 2, t.isBoostType = !1, t.isShowBoostComp = !0, t.loopTimes = 3e4
                    } catch (e) {
                        LOG("CUSTOM", "initBoostGroupConfig==>error", e), t.maxAdCount = 2, t.isBoostType = !1, t.isShowBoostComp = !0, t.loopTimes = 3e4
                    }
                    return t
                }, getAppAdvData: function (e) {
                    return new Promise((async (t, a) => {
                        try {
                            LOG("+===getAppAdvData2", e), TACTICS_SDK.showAppAdv(e).then((e => {
                                LOG("+===showAppAdv", e), t(e)
                            })).catch((e => {
                                LOG("+===showAppAdv catch err", e), a(e)
                            }))
                        } catch (e) {
                            LOG("+===showAppAdv", res)
                        }
                    }))
                }, clickAppAdv: function (e, t) {
                    return new Promise(((a, o) => {
                        try {
                            LOG("+===clickAppAdv", e, t), TACTICS_SDK.clickAppAdv(e, t).then((e => {
                                LOG("+===clickAppAdv", e), a(e)
                            })).catch((e => {
                                LOG("+===clickAppAdv catch err", e), o(e)
                            }))
                        } catch (e) {
                            LOG("+===clickAppAdv", e)
                        }
                    }))
                }, tactics_sdk_data: r
            };
            (a.g.__proto__ || a.g).TACTICS_SDK_UTILS = c, t.default = c
        }, 4991
    :
        (e, t, a) => {
            "use strict";
            var o = a(7610).default;

            function i() {
                e.exports = i = function () {
                    return t
                }, e.exports.__esModule = !0, e.exports.default = e.exports;
                var t = {}, a = Object.prototype, n = a.hasOwnProperty,
                    r = Object.defineProperty || function (e, t, a) {
                        e[t] = a.value
                    }, s = "function" == typeof Symbol ? Symbol : {}, d = s.iterator || "@@iterator",
                    p = s.asyncIterator || "@@asyncIterator", c = s.toStringTag || "@@toStringTag";

                function u(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }

                try {
                    u({}, "")
                } catch (e) {
                    u = function (e, t, a) {
                        return e[t] = a
                    }
                }

                function l(e, t, a, o) {
                    var i = t && t.prototype instanceof g ? t : g, n = Object.create(i.prototype),
                        s = new w(o || []);
                    return r(n, "_invoke", {value: T(e, a, s)}), n
                }

                function _(e, t, a) {
                    try {
                        return {type: "normal", arg: e.call(t, a)}
                    } catch (e) {
                        return {type: "throw", arg: e}
                    }
                }

                t.wrap = l;
                var f = {};

                function g() {
                }

                function m() {
                }

                function h() {
                }

                var y = {};
                u(y, d, (function () {
                    return this
                }));
                var A = Object.getPrototypeOf, C = A && A(A(P([])));
                C && C !== a && n.call(C, d) && (y = C);
                var v = h.prototype = g.prototype = Object.create(y);

                function O(e) {
                    ["next", "throw", "return"].forEach((function (t) {
                        u(e, t, (function (e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function S(e, t) {
                    function a(i, r, s, d) {
                        var p = _(e[i], e, r);
                        if ("throw" !== p.type) {
                            var c = p.arg, u = c.value;
                            return u && "object" == o(u) && n.call(u, "__await") ? t.resolve(u.__await).then((function (e) {
                                a("next", e, s, d)
                            }), (function (e) {
                                a("throw", e, s, d)
                            })) : t.resolve(u).then((function (e) {
                                c.value = e, s(c)
                            }), (function (e) {
                                return a("throw", e, s, d)
                            }))
                        }
                        d(p.arg)
                    }

                    var i;
                    r(this, "_invoke", {
                        value: function (e, o) {
                            function n() {
                                return new t((function (t, i) {
                                    a(e, o, t, i)
                                }))
                            }

                            return i = i ? i.then(n, n) : n()
                        }
                    })
                }

                function T(e, t, a) {
                    var o = "suspendedStart";
                    return function (i, n) {
                        if ("executing" === o) throw new Error("Generator is already running");
                        if ("completed" === o) {
                            if ("throw" === i) throw n;
                            return {value: void 0, done: !0}
                        }
                        for (a.method = i, a.arg = n; ;) {
                            var r = a.delegate;
                            if (r) {
                                var s = b(r, a);
                                if (s) {
                                    if (s === f) continue;
                                    return s
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg; else if ("throw" === a.method) {
                                if ("suspendedStart" === o) throw o = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            o = "executing";
                            var d = _(e, t, a);
                            if ("normal" === d.type) {
                                if (o = a.done ? "completed" : "suspendedYield", d.arg === f) continue;
                                return {value: d.arg, done: a.done}
                            }
                            "throw" === d.type && (o = "completed", a.method = "throw", a.arg = d.arg)
                        }
                    }
                }

                function b(e, t) {
                    var a = t.method, o = e.iterator[a];
                    if (void 0 === o) return t.delegate = null, "throw" === a && e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method) || "return" !== a && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + a + "' method")), f;
                    var i = _(o, e.iterator, t.arg);
                    if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, f;
                    var n = i.arg;
                    return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
                }

                function D(e) {
                    var t = {tryLoc: e[0]};
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function I(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function w(e) {
                    this.tryEntries = [{tryLoc: "root"}], e.forEach(D, this), this.reset(!0)
                }

                function P(e) {
                    if (e) {
                        var t = e[d];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1, o = function t() {
                                for (; ++a < e.length;) if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                return t.value = void 0, t.done = !0, t
                            };
                            return o.next = o
                        }
                    }
                    return {next: N}
                }

                function N() {
                    return {value: void 0, done: !0}
                }

                return m.prototype = h, r(v, "constructor", {
                    value: h,
                    configurable: !0
                }), r(h, "constructor", {
                    value: m,
                    configurable: !0
                }), m.displayName = u(h, c, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
                }, t.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, u(e, c, "GeneratorFunction")), e.prototype = Object.create(v), e
                }, t.awrap = function (e) {
                    return {__await: e}
                }, O(S.prototype), u(S.prototype, p, (function () {
                    return this
                })), t.AsyncIterator = S, t.async = function (e, a, o, i, n) {
                    void 0 === n && (n = Promise);
                    var r = new S(l(e, a, o, i), n);
                    return t.isGeneratorFunction(a) ? r : r.next().then((function (e) {
                        return e.done ? e.value : r.next()
                    }))
                }, O(v), u(v, c, "Generator"), u(v, d, (function () {
                    return this
                })), u(v, "toString", (function () {
                    return "[object Generator]"
                })), t.keys = function (e) {
                    var t = Object(e), a = [];
                    for (var o in t) a.push(o);
                    return a.reverse(), function e() {
                        for (; a.length;) {
                            var o = a.pop();
                            if (o in t) return e.value = o, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
                }, t.values = P, w.prototype = {
                    constructor: w, reset: function (e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(I), !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    }, stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    }, dispatchException: function (e) {
                        if (this.done) throw e;
                        var t = this;

                        function a(a, o) {
                            return r.type = "throw", r.arg = e, t.next = a, o && (t.method = "next", t.arg = void 0), !!o
                        }

                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o], r = i.completion;
                            if ("root" === i.tryLoc) return a("end");
                            if (i.tryLoc <= this.prev) {
                                var s = n.call(i, "catchLoc"), d = n.call(i, "finallyLoc");
                                if (s && d) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                } else {
                                    if (!d) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                }
                            }
                        }
                    }, abrupt: function (e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var r = i ? i.completion : {};
                        return r.type = e, r.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(r)
                    }, complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                    }, finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), I(a), f
                        }
                    }, catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var o = a.completion;
                                if ("throw" === o.type) {
                                    var i = o.arg;
                                    I(a)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    }, delegateYield: function (e, t, a) {
                        return this.delegate = {
                            iterator: P(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports
        }, 7610
    :
        e => {
            "use strict";

            function t(a) {
                return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, e.exports.__esModule = !0, e.exports.default = e.exports, t(a)
            }

            e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
        }, 7701
    :
        (e, t, a) => {
            "use strict";
            var o = a(4991)();
            e.exports = o;
            try {
                regeneratorRuntime = o
            } catch (e) {
                "object" == typeof globalThis ? globalThis.regeneratorRuntime = o : Function("r", "regeneratorRuntime = r")(o)
            }
        }, 3875
    :
        e => {
            "use strict";
            e.exports = JSON.parse('{"name":"union-quick-app-ad","version":"1.0.36","description":"百度联盟快应用广告sdk","main":"app.js","files":["components/*","app.js"],"keywords":["快应用","广告"],"author":"cm-fe","license":"ISC","dependencies":{},"devDependencies":{}}')
        }, 9084
    :
        e => {
            "use strict";
            e.exports = JSON.parse('{"PAGE_ENTRY":{"type":"common","name":"页面进入"},"POPUP_CLOSE":{"type":"common","name":"弹窗关闭"},"PAGE_BACK":{"type":"common","name":"页面返回"},"READ_FIRST_NORMAL":{"type":"custom","name":"章首默认"},"READ_FIRST_CUSTOM":{"type":"custom","name":"章首自定义"},"READ_AD_TEXT_CUSTOM":{"type":"custom","name":"页内自定义"},"READ_AD_TEXT_NORMAL":{"type":"custom","name":"页内默认"},"READ_MIDDLE_CUSTOM":{"type":"custom","name":"中插自定义"},"READ_MIDDLE_NORMAL":{"type":"custom","name":"中插默认"},"READ_PAGE_CLICK":{"type":"custom","name":"翻页解锁"},"AWARD_CLICK":{"type":"custom","name":"任务奖励点击"},"SIGN_IN":{"type":"custom","name":"签到弹窗"},"BOX_CLICK":{"type":"custom","name":"宝箱点击"},"READ_ADD_DESKTOP":{"type":"custom","name":"加桌"},"READ_ADD_DESKTOP_TIMER":{"type":"custom","name":"计时加桌"},"READ_PAGE_SWIPE_COIN":{"type":"custom","name":"翻页金币"},"READ_PAGE_SWIPE_RED_BAG":{"type":"custom","name":"翻页红包"},"READ_TIMER_COIN":{"type":"custom","name":"阅读金币"},"READ_MIDDLE_SENCES":{"type":"custom","name":"中插场景"},"READ_CHAPTER_END":{"type":"custom","name":"章尾场景"},"SCREEN_TOUCH":{"type":"common","name":"开屏场景"},"SECOND_SCREEN_TOUCH":{"type":"common","name":"双开屏场景"},"BUBBLE_CLICK":{"type":"custom","name":"点击气泡"},"OPEN_RED":{"type":"custom","name":"拆红包"},"POWER_SAVING":{"type":"custom","name":"省电"},"BRIGHTNESS":{"type":"custom","name":"亮度"},"VOLUME":{"type":"custom","name":"声音"},"VIDEO_PAUSE":{"type":"common","name":"短剧暂停"},"VIDEO_UNLOCK":{"type":"common","name":"切换剧集"},"READ_MIDDLE_TURN":{"type":"common","name":"阅读翻页"},"TIME_OUT":{"type":"common","name":"定时弹窗"},"DIVINATION_POP":{"type":"common","name":"抽签活动弹窗"},"CANNON_POP":{"type":"common","name":"炮击活动弹窗"},"LOTTERY_COIN_POP":{"type":"common","name":"抽好礼弹窗"},"ROPE_USEUP":{"type":"common","name":"套圈次数用完"},"ROPE_BAG":{"type":"common","name":"套红包"},"ROPE_BOX":{"type":"common","name":"套宝箱"},"ROPE_PHONE":{"type":"common","name":"套手机"},"OPEN_FERTILIZER":{"type":"common","name":"领肥料"},"OPEN_GOLD":{"type":"common","name":"领金币"},"OPEN_WATAR":{"type":"common","name":"领水滴"},"ANSWER_PROMPT":{"type":"common","name":"答案提示"},"WRONG_ANSWER":{"type":"common","name":"回答错误"},"CORRECT_ANSWER":{"type":"common","name":"回答正确"},"OPEN_RED_GOLD":{"type":"common","name":"拆红包-金币"},"DZ_DRAW_GOLD":{"type":"common","name":"大转盘-抽奖领取金币"},"DZ_INCREASED_LUCK":{"type":"common","name":"大转盘-幸运增加"},"DZ_PRIZE_DOUBLE":{"type":"common","name":"大转盘-奖金翻倍"},"DZ_ADD_ONE_TIME":{"type":"common","name":"大转盘-再加1次"},"PAGE_CLICK":{"type":"common","name":"页面点击"},"CHANGE_PAGE":{"type":"common","name":"翻页弹窗"},"DOWNLOAD_IMG":{"type":"common","name":"下载图片"},"SCREEN_CLICK":{"type":"common","name":"屏幕点击"},"ACCOUNTING":{"type":"common","name":"确认记账"},"CHECK_AMOUNT":{"type":"common","name":"支出选项卡"},"CHECK_INCOME":{"type":"common","name":"收入选项卡"}}')
        }, 8242
    :
        e => {
            "use strict";
            e.exports = JSON.parse('{"/pagesC/Read":true,"/pagesA/Welfare":true,"/pagesA/WelfareNew":true,"/pagesC/Info":true}')
        }, 8903
    :
        e => {
            "use strict";
            e.exports = JSON.parse('{"READ_CLASSIFY":{"path":"/pagesA/Main","pageCode":"READ_CLASSIFY","pageName":"分类页","param":{"selectIndex":3}},"READ_WELFARETT":{"path":"/pagesA/welfareTT","pageCode":"READ_WELFARETT","pageName":"头条福利页","param":{}},"READ_MINE":{"path":"/pagesA/Main","pageCode":"READ_MINE","pageName":"我的","param":{"selectIndex":4}},"READ_BOOKINFO":{"path":"/pagesC/Info","pageCode":"READ_BOOKINFO","pageName":"小说详情页","param":{}},"READ_READINFO":{"path":"/pagesC/Read","pageCode":"READ_READINFO","pageName":"阅读页","param":{}},"READ_WELFARE":{"path":"/pagesA/WelfareNew","pageCode":"READ_WELFARE","pageName":"福利页","param":{}},"READ_INCOME":{"path":"/pagesA/MyIncome","pageCode":"READ_INCOME","pageName":"收益页","param":{}},"READ_CASHOUT":{"path":"/pagesA/CashOut","pageCode":"READ_CASHOUT","pageName":"提现页","param":{}},"READ_RECORD":{"path":"/pagesA/CashRecrod","pageCode":"READ_RECORD","pageName":"记录页","param":{}},"READ_MAIN":{"path":"/pagesA/Main","pageCode":"READ_MAIN","pageName":"书城页","param":{"selectIndex":1}},"READ_SHELF":{"path":"/pagesA/Main","pageCode":"READ_SHELF","pageName":"书架页","param":{"selectIndex":0}}}')
        }, 8572
    :
        e => {
            "use strict";
            e.exports = JSON.parse('{"config":{"is_reviewer":{"op":"is","val":"2"},"boost_group_ad_count":{"op":"is","val":"2"},"ad_btn_text_type":{"op":"is","val":"1"},"is_used_ad_button":{"op":"is","val":"1"},"is_read_first_adscroll_equal_adclick":{"op":"is","val":"2"},"ad_first_close_icon_show_type":{"op":"is","val":"2"},"ad_read_first_button_animation_type":{"op":"is","val":"2"},"ad_read_middle_button_animation_type":{"op":"is","val":"2"},"ad_read_first_adscroll_times":{"op":"is","val":"0"},"read_view_back_icon_show_type":{"op":"is","val":"2"},"ad_dialog_bottom":{"op":"is","val":""},"first_ad_bottom":{"op":"is","val":""},"back_app_button":{"op":"is","val":"2"},"page_read_trigger_unlock_pop":{"op":"is","val":""},"read_enable_tags":{"op":"is","val":""},"read_custom_ad_code":{"op":"is","val":""},"read_tags_adscroll_times":{"op":"is","val":""},"ad_read_middle_amount":{"op":"is","val":""},"exceed_ad_read_middle_amount":{"op":"is","val":""},"ad_read_middle_custom_page":{"op":"is","val":""},"style_ad_middle_custom_a":{"op":"is","val":""},"style_ad_middle_custom_b":{"op":"is","val":""},"is_show_desk_float":{"op":"is","val":"1"},"is_read_ad_custom_config":{"op":"is","val":"0"},"is_first_ad_custom_config":{"op":"is","val":"0"},"custom_ad_material_category_code":{"op":"is","val":""},"is_vivo_back_button":{"op":"is","val":"2"},"is_open_welfare_menuBar":{"op":"is","val":"1"},"main_list_ad":{"op":"is","val":"1"},"info_list_ad":{"op":"is","val":"1"},"welfare_list_ad":{"op":"is","val":"1"},"read_list_ad":{"op":"is","val":"1"},"holdup_ad_middle_custom_a":{"op":"is","val":""},"holdup_ad_middle_custom_b":{"op":"is","val":""},"middle_ad_hold_up_style":{"op":"is","val":"1"},"middle_ad_lock_times":{"op":"is","val":"0"},"middle_lock_toast":{"op":"is","val":"查看广告阅读更多精彩内容"},"ads_show_interval_min":{"op":"is","val":"2000"},"vivo_queue_request":{"op":"is","val":"1"},"banner_afresh_request":{"op":"is","val":"3"},"is_hidden_banner":{"op":"is","val":"0"},"is_open_advert":{"op":"is","val":"1"},"read_bgpic":{"op":"is","val":"1"},"read_font":{"op":"is","val":"54"},"is_open_banner":{"op":"is","val":"1"},"is_open_homeScreen_advert":{"op":"is","val":"0"},"is_exempt_ads":{"op":"is","val":"0"},"cross_advert":{"op":"is","val":"0"},"is_banner_ad":{"op":"is","val":"0"},"is_bqt_can_show_dialog":{"op":"is","val":"0"},"native_ad_click_interval":{"op":"is","val":"0"},"text_ad_trigger_timing":{"op":"is","val":"1"},"lock_vivo_back_times":{"op":"is","val":"0"},"is_show_last_read_banner":{"op":"is","val":"0"},"is_chapter_end_recommend":{"op":"is","val":"0"},"add_desktop_pages":{"op":"is","val":""},"is_used_icon_ad":{"op":"is","val":"0"},"is_show_notification":{"op":"is","val":"0"},"notification_title":{"op":"is","val":""},"notification_text":{"op":"is","val":""},"notification_url":{"op":"is","val":""},"show_add_desktop_second":{"op":"is","val":"0"},"page_swipe_red_bag_nums":{"op":"is","val":"0"},"page_swipe_coin_nums":{"op":"is","val":"0"},"custom_content_code":{"op":"is","val":""},"ad_chapter_end_switch":{"op":"is","val":"0"},"chapter_end_red_bag":{"op":"is","val":"0"},"chapter_end_reward":{"op":"is","val":"0"},"chapter_end_image_width":{"op":"is","val":"0"},"chapter_end_free_ad_time":{"op":"is","val":"0"},"chapter_end_image_height":{"op":"is","val":"0"},"chapter_end_red_bag_img":{"op":"is","val":""},"chapter_end_reward_coin":{"op":"is","val":"100"}},"appCode":"qudianyuedu","configName":"默认配置数据"}')
        }, 2594
    :
        e => {
            "use strict";
            e.exports = JSON.parse('{"/pagesC/Start":{"pathUrl":"启动页","pageCode":"DESK_ROOT"},"/pagesB/Login":{"pathUrl":"登录页","pageCode":"READ_COMMON"},"/pagesB/Customer-Service":{"pathUrl":"联系客服页","pageCode":"READ_COMMON"},"/pagesB/Privacy":{"pathUrl":"用户隐私协议","pageCode":"READ_COMMON"},"/pagesA/Main":{"pathUrl":"首页","pageCode":"READ_MAIN","pathUrl1":"闯关首页","pageCode1":"READ_KNOWLEDGE","pathUrl2":"我的页","pageCode2":"READ_MINE"},"/pagesB/Activity":{"pathUrl":"分享好友页","pageCode":"READ_COMMON"},"/pagesA/WelfareNew":{"pathUrl":"福利页","pageCode":"READ_WELFARE"},"/pagesA/Welfare":{"pathUrl":"福利页","pageCode":"READ_WELFARE"},"/pagesA/MyIncome":{"pathUrl":"收益页","pageCode":"READ_INCOME"},"/pagesA/CashOut":{"pathUrl":"提现页","pageCode":"READ_CASHOUT"},"/pagesA/CashRecord":{"pathUrl":"记录页","pageCode":"READ_CASHRECORD"},"/pagesA/AstroDetail":{"pathUrl":"星座详情","pageCode":"READ_ASTRODETAIL"},"/pagesA/CpDetail":{"pathUrl":"星座配对","pageCode":"READ_CPDETAIL"},"/pagesA/AssessPage":{"pathUrl":"测评页面","pageCode":"READ_ASSESSPAGE"},"/pagesA/AssessPageNew":{"pathUrl":"闯关详情页","pageCode":"READ_ASSESSPAGENEW"},"/pagesA/Result":{"pathUrl":"测评分析","pageCode":"READ_RESULT"},"/pagesA/ResultNew":{"pathUrl":"闯关成绩页","pageCode":"READ_RESULTNEW"},"/pagesA/BackgroundPage":{"pathUrl":"背景页","pageCode":"BACKGROUND_PAGE"},"/pagesA/VideoBackgroundPage":{"pathUrl":"视频背景页","pageCode":"VIDEO_BACKGROUND_PAGE"}}')
        }, 7711
    :
        e => {
            "use strict";
            e.exports = JSON.parse('{"configInfo":{"config":{},"appCode":"newshiyueread","configName":"默认本地配置数据"},"routesInfo":{"appCode":"newshiyueread","routerName":"本地默认路由","routers":[{"router":"/pagesA/WelfareNew","page_code":"READ_WELFARE","page_name":"福利页"},{"router":"/pagesA/Main?selectIndex=0","page_code":"READ_MAIN","page_name":"书城页"}]},"tacticsInfo":{"pageTactics":[{"page_code":"READ_READINFO","page_origin":"CHANNEL_ROOT","popup_config":{"PAGE_BACK":[{"popup_code":"Back_r3ejNLVa"}]}},{"page_code":"READ_WELFARE","page_origin":"READ_READINFO","popup_config":{"PAGE_BACK":[{"popup_code":"Back_r3ejNLVa"}],"PAGE_ENTRY":[{"popup_code":"Box_fN1YDUS9"}],"POPUP_CLOSE":[{"popup_code":"Box_fN1YDUS9","next_popup_code":"SignIn_PO0msjJq"}]}},{"page_code":"READ_MAIN","page_origin":"READ_WELFARE","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_READINFO","page_origin":"READ_SHELF","popup_config":{"PAGE_BACK":[{"popup_code":"Back_r3ejNLVa"}]}},{"page_code":"READ_READINFO","page_origin":"READ_MAIN","popup_config":{"PAGE_BACK":[{"popup_code":"Back_r3ejNLVa"}]}},{"page_code":"READ_READINFO","page_origin":"READ_BOOKINFO","popup_config":{"PAGE_BACK":[{"popup_code":"Back_r3ejNLVa"}]}},{"page_code":"READ_WELFARE","page_origin":"READ_SHELF","popup_config":{"PAGE_BACK":[{"popup_code":"Back_r3ejNLVa"}],"PAGE_ENTRY":[{"popup_code":"Box_fN1YDUS9"}]}},{"page_code":"READ_WELFARE","page_origin":"READ_MAIN","popup_config":{"PAGE_BACK":[{"popup_code":"Back_r3ejNLVa"}],"PAGE_ENTRY":[{"popup_code":"SignIn_PO0msjJq"}]}},{"page_code":"READ_MAIN","page_origin":"READ_SHELF","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_MAIN","page_origin":"READ_BOOKINFO","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_MAIN","page_origin":"READ_MINE","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_MAIN","page_origin":"READ_COMMON","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_WELFARE","page_origin":"READ_MINE","popup_config":{"PAGE_BACK":[{"popup_code":"Back_r3ejNLVa"}],"PAGE_ENTRY":[{"popup_code":"SignIn_PO0msjJq"}]}},{"page_code":"READ_WELFARE","page_origin":"READ_COMMON","popup_config":{"PAGE_BACK":[{"popup_code":"Back_r3ejNLVa"}],"PAGE_ENTRY":[{"popup_code":"SignIn_PO0msjJq"}]}},{"page_code":"READ_SHELF","page_origin":"READ_WELFARE","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_SHELF","page_origin":"READ_MAIN","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_SHELF","page_origin":"READ_MINE","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_SHELF","page_origin":"READ_COMMON","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_MINE","page_origin":"READ_WELFARE","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_MINE","page_origin":"READ_MAIN","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_MINE","page_origin":"READ_SHELF","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_MINE","page_origin":"READ_COMMON","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_SHELF","page_origin":"READ_BOOKINFO","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_CLASSIFY","page_origin":"READ_MAIN","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_CLASSIFY","page_origin":"READ_SHELF","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_CLASSIFY","page_origin":"READ_WELFARE","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_CLASSIFY","page_origin":"READ_MINE","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}},{"page_code":"READ_CLASSIFY","page_origin":"READ_COMMON","popup_config":{"PAGE_BACK":[{"popup_code":"Exit_tYQm7WXc"}]}}],"appCode":"newshiyueread","tacticsName":"本地默认配置","popups":"ExtraAward_6gU3D4rv,Award_z7JQ2xE3,GetWay_bcZiJE6s"},"popupInfo":{"READ_WELFARE":"Box_3LS9vea1,Box_eEg5NB2r,Box_bAg3TVLJ,Box_3BnJmAF6,Back_GZtfYwuq,Back_PdLevYFG,Back_tE9DOxus,Back_v6W3SV9E,SignIn_PO0msjJq,Back_FM39QS4m,Box_fB4mv61T,Box_fN1YDUS9,Back_r3ejNLVa","READ_MAIN":"Exit_l2HuT6oO,Exit_mwCitjG9,Exit_YPJVSrj5,Exit_hZRPJ871,Exit_tYQm7WXc","READ_MINE":"Exit_l2HuT6oO,Exit_mwCitjG9,Exit_YPJVSrj5,Exit_hZRPJ871,Exit_tYQm7WXc","READ_SHELF":"Exit_l2HuT6oO,Exit_mwCitjG9,Exit_YPJVSrj5,Exit_hZRPJ871,Exit_tYQm7WXc","READ_CLASSIFY":"Exit_l2HuT6oO,Exit_mwCitjG9,Exit_YPJVSrj5,Exit_hZRPJ871,Exit_tYQm7WXc","READ_READINFO":"Back_uKxhNLc5,Back_1bJs6pat,Back_IF7aLVqh,Back_ziJyWrBp,Back_r3ejNLVa"}}')
        }, 7162
    :
        e => {
            "use strict";
            e.exports = JSON.parse('{"dev":"BBI3uulzJ8an5JlP","pro":"Y7VAhhBwe5r_8_YC"}')
        }, 6325
    :
        e => {
            "use strict";
            e.exports = JSON.parse('{"package":"com.ddzs.app","name":"多点知识","versionName":"1.0.10","versionCode":100010,"minPlatformVersion":1080,"icon":"/assets/icon/logo.png","features":[{"name":"system.animate"},{"name":"system.request"},{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.fetch"},{"name":"system.network"},{"name":"service.account"},{"name":"system.storage"},{"name":"system.device"},{"name":"system.brightness"},{"name":"system.app"},{"name":"service.push"},{"name":"system.notification"},{"name":"system.wifi"},{"name":"system.file"},{"name":"service.alipay"},{"name":"service.ad"},{"name":"system.calendar"},{"name":"system.package"},{"name":"system.webview"},{"name":"service.wxpay","params":{"package":"com.shiyueread.home","sign":"MIIGQDCCBCigAwIBAgIJAJa410xto5buMA0GCSqGSIb3DQEBCwUAMIG0MQswCQYDVQQGEwJaSDEQMA4GA1UECAwHSGFpIE5hbjEQMA4GA1UEBwwHSGFpIGtvdTEyMDAGA1UECgwpSGFpbmFuIGd1YW5vdSBOZXR3b3JrIFRlY2hub2xvZ3kgQ28uLCBMdGQxEzARBgNVBAsMCk9wZXJhdGlvbnMxFDASBgNVBAMMC3N5cmVhZHMuY29tMSIwIAYJKoZIhvcNAQkBFhNkZWZhdWx0QGRlZmF1bHQuY29tMB4XDTIyMDMxMDA2NTE1NFoXDTMyMDMwNzA2NTE1NFowgbQxCzAJBgNVBAYTAlpIMRAwDgYDVQQIDAdIYWkgTmFuMRAwDgYDVQQHDAdIYWkga291MTIwMAYDVQQKDClIYWluYW4gZ3Vhbm91IE5ldHdvcmsgVGVjaG5vbG9neSBDby4sIEx0ZDETMBEGA1UECwwKT3BlcmF0aW9uczEUMBIGA1UEAwwLc3lyZWFkcy5jb20xIjAgBgkqhkiG9w0BCQEWE2RlZmF1bHRAZGVmYXVsdC5jb20wggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQC01asXcjKm11x0Ai72IdI+4sCVbDGEHbPcIHJDhtw383fuFZnTdEoQnK1+3OUYmHV9YxT9OBwnfuL/rJHOOsyWjZoe9WUkg4zxQIG96Nr1ioAGqjBKfrDeRlEKkxz82jmijOOYRlekLh2JzpLN65oE70lv8pcPRuzXld741igUvd3blG6Ys6vxHM9PyuQW972osgcxH50bOmOR77G7GgdOFYLsEruL4P3m7/9FuTLF3HqHK5NAF3fOs3pp6sPrmFIGnpdsUSjw++O+TT6lsvC2OHhbpST6pHTsMHdrPsavrKkNe80RmmDI1rlFGfvdWkq8gXHEQSO0ueTDBLfe1UabcCAIvoic8rXC31tAKn72LOSbHzl2726+Ogi3hFAY/d1GAQTL5BNRuaAnL5TXUr9wgTD5UJukiroU9fqnlAlW7g2Yg3XO3eC7mO/nfvzyGyTq5h58CzZ+LOm/IFrDNu+fGa0cskgsQxqVJr+/57b9choaDPEsLi2rfQaJFABEqYZMU7CKzhox5DYNRdIK2mh/AenhcmGuBspx9E225a8XU7c6nZLGDn90IldA/gh3QV85qpfZUy49LKD5cP9W5arePlu/tR79W1H2rsjCzylI9Su6hNIMwNQacHuZhc/jbwbKIiPcTX66NlRIxWxEqIjkYbkN/wTJTnOKZM++lXNNuwIDAQABo1MwUTAdBgNVHQ4EFgQUtW8fbqCF3XYRHPjVmKJar0yKNTUwHwYDVR0jBBgwFoAUtW8fbqCF3XYRHPjVmKJar0yKNTUwDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAgEAUc2YZGT86jfrdK4G9Gh55xwl7hUYjEnYG04CB5FR9UXNdOmboySMm2ysMx955kALv1I2gSDAPMsctMGMWEhQEO/nDe7GzQ64OyEJeHvVwRPutXylpMbpbKdr0s4gf6qH45KKWGIHSRsF5wmP2TCACKqy470g//6W53hv09aNLgLYPZ0PiyZK22BW/eWh35foHt4pHulm85nnxJoDNSL5gODoWH+quftMywS4X1Nd7DH/uJGOTFgm1rThKcgo1CqFxtTAVemso9guDTaY7uD70MMNAiyBoSRgwBDq5oKh/Wovsx8LZAUGzjC+75AKklo/75w/7RAxhFSmVYRhJmfGWXUQTycyoOkDZYf+WZiKP9ENVQlLePwJm66Nukehs+iyTKbzyzYsLct7A2isQv5xEc7+PXs1xyOvoTFFSfOX4L7PWIDOOSi38erdNxoiEouttbYH8/mU8676jleMFOdDov7/KoGO6wz+OA2Zz7OOLsMLJu8mFd0PNFH68IJNdWLvOO6iMYZk5rnpMAOuCTM6gIyg0Q9pzzxjTfBxs7ojADrNMkioCV0/cAliiaWALg6jerSO2tGBtC5YC/yue/IjyKk678bLVMO3XT5LZ0GZY9R7/GKcSi8lK14aQdDlxlb69PXJPxMp9AmwavnVBUznhbLRzzcjjmvQcZKcUSa19yI=","url":"http://www.syreads.com"}},{"name":"service.share","params":{"appSign":"MIIGQDCCBCigAwIBAgIJAJa410xto5buMA0GCSqGSIb3DQEBCwUAMIG0MQswCQYDVQQGEwJaSDEQMA4GA1UECAwHSGFpIE5hbjEQMA4GA1UEBwwHSGFpIGtvdTEyMDAGA1UECgwpSGFpbmFuIGd1YW5vdSBOZXR3b3JrIFRlY2hub2xvZ3kgQ28uLCBMdGQxEzARBgNVBAsMCk9wZXJhdGlvbnMxFDASBgNVBAMMC3N5cmVhZHMuY29tMSIwIAYJKoZIhvcNAQkBFhNkZWZhdWx0QGRlZmF1bHQuY29tMB4XDTIyMDMxMDA2NTE1NFoXDTMyMDMwNzA2NTE1NFowgbQxCzAJBgNVBAYTAlpIMRAwDgYDVQQIDAdIYWkgTmFuMRAwDgYDVQQHDAdIYWkga291MTIwMAYDVQQKDClIYWluYW4gZ3Vhbm91IE5ldHdvcmsgVGVjaG5vbG9neSBDby4sIEx0ZDETMBEGA1UECwwKT3BlcmF0aW9uczEUMBIGA1UEAwwLc3lyZWFkcy5jb20xIjAgBgkqhkiG9w0BCQEWE2RlZmF1bHRAZGVmYXVsdC5jb20wggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQC01asXcjKm11x0Ai72IdI+4sCVbDGEHbPcIHJDhtw383fuFZnTdEoQnK1+3OUYmHV9YxT9OBwnfuL/rJHOOsyWjZoe9WUkg4zxQIG96Nr1ioAGqjBKfrDeRlEKkxz82jmijOOYRlekLh2JzpLN65oE70lv8pcPRuzXld741igUvd3blG6Ys6vxHM9PyuQW972osgcxH50bOmOR77G7GgdOFYLsEruL4P3m7/9FuTLF3HqHK5NAF3fOs3pp6sPrmFIGnpdsUSjw++O+TT6lsvC2OHhbpST6pHTsMHdrPsavrKkNe80RmmDI1rlFGfvdWkq8gXHEQSO0ueTDBLfe1UabcCAIvoic8rXC31tAKn72LOSbHzl2726+Ogi3hFAY/d1GAQTL5BNRuaAnL5TXUr9wgTD5UJukiroU9fqnlAlW7g2Yg3XO3eC7mO/nfvzyGyTq5h58CzZ+LOm/IFrDNu+fGa0cskgsQxqVJr+/57b9choaDPEsLi2rfQaJFABEqYZMU7CKzhox5DYNRdIK2mh/AenhcmGuBspx9E225a8XU7c6nZLGDn90IldA/gh3QV85qpfZUy49LKD5cP9W5arePlu/tR79W1H2rsjCzylI9Su6hNIMwNQacHuZhc/jbwbKIiPcTX66NlRIxWxEqIjkYbkN/wTJTnOKZM++lXNNuwIDAQABo1MwUTAdBgNVHQ4EFgQUtW8fbqCF3XYRHPjVmKJar0yKNTUwHwYDVR0jBBgwFoAUtW8fbqCF3XYRHPjVmKJar0yKNTUwDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAgEAUc2YZGT86jfrdK4G9Gh55xwl7hUYjEnYG04CB5FR9UXNdOmboySMm2ysMx955kALv1I2gSDAPMsctMGMWEhQEO/nDe7GzQ64OyEJeHvVwRPutXylpMbpbKdr0s4gf6qH45KKWGIHSRsF5wmP2TCACKqy470g//6W53hv09aNLgLYPZ0PiyZK22BW/eWh35foHt4pHulm85nnxJoDNSL5gODoWH+quftMywS4X1Nd7DH/uJGOTFgm1rThKcgo1CqFxtTAVemso9guDTaY7uD70MMNAiyBoSRgwBDq5oKh/Wovsx8LZAUGzjC+75AKklo/75w/7RAxhFSmVYRhJmfGWXUQTycyoOkDZYf+WZiKP9ENVQlLePwJm66Nukehs+iyTKbzyzYsLct7A2isQv5xEc7+PXs1xyOvoTFFSfOX4L7PWIDOOSi38erdNxoiEouttbYH8/mU8676jleMFOdDov7/KoGO6wz+OA2Zz7OOLsMLJu8mFd0PNFH68IJNdWLvOO6iMYZk5rnpMAOuCTM6gIyg0Q9pzzxjTfBxs7ojADrNMkioCV0/cAliiaWALg6jerSO2tGBtC5YC/yue/IjyKk678bLVMO3XT5LZ0GZY9R7/GKcSi8lK14aQdDlxlb69PXJPxMp9AmwavnVBUznhbLRzzcjjmvQcZKcUSa19yI=","wxKey":"wxf9cfe9377c2396ee"}}],"permissions":[{"origin":"*"}],"template/official":"demo-template","config":{"logLevel":"debug"},"router":{"entry":"pagesC/Start","pages":{"pagesA/Main":{"component":"index"},"pagesA/WelfareNew":{"component":"index"},"pagesA/MyIncome":{"component":"index"},"pagesA/CashOut":{"component":"index"},"pagesA/CashRecord":{"component":"index"},"pagesB/Login":{"component":"index"},"pagesB/Activity":{"component":"index"},"pagesB/FeedBack":{"component":"index"},"pagesB/Privacy":{"component":"index"},"pagesB/Customer-Service":{"component":"index"},"pagesC/Start":{"component":"index"},"UnionAd/AdPage":{"component":"index"},"UnionAd/AdLanding":{"component":"index"},"UnionAd/AdReward":{"component":"index"},"pagesA/Welfare":{"component":"index"},"pagesA/AstroDetail":{"component":"index"},"pagesA/CpDetail":{"component":"index"},"pagesA/AssessPage":{"component":"index"},"pagesA/AssessPageNew":{"component":"index"},"pagesA/Result":{"component":"index"},"pagesA/ResultNew":{"component":"index"},"pagesA/BackgroundPage":{"component":"index"},"pagesA/VideoBackgroundPage":{"component":"index"}},"widgets":{}},"subpackages":[{"name":"pkgB","resource":"pagesB"},{"name":"pkgA","resource":"pagesA"}],"display":{"themeMode":0,"menu":false,"titleBar":false,"statusBarImmersive":true,"statusBarBackgroundOpacity":0,"statusBarTextStyle":"dark","menuBarData":{"menuBar":false},"pages":{"pagesA/Welfare":{"fullScreen":true,"fitCutout":"portrait|landscape","statusBarTextStyle":"light","menuBarData":{"menuBar":false}},"pagesC/Read":{"fullScreen":true,"fitCutout":"portrait|landscape","menuBarData":{"menuBar":false}},"pagesA/AssessPage":{"fullScreen":true,"fitCutout":"portrait|landscape","menuBarData":{"menuBar":false}},"pagesA/Main":{"menuBarData":{"menuBar":false}},"pagesA/WelfareNew":{"fullScreen":true,"fitCutout":"portrait|landscape","statusBarTextStyle":"light","menuBarData":{"menuBar":false}},"pagesB/Lottery":{"fullScreen":true,"menuBarData":{"menuBar":false}},"UnionAd/AdPage":{"fullScreen":true,"titleBar":false,"statusBarImmersive":true,"menu":false,"menuBarData":{"menuBar":false}},"UnionAd/AdReward":{"fullScreen":true,"titleBar":false,"statusBarImmersive":true,"menu":false,"menuBarData":{"menuBar":false}},"UnionAd/AdLanding":{"fullScreen":true,"titleBar":false,"statusBarImmersive":true,"menu":false,"menuBarData":{"menuBar":false}},"pagesC/Empty":{"fullScreen":true,"fitCutout":"portrait|landscape"},"pagesA/BackgroundPage":{"fullScreen":true,"fitCutout":"portrait|landscape","statusBarTextStyle":"auto","menuBarData":{"menuBar":true}},"pagesA/VideoBackgroundPage":{"fullScreen":true,"fitCutout":"portrait|landscape","statusBarTextStyle":"auto","menuBarData":{"menuBar":true}}}}}')
        }
    }, __webpack_module_cache__ = {};

    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var a = __webpack_module_cache__[e] = {exports: {}};
        return __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports
    }

    __webpack_require__.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var __webpack_exports__ = {}, $app_style$, $app_script$;
    $app_style$ = {}, $app_script$ = __webpack_require__(1497), $app_define$("@app-application/app", [], (function (e, t, a) {
        $app_script$(a, t, e), t.__esModule && t.default && (a.exports = t.default), a.exports.manifest = __webpack_require__(6325), a.exports.style = {list: [$app_style$]}
    })), $app_bootstrap$("@app-application/app", {packagerVersion: "1.9.14"})
})()
}
;
if ("undefined" == typeof window) return createAppHandler();
window.createAppHandler = createAppHandler, global.manifest = manifestJson
})
();