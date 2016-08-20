//JQUERY CODE BLOCK START


/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
//(function (e, t) {
//    var n, r, i = typeof t, o = e.document, a = e.location, s = e.jQuery, u = e.$, l = {}, c = [], p = "1.9.1", f = c.concat, d = c.push, h = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim, b = function (e, t) { return new b.fn.init(e, t, r) }, x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^[\],:{}\s]*$/, E = /(?:^|:|,)(?:\s*\[)+/g, S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, j = /^-ms-/, D = /-([\da-z])/gi, L = function (e, t) { return t.toUpperCase() }, H = function (e) { (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready()) }, q = function () { o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H)) }; b.fn = b.prototype = { jquery: p, constructor: b, init: function (e, n, r) { var i, a; if (!e) return this; if ("string" == typeof e) { if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e); if (i[1]) { if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n)) for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]); return this } if (a = o.getElementById(i[2]), a && a.parentNode) { if (a.id !== i[2]) return r.find(e); this.length = 1, this[0] = a } return this.context = o, this.selector = e, this } return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this)) }, selector: "", length: 0, size: function () { return this.length }, toArray: function () { return h.call(this) }, get: function (e) { return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] }, pushStack: function (e) { var t = b.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t }, each: function (e, t) { return b.each(this, e, t) }, ready: function (e) { return b.ready.promise().done(e), this }, slice: function () { return this.pushStack(h.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (e) { var t = this.length, n = +e + (0 > e ? t : 0); return this.pushStack(n >= 0 && t > n ? [this[n]] : []) }, map: function (e) { return this.pushStack(b.map(this, function (t, n) { return e.call(t, n, t) })) }, end: function () { return this.prevObject || this.constructor(null) }, push: d, sort: [].sort, splice: [].splice }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function () { var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1; for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u) ; l > u; u++) if (null != (o = arguments[u])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r)); return s }, b.extend({ noConflict: function (t) { return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b }, isReady: !1, readyWait: 1, holdReady: function (e) { e ? b.readyWait++ : b.ready(!0) }, ready: function (e) { if (e === !0 ? !--b.readyWait : !b.isReady) { if (!o.body) return setTimeout(b.ready); b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready")) } }, isFunction: function (e) { return "function" === b.type(e) }, isArray: Array.isArray || function (e) { return "array" === b.type(e) }, isWindow: function (e) { return null != e && e == e.window }, isNumeric: function (e) { return !isNaN(parseFloat(e)) && isFinite(e) }, type: function (e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e }, isPlainObject: function (e) { if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1; try { if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) { return !1 } var r; for (r in e); return r === t || y.call(e, r) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, error: function (e) { throw Error(e) }, parseHTML: function (e, t, n) { if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || o; var r = C.exec(e), i = !n && []; return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes)) }, parseJSON: function (n) { return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t) }, parseXML: function (n) { var r, i; if (!n || "string" != typeof n) return null; try { e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n)) } catch (o) { r = t } return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r }, noop: function () { }, globalEval: function (t) { t && b.trim(t) && (e.execScript || function (t) { e.eval.call(e, t) })(t) }, camelCase: function (e) { return e.replace(j, "ms-").replace(D, L) }, nodeName: function (e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function (e, t, n) { var r, i = 0, o = e.length, a = M(e); if (n) { if (a) { for (; o > i; i++) if (r = t.apply(e[i], n), r === !1) break } else for (i in e) if (r = t.apply(e[i], n), r === !1) break } else if (a) { for (; o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break; return e }, trim: v && !v.call("\ufeff\u00a0") ? function (e) { return null == e ? "" : v.call(e) } : function (e) { return null == e ? "" : (e + "").replace(T, "") }, makeArray: function (e, t) { var n = t || []; return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n }, inArray: function (e, t, n) { var r; if (t) { if (g) return g.call(t, e, n); for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n } return -1 }, merge: function (e, n) { var r = n.length, i = e.length, o = 0; if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o]; else while (n[o] !== t) e[i++] = n[o++]; return e.length = i, e }, grep: function (e, t, n) { var r, i = [], o = 0, a = e.length; for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]); return i }, map: function (e, t, n) { var r, i = 0, o = e.length, a = M(e), s = []; if (a) for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r); return f.apply([], s) }, guid: 1, proxy: function (e, n) { var r, i, o; return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function () { return e.apply(n || this, r.concat(h.call(arguments))) }, i.guid = e.guid = e.guid || b.guid++, i) : t }, access: function (e, n, r, i, o, a, s) { var u = 0, l = e.length, c = null == r; if ("object" === b.type(r)) { o = !0; for (u in r) b.access(e, n, u, r[u], !0, a, s) } else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) { return c.call(b(e), n) })), n)) for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r))); return o ? e : c ? n.call(e) : l ? n(e[0], r) : a }, now: function () { return (new Date).getTime() } }), b.ready.promise = function (t) { if (!n) if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready); else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1); else { o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H); var r = !1; try { r = null == e.frameElement && o.documentElement } catch (i) { } r && r.doScroll && function a() { if (!b.isReady) { try { r.doScroll("left") } catch (e) { return setTimeout(a, 50) } q(), b.ready() } }() } return n.promise(t) }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) { l["[object " + t + "]"] = t.toLowerCase() }); function M(e) { var t = e.length, n = b.type(e); return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e) } r = b(o); var _ = {}; function F(e) { var t = _[e] = {}; return b.each(e.match(w) || [], function (e, n) { t[n] = !0 }), t } b.Callbacks = function (e) { e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e); var n, r, i, o, a, s, u = [], l = !e.once && [], c = function (t) { for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++) if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) { r = !1; break } n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable()) }, p = { add: function () { if (u) { var t = u.length; (function i(t) { b.each(t, function (t, n) { var r = b.type(n); "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n) }) })(arguments), n ? o = u.length : r && (s = t, c(r)) } return this }, remove: function () { return u && b.each(arguments, function (e, t) { var r; while ((r = b.inArray(t, u, r)) > -1) u.splice(r, 1), n && (o >= r && o--, a >= r && a--) }), this }, has: function (e) { return e ? b.inArray(e, u) > -1 : !(!u || !u.length) }, empty: function () { return u = [], this }, disable: function () { return u = l = r = t, this }, disabled: function () { return !u }, lock: function () { return l = t, r || p.disable(), this }, locked: function () { return !l }, fireWith: function (e, t) { return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this }, fire: function () { return p.fireWith(this, arguments), this }, fired: function () { return !!i } }; return p }, b.extend({ Deferred: function (e) { var t = [["resolve", "done", b.Callbacks("once memory"), "resolved"], ["reject", "fail", b.Callbacks("once memory"), "rejected"], ["notify", "progress", b.Callbacks("memory")]], n = "pending", r = { state: function () { return n }, always: function () { return i.done(arguments).fail(arguments), this }, then: function () { var e = arguments; return b.Deferred(function (n) { b.each(t, function (t, o) { var a = o[0], s = b.isFunction(e[t]) && e[t]; i[o[1]](function () { var e = s && s.apply(this, arguments); e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments) }) }), e = null }).promise() }, promise: function (e) { return null != e ? b.extend(e, r) : r } }, i = {}; return r.pipe = r.then, b.each(t, function (e, o) { var a = o[2], s = o[3]; r[o[1]] = a.add, s && a.add(function () { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () { return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith }), r.promise(i), e && e.call(i, i), i }, when: function (e) { var t = 0, n = h.call(arguments), r = n.length, i = 1 !== r || e && b.isFunction(e.promise) ? r : 0, o = 1 === i ? e : b.Deferred(), a = function (e, t, n) { return function (r) { t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n) } }, s, u, l; if (r > 1) for (s = Array(r), u = Array(r), l = Array(r) ; r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i; return i || o.resolveWith(l, n), o.promise() } }), b.support = function () { var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div"); if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {}; s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = { getSetAttribute: "t" !== d.className, leadingWhitespace: 3 === d.firstChild.nodeType, tbody: !d.getElementsByTagName("tbody").length, htmlSerialize: !!d.getElementsByTagName("link").length, style: /top/.test(r.getAttribute("style")), hrefNormalized: "/a" === r.getAttribute("href"), opacity: /^0.5/.test(r.style.opacity), cssFloat: !!r.style.cssFloat, checkOn: !!a.value, optSelected: l.selected, enctype: !!o.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === o.compatMode, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled; try { delete d.test } catch (h) { t.deleteExpando = !1 } a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () { t.noCloneEvent = !1 }), d.cloneNode(!0).click()); for (f in { submit: !0, change: !0, focusin: !0 }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1; return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function () { var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", u = o.getElementsByTagName("body")[0]; u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || { width: "4px" }).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null) }), n = s = u = l = r = a = null, t }(); var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, B = /([A-Z])/g; function P(e, n, r, i) { if (b.acceptData(e)) { var o, a, s = b.expando, u = "string" == typeof n, l = e.nodeType, p = l ? b.cache : e, f = l ? e[s] : e[s] && s; if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a } } function R(e, t, n) { if (b.acceptData(e)) { var r, i, o, a = e.nodeType, s = a ? b.cache : e, u = a ? e[b.expando] : b.expando; if (s[u]) { if (t && (o = n ? s[u] : s[u].data)) { b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" ")); for (r = 0, i = t.length; i > r; r++) delete o[t[r]]; if (!(n ? $ : b.isEmptyObject)(o)) return } (n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null) } } } b.extend({ cache: {}, expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function (e) { return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !$(e) }, data: function (e, t, n) { return P(e, t, n) }, removeData: function (e, t) { return R(e, t) }, _data: function (e, t, n) { return P(e, t, n, !0) }, _removeData: function (e, t) { return R(e, t, !0) }, acceptData: function (e) { if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1; var t = e.nodeName && b.noData[e.nodeName.toLowerCase()]; return !t || t !== !0 && e.getAttribute("classid") === t } }), b.fn.extend({ data: function (e, n) { var r, i, o = this[0], a = 0, s = null; if (e === t) { if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) { for (r = o.attributes; r.length > a; a++) i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i])); b._data(o, "parsedAttrs", !0) } return s } return "object" == typeof e ? this.each(function () { b.data(this, e) }) : b.access(this, function (n) { return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function () { b.data(this, e, n) }), t) }, null, n, arguments.length > 1, null, !0) }, removeData: function (e) { return this.each(function () { b.removeData(this, e) }) } }); function W(e, n, r) { if (r === t && 1 === e.nodeType) { var i = "data-" + n.replace(B, "-$1").toLowerCase(); if (r = e.getAttribute(i), "string" == typeof r) { try { r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r } catch (o) { } b.data(e, n, r) } else r = t } return r } function $(e) { var t; for (t in e) if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1; return !0 } b.extend({ queue: function (e, n, r) { var i; return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t }, dequeue: function (e, t) { t = t || "fx"; var n = b.queue(e, t), r = n.length, i = n.shift(), o = b._queueHooks(e, t), a = function () { b.dequeue(e, t) }; "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return b._data(e, n) || b._data(e, n, { empty: b.Callbacks("once memory").add(function () { b._removeData(e, t + "queue"), b._removeData(e, n) }) }) } }), b.fn.extend({ queue: function (e, n) { var r = 2; return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function () { var t = b.queue(this, e, n); b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e) }) }, dequeue: function (e) { return this.each(function () { b.dequeue(this, e) }) }, delay: function (e, t) { return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) { var r = setTimeout(t, e); n.stop = function () { clearTimeout(r) } }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, n) { var r, i = 1, o = b.Deferred(), a = this, s = this.length, u = function () { --i || o.resolveWith(a, [a]) }; "string" != typeof e && (n = e, e = t), e = e || "fx"; while (s--) r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u)); return u(), o.promise(n) } }); var I, z, X = /[\t\r\n]/g, U = /\r/g, V = /^(?:input|select|textarea|button|object)$/i, Y = /^(?:a|area)$/i, J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, G = /^(?:checked|selected)$/i, Q = b.support.getSetAttribute, K = b.support.input; b.fn.extend({ attr: function (e, t) { return b.access(this, b.attr, e, t, arguments.length > 1) }, removeAttr: function (e) { return this.each(function () { b.removeAttr(this, e) }) }, prop: function (e, t) { return b.access(this, b.prop, e, t, arguments.length > 1) }, removeProp: function (e) { return e = b.propFix[e] || e, this.each(function () { try { this[e] = t, delete this[e] } catch (n) { } }) }, addClass: function (e) { var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e; if (b.isFunction(e)) return this.each(function (t) { b(this).addClass(e.call(this, t, this.className)) }); if (u) for (t = (e || "").match(w) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) { o = 0; while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " "); n.className = b.trim(r) } return this }, removeClass: function (e) { var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e; if (b.isFunction(e)) return this.each(function (t) { b(this).removeClass(e.call(this, t, this.className)) }); if (u) for (t = (e || "").match(w) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) { o = 0; while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " "); n.className = e ? b.trim(r) : "" } return this }, toggleClass: function (e, t) { var n = typeof e, r = "boolean" == typeof t; return b.isFunction(e) ? this.each(function (n) { b(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function () { if ("string" === n) { var o, a = 0, s = b(this), u = t, l = e.match(w) || []; while (o = l[a++]) u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o) } else (n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "") }) }, hasClass: function (e) { var t = " " + e + " ", n = 0, r = this.length; for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0; return !1 }, val: function (e) { var n, r, i, o = this[0]; { if (arguments.length) return i = b.isFunction(e), this.each(function (n) { var o, a = b(this); 1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function (e) { return null == e ? "" : e + "" })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o)) }); if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n) } } }), b.extend({ valHooks: { option: { get: function (e) { var t = e.attributes.value; return !t || t.specified ? e.value : e.text } }, select: { get: function (e) { var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; for (; s > u; u++) if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) { if (t = b(n).val(), o) return t; a.push(t) } return a }, set: function (e, t) { var n = b.makeArray(t); return b(e).find("option").each(function () { this.selected = b.inArray(b(this).val(), n) >= 0 }), n.length || (e.selectedIndex = -1), n } } }, attr: function (e, n, r) { var o, a, s, u = e.nodeType; if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t)) }, removeAttr: function (e, t) { var n, r, i = 0, o = t && t.match(w); if (o && 1 === e.nodeType) while (n = o[i++]) r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r) }, attrHooks: { type: { set: function (e, t) { if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, prop: function (e, n, r) { var i, o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n] }, propHooks: { tabIndex: { get: function (e) { var n = e.getAttributeNode("tabindex"); return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t } } } }), z = { get: function (e, n) { var r = b.prop(e, n), i = "boolean" == typeof r && e.getAttribute(n), o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n); return o && o.value !== !1 ? n.toLowerCase() : t }, set: function (e, t, n) { return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n } }, K && Q || (b.attrHooks.value = { get: function (e, n) { var r = e.getAttributeNode(n); return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t }, set: function (e, n, r) { return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r) } }), Q || (I = b.valHooks.button = { get: function (e, n) { var r = e.getAttributeNode(n); return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t }, set: function (e, n, r) { var i = e.getAttributeNode(r); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t } }, b.attrHooks.contenteditable = { get: I.get, set: function (e, t, n) { I.set(e, "" === t ? !1 : t, n) } }, b.each(["width", "height"], function (e, n) { b.attrHooks[n] = b.extend(b.attrHooks[n], { set: function (e, r) { return "" === r ? (e.setAttribute(n, "auto"), r) : t } }) })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function (e, n) { b.attrHooks[n] = b.extend(b.attrHooks[n], { get: function (e) { var r = e.getAttribute(n, 2); return null == r ? t : r } }) }), b.each(["href", "src"], function (e, t) { b.propHooks[t] = { get: function (e) { return e.getAttribute(t, 4) } } })), b.support.style || (b.attrHooks.style = { get: function (e) { return e.style.cssText || t }, set: function (e, t) { return e.style.cssText = t + "" } }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, { get: function (e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function () { b.valHooks[this] = { get: function (e) { return null === e.getAttribute("value") ? "on" : e.value } } }), b.each(["radio", "checkbox"], function () { b.valHooks[this] = b.extend(b.valHooks[this], { set: function (e, n) { return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t } }) }); var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/; function it() { return !0 } function ot() { return !1 } b.event = { global: {}, add: function (e, n, r, o, a) { var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e); if (v) { r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function (e) { return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments) }, f.elem = e), n = (n || "").match(w) || [""], l = n.length; while (l--) s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({ type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && b.expr.match.needsContext.test(a), namespace: m.join(".") }, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0; e = null } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e); if (m && (c = m.events)) { t = (t || "").match(w) || [""], l = t.length; while (l--) if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) { p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a)); u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d]) } else for (d in c) b.event.remove(e, d + t[l], n, r, !0); b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events")) } }, trigger: function (n, r, i, a) { var s, u, l, c, p, f, d, h = [i || o], g = y.call(n, "type") ? n.type : n, m = y.call(n, "namespace") ? n.namespace.split(".") : []; if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) { if (!a && !p.noBubble && !b.isWindow(i)) { for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode) ; l; l = l.parentNode) h.push(l), f = l; f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e) } d = 0; while ((l = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault(); if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) { f = i[u], f && (i[u] = null), b.event.triggered = g; try { i[g]() } catch (v) { } b.event.triggered = t, f && (i[u] = f) } return n.result } }, dispatch: function (e) { e = b.event.fix(e); var n, r, i, o, a, s = [], u = h.call(arguments), l = (b._data(this, "events") || {})[e.type] || [], c = b.event.special[e.type] || {}; if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) { s = b.event.handlers.call(this, e, l), n = 0; while ((o = s[n++]) && !e.isPropagationStopped()) { e.currentTarget = o.elem, a = 0; while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, e), e.result } }, handlers: function (e, n) { var r, i, o, a, s = [], u = n.delegateCount, l = e.target; if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) { for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i); o.length && s.push({ elem: l, handlers: o }) } return n.length > u && s.push({ elem: this, handlers: n.slice(u) }), s }, fix: function (e) { if (e[b.expando]) return e; var t, n, r, i = e.type, a = e, s = this.fixHooks[i]; s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length; while (t--) n = r[t], e[n] = a[n]; return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, n) { var r, i, a, s = n.button, u = n.fromElement; return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e } }, special: { load: { noBubble: !0 }, click: { trigger: function () { return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t } }, focus: { trigger: function () { if (this !== o.activeElement && this.focus) try { return this.focus(), !1 } catch (e) { } }, delegateType: "focusin" }, blur: { trigger: function () { return this === o.activeElement && this.blur ? (this.blur(), !1) : t }, delegateType: "focusout" }, beforeunload: { postDispatch: function (e) { e.result !== t && (e.originalEvent.returnValue = e.result) } } }, simulate: function (e, t, n, r) { var i = b.extend(new b.Event, n, { type: e, isSimulated: !0, originalEvent: {} }); r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault() } }, b.removeEvent = o.removeEventListener ? function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function (e, t, n) { var r = "on" + t; e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n)) }, b.Event = function (e, n) { return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n) }, b.Event.prototype = { isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = it, this.stopPropagation() } }, b.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) {
//        b.event.special[e] = {
//            delegateType: t, bindType: t, handle: function (e) {
//                var n, r = this, i = e.relatedTarget, o = e.handleObj;
//                return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
//            }
//        }
//    }), b.support.submitBubbles || (b.event.special.submit = { setup: function () { return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function (e) { var n = e.target, r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t; r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function (e) { e._submit_bubble = !0 }), b._data(r, "submitBubbles", !0)) }), t) }, postDispatch: function (e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0)) }, teardown: function () { return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t) } }), b.support.changeBubbles || (b.event.special.change = { setup: function () { return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function (e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), b.event.add(this, "click._change", function (e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0) })), !1) : (b.event.add(this, "beforeactivate._change", function (e) { var t = e.target; Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function (e) { !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0) }), b._data(t, "changeBubbles", !0)) }), t) }, handle: function (e) { var n = e.target; return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t }, teardown: function () { return b.event.remove(this, "._change"), !Z.test(this.nodeName) } }), b.support.focusinBubbles || b.each({ focus: "focusin", blur: "focusout" }, function (e, t) { var n = 0, r = function (e) { b.event.simulate(t, e.target, b.event.fix(e), !0) }; b.event.special[t] = { setup: function () { 0 === n++ && o.addEventListener(e, r, !0) }, teardown: function () { 0 === --n && o.removeEventListener(e, r, !0) } } }), b.fn.extend({ on: function (e, n, r, i, o) { var a, s; if ("object" == typeof e) { "string" != typeof n && (r = r || n, n = t); for (a in e) this.on(a, n, r, e[a], o); return this } if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot; else if (!i) return this; return 1 === o && (s = i, i = function (e) { return b().off(e), s.apply(this, arguments) }, i.guid = s.guid || (s.guid = b.guid++)), this.each(function () { b.event.add(this, e, i, r, n) }) }, one: function (e, t, n, r) { return this.on(e, t, n, r, 1) }, off: function (e, n, r) { var i, o; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (o in e) this.off(o, n, e[o]); return this } return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () { b.event.remove(this, e, r, n) }) }, bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, trigger: function (e, t) { return this.each(function () { b.event.trigger(e, t, this) }) }, triggerHandler: function (e, n) { var r = this[0]; return r ? b.event.trigger(e, n, r, !0) : t } }), function (e, t) { var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date, w = e.document, T = {}, N = 0, C = 0, k = it(), E = it(), S = it(), A = typeof t, j = 1 << 31, D = [], L = D.pop, H = D.push, q = D.slice, M = D.indexOf || function (e) { var t = 0, n = this.length; for (; n > t; t++) if (this[t] === e) return t; return -1 }, _ = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = F.replace("w", "w#"), B = "([*^$|!~]?=)", P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]", R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)", W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"), $ = RegExp("^" + _ + "*," + _ + "*"), I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"), z = RegExp(R), X = RegExp("^" + O + "$"), U = { ID: RegExp("^#(" + F + ")"), CLASS: RegExp("^\\.(" + F + ")"), NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"), TAG: RegExp("^(" + F.replace("w", "w*") + ")"), ATTR: RegExp("^" + P), PSEUDO: RegExp("^" + R), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"), needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i") }, V = /[\x20\t\r\n\f]*[+~]/, Y = /^[^{]+\{\s*\[native code/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, G = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, K = /'|\\/g, Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, tt = function (e, t) { var n = "0x" + t - 65536; return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n) }; try { q.call(w.documentElement.childNodes, 0)[0].nodeType } catch (nt) { q = function (e) { var t, n = []; while (t = this[e++]) n.push(t); return n } } function rt(e) { return Y.test(e + "") } function it() { var e, t = []; return e = function (n, r) { return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r } } function ot(e) { return e[x] = !0, e } function at(e) { var t = p.createElement("div"); try { return e(t) } catch (n) { return !1 } finally { t = null } } function st(e, t, n, r) { var i, o, a, s, u, l, f, g, m, v; if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n; if (1 !== (s = t.nodeType) && 9 !== s) return []; if (!d && !r) { if (i = J.exec(e)) if (a = i[1]) { if (9 === s) { if (o = t.getElementById(a), !o || !o.parentNode) return n; if (o.id === a) return n.push(o), n } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n } else { if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n; if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n } if (T.qsa && !h.test(e)) { if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) { l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length; while (u--) l[u] = g + dt(l[u]); m = V.test(e) && t.parentNode || t, v = l.join(",") } if (v) try { return H.apply(n, q.call(m.querySelectorAll(v), 0)), n } catch (b) { } finally { f || t.removeAttribute("id") } } } return wt(e.replace(W, "$1"), t, n, r) } a = st.isXML = function (e) { var t = e && (e.ownerDocument || e).documentElement; return t ? "HTML" !== t.nodeName : !1 }, c = st.setDocument = function (e) { var n = e ? e.ownerDocument || e : w; return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function (e) { return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length }), T.attributes = at(function (e) { e.innerHTML = "<select></select>"; var t = typeof e.lastChild.getAttribute("multiple"); return "boolean" !== t && "string" !== t }), T.getByClassName = at(function (e) { return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1 }), T.getByName = at(function (e) { e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild); var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length; return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t }), i.attrHandle = at(function (e) { return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href") }) ? {} : { href: function (e) { return e.getAttribute("href", 2) }, type: function (e) { return e.getAttribute("type") } }, T.getIdNotName ? (i.find.ID = function (e, t) { if (typeof t.getElementById !== A && !d) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, i.filter.ID = function (e) { var t = e.replace(et, tt); return function (e) { return e.getAttribute("id") === t } }) : (i.find.ID = function (e, n) { if (typeof n.getElementById !== A && !d) { var r = n.getElementById(e); return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : [] } }, i.filter.ID = function (e) { var t = e.replace(et, tt); return function (e) { var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id"); return n && n.value === t } }), i.find.TAG = T.tagNameNoComments ? function (e, n) { return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, i.find.NAME = T.getByName && function (e, n) { return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t }, i.find.CLASS = T.getByClassName && function (e, n) { return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e) }, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function (e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked") }), at(function (e) { e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:") })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function (e) { T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R) }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, v = f.compareDocumentPosition ? function (e, t) { var r; return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : function (e, t) { var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t]; if (e === t) return u = !0, 0; if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0; if (o === a) return ut(e, t); r = e; while (r = r.parentNode) s.unshift(r); r = t; while (r = r.parentNode) l.unshift(r); while (s[i] === l[i]) i++; return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0 }, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p }, st.matches = function (e, t) { return st(e, null, null, t) }, st.matchesSelector = function (e, t) { if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try { var n = m.call(e, t); if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (r) { } return st(t, p, null, [e]).length > 0 }, st.contains = function (e, t) { return (e.ownerDocument || e) !== p && c(e), y(e, t) }, st.attr = function (e, t) { var n; return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null }, st.error = function (e) { throw Error("Syntax error, unrecognized expression: " + e) }, st.uniqueSort = function (e) { var t, n = [], r = 1, i = 0; if (u = !T.detectDuplicates, e.sort(v), u) { for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r)); while (i--) e.splice(n[i], 1) } return e }; function ut(e, t) { var n = t && e, r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j); if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function lt(e) { return function (t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } } function ct(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } } function pt(e) { return ot(function (t) { return t = +t, ot(function (n, r) { var i, o = e([], n.length, t), a = o.length; while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) } o = st.getText = function (e) { var t, n = "", r = 0, i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else for (; t = e[r]; r++) n += o(t); return n }, i = st.selectors = { cacheLength: 50, createPseudo: ot, match: U, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[5] && e[2]; return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { return "*" === e ? function () { return !0 } : (e = e.replace(et, tt).toLowerCase(), function (t) { return t.nodeName && t.nodeName.toLowerCase() === e }) }, CLASS: function (e) { var t = k[e + " "]; return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function (e) { return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "") }) }, ATTR: function (e, t, n) { return function (r) { var i = st.attr(r, e); return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0 } }, CHILD: function (e, t, n, r, i) { var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t; return 1 === r && 0 === i ? function (e) { return !!e.parentNode } : function (t, n, u) { var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s; if (m) { if (o) { while (g) { p = t; while (p = p[g]) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1; h = g = "only" === e && !h && "nextSibling" } return !0 } if (h = [a ? m.firstChild : m.lastChild], a && v) { c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d]; while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if (1 === p.nodeType && ++f && p === t) { c[e] = [N, d, f]; break } } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0 } } }, PSEUDO: function (e, t) { var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e); return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function (e, n) { var i, o = r(e, t), a = o.length; while (a--) i = M.call(e, o[a]), e[i] = !(n[i] = o[a]) }) : function (e) { return r(e, 0, n) }) : r } }, pseudos: { not: ot(function (e) { var t = [], n = [], r = s(e.replace(W, "$1")); return r[x] ? ot(function (e, t, n, i) { var o, a = r(e, null, i, []), s = e.length; while (s--) (o = a[s]) && (e[s] = !(t[s] = o)) }) : function (e, i, o) { return t[0] = e, r(t, null, o, n), !n.pop() } }), has: ot(function (e) { return function (t) { return st(e, t).length > 0 } }), contains: ot(function (e) { return function (t) { return (t.textContent || t.innerText || o(t)).indexOf(e) > -1 } }), lang: ot(function (e) { return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(), function (t) { var n; do if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function (e) { return e === f }, focus: function (e) { return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function (e) { return e.disabled === !1 }, disabled: function (e) { return e.disabled === !0 }, checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1; return !0 }, parent: function (e) { return !i.pseudos.empty(e) }, header: function (e) { return Q.test(e.nodeName) }, input: function (e) { return G.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type) }, first: pt(function () { return [0] }), last: pt(function (e, t) { return [t - 1] }), eq: pt(function (e, t, n) { return [0 > n ? n + t : n] }), even: pt(function (e, t) { var n = 0; for (; t > n; n += 2) e.push(n); return e }), odd: pt(function (e, t) { var n = 1; for (; t > n; n += 2) e.push(n); return e }), lt: pt(function (e, t, n) { var r = 0 > n ? n + t : n; for (; --r >= 0;) e.push(r); return e }), gt: pt(function (e, t, n) { var r = 0 > n ? n + t : n; for (; t > ++r;) e.push(r); return e }) } }; for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) i.pseudos[n] = lt(n); for (n in { submit: !0, reset: !0 }) i.pseudos[n] = ct(n); function ft(e, t) { var n, r, o, a, s, u, l, c = E[e + " "]; if (c) return t ? 0 : c.slice(0); s = e, u = [], l = i.preFilter; while (s) { (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({ value: n, type: r[0].replace(W, " ") }), s = s.slice(n.length)); for (a in i.filter) !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({ value: n, type: a, matches: r }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? st.error(e) : E(e, u).slice(0) } function dt(e) { var t = 0, n = e.length, r = ""; for (; n > t; t++) r += e[t].value; return r } function ht(e, t, n) { var i = t.dir, o = n && "parentNode" === i, a = C++; return t.first ? function (t, n, r) { while (t = t[i]) if (1 === t.nodeType || o) return e(t, n, r) } : function (t, n, s) { var u, l, c, p = N + " " + a; if (s) { while (t = t[i]) if ((1 === t.nodeType || o) && e(t, n, s)) return !0 } else while (t = t[i]) if (1 === t.nodeType || o) if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) { if ((u = l[1]) === !0 || u === r) return u === !0 } else if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) return !0 } } function gt(e) { return e.length > 1 ? function (t, n, r) { var i = e.length; while (i--) if (!e[i](t, n, r)) return !1; return !0 } : e[0] } function mt(e, t, n, r, i) { var o, a = [], s = 0, u = e.length, l = null != t; for (; u > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s)); return a } function yt(e, t, n, r, i, o) { return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function (o, a, s, u) { var l, c, p, f = [], d = [], h = a.length, g = o || xt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : mt(g, f, e, s, u), y = n ? i || (o ? e : h || r) ? [] : a : m; if (n && n(m, y, s, u), r) { l = mt(y, d), r(l, [], s, u), c = l.length; while (c--) (p = l[c]) && (y[d[c]] = !(m[d[c]] = p)) } if (o) { if (i || e) { if (i) { l = [], c = y.length; while (c--) (p = y[c]) && l.push(m[c] = p); i(null, y = [], l, u) } c = y.length; while (c--) (p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p)) } } else y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y) }) } function vt(e) { var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], u = a ? 1 : 0, c = ht(function (e) { return e === t }, s, !0), p = ht(function (e) { return M.call(t, e) > -1 }, s, !0), f = [function (e, n, r) { return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r)) }]; for (; o > u; u++) if (n = i.relative[e[u].type]) f = [ht(gt(f), n)]; else { if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) { for (r = ++u; o > r; r++) if (i.relative[e[r].type]) break; return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e)) } f.push(n) } return gt(f) } function bt(e, t) { var n = 0, o = t.length > 0, a = e.length > 0, s = function (s, u, c, f, d) { var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, T = l, C = s || a && i.find.TAG("*", d && u.parentNode || u), k = N += null == T ? 1 : Math.random() || .1; for (w && (l = u !== p && u, r = n) ; null != (h = C[b]) ; b++) { if (a && h) { g = 0; while (m = e[g++]) if (m(h, u, c)) { f.push(h); break } w && (N = k, r = ++n) } o && ((h = !m && h) && v--, s && x.push(h)) } if (v += b, o && b !== v) { g = 0; while (m = t[g++]) m(x, y, u, c); if (s) { if (v > 0) while (b--) x[b] || y[b] || (y[b] = L.call(f)); y = mt(y) } H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f) } return w && (N = k, l = T), x }; return o ? ot(s) : s } s = st.compile = function (e, t) { var n, r = [], i = [], o = S[e + " "]; if (!o) { t || (t = ft(e)), n = t.length; while (n--) o = vt(t[n]), o[x] ? r.push(o) : i.push(o); o = S(e, bt(i, r)) } return o }; function xt(e, t, n) { var r = 0, i = t.length; for (; i > r; r++) st(e, t[r], n); return n } function wt(e, t, n, r) { var o, a, u, l, c, p = ft(e); if (!r && 1 === p.length) { if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) { if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n; e = e.slice(a.shift().value.length) } o = U.needsContext.test(e) ? 0 : a.length; while (o--) { if (u = a[o], i.relative[l = u.type]) break; if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) { if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), n; break } } } return s(e, p)(r, t, d, n, V.test(e)), n } i.pseudos.nth = i.pseudos.eq; function Tt() { } i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains }(e); var at = /Until$/, st = /^(?:parents|prev(?:Until|All))/, ut = /^.[^:#\[\.,]*$/, lt = b.expr.match.needsContext, ct = { children: !0, contents: !0, next: !0, prev: !0 }; b.fn.extend({ find: function (e) { var t, n, r, i = this.length; if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function () { for (t = 0; i > t; t++) if (b.contains(r[t], this)) return !0 })); for (n = [], t = 0; i > t; t++) b.find(e, this[t], n); return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n }, has: function (e) { var t, n = b(e, this), r = n.length; return this.filter(function () { for (t = 0; r > t; t++) if (b.contains(this, n[t])) return !0 }) }, not: function (e) { return this.pushStack(ft(this, e, !1)) }, filter: function (e) { return this.pushStack(ft(this, e, !0)) }, is: function (e) { return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0) }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0; for (; i > r; r++) { n = this[r]; while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) { if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) { o.push(n); break } n = n.parentNode } } return this.pushStack(o.length > 1 ? b.unique(o) : o) }, index: function (e) { return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e), r = b.merge(this.get(), n); return this.pushStack(b.unique(r)) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), b.fn.andSelf = b.fn.addBack; function pt(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e } b.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return b.dir(e, "parentNode") }, parentsUntil: function (e, t, n) { return b.dir(e, "parentNode", n) }, next: function (e) { return pt(e, "nextSibling") }, prev: function (e) { return pt(e, "previousSibling") }, nextAll: function (e) { return b.dir(e, "nextSibling") }, prevAll: function (e) { return b.dir(e, "previousSibling") }, nextUntil: function (e, t, n) { return b.dir(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return b.dir(e, "previousSibling", n) }, siblings: function (e) { return b.sibling((e.parentNode || {}).firstChild, e) }, children: function (e) { return b.sibling(e.firstChild) }, contents: function (e) { return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes) } }, function (e, t) { b.fn[e] = function (n, r) { var i = b.map(this, t, n); return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i) } }), b.extend({ filter: function (e, t, n) { return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t) }, dir: function (e, n, r) { var i = [], o = e[n]; while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n]; return i }, sibling: function (e, t) { var n = []; for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n } }); function ft(e, t, n) { if (t = t || 0, b.isFunction(t)) return b.grep(e, function (e, r) { var i = !!t.call(e, r, e); return i === n }); if (t.nodeType) return b.grep(e, function (e) { return e === t === n }); if ("string" == typeof t) { var r = b.grep(e, function (e) { return 1 === e.nodeType }); if (ut.test(t)) return b.filter(t, r, !n); t = b.filter(t, r) } return b.grep(e, function (e) { return b.inArray(e, t) >= 0 === n }) } function dt(e) { var t = ht.split("|"), n = e.createDocumentFragment(); if (n.createElement) while (t.length) n.createElement(t.pop()); return n } var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Nt = /^(?:checkbox|radio)$/i, Ct = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, jt = dt(o), Dt = jt.appendChild(o.createElement("div")); At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({ text: function (e) { return b.access(this, function (e) { return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e)) }, null, e, arguments.length) }, wrapAll: function (e) { if (b.isFunction(e)) return this.each(function (t) { b(this).wrapAll(e.call(this, t)) }); if (this[0]) { var t = b(e, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild; return e }).append(this) } return this }, wrapInner: function (e) { return b.isFunction(e) ? this.each(function (t) { b(this).wrapInner(e.call(this, t)) }) : this.each(function () { var t = b(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function (e) { var t = b.isFunction(e); return this.each(function (n) { b(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function () { return this.parent().each(function () { b.nodeName(this, "body") || b(this).replaceWith(this.childNodes) }).end() }, append: function () { return this.domManip(arguments, !0, function (e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e) }) }, prepend: function () { return this.domManip(arguments, !0, function (e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild) }) }, before: function () { return this.domManip(arguments, !1, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return this.domManip(arguments, !1, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, remove: function (e, t) { var n, r = 0; for (; null != (n = this[r]) ; r++) (!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n))); return this }, empty: function () { var e, t = 0; for (; null != (e = this[t]) ; t++) { 1 === e.nodeType && b.cleanData(Ot(e, !1)); while (e.firstChild) e.removeChild(e.firstChild); e.options && b.nodeName(e, "select") && (e.options.length = 0) } return this }, clone: function (e, t) { return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () { return b.clone(this, e, t) }) }, html: function (e) { return b.access(this, function (e) { var n = this[0] || {}, r = 0, i = this.length; if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t; if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) { e = e.replace(vt, "<$1></$2>"); try { for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e); n = 0 } catch (o) { } } n && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function (e) { var t = b.isFunction(e); return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function (e) { var t = this.nextSibling, n = this.parentNode; n && (b(this).remove(), n.insertBefore(e, t)) }) }, detach: function (e) { return this.remove(e, !0) }, domManip: function (e, n, r) { e = f.apply([], e); var i, o, a, s, u, l, c = 0, p = this.length, d = this, h = p - 1, g = e[0], m = b.isFunction(g); if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function (i) { var o = d.eq(i); m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r) }); if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) { for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c); if (a) for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({ url: o.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, ""))); l = i = null } return this } }); function Lt(e, t) { return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t)) } function Ht(e) { var t = e.getAttributeNode("type"); return e.type = (t && t.specified) + "/" + e.type, e } function qt(e) { var t = Et.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e } function Mt(e, t) { var n, r = 0; for (; null != (n = e[r]) ; r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval")) } function _t(e, t) { if (1 === t.nodeType && b.hasData(e)) { var n, r, i, o = b._data(e), a = b._data(t, o), s = o.events; if (s) { delete a.handle, a.events = {}; for (n in s) for (r = 0, i = s[n].length; i > r; r++) b.event.add(t, n, s[n][r]) } a.data && (a.data = b.extend({}, a.data)) } } function Ft(e, t) { var n, r, i; if (1 === t.nodeType) { if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) { i = b._data(t); for (r in i.events) b.removeEvent(t, r, i.handle); t.removeAttribute(b.expando) } "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue) } } b.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) { b.fn[e] = function (e) { var n, r = 0, i = [], o = b(e), a = o.length - 1; for (; a >= r; r++) n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get()); return this.pushStack(i) } }); function Ot(e, n) { var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t; if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]) ; a++) !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n)); return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s } function Bt(e) { Nt.test(e.type) && (e.defaultChecked = e.checked) } b.extend({
//        clone: function (e, t, n) { var r, i, o, a, s, u = b.contains(e.ownerDocument, e); if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]) ; ++a) r[a] && Ft(i, r[a]); if (t) if (n) for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]) ; a++) _t(i, r[a]); else _t(e, o); return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o }, buildFragment: function (e, t, n, r) {
//            var i, o, a, s, u, l, c, p = e.length, f = dt(t), d = [], h = 0; for (; p > h; h++) if (o = e[h], o || 0 === o) if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) {
//                s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0]; while (i--) s = s.lastChild; if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
//                    o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; while (i--) b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
//                } b.merge(d, s.childNodes), s.textContent = ""; while (s.firstChild) s.removeChild(s.firstChild); s = f.lastChild
//            } else d.push(t.createTextNode(o)); s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0; while (o = d[h++]) if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) { i = 0; while (o = s[i++]) kt.test(o.type || "") && n.push(o) } return s = null, f
//        }, cleanData: function (e, t) { var n, r, o, a, s = 0, u = b.expando, l = b.cache, p = b.support.deleteExpando, f = b.event.special; for (; null != (n = e[s]) ; s++) if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) { if (a.events) for (r in a.events) f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle); l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o)) } }
//    }); var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + x + ")(.*)$", "i"), Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + x + ")", "i"), Gt = { BODY: "block" }, Qt = { position: "absolute", visibility: "hidden", display: "block" }, Kt = { letterSpacing: 0, fontWeight: 400 }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"]; function tn(e, t) { if (t in e) return t; var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length; while (i--) if (t = en[i] + n, t in e) return t; return r } function nn(e, t) { return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e) } function rn(e, t) { var n, r, i, o = [], a = 0, s = e.length; for (; s > a; a++) r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display")))); for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none")); return e } b.fn.extend({ css: function (e, n) { return b.access(this, function (e, n, r) { var i, o, a = {}, s = 0; if (b.isArray(n)) { for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = b.css(e, n[s], !1, o); return a } return r !== t ? b.style(e, n, r) : b.css(e, n) }, e, n, arguments.length > 1) }, show: function () { return rn(this, !0) }, hide: function () { return rn(this) }, toggle: function (e) { var t = "boolean" == typeof e; return this.each(function () { (t ? e : nn(this)) ? b(this).show() : b(this).hide() }) } }), b.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = Wt(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": b.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function (e, n, r, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var o, a, s, u = b.camelCase(n), l = e.style; if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n]; if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try { l[n] = r } catch (c) { } } }, css: function (e, n, r, i) { var o, a, s, u = b.camelCase(n); return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a }, swap: function (e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; i = n.apply(e, r || []); for (o in t) e.style[o] = a[o]; return i } }), e.getComputedStyle ? (Rt = function (t) { return e.getComputedStyle(t, null) }, Wt = function (e, n, r) { var i, o, a, s = r || Rt(e), u = s ? s.getPropertyValue(n) || s[n] : t, l = e.style; return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u }) : o.documentElement.currentStyle && (Rt = function (e) { return e.currentStyle }, Wt = function (e, n, r) { var i, o, a, s = r || Rt(e), u = s ? s[n] : t, l = e.style; return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u }); function on(e, t, n) { var r = Vt.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t } function an(e, t, n, r, i) { var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; for (; 4 > o; o += 2) "margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i))); return a } function sn(e, t, n) { var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o); if (0 >= i || null == i) { if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i; r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0 } return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px" } function un(e) { var t = o, n = Gt[e]; return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n } function ln(e, t) { var n = b(t.createElement(e)).appendTo(t.body), r = b.css(n[0], "display"); return n.remove(), r } b.each(["height", "width"], function (e, n) { b.cssHooks[n] = { get: function (e, r, i) { return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function () { return sn(e, n, i) }) : sn(e, n, i) : t }, set: function (e, t, r) { var i = r && Rt(e); return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0) } } }), b.support.opacity || (b.cssHooks.opacity = { get: function (e, t) { return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function (e, t) { var n = e.style, r = e.currentStyle, i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || ""; n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i) } }), b(function () { b.support.reliableMarginRight || (b.cssHooks.marginRight = { get: function (e, n) { return n ? b.swap(e, { display: "inline-block" }, Wt, [e, "marginRight"]) : t } }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function (e, n) { b.cssHooks[n] = { get: function (e, r) { return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t } } }) }), b.expr && b.expr.filters && (b.expr.filters.hidden = function (e) { return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display")) }, b.expr.filters.visible = function (e) { return !b.expr.filters.hidden(e) }), b.each({ margin: "", padding: "", border: "Width" }, function (e, t) { b.cssHooks[e + t] = { expand: function (n) { var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, Ut.test(e) || (b.cssHooks[e + t].set = on) }); var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i; b.fn.extend({ serialize: function () { return b.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = b.prop(this, "elements"); return e ? b.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e)) }).map(function (e, t) { var n = b(this).val(); return null == n ? null : b.isArray(n) ? b.map(n, function (e) { return { name: t.name, value: e.replace(fn, "\r\n") } }) : { name: t.name, value: n.replace(fn, "\r\n") } }).get() } }), b.param = function (e, n) { var r, i = [], o = function (e, t) { t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) }; if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function () { o(this.name, this.value) }); else for (r in e) gn(r, e[r], n, o); return i.join("&").replace(cn, "+") }; function gn(e, t, n, r) { var i; if (b.isArray(t)) b.each(t, function (t, i) { n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) }); else if (n || "object" !== b.type(t)) r(e, t); else for (i in t) gn(e + "[" + i + "]", t[i], n, r) } b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) { b.fn[t] = function (e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), b.fn.hover = function (e, t) { return this.mouseenter(e).mouseleave(t || e) }; var mn, yn, vn = b.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Cn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = b.fn.load, An = {}, jn = {}, Dn = "*/".concat("*"); try { yn = a.href } catch (Ln) { yn = o.createElement("a"), yn.href = "", yn = yn.href } mn = En.exec(yn.toLowerCase()) || []; function Hn(e) { return function (t, n) { "string" != typeof t && (n = t, t = "*"); var r, i = 0, o = t.toLowerCase().match(w) || []; if (b.isFunction(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } } function qn(e, n, r, i) { var o = {}, a = e === jn; function s(u) { var l; return o[u] = !0, b.each(e[u] || [], function (e, u) { var c = u(n, r, i); return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1) }), l } return s(n.dataTypes[0]) || !o["*"] && s("*") } function Mn(e, n) { var r, i, o = b.ajaxSettings.flatOptions || {}; for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]); return r && b.extend(!0, e, r), e } b.fn.load = function (e, n, r) { if ("string" != typeof e && Sn) return Sn.apply(this, arguments); var i, o, a, s = this, u = e.indexOf(" "); return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({ url: e, type: a, dataType: "html", data: n }).done(function (e) { o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e) }).complete(r && function (e, t) { s.each(r, o || [e.responseText, t, e]) }), this }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { b.fn[t] = function (e) { return this.on(t, e) } }), b.each(["get", "post"], function (e, n) { b[n] = function (e, r, i, o) { return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({ url: e, type: n, dataType: o, data: r, success: i }) } }), b.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yn, type: "GET", isLocal: Nn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": e.String, "text html": !0, "text json": b.parseJSON, "text xml": b.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e) }, ajaxPrefilter: Hn(An), ajaxTransport: Hn(jn), ajax: function (e, n) { "object" == typeof e && (n = e, e = t), n = n || {}; var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event, h = b.Deferred(), g = b.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, x = 0, T = "canceled", N = { readyState: 0, getResponseHeader: function (e) { var t; if (2 === x) { if (!c) { c = {}; while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2] } t = c[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function () { return 2 === x ? a : null }, setRequestHeader: function (e, t) { var n = e.toLowerCase(); return x || (e = v[n] = v[n] || e, y[e] = t), this }, overrideMimeType: function (e) { return x || (p.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (2 > x) for (t in e) m[t] = [m[t], e[t]]; else N.always(e[N.status]); return this }, abort: function (e) { var t = e || T; return l && l.abort(t), k(0, t), this } }; if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) return N; u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]); for (i in p.headers) N.setRequestHeader(i, p.headers[i]); if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort(); T = "abort"; for (i in { success: 1, error: 1, complete: 1 }) N[i](p[i]); if (l = qn(jn, p, n, N)) { N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function () { N.abort("timeout") }, p.timeout)); try { x = 1, l.send(y, k) } catch (C) { if (!(2 > x)) throw C; k(-1, C) } } else k(-1, "No Transport"); function k(e, n, r, i) { var c, y, v, w, T, C = n; 2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop"))) } return N }, getScript: function (e, n) { return b.get(e, t, n, "script") }, getJSON: function (e, t, n) { return b.get(e, t, n, "json") } }); function _n(e, n, r) { var i, o, a, s, u = e.contents, l = e.dataTypes, c = e.responseFields; for (s in c) s in r && (n[c[s]] = r[s]); while ("*" === l[0]) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type")); if (o) for (s in u) if (u[s] && u[s].test(o)) { l.unshift(s); break } if (l[0] in r) a = l[0]; else { for (s in r) { if (!l[0] || e.converters[s + " " + l[0]]) { a = s; break } i || (i = s) } a = a || i } return a ? (a !== l[0] && l.unshift(a), r[a]) : t } function Fn(e, t) { var n, r, i, o, a = {}, s = 0, u = e.dataTypes.slice(), l = u[0]; if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) for (i in e.converters) a[i.toLowerCase()] = e.converters[i]; for (; r = u[++s];) if ("*" !== r) { if ("*" !== l && l !== r) { if (i = a[l + " " + r] || a["* " + r], !i) for (n in a) if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) { i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r)); break } if (i !== !0) if (i && e["throws"]) t = i(t); else try { t = i(t) } catch (c) { return { state: "parsererror", error: i ? c : "No conversion from " + l + " to " + r } } } l = r } return { state: "success", data: t } } b.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (e) { return b.globalEval(e), e } } }), b.ajaxPrefilter("script", function (e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), b.ajaxTransport("script", function (e) { if (e.crossDomain) { var n, r = o.head || b("head")[0] || o.documentElement; return { send: function (t, i) { n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")) }, r.insertBefore(n, r.firstChild) }, abort: function () { n && n.onload(t, !0) } } } }); var On = [], Bn = /(=)\?(?=&|$)|\?\?/; b.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = On.pop() || b.expando + "_" + vn++; return this[e] = !0, e } }), b.ajaxPrefilter("json jsonp", function (n, r, i) { var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data"); return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () { return s || b.error(o + " was not called"), s[0] }, n.dataTypes[0] = "json", a = e[o], e[o] = function () { s = arguments }, i.always(function () { e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t }), "script") : t }); var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () { var e; for (e in Pn) Pn[e](t, !0) }; function In() { try { return new e.XMLHttpRequest } catch (t) { } } function zn() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) { } } b.ajaxSettings.xhr = e.ActiveXObject ? function () { return !this.isLocal && In() || zn() } : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !!Rn && "withCredentials" in Rn, Rn = b.support.ajax = !!Rn, Rn && b.ajaxTransport(function (n) { if (!n.crossDomain || b.support.cors) { var r; return { send: function (i, o) { var a, s, u = n.xhr(); if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s]; n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"); try { for (s in i) u.setRequestHeader(s, i[s]) } catch (l) { } u.send(n.hasContent && n.data || null), r = function (e, i) { var s, l, c, p; try { if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) 4 !== u.readyState && u.abort(); else { p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText); try { c = u.statusText } catch (f) { c = "" } s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404 } } catch (d) { i || o(-1, d) } p && o(s, c, p, l) }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r() }, abort: function () { r && r(t, !0) } } } }); var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = { "*": [function (e, t) { var n, r, i = this.createTween(e, t), o = Yn.exec(t), a = i.cur(), s = +a || 0, u = 1, l = 20; if (o) { if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) { s = b.css(i.elem, e, !0) || n || 1; do u = u || ".5", s /= u, b.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l) } i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n } return i }] }; function Kn() { return setTimeout(function () { Xn = t }), Xn = b.now() } function Zn(e, t) { b.each(t, function (t, n) { var r = (Qn[t] || []).concat(Qn["*"]), i = 0, o = r.length; for (; o > i; i++) if (r[i].call(e, t, n)) return }) } function er(e, t, n) { var r, i, o = 0, a = Gn.length, s = b.Deferred().always(function () { delete u.elem }), u = function () { if (i) return !1; var t = Xn || Kn(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; for (; u > a; a++) l.tweens[a].run(o); return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1) }, l = s.promise({ elem: e, props: b.extend({}, t), opts: b.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: Xn || Kn(), duration: n.duration, tweens: [], createTween: function (t, n) { var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r }, stop: function (t) { var n = 0, r = t ? l.tweens.length : 0; if (i) return this; for (i = !0; r > n; n++) l.tweens[n].run(1); return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this } }), c = l.props; for (tr(c, l.opts.specialEasing) ; a > o; o++) if (r = Gn[o].call(l, e, c, l.opts)) return r; return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always) } function tr(e, t) { var n, r, i, o, a; for (i in e) if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) { n = a.expand(n), delete e[r]; for (i in n) i in e || (e[i] = n[i], t[i] = o) } else t[r] = o } b.Animation = b.extend(er, { tweener: function (e, t) { b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); var n, r = 0, i = e.length; for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t) }, prefilter: function (e, t) { t ? Gn.unshift(e) : Gn.push(e) } }); function nr(e, t, n) { var r, i, o, a, s, u, l, c, p, f = this, d = e.style, h = {}, g = [], m = e.nodeType && nn(e); n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function () { c.unqueued || p() }), c.unqueued++, f.always(function () { f.always(function () { c.unqueued--, b.queue(e, "fx").length || c.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function () { d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2] })); for (i in t) if (a = t[i], Vn.exec(a)) { if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue; g.push(i) } if (o = g.length) { s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function () { b(e).hide() }), f.done(function () { var t; b._removeData(e, "fxshow"); for (t in h) b.style(e, t, h[t]) }); for (i = 0; o > i; i++) r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0)) } } function rr(e, t, n, r, i) { return new rr.prototype.init(e, t, n, r, i) } b.Tween = rr, rr.prototype = { constructor: rr, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px") }, cur: function () { var e = rr.propHooks[this.prop]; return e && e.get ? e.get(this) : rr.propHooks._default.get(this) }, run: function (e) { var t, n = rr.propHooks[this.prop]; return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this } }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = { _default: { get: function (e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function (e) { b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, b.each(["toggle", "show", "hide"], function (e, t) { var n = b.fn[t]; b.fn[t] = function (e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i) } }), b.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(nn).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (e, t, n, r) { var i = b.isEmptyObject(e), o = b.speed(t, n, r), a = function () { var t = er(this, b.extend({}, e), o); a.finish = function () { t.stop(!0) }, (i || b._data(this, "finish")) && t.stop(!0) }; return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a) }, stop: function (e, n, r) { var i = function (e) { var t = e.stop; delete e.stop, t(r) }; return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () { var t = !0, n = null != e && e + "queueHooks", o = b.timers, a = b._data(this); if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]); for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1)); (t || !r) && b.dequeue(this, e) }) }, finish: function (e) { return e !== !1 && (e = e || "fx"), this.each(function () { var t, n = b._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = b.timers, a = r ? r.length : 0; for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this); delete n.finish }) } }); function ir(e, t) { var n, r = { height: e }, i = 0; for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e; return t && (r.opacity = r.width = e), r } b.each({ slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) { b.fn[e] = function (e, n, r) { return this.animate(t, e, n, r) } }), b.speed = function (e, t, n) { var r = e && "object" == typeof e ? b.extend({}, e) : { complete: n || !n && t || b.isFunction(e) && e, duration: e, easing: n && t || t && !b.isFunction(t) && t }; return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () { b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue) }, r }, b.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 } }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function () { var e, n = b.timers, r = 0; for (Xn = b.now() ; n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1); n.length || b.fx.stop(), Xn = t }, b.fx.timer = function (e) { e() && b.timers.push(e) && b.fx.start() }, b.fx.interval = 13, b.fx.start = function () { Un || (Un = setInterval(b.fx.tick, b.fx.interval)) }, b.fx.stop = function () { clearInterval(Un), Un = null }, b.fx.speeds = { slow: 600, fast: 200, _default: 400 }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function (e) { return b.grep(b.timers, function (t) { return e === t.elem }).length }), b.fn.offset = function (e) { if (arguments.length) return e === t ? this : this.each(function (t) { b.offset.setOffset(this, e, t) }); var n, r, o = { top: 0, left: 0 }, a = this[0], s = a && a.ownerDocument; if (s) return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), { top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : o }, b.offset = { setOffset: function (e, t, n) { var r = b.css(e, "position"); "static" === r && (e.style.position = "relative"); var i = b(e), o = i.offset(), a = b.css(e, "top"), s = b.css(e, "left"), u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1, l = {}, c = {}, p, f; u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l) } }, b.fn.extend({ position: function () { if (this[0]) { var e, t, n = { top: 0, left: 0 }, r = this[0]; return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - b.css(r, "marginTop", !0), left: t.left - n.left - b.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent || o.documentElement; while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent; return e || o.documentElement }) } }), b.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, n) { var r = /Y/.test(n); b.fn[e] = function (i) { return b.access(this, function (e, i, o) { var a = or(e); return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t) }, e, i, arguments.length, null) } }); function or(e) { return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 } b.each({ Height: "height", Width: "width" }, function (e, n) { b.each({ padding: "inner" + e, content: n, "": "outer" + e }, function (r, i) { b.fn[i] = function (i, o) { var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border"); return b.access(this, function (n, r, i) { var o; return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s) }, n, a ? i : t, a, null) } }) }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () { return b })
//})(window);


/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = a.document,
        m = "2.1.3",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = hb(),
            z = hb(),
            A = hb(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            db = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            eb = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fb) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function gb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + rb(o[l]);
                        w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function hb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ib(a) {
            return a[u] = !0, a
        }

        function jb(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function kb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function lb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function nb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function ob(a) {
            return ib(function(b) {
                return b = +b, ib(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pb(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = gb.support = {}, f = gb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = gb.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), p = !f(g), c.attributes = jb(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = jb(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), jb(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return lb(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, gb.matches = function(a, b) {
            return gb(a, null, null, b)
        }, gb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return gb(b, n, null, [a]).length > 0
        }, gb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, gb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, gb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, gb.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = gb.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = gb.selectors = {
            cacheLength: 50,
            createPseudo: ib,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = gb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ib(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ib(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ib(function(a) {
                    return function(b) {
                        return gb(a, b).length > 0
                    }
                }),
                contains: ib(function(a) {
                    return a = a.replace(cb, db),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ib(function(a) {
                    return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: ob(function() {
                    return [0]
                }),
                last: ob(function(a, b) {
                    return [b - 1]
                }),
                eq: ob(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: ob(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: ob(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = mb(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = nb(b);

        function qb() {}
        qb.prototype = d.filters = d.pseudos, d.setFilters = new qb, g = gb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? gb.error(a) : z(a, i).slice(0)
        };

        function rb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function tb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ub(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) gb(a, b[d], c);
            return c
        }

        function vb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wb(a, b, c, d, e, f) {
            return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ub(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : vb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = vb(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function(a) {
                    return a === b
                }, h, !0), l = sb(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [sb(tb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a))
                    }
                    m.push(c)
                }
            return tb(m)
        }

        function yb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = F.call(i));
                            s = vb(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ib(f) : f
        }
        return h = gb.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, yb(e, d)), f.selector = a
            }
            return f
        }, i = gb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && rb(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = jb(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), jb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || kb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && jb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || kb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), jb(function(a) {
            return null == a.getAttribute("disabled")
        }) || kb(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), gb
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = n.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var c = h.length;
                        ! function g(b) {
                            n.each(b, function(b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                            })
                        }(arguments), d ? f = h.length : b && (e = c, j(b))
                    }
                    return this
                },
                remove: function() {
                    return h && n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], f = 0, this
                },
                disable: function() {
                    return h = i = b = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, b || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, b) {
                    return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return k
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });

    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }
    n.ready.promise = function(b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(n(a), c)
            })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K,
        M = new K,
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                M.set(a, b, c)
            } else c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a)
        },
        data: function(a, b, c) {
            return M.access(a, b, c)
        },
        removeData: function(a, b) {
            M.remove(a, b)
        },
        _data: function(a, b, c) {
            return L.access(a, b, c)
        },
        _removeData: function(a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a)
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        },
        T = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = l.createDocumentFragment(),
            b = a.appendChild(l.createElement("div")),
            c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/,
        W = /^(?:mouse|pointer|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l],
                q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (L.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bb = /<([\w:]+)/,
        cb = /<|&#?\w+;/,
        db = /<(?:script|style|link)/i,
        eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fb = /^$|\/(?:java|ecma)script/i,
        gb = /^true\/(.*)/,
        hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ib = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;

    function jb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++) pb(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++) nb(f[d], g[d]);
                else nb(a, h);
            return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
                    else if (cb.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
                while (j--) f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++])
                if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
                    j = 0;
                    while (e = f[j++]) fb.test(e.type || "") && c.push(e)
                }
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                m = this,
                o = l - 1,
                p = a[0],
                q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++) h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qb, rb = {};

    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function tb(a) {
        var b = l,
            c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
    }
    var ub = /^margin/,
        vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wb = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };

    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function yb(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d = l.documentElement,
            e = l.createElement("div"),
            f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function() {
                    return g(), b
                },
                boxSizingReliable: function() {
                    return null == c && g(), c
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
                }
            })
        }
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var zb = /^(none|table(?!-c[ea]).+)/,
        Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
        Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
        Cb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Db = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Eb = ["Webkit", "O", "Moz", "ms"];

    function Fb(a, b) {
        if (b in a) return b;
        var c = b[0].toUpperCase() + b.slice(1),
            d = b,
            e = Eb.length;
        while (e--)
            if (b = Eb[e] + c, b in a) return b;
        return d
    }

    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ib(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = wb(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function() {
                    return Ib(a, b, d)
                }) : Ib(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xb, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ub.test(a) || (n.cssHooks[a + b].set = Gb)
    }), n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Jb(this, !0)
        },
        hide: function() {
            return Jb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e)
    }
    n.Tween = Kb, Kb.prototype = {
        constructor: Kb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/,
        Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pb = /queueHooks$/,
        Qb = [Vb],
        Rb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = Ob.exec(b),
                    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function Sb() {
        return setTimeout(function() {
            Lb = void 0
        }), Lb = n.now()
    }

    function Tb(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && S(a),
            q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Nb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function Xb(a, b, c) {
        var d, e, f = 0,
            g = Qb.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Lb || Sb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++)
            if (d = Qb[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(Xb, {
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? Qb.unshift(a) : Qb.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(S).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = Xb(this, n.extend({}, a), f);
                        (e || L.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = L.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = L.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: Tb("show"),
            slideUp: Tb("hide"),
            slideToggle: Tb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = 0,
                c = n.timers;
            for (Lb = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), Lb = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            clearInterval(Mb), Mb = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(a, b) {
            return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a = l.createElement("input"),
                b = l.createElement("select"),
                c = b.appendChild(l.createElement("option"));
            a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
        }();
    var Yb, Zb, $b = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Zb = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function(a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
        }
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = n(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cc = n.now(),
        dc = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var ec = /#.*$/,
        fc = /([?&])_=[^&]*/,
        gc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ic = /^(?:GET|HEAD)$/,
        jc = /^\/\//,
        kc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        lc = {},
        mc = {},
        nc = "*/".concat("*"),
        oc = a.location.href,
        pc = kc.exec(oc.toLowerCase()) || [];

    function qc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function rc(a, b, c, d) {
        var e = {},
            f = a === mc;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function tc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function uc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: oc,
            type: "GET",
            isLocal: hc.test(pc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? sc(sc(a, n.ajaxSettings), b) : sc(n.ajaxSettings, a)
        },
        ajaxPrefilter: qc(lc),
        ajaxTransport: qc(mc),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = gc.exec(e)) f[b[1].toLowerCase()] = b[2]
                            }
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? e : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || oc) + "").replace(ec, "").replace(jc, pc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pc[1] && h[2] === pc[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pc[3] || ("http:" === pc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rc(lc, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ic.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fc.test(d) ? d.replace(fc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[j](k[j]);
            if (c = rc(mc, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tc(k, v, f)), u = uc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            } : function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var vc = /%20/g,
        wc = /\[\]$/,
        xc = /\r?\n/g,
        yc = /^(?:submit|button|image|reset|file)$/i,
        zc = /^(?:input|select|textarea|keygen)/i;

    function Ac(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || wc.test(a) ? d(a, e) : Ac(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Ac(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Ac(c, a[c], b, e);
        return d.join("&").replace(vc, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zc.test(this.nodeName) && !yc.test(a) && (this.checked || !T.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(xc, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Bc = 0,
        Cc = {},
        Dc = {
            0: 200,
            1223: 204
        },
        Ec = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Cc) Cc[a]()
    }), k.cors = !!Ec && "withCredentials" in Ec, k.ajax = Ec = !!Ec, n.ajaxTransport(function(a) {
        var b;
        return k.cors || Ec && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Bc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Cc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Dc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Cc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Fc = [],
        Gc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Fc.pop() || n.expando + "_" + cc++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Hc) return Hc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Ic = a.document.documentElement;

    function Jc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jc(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || Ic;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ic
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Jc(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function(a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Kc = a.jQuery,
        Lc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Lc), b && a.jQuery === n && (a.jQuery = Kc), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});




//JQUERY CODE BLOCK END

/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2014 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.0
*/
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    var b, c = navigator.userAgent,
        d = /iphone/i.test(c),
        e = /chrome/i.test(c),
        f = /android/i.test(c);
    a.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, a.fn.extend({
        caret: function(a, b) {
            var c;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select())
            })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
                begin: a,
                end: b
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(c, g) {
            var h, i, j, k, l, m, n, o;
            if (!c && this.length > 0) {
                h = a(this[0]);
                var p = h.data(a.mask.dataName);
                return p ? p() : void 0
            }
            return g = a.extend({
                autoclear: 0 /*a.mask.autoclear*/ ,
                placeholder: a.mask.placeholder,
                completed: null
            }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function(a, b) {
                "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null)
            }), this.trigger("unmask").each(function() {
                function h() {
                    if (g.completed) {
                        for (var a = l; m >= a; a++)
                            if (j[a] && C[a] === p(a)) return;
                        g.completed.call(B)
                    }
                }

                function p(a) {
                    return g.placeholder.charAt(a < g.placeholder.length ? a : 0)
                }

                function q(a) {
                    for (; ++a < n && !j[a];);
                    return a
                }

                function r(a) {
                    for (; --a >= 0 && !j[a];);
                    return a
                }

                function s(a, b) {
                    var c, d;
                    if (!(0 > a)) {
                        for (c = a, d = q(b); n > c; c++)
                            if (j[c]) {
                                if (!(n > d && j[c].test(C[d]))) break;
                                C[c] = C[d], C[d] = p(d), d = q(d)
                            }
                        z(), B.caret(Math.max(l, a))
                    }
                }

                function t(a) {
                    var b, c, d, e;
                    for (b = a, c = p(a); n > b; b++)
                        if (j[b]) {
                            if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
                            c = e
                        }
                }

                function u() {
                    var a = B.val(),
                        b = B.caret();
                    if (a.length < o.length) {
                        for (A(!0); b.begin > 0 && !j[b.begin - 1];) b.begin--;
                        if (0 === b.begin)
                            for (; b.begin < l && !j[b.begin];) b.begin++;
                        B.caret(b.begin, b.begin)
                    } else {
                        for (A(!0); b.begin < n && !j[b.begin];) b.begin++;
                        B.caret(b.begin, b.begin)
                    }
                    h()
                }

                function v() {
                    A(), B.val() != E && B.change()
                }

                function w(a) {
                    if (!B.prop("readonly")) {
                        var b, c, e, f = a.which || a.keyCode;
                        o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault())
                    }
                }

                function x(b) {
                    if (!B.prop("readonly")) {
                        var c, d, e, g = b.which || b.keyCode,
                            i = B.caret();
                        if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                            if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                                if (t(c), C[c] = d, z(), e = q(c), f) {
                                    var k = function() {
                                        a.proxy(a.fn.caret, B, e)()
                                    };
                                    setTimeout(k, 0)
                                } else B.caret(e);
                                i.begin <= m && h()
                            }
                            b.preventDefault()
                        }
                    }
                }

                function y(a, b) {
                    var c;
                    for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c))
                }

                function z() {
                    B.val(C.join(""))
                }

                function A(a) {
                    var b, c, d, e = B.val(),
                        f = -1;
                    for (b = 0, d = 0; n > b; b++)
                        if (j[b]) {
                            for (C[b] = p(b); d++ < e.length;)
                                if (c = e.charAt(d - 1), j[b].test(c)) {
                                    C[b] = c, f = b;
                                    break
                                }
                            if (d > e.length) {
                                y(b + 1, n);
                                break
                            }
                        } else C[b] === e.charAt(d) && d++, k > b && (f = b);
                    return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l
                }
                var B = a(this),
                    C = a.map(c.split(""), function(a, b) {
                        return "?" != a ? i[a] ? p(b) : a : void 0
                    }),
                    D = C.join(""),
                    E = B.val();
                B.data(a.mask.dataName, function() {
                    return a.map(C, function(a, b) {
                        return j[b] && a != p(b) ? a : null
                    }).join("")
                }), B.one("unmask", function() {
                    B.off(".mask").removeData(a.mask.dataName)
                }).on("focus.mask", function() {
                    if (!B.prop("readonly")) {
                        clearTimeout(b);
                        var a;
                        E = B.val(), a = A(), b = setTimeout(function() {
                            z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a)
                        }, 10)
                    }
                }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask propertychange.mask", function() {
                    B.prop("readonly") || setTimeout(function() {
                        var a = A(!0);
                        B.caret(a), h()
                    }, 0)
                }), e && f && B.off("input.mask").on("input.mask", u), B.off("propertychange.mask").on("propertychange.mask", u), A()
            })
        }
    })
});
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2014 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.0
*/

/*
 * jQuery autoResize (textarea auto-resizer)
 * @copyright James Padolsey http://james.padolsey.com
 * @version 1.04 source taken from https://gist.github.com/icyleaf/269160 //changes done by developer : added input,propertychange events and changed the limit to 1000000
 */

(function(a) {
    a.fn.autoResize = function(j) {
        var b = a.extend({
            onResize: function() {},
            animate: true,
            animateDuration: 150,
            animateCallback: function() {},
            extraSpace: 20,
            limit: 1000000
        }, j);
        this.filter('textarea').each(function() {
            var c = a(this).css({
                    resize: 'none',
                    'overflow-y': 'hidden'
                }),
                k = c.height(),
                f = (function() {
                    var l = ['height', 'width', 'lineHeight', 'textDecoration', 'letterSpacing'],
                        h = {};
                    a.each(l, function(d, e) {
                        h[e] = c.css(e)
                    });
                    return c.clone().removeAttr('id').removeAttr('name').css({
                        position: 'absolute',
                        top: 0,
                        left: -9999
                    }).css(h).attr('tabIndex', '-1').insertBefore(c)
                })(),
                i = null,
                g = function() {
                    f.height(0).val(a(this).val()).scrollTop(10000);
                    var d = Math.max(f.scrollTop(), k) + b.extraSpace,
                        e = a(this).add(f);
                    if (i === d) {
                        return
                    }
                    i = d;
                    if (d >= b.limit) {
                        a(this).css('overflow-y', '');
                        return
                    }
                    b.onResize.call(this);
                    b.animate && c.css('display') === 'block' ? e.stop().animate({
                        height: d
                    }, b.animateDuration, b.animateCallback) : e.height(d)
                };
            c.unbind('.dynSiz').bind('propertychange.dynSiz', g).bind('input.dynSiz', g).bind('keyup.dynSiz', g).bind('keydown.dynSiz', g).bind('change.dynSiz', g)
        });
        return this
    }
})(jQuery);





///*! jquery-textcomplete - v0.7.0 - 2015-07-02 */


//!function (a) { if ("function" == typeof define && define.amd) define(["jquery"], a); else if ("object" == typeof module && module.exports) { var b = require("jquery"); module.exports = a(b) } else a(jQuery) }(function (a) { if ("undefined" == typeof a) throw new Error("jQuery.textcomplete requires jQuery"); return +function (a) { "use strict"; var b = function (a) { console.warn && console.warn(a) }, c = 1; a.fn.textcomplete = function (d, e) { var f = Array.prototype.slice.call(arguments); return this.each(function () { var g = a(this), h = g.data("textComplete"); if (h || (e || (e = {}), e._oid = c++, h = new a.fn.textcomplete.Completer(this, e), g.data("textComplete", h)), "string" == typeof d) { if (!h) return; f.shift(), h[d].apply(h, f), "destroy" === d && g.removeData("textComplete") } else a.each(d, function (c) { a.each(["header", "footer", "placement", "maxCount"], function (a) { c[a] && (h.option[a] = c[a], b(a + "as a strategy param is deprecated. Use option."), delete c[a]) }) }), h.register(a.fn.textcomplete.Strategy.parse(d)) }) } }(a), +function (a) { "use strict"; function b(c, d) { if (this.$el = a(c), this.id = "textcomplete" + f++, this.strategies = [], this.views = [], this.option = a.extend({}, b._getDefaults(), d), !this.$el.is("input[type=text]") && !this.$el.is("textarea") && !c.isContentEditable && "true" != c.contentEditable) throw new Error("textcomplete must be called on a Textarea or a ContentEditable."); if (c === document.activeElement) this.initialize(); else { var e = this; this.$el.one("focus." + this.id, function () { e.initialize() }) } } var c = function (a) { var b, c; return function () { var d = Array.prototype.slice.call(arguments); if (b) return c = d, void 0; b = !0; var e = this; d.unshift(function f() { if (c) { var d = c; c = void 0, d.unshift(f), a.apply(e, d) } else b = !1 }), a.apply(this, d) } }, d = function (a) { return "[object String]" === Object.prototype.toString.call(a) }, e = function (a) { return "[object Function]" === Object.prototype.toString.call(a) }, f = 0; b._getDefaults = function () { return b.DEFAULTS || (b.DEFAULTS = { appendTo: a("body"), zIndex: "100" }), b.DEFAULTS }, a.extend(b.prototype, { id: null, option: null, strategies: null, adapter: null, dropdown: null, $el: null, initialize: function () { var b = this.$el.get(0); this.dropdown = new a.fn.textcomplete.Dropdown(b, this, this.option); var c, d; this.option.adapter ? c = this.option.adapter : (d = this.$el.is("textarea") || this.$el.is("input[type=text]") ? "number" == typeof b.selectionEnd ? "Textarea" : "IETextarea" : "ContentEditable", c = a.fn.textcomplete[d]), this.adapter = new c(b, this, this.option) }, destroy: function () { this.$el.off("." + this.id), this.adapter && this.adapter.destroy(), this.dropdown && this.dropdown.destroy(), this.$el = this.adapter = this.dropdown = null }, trigger: function (a, b) { this.dropdown || this.initialize(), null != a || (a = this.adapter.getTextFromHeadToCaret()); var c = this._extractSearchQuery(a); if (c.length) { var d = c[1]; if (b && this._term === d) return; this._term = d, this._search.apply(this, c) } else this._term = null, this.dropdown.deactivate() }, fire: function (a) { var b = Array.prototype.slice.call(arguments, 1); return this.$el.trigger(a, b), this }, register: function (a) { Array.prototype.push.apply(this.strategies, a) }, select: function (a, b, c) { this.adapter.select(a, b, c), this.fire("change").fire("textComplete:select", a, b), this.adapter.focus() }, _clearAtNext: !0, _term: null, _extractSearchQuery: function (a) { for (var b = 0; b < this.strategies.length; b++) { var c = this.strategies[b], f = c.context(a); if (f || "" === f) { var g = e(c.match) ? c.match(a) : c.match; d(f) && (a = f); var h = a.match(g); if (h) return [c, h[c.index], h] } } return [] }, _search: c(function (a, b, c, d) { var e = this; b.search(c, function (d, f) { e.dropdown.shown || e.dropdown.activate(), e._clearAtNext && (e.dropdown.clear(), e._clearAtNext = !1), e.dropdown.setPosition(e.adapter.getCaretPosition()), e.dropdown.render(e._zip(d, b, c)), f || (a(), e._clearAtNext = !0) }, d) }), _zip: function (b, c, d) { return a.map(b, function (a) { return { value: a, strategy: c, term: d } }) } }), a.fn.textcomplete.Completer = b }(a), +function (a) { "use strict"; function b(c, d, f) { this.$el = b.createElement(f), this.completer = d, this.id = d.id + "dropdown", this._data = [], this.$inputEl = a(c), this.option = f, f.listPosition && (this.setPosition = f.listPosition), f.height && this.$el.height(f.height); var g = this; a.each(["maxCount", "placement", "footer", "header", "noResultsMessage", "className"], function (a, b) { null != f[b] && (g[b] = f[b]) }), this._bindEvents(c), e[this.id] = this } var c = a(window), d = function (a, b) { var c, d, e = b.strategy.idProperty; for (c = 0; c < a.length; c++) if (d = a[c], d.strategy === b.strategy) if (e) { if (d.value[e] === b.value[e]) return !0 } else if (d.value === b.value) return !0; return !1 }, e = {}; a(document).on("click", function (b) { var c = b.originalEvent && b.originalEvent.keepTextCompleteDropdown; a.each(e, function (a, b) { a !== c && b.deactivate() }) }); var f = { SKIP_DEFAULT: 0, KEY_UP: 1, KEY_DOWN: 2, KEY_ENTER: 3, KEY_PAGEUP: 4, KEY_PAGEDOWN: 5, KEY_ESCAPE: 6 }; a.extend(b, { createElement: function (b) { var c = b.appendTo; c instanceof a || (c = a(c)); var d = a("<ul></ul>").addClass("dropdown-menu textcomplete-dropdown").attr("id", "textcomplete-dropdown-" + b._oid).css({ display: "none", left: 0, position: "absolute", zIndex: b.zIndex }).appendTo(c); return d } }), a.extend(b.prototype, { $el: null, $inputEl: null, completer: null, footer: null, header: null, id: null, maxCount: 10, placement: "", shown: !1, data: [], className: "", destroy: function () { this.deactivate(), this.$el.off("." + this.id), this.$inputEl.off("." + this.id), this.clear(), this.$el = this.$inputEl = this.completer = null, delete e[this.id] }, render: function (b) { var c = this._buildContents(b), d = a.map(this.data, function (a) { return a.value }); this.data.length ? (this._renderHeader(d), this._renderFooter(d), c && (this._renderContents(c), this._fitToBottom(), this._activateIndexedItem()), this._setScroll()) : this.noResultsMessage ? this._renderNoResultsMessage(d) : this.shown && this.deactivate() }, setPosition: function (b) { this.$el.css(this._applyPlacement(b)); var c = "absolute"; return this.$inputEl.add(this.$inputEl.parents()).each(function () { return "absolute" === a(this).css("position") ? !1 : "fixed" === a(this).css("position") ? (c = "fixed", !1) : void 0 }), this.$el.css({ position: c }), this }, clear: function () { this.$el.html(""), this.data = [], this._index = 0, this._$header = this._$footer = this._$noResultsMessage = null }, activate: function () { return this.shown || (this.clear(), this.$el.show(), this.className && this.$el.addClass(this.className), this.completer.fire("textComplete:show"), this.shown = !0), this }, deactivate: function () { return this.shown && (this.$el.hide(), this.className && this.$el.removeClass(this.className), this.completer.fire("textComplete:hide"), this.shown = !1), this }, isUp: function (a) { return 38 === a.keyCode || a.ctrlKey && 80 === a.keyCode }, isDown: function (a) { return 40 === a.keyCode || a.ctrlKey && 78 === a.keyCode }, isEnter: function (a) { var b = a.ctrlKey || a.altKey || a.metaKey || a.shiftKey; return !b && (13 === a.keyCode || 9 === a.keyCode || this.option.completeOnSpace === !0 && 32 === a.keyCode) }, isPageup: function (a) { return 33 === a.keyCode }, isPagedown: function (a) { return 34 === a.keyCode }, isEscape: function (a) { return 27 === a.keyCode }, _data: null, _index: null, _$header: null, _$noResultsMessage: null, _$footer: null, _bindEvents: function () { this.$el.on("mousedown." + this.id, ".textcomplete-item", a.proxy(this._onClick, this)), this.$el.on("touchstart." + this.id, ".textcomplete-item", a.proxy(this._onClick, this)), this.$el.on("mouseover." + this.id, ".textcomplete-item", a.proxy(this._onMouseover, this)), this.$inputEl.on("keydown." + this.id, a.proxy(this._onKeydown, this)) }, _onClick: function (b) { var c = a(b.target); b.preventDefault(), b.originalEvent.keepTextCompleteDropdown = this.id, c.hasClass("textcomplete-item") || (c = c.closest(".textcomplete-item")); var d = this.data[parseInt(c.data("index"), 10)]; this.completer.select(d.value, d.strategy, b); var e = this; setTimeout(function () { e.deactivate(), "touchstart" === b.type && e.$inputEl.focus() }, 0) }, _onMouseover: function (b) { var c = a(b.target); b.preventDefault(), c.hasClass("textcomplete-item") || (c = c.closest(".textcomplete-item")), this._index = parseInt(c.data("index"), 10), this._activateIndexedItem() }, _onKeydown: function (b) { if (this.shown) { var c; switch (a.isFunction(this.option.onKeydown) && (c = this.option.onKeydown(b, f)), null == c && (c = this._defaultKeydown(b)), c) { case f.KEY_UP: b.preventDefault(), this._up(); break; case f.KEY_DOWN: b.preventDefault(), this._down(); break; case f.KEY_ENTER: b.preventDefault(), this._enter(b); break; case f.KEY_PAGEUP: b.preventDefault(), this._pageup(); break; case f.KEY_PAGEDOWN: b.preventDefault(), this._pagedown(); break; case f.KEY_ESCAPE: b.preventDefault(), this.deactivate() } } }, _defaultKeydown: function (a) { return this.isUp(a) ? f.KEY_UP : this.isDown(a) ? f.KEY_DOWN : this.isEnter(a) ? f.KEY_ENTER : this.isPageup(a) ? f.KEY_PAGEUP : this.isPagedown(a) ? f.KEY_PAGEDOWN : this.isEscape(a) ? f.KEY_ESCAPE : void 0 }, _up: function () { 0 === this._index ? this._index = this.data.length - 1 : this._index -= 1, this._activateIndexedItem(), this._setScroll() }, _down: function () { this._index === this.data.length - 1 ? this._index = 0 : this._index += 1, this._activateIndexedItem(), this._setScroll() }, _enter: function (a) { var b = this.data[parseInt(this._getActiveElement().data("index"), 10)]; this.completer.select(b.value, b.strategy, a), this.deactivate() }, _pageup: function () { var b = 0, c = this._getActiveElement().position().top - this.$el.innerHeight(); this.$el.children().each(function (d) { return a(this).position().top + a(this).outerHeight() > c ? (b = d, !1) : void 0 }), this._index = b, this._activateIndexedItem(), this._setScroll() }, _pagedown: function () { var b = this.data.length - 1, c = this._getActiveElement().position().top + this.$el.innerHeight(); this.$el.children().each(function (d) { return a(this).position().top > c ? (b = d, !1) : void 0 }), this._index = b, this._activateIndexedItem(), this._setScroll() }, _activateIndexedItem: function () { this.$el.find(".textcomplete-item.active").removeClass("active"), this._getActiveElement().addClass("active") }, _getActiveElement: function () { return this.$el.children(".textcomplete-item:nth(" + this._index + ")") }, _setScroll: function () { var a = this._getActiveElement(), b = a.position().top, c = a.outerHeight(), d = this.$el.innerHeight(), e = this.$el.scrollTop(); 0 === this._index || this._index == this.data.length - 1 || 0 > b ? this.$el.scrollTop(b + e) : b + c > d && this.$el.scrollTop(b + c + e - d) }, _buildContents: function (a) { var b, c, e, f = ""; for (c = 0; c < a.length && this.data.length !== this.maxCount; c++) b = a[c], d(this.data, b) || (e = this.data.length, this.data.push(b), f += '<li class="textcomplete-item" data-index="' + e + '"><a>', f += b.strategy.template(b.value, b.term), f += "</a></li>"); return f }, _renderHeader: function (b) { if (this.header) { this._$header || (this._$header = a('<li class="textcomplete-header"></li>').prependTo(this.$el)); var c = a.isFunction(this.header) ? this.header(b) : this.header; this._$header.html(c) } }, _renderFooter: function (b) { if (this.footer) { this._$footer || (this._$footer = a('<li class="textcomplete-footer"></li>').appendTo(this.$el)); var c = a.isFunction(this.footer) ? this.footer(b) : this.footer; this._$footer.html(c) } }, _renderNoResultsMessage: function (b) { if (this.noResultsMessage) { this._$noResultsMessage || (this._$noResultsMessage = a('<li class="textcomplete-no-results-message"></li>').appendTo(this.$el)); var c = a.isFunction(this.noResultsMessage) ? this.noResultsMessage(b) : this.noResultsMessage; this._$noResultsMessage.html(c) } }, _renderContents: function (a) { this._$footer ? this._$footer.before(a) : this.$el.append(a) }, _fitToBottom: function () { var a = c.scrollTop() + c.height(), b = this.$el.height(); this.$el.position().top + b > a && this.$el.offset({ top: a - b }) }, _applyPlacement: function (a) { return -1 !== this.placement.indexOf("top") ? a = { top: "auto", bottom: this.$el.parent().height() - a.top + a.lineHeight, left: a.left } : (a.bottom = "auto", delete a.lineHeight), -1 !== this.placement.indexOf("absleft") ? a.left = 0 : -1 !== this.placement.indexOf("absright") && (a.right = 0, a.left = "auto"), a } }), a.fn.textcomplete.Dropdown = b, a.extend(a.fn.textcomplete, f) }(a), +function (a) { "use strict"; function b(b) { a.extend(this, b), this.cache && (this.search = c(this.search)) } var c = function (a) { var b = {}; return function (c, d) { b[c] ? d(b[c]) : a.call(this, c, function (a) { b[c] = (b[c] || []).concat(a), d.apply(null, arguments) }) } }; b.parse = function (c) { return a.map(c, function (a) { return new b(a) }) }, a.extend(b.prototype, { match: null, replace: null, search: null, cache: !1, context: function () { return !0 }, index: 2, template: function (a) { return a }, idProperty: null }), a.fn.textcomplete.Strategy = b }(a), +function (a) { "use strict"; function b() { } var c = Date.now || function () { return (new Date).getTime() }, d = function (a, b) { var d, e, f, g, h, i = function () { var j = c() - g; b > j ? d = setTimeout(i, b - j) : (d = null, h = a.apply(f, e), f = e = null) }; return function () { return f = this, e = arguments, g = c(), d || (d = setTimeout(i, b)), h } }; a.extend(b.prototype, { id: null, completer: null, el: null, $el: null, option: null, initialize: function (b, c, e) { this.el = b, this.$el = a(b), this.id = c.id + this.constructor.name, this.completer = c, this.option = e, this.option.debounce && (this._onKeyup = d(this._onKeyup, this.option.debounce)), this._bindEvents() }, destroy: function () { this.$el.off("." + this.id), this.$el = this.el = this.completer = null }, select: function () { throw new Error("Not implemented") }, getCaretPosition: function () { var a = this._getCaretRelativePosition(), b = this.$el.offset(); return a.top += b.top, a.left += b.left, a }, focus: function () { this.$el.focus() }, _bindEvents: function () { this.$el.on("keyup." + this.id, a.proxy(this._onKeyup, this)) }, _onKeyup: function (a) { this._skipSearch(a) || this.completer.trigger(this.getTextFromHeadToCaret(), !0) }, _skipSearch: function (a) { switch (a.keyCode) { case 13: case 40: case 38: return !0 } if (a.ctrlKey) switch (a.keyCode) { case 78: case 80: return !0 } } }), a.fn.textcomplete.Adapter = b }(a), +function (a) { "use strict"; function b(a, b, c) { this.initialize(a, b, c) } b.DIV_PROPERTIES = { left: -9999, position: "absolute", top: 0, whiteSpace: "pre-wrap" }, b.COPY_PROPERTIES = ["border-width", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "word-spacing", "line-height", "text-decoration", "text-align", "width", "padding-top", "padding-right", "padding-bottom", "padding-left", "margin-top", "margin-right", "margin-bottom", "margin-left", "border-style", "box-sizing", "tab-size"], a.extend(b.prototype, a.fn.textcomplete.Adapter.prototype, { select: function (b, c, d) { var e = this.getTextFromHeadToCaret(), f = this.el.value.substring(this.el.selectionEnd), g = c.replace(b, d); a.isArray(g) && (f = g[1] + f, g = g[0]), e = e.replace(c.match, g), this.$el.val(e + f), this.el.selectionStart = this.el.selectionEnd = e.length }, _getCaretRelativePosition: function () { var b = a("<div></div>").css(this._copyCss()).text(this.getTextFromHeadToCaret()), c = a("<span></span>").text(".").appendTo(b); this.$el.before(b); var d = c.position(); return d.top += c.height() - this.$el.scrollTop(), d.lineHeight = c.height(), b.remove(), d }, _copyCss: function () { return a.extend({ overflow: this.el.scrollHeight > this.el.offsetHeight ? "scroll" : "auto" }, b.DIV_PROPERTIES, this._getStyles()) }, _getStyles: function (a) { var c = a("<div></div>").css(["color"]).color; return "undefined" != typeof c ? function () { return this.$el.css(b.COPY_PROPERTIES) } : function () { var c = this.$el, d = {}; return a.each(b.COPY_PROPERTIES, function (a, b) { d[b] = c.css(b) }), d } }(a), getTextFromHeadToCaret: function () { return this.el.value.substring(0, this.el.selectionEnd) } }), a.fn.textcomplete.Textarea = b }(a), +function (a) { "use strict"; function b(b, d, e) { this.initialize(b, d, e), a("<span>" + c + "</span>").css({ position: "absolute", top: -9999, left: -9999 }).insertBefore(b) } var c = "吶"; a.extend(b.prototype, a.fn.textcomplete.Textarea.prototype, { select: function (b, c, d) { var e = this.getTextFromHeadToCaret(), f = this.el.value.substring(e.length), g = c.replace(b, d); a.isArray(g) && (f = g[1] + f, g = g[0]), e = e.replace(c.match, g), this.$el.val(e + f), this.el.focus(); var h = this.el.createTextRange(); h.collapse(!0), h.moveEnd("character", e.length), h.moveStart("character", e.length), h.select() }, getTextFromHeadToCaret: function () { this.el.focus(); var a = document.selection.createRange(); a.moveStart("character", -this.el.value.length); var b = a.text.split(c); return 1 === b.length ? b[0] : b[1] } }), a.fn.textcomplete.IETextarea = b }(a), +function (a) { "use strict"; function b(a, b, c) { this.initialize(a, b, c) } a.extend(b.prototype, a.fn.textcomplete.Adapter.prototype, { select: function (b, c, d) { var e = this.getTextFromHeadToCaret(), f = window.getSelection(), g = f.getRangeAt(0), h = g.cloneRange(); h.selectNodeContents(g.startContainer); var i = h.toString(), j = i.substring(g.startOffset), k = c.replace(b, d); a.isArray(k) && (j = k[1] + j, k = k[0]), e = e.replace(c.match, k), g.selectNodeContents(g.startContainer), g.deleteContents(); var l = document.createTextNode(e + j); g.insertNode(l), g.setStart(l, e.length), g.collapse(!0), f.removeAllRanges(), f.addRange(g) }, _getCaretRelativePosition: function () { var b = window.getSelection().getRangeAt(0).cloneRange(), c = document.createElement("span"); b.insertNode(c), b.selectNodeContents(c), b.deleteContents(); var d = a(c), e = d.offset(); e.left -= this.$el.offset().left, e.top += d.height() - this.$el.offset().top, e.lineHeight = d.height(), d.remove(); var f = this.$el.attr("dir") || this.$el.css("direction"); return "rtl" === f && (e.left -= this.listView.$el.width()), e }, getTextFromHeadToCaret: function () { var a = window.getSelection().getRangeAt(0), b = a.cloneRange(); return b.selectNodeContents(a.startContainer), b.toString().substring(0, a.startOffset) } }), a.fn.textcomplete.ContentEditable = b }(a), a });

///*! jquery-textcomplete - v0.7.0 - 2015-07-02 */



/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.6", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.6", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
                top: 0,
                left: 0
            } : b.offset(),
            g = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.6", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);




/**
 * Bootstrap Multiselect (https://github.com/davidstutz/bootstrap-multiselect)
 * 
 * Apache License, Version 2.0:
 * Copyright (c) 2012 - 2015 David Stutz
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a
 * copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 * 
 * BSD 3-Clause License:
 * Copyright (c) 2012 - 2015 David Stutz
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *    - Redistributions of source code must retain the above copyright notice,
 *      this list of conditions and the following disclaimer.
 *    - Redistributions in binary form must reproduce the above copyright notice,
 *      this list of conditions and the following disclaimer in the documentation
 *      and/or other materials provided with the distribution.
 *    - Neither the name of David Stutz nor the names of its contributors may be
 *      used to endorse or promote products derived from this software without
 *      specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
! function($) {
    "use strict"; // jshint ;_;

    if (typeof ko !== 'undefined' && ko.bindingHandlers && !ko.bindingHandlers.multiselect) {
        ko.bindingHandlers.multiselect = {
            after: ['options', 'value', 'selectedOptions', 'enable', 'disable'],

            init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                var $element = $(element);
                var config = ko.toJS(valueAccessor());

                $element.multiselect(config);

                if (allBindings.has('options')) {
                    var options = allBindings.get('options');
                    if (ko.isObservable(options)) {
                        ko.computed({
                            read: function() {
                                options();
                                setTimeout(function() {
                                    var ms = $element.data('multiselect');
                                    if (ms)
                                        ms.updateOriginalOptions(); //Not sure how beneficial this is.
                                    $element.multiselect('rebuild');
                                }, 1);
                            },
                            disposeWhenNodeIsRemoved: element
                        });
                    }
                }

                //value and selectedOptions are two-way, so these will be triggered even by our own actions.
                //It needs some way to tell if they are triggered because of us or because of outside change.
                //It doesn't loop but it's a waste of processing.
                if (allBindings.has('value')) {
                    var value = allBindings.get('value');
                    if (ko.isObservable(value)) {
                        ko.computed({
                            read: function() {
                                value();
                                setTimeout(function() {
                                    $element.multiselect('refresh');
                                }, 1);
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({
                            rateLimit: 100,
                            notifyWhenChangesStop: true
                        });
                    }
                }

                //Switched from arrayChange subscription to general subscription using 'refresh'.
                //Not sure performance is any better using 'select' and 'deselect'.
                if (allBindings.has('selectedOptions')) {
                    var selectedOptions = allBindings.get('selectedOptions');
                    if (ko.isObservable(selectedOptions)) {
                        ko.computed({
                            read: function() {
                                selectedOptions();
                                setTimeout(function() {
                                    $element.multiselect('refresh');
                                }, 1);
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({
                            rateLimit: 100,
                            notifyWhenChangesStop: true
                        });
                    }
                }

                var setEnabled = function(enable) {
                    setTimeout(function() {
                        if (enable)
                            $element.multiselect('enable');
                        else
                            $element.multiselect('disable');
                    });
                };

                if (allBindings.has('enable')) {
                    var enable = allBindings.get('enable');
                    if (ko.isObservable(enable)) {
                        ko.computed({
                            read: function() {
                                setEnabled(enable());
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({
                            rateLimit: 100,
                            notifyWhenChangesStop: true
                        });
                    } else {
                        setEnabled(enable);
                    }
                }

                if (allBindings.has('disable')) {
                    var disable = allBindings.get('disable');
                    if (ko.isObservable(disable)) {
                        ko.computed({
                            read: function() {
                                setEnabled(!disable());
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({
                            rateLimit: 100,
                            notifyWhenChangesStop: true
                        });
                    } else {
                        setEnabled(!disable);
                    }
                }

                ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
                    $element.multiselect('destroy');
                });
            },

            update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                var $element = $(element);
                var config = ko.toJS(valueAccessor());

                $element.multiselect('setOptions', config);
                $element.multiselect('rebuild');
            }
        };
    }

    function forEach(array, callback) {
        for (var index = 0; index < array.length; ++index) {
            callback(array[index], index);
        }
    }

    /**
     * Constructor to create a new multiselect using the given select.
     *
     * @param {jQuery} select
     * @param {Object} options
     * @returns {Multiselect}
     */
    function Multiselect(select, options) {

        this.$select = $(select);

        // Placeholder via data attributes
        if (this.$select.attr("data-placeholder")) {
            options.nonSelectedText = this.$select.data("placeholder");
        }

        this.options = this.mergeOptions($.extend({}, options, this.$select.data()));

        // Initialization.
        // We have to clone to create a new reference.
        this.originalOptions = this.$select.clone()[0].options;
        this.query = '';
        this.searchTimeout = null;
        this.lastToggledInput = null;

        this.options.multiple = this.$select.attr('multiple') === "multiple";
        this.options.onChange = $.proxy(this.options.onChange, this);
        this.options.onDropdownShow = $.proxy(this.options.onDropdownShow, this);
        this.options.onDropdownHide = $.proxy(this.options.onDropdownHide, this);
        this.options.onDropdownShown = $.proxy(this.options.onDropdownShown, this);
        this.options.onDropdownHidden = $.proxy(this.options.onDropdownHidden, this);
        this.options.onInitialized = $.proxy(this.options.onInitialized, this);

        // Build select all if enabled.
        this.buildContainer();
        this.buildButton();
        this.buildDropdown();
        this.buildSelectAll();
        this.buildDropdownOptions();
        this.buildFilter();

        this.updateButtonText();
        this.updateSelectAll(true);

        if (this.options.disableIfEmpty && $('option', this.$select).length <= 0) {
            this.disable();
        }

        this.$select.hide().after(this.$container);
        this.options.onInitialized(this.$select, this.$container);
    }

    Multiselect.prototype = {

        defaults: {
            /**
             * Default text function will either print 'None selected' in case no
             * option is selected or a list of the selected options up to a length
             * of 3 selected options.
             * 
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {String}
             */
            buttonText: function(options, select) {



                if (this.disabledText.length > 0 && (this.disableIfEmpty || select.prop('disabled')) && options.length == 0) {

                    return this.disabledText;
                } else if (options.length === 0) {
                    return this.nonSelectedText;
                } else {
                    var selected = '';
                    var delimiter = this.delimiterText;

                    options.each(function() {
                        var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).text();
                        selected += label + delimiter;
                    });

                    return selected.substr(0, selected.length - 2);
                }



                ////////////// EMR COMMENTED BY MAHESH P ////////////////////////////////
                //if (this.disabledText.length > 0
                //        && (this.disableIfEmpty || select.prop('disabled'))
                //        && options.length == 0) {

                //    return this.disabledText;
                //}
                //else if (options.length === 0) {
                //    return this.nonSelectedText;
                //}
                //else if (this.allSelectedText
                //        && options.length === $('option', $(select)).length
                //        && $('option', $(select)).length !== 1
                //        && this.multiple) {

                //    if (this.selectAllNumber) {
                //        return this.allSelectedText + ' (' + options.length + ')';
                //    }
                //    else {
                //        return this.allSelectedText;
                //    }
                //}
                //else if (options.length > this.numberDisplayed) {
                //    return options.length + ' ' + this.nSelectedText;
                //}
                //else {
                //    var selected = '';
                //    var delimiter = this.delimiterText;

                //    options.each(function () {
                //        var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).text();
                //        selected += label + delimiter;
                //    });

                //    return selected.substr(0, selected.length - 2);
                //}
                ////////////// EMR COMMENTED BY MAHESH P ////////////////////////////////
            },
            /**
             * Updates the title of the button similar to the buttonText function.
             * 
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {@exp;selected@call;substr}
             */
            buttonTitle: function(options, select) {
                if (options.length === 0) {
                    return this.nonSelectedText;
                } else {
                    var selected = '';
                    var delimiter = this.delimiterText;

                    options.each(function() {
                        var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).text();
                        selected += label + delimiter;
                    });
                    return selected.substr(0, selected.length - 2);
                }
            },
            /**
             * Create a label.
             *
             * @param {jQuery} element
             * @returns {String}
             */
            optionLabel: function(element) {
                return $(element).attr('label') || $(element).text();
            },
            /**
             * Create a class.
             *
             * @param {jQuery} element
             * @returns {String}
             */
            optionClass: function(element) {
                return $(element).attr('class') || '';
            },
            /**
             * Triggered on change of the multiselect.
             * 
             * Not triggered when selecting/deselecting options manually.
             * 
             * @param {jQuery} option
             * @param {Boolean} checked
             */
            onChange: function(option, checked) {

            },
            /**
             * Triggered when the dropdown is shown.
             *
             * @param {jQuery} event
             */
            onDropdownShow: function(event) {

            },
            /**
             * Triggered when the dropdown is hidden.
             *
             * @param {jQuery} event
             */
            onDropdownHide: function(event) {

            },
            /**
             * Triggered after the dropdown is shown.
             * 
             * @param {jQuery} event
             */
            onDropdownShown: function(event) {

            },
            /**
             * Triggered after the dropdown is hidden.
             * 
             * @param {jQuery} event
             */
            onDropdownHidden: function(event) {

            },
            /**
             * Triggered on select all.
             */
            onSelectAll: function(checked) {

            },
            /**
             * Triggered after initializing.
             *
             * @param {jQuery} $select
             * @param {jQuery} $container
             */
            onInitialized: function($select, $container) {

            },
            enableHTML: false,
            buttonClass: 'btn btn-default',
            inheritClass: false,
            buttonWidth: 'auto',
            buttonContainer: '<div class="btn-group multiselectdropdown" />',
            dropRight: false,
            dropUp: false,
            selectedClass: 'active',
            // Maximum height of the dropdown menu.
            // If maximum height is exceeded a scrollbar will be displayed.
            maxHeight: false,
            checkboxName: false,
            includeSelectAllOption: false,
            includeSelectAllIfMoreThan: 0,
            selectAllText: ' Select all',
            selectAllValue: 'multiselect-all',
            selectAllName: false,
            selectAllNumber: true,
            selectAllJustVisible: true,
            enableFiltering: false,
            enableCaseInsensitiveFiltering: false,
            enableFullValueFiltering: false,
            enableClickableOptGroups: false,
            enableCollapsibelOptGroups: false,
            filterPlaceholder: 'Search',
            // possible options: 'text', 'value', 'both'
            filterBehavior: 'text',
            includeFilterClearBtn: true,
            preventInputChangeEvent: false,
            nonSelectedText: 'None selected',
            nSelectedText: 'selected',
            allSelectedText: 'All selected',
            numberDisplayed: 15,
            disableIfEmpty: false,
            disabledText: '',
            delimiterText: ', ',
            templates: {
                button: '<button type="button" style="min-height:25px;" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span> <b class="caret"></b></button>',
                ul: '<ul class="multiselect-container dropdown-menu"></ul>',
                filter: '<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
                filterClearBtn: '<span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="glyphicon glyphicon-remove-circle"></i></button></span>',
                li: '<li><a tabindex="0"><label></label></a></li>',
                divider: '<li class="multiselect-item divider"></li>',
                liGroup: '<li class="multiselect-item multiselect-group"><label></label></li>'
            }
        },

        constructor: Multiselect,

        /**
         * Builds the container of the multiselect.
         */
        buildContainer: function() {
            this.$container = $(this.options.buttonContainer);
            this.$container.attr("id", this.$select.attr("id") + "_multiselectdropdown");
            this.$container.on('show.bs.dropdown', this.options.onDropdownShow);
            this.$container.on('hide.bs.dropdown', this.options.onDropdownHide);
            this.$container.on('shown.bs.dropdown', this.options.onDropdownShown);
            this.$container.on('hidden.bs.dropdown', this.options.onDropdownHidden);
        },

        /**
         * Builds the button of the multiselect.
         */
        buildButton: function() {
            this.$button = $(this.options.templates.button).addClass(this.options.buttonClass);
            if (this.$select.attr('class') && this.options.inheritClass) {
                this.$button.addClass(this.$select.attr('class'));
            }
            // Adopt active state.
            if (this.$select.prop('disabled')) {
                this.disable();
            } else {
                this.enable();
            }

            // Manually add button width if set.
            if (this.options.buttonWidth && this.options.buttonWidth !== 'auto') {
                this.$button.css({
                    'width': this.options.buttonWidth,
                    'overflow': 'hidden',
                    'text-overflow': 'ellipsis'
                });

                this.$container.css({
                    'width': this.options.buttonWidth
                });
            }

            //EMR Adde by mahesh p for supporting the max-width for the button based on the drop down list item width
            if (this.$select.prop("style").maxWidth && this.$select.prop("style").maxWidth != "") {

                //considering the max width as when greater than 100px
                if (!isNaN(parseInt(this.$select.prop("style").maxWidth)) && parseInt(this.$select.prop("style").maxWidth) > 100) {
                    this.$button.css({
                        //'width': this.options.buttonWidth,
                        'overflow': 'hidden',
                        'text-overflow': 'ellipsis',
                        'max-width': this.$select.prop("style").maxWidth,
                        //'white-space': 'pre-wrap'
                        'white-space': 'normal'
                    });
                }
            }
            //EMR Adde by mahesh p for supporting the max-width for the button based on the drop down list item width

            // Keep the tab index from the select.
            var tabindex = this.$select.attr('tabindex');
            if (tabindex) {
                this.$button.attr('tabindex', tabindex);
            }

            this.$container.prepend(this.$button);
        },

        /**
         * Builds the ul representing the dropdown menu.
         */
        buildDropdown: function() {

            // Build ul.
            this.$ul = $(this.options.templates.ul);

            if (this.options.dropRight) {
                this.$ul.addClass('pull-right');
            }

            // Set max height of dropdown menu to activate auto scrollbar.
            if (this.options.maxHeight) {
                // TODO: Add a class for this option to move the css declarations.
                this.$ul.css({
                    'max-height': this.options.maxHeight + 'px',
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden'
                });
            }

            if (this.options.dropUp) {

                var height = Math.min(this.options.maxHeight, $('option[data-role!="divider"]', this.$select).length * 26 + $('option[data-role="divider"]', this.$select).length * 19 + (this.options.includeSelectAllOption ? 26 : 0) + (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering ? 44 : 0));
                var moveCalc = height + 34;

                this.$ul.css({
                    'max-height': height + 'px',
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden',
                    'margin-top': "-" + moveCalc + 'px'
                });
            }

            this.$container.append(this.$ul);
        },

        /**
         * Build the dropdown options and binds all nessecary events.
         * 
         * Uses createDivider and createOptionValue to create the necessary options.
         */
        buildDropdownOptions: function() {

            this.$select.children().each($.proxy(function(index, element) {

                var $element = $(element);
                // Support optgroups and options without a group simultaneously.
                var tag = $element.prop('tagName')
                    .toLowerCase();

                if ($element.prop('value') === this.options.selectAllValue) {
                    return;
                }

                if (tag === 'optgroup') {
                    this.createOptgroup(element);
                } else if (tag === 'option') {

                    if ($element.data('role') === 'divider') {
                        this.createDivider();
                    } else {
                        this.createOptionValue(element);
                    }

                }

                // Other illegal tags will be ignored.
            }, this));

            // Bind the change event on the dropdown elements.
            $('li input', this.$ul).on('change', $.proxy(function(event) {
                var $target = $(event.target);

                var checked = $target.prop('checked') || false;
                var isSelectAllOption = $target.val() === this.options.selectAllValue;

                // Apply or unapply the configured selected class.
                if (this.options.selectedClass) {
                    if (checked) {
                        $target.closest('li')
                            .addClass(this.options.selectedClass);
                    } else {
                        $target.closest('li')
                            .removeClass(this.options.selectedClass);
                    }
                }

                // Get the corresponding option.
                var value = $target.val();
                var $option = this.getOptionByValue(value);

                var $optionsNotThis = $('option', this.$select).not($option);
                var $checkboxesNotThis = $('input', this.$container).not($target);

                if (isSelectAllOption) {
                    if (checked) {
                        this.selectAll(this.options.selectAllJustVisible);
                    } else {
                        this.deselectAll(this.options.selectAllJustVisible);
                    }
                } else {
                    if (checked) {
                        $option.prop('selected', true);

                        if (this.options.multiple) {
                            // Simply select additional option.
                            $option.prop('selected', true);
                        } else {
                            // Unselect all other options and corresponding checkboxes.
                            if (this.options.selectedClass) {
                                $($checkboxesNotThis).closest('li').removeClass(this.options.selectedClass);
                            }

                            $($checkboxesNotThis).prop('checked', false);
                            $optionsNotThis.prop('selected', false);

                            // It's a single selection, so close.
                            this.$button.click();
                        }

                        if (this.options.selectedClass === "active") {
                            $optionsNotThis.closest("a").css("outline", "");
                        }
                    } else {
                        // Unselect option.
                        $option.prop('selected', false);
                    }

                    // To prevent select all from firing onChange: #575
                    this.options.onChange($option, checked);
                }

                this.$select.change();

                this.updateButtonText();
                this.updateSelectAll();

                if (this.options.preventInputChangeEvent) {
                    return false;
                }
            }, this));

            $('li a', this.$ul).on('mousedown', function(e) {
                if (e.shiftKey) {
                    // Prevent selecting text by Shift+click
                    return false;
                }
            });

            $('li a', this.$ul).on('touchstart click', $.proxy(function(event) {
                event.stopPropagation();

                var $target = $(event.target);

                if (event.shiftKey && this.options.multiple) {
                    if ($target.is("label")) { // Handles checkbox selection manually (see https://github.com/davidstutz/bootstrap-multiselect/issues/431)
                        event.preventDefault();
                        $target = $target.find("input");
                        $target.prop("checked", !$target.prop("checked"));
                    }
                    var checked = $target.prop('checked') || false;

                    if (this.lastToggledInput !== null && this.lastToggledInput !== $target) { // Make sure we actually have a range
                        var from = $target.closest("li").index();
                        var to = this.lastToggledInput.closest("li").index();

                        if (from > to) { // Swap the indices
                            var tmp = to;
                            to = from;
                            from = tmp;
                        }

                        // Make sure we grab all elements since slice excludes the last index
                        ++to;

                        // Change the checkboxes and underlying options
                        var range = this.$ul.find("li").slice(from, to).find("input");

                        range.prop('checked', checked);

                        if (this.options.selectedClass) {
                            range.closest('li')
                                .toggleClass(this.options.selectedClass, checked);
                        }

                        for (var i = 0, j = range.length; i < j; i++) {
                            var $checkbox = $(range[i]);

                            var $option = this.getOptionByValue($checkbox.val());

                            $option.prop('selected', checked);
                        }
                    }

                    // Trigger the select "change" event
                    $target.trigger("change");
                }

                // Remembers last clicked option
                if ($target.is("input") && !$target.closest("li").is(".multiselect-item")) {
                    this.lastToggledInput = $target;
                }

                $target.blur();
            }, this));

            // Keyboard support.
            this.$container.off('keydown.multiselect').on('keydown.multiselect', $.proxy(function(event) {
                if ($('input[type="text"]', this.$container).is(':focus')) {
                    return;
                }

                if (event.keyCode === 9 && this.$container.hasClass('open')) {
                    this.$button.click();
                } else {
                    var $items = $(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");

                    if (!$items.length) {
                        return;
                    }

                    var index = $items.index($items.filter(':focus'));

                    // Navigation up.
                    if (event.keyCode === 38 && index > 0) {
                        index--;
                    }
                    // Navigate down.
                    else if (event.keyCode === 40 && index < $items.length - 1) {
                        index++;
                    } else if (!~index) {
                        index = 0;
                    }

                    var $current = $items.eq(index);
                    $current.focus();

                    if (event.keyCode === 32 || event.keyCode === 13) {
                        var $checkbox = $current.find('input');

                        $checkbox.prop("checked", !$checkbox.prop("checked"));
                        $checkbox.change();
                    }

                    event.stopPropagation();
                    event.preventDefault();
                }
            }, this));

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                $('li.multiselect-group', this.$ul).on('click', $.proxy(function(event) {
                    event.stopPropagation();
                    console.log('test');
                    var group = $(event.target).parent();

                    // Search all option in optgroup
                    var $options = group.nextUntil('li.multiselect-group');
                    var $visibleOptions = $options.filter(":visible:not(.disabled)");

                    // check or uncheck items
                    var allChecked = true;
                    var optionInputs = $visibleOptions.find('input');
                    var values = [];

                    optionInputs.each(function() {
                        allChecked = allChecked && $(this).prop('checked');
                        values.push($(this).val());
                    });

                    if (!allChecked) {
                        this.select(values, false);
                    } else {
                        this.deselect(values, false);
                    }

                    this.options.onChange(optionInputs, !allChecked);
                }, this));
            }

            if (this.options.enableCollapsibleOptGroups && this.options.multiple) {
                $("li.multiselect-group input", this.$ul).off();
                $("li.multiselect-group", this.$ul).siblings().not("li.multiselect-group, li.multiselect-all", this.$ul).each(function() {
                    $(this).toggleClass('hidden', true);
                });

                $("li.multiselect-group", this.$ul).on("click", $.proxy(function(group) {
                    group.stopPropagation();
                }, this));

                $("li.multiselect-group > a > b", this.$ul).on("click", $.proxy(function(t) {
                    t.stopPropagation();
                    var n = $(t.target).closest('li');
                    var r = n.nextUntil("li.multiselect-group");
                    var i = true;

                    r.each(function() {
                        i = i && $(this).hasClass('hidden');
                    });

                    r.toggleClass('hidden', !i);
                }, this));

                $("li.multiselect-group > a > input", this.$ul).on("change", $.proxy(function(t) {
                    t.stopPropagation();
                    var n = $(t.target).closest('li');
                    var r = n.nextUntil("li.multiselect-group", ':not(.disabled)');
                    var s = r.find("input");

                    var i = true;
                    s.each(function() {
                        i = i && $(this).prop("checked");
                    });

                    s.prop("checked", !i).trigger("change");
                }, this));

                // Set the initial selection state of the groups.
                $('li.multiselect-group', this.$ul).each(function() {
                    var r = $(this).nextUntil("li.multiselect-group", ':not(.disabled)');
                    var s = r.find("input");

                    var i = true;
                    s.each(function() {
                        i = i && $(this).prop("checked");
                    });

                    $(this).find('input').prop("checked", i);
                });

                // Update the group checkbox based on new selections among the
                // corresponding children.
                $("li input", this.$ul).on("change", $.proxy(function(t) {
                    t.stopPropagation();
                    var n = $(t.target).closest('li');
                    var r1 = n.prevUntil("li.multiselect-group", ':not(.disabled)');
                    var r2 = n.nextUntil("li.multiselect-group", ':not(.disabled)');
                    var s1 = r1.find("input");
                    var s2 = r2.find("input");

                    var i = $(t.target).prop('checked');
                    s1.each(function() {
                        i = i && $(this).prop("checked");
                    });

                    s2.each(function() {
                        i = i && $(this).prop("checked");
                    });

                    n.prevAll('.multiselect-group').find('input').prop('checked', i);
                }, this));

                $("li.multiselect-all", this.$ul).css('background', '#f3f3f3').css('border-bottom', '1px solid #eaeaea');
                $("li.multiselect-group > a, li.multiselect-all > a > label.checkbox", this.$ul).css('padding', '3px 20px 3px 35px');
                $("li.multiselect-group > a > input", this.$ul).css('margin', '4px 0px 5px -20px');
            }
        },

        /**
         * Create an option using the given select option.
         *
         * @param {jQuery} element
         */
        createOptionValue: function(element) {
            var $element = $(element);
            if ($element.is(':selected')) {
                $element.prop('selected', true);
            }

            // Support the label attribute on options.
            var label = this.options.optionLabel(element);
            var classes = this.options.optionClass(element);
            var value = $element.val();
            var inputType = this.options.multiple ? "checkbox" : "radio";

            var $li = $(this.options.templates.li);
            var $label = $('label', $li);
            $label.addClass(inputType);
            $li.addClass(classes);

            if (this.options.enableHTML) {
                $label.html(" " + label);
            } else {
                $label.text(" " + label);
            }

            var $checkbox = $('<input/>').attr('type', inputType);

            if (this.options.checkboxName) {
                $checkbox.attr('name', this.options.checkboxName);
            }
            $label.prepend($checkbox);

            var selected = $element.prop('selected') || false;
            $checkbox.val(value);

            if (value === this.options.selectAllValue) {
                $li.addClass("multiselect-item multiselect-all");
                $checkbox.parent().parent()
                    .addClass('multiselect-all');
            }

            $label.attr('title', $element.attr('title'));

            this.$ul.append($li);

            if ($element.is(':disabled')) {
                $checkbox.attr('disabled', 'disabled')
                    .prop('disabled', true)
                    .closest('a')
                    .attr("tabindex", "-1")
                    .closest('li')
                    .addClass('disabled');
            }

            $checkbox.prop('checked', selected);

            if (selected && this.options.selectedClass) {
                $checkbox.closest('li')
                    .addClass(this.options.selectedClass);
            }
        },

        /**
         * Creates a divider using the given select option.
         *
         * @param {jQuery} element
         */
        createDivider: function(element) {
            var $divider = $(this.options.templates.divider);
            this.$ul.append($divider);
        },

        /**
         * Creates an optgroup.
         *
         * @param {jQuery} group
         */
        createOptgroup: function(group) {
            if (this.options.enableCollapsibleOptGroups && this.options.multiple) {
                var label = $(group).attr("label");
                var value = $(group).attr("value");
                var r = $('<li class="multiselect-item multiselect-group"><a href="javascript:void(0);"><input type="checkbox" value="' + value + '"/><b> ' + label + '<b class="caret"></b></b></a></li>');

                if (this.options.enableClickableOptGroups) {
                    r.addClass("multiselect-group-clickable")
                }
                this.$ul.append(r);
                if ($(group).is(":disabled")) {
                    r.addClass("disabled")
                }
                $("option", group).each($.proxy(function($, group) {
                    this.createOptionValue(group)
                }, this))
            } else {
                var groupName = $(group).prop('label');

                // Add a header for the group.
                var $li = $(this.options.templates.liGroup);

                if (this.options.enableHTML) {
                    $('label', $li).html(groupName);
                } else {
                    $('label', $li).text(groupName);
                }

                if (this.options.enableClickableOptGroups) {
                    $li.addClass('multiselect-group-clickable');
                }

                this.$ul.append($li);

                if ($(group).is(':disabled')) {
                    $li.addClass('disabled');
                }

                // Add the options of the group.
                $('option', group).each($.proxy(function(index, element) {
                    this.createOptionValue(element);
                }, this));
            }
        },

        /**
         * Build the select all.
         * 
         * Checks if a select all has already been created.
         */
        buildSelectAll: function() {
            if (typeof this.options.selectAllValue === 'number') {
                this.options.selectAllValue = this.options.selectAllValue.toString();
            }

            var alreadyHasSelectAll = this.hasSelectAll();

            if (!alreadyHasSelectAll && this.options.includeSelectAllOption && this.options.multiple && $('option', this.$select).length > this.options.includeSelectAllIfMoreThan) {

                // Check whether to add a divider after the select all.
                if (this.options.includeSelectAllDivider) {
                    this.$ul.prepend($(this.options.templates.divider));
                }

                var $li = $(this.options.templates.li);
                $('label', $li).addClass("checkbox");

                if (this.options.enableHTML) {
                    $('label', $li).html(" " + this.options.selectAllText);
                } else {
                    $('label', $li).text(" " + this.options.selectAllText);
                }

                if (this.options.selectAllName) {
                    $('label', $li).prepend('<input type="checkbox" name="' + this.options.selectAllName + '" />');
                } else {
                    $('label', $li).prepend('<input type="checkbox" />');
                }

                var $checkbox = $('input', $li);
                $checkbox.val(this.options.selectAllValue);

                $li.addClass("multiselect-item multiselect-all");
                $checkbox.parent().parent()
                    .addClass('multiselect-all');

                this.$ul.prepend($li);

                $checkbox.prop('checked', false);
            }
        },

        /**
         * Builds the filter.
         */
        buildFilter: function() {

            // Build filter if filtering OR case insensitive filtering is enabled and the number of options exceeds (or equals) enableFilterLength.
            if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
                var enableFilterLength = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);

                if (this.$select.find('option').length >= enableFilterLength) {

                    this.$filter = $(this.options.templates.filter);
                    $('input', this.$filter).attr('placeholder', this.options.filterPlaceholder);

                    // Adds optional filter clear button
                    if (this.options.includeFilterClearBtn) {
                        var clearBtn = $(this.options.templates.filterClearBtn);
                        clearBtn.on('click', $.proxy(function(event) {
                            clearTimeout(this.searchTimeout);
                            this.$filter.find('.multiselect-search').val('');
                            $('li', this.$ul).show().removeClass("filter-hidden");
                            this.updateSelectAll();
                        }, this));
                        this.$filter.find('.input-group').append(clearBtn);
                    }

                    this.$ul.prepend(this.$filter);

                    this.$filter.val(this.query).on('click', function(event) {
                        event.stopPropagation();
                    }).on('input keydown', $.proxy(function(event) {
                        // Cancel enter key default behaviour
                        if (event.which === 13) {
                            event.preventDefault();
                        }

                        // This is useful to catch "keydown" events after the browser has updated the control.
                        clearTimeout(this.searchTimeout);

                        this.searchTimeout = this.asyncFunction($.proxy(function() {

                            if (this.query !== event.target.value) {
                                this.query = event.target.value;

                                var currentGroup, currentGroupVisible;
                                $.each($('li', this.$ul), $.proxy(function(index, element) {
                                    var value = $('input', element).length > 0 ? $('input', element).val() : "";
                                    var text = $('label', element).text();

                                    var filterCandidate = '';
                                    if ((this.options.filterBehavior === 'text')) {
                                        filterCandidate = text;
                                    } else if ((this.options.filterBehavior === 'value')) {
                                        filterCandidate = value;
                                    } else if (this.options.filterBehavior === 'both') {
                                        filterCandidate = text + '\n' + value;
                                    }

                                    if (value !== this.options.selectAllValue && text) {

                                        // By default lets assume that element is not
                                        // interesting for this search.
                                        var showElement = false;

                                        if (this.options.enableCaseInsensitiveFiltering) {
                                            filterCandidate = filterCandidate.toLowerCase();
                                            this.query = this.query.toLowerCase();
                                        }

                                        if (this.options.enableFullValueFiltering && this.options.filterBehavior !== 'both') {
                                            var valueToMatch = filterCandidate.trim().substring(0, this.query.length);
                                            if (this.query.indexOf(valueToMatch) > -1) {
                                                showElement = true;
                                            }
                                        } else if (filterCandidate.indexOf(this.query) > -1) {
                                            showElement = true;
                                        }

                                        // Toggle current element (group or group item) according to showElement boolean.
                                        $(element).toggle(showElement).toggleClass('filter-hidden', !showElement);

                                        // Differentiate groups and group items.
                                        if ($(element).hasClass('multiselect-group')) {
                                            // Remember group status.
                                            currentGroup = element;
                                            currentGroupVisible = showElement;
                                        } else {
                                            // Show group name when at least one of its items is visible.
                                            if (showElement) {
                                                $(currentGroup).show().removeClass('filter-hidden');
                                            }

                                            // Show all group items when group name satisfies filter.
                                            if (!showElement && currentGroupVisible) {
                                                $(element).show().removeClass('filter-hidden');
                                            }
                                        }
                                    }
                                }, this));
                            }

                            this.updateSelectAll();
                        }, this), 300, this);
                    }, this));
                }
            }
        },

        /**
         * Unbinds the whole plugin.
         */
        destroy: function() {
            this.$container.remove();
            this.$select.show();
            this.$select.data('multiselect', null);
        },

        /**
         * Refreshs the multiselect based on the selected options of the select.
         */
        refresh: function() {
            var inputs = $.map($('li input', this.$ul), $);

            $('option', this.$select).each($.proxy(function(index, element) {
                var $elem = $(element);
                var value = $elem.val();
                var $input;
                for (var i = inputs.length; 0 < i--; /**/ ) {
                    if (value !== ($input = inputs[i]).val())
                        continue; // wrong li

                    if ($elem.is(':selected')) {
                        $input.prop('checked', true);

                        if (this.options.selectedClass) {
                            $input.closest('li')
                                .addClass(this.options.selectedClass);
                        }
                    } else {
                        $input.prop('checked', false);

                        if (this.options.selectedClass) {
                            $input.closest('li')
                                .removeClass(this.options.selectedClass);
                        }
                    }

                    if ($elem.is(":disabled")) {
                        $input.attr('disabled', 'disabled')
                            .prop('disabled', true)
                            .closest('li')
                            .addClass('disabled');
                    } else {
                        $input.prop('disabled', false)
                            .closest('li')
                            .removeClass('disabled');
                    }
                    break; // assumes unique values
                }
            }, this));

            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * Select all options of the given values.
         * 
         * If triggerOnChange is set to true, the on change event is triggered if
         * and only if one value is passed.
         * 
         * @param {Array} selectValues
         * @param {Boolean} triggerOnChange
         */
        select: function(selectValues, triggerOnChange) {
            if (!$.isArray(selectValues)) {
                selectValues = [selectValues];
            }

            for (var i = 0; i < selectValues.length; i++) {
                var value = selectValues[i];

                if (value === null || value === undefined) {
                    continue;
                }

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if ($option === undefined || $checkbox === undefined) {
                    continue;
                }

                if (!this.options.multiple) {
                    this.deselectAll(false);
                }

                if (this.options.selectedClass) {
                    $checkbox.closest('li')
                        .addClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', true);
                $option.prop('selected', true);

                //$option.attr('selected', true);

                //$('option', this.$select).filter($option).prop('selected', true);

                //if ($('option', this.$select).filter($option) != undefined && $('option', this.$select).filter($option) != null && $('option', this.$select).filter($option).length > 0) {
                //    $('option', this.$select).filter($option)[0].setAttribute('selected', true);
                //    $option[0].setAttribute('selected', true)
                //}

                //$.apply($option);


                if (triggerOnChange) {
                    this.options.onChange($option, true);
                }
            }

            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * Clears all selected items.
         */
        clearSelection: function() {
            this.deselectAll(false);
            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * Deselects all options of the given values.
         * 
         * If triggerOnChange is set to true, the on change event is triggered, if
         * and only if one value is passed.
         * 
         * @param {Array} deselectValues
         * @param {Boolean} triggerOnChange
         */
        deselect: function(deselectValues, triggerOnChange) {
            if (!$.isArray(deselectValues)) {
                deselectValues = [deselectValues];
            }

            for (var i = 0; i < deselectValues.length; i++) {
                var value = deselectValues[i];

                if (value === null || value === undefined) {
                    continue;
                }

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if ($option === undefined || $checkbox === undefined) {
                    continue;
                }

                if (this.options.selectedClass) {
                    $checkbox.closest('li')
                        .removeClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', false);
                $option.prop('selected', false);

                if (triggerOnChange) {
                    this.options.onChange($option, false);
                }
            }

            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * Selects all enabled & visible options.
         *
         * If justVisible is true or not specified, only visible options are selected.
         *
         * @param {Boolean} justVisible
         * @param {Boolean} triggerOnSelectAll
         */
        selectAll: function(justVisible, triggerOnSelectAll) {
            justVisible = (this.options.enableCollapsibleOptGroups && this.options.multiple) ? false : justVisible;

            var justVisible = typeof justVisible === 'undefined' ? true : justVisible;
            var allCheckboxes = $("li input[type='checkbox']:enabled", this.$ul);
            var visibleCheckboxes = allCheckboxes.filter(":visible");
            var allCheckboxesCount = allCheckboxes.length;
            var visibleCheckboxesCount = visibleCheckboxes.length;

            if (justVisible) {
                visibleCheckboxes.prop('checked', true);
                $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").addClass(this.options.selectedClass);
            } else {
                allCheckboxes.prop('checked', true);
                $("li:not(.divider):not(.disabled)", this.$ul).addClass(this.options.selectedClass);
            }

            if (allCheckboxesCount === visibleCheckboxesCount || justVisible === false) {
                $("option:not([data-role='divider']):enabled", this.$select).prop('selected', true);
            } else {
                var values = visibleCheckboxes.map(function() {
                    return $(this).val();
                }).get();

                $("option:enabled", this.$select).filter(function(index) {
                    return $.inArray($(this).val(), values) !== -1;
                }).prop('selected', true);
            }

            if (triggerOnSelectAll) {
                this.options.onSelectAll();
            }
        },

        /**
         * Deselects all options.
         * 
         * If justVisible is true or not specified, only visible options are deselected.
         * 
         * @param {Boolean} justVisible
         */
        deselectAll: function(justVisible) {
            justVisible = (this.options.enableCollapsibleOptGroups && this.options.multiple) ? false : justVisible;
            justVisible = typeof justVisible === 'undefined' ? true : justVisible;

            if (justVisible) {
                var visibleCheckboxes = $("li input[type='checkbox']:not(:disabled)", this.$ul).filter(":visible");
                visibleCheckboxes.prop('checked', false);

                var values = visibleCheckboxes.map(function() {
                    return $(this).val();
                }).get();

                $("option:enabled", this.$select).filter(function(index) {
                    return $.inArray($(this).val(), values) !== -1;
                }).prop('selected', false);

                if (this.options.selectedClass) {
                    $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").removeClass(this.options.selectedClass);
                }
            } else {
                $("li input[type='checkbox']:enabled", this.$ul).prop('checked', false);
                $("option:enabled", this.$select).prop('selected', false);

                if (this.options.selectedClass) {
                    $("li:not(.divider):not(.disabled)", this.$ul).removeClass(this.options.selectedClass);
                }
            }
        },

        /**
         * Rebuild the plugin.
         * 
         * Rebuilds the dropdown, the filter and the select all option.
         */
        rebuild: function() {
            this.$ul.html('');

            // Important to distinguish between radios and checkboxes.
            this.options.multiple = this.$select.attr('multiple') === "multiple";

            this.buildSelectAll();
            this.buildDropdownOptions();
            this.buildFilter();

            this.updateButtonText();
            this.updateSelectAll(true);

            if (this.options.disableIfEmpty && $('option', this.$select).length <= 0) {
                this.disable();
            } else {
                this.enable();
            }

            if (this.options.dropRight) {
                this.$ul.addClass('pull-right');
            }
        },

        /**
         * The provided data will be used to build the dropdown.
         */
        dataprovider: function(dataprovider) {

            var groupCounter = 0;
            var $select = this.$select.empty();

            $.each(dataprovider, function(index, option) {
                var $tag;

                if ($.isArray(option.children)) { // create optiongroup tag
                    groupCounter++;

                    $tag = $('<optgroup/>').attr({
                        label: option.label || 'Group ' + groupCounter,
                        disabled: !!option.disabled
                    });

                    forEach(option.children, function(subOption) { // add children option tags
                        $tag.append($('<option/>').attr({
                            value: subOption.value,
                            label: subOption.label || subOption.value,
                            title: subOption.title,
                            selected: !!subOption.selected,
                            disabled: !!subOption.disabled
                        }));
                    });
                } else {
                    $tag = $('<option/>').attr({
                        value: option.value,
                        label: option.label || option.value,
                        title: option.title,
                        class: option.class,
                        selected: !!option.selected,
                        disabled: !!option.disabled
                    });
                    $tag.text(option.label || option.value);
                }

                $select.append($tag);
            });

            this.rebuild();
        },

        /**
         * Enable the multiselect.
         */
        enable: function() {
            this.$select.prop('disabled', false);
            this.$button.prop('disabled', false)
                .removeClass('disabled');
        },

        /**
         * Disable the multiselect.
         */
        disable: function() {
            this.$select.prop('disabled', true);
            this.$button.prop('disabled', true)
                .addClass('disabled');
        },

        /**
         * Set the options.
         *
         * @param {Array} options
         */
        setOptions: function(options) {
            this.options = this.mergeOptions(options);
        },

        /**
         * Merges the given options with the default options.
         *
         * @param {Array} options
         * @returns {Array}
         */
        mergeOptions: function(options) {
            return $.extend(true, {}, this.defaults, this.options, options);
        },

        /**
         * Checks whether a select all checkbox is present.
         *
         * @returns {Boolean}
         */
        hasSelectAll: function() {
            return $('li.multiselect-all', this.$ul).length > 0;
        },

        /**
         * Updates the select all checkbox based on the currently displayed and selected checkboxes.
         */
        updateSelectAll: function(notTriggerOnSelectAll) {
            if (this.hasSelectAll()) {
                var allBoxes = $("li:not(.multiselect-item):not(.filter-hidden) input:enabled", this.$ul);
                var allBoxesLength = allBoxes.length;
                var checkedBoxesLength = allBoxes.filter(":checked").length;
                var selectAllLi = $("li.multiselect-all", this.$ul);
                var selectAllInput = selectAllLi.find("input");

                if (checkedBoxesLength > 0 && checkedBoxesLength === allBoxesLength) {
                    selectAllInput.prop("checked", true);
                    selectAllLi.addClass(this.options.selectedClass);
                    this.options.onSelectAll(true);
                } else {
                    selectAllInput.prop("checked", false);
                    selectAllLi.removeClass(this.options.selectedClass);
                    if (checkedBoxesLength === 0) {
                        if (!notTriggerOnSelectAll) {
                            this.options.onSelectAll(false);
                        }
                    }
                }
            }
        },

        /**
         * Update the button text and its title based on the currently selected options.
         */
        updateButtonText: function() {
            var options = this.getSelected();

            var textToBeDisplayed = this.options.buttonText(options, this.$select);
            // First update the displayed button text.
            if (this.options.enableHTML) {
                $('.multiselect .multiselect-selected-text', this.$container).html(textToBeDisplayed);
            } else {
                $('.multiselect .multiselect-selected-text', this.$container).text(textToBeDisplayed);
            }

            //added by mahesh p on 06/29/2016 for showing the minimum width for the control
            if (textToBeDisplayed != null && textToBeDisplayed != undefined && (typeof(textToBeDisplayed).toLowerCase() == "string") && textToBeDisplayed.trim().length <= 0) {
                $('.multiselect .caret', this.$container).css({
                    "margin-left": "25px"
                });
            } else {
                $('.multiselect .caret', this.$container).css({
                    "margin-left": "0px"
                });
            }

            // Now update the title attribute of the button.
            $('.multiselect', this.$container).attr('title', this.options.buttonTitle(options, this.$select));
        },

        /**
         * Get all selected options.
         *
         * @returns {jQUery}
         */
        getSelected: function() {
            return $('option', this.$select).filter(":selected");
        },

        /**
         * Gets a select option by its value.
         *
         * @param {String} value
         * @returns {jQuery}
         */
        getOptionByValue: function(value) {

            var options = $('option', this.$select);
            var valueToCompare = value.toString();

            for (var i = 0; i < options.length; i = i + 1) {
                var option = options[i];
                if (option.value === valueToCompare) {
                    return $(option);
                }
            }
        },

        /**
         * Get the input (radio/checkbox) by its value.
         *
         * @param {String} value
         * @returns {jQuery}
         */
        getInputByValue: function(value) {

            var checkboxes = $('li input', this.$ul);
            var valueToCompare = value.toString();

            for (var i = 0; i < checkboxes.length; i = i + 1) {
                var checkbox = checkboxes[i];
                if (checkbox.value === valueToCompare) {
                    return $(checkbox);
                }
            }
        },

        /**
         * Used for knockout integration.
         */
        updateOriginalOptions: function() {
            this.originalOptions = this.$select.clone()[0].options;
        },

        asyncFunction: function(callback, timeout, self) {
            var args = Array.prototype.slice.call(arguments, 3);
            return setTimeout(function() {
                callback.apply(self || window, args);
            }, timeout);
        },

        setAllSelectedText: function(allSelectedText) {
            this.options.allSelectedText = allSelectedText;
            this.updateButtonText();
        }
    };

    $.fn.multiselect = function(option, parameter, extraOptions) {
        return this.each(function() {
            var data = $(this).data('multiselect');
            var options = typeof option === 'object' && option;

            // Initialize the multiselect.
            if (!data) {
                data = new Multiselect(this, options);
                $(this).data('multiselect', data);
            }

            // Call multiselect method.
            if (typeof option === 'string') {
                data[option](parameter, extraOptions);

                if (option === 'destroy') {
                    $(this).data('multiselect', false);
                }
            }
        });
    };

    $.fn.multiselect.Constructor = Multiselect;

    $(function() {
        $("select[data-role=multiselect]").multiselect();
    });

}(window.jQuery);




(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === "object" && module.exports) {
        var $ = require('jquery');
        module.exports = factory($);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function(jQuery) {

    /*!
     * jQuery.textcomplete
     *
     * Repository: https://github.com/yuku-t/jquery-textcomplete
     * License:    MIT (https://github.com/yuku-t/jquery-textcomplete/blob/master/LICENSE)
     * Author:     Yuku Takahashi
     */

    if (typeof jQuery === 'undefined') {
        throw new Error('jQuery.textcomplete requires jQuery');
    }

    + function($) {
        'use strict';

        var warn = function(message) {
            if (console.warn) {
                console.warn(message);
            }
        };

        var id = 1;

        $.fn.textcomplete = function(strategies, option) {
            var args = Array.prototype.slice.call(arguments);
            return this.each(function() {
                var $this = $(this);
                var completer = $this.data('textComplete');
                if (!completer) {
                    option || (option = {});
                    option._oid = id++; // unique object id
                    completer = new $.fn.textcomplete.Completer(this, option);
                    $this.data('textComplete', completer);
                }
                if (typeof strategies === 'string') {
                    if (!completer) return;
                    args.shift()
                    completer[strategies].apply(completer, args);
                    if (strategies === 'destroy') {
                        $this.removeData('textComplete');
                    }
                } else {
                    // For backward compatibility.
                    // TODO: Remove at v0.4
                    $.each(strategies, function(obj) {
                        $.each(['header', 'footer', 'placement', 'maxCount'], function(name) {
                            if (obj[name]) {
                                completer.option[name] = obj[name];
                                warn(name + 'as a strategy param is deprecated. Use option.');
                                delete obj[name];
                            }
                        });
                    });
                    completer.register($.fn.textcomplete.Strategy.parse(strategies));
                }
            });
        };

    }(jQuery);

    + function($) {
        'use strict';

        // Exclusive execution control utility.
        //
        // func - The function to be locked. It is executed with a function named
        //        `free` as the first argument. Once it is called, additional
        //        execution are ignored until the free is invoked. Then the last
        //        ignored execution will be replayed immediately.
        //
        // Examples
        //
        //   var lockedFunc = lock(function (free) {
        //     setTimeout(function { free(); }, 1000); // It will be free in 1 sec.
        //     console.log('Hello, world');
        //   });
        //   lockedFunc();  // => 'Hello, world'
        //   lockedFunc();  // none
        //   lockedFunc();  // none
        //   // 1 sec past then
        //   // => 'Hello, world'
        //   lockedFunc();  // => 'Hello, world'
        //   lockedFunc();  // none
        //
        // Returns a wrapped function.
        var lock = function(func) {
            var locked, queuedArgsToReplay;

            return function() {
                // Convert arguments into a real array.
                var args = Array.prototype.slice.call(arguments);
                if (locked) {
                    // Keep a copy of this argument list to replay later.
                    // OK to overwrite a previous value because we only replay
                    // the last one.
                    queuedArgsToReplay = args;
                    return;
                }
                locked = true;
                var self = this;
                args.unshift(function replayOrFree() {
                    if (queuedArgsToReplay) {
                        // Other request(s) arrived while we were locked.
                        // Now that the lock is becoming available, replay
                        // the latest such request, then call back here to
                        // unlock (or replay another request that arrived
                        // while this one was in flight).
                        var replayArgs = queuedArgsToReplay;
                        queuedArgsToReplay = undefined;
                        replayArgs.unshift(replayOrFree);
                        func.apply(self, replayArgs);
                    } else {
                        locked = false;
                    }
                });
                func.apply(this, args);
            };
        };

        var isString = function(obj) {
            return Object.prototype.toString.call(obj) === '[object String]';
        };

        var isFunction = function(obj) {
            return Object.prototype.toString.call(obj) === '[object Function]';
        };

        var uniqueId = 0;

        function Completer(element, option) {
            this.$el = $(element);
            this.id = 'textcomplete' + uniqueId++;
            this.strategies = [];
            this.views = [];
            this.option = $.extend({}, Completer._getDefaults(), option);

            if (!this.$el.is('input[type=text]') && !this.$el.is('textarea') && !element.isContentEditable && element.contentEditable != 'true') {
                throw new Error('textcomplete must be called on a Textarea or a ContentEditable.');
            }

            if (element === document.activeElement) {
                // element has already been focused. Initialize view objects immediately.
                this.initialize()
            } else {
                // Initialize view objects lazily.
                var self = this;
                this.$el.one('focus.' + this.id, function() {
                    self.initialize();
                });
            }
        }

        Completer._getDefaults = function() {
            if (!Completer.DEFAULTS) {
                Completer.DEFAULTS = {
                    appendTo: $('body'),
                    zIndex: '100'
                };
            }

            return Completer.DEFAULTS;
        }

        $.extend(Completer.prototype, {
            // Public properties
            // -----------------

            id: null,
            option: null,
            strategies: null,
            adapter: null,
            dropdown: null,
            $el: null,

            // Public methods
            // --------------

            initialize: function() {
                var element = this.$el.get(0);
                // Initialize view objects.
                this.dropdown = new $.fn.textcomplete.Dropdown(element, this, this.option);
                var Adapter, viewName;
                if (this.option.adapter) {
                    Adapter = this.option.adapter;
                } else {
                    if (this.$el.is('textarea') || this.$el.is('input[type=text]')) {
                        viewName = typeof element.selectionEnd === 'number' ? 'Textarea' : 'IETextarea';
                    } else {
                        viewName = 'ContentEditable';
                    }
                    Adapter = $.fn.textcomplete[viewName];
                }
                this.adapter = new Adapter(element, this, this.option);
            },

            destroy: function() {
                this.$el.off('.' + this.id);
                if (this.adapter) {
                    this.adapter.destroy();
                }
                if (this.dropdown) {
                    this.dropdown.destroy();
                }
                this.$el = this.adapter = this.dropdown = null;
            },

            //// Invoke textcomplete.
            //trigger: function (text, skipUnchangedTerm) {
            //    if (!this.dropdown) { this.initialize(); }
            //    text != null || (text = this.adapter.getTextFromHeadToCaret());
            //    var searchQuery = this._extractSearchQuery(text);
            //    if (searchQuery.length) {
            //        var term = searchQuery[1];
            //        // Ignore shift-key, ctrl-key and so on.
            //        if (skipUnchangedTerm && this._term === term) { return; }
            //        this._term = term;
            //        this._search.apply(this, searchQuery);
            //    } else {
            //        this._term = null;
            //        this.dropdown.deactivate();
            //    }
            //},

            // Invoke textcomplete.
            trigger: function(text, skipUnchangedTerm) {
                if (!this.dropdown) {
                    this.initialize();
                }
                text != null || (text = this.adapter.getTextFromHeadToCaret());
                var searchQuery = this._extractSearchQuery(text);
                if (searchQuery.length) {
                    var term = searchQuery[1];

                    // Ignore shift-key, ctrl-key and so on.

                    ///****************************   EMR CODING CHANGES BLOCK STARTS      *****************************//////////////////
                    ///EMR Changes By Mahesh P

                    //here if the previous term equals to current term the filter is not working since text match found length is > 2 so, we are assigning the term as the 1st and rest of the found matches
                    if (searchQuery[2] != null && searchQuery[2] != undefined) {
                        //if not null
                        if (searchQuery[2][1]) {
                            var term = searchQuery[2][1];
                            //if not null
                            if (searchQuery[2][2]) {
                                term = term + searchQuery[2][2]; //adding to the term
                                searchQuery[1] = term; //reassigning new term to affect search query
                            }
                        }

                    }
                    ///****************************   EMR CODING CHANGES BLOCK ENDS      *****************************//////////////////

                    if (skipUnchangedTerm && this._term === term) {
                        return; //COMMENTED BY EMR 
                    }
                    this._term = term;
                    this._search.apply(this, searchQuery);
                } else {
                    this._term = null;
                    this.dropdown.deactivate();
                }
            },

            fire: function(eventName) {
                var args = Array.prototype.slice.call(arguments, 1);
                this.$el.trigger(eventName, args);
                return this;
            },

            register: function(strategies) {
                Array.prototype.push.apply(this.strategies, strategies);
            },

            // Insert the value into adapter view. It is called when the dropdown is clicked
            // or selected.
            //
            // value    - The selected element of the array callbacked from search func.
            // strategy - The Strategy object.
            // e        - Click or keydown event object.
            select: function(value, strategy, e) {
                this.adapter.select(value, strategy, e);
                this.fire('change').fire('textComplete:select', value, strategy);
                this.adapter.focus();
            },

            // Private properties
            // ------------------

            _clearAtNext: true,
            _term: null,

            // Private methods
            // ---------------

            // Parse the given text and extract the first matching strategy.
            //
            // Returns an array including the strategy, the query term and the match
            // object if the text matches an strategy; otherwise returns an empty array.
            _extractSearchQuery: function(text) {

                //addedd by EMR mahesh p
                //here we place thi s statement  to avoid the starts with "." character strings to run reg expression only when the user types "." and filters the data when the string text contains "." at 1st position only
                //if (text.trim().indexOf(".") == -1 || text.trim().indexOf(".") > 0) return [];

                //if (text.trim().indexOf(".") == -1 || text.trim().indexOf(".") > 0 && this.$el.val().trim().length < 3) return [];

                //console.log(text);
                //var test = (text.indexOf(".") == -1 || text.trim().indexOf(".") == 0) && this.$el.val().trim().length < 3;
                //console.log(test);
                //if (test) return [];

                for (var i = 0; i < this.strategies.length; i++) {
                    var strategy = this.strategies[i];
                    var context = strategy.context(text);
                    if (context || context === '') {
                        var matchRegexp = isFunction(strategy.match) ? strategy.match(text) : strategy.match;
                        if (isString(context)) {
                            text = context;
                        }
                        var match = text.match(matchRegexp);
                        if (match) {
                            return [strategy, match[strategy.index], match];
                        }
                    }
                }
                return []
            },

            // Call the search method of selected strategy..
            _search: lock(function(free, strategy, term, match) {
                var self = this;
                strategy.search(term, function(data, stillSearching) {
                    if (!self.dropdown.shown) {
                        self.dropdown.activate();
                    }
                    if (self._clearAtNext) {
                        // The first callback in the current lock.
                        self.dropdown.clear();
                        self._clearAtNext = false;
                    }
                    self.dropdown.setPosition(self.adapter.getCaretPosition());
                    self.dropdown.render(self._zip(data, strategy, term));
                    if (!stillSearching) {
                        // The last callback in the current lock.
                        free();
                        self._clearAtNext = true; // Call dropdown.clear at the next time.
                    }
                }, match);
            }),

            // Build a parameter for Dropdown#render.
            //
            // Examples
            //
            //  this._zip(['a', 'b'], 's');
            //  //=> [{ value: 'a', strategy: 's' }, { value: 'b', strategy: 's' }]
            _zip: function(data, strategy, term) {
                return $.map(data, function(value) {
                    return {
                        value: value,
                        strategy: strategy,
                        term: term
                    };
                });
            }
        });

        $.fn.textcomplete.Completer = Completer;
    }(jQuery);

    + function($) {
        'use strict';

        var $window = $(window);

        var include = function(zippedData, datum) {
            var i, elem;
            var idProperty = datum.strategy.idProperty
            for (i = 0; i < zippedData.length; i++) {
                elem = zippedData[i];
                if (elem.strategy !== datum.strategy) continue;
                if (idProperty) {
                    if (elem.value[idProperty] === datum.value[idProperty]) return true;
                } else {
                    if (elem.value === datum.value) return true;
                }
            }
            return false;
        };

        var dropdownViews = {};
        $(document).on('click', function(e) {
            var id = e.originalEvent && e.originalEvent.keepTextCompleteDropdown;
            $.each(dropdownViews, function(key, view) {
                if (key !== id) {
                    view.deactivate();
                }
            });
        });

        var commands = {
            SKIP_DEFAULT: 0,
            KEY_UP: 1,
            KEY_DOWN: 2,
            KEY_ENTER: 3,
            KEY_PAGEUP: 4,
            KEY_PAGEDOWN: 5,
            KEY_ESCAPE: 6
        };

        // Dropdown view
        // =============

        // Construct Dropdown object.
        //
        // element - Textarea or contenteditable element.
        function Dropdown(element, completer, option) {
            this.$el = Dropdown.createElement(option);
            this.completer = completer;
            this.id = completer.id + 'dropdown';
            this._data = []; // zipped data.
            this.$inputEl = $(element);
            this.option = option;

            // Override setPosition method.
            if (option.listPosition) {
                this.setPosition = option.listPosition;
            }
            if (option.height) {
                this.$el.height(option.height);
            }
            var self = this;
            $.each(['maxCount', 'placement', 'footer', 'header', 'noResultsMessage', 'className'], function(_i, name) {
                if (option[name] != null) {
                    self[name] = option[name];
                }
            });
            this._bindEvents(element);
            dropdownViews[this.id] = this;
        }

        $.extend(Dropdown, {
            // Class methods
            // -------------

            createElement: function(option) {
                var $parent = option.appendTo;
                if (!($parent instanceof $)) {
                    $parent = $($parent);
                }
                var $el = $('<ul></ul>')
                    .addClass('dropdown-menu textcomplete-dropdown')
                    .attr('id', 'textcomplete-dropdown-' + option._oid)
                    .css({
                        display: 'none',
                        left: 0,
                        position: 'absolute',
                        zIndex: option.zIndex
                    })
                    .appendTo($parent);
                return $el;
            }
        });

        $.extend(Dropdown.prototype, {
            // Public properties
            // -----------------

            $el: null, // jQuery object of ul.dropdown-menu element.
            $inputEl: null, // jQuery object of target textarea.
            completer: null,
            footer: null,
            header: null,
            id: null,
            maxCount: 15, //EMR Changes by Mahesh P changed 10 to 15
            placement: '',
            shown: false,
            data: [], // Shown zipped data.
            className: '',

            // Public methods
            // --------------

            destroy: function() {
                // Don't remove $el because it may be shared by several textcompletes.
                this.deactivate();

                this.$el.off('.' + this.id);
                this.$inputEl.off('.' + this.id);
                this.clear();
                this.$el = this.$inputEl = this.completer = null;
                delete dropdownViews[this.id]
            },

            render: function(zippedData) {
                var contentsHtml = this._buildContents(zippedData);
                var unzippedData = $.map(this.data, function(d) {
                    return d.value;
                });
                if (this.data.length) {
                    this._renderHeader(unzippedData);
                    this._renderFooter(unzippedData);
                    if (contentsHtml) {
                        this._renderContents(contentsHtml);
                        this._fitToBottom();
                        this._activateIndexedItem();
                    }
                    this._setScroll();
                } else if (this.noResultsMessage) {
                    this._renderNoResultsMessage(unzippedData);
                } else if (this.shown) {
                    this.deactivate();
                }
            },

            setPosition: function(pos) {
                this.$el.css(this._applyPlacement(pos));

                // Make the dropdown fixed if the input is also fixed
                // This can't be done during init, as textcomplete may be used on multiple elements on the same page
                // Because the same dropdown is reused behind the scenes, we need to recheck every time the dropdown is showed
                var position = 'absolute';
                // Check if input or one of its parents has positioning we need to care about
                this.$inputEl.add(this.$inputEl.parents()).each(function() {
                    if ($(this).css('position') === 'absolute') // The element has absolute positioning, so it's all OK
                        return false;
                    if ($(this).css('position') === 'fixed') {
                        position = 'fixed';
                        return false;
                    }
                });
                this.$el.css({
                    position: position
                }); // Update positioning

                return this;
            },

            clear: function() {
                this.$el.html('');
                this.data = [];
                this._index = 0;
                this._$header = this._$footer = this._$noResultsMessage = null;
            },

            activate: function() {
                if (!this.shown) {
                    this.clear();
                    this.$el.show();
                    if (this.className) {
                        this.$el.addClass(this.className);
                    }
                    this.completer.fire('textComplete:show');
                    this.shown = true;
                }
                return this;
            },

            deactivate: function(e) {
                if (this.shown) {
                    this.$el.hide();
                    if (this.className) {
                        this.$el.removeClass(this.className);
                    }
                    this.completer.fire('textComplete:hide');
                    this.shown = false;
                }
                //if (e) { debugger; e.stopImmediatePropagation(); e.stopPropagation(); }
                //else
                return this;
            },

            isUp: function(e) {
                return e.keyCode === 38 || (e.ctrlKey && e.keyCode === 80); // UP, Ctrl-P
            },

            isDown: function(e) {
                return e.keyCode === 40 || (e.ctrlKey && e.keyCode === 78); // DOWN, Ctrl-N
            },

            isEnter: function(e) {
                var modifiers = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey;
                return !modifiers && (e.keyCode === 13 || e.keyCode === 9 || (this.option.completeOnSpace === true && e.keyCode === 32)) // ENTER, TAB
            },

            isPageup: function(e) {
                return e.keyCode === 33; // PAGEUP
            },

            isPagedown: function(e) {
                return e.keyCode === 34; // PAGEDOWN
            },

            isEscape: function(e) {
                return e.keyCode === 27; // ESCAPE
            },

            // Private properties
            // ------------------

            _data: null, // Currently shown zipped data.
            _index: null,
            _$header: null,
            _$noResultsMessage: null,
            _$footer: null,

            // Private methods
            // ---------------

            _bindEvents: function() {
                this.$el.on('mousedown.' + this.id, '.textcomplete-item', $.proxy(this._onClick, this));
                this.$el.on('touchstart.' + this.id, '.textcomplete-item', $.proxy(this._onClick, this));
                this.$el.on('mouseover.' + this.id, '.textcomplete-item', $.proxy(this._onMouseover, this));
                this.$inputEl.on('keydown.' + this.id, $.proxy(this._onKeydown, this));
            },

            _onClick: function(e) {
                var $el = $(e.target);
                e.preventDefault();
                e.originalEvent.keepTextCompleteDropdown = this.id;
                if (!$el.hasClass('textcomplete-item')) {
                    $el = $el.closest('.textcomplete-item');
                }
                var datum = this.data[parseInt($el.data('index'), 10)];
                this.completer.select(datum.value, datum.strategy, e);
                var self = this;
                // Deactive at next tick to allow other event handlers to know whether
                // the dropdown has been shown or not.
                setTimeout(function() {
                    self.deactivate();
                    if (e.type === 'touchstart') {
                        self.$inputEl.focus();
                    }
                }, 0);
            },

            // Activate hovered item.
            _onMouseover: function(e) {
                var $el = $(e.target);
                e.preventDefault();
                if (!$el.hasClass('textcomplete-item')) {
                    $el = $el.closest('.textcomplete-item');
                }
                this._index = parseInt($el.data('index'), 10);
                this._activateIndexedItem();
            },

            _onKeydown: function(e) {

                if (!this.shown) {
                    return;
                }

                var command;

                if ($.isFunction(this.option.onKeydown)) {
                    command = this.option.onKeydown(e, commands);
                }

                if (command == null) {
                    command = this._defaultKeydown(e);
                }

                switch (command) {
                    case commands.KEY_UP:
                        e.preventDefault();
                        this._up();
                        break;
                    case commands.KEY_DOWN:
                        e.preventDefault();
                        this._down();
                        break;
                    case commands.KEY_ENTER:
                        e.preventDefault();
                        this._enter(e);
                        break;
                    case commands.KEY_PAGEUP:
                        e.preventDefault();
                        this._pageup();
                        break;
                    case commands.KEY_PAGEDOWN:
                        e.preventDefault();
                        this._pagedown();
                        break;
                    case commands.KEY_ESCAPE:
                        e.preventDefault();
                        this.deactivate(e);
                        break;
                }
            },
            _defaultKeydown: function(e) {
                if (this.isUp(e)) {
                    return commands.KEY_UP;
                } else if (this.isDown(e)) {
                    return commands.KEY_DOWN;
                } else if (this.isEnter(e)) {
                    return commands.KEY_ENTER;
                } else if (this.isPageup(e)) {
                    return commands.KEY_PAGEUP;
                } else if (this.isPagedown(e)) {
                    return commands.KEY_PAGEDOWN;
                } else if (this.isEscape(e)) {
                    return commands.KEY_ESCAPE;
                }
            },

            _up: function() {
                if (this._index === 0) {
                    this._index = this.data.length - 1;
                } else {
                    this._index -= 1;
                }
                this._activateIndexedItem();
                this._setScroll();
            },

            _down: function() {
                if (this._index === this.data.length - 1) {
                    this._index = 0;
                } else {
                    this._index += 1;
                }
                this._activateIndexedItem();
                this._setScroll();
            },

            _enter: function(e) {
                var datum = this.data[parseInt(this._getActiveElement().data('index'), 10)];
                this.completer.select(datum.value, datum.strategy, e);
                this.deactivate();
            },

            _pageup: function() {
                var target = 0;
                var threshold = this._getActiveElement().position().top - this.$el.innerHeight();
                this.$el.children().each(function(i) {
                    if ($(this).position().top + $(this).outerHeight() > threshold) {
                        target = i;
                        return false;
                    }
                });
                this._index = target;
                this._activateIndexedItem();
                this._setScroll();
            },

            _pagedown: function() {
                var target = this.data.length - 1;
                var threshold = this._getActiveElement().position().top + this.$el.innerHeight();
                this.$el.children().each(function(i) {
                    if ($(this).position().top > threshold) {
                        target = i;
                        return false
                    }
                });
                this._index = target;
                this._activateIndexedItem();
                this._setScroll();
            },

            _activateIndexedItem: function() {
                this.$el.find('.textcomplete-item.active').removeClass('active');
                this._getActiveElement().addClass('active');
            },

            _getActiveElement: function() {
                return this.$el.children('.textcomplete-item:nth(' + this._index + ')');
            },

            _setScroll: function() {
                var $activeEl = this._getActiveElement();
                var itemTop = $activeEl.position().top;
                var itemHeight = $activeEl.outerHeight();
                var visibleHeight = this.$el.innerHeight();
                var visibleTop = this.$el.scrollTop();
                if (this._index === 0 || this._index == this.data.length - 1 || itemTop < 0) {
                    this.$el.scrollTop(itemTop + visibleTop);
                } else if (itemTop + itemHeight > visibleHeight) {
                    this.$el.scrollTop(itemTop + itemHeight + visibleTop - visibleHeight);
                }
            },

            _buildContents: function(zippedData) {
                var datum, i, index;
                var html = '';
                for (i = 0; i < zippedData.length; i++) {
                    if (this.data.length === this.maxCount) break;
                    datum = zippedData[i];
                    if (include(this.data, datum)) {
                        continue;
                    }
                    index = this.data.length;
                    this.data.push(datum);
                    html += '<li class="textcomplete-item" data-index="' + index + '"><a>';
                    html += datum.strategy.template(datum.value, datum.term);
                    html += '</a></li>';
                }
                return html;
            },

            _renderHeader: function(unzippedData) {
                if (this.header) {
                    if (!this._$header) {
                        this._$header = $('<li class="textcomplete-header"></li>').prependTo(this.$el);
                    }
                    var html = $.isFunction(this.header) ? this.header(unzippedData) : this.header;
                    this._$header.html(html);
                }
            },

            _renderFooter: function(unzippedData) {
                if (this.footer) {
                    if (!this._$footer) {
                        this._$footer = $('<li class="textcomplete-footer"></li>').appendTo(this.$el);
                    }
                    var html = $.isFunction(this.footer) ? this.footer(unzippedData) : this.footer;
                    this._$footer.html(html);
                }
            },

            _renderNoResultsMessage: function(unzippedData) {
                if (this.noResultsMessage) {
                    if (!this._$noResultsMessage) {
                        this._$noResultsMessage = $('<li class="textcomplete-no-results-message"></li>').appendTo(this.$el);
                    }
                    var html = $.isFunction(this.noResultsMessage) ? this.noResultsMessage(unzippedData) : this.noResultsMessage;
                    this._$noResultsMessage.html(html);
                }
            },

            _renderContents: function(html) {
                if (this._$footer) {
                    this._$footer.before(html);
                } else {
                    this.$el.append(html);
                }
            },

            _fitToBottom: function() {
                var windowScrollBottom = $window.scrollTop() + $window.height();
                var height = this.$el.height();
                if ((this.$el.position().top + height) > windowScrollBottom) {
                    this.$el.offset({
                        top: windowScrollBottom - height
                    });
                }
            },

            _applyPlacement: function(position) {
                // If the 'placement' option set to 'top', move the position above the element.
                if (this.placement.indexOf('top') !== -1) {
                    // Overwrite the position object to set the 'bottom' property instead of the top.
                    position = {
                        top: 'auto',
                        bottom: this.$el.parent().height() - position.top + position.lineHeight,
                        left: position.left
                    };
                } else {
                    position.bottom = 'auto';
                    delete position.lineHeight;
                }
                if (this.placement.indexOf('absleft') !== -1) {
                    position.left = 0;
                } else if (this.placement.indexOf('absright') !== -1) {
                    position.right = 0;
                    position.left = 'auto';
                }
                return position;
            }
        });

        $.fn.textcomplete.Dropdown = Dropdown;
        $.extend($.fn.textcomplete, commands);
    }(jQuery);

    + function($) {
        'use strict';

        // Memoize a search function.
        var memoize = function(func) {
            var memo = {};
            return function(term, callback) {
                if (memo[term]) {
                    callback(memo[term]);
                } else {
                    func.call(this, term, function(data) {
                        memo[term] = (memo[term] || []).concat(data);
                        callback.apply(null, arguments);
                    });
                }
            };
        };

        function Strategy(options) {
            $.extend(this, options);
            if (this.cache) {
                this.search = memoize(this.search);
            }
        }

        Strategy.parse = function(optionsArray) {
            return $.map(optionsArray, function(options) {
                return new Strategy(options);
            });
        };

        $.extend(Strategy.prototype, {
            // Public properties
            // -----------------

            // Required
            match: null,
            replace: null,
            search: null,

            // Optional
            cache: false,
            context: function() {
                return true;
            },
            index: 2,
            template: function(obj) {
                return obj;
            },
            idProperty: null
        });

        $.fn.textcomplete.Strategy = Strategy;

    }(jQuery);

    + function($) {
        'use strict';

        var now = Date.now || function() {
            return new Date().getTime();
        };

        // Returns a function, that, as long as it continues to be invoked, will not
        // be triggered. The function will be called after it stops being called for
        // `wait` msec.
        //
        // This utility function was originally implemented at Underscore.js.
        var debounce = function(func, wait) {
            var timeout, args, context, timestamp, result;
            var later = function() {
                var last = now() - timestamp;
                if (last < wait) {
                    timeout = setTimeout(later, wait - last);
                } else {
                    timeout = null;
                    result = func.apply(context, args);
                    context = args = null;
                }
            };

            return function() {
                context = this;
                args = arguments;
                timestamp = now();
                if (!timeout) {
                    timeout = setTimeout(later, wait);
                }
                return result;
            };
        };

        function Adapter() {}

        $.extend(Adapter.prototype, {
            // Public properties
            // -----------------

            id: null, // Identity.
            completer: null, // Completer object which creates it.
            el: null, // Textarea element.
            $el: null, // jQuery object of the textarea.
            option: null,

            // Public methods
            // --------------

            initialize: function(element, completer, option) {
                this.el = element;
                this.$el = $(element);
                this.id = completer.id + this.constructor.name;
                this.completer = completer;
                this.option = option;

                if (this.option.debounce) {
                    this._onKeyup = debounce(this._onKeyup, this.option.debounce);
                }

                this._bindEvents();
            },

            destroy: function() {
                this.$el.off('.' + this.id); // Remove all event handlers.
                this.$el = this.el = this.completer = null;
            },

            // Update the element with the given value and strategy.
            //
            // value    - The selected object. It is one of the item of the array
            //            which was callbacked from the search function.
            // strategy - The Strategy associated with the selected value.
            select: function( /* value, strategy */ ) {
                throw new Error('Not implemented');
            },

            // Returns the caret's relative coordinates from body's left top corner.
            //
            // FIXME: Calculate the left top corner of `this.option.appendTo` element.
            getCaretPosition: function() {

                //EMR Changes By Mahesh P added support for text box appneding at the respected position
                if (this.el.type.toLowerCase() == "text" && this.el.tagName.toUpperCase() == "INPUT") {
                    var positionsrect = this.el.getClientRects()[0];
                    var offset = this.$el.offset();
                    var position = {
                        //bottom: positionsrect.bottom,
                        //height: positionsrect.height,
                        //lineHeight
                        left: Math.max(positionsrect.left + this._getCaretRelativePosition().left, this._getCaretRelativePosition().left),
                        //right: positionsrect.right,
                        top: positionsrect.top + 15
                    };
                } else {
                    var position = this._getCaretRelativePosition();
                    var offset = this.$el.offset();
                    position.top += offset.top;
                    position.left += offset.left;
                }
                return position;
            },

            // Focus on the element.
            focus: function() {
                this.$el.focus();
            },

            // Private methods
            // ---------------

            _bindEvents: function() {
                this.$el.on('keyup.' + this.id, $.proxy(this._onKeyup, this));
            },

            _onKeyup: function(e) {
                if (this._skipSearch(e)) {
                    return;
                }
                this.completer.trigger(this.getTextFromHeadToCaret(), true);
            },

            // Suppress searching if it returns true.
            _skipSearch: function(clickEvent) {
                switch (clickEvent.keyCode) {
                    case 13: // ENTER
                    case 40: // DOWN
                    case 38: // UP
                        return true;
                }
                if (clickEvent.ctrlKey) switch (clickEvent.keyCode) {
                    case 78: // Ctrl-N
                    case 80: // Ctrl-P
                        return true;
                }
            }
        });

        $.fn.textcomplete.Adapter = Adapter;
    }(jQuery);

    + function($) {
        'use strict';

        // Textarea adapter
        // ================
        //
        // Managing a textarea. It doesn't know a Dropdown.
        function Textarea(element, completer, option) {
            this.initialize(element, completer, option);
        }

        Textarea.DIV_PROPERTIES = {
            left: -9999,
            position: 'absolute',
            top: 0,
            whiteSpace: 'pre-wrap'
        }

        Textarea.COPY_PROPERTIES = [
            'border-width', 'font-family', 'font-size', 'font-style', 'font-variant',
            'font-weight', 'height', 'letter-spacing', 'word-spacing', 'line-height',
            'text-decoration', 'text-align', 'width', 'padding-top', 'padding-right',
            'padding-bottom', 'padding-left', 'margin-top', 'margin-right',
            'margin-bottom', 'margin-left', 'border-style', 'box-sizing', 'tab-size'
        ];

        $.extend(Textarea.prototype, $.fn.textcomplete.Adapter.prototype, {
            // Public methods
            // --------------

            // Update the textarea with the given value and strategy.
            select: function(value, strategy, e) {
                var pre = this.getTextFromHeadToCaret();
                var post = this.el.value.substring(this.el.selectionEnd);
                var newSubstr = strategy.replace(value, e, pre, post);
                if ($.isArray(newSubstr)) {
                    post = newSubstr[1] + post;
                    newSubstr = newSubstr[0];
                }
                pre = pre.replace(strategy.match, newSubstr);
                this.$el.val(pre + post);
                this.el.selectionStart = this.el.selectionEnd = pre.length;
            },

            // Private methods
            // ---------------

            // Returns the caret's relative coordinates from textarea's left top corner.
            //
            // Browser native API does not provide the way to know the position of
            // caret in pixels, so that here we use a kind of hack to accomplish
            // the aim. First of all it puts a dummy div element and completely copies
            // the textarea's style to the element, then it inserts the text and a
            // span element into the textarea.
            // Consequently, the span element's position is the thing what we want.
            _getCaretRelativePosition: function() {
                var dummyDiv = $('<div></div>').css(this._copyCss())
                    .text(this.getTextFromHeadToCaret());
                var span = $('<span></span>').text('.').appendTo(dummyDiv);
                this.$el.before(dummyDiv);
                var position = span.position();
                position.top += span.height() - this.$el.scrollTop();
                position.lineHeight = span.height();
                dummyDiv.remove();
                return position;
            },

            _copyCss: function() {
                return $.extend({
                    // Set 'scroll' if a scrollbar is being shown; otherwise 'auto'.
                    overflow: this.el.scrollHeight > this.el.offsetHeight ? 'scroll' : 'auto'
                }, Textarea.DIV_PROPERTIES, this._getStyles());
            },

            _getStyles: (function($) {
                var color = $('<div></div>').css(['color']).color;
                if (typeof color !== 'undefined') {
                    return function() {
                        return this.$el.css(Textarea.COPY_PROPERTIES);
                    };
                } else { // jQuery < 1.8
                    return function() {
                        var $el = this.$el;
                        var styles = {};
                        $.each(Textarea.COPY_PROPERTIES, function(i, property) {
                            styles[property] = $el.css(property);
                        });
                        return styles;
                    };
                }
            })($),

            getTextFromHeadToCaret: function() {
                return this.el.value.substring(0, this.el.selectionEnd);
            }
        });

        $.fn.textcomplete.Textarea = Textarea;
    }(jQuery);

    + function($) {
        'use strict';

        var sentinelChar = '吶';

        function IETextarea(element, completer, option) {
            this.initialize(element, completer, option);
            $('<span>' + sentinelChar + '</span>').css({
                position: 'absolute',
                top: -9999,
                left: -9999
            }).insertBefore(element);
        }

        $.extend(IETextarea.prototype, $.fn.textcomplete.Textarea.prototype, {
            // Public methods
            // --------------

            select: function(value, strategy, e) {
                var pre = this.getTextFromHeadToCaret();
                var post = this.el.value.substring(pre.length);
                var newSubstr = strategy.replace(value, e, pre, post);
                if ($.isArray(newSubstr)) {
                    post = newSubstr[1] + post;
                    newSubstr = newSubstr[0];
                }
                pre = pre.replace(strategy.match, newSubstr);
                this.$el.val(pre + post);
                this.el.focus();
                var range = this.el.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pre.length);
                range.moveStart('character', pre.length);
                range.select();
            },

            getTextFromHeadToCaret: function() {
                this.el.focus();
                var range = document.selection.createRange();
                range.moveStart('character', -this.el.value.length);
                var arr = range.text.split(sentinelChar)
                return arr.length === 1 ? arr[0] : arr[1];
            }
        });

        $.fn.textcomplete.IETextarea = IETextarea;
    }(jQuery);

    // NOTE: TextComplete plugin has contenteditable support but it does not work
    //       fine especially on old IEs.
    //       Any pull requests are REALLY welcome.

    + function($) {
        'use strict';

        // ContentEditable adapter
        // =======================
        //
        // Adapter for contenteditable elements.
        function ContentEditable(element, completer, option) {
            this.initialize(element, completer, option);
        }

        $.extend(ContentEditable.prototype, $.fn.textcomplete.Adapter.prototype, {
            // Public methods
            // --------------

            // Update the content with the given value and strategy.
            // When an dropdown item is selected, it is executed.
            select: function(value, strategy, e) {
                var pre = this.getTextFromHeadToCaret();
                var sel = window.getSelection()
                var range = sel.getRangeAt(0);
                var selection = range.cloneRange();
                selection.selectNodeContents(range.startContainer);
                var content = selection.toString();
                var post = content.substring(range.startOffset);
                var newSubstr = strategy.replace(value, e, pre, post);
                if ($.isArray(newSubstr)) {
                    post = newSubstr[1] + post;
                    newSubstr = newSubstr[0];
                }
                pre = pre.replace(strategy.match, newSubstr);
                range.selectNodeContents(range.startContainer);
                range.deleteContents();
                var node = document.createTextNode(pre + post);
                range.insertNode(node);
                range.setStart(node, pre.length);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            },

            // Private methods
            // ---------------

            // Returns the caret's relative position from the contenteditable's
            // left top corner.
            //
            // Examples
            //
            //   this._getCaretRelativePosition()
            //   //=> { top: 18, left: 200, lineHeight: 16 }
            //
            // Dropdown's position will be decided using the result.
            _getCaretRelativePosition: function() {
                var range = window.getSelection().getRangeAt(0).cloneRange();
                var node = document.createElement('span');
                range.insertNode(node);
                range.selectNodeContents(node);
                range.deleteContents();
                var $node = $(node);
                var position = $node.offset();
                position.left -= this.$el.offset().left;
                position.top += $node.height() - this.$el.offset().top;
                position.lineHeight = $node.height();
                $node.remove();
                var dir = this.$el.attr('dir') || this.$el.css('direction');
                if (dir === 'rtl') {
                    position.left -= this.listView.$el.width();
                }
                return position;
            },

            // Returns the string between the first character and the caret.
            // Completer will be triggered with the result for start autocompleting.
            //
            // Example
            //
            //   // Suppose the html is '<b>hello</b> wor|ld' and | is the caret.
            //   this.getTextFromHeadToCaret()
            //   // => ' wor'  // not '<b>hello</b> wor'
            getTextFromHeadToCaret: function() {
                var range = window.getSelection().getRangeAt(0);
                var selection = range.cloneRange();
                selection.selectNodeContents(range.startContainer);
                return selection.toString().substring(0, range.startOffset);
            }
        });

        $.fn.textcomplete.ContentEditable = ContentEditable;
    }(jQuery);

    return jQuery;
}));


/* Chosen v1.4.2 | (c) 2011-2015 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
(function() {
    var a, AbstractChosen, Chosen, SelectParser, b, c = {}.hasOwnProperty,
        d = function(a, b) {
            function d() {
                this.constructor = a
            }
            for (var e in b) c.call(b, e) && (a[e] = b[e]);
            return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
        };
    SelectParser = function() {
        function SelectParser() {
            this.options_index = 0, this.parsed = []
        }
        return SelectParser.prototype.add_node = function(a) {
            return "OPTGROUP" === a.nodeName.toUpperCase() ? this.add_group(a) : this.add_option(a)
        }, SelectParser.prototype.add_group = function(a) {
            var b, c, d, e, f, g;
            for (b = this.parsed.length, this.parsed.push({
                    array_index: b,
                    group: !0,
                    label: this.escapeExpression(a.label),
                    title: a.title ? a.title : void 0,
                    children: 0,
                    disabled: a.disabled,
                    classes: a.className
                }), f = a.childNodes, g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(this.add_option(c, b, a.disabled));
            return g
        }, SelectParser.prototype.add_option = function(a, b, c) {
            return "OPTION" === a.nodeName.toUpperCase() ? ("" !== a.text ? (null != b && (this.parsed[b].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: a.value,
                text: a.text,
                html: a.innerHTML,
                title: a.title ? a.title : void 0,
                selected: a.selected,
                disabled: c === !0 ? c : a.disabled,
                group_array_index: b,
                group_label: null != b ? this.parsed[b].label : null,
                classes: a.className,
                style: a.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1) : void 0
        }, SelectParser.prototype.escapeExpression = function(a) {
            var b, c;
            return null == a || a === !1 ? "" : /[\&\<\>\"\'\`]/.test(a) ? (b = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, c = /&(?!\w+;)|[\<\>\"\'\`]/g, a.replace(c, function(a) {
                return b[a] || "&amp;"
            })) : a
        }, SelectParser
    }(), SelectParser.select_to_array = function(a) {
        var b, c, d, e, f;
        for (c = new SelectParser, f = a.childNodes, d = 0, e = f.length; e > d; d++) b = f[d], c.add_node(b);
        return c.parsed
    }, AbstractChosen = function() {
        function AbstractChosen(a, b) {
            this.form_field = a, this.options = null != b ? b : {}, AbstractChosen.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
        }
        return AbstractChosen.prototype.set_default_values = function() {
            var a = this;
            return this.click_test_action = function(b) {
                return a.test_active_click(b)
            }, this.activate_action = function(b) {
                return a.activate_field(b)
            }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1
        }, AbstractChosen.prototype.set_default_text = function() {
            return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text
        }, AbstractChosen.prototype.choice_label = function(a) {
            return this.include_group_label_in_selected && null != a.group_label ? "<b class='group-name'>" + a.group_label + "</b>" + a.html : a.html
        }, AbstractChosen.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        }, AbstractChosen.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        }, AbstractChosen.prototype.input_focus = function() {
            var a = this;
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout(function() {
                    return a.container_mousedown()
                }, 50)
            } else if (!this.active_field) return this.activate_field()
        }, AbstractChosen.prototype.input_blur = function() {
            var a = this;
            return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function() {
                return a.blur_test()
            }, 100))
        }, AbstractChosen.prototype.results_option_build = function(a) {
            var b, c, d, e, f;
            for (b = "", f = this.results_data, d = 0, e = f.length; e > d; d++) c = f[d], b += c.group ? this.result_add_group(c) : this.result_add_option(c), (null != a ? a.first : void 0) && (c.selected && this.is_multiple ? this.choice_build(c) : c.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(c)));
            return b
        }, AbstractChosen.prototype.result_add_option = function(a) {
            var b, c;
            return a.search_match ? this.include_option_in_results(a) ? (b = [], a.disabled || a.selected && this.is_multiple || b.push("active-result"), !a.disabled || a.selected && this.is_multiple || b.push("disabled-result"), a.selected && b.push("result-selected"), null != a.group_array_index && b.push("group-option"), "" !== a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.style.cssText = a.style, c.setAttribute("data-option-array-index", a.array_index), c.innerHTML = a.search_text, a.title && (c.title = a.title), this.outerHTML(c)) : "" : ""
        }, AbstractChosen.prototype.result_add_group = function(a) {
            var b, c;
            return a.search_match || a.group_match ? a.active_options > 0 ? (b = [], b.push("group-result"), a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.innerHTML = a.search_text, a.title && (c.title = a.title), this.outerHTML(c)) : "" : ""
        }, AbstractChosen.prototype.results_update_field = function() {
            return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
        }, AbstractChosen.prototype.reset_single_select_options = function() {
            var a, b, c, d, e;
            for (d = this.results_data, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a.selected ? e.push(a.selected = !1) : e.push(void 0);
            return e
        }, AbstractChosen.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, AbstractChosen.prototype.results_search = function() {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, AbstractChosen.prototype.winnow_results = function() {
            var a, b, c, d, e, f, g, h, i, j, k, l;
            for (this.no_results_clear(), d = 0, f = this.get_search_text(), a = f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), i = new RegExp(a, "i"), c = this.get_search_regex(a), l = this.results_data, j = 0, k = l.length; k > j; j++) b = l[j], b.search_match = !1, e = null, this.include_option_in_results(b) && (b.group && (b.group_match = !1, b.active_options = 0), null != b.group_array_index && this.results_data[b.group_array_index] && (e = this.results_data[b.group_array_index], 0 === e.active_options && e.search_match && (d += 1), e.active_options += 1), b.search_text = b.group ? b.label : b.html, (!b.group || this.group_search) && (b.search_match = this.search_string_match(b.search_text, c), b.search_match && !b.group && (d += 1), b.search_match ? (f.length && (g = b.search_text.search(i), h = b.search_text.substr(0, g + f.length) + "</em>" + b.search_text.substr(g + f.length), b.search_text = h.substr(0, g) + "<em>" + h.substr(g)), null != e && (e.group_match = !0)) : null != b.group_array_index && this.results_data[b.group_array_index].search_match && (b.search_match = !0)));
            return this.result_clear_highlight(), 1 > d && f.length ? (this.update_results_content(""), this.no_results(f)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, AbstractChosen.prototype.get_search_regex = function(a) {
            var b;
            return b = this.search_contains ? "" : "^", new RegExp(b + a, "i")
        }, AbstractChosen.prototype.search_string_match = function(a, b) {
            var c, d, e, f;
            if (b.test(a)) return !0;
            if (this.enable_split_word_search && (a.indexOf(" ") >= 0 || 0 === a.indexOf("[")) && (d = a.replace(/\[|\]/g, "").split(" "), d.length))
                for (e = 0, f = d.length; f > e; e++)
                    if (c = d[e], b.test(c)) return !0
        }, AbstractChosen.prototype.choices_count = function() {
            var a, b, c, d;
            if (null != this.selected_option_count) return this.selected_option_count;
            for (this.selected_option_count = 0, d = this.form_field.options, b = 0, c = d.length; c > b; b++) a = d[b], a.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, AbstractChosen.prototype.choices_click = function(a) {
            return a.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
        }, AbstractChosen.prototype.keyup_checker = function(a) {
            var b, c;
            switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), b) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                    if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    if (a.preventDefault(), this.results_showing) return this.result_select(a);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
            }
        }, AbstractChosen.prototype.clipboard_event_checker = function() {
            var a = this;
            return setTimeout(function() {
                return a.results_search()
            }, 50)
        }, AbstractChosen.prototype.container_width = function() {
            return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
        }, AbstractChosen.prototype.include_option_in_results = function(a) {
            return this.is_multiple && !this.display_selected_options && a.selected ? !1 : !this.display_disabled_options && a.disabled ? !1 : a.empty ? !1 : !0
        }, AbstractChosen.prototype.search_results_touchstart = function(a) {
            return this.touch_started = !0, this.search_results_mouseover(a)
        }, AbstractChosen.prototype.search_results_touchmove = function(a) {
            return this.touch_started = !1, this.search_results_mouseout(a)
        }, AbstractChosen.prototype.search_results_touchend = function(a) {
            return this.touch_started ? this.search_results_mouseup(a) : void 0
        }, AbstractChosen.prototype.outerHTML = function(a) {
            var b;
            return a.outerHTML ? a.outerHTML : (b = document.createElement("div"), b.appendChild(a), b.innerHTML)
        }, AbstractChosen.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
        }, AbstractChosen.default_multiple_text = "Select Some Options", AbstractChosen.default_single_text = "Select an Option", AbstractChosen.default_no_result_text = "No results match", AbstractChosen
    }(), a = jQuery, a.fn.extend({
        chosen: function(b) {
            return AbstractChosen.browser_is_supported() ? this.each(function() {
                var c, d;
                c = a(this), d = c.data("chosen"), "destroy" === b && d instanceof Chosen ? d.destroy() : d instanceof Chosen || c.data("chosen", new Chosen(this, b))
            }) : this
        }
    }), Chosen = function(c) {
        function Chosen() {
            return b = Chosen.__super__.constructor.apply(this, arguments)
        }
        return d(Chosen, c), Chosen.prototype.setup = function() {
            return this.form_field_jq = a(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }, Chosen.prototype.set_up_html = function() {
            var b, c;
            return b = ["chosen-container"], b.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && b.push(this.form_field.className), this.is_rtl && b.push("chosen-rtl"), c = {
                "class": b.join(" "),
                style: "width: auto;min-width:200px;" /*+ this.container_width() + ";"*/ ,
                title: this.form_field.title
            }, this.form_field.id.length && (c.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = a("<div />", c), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
        }, Chosen.prototype.on_ready = function() {
            return this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        }, Chosen.prototype.register_observers = function() {
            var a = this;
            return this.container.bind("touchstart.chosen", function(b) {
                return a.container_mousedown(b), b.preventDefault()
            }), this.container.bind("touchend.chosen", function(b) {
                return a.container_mouseup(b), b.preventDefault()
            }), this.container.bind("mousedown.chosen", function(b) {
                a.container_mousedown(b)
            }), this.container.bind("mouseup.chosen", function(b) {
                a.container_mouseup(b)
            }), this.container.bind("mouseenter.chosen", function(b) {
                a.mouse_enter(b)
            }), this.container.bind("mouseleave.chosen", function(b) {
                a.mouse_leave(b)
            }), this.search_results.bind("mouseup.chosen", function(b) {
                a.search_results_mouseup(b)
            }), this.search_results.bind("mouseover.chosen", function(b) {
                a.search_results_mouseover(b)
            }), this.search_results.bind("mouseout.chosen", function(b) {
                a.search_results_mouseout(b)
            }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(b) {
                a.search_results_mousewheel(b)
            }), this.search_results.bind("touchstart.chosen", function(b) {
                a.search_results_touchstart(b)
            }), this.search_results.bind("touchmove.chosen", function(b) {
                a.search_results_touchmove(b)
            }), this.search_results.bind("touchend.chosen", function(b) {
                a.search_results_touchend(b)
            }), this.form_field_jq.bind("chosen:updated.chosen", function(b) {
                a.results_update_field(b)
            }), this.form_field_jq.bind("chosen:activate.chosen", function(b) {
                a.activate_field(b)
            }), this.form_field_jq.bind("chosen:open.chosen", function(b) {
                a.container_mousedown(b)
            }), this.form_field_jq.bind("chosen:close.chosen", function(b) {
                a.input_blur(b)
            }), this.search_field.bind("blur.chosen", function(b) {
                a.input_blur(b)
            }), this.search_field.bind("keyup.chosen", function(b) {
                a.keyup_checker(b)
            }), this.search_field.bind("keydown.chosen", function(b) {
                a.keydown_checker(b)
            }), this.search_field.bind("focus.chosen", function(b) {
                a.input_focus(b)
            }), this.search_field.bind("cut.chosen", function(b) {
                a.clipboard_event_checker(b)
            }), this.search_field.bind("paste.chosen", function(b) {
                a.clipboard_event_checker(b)
            }), this.is_multiple ? this.search_choices.bind("click.chosen", function(b) {
                a.choices_click(b)
            }) : this.container.bind("click.chosen", function(a) {
                a.preventDefault()
            })
        }, Chosen.prototype.destroy = function() {
            return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, Chosen.prototype.search_field_disabled = function() {
            return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        }, Chosen.prototype.container_mousedown = function(b) {
            return this.is_disabled || (b && "mousedown" === b.type && !this.results_showing && b.preventDefault(), null != b && a(b.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !b || a(b.target)[0] !== this.selected_item[0] && !a(b.target).parents("a.chosen-single").length || (b.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), a(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
        }, Chosen.prototype.container_mouseup = function(a) {
            return "ABBR" !== a.target.nodeName || this.is_disabled ? void 0 : this.results_reset(a)
        }, Chosen.prototype.search_results_mousewheel = function(a) {
            var b;
            return a.originalEvent && (b = a.originalEvent.deltaY || -a.originalEvent.wheelDelta || a.originalEvent.detail), null != b ? (a.preventDefault(), "DOMMouseScroll" === a.type && (b = 40 * b), this.search_results.scrollTop(b + this.search_results.scrollTop())) : void 0
        }, Chosen.prototype.blur_test = function() {
            return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
        }, Chosen.prototype.close_field = function() {
            return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, Chosen.prototype.activate_field = function() {
            return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, Chosen.prototype.test_active_click = function(b) {
            var c;
            return c = a(b.target).closest(".chosen-container"), c.length && this.container[0] === c[0] ? this.active_field = !0 : this.close_field()
        }, Chosen.prototype.results_build = function() {
            return this.parsing = !0, this.selected_option_count = null, this.results_data = SelectParser.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                first: !0
            })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, Chosen.prototype.result_do_highlight = function(a) {
            var b, c, d, e, f;
            if (a.length) {
                if (this.result_clear_highlight(), this.result_highlight = a, this.result_highlight.addClass("highlighted"), d = parseInt(this.search_results.css("maxHeight"), 10), f = this.search_results.scrollTop(), e = d + f, c = this.result_highlight.position().top + this.search_results.scrollTop(), b = c + this.result_highlight.outerHeight(), b >= e) return this.search_results.scrollTop(b - d > 0 ? b - d : 0);
                if (f > c) return this.search_results.scrollTop(c)
            }
        }, Chosen.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, Chosen.prototype.results_show = function() {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            }))
        }, Chosen.prototype.update_results_content = function(a) {
            return this.search_results.html(a)
        }, Chosen.prototype.results_hide = function() {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })), this.results_showing = !1
        }, Chosen.prototype.set_tab_index = function() {
            var a;
            return this.form_field.tabIndex ? (a = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = a) : void 0
        }, Chosen.prototype.set_label_behavior = function() {
            var b = this;
            return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = a("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function(a) {
                return b.is_multiple ? b.container_mousedown(a) : b.activate_field()
            }) : void 0
        }, Chosen.prototype.show_search_field_default = function() {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, Chosen.prototype.search_results_mouseup = function(b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c.length ? (this.result_highlight = c, this.result_select(b), this.search_field.focus()) : void 0
        }, Chosen.prototype.search_results_mouseover = function(b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c ? this.result_do_highlight(c) : void 0
        }, Chosen.prototype.search_results_mouseout = function(b) {
            return a(b.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
        }, Chosen.prototype.choice_build = function(b) {
            var c, d, e = this;
            return c = a("<li />", {
                "class": "search-choice"
            }).html("<span>" + this.choice_label(b) + "</span>"), b.disabled ? c.addClass("search-choice-disabled") : (d = a("<a />", {
                "class": "search-choice-close",
                "data-option-array-index": b.array_index
            }), d.bind("click.chosen", function(a) {
                return e.choice_destroy_link_click(a)
            }), c.append(d)), this.search_container.before(c)
        }, Chosen.prototype.choice_destroy_link_click = function(b) {
            return b.preventDefault(), b.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(a(b.target))
        }, Chosen.prototype.choice_destroy = function(a) {
            return this.result_deselect(a[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), a.parents("li").first().remove(), this.search_field_scale()) : void 0
        }, Chosen.prototype.results_reset = function() {
            return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
        }, Chosen.prototype.results_reset_cleanup = function() {
            return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, Chosen.prototype.result_select = function(a) {
            var b, c;
            return this.result_highlight ? (b = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.is_multiple ? b.removeClass("active-result") : this.reset_single_select_options(), b.addClass("result-selected"), c = this.results_data[b[0].getAttribute("data-option-array-index")], c.selected = !0, this.form_field.options[c.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(c) : this.single_set_selected_text(this.choice_label(c)), (a.metaKey || a.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                selected: this.form_field.options[c.options_index].value
            }), this.current_selectedIndex = this.form_field.selectedIndex, a.preventDefault(), this.search_field_scale())) : void 0
        }, Chosen.prototype.single_set_selected_text = function(a) {
            return null == a && (a = this.default_text), a === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(a)
        }, Chosen.prototype.result_deselect = function(a) {
            var b;
            return b = this.results_data[a], this.form_field.options[b.options_index].disabled ? !1 : (b.selected = !1, this.form_field.options[b.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[b.options_index].value
            }), this.search_field_scale(), !0)
        }, Chosen.prototype.single_deselect_control_build = function() {
            return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
        }, Chosen.prototype.get_search_text = function() {
            return a("<div/>").text(a.trim(this.search_field.val())).html()
        }, Chosen.prototype.winnow_results_set_highlight = function() {
            var a, b;
            return b = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), a = b.length ? b.first() : this.search_results.find(".active-result").first(), null != a ? this.result_do_highlight(a) : void 0
        }, Chosen.prototype.no_results = function(b) {
            var c;
            return c = a('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), c.find("span").first().html(b), this.search_results.append(c), this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            })
        }, Chosen.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        }, Chosen.prototype.keydown_arrow = function() {
            var a;
            return this.results_showing && this.result_highlight ? (a = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(a) : void 0 : this.results_show()
        }, Chosen.prototype.keyup_arrow = function() {
            var a;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (a = this.result_highlight.prevAll("li.active-result"), a.length ? this.result_do_highlight(a.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
        }, Chosen.prototype.keydown_backstroke = function() {
            var a;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (a = this.search_container.siblings("li.search-choice").last(), a.length && !a.hasClass("search-choice-disabled") ? (this.pending_backstroke = a, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
        }, Chosen.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, Chosen.prototype.keydown_checker = function(a) {
            var b, c;
            switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), 8 !== b && this.pending_backstroke && this.clear_backstroke(), b) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(a), this.mouse_on_container = !1;
                    break;
                case 13:
                    this.results_showing && a.preventDefault();
                    break;
                case 32:
                    this.disable_search && a.preventDefault();
                    break;
                case 38:
                    a.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    a.preventDefault(), this.keydown_arrow()
            }
        }, Chosen.prototype.search_field_scale = function() {
            var b, c, d, e, f, g, h, i, j;
            if (this.is_multiple) {
                for (d = 0, h = 0, f = "position:absolute; left: -1000px; top: -1000px; display:none;", g = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], i = 0, j = g.length; j > i; i++) e = g[i], f += e + ":" + this.search_field.css(e) + ";";
                return b = a("<div />", {
                    style: f
                }), b.text(this.search_field.val()), a("body").append(b), h = b.width() + 25, b.remove(), c = this.container.outerWidth(), h > c - 10 && (h = c - 10), this.search_field.css({
                    width: h + "px"
                })
            }
        }, Chosen
    }(AbstractChosen)
}).call(this);


//*************COMMON JAVA SCRIPT BLOCK START***********************

//###################AUTO SIZE TEXT AREA BLOCK START#########################


var minRows = 1;
var maxRows = 100;

function ResizeTextarea(id) {
    var t = document.getElementById(id);
    if (t.scrollTop == 0) t.scrollTop = 1;
    while (t.scrollTop == 0) {
        if (t.rows > minRows)
            t.rows--;
        else
            break;
        t.scrollTop = 1;
        if (t.rows < maxRows)
            t.style.overflowY = "hidden";
        if (t.scrollTop > 0) {
            t.rows++;
            break;
        }
    }
    while (t.scrollTop > 0) {
        if (t.rows < maxRows) {
            t.rows++;
            if (t.scrollTop == 0) t.scrollTop = 1;
        } else {
            t.style.overflowY = "hidden";
            break;
        }
    }
}



function autoSize(obj) {
    try {
        //while (obj.rows > 1 && obj.scrollHeight < obj.offsetHeight) {
        //    obj.rows--;
        //    if (parseInt(obj.offsetHeight) <= 0) break;
        //}

        //while (obj.scrollHeight > obj.offsetHeight) {
        //    obj.rows++;
        //    if (parseInt(obj.offsetHeight) <= 0) break;
        //}
        // obj.style.height = 'auto';//setting the height as auto

        //obj.clientHeight = obj.scrollHeight;


        if (hasValue(obj) && $(obj).prop("tagName").toString().toLowerCase() == "textarea") {

            var previousHeight = obj.style.height;
            if (previousHeight == "")
                previousHeight = 0;
            else
                previousHeight = parseInt(previousHeight);

            obj.style.height = 'auto'; //setting the height as auto
            obj.style.height = obj.scrollHeight + 'px'; //setting the height of the text box as the scroll height



            setAttributesForFieldBasedOnValue($(obj));
            // obj.scrollIntoView();
            //obj.rows = Math.floor(obj.scrollHeight / 18);//18 since l line height is 18
            //obj.style.height = obj.scrollHeight + 'px';//setting the height of the text box as the scroll height
            autoSizeDocument(obj.scrollHeight - previousHeight);
        }


    } catch (ex) {}
}








//#########DATE DIFFERENCE BLOCK START ##############
//REF:http://ditio.net/2010/05/02/javascript-date-difference-calculation/
//*******PURPOSE: This method is used to give the date differences between two dates
//*******CREATED BY: George D
//*******CREATED DATE: 08/01/2014
//*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
var EHREasyFormsDateDiff = {

    inDaysWithTime: function(d1, d2) {
        d1 = new Date(d1);
        d2 = new Date(d2);
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        if (t2 > t1)
            return parseInt((t2 - t1) / (60 * 1000) + 0.5);
        else
            return -1 * parseInt((t1 - t2) / (60 * 1000) + 0.5);
    },

    inMins: function(d1, d2) {
        //var timeStart = new Date(d1).getTime();
        //var timeEnd = new Date(d2).getTime();
        //var hourDiff = timeEnd - timeStart; //in ms        
        //return (hourDiff / 60 / 1000) - 60 * Math.floor(hourDiff / 3600 / 1000);
        var minutes;
        var oToday = new Date(d1);
        var oDatePublished = new Date(d2);
        var nDiff = oToday.getTime() - oDatePublished.getTime();
        minutes = Math.floor(nDiff / 1000 / 60);
        // nDiff -= oResult.minutes * 1000 * 60;
        return minutes;
    },
    inHours: function(d1, d2) {
        var timeStart = new Date(d1).getTime();
        var timeEnd = new Date(d2).getTime();
        var hourDiff = timeEnd - timeStart; //in ms  
        return Math.floor(hourDiff / 3600 / 1000); //retutrns no.of hrs
    },

    inSeconds: function(d1, d2) {
        var timeStart = new Date(d1).getTime();
        var timeEnd = new Date(d2).getTime();
        var hourDiff = timeEnd - timeStart; //in ms
        return (hourDiff / 1000) - 60 * 60 * Math.floor(hourDiff / 3600 / 1000);;
    },
    inDays: function(d1, d2) {
        d1 = new Date((new Date(d1)).setHours(0, 0, 0, 0));
        d2 = new Date((new Date(d2)).setHours(0, 0, 0, 0));
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        if (t2 > t1)
            return parseInt((t2 - t1) / (24 * 3600 * 1000) + 0.5);
        else
            return -1 * parseInt((t1 - t2) / (24 * 3600 * 1000) + 0.5);
    },

    inWeeks: function(d1, d2) {

        d1 = new Date((new Date(d1)).setHours(0, 0, 0, 0));
        d2 = new Date((new Date(d2)).setHours(0, 0, 0, 0));

        var t2 = d2.getTime();
        var t1 = d1.getTime();

        if (t2 > t1)
            return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7) + 0.5);
        else
            return -1 * parseInt((t2 - t1) / (24 * 3600 * 1000 * 7) + 0.5);
    },

    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();

        return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
    },

    inYears: function(d1, d2) {
        return d2.getFullYear() - d1.getFullYear();
    }
}


var totalHeight = 0; //current total height of the document to maintain it

//this method is useful in setting the current laoded document min height  whenever the height of the document objects are changed
function autoSizeDocument(heightToAdd) {
   // return;

    // if (heightToAdd > 4) //since for every key up or down a diff of 4 is coming
    //     totalHeight = totalHeight + heightToAdd + 3; //- 3;//adding the 3 as future consumption
    // else if (heightToAdd <= 0)
    //     totalHeight = totalHeight + heightToAdd - 6 - 3; //- 3;//removing the -6 and -3 since while adding scroll diff is 21 but while removing it is 13 so we are removing manually 6 and 3 as future consulption value

    // document.body.style.minHeight = totalHeight + "px"; //setting the min height of the document
}


//this method is useful in setting the auto height of the document on load of the document
function autoSizeDocumentOnLoad() {

    return;
    // //getting all the elements outer html height 
    // $(document.body.children).each(function(i, e) {
    //     totalHeight += $(e).outerHeight();
    // });

    // var body = document.body,
    //     html = document.documentElement;

    // var bodyminheight = document.body.style.minHeight;

    // if (bodyminheight == "")
    //     bodyminheight = 0;
    // else
    //     bodyminheight = parseInt(bodyminheight);

    // //var height = Math.max(body.scrollHeight, body.offsetHeight,
    // //               html.clientHeight, html.scrollHeight, html.offsetHeight);


    // if (bodyminheight < totalHeight) {

    //     totalHeight = 1.25 * totalHeight;

    //     document.body.style.minHeight = totalHeight + "px";
    // }

}

function autoSizeElement(objectid) {

    var obj = document.getElementById(objectid);

    try {

        //while (obj.rows > 1 && obj.scrollHeight < obj.offsetHeight) {
        //    obj.rows--;
        //    if (parseInt(obj.offsetHeight) <= 0) break;
        //}

        //while (obj.scrollHeight > obj.offsetHeight) {
        //    obj.rows++;
        //    if (parseInt(obj.offsetHeight) <= 0) break;
        //}
        if (hasValue(obj) && $(obj).prop("tagName").toString().toLowerCase() == "textarea") {
            var previousHeight = obj.style.height;
            if (previousHeight == "")
                previousHeight = 0;
            else
                previousHeight = parseInt(previousHeight);


            obj.style.height = 'auto'; //setting the height as auto
            obj.style.height = obj.scrollHeight + 'px'; //setting the height of the text box as the scroll height
            //obj.rows = Math.floor(obj.scrollHeight / 18);//18 since l line height is 18

            setAttributesForFieldBasedOnValue($(obj));

            if (obj.scrollHeight - previousHeight > 0) {
                autoSizeDocument(obj.scrollHeight - previousHeight);
            }
        }
    } catch (ex) {}
}

//###################AUTO SIZE TEXT AREA BLOCK END#########################

// Function to check for user friendly keys  
//------------------------------------------
function jsIsUserFriendlyCharKeyUp(val, step) {
    // Backspace, Tab, Enter, Insert, and Delete  
    if (val == 8 || val == 9 || val == 13 || val == 45 || val == 46) {
        return true;
    }
    // Ctrl, Alt, CapsLock, Home, End, and Arrows  
    if ((val >= 16 && val < 21) || (val > 34 && val < 41)) {
        return true;
    }
    if (step == "Decimals") {
        if (val == 190 || val == 110) { //Check dot key code should be allowed
            return true;
        }
    }
    // The rest  
    return false;
}


//###################AUTO UNCHECK OF GROUP OF CHECKBOXES OR RADIO BUTTONS BLOCK START#########################





window.onload = function() {

    try {
           document.body.setAttribute("spellcheck", true);
    } catch (error) {
    }

    try {
       // var oWebViewInterface = window.nsWebViewInterface;

        window.alert = function(al, $) {
            return function(msg) {
                al.call(window, msg);
                $(window).trigger("ehrshowandroidalert", msg);
            };
        }(window.alert, window.jQuery);

        $(window).on("ehrshowandroidalert", function(event, argsMsg) {
            //oWebViewInterface.emit('showehrmobilealert', argsMsg);
            Android.showToast(argsMsg);
        });

        alert('web view loaded perfectlty');

    } catch (err) {

    }

    try {


        var elementColloction = document.getElementsByTagName("input");
        var elementsWithSameName = null;
        var elementName = null;
        if (elementColloction == null) return;

        for (var elementIndex = 0; elementIndex <= elementColloction.length - 1; elementIndex++) {
            try {
                if (elementColloction[elementIndex] == null) continue;
                if (elementColloction[elementIndex].name == null) continue;
                elementName = elementColloction[elementIndex].name;
                if (elementName.toString().length <= 0) continue;
                if (elementName == null) continue;
                elementsWithSameName = document.getElementsByName(elementName);
                if (elementsWithSameName == null || elementsWithSameName.length <= 1) continue;

                //placed jquery code as javascript onclick is overriding when user checked
                $(elementColloction[elementIndex]).on("click", function() {
                    DeselectAlltheCheckBoxORRadio(this);
                });

                //commented on 09/14/2015 and place jquery as javascript onclick is overriding when user checked
                // elementColloction[elementIndex].onclick = function () { DeselectAlltheCheckBoxORRadio(this); };
            } catch (ex) {

            }

            //return;
        }

        elementColloction = document.getElementsByTagName("textarea");
        for (var elementIndex = 0; elementIndex <= elementColloction.length - 1; elementIndex++) {
            try {
                if (elementColloction[elementIndex] == null) continue;

                elementColloction[elementIndex].onkeydown = function() {
                    autoSize(this);
                };
                elementColloction[elementIndex].onkeyup = function() {
                    autoSize(this);
                };
                elementColloction[elementIndex].onchange = function() {
                    autoSize(this);
                };
            } catch (ex) {}
            //return;
        }

        $("div[contenteditable='true']").on('DOMSubtreeModified', function() {
            $(this).css({
                "height": "auto"
            });
        });


        $("div[contenteditable='true']").on('DOMSubtreeModified', function() {
            $(this).css({
                "height": "auto"
            });
        });


        $('.emrdivcontentreadonly').keydown(function(event) {
            event.preventDefault();
        });


        // $("textarea").autoResize();




        //autoSizeDocumentOnLoad();

        AutoAddAttributesWhenDataExists();

        //removing the previous ddl options and their values
        $(".chosen-container,.multiselectdropdown").unbind();
        $(".chosen-container,.multiselectdropdown").empty();
        $(".chosen-container,.multiselectdropdown").remove();

        //initializing the chosen 3rd party control drop down list
        $("select[multiple='multiple'].chosenMultiSelect").chosen({});

        //initializing the bootstrap multi select drop down
        $("select[multiple='multiple'].bootStrapMultiSelect").multiselect({});

        if (hasValue(window.frameElement.id)) {
            //triggering the event to the parent to observe that the document loading completed
            parent.window.$("#" + window.frameElement.id).trigger("DocumentContentLoaded");
        }
        //$("img").on("load", function () {

        //    manipulateSignatureDateTime(this);
        //})
    } catch (ex) {
        // alert(ex.Message);
    }
};


//THIS METHOD IS USEFUL IN FORMATTING THE EMR TIME
function EasyFormSTimeFormatting(curObject) {

    var inputValue = curObject.value;

    var miutes = "",
        hours = "",
        dayzone = ""; //initializing variables

    //getting only time i.e, hh:mm format only
    inputValue = inputValue.replace(/[^0-9:]/g, "");

    //splitting the hours and mins
    var dateParts = inputValue.split(':'); //spliting with '/' to get month,date and year seperately


    var inputValueDayzone = curObject.value;

    //getting the dayzone format value i.e, AM/PM
    inputValueDayzone = inputValueDayzone.replace(/[^ aApPmM]/g, "");

    var dayZoneParts = inputValueDayzone.split(" ");

    //checking for existence if exists then assigning it
    if (dayZoneParts.length > 1)
        dayzone = dayZoneParts[1];

    //when dayzone exists with altleast one char then assigning it's appropriate form
    if (dayzone.length > 0) {
        if (dayzone.length == 1) {
            if (dayzone.toLowerCase() == "p")
                dayzone = " PM";
            else if (dayzone.toLowerCase() == "a")
                dayzone = " AM";
        } else {
            if (dayzone.toLowerCase().indexOf("pm") >= 0)
                dayzone = " PM";
            else if (dayzone.toLowerCase().indexOf("am") >= 0)
                dayzone = " AM";
        }
    }

    //getting hours part and do the manipulations
    if (dateParts.length > 0) {

        //checking for 24 hrs format hours
        if (parseInt(dateParts[0]) > 23) {

            hours = dateParts[0].substring(0, 1);
            hours = "0" + hours;

            miutes = dateParts[0].substring(1, dateParts[0].length - 1);
            if (parseInt(miutes) > 59)
                miutes = miutes.substring(0, 1);

            else {
                if (miutes.length == 1) {
                    miutes = "0" + miutes;
                }
            }
        } else {
            hours = dateParts[0];

            if (!isNaN(parseInt(hours)) && parseInt(miutes) > 2)
                hours = parseInt(hours) + "";

            if (dateParts.length > 1 && hours.length == 1) {
                hours = "0" + hours;
            } else if (hours.length == 1 && parseInt(hours) > 2) {
                hours = "0" + hours;
            }

        }
    }

    //getting minutes part and do the manipulations
    if (dateParts.length > 1) {
        if (parseInt(dateParts[1]) > 59) {
            miutes = dateParts[1].substring(0, 1);
            miutes = "0" + miutes;
        } else {
            miutes = dateParts[1];

            if (!isNaN(parseInt(miutes)) && parseInt(miutes) > 5)
                miutes = parseInt(miutes) + "";

            if (dateParts.length > 2 && miutes.length == 1) {
                miutes = "0" + miutes;
            } else if (miutes.length == 1 && parseInt(miutes) > 5) {
                miutes = "0" + miutes;
            }
        }
    }

    if (dateParts.length == 2 && miutes.length > 1 && dayzone.length <= 0) {

        if (parseInt(hours) > 12) {

            hours = parseInt(hours) - 12;

            hours = hours + "";

            if (hours.length == 1) {
                hours = "0" + hours;
            }
            dayzone = " PM";
        } else if (parseInt(hours) < 12 && parseInt(hours) >= 0) {
            //7-12 am
            //1-6 pm
            if (parseInt(hours) > 6) {
                dayzone = " AM";
            } else if (parseInt(hours) <= 6 && parseInt(hours) > 0) {
                dayzone = " PM";
            } else if (parseInt(hours) == 0) {
                hours = "12";
                dayzone = " AM";
            }
        } else if (parseInt(hours) == 12) {

            hours = hours + "";

            if (hours.length == 1) {
                hours = "0" + hours;
            }
            dayzone = " PM";
        }
    }

    var transformedInput = "";

    //getting month
    if (hours.length > 0) {
        transformedInput = hours;
    }

    //appending ':' after hours
    if (hours.length == 2 || dateParts.length > 1)
        transformedInput += ":";

    if (miutes.length > 0) {

        transformedInput += miutes;

        if (dayzone.length > 0) {
            if (dayzone.indexOf(" ") < 0)
                dayzone = " " + dayzone;

            transformedInput += dayzone;
        }
    }

    curObject.value = transformedInput;
}



//this function is useful in initializing the third party controls
function EasyFormsInitializeThirdPartyComponents() {


}

function InitializeDataTypesValidations() {


    //************ DATA TYPES IN EHR START ****************

    //DATE: 0,
    //TIME: 1,
    //DATETIME: 2,
    //STRING: 3,
    //ALPHABET: 4,
    //INTEGER: 5,
    //BOOLEAN: 6,
    //IMAGE: 7,
    //PHONENUMBER: 8,
    //SSN: 9
    //DECIMAL:10  (12.00)




    //$("[datatype='4']").mask("AAAAAA");//string data type
    //$("[datatype='6']").mask("9999999");//boolean type
    //$("[datatype='7']").mask("9999999");//image type

    //************ DATA TYPES IN EHR END ****************


    $("[datatype='0']").mask("99/99/9999"); //DATE MASK
    //$("[datatype='1']").mask("99:99 aa");//TIME MASK
    $("[datatype='2']").mask("99/99/9999 99:99 aa"); //DATE TIME MASK
    //$("[datatype='5']").mask("9999999");//INT MASK

    //time format
    $("[datatype='1']").on('keyup.ehrbindedwhileloading', function(e) {

        //checking for the Time format
        //12:30 am format
        var regexTime = /(?:^$)|(?:^([0-9]|0[1-9]|1[0-9]|2[0-4])(:|\.)[0-5][0-9]$)|(?:^([1-9]|0[1-9]|1[0-2])(:|\.)[0-5][0-9] (A|a|P|p)(M|m)$)/;

        //storing the current value
        var inputValue = this.value;

        //checking for the time related user friendly chars
        if (jsIsUserFriendlyCharKeyUp(event.keyCode)) {
            //allowing backspace and delete keys
            return true;
        }

        //when there exists data in field then checking for the valid format
        if (hasValue(inputValue)) {
            if (regexTime.test(inputValue)) {

                //splitting for checking the zone parts in the time i.e AM/PM
                var dayZoneParts = inputValue.split(" ");

                //when there is data exists continue execution
                if (dayZoneParts.length <= 1) {

                }
                //when no am/pm exists then return false that is it may be wrong key
                else
                    return false;
            }

            //when there exists data with required length of time format then testing for valid format and assigning since already valid time exists in 1st 8 chars then no need of going for allowing or not
            if (this.value.length >= 8) {
                if (regexTime.test(this.value.substring(0, 8))) {
                    //trimming the last extra characters and assigning the valid data only
                    this.value = this.value.substring(0, 8);
                    return false;
                }
            }
        }

        //if above all cases not passed then going to form the required time format while typing in the c ontrols
        var reslut = EasyFormSTimeFormatting(this);
        if (reslut == undefined) return true;
        else return reslut;

    });

    //time format
    $("[datatype='1']").on('blur.ehrbindedwhileloading', function(e) {

        //12:30 am format
        var regexTime = /(?:^$)|(?:^([0-9]|0[1-9]|1[0-9]|2[0-4])(:|\.)[0-5][0-9]$)|(?:^([1-9]|0[1-9]|1[0-2])(:|\.)[0-5][0-9] (A|a|P|p)(M|m)$)/;

        //while leaving the field checking for the time formatting
        EasyFormSTimeFormatting(this);

        var inputValue = this.value;

        //checking for the DATA validations and applying the respected styles
        if (hasValue(inputValue)) {
            if (!regexTime.test(inputValue)) {
                applyInvalidDataFoundStyle(this, EHRInvalidDataFound.INVALIDADATA);
            } else {
                applyInvalidDataFoundStyle(this, EHRInvalidDataFound.VALIDDATA);
            }
        } else
            applyInvalidDataFoundStyle(this, EHRInvalidDataFound.VALIDDATA);

    });
}


function DeselectAlltheCheckBoxORRadio(obj) {
    try {
        if (obj == null) return;
        var elementColloction = document.getElementsByName(obj.name);
        if (elementColloction == null) return;

        for (var elementIndex = 0; elementIndex <= elementColloction.length - 1; elementIndex++) {
            if (elementColloction[elementIndex].id == obj.id) continue;
            elementColloction[elementIndex].checked = false;
            setAttributesForFieldBasedOnValue($(elementColloction[elementIndex])); //calling to set the data availaible in table
        }
    } catch (ex) {}
}


//this method is useful in changing the label color when checked and reverting the color of the labels with same name of the checkboxes
function ChangeColorofLabelWhenCheckedCheckBox(chkboxid) {

    var obj = document.getElementById(chkboxid);

    try {

        if (obj.checked == true) {

            if (obj == null) return;
            var elementColloction = document.getElementsByName(obj.name);
            if (elementColloction == null) return;

            for (var elementIndex = 0; elementIndex <= elementColloction.length - 1; elementIndex++) {
                if (elementColloction[elementIndex].id == obj.id)
                    $("[for='" + elementColloction[elementIndex].id + "']").css("color", "red");
                else
                    $("[for='" + elementColloction[elementIndex].id + "']").css("color", "black");
            }
        } else {
            $("[for='" + obj.id + "']").css("color", "black");
        }

    } catch (e) {

    }
}

//###################AUTO UNCHECK OF GROUP OF CHECKBOXES OR RADIO BUTTONS BLOCK END#########################

function SetFocusOnSpecificField(checkedObject, focus) {
    try {
        if (!checkedObject.checked) {
            document.getElementById(focus).focus();
        }
    } catch (ex) {}
}


//calculating total counts for textboxes
function getTotalCount(currentControl, targetControlID) {

    var groupName = currentControl.getAttribute("groupname");
    var totalCount = 0;

    if (groupName == undefined || groupName == null) return 0;


    var dom = document.getElementsByTagName("input");

    for (var eleIndex = 0; eleIndex <= dom.length - 1; eleIndex++) {

        if ((typeof dom[eleIndex]) === "object") {

            if (dom[eleIndex].getAttribute("groupname") === groupName) {
                if (dom[eleIndex].value.replace(/[A-Za-z$-]/g, "").length > 0) {
                    totalCount = totalCount + parseInt(dom[eleIndex].value.replace(/[A-Za-z$-]/g, ""))
                }

            }

        }
    }

    if (parseInt(totalCount) <= 0) {
        document.getElementById('' + targetControlID + '').value = "";
    } else {
        document.getElementById('' + targetControlID + '').value = totalCount;
    }

};

//calculating total counts for checkboxes
function getTotalCount_CheckBox(currentControl, targetControlID) {

    var groupName = currentControl.getAttribute("groupname");
    var totalCount = 0;

    if (groupName == undefined || groupName == null) return 0;


    var dom = document.getElementsByTagName("input");

    for (var eleIndex = 0; eleIndex <= dom.length - 1; eleIndex++) {

        if ((typeof dom[eleIndex]) === "object") {
            if (dom[eleIndex].type.toLowerCase() != "checkbox") continue;

            if (dom[eleIndex].getAttribute("groupname") === groupName && dom[eleIndex].checked && currentControl.name != dom[eleIndex].name) {
                if (dom[eleIndex].value.replace(/[A-Za-z$-]/g, "").length > 0) {
                    totalCount = totalCount + parseInt(dom[eleIndex].value.replace(/[A-Za-z$-]/g, ""))
                }

            }

        }
    }

    if (!currentControl.checked)
        totalCount = totalCount + parseInt(currentControl.value.replace(/[A-Za-z$-]/g, ""))

    document.getElementById('' + targetControlID + '').value = totalCount;

};


//allowing only numerics
function isNumeric(e) {
    var evt = (e) ? e : window.event;
    var key = (evt.keyCode) ? evt.keyCode : evt.which;
    if (key != null) {
        key = parseInt(key, 10);
        if ((key < 48 || key > 57) && (key < 96 || key > 105)) {
            if (!jsIsUserFriendlyChar(key, "Numbers")) {
                return false;
            }
        } else {
            if (evt.shiftKey) {
                return false;
            }
        }
    }
    return true;
}

// Function to check for user friendly keys
//------------------------------------------
function jsIsUserFriendlyChar(val, step) {
    // Backspace, Tab, Enter, Insert, and Delete
    if (val == 8 || val == 9 || val == 13 || val == 45 || val == 46) {
        return true;
    }
    // Ctrl, Alt, CapsLock, Home, End, and Arrows
    if ((val > 16 && val < 21) || (val > 34 && val < 41)) {
        return true;
    }
    if (step == "Decimals") {
        if (val == 190 || val == 110) { //Check dot key code should be allowed
            return true;
        }
    }
    // The rest
    return false;
}

//*************COMMON JAVA SCRIPT BLOCK END***********************


//allowing only numerics
function isNANumeric(e) {
    var evt = (e) ? e : window.event;
    var key = (evt.keyCode) ? evt.keyCode : evt.which;

    if (e.currentTarget.value != null && e.currentTarget.value != "" && e.currentTarget.value != undefined && !jsIsUserFriendlyChar(key, "Numbers")) {
        if (e.currentTarget.value.toLowerCase().indexOf("na") >= 0 || e.currentTarget.value.toLowerCase().indexOf("n") >= 0) {
            e.currentTarget.value = "NA";
            return false;
        }

    }


    if (key != null) {
        key = parseInt(key, 10);


        if ((key < 48 || key > 57) && (key < 96 || key > 105)) {



            if (key == 65 || key == 78) {

                return true;
            } else if (!jsIsUserFriendlyChar(key, "Numbers")) {
                return false;
            }
        } else {
            if (evt.shiftKey) {
                return false;
            }
        }
    }
    return true;
}


//this method is useful in creating the auto complete text area with the given input object id and data for the input object
function IntializeAutoCompleteTextArea(objectId, dataForObject) {

    if (objectId == null || objectId == "" || objectId == undefined) return;
    if (dataForObject == null || dataForObject == "" || dataForObject == undefined) return;

    //example:
    //objectId = "taNormal"
    //dataForObject = [{field: "test",value:"testing value"},{field: "test1",value:"testing1 value"}];

    dataForObject.sortByKey('field'); //calling to sort the array by ascending order in json array by alphabetical order

    $('#' + objectId).textcomplete([{ // emoji strategy
        data: dataForObject,
        objectid: objectId,
        //match: /(\w+)$/,
        //match: /\B.([\-+\w\s]*)$/i,//init PREVIOUS
        //match: /\B[.][\S]([\-+\w\s]*)$/i,
        //match: /\B.[\S)]([\-+\w\s]*)$/,
        //match: /\B[^.][^\S?]([\-+\w\S]*)$/i,
        //match: /\B[.](\ ?)([\-+\w\s]*)$/i,
        //match: /\B[.](\S?)([\-+\w\s]*)$/i,//working
        match: /\B[.](\S?)([\-+\w\s\W]*)$/i, //added support of special characters also

        search: function(term, callback) {
            //debugger;
            if (!hasValue($.trim(term))) callback([]);

            else {
                var testList = $.map(this.data, function(item) {
                    return item.field.toLowerCase().indexOf(term.toLowerCase()) === 0 ? item.field : null;
                });
                callback(testList);
            }

        },

        replace: function(value, event, pre, post) {

            try {
                var needtoreplace = $.grep(this.data, function(item) {
                    return item.field === value ? item : null;
                });
                if (needtoreplace != null && needtoreplace != undefined && needtoreplace.length > 0) {
                    if (needtoreplace[0].isstartwithnewline) {

                        if (document.getElementById(this.objectid).value != null && document.getElementById(this.objectid).value != undefined && document.getElementById(this.objectid).value != "") {

                            if (pre == undefined || pre == null) {
                                return needtoreplace[0].value; //not adding the new line if the description replacing is the 1st one in the text area
                            } else if (pre.length > 0 && pre.length < 3 && pre.indexOf(".") == 0) {
                                return needtoreplace[0].value; //not adding the new line if the description replacing is the 1st one in the text area
                            } else {
                                return "\n" + needtoreplace[0].value; //append new line before it
                            }
                        } else
                            return "\n" + needtoreplace[0].value; //append new line before it
                    } else {
                        return needtoreplace[0].value;
                    }
                } else
                    return "." + value;
            } catch (e) {
                //alert(e.message);
            }
        },


        //            template: function (value) {
        //                return '<img src="media/images/emoji/' + value + '.png"></img>' + value;
        //            },
        //replace: function (value, event, pre, post) {

        //    var needtoreplace = $.grep(this.data, function (item) {
        //        return item.field.toLowerCase() === value.toLowerCase() ? item : null;
        //    });

        //    if (needtoreplace != null && needtoreplace != undefined && needtoreplace.length > 0) {
        //        if (needtoreplace[0].isstartwithnewline) {
        //            if (document.getElementById(this.objectid).value != null && document.getElementById(this.objectid).value != undefined && document.getElementById(this.objectid).value != "" && pre.length > 0 && pre.length < 3 && pre.indexOf(".") == 0)
        //                return needtoreplace[0].value;//not adding the new line if the description replacing is the 1st one in the text area
        //            else
        //                return "\n" + needtoreplace[0].value;// + " ";//append new line before it
        //        }
        //        else {
        //            return needtoreplace[0].value;// + " ";
        //        }
        //    }

        //    else
        //        return "." + value;
        //},
        index: 1
    }], {
        onKeydown: function(e, commands) {
            if (e.ctrlKey && e.keyCode === 74) { // CTRL-J
                return commands.KEY_ENTER;
            }
        }
    });
}



/* =========== ARRAY SORTING BLOCK START ============== */
//*******PURPOSE: THIS METHOD IS USED TO ASSIGN ENUMERATOR FOR EACH MODULE WHICH IS USED TO ADD/EDIT/DELETE/ GET COMMONLY USED DELETE REASONS LIST BASED ON POP UP USED
//*******CREATED BY: MAHESH P
//*******CREATED DATE: 08/26/2015
//*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//this method is useful in sorting the json array with the given input key and direction
//default sort order is ascending
//if direction is sent except false,0 then it is descending order sorting
//ex : people.sortByKey('name', 1);// desc otherwise, default - 0/ asc
Array.prototype.sortByKey = function(key, dir) {
    if (this.length > 0) {
        if (dir) {
            this.sort(function(a, b) {
                var x = a[key];
                var y = b[key];
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
            });
        } else {
            this.sort(function(a, b) {
                var x = a[key];
                var y = b[key];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }
    }
};

/* =========== ARRAY SORTING BLOCK END ============== */



//######### VALIDATING VARIABLE HAS VALUE OR NOT BLOCK START ##############
//*******PURPOSE: This method is used to validating the given variable has valur or not
//*******CREATED BY: George D
//*******CREATED DATE: 07/07/2014
//*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function hasValue(inputValue) {

    if (inputValue != undefined && inputValue != null && inputValue != "null" && inputValue != "undefined" && inputValue.toString().length > 0)
        return true
    else return false;

}
//######### VALIDATING VARIABLE HAS VALUE OR NOT BLOCK END ##############


//this method is useful in Re initializing the Auto Complete With the New Data IF no text complete previously exists then initializing the new one for it
function ReInitializeAutoCompleteText(objectId, dataForObject) {

    if (hasValue($("#" + objectId).data("textComplete"))) {

        if (dataForObject.length > 0) {
            dataForObject.sortByKey('field'); //calling to sort the array by ascending order in json array by alphabetical order
            $("#" + objectId).data("textComplete").strategies[0].data = dataForObject; //reassigning fresh data

        } else
            $("#" + objectId).data("textComplete").destroy(); //destroying the object if no data exists
    } else {
        IntializeAutoCompleteTextArea(objectId, dataForObject); //calling to create text complete if previously object not found
    }
}




//this method is useful in adding the events to the elements for auto adding the attributes to the elements in the document
function AutoAddAttributesWhenDataExists() {
    var elementscommonlytofind1 = "[type='checkbox'],select";
    var elementscommonlytofind2 = "[type='text'],textarea";
    var elementscommonlytofind3 = "img";


    //$(document).find("*").on('DOMAttrModified DOMAttributeNameChanged DOMCharacterDataModified DOMElementNameChanged DOMNodeInserted DOMNodeInsertedIntoDocument DOMNodeRemoved DOMNodeRemovedFromDocument DOMSubtreeModified', function (event) {

    //    console.log(event);

    //});


    //attaching the laod event to the image field since, change event can't be fired for an image so load event can be fired when a new image is changed
    $(document).find(elementscommonlytofind3).on('load', function(event) {

        var fieldTarget = event.currentTarget || event.target;

        setAttributesForFieldBasedOnValue($(fieldTarget));

    });

    //attaching the events to elements
    $(document).find(elementscommonlytofind2).on('input propertychange blur', function(event) {

        var fieldTarget = event.currentTarget || event.target;

        setAttributesForFieldBasedOnValue($(fieldTarget));

    });

    //attaching the events to elements
    $(document).find(elementscommonlytofind1).on('change input click', function(event) {

        var fieldTarget = event.currentTarget || event.target;

        setAttributesForFieldBasedOnValue($(fieldTarget));

    });

}


//this method is useful in checking whether data exists or not in the current field
function CheckValueExistsOrNotInField(field) {


    var valueexits = false; //defaults not exists

    if (hasValue(field)) {

        //switch on tag name of the element
        switch (field.tagName.toLowerCase()) {

            //case input tag field
            case 'input':
                if (field) {

                    //switch on type of the input element
                    switch (field.type.toLowerCase()) {
                        //when check box returning its value
                        case 'checkbox':
                            valueexits = field.checked;
                            break;
                            //when text box returning by it's length
                        case 'text':
                            if ($.trim(field.value.length) > 0)
                                valueexits = true;
                            break;
                        default:
                            break;
                    }

                }
                break;
                //when select ddl returning by it's selected item value length
            case 'select':
                if ($.trim(field.value.length) > 0)
                    valueexits = true;
                break;
                //when text box returning by it's length
            case 'textarea':
                if ($.trim(field.value).length > 0)
                    valueexits = true;
                break;
                //image tag verifying if not the default field value then setting that the value exists
            case 'img':
                if ($.trim(field.src).length > 0 && field.src.indexOf("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCA") < 0)
                    valueexits = true;
                break;
            case 'div':
                if ($.trim(field.innerText).length > 0)
                    valueexits = true;
                break;
            default:
                break;
        }
    }
    return valueexits; //returning the value exists or not
}





//this method is useful in setting the attribute to set that there is data availaible in the current field existing table
//for multiple fields in the current document
//example using : setAttributesForFieldBasedOnValueWithIDs("chkfield1~txtField2~taTextField");
function setAttributesForFieldBasedOnValueWithIDs(fieldsIds) {

    if (!hasValue(fieldsIds) || fieldsIds.length <= 0) return;

    fieldsIds = $.trim(fieldsIds); //trimming the id's

    if (fieldsIds.length <= 0) return;

    var splittedFieldIds = fieldsIds.split("~"); //spllitting the items

    for (var indexInFileds = 0; indexInFileds < splittedFieldIds.length; indexInFileds++) {

        if (hasValue($.trim(splittedFieldIds[indexInFileds]))) {

            if ($("#" + $.trim(splittedFieldIds[indexInFileds])).length > 0) {
                //calling to set the notes formation fields Ids
                setAttributesForFieldBasedOnValue($("#" + $.trim(splittedFieldIds[indexInFileds])));
            }

        }

    }

}


//this method is useful in setting the attribute to set that there is data availaible in the current field existing table
function setAttributesForFieldBasedOnValue(field) {

    if (hasValue(field)) field = field[0];

    var currentElement, count = 0,
        currentElementCollection = [];
    var elementscommonlytofind = "input,select,textarea,img,div";

    if (field) {

        // checking if value exists in field or not then do the following
        if (CheckValueExistsOrNotInField(field)) {

            //finding current parent td's
            currentElement = $(field).parents("td");
            currentElement.attr("emrremoveelementbecausedatanotavailable", "0"); //not rermove case

            //finding current tr
            currentElement = $($(field).parents("tr"));
            currentElement.attr("emrremoveelementbecausedatanotavailable", "0"); //not rermove case

            //finding current table
            currentElement = $($(field).parents("table"));
            currentElement.attr("emrremoveelementbecausedatanotavailable", "0"); //not rermove case

        } else {

            $(field).attr("emrremoveelementbecausedatanotavailable", "1"); //rermove case

            //finding current parent td's
            currentElement = $(field).parents("td");
            currentElementCollection = currentElement.find(elementscommonlytofind); //getting the elements collection need to check in the td
            for (var elementIndex = 0; elementIndex < currentElementCollection.length; elementIndex++) {
                if (CheckValueExistsOrNotInField(currentElementCollection[elementIndex])) {
                    count++;
                    break; //stopping the loop if any field has value
                }
            }
            if (count == 0) currentElement.attr("emrremoveelementbecausedatanotavailable", "1"); //rermove case
            else currentElement.attr("emrremoveelementbecausedatanotavailable", "0"); //not rermove case


            //finding parent tr rows linked to the current field item
            currentElement = $($(field).parents("tr"));
            //finding the td columns with attributes with value '0', i.e, means data exists in the columns
            count = $($(field).parents("tr").find("td[emrremoveelementbecausedatanotavailable = '0']")).length; //reassinging the new count for satisfied columns

            //if rows which has data length is greater than zero than setting the table with data exists
            if (count == 0) currentElement.attr("emrremoveelementbecausedatanotavailable", "1"); // rermove case
            else currentElement.attr("emrremoveelementbecausedatanotavailable", "0"); //not rermove case



            ////finding parent tr's linked to the current rows
            //count = 0; currentElement = $($(field).parents("tr"));
            //currentElementCollection = currentElement.find(elementscommonlytofind);//getting the elements collection need to check in the tr
            //for (var elementIndex = 0; elementIndex < currentElementCollection.length; elementIndex++) {
            //    if (CheckValueExistsOrNotInField(currentElementCollection[elementIndex])) {
            //        count++;
            //        break; //stopping the loop if any field has value
            //    }
            //}
            ////if any value exists in the current row
            //if (count == 0) currentElement.attr("emrremoveelementbecausedatanotavailable", "1"); //rermove case
            //else currentElement.attr("emrremoveelementbecausedatanotavailable", "0"); //not rermove case


            //finding parent tables linked to the current field item
            currentElement = $($(field).parents("table"));
            //finding the tr rows with attributes with value '0', i.e, means data exists in the rows
            count = $($(field).parents("table").find("tr[emrremoveelementbecausedatanotavailable = '0']")).length;

            //if rows which has data length is greater than zero than setting the table with data exists
            if (count == 0) currentElement.attr("emrremoveelementbecausedatanotavailable", "1"); // rermove case
            else currentElement.attr("emrremoveelementbecausedatanotavailable", "0"); //not rermove case

        }
    }
}


//this method is useful in checking the remove data availiable attribute exists for current element or not
function checkForRemoveDataNotAvailaibleAttributeExistence(element) {

    return true;

    // if (!hasValue(element) || element.length == 0) return false;

    // if (element[0].hasAttribute("removeifdatanotavailable") && $(element).attr("removeifdatanotavailable") == "1")
    //     return true;
    // else
    //     return false;
}



//***************************************************************************************************************************************//
//********************************************* MANDATORY VALIDATIONS FOR EACH ELEMENT BLOCK START **************************************//
//***************************************************************************************************************************************//
//ADDED BY : V.UDAY KIRAN ON 09/11/2015  -- (GUDIDED BY : BALAKRISHNA. D) (CODE REVIEWED BY MAHESH.P)
//This function verifies for Custom Attribute "EMRMandatoryElement" Elements and check whether value was entered or not for those elements.
//Also validation message will be given as Custom Attribute Value.
// Eg: <input type="text" id="txtRacePage1" EMRMandatoryElement="Please Enter Race" datatype="4" displayname="Race Page1" name="txtRacePage1" >
// Commented as we are using new method
//function PerformMandatoryValidationsOnElements11() {
//    //declaring variables
//    var MandatoryMessage;
//    var returnValue = false;
//    var focusElementId;
//    //getting all elements having Mandatory attribute
//    var elementCollection = $("[EMRMandatoryElement]").get();

//    //loop through each element and check whether data was present or not
//    for (var elementIndex = 0; elementIndex < elementCollection.length; elementIndex++) {
//        //calling function to check whether value was entered or not for element
//        if (!CheckValueExistsOrNotInField(elementCollection[elementIndex])) {
//            //getting validation message
//            MandatoryMessage = elementCollection[elementIndex].getAttribute("EMRMandatoryElement");
//            if (hasValue(MandatoryMessage) && MandatoryMessage.length > 0) {
//                returnValue = true;
//                focusElementId = elementCollection[elementIndex].id;
//                break; //stopping the loop if any field has no value
//            }
//        }
//    }
//    //validating mandatory message and raising alert
//    if (hasValue(MandatoryMessage) && MandatoryMessage.length > 0) {
//        alert(MandatoryMessage);
//        document.getElementById(focusElementId).focus(); //to set focus

//        //document.getElementById(focusElementId).style.backgroundColor = "yellow"
//    }

//    //if all mandatory fields were entered then calling custom script if exists
//    if (!returnValue) {
//        if (typeof PerformFormMandatoryValidations == "function") {
//            returnValue = PerformFormMandatoryValidations();
//        }
//    }

//    return returnValue;
//}








//*************************************************************************************************************************************//
//********************************************* MANDATORY VALIDATIONS FOR EACH ELEMENT END ********************************************//
//*************************************************************************************************************************************//



//***************************************************************************************************************************************//
//********************************************* GET CHECKBOX COUNT ALONG WITH LABEL LATEST BLOCK START **************************************//
//***************************************************************************************************************************************//
//ADDED BY : V.UDAY KIRAN ON 09/14/2015  -- (GUDIDED BY : BALAKRISHNA. D) (CODE REVIEWED BY MAHESH.P)

//calculating total counts for checkboxes
function getTotalCount_CheckBoxLatest(currentControl, targetControlID) {
    //getting group name
    var groupName = currentControl.getAttribute("groupname");
    var totalCount = 0;

    //validating group name
    if (groupName == undefined || groupName == null) return 0;

    //getting input elements to get check box elements
    var dom = document.getElementsByTagName("input");

    //loop through each element
    for (var eleIndex = 0; eleIndex <= dom.length - 1; eleIndex++) {

        //validating element
        if ((typeof dom[eleIndex]) === "object") {
            if (dom[eleIndex].type.toLowerCase() != "checkbox") continue; //continue loop if element is not check box

            if (dom[eleIndex].getAttribute("groupname") === groupName && dom[eleIndex].checked && currentControl.name != dom[eleIndex].name) {
                if (dom[eleIndex].value.replace(/[A-Za-z$-]/g, "").length > 0) {
                    totalCount = totalCount + parseInt(dom[eleIndex].value.replace(/[A-Za-z$-]/g, ""))
                }
            }
        }
    }

    if (currentControl.checked)
        totalCount = totalCount + parseInt(currentControl.value.replace(/[A-Za-z$-]/g, ""))

    //setting total count to target element
    document.getElementById('' + targetControlID + '').value = totalCount;

    // getting target group name
    var targetgroupname = document.getElementById('' + targetControlID + '').getAttribute("groupname");

    var targetElement = document.getElementById('' + targetControlID + '')



    //validating target group name
    if (hasValue(targetgroupname)) {

        //if target element is textarea then calling textarea count update
        if (hasValue(targetElement) && targetElement.type.toLowerCase() === "textarea") {
            getTotalCount_TextArea(document.getElementById('' + targetControlID + ''), targetgroupname);
        }

        //if target element is textarea then calling textbox count update
        else if (hasValue(targetElement) && targetElement.type.toLowerCase() === "text") {
            getTotalCount_TextBox(document.getElementById('' + targetControlID + ''), targetgroupname);
        }
    }
};

//***************************************************************************************************************************************//
//********************************************* GET CHECKBOX COUNT ALONG WITH LABEL LATEST BLOCK END **************************************//
//***************************************************************************************************************************************//


//***************************************************************************************************************************************//
//********************************************* GET TEXTBOX  COUNT ALONG WITH LABEL LATEST BLOCK START **************************************//
//***************************************************************************************************************************************//
//ADDED BY : V.UDAY KIRAN ON 09/14/2015  -- (GUDIDED BY : BALAKRISHNA. D) (CODE REVIEWED BY MAHESH.P)

//calculating total counts for textbox
function getTotalCount_TextBox(currentControl, targetControlID) {

    //getting group name
    var groupName = currentControl.getAttribute("groupname");
    var totalCount = 0;

    //validating group name
    if (groupName == undefined || groupName == null) return 0;

    //for text box
    var dom = document.getElementsByTagName("input");

    //looping for each element
    for (var eleIndex = 0; eleIndex <= dom.length - 1; eleIndex++) {

        if ((typeof dom[eleIndex]) === "object") {
            if (dom[eleIndex].type.toLowerCase() != "text") continue; //continue loop if element is not check box

            if (dom[eleIndex].getAttribute("groupname") === groupName) {
                if (dom[eleIndex].value.replace(/[A-Za-z$-]/g, "").length > 0) {
                    totalCount = totalCount + parseInt(dom[eleIndex].value.replace(/[A-Za-z$-]/g, ""))
                }
            }
        }
    }

    //getting total count
    if (parseInt(totalCount) <= 0) {
        document.getElementById('' + targetControlID + '').value = "";
    } else {
        document.getElementById('' + targetControlID + '').value = totalCount;
    }
};

//***************************************************************************************************************************************//
//********************************************* GET TEXTBOX AND TEXXTAREAS COUNT ALONG WITH LABEL LATEST BLOCK END **************************************//
//***************************************************************************************************************************************//

//***************************************************************************************************************************************//
//********************************************* GET TEXTAREA  COUNT ALONG WITH LABEL LATEST BLOCK START **************************************//
//***************************************************************************************************************************************//
function getTotalCount_TextArea(currentControl, targetControlID) {

    var groupName = currentControl.getAttribute("groupname");
    var totalCount = 0;

    if (groupName == undefined || groupName == null) return 0;

    //for text area
    var dom = document.getElementsByTagName("textarea");

    //loop each element and get count
    for (var eleIndex = 0; eleIndex <= dom.length - 1; eleIndex++) {

        if ((typeof dom[eleIndex]) === "object") {

            if (dom[eleIndex].getAttribute("groupname") === groupName) {
                if (dom[eleIndex].value.replace(/[A-Za-z$-]/g, "").length > 0) {
                    totalCount = totalCount + parseInt(dom[eleIndex].value.replace(/[A-Za-z$-]/g, ""))
                }
            }
        }
    }

    //getting total count
    if (parseInt(totalCount) <= 0) {
        document.getElementById('' + targetControlID + '').value = "";
    } else {
        document.getElementById('' + targetControlID + '').value = totalCount;
    }
};
//***************************************************************************************************************************************//
//********************************************* GET TEXTAREA  COUNT ALONG WITH LABEL LATEST BLOCK END **************************************//
//***************************************************************************************************************************************//


//this method is used to set focus on specified field. placed latest method because in previous method we have written code based on onmouseup events.
//onmouseup events are not supporting for checkbox associated labels. So need to call latest method in onclick event. For old easy forms call Old method on onmouseup
function SetFocusOnSpecificField_Latest(checkedObject, focus) {
    try {
        if (checkedObject.checked) {
            document.getElementById(focus).focus();
        }
    } catch (ex) {}
}


//************************************************************************************************************************************************//
//********************************************* CHECK UNCHECK GROUP OF CHECK BOXES ON LABEL CLICK BLOCK START **************************************//
//************************************************************************************************************************************************//
//ADDED BY : V.UDAY KIRAN ON 09/15/2015

//this function is used check or uncheck all checkboxes related to a group.
//here we call this function on onclick of label. Also we have to place same groupName for all related checkboxes
function ToggleAllRelatedCheckBoxesOnLabelClick(groupElement) {

    var isAllCheckBoxesNotChecked; //to check whether all checkboxes were checked or not

    var checkboxes = $("[" + groupElement + "]").get(); //getting all checkbox elements having same group name

    if (!hasValue(checkboxes) && checkboxes.length <= 0) {
        return;
    }

    //loop through element and check whether any check box in that group was not checked
    for (var eleIndex = 0; eleIndex <= checkboxes.length - 1; eleIndex++) {

        //if any of the check box was not selected then we consider as select all
        if (checkboxes[eleIndex].checked == false) {
            isAllCheckBoxesNotChecked = true;
            break;
        }
    }

    // if any of check box was not selected then we go for select all  else we go for deselect all
    if (isAllCheckBoxesNotChecked == true) {
        for (var eleIndex = 0; eleIndex <= checkboxes.length - 1; eleIndex++) {
            checkboxes[eleIndex].checked = true;
            setAttributesForFieldBasedOnValueWithIDs(checkboxes[eleIndex].id);

        }
    } else {
        for (var eleIndex = 0; eleIndex <= checkboxes.length - 1; eleIndex++) {
            checkboxes[eleIndex].checked = false;
            setAttributesForFieldBasedOnValueWithIDs(checkboxes[eleIndex].id);

        }
    }

}

//************************************************************************************************************************************************//
//********************************************* CHECK UNCHECK GROUP OF CHECK BOXES ON LABEL CLICK BLOCK END **************************************//
//************************************************************************************************************************************************//


//***************************************************************************************************************************************//
//********************************************* MANDATORY VALIDATIONS FOR EACH ELEMENT BLOCK START **************************************//
//***************************************************************************************************************************************//
//ADDED BY : V.UDAY KIRAN ON 11/07/2015  --
//This function verifies for Custom Attribute "EMRMandatoryElement" Elements and check whether value was entered or not for those elements.
//Also validation message will be given as Custom Attribute Value.
// Eg: <input type="text" id="txtRacePage1" EMRMandatoryElement="Please Enter Race" datatype="4" displayname="Race Page1" name="txtRacePage1" >
function PerformMandatoryValidationsOnElements() {
    //declaring variables
    var MandatoryMessage;
    var returnValue = false;
    var focusElementId;
    //getting all elements having Mandatory attribute
    var elementCollection = $("[emrmandatoryelement]").get();
    var systemDefinedMandFields = false;
    var customMandFields = false;
    var chkMandatoryElements = false;

    var anyonechkismandatory = false;

    //loop through each element and check whether data was present or not
    for (var elementIndex = 0; elementIndex < elementCollection.length; elementIndex++) {
        //calling function to check whether value was entered or not for element
        if (!CheckValueExistsOrNotInFieldForMandatory(elementCollection[elementIndex])) {
            $("label[for='" + $(elementCollection[elementIndex]).attr('id') + "']").css({
                "background-color": "yellow",
                "color": "red"
            });
            systemDefinedMandFields = true;
        } else {
            $("label[for='" + $(elementCollection[elementIndex]).attr('id') + "']").css({
                "background-color": "white",
                "color": "black"
            });
        }
    }

    //if all mandatory fields were entered then calling custom script if exists
    // if (!returnValue) {
    if (typeof PerformFormMandatoryValidations == "function") {
        customMandFields = PerformFormMandatoryValidations();
    }
    // }
    chkMandatoryElements = PerformMandatoryValidationsForCheckBoxElement();

    var elementCollection = $("[anyoneofcheckboxismandatory]").get();

    if (hasValue(elementCollection) && elementCollection.length > 0) {
        for (var i = 0; i < elementCollection.length; i++) {
            if (CheckAnyOfCheckBoxCheckedInTableElement($(elementCollection[i]).attr('id'))) {
                anyonechkismandatory = true;
            }
        }
    }



    if (systemDefinedMandFields == true || customMandFields == true || chkMandatoryElements == true || anyonechkismandatory == true) {
        return true;
    } else {
        return false;
    }
    //return returnValue;
}
//***************************************************************************************************************************************//
//********************************************* MANDATORY VALIDATIONS FOR EACH ELEMENT BLOCK END ****************************************//
//***************************************************************************************************************************************//



//******************************************************************************************************************************************//
//********************************************* CHECK VALUE EXISTS FOR MANDATAORY ELEMENT BLOCK START **************************************//
//******************************************************************************************************************************************//
//this method is useful in checking whether data exists or not in the current field
function CheckValueExistsOrNotInFieldForMandatory(field) {


    var valueexits = false; //defaults not exists
    var chkMandField = "";
    var chkMandFieldId = "";

    if (hasValue(field)) {

        //switch on tag name of the element
        switch (field.tagName.toLowerCase()) {

            //case input tag field 
            case 'input':
                if (field) {

                    //switch on type of the input element 
                    switch (field.type.toLowerCase()) {
                        //when check box returning its value 
                        case 'checkbox':
                            valueexits = field.checked;
                            break;
                            //when text box returning by it's length 
                        case 'text':
                            if ($.trim(field.value.length) > 0)
                                valueexits = true;
                            break;
                        default:
                            break;
                    }

                }
                break;
                //when select ddl returning by it's selected item value length 
            case 'select':
                if ($.trim(field.value.length) > 0)
                    valueexits = true;
                break;
                //when text box returning by it's length 
            case 'textarea':
                if ($.trim(field.value).length > 0)
                    valueexits = true;
                break;
                //image tag verifying if not the default field value then setting that the value exists 
            case 'img':
                if ($.trim(field.src).length > 0 && field.src.indexOf("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCA") < 0)
                    valueexits = true;
                break;
            case 'div':
                if ($.trim(field.innerText).length > 0)
                    valueexits = true;
                break;
            default:
                break;
        }
    }
    return valueexits; //returning the value exists or not
}

//******************************************************************************************************************************************//
//********************************************* CHECK VALUE EXISTS FOR MANDATAORY ELEMENT BLOCK END **************************************//
//******************************************************************************************************************************************//


//***************************************************************************************************************************************//
//********************************************* REMOVE MANDATORY VALIDATION STYLES BLOCK START **************************************//
//***************************************************************************************************************************************//
//ADDED BY : V.UDAY KIRAN ON 11/07/2015  -- 
//This function verifies for Custom Attribute "EMRMandatoryElement" Elements and check whether value was entered or not for those elements.
function RemoveMandatoryStyles() {
    //declaring variables
    var focusElementId;
    //getting all elements having Mandatory attribute
    var elementCollection = $("[emrmandatoryelement]").get();

    //loop through each element and check whether data was present or not
    for (var elementIndex = 0; elementIndex < elementCollection.length; elementIndex++) {
        $("label[for='" + $(elementCollection[elementIndex]).attr('id') + "']").css({
            "background-color": "white",
            "color": "black"
        });
    }

    //to clear check box mandatory elements
    ClearMandatoryValidationsForCheckBoxElement();

    //get element collection to check whether any of checkbox is checked or not
    var elementCollection = $("[anyoneofcheckboxismandatory]").get();

    if (hasValue(elementCollection) && elementCollection.length > 0) {
        for (var i = 0; i < elementCollection.length; i++) {
            if (hasValue(elementCollection[i])) {
                ClearCheckAnyOfCheckBoxCheckedInTableElement($(elementCollection[i]).attr('id'));
            }
        }
    }


    //added by mahesh p on 05/13/2016
    if ((typeof RemoveCustomMandatoryStyles).toLowerCase() == "function")
        RemoveCustomMandatoryStyles(); //calling the form manula script function when exists
}
//***************************************************************************************************************************************//
//********************************************* REMOVE MANDATORY VALIDATION STYLES BLOCK END **************************************//
//***************************************************************************************************************************************//






//ADDED BY : V.UDAY KIRAN ON 11/07/2015  -- 
//This function verifies for Custom Attribute "EMRMandatoryElement" Elements and check whether value was entered or not for those elements.


//function CheckValidUserSignedOffDocumentOrNot() {
//    var loggedUserName;
//    loggedUserName = document.getElementById("txtLoggedUserName").value;


//    var pgmAssignerId = document.getElementById("imgProgramAssignerSignature");
//    var careCoOrdinatorId = document.getElementById("imgCareCoordinatorSignature");
//    var supervisorId = document.getElementById("imgSupervisorSignature");

//    var adminStaffSigned = false;
//    var careCoOrdinatorSigned = false;


//    var stateMaintaindata;
//    var careCoOrdinatorStatemaintain;


//    if (!hasValue(pgmAssignerId) || !hasValue(careCoOrdinatorId) || !hasValue(supervisorId)) return;


//    if (hasValue(pgmAssignerId) && hasValue(pgmAssignerId.getAttribute("emrstatemaintaindata"))) {

//        stateMaintaindata = window.atob(unescape(decodeURIComponent(pgmAssignerId.getAttribute("emrstatemaintaindata"))));

//        if (hasValue(stateMaintaindata) && hasValue(loggedUserName)) {

//            stateMaintaindata = $.parseJSON(stateMaintaindata);

//            if (stateMaintaindata.ipadSigSignedUserName.toString().toLowerCase() == loggedUserName.toString().toLowerCase()) {
//                adminStaffSigned = true;
//            }
//        }
//    }
//    else if (hasValue(pgmAssignerId) && !hasValue(pgmAssignerId.getAttribute("emrstatemaintaindata"))) {
//        alert("Please SignOff.");
//        return true;
//    }



//    if (adminStaffSigned == true && careCoOrdinatorSigned == false ) {
//        var selectedCareCoOrdinatorData;
//        var selectedcareCoOrdinatorID = document.getElementById("taSelectNewProgram");

//        if (hasValue(selectedcareCoOrdinatorID) && hasValue(selectedcareCoOrdinatorID.getAttribute("emrstatemaintaindata"))) {
//            selectedCareCoOrdinatorData = window.atob(unescape(decodeURIComponent(selectedcareCoOrdinatorID.getAttribute("emrstatemaintaindata"))));
//            selectedCareCoOrdinatorData = $.parseJSON(selectedCareCoOrdinatorData);
//        }

//        if (!hasValue(selectedCareCoOrdinatorData) || !hasValue(selectedCareCoOrdinatorData.fieldValue)) {
//            return true;
//        }

//        //CoOrdinator Signature validation
//        if (hasValue(selectedCareCoOrdinatorData) && hasValue(selectedCareCoOrdinatorData.fieldValue) && hasValue(careCoOrdinatorId) && hasValue(careCoOrdinatorId.getAttribute("emrstatemaintaindata"))) {

//            careCoOrdinatorStatemaintain = window.atob(unescape(decodeURIComponent(careCoOrdinatorId.getAttribute("emrstatemaintaindata"))));

//            if (hasValue(careCoOrdinatorStatemaintain) && hasValue(selectedCareCoOrdinatorData.fieldValue)) {

//                careCoOrdinatorStatemaintain = $.parseJSON(careCoOrdinatorStatemaintain);

//                if (careCoOrdinatorStatemaintain.ipadSigSignedUserName.toString().toLowerCase() == selectedCareCoOrdinatorData.fieldValue.toString().toLowerCase()) {
//                    careCoOrdinatorSigned = true;
//                }
//            }
//        }
//        else if (hasValue(careCoOrdinatorId) && !hasValue(careCoOrdinatorId.getAttribute("emrstatemaintaindata"))) {
//            alert("Please SignOff.");
//            return true;
//        }

//    }

//    //Supervisor Signature validation

//    if (adminStaffSigned == true && careCoOrdinatorSigned == true ) {

//        if (hasValue(pgmAssignerId.getAttribute("emrstatemaintaindata")) && hasValue(careCoOrdinatorId.getAttribute("emrstatemaintaindata")) && !hasValue(supervisorId.getAttribute("emrstatemaintaindata"))) {
//            alert("Please Sign Off");
//            return true;
//        }

//    }
//    return false;
//}


//function RemoveSpaceComma(value)
//{
//    if (!hasValue(value)) return;

//    value.replace(/,/gi, "");
//    value.replace(/s/gi, "");
//    return value;
//}

////this method is useful in adding the events to the elements for auto adding the attributes to the elements in the document
//function AutoAddAttributesWhenDataExists() {
//    var elementscommonlytofind = "input,select,textarea";


//    //$(document).find("*").on('DOMAttrModified DOMAttributeNameChanged DOMCharacterDataModified DOMElementNameChanged DOMNodeInserted DOMNodeInsertedIntoDocument DOMNodeRemoved DOMNodeRemovedFromDocument DOMSubtreeModified', function (event) {

//    //    console.log(event);

//    //});


//    //attaching the laod event to the image field since, change event can't be fired for an image so load event can be fired when a new image is changed
//    $(document).find("img").on('load', function (event) {

//        var fieldTarget = event.currentTarget || event.target;

//        setAttributesForFieldBasedOnValue($(fieldTarget));

//    });

//    //attaching the events to elements
//    $(document).find(elementscommonlytofind).on('change input click', function (event) {

//        var fieldTarget = event.currentTarget || event.target;

//        setAttributesForFieldBasedOnValue($(fieldTarget));

//    });

//}


var EHRInvalidDataFound = {

    VALIDDATA: 1,
    INVALIDADATA: 2
};

Object.freeze(EHRInvalidDataFound);



//this method is useful in validating the value fileds based on type of the fields
function PeformInvalidInputValidations() {

    var retType = false;

    //DATE: 0, 
    //TIME: 1, 
    //DATETIME: 2, 
    //STRING: 3, 
    //ALPHABET: 4, 
    //INTEGER: 5, 
    //BOOLEAN: 6,
    //IMAGE: 7,
    //PHONENUMBER: 8,
    //SSN: 9

    var FutureDatenotAllowedCollection = $("[donotAllowFutureDates='1']");

    var PastDatenotAllowedCollection = $("[donotAllowPastDates='1']");


    //var regexTime = /^\d{2}:\d{2} (A|a|P|p)(M|m)$/;

    //12:30 am format
    var regexTime = /(?:^$)|(?:^([0-9]|0[1-9]|1[0-9]|2[0-4])(:|\.)[0-5][0-9]$)|(?:^([1-9]|0[1-9]|1[0-2])(:|\.)[0-5][0-9] (A|a|P|p)(M|m)$)/;

    //'02/02/2015 12:30 am' format
    var regexDateTime = /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/?|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:(?:0?2)(\/?|-|\.)(?:29)\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/?|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2}) (\d{2}:\d{2} (A|a|P|p)(M|m))/;

    //alphabets with spaces 
    //var regexAlphabets = /^[a-zA-Z ]*$/;
    var regexAlphabets = /^([^0-9]*)$/;

    //integers only
    var regexInteger = /^\d+$/;

    //phone number
    var regexPhoneNumber = /(^1\d{3}|\d{3})-\d{3}-\d{4}$/;

    //phone number format2 (999) 999-9999
    var regexPhoneNumberFormat2 = /^[(]{1}(\d{3})[)]{1}[-|\s]?(\d{3})[-|\s]?(\d{4})$/;
    //ssn number 
    var regexSSN = /^\d{3}-\d{2}-\d{4}$/;


    //to remove the special chars 
    var regexSpecialChars = /[&\/\\#,+()$~%.'":*?<>{}_-\s]/;



    //get all data type elements
    var MaskedElements = $("[datatype]");

    for (var index = 0; index < MaskedElements.length; index++) {

        var curElement = MaskedElements[index];
        var dataValue = GetValueBasedOnFieldType(curElement);

        var curElementDataType = $(curElement).attr("datatype");

        if (!hasValue(curElementDataType)) continue;

        else {
            switch (curElementDataType) {

                //date type
                case '0':
                    if (hasValue(dataValue)) {

                        if (validateDateFiled(dataValue)) {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                        } else if (dataValue.length == 10) {

                            dataValue = dataValue.replace(/-/ig, "/");

                            if (validateDateFiled(dataValue)) {
                                applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                            } else {
                                applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                                retType = true;
                            }
                        } else {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                            retType = true;
                        }
                    } else
                        applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                    break;
                    //time type
                case '1':

                    if (hasValue(dataValue)) {
                        if (!regexTime.test(dataValue)) {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                            retType = true;
                        } else {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                        }
                    } else
                        applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                    break;

                    //date time type
                case '2':

                    if (hasValue(dataValue)) {

                        if (!regexDateTime.test(dataValue)) {
                            if (dataValue.length == 19) {

                                if (new Date(dataValue).toString().toLowerCase().replace(/\ /g, "") == "invaliddate") {
                                    applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                                    retType = true;
                                } else {
                                    applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                                }
                            } else {
                                applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                                retType = true;
                            }

                        } else {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                        }
                    } else
                        applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                    break;

                    //string type
                case '3':


                    //if (!hasValue(dataValue)) {
                    //    applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                    //    retType = true;
                    //}
                    //else {
                    //    applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                    //}


                    break;
                    //alphabets only
                case '4':

                    if (hasValue(dataValue)) {
                        if (!regexAlphabets.test(dataValue)) {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                            retType = true;
                        } else {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                        }
                    } else
                        applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);

                    break;

                    //integer only
                case '5':
                    if (hasValue(dataValue)) {
                        if (!regexInteger.test(dataValue)) {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                            retType = true;
                        } else {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                        }
                    } else
                        applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                    break;

                    //boolean only either 0 or 1 / true or false
                case '6':

                    break;

                    //image type only
                case '7':
                    if (!hasValue(dataValue)) {
                        applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                        retType = true;
                    } else {
                        applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                    }
                    break;
                    //phone number format only
                case '8':

                    if (hasValue(dataValue)) {

                        //if not passed 1st format
                        if (regexPhoneNumber.test(dataValue)) {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                        } //check format (999) 999-9999
                        else if (regexPhoneNumberFormat2.test(dataValue)) {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                        } //check for numerics only when string length is between 10 and 11
                        else if (dataValue.length >= 10 && dataValue.length <= 11) {

                            if (regexInteger.test(dataValue)) {
                                applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                            } else {
                                applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                                retType = true;
                            }
                        } else {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                            retType = true;
                        }
                    } else
                        applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);

                    break;
                    //SSN number format only
                case '9':
                    if (hasValue(dataValue)) {

                        //if not passed 1st format
                        if (regexSSN.test(dataValue)) {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                        }
                        //check for numerics only when string length is between 10 and 11
                        else if (dataValue.length == 9) {

                            if (regexInteger.test(dataValue)) {
                                applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                            } else {
                                applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                                retType = true;
                            }
                        } else {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                            retType = true;
                        }
                    } else
                        applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);

                    break;
                default:
                    break
            }
        }

    }

    //if (retType)
    //    alert('Invalid Data Exists For One More Field (s).');

    //DONOT ALLOW FUTURE DATES
    if (validateFutureDate(FutureDatenotAllowedCollection)) {
        retType = true;
    }

    //DONOT ALLOW PAST DATES
    if (validatePastDate(PastDatenotAllowedCollection)) {
        retType = true;
    }

    return retType;
}

function isFutureDate(dataValue) {
    if (!(new Date(getEMRFormattedDateTime()) < (new Date(dataValue))) || (EHREasyFormsDateDiff.inDays((new Date(getEMRFormattedDateTime())), (new Date(dataValue))) == 0)) {
        return false;
    } else {
        return true;
    }
}

//THIS METHOD IS USED TO VALIDATE FUTURE DATE 
function validateFutureDate(FutureDatenotAllowedCollection) {

    //12:30 am format
    var regexTime = /(?:^$)|(?:^([0-9]|0[1-9]|1[0-9]|2[0-4])(:|\.)[0-5][0-9]$)|(?:^([1-9]|0[1-9]|1[0-2])(:|\.)[0-5][0-9] (A|a|P|p)(M|m)$)/;

    //'02/02/2015 12:30 am' format
    var regexDateTime = /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/?|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:(?:0?2)(\/?|-|\.)(?:29)\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/?|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2}) (\d{2}:\d{2} (A|a|P|p)(M|m))/;


    var returntype = false;

    if (!hasValue(FutureDatenotAllowedCollection)) return;

    for (var ElementsIndex = 0; ElementsIndex < FutureDatenotAllowedCollection.length; ElementsIndex++) {

        if (!hasValue(FutureDatenotAllowedCollection[ElementsIndex].value)) continue;

        var curElement = FutureDatenotAllowedCollection[ElementsIndex];

        var dataValue = GetValueBasedOnFieldType(curElement);

        var curElementDataType = $(curElement).attr("datatype");

        if (!hasValue(curElementDataType)) continue;

        switch (curElementDataType) {

            //date type
            case '0':
                if (hasValue(dataValue)) {

                    if (validateDateFiled(dataValue)) {
                        if (isFutureDate(dataValue)) {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                            returntype = true;
                        } else {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                        }
                    } else if (dataValue.length == 10) {

                        dataValue = dataValue.replace(/-/ig, "/");

                        if (validateDateFiled(dataValue)) {
                            if (isFutureDate(dataValue)) {
                                applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                                returntype = true;
                            } else {
                                applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                            }
                        } else {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                            returntype = true;
                        }
                    } else {
                        applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                        returntype = true;
                    }
                } else
                    applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                break;
                //time type
            case '1':

                if (hasValue(dataValue)) {
                    if (!regexTime.test(dataValue)) {
                        applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                        returntype = true;
                    } else {
                        if (isFutureDate(dataValue)) {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                            returntype
                        } else {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                        }
                    }
                } else
                    applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                break;

                //date time type
            case '2':

                if (hasValue(dataValue)) {

                    if (!regexDateTime.test(dataValue)) {
                        if (dataValue.length == 19) {

                            if (new Date(dataValue).toString().toLowerCase().replace(/\ /g, "") == "invaliddate") {
                                applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                                returntype = true;
                            } else {
                                if (isFutureDate(dataValue)) {
                                    applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                                    returntype
                                } else {
                                    applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                                }
                            }
                        } else {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                            returntype = true;
                        }

                    } else {
                        if (isFutureDate(dataValue)) {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                            returntype = true;
                        } else {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                        }
                    }
                } else
                    applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                break;
            default:
                break;

        }
    }

    return returntype;
}


////THIS METHOD IS USED TO VALIDATE FUTURE DATE 
//function validateFutureDate(FutureDatenotAllowedCollection) {

//    var returntype = false;

//    if (!hasValue(FutureDatenotAllowedCollection)) return;

//    for (var ElementsIndex = 0; ElementsIndex < FutureDatenotAllowedCollection.length; ElementsIndex++) {

//        if (!hasValue(FutureDatenotAllowedCollection[ElementsIndex].value)) continue;

//        EHREasyFormsDateDiff.inDays((new Date(getEMRFormattedDateTime())), (new Date(FutureDatenotAllowedCollection[ElementsIndex].value))) == 0;

//        if (!(new Date(getEMRFormattedDateTime()) < (new Date(FutureDatenotAllowedCollection[ElementsIndex].value)))
//            || (EHREasyFormsDateDiff.inDays((new Date(getEMRFormattedDateTime())), (new Date(FutureDatenotAllowedCollection[ElementsIndex].value))) == 0)) {

//            $(FutureDatenotAllowedCollection[ElementsIndex]).css({ "border": "1px solid white", "color": "black" });
//        } else {
//            $(FutureDatenotAllowedCollection[ElementsIndex]).css({ "border": "1px solid yellow", "color": "red" });
//            returntype = true;

//        }
//    }

//    return returntype;
//}

//this  method is useful in applying the styles for the invalid datA in the datat type fields
function applyInvalidDataFoundStyle(elementToApply, styleTypeToApply) {

    if (hasValue(elementToApply) && hasValue(styleTypeToApply)) {

        if (styleTypeToApply == EHRInvalidDataFound.INVALIDADATA) {

            $(elementToApply).css({
                "color": "red",
                "border": "1px solid yellow"
            });
            //elementToApply.style.color = "red";
            //elementToApply.style.border = "red";
        } else {
            $(elementToApply).css({
                "color": "black",
                "border": "none"
            });
            //elementToApply.style.color = "inherit";
            //elementToApply.style.border = "";
        }
    }
}




//*******PURPOSE: This method is used to validate date while on calling
//*******CREATED BY: Mahesh P
//*******CREATED DATE: 11/17/2015
//*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function validateDateFiled(dateInput) {
    var d = dateInput;

    if (!hasValue(d)) return false; //if no date is given as input

    var validformat = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!validformat.test(d)) {
        return false; //if the date format is not satisfied with the reg ex
    }
    var mth = d.split("/")[0]
    var day = d.split("/")[1]
    var yr = d.split("/")[2]
    var bday = new Date(yr, mth - 1, day)
    if ((bday.getMonth() + 1 != mth) || (bday.getDate() != day) || (bday.getFullYear() != yr) || bday.getFullYear() < 1900 || bday.getFullYear() > 2099) {
        return false;
    }

    return true;

}

//#########DATE VALIDATION BLOCK END ##############


//this method is useful in checking whether data exists or not in the current field
function GetValueBasedOnFieldType(field) {


    var valueexits = ""; //defaults not exists

    if (hasValue(field)) {

        //switch on tag name of the element
        switch (field.tagName.toLowerCase()) {

            //case input tag field 
            case 'input':
                if (field) {

                    //switch on type of the input element 
                    switch (field.type.toLowerCase()) {
                        //when check box returning its value 
                        case 'checkbox':
                            valueexits = field.checked;
                            break;
                            //when radio button
                        case 'radio':
                            valueexits = field.checked;
                            break;
                            //when text box returning by it's length 
                        case 'text':
                            if ($.trim(field.value.length) > 0)
                                valueexits = field.value;
                            break;
                        default:
                            if (hasValue(field.value) && $.trim(field.value.length) > 0)
                                valueexits = field.value;
                            break;
                    }

                }
                break;
                //when select ddl returning by it's selected item value length 
            case 'select':
                if ($.trim(field.value.length) > 0)
                    valueexits = field.value;
                break;
                //when text box returning by it's length 
            case 'textarea':
                if ($.trim(field.value).length > 0)
                    valueexits = field.value;
                break;
                //image tag verifying if not the default field value then setting that the value exists 
            case 'img':
                if ($.trim(field.src).length > 0)
                    valueexits = field.src;
                break;

            default:
                if (hasValue(field.value) && $.trim(field.value.length) > 0)
                    valueexits = field.value;
                break;
        }
    }
    return valueexits; //returning the value exists or not
}



//function GetAllElementsToSetDefaultValues() {

//    var elemsCollection = $("[emrsetdefaultvalues]");

//    for (var indexInCollection = 0; indexInCollection < elemsCollection.length; indexInCollection++) {

//        if (hasValue(elemsCollection[indexInCollection]))
//            SetDefaultValueBasedOnFieldType(elemsCollection[indexInCollection]);
//    }
//}


////this method is useful in checking whether data exists or not in the current field
//function SetDefaultValueBasedOnFieldType(field) {

//    if (hasValue(field)) {

//        //switch on tag name of the element
//        switch (field.tagName.toLowerCase()) {

//            //case input tag field 
//            case 'input':
//                if (field) {

//                    //switch on type of the input element 
//                    switch (field.type.toLowerCase()) {
//                        //when check box returning its value 
//                        case 'checkbox':
//                            $(field).prop("checked", false);
//                            break;
//                            //when radio button
//                        case 'radio':
//                            $(field).prop("checked", false);
//                            break;
//                            //when text box returning by it's length 
//                        case 'text':
//                            $(field).val("");
//                            break;
//                        default:
//                            $(field).val("");
//                            break;
//                    }

//                }
//                break;
//                //when select ddl returning by it's selected item value length 
//            case 'select':
//                $(field).val("");
//                break;
//                //when text box returning by it's length 
//            case 'textarea':
//                $(field).val("");
//                break;
//                //image tag verifying if not the default field value then setting that the value exists 
//            case 'img':
//                $(field).attr("src");
//                break;
//            case 'div':
//                $(field).html("");
//                break

//            default:
//                $(field).val("");
//                break;
//        }
//    }

//}


function GetCurrentDateOnTargetFieldAfterSignature(field, imgElement) {

    if (!hasValue(field)) return;

    field = document.getElementById(field);

    if (!hasValue(field)) return;

    if (!hasValue(imgElement)) return;

    var defaultimgSource = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACtklEQVRIie2Tz2sVZxSGn/eSGUSsZBGCi4uCpNaFtKJFRbHOfKgtCNKiVVyICNIuLGTnPyAqgiB2oa4KXZXiQmgXgpSZj7ZY0RKoWvqDrCQoZBGCqFxmJG8X93pj4tVcxIUUz+wOZ85z3vc7B97Gmx561R9DWQ2AvrL8e5mlvy5UP/BKkFgBuoA5IjQOvPtaQCHWqe19kmKRJRM2pySOWAbzbz89FrQuxPoT2wcl/Wj8OWYA2I0A87ekLUWWTC3U54WKQqwBThgPIg4VWfIkxGrG8D0AZlLSrn4gAI1eybysGsbngEego2WWPsnL6iObbwEE05ImjQ/nZdWX/T2ty8vqrNA/iItFlhBivQbzC2IQ0zJ8jHxD6BhmF2K0yJLrIdargOXANDBle1piqsjS50GhrFch9hZZchIgxLoJ/AY0OyWjRZZ83a2P9QhwGnhoWCt4/9l+treVefpzD9neZ3O+o2zQ+IpQEwPiKszdsiJLxoE9Heinti8jEMI2kjYDc0Eh1mDeKfNkKsQa25cwa4wROo+5b3ztRe8AjLVnBeOnufdg3jLYXodohrJqAJuEtgshKVr+zvI1RBZivbMnxp4QaonZDxh+DiTpM+C2YQjzJeIO4hvjMWCHrA+FhsFFL06RpzPGD7rctqoGPHNHIdYDtgEmgc3gRaAPMBvKPL3+Eru60bm9pd3B24oezAHZXiJpL7CkI3djkSUzoaxXA32BbC+XtGheemIOCFgJLMY0gYfg46GsWmDysroHLJW0DFhB+1ZmgJvAPWAEs9V4w+wOABikv7qgjuSVwHrLf8o6UORpEWI1THspmsBd2+OIn4CG0BCwzPZiwVXDGeCc5S/myRybVWS2AxvBQ0j7izyJAEWWTgI/9GNbZ+ALmD+QH2O1EC3gVrcgj9XOEKuRfhu+jf9n/AfHki0S/5bmsQAAAABJRU5ErkJggg==";
    var Source = document.getElementById('' + imgElement.id + '').src;

    if (hasValue(field) && hasValue(Source)) {
        if (Source.toLowerCase() != defaultimgSource.toLowerCase()) {

            //switch on tag name of the element 
            switch (field.tagName.toLowerCase()) {

                //case input tag field  
                case 'input':
                    if (field) {

                        //switch on type of the input element  
                        switch (field.type.toLowerCase()) {

                            //when text box returning by it's length  
                            case 'text':
                                $(field).val(getEMRFormattedDate());
                                break;
                            default:

                                break;
                        }

                    }
                    break;

                case 'textarea':
                    $(field).val(getEMRFormattedDate());
                    break;
                    //image tag verifying if not the default field value then setting that the value exists  

                default:
                    break;
            }

        } else {
            $(field).val("");
        }
    }
}



// This Function is Used to get EMR Date Format
function getEMRFormattedDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = (1 + currentDate.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = currentDate.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return (month + '/' + day + '/' + year);
}


////// ************ THIS SCRIPT IS USED TO LOAD DATE & TIME BLOCK START  ************///////////
function GetCurrentDateTimeOnTargetFieldAfterSignature(field, imgElement) {

    if (!hasValue(field)) return;

    field = document.getElementById(field);

    if (!hasValue(field)) return;

    if (!hasValue(imgElement)) return;

    var defaultimgSource = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACtklEQVRIie2Tz2sVZxSGn/eSGUSsZBGCi4uCpNaFtKJFRbHOfKgtCNKiVVyICNIuLGTnPyAqgiB2oa4KXZXiQmgXgpSZj7ZY0RKoWvqDrCQoZBGCqFxmJG8X93pj4tVcxIUUz+wOZ85z3vc7B97Gmx561R9DWQ2AvrL8e5mlvy5UP/BKkFgBuoA5IjQOvPtaQCHWqe19kmKRJRM2pySOWAbzbz89FrQuxPoT2wcl/Wj8OWYA2I0A87ekLUWWTC3U54WKQqwBThgPIg4VWfIkxGrG8D0AZlLSrn4gAI1eybysGsbngEego2WWPsnL6iObbwEE05ImjQ/nZdWX/T2ty8vqrNA/iItFlhBivQbzC2IQ0zJ8jHxD6BhmF2K0yJLrIdargOXANDBle1piqsjS50GhrFch9hZZchIgxLoJ/AY0OyWjRZZ83a2P9QhwGnhoWCt4/9l+treVefpzD9neZ3O+o2zQ+IpQEwPiKszdsiJLxoE9Heinti8jEMI2kjYDc0Eh1mDeKfNkKsQa25cwa4wROo+5b3ztRe8AjLVnBeOnufdg3jLYXodohrJqAJuEtgshKVr+zvI1RBZivbMnxp4QaonZDxh+DiTpM+C2YQjzJeIO4hvjMWCHrA+FhsFFL06RpzPGD7rctqoGPHNHIdYDtgEmgc3gRaAPMBvKPL3+Eru60bm9pd3B24oezAHZXiJpL7CkI3djkSUzoaxXA32BbC+XtGheemIOCFgJLMY0gYfg46GsWmDysroHLJW0DFhB+1ZmgJvAPWAEs9V4w+wOABikv7qgjuSVwHrLf8o6UORpEWI1THspmsBd2+OIn4CG0BCwzPZiwVXDGeCc5S/myRybVWS2AxvBQ0j7izyJAEWWTgI/9GNbZ+ALmD+QH2O1EC3gVrcgj9XOEKuRfhu+jf9n/AfHki0S/5bmsQAAAABJRU5ErkJggg==";
    var Source = document.getElementById('' + imgElement.id + '').src;

    if (hasValue(field) && hasValue(Source)) {
        if (Source.toLowerCase() != defaultimgSource.toLowerCase()) {

            //switch on tag name of the element 
            switch (field.tagName.toLowerCase()) {

                //case input tag field  
                case 'input':
                    if (field) {

                        //switch on type of the input element  
                        switch (field.type.toLowerCase()) {

                            //when text box returning by it's length  
                            case 'text':
                                $(field).val(getEMRFormattedDateTime());
                                break;
                            default:

                                break;
                        }

                    }
                    break;

                case 'textarea':
                    $(field).val(getEMRFormattedDateTime());
                    break;
                    //image tag verifying if not the default field value then setting that the value exists  

                default:
                    break;
            }

        } else {
            $(field).val("");
        }
    }
}

///this method is useful in get the server date time
function emrGetServerDateTime() {

    //in case f web
    if (hasValue(window.parent) && (typeof window.parent.adminGetCurrentDateAndTimeWithoutSecs).toLowerCase() != "undefined") {
        return window.parent.adminGetCurrentDateAndTimeWithoutSecs();
    } else {
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = (1 + currentDate.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
        var day = currentDate.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        // get Time 
        var h = currentDate.getHours(),
            m = currentDate.getMinutes();
        var _time = (h > 12) ? (h - 12 + ':' + m + ' PM') : (h + ':' + m + ' AM');

        return (month + '/' + day + '/' + year) + ' ' + _time;
    }
}

///this method is useful in get the server date time
function emrGetServerDateOnly() {


    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = (1 + currentDate.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = currentDate.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    // get Time 
    var h = currentDate.getHours(),
        m = currentDate.getMinutes();
    // var _time = (h > 12) ? (h - 12 + ':' + m + ' PM') : (h + ':' + m + ' AM');

    return (month + '/' + day + '/' + year); //+ ' ' + _time;
}


function getEMRFormattedDateTime() {
    return emrGetServerDateTime();
}
////// ************ THIS SCRIPT IS USED TO LOAD DATE & TIME BLOCK END  ************///////////

//*******PURPOSE: This method is used to clear all the data if opened as new form
//*******CREATED BY: Mahesh P
//*******CREATED DATE: 11/17/2015
//*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function GetAllElementsToSetDefaultValues() {

    var elemsCollection = $("[emrsetdefaultvalues]");

    for (var indexInCollection = 0; indexInCollection < elemsCollection.length; indexInCollection++) {

        if (hasValue(elemsCollection[indexInCollection]))
            SetDefaultValueBasedOnFieldType(elemsCollection[indexInCollection]);
    }
}


//*******PURPOSE: This method is used to clear data and set image to default image
//*******CREATED BY: Mahesh P
//*******CREATED DATE: 11/17/2015
//*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//this method is useful in checking whether data exists or not in the current field 
function SetDefaultValueBasedOnFieldType(field) {

    if (hasValue(field)) {

        //switch on tag name of the element 
        switch (field.tagName.toLowerCase()) {

            //case input tag field  
            case 'input':
                if (field) {

                    //switch on type of the input element  
                    switch (field.type.toLowerCase()) {
                        //when check box returning its value  
                        case 'checkbox':
                            $(field).prop("checked", false);
                            break;
                            //when radio button 
                        case 'radio':
                            $(field).prop("checked", false);
                            break;
                            //when text box returning by it's length  
                        case 'text':
                            $(field).val("");
                            break;
                        default:
                            $(field).val("");
                            break;
                    }

                }
                break;
                //when select ddl returning by it's selected item value length  
            case 'select':
                $(field).val("");
                break;
                //when text box returning by it's length  
            case 'textarea':
                $(field).val("");
                autoSizeElement(field.getAttribute("id"));
                break;
                //image tag verifying if not the default field value then setting that the value exists  
            case 'img':
                $(field).attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACtklEQVRIie2Tz2sVZxSGn/eSGUSsZBGCi4uCpNaFtKJFRbHOfKgtCNKiVVyICNIuLGTnPyAqgiB2oa4KXZXiQmgXgpSZj7ZY0RKoWvqDrCQoZBGCqFxmJG8X93pj4tVcxIUUz+wOZ85z3vc7B97Gmx561R9DWQ2AvrL8e5mlvy5UP/BKkFgBuoA5IjQOvPtaQCHWqe19kmKRJRM2pySOWAbzbz89FrQuxPoT2wcl/Wj8OWYA2I0A87ekLUWWTC3U54WKQqwBThgPIg4VWfIkxGrG8D0AZlLSrn4gAI1eybysGsbngEego2WWPsnL6iObbwEE05ImjQ/nZdWX/T2ty8vqrNA/iItFlhBivQbzC2IQ0zJ8jHxD6BhmF2K0yJLrIdargOXANDBle1piqsjS50GhrFch9hZZchIgxLoJ/AY0OyWjRZZ83a2P9QhwGnhoWCt4/9l+treVefpzD9neZ3O+o2zQ+IpQEwPiKszdsiJLxoE9Heinti8jEMI2kjYDc0Eh1mDeKfNkKsQa25cwa4wROo+5b3ztRe8AjLVnBeOnufdg3jLYXodohrJqAJuEtgshKVr+zvI1RBZivbMnxp4QaonZDxh+DiTpM+C2YQjzJeIO4hvjMWCHrA+FhsFFL06RpzPGD7rctqoGPHNHIdYDtgEmgc3gRaAPMBvKPL3+Eru60bm9pd3B24oezAHZXiJpL7CkI3djkSUzoaxXA32BbC+XtGheemIOCFgJLMY0gYfg46GsWmDysroHLJW0DFhB+1ZmgJvAPWAEs9V4w+wOABikv7qgjuSVwHrLf8o6UORpEWI1THspmsBd2+OIn4CG0BCwzPZiwVXDGeCc5S/myRybVWS2AxvBQ0j7izyJAEWWTgI/9GNbZ+ALmD+QH2O1EC3gVrcgj9XOEKuRfhu+jf9n/AfHki0S/5bmsQAAAABJRU5ErkJggg==");
                //removed css height because after removing img if signatue is populate again image get compressed to height
                // $(field).css({ "height": "28px" });
                //THIS IS USED BECAUSE WE ARESETTING STYLES TO IMAGE INTRENALLY ,SO IF IMAGE IS REMOVED WE HAVE TO SET OLD STYLES ELSE HAND SIGNATURE WILL SET TO CUSTOM WIDTHS
                if (hasValue($(field).attr("originalstyles"))) {

                    if (hasValue($(field).attr("style"))) {
                        $(field).removeAttr("style");
                    }

                    $(field).attr("style", $(field).attr("originalstyles"));
                }
                break;
            case 'div':
                $(field).html("");

                break

            default:
                $(field).val("");
                break;
        }
    }

}

//*************************************************************************************** CHECK START DATE IS GREATER THAN END DATE BLOCK START ***************************************************************************
//*******PURPOSE: This method is used to check wheteher start date is greater than end date or note
//*******CREATED BY: UDAY KIRAN V
//*******CREATED DATE: 06/01/2016
//*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function CheckStartDateIsGreaterThanEndDate(id1, id2) {
    //validating id's
    if (!hasValue(id1) || !hasValue(id2)) {
        return;
    }

    //getting elements using given id's
    var element1 = document.getElementById(id1);
    var element2 = document.getElementById(id2);

    //getting data from elements
    var date1 = GetValueFromFieldBasedOnType(element1);
    var date2 = GetValueFromFieldBasedOnType(element2);

    //if not having any of the values then returning without validating date
    if (!hasValue(date1) || !hasValue(date2)) {
        return false;
    }
    var blnInValid = false;

    //if any of the given date is not in valid format then applying invalid mask and returning 
    if (!validateDateFiled(date1) || !validateDateFiled(date2)) {

        if (!validateDateFiled(date1)) {
            applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.INVALIDADATA);
        } else {
            applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.VALIDDATA);
        }

        if (!validateDateFiled(date2)) {
            applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.INVALIDADATA);
        } else {
            applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.VALIDDATA);
        }
        return false;
    }

    //START DATE MUST BE LOWER THAN END DATE
    if (EHREasyFormsDateDiff.inDays(date2, date1) > 0) {
        applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.INVALIDADATA);
        applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.INVALIDADATA);
        blnInValid = true;
    } else {
        applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.VALIDDATA);
        applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.VALIDDATA);
        blnInValid = false;
    }

    //if any invalid found then return to show validation message, else make elements in valid format
    if (blnInValid == true) {
        return true;
    } else {
        applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.VALIDDATA);
        applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.VALIDDATA);
        return false;
    }

    //if (hasValue(date1) && hasValue(date2) && validateDateFiled(date2) && validateDateFiled(date1)) {

    // }
    //else {
    //    if (hasValue(date1) && !validateDateFiled(date1)) {
    //        applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.INVALIDADATA);
    //        return false;
    //    }
    //    if (hasValue(date2) && !validateDateFiled(date2)) {
    //        applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.INVALIDADATA);
    //        return false;
    //    }
    //}


}
//*************************************************************************************** CHECK START DATE IS GREATER THAN END DATE BLOCK END ***************************************************************************


//*************************************************************************************** CHECK START TIME IS GREATER THAN END TIME BLOCK START ***************************************************************************
//*******PURPOSE: This method is used to check wheteher start time is greater than end time or note
//*******CREATED BY: UDAY KIRAN V
//*******CREATED DATE: 06/01/2016
//*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function CheckStartTimeIsGreaterThanEndTime(id1, id2) {
    //validating id's
    if (!hasValue(id1) || !hasValue(id2)) {
        return false;
    }

    //getting elements using given id's
    var element1 = document.getElementById(id1);
    var element2 = document.getElementById(id2);

    //getting data from elements
    var time1 = GetValueFromFieldBasedOnType(element1);
    var time2 = GetValueFromFieldBasedOnType(element2);

    //if not having any of the values then returning without validating time
    if (!hasValue(time1) || !hasValue(time2)) {
        return false;
    }

    //12:30 am format
    var regexTime = /(?:^$)|(?:^([0-9]|0[1-9]|1[0-9]|2[0-4])(:|\.)[0-5][0-9]$)|(?:^([1-9]|0[1-9]|1[0-2])(:|\.)[0-5][0-9] (A|a|P|p)(M|m)$)/;
    var blnInValid = false;

    //if any of the given time is not in valid format then applying invalid mask and returning 
    if (!regexTime.test(time1) || !regexTime.test(time2)) {

        if (!regexTime.test(time1)) {
            applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.INVALIDADATA);
        } else {
            applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.VALIDDATA);
        }

        if (!regexTime.test(time2)) {
            applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.INVALIDADATA);
        } else {
            applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.VALIDDATA);
        }
        return false;
    }


    //getting current date
    var currentDate = emrGetServerDateOnly();

    //vaildating current date and checking start time is greate than end time or not
    if (hasValue(currentDate) && validateDateFiled(currentDate)) {
        if (EHREasyFormsDateDiff.inMins(emrGetServerDateOnly() + " " + time2, emrGetServerDateOnly() + " " + time1) <= 0) {
            applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.INVALIDADATA);
            applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.INVALIDADATA);
            blnInValid = true;
        } else {
            applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.VALIDDATA);
            applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.VALIDDATA);
            blnInValid = false;
        }
    }

    //if any invalid found then return to show validation message, else make elements in valid format
    if (blnInValid == true) {
        return true;
    } else {
        applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.VALIDDATA);
        applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.VALIDDATA);
        return false;
    }

    //if (hasValue(time1) && hasValue(time2) && regexTime.test(time1) && regexTime.test(time2)) {

    // }
    //else {

    //    if (hasValue(time1) && !regexTime.test(time1)) {
    //        applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
    //        return false;
    //    }

    //    if (hasValue(time2) && !regexTime.test(time2)) {
    //        applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
    //        return false;
    //    }

    //}


}
//*************************************************************************************** CHECK START TIME IS GREATER THAN END TIME BLOCK END ***************************************************************************


//*************************************************************************************** CHECK START DATE IS GREATER THAN END DATE BLOCK START ***************************************************************************
//*******PURPOSE: This method is used to check wheteher start date is greater than end date or note
//*******CREATED BY: UDAY KIRAN V
//*******CREATED DATE: 06/01/2016
//*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function CheckStartDateTimeIsGreaterThanEndDateTime(id1, id2) {
    //validating id's
    if (!hasValue(id1) || !hasValue(id2)) {
        return;
    }

    //getting elements using given id's
    var element1 = document.getElementById(id1);
    var element2 = document.getElementById(id2);

    //getting data from elements
    var date1 = GetValueFromFieldBasedOnType(element1);
    var date2 = GetValueFromFieldBasedOnType(element2);

    //if not having any of the values then returning without validating date
    if (!hasValue(date1) || !hasValue(date2)) {
        return false;
    }
    var blnInValid = false;

    //if any of the given date is not in valid format then applying invalid mask and returning 
    if (!validateDateFiled(date1) || !validateDateFiled(date2)) {

        if (!validateDateFiled(date1)) {
            applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.INVALIDADATA);
        } else {
            applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.VALIDDATA);
        }

        if (!validateDateFiled(date2)) {
            applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.INVALIDADATA);
        } else {
            applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.VALIDDATA);
        }
        return false;
    }

    //START DATE MUST BE LOWER THAN END DATE
    if (inDaysWithTime.inDays(date2, date1) > 0) {
        applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.INVALIDADATA);
        applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.INVALIDADATA);
        blnInValid = true;
    } else {
        applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.VALIDDATA);
        applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.VALIDDATA);
        blnInValid = false;
    }

    //if any invalid found then return to show validation message, else make elements in valid format
    if (blnInValid == true) {
        return true;
    } else {
        applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.VALIDDATA);
        applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.VALIDDATA);
        return false;
    }

    //if (hasValue(date1) && hasValue(date2) && validateDateFiled(date2) && validateDateFiled(date1)) {

    // }
    //else {
    //    if (hasValue(date1) && !validateDateFiled(date1)) {
    //        applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.INVALIDADATA);
    //        return false;
    //    }
    //    if (hasValue(date2) && !validateDateFiled(date2)) {
    //        applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.INVALIDADATA);
    //        return false;
    //    }
    //}


}
//*************************************************************************************** CHECK START DATE IS GREATER THAN END DATE BLOCK END ***************************************************************************




//*************************************************************************************** CHECK VALUE1 IS GREATER THAN VALUE2 BLOCK START ***************************************************************************
//*******PURPOSE: This method is used to check wheteher value 1 is greater or less than value2.
//**************: If "operator" string is greater thencheckin greater condition, if operator is "less" then checking less than condition, default checking greater condition
//*******CREATED BY: UDAY KIRAN V
//*******CREATED DATE: 06/01/2016
//*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function CheckStartValueIsGreaterOrLessThanEndValue(id1, id2, operatorValue) {
    //validating id's
    if (!hasValue(id1) || !hasValue(id2)) {
        return false;
    }

    //getting elements using given id's
    var element1 = document.getElementById(id1);
    var element2 = document.getElementById(id2);

    var element1DataType = $(element1).attr("datatype");
    var element2DataType = $(element2).attr("datatype");

    if ((hasValue(element1DataType) && parseInt(element1DataType) != 5) || (hasValue(element2DataType) && parseInt(element2DataType) != 5)) {
        return false;
    }

    //getting data from elements
    var data1 = GetValueFromFieldBasedOnType(element1);
    var data2 = GetValueFromFieldBasedOnType(element2);

    if (!hasValue(data1) || !hasValue(data2)) {
        return false;
    }

    //integers only
    var regexInteger = /^\d+$/;
    var blnInValid = false;

    if (!regexInteger.test(data1) || !regexInteger.test(data1)) {
        if (!regexInteger.test(data)) {
            applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.INVALIDADATA);
        } else {
            applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.VALIDDATA);
        }

        if (!regexInteger.test(data2)) {
            applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.INVALIDADATA);
        } else {
            applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.VALIDDATA);
        }
        return false;
    }

    if (hasValue(operatorValue) && operatorValue.length > 0 && operatorValue.toLowerCase() == "greater") {
        if (parseInt(data2) > parseInt(data1)) {
            applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.INVALIDADATA);
            applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.INVALIDADATA);
            blnInValid = true;

        }
    } else if (hasValue(operatorValue) && operatorValue.length > 0 && operatorValue.toLowerCase() == "less") {
        if (parseInt(data2) < parseInt(data1)) {
            applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.INVALIDADATA);
            applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.INVALIDADATA);
            blnInValid = true;
        }
    } else {
        if (parseInt(data2) > parseInt(data1)) {
            applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.INVALIDADATA);
            applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.INVALIDADATA);
            blnInValid = true;
        }
    }

    //if any invalid found then return to show validation message, else make elements in valid format
    if (blnInValid == true) {
        return true;
    } else {
        applyInvalidDataFoundStyle(element1, EHRInvalidDataFound.VALIDDATA);
        applyInvalidDataFoundStyle(element2, EHRInvalidDataFound.VALIDDATA);
        return false;
    }

}
//*************************************************************************************** CHECK VALUE1 IS GREATER THAN VALUE2 BLOCK END ***************************************************************************





//******************************************************************************************************************************************//
//************************************************* GET VALUE FROM FIELD BASED ON TYPE BLOCK START *****************************************//
//******************************************************************************************************************************************//
//this method is useful in checking whether data exists or not in the current field
function GetValueFromFieldBasedOnType(field) {


    var valueexits = ""; //defaults not exists


    if (hasValue(field)) {

        //switch on tag name of the element
        switch (field.tagName.toLowerCase()) {

            //case input tag field 
            case 'input':
                if (field) {

                    //switch on type of the input element 
                    switch (field.type.toLowerCase()) {
                        //when check box returning its value 
                        case 'checkbox':
                            valueexits = field.checked;
                            break;

                            //when text box returning by it's length 
                        case 'text':
                            if ($.trim(field.value.length) > 0)
                                valueexits = $.trim(field.value);
                            break;
                        default:
                            break;
                    }

                }
                break;
                //when select ddl returning by it's selected item value length 
            case 'select':
                if ($.trim(field.value.length) > 0)
                    valueexits = $.trim(field.value);
                break;
                //when text box returning by it's length 
            case 'textarea':
                if ($.trim(field.value).length > 0)
                    valueexits = $.trim(field.value);
                break;
                //image tag verifying if not the default field value then setting that the value exists 
            case 'div':
                if ($.trim(field.innerText).length > 0)
                    valueexits = $.trim(field.innerText);
                break;

            default:
                break;
        }
    }
    return valueexits; //returning the value exists or not
}

//******************************************************************************************************************************************//
//************************************************* GET VALUE FROM FIELD BASED ON TYPE BLOCK END *****************************************//
//******************************************************************************************************************************************//


//*************************************************************************************** ENABLE / DISABLE FIELD BLOCK START ***************************************************************************
//*******PURPOSE: This method is used to enable or disable a field if check box is checked or unchecked.
//**************: Here we are getting all target fields with comma seperated
//*******CREATED BY: UDAY KIRAN V
//*******CREATED DATE: 06/01/2016
//*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function EnableDisableFieldIfCheckedUnChecked(chkid, targetFieldIds, blnflag) {

    //validating targt ids exists or not to enable or disable
    if (!hasValue(targetFieldIds) || targetFieldIds.length <= 0) return;

    //trimming the id's
    targetFieldIds = $.trim(targetFieldIds);

    if (targetFieldIds.length <= 0) return;

    //spllitting the items
    var splittedFieldIds = targetFieldIds.split(",");

    //getting checkbox element
    var chkElement = document.getElementById(chkid);

    if (!hasValue(blnflag)) {
        blnflag = true;
    } else if (hasValue(blnflag) && (blnflag != true || blnflag != false)) {
        blnflag = true;
    }

    //validating element and if element is checked then disabling all elements. if not cheked then enabling all elements
    if (hasValue(blnflag) && blnflag == true) {
        if (hasValue(chkElement) && chkElement.tagName.toLowerCase() == "input" && chkElement.type.toLowerCase() == "checkbox" && chkElement.checked == false) {
            for (var i = 0; i < splittedFieldIds.length; i++) {
                var element = document.getElementById(splittedFieldIds[i]);
                SetDefaultValueBasedOnFieldType(element);
                element.setAttribute("disabled", "disabled");
                //if (element.tagName.toLowerCase() == "img" && hasValue(event)) {
                //    event.stopImmediatePropagation();
                //}

            }
        } else if (hasValue(chkElement) && chkElement.tagName.toLowerCase() == "input" && chkElement.type.toLowerCase() == "checkbox" && chkElement.checked == true) {
            for (var i = 0; i < splittedFieldIds.length; i++) {
                var element = document.getElementById(splittedFieldIds[i]);
                element.removeAttribute("disabled");
                $("#" + splittedFieldIds[i]).focus();
            }
        }
    } else {
        if (hasValue(chkElement) && chkElement.tagName.toLowerCase() == "input" && chkElement.type.toLowerCase() == "checkbox" && chkElement.checked == false) {
            for (var i = 0; i < splittedFieldIds.length; i++) {
                var element = document.getElementById(splittedFieldIds[i]);
                element.removeAttribute("disabled");
                $("#" + splittedFieldIds[i]).focus();
                //SetDefaultValueBasedOnFieldType(element);
                //element.setAttribute("disabled", "disabled");
            }
        } else if (hasValue(chkElement) && chkElement.tagName.toLowerCase() == "input" && chkElement.type.toLowerCase() == "checkbox" && chkElement.checked == true) {
            for (var i = 0; i < splittedFieldIds.length; i++) {
                var element = document.getElementById(splittedFieldIds[i]);

                SetDefaultValueBasedOnFieldType(element);
                element.setAttribute("disabled", "disabled");
                //if (element.type.toLowerCase() == "img" && hasValue(event)) {
                //    event.stopImmediatePropagation();
                //}

                //element.removeAttribute("disabled");
                //$("#" + splittedFieldIds[i]).focus();
            }
        }
    }


}
//*************************************************************************************** ENABLE / DISABLE FIELD BLOCK END ***************************************************************************


//*************************************************************************************** SHOW / HIDE TABLE IF CHECKED BLOCK START ***************************************************************************
//*******PURPOSE: This method is used to show or hide table if check box is checked or unchecked.
//*******CREATED BY: UDAY KIRAN V
//*******CREATED DATE: 06/01/2016
//*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function ShowHideTableIfCheckedUnchecked(chkid, targetFieldId) {

    //validating targt ids exists or not to enable or disable
    if (!hasValue(targetFieldId) || targetFieldId.length <= 0) return;

    //trimming the id's
    targetFieldId = $.trim(targetFieldId);

    //getting checkbox element
    var chkElement = document.getElementById(chkid);

    //target table element to be show / hide
    var currentSectionTableBody = document.getElementById(targetFieldId);

    var elementscommonlytofind = "input,select,textarea,img,div";

    //validating element and if element is checked then show table. if not cheked then clear and hide table
    if (hasValue(chkElement) && chkElement.tagName.toLowerCase() == "input" && chkElement.type.toLowerCase() == "checkbox" && chkElement.checked == false) {
        // var currentElementCollection = currentSectionTableBody.find(elementscommonlytofind);//getting the elements collection need to check in the td
        var currentElementCollection = $("#" + targetFieldId).find(elementscommonlytofind); //getting the elements collection need to check in the td
        for (var i = 0; i < currentElementCollection.length; i++) {
            if (hasValue(currentElementCollection[i])) {
                SetDefaultValueBasedOnFieldType(currentElementCollection[i]);
            }
        }
        currentSectionTableBody.style.display = 'none';
    } else if (hasValue(chkElement) && chkElement.tagName.toLowerCase() == "input" && chkElement.type.toLowerCase() == "checkbox" && chkElement.checked == true) {
        currentSectionTableBody.style.display = 'block';
        $("#" + targetFieldId).focus();
    }

}
//*************************************************************************************** SHOW / HIDE TABLE BLOCK END ***************************************************************************


//*************************************************************************************** VALIDATE AND NOT ALLOW PAST DATE BLOCK START ***************************************************************************
//*******PURPOSE: This method is used to validate and not allow past date
//*******CREATED BY: UDAY KIRAN V
//*******CREATED DATE: 06/01/2016
//*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function validatePastDate(PastDatenotAllowedCollection) {

    //12:30 am format
    var regexTime = /(?:^$)|(?:^([0-9]|0[1-9]|1[0-9]|2[0-4])(:|\.)[0-5][0-9]$)|(?:^([1-9]|0[1-9]|1[0-2])(:|\.)[0-5][0-9] (A|a|P|p)(M|m)$)/;

    //'02/02/2015 12:30 am' format
    var regexDateTime = /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/?|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:(?:0?2)(\/?|-|\.)(?:29)\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/?|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2}) (\d{2}:\d{2} (A|a|P|p)(M|m))/;


    var returntype = false;

    if (!hasValue(PastDatenotAllowedCollection)) return;

    for (var ElementsIndex = 0; ElementsIndex < PastDatenotAllowedCollection.length; ElementsIndex++) {

        if (!hasValue(PastDatenotAllowedCollection[ElementsIndex].value)) continue;

        var curElement = PastDatenotAllowedCollection[ElementsIndex];

        var dataValue = GetValueBasedOnFieldType(curElement);

        var curElementDataType = $(curElement).attr("datatype");

        if (!hasValue(curElementDataType)) continue;

        switch (curElementDataType) {

            //date type
            case '0':
                if (hasValue(dataValue)) {

                    if (validateDateFiled(dataValue)) {
                        if (isPastDate(dataValue)) {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                            returntype = true;
                        } else {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                        }
                    } else if (dataValue.length == 10) {

                        dataValue = dataValue.replace(/-/ig, "/");

                        if (validateDateFiled(dataValue)) {
                            if (isPastDate(dataValue)) {
                                applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                                returntype = true;
                            } else {
                                applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                            }
                        } else {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                            returntype = true;
                        }
                    } else {
                        applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                        returntype = true;
                    }
                } else
                    applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                break;
                //time type
            case '1':

                if (hasValue(dataValue)) {
                    if (!regexTime.test(dataValue)) {
                        applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                        returntype = true;
                    } else {
                        if (isPastDate(dataValue)) {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                            returntype
                        } else {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                        }
                    }
                } else
                    applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                break;

                //date time type
            case '2':

                if (hasValue(dataValue)) {

                    if (!regexDateTime.test(dataValue)) {
                        if (dataValue.length == 19) {

                            if (new Date(dataValue).toString().toLowerCase().replace(/\ /g, "") == "invaliddate") {
                                applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                                returntype = true;
                            } else {
                                if (isPastDate(dataValue)) {
                                    applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                                    returntype
                                } else {
                                    applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                                }
                            }
                        } else {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                            returntype = true;
                        }

                    } else {
                        if (isPastDate(dataValue)) {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.INVALIDADATA);
                            returntype = true;
                        } else {
                            applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                        }
                    }
                } else
                    applyInvalidDataFoundStyle(curElement, EHRInvalidDataFound.VALIDDATA);
                break;
            default:
                break;

        }
    }

    return returntype;
}

function isPastDate(dataValue) {
    if (!(new Date(getEMRFormattedDateTime()) > (new Date(dataValue))) || (EHREasyFormsDateDiff.inDays((new Date(getEMRFormattedDateTime())), (new Date(dataValue))) == 0)) {
        return false;
    } else {
        return true;
    }
}

//*************************************************************************************** VALIDATE AND NOT ALLOW PAST DATE BLOCK END ***************************************************************************



//*******************************************************************************************************************************************//
//********************************************* MANDATORY VALIDATIONS FOR CHECKBOX ELEMENT BLOCK START **************************************//
//*******************************************************************************************************************************************//
//ADDED BY : V.UDAY KIRAN ON 11/07/2015  -- 
//This function verifies for Custom Attribute "EMRMandatoryElement" Elements and check whether value was entered or not for those elements.
//Also validation message will be given as Custom Attribute Value.
// Eg: <input type="text" id="txtRacePage1" EMRMandatoryElement="Please Enter Race" datatype="4" displayname="Race Page1" name="txtRacePage1" >
function PerformMandatoryValidationsForCheckBoxElement() {
    //declaring variables
    //getting all elements having Mandatory attribute
    var elementCollection = $("[emrchkmandatoryelement]").get();
    var systemDefinedMandFields = false;
    var TargetElementId = "";
    var TargetElement = "";



    //loop through each element and check whether data was present or not
    for (var elementIndex = 0; elementIndex < elementCollection.length; elementIndex++) {
        if (hasValue(elementCollection[elementIndex]) && (elementCollection[elementIndex].tagName.toLowerCase() != "input" || elementCollection[elementIndex].type.toLowerCase() != "checkbox")) {
            continue;
        }

        if (hasValue(elementCollection[elementIndex]) && elementCollection[elementIndex].tagName.toLowerCase() == "input" && elementCollection[elementIndex].type.toLowerCase() == "checkbox" && elementCollection[elementIndex].checked == true) {
            TargetElementId = elementCollection[elementIndex].getAttribute("emrchkmandatoryelement")
        }
        //else  {
        //    continue;
        //}

        if (hasValue(TargetElementId)) {
            TargetElement = document.getElementById(TargetElementId);
        }

        //calling function to check whether value was entered or not for element
        if (hasValue(TargetElement) && !CheckValueExistsOrNotInFieldForMandatory(TargetElement)) {
            $("label[for='" + $(elementCollection[elementIndex]).attr('id') + "']").css({
                "background-color": "yellow",
                "color": "red"
            });
            systemDefinedMandFields = true;
        } else {
            $("label[for='" + $(elementCollection[elementIndex]).attr('id') + "']").css({
                "background-color": "white",
                "color": "black"
            });
        }
    }
    return systemDefinedMandFields;
}
//*******************************************************************************************************************************************//
//********************************************* MANDATORY VALIDATIONS FOR CHECKBOX ELEMENT BLOCK END **************************************//
//*******************************************************************************************************************************************//

//*******************************************************************************************************************************************//
//********************************************* CLEAR MANDATORY VALIDATIONS FOR CHECKBOX ELEMENT BLOCK START **************************************//
//*******************************************************************************************************************************************//
//ADDED BY : V.UDAY KIRAN ON 11/07/2015  -- 
//This function verifies for Custom Attribute "EMRMandatoryElement" Elements and check whether value was entered or not for those elements.
//Also validation message will be given as Custom Attribute Value.
// Eg: <input type="text" id="txtRacePage1" EMRMandatoryElement="Please Enter Race" datatype="4" displayname="Race Page1" name="txtRacePage1" >
function ClearMandatoryValidationsForCheckBoxElement() {
    //declaring variables
    //getting all elements having Mandatory attribute
    var elementCollection = $("[emrchkmandatoryelement]").get();
    var TargetElementId = "";
    var TargetElement = "";


    //loop through each element and check whether data was present or not
    for (var elementIndex = 0; elementIndex < elementCollection.length; elementIndex++) {

        if (hasValue(elementCollection[elementIndex]) && elementCollection[elementIndex].tagName.toLowerCase() == "input" && elementCollection[elementIndex].type.toLowerCase() == "checkbox" && elementCollection[elementIndex].checked == true) {
            TargetElementId = elementCollection[elementIndex].getAttribute("emrchkmandatoryelement")
        } else {
            continue;
        }

        if (hasValue(TargetElementId)) {
            TargetElement = document.getElementById(TargetElementId);
        }

        $("label[for='" + $(elementCollection[elementIndex]).attr('id') + "']").css({
            "background-color": "white",
            "color": "black"
        });
    }
}
//*******************************************************************************************************************************************//
//********************************************* CLEAR MANDATORY VALIDATIONS FOR CHECKBOX ELEMENT BLOCK END **************************************//
//*******************************************************************************************************************************************//

//*************************************************************************************** ENABLE / DISABLE TABLE FIELDS BLOCK START ***************************************************************************
//*******PURPOSE: This method is used to enable or disable a field if check box is checked or unchecked.
//**************: Here we are getting all target fields with comma seperated
//*******CREATED BY: UDAY KIRAN V
//*******CREATED DATE: 06/01/2016
//*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function EnableDisableEntireTableIfCheckedUnChecked(chkid, targetFieldIds, blnflag) {

    //validating targt ids exists or not to enable or disable
    if (!hasValue(targetFieldIds) || targetFieldIds.length <= 0) return;

    //trimming the id's
    targetFieldIds = $.trim(targetFieldIds);

    if (targetFieldIds.length <= 0) return;

    //spllitting the items
    var splittedFieldIds = targetFieldIds.split(",");

    //getting checkbox element
    var chkElement = document.getElementById(chkid);

    if (!hasValue(blnflag)) {
        blnflag = true;
    } else if (hasValue(blnflag) && (blnflag != true || blnflag != false)) {
        blnflag = true;
    }

    //validating element and if element is checked then disabling all elements. if not cheked then enabling all elements
    if (hasValue(blnflag) && blnflag == true) {
        if (hasValue(chkElement) && chkElement.tagName.toLowerCase() == "input" && chkElement.type.toLowerCase() == "checkbox" && chkElement.checked == false) {

            for (var i = 0; i < splittedFieldIds.length; i++) {
                if (hasValue(splittedFieldIds[i])) {
                    $("#" + splittedFieldIds[i]).find("input,textarea,select,div").attr("disabled", "disabled");
                    $("#" + splittedFieldIds[i]).find('input,textarea,select,div').val('');
                    $("#" + splittedFieldIds[i]).find('input:checkbox').removeAttr('checked');
                    var elemCollection = $("#" + splittedFieldIds[i]).find("textarea");
                    if (hasValue(elemCollection) && elemCollection.length > 0) {
                        for (var i = 0; i < elemCollection.length; i++) {
                            if (hasValue($(elemCollection[i]).attr("id"))) {
                                autoSizeElement($(elemCollection[i]).attr("id"));
                            }

                        }
                    }
                }
            }
        } else if (hasValue(chkElement) && chkElement.tagName.toLowerCase() == "input" && chkElement.type.toLowerCase() == "checkbox" && chkElement.checked == true) {
            for (var i = 0; i < splittedFieldIds.length; i++) {
                if (hasValue(splittedFieldIds[i])) {
                    $("#" + splittedFieldIds[i]).find("input,textarea,select,div").removeAttr("disabled", "disabled");
                }
            }
        }

    } else {
        if (hasValue(chkElement) && chkElement.tagName.toLowerCase() == "input" && chkElement.type.toLowerCase() == "checkbox" && chkElement.checked == false) {
            for (var i = 0; i < splittedFieldIds.length; i++) {
                if (hasValue(splittedFieldIds[i])) {
                    $("#" + splittedFieldIds[i]).find("input,textarea,select,div").removeAttr("disabled", "disabled");
                }
                //if (hasValue(splittedFieldIds[i])) {
                //    $("#" + splittedFieldIds[i]).find("input,textarea,select,div").attr("disabled", "disabled");
                //    $("#" + splittedFieldIds[i]).find('input,textarea,select,div').val('');
                //    $("#" + splittedFieldIds[i]).find('input:checkbox').removeAttr('checked');
                //}
            }
        } else if (hasValue(chkElement) && chkElement.tagName.toLowerCase() == "input" && chkElement.type.toLowerCase() == "checkbox" && chkElement.checked == true) {
            for (var i = 0; i < splittedFieldIds.length; i++) {
                if (hasValue(splittedFieldIds[i])) {
                    $("#" + splittedFieldIds[i]).find("input,textarea,select,div").attr("disabled", "disabled");
                    $("#" + splittedFieldIds[i]).find('input,textarea,select,div').val('');
                    $("#" + splittedFieldIds[i]).find('input:checkbox').removeAttr('checked');
                    var elemCollection = $("#" + splittedFieldIds[i]).find("textarea");
                    if (hasValue(elemCollection) && elemCollection.length > 0) {
                        for (var i = 0; i < elemCollection.length; i++) {
                            if (hasValue($(elemCollection[i]).attr("id"))) {
                                autoSizeElement($(elemCollection[i]).attr("id"));
                            }
                        }
                    }

                }
                //if (hasValue(splittedFieldIds[i])) {
                //    $("#" + splittedFieldIds[i]).find("input,textarea,select,div").removeAttr("disabled", "disabled");
                //}
            }
        }

    }
    //if (hasValue(chkElement) && chkElement.tagName.toLowerCase() == "input" && chkElement.type.toLowerCase() == "checkbox" && chkElement.checked == false) {
    //    for (var i = 0; i < splittedFieldIds.length; i++) {
    //        if (hasValue(splittedFieldIds[i])) {
    //            $("#" + splittedFieldIds[i]).find("input,textarea,select,div").attr("disabled", "disabled");
    //            $("#" + splittedFieldIds[i]).find('input,textarea,select,div').val('');
    //            $("#" + splittedFieldIds[i]).find('input:checkbox').removeAttr('checked');
    //        }
    //    }
    //}
    //else if (hasValue(chkElement) && chkElement.tagName.toLowerCase() == "input" && chkElement.type.toLowerCase() == "checkbox" && chkElement.checked == true) {
    //    for (var i = 0; i < splittedFieldIds.length; i++) {
    //        if (hasValue(splittedFieldIds[i])) {
    //            $("#" + splittedFieldIds[i]).find("input,textarea,select,div").removeAttr("disabled", "disabled");
    //        }
    //    }
    //}

}
//*************************************************************************************** ENABLE / DISABLE TABLE FIELDS BLOCK END ***************************************************************************




//*************************************************************************************** CHECK ANY OF THE FIELD IS MANDATORY BLOCK START ***************************************************************************
//*******PURPOSE: This method is used to check any of the checkbox is mandatory in table element.
//**************: Here we are getting all target fields with comma seperated
//*******CREATED BY: UDAY KIRAN V
//*******CREATED DATE: 06/01/2016
//*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function CheckAnyOfCheckBoxCheckedInTableElement(tableElementId) {

    //validating targt ids exists or not to enable or disable
    if (!hasValue(tableElementId) || tableElementId.length <= 0) return;

    var elementCollection = $("#" + tableElementId).find('input:checkbox');

    if ($("#" + tableElementId).find("input:checkbox:checked").length <= 0) {
        if (hasValue(elementCollection) && elementCollection.length > 0) {
            for (var i = 0; i < elementCollection.length; i++) {
                if (hasValue(elementCollection[i])) {
                    $("label[for='" + $(elementCollection[i]).attr('id') + "']").css({
                        "background-color": "yellow",
                        "color": "red"
                    });
                }
            }
            return true;
        }
    } else {
        if (hasValue(elementCollection) && elementCollection.length > 0) {
            for (var i = 0; i < elementCollection.length; i++) {
                if (hasValue(elementCollection[i])) {
                    $("label[for='" + $(elementCollection[i]).attr('id') + "']").css({
                        "background-color": "white",
                        "color": "black"
                    });
                }
            }
            return false;
        }
    }

}
//*************************************************************************************** CHECK ANY OF THE FIELD IS MANDATORY BLOCK END ***************************************************************************



//*************************************************************************************** CLEAR ANY OF THE FIELD IS CHECKED BLOCK START ***************************************************************************
//*******PURPOSE: This method is used to clear check any of the checkbox is mandatory in table element.
//*******CREATED BY: UDAY KIRAN V
//*******CREATED DATE: 06/01/2016
//*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function ClearCheckAnyOfCheckBoxCheckedInTableElement(tableElementId) {

    //validating targt ids exists or not to enable or disable
    if (!hasValue(tableElementId) || tableElementId.length <= 0) return;

    var elementCollection = $("#" + tableElementId).find('input:checkbox');

    if (hasValue(elementCollection) && elementCollection.length > 0) {
        for (var i = 0; i < elementCollection.length; i++) {
            if (hasValue(elementCollection[i])) {
                $("label[for='" + $(elementCollection[i]).attr('id') + "']").css({
                    "background-color": "white",
                    "color": "black"
                });
            }
        }
        return false;
    }


}
//*************************************************************************************** CLEAR ANY OF THE FIELD IS CHECKED BLOCK END ***************************************************************************


    var $base64 = {        
        decode : function (s) {
            return decodeURIComponent(escape(window.atob(s)));
        },
        encode :function(s) {
            return window.btoa(unescape(encodeURIComponent(s)));
        }
    };



    //this method is useful in getting the total inner html with scripts of the current html 
 function  htmlTemplatesContainerGetEasyFormsFullHTML() {

       var easyFormHTML = "";//defaults


        var cloneHTML = $("html").clone();

        cloneHTML.find(".textcomplete-dropdown").empty();
        cloneHTML.find(".textcomplete-dropdown").remove();

        cloneHTML.find(".bootStrapMultiSelect").siblings(".open").removeClass("open");
        cloneHTML.find(".chosenMultiSelect").siblings(".chosen-with-drop").removeClass("chosen-with-drop");
        cloneHTML.find(".chosenMultiSelect").siblings(".chosen-container-active").removeClass("chosen-container-active");

        if (cloneHTML.find("body").find("*").length > 0) {

            //$("body")[0].style = bodyDefaultStyle;

            //cloneHTML.find("body").attr("style", "");

            //clearing the added extra styles in run time 
            if (cloneHTML.find("body").length > 0) {
                try {

                    cloneHTML.find("body")[0].style.removeProperty("-moz-transform");
                    cloneHTML.find("body")[0].style.removeProperty("-webkit-transform");
                    cloneHTML.find("body")[0].style.removeProperty("-o-transform");
                    cloneHTML.find("body")[0].style.removeProperty("-ms-transform");
                    cloneHTML.find("body")[0].style.removeProperty("transform");

                    cloneHTML.find("body")[0].style.removeProperty("-moz-transform-origin");
                    cloneHTML.find("body")[0].style.removeProperty("-webkit-transform-origin");
                    cloneHTML.find("body")[0].style.removeProperty("-o-transform-origin");
                    cloneHTML.find("body")[0].style.removeProperty("transform-origin");
                    cloneHTML.find("body")[0].style.removeProperty("min-height");
                } catch (e) {

                }
            }

            //$("body").attr("style", "font-size: 13px");

            // $("body").css(bodyDefaultStyle);

            easyFormHTML = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">";
            easyFormHTML += "<html>";
            easyFormHTML += cloneHTML.html();
            easyFormHTML += "</html>";
        }
        return easyFormHTML;

    }



    //this method is useful in getting the current loaded html string 
function htmlTemplatesContainerGetEasyFormsHTML() {

        var cloneHTML = $("html").clone();

        //clearing the added extra styles in run time 
        if (cloneHTML.find("body").length > 0) {
            try {
                cloneHTML.find("body")[0].style.removeProperty("transform");
                cloneHTML.find("body")[0].style.removeProperty("-moz-transform");
                cloneHTML.find("body")[0].style.removeProperty("-webkit-transform");
                cloneHTML.find("body")[0].style.removeProperty("-o-transform");
                cloneHTML.find("body")[0].style.removeProperty("-ms-transform");
                cloneHTML.find("body")[0].style.removeProperty("transform-origin");
                cloneHTML.find("body")[0].style.removeProperty("-moz-transform-origin");
                cloneHTML.find("body")[0].style.removeProperty("-webkit-transform-origin");
                cloneHTML.find("body")[0].style.removeProperty("-o-transform-origin");
                cloneHTML.find("body")[0].style.removeProperty("min-height");
            } catch (e) {

            }
        }

        cloneHTML.find(".textcomplete-dropdown").empty();
        cloneHTML.find(".textcomplete-dropdown").remove();

        cloneHTML.find(".bootStrapMultiSelect").siblings(".open").removeClass("open");
        cloneHTML.find(".chosenMultiSelect").siblings(".chosen-with-drop").removeClass("chosen-with-drop");
        cloneHTML.find(".chosenMultiSelect").siblings(".chosen-container-active").removeClass("chosen-container-active");

        //$("body").attr("style", "font-size: 13px");

        //if new forms 
        if (htmlTemplatesIsScriptStylesExists) {

            cloneHTML.find("head").remove();//removving the head part since we dont neeed it when styles scripts exists in the db

            //var easyFormHTML = "<body>";
            //easyFormHTML += cloneHTML.find("body").html();
            //easyFormHTML += "</body>";

            return cloneHTML.html();//returning the body part only
        }

            //for old forms
        else {
            var easyFormHTML = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">";
            easyFormHTML += "<html>";
            easyFormHTML += cloneHTML.html();
            easyFormHTML += "</html>";
            return easyFormHTML;
        }


}


    //=============================================================== BIND DATA TO FIELDS - BLOCK START ============================================================================
    //*******PURPOSE: this method is used to bind html fields values to corresponding html fields
    //*******CREATED BY: George D
    //*******CREATED DATE: 27/08/2014
    //*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   function htmlTemplatesBindDataToFields (htmlTemplatesDataList) {

        if (htmlTemplatesDataList == undefined ||htmlTemplatesDataList == null || htmlTemplatesDataList == "") return;
        try {
            htmlTemplatesDataList = JSON.parse(htmlTemplatesDataList);    
        } catch (error) {
            return;
        }
        
        

        var currentItem = null;
        var currentElement = null;
        var isDataExistsForAtleastOnElement = true;
        var FieldName = "";
        var FieldValue = "";
        for (var intFieldIndex = 0; intFieldIndex <= htmlTemplatesDataList.length - 1; intFieldIndex++) {

            try {

                 

                currentItem = htmlTemplatesDataList[intFieldIndex];
                currentElement = $("#" + currentItem.FieldName);

             
                if (currentElement == null || currentElement == undefined) continue;

                 

                //CLEARING THE VARIABLE
                FieldName = "";
                FieldValue = "";

                FieldName = htmlTemplatesDataList[intFieldIndex].FieldName;
                FieldValue = htmlTemplatesDataList[intFieldIndex].FieldValue;

                if (hasValue(FieldValue) && FieldValue.length > 0)
                    isDataExistsForAtleastOnElement = false;

                //Validating the Field Name & Field Value
                if (FieldName.trim().length <= 0 || FieldValue.trim().length <= 0) continue;

  
               htmlPopulateFieldValueOnFieldNameSpecified(FieldName.trim(), FieldValue.trim());                

                //calling the notes formation type 2 script to run
               setAttributesForFieldBasedOnValueWithIDs($(currentElement).attr("id"));

                if (hasValue(currentItem.FieldValue) && currentItem.FieldValue.length > 0)
                    isDataExistsForAtleastOnElement = false;

                //code block for state maintaining
                if (hasValue(currentItem.easyformsstatemaintaindetailsmodel) && hasValue(currentElement)) {

                    var base64ToStore = $base64.encode(JSON.stringify({
                        //optionTypeLinked: optionsData.customOptionsType,
                        fieldValue: currentItem.FieldValue,
                        data: currentItem.easyformsstatemaintaindetailsmodel
                    }));

                    $(currentElement).attr("emrstatemaintaindata", base64ToStore);
                }
                //code block for state maintaining
            }
            catch (err) {
                
            }

        }      
        return isDataExistsForAtleastOnElement;
    }
    //=============================================================== BIND DATA TO FIELDS - BLOCK END ============================================================================



    //################### BIND DATA TO FIELDS FOR EASY FORM TO EASY FORM MAPPED DATA START  #########################
    //*******PURPOSE            : THIS METHOD IS USED TO BIND DATA TO FIELDS FOR EASY FORM TO EASY FORM MAPPED DATA
    //*******CREATED BY         : Balakrishna D
    //*******CREATED DATE       : 27/08/2014
    //*******MODIFIED DEVELOPER : BIND DATA TO FIELDS FOR EASY FORM TO EASY FORM MAPPED DATA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    function  htmlPopulateFieldValueOnFieldNameSpecified (SelectedFieldName, FieldValueToPopulate) {

        
        var currentElement = null;
        var currentFieldTagName = "";
        var FieldType = "";
        var currentItem = null;
        try {            
           
            currentItem = {
                FieldName: SelectedFieldName,
                FieldValue: FieldValueToPopulate
            };


            //GETTING SELECTED ITEM FROM CONTAINER
            currentElement = $("#" + currentItem.FieldName);

            if (currentElement == null || currentElement == undefined) return;

            currentFieldTagName = currentElement.prop('tagName')

            //for text area we are replacing tags
            if (currentFieldTagName.toString().toLowerCase() == "textarea") {

                currentItem.FieldValue = currentItem.FieldValue.replace(/\^\~\^/gi, "\n");

                currentItem.FieldValue = currentItem.FieldValue.replace(/<table>/gi, "");
                currentItem.FieldValue = currentItem.FieldValue.replace(/<\/table>/gi, "");
                currentItem.FieldValue = currentItem.FieldValue.replace(/<td>"/gi, "");
                currentItem.FieldValue = currentItem.FieldValue.replace(/<\/td>"/gi, "");
                currentItem.FieldValue = currentItem.FieldValue.replace(/<tr>"/gi, "");
                currentItem.FieldValue = currentItem.FieldValue.replace(/<p>/gi, "");
                currentItem.FieldValue = currentItem.FieldValue.replace(/<b>/gi, "");
                currentItem.FieldValue = currentItem.FieldValue.replace(/<\/b>/gi, "");
                currentItem.FieldValue = currentItem.FieldValue.replace(/<\/tr>/gi, "\n");
                currentItem.FieldValue = currentItem.FieldValue.replace(/<\/p>/gi, "\n");
                currentItem.FieldValue = currentItem.FieldValue.replace(/<br\/>/gi, "\n");
                currentItem.FieldValue = currentItem.FieldValue.replace(/<br \/>/gi, "\n");
                /// var text = $(currentItem.FieldValue).text(); //jquery to get text from tags. but if it contains only text without tags then we get empty string
                // currentElement.val(text);

                if (hasValue(currentItem.FieldValue) && currentItem.FieldValue.length > 0) {
                    currentElement.val(currentItem.FieldValue);
                    $(currentElement).trigger("input");//for prblm list                    
                }
                else { //IF NO VALUE PRESENT IN THE AUTO POPULATION WE ARE ASSIGINING UNDEFINED TO THE VALUE
                    currentItem.FieldValue = undefined;
                    currentElement.val(currentItem.FieldValue);
                }
                autoSize(currentElement[0]);
                return;
            }
            else if (currentFieldTagName.toString().toLowerCase() == "img") {
                if (hasValue(currentItem.FieldValue) && currentItem.FieldValue.length > 10) {
                    currentElement.attr("src", currentItem.FieldValue);//setting the signature
                }
            }
            else if (currentFieldTagName.toString().toLowerCase() == "div") {
                if (hasValue(currentItem.FieldValue)) {
                    // currentItem.FieldValue = currentItem.FieldValue.replace("\n", "<br>");
                    currentItem.FieldValue = currentItem.FieldValue.replace(/\^\~\^/gi, "\n");
                    currentElement[0].innerHTML = currentItem.FieldValue;//setting the div innerHTMl
                    $(currentElement).css({ "height": $(currentElement).height() + "px" });
                }
            }
            else if (currentFieldTagName.toString().toLowerCase() == "select") {

               EasyFormsSetDropDownListValue(currentElement, currentItem);

                //currentElement.val(currentItem.FieldValue);
                //$(currentElement).trigger("input");
                return;
            }
            else {
                FieldType = currentElement.attr('type');

                if (FieldType == undefined) return;

                switch (FieldType.toString().toLowerCase()) {
                    case "text":
                        currentItem.FieldValue = currentItem.FieldValue.replace(/\^\~\^/gi, "; ");
                        $(currentElement).val(currentItem.FieldValue);
                        //currentElement.attr('value', currentItem.FieldValue);
                        break;
                    case "select":
                       EasyFormsSetDropDownListValue(currentElement, currentItem);
                        //currentElement.attr('value', currentItem.FieldValue);
                        //$(currentElement).val(currentItem.FieldValue);
                        break;
                        //case "textarea":
                        //    currentElement.val(currentItem.FieldValue);
                    case "checkbox":
                    case "radio":
                        if (hasValue(currentItem.FieldValue)) {
                            if (currentItem.FieldValue.toUpperCase() == "FALSE") {
                                currentElement.prop('checked', false);
                            }
                            else {
                                currentElement.prop('checked', true);
                                DeselectAlltheCheckBoxORRadio(currentElement[0]);
                            }
                        }
                        break;
                    default:
                        // currentElement.attr('value', currentItem.FieldValue);
                        $(currentElement).val(currentItem.FieldValue);
                        autoSize(currentElement);
                        $(currentElement).trigger("input");//for prblm list 
                        break;
                }
            }
           setAttributesForFieldBasedOnValueWithIDs($(currentElement).attr("id"));
            $(currentElement).focus();
        }
        catch (err) {
        }
       
    }
    //################### BIND DATA TO FIELDS FOR EASY FORM TO EASY FORM MAPPED DATA END  #########################


            //this method is useful in setting the value for the dropd own list item in the eassy form
    function EasyFormsSetDropDownListValue (currentElement, currentItem) {


            if (!hasValue(currentElement) || !hasValue(currentItem)) return;

            //first cheking whether the current element is multi select or not
            if ($(currentElement).length > 0 && currentElement[0].hasAttribute("multiple") && hasValue(currentElement[0].multiple) && currentElement[0].multiple) {

                if (!hasValue(currentItem.FieldValue)) return;

               //getting the iframe window instance
                var contentWindowIframe = window;

                //checking for the iframe window instance
                if (!hasValue(contentWindowIframe)) return;

                //checking whether the child iframe window jQuery is availiable or not
                if (hasValue(contentWindowIframe.$) && typeof contentWindowIframe.$ == "function") {

                    //getting the iframe window jQuery instnace
                    var contentWindowIframejQuery = contentWindowIframe.$;

                    if ($(currentElement).length > 0 && currentElement[0].hasAttribute("multiple") && hasValue(currentElement[0].multiple) && currentElement[0].multiple) {

                        if ($(currentElement).hasClass('chosenMultiSelect')) {

                            if (hasValue($(currentElement).siblings("div.chosen-container").attr("id"))) {

                                if ($(currentElement).attr("id") + "_chosen" == $(currentElement).siblings("div.chosen-container").attr("id")) {

                                    //setting the value to the ddl
                                    $(currentElement).val(currentItem.FieldValue.split(","));

                                    //triggering the chsoen update event since the value we've set dynamically 
                                    contentWindowIframe.$(currentElement).chosen().trigger("chosen:updated");
                                }
                                    //single select ddl
                                else {
                                    currentElement.val(currentItem.FieldValue);
                                    $(currentElement).trigger("input");
                                }

                            }
                                //single select ddl
                            else {
                                currentElement.val(currentItem.FieldValue);
                                $(currentElement).trigger("input");
                            }


                        }
                            //checking whether select ddl is boot strap multi select or not
                        else if ($(currentElement).hasClass('bootStrapMultiSelect')) {

                            if (hasValue($(currentElement).siblings("div.multiselectdropdown").attr("id"))) {

                                if ($(currentElement).attr("id") + "_multiselectdropdown" == $(currentElement).siblings("div.multiselectdropdown").attr("id")) {

                                    ////getting the boot strap multi select values
                                    var currentMultiSelectInstance = contentWindowIframejQuery.data($(currentElement)[0], 'multiselect');

                                    //first setting the value to the original ddl 
                                    currentElement.val(currentItem.FieldValue.split(","));

                                    if (hasValue(currentMultiSelectInstance)) {
                                        //setting the value to the boot strap multi select
                                        currentMultiSelectInstance.select(currentItem.FieldValue.split(","), true);
                                    }
                                        //single select ddl
                                    else {
                                        currentElement.val(currentItem.FieldValue);
                                        $(currentElement).trigger("input");
                                    }

                                }

                                    //single select ddl
                                else {
                                    currentElement.val(currentItem.FieldValue);
                                    $(currentElement).trigger("input");
                                }
                            }

                                //single select ddl
                            else {
                                currentElement.val(currentItem.FieldValue);
                                $(currentElement).trigger("input");
                            }

                        }
                            //single select ddl or any one of the multi select ddl
                        else {
                            currentElement.val(currentItem.FieldValue);
                            $(currentElement).trigger("input");
                        }
                    }

                        //single select ddl
                    else {
                        currentElement.val(currentItem.FieldValue);
                        $(currentElement).trigger("input");
                    }
                }

                    //single select ddl
                else {
                    currentElement.val(currentItem.FieldValue);
                    $(currentElement).trigger("input");
                }
            }
                //single select ddl
            else {
                if (hasValue(currentItem.FieldValue)) {
                    currentElement.val(currentItem.FieldValue);
                    $(currentElement).trigger("input");
                }
            }

}



    //################### BIND DATA TO FIELDS FOR EASY FORM TO EASY FORM MAPPED DATA START  #########################
    //*******PURPOSE            : THIS METHOD IS USED TO BIND DATA TO FIELDS FOR EASY FORM TO EASY FORM MAPPED DATA
    //*******CREATED BY         : Balakrishna D
    //*******CREATED DATE       : 27/08/2014
    //*******MODIFIED DEVELOPER : BIND DATA TO FIELDS FOR EASY FORM TO EASY FORM MAPPED DATA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function htmlTemplatesBindDataToFieldsForEasyFormToEasyFormMappedData (serviceResponse) {

        //ASSIGING THE SERVICE RESPONSE
        var htmlTemplatesEasyFormToEasyFormMappedData = serviceResponse;

        if (htmlTemplatesEasyFormToEasyFormMappedData == undefined || htmlTemplatesEasyFormToEasyFormMappedData == null || htmlTemplatesEasyFormToEasyFormMappedData == "") return;


        try {
            htmlTemplatesEasyFormToEasyFormMappedData = JSON.parse(htmlTemplatesEasyFormToEasyFormMappedData);    
        } catch (error) {
            return;
        }
        

        var currentItem = null;
        var currentElement = null;
        var currentFieldTagName = "";
        var FieldType = "";
        var isDataExistsForAtleastOnElement = true;

        for (var intFieldIndex = 0; intFieldIndex <= htmlTemplatesEasyFormToEasyFormMappedData.length - 1; intFieldIndex++) {

            try {
                currentItem = htmlTemplatesEasyFormToEasyFormMappedData[intFieldIndex];
                currentElement = $("#" + currentItem.FieldName);

                if (currentElement == null || currentElement == undefined) continue;

                if (hasValue(currentItem.FieldValue) && currentItem.FieldValue.length > 0)
                    isDataExistsForAtleastOnElement = false;

                currentFieldTagName = currentElement.prop('tagName')

                //for text area we are replacing tags
                if (currentFieldTagName.toString().toLowerCase() == "textarea") {

                    currentItem.FieldValue = currentItem.FieldValue.replace(/<table>/gi, "");
                    currentItem.FieldValue = currentItem.FieldValue.replace(/<\/table>/gi, "");
                    currentItem.FieldValue = currentItem.FieldValue.replace(/<td>"/gi, "");
                    currentItem.FieldValue = currentItem.FieldValue.replace(/<\/td>"/gi, "");
                    currentItem.FieldValue = currentItem.FieldValue.replace(/<tr>"/gi, "");
                    currentItem.FieldValue = currentItem.FieldValue.replace(/<p>/gi, "");
                    currentItem.FieldValue = currentItem.FieldValue.replace(/<b>/gi, "");
                    currentItem.FieldValue = currentItem.FieldValue.replace(/<\/b>/gi, "");
                    currentItem.FieldValue = currentItem.FieldValue.replace(/<\/tr>/gi, "\n");
                    currentItem.FieldValue = currentItem.FieldValue.replace(/<\/p>/gi, "\n");
                    currentItem.FieldValue = currentItem.FieldValue.replace(/<br\/>/gi, "\n");
                    currentItem.FieldValue = currentItem.FieldValue.replace(/<br \/>/gi, "\n");
                    /// var text = $(currentItem.FieldValue).text(); //jquery to get text from tags. but if it contains only text without tags then we get empty string
                    // currentElement.val(text);
                    if (hasValue(currentItem.FieldValue) && currentItem.FieldValue.length > 0) {
                        currentElement.val(currentItem.FieldValue);
                        $(currentElement).trigger("input");//for prblm list
                    }
                    else {
                        currentItem.FieldValue = undefined;
                        currentElement.val(currentItem.FieldValue);
                    }
                    autoSize(currentElement);
                    continue;
                }
                else if (currentFieldTagName.toString().toLowerCase() == "img") {
                    if (hasValue(currentItem.FieldValue) && currentItem.FieldValue.length > 10) {
                        currentElement.attr("src", currentItem.FieldValue);//setting the signature
                    }
                }
                else if (currentFieldTagName.toString().toLowerCase() == "div") {
                    if (hasValue(currentItem.FieldValue)) {
                        // currentItem.FieldValue = currentItem.FieldValue.replace("\n", "<br>");
                        currentElement[0].innerHTML = currentItem.FieldValue;//setting the div innerHTMl
                        $(currentElement).css({ "height": $(currentElement).height() + "px" });
                    }
                }
                else if (currentFieldTagName.toString().toLowerCase() == "select") {
                    EasyFormsSetDropDownListValue(currentElement, currentItem);
                    //currentElement.val(currentItem.FieldValue);
                    //$(currentElement).trigger("input");
                    continue;
                }
                else {
                    FieldType = currentElement.attr('type');

                    if (FieldType == undefined) continue;

                    switch (FieldType.toString().toLowerCase()) {
                        case "text": //select patient window
                            //currentElement.attr('value', currentItem.FieldValue);
                            if (hasValue(currentItem.FieldValue) && currentItem.FieldValue.length > 0) {
                                $(currentElement).val(currentItem.FieldValue);
                            }
                            else {
                                currentItem.FieldValue = undefined;
                                currentElement.val(currentItem.FieldValue);
                            }
                            break;
                        case "select":
                            EasyFormsSetDropDownListValue(currentElement, currentItem);
                            //currentElement.attr('value', currentItem.FieldValue);
                            //$(currentElement).val(currentItem.FieldValue);
                            break;
                            //case "textarea":
                            //    currentElement.val(currentItem.FieldValue);
                        case "checkbox":
                        case "radio":
                            if (hasValue(currentItem.FieldValue)) {
                                if (currentItem.FieldValue.toUpperCase() == "FALSE") {
                                    currentElement.prop('checked', false);
                                }
                                else {
                                    currentElement.prop('checked', true);
                                   thisDeselectAlltheCheckBoxORRadio(currentElement[0]);
                                }

                            }
                            break;
                        default:
                            //currentElement.attr('value', currentItem.FieldValue);
                            $(currentElement).val(currentItem.FieldValue);
                            autoSize(currentElement);
                            $(currentElement).trigger("input");//for prblm list 
                            break;
                    }
                }



            }
            catch (err) {
            }
            setAttributesForFieldBasedOnValueWithIDs($(currentElement).attr("id"));
        }
      
        return isDataExistsForAtleastOnElement;
}
    //################### BIND DATA TO FIELDS FOR EASY FORM TO EASY FORM MAPPED DATA END  #########################