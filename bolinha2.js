! function () {
  "use strict";
  var t, a;

  function d() {
    if (null == t) {
      var e = function () {
        var e = window.location;
        "about:srcdoc" == e.href && (e = window.parent.location);
        var i = {};
        return function (e, t, n) {
          for (; n = t.exec(e);) i[decodeURIComponent(n[1])] = decodeURIComponent(n[2])
        }(e.search.substring(1).replace(/\+/g, "%20"), /([^&=]+)=?([^&]*)/g), i
      }();
      t = "referrer" in e ? /^https:\/\/medium.com\//.test(e.referrer) : !("auto" in e)
    }
    return t
  }

  function s(e) {
    var t = e || window.innerWidth;
    return 999 < t ? 650 : 599 < t ? 575 : 400;
  }

  function u(e, t) {
    if (window.top !== window.self) {
      var n = window;
      if ("srcdoc" == n.location.pathname && (n = n.parent), a) return e = parseInt(e, 10), void n.parent.postMessage({
        sentinel: "amp",
        type: "embed-size",
        height: e
      }, "*");
      var i = {
        sender: "Flourish",
        context: "iframe.resize",
        method: "resize",
        height: e,
        src: n.location.toString()
      };
      if (t)
        for (var r in t) i[r] = t[r];
      n.parent.postMessage(JSON.stringify(i), "*")
    }
  }

  function f() {
    return (-1 !== navigator.userAgent.indexOf("Safari") || -1 !== navigator.userAgent.indexOf("iPhone")) && -1 == navigator.userAgent.indexOf("Chrome")
  }

  function h(r) {
    window.addEventListener("message", function (t) {
      if (null != t.source && (t.origin === document.location.origin || t.origin.match(/\/\/localhost:\d+$|\/\/flourish-api\.com$|\.flourish\.(?:local(:\d+)?|net|rocks|studio)$/))) {
        var e;
        try {
          e = JSON.parse(t.data)
        } catch (e) {
          return void console.warn("Unexpected non-JSON message: " + JSON.stringify(t.data))
        }
        if ("Flourish" === e.sender) {
          for (var n = document.querySelectorAll("iframe"), i = 0; i < n.length; i++)
            if (n[i].contentWindow == t.source || n[i].contentWindow == t.source.parent) return void r(e, n[i]);
          console.warn("could not find frame", e)
        }
      }
    }), f() && (window.addEventListener("resize", e), e())
  }

  function e() {
    for (var e = document.querySelectorAll(".flourish-embed"), t = 0; t < e.length; t++) {
      var n = e[t];
      if (!n.getAttribute("data-width")) {
        var i = n.querySelector("iframe"),
          r = window.getComputedStyle(n),
          o = n.offsetWidth - parseFloat(r.paddingLeft) - parseFloat(r.paddingRight);
        i.style.width = o + "px"
      }
    }
  }

  function c(e, t, n, i) {
    var r;
    n && "number" == typeof n ? (r = n, n += "px") : n && n.match(/^[ \t\r\n\f]*([+-]?\d+|\d*\.\d+(?:[eE][+-]?\d+)?)(?:\\?[Pp]|\\0{0,4}[57]0(?:\r\n|[ \t\r\n\f])?)(?:\\?[Xx]|\\0{0,4}[57]8(?:\r\n|[ \t\r\n\f])?)[ \t\r\n\f]*$/) && (r = parseFloat(n)), i && "number" == typeof i && (i += "px");
    var o = document.createElement("iframe");
    return o.setAttribute("scrolling", "no"), o.setAttribute("frameborder", "0"), t.appendChild(o), n ? o.style.width = n : f() ? o.style.width = t.offsetWidth + "px" : o.style.width = "100%", !i && (e.match(/\?/) ? e += "&auto=1" : e += "?auto=1", i = s(r || o.offsetWidth) + "px"), i && ("%" === i.charAt(i.length - 1) && (i = parseFloat(i) / 100 * t.parentNode.offsetHeight + "px"), o.style.height = i), o.setAttribute("src", e), o
  }! function () {
    Flourish.warn = function (e) {
      console.warn(e)
    };
    var t, n = window.top === window.self,
      i = n ? null : (a = "#amp=1" == window.location.hash, {
        createEmbedIframe: c,
        isFixedHeight: d,
        getHeightForBreakpoint: s,
        startEventListeners: h,
        notifyParentWindow: u,
        isSafari: f
      }),
      r = !0;

    function o() {
      var e;
      Flourish.fixed_height || (null != t ? e = t : r && (e = i.getHeightForBreakpoint()), e !== window.innerHeight && i.notifyParentWindow(e))
    }

    function e() {
      o(), window.addEventListener("resize", o)
    }
    Flourish.uploadImage = function (e) {
      if (n || "story_editor" !== Flourish.environment) throw "Invalid upload request";
      var t = {
        sender: "Flourish",
        method: "request-upload",
        name: e.name,
        accept: e.accept
      };
      window.parent.postMessage(JSON.stringify(t), "*")
    }, Flourish.setHeight = function (e) {
      Flourish.fixed_height || (r = null == (t = e), o())
    }, Flourish.checkHeight = function () {
      if (!n) {
        var e = Flourish.__container_height;
        null != e ? (Flourish.fixed_height = !0, i.notifyParentWindow(e)) : i.isFixedHeight() ? Flourish.fixed_height = !0 : (Flourish.fixed_height = !1, o())
      }
    }, Flourish.fixed_height = n || i.isFixedHeight(), "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()
  }()
}();
//# sourceMappingURL=embedded.js.map
