
!function(e) {
    "use strict";

    if (!e.QX) {
      
        var n = -1;
        e.QX = {
            events: {},
            isElement: function(e) {
                return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
            },
            success: function(e, n, t, o, s, i) {
                var r, l;
                if (!e._r && (r = s && s.object ? s.object : JSON.parse(i.responseText),
                r && 1 === r.success)) {
                    if (QX.isElement(o))
                        l = o;
                    else if (l = document.getElementById(o),!l)
                        return !1;
                    var u = null
                      , a = null;
                    a = {
                        mask: null,
                        quxun: r.quxun,
                        range: [-1, -1],
                        preload: 0,
                        fullscreen: 1,
                        controls: {
                            drag: !0,
                            auto: !1
                        },
                        aspect: {
                            mode: 1,
                            tolerance: .8
                        },
                        loaderClass: null,
                        jsembed: 1,
                        resolution: null,
                        zoomResolution: r.res ? JSON.parse(r.res) : null,
                        zoom: null,
                        zoomBtns: null,
                        zoomBtnsPos: "bottom-right",
                        maxzoom: null,
                        progressive: null,
                        lightmode: null,
                        lite: null,
                        thumb_index: null,
                        hover_load: null,
                        belongs: null,
                        blur: r.blur ? r.blur : null
                    },
                    a = Object.assign(a, s),
                    u = objquxun_.addViewer(l, n, r.path, a);
                    for (var c in this.events[t])
                        u["on" + c] = this.events[t][c];
                    if (e.instance = u,
                    u.c = e,
                    u.oninit)
                        for (var f = u.oninit.length; f-- > 0; )
                            u.oninit[f](u),
                            u.oninit[f] = null
                }
            },
            add: function(e, t, o) {
        
            	
                var s = this
                  , i = e + ++n
                  , r = {
                    instance: null,
                    uid: e,
                    on: function(e, n) {
                        return s.events[i] = s.events[i] || {},
                        s.events[i][e] ? s.events[i][e].push(n) : s.events[i][e] = [n],
                        this
                    },
                    resize: function() {
                        return s.resizeAll(this.instance),
                        this
                    },
                    remove: function() {
                        s.events[i] && (s.events[i] = null,
                        delete s.events[i]),
                        this._r = 1,
                        this.instance && objquxun_.removeViewer(this.instance),
                        this.instance = null
                    },
                    tags: function() {
                        if (this.instance)
                            this.instance.ui.tags();
                        else {
                            var e = this;
                            e.on("load", function() {
                                e.instance.ui.tags()
                            })
                        }
                        return this
                    },
                    fullscreen: function() {
                        if (this.instance)
                            this.instance.ui.fullscreen();
                        else {
                            var e = this;
                            e.on("init", function() {
                                e.instance.ui.fullscreen()
                            })
                        }
                        return this
                    },
                    zoom: function(e) {
                        return s.zoom(this.instance, e),
                        this
                    }
                };
            
                
                return QX.ready(function() {
                    o && o.object ? s.success(r, e, i, t, o) : fyu.net.request({
                        url: QX.protocol + "//" + QX.host + e,
                        success: s.success.bind(s, r, e, i, t, o)
                    })
                }),
                r
            },
            removeAll: function(e) {
                for (var n = objquxun_.entries, t = n.length; t--; )
                    objquxun_.removeViewer(n[t].fid);
                return this.events = {},
                !1
            },
            resizeAll: function(e) {
                if (this.loaded) {
                    var n = objquxun_.entries
                      , t = n.length;
                    if (e)
                        return void objquxun_.utils.fireEvent(e, "resize");
                    for (; t--; )
                        objquxun_.utils.fireEvent(n[t], "resize")
                }
                return !1
            },
            zoom: function(e, n) {
                this.loaded && e && e.renderer.zoom(e, parseInt(n))
            }
        }
    }

    QX.loading || (QX.loading = 1,
    function() {
        var e = [];
        QX.ready = function(n) {
          
            QX.loaded ? n() : e.push(n)
        }
        ,
        window.onQXReady = function() {

            if (!QX.loaded) {
                QX.loaded = 1;

                for (var n = 0; n < e.length; n++)
                    e[n]();

                return !1
            }
        };
        var n = document.createElement("script")
	 	  , t =  "./js/quxun.js"
          , o = document.getElementsByTagName("script")[0]
          , s = !1;
        n.type = "text/javascript",
        n.src = t,
        n.async = !0,
        n.onload = n.onreadystatechange = function() {
            s || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (s = !0,
            n.onload = n.onreadystatechange = null,
            onQXReady(),
            n && n.parentNode && n.parentNode.removeChild(n))
        },
        o.parentNode.insertBefore(n, o)
    }()),

    "function" != typeof Object.assign && (Object.assign = function(e, n) {
        for (var t = Object(e), o = 1; o < arguments.length; o++) {
            var s = arguments[o];
            if (null != s)
                for (var i in s)
                    Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i])
        }
        return t
    }
    )
}(window);
