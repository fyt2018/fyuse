(function(g, l) {
    if (g.MotionHelper)
        return;
    var q = -1 < navigator.userAgent.toLowerCase().indexOf("android")
      , k = !1
      , p = !1
      , r = !1
      , e = 0
      , f = 0
      , a = {
        x: 0,
        y: 0,
        z: 0,
        rx: 0,
        ry: 0,
        rz: 0,
        alpha: 0,
        beta: 0,
        gamma: 0,
        rotation_x: .5,
        rotation_y: .5
    }
      , t = function(b) {
        p = !0;
        var d = b.rotationRate;
        if (d && null != d.beta)
            b = d.alpha * m.mult,
            a.rotation_x = d.beta * m.mult * .001,
            a.rotation_y = .001 * b;
        else {
            var h = b.accelerationIncludingGravity.x
              , d = b.accelerationIncludingGravity.y
              , c = b.accelerationIncludingGravity.z
              , g = Math.abs(h);
            b = Math.abs(d);
            var k = Math.abs(c);
            a.rotation_x = 1;
            a.rotation_y = -1;
            q && (h *= -1,d *= -1,c *= -1);
            b > k && (b = k,d = c);
            r ? .01 < g || .01 < b ? (.01 < g ? (h /= 50,c = Math.abs(h),2.1 < c && (c = 2.1, h = 0 > h ? -2.1 : 2.1),
            a.rx = h,
            Math.abs(e) < c - .001 ? e < h ? e += .01 * c : e > h && (e -= .01 * c) : e = 0 < e ? e + .145 * -c : e + .145 * c) : (e = 0,a.rx = 0),
            .01 < b ? (d /= 50,b = Math.abs(d),
            2.1 < b && (b = 2.1,d = 0 > d ? -2.1 : 2.1),
            a.ry = d,
            Math.abs(f) < b - .001 ? f < d ? f += .01 * b : f > d && (f -= .01 * b) : f = 0 < f ? f + .145 * -b : f + .145 * b) : (f = 0,
            a.ry = 0),
            a.ry -= f,
            a.rx -= e,
            a.ry = 5.64E-4 > Math.abs(a.ry) ? 0 : a.ry / 1.334,
            a.rx = 5.64E-4 > Math.abs(a.rx) ? 0 : a.rx / 1.334,
            .072 < Math.abs(a.rx) && (a.rx = 0 > a.rx ? -.072 : .072),
            .072 < Math.abs(a.ry) && (a.ry = 0 > a.ry ? -.072 : .072)) : (a.rx = 0,a.ry = 0,a.rz = 0) : (a.rx = 0,a.ry = 0,a.rz = 0)
        }
    }
      , u = function() {}
      , c = []
      , m = {
	        	mult: .92,
		        start: function() {
		            if (k)
		                return this;
		            k = !0;
		            l.addEventListener("devicemotion", t, !1);
		            l.addEventListener("orientationchange", u, !1);
		            setTimeout(function() {
		                m.calibrate()
		            }, 77);
		            return this
		        },
		        stop: function() {
		            k = !1;
		            l.removeEventListener("devicemotion", t);
		            l.removeEventListener("orientationchange", u);
		            return this
		        },
		        isTracking: function() {
		            return k && p
		        },
		        calibrate: function() {
		            r = !0;
		            return this
		        },
		        get: function() {
		            return a
		        },
		        interval: null,
		        schedule: function(b, d) {
		            this.interval || (this.interval = setInterval(function() {
		                if (k && p && !document.hidden)
		                    for (var b = c.length; 0 < b--; )
		                        c[b](a)
		            }, 34));
		            c.push(b);
		            return b
		        },
		        clearScheduled: function(a) {
		            var b;
		            if (a) {
		                for (b = c.length; 0 < b--; )
		                    if (c[b] == a) {
		                        c[b] = null;
		                        c.splice(b, 1);
		                        break
		                    }
		                if (0 < c.length)
		                    return this
		            }
		            this.interval && (clearInterval(this.interval),
		            this.interval = null);
		            for (b = c.length; 0 < b--; )
		                c[b] = null;
		            c = [];
		            return this
		        }
    };
    g.MotionHelper = m;
    q && (g.MotionHelper.mult = 57,
    -1 !== navigator.userAgent.toLowerCase().indexOf("irefox") && (g.MotionHelper.mult = .58));
    if (g.callbacks) {
        var n = g.callbacks.motion;
        if (n && 0 < n.length) {
            for (var v = n.length; 0 < v--; )
                n[v]();
            g.callbacks.motion = []
        }
    }
})(window.objquxun_, window);
