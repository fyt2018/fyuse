!function(e) {
    var t = e.createElement("style")
      , i = "#fyu_cover,.fyu_clickndrag,.fyu_wrapper,.fyubtn{font-family:Lato,HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:12px}.fyu_container{background-color:#333}.fyu_vertical{min-width:160px;min-height:284px;max-width:320px;max-height:568px}.fyu_horizontal{min-width:284px;min-height:160px;max-width:568px;max-height:320px}.fyu_wrapper{height:100%;padding:0;margin:0;overflow:hidden;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-touch-callout:none;tap-highlight-color:transparent}.fyu_wrapper>div{width:100%;height:100%;position:relative}.fyu_horizontal .fyu_wrapper>div{height:0;padding-bottom:56.25%}body .fyu_nomax{max-width:none;max-height:none}.fyu_vertical .fyu_wrapper>div{height:0;padding-bottom:177%}.fyu_wrapper a{text-decoration:none;color:#fff}.fyv .plBtn{cursor:pointer;display:block;width:460px;height:460px;z-index:999;background:url(https://fyu.se/assets/viewer/arr-h.png) 50% no-repeat;position:absolute;left:50%;top:50%;margin-left:-230px;margin-top:-230px}.fyv.vert .plBtn{background:url(https://fyu.se/assets/viewer/arr-v.png) 50% no-repeat}.fyv .plBtn:hover{opacity:.85}.fyuv img,.fyv img{display:block;margin:0 auto}.fyuv.horiz,.fyv.horiz{cursor:url(https://fyu.se/assets/viewer/cursor_h.gif) 24 16,col-resize}.fyuv.vert,.fyv.vert{cursor:url(https://fyu.se/assets/viewer/cursor_v.gif) 16 24,row-resize}.fyuv.horiz.fyvhover,.fyv.horiz.fyvhover{cursor:url(https://fyu.se/assets/viewer/cursor_h_hover@0.5x.png) 24 16,col-resize}.fyuv.vert.fyvhover,.fyv.vert.fyvhover{cursor:url(https://fyu.se/assets/viewer/cursor_v_hover@0.5x.png) 16 24,row-resize}.fyv.fyuse.horiz{cursor:url(https://fyu.se/assets/viewer/cursor_hgrab.gif) 24 16,col-resize}.fyv.fyuse.vert{cursor:url(https://fyu.se/assets/viewer/cursor_vgrab.gif) 16 24,row-resize}.fyuv,.fyv{overflow:hidden;display:block;position:relative;height:100%;width:100%}#fyu_cover{opacity:0;position:fixed;z-index:1000;transition:opacity .27s .08s;-webkit-transition:opacity .27s .08s;background:rgba(0,0,0,.81)}#fyu_cover,.fyu_clayer{left:0;top:0;right:0;bottom:0}.fyu_clayer{position:absolute;z-index:1}.fyuv,.fyv{cursor:default}.fyu_wrapper canvas{position:absolute;left:0;top:0;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fyv:hover .fyu_clickndrag{opacity:0}.fyu_clickndrag{-webkit-transition:opacity .3s;-moz-transition:opacity .3s;transition:opacity .3s;opacity:.9;width:64px;height:32px;position:absolute;bottom:10px;left:10px;background:url(https://fyu.se/assets/viewer/icn_360.png) 50% 50% no-repeat;text-indent:-9999px;z-index:4}.fyu_symbol{background:url(https://fyu.se/assets/symbol.png) 0 0 no-repeat;width:100px;height:100px;display:block;position:absolute;left:-22px;top:-22px;z-index:101;background-size:48px;cursor:auto;background-position:37px 37px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}a.fyu_symbol{cursor:pointer}.fyv.fyuse,.noselect,body.noselect{cursor:default;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fyu_wrapper .ldr2{overflow:visible}body .ldr2.stopped i,body .ldr2.stopped span,body .ldr.stopped,body .stopped .ldr2 i,body .stopped .ldr2 span{opacity:0;-webkit-animation-state:paused}.fyu_wrapper .clear{clear:both!important}@-moz-keyframes spin{0%{-moz-transform:rotate(0deg)}to{-moz-transform:rotate(1turn)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}.fyu_wrapper #svg{-webkit-transform:rotate(-92deg);-moz-transform:rotate(-92deg);-ms-transform:rotate(-92deg);transform:rotate(-92deg);transition:opacity .2s}.fyu_wrapper #svg circle{stroke-dashoffset:0;stroke:rgba(90,90,90,.6);stroke-width:8px}.fyu_wrapper #svg #bar{stroke:#d84a3a}.fyu_wrapper #svg.fade{opacity:0}.fyu_controls{position:absolute;right:8px;bottom:6px;height:40px;opacity:0;-webkit-transition:opacity .38s;transition:opacity .38s}.fyuv:hover .fyu_controls{opacity:1}.fyu_controls a{height:36px;width:36px;display:block;border-radius:20px;background:rgba(0,0,0,.62);float:left;margin-right:5px;text-align:center;line-height:37px;font-size:8px;font-weight:700;cursor:pointer;opacity:.78}.fyu_controls a,.fyu_controls a:hover{color:#fff;text-decoration:none}.fyu_controls a.x2{background:rgba(0,0,0,.62) url(https://fyu.se/assets/viewer/x2.png) 1px 6px no-repeat;background-size:32px}.fyu_controls .pause.paused span{display:none}.fyu_controls .play>span{margin:3px 5px}.fyu_controls .play span span{width:3px;height:13px;background:#f6f6f6;display:block;float:left;margin-right:3px}.fyu_controls .play .pause.paused{position:absolute;top:6px;left:10px;width:0;height:0;border-style:solid;border-width:9px 0 9px 11px;border-color:transparent transparent transparent #fff}.fyu_controls .play .pause.playing{left:9px;display:block;height:15px;width:20px;position:absolute;top:9px;left:8px}.fyu_desc{position:absolute;left:0;top:0;right:0;height:31px;padding:20px 74px;color:#f7f7f7;background:rgba(0,0,0,.65);font-weight:700;font-size:12px;opacity:0;visibility:hidden;-webkit-transition:opacity .3s;transition:opacity .3s}.fyu_dschldr:hover .fyu_desc{opacity:1;visibility:visible}.fyu_dschldr{cursor:auto}.fyuv .fyu_lftbrdr{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,98%,.8)),to(hsla(0,0%,100%,0)));left:-100px}.fyuv .fyu_lftbrdr,.fyuv .fyu_rghtbrdr{height:100%;width:88px;position:absolute;top:0;z-index:999;-webkit-transition:transform .01s;transition:-webkit-transform .01s;transition:transform .01s;transition:transform .01s,-webkit-transform .01s}.fyuv .fyu_rghtbrdr{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,0)),to(hsla(0,0%,98%,.8)));right:-100px}.fyuv.dy .fyu_rghtbrdr{background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(hsla(0,0%,98%,.8)));right:0;bottom:-100px;left:0;top:auto;height:100px;width:100%}.fyuv.dy .fyu_lftbrdr{background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,98%,.8)),to(hsla(0,0%,100%,0)));right:0;top:-100px;left:0;height:100px;width:100%}.fyuse_tag{font-size:16px;font-weight:400;background:rgba(32,32,32,.88);border-radius:2px;color:#fff;position:absolute;z-index:98;width:auto;height:auto;text-overflow:ellipsis;display:none;padding:0;line-height:1;max-width:180px;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fyuse_tag:before{border:solid;border-color:rgba(32,32,32,.89) transparent;border-width:0 6px 6px;top:-6px;content:'';left:calc(50% - 6px);position:absolute;z-index:99}.fyuse_tag span{display:none}.fyuse_tag a{color:#fff;display:block;cursor:pointer;text-shadow:none;text-decoration:none!important;text-overflow:ellipsis;padding:5px 13px 6px}.fyuse_tag h6{font-size:1em;margin:6px 4px}.fyuse_tag_user a:hover{text-decoration:none!important}.fyuse.fyv .fyu_actions{display:none!important}.fyu_actions{height:40px;width:auto;position:absolute;bottom:10px;right:10px;z-index:5;display:none}.fyu_actions.top_right{top:10px;bottom:auto}.fyu_actions.top_left{top:10px;left:10px;right:auto;bottom:auto}.fyu_actions.bottom_left{left:10px;right:auto}.fyu_actions.bottom_right.f_act_fs_tag{bottom:55px}.fyu_actions.f_act_vert{height:auto;width:40px}.fyu_actions.f_act_vert .fyubtn+.fyubtn{margin-left:0;margin-top:6px}.fyubtn{display:inline-block;width:40px;height:40px;text-align:center;opacity:0;cursor:pointer;text-indent:-9999px;-webkit-transition:opacity .25s;-moz-transition:opacity .25s;transition:opacity .25s;background:url(https://fyu.se/assets/viewer/action-icons.png) 0 0 no-repeat}.fyubtn.zoom-in{background-position:-82px 0}.fyubtn.x2{background-position:-246px 0}#fyu_cover .fyubtn.x2{background-position:-164px 0}.fyubtn.tags{background-position:100%}.fyubtn+.fyubtn{margin-left:6px}.fyv:hover .fyubtn{opacity:1}.fyu_close{position:fixed;right:6px;top:6px;display:block;text-align:center;z-index:100;cursor:pointer;text-decoration:none;text-shadow:none!important;text-indent:-9999px;width:38px;height:38px;opacity:.82}.fyu_close:hover{opacity:1}.fyu_close:after,.fyu_close:before{position:absolute;top:9px;left:18px;content:' ';height:19px;width:3px;background-color:#fc3549}.fyu_close:before{-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform:rotate(45deg)}.fyu_close:after{-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.fyu-renderer{position:absolute!important;background:#222;overflow:hidden!important}body .fyuse_tag2{font-size:14px;font-weight:400;padding:5px;background:hsla(0,0%,8%,.92);border:1px solid #666;color:#eee;position:absolute;min-height:28px;z-index:98;text-shadow:none;height:auto;text-overflow:ellipsis;display:none;padding:6px 52px 6px 18px;line-height:1;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-left:-65px;margin-top:-42px;max-width:500px}.fyuse_tag2 h6{margin:0;max-width:116px;font-size:15px;padding-top:5px;font-weight:400}.fyuse_tag2 p{max-width:116px;margin:5px 0;font-size:11px;color:#999}.fyuse_tag2 img{max-width:150px;max-height:220px;image-rendering:-webkit-optimize-contrast}.fyuse_tag2 span{border-radius:500px;background:#fff;color:#050505;line-height:8px;position:absolute;top:50%;margin-top:-14px;right:15px;padding:9px;width:10px;font-weight:700;font-size:16px}.fyuse_tag3{background:transparent;border-radius:26px;border:2px solid #fff;display:none;height:26px;width:26px;z-index:98}.fyuse_tag3,.fyuse_tag3:before{font-size:0;position:absolute;box-shadow:0 0 5px #000}.fyuse_tag3:before{content:' ';z-index:-1;border-radius:26px;top:4px;left:4px;right:4px;bottom:4px;background:#fff}.fyuse_tag3 img{display:none}.fyuse_tag3 a,.fyuse_tag3 h6{display:block;height:100%;width:100%}.fyu-image-wrapper{z-index:1;background:transparent;-webkit-transform-origin:0 0 0;-ms-transform-origin:0 0 0;transform-origin:0 0 0}.fyu-image-wrapper,.fyu-thumb{-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;position:absolute;left:0;top:0;width:100%;height:100%}.fyu-thumb{z-index:50;right:0;bottom:0;outline:0;pointer-events:none;opacity:0;transition:opacity .28s ease-in-out;-moz-transition:opacity .28s ease-in-out;-webkit-transition:opacity .28s ease-in-out}.fyu-canvas,.fyu-canvas-blur{position:absolute;background:transparent;left:0;top:0;z-index:2;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}.fyu-canvas-cover{z-index:3;opacity:0;transition:opacity .28s ease-in-out;-moz-transition:opacity .28s ease-in-out;-webkit-transition:opacity .28s ease-in-out;width:100%}.fyu-canvas-cover.disabled{z-index:0}.fyu-opacity-1{opacity:1!important}";
    if (t.setAttribute("type", "text/css"),
    t.styleSheet)
        t.styleSheet.cssText = i;
    else {
        var n = document.createTextNode(i);
        t.appendChild(n)
    }
    !function e(t, i, n) {
        function r(a, o) {
            if (!i[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!o && l)
                        return l(a, !0);
                    if (s)
                        return s(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND",
                    u
                }
                var c = i[a] = {
                    exports: {}
                };
                t[a][0].call(c.exports, function(e) {
                    var i = t[a][1][e];
                    return r(i ? i : e)
                }, c, c.exports, e, t, i, n)
            }
            return i[a].exports
        }
        for (var s = "function" == typeof require && require, a = 0; a < n.length; a++)
            r(n[a]);
        return r
    }({
        1: [function(e, t, i) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            function r(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i),
                    n && e(t, n),
                    t
                }
            }()
              , a = e("../utils/history")
              , o = n(a)
              , l = e("../utils/dom")
              , u = (n(l),
            function() {
                function e(t) {
                    r(this, e),
                    this.viewer = t,
                    this.el = null,
                    this.val = 0,
                    this._createEl(this.viewer)
                }
                return s(e, [{
                    key: "_createEl",
                    value: function(e) {
                        var t = document.createElement("a")
                          , i = "https://i.fyu.se/0/sv4.png"
                          , n = "cursor:pointer;-ms-transform:scale(.6);-webkit-transform:scale(.6);transform:scale(.65);position:absolute;left:-24px;top:-24px;z-index:501;width:90px;height:90px;";
                        e.config.logo && ("string" == typeof e.config.logo && (i = e.config.logo),
                        n += "background:url(" + i + ") no-repeat 34px 34px;background-size:52px;"),
                        t.style.cssText = n,
                        o["default"].avail(e.config.belongs) && (t.onclick = function(t) {
                            t.preventDefault(),
                            t.stopPropagation();
                            var i = o["default"].back(e.config.belongs, e.fid, e.el);
                            e._updateViewer(i.viewer, e.el.parentNode),
                            i.viewer.onviewport = !0
                        },
                        t.style.cssText += ';background: url("https://fyu.se/assets/back.png") 34px 34px / 52px no-repeat;');
                        var r = document.createElement("div");
                        r.style.cssText = "transform:translate3d(0,0,0);height:3px;left:0;position:absolute;text-align:center;top:0;width:100%;z-index:999;",
                        r.innerHTML = '<span style="background:#fc3549;display:block;height:100%;margin:0 auto;width:0;"></span>',
                        e.el.getElementsByClassName("fyu-renderer")[0].parentNode.appendChild(r),
                        this.viewer.config.nologo || (t["class"] = "fyu_ldr",
                        (e.config.embed || e.config.jsembed) && (window.location.href.indexOf("hw=1") !== -1 ? t.href = "https://fyu.se" : t.href = "https://fyu.se/v/" + e.fid,
                        t.setAttribute("target", "_blank")),
                        window.location.href.indexOf("nologo") !== -1 && (t.style.opacity = "0"),
                        e.el.appendChild(t),
                        this.logo = t),
                        this.el = r.getElementsByTagName("span")[0]
                    }
                }, {
                    key: "setPercentage",
                    value: function(e) {
                        var t = this;
                        this.el && e > this.val + 1 && window.requestAnimFrame(function() {
                            t.el && (t.el.style.width = e + "%"),
                            t.val = e
                        })
                    }
                }, {
                    key: "done",
                    value: function(e) {
                        var t = this
                          , i = function() {
                            t.viewer = null,
                            t.el && (t.el.parentNode.parentNode.removeChild(t.el.parentNode),
                            t.el = null)
                        };
                        e ? i() : setTimeout(i, 120)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.done(!0)
                    }
                }, {
                    key: "removeLogo",
                    value: function() {
                        this.logo && (this.logo.parentNode.removeChild(this.logo),
                        this.logo = null)
                    }
                }]),
                e
            }());
            i["default"] = u
        }
        , {
            "../utils/dom": 8,
            "../utils/history": 10
        }],
        2: [function(e, t, i) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            function r(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i),
                    n && e(t, n),
                    t
                }
            }()
              , a = e("../utils/dom")
              , o = n(a)
              , l = function() {
                function e(t) {
                    r(this, e),
                    this._createExternalLink2 = function(e, t) {
                        var i, n, r = this, s = {
                            href: "#",
                            target: "_blank"
                        };
                        return e.indexOf("fyu.se/v/") !== -1 ? (i = "#",
                        n = t,
                        s.onclick = function(t) {
                            t.preventDefault(),
                            r.viewer.update(r._getUidFromUrl(e))
                        }
                        ) : (i = e,
                        n = t ? t : e),
                        (0,
                        o["default"])("a", s, n)
                    }
                    ,
                    this.viewer = t,
                    this.data = [],
                    this.enabled = !1,
                    this.container = null
                }
                return s(e, [{
                    key: "getTags",
                    value: function() {
                        return this.data
                    }
                }, {
                    key: "show",
                    value: function() {
                        return this.enabled || (this.applyStyle(),
                        this.display(this.viewer.renderer.visible_frame)),
                        this.enabled = !0,
                        !1
                    }
                }, {
                    key: "hide",
                    value: function() {
                        for (var e = this.data.length; e--; )
                            this.data[e].elem.style.display = "none";
                        return this.enabled = !1,
                        !1
                    }
                }, {
                    key: "display",
                    value: function(e) {
                        for (var t = this.data.length; t--; )
                            this._showHideTag(this.data[t], e);
                        return !1
                    }
                }, {
                    key: "applyStyle",
                    value: function() {
                        if (!this.container)
                            return !1;
                        var e = this.viewer
                          , t = e.renderer.transform
                          , i = e.renderer.coords
                          , n = e.renderer.canvasWidth > e.renderer.canvasHeight ? 960 : 540
                          , r = e.renderer.canvasWidth > e.renderer.canvasHeight ? 540 : 960
                          , s = t.scale * (this.viewer.renderer.canvasWidth / n)
                          , a = "translate(" + -t.scrollLeft + "px," + -t.scrollTop + "px) scale(" + s + ")"
                          , o = this.container.style;
                        return o.zIndex = 4,
                        o.overflow = "hidden",
                        o.position = "absolute",
                        o.width = n + "px",
                        o.height = r + "px",
                        o.top = i.top + "px",
                        o.left = i.left + "px",
                        o.msTransform = a,
                        o.webkitTransform = a,
                        o.transform = a,
                        o.transformOrigin = "0 0",
                        o.webkitTransformOrigin = "0 0",
                        o.msTransformOrigin = "0 0",
                        !1
                    }
                }, {
                    key: "create",
                    value: function(e) {
                        var t = e.length;
                        if (!this.container) {
                            var i = document.createElement("div");
                            i.className = "fyuse_tags_container",
                            this.viewer.el.appendChild(i),
                            this.container = i
                        }
                        for (; t-- > 0; )
                            this._processItem(e[t])
                    }
                }, {
                    key: "_showHideTag",
                    value: function(e, t) {
                        var i = e[t]
                          , n = e.elem.style
                          , r = 0
                          , s = void 0
                          , a = void 0
                          , o = void 0
                          , l = void 0
                          , u = void 0;
                        if (i) {
                            u = this.viewer.renderer.transform,
                            o = this.viewer.renderer.canvasWidth * u.scale,
                            l = this.viewer.renderer.canvasHeight * u.scale,
                            n.display = "block";
                            var c = this.viewer.renderer.canvasWidth > this.viewer.renderer.canvasHeight ? 960 : 540
                              , h = u.scale * (this.viewer.renderer.canvasWidth / c);
                            if (s = e.elem.offsetWidth * h,
                            a = e.elem.offsetHeight * h,
                            1 === this.viewer.config.fy.m)
                                switch (this.viewer.config.fy.r) {
                                case 1:
                                    2 === e.s ? (n.top = ((1 - i.Y) * l - a / -2 - 12) / l * 100 + "%",
                                    n.left = ((1 - i.X) * o - s / 1.85) / o * 100 + "%") : (n.top = ((1 - i.Y) * l - a / 2) / l * 100 + "%",
                                    n.left = ((1 - i.X) * o - s / 1.5) / o * 100 + "%");
                                    break;
                                case 0:
                                    2 === e.s ? (n.top = (i.Y * l - a / -2 - 12) / l * 100 + "%",
                                    n.left = (i.X * o - s / 1.85) / o * 100 + "%") : (n.top = (i.Y * l + r) / l * 100 + "%",
                                    n.left = (i.X * o - s / 2) / o * 100 + "%")
                                }
                            else
                                switch (this.viewer.config.fy.r) {
                                case 2:
                                    n.top = (i.X * l + r) / l * 100 + "%",
                                    n.left = ((1 - i.Y) * o - s / 2) / o * 100 + "%";
                                    break;
                                case 0:
                                    n.top = (i.X * l + r) / l * 100 + "%",
                                    n.left = (i.Y * o - s / 2) / o * 100 + "%"
                                }
                        } else
                            n.display = "none"
                    }
                }, {
                    key: "_processItem",
                    value: function(e) {
                        this.data.push(this._reOrderObj(e, this.data.length + 1))
                    }
                }, {
                    key: "_reOrderObj",
                    value: function(e, t) {
                        var i = {
                            i: t,
                            s: e.Style,
                            Desc: e.Desc,
                            Type: e.Type,
                            Extra: e.Extra,
                            Extra2: e.Extra2,
                            Title: e.Title,
                            Content: e.Content
                        };
                        return e.Trackers.forEach(function(e) {
                            i[e.F] = {
                                X: e.X,
                                Y: e.Y
                            }
                        }),
                        i.elem = this._renderTag(i),
                        i
                    }
                }, {
                    key: "_getUidFromUrl",
                    value: function(e) {
                        return e.toLowerCase().replace("https://fyu.se/v/", "").replace("http://fyu.se/v/", "")
                    }
                }, {
                    key: "_createExternalLink",
                    value: function(e) {
                        return (0,
                        o["default"])("a", {
                            href: e,
                            target: "_blank"
                        }, e)
                    }
                }, {
                    key: "_createHashLink",
                    value: function(e) {
                        var t = "https://fyu.se/t/" + e.replace("#", "")
                          , i = e;
                        return (0,
                        o["default"])("a", {
                            href: t,
                            target: "_blank"
                        }, i)
                    }
                }, {
                    key: "_renderTag",
                    value: function(e) {
                        var t = "fyuse_tag";
                        this.viewer.config.tagStyle ? this.viewer.config.tagStyle / 1 == this.viewer.config.tagStyle ? t += this.viewer.config.tagStyle : t = this.viewer.config.tagStyle + "" : e.Title ? (void 0 == e.s && ("." == e.Title ? e.s = 3 : e.s = 2),
                        t += (e.s ? e.s : "") + "") : (e.s = 0,
                        e.Extra = e.Content,
                        t = e.s ? "fyuse_tag" + e.s : t);
                        var i = void 0
                          , n = void 0
                          , r = (this.viewer.id,
                        {
                            "class": t
                        });
                        if (i = (0,
                        o["default"])("span", r, ""),
                        e.Title) {
                            var s = "<h6>";
                            3 === e.Type ? s += '<a href="javascript: void(0)" onclick="fyu.o[' + this.viewer.id + "].update('" + e.Content + "')\">" + e.Title + "</a></h6>" : e.Type <= 1 ? s += e.Content ? '<a href="' + e.Content + '" target="_blank">' + e.Title + "</a></h6>" : e.Title + "</h6>" : 2 === e.Type && (s += '<a href="' + e.Content + '" target="_blank">' + e.Title + "</a></h6>"),
                            e.Desc && (s += "<p>" + e.Desc + "</p>",
                            e.Content && 2 === e.Type && (s += '<img src="' + e.Content + '" />')),
                            s += "<span>" + e.i + "</span>",
                            i.innerHTML = s
                        } else {
                            if (0 === e.Type) {
                                var a = document.createElement("div");
                                a.innerHTML = fyu.utils.tagLinks(e.Desc),
                                n = a.children[0]
                            } else
                                1 === e.Type ? n = this._createHashLink(e.Desc) : 2 === e.Type ? n = this._createExternalLink(e.Desc) : 3 == e.Type && (n = this._createExternalLink2(e.Desc, e.Extra));
                            n && i.appendChild(n)
                        }
                        return this.container.appendChild(i),
                        i
                    }
                }]),
                e
            }();
            i["default"] = l
        }
        , {
            "../utils/dom": 8
        }],
        3: [function(e, t, i) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            function r(e, t) {
                var i = fyu.info.hasTouch;
                e.events.resize.push(s.bind(e)),
                i && e.config.controls.hover && (e.config.controls.hover = !1,
                e.config.controls.drag = !0),
                e.listeners = new o["default"](e,t,i)
            }
            function s() {
                var e = 0;
                e = this.direction > 1 ? this.el.offsetWidth : this.el.offsetHeight;
                var t = this.config.fy.f / (.66 * e);
                return t > .145 && (t = .145),
                t < .081 && (t = .081),
                this.listeners && (this.listeners.mult = t),
                t
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var a = e("./events")
              , o = n(a);
            i["default"] = r
        }
        , {
            "./events": 4
        }],
        4: [function(e, t, i) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function r(e) {
                return 3 === e.which && 2 === e.button
            }
            function s(e, t) {
                var i = e.el.getClientRects()[0]
                  , n = window.pageYOffset || document.documentElement.scrollTop
                  , r = window.pageXOffset || document.documentElement.scrollLeft
                  , s = t.pageX - i.left - r
                  , a = t.pageY - i.top - n;
                return {
                    x: s,
                    y: i.height - a,
                    mouseX: s,
                    mouseY: a,
                    rect: i
                }
            }
            function a(e) {
                return e.mouseX < 0 || e.mouseY < 0 || e.mouseX > e.rect.width || e.mouseY > e.rect.height
            }
            function o(e, t) {
                var i = t.pageX - e.pageX
                  , n = t.pageY - e.pageY;
                return Math.sqrt(i * i + n * n)
            }
            function l(e, t) {
                return e.length >= 2 && t.length >= 2 ? o(t[0], t[1]) / o(e[0], e[1]) : 1
            }
            function u(e, t, i) {
                return {
                    x: Math.abs(t / e),
                    y: Math.abs(i / e)
                }
            }
            function c(e, t) {
                var i = {}
                  , n = e.touches
                  , r = n ? n.length : 0;
                if (r > 0) {
                    var a = n[0];
                    i.x = a.pageX,
                    i.y = a.pageY,
                    i.touches = n,
                    i.fingers = r
                } else
                    t ? (i = s(t, e),
                    i.hover = !0) : (i.x = e.pageX,
                    i.y = e.pageY);
                return i.target = e.target,
                i
            }
            function h(e, t) {
                var i = this;
                switch (t.type) {
                case "mousemove":
                case "touchmove":
                    e._move(i, t);
                    break;
                case "touchstart":
                case "mousedown":
                    i.gt && (clearTimeout(i.gt),
                    i.gt = null),
                    e._start(i, t);
                    break;
                case "touchend":
                case "mouseup":
                case "mouseout":
                    e._end(i, t);
                    break;
                case "mouseover":
                    e._startHover(i, t);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    e._wheel(i, t);
                    break;
                case "contextmenu":
                    e._prevent(t)
                }
            }
            function f(e) {
                var t = document.createElement("span");
                e.config.controls.hover ? t.innerHTML = "Mouse over and move" : t.innerHTML = "Click and Drag",
                t.className = "fyu_clickndrag noselect",
                e.el.appendChild(t)
            }
            function d(e) {
                var t = this;
                this.listeners.motionIntervalId = fyu.MotionHelper.start().schedule(function(i) {
                    if (!t.listeners.focus && 2 === t.onviewport) {
                        var n = -i.rotation_x
                          , r = i.rotation_y;
                        n === -1 && (n = -i.rx,
                        r = i.ry);
                        var s = 54 + t.imgdata.length / 3
                          , a = s / 1.04719;
                        a < 75 && (a = 75),
                        a > 160 && (a = 160),
                        n *= 3.52 * a,
                        r *= 3.52 * a + 12,
                        t.listeners.x += n,
                        t.listeners.y += r,
                        e._dist(t, {
                            x: n,
                            y: r
                        }, !0),
                        t.flintRendering()
                    }
                })
            }
            function p() {
                var e = 0;
                e = this.direction > 1 ? this.el.offsetWidth : this.el.offsetHeight;
                var t = this.config.fy.f / (.66 * e);
                return t > .1666 && (t = .1666),
                t < .0833333 && (t = .0833333),
                this.listeners && (this.listeners.mult = t),
                t
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.remove = i.add = void 0;
            var v = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i),
                    n && e(t, n),
                    t
                }
            }()
              , g = (e("../utils/helper-funcs"),
            function() {
                function e(t, i, r) {
                    n(this, e),
                    this.enabled = !1,
                    this.pointer = this._createPointer(i),
                    this.scale = {
                        start: null,
                        end: null,
                        value: 1,
                        minValue: .1
                    },
                    this.dragX = 0,
                    this.dragY = 0,
                    this.canvasPan = !1,
                    this.handleEvent = h.bind(t, this),
                    t.config.controls.drag ? this._setUpDrag(t, r) : t.config.controls.hover && this._setUpHover(t, r),
                    this.enable = function() {
                        this.enabled = !0,
                        fyu.MotionHelper ? d.bind(t, this)() : (!fyu.callbacks.motion && (fyu.callbacks.motion = []),
                        fyu.callbacks.motion.push(d.bind(t, this)))
                    }
                    ,
                    this.mult = p.bind(t)()
                }
                return v(e, [{
                    key: "_setUpDrag",
                    value: function(t, i) {
                        i ? (this._start = this._startTouch,
                        this._move = this._moveTouch,
                        this._end = this._endTouch,
                        e.add(t.el, "touchstart", this, !1)) : e.add(t.el, "mousedown", this, !1),
                        e.add(t.el, "contextmenu", this, !1),
                        0 !== t.direction.swipeX ? t.el.className += " fyv horiz" : t.el.className += " fyv vert",
                        i || t.config.nooverlay || this._addOverlayOn(t, "ondrag"),
                        !i && t.config.zoom ? (e.add(t.el, "mousewheel", this, !1),
                        e.add(t.el, "DOMMouseScroll", this, !1)) : i && t.config.zoom && (t.listeners.scale = {
                            start: null,
                            end: null,
                            value: 1,
                            minValue: .1
                        })
                    }
                }, {
                    key: "_setUpHover",
                    value: function(t, i) {
                        e.add(t.el, "mouseover", this, !1),
                        this._start = this._startHover,
                        this._move = this._moveHover,
                        this._end = this._endHover,
                        0 !== t.direction.swipeX ? t.el.className += " fyv horiz fyvhover" : t.el.className += " fyv vert fyvhover",
                        i || t.config.nooverlay || this._addOverlayOn(t, "onhover")
                    }
                }, {
                    key: "_start",
                    value: function(t, i) {
                        return !(!this.enabled || this._isAction(i)) && (this._checkAutoPlay(),
                        t.el.className += " fyuse",
                        e.add(document, "mousemove", this, !1),
                        e.add(document, "mouseup", this, !1),
                        this.pointer.start = c(i),
                        this.pointer.move = c(i),
                        this._pan(t, i),
                        this.swipe = !0,
                        void (this.focus = !0))
                    }
                }, {
                    key: "_move",
                    value: function(e, t) {
                        var i = c(t);
                        t.preventDefault(),
                        t.stopPropagation(),
                        this._pan(e, t, !0) || this._dist(e, i) && (this._drag(e),
                        e.flintRendering())
                    }
                }, {
                    key: "_end",
                    value: function(t, i) {
                        var n = t.el.className;
                        this.focus = !1,
                        this.canvasPan = !1,
                        t.el.className = n.replace(" fyuse", "").replace(" fyuse", ""),
                        e.remove(document, "mouseup", this, !1),
                        e.remove(document, "mousemove", this, !1),
                        this.swipe = !1,
                        t["onmouseup"] && t["onmouseup"]()
                    }
                }, {
                    key: "_keepScrolling",
                    value: function(e) {
                        var t = this;
                        e ? (this.focus = !0,
                        setTimeout(function() {
                            t.focus && (t.lock_action = !0,
                            window.ontouchmove = t._prevent)
                        }, 69),
                        clearTimeout(this.timeout),
                        this.timeout = null) : this.timeout = setTimeout(function() {
                            t.focus = !1,
                            t.lock_action = !1,
                            window.ontouchmove = null,
                            fyu.MotionHelper && fyu.MotionHelper.calibrate()
                        }, 202)
                    }
                }, {
                    key: "_startTouch",
                    value: function(t, i) {
                        return !!this.enabled && (e.add(document, "touchmove", this, !1),
                        e.add(document, "touchend", this, !1),
                        this._checkAutoPlay(),
                        this.swipe = !0,
                        this.pointer.start = c(i),
                        this.pointer.move = c(i),
                        this.pointer.start.fingers > 1 ? (this._prevent(i),
                        this.focus = !0,
                        this.scale.start = i.touches,
                        this.scale.value = 1,
                        !1) : (this._keepScrolling(!0),
                        void t.flintRendering({
                            swipe: !0
                        })))
                    }
                }, {
                    key: "_moveTouch",
                    value: function(e, t) {
                        var i = c(t);
                        return i.fingers > 1 ? (this._mobileZoom(e, t),
                        !1) : i.fingers > 0 ? (this.lock_action && (t.preventDefault(),
                        t.stopPropagation()),
                        this._dist(e, i),
                        void e.flintRendering({
                            swipe: !0
                        })) : (t.preventDefault(),
                        void t.stopPropagation())
                    }
                }, {
                    key: "_endTouch",
                    value: function(t, i) {
                        this._keepScrolling(),
                        e.remove(document, "touchend", this, !1),
                        e.remove(document, "touchmove", this, !1),
                        this.swipe = !1,
                        this._tap(t, i)
                    }
                }, {
                    key: "_startHover",
                    value: function(t, i) {
                        this._checkAutoPlay(),
                        this.pointer.start = c(i, t),
                        this.pointer.move = c(i, t),
                        this.swipe = !0,
                        this.focus = !0,
                        e.add(document, "mousemove", this, !1),
                        e.add(t.el, "mouseout", this, !1),
                        this._hover(t, i)
                    }
                }, {
                    key: "_moveHover",
                    value: function(e, t) {
                        var i = c(t, e);
                        return a(i) ? (this._prevent(t),
                        !1) : (this.lock_action && this._prevent(t),
                        this._dist(e, i),
                        void (this.scrolling || e.flintRendering()))
                    }
                }, {
                    key: "_endHover",
                    value: function(t, i) {
                        this.focus = !1,
                        e.remove(t.el, "mouseout", this, !1),
                        e.remove(document, "mousemove", this, !1)
                    }
                }, {
                    key: "_addOverlayOn",
                    value: function(e, t) {
                        f(e),
                        e.events[t].push(function() {
                            if (e.el.getElementsByClassName("fyu_clickndrag").length > 0) {
                                var i = e.el.getElementsByClassName("fyu_clickndrag")[0];
                                i.parentNode.removeChild(i),
                                i = null
                            }
                            e.events[t].pop()
                        })
                    }
                }, {
                    key: "_createPointer",
                    value: function(e) {
                        return {
                            start: {
                                x: 0,
                                y: 0
                            },
                            move: {
                                x: 0,
                                y: 0
                            },
                            end: {
                                x: 0,
                                y: 0
                            },
                            frames: {
                                current: e,
                                srcId: 0,
                                tgtId: 0,
                                alpha: 0,
                                curFrameId: e
                            },
                            set: function(e) {
                                this.frames.current = e,
                                this.frames.srcId = e,
                                this.frames.curFrameId = e
                            }
                        }
                    }
                }, {
                    key: "_dist",
                    value: function(e, t, i) {
                        var n, r, s, a, o, l = e.renderer, c = e.listeners, h = c.pointer, f = 9, d = l.tween.enabled, p = e.config.range[1] - e.config.range[0], v = 0, g = p - 1, m = p - 2, y = 1, w = 0, b = 0, x = 0, _ = 0, k = 0, T = 0;
                        if (i)
                            90 === window.orientation ? (_ = -t.y,
                            k = t.x) : window.orientation === -90 ? (_ = t.y,
                            k = -t.x) : (_ = t.x,
                            k = t.y),
                            T = {
                                x: 0,
                                y: 0
                            };
                        else {
                            var F = 58;
                            _ = t.x - h.move.x,
                            k = t.y - h.move.y,
                            T = u(F, _, k)
                        }
                        if (i ? (_ *= -e.direction.gyroX,
                        k *= e.direction.gyroY) : (_ *= e.direction.swipeX,
                        k *= e.direction.swipeY),
                        Math.abs(_) > Math.abs(k) ? (n = _,
                        b = T.x) : (n = k,
                        b = T.y),
                        d) {
                            if (f = 3,
                            Math.abs(n) > f) {
                                var z = Math.abs(n / f);
                                n += z
                            }
                            x = i ? Math.abs(n) / 15.4 : 1 + 1.5 * (b - .01666),
                            fyu.info.hasTouch && !i && (y = 1.2),
                            w = n / 500,
                            Math.abs(w) > .025 && (w = w > 0 ? .025 : -.025),
                            x > 4.95 && (x = 4.95)
                        } else
                            i ? (x = Math.abs(n) / 6.005,
                            w = n < 0 ? -.01 : .01,
                            x > 8.5 && (x = 8.5)) : (x = 1 + 5.78 * (b - .01666),
                            fyu.info.hasTouch && (y = 1.62),
                            w = n < 0 ? -.01 : .01,
                            x > 8.84 && (x = 8.84));
                        if (0 !== n) {
                            o = h.frames.current;
                            var I = (g / 2 + 40 > 190 ? 190 : g / 2 + 40) * y * w * x
                              , R = p / 10 >> 0;
                            if (p < 11 ? (I = Math.abs(I) / I,
                            R = .5) : R > 50 && (R = 50),
                            Math.abs(I) > R)
                                o += I < 0 ? -R : R;
                            else {
                                if (!I)
                                    return;
                                o += I
                            }
                            if (e.more.loop ? o < 0 ? o += g : o > g && (o -= g) : o = Math.max(v, Math.min(m, o)),
                            r = d ? o >> 0 : Math.round(o),
                            s = r + 1,
                            a = o - r,
                            !e.imgdata[s] || e.imgdata[s].loading)
                                return h.move = t,
                                !1;
                            h.frames.srcId = r,
                            h.frames.tgtId = s,
                            h.frames.alpha = a,
                            h.frames.curFrameId = o
                        }
                        return h.move = t,
                        !0
                    }
                }, {
                    key: "_wheel",
                    value: function(e, t) {
                        t.preventDefault();
                        var i = t.wheelDelta ? t.wheelDelta / 40 : t.detail ? -t.detail : 0;
                        return i && e.renderer.zoom(e, i, t),
                        !1
                    }
                }, {
                    key: "_mobileZoom",
                    value: function(e, t) {
                        t.preventDefault(),
                        t.stopPropagation();
                        var i = this.scale.value
                          , n = void 0;
                        return this.scale.end = t.touches,
                        this.scale.value = l(this.scale.start, this.scale.end),
                        n = this.scale.value < 1 ? 100 * (this.scale.value - i) : 50 * (this.scale.value - i),
                        e.renderer.zoom(e, n),
                        !1
                    }
                }, {
                    key: "scrollOnHover",
                    value: function(e) {
                        this.scrolling = !0
                    }
                }, {
                    key: "_pan",
                    value: function(e, t, i) {
                        if (i && this.canvasPan) {
                            var n = t.pageX - e.renderer.el.offsetLeft
                              , s = t.pageY - e.renderer.el.offsetTop;
                            return e.renderer.translate(n - this.dragX, s - this.dragY, e),
                            this.dragX = n,
                            this.dragY = s,
                            !0
                        }
                        e.config.zoom && r(t) && (this.canvasPan = !0,
                        this.dragX = this.pointer.start.x - e.renderer.el.offsetLeft,
                        this.dragY = this.pointer.start.y - e.renderer.el.offsetTop)
                    }
                }, {
                    key: "_checkAutoPlay",
                    value: function() {
                        this.autoplay && (this.autoplay.stop(),
                        this.autoplay = null)
                    }
                }, {
                    key: "_checkMotion",
                    value: function() {
                        fyu.MotionHelper && fyu.MotionHelper.calibrate()
                    }
                }, {
                    key: "_isAction",
                    value: function(e) {
                        return !(!e.target.className || 1 !== e.target.fy)
                    }
                }, {
                    key: "_tap",
                    value: function(e, t) {
                        var i = this.pointer.start;
                        if (i.target === t.target && i.target.hasAttribute("tap"))
                            for (var n = e.events.ontap, r = n.length; r-- > 0; )
                                if (n[r].elem === i.target) {
                                    n[r].func();
                                    break
                                }
                    }
                }, {
                    key: "_hover",
                    value: function(e, t) {
                        for (var i = e.events.onhover, n = i.length; n-- > 0; )
                            i[n]()
                    }
                }, {
                    key: "_drag",
                    value: function(e) {
                        for (var t = e.events.ondrag, i = t.length; i-- > 0; )
                            t[i]()
                    }
                }, {
                    key: "_prevent",
                    value: function(e) {
                        return e = e || window.event,
                        e.preventDefault && (e.preventDefault(),
                        e.stopPropagation()),
                        e.returnValue = !1,
                        !1
                    }
                }], [{
                    key: "add",
                    value: function(e, t, i, n) {
                        e.addEventListener(t, i, {
                            passive: !1,
                            capture: !0
                        })
                    }
                }, {
                    key: "remove",
                    value: function(e, t, i, n) {
                        e.removeEventListener(t, i, {
                            passive: !1,
                            capture: !0
                        })
                    }
                }]),
                e
            }());
            i["default"] = g;
            i.add = g.add,
            i.remove = g.remove
        }
        , {
            "../utils/helper-funcs": 9
        }],
        5: [function(e, t, i) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            var r = e("./visualization/fyu-viewer")
              , s = n(r)
              , a = e("./utils/net")
              , o = n(a)
              , l = e("./utils/helper-funcs")
              , u = e("./utils/utils")
              , c = n(u)
              , h = e("./ui/ui")
              , f = n(h);
            window.fyu = window.fyu || {
                entries: [],
                o: {},
                callbacks: {},
                info: {
                    is_mobile: !1,
                    hasTouch: !!("ontouchstart"in window),
                    hasGyro: !!window.DeviceMotionEvent
                },
                utils: null,
                ui: f["default"],
                autoplay: {},
                net: o["default"],
                root_path: "https://fyu.se/assets/2.0/viewer/",
                graveyard: {},
                addViewer: function(e, t, i, n) {
                    var r = document.createElement("div")
                      , a = "fyu_wrapper";
                    return a = 1 === n.fy.m ? "fyu_wrapper landscape" : "fyu_wrapper portrait",
                    r.className = a,
                    "string" == typeof e ? document.getElementById(e).appendChild(r) : e.appendChild(r),
                    s["default"].addViewer(r, t, i, n)
                },
                removeViewer: s["default"].removeViewer
            },
            fyu.utils = new c["default"],
            c["default"].makeShims(window),
            window.addEventListener && (window.addEventListener("resize", function(e) {
                (0,
                l.fireEvent)("resize", e),
                s["default"].renderOnViewport()
            }, !1),
            window.addEventListener("scroll", s["default"].renderOnViewport, !1))
        }
        , {
            "./ui/ui": 6,
            "./utils/helper-funcs": 9,
            "./utils/net": 13,
            "./utils/utils": 14,
            "./visualization/fyu-viewer": 16
        }],
        6: [function(e, t, i) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            function r(e) {
                var t = (0,
                w["default"])("a", {
                    className: "fyubtn tags",
                    onclick: function() {
                        x.tags(e)
                    }
                });
                t.fy = 1,
                e.el.getElementsByClassName("fyu_actions")[0].appendChild(t)
            }
            function s(e) {
                var t = (0,
                w["default"])("a", {
                    className: "fyubtn x2",
                    onclick: function(t) {
                        x.fullscreen(e)
                    }
                });
                t.fy = 1,
                e.el.getElementsByClassName("fyu_actions")[0].appendChild(t)
            }
            function a(e) {
                this.renderer.zoom(this, e)
            }
            function o(e) {
                var t, i, n = {
                    tap: !0,
                    "class": "fyubtn zoom-in"
                }, r = {
                    tap: !0,
                    "class": "fyubtn zoom-out"
                }, s = (0,
                w["default"])("a", n), o = (0,
                w["default"])("a", r), l = ["top-right", "top-left", "bottom-left", "top-right-vertical", "top-left-vertical", "bottom-left-vertical", "bottom-right-vertical"], u = e.config.zoomBtnsPos;
                fyu.info.hasTouch ? (e.events.ontap.push({
                    elem: s,
                    func: a.bind(e, 7)
                }),
                e.events.ontap.push({
                    elem: o,
                    func: a.bind(e, -7)
                })) : (s.on("click", a.bind(e, 7), !1),
                o.on("click", a.bind(e, -7), !1)),
                u && l.indexOf(u) > -1 ? (i = "fyu_actions ",
                u.indexOf("-vertical") > -1 && (i += "f_act_vert ",
                (e.more.tags || e.config.fullscreen) && (i += "f_act_fs_tag ")),
                i += u.replace("-vertical", "").replace("-", "_"),
                t = (0,
                w["default"])("div", {
                    "class": i
                }),
                e.el.appendChild(t)) : t = e.el.getElementsByClassName("fyu_actions")[0],
                o.fy = 1,
                s.fy = 1,
                t.appendChild(o),
                t.appendChild(s)
            }
            function l(e) {
                var t = 0 !== e.direction.swipeX ? "horizontal" : "vertical"
                  , i = function(t, i) {
                    return t + '[data-parent^="' + e.fid + '"]{cursor:url(' + i + ") 24 16, col-resize;}"
                }
                  , n = function(e, t) {
                    return e.split(",").map(function(e) {
                        return i(e, t)
                    }).join("")
                }
                  , r = {
                    main: e.config.cursor || "https://fyu.se/assets/viewer/cursor_h.gif",
                    grab: e.config.cursorGrab || "https://fyu.se/assets/viewer/cursor_hgrab.gif"
                }
                  , s = {
                    main: {
                        horizontal: ".fyv.horiz, .fyuv.horiz",
                        vertical: ".fyv.vert, .fyuv.vert"
                    },
                    grab: {
                        horizontal: ".fyv.fyuse.horiz",
                        vertical: ".fyv.fyuse.vert"
                    }
                }
                  , a = ""
                  , o = {
                    main: s["main"][t],
                    grab: s["grab"][t]
                };
                for (var l in o)
                    a += n(o[l], r[l]);
                return a
            }
            function u(e) {
                var t = document.createElement("style")
                  , i = l(e);
                if (t.setAttribute("type", "text/css"),
                t.styleSheet)
                    t.styleSheet.cssText = i;
                else {
                    var n = document.createTextNode(i);
                    t.appendChild(n)
                }
                document.getElementsByTagName("head")[0].appendChild(t)
            }
            function c(e, t) {
                var i = window.innerWidth
                  , n = window.innerHeight
                  , r = (0,
                w["default"])("div", {
                    id: "fyu_cover",
                    "class": "close"
                }, [(0,
                w["default"])("div", {
                    style: "overflow:hidden;position:relative;z-index:100;margin:0;max-width:" + i + "px;max-height:" + n + "px;"
                }), (0,
                w["default"])("a", {
                    "class": "fyu_close",
                    onclick: h
                }), (0,
                w["default"])("div", {
                    "class": "fyu_clayer",
                    onclick: h
                })])
                  , s = r.children[0];
                document.body.appendChild(r),
                document.body.style.overflow = "hidden",
                fyu.ui.fyuCover = r,
                fyu.ui.fsViewer = e;
                var a = e.el;
                a.setAttribute("data-parent", e.fid);
                var o = e.renderer.canvas
                  , l = o.getBoundingClientRect()
                  , u = document.body.getBoundingClientRect()
                  , c = l.top - u.top
                  , d = l.left - u.left
                  , p = e.renderer.coords.width << 0
                  , v = ""
                  , g = "z-index:100;position:absolute;left:" + d + "px;\n                    top:" + c + "px;opacity:1;width:" + p + "px;\n                    transition:all .34s;-webkit-transition:all .34s;" + v + ";"
                  , m = (0,
                w["default"])("img", {
                    style: g,
                    src: t
                });
                return document.body.appendChild(m),
                s.appendChild(a),
                setTimeout(function() {
                    requestAnimFrame(function() {
                        var e = s.getBoundingClientRect()
                          , t = document.body.getBoundingClientRect();
                        m.style.top = e.top - t.top + "px",
                        m.style.left = e.left - t.left + "px",
                        m.style.width = s.offsetWidth + "px",
                        m.style.opacity = .8,
                        r.style.opacity = 1,
                        setTimeout(function() {
                            m.parentNode.removeChild(m),
                            m = null,
                            document.addEventListener("keydown", f)
                        }, 310)
                    })
                }, 8),
                s
            }
            function h() {
                var e = fyu.ui.fyuCover;
                this && this.removeEventListener && this.removeEventListener("click", h),
                document.removeEventListener("keydown", f);
                var t = e.getElementsByClassName("fyv")[0];
                if (t) {
                    var i = fyu.ui.fsViewer
                      , n = i.config.belongs;
                    if (i.config.jsembed)
                        if (null !== n && n >= 0) {
                            var r = m["default"].get(n).elem;
                            r.appendChild(t)
                        } else
                            i.object.appendChild(t);
                    else
                        fyu.ui.fullScreenFromElemId.appendChild(t);
                    fyu.ui.fullScreenFromElemId = null,
                    i.renderer.resetTransform(),
                    fyu.ui.inFullscreen = !1,
                    fyu.utils.fireEvent(i, "resize")
                }
                i && i.config.embed && (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()),
                e.parentNode.removeChild(e),
                document.body.style.overflow = "auto",
                e = null,
                fyu.ui.fyuCover = null,
                fyu.ui.fsViewer = null,
                window.FYU && window.FYU.resizeAll()
            }
            function f(e) {
                27 === e.keyCode && h()
            }
            function d(e, t) {
                var i = fyu.ui.fyuCover;
                if (!i)
                    return !1;
                var n = i.children[0]
                  , r = fyu.utils.isMobile ? window.innerWidth : 1.6 * t.config.fy.w
                  , s = fyu.utils.isMobile ? window.innerHeight : 1.6 * t.config.fy.h
                  , a = fyu.utils.isMobile ? window.innerWidth : .8 * window.innerWidth
                  , o = fyu.utils.isMobile ? window.innerHeight : .8 * window.innerHeight
                  , l = fyu.utils.isMobile ? window.innerWidth / window.innerHeight : t.renderer.coords.width / t.renderer.coords.height
                  , u = 0
                  , c = 0;
                fyu.utils.isMobile && l > .88 && (l = t.renderer.coords.width / t.renderer.coords.height),
                o > a ? (u = a / l,
                a > r && (a = r,
                u = a / l),
                u > s && (u = s,
                a = u * l),
                c = a) : (c = o * l,
                c > r && (c = r,
                u = c / l),
                o > s && (u = s,
                c = u * l),
                u = o),
                n.style.width = c + "px",
                n.style.height = u + "px",
                n.style.maxWidth = r + "px",
                n.style.maxHeight = s + "px",
                n.style.left = (window.innerWidth - c) / 2 + "px",
                n.style.top = (window.innerHeight - u) / 2 + "px"
            }
            function p(e) {
                var t = /^function\s+([\w\$]+)\s*\(/.exec(e.toString());
                return t ? t[1] : ""
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var v = e("./../visualization/viewer-utils")
              , g = e("../utils/history")
              , m = n(g)
              , y = e("../utils/dom")
              , w = n(y)
              , b = document.documentElement
              , x = {
                fullScreenFromElemId: null,
                inFullscreen: !1,
                fsContainer: null,
                fyuCover: null,
                buildInterface: function(e) {
                    !function(e) {
                        e.ui = {},
                        e.ui.fullscreen = function() {
                            if (fyu.ui.fsViewer) {
                                if (fyu.ui.fsViewer === e)
                                    return void fyu.ui.exitfullscreen();
                                fyu.ui.exitfullscreen()
                            }
                            fyu.ui.fullscreen(e)
                        }
                        ,
                        e.ui.exitfullscreen = function() {
                            fyu.ui.fsViewer === e && fyu.ui.exitfullscreen()
                        }
                        ,
                        e.ui.tags = function() {
                            fyu.ui.tags(e)
                        }
                    }(e);
                    var t = document.createElement("div");
                    t.className = "fyu_actions",
                    e.el.appendChild(t),
                    e.config.zoom && e.config.zoomBtns && o(e),
                    e.more.tags && r(e),
                    (e.config.cursor || e.config.cursorGrab) && u(e),
                    e.ie || (!e.config.embed || document.fullScreenEnabled || document.fullscreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || fyu.utils.isMobile) && e.config.fullscreen && s(e)
                },
                tags: function(e) {
                    e.tagsInstance && (e.tagsInstance.enabled ? e.tagsInstance.hide() : e.tagsInstance.show())
                },
                fullscreen: function(e) {
                    if (e.renderer.resetTransform(),
                    this.inFullscreen) {
                        if (e && e.config.embed)
                            document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
                        else if (this.fyuCover) {
                            var t = this.fyuCover.getElementsByClassName("fyu_clayer")[0]
                              , i = document.createEvent("HTMLEvents");
                            i.initEvent("click", !0, !0),
                            t.dispatchEvent(i)
                        }
                        return void (this.inFullscreen = !1)
                    }
                    if (e.config.embed && !this.inFullscreen)
                        return b.requestFullscreen ? b.requestFullscreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.webkitRequestFullScreen && b.webkitRequestFullScreen(),
                        this.inFullscreen = !0,
                        void setTimeout(function() {
                            (0,
                            v.fireViewerEvent)(e, "resize")
                        }, 326);
                    var n = void 0;
                    try {
                        n = e.renderer.canvas.toDataURL("image/jpeg")
                    } catch (e) {
                        return
                    }
                    this.inFullscreen = !0,
                    this.fullScreenFromElemId = e.el,
                    this.fsContainer = c(e, n),
                    this.resize(e)
                },
                resize: function(e) {
                    var t = !1;
                    e.events.resize.forEach(function(e) {
                        "resizeOnFullScreen" === p(e) && (t = !0)
                    }),
                    t || e.events.resize.push(d),
                    fyu.utils.fireEvent(e, "resize")
                },
                exitfullscreen: function() {
                    h()
                },
                showActions: function(e) {
                    for (var t = e.el.getElementsByClassName("fyu_actions"), i = t.length; i--; )
                        t[i].style.display = "block"
                }
            };
            i["default"] = x
        }
        , {
            "../utils/dom": 8,
            "../utils/history": 10,
            "./../visualization/viewer-utils": 20
        }],
        7: [function(e, t, i) {
            "use strict";
            function n(e) {
                var t = e.id
                  , i = void 0;
                l[t].timerId = setInterval(function() {
                    i = e.renderer.visible_frame,
                    l[t].prevFrame === i && e.forceRenderHighResFrame(i),
                    l[t].prevFrame = i
                }, 85)
            }
            function r(e) {
                var t = e.id;
                l[t] && (clearInterval(l[t].timerId),
                l[t].timerId = null)
            }
            function s(e, t) {
                var i = t.config.highRes;
                if (t.config.highRes)
                    return !t.imgdata[e].highres || !t.imgdata[e].highres < i
            }
            function a(e) {
                var t = e.id
                  , i = l[t].prevFrame
                  , n = 12
                  , r = void 0
                  , a = []
                  , u = []
                  , c = !0;
                for (r in e.imgdata)
                    s(r, e) && (i > r ? a.push(r) : u.push(r));
                a.length > n && (a = a.slice(a.length - n, a.length)),
                u.length > n && (u = u.slice(0, n)),
                l[t].asyncId = setInterval(function() {
                    return a.length || u.length ? (c = !!a.length && (!u.length || !c),
                    void (c ? e.forceRenderHighResFrame(a.pop(), !0) : e.forceRenderHighResFrame(u.pop(), !0))) : (o(e),
                    !1)
                }, 85)
            }
            function o(e) {
                var t = e.id;
                l[t] && (clearInterval(l[t].asyncId),
                l[t].asyncId = null)
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var l = {};
            i.asyncFetch = {
                start: function(e) {
                    var t = e.id;
                    l[t] && l[t].asyncId && o(e),
                    l[t] = {
                        fetchFinished: !1,
                        prevFrame: e.renderer.visible_frame
                    },
                    n(e)
                },
                stop: function(e) {
                    var t = e.id;
                    r(e),
                    l[t].prevFrame = e.renderer.visible_frame,
                    e.forceRenderHighResFrame(l[t].prevFrame),
                    a(e)
                },
                forget: function(e) {
                    r(e),
                    o(e),
                    delete l[e.id]
                }
            }
        }
        , {}],
        8: [function(e, t, i) {
            "use strict";
            function n(e, t, i) {
                (0,
                a.add)(this, e, t, i)
            }
            function r(e, t, i) {
                (0,
                a.remove)(this, e, t, i)
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , a = e("../controls/events")
              , o = {
                elem: function(e, t, i) {
                    var o, l, u = document.createElement(e);
                    if (i || (i = ""),
                    "string" == typeof i)
                        l = i;
                    else if ("object" === ("undefined" == typeof i ? "undefined" : s(i)))
                        for (var c in i)
                            u.appendChild(i[c]);
                    for (o in t)
                        "onclick" === o ? "function" == typeof t[o] && (0,
                        a.add)(u, "click", t[o], !1) : "className" === o ? u.setAttribute("class", t[o]) : u.setAttribute(o, t[o]);
                    return u.remove = function() {
                        this.parentNode.removeChild(this)
                    }
                    ,
                    l && (u.innerHTML = l),
                    u.on = n,
                    u.off = r,
                    u
                }
            };
            i["default"] = o.elem
        }
        , {
            "../controls/events": 4
        }],
        9: [function(e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            i.unpackByte = function(e) {
                var t = e.config.fy.p;
                return t || (t = 0),
                t /= 1,
                e.more = {
                    tags: 0 !== (1 & t),
                    loop: 0 !== (4 & t),
                    pano: 0 !== (8 & t),
                    tweens: 0 !== (2 & t)
                },
                !0
            }
            ,
            i.fireEvent = function(e, t) {
                var i = fyu.entries.length
                  , n = null
                  , r = null;
                if (i > 0)
                    for (; 0 !== i--; )
                        if (n = fyu.entries[i],
                        n && n.events[e])
                            for (r = n.events[e].length; r-- > 0; )
                                n.events[e][r](t, n)
            }
            ,
            i.isElementInViewport = function(e) {
                var t = e.getBoundingClientRect();
                if (0 === t.width || 0 === t.height)
                    return 0;
                var i = function(e) {
                    var t = window.innerHeight || document.documentElement.clientHeight
                      , i = window.innerWidth || document.documentElement.clientWidth
                      , n = e.top + e.height
                      , r = e.left + e.width
                      , s = Math.min(e.height - (n - t), n)
                      , a = Math.min(e.width - (r - i), r);
                    return s / e.height > .22 && a / e.width > .22 ? s > 30 ? 2 : 1 : s > 39 && a > 39 ? 1 : 0
                }
                  , n = function(e) {
                    return e.offsetHeight > 40
                };
                return !n(e) || i(t)
            }
            ,
            i.debounce = function(e, t, i) {
                var n = void 0;
                return function() {
                    var r = this
                      , s = arguments
                      , a = function() {
                        n = null,
                        i || e.apply(r, s)
                    }
                      , o = i && !n;
                    clearTimeout(n),
                    n = setTimeout(a, t),
                    o && e.apply(this, s)
                }
            }
            ,
            i.loadScript = function(e, t) {
                var i = document.getElementsByTagName("head")[0]
                  , n = document.createElement("script");
                n.type = "text/javascript",
                n.src = e,
                n.onload = function() {
                    t && t(),
                    t = null,
                    i.removeChild(n),
                    n.onload = n = i = null
                }
                ,
                i.appendChild(n)
            }
            ,
            i.delayedExec = function(e, t) {
                var i = void 0;
                return function() {
                    clearTimeout(i),
                    i = setTimeout(t, e)
                }
            }
        }
        , {}],
        10: [function(e, t, i) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i),
                    n && e(t, n),
                    t
                }
            }()
              , s = function() {
                function e(t) {
                    n(this, e),
                    this.viewers = {}
                }
                return r(e, [{
                    key: "init",
                    value: function(e, t) {
                        this.viewers[e] || (this.viewers[e] = {
                            elem: t,
                            items: {},
                            navigation: []
                        })
                    }
                }, {
                    key: "add",
                    value: function(e, t, i, n) {
                        var r = this.get(e);
                        return i && (r.items[t] = i),
                        n && r.navigation.push(t),
                        {
                            container: r.elem,
                            viewer: r.items[t]
                        }
                    }
                }, {
                    key: "back",
                    value: function(e, t, i) {
                        var n = this.get(e);
                        if (n)
                            return this.add(e, t, i),
                            t = n.navigation.pop(),
                            {
                                container: n.elem,
                                viewer: n.items[t]
                            }
                    }
                }, {
                    key: "get",
                    value: function(e, t) {
                        return t ? this.viewers[e].items[t] : this.viewers[e]
                    }
                }, {
                    key: "avail",
                    value: function(e) {
                        return this.viewers[e] && this.viewers[e].navigation.length > 0
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.items = []
                    }
                }, {
                    key: "remove",
                    value: function(e) {}
                }]),
                e
            }()
              , a = new s;
            i["default"] = a
        }
        , {}],
        11: [function(e, t, i) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i),
                    n && e(t, n),
                    t
                }
            }()
              , s = function() {
                function e(t, i, r, s) {
                    n(this, e),
                    this.mX1 = t,
                    this.mY1 = i,
                    this.mX2 = r,
                    this.mY2 = s
                }
                return r(e, [{
                    key: "get",
                    value: function(t) {
                        return this.mX1 === this.mY1 && this.mX2 === this.mY2 ? t : e.calcBezier(this.getTForX(t), this.mY1, this.mY2)
                    }
                }, {
                    key: "getTForX",
                    value: function(t) {
                        for (var i = t, n = 0; n < 4; ++n) {
                            var r = e.getSlope(i, this.mX1, this.mX2);
                            if (0 === r)
                                return i;
                            var s = e.calcBezier(i, this.mX1, this.mX2) - t;
                            i -= s / r
                        }
                        return i
                    }
                }], [{
                    key: "calcA",
                    value: function(e, t) {
                        return 1 - 3 * t + 3 * e
                    }
                }, {
                    key: "calcB",
                    value: function(e, t) {
                        return 3 * t - 6 * e
                    }
                }, {
                    key: "calcC",
                    value: function(e) {
                        return 3 * e
                    }
                }, {
                    key: "calcBezier",
                    value: function(t, i, n) {
                        return ((e.calcA(i, n) * t + e.calcB(i, n)) * t + e.calcC(i)) * t
                    }
                }, {
                    key: "getSlope",
                    value: function(t, i, n) {
                        return 3 * e.calcA(i, n) * t * t + 2 * e.calcB(i, n) * t + e.calcC(i)
                    }
                }]),
                e
            }();
            i["default"] = s
        }
        , {}],
        12: [function(e, t, i) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i),
                    n && e(t, n),
                    t
                }
            }()
              , s = function() {
                function e() {
                    n(this, e),
                    this.base = null,
                    this.prev = null,
                    this.sent = !1,
                    this.dir = "+",
                    this.img = new Image
                }
                return r(e, [{
                    key: "check",
                    value: function(e, t) {
                        if (!t.ie) {
                            var i = void 0;
                            if (this.base || (this.base = e,
                            this.prev = e),
                            e > this.prev ? i = "+" : e < this.prev ? i = "-" : e === this.prev && (i = this.dir),
                            this.dir !== i && (this.dir = i,
                            this.base = e,
                            this.sent = !1),
                            Math.abs(this.base - e) >= 20 && !this.sent) {
                                if (t["ontilt"])
                                    for (var n = t["ontilt"].length; n-- > 0; )
                                        t["ontilt"][n] && t["ontilt"][n](t);
                                this.img.src = "https://fyu.se/api/1.5/logs/webviewer/" + t.fid,
                                this.sent = !0
                            }
                            this.prev = e
                        }
                    }
                }]),
                e
            }();
            i["default"] = s
        }
        , {}],
        13: [function(e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var n = {
                request: function(e) {
                    var t = e.url.replace("https:", "").replace("http:", "")
                      , i = e.method || "GET"
                      , n = e.success || function() {}
                      , r = e.failure || function() {}
                      , s = void 0;
                    window.XDomainRequest ? (s = new XDomainRequest,
                    s.onload = function() {
                        n.call(null, s)
                    }
                    ) : s = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Msxml2.XMLHTTP"),
                    s.onreadystatechange = function() {
                        4 === s.readyState && (200 === s.status ? n.call(null, s) : r.call(null, s))
                    }
                    ,
                    s.open(i, t, !0),
                    s.send(null)
                }
            };
            i["default"] = n
        }
        , {}],
        14: [function(e, t, i) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            function r(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i),
                    n && e(t, n),
                    t
                }
            }()
              , a = e("./../visualization/viewer-utils")
              , o = e("./helper-funcs")
              , l = e("../visualization/renderer-tween")
              , u = e("./../components/tags")
              , c = n(u)
              , h = function() {
                function e() {
                    r(this, e),
                    this.isMobile = !1,
                    this.andr = !1,
                    this.ios = !1,
                    this.req = {
                        d: 0,
                        c: {},
                        set: function(e, t) {
                            return this.c[++this.d] = {
                                h: e,
                                u: t
                            },
                            this.d
                        },
                        unset: function(e) {
                            delete this.c[e]
                        },
                        abort: function(e) {
                            fyu.utils.worker && fyu.utils.worker.postMessage({
                                "k": e
                            });
                            for (var t in this.c)
                                this.c[t].u === e && (this.c[t].h.onload = null,
                                this.c[t].h.abort(),
                                this.unset(t))
                        }
                    },
                    this.fireEvent = a.fireViewerEvent,
                    this.checkPlatforms()
                }
                return s(e, [{
                    key: "getOffset",
                    value: function(e) {
                        var t = void 0
                          , i = void 0
                          , n = void 0;
                        return i = e.ownerDocument.documentElement,
                        t = e.getBoundingClientRect(),
                        n = document.defaultView || e.parentWindow || window,
                        {
                            top: t.top + (n.pageYOffset || i.scrollTop) - (i.clientTop || 0),
                            left: t.left + (n.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
                        }
                    }
                }, {
                    key: "checkPlatforms",
                    value: function() {
                        var e = fyu.info;
                        this.andr = navigator.userAgent.toLowerCase().indexOf("android") > -1,
                        this.andr || (this.ios = navigator.userAgent.indexOf("iPhone") !== -1 || navigator.userAgent.indexOf("iPod") !== -1 || navigator.userAgent.indexOf("iPad") !== -1),
                        (this.ios || this.andr) && (e && (e.is_mobile = !0),
                        this.isMobile = !0,
                        setTimeout(function() {
                            window.requestAnimFrame(function() {
                                document.getElementsByTagName("html")[0].className += " mob"
                            })
                        }, 0)),
                        e.hasGyro && e.hasTouch && !fyu.MotionHelper && (0,
                        o.loadScript)(fyu.root_path + "motionhelper2.min.js")
                    }
                }, {
                    key: "fetchImage",
                    value: function(e, t, i, n, r, s) {
                        if (window.URL)
                            if (window.Worker && !s && navigator.appVersion.indexOf("MSIE 10") === -1) {
                                if (!fyu.utils.worker) {
                                    window.URL = window.URL || window.webkitURL;
                                    var a, o = "function downloadBase(url, type, success, error, viewer_id, tries) {var xhr = new XMLHttpRequest();var reqid = null;!type && (type = \"text\");xhr.open(\"GET\", url, true);xhr.responseType = type;xhr.onload = function() {req.unset(reqid);if(xhr.status === 0 && !tries) {downloadBase(url, type, success, error, viewer_id, 1);return ;}if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200)success(xhr.response);else error();};xhr.onerror = function() {req.unset(reqid);error();};reqid = req.set(xhr, viewer_id);xhr.send(null);}var req = {d: 0,c: {},set: function(xhrObj, uid) {this.c[++this.d] = {h: xhrObj,u: uid};return this.d;},unset: function(id) {delete this.c[id];},abort: function(uid) {for (var x in this.c) {if (this.c[x].u === uid) {this.c[x].h.onload = null;this.c[x].h.abort();this.unset(x);}}}};self.onmessage=function(e){if(e.data.k){ req.abort(e.data.k); return ;}downloadBase(e.data.u,'blob',function(data) {postMessage({'d':data,'e':1,'u':e.data.u,'i':e.data.i,'o':e.data.o});},function() {postMessage({'e':0,'u':e.data.u,'i':e.data.i,'o':e.data.o});},e.data.o);}";
                                    try {
                                        a = new Blob([o],{
                                            type: "application/javascript"
                                        })
                                    } catch (e) {
                                        window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder,
                                        a = new BlobBuilder,
                                        a.append(o),
                                        a = a.getBlob()
                                    }
                                    fyu.utils.worker = new Worker(URL.createObjectURL(a));
                                    fyu.utils.worker.onmessage = function(e) {
                                        1 === e.data.e ? fyu.o[e.data.o].onFrameSuccess(e.data.d, e.data.u, e.data.i) : fyu.o[e.data.o].onFrameFail(e.data.u, e.data.i)
                                    }
                                }
                                fyu.utils.worker.postMessage({
                                    "u": e,
                                    "o": r,
                                    "i": t
                                })
                            } else
                                this.downloadBase(e, "blob", function(r) {
                                    r.size > 512 ? i(r, e, t) : n(e, t)
                                }, function() {
                                    n(e, t)
                                }, r);
                        else {
                            var l = new Image;
                            l.onload = function() {
                                i(l, e, t)
                            }
                            ,
                            l.onerror = function() {
                                n(e, t)
                            }
                            ,
                            l.src = e
                        }
                    }
                }, {
                    key: "downloadBase",
                    value: function(e, t, i, n, r, s) {
                        var a = this.req
                          , o = new XMLHttpRequest
                          , l = void 0;
                        !t && (t = "text"),
                        e = e.replace("https:", "").replace("http:", ""),
                        o.open("GET", e, !0),
                        o.responseType = t,
                        o.onload = function() {
                            return a.unset(l),
                            0 !== o.status || s ? void (o.readyState === XMLHttpRequest.DONE && 200 === o.status ? i(o.response) : n()) : void _.downloadBase(e, t, i, n, r, 1)
                        }
                        ,
                        o.onerror = function() {
                            a.unset(l),
                            n()
                        }
                        ,
                        l = a.set(o, r),
                        o.send(null)
                    }
                }, {
                    key: "downloadTags",
                    value: function(e) {
                        fyu.net.request({
                            url: e.path + "tags.json?t=" + (new Date).getTime(),
                            success: function(t) {
                                fyu.utils.insertTags(e, JSON.parse(t.response || t.responseText))
                            }
                        })
                    }
                }, {
                    key: "insertTags",
                    value: function(e, t) {
                        return !(!e || !t) && (e.tagsInstance || (e.tagsInstance = new c["default"](e)),
                        void e.tagsInstance.create(t))
                    }
                }, {
                    key: "downloadTweens",
                    value: function(e) {
                        this.downloadBase(e.path + "tween.web", "arraybuffer", function(t) {
                            (0,
                            l.readTweenData)(t, e)
                        }, function() {}, {
                            uid: e.uid
                        })
                    }
                }, {
                    key: "hashLinks",
                    value: function(e) {
                        return e = e.replace(/#([A-Za-z0-9\u00C0-\u017F]+)/g, "<a style='cursor:pointer' class='action _hash' href='https://fyu.se/t/$1'>#$1</a>")
                    }
                }, {
                    key: "tagLinks",
                    value: function(e) {
                        var t = e.match(/@([^\]]+)/g)
                          , i = t ? t.length : 0;
                        if (0 === i)
                            return e;
                        for (var n = "", r = 0; r < i; ++r)
                            t[r].indexOf("~") !== -1 ? (n = t[r].split("~"),
                            n = "<a href='//fyu.se/u/" + n[0].substr(2) + "'>@" + n[1] + "</a>",
                            e = e.replace(t[r] + "]]", n)) : e = e.replace(t[r] + "]]", "");
                        return e
                    }
                }, {
                    key: "htmlEntities",
                    value: function(e) {
                        return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                    }
                }, {
                    key: "linkify",
                    value: function(e) {
                        var t = /((www[-A-Z0-9]{0,1}\.[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])|(\b(https?|ftp|file|):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]))/gi;
                        return e.replace(t, "<a style='cursor:pointer' target='_blank' href='$1'>$1</a>").replace(/='www./g, "='http://")
                    }
                }], [{
                    key: "makeShims",
                    value: function(e) {
                        e.requestAnimFrame = function() {
                            return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(t) {
                                e.setTimeout(t, 1e3 / 60)
                            }
                        }()
                    }
                }]),
                e
            }();
            i["default"] = h
        }
        , {
            "../visualization/renderer-tween": 17,
            "./../components/tags": 2,
            "./../visualization/viewer-utils": 20,
            "./helper-funcs": 9
        }],
        15: [function(e, t, i) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            function r(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i),
                    n && e(t, n),
                    t
                }
            }()
              , a = e("./../utils/key-spline")
              , o = n(a)
              , l = function() {
                function e(t, i, n, s) {
                    r(this, e),
                    this.loop = null;
                    var a = 52
                      , l = n;
                    l || (l = [.4, 0, .6, 1]);
                    var u = new o["default"](l[0],l[1],l[2],l[3])
                      , c = (i / a << 0) + 1
                      , h = c * (t.listeners.pointer.frames.current / t.config.fy.f) << 0
                      , f = !0;
                    window.fyu && !window.fyu.utils.isMobile && (this.loop = setInterval(function() {
                        if (!document.hidden && t.onviewport) {
                            var e = 3;
                            f ? ++h : --h,
                            h >= c - e ? (f = !f,
                            h -= e) : h <= e + 2 && (f = !f,
                            h = e + 2);
                            var i = u.get(h / c);
                            if (!t.loadedFull) {
                                var n = Math.round(t.config.fy.f + i);
                                if (!t.imgdata[n])
                                    return void (f = !f)
                            }
                            s(i)
                        }
                    }, a))
                }
                return s(e, [{
                    key: "stop",
                    value: function() {
                        this && this.loop && (clearInterval(this.loop),
                        this.loop = null)
                    }
                }]),
                e
            }();
            i["default"] = l
        }
        , {
            "./../utils/key-spline": 11
        }],
        16: [function(e, t, i) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            function r(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function s(e, t, i) {
                var n = e.config;
                t.lowres || i === n.thumb_index ? t.lowres = !1 : (t.lowres = !0,
                t.size < fyu.utils.rangeSize && (t.lowres = !1)),
                i = e.getFrameIndex(i),
                e.imgdata[i] = t
            }
            function a(e, t, i) {
                e.loader && e.loader.setPercentage(e.loadedFrames / t * 100, e.loaded),
                i && e.loadingThreads > 0 && e.loadFrames()
            }
            function o(e, t, i) {
                if (!fyu.graveyard[this.id]) {
                    var n = this.config
                      , r = n.fy.f - 1;
                    if (++this.loadedFrames,
                    ++this.loadingThreads,
                    s(this, e, i),
                    this.loadedFrames < r)
                        a(this, r, !this.loadPaused),
                        this.loadedFrames > 15 && !this.loaded && (0,
                        k.proceed)(this);
                    else if (this.loaded) {
                        if (this.loadedFull)
                            return;
                        if (this.loadedFull = !0,
                        this.renderer.enableTween(),
                        this.loader && (this.loader.done && this.loader.done(),
                        this.config.nologo && this.loader.removeLogo && this.loader.removeLogo()),
                        this["oncomplete"])
                            for (var o = this["oncomplete"].length; o-- > 0; )
                                this["oncomplete"][o] && this["oncomplete"][o](this),
                                this["oncomplete"][o] = null
                    } else
                        this.loadedFull = !0,
                        this.onviewport = (0,
                        b.isElementInViewport)(this.el),
                        this.renderer.enableTween(),
                        this.loader && this.loader.done && this.loader.done(),
                        (0,
                        k.proceed)(this)
                }
            }
            function l(e, t) {
                if (!fyu.graveyard[this.id]) {
                    var i = this.config
                      , n = i.fy.f - 1
                      , r = this.loadedFrames;
                    this.imgdata[t - 1] = null,
                    ++this.loadingThreads,
                    ++r <= n || this.loaded || (this.loadedFull = !0,
                    this.loader && this.loader.done && this.loader.done(),
                    (0,
                    k.proceed)(this)),
                    this.loadedFrames = r
                }
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var u = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i),
                    n && e(t, n),
                    t
                }
            }()
              , c = e("./renderer")
              , h = n(c)
              , f = e("../components/fyu-circle-loader")
              , d = n(f)
              , p = e("./../controls/controls")
              , v = n(p)
              , g = e("./autoplay")
              , m = n(g)
              , y = e("./../components/tags")
              , w = n(y)
              , b = e("../utils/helper-funcs")
              , x = e("../utils/async-fetch")
              , _ = e("../utils/utils")
              , k = (n(_),
            e("./viewer-utils"))
              , T = e("../utils/dom")
              , F = n(T)
              , z = e("../utils/history")
              , I = n(z)
              , R = 960
              , M = 540
              , E = -1
              , C = {}
              , L = 0
              , O = function() {
                function e(t, i, n, s) {
                    if (r(this, e),
                    this.renderer = null,
                    this.controls = null,
                    this.tagsInstance = null,
                    this.more = null,
                    this.object = t,
                    this.path = n,
                    this.config = s,
                    this.id = ++E,
                    this.el = null,
                    this.sens = s.fy["<"] || 1,
                    this.loader = null,
                    this.loaded = !1,
                    this.loadedFull = !1,
                    this.loadedFrames = 0,
                    this.loadPaused = null,
                    this.loadingThreads = fyu.utils.isMobile ? 5 : 18,
                    this.onviewport = !0,
                    this.imgdata = [],
                    this.events = {},
                    this.fid = i,
                    this.n_dim = 0,
                    this.direction = null,
                    this.isRendering = !1,
                    this.listeners = {},
                    this.onFrameSuccess = o.bind(this),
                    this.onFrameFail = l.bind(this),
                    this.events.resize = [],
                    this.events.orientation = [],
                    this.events.ondrag = [],
                    this.events.onhover = [],
                    this.events.ontap = [],
                    s.zoomResolution && s.zoomResolution.length > 0) {
                        var a = s.zoomResolution[s.zoomResolution.length - 1];
                        "1080p" === a ? (R = 1920,
                        M = 1080) : "720p" === a ? (R = 1280,
                        M = 720) : "4k" === a && (R = 3840,
                        M = 2160)
                    }
                    this.setUpViewerConfig();
                    var u = document.createElement("div");
                    if (u.setAttribute("data-parent", i),
                    this.object.appendChild(u),
                    this.el = u,
                    (0,
                    k.checkOlderBrowers)(this, i),
                    (0,
                    b.unpackByte)(this),
                    (0,
                    v["default"])(this, this.getFrameIndex(this.config.fy.t)),
                    this._startUpRendererAndCover(),
                    s.preload = s.autoplay ? 1 : s.preload,
                    s.preload)
                        if (this.loader = s.loader ? new s.loader(this) : new d["default"](this),
                        s.pauseOutOfViewPort) {
                            if (this.onviewport = (0,
                            b.isElementInViewport)(this.el),
                            this.onviewport) {
                                var c = this;
                                setTimeout(function() {
                                    c.loadFrames()
                                }, 20)
                            }
                        } else
                            this.loadFrames();
                    else
                        this.addDirectionButtonAndLoader();
                    this.more.tags && (this.tagsInstance = new w["default"](this),
                    fyu.utils.downloadTags(this)),
                    this.more.tweens && this.config.isTweened && navigator.appVersion.indexOf("MSIE 9") === -1 && fyu.utils.downloadTweens(this),
                    fyu.ui && fyu.ui.buildInterface(this)
                }
                return u(e, [{
                    key: "startVisualization",
                    value: function() {
                        var e = this;
                        this.onviewport = (0,
                        b.isElementInViewport)(this.el);
                        var t = this.getFrameIndex(this.config.thumb_index / 1);
                        if (this.listeners.pointer.set(t),
                        this.renderer.displayFrame(t) || this.safeRender(t),
                        this.listeners.enable(),
                        !fyu.info.has_touch && this.config.autoplay) {
                            var i = this.config.fy.f - 1;
                            this.listeners.autoplay = new m["default"](this,3080 + 10 * i,null,function(t) {
                                var n = Math.round(i * t);
                                e.renderer.displayFrame(n),
                                e.listeners.pointer.set(n)
                            }
                            )
                        }
                    }
                }, {
                    key: "_startUpRendererAndCover",
                    value: function() {
                        this.renderer = fyu.renderer = new h["default"](this,fyu.info.has_touch ? "canvas" : "canvas_big",this.config.fy.w > this.config.fy.h ? R : this.n_dim,this.config.fy.w > this.config.fy.h ? this.n_dim : R),
                        this.el.appendChild(this.renderer.getElement()),
                        this.renderer.makeCover(this, this.config.thumb_index, this.getFrameIndex(this.config.thumb_index))
                    }
                }, {
                    key: "addDirectionButtonAndLoader",
                    value: function() {
                        var e = this
                          , t = document.createElement("a");
                        if (t.className = "plBtn",
                        this.el.appendChild(t),
                        !this.config.hover_load || fyu.utils.isMobile)
                            t.onclick = function() {
                                e.loader = e.config.loader ? new e.config.loader(e) : new d["default"](e),
                                e.loadFrames(),
                                t.onclick = null,
                                e.el.removeChild(t),
                                t = null
                            }
                            ;
                        else {
                            var i = function() {
                                if (!(L > 0)) {
                                    if (e.loadPaused = !1,
                                    e.loadedFull)
                                        return e.el.onmouseover = null,
                                        e.el.onmouseout = null,
                                        !1;
                                    e.loader && (e.loader.el.parentNode.style.display = "block"),
                                    e.loadFrames()
                                }
                            };
                            t.onclick = function() {
                                e.el.onmouseover = null,
                                e.el.onmouseout = null,
                                e.loader = e.config.loader ? new e.config.loader(e) : new d["default"](e),
                                e.loadFrames(),
                                t.onclick = null,
                                e.el.removeChild(t),
                                t = null
                            }
                            ;
                            var n = function() {
                                if (!e.listeners || !e.listeners.sink) {
                                    if (e.loadedFull)
                                        return e.el.onmouseout = null,
                                        e.el.onmouseover = null,
                                        !1;
                                    e.loadPaused = !0,
                                    e.loader && (e.loader.el.parentNode.style.display = "none"),
                                    e.el.onmouseover || (e.el.onmouseover = i)
                                }
                            };
                            this.el.onmouseover = function() {
                                L > 0 || (t && (t.onclick = null,
                                e.el.removeChild(t),
                                t = null),
                                e.loader = e.config.loader ? new e.config.loader(e) : new d["default"](e),
                                e.loadFrames(),
                                e.loadPaused = !1,
                                e.el.onmouseout = n,
                                e.el.onmouseover = null)
                            }
                        }
                    }
                }, {
                    key: "setUpViewerConfig",
                    value: function() {
                        var e = this.config.fy
                          , t = this.config;
                        if (e.w > e.h ? (t.fy.ratio = R / M,
                        this.n_dim = Math.ceil(R / (e.w / e.h))) : (t.fy.ratio = M / R,
                        this.n_dim = Math.ceil(R * (e.w / e.h))),
                        t.thumb_index = t.thumb_index ? t.thumb_index : t.fy.t,
                        t.lite && (t.pauseOutOfViewPort = !0),
                        t.lite && !t.range) {
                            var i = e.s.filter(function(e) {
                                return t.thumb_index >= e[0] && t.thumb_index <= e[1]
                            })[0];
                            t.range = [i[0], i[1]]
                        }
                        if (t.range && t.range[0] && t.range[1] ? ((t.range[1] > e.f - 1 || t.range[1] < 0) && (t.range[1] = e.f),
                        t.range[0] < 0 && (t.range[0] = 0),
                        e.f = t.range[1] - t.range[0],
                        (t.thumb_index < t.range[0] || t.thumb_index > t.range[1]) && (t.thumb_index = Math.ceil((t.range[1] + t.range[0]) / 2))) : t.range = [0, e.f],
                        t.stab_scale = !1,
                        t.fy.g && (t.stab_scale = t.fy.w / t.fy.cw * t.fy.g),
                        window.location.href.indexOf("file://") > -1 && (this.path = "https:" + this.path.replace("https:", "").replace("http:", "")),
                        t.hasOwnProperty("logo") || (t.logo = 1),
                        t.hasOwnProperty("fullscreen") || (t.fullscreen = 1),
                        t.controls || (t.controls = {
                            drag: !0
                        }),
                        t.fy.l[1] === -1 && (t.fy.l[1] = t.fy.f - 1),
                        t.range && (t.fy.t < t.range[0] || t.fy.t > t.range[1]) && (t.fy.t = t.range[0] + (t.range[1] - t.range[0]) / 2 >> 0),
                        t.fy.t < 0 && (t.fy.t = 0),
                        t.isTweened = t.fy.cv === -1,
                        t.embed = window.location.href.indexOf("embed/") !== -1,
                        !t.embed && (t.embed = window.location.href.indexOf("hw=1") !== -1,
                        !t.embed))
                            try {
                                window.self !== window.top && (t.embed = !0)
                            } catch (e) {
                                t.embed = !0
                            }
                        this.direction = (0,
                        k.getDirection)(t),
                        this.events.orientation.push(function(e, t) {
                            t.direction = (0,
                            k.getDirection)(t.config)
                        }),
                        t.easing = fyu.info.hasTouch ? .82 : .34,
                        null !== t.belongs && t.belongs >= 0 ? I["default"].init(this.id, this.object) : I["default"].init(this.id, this.object)
                    }
                }, {
                    key: "fetchFrame",
                    value: function(e) {
                    	    	 function num(e){
									if(e.toString().length==1){
						     			return "000"+e
						     		}
						     		else if(e.toString().length==2){
						     			return "00"+e
						     		}
						     		else if(e.toString().length==3){
						     			return "0"+e
						     		}
						     		else if(e.toString().length==4){
						     			return e
						     		}
							}	
                        var t = this.config
                          , i = ".jpg"
                          , s = this.path + num(e) + i;
                        fyu.utils.fetchImage(s, e, this.onFrameSuccess, this.onFrameFail, this.id)    
                    }
                }, {
                    key: "loadParts",
                    value: function() {
                        for (var e = !0, t = this.loadingParts[0]; (t.left.length || t.right.length) && this.loadingThreads > 0; )
                            e = !!t.left.length && (!t.right.length || !e),
                            e ? this.fetchFrame(t.left.shift()) : this.fetchFrame(t.right.shift()),
                            --this.loadingThreads;
                        return !0
                    }
                }, {
                    key: "prepareFrames",
                    value: function() {
                        for (var e = this.config, t = e.thumb_index, i = e.range[0], n = e.range[1] - 1, r = {
                            0: {
                                left: [],
                                right: []
                            },
                            1: {
                                left: [],
                                right: []
                            }
                        }, s = t + 1; s <= n; s += 1)
                            r[0].left.push(s);
                        for (var a = t - 1; a >= i; a -= 1)
                            r[0].right.push(a);
                        return r
                    }
                }, {
                    key: "loadFrames",
                    value: function() {
                        this.loadingParts || (this.loadingParts = this.prepareFrames()),
                        this.loading = !0,
                        this.loadParts()
                    }
                }, {
                    key: "flintRendering",
                    value: function() {
                        this.renderer && (this.gt || (this.isRendering || (this.isRendering = !0,
                        ++L < 1 && (L = 1)),
                        this.renderPre(this)))
                    }
                }, {
                    key: "renderPre",
                    value: function(e) {
                        this.render(e)
                    }
                }, {
                    key: "_easing",
                    value: function(e) {
                        var t, i = e.frames.srcId, n = this.renderer.visible_frame, r = .37;
                        return r && !this.more.loop ? (t = i < n ? Math.floor((i - n) * r) : Math.ceil((i - n) * r),
                        n += t) : i
                    }
                }, {
                    key: "render",
                    value: function(e) {
                        if (e.isRendering) {
                            var t, i = e.listeners.pointer;
                            if (this.renderer.tween.enabled) {
                                t = i.frames.curFrameId;
                                var n = i.frames.srcId;
                                this.renderer.displayTween(n, n + 1, i.frames.alpha),
                                i.frames.current = t
                            } else {
                                var n = this._easing(i);
                                t = i.frames.curFrameId,
                                this.renderer.displayFrame(n),
                                i.frames.current = t
                            }
                            e.isRendering = !1,
                            --L
                        }
                    }
                }, {
                    key: "forceRenderHighResFrame",
                    value: function(e, t) {
                        var i = this
                          , n = e ? e : i.renderer.visible_frame
                          , r = i.imgdata[n]
                          , s = parseInt(i.config.range[0]) + parseInt(n)
                          , a = i.path + (this.config.mask ? "0s_" + this.config.mask + "/" : "") + "frames_" + s + ".jpg?v=1"
                          , o = this.config.highRes;
                        if (o && i.config.zoomResolution) {
                            if (i.config.zoomResolution.length < o)
                                return;
                            if (r && (!r.highres || r.highres < o)) {
                                if (r.highres = o,
                                this.config.zoomResolution.length > 0 && (a = i.path + this.config.zoomResolution[o - 1] + (this.config.mask ? "/0s_" + this.config.mask + "/" : "/") + "frames_" + s + ".jpg?v=1"),
                                i.imgdata[n].loading)
                                    return;
                                i.imgdata[n].loading = 1,
                                fyu.utils.fetchImage(a, n, function(e, n, r) {
                                    i.imgdata[r] = e,
                                    n.indexOf("/1080p/") > -1 ? (i.imgdata[r].highres = 2,
                                    (0,
                                    k.afterForceRenderFetch)(r, i, t)) : n.indexOf("/720p/") > -1 ? (i.imgdata[r].highres = 1,
                                    (0,
                                    k.afterForceRenderFetch)(r, i, t)) : n.indexOf("/4k/") > -1 && (i.imgdata[r].highres = 3,
                                    (0,
                                    k.afterForceRenderFetch)(r, i, t))
                                }, function() {
                                    i.imgdata[n].loading = !1
                                }, i.id, !0)
                            }
                        }
                        return !1
                    }
                }, {
                    key: "getFrameIndex",
                    value: function(e) {
                        return e - this.config.range[0]
                    }
                }, {
                    key: "getThumbPlayPath",
                    value: function() {
                        var e = this.path + "thumb_play.jpg";
                        return "/" === e[0] ? "https:" + e : e
                    }
                }, {
                    key: "goTo",
                    value: function(e, t, i) {
                        if (this.listeners.autoplay && this.listeners.autoplay.stop(),
                        this.gt && (clearTimeout(this.gt),
                        this.gt = null),
                        e < this.config.range[0])
                            return !1;
                        if (e > this.config.range[1])
                            return !1;
                        if (e == this.renderer.visible_frame)
                            return !0;
                        if (t)
                            this.renderer.displayFrame(e),
                            this.listeners.pointer.frames.current = e;
                        else {
                            var n = function(e) {
                                return e = 7 * e - 3.5,
                                1 / (1 + Math.pow(Math.E, -e))
                            }
                              , r = e - this.renderer.visible_frame;
                            if (Math.abs(r) < 5)
                                return this.goTo(e, 1);
                            var s = 16 * Math.abs(r);
                            s < 380 ? s = 380 : s > 1220 && (s = 1220),
                            i && (s = i);
                            var a = -1
                              , o = s / 34 >> 0
                              , l = this
                              , u = 0
                              , c = 16
                              , h = function t() {
                                var i = r * n((a + 1) / o)
                                  , h = i - u;
                                u = i;
                                var f = Math.round(h)
                                  , d = 34;
                                0 === f && a < o - 1 ? d = 10 : 0 === f && (d = s / 14 - 6),
                                l.gt = setTimeout(function() {
                                    if (++a < o) {
                                        var i = l.renderer.visible_frame + f;
                                        l.renderer.displayFrame(i),
                                        l.listeners.pointer.frames.alpha = 0,
                                        l.listeners.pointer.frames.current = i,
                                        l.listeners.pointer.frames.curFrameId = i,
                                        l.listeners.pointer.frames.tgtId = i,
                                        l.listeners.pointer.frames.srcId = i,
                                        t()
                                    } else if (l.renderer.visible_frame !== e && --c > 0) {
                                        var i = l.renderer.visible_frame + (h < 0 ? -1 : 1);
                                        l.renderer.displayFrame(i),
                                        l.listeners.pointer.frames.alpha = 0,
                                        l.listeners.pointer.frames.current = i,
                                        l.listeners.pointer.frames.curFrameId = i,
                                        l.listeners.pointer.frames.tgtId = i,
                                        l.listeners.pointer.frames.srcId = i,
                                        t()
                                    }
                                }, d)
                            };
                            h()
                        }
                        return !0
                    }
                }, {
                    key: "getCurrentFrameBlob",
                    value: function() {
                        return this.getFrameBlobForIndex(this.renderer.visible_frame)
                    }
                }, {
                    key: "getFrameBlobForIndex",
                    value: function(e) {
                        return !(!this.imgdata || !this.imgdata[e] || this.imgdata[e].loading) && this.imgdata[e]
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        fyu.graveyard[this.id] = !0,
                        this.isRendering = !1,
                        --L,
                        clearTimeout(C[this.id]),
                        C[this.id] = null,
                        this.listeners && (this.listeners.motionIntervalId && (fyu.MotionHelper && fyu.MotionHelper.clearScheduled(this.listeners.motionIntervalId),
                        this.listeners.motionIntervalId = null),
                        this.listeners.autoplay && this.listeners.autoplay.stop()),
                        this.config.highRes && x.asyncFetch.forget(q),
                        this.renderer && this.renderer.destroy(),
                        this.el = null,
                        this.c && (this.c = null),
                        fyu.utils.req.abort(this.id),
                        this.loader && this.loader.destroy && this.loader.destroy(),
                        this.renderer = this.loader = this.object = this.imgdata = this.events = null,
                        fyu.o[this.id] = null,
                        delete fyu.o[this.id];
                        var e = fyu.entries.length;
                        if (0 === e)
                            return !1;
                        for (; 0 !== e--; )
                            if (fyu.entries[e] === this) {
                                fyu.entries[e] = null,
                                fyu.entries.splice(e, 1);
                                break
                            }
                    }
                }, {
                    key: "safeRender",
                    value: function(e) {
                        if (!this.renderer.displayFrame(e))
                            if (e > 0)
                                for (; !this.renderer.displayFrame(--e) && 0 !== e; )
                                    ;
                            else
                                for (; !this.renderer.displayFrame(++e) && 10 !== e; )
                                    ;
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        if (this.fid !== e) {
                            e = e.toLowerCase().replace("https://fyu.se/v/", ""),
                            e = e.replace("http://fyu.se/v/", "");
                            var t, i = this, n = I["default"].get(this.id, e);
                            if (n)
                                I["default"].add(this.id, this.fid, !1, !0),
                                this._updateViewer(n, this.object);
                            else {
                                t = I["default"].add(this.id, this.fid, this.el, !0);
                                var r = (0,
                                F["default"])("div");
                                window.FYU && FYU.add(e, r, {
                                    zoom: 1,
                                    preload: 1,
                                    fullscreen: 1,
                                    belongs: this.id
                                }).on("init", function(e) {
                                    i._updateViewer(r.children[0].children[0], i.object),
                                    e.object = i.object,
                                    e.onviewport = !0,
                                    fyu.utils.fireEvent(e, "resize")
                                }).tags()
                            }
                        }
                    }
                }, {
                    key: "_updateViewer",
                    value: function(e, t) {
                        if (fyu.ui.inFullscreen) {
                            var i = fyu.ui.fsContainer;
                            i.innerHTML = "",
                            i.appendChild(e)
                        } else
                            t.innerHTML = "",
                            t.appendChild(e);
                        window.FYU && window.FYU.resizeAll()
                    }
                }], [{
                    key: "addViewer",
                    value: function(t, i, n, r) {
                        var s = t;
                        if ("string" == typeof t && (s = document.getElementById(t)),
                        s) {
                            var a = new e(s,i,n,r);
                            return fyu.entries.push(a),
                            fyu.o[a.id] = a,
                            a
                        }
                        return !1
                    }
                }, {
                    key: "removeViewer",
                    value: function(e) {
                        var t = fyu.entries.length;
                        if ("string" == typeof e) {
                            for (; t-- > 0; )
                                if (fyu.entries[t].fid === e)
                                    return fyu.entries[t].destroy(),
                                    t
                        } else
                            for (; t-- > 0; )
                                if (fyu.entries[t] === e)
                                    return fyu.entries[t].destroy(),
                                    t;
                        return !1
                    }
                }]),
                e
            }();
            O.renderOnViewport = (0,
            b.debounce)(function() {
                var e = fyu.entries.length
                  , t = null;
                if (e > 0)
                    for (var i = !1; 0 !== e--; )
                        t = fyu.entries[e],
                        t && (t.onviewport = (0,
                        b.isElementInViewport)(t.el),
                        i || 2 !== t.onviewport || (i = !0,
                        setTimeout(function() {
                            fyu.MotionHelper && fyu.MotionHelper.calibrate()
                        }, 30)),
                        t.config.pauseOutOfViewPort && (!t.onviewport || t.loadedFull || t.loading ? t.onviewport || t.loadedFull || t.loadPaused || (t.loadPaused = !0,
                        t.loading = !1) : (t.loadPaused = !1,
                        t.loadFrames())));
                fyu.MotionHelper && setTimeout(function() {}, 25)
            }, 101),
            i["default"] = O
        }
        , {
            "../components/fyu-circle-loader": 1,
            "../utils/async-fetch": 7,
            "../utils/dom": 8,
            "../utils/helper-funcs": 9,
            "../utils/history": 10,
            "../utils/utils": 14,
            "./../components/tags": 2,
            "./../controls/controls": 3,
            "./autoplay": 15,
            "./renderer": 19,
            "./viewer-utils": 20
        }],
        17: [function(e, t, i) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function r(e, t, i) {
                return Math.cos(t) * e * i
            }
            function s(e, t, i, n, s, a, o) {
                var l = t.x
                  , u = t.y
                  , c = t.theta
                  , h = t.scale
                  , f = o
                  , d = i / s
                  , p = n / a
                  , v = r(h, c, o)
                  , g = Math.sin(c) * h * f;
                e.setTransform(v, g * d / p, -g * p / d, v, (-.5 * v * i + .5 * g * n + f * h * l + .5 * i) / d, (-.5 * g * i - .5 * v * n + f * h * u + .5 * n) / p)
            }
            function a(e, t, i) {
                var n = this.tween.trans
                  , r = this.tween.alpha
                  , a = this.viewer.config.fy.w
                  , o = this.viewer.config.fy.h
                  , u = this.canvasWidth
                  , c = this.canvasHeight
                  , h = this.tween.scale
                  , f = l.identityInterpolate(r, n)
                  , d = l.identityInterpolate(1 - r, n).inverse()
                  , p = "lighter";
                e.save(),
                e.clearRect(0, 0, u, c),
                e.globalCompositeOperation = p,
                s(e, f, a, o, u, c, h),
                e.globalAlpha = 1 - r,
                e.drawImage(t, 0, 0, u, c),
                s(e, d, a, o, u, c, h),
                e.globalAlpha = r,
                e.drawImage(i, 0, 0, u, c),
                e.restore()
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var o = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i),
                    n && e(t, n),
                    t
                }
            }()
              , l = function() {
                function e(t, i, r, s) {
                    n(this, e),
                    this.x = t,
                    this.y = i,
                    this.theta = r,
                    this.scale = s
                }
                return o(e, [{
                    key: "inverse",
                    value: function() {
                        var t = Math.cos(this.theta)
                          , i = Math.sin(this.theta)
                          , n = t * -this.x + i * -this.y
                          , r = -i * -this.x + t * -this.y;
                        return new e(n * this.scale,r * this.scale,(-this.theta),1 / this.scale)
                    }
                }], [{
                    key: "identityInterpolate",
                    value: function(t, i) {
                        return new e(t * i.x,t * i.y,t * i.theta,1 - t + t * i.scale)
                    }
                }]),
                e
            }();
            i.readTweenData = function(e, t) {
                if (!e || e.byteLength < 64)
                    return !1;
                var i = new Uint32Array(e,0)[0];
                if (1 !== i)
                    return !1;
                for (var n = (new Uint32Array(e,4)[0],
                new Uint32Array(e,8)[0],
                new Uint32Array(e,12)[0],
                new Uint32Array(e,16)[0],
                new Uint32Array(e,20)[0],
                new Float32Array(e,24)), r = n.length, s = [], a = 0; a < r; a += 4)
                    s.push(new l(n[a],n[a + 1],n[a + 2],n[a + 3]));
                t.renderer.tween.data = s
            }
            ;
            i.tweenImages = a
        }
        , {}],
        18: [function(e, t, i) {
            "use strict";
            function n() {
                this.r = 0,
                this.g = 0,
                this.b = 0,
                this.a = 0,
                this.next = null
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            i.convertDataURIToBinary = function(e) {
                for (var t = window.atob(e), i = t.length, n = new Uint8Array(new ArrayBuffer(i)), r = 0; r < i; r++)
                    n[r] = t.charCodeAt(r);
                return n
            }
            ,
            i.getResizedTable = function(e, t, i) {
                var n = t * i
                  , r = 4 * n
                  , s = null;
                s = window.Uint8ClampedArray ? new Uint8ClampedArray(r) : new Uint8Array(r);
                for (var a = 18, o = 255, l = 28, u = -1, c = 0, h = 0; h < n && (++u,
                h % t == 0 && h > a && (++c,
                h = c * t * a),
                !(l <= u)); h += a)
                    for (var f = 3 * u, d = e[f], p = e[f + 1], v = e[f + 2], g = 0, m = 0; m < a; ++m) {
                        g = m * t;
                        for (var y = 0; y < a; ++y) {
                            var w = 4 * (h + g + y);
                            s[w] = v,
                            s[w + 1] = p,
                            s[w + 2] = d,
                            s[w + 3] = o
                        }
                    }
                return s
            }
            ,
            i.stackBlurCanvasRGBA = function(e, t, i, r) {
                var s, a, o, l, u, c, h, f, d, p, v, g, m, y, w, b, x, _, k, T, F, z, I, R, M = e.data, E = r + r + 1, C = t - 1, L = i - 1, O = r + 1, H = O * (O + 1) / 2, S = new n, B = S;
                for (o = 1; o < E; o++)
                    if (B = B.next = new n,
                    o == O)
                        var A = B;
                B.next = S;
                var j = null
                  , P = null;
                h = c = 0;
                var U = 271
                  , D = 15;
                for (a = 0; a < i; a++) {
                    for (b = x = _ = k = f = d = p = v = 0,
                    g = O * (T = M[c]),
                    m = O * (F = M[c + 1]),
                    y = O * (z = M[c + 2]),
                    w = O * (I = M[c + 3]),
                    f += H * T,
                    d += H * F,
                    p += H * z,
                    v += H * I,
                    B = S,
                    o = 0; o < O; o++)
                        B.r = T,
                        B.g = F,
                        B.b = z,
                        B.a = I,
                        B = B.next;
                    for (o = 1; o < O; o++)
                        l = c + ((C < o ? C : o) << 2),
                        f += (B.r = T = M[l]) * (R = O - o),
                        d += (B.g = F = M[l + 1]) * R,
                        p += (B.b = z = M[l + 2]) * R,
                        v += (B.a = I = M[l + 3]) * R,
                        b += T,
                        x += F,
                        _ += z,
                        k += I,
                        B = B.next;
                    for (j = S,
                    P = A,
                    s = 0; s < t; s++)
                        M[c + 3] = I = v * U >> D,
                        0 != I ? (I = 255 / I,
                        M[c] = (f * U >> D) * I,
                        M[c + 1] = (d * U >> D) * I,
                        M[c + 2] = (p * U >> D) * I) : M[c] = M[c + 1] = M[c + 2] = 0,
                        f -= g,
                        d -= m,
                        p -= y,
                        v -= w,
                        g -= j.r,
                        m -= j.g,
                        y -= j.b,
                        w -= j.a,
                        l = h + ((l = s + r + 1) < C ? l : C) << 2,
                        b += j.r = M[l],
                        x += j.g = M[l + 1],
                        _ += j.b = M[l + 2],
                        k += j.a = M[l + 3],
                        f += b,
                        d += x,
                        p += _,
                        v += k,
                        j = j.next,
                        g += T = P.r,
                        m += F = P.g,
                        y += z = P.b,
                        w += I = P.a,
                        b -= T,
                        x -= F,
                        _ -= z,
                        k -= I,
                        P = P.next,
                        c += 4;
                    h += t
                }
                for (s = 0; s < t; s++) {
                    for (x = _ = k = b = d = p = v = f = 0,
                    c = s << 2,
                    g = O * (T = M[c]),
                    m = O * (F = M[c + 1]),
                    y = O * (z = M[c + 2]),
                    w = O * (I = M[c + 3]),
                    f += H * T,
                    d += H * F,
                    p += H * z,
                    v += H * I,
                    B = S,
                    o = 0; o < O; o++)
                        B.r = T,
                        B.g = F,
                        B.b = z,
                        B.a = I,
                        B = B.next;
                    for (u = t,
                    o = 1; o <= r; o++)
                        c = u + s << 2,
                        f += (B.r = T = M[c]) * (R = O - o),
                        d += (B.g = F = M[c + 1]) * R,
                        p += (B.b = z = M[c + 2]) * R,
                        v += (B.a = I = M[c + 3]) * R,
                        b += T,
                        x += F,
                        _ += z,
                        k += I,
                        B = B.next,
                        o < L && (u += t);
                    for (c = s,
                    j = S,
                    P = A,
                    a = 0; a < i; a++)
                        l = c << 2,
                        M[l + 3] = I = v * U >> D,
                        I > 0 ? (I = 255 / I,
                        M[l] = (f * U >> D) * I,
                        M[l + 1] = (d * U >> D) * I,
                        M[l + 2] = (p * U >> D) * I) : M[l] = M[l + 1] = M[l + 2] = 0,
                        f -= g,
                        d -= m,
                        p -= y,
                        v -= w,
                        g -= j.r,
                        m -= j.g,
                        y -= j.b,
                        w -= j.a,
                        l = s + ((l = a + O) < L ? l : L) * t << 2,
                        f += b += j.r = M[l],
                        d += x += j.g = M[l + 1],
                        p += _ += j.b = M[l + 2],
                        v += k += j.a = M[l + 3],
                        j = j.next,
                        g += T = P.r,
                        m += F = P.g,
                        y += z = P.b,
                        w += I = P.a,
                        b -= T,
                        x -= F,
                        _ -= z,
                        k -= I,
                        P = P.next,
                        c += t
                }
                return e
            }
            ,
            i.initTransform = function(e, t) {
                e.style.msTransform = t,
                e.style.webkitTransform = t,
                e.style.transform = t,
                e.style.transformOrigin = "0 0",
                e.style.webkitTransformOrigin = "0 0",
                e.style.msTransformOrigin = "0 0"
            }
            ,
            i.createObjectURL = function(e, t) {
                return e.imgdata[t] ? URL.createObjectURL(e.imgdata[t]) : null
            }
        }
        , {}],
        19: [function(e, t, i) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            function r(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i),
                    n && e(t, n),
                    t
                }
            }()
              , a = e("../utils/metrics")
              , o = n(a)
              , l = e("../utils/async-fetch")
              , u = e("./renderer-utils")
              , c = e("./renderer-tween")
              , h = function() {
                function e(t, i, n, s) {
                    r(this, e),
                    this.viewer = t,
                    this.type = i,
                    this.width = n,
                    this.height = s,
                    this.scale_mode = 0,
                    this.inFullscreen = !1,
                    this.el = document.createElement("div"),
                    this.el.className = "fyu-renderer",
                    this.canvas = null,
                    this.img = null,
                    this.imgTweenSource = null,
                    this.imgTweenTarget = null,
                    this.direction = 0,
                    this.ctx = null,
                    this.canvasWidth = null,
                    this.canvasHeight = null,
                    this.trans = [],
                    this.full_width = n,
                    this.full_height = s,
                    this.cover = null,
                    this.scale_mode = 0,
                    this.coords = {
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    },
                    this.transform = {
                        scale: 1,
                        minScale: 1,
                        maxScale: t.config.maxzoom ? t.config.maxzoom : 1.92,
                        scrollLeft: 0,
                        scrollTop: 0,
                        maxScrollLeft: 0,
                        maxScrollTop: 0
                    },
                    this.transform.maxScale = 960 * this.transform.maxScale / this.full_width,
                    this.isAnimated = !1,
                    this.ratio = t.config.fy.ratio,
                    this.hasTweening = t.config.fy.cv < 1,
                    this.tween = {
                        exists: t.more.tweens && t.config.isTweened,
                        enabled: !1,
                        sourceFrame: 0,
                        targetFrame: 0,
                        alpha: 0,
                        trans: null,
                        data: null,
                        scale: 1.059
                    },
                    this.holder = t.el,
                    this.v_w = this.holder.offsetWidth,
                    this.v_h = this.holder.offsetHeight,
                    this.build(),
                    this.metrics = new o["default"]
                }
                return s(e, [{
                    key: "build",
                    value: function() {
                        var e = this;
                        "canvas" === this.type ? this._createElements() : "canvas_big" === this.type ? (this._createElements(),
                        this.scale_mode = 1) : (this.canvas = this.img = document.createElement("img"),
                        this.canvas.setAttribute("unselectable", "on")),
                        this._setDimensions(),
                        this.resize(this.viewer, !1),
                        this.viewer.config.blur && this.blurCanvas(this.viewer),
                        this._setLoaders(),
                        this.viewer.events.resize.push(function(t, i) {
                            e.resize(i, !0)
                        }),
                        this.applyTween = c.tweenImages.bind(this)
                    }
                }, {
                    key: "_createElements",
                    value: function() {
                        this.img = new Image,
                        this.tween.exists && (this.imgTweenSource = new Image,
                        this.imgTweenTarget = new Image),
                        this.canvas = document.createElement("canvas"),
                        this.canvas.className = "fyu-canvas",
                        this.canvas.mozOpaque = !0,
                        this.ctx = this.canvas.getContext("2d", {
                            alpha: !1
                        })
                    }
                }, {
                    key: "_setDimensions",
                    value: function() {
                        var e = this.viewer.config.fy.ratio
                          , t = this.v_w / this.v_h
                          , i = this.holder.offsetWidth
                          , n = this.holder.offsetHeight
                          , r = 0
                          , s = 0;
                        "canvas" === this.type ? this._createElements() : "canvas_big" === this.type ? (this._createElements(),
                        this.scale_mode = 1) : (this.canvas = this.img = document.createElement("img"),
                        this.canvas.setAttribute("unselectable", "on")),
                        0 === this.scale_mode ? (this.canvasWidth = this.el.offsetWidth,
                        this.canvasHeight = this.el.offsetHeight,
                        this.viewer.config.aspect && 1 === this.viewer.config.aspect.mode && Math.abs(e - t) < this.viewer.config.aspect.tolerance ? t >= e ? (s = i / e,
                        r = i) : (r = n * e,
                        s = n) : t >= e ? (r = n * e,
                        s = n) : (s = i / e,
                        r = i),
                        this.canvasWidth = r,
                        this.canvasHeight = s) : (this.canvasWidth = this.full_width,
                        this.canvasHeight = this.full_height),
                        this.canvas.width = this.canvasWidth,
                        this.canvas.height = this.canvasHeight,
                        this.el.appendChild(this.canvas)
                    }
                }, {
                    key: "resize",
                    value: function(e, t) {
                        var i = e.config.fy.ratio
                          , n = e.el
                          , r = n.offsetWidth
                          , s = n.offsetHeight
                          , a = r / s
                          , o = 0
                          , l = 0
                          , u = 0;
                        this.viewer.config.aspect && 1 === this.viewer.config.aspect.mode && Math.abs(i - a) < e.config.aspect.tolerance ? a >= i ? (l = r / i,
                        u = 0) : (o = s * i,
                        u = 1) : a >= i ? (o = s * i,
                        u = 2) : (l = r / i,
                        u = 3),
                        this._setCoords(r, s, o, l, u),
                        this._applyCoordsToEl(),
                        this.resetTransform(),
                        this.canvasWidth ? window.requestAnimFrame(this.resizeInner.bind(this, t)) : this.resizeInner(t)
                    }
                }, {
                    key: "_setCoords",
                    value: function(e, t, i, n, r) {
                        var s, a, o, l, u = function() {
                            return (e <= 0 ? i : e) / 2 - i / 2 << 0
                        }, c = function() {
                            return t / 2 - n / 2 << 0
                        };
                        switch (r) {
                        case 0:
                        case 3:
                            s = e,
                            a = n,
                            o = c(),
                            l = 0;
                            break;
                        case 1:
                        case 2:
                            s = i,
                            a = t,
                            o = 0,
                            l = u()
                        }
                        this.coords.width = s,
                        this.coords.height = a,
                        this.coords.top = o,
                        this.coords.left = l
                    }
                }, {
                    key: "_applyCoordsToEl",
                    value: function() {
                        this.el.style.width = this.coords.width + "px",
                        this.el.style.height = this.coords.height + "px",
                        this.el.style.top = this.coords.top + "px",
                        this.el.style.left = this.coords.left + "px"
                    }
                }, {
                    key: "getTrans",
                    value: function(e) {
                        return e = e ? e : this.viewer.listeners.pointer.frames.srcId,
                        this.tween.data[e]
                    }
                }, {
                    key: "_setLoaders",
                    value: function() {
                        var e = this;
                        window.URL ? this.img.onload = function() {
                            var t = e._getTrsf();
                            (0,
                            u.initTransform)(e.canvas, t),
                            URL.revokeObjectURL(e.img.src),
                            e.img.l = !1,
                            e.tween.exists && e.tween.data ? (e.tween.trans = e.getTrans(),
                            e.applyTween(e.ctx, e.img, e.img)) : e.ctx.drawImage(e.img, 0, 0, e.canvas.width, e.canvas.height)
                        }
                        : (this.viewer.ie = !0,
                        this.img.onload = function() {
                            e.img.l = !1,
                            e.ctx && e.ctx.drawImage(e.img, 0, 0, e.canvasWidth, e.canvasHeight)
                        }
                        )
                    }
                }, {
                    key: "getElement",
                    value: function() {
                        return this.el
                    }
                }, {
                    key: "_getTrsf",
                    value: function() {
                        var e = ""
                          , t = void 0;
                        return t = this.full_width > this.full_height ? this.el.offsetWidth / this.full_width + .001 : this.el.offsetHeight / this.full_height + .001,
                        e = "scale(" + t + ")",
                        this.transform.scale = t,
                        this.transform.minScale = t,
                        e
                    }
                }, {
                    key: "resizeInner",
                    value: function(e) {
                        var t = "";
                        this.canvas.width === this.el.offsetWidth && this.canvas.height === this.el.offsetHeight || (0 === this.scale_mode ? (this.canvasWidth = this.el.offsetWidth,
                        this.canvasHeight = this.el.offsetHeight) : (this.canvasWidth = this.full_width,
                        this.canvasHeight = this.full_height,
                        t = this._getTrsf()),
                        this._messOnLoad(t),
                        this.tween.enabled && (this.tween.alpha = 0),
                        this.computeIfHighRes(this.viewer, 0),
                        this.visible_frame >= 0 && this.visible_frame < this.viewer.imgdata.length && this.viewer.listeners ? this.displayFrame(this.visible_frame, !0) : e && this.viewer.listeners && this.displayFrame(0, !0))
                    }
                }, {
                    key: "_messOnLoad",
                    value: function(e) {
                        var t = this;
                        this.viewer.ie ? this.img.onload = function() {
                            t.img.l = !1,
                            e && (0,
                            u.initTransform)(t.canvas, e),
                            t.ctx && t.ctx.drawImage(t.img, 0, 0, t.canvas.width, t.canvas.height),
                            t._resetOnLoad()
                        }
                        : this.img.onload = function() {
                            URL.revokeObjectURL(t.img.src),
                            e && (0,
                            u.initTransform)(t.canvas, e),
                            t.img.l = !1,
                            t.ctx && (t.tween.exists && t.tween.data ? (t.tween.trans = t.getTrans(),
                            window.requestAnimFrame(function() {
                                t.applyTween(t.ctx, t.img, t.img)
                            })) : t.ctx.drawImage(t.img, 0, 0, t.canvas.width, t.canvas.height)),
                            t._resetOnLoad()
                        }
                        ,
                        this.viewer.tagsInstance && this.viewer.tagsInstance.enabled && this.viewer.tagsInstance.applyStyle(),
                        !this.coverLoaded && this.viewer.config.blur && this.blurCanvas(this.viewer)
                    }
                }, {
                    key: "_resetOnLoad",
                    value: function() {
                        var e = this;
                        this.viewer.ie ? this.img.onload = function() {
                            e.img.l = !1,
                            e.ctx && e.ctx.drawImage(e.img, 0, 0, e.canvas.width, e.canvas.height)
                        }
                        : this.tween.enabled ? this._tweenLoaders() : this.img.onload = function() {
                            URL.revokeObjectURL(e.img.src),
                            e.img.l = !1,
                            e.tween.exists && e.tween.data ? (e.tween.trans = e.getTrans(),
                            e.applyTween(e.ctx, e.img, e.img)) : e.ctx && e.ctx.drawImage(e.img, 0, 0, e.canvas.width, e.canvas.height)
                        }
                    }
                }, {
                    key: "_fallbackTween",
                    value: function(e, t) {
                        var i = [this._checkSetIndex(e), this._checkSetIndex(t)];
                        return i.filter(function(e) {
                            return e
                        })
                    }
                }, {
                    key: "_fallbackDisplay",
                    value: function(e, t) {
                        var i = this._fallbackTween(e, t);
                        if (i.length > 0) {
                            if (1 !== i.length)
                                return !1;
                            this.displayFrame(i[0].index)
                        }
                        return !0
                    }
                }, {
                    key: "_checkSetIndex",
                    value: function(e, t) {
                        if (this.viewer.imgdata[e])
                            return {
                                index: e
                            };
                        var i = this.viewer.listeners.pointer
                          , e = t ? e : i.srcId;
                        return this.visible_frame = 0 | e,
                        !1
                    }
                }, {
                    key: "displayFrame",
                    value: function(e, t) {
                        e = 0 | e;
                        var i = null
                          , n = this.viewer;
                        if (!this._checkSetIndex(e, !0))
                            return !1;
                        if (this.visible_frame === e && !t)
                            return !1;
                        if (n.config.highRes && n.config.zoomResolution.length >= n.config.highRes && !n.imgdata[e].loading && n.config.highRes > (n.imgdata[e].highres ? n.imgdata[e].highres : 0) && (this.asyncFetchDebouncer && clearTimeout(this.asyncFetchDebouncer),
                        this.asyncFetchDebouncer = setTimeout(function() {
                            l.asyncFetch.start(n),
                            l.asyncFetch.stop(n)
                        }, 80)),
                        !this.img.l) {
                            if (this.img.l = !0,
                            window.URL)
                                if (window.Worker && navigator.appVersion.indexOf("MSIE 10") === -1) {
                                    if (!this.worker) {
                                        window.URL = window.URL || window.webkitURL;
                                        var r, s = "self.URL = self.URL || self.webkitURL;self.onmessage=function(e){postMessage(URL.createObjectURL(e.data));}";
                                        try {
                                            r = new Blob([s],{
                                                type: "application/javascript"
                                            })
                                        } catch (e) {
                                            window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder,
                                            r = new BlobBuilder,
                                            r.append(s),
                                            r = r.getBlob()
                                        }
                                        this.worker = new Worker(URL.createObjectURL(r));
                                        var a = this;
                                        this.worker.onmessage = function(e) {
                                            a.img.src = e.data
                                        }
                                    }
                                    this.worker.postMessage(n.imgdata[e])
                                } else
                                    i = URL.createObjectURL(n.imgdata[e]),
                                    this.img.src = i;
                            else
                                this.img.src = n.imgdata[e].src;
                            this.visible_frame = e,
                            n.tagsInstance && n.tagsInstance.enabled && n.tagsInstance.display(e),
                            n.dragHack && n.dragHack.setValue(e),
                            this.metrics.check(e, n)
                        }
                        return !0
                    }
                }, {
                    key: "tweeningApplied",
                    value: function(e, t, i) {
                        return this.tween.sourceFrame === e && this.tween.targetFrame === t && this.tween.alpha === i
                    }
                }, {
                    key: "enableTween",
                    value: function() {
                        this.tween.exists && this.tween.data && (this.tween.enabled = !0,
                        this._tweenLoaders())
                    }
                }, {
                    key: "_tweenLoaders",
                    value: function() {
                        var e = this;
                        this.imgTweenSource.onload = function() {
                            URL.revokeObjectURL(e.imgTweenSource.src)
                        }
                        ,
                        this.imgTweenTarget.onload = function() {
                            URL.revokeObjectURL(e.imgTweenTarget.src),
                            e.applyTween(e.ctx, e.imgTweenSource, e.imgTweenTarget)
                        }
                    }
                }, {
                    key: "displayTween",
                    value: function(e, t, i) {
                        return !this.tweeningApplied(e, t, i) && (!this._fallbackDisplay(e, t) && (t > e ? this.tween.trans = this.getTrans(e) : this.tween.trans = this.getTrans(t),
                        this.visible_frame = e,
                        this.tween.sourceFrame = e,
                        this.tween.targetFrame = t,
                        this.tween.alpha = i,
                        this.imgTweenSource.src = (0,
                        u.createObjectURL)(this.viewer, e),
                        this.imgTweenTarget.src = (0,
                        u.createObjectURL)(this.viewer, t),
                        this.viewer.tagsInstance && this.viewer.tagsInstance.enabled && this.viewer.tagsInstance.display(e),
                        void this.metrics.check(e, this.viewer)))
                    }
                }, {
                    key: "makeCover",
                    value: function(e, t, i) {
        	    	 function num(t){
						if(t.toString().length==1){
			     			return "000"+t
			     		}
			     		else if(t.toString().length==2){
			     			return "00"+t
			     		}
			     		else if(t.toString().length==3){
			     			return "0"+t
			     		}
			     		else if(t.toString().length==4){
			     			return t
			     		}
					} 						
 						var n = this
                          , s = e.path + num(t) + ".jpg";
                        this.coverImg = new Image;
                        var o = this._getTrsf();
                        (0,
                        u.initTransform)(this.canvas, o),
                        fyu.utils.fetchImage(s, i, function(t, r, s) {
                            e.imgdata[i] = t,
                            e.imgdata[i].lowres = !1,
                            e.imgdata[i].thumb = !0;
                            var o = window.URL || window.webkitURL
                              , a = o.createObjectURL(t);
                            n.coverImg.onload = function() {
                                URL.revokeObjectURL(n.coverImg.src),
                                window.requestAnimFrame(function() {
                                    n.tween.exists && n.tween.data ? (n.tween.trans = n.getTrans(),
                                    n.applyTween(n.ctx, n.coverImg, n.coverImg)) : (n.ctx.drawImage(n.coverImg, 0, 0, n.canvas.width, n.canvas.height),
                                    n.coverImg = null),
                                    n.coverLoaded = !0,
                                    n.blurData = null
                                })
                            }
                            ,
                            n.coverImg.src = a
                        }, function() {
                            n.coverImg.src = s
                        }, e.id, !0)
                    }
                }, {
                    key: "destroyCover",
                    value: function() {
                        this.coverLoaded = !0
                    }
                }, {
                    key: "computeIfHighRes",
                    value: function(e, t) {
                        if (t || (t = this.transform.scale),
                        e.config.zoomResolution && e.config.zoomResolution.length > 0) {
                            var i = this.canvas.width > this.canvas.height ? 960 : 540;
                            t > 1.1 * i / this.canvasWidth && t <= 1.12 * i / this.canvasWidth ? (e.config.highRes = 1,
                            e.forceRenderHighResFrame()) : t > 1.12 * i / this.canvasWidth && t <= 1.37 * i / this.canvasWidth ? (e.config.zoomResolution.length > 1 ? e.config.highRes = 2 : e.config.highRes = 1,
                            e.forceRenderHighResFrame()) : t > 1.37 * i / this.canvasWidth ? (e.config.zoomResolution.length > 2 ? e.config.highRes = 3 : e.config.zoomResolution.length > 1 ? e.config.highRes = 2 : e.config.highRes = 1,
                            e.forceRenderHighResFrame()) : e.config.highRes = 0
                        }
                    }
                }, {
                    key: "zoom",
                    value: function(e, t, i) {
                        var n = 1.01
                          , r = Math.pow(n, t)
                          , s = this.transform
                          , a = fyu.utils.getOffset(this.el)
                          , o = s.scale
                          , l = void 0
                          , u = void 0
                          , c = void 0
                          , h = void 0;
                        i ? (l = i.pageX - a.left,
                        u = i.pageY - a.top) : (l = this.el.offsetWidth / 2,
                        u = this.el.offsetHeight / 2),
                        c = o * r,
                        c = Math.max(Math.min(c, s.maxScale), s.minScale),
                        this.computeIfHighRes(e, c),
                        s.maxScrollLeft = Math.max(this.canvasWidth * c - this.el.offsetWidth, 0),
                        s.maxScrollTop = Math.max(this.canvasHeight * c - this.el.offsetHeight, 0),
                        h = this.checkBounds({
                            left: (l + s.scrollLeft) * c / o - l,
                            top: (u + s.scrollTop) * c / o - u
                        }),
                        s.scale = c,
                        s.scrollLeft = h.left,
                        s.scrollTop = h.top,
                        requestAnimFrame(this.applyTransform.bind(this, e))
                    }
                }, {
                    key: "translate",
                    value: function(e, t, i) {
                        var n = this.transform
                          , r = this.checkBounds({
                            left: n.scrollLeft - e,
                            top: n.scrollTop - t
                        });
                        n.scrollLeft = r.left,
                        n.scrollTop = r.top,
                        requestAnimFrame(this.applyTransform.bind(this, i))
                    }
                }, {
                    key: "checkBounds",
                    value: function(e) {
                        var t = this.transform;
                        return e.left > t.maxScrollLeft ? e.left = t.maxScrollLeft : e.left < 0 && (e.left = 0),
                        e.top > t.maxScrollTop ? e.top = t.maxScrollTop : e.top < 0 && (e.top = 0),
                        e
                    }
                }, {
                    key: "resetTransform",
                    value: function() {
                        var e = this.transform;
                        e.scrollLeft = 0,
                        e.scrollTop = 0,
                        e.maxScrollLeft = 0,
                        e.maxScrollTop = 0
                    }
                }, {
                    key: "applyTransform",
                    value: function(e) {
                        var t = this.canvas
                          , i = this.transform
                          , n = "translate(" + -i.scrollLeft + "px," + -i.scrollTop + "px) scale(" + i.scale + ")"
                          , r = void 0;
                        if (t.style.msTransform = n,
                        t.style.webkitTransform = n,
                        t.style.transform = n,
                        e.tagsInstance && e.tagsInstance.enabled) {
                            var s = this.canvasWidth / (t.width > t.height ? 960 : 540)
                              , a = "translate(" + -i.scrollLeft + "px," + -i.scrollTop + "px) scale(" + i.scale * s + ")";
                            r = e.tagsInstance.container.style,
                            r.msTransform = a,
                            r.webkitTransform = a,
                            r.transform = a
                        }
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this.el.parentNode.parentNode;
                        return e.parentNode.removeChild(e),
                        this.viewer = null,
                        this.el = null,
                        !1
                    }
                }, {
                    key: "blurCanvas",
                    value: function(e) {
                        if (window.Uint8Array) {
                            var t, i, n, r = (this.coords,
                            this.canvasWidth,
                            this.canvasHeight,
                            this.ctx), s = e.config.blur, a = 126, o = 72;
                            if (0 === e.config.fy.m && (a = 72,
                            o = 126),
                            Uint8Array.prototype.slice || Object.defineProperty(Uint8Array.prototype, "slice", {
                                value: Array.prototype.slice
                            }),
                            !this.blurData) {
                                t = (0,
                                u.convertDataURIToBinary)(s),
                                t = t.slice(2),
                                n = (0,
                                u.getResizedTable)(t, a, o);
                                var l = document.createElement("canvas")
                                  , c = l.getContext("2d", {
                                    alpha: !1
                                });
                                if (l.width = a,
                                l.height = o,
                                i = c.getImageData(0, 0, a, o),
                                i.data.set)
                                    i.data.set(n);
                                else
                                    for (var h = 0; h < i.data.length; ++h)
                                        i.data[h] = n[h];
                                i = (0,
                                u.stackBlurCanvasRGBA)(i, a, o, 10),
                                c.putImageData(i, 0, 0),
                                this.blurData = l
                            }
                            r.clearRect(0, 0, this.canvasWidth, this.canvasHeight),
                            r.drawImage(this.blurData, 0, 0, this.canvasWidth, this.canvasHeight)
                        }
                    }
                }]),
                e
            }();
            i["default"] = h
        }
        , {
            "../utils/async-fetch": 7,
            "../utils/metrics": 12,
            "./renderer-tween": 17,
            "./renderer-utils": 18
        }],
        20: [function(e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            i.fireViewerEvent = function(e, t, i) {
                if (e && e.events && e.events[t])
                    for (var n = e.events[t].length; n-- > 0; )
                        e.events[t][n] && e.events[t][n](i, e)
            }
            ,
            i.checkOlderBrowers = function(e, t) {
                if (!document.addEventListener) {
                    var i = 0;
                    try {
                        try {
                            var n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                            try {
                                n.AllowScriptAccess = "always"
                            } catch (e) {
                                return "6,0,0"
                            }
                        } catch (e) {}
                        i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1],
                        i = i.split(",").shift() / 1
                    } catch (e) {
                        try {
                            navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (i = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1],
                            i = i.split(",").shift() / 1)
                        } catch (e) {}
                    }
                    if (i <= 15) {
                        var r = document.createElement("div");
                        r.cssText = "position:absolute;width:100%;height:100%;left:0;top:0",
                        r.innerHTML = '<img style="width:128px;height:128px;margin:0 auto;display:block;border:0" src="https://fyu.se/assets/2.0/viewer/ie.png" /><p style="width:80%;max-width:300px;text-align:center;color:#333;margin:0 auto;margin-top:10%">Oops, your browser is sadly unsupported</p>',
                        (void 0).el.appendChild(r)
                    } else {
                        var s = fyu.root_path + "FyuseViewer.swf?id=" + t
                          , a = document.createElement("div");
                        a.style.cssText = "position:absolute;width:100%;height:100%;left:0;top:0",
                        document.addEventListener ? a.innerHTML = '<object data="' + s + '&autoplay=1" class="viewer"><param name="allowScriptAccess" value="always"><param name="hasPriority" value="true"><param name="wmode" value="opaque"><param name="movie" value="' + s + '&autoplay=1"></object>' : a.innerHTML = '<object style="width:100%;height:100%" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" data="' + s + '&autoplay=1" class="viewer"><param name="allowScriptAccess" value="always"> <param name="movie" value="' + s + '&autoplay=1"> <param name="wmode" value="opaque"><param name="hasPriority" value="true"></object>',
                        e.el.appendChild(a)
                    }
                    return e
                }
            }
            ,
            i.afterForceRenderFetch = function(e, t, i) {
                if (e == t.renderer.visible_frame)
                    requestAnimFrame(function() {
                        e == t.renderer.visible_frame && t.renderer.displayFrame(e, t)
                    });
                else {
                    if (i)
                        return !1;
                    t.forceRenderHighResFrame(t.renderer.visible_frame)
                }
            }
            ,
            i.proceed = function(e) {
                if (e.loaded = !0,
                e["onload"])
                    for (var t = e["onload"].length; t-- > 0; )
                        e["onload"][t] && e["onload"][t](e),
                        e["onload"][t] = null;
                e.startVisualization(),
                fyu.ui.showActions(e),
                requestAnimFrame(function() {
                    fyu.graveyard[e.id] || e.renderer.destroyCover(e)
                })
            }
            ,
            i.getDirection = function(e) {
                var t = e.fy
                  , i = (t.dx,
                t.dy,
                t.cv)
                  , n = t.fr
                  , r = {
                    x: 0,
                    y: 0
                };
                Math.abs(t.dx) > Math.abs(t.dy) ? r.x = t.dx > 0 ? 1 : -1 : Math.abs(t.dy) > Math.abs(t.dx) && (r.y = t.dy > 0 ? 1 : -1);
                var s = r.x
                  , a = r.y
                  , o = i > 0 ? -s : s
                  , l = i > 0 ? -a : a;
                if (n && (l *= -1,
                a *= -1),
                1 === t.m)
                    if (1 === t.r) {
                        var u = -l;
                        l = o,
                        o = u,
                        u = -a,
                        a = s,
                        s = u
                    } else {
                        var u = l;
                        l = -o,
                        o = u,
                        u = a,
                        a = -s,
                        s = u
                    }
                return {
                    swipeX: o,
                    swipeY: l,
                    gyroX: s,
                    gyroY: a
                }
            }
        }
        , {}]
    }, {}, [5]),
    e.getElementsByTagName("head")[0].appendChild(t)
}(document);
