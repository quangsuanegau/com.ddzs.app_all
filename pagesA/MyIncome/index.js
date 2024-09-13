!function () {
    var t = function () {
        return (() => {
            var t = {
                1210: t => {
                    t.exports = function (t, e, a) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, e.default = Custom_page({
                            data: {
                                coinNum: "",
                                cashNum: "",
                                loading: !1,
                                backTitleIsCenter: !1,
                                activeType: 0,
                                page: 1,
                                pageSize: 20,
                                totalPage: 0,
                                loadMore: !1,
                                bookTicketList: [],
                                cashList: [],
                                pathUrl: "",
                                pageDetail: {
                                    pageUrl: "我的收益页",
                                    pageName: "我的收益页",
                                    pageCode: "READ_MyIncome",
                                    pageOrigin: ""
                                }
                            }, onInit() {
                                this.activeType = this.pathType, this.getBookTickets(), this.getCashList();
                                let t = this.$app.$def.getPagesCodeInfo();
                                this.pathUrl = t.pathUrl, this.$app.$def.changeCommonDataByPageShow(this), COMMON_REPORT_UTILS.page_show_report(this.pathUrl)
                            }, onShow() {
                                let t = this.$app.$def.getPagesCodeInfo();
                                this.pathUrl = t.pathUrl, this.getUserInfo(), REPORT_SDK && REPORT_SDK.page_show()
                            }, onHide() {
                                REPORT_SDK && REPORT_SDK.page_hide()
                            }, pageBack() {
                                COMMON_REPORT_UTILS.page_click_report("返回"), this.$page.finish()
                            }, onBackPress() {
                                COMMON_REPORT_UTILS.back_click_report("", "", "跳转页面")
                            }, getUserInfo() {
                                $apis.example.userDataInfo({}).then((t => {
                                    200 == t.code ? (this.coinNum = t.data.coupon, this.cashNum = "0" == t.data.income ? "0.00" : t.data.income) : (this.coinNum = 0, this.cashNum = "0.00")
                                })).catch((t => {
                                }))
                            }, TicketTypeSelected(t) {
                                this.activeType = t, t ? (this.cashList = [], this.getCashList()) : (this.bookTicketList = [], this.page = 1, this.totalPage = 0, this.getBookTickets())
                            }, getCashList() {
                                let t = this;
                                $apis.example.userIncomeDetail().then((e => {
                                    200 == e.code && (t.cashList = e.data)
                                }))
                            }, getBookTickets() {
                                $apis.example.userBookTickets({page: this.page, status: this.activeType}).then((t => {
                                    200 == t.code && (this.loadMore = !1, this.bookTicketList = this.bookTicketList.concat(t.data.list), this.totalPage = t.data.totalPage, this.page = t.data.page)
                                }))
                            }, scrollbottom() {
                                if (this.loadMore = !0, this.page++, this.page > this.totalPage) return this.loadMore = !1, void $utils.showToast("没有更多数据了！", 0);
                                this.getBookTickets()
                            }, toPageMoney() {
                                $utils.routetheUrl("/pagesB/Money", {pathUrl: "我的收益页"}, !1)
                            }, goCashOut() {
                                $utils.routetheUrl("/pagesA/CashOut", {pathUrl: "我的收益页"}, !1)
                            }, toPageWelfare() {
                                COMMON_REPORT_UTILS.page_click_report("赚现金"), this.$app.$def.tabListType = [0, 0, 0, 0, 0], $utils.routetheUrl("/pagesA/WelfareNew", {pathUrl: "我的收益页"}, !0)
                            }, toPageTicketDescribe() {
                                COMMON_REPORT_UTILS.page_click_report("说明")
                            }, toPageCashRecord() {
                                COMMON_REPORT_UTILS.page_click_report("提现记录"), $utils.routetheUrl("/pagesA/CashRecord", {pathUrl: "我的收益页"}, !1)
                            }
                        });
                        const i = e.default || t.exports, n = ["public", "protected", "private"];
                        if (i.data && n.some((function (t) {
                            return i[t]
                        }))) throw new Error('页面VM对象中的属性data不可与"' + n.join(",") + '"同时存在，请使用private替换data名称');
                        i.data || (i.data = {}, i._descriptor = {}, n.forEach((function (t) {
                            const e = typeof i[t];
                            if ("object" === e) {
                                i.data = Object.assign(i.data, i[t]);
                                for (const e in i[t]) i._descriptor[e] = {access: t}
                            } else "function" === e && console.warn("页面VM对象中的属性" + t + "的值不能是函数，请使用对象")
                        })))
                    }
                }, 3899: t => {
                    t.exports = function (t, e, a) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
                        var i = c(a("@app-module/system.package")), n = c(a("@app-module/system.router"));

                        function c(t) {
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
                                i.default.hasInstalled({
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
                                n.default.push({uri: this.backUrl})
                            }
                        }
                    }
                }, 366: t => {
                    t.exports = function (t, e, a) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, e.default = {
                            data: {
                                pageName: "书城",
                                deviceInfo: {statusBarHeight: 40}
                            },
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
                                textCenter: {type: Boolean, default: !0},
                                textColor: {type: String, default: "#333333"},
                                textWeight: {type: Number, default: 700},
                                fontSize: {type: Number, default: 36},
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
                }, 4523: t => {
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
                }, 2966: t => {
                    t.exports = {
                        ".ticket-record-wrapper": {
                            flexDirection: "column",
                            background: '{"values":[{"type":"linearGradient","directions":["to","right"],"values":["#FFEDDA","#FDD3AB"]}]}',
                            width: "750px",
                            height: "100%"
                        },
                        ".ticket-record-wrapper .ticket-title-section": {
                            justifyContent: "space-between",
                            paddingTop: "10px",
                            paddingRight: "70px",
                            paddingBottom: "10px",
                            paddingLeft: "70px",
                            marginTop: "15px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "ticket-title-section"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-title-section .ticket-title-item": {
                            flexDirection: "column",
                            width: "220px",
                            height: "66px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-title-section"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "ticket-title-item"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-title-section .ticket-title-item .ticket-title-name": {
                            fontSize: "30px",
                            fontWeight: "500",
                            color: "#333333",
                            textAlign: "center",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-title-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-title-item"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "ticket-title-name"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-title-section .ticket-title-item .ticket-title-mark": {
                            width: "64px",
                            height: "5px",
                            borderRadius: "2.5px",
                            backgroundColor: "#FF4F4F",
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
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-title-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-title-item"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "ticket-title-mark"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-title-section .ticket-title-item .avtive": {
                            fontSize: "30px",
                            fontWeight: "700",
                            color: "#FF4F4F",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-title-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-title-item"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "avtive"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section": {
                            flexDirection: "column",
                            backgroundColor: "#ffffff",
                            borderRadius: "36px",
                            flex: 1,
                            width: "690px",
                            marginTop: "0px",
                            marginRight: "auto",
                            marginBottom: "30px",
                            marginLeft: "auto",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "ticket-detail-section"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list": {
                            paddingTop: "24px",
                            paddingRight: "24px",
                            paddingBottom: "24px",
                            paddingLeft: "24px",
                            height: "100%",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "ticket-detail-list"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item": {
                            width: "100%",
                            height: "136px",
                            borderRadius: "16px",
                            alignItems: "center",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "consume-item"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .empty-1": {
                            width: "24px",
                            height: "16px",
                            borderBottomLeftRadius: "16px",
                            borderBottomRightRadius: "16px",
                            marginLeft: "166px",
                            marginTop: "0px",
                            backgroundColor: "#ffffff",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "empty-1"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .empty-2": {
                            width: "24px",
                            height: "16px",
                            borderTopLeftRadius: "16px",
                            borderTopRightRadius: "16px",
                            marginLeft: "166px",
                            marginTop: "160px",
                            backgroundColor: "#ffffff",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "empty-2"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content": {
                            width: "100%",
                            height: "136px",
                            paddingTop: "0px",
                            paddingRight: "2px",
                            paddingBottom: "0px",
                            paddingLeft: "2px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "item-content"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content .content-lf": {
                            width: "176px",
                            height: "134px",
                            justifyContent: "center",
                            alignItems: "center",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "item-content"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "content-lf"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content .content-lf .lf-text-1": {
                            height: "64px",
                            fontSize: "42px",
                            color: "#FF4F4F",
                            marginBottom: "10px",
                            textAlign: "center",
                            fontWeight: "bold",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "item-content"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "content-lf"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "lf-text-1"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content .content-lf .lf-text-out": {
                            height: "64px",
                            fontSize: "42px",
                            color: "#333333",
                            marginBottom: "10px",
                            textAlign: "center",
                            fontWeight: "bold",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "item-content"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "content-lf"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "lf-text-out"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content .content-lf .lf-text-2": {
                            height: "28px",
                            fontSize: "24px",
                            color: "#FF9401",
                            textAlign: "center",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "item-content"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "content-lf"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "lf-text-2"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content .content-rt": {
                            flex: 1,
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "20px",
                            height: "134px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "item-content"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "content-rt"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content .content-rt .rt-text-1": {
                            height: "64px",
                            fontSize: "26px",
                            fontWeight: "bold",
                            paddingBottom: "5px",
                            color: "#333333",
                            textAlign: "left",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "item-content"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "content-rt"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "rt-text-1"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content .content-rt .rt-text-1-detail": {
                            fontSize: "18px",
                            color: "#FF4343",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderStyle: "solid",
                            borderTopColor: "#FF4343",
                            borderRightColor: "#FF4343",
                            borderBottomColor: "#FF4343",
                            borderLeftColor: "#FF4343",
                            borderRadius: "25px",
                            textAlign: "center",
                            width: "66px",
                            height: "28px",
                            marginTop: "18px",
                            marginRight: "0px",
                            marginBottom: "0px",
                            marginLeft: "10px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "item-content"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "content-rt"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "rt-text-1-detail"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content .content-rt .rt-text-2": {
                            width: "100%",
                            fontSize: "22px",
                            height: "26px",
                            color: "rgba(51,51,51,0.66)",
                            textAlign: "left",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "item-content"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "content-rt"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "rt-text-2"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content-used": {
                            backgroundColor: "#fffcf8",
                            backgroundImage: "/pagesA/images/ticket/used.png",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "80px 80px",
                            backgroundPosition: "right top",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "item-content-used"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content-used .content-lf .lf-text-1": {
                            color: "#FFC980",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "item-content-used"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "content-lf"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "lf-text-1"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content-used .content-lf .lf-text-2": {
                            color: "#FFC980",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "item-content-used"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "content-lf"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "lf-text-2"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content-used .content-rt .rt-text-1": {
                            color: "#999999",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "item-content-used"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "content-rt"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "rt-text-1"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content-used .content-rt .rt-text-2": {
                            color: "#cccccc",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "item-content-used"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "content-rt"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "rt-text-2"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content-past": {
                            backgroundColor: "#f6f6f6",
                            backgroundImage: "/pagesA/images/ticket/past.png",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "80px 80px",
                            backgroundPosition: "right top",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "item-content-past"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content-past .content-lf .lf-text-1": {
                            color: "#999999",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "item-content-past"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "content-lf"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "lf-text-1"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content-past .content-lf .lf-text-2": {
                            color: "#999999",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "item-content-past"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "content-lf"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "lf-text-2"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content-past .content-rt .rt-text-1": {
                            color: "#999999",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "item-content-past"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "content-rt"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "rt-text-1"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-detail-list .consume-item .item-content-past .content-rt .rt-text-2": {
                            color: "#cccccc",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-list"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "consume-item"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "item-content-past"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "content-rt"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "rt-text-2"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-nomore": {
                            justifyContent: "center",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "ticket-nomore"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .ticket-nomore .ticket-nomore-text": {
                            fontSize: "24px",
                            fontWeight: "500",
                            color: "#cccccc",
                            marginTop: "30px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-nomore"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "ticket-nomore-text"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .empty-section": {
                            flexDirection: "column",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "empty-section"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .empty-section .empty-image": {
                            width: "348px",
                            height: "348px",
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
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "empty-section"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "empty-image"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .empty-section .empty-des": {
                            fontSize: "24px",
                            fontWeight: "500",
                            color: "#999999",
                            textAlign: "center",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "empty-section"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "empty-des"}]
                            }
                        },
                        ".ticket-record-wrapper .ticket-detail-section .empty-section .empty-btn": {
                            width: "180px",
                            height: "62px",
                            backgroundColor: "#0aafff",
                            borderRadius: "44px",
                            fontSize: "24px",
                            fontWeight: "500",
                            color: "#ffffff",
                            marginTop: "40px",
                            marginRight: "auto",
                            marginBottom: "0px",
                            marginLeft: "auto",
                            textAlign: "center",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "empty-section"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "empty-btn"}]
                            }
                        },
                        ".ticket-record-wrapper .income-header-box": {
                            width: "690px",
                            height: "382px",
                            marginTop: "30px",
                            marginRight: "auto",
                            marginBottom: "30px",
                            marginLeft: "auto",
                            borderRadius: "25px",
                            backgroundColor: "#ffffff",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "income-header-box"}]
                            }
                        },
                        ".ticket-record-wrapper .income-header-box .income-header-content": {
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            width: "100%",
                            marginTop: "45px",
                            borderBottomWidth: "1px",
                            borderBottomStyle: "solid",
                            borderBottomColor: "#E5E5E5",
                            paddingBottom: "33px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "income-header-content"}]
                            }
                        },
                        ".ticket-record-wrapper .income-header-box .income-header-content .header-coins-box": {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginLeft: "50px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-content"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "header-coins-box"}]
                            }
                        },
                        ".ticket-record-wrapper .income-header-box .income-header-content .header-coins-box .coins-font": {
                            fontSize: "72px",
                            color: "#333333",
                            fontWeight: "600",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-content"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "header-coins-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "coins-font"}]
                            }
                        },
                        ".ticket-record-wrapper .income-header-box .income-header-content .header-coins-box .hidden-btn": {
                            width: "120px",
                            height: "52px",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderStyle: "solid",
                            borderTopColor: "#ff4343",
                            borderRightColor: "#ff4343",
                            borderBottomColor: "#ff4343",
                            borderLeftColor: "#ff4343",
                            borderRadius: "26px",
                            textAlign: "center",
                            fontSize: "24px",
                            color: "#FF4343",
                            marginTop: "20px",
                            visibility: "hidden",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-content"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "header-coins-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "hidden-btn"}]
                            }
                        },
                        ".ticket-record-wrapper .income-header-box .income-header-content .header-line": {
                            width: "2px",
                            height: "84px",
                            backgroundColor: "#cccccc",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-content"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "header-line"}]
                            }
                        },
                        ".ticket-record-wrapper .income-header-box .income-header-content .header-cash-box": {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginRight: "50px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-content"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "header-cash-box"}]
                            }
                        },
                        ".ticket-record-wrapper .income-header-box .income-header-content .header-cash-box .cash-font": {
                            fontSize: "72px",
                            color: "#FF4F4F",
                            fontWeight: "600",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-content"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "header-cash-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "cash-font"}]
                            }
                        },
                        ".ticket-record-wrapper .income-header-box .income-header-content .header-cash-box .cash-btn": {
                            width: "120px",
                            height: "52px",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderStyle: "solid",
                            borderTopColor: "#ff4343",
                            borderRightColor: "#ff4343",
                            borderBottomColor: "#ff4343",
                            borderLeftColor: "#ff4343",
                            borderRadius: "26px",
                            textAlign: "center",
                            fontSize: "24px",
                            color: "#FF4343",
                            marginTop: "20px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-content"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "header-cash-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "cash-btn"}]
                            }
                        },
                        ".ticket-record-wrapper .income-header-box .income-header-content .header-fonts": {
                            fontSize: "24px",
                            color: "rgba(51,51,51,0.66)",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-content"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "header-fonts"}]
                            }
                        },
                        ".ticket-record-wrapper .income-header-box .header-bottom-font": {
                            alignItems: "center",
                            marginTop: "24px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "header-bottom-font"}]
                            }
                        },
                        ".ticket-record-wrapper .income-header-box .header-bottom-font .header-bottom-img": {
                            width: "20px",
                            height: "20px",
                            marginRight: "7px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "header-bottom-font"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "header-bottom-img"}]
                            }
                        },
                        ".ticket-record-wrapper .income-header-box .header-bottom-font text": {
                            fontSize: "22px",
                            color: "rgba(51,51,51,0.66)",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "income-header-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "header-bottom-font"
                                }, {t: "d"}, {t: "t", n: "text"}]
                            }
                        },
                        ".ticket-record-wrapper .cashList-bottom-font": {
                            color: "rgba(51,51,51,0.66)",
                            fontSize: "22px",
                            textAlign: "center",
                            marginBottom: "20px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "cashList-bottom-font"}]
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
                }, 3979: t => {
                    t.exports = {
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
                }, 1274: t => {
                    t.exports = {
                        type: "div",
                        attr: {},
                        classList: ["ticket-record-wrapper"],
                        children: [{
                            type: "common-header", attr: {
                                title: "我的收益", textCenter: function () {
                                    return this.backTitleIsCenter
                                }
                            }, events: {"back-click": "pageBack"}
                        }, {
                            type: "div",
                            attr: {},
                            classList: ["income-header-box"],
                            children: [{
                                type: "div",
                                attr: {},
                                classList: ["income-header-content"],
                                children: [{
                                    type: "div",
                                    attr: {},
                                    classList: ["header-coins-box"],
                                    children: [{
                                        type: "text", attr: {
                                            value: function () {
                                                return this.coinNum
                                            }
                                        }, classList: ["coins-font"]
                                    }, {
                                        type: "text",
                                        attr: {value: "金币收益"},
                                        classList: ["header-fonts"]
                                    }, {type: "text", attr: {value: "去兑换"}, classList: ["hidden-btn"]}]
                                }, {type: "div", attr: {}, classList: ["header-line"]}, {
                                    type: "div",
                                    attr: {},
                                    classList: ["header-cash-box"],
                                    children: [{
                                        type: "text", attr: {
                                            value: function () {
                                                return this.cashNum
                                            }
                                        }, classList: ["cash-font"]
                                    }, {
                                        type: "text",
                                        attr: {value: "现金收益(元)"},
                                        classList: ["header-fonts"]
                                    }, {
                                        type: "text",
                                        attr: {value: "去提现"},
                                        classList: ["cash-btn"],
                                        events: {click: "goCashOut"}
                                    }]
                                }]
                            }, {
                                type: "div",
                                attr: {},
                                classList: ["header-bottom-font"],
                                style: {visibility: "hidden"},
                                children: [{
                                    type: "text",
                                    attr: {value: "兑换比例受每日广告收益影响浮动，金币到账可能会有延迟"}
                                }]
                            }]
                        }, {
                            type: "div",
                            attr: {},
                            classList: ["ticket-detail-section"],
                            children: [{
                                type: "div",
                                attr: {},
                                classList: ["ticket-title-section"],
                                children: [{
                                    type: "div",
                                    attr: {},
                                    classList: ["ticket-title-item"],
                                    events: {
                                        click: function (t) {
                                            return this.TicketTypeSelected(0, t)
                                        }
                                    },
                                    children: [{
                                        type: "text", attr: {value: "金币收益"}, classList: function () {
                                            return ["ticket-title-name", 0 == this.activeType ? "avtive" : ""]
                                        }
                                    }, {
                                        type: "text", attr: {}, classList: function () {
                                            return [0 == this.activeType ? "ticket-title-mark" : ""]
                                        }, style: {marginTop: "15px"}
                                    }]
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["ticket-title-item"],
                                    events: {
                                        click: function (t) {
                                            return this.TicketTypeSelected(2, t)
                                        }
                                    },
                                    children: [{
                                        type: "text", attr: {value: "现金收益"}, classList: function () {
                                            return ["ticket-title-name", 2 == this.activeType ? "avtive" : ""]
                                        }
                                    }, {
                                        type: "text", attr: {}, classList: function () {
                                            return [2 == this.activeType ? "ticket-title-mark" : ""]
                                        }, style: {marginTop: "15px"}
                                    }]
                                }]
                            }, {
                                type: "list",
                                attr: {},
                                classList: ["ticket-detail-list"],
                                events: {scrollbottom: "scrollbottom"},
                                shown: function () {
                                    return 0 == this.activeType
                                },
                                children: [{
                                    type: "block",
                                    attr: {},
                                    shown: function () {
                                        return this.bookTicketList.length
                                    },
                                    children: [{
                                        type: "list-item",
                                        attr: {type: "consume-item"},
                                        repeat: {
                                            exp: function () {
                                                return this.bookTicketList
                                            }, key: "index", value: "item"
                                        },
                                        classList: ["consume-item"],
                                        style: {marginBottom: "20px"},
                                        events: {click: "toPageTicketDescribe"},
                                        children: [{
                                            type: "stack",
                                            attr: {},
                                            children: [{type: "div", attr: {}, classList: ["empty-1"]}, {
                                                type: "div",
                                                attr: {},
                                                classList: ["empty-2"]
                                            }, {
                                                type: "div",
                                                attr: {},
                                                classList: ["item-content"],
                                                children: [{
                                                    type: "div",
                                                    attr: {},
                                                    classList: ["content-rt"],
                                                    children: [{
                                                        type: "div",
                                                        attr: {},
                                                        style: {width: "100%"},
                                                        children: [{
                                                            type: "text", attr: {
                                                                value: function () {
                                                                    return this.item.task_name
                                                                }
                                                            }, classList: ["rt-text-1"]
                                                        }]
                                                    }, {
                                                        type: "text", attr: {
                                                            value: function () {
                                                                return this.item.datetime
                                                            }
                                                        }, classList: ["rt-text-2"]
                                                    }]
                                                }, {
                                                    type: "div",
                                                    attr: {},
                                                    classList: ["content-lf"],
                                                    children: [{
                                                        type: "text",
                                                        attr: {value: "+"},
                                                        classList: ["lf-text-1"]
                                                    }, {
                                                        type: "text", attr: {
                                                            value: function () {
                                                                return this.item.now_book_ticket
                                                            }
                                                        }, classList: ["lf-text-1"]
                                                    }]
                                                }]
                                            }]
                                        }]
                                    }]
                                }, {
                                    type: "list-item",
                                    attr: {type: "show-mode"},
                                    classList: ["load-more"],
                                    shown: function () {
                                        return this.loadMore
                                    },
                                    children: [{type: "progress", attr: {type: "circular"}}, {
                                        type: "text",
                                        attr: {value: "加载更多！"}
                                    }]
                                }, {
                                    type: "list-item",
                                    attr: {type: "ticket-nomore"},
                                    classList: ["ticket-nomore"],
                                    shown: function () {
                                        return this.bookTicketList.length
                                    },
                                    children: [{
                                        type: "text",
                                        attr: {value: "没有更多了"},
                                        classList: ["ticket-nomore-text"]
                                    }]
                                }, {
                                    type: "list-item",
                                    attr: {type: "empty"},
                                    style: {justifyContent: "center"},
                                    children: [{
                                        type: "div",
                                        attr: {},
                                        classList: ["empty-section"],
                                        shown: function () {
                                            return !this.bookTicketList.length
                                        },
                                        children: [{
                                            type: "image",
                                            attr: {src: "/pagesB/images/common/empty.png"},
                                            classList: ["empty-image"]
                                        }, {
                                            type: "text",
                                            attr: {value: "您还没有金币，赶快去赚取吧~"},
                                            classList: ["empty-des"]
                                        }, {
                                            type: "text",
                                            attr: {value: "赚金币"},
                                            classList: ["empty-btn"],
                                            events: {click: "toPageWelfare"}
                                        }]
                                    }]
                                }]
                            }, {
                                type: "list",
                                attr: {},
                                classList: ["ticket-detail-list"],
                                events: {scrollbottom: "scrollbottom"},
                                shown: function () {
                                    return 2 == this.activeType
                                },
                                children: [{
                                    type: "block", attr: {}, shown: function () {
                                        return this.cashList.length
                                    }, children: [{
                                        type: "list-item", attr: {type: "consume-item"}, repeat: {
                                            exp: function () {
                                                return this.cashList
                                            }, key: "index", value: "item"
                                        }, classList: ["consume-item"], children: [{
                                            type: "stack",
                                            attr: {},
                                            children: [{type: "div", attr: {}, classList: ["empty-1"]}, {
                                                type: "div",
                                                attr: {},
                                                classList: ["empty-2"]
                                            }, {
                                                type: "div",
                                                attr: {},
                                                classList: ["item-content"],
                                                children: [{
                                                    type: "div",
                                                    attr: {},
                                                    classList: ["content-rt"],
                                                    children: [{
                                                        type: "div",
                                                        attr: {},
                                                        style: {width: "100%"},
                                                        children: [{
                                                            type: "text", attr: {
                                                                value: function () {
                                                                    return this.item.task_name
                                                                }
                                                            }, classList: ["rt-text-1"]
                                                        }, {
                                                            type: "text",
                                                            attr: {value: "详情"},
                                                            classList: ["rt-text-1-detail"],
                                                            shown: function () {
                                                                return 1 == this.item.type
                                                            },
                                                            events: {click: "toPageCashRecord"}
                                                        }]
                                                    }, {
                                                        type: "text", attr: {
                                                            value: function () {
                                                                return this.item.created_at
                                                            }
                                                        }, classList: ["rt-text-2"]
                                                    }]
                                                }, {
                                                    type: "div",
                                                    attr: {},
                                                    classList: ["content-lf"],
                                                    children: [{
                                                        type: "text",
                                                        attr: {value: "-"},
                                                        classList: ["lf-text-out"],
                                                        shown: function () {
                                                            return 1 == this.item.type
                                                        }
                                                    }, {
                                                        type: "text",
                                                        attr: {value: "+"},
                                                        classList: ["lf-text-1"],
                                                        shown: function () {
                                                            return !(1 == this.item.type)
                                                        }
                                                    }, {
                                                        type: "text", attr: {
                                                            value: function () {
                                                                return this.item.amounts
                                                            }
                                                        }, classList: function () {
                                                            return [1 == this.item.type ? "lf-text-out" : "lf-text-1"]
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }]
                                    }]
                                }, {
                                    type: "list-item",
                                    attr: {type: "show-mode"},
                                    classList: ["load-more"],
                                    shown: function () {
                                        return this.loadMore
                                    },
                                    children: [{type: "progress", attr: {type: "circular"}}, {
                                        type: "text",
                                        attr: {value: "加载更多！"}
                                    }]
                                }, {
                                    type: "list-item",
                                    attr: {type: "ticket-nomore"},
                                    classList: ["ticket-nomore"],
                                    shown: function () {
                                        return this.cashList.length
                                    },
                                    children: [{
                                        type: "text",
                                        attr: {value: "没有更多了"},
                                        classList: ["ticket-nomore-text"]
                                    }]
                                }, {
                                    type: "list-item",
                                    attr: {type: "empty"},
                                    style: {justifyContent: "center"},
                                    children: [{
                                        type: "div",
                                        attr: {},
                                        classList: ["empty-section"],
                                        shown: function () {
                                            return !this.cashList.length
                                        },
                                        children: [{
                                            type: "image",
                                            attr: {src: "/pagesB/images/common/empty.png"},
                                            classList: ["empty-image"]
                                        }, {
                                            type: "text",
                                            attr: {value: "您还没有现金，赶快去赚取吧~"},
                                            classList: ["empty-des"]
                                        }, {
                                            type: "text",
                                            attr: {value: "赚现金"},
                                            classList: ["empty-btn"],
                                            events: {click: "toPageWelfare"}
                                        }]
                                    }]
                                }]
                            }, {
                                type: "text",
                                attr: {value: "系统仅展示最近7天的收益"},
                                classList: ["cashList-bottom-font"],
                                shown: function () {
                                    return 2 == this.activeType
                                }
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
                    var i = a(1496), n = a(3899);
                    $app_define$("@app-component/back-app-button", [], (function (t, e, c) {
                        n(c, e, t), e.__esModule && e.default && (c.exports = e.default), c.exports.template = a(6547), c.exports.style = i
                    }))
                }, 3172: (t, e, a) => {
                    var i = a(4523), n = a(366);
                    $app_define$("@app-component/common-header", [], (function (t, e, c) {
                        n(c, e, t), e.__esModule && e.default && (c.exports = e.default), c.exports.template = a(3979), c.exports.style = i
                    }))
                }
            }, e = {};

            function a(i) {
                var n = e[i];
                if (void 0 !== n) return n.exports;
                var c = e[i] = {exports: {}};
                return t[i](c, c.exports, a), c.exports
            }

            (() => {
                a(3172), a(1267);
                var t = a(2966), e = a(1210);
                $app_define$("@app-component/index", [], (function (i, n, c) {
                    e(c, n, i), n.__esModule && n.default && (c.exports = n.default), c.exports.template = a(1274), c.exports.style = t
                })), $app_bootstrap$("@app-component/index", {packagerVersion: "1.9.14"})
            })()
        })()
    };
    if ("undefined" == typeof window) return t();
    window.createPageHandler = t
}();