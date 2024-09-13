!function () {
    var t = function () {
        return (() => {
            var t = {
                6778: t => {
                    t.exports = function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
                        var i, r = (i = n("@app-module/system.router")) && i.__esModule ? i : {default: i};
                        e.default = {
                            data: {websrc: ""}, onInit() {
                                this.websrc = this.url, this.$app.$def.pageCodeInfo.pathUrl && this.$app.$def.bqt_ad_id && this.$app.$def.bqt_ad_position
                            }, onBackPress() {
                                return !!this.entry && (r.default.clear(), r.default.replace({uri: this.entry}), !0)
                            }
                        };
                        const o = e.default || t.exports, a = ["public", "protected", "private"];
                        if (o.data && a.some((function (t) {
                            return o[t]
                        }))) throw new Error('页面VM对象中的属性data不可与"' + a.join(",") + '"同时存在，请使用private替换data名称');
                        o.data || (o.data = {}, o._descriptor = {}, a.forEach((function (t) {
                            const e = typeof o[t];
                            if ("object" === e) {
                                o.data = Object.assign(o.data, o[t]);
                                for (const e in o[t]) o._descriptor[e] = {access: t}
                            } else "function" === e && console.warn("页面VM对象中的属性" + t + "的值不能是函数，请使用对象")
                        })))
                    }
                }, 1434: (t, e, n) => {
                    t.exports = function (t, e, i) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
                        var r = n(4078);
                        e.default = {
                            props: ["url", "vurl", "w_picurl"],
                            data: {
                                videosrc: "",
                                poster: "",
                                websrc: "",
                                allow: !1,
                                isLoading: !0,
                                style: {},
                                title: "",
                                backPng: "",
                                isFullScreen: !1
                            },
                            onInit() {
                                r.defineAdComponent.call(this, "web")
                            },
                            onTitleReceive(t) {
                                r.dispatchAdEvent.call(this, "onTitleReceive", t)
                            },
                            onVideoFinish(t) {
                                r.dispatchAdEvent.call(this, "onVideoFinish", t)
                            },
                            onHandleBack(t) {
                                r.dispatchAdEvent.call(this, "onHandleBack", t)
                            }
                        }
                    }
                }, 8527: t => {
                    t.exports = {
                        type: "div", attr: {}, style: function () {
                            return this.style.landingContainer
                        }, children: [{
                            type: "div", attr: {}, style: function () {
                                return this.style.landingBar
                            }, shown: function () {
                                return this.isFullScreen
                            }, children: [{
                                type: "image", attr: {
                                    src: function () {
                                        return this.backPng
                                    }
                                }, events: {click: "onHandleBack"}, style: function () {
                                    return this.style.landingBtn
                                }
                            }, {
                                type: "text", attr: {
                                    value: function () {
                                        return this.title
                                    }
                                }, style: function () {
                                    return this.style.landingTitle
                                }
                            }]
                        }, {
                            type: "video", attr: {
                                muted: function () {
                                    return this.muted
                                }, autoplay: function () {
                                    return this.autoplay
                                }, src: function () {
                                    return this.videosrc
                                }, poster: function () {
                                    return this.poster
                                }, id: "lp-video"
                            }, shown: function () {
                                return this.videosrc
                            }, style: function () {
                                return this.style.videoContainer
                            }, id: "lp-video", events: {finish: "onVideoFinish"}
                        }, {
                            type: "web", attr: {
                                src: function () {
                                    return this.websrc
                                }, allowthirdpartycookies: function () {
                                    return this.allow
                                }, id: "web"
                            }, style: function () {
                                return this.style.landingWeb
                            }, events: {titlereceive: "onTitleReceive"}, id: "web"
                        }, {
                            type: "div", attr: {}, style: function () {
                                return this.style.loadingContainer
                            }, shown: function () {
                                return this.isLoading
                            }, children: [{
                                type: "text", attr: {value: "加载中..."}, style: function () {
                                    return this.style.loadingText
                                }
                            }]
                        }]
                    }
                }, 6105: t => {
                    t.exports = {
                        type: "div", attr: {}, children: [{
                            type: "ad-web", attr: {
                                url: function () {
                                    return this.websrc
                                }
                            }
                        }]
                    }
                }, 3032: (t, e, n) => {
                    var i = n(1434);
                    $app_define$("@app-component/ad-web", [], (function (t, e, r) {
                        i(r, e, t), e.__esModule && e.default && (r.exports = e.default), r.exports.template = n(8527)
                    }))
                }, 4078: (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {value: !0}), e.validateAdstyle = e.dispatchAdEvent = e.defineAdComponent = void 0;
                    const n = function (t, e) {
                        try {
                            this.isAdDestroyed || this.adEvent && this.adEvent[t] && this.adEvent[t].call(this, e)
                        } catch (t) {
                        }
                    };
                    e.validateAdstyle = function (t) {
                        var e,
                            n = ["containerStyle", "titleStyle", "imgStyle", "buttonStyle", "iconStyle", "descStyle", "brandStyle", "closeBtnStyle", "downloadStyle", "downloadBrandStyle", "downloadIconStyle", "downloadButtonStyle", "downloadTextStyle", "openAdBtnStyle"];
                        let i = !1
                        for (e in t = JSON.parse(JSON.stringify(t))) ~n.indexOf(e) || (console.log(`百度网盟广告组件adStyle属性：${e}校验不通过，仅支持以下自定义样式属性:` + [...n]), i = !0);
                        return !i
                    }, e.defineAdComponent = function (t) {
                        try {
                            this.adTimer && clearInterval(this.adTimer);
                            let e = setInterval((() => {
                                if (this.isAdDestroyed || !this.$app) clearInterval(e); else if (this.$app && this.$app.$def && this.$app.$def.union_quick_app_sdk && this.$app.$def.union_quick_app_sdk.components) {
                                    clearInterval(e);
                                    let i = this.$app.$def.union_quick_app_sdk.components[t];
                                    i && (Object.keys(i).forEach((t => {
                                        this[t] = i[t]
                                    })), n.call(this, "onInit"))
                                }
                            }), 10);
                            this.adTimer = e
                        } catch (t) {
                        }
                    }, e.dispatchAdEvent = n
                }
            }, e = {};

            function n(i) {
                var r = e[i];
                if (void 0 !== r) return r.exports;
                var o = e[i] = {exports: {}};
                return t[i](o, o.exports, n), o.exports
            }

            (() => {
                n(3032);
                var t = n(6778);
                $app_define$("@app-component/index", [], (function (e, i, r) {
                    t(r, i, e), i.__esModule && i.default && (r.exports = i.default), r.exports.template = n(6105)
                })), $app_bootstrap$("@app-component/index", {packagerVersion: "1.9.14"})
            })()
        })()
    };
    if ("undefined" == typeof window) return t();
    window.createPageHandler = t
}();