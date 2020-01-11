window.Flourish = {
  external: true
};
window.FlourishConfig = {
    public_url: "https://public.flourish.rocks/"
  },
  function () {
    "use strict";
    var e, E;

    function S() {
      if (null == e) {
        var t = function () {
          var t = window.location;
          "about:srcdoc" == t.href && (t = window.parent.location);
          var i = {};
          return function (t, e, r) {
            for (; r = e.exec(t);) i[decodeURIComponent(r[1])] = decodeURIComponent(r[2])
          }(t.search.substring(1).replace(/\+/g, "%20"), /([^&=]+)=?([^&]*)/g), i
        }();
        e = "referrer" in t ? /^https:\/\/medium.com\//.test(t.referrer) : !("auto" in t)
      }
      return e
    }

    function O(t) {
      var e = t || window.innerWidth;
      return 999 < e ? 650 : 599 < e ? 575 : 400;
    }

    function L(t, e) {
      if (window.top !== window.self) {
        var r = window;
        if ("srcdoc" == r.location.pathname && (r = r.parent), E) return t = parseInt(t, 10), void r.parent.postMessage({
          sentinel: "amp",
          type: "embed-size",
          height: t
        }, "*");
        var i = {
          sender: "Flourish",
          context: "iframe.resize",
          method: "resize",
          height: t,
          src: r.location.toString()
        };
        if (e)
          for (var a in e) i[a] = e[a];
        r.parent.postMessage(JSON.stringify(i), "*")
      }
    }

    function N() {
      return (-1 !== navigator.userAgent.indexOf("Safari") || -1 !== navigator.userAgent.indexOf("iPhone")) && -1 == navigator.userAgent.indexOf("Chrome")
    }

    function q(a) {
      window.addEventListener("message", function (e) {
        if (null != e.source && (e.origin === document.location.origin || e.origin.match(/\/\/localhost:\d+$|\/\/flourish-api\.com$|\.flourish\.(?:local(:\d+)?|net|rocks|studio)$/))) {
          var t;
          try {
            t = JSON.parse(e.data)
          } catch (t) {
            return void console.warn("Unexpected non-JSON message: " + JSON.stringify(e.data))
          }
          if ("Flourish" === t.sender) {
            for (var r = document.querySelectorAll("iframe"), i = 0; i < r.length; i++)
              if (r[i].contentWindow == e.source || r[i].contentWindow == e.source.parent) return void a(t, r[i]);
            console.warn("could not find frame", t)
          }
        }
      }), N() && (window.addEventListener("resize", t), t())
    }

    function t() {
      for (var t = document.querySelectorAll(".flourish-embed"), e = 0; e < t.length; e++) {
        var r = t[e];
        if (!r.getAttribute("data-width")) {
          var i = r.querySelector("iframe"),
            a = window.getComputedStyle(r),
            o = r.offsetWidth - parseFloat(a.paddingLeft) - parseFloat(a.paddingRight);
          i.style.width = o + "px"
        }
      }
    }

    function z(t, e, r, i) {
      var a;
      r && "number" == typeof r ? (a = r, r += "px") : r && r.match(/^[ \t\r\n\f]*([+-]?\d+|\d*\.\d+(?:[eE][+-]?\d+)?)(?:\\?[Pp]|\\0{0,4}[57]0(?:\r\n|[ \t\r\n\f])?)(?:\\?[Xx]|\\0{0,4}[57]8(?:\r\n|[ \t\r\n\f])?)[ \t\r\n\f]*$/) && (a = parseFloat(r)), i && "number" == typeof i && (i += "px");
      var o = document.createElement("iframe");
      return o.setAttribute("scrolling", "no"), o.setAttribute("frameborder", "0"), e.appendChild(o), r ? o.style.width = r : N() ? o.style.width = e.offsetWidth + "px" : o.style.width = "100%", !i && (t.match(/\?/) ? t += "&auto=1" : t += "?auto=1", i = O(a || o.offsetWidth) + "px"), i && ("%" === i.charAt(i.length - 1) && (i = parseFloat(i) / 100 * e.parentNode.offsetHeight + "px"), o.style.height = i), o.setAttribute("src", t), o
    }
    var W = {
      de: {
        credits: {
          default: "Erstellt mit Flourish"
        }
      },
      en: {
        credits: {
          default: "A Flourish data visualisation",
          chart: "A Flourish chart",
          map: {
            text: "A Flourish map",
            url: "https://flourish.studio/visualisations/maps/"
          },
          survey: {
            text: "A Flourish survey visualisation",
            url: "https://flourish.studio/visualisations/survey-data/"
          },
          network: {
            text: "A Flourish network chart",
            url: "https://flourish.studio/visualisations/network-charts/"
          },
          scatter: "A Flourish scatter chart",
          sankey: "A Flourish sankey chart",
          quiz: "A Flourish quiz",
          bar_race: {
            text: "A Flourish bar chart race",
            url: "https://flourish.studio/visualisations/bar-chart-race/"
          }
        }
      },
      es: {
        credits: {
          default: "Creado con Flourish",
          bar_race: {
            text: "Créé avec Flourish",
            url: "https://flourish.studio/visualisations/bar-chart-race/"
          }
        }
      },
      fr: {
        credits: {
          default: "Créé avec Flourish",
          bar_race: {
            text: "Créé avec Flourish",
            url: "https://flourish.studio/visualisations/bar-chart-race/"
          }
        }
      },
      it: {
        credits: {
          default: "Creato con Flourish",
          bar_race: {
            text: "Creato con Flourish",
            url: "https://flourish.studio/visualisations/bar-chart-race/"
          }
        }
      },
      mi: {
        credits: {
          default: "Hangaia ki te Flourish",
          bar_race: {
            text: "Hangaia ki te Flourish",
            url: "https://flourish.studio/visualisations/bar-chart-race/"
          }
        }
      },
      nl: {
        credits: {
          default: "Gemaakt met Flourish",
          bar_race: {
            text: "Gemaakt met Flourish",
            url: "https://flourish.studio/visualisations/bar-chart-race/"
          }
        }
      }
    };

    function H(t, e, r, i) {
      t = t || "https://flourish.studio", e = e || "?utm_source=api&utm_campaign=" + window.location.href, r = r || "https://public.flourish.studio/", i = i || "A Flourish data visualisation";
      var a = document.createElement("div");
      a.setAttribute("class", "flourish-credit"), a.setAttribute("style", "width:100%!important;margin:0 0 4px!important;text-align:right!important;font-family:Helvetica,sans-serif!important;color:#888!important;font-size:11px!important;font-weight:bold!important;font-style:normal!important;-webkit-font-smoothing:antialiased!important;box-shadow:none!important;");
      var o = document.createElement("a");
      o.setAttribute("href", t + e), o.setAttribute("target", "_top"), o.setAttribute("style", "display:inline-block!important;text-decoration:none!important;font:inherit!important;color:inherit!important;border:none!important;margin:0 5px!important;box-shadow:none!important;"), a.appendChild(o);
      var n = document.createElement("img");
      n.setAttribute("alt", "Flourish logo"), n.setAttribute("src", r + "resources/bosh.svg"), n.setAttribute("style", "font:inherit!important;width:auto!important;height:12px!important;border:none!important;margin:0 2px 0!important;vertical-align:middle!important;display:inline-block!important;box-shadow:none!important;"), o.appendChild(n);
      var s = document.createElement("span");
      return s.setAttribute("style", "font:inherit!important;color:#888!important;vertical-align:middle!important;display:inline-block!important;box-shadow:none!important;"), s.appendChild(document.createTextNode(i)), o.appendChild(s), a
    }

    function r() {
      if (!window.FlourishLoaded) {
        window.FlourishLoaded = !0;
        var t = window.Flourish && window.Flourish.external,
          e = "en",
          r = document.querySelector("meta[name='language'],meta[name='LANGUAGE']");
        r && r.hasAttribute("content") && (e = r.getAttribute("content").substr(0, 2), W[e] || (e = "en"));
        var i, a = Array.prototype.slice.call(document.querySelectorAll(".flourish-embed"));
        if (!t)
          for (var o = document.querySelectorAll("script"), n = 0; n < o.length; n++) {
            var s = o[n];
            if (s.src && s.src.match(/(?:\.flourish\.(?:net|rocks|studio)|(?:localhost|flourish\.local)(?::\d+)?)\//g) && s.src.match(/\/embed\.js$/)) {
              if (!i) {
                var u = s.getAttribute("src");
                i = u.substr(0, u.lastIndexOf("/resources")) + "/"
              }
              if (s.getAttribute("data-src")) {
                var l = document.createElement("div");
                l.setAttribute("class", "flourish-embed"), l.setAttribute("data-src", s.getAttribute("data-src")), s.getAttribute("data-height") && l.setAttribute("data-height", s.getAttribute("data-height")), s.getAttribute("data-width") && l.setAttribute("data-width", s.getAttribute("data-width")), s.parentNode.insertBefore(l, s), a.push(l)
              }
            }
          }
        if (a.length) {
          var d, c, h, f = (E = "#amp=1" == window.location.hash, {
            createEmbedIframe: z,
            isFixedHeight: S,
            getHeightForBreakpoint: O,
            startEventListeners: q,
            notifyParentWindow: L,
            isSafari: N
          });
          for (n = 0; n < a.length; n++) {
            var m, p, g, b, v = a[n],
              w = v.getAttribute("data-src");
            if (w) {
              var A = w.split("?"),
                x = 1 < A.length || window.Flourish && window.Flourish.hide;
              if (w = A[0], g = t ? (m = w, p = window.FlourishConfig.public_url, "?utm_source=embed&utm_campaign=" + w) : (b = 0 === w.indexOf("template/"), m = i + w + (b ? "/preview" : "/embed"), p = i + w + "/", "?utm_source=showcase&utm_campaign=" + w), f.createEmbedIframe(m, v, v.getAttribute("data-width"), v.getAttribute("data-height")), !b && !x) {
                for (var y = "", F = v.className.split(" "), C = 0; C < F.length; C++)
                  if ("flourish-embed" != F[C] && 0 == F[C].indexOf("flourish-")) {
                    y = F[C].substr(9);
                    break
                  }
                y || (y = 0 == w.indexOf("story") ? "story" : "default");
                var _ = (h = c = void 0, d = (d = y) || "", "object" == typeof (c = W[e || "en"].credits[d] || W.en.credits[d] || W.en.credits.default) && (c.url && (h = c.url), c = c.text), {
                    credit_text: c,
                    credit_url: h
                  }),
                  k = H(_.credit_url || p, g, window.FlourishConfig.public_url, _.credit_text);
                // v.appendChild(k)
              }
            }
          }
          f.startEventListeners(function (t, e) {
            "resize" == t.method && ("number" == typeof t.height && (t.height += "px"), t.height && (e.style.height = t.height))
          })
        } else console.warn("Flourish: could not find anything to embed")
      }
    }
    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", r) : r()
  }();
//# sourceMappingURL=embed.js.map
