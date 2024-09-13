!function () {
    var t = function () {
        return (() => {
            var t = {
                6739: t => {
                    t.exports = function (t, e, i) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, e.default = {
                            data: {},
                            onInit() {
                            },
                            onBackPress: () => !0,
                            onShow() {
                            }
                        };
                        const n = e.default || t.exports, o = ["public", "protected", "private"];
                        if (n.data && o.some((function (t) {
                            return n[t]
                        }))) throw new Error('页面VM对象中的属性data不可与"' + o.join(",") + '"同时存在，请使用private替换data名称');
                        n.data || (n.data = {}, n._descriptor = {}, o.forEach((function (t) {
                            const e = typeof n[t];
                            if ("object" === e) {
                                n.data = Object.assign(n.data, n[t]);
                                for (const e in n[t]) n._descriptor[e] = {access: t}
                            } else "function" === e && console.warn("页面VM对象中的属性" + t + "的值不能是函数，请使用对象")
                        })))
                    }
                }, 4996: (t, e, i) => {
                    t.exports = function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
                        var o = i(4078);
                        e.default = {
                            props: ["percent", "content", "size"],
                            data: () => ({style: {}, circleSize: ""}),
                            onInit() {
                                this.$watch("percent", "watchPercentChange"), o.defineAdComponent.call(this, "circle")
                            },
                            watchPercentChange(t, e) {
                                o.dispatchAdEvent.call(this, "onPercentChange", t)
                            }
                        }
                    }
                }, 5813: (t, e, i) => {
                    t.exports = function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
                        var o = i(4078);
                        e.default = {
                            props: ["imgsrc", "text", "btnstyle"],
                            data: {closeImg: "", closeText: "", closeImgStyle: ""},
                            onInit() {
                                o.defineAdComponent.call(this, "closeAdBtn")
                            }
                        }
                    }
                }, 1063: (t, e, i) => {
                    t.exports = function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
                        var o = i(4078);
                        e.default = {
                            props: ["list", "customstyle", "item", "bindevent", "id", "btnAnimate"],
                            data: () => ({}),
                            onInit() {
                                o.defineAdComponent.call(this, "custom")
                            },
                            clickHandler(t, e) {
                                t && t.click && (e.adEventName = t.click, this.$emit("customClick", e), t.clickBubble || e.stopPropagation && e.stopPropagation())
                            },
                            touchstartHandler(t, e) {
                                e.stopPropagation && e.stopPropagation()
                            },
                            customClick(t) {
                                this.$emit("customClick", t), t.stopPropagation && t.stopPropagation()
                            },
                            videoFinish(t, e) {
                                t.finish && (e.adEventName = t.finish, this.$emit("customClick", e)), e.stopPropagation && e.stopPropagation()
                            },
                            videoTimeUpdate(t, e) {
                                t.timeupdate && (e.adEventName = t.timeupdate, this.$emit("customClick", e)), e.stopPropagation && e.stopPropagation()
                            },
                            videoPrepared(t, e) {
                                t.prepared && (e.adEventName = t.prepared, this.$emit("customClick", e)), e.stopPropagation && e.stopPropagation()
                            },
                            videoPause(t, e) {
                                t.pause && (e.adEventName = t.pause, this.$emit("customClick", e)), e.stopPropagation && e.stopPropagation()
                            },
                            videoError(t, e) {
                                t.error && (e.adEventName = t.error, this.$emit("customClick", e)), e.stopPropagation && e.stopPropagation()
                            },
                            videoStart(t, e) {
                                t.error && (e.adEventName = t.start, this.$emit("customClick", e)), e.stopPropagation && e.stopPropagation()
                            },
                            containerClick(t, e) {
                                (t = t || this.item) && t.click && (e.adEventName = t.click, this.$emit("customClick", e), t.clickBubble || e.stopPropagation && e.stopPropagation())
                            }
                        }
                    }
                }, 4845: (t, e, i) => {
                    t.exports = function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
                        var o = i(4078);
                        e.default = {
                            props: ["visible"], data() {
                                return {
                                    overlayClass: "",
                                    panelClass: "",
                                    isVisible: this.visible,
                                    adData: {},
                                    style: {},
                                    closePng: ""
                                }
                            }, onInit() {
                                this.$watch("visible", "toggleVisible"), o.defineAdComponent.call(this, "downloadPanel")
                            }, toggleVisible(t) {
                                o.dispatchAdEvent.call(this, "toggleVisible", t)
                            }, closeClick(t) {
                                o.dispatchAdEvent.call(this, "closeClick", t)
                            }, btnClick(t) {
                                o.dispatchAdEvent.call(this, "btnClick", t)
                            }, panelClick(t) {
                                o.dispatchAdEvent.call(this, "panelClick", t)
                            }
                        }
                    }
                }, 4936: (t, e, i) => {
                    t.exports = function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
                        var o = i(4078);
                        e.default = {
                            props: ["adstyle", "videoautoplay", "videomuted", "downloadpanel", "templateid", "showvolumn", "needrefresh"],
                            data: () => ({
                                feedType: "",
                                adData: {},
                                btnText: "",
                                closePng: "",
                                rePlayPng: "",
                                showTailFrame: !1,
                                tailFrameStyle: {},
                                isDownloadPanel: !1,
                                customPanel: !1,
                                videoMuted: !1,
                                templateId: "",
                                templateConfig: [],
                                isAdLoaded: !1,
                                downloadPanelConfig: [],
                                exposeId: "",
                                btnAnimate: ""
                            }),
                            onInit() {
                                o.defineAdComponent.call(this, "feedAd")
                            },
                            onAdExpose() {
                                o.dispatchAdEvent.call(this, "onAdExpose")
                            },
                            onAdDisappear() {
                                o.dispatchAdEvent.call(this, "onAdDisappear")
                            },
                            customClick(t) {
                                t.detail.adEventName && o.dispatchAdEvent.call(this, t.detail.adEventName, t)
                            }
                        }
                    }
                }, 1194: (t, e, i) => {
                    t.exports = function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
                        var o = i(4078);
                        e.default = {
                            data: () => ({
                                isAdLoaded: !1,
                                feedType: "",
                                adData: {},
                                btnText: "",
                                closePng: "",
                                templateId: "",
                                templateConfig: [],
                                enableClose: !1,
                                countdown: 3,
                                showTailFrame: !1,
                                intMainStyle: {},
                                intContentStyle: {},
                                countDownStyle: {},
                                lastTime: 0,
                                videoMuted: !0,
                                enableSkip: !1
                            }), props: {}, onAdExpose() {
                                o.dispatchAdEvent.call(this, "onAdExpose")
                            }, onAdDisappear() {
                                o.dispatchAdEvent.call(this, "onAdDisappear")
                            }, customClick(t) {
                                t.detail.adEventName && o.dispatchAdEvent.call(this, t.detail.adEventName, t)
                            }, onInit() {
                                o.defineAdComponent.call(this, "intAd")
                            }, bindClose(t) {
                                t.stopPropagation(), this.$emit("close")
                            }, bindTimerClick(t) {
                                t.stopPropagation()
                            }
                        }
                    }
                }, 4028: (t, e, i) => {
                    t.exports = function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
                        var o = i(4078);

                        function r(t, e) {
                            var i = Object.keys(t);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(t);
                                e && (n = n.filter((function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                                }))), i.push.apply(i, n)
                            }
                            return i
                        }

                        function s(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? r(Object(i), !0).forEach((function (e) {
                                    var n, o, r, s;
                                    n = t, o = e, r = i[e], (o = "symbol" == typeof (s = function (t, e) {
                                        if ("object" != typeof t || !t) return t;
                                        var i = t[Symbol.toPrimitive];
                                        if (void 0 !== i) {
                                            var n = i.call(t, "string");
                                            if ("object" != typeof n) return n;
                                            throw new TypeError("@@toPrimitive must return a primitive value.")
                                        }
                                        return String(t)
                                    }(o)) ? s : String(s)) in n ? Object.defineProperty(n, o, {
                                        value: r,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : n[o] = r
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                                }))
                            }
                            return t
                        }

                        e.default = {
                            props: ["entry", "itemStyle"],
                            data: () => ({style: {}, logoUrl: ""}),
                            computed: {
                                styleBox() {
                                    return s(s({}, this.itemStyle), this.style.logoContainer)
                                }
                            },
                            onInit() {
                                o.defineAdComponent.call(this, "logo")
                            },
                            onClick(t) {
                                o.dispatchAdEvent.call(this, "onClick", t)
                            },
                            onTouchstart(t) {
                                o.dispatchAdEvent.call(this, "onTouchstart", t)
                            }
                        }
                    }
                }, 821: (t, e, i) => {
                    t.exports = function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
                        var o = i(4078);
                        e.default = {
                            props: {
                                appid: {type: [String, Number], required: !0},
                                apid: {type: [String, Number], required: !0},
                                type: {type: String, required: !0, default: "feed"},
                                entry: {type: String, required: !1},
                                openimg: {type: String, required: !1},
                                adstyle: {
                                    type: Object, required: !1, default: {}, validator: function (t) {
                                        return (0, o.validateAdstyle)(t)
                                    }
                                },
                                videoautoplay: {type: [Boolean, String], required: !1, default: "true"},
                                downloadpanel: {type: Boolean, default: !1},
                                videomuted: {type: [Boolean, String], required: !1, default: "true"},
                                templateid: {type: String, required: !1},
                                customclose: {type: Boolean, required: !1, default: !1},
                                splashrestrict: {type: String, required: !1, default: "0"},
                                device: {type: String, required: !1, default: ""},
                                mac: {type: String, required: !1, default: ""},
                                showCountdown: {type: Boolean, required: !1, default: !1},
                                showvolumn: {type: Boolean, required: !1, default: !0},
                                refresh: {required: !1},
                                skiptime: {type: Number, required: !1},
                                visible: {type: [Boolean, String, Number], required: !1, default: !1},
                                req: {type: String, required: !1, default: ""}
                            },
                            data: () => ({
                                adData: {},
                                panelVisible: !1,
                                adVisible: !0,
                                pageY: "100",
                                needrefresh: !1,
                                sendLogUrl: "",
                                intVisible: !1
                            }),
                            onInit() {
                                this.initTime = (new Date).getTime(), this.$watch("refresh", "onRefreshPropChange"), this.$watch("visible", "onIntVisibleChange"), o.defineAdComponent.call(this, "mobadsAd")
                            },
                            onIntVisibleChange(t, e) {
                                this.intVisible = !0, o.dispatchAdEvent.call(this, "onRefreshPropChange", t !== e)
                            },
                            onReady() {
                                o.dispatchAdEvent.call(this, "onReady")
                            },
                            onDestroy() {
                                o.dispatchAdEvent.call(this, "onDestroy")
                            },
                            onClick(t) {
                                o.dispatchAdEvent.call(this, "onClick", t)
                            },
                            onTouchstart(t) {
                                o.dispatchAdEvent.call(this, "onTouchstart", t)
                            },
                            downloadPanelClose(t) {
                                o.dispatchAdEvent.call(this, "downloadPanelClose", t)
                            },
                            downloadClick(t) {
                                o.dispatchAdEvent.call(this, "downloadClick", t)
                            },
                            showFeedback(t) {
                                o.dispatchAdEvent.call(this, "showFeedback", t)
                            },
                            initComplete(t) {
                                o.dispatchAdEvent.call(this, "initComplete", t)
                            },
                            areaClick(t) {
                                o.dispatchAdEvent.call(this, "onClick", t.detail)
                            },
                            onRefreshPropChange(t, e) {
                                o.dispatchAdEvent.call(this, "onRefreshPropChange", t !== e)
                            },
                            intClose() {
                                o.dispatchAdEvent.call(this, "onIntClose")
                            }
                        }
                    }
                }, 3984: (t, e, i) => {
                    t.exports = function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
                        var o = i(4078);
                        e.default = {
                            props: ["openimg", "entry", "adstyle", "downloadpanel", "customclose", "splashrestrict", "skiptime"],
                            data: () => ({
                                adData: {},
                                countdown: 5,
                                imgUrl: "",
                                isshow: !1,
                                percent: 20,
                                closetype: 4,
                                style: {},
                                isDownloadPanel: !1,
                                btnText: "",
                                showSplashBtn: !1,
                                circleSize: 90
                            }),
                            onInit() {
                                o.defineAdComponent.call(this, "openAd")
                            },
                            imgLoadCompleted() {
                                o.dispatchAdEvent.call(this, "imgLoadCompleted")
                            },
                            logoClick() {
                                o.dispatchAdEvent.call(this, "logoClick")
                            },
                            onAdSkip(t) {
                                o.dispatchAdEvent.call(this, "onAdSkip", t)
                            },
                            imgLoadErr() {
                                o.dispatchAdEvent.call(this, "imgLoadErr")
                            },
                            onDestroy() {
                                o.dispatchAdEvent.call(this, "onDestroy")
                            },
                            privacyClick(t) {
                                o.dispatchAdEvent.call(this, "privacyClick", t)
                            },
                            permissionClick(t) {
                                o.dispatchAdEvent.call(this, "permissionClick", t)
                            }
                        }
                    }
                }, 1424: (t, e, i) => {
                    t.exports = function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
                        var o = i(4078);
                        e.default = {
                            props: ["adstyle", "rewardtime", "closetime", "showCountdown"],
                            data: () => ({
                                adData: {},
                                templateConfig: [],
                                videomuted: !1,
                                showTailFrame: !1,
                                progress: 0,
                                lastTime: 0,
                                showSkip: !1,
                                rewardTime: 30,
                                lastRewardTime: 0
                            }),
                            onInit() {
                                o.defineAdComponent.call(this, "rewardAd")
                            },
                            customClick(t) {
                                t.detail.adEventName && o.dispatchAdEvent.call(this, t.detail.adEventName, t)
                            }
                        }
                    }
                }, 3241: t => {
                    t.exports = {".ad-image": {width: "100%"}}
                }, 2121: t => {
                    t.exports = {
                        "@KEYFRAMES": {
                            overlayEnter: [{opacity: 0, time: 0}, {opacity: 1, time: 100}],
                            overlayLeave: [{opacity: 1, time: 0}, {opacity: 0, time: 100}],
                            panelenter: [{height: "0px", transform: '{"translateY":"100%"}', time: 0}, {
                                height: "100%",
                                transform: '{"translateY":"0px"}',
                                time: 100
                            }],
                            panelleave: [{height: "100%", transform: '{"translateY":"0px"}', time: 0}, {
                                height: "0px",
                                transform: '{"translateY":"100%"}',
                                time: 100
                            }]
                        },
                        ".overlay-enter": {animationName: "overlayEnter"},
                        ".overlay-leave": {animationName: "overlayLeave"},
                        ".panel-enter": {
                            animationName: "panelenter",
                            animationDuration: "200ms",
                            animationTimingFunction: "ease-in"
                        },
                        ".panel-leave": {height: "0px"}
                    }
                }, 3960: t => {
                    t.exports = {
                        ".feed-ad": {
                            position: "relative",
                            backgroundColor: "rgba(0,0,0,0)",
                            color: "#FF0000",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }, ".feed-ad-expose": {alignSelf: "center"}
                    }
                }, 9237: t => {
                    t.exports = {
                        "@KEYFRAMES": {Opacity: [{opacity: 0, time: 0}, {opacity: 1, time: 100}]},
                        ".ad-close-timer": {
                            color: "#ffffff",
                            backgroundColor: "#555555",
                            display: "flex",
                            height: "48px",
                            width: "48px",
                            borderRadius: "24px",
                            textAlign: "center"
                        },
                        ".ad-closed-btn-wrap": {
                            opacity: 0,
                            animationName: "Opacity",
                            animationDelay: "50ms",
                            animationDuration: "100ms",
                            animationTimingFunction: "ease-in-out",
                            animationFillMode: "forwards"
                        },
                        ".feed-ad-expose": {alignSelf: "center"},
                        ".int-main": {flexDirection: "column", width: "80%"},
                        ".int-close": {
                            width: "50px",
                            height: "50px",
                            alignSelf: "flex-end",
                            marginBottom: "15px",
                            marginRight: "5px"
                        },
                        ".mask": {
                            position: "fixed",
                            flex: 1,
                            top: "0px",
                            bottom: "0px",
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                            alignContent: "center",
                            alignItems: "center",
                            backgroundColor: "rgba(5,5,5,0.6)"
                        },
                        ".int-content": {borderRadius: "30px"}
                    }
                }, 4419: t => {
                    t.exports = {
                        "@KEYFRAMES": {Opacity: [{opacity: 0, time: 0}, {opacity: 1, time: 100}]},
                        ".ad-closed-btn-wrap": {
                            opacity: 0,
                            animationName: "Opacity",
                            animationDelay: "50ms",
                            animationDuration: "100ms",
                            animationTimingFunction: "ease-in-out",
                            animationFillMode: "forwards"
                        },
                        ".openImgWrap": {
                            opacity: 0,
                            animationName: "Opacity",
                            animationDelay: "50ms",
                            animationDuration: "100ms",
                            animationTimingFunction: "ease-in-out",
                            animationFillMode: "forwards"
                        }
                    }
                }, 4995: t => {
                    t.exports = {}
                }, 2792: t => {
                    t.exports = {
                        ".union-ad-wraper": {width: "100%", height: "100%"},
                        ".union-ad": {width: "100%", height: "100%"}
                    }
                }, 5230: t => {
                    t.exports = {
                        type: "stack", attr: {}, style: function () {
                            return this.style.stackContainer
                        }, children: [{
                            type: "canvas", attr: {id: "canvasId"}, id: "canvasId", style: function () {
                                return this.style.timerCanvas
                            }
                        }, {
                            type: "div", attr: {}, style: function () {
                                return this.style.circleContainer
                            }, children: [{
                                type: "text", attr: {
                                    value: function () {
                                        return this.content
                                    }
                                }, style: function () {
                                    return this.style.circleText
                                }
                            }]
                        }]
                    }
                }, 93: t => {
                    t.exports = {
                        type: "div", attr: {}, classList: ["close-btn"], style: function () {
                            return this.btnstyle
                        }, children: [{
                            type: "image", attr: {
                                src: function () {
                                    return this.closeImg
                                }
                            }, shown: function () {
                                return this.closeImg
                            }, style: function () {
                                return this.closeImgStyle
                            }
                        }, {
                            type: "text", attr: {
                                value: function () {
                                    return this.closeText
                                }
                            }, shown: function () {
                                return this.closeText
                            }, style: {
                                color: function () {
                                    return this.btnstyle.color
                                }
                            }, classList: ["closebtn-text"]
                        }]
                    }
                }, 7891: t => {
                    t.exports = {
                        type: "div", attr: {
                            id: function () {
                                return this.id
                            }
                        }, style: function () {
                            return this.customstyle
                        }, events: {
                            click: function (t) {
                                return this.containerClick(null, t)
                            }
                        }, id: function () {
                            return this.id
                        }, children: [{
                            type: "block", attr: {}, repeat: function () {
                                return this.list
                            }, children: [{
                                type: "text", attr: {
                                    id: function () {
                                        return this.$item.id
                                    }, value: function () {
                                        return this.$item.value
                                    }
                                }, shown: function () {
                                    return "text" === this.$item.name && !this.$item.hidden
                                }, style: function () {
                                    return this.$item.style
                                }, events: {
                                    click: function (t) {
                                        return this.clickHandler(this.$item, t)
                                    }
                                }, id: function () {
                                    return this.$item.id
                                }
                            }, {
                                type: "skip-circle", attr: {
                                    content: function () {
                                        return this.$item.content
                                    }, percent: function () {
                                        return this.$item.percent
                                    }, size: function () {
                                        return this.$item.size
                                    }
                                }, shown: function () {
                                    return "circle" === this.$item.name && !this.$item.hidden
                                }
                            }, {
                                type: "video", attr: {
                                    controls: function () {
                                        return this.$item.controls
                                    }, autoplay: function () {
                                        return this.$item.autoplay
                                    }, muted: function () {
                                        return this.$item.muted
                                    }, src: function () {
                                        return this.$item.video
                                    }, poster: function () {
                                        return this.$item.poster
                                    }, id: "info-flow-video"
                                }, shown: function () {
                                    return "video" === this.$item.name && !this.$item.hidden
                                }, id: "info-flow-video", style: function () {
                                    return this.$item.style
                                }, events: {
                                    pause: function (t) {
                                        return this.videoPause(this.$item, t)
                                    }, error: function (t) {
                                        return this.videoError(this.$item, t)
                                    }, start: function (t) {
                                        return this.videoStart(this.$item, t)
                                    }, click: function (t) {
                                        return this.clickHandler(this.$item, t)
                                    }, prepared: function (t) {
                                        return this.videoPrepared(this.$item, t)
                                    }, finish: function (t) {
                                        return this.videoFinish(this.$item, t)
                                    }, timeupdate: function (t) {
                                        return this.videoTimeUpdate(this.$item, t)
                                    }
                                }
                            }, {
                                type: "image", attr: {
                                    src: function () {
                                        return this.$item.value
                                    }, id: function () {
                                        return this.$item.id
                                    }
                                }, style: function () {
                                    return this.$item.style
                                }, classList: ["ad-image"], events: {
                                    click: function (t) {
                                        return this.clickHandler(this.$item, t)
                                    }
                                }, id: function () {
                                    return this.$item.id
                                }, shown: function () {
                                    return "image" === this.$item.name && !this.$item.hidden
                                }
                            }, {
                                type: "block", attr: {}, shown: function () {
                                    return "logo" === this.$item.name && !this.$item.hidden
                                }, children: [{
                                    type: "ad-logo", attr: {
                                        itemStyle: function () {
                                            return this.$item.style
                                        }
                                    }
                                }]
                            }, {
                                type: "close-btn", attr: {
                                    btnstyle: function () {
                                        return this.$item.style
                                    }, imgsrc: function () {
                                        return this.$item.imgsrc
                                    }
                                }, shown: function () {
                                    return "close" === this.$item.name && !this.$item.hidden
                                }, events: {
                                    click: function (t) {
                                        return this.clickHandler(this.$item, t)
                                    }, touchstart: function (t) {
                                        return this.touchstartHandler(this.$item, t)
                                    }
                                }
                            }, {
                                type: "union-custom", attr: {
                                    id: function () {
                                        return this.$item.id
                                    }, btnAnimate: function () {
                                        return this.btnAnimate
                                    }, list: function () {
                                        return this.$item.children
                                    }, customstyle: function () {
                                        return this.$item.style
                                    }, bindevent: function () {
                                        return this.$item.bindEvent
                                    }, item: function () {
                                        return this.$item
                                    }
                                }, shown: function () {
                                    return "layout" === this.$item.name && !this.$item.hidden
                                }, id: function () {
                                    return this.$item.id
                                }, events: {"custom-click": "customClick"}
                            }, {
                                type: "stack", attr: {}, style: function () {
                                    return this.$item.style
                                }, shown: function () {
                                    return "stack" === this.$item.name && !this.$item.hidden
                                }, events: {
                                    click: function (t) {
                                        return this.containerClick(this.$item, t)
                                    }
                                }, children: [{
                                    type: "block", attr: {}, repeat: function () {
                                        return this.$item.children
                                    }, children: [{
                                        type: "text", attr: {
                                            id: function () {
                                                return this.$item.id
                                            }, value: function () {
                                                return this.$item.value
                                            }
                                        }, shown: function () {
                                            return "text" === this.$item.name && !this.$item.hidden
                                        }, style: function () {
                                            return this.$item.style
                                        }, id: function () {
                                            return this.$item.id
                                        }, events: {
                                            click: function (t) {
                                                return this.clickHandler(this.$item, t)
                                            }
                                        }
                                    }, {
                                        type: "image", attr: {
                                            src: function () {
                                                return this.$item.value
                                            }, id: function () {
                                                return this.$item.id
                                            }
                                        }, style: function () {
                                            return this.$item.style
                                        }, classList: ["ad-image"], id: function () {
                                            return this.$item.id
                                        }, events: {
                                            click: function (t) {
                                                return this.clickHandler(this.$item, t)
                                            }
                                        }, shown: function () {
                                            return "image" === this.$item.name && !this.$item.hidden
                                        }
                                    }, {
                                        type: "block", attr: {}, shown: function () {
                                            return "logo" === this.$item.name && !this.$item.hidden
                                        }, children: [{
                                            type: "ad-logo", attr: {
                                                itemStyle: function () {
                                                    return this.$item.style
                                                }
                                            }
                                        }]
                                    }, {
                                        type: "union-custom", attr: {
                                            id: function () {
                                                return this.$item.id
                                            }, btnAnimate: function () {
                                                return this.btnAnimate
                                            }, list: function () {
                                                return this.$item.children
                                            }, customstyle: function () {
                                                return this.$item.style
                                            }, bindevent: function () {
                                                return this.$item.bindEvent
                                            }, item: function () {
                                                return this.$item
                                            }
                                        }, shown: function () {
                                            return "layout" === this.$item.name && !this.$item.hidden
                                        }, id: function () {
                                            return this.$item.id
                                        }, events: {"custom-click": "customClick"}
                                    }, {
                                        type: "video", attr: {
                                            controls: function () {
                                                return this.$item.controls
                                            }, autoplay: function () {
                                                return this.$item.autoplay
                                            }, muted: function () {
                                                return this.$item.muted
                                            }, src: function () {
                                                return this.$item.video
                                            }, poster: function () {
                                                return this.$item.poster
                                            }, id: "info-flow-video"
                                        }, shown: function () {
                                            return "video" === this.$item.name && !this.$item.hidden
                                        }, id: "info-flow-video", style: function () {
                                            return this.$item.style
                                        }, events: {
                                            click: function (t) {
                                                return this.clickHandler(this.$item, t)
                                            }, pause: function (t) {
                                                return this.videoPause(this.$item, t)
                                            }, error: function (t) {
                                                return this.videoError(this.$item, t)
                                            }, start: function (t) {
                                                return this.videoStart(this.$item, t)
                                            }, prepared: function (t) {
                                                return this.videoPrepared(this.$item, t)
                                            }, finish: function (t) {
                                                return this.videoFinish(this.$item, t)
                                            }, timeupdate: function (t) {
                                                return this.videoTimeUpdate(this.$item, t)
                                            }
                                        }
                                    }, {
                                        type: "skip-circle", attr: {
                                            content: function () {
                                                return this.$item.content
                                            }, percent: function () {
                                                return this.$item.percent
                                            }, size: function () {
                                                return this.$item.size
                                            }
                                        }, shown: function () {
                                            return "circle" === this.$item.name && !this.$item.hidden
                                        }
                                    }]
                                }]
                            }]
                        }]
                    }
                }, 1325: t => {
                    t.exports = {
                        type: "div", attr: {}, classList: ["overlay-container"], children: [{
                            type: "div", attr: {}, classList: function () {
                                return [this.overlayClass]
                            }, style: function () {
                                return this.style.overlay
                            }, shown: function () {
                                return this.isVisible
                            }, events: {click: "closeClick"}, children: [{
                                type: "div", attr: {}, style: function () {
                                    return this.style.panel
                                }, events: {click: "panelClick"}, children: [{
                                    type: "div", attr: {}, classList: function () {
                                        return [this.panelClass]
                                    }, style: function () {
                                        return this.style.contentWrapper
                                    }, children: [{
                                        type: "div", attr: {}, style: function () {
                                            return this.style.content
                                        }, children: [{
                                            type: "image", attr: {
                                                src: function () {
                                                    return this.closePng
                                                }
                                            }, style: function () {
                                                return this.style.close
                                            }, events: {click: "closeClick"}
                                        }, {
                                            type: "image", attr: {
                                                src: function () {
                                                    return this.adData.icon
                                                }
                                            }, style: function () {
                                                return this.style.icon
                                            }
                                        }, {
                                            type: "text", attr: {
                                                value: function () {
                                                    return this.adData.appname
                                                }
                                            }, style: function () {
                                                return this.style.appname
                                            }
                                        }, {
                                            type: "text", attr: {
                                                value: function () {
                                                    return "版本" + this.adData.app_version
                                                }
                                            }, style: function () {
                                                return this.style.version
                                            }
                                        }, {
                                            type: "text", attr: {
                                                value: function () {
                                                    return this.adData.publisher
                                                }
                                            }, style: function () {
                                                return this.style.publisher
                                            }
                                        }, {
                                            type: "div", attr: {}, style: function () {
                                                return this.style.linkContainer
                                            }, children: [{
                                                type: "a", attr: {
                                                    href: function () {
                                                        return this.adData.privacy_link
                                                    }, value: "隐私"
                                                }, style: function () {
                                                    return this.style.link
                                                }
                                            }, {
                                                type: "a", attr: {
                                                    href: function () {
                                                        return this.adData.permission_link
                                                    }, value: "权限"
                                                }, style: function () {
                                                    return this.style.link
                                                }
                                            }]
                                        }, {
                                            type: "text", attr: {value: "立即下载"}, style: function () {
                                                return this.style.button
                                            }, events: {click: "btnClick"}
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }
                }, 2681: t => {
                    t.exports = {
                        type: "div",
                        attr: {id: "feed-ad"},
                        classList: ["feed-ad"],
                        id: "feed-ad",
                        children: [{
                            type: "block",
                            attr: {},
                            shown: function () {
                                return this.isAdLoaded
                            },
                            children: [{
                                type: "div",
                                attr: {},
                                events: {appear: "onAdExpose", disappear: "onAdDisappear"},
                                classList: ["feed-ad-expose"],
                                children: [{
                                    type: "image", attr: {
                                        id: function () {
                                            return this.exposeId
                                        }
                                    }, style: {width: "1px", height: "1px"}, id: function () {
                                        return this.exposeId
                                    }
                                }]
                            }, {
                                type: "union-custom", attr: {
                                    btnAnimate: function () {
                                        return this.btnAnimate
                                    }, list: function () {
                                        return this.templateConfig
                                    }
                                }, events: {"custom-click": "customClick"}
                            }]
                        }, {
                            type: "block", attr: {}, shown: function () {
                                return this.isAdLoaded && this.isDownloadPanel && !this.customPanel
                            }, children: [{
                                type: "union-custom", attr: {
                                    btnAnimate: function () {
                                        return this.btnAnimate
                                    }, list: function () {
                                        return this.downloadPanelConfig
                                    }
                                }, events: {"custom-click": "customClick"}
                            }]
                        }]
                    }
                }, 2104: t => {
                    t.exports = {
                        type: "div", attr: {}, classList: ["int-ad"], children: [{
                            type: "div",
                            attr: {id: "ad-mask"},
                            classList: ["mask"],
                            shown: function () {
                                return this.isAdLoaded
                            },
                            id: "ad-mask",
                            children: [{
                                type: "div",
                                attr: {},
                                events: {appear: "onAdExpose", disappear: "onAdDisappear"},
                                classList: ["feed-ad-expose"],
                                children: [{type: "image", attr: {}, style: {width: "1px", height: "1px"}}]
                            }, {
                                type: "div", attr: {}, classList: ["int-main"], style: function () {
                                    return this.intMainStyle
                                }, children: [{
                                    type: "div", attr: {}, classList: ["int-close"], style: function () {
                                        return this.closeStyle
                                    }, children: [{
                                        type: "text",
                                        attr: {
                                            value: function () {
                                                return this.countdown + "s"
                                            }
                                        },
                                        shown: function () {
                                            return this.countdown && !this.enableClose
                                        },
                                        events: {click: "bindTimerClick"},
                                        classList: ["ad-closed-btn-wrap", "ad-close-timer"],
                                        style: function () {
                                            return this.countDownStyle
                                        }
                                    }, {
                                        type: "image",
                                        attr: {src: "https://render-server.cdn.bcebos.com/static/images/20220629/e1acc81f1440926315591a61bb287948.png"},
                                        shown: function () {
                                            return this.enableClose
                                        },
                                        events: {click: "bindClose"},
                                        classList: ["ad-closed-btn-wrap"]
                                    }]
                                }, {
                                    type: "div", attr: {}, classList: ["int-content"], style: function () {
                                        return this.intContentStyle
                                    }, children: [{
                                        type: "union-custom", attr: {
                                            list: function () {
                                                return this.templateConfig
                                            }
                                        }, events: {"custom-click": "customClick"}
                                    }]
                                }]
                            }]
                        }]
                    }
                }, 6754: t => {
                    t.exports = {
                        type: "div",
                        attr: {},
                        style: function () {
                            return this.styleBox
                        },
                        events: {click: "onClick", touchstart: "onTouchstart"},
                        classList: ["mssp-logo"],
                        children: [{
                            type: "image", attr: {
                                src: function () {
                                    return this.logoUrl
                                }
                            }, style: function () {
                                return this.style.logoImg
                            }
                        }, {
                            type: "text", attr: {value: "广告"}, style: function () {
                                return this.style.logoText
                            }
                        }]
                    }
                }, 9669: t => {
                    t.exports = {
                        type: "div",
                        attr: {},
                        classList: ["mobads-ad"],
                        events: {click: "onClick", touchstart: "onTouchstart"},
                        children: [{
                            type: "image", attr: {
                                src: function () {
                                    return this.sendLogUrl
                                }
                            }, style: {height: "1px", width: "1px"}
                        }, {
                            type: "open-ad", attr: {
                                entry: function () {
                                    return this.entry
                                }, openimg: function () {
                                    return this.openimg
                                }, adstyle: function () {
                                    return this.adstyle
                                }, customclose: function () {
                                    return this.customclose
                                }, downloadpanel: function () {
                                    return this.downloadpanel
                                }, splashrestrict: function () {
                                    return this.splashrestrict
                                }, skiptime: function () {
                                    return this.skiptime
                                }
                            }, shown: function () {
                                return "rsplash" === this.type
                            }
                        }, {
                            type: "int-ad", attr: {
                                adstyle: function () {
                                    return this.adstyle
                                }, downloadpanel: function () {
                                    return this.downloadpanel
                                }
                            }, shown: function () {
                                return "int" === this.type && this.intVisible
                            }, events: {close: "intClose", "init-complete": "initComplete"}
                        }, {
                            type: "native-ad", attr: {
                                adstyle: function () {
                                    return this.adstyle
                                }, videoautoplay: function () {
                                    return this.videoautoplay
                                }, videomuted: function () {
                                    return this.videomuted
                                }, downloadpanel: function () {
                                    return this.downloadpanel
                                }, showvolumn: function () {
                                    return this.showvolumn
                                }, templateid: function () {
                                    return this.templateid
                                }, needrefresh: function () {
                                    return this.needrefresh
                                }
                            }, shown: function () {
                                return "feed" === this.type && this.adVisible
                            }, events: {"feedback-click": "showFeedback", "area-click": "areaClick"}
                        }, {
                            type: "reward-ad", attr: {
                                adstyle: function () {
                                    return this.adstyle
                                }, showCountdown: function () {
                                    return this.showCountdown
                                }
                            }, shown: function () {
                                return "rvideo" === this.type && this.adVisible
                            }, events: {"area-click": "areaClick"}
                        }, {
                            type: "download-panel", attr: {
                                visible: function () {
                                    return this.panelVisible
                                }
                            }, events: {"panel-close": "downloadPanelClose", "download-click": "downloadClick"}
                        }]
                    }
                }, 9574: t => {
                    t.exports = {
                        type: "div", attr: {id: "open-screen-ad"}, style: function () {
                            return this.style.rootStyle
                        }, id: "open-screen-ad", children: [{
                            type: "stack", attr: {}, style: function () {
                                return this.style.containerStyle
                            }, children: [{
                                type: "div", attr: {}, style: function () {
                                    return this.style.imgWrapStyle
                                }, classList: ["imgWrapStyle"], children: [{
                                    type: "image", attr: {
                                        src: function () {
                                            return this.openimg
                                        }
                                    }, style: function () {
                                        return this.style.imgStyle
                                    }, events: {error: "imgLoadErr"}
                                }]
                            }, {
                                type: "stack", attr: {}, style: function () {
                                    return this.style.imgWrapStyle
                                }, classList: ["imgWrapStyle", "openImgWrap"], shown: function () {
                                    return this.isshow
                                }, children: [{
                                    type: "image", attr: {
                                        src: function () {
                                            return this.imgUrl
                                        }
                                    }, style: function () {
                                        return this.style.imgStyle
                                    }, events: {complete: "imgLoadCompleted", error: "imgLoadErr"}
                                }, {
                                    type: "div", attr: {}, style: function () {
                                        return this.style.adBtnWrapStyle
                                    }, shown: function () {
                                        return this.showSplashBtn
                                    }, children: [{
                                        type: "text", attr: {
                                            dataId: "open-ad-btn", value: function () {
                                                return this.btnText
                                            }
                                        }, style: function () {
                                            return this.style.adBtnStyle
                                        }, classList: ["open-ad-btn"]
                                    }]
                                }, {
                                    type: "div", attr: {}, style: function () {
                                        return this.style.logoWrapStyle
                                    }, children: [{
                                        type: "ad-logo", attr: {
                                            entry: function () {
                                                return this.entry
                                            }
                                        }, events: {"logo-click": "logoClick"}
                                    }]
                                }]
                            }, {
                                type: "div",
                                attr: {},
                                style: function () {
                                    return this.style.closeWrapStyle
                                },
                                classList: ["ad-closed-btn-wrap"],
                                children: [{
                                    type: "text", attr: {
                                        value: function () {
                                            return this.countdown + " 跳过"
                                        }
                                    }, style: function () {
                                        return this.style.closeBtnStyle
                                    }, shown: function () {
                                        return 1 === this.closetype
                                    }, events: {click: "onAdSkip"}
                                }, {
                                    type: "skip-circle", attr: {
                                        content: "跳过", size: function () {
                                            return this.circleSize
                                        }, percent: function () {
                                            return this.percent
                                        }
                                    }, events: {click: "onAdSkip"}, shown: function () {
                                        return 5 === this.closetype
                                    }
                                }]
                            }]
                        }, {
                            type: "div", attr: {}, shown: function () {
                                return this.isDownloadPanel
                            }, style: function () {
                                return this.style.downloadStyle
                            }, children: [{
                                type: "text", attr: {
                                    value: function () {
                                        return "版本 " + this.adData.app_version
                                    }
                                }, style: function () {
                                    return this.style.version
                                }
                            }, {
                                type: "text", attr: {value: "隐私"}, style: function () {
                                    return this.style.downloadText
                                }, events: {click: "privacyClick"}
                            }, {
                                type: "text", attr: {value: "权限"}, style: function () {
                                    return this.style.downloadText
                                }, events: {click: "permissionClick"}
                            }, {
                                type: "text", attr: {
                                    value: function () {
                                        return this.adData.publisher
                                    }
                                }, style: function () {
                                    return this.style.publisher
                                }
                            }]
                        }]
                    }
                }, 6245: t => {
                    t.exports = {
                        type: "div",
                        attr: {},
                        classList: ["reward-ad"],
                        children: [{
                            type: "union-custom", attr: {
                                list: function () {
                                    return this.templateConfig
                                }
                            }, events: {"custom-click": "customClick"}
                        }]
                    }
                }, 8578: t => {
                    t.exports = {
                        type: "div",
                        attr: {},
                        classList: ["union-ad-wraper"],
                        children: [{
                            type: "union-ad", attr: {
                                type: "rvideo", apid: function () {
                                    return this.apid
                                }, appid: function () {
                                    return this.appid
                                }
                            }, classList: ["union-ad"]
                        }]
                    }
                }, 336: (t, e, i) => {
                    var n = i(4996);
                    $app_define$("@app-component/skip-circle", [], (function (t, e, o) {
                        n(o, e, t), e.__esModule && e.default && (o.exports = e.default), o.exports.template = i(5230)
                    }))
                }, 8913: (t, e, i) => {
                    var n = i(5813);
                    $app_define$("@app-component/close-btn", [], (function (t, e, o) {
                        n(o, e, t), e.__esModule && e.default && (o.exports = e.default), o.exports.template = i(93)
                    }))
                }, 519: (t, e, i) => {
                    i(519), i(4093), i(8913), i(336);
                    var n = i(3241), o = i(1063);
                    $app_define$("@app-component/union-custom", [], (function (t, e, r) {
                        o(r, e, t), e.__esModule && e.default && (r.exports = e.default), r.exports.template = i(7891), r.exports.style = n
                    }))
                }, 4337: (t, e, i) => {
                    var n = i(2121), o = i(4845);
                    $app_define$("@app-component/download-panel", [], (function (t, e, r) {
                        o(r, e, t), e.__esModule && e.default && (r.exports = e.default), r.exports.template = i(1325), r.exports.style = n
                    }))
                }, 2871: (t, e, i) => {
                    i(519);
                    var n = i(3960), o = i(4936);
                    $app_define$("@app-component/native-ad", [], (function (t, e, r) {
                        o(r, e, t), e.__esModule && e.default && (r.exports = e.default), r.exports.template = i(2681), r.exports.style = n
                    }))
                }, 8776: (t, e, i) => {
                    i(519);
                    var n = i(9237), o = i(1194);
                    $app_define$("@app-component/int-ad", [], (function (t, e, r) {
                        o(r, e, t), e.__esModule && e.default && (r.exports = e.default), r.exports.template = i(2104), r.exports.style = n
                    }))
                }, 4093: (t, e, i) => {
                    var n = i(4028);
                    $app_define$("@app-component/ad-logo", [], (function (t, e, o) {
                        n(o, e, t), e.__esModule && e.default && (o.exports = e.default), o.exports.template = i(6754)
                    }))
                }, 9500: (t, e, i) => {
                    i(2871), i(3425), i(8776), i(3797), i(4337);
                    var n = i(821);
                    $app_define$("@app-component/union-ad", [], (function (t, e, o) {
                        n(o, e, t), e.__esModule && e.default && (o.exports = e.default), o.exports.template = i(9669)
                    }))
                }, 3425: (t, e, i) => {
                    i(4093), i(336);
                    var n = i(4419), o = i(3984);
                    $app_define$("@app-component/open-ad", [], (function (t, e, r) {
                        o(r, e, t), e.__esModule && e.default && (r.exports = e.default), r.exports.template = i(9574), r.exports.style = n
                    }))
                }, 3797: (t, e, i) => {
                    i(519);
                    var n = i(4995), o = i(1424);
                    $app_define$("@app-component/reward-ad", [], (function (t, e, r) {
                        o(r, e, t), e.__esModule && e.default && (r.exports = e.default), r.exports.template = i(6245), r.exports.style = n
                    }))
                }, 4078: (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {value: !0}), e.validateAdstyle = e.dispatchAdEvent = e.defineAdComponent = void 0;
                    const i = function (t, e) {
                        try {
                            this.isAdDestroyed || this.adEvent && this.adEvent[t] && this.adEvent[t].call(this, e)
                        } catch (t) {
                        }
                    };
                    e.validateAdstyle = function (t) {
                        var e,
                            i = ["containerStyle", "titleStyle", "imgStyle", "buttonStyle", "iconStyle", "descStyle", "brandStyle", "closeBtnStyle", "downloadStyle", "downloadBrandStyle", "downloadIconStyle", "downloadButtonStyle", "downloadTextStyle", "openAdBtnStyle"];
                        let n = !1;
                        for (e in t = JSON.parse(JSON.stringify(t))) ~i.indexOf(e) || (console.log(`百度网盟广告组件adStyle属性：${e}校验不通过，仅支持以下自定义样式属性:` + [...i]), n = !0);
                        return !n
                    }, e.defineAdComponent = function (t) {
                        try {
                            this.adTimer && clearInterval(this.adTimer);
                            let e = setInterval((() => {
                                if (this.isAdDestroyed || !this.$app) clearInterval(e); else if (this.$app && this.$app.$def && this.$app.$def.union_quick_app_sdk && this.$app.$def.union_quick_app_sdk.components) {
                                    clearInterval(e);
                                    let n = this.$app.$def.union_quick_app_sdk.components[t];
                                    n && (Object.keys(n).forEach((t => {
                                        this[t] = n[t]
                                    })), i.call(this, "onInit"))
                                }
                            }), 10);
                            this.adTimer = e
                        } catch (t) {
                        }
                    }, e.dispatchAdEvent = i
                }
            }, e = {};

            function i(n) {
                var o = e[n];
                if (void 0 !== o) return o.exports;
                var r = e[n] = {exports: {}};
                return t[n](r, r.exports, i), r.exports
            }

            (() => {
                i(9500);
                var t = i(2792), e = i(6739);
                $app_define$("@app-component/index", [], (function (n, o, r) {
                    e(r, o, n), o.__esModule && o.default && (r.exports = o.default), r.exports.template = i(8578), r.exports.style = t
                })), $app_bootstrap$("@app-component/index", {packagerVersion: "1.9.14"})
            })()
        })()
    };
    if ("undefined" == typeof window) return t();
    window.createPageHandler = t
}();