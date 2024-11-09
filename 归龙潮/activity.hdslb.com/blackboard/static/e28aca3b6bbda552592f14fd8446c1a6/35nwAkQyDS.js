function _callSuper(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e)
    )
  );
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _getPrototypeOf(t) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    _getPrototypeOf(t)
  );
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        }),
    _setPrototypeOf(t, e)
  );
}
function _createForOfIteratorHelper(r, e) {
  var t =
    ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
  if (!t) {
    if (
      Array.isArray(r) ||
      (t = _unsupportedIterableToArray(r)) ||
      (e && r && "number" == typeof r.length)
    ) {
      t && (r = t);
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
        },
        e: function e(r) {
          throw r;
        },
        f: F,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return (a = r.done), r;
    },
    e: function e(r) {
      (u = !0), (o = r);
    },
    f: function f() {
      try {
        a || null == t["return"] || t["return"]();
      } finally {
        if (u) throw o;
      }
    },
  };
}
function _slicedToArray(r, e) {
  return (
    _arrayWithHoles(r) ||
    _iterableToArrayLimit(r, e) ||
    _unsupportedIterableToArray(r, e) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _iterableToArrayLimit(r, l) {
  var t =
    null == r
      ? null
      : ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else
        for (
          ;
          !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
          f = !0
        );
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t["return"] && ((u = t["return"]()), Object(u) !== u))
          return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty2(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
function _defineProperty2(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
    function _regeneratorRuntime() {
      return e;
    };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (t, e, r) {
        t[e] = r.value;
      },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return (
      Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      t[e]
    );
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return (t[e] = r);
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return { type: "normal", arg: t.call(e, r) };
    } catch (t) {
      return { type: "throw", arg: t };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(p));
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await")
          ? e.resolve(h.__await).then(
              function (t) {
                invoke("next", t, i, a);
              },
              function (t) {
                invoke("throw", t, i, a);
              }
            )
          : e.resolve(h).then(
              function (t) {
                (u.value = t), i(u);
              },
              function (t) {
                return invoke("throw", t, i, a);
              }
            );
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return (r = r
          ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      },
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return { value: t, done: !0 };
      }
      for (n.method = i, n.arg = a; ; ) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;
        else if ("throw" === n.method) {
          if (o === h) throw ((o = s), n.arg);
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (((o = n.done ? s : l), p.arg === y)) continue;
          return { value: p.arg, done: n.done };
        }
        "throw" === p.type && ((o = s), (n.method = "throw"), (n.arg = p.arg));
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t)
      return (
        (r.delegate = null),
        ("throw" === n &&
          e.iterator["return"] &&
          ((r.method = "return"),
          (r.arg = t),
          maybeInvokeDelegate(e, r),
          "throw" === r.method)) ||
          ("return" !== n &&
            ((r.method = "throw"),
            (r.arg = new TypeError(
              "The iterator does not provide a '" + n + "' method"
            )))),
        y
      );
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type)
      return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y;
    var a = i.arg;
    return a
      ? a.done
        ? ((r[e.resultName] = a.value),
          (r.next = e.nextLoc),
          "return" !== r.method && ((r.method = "next"), (r.arg = t)),
          (r.delegate = null),
          y)
        : a
      : ((r.method = "throw"),
        (r.arg = new TypeError("iterator result is not an object")),
        (r.delegate = null),
        y);
  }
  function pushTryEntry(t) {
    var e = { tryLoc: t[0] };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    (e.type = "normal"), delete e.arg, (t.completion = e);
  }
  function Context(t) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      t.forEach(pushTryEntry, this),
      this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length; )
              if (n.call(e, o))
                return (next.value = e[o]), (next.done = !1), next;
            return (next.value = t), (next.done = !0), next;
          };
        return (i.next = i);
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0,
    }),
    o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0,
    }),
    (GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      u,
      "GeneratorFunction"
    )),
    (e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return (
        !!e &&
        (e === GeneratorFunction ||
          "GeneratorFunction" === (e.displayName || e.name))
      );
    }),
    (e.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
          : ((t.__proto__ = GeneratorFunctionPrototype),
            define(t, u, "GeneratorFunction")),
        (t.prototype = Object.create(g)),
        t
      );
    }),
    (e.awrap = function (t) {
      return { __await: t };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, c, function () {
      return this;
    }),
    (e.AsyncIterator = AsyncIterator),
    (e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    defineIteratorMethods(g),
    define(g, u, "Generator"),
    define(g, a, function () {
      return this;
    }),
    define(g, "toString", function () {
      return "[object Generator]";
    }),
    (e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return (
        r.reverse(),
        function next() {
          for (; r.length; ) {
            var t = r.pop();
            if (t in e) return (next.value = t), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (e.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = t),
          this.tryEntries.forEach(resetTryEntry),
          !e)
        )
          for (var r in this)
            "t" === r.charAt(0) &&
              n.call(this, r) &&
              !isNaN(+r.slice(1)) &&
              (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return (
            (a.type = "throw"),
            (a.arg = e),
            (r.next = n),
            o && ((r.method = "next"), (r.arg = t)),
            !!o
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (
            o.tryLoc <= this.prev &&
            n.call(o, "finallyLoc") &&
            this.prev < o.finallyLoc
          ) {
            var i = o;
            break;
          }
        }
        i &&
          ("break" === t || "continue" === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc &&
          (i = null);
        var a = i ? i.completion : {};
        return (
          (a.type = t),
          (a.arg = e),
          i
            ? ((this.method = "next"), (this.next = i.finallyLoc), y)
            : this.complete(a)
        );
      },
      complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;
        return (
          "break" === t.type || "continue" === t.type
            ? (this.next = t.arg)
            : "return" === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = "return"),
              (this.next = "end"))
            : "normal" === t.type && e && (this.next = e),
          y
        );
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, r, n) {
        return (
          (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
          "next" === this.method && (this.arg = t),
          y
        );
      },
    }),
    e
  );
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _classCallCheck(a, n) {
  if (!(a instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      "value" in o && (o.writable = !0),
      Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toConsumableArray(r) {
  return (
    _arrayWithoutHoles(r) ||
    _iterableToArray(r) ||
    _unsupportedIterableToArray(r) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return (
      "Object" === t && r.constructor && (t = r.constructor.name),
      "Map" === t || "Set" === t
        ? Array.from(r)
        : "Arguments" === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? _arrayLikeToArray(r, a)
        : void 0
    );
  }
}
function _iterableToArray(r) {
  if (
    ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
    null != r["@@iterator"]
  )
    return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
(function (global2, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ===
    "object" && typeof module !== "undefined"
    ? (module.exports = factory(
        require("react/jsx-runtime"),
        require("react"),
        require("react-dom")
      ))
    : typeof define === "function" && define.amd
    ? define(["react/jsx-runtime", "react", "react-dom"], factory)
    : ((global2 =
        typeof globalThis !== "undefined" ? globalThis : global2 || self),
      (global2.EvaPositionBox = factory(
        global2.jsxRuntime,
        global2.React,
        global2.ReactDOM
      )));
})(this, function (jsxRuntime, react, reactDom) {
  "use strict";

  var __defProp = Object.defineProperty;
  var __defNormalProp = function __defNormalProp(obj, key, value) {
    return key in obj
      ? __defProp(obj, key, {
          enumerable: true,
          configurable: true,
          writable: true,
          value: value,
        })
      : (obj[key] = value);
  };
  var __publicField = function __publicField(obj, key, value) {
    return __defNormalProp(
      obj,
      _typeof(key) !== "symbol" ? key + "" : key,
      value
    );
  };
  var commonjsGlobal =
    typeof globalThis !== "undefined"
      ? globalThis
      : typeof window !== "undefined"
      ? window
      : typeof global !== "undefined"
      ? global
      : typeof self !== "undefined"
      ? self
      : {};
  function getDefaultExportFromCjs(x) {
    return x &&
      x.__esModule &&
      Object.prototype.hasOwnProperty.call(x, "default")
      ? x["default"]
      : x;
  }
  function listCacheClear$1() {
    this.__data__ = [];
    this.size = 0;
  }
  var _listCacheClear = listCacheClear$1;
  function eq$4(value, other) {
    return value === other || (value !== value && other !== other);
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
  var freeGlobal$1 =
    _typeof(commonjsGlobal) == "object" &&
    commonjsGlobal &&
    commonjsGlobal.Object === Object &&
    commonjsGlobal;
  var _freeGlobal = freeGlobal$1;
  var freeGlobal = _freeGlobal;
  var freeSelf =
    (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" &&
    self &&
    self.Object === Object &&
    self;
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
    return symToStringTag && symToStringTag in Object(value)
      ? getRawTag(value)
      : objectToString(value);
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
    return (
      tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag
    );
  }
  var isFunction_1 = isFunction$3;
  var root$6 = _root;
  var coreJsData$1 = root$6["__core-js_shared__"];
  var _coreJsData = coreJsData$1;
  var coreJsData = _coreJsData;
  var maskSrcKey = (function () {
    var uid = /[^.]+$/.exec(
      (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ""
    );
    return uid ? "Symbol(src)_1." + uid : "";
  })();
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
  var reIsNative = RegExp(
    "^" +
      funcToString$1
        .call(hasOwnProperty$9)
        .replace(reRegExpChar, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
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
    return nativeCreate$1
      ? data[key] !== void 0
      : hasOwnProperty$7.call(data, key);
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
      hash: new Hash(),
      map: new (Map$2 || ListCache$2)(),
      string: new Hash(),
    };
  }
  var _mapCacheClear = mapCacheClear$1;
  function isKeyable$1(value) {
    var type = _typeof(value);
    return type == "string" ||
      type == "number" ||
      type == "symbol" ||
      type == "boolean"
      ? value !== "__proto__"
      : value === null;
  }
  var _isKeyable = isKeyable$1;
  var isKeyable = _isKeyable;
  function getMapData$4(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == "string" ? "string" : "hash"]
      : data.map;
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
    var data = (this.__data__ = new ListCache(entries));
    this.size = data.size;
  }
  Stack$2.prototype.clear = stackClear;
  Stack$2.prototype["delete"] = stackDelete;
  Stack$2.prototype.get = stackGet;
  Stack$2.prototype.has = stackHas;
  Stack$2.prototype.set = stackSet;
  var _Stack = Stack$2;
  var getNative$4 = _getNative;
  var defineProperty$2 = (function () {
    try {
      var func = getNative$4(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {}
  })();
  var _defineProperty = defineProperty$2;
  var defineProperty$1 = _defineProperty;
  function baseAssignValue$3(object, key, value) {
    if (key == "__proto__" && defineProperty$1) {
      defineProperty$1(object, key, {
        configurable: true,
        enumerable: true,
        value: value,
        writable: true,
      });
    } else {
      object[key] = value;
    }
  }
  var _baseAssignValue = baseAssignValue$3;
  var baseAssignValue$2 = _baseAssignValue,
    eq$2 = eq_1;
  function assignMergeValue$2(object, key, value) {
    if (
      (value !== void 0 && !eq$2(object[key], value)) ||
      (value === void 0 && !(key in object))
    ) {
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
    exports: {},
  };
  _cloneBuffer.exports;
  (function (module2, exports2) {
    var root2 = _root;
    var freeExports = exports2 && !exports2.nodeType && exports2;
    var freeModule =
      freeExports && true && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root2.Buffer : void 0,
      allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer2(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
        result = allocUnsafe
          ? allocUnsafe(length)
          : new buffer.constructor(length);
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
    var buffer = isDeep
      ? cloneArrayBuffer$2(typedArray.buffer)
      : typedArray.buffer;
    return new typedArray.constructor(
      buffer,
      typedArray.byteOffset,
      typedArray.length
    );
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
  var baseCreate$1 = /* @__PURE__ */ (function () {
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
  })();
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
      proto = (typeof Ctor == "function" && Ctor.prototype) || objectProto$8;
    return value === proto;
  }
  var _isPrototype = isPrototype$3;
  var baseCreate = _baseCreate,
    getPrototype$2 = _getPrototype,
    isPrototype$2 = _isPrototype;
  function initCloneObject$2(object) {
    return typeof object.constructor == "function" && !isPrototype$2(object)
      ? baseCreate(getPrototype$2(object))
      : {};
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
  var isArguments$4 = baseIsArguments(
    /* @__PURE__ */ (function () {
      return arguments;
    })()
  )
    ? baseIsArguments
    : function (value) {
        return (
          isObjectLike$6(value) &&
          hasOwnProperty$6.call(value, "callee") &&
          !propertyIsEnumerable$1.call(value, "callee")
        );
      };
  var isArguments_1 = isArguments$4;
  var isArray$a = Array.isArray;
  var isArray_1 = isArray$a;
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  function isLength$3(value) {
    return (
      typeof value == "number" &&
      value > -1 &&
      value % 1 == 0 &&
      value <= MAX_SAFE_INTEGER$1
    );
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
    exports: {},
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
    var freeModule =
      freeExports && true && module2 && !module2.nodeType && module2;
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
    return (
      typeof Ctor == "function" &&
      Ctor instanceof Ctor &&
      funcToString.call(Ctor) == objectCtorString
    );
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
  typedArrayTags[float32Tag$2] =
    typedArrayTags[float64Tag$2] =
    typedArrayTags[int8Tag$2] =
    typedArrayTags[int16Tag$2] =
    typedArrayTags[int32Tag$2] =
    typedArrayTags[uint8Tag$2] =
    typedArrayTags[uint8ClampedTag$2] =
    typedArrayTags[uint16Tag$2] =
    typedArrayTags[uint32Tag$2] =
      true;
  typedArrayTags[argsTag$1] =
    typedArrayTags[arrayTag$1] =
    typedArrayTags[arrayBufferTag$2] =
    typedArrayTags[boolTag$2] =
    typedArrayTags[dataViewTag$3] =
    typedArrayTags[dateTag$2] =
    typedArrayTags[errorTag$1] =
    typedArrayTags[funcTag$1] =
    typedArrayTags[mapTag$4] =
    typedArrayTags[numberTag$2] =
    typedArrayTags[objectTag$2] =
    typedArrayTags[regexpTag$2] =
    typedArrayTags[setTag$4] =
    typedArrayTags[stringTag$2] =
    typedArrayTags[weakMapTag$2] =
      false;
  function baseIsTypedArray$1(value) {
    return (
      isObjectLike$3(value) &&
      isLength$1(value.length) &&
      !!typedArrayTags[baseGetTag$2(value)]
    );
  }
  var _baseIsTypedArray = baseIsTypedArray$1;
  function baseUnary$3(func) {
    return function (value) {
      return func(value);
    };
  }
  var _baseUnary = baseUnary$3;
  var _nodeUtil = {
    exports: {},
  };
  _nodeUtil.exports;
  (function (module2, exports2) {
    var freeGlobal2 = _freeGlobal;
    var freeExports = exports2 && !exports2.nodeType && exports2;
    var freeModule =
      freeExports && true && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal2.process;
    var nodeUtil2 = (function () {
      try {
        var types =
          freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return (
          freeProcess && freeProcess.binding && freeProcess.binding("util")
        );
      } catch (e) {}
    })();
    module2.exports = nodeUtil2;
  })(_nodeUtil, _nodeUtil.exports);
  var _nodeUtilExports = _nodeUtil.exports;
  var baseIsTypedArray = _baseIsTypedArray,
    baseUnary$2 = _baseUnary,
    nodeUtil$2 = _nodeUtilExports;
  var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
  var isTypedArray$2 = nodeIsTypedArray
    ? baseUnary$2(nodeIsTypedArray)
    : baseIsTypedArray;
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
    if (
      !(hasOwnProperty$4.call(object, key) && eq$1(objValue, value)) ||
      (value === void 0 && !(key in object))
    ) {
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
      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : void 0;
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
    return (
      !!length &&
      (type == "number" || (type != "symbol" && reIsUint.test(value))) &&
      value > -1 &&
      value % 1 == 0 &&
      value < length
    );
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
      if (
        (inherited || hasOwnProperty$3.call(value, key)) &&
        !(
          skipIndexes &&
          // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" ||
            // Node.js 0.10 has enumerable non-index properties on buffers.
            (isBuff && (key == "offset" || key == "parent")) ||
            // PhantomJS 2 has enumerable non-index properties on typed arrays.
            (isType &&
              (key == "buffer" ||
                key == "byteLength" ||
                key == "byteOffset")) ||
            // Skip index properties.
            isIndex$3(key, length))
        )
      ) {
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
      if (
        !(
          key == "constructor" &&
          (isProto || !hasOwnProperty$2.call(object, key))
        )
      ) {
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
    return isArrayLike$2(object)
      ? arrayLikeKeys$1(object, true)
      : baseKeysIn(object);
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
  function baseMergeDeep$1(
    object,
    source,
    key,
    srcIndex,
    mergeFunc,
    customizer,
    stack
  ) {
    var objValue = safeGet$1(object, key),
      srcValue = safeGet$1(source, key),
      stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue$1(object, key, stacked);
      return;
    }
    var newValue = customizer
      ? customizer(objValue, srcValue, key + "", object, source, stack)
      : void 0;
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
    baseFor(
      source,
      function (srcValue, key) {
        stack || (stack = new Stack$1());
        if (isObject$4(srcValue)) {
          baseMergeDeep(
            object,
            source,
            key,
            srcIndex,
            baseMerge$1,
            customizer,
            stack
          );
        } else {
          var newValue = customizer
            ? customizer(
                safeGet(object, key),
                srcValue,
                key + "",
                object,
                source,
                stack
              )
            : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      },
      keysIn$3
    );
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
  var baseSetToString$1 = !defineProperty
    ? identity$1
    : function (func, string) {
        return defineProperty(func, "toString", {
          configurable: true,
          enumerable: false,
          value: constant(string),
          writable: true,
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
    if (
      type == "number"
        ? isArrayLike$1(object) && isIndex$2(index, object.length)
        : type == "string" && index in object
    ) {
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
      customizer =
        assigner.length > 3 && typeof customizer == "function"
          ? (length--, customizer)
          : void 0;
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
  var mergeWith = createAssigner(function (
    object,
    source,
    srcIndex,
    customizer
  ) {
    baseMerge(object, source, srcIndex, customizer);
  });
  var mergeWith_1 = mergeWith;
  var mergeWith$1 = /* @__PURE__ */ getDefaultExportFromCjs(mergeWith_1);
  var utils = {
    jsRem: {
      getBase: function getBase() {
        var _ref;
        var _a;
        return (_ref = (_a = window.$eva) == null ? void 0 : _a.remBase) !==
          null && _ref !== void 0
          ? _ref
          : 50;
      },
      getValue: function getValue() {
        var _ref2;
        var _a;
        return (_ref2 = (_a = window.$eva) == null ? void 0 : _a.remValue) !==
          null && _ref2 !== void 0
          ? _ref2
          : 50;
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
        return fixed(px2 / utils.jsRem.getBase());
      },
      calcRenderPixel: function calcRenderPixel(px2) {
        if (!["string", "number"].includes(_typeof(px2))) {
          return px2;
        }
        if (typeof px2 === "string") {
          return convertPxStringToRemString(px2);
        }
        return px2 * utils.jsRem.getRate();
      },
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
      },
    },
    props: {
      mergeDefaultProps: function mergeDefaultProps(defaultProps) {
        for (
          var _len = arguments.length,
            propsList = new Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          propsList[_key - 1] = arguments[_key];
        }
        return mergeWith$1.apply(
          void 0,
          [defaultProps].concat(propsList, [
            function (objValue, srcValue) {
              if (Array.isArray(srcValue) && srcValue !== null) {
                return srcValue;
              }
              if (_typeof(srcValue) === "object" && srcValue !== null) {
                return;
              }
              return srcValue !== null && srcValue !== void 0
                ? srcValue
                : objValue;
            },
          ])
        );
      },
      mergeEdge: function mergeEdge(defaultProps) {
        var res = _toConsumableArray(defaultProps);
        for (
          var _len2 = arguments.length,
            propsList = new Array(_len2 > 1 ? _len2 - 1 : 0),
            _key2 = 1;
          _key2 < _len2;
          _key2++
        ) {
          propsList[_key2 - 1] = arguments[_key2];
        }
        propsList.forEach(function (props) {
          return mergeEdge(res, props);
        });
        return res;
        function mergeEdge(obj, src) {
          return mergeWith$1(obj, src, function (objValue, srcValue) {
            return srcValue !== null && srcValue !== void 0
              ? srcValue
              : objValue;
          });
        }
      },
    },
  };
  function convertPxStringToRemString(pxString) {
    return protectBase64(pxString, function (pxString2) {
      return pxString2.replace(/-?\d*(\.\d+)?px/g, function (str) {
        var num = parseFloat(str.replace("px", ""));
        if (Math.abs(num) <= 2) {
          return "".concat(num, "px");
        }
        return "".concat(fixed(num / utils.jsRem.getBase()), "rem");
      });
    });
  }
  function fixed(number) {
    return Math.ceil(number * 1e6) / 1e6;
  }
  function protectBase64(value, cb) {
    var base64Regexp = new RegExp(
      "data:image.*,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})"
    );
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
  var _HttpSvcMiddleware = /*#__PURE__*/ (function () {
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
        this.whitelist =
          (handlerOrConfig == null ? void 0 : handlerOrConfig.whitelist) || [];
        this.blacklist =
          (handlerOrConfig == null ? void 0 : handlerOrConfig.blacklist) || [];
        handler = handlerOrConfig == null ? void 0 : handlerOrConfig.handler;
        if (handlerOrConfig == null ? void 0 : handlerOrConfig.payload)
          payload = handlerOrConfig.payload;
      }
      this.handler = /*#__PURE__*/ (function () {
        var _ref3 = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(
            ctx,
            next,
            config
          ) {
            var url;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1)
                switch ((_context.prev = _context.next)) {
                  case 0:
                    if (
                      !((config == null ? void 0 : config.disabled) !== true)
                    ) {
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
                    return (handler || _this.handler).bind(_this)(
                      ctx,
                      next,
                      _HttpSvcMiddleware.mergeConfig(config, payload)
                    );
                  case 21:
                    return _context.abrupt("return", _context.sent);
                  case 22:
                  case "end":
                    return _context.stop();
                }
            }, _callee);
          })
        );
        return function (_x, _x2, _x3) {
          return _ref3.apply(this, arguments);
        };
      })();
    }
    return _createClass(_HttpSvcMiddleware, [
      {
        key: "match",
        value: function match(item2, list) {
          var matched = false;
          for (var i = 0; i < list.length; i++) {
            if (item2.indexOf(list[i]) > -1) {
              matched = true;
              break;
            }
          }
          return matched;
        },
      },
    ]);
  })();
  __publicField(_HttpSvcMiddleware, "handler");
  __publicField(_HttpSvcMiddleware, "mergeConfig", function (config, payload) {
    return _objectSpread(
      _objectSpread({}, config || {}),
      {},
      {
        payload: _objectSpread(
          _objectSpread({}, (config == null ? void 0 : config.payload) || {}),
          payload || {}
        ),
      }
    );
  });
  var HttpSvcMiddleware = _HttpSvcMiddleware;
  var getBuiltInMiddlewareName = function getBuiltInMiddlewareName(name) {
    return "BUILT_IN_".concat(name);
  };
  var createError = function createError(ctx, message) {
    var _a;
    var error = new Error(
      message ||
        "Request Error: ".concat(
          ((_a = ctx.response) == null ? void 0 : _a.status) || "unknow status"
        )
    );
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
    return encodeURIComponent(val)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
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
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var searchParam = _step.value;
            var _searchParam$split = searchParam.split("="),
              _searchParam$split2 = _slicedToArray(_searchParam$split, 2),
              key = _searchParam$split2[0],
              value = _searchParam$split2[1];
            if (key && typeof value !== "undefined") {
              if (typeof value === "string") {
                params[key] = decodeURIComponent(value);
              } else {
                params[key] = value;
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return {
          url: u,
          params: params,
        };
      }
    }
    return {
      url: url,
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
    return (
      (headers == null ? void 0 : headers[CONTENT_TYPE_KEY]) ||
      (headers == null ? void 0 : headers["content-type"])
    );
  };
  var setContentType = function setContentType(headers, contentType) {
    headers[CONTENT_TYPE_KEY] = contentType;
  };
  var initCtx = /*#__PURE__*/ (function () {
    var _ref4 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(ctx, next) {
        var _ctx$config,
          baseURL,
          headers,
          params,
          data,
          _ctx$config$credentia,
          credentials,
          url,
          method,
          _parseUrl,
          originUrl,
          originParams,
          form,
          _iterator2,
          _step2,
          _step2$value,
          key,
          value;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1)
            switch ((_context2.prev = _context2.next)) {
              case 0:
                if (ctx.request) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return", next());
              case 2:
                (_ctx$config = ctx.config),
                  (baseURL = _ctx$config.baseURL),
                  (headers = _ctx$config.headers),
                  (params = _ctx$config.params),
                  (data = _ctx$config.data),
                  (_ctx$config$credentia = _ctx$config.credentials),
                  (credentials =
                    _ctx$config$credentia === void 0
                      ? "include"
                      : _ctx$config$credentia);
                url = ctx.config.url;
                method = ctx.request.method;
                (_parseUrl = parseUrl(url)),
                  (originUrl = _parseUrl.url),
                  (originParams = _parseUrl.params);
                if (originParams) {
                  url = ctx.request.url = originUrl;
                  ctx.request.params = _objectSpread(
                    _objectSpread({}, originParams),
                    params || {}
                  );
                } else {
                  ctx.request.url = url;
                  ctx.request.params = _objectSpread({}, params || {});
                }
                if (baseURL && /^(https?:)?\/\//.test(url) === false) {
                  ctx.request.url = "".concat(baseURL).concat(url);
                }
                ctx.request.headers = _objectSpread({}, headers || {});
                if (method === "POST" || method === "PUT") {
                  if (data) {
                    if (_typeof(data) === "object") {
                      if (
                        typeof FormData !== "undefined" &&
                        data instanceof FormData
                      ) {
                        form = new FormData();
                        _iterator2 = _createForOfIteratorHelper(data.entries());
                        try {
                          for (
                            _iterator2.s();
                            !(_step2 = _iterator2.n()).done;

                          ) {
                            (_step2$value = _slicedToArray(_step2.value, 2)),
                              (key = _step2$value[0]),
                              (value = _step2$value[1]);
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
      })
    );
    return function initCtx(_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  })();
  var HttpSvcInitCtx = /*#__PURE__*/ (function (_HttpSvcMiddleware2) {
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
  })(HttpSvcMiddleware);
  __publicField(HttpSvcInitCtx, "handler", initCtx);
  var BUTILS_CACHE = "__butils_cache";
  var CACHED_SCRIPTS = "__butils_scripts";
  var DAY_TIME = 864e5;
  var RE_URL =
    /^(https?:)?(\/\/)?(((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6})(:[0-9]{1-6})?([-0-9a-zA-Z+&@#/%=~_|?!:,.;]*)?$/;
  function isUrl(value) {
    return RE_URL.test(value);
  }
  function isStr(value) {
    return typeof value === "string";
  }
  function isNum(value, isLoose) {
    var isNumType = typeof value === "number";
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
    return Math.abs(hash) * 10 + (string.length % 10);
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
      var date = /* @__PURE__ */ new Date();
      date.setTime(date.getTime() + exTime);
      expires = ";expires=".concat(date.toUTCString());
    }
    var domain = isStr(options.domain) ? ";domain=".concat(options.domain) : "";
    document.cookie = ""
      .concat(key, "=")
      .concat(value)
      .concat(expires, ";path=/")
      .concat(domain);
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
      var cacheKey = CACHED_SCRIPTS;
      var caches = getCache(cacheKey) || [];
      if (!reload && caches.indexOf(cacheId) > -1) {
        return resolve(true);
      }
      var el = document.querySelector("#".concat(cacheId));
      if (el) el.parentNode.removeChild(el);
      caches = caches.filter(function (item2) {
        return item2 !== cacheId;
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
      cachedStyleOrScript(scriptId, reload).then(function (cached) {
        if (cached) return resolve();
        var scriptEl = document.createElement("script");
        scriptEl.id = scriptId;
        scriptEl.type = "text/JavaScript";
        scriptEl.src = src;
        scriptEl.onload = function () {
          return resolve();
        };
        scriptEl.onreadystatechange = function () {
          if (
            !this.readyState ||
            this.readyState === "loaded" ||
            this.readyState === "complete"
          ) {
            resolve();
          }
        };
        document.querySelector("head").appendChild(scriptEl);
      });
    }).then();
  }
  var timeout = /*#__PURE__*/ (function () {
    var _ref5 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(ctx, next) {
        var ms, abortController;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1)
            switch ((_context3.prev = _context3.next)) {
              case 0:
                ms = ctx.config.timeout;
                if (!isNum(ctx.config.timeout)) {
                  ms = isNode ? 350 : 1e4;
                }
                if (
                  !(
                    !ctx.abortController &&
                    ms &&
                    typeof AbortController !== "undefined"
                  )
                ) {
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
      })
    );
    return function timeout(_x6, _x7) {
      return _ref5.apply(this, arguments);
    };
  })();
  var HttpSvcTimeout = /*#__PURE__*/ (function (_HttpSvcMiddleware3) {
    function HttpSvcTimeout() {
      var _this3;
      _classCallCheck(this, HttpSvcTimeout);
      _this3 = _callSuper(this, HttpSvcTimeout, [timeout]);
      __publicField(_this3, "name", getBuiltInMiddlewareName("TIMEOUT"));
      return _this3;
    }
    _inherits(HttpSvcTimeout, _HttpSvcMiddleware3);
    return _createClass(HttpSvcTimeout);
  })(HttpSvcMiddleware);
  __publicField(HttpSvcTimeout, "handler", timeout);
  var ContentType = /* @__PURE__ */ (function (ContentType2) {
    ContentType2["JSON"] = "application/json";
    ContentType2["Form"] = "application/x-www-form-urlencoded";
    ContentType2["FormData"] = "multipart/form-data";
    return ContentType2;
  })(ContentType || {});
  var isEqualContentType = function isEqualContentType(target, current) {
    if (!current) return false;
    return current.indexOf(target) > -1;
  };
  var jsonBody = function jsonBody(ctx, data, contentType) {
    if (!ctx.request) return;
    ctx.request.data = JSON.stringify(data);
    if (!ctx.request.headers) {
      var headers = {};
      setContentType(
        headers,
        "application/json"
        /* JSON */
      );
      ctx.request.headers = headers;
    } else if (!contentType) {
      setContentType(
        ctx.request.headers,
        "application/json"
        /* JSON */
      );
    }
  };
  var body = /*#__PURE__*/ (function () {
    var _ref6 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(
        ctx,
        next,
        config
      ) {
        var _a,
          _ctx$request,
          method,
          params,
          headers,
          isContinue,
          contentType,
          data,
          keys2;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1)
            switch ((_context4.prev = _context4.next)) {
              case 0:
                if (ctx.request) {
                  _context4.next = 2;
                  break;
                }
                return _context4.abrupt("return", next());
              case 2:
                (_ctx$request = ctx.request),
                  (method = _ctx$request.method),
                  (params = _ctx$request.params),
                  (headers = _ctx$request.headers);
                ctx.request.url = buildURL(ctx.request.url, params || {});
                if (!(method === "POST" || method === "PUT")) {
                  _context4.next = 17;
                  break;
                }
                isContinue =
                  Object.prototype.toString.call(ctx.request.data) !==
                  "[object Object]";
                if (isContinue) {
                  _context4.next = 17;
                  break;
                }
                contentType = getContentType(headers);
                data = ctx.request.data;
                if (
                  !((_a = config == null ? void 0 : config.payload) == null
                    ? void 0
                    : _a.stringify)
                ) {
                  _context4.next = 14;
                  break;
                }
                jsonBody(ctx, data, contentType);
                _context4.next = 13;
                return next();
              case 13:
                return _context4.abrupt("return", _context4.sent);
              case 14:
                if (
                  isEqualContentType(
                    "application/x-www-form-urlencoded",
                    contentType
                  )
                ) {
                  ctx.request.data = buildURL("", data).slice(1);
                }
                if (
                  isEqualContentType(
                    "application/json",
                    contentType || "application/json"
                    /* JSON */
                  )
                ) {
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
      })
    );
    return function body(_x8, _x9, _x10) {
      return _ref6.apply(this, arguments);
    };
  })();
  var HttpSvcBody = /*#__PURE__*/ (function (_HttpSvcMiddleware4) {
    function HttpSvcBody() {
      var _this4;
      _classCallCheck(this, HttpSvcBody);
      _this4 = _callSuper(this, HttpSvcBody, [body]);
      __publicField(_this4, "name", getBuiltInMiddlewareName("BODY"));
      return _this4;
    }
    _inherits(HttpSvcBody, _HttpSvcMiddleware4);
    return _createClass(HttpSvcBody);
  })(HttpSvcMiddleware);
  __publicField(HttpSvcBody, "handler", body);
  var csrf = /*#__PURE__*/ (function () {
    var _ref7 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee5(
        ctx,
        next,
        config
      ) {
        var _ctx$request2,
          method,
          data,
          headers,
          payload,
          csrf2,
          csrfGetted,
          getCsrf,
          key,
          setCsrf,
          contentType;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1)
            switch ((_context5.prev = _context5.next)) {
              case 0:
                if (ctx.request) {
                  _context5.next = 2;
                  break;
                }
                return _context5.abrupt("return", next());
              case 2:
                (_ctx$request2 = ctx.request),
                  (method = _ctx$request2.method),
                  (data = _ctx$request2.data),
                  (headers = _ctx$request2.headers);
                payload = (config == null ? void 0 : config.payload) || {};
                csrf2 = "";
                csrfGetted = false;
                getCsrf = function getCsrf() {
                  if (csrf2 || csrfGetted) return;
                  try {
                    if (!isNode) {
                      csrf2 = getCookie("bili_jct", {
                        decode: false,
                      });
                    } else {
                      csrf2 = getCookie("bili_jct", {
                        template:
                          (headers == null ? void 0 : headers["cookie"]) ||
                          (headers == null ? void 0 : headers["Cookie"]) ||
                          "_",
                        decode: false,
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
                } else if (method === "POST" || method === "PUT") {
                  contentType = getContentType(headers) || "";
                  if (
                    typeof payload.data === "undefined" &&
                    typeof payload.params === "undefined"
                  ) {
                    if (!contentType) {
                      if (typeof data === "undefined" || isRecordObj(data)) {
                        setCsrf("params");
                      } else {
                        setCsrf("data");
                      }
                    } else if (
                      isEqualContentType(ContentType.JSON, contentType)
                    ) {
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
                        if (
                          isEqualContentType(ContentType.FormData, contentType)
                        ) {
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
      })
    );
    return function csrf(_x11, _x12, _x13) {
      return _ref7.apply(this, arguments);
    };
  })();
  var HttpSvcCsrf = /*#__PURE__*/ (function (_HttpSvcMiddleware5) {
    function HttpSvcCsrf() {
      var _this5;
      _classCallCheck(this, HttpSvcCsrf);
      _this5 = _callSuper(this, HttpSvcCsrf, [csrf]);
      __publicField(_this5, "name", getBuiltInMiddlewareName("CSRF"));
      return _this5;
    }
    _inherits(HttpSvcCsrf, _HttpSvcMiddleware5);
    return _createClass(HttpSvcCsrf);
  })(HttpSvcMiddleware);
  __publicField(HttpSvcCsrf, "handler", csrf);
  var fetch = /*#__PURE__*/ (function () {
    var _ref8 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee6(ctx, next) {
        var _a, _ctx$request3, url, method, headers, credentials, body2;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1)
            switch ((_context6.prev = _context6.next)) {
              case 0:
                if (!isNode) {
                  _context6.next = 2;
                  break;
                }
                throw new Error(
                  "When you are in a Node environment, please use server-side fetch middleware."
                );
              case 2:
                if (window.fetch) {
                  _context6.next = 4;
                  break;
                }
                throw new Error(
                  "When you are in a non-modern browser, please manually polyfill fetch."
                );
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
                (_ctx$request3 = ctx.request),
                  (url = _ctx$request3.url),
                  (method = _ctx$request3.method),
                  (headers = _ctx$request3.headers),
                  (credentials = _ctx$request3.credentials);
                body2 = ctx.request.data;
                _context6.next = 16;
                return window.fetch(url, {
                  method: method,
                  body: body2,
                  headers: headers,
                  credentials: credentials,
                  signal:
                    (_a = ctx.abortController) == null ? void 0 : _a.signal,
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
      })
    );
    return function fetch(_x14, _x15) {
      return _ref8.apply(this, arguments);
    };
  })();
  var HttpSvcFetch = /*#__PURE__*/ (function (_HttpSvcMiddleware6) {
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
  })(HttpSvcMiddleware);
  __publicField(HttpSvcFetch, "handler", fetch);
  var resData = /*#__PURE__*/ (function () {
    var _ref9 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee7(
        ctx,
        next,
        config
      ) {
        var _a, _b, responseType;
        return _regeneratorRuntime().wrap(
          function _callee7$(_context7) {
            while (1)
              switch ((_context7.prev = _context7.next)) {
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
                  responseType =
                    ((_b = config == null ? void 0 : config.payload) == null
                      ? void 0
                      : _b.type) || "json";
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
          },
          _callee7,
          null,
          [[4, 11]]
        );
      })
    );
    return function resData(_x16, _x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  })();
  var HttpSvcResData = /*#__PURE__*/ (function (_HttpSvcMiddleware7) {
    function HttpSvcResData() {
      var _this7;
      _classCallCheck(this, HttpSvcResData);
      _this7 = _callSuper(this, HttpSvcResData, [resData]);
      __publicField(_this7, "name", getBuiltInMiddlewareName("RES_DATA"));
      return _this7;
    }
    _inherits(HttpSvcResData, _HttpSvcMiddleware7);
    return _createClass(HttpSvcResData);
  })(HttpSvcMiddleware);
  __publicField(HttpSvcResData, "handler", resData);
  var spray = /*#__PURE__*/ (function () {
    var _ref10 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee8(ctx, next) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1)
            switch ((_context8.prev = _context8.next)) {
              case 0:
                _context8.next = 2;
                return next();
              case 2:
              case "end":
                return _context8.stop();
            }
        }, _callee8);
      })
    );
    return function spray(_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  })();
  var HttpSvcSprayMiddleware = /*#__PURE__*/ (function (_HttpSvcMiddleware8) {
    function HttpSvcSprayMiddleware(handler, payload) {
      var _this8;
      _classCallCheck(this, HttpSvcSprayMiddleware);
      _this8 = _callSuper(this, HttpSvcSprayMiddleware);
      __publicField(_this8, "name", getBuiltInMiddlewareName("SPRAY"));
      _this8.handler = /*#__PURE__*/ (function () {
        var _ref11 = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee9(
            ctx,
            next
          ) {
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1)
                switch ((_context9.prev = _context9.next)) {
                  case 0:
                    _context9.next = 2;
                    return handler(ctx, next, {
                      payload: payload,
                    });
                  case 2:
                    return _context9.abrupt("return", _context9.sent);
                  case 3:
                  case "end":
                    return _context9.stop();
                }
            }, _callee9);
          })
        );
        return function (_x21, _x22) {
          return _ref11.apply(this, arguments);
        };
      })();
      return _this8;
    }
    _inherits(HttpSvcSprayMiddleware, _HttpSvcMiddleware8);
    return _createClass(HttpSvcSprayMiddleware);
  })(HttpSvcMiddleware);
  __publicField(HttpSvcSprayMiddleware, "handler", spray);
  var retry = /*#__PURE__*/ (function () {
    var _ref12 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee11(
        ctx,
        next,
        config
      ) {
        var _a,
          requestFn,
          _ref13,
          times,
          condition,
          onRetry,
          isDone,
          doRetry,
          isMeetTheCondition;
        return _regeneratorRuntime().wrap(
          function _callee11$(_context11) {
            while (1)
              switch ((_context11.prev = _context11.next)) {
                case 0:
                  requestFn =
                    (_a = ctx.request) == null ? void 0 : _a["function"];
                  (_ref13 = (config == null ? void 0 : config.payload) || {
                    times: 0,
                  }),
                    (times = _ref13.times),
                    (condition = _ref13.condition),
                    (onRetry = _ref13.onRetry);
                  isDone = function isDone() {
                    return !times || ctx.retry === times;
                  };
                  doRetry = /*#__PURE__*/ (function () {
                    var _ref14 = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(
                        function _callee10(extra) {
                          var _a2, newConfig;
                          return _regeneratorRuntime().wrap(
                            function _callee10$(_context10) {
                              while (1)
                                switch ((_context10.prev = _context10.next)) {
                                  case 0:
                                    if (requestFn) {
                                      _context10.next = 2;
                                      break;
                                    }
                                    throw createError(
                                      ctx,
                                      "Missing request function"
                                    );
                                  case 2:
                                    if (
                                      !(
                                        isDone() &&
                                        !((_a2 =
                                          config == null
                                            ? void 0
                                            : config.payload) == null
                                          ? void 0
                                          : _a2.runtimeShortCircuit)
                                      )
                                    ) {
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
                                    throw createError(
                                      ctx,
                                      _context10.t0.message
                                    );
                                  case 19:
                                  case "end":
                                    return _context10.stop();
                                }
                            },
                            _callee10,
                            null,
                            [[5, 16]]
                          );
                        }
                      )
                    );
                    return function doRetry(_x26) {
                      return _ref14.apply(this, arguments);
                    };
                  })();
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
                  throw createError(
                    ctx,
                    _context11.t0 == null ? void 0 : _context11.t0.message
                  );
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
          },
          _callee11,
          null,
          [[4, 9]]
        );
      })
    );
    return function retry(_x23, _x24, _x25) {
      return _ref12.apply(this, arguments);
    };
  })();
  var HttpSvcRetry = /*#__PURE__*/ (function (_HttpSvcMiddleware9) {
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
  })(HttpSvcMiddleware);
  __publicField(HttpSvcRetry, "handler", retry);
  var isFetching = false;
  var TICKET_COOKIE_KEY = "bili_ticket";
  var TICKET_COOKIE_KEY_EXP = "bili_ticket_expires";
  var BEFORE_UPDATE_MINUTES = 30;
  var LOCAL_STORAGE_KEY = "wbi_img_urls";
  var detectTicketAndWbi = /*#__PURE__*/ (function () {
    var _ref15 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee13(ctx) {
        var _a,
          biliTicket,
          wbiImgUrl,
          wbiSubUrl,
          _ref16,
          _ref17,
          _split,
          _split2,
          isTicketExpired;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1)
            switch ((_context13.prev = _context13.next)) {
              case 0:
                biliTicket = getCookie(TICKET_COOKIE_KEY, {
                  decode: false,
                });
                wbiImgUrl = "";
                wbiSubUrl = "";
                if (window == null ? void 0 : window.UNIFY_HTTP_WBI_CONFIG) {
                  _ref16 =
                    ((_a = window.UNIFY_HTTP_WBI_CONFIG) == null
                      ? void 0
                      : _a.split("-")) || [];
                  _ref17 = _slicedToArray(_ref16, 2);
                  wbiImgUrl = _ref17[0];
                  wbiSubUrl = _ref17[1];
                } else {
                  _split = (
                    localStorage.getItem(LOCAL_STORAGE_KEY) || ""
                  ).split("-");
                  _split2 = _slicedToArray(_split, 2);
                  wbiImgUrl = _split2[0];
                  wbiSubUrl = _split2[1];
                }
                isTicketExpired = isExpired();
                if (
                  !(isTicketExpired || !biliTicket || !wbiImgUrl || !wbiSubUrl)
                ) {
                  _context13.next = 9;
                  break;
                }
                if (!isFetching) {
                  _context13.next = 8;
                  break;
                }
                return _context13.abrupt("return");
              case 8:
                ctx.useAsyncRequest(
                  /*#__PURE__*/ (function () {
                    var _ref18 = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(
                        function _callee12(req) {
                          var _a2, _b, api, response;
                          return _regeneratorRuntime().wrap(
                            function _callee12$(_context12) {
                              while (1)
                                switch ((_context12.prev = _context12.next)) {
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
                                      credentials: "include",
                                    });
                                  case 7:
                                    response = _context12.sent;
                                    if (
                                      (response == null
                                        ? void 0
                                        : response.code) === 0 &&
                                      ((_a2 = response.data) == null
                                        ? void 0
                                        : _a2.ticket) &&
                                      ((_b = response.data) == null
                                        ? void 0
                                        : _b.nav)
                                    ) {
                                      setTicketAndNavInLocalStorage(
                                        response.data
                                      );
                                    }
                                  case 9:
                                    _context12.prev = 9;
                                    isFetching = false;
                                    return _context12.finish(9);
                                  case 12:
                                  case "end":
                                    return _context12.stop();
                                }
                            },
                            _callee12,
                            null,
                            [[0, , 9, 12]]
                          );
                        }
                      )
                    );
                    return function (_x28) {
                      return _ref18.apply(this, arguments);
                    };
                  })()
                );
              case 9:
              case "end":
                return _context13.stop();
            }
        }, _callee13);
      })
    );
    return function detectTicketAndWbi(_x27) {
      return _ref15.apply(this, arguments);
    };
  })();
  var isExpired = function isExpired() {
    var biliTicketExp = getCookie(TICKET_COOKIE_KEY_EXP, {
      decode: false,
    });
    var thresholdMilliseconds = BEFORE_UPDATE_MINUTES * 60 * 1e3;
    var currentTime = /* @__PURE__ */ new Date().getTime();
    return (
      biliTicketExp * 1e3 - currentTime <= thresholdMilliseconds ||
      biliTicketExp * 1e3 < currentTime
    );
  };
  var setTicketInCookie = function setTicketInCookie(key, value, ttl) {
    var _a;
    if (
      (_a = window == null ? void 0 : window.biliBridgePc) == null
        ? void 0
        : _a.callNative
    ) {
      window.biliBridgePc.callNative("auth/setCookies", [
        {
          name: key,
          value: value,
          expirationDate: Math.ceil(Date.now() / 1e3) + ttl,
          isExpiredRemove: true,
        },
      ]);
      return;
    }
    setCookie(key, value, {
      domain: ".bilibili.com",
      exMinuts: ttl / 60,
    });
  };
  var setTicketAndNavInLocalStorage = function setTicketAndNavInLocalStorage(
    data
  ) {
    var ticket = data.ticket,
      nav = data.nav,
      ttl = data.ttl,
      created_at = data.created_at;
    setTicketInCookie(TICKET_COOKIE_KEY, ticket, ttl);
    setTicketInCookie(TICKET_COOKIE_KEY_EXP, String(created_at + ttl), ttl);
    window.UNIFY_HTTP_WBI_CONFIG = "".concat(nav.img, "-").concat(nav.sub);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      "".concat(nav.img, "-").concat(nav.sub)
    );
  };
  var buildTicketURL = /*#__PURE__*/ (function () {
    var _ref19 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee14() {
        var ts, key, hamc, sign, api;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1)
            switch ((_context14.prev = _context14.next)) {
              case 0:
                ts = Math.floor(/* @__PURE__ */ new Date().getTime() / 1e3);
                key = "YhxToH[2q";
                _context14.next = 4;
                return loadScript(
                  "//s1.hdslb.com/bfs/static/jinkela/long/unify-http-request/forticket.min.js"
                );
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
                hamc = window.CryptoJS.HmacSHA256(
                  "ts".concat(ts),
                  formatString(key)
                );
                sign = window.CryptoJS.enc.Hex.stringify(hamc);
                _context14.next = 14;
                return buildURL(
                  "//api.bilibili.com/bapis/bilibili.api.ticket.v1.Ticket/GenWebTicket",
                  {
                    key_id: "ec02",
                    hexsign: sign,
                    "context[ts]": ts,
                    csrf: getCookie("bili_jct", {
                      decode: false,
                    }),
                  }
                );
              case 14:
                api = _context14.sent;
                return _context14.abrupt("return", api);
              case 16:
              case "end":
                return _context14.stop();
            }
        }, _callee14);
      })
    );
    return function buildTicketURL() {
      return _ref19.apply(this, arguments);
    };
  })();
  var updateTicketAndWbi = /*#__PURE__*/ (function () {
    var _ref20 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee15(ctx, next) {
        var _a, _ctx$request4, method, params;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1)
            switch ((_context15.prev = _context15.next)) {
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
                  (_ctx$request4 = ctx.request),
                    (method = _ctx$request4.method),
                    (params = _ctx$request4.params);
                  if (
                    !(params == null ? void 0 : params.web_location) &&
                    method === "GET"
                  ) {
                    ctx.request.params = _objectSpread(
                      _objectSpread({}, ctx.request.params || {}),
                      {},
                      {
                        web_location:
                          ((_a =
                            document.getElementsByTagName("meta")[
                              "spm_prefix"
                            ]) == null
                            ? void 0
                            : _a.content) || "0.0",
                      }
                    );
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
      })
    );
    return function updateTicketAndWbi(_x29, _x30) {
      return _ref20.apply(this, arguments);
    };
  })();
  var HttpSvcTicketWbiUpdate = /*#__PURE__*/ (function (_HttpSvcMiddleware10) {
    function HttpSvcTicketWbiUpdate() {
      var _this10;
      _classCallCheck(this, HttpSvcTicketWbiUpdate);
      _this10 = _callSuper(this, HttpSvcTicketWbiUpdate, [updateTicketAndWbi]);
      __publicField(_this10, "name", getBuiltInMiddlewareName("TICKET_WBI"));
      return _this10;
    }
    _inherits(HttpSvcTicketWbiUpdate, _HttpSvcMiddleware10);
    return _createClass(HttpSvcTicketWbiUpdate);
  })(HttpSvcMiddleware);
  __publicField(HttpSvcTicketWbiUpdate, "handler", updateTicketAndWbi);
  var HttpSvcControl = /*#__PURE__*/ _createClass(function HttpSvcControl(
    httpSvc
  ) {
    _classCallCheck(this, HttpSvcControl);
    this.httpSvc = httpSvc;
  });
  var ConfigControl = /*#__PURE__*/ (function (_HttpSvcControl) {
    function ConfigControl() {
      _classCallCheck(this, ConfigControl);
      return _callSuper(this, ConfigControl, arguments);
    }
    _inherits(ConfigControl, _HttpSvcControl);
    return _createClass(ConfigControl, [
      {
        key: "provide",
        value: function provide() {
          var _this11 = this;
          var ctx =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};
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
            },
          };
          return provider;
        },
      },
      {
        key: "inject",
        value: function inject(ctx, name, config) {
          ctx[name] = config;
        },
      },
      {
        key: "disable",
        value: function disable(ctx, name) {
          ctx[name] = _objectSpread(
            _objectSpread({}, ctx[name] || {}),
            {},
            {
              disabled: true,
            }
          );
        },
      },
      {
        key: "get",
        value: function get(ctx, name) {
          return ctx[name] || {};
        },
      },
    ]);
  })(HttpSvcControl);
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
    CACHE: getBuiltInMiddlewareName("CACHE"),
  };
  var ORDER_PRIFIX = "$ORDER_";
  var AssembleDispatcher = /*#__PURE__*/ (function () {
    function AssembleDispatcher(control) {
      _classCallCheck(this, AssembleDispatcher);
      __publicField(this, "middlewares", []);
      __publicField(this, "middlewareConfigCtxProvider");
      this.control = control;
      this.middlewareConfigCtxProvider =
        this.control.httpSvc.configCtrl.provide();
    }
    return _createClass(AssembleDispatcher, [
      {
        key: "with",
        value: function _with(middleware, payload) {
          if (!middleware) return this;
          if (typeof middleware === "string") {
            this.middlewares.push({
              name: "".concat(ORDER_PRIFIX).concat(middleware),
              handler: HttpSvcSprayMiddleware.handler,
            });
            if (payload) {
              this.inject(middleware, payload);
            }
          } else if (typeof middleware === "function") {
            this.middlewares.push(
              new HttpSvcSprayMiddleware(middleware, payload)
            );
          } else if (isMiddleware(middleware)) {
            this.middlewares.push(middleware);
            if (payload) {
              this.inject(middleware.name, payload);
            }
          }
          return this;
        },
      },
      {
        key: "inject",
        value: function inject(name, payload) {
          this.middlewareConfigCtxProvider.inject(name, {
            payload: payload,
          });
          return this;
        },
      },
      {
        key: "disable",
        value: function disable(name) {
          this.middlewareConfigCtxProvider.disable(name);
          return this;
        },
      },
      {
        key: "request",
        value: function request(config) {
          var fn = this.control.compose(this.middlewares);
          return this.control.httpSvc.requestCtrl.request(
            config,
            this.middlewareConfigCtxProvider.get(),
            fn
          );
        },
      },
    ]);
  })();
  var AssembleControl = /*#__PURE__*/ (function (_HttpSvcControl2) {
    function AssembleControl() {
      var _this12;
      _classCallCheck(this, AssembleControl);
      _this12 = _callSuper(this, AssembleControl, arguments);
      __publicField(_this12, "middlewares", []);
      return _this12;
    }
    _inherits(AssembleControl, _HttpSvcControl2);
    return _createClass(AssembleControl, [
      {
        key: "alreadyExistsIdx",
        value: function alreadyExistsIdx(middlewareName) {
          return this.middlewares.findIndex(function (m) {
            return m.name === middlewareName;
          });
        },
      },
      {
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
        },
      },
      {
        key: "setup",
        value: function setup() {
          return new AssembleDispatcher(this);
        },
      },
      {
        key: "disable",
        value: function disable(middlewareName) {
          return this.setup().disable(middlewareName);
        },
      },
      {
        key: "with",
        value: function _with(middleware, payload) {
          return this.setup()["with"](middleware, payload);
        },
      },
      {
        key: "compose",
        value: function compose(middlewares) {
          var _this14 = this;
          var list1 = _toConsumableArray(this.middlewares);
          var list2 = [];
          var builtInOverride = _defineProperty2(
            _defineProperty2(
              _defineProperty2({}, BUILT_IN_MIDDLEWARE.RETRY, null),
              BUILT_IN_MIDDLEWARE.BODY,
              null
            ),
            BUILT_IN_MIDDLEWARE.RES_DATA,
            null
          );
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
                  middlewareName = middlewareName.substring(
                    ORDER_PRIFIX.length
                  );
                  if (
                    !unique[middlewareName] &&
                    !(middlewareName in builtInOverride)
                  ) {
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
          var middlewareList = [
            builtInOverride[BUILT_IN_MIDDLEWARE.RETRY] || new HttpSvcRetry(),
            new HttpSvcInitCtx(),
          ].concat(list, [
            builtInOverride[BUILT_IN_MIDDLEWARE.RES_DATA] ||
              new HttpSvcResData(),
            builtInOverride[BUILT_IN_MIDDLEWARE.BODY] || new HttpSvcBody(),
            new HttpSvcTimeout(),
            this.httpSvc.fetch,
          ]);
          return /*#__PURE__*/ (function () {
            var _ref21 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee17(
                context
              ) {
                var _a,
                  _b,
                  index,
                  configCtrl,
                  debug,
                  disableResExtract,
                  dispatch,
                  _dispatch;
                return _regeneratorRuntime().wrap(function _callee17$(
                  _context17
                ) {
                  while (1)
                    switch ((_context17.prev = _context17.next)) {
                      case 0:
                        _dispatch = function _dispatch3() {
                          _dispatch = _asyncToGenerator(
                            /*#__PURE__*/ _regeneratorRuntime().mark(
                              function _callee16(i) {
                                var middleware;
                                return _regeneratorRuntime().wrap(
                                  function _callee16$(_context16) {
                                    while (1)
                                      switch (
                                        (_context16.prev = _context16.next)
                                      ) {
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
                                          throw createError(
                                            context,
                                            "The next() called multiple times"
                                          );
                                        case 4:
                                          index = i;
                                          middleware = middlewareList[index];
                                          if (middleware) {
                                            _context16.next = 8;
                                            break;
                                          }
                                          throw createError(
                                            context,
                                            "Middleware is not exist"
                                          );
                                        case 8:
                                          _context16.next = 10;
                                          return middleware.handler(
                                            context,
                                            dispatch.bind(null, i + 1),
                                            configCtrl.get(
                                              context.middleware,
                                              middleware.name
                                            )
                                          );
                                        case 10:
                                        case "end":
                                          return _context16.stop();
                                      }
                                  },
                                  _callee16
                                );
                              }
                            )
                          );
                          return _dispatch.apply(this, arguments);
                        };
                        dispatch = function _dispatch2(_x32) {
                          return _dispatch.apply(this, arguments);
                        };
                        index = -1;
                        configCtrl = _this14.httpSvc.configCtrl;
                        debug = configCtrl.get(
                          context.middleware,
                          "DEBUG"
                        ).payload;
                        _context17.next = 7;
                        return dispatch(0);
                      case 7:
                        if (!debug) {
                          _context17.next = 9;
                          break;
                        }
                        return _context17.abrupt("return", context);
                      case 9:
                        disableResExtract = configCtrl.get(
                          context.middleware,
                          BUILT_IN_MIDDLEWARE.RES_EXTRACT
                        ).disabled;
                        if (
                          !(
                            !disableResExtract &&
                            ((_a = context.response) == null ? void 0 : _a.ok)
                          )
                        ) {
                          _context17.next = 12;
                          break;
                        }
                        return _context17.abrupt(
                          "return",
                          ((_b = context.response) == null
                            ? void 0
                            : _b.data) || null
                        );
                      case 12:
                        return _context17.abrupt("return", context.response);
                      case 13:
                      case "end":
                        return _context17.stop();
                    }
                },
                _callee17);
              })
            );
            return function (_x31) {
              return _ref21.apply(this, arguments);
            };
          })();
        },
      },
    ]);
  })(HttpSvcControl);
  var RequestControl = /*#__PURE__*/ (function (_HttpSvcControl3) {
    function RequestControl() {
      var _this15;
      _classCallCheck(this, RequestControl);
      _this15 = _callSuper(this, RequestControl, arguments);
      __publicField(_this15, "fn", null);
      return _this15;
    }
    _inherits(RequestControl, _HttpSvcControl3);
    return _createClass(RequestControl, [
      {
        key: "request",
        value: (function () {
          var _request = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee18(
              config
            ) {
              var middlewareCtx,
                fn,
                _args18 = arguments;
              return _regeneratorRuntime().wrap(
                function _callee18$(_context18) {
                  while (1)
                    switch ((_context18.prev = _context18.next)) {
                      case 0:
                        middlewareCtx =
                          _args18.length > 1 && _args18[1] !== undefined
                            ? _args18[1]
                            : {};
                        fn = _args18.length > 2 ? _args18[2] : undefined;
                        if (!fn) {
                          if (!this.fn) {
                            this.generateRequestFunction();
                          }
                          fn = this.fn;
                        }
                        _context18.next = 5;
                        return fn(
                          this.createContext(config, middlewareCtx, fn)
                        );
                      case 5:
                        return _context18.abrupt("return", _context18.sent);
                      case 6:
                      case "end":
                        return _context18.stop();
                    }
                },
                _callee18,
                this
              );
            })
          );
          function request(_x33) {
            return _request.apply(this, arguments);
          }
          return request;
        })(),
      },
      {
        key: "generateRequestFunction",
        value: function generateRequestFunction() {
          this.fn = this.httpSvc.assembleCtrl.compose();
        },
      },
      {
        key: "reset",
        value: function reset() {
          this.fn = null;
        },
      },
      {
        key: "useAsyncRequest",
        get: function get() {
          var _this16 = this;
          return function (asyncRequest, config) {
            var inst = _this16.httpSvc.create(config);
            asyncRequest(inst.request.bind(inst));
          };
        },
      },
      {
        key: "createContext",
        value: function createContext(config) {
          var middleware =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          var requestFn = arguments.length > 2 ? arguments[2] : undefined;
          var url = config.url,
            method = config.method;
          var ctx = {
            config: _objectSpread(
              {
                baseURL: this.httpSvc.baseURL,
              },
              config
            ),
            useAsyncRequest: this.useAsyncRequest,
            middleware: middleware,
            request: {
              url: url,
              method: (method || "get").toUpperCase(),
              function: requestFn,
            },
          };
          return ctx;
        },
      },
    ]);
  })(HttpSvcControl);
  var HttpService$1 = /*#__PURE__*/ (function () {
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
    return _createClass(HttpService$1, [
      {
        key: "register",
        value: function register(middlewares) {
          this.assembleCtrl.register(middlewares);
        },
      },
      {
        key: "request",
        value: function request(config) {
          return this.requestCtrl.request(config);
        },
      },
      {
        key: "disable",
        value: function disable(middlewareName) {
          return this.assembleCtrl.disable(middlewareName);
        },
      },
      {
        key: "with",
        value: function _with(middleware, payload) {
          return this.assembleCtrl["with"](middleware, payload);
        },
      },
      {
        key: "setFetch",
        value: function setFetch(fetch2) {
          this.fetch = fetch2;
          this.requestCtrl.reset();
        },
      },
      {
        key: "create",
        value: function create(config) {
          return new HttpService$1(
            _objectSpread(
              {
                fetch: this.fetch,
              },
              config || {}
            )
          );
        },
      },
    ]);
  })();
  var HttpService = /*#__PURE__*/ (function (_HttpService$) {
    function HttpService(initConfig) {
      var _this17;
      _classCallCheck(this, HttpService);
      var baseURL = "//api.bilibili.com";
      var commonMiddlewares = [new HttpSvcTicketWbiUpdate(), new HttpSvcCsrf()];
      if (initConfig) {
        var middlewares = [];
        var isArr = Array.isArray(initConfig);
        (isArr ? initConfig : initConfig.middlewares || []).forEach(function (
          m
        ) {
          var idx = commonMiddlewares.findIndex(function (cm) {
            return m.name === cm.name;
          });
          if (idx > -1) {
            commonMiddlewares.splice(idx, 1);
          }
          middlewares.push(m);
        });
        _this17 = _callSuper(this, HttpService, [
          {
            fetch: isArr ? void 0 : initConfig.fetch,
            baseURL: (!isArr && initConfig.baseURL) || baseURL,
            middlewares: [].concat(commonMiddlewares, middlewares),
          },
        ]);
      } else {
        _this17 = _callSuper(this, HttpService, [
          {
            baseURL: baseURL,
            middlewares: [].concat(commonMiddlewares),
          },
        ]);
      }
      return _assertThisInitialized(_this17);
    }
    _inherits(HttpService, _HttpService$);
    return _createClass(HttpService);
  })(HttpService$1);
  var k =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof commonjsGlobal != "undefined"
      ? commonjsGlobal
      : typeof self != "undefined"
      ? self
      : {};
  (function () {
    (function (l) {
      (function (h) {
        var d = {
          searchParams: "URLSearchParams" in l,
          iterable: "Symbol" in l && "iterator" in Symbol,
          blob:
            "FileReader" in l &&
            "Blob" in l &&
            (function () {
              try {
                return new Blob(), true;
              } catch (e) {
                return false;
              }
            })(),
          formData: "FormData" in l,
          arrayBuffer: "ArrayBuffer" in l,
        };
        function D(e) {
          return e && DataView.prototype.isPrototypeOf(e);
        }
        if (d.arrayBuffer)
          var v = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]",
            ],
            _ =
              ArrayBuffer.isView ||
              function (e) {
                return e && v.indexOf(Object.prototype.toString.call(e)) > -1;
              };
        function w(e) {
          if (
            (typeof e != "string" && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
          )
            throw new TypeError("Invalid character in header field name");
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
                value: a,
              };
            },
          };
          return (
            d.iterable &&
              (t[Symbol.iterator] = function () {
                return t;
              }),
            t
          );
        }
        function u(e) {
          (this.map = {}),
            e instanceof u
              ? e.forEach(function (t, a) {
                  this.append(a, t);
                }, this)
              : Array.isArray(e)
              ? e.forEach(function (t) {
                  this.append(t[0], t[1]);
                }, this)
              : e &&
                Object.getOwnPropertyNames(e).forEach(function (t) {
                  this.append(t, e[t]);
                }, this);
        }
        (u.prototype.append = function (e, t) {
          (e = w(e)), (t = m(t));
          var a = this.map[e];
          this.map[e] = a ? a + ", " + t : t;
        }),
          (u.prototype["delete"] = function (e) {
            delete this.map[w(e)];
          }),
          (u.prototype.get = function (e) {
            return (e = w(e)), this.has(e) ? this.map[e] : null;
          }),
          (u.prototype.has = function (e) {
            return this.map.hasOwnProperty(w(e));
          }),
          (u.prototype.set = function (e, t) {
            this.map[w(e)] = m(t);
          }),
          (u.prototype.forEach = function (e, t) {
            for (var a in this.map)
              this.map.hasOwnProperty(a) && e.call(t, this.map[a], a, this);
          }),
          (u.prototype.keys = function () {
            var e = [];
            return (
              this.forEach(function (t, a) {
                e.push(a);
              }),
              O(e)
            );
          }),
          (u.prototype.values = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t);
              }),
              O(e)
            );
          }),
          (u.prototype.entries = function () {
            var e = [];
            return (
              this.forEach(function (t, a) {
                e.push([a, t]);
              }),
              O(e)
            );
          }),
          d.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
        function A(e) {
          if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
          e.bodyUsed = true;
        }
        function g(e) {
          return new Promise(function (t, a) {
            (e.onload = function () {
              t(e.result);
            }),
              (e.onerror = function () {
                a(e.error);
              });
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
          for (
            var t = new Uint8Array(e), a = new Array(t.length), p = 0;
            p < t.length;
            p++
          )
            a[p] = String.fromCharCode(t[p]);
          return a.join("");
        }
        function j(e) {
          if (e.slice) return e.slice(0);
          var t = new Uint8Array(e.byteLength);
          return t.set(new Uint8Array(e)), t.buffer;
        }
        function r() {
          return (
            (this.bodyUsed = false),
            (this._initBody = function (e) {
              (this._bodyInit = e),
                e
                  ? typeof e == "string"
                    ? (this._bodyText = e)
                    : d.blob && Blob.prototype.isPrototypeOf(e)
                    ? (this._bodyBlob = e)
                    : d.formData && FormData.prototype.isPrototypeOf(e)
                    ? (this._bodyFormData = e)
                    : d.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(e)
                    ? (this._bodyText = e.toString())
                    : d.arrayBuffer && d.blob && D(e)
                    ? ((this._bodyArrayBuffer = j(e.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : d.arrayBuffer &&
                      (ArrayBuffer.prototype.isPrototypeOf(e) || _(e))
                    ? (this._bodyArrayBuffer = j(e))
                    : (this._bodyText = e = Object.prototype.toString.call(e))
                  : (this._bodyText = ""),
                this.headers.get("content-type") ||
                  (typeof e == "string"
                    ? this.headers.set(
                        "content-type",
                        "text/plain;charset=UTF-8"
                      )
                    : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set("content-type", this._bodyBlob.type)
                    : d.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(e) &&
                      this.headers.set(
                        "content-type",
                        "application/x-www-form-urlencoded;charset=UTF-8"
                      ));
            }),
            d.blob &&
              ((this.blob = function () {
                var e = A(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]));
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer
                  ? A(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(B);
              })),
            (this.text = function () {
              var e = A(this);
              if (e) return e;
              if (this._bodyBlob) return P(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(S(this._bodyArrayBuffer));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
              return Promise.resolve(this._bodyText);
            }),
            d.formData &&
              (this.formData = function () {
                return this.text().then(s);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
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
            (this.url = e.url),
              (this.credentials = e.credentials),
              t.headers || (this.headers = new u(e.headers)),
              (this.method = e.method),
              (this.mode = e.mode),
              (this.signal = e.signal),
              !a &&
                e._bodyInit != null &&
                ((a = e._bodyInit), (e.bodyUsed = true));
          } else this.url = String(e);
          if (
            ((this.credentials =
              t.credentials || this.credentials || "same-origin"),
            (t.headers || !this.headers) && (this.headers = new u(t.headers)),
            (this.method = i(t.method || this.method || "GET")),
            (this.mode = t.mode || this.mode || null),
            (this.signal = t.signal || this.signal),
            (this.referrer = null),
            (this.method === "GET" || this.method === "HEAD") && a)
          )
            throw new TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(a);
        }
        n.prototype.clone = function () {
          return new n(this, {
            body: this._bodyInit,
          });
        };
        function s(e) {
          var t = new FormData();
          return (
            e
              .trim()
              .split("&")
              .forEach(function (a) {
                if (a) {
                  var p = a.split("="),
                    y = p.shift().replace(/\+/g, " "),
                    f = p.join("=").replace(/\+/g, " ");
                  t.append(decodeURIComponent(y), decodeURIComponent(f));
                }
              }),
            t
          );
        }
        function c(e) {
          var t = new u(),
            a = e.replace(/\r?\n[\t ]+/g, " ");
          return (
            a.split(/\r?\n/).forEach(function (p) {
              var y = p.split(":"),
                f = y.shift().trim();
              if (f) {
                var L = y.join(":").trim();
                t.append(f, L);
              }
            }),
            t
          );
        }
        r.call(n.prototype);
        function b(e, t) {
          t || (t = {}),
            (this.type = "default"),
            (this.status = t.status === void 0 ? 200 : t.status),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = "statusText" in t ? t.statusText : "OK"),
            (this.headers = new u(t.headers)),
            (this.url = t.url || ""),
            this._initBody(e);
        }
        r.call(b.prototype),
          (b.prototype.clone = function () {
            return new b(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new u(this.headers),
              url: this.url,
            });
          }),
          (b.error = function () {
            var e = new b(null, {
              status: 0,
              statusText: "",
            });
            return (e.type = "error"), e;
          });
        var E = [301, 302, 303, 307, 308];
        (b.redirect = function (e, t) {
          if (E.indexOf(t) === -1) throw new RangeError("Invalid status code");
          return new b(null, {
            status: t,
            headers: {
              location: e,
            },
          });
        }),
          (h.DOMException = l.DOMException);
        try {
          new h.DOMException();
        } catch (e) {
          (h.DOMException = function (t, a) {
            (this.message = t), (this.name = a);
            var p = Error(t);
            this.stack = p.stack;
          }),
            (h.DOMException.prototype = Object.create(Error.prototype)),
            (h.DOMException.prototype.constructor = h.DOMException);
        }
        function T(e, t) {
          return new Promise(function (a, p) {
            var y = new n(e, t);
            if (y.signal && y.signal.aborted)
              return p(new h.DOMException("Aborted", "AbortError"));
            var f = new XMLHttpRequest();
            function L() {
              f.abort();
            }
            (f.onload = function () {
              var R = {
                status: f.status,
                statusText: f.statusText,
                headers: c(f.getAllResponseHeaders() || ""),
              };
              R.url =
                "responseURL" in f
                  ? f.responseURL
                  : R.headers.get("X-Request-URL");
              var x = "response" in f ? f.response : f.responseText;
              a(new b(x, R));
            }),
              (f.onerror = function () {
                p(new TypeError("Network request failed"));
              }),
              (f.ontimeout = function () {
                p(new TypeError("Network request failed"));
              }),
              (f.onabort = function () {
                p(new h.DOMException("Aborted", "AbortError"));
              }),
              f.open(y.method, y.url, true),
              y.credentials === "include"
                ? (f.withCredentials = true)
                : y.credentials === "omit" && (f.withCredentials = false),
              "responseType" in f && d.blob && (f.responseType = "blob"),
              y.headers.forEach(function (R, x) {
                f.setRequestHeader(x, R);
              }),
              y.signal &&
                (y.signal.addEventListener("abort", L),
                (f.onreadystatechange = function () {
                  f.readyState === 4 &&
                    y.signal.removeEventListener("abort", L);
                })),
              f.send(typeof y._bodyInit == "undefined" ? null : y._bodyInit);
          });
        }
        return (
          (T.polyfill = true),
          l.fetch ||
            ((l.fetch = T), (l.Headers = u), (l.Request = n), (l.Response = b)),
          (h.Headers = u),
          (h.Request = n),
          (h.Response = b),
          (h.fetch = T),
          Object.defineProperty(h, "__esModule", {
            value: true,
          }),
          h
        );
      })({});
    })(typeof self != "undefined" ? self : k);
  })();
  (function (l) {
    l();
  })(function () {
    function l(r, o) {
      if (!(r instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    function h(r, o) {
      for (var i = 0; i < o.length; i++) {
        var n = o[i];
        (n.enumerable = n.enumerable || false),
          (n.configurable = true),
          "value" in n && (n.writable = true),
          Object.defineProperty(r, n.key, n);
      }
    }
    function d(r, o, i) {
      return (
        o && h(r.prototype, o),
        Object.defineProperty(r, "prototype", {
          writable: false,
        }),
        r
      );
    }
    function D(r, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (r.prototype = Object.create(o && o.prototype, {
        constructor: {
          value: r,
          writable: true,
          configurable: true,
        },
      })),
        Object.defineProperty(r, "prototype", {
          writable: false,
        }),
        o && _(r, o);
    }
    function v(r) {
      return (
        (v = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (i) {
              return i.__proto__ || Object.getPrototypeOf(i);
            }),
        v(r)
      );
    }
    function _(r, o) {
      return (
        (_ = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (n, s) {
              return (n.__proto__ = s), n;
            }),
        _(r, o)
      );
    }
    function w() {
      if (
        typeof Reflect == "undefined" ||
        !Reflect.construct ||
        Reflect.construct.sham
      )
        return false;
      if (typeof Proxy == "function") return true;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          true
        );
      } catch (r) {
        return false;
      }
    }
    function m(r) {
      if (r === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return r;
    }
    function O(r, o) {
      if (o && (_typeof(o) == "object" || typeof o == "function")) return o;
      if (o !== void 0)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
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
      for (
        ;
        !Object.prototype.hasOwnProperty.call(r, o) && ((r = v(r)), r !== null);

      );
      return r;
    }
    function g() {
      return (
        typeof Reflect != "undefined" && Reflect.get
          ? (g = Reflect.get.bind())
          : (g = function g(o, i, n) {
              var s = A(o, i);
              if (!!s) {
                var c = Object.getOwnPropertyDescriptor(s, i);
                return c.get
                  ? c.get.call(arguments.length < 3 ? o : n)
                  : c.value;
              }
            }),
        g.apply(this, arguments)
      );
    }
    var B = (function () {
        function r() {
          l(this, r),
            Object.defineProperty(this, "listeners", {
              value: {},
              writable: true,
              configurable: true,
            });
        }
        return (
          d(r, [
            {
              key: "addEventListener",
              value: function value(i, n, s) {
                i in this.listeners || (this.listeners[i] = []),
                  this.listeners[i].push({
                    callback: n,
                    options: s,
                  });
              },
            },
            {
              key: "removeEventListener",
              value: function value(i, n) {
                if (i in this.listeners) {
                  for (
                    var s = this.listeners[i], c = 0, b = s.length;
                    c < b;
                    c++
                  )
                    if (s[c].callback === n) {
                      s.splice(c, 1);
                      return;
                    }
                }
              },
            },
            {
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
                      E.options &&
                        E.options.once &&
                        _this18.removeEventListener(i.type, E.callback);
                    },
                    E;
                  for (
                    var n = this.listeners[i.type],
                      s = n.slice(),
                      c = 0,
                      b = s.length;
                    c < b;
                    c++
                  ) {
                    _loop();
                  }
                  return !i.defaultPrevented;
                }
              },
            },
          ]),
          r
        );
      })(),
      P = (function (r) {
        D(i, r);
        var o = u(i);
        function i() {
          var n;
          return (
            l(this, i),
            (n = o.call(this)),
            n.listeners || B.call(m(n)),
            Object.defineProperty(m(n), "aborted", {
              value: false,
              writable: true,
              configurable: true,
            }),
            Object.defineProperty(m(n), "onabort", {
              value: null,
              writable: true,
              configurable: true,
            }),
            Object.defineProperty(m(n), "reason", {
              value: void 0,
              writable: true,
              configurable: true,
            }),
            n
          );
        }
        return (
          d(i, [
            {
              key: "toString",
              value: function value() {
                return "[object AbortSignal]";
              },
            },
            {
              key: "dispatchEvent",
              value: function value(s) {
                s.type === "abort" &&
                  ((this.aborted = true),
                  typeof this.onabort == "function" &&
                    this.onabort.call(this, s)),
                  g(v(i.prototype), "dispatchEvent", this).call(this, s);
              },
            },
          ]),
          i
        );
      })(B),
      S = (function () {
        function r() {
          l(this, r),
            Object.defineProperty(this, "signal", {
              value: new P(),
              writable: true,
              configurable: true,
            });
        }
        return (
          d(r, [
            {
              key: "abort",
              value: function value(i) {
                var n;
                try {
                  n = new Event("abort");
                } catch (c) {
                  typeof document != "undefined"
                    ? document.createEvent
                      ? ((n = document.createEvent("Event")),
                        n.initEvent("abort", false, false))
                      : ((n = document.createEventObject()), (n.type = "abort"))
                    : (n = {
                        type: "abort",
                        bubbles: false,
                        cancelable: false,
                      });
                }
                var s = i;
                if (s === void 0)
                  if (typeof document == "undefined")
                    (s = new Error("This operation was aborted")),
                      (s.name = "AbortError");
                  else
                    try {
                      s = new DOMException("signal is aborted without reason");
                    } catch (c) {
                      (s = new Error("This operation was aborted")),
                        (s.name = "AbortError");
                    }
                (this.signal.reason = s), this.signal.dispatchEvent(n);
              },
            },
            {
              key: "toString",
              value: function value() {
                return "[object AbortController]";
              },
            },
          ]),
          r
        );
      })();
    typeof Symbol != "undefined" &&
      Symbol.toStringTag &&
      ((S.prototype[Symbol.toStringTag] = "AbortController"),
      (P.prototype[Symbol.toStringTag] = "AbortSignal"));
    function j(r) {
      return r.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
        ? (console.log(
            "__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"
          ),
          true)
        : (typeof r.Request == "function" &&
            !r.Request.prototype.hasOwnProperty("signal")) ||
            !r.AbortController;
    }
    (function (r) {
      !j(r) || ((r.AbortController = S), (r.AbortSignal = P));
    })(typeof self != "undefined" ? self : k);
  });
  var IS_UAT =
    location.hostname.includes("uat-") ||
    location.search.includes("_apiEnv_=uat");
  var IS_PRE =
    location.hostname.includes("pre-") ||
    location.search.includes("_apiEnv_=pre");
  var origin = ""
    .concat(location.protocol, "//")
    .concat(
      IS_UAT ? "uat-" : IS_PRE ? "pre-" : "",
      "activity-template.bilibili.co"
    );
  var managerOrigin = "//".concat(
    IS_UAT ? "uat-" : IS_PRE ? "pre-" : "",
    "manager.bilibili.co"
  );
  new HttpService({
    baseURL: origin,
  });
  new HttpService({
    baseURL: managerOrigin,
  });
  new HttpService([
    {
      name: "SET_DEFAULT_HEADERS",
      handler: function handler(ctx, next) {
        return _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee19() {
            var _ctx$request5, method, _headers, _key3;
            return _regeneratorRuntime().wrap(function _callee19$(_context19) {
              while (1)
                switch ((_context19.prev = _context19.next)) {
                  case 0:
                    if (ctx.request) {
                      (_ctx$request5 = ctx.request),
                        (method = _ctx$request5.method),
                        (_headers = _ctx$request5.headers);
                      if (method === "POST") {
                        _key3 = "Content-Type";
                        ctx.request.headers = _objectSpread(
                          _objectSpread({}, _headers || {}),
                          {},
                          _defineProperty2(
                            {},
                            _key3,
                            (_headers == null ? void 0 : _headers[_key3]) ||
                              "application/x-www-form-urlencoded"
                          )
                        );
                      }
                    }
                    _context19.next = 3;
                    return next();
                  case 3:
                  case "end":
                    return _context19.stop();
                }
            }, _callee19);
          })
        )();
      },
    },
  ]);
  var baseRequest = new HttpService();
  var request = /*#__PURE__*/ (function () {
    var _ref22 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee20(params) {
        var res;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1)
            switch ((_context20.prev = _context20.next)) {
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
      })
    );
    return function request(_x34) {
      return _ref22.apply(this, arguments);
    };
  })();
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
  var getSymbols$3 = !nativeGetSymbols$1
    ? stubArray$1
    : function (object) {
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
  var getSymbolsIn$2 = !nativeGetSymbols
    ? stubArray
    : function (object) {
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
    return isArray$6(object)
      ? result
      : arrayPush$1(result, symbolsFunc(object));
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
  if (
    (DataView$1 &&
      getTag$3(new DataView$1(new ArrayBuffer(1))) != dataViewTag$2) ||
    (Map && getTag$3(new Map()) != mapTag$3) ||
    (Promise$1 && getTag$3(Promise$1.resolve()) != promiseTag) ||
    (Set && getTag$3(new Set()) != setTag$3) ||
    (WeakMap && getTag$3(new WeakMap()) != weakMapTag$1)
  ) {
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
    if (
      length &&
      typeof array[0] == "string" &&
      hasOwnProperty.call(array, "index")
    ) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  var _initCloneArray = initCloneArray$1;
  var cloneArrayBuffer$1 = _cloneArrayBuffer;
  function cloneDataView$1(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$1(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(
      buffer,
      dataView.byteOffset,
      dataView.byteLength
    );
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
  cloneableTags[argsTag] =
    cloneableTags[arrayTag] =
    cloneableTags[arrayBufferTag] =
    cloneableTags[dataViewTag] =
    cloneableTags[boolTag] =
    cloneableTags[dateTag] =
    cloneableTags[float32Tag] =
    cloneableTags[float64Tag] =
    cloneableTags[int8Tag] =
    cloneableTags[int16Tag] =
    cloneableTags[int32Tag] =
    cloneableTags[mapTag] =
    cloneableTags[numberTag] =
    cloneableTags[objectTag] =
    cloneableTags[regexpTag] =
    cloneableTags[setTag] =
    cloneableTags[stringTag] =
    cloneableTags[symbolTag$1] =
    cloneableTags[uint8Tag] =
    cloneableTags[uint8ClampedTag] =
    cloneableTags[uint16Tag] =
    cloneableTags[uint32Tag] =
      true;
  cloneableTags[errorTag] =
    cloneableTags[funcTag] =
    cloneableTags[weakMapTag] =
      false;
  function baseClone$1(value, bitmask, customizer, key, object, stack) {
    var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$1,
      isFlat = bitmask & CLONE_FLAT_FLAG$1,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
    if (customizer) {
      result = object
        ? customizer(value, key, object, stack)
        : customizer(value);
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
      if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
        result = isFlat || isFunc ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat
            ? copySymbolsIn(value, baseAssignIn(result, value))
            : copySymbols(value, baseAssign(result, value));
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
        result.add(
          baseClone$1(subValue, bitmask, customizer, subValue, value, stack)
        );
      });
    } else if (isMap(value)) {
      value.forEach(function (subValue, key2) {
        result.set(
          key2,
          baseClone$1(subValue, bitmask, customizer, key2, value, stack)
        );
      });
    }
    var keysFunc = isFull
      ? isFlat
        ? getAllKeysIn$1
        : getAllKeys
      : isFlat
      ? keysIn
      : keys;
    var props = isArr ? void 0 : keysFunc(value);
    arrayEach(props || value, function (subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue$1(
        result,
        key2,
        baseClone$1(subValue, bitmask, customizer, key2, value, stack)
      );
    });
    return result;
  }
  var _baseClone = baseClone$1;
  var baseGetTag = _baseGetTag,
    isObjectLike = isObjectLike_1;
  var symbolTag = "[object Symbol]";
  function isSymbol$3(value) {
    return (
      _typeof(value) == "symbol" ||
      (isObjectLike(value) && baseGetTag(value) == symbolTag)
    );
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
    if (
      type == "number" ||
      type == "symbol" ||
      type == "boolean" ||
      value == null ||
      isSymbol$2(value)
    ) {
      return true;
    }
    return (
      reIsPlainProp.test(value) ||
      !reIsDeepProp.test(value) ||
      (object != null && value in Object(object))
    );
  }
  var _isKey = isKey$1;
  var MapCache = _MapCache;
  var FUNC_ERROR_TEXT = "Expected a function";
  function memoize$1(func, resolver) {
    if (
      typeof func != "function" ||
      (resolver != null && typeof resolver != "function")
    ) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var _memoized = function memoized() {
      var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = _memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      _memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    _memoized.cache = new (memoize$1.Cache || MapCache)();
    return _memoized;
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
  var rePropName =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath$1 = memoizeCapped(function (string) {
    var result = [];
    if (string.charCodeAt(0) === 46) {
      result.push("");
    }
    string.replace(rePropName, function (match, number, quote, subString) {
      result.push(
        quote ? subString.replace(reEscapeChar, "$1") : number || match
      );
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
    length = start > end ? 0 : (end - start) >>> 0;
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
    return (
      isArray$1(value) ||
      isArguments$1(value) ||
      !!(spreadableSymbol && value && value[spreadableSymbol])
    );
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
      result = baseClone(
        result,
        CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG,
        customOmitClone
      );
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
          newValue = isObject(objValue)
            ? objValue
            : isIndex$1(path[index + 1])
            ? []
            : {};
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
    return (
      !!length &&
      isLength(length) &&
      isIndex(key, length) &&
      (isArray(object) || isArguments(object))
    );
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
    new: function _new(time) {
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
        },
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
        },
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
        },
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
          var tempDate = new Date(
            dateCopy.getFullYear(),
            dateCopy.getMonth() + 1,
            0
          );
          dateCopy.setDate(tempDate.getDate());
        },
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
        },
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
        month: "months",
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
        },
      };
      unitMap[unit]();
      return dateCopy;
    },
  };
  var TimeService = /*#__PURE__*/ (function () {
    function TimeService() {
      _classCallCheck(this, TimeService);
      this.msDiffWithServer = null;
      this.init();
    }
    return _createClass(TimeService, [
      {
        key: "init",
        value: function init() {
          this.updateMsDiff();
        },
      },
      {
        key: "create",
        value: function create() {
          return new TimeService();
        },
      },
      {
        key: "updateMsDiff",
        value: (function () {
          var _updateMsDiff = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee21() {
              var res;
              return _regeneratorRuntime().wrap(
                function _callee21$(_context21) {
                  while (1)
                    switch ((_context21.prev = _context21.next)) {
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
                },
                _callee21,
                this
              );
            })
          );
          function updateMsDiff() {
            return _updateMsDiff.apply(this, arguments);
          }
          return updateMsDiff;
        })(),
      },
      {
        key: "queryTimestamp",
        value: (function () {
          var _queryTimestamp = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee22() {
              return _regeneratorRuntime().wrap(function _callee22$(
                _context22
              ) {
                while (1)
                  switch ((_context22.prev = _context22.next)) {
                    case 0:
                      return _context22.abrupt(
                        "return",
                        request({
                          url: "https://api.live.bilibili.com/xlive/open-interface/v1/rtc/getTimestamp",
                        })
                      );
                    case 1:
                    case "end":
                      return _context22.stop();
                  }
              },
              _callee22);
            })
          );
          function queryTimestamp() {
            return _queryTimestamp.apply(this, arguments);
          }
          return queryTimestamp;
        })(), // 获取修正后的 Date 实例
      },
      {
        key: "getDate",
        value: function getDate(params) {
          var date;
          if (typeof params === "string") {
            date = dateUtil["new"](params);
          } else if (typeof params === "number") {
            date = new Date(params);
          } else {
            date = /* @__PURE__ */ new Date();
          }
          return this.msDiffWithServer
            ? new Date(date.getTime() + this.msDiffWithServer)
            : date;
        },
      },
      {
        key: "createTimer",
        value: function createTimer(cb) {
          var _this19 = this;
          var intervalId = setInterval(function () {
            cb(_this19.getDate().getTime());
          }, 1e3);
          return function () {
            clearInterval(intervalId);
          };
        },
      },
    ]);
  })();
  new TimeService();
  var positionBoxRoot = "_positionBoxRoot_v6ypb_1";
  var tips = "_tips_v6ypb_8";
  var scaleBox = "_scaleBox_v6ypb_14";
  var gap = "_gap_v6ypb_18";
  var item = "_item_v6ypb_22";
  var label = "_label_v6ypb_28";
  var numberBox = "_numberBox_v6ypb_33";
  var styles = {
    positionBoxRoot: positionBoxRoot,
    tips: tips,
    scaleBox: scaleBox,
    gap: gap,
    item: item,
    label: label,
    numberBox: numberBox,
  };
  function TipInput(props) {
    var value = props.value,
      onChange = props.onChange,
      onChangeFinished = props.onChangeFinished;
    var counter = react.useRef(680);
    var _react$useState = react.useState(value),
      _react$useState2 = _slicedToArray(_react$useState, 2),
      localValue = _react$useState2[0],
      setLocalValue = _react$useState2[1];
    react.useEffect(
      function () {
        if (localValue !== "") {
          setLocalValue(value);
        }
      },
      [value, localValue]
    );
    react.useEffect(
      function () {
        if (localValue === "") {
          return;
        }
        counter.current = 680;
        var id = setInterval(function () {
          counter.current -= 100;
          if (counter.current <= 0) {
            onChangeFinished == null
              ? void 0
              : onChangeFinished(Number(localValue));
            clearInterval(id);
            counter.current = 680;
          }
        }, 100);
        return function () {
          clearInterval(id);
        };
      },
      [localValue]
    );
    return /* @__PURE__ */ jsxRuntime.jsx("input", {
      "data-cy": props["data-cy"],
      type: "number",
      value: String(localValue),
      step: 1,
      onChange: onChangeClient,
      onBlur: onBlurClient,
    });
    function onChangeClient(evt) {
      var newValue = evt.target.value === "" ? "" : Number(evt.target.value);
      if (newValue !== "") {
        setLocalValue(newValue);
        onChange == null ? void 0 : onChange(Number(newValue));
      } else {
        setLocalValue("");
      }
    }
    function onBlurClient() {
      if (localValue === "") {
        setLocalValue(value);
      }
    }
  }
  function px(value) {
    return utils.jsRem.calcRenderPixel(value);
  }
  function EvaPositionBox(props) {
    var _props$$EvaMethod = props.$EvaMethod,
      $EvaMethod = _props$$EvaMethod === void 0 ? "preview" : _props$$EvaMethod,
      top = props.top,
      left = props.left,
      _props$zIndex = props.zIndex,
      zIndex = _props$zIndex === void 0 ? 0 : _props$zIndex,
      $EvaUpdateSelfProps = props.$EvaUpdateSelfProps,
      children = props.children;
    var windowRef = react.useRef(null);
    var validParentEleRef = react.useRef(null);
    var eleRef = react.useRef(null);
    var initialDragMouseCoordinateOffsetRef = react.useRef(null);
    var _react$useState3 = react.useState({
        top: top,
        left: left,
      }),
      _react$useState4 = _slicedToArray(_react$useState3, 2),
      localPosition = _react$useState4[0],
      setLocalPosition = _react$useState4[1];
    var _react$useState5 = react.useState({
        top: 0,
        left: 0,
      }),
      _react$useState6 = _slicedToArray(_react$useState5, 2),
      tipsPosition = _react$useState6[0],
      setTipsPosition = _react$useState6[1];
    react.useEffect(
      function () {
        if (window.__BILIACT_ENV__ !== "H5") {
          setLocalPosition({
            top: top !== null && top !== void 0 ? top : 100,
            left: left !== null && left !== void 0 ? left : 600,
          });
          return;
        }
        setLocalPosition({
          top: top,
          left: left,
        });
      },
      [top, left]
    );
    react.useEffect(
      function () {
        if ($EvaMethod === "preview") {
          return;
        }
        var ele = eleRef.current;
        var top2 = 0;
        var left2 = 0;
        var documentWidth = document.documentElement.clientWidth;
        while (ele) {
          top2 += ele.offsetTop;
          top2 -= ele.scrollTop;
          left2 += ele.offsetLeft;
          left2 -= ele.scrollLeft;
          ele = ele.offsetParent;
        }
        var width = 40;
        var height = 24;
        var scale = 0.75;
        var topOffset = -height * scale;
        setTipsPosition({
          top: Math.max(0, top2 + topOffset),
          left: Math.min(left2, documentWidth - width * scale),
        });
      },
      [localPosition, $EvaMethod]
    );
    react.useEffect(function () {
      document.addEventListener("dragover", preventDragOver, false);
      return function () {
        document.addEventListener("dragover", preventDragOver, false);
      };
      function preventDragOver(evt) {
        evt.preventDefault();
      }
    }, []);
    if ($EvaMethod === "preview") {
      return /* @__PURE__ */ jsxRuntime.jsx("div", {
        "data-cy": "EvaPositionBox",
        "data-method": $EvaMethod,
        className: styles.positionBoxRoot,
        style: {
          top: px(localPosition.top),
          left: px(localPosition.left),
          zIndex: zIndex,
        },
        children: children,
      });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs("div", {
      ref: eleRef,
      draggable: true,
      "data-cy": "EvaPositionBox",
      "data-method": $EvaMethod,
      className: styles.positionBoxRoot,
      style: {
        top: px(localPosition.top),
        left: px(localPosition.left),
        zIndex: zIndex,
      },
      onDragStart: onDragStartClient,
      onDrag: onDragClient,
      onDragEnd: onDragEndClient,
      children: [renderTips(), children],
    });
    function renderTips() {
      return reactDom.createPortal(
        /* @__PURE__ */ jsxRuntime.jsx("div", {
          "data-cy": "EvaPositionBox_Tips",
          className: styles.tips,
          style: {
            top: px(tipsPosition.top),
            left: px(tipsPosition.left),
          },
          children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
            className: styles.scaleBox,
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", {
                className: styles.item,
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("div", {
                    className: styles.label,
                    children: "X",
                  }),
                  /* @__PURE__ */ jsxRuntime.jsx("div", {
                    className: styles.numberBox,
                    children: /* @__PURE__ */ jsxRuntime.jsx(TipInput, {
                      "data-cy": "EvaPositionBox_Tips_XInput",
                      value: localPosition.left,
                      onChange: function onChange(value) {
                        return onInputChange("left", value);
                      },
                      onChangeFinished: function onChangeFinished() {
                        $EvaUpdateSelfProps == null
                          ? void 0
                          : $EvaUpdateSelfProps(localPosition);
                      },
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntime.jsx("div", {
                className: styles.gap,
              }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", {
                className: styles.item,
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("div", {
                    className: styles.label,
                    children: "Y",
                  }),
                  /* @__PURE__ */ jsxRuntime.jsx("div", {
                    className: styles.numberBox,
                    children: /* @__PURE__ */ jsxRuntime.jsx(TipInput, {
                      "data-cy": "EvaPositionBox_Tips_YInput",
                      value: localPosition.top,
                      onChange: function onChange(value) {
                        return onInputChange("top", value);
                      },
                      onChangeFinished: function onChangeFinished() {
                        $EvaUpdateSelfProps == null
                          ? void 0
                          : $EvaUpdateSelfProps(localPosition);
                      },
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        document.body
      );
    }
    function onDragStartClient(evt) {
      evt.stopPropagation();
      var eleCoordinate = eleRef.current.getBoundingClientRect();
      windowRef.current = evt.view;
      validParentEleRef.current = getValidParentEle();
      initialDragMouseCoordinateOffsetRef.current = {
        top: evt.clientY - eleCoordinate.top,
        left: evt.clientX - eleCoordinate.left,
      };
      var empty = new Image();
      empty.src =
        "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setDragImage(empty, 0, 0);
      evt.dataTransfer.setData("text/html", "EvaPositionBox");
    }
    function onDragClient(evt) {
      evt.stopPropagation();
      if (windowRef.current !== evt.view) {
        return;
      }
      var parentEle = validParentEleRef.current;
      var parentCoordinate = parentEle.getBoundingClientRect();
      var eleCoordinate = eleRef.current.getBoundingClientRect();
      var scrollOffset = {
        top:
          parentEle.scrollHeight === parentEle.clientHeight
            ? 0
            : parentEle.scrollTop,
        left:
          parentEle.scrollWidth === parentEle.clientWidth
            ? 0
            : parentEle.scrollLeft,
      };
      var dragCoordinateOffset = {
        top:
          evt.clientY -
          initialDragMouseCoordinateOffsetRef.current.top +
          scrollOffset.top,
        left:
          evt.clientX -
          initialDragMouseCoordinateOffsetRef.current.left +
          scrollOffset.left,
      };
      var top2 = Math.max(
        0,
        Math.min(
          //可拖拽的最大位置
          parentEle.scrollHeight - eleCoordinate.height,
          // 当前拖拽的位置
          dragCoordinateOffset.top - parentCoordinate.top
        )
      );
      var left2 = Math.max(
        0,
        Math.min(
          //可拖拽的最大位置
          parentEle.scrollWidth - eleCoordinate.width,
          // 当前拖拽的位置
          dragCoordinateOffset.left - parentCoordinate.left
        )
      );
      setLocalPosition({
        top: top2,
        left: left2,
      });
    }
    function onDragEndClient(evt) {
      $EvaUpdateSelfProps == null ? void 0 : $EvaUpdateSelfProps(localPosition);
    }
    function onInputChange(direction, value) {
      validParentEleRef.current = getValidParentEle();
      var toTop, toLeft;
      if (direction === "top") {
        toLeft = localPosition.left;
        toTop = Number(value);
      }
      if (direction === "left") {
        toTop = localPosition.top;
        toLeft = Number(value);
      }
      var parentEle = validParentEleRef.current;
      parentEle.getBoundingClientRect();
      var eleCoordinate = eleRef.current.getBoundingClientRect();
      ({
        top:
          parentEle.scrollHeight === parentEle.clientHeight
            ? 0
            : parentEle.scrollTop,
        left:
          parentEle.scrollWidth === parentEle.clientWidth
            ? 0
            : parentEle.scrollLeft,
      });
      var top2 = Math.max(
        0,
        Math.min(parentEle.scrollHeight - eleCoordinate.height, toTop)
      );
      var left2 = Math.max(
        0,
        Math.min(parentEle.scrollWidth - eleCoordinate.width, toLeft)
      );
      setLocalPosition({
        top: top2,
        left: left2,
      });
    }
    function getValidParentEle() {
      if (!eleRef.current) {
        return null;
      }
      var target = eleRef.current.parentElement;
      while (target) {
        if (
          // 找到最近的父节点
          // 不是 LayerWrapper
          // 包含 相对定位属性值
          target.getAttribute("data-cy") !== "EvaRenderer_LayerWrapper" &&
          ["relative", "absolute", "fixed"].includes(
            window.getComputedStyle(target).position
          )
        ) {
          break;
        }
        target = target.parentElement;
      }
      return target;
    }
  }
  return EvaPositionBox;
});
