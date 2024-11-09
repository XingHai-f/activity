function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty2(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty2(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (global2, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined" ? module.exports = factory(require("react/jsx-runtime"), require("react")) : typeof define === "function" && define.amd ? define(["react/jsx-runtime", "react"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.EvaLayoutContainer = factory(global2.jsxRuntime, global2.React));
})(this, function (jsxRuntime, react) {
  "use strict";

  var __defProp = Object.defineProperty;
  var __defNormalProp = function __defNormalProp(obj, key, value) {
    return key in obj ? __defProp(obj, key, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: value
    }) : obj[key] = value;
  };
  var __publicField = function __publicField(obj, key, value) {
    __defNormalProp(obj, _typeof(key) !== "symbol" ? key + "" : key, value);
    return value;
  };
  var layoutContainerRoot = "_layoutContainerRoot_1wi3y_1";
  var layoutBackground = "_layoutBackground_1wi3y_6";
  var layoutContainer = "_layoutContainer_1wi3y_1";
  var styles = {
    layoutContainerRoot: layoutContainerRoot,
    layoutBackground: layoutBackground,
    layoutContainer: layoutContainer
  };
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  function listCacheClear$1() {
    this.__data__ = [];
    this.size = 0;
  }
  var _listCacheClear = listCacheClear$1;
  function eq$4(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_1 = eq$4;
  var eq$3 = eq_1;
  function assocIndexOf$4(array, key) {
    var length = array.length;
    while (length--) {
      if (eq$3(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  var _assocIndexOf = assocIndexOf$4;
  var assocIndexOf$3 = _assocIndexOf;
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete$1(key) {
    var data = this.__data__,
      index = assocIndexOf$3(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  var _listCacheDelete = listCacheDelete$1;
  var assocIndexOf$2 = _assocIndexOf;
  function listCacheGet$1(key) {
    var data = this.__data__,
      index = assocIndexOf$2(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  var _listCacheGet = listCacheGet$1;
  var assocIndexOf$1 = _assocIndexOf;
  function listCacheHas$1(key) {
    return assocIndexOf$1(this.__data__, key) > -1;
  }
  var _listCacheHas = listCacheHas$1;
  var assocIndexOf = _assocIndexOf;
  function listCacheSet$1(key, value) {
    var data = this.__data__,
      index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  var _listCacheSet = listCacheSet$1;
  var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet;
  function ListCache$4(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache$4.prototype.clear = listCacheClear;
  ListCache$4.prototype["delete"] = listCacheDelete;
  ListCache$4.prototype.get = listCacheGet;
  ListCache$4.prototype.has = listCacheHas;
  ListCache$4.prototype.set = listCacheSet;
  var _ListCache = ListCache$4;
  var ListCache$3 = _ListCache;
  function stackClear$1() {
    this.__data__ = new ListCache$3();
    this.size = 0;
  }
  var _stackClear = stackClear$1;
  function stackDelete$1(key) {
    var data = this.__data__,
      result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  var _stackDelete = stackDelete$1;
  function stackGet$1(key) {
    return this.__data__.get(key);
  }
  var _stackGet = stackGet$1;
  function stackHas$1(key) {
    return this.__data__.has(key);
  }
  var _stackHas = stackHas$1;
  var freeGlobal$1 = _typeof(commonjsGlobal) == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var _freeGlobal = freeGlobal$1;
  var freeGlobal = _freeGlobal;
  var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self;
  var root$8 = freeGlobal || freeSelf || Function("return this")();
  var _root = root$8;
  var root$7 = _root;
  var Symbol$6 = root$7.Symbol;
  var _Symbol = Symbol$6;
  var Symbol$5 = _Symbol;
  var objectProto$d = Object.prototype;
  var hasOwnProperty$a = objectProto$d.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$d.toString;
  var symToStringTag$1 = Symbol$5 ? Symbol$5.toStringTag : void 0;
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$a.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var _getRawTag = getRawTag$1;
  var objectProto$c = Object.prototype;
  var nativeObjectToString = objectProto$c.toString;
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }
  var _objectToString = objectToString$1;
  var Symbol$4 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;
  var nullTag = "[object Null]",
    undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol$4 ? Symbol$4.toStringTag : void 0;
  function baseGetTag$6(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  var _baseGetTag = baseGetTag$6;
  function isObject$a(value) {
    var type = _typeof(value);
    return value != null && (type == "object" || type == "function");
  }
  var isObject_1 = isObject$a;
  var baseGetTag$5 = _baseGetTag,
    isObject$9 = isObject_1;
  var asyncTag = "[object AsyncFunction]",
    funcTag$2 = "[object Function]",
    genTag$1 = "[object GeneratorFunction]",
    proxyTag = "[object Proxy]";
  function isFunction$3(value) {
    if (!isObject$9(value)) {
      return false;
    }
    var tag = baseGetTag$5(value);
    return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_1 = isFunction$3;
  var root$6 = _root;
  var coreJsData$1 = root$6["__core-js_shared__"];
  var _coreJsData = coreJsData$1;
  var coreJsData = _coreJsData;
  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked$1(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var _isMasked = isMasked$1;
  var funcProto$2 = Function.prototype;
  var funcToString$2 = funcProto$2.toString;
  function toSource$2(func) {
    if (func != null) {
      try {
        return funcToString$2.call(func);
      } catch (e) {}
      try {
        return func + "";
      } catch (e) {}
    }
    return "";
  }
  var _toSource = toSource$2;
  var isFunction$2 = isFunction_1,
    isMasked = _isMasked,
    isObject$8 = isObject_1,
    toSource$1 = _toSource;
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto$1 = Function.prototype,
    objectProto$b = Object.prototype;
  var funcToString$1 = funcProto$1.toString;
  var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
  var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$9).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function baseIsNative$1(value) {
    if (!isObject$8(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource$1(value));
  }
  var _baseIsNative = baseIsNative$1;
  function getValue$1(object, key) {
    return object == null ? void 0 : object[key];
  }
  var _getValue = getValue$1;
  var baseIsNative = _baseIsNative,
    getValue = _getValue;
  function getNative$7(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  var _getNative = getNative$7;
  var getNative$6 = _getNative,
    root$5 = _root;
  var Map$3 = getNative$6(root$5, "Map");
  var _Map = Map$3;
  var getNative$5 = _getNative;
  var nativeCreate$4 = getNative$5(Object, "create");
  var _nativeCreate = nativeCreate$4;
  var nativeCreate$3 = _nativeCreate;
  function hashClear$1() {
    this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
    this.size = 0;
  }
  var _hashClear = hashClear$1;
  function hashDelete$1(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var _hashDelete = hashDelete$1;
  var nativeCreate$2 = _nativeCreate;
  var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
  var objectProto$a = Object.prototype;
  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
  function hashGet$1(key) {
    var data = this.__data__;
    if (nativeCreate$2) {
      var result = data[key];
      return result === HASH_UNDEFINED$1 ? void 0 : result;
    }
    return hasOwnProperty$8.call(data, key) ? data[key] : void 0;
  }
  var _hashGet = hashGet$1;
  var nativeCreate$1 = _nativeCreate;
  var objectProto$9 = Object.prototype;
  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
  function hashHas$1(key) {
    var data = this.__data__;
    return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$7.call(data, key);
  }
  var _hashHas = hashHas$1;
  var nativeCreate = _nativeCreate;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function hashSet$1(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  var _hashSet = hashSet$1;
  var hashClear = _hashClear,
    hashDelete = _hashDelete,
    hashGet = _hashGet,
    hashHas = _hashHas,
    hashSet = _hashSet;
  function Hash$1(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  Hash$1.prototype.clear = hashClear;
  Hash$1.prototype["delete"] = hashDelete;
  Hash$1.prototype.get = hashGet;
  Hash$1.prototype.has = hashHas;
  Hash$1.prototype.set = hashSet;
  var _Hash = Hash$1;
  var Hash = _Hash,
    ListCache$2 = _ListCache,
    Map$2 = _Map;
  function mapCacheClear$1() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map$2 || ListCache$2)(),
      "string": new Hash()
    };
  }
  var _mapCacheClear = mapCacheClear$1;
  function isKeyable$1(value) {
    var type = _typeof(value);
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  var _isKeyable = isKeyable$1;
  var isKeyable = _isKeyable;
  function getMapData$4(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  var _getMapData = getMapData$4;
  var getMapData$3 = _getMapData;
  function mapCacheDelete$1(key) {
    var result = getMapData$3(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  var _mapCacheDelete = mapCacheDelete$1;
  var getMapData$2 = _getMapData;
  function mapCacheGet$1(key) {
    return getMapData$2(this, key).get(key);
  }
  var _mapCacheGet = mapCacheGet$1;
  var getMapData$1 = _getMapData;
  function mapCacheHas$1(key) {
    return getMapData$1(this, key).has(key);
  }
  var _mapCacheHas = mapCacheHas$1;
  var getMapData = _getMapData;
  function mapCacheSet$1(key, value) {
    var data = getMapData(this, key),
      size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  var _mapCacheSet = mapCacheSet$1;
  var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet;
  function MapCache$2(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache$2.prototype.clear = mapCacheClear;
  MapCache$2.prototype["delete"] = mapCacheDelete;
  MapCache$2.prototype.get = mapCacheGet;
  MapCache$2.prototype.has = mapCacheHas;
  MapCache$2.prototype.set = mapCacheSet;
  var _MapCache = MapCache$2;
  var ListCache$1 = _ListCache,
    Map$1 = _Map,
    MapCache$1 = _MapCache;
  var LARGE_ARRAY_SIZE = 200;
  function stackSet$1(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache$1) {
      var pairs = data.__data__;
      if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache$1(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  var _stackSet = stackSet$1;
  var ListCache = _ListCache,
    stackClear = _stackClear,
    stackDelete = _stackDelete,
    stackGet = _stackGet,
    stackHas = _stackHas,
    stackSet = _stackSet;
  function Stack$2(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  Stack$2.prototype.clear = stackClear;
  Stack$2.prototype["delete"] = stackDelete;
  Stack$2.prototype.get = stackGet;
  Stack$2.prototype.has = stackHas;
  Stack$2.prototype.set = stackSet;
  var _Stack = Stack$2;
  var getNative$4 = _getNative;
  var defineProperty$2 = function () {
    try {
      var func = getNative$4(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {}
  }();
  var _defineProperty = defineProperty$2;
  var defineProperty$1 = _defineProperty;
  function baseAssignValue$3(object, key, value) {
    if (key == "__proto__" && defineProperty$1) {
      defineProperty$1(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object[key] = value;
    }
  }
  var _baseAssignValue = baseAssignValue$3;
  var baseAssignValue$2 = _baseAssignValue,
    eq$2 = eq_1;
  function assignMergeValue$2(object, key, value) {
    if (value !== void 0 && !eq$2(object[key], value) || value === void 0 && !(key in object)) {
      baseAssignValue$2(object, key, value);
    }
  }
  var _assignMergeValue = assignMergeValue$2;
  function createBaseFor$1(fromRight) {
    return function (object, iteratee, keysFunc) {
      var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  var _createBaseFor = createBaseFor$1;
  var createBaseFor = _createBaseFor;
  var baseFor$1 = createBaseFor();
  var _baseFor = baseFor$1;
  var _cloneBuffer = {
    exports: {}
  };
  _cloneBuffer.exports;
  (function (module2, exports2) {
    var root2 = _root;
    var freeExports = exports2 && !exports2.nodeType && exports2;
    var freeModule = freeExports && true && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root2.Buffer : void 0,
      allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer2(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module2.exports = cloneBuffer2;
  })(_cloneBuffer, _cloneBuffer.exports);
  var _cloneBufferExports = _cloneBuffer.exports;
  var root$4 = _root;
  var Uint8Array$2 = root$4.Uint8Array;
  var _Uint8Array = Uint8Array$2;
  var Uint8Array$1 = _Uint8Array;
  function cloneArrayBuffer$3(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
    return result;
  }
  var _cloneArrayBuffer = cloneArrayBuffer$3;
  var cloneArrayBuffer$2 = _cloneArrayBuffer;
  function cloneTypedArray$2(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$2(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  var _cloneTypedArray = cloneTypedArray$2;
  function copyArray$2(source, array) {
    var index = -1,
      length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  var _copyArray = copyArray$2;
  var isObject$7 = isObject_1;
  var objectCreate = Object.create;
  var baseCreate$1 = function () {
    function object() {}
    return function (proto) {
      if (!isObject$7(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  }();
  var _baseCreate = baseCreate$1;
  function overArg$2(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }
  var _overArg = overArg$2;
  var overArg$1 = _overArg;
  var getPrototype$3 = overArg$1(Object.getPrototypeOf, Object);
  var _getPrototype = getPrototype$3;
  var objectProto$8 = Object.prototype;
  function isPrototype$3(value) {
    var Ctor = value && value.constructor,
      proto = typeof Ctor == "function" && Ctor.prototype || objectProto$8;
    return value === proto;
  }
  var _isPrototype = isPrototype$3;
  var baseCreate = _baseCreate,
    getPrototype$2 = _getPrototype,
    isPrototype$2 = _isPrototype;
  function initCloneObject$2(object) {
    return typeof object.constructor == "function" && !isPrototype$2(object) ? baseCreate(getPrototype$2(object)) : {};
  }
  var _initCloneObject = initCloneObject$2;
  function isObjectLike$8(value) {
    return value != null && _typeof(value) == "object";
  }
  var isObjectLike_1 = isObjectLike$8;
  var baseGetTag$4 = _baseGetTag,
    isObjectLike$7 = isObjectLike_1;
  var argsTag$2 = "[object Arguments]";
  function baseIsArguments$1(value) {
    return isObjectLike$7(value) && baseGetTag$4(value) == argsTag$2;
  }
  var _baseIsArguments = baseIsArguments$1;
  var baseIsArguments = _baseIsArguments,
    isObjectLike$6 = isObjectLike_1;
  var objectProto$7 = Object.prototype;
  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
  var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;
  var isArguments$4 = baseIsArguments(function () {
    return arguments;
  }()) ? baseIsArguments : function (value) {
    return isObjectLike$6(value) && hasOwnProperty$6.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
  };
  var isArguments_1 = isArguments$4;
  var isArray$a = Array.isArray;
  var isArray_1 = isArray$a;
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  function isLength$3(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
  }
  var isLength_1 = isLength$3;
  var isFunction$1 = isFunction_1,
    isLength$2 = isLength_1;
  function isArrayLike$4(value) {
    return value != null && isLength$2(value.length) && !isFunction$1(value);
  }
  var isArrayLike_1 = isArrayLike$4;
  var isArrayLike$3 = isArrayLike_1,
    isObjectLike$5 = isObjectLike_1;
  function isArrayLikeObject$1(value) {
    return isObjectLike$5(value) && isArrayLike$3(value);
  }
  var isArrayLikeObject_1 = isArrayLikeObject$1;
  var isBuffer$3 = {
    exports: {}
  };
  function stubFalse() {
    return false;
  }
  var stubFalse_1 = stubFalse;
  isBuffer$3.exports;
  (function (module2, exports2) {
    var root2 = _root,
      stubFalse2 = stubFalse_1;
    var freeExports = exports2 && !exports2.nodeType && exports2;
    var freeModule = freeExports && true && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root2.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer2 = nativeIsBuffer || stubFalse2;
    module2.exports = isBuffer2;
  })(isBuffer$3, isBuffer$3.exports);
  var isBufferExports = isBuffer$3.exports;
  var baseGetTag$3 = _baseGetTag,
    getPrototype$1 = _getPrototype,
    isObjectLike$4 = isObjectLike_1;
  var objectTag$3 = "[object Object]";
  var funcProto = Function.prototype,
    objectProto$6 = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);
  function isPlainObject$2(value) {
    if (!isObjectLike$4(value) || baseGetTag$3(value) != objectTag$3) {
      return false;
    }
    var proto = getPrototype$1(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$5.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  var isPlainObject_1 = isPlainObject$2;
  var baseGetTag$2 = _baseGetTag,
    isLength$1 = isLength_1,
    isObjectLike$3 = isObjectLike_1;
  var argsTag$1 = "[object Arguments]",
    arrayTag$1 = "[object Array]",
    boolTag$2 = "[object Boolean]",
    dateTag$2 = "[object Date]",
    errorTag$1 = "[object Error]",
    funcTag$1 = "[object Function]",
    mapTag$4 = "[object Map]",
    numberTag$2 = "[object Number]",
    objectTag$2 = "[object Object]",
    regexpTag$2 = "[object RegExp]",
    setTag$4 = "[object Set]",
    stringTag$2 = "[object String]",
    weakMapTag$2 = "[object WeakMap]";
  var arrayBufferTag$2 = "[object ArrayBuffer]",
    dataViewTag$3 = "[object DataView]",
    float32Tag$2 = "[object Float32Array]",
    float64Tag$2 = "[object Float64Array]",
    int8Tag$2 = "[object Int8Array]",
    int16Tag$2 = "[object Int16Array]",
    int32Tag$2 = "[object Int32Array]",
    uint8Tag$2 = "[object Uint8Array]",
    uint8ClampedTag$2 = "[object Uint8ClampedArray]",
    uint16Tag$2 = "[object Uint16Array]",
    uint32Tag$2 = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
  function baseIsTypedArray$1(value) {
    return isObjectLike$3(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$2(value)];
  }
  var _baseIsTypedArray = baseIsTypedArray$1;
  function baseUnary$3(func) {
    return function (value) {
      return func(value);
    };
  }
  var _baseUnary = baseUnary$3;
  var _nodeUtil = {
    exports: {}
  };
  _nodeUtil.exports;
  (function (module2, exports2) {
    var freeGlobal2 = _freeGlobal;
    var freeExports = exports2 && !exports2.nodeType && exports2;
    var freeModule = freeExports && true && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal2.process;
    var nodeUtil2 = function () {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {}
    }();
    module2.exports = nodeUtil2;
  })(_nodeUtil, _nodeUtil.exports);
  var _nodeUtilExports = _nodeUtil.exports;
  var baseIsTypedArray = _baseIsTypedArray,
    baseUnary$2 = _baseUnary,
    nodeUtil$2 = _nodeUtilExports;
  var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
  var isTypedArray$2 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;
  var isTypedArray_1 = isTypedArray$2;
  function safeGet$2(object, key) {
    if (key === "constructor" && typeof object[key] === "function") {
      return;
    }
    if (key == "__proto__") {
      return;
    }
    return object[key];
  }
  var _safeGet = safeGet$2;
  var baseAssignValue$1 = _baseAssignValue,
    eq$1 = eq_1;
  var objectProto$5 = Object.prototype;
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
  function assignValue$3(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$4.call(object, key) && eq$1(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue$1(object, key, value);
    }
  }
  var _assignValue = assignValue$3;
  var assignValue$2 = _assignValue,
    baseAssignValue = _baseAssignValue;
  function copyObject$6(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1,
      length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue$2(object, key, newValue);
      }
    }
    return object;
  }
  var _copyObject = copyObject$6;
  function baseTimes$1(n, iteratee) {
    var index = -1,
      result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  var _baseTimes = baseTimes$1;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex$4(value, length) {
    var type = _typeof(value);
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }
  var _isIndex = isIndex$4;
  var baseTimes = _baseTimes,
    isArguments$3 = isArguments_1,
    isArray$9 = isArray_1,
    isBuffer$2 = isBufferExports,
    isIndex$3 = _isIndex,
    isTypedArray$1 = isTypedArray_1;
  var objectProto$4 = Object.prototype;
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
  function arrayLikeKeys$2(value, inherited) {
    var isArr = isArray$9(value),
      isArg = !isArr && isArguments$3(value),
      isBuff = !isArr && !isArg && isBuffer$2(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && (
      // Safari 9 has enumerable `arguments.length` in strict mode.
      key == "length" ||
      // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") ||
      // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") ||
      // Skip index properties.
      isIndex$3(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  var _arrayLikeKeys = arrayLikeKeys$2;
  function nativeKeysIn$1(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  var _nativeKeysIn = nativeKeysIn$1;
  var isObject$6 = isObject_1,
    isPrototype$1 = _isPrototype,
    nativeKeysIn = _nativeKeysIn;
  var objectProto$3 = Object.prototype;
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
  function baseKeysIn$1(object) {
    if (!isObject$6(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype$1(object),
      result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty$2.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  var _baseKeysIn = baseKeysIn$1;
  var arrayLikeKeys$1 = _arrayLikeKeys,
    baseKeysIn = _baseKeysIn,
    isArrayLike$2 = isArrayLike_1;
  function keysIn$5(object) {
    return isArrayLike$2(object) ? arrayLikeKeys$1(object, true) : baseKeysIn(object);
  }
  var keysIn_1 = keysIn$5;
  var copyObject$5 = _copyObject,
    keysIn$4 = keysIn_1;
  function toPlainObject$1(value) {
    return copyObject$5(value, keysIn$4(value));
  }
  var toPlainObject_1 = toPlainObject$1;
  var assignMergeValue$1 = _assignMergeValue,
    cloneBuffer$1 = _cloneBufferExports,
    cloneTypedArray$1 = _cloneTypedArray,
    copyArray$1 = _copyArray,
    initCloneObject$1 = _initCloneObject,
    isArguments$2 = isArguments_1,
    isArray$8 = isArray_1,
    isArrayLikeObject = isArrayLikeObject_1,
    isBuffer$1 = isBufferExports,
    isFunction = isFunction_1,
    isObject$5 = isObject_1,
    isPlainObject$1 = isPlainObject_1,
    isTypedArray = isTypedArray_1,
    safeGet$1 = _safeGet,
    toPlainObject = toPlainObject_1;
  function baseMergeDeep$1(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet$1(object, key),
      srcValue = safeGet$1(source, key),
      stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue$1(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
      var isArr = isArray$8(srcValue),
        isBuff = !isArr && isBuffer$1(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray$8(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray$1(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer$1(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray$1(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject$1(srcValue) || isArguments$2(srcValue)) {
        newValue = objValue;
        if (isArguments$2(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject$5(objValue) || isFunction(objValue)) {
          newValue = initCloneObject$1(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue$1(object, key, newValue);
  }
  var _baseMergeDeep = baseMergeDeep$1;
  var Stack$1 = _Stack,
    assignMergeValue = _assignMergeValue,
    baseFor = _baseFor,
    baseMergeDeep = _baseMergeDeep,
    isObject$4 = isObject_1,
    keysIn$3 = keysIn_1,
    safeGet = _safeGet;
  function baseMerge$1(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(source, function (srcValue, key) {
      stack || (stack = new Stack$1());
      if (isObject$4(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge$1, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    }, keysIn$3);
  }
  var _baseMerge = baseMerge$1;
  function identity$2(value) {
    return value;
  }
  var identity_1 = identity$2;
  function apply$1(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  var _apply = apply$1;
  var apply = _apply;
  var nativeMax = Math.max;
  function overRest$2(func, start, transform) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function () {
      var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }
  var _overRest = overRest$2;
  function constant$1(value) {
    return function () {
      return value;
    };
  }
  var constant_1 = constant$1;
  var constant = constant_1,
    defineProperty = _defineProperty,
    identity$1 = identity_1;
  var baseSetToString$1 = !defineProperty ? identity$1 : function (func, string) {
    return defineProperty(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant(string),
      "writable": true
    });
  };
  var _baseSetToString = baseSetToString$1;
  var HOT_COUNT = 800,
    HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut$1(func) {
    var count = 0,
      lastCalled = 0;
    return function () {
      var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  var _shortOut = shortOut$1;
  var baseSetToString = _baseSetToString,
    shortOut = _shortOut;
  var setToString$2 = shortOut(baseSetToString);
  var _setToString = setToString$2;
  var identity = identity_1,
    overRest$1 = _overRest,
    setToString$1 = _setToString;
  function baseRest$1(func, start) {
    return setToString$1(overRest$1(func, start, identity), func + "");
  }
  var _baseRest = baseRest$1;
  var eq = eq_1,
    isArrayLike$1 = isArrayLike_1,
    isIndex$2 = _isIndex,
    isObject$3 = isObject_1;
  function isIterateeCall$1(value, index, object) {
    if (!isObject$3(object)) {
      return false;
    }
    var type = _typeof(index);
    if (type == "number" ? isArrayLike$1(object) && isIndex$2(index, object.length) : type == "string" && index in object) {
      return eq(object[index], value);
    }
    return false;
  }
  var _isIterateeCall = isIterateeCall$1;
  var baseRest = _baseRest,
    isIterateeCall = _isIterateeCall;
  function createAssigner$1(assigner) {
    return baseRest(function (object, sources) {
      var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : void 0,
        guard = length > 2 ? sources[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? void 0 : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }
  var _createAssigner = createAssigner$1;
  var baseMerge = _baseMerge,
    createAssigner = _createAssigner;
  var mergeWith = createAssigner(function (object, source, srcIndex, customizer) {
    baseMerge(object, source, srcIndex, customizer);
  });
  var mergeWith_1 = mergeWith;
  var mergeWith$1 = /* @__PURE__ */getDefaultExportFromCjs(mergeWith_1);
  var utils = {
    jsRem: {
      getBase: function getBase() {
        var _ref;
        var _a;
        return (_ref = (_a = window.$eva) == null ? void 0 : _a.remBase) !== null && _ref !== void 0 ? _ref : 50;
      },
      getValue: function getValue() {
        var _ref2;
        var _a;
        return (_ref2 = (_a = window.$eva) == null ? void 0 : _a.remValue) !== null && _ref2 !== void 0 ? _ref2 : 50;
      },
      getRate: function getRate() {
        return utils.jsRem.getValue() / utils.jsRem.getBase();
      },
      calcRem: function calcRem(px2) {
        if (!["string", "number"].includes(_typeof(px2))) {
          return px2;
        }
        if (typeof px2 === "string") {
          return convertPxStringToRemString(px2);
        }
        return fixed$1(px2 / utils.jsRem.getBase());
      },
      calcRenderPixel: function calcRenderPixel(px2) {
        if (!["string", "number"].includes(_typeof(px2))) {
          return px2;
        }
        if (typeof px2 === "string") {
          return convertPxStringToRemString(px2);
        }
        return px2 * utils.jsRem.getRate();
      }
    },
    cssRem: {
      getRate: function getRate() {
        return "var(--eva-rem-rate, 1)";
      },
      calcRem: function calcRem(px2) {
        if (typeof px2 !== "number") {
          return px2;
        }
        return "calc(".concat(px2, "px * ").concat(utils.cssRem.getRate(), ")");
      }
    },
    props: {
      mergeDefaultProps: function mergeDefaultProps(defaultProps) {
        for (var _len = arguments.length, propsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          propsList[_key - 1] = arguments[_key];
        }
        return mergeWith$1.apply(void 0, [defaultProps].concat(propsList, [function (objValue, srcValue) {
          if (Array.isArray(srcValue) && srcValue !== null) {
            return srcValue;
          }
          if (_typeof(srcValue) === "object" && srcValue !== null) {
            return;
          }
          return srcValue !== null && srcValue !== void 0 ? srcValue : objValue;
        }]));
      },
      mergeEdge: function mergeEdge(defaultProps) {
        var res = _toConsumableArray(defaultProps);
        for (var _len2 = arguments.length, propsList = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          propsList[_key2 - 1] = arguments[_key2];
        }
        propsList.forEach(function (props) {
          return mergeEdge(res, props);
        });
        return res;
        function mergeEdge(obj, src) {
          return mergeWith$1(obj, src, function (objValue, srcValue) {
            return srcValue !== null && srcValue !== void 0 ? srcValue : objValue;
          });
        }
      }
    }
  };
  function convertPxStringToRemString(pxString) {
    return protectBase64$1(pxString, function (pxString2) {
      return pxString2.replace(/-?\d*(\.\d+)?px/g, function (str) {
        var num = parseFloat(str.replace("px", ""));
        if (Math.abs(num) <= 2) {
          return "".concat(num, "px");
        }
        return "".concat(fixed$1(num / utils.jsRem.getBase()), "rem");
      });
    });
  }
  function fixed$1(number) {
    return Math.ceil(number * 1e6) / 1e6;
  }
  function protectBase64$1(value, cb) {
    var base64Regexp = new RegExp("data:image.*,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})");
    var base64res = value.match(base64Regexp);
    if (base64res) {
      base64res.forEach(function (base64, index) {
        value = value.replace(base64, "$".concat(index, "$"));
      });
    }
    value = cb(value);
    if (base64res) {
      base64res.forEach(function (base64, index) {
        value = value.replace("$".concat(index, "$"), base64);
      });
    }
    return value;
  }
  var reactHooks = {
    jsRem: {
      useRenderPixel: function useRenderPixel(px2) {
        return react.useMemo(function () {
          return utils.jsRem.calcRenderPixel(px2);
        }, [px2]);
      }
    },
    cssRem: {
      useCalcRem: function useCalcRem(px2) {
        return react.useMemo(function () {
          return utils.cssRem.calcRem(px2);
        }, [px2]);
      }
    },
    props: {
      useMergeDefaultProps: function useMergeDefaultProps(defaultProps, props) {
        return react.useMemo(function () {
          return utils.props.mergeDefaultProps(defaultProps, props);
        }, [defaultProps, props]);
      }
    }
  };
  var _HttpSvcMiddleware = /*#__PURE__*/function () {
    function _HttpSvcMiddleware(handlerOrConfig) {
      var _this = this;
      _classCallCheck(this, _HttpSvcMiddleware);
      __publicField(this, "whitelist", []);
      __publicField(this, "blacklist", []);
      __publicField(this, "handler", function () {
        return Promise.resolve("Please set a handler for middleware");
      });
      var handler;
      var payload;
      if (typeof handlerOrConfig === "function") {
        handler = handlerOrConfig;
      } else {
        this.whitelist = (handlerOrConfig == null ? void 0 : handlerOrConfig.whitelist) || [];
        this.blacklist = (handlerOrConfig == null ? void 0 : handlerOrConfig.blacklist) || [];
        handler = handlerOrConfig == null ? void 0 : handlerOrConfig.handler;
        if (handlerOrConfig == null ? void 0 : handlerOrConfig.payload) payload = handlerOrConfig.payload;
      }
      this.handler = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ctx, next, config) {
          var url;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!((config == null ? void 0 : config.disabled) !== true)) {
                  _context.next = 16;
                  break;
                }
                url = ctx.config.url;
                if (!_this.whitelist.length) {
                  _context.next = 9;
                  break;
                }
                if (_this.match(url, _this.whitelist)) {
                  _context.next = 7;
                  break;
                }
                _context.next = 6;
                return next();
              case 6:
                return _context.abrupt("return", _context.sent);
              case 7:
                _context.next = 14;
                break;
              case 9:
                if (!_this.blacklist.length) {
                  _context.next = 14;
                  break;
                }
                if (!_this.match(url, _this.blacklist)) {
                  _context.next = 14;
                  break;
                }
                _context.next = 13;
                return next();
              case 13:
                return _context.abrupt("return", _context.sent);
              case 14:
                _context.next = 19;
                break;
              case 16:
                _context.next = 18;
                return next();
              case 18:
                return _context.abrupt("return", _context.sent);
              case 19:
                _context.next = 21;
                return (handler || _this.handler).bind(_this)(ctx, next, _HttpSvcMiddleware.mergeConfig(config, payload));
              case 21:
                return _context.abrupt("return", _context.sent);
              case 22:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x, _x2, _x3) {
          return _ref3.apply(this, arguments);
        };
      }();
    }
    return _createClass(_HttpSvcMiddleware, [{
      key: "match",
      value: function match(item, list) {
        var matched = false;
        for (var i = 0; i < list.length; i++) {
          if (item.indexOf(list[i]) > -1) {
            matched = true;
            break;
          }
        }
        return matched;
      }
    }]);
  }();
  __publicField(_HttpSvcMiddleware, "handler");
  __publicField(_HttpSvcMiddleware, "mergeConfig", function (config, payload) {
    return _objectSpread(_objectSpread({}, config || {}), {}, {
      payload: _objectSpread(_objectSpread({}, (config == null ? void 0 : config.payload) || {}), payload || {})
    });
  });
  var HttpSvcMiddleware = _HttpSvcMiddleware;
  var getBuiltInMiddlewareName = function getBuiltInMiddlewareName(name) {
    return "BUILT_IN_".concat(name);
  };
  var createError = function createError(ctx, message) {
    var _a;
    var error = new Error(message || "Request Error: ".concat(((_a = ctx.response) == null ? void 0 : _a.status) || "unknow status"));
    error.config = ctx.request;
    if (ctx.response) {
      error.response = ctx.response;
      if (!ctx.response.ok) {
        error.code = ctx.response.status;
      }
    }
    return error;
  };
  var isMiddleware = function isMiddleware(middleware) {
    if (middleware.name && middleware.handler) return true;
    return false;
  };
  var isNode = typeof window === "undefined";
  var isArray$7 = function isArray$7(val) {
    return toString.call(val) === "[object Array]";
  };
  var isObject$2 = function isObject$2(val) {
    return val !== null && _typeof(val) === "object";
  };
  var isRecordObj = function isRecordObj(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  };
  var isFormData = function isFormData(val) {
    return typeof FormData !== "undefined" && val instanceof FormData;
  };
  var isDate = function isDate(val) {
    return toString.call(val) === "[object Date]";
  };
  var encodeParams = function encodeParams(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  };
  var buildURL = function buildURL(url, params) {
    var parts = [];
    Object.keys(params).forEach(function (key) {
      var val = params[key];
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (isArray$7(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      val.forEach(function (v) {
        if (isDate(v)) {
          v = v.toString();
        } else if (isObject$2(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encodeParams(key) + "=" + encodeParams(v));
      });
    });
    var serializedParams = parts.join("&");
    if (serializedParams) {
      var hashMarkIndex = url.indexOf("#");
      if (hashMarkIndex !== -1) {
        url = url.slice(0, hashMarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  };
  var parseUrl = function parseUrl(url) {
    var _url$split = url.split("?"),
      _url$split2 = _slicedToArray(_url$split, 2),
      u = _url$split2[0],
      s = _url$split2[1];
    if (s) {
      var searchParams = s.split("&");
      if (searchParams.length) {
        var params = {};
        var _iterator = _createForOfIteratorHelper(searchParams),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var searchParam = _step.value;
            var _searchParam$split = searchParam.split("="),
              _searchParam$split2 = _slicedToArray(_searchParam$split, 2),
              key = _searchParam$split2[0],
              value = _searchParam$split2[1];
            if (key && typeof value !== "undefined") {
              params[key] = value;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return {
          url: u,
          params: params
        };
      }
    }
    return {
      url: url
    };
  };
  var formatString = function formatString(input) {
    var afterFormat = "";
    for (var i = 0; i < input.length; i++) {
      afterFormat += String.fromCharCode(input.charCodeAt(i) - 1);
    }
    return afterFormat;
  };
  var CONTENT_TYPE_KEY = "Content-Type";
  var getContentType = function getContentType(headers) {
    return (headers == null ? void 0 : headers[CONTENT_TYPE_KEY]) || (headers == null ? void 0 : headers["content-type"]);
  };
  var setContentType = function setContentType(headers, contentType) {
    if (!contentType) return;
    headers[CONTENT_TYPE_KEY] = contentType;
  };
  var initCtx = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ctx, next) {
      var _ctx$config, baseURL, headers, params, data, _ctx$config$credentia, credentials, url, method, _parseUrl, originUrl, originParams, form, _iterator2, _step2, _step2$value, key, value;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (ctx.request) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return", next());
          case 2:
            _ctx$config = ctx.config, baseURL = _ctx$config.baseURL, headers = _ctx$config.headers, params = _ctx$config.params, data = _ctx$config.data, _ctx$config$credentia = _ctx$config.credentials, credentials = _ctx$config$credentia === void 0 ? "include" : _ctx$config$credentia;
            url = ctx.config.url;
            method = ctx.request.method;
            _parseUrl = parseUrl(url), originUrl = _parseUrl.url, originParams = _parseUrl.params;
            if (originParams) {
              url = ctx.request.url = originUrl;
              ctx.request.params = _objectSpread(_objectSpread({}, originParams), params || {});
            } else {
              ctx.request.url = url;
              ctx.request.params = _objectSpread({}, params || {});
            }
            if (baseURL && /^(https?:)?\/\//.test(url) === false) {
              ctx.request.url = "".concat(baseURL).concat(url);
            }
            ctx.request.headers = _objectSpread({}, headers || {});
            if (method === "POST") {
              if (data) {
                if (_typeof(data) === "object") {
                  if (typeof FormData !== "undefined" && data instanceof FormData) {
                    form = new FormData();
                    _iterator2 = _createForOfIteratorHelper(data.entries());
                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        _step2$value = _slicedToArray(_step2.value, 2), key = _step2$value[0], value = _step2$value[1];
                        form.append(key, value);
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }
                    ctx.request.data = form;
                  } else if (Object.keys(data)) {
                    ctx.request.data = JSON.parse(JSON.stringify(data));
                  }
                } else {
                  ctx.request.data = data;
                }
              }
            }
            ctx.request.credentials = credentials;
            _context2.next = 13;
            return next();
          case 13:
            return _context2.abrupt("return", _context2.sent);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function initCtx(_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();
  var HttpSvcInitCtx = /*#__PURE__*/function (_HttpSvcMiddleware2) {
    function HttpSvcInitCtx() {
      var _this2;
      _classCallCheck(this, HttpSvcInitCtx);
      _this2 = _callSuper(this, HttpSvcInitCtx, arguments);
      __publicField(_this2, "handler", initCtx);
      __publicField(_this2, "name", getBuiltInMiddlewareName("INIT_CTX"));
      return _this2;
    }
    _inherits(HttpSvcInitCtx, _HttpSvcMiddleware2);
    return _createClass(HttpSvcInitCtx);
  }(HttpSvcMiddleware);
  __publicField(HttpSvcInitCtx, "handler", initCtx);
  var BUTILS_CACHE = "__butils_cache";
  var CACHED_STYLES = "__butils_styles";
  var CACHED_SCRIPTS = "__butils_scripts";
  var DAY_TIME = 864e5;
  var RE_URL = /^(https?:)?(\/\/)?(((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6})(:[0-9]{1-6})?([-0-9a-zA-Z+&@#/%=~_|?!:,.;]*)?$/;
  function isUrl(value) {
    return RE_URL.test(value);
  }
  function isStr(value) {
    return typeof value === "string";
  }
  function isNum(value, isLoose) {
    var isNumType = typeof value === "number";
    if (isLoose) return isNumType;
    return isNumType && !Number.isNaN(value) && Number.isFinite(value);
  }
  function getStringHash(string) {
    var hash = 0;
    var i = -1;
    var _char;
    if (string.length === 0) return hash;
    while (++i < string.length) {
      _char = string.charCodeAt(i);
      hash = (hash << 5) - hash + _char;
      hash |= 0;
    }
    return Math.abs(hash) * 10 + string.length % 10;
  }
  function getCookie(key, options) {
    if (!options) options = {};
    var isNoDecode = options.decode === false;
    var template = options.template || document.cookie;
    var decodedCookie = isNoDecode ? template : decodeURIComponent(template);
    var cookieItems = {};
    var cookies = decodedCookie.split(";");
    var isGetAll = key === true;
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      var keyVal = cookie.split("=");
      var name = keyVal[0];
      var value = keyVal[1];
      cookieItems[name] = value;
      if (key === name) return cookieItems[key];
    }
    return isGetAll ? cookieItems : "";
  }
  function setCookie(key, value, options) {
    var expires = "",
      exTime = 0;
    options = options || {};
    if (options.encode !== false) {
      value = encodeURIComponent(value);
    }
    if (isNum(options.exMinuts)) {
      exTime += options.exMinuts * 6e4;
    }
    if (isNum(options.exDays)) {
      exTime += options.exDays * DAY_TIME;
    }
    if (exTime) {
      var date = /* @__PURE__ */new Date();
      date.setTime(date.getTime() + exTime);
      expires = ";expires=".concat(date.toUTCString());
    }
    var domain = isStr(options.domain) ? ";domain=".concat(options.domain) : "";
    document.cookie = "".concat(key, "=").concat(value).concat(expires, ";path=/").concat(domain);
  }
  function getCache(key) {
    var caches = window[BUTILS_CACHE] || {};
    if (caches.hasOwnProperty(key)) {
      return caches[key];
    }
    return null;
  }
  function setCache(key, value) {
    var caches = window[BUTILS_CACHE] || {};
    window[BUTILS_CACHE] = caches;
    caches[key] = value;
  }
  function cachedStyleOrScript(cacheId, reload, isStyle) {
    return new Promise(function (resolve) {
      reload = reload !== false;
      var cacheKey = isStyle ? CACHED_STYLES : CACHED_SCRIPTS;
      var caches = getCache(cacheKey) || [];
      if (!reload && caches.indexOf(cacheId) > -1) {
        return resolve(true);
      }
      var el = document.querySelector("#".concat(cacheId));
      if (el) el.parentNode.removeChild(el);
      caches = caches.filter(function (item) {
        return item !== cacheId;
      });
      caches.push(cacheId);
      setCache(cacheKey, caches);
      return resolve(false);
    });
  }
  function loadScript(src, reload) {
    return new Promise(function (resolve, reject) {
      if (!isUrl(src)) return reject(new Error("src不是一个正确的url地址！"));
      var scriptId = "bs_url_".concat(getStringHash(src));
      cachedStyleOrScript(scriptId, reload, false).then(function (cached) {
        if (cached) return resolve();
        var scriptEl = document.createElement("script");
        scriptEl.id = scriptId;
        scriptEl.type = "text/JavaScript";
        scriptEl.src = src;
        scriptEl.onload = function () {
          return resolve();
        };
        scriptEl.onreadystatechange = function () {
          if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
            resolve();
          }
        };
        document.querySelector("head").appendChild(scriptEl);
      });
    }).then();
  }
  var timeout = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(ctx, next) {
      var ms, abortController;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            ms = ctx.config.timeout;
            if (!isNum(ctx.config.timeout)) {
              ms = isNode ? 350 : 1e4;
            }
            if (!(!ctx.abortController && ms && typeof AbortController !== "undefined")) {
              _context3.next = 11;
              break;
            }
            abortController = new AbortController();
            ctx.abortController = abortController;
            ctx.timeoutId = setTimeout(function () {
              abortController.abort();
            }, ms);
            _context3.next = 8;
            return next();
          case 8:
            clearTimeout(ctx.timeoutId);
            _context3.next = 13;
            break;
          case 11:
            _context3.next = 13;
            return next();
          case 13:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function timeout(_x6, _x7) {
      return _ref5.apply(this, arguments);
    };
  }();
  var HttpSvcTimeout = /*#__PURE__*/function (_HttpSvcMiddleware3) {
    function HttpSvcTimeout() {
      var _this3;
      _classCallCheck(this, HttpSvcTimeout);
      _this3 = _callSuper(this, HttpSvcTimeout, [timeout]);
      __publicField(_this3, "name", getBuiltInMiddlewareName("TIMEOUT"));
      return _this3;
    }
    _inherits(HttpSvcTimeout, _HttpSvcMiddleware3);
    return _createClass(HttpSvcTimeout);
  }(HttpSvcMiddleware);
  __publicField(HttpSvcTimeout, "handler", timeout);
  var ContentType = /* @__PURE__ */function (ContentType2) {
    ContentType2["JSON"] = "application/json";
    ContentType2["Form"] = "application/x-www-form-urlencoded";
    ContentType2["FormData"] = "multipart/form-data";
    return ContentType2;
  }(ContentType || {});
  var isEqualContentType = function isEqualContentType(target, current) {
    if (!current) return false;
    return current.indexOf(target) > -1;
  };
  var jsonBody = function jsonBody(ctx, data, contentType) {
    if (!ctx.request) return;
    ctx.request.data = JSON.stringify(data);
    if (!ctx.request.headers) {
      var headers = {};
      setContentType(headers, "application/json"
      /* JSON */);
      ctx.request.headers = headers;
    } else if (!contentType) {
      setContentType(ctx.request.headers, "application/json"
      /* JSON */);
    }
  };
  var body = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(ctx, next, config) {
      var _a, _ctx$request, method, params, headers, isContinue, contentType, data, keys2;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (ctx.request) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return", next());
          case 2:
            _ctx$request = ctx.request, method = _ctx$request.method, params = _ctx$request.params, headers = _ctx$request.headers;
            ctx.request.url = buildURL(ctx.request.url, params || {});
            if (!(method === "POST")) {
              _context4.next = 17;
              break;
            }
            isContinue = Object.prototype.toString.call(ctx.request.data) !== "[object Object]";
            if (isContinue) {
              _context4.next = 17;
              break;
            }
            contentType = getContentType(headers);
            data = ctx.request.data;
            if (!((_a = config == null ? void 0 : config.payload) == null ? void 0 : _a.stringify)) {
              _context4.next = 14;
              break;
            }
            jsonBody(ctx, data, contentType);
            _context4.next = 13;
            return next();
          case 13:
            return _context4.abrupt("return", _context4.sent);
          case 14:
            if (isEqualContentType("application/x-www-form-urlencoded", contentType)) {
              ctx.request.data = buildURL("", data).slice(1);
            }
            if (isEqualContentType("application/json", contentType || "application/json"
            /* JSON */)) {
              jsonBody(ctx, data, contentType);
            }
            if (isEqualContentType("multipart/form-data", contentType)) {
              keys2 = Object.keys(data);
              if (keys2.length) {
                ctx.request.data = keys2.reduce(function (form, key) {
                  form.append(key, data[key]);
                  return form;
                }, new FormData());
              }
            }
          case 17:
            _context4.next = 19;
            return next();
          case 19:
            return _context4.abrupt("return", _context4.sent);
          case 20:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function body(_x8, _x9, _x10) {
      return _ref6.apply(this, arguments);
    };
  }();
  var HttpSvcBody = /*#__PURE__*/function (_HttpSvcMiddleware4) {
    function HttpSvcBody() {
      var _this4;
      _classCallCheck(this, HttpSvcBody);
      _this4 = _callSuper(this, HttpSvcBody, [body]);
      __publicField(_this4, "name", getBuiltInMiddlewareName("BODY"));
      return _this4;
    }
    _inherits(HttpSvcBody, _HttpSvcMiddleware4);
    return _createClass(HttpSvcBody);
  }(HttpSvcMiddleware);
  __publicField(HttpSvcBody, "handler", body);
  var csrf = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(ctx, next, config) {
      var _ctx$request2, method, data, headers, payload, csrf2, csrfGetted, getCsrf, key, setCsrf, contentType;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (ctx.request) {
              _context5.next = 2;
              break;
            }
            return _context5.abrupt("return", next());
          case 2:
            _ctx$request2 = ctx.request, method = _ctx$request2.method, data = _ctx$request2.data, headers = _ctx$request2.headers;
            payload = (config == null ? void 0 : config.payload) || {};
            csrf2 = "";
            csrfGetted = false;
            getCsrf = function getCsrf() {
              if (csrf2 || csrfGetted) return;
              try {
                if (!isNode) {
                  csrf2 = getCookie("bili_jct", {
                    decode: false
                  });
                } else {
                  csrf2 = getCookie("bili_jct", {
                    template: (headers == null ? void 0 : headers["cookie"]) || (headers == null ? void 0 : headers["Cookie"]) || "_",
                    decode: false
                  });
                }
                csrfGetted = true;
              } catch (error) {
                if (!isNode) {
                  console.warn(error);
                }
              }
            };
            key = payload.key || "csrf";
            setCsrf = function setCsrf(pos) {
              getCsrf();
              if (!csrf2 || !ctx.request) return;
              if (pos === "params") {
                if (!ctx.request.params) {
                  ctx.request.params = _defineProperty2({}, key, csrf2);
                } else {
                  ctx.request.params[key] = csrf2;
                }
                return;
              }
              if (!data) {
                return;
              }
              switch (true) {
                case isFormData(data):
                  data.append(key, csrf2);
                  break;
                case isRecordObj(data):
                  data[key] = csrf2;
                  break;
              }
            };
            if (method === "GET") {
              if (payload.params === true) {
                setCsrf("params");
              }
            } else if (method === "POST") {
              contentType = getContentType(headers) || "";
              if (typeof payload.data === "undefined" && typeof payload.params === "undefined") {
                if (!contentType) {
                  if (typeof data === "undefined" || isRecordObj(data)) {
                    setCsrf("params");
                  } else {
                    setCsrf("data");
                  }
                } else if (isEqualContentType(ContentType.JSON, contentType)) {
                  setCsrf("params");
                } else {
                  setCsrf("data");
                }
              } else {
                if (payload.params) {
                  setCsrf("params");
                }
                if (payload.data) {
                  if (typeof data === "undefined") {
                    if (isEqualContentType(ContentType.FormData, contentType)) {
                      ctx.request.data = new FormData();
                    } else {
                      ctx.request.data = {};
                    }
                  }
                  setCsrf("data");
                }
              }
            }
            _context5.next = 12;
            return next();
          case 12:
            return _context5.abrupt("return", _context5.sent);
          case 13:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function csrf(_x11, _x12, _x13) {
      return _ref7.apply(this, arguments);
    };
  }();
  var HttpSvcCsrf = /*#__PURE__*/function (_HttpSvcMiddleware5) {
    function HttpSvcCsrf() {
      var _this5;
      _classCallCheck(this, HttpSvcCsrf);
      _this5 = _callSuper(this, HttpSvcCsrf, [csrf]);
      __publicField(_this5, "name", getBuiltInMiddlewareName("CSRF"));
      return _this5;
    }
    _inherits(HttpSvcCsrf, _HttpSvcMiddleware5);
    return _createClass(HttpSvcCsrf);
  }(HttpSvcMiddleware);
  __publicField(HttpSvcCsrf, "handler", csrf);
  var fetch = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(ctx, next) {
      var _a, _ctx$request3, url, method, headers, credentials, body2;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!isNode) {
              _context6.next = 2;
              break;
            }
            throw new Error("When you are in a Node environment, please use server-side fetch middleware.");
          case 2:
            if (window.fetch) {
              _context6.next = 4;
              break;
            }
            throw new Error("When you are in a non-modern browser, please manually polyfill fetch.");
          case 4:
            if (ctx.request) {
              _context6.next = 8;
              break;
            }
            _context6.next = 7;
            return next();
          case 7:
            return _context6.abrupt("return", _context6.sent);
          case 8:
            if (!ctx.response) {
              _context6.next = 12;
              break;
            }
            _context6.next = 11;
            return next();
          case 11:
            return _context6.abrupt("return", _context6.sent);
          case 12:
            _ctx$request3 = ctx.request, url = _ctx$request3.url, method = _ctx$request3.method, headers = _ctx$request3.headers, credentials = _ctx$request3.credentials;
            body2 = ctx.request.data;
            _context6.next = 16;
            return window.fetch(url, {
              method: method,
              body: body2,
              headers: headers,
              credentials: credentials,
              signal: (_a = ctx.abortController) == null ? void 0 : _a.signal
            });
          case 16:
            ctx.response = _context6.sent;
            _context6.next = 19;
            return next();
          case 19:
            return _context6.abrupt("return", _context6.sent);
          case 20:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function fetch(_x14, _x15) {
      return _ref8.apply(this, arguments);
    };
  }();
  var HttpSvcFetch = /*#__PURE__*/function (_HttpSvcMiddleware6) {
    function HttpSvcFetch() {
      var _this6;
      _classCallCheck(this, HttpSvcFetch);
      _this6 = _callSuper(this, HttpSvcFetch, arguments);
      __publicField(_this6, "handler", fetch);
      __publicField(_this6, "name", getBuiltInMiddlewareName("FETCH"));
      return _this6;
    }
    _inherits(HttpSvcFetch, _HttpSvcMiddleware6);
    return _createClass(HttpSvcFetch);
  }(HttpSvcMiddleware);
  __publicField(HttpSvcFetch, "handler", fetch);
  var resData = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(ctx, next, config) {
      var _a, _b, responseType;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return next();
          case 2:
            if (!((_a = ctx.response) == null ? void 0 : _a.ok)) {
              _context7.next = 14;
              break;
            }
            if (!(typeof ctx.response.data === "undefined")) {
              _context7.next = 14;
              break;
            }
            _context7.prev = 4;
            responseType = ((_b = config == null ? void 0 : config.payload) == null ? void 0 : _b.type) || "json";
            _context7.next = 8;
            return ctx.response[responseType]();
          case 8:
            ctx.response.data = _context7.sent;
            _context7.next = 14;
            break;
          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](4);
            console.warn(_context7.t0);
          case 14:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[4, 11]]);
    }));
    return function resData(_x16, _x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }();
  var HttpSvcResData = /*#__PURE__*/function (_HttpSvcMiddleware7) {
    function HttpSvcResData() {
      var _this7;
      _classCallCheck(this, HttpSvcResData);
      _this7 = _callSuper(this, HttpSvcResData, [resData]);
      __publicField(_this7, "name", getBuiltInMiddlewareName("RES_DATA"));
      return _this7;
    }
    _inherits(HttpSvcResData, _HttpSvcMiddleware7);
    return _createClass(HttpSvcResData);
  }(HttpSvcMiddleware);
  __publicField(HttpSvcResData, "handler", resData);
  var spray = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(ctx, next) {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return next();
          case 2:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function spray(_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  }();
  var HttpSvcSprayMiddleware = /*#__PURE__*/function (_HttpSvcMiddleware8) {
    function HttpSvcSprayMiddleware(handler, payload) {
      var _this8;
      _classCallCheck(this, HttpSvcSprayMiddleware);
      _this8 = _callSuper(this, HttpSvcSprayMiddleware);
      __publicField(_this8, "name", getBuiltInMiddlewareName("SPRAY"));
      _this8.handler = /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(ctx, next) {
          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return handler(ctx, next, {
                  payload: payload
                });
              case 2:
                return _context9.abrupt("return", _context9.sent);
              case 3:
              case "end":
                return _context9.stop();
            }
          }, _callee9);
        }));
        return function (_x21, _x22) {
          return _ref11.apply(this, arguments);
        };
      }();
      return _this8;
    }
    _inherits(HttpSvcSprayMiddleware, _HttpSvcMiddleware8);
    return _createClass(HttpSvcSprayMiddleware);
  }(HttpSvcMiddleware);
  __publicField(HttpSvcSprayMiddleware, "handler", spray);
  var retry = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(ctx, next, config) {
      var _a, requestFn, _ref13, times, condition, onRetry, isDone, doRetry, isMeetTheCondition;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            requestFn = (_a = ctx.request) == null ? void 0 : _a["function"];
            _ref13 = (config == null ? void 0 : config.payload) || {
              times: 0
            }, times = _ref13.times, condition = _ref13.condition, onRetry = _ref13.onRetry;
            isDone = function isDone() {
              return !times || ctx.retry === times;
            };
            doRetry = /*#__PURE__*/function () {
              var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(extra) {
                var _a2, newConfig;
                return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                    case 0:
                      if (requestFn) {
                        _context10.next = 2;
                        break;
                      }
                      throw createError(ctx, "Missing request function");
                    case 2:
                      if (!(isDone() && !((_a2 = config == null ? void 0 : config.payload) == null ? void 0 : _a2.runtimeShortCircuit))) {
                        _context10.next = 4;
                        break;
                      }
                      throw createError(ctx);
                    case 4:
                      ctx.retry = ctx.retry ? ctx.retry + 1 : 1;
                      _context10.prev = 5;
                      if (!onRetry) {
                        _context10.next = 11;
                        break;
                      }
                      _context10.next = 9;
                      return onRetry(ctx.config, extra);
                    case 9:
                      newConfig = _context10.sent;
                      if (newConfig) {
                        ctx.config = newConfig;
                      }
                    case 11:
                      if (ctx.response) delete ctx.response;
                      _context10.next = 14;
                      return requestFn(ctx);
                    case 14:
                      _context10.next = 19;
                      break;
                    case 16:
                      _context10.prev = 16;
                      _context10.t0 = _context10["catch"](5);
                      throw createError(ctx, _context10.t0.message);
                    case 19:
                    case "end":
                      return _context10.stop();
                  }
                }, _callee10, null, [[5, 16]]);
              }));
              return function doRetry(_x26) {
                return _ref14.apply(this, arguments);
              };
            }();
            _context11.prev = 4;
            _context11.next = 7;
            return next();
          case 7:
            _context11.next = 16;
            break;
          case 9:
            _context11.prev = 9;
            _context11.t0 = _context11["catch"](4);
            if (!isDone()) {
              _context11.next = 13;
              break;
            }
            throw createError(ctx, _context11.t0 == null ? void 0 : _context11.t0.message);
          case 13:
            _context11.next = 15;
            return doRetry();
          case 15:
            return _context11.abrupt("return");
          case 16:
            if (!condition) {
              _context11.next = 24;
              break;
            }
            _context11.next = 19;
            return condition(ctx.response);
          case 19:
            isMeetTheCondition = _context11.sent;
            if (!isMeetTheCondition) {
              _context11.next = 24;
              break;
            }
            _context11.next = 23;
            return doRetry(isMeetTheCondition);
          case 23:
            return _context11.abrupt("return");
          case 24:
            if (!(!ctx.response || !ctx.response.ok)) {
              _context11.next = 27;
              break;
            }
            _context11.next = 27;
            return doRetry();
          case 27:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[4, 9]]);
    }));
    return function retry(_x23, _x24, _x25) {
      return _ref12.apply(this, arguments);
    };
  }();
  var HttpSvcRetry = /*#__PURE__*/function (_HttpSvcMiddleware9) {
    function HttpSvcRetry() {
      var _this9;
      _classCallCheck(this, HttpSvcRetry);
      _this9 = _callSuper(this, HttpSvcRetry, arguments);
      __publicField(_this9, "name", getBuiltInMiddlewareName("RETRY"));
      __publicField(_this9, "handler", retry);
      return _this9;
    }
    _inherits(HttpSvcRetry, _HttpSvcMiddleware9);
    return _createClass(HttpSvcRetry);
  }(HttpSvcMiddleware);
  __publicField(HttpSvcRetry, "handler", retry);
  var isFetching = false;
  var TICKET_COOKIE_KEY = "bili_ticket";
  var TICKET_COOKIE_KEY_EXP = "bili_ticket_expires";
  var BEFORE_UPDATE_MINUTES = 30;
  var LOCAL_STORAGE_KEY = "wbi_img_urls";
  var detectTicketAndWbi = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(ctx) {
      var _a, biliTicket, wbiImgUrl, wbiSubUrl, _ref16, _ref17, _split, _split2, isTicketExpired;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            biliTicket = getCookie(TICKET_COOKIE_KEY, {
              decode: false
            });
            wbiImgUrl = "";
            wbiSubUrl = "";
            if (window == null ? void 0 : window.UNIFY_HTTP_WBI_CONFIG) {
              _ref16 = ((_a = window.UNIFY_HTTP_WBI_CONFIG) == null ? void 0 : _a.split("-")) || [];
              _ref17 = _slicedToArray(_ref16, 2);
              wbiImgUrl = _ref17[0];
              wbiSubUrl = _ref17[1];
            } else {
              _split = (localStorage.getItem(LOCAL_STORAGE_KEY) || "").split("-");
              _split2 = _slicedToArray(_split, 2);
              wbiImgUrl = _split2[0];
              wbiSubUrl = _split2[1];
            }
            isTicketExpired = isExpired();
            if (!(isTicketExpired || !biliTicket || !wbiImgUrl || !wbiSubUrl)) {
              _context13.next = 9;
              break;
            }
            if (!isFetching) {
              _context13.next = 8;
              break;
            }
            return _context13.abrupt("return");
          case 8:
            ctx.useAsyncRequest( /*#__PURE__*/function () {
              var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req) {
                var _a2, _b, api, response;
                return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.prev = 0;
                      isFetching = true;
                      _context12.next = 4;
                      return buildTicketURL();
                    case 4:
                      api = _context12.sent;
                      _context12.next = 7;
                      return req({
                        url: api,
                        method: "POST",
                        credentials: "include"
                      });
                    case 7:
                      response = _context12.sent;
                      if ((response == null ? void 0 : response.code) === 0 && ((_a2 = response.data) == null ? void 0 : _a2.ticket) && ((_b = response.data) == null ? void 0 : _b.nav)) {
                        setTicketAndNavInLocalStorage(response.data);
                      }
                    case 9:
                      _context12.prev = 9;
                      isFetching = false;
                      return _context12.finish(9);
                    case 12:
                    case "end":
                      return _context12.stop();
                  }
                }, _callee12, null, [[0,, 9, 12]]);
              }));
              return function (_x28) {
                return _ref18.apply(this, arguments);
              };
            }());
          case 9:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }));
    return function detectTicketAndWbi(_x27) {
      return _ref15.apply(this, arguments);
    };
  }();
  var isExpired = function isExpired() {
    var biliTicketExp = getCookie(TICKET_COOKIE_KEY_EXP, {
      decode: false
    });
    var thresholdMilliseconds = BEFORE_UPDATE_MINUTES * 60 * 1e3;
    var currentTime = ( /* @__PURE__ */new Date()).getTime();
    return biliTicketExp * 1e3 - currentTime <= thresholdMilliseconds || biliTicketExp * 1e3 < currentTime;
  };
  var setTicketInCookie = function setTicketInCookie(key, value, ttl) {
    var _a;
    if ((_a = window == null ? void 0 : window.biliBridgePc) == null ? void 0 : _a.callNative) {
      window.biliBridgePc.callNative("auth/setCookies", [{
        name: key,
        value: value,
        expirationDate: ttl,
        isExpiredRemove: true
      }]);
      return;
    }
    setCookie(key, value, {
      domain: ".bilibili.com",
      exMinuts: ttl / 60
    });
  };
  var setTicketAndNavInLocalStorage = function setTicketAndNavInLocalStorage(data) {
    var ticket = data.ticket,
      nav = data.nav,
      ttl = data.ttl,
      created_at = data.created_at;
    setTicketInCookie(TICKET_COOKIE_KEY, ticket, ttl);
    setTicketInCookie(TICKET_COOKIE_KEY_EXP, String(created_at + ttl), ttl);
    window.UNIFY_HTTP_WBI_CONFIG = "".concat(nav.img, "-").concat(nav.sub);
    localStorage.setItem(LOCAL_STORAGE_KEY, "".concat(nav.img, "-").concat(nav.sub));
  };
  var buildTicketURL = /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      var ts, key, hamc, sign, api;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            ts = Math.floor(( /* @__PURE__ */new Date()).getTime() / 1e3);
            key = "YhxToH[2q";
            _context14.next = 4;
            return loadScript("//s1.hdslb.com/bfs/static/jinkela/long/unify-http-request/forticket.min.js");
          case 4:
            if (window.CryptoJS) {
              _context14.next = 6;
              break;
            }
            throw new Error("CryptoJS is not found");
          case 6:
            if (window.CryptoJS.HmacSHA256) {
              _context14.next = 8;
              break;
            }
            throw new Error("CryptoJS.HmacSHA256 is not found");
          case 8:
            if (window.CryptoJS.enc) {
              _context14.next = 10;
              break;
            }
            throw new Error("CryptoJS.enc is not found");
          case 10:
            hamc = window.CryptoJS.HmacSHA256("ts".concat(ts), formatString(key));
            sign = window.CryptoJS.enc.Hex.stringify(hamc);
            _context14.next = 14;
            return buildURL("//api.bilibili.com/bapis/bilibili.api.ticket.v1.Ticket/GenWebTicket", {
              key_id: "ec02",
              hexsign: sign,
              "context[ts]": ts,
              csrf: getCookie("bili_jct", {
                decode: false
              })
            });
          case 14:
            api = _context14.sent;
            return _context14.abrupt("return", api);
          case 16:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }));
    return function buildTicketURL() {
      return _ref19.apply(this, arguments);
    };
  }();
  var updateTicketAndWbi = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(ctx, next) {
      var _a, _ctx$request4, method, params;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            if (!(typeof window === "undefined")) {
              _context15.next = 4;
              break;
            }
            _context15.next = 3;
            return next();
          case 3:
            return _context15.abrupt("return", _context15.sent);
          case 4:
            if (ctx.request) {
              _ctx$request4 = ctx.request, method = _ctx$request4.method, params = _ctx$request4.params;
              if (!(params == null ? void 0 : params.web_location) && method === "GET") {
                ctx.request.params = _objectSpread(_objectSpread({}, ctx.request.params || {}), {}, {
                  web_location: ((_a = document.getElementsByTagName("meta")["spm_prefix"]) == null ? void 0 : _a.content) || "0.0"
                });
              }
            }
            try {
              detectTicketAndWbi(ctx);
            } catch (error) {
              console.log("[updateTicketAndWbi]", error);
            }
            _context15.next = 8;
            return next();
          case 8:
          case "end":
            return _context15.stop();
        }
      }, _callee15);
    }));
    return function updateTicketAndWbi(_x29, _x30) {
      return _ref20.apply(this, arguments);
    };
  }();
  var HttpSvcTicketWbiUpdate = /*#__PURE__*/function (_HttpSvcMiddleware10) {
    function HttpSvcTicketWbiUpdate() {
      var _this10;
      _classCallCheck(this, HttpSvcTicketWbiUpdate);
      _this10 = _callSuper(this, HttpSvcTicketWbiUpdate, [updateTicketAndWbi]);
      __publicField(_this10, "name", getBuiltInMiddlewareName("TICKET_WBI"));
      return _this10;
    }
    _inherits(HttpSvcTicketWbiUpdate, _HttpSvcMiddleware10);
    return _createClass(HttpSvcTicketWbiUpdate);
  }(HttpSvcMiddleware);
  __publicField(HttpSvcTicketWbiUpdate, "handler", updateTicketAndWbi);
  var HttpSvcControl = /*#__PURE__*/_createClass(function HttpSvcControl(httpSvc) {
    _classCallCheck(this, HttpSvcControl);
    this.httpSvc = httpSvc;
  });
  var ConfigControl = /*#__PURE__*/function (_HttpSvcControl) {
    function ConfigControl() {
      _classCallCheck(this, ConfigControl);
      return _callSuper(this, ConfigControl, arguments);
    }
    _inherits(ConfigControl, _HttpSvcControl);
    return _createClass(ConfigControl, [{
      key: "provide",
      value: function provide() {
        var _this11 = this;
        var ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var provider = {
          inject: function inject(key, value) {
            _this11.inject(ctx, key, value);
            return provider;
          },
          disable: function disable(key) {
            _this11.disable(ctx, key);
            return provider;
          },
          get: function get() {
            return ctx;
          }
        };
        return provider;
      }
    }, {
      key: "inject",
      value: function inject(ctx, name, config) {
        ctx[name] = config;
      }
    }, {
      key: "disable",
      value: function disable(ctx, name) {
        ctx[name] = _objectSpread(_objectSpread({}, ctx[name] || {}), {}, {
          disabled: true
        });
      }
    }, {
      key: "get",
      value: function get(ctx, name) {
        return ctx[name] || {};
      }
    }]);
  }(HttpSvcControl);
  var BUILT_IN_MIDDLEWARE = {
    INIT_CTX: getBuiltInMiddlewareName("INIT_CTX"),
    TIMEOUT: getBuiltInMiddlewareName("TIMEOUT"),
    BODY: getBuiltInMiddlewareName("BODY"),
    CSRF: getBuiltInMiddlewareName("CSRF"),
    FETCH: getBuiltInMiddlewareName("FETCH"),
    RETRY: getBuiltInMiddlewareName("RETRY"),
    SPRAY: getBuiltInMiddlewareName("SPRAY"),
    RES_DATA: getBuiltInMiddlewareName("RES_DATA"),
    RES_EXTRACT: getBuiltInMiddlewareName("RES_EXTRACT"),
    TICKET_WBI: getBuiltInMiddlewareName("TICKET_WBI"),
    LOG: getBuiltInMiddlewareName("LOG"),
    CACHE: getBuiltInMiddlewareName("CACHE")
  };
  var ORDER_PRIFIX = "$ORDER_";
  var AssembleDispatcher = /*#__PURE__*/function () {
    function AssembleDispatcher(control) {
      _classCallCheck(this, AssembleDispatcher);
      __publicField(this, "middlewares", []);
      __publicField(this, "middlewareConfigCtxProvider");
      this.control = control;
      this.middlewareConfigCtxProvider = this.control.httpSvc.configCtrl.provide();
    }
    return _createClass(AssembleDispatcher, [{
      key: "with",
      value: function _with(middleware, payload) {
        if (!middleware) return this;
        if (typeof middleware === "string") {
          this.middlewares.push({
            name: "".concat(ORDER_PRIFIX).concat(middleware),
            handler: HttpSvcSprayMiddleware.handler
          });
          if (payload) {
            this.inject(middleware, payload);
          }
        } else if (typeof middleware === "function") {
          this.middlewares.push(new HttpSvcSprayMiddleware(middleware, payload));
        } else if (isMiddleware(middleware)) {
          this.middlewares.push(middleware);
          if (payload) {
            this.inject(middleware.name, payload);
          }
        }
        return this;
      }
    }, {
      key: "inject",
      value: function inject(name, payload) {
        this.middlewareConfigCtxProvider.inject(name, {
          payload: payload
        });
        return this;
      }
    }, {
      key: "disable",
      value: function disable(name) {
        this.middlewareConfigCtxProvider.disable(name);
        return this;
      }
    }, {
      key: "request",
      value: function request(config) {
        var fn = this.control.compose(this.middlewares);
        return this.control.httpSvc.requestCtrl.request(config, this.middlewareConfigCtxProvider.get(), fn);
      }
    }]);
  }();
  var AssembleControl = /*#__PURE__*/function (_HttpSvcControl2) {
    function AssembleControl() {
      var _this12;
      _classCallCheck(this, AssembleControl);
      _this12 = _callSuper(this, AssembleControl, arguments);
      __publicField(_this12, "middlewares", []);
      return _this12;
    }
    _inherits(AssembleControl, _HttpSvcControl2);
    return _createClass(AssembleControl, [{
      key: "alreadyExistsIdx",
      value: function alreadyExistsIdx(middlewareName) {
        return this.middlewares.findIndex(function (m) {
          return m.name === middlewareName;
        });
      }
    }, {
      key: "register",
      value: function register(middlewares) {
        var _this13 = this;
        if (Array.isArray(middlewares)) {
          var reset = false;
          middlewares.forEach(function (m) {
            if (isMiddleware(m)) {
              reset = true;
              var idx = _this13.alreadyExistsIdx(m.name);
              if (idx > -1) {
                _this13.middlewares[idx] = m;
              } else {
                _this13.middlewares.push(m);
              }
            }
          });
          if (reset) {
            this.httpSvc.requestCtrl.reset();
          }
        }
      }
    }, {
      key: "setup",
      value: function setup() {
        return new AssembleDispatcher(this);
      }
    }, {
      key: "disable",
      value: function disable(middlewareName) {
        return this.setup().disable(middlewareName);
      }
    }, {
      key: "with",
      value: function _with(middleware, payload) {
        return this.setup()["with"](middleware, payload);
      }
    }, {
      key: "compose",
      value: function compose(middlewares) {
        var _this14 = this;
        var list1 = _toConsumableArray(this.middlewares);
        var list2 = [];
        var builtInOverride = _defineProperty2(_defineProperty2(_defineProperty2({}, BUILT_IN_MIDDLEWARE.RETRY, null), BUILT_IN_MIDDLEWARE.BODY, null), BUILT_IN_MIDDLEWARE.RES_DATA, null);
        var builtInNames = Object.keys(builtInOverride);
        var unique = {};
        (middlewares || []).forEach(function (m) {
          if (isMiddleware(m)) {
            var middlewareName = m.name;
            if (builtInNames.includes(middlewareName)) {
              if (!builtInOverride[middlewareName]) {
                builtInOverride[middlewareName] = m;
              }
            } else {
              if (middlewareName.startsWith(ORDER_PRIFIX)) {
                middlewareName = middlewareName.substring(ORDER_PRIFIX.length);
                if (!unique[middlewareName] && !(middlewareName in builtInOverride)) {
                  var globalMiddlewareIndex = list1.findIndex(function (m2) {
                    return m2.name === middlewareName;
                  });
                  if (globalMiddlewareIndex > -1) {
                    var realM = list1[globalMiddlewareIndex];
                    list1.splice(globalMiddlewareIndex, 1);
                    unique[middlewareName] = realM;
                    list2.push(realM);
                  }
                }
              } else {
                if (BUILT_IN_MIDDLEWARE.SPRAY === middlewareName) {
                  list2.push(m);
                } else if (!unique[middlewareName]) {
                  unique[middlewareName] = m;
                  list2.push(m);
                }
              }
            }
          }
        });
        var list = [];
        list1.forEach(function (m) {
          if (builtInNames.includes(m.name)) {
            if (!builtInOverride[m.name]) {
              builtInOverride[m.name] = m;
            }
          } else if (!unique[m.name]) {
            list.push(m);
          }
        });
        list.push.apply(list, list2);
        var middlewareList = [builtInOverride[BUILT_IN_MIDDLEWARE.RETRY] || new HttpSvcRetry(), new HttpSvcInitCtx()].concat(list, [builtInOverride[BUILT_IN_MIDDLEWARE.RES_DATA] || new HttpSvcResData(), builtInOverride[BUILT_IN_MIDDLEWARE.BODY] || new HttpSvcBody(), new HttpSvcTimeout(), this.httpSvc.fetch]);
        return /*#__PURE__*/function () {
          var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(context) {
            var _a, _b, index, configCtrl, debug, disableResExtract, dispatch, _dispatch;
            return _regeneratorRuntime().wrap(function _callee17$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
                case 0:
                  _dispatch = function _dispatch3() {
                    _dispatch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(i) {
                      var middleware;
                      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                        while (1) switch (_context16.prev = _context16.next) {
                          case 0:
                            if (!(i === middlewareList.length)) {
                              _context16.next = 2;
                              break;
                            }
                            return _context16.abrupt("return");
                          case 2:
                            if (!(i <= index)) {
                              _context16.next = 4;
                              break;
                            }
                            throw createError(context, "The next() called multiple times");
                          case 4:
                            index = i;
                            middleware = middlewareList[index];
                            if (middleware) {
                              _context16.next = 8;
                              break;
                            }
                            throw createError(context, "Middleware is not exist");
                          case 8:
                            _context16.next = 10;
                            return middleware.handler(context, dispatch.bind(null, i + 1), configCtrl.get(context.middleware, middleware.name));
                          case 10:
                          case "end":
                            return _context16.stop();
                        }
                      }, _callee16);
                    }));
                    return _dispatch.apply(this, arguments);
                  };
                  dispatch = function _dispatch2(_x32) {
                    return _dispatch.apply(this, arguments);
                  };
                  index = -1;
                  configCtrl = _this14.httpSvc.configCtrl;
                  debug = configCtrl.get(context.middleware, "DEBUG").payload;
                  _context17.next = 7;
                  return dispatch(0);
                case 7:
                  if (!debug) {
                    _context17.next = 9;
                    break;
                  }
                  return _context17.abrupt("return", context);
                case 9:
                  disableResExtract = configCtrl.get(context.middleware, BUILT_IN_MIDDLEWARE.RES_EXTRACT).disabled;
                  if (!(!disableResExtract && ((_a = context.response) == null ? void 0 : _a.ok))) {
                    _context17.next = 12;
                    break;
                  }
                  return _context17.abrupt("return", ((_b = context.response) == null ? void 0 : _b.data) || null);
                case 12:
                  return _context17.abrupt("return", context.response);
                case 13:
                case "end":
                  return _context17.stop();
              }
            }, _callee17);
          }));
          return function (_x31) {
            return _ref21.apply(this, arguments);
          };
        }();
      }
    }]);
  }(HttpSvcControl);
  var RequestControl = /*#__PURE__*/function (_HttpSvcControl3) {
    function RequestControl() {
      var _this15;
      _classCallCheck(this, RequestControl);
      _this15 = _callSuper(this, RequestControl, arguments);
      __publicField(_this15, "fn", null);
      return _this15;
    }
    _inherits(RequestControl, _HttpSvcControl3);
    return _createClass(RequestControl, [{
      key: "request",
      value: function () {
        var _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(config) {
          var middlewareCtx,
            fn,
            _args18 = arguments;
          return _regeneratorRuntime().wrap(function _callee18$(_context18) {
            while (1) switch (_context18.prev = _context18.next) {
              case 0:
                middlewareCtx = _args18.length > 1 && _args18[1] !== undefined ? _args18[1] : {};
                fn = _args18.length > 2 ? _args18[2] : undefined;
                if (!fn) {
                  if (!this.fn) {
                    this.generateRequestFunction();
                  }
                  fn = this.fn;
                }
                _context18.next = 5;
                return fn(this.createContext(config, middlewareCtx, fn));
              case 5:
                return _context18.abrupt("return", _context18.sent);
              case 6:
              case "end":
                return _context18.stop();
            }
          }, _callee18, this);
        }));
        function request(_x33) {
          return _request.apply(this, arguments);
        }
        return request;
      }()
    }, {
      key: "generateRequestFunction",
      value: function generateRequestFunction() {
        this.fn = this.httpSvc.assembleCtrl.compose();
      }
    }, {
      key: "reset",
      value: function reset() {
        this.fn = null;
      }
    }, {
      key: "useAsyncRequest",
      get: function get() {
        var _this16 = this;
        return function (asyncRequest, config) {
          var inst = _this16.httpSvc.create(config);
          asyncRequest(inst.request.bind(inst));
        };
      }
    }, {
      key: "createContext",
      value: function createContext(config) {
        var middleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var requestFn = arguments.length > 2 ? arguments[2] : undefined;
        var url = config.url,
          method = config.method;
        var ctx = {
          config: _objectSpread({
            baseURL: this.httpSvc.baseURL
          }, config),
          useAsyncRequest: this.useAsyncRequest,
          middleware: middleware,
          request: {
            url: url,
            method: (method || "get").toUpperCase(),
            "function": requestFn
          }
        };
        return ctx;
      }
    }]);
  }(HttpSvcControl);
  var HttpService$1 = /*#__PURE__*/function () {
    function HttpService$1(initConfig) {
      _classCallCheck(this, HttpService$1);
      __publicField(this, "fetch");
      __publicField(this, "assembleCtrl", new AssembleControl(this));
      __publicField(this, "configCtrl", new ConfigControl(this));
      __publicField(this, "requestCtrl", new RequestControl(this));
      __publicField(this, "baseURL", "//api.domain.com");
      if (initConfig) {
        if (Array.isArray(initConfig)) {
          this.fetch = new HttpSvcFetch();
          this.register(initConfig);
        } else {
          var middlewares = initConfig.middlewares,
            fetch2 = initConfig.fetch,
            baseURL = initConfig.baseURL;
          this.fetch = fetch2 || new HttpSvcFetch();
          this.register(middlewares || []);
          if (baseURL) this.baseURL = baseURL;
        }
      } else {
        this.fetch = new HttpSvcFetch();
        this.register([]);
      }
    }
    return _createClass(HttpService$1, [{
      key: "register",
      value: function register(middlewares) {
        this.assembleCtrl.register(middlewares);
      }
    }, {
      key: "request",
      value: function request(config) {
        return this.requestCtrl.request(config);
      }
    }, {
      key: "disable",
      value: function disable(middlewareName) {
        return this.assembleCtrl.disable(middlewareName);
      }
    }, {
      key: "with",
      value: function _with(middleware, payload) {
        return this.assembleCtrl["with"](middleware, payload);
      }
    }, {
      key: "setFetch",
      value: function setFetch(fetch2) {
        this.fetch = fetch2;
        this.requestCtrl.reset();
      }
    }, {
      key: "create",
      value: function create(config) {
        return new HttpService$1(_objectSpread({
          fetch: this.fetch
        }, config || {}));
      }
    }]);
  }();
  var HttpService = /*#__PURE__*/function (_HttpService$) {
    function HttpService(initConfig) {
      var _this17;
      _classCallCheck(this, HttpService);
      var baseURL = "//api.bilibili.com";
      var commonMiddlewares = [new HttpSvcTicketWbiUpdate(), new HttpSvcCsrf()];
      if (initConfig) {
        var middlewares = [];
        var isArr = Array.isArray(initConfig);
        (isArr ? initConfig : initConfig.middlewares || []).forEach(function (m) {
          var idx = commonMiddlewares.findIndex(function (cm) {
            return m.name === cm.name;
          });
          if (idx > -1) {
            commonMiddlewares.splice(idx, 1);
          }
          middlewares.push(m);
        });
        _this17 = _callSuper(this, HttpService, [{
          fetch: isArr ? void 0 : initConfig.fetch,
          baseURL: !isArr && initConfig.baseURL || baseURL,
          middlewares: [].concat(commonMiddlewares, middlewares)
        }]);
      } else {
        _this17 = _callSuper(this, HttpService, [{
          baseURL: baseURL,
          middlewares: [].concat(commonMiddlewares)
        }]);
      }
      return _assertThisInitialized(_this17);
    }
    _inherits(HttpService, _HttpService$);
    return _createClass(HttpService);
  }(HttpService$1);
  var k = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof commonjsGlobal != "undefined" ? commonjsGlobal : typeof self != "undefined" ? self : {};
  (function () {
    (function (l) {
      (function (h) {
        var d = {
          searchParams: "URLSearchParams" in l,
          iterable: "Symbol" in l && "iterator" in Symbol,
          blob: "FileReader" in l && "Blob" in l && function () {
            try {
              return new Blob(), true;
            } catch (e) {
              return false;
            }
          }(),
          formData: "FormData" in l,
          arrayBuffer: "ArrayBuffer" in l
        };
        function D(e) {
          return e && DataView.prototype.isPrototypeOf(e);
        }
        if (d.arrayBuffer) var v = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
          _ = ArrayBuffer.isView || function (e) {
            return e && v.indexOf(Object.prototype.toString.call(e)) > -1;
          };
        function w(e) {
          if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
          return e.toLowerCase();
        }
        function m(e) {
          return typeof e != "string" && (e = String(e)), e;
        }
        function O(e) {
          var t = {
            next: function next() {
              var a = e.shift();
              return {
                done: a === void 0,
                value: a
              };
            }
          };
          return d.iterable && (t[Symbol.iterator] = function () {
            return t;
          }), t;
        }
        function u(e) {
          this.map = {}, e instanceof u ? e.forEach(function (t, a) {
            this.append(a, t);
          }, this) : Array.isArray(e) ? e.forEach(function (t) {
            this.append(t[0], t[1]);
          }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) {
            this.append(t, e[t]);
          }, this);
        }
        u.prototype.append = function (e, t) {
          e = w(e), t = m(t);
          var a = this.map[e];
          this.map[e] = a ? a + ", " + t : t;
        }, u.prototype["delete"] = function (e) {
          delete this.map[w(e)];
        }, u.prototype.get = function (e) {
          return e = w(e), this.has(e) ? this.map[e] : null;
        }, u.prototype.has = function (e) {
          return this.map.hasOwnProperty(w(e));
        }, u.prototype.set = function (e, t) {
          this.map[w(e)] = m(t);
        }, u.prototype.forEach = function (e, t) {
          for (var a in this.map) this.map.hasOwnProperty(a) && e.call(t, this.map[a], a, this);
        }, u.prototype.keys = function () {
          var e = [];
          return this.forEach(function (t, a) {
            e.push(a);
          }), O(e);
        }, u.prototype.values = function () {
          var e = [];
          return this.forEach(function (t) {
            e.push(t);
          }), O(e);
        }, u.prototype.entries = function () {
          var e = [];
          return this.forEach(function (t, a) {
            e.push([a, t]);
          }), O(e);
        }, d.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
        function A(e) {
          if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
          e.bodyUsed = true;
        }
        function g(e) {
          return new Promise(function (t, a) {
            e.onload = function () {
              t(e.result);
            }, e.onerror = function () {
              a(e.error);
            };
          });
        }
        function B(e) {
          var t = new FileReader(),
            a = g(t);
          return t.readAsArrayBuffer(e), a;
        }
        function P(e) {
          var t = new FileReader(),
            a = g(t);
          return t.readAsText(e), a;
        }
        function S(e) {
          for (var t = new Uint8Array(e), a = new Array(t.length), p = 0; p < t.length; p++) a[p] = String.fromCharCode(t[p]);
          return a.join("");
        }
        function j(e) {
          if (e.slice) return e.slice(0);
          var t = new Uint8Array(e.byteLength);
          return t.set(new Uint8Array(e)), t.buffer;
        }
        function r() {
          return this.bodyUsed = false, this._initBody = function (e) {
            this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : d.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : d.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : d.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : d.arrayBuffer && d.blob && D(e) ? (this._bodyArrayBuffer = j(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : d.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || _(e)) ? this._bodyArrayBuffer = j(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : d.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, d.blob && (this.blob = function () {
            var e = A(this);
            if (e) return e;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }, this.arrayBuffer = function () {
            return this._bodyArrayBuffer ? A(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(B);
          }), this.text = function () {
            var e = A(this);
            if (e) return e;
            if (this._bodyBlob) return P(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(S(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, d.formData && (this.formData = function () {
            return this.text().then(s);
          }), this.json = function () {
            return this.text().then(JSON.parse);
          }, this;
        }
        var o = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function i(e) {
          var t = e.toUpperCase();
          return o.indexOf(t) > -1 ? t : e;
        }
        function n(e, t) {
          t = t || {};
          var a = t.body;
          if (e instanceof n) {
            if (e.bodyUsed) throw new TypeError("Already read");
            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new u(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !a && e._bodyInit != null && (a = e._bodyInit, e.bodyUsed = true);
          } else this.url = String(e);
          if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new u(t.headers)), this.method = i(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && a) throw new TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(a);
        }
        n.prototype.clone = function () {
          return new n(this, {
            body: this._bodyInit
          });
        };
        function s(e) {
          var t = new FormData();
          return e.trim().split("&").forEach(function (a) {
            if (a) {
              var p = a.split("="),
                y = p.shift().replace(/\+/g, " "),
                f = p.join("=").replace(/\+/g, " ");
              t.append(decodeURIComponent(y), decodeURIComponent(f));
            }
          }), t;
        }
        function c(e) {
          var t = new u(),
            a = e.replace(/\r?\n[\t ]+/g, " ");
          return a.split(/\r?\n/).forEach(function (p) {
            var y = p.split(":"),
              f = y.shift().trim();
            if (f) {
              var L = y.join(":").trim();
              t.append(f, L);
            }
          }), t;
        }
        r.call(n.prototype);
        function b(e, t) {
          t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new u(t.headers), this.url = t.url || "", this._initBody(e);
        }
        r.call(b.prototype), b.prototype.clone = function () {
          return new b(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new u(this.headers),
            url: this.url
          });
        }, b.error = function () {
          var e = new b(null, {
            status: 0,
            statusText: ""
          });
          return e.type = "error", e;
        };
        var E = [301, 302, 303, 307, 308];
        b.redirect = function (e, t) {
          if (E.indexOf(t) === -1) throw new RangeError("Invalid status code");
          return new b(null, {
            status: t,
            headers: {
              location: e
            }
          });
        }, h.DOMException = l.DOMException;
        try {
          new h.DOMException();
        } catch (e) {
          h.DOMException = function (t, a) {
            this.message = t, this.name = a;
            var p = Error(t);
            this.stack = p.stack;
          }, h.DOMException.prototype = Object.create(Error.prototype), h.DOMException.prototype.constructor = h.DOMException;
        }
        function T(e, t) {
          return new Promise(function (a, p) {
            var y = new n(e, t);
            if (y.signal && y.signal.aborted) return p(new h.DOMException("Aborted", "AbortError"));
            var f = new XMLHttpRequest();
            function L() {
              f.abort();
            }
            f.onload = function () {
              var R = {
                status: f.status,
                statusText: f.statusText,
                headers: c(f.getAllResponseHeaders() || "")
              };
              R.url = "responseURL" in f ? f.responseURL : R.headers.get("X-Request-URL");
              var x = "response" in f ? f.response : f.responseText;
              a(new b(x, R));
            }, f.onerror = function () {
              p(new TypeError("Network request failed"));
            }, f.ontimeout = function () {
              p(new TypeError("Network request failed"));
            }, f.onabort = function () {
              p(new h.DOMException("Aborted", "AbortError"));
            }, f.open(y.method, y.url, true), y.credentials === "include" ? f.withCredentials = true : y.credentials === "omit" && (f.withCredentials = false), "responseType" in f && d.blob && (f.responseType = "blob"), y.headers.forEach(function (R, x) {
              f.setRequestHeader(x, R);
            }), y.signal && (y.signal.addEventListener("abort", L), f.onreadystatechange = function () {
              f.readyState === 4 && y.signal.removeEventListener("abort", L);
            }), f.send(typeof y._bodyInit == "undefined" ? null : y._bodyInit);
          });
        }
        return T.polyfill = true, l.fetch || (l.fetch = T, l.Headers = u, l.Request = n, l.Response = b), h.Headers = u, h.Request = n, h.Response = b, h.fetch = T, Object.defineProperty(h, "__esModule", {
          value: true
        }), h;
      })({});
    })(typeof self != "undefined" ? self : k);
  })();
  (function (l) {
    l();
  })(function () {
    function l(r, o) {
      if (!(r instanceof o)) throw new TypeError("Cannot call a class as a function");
    }
    function h(r, o) {
      for (var i = 0; i < o.length; i++) {
        var n = o[i];
        n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(r, n.key, n);
      }
    }
    function d(r, o, i) {
      return o && h(r.prototype, o), i && h(r, i), Object.defineProperty(r, "prototype", {
        writable: false
      }), r;
    }
    function D(r, o) {
      if (typeof o != "function" && o !== null) throw new TypeError("Super expression must either be null or a function");
      r.prototype = Object.create(o && o.prototype, {
        constructor: {
          value: r,
          writable: true,
          configurable: true
        }
      }), Object.defineProperty(r, "prototype", {
        writable: false
      }), o && _(r, o);
    }
    function v(r) {
      return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (i) {
        return i.__proto__ || Object.getPrototypeOf(i);
      }, v(r);
    }
    function _(r, o) {
      return _ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (n, s) {
        return n.__proto__ = s, n;
      }, _(r, o);
    }
    function w() {
      if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return false;
      if (typeof Proxy == "function") return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), true;
      } catch (r) {
        return false;
      }
    }
    function m(r) {
      if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return r;
    }
    function O(r, o) {
      if (o && (_typeof(o) == "object" || typeof o == "function")) return o;
      if (o !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return m(r);
    }
    function u(r) {
      var o = w();
      return function () {
        var n = v(r),
          s;
        if (o) {
          var c = v(this).constructor;
          s = Reflect.construct(n, arguments, c);
        } else s = n.apply(this, arguments);
        return O(this, s);
      };
    }
    function A(r, o) {
      for (; !Object.prototype.hasOwnProperty.call(r, o) && (r = v(r), r !== null););
      return r;
    }
    function g() {
      return typeof Reflect != "undefined" && Reflect.get ? g = Reflect.get.bind() : g = function g(o, i, n) {
        var s = A(o, i);
        if (!!s) {
          var c = Object.getOwnPropertyDescriptor(s, i);
          return c.get ? c.get.call(arguments.length < 3 ? o : n) : c.value;
        }
      }, g.apply(this, arguments);
    }
    var B = function () {
        function r() {
          l(this, r), Object.defineProperty(this, "listeners", {
            value: {},
            writable: true,
            configurable: true
          });
        }
        return d(r, [{
          key: "addEventListener",
          value: function value(i, n, s) {
            i in this.listeners || (this.listeners[i] = []), this.listeners[i].push({
              callback: n,
              options: s
            });
          }
        }, {
          key: "removeEventListener",
          value: function value(i, n) {
            if (i in this.listeners) {
              for (var s = this.listeners[i], c = 0, b = s.length; c < b; c++) if (s[c].callback === n) {
                s.splice(c, 1);
                return;
              }
            }
          }
        }, {
          key: "dispatchEvent",
          value: function value(i) {
            var _this18 = this;
            if (i.type in this.listeners) {
              var _loop = function _loop() {
                  E = s[c];
                  try {
                    E.callback.call(_this18, i);
                  } catch (T) {
                    Promise.resolve().then(function () {
                      throw T;
                    });
                  }
                  E.options && E.options.once && _this18.removeEventListener(i.type, E.callback);
                },
                E;
              for (var n = this.listeners[i.type], s = n.slice(), c = 0, b = s.length; c < b; c++) {
                _loop();
              }
              return !i.defaultPrevented;
            }
          }
        }]), r;
      }(),
      P = function (r) {
        D(i, r);
        var o = u(i);
        function i() {
          var n;
          return l(this, i), n = o.call(this), n.listeners || B.call(m(n)), Object.defineProperty(m(n), "aborted", {
            value: false,
            writable: true,
            configurable: true
          }), Object.defineProperty(m(n), "onabort", {
            value: null,
            writable: true,
            configurable: true
          }), Object.defineProperty(m(n), "reason", {
            value: void 0,
            writable: true,
            configurable: true
          }), n;
        }
        return d(i, [{
          key: "toString",
          value: function value() {
            return "[object AbortSignal]";
          }
        }, {
          key: "dispatchEvent",
          value: function value(s) {
            s.type === "abort" && (this.aborted = true, typeof this.onabort == "function" && this.onabort.call(this, s)), g(v(i.prototype), "dispatchEvent", this).call(this, s);
          }
        }]), i;
      }(B),
      S = function () {
        function r() {
          l(this, r), Object.defineProperty(this, "signal", {
            value: new P(),
            writable: true,
            configurable: true
          });
        }
        return d(r, [{
          key: "abort",
          value: function value(i) {
            var n;
            try {
              n = new Event("abort");
            } catch (c) {
              typeof document != "undefined" ? document.createEvent ? (n = document.createEvent("Event"), n.initEvent("abort", false, false)) : (n = document.createEventObject(), n.type = "abort") : n = {
                type: "abort",
                bubbles: false,
                cancelable: false
              };
            }
            var s = i;
            if (s === void 0) if (typeof document == "undefined") s = new Error("This operation was aborted"), s.name = "AbortError";else try {
              s = new DOMException("signal is aborted without reason");
            } catch (c) {
              s = new Error("This operation was aborted"), s.name = "AbortError";
            }
            this.signal.reason = s, this.signal.dispatchEvent(n);
          }
        }, {
          key: "toString",
          value: function value() {
            return "[object AbortController]";
          }
        }]), r;
      }();
    typeof Symbol != "undefined" && Symbol.toStringTag && (S.prototype[Symbol.toStringTag] = "AbortController", P.prototype[Symbol.toStringTag] = "AbortSignal");
    function j(r) {
      return r.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ? (console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"), true) : typeof r.Request == "function" && !r.Request.prototype.hasOwnProperty("signal") || !r.AbortController;
    }
    (function (r) {
      !j(r) || (r.AbortController = S, r.AbortSignal = P);
    })(typeof self != "undefined" ? self : k);
  });
  var IS_UAT = location.hostname.includes("uat-") || location.search.includes("_apiEnv_=uat");
  var IS_PRE = location.hostname.includes("pre-") || location.search.includes("_apiEnv_=pre");
  var origin = "".concat(location.protocol, "//").concat(IS_UAT ? "uat-" : IS_PRE ? "pre-" : "", "activity-template.bilibili.co");
  var managerOrigin = "//".concat(IS_UAT ? "uat-" : IS_PRE ? "pre-" : "", "manager.bilibili.co");
  new HttpService({
    baseURL: origin
  });
  new HttpService({
    baseURL: managerOrigin
  });
  new HttpService([{
    name: "SET_DEFAULT_HEADERS",
    handler: function handler(ctx, next) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
        var _ctx$request5, method, _headers, _key3;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              if (ctx.request) {
                _ctx$request5 = ctx.request, method = _ctx$request5.method, _headers = _ctx$request5.headers;
                if (method === "POST") {
                  _key3 = "Content-Type";
                  ctx.request.headers = _objectSpread(_objectSpread({}, _headers || {}), {}, _defineProperty2({}, _key3, (_headers == null ? void 0 : _headers[_key3]) || "application/x-www-form-urlencoded"));
                }
              }
              _context19.next = 3;
              return next();
            case 3:
            case "end":
              return _context19.stop();
          }
        }, _callee19);
      }))();
    }
  }]);
  var baseRequest = new HttpService();
  var request = /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(params) {
      var res;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            _context20.next = 2;
            return baseRequest.request(params);
          case 2:
            res = _context20.sent;
            if (!("_ts_rpc_return_" in res)) {
              _context20.next = 7;
              break;
            }
            if (!(res._ts_rpc_return_.code === 0)) {
              _context20.next = 6;
              break;
            }
            return _context20.abrupt("return", res._ts_rpc_return_.data);
          case 6:
            throw res;
          case 7:
            if (!(res.code !== 0)) {
              _context20.next = 9;
              break;
            }
            throw res;
          case 9:
            return _context20.abrupt("return", res.data);
          case 10:
          case "end":
            return _context20.stop();
        }
      }, _callee20);
    }));
    return function request(_x34) {
      return _ref22.apply(this, arguments);
    };
  }();
  function arrayMap$2(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  var _arrayMap = arrayMap$2;
  function arrayEach$1(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  var _arrayEach = arrayEach$1;
  var overArg = _overArg;
  var nativeKeys$1 = overArg(Object.keys, Object);
  var _nativeKeys = nativeKeys$1;
  var isPrototype = _isPrototype,
    nativeKeys = _nativeKeys;
  var objectProto$2 = Object.prototype;
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
  function baseKeys$1(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$1.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  var _baseKeys = baseKeys$1;
  var arrayLikeKeys = _arrayLikeKeys,
    baseKeys = _baseKeys,
    isArrayLike = isArrayLike_1;
  function keys$3(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  var keys_1 = keys$3;
  var copyObject$4 = _copyObject,
    keys$2 = keys_1;
  function baseAssign$1(object, source) {
    return object && copyObject$4(source, keys$2(source), object);
  }
  var _baseAssign = baseAssign$1;
  var copyObject$3 = _copyObject,
    keysIn$2 = keysIn_1;
  function baseAssignIn$1(object, source) {
    return object && copyObject$3(source, keysIn$2(source), object);
  }
  var _baseAssignIn = baseAssignIn$1;
  function arrayFilter$1(array, predicate) {
    var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  var _arrayFilter = arrayFilter$1;
  function stubArray$2() {
    return [];
  }
  var stubArray_1 = stubArray$2;
  var arrayFilter = _arrayFilter,
    stubArray$1 = stubArray_1;
  var objectProto$1 = Object.prototype;
  var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
  var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function (object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols$1(object), function (symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  var _getSymbols = getSymbols$3;
  var copyObject$2 = _copyObject,
    getSymbols$2 = _getSymbols;
  function copySymbols$1(source, object) {
    return copyObject$2(source, getSymbols$2(source), object);
  }
  var _copySymbols = copySymbols$1;
  function arrayPush$3(array, values) {
    var index = -1,
      length = values.length,
      offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  var _arrayPush = arrayPush$3;
  var arrayPush$2 = _arrayPush,
    getPrototype = _getPrototype,
    getSymbols$1 = _getSymbols,
    stubArray = stubArray_1;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function (object) {
    var result = [];
    while (object) {
      arrayPush$2(result, getSymbols$1(object));
      object = getPrototype(object);
    }
    return result;
  };
  var _getSymbolsIn = getSymbolsIn$2;
  var copyObject$1 = _copyObject,
    getSymbolsIn$1 = _getSymbolsIn;
  function copySymbolsIn$1(source, object) {
    return copyObject$1(source, getSymbolsIn$1(source), object);
  }
  var _copySymbolsIn = copySymbolsIn$1;
  var arrayPush$1 = _arrayPush,
    isArray$6 = isArray_1;
  function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray$6(object) ? result : arrayPush$1(result, symbolsFunc(object));
  }
  var _baseGetAllKeys = baseGetAllKeys$2;
  var baseGetAllKeys$1 = _baseGetAllKeys,
    getSymbols = _getSymbols,
    keys$1 = keys_1;
  function getAllKeys$1(object) {
    return baseGetAllKeys$1(object, keys$1, getSymbols);
  }
  var _getAllKeys = getAllKeys$1;
  var baseGetAllKeys = _baseGetAllKeys,
    getSymbolsIn = _getSymbolsIn,
    keysIn$1 = keysIn_1;
  function getAllKeysIn$2(object) {
    return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
  }
  var _getAllKeysIn = getAllKeysIn$2;
  var getNative$3 = _getNative,
    root$3 = _root;
  var DataView$2 = getNative$3(root$3, "DataView");
  var _DataView = DataView$2;
  var getNative$2 = _getNative,
    root$2 = _root;
  var Promise$2 = getNative$2(root$2, "Promise");
  var _Promise = Promise$2;
  var getNative$1 = _getNative,
    root$1 = _root;
  var Set$1 = getNative$1(root$1, "Set");
  var _Set = Set$1;
  var getNative = _getNative,
    root = _root;
  var WeakMap$1 = getNative(root, "WeakMap");
  var _WeakMap = WeakMap$1;
  var DataView$1 = _DataView,
    Map = _Map,
    Promise$1 = _Promise,
    Set = _Set,
    WeakMap = _WeakMap,
    baseGetTag$1 = _baseGetTag,
    toSource = _toSource;
  var mapTag$3 = "[object Map]",
    objectTag$1 = "[object Object]",
    promiseTag = "[object Promise]",
    setTag$3 = "[object Set]",
    weakMapTag$1 = "[object WeakMap]";
  var dataViewTag$2 = "[object DataView]";
  var dataViewCtorString = toSource(DataView$1),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
  var getTag$3 = baseGetTag$1;
  if (DataView$1 && getTag$3(new DataView$1(new ArrayBuffer(1))) != dataViewTag$2 || Map && getTag$3(new Map()) != mapTag$3 || Promise$1 && getTag$3(Promise$1.resolve()) != promiseTag || Set && getTag$3(new Set()) != setTag$3 || WeakMap && getTag$3(new WeakMap()) != weakMapTag$1) {
    getTag$3 = function getTag$3(value) {
      var result = baseGetTag$1(value),
        Ctor = result == objectTag$1 ? value.constructor : void 0,
        ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag$2;
          case mapCtorString:
            return mapTag$3;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag$3;
          case weakMapCtorString:
            return weakMapTag$1;
        }
      }
      return result;
    };
  }
  var _getTag = getTag$3;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function initCloneArray$1(array) {
    var length = array.length,
      result = new array.constructor(length);
    if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  var _initCloneArray = initCloneArray$1;
  var cloneArrayBuffer$1 = _cloneArrayBuffer;
  function cloneDataView$1(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$1(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  var _cloneDataView = cloneDataView$1;
  var reFlags = /\w*$/;
  function cloneRegExp$1(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  var _cloneRegExp = cloneRegExp$1;
  var Symbol$3 = _Symbol;
  var symbolProto$1 = Symbol$3 ? Symbol$3.prototype : void 0,
    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
  function cloneSymbol$1(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  var _cloneSymbol = cloneSymbol$1;
  var cloneArrayBuffer = _cloneArrayBuffer,
    cloneDataView = _cloneDataView,
    cloneRegExp = _cloneRegExp,
    cloneSymbol = _cloneSymbol,
    cloneTypedArray = _cloneTypedArray;
  var boolTag$1 = "[object Boolean]",
    dateTag$1 = "[object Date]",
    mapTag$2 = "[object Map]",
    numberTag$1 = "[object Number]",
    regexpTag$1 = "[object RegExp]",
    setTag$2 = "[object Set]",
    stringTag$1 = "[object String]",
    symbolTag$2 = "[object Symbol]";
  var arrayBufferTag$1 = "[object ArrayBuffer]",
    dataViewTag$1 = "[object DataView]",
    float32Tag$1 = "[object Float32Array]",
    float64Tag$1 = "[object Float64Array]",
    int8Tag$1 = "[object Int8Array]",
    int16Tag$1 = "[object Int16Array]",
    int32Tag$1 = "[object Int32Array]",
    uint8Tag$1 = "[object Uint8Array]",
    uint8ClampedTag$1 = "[object Uint8ClampedArray]",
    uint16Tag$1 = "[object Uint16Array]",
    uint32Tag$1 = "[object Uint32Array]";
  function initCloneByTag$1(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$1:
        return cloneArrayBuffer(object);
      case boolTag$1:
      case dateTag$1:
        return new Ctor(+object);
      case dataViewTag$1:
        return cloneDataView(object, isDeep);
      case float32Tag$1:
      case float64Tag$1:
      case int8Tag$1:
      case int16Tag$1:
      case int32Tag$1:
      case uint8Tag$1:
      case uint8ClampedTag$1:
      case uint16Tag$1:
      case uint32Tag$1:
        return cloneTypedArray(object, isDeep);
      case mapTag$2:
        return new Ctor();
      case numberTag$1:
      case stringTag$1:
        return new Ctor(object);
      case regexpTag$1:
        return cloneRegExp(object);
      case setTag$2:
        return new Ctor();
      case symbolTag$2:
        return cloneSymbol(object);
    }
  }
  var _initCloneByTag = initCloneByTag$1;
  var getTag$2 = _getTag,
    isObjectLike$2 = isObjectLike_1;
  var mapTag$1 = "[object Map]";
  function baseIsMap$1(value) {
    return isObjectLike$2(value) && getTag$2(value) == mapTag$1;
  }
  var _baseIsMap = baseIsMap$1;
  var baseIsMap = _baseIsMap,
    baseUnary$1 = _baseUnary,
    nodeUtil$1 = _nodeUtilExports;
  var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
  var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
  var isMap_1 = isMap$1;
  var getTag$1 = _getTag,
    isObjectLike$1 = isObjectLike_1;
  var setTag$1 = "[object Set]";
  function baseIsSet$1(value) {
    return isObjectLike$1(value) && getTag$1(value) == setTag$1;
  }
  var _baseIsSet = baseIsSet$1;
  var baseIsSet = _baseIsSet,
    baseUnary = _baseUnary,
    nodeUtil = _nodeUtilExports;
  var nodeIsSet = nodeUtil && nodeUtil.isSet;
  var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
  var isSet_1 = isSet$1;
  var Stack = _Stack,
    arrayEach = _arrayEach,
    assignValue$1 = _assignValue,
    baseAssign = _baseAssign,
    baseAssignIn = _baseAssignIn,
    cloneBuffer = _cloneBufferExports,
    copyArray = _copyArray,
    copySymbols = _copySymbols,
    copySymbolsIn = _copySymbolsIn,
    getAllKeys = _getAllKeys,
    getAllKeysIn$1 = _getAllKeysIn,
    getTag = _getTag,
    initCloneArray = _initCloneArray,
    initCloneByTag = _initCloneByTag,
    initCloneObject = _initCloneObject,
    isArray$5 = isArray_1,
    isBuffer = isBufferExports,
    isMap = isMap_1,
    isObject$1 = isObject_1,
    isSet = isSet_1,
    keys = keys_1,
    keysIn = keysIn_1;
  var CLONE_DEEP_FLAG$1 = 1,
    CLONE_FLAT_FLAG$1 = 2,
    CLONE_SYMBOLS_FLAG$1 = 4;
  var argsTag = "[object Arguments]",
    arrayTag = "[object Array]",
    boolTag = "[object Boolean]",
    dateTag = "[object Date]",
    errorTag = "[object Error]",
    funcTag = "[object Function]",
    genTag = "[object GeneratorFunction]",
    mapTag = "[object Map]",
    numberTag = "[object Number]",
    objectTag = "[object Object]",
    regexpTag = "[object RegExp]",
    setTag = "[object Set]",
    stringTag = "[object String]",
    symbolTag$1 = "[object Symbol]",
    weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]",
    dataViewTag = "[object DataView]",
    float32Tag = "[object Float32Array]",
    float64Tag = "[object Float64Array]",
    int8Tag = "[object Int8Array]",
    int16Tag = "[object Int16Array]",
    int32Tag = "[object Int32Array]",
    uint8Tag = "[object Uint8Array]",
    uint8ClampedTag = "[object Uint8ClampedArray]",
    uint16Tag = "[object Uint16Array]",
    uint32Tag = "[object Uint32Array]";
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  function baseClone$1(value, bitmask, customizer, key, object, stack) {
    var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$1,
      isFlat = bitmask & CLONE_FLAT_FLAG$1,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== void 0) {
      return result;
    }
    if (!isObject$1(value)) {
      return value;
    }
    var isArr = isArray$5(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;
      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        result = isFlat || isFunc ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (isSet(value)) {
      value.forEach(function (subValue) {
        result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function (subValue, key2) {
        result.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
      });
    }
    var keysFunc = isFull ? isFlat ? getAllKeysIn$1 : getAllKeys : isFlat ? keysIn : keys;
    var props = isArr ? void 0 : keysFunc(value);
    arrayEach(props || value, function (subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue$1(result, key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
    });
    return result;
  }
  var _baseClone = baseClone$1;
  var baseGetTag = _baseGetTag,
    isObjectLike = isObjectLike_1;
  var symbolTag = "[object Symbol]";
  function isSymbol$3(value) {
    return _typeof(value) == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  var isSymbol_1 = isSymbol$3;
  var isArray$4 = isArray_1,
    isSymbol$2 = isSymbol_1;
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
  function isKey$1(value, object) {
    if (isArray$4(value)) {
      return false;
    }
    var type = _typeof(value);
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$2(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }
  var _isKey = isKey$1;
  var MapCache = _MapCache;
  var FUNC_ERROR_TEXT = "Expected a function";
  function memoize$1(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function memoized() {
      var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize$1.Cache || MapCache)();
    return memoized;
  }
  memoize$1.Cache = MapCache;
  var memoize_1 = memoize$1;
  var memoize = memoize_1;
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped$1(func) {
    var result = memoize(func, function (key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });
    var cache = result.cache;
    return result;
  }
  var _memoizeCapped = memoizeCapped$1;
  var memoizeCapped = _memoizeCapped;
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath$1 = memoizeCapped(function (string) {
    var result = [];
    if (string.charCodeAt(0) === 46) {
      result.push("");
    }
    string.replace(rePropName, function (match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
  });
  var _stringToPath = stringToPath$1;
  var Symbol$2 = _Symbol,
    arrayMap$1 = _arrayMap,
    isArray$3 = isArray_1,
    isSymbol$1 = isSymbol_1;
  var INFINITY$1 = 1 / 0;
  var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0,
    symbolToString = symbolProto ? symbolProto.toString : void 0;
  function baseToString$1(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray$3(value)) {
      return arrayMap$1(value, baseToString$1) + "";
    }
    if (isSymbol$1(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
  }
  var _baseToString = baseToString$1;
  var baseToString = _baseToString;
  function toString$2(value) {
    return value == null ? "" : baseToString(value);
  }
  var toString_1 = toString$2;
  var isArray$2 = isArray_1,
    isKey = _isKey,
    stringToPath = _stringToPath,
    toString$1 = toString_1;
  function castPath$6(value, object) {
    if (isArray$2(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString$1(value));
  }
  var _castPath = castPath$6;
  function last$1(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : void 0;
  }
  var last_1 = last$1;
  var isSymbol = isSymbol_1;
  var INFINITY = 1 / 0;
  function toKey$4(value) {
    if (typeof value == "string" || isSymbol(value)) {
      return value;
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  var _toKey = toKey$4;
  var castPath$5 = _castPath,
    toKey$3 = _toKey;
  function baseGet$2(object, path) {
    path = castPath$5(path, object);
    var index = 0,
      length = path.length;
    while (object != null && index < length) {
      object = object[toKey$3(path[index++])];
    }
    return index && index == length ? object : void 0;
  }
  var _baseGet = baseGet$2;
  function baseSlice$1(array, start, end) {
    var index = -1,
      length = array.length;
    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }
  var _baseSlice = baseSlice$1;
  var baseGet$1 = _baseGet,
    baseSlice = _baseSlice;
  function parent$1(object, path) {
    return path.length < 2 ? object : baseGet$1(object, baseSlice(path, 0, -1));
  }
  var _parent = parent$1;
  var castPath$4 = _castPath,
    last = last_1,
    parent = _parent,
    toKey$2 = _toKey;
  function baseUnset$1(object, path) {
    path = castPath$4(path, object);
    object = parent(object, path);
    return object == null || delete object[toKey$2(last(path))];
  }
  var _baseUnset = baseUnset$1;
  var isPlainObject = isPlainObject_1;
  function customOmitClone$1(value) {
    return isPlainObject(value) ? void 0 : value;
  }
  var _customOmitClone = customOmitClone$1;
  var Symbol$1 = _Symbol,
    isArguments$1 = isArguments_1,
    isArray$1 = isArray_1;
  var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
  function isFlattenable$1(value) {
    return isArray$1(value) || isArguments$1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }
  var _isFlattenable = isFlattenable$1;
  var arrayPush = _arrayPush,
    isFlattenable = _isFlattenable;
  function baseFlatten$1(array, depth, predicate, isStrict, result) {
    var index = -1,
      length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          baseFlatten$1(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }
  var _baseFlatten = baseFlatten$1;
  var baseFlatten = _baseFlatten;
  function flatten$1(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
  }
  var flatten_1 = flatten$1;
  var flatten = flatten_1,
    overRest = _overRest,
    setToString = _setToString;
  function flatRest$2(func) {
    return setToString(overRest(func, void 0, flatten), func + "");
  }
  var _flatRest = flatRest$2;
  var arrayMap = _arrayMap,
    baseClone = _baseClone,
    baseUnset = _baseUnset,
    castPath$3 = _castPath,
    copyObject = _copyObject,
    customOmitClone = _customOmitClone,
    flatRest$1 = _flatRest,
    getAllKeysIn = _getAllKeysIn;
  var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;
  flatRest$1(function (object, paths) {
    var result = {};
    if (object == null) {
      return result;
    }
    var isDeep = false;
    paths = arrayMap(paths, function (path) {
      path = castPath$3(path, object);
      isDeep || (isDeep = path.length > 1);
      return path;
    });
    copyObject(object, getAllKeysIn(object), result);
    if (isDeep) {
      result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
    }
    var length = paths.length;
    while (length--) {
      baseUnset(result, paths[length]);
    }
    return result;
  });
  var assignValue = _assignValue,
    castPath$2 = _castPath,
    isIndex$1 = _isIndex,
    isObject = isObject_1,
    toKey$1 = _toKey;
  function baseSet$1(object, path, value, customizer) {
    if (!isObject(object)) {
      return object;
    }
    path = castPath$2(path, object);
    var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;
    while (nested != null && ++index < length) {
      var key = toKey$1(path[index]),
        newValue = value;
      if (key === "__proto__" || key === "constructor" || key === "prototype") {
        return object;
      }
      if (index != lastIndex) {
        var objValue = nested[key];
        newValue = customizer ? customizer(objValue, key, nested) : void 0;
        if (newValue === void 0) {
          newValue = isObject(objValue) ? objValue : isIndex$1(path[index + 1]) ? [] : {};
        }
      }
      assignValue(nested, key, newValue);
      nested = nested[key];
    }
    return object;
  }
  var _baseSet = baseSet$1;
  var baseGet = _baseGet,
    baseSet = _baseSet,
    castPath$1 = _castPath;
  function basePickBy$1(object, paths, predicate) {
    var index = -1,
      length = paths.length,
      result = {};
    while (++index < length) {
      var path = paths[index],
        value = baseGet(object, path);
      if (predicate(value, path)) {
        baseSet(result, castPath$1(path, object), value);
      }
    }
    return result;
  }
  var _basePickBy = basePickBy$1;
  function baseHasIn$1(object, key) {
    return object != null && key in Object(object);
  }
  var _baseHasIn = baseHasIn$1;
  var castPath = _castPath,
    isArguments = isArguments_1,
    isArray = isArray_1,
    isIndex = _isIndex,
    isLength = isLength_1,
    toKey = _toKey;
  function hasPath$1(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1,
      length = path.length,
      result = false;
    while (++index < length) {
      var key = toKey(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
  }
  var _hasPath = hasPath$1;
  var baseHasIn = _baseHasIn,
    hasPath = _hasPath;
  function hasIn$1(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }
  var hasIn_1 = hasIn$1;
  var basePickBy = _basePickBy,
    hasIn = hasIn_1;
  function basePick$1(object, paths) {
    return basePickBy(object, paths, function (value, path) {
      return hasIn(object, path);
    });
  }
  var _basePick = basePick$1;
  var basePick = _basePick,
    flatRest = _flatRest;
  flatRest(function (object, paths) {
    return object == null ? {} : basePick(object, paths);
  });
  var dateUtil = {
    // 解决在 safari 中，某些时间字符串生成时间失败的问题
    convertDateStr: function convertDateStr(dateStr) {
      return dateStr.replace(/-/g, "/");
    },
    "new": function _new(time) {
      if (typeof time === "string") {
        return new Date(dateUtil.convertDateStr(time));
      }
      return new Date(time);
    },
    format: function format(date, _format) {
      if (!dateUtil.isValid(date)) {
        console.error(new Error("无效的 date 对象"));
        return _format;
      }
      var formatMap = {
        YYYY: function YYYY() {
          return String(date.getFullYear());
        },
        YY: function YY() {
          return formatMap.YYYY().slice(2, 4);
        },
        MM: function MM() {
          return formatMap.M().padStart(2, "0");
        },
        M: function M() {
          return String(date.getMonth() + 1);
        },
        DD: function DD() {
          return formatMap.D().padStart(2, "0");
        },
        D: function D() {
          return String(date.getDate());
        },
        HH: function HH() {
          return formatMap.H().padStart(2, "0");
        },
        H: function H() {
          return String(date.getHours());
        },
        mm: function mm() {
          return formatMap.m().padStart(2, "0");
        },
        m: function m() {
          return String(date.getMinutes());
        },
        ss: function ss() {
          return formatMap.s().padStart(2, "0");
        },
        s: function s() {
          return String(date.getSeconds());
        }
      };
      return Object.keys(formatMap).reduce(function (res, key) {
        var regexp = new RegExp(key, "g");
        return res.replace(regexp, formatMap[key]());
      }, _format);
    },
    isValid: function isValid(date) {
      return date instanceof Date && !Number.isNaN(date.getTime());
    },
    startOf: function startOf(date, unit) {
      var dateCopy = new Date(date);
      var unitMap = {
        millisecond: function millisecond() {
          dateCopy.setMilliseconds(0);
        },
        second: function second() {
          dateCopy.setSeconds(0);
        },
        minute: function minute() {
          dateCopy.setMinutes(0);
        },
        hour: function hour() {
          dateCopy.setHours(0);
        },
        day: function day() {
          dateCopy.setDate(1);
        }
      };
      var weekUnitMap = {
        millisecond: unitMap.millisecond,
        second: unitMap.second,
        minute: unitMap.minute,
        hour: unitMap.hour,
        week: function week() {
          var dayIndex = dateCopy.getDay();
          var diff = (dayIndex === 0 ? 7 : dayIndex) - 1;
          dateCopy.setDate(dateCopy.getDate() - diff);
        }
      };
      if (unit === "week") {
        for (var _key4 in weekUnitMap) {
          weekUnitMap[_key4]();
        }
      } else {
        for (var _key5 in unitMap) {
          if (_key5 === unit) {
            break;
          }
          unitMap[_key5]();
        }
      }
      return dateCopy;
    },
    endOf: function endOf(date, unit) {
      var dateCopy = new Date(date);
      var unitMap = {
        millisecond: function millisecond() {
          dateCopy.setMilliseconds(999);
        },
        second: function second() {
          dateCopy.setSeconds(59);
        },
        minute: function minute() {
          dateCopy.setMinutes(59);
        },
        hour: function hour() {
          dateCopy.setHours(23);
        },
        day: function day() {
          var tempDate = new Date(dateCopy.getFullYear(), dateCopy.getMonth() + 1, 0);
          dateCopy.setDate(tempDate.getDate());
        }
      };
      var weekUnitMap = {
        millisecond: unitMap.millisecond,
        second: unitMap.second,
        minute: unitMap.minute,
        hour: unitMap.hour,
        week: function week() {
          var dayIndex = dateCopy.getDay();
          var diff = 7 - (dayIndex === 0 ? 7 : dayIndex);
          dateCopy.setDate(dateCopy.getDate() + diff);
        }
      };
      if (unit === "week") {
        for (var _key6 in weekUnitMap) {
          weekUnitMap[_key6]();
        }
      } else {
        for (var _key7 in unitMap) {
          if (_key7 === unit) {
            break;
          }
          unitMap[_key7]();
        }
      }
      return dateCopy;
    },
    add: function add(date, value, unit) {
      var dateCopy = new Date(date);
      var unitStrMap = {
        second: "seconds",
        minute: "minutes",
        hour: "hours",
        day: "days",
        week: "weeks",
        month: "months"
      };
      unit = unitStrMap[unit] || unit;
      var unitMap = {
        seconds: function seconds() {
          dateCopy.setSeconds(dateCopy.getSeconds() + value);
        },
        minutes: function minutes() {
          dateCopy.setMinutes(dateCopy.getMinutes() + value);
        },
        hours: function hours() {
          dateCopy.setHours(dateCopy.getHours() + value);
        },
        days: function days() {
          dateCopy.setDate(dateCopy.getDate() + value);
        },
        weeks: function weeks() {
          dateCopy.setDate(dateCopy.getDate() + value * 7);
        },
        months: function months() {
          dateCopy.setMonth(dateCopy.getMonth() + value);
        }
      };
      unitMap[unit]();
      return dateCopy;
    }
  };
  var TimeService = /*#__PURE__*/function () {
    function TimeService() {
      _classCallCheck(this, TimeService);
      this.msDiffWithServer = null;
      this.init();
    }
    return _createClass(TimeService, [{
      key: "init",
      value: function init() {
        this.updateMsDiff();
      }
    }, {
      key: "create",
      value: function create() {
        return new TimeService();
      }
    }, {
      key: "updateMsDiff",
      value: function () {
        var _updateMsDiff = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
          var res;
          return _regeneratorRuntime().wrap(function _callee21$(_context21) {
            while (1) switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return this.queryTimestamp();
              case 2:
                res = _context21.sent;
                this.msDiffWithServer = res.microtime - Date.now();
              case 4:
              case "end":
                return _context21.stop();
            }
          }, _callee21, this);
        }));
        function updateMsDiff() {
          return _updateMsDiff.apply(this, arguments);
        }
        return updateMsDiff;
      }()
    }, {
      key: "queryTimestamp",
      value: function () {
        var _queryTimestamp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
          return _regeneratorRuntime().wrap(function _callee22$(_context22) {
            while (1) switch (_context22.prev = _context22.next) {
              case 0:
                return _context22.abrupt("return", request({
                  url: "https://api.live.bilibili.com/xlive/open-interface/v1/rtc/getTimestamp"
                }));
              case 1:
              case "end":
                return _context22.stop();
            }
          }, _callee22);
        }));
        function queryTimestamp() {
          return _queryTimestamp.apply(this, arguments);
        }
        return queryTimestamp;
      }() // 获取修正后的 Date 实例
    }, {
      key: "getDate",
      value: function getDate(params) {
        var date;
        if (typeof params === "string") {
          date = dateUtil["new"](params);
        } else if (typeof params === "number") {
          date = new Date(params);
        } else {
          date = /* @__PURE__ */new Date();
        }
        return this.msDiffWithServer ? new Date(date.getTime() + this.msDiffWithServer) : date;
      }
    }, {
      key: "createTimer",
      value: function createTimer(cb) {
        var _this19 = this;
        var intervalId = setInterval(function () {
          cb(_this19.getDate().getTime());
        }, 1e3);
        return function () {
          clearInterval(intervalId);
        };
      }
    }]);
  }();
  new TimeService();
  var ImageService = /*#__PURE__*/function () {
    function ImageService() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, ImageService);
      var defaultParams = {
        standardRemRate: 37.5,
        autoRemoveProtocol: true
      };
      this.standardRemRate = options.standardRemRate || defaultParams.standardRemRate;
      this.autoRemoveProtocol = options.autoRemoveProtocol || defaultParams.autoRemoveProtocol;
      this.checkIsEnvSupportedWebp();
      this.checkIsEnvSupportAvif();
    }
    return _createClass(ImageService, [{
      key: "checkIsEnvSupportedWebp",
      value: function checkIsEnvSupportedWebp() {
        if (typeof this.isSupportedWebp === "boolean") {
          return;
        }
        try {
          var elem = document.createElement("canvas");
          this.isSupportedWebp = elem.getContext && elem.getContext("2d") && elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
        } catch (err) {
          this.isSupportedWebp = false;
        }
      }
    }, {
      key: "checkIsEnvSupportAvif",
      value: function () {
        var _checkIsEnvSupportAvif = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
          var _this20 = this;
          return _regeneratorRuntime().wrap(function _callee23$(_context23) {
            while (1) switch (_context23.prev = _context23.next) {
              case 0:
                this.isSupportedAvif = new Promise(function (resolve) {
                  var avif = new Image();
                  avif.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
                  avif.onload = function () {
                    resolve(true);
                    _this20.isSupportedAvif = true;
                  };
                  avif.onerror = function () {
                    resolve(false);
                    _this20.isSupportedAvif = false;
                  };
                });
              case 1:
              case "end":
                return _context23.stop();
            }
          }, _callee23, this);
        }));
        function checkIsEnvSupportAvif() {
          return _checkIsEnvSupportAvif.apply(this, arguments);
        }
        return checkIsEnvSupportAvif;
      }()
    }, {
      key: "isBfsImageUrl",
      value: function isBfsImageUrl(url) {
        if (/@/.test(url)) {
          return false;
        }
        return /^(https?:)?\/\/(uat-|pre-)?(i|s)\d\.hdslb\.com\/bfs\/.*(jpg|jpeg|png|webp|gif)$/.test(url);
      }
    }, {
      key: "convertUrl",
      value: function convertUrl(url) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!url) {
          return url;
        }
        var formattedUrl = this.autoRemoveProtocol ? url.replace(/^https?:\/\//, "//") : url;
        if (!this.isBfsImageUrl(formattedUrl)) {
          return formattedUrl;
        }
        var formattedOptions = this.formatWebpOptions(options);
        var webpQueryString = this.createWebpQuerystring(formattedOptions);
        return "".concat(formattedUrl).concat(webpQueryString);
      }
    }, {
      key: "formatWebpOptions",
      value: function formatWebpOptions() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var width = options.width,
          height = options.height,
          _options$fitType = options.fitType,
          fitType = _options$fitType === void 0 ? 2 : _options$fitType,
          _options$quality = options.quality,
          quality = _options$quality === void 0 ? 80 : _options$quality;
        var sizeRate = window.devicePixelRatio;
        var formattedOptions = {
          fitType: fitType,
          quality: quality
        };
        if (width) {
          formattedOptions.width = this.getRenderPixelValue(width * sizeRate);
        }
        if (height) {
          formattedOptions.height = this.getRenderPixelValue(height * sizeRate);
        }
        return formattedOptions;
      }
    }, {
      key: "createWebpQuery",
      value: function createWebpQuery() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var width = options.width,
          height = options.height,
          _options$fitType2 = options.fitType,
          fitType = _options$fitType2 === void 0 ? 2 : _options$fitType2,
          _options$quality2 = options.quality,
          quality = _options$quality2 === void 0 ? 80 : _options$quality2;
        var qs = {
          e: fitType,
          q: quality
        };
        if (width) {
          qs.w = width;
        }
        if (height) {
          qs.h = height;
        }
        return qs;
      }
    }, {
      key: "createWebpQuerystring",
      value: function createWebpQuerystring() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var width = options.width,
          height = options.height,
          _options$fitType3 = options.fitType,
          fitType = _options$fitType3 === void 0 ? 2 : _options$fitType3,
          _options$quality3 = options.quality,
          quality = _options$quality3 === void 0 ? 80 : _options$quality3;
        var qs = {
          e: fitType,
          q: quality
        };
        if (width) {
          qs.w = Math.floor(width);
        }
        if (height) {
          qs.h = Math.floor(height);
        }
        var qsString = Object.entries(qs).filter(function (key, value) {
          return value !== void 0;
        }).map(function (_ref23) {
          var _ref24 = _slicedToArray(_ref23, 2),
            key = _ref24[0],
            value = _ref24[1];
          return "".concat(value).concat(key);
        }).join("_");
        var extension =
        // 由于 isSupportedAvif 是异步获取的，可能有一定的延迟
        // 又不想把调用链全改为异步，所以这里做一点降级处理
        // 如果 isSupportedAvif 不是 true 的都走后面逻辑
        this.isSupportedAvif === true ? ".avif" : this.isSupportedWebp ? ".webp" : "";
        return "@".concat(qsString).concat(extension);
      }
      // @deprecated 使用 getImageRawSizeAsync 替代
      // TODO 2.0.0 移除
    }, {
      key: "getImageSizeAsync",
      value: function () {
        var _getImageSizeAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(url) {
          return _regeneratorRuntime().wrap(function _callee24$(_context24) {
            while (1) switch (_context24.prev = _context24.next) {
              case 0:
                console.warn("@deprecated 使用 getImageRawSizeAsync 替代, 将于 2.0 移除");
                _context24.next = 3;
                return this.getImageRawSizeAsync(url);
              case 3:
                return _context24.abrupt("return", _context24.sent);
              case 4:
              case "end":
                return _context24.stop();
            }
          }, _callee24, this);
        }));
        function getImageSizeAsync(_x35) {
          return _getImageSizeAsync.apply(this, arguments);
        }
        return getImageSizeAsync;
      }()
    }, {
      key: "getImageRawSizeAsync",
      value: function () {
        var _getImageRawSizeAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(url) {
          var image;
          return _regeneratorRuntime().wrap(function _callee25$(_context25) {
            while (1) switch (_context25.prev = _context25.next) {
              case 0:
                image = new Image();
                image.src = url;
                _context25.next = 4;
                return new Promise(function (resolve) {
                  if (image.complete) {
                    resolve({
                      width: image.width,
                      height: image.height
                    });
                  } else {
                    image.onload = function () {
                      resolve({
                        width: image.width,
                        height: image.height
                      });
                    };
                    image.onerror = function () {
                      resolve({
                        width: null,
                        height: null
                      });
                    };
                  }
                });
              case 4:
                return _context25.abrupt("return", _context25.sent);
              case 5:
              case "end":
                return _context25.stop();
            }
          }, _callee25);
        }));
        function getImageRawSizeAsync(_x36) {
          return _getImageRawSizeAsync.apply(this, arguments);
        }
        return getImageRawSizeAsync;
      }()
      /*
       * 传入标准尺寸，根据浏览器环境的 rem 单位值，返回对应的渲染尺寸
       */
    }, {
      key: "getRenderPixelValue",
      value: function getRenderPixelValue(pixel) {
        var rootFontSizeString = document.documentElement.style.fontSize.replace("px", "");
        var rootFontSize = rootFontSizeString ? Number(rootFontSizeString) : this.standardRemRate;
        return Math.floor(pixel * (rootFontSize / this.standardRemRate));
      }
    }]);
  }();
  var imageService = new ImageService();
  function toRem(value) {
    var standardRemRate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 37.5;
    var minPixel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    if ([void 0, null, ""].includes(value)) {
      return value;
    }
    if (typeof value === "number") {
      if (Math.abs(value) <= minPixel) {
        return "".concat(value, "px");
      }
      return "".concat(fixed(value / standardRemRate), "rem");
    }
    return protectBase64(value, function (value2) {
      return value2.replace(/-?\d*(\.\d+)?px/g, function (str) {
        var num = parseFloat(str.replace("px", ""));
        if (Math.abs(num) <= minPixel) {
          return "".concat(num, "px");
        }
        return "".concat(fixed(num / standardRemRate), "rem");
      });
    });
  }
  function toPixel(value) {
    var standardRemRate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 37.5;
    if (typeof value === "number") {
      return "".concat(value * standardRemRate, "px");
    }
    return protectBase64(value, function (value2) {
      return value2.replace(/-?\d*(\.\d+)?rem/g, function (str) {
        var num = parseFloat(str.replace("rem", ""));
        return "".concat(num * standardRemRate, "px");
      });
    });
  }
  var cssUtil = {
    toRem: toRem,
    toPixel: toPixel,
    setUrl: function setUrl(url) {
      if (!url) {
        return "";
      }
      return "url(".concat(url, ")");
    }
  };
  function protectBase64(value, cb) {
    var base64Regexp = new RegExp("data:image.*,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})");
    var base64res = value.match(base64Regexp);
    if (base64res) {
      base64res.forEach(function (base64, index) {
        value = value.replace(base64, "$".concat(index, "$"));
      });
    }
    value = cb(value);
    if (base64res) {
      base64res.forEach(function (base64, index) {
        value = value.replace("$".concat(index, "$"), base64);
      });
    }
    return value;
  }
  function fixed(number) {
    return Math.ceil(number * 1e6) / 1e6;
  }
  var LocalStorageValueItem = /*#__PURE__*/function () {
    function LocalStorageValueItem(value) {
      _classCallCheck(this, LocalStorageValueItem);
      this.constructorName = "LocalStorageValueItem";
      var simpleParsedValue;
      try {
        simpleParsedValue = JSON.parse(value);
      } catch (err) {
        simpleParsedValue = value;
      }
      if (_typeof(simpleParsedValue) === "object" && (simpleParsedValue == null ? void 0 : simpleParsedValue.constructorName) === "LocalStorageValueItem") {
        this.setValue(simpleParsedValue.value);
      } else {
        this.setValue(value);
      }
    }
    return _createClass(LocalStorageValueItem, [{
      key: "setValue",
      value: function setValue(value) {
        this.value = value;
      }
    }, {
      key: "getValue",
      value: function getValue() {
        return this.value;
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        return JSON.stringify({
          constructorName: this.constructorName,
          value: this.value
        });
      }
    }]);
  }();
  var localStorageUtil = {
    get: function get(key, defaultValue) {
      var value = localStorage.getItem(key);
      if (value === null) {
        return defaultValue;
      }
      var localStorageValueItem = new LocalStorageValueItem(value);
      if (defaultValue !== void 0) {
        var _localStorageValueIte;
        return (_localStorageValueIte = localStorageValueItem.getValue()) !== null && _localStorageValueIte !== void 0 ? _localStorageValueIte : defaultValue;
      }
      return localStorageValueItem.getValue();
    },
    set: function set(key, value) {
      localStorage.setItem(key, new LocalStorageValueItem(value).valueOf());
      return value;
    },
    "delete": function _delete(key) {
      localStorage.removeItem(key);
    }
  };
  var uaParser = {
    exports: {}
  };
  (function (module2, exports2) {
    (function (window2, undefined$1) {
      var LIBVERSION = "1.0.37",
        EMPTY = "",
        UNKNOWN = "?",
        FUNC_TYPE = "function",
        UNDEF_TYPE = "undefined",
        OBJ_TYPE = "object",
        STR_TYPE = "string",
        MAJOR = "major",
        MODEL = "model",
        NAME = "name",
        TYPE = "type",
        VENDOR = "vendor",
        VERSION = "version",
        ARCHITECTURE = "architecture",
        CONSOLE = "console",
        MOBILE = "mobile",
        TABLET = "tablet",
        SMARTTV = "smarttv",
        WEARABLE = "wearable",
        EMBEDDED = "embedded",
        UA_MAX_LENGTH = 500;
      var AMAZON = "Amazon",
        APPLE = "Apple",
        ASUS = "ASUS",
        BLACKBERRY = "BlackBerry",
        BROWSER = "Browser",
        CHROME = "Chrome",
        EDGE = "Edge",
        FIREFOX = "Firefox",
        GOOGLE = "Google",
        HUAWEI = "Huawei",
        LG = "LG",
        MICROSOFT = "Microsoft",
        MOTOROLA = "Motorola",
        OPERA = "Opera",
        SAMSUNG = "Samsung",
        SHARP = "Sharp",
        SONY = "Sony",
        XIAOMI = "Xiaomi",
        ZEBRA = "Zebra",
        FACEBOOK = "Facebook",
        CHROMIUM_OS = "Chromium OS",
        MAC_OS = "Mac OS";
      var extend = function extend(regexes2, extensions) {
          var mergedRegexes = {};
          for (var i in regexes2) {
            if (extensions[i] && extensions[i].length % 2 === 0) {
              mergedRegexes[i] = extensions[i].concat(regexes2[i]);
            } else {
              mergedRegexes[i] = regexes2[i];
            }
          }
          return mergedRegexes;
        },
        enumerize = function enumerize(arr) {
          var enums = {};
          for (var i = 0; i < arr.length; i++) {
            enums[arr[i].toUpperCase()] = arr[i];
          }
          return enums;
        },
        has = function has(str1, str2) {
          return _typeof(str1) === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
        },
        lowerize = function lowerize(str) {
          return str.toLowerCase();
        },
        majorize = function majorize(version) {
          return _typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined$1;
        },
        trim = function trim(str, len) {
          if (_typeof(str) === STR_TYPE) {
            str = str.replace(/^\s\s*/, EMPTY);
            return _typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
          }
        };
      var rgxMapper = function rgxMapper(ua, arrays) {
          var i = 0,
            j,
            k2,
            p,
            q,
            matches,
            match;
          while (i < arrays.length && !matches) {
            var regex = arrays[i],
              props = arrays[i + 1];
            j = k2 = 0;
            while (j < regex.length && !matches) {
              if (!regex[j]) {
                break;
              }
              matches = regex[j++].exec(ua);
              if (!!matches) {
                for (p = 0; p < props.length; p++) {
                  match = matches[++k2];
                  q = props[p];
                  if (_typeof(q) === OBJ_TYPE && q.length > 0) {
                    if (q.length === 2) {
                      if (_typeof(q[1]) == FUNC_TYPE) {
                        this[q[0]] = q[1].call(this, match);
                      } else {
                        this[q[0]] = q[1];
                      }
                    } else if (q.length === 3) {
                      if (_typeof(q[1]) === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined$1;
                      } else {
                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined$1;
                      }
                    } else if (q.length === 4) {
                      this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined$1;
                    }
                  } else {
                    this[q] = match ? match : undefined$1;
                  }
                }
              }
            }
            i += 2;
          }
        },
        strMapper = function strMapper(str, map) {
          for (var i in map) {
            if (_typeof(map[i]) === OBJ_TYPE && map[i].length > 0) {
              for (var j = 0; j < map[i].length; j++) {
                if (has(map[i][j], str)) {
                  return i === UNKNOWN ? undefined$1 : i;
                }
              }
            } else if (has(map[i], str)) {
              return i === UNKNOWN ? undefined$1 : i;
            }
          }
          return str;
        };
      var oldSafariMap = {
          "1.0": "/8",
          "1.2": "/1",
          "1.3": "/3",
          "2.0": "/412",
          "2.0.2": "/416",
          "2.0.3": "/417",
          "2.0.4": "/419",
          "?": "/"
        },
        windowsVersionMap = {
          "ME": "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          "2000": "NT 5.0",
          "XP": ["NT 5.1", "NT 5.2"],
          "Vista": "NT 6.0",
          "7": "NT 6.1",
          "8": "NT 6.2",
          "8.1": "NT 6.3",
          "10": ["NT 6.4", "NT 10.0"],
          "RT": "ARM"
        };
      var regexes = {
        browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i
        // Chrome for Android/iOS
        ], [VERSION, [NAME, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i
        // Microsoft Edge
        ], [VERSION, [NAME, "Edge"]], [
        // Presto based
        /(opera mini)\/([-\w\.]+)/i,
        // Opera Mini
        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
        // Opera Mobi/Tablet
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
        // Opera
        ], [NAME, VERSION], [/opios[\/ ]+([\w\.]+)/i
        // Opera mini on iphone >= 8.0
        ], [VERSION, [NAME, OPERA + " Mini"]], [/\bopr\/([\w\.]+)/i
        // Opera Webkit
        ], [VERSION, [NAME, OPERA]], [
        // Mixed
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
        // Baidu
        ], [VERSION, [NAME, "Baidu"]], [/(kindle)\/([\w\.]+)/i,
        // Kindle
        /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
        // Lunascape/Maxthon/Netfront/Jasmine/Blazer
        // Trident based
        /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
        // Avant/IEMobile/SlimBrowser
        /(?:ms|\()(ie) ([\w\.]+)/i,
        // Internet Explorer
        // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
        /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
        // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
        /(heytap|ovi)browser\/([\d\.]+)/i,
        // Heytap/Ovi
        /(weibo)__([\d\.]+)/i
        // Weibo
        ], [NAME, VERSION], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
        // UCBrowser
        ], [VERSION, [NAME, "UC" + BROWSER]], [/microm.+\bqbcore\/([\w\.]+)/i,
        // WeChat Desktop for Windows Built-in Browser
        /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i
        // WeChat
        ], [VERSION, [NAME, "WeChat"]], [/konqueror\/([\w\.]+)/i
        // Konqueror
        ], [VERSION, [NAME, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
        // IE11
        ], [VERSION, [NAME, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i
        // Yandex
        ], [VERSION, [NAME, "Yandex"]], [/slbrowser\/([\w\.]+)/i
        // Smart Lenovo Browser
        ], [VERSION, [NAME, "Smart Lenovo " + BROWSER]], [/(avast|avg)\/([\w\.]+)/i
        // Avast/AVG Secure Browser
        ], [[NAME, /(.+)/, "$1 Secure " + BROWSER], VERSION], [/\bfocus\/([\w\.]+)/i
        // Firefox Focus
        ], [VERSION, [NAME, FIREFOX + " Focus"]], [/\bopt\/([\w\.]+)/i
        // Opera Touch
        ], [VERSION, [NAME, OPERA + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i
        // Coc Coc Browser
        ], [VERSION, [NAME, "Coc Coc"]], [/dolfin\/([\w\.]+)/i
        // Dolphin
        ], [VERSION, [NAME, "Dolphin"]], [/coast\/([\w\.]+)/i
        // Opera Coast
        ], [VERSION, [NAME, OPERA + " Coast"]], [/miuibrowser\/([\w\.]+)/i
        // MIUI Browser
        ], [VERSION, [NAME, "MIUI " + BROWSER]], [/fxios\/([-\w\.]+)/i
        // Firefox for iOS
        ], [VERSION, [NAME, FIREFOX]], [/\bqihu|(qi?ho?o?|360)browser/i
        // 360
        ], [[NAME, "360 " + BROWSER]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[NAME, /(.+)/, "$1 " + BROWSER], VERSION], [
        // Oculus/Sailfish/HuaweiBrowser/VivoBrowser
        /samsungbrowser\/([\w\.]+)/i
        // Samsung Internet
        ], [VERSION, [NAME, SAMSUNG + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i
        // Comodo Dragon
        ], [[NAME, /_/g, " "], VERSION], [/metasr[\/ ]?([\d\.]+)/i
        // Sogou Explorer
        ], [VERSION, [NAME, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i
        // Sogou Mobile
        ], [[NAME, "Sogou Mobile"], VERSION], [/(electron)\/([\w\.]+) safari/i,
        // Electron-based App
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        // Tesla
        /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i
        // QQBrowser/2345 Browser
        ], [NAME, VERSION], [/(lbbrowser)/i,
        // LieBao Browser
        /\[(linkedin)app\]/i
        // LinkedIn App for iOS & Android
        ], [NAME], [
        // WebView
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
        // Facebook App for iOS & Android
        ], [[NAME, FACEBOOK], VERSION], [/(Klarna)\/([\w\.]+)/i,
        // Klarna Shopping Browser for iOS & Android
        /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
        // Kakao App
        /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
        // Naver InApp
        /safari (line)\/([\w\.]+)/i,
        // Line App for iOS
        /\b(line)\/([\w\.]+)\/iab/i,
        // Line App for Android
        /(alipay)client\/([\w\.]+)/i,
        // Alipay
        /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i
        // Chromium/Instagram/Snapchat
        ], [NAME, VERSION], [/\bgsa\/([\w\.]+) .*safari\//i
        // Google Search Appliance on iOS
        ], [VERSION, [NAME, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
        // TikTok
        ], [VERSION, [NAME, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i
        // Chrome Headless
        ], [VERSION, [NAME, CHROME + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i
        // Chrome WebView
        ], [[NAME, CHROME + " WebView"], VERSION], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
        // Android Browser
        ], [VERSION, [NAME, "Android " + BROWSER]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
        // Chrome/OmniWeb/Arora/Tizen/Nokia
        ], [NAME, VERSION], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
        // Mobile Safari
        ], [VERSION, [NAME, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
        // Safari & Safari Mobile
        ], [VERSION, NAME], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
        // Safari < 3.0
        ], [NAME, [VERSION, strMapper, oldSafariMap]], [/(webkit|khtml)\/([\w\.]+)/i], [NAME, VERSION], [
        // Gecko based
        /(navigator|netscape\d?)\/([-\w\.]+)/i
        // Netscape
        ], [[NAME, "Netscape"], VERSION], [/mobile vr; rv:([\w\.]+)\).+firefox/i
        // Firefox Reality
        ], [VERSION, [NAME, FIREFOX + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i,
        // Flow
        /(swiftfox)/i,
        // Swiftfox
        /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
        // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
        /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
        // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
        /(firefox)\/([\w\.]+)/i,
        // Other Firefox-based
        /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
        // Mozilla
        // Other
        /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
        // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
        /(links) \(([\w\.]+)/i,
        // Links
        /panasonic;(viera)/i
        // Panasonic Viera
        ], [NAME, VERSION], [/(cobalt)\/([\w\.]+)/i
        // Cobalt
        ], [NAME, [VERSION, /master.|lts./, ""]]],
        cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
        // AMD64 (x64)
        ], [[ARCHITECTURE, "amd64"]], [/(ia32(?=;))/i
        // IA32 (quicktime)
        ], [[ARCHITECTURE, lowerize]], [/((?:i[346]|x)86)[;\)]/i
        // IA32 (x86)
        ], [[ARCHITECTURE, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i
        // ARM64
        ], [[ARCHITECTURE, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
        // ARMHF
        ], [[ARCHITECTURE, "armhf"]], [
        // PocketPC mistakenly identified as PowerPC
        /windows (ce|mobile); ppc;/i], [[ARCHITECTURE, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
        // PowerPC
        ], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [/(sun4\w)[;\)]/i
        // SPARC
        ], [[ARCHITECTURE, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
        // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
        ], [[ARCHITECTURE, lowerize]]],
        device: [[
        //////////////////////////
        // MOBILES & TABLETS
        /////////////////////////
        // Samsung
        /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [
        // Apple
        /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
        // iPod/iPhone
        ], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [/\((ipad);[-\w\),; ]+apple/i,
        // iPad
        /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [/(macintosh);/i], [MODEL, [VENDOR, APPLE]], [
        // Sharp
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]], [
        // Huawei
        /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [
        // Xiaomi
        /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
        // Xiaomi POCO
        /\b; (\w+) build\/hm\1/i,
        // Xiaomi Hongmi 'numeric' models
        /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
        // Xiaomi Hongmi
        /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
        // Xiaomi Redmi
        /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
        // Xiaomi Redmi 'numeric' models
        /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
        // Xiaomi Mi
        ], [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
        // Redmi Pad
        /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
        // Mi Pad tablets
        ], [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]], [
        // OPPO
        /; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [MODEL, [VENDOR, "OPPO"], [TYPE, MOBILE]], [
        // Vivo
        /vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]], [
        // Realme
        /\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]], [
        // Motorola
        /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [
        // LG
        /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [
        // Lenovo
        /(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]], [
        // Nokia
        /(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[MODEL, /_/g, " "], [VENDOR, "Nokia"], [TYPE, MOBILE]], [
        // Google
        /(pixel c)\b/i
        // Google Pixel C
        ], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
        // Google Pixel
        ], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [
        // Sony
        /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]], [
        // OnePlus
        / (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]], [
        // Amazon
        /(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
        // Kindle Fire without Silk / Echo Show
        /(kf[a-z]+)( bui|\)).+silk\//i
        // Kindle Fire HD
        ], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
        // Fire Phone
        ], [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]], [
        // BlackBerry
        /(playbook);[-\w\),; ]+(rim)/i
        // BlackBerry PlayBook
        ], [MODEL, VENDOR, [TYPE, TABLET]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i
        // BlackBerry 10
        ], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [
        // Asus
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [
        // HTC
        /(nexus 9)/i
        // HTC Nexus 9
        ], [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
        // HTC
        // ZTE
        /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
        // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
        ], [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]], [
        // Acer
        /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]], [
        // Meizu
        /droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]], [
        // Ulefone
        /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [MODEL, [VENDOR, "Ulefone"], [TYPE, MOBILE]], [
        // MIXED
        /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
        // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
        /(hp) ([\w ]+\w)/i,
        // HP iPAQ
        /(asus)-?(\w+)/i,
        // Asus
        /(microsoft); (lumia[\w ]+)/i,
        // Microsoft Lumia
        /(lenovo)[-_ ]?([-\w]+)/i,
        // Lenovo
        /(jolla)/i,
        // Jolla
        /(oppo) ?([\w ]+) bui/i
        // OPPO
        ], [VENDOR, MODEL, [TYPE, MOBILE]], [/(kobo)\s(ereader|touch)/i,
        // Kobo
        /(archos) (gamepad2?)/i,
        // Archos
        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
        // HP TouchPad
        /(kindle)\/([\w\.]+)/i,
        // Kindle
        /(nook)[\w ]+build\/(\w+)/i,
        // Nook
        /(dell) (strea[kpr\d ]*[\dko])/i,
        // Dell Streak
        /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
        // Le Pan Tablets
        /(trinity)[- ]*(t\d{3}) bui/i,
        // Trinity Tablets
        /(gigaset)[- ]+(q\w{1,9}) bui/i,
        // Gigaset Tablets
        /(vodafone) ([\w ]+)(?:\)| bui)/i
        // Vodafone
        ], [VENDOR, MODEL, [TYPE, TABLET]], [/(surface duo)/i
        // Surface Duo
        ], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i
        // Fairphone
        ], [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]], [/(u304aa)/i
        // AT&T
        ], [MODEL, [VENDOR, "AT&T"], [TYPE, MOBILE]], [/\bsie-(\w*)/i
        // Siemens
        ], [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]], [/\b(rct\w+) b/i
        // RCA Tablets
        ], [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]], [/\b(venue[\d ]{2,7}) b/i
        // Dell Venue Tablets
        ], [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]], [/\b(q(?:mv|ta)\w+) b/i
        // Verizon Tablet
        ], [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
        // Barnes & Noble Tablet
        ], [MODEL, [VENDOR, "Barnes & Noble"], [TYPE, TABLET]], [/\b(tm\d{3}\w+) b/i], [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]], [/\b(k88) b/i
        // ZTE K Series Tablet
        ], [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]], [/\b(nx\d{3}j) b/i
        // ZTE Nubia
        ], [MODEL, [VENDOR, "ZTE"], [TYPE, MOBILE]], [/\b(gen\d{3}) b.+49h/i
        // Swiss GEN Mobile
        ], [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]], [/\b(zur\d{3}) b/i
        // Swiss ZUR Tablet
        ], [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]], [/\b((zeki)?tb.*\b) b/i
        // Zeki Tablets
        ], [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i
        // Dragon Touch Tablet
        ], [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]], [/\b(ns-?\w{0,9}) b/i
        // Insignia Tablets
        ], [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]], [/\b((nxa|next)-?\w{0,9}) b/i
        // NextBook Tablets
        ], [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
        // Voice Xtreme Phones
        ], [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]], [/\b(lvtel\-)?(v1[12]) b/i
        // LvTel Phones
        ], [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]], [/\b(ph-1) /i
        // Essential PH-1
        ], [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]], [/\b(v(100md|700na|7011|917g).*\b) b/i
        // Envizen Tablets
        ], [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]], [/\b(trio[-\w\. ]+) b/i
        // MachSpeed Tablets
        ], [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]], [/\btu_(1491) b/i
        // Rotor Tablets
        ], [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]], [/(shield[\w ]+) b/i
        // Nvidia Shield Tablets
        ], [MODEL, [VENDOR, "Nvidia"], [TYPE, TABLET]], [/(sprint) (\w+)/i
        // Sprint Phones
        ], [VENDOR, MODEL, [TYPE, MOBILE]], [/(kin\.[onetw]{3})/i
        // Microsoft Kin
        ], [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
        // Zebra
        ], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [
        ///////////////////
        // SMARTTVS
        ///////////////////
        /smart-tv.+(samsung)/i
        // Samsung
        ], [VENDOR, [TYPE, SMARTTV]], [/hbbtv.+maple;(\d+)/i], [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
        // LG SmartTV
        ], [[VENDOR, LG], [TYPE, SMARTTV]], [/(apple) ?tv/i
        // Apple TV
        ], [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]], [/crkey/i
        // Google Chromecast
        ], [[MODEL, CHROME + "cast"], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [/droid.+aft(\w+)( bui|\))/i
        // Fire TV
        ], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i
        // Sharp
        ], [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]], [/(bravia[\w ]+)( bui|\))/i
        // Sony
        ], [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]], [/(mitv-\w{5}) bui/i
        // Xiaomi
        ], [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]], [/Hbbtv.*(technisat) (.*);/i
        // TechniSAT
        ], [VENDOR, MODEL, [TYPE, SMARTTV]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
        // Roku
        /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
        // HbbTV devices
        ], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
        // SmartTV from Unidentified Vendors
        ], [[TYPE, SMARTTV]], [
        ///////////////////
        // CONSOLES
        ///////////////////
        /(ouya)/i,
        // Ouya
        /(nintendo) ([wids3utch]+)/i
        // Nintendo
        ], [VENDOR, MODEL, [TYPE, CONSOLE]], [/droid.+; (shield) bui/i
        // Nvidia
        ], [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]], [/(playstation [345portablevi]+)/i
        // Playstation
        ], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i
        // Microsoft Xbox
        ], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [
        ///////////////////
        // WEARABLES
        ///////////////////
        /((pebble))app/i
        // Pebble
        ], [VENDOR, MODEL, [TYPE, WEARABLE]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
        // Apple Watch
        ], [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]], [/droid.+; (glass) \d/i
        // Google Glass
        ], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [/droid.+; (wt63?0{2,3})\)/i], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [/(quest( 2| pro)?)/i
        // Oculus Quest
        ], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [
        ///////////////////
        // EMBEDDED
        ///////////////////
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
        // Tesla
        ], [VENDOR, [TYPE, EMBEDDED]], [/(aeobc)\b/i
        // Echo Dot
        ], [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]], [
        ////////////////////
        // MIXED (GENERIC)
        ///////////////////
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i
        // Android Phones from Unidentified Vendors
        ], [MODEL, [TYPE, MOBILE]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
        // Android Tablets from Unidentified Vendors
        ], [MODEL, [TYPE, TABLET]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
        // Unidentifiable Tablet
        ], [[TYPE, TABLET]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
        // Unidentifiable Mobile
        ], [[TYPE, MOBILE]], [/(android[-\w\. ]{0,9});.+buil/i
        // Generic Android Device
        ], [MODEL, [VENDOR, "Generic"]]],
        engine: [[/windows.+ edge\/([\w\.]+)/i
        // EdgeHTML
        ], [VERSION, [NAME, EDGE + "HTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
        // Blink
        ], [VERSION, [NAME, "Blink"]], [/(presto)\/([\w\.]+)/i,
        // Presto
        /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
        // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
        /ekioh(flow)\/([\w\.]+)/i,
        // Flow
        /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
        // KHTML/Tasman/Links
        /(icab)[\/ ]([23]\.[\d\.]+)/i,
        // iCab
        /\b(libweb)/i], [NAME, VERSION], [/rv\:([\w\.]{1,9})\b.+(gecko)/i
        // Gecko
        ], [VERSION, NAME]],
        os: [[
        // Windows
        /microsoft (windows) (vista|xp)/i
        // Windows (iTunes)
        ], [NAME, VERSION], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i
        // Windows Phone
        ], [NAME, [VERSION, strMapper, windowsVersionMap]], [/windows nt 6\.2; (arm)/i,
        // Windows RT
        /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[VERSION, strMapper, windowsVersionMap], [NAME, "Windows"]], [
        // iOS/macOS
        /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
        // iOS
        /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[VERSION, /_/g, "."], [NAME, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i
        // Mac OS
        ], [[NAME, MAC_OS], [VERSION, /_/g, "."]], [
        // Mobile OSes
        /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
        // Android-x86/HarmonyOS
        ], [VERSION, NAME], [
        // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
        /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i,
        // Blackberry
        /(tizen|kaios)[\/ ]([\w\.]+)/i,
        // Tizen/KaiOS
        /\((series40);/i
        // Series 40
        ], [NAME, VERSION], [/\(bb(10);/i
        // BlackBerry 10
        ], [VERSION, [NAME, BLACKBERRY]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
        // Symbian
        ], [VERSION, [NAME, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
        // Firefox OS
        ], [VERSION, [NAME, FIREFOX + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
        // WebOS
        ], [VERSION, [NAME, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
        // watchOS
        ], [VERSION, [NAME, "watchOS"]], [
        // Google Chromecast
        /crkey\/([\d\.]+)/i
        // Google Chromecast
        ], [VERSION, [NAME, CHROME + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
        // Chromium OS
        ], [[NAME, CHROMIUM_OS], VERSION], [
        // Smart TVs
        /panasonic;(viera)/i,
        // Panasonic Viera
        /(netrange)mmh/i,
        // Netrange
        /(nettv)\/(\d+\.[\w\.]+)/i,
        // NetTV
        // Console
        /(nintendo|playstation) ([wids345portablevuch]+)/i,
        // Nintendo/Playstation
        /(xbox); +xbox ([^\);]+)/i,
        // Microsoft Xbox (360, One, X, S, Series X, Series S)
        // Other
        /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
        // Joli/Palm
        /(mint)[\/\(\) ]?(\w*)/i,
        // Mint
        /(mageia|vectorlinux)[; ]/i,
        // Mageia/VectorLinux
        /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
        // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
        /(hurd|linux) ?([\w\.]*)/i,
        // Hurd/Linux
        /(gnu) ?([\w\.]*)/i,
        // GNU
        /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
        // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
        /(haiku) (\w+)/i
        // Haiku
        ], [NAME, VERSION], [/(sunos) ?([\w\.\d]*)/i
        // Solaris
        ], [[NAME, "Solaris"], VERSION], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
        // Solaris
        /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
        // AIX
        /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
        // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
        /(unix) ?([\w\.]*)/i
        // UNIX
        ], [NAME, VERSION]]
      };
      var UAParser2 = function UAParser2(ua, extensions) {
        if (_typeof(ua) === OBJ_TYPE) {
          extensions = ua;
          ua = undefined$1;
        }
        if (!(this instanceof UAParser2)) {
          return new UAParser2(ua, extensions).getResult();
        }
        var _navigator = _typeof(window2) !== UNDEF_TYPE && window2.navigator ? window2.navigator : undefined$1;
        var _ua = ua || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
        var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined$1;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;
        this.getBrowser = function () {
          var _browser = {};
          _browser[NAME] = undefined$1;
          _browser[VERSION] = undefined$1;
          rgxMapper.call(_browser, _ua, _rgxmap.browser);
          _browser[MAJOR] = majorize(_browser[VERSION]);
          if (_isSelfNav && _navigator && _navigator.brave && _typeof(_navigator.brave.isBrave) == FUNC_TYPE) {
            _browser[NAME] = "Brave";
          }
          return _browser;
        };
        this.getCPU = function () {
          var _cpu = {};
          _cpu[ARCHITECTURE] = undefined$1;
          rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
          return _cpu;
        };
        this.getDevice = function () {
          var _device = {};
          _device[VENDOR] = undefined$1;
          _device[MODEL] = undefined$1;
          _device[TYPE] = undefined$1;
          rgxMapper.call(_device, _ua, _rgxmap.device);
          if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
            _device[TYPE] = MOBILE;
          }
          if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && _typeof(_navigator.standalone) !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
            _device[MODEL] = "iPad";
            _device[TYPE] = TABLET;
          }
          return _device;
        };
        this.getEngine = function () {
          var _engine = {};
          _engine[NAME] = undefined$1;
          _engine[VERSION] = undefined$1;
          rgxMapper.call(_engine, _ua, _rgxmap.engine);
          return _engine;
        };
        this.getOS = function () {
          var _os = {};
          _os[NAME] = undefined$1;
          _os[VERSION] = undefined$1;
          rgxMapper.call(_os, _ua, _rgxmap.os);
          if (_isSelfNav && !_os[NAME] && _uach && _uach.platform != "Unknown") {
            _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS);
          }
          return _os;
        };
        this.getResult = function () {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          };
        };
        this.getUA = function () {
          return _ua;
        };
        this.setUA = function (ua2) {
          _ua = _typeof(ua2) === STR_TYPE && ua2.length > UA_MAX_LENGTH ? trim(ua2, UA_MAX_LENGTH) : ua2;
          return this;
        };
        this.setUA(_ua);
        return this;
      };
      UAParser2.VERSION = LIBVERSION;
      UAParser2.BROWSER = enumerize([NAME, VERSION, MAJOR]);
      UAParser2.CPU = enumerize([ARCHITECTURE]);
      UAParser2.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
      UAParser2.ENGINE = UAParser2.OS = enumerize([NAME, VERSION]);
      {
        if (module2.exports) {
          exports2 = module2.exports = UAParser2;
        }
        exports2.UAParser = UAParser2;
      }
      var $ = _typeof(window2) !== UNDEF_TYPE && (window2.jQuery || window2.Zepto);
      if ($ && !$.ua) {
        var parser = new UAParser2();
        $.ua = parser.getResult();
        $.ua.get = function () {
          return parser.getUA();
        };
        $.ua.set = function (ua) {
          parser.setUA(ua);
          var result = parser.getResult();
          for (var prop in result) {
            $.ua[prop] = result[prop];
          }
        };
      }
    })((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : commonjsGlobal);
  })(uaParser, uaParser.exports);
  var uaParserExports = uaParser.exports;
  var UAParser = /* @__PURE__ */getDefaultExportFromCjs(uaParserExports);
  var _RuntimeInfoService = /*#__PURE__*/function () {
    function _RuntimeInfoService2(useragent) {
      _classCallCheck(this, _RuntimeInfoService2);
      this.minFontSize = null;
      if (!String.prototype.replaceAll) {
        String.prototype.replaceAll = function (str, newStr) {
          if (Object.prototype.toString.call(str).toLowerCase() === "[object regexp]") {
            return this.replace(str, newStr);
          }
          return this.replace(new RegExp(str, "g"), newStr);
        };
      }
      this.useragent = useragent || window.navigator.userAgent;
      this.exec();
      this.getPlatformSupportMinFontSize();
    }
    return _createClass(_RuntimeInfoService2, [{
      key: "exec",
      value: function exec() {
        var res = new UAParser(this.useragent).getResult();
        this.deviceType = res.device.type || "desktop";
        this.deviceOS = res.os.name;
        this.deviceBrand = res.device.vendor;
        this.hostApp = getHostApp.call(this);
        this.hostWebview = res.engine.name;
        function getHostApp() {
          var _a, _b;
          var loopCount = 5;
          var mostTopWindow = window;
          try {
            while (loopCount-- && mostTopWindow && mostTopWindow !== mostTopWindow.top) {
              mostTopWindow = mostTopWindow.top;
            }
          } catch (err) {
            console.warn('If the iframe subpage has cross domain, you need to set the document in<head> domain = "bilibili.com".');
          }
          var isBilibiliInPC = /bilibili_pc/.test(this.useragent);
          if (isBilibiliInPC) {
            return "Bilibili";
          }
          var isBilibiliInMobile = /BiliApp/.test(this.useragent);
          if (isBilibiliInMobile) {
            var isBilibiliLinkInMobile = /biliLink/.test(this.useragent);
            if (isBilibiliLinkInMobile) {
              return "BilibiliLink";
            }
            return "Bilibili";
          }
          try {
            var isBilibiliLinkInPC = (_b = (_a = mostTopWindow == null ? void 0 : mostTopWindow.browser) == null ? void 0 : _a.version) == null ? void 0 : _b.pc_link;
            if (isBilibiliLinkInPC) {
              return "BilibiliLink";
            }
            return res.browser.name;
          } catch (error) {}
        }
      }
    }, {
      key: "is",
      value: function is(params) {
        var _this21 = this;
        if (!params) {
          return false;
        }
        var entries = Object.entries(_RuntimeInfoService2.getTrueParams(params));
        if (!entries.length) {
          return false;
        }
        return entries.every(function (_ref25) {
          var _ref26 = _slicedToArray(_ref25, 2),
            key = _ref26[0],
            optionList = _ref26[1];
          return check(_this21[key], optionList);
        });
        function check(value, optionList) {
          var formattedValue = value.replaceAll(" ", "").toLowerCase();
          var formattedOptionList = optionList.map(function (option) {
            return option.replaceAll(" ", "").toLowerCase();
          });
          var positiveOptionList = formattedOptionList.filter(function (option) {
            return !/^!/.test(option);
          });
          var negativeOptionList = formattedOptionList.filter(function (option) {
            return /^!/.test(option);
          }).map(function (option) {
            return option.replace(/^!/, "");
          });
          if (negativeOptionList.includes(formattedValue)) {
            return false;
          }
          return positiveOptionList.length ? positiveOptionList.includes(formattedValue) : true;
        }
      }
    }, {
      key: "getPlatformSupportMinFontSize",
      value: function getPlatformSupportMinFontSize() {
        var fontSizeDiv = document.createElement("div");
        fontSizeDiv.style.position = "absolute";
        fontSizeDiv.style.visibility = "hidden";
        fontSizeDiv.innerHTML = "a";
        document.body.appendChild(fontSizeDiv);
        var fontSize = 1;
        var maxLoopLength = 30;
        var isMinFontSize = false;
        var notFindFontSize = false;
        while (!isMinFontSize) {
          fontSizeDiv.style.fontSize = fontSize + "px";
          var currentFontSizeHeight = fontSizeDiv.offsetHeight;
          fontSizeDiv.style.fontSize = fontSize + 1 + "px";
          var nextFontSizeHeight = fontSizeDiv.offsetHeight;
          if (fontSize >= maxLoopLength) {
            isMinFontSize = true;
            notFindFontSize = true;
          } else if (currentFontSizeHeight !== nextFontSizeHeight) {
            isMinFontSize = true;
          } else {
            fontSize++;
          }
        }
        document.body.removeChild(fontSizeDiv);
        !notFindFontSize ? this.minFontSize = fontSize : this.minFontSize = null;
      }
    }], [{
      key: "getTrueParams",
      value: function getTrueParams(params) {
        if (!params) {
          return params;
        }
        return Object.keys(params).reduce(function (trueParams, key) {
          var option = params[key];
          if (!option) {
            return trueParams;
          }
          if (!(typeof option === "string" || Array.isArray(option))) {
            return trueParams;
          }
          if (Array.isArray(option) && !option.length) {
            return trueParams;
          }
          var optionList = option;
          if (typeof option === "string") {
            optionList = [option];
          }
          trueParams[key] = optionList;
          return trueParams;
        }, {});
      }
    }]);
  }();
  _RuntimeInfoService.optionAliasMap = {
    "@BilibiliApp": ["Bilibili", "BilibiliLink"]
  };
  var RuntimeInfoService = _RuntimeInfoService;
  var runtimeInfoService = new RuntimeInfoService();
  var OssUploadService = /*#__PURE__*/function () {
    function OssUploadService() {
      _classCallCheck(this, OssUploadService);
    }
    return _createClass(OssUploadService, [{
      key: "getOssUploadUrl",
      value: (
      /**
       *
       * @param param0 dir 服务端申请
       * @returns
       */
      function () {
        var _getOssUploadUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(params) {
          var _params$uuid;
          var requestParams, url, uploadResult;
          return _regeneratorRuntime().wrap(function _callee26$(_context26) {
            while (1) switch (_context26.prev = _context26.next) {
              case 0:
                requestParams = "?uuid=".concat((_params$uuid = params.uuid) !== null && _params$uuid !== void 0 ? _params$uuid : "", "&dir=").concat(params.dir);
                url = "//api.live.bilibili.com/xlive/open-interface/v1/boss_upload_resource" + requestParams;
                _context26.prev = 2;
                _context26.next = 5;
                return this.request(url);
              case 5:
                uploadResult = _context26.sent;
                _context26.next = 8;
                return this.handleUploadBlob({
                  url: uploadResult.url.replace(/http[s]?:/, ""),
                  key: uploadResult.key,
                  fileData: params.fileData
                });
              case 8:
                return _context26.abrupt("return", uploadResult.key);
              case 11:
                _context26.prev = 11;
                _context26.t0 = _context26["catch"](2);
                console.log(_context26.t0);
              case 14:
              case "end":
                return _context26.stop();
            }
          }, _callee26, this, [[2, 11]]);
        }));
        function getOssUploadUrl(_x37) {
          return _getOssUploadUrl.apply(this, arguments);
        }
        return getOssUploadUrl;
      }()
      /**
       * 处理文件上传
       * @param params 
       */
      )
    }, {
      key: "handleUploadBlob",
      value: (function () {
        var _handleUploadBlob = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(params) {
          var requestOptions;
          return _regeneratorRuntime().wrap(function _callee27$(_context27) {
            while (1) switch (_context27.prev = _context27.next) {
              case 0:
                this.requirementCheck({
                  checkBlob: true
                });
                requestOptions = {
                  action: params.url,
                  fileData: params.fileData
                };
                _context27.prev = 2;
                _context27.next = 5;
                return this.put(requestOptions);
              case 5:
                _context27.next = 11;
                break;
              case 7:
                _context27.prev = 7;
                _context27.t0 = _context27["catch"](2);
                console.log(_context27.t0);
                throw new Error(_context27.t0);
              case 11:
              case "end":
                return _context27.stop();
            }
          }, _callee27, this, [[2, 7]]);
        }));
        function handleUploadBlob(_x38) {
          return _handleUploadBlob.apply(this, arguments);
        }
        return handleUploadBlob;
      }()
      /**
       * 请求资源
       * @param url 请求oss的地址
       * @returns 
       */
      )
    }, {
      key: "request",
      value: function request(url) {
        var _this22 = this;
        return new Promise(function (resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.addEventListener("error", reject);
          xhr.addEventListener("load", function () {
            if (xhr.status < 200 || xhr.status >= 300) {
              return reject(_this22.handleXHRErrorCause(url, xhr));
            }
            try {
              resolve(_this22.handleXHRBody(xhr));
            } catch (err) {
              reject(err);
            }
          });
          if ("withCredentials" in xhr) {
            xhr.withCredentials = true;
          }
          xhr.open("get", url, true);
          xhr.send();
        });
      }
      /**
       * 上传文件
       * @param option
       * @returns 
       */
    }, {
      key: "put",
      value: function put(option) {
        var _this23 = this;
        return new Promise(function (resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.addEventListener("error", reject);
          xhr.addEventListener("load", function () {
            if (xhr.status < 200 || xhr.status >= 300) {
              return reject(_this23.handleXHRErrorCause(option.action, xhr));
            }
            if (xhr.status === 200) {
              return resolve("1");
            }
          });
          xhr.open("put", option.action, true);
          xhr.send(option.fileData);
        });
      }
      /**
       * 处理xhr返回值
       * @param xhr 
       * @returns 
       */
    }, {
      key: "handleXHRBody",
      value: function handleXHRBody(xhr) {
        var text = xhr.responseText || xhr.response;
        if (!text) {
          throw new Error("Empty Response Body");
        }
        var resJson = JSON.parse(text);
        if (resJson.code !== 0 || !resJson.data) {
          throw resJson;
        }
        return resJson.data;
      }
      /**
       * 处理错误
       * @param action 方法
       * @param xhr
       * @returns 
       */
    }, {
      key: "handleXHRErrorCause",
      value: function handleXHRErrorCause(action, xhr) {
        if (xhr.response) {
          return "".concat(xhr.response.error || xhr.response);
        } else if (xhr.responseText) {
          return "".concat(xhr.responseText);
        } else {
          return "fail to request ".concat(action, " ").concat(xhr.status);
        }
      }
      /**
       * 校验低版本浏览器
       * @param param
       */
    }, {
      key: "requirementCheck",
      value: function requirementCheck(_ref27) {
        var checkBlob = _ref27.checkBlob;
        if (!XMLHttpRequest) {
          throw new Error("No XMLHttpRequest Support. Please use polyfill!");
        }
        if (!Promise) {
          throw new Error("No Promise Support. Please use polyfill!");
        }
        if (checkBlob && !Blob) {
          throw new Error("No Blob Support. Please use polyfill!");
        }
        if (!FormData) {
          throw new Error("No FormData Support. Please use polyfill!");
        }
      }
    }]);
  }();
  var ossUploadService = new OssUploadService();
  var toolbox = {
    service: {
      Image: ImageService,
      RuntimeInfo: RuntimeInfoService,
      OssUpload: OssUploadService
    },
    instance: {
      image: imageService,
      runtimeInfo: runtimeInfoService,
      ossUpload: ossUploadService
    },
    util: {
      css: cssUtil,
      localStorage: localStorageUtil
    }
  };
  var defaultView = "sm";
  var defaultBorderRadius = [0, 0, 0, 0];
  var defaultPadding = [0, 0, 0, 0];
  function px(value) {
    return utils.jsRem.calcRenderPixel(value);
  }
  function EvaLayoutContainer(props) {
    var mergedProps = reactHooks.props.useMergeDefaultProps({
      view: defaultView,
      size: {
        borderRadius: defaultBorderRadius,
        padding: defaultPadding,
        zIndex: 0
      },
      layout: {
        display: "free",
        gridAligns: ["top", "center"],
        flexDirection: "vertical",
        flexAligns: ["top", "center"]
      },
      background: {
        quality: 90,
        size: "100% 100%",
        type: "common"
      },
      border: {
        display: "none",
        width: 1,
        color: "rgb(0, 0, 0)"
      }
    }, props);
    var view = mergedProps.view,
      size = mergedProps.size,
      layout = mergedProps.layout,
      background = mergedProps.background,
      border = mergedProps.border,
      children = mergedProps.children;
    var computedSize = getSizeStyle();
    var computedBorderRadius = getBorderRadiusStyle();
    var computedPadding = getPaddingStyle();
    var computedLayoutStyle = getLayoutStyle();
    var computedBackgroundStyle = getBackgroundStyle();
    var computedBorderStyle = getBorderStyle();
    return /* @__PURE__ */jsxRuntime.jsxs("div", {
      "data-cy": "EvaLayoutContainer",
      className: styles.layoutContainerRoot,
      style: _objectSpread(_objectSpread({}, computedSize), {}, {
        zIndex: (size == null ? void 0 : size.zIndex) || 0
      }),
      children: [/* @__PURE__ */jsxRuntime.jsx("div", {
        className: styles.layoutBackground,
        style: _objectSpread(_objectSpread(_objectSpread({}, computedBackgroundStyle), computedBorderStyle), computedBorderRadius)
      }), /* @__PURE__ */jsxRuntime.jsx("div", {
        className: styles.layoutContainer,
        style: _objectSpread(_objectSpread(_objectSpread({}, computedSize), computedLayoutStyle), computedPadding),
        children: children
      })]
    });
    function getSizeStyle() {
      var _ref28 = size || {},
        width = _ref28.width,
        height = _ref28.height;
      var mergedWidth = width === void 0 ? layout.display === "free" ? view === "sm" ? 375 : 1920 : "unset" : width;
      var mergedHeight = height === void 0 ? layout.display === "free" ? view === "sm" ? 500 : 600 : "unset" : height;
      return {
        width: px(mergedWidth),
        height: px(mergedHeight)
      };
    }
    function getBorderRadiusStyle() {
      var _ref29 = size || {},
        borderRadius = _ref29.borderRadius;
      var mergedBorderRadius = utils.props.mergeEdge(defaultBorderRadius, borderRadius);
      return {
        borderRadius: mergedBorderRadius == null ? void 0 : mergedBorderRadius.map(function (item) {
          return "".concat(px(item !== null && item !== void 0 ? item : 0), "px");
        }).join(" ")
      };
    }
    function getPaddingStyle() {
      var _ref30 = size || {},
        padding = _ref30.padding;
      var mergedPadding = utils.props.mergeEdge(defaultPadding, padding);
      return {
        padding: mergedPadding == null ? void 0 : mergedPadding.map(function (item) {
          return "".concat(px(item !== null && item !== void 0 ? item : 0), "px");
        }).join(" ")
      };
    }
    function getLayoutStyle() {
      var _ref31 = layout || {},
        display = _ref31.display,
        gridAligns = _ref31.gridAligns,
        gridColumnCount = _ref31.gridColumnCount,
        gridColumnGap = _ref31.gridColumnGap,
        gridRowGap = _ref31.gridRowGap,
        flexDirection = _ref31.flexDirection,
        flexAligns = _ref31.flexAligns;
      if (display === "free") {
        return {
          position: "relative"
        };
      }
      if (display === "grid") {
        var alignContentMap = {
          top: "flex-start",
          center: "center",
          bottom: "flex-end"
        };
        var justifyContentMap = {
          left: "flex-start",
          center: "center",
          right: "flex-end"
        };
        return {
          display: "grid",
          alignContent: alignContentMap[gridAligns[0]],
          justifyContent: justifyContentMap[gridAligns[1]],
          justifyItems: "center",
          alignItems: "center",
          gridTemplateColumns: new Array(gridColumnCount).fill("auto").join(" "),
          columnGap: gridColumnGap,
          rowGap: gridRowGap
        };
      }
      if (display === "flex") {
        var flexDirectionMap = {
          vertical: "column",
          horizontal: "row"
        };
        if (flexDirection === "horizontal") {
          var horizontalMap = {
            alignItems: {
              top: "flex-start",
              center: "center",
              bottom: "flex-end"
            },
            justifyContent: {
              left: "flex-start",
              center: "center",
              right: "flex-end"
            }
          };
          return {
            display: "flex",
            flexDirection: flexDirectionMap[flexDirection],
            alignItems: horizontalMap.alignItems[flexAligns[0]],
            justifyContent: horizontalMap.justifyContent[flexAligns[1]]
          };
        }
        if (flexDirection === "vertical") {
          var verticalMap = {
            alignItems: {
              left: "flex-start",
              center: "center",
              right: "flex-end"
            },
            justifyContent: {
              top: "flex-start",
              center: "center",
              bottom: "flex-end"
            }
          };
          return {
            display: "flex",
            flexDirection: flexDirectionMap[flexDirection],
            alignItems: verticalMap.alignItems[flexAligns[1]],
            justifyContent: verticalMap.justifyContent[flexAligns[0]]
          };
        }
      }
    }
    function getBackgroundStyle() {
      var _ref32 = background || {},
        color = _ref32.color,
        src = _ref32.src,
        quality = _ref32.quality,
        backgroundSize = _ref32.size,
        type = _ref32.type,
        stretchArea = _ref32.stretchArea;
      if (type === "common") {
        if (!src) {
          return {
            backgroundColor: color
          };
        }
        if (/\.gif$/.test(src) || !toolbox.instance.image.isBfsImageUrl(src)) {
          return {
            backgroundImage: "url(".concat(src, ")"),
            backgroundSize: backgroundSize,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat"
          };
        }
        var qs2 = toolbox.instance.image.createWebpQuerystring({
          quality: quality
        });
        return {
          backgroundImage: "url(".concat(src).concat(qs2, ")"),
          backgroundSize: backgroundSize,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        };
      }
      var borderImageWidth = [stretchArea == null ? void 0 : stretchArea.clipTop, stretchArea == null ? void 0 : stretchArea.clipRight, stretchArea == null ? void 0 : stretchArea.clipBottom, stretchArea == null ? void 0 : stretchArea.clipLeft];
      if (/\.gif$/.test(stretchArea == null ? void 0 : stretchArea.src) || !toolbox.instance.image.isBfsImageUrl(stretchArea == null ? void 0 : stretchArea.src)) {
        return {
          borderImageRepeat: "stretch",
          borderImageSource: "url(".concat(stretchArea == null ? void 0 : stretchArea.src, ")"),
          borderImageWidth: borderImageWidth.map(function (v) {
            return px(Math.ceil(v)) + "px";
          }).join(" "),
          borderImageSlice: borderImageWidth.map(function (v) {
            return Math.ceil(v) * (stretchArea == null ? void 0 : stretchArea.multiple);
          }).join(" ") + " fill"
        };
      }
      var qs = toolbox.instance.image.createWebpQuerystring({
        quality: quality
      });
      return {
        borderImageRepeat: "stretch",
        borderImageSource: "url(".concat(stretchArea == null ? void 0 : stretchArea.src).concat(qs, ")"),
        borderImageWidth: borderImageWidth.map(function (v) {
          return px(Math.ceil(v)) + "px";
        }).join(" "),
        borderImageSlice: borderImageWidth.map(function (v) {
          return Math.ceil(v) * (stretchArea == null ? void 0 : stretchArea.multiple);
        }).join(" ") + " fill"
      };
    }
    function getBorderStyle() {
      var _ref33 = border || {},
        style = _ref33.style,
        width = _ref33.width,
        color = _ref33.color;
      var _ref34 = background || {},
        type = _ref34.type;
      if (type === "pointNine") {
        return {
          borderStyle: style || "solid",
          borderColor: color
        };
      }
      return {
        borderStyle: style,
        borderWidth: px(width),
        borderColor: color
      };
    }
  }
  return EvaLayoutContainer;
});
