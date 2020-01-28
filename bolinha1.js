/* Define o flourish */
var template = function (t) {
  "use strict";
  var l = {},
    m = {
      aggregation_type: "Sum",
      hierarchy_layout: "treemap",
      color: {},
      label_color: "#ffffff",
      radial_tree_link_color: "#dddddd",
      cellPadding: "low",
      num_of_visible_levels: 2,
      auto_set_height: !0,
      sort_by: "value",
      treemap_type: "treemapBinary",
      treemap_ratio: 2,
      sunburst_inner_radius: 30,
      sunburst_depth_fade: .75,
      sunburst_labelling: "auto",
      sunburst_bold_labels: !0,
      bar_bar_thickness: 30,
      bar_bar_padding: 1,
      bar_axis_label_size: 110,
      bar_show_value_label: !0,
      bar_value_label_size: 70,
      bar_max_value: null,
      radial_tree_outer_radius: 60,
      radial_tree_bar_length: 20,
      radial_tree_bar_width: 40,
      radial_tree_rotation: 0,
      radial_tree_show_values: !0,
      popup: {},
      popup_show_title: !1,
      popup_separator: ">",
      popup_title: "",
      filter: null,
      size_by: null,
      controls_padding: 0,
      control_width: 300,
      filter_type: "auto",
      filter_include_all: !0,
      filter_all_label: "todas",
      animation_duration: 1,
      zoom_out_button_color: "#f3f3f3",
      zoom_out_arrow_color: "#000000",
      popup_info: {
        visible: !1,
        frozen: !1,
        id: null
      },
      zoomed_node_id: null,
      localization: {},
      number_formatter: {},
      layout: {}
    },
    u = {
      root: null
    },
    r = "http://www.w3.org/1999/xhtml",
    i = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: r,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    };

  function a(t) {
    var e = t += "",
      n = e.indexOf(":");
    return 0 <= n && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), i.hasOwnProperty(e) ? {
      space: i[e],
      local: t
    } : t
  }

  function o(t) {
    var e = a(t);
    return (e.local ? function (t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local)
      }
    } : function (n) {
      return function () {
        var t = this.ownerDocument,
          e = this.namespaceURI;
        return e === r && t.documentElement.namespaceURI === r ? t.createElement(n) : t.createElementNS(e, n)
      }
    })(e)
  }

  function e() {}

  function h(t) {
    return null == t ? e : function () {
      return this.querySelector(t)
    }
  }

  function n() {
    return []
  }

  function g(t) {
    return null == t ? n : function () {
      return this.querySelectorAll(t)
    }
  }

  function c(t) {
    return function () {
      return this.matches(t)
    }
  }

  function s(t) {
    return new Array(t.length)
  }

  function p(t, e) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e
  }
  p.prototype = {
    constructor: p,
    appendChild: function (t) {
      return this._parent.insertBefore(t, this._next)
    },
    insertBefore: function (t, e) {
      return this._parent.insertBefore(t, e)
    },
    querySelector: function (t) {
      return this._parent.querySelector(t)
    },
    querySelectorAll: function (t) {
      return this._parent.querySelectorAll(t)
    }
  };
  var y = "$";

  function x(t, e, n, r, i, a) {
    for (var o, l = 0, s = e.length, u = a.length; l < u; ++l)(o = e[l]) ? (o.__data__ = a[l], r[l] = o) : n[l] = new p(t, a[l]);
    for (; l < s; ++l)(o = e[l]) && (i[l] = o)
  }

  function w(t, e, n, r, i, a, o) {
    var l, s, u, c = {},
      d = e.length,
      f = a.length,
      h = new Array(d);
    for (l = 0; l < d; ++l)(s = e[l]) && (h[l] = u = y + o.call(s, s.__data__, l, e), u in c ? i[l] = s : c[u] = s);
    for (l = 0; l < f; ++l)(s = c[u = y + o.call(t, a[l], l, a)]) ? ((r[l] = s).__data__ = a[l], c[u] = null) : n[l] = new p(t, a[l]);
    for (l = 0; l < d; ++l)(s = e[l]) && c[h[l]] === s && (i[l] = s)
  }

  function d(t, e) {
    return t < e ? -1 : e < t ? 1 : e <= t ? 0 : NaN
  }

  function f(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
  }

  function _(t, e) {
    return t.style.getPropertyValue(e) || f(t).getComputedStyle(t, null).getPropertyValue(e)
  }

  function v(t) {
    return t.trim().split(/^|\s+/)
  }

  function b(t) {
    return t.classList || new M(t)
  }

  function M(t) {
    this._node = t, this._names = v(t.getAttribute("class") || "")
  }

  function k(t, e) {
    for (var n = b(t), r = -1, i = e.length; ++r < i;) n.add(e[r])
  }

  function z(t, e) {
    for (var n = b(t), r = -1, i = e.length; ++r < i;) n.remove(e[r])
  }

  function T() {
    this.textContent = ""
  }

  function A() {
    this.innerHTML = ""
  }

  function C() {
    this.nextSibling && this.parentNode.appendChild(this)
  }

  function S() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
  }

  function E() {
    return null
  }

  function L() {
    var t = this.parentNode;
    t && t.removeChild(this)
  }

  function N() {
    return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
  }

  function P() {
    return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
  }
  M.prototype = {
    add: function (t) {
      this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
    },
    remove: function (t) {
      var e = this._names.indexOf(t);
      0 <= e && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")))
    },
    contains: function (t) {
      return 0 <= this._names.indexOf(t)
    }
  };
  var F = {},
    O = null;
  "undefined" != typeof document && ("onmouseenter" in document.documentElement || (F = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }));

  function H(n, t, e) {
    return n = U(n, t, e),
      function (t) {
        var e = t.relatedTarget;
        e && (e === this || 8 & e.compareDocumentPosition(this)) || n.call(this, t)
      }
  }

  function U(n, r, i) {
    return function (t) {
      var e = O;
      O = t;
      try {
        n.call(this, this.__data__, r, i)
      } finally {
        O = e
      }
    }
  }

  function D(a) {
    return function () {
      var t = this.__on;
      if (t) {
        for (var e, n = 0, r = -1, i = t.length; n < i; ++n) e = t[n], a.type && e.type !== a.type || e.name !== a.name ? t[++r] = e : this.removeEventListener(e.type, e.listener, e.capture);
        ++r ? t.length = r : delete this.__on
      }
    }
  }

  function j(s, u, c) {
    var d = F.hasOwnProperty(s.type) ? H : U;
    return function (t, e, n) {
      var r, i = this.__on,
        a = d(u, e, n);
      if (i)
        for (var o = 0, l = i.length; o < l; ++o)
          if ((r = i[o]).type === s.type && r.name === s.name) return this.removeEventListener(r.type, r.listener, r.capture), this.addEventListener(r.type, r.listener = a, r.capture = c), void(r.value = u);
      this.addEventListener(s.type, a, c), r = {
        type: s.type,
        name: s.name,
        value: u,
        listener: a,
        capture: c
      }, i ? i.push(r) : this.__on = [r]
    }
  }

  function R(t, e, n) {
    var r = f(t),
      i = r.CustomEvent;
    "function" == typeof i ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i)
  }
  var B = [null];

  function q(t, e) {
    this._groups = t, this._parents = e
  }

  function Y() {
    return new q([
      [document.documentElement]
    ], B)
  }

  function I(t) {
    return "string" == typeof t ? new q([
      [document.querySelector(t)]
    ], [document.documentElement]) : new q([
      [t]
    ], B)
  }

  function V(t) {
    var e = function () {
      for (var t, e = O; t = e.sourceEvent;) e = t;
      return e
    }();
    return e.changedTouches && (e = e.changedTouches[0]),
      function (t, e) {
        var n = t.ownerSVGElement || t;
        if (n.createSVGPoint) {
          var r = n.createSVGPoint();
          return r.x = e.clientX, r.y = e.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
        }
        var i = t.getBoundingClientRect();
        return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop]
      }(t, e)
  }
  q.prototype = Y.prototype = {
    constructor: q,
    select: function (t) {
      "function" != typeof t && (t = h(t));
      for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
        for (var a, o, l = e[i], s = l.length, u = r[i] = new Array(s), c = 0; c < s; ++c)(a = l[c]) && (o = t.call(a, a.__data__, c, l)) && ("__data__" in a && (o.__data__ = a.__data__), u[c] = o);
      return new q(r, this._parents)
    },
    selectAll: function (t) {
      "function" != typeof t && (t = g(t));
      for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
        for (var o, l = e[a], s = l.length, u = 0; u < s; ++u)(o = l[u]) && (r.push(t.call(o, o.__data__, u, l)), i.push(o));
      return new q(r, i)
    },
    filter: function (t) {
      "function" != typeof t && (t = c(t));
      for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
        for (var a, o = e[i], l = o.length, s = r[i] = [], u = 0; u < l; ++u)(a = o[u]) && t.call(a, a.__data__, u, o) && s.push(a);
      return new q(r, this._parents)
    },
    data: function (t, e) {
      if (!t) return h = new Array(this.size()), u = -1, this.each(function (t) {
        h[++u] = t
      }), h;
      var n = e ? w : x,
        r = this._parents,
        i = this._groups;
      "function" != typeof t && (t = function (t) {
        return function () {
          return t
        }
      }(t));
      for (var a = i.length, o = new Array(a), l = new Array(a), s = new Array(a), u = 0; u < a; ++u) {
        var c = r[u],
          d = i[u],
          f = d.length,
          h = t.call(c, c && c.__data__, u, r),
          p = h.length,
          y = l[u] = new Array(p),
          _ = o[u] = new Array(p);
        n(c, d, y, _, s[u] = new Array(f), h, e);
        for (var g, m, v = 0, b = 0; v < p; ++v)
          if (g = y[v]) {
            for (b <= v && (b = v + 1); !(m = _[b]) && ++b < p;);
            g._next = m || null
          }
      }
      return (o = new q(o, r))._enter = l, o._exit = s, o
    },
    enter: function () {
      return new q(this._enter || this._groups.map(s), this._parents)
    },
    exit: function () {
      return new q(this._exit || this._groups.map(s), this._parents)
    },
    join: function (t, e, n) {
      var r = this.enter(),
        i = this,
        a = this.exit();
      return r = "function" == typeof t ? t(r) : r.append(t + ""), null != e && (i = e(i)), null == n ? a.remove() : n(a), r && i ? r.merge(i).order() : i
    },
    merge: function (t) {
      for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), l = 0; l < a; ++l)
        for (var s, u = e[l], c = n[l], d = u.length, f = o[l] = new Array(d), h = 0; h < d; ++h)(s = u[h] || c[h]) && (f[h] = s);
      for (; l < r; ++l) o[l] = e[l];
      return new q(o, this._parents)
    },
    order: function () {
      for (var t = this._groups, e = -1, n = t.length; ++e < n;)
        for (var r, i = t[e], a = i.length - 1, o = i[a]; 0 <= --a;)(r = i[a]) && (o && 4 ^ r.compareDocumentPosition(o) && o.parentNode.insertBefore(r, o), o = r);
      return this
    },
    sort: function (n) {
      function t(t, e) {
        return t && e ? n(t.__data__, e.__data__) : !t - !e
      }
      n = n || d;
      for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
        for (var o, l = e[a], s = l.length, u = i[a] = new Array(s), c = 0; c < s; ++c)(o = l[c]) && (u[c] = o);
        u.sort(t)
      }
      return new q(i, this._parents).order()
    },
    call: function () {
      var t = arguments[0];
      return arguments[0] = this, t.apply(null, arguments), this
    },
    nodes: function () {
      var t = new Array(this.size()),
        e = -1;
      return this.each(function () {
        t[++e] = this
      }), t
    },
    node: function () {
      for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
        for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
          var o = r[i];
          if (o) return o
        }
      return null
    },
    size: function () {
      var t = 0;
      return this.each(function () {
        ++t
      }), t
    },
    empty: function () {
      return !this.node()
    },
    each: function (t) {
      for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
        for (var i, a = e[n], o = 0, l = a.length; o < l; ++o)(i = a[o]) && t.call(i, i.__data__, o, a);
      return this
    },
    attr: function (t, e) {
      var n = a(t);
      if (arguments.length < 2) {
        var r = this.node();
        return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n)
      }
      return this.each((null == e ? n.local ? function (t) {
        return function () {
          this.removeAttributeNS(t.space, t.local)
        }
      } : function (t) {
        return function () {
          this.removeAttribute(t)
        }
      } : "function" == typeof e ? n.local ? function (e, n) {
        return function () {
          var t = n.apply(this, arguments);
          null == t ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, t)
        }
      } : function (e, n) {
        return function () {
          var t = n.apply(this, arguments);
          null == t ? this.removeAttribute(e) : this.setAttribute(e, t)
        }
      } : n.local ? function (t, e) {
        return function () {
          this.setAttributeNS(t.space, t.local, e)
        }
      } : function (t, e) {
        return function () {
          this.setAttribute(t, e)
        }
      })(n, e))
    },
    style: function (t, e, n) {
      return 1 < arguments.length ? this.each((null == e ? function (t) {
        return function () {
          this.style.removeProperty(t)
        }
      } : "function" == typeof e ? function (e, n, r) {
        return function () {
          var t = n.apply(this, arguments);
          null == t ? this.style.removeProperty(e) : this.style.setProperty(e, t, r)
        }
      } : function (t, e, n) {
        return function () {
          this.style.setProperty(t, e, n)
        }
      })(t, e, null == n ? "" : n)) : _(this.node(), t)
    },
    property: function (t, e) {
      return 1 < arguments.length ? this.each((null == e ? function (t) {
        return function () {
          delete this[t]
        }
      } : "function" == typeof e ? function (e, n) {
        return function () {
          var t = n.apply(this, arguments);
          null == t ? delete this[e] : this[e] = t
        }
      } : function (t, e) {
        return function () {
          this[t] = e
        }
      })(t, e)) : this.node()[t]
    },
    classed: function (t, e) {
      var n = v(t + "");
      if (arguments.length < 2) {
        for (var r = b(this.node()), i = -1, a = n.length; ++i < a;)
          if (!r.contains(n[i])) return !1;
        return !0
      }
      return this.each(("function" == typeof e ? function (t, e) {
        return function () {
          (e.apply(this, arguments) ? k : z)(this, t)
        }
      } : e ? function (t) {
        return function () {
          k(this, t)
        }
      } : function (t) {
        return function () {
          z(this, t)
        }
      })(n, e))
    },
    text: function (t) {
      return arguments.length ? this.each(null == t ? T : ("function" == typeof t ? function (e) {
        return function () {
          var t = e.apply(this, arguments);
          this.textContent = null == t ? "" : t
        }
      } : function (t) {
        return function () {
          this.textContent = t
        }
      })(t)) : this.node().textContent
    },
    html: function (t) {
      return arguments.length ? this.each(null == t ? A : ("function" == typeof t ? function (e) {
        return function () {
          var t = e.apply(this, arguments);
          this.innerHTML = null == t ? "" : t
        }
      } : function (t) {
        return function () {
          this.innerHTML = t
        }
      })(t)) : this.node().innerHTML
    },
    raise: function () {
      return this.each(C)
    },
    lower: function () {
      return this.each(S)
    },
    append: function (t) {
      var e = "function" == typeof t ? t : o(t);
      return this.select(function () {
        return this.appendChild(e.apply(this, arguments))
      })
    },
    insert: function (t, e) {
      var n = "function" == typeof t ? t : o(t),
        r = null == e ? E : "function" == typeof e ? e : h(e);
      return this.select(function () {
        return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null)
      })
    },
    remove: function () {
      return this.each(L)
    },
    clone: function (t) {
      return this.select(t ? P : N)
    },
    datum: function (t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__
    },
    on: function (t, e, n) {
      var r, i, a = function (t) {
          return t.trim().split(/^|\s+/).map(function (t) {
            var e = "",
              n = t.indexOf(".");
            return 0 <= n && (e = t.slice(n + 1), t = t.slice(0, n)), {
              type: t,
              name: e
            }
          })
        }(t + ""),
        o = a.length;
      if (!(arguments.length < 2)) {
        for (l = e ? j : D, null == n && (n = !1), r = 0; r < o; ++r) this.each(l(a[r], e, n));
        return this
      }
      var l = this.node().__on;
      if (l)
        for (var s, u = 0, c = l.length; u < c; ++u)
          for (r = 0, s = l[u]; r < o; ++r)
            if ((i = a[r]).type === s.type && i.name === s.name) return s.value
    },
    dispatch: function (t, e) {
      return this.each(("function" == typeof e ? function (t, e) {
        return function () {
          return R(this, t, e.apply(this, arguments))
        }
      } : function (t, e) {
        return function () {
          return R(this, t, e)
        }
      })(t, e))
    }
  };
  var W = ".controls-container {\tdisplay: inline-block;}.controls-container, .controls-container * {\tbox-sizing: border-box;\ttext-align: left;\tvertical-align: bottom;}.button-container .button, .dropdown .current {\toverflow: hidden;\ttext-overflow: ellipsis;\theight: 100%;\twhite-space: nowrap;\ttext-align: left;\tfont-size: 12px;\tline-height: 21px;}.button-container .button, .dropdown .current, .dropdown .list .list-item {\twhite-space: nowrap;}.slider, .slider-play {\tpointer-events: all;\tvertical-align: bottom}.button {\tdisplay: inline-block;\tcursor: pointer}.button:hover {\topacity: .5}.button.selected, .button.selected:hover {\tcolor: #fff;\tcursor: default;\topacity: 1;\tbackground-image: linear-gradient(transparent, rgba(0, 0, 0, .05) 40%, rgba(0, 0, 0, .1))}.button-container {\tpointer-events: all;\twidth: auto;\tline-height: 0;\tmargin-bottom: 18px;\twidth: 100%;\ttext-align: center;}.button-container.button-group {\tdisplay: table;\tborder: 1px solid #ccc;\twidth: 100%;\ttable-layout: fixed;\tborder-radius: 3px;\tmargin-bottom: 20px;\toverflow: hidden;}.button-container .button {\tfont-size: 12px;\tborder: 1px solid #ccc;\tbackground: #fff;\tpadding: 0.1em 0.6em 0;\tcolor: #333;\tfont-weight: 400;\ttext-align: center;\theight: 24px;\tborder-radius: 3px;\tmargin: 0 1px 2px;}.button-container.button-group .button {\tborder: none;\tborder-left: 1px solid #ccc;\tborder-radius: 0;\tdisplay: table-cell;\ttext-align: center;\tvertical-align: middle;\tmargin: 0;\theight: 22px;}.button-container .button:hover {\tbackground: #eee;\topacity: .8}.button-container.button-group .button:first-child {\tborder: none}.button-container .button.selected, .button-container .button.selected:hover {\topacity: 1;\tbackground: #ececec;\tcolor: #333}.dropdown {\tpointer-events: all;\tdisplay: inline-table;\tcolor: #333;\tfont-weight: 400;\tfont-size: 16px;\tposition: relative}.dropdown .heading {\tmargin-bottom: .4em;\tfont-weight: 300}.dropdown .main {\tbackground: #fff;\tpadding: 0 20px 0 6px;\tcursor: pointer;\tposition: relative;\tborder: 1px solid #ccc;\tborder-radius: 3px;\theight: 24px;\tline-height: 26px}.dropdown .list, .dropdown .symbol {\tposition: absolute}.dropdown .current {\theight: 100%;\twidth: 100%;\tdisplay: inline-block;\tvertical-align: top;\tpadding: 0.1em 0 0;}.dropdown .symbol {\twidth: 30px;\theight: 100%;\tright: 0;\ttop: 0;\tbackground: 80% 40% no-repeat;\tbackground-size: auto 50%;\tdisplay: inline-block}.dropdown .list {\ttop: 100%;\tleft: 2px;\tmin-width: calc(100% - 4px);\tbackground: rgba(255, 255, 255, 1);\tpadding: 0 2px;\ttext-align: left;\tdisplay: none;\tline-height: 1.4em;\tmax-height: 160px;\toverflow-y: scroll;\tcolor: #333;\tbox-shadow: 0 1px 2px rgba(0, 0, 0, .2)}.dropdown .list .list-item {\tfont-size: 12px;\theight: 24px;\tpadding: 0 5px}.dropdown .list .list-item:hover {\tcursor: pointer;\tbackground: #eee}.dropdown.open .list {\tdisplay: block;\tz-index: 1}.dropdown .list .list-item.selected, .dropdown .list .list-item.selected:hover {\tcolor: #57c1fc;\tcursor: default;\topacity: 1}.dropdown .list .list-item.header, .dropdown .list .list-item.header:hover {\tfont-size: .66em;\tletter-spacing: 1px;\ttext-transform: uppercase;\tcolor: #888;\topacity: 1;\tcursor: default;\tfont-weight: 300;\tmargin-top: .5em}.dropdown .list .list-item.header:first-child {\tmargin-top: 0}.controls-container .dropdown {\tmargin: 0 0 20px;}.controls-container .dropdown .heading {\tcolor: #333}.slider-holder {\tmargin-bottom: 20px}.slider-play {\twidth: 24px;\theight: 24px;\tbackground-repeat: no-repeat;\tbackground-size: 100% 100%;\tbackground-position: center;\tcursor: pointer;\tdisplay: none;\tmargin-right: 2px}.slider, .slider-holder.animatable .slider-play {\tdisplay: inline-block}.slider-play:hover {\topacity: .7}.slider {\theight: 46px;\twidth: 100%;\tbottom: 0}.slider-holder.animatable .slider {\twidth: calc(100% - 37px)}.slider-holder.playing .slider {\tpointer-events: none}.slider .tick line {\tstroke: #333}.slider text {\tfill: #333}.slider .slider-end-labels {\tfont-size: 11px;\tfill: #9e9e9e}@media(min-width:520px) {\t.dropdown .main {\t\theight: 30px;\t}\t.slider-play {\t\twidth: 30px;\t\theight: 30px\t}\t.button-container .button, .dropdown .current {\t\tfont-size: 14px;\t\tline-height: 26px;\t\theight: 30px;\t}\t.button-container.button-group .button {\t\theight: 28px;\t}\t.dropdown .list .list-item {\t\theight: 30px;\t\tfont-size: 14px;\t\tline-height: 27px;\t}}";

  function X(t) {
    return "url('data:image/svg+xml;base64," + window.btoa(t) + "')"
  }
  var $ = !1;
  var Z = Object.freeze(["auto-buttons", "grouped-buttons", "floating-buttons", "dropdown", "slider", "none"]);

  function G(t) {
    ! function (t) {
      if (!$ && "undefined" != typeof document) {
        var e = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
        n.type = "text/css", e.appendChild(n), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t)), $ = !0
      }
    }(W);
    var n = {},
      r = {
        slider_step_time: 2,
        slider_loop: !0,
        slider_loop_pause: 0,
        slider_play_button: !0,
        slider_handle_colour: "#333",
        slider_label: !0,
        dropdown_icon_colour: "#333333"
      };
    Object.keys(r).forEach(function (e) {
      var t = e.replace(/_\w/g, function (t) {
        return t.charAt(1).toUpperCase()
      });
      n[t] = function (t) {
        return void 0 === t ? r[e] : (r[e] = t, n)
      }
    }), r.type = "auto_buttons", n.type = function (t) {
      return void 0 === t ? r.type : (r.type = -1 !== Z.indexOf(t) ? t : "auto-buttons", n)
    }, Object.defineProperty(r, "control", {
      get: function () {
        var t = r.type;
        return "dropdown" === t || "slider" === t || "none" === t ? r.type : "buttons"
      },
      set: function () {
        console.warn("Nothing changed: control is read only")
      }
    }), Object.defineProperty(r, "buttons_type", {
      get: function () {
        if ("buttons" === r.control) return "auto-buttons" === r.type ? "auto" : "grouped-buttons" === r.type ? "grouped" : "floating"
      },
      set: function () {
        console.warn("Nothing changed: button_type is read only")
      }
    }), r.index = 0, n.index = function (t) {
      if (void 0 === t) return r.n_options ? r.index : null;
      if (null !== t) {
        if (! function (t) {
            return "number" == typeof t && isFinite(t)
          }(t)) throw TypeError("index must be a number greater than or equal to 0.");
        if (t < 0) throw RangeError("index must be greater than or equal to 0.");
        r.index = Math.floor(t)
      }
      return n
    }, r.options = [], Object.defineProperty(r, "n_options", {
      get: function () {
        return r.options.length
      },
      set: function () {
        console.warn("Nothing changed: n_options is read only")
      }
    }), n.options = function (t) {
      if (void 0 === t) return r.options.slice();
      if (!Array.isArray(t)) throw TypeError("opts must be an array.");
      return r.options = Object.freeze(t.slice()), n
    }, Object.defineProperty(r, "value", {
      get: function () {
        return r.n_options ? r.options[r.index] : null
      },
      set: function () {
        console.warn("Nothing changed: value is read only")
      }
    }), n.value = function (t) {
      if (void 0 === t) return r.value;
      if (null !== t) {
        var e = r.options.indexOf(t); - 1 !== e ? r.index = e : console.warn("Nothing changed: value not in options list")
      }
      return n
    }, Object.defineProperty(r, "width", {
      get: function () {
        return a.getBoundingClientRect().width + "px"
      },
      set: function () {
        console.warn("Nothing changed: width is read only")
      }
    }), r.changeHandlers = [], n.on = function (t, e) {
      return "change" === t && r.changeHandlers.push(e.bind(n)), n
    };
    Object.seal(r);
    var e, i = I(t);
    e = !i.classed("controls-container") && (i.classed("controls-container", !0), !0);
    var a = i.node();
    return n.container = i, {
      output_obj: n,
      props: r,
      onChangeCallbacks: function () {
        var e = r.value,
          n = r.index;
        r.changeHandlers.forEach(function (t) {
          t(e, n)
        })
      },
      container: i,
      container_node: a,
      container_selector: t,
      added_class: e
    }
  }

  function Q(t) {
    function r() {
      a.classed("open", !1)
    }
    var e = t.container,
      n = t.props,
      i = t.onChangeCallbacks,
      a = e.append("div").attr("class", "dropdown"),
      o = a.append("div").attr("class", "main"),
      l = o.append("span").attr("class", "current"),
      s = o.append("span").attr("class", "symbol"),
      u = a.append("div").attr("class", "list"),
      c = a.node();
    document.querySelector("body").addEventListener("click", function (t) {
      if (a.classed("open")) {
        for (var e = t.target, n = e.parentElement; n;) {
          if (e === c) return;
          n = (e = n).parentElement
        }
        r()
      }
    }, !1), o.on("click", function () {
      a.classed("open", !a.classed("open"))
    });
    var d, f = function () {
        d !== n.dropdown_icon_colour && (d = n.dropdown_icon_colour, s.style("background-image", function (t) {
          return X('<svg width="6px" height="12px" viewBox="0 0 6 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g transform="translate(-442.000000, -44.000000)" fill="' + t + '"> <g id="Group" transform="translate(442.000000, 44.000000)"> <polygon id="Triangle-2" points="3 0 6 5 0 5"></polygon> <polygon id="Triangle-2-Copy" points="3 12 0 7 6 7"></polygon> </g> </g> </svg>')
        }(d)))
      },
      h = {
        handle: a
      };
    return h.show = function () {
      return f(), a.style("width", n.width).style("display", "inline-table"), a.select(".main").style("width", n.width), h
    }, h.hide = function () {
      return r(), a.style("display", "none"), h
    }, h.setValue = function () {
      return l.text(n.value).attr("title", n.value), h
    }, h.setOptions = function () {
      return u.text("").selectAll(".list-item").data(n.options).enter().append("div").attr("class", "list-item").text(function (t) {
        return t
      }).on("click", function (t, e) {
        r(), I(this).classed("selected") || (n.index = e, i())
      }), h
    }, h.remove = function () {
      return a.remove(), h
    }, h
  }

  function J(t, e) {
    var n, r, i = t.container,
      a = t.props,
      o = t.onChangeCallbacks,
      l = i.append("div").attr("class", "button-container"),
      s = function () {
        l.style("display", "none")
      },
      u = {
        handle: l
      };
    return u.show = function () {
      return "floating" === a.buttons_type ? l.style("width", null).style("display", "inline-block").classed("button-group", !1) : (l.style("width", a.width).style("display", "table").classed("button-group", !0), "auto" === a.buttons_type && (r.every(function (t) {
        return t.offsetWidth >= t.scrollWidth
      }) || (s(), e.show()))), u
    }, u.hide = function () {
      return s(), u
    }, u.setValue = function () {
      return n && n.each(function (t, e) {
        I(this).classed("selected", e === a.index)
      }), u
    }, u.setOptions = function () {
      return n = l.text("").selectAll(".button").data(a.options).enter().append("div").attr("class", "button").classed("selected", function (t, e) {
        return e === a.index
      }).text(function (t) {
        return t
      }).attr("title", function (t) {
        return t
      }).on("click", function (t, e) {
        e !== a.index && (a.index = e, o())
      }), r = n.nodes(), u
    }, u.remove = function () {
      return l.remove(), u
    }, u
  }
  var K = Array.prototype.slice;

  function tt(t) {
    return t
  }
  var et = 1,
    nt = 2,
    rt = 3,
    it = 4,
    at = 1e-6;

  function ot(t) {
    return "translate(" + (t + .5) + ",0)"
  }

  function lt(t) {
    return "translate(0," + (t + .5) + ")"
  }

  function st() {
    return !this.__axis
  }

  function ut(y, _) {
    var g = [],
      m = null,
      v = null,
      b = 6,
      x = 6,
      w = 3,
      M = y === et || y === it ? -1 : 1,
      k = y === it || y === nt ? "x" : "y",
      z = y === et || y === rt ? ot : lt;

    function e(t) {
      var e = null == m ? _.ticks ? _.ticks.apply(_, g) : _.domain() : m,
        n = null == v ? _.tickFormat ? _.tickFormat.apply(_, g) : tt : v,
        r = Math.max(b, 0) + w,
        i = _.range(),
        a = +i[0] + .5,
        o = +i[i.length - 1] + .5,
        l = (_.bandwidth ? function (e) {
          var n = Math.max(0, e.bandwidth() - 1) / 2;
          return e.round() && (n = Math.round(n)),
            function (t) {
              return +e(t) + n
            }
        } : function (e) {
          return function (t) {
            return +e(t)
          }
        })(_.copy()),
        s = t.selection ? t.selection() : t,
        u = s.selectAll(".domain").data([null]),
        c = s.selectAll(".tick").data(e, _).order(),
        d = c.exit(),
        f = c.enter().append("g").attr("class", "tick"),
        h = c.select("line"),
        p = c.select("text");
      u = u.merge(u.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), c = c.merge(f), h = h.merge(f.append("line").attr("stroke", "currentColor").attr(k + "2", M * b)), p = p.merge(f.append("text").attr("fill", "currentColor").attr(k, M * r).attr("dy", y === et ? "0em" : y === rt ? "0.71em" : "0.32em")), t !== s && (u = u.transition(t), c = c.transition(t), h = h.transition(t), p = p.transition(t), d = d.transition(t).attr("opacity", at).attr("transform", function (t) {
        return isFinite(t = l(t)) ? z(t) : this.getAttribute("transform")
      }), f.attr("opacity", at).attr("transform", function (t) {
        var e = this.parentNode.__axis;
        return z(e && isFinite(e = e(t)) ? e : l(t))
      })), d.remove(), u.attr("d", y === it || y == nt ? x ? "M" + M * x + "," + a + "H0.5V" + o + "H" + M * x : "M0.5," + a + "V" + o : x ? "M" + a + "," + M * x + "V0.5H" + o + "V" + M * x : "M" + a + ",0.5H" + o), c.attr("opacity", 1).attr("transform", function (t) {
        return z(l(t))
      }), h.attr(k + "2", M * b), p.attr(k, M * r).text(n), s.filter(st).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", y === nt ? "start" : y === it ? "end" : "middle"), s.each(function () {
        this.__axis = l
      })
    }
    return e.scale = function (t) {
      return arguments.length ? (_ = t, e) : _
    }, e.ticks = function () {
      return g = K.call(arguments), e
    }, e.tickArguments = function (t) {
      return arguments.length ? (g = null == t ? [] : K.call(t), e) : g.slice()
    }, e.tickValues = function (t) {
      return arguments.length ? (m = null == t ? null : K.call(t), e) : m && m.slice()
    }, e.tickFormat = function (t) {
      return arguments.length ? (v = t, e) : v
    }, e.tickSize = function (t) {
      return arguments.length ? (b = x = +t, e) : b
    }, e.tickSizeInner = function (t) {
      return arguments.length ? (b = +t, e) : b
    }, e.tickSizeOuter = function (t) {
      return arguments.length ? (x = +t, e) : x
    }, e.tickPadding = function (t) {
      return arguments.length ? (w = +t, e) : w
    }, e
  }

  function ct(t, e) {
    return t < e ? -1 : e < t ? 1 : e <= t ? 0 : NaN
  }
  var dt, ft, ht = (1 === (ft = ct).length && (dt = ft, ft = function (t, e) {
    return ct(dt(t), e)
  }), {
    left: function (t, e, n, r) {
      for (null == n && (n = 0), null == r && (r = t.length); n < r;) {
        var i = n + r >>> 1;
        ft(t[i], e) < 0 ? n = 1 + i : r = i
      }
      return n
    },
    right: function (t, e, n, r) {
      for (null == n && (n = 0), null == r && (r = t.length); n < r;) {
        var i = n + r >>> 1;
        0 < ft(t[i], e) ? r = i : n = 1 + i
      }
      return n
    }
  }).right;
  var pt = Math.sqrt(50),
    yt = Math.sqrt(10),
    _t = Math.sqrt(2);

  function gt(t, e, n) {
    var r = (e - t) / Math.max(0, n),
      i = Math.floor(Math.log(r) / Math.LN10),
      a = r / Math.pow(10, i);
    return 0 <= i ? (pt <= a ? 10 : yt <= a ? 5 : _t <= a ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (pt <= a ? 10 : yt <= a ? 5 : _t <= a ? 2 : 1)
  }

  function mt(t, e) {
    var n, r, i = t.length,
      a = -1;
    if (null == e) {
      for (; ++a < i;)
        if (null != (n = t[a]) && n <= n)
          for (r = n; ++a < i;) null != (n = t[a]) && r < n && (r = n)
    } else
      for (; ++a < i;)
        if (null != (n = e(t[a], a, t)) && n <= n)
          for (r = n; ++a < i;) null != (n = e(t[a], a, t)) && r < n && (r = n);
    return r
  }

  function vt(t, e, n) {
    t.prototype = e.prototype = n, n.constructor = t
  }

  function bt(t, e) {
    var n = Object.create(t.prototype);
    for (var r in e) n[r] = e[r];
    return n
  }

  function xt() {}
  var wt = 1 / .7,
    Mt = "\\s*([+-]?\\d+)\\s*",
    kt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    zt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    Tt = /^#([0-9a-f]{3,8})$/,
    At = new RegExp("^rgb\\(" + [Mt, Mt, Mt] + "\\)$"),
    Ct = new RegExp("^rgb\\(" + [zt, zt, zt] + "\\)$"),
    St = new RegExp("^rgba\\(" + [Mt, Mt, Mt, kt] + "\\)$"),
    Et = new RegExp("^rgba\\(" + [zt, zt, zt, kt] + "\\)$"),
    Lt = new RegExp("^hsl\\(" + [kt, zt, zt] + "\\)$"),
    Nt = new RegExp("^hsla\\(" + [kt, zt, zt, kt] + "\\)$"),
    Pt = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
      // green: 'rgba(0, 184, 104, 1)',
      // red: 'rgba(224, 79, 46, 1)',
      // yellow: 'rgba(245, 235, 53, 1)',
      // pink: 'rgba(214, 171, 252, 1)',
      // blue: 'rgba(38, 135, 252, 1)'
      // green: 32768,
      // red: 16711680,
      // yellow: 16776960,
      // pink: 16761035,
      // blue: 255,
    };

  function Ft() {
    return this.rgb().formatHex()
  }

  function Ot() {
    return this.rgb().formatRgb()
  }

  function Ht(t) {
    var e, n;
    return t = (t + "").trim().toLowerCase(), (e = Tt.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), 6 === n ? Ut(e) : 3 === n ? new Bt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === n ? new Bt(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === n ? new Bt(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = At.exec(t)) ? new Bt(e[1], e[2], e[3], 1) : (e = Ct.exec(t)) ? new Bt(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = St.exec(t)) ? Dt(e[1], e[2], e[3], e[4]) : (e = Et.exec(t)) ? Dt(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = Lt.exec(t)) ? Vt(e[1], e[2] / 100, e[3] / 100, 1) : (e = Nt.exec(t)) ? Vt(e[1], e[2] / 100, e[3] / 100, e[4]) : Pt.hasOwnProperty(t) ? Ut(Pt[t]) : "transparent" === t ? new Bt(NaN, NaN, NaN, 0) : null
  }

  function Ut(t) {
    return new Bt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
  }

  function Dt(t, e, n, r) {
    return r <= 0 && (t = e = n = NaN), new Bt(t, e, n, r)
  }

  function jt(t) {
    return t instanceof xt || (t = Ht(t)), t ? new Bt((t = t.rgb()).r, t.g, t.b, t.opacity) : new Bt
  }

  function Rt(t, e, n, r) {
    return 1 === arguments.length ? jt(t) : new Bt(t, e, n, null == r ? 1 : r)
  }

  function Bt(t, e, n, r) {
    this.r = +t, this.g = +e, this.b = +n, this.opacity = +r
  }

  function qt() {
    return "#" + It(this.r) + It(this.g) + It(this.b)
  }

  function Yt() {
    var t = this.opacity;
    return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
  }

  function It(t) {
    return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
  }

  function Vt(t, e, n, r) {
    return r <= 0 ? t = e = n = NaN : n <= 0 || 1 <= n ? t = e = NaN : e <= 0 && (t = NaN), new Xt(t, e, n, r)
  }

  function Wt(t) {
    if (t instanceof Xt) return new Xt(t.h, t.s, t.l, t.opacity);
    if (t instanceof xt || (t = Ht(t)), !t) return new Xt;
    if (t instanceof Xt) return t;
    var e = (t = t.rgb()).r / 255,
      n = t.g / 255,
      r = t.b / 255,
      i = Math.min(e, n, r),
      a = Math.max(e, n, r),
      o = NaN,
      l = a - i,
      s = (a + i) / 2;
    return l ? (o = e === a ? (n - r) / l + 6 * (n < r) : n === a ? (r - e) / l + 2 : (e - n) / l + 4, l /= s < .5 ? a + i : 2 - a - i, o *= 60) : l = 0 < s && s < 1 ? 0 : o, new Xt(o, l, s, t.opacity)
  }

  function Xt(t, e, n, r) {
    this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
  }

  function $t(t, e, n) {
    return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
  }
  vt(xt, Ht, {
    copy: function (t) {
      return Object.assign(new this.constructor, this, t)
    },
    displayable: function () {
      return this.rgb().displayable()
    },
    hex: Ft,
    formatHex: Ft,
    formatHsl: function () {
      return Wt(this).formatHsl()
    },
    formatRgb: Ot,
    toString: Ot
  }), vt(Bt, Rt, bt(xt, {
    brighter: function (t) {
      return t = null == t ? wt : Math.pow(wt, t), new Bt(this.r * t, this.g * t, this.b * t, this.opacity)
    },
    darker: function (t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Bt(this.r * t, this.g * t, this.b * t, this.opacity)
    },
    rgb: function () {
      return this
    },
    displayable: function () {
      return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
    },
    hex: qt,
    formatHex: qt,
    formatRgb: Yt,
    toString: Yt
  })), vt(Xt, function (t, e, n, r) {
    return 1 === arguments.length ? Wt(t) : new Xt(t, e, n, null == r ? 1 : r)
  }, bt(xt, {
    brighter: function (t) {
      return t = null == t ? wt : Math.pow(wt, t), new Xt(this.h, this.s, this.l * t, this.opacity)
    },
    darker: function (t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Xt(this.h, this.s, this.l * t, this.opacity)
    },
    rgb: function () {
      var t = this.h % 360 + 360 * (this.h < 0),
        e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < .5 ? n : 1 - n) * e,
        i = 2 * n - r;
      return new Bt($t(240 <= t ? t - 240 : 120 + t, i, r), $t(t, i, r), $t(t < 120 ? 240 + t : t - 120, i, r), this.opacity)
    },
    displayable: function () {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
    },
    formatHsl: function () {
      var t = this.opacity;
      return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
    }
  }));
  var Zt = Math.PI / 180,
    Gt = 180 / Math.PI,
    Qt = .96422,
    Jt = 1,
    Kt = .82521,
    te = 4 / 29,
    ee = 6 / 29,
    ne = 3 * ee * ee,
    re = ee * ee * ee;

  function ie(t) {
    if (t instanceof ae) return new ae(t.l, t.a, t.b, t.opacity);
    if (t instanceof de) return fe(t);
    t instanceof Bt || (t = jt(t));
    var e, n, r = ue(t.r),
      i = ue(t.g),
      a = ue(t.b),
      o = oe((.2225045 * r + .7168786 * i + .0606169 * a) / Jt);
    return r === i && i === a ? e = n = o : (e = oe((.4360747 * r + .3850649 * i + .1430804 * a) / Qt), n = oe((.0139322 * r + .0971045 * i + .7141733 * a) / Kt)), new ae(116 * o - 16, 500 * (e - o), 200 * (o - n), t.opacity)
  }

  function ae(t, e, n, r) {
    this.l = +t, this.a = +e, this.b = +n, this.opacity = +r
  }

  function oe(t) {
    return re < t ? Math.pow(t, 1 / 3) : t / ne + te
  }

  function le(t) {
    return ee < t ? t * t * t : ne * (t - te)
  }

  function se(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
  }

  function ue(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
  }

  function ce(t, e, n, r) {
    return 1 === arguments.length ? function (t) {
      if (t instanceof de) return new de(t.h, t.c, t.l, t.opacity);
      if (t instanceof ae || (t = ie(t)), 0 === t.a && 0 === t.b) return new de(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
      var e = Math.atan2(t.b, t.a) * Gt;
      return new de(e < 0 ? 360 + e : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
    }(t) : new de(t, e, n, null == r ? 1 : r)
  }

  function de(t, e, n, r) {
    this.h = +t, this.c = +e, this.l = +n, this.opacity = +r
  }

  function fe(t) {
    if (isNaN(t.h)) return new ae(t.l, 0, 0, t.opacity);
    var e = t.h * Zt;
    return new ae(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity)
  }
  vt(ae, function (t, e, n, r) {
    return 1 === arguments.length ? ie(t) : new ae(t, e, n, null == r ? 1 : r)
  }, bt(xt, {
    brighter: function (t) {
      return new ae(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
    },
    darker: function (t) {
      return new ae(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
    },
    rgb: function () {
      var t = (this.l + 16) / 116,
        e = isNaN(this.a) ? t : t + this.a / 500,
        n = isNaN(this.b) ? t : t - this.b / 200;
      return new Bt(se(3.1338561 * (e = Qt * le(e)) - 1.6168667 * (t = Jt * le(t)) - .4906146 * (n = Kt * le(n))), se(-.9787684 * e + 1.9161415 * t + .033454 * n), se(.0719453 * e - .2289914 * t + 1.4052427 * n), this.opacity)
    }
  })), vt(de, ce, bt(xt, {
    brighter: function (t) {
      return new de(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
    },
    darker: function (t) {
      return new de(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
    },
    rgb: function () {
      return fe(this).rgb()
    }
  }));
  var he = 1.78277,
    pe = -.29227,
    ye = -.90649,
    _e = 1.97294,
    ge = _e * ye,
    me = _e * he,
    ve = he * pe - -.14861 * ye;

  function be(t, e, n, r) {
    return 1 === arguments.length ? function (t) {
      if (t instanceof xe) return new xe(t.h, t.s, t.l, t.opacity);
      t instanceof Bt || (t = jt(t));
      var e = t.r / 255,
        n = t.g / 255,
        r = t.b / 255,
        i = (ve * r + ge * e - me * n) / (ve + ge - me),
        a = r - i,
        o = (_e * (n - i) - pe * a) / ye,
        l = Math.sqrt(o * o + a * a) / (_e * i * (1 - i)),
        s = l ? Math.atan2(o, a) * Gt - 120 : NaN;
      return new xe(s < 0 ? s + 360 : s, l, i, t.opacity)
    }(t) : new xe(t, e, n, null == r ? 1 : r)
  }

  function xe(t, e, n, r) {
    this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
  }

  function we(t) {
    return function () {
      return t
    }
  }

  function Me(e, n) {
    return function (t) {
      return e + t * n
    }
  }

  function ke(n) {
    return 1 == (n = +n) ? ze : function (t, e) {
      return e - t ? function (e, n, r) {
        return e = Math.pow(e, r), n = Math.pow(n, r) - e, r = 1 / r,
          function (t) {
            return Math.pow(e + t * n, r)
          }
      }(t, e, n) : we(isNaN(t) ? e : t)
    }
  }

  function ze(t, e) {
    var n = e - t;
    return n ? Me(t, n) : we(isNaN(t) ? e : t)
  }
  vt(xe, be, bt(xt, {
    brighter: function (t) {
      return t = null == t ? wt : Math.pow(wt, t), new xe(this.h, this.s, this.l * t, this.opacity)
    },
    darker: function (t) {
      return t = null == t ? .7 : Math.pow(.7, t), new xe(this.h, this.s, this.l * t, this.opacity)
    },
    rgb: function () {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * Zt,
        e = +this.l,
        n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
        r = Math.cos(t),
        i = Math.sin(t);
      return new Bt(255 * (e + n * (-.14861 * r + he * i)), 255 * (e + n * (pe * r + ye * i)), 255 * (e + _e * r * n), this.opacity)
    }
  }));
  var Te = function t(e) {
    var o = ke(e);

    function n(e, t) {
      var n = o((e = Rt(e)).r, (t = Rt(t)).r),
        r = o(e.g, t.g),
        i = o(e.b, t.b),
        a = ze(e.opacity, t.opacity);
      return function (t) {
        return e.r = n(t), e.g = r(t), e.b = i(t), e.opacity = a(t), e + ""
      }
    }
    return n.gamma = t, n
  }(1);

  function Ae(e, n) {
    return n -= e = +e,
      function (t) {
        return e + n * t
      }
  }
  var Ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  };
  var Se = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    Ee = new RegExp(Se.source, "g");

  function Le(t, r) {
    var e, n, i, a = Se.lastIndex = Ee.lastIndex = 0,
      o = -1,
      l = [],
      s = [];
    for (t += "", r += "";
      (e = Se.exec(t)) && (n = Ee.exec(r));)(i = n.index) > a && (i = r.slice(a, i), l[o] ? l[o] += i : l[++o] = i), (e = e[0]) === (n = n[0]) ? l[o] ? l[o] += n : l[++o] = n : (l[++o] = null, s.push({
      i: o,
      x: Ae(e, n)
    })), a = Ee.lastIndex;
    return a < r.length && (i = r.slice(a), l[o] ? l[o] += i : l[++o] = i), l.length < 2 ? s[0] ? function (e) {
      return function (t) {
        return e(t) + ""
      }
    }(s[0].x) : function (t) {
      return function () {
        return t
      }
    }(r) : (r = s.length, function (t) {
      for (var e, n = 0; n < r; ++n) l[(e = s[n]).i] = e.x(t);
      return l.join("")
    })
  }

  function Ne(t, e) {
    var n, r = void 0 === e ? "undefined" : Ce(e);
    return null == e || "boolean" === r ? we(e) : ("number" === r ? Ae : "string" === r ? (n = Ht(e)) ? (e = n, Te) : Le : e instanceof Ht ? Te : e instanceof Date ? function (e, n) {
      var r = new Date;
      return n -= e = +e,
        function (t) {
          return r.setTime(e + n * t), r
        }
    } : Array.isArray(e) ? function (t, e) {
      var n, r = e ? e.length : 0,
        i = t ? Math.min(r, t.length) : 0,
        a = new Array(i),
        o = new Array(r);
      for (n = 0; n < i; ++n) a[n] = Ne(t[n], e[n]);
      for (; n < r; ++n) o[n] = e[n];
      return function (t) {
        for (n = 0; n < i; ++n) o[n] = a[n](t);
        return o
      }
    } : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? function (t, e) {
      var n, r = {},
        i = {};
      for (n in null !== t && "object" === (void 0 === t ? "undefined" : Ce(t)) || (t = {}), null !== e && "object" === (void 0 === e ? "undefined" : Ce(e)) || (e = {}), e) n in t ? r[n] = Ne(t[n], e[n]) : i[n] = e[n];
      return function (t) {
        for (n in r) i[n] = r[n](t);
        return i
      }
    } : Ae)(t, e)
  }

  function Pe(e, n) {
    return n -= e = +e,
      function (t) {
        return Math.round(e + n * t)
      }
  }
  var Fe, Oe, He, Ue, De = 180 / Math.PI,
    je = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1
    };

  function Re(t, e, n, r, i, a) {
    var o, l, s;
    return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (s = t * n + e * r) && (n -= t * s, r -= e * s), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, s /= l), t * r < e * n && (t = -t, e = -e, s = -s, o = -o), {
      translateX: i,
      translateY: a,
      rotate: Math.atan2(e, t) * De,
      skewX: Math.atan(s) * De,
      scaleX: o,
      scaleY: l
    }
  }

  function Be(n, l, s, o) {
    function u(t) {
      return t.length ? t.pop() + " " : ""
    }
    return function (t, e) {
      var i = [],
        a = [];
      return t = n(t), e = n(e),
        function (t, e, n, r, i, a) {
          if (t !== n || e !== r) {
            var o = i.push("translate(", null, l, null, s);
            a.push({
              i: o - 4,
              x: Ae(t, n)
            }, {
              i: o - 2,
              x: Ae(e, r)
            })
          } else(n || r) && i.push("translate(" + n + l + r + s)
        }(t.translateX, t.translateY, e.translateX, e.translateY, i, a),
        function (t, e, n, r) {
          t !== e ? (180 < t - e ? e += 360 : 180 < e - t && (t += 360), r.push({
            i: n.push(u(n) + "rotate(", null, o) - 2,
            x: Ae(t, e)
          })) : e && n.push(u(n) + "rotate(" + e + o)
        }(t.rotate, e.rotate, i, a),
        function (t, e, n, r) {
          t !== e ? r.push({
            i: n.push(u(n) + "skewX(", null, o) - 2,
            x: Ae(t, e)
          }) : e && n.push(u(n) + "skewX(" + e + o)
        }(t.skewX, e.skewX, i, a),
        function (t, e, n, r, i, a) {
          if (t !== n || e !== r) {
            var o = i.push(u(i) + "scale(", null, ",", null, ")");
            a.push({
              i: o - 4,
              x: Ae(t, n)
            }, {
              i: o - 2,
              x: Ae(e, r)
            })
          } else 1 === n && 1 === r || i.push(u(i) + "scale(" + n + "," + r + ")")
        }(t.scaleX, t.scaleY, e.scaleX, e.scaleY, i, a), t = e = null,
        function (t) {
          for (var e, n = -1, r = a.length; ++n < r;) i[(e = a[n]).i] = e.x(t);
          return i.join("")
        }
    }
  }
  var qe = Be(function (t) {
      return "none" === t ? je : (Fe || (Fe = document.createElement("DIV"), Oe = document.documentElement, He = document.defaultView), Fe.style.transform = t, t = He.getComputedStyle(Oe.appendChild(Fe), null).getPropertyValue("transform"), Oe.removeChild(Fe), Re(+(t = t.slice(7, -1).split(","))[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
    }, "px, ", "px)", "deg)"),
    Ye = Be(function (t) {
      return null == t ? je : ((Ue = Ue || document.createElementNS("http://www.w3.org/2000/svg", "g")).setAttribute("transform", t), (t = Ue.transform.baseVal.consolidate()) ? Re((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : je)
    }, ", ", ")", ")");
  Math.SQRT2;

  function Ie(l) {
    return function t(o) {
      function e(e, t) {
        var n = l((e = be(e)).h, (t = be(t)).h),
          r = ze(e.s, t.s),
          i = ze(e.l, t.l),
          a = ze(e.opacity, t.opacity);
        return function (t) {
          return e.h = n(t), e.s = r(t), e.l = i(Math.pow(t, o)), e.opacity = a(t), e + ""
        }
      }
      return o = +o, e.gamma = t, e
    }(1)
  }
  Ie(function (t, e) {
    var n = e - t;
    return n ? Me(t, 180 < n || n < -180 ? n - 360 * Math.round(n / 360) : n) : we(isNaN(t) ? e : t)
  });
  var Ve = Ie(ze),
    We = Array.prototype,
    Xe = We.map,
    $e = We.slice;

  function Ze(t) {
    return +t
  }
  var Ge = [0, 1];

  function Qe(e, n) {
    return (n -= e = +e) ? function (t) {
      return (t - e) / n
    } : function (t) {
      return function () {
        return t
      }
    }(n)
  }

  function Je(t, e, n, r) {
    var i = t[0],
      a = t[1],
      o = e[0],
      l = e[1];
    return o = a < i ? (i = n(a, i), r(l, o)) : (i = n(i, a), r(o, l)),
      function (t) {
        return o(i(t))
      }
  }

  function Ke(n, t, e, r) {
    var i = Math.min(n.length, t.length) - 1,
      a = new Array(i),
      o = new Array(i),
      l = -1;
    for (n[i] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++l < i;) a[l] = e(n[l], n[l + 1]), o[l] = r(t[l], t[l + 1]);
    return function (t) {
      var e = ht(n, t, 1, i) - 1;
      return o[e](a[e](t))
    }
  }

  function tn(t, e) {
    if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
    var n, r = t.slice(0, n);
    return [1 < r.length ? r[0] + r.slice(2) : r, +t.slice(n + 1)]
  }

  function en(t) {
    return (t = tn(Math.abs(t))) ? t[1] : NaN
  }
  var nn, rn = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

  function an(t) {
    return new on(t)
  }

  function on(t) {
    if (!(e = rn.exec(t))) throw new Error("invalid format: " + t);
    var e;
    this.fill = e[1] || " ", this.align = e[2] || ">", this.sign = e[3] || "-", this.symbol = e[4] || "", this.zero = !!e[5], this.width = e[6] && +e[6], this.comma = !!e[7], this.precision = e[8] && +e[8].slice(1), this.trim = !!e[9], this.type = e[10] || ""
  }

  function ln(t, e) {
    var n = tn(t, e);
    if (!n) return t + "";
    var r = n[0],
      i = n[1];
    return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
  }
  an.prototype = on.prototype, on.prototype.toString = function () {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
  };
  var sn = {
    "%": function (t, e) {
      return (100 * t).toFixed(e)
    },
    b: function (t) {
      return Math.round(t).toString(2)
    },
    c: function (t) {
      return t + ""
    },
    d: function (t) {
      return Math.round(t).toString(10)
    },
    e: function (t, e) {
      return t.toExponential(e)
    },
    f: function (t, e) {
      return t.toFixed(e)
    },
    g: function (t, e) {
      return t.toPrecision(e)
    },
    o: function (t) {
      return Math.round(t).toString(8)
    },
    p: function (t, e) {
      return ln(100 * t, e)
    },
    r: ln,
    s: function (t, e) {
      var n = tn(t, e);
      if (!n) return t + "";
      var r = n[0],
        i = n[1],
        a = i - (nn = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
        o = r.length;
      return a === o ? r : o < a ? r + new Array(a - o + 1).join("0") : 0 < a ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + tn(t, Math.max(0, e + a - 1))[0]
    },
    X: function (t) {
      return Math.round(t).toString(16).toUpperCase()
    },
    x: function (t) {
      return Math.round(t).toString(16)
    }
  };

  function un(t) {
    return t
  }
  var cn, dn, fn, hn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

  function pn(t) {
    var w = t.grouping && t.thousands ? function (l, s) {
        return function (t, e) {
          for (var n = t.length, r = [], i = 0, a = l[0], o = 0; 0 < n && 0 < a && (e < o + a + 1 && (a = Math.max(1, e - o)), r.push(t.substring(n -= a, n + a)), !((o += a + 1) > e));) a = l[i = (i + 1) % l.length];
          return r.reverse().join(s)
        }
      }(t.grouping, t.thousands) : un,
      r = t.currency,
      M = t.decimal,
      k = t.numerals ? function (e) {
        return function (t) {
          return t.replace(/[0-9]/g, function (t) {
            return e[+t]
          })
        }
      }(t.numerals) : un,
      i = t.percent || "%";

    function o(t) {
      var u = (t = an(t)).fill,
        c = t.align,
        d = t.sign,
        e = t.symbol,
        f = t.zero,
        h = t.width,
        p = t.comma,
        y = t.precision,
        _ = t.trim,
        g = t.type;
      "n" === g ? (p = !0, g = "g") : sn[g] || (null == y && (y = 12), _ = !0, g = "g"), (f || "0" === u && "=" === c) && (f = !0, u = "0", c = "=");
      var m = "$" === e ? r[0] : "#" === e && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "",
        v = "$" === e ? r[1] : /[%p]/.test(g) ? i : "",
        b = sn[g],
        x = /[defgprs%]/.test(g);

      function n(t) {
        var e, n, r, i = m,
          a = v;
        if ("c" === g) a = b(t) + a, t = "";
        else {
          var o = (t = +t) < 0;
          if (t = b(Math.abs(t), y), _ && (t = function (t) {
              t: for (var e, n = t.length, r = 1, i = -1; r < n; ++r) switch (t[r]) {
                case ".":
                  i = e = r;
                  break;
                case "0":
                  0 === i && (i = r), e = r;
                  break;
                default:
                  if (0 < i) {
                    if (!+t[r]) break t;
                    i = 0
                  }
              }
              return 0 < i ? t.slice(0, i) + t.slice(e + 1) : t
            }(t)), o && 0 == +t && (o = !1), i = (o ? "(" === d ? d : "-" : "-" === d || "(" === d ? "" : d) + i, a = ("s" === g ? hn[8 + nn / 3] : "") + a + (o && "(" === d ? ")" : ""), x)
            for (e = -1, n = t.length; ++e < n;)
              if ((r = t.charCodeAt(e)) < 48 || 57 < r) {
                a = (46 === r ? M + t.slice(e + 1) : t.slice(e)) + a, t = t.slice(0, e);
                break
              }
        }
        p && !f && (t = w(t, 1 / 0));
        var l = i.length + t.length + a.length,
          s = l < h ? new Array(h - l + 1).join(u) : "";
        switch (p && f && (t = w(s + t, s.length ? h - a.length : 1 / 0), s = ""), c) {
          case "<":
            t = i + t + a + s;
            break;
          case "=":
            t = i + s + t + a;
            break;
          case "^":
            t = s.slice(0, l = s.length >> 1) + i + t + a + s.slice(l);
            break;
          default:
            t = s + i + t + a
        }
        return k(t)
      }
      return y = null == y ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y)), n.toString = function () {
        return t + ""
      }, n
    }
    return {
      format: o,
      formatPrefix: function (t, e) {
        var n = o(((t = an(t)).type = "f", t)),
          r = 3 * Math.max(-8, Math.min(8, Math.floor(en(e) / 3))),
          i = Math.pow(10, -r),
          a = hn[8 + r / 3];
        return function (t) {
          return n(i * t) + a
        }
      }
    }
  }

  function yn(t, e, n) {
    var r, i = t[0],
      a = t[t.length - 1],
      o = function (t, e, n) {
        var r = Math.abs(e - t) / Math.max(0, n),
          i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
          a = r / i;
        return pt <= a ? i *= 10 : yt <= a ? i *= 5 : _t <= a && (i *= 2), e < t ? -i : i
      }(i, a, null == e ? 10 : e);
    switch ((n = an(null == n ? ",f" : n)).type) {
      case "s":
        var l = Math.max(Math.abs(i), Math.abs(a));
        return null != n.precision || isNaN(r = function (t, e) {
          return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(en(e) / 3))) - en(Math.abs(t)))
        }(o, l)) || (n.precision = r), fn(n, l);
      case "":
      case "e":
      case "g":
      case "p":
      case "r":
        null != n.precision || isNaN(r = function (t, e) {
          return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, en(e) - en(t)) + 1
        }(o, Math.max(Math.abs(i), Math.abs(a)))) || (n.precision = r - ("e" === n.type));
        break;
      case "f":
      case "%":
        null != n.precision || isNaN(r = function (t) {
          return Math.max(0, -en(Math.abs(t)))
        }(o)) || (n.precision = r - 2 * ("%" === n.type))
    }
    return dn(n)
  }

  function _n(l) {
    var s = l.domain;
    return l.ticks = function (t) {
      var e = s();
      return function (t, e, n) {
        var r, i, a, o, l = -1;
        if (n = +n, (t = +t) === (e = +e) && 0 < n) return [t];
        if ((r = e < t) && (i = t, t = e, e = i), 0 === (o = gt(t, e, n)) || !isFinite(o)) return [];
        if (0 < o)
          for (t = Math.ceil(t / o), e = Math.floor(e / o), a = new Array(i = Math.ceil(e - t + 1)); ++l < i;) a[l] = (t + l) * o;
        else
          for (t = Math.floor(t * o), e = Math.ceil(e * o), a = new Array(i = Math.ceil(t - e + 1)); ++l < i;) a[l] = (t - l) / o;
        return r && a.reverse(), a
      }(e[0], e[e.length - 1], null == t ? 10 : t)
    }, l.tickFormat = function (t, e) {
      return yn(s(), t, e)
    }, l.nice = function (t) {
      null == t && (t = 10);
      var e, n = s(),
        r = 0,
        i = n.length - 1,
        a = n[r],
        o = n[i];
      return o < a && (e = a, a = o, o = e, e = r, r = i, i = e), 0 < (e = gt(a, o, t)) ? e = gt(a = Math.floor(a / e) * e, o = Math.ceil(o / e) * e, t) : e < 0 && (e = gt(a = Math.ceil(a * e) / e, o = Math.floor(o * e) / e, t)), 0 < e ? (n[r] = Math.floor(a / e) * e, n[i] = Math.ceil(o / e) * e, s(n)) : e < 0 && (n[r] = Math.ceil(a * e) / e, n[i] = Math.floor(o * e) / e, s(n)), l
    }, l
  }

  function gn() {
    var t = function (e, n) {
      var r, i, a, o = Ge,
        l = Ge,
        s = Ne,
        u = !1;

      function c() {
        return r = 2 < Math.min(o.length, l.length) ? Ke : Je, i = a = null, t
      }

      function t(t) {
        return (i = i || r(o, l, u ? function (t) {
          return function (e, n) {
            var r = t(e = +e, n = +n);
            return function (t) {
              return t <= e ? 0 : n <= t ? 1 : r(t)
            }
          }
        }(e) : e, s))(+t)
      }
      return t.invert = function (t) {
        return (a = a || r(l, o, Qe, u ? function (t) {
          return function (e, n) {
            var r = t(e = +e, n = +n);
            return function (t) {
              return t <= 0 ? e : 1 <= t ? n : r(t)
            }
          }
        }(n) : n))(+t)
      }, t.domain = function (t) {
        return arguments.length ? (o = Xe.call(t, Ze), c()) : o.slice()
      }, t.range = function (t) {
        return arguments.length ? (l = $e.call(t), c()) : l.slice()
      }, t.rangeRound = function (t) {
        return l = $e.call(t), s = Pe, c()
      }, t.clamp = function (t) {
        return arguments.length ? (u = !!t, c()) : u
      }, t.interpolate = function (t) {
        return arguments.length ? (s = t, c()) : s
      }, c()
    }(Qe, Ae);
    return t.copy = function () {
      return function (t, e) {
        return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
      }(t, gn())
    }, _n(t)
  }
  cn = pn({
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  }), dn = cn.format, fn = cn.formatPrefix;

  function mn(t) {
    this.container = I(t), this._width = null, this._height = null, this._handleRadius = 15, this._channelHeight = 5, this._channelRadius = null, this._handleFill = "black", this._channelFill = "#eee", this._margin = {
      top: null,
      left: null,
      right: null
    }, this._domain = [0, 1], this._value = null, this._snap = !1, this._scale = null, this._axis = !1, this._ticks = null, this._tickFormat = null, this._tickSize = null, this._label = null, this._labelSize = 18, this._startLabel = null, this._startLabelBelow = !1, this._endLabel = null, this._endLabelBelow = !1, this._startEndLabelSize = 16, this.handlers = {
      change: []
    }
  }

  function vn(e) {
    0 < e.length && "_" == e.charAt(0) && (mn.prototype[e.substr(1)] = function (t) {
      return void 0 === t ? this[e] : (this[e] = t, this)
    })
  }
  var bn = new mn;
  for (var xn in bn) vn(xn);

  function wn(t, e) {
    return "boolean" == typeof t ? t ? Math.round(e) : e : function t(e, n, r, i) {
      if (void 0 === r && (r = 0), void 0 === i && (i = e.length), i - r == 0) return n;
      if (i - r == 1) return e[r];
      if (i - r == 2) return Math.abs(e[r] - n) <= Math.abs(e[r + 1] - n) ? e[r] : e[r + 1];
      var a = r + Math.floor((i - r) / 2),
        o = e[a],
        l = e[a - 1];
      return l <= n && n <= o ? Math.abs(l - n) <= Math.abs(o - n) ? l : o : o <= n ? t(e, n, a, i) : t(e, n, r, a)
    }(t, e)
  }

  function Mn(t) {
    return new mn(t)
  }

  function kn(t) {
    var e, i, n = t.container,
      a = t.props,
      o = t.onChangeCallbacks,
      r = t.container_selector,
      l = n.append("div").attr("class", "slider-holder animatable"),
      s = l.append("div").attr("class", "slider-play");
    l.append("div").attr("class", "slider");

    function u() {
      d && (clearInterval(d), d = void 0, l.classed("playing", !1), s.style("background-image", e))
    }

    function c() {
      var t = a.n_options;
      if (!(t < 2)) {
        var e = t - 1,
          n = a.index,
          r = a.slider_step_time;
        l.classed("playing", !0), s.style("background-image", i), 0 < r && n === e ? (n = 0, f.value(n).update(), a.index = n, o()) : r < 0 && 0 === n && (n = e, f.value(n).update(), a.index = n, o()),
          function n(r) {
            if (0 !== r || a.slider_loop) {
              var t = 1e3 * (Math.abs(a.slider_step_time) + (r ? 0 : a.slider_loop_pause));
              d = setTimeout(function () {
                var t = a.n_options,
                  e = 0 <= a.slider_step_time ? r : t - (1 + r);
                f.value(e).update(), a.index = e, o(), n((r + 1) % t)
              }, t)
            } else u()
          }((0 < r ? n : t - (1 + n)) + 1)
      }
    }
    var d, f = Mn(r + " .slider-holder .slider").channelHeight(6).snap(!0).on("change", function (t) {
      t !== a.index && (a.index = t, o())
    });
    s.on("click", function () {
      l.classed("playing") ? u() : a.slider_play_button && c()
    });

    function h() {
      ! function () {
        l.style("width", a.width);
        var t = window.innerWidth,
          e = t < 520 ? 12 : 15;
        f.labelSize(t < 520 ? 12 : 14).handleRadius(e).margin({
          left: 5 + e,
          right: e,
          top: t < 520 ? 33 : 31
        })
      }(), y(),
        function () {
          var t;
          t = !0 === a.slider_label ? a.value : "string" == typeof a.slider_label ? a.slider_label : null, f.label(t)
        }()
    }
    var p, y = function () {
        a.slider_play_button ? (l.classed("animatable", !0), s.style("transform", a.slider_step_time < 0 ? "rotate(180deg)" : null)) : (u(), l.classed("animatable", !1)), p !== a.slider_handle_colour && (f.update(), p = a.slider_handle_colour, l.select(".slider-handle").style("fill", p), e = function (t) {
          return X('<svg width="25px" height="30px" viewBox="0 0 25 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <polygon id="Triangle" fill="' + t + '" stroke="none" points="25 15 0 30 0 0"></polygon> </svg>')
        }(p), i = function (t) {
          return X('<svg width="26px" height="30px" viewBox="0 0 26 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill="' + t + '"><rect x="2" y="2" width="9" height="26"></rect> <rect x="15" y="2" width="9" height="26"></rect> </g> </svg>')
        }(p), s.style("background-image", d ? i : e))
      },
      _ = {
        handle: l
      };
    return _.show = function () {
      return l.style("display", "inline-block"), h(), f.update(), _
    }, _.hide = function () {
      return u(), l.style("display", "none"), _
    }, _.setValue = function () {
      return f.value(a.index), _
    }, _.setOptions = function () {
      return f.domain([0, a.n_options - 1]).update(), _
    }, _.remove = function () {
      return l.remove(), _
    }, _
  }

  function zn(t) {
    function e(t) {
      "none" === t ? u.style("display", "none") : u.style("display", null), "dropdown" === t ? c.show() : c.hide(), "slider" === t ? f.show() : f.hide(), "buttons" === t ? d.show() : d.hide()
    }

    function n() {
      var t = h();
      if (s.n_options < 2) return s.index = 0, void e("none");
      (p() || t) && (t && (c.setOptions(), d.setOptions(), f.setOptions()), c.setValue(), d.setValue(), f.setValue()), e(s.control)
    }
    var r, i, a, o = G(t),
      l = o.output_obj,
      s = o.props,
      u = o.container,
      c = Q(o),
      d = J(o, c),
      f = kn(o),
      h = (r = [], function () {
        var t = s.options,
          e = t.length;
        if (!(e < 2)) return !(r && t.length === r.length && t.every(function (t, e) {
          return t === r[e]
        }) || (r = Object.freeze(t.slice()), s.index > e - 1 && (s.index = e - 1), 0))
      }),
      p = function () {
        if (i === s.index && a === s.value) return !1;
        var t = s.n_options;
        return s.index > t - 1 && (s.index = t - 1), i = s.index, a = s.value, !0
      };
    return window.addEventListener("resize", n), l.update = function () {
      return n(), this
    }, l.remove = function () {
      return c.remove(), d.remove(), f.remove(), o.added_class && u.classed("controls-container", !1), window.removeEventListener("resize", n), this
    }, l
  }
  mn.prototype.margin = function (t) {
    if (!t) return this._margin;
    for (xn in t) {
      if (!(xn in this._margin)) throw "Slider.margin: unrecognised option " + xn;
      this._margin[xn] = t[xn]
    }
    return this
  }, mn.prototype.on = function (t, e) {
    if (!(t in this.handlers)) throw "Slider.on: No such event: " + t;
    return this.handlers[t].push(e), this
  }, mn.prototype.fire = function (t, e) {
    if (!(t in this.handlers)) throw "Slider.fire: No such event: " + t;
    for (var n = this.handlers[t], r = 0; r < n.length; r++) n[r].call(this, e);
    return this
  }, mn.prototype.update = mn.prototype.draw = function () {
    var i = this,
      t = this._width,
      e = this._height,
      n = this.container.node();
    if (!t) {
      var r = n.getBoundingClientRect();
      if (!r || 0 == r.width) return this;
      t = r.width, e = r.height
    }
    var a, o = null == this._channelRadius ? this._channelHeight / 2 : this._channelRadius,
      l = null == this._margin.left ? Math.max(this._handleRadius, o) : this._margin.left,
      s = null == this._margin.right ? Math.max(this._handleRadius, o) : this._margin.right,
      u = null == this._margin.top ? Math.max(this._handleRadius, this._channelHeight / 2) : this._margin.top,
      c = t - l - s,
      d = c + 2 * o,
      f = 1.5 * this._labelSize;
    null != this._label && null == this._margin.top && (u += f), "http://www.w3.org/2000/svg" == n.namespaceURI ? a = this.container : ((a = this.container.selectAll("svg").data([{
      width: t,
      height: e
    }])).exit().remove(), (a = a.enter().append("svg").merge(a)).attr("width", function (t) {
      return t.width
    }).attr("height", function (t) {
      return t.height
    }));
    var h = a.selectAll("g.slider-container").data([{
      left: l,
      top: u,
      id: this._id
    }]);
    h.exit().remove(), (h = h.enter().append("g").attr("class", "slider-container").merge(h)).attr("transform", function (t) {
      return "translate(" + t.left + "," + t.top + ")"
    }).attr("id", function (t) {
      return t.id
    }), this.scale = (this._scale ? this._scale() : gn()).domain(this._domain).range([0, c]), null == this._value || this._value < this._domain[0] ? this._value = this._domain[0] : this._value > this._domain[1] && (this._value = this._domain[1]), this._snap && (this._value = wn(this._snap, this._value));
    var p, y = [];
    this._axis && (p = "boolean" != typeof this._axis ? this._axis(this.scale) : function (t) {
      return ut(rt, t)
    }().scale(this.scale).tickPadding(6), this._ticks && p.ticks(this._ticks), this._tickFormat && p.tickFormat(this._tickFormat), this._tickSize ? p.tickSize(this._tickSize) : p.tickSize(Math.max(5, this._handleRadius - this._channelHeight - 2)), y.push(p));
    var _, g, m, v, b = h.selectAll(".slider-axis").data(y).enter();

    function x() {
      document.removeEventListener("mouseup", x, !1), document.removeEventListener("mousemove", w, !1)
    }

    function w(t) {
      z(t.clientX - m)
    }

    function M() {
      document.removeEventListener("touchend", M, !1), document.removeEventListener("touchmove", k, !1)
    }

    function k(t) {
      1 == t.touches.length && z(t.touches[0].clientX - m)
    }

    function z(t) {
      var e = v + t,
        n = Math.max(0, Math.min(c, e)),
        r = i.scale.invert(n);
      i._snap && (r = wn(i._snap, r)), g.attr("cx", i.scale(r)), r != i._value && (i._value = r, i.fire("change", i._value))
    }
    b.append("g").attr("class", "slider-axis").attr("transform", "translate(0," + this._channelHeight / 2 + ")").each(function (t) {
      t(I(this))
    }), b.select(".domain").attr("fill", "none"), b.selectAll(".tick line").attr("stroke", "black"), b.exit().remove(), (_ = h.selectAll(".slider-channel").data([{
      width: d,
      height: this._channelHeight,
      channel_r: o
    }])).exit().remove(), (_ = _.enter().append("rect").attr("class", "slider-channel").attr("cursor", "pointer").on("click", function () {
      var t = Math.max(0, Math.min(c, V(this)[0]));
      i._value = i.scale.invert(t), i._snap && (i._value = wn(i._snap, i._value)), g.attr("cx", i.scale(i._value)), i.fire("change", i._value)
    }).merge(_)).attr("width", function (t) {
      return t.width
    }).attr("fill", this._channelFill).attr("height", function (t) {
      return t.height
    }).attr("y", function (t) {
      return -t.height / 2
    }).attr("x", function (t) {
      return -t.channel_r
    }).attr("rx", function (t) {
      return t.channel_r
    }), (g = (g = h.selectAll(".slider-handle").data([{
      v: this._value,
      x: this.scale(this._value)
    }])).enter().append("circle").attr("class", "slider-handle").attr("cursor", "col-resize").merge(g)).attr("cx", function (t) {
      return t.x
    }).attr("r", this._handleRadius).attr("fill", this._handleFill).on("mousedown", function () {
      O.preventDefault(),
        function (t) {
          document.addEventListener("mouseup", x, !1), document.addEventListener("mousemove", w, !1), m = t.clientX, v = i.scale(i._value)
        }(O)
    }).on("touchstart", function () {
      O.preventDefault(),
        function (t) {
          1 == t.touches.length && (document.addEventListener("touchend", M, !1), document.addEventListener("touchmove", k, !1), m = t.touches[0].clientX, v = i.scale(i._value))
        }(O)
    });
    var T = [];
    this._label && T.push({
      label: this._label,
      x: c / 2,
      y: -f,
      font_size: this._labelSize
    });
    var A = h.selectAll(".slider-label").data(T);
    A.exit().remove(), (A = A.enter().append("text").attr("class", "slider-label").attr("text-anchor", "middle").attr("cursor", "default").merge(A)).text(function (t) {
      return t.label
    }).attr("x", function (t) {
      return t.x
    }).attr("y", function (t) {
      return t.y
    }).attr("font-size", this._labelSize);
    var C = [];
    this._startLabel && C.push({
      label: this._startLabel,
      x: this._startLabelBelow ? 0 : -(o + 5 + Math.max(0, this._handleRadius - o)),
      y: this._startLabelBelow ? o + 15 : this._startEndLabelSize / 1.75 - o / 2,
      anchor: this._startLabelBelow ? "middle" : "end",
      font_size: this._startEndLabelSize
    }), this._endLabel && C.push({
      label: this._endLabel,
      x: this._endLabelBelow ? c : c + (o + Math.max(0, this._handleRadius - o) + 5),
      y: this._startLabelBelow ? o + 15 : this._startEndLabelSize / 1.75 - o / 2,
      anchor: this._endLabelBelow ? "middle" : "start",
      font_size: this._startEndLabelSize
    });
    var S = h.selectAll(".slider-end-labels").data(C);
    return S.exit().remove(), (S = S.enter().append("text").attr("class", "slider-end-labels").attr("pointer-events", "none").merge(S)).text(function (t) {
      return t.label
    }).attr("font-size", function (t) {
      return t.font_size
    }).attr("x", function (t) {
      return t.x
    }).attr("y", function (t) {
      return t.y
    }).attr("text-anchor", function (t) {
      return t.anchor
    }), this
  }, Mn.version = "1.3.2";
  var Tn, An, Cn = 25,
    Sn = {};

  function En(t, e, n, r, i, a, o) {
    var l = n - t / 2 - 10,
      s = n + t / 2 + 10,
      u = t / 2 + Math.min(0, l - i.left) + Math.max(0, s - i.right);
    return {
      pos: [u, o],
      shape: u - 10 < 5 ? [-u, -15 * a, Math.max(10, 5 - u), -10 * a] : t - 5 < u + 10 ? [Math.min(-10, t - u - 5), -10 * a, Math.min(10, t - u), -15 * a] : [-10, -10 * a, 10, -10 * a]
    }
  }

  function Ln(t, e, n, r, i, a, o) {
    var l = r - e / 2 - 10,
      s = r + e / 2 + 10,
      u = e / 2 + Math.min(0, l - i.top) + Math.max(0, s - i.bottom);
    return {
      pos: [o, u],
      shape: u - 10 < 5 ? [-15 * a, -u, -10 * a, Math.max(10, 5 - u)] : e - 5 < u + 10 ? [-10 * a, Math.min(-10, e - u - 5), -15 * a, Math.min(10, e - u)] : [-10 * a, -10, -10 * a, 10]
    }
  }

  function Nn(t, e, n) {
    var r, i = document.createElementNS("http://www.w3.org/2000/svg", t);
    if (e)
      for (r in e) i.setAttribute(r, e[r]);
    var a = i.style;
    if (n)
      for (r in n) a[r] = n[r];
    return i
  }
  Sn.bottom = function (t, e) {
    return {
      shape: [-10, -10, 10, -10],
      pos: [t / 2, e + 10]
    }
  }, Sn.top = function (t, e) {
    return {
      shape: [-10, 10, 10, 10],
      pos: [t / 2, -10]
    }
  }, Sn.left = function (t, e) {
    return {
      shape: [10, 10, 10, -10],
      pos: [-10, e / 2]
    }
  }, Sn.right = function (t, e) {
    return {
      shape: [-10, 10, -10, -10],
      pos: [t + 10, e / 2]
    }
  }, Sn.topLeft = function (t, e) {
    return {
      shape: [15, 10, 10, 15],
      pos: [-10, -10]
    }
  }, Sn.bottomLeft = function (t, e) {
    return {
      shape: [15, -10, 10, -15],
      pos: [-10, e + 10]
    }
  }, Sn.topRight = function (t, e) {
    return {
      shape: [-15, 10, -10, 15],
      pos: [t + 10, -10]
    }
  }, Sn.bottomRight = function (t, e) {
    return {
      shape: [-15, -10, -10, -15],
      pos: [t + 10, e + 10]
    }
  }, Sn.bottomFlexible = function (t, e, n, r, i) {
    return En(t, 0, n, 0, i, 1, e + 10)
  }, Sn.topFlexible = function (t, e, n, r, i) {
    return En(t, 0, n, 0, i, -1, -10)
  }, Sn.rightFlexible = function (t, e, n, r, i) {
    return Ln(0, e, 0, r, i, 1, t + 10)
  }, Sn.leftFlexible = function (t, e, n, r, i) {
    return Ln(0, e, 0, r, i, -1, -10)
  };
  var Pn = 1,
    Fn = {
      container: document.body,
      maxWidth: "70%",
      point: null,
      html: null,
      directions: ["bottom", "top", "left", "right", "topLeft", "bottomLeft", "topRight", "bottomRight", "bottomFlexible", "topFlexible", "leftFlexible", "rightFlexible"],
      fallbackFit: "horizontal"
    };

  function On() {
    for (var t in this.unique_id = Pn++, Fn) this["_" + t] = Fn[t];
    this.handlers = {
      click: []
    }
  }

  function Hn(e) {
    On.prototype[e] = function (t) {
      return void 0 === t ? this["_" + e] : (this["_" + e] = t, this)
    }
  }
  for (var Un in Fn) Hn(Un);

  function Dn() {
    return new On
  }
  On.prototype.point = function (t, e) {
    if (void 0 === t) return this._point;
    if (Array.isArray(t)) this._point = [t[0], t[1]];
    else if (void 0 !== e) this._point = [t, e];
    else if (t instanceof HTMLElement || t instanceof SVGElement) {
      var n = t.getBoundingClientRect();
      this._point = [Math.floor(n.left + n.width / 2), Math.floor(n.top + n.height / 2)]
    } else console.error("Popup: could not understand argument");
    return this
  }, On.prototype.directions = function (t) {
    return void 0 === t ? this._directions : ("string" == typeof t && (t = [t]), this._directions = t.slice(), this)
  }, On.prototype.text = function (t) {
    return this._html = function (t) {
      return t.replace(/[&<>]/g, function (t) {
        return {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;"
        }[t]
      })
    }(t), this
  }, On.prototype.on = function (t, e) {
    if (!(t in this.handlers)) throw new Error("Popup.on: No such event: " + t);
    return this.handlers[t].push(e), this
  }, On.prototype.fire = function (t, e) {
    if (!(t in this.handlers)) throw new Error("Popup.fire: No such event: " + t);
    for (var n = this.handlers[t], r = 0; r < n.length; r++) n[r].call(this, e);
    return this
  }, On.prototype._getElement = function () {
    var e = this,
      t = "flourish-popup-" + e.unique_id,
      n = document.getElementById(t);
    if (!n) {
      (n = document.createElement("div")).className = "flourish-popup", n.id = t;
      var r = n.style;
      r.display = "none", r.margin = r.padding = 0, r.position = "absolute", r.width = "80px", r.height = "40px", r.boxSizing = "border-box", n.addEventListener("click", function (t) {
        e.fire("click", t)
      }, !1);
      var i = Nn("svg", {
          class: "flourish-popup-svg"
        }, {
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }),
        a = Nn("filter", {
          id: "dropshadow-" + e.unique_id,
          height: "130%"
        });
      a.appendChild(Nn("feGaussianBlur", { in: "SourceAlpha",
        stdDeviation: 5
      })), a.appendChild(Nn("feOffset", {
        dx: 0,
        dy: 2,
        result: "offsetblur"
      }));
      var o = Nn("feComponentTransfer");
      o.appendChild(Nn("feFuncA", {
        type: "linear",
        slope: .2
      })), a.appendChild(o);
      var l = Nn("feMerge");
      a.appendChild(l), l.appendChild(Nn("feMergeNode")), l.appendChild(Nn("feMergeNode", { in: "SourceGraphic"
      })), i.appendChild(a);
      var s = Nn("g", {
        filter: "url(#dropshadow-" + e.unique_id + ")",
        fill: "white",
        stroke: "none"
      });
      s.appendChild(Nn("rect", {
        x: Cn,
        y: Cn,
        rx: 5
      })), s.appendChild(Nn("path")), i.appendChild(s), n.appendChild(i);
      var u = document.createElement("div");
      u.className = "flourish-popup-content", (r = u.style).position = "absolute", r.top = r.left = Cn + "px", r.padding = "10px", n.appendChild(u), e._getConstrainer().appendChild(n)
    }
    return e._resizeConstrainer(), n
  }, On.prototype._getConstrainer = function () {
    return Tn || ((Tn = document.createElement("div")).id = "flourish-popup-constrainer", (An = Tn.style).overflow = "hidden", An.pointerEvents = "none", An.position = "absolute", An.left = "0", An.top = "0", An.margin = "0", An.padding = "0", document.body.appendChild(Tn), this._resizeConstrainer(), Tn)
  }, On.prototype._resizeConstrainer = function () {
    var t = An.display;
    An.display = "none", An.width = document.documentElement.scrollWidth + "px", An.height = document.documentElement.scrollHeight + "px", An.display = t
  }, On.prototype.draw = function () {
    var t = this;
    if (t._point) {
      var e = document.documentElement.getBoundingClientRect(),
        n = t._point[0],
        r = t._point[1],
        i = t._container.getBoundingClientRect();
      n < i.left ? n = i.left : n > i.right && (n = i.right), r < i.top ? r = i.top : r > i.bottom && (r = i.bottom);
      var a, o = n - e.left,
        l = r - e.top,
        s = t._getElement(),
        u = s.style,
        c = s.querySelector(".flourish-popup-svg"),
        d = c.querySelector("g"),
        f = d.querySelector("rect"),
        h = d.querySelector("path"),
        p = s.querySelector(".flourish-popup-content");
      u.display = "block", p.style.maxWidth = (a = i, (t._maxWidth.match(/^\d+(?:\.\d+)?%$/) ? a.width * parseFloat(t._maxWidth) / 100 : t._maxWidth.match(/^\d+(?:\.\d+)?(?:px)?$/) ? parseFloat(t._maxWidth) : (null != t._maxWidth && console.error("Popup: Unknown value for maxWidth: " + t._maxWidth), a.width)) + "px"), t._inner_html != t._html && (p.innerHTML = t._inner_html = t._html);
      for (var y, _, g = p.getBoundingClientRect(); y = Math.ceil(g.width), _ = Math.ceil(g.height), u.width = y + 2 * Cn + "px", u.height = _ + 2 * Cn + "px", g = p.getBoundingClientRect(), y != Math.ceil(g.width) || _ != Math.ceil(g.height););
      f.setAttribute("width", y), f.setAttribute("height", _), c.setAttribute("width", y + 2 * Cn), c.setAttribute("height", _ + 2 * Cn);
      for (var m, v, b, x, w, M, k, z, T, A, C = Cn - 10, S = null, E = null, L = null, N = 1 / 0, P = 1 / 0, F = 0; F < t._directions.length; F++) {
        var O = t._directions[F],
          H = (b = y, x = _, w = n, M = r, k = i, void 0, z = Sn[O](b, x, w, M, k), T = w - Cn - z.pos[0], A = M - Cn - z.pos[1], {
            left: T,
            top: A,
            right: T + b + 2 * Cn,
            bottom: A + x + 2 * Cn
          }),
          U = Math.max(0, Math.floor(i.left) - H.left - C) + Math.max(0, H.right - Math.ceil(i.right) - C),
          D = Math.max(0, Math.floor(i.top) - H.top - C) + Math.max(0, H.bottom - Math.ceil(i.bottom) - C);
        if (0 == U && 0 == D) {
          S = O;
          break
        }(U < N || U == N && D < m) && (N = U, m = D, E = O), (D < P || D == P && U < v) && (P = D, v = U, L = O)
      }
      return function (t, e, n, r, i, a, o, l, s, u) {
        var c = Sn[t](r, i, l, s, u);
        e.left = a - Cn - c.pos[0] + "px", e.top = o - Cn - c.pos[1] + "px", n.setAttribute("d", "M0,0L" + c.shape.join(",") + "Z"), n.setAttribute("transform", "translate(" + (c.pos[0] + Cn) + "," + (c.pos[1] + Cn) + ")")
      }(O = S || ("horizontal" == t._fallbackFit ? E : "vertical" == t._fallbackFit ? L : (console.warn("Popup: failed to point box of size (" + y + ", " + _ + ") at (" + n + ", " + r + ") within (" + i.left + ", " + i.top + ", " + i.right + ", " + i.bottom + ")"), t._directions[0])), u, h, y, _, o, l, n, r, i), t
    }
    console.error("Popup: cannot draw popup till point() has been specified")
  }, On.prototype.hide = function () {
    return this._getElement().style.display = "none", this
  };
  var jn = {
    show_popups: !0,
    text_color: "#333333",
    align: "left",
    font_size: 12,
    fill_color: "#ffffff",
    opacity: 1,
    padding: 10,
    border_radius: 3,
    show_pointer: !0,
    show_shadow: !0,
    is_custom: !(Dn.version = "2.1.2"),
    style_popups: !1
  };

  function Rn(t) {
    if ("number" != typeof t) return t;
    var e = Math.round(t * Math.pow(10, 2)) / 100;
    return 4 == Math.round(t).toString().length ? e : dn(",")(e)
  }

  function Bn(t, e, n, r) {
    for (var i in this._state = e, this._default_template = n, this._first_load = !0, this._title_binding = r || "id", jn) null == e[i] && (e[i] = jn[i]);
    ! function () {
      if (!document.querySelector("#popup-styles")) {
        var t = document.createElement("style");
        t.id = "popup-styles", t.type = "text/css", t.innerHTML = ".flourish-popup { pointer-events: none; }.flourish-popup .flourish-popup-content { pointer-events: auto; }.flourish-popup h1 { margin: 0; font-size: inherit; }.flourish-popup h2 { font-weight: normal; font-size: inherit; margin: 0; }.flourish-popup h2 .name { font-weight: bold; }.flourish-popup ul { padding: 0; margin: 0; }.flourish-popup li { font-size: inherit; list-style: none; }", document.head.appendChild(t)
      }
    }(), this.popup = Dn().container(t).directions(["bottom", "left", "right", "top"]).point(0, 0).draw().hide()
  }
  Bn.prototype.addColumnNames = function (t) {
    if (this._column_names = t, !this._state.custom_template && this._first_load) {
      for (var e in this._column_names)
        if (!Array.isArray(this._column_names[e])) {
          var n = this._column_names[e];
          this._state.custom_template = n + ": {{" + n + "}}";
          break
        }
      this._first_load = !1
    }
  }, Bn.prototype.hide = function () {
    return this.popup.hide(), this
  }, Bn.prototype.point = function (t, e) {
    if (1 == arguments.length) {
      var n = t.getBoundingClientRect();
      t = n.left + n.width / 2, e = n.top
    }
    return this.popup.point(t, e), this
  }, Bn.prototype.html = function (t) {
    return this.popup.html(t), this
  }, Bn.prototype.updateStyle = function () {
    var t = this.popup._getElement(),
      e = t.querySelector(".flourish-popup-content");
    e.style.padding = this._state.padding + "px", e.style.textAlign = this._state.align;
    var n = t.querySelector(".flourish-popup-svg g");
    return n.style.fill = this._state.fill_color, n.style.opacity = this._state.opacity, 0 == this._state.show_shadow ? n.removeAttribute("filter") : n.setAttribute("filter", "url(#dropshadow-" + this.popup.unique_id + ")"), n.querySelector("rect").setAttribute("rx", this._state.border_radius), n.querySelector("path").style.display = this._state.show_pointer ? "block" : "none", this
  }, Bn.prototype.draw = function (i, t) {
    if (this._state.show_popups) {
      var a = this;
      if (this.updateStyle(), !arguments.length) return this.popup.draw(), t && t(this.popup._getElement()), this;
      var n = "<div style='color: " + this._state.text_color + "; font-size: " + this._state.font_size + "px; text-align:" + this._state.align + ";'>";
      if (this._state.is_custom || this._default_template) !this._state.is_custom && this._default_template ? n += this._default_template.replace(/\{\{((?:[^}]|\}[^}])*)\}\}/g, function (t, n) {
        var r;
        if (Array.isArray(a._column_names[n])) {
          var e = a._column_names[n];
          if (0 == e.length) return "";
          r = "<ul>", e.forEach(function (t, e) {
            r += "<li>" + t + ": " + i[n][e] + "</li>"
          }), r += "</ul>"
        } else r = i[n];
        return void 0 !== r ? Rn(r) : ""
      }) : n += this._state.custom_template.replace(/\{\{((?:[^}]|\}[^}])*)\}\}/g, function (t, n) {
        var r;
        return Object.keys(a._column_names).some(function (t) {
          if (Array.isArray(a._column_names[t])) {
            var e = a._column_names[t].indexOf(n);
            if (0 <= e) return r = i[t][e], !0
          } else if (a._column_names[t] == n) return r = i[t], !0
        }), void 0 !== r ? Rn(r) : ""
      });
      else {
        i[this._title_binding] && (n += "<h1>" + i[this._title_binding] + "</h1>");
        var e = {};
        for (var r in this._column_names) {
          var o;
          if (r != this._title_binding)
            if ("metadata" == r) {
              if (!Array.isArray(i.metadata)) return;
              for (var l = 0; l < i.metadata.length; l++) e[o = this._column_names.metadata[l]] || (e[o] = !0, n += "<h2><span class='name' data-binding='metadata'>" + o + "</span>: " + Rn(i.metadata[l]) + "</h2>")
            } else {
              if (o = this._column_names[r], Array.isArray(o)) {
                o.forEach(function (t, e) {
                  n += "<h2><span class='name' data-binding='" + r + "'>" + t + "</span>: " + Rn(i[r][e]) + "</h2>"
                });
                continue
              }
              if (e[o]) continue;
              e[o] = !0, n += "<h2><span class='name' data-binding='" + r + "'>" + o + "</span>: " + Rn(i[r]) + "</h2>"
            }
        }
        n += "</div>"
      }
      return this.popup.html(n).draw(), t && t(this.popup._getElement()), this
    }
  }, Bn.prototype.directions = function (t) {
    return this.popup.directions(t), this
  }, Bn.prototype.container = function (t) {
    return this.popup.container(t), this
  };
  var qn = "$";

  function Yn() {}

  function In(t, e) {
    var n = new Yn;
    if (t instanceof Yn) t.each(function (t, e) {
      n.set(e, t)
    });
    else if (Array.isArray(t)) {
      var r, i = -1,
        a = t.length;
      if (null == e)
        for (; ++i < a;) n.set(i, t[i]);
      else
        for (; ++i < a;) n.set(e(r = t[i], i, t), r)
    } else if (t)
      for (var o in t) n.set(o, t[o]);
    return n
  }

  function Vn() {
    var f, h, e, p = [],
      o = [];

    function y(t, n, r, i) {
      if (n >= p.length) return null != f && t.sort(f), null != h ? h(t) : t;
      for (var e, a, o, l = -1, s = t.length, u = p[n++], c = In(), d = r(); ++l < s;)(o = c.get(e = u(a = t[l]) + "")) ? o.push(a) : c.set(e, [a]);
      return c.each(function (t, e) {
        i(d, e, y(t, n, r, i))
      }), d
    }
    return e = {
      object: function (t) {
        return y(t, 0, Wn, Xn)
      },
      map: function (t) {
        return y(t, 0, $n, Zn)
      },
      entries: function (t) {
        return function n(t, r) {
          if (++r > p.length) return t;
          var i, a = o[r - 1];
          return null != h && r >= p.length ? i = t.entries() : (i = [], t.each(function (t, e) {
            i.push({
              key: e,
              values: n(t, r)
            })
          })), null != a ? i.sort(function (t, e) {
            return a(t.key, e.key)
          }) : i
        }(y(t, 0, $n, Zn), 0)
      },
      key: function (t) {
        return p.push(t), e
      },
      sortKeys: function (t) {
        return o[p.length - 1] = t, e
      },
      sortValues: function (t) {
        return f = t, e
      },
      rollup: function (t) {
        return h = t, e
      }
    }
  }

  function Wn() {
    return {}
  }

  function Xn(t, e, n) {
    t[e] = n
  }

  function $n() {
    return In()
  }

  function Zn(t, e, n) {
    t.set(e, n)
  }

  function Gn() {}
  Yn.prototype = In.prototype = {
    constructor: Yn,
    has: function (t) {
      return qn + t in this
    },
    get: function (t) {
      return this[qn + t]
    },
    set: function (t, e) {
      return this[qn + t] = e, this
    },
    remove: function (t) {
      var e = qn + t;
      return e in this && delete this[e]
    },
    clear: function () {
      for (var t in this) t[0] === qn && delete this[t]
    },
    keys: function () {
      var t = [];
      for (var e in this) e[0] === qn && t.push(e.slice(1));
      return t
    },
    values: function () {
      var t = [];
      for (var e in this) e[0] === qn && t.push(this[e]);
      return t
    },
    entries: function () {
      var t = [];
      for (var e in this) e[0] === qn && t.push({
        key: e.slice(1),
        value: this[e]
      });
      return t
    },
    size: function () {
      var t = 0;
      for (var e in this) e[0] === qn && ++t;
      return t
    },
    empty: function () {
      for (var t in this)
        if (t[0] === qn) return !1;
      return !0
    },
    each: function (t) {
      for (var e in this) e[0] === qn && t(this[e], e.slice(1), this)
    }
  };
  var Qn = In.prototype;

  function Jn(t, e) {
    var n = new Gn;
    if (t instanceof Gn) t.each(function (t) {
      n.add(t)
    });
    else if (t) {
      var r = -1,
        i = t.length;
      if (null == e)
        for (; ++r < i;) n.add(t[r]);
      else
        for (; ++r < i;) n.add(e(t[r], r, t))
    }
    return n
  }

  function Kn(t) {
    var e = 0,
      n = t.children,
      r = n && n.length;
    if (r)
      for (; 0 <= --r;) e += n[r].value;
    else e = 1;
    t.value = e
  }

  function tr(t, e) {
    var n, r, i, a, o, l = new ir(t),
      s = +t.value && (l.value = t.value),
      u = [l];
    for (null == e && (e = er); n = u.pop();)
      if (s && (n.value = +n.data.value), (i = e(n.data)) && (o = i.length))
        for (n.children = new Array(o), a = o - 1; 0 <= a; --a) u.push(r = n.children[a] = new ir(i[a])), r.parent = n, r.depth = n.depth + 1;
    return l.eachBefore(rr)
  }

  function er(t) {
    return t.children
  }

  function nr(t) {
    t.data = t.data.data
  }

  function rr(t) {
    for (var e = 0; t.height = e, (t = t.parent) && t.height < ++e;);
  }

  function ir(t) {
    this.data = t, this.depth = this.height = 0, this.parent = null
  }
  Gn.prototype = Jn.prototype = {
    constructor: Gn,
    has: Qn.has,
    add: function (t) {
      return this[qn + (t += "")] = t, this
    },
    remove: Qn.remove,
    clear: Qn.clear,
    values: Qn.keys,
    size: Qn.size,
    empty: Qn.empty,
    each: Qn.each
  }, ir.prototype = tr.prototype = {
    constructor: ir,
    count: function () {
      return this.eachAfter(Kn)
    },
    each: function (t) {
      var e, n, r, i, a = this,
        o = [a];
      do {
        for (e = o.reverse(), o = []; a = e.pop();)
          if (t(a), n = a.children)
            for (r = 0, i = n.length; r < i; ++r) o.push(n[r])
      } while (o.length);
      return this
    },
    eachAfter: function (t) {
      for (var e, n, r, i = this, a = [i], o = []; i = a.pop();)
        if (o.push(i), e = i.children)
          for (n = 0, r = e.length; n < r; ++n) a.push(e[n]);
      for (; i = o.pop();) t(i);
      return this
    },
    eachBefore: function (t) {
      for (var e, n, r = this, i = [r]; r = i.pop();)
        if (t(r), e = r.children)
          for (n = e.length - 1; 0 <= n; --n) i.push(e[n]);
      return this
    },
    sum: function (i) {
      return this.eachAfter(function (t) {
        for (var e = +i(t.data) || 0, n = t.children, r = n && n.length; 0 <= --r;) e += n[r].value;
        t.value = e
      })
    },
    sort: function (e) {
      return this.eachBefore(function (t) {
        t.children && t.children.sort(e)
      })
    },
    path: function (t) {
      for (var e = this, n = function (t, e) {
          if (t === e) return t;
          var n = t.ancestors(),
            r = e.ancestors(),
            i = null;
          t = n.pop(), e = r.pop();
          for (; t === e;) i = t, t = n.pop(), e = r.pop();
          return i
        }(e, t), r = [e]; e !== n;) e = e.parent, r.push(e);
      for (var i = r.length; t !== n;) r.splice(i, 0, t), t = t.parent;
      return r
    },
    ancestors: function () {
      for (var t = this, e = [t]; t = t.parent;) e.push(t);
      return e
    },
    descendants: function () {
      var e = [];
      return this.each(function (t) {
        e.push(t)
      }), e
    },
    leaves: function () {
      var e = [];
      return this.eachBefore(function (t) {
        t.children || e.push(t)
      }), e
    },
    links: function () {
      var e = this,
        n = [];
      return e.each(function (t) {
        t !== e && n.push({
          source: t.parent,
          target: t
        })
      }), n
    },
    copy: function () {
      return tr(this).eachBefore(nr)
    }
  };
  var ar = Array.prototype.slice;

  function or(t) {
    for (var e, n, r = 0, i = (t = function (t) {
        for (var e, n, r = t.length; r;) n = Math.random() * r-- | 0, e = t[r], t[r] = t[n], t[n] = e;
        return t
      }(ar.call(t))).length, a = []; r < i;) e = t[r], n && ur(n, e) ? ++r : (n = dr(a = lr(a, e)), r = 0);
    return n
  }

  function lr(t, e) {
    var n, r;
    if (cr(e, t)) return [e];
    for (n = 0; n < t.length; ++n)
      if (sr(e, t[n]) && cr(fr(t[n], e), t)) return [t[n], e];
    for (n = 0; n < t.length - 1; ++n)
      for (r = n + 1; r < t.length; ++r)
        if (sr(fr(t[n], t[r]), e) && sr(fr(t[n], e), t[r]) && sr(fr(t[r], e), t[n]) && cr(hr(t[n], t[r], e), t)) return [t[n], t[r], e];
    throw new Error
  }

  function sr(t, e) {
    var n = t.r - e.r,
      r = e.x - t.x,
      i = e.y - t.y;
    return n < 0 || n * n < r * r + i * i
  }

  function ur(t, e) {
    var n = t.r - e.r + 1e-6,
      r = e.x - t.x,
      i = e.y - t.y;
    return 0 < n && r * r + i * i < n * n
  }

  function cr(t, e) {
    for (var n = 0; n < e.length; ++n)
      if (!ur(t, e[n])) return !1;
    return !0
  }

  function dr(t) {
    switch (t.length) {
      case 1:
        return function (t) {
          return {
            x: t.x,
            y: t.y,
            r: t.r
          }
        }(t[0]);
      case 2:
        return fr(t[0], t[1]);
      case 3:
        return hr(t[0], t[1], t[2])
    }
  }

  function fr(t, e) {
    var n = t.x,
      r = t.y,
      i = t.r,
      a = e.x,
      o = e.y,
      l = e.r,
      s = a - n,
      u = o - r,
      c = l - i,
      d = Math.sqrt(s * s + u * u);
    return {
      x: (n + a + s / d * c) / 2,
      y: (r + o + u / d * c) / 2,
      r: (d + i + l) / 2
    }
  }

  function hr(t, e, n) {
    var r = t.x,
      i = t.y,
      a = t.r,
      o = e.x,
      l = e.y,
      s = e.r,
      u = n.x,
      c = n.y,
      d = n.r,
      f = r - o,
      h = r - u,
      p = i - l,
      y = i - c,
      _ = s - a,
      g = d - a,
      m = r * r + i * i - a * a,
      v = m - o * o - l * l + s * s,
      b = m - u * u - c * c + d * d,
      x = h * p - f * y,
      w = (p * b - y * v) / (2 * x) - r,
      M = (y * _ - p * g) / x,
      k = (h * v - f * b) / (2 * x) - i,
      z = (f * g - h * _) / x,
      T = M * M + z * z - 1,
      A = 2 * (a + w * M + k * z),
      C = w * w + k * k - a * a,
      S = -(T ? (A + Math.sqrt(A * A - 4 * T * C)) / (2 * T) : C / A);
    return {
      x: r + w + M * S,
      y: i + k + z * S,
      r: S
    }
  }

  function pr(t, e, n) {
    var r, i, a, o, l = t.x - e.x,
      s = t.y - e.y,
      u = l * l + s * s;
    u ? (i = e.r + n.r, i *= i, o = t.r + n.r, (o *= o) < i ? (r = (u + o - i) / (2 * u), a = Math.sqrt(Math.max(0, o / u - r * r)), n.x = t.x - r * l - a * s, n.y = t.y - r * s + a * l) : (r = (u + i - o) / (2 * u), a = Math.sqrt(Math.max(0, i / u - r * r)), n.x = e.x + r * l - a * s, n.y = e.y + r * s + a * l)) : (n.x = e.x + n.r, n.y = e.y)
  }

  function yr(t, e) {
    var n = t.r + e.r - 1e-6,
      r = e.x - t.x,
      i = e.y - t.y;
    return 0 < n && r * r + i * i < n * n
  }

  function _r(t) {
    var e = t._,
      n = t.next._,
      r = e.r + n.r,
      i = (e.x * n.r + n.x * e.r) / r,
      a = (e.y * n.r + n.y * e.r) / r;
    return i * i + a * a
  }

  function gr(t) {
    this._ = t, this.next = null, this.previous = null
  }

  function mr(t) {
    if ("function" != typeof t) throw new Error;
    return t
  }

  function vr() {
    return 0
  }

  function br(t) {
    return function () {
      return t
    }
  }

  function xr(t) {
    return Math.sqrt(t.value)
  }

  function wr(e) {
    return function (t) {
      t.children || (t.r = Math.max(0, +e(t) || 0))
    }
  }

  function Mr(o, l) {
    return function (t) {
      if (e = t.children) {
        var e, n, r, i = e.length,
          a = o(t) * l || 0;
        if (a)
          for (n = 0; n < i; ++n) e[n].r += a;
        if (r = function (t) {
            if (!(i = t.length)) return 0;
            var e, n, r, i, a, o, l, s, u, c, d;
            if ((e = t[0]).x = 0, e.y = 0, !(1 < i)) return e.r;
            if (n = t[1], e.x = -n.r, n.x = e.r, n.y = 0, !(2 < i)) return e.r + n.r;
            pr(n, e, r = t[2]), e = new gr(e), n = new gr(n), r = new gr(r), e.next = r.previous = n, n.next = e.previous = r, r.next = n.previous = e;
            t: for (l = 3; l < i; ++l) {
              pr(e._, n._, r = t[l]), r = new gr(r), s = n.next, u = e.previous, c = n._.r, d = e._.r;
              do {
                if (c <= d) {
                  if (yr(s._, r._)) {
                    n = s, (e.next = n).previous = e, --l;
                    continue t
                  }
                  c += s._.r, s = s.next
                } else {
                  if (yr(u._, r._)) {
                    ((e = u).next = n).previous = e, --l;
                    continue t
                  }
                  d += u._.r, u = u.previous
                }
              } while (s !== u.next);
              for (r.previous = e, r.next = n, e.next = n.previous = n = r, a = _r(e);
                (r = r.next) !== n;)(o = _r(r)) < a && (e = r, a = o);
              n = e.next
            }
            for (e = [n._], r = n;
              (r = r.next) !== n;) e.push(r._);
            for (r = or(e), l = 0; l < i; ++l)(e = t[l]).x -= r.x, e.y -= r.y;
            return r.r
          }(e), a)
          for (n = 0; n < i; ++n) e[n].r -= a;
        t.r = r + a
      }
    }
  }

  function kr(n) {
    return function (t) {
      var e = t.parent;
      t.r *= n, e && (t.x = e.x + n * t.x, t.y = e.y + n * t.y)
    }
  }

  function zr(t) {
    t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
  }

  function Tr(t, e, n, r, i) {
    for (var a, o = t.children, l = -1, s = o.length, u = t.value && (r - e) / t.value; ++l < s;)(a = o[l]).y0 = n, a.y1 = i, a.x0 = e, a.x1 = e += a.value * u
  }

  function Ar(t, e) {
    return t.parent === e.parent ? 1 : 2
  }

  function Cr(t) {
    var e = t.children;
    return e ? e[0] : t.t
  }

  function Sr(t) {
    var e = t.children;
    return e ? e[e.length - 1] : t.t
  }

  function Er(t, e) {
    this._ = t, this.parent = null, this.children = null, this.A = null, (this.a = this).z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = e
  }

  function Lr(t, e, n, r, i) {
    for (var a, o = t.children, l = -1, s = o.length, u = t.value && (i - n) / t.value; ++l < s;)(a = o[l]).x0 = e, a.x1 = r, a.y0 = n, a.y1 = n += a.value * u
  }
  Er.prototype = Object.create(ir.prototype);
  var Nr = (1 + Math.sqrt(5)) / 2;

  function Pr(t, e, n, r, i, a) {
    for (var o, l, s, u, c, d, f, h, p, y, _, g = [], m = e.children, v = 0, b = 0, x = m.length, w = e.value; v < x;) {
      for (s = i - n, u = a - r; !(c = m[b++].value) && b < x;);
      for (d = f = c, _ = c * c * (y = Math.max(u / s, s / u) / (w * t)), p = Math.max(f / _, _ / d); b < x; ++b) {
        if (c += l = m[b].value, l < d && (d = l), f < l && (f = l), _ = c * c * y, p < (h = Math.max(f / _, _ / d))) {
          c -= l;
          break
        }
        p = h
      }
      g.push(o = {
        value: c,
        dice: s < u,
        children: m.slice(v, b)
      }), o.dice ? Tr(o, n, r, i, w ? r += u * c / w : a) : Lr(o, n, r, w ? n += s * c / w : i, a), w -= c, v = b
    }
    return g
  }
  var Fr = function e(a) {
    function t(t, e, n, r, i) {
      Pr(a, t, e, n, r, i)
    }
    return t.ratio = function (t) {
      return e(1 < (t = +t) ? t : 1)
    }, t
  }(Nr);
  var Or = function e(h) {
      function t(t, e, n, r, i) {
        if ((a = t._squarify) && a.ratio === h)
          for (var a, o, l, s, u, c = -1, d = a.length, f = t.value; ++c < d;) {
            for (l = (o = a[c]).children, s = o.value = 0, u = l.length; s < u; ++s) o.value += l[s].value;
            o.dice ? Tr(o, e, n, r, n += (i - n) * o.value / f) : Lr(o, e, n, e += (r - e) * o.value / f, i), f -= o.value
          } else t._squarify = a = Pr(h, t, e, n, r, i), a.ratio = h
      }
      return t.ratio = function (t) {
        return e(1 < (t = +t) ? t : 1)
      }, t
    }(Nr),
    Hr = Object.freeze({
      input_decimal_separator: ".",
      output_separators: ",."
    });
  var Ur, Dr, jr = function (t) {
      for (var e in Hr) void 0 === t[e] && (t[e] = Hr[e]);
      return {
        getParser: function () {
          return function (e) {
            var n = new RegExp("[^-0-9eE" + e + "]", "g");
            return function (t) {
              return "number" == typeof t ? t : "" === t || void 0 === t ? NaN : parseFloat(t.replace(n, "").replace(e, "."))
            }
          }(t.input_decimal_separator)
        },
        getFormatterFunction: function () {
          return function (t) {
            var e = 1 < t.length,
              n = e ? t.charAt(1) : t.charAt(0),
              r = e ? t.charAt(0) : "",
              i = pn(function (t, e) {
                return {
                  decimal: t,
                  thousands: e,
                  grouping: [3],
                  currency: ["", ""]
                }
              }(n, r)).format;
            return i.decimal = n, i.thousands = r, i
          }(t.output_separators)
        }
      }
    }(m.localization),
    Rr = {
      Count: function (t) {
        return t.reduce(function (t, e) {
          return t + 1
        }, 0)
      },
      Sum: function (t) {
        return t.reduce(function (t, e) {
          return t + (isNaN(e.value) ? 0 : e.value)
        }, 0)
      }
    };

  function Br(t, e, n) {
    Ur = jr.getParser();
    var r = function (t) {
      var r = l.data.column_names.nest_columns,
        i = l.data.column_names.size_columns.indexOf(m.size_by);
      return t.map(function (t) {
        for (var e = {}, n = 0; n < r.length; n++) e[r[n]] = t.nest_columns[n];
        return e.value = -1 < i ? Ur(t.size_columns[i]) : 0, e
      })
    }(t);
    n && (r = function (t) {
      var e = t.filter(function (t) {
        return 0 <= t.value
      });
      return e.length, t.length, e
    }(r));
    var i = Vn();
    return l.data.column_names.nest_columns.forEach(function (e) {
      i = i.key(function (t) {
        return t[e]
      })
    }), i = (i = i.rollup(Rr[e])).entries(r)
  }

  function qr(t) {
    t.children && (t.children.sort(function (t, e) {
      return t.value > e.value ? -1 : t.value < e.value ? 1 : 0
    }), t.children.forEach(qr))
  }

  function Yr(t) {
    t.children && (t.children.sort(function (t, e) {
      return t.data.key > e.data.key ? 1 : t.data.key < e.data.key ? -1 : 0
    }), t.children.forEach(Yr))
  }

  function Ir(t) {
    var e = tr({
      values: t
    }, function (t) {
      return t.values
    });
    return e.sum(function (t) {
        return t.value
      }),
      function e(t) {
        var n = t.ancestors().slice(0, -1).map(function (t) {
          return t.data.key
        }).reverse();
        t.id = 0 === t.depth ? "root" : t.depth + "-" + n.join("-"), t.children && t.children.forEach(function (t) {
          e(t)
        })
      }(e), "value" === m.sort_by ? qr(e) : Yr(e),
      function e(t) {
        void 0 !== t && t.forEach(function (t) {
          t.level1_key = t.ancestors()[t.depth - 1].data.key, e(t.children)
        })
      }(e.children), e
  }

  function Vr(t, e) {
    for (var n = t.descendants(), r = 0; r < n.length; r++) {
      var i = n[r];
      if (i.id === e) return i
    }
    return null
  }

  function Wr(t) {
    if (!t) return null;
    var e = t.ancestors().slice(0, -1);
    return (e = e.map(function (t) {
      return t.data.key
    })).reverse(), e
  }

  function Xr(t, e) {
    for (var n = t.ancestors(), r = !1, i = 0; i < n.length; i++) n[i].id === e.id && (r = !0);
    return r
  }

  function $r(t, e) {
    switch (t) {
      case "updatePopup":
        m.popup_info = {
          visible: !0,
          frozen: !1,
          id: e.id
        }, li();
        break;
      case "hidePopup":
        m.popup_info.visible = !1, m.popup_info.id = null, li();
        break;
      case "freezePopup":
        m.popup_info.frozen = e, li();
        break;
      case "updateHighlightedNode":
        m.hovered_node = e, Vu(), ic(), ed(), Oi.select(".bars").selectAll("g").select("rect").style("opacity", function (t) {
          var e = t.id === m.hovered_node;
          return t.display.visible ? e ? .7 : 1 : 0
        }), Dr || Hi.select(".nodes").selectAll(".node").style("opacity", function (t) {
          return t.data && t.data.id === m.hovered_node ? .7 : 1
        });
        break;
      case "zoomToNode":
        Dr = !0, e.children && (m.zoomed_node_id = e.id), m.popup_info.frozen = !1, m.popup_info.visible = !1, m.hovered_node = !1, li(), Bd(), setTimeout(function () {
          Dr = !1
        }, 1e3 * m.animation_duration + 100);
        break;
      case "zoomOut":
        Dr = !0;
        var n = Vr(u.root, m.zoomed_node_id),
          r = n ? n.ancestors() : null;
        m.zoomed_node_id = r && 2 !== r.length ? r[1].id : null, m.popup_info.frozen = !1, m.popup_info.visible = !1, m.hovered_node = !1, Bd(), li(), setTimeout(function () {
          Dr = !1
        }, 1e3 * m.animation_duration + 100)
    }
  }
  var Zr = {
      x: 10,
      y: 10
    },
    Gr = {
      x: 10,
      y: 10
    },
    Qr = {
      x: 10,
      y: 10
    },
    Jr = 40,
    Kr = Object.freeze({
      transform_labels: !1,
      transform: "multiply",
      multiply_divide_constant: 1,
      exponentiate_constant: 0,
      multiplier: 1,
      prefix: "",
      n_dec: 2,
      suffix: "",
      strip_zeros: !0,
      strip_separator: !0
    });

  function ti(i, t) {
    var a = 0 <= i.n_dec ? Math.floor(i.n_dec) : Math.ceil(i.n_dec),
      o = t(",." + (0 < a ? a : "0") + "f"),
      e = t.decimal,
      l = t.thousands,
      s = i.strip_zeros && 0 < a ? new RegExp("\\" + e + "?0+$") : null,
      u = i.strip_separator && l,
      c = function (t) {
        var e = 1;
        return t.transform_labels && (e = "multiply" === t.transform ? t.multiply_divide_constant : "divide" === t.transform ? 1 / t.multiply_divide_constant : Math.pow(10, t.exponentiate_constant)),
          function (t) {
            return t * e
          }
      }(i);
    return a < 0 ? function (t) {
      var e = function (t, e) {
          if (!e) return Math.round(t);
          e = 0 < e ? Math.floor(e) : Math.ceil(e);
          var n = Math.pow(10, e);
          return Math.round(t * n) / n
        }(c(t), a),
        n = u && 1e3 <= e && e < 1e4,
        r = o(e);
      return n && (r = r.replace(l, "")), i.prefix + r + i.suffix
    } : function (t) {
      var e = c(t),
        n = u && l && 1e3 <= e && e < 1e4,
        r = o(e);
      return s && (r = r.replace(s, "")), n && (r = r.replace(l, "")), i.prefix + r + i.suffix
    }
  }
  var ei, ni, ri, ii, ai, oi = function (e) {
    for (var t in Kr) void 0 === e[t] && (e[t] = Kr[t]);
    return function (t) {
      return ti(e, t)
    }
  }(m.number_formatter);

  function li() {
    if (ni = oi(jr.getFormatterFunction()), !1 !== m.popup_info.visible && null !== m.popup_info.id) {
      var t = Vr(u.root, m.popup_info.id),
        e = function (t) {
          if (t) {
            if (null === m.popup_info.id) return null;
            var e = void 0,
              n = void 0,
              r = Ei.node().getBoundingClientRect().left,
              i = Ei.node().getBoundingClientRect().top;
            switch (m.hierarchy_layout) {
              case "treemap":
                e = .5 * (t.display.x1 + t.display.x0), n = t.display.leaf ? .5 * (t.display.y1 + t.display.y0) - 10 : t.display.y0 + 10;
                break;
              case "circlePacking":
                e = t.display.x + Zr.x, n = t.display.leaf ? t.display.y + Zr.y - 10 : t.display.y - t.display.r + Zr.y + 2;
                break;
              case "sunburst":
                var a = .5 * (t.display.a0 + t.display.a1),
                  o = a > .5 * Math.PI && a < 1.5 * Math.PI ? .6 : .4,
                  l = o * t.display.r0 + (1 - o) * t.display.r1;
                e = .5 * u.w + l * Math.sin(a), n = .5 * u.h - l * Math.cos(a);
                break;
              case "bar":
                e = t.display.x + .5 * t.display.l + Qr.x + m.bar_axis_label_size, n = t.display.y + .5 * t.display.thickness + Qr.y + Jr - 7;
                break;
              case "radialTree":
                e = t.data.display.popup.x, n = t.data.display.popup.y - 5;
                break;
              default:
                console.log("Missing handler for " + m.hierarchy_layout + " in popup")
            }
            return {
              x: e += r,
              y: n += i
            }
          }
        }(t);
      if (!e) return ei.hide(), m.popup_info.id = null, void(m.popup_info.frozen && $r("freezePopup", !1));
      var n = "<div style='color: " + m.popup.text_color + "; font-size: " + m.popup.font_size + "px'>";
      n += function (t, e) {
        var n = "";
        if (m.popup_show_title) n = m.popup_title;
        else {
          var r = Wr(t);
          if (!r) return "";
          n = r.join(" " + m.popup_separator + " ")
        }
        switch (e) {
          case "Count":
          case "Sum":
          case "Average":
            return '<div class="title">' + n + "</div><div>" + ni(t.value) + "</div>";
          default:
            return ""
        }
      }(t, m.aggregation_type), n += "</div>", ei.point(e.x, e.y).html(n).draw()
    } else ei.hide()
  }
  var si, ui, ci, di, fi, hi, pi, yi, _i, gi = Object.freeze({
    "stack-default": ["header", "controls", "primary", "footer"],
    "stack-2": ["primary", "header", "controls", "footer"],
    "stack-3": ["header", "primary", "controls", "footer"],
    "stack-4": ["controls", "primary", "header", "footer"]
  });

  function mi() {
    si.style.textAlign = Ti.header_align, si.style.margin = 0, si.style.borderTop = "top" == Ti.header_border ? Ti.header_border_width + "px " + Ti.header_border_style + " " + Ti.header_border_color : null, si.style.borderBottom = "bottom" == Ti.header_border ? Ti.header_border_width + "px " + Ti.header_border_style + " " + Ti.header_border_color : null, si.style.paddingBottom = Ti.title || Ti.subtitle ? Ti.text ? ("custom" != Ti.text_size ? Ti.text_size / 2 : Ti.text_size_custom / 2) + "rem" : Ti.subtitle ? ("custom" != Ti.subtitle_size ? Ti.subtitle_size / 2 : Ti.subtitle_size_custom / 2) + "rem" : Ti.title ? ("custom" != Ti.title_size ? Ti.title_size / 2 : Ti.title_size_custom / 2) + "rem" : void 0 : "", ui.innerHTML = Ti.title ? Ti.title : "", ui.style.fontSize = ("custom" != Ti.title_size ? Ti.title_size : Ti.title_size_custom) + "rem", ui.style.lineHeight = Ti.title_line_height, ui.style.fontWeight = Ti.title_weight, ui.style.color = Ti.title_color, ui.style.margin = 0, ui.style.lineHeight = Ti.title_color, ui.style.paddingTop = Ti.title ? ("custom" == Ti.title_space_above ? Ti.title_space_above_custom : Ti.title_space_above) + "rem" : 0, ci.innerHTML = Ti.subtitle ? Ti.subtitle : "", ci.style.fontSize = ("custom" != Ti.subtitle_size ? Ti.subtitle_size : Ti.subtitle_size_custom) + "rem", ci.style.lineHeight = Ti.subtitle_line_height, ci.style.fontWeight = Ti.subtitle_weight, ci.style.color = Ti.subtitle_color, ci.style.margin = 0, ci.style.paddingTop = Ti.subtitle ? ("custom" == Ti.subtitle_space_above ? Ti.subtitle_space_above_custom : Ti.subtitle_space_above) + "rem" : 0, di.innerHTML = Ti.text ? Ti.text : "", di.style.fontSize = ("custom" != Ti.text_size ? Ti.text_size : Ti.text_size_custom) + "rem", di.style.lineHeight = Ti.text_line_height, di.style.fontWeight = Ti.text_weight, di.style.margin = 0, di.style.color = Ti.text_color, di.style.paddingTop = Ti.text ? ("custom" == Ti.text_space_above ? Ti.text_space_above_custom : Ti.text_space_above) + "rem" : 0, fi.style.display = Ti.header_logo_enabled ? "" : "none", fi.style.position = "inside" == Ti.header_logo_align ? "" : "fixed", fi.style.height = Ti.header_logo_height + "rem", fi.style.top = "outside" == Ti.header_logo_align ? 0 : "", fi.style.left = "outside" == Ti.header_logo_align && "left" == Ti.header_logo_position_outside ? 0 : "", fi.style.right = "outside" == Ti.header_logo_align && "right" == Ti.header_logo_position_outside ? 0 : "", fi.style.marginTop = Ti.header_logo_margin_top + "rem", fi.style.marginBottom = Ti.header_logo_margin_bottom + "rem", fi.style.marginLeft = Ti.header_logo_margin_left + "rem", fi.style.marginRight = Ti.header_logo_margin_right + "rem", fi.style.float = "top" == Ti.header_logo_position_inside || "outside" == Ti.header_logo_align ? "" : Ti.header_logo_position_inside, fi.style.width = "auto", fi.src = Ti.header_logo_src
  }

  function vi(t) {
    return "string" == typeof t && null != t.match(/^https?:\/\//i)
  }
  var bi = !1;

  function xi(t) {
    return 0 !== t.indexOf("http://") && 0 !== t.indexOf("https://") ? "http://" + t : t
  }

  function wi() {
    return function () {
      var t = document.createElement("style");
      t.type = "text/css", t.innerHTML = ".flourish-footer { margin: 0; } .flourish-footer p { margin: 0; display: inline; } .flourish-footer p:empty { height: 0; } .flourish-footer a { color: inherit; }", document.head.appendChild(t)
    }(), (hi = document.createElement("footer")).className = "flourish-footer", (pi = document.createElement("div")).className = "flourish-footer-text", (_i = document.createElement("a")).target = "_blank", (yi = document.createElement("img")).className = "flourish-footer-logo", _i.appendChild(yi), hi.appendChild(pi), hi.appendChild(_i), hi
  }

  function Mi() {
    var t = [{
      name: Ti.source_name,
      url: Ti.source_url
    }, {
      name: Ti.multiple_sources ? Ti.source_name_2 : "",
      url: Ti.multiple_sources ? Ti.source_url_2 : ""
    }, {
      name: Ti.multiple_sources ? Ti.source_name_3 : "",
      url: Ti.multiple_sources ? Ti.source_url_3 : ""
    }].filter(function (t) {
      return t.name || t.url
    });
    bi = 0 < t.length || Ti.footer_note || vi(Ti.footer_logo_src) && Ti.footer_logo_enabled, hi.style.display = "flex", hi.style.height = bi ? null : 0, hi.style.width = "100%", hi.style.paddingTop = Ti.source_name || Ti.source_name_2 || Ti.source_name_3 || Ti.source_url || Ti.source_url_2 || Ti.source_url_3 || Ti.footer_note || vi(Ti.footer_logo_src) && Ti.footer_logo_enabled ? aa(Ti.footer_text_size) / 2 + "px" : "", hi.style.borderTop = "top" == Ti.footer_border ? Ti.footer_border_width + "px " + Ti.footer_border_style + " " + Ti.footer_border_color : "", hi.style.borderBottom = "bottom" == Ti.footer_border ? Ti.footer_border_width + "px " + Ti.footer_border_style + " " + Ti.footer_border_color : "", "justify" == Ti.footer_align ? hi.style.justifyContent = "space-between" : "left" == Ti.footer_align ? hi.style.justifyContent = "flex-start" : "right" == Ti.footer_align ? hi.style.justifyContent = "flex-end" : "center" == Ti.footer_align && (hi.style.justifyContent = "center"), hi.style.fontSize = Ti.footer_text_size + "rem", hi.style.color = Ti.footer_text_color;
    var i = document.createElement("span");
    t.forEach(function (t, e) {
      var n = document.createElement("p");
      if (0 < e && (n.innerText = ", "), t.url) {
        var r = document.createElement("a");
        r.innerText = t.name || t.url, r.href = xi(t.url), r.target = "_blank", n.appendChild(r)
      } else n.innerText += t.name || t.url;
      i.innerHTML += n.innerHTML
    }), pi.style.order = "left" == Ti.footer_logo_order ? 2 : "", pi.style.display = "flex", pi.style.alignItems = Ti.footer_align_vertical;
    var e = "<p>";
    e += "" !== i.innerHTML ? Ti.source_label + " " + i.innerHTML : "", e += Ti.footer_note ? ("" !== i.innerHTML ? " • " : "") + Ti.footer_note : "", e += "</p>", pi.innerHTML = e, yi.src = vi(Ti.footer_logo_src) ? Ti.footer_logo_src : "", yi.style.height = Ti.footer_logo_height + "rem", yi.style.marginLeft = "right" == Ti.footer_logo_order ? Ti.footer_logo_margin + "rem" : "", yi.style.marginRight = "left" == Ti.footer_logo_order ? Ti.footer_logo_margin + "rem" : "", yi.style.verticalAlign = Ti.footer_align_vertical, yi.style.display = vi(Ti.footer_logo_src) && Ti.footer_logo_enabled ? "" : "none", _i.href = "" == Ti.footer_logo_link_url ? "" : xi(Ti.footer_logo_link_url), _i.style.cursor = "" == Ti.footer_logo_link_url ? "default" : "pointer"
  }

  function ki() {
    ! function () {
      if (Ti.body_font && Ti.body_font.url !== ii) {
        ii = Ti.body_font.url, ai.setAttribute("href", ii), document.body.style.fontFamily = Ti.body_font.name;
        var i = "";
        ["mobile_small", "mobile_big", "tablet", "desktop", "big_screen"].forEach(function (t, e) {
          var n = "@media(min-width: " + Ti["breakpoint_" + t] + "px) {\n",
            r = "html { font-size:" + Ti["font_size_" + t] + "%; }";
          i += (0 == e ? "" : n) + r + (0 == e ? "" : "\n}") + "\n\n"
        }), ri.innerHTML = i
      }
    }(), mi(), Mi(), document.body.style.backgroundColor = Ti.background_color_enabled ? Ti.background_color : "transparent", document.body.style.backgroundImage = Ti.background_image_enabled ? "url(" + Ti.background_image_src + ")" : "", document.body.style.backgroundSize = Ti.background_image_size, document.body.style.backgroundRepeat = "no-repeat", document.body.style.backgroundPosition = Ti.background_image_position;
    var t = Bi.wrapper.style;
    t.height = "100vh", t.maxWidth = Ti.max_width ? Ti.max_width + "px" : "", t.padding = Ti.margin_top + "rem " + Ti.margin_right + "rem " + Ti.margin_bottom + "rem " + Ti.margin_left + "rem", t.borderTop = Ti.border.enabled ? Ti.border.top.width + "px " + Ti.border.top.style + " " + Ti.border.top.color : "", t.borderRight = Ti.border.enabled ? Ti.border.right.width + "px " + Ti.border.right.style + " " + Ti.border.right.color : "", t.borderBottom = Ti.border.enabled ? Ti.border.bottom.width + "px " + Ti.border.bottom.style + " " + Ti.border.bottom.color : "", t.borderLeft = Ti.border.enabled ? Ti.border.left.width + "px " + Ti.border.left.style + " " + Ti.border.left.color : "";
    var e = Bi.primary.outer.style,
      n = Bi.legend.outer.style,
      r = parseFloat(e.order) > parseFloat(n.order) ? "above" : "below";
    gi[Ti.layout_order].forEach(function (t, e) {
      Bi[t].outer.style.order = 10 * e
    }), e.flex = "1 1 auto", e.height = null, ra(r), n.textAlign = Ti.header_align, Bi.controls.outer.style.textAlign = Ti.header_align, Bi.primary.inner.style.height = "100%";
    var i = ("custom" == Ti.space_between_sections ? Ti.space_between_sections_custom : Ti.space_between_sections) / 2 + "rem";
    Ri.map(function (t) {
      var e = Bi[t],
        n = e.outer.style;
      return {
        name: t,
        height: Yi(e.inner),
        order: parseFloat(n.order),
        style: n
      }
    }).sort(function (t, e) {
      return t.order - e.order
    }).filter(function (t) {
      if (t.height) return !0;
      t.style.paddingBottom = "", t.style.paddingTop = ""
    }).forEach(function (t, e, n) {
      t.style.paddingTop = e ? i : "", t.style.paddingBottom = e < n.length - 1 ? i : ""
    })
  }
  var zi = Object.freeze({
    body_font: {
      name: "Source Sans Pro",
      url: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
    },
    border: {
      enabled: !1,
      top: {
        width: 1,
        color: "#dddddd",
        style: "solid"
      },
      right: {
        width: 1,
        color: "#dddddd",
        style: "solid"
      },
      bottom: {
        width: 1,
        color: "#dddddd",
        style: "solid"
      },
      left: {
        width: 1,
        color: "#dddddd",
        style: "solid"
      }
    },
    layout_order: "stack-default",
    margin_top: .75,
    margin_right: .75,
    margin_bottom: .75,
    margin_left: .75,
    space_between_sections: 1,
    space_between_sections_custom: 1,
    background_color_enabled: !0,
    background_color: "#262624",
    background_image_enabled: !1,
    background_image_src: "",
    background_image_size: "cover",
    background_image_position: "center center",
    max_width: null,
    breakpoint_mobile_small: 0,
    breakpoint_mobile_big: 380,
    breakpoint_tablet: 580,
    breakpoint_desktop: 1080,
    breakpoint_big_screen: 1280,
    font_size_mobile_small: 62.5,
    font_size_mobile_big: 75,
    font_size_tablet: 87.5,
    font_size_desktop: 100,
    font_size_big_screen: 120,
    header_align: "left",
    header_border: "none",
    header_border_width: 1,
    header_border_color: "#dddddd",
    header_border_style: "solid",
    header_logo_enabled: !1,
    header_logo_align: "inside",
    header_logo_src: "",
    header_logo_height: 3,
    header_logo_position_inside: "left",
    header_logo_position_outside: "left",
    header_logo_margin_top: .25,
    header_logo_margin_right: .5,
    header_logo_margin_bottom: 0,
    header_logo_margin_left: 0,
    title: "",
    title_size: 1.6,
    title_size_custom: 1.6,
    title_line_height: 1.2,
    title_color: "#333333",
    title_weight: "bold",
    title_space_above: 0,
    title_space_above_custom: 1.5,
    subtitle: "",
    subtitle_size: 1.6,
    subtitle_size_custom: 1.6,
    subtitle_line_height: 1.2,
    subtitle_color: "#666666",
    subtitle_weight: "normal",
    subtitle_space_above: 0,
    subtitle_space_above_custom: 1.5,
    text: "",
    text_size: 1.2,
    text_size_custom: 1.2,
    text_line_height: 1.2,
    text_color: "#666666",
    text_weight: "normal",
    text_space_above: .5,
    text_space_above_custom: 1.5,
    source_label: "Source: ",
    source_name: "",
    source_url: "",
    source_name_2: "",
    source_url_2: "",
    source_name_3: "",
    source_url_3: "",
    footer_note: "",
    footer_text_size: 1,
    footer_text_color: "#aaaaaa",
    footer_align: "justify",
    footer_align_vertical: "center",
    footer_border: "none",
    footer_border_width: 1,
    footer_border_color: "#dddddd",
    footer_border_style: "solid",
    footer_logo_enabled: !1,
    footer_logo_src: "",
    footer_logo_link_url: "",
    footer_logo_height: 1.5,
    footer_logo_margin: .25,
    footer_logo_order: "right"
  });
  var Ti, Ai, Ci, Si, Ei, Li, Ni, Pi, Fi, Oi, Hi, Ui, Di, ji = "Your web browser does not support the features used by this content. Consider updating to a modern browser.",
    Ri = ["header", "controls", "legend", "primary", "footer"],
    Bi = {};

  function qi(t) {
    return t.getBoundingClientRect().width
  }

  function Yi(t) {
    return t.getBoundingClientRect().height
  }

  function Ii() {
    return Bi.wrapper
  }

  function Vi(t) {
    return -1 !== Ri.indexOf(t) ? Bi[t].inner : null
  }

  function Wi(t) {
    return Bi[t] || void 0 === t ? qi("wrapper" == t || void 0 === t ? Bi.wrapper : Bi[t].outer) : null
  }

  function Xi(t) {
    return Bi[t] || void 0 === t ? "wrapper" == t || void 0 === t ? qi(Bi.wrapper) - ta("horizontal") - ea("horizontal") : qi(Bi[t].inner) : null
  }

  function $i(t) {
    return Bi[t] || void 0 === t ? Yi("wrapper" == t || void 0 === t ? Bi.wrapper : Bi[t].outer) : null
  }

  function Zi(t) {
    return Bi[t] || void 0 === t ? "wrapper" == t || void 0 === t ? Yi(Bi.wrapper) - ta("vertical") - ea("vertical") : Yi(Bi[t].inner) : null
  }

  function Gi() {
    return Yi(Bi.primary.outer) - Ji(Bi.primary.outer)
  }

  function Qi() {
    return qi(Bi.primary.inner)
  }

  function Ji(t) {
    return (parseFloat(getComputedStyle(t).paddingTop) || 0) + (parseFloat(getComputedStyle(t).paddingBottom) || 0)
  }

  function Ki() {
    return function () {
      if (Flourish.fixed_height) return window.innerHeight;
      var t = window.innerWidth;
      return 999 < t ? 650 : 599 < t ? 575 : 400
    }() - ta("vertical") - ea("vertical") - ["header", "controls", "legend", "footer"].reduce(function (t, e) {
      return t + $i(e)
    }, 0) - Ji(Bi.primary.outer)
  }

  function ta(t) {
    var e;
    return "left" == t ? e = Ti.margin_left : "right" == t ? e = Ti.margin_right : "top" == t ? e = Ti.margin_top : "bottom" == t ? e = Ti.margin_bottom : "horizontal" == t ? e = Ti.margin_left + Ti.margin_right : "vertical" == t && (e = Ti.margin_top + Ti.margin_bottom), aa(e)
  }

  function ea(t) {
    return Ti.border.enabled ? "vertical" == t ? Ti.border.top.width + Ti.border.bottom.width : "horizontal" == t ? Ti.border.left.width + Ti.border.right.width : null : 0
  }

  function na(t) {
    if (!Flourish.fixed_height && void 0 !== Flourish.fixed_height) {
      var e = null === t,
        n = Bi.primary,
        r = e ? Ki() : t;
      r + Ji(Bi.primary.outer) !== parseFloat(n.outer.style.height) && (Bi.wrapper.style.height = "", n.outer.style.flex = "", n.inner.style.height = r + "px", Flourish.setHeight(e ? null : $i()))
    }
  }

  function ra(t) {
    var e = parseFloat(Bi.primary.outer.style.order);
    Bi.legend.outer.style.order = e + 1 * ("below" === t.trim().toLowerCase() ? 1 : -1)
  }

  function ia(t) {
    var e = Ai.querySelector(".fl-layout-overlay-message");
    if (t) {
      Ai.style.display = "block";
      var n = "string" == typeof t ? t : ji;
      e.innerHTML = n
    } else e.textContent = "", Ai.style.display = "none"
  }

  function aa(t) {
    return t * parseFloat(getComputedStyle(document.documentElement).fontSize)
  }

  function oa() {
    return Ai
  }
  var la, sa, ua, ca, da, fa, ha, pa, ya = function (t) {
    for (var e in Ti = t, zi) void 0 === Ti[e] && (Ti[e] = zi[e]);
    return (ri = document.createElement("style")).id = "flourish-page-styles", ri.type = "text/css", document.head.appendChild(ri), (ai = document.createElement("link")).setAttribute("rel", "stylesheet"), document.body.appendChild(ai), Bi.wrapper = function () {
        var t = document.querySelector("#fl-layout-wrapper") || document.createElement("main");
        t.id = "fl-layout-wrapper";
        var e = t.style;
        return e.display = "flex", e.flexDirection = "column", e.boxSizing = "border-box", e.marginLeft = "auto", e.marginRight = "auto", t
      }(), Ri.forEach(function (t, e) {
        Bi[t] = function (t, e) {
          var n = "fl-layout-" + t,
            r = document.createElement("section");
          r.className = "fl-layout-container", r.id = n + "-container", r.style.width = "100%", r.style.position = "relative", r.style.order = e;
          var i = document.createElement("div");
          return i.className = "fl-layout-inner", i.id = n, i.style.width = "100%", i.style.overflow = "hidden", i.style.position = "relative", r.appendChild(i), Bi.wrapper.appendChild(r), {
            outer: r,
            inner: i
          }
        }(t, e)
      }), Vi("header").appendChild(function () {
        (si = document.createElement("header")).className = "flourish-header";
        var t = document.createElement("hgroup");
        return ui = document.createElement("h1"), ci = document.createElement("h2"), di = document.createElement("p"), fi = document.createElement("img"), si.appendChild(fi), si.appendChild(t), t.appendChild(ui), t.appendChild(ci), si.appendChild(di), si
      }()), Vi("footer").appendChild(wi()), Bi.primary.outer.style.overflow = "hidden", Bi.controls.inner.style.overflow = "", document.body.appendChild(Bi.wrapper),
      function () {
        var t = Bi.primary.outer;
        t.style.position = "relative", (Ai = document.createElement("div")).id = "fl-layout-overlay";
        var e = Ai.style;
        e.position = "absolute", e.display = "none", e.width = "100%", e.height = "100%", e.top = 0, e.left = 0, e.backgroundColor = "rgb(200,200,200)", e.zIndex = 999999, e.pointerEvents = "none";
        var n = document.createElement("p");
        n.className = "fl-layout-overlay-message", (e = n.style).color = "#333333", e.fontSize = "1.5rem", e.paddingLeft = "15%", e.paddingRight = "15%", e.width = "100%", e.boxSizing = "border-box", e.position = "absolute", e.top = "50%", e.transform = "translate(0, -50%)", e.margin = "0", e.textAlign = "center", Ai.appendChild(n), t.appendChild(Ai)
      }(), ki(), {
        update: ki,
        getWrapper: Ii,
        getSection: Vi,
        getOuterWidth: Wi,
        getInnerWidth: Xi,
        getOuterHeight: $i,
        getInnerHeight: Zi,
        getPrimaryHeight: Gi,
        getPrimaryWidth: Qi,
        getDefaultPrimaryHeight: Ki,
        setHeight: na,
        setLegendPosition: ra,
        showOverlay: ia,
        remToPx: aa,
        getOverlay: oa
      }
  }(m.layout);

  function _a() {
    if (ha = l.data.column_names.hasOwnProperty("filter"), Di.select(".control-group.filter").style("display", ha ? "inline-block" : "none"), da && !ha && (da.remove(), da = null, m.filter = null), ha) {
      var t, e = function (t) {
        for (var e = [], n = {}, r = 0; r < t.length; r++) n.hasOwnProperty(t[r]) || (n[t[r]] = !0, e.push(t[r]));
        return e
      }(l.data.map(function (t) {
        return t.filter
      }));
      t = m.filter_include_all && "slider" !== m.filter_type ? [m.filter_all_label].concat(e) : e, da = da || zn("#filter").on("change", function (t) {
        m.filter = t, Rd()
      }), -1 === t.indexOf(m.filter) && (m.filter = t[0]), da.options(t).value(m.filter).type(m.filter_type || "dropdown").update()
    }
  }

  function ga() {
    if (pa = 1 < l.data.column_names.size_columns.length, Di.select(".control-group.size-by").style("display", pa ? "inline-block" : "none"), function () {
        var t = l.data.column_names.size_columns.map(function (t) {
          return t
        });
        if (0 === t.length) return m.size_by = null; - 1 === t.indexOf(m.size_by) && (m.size_by = t[0])
      }(), fa && !pa && (fa.remove(), fa = null), pa) {
      var t = l.data.column_names.size_columns.map(function (t) {
        return t
      });
      (fa = fa || zn("#size-by-control").on("change", function (t) {
        m.size_by = t, Rd()
      })).options(t).value(m.size_by).type("dropdown").update()
    }
  }
  la = document.body, sa = m.popup, ei = new Bn(la, sa, ua, ca), I(".flourish-popup").on("click", function () {
    $r("freezePopup", !m.popup.frozen)
  });
  var ma = (1 + Math.sqrt(5)) / 2;
  var va = Object.freeze({
    palette: ["#1D6996", "#EDAD08", "#73AF48", "#94346E", "#38A6A5", "#E17C05", "#5F4690", "#0F8554", "#6F4070", "#CC503E", "#994E95", "#666666"],
    extend: !0,
    advanced: !1,
    hue_rotation_angle: 222.49,
    custom_palette: ""
  });
  var ba = "object" == ("undefined" == typeof global ? "undefined" : Ce(global)) && global && global.Object === Object && global,
    xa = "object" == ("undefined" == typeof self ? "undefined" : Ce(self)) && self && self.Object === Object && self,
    wa = ba || xa || Function("return this")(),
    Ma = wa.Symbol,
    ka = Object.prototype,
    za = ka.hasOwnProperty,
    Ta = ka.toString,
    Aa = Ma ? Ma.toStringTag : void 0;
  var Ca = Object.prototype.toString;
  var Sa = "[object Null]",
    Ea = "[object Undefined]",
    La = Ma ? Ma.toStringTag : void 0;

  function Na(t) {
    return null == t ? void 0 === t ? Ea : Sa : La && La in Object(t) ? function (t) {
      var e = za.call(t, Aa),
        n = t[Aa];
      try {
        t[Aa] = void 0
      } catch (t) {}
      var r = Ta.call(t);
      return e ? t[Aa] = n : delete t[Aa], r
    }(t) : function (t) {
      return Ca.call(t)
    }(t)
  }

  function Pa(t) {
    var e = void 0 === t ? "undefined" : Ce(t);
    return null != t && ("object" == e || "function" == e)
  }
  var Fa = "[object AsyncFunction]",
    Oa = "[object Function]",
    Ha = "[object GeneratorFunction]",
    Ua = "[object Proxy]";
  var Da, ja = wa["__core-js_shared__"],
    Ra = (Da = /[^.]+$/.exec(ja && ja.keys && ja.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Da : "";
  var Ba = Function.prototype.toString;
  var qa = /^\[object .+?Constructor\]$/,
    Ya = Function.prototype,
    Ia = Object.prototype,
    Va = Ya.toString,
    Wa = Ia.hasOwnProperty,
    Xa = RegExp("^" + Va.call(Wa).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

  function $a(t) {
    return !(!Pa(t) || function (t) {
      return !!Ra && Ra in t
    }(t)) && (function (t) {
      if (!Pa(t)) return !1;
      var e = Na(t);
      return e == Oa || e == Ha || e == Fa || e == Ua
    }(t) ? Xa : qa).test(function (t) {
      if (null != t) {
        try {
          return Ba.call(t)
        } catch (t) {}
        try {
          return t + ""
        } catch (t) {}
      }
      return ""
    }(t))
  }

  function Za(t, e) {
    var n = function (t, e) {
      return null == t ? void 0 : t[e]
    }(t, e);
    return $a(n) ? n : void 0
  }
  var Ga = Za(Object, "create");
  var Qa = Object.prototype.hasOwnProperty;
  var Ja = Object.prototype.hasOwnProperty;

  function Ka(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }

  function to(t, e) {
    for (var n, r, i = t.length; i--;)
      if ((n = t[i][0]) === (r = e) || n != n && r != r) return i;
    return -1
  }
  Ka.prototype.clear = function () {
    this.__data__ = Ga ? Ga(null) : {}, this.size = 0
  }, Ka.prototype.delete = function (t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
  }, Ka.prototype.get = function (t) {
    var e = this.__data__;
    if (Ga) {
      var n = e[t];
      return "__lodash_hash_undefined__" === n ? void 0 : n
    }
    return Qa.call(e, t) ? e[t] : void 0
  }, Ka.prototype.has = function (t) {
    var e = this.__data__;
    return Ga ? void 0 !== e[t] : Ja.call(e, t)
  }, Ka.prototype.set = function (t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = Ga && void 0 === e ? "__lodash_hash_undefined__" : e, this
  };
  var eo = Array.prototype.splice;

  function no(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }
  no.prototype.clear = function () {
    this.__data__ = [], this.size = 0
  }, no.prototype.delete = function (t) {
    var e = this.__data__,
      n = to(e, t);
    return !(n < 0) && (n == e.length - 1 ? e.pop() : eo.call(e, n, 1), --this.size, !0)
  }, no.prototype.get = function (t) {
    var e = this.__data__,
      n = to(e, t);
    return n < 0 ? void 0 : e[n][1]
  }, no.prototype.has = function (t) {
    return -1 < to(this.__data__, t)
  }, no.prototype.set = function (t, e) {
    var n = this.__data__,
      r = to(n, t);
    return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
  };
  var ro = Za(wa, "Map");

  function io(t, e) {
    var n = t.__data__;
    return function (t) {
      var e = void 0 === t ? "undefined" : Ce(t);
      return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
  }

  function ao(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }
  ao.prototype.clear = function () {
    this.size = 0, this.__data__ = {
      hash: new Ka,
      map: new(ro || no),
      string: new Ka
    }
  }, ao.prototype.delete = function (t) {
    var e = io(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
  }, ao.prototype.get = function (t) {
    return io(this, t).get(t)
  }, ao.prototype.has = function (t) {
    return io(this, t).has(t)
  }, ao.prototype.set = function (t, e) {
    var n = io(this, t),
      r = n.size;
    return n.set(t, e), this.size += n.size == r ? 0 : 1, this
  };

  function oo(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.__data__ = new ao; ++e < n;) this.add(t[e])
  }

  function lo(t) {
    return t != t
  }

  function so(t, e) {
    return !!(null == t ? 0 : t.length) && -1 < function (t, e, n) {
      return e == e ? function (t, e, n) {
        for (var r = n - 1, i = t.length; ++r < i;)
          if (t[r] === e) return r;
        return -1
      }(t, e, n) : function (t, e, n, r) {
        for (var i = t.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;)
          if (e(t[a], a, t)) return a;
        return -1
      }(t, lo, n)
    }(t, e, 0)
  }

  function uo(t, e, n) {
    for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
      if (n(e, t[r])) return !0;
    return !1
  }

  function co(t, e) {
    return t.has(e)
  }
  oo.prototype.add = oo.prototype.push = function (t) {
    return this.__data__.set(t, "__lodash_hash_undefined__"), this
  }, oo.prototype.has = function (t) {
    return this.__data__.has(t)
  };
  var fo = Za(wa, "Set");

  function ho(t) {
    var e = -1,
      n = Array(t.size);
    return t.forEach(function (t) {
      n[++e] = t
    }), n
  }
  var po = fo && 1 / ho(new fo([, -0]))[1] == 1 / 0 ? function (t) {
      return new fo(t)
    } : function () {},
    yo = 200;

  function _o(t) {
    return t && t.length ? function (t, e, n) {
      var r = -1,
        i = so,
        a = t.length,
        o = !0,
        l = [],
        s = l;
      if (n) o = !1, i = uo;
      else if (yo <= a) {
        var u = e ? null : po(t);
        if (u) return ho(u);
        o = !1, i = co, s = new oo
      } else s = e ? [] : l;
      t: for (; ++r < a;) {
        var c = t[r],
          d = e ? e(c) : c;
        if (c = n || 0 !== c ? c : 0, o && d == d) {
          for (var f = s.length; f--;)
            if (s[f] === d) continue t;
          e && s.push(d), l.push(c)
        } else i(s, d, n) || (s !== l && s.push(d), l.push(c))
      }
      return l
    }(t) : []
  }
  var go = function (d, e) {
    function i(t) {
      if ("string" == typeof t) return "function" == typeof e ? e(t) : e ? t.toLowerCase().replace(/\s+/g, "") : t;
      t = "" + t
    }
    var f = {};
    for (var t in va) void 0 === d[t] && (d[t] = va[t]);
    return {
      find: function (t) {
        return f[i(t)]
      },
      updateColors: function (t) {
        f = {};
        var s, e = Jn(t.map(i)).values(),
          u = d.palette,
          c = u.length;
        d.extend ? e.forEach(function (t, e) {
          if (e < c) f[t] = u[e];
          else {
            if (e === c) {
              for (var n, r = u.map(function (t) {
                  return ce(t)
                }), i = r.reduce(function (t, e) {
                  return t + e.c
                }, 0) / c, a = r.reduce(function (t, e) {
                  return t + e.l
                }, 0) / c, o = c; n = r[--o].h, isNaN(n) && 0 < o;);
              var l = d.advanced ? d.hue_rotation_angle : va.hue_rotation_angle;
              (s = function (t, e) {
                e = void 0 !== e ? e : 360 / ma;
                var n = ce(t = t || "#FF0000"),
                  r = n.h,
                  i = n.c,
                  a = n.l,
                  o = 0;
                return function () {
                  var t = o++ * e;
                  return Ht(ce((r + t) % 360, i, a)).hex()
                }
              }(ce(n, i, a).toString(), l))()
            }
            f[t] = s()
          }
        }) : e.forEach(function (t, e) {
          f[t] = u[e % c]
        }), d.custom_palette.split("\n").filter(function (t) {
          return t
        }).forEach(function (t) {
          var e = t.lastIndexOf(":");
          if (-1 !== e) {
            var n = i(t.slice(0, e).trim()),
              r = t.slice(e + 1).trim();
            n && r && (f[n] = r)
          }
        })
      }
    }
  }(m.color, !0);

  function mo() {
    I(this).on("mouseover", function (t) {
      t.display.visible && !Dr && !1 === m.popup_info.frozen && ($r("updateHighlightedNode", t.id), $r("updatePopup", {
        id: t.id
      }))
    }).on("mouseout", function (t) {
      if (t.display.visible && !Dr && !0 !== m.popup_info.frozen) {
        var e = O.relatedTarget;
        null !== e && "fl-layout-wrapper" !== e.id || ($r("updateHighlightedNode", null), $r("hidePopup"))
      }
    }).on("click", function (t) {
      t.display.visible && !Dr && (O.stopPropagation(), $r("zoomToNode", t))
    })
  }
  var vo = new Date,
    bo = new Date;

  function xo(a, o, n, r) {
    function l(t) {
      return a(t = new Date(+t)), t
    }
    return (l.floor = l).ceil = function (t) {
      return a(t = new Date(t - 1)), o(t, 1), a(t), t
    }, l.round = function (t) {
      var e = l(t),
        n = l.ceil(t);
      return t - e < n - t ? e : n
    }, l.offset = function (t, e) {
      return o(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
    }, l.range = function (t, e, n) {
      var r, i = [];
      if (t = l.ceil(t), n = null == n ? 1 : Math.floor(n), !(t < e && 0 < n)) return i;
      for (; i.push(r = new Date(+t)), o(t, n), a(t), r < t && t < e;);
      return i
    }, l.filter = function (n) {
      return xo(function (t) {
        if (t <= t)
          for (; a(t), !n(t);) t.setTime(t - 1)
      }, function (t, e) {
        if (t <= t)
          if (e < 0)
            for (; ++e <= 0;)
              for (; o(t, -1), !n(t););
          else
            for (; 0 <= --e;)
              for (; o(t, 1), !n(t););
      })
    }, n && (l.count = function (t, e) {
      return vo.setTime(+t), bo.setTime(+e), a(vo), a(bo), Math.floor(n(vo, bo))
    }, l.every = function (e) {
      return e = Math.floor(e), isFinite(e) && 0 < e ? 1 < e ? l.filter(r ? function (t) {
        return r(t) % e == 0
      } : function (t) {
        return l.count(0, t) % e == 0
      }) : l : null
    }), l
  }
  var wo = xo(function () {}, function (t, e) {
    t.setTime(+t + e)
  }, function (t, e) {
    return e - t
  });
  wo.every = function (n) {
    return n = Math.floor(n), isFinite(n) && 0 < n ? 1 < n ? xo(function (t) {
      t.setTime(Math.floor(t / n) * n)
    }, function (t, e) {
      t.setTime(+t + e * n)
    }, function (t, e) {
      return (e - t) / n
    }) : wo : null
  };
  wo.range;
  var Mo = 6e4,
    ko = 36e5,
    zo = (xo(function (t) {
      t.setTime(1e3 * Math.floor(t / 1e3))
    }, function (t, e) {
      t.setTime(+t + 1e3 * e)
    }, function (t, e) {
      return (e - t) / 1e3
    }, function (t) {
      return t.getUTCSeconds()
    }).range, xo(function (t) {
      t.setTime(Math.floor(t / Mo) * Mo)
    }, function (t, e) {
      t.setTime(+t + e * Mo)
    }, function (t, e) {
      return (e - t) / Mo
    }, function (t) {
      return t.getMinutes()
    }).range, xo(function (t) {
      var e = t.getTimezoneOffset() * Mo % ko;
      e < 0 && (e += ko), t.setTime(Math.floor((+t - e) / ko) * ko + e)
    }, function (t, e) {
      t.setTime(+t + e * ko)
    }, function (t, e) {
      return (e - t) / ko
    }, function (t) {
      return t.getHours()
    }).range, xo(function (t) {
      t.setHours(0, 0, 0, 0)
    }, function (t, e) {
      t.setDate(t.getDate() + e)
    }, function (t, e) {
      return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Mo) / 864e5
    }, function (t) {
      return t.getDate() - 1
    }));
  zo.range;

  function To(e) {
    return xo(function (t) {
      t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0)
    }, function (t, e) {
      t.setDate(t.getDate() + 7 * e)
    }, function (t, e) {
      return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Mo) / 6048e5
    })
  }
  var Ao = To(0),
    Co = To(1),
    So = (To(2), To(3), To(4)),
    Eo = (To(5), To(6), Ao.range, xo(function (t) {
      t.setDate(1), t.setHours(0, 0, 0, 0)
    }, function (t, e) {
      t.setMonth(t.getMonth() + e)
    }, function (t, e) {
      return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear())
    }, function (t) {
      return t.getMonth()
    }).range, xo(function (t) {
      t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
    }, function (t, e) {
      t.setFullYear(t.getFullYear() + e)
    }, function (t, e) {
      return e.getFullYear() - t.getFullYear()
    }, function (t) {
      return t.getFullYear()
    }));
  Eo.every = function (n) {
    return isFinite(n = Math.floor(n)) && 0 < n ? xo(function (t) {
      t.setFullYear(Math.floor(t.getFullYear() / n) * n), t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
    }, function (t, e) {
      t.setFullYear(t.getFullYear() + e * n)
    }) : null
  };
  Eo.range, xo(function (t) {
    t.setUTCSeconds(0, 0)
  }, function (t, e) {
    t.setTime(+t + e * Mo)
  }, function (t, e) {
    return (e - t) / Mo
  }, function (t) {
    return t.getUTCMinutes()
  }).range, xo(function (t) {
    t.setUTCMinutes(0, 0, 0)
  }, function (t, e) {
    t.setTime(+t + e * ko)
  }, function (t, e) {
    return (e - t) / ko
  }, function (t) {
    return t.getUTCHours()
  }).range;
  var Lo = xo(function (t) {
    t.setUTCHours(0, 0, 0, 0)
  }, function (t, e) {
    t.setUTCDate(t.getUTCDate() + e)
  }, function (t, e) {
    return (e - t) / 864e5
  }, function (t) {
    return t.getUTCDate() - 1
  });
  Lo.range;

  function No(e) {
    return xo(function (t) {
      t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0)
    }, function (t, e) {
      t.setUTCDate(t.getUTCDate() + 7 * e)
    }, function (t, e) {
      return (e - t) / 6048e5
    })
  }
  var Po = No(0),
    Fo = No(1),
    Oo = (No(2), No(3), No(4)),
    Ho = (No(5), No(6), Po.range, xo(function (t) {
      t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
    }, function (t, e) {
      t.setUTCMonth(t.getUTCMonth() + e)
    }, function (t, e) {
      return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear())
    }, function (t) {
      return t.getUTCMonth()
    }).range, xo(function (t) {
      t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
    }, function (t, e) {
      t.setUTCFullYear(t.getUTCFullYear() + e)
    }, function (t, e) {
      return e.getUTCFullYear() - t.getUTCFullYear()
    }, function (t) {
      return t.getUTCFullYear()
    }));
  Ho.every = function (n) {
    return isFinite(n = Math.floor(n)) && 0 < n ? xo(function (t) {
      t.setUTCFullYear(Math.floor(t.getUTCFullYear() / n) * n), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
    }, function (t, e) {
      t.setUTCFullYear(t.getUTCFullYear() + e * n)
    }) : null
  };
  Ho.range;

  function Uo(t) {
    if (0 <= t.y && t.y < 100) {
      var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
      return e.setFullYear(t.y), e
    }
    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
  }

  function Do(t) {
    if (0 <= t.y && t.y < 100) {
      var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
      return e.setUTCFullYear(t.y), e
    }
    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
  }

  function jo(t) {
    return {
      y: t,
      m: 0,
      d: 1,
      H: 0,
      M: 0,
      S: 0,
      L: 0
    }
  }
  var Ro, Bo, qo, Yo, Io, Vo, Wo, Xo, $o, Zo, Go, Qo, Jo, Ko, tl, el, nl, rl, il, al, ol, ll, sl, ul, cl, dl = {
      "-": "",
      _: " ",
      0: "0"
    },
    fl = /^\s*\d+/,
    hl = /^%/,
    pl = /[\\^$*+?|[\]().{}]/g;

  function yl(t, e, n) {
    var r = t < 0 ? "-" : "",
      i = (r ? -t : t) + "",
      a = i.length;
    return r + (a < n ? new Array(n - a + 1).join(e) + i : i)
  }

  function _l(t) {
    return t.replace(pl, "\\$&")
  }

  function gl(t) {
    return new RegExp("^(?:" + t.map(_l).join("|") + ")", "i")
  }

  function ml(t) {
    for (var e = {}, n = -1, r = t.length; ++n < r;) e[t[n].toLowerCase()] = n;
    return e
  }

  function vl(t, e, n) {
    var r = fl.exec(e.slice(n, n + 1));
    return r ? (t.w = +r[0], n + r[0].length) : -1
  }

  function bl(t, e, n) {
    var r = fl.exec(e.slice(n, n + 1));
    return r ? (t.u = +r[0], n + r[0].length) : -1
  }

  function xl(t, e, n) {
    var r = fl.exec(e.slice(n, n + 2));
    return r ? (t.U = +r[0], n + r[0].length) : -1
  }

  function wl(t, e, n) {
    var r = fl.exec(e.slice(n, n + 2));
    return r ? (t.V = +r[0], n + r[0].length) : -1
  }

  function Ml(t, e, n) {
    var r = fl.exec(e.slice(n, n + 2));
    return r ? (t.W = +r[0], n + r[0].length) : -1
  }

  function kl(t, e, n) {
    var r = fl.exec(e.slice(n, n + 4));
    return r ? (t.y = +r[0], n + r[0].length) : -1
  }

  function zl(t, e, n) {
    var r = fl.exec(e.slice(n, n + 2));
    return r ? (t.y = +r[0] + (68 < +r[0] ? 1900 : 2e3), n + r[0].length) : -1
  }

  function Tl(t, e, n) {
    var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
    return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1
  }

  function Al(t, e, n) {
    var r = fl.exec(e.slice(n, n + 2));
    return r ? (t.m = r[0] - 1, n + r[0].length) : -1
  }

  function Cl(t, e, n) {
    var r = fl.exec(e.slice(n, n + 2));
    return r ? (t.d = +r[0], n + r[0].length) : -1
  }

  function Sl(t, e, n) {
    var r = fl.exec(e.slice(n, n + 3));
    return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1
  }

  function El(t, e, n) {
    var r = fl.exec(e.slice(n, n + 2));
    return r ? (t.H = +r[0], n + r[0].length) : -1
  }

  function Ll(t, e, n) {
    var r = fl.exec(e.slice(n, n + 2));
    return r ? (t.M = +r[0], n + r[0].length) : -1
  }

  function Nl(t, e, n) {
    var r = fl.exec(e.slice(n, n + 2));
    return r ? (t.S = +r[0], n + r[0].length) : -1
  }

  function Pl(t, e, n) {
    var r = fl.exec(e.slice(n, n + 3));
    return r ? (t.L = +r[0], n + r[0].length) : -1
  }

  function Fl(t, e, n) {
    var r = fl.exec(e.slice(n, n + 6));
    return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1
  }

  function Ol(t, e, n) {
    var r = hl.exec(e.slice(n, n + 1));
    return r ? n + r[0].length : -1
  }

  function Hl(t, e, n) {
    var r = fl.exec(e.slice(n));
    return r ? (t.Q = +r[0], n + r[0].length) : -1
  }

  function Ul(t, e, n) {
    var r = fl.exec(e.slice(n));
    return r ? (t.Q = 1e3 * +r[0], n + r[0].length) : -1
  }

  function Dl(t, e) {
    return yl(t.getDate(), e, 2)
  }

  function jl(t, e) {
    return yl(t.getHours(), e, 2)
  }

  function Rl(t, e) {
    return yl(t.getHours() % 12 || 12, e, 2)
  }

  function Bl(t, e) {
    return yl(1 + zo.count(Eo(t), t), e, 3)
  }

  function ql(t, e) {
    return yl(t.getMilliseconds(), e, 3)
  }

  function Yl(t, e) {
    return ql(t, e) + "000"
  }

  function Il(t, e) {
    return yl(t.getMonth() + 1, e, 2)
  }

  function Vl(t, e) {
    return yl(t.getMinutes(), e, 2)
  }

  function Wl(t, e) {
    return yl(t.getSeconds(), e, 2)
  }

  function Xl(t) {
    var e = t.getDay();
    return 0 === e ? 7 : e
  }

  function $l(t, e) {
    return yl(Ao.count(Eo(t), t), e, 2)
  }

  function Zl(t, e) {
    var n = t.getDay();
    return t = 4 <= n || 0 === n ? So(t) : So.ceil(t), yl(So.count(Eo(t), t) + (4 === Eo(t).getDay()), e, 2)
  }

  function Gl(t) {
    return t.getDay()
  }

  function Ql(t, e) {
    return yl(Co.count(Eo(t), t), e, 2)
  }

  function Jl(t, e) {
    return yl(t.getFullYear() % 100, e, 2)
  }

  function Kl(t, e) {
    return yl(t.getFullYear() % 1e4, e, 4)
  }

  function ts(t) {
    var e = t.getTimezoneOffset();
    return (0 < e ? "-" : (e *= -1, "+")) + yl(e / 60 | 0, "0", 2) + yl(e % 60, "0", 2)
  }

  function es(t, e) {
    return yl(t.getUTCDate(), e, 2)
  }

  function ns(t, e) {
    return yl(t.getUTCHours(), e, 2)
  }

  function rs(t, e) {
    return yl(t.getUTCHours() % 12 || 12, e, 2)
  }

  function is(t, e) {
    return yl(1 + Lo.count(Ho(t), t), e, 3)
  }

  function as(t, e) {
    return yl(t.getUTCMilliseconds(), e, 3)
  }

  function os(t, e) {
    return as(t, e) + "000"
  }

  function ls(t, e) {
    return yl(t.getUTCMonth() + 1, e, 2)
  }

  function ss(t, e) {
    return yl(t.getUTCMinutes(), e, 2)
  }

  function us(t, e) {
    return yl(t.getUTCSeconds(), e, 2)
  }

  function cs(t) {
    var e = t.getUTCDay();
    return 0 === e ? 7 : e
  }

  function ds(t, e) {
    return yl(Po.count(Ho(t), t), e, 2)
  }

  function fs(t, e) {
    var n = t.getUTCDay();
    return t = 4 <= n || 0 === n ? Oo(t) : Oo.ceil(t), yl(Oo.count(Ho(t), t) + (4 === Ho(t).getUTCDay()), e, 2)
  }

  function hs(t) {
    return t.getUTCDay()
  }

  function ps(t, e) {
    return yl(Fo.count(Ho(t), t), e, 2)
  }

  function ys(t, e) {
    return yl(t.getUTCFullYear() % 100, e, 2)
  }

  function _s(t, e) {
    return yl(t.getUTCFullYear() % 1e4, e, 4)
  }

  function gs() {
    return "+0000"
  }

  function ms() {
    return "%"
  }

  function vs(t) {
    return +t
  }

  function bs(t) {
    return Math.floor(+t / 1e3)
  }

  function xs(s, u) {
    return function (t) {
      var e, n, r, i = [],
        a = -1,
        o = 0,
        l = s.length;
      for (t instanceof Date || (t = new Date(+t)); ++a < l;) 37 === s.charCodeAt(a) && (i.push(s.slice(o, a)), null != (n = dl[e = s.charAt(++a)]) ? e = s.charAt(++a) : n = "e" === e ? " " : "0", (r = u[e]) && (e = r(t, n)), i.push(e), o = a + 1);
      return i.push(s.slice(o, a)), i.join("")
    }
  }

  function ws(i, a) {
    return function (t) {
      var e, n, r = jo(1900);
      if (Ms(r, i, t += "", 0) != t.length) return null;
      if ("Q" in r) return new Date(r.Q);
      if ("p" in r && (r.H = r.H % 12 + 12 * r.p), "V" in r) {
        if (r.V < 1 || 53 < r.V) return null;
        "w" in r || (r.w = 1), "Z" in r ? (e = 4 < (n = (e = Do(jo(r.y))).getUTCDay()) || 0 === n ? Fo.ceil(e) : Fo(e), e = Lo.offset(e, 7 * (r.V - 1)), r.y = e.getUTCFullYear(), r.m = e.getUTCMonth(), r.d = e.getUTCDate() + (r.w + 6) % 7) : (e = 4 < (n = (e = a(jo(r.y))).getDay()) || 0 === n ? Co.ceil(e) : Co(e), e = zo.offset(e, 7 * (r.V - 1)), r.y = e.getFullYear(), r.m = e.getMonth(), r.d = e.getDate() + (r.w + 6) % 7)
      } else("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : "W" in r ? 1 : 0), n = "Z" in r ? Do(jo(r.y)).getUTCDay() : a(jo(r.y)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + 7 * r.W - (n + 5) % 7 : r.w + 7 * r.U - (n + 6) % 7);
      return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, Do(r)) : a(r)
    }
  }

  function Ms(t, e, n, r) {
    for (var i, a, o = 0, l = e.length, s = n.length; o < l;) {
      if (s <= r) return -1;
      if (37 === (i = e.charCodeAt(o++))) {
        if (i = e.charAt(o++), !(a = cl[i in dl ? e.charAt(o++) : i]) || (r = a(t, n, r)) < 0) return -1
      } else if (i != n.charCodeAt(r++)) return -1
    }
    return r
  }
  Io = (Yo = {
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  }).dateTime, Vo = Yo.date, Wo = Yo.time, Xo = Yo.periods, $o = Yo.days, Zo = Yo.shortDays, Go = Yo.months, Qo = Yo.shortMonths, Jo = gl(Xo), Ko = ml(Xo), tl = gl($o), el = ml($o), nl = gl(Zo), rl = ml(Zo), il = gl(Go), al = ml(Go), ol = gl(Qo), ll = ml(Qo), ul = {
    a: function (t) {
      return Zo[t.getUTCDay()]
    },
    A: function (t) {
      return $o[t.getUTCDay()]
    },
    b: function (t) {
      return Qo[t.getUTCMonth()]
    },
    B: function (t) {
      return Go[t.getUTCMonth()]
    },
    c: null,
    d: es,
    e: es,
    f: os,
    H: ns,
    I: rs,
    j: is,
    L: as,
    m: ls,
    M: ss,
    p: function (t) {
      return Xo[+(12 <= t.getUTCHours())]
    },
    Q: vs,
    s: bs,
    S: us,
    u: cs,
    U: ds,
    V: fs,
    w: hs,
    W: ps,
    x: null,
    X: null,
    y: ys,
    Y: _s,
    Z: gs,
    "%": ms
  }, cl = {
    a: function (t, e, n) {
      var r = nl.exec(e.slice(n));
      return r ? (t.w = rl[r[0].toLowerCase()], n + r[0].length) : -1
    },
    A: function (t, e, n) {
      var r = tl.exec(e.slice(n));
      return r ? (t.w = el[r[0].toLowerCase()], n + r[0].length) : -1
    },
    b: function (t, e, n) {
      var r = ol.exec(e.slice(n));
      return r ? (t.m = ll[r[0].toLowerCase()], n + r[0].length) : -1
    },
    B: function (t, e, n) {
      var r = il.exec(e.slice(n));
      return r ? (t.m = al[r[0].toLowerCase()], n + r[0].length) : -1
    },
    c: function (t, e, n) {
      return Ms(t, Io, e, n)
    },
    d: Cl,
    e: Cl,
    f: Fl,
    H: El,
    I: El,
    j: Sl,
    L: Pl,
    m: Al,
    M: Ll,
    p: function (t, e, n) {
      var r = Jo.exec(e.slice(n));
      return r ? (t.p = Ko[r[0].toLowerCase()], n + r[0].length) : -1
    },
    Q: Hl,
    s: Ul,
    S: Nl,
    u: bl,
    U: xl,
    V: wl,
    w: vl,
    W: Ml,
    x: function (t, e, n) {
      return Ms(t, Vo, e, n)
    },
    X: function (t, e, n) {
      return Ms(t, Wo, e, n)
    },
    y: zl,
    Y: kl,
    Z: Tl,
    "%": Ol
  }, (sl = {
    a: function (t) {
      return Zo[t.getDay()]
    },
    A: function (t) {
      return $o[t.getDay()]
    },
    b: function (t) {
      return Qo[t.getMonth()]
    },
    B: function (t) {
      return Go[t.getMonth()]
    },
    c: null,
    d: Dl,
    e: Dl,
    f: Yl,
    H: jl,
    I: Rl,
    j: Bl,
    L: ql,
    m: Il,
    M: Vl,
    p: function (t) {
      return Xo[+(12 <= t.getHours())]
    },
    Q: vs,
    s: bs,
    S: Wl,
    u: Xl,
    U: $l,
    V: Zl,
    w: Gl,
    W: Ql,
    x: null,
    X: null,
    y: Jl,
    Y: Kl,
    Z: ts,
    "%": ms
  }).x = xs(Vo, sl), sl.X = xs(Wo, sl), sl.c = xs(Io, sl), ul.x = xs(Vo, ul), ul.X = xs(Wo, ul), ul.c = xs(Io, ul), Ro = {
    format: function (t) {
      var e = xs(t += "", sl);
      return e.toString = function () {
        return t
      }, e
    },
    parse: function (t) {
      var e = ws(t += "", Uo);
      return e.toString = function () {
        return t
      }, e
    },
    utcFormat: function (t) {
      var e = xs(t += "", ul);
      return e.toString = function () {
        return t
      }, e
    },
    utcParse: function (t) {
      var e = ws(t, Do);
      return e.toString = function () {
        return t
      }, e
    }
  }, Ro.parse, Bo = Ro.utcFormat, qo = Ro.utcParse;
  var ks = "%Y-%m-%dT%H:%M:%S.%LZ";
  Date.prototype.toISOString || Bo(ks); + new Date("2000-01-01T00:00:00.000Z") || qo(ks);

  function zs(t) {
    return t.match(/.{6}/g).map(function (t) {
      return "#" + t
    })
  }
  zs("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), zs("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), zs("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), zs("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), Ve(be(300, .5, 0), be(-240, .5, 1));
  Ve(be(-100, .75, .35), be(80, 1.5, .8)), Ve(be(260, .75, .35), be(80, 1.5, .8)), be();

  function Ts(e) {
    var n = e.length;
    return function (t) {
      return e[Math.max(0, Math.min(n - 1, Math.floor(t * n)))]
    }
  }
  Ts(zs("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
  Ts(zs("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), Ts(zs("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), Ts(zs("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

  function As(t) {
    return 180 * t / Math.PI
  }

  function Cs(t) {
    return t * Math.PI / 180
  }

  function Ss(t) {
    return 0 === t.depth ? "none" : 1 === t.depth ? go.find(t.data.key) : go.find(t.data.key) || "white"
  }

  function Es(t) {
    if (0 === t.depth) return "none";
    for (var e = t.ancestors(), n = 0; n < e.length; n++) {
      var r = e[n],
        i = go.find(r.data.key);
      if (i) return i
    }
    return console.error("Unable to find ancestor color of", t.id), null
  }

  function Ls(t) {
    return 1 < t.depth && go.find(t.data.key)
  }

  function Ns() {
    return {
      low: 16,
      medium: 24,
      high: 32
    }[m.cellPadding]
  }

  function Ps(t, e) {
    var n = e - 8 - 7 * t.length;
    if (0 < n) return t;
    var r = t.length + n / 7 - 1;
    return r = r < 0 ? 0 : r, 0 < (t = t.slice(0, r)).length && (t += "…"), t
  }

  function Fs() {
    return u.root.leaves()[0].depth + 1
  }

  function Os() {
    return m.zoomed_node_id ? Vr(u.root, m.zoomed_node_id) : u.root
  }
  var Hs, Us, Ds, js, Rs, Bs, qs, Ys, Is, Vs, Ws = {
      treemapBinary: function (t, e, n, r, i) {
        var a, o, m = t.children,
          l = m.length,
          v = new Array(l + 1);
        for (v[0] = o = a = 0; a < l; ++a) v[a + 1] = o += m[a].value;
        ! function t(e, n, r, i, a, o, l) {
          if (n - 1 <= e) {
            var s = m[e];
            return s.x0 = i, s.y0 = a, s.x1 = o, void(s.y1 = l)
          }
          var u = v[e],
            c = r / 2 + u,
            d = e + 1,
            f = n - 1;
          for (; d < f;) {
            var h = d + f >>> 1;
            v[h] < c ? d = 1 + h : f = h
          }
          c - v[d - 1] < v[d] - c && e + 1 < d && --d;
          var p = v[d] - u,
            y = r - p;
          if (l - a < o - i) {
            var _ = (i * y + o * p) / r;
            t(e, d, p, i, a, _, l), t(d, n, y, _, a, o, l)
          } else {
            var g = (a * y + l * p) / r;
            t(e, d, p, i, a, o, g), t(d, n, y, i, g, o, l)
          }
        }(0, l, t.value, e, n, r, i)
      },
      treemapResquarify: Or,
      treemapSlice: Lr,
      treemapDice: Tr,
      treemapSliceDice: function (t, e, n, r, i) {
        (1 & t.depth ? Lr : Tr)(t, e, n, r, i)
      }
    },
    Xs = (Hs = Fr, Us = !1, js = Ds = 1, Rs = [0], Vs = Is = Ys = qs = Bs = vr, $s.round = function (t) {
      return arguments.length ? (Us = !!t, $s) : Us
    }, $s.size = function (t) {
      return arguments.length ? (Ds = +t[0], js = +t[1], $s) : [Ds, js]
    }, $s.tile = function (t) {
      return arguments.length ? (Hs = mr(t), $s) : Hs
    }, $s.padding = function (t) {
      return arguments.length ? $s.paddingInner(t).paddingOuter(t) : $s.paddingInner()
    }, $s.paddingInner = function (t) {
      return arguments.length ? (Bs = "function" == typeof t ? t : br(+t), $s) : Bs
    }, $s.paddingOuter = function (t) {
      return arguments.length ? $s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : $s.paddingTop()
    }, $s.paddingTop = function (t) {
      return arguments.length ? (qs = "function" == typeof t ? t : br(+t), $s) : qs
    }, $s.paddingRight = function (t) {
      return arguments.length ? (Ys = "function" == typeof t ? t : br(+t), $s) : Ys
    }, $s.paddingBottom = function (t) {
      return arguments.length ? (Is = "function" == typeof t ? t : br(+t), $s) : Is
    }, $s.paddingLeft = function (t) {
      return arguments.length ? (Vs = "function" == typeof t ? t : br(+t), $s) : Vs
    }, $s);

  function $s(t) {
    return t.x0 = t.y0 = 0, t.x1 = Ds, t.y1 = js, t.eachBefore(Zs), Rs = [0], Us && t.eachBefore(zr), t
  }

  function Zs(t) {
    var e = Rs[t.depth],
      n = t.x0 + e,
      r = t.y0 + e,
      i = t.x1 - e,
      a = t.y1 - e;
    i < n && (n = i = (n + i) / 2), a < r && (r = a = (r + a) / 2), t.x0 = n, t.y0 = r, t.x1 = i, t.y1 = a, t.children && (e = Rs[t.depth + 1] = Bs(t) / 2, n += Vs(t) - e, r += qs(t) - e, (i -= Ys(t) - e) < n && (n = i = (n + i) / 2), (a -= Is(t) - e) < r && (r = a = (r + a) / 2), Hs(t, n, r, i, a))
  }

  function Gs(t, e) {
    t.children && (! function e(t, n, r) {
      t.children.forEach(function (t) {
        t.display.x0 = n(t.display.x0), t.display.x1 = n(t.display.x1), t.display.y0 = r(t.display.y0), t.display.y1 = r(t.display.y1), t.display.x1 < t.display.x0 && (t.display.x1 = t.display.x0), t.display.y1 < t.display.y0 && (t.display.y1 = t.display.y0), t.children && e(t, n, r)
      })
    }(t, gn().domain([t.display.x0, t.display.x1]).range([t.display.x0 + e, t.display.x1 - e]), gn().domain([t.display.y0, t.display.y1]).range([t.display.y0 + e, t.display.y1 - e])), t.children.forEach(function (t) {
      Gs(t, e)
    }))
  }

  function Qs(t, e, n) {
    var r = [Math.max(e - 2, 0), Math.max(n - 2, 0)],
      i = Ns(),
      a = Math.min(r[0], r[1]);
    i = Math.min(i, .5 * a);
    var o = Ws[m.treemap_type];
    "treemapResquarify" == m.treemap_type && (o = o.ratio(m.treemap_ratio)), Xs.size(r).tile(o), Xs(t);
    var l = gn(),
      s = gn();
    l.domain([0, r[0]]).range([0, r[0]]), s.domain([0, r[1]]).range([0, r[1]]);
    var u = void 0;
    if (m.zoomed_node_id) {
      if (!(u = Vr(t, m.zoomed_node_id))) return $r("zoomOut");
      l.domain([u.x0, u.x1]), s.domain([u.y0, u.y1])
    } else l.domain([i, r[0] - i]), s.domain([i, r[1] - i]);
    ! function e(t, n, r) {
      t.display = {
        x0: n(t.x0),
        x1: n(t.x1),
        y0: r(t.y0),
        y1: r(t.y1)
      }, void 0 !== t.children && t.children.forEach(function (t) {
        e(t, n, r)
      })
    }(t, l, s), Gs(u || t, i),
      function e(t, n) {
        var r = m.num_of_visible_levels;
        t.display.visible = t.depth < n + r + 1, t.display.leaf = !t.children || t.depth === n + r, t.children && t.children.forEach(function (t) {
          e(t, n)
        })
      }(t, u ? u.depth : 0)
  }
  var Js = {
    value: function () {}
  };

  function Ks() {
    for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
      if (!(t = arguments[e] + "") || t in r) throw new Error("illegal type: " + t);
      r[t] = []
    }
    return new tu(r)
  }

  function tu(t) {
    this._ = t
  }

  function eu(t, e) {
    for (var n, r = 0, i = t.length; r < i; ++r)
      if ((n = t[r]).name === e) return n.value
  }

  function nu(t, e, n) {
    for (var r = 0, i = t.length; r < i; ++r)
      if (t[r].name === e) {
        t[r] = Js, t = t.slice(0, r).concat(t.slice(r + 1));
        break
      }
    return null != n && t.push({
      name: e,
      value: n
    }), t
  }
  tu.prototype = Ks.prototype = {
    constructor: tu,
    on: function (t, e) {
      var n, r = this._,
        i = function (t, r) {
          return t.trim().split(/^|\s+/).map(function (t) {
            var e = "",
              n = t.indexOf(".");
            if (0 <= n && (e = t.slice(n + 1), t = t.slice(0, n)), t && !r.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            return {
              type: t,
              name: e
            }
          })
        }(t + "", r),
        a = -1,
        o = i.length;
      if (!(arguments.length < 2)) {
        if (null != e && "function" != typeof e) throw new Error("invalid callback: " + e);
        for (; ++a < o;)
          if (n = (t = i[a]).type) r[n] = nu(r[n], t.name, e);
          else if (null == e)
          for (n in r) r[n] = nu(r[n], t.name, null);
        return this
      }
      for (; ++a < o;)
        if ((n = (t = i[a]).type) && (n = eu(r[n], t.name))) return n
    },
    copy: function () {
      var t = {},
        e = this._;
      for (var n in e) t[n] = e[n].slice();
      return new tu(t)
    },
    call: function (t, e) {
      if (0 < (n = arguments.length - 2))
        for (var n, r, i = new Array(n), a = 0; a < n; ++a) i[a] = arguments[a + 2];
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      for (a = 0, n = (r = this._[t]).length; a < n; ++a) r[a].value.apply(e, i)
    },
    apply: function (t, e, n) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(e, n)
    }
  };
  var ru, iu, au = 0,
    ou = 0,
    lu = 0,
    su = 1e3,
    uu = 0,
    cu = 0,
    du = 0,
    fu = "object" === ("undefined" == typeof performance ? "undefined" : Ce(performance)) && performance.now ? performance : Date,
    hu = "object" === ("undefined" == typeof window ? "undefined" : Ce(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
      setTimeout(t, 17)
    };

  function pu() {
    return cu || (hu(yu), cu = fu.now() + du)
  }

  function yu() {
    cu = 0
  }

  function _u() {
    this._call = this._time = this._next = null
  }

  function gu(t, e, n) {
    var r = new _u;
    return r.restart(t, e, n), r
  }

  function mu() {
    cu = (uu = fu.now()) + du, au = ou = 0;
    try {
      ! function () {
        pu(), ++au;
        for (var t, e = ru; e;) 0 <= (t = cu - e._time) && e._call.call(null, t), e = e._next;
        --au
      }()
    } finally {
      au = 0,
        function () {
          var t, e, n = ru,
            r = 1 / 0;
          for (; n;) n = n._call ? (r > n._time && (r = n._time), (t = n)._next) : (e = n._next, n._next = null, t ? t._next = e : ru = e);
          iu = t, bu(r)
        }(), cu = 0
    }
  }

  function vu() {
    var t = fu.now(),
      e = t - uu;
    su < e && (du -= e, uu = t)
  }

  function bu(t) {
    au || (ou = ou && clearTimeout(ou), 24 < t - cu ? (t < 1 / 0 && (ou = setTimeout(mu, t - fu.now() - du)), lu = lu && clearInterval(lu)) : (lu || (uu = fu.now(), lu = setInterval(vu, su)), au = 1, hu(mu)))
  }

  function xu(e, n, t) {
    var r = new _u;
    return n = null == n ? 0 : +n, r.restart(function (t) {
      r.stop(), e(t + n)
    }, n, t), r
  }
  _u.prototype = gu.prototype = {
    constructor: _u,
    restart: function (t, e, n) {
      if ("function" != typeof t) throw new TypeError("callback is not a function");
      n = (null == n ? pu() : +n) + (null == e ? 0 : +e), this._next || iu === this || (iu ? iu._next = this : ru = this, iu = this), this._call = t, this._time = n, bu()
    },
    stop: function () {
      this._call && (this._call = null, this._time = 1 / 0, bu())
    }
  };
  var wu = Ks("start", "end", "cancel", "interrupt"),
    Mu = [],
    ku = 0,
    zu = 1,
    Tu = 2,
    Au = 3,
    Cu = 4,
    Su = 5,
    Eu = 6;

  function Lu(t, e, n, r, i, a) {
    var o = t.__transition;
    if (o) {
      if (n in o) return
    } else t.__transition = {};
    ! function (a, o, l) {
      var s, u = a.__transition;

      function c(t) {
        var e, n, r, i;
        if (l.state !== zu) return f();
        for (e in u)
          if ((i = u[e]).name === l.name) {
            if (i.state === Au) return xu(c);
            i.state === Cu ? (i.state = Eu, i.timer.stop(), i.on.call("interrupt", a, a.__data__, i.index, i.group), delete u[e]) : +e < o && (i.state = Eu, i.timer.stop(), i.on.call("cancel", a, a.__data__, i.index, i.group), delete u[e])
          }
        if (xu(function () {
            l.state === Au && (l.state = Cu, l.timer.restart(d, l.delay, l.time), d(t))
          }), l.state = Tu, l.on.call("start", a, a.__data__, l.index, l.group), l.state === Tu) {
          for (l.state = Au, s = new Array(r = l.tween.length), e = 0, n = -1; e < r; ++e)(i = l.tween[e].value.call(a, a.__data__, l.index, l.group)) && (s[++n] = i);
          s.length = n + 1
        }
      }

      function d(t) {
        for (var e = t < l.duration ? l.ease.call(null, t / l.duration) : (l.timer.restart(f), l.state = Su, 1), n = -1, r = s.length; ++n < r;) s[n].call(a, e);
        l.state === Su && (l.on.call("end", a, a.__data__, l.index, l.group), f())
      }

      function f() {
        for (var t in l.state = Eu, l.timer.stop(), delete u[o], u) return;
        delete a.__transition
      }(u[o] = l).timer = gu(function (t) {
        l.state = zu, l.timer.restart(c, l.delay, l.time), l.delay <= t && c(t - l.delay)
      }, 0, l.time)
    }(t, n, {
      name: e,
      index: r,
      group: i,
      on: wu,
      tween: Mu,
      time: a.time,
      delay: a.delay,
      duration: a.duration,
      ease: a.ease,
      timer: null,
      state: ku
    })
  }

  function Nu(t, e) {
    var n = Fu(t, e);
    if (n.state > ku) throw new Error("too late; already scheduled");
    return n
  }

  function Pu(t, e) {
    var n = Fu(t, e);
    if (n.state > Au) throw new Error("too late; already running");
    return n
  }

  function Fu(t, e) {
    var n = t.__transition;
    if (!n || !(n = n[e])) throw new Error("transition not found");
    return n
  }

  function Ou(t, e, n) {
    var r = t._id;
    return t.each(function () {
        var t = Pu(this, r);
        (t.value || (t.value = {}))[e] = n.apply(this, arguments)
      }),
      function (t) {
        return Fu(t, r).value[e]
      }
  }

  function Hu(t, e) {
    var n;
    return ("number" == typeof e ? Ae : e instanceof Ht ? Te : (n = Ht(e)) ? (e = n, Te) : Le)(t, e)
  }
  var Uu = Y.prototype.constructor;

  function Du(t) {
    return function () {
      this.style.removeProperty(t)
    }
  }
  var ju = 0;

  function Ru(t, e, n, r) {
    this._groups = t, this._parents = e, this._name = n, this._id = r
  }

  function Bu() {
    return ++ju
  }
  var qu = Y.prototype;
  Ru.prototype = function (t) {
    return Y().transition(t)
  }.prototype = {
    constructor: Ru,
    select: function (t) {
      var e = this._name,
        n = this._id;
      "function" != typeof t && (t = h(t));
      for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
        for (var l, s, u = r[o], c = u.length, d = a[o] = new Array(c), f = 0; f < c; ++f)(l = u[f]) && (s = t.call(l, l.__data__, f, u)) && ("__data__" in l && (s.__data__ = l.__data__), d[f] = s, Lu(d[f], e, n, f, d, Fu(l, n)));
      return new Ru(a, this._parents, e, n)
    },
    selectAll: function (t) {
      var e = this._name,
        n = this._id;
      "function" != typeof t && (t = g(t));
      for (var r = this._groups, i = r.length, a = [], o = [], l = 0; l < i; ++l)
        for (var s, u = r[l], c = u.length, d = 0; d < c; ++d)
          if (s = u[d]) {
            for (var f, h = t.call(s, s.__data__, d, u), p = Fu(s, n), y = 0, _ = h.length; y < _; ++y)(f = h[y]) && Lu(f, e, n, y, h, p);
            a.push(h), o.push(s)
          }
      return new Ru(a, o, e, n)
    },
    filter: function (t) {
      "function" != typeof t && (t = c(t));
      for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
        for (var a, o = e[i], l = o.length, s = r[i] = [], u = 0; u < l; ++u)(a = o[u]) && t.call(a, a.__data__, u, o) && s.push(a);
      return new Ru(r, this._parents, this._name, this._id)
    },
    merge: function (t) {
      if (t._id !== this._id) throw new Error;
      for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), l = 0; l < a; ++l)
        for (var s, u = e[l], c = n[l], d = u.length, f = o[l] = new Array(d), h = 0; h < d; ++h)(s = u[h] || c[h]) && (f[h] = s);
      for (; l < r; ++l) o[l] = e[l];
      return new Ru(o, this._parents, this._name, this._id)
    },
    selection: function () {
      return new Uu(this._groups, this._parents)
    },
    transition: function () {
      for (var t = this._name, e = this._id, n = Bu(), r = this._groups, i = r.length, a = 0; a < i; ++a)
        for (var o, l = r[a], s = l.length, u = 0; u < s; ++u)
          if (o = l[u]) {
            var c = Fu(o, e);
            Lu(o, t, n, u, l, {
              time: c.time + c.delay + c.duration,
              delay: 0,
              duration: c.duration,
              ease: c.ease
            })
          }
      return new Ru(r, this._parents, t, n)
    },
    call: qu.call,
    nodes: qu.nodes,
    node: qu.node,
    size: qu.size,
    empty: qu.empty,
    each: qu.each,
    on: function (t, e) {
      var n = this._id;
      return arguments.length < 2 ? Fu(this.node(), n).on.on(t) : this.each(function (n, r, i) {
        var a, o, l = function (t) {
          return (t + "").trim().split(/^|\s+/).every(function (t) {
            var e = t.indexOf(".");
            return 0 <= e && (t = t.slice(0, e)), !t || "start" === t
          })
        }(r) ? Nu : Pu;
        return function () {
          var t = l(this, n),
            e = t.on;
          e !== a && (o = (a = e).copy()).on(r, i), t.on = o
        }
      }(n, t, e))
    },
    attr: function (t, e) {
      var n = a(t),
        r = "transform" === n ? Ye : Hu;
      return this.attrTween(t, "function" == typeof e ? (n.local ? function (r, i, a) {
        var o, l, s;
        return function () {
          var t, e, n = a(this);
          if (null != n) return (t = this.getAttributeNS(r.space, r.local)) === (e = n + "") ? null : t === o && e === l ? s : (l = e, s = i(o = t, n));
          this.removeAttributeNS(r.space, r.local)
        }
      } : function (r, i, a) {
        var o, l, s;
        return function () {
          var t, e, n = a(this);
          if (null != n) return (t = this.getAttribute(r)) === (e = n + "") ? null : t === o && e === l ? s : (l = e, s = i(o = t, n));
          this.removeAttribute(r)
        }
      })(n, r, Ou(this, "attr." + t, e)) : null == e ? (n.local ? function (t) {
        return function () {
          this.removeAttributeNS(t.space, t.local)
        }
      } : function (t) {
        return function () {
          this.removeAttribute(t)
        }
      })(n) : (n.local ? function (e, n, r) {
        var i, a, o = r + "";
        return function () {
          var t = this.getAttributeNS(e.space, e.local);
          return t === o ? null : t === i ? a : a = n(i = t, r)
        }
      } : function (e, n, r) {
        var i, a, o = r + "";
        return function () {
          var t = this.getAttribute(e);
          return t === o ? null : t === i ? a : a = n(i = t, r)
        }
      })(n, r, e))
    },
    attrTween: function (t, e) {
      var n = "attr." + t;
      if (arguments.length < 2) return (n = this.tween(n)) && n._value;
      if (null == e) return this.tween(n, null);
      if ("function" != typeof e) throw new Error;
      var r = a(t);
      return this.tween(n, (r.local ? function (e, n) {
        var r, i;

        function t() {
          var t = n.apply(this, arguments);
          return t !== i && (r = (i = t) && function (e, n) {
            return function (t) {
              this.setAttributeNS(e.space, e.local, n(t))
            }
          }(e, t)), r
        }
        return t._value = n, t
      } : function (e, n) {
        var r, i;

        function t() {
          var t = n.apply(this, arguments);
          return t !== i && (r = (i = t) && function (e, n) {
            return function (t) {
              this.setAttribute(e, n(t))
            }
          }(e, t)), r
        }
        return t._value = n, t
      })(r, e))
    },
    style: function (t, e, n) {
      var r = "transform" == (t += "") ? qe : Hu;
      return null == e ? this.styleTween(t, function (n, r) {
        var i, a, o;
        return function () {
          var t = _(this, n),
            e = (this.style.removeProperty(n), _(this, n));
          return t === e ? null : t === i && e === a ? o : o = r(i = t, a = e)
        }
      }(t, r)).on("end.style." + t, Du(t)) : "function" == typeof e ? this.styleTween(t, function (r, i, a) {
        var o, l, s;
        return function () {
          var t = _(this, r),
            e = a(this),
            n = e + "";
          return null == e && (this.style.removeProperty(r), n = e = _(this, r)), t === n ? null : t === o && n === l ? s : (l = n, s = i(o = t, e))
        }
      }(t, r, Ou(this, "style." + t, e))).each(function (r, i) {
        var a, o, l, s, u = "style." + i,
          c = "end." + u;
        return function () {
          var t = Pu(this, r),
            e = t.on,
            n = null == t.value[u] ? s = s || Du(i) : void 0;
          e === a && l === n || (o = (a = e).copy()).on(c, l = n), t.on = o
        }
      }(this._id, t)) : this.styleTween(t, function (e, n, r) {
        var i, a, o = r + "";
        return function () {
          var t = _(this, e);
          return t === o ? null : t === i ? a : a = n(i = t, r)
        }
      }(t, r, e), n).on("end.style." + t, null)
    },
    styleTween: function (t, e, n) {
      var r = "style." + (t += "");
      if (arguments.length < 2) return (r = this.tween(r)) && r._value;
      if (null == e) return this.tween(r, null);
      if ("function" != typeof e) throw new Error;
      return this.tween(r, function (e, n, r) {
        var i, a;

        function t() {
          var t = n.apply(this, arguments);
          return t !== a && (i = (a = t) && function (e, n, r) {
            return function (t) {
              this.style.setProperty(e, n(t), r)
            }
          }(e, t, r)), i
        }
        return t._value = n, t
      }(t, e, null == n ? "" : n))
    },
    text: function (t) {
      return this.tween("text", "function" == typeof t ? function (e) {
        return function () {
          var t = e(this);
          this.textContent = null == t ? "" : t
        }
      }(Ou(this, "text", t)) : function (t) {
        return function () {
          this.textContent = t
        }
      }(null == t ? "" : t + ""))
    },
    remove: function () {
      return this.on("end.remove", function (n) {
        return function () {
          var t = this.parentNode;
          for (var e in this.__transition)
            if (+e !== n) return;
          t && t.removeChild(this)
        }
      }(this._id))
    },
    tween: function (t, e) {
      var n = this._id;
      if (t += "", arguments.length < 2) {
        for (var r, i = Fu(this.node(), n).tween, a = 0, o = i.length; a < o; ++a)
          if ((r = i[a]).name === t) return r.value;
        return null
      }
      return this.each((null == e ? function (i, a) {
        var o, l;
        return function () {
          var t = Pu(this, i),
            e = t.tween;
          if (e !== o)
            for (var n = 0, r = (l = o = e).length; n < r; ++n)
              if (l[n].name === a) {
                (l = l.slice()).splice(n, 1);
                break
              }
          t.tween = l
        }
      } : function (a, o, l) {
        var s, u;
        if ("function" != typeof l) throw new Error;
        return function () {
          var t = Pu(this, a),
            e = t.tween;
          if (e !== s) {
            u = (s = e).slice();
            for (var n = {
                name: o,
                value: l
              }, r = 0, i = u.length; r < i; ++r)
              if (u[r].name === o) {
                u[r] = n;
                break
              }
            r === i && u.push(n)
          }
          t.tween = u
        }
      })(n, t, e))
    },
    delay: function (t) {
      var e = this._id;
      return arguments.length ? this.each(("function" == typeof t ? function (t, e) {
        return function () {
          Nu(this, t).delay = +e.apply(this, arguments)
        }
      } : function (t, e) {
        return e = +e,
          function () {
            Nu(this, t).delay = e
          }
      })(e, t)) : Fu(this.node(), e).delay
    },
    duration: function (t) {
      var e = this._id;
      return arguments.length ? this.each(("function" == typeof t ? function (t, e) {
        return function () {
          Pu(this, t).duration = +e.apply(this, arguments)
        }
      } : function (t, e) {
        return e = +e,
          function () {
            Pu(this, t).duration = e
          }
      })(e, t)) : Fu(this.node(), e).duration
    },
    ease: function (t) {
      var e = this._id;
      return arguments.length ? this.each(function (t, e) {
        if ("function" != typeof e) throw new Error;
        return function () {
          Pu(this, t).ease = e
        }
      }(e, t)) : Fu(this.node(), e).ease
    },
    end: function () {
      var i, a, o = this,
        l = o._id,
        s = o.size();
      return new Promise(function (t, e) {
        var n = {
            value: e
          },
          r = {
            value: function () {
              0 == --s && t()
            }
          };
        o.each(function () {
          var t = Pu(this, l),
            e = t.on;
          e !== i && ((a = (i = e).copy())._.cancel.push(n), a._.interrupt.push(n), a._.end.push(r)), t.on = a
        })
      })
    }
  };
  Math.PI, Math.PI;
  var Yu = {
    time: null,
    delay: 0,
    duration: 250,
    ease: function (t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
    }
  };

  function Iu(t, e) {
    for (var n; !(n = t.__transition) || !(n = n[e]);)
      if (!(t = t.parentNode)) return Yu.time = pu(), Yu;
    return n
  }

  function Vu() {
    Ni.selectAll("g").select("rect").style("opacity", function (t) {
      if (!1 === t.display.visible) return 0;
      var e = Ls(t),
        n = e || 1 == t.depth ? 1 : .2,
        r = 1 == t.depth || e ? .8 : 2;
      return n * (t.id === m.hovered_node ? r : 1)
    })
  }

  function Wu(t, e, n) {
    var r = !1 === t ? 0 : 1e3 * m.animation_duration;
    if (Ni.transition().duration(r).style("opacity", "treemap" === m.hierarchy_layout ? 1 : 0).on("end", function () {
        "treemap" !== m.hierarchy_layout && Ni.selectAll("g").remove()
      }), "treemap" === m.hierarchy_layout) {
      Qs(u.root, e, n);
      var i = Ni.selectAll("g").data(u.root.descendants(), function (t) {
          return t.id
        }),
        a = i.enter().append("g").classed("node", !0).attr("transform", function (t) {
          return "translate(" + [t.display.x0, t.display.y0] + ")"
        });
      a.append("rect").style("stroke", "#262624").style("stroke-width", 1).attr("width", function (t) {
        return t.display.x1 - t.display.x0
      }).attr("height", function (t) {
        return t.display.y1 - t.display.y0
      }), a.append("text").classed("text-center", !0).style("pointer-events", "none").style("font-weight", "normal").style("text-anchor", "middle"), a.append("text").classed("text-top", !0).style("pointer-events", "none").style("font-weight", "bold").style("font-size", "11px"), a.merge(i).transition().duration(r).attr("transform", function (t) {
        return "translate(" + [t.display.x0, t.display.y0] + ")"
      }), a.each(mo), a.merge(i).style("pointer-events", function (t) {
        return t.display.visible ? "all" : "none"
      }).select("rect").each(function (t) {
        (function (t, e) {
          I(this).style("fill", Ss).style("display", t.display.visible ? "inline" : "none").style("cursor", t.children && m.zoomed_node_id !== t.id ? "pointer" : "default").transition().duration(e).attr("width", t.display.x1 - t.display.x0).attr("height", t.display.y1 - t.display.y0)
        }).call(this, t, r)
      }), a.merge(i).select("text.text-center").style("fill", m.label_color).each(function (t) {
        (function (t, e) {
          if (t.display.visible && !0 === t.display.leaf) {
            var n = 1.8 * (t.display.x1 - t.display.x0) / t.data.key.length;
            .6 * (n = 16 < n ? 16 : n) > t.display.y1 - t.display.y0 && (n = (t.display.y1 - t.display.y0) / .6), I(this).attr("dy", "0.33em").text(t.data.key).style("display", 2 < n ? "inline" : "none").style("font-size", n + "px")
          }
          I(this).transition().duration(e).style("opacity", !0 === t.display.visible && !0 === t.display.leaf ? 1 : 0).attr("x", .5 * (t.display.x1 - t.display.x0)).attr("y", .5 * (t.display.y1 - t.display.y0))
        }).call(this, t, r)
      }), a.merge(i).select("text.text-top").style("fill", m.label_color).each(function (t) {
        (function (t) {
          if (0 !== t.depth && (I(this).style("display", !0 === t.display.visible && !1 === t.display.leaf ? "inline" : "none"), !1 === t.display.leaf)) {
            var e = t.data.key;
            if (m.zoomed_node_id && m.zoomed_node_id === t.id) {
              var n = Wr(t);
              e = n ? n.join(" | ") : ""
            }
            var r = Ps(e, t.display.x1 - t.display.x0);
            t.display.y1 - t.display.y0 < 14 && (r = "");
            var i = .5 * (Ns() - 16);
            I(this).attr("x", 4 + i).attr("y", 12 + i).text(r.toUpperCase())
          }
        }).call(this, t, r)
      }), i.exit().remove(), Vu()
    }
  }

  function Xu() {
    I(this).on("mouseover", function (t) {
      t.display.visible && !Dr && !1 === m.popup_info.frozen && ($r("updateHighlightedNode", t.id), $r("updatePopup", {
        id: t.id
      }))
    }).on("mouseout", function (t) {
      t.display.visible && !Dr && (event.relatedTarget && "circle" === event.relatedTarget.tagName || event.relatedTarget && "svg" === event.relatedTarget.tagName) && ($r("updateHighlightedNode", null), !1 === m.popup.frozen && $r("hidePopup"))
    }).on("click", function (t) {
      t.display.visible && !Dr && (O.stopPropagation(), $r("zoomToNode", t))
    })
  }
  Y.prototype.interrupt = function (t) {
    return this.each(function () {
      ! function (t, e) {
        var n, r, i, a = t.__transition,
          o = !0;
        if (a) {
          for (i in e = null == e ? null : e + "", a)(n = a[i]).name === e ? (r = n.state > Tu && n.state < Su, n.state = Eu, n.timer.stop(), n.on.call(r ? "interrupt" : "cancel", t, t.__data__, n.index, n.group), delete a[i]) : o = !1;
          o && delete t.__transition
        }
      }(this, t)
    })
  }, Y.prototype.transition = function (t) {
    var e, n;
    t = t instanceof Ru ? (e = t._id, t._name) : (e = Bu(), (n = Yu).time = pu(), null == t ? null : t + "");
    for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
      for (var o, l = r[a], s = l.length, u = 0; u < s; ++u)(o = l[u]) && Lu(o, t, e, u, l, n || Iu(o, e));
    return new Ru(r, this._parents, t, e)
  };
  var $u, Zu, Gu, Qu, Ju = ($u = null, Gu = Zu = 1, Qu = vr, Ku.radius = function (t) {
    return arguments.length ? ($u = function (t) {
      return null == t ? null : mr(t)
    }(t), Ku) : $u
  }, Ku.size = function (t) {
    return arguments.length ? (Zu = +t[0], Gu = +t[1], Ku) : [Zu, Gu]
  }, Ku.padding = function (t) {
    return arguments.length ? (Qu = "function" == typeof t ? t : br(+t), Ku) : Qu
  }, Ku);

  function Ku(t) {
    return t.x = Zu / 2, t.y = Gu / 2, $u ? t.eachBefore(wr($u)).eachAfter(Mr(Qu, .5)).eachBefore(kr(1)) : t.eachBefore(wr(xr)).eachAfter(Mr(vr, 1)).eachAfter(Mr(Qu, t.r / Math.min(Zu, Gu))).eachBefore(kr(Math.min(Zu, Gu) / (2 * t.r))), t
  }

  function tc(t, e, n) {
    var r = e - 2 * Zr.x,
      i = n - 2 * Zr.y;
    r = Math.max(0, r), i = Math.max(0, i);
    var a = Math.min(4, Math.min(r, i));
    Ju.size([r, i]).padding(a), Ju(t);
    var o = gn(),
      l = gn(),
      s = gn();
    o.domain([0, r]).range([0, r]), l.domain([0, i]).range([0, i]);
    var u = void 0;
    if (m.zoomed_node_id) {
      if (!(u = Vr(t, m.zoomed_node_id))) return $r("zoomOut");
      var c = void 0,
        d = void 0;
      i < r ? (c = (d = 2 * u.r) * (r / i), s.range([0, i / d])) : (d = (c = 2 * u.r) * (i / r), s.range([0, r / c]));
      var f = u.x - .5 * c,
        h = u.x + .5 * c,
        p = u.y - .5 * d,
        y = u.y + .5 * d;
      o.domain([f, h]), l.domain([p, y])
    }! function e(t, n, r, i) {
      t.display = {
        x: n(t.x),
        y: r(t.y),
        r: i(t.r)
      }, void 0 !== t.children && t.children.forEach(function (t) {
        e(t, n, r, i)
      })
    }(t, o, l, s),
    function e(t, n) {
      var r = m.num_of_visible_levels;
      t.display.visible = t.depth < n + r + 1, t.display.leaf = !t.children || t.depth === n + r, t.children && t.children.forEach(function (t) {
        e(t, n)
      })
    }(t, u ? u.depth : 0)
  }
  var ec, nc = (ec = document.createElement("canvas").getContext("2d"), function (t, e) {
    return ec.font = e || "10px sans-serif", ec.measureText(t).width
  });
  var rc = gn().domain([30, 60]).range([-.1, 0]).clamp(!0);

  function ic() {
    Pi.selectAll("g").select("circle").style("opacity", function (t) {
      if (!1 === t.display.visible) return 0;
      var e = Ls(t),
        n = e || 1 == t.depth ? 1 : .2,
        r = 1 == t.depth || e ? .8 : 2;
      return n * (t.id === m.hovered_node ? r : 1)
    })
  }

  function ac(t, e, n) {
    var r = !1 === t ? 0 : 1e3 * m.animation_duration;
    if (Pi.transition().duration(r).style("opacity", "circlePacking" === m.hierarchy_layout ? 1 : 0).on("end", function () {
        "circlePacking" !== m.hierarchy_layout && Pi.selectAll("g").remove()
      }), "circlePacking" === m.hierarchy_layout) {
      tc(u.root, e, n);
      var i = Pi.selectAll("g").data(u.root.descendants(), function (t) {
          return t.id
        }),
        a = i.enter().append("g").attr("transform", function (t) {
          return "translate(" + [t.display.x, t.display.y] + ")"
        }).classed("node", !0);
      a.append("circle"), a.append("text").classed("text-center", !0).style("font-weight", "normal").style("text-anchor", "middle").style("pointer-events", "none"), a.append("path").classed("label-path", !0).attr("id", function (t) {
        return "pack-label-path-" + t.id
      }).attr("d", function (t) {
        var e = t.display.r - 10;
        return "M-0.5," + e + " A" + e + "," + e + " 0 1,1 0.5," + e
      }).style("fill", "none"), a.append("text").classed("text-top", !0).append("textPath").attr("href", function (t) {
        return "#pack-label-path-" + t.id
      }).attr("startOffset", "50%").style("text-anchor", "middle").style("pointer-events", "none").style("font-weight", "bold").style("font-size", "11px"), a.merge(i).transition().duration(r).attr("transform", function (t) {
        return "translate(" + [t.display.x, t.display.y] + ")"
      }), a.each(Xu), a.merge(i).select("circle").each(function (t) {
        (function (t, e) {
          I(this).style("fill", Ss).style("display", t.display.visible ? "inline" : "none").style("cursor", t.children && m.zoomed_node_id !== t.id ? "pointer" : "default").transition().duration(e).attr("r", t.display.r)
        }).call(this, t, r)
      }), a.merge(i).select("text.text-center").style("fill", m.label_color).each(function (t) {
        (function (t, e) {
          if (t.display.visible && !0 === t.display.leaf) {
            var n = nc(t.data.key, '10px "Source Sans Pro"'),
              r = 10 * (2 * t.display.r / n);
            r = 16 < (r *= .9) ? 16 : r, I(this).attr("dy", "0.33em").text(t.data.key).style("display", 2 < r ? "inline" : "none").style("font-size", r + "px")
          }
          I(this).transition().duration(e).style("opacity", !0 === t.display.visible && !0 === t.display.leaf ? 1 : 0)
        }).call(this, t, r)
      }), a.merge(i).select("path.label-path").each(function (t) {
        (function (t, e) {
          if (0 !== t.depth) {
            var n = t.display.r - 10;
            I(this).transition().duration(e).attr("d", "M-0.5," + n + " A" + n + "," + n + " 0 1,1 0.5," + n)
          }
        }).call(this, t, r)
      }), a.merge(i).select("text.text-top").style("fill", m.label_color).each(function (t) {
        (function (t) {
          if (0 !== t.depth && (I(this).style("display", !0 === t.display.visible && !1 === t.display.leaf ? "inline" : "none"), !1 === t.display.leaf)) {
            var e = t.data.key;
            if (m.zoomed_node_id && m.zoomed_node_id === t.id) {
              var n = Wr(t);
              e = n ? n.join(" | ") : ""
            }
            var r = Ps(e, 1.5 * Math.PI * t.display.r);
            t.display.r < 30 && (r = ""), I(this).select("textPath").style("letter-spacing", function (t) {
              return rc(t.display.r) + "em"
            }).text(r.toUpperCase())
          }
        }).call(this, t, r)
      }), i.exit().remove(), ic()
    }
  }

  function oc() {
    var e = this;
    I(this).on("mouseover", function (t) {
      t.display.visible && !Dr && (!1 === m.popup_info.frozen && ($r("updateHighlightedNode", t.id), $r("updatePopup", {
        id: t.id
      })), I(e).raise())
    }).on("mouseout", function (t) {
      t.display.visible && !Dr && (event.relatedTarget && "path" === event.relatedTarget.tagName || event.relatedTarget && "svg" === event.relatedTarget.tagName) && ($r("updateHighlightedNode", null), !1 === m.popup_info.frozen && $r("hidePopup"))
    }).on("click", function (t) {
      t.display.visible && !Dr && (O.stopPropagation(), $r("zoomToNode", t))
    })
  }
  var lc, sc, uc, cc, dc = (uc = 0, cc = !(sc = lc = 1), fc.round = function (t) {
    return arguments.length ? (cc = !!t, fc) : cc
  }, fc.size = function (t) {
    return arguments.length ? (lc = +t[0], sc = +t[1], fc) : [lc, sc]
  }, fc.padding = function (t) {
    return arguments.length ? (uc = +t, fc) : uc
  }, fc);

  function fc(t) {
    var e = t.height + 1;
    return t.x0 = t.y0 = uc, t.x1 = lc, t.y1 = sc / e, t.eachBefore(function (a, o) {
      return function (t) {
        t.children && Tr(t, t.x0, a * (t.depth + 1) / o, t.x1, a * (t.depth + 2) / o);
        var e = t.x0,
          n = t.y0,
          r = t.x1 - uc,
          i = t.y1 - uc;
        r < e && (e = r = (e + r) / 2), i < n && (n = i = (n + i) / 2), t.x0 = e, t.y0 = n, t.x1 = r, t.y1 = i
      }
    }(sc, e)), cc && t.eachBefore(zr), t
  }

  function hc(t, e, n) {
    var r = .5 * Math.min(e - 2 * Gr.x, n - 2 * Gr.y),
      i = Fs();
    dc.size([2 * Math.PI, i]), dc(t);
    var a = gn().range([r / 100 * m.sunburst_inner_radius, r]).clamp(!0),
      o = gn().range([0, 2 * Math.PI]).clamp(!0),
      l = void 0,
      s = void 0,
      u = 1,
      c = void 0;
    if (m.zoomed_node_id) {
      if (!(c = Vr(t, m.zoomed_node_id))) return $r("zoomOut");
      l = u = c.depth, s = Math.min(u + m.num_of_visible_levels, i), a.domain([l, s]), o.domain([c.x0, c.x1])
    } else a.domain([1, Math.min(1 + m.num_of_visible_levels, i)]), o.domain([0, 2 * Math.PI]);
    ! function e(t, n, r) {
      t.display = t.display || {}, t.display.a0 = r(t.x0), t.display.a1 = r(t.x1), t.display.r0 = n(t.y0), t.display.r1 = n(t.y1), t.display.rMid = .5 * (t.display.r0 + t.display.r1), void 0 !== t.children && t.children.forEach(function (t) {
        e(t, n, r)
      })
    }(t, a, o),
    function e(t, n) {
      t.display = t.display || {}, t.display.visible = !0, t.display.opacity = Math.pow(m.sunburst_depth_fade, t.depth - 1), void 0 !== t.children && t.children.forEach(function (t) {
        e(t, n)
      })
    }(t, u),
    function e(t, n) {
      n && n.id === t.id ? t.display.cursorType = "default" : 0 === t.height ? t.display.cursorType = "default" : t.display.cursorType = "pointer", void 0 !== t.children && t.children.forEach(function (t) {
        e(t, n)
      })
    }(t, c),
    function e(t) {
      var n = t.display.r1 - t.display.r0,
        r = t.display.rMid * (t.display.a1 - t.display.a0),
        i = "radial" === m.sunburst_labelling || "circular" !== m.sunburst_labelling && r < n;
      t.display.radialLabel = "", i && 0 < t.depth && 10 < t.display.rMid * (t.display.a1 - t.display.a0) && (t.display.radialLabel = Ps(t.data.key, .9 * n)), t.display.radialLabelOpacity = "" === t.display.radialLabel ? 0 : 1, t.display.circularLabel = "", !i && 0 < t.depth && 10 < t.display.r1 - t.display.r0 && (t.display.circularLabel = Ps(t.data.key, .9 * r)), t.display.circularLabelOpacity = "" === t.display.circularLabel ? 0 : 1, t.display.boldLabels = m.sunburst_bold_labels, void 0 !== t.children && t.children.forEach(function (t) {
        e(t)
      })
    }(t)
  }
  var pc = Math.PI,
    yc = 2 * pc,
    _c = 1e-6,
    gc = yc - _c;

  function mc() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
  }

  function vc() {
    return new mc
  }

  function bc(t) {
    return function () {
      return t
    }
  }
  mc.prototype = vc.prototype = {
    constructor: mc,
    moveTo: function (t, e) {
      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e)
    },
    closePath: function () {
      null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
    },
    lineTo: function (t, e) {
      this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e)
    },
    quadraticCurveTo: function (t, e, n, r) {
      this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r)
    },
    bezierCurveTo: function (t, e, n, r, i, a) {
      this._ += "C" + +t + "," + +e + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a)
    },
    arcTo: function (t, e, n, r, i) {
      t = +t, e = +e, n = +n, r = +r, i = +i;
      var a = this._x1,
        o = this._y1,
        l = n - t,
        s = r - e,
        u = a - t,
        c = o - e,
        d = u * u + c * c;
      if (i < 0) throw new Error("negative radius: " + i);
      if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
      else if (_c < d)
        if (Math.abs(c * l - s * u) > _c && i) {
          var f = n - a,
            h = r - o,
            p = l * l + s * s,
            y = f * f + h * h,
            _ = Math.sqrt(p),
            g = Math.sqrt(d),
            m = i * Math.tan((pc - Math.acos((p + d - y) / (2 * _ * g))) / 2),
            v = m / g,
            b = m / _;
          Math.abs(v - 1) > _c && (this._ += "L" + (t + v * u) + "," + (e + v * c)), this._ += "A" + i + "," + i + ",0,0," + +(u * h < c * f) + "," + (this._x1 = t + b * l) + "," + (this._y1 = e + b * s)
        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
      else;
    },
    arc: function (t, e, n, r, i, a) {
      t = +t, e = +e, a = !!a;
      var o = (n = +n) * Math.cos(r),
        l = n * Math.sin(r),
        s = t + o,
        u = e + l,
        c = 1 ^ a,
        d = a ? r - i : i - r;
      if (n < 0) throw new Error("negative radius: " + n);
      null === this._x1 ? this._ += "M" + s + "," + u : (Math.abs(this._x1 - s) > _c || Math.abs(this._y1 - u) > _c) && (this._ += "L" + s + "," + u), n && (d < 0 && (d = d % yc + yc), gc < d ? this._ += "A" + n + "," + n + ",0,1," + c + "," + (t - o) + "," + (e - l) + "A" + n + "," + n + ",0,1," + c + "," + (this._x1 = s) + "," + (this._y1 = u) : _c < d && (this._ += "A" + n + "," + n + ",0," + +(pc <= d) + "," + c + "," + (this._x1 = t + n * Math.cos(i)) + "," + (this._y1 = e + n * Math.sin(i))))
    },
    rect: function (t, e, n, r) {
      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +r + "h" + -n + "Z"
    },
    toString: function () {
      return this._
    }
  };
  var xc = Math.abs,
    wc = Math.atan2,
    Mc = Math.cos,
    kc = Math.max,
    zc = Math.min,
    Tc = Math.sin,
    Ac = Math.sqrt,
    Cc = 1e-12,
    Sc = Math.PI,
    Ec = Sc / 2,
    Lc = 2 * Sc;

  function Nc(t) {
    return 1 <= t ? Ec : t <= -1 ? -Ec : Math.asin(t)
  }

  function Pc(t) {
    return t.innerRadius
  }

  function Fc(t) {
    return t.outerRadius
  }

  function Oc(t) {
    return t.startAngle
  }

  function Hc(t) {
    return t.endAngle
  }

  function Uc(t) {
    return t && t.padAngle
  }

  function Dc(t, e, n, r, i, a, o) {
    var l = t - n,
      s = e - r,
      u = (o ? a : -a) / Ac(l * l + s * s),
      c = u * s,
      d = -u * l,
      f = t + c,
      h = e + d,
      p = n + c,
      y = r + d,
      _ = (f + p) / 2,
      g = (h + y) / 2,
      m = p - f,
      v = y - h,
      b = m * m + v * v,
      x = i - a,
      w = f * y - p * h,
      M = (v < 0 ? -1 : 1) * Ac(kc(0, x * x * b - w * w)),
      k = (w * v - m * M) / b,
      z = (-w * m - v * M) / b,
      T = (w * v + m * M) / b,
      A = (-w * m + v * M) / b,
      C = k - _,
      S = z - g,
      E = T - _,
      L = A - g;
    return E * E + L * L < C * C + S * S && (k = T, z = A), {
      cx: k,
      cy: z,
      x01: -c,
      y01: -d,
      x11: k * (i / x - 1),
      y11: z * (i / x - 1)
    }
  }

  function jc(t) {
    return t < 0 ? -1 : 1
  }

  function Rc(t, e, n) {
    var r = t._x1 - t._x0,
      i = e - t._x1,
      a = (t._y1 - t._y0) / (r || i < 0 && -0),
      o = (n - t._y1) / (i || r < 0 && -0),
      l = (a * i + o * r) / (r + i);
    return (jc(a) + jc(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(l)) || 0
  }

  function Bc(t, e) {
    var n = t._x1 - t._x0;
    return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e
  }

  function qc(t, e, n) {
    var r = t._x0,
      i = t._y0,
      a = t._x1,
      o = t._y1,
      l = (a - r) / 3;
    t._context.bezierCurveTo(r + l, i + l * e, a - l, o - l * n, a, o)
  }

  function Yc(t) {
    this._context = t
  }

  function Ic(t) {
    this._context = t
  }
  Yc.prototype = {
    areaStart: function () {
      this._line = 0
    },
    areaEnd: function () {
      this._line = NaN
    },
    lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          qc(this, this._t0, Bc(this, this._t0))
      }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function (t, e) {
      var n = NaN;
      if (e = +e, (t = +t) !== this._x1 || e !== this._y1) {
        switch (this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, qc(this, Bc(this, n = Rc(this, t, e)), n);
            break;
          default:
            qc(this, this._t0, n = Rc(this, t, e))
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = n
      }
    }
  }, (function (t) {
    this._context = new Ic(t)
  }.prototype = Object.create(Yc.prototype)).point = function (t, e) {
    Yc.prototype.point.call(this, e, t)
  }, Ic.prototype = {
    moveTo: function (t, e) {
      this._context.moveTo(e, t)
    },
    closePath: function () {
      this._context.closePath()
    },
    lineTo: function (t, e) {
      this._context.lineTo(e, t)
    },
    bezierCurveTo: function (t, e, n, r, i, a) {
      this._context.bezierCurveTo(e, t, r, n, a, i)
    }
  };
  var Vc, Wc, Xc, $c, Zc, Gc, Qc, Jc, Kc = (Vc = Pc, Wc = Fc, Xc = bc(0), Zc = Oc, Gc = Hc, Qc = Uc, Jc = $c = null, td.centroid = function () {
    var t = (+Vc.apply(this, arguments) + +Wc.apply(this, arguments)) / 2,
      e = (+Zc.apply(this, arguments) + +Gc.apply(this, arguments)) / 2 - Sc / 2;
    return [Mc(e) * t, Tc(e) * t]
  }, td.innerRadius = function (t) {
    return arguments.length ? (Vc = "function" == typeof t ? t : bc(+t), td) : Vc
  }, td.outerRadius = function (t) {
    return arguments.length ? (Wc = "function" == typeof t ? t : bc(+t), td) : Wc
  }, td.cornerRadius = function (t) {
    return arguments.length ? (Xc = "function" == typeof t ? t : bc(+t), td) : Xc
  }, td.padRadius = function (t) {
    return arguments.length ? ($c = null == t ? null : "function" == typeof t ? t : bc(+t), td) : $c
  }, td.startAngle = function (t) {
    return arguments.length ? (Zc = "function" == typeof t ? t : bc(+t), td) : Zc
  }, td.endAngle = function (t) {
    return arguments.length ? (Gc = "function" == typeof t ? t : bc(+t), td) : Gc
  }, td.padAngle = function (t) {
    return arguments.length ? (Qc = "function" == typeof t ? t : bc(+t), td) : Qc
  }, td.context = function (t) {
    return arguments.length ? (Jc = null == t ? null : t, td) : Jc
  }, td);

  function td() {
    var t, e, n = +Vc.apply(this, arguments),
      r = +Wc.apply(this, arguments),
      i = Zc.apply(this, arguments) - Ec,
      a = Gc.apply(this, arguments) - Ec,
      o = xc(a - i),
      l = i < a;
    if (Jc = Jc || (t = vc()), r < n && (e = r, r = n, n = e), Cc < r)
      if (Lc - Cc < o) Jc.moveTo(r * Mc(i), r * Tc(i)), Jc.arc(0, 0, r, i, a, !l), Cc < n && (Jc.moveTo(n * Mc(a), n * Tc(a)), Jc.arc(0, 0, n, a, i, l));
      else {
        var s, u, c = i,
          d = a,
          f = i,
          h = a,
          p = o,
          y = o,
          _ = Qc.apply(this, arguments) / 2,
          g = Cc < _ && ($c ? +$c.apply(this, arguments) : Ac(n * n + r * r)),
          m = zc(xc(r - n) / 2, +Xc.apply(this, arguments)),
          v = m,
          b = m;
        if (Cc < g) {
          var x = Nc(g / n * Tc(_)),
            w = Nc(g / r * Tc(_));
          (p -= 2 * x) > Cc ? (f += x *= l ? 1 : -1, h -= x) : (p = 0, f = h = (i + a) / 2), (y -= 2 * w) > Cc ? (c += w *= l ? 1 : -1, d -= w) : (y = 0, c = d = (i + a) / 2)
        }
        var M = r * Mc(c),
          k = r * Tc(c),
          z = n * Mc(h),
          T = n * Tc(h);
        if (Cc < m) {
          var A, C = r * Mc(d),
            S = r * Tc(d),
            E = n * Mc(f),
            L = n * Tc(f);
          if (o < Sc && (A = function (t, e, n, r, i, a, o, l) {
              var s = n - t,
                u = r - e,
                c = o - i,
                d = l - a,
                f = d * s - c * u;
              if (!(f * f < Cc)) return [t + (f = (c * (e - a) - d * (t - i)) / f) * s, e + f * u]
            }(M, k, E, L, C, S, z, T))) {
            var N = M - A[0],
              P = k - A[1],
              F = C - A[0],
              O = S - A[1],
              H = 1 / Tc(function (t) {
                return 1 < t ? 0 : t < -1 ? Sc : Math.acos(t)
              }((N * F + P * O) / (Ac(N * N + P * P) * Ac(F * F + O * O))) / 2),
              U = Ac(A[0] * A[0] + A[1] * A[1]);
            v = zc(m, (n - U) / (H - 1)), b = zc(m, (r - U) / (1 + H))
          }
        }
        Cc < y ? Cc < b ? (s = Dc(E, L, M, k, r, b, l), u = Dc(C, S, z, T, r, b, l), Jc.moveTo(s.cx + s.x01, s.cy + s.y01), b < m ? Jc.arc(s.cx, s.cy, b, wc(s.y01, s.x01), wc(u.y01, u.x01), !l) : (Jc.arc(s.cx, s.cy, b, wc(s.y01, s.x01), wc(s.y11, s.x11), !l), Jc.arc(0, 0, r, wc(s.cy + s.y11, s.cx + s.x11), wc(u.cy + u.y11, u.cx + u.x11), !l), Jc.arc(u.cx, u.cy, b, wc(u.y11, u.x11), wc(u.y01, u.x01), !l))) : (Jc.moveTo(M, k), Jc.arc(0, 0, r, c, d, !l)) : Jc.moveTo(M, k), Cc < n && Cc < p ? Cc < v ? (s = Dc(z, T, C, S, n, -v, l), u = Dc(M, k, E, L, n, -v, l), Jc.lineTo(s.cx + s.x01, s.cy + s.y01), v < m ? Jc.arc(s.cx, s.cy, v, wc(s.y01, s.x01), wc(u.y01, u.x01), !l) : (Jc.arc(s.cx, s.cy, v, wc(s.y01, s.x01), wc(s.y11, s.x11), !l), Jc.arc(0, 0, n, wc(s.cy + s.y11, s.cx + s.x11), wc(u.cy + u.y11, u.cx + u.x11), l), Jc.arc(u.cx, u.cy, v, wc(u.y11, u.x11), wc(u.y01, u.x01), !l))) : Jc.arc(0, 0, n, h, f, l) : Jc.lineTo(z, T)
      }
    else Jc.moveTo(0, 0);
    if (Jc.closePath(), t) return Jc = null, t + "" || null
  }

  function ed() {
    Fi.selectAll("g").select("path").style("opacity", function (t) {
      return !1 === t.display.visible ? 0 : Ls(t) || 1 == t.depth ? 1 : t.display.opacity
    })
  }

  function nd(t, e, n) {
    var r = !1 === t ? 0 : 1e3 * m.animation_duration;
    if (Fi.transition().duration(r).style("opacity", "sunburst" === m.hierarchy_layout ? 1 : 0).on("end", function () {
        "sunburst" !== m.hierarchy_layout && Fi.selectAll("g").remove()
      }), "sunburst" === m.hierarchy_layout) {
      hc(u.root, e, n), Fi.attr("transform", "translate(" + .5 * e + ", " + .5 * n + ")");
      var i = Fi.selectAll("g").data(u.root.descendants(), function (t) {
          return t.id
        }),
        a = i.enter().append("g").classed("node", !0);
      a.append("path").classed("segment", !0), a.append("text").classed("radial-label", !0).style("text-anchor", "middle").attr("dy", "0.33em").style("pointer-events", "none"), a.append("path").classed("label-path", !0).style("fill", "none").attr("id", function (t) {
        return "sunburst-label-path-" + t.id
      }), a.append("text").classed("circular-label", !0).attr("dy", "0.33em").append("textPath").attr("xlink:xlink:href", function (t) {
        return "#sunburst-label-path-" + t.id
      }).attr("startOffset", "50%").style("text-anchor", "middle").style("pointer-events", "none"), a.each(oc), a.merge(i).each(function (t) {
        (function (t, e) {
          0 !== t.depth && (I(this).style("cursor", t.display.cursorType).select("path").style("fill", Es).style("stroke", "#fff").style("stroke-width", "0.5").style("display", t.display.visible ? "inline" : "none"), "" !== t.display.radialLabel && I(this).select("text.radial-label").text(t.display.radialLabel), "" !== t.display.circularLabel && I(this).select("text.circular-label textPath").text(t.display.circularLabel), I(this).select("text.radial-label").style("font-weight", t.display.boldLabels ? "bold" : "normal"), I(this).select("text.circular-label textPath").style("font-weight", t.display.boldLabels ? "bold" : "normal"), I(this).transition().duration(e).tween("sunburst", function (t) {
            var c = this,
              d = I(c).select("path.segment"),
              f = I(c).select("text.radial-label"),
              h = I(c).select("text.circular-label"),
              p = I(c).select("path.label-path");
            c.__curTweenState = c.__curTweenState || {
              a0: t.display.a0,
              a1: t.display.a1,
              r0: t.display.r0,
              r1: t.display.r1,
              radialLabelOpacity: t.display.radialLabelOpacity,
              circularLabelOpacity: t.display.circularLabelOpacity
            };
            var e = c.__curTweenState,
              y = Ne(e.a0, t.display.a0),
              _ = Ne(e.a1, t.display.a1),
              g = Ne(e.r0, t.display.r0),
              m = Ne(e.r1, t.display.r1),
              v = Ne(e.radialLabelOpacity, t.display.radialLabelOpacity),
              b = Ne(e.circularLabelOpacity, t.display.circularLabelOpacity);
            return function (t) {
              c.__curTweenState.a0 = y(t), c.__curTweenState.a1 = _(t), c.__curTweenState.r0 = g(t), c.__curTweenState.r1 = m(t), c.__curTweenState.radialLabelOpacity = v(t), c.__curTweenState.circularLabelOpacity = b(t), d.attr("d", Kc({
                startAngle: y(t),
                endAngle: _(t),
                innerRadius: g(t),
                outerRadius: m(t)
              }));
              var e = As(.5 * (y(t) + _(t))) - 90,
                n = .5 * (g(t) + m(t));
              f.style("opacity", v(t)).attr("transform", 90 < e ? "rotate(" + (e - 180) + ")translate(" + -n + ", 0)" : "rotate(" + e + ")translate(" + n + ", 0)"), h.style("opacity", b(t));
              var r = n * Math.sin(y(t)) + 1e-4,
                i = -n * Math.cos(y(t)),
                a = n * Math.sin(_(t)) - 1e-4,
                o = -n * Math.cos(_(t)),
                l = _(t) - y(t) >= Math.PI ? 1 : 0,
                s = .5 * (y(t) + _(t)),
                u = s > .5 * Math.PI && s < 1.5 * Math.PI ? "M" + a + "," + o + " A" + n + "," + n + " 0 " + l + ",0 " + r + "," + i : "M" + r + "," + i + " A" + n + "," + n + " 0 " + l + ",1 " + a + "," + o;
              p.attr("d", u)
            }
          }).on("end", function () {
            I(this).select("text.radial-label").text(function (t) {
              return t.display.radialLabel
            }), I(this).select("text.circular-label textPath").text(function (t) {
              return t.display.circularLabel
            })
          }))
        }).call(this, t, r)
      }), a.merge(i).select(".radial-label").style("fill", m.label_color), a.merge(i).select(".circular-label").style("fill", m.label_color), i.exit().remove(), ed()
    }
  }

  function rd() {
    I(this).select("rect").on("mouseover", function (t) {
      Dr || !1 === m.popup_info.frozen && ($r("updateHighlightedNode", t.id), $r("updatePopup", {
        id: t.id
      }))
    }).on("mouseout", function () {
      Dr || event.relatedTarget && "rect" === event.relatedTarget.tagName && ($r("updateHighlightedNode", null), !1 === m.popup_info.frozen && $r("hidePopup"))
    }).on("click", function (t) {
      Dr || (O.stopPropagation(), $r("zoomToNode", t))
    }), I(this).select(".axis-label").on("click", function (t) {
      Dr || (O.stopPropagation(), $r("zoomToNode", t))
    })
  }
  var id = void 0;

  function ad(t) {
    t.display.barLabelText = Ps(t.data.key, .9 * t.display.l), t.display.barLabelX = t.display.x + .5 * t.display.l, t.display.barLabelY = t.display.y + .5 * t.display.thickness, t.display.axisLabelY = t.display.valueLabelY = t.display.barLabelY, t.display.valueLabelX = t.display.x + t.display.l + 10, id = oi(jr.getFormatterFunction()), t.display.valueLabelText = id(t.value)
  }

  function od(t, e, n, r) {
    t.display = t.display || {};
    var i = Fs(),
      a = Math.min(i - 1 - e.depth, m.num_of_visible_levels);
    t.display.visible = Xr(t, e) && t.depth - e.depth === a, t.display.axisLabelText = 0 === t.depth ? "" : Ps(t.data.key.toUpperCase(), m.bar_axis_label_size), t.display.axisLabelVisible = Xr(t, e) && e.depth === t.depth - 1, t.display.valueLabelVisible = m.bar_show_value_label && Xr(t, e) && e.depth === t.depth - 1, t.display.fill = Es(t), t.children && (function (t, e) {
      for (var n = e.ancestors(), r = !1, i = 0; i < n.length; i++) n[i].id === t.id && (r = !0);
      return r
    }(t, e) ? function (t, e) {
      var n = [0, Math.max(e - 35, 0)],
        r = mt(t.children, function (t) {
          return t.value
        }),
        i = gn().domain([0, r]).range(n);
      m.bar_max_value && i.domain([0, m.bar_max_value]);
      var a = m.bar_bar_thickness + m.bar_bar_padding;
      t.children.forEach(function (t, e) {
        t.display = t.display || {}, t.display.x = 0, t.display.l = i(t.value), t.display.y = e * a, t.display.thickness = m.bar_bar_thickness, ad(t), t.display.barLabelVisible = !1
      })
    }(t, n) : function (e) {
      var n = gn().domain([0, e.value]).range([0, e.display.l]),
        r = e.display.x;
      id = oi(jr.getFormatterFunction()), e.children.forEach(function (t) {
        t.display = t.display || {}, t.display.x = r, t.display.l = n(t.value), t.display.y = e.display.y, t.display.thickness = e.display.thickness, ad(t), t.display.barLabelVisible = !0, r += n(t.value)
      })
    }(t), t.children.forEach(function (t) {
      od(t, e, n, r)
    }))
  }

  function ld(t, e, n) {
    var r = !1 === t ? 0 : 1e3 * m.animation_duration;
    if (Oi.transition().duration(r).style("opacity", "bar" === m.hierarchy_layout ? 1 : 0).on("end", function () {
        "bar" !== m.hierarchy_layout && Oi.select(".bars").selectAll("*").remove()
      }), "bar" === m.hierarchy_layout) {
      var i = e - 2 * Qr.x - m.bar_axis_label_size;
      i -= m.bar_show_value_label ? m.bar_value_label_size : 0;
      var a = Os();
      ! function (t, e, n, r) {
        od(t, e, n, r)
      }(u.root, a, i, n);
      var o = u.root.descendants().slice(1);
      o.reverse(), Oi.attr("transform", "translate(" + Qr.x + ", " + Qr.y + ")");
      var l = Oi.select(".bars").attr("transform", "translate(" + m.bar_axis_label_size + ", " + Jr + ")").selectAll("g.node").data(o, function (t) {
          return t.id
        }),
        s = l.enter().append("g").classed("node", !0);
      s.append("rect").attr("x", function (t) {
          return t.display.x
        }).attr("y", function (t) {
          return t.display.y
        }).attr("width", function (t) {
          return t.display.l
        }).attr("height", function (t) {
          return t.display.thickness
        }).style("fill", function (t) {
          return t.display.fill
        }).style("stroke", "white"), s.append("text").classed("bar-label", !0).attr("x", function (t) {
          return t.display.barLabelX
        }).attr("y", function (t) {
          return t.display.barLabelY
        }).attr("dy", "0.33em").style("text-anchor", "middle").style("opacity", 0).style("pointer-events", "none"), s.append("text").classed("axis-label", !0).attr("x", -5).attr("y", function (t) {
          return t.display.axisLabelY
        }).attr("dy", "0.33em").style("fill", "#555").style("font-weight", "bold").style("opacity", 0).style("text-anchor", "end"), s.append("text").classed("value-label", !0).attr("x", function (t) {
          return t.display.valueLabelX
        }).attr("y", function (t) {
          return t.display.valueLabelY
        }).attr("dy", "0.33em").style("fill", "#555").style("font-weight", "bold").style("opacity", 0).style("pointer-events", "none"), s.each(rd), s.merge(l).style("cursor", function (t) {
          return t.children ? "pointer" : "default"
        }).each(function (t) {
          (function (t, e) {
            I(this).select("rect").transition().duration(e).attr("x", function (t) {
              return t.display.x
            }).attr("y", function (t) {
              return t.display.y
            }).attr("width", function (t) {
              return t.display.l
            }).attr("height", function (t) {
              return t.display.thickness
            }).style("fill", function (t) {
              return t.display.fill
            }).style("opacity", function (t) {
              return t.display.visible ? 1 : 0
            }).style("pointer-events", function (t) {
              return t.display.visible ? "all" : "none"
            }), I(this).select("text.bar-label").transition().duration(e).attr("x", function (t) {
              return t.display.barLabelX
            }).attr("y", function (t) {
              return t.display.barLabelY
            }).text(function (t) {
              return t.display.barLabelText
            }).style("opacity", function (t) {
              return t.display.visible && t.display.barLabelVisible ? 1 : 0
            }), I(this).select("text.axis-label").transition().duration(e).attr("y", function (t) {
              return t.display.axisLabelY
            }).text(function (t) {
              return t.display.axisLabelText
            }).style("opacity", function (t) {
              return t.display.axisLabelVisible ? 1 : 0
            }).style("pointer-events", function (t) {
              return t.display.axisLabelVisible ? "all" : "none"
            }), I(this).select("text.value-label").transition().duration(e).attr("x", function (t) {
              return t.display.valueLabelX
            }).attr("y", function (t) {
              return t.display.valueLabelY
            }).text(function (t) {
              return t.display.valueLabelText
            }).style("opacity", function (t) {
              return t.display.valueLabelVisible ? 1 : 0
            })
          }).call(this, t, r)
        }), s.merge(l).select(".bar-label").style("fill", m.label_color), l.exit().remove(),
        function (t, e) {
          var n = t.ancestors().slice(0, -1).reverse(),
            r = e.select(".breadcrumb").attr("transform", "translate(" + m.bar_axis_label_size + ", 30)").select("text").selectAll("tspan.item").data(n),
            i = r.enter().append("tspan").classed("item", !0);
          i.append("tspan").classed("label", !0).text(function (t) {
            return t.data.key.toUpperCase()
          }).on("click", function (t) {
            Dr || (O.stopPropagation(), $r("zoomToNode", t))
          }), i.append("tspan").classed("separator", !0).text(" > "), i.merge(r), r.exit().remove()
        }(a, Oi)
    }
  }

  function sd(t, e) {
    return {
      x: e * Math.cos(t),
      y: e * Math.sin(t)
    }
  }

  function ud(t, e, n) {
    if (!t) return "";
    var r = nc(t, e),
      i = nc("…", e);
    if (n < r) {
      var a = .8 * n / (r + i),
        o = Math.max(Math.floor(a * t.length), 0);
      t = t.slice(0, o) + "…"
    }
    return t
  }

  function cd(t, u, c, d, f, h, p, y, _, g) {
    t.each(function (t) {
      var e, n = As(y(t.data.x)),
        r = _(t.data.y),
        i = t.data.value,
        a = t.data.value < 0,
        o = 0 === t.height || t.depth === u.depth + m.num_of_visible_levels,
        l = 0 === t.depth;
      t.data.display.rotate = n, t.data.display.translate = r, t.data.display.parent_rotate = As(y(t.data.parent_x)), t.data.display.parent_translate = _(t.data.parent_y), t.data.display.cp2_translate = t.depth === u.depth + 1 ? 0 : (t.data.display.translate + t.data.display.parent_translate) / 2, t.data.display.bar_width = f, t.data.display.bar_length = o ? Math.abs(g(i)) : 0, t.data.display.bar_translate = o ? 0 < i ? 0 : -t.data.display.bar_length : 0, t.data.display.circle_opacity = o || l ? 0 : 1, t.data.display.bar_opacity = o ? 1 : 0,
        function (t, e, n, r, i, a, o, l, s, u) {
          var c = {};
          c.normal = n ? "translate(4, 0)" : "translate(8, 0)", i || (c.normal += "translate(" + t.data.display.bar_length + ", 0)"), c.reversed = n ? "rotate(180)translate(-4, 0)" : "rotate(180)translate(-8, 0)", i || (c.reversed += "translate(" + -t.data.display.bar_length + ", 0)");
          var d = -90 < a && a < 90 ? "normal" : "reversed";
          t.data.display.name_label_orientation = d, t.data.id === r.data.id && (t.data.display.name_label_orientation = "normal", c.normal = "rotate(" + -a + ")translate(8, 0)"), t.data.display.name_label_transform = c;
          var f = Math.min(10, Math.floor(.8 * l)),
            h = f + 'px "Source Sans Pro"',
            p = "",
            y = "";
          if (n) {
            var _ = u - 4 - t.data.display.bar_length;
            if (m.radial_tree_show_values) y = oi(jr.getFormatterFunction())(o), _ -= nc(y + " ", h + " bold");
            p = ud(t.data.key, h, _)
          } else e || (p = ud(t.data.key, h, .8 * s));
          t.data.display.label_size = f, t.data.display.name_label = p, t.data.display.value_label = y
        }(t, l, o, u, a, n, i, f, h, p), t.data.display.color = Es(t), m.radial_tree_colored_links ? (e = Rt(t.data.display.color)).opacity = .25 : e = m.radial_tree_link_color, t.data.display.link_color = e;
      var s = sd(Cs(n), r + (o ? t.data.display.bar_length : 0));
      t.data.display.popup = {
        x: .5 * c + s.x,
        y: .5 * d + s.y
      }
    })
  }

  function dd() {
    I(this).on("mouseover", function (t) {
      Dr || !1 === m.popup_info.frozen && ($r("updateHighlightedNode", t.data.id), $r("updatePopup", {
        id: t.data.id
      }))
    }).on("mouseout", function () {
      Dr || event.relatedTarget && "rect" === event.relatedTarget.tagName && ($r("updateHighlightedNode", null), !1 === m.popup_info.frozen && $r("hidePopup"))
    }).on("click", function (t) {
      Dr || (O.stopPropagation(), $r("zoomToNode", Vr(u.root, t.data.id)))
    })
  }

  function fd(t) {
    var e = this,
      n = this._tween.rotate,
      r = this._tween.translate,
      i = Ne(n, t.data.display.rotate),
      a = Ne(r, t.data.display.translate);
    return function (t) {
      I(e).attr("transform", "rotate(" + i(t) + ")").select(".translate-layer").attr("transform", "translate(" + a(t) + ")"), e._tween.rotate = i(t), e._tween.translate = a(t)
    }
  }

  function hd(t, e) {
    Hi.select(".nodes").selectAll("g.node").data(u.root.descendants(), function (t) {
      return t.data.id
    });
    var n = Hi.select(".nodes").selectAll("g.node").data(t.descendants(), function (t) {
      return t.data.id
    });
    n.enter().append("g").each(function (t) {
      (function (t, e) {
        var n = I(this);
        this._tween = {
          rotate: t.data.display.prev_rotate,
          translate: t.data.display.prev_translate
        }, n.classed("node", !0).style("opacity", 0).transition().duration(.5 * e).delay(.5 * e).style("opacity", 1), n.classed("node", !0).attr("transform", function (t) {
          return "rotate(" + t.data.display.prev_rotate + ")"
        }), (n = n.append("g")).classed("translate-layer", !0).attr("transform", function (t) {
          return "translate(" + t.data.display.prev_translate + ")"
        }), n.append("circle").attr("r", 4).style("opacity", 0).style("fill", function (t) {
          return t.data.display.color
        });
        var r = n.append("text").classed("name-label-normal", !0).style("opacity", 0).style("fill", function (t) {
          return t.data.display.color
        }).style("font-size", function (t) {
          return t.data.display.label_size + "px"
        }).attr("dy", "0.33em");
        r.append("tspan").classed("value-label", !0).style("font-weight", "bold"), r.append("tspan").classed("name-label", !0);
        var i = n.append("text").classed("name-label-reversed", !0).style("opacity", 0).style("fill", function (t) {
          return t.data.display.color
        }).style("font-size", function (t) {
          return t.data.display.label_size + "px"
        }).attr("dy", "0.33em");
        i.append("tspan").classed("name-label", !0), i.append("tspan").classed("value-label", !0).style("font-weight", "bold"), n.append("rect").style("opacity", 0).style("fill", function (t) {
          return t.data.display.color
        })
      }).call(this, t, e)
    }).each(dd).merge(n).transition("nodes").duration(e).tween("node", fd), n.exit().each(function () {
      (function (t) {
        I(this).transition().duration(.5 * t).style("opacity", 0), I(this).transition("nodes").duration(t).tween("node", fd).on("end", function () {
          I(this).remove()
        })
      }).call(this, e)
    }), Hi.select(".nodes").selectAll("g.node").transition().delay(e).duration(.1 * e).style("opacity", 1), Hi.select(".nodes").selectAll("g.node").select("circle").transition("nodes").duration(e).style("fill", function (t) {
      return t.data.display.color
    }).style("opacity", function (t) {
      return t.data.display.circle_opacity
    }), Hi.select(".nodes").selectAll("g.node").select("rect").transition("nodes").duration(e).style("fill", function (t) {
      return t.data.display.color
    }).style("opacity", function (t) {
      return t.data.display.bar_opacity
    }).attr("y", function (t) {
      return -.5 * t.data.display.bar_width
    }).attr("x", function (t) {
      return t.data.display.bar_translate
    }).attr("width", function (t) {
      return t.data.display.bar_length
    }).attr("height", function (t) {
      return t.data.display.bar_width
    }), Hi.select(".nodes").selectAll("g.node").select("text.name-label-normal").each(function (t) {
      I(this).select("tspan.value-label").text(t.data.display.value_label + " "), I(this).select("tspan.name-label").text(t.data.display.name_label)
    }).transition().duration(e).style("fill", function (t) {
      return t.data.display.color
    }).style("font-size", function (t) {
      return t.data.display.label_size + "px"
    }).attr("transform", function (t) {
      return t.data.display.name_label_transform.normal
    }).style("opacity", function (t) {
      return "normal" === t.data.display.name_label_orientation ? 1 : 0
    }), Hi.select(".nodes").selectAll("g.node").select("text.name-label-reversed").each(function (t) {
      I(this).select("tspan.name-label").text(t.data.display.name_label), I(this).select("tspan.value-label").text(" " + t.data.display.value_label)
    }).style("text-anchor", "end").transition().duration(e).style("fill", function (t) {
      return t.data.display.color
    }).style("font-size", function (t) {
      return t.data.display.label_size + "px"
    }).attr("transform", function (t) {
      return t.data.display.name_label_transform.reversed
    }).style("opacity", function (t) {
      return "normal" === t.data.display.name_label_orientation ? 0 : 1
    })
  }

  function pd(t) {
    var l = this;
    this._tween = this._tween || {};
    var e = this._tween.rotate || 0,
      n = this._tween.translate || 0,
      r = this._tween.parent_rotate || 0,
      i = this._tween.parent_translate || 0,
      a = this._tween.cp2_translate || 0,
      s = Ne(e, t.data.display.rotate),
      u = Ne(n, t.data.display.translate),
      c = Ne(r, t.data.display.parent_rotate),
      d = Ne(i, t.data.display.parent_translate),
      f = Ne(a, t.data.display.cp2_translate);
    return function (t) {
      var e = s(t),
        n = u(t),
        r = c(t),
        i = d(t),
        a = f(t),
        o = function (t, e, n, r, i) {
          var a = sd(Cs(t), e),
            o = sd(Cs(t), (e + r) / 2),
            l = sd(Cs(n), i),
            s = sd(Cs(n), r);
          return "M" + a.x + "," + a.y + "C" + o.x + "," + o.y + " " + l.x + "," + l.y + " " + s.x + "," + s.y
        }(e, n, r, i, a);
      I(l).attr("d", o), l._tween.rotate = e, l._tween.translate = n, l._tween.parent_rotate = r, l._tween.parent_translate = i, l._tween.cp2_translate = a
    }
  }

  function yd(t, e) {
    Hi.select(".links").selectAll("path").data(u.root.descendants().slice(1), function (t) {
      return t.data.id
    });
    var n = Hi.select(".links").selectAll("path").data(t.descendants().slice(1), function (t) {
      return t.data.id
    });
    n.enter().append("path").each(function (t) {
      (function (t, e) {
        var n = I(this);
        this._tween = {
          rotate: t.data.display.prev_rotate,
          translate: t.data.display.prev_translate,
          parent_rotate: t.data.display.prev_parent_rotate,
          parent_translate: t.data.display.prev_parent_translate,
          cp2_translate: t.data.display.cp2_translate
        }, n.classed("link", !0).style("opacity", 0).transition().duration(.5 * e).delay(.5 * e).style("opacity", 1)
      }).call(this, t, e)
    }).merge(n).transition("links").duration(e).style("stroke", function (t) {
      return t.data.display.link_color
    }).style("fill", "none").tween("link", pd), n.exit().each(function () {
      (function (t) {
        I(this).transition().duration(.5 * t).style("opacity", 0), I(this).transition("links").duration(t).tween("link", pd).on("end", function () {
          I(this).remove()
        })
      }).call(this, e)
    }), Hi.select(".links").selectAll("path").transition().delay(e).duration(.1 * e).style("opacity", 1)
  }
  var _d, gd, md, vd, bd, xd, wd, Md, kd, zd, Td, Ad = 2 * Math.PI,
    Cd = {},
    Sd = (Md = Ar, zd = kd = 1, Td = null, Ed.separation = function (t) {
      return arguments.length ? (Md = t, Ed) : Md
    }, Ed.size = function (t) {
      return arguments.length ? (Td = !1, kd = +t[0], zd = +t[1], Ed) : Td ? null : [kd, zd]
    }, Ed.nodeSize = function (t) {
      return arguments.length ? (Td = !0, kd = +t[0], zd = +t[1], Ed) : Td ? [kd, zd] : null
    }, Ed).separation(function () {
      return 1
    });

  function Ed(t) {
    var e = function (t) {
      for (var e, n, r, i, a, o = new Er(t, 0), l = [o]; e = l.pop();)
        if (r = e._.children)
          for (e.children = new Array(a = r.length), i = a - 1; 0 <= i; --i) l.push(n = e.children[i] = new Er(r[i], i)), n.parent = e;
      return (o.parent = new Er(null, 0)).children = [o], o
    }(t);
    if (e.eachAfter(Ld), e.parent.m = -e.z, e.eachBefore(Nd), Td) t.eachBefore(Pd);
    else {
      var n = t,
        r = t,
        i = t;
      t.eachBefore(function (t) {
        t.x < n.x && (n = t), t.x > r.x && (r = t), t.depth > i.depth && (i = t)
      });
      var a = n === r ? 1 : Md(n, r) / 2,
        o = a - n.x,
        l = kd / (r.x + a + o),
        s = zd / (i.depth || 1);
      t.eachBefore(function (t) {
        t.x = (t.x + o) * l, t.y = t.depth * s
      })
    }
    return t
  }

  function Ld(t) {
    var e = t.children,
      n = t.parent.children,
      r = t.i ? n[t.i - 1] : null;
    if (e) {
      ! function (t) {
        for (var e, n = 0, r = 0, i = t.children, a = i.length; 0 <= --a;)(e = i[a]).z += n, e.m += n, n += e.s + (r += e.c)
      }(t);
      var i = (e[0].z + e[e.length - 1].z) / 2;
      r ? (t.z = r.z + Md(t._, r._), t.m = t.z - i) : t.z = i
    } else r && (t.z = r.z + Md(t._, r._));
    t.parent.A = function (t, e, n) {
      if (e) {
        for (var r, i = t, a = t, o = e, l = i.parent.children[0], s = i.m, u = a.m, c = o.m, d = l.m; o = Sr(o), i = Cr(i), o && i;) l = Cr(l), (a = Sr(a)).a = t, 0 < (r = o.z + c - i.z - s + Md(o._, i._)) && (g = t, m = n, f = (_ = o).a.parent === g.parent ? _.a : m, void 0, y = (p = r) / ((h = t).i - f.i), h.c -= y, h.s += p, f.c += y, h.z += p, h.m += p, s += r, u += r), c += o.m, s += i.m, d += l.m, u += a.m;
        o && !Sr(a) && (a.t = o, a.m += c - u), i && !Cr(l) && (l.t = i, l.m += s - d, n = t)
      }
      var f, h, p, y;
      var _, g, m;
      return n
    }(t, r, t.parent.A || n[0])
  }

  function Nd(t) {
    t._.x = t.z + t.parent.m, t.m += t.parent.m
  }

  function Pd(t) {
    t.x *= kd, t.y = t.depth * zd
  }
  var Fd = gn(),
    Od = gn(),
    Hd = gn();

  function Ud(t) {
    var e = Od(t),
      n = 2 * Math.PI;
    return e < -n && (e = -n), n < e && (e = n), e += Cs(m.radial_tree_rotation)
  }

  function Dd(t, e) {
    var n = t.copy();
    return n.eachBefore(function (t) {
      t.depth === e && delete t.children
    }), n.each(function (t) {
      t.isTruncated = !0
    }), n
  }

  function jd(t, e, n) {
    var r = !1 === t ? 0 : 1e3 * m.animation_duration;
    if (function (t) {
        Hi.transition().duration(t).style("opacity", "radialTree" === m.hierarchy_layout ? 1 : 0).on("end", function () {
          "radialTree" !== m.hierarchy_layout && (Hi.select(".nodes").selectAll("*").remove(), Hi.select(".links").selectAll("*").remove())
        })
      }(r), "radialTree" === m.hierarchy_layout) {
      var i = m.zoomed_node_id ? Vr(u.root, m.zoomed_node_id) : u.root;
      ! function (t) {
        t.each(function (t) {
          t.data.id = t.id, t.data.value = t.value
        })
      }(u.root),
      function (t) {
        t.each(function (t) {
          if (void 0 !== Cd[t.id]) {
            var e = Cd[t.id];
            t.data.display = {
              prev_rotate: e.rotate,
              prev_translate: e.translate,
              prev_parent_rotate: e.parent_rotate,
              prev_parent_translate: e.parent_translate,
              cp2_translate: e.cp2_translate
            }
          } else t.data.display = {
            prev_rotate: 0,
            prev_translate: 0,
            prev_parent_rotate: 0,
            prev_parent_translate: 0,
            cp2_translate: 0
          }
        })
      }(u.root),
      function (t, e) {
        var n = Dd(t, e);
        Sd(t), Sd(n);
        var r = function (t) {
          var e = {};
          return t.each(function (t) {
            e[t.data.id] = t
          }), e
        }(n);
        t.eachBefore(function (t) {
          var e = r[t.data.id];
          if (t.data.y = t.y, void 0 !== e) t.data.x = e.x, t.data.x_delta = e.x - t.x;
          else {
            var n = t.parent.data.x_delta;
            t.data.x = t.x + n, t.data.x_delta = n
          }
          0 === t.depth ? (t.data.parent_x = t.data.x, t.data.parent_y = t.data.y) : (t.data.parent_x = t.parent.data.x, t.data.parent_y = t.parent.data.y)
        })
      }(u.root, i.depth + m.num_of_visible_levels);
      var a = Dd(i, m.num_of_visible_levels);
      ! function (t, e) {
        var n = Math.min(t, e);
        _d = .5 * m.radial_tree_outer_radius * n / 100, gd = .5 * m.radial_tree_bar_length * n / 100, md = _d / m.num_of_visible_levels, vd = .5 * n - _d, bd = m.radial_tree_bar_width
      }(e, n),
      function (t) {
        var e = t.leaves().length,
          n = e * bd / _d;
        Ad <= n ? (xd = _d * Ad / e - 1, wd = Ad) : (wd = n, xd = bd - 2), xd = Math.max(xd, 0), wd -= (xd + 1) / _d, wd = Math.max(wd, 0)
      }(a),
      function (t, e) {
        var n = t.leaves(),
          r = function (t, e) {
            var n, r, i, a = t.length,
              o = -1;
            if (null == e) {
              for (; ++o < a;)
                if (null != (n = t[o]) && n <= n)
                  for (r = i = n; ++o < a;) null != (n = t[o]) && (n < r && (r = n), i < n && (i = n))
            } else
              for (; ++o < a;)
                if (null != (n = e(t[o], o, t)) && n <= n)
                  for (r = i = n; ++o < a;) null != (n = e(t[o], o, t)) && (n < r && (r = n), i < n && (i = n));
            return [r, i]
          }(n, function (t) {
            return t.data.x
          });
        Od.domain(r).range([-.5 * wd, .5 * wd]), 1 === n.length && Od.range([0, 0]);
        var i = [e.data.y, n[0].data.y];
        Hd.domain(i).range([0, _d]), Fd.domain([0, mt(n, function (t) {
          return Math.abs(t.data.value)
        })]).range([0, gd])
      }(a, i), cd(u.root, i, e, n, xd, md, vd, Ud, Hd, Fd), Hi.attr("transform", "translate(" + .5 * e + ", " + .5 * n + ")"), hd(a, r), yd(a, r),
        function (t) {
          t.each(function (t) {
            Cd[t.id] = t.data.display
          })
        }(u.root)
    }
  }

  function Rd(t) {
    if (ya.update(), function () {
        Di.style("padding", m.controls_padding + "px").style("text-align", m.header_align), Di.selectAll("#filter, #size-by-control").style("width", m.control_width + "px"), "" == m.header_title && "" == m.header_subtitle || Di.style("padding-top", 0), _a(), ga();
        var t = ha || pa;
        Di.style("display", t ? null : "none")
      }(), 0 !== l.data.length) {
      var e;
      e = ha ? l.data.filter(function (t) {
        return m.filter === m.filter_all_label || t.filter == m.filter
      }) : l.data;
      var n = 0 < l.data.column_names.size_columns.length ? m.aggregation_type : "Count",
        r = !0;
      "radialTree" === m.hierarchy_layout && (r = !1);
      var i = Br(e, n, r);
      u.root = Ir(i),
        function () {
          var t, e = m.hierarchy_layout,
            n = Math.max(0, ya.getPrimaryWidth()),
            r = Math.max(0, ya.getPrimaryHeight());
          if ("bar" === e) {
            var i = Os().children.length,
              a = m.bar_bar_thickness + m.bar_bar_padding;
            t = Qr.y + Jr + i * a
          }
          if (!0 === Flourish.fixed_height) ya.setHeight(null);
          else {
            if (m.auto_set_height)
              if ("circlePacking" === e || "sunburst" === e || "radialTree" === e) ya.setHeight(n);
              else if ("bar" === e) {
              ya.setHeight(t + 50)
            } else ya.setHeight(null);
            else ya.setHeight(null);
            ya.getPrimaryHeight()
          }
          n = ya.getPrimaryWidth(), r = ya.getPrimaryHeight();
          var o = !1;
          "bar" === e && !0 === Flourish.fixed_height && (r = t, o = !0), Ei.attr("width", n).attr("height", r), Li.attr("width", n).attr("height", r), Ci.select("#fl-layout-primary-container .fl-layout-inner").style("overflow-y", o ? "auto" : "hidden")
        }();
      var a = Math.max(0, ya.getPrimaryWidth()),
        o = Math.max(0, ya.getPrimaryHeight());
      u.w = a, u.h = o,
        function () {
          var t = _o(l.data.map(function (t) {
            return t.nest_columns[0]
          }));
          go.updateColors(t)
        }(), Wu(t, a, o), ac(t, a, o), nd(t, a, o), ld(t, a, o), jd(t, a, o), Ui.style("display", null === m.zoomed_node_id ? "none" : "block").style("background", m.zoom_out_button_color).on("touchstart", function () {
          O.stopPropagation(), $r("zoomOut")
        }).on("click", function () {
          O.stopPropagation(), $r("zoomOut")
        }).select("svg path").style("fill", m.zoom_out_arrow_color), li()
    }
  }

  function Bd() {
    Rd()
  }
  return t.data = l, t.state = m, t.draw = function () {
    ! function () {
      Ci = I(document.body), Si = I(ya.getSection("primary"));
      var t = (Di = I(ya.getSection("controls"))).append("div").classed("control-group filter", !0);
        t.append("div").text("GRANDE ÁREA: ").style("color", "#696969").style("font-size", "16px").style("font-weight", 600),
        t.append("div").attr("id", "filter"),
        (t = Di.append("div").classed("control-group size-by", !0)).append("div").text("Size by: "),
        t.append("div").attr("id", "size-by-control"),
        Ei = Si.append("svg").classed("noselect", !0),
        Li = Ei.append("rect").classed("background", !0).style("fill", "#262624").style("pointer-events", "visible"),
        Ni = Ei.append("g").classed("g-treemap", !0),
        Pi = Ei.append("g").classed("g-circle-packing", !0).attr("transform", "translate(" + Zr.x + "," + Zr.y + ")"),
        Fi = Ei.append("g").classed("g-sunburst", !0),
        (Oi = Ei.append("g").classed("g-bar", !0)).append("g").classed("breadcrumb", !0).append("text"),
        Oi.append("g").classed("bars", !0),
        (Hi = Ei.append("g").classed("g-radial-tree", !0)).append("g").classed("links", !0),
        Hi.append("g").classed("nodes", !0),
        (Ui = Si.append("div").classed("zoomout-button", !0).attr("title", "Go up a level")).append("svg").append("path").attr("d", "M7.285,16.01l4.12,4.119l5.137,-5.137l0,21.201l5.825,0l0,-21.201l5.138,5.137l4.119,-4.119l-12.169,-12.169l-12.17,12.169Z"),
      Li.on("mouseover", function () {
        $r("updateHighlightedNode", null), !1 === m.popup_info.frozen && $r("hidePopup")
      }).on("click", function () {
        $r("zoomOut")
      })
    }();
    var t, e = window.innerWidth;

    function n() {
      Rd(e == window.innerWidth), e = window.innerWidth
    }
    window.addEventListener("resize", function () {
      clearTimeout(t), t = setTimeout(n, 500)
    }), Rd(!1)
  }, t.update = Bd, t
}({});
//# sourceMappingURL=template.js.map