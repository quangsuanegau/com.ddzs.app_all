!function () {
    var t = function () {
        return (() => {
            var t = {
                5889: t => {
                    t.exports = function (t, e, a) {
                        "use strict";
                        var i;
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, (i = a("@app-module/system.prompt")) && i.__esModule, e.default = Custom_page({
                            data: {
                                selectMoney: "",
                                userIncome: "",
                                isWelfareFlag: !1,
                                isShowPaymentPop: !1,
                                isShowConfirmPop: !1,
                                isShowResultPop: !1,
                                isShowEnoughPop: !1,
                                isShowRulePop: !1,
                                enoughObj: {
                                    title: "提示",
                                    content: "余额不足·请尝试其他额度或继续赚钱！",
                                    leftBtn: "我知道啦",
                                    rightBtn: "换个额度"
                                },
                                ruleContent: "",
                                loading: !1,
                                backTitleIsCenter: !1,
                                loadMore: !1,
                                bookTicketList: [],
                                pathUrl: "",
                                pageDetail: {
                                    pageUrl: "我的提现页",
                                    pageName: "我的提现页",
                                    pageCode: "READ_CashOut",
                                    pageOrigin: ""
                                },
                                cashList: []
                            }, onInit() {
                                this.userIncome = this.$app.$def.income, this.getCashList();
                                let t = this.$app.$def.getPagesCodeInfo();
                                this.pathUrl = t.pathUrl, this.$app.$def.changeCommonDataByPageShow(this), COMMON_REPORT_UTILS.page_show_report(this.pathUrl)
                            }, onShow() {
                                let t = this.$app.$def.getPagesCodeInfo();
                                this.pathUrl = t.pathUrl, REPORT_SDK && REPORT_SDK.page_show()
                            }, onHide() {
                                REPORT_SDK && REPORT_SDK.page_hide()
                            }, pageBack() {
                                COMMON_REPORT_UTILS.page_click_report("返回"), this.$page.finish()
                            }, onBackPress() {
                                COMMON_REPORT_UTILS.back_click_report("", "", "跳转页面")
                            }, confirmPopCancelClickHandler() {
                                this.isShowConfirmPop = !1
                            }, changeAccountClick() {
                                this.isShowConfirmPop = !1, this.isShowPaymentPop = !0
                            }, confirmPopSureClickHandler(t) {
                                let e = this, a = {
                                    account: e.$app.$def.account,
                                    account_name: e.$app.$def.account_name,
                                    money: e.selectMoney,
                                    androidId: e.$app.$def.android,
                                    is_welfare: e.isWelfareFlag ? 1 : 0
                                };
                                e.loading = !0, $apis.example.cashOutSubmit(a).then((t => {
                                    200 == t.code ? (e.loading = !1, e.isShowConfirmPop = !1, e.getUserInfo(), e.getCashList(), e.isShowResultPop = !0) : ($utils.showToast(t.msg, 0), e.loading = !1)
                                }))
                            }, resultPopCancelClickHandler() {
                                this.isShowResultPop = !1
                            }, resultPopSureClickHandler(t) {
                                this.isShowResultPop = !1
                            }, paymentPopCancelClickHandler() {
                                this.isShowPaymentPop = !1
                            }, enoughPopSureClickHandler() {
                                this.isShowEnoughPop = !1
                            }, enoughPopCancelClickHandler() {
                                this.isShowEnoughPop = !1
                            }, rulePoSureClickHandler() {
                                this.isShowRulePop = !1
                            }, rulesPop() {
                                this.isShowRulePop = !0
                            }, paymentPopSureClickHandler(t) {
                                let e = this;
                                e.loading = !0, t.detail.param.money = e.selectMoney.toString(), $apis.example.cashOutCheck(t.detail.param).then((a => {
                                    e.loading = !1, 200 == a.code ? (e.$app.$def.account = t.detail.param.account, e.$app.$def.account_name = t.detail.param.account_name, e.isShowPaymentPop = !1, e.isShowConfirmPop = !0) : $utils.showToast(a.msg, 0)
                                }))
                            }, makeCashListFn(t) {
                                let e = t;
                                e.forEach((t => {
                                    t.isSeclet = !1
                                })), this.cashList = e
                            }, getCashList() {
                                let t = this;
                                $apis.example.cashOutList().then((e => {
                                    200 == e.code && (t.cashList = e.data, e.data.length ? t.makeCashListFn(e.data) : t.cashList = [])
                                }))
                            }, getUserInfo() {
                                $apis.example.userDataInfo({}).then((t => {
                                    200 == t.code && (this.userIncome = t.data.income, this.$app.$def.coupon = t.data.coupon, this.$app.$def.income = 0 == t.data.income ? "0.00" : t.data.income)
                                })).catch((t => {
                                }))
                            }, selectCash(t) {
                                this.cashList.forEach((e => {
                                    t.id === e.id ? e.isSeclet = !0 : e.isSeclet = !1
                                }));
                                let e = this.cashList;
                                this.cashList = [], setTimeout((() => {
                                    this.cashList = e
                                }), 0), LOG("CASHLIST111", this.cashList), this.selectMoney = t.amounts, this.isWelfareFlag = t.is_welfare, parseFloat(this.userIncome) < parseFloat(t.amounts) ? this.isShowEnoughPop = !0 : this.$app.$def.account ? this.isShowConfirmPop = !0 : this.isShowPaymentPop = !0
                            }, TicketTypeSelected(t) {
                                this.activeType = t, this.bookTicketList = [], this.page = 1, this.totalPage = 0, this.getBookTickets(), COMMON_REPORT_UTILS.page_click_report(0 == t ? "可使用" : 1 == t ? "已使用" : "已过期")
                            }, getBookTickets() {
                                this.loading = !0, $apis.example.userBookTickets({
                                    page: this.page,
                                    status: this.activeType
                                }).then((t => {
                                    200 == t.code && (this.loadMore = !1, this.bookTicketList = this.bookTicketList.concat(t.data.list), this.totalPage = t.data.totalPage, this.page = t.data.page, this.loading = !1)
                                }))
                            }, scrollbottom() {
                                if (this.loadMore = !0, this.page++, this.page > this.totalPage) return this.loadMore = !1, void $utils.showToast("没有更多数据了！", 0);
                                this.getBookTickets()
                            }, toPageMoney() {
                                $utils.routetheUrl("/pagesB/Money", {pathUrl: "我的收益页"}, !1)
                            }, toPageTicketDescribe() {
                                $utils.routetheUrl("/pagesB/Ticket-Describe", {pathUrl: "我的收益页"}, !1)
                            }, goRecordPage() {
                                $utils.routetheUrl("/pagesA/CashRecord", {pathUrl: "我的收益页"}, !1)
                            }
                        });
                        const o = e.default || t.exports, n = ["public", "protected", "private"];
                        if (o.data && n.some((function (t) {
                            return o[t]
                        }))) throw new Error('页面VM对象中的属性data不可与"' + n.join(",") + '"同时存在，请使用private替换data名称');
                        o.data || (o.data = {}, o._descriptor = {}, n.forEach((function (t) {
                            const e = typeof o[t];
                            if ("object" === e) {
                                o.data = Object.assign(o.data, o[t]);
                                for (const e in o[t]) o._descriptor[e] = {access: t}
                            } else "function" === e && console.warn("页面VM对象中的属性" + t + "的值不能是函数，请使用对象")
                        })))
                    }
                }, 3899: t => {
                    t.exports = function (t, e, a) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
                        var i = n(a("@app-module/system.package")), o = n(a("@app-module/system.router"));

                        function n(t) {
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
                                o.default.push({uri: this.backUrl})
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
                }, 5996: t => {
                    t.exports = function (t, e, a) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, e.default = {
                            data() {
                                return {isLoading: this.loading}
                            }, props: {loading: {type: Boolean, default: !0}}, onInit() {
                                this.$watch("loading", "watchLoadingChange")
                            }, watchLoadingChange(t, e) {
                                this.isLoading = t
                            }
                        }
                    }
                }, 7810: t => {
                    t.exports = function (t, e, a) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, e.default = {
                            props: {
                                messageVal: {
                                    type: Object,
                                    default: {}
                                }
                            }, data: {}, onInit() {
                            }, onDestroy() {
                            }, popCancelAction() {
                                this.$emit("cancelClick")
                            }, popSureAction() {
                                this.$emit("sureClick", {param: {}})
                            }
                        }
                    }
                }, 55: t => {
                    t.exports = function (t, e, a) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, e.default = {
                            props: {
                                message: {
                                    type: String,
                                    default: {}
                                }
                            },
                            data: {ruleText: ["1.本平台提供红包提现功能，提现方式为提取到支付账户（支付宝）", "2.提现额度分别为20元，50元两档（但仅新用户可最低0.1元提现一次），每次提现时可以选择所需的一档提现额度，剩余金额可在下次满足前述提现额度时申请提现。", "3.基于用户账号以及安全考虑，每名用户每天仅限1次提现。提现一般3~5天内到账（您理解并同意如遇提现高峰，提现到账时间会延长）。提现申请需要审核，审核预计时间为24小时。", "4.为保证用户顺利提现，提现需用户按照提现页面操作规范，完成用户本人实名认证或其他法律法规要求的步骤，如用户未按提现要求操作或不符合第三方支付平台的要求等原因导致不能收款（如未完成实名认证或提现前将支付账号与本平台账号解绑等），所获得的金币将无法提现，本平台无需承担任何责任。", "5.未成年人用户应该在其监护人的陪同下使用本App，并应在征得其监护人的同意后进行，用户均应确保提供的信息准确无误，如因填写信息错误等非平台原因导致不能提现/兑换，视为用户自愿放弃全部金额，平台不承担责任。", "6.本应用先进的人工智能分析您的行为，在提现/兑换过程中，为更好的保护用户账号及相关资产的安全，本平台有权对您的提现次数、金额和账号的数量进行限制，并随时提高安全效验措施（包括但不限于短信验证、身份效验等手段），如用户未能通过安全效验的则将无法提现/兑换，如发现造假或其他不正当手段及舞弊行为，我们有权阻止您使用（填写邀请码、领取金币、提现、获取奖励）以及取消您获得的奖励。用户应自行承担因此不能提现/兑换所导致的不利后果，本平台对此不承担责任。", "7.按照相关法律规定，主办方需要就用户在本活动下所得进行代扣代缴个人所得税的，主办方有权依法代扣缴，用户获得金额为税后金额。"]},
                            onInit() {
                            },
                            onDestroy() {
                            },
                            popCancelAction() {
                                this.$emit("cancelClick")
                            },
                            popSureAction() {
                                this.$emit("sureClick", {param: {}})
                            }
                        }
                    }
                }, 296: t => {
                    t.exports = function (t, e, a) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, e.default = {
                            props: {
                                cashNum: {
                                    type: [Number, String],
                                    default: ""
                                }
                            },
                            data: {
                                timestamp: 0,
                                noteList: [{content: "请确认支付宝账号信息无误，若有误金额将无法退回。"}, {content: "金额在5元以上将在次日的11点左右到帐。"}]
                            },
                            onInit() {
                            },
                            onDestroy() {
                            },
                            complainCancelAction() {
                                this.$emit("cancelClick")
                            },
                            changeAccount() {
                                this.$emit("changeClick")
                            },
                            complainSureAction() {
                                this.$emit("sureClick", {param: {}})
                            }
                        }
                    }
                }, 3356: t => {
                    t.exports = function (t, e, a) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, e.default = {
                            data: {},
                            onInit() {
                            },
                            onDestroy() {
                            },
                            complainCancelAction() {
                                this.$emit("cancelClick")
                            },
                            complainSureAction() {
                                this.$emit("sureClick", {param: {}})
                            }
                        }
                    }
                }, 5256: t => {
                    t.exports = function (t, e, a) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, e.default = {
                            data: {
                                payAccount: "",
                                payName: "",
                                timestamp: 0,
                                noteList: [{content: "使用支付宝提现需要您已经注册支付宝且实名认证通过。 "}, {content: "支付宝账号是您平时用于登录支付宝的号。"}, {content: "若支付宝账号与姓名不符将提现失败请认真填写。"}, {content: "为了您的提现记录方便查询、账户安全校验，您确认同意我们可保留您提交的账户信息，同时我们不会用作其他用途。"}]
                            }, onInit() {
                            }, onDestroy() {
                            }, popContentClick(t) {
                                this.$element("contactInput").focus({focus: !1})
                            }, complainContentChange(t) {
                                this.complaintContent = t.text
                            }, textareaClick(t) {
                                t.stopPropagation()
                            }, accountChange(t) {
                                this.payAccount = t.value
                            }, nameChange(t) {
                                this.payName = t.value
                            }, inputClick(t) {
                                t.stopPropagation()
                            }, complainCancelAction() {
                                this.$emit("cancelClick")
                            }, complainSureAction() {
                                this.payAccount ? this.payName ? this.$emit("sureClick", {
                                    param: {
                                        account: this.payAccount,
                                        account_name: this.payName
                                    }
                                }) : $utils.showToast("姓名不能为空！", 0) : $utils.showToast("账号不能为空！", 0)
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
                }, 9729: t => {
                    t.exports = {
                        ".loadingView": {
                            position: "fixed",
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        ".loadingView .loadingViewImage": {
                            width: "202px",
                            height: "202px",
                            backgroundColor: "#ffffff",
                            borderRadius: "16px",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "loadingView"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "loadingViewImage"}]
                            }
                        },
                        ".loadingView .loadingViewImage image": {
                            width: "78px",
                            height: "78px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "loadingView"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "loadingViewImage"
                                }, {t: "d"}, {t: "t", n: "image"}]
                            }
                        },
                        ".loadingView .loadingViewImage text": {
                            height: "28px",
                            fontSize: "28px",
                            fontWeight: "500",
                            color: "#666666",
                            lineHeight: "28px",
                            marginTop: "32px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "loadingView"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "loadingViewImage"
                                }, {t: "d"}, {t: "t", n: "text"}]
                            }
                        }
                    }
                }, 8865: t => {
                    t.exports = {
                        ".bgPopWindow": {
                            position: "fixed",
                            flexDirection: "column",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0,0,0,0.85)",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        ".popContent": {
                            width: "660px",
                            height: "398px",
                            backgroundColor: "#ffffff",
                            alignItems: "center",
                            justifyContent: "space-around",
                            paddingTop: "40px",
                            paddingBottom: "40px",
                            flexDirection: "column",
                            borderRadius: "20px"
                        },
                        ".popTitle": {height: "41px", fontSize: "44px", color: "#333333", fontWeight: "600"},
                        ".popMessage": {fontSize: "30px", color: "#333333", fontWeight: "600"},
                        ".buttonContent": {
                            width: "540px",
                            height: "90px",
                            justifyContent: "space-between",
                            marginTop: "30px"
                        },
                        ".buttonCancel": {
                            backgroundColor: "#ffffff",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderStyle: "solid",
                            borderTopColor: "#ff504f",
                            borderRightColor: "#ff504f",
                            borderBottomColor: "#ff504f",
                            borderLeftColor: "#ff504f",
                            fontSize: "30px",
                            borderRadius: "38px",
                            color: "#ff504f",
                            textAlign: "center",
                            width: "245px",
                            height: "77px"
                        },
                        ".buttonSure": {
                            background: '{"values":[{"type":"linearGradient","directions":["to","right"],"values":["#ff744f","#ff4f4f"]}]}',
                            color: "#ffffff",
                            borderRadius: "38px",
                            fontSize: "30px",
                            textAlign: "center",
                            width: "245px",
                            height: "77px"
                        }
                    }
                }, 2785: t => {
                    t.exports = {
                        ".bgPopWindow": {
                            position: "fixed",
                            flexDirection: "column",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0,0,0,0.85)",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        ".popContent": {
                            width: "660px",
                            height: "720px",
                            backgroundColor: "#ffffff",
                            alignItems: "center",
                            justifyContent: "space-around",
                            paddingTop: "40px",
                            paddingBottom: "40px",
                            flexDirection: "column",
                            borderRadius: "20px"
                        },
                        ".popTitle": {
                            height: "48px",
                            fontSize: "36px",
                            color: "#333333",
                            fontWeight: "600",
                            marginBottom: "25px"
                        },
                        ".popMessage": {
                            fontSize: "30px",
                            color: "#333333",
                            paddingTop: "0px",
                            paddingRight: "40px",
                            paddingBottom: "0px",
                            paddingLeft: "40px"
                        },
                        ".buttonContent": {
                            width: "540px",
                            height: "105px",
                            justifyContent: "space-between",
                            marginTop: "30px"
                        },
                        ".buttonCancel": {
                            backgroundColor: "#ffffff",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderStyle: "solid",
                            borderTopColor: "#ff504f",
                            borderRightColor: "#ff504f",
                            borderBottomColor: "#ff504f",
                            borderLeftColor: "#ff504f",
                            fontSize: "30px",
                            borderRadius: "38px",
                            color: "#ff504f",
                            textAlign: "center",
                            width: "245px",
                            height: "77px"
                        },
                        ".buttonSure": {
                            background: '{"values":[{"type":"linearGradient","directions":["to","right"],"values":["#ff744f","#ff4f4f"]}]}',
                            color: "#ffffff",
                            borderRadius: "38px",
                            fontSize: "30px",
                            textAlign: "center",
                            width: "569px",
                            height: "77px"
                        }
                    }
                }, 2485: t => {
                    t.exports = {
                        ".ticket-record-wrapper": {
                            flexDirection: "column",
                            background: '{"values":[{"type":"linearGradient","directions":["to","right"],"values":["#FFEDDA","#FDD3AB"]}]}',
                            width: "750px",
                            height: "100%"
                        },
                        ".ticket-record-wrapper .cash-header-box": {
                            width: "690px",
                            height: "303px",
                            marginTop: "30px",
                            marginRight: "auto",
                            marginBottom: "30px",
                            marginLeft: "auto",
                            borderRadius: "25px",
                            backgroundColor: "#ffffff",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "cash-header-box"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-header-box .cash-header-content": {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
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
                                    v: "cash-header-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "cash-header-content"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-header-box .cash-header-content .header-cash-box": {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
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
                                    v: "cash-header-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "cash-header-content"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "header-cash-box"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-header-box .cash-header-content .header-cash-box .cash-font": {
                            fontSize: "72px",
                            color: "#FF4F4F",
                            fontWeight: "550",
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
                                    v: "cash-header-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "cash-header-content"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "header-cash-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "cash-font"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-header-box .cash-header-content .header-fonts": {
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
                                    v: "cash-header-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "cash-header-content"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "header-fonts"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-header-box .cash-header-font": {
                            textAlign: "center",
                            marginBottom: "30px",
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
                                    v: "cash-header-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "cash-header-font"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-header-box .cash-header-font image": {
                            marginRight: "10px",
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
                                    v: "cash-header-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "cash-header-font"
                                }, {t: "d"}, {t: "t", n: "image"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-header-box .cash-header-font text": {
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
                                    v: "cash-header-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "cash-header-font"
                                }, {t: "d"}, {t: "t", n: "text"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-detail-section": {
                            backgroundColor: "#ffffff",
                            borderRadius: "25px",
                            width: "690px",
                            height: "80%",
                            marginTop: "0px",
                            marginRight: "auto",
                            marginBottom: "30px",
                            marginLeft: "auto",
                            display: "flex",
                            flexDirection: "column",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "cash-detail-section"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-detail-section .detail-title-box": {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            height: "70px",
                            paddingTop: "30px",
                            paddingRight: "26px",
                            paddingBottom: "0px",
                            paddingLeft: "26px",
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
                                    v: "cash-detail-section"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "detail-title-box"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-detail-section .detail-title-box div": {
                            display: "flex",
                            alignItems: "center",
                            height: "70px",
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
                                    v: "cash-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "detail-title-box"
                                }, {t: "d"}, {t: "t", n: "div"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-detail-section .detail-title-box div .title-font": {
                            fontSize: "30px",
                            color: "#333333",
                            fontWeight: "550",
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
                                    v: "cash-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "detail-title-box"
                                }, {t: "d"}, {t: "t", n: "div"}, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "title-font"
                                }]
                            }
                        },
                        ".ticket-record-wrapper .cash-detail-section .detail-title-box div image": {
                            marginRight: "10px",
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
                                    v: "cash-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "detail-title-box"
                                }, {t: "d"}, {t: "t", n: "div"}, {t: "d"}, {t: "t", n: "image"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-detail-section .detail-title-box .service-font": {
                            width: "120px",
                            height: "46px",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderStyle: "solid",
                            borderTopColor: "#c6c6c6",
                            borderRightColor: "#c6c6c6",
                            borderBottomColor: "#c6c6c6",
                            borderLeftColor: "#c6c6c6",
                            borderRadius: "23px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
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
                                    v: "cash-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "detail-title-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "service-font"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-detail-section .detail-title-box .service-font image": {
                            marginRight: "10px",
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
                                    v: "cash-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "detail-title-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "service-font"
                                }, {t: "d"}, {t: "t", n: "image"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-detail-section .detail-title-box .service-font text": {
                            fontSize: "24px",
                            color: "#c6c6c6",
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
                                    v: "cash-detail-section"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "detail-title-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "service-font"
                                }, {t: "d"}, {t: "t", n: "text"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-content-box": {
                            width: "100%",
                            display: "flex",
                            flexWrap: "wrap",
                            marginTop: "30px",
                            justifyContent: "space-between",
                            paddingTop: "0px",
                            paddingRight: "26px",
                            paddingBottom: "0px",
                            paddingLeft: "26px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "cash-content-box"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-content-box .cash-content": {
                            width: "306px",
                            height: "185px",
                            backgroundColor: "#f4f4f4",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderStyle: "solid",
                            borderTopColor: "#f4f4f4",
                            borderRightColor: "#f4f4f4",
                            borderBottomColor: "#f4f4f4",
                            borderLeftColor: "#f4f4f4",
                            borderRadius: "15px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
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
                                    v: "cash-content-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "cash-content"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-content-box .cash-content .cash-default": {
                            fontSize: "52px",
                            color: "#333333",
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
                                    v: "cash-content-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "cash-content"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "cash-default"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-content-box .cash-content .unit-default": {
                            fontSize: "26px",
                            color: "#333333",
                            marginTop: "20px",
                            marginRight: "0px",
                            marginBottom: "0px",
                            marginLeft: "5px",
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
                                    v: "cash-content-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "cash-content"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "unit-default"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-content-box .cash-style": {
                            width: "306px",
                            height: "185px",
                            backgroundColor: "#D0E8FF",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderStyle: "solid",
                            borderTopColor: "#008EE8",
                            borderRightColor: "#008EE8",
                            borderBottomColor: "#008EE8",
                            borderLeftColor: "#008EE8",
                            borderRadius: "15px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
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
                                    v: "cash-content-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "cash-style"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-content-box .cash-style .cash-val": {
                            fontSize: "52px",
                            color: "#008EE8",
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
                                    v: "cash-content-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "cash-style"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "cash-val"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-content-box .cash-style .cash-unit": {
                            fontSize: "26px",
                            color: "#008EE8",
                            marginTop: "20px",
                            marginRight: "0px",
                            marginBottom: "0px",
                            marginLeft: "5px",
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
                                    v: "cash-content-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "cash-style"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "cash-unit"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-content-box .showNew": {
                            display: "flex",
                            position: "absolute",
                            right: "0px",
                            top: "0px",
                            width: "120px",
                            height: "46px",
                            backgroundColor: "#FF4F4F",
                            borderTopRightRadius: "10px",
                            borderBottomLeftRadius: "10px",
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
                                    v: "cash-content-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "showNew"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-content-box .showNew text": {
                            color: "#FFFFFF",
                            fontSize: "22px",
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
                                    v: "cash-content-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "showNew"}, {t: "d"}, {
                                    t: "t",
                                    n: "text"
                                }]
                            }
                        },
                        ".ticket-record-wrapper .cash-content-box .hideNew": {
                            display: "none",
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
                                    v: "cash-content-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "hideNew"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-content-box .showSeclet": {
                            position: "absolute",
                            right: "0px",
                            bottom: "0px",
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
                                    v: "cash-content-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "showSeclet"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-content-box .hideSeclet": {
                            position: "absolute",
                            right: "0px",
                            bottom: "0px",
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
                                    v: "cash-content-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "hideSeclet"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-footer-box": {
                            width: "100%",
                            position: "fixed",
                            bottom: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "ticket-record-wrapper"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "cash-footer-box"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-footer-box text": {
                            color: "rgba(51,51,51,0.66)",
                            fontSize: "22px",
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
                                    v: "cash-footer-box"
                                }, {t: "d"}, {t: "t", n: "text"}]
                            }
                        },
                        ".ticket-record-wrapper .cash-footer-box div": {
                            marginTop: "0px",
                            marginRight: "39px",
                            marginBottom: "0px",
                            marginLeft: "39px",
                            backgroundColor: "rgba(51,51,51,0.66)",
                            width: "1px",
                            height: "20px",
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
                                    v: "cash-footer-box"
                                }, {t: "d"}, {t: "t", n: "div"}]
                            }
                        }
                    }
                }, 47: t => {
                    t.exports = {
                        ".bgPopWindow": {
                            position: "fixed",
                            flexDirection: "column",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0,0,0,0.85)",
                            alignItems: "center",
                            justifyContent: "flex-end"
                        },
                        ".popContent": {
                            width: "660px",
                            height: "665px",
                            backgroundColor: "#ffffff",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: "40px",
                            paddingBottom: "40px",
                            flexDirection: "column",
                            borderRadius: "20px",
                            marginBottom: "80px"
                        },
                        ".popTitle": {
                            height: "38px",
                            fontSize: "38px",
                            fontWeight: "bold",
                            color: "#333333",
                            marginBottom: "55px"
                        },
                        ".close-icon": {
                            width: "28px",
                            height: "28px",
                            position: "absolute",
                            top: "20px",
                            right: "25px"
                        },
                        ".buttonContent": {
                            width: "540px",
                            height: "76px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "30px",
                            background: '{"values":[{"type":"linearGradient","directions":["to","right"],"values":["#ff744f","#ff4f4f"]}]}',
                            borderRadius: "40px"
                        },
                        ".buttonContent image": {
                            marginTop: "5px",
                            marginRight: "20px",
                            marginBottom: "0px",
                            marginLeft: "0px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "buttonContent"
                                }, {t: "d"}, {t: "t", n: "image"}]
                            }
                        },
                        ".buttonCancle": {
                            backgroundColor: "#f4f4f4",
                            fontSize: "32px",
                            borderRadius: "38px",
                            color: "#a0a0a0",
                            textAlign: "center",
                            width: "248px",
                            height: "76px"
                        },
                        ".buttonSure": {color: "#ffffff", fontSize: "30px", fontWeight: "600"},
                        ".inputBorder": {
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderStyle: "solid",
                            borderTopColor: "#ececec",
                            borderRightColor: "#ececec",
                            borderBottomColor: "#ececec",
                            borderLeftColor: "#ececec",
                            borderTopLeftRadius: "4px",
                            borderTopRightRadius: "4px",
                            borderBottomLeftRadius: "4px"
                        },
                        ".pay-pop-box": {
                            width: "584px",
                            height: "88px",
                            borderRadius: "10px",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderStyle: "solid",
                            borderTopColor: "#333333",
                            borderRightColor: "#333333",
                            borderBottomColor: "#333333",
                            borderLeftColor: "#333333",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        },
                        ".pay-pop-box div": {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginLeft: "25px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "pay-pop-box"
                                }, {t: "d"}, {t: "t", n: "div"}]
                            }
                        },
                        ".pay-pop-box div image": {
                            marginRight: "10px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "pay-pop-box"
                                }, {t: "d"}, {t: "t", n: "div"}, {t: "d"}, {t: "t", n: "image"}]
                            }
                        },
                        ".pay-pop-box div text": {
                            fontSize: "26px",
                            fontWeight: "bold",
                            color: "#333333",
                            lines: 1,
                            textOverflow: "ellipsis",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "pay-pop-box"
                                }, {t: "d"}, {t: "t", n: "div"}, {t: "d"}, {t: "t", n: "text"}]
                            }
                        },
                        ".pay-pop-box .input-right-font": {
                            fontSize: "26px",
                            marginRight: "10px",
                            width: "150px",
                            textAlign: "center",
                            color: "#009fe8",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "pay-pop-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "input-right-font"}]
                            }
                        },
                        ".pay-font-box": {
                            width: "584px",
                            height: "145px",
                            backgroundColor: "rgba(244,244,244,0.6)",
                            marginTop: "40px",
                            display: "flex",
                            flexDirection: "column",
                            paddingTop: "20px",
                            paddingRight: "20px",
                            paddingBottom: "20px",
                            paddingLeft: "20px",
                            justifyContent: "space-around"
                        },
                        ".pay-font-box .pay-note-title": {
                            fontSize: "20px",
                            color: "#333333",
                            fontWeight: "600",
                            marginBottom: "10px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "pay-font-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "pay-note-title"}]
                            }
                        },
                        ".pay-font-box .pay-note-font": {
                            fontSize: "18px",
                            color: "#333333",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "pay-font-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "pay-note-font"}]
                            }
                        },
                        ".confirm-title-box": {
                            display: "flex",
                            width: "584px",
                            marginTop: "0px",
                            marginRight: "auto",
                            marginBottom: "40px",
                            marginLeft: "auto",
                            justifyContent: "space-between"
                        },
                        ".confirm-title-box .title-left-font": {
                            fontSize: "32px",
                            color: "#333333",
                            fontFamily: "550",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "confirm-title-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "title-left-font"}]
                            }
                        },
                        ".confirm-title-box .title-right-font": {
                            display: "flex",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "confirm-title-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "title-right-font"}]
                            }
                        },
                        ".confirm-title-box .title-right-font .title-right-val": {
                            fontSize: "52px",
                            color: "#ff4f4f",
                            fontFamily: "550",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "confirm-title-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "title-right-font"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "title-right-val"}]
                            }
                        },
                        ".confirm-title-box .title-right-font .title-right-unit": {
                            fontSize: "26px",
                            color: "#ff4f4f",
                            fontFamily: "550",
                            marginTop: "10px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "confirm-title-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "title-right-font"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "title-right-unit"}]
                            }
                        }
                    }
                }, 8828: t => {
                    t.exports = {
                        ".bgPopWindow": {
                            position: "fixed",
                            flexDirection: "column",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0,0,0,0.85)",
                            alignItems: "center",
                            justifyContent: "flex-end"
                        },
                        ".popContent": {
                            width: "660px",
                            height: "761px",
                            backgroundColor: "#ffffff",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: "40px",
                            paddingBottom: "40px",
                            flexDirection: "column",
                            borderRadius: "20px",
                            marginBottom: "80px"
                        },
                        ".popTitle": {
                            height: "38px",
                            fontSize: "38px",
                            fontWeight: "bold",
                            color: "#333333",
                            marginBottom: "55px"
                        },
                        ".close-icon": {
                            width: "28px",
                            height: "28px",
                            position: "absolute",
                            top: "20px",
                            right: "25px"
                        },
                        ".buttonContent": {
                            width: "540px",
                            height: "76px",
                            justifyContent: "space-between",
                            marginTop: "30px"
                        },
                        ".buttonCancle": {
                            backgroundColor: "#f4f4f4",
                            fontSize: "32px",
                            borderRadius: "38px",
                            color: "#a0a0a0",
                            textAlign: "center",
                            width: "248px",
                            height: "76px"
                        },
                        ".buttonSure": {
                            background: '{"values":[{"type":"linearGradient","directions":["to","right"],"values":["#ff744f","#ff4f4f"]}]}',
                            color: "#ffffff",
                            borderRadius: "40px",
                            fontSize: "30px",
                            textAlign: "center",
                            width: "584px",
                            height: "77px"
                        },
                        ".tips-box": {width: "100%"},
                        ".tips-box text": {
                            fontSize: "44px",
                            color: "#333333",
                            fontWeight: "550",
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
                                    v: "tips-box"
                                }, {t: "d"}, {t: "t", n: "text"}]
                            }
                        },
                        ".tips-content-box": {
                            width: "584px",
                            height: "274px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "40px",
                            marginRight: "auto",
                            marginBottom: "40px",
                            marginLeft: "auto"
                        },
                        ".tips-content-box .tips-img-box": {
                            display: "flex",
                            width: "70%",
                            justifyContent: "space-around",
                            alignItems: "center",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "tips-content-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "tips-img-box"}]
                            }
                        },
                        ".tips-content-box .tips-img-box image": {
                            marginTop: "0px",
                            marginRight: "20px",
                            marginBottom: "0px",
                            marginLeft: "20px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "tips-content-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "tips-img-box"
                                }, {t: "d"}, {t: "t", n: "image"}]
                            }
                        },
                        ".tips-content-box .tips-font-box": {
                            width: "100%",
                            marginTop: "60px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "tips-content-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "tips-font-box"}]
                            }
                        },
                        ".tips-content-box .tips-font-box text": {
                            fontSize: "22px",
                            color: "#333333",
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
                                    v: "tips-content-box"
                                }, {t: "d"}, {
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "tips-font-box"
                                }, {t: "d"}, {t: "t", n: "text"}]
                            }
                        }
                    }
                }, 3343: t => {
                    t.exports = {
                        ".bgPopWindow": {
                            position: "fixed",
                            flexDirection: "column",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0,0,0,0.85)",
                            alignItems: "center",
                            justifyContent: "flex-end"
                        },
                        ".popContent": {
                            width: "660px",
                            height: "761px",
                            backgroundColor: "#ffffff",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: "40px",
                            paddingBottom: "40px",
                            flexDirection: "column",
                            borderRadius: "20px",
                            marginBottom: "80px"
                        },
                        ".popTitle": {
                            height: "38px",
                            fontSize: "38px",
                            fontWeight: "bold",
                            color: "#333333",
                            marginBottom: "55px"
                        },
                        ".close-icon": {
                            width: "28px",
                            height: "28px",
                            position: "absolute",
                            top: "20px",
                            right: "25px"
                        },
                        ".buttonContent": {
                            width: "540px",
                            height: "76px",
                            justifyContent: "space-between",
                            marginTop: "30px"
                        },
                        ".buttonCancle": {
                            backgroundColor: "#f4f4f4",
                            fontSize: "32px",
                            borderRadius: "38px",
                            color: "#a0a0a0",
                            textAlign: "center",
                            width: "248px",
                            height: "76px"
                        },
                        ".buttonSure": {
                            background: '{"values":[{"type":"linearGradient","directions":["to","right"],"values":["#ff744f","#ff4f4f"]}]}',
                            color: "#ffffff",
                            borderRadius: "40px",
                            fontSize: "30px",
                            textAlign: "center",
                            width: "584px",
                            height: "77px"
                        },
                        ".inputBorder": {
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderStyle: "solid",
                            borderTopColor: "#ececec",
                            borderRightColor: "#ececec",
                            borderBottomColor: "#ececec",
                            borderLeftColor: "#ececec",
                            borderTopLeftRadius: "4px",
                            borderTopRightRadius: "4px",
                            borderBottomLeftRadius: "4px"
                        },
                        ".pay-pop-box": {
                            width: "584px",
                            height: "88px",
                            borderRadius: "10px",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderStyle: "solid",
                            borderTopColor: "#333333",
                            borderRightColor: "#333333",
                            borderBottomColor: "#333333",
                            borderLeftColor: "#333333",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        },
                        ".pay-pop-box div": {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginLeft: "25px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "pay-pop-box"
                                }, {t: "d"}, {t: "t", n: "div"}]
                            }
                        },
                        ".pay-pop-box div image": {
                            marginRight: "10px",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "pay-pop-box"
                                }, {t: "d"}, {t: "t", n: "div"}, {t: "d"}, {t: "t", n: "image"}]
                            }
                        },
                        ".pay-pop-box div text": {
                            fontSize: "30px",
                            fontWeight: "bold",
                            color: "#333333",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "pay-pop-box"
                                }, {t: "d"}, {t: "t", n: "div"}, {t: "d"}, {t: "t", n: "text"}]
                            }
                        },
                        ".pay-pop-box input": {
                            width: "60%",
                            height: "40px",
                            fontSize: "26px",
                            textAlign: "right",
                            marginRight: "25px",
                            borderTopColor: "#ffffff",
                            borderRightColor: "#ffffff",
                            borderBottomColor: "#ffffff",
                            borderLeftColor: "#ffffff",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "pay-pop-box"
                                }, {t: "d"}, {t: "t", n: "input"}]
                            }
                        },
                        ".pay-font-box": {
                            width: "584px",
                            height: "224px",
                            backgroundColor: "rgba(244,244,244,0.6)",
                            marginTop: "20px",
                            display: "flex",
                            flexDirection: "column",
                            paddingTop: "20px",
                            paddingRight: "20px",
                            paddingBottom: "20px",
                            paddingLeft: "20px",
                            justifyContent: "space-around"
                        },
                        ".pay-font-box .pay-note-title": {
                            fontSize: "20px",
                            color: "#333333",
                            fontWeight: "600",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "pay-font-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "pay-note-title"}]
                            }
                        },
                        ".pay-font-box .pay-note-font": {
                            fontSize: "18px",
                            color: "#333333",
                            _meta: {
                                ruleDef: [{
                                    t: "a",
                                    n: "class",
                                    i: !1,
                                    a: "element",
                                    v: "pay-font-box"
                                }, {t: "d"}, {t: "a", n: "class", i: !1, a: "element", v: "pay-note-font"}]
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
                }, 1058: t => {
                    t.exports = {
                        type: "stack",
                        attr: {},
                        children: [{
                            type: "div",
                            attr: {},
                            classList: ["loadingView"],
                            shown: function () {
                                return this.isLoading
                            },
                            children: [{
                                type: "div",
                                attr: {},
                                classList: ["loadingViewImage"],
                                children: [{type: "image", attr: {src: "/assets/images/load.gif"}}, {
                                    type: "text",
                                    attr: {value: "加载中..."}
                                }]
                            }]
                        }]
                    }
                }, 4413: t => {
                    t.exports = {
                        type: "div",
                        attr: {},
                        children: [{
                            type: "div",
                            attr: {},
                            classList: ["bgPopWindow"],
                            children: [{
                                type: "div",
                                attr: {},
                                classList: ["popContent"],
                                events: {click: "popContentClick"},
                                children: [{
                                    type: "text", attr: {
                                        value: function () {
                                            return this.messageVal.title
                                        }
                                    }, classList: ["popTitle"]
                                }, {
                                    type: "div", attr: {}, children: [{
                                        type: "text", attr: {
                                            value: function () {
                                                return this.messageVal.content
                                            }
                                        }, classList: ["popMessage"]
                                    }]
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["buttonContent"],
                                    children: [{
                                        type: "text", attr: {
                                            value: function () {
                                                return this.messageVal.leftBtn
                                            }
                                        }, classList: ["buttonSure"], events: {click: "popCancelAction"}
                                    }, {
                                        type: "text", attr: {
                                            value: function () {
                                                return this.messageVal.rightBtn
                                            }
                                        }, classList: ["buttonCancel"], events: {click: "popSureAction"}
                                    }]
                                }]
                            }]
                        }]
                    }
                }, 1919: t => {
                    t.exports = {
                        type: "div",
                        attr: {},
                        children: [{
                            type: "div",
                            attr: {},
                            classList: ["bgPopWindow"],
                            children: [{
                                type: "div",
                                attr: {},
                                classList: ["popContent"],
                                children: [{
                                    type: "text",
                                    attr: {value: "规则说明"},
                                    classList: ["popTitle"]
                                }, {
                                    type: "list",
                                    attr: {},
                                    children: [{
                                        type: "list-item", attr: {}, repeat: function () {
                                            return this.ruleText
                                        }, children: [{
                                            type: "text", attr: {
                                                value: function () {
                                                    return this.$item
                                                }
                                            }, classList: ["popMessage"]
                                        }]
                                    }]
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["buttonContent"],
                                    children: [{
                                        type: "text",
                                        attr: {value: "我知道啦"},
                                        classList: ["buttonSure"],
                                        events: {click: "popSureAction"}
                                    }]
                                }]
                            }]
                        }]
                    }
                }, 2710: t => {
                    t.exports = {
                        type: "div",
                        attr: {},
                        classList: ["ticket-record-wrapper"],
                        children: [{
                            type: "common-header", attr: {
                                title: "提现", textCenter: function () {
                                    return this.backTitleIsCenter
                                }
                            }, events: {"back-click": "pageBack"}
                        }, {
                            type: "div",
                            attr: {},
                            classList: ["cash-header-box"],
                            children: [{
                                type: "div",
                                attr: {},
                                classList: ["cash-header-content"],
                                children: [{
                                    type: "div",
                                    attr: {},
                                    classList: ["cash-header-font"],
                                    children: [{
                                        type: "image",
                                        attr: {src: "/assets/images/welfare/cash-icon.png"}
                                    }, {type: "text", attr: {value: "总金额（元）"}}]
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["header-cash-box"],
                                    children: [{
                                        type: "text", attr: {
                                            value: function () {
                                                return this.userIncome
                                            }
                                        }, classList: ["cash-font"]
                                    }]
                                }]
                            }]
                        }, {
                            type: "div",
                            attr: {},
                            classList: ["cash-detail-section"],
                            children: [{
                                type: "div",
                                attr: {},
                                classList: ["detail-title-box"],
                                children: [{
                                    type: "div",
                                    attr: {},
                                    children: [{
                                        type: "image",
                                        attr: {src: "/assets/images/welfare/pay-icon.png"}
                                    }, {type: "text", attr: {value: "支付宝提现"}, classList: ["title-font"]}]
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["service-font"],
                                    children: [{
                                        type: "image",
                                        attr: {src: "/assets/images/welfare/service-icon.png"}
                                    }, {type: "text", attr: {value: "客服"}}]
                                }]
                            }, {
                                type: "div",
                                attr: {},
                                classList: ["cash-content-box"],
                                children: [{
                                    type: "div",
                                    attr: {tid: "id"},
                                    repeat: {
                                        exp: function () {
                                            return this.cashList
                                        }, key: "index", value: "item"
                                    },
                                    classList: function () {
                                        return [this.item.isSeclet ? "cash-style" : "cash-content"]
                                    },
                                    events: {
                                        click: function (t) {
                                            return this.selectCash(this.item, t)
                                        }
                                    },
                                    children: [{
                                        type: "div",
                                        attr: {},
                                        children: [{
                                            type: "text", attr: {
                                                value: function () {
                                                    return this.item.amounts
                                                }
                                            }, classList: function () {
                                                return [this.item.isSeclet ? "cash-val" : "cash-default"]
                                            }
                                        }, {
                                            type: "text", attr: {value: "元"}, classList: function () {
                                                return [this.item.isSeclet ? "cash-unit" : "unit-default"]
                                            }
                                        }]
                                    }, {
                                        type: "image",
                                        attr: {src: "/assets/images/welfare/selected-cash.png"},
                                        classList: function () {
                                            return [this.item.isSeclet ? "showSeclet" : "hideSeclet"]
                                        }
                                    }, {
                                        type: "div", attr: {}, classList: function () {
                                            return [this.item.is_welfare ? "showNew" : "hideNew"]
                                        }, children: [{type: "text", attr: {value: "新人专享"}}]
                                    }]
                                }]
                            }, {
                                type: "div",
                                attr: {},
                                classList: ["cash-footer-box"],
                                children: [{
                                    type: "text",
                                    attr: {value: "规则说明"},
                                    events: {click: "rulesPop"}
                                }, {type: "div", attr: {}}, {
                                    type: "text",
                                    attr: {value: "提现记录"},
                                    events: {click: "goRecordPage"}
                                }]
                            }]
                        }, {
                            type: "payment-pop",
                            attr: {},
                            shown: function () {
                                return this.isShowPaymentPop
                            },
                            events: {
                                "sure-click": "paymentPopSureClickHandler",
                                "cancel-click": "paymentPopCancelClickHandler"
                            }
                        }, {
                            type: "cashconfirm-pop",
                            attr: {
                                cashNum: function () {
                                    return this.selectMoney
                                }
                            },
                            shown: function () {
                                return this.isShowConfirmPop
                            },
                            events: {
                                "sure-click": "confirmPopSureClickHandler",
                                "cancel-click": "confirmPopCancelClickHandler",
                                "change-click": "changeAccountClick"
                            }
                        }, {
                            type: "cashresult-pop",
                            attr: {},
                            shown: function () {
                                return this.isShowResultPop
                            },
                            events: {
                                "sure-click": "resultPopSureClickHandler",
                                "cancel-click": "resultPopCancelClickHandler"
                            }
                        }, {
                            type: "prompt-pop",
                            attr: {
                                messageVal: function () {
                                    return this.enoughObj
                                }
                            },
                            shown: function () {
                                return this.isShowEnoughPop
                            },
                            events: {
                                "sure-click": "enoughPopSureClickHandler",
                                "cancel-click": "enoughPopCancelClickHandler"
                            }
                        }, {
                            type: "rule-pop", attr: {
                                message: function () {
                                    return this.ruleContent
                                }
                            }, shown: function () {
                                return this.isShowRulePop
                            }, events: {"sure-click": "rulePoSureClickHandler"}
                        }, {
                            type: "common-loding", attr: {
                                loading: function () {
                                    return this.loading
                                }
                            }, shown: function () {
                                return this.loading
                            }
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
                }, 3235: t => {
                    t.exports = {
                        type: "div", attr: {}, children: [{
                            type: "div", attr: {}, classList: ["bgPopWindow"], children: [{
                                type: "div",
                                attr: {},
                                classList: ["popContent"],
                                children: [{
                                    type: "text",
                                    attr: {value: "提现确认"},
                                    classList: ["popTitle"]
                                }, {
                                    type: "image",
                                    attr: {src: "/assets/images/welfare/pop-close.png"},
                                    classList: ["close-icon"],
                                    events: {click: "complainCancelAction"}
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["confirm-title-box"],
                                    children: [{
                                        type: "text",
                                        attr: {value: "提现金额"},
                                        classList: ["title-left-font"]
                                    }, {
                                        type: "div",
                                        attr: {},
                                        classList: ["title-right-font"],
                                        children: [{
                                            type: "text", attr: {
                                                value: function () {
                                                    return this.cashNum
                                                }
                                            }, classList: ["title-right-val"]
                                        }, {type: "text", attr: {value: "元"}, classList: ["title-right-unit"]}]
                                    }]
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["pay-pop-box"],
                                    children: [{
                                        type: "div",
                                        attr: {},
                                        children: [{
                                            type: "image",
                                            attr: {src: "/assets/images/welfare/pay-icon.png"}
                                        }, {
                                            type: "text", attr: {
                                                value: function () {
                                                    return "支付宝提现（" + this.$app.$def.account + "）"
                                                }
                                            }
                                        }]
                                    }, {
                                        type: "text",
                                        attr: {value: "切换账号"},
                                        classList: ["input-right-font"],
                                        events: {click: "changeAccount"}
                                    }]
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["pay-font-box"],
                                    children: [{
                                        type: "text",
                                        attr: {value: "注意事项:"},
                                        classList: ["pay-note-title"]
                                    }, {
                                        type: "div", attr: {}, repeat: {
                                            exp: function () {
                                                return this.noteList
                                            }, key: "index", value: "item"
                                        }, children: [{
                                            type: "text", attr: {
                                                value: function () {
                                                    return this.index + 1 + "." + this.item.content
                                                }
                                            }, classList: ["pay-note-font"]
                                        }]
                                    }]
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["buttonContent"],
                                    children: [{
                                        type: "image",
                                        attr: {src: "/assets/images/welfare/pay-btn-icon.png"}
                                    }, {
                                        type: "text",
                                        attr: {value: "立即提现到支付宝"},
                                        classList: ["buttonSure"],
                                        events: {click: "complainSureAction"}
                                    }]
                                }]
                            }]
                        }]
                    }
                }, 9672: t => {
                    t.exports = {
                        type: "div", attr: {}, children: [{
                            type: "div",
                            attr: {},
                            classList: ["bgPopWindow"],
                            children: [{
                                type: "div",
                                attr: {},
                                classList: ["popContent"],
                                events: {click: "popContentClick"},
                                children: [{
                                    type: "text",
                                    attr: {value: "提现结果"},
                                    classList: ["popTitle"]
                                }, {
                                    type: "image",
                                    attr: {src: "/assets/images/welfare/pop-close.png"},
                                    classList: ["close-icon"],
                                    events: {click: "complainCancelAction"}
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["tips-box"],
                                    children: [{type: "text", attr: {value: "处理中·预计3天后到账"}}]
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["tips-content-box"],
                                    children: [{
                                        type: "div",
                                        attr: {},
                                        classList: ["tips-img-box"],
                                        children: [{
                                            type: "image",
                                            attr: {src: "/assets/images/welfare/pay-icon.png"},
                                            style: {width: "84px", height: "84px"}
                                        }, {
                                            type: "image",
                                            attr: {src: "/assets/images/welfare/from-icon.png"}
                                        }, {type: "image", attr: {src: "/assets/images/welfare/wallet-icon.png"}}]
                                    }, {
                                        type: "div",
                                        attr: {},
                                        classList: ["tips-font-box"],
                                        children: [{type: "text", attr: {value: "到账后可在支付宝「我的」-「账单」查询"}}]
                                    }]
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["buttonContent"],
                                    children: [{
                                        type: "text",
                                        attr: {value: "我知道啦"},
                                        classList: ["buttonSure"],
                                        events: {click: "complainSureAction"}
                                    }]
                                }]
                            }]
                        }]
                    }
                }, 8359: t => {
                    t.exports = {
                        type: "div", attr: {}, children: [{
                            type: "div", attr: {}, classList: ["bgPopWindow"], children: [{
                                type: "div",
                                attr: {},
                                classList: ["popContent"],
                                events: {click: "popContentClick"},
                                children: [{
                                    type: "text",
                                    attr: {value: "收款信息"},
                                    classList: ["popTitle"]
                                }, {
                                    type: "image",
                                    attr: {src: "/assets/images/welfare/pop-close.png"},
                                    classList: ["close-icon"],
                                    events: {click: "complainCancelAction"}
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["pay-pop-box"],
                                    children: [{
                                        type: "div",
                                        attr: {},
                                        children: [{
                                            type: "image",
                                            attr: {src: "/assets/images/welfare/pay-icon.png"}
                                        }, {type: "text", attr: {value: "支付宝"}}]
                                    }, {
                                        type: "input",
                                        attr: {
                                            id: "contactInput", placeholder: "请输入支付宝账号", value: function () {
                                                return this.payAccount
                                            }, type: "text"
                                        },
                                        id: "contactInput",
                                        classList: ["inputBorder"],
                                        events: {change: "accountChange", click: "inputClick"}
                                    }]
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["pay-pop-box"],
                                    style: {marginTop: "20px"},
                                    children: [{
                                        type: "div",
                                        attr: {},
                                        children: [{
                                            type: "image",
                                            attr: {src: "/assets/images/welfare/payname-icon.png"}
                                        }, {type: "text", attr: {value: "姓名"}}]
                                    }, {
                                        type: "input",
                                        attr: {
                                            id: "contactInput", placeholder: "请输入支付宝实名", value: function () {
                                                return this.payName
                                            }, type: "text"
                                        },
                                        id: "contactInput",
                                        classList: ["inputBorder"],
                                        events: {change: "nameChange", click: "inputClick"}
                                    }]
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["pay-font-box"],
                                    children: [{
                                        type: "text",
                                        attr: {value: "注意事项:"},
                                        classList: ["pay-note-title"]
                                    }, {
                                        type: "div", attr: {}, repeat: {
                                            exp: function () {
                                                return this.noteList
                                            }, key: "index", value: "item"
                                        }, children: [{
                                            type: "text", attr: {
                                                value: function () {
                                                    return this.index + 1 + "." + this.item.content
                                                }
                                            }, classList: ["pay-note-font"]
                                        }]
                                    }]
                                }, {
                                    type: "div",
                                    attr: {},
                                    classList: ["buttonContent"],
                                    children: [{
                                        type: "text",
                                        attr: {value: "确定"},
                                        classList: ["buttonSure"],
                                        events: {click: "complainSureAction"}
                                    }]
                                }]
                            }]
                        }]
                    }
                }, 1267: (t, e, a) => {
                    var i = a(1496), o = a(3899);
                    $app_define$("@app-component/back-app-button", [], (function (t, e, n) {
                        o(n, e, t), e.__esModule && e.default && (n.exports = e.default), n.exports.template = a(6547), n.exports.style = i
                    }))
                }, 3172: (t, e, a) => {
                    var i = a(4523), o = a(366);
                    $app_define$("@app-component/common-header", [], (function (t, e, n) {
                        o(n, e, t), e.__esModule && e.default && (n.exports = e.default), n.exports.template = a(3979), n.exports.style = i
                    }))
                }, 5259: (t, e, a) => {
                    var i = a(9729), o = a(5996);
                    $app_define$("@app-component/common-loding", [], (function (t, e, n) {
                        o(n, e, t), e.__esModule && e.default && (n.exports = e.default), n.exports.template = a(1058), n.exports.style = i
                    }))
                }, 7916: (t, e, a) => {
                    var i = a(8865), o = a(7810);
                    $app_define$("@app-component/prompt-pop", [], (function (t, e, n) {
                        o(n, e, t), e.__esModule && e.default && (n.exports = e.default), n.exports.template = a(4413), n.exports.style = i
                    }))
                }, 2842: (t, e, a) => {
                    var i = a(2785), o = a(55);
                    $app_define$("@app-component/rule-pop", [], (function (t, e, n) {
                        o(n, e, t), e.__esModule && e.default && (n.exports = e.default), n.exports.template = a(1919), n.exports.style = i
                    }))
                }, 3383: (t, e, a) => {
                    var i = a(47), o = a(296);
                    $app_define$("@app-component/cashconfirm-pop", [], (function (t, e, n) {
                        o(n, e, t), e.__esModule && e.default && (n.exports = e.default), n.exports.template = a(3235), n.exports.style = i
                    }))
                }, 3461: (t, e, a) => {
                    var i = a(8828), o = a(3356);
                    $app_define$("@app-component/cashresult-pop", [], (function (t, e, n) {
                        o(n, e, t), e.__esModule && e.default && (n.exports = e.default), n.exports.template = a(9672), n.exports.style = i
                    }))
                }, 7214: (t, e, a) => {
                    var i = a(3343), o = a(5256);
                    $app_define$("@app-component/payment-pop", [], (function (t, e, n) {
                        o(n, e, t), e.__esModule && e.default && (n.exports = e.default), n.exports.template = a(8359), n.exports.style = i
                    }))
                }
            }, e = {};

            function a(i) {
                var o = e[i];
                if (void 0 !== o) return o.exports;
                var n = e[i] = {exports: {}};
                return t[i](n, n.exports, a), n.exports
            }

            (() => {
                a(3172), a(1267), a(7214), a(3383), a(3461), a(7916), a(2842), a(5259);
                var t = a(2485), e = a(5889);
                $app_define$("@app-component/index", [], (function (i, o, n) {
                    e(n, o, i), o.__esModule && o.default && (n.exports = o.default), n.exports.template = a(2710), n.exports.style = t
                })), $app_bootstrap$("@app-component/index", {packagerVersion: "1.9.14"})
            })()
        })()
    };
    if ("undefined" == typeof window) return t();
    window.createPageHandler = t
}();