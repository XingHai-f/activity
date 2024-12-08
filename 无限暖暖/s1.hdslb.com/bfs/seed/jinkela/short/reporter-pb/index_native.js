!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).ReporterPb =
        t());
})(this, function () {
  "use strict";
  function e(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        i.push.apply(i, r);
    }
    return i;
  }
  function t(t) {
    for (var i = 1; i < arguments.length; i++) {
      var r = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? e(Object(r), !0).forEach(function (e) {
            c(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : e(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  function i() {
    i = function () {
      return t;
    };
    var e,
      t = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (e, t, i) {
          e[t] = i.value;
        },
      a = "function" == typeof Symbol ? Symbol : {},
      s = a.iterator || "@@iterator",
      l = a.asyncIterator || "@@asyncIterator",
      u = a.toStringTag || "@@toStringTag";
    function c(e, t, i) {
      return (
        Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        e[t]
      );
    }
    try {
      c({}, "");
    } catch (e) {
      c = function (e, t, i) {
        return (e[t] = i);
      };
    }
    function d(e, t, i, r) {
      var n = t && t.prototype instanceof m ? t : m,
        a = Object.create(n.prototype),
        s = new P(r || []);
      return o(a, "_invoke", { value: E(e, i, s) }), a;
    }
    function f(e, t, i) {
      try {
        return { type: "normal", arg: e.call(t, i) };
      } catch (e) {
        return { type: "throw", arg: e };
      }
    }
    t.wrap = d;
    var p = "suspendedStart",
      v = "suspendedYield",
      h = "executing",
      w = "completed",
      b = {};
    function m() {}
    function g() {}
    function y() {}
    var _ = {};
    c(_, s, function () {
      return this;
    });
    var k = Object.getPrototypeOf,
      F = k && k(k(T([])));
    F && F !== r && n.call(F, s) && (_ = F);
    var x = (y.prototype = m.prototype = Object.create(_));
    function S(e) {
      ["next", "throw", "return"].forEach(function (t) {
        c(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function B(e, t) {
      function i(r, o, a, s) {
        var l = f(e[r], e, o);
        if ("throw" !== l.type) {
          var u = l.arg,
            c = u.value;
          return c && "object" == typeof c && n.call(c, "__await")
            ? t.resolve(c.__await).then(
                function (e) {
                  i("next", e, a, s);
                },
                function (e) {
                  i("throw", e, a, s);
                }
              )
            : t.resolve(c).then(
                function (e) {
                  (u.value = e), a(u);
                },
                function (e) {
                  return i("throw", e, a, s);
                }
              );
        }
        s(l.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (e, n) {
          function o() {
            return new t(function (t, r) {
              i(e, n, t, r);
            });
          }
          return (r = r ? r.then(o, o) : o());
        },
      });
    }
    function E(t, i, r) {
      var n = p;
      return function (o, a) {
        if (n === h) throw Error("Generator is already running");
        if (n === w) {
          if ("throw" === o) throw a;
          return { value: e, done: !0 };
        }
        for (r.method = o, r.arg = a; ; ) {
          var s = r.delegate;
          if (s) {
            var l = V(s, r);
            if (l) {
              if (l === b) continue;
              return l;
            }
          }
          if ("next" === r.method) r.sent = r._sent = r.arg;
          else if ("throw" === r.method) {
            if (n === p) throw ((n = w), r.arg);
            r.dispatchException(r.arg);
          } else "return" === r.method && r.abrupt("return", r.arg);
          n = h;
          var u = f(t, i, r);
          if ("normal" === u.type) {
            if (((n = r.done ? w : v), u.arg === b)) continue;
            return { value: u.arg, done: r.done };
          }
          "throw" === u.type &&
            ((n = w), (r.method = "throw"), (r.arg = u.arg));
        }
      };
    }
    function V(t, i) {
      var r = i.method,
        n = t.iterator[r];
      if (n === e)
        return (
          (i.delegate = null),
          ("throw" === r &&
            t.iterator.return &&
            ((i.method = "return"),
            (i.arg = e),
            V(t, i),
            "throw" === i.method)) ||
            ("return" !== r &&
              ((i.method = "throw"),
              (i.arg = new TypeError(
                "The iterator does not provide a '" + r + "' method"
              )))),
          b
        );
      var o = f(n, t.iterator, i.arg);
      if ("throw" === o.type)
        return (i.method = "throw"), (i.arg = o.arg), (i.delegate = null), b;
      var a = o.arg;
      return a
        ? a.done
          ? ((i[t.resultName] = a.value),
            (i.next = t.nextLoc),
            "return" !== i.method && ((i.method = "next"), (i.arg = e)),
            (i.delegate = null),
            b)
          : a
        : ((i.method = "throw"),
          (i.arg = new TypeError("iterator result is not an object")),
          (i.delegate = null),
          b);
    }
    function I(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t);
    }
    function j(e) {
      var t = e.completion || {};
      (t.type = "normal"), delete t.arg, (e.completion = t);
    }
    function P(e) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        e.forEach(I, this),
        this.reset(!0);
    }
    function T(t) {
      if (t || "" === t) {
        var i = t[s];
        if (i) return i.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var r = -1,
            o = function i() {
              for (; ++r < t.length; )
                if (n.call(t, r)) return (i.value = t[r]), (i.done = !1), i;
              return (i.value = e), (i.done = !0), i;
            };
          return (o.next = o);
        }
      }
      throw new TypeError(typeof t + " is not iterable");
    }
    return (
      (g.prototype = y),
      o(x, "constructor", { value: y, configurable: !0 }),
      o(y, "constructor", { value: g, configurable: !0 }),
      (g.displayName = c(y, u, "GeneratorFunction")),
      (t.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return (
          !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
        );
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, y)
            : ((e.__proto__ = y), c(e, u, "GeneratorFunction")),
          (e.prototype = Object.create(x)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      S(B.prototype),
      c(B.prototype, l, function () {
        return this;
      }),
      (t.AsyncIterator = B),
      (t.async = function (e, i, r, n, o) {
        void 0 === o && (o = Promise);
        var a = new B(d(e, i, r, n), o);
        return t.isGeneratorFunction(i)
          ? a
          : a.next().then(function (e) {
              return e.done ? e.value : a.next();
            });
      }),
      S(x),
      c(x, u, "Generator"),
      c(x, s, function () {
        return this;
      }),
      c(x, "toString", function () {
        return "[object Generator]";
      }),
      (t.keys = function (e) {
        var t = Object(e),
          i = [];
        for (var r in t) i.push(r);
        return (
          i.reverse(),
          function e() {
            for (; i.length; ) {
              var r = i.pop();
              if (r in t) return (e.value = r), (e.done = !1), e;
            }
            return (e.done = !0), e;
          }
        );
      }),
      (t.values = T),
      (P.prototype = {
        constructor: P,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = e),
            this.tryEntries.forEach(j),
            !t)
          )
            for (var i in this)
              "t" === i.charAt(0) &&
                n.call(this, i) &&
                !isNaN(+i.slice(1)) &&
                (this[i] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var i = this;
          function r(r, n) {
            return (
              (s.type = "throw"),
              (s.arg = t),
              (i.next = r),
              n && ((i.method = "next"), (i.arg = e)),
              !!n
            );
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
              s = a.completion;
            if ("root" === a.tryLoc) return r("end");
            if (a.tryLoc <= this.prev) {
              var l = n.call(a, "catchLoc"),
                u = n.call(a, "finallyLoc");
              if (l && u) {
                if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return r(a.finallyLoc);
              } else if (l) {
                if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
              } else {
                if (!u) throw Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return r(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var r = this.tryEntries[i];
            if (
              r.tryLoc <= this.prev &&
              n.call(r, "finallyLoc") &&
              this.prev < r.finallyLoc
            ) {
              var o = r;
              break;
            }
          }
          o &&
            ("break" === e || "continue" === e) &&
            o.tryLoc <= t &&
            t <= o.finallyLoc &&
            (o = null);
          var a = o ? o.completion : {};
          return (
            (a.type = e),
            (a.arg = t),
            o
              ? ((this.method = "next"), (this.next = o.finallyLoc), b)
              : this.complete(a)
          );
        },
        complete: function (e, t) {
          if ("throw" === e.type) throw e.arg;
          return (
            "break" === e.type || "continue" === e.type
              ? (this.next = e.arg)
              : "return" === e.type
              ? ((this.rval = this.arg = e.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === e.type && t && (this.next = t),
            b
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var i = this.tryEntries[t];
            if (i.finallyLoc === e)
              return this.complete(i.completion, i.afterLoc), j(i), b;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var i = this.tryEntries[t];
            if (i.tryLoc === e) {
              var r = i.completion;
              if ("throw" === r.type) {
                var n = r.arg;
                j(i);
              }
              return n;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (t, i, r) {
          return (
            (this.delegate = { iterator: T(t), resultName: i, nextLoc: r }),
            "next" === this.method && (this.arg = e),
            b
          );
        },
      }),
      t
    );
  }
  function r(e) {
    var t = (function (e, t) {
      if ("object" != typeof e || !e) return e;
      var i = e[Symbol.toPrimitive];
      if (void 0 !== i) {
        var r = i.call(e, t || "default");
        if ("object" != typeof r) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == typeof t ? t : t + "";
  }
  function n(e) {
    return (
      (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      n(e)
    );
  }
  function o(e, t, i, r, n, o, a) {
    try {
      var s = e[o](a),
        l = s.value;
    } catch (e) {
      return void i(e);
    }
    s.done ? t(l) : Promise.resolve(l).then(r, n);
  }
  function a(e) {
    return function () {
      var t = this,
        i = arguments;
      return new Promise(function (r, n) {
        var a = e.apply(t, i);
        function s(e) {
          o(a, r, n, s, l, "next", e);
        }
        function l(e) {
          o(a, r, n, s, l, "throw", e);
        }
        s(void 0);
      });
    };
  }
  function s(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, r(n.key), n);
    }
  }
  function u(e, t, i) {
    return (
      t && l(e.prototype, t),
      i && l(e, i),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function c(e, t, i) {
    return (
      (t = r(t)) in e
        ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = i),
      e
    );
  }
  function d(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return p(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      f(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function f(e, t) {
    if (e) {
      if ("string" == typeof e) return p(e, t);
      var i = Object.prototype.toString.call(e).slice(8, -1);
      return (
        "Object" === i && e.constructor && (i = e.constructor.name),
        "Map" === i || "Set" === i
          ? Array.from(e)
          : "Arguments" === i ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
          ? p(e, t)
          : void 0
      );
    }
  }
  function p(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, r = new Array(t); i < t; i++) r[i] = e[i];
    return r;
  }
  function v(e, t) {
    var i =
      ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!i) {
      if (Array.isArray(e) || (i = f(e)) || t) {
        i && (e = i);
        var r = 0,
          n = function () {};
        return {
          s: n,
          n: function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          },
          e: function (e) {
            throw e;
          },
          f: n,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var o,
      a = !0,
      s = !1;
    return {
      s: function () {
        i = i.call(e);
      },
      n: function () {
        var e = i.next();
        return (a = e.done), e;
      },
      e: function (e) {
        (s = !0), (o = e);
      },
      f: function () {
        try {
          a || null == i.return || i.return();
        } finally {
          if (s) throw o;
        }
      },
    };
  }
  function h(e) {
    var t = this.constructor;
    return this.then(
      function (i) {
        return t.resolve(e()).then(function () {
          return i;
        });
      },
      function (i) {
        return t.resolve(e()).then(function () {
          return t.reject(i);
        });
      }
    );
  }
  function w(e) {
    return new this(function (t, i) {
      if (!e || void 0 === e.length)
        return i(
          new TypeError(
            n(e) +
              " " +
              e +
              " is not iterable(cannot read property Symbol(Symbol.iterator))"
          )
        );
      var r = Array.prototype.slice.call(e);
      if (0 === r.length) return t([]);
      var o = r.length;
      function a(e, i) {
        if (i && ("object" === n(i) || "function" == typeof i)) {
          var s = i.then;
          if ("function" == typeof s)
            return void s.call(
              i,
              function (t) {
                a(e, t);
              },
              function (i) {
                (r[e] = { status: "rejected", reason: i }), 0 == --o && t(r);
              }
            );
        }
        (r[e] = { status: "fulfilled", value: i }), 0 == --o && t(r);
      }
      for (var s = 0; s < r.length; s++) a(s, r[s]);
    });
  }
  function b(e, t) {
    (this.name = "AggregateError"), (this.errors = e), (this.message = t || "");
  }
  function m(e) {
    var t = this;
    return new t(function (i, r) {
      if (!e || void 0 === e.length)
        return r(new TypeError("Promise.any accepts an array"));
      var n = Array.prototype.slice.call(e);
      if (0 === n.length) return r();
      for (var o = [], a = 0; a < n.length; a++)
        try {
          t.resolve(n[a])
            .then(i)
            .catch(function (e) {
              o.push(e),
                o.length === n.length &&
                  r(new b(o, "All promises were rejected"));
            });
        } catch (e) {
          r(e);
        }
    });
  }
  b.prototype = Error.prototype;
  var g = setTimeout;
  function y(e) {
    return Boolean(e && void 0 !== e.length);
  }
  function _() {}
  function k(e) {
    if (!(this instanceof k))
      throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof e) throw new TypeError("not a function");
    (this._state = 0),
      (this._handled = !1),
      (this._value = void 0),
      (this._deferreds = []),
      V(e, this);
  }
  function F(e, t) {
    for (; 3 === e._state; ) e = e._value;
    0 !== e._state
      ? ((e._handled = !0),
        k._immediateFn(function () {
          var i = 1 === e._state ? t.onFulfilled : t.onRejected;
          if (null !== i) {
            var r;
            try {
              r = i(e._value);
            } catch (e) {
              return void S(t.promise, e);
            }
            x(t.promise, r);
          } else (1 === e._state ? x : S)(t.promise, e._value);
        }))
      : e._deferreds.push(t);
  }
  function x(e, t) {
    try {
      if (t === e)
        throw new TypeError("A promise cannot be resolved with itself.");
      if (t && ("object" === n(t) || "function" == typeof t)) {
        var i = t.then;
        if (t instanceof k) return (e._state = 3), (e._value = t), void B(e);
        if ("function" == typeof i)
          return void V(
            ((r = i),
            (o = t),
            function () {
              r.apply(o, arguments);
            }),
            e
          );
      }
      (e._state = 1), (e._value = t), B(e);
    } catch (t) {
      S(e, t);
    }
    var r, o;
  }
  function S(e, t) {
    (e._state = 2), (e._value = t), B(e);
  }
  function B(e) {
    2 === e._state &&
      0 === e._deferreds.length &&
      k._immediateFn(function () {
        e._handled || k._unhandledRejectionFn(e._value);
      });
    for (var t = 0, i = e._deferreds.length; t < i; t++) F(e, e._deferreds[t]);
    e._deferreds = null;
  }
  function E(e, t, i) {
    (this.onFulfilled = "function" == typeof e ? e : null),
      (this.onRejected = "function" == typeof t ? t : null),
      (this.promise = i);
  }
  function V(e, t) {
    var i = !1;
    try {
      e(
        function (e) {
          i || ((i = !0), x(t, e));
        },
        function (e) {
          i || ((i = !0), S(t, e));
        }
      );
    } catch (e) {
      if (i) return;
      (i = !0), S(t, e);
    }
  }
  (k.prototype.catch = function (e) {
    return this.then(null, e);
  }),
    (k.prototype.then = function (e, t) {
      var i = new this.constructor(_);
      return F(this, new E(e, t, i)), i;
    }),
    (k.prototype.finally = h),
    (k.all = function (e) {
      return new k(function (t, i) {
        if (!y(e)) return i(new TypeError("Promise.all accepts an array"));
        var r = Array.prototype.slice.call(e);
        if (0 === r.length) return t([]);
        var o = r.length;
        function a(e, s) {
          try {
            if (s && ("object" === n(s) || "function" == typeof s)) {
              var l = s.then;
              if ("function" == typeof l)
                return void l.call(
                  s,
                  function (t) {
                    a(e, t);
                  },
                  i
                );
            }
            (r[e] = s), 0 == --o && t(r);
          } catch (e) {
            i(e);
          }
        }
        for (var s = 0; s < r.length; s++) a(s, r[s]);
      });
    }),
    (k.any = m),
    (k.allSettled = w),
    (k.resolve = function (e) {
      return e && "object" === n(e) && e.constructor === k
        ? e
        : new k(function (t) {
            t(e);
          });
    }),
    (k.reject = function (e) {
      return new k(function (t, i) {
        i(e);
      });
    }),
    (k.race = function (e) {
      return new k(function (t, i) {
        if (!y(e)) return i(new TypeError("Promise.race accepts an array"));
        for (var r = 0, n = e.length; r < n; r++) k.resolve(e[r]).then(t, i);
      });
    }),
    (k._immediateFn =
      ("function" == typeof setImmediate &&
        function (e) {
          setImmediate(e);
        }) ||
      function (e) {
        g(e, 0);
      }),
    (k._unhandledRejectionFn = function (e) {
      "undefined" != typeof console &&
        console &&
        console.warn("Possible Unhandled Promise Rejection:", e);
    });
  var I = (function () {
    if ("undefined" != typeof self) return self;
    if ("undefined" != typeof window) return window;
    if ("undefined" != typeof global) return global;
    throw new Error("unable to locate global object");
  })();
  "function" != typeof I.Promise
    ? (I.Promise = k)
    : (I.Promise.prototype.finally || (I.Promise.prototype.finally = h),
      I.Promise.allSettled || (I.Promise.allSettled = w),
      I.Promise.any || (I.Promise.any = m));
  var j = "1.1.1",
    P = (function () {
      return u(
        function e(t) {
          s(this, e),
            c(this, "batched", []),
            c(this, "timeout", 0),
            (this.options = t);
        },
        [
          {
            key: "add",
            value: function (e) {
              this.batched.push(e), this.check();
            },
          },
          {
            key: "flush",
            value:
              ((e = a(
                i().mark(function e() {
                  var t,
                    r,
                    n,
                    o,
                    a,
                    s = arguments;
                  return i().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (this.timeout && clearTimeout(this.timeout),
                              (this.timeout = 0),
                              this.batched.length &&
                                ((t = this.batched),
                                (this.batched = []),
                                t.length))
                            ) {
                              for (
                                n = s.length, o = new Array(n), a = 0;
                                a < n;
                                a++
                              )
                                o[a] = s[a];
                              (r = this.options).run.apply(r, [t].concat(o));
                            }
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return e.apply(this, arguments);
              }),
          },
          {
            key: "check",
            value: function () {
              var e = this;
              this.batched.length >= this.options.batchSize
                ? this.flush()
                : 0 === this.timeout &&
                  (this.timeout = window.setTimeout(function () {
                    return e.flush();
                  }, this.options.batchTime));
            },
          },
        ]
      );
      var e;
    })(),
    T = (function () {
      return u(
        function e() {
          s(this, e), c(this, "current", 0), c(this, "currentTime", Date.now());
        },
        [
          {
            key: "get",
            value: function () {
              return (
                (this.current += 1),
                (this.currentTime = Date.now()),
                { sn: this.current, time: this.currentTime }
              );
            },
          },
        ]
      );
    })(),
    O = function (e) {
      var t = function (t) {
          var i,
            r =
              null == t || null === (i = t.match) || void 0 === i
                ? void 0
                : i.call(t, new RegExp("(^|&)" + e + "=([^&]*)(&|$)"));
          return null != r && r[2] ? decodeURIComponent(r[2]) : null;
        },
        i = window.location.search.slice(1),
        r = window.location.hash.split("?")[1] || "";
      if (i) {
        var n = t(i);
        if (n) return n;
      }
      if (r) {
        var o = t(r);
        if (o) return o;
      }
      return null;
    },
    M = function (e, t) {
      var i = e.indexOf("?"),
        r = [];
      for (var n in t)
        r.push(
          "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(t[n]))
        );
      var o = "".concat(i > 0 ? "&" : "?").concat(r.join("&")),
        a = e.indexOf("#");
      return a > 0 ? e.slice(0, a) + o + e.slice(a) : e + o;
    },
    C = function (e) {
      var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)"),
        i = document.cookie.match(t);
      return null != i && i[2] ? decodeURIComponent(i[2]) : null;
    },
    N = function (e, t) {
      var i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : "same-domain",
        n = new Date();
      n.setTime(n.getTime() + 1e3 * i);
      var o = i > 0 ? ";expires=" + n.toUTCString() : "";
      return (
        "same-domain" === r &&
          (r = "." + document.domain.split(".").slice(-2).join(".")),
        (document.cookie =
          e +
          "=" +
          encodeURIComponent(t) +
          o +
          (r ? ";domain=".concat(r, ";path=/") : "")),
        t
      );
    },
    A = function (e) {
      for (
        var t = document.getElementsByTagName("meta"), i = 0;
        i < t.length;
        i++
      )
        if (t[i].getAttribute("name") === e)
          return t[i].getAttribute("content");
      return null;
    },
    q = function (e) {
      for (var t = "", i = 0; i < e; i++)
        t += Math.floor(16 * Math.random())
          .toString(16)
          .toUpperCase();
      return t;
    },
    R = function (e) {
      return "object" === n(e) && !Array.isArray(e);
    },
    L = function e(t) {
      for (
        var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1;
        n < i;
        n++
      )
        r[n - 1] = arguments[n];
      if (!r.length) return t;
      var o = r.shift();
      if (R(o))
        for (var a in o)
          R(o[a]) ? (t[a] || (t[a] = {}), e(t[a], o[a])) : (t[a] = o[a]);
      return e.apply(void 0, [t].concat(r));
    },
    J = function (e, t) {
      return "boolean" == typeof t
        ? { enabled: t, value: e.value }
        : "object" === n(t) && t
        ? { enabled: !0, value: L({}, e.value, t) }
        : e;
    },
    D = function (e, t) {
      var i = {},
        r = {},
        n = function (n) {
          t.some(function (e) {
            return e === n;
          }) &&
          void 0 !== e[n] &&
          null !== e[n]
            ? (i[n] = e[n])
            : (r[n] = e[n]);
        };
      for (var o in e) n(o);
      return { selected: i, remain: r };
    },
    U = function (e) {
      var t = {};
      for (var i in e) {
        var r, o;
        if (void 0 !== e[i] && null !== e[i])
          if ("object" === n(e[i]))
            try {
              t[i] = JSON.stringify(e[i]);
            } catch (r) {
              var a, s;
              t[i] =
                (null === (a = (s = e[i]).toString) || void 0 === a
                  ? void 0
                  : a.call(s)) || "";
            }
          else
            t[i] =
              (null === (r = (o = e[i]).toString) || void 0 === r
                ? void 0
                : r.call(o)) || "";
      }
      return t;
    },
    z = function (e) {
      return e.replace(/[A-Z]/g, function (e) {
        return "_".concat(e.toLowerCase());
      });
    },
    W = function (e) {
      var t = {};
      for (var i in e) t[z(i)] = e[i];
      return t;
    },
    G = function (e) {
      var t, i;
      return null !==
        (t =
          null === (i = window.__ReporterPbGlobalState) || void 0 === i
            ? void 0
            : i[e]) && void 0 !== t
        ? t
        : null;
    },
    H = function (e, t) {
      window.__ReporterPbGlobalState || (window.__ReporterPbGlobalState = {}),
        (window.__ReporterPbGlobalState[e] = t);
    },
    Q = function () {
      var e = C("b_lsid") || "";
      if (
        (function (e) {
          var t,
            i =
              parseInt(
                (null === (t = e.split("_")) || void 0 === t ? void 0 : t[1]) ||
                  "",
                16
              ) || 0;
          if (i + 54e5 < Date.now()) return !1;
          var r = new Date(i);
          r.setHours(0, 0, 0, 0);
          var n = new Date();
          return n.setHours(0, 0, 0, 0), r.getTime() === n.getTime() && void 0;
        })(e)
      ) {
        var t = Date.now().toString(16).toUpperCase(),
          i = "".concat(q(8), "_").concat(t);
        return N("b_lsid", i, 0, "same-domain"), i;
      }
      return e;
    },
    Z = function () {
      var e,
        t,
        i = ((t = O("bsource"))
          ? (N("bsource_origin", t), { bsource: t, bsourceFrom: "url" })
          : null) ||
          (function () {
            var e = O("share_source");
            if (!e) return null;
            N("share_source_origin", e);
            var t =
              {
                WEIXIN: "share_source_weixinchat",
                WEIXIN_MONMENT: "share_source_weixin_moments",
                WEIXIN_MONMENTS: "share_source_weixin_moments",
                QQ: "share_source_qqchat",
                QZONE: "share_source_qzone",
                QQZONE: "share_source_qzone",
                SINA: "share_source_weibo",
                WEIBO: "share_source_weibo",
                COPY: "share_source_copy_link",
                COPY_LINK: "share_source_copy_link",
                GENERIC: "share_source_more",
                MORE: "share_source_more",
                WEIBO_WEB: "share_source_weibo_web",
                QQ_WEB: "share_source_qqchat_web",
                QZONE_WEB: "share_source_qzone_web",
                TIEBA_WEB: "share_source_tieba_web",
                COPY_WEB: "share_source_copylink_web",
                WEIXIN_WEB: "share_source_weixinchat_web",
                ONPHONE_WEB: "share_source_onphone_web",
              }[e.toUpperCase()] || "";
            return t ? { bsource: t, bsourceFrom: "share" } : null;
          })() ||
          (function () {
            var e = document.referrer,
              t = {
                search_360:
                  /(.)*((baike.so.com)|(m.image.so.com)|(m.so.com)|(m.video.so.com)|(www.so.com))/,
                search_baidu: /(.)*\.baidu.com/,
                search_google: /(.)*\.google.com/,
                search_sm: /(.)*\.sm.cn/,
                search_sougo: /(.)*((m.soso.com)|(www.soso.com)|(\.sogou.com))/,
                search_bing: /(.)*\.bing.com/,
                search_yahoo: /(.)*\.yahoo.com/,
              };
            for (var i in t)
              if (t[i].test(e)) return { bsource: i, bsourceFrom: "refer" };
            return null;
          })() ||
          ((e = C("bsource")) ? { bsource: e, bsourceFrom: "cookie" } : null) ||
          (function () {
            var e = {
                baiduspider: /Baiduspider/,
                qqlive: /QQLive/i,
                qq: /QQ\/([\d\.]+)/i,
                qqbrowser_app: /MQQBrowser/i,
                weibo: /Weibo/i,
                wechat: /MicroMessenger/i,
                bdbox: /baiduboxapp/i,
                iqiyi_video_app: /iqiyi/i,
                uc_browser_app: /UCBrowser/i,
                xiaomiqjs: /MiuiQuickSearchBox/,
                zhihu: /ZhihuHybrid/i,
              },
              t = navigator.userAgent;
            for (var i in e)
              if (e[i].test(t)) return { bsource: i, bsourceFrom: "ua" };
            return null;
          })() || { bsource: "", bsourceFrom: "" };
      return i.bsource && N("bsource", i.bsource), i;
    },
    X = function () {
      var e = parseInt(A("spm_ptype") || "") || 0;
      if (e) return e;
      var t = navigator.userAgent.toLowerCase(),
        i = !!t.match(/ipad/i),
        r = !!t.match(/iphone os/i),
        n = !!t.match(/midp/i),
        o = !!t.match(/rv:1.2.3.4/i),
        a = !!t.match(/ucweb/i),
        s = !!t.match(/android/i),
        l = !!t.match(/windows ce/i),
        u = !!t.match(/windows mobile/i);
      return i || r || n || o || a || s || l || u ? 2 : 1;
    },
    $ =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
    Y = { exports: {} };
  !(function (e, t) {
    !(function (i, r) {
      var o = "function",
        a = "undefined",
        s = "object",
        l = "string",
        u = "major",
        c = "model",
        d = "name",
        f = "type",
        p = "vendor",
        v = "version",
        h = "architecture",
        w = "console",
        b = "mobile",
        m = "tablet",
        g = "smarttv",
        y = "wearable",
        _ = "embedded",
        k = "Amazon",
        F = "Apple",
        x = "ASUS",
        S = "BlackBerry",
        B = "Browser",
        E = "Chrome",
        V = "Firefox",
        I = "Google",
        j = "Huawei",
        P = "LG",
        T = "Microsoft",
        O = "Motorola",
        M = "Opera",
        C = "Samsung",
        N = "Sharp",
        A = "Sony",
        q = "Xiaomi",
        R = "Zebra",
        L = "Facebook",
        J = "Chromium OS",
        D = "Mac OS",
        U = " Browser",
        z = function (e) {
          for (var t = {}, i = 0; i < e.length; i++)
            t[e[i].toUpperCase()] = e[i];
          return t;
        },
        W = function (e, t) {
          return n(e) === l && -1 !== G(t).indexOf(G(e));
        },
        G = function (e) {
          return e.toLowerCase();
        },
        H = function (e, t) {
          if (n(e) === l)
            return (
              (e = e.replace(/^\s\s*/, "")),
              n(t) === a ? e : e.substring(0, 500)
            );
        },
        Q = function (e, t) {
          for (var i, a, l, u, c, d, f = 0; f < t.length && !c; ) {
            var p = t[f],
              v = t[f + 1];
            for (i = a = 0; i < p.length && !c && p[i]; )
              if ((c = p[i++].exec(e)))
                for (l = 0; l < v.length; l++)
                  (d = c[++a]),
                    n((u = v[l])) === s && u.length > 0
                      ? 2 === u.length
                        ? n(u[1]) == o
                          ? (this[u[0]] = u[1].call(this, d))
                          : (this[u[0]] = u[1])
                        : 3 === u.length
                        ? n(u[1]) !== o || (u[1].exec && u[1].test)
                          ? (this[u[0]] = d ? d.replace(u[1], u[2]) : r)
                          : (this[u[0]] = d ? u[1].call(this, d, u[2]) : r)
                        : 4 === u.length &&
                          (this[u[0]] = d
                            ? u[3].call(this, d.replace(u[1], u[2]))
                            : r)
                      : (this[u] = d || r);
            f += 2;
          }
        },
        Z = function (e, t) {
          for (var i in t)
            if (n(t[i]) === s && t[i].length > 0) {
              for (var o = 0; o < t[i].length; o++)
                if (W(t[i][o], e)) return "?" === i ? r : i;
            } else if (W(t[i], e)) return "?" === i ? r : i;
          return t.hasOwnProperty("*") ? t["*"] : e;
        },
        X = {
          ME: "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          2e3: "NT 5.0",
          XP: ["NT 5.1", "NT 5.2"],
          Vista: "NT 6.0",
          7: "NT 6.1",
          8: "NT 6.2",
          8.1: "NT 6.3",
          10: ["NT 6.4", "NT 10.0"],
          RT: "ARM",
        },
        $ = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [v, [d, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [v, [d, "Edge"]],
            [
              /(opera mini)\/([-\w\.]+)/i,
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [d, v],
            [/opios[\/ ]+([\w\.]+)/i],
            [v, [d, M + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [v, [d, M + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [v, [d, M]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [v, [d, "Baidu"]],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
              /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
              /(?:ms|\()(ie) ([\w\.]+)/i,
              /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i,
              /(heytap|ovi)browser\/([\d\.]+)/i,
              /(weibo)__([\d\.]+)/i,
            ],
            [d, v],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [v, [d, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [v, [d, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [v, [d, "UC" + B]],
            [
              /microm.+\bqbcore\/([\w\.]+)/i,
              /\bqbcore\/([\w\.]+).+microm/i,
              /micromessenger\/([\w\.]+)/i,
            ],
            [v, [d, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [v, [d, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [v, [d, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [v, [d, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [v, [d, "Smart Lenovo " + B]],
            [/(avast|avg)\/([\w\.]+)/i],
            [[d, /(.+)/, "$1 Secure " + B], v],
            [/\bfocus\/([\w\.]+)/i],
            [v, [d, V + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [v, [d, M + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [v, [d, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [v, [d, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [v, [d, M + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [v, [d, "MIUI " + B]],
            [/fxios\/([-\w\.]+)/i],
            [v, [d, V]],
            [/\bqihu|(qi?ho?o?|360)browser/i],
            [[d, "360" + U]],
            [/\b(qq)\/([\w\.]+)/i],
            [[d, /(.+)/, "$1Browser"], v],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [[d, /(.+)/, "$1" + U], v],
            [/samsungbrowser\/([\w\.]+)/i],
            [v, [d, C + " Internet"]],
            [/(comodo_dragon)\/([\w\.]+)/i],
            [[d, /_/g, " "], v],
            [/metasr[\/ ]?([\d\.]+)/i],
            [v, [d, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [[d, "Sogou Mobile"], v],
            [
              /(electron)\/([\w\.]+) safari/i,
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
            ],
            [d, v],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [d],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[d, L], v],
            [
              /(Klarna)\/([\w\.]+)/i,
              /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
              /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
              /safari (line)\/([\w\.]+)/i,
              /\b(line)\/([\w\.]+)\/iab/i,
              /(alipay)client\/([\w\.]+)/i,
              /(twitter)(?:and| f.+e\/([\w\.]+))/i,
              /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
            ],
            [d, v],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [v, [d, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [v, [d, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [v, [d, E + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[d, E + " WebView"], v],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [v, [d, "Android " + B]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [d, v],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [v, [d, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [v, d],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [
              d,
              [
                v,
                Z,
                {
                  "1.0": "/8",
                  1.2: "/1",
                  1.3: "/3",
                  "2.0": "/412",
                  "2.0.2": "/416",
                  "2.0.3": "/417",
                  "2.0.4": "/419",
                  "?": "/",
                },
              ],
            ],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [d, v],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[d, "Netscape"], v],
            [/(wolvic)\/([\w\.]+)/i],
            [d, v],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [v, [d, V + " Reality"]],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
              /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
              /(firefox)\/([\w\.]+)/i,
              /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
              /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
              /(links) \(([\w\.]+)/i,
            ],
            [d, [v, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [d, [v, /master.|lts./, ""]],
          ],
          cpu: [
            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
            [[h, "amd64"]],
            [/(ia32(?=;))/i],
            [[h, G]],
            [/((?:i[346]|x)86)[;\)]/i],
            [[h, "ia32"]],
            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
            [[h, "arm64"]],
            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
            [[h, "armhf"]],
            [/windows (ce|mobile); ppc;/i],
            [[h, "arm"]],
            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
            [[h, /ower/, "", G]],
            [/(sun4\w)[;\)]/i],
            [[h, "sparc"]],
            [
              /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
            ],
            [[h, G]],
          ],
          device: [
            [
              /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
            ],
            [c, [p, C], [f, m]],
            [
              /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
              /samsung[- ]((?!sm-[lr])[-\w]+)/i,
              /sec-(sgh\w+)/i,
            ],
            [c, [p, C], [f, b]],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [c, [p, F], [f, b]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
            ],
            [c, [p, F], [f, m]],
            [/(macintosh);/i],
            [c, [p, F]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [c, [p, N], [f, b]],
            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
            [c, [p, j], [f, m]],
            [
              /(?:huawei|honor)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
            ],
            [c, [p, j], [f, b]],
            [
              /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
              /\b; (\w+) build\/hm\1/i,
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
              /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
            ],
            [
              [c, /_/g, " "],
              [p, q],
              [f, b],
            ],
            [
              /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
              /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
            ],
            [
              [c, /_/g, " "],
              [p, q],
              [f, m],
            ],
            [
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
            ],
            [c, [p, "OPPO"], [f, b]],
            [/\b(opd2\d{3}a?) bui/i],
            [c, [p, "OPPO"], [f, m]],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [c, [p, "Vivo"], [f, b]],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [c, [p, "Realme"], [f, b]],
            [
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
            ],
            [c, [p, O], [f, b]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [c, [p, O], [f, m]],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [c, [p, P], [f, m]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
              /\blg-?([\d\w]+) bui/i,
            ],
            [c, [p, P], [f, b]],
            [
              /(ideatab[-\w ]+)/i,
              /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
            ],
            [c, [p, "Lenovo"], [f, m]],
            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
            [
              [c, /_/g, " "],
              [p, "Nokia"],
              [f, b],
            ],
            [/(pixel c)\b/i],
            [c, [p, I], [f, m]],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [c, [p, I], [f, b]],
            [
              /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
            ],
            [c, [p, A], [f, b]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [c, "Xperia Tablet"],
              [p, A],
              [f, m],
            ],
            [
              / (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [c, [p, "OnePlus"], [f, b]],
            [
              /(alexa)webm/i,
              /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
              /(kf[a-z]+)( bui|\)).+silk\//i,
            ],
            [c, [p, k], [f, m]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [c, /(.+)/g, "Fire Phone $1"],
              [p, k],
              [f, b],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [c, p, [f, m]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [c, [p, S], [f, b]],
            [
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
            ],
            [c, [p, x], [f, m]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [c, [p, x], [f, b]],
            [/(nexus 9)/i],
            [c, [p, "HTC"], [f, m]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [p, [c, /_/g, " "], [f, b]],
            [
              /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
            ],
            [c, [p, "TCL"], [f, m]],
            [/(itel) ((\w+))/i],
            [
              [p, G],
              c,
              [f, Z, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [c, [p, "Acer"], [f, m]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [c, [p, "Meizu"], [f, b]],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [c, [p, "Ulefone"], [f, b]],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [c, [p, "Nothing"], [f, b]],
            [
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
              /(hp) ([\w ]+\w)/i,
              /(asus)-?(\w+)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(lenovo)[-_ ]?([-\w]+)/i,
              /(jolla)/i,
              /(oppo) ?([\w ]+) bui/i,
            ],
            [p, c, [f, b]],
            [
              /(kobo)\s(ereader|touch)/i,
              /(archos) (gamepad2?)/i,
              /(hp).+(touchpad(?!.+tablet)|tablet)/i,
              /(kindle)\/([\w\.]+)/i,
              /(nook)[\w ]+build\/(\w+)/i,
              /(dell) (strea[kpr\d ]*[\dko])/i,
              /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
              /(trinity)[- ]*(t\d{3}) bui/i,
              /(gigaset)[- ]+(q\w{1,9}) bui/i,
              /(vodafone) ([\w ]+)(?:\)| bui)/i,
            ],
            [p, c, [f, m]],
            [/(surface duo)/i],
            [c, [p, T], [f, m]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [c, [p, "Fairphone"], [f, b]],
            [/(u304aa)/i],
            [c, [p, "AT&T"], [f, b]],
            [/\bsie-(\w*)/i],
            [c, [p, "Siemens"], [f, b]],
            [/\b(rct\w+) b/i],
            [c, [p, "RCA"], [f, m]],
            [/\b(venue[\d ]{2,7}) b/i],
            [c, [p, "Dell"], [f, m]],
            [/\b(q(?:mv|ta)\w+) b/i],
            [c, [p, "Verizon"], [f, m]],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [c, [p, "Barnes & Noble"], [f, m]],
            [/\b(tm\d{3}\w+) b/i],
            [c, [p, "NuVision"], [f, m]],
            [/\b(k88) b/i],
            [c, [p, "ZTE"], [f, m]],
            [/\b(nx\d{3}j) b/i],
            [c, [p, "ZTE"], [f, b]],
            [/\b(gen\d{3}) b.+49h/i],
            [c, [p, "Swiss"], [f, b]],
            [/\b(zur\d{3}) b/i],
            [c, [p, "Swiss"], [f, m]],
            [/\b((zeki)?tb.*\b) b/i],
            [c, [p, "Zeki"], [f, m]],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [[p, "Dragon Touch"], c, [f, m]],
            [/\b(ns-?\w{0,9}) b/i],
            [c, [p, "Insignia"], [f, m]],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [c, [p, "NextBook"], [f, m]],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [[p, "Voice"], c, [f, b]],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [[p, "LvTel"], c, [f, b]],
            [/\b(ph-1) /i],
            [c, [p, "Essential"], [f, b]],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [c, [p, "Envizen"], [f, m]],
            [/\b(trio[-\w\. ]+) b/i],
            [c, [p, "MachSpeed"], [f, m]],
            [/\btu_(1491) b/i],
            [c, [p, "Rotor"], [f, m]],
            [/(shield[\w ]+) b/i],
            [c, [p, "Nvidia"], [f, m]],
            [/(sprint) (\w+)/i],
            [p, c, [f, b]],
            [/(kin\.[onetw]{3})/i],
            [
              [c, /\./g, " "],
              [p, T],
              [f, b],
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [c, [p, R], [f, m]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [c, [p, R], [f, b]],
            [/smart-tv.+(samsung)/i],
            [p, [f, g]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [c, /^/, "SmartTV"],
              [p, C],
              [f, g],
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [p, P],
              [f, g],
            ],
            [/(apple) ?tv/i],
            [p, [c, F + " TV"], [f, g]],
            [/crkey/i],
            [
              [c, E + "cast"],
              [p, I],
              [f, g],
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [c, [p, k], [f, g]],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [c, [p, N], [f, g]],
            [/(bravia[\w ]+)( bui|\))/i],
            [c, [p, A], [f, g]],
            [/(mitv-\w{5}) bui/i],
            [c, [p, q], [f, g]],
            [/Hbbtv.*(technisat) (.*);/i],
            [p, c, [f, g]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
            ],
            [
              [p, H],
              [c, H],
              [f, g],
            ],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [[f, g]],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [p, c, [f, w]],
            [/droid.+; (shield) bui/i],
            [c, [p, "Nvidia"], [f, w]],
            [/(playstation [345portablevi]+)/i],
            [c, [p, A], [f, w]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [c, [p, T], [f, w]],
            [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
            [c, [p, C], [f, y]],
            [/((pebble))app/i],
            [p, c, [f, y]],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [c, [p, F], [f, y]],
            [/droid.+; (glass) \d/i],
            [c, [p, I], [f, y]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [c, [p, R], [f, y]],
            [/(quest( \d| pro)?)/i],
            [c, [p, L], [f, y]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [p, [f, _]],
            [/(aeobc)\b/i],
            [c, [p, k], [f, _]],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [c, [f, b]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [c, [f, m]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[f, m]],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [[f, b]],
            [/(android[-\w\. ]{0,9});.+buil/i],
            [c, [p, "Generic"]],
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [v, [d, "EdgeHTML"]],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [v, [d, "Blink"]],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
              /ekioh(flow)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
              /(icab)[\/ ]([23]\.[\d\.]+)/i,
              /\b(libweb)/i,
            ],
            [d, v],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [v, d],
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [d, v],
            [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
            [d, [v, Z, X]],
            [
              /windows nt 6\.2; (arm)/i,
              /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
            ],
            [
              [v, Z, X],
              [d, "Windows"],
            ],
            [
              /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
              /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
              /cfnetwork\/.+darwin/i,
            ],
            [
              [v, /_/g, "."],
              [d, "iOS"],
            ],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
            ],
            [
              [d, D],
              [v, /_/g, "."],
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [v, d],
            [
              /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
              /(blackberry)\w*\/([\w\.]*)/i,
              /(tizen|kaios)[\/ ]([\w\.]+)/i,
              /\((series40);/i,
            ],
            [d, v],
            [/\(bb(10);/i],
            [v, [d, S]],
            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
            [v, [d, "Symbian"]],
            [
              /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
            ],
            [v, [d, V + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [v, [d, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [v, [d, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [v, [d, E + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [[d, J], v],
            [
              /panasonic;(viera)/i,
              /(netrange)mmh/i,
              /(nettv)\/(\d+\.[\w\.]+)/i,
              /(nintendo|playstation) ([wids345portablevuch]+)/i,
              /(xbox); +xbox ([^\);]+)/i,
              /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
              /(mint)[\/\(\) ]?(\w*)/i,
              /(mageia|vectorlinux)[; ]/i,
              /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
              /(hurd|linux) ?([\w\.]*)/i,
              /(gnu) ?([\w\.]*)/i,
              /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
              /(haiku) (\w+)/i,
            ],
            [d, v],
            [/(sunos) ?([\w\.\d]*)/i],
            [[d, "Solaris"], v],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
              /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
              /(unix) ?([\w\.]*)/i,
            ],
            [d, v],
          ],
        },
        Y = function e(t, w) {
          if ((n(t) === s && ((w = t), (t = r)), !(this instanceof e)))
            return new e(t, w).getResult();
          var g = n(i) !== a && i.navigator ? i.navigator : r,
            y = t || (g && g.userAgent ? g.userAgent : ""),
            _ = g && g.userAgentData ? g.userAgentData : r,
            k = w
              ? (function (e, t) {
                  var i = {};
                  for (var r in e)
                    t[r] && t[r].length % 2 == 0
                      ? (i[r] = t[r].concat(e[r]))
                      : (i[r] = e[r]);
                  return i;
                })($, w)
              : $,
            F = g && g.userAgent == y;
          return (
            (this.getBrowser = function () {
              var e,
                t = {};
              return (
                (t[d] = r),
                (t[v] = r),
                Q.call(t, y, k.browser),
                (t[u] =
                  n((e = t[v])) === l
                    ? e.replace(/[^\d\.]/g, "").split(".")[0]
                    : r),
                F &&
                  g &&
                  g.brave &&
                  n(g.brave.isBrave) == o &&
                  (t[d] = "Brave"),
                t
              );
            }),
            (this.getCPU = function () {
              var e = {};
              return (e[h] = r), Q.call(e, y, k.cpu), e;
            }),
            (this.getDevice = function () {
              var e = {};
              return (
                (e[p] = r),
                (e[c] = r),
                (e[f] = r),
                Q.call(e, y, k.device),
                F && !e[f] && _ && _.mobile && (e[f] = b),
                F &&
                  "Macintosh" == e[c] &&
                  g &&
                  n(g.standalone) !== a &&
                  g.maxTouchPoints &&
                  g.maxTouchPoints > 2 &&
                  ((e[c] = "iPad"), (e[f] = m)),
                e
              );
            }),
            (this.getEngine = function () {
              var e = {};
              return (e[d] = r), (e[v] = r), Q.call(e, y, k.engine), e;
            }),
            (this.getOS = function () {
              var e = {};
              return (
                (e[d] = r),
                (e[v] = r),
                Q.call(e, y, k.os),
                F &&
                  !e[d] &&
                  _ &&
                  _.platform &&
                  "Unknown" != _.platform &&
                  (e[d] = _.platform
                    .replace(/chrome os/i, J)
                    .replace(/macos/i, D)),
                e
              );
            }),
            (this.getResult = function () {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU(),
              };
            }),
            (this.getUA = function () {
              return y;
            }),
            (this.setUA = function (e) {
              return (y = n(e) === l && e.length > 500 ? H(e, 500) : e), this;
            }),
            this.setUA(y),
            this
          );
        };
      (Y.VERSION = "1.0.39"),
        (Y.BROWSER = z([d, v, u])),
        (Y.CPU = z([h])),
        (Y.DEVICE = z([c, p, f, w, b, g, m, y, _])),
        (Y.ENGINE = Y.OS = z([d, v])),
        e.exports && (t = e.exports = Y),
        (t.UAParser = Y);
      var K = n(i) !== a && (i.jQuery || i.Zepto);
      if (K && !K.ua) {
        var ee = new Y();
        (K.ua = ee.getResult()),
          (K.ua.get = function () {
            return ee.getUA();
          }),
          (K.ua.set = function (e) {
            ee.setUA(e);
            var t = ee.getResult();
            for (var i in t) K.ua[i] = t[i];
          });
      }
    })(
      "object" === ("undefined" == typeof window ? "undefined" : n(window))
        ? window
        : $
    );
  })(Y, Y.exports);
  var K = Y.exports,
    ee = null,
    te = function () {
      return ee || (ee = new K.UAParser());
    },
    ie = function () {
      var e,
        t = te().getDevice().type;
      if (!t) return "pc";
      return null !==
        (e = {
          mobile: "phone",
          tablet: "pad",
          smarttv: "tv",
          embedded: "embedded",
          wearable: "ware",
          console: "console",
        }[t]) && void 0 !== e
        ? e
        : "pc";
    },
    re = function () {
      var e,
        t,
        i = te(),
        r = i.getDevice(),
        n = i.getOS(),
        o = n.name
          ? "".concat(n.name).concat(n.version ? " " + n.version : "")
          : "",
        a = navigator.userAgent;
      !o &&
        /OpenHarmony/.test(a) &&
        (o =
          null !==
            (e =
              null === (t = a.match(/(OpenHarmony ?[\d.]*)/)) || void 0 === t
                ? void 0
                : t[1]) && void 0 !== e
            ? e
            : "");
      return { brand: r.vendor || "", model: r.model || "", system: o };
    },
    ne = function (e) {
      var t, i;
      return {
        app_id:
          null !== (t = null == e ? void 0 : e.appId) && void 0 !== t ? t : 100,
        platform: (
          null !== (i = null == e ? void 0 : e.platform) && void 0 !== i
            ? i
            : /AppleWebKit.*Mobile.*/i.test(navigator.userAgent)
        )
          ? 6
          : 5,
        cbuvid: C("buvid3") || "",
        cmid: parseInt(C("DedeUserID") || "0"),
        fts: C("b_nut") || "",
        screen_resolution: ""
          .concat(window.screen.width, "*")
          .concat(window.screen.height),
        timezone: new Date().getTimezoneOffset().toString(),
        bilifp: C("buvid_fp") || "",
        device_type: ie(),
      };
    },
    oe = function (e) {
      var t, i, r, n;
      return {
        network_info:
          null !==
            (t =
              null !== (i = null == e ? void 0 : e.networkInfo) && void 0 !== i
                ? i
                : null === (r = navigator.connection) || void 0 === r
                ? void 0
                : r.effectiveType) && void 0 !== t
            ? t
            : "4g",
        url: window.location.href,
        refer_url: document.referrer,
        logver: j,
        abtest: JSON.stringify(
          null !== (n = window.abtest) && void 0 !== n ? n : {}
        ),
        ptype: X(),
        window_size: ""
          .concat(window.innerWidth, "*")
          .concat(window.innerHeight),
        bsource: Z().bsource,
        bsource_origin: O("bsource") || "",
        share_source_origin: O("share_source") || "",
        share_session_id: O("unique_k") || "",
        session_id: Q(),
      };
    },
    ae = function () {
      var e,
        t,
        i,
        r,
        n,
        o =
          null === (e = window.performance) ||
          void 0 === e ||
          null === (t = e.getEntriesByType) ||
          void 0 === t ||
          null === (t = t.call(e, "navigation")) ||
          void 0 === t
            ? void 0
            : t[0];
      if (o) {
        var a;
        return null !==
          (a = { navigate: 0, reload: 1, back_forward: 2, prerender: 3 }[
            o.type
          ]) && void 0 !== a
          ? a
          : 0;
      }
      return null !== (i = window.performance) &&
        void 0 !== i &&
        i.navigation &&
        null !==
          (r =
            null === (n = window.performance) ||
            void 0 === n ||
            null === (n = n.navigation) ||
            void 0 === n
              ? void 0
              : n.type) &&
        void 0 !== r
        ? r
        : 0;
    },
    se = { enabled: !0, value: { batchSize: 32, batchTime: 1e3 } },
    le = {
      enabled: !0,
      value: { maxCount: 5, retryInterval: 3e3, maxInterval: 6e4 },
    },
    ue = function (e) {
      var t = e.url,
        i = e.method,
        r = e.body,
        n = e.headers,
        o = e.credentials,
        a = new XMLHttpRequest();
      return new Promise(function (e, s) {
        if (
          (a.open(i.toUpperCase(), t),
          (o && "omit" === o) || (a.withCredentials = !0),
          (a.responseType = "text"),
          n)
        )
          for (var l in n) a.setRequestHeader(l, n[l]);
        (a.onreadystatechange = function () {
          if (a.readyState === XMLHttpRequest.DONE) {
            var t = a.status;
            if (t >= 200 && t < 300) {
              var i = null == a ? void 0 : a.responseText;
              e(i || "");
            } else s({ code: t });
          }
        }),
          (a.onerror = function (e) {
            return s(e);
          }),
          (a.ontimeout = function () {
            return s("timeout");
          }),
          a.send(r);
      });
    },
    ce = (function () {
      var e = a(
        i().mark(function e(t) {
          var r, n, o, a, s, l, u;
          return i().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (r = t.url),
                    (n = t.method),
                    (o = t.body),
                    (a = t.headers),
                    (s = t.credentials),
                    (l = t.keepalive),
                    (e.next = 3),
                    fetch(r, {
                      method: n,
                      headers: a,
                      body: o,
                      credentials: null != s ? s : "include",
                      priority: "high",
                      keepalive: null == l || l,
                    })
                  );
                case 3:
                  if (!((u = e.sent).status < 200 && u.status >= 300)) {
                    e.next = 6;
                    break;
                  }
                  throw new Error(
                    "".concat(u.status, " ").concat(u.statusText)
                  );
                case 6:
                  return e.abrupt("return", u.text());
                case 7:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function (t) {
        return e.apply(this, arguments);
      };
    })(),
    de = (function () {
      var e = a(
        i().mark(function e(t) {
          var r;
          return i().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (r = "function" == typeof window.fetch ? ce : ue),
                    e.abrupt("return", r(t))
                  );
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function (t) {
        return e.apply(this, arguments);
      };
    })(),
    fe = "function" == typeof window.fetch,
    pe = fe && window.Request && "keepalive" in Request.prototype,
    ve = "function" == typeof navigator.sendBeacon,
    he = (function () {
      var e = a(
        i().mark(function e(r, n) {
          var o, a, s, l, u, c, d, f, p, v, h, w, b;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a =
                        null !== (o = null == n ? void 0 : n.url) &&
                        void 0 !== o
                          ? o
                          : "//data.bilibili.com/v2/log/web"),
                      (a = M(a, {
                        content_type: "pbrequest",
                        logid: n.logId,
                        disable_compression: "true",
                      })),
                      (s = {
                        url: a,
                        method: "post",
                        body: r,
                        headers: { "Content-Type": "text/plain" },
                      }),
                      (l = r.length >= 65536),
                      (u = l
                        ? function () {
                            return fe
                              ? ce(t(t({}, s), {}, { keepalive: !1 }))
                              : ue(s);
                          }
                        : pe
                        ? function () {
                            return ce(s);
                          }
                        : ve
                        ? function () {
                            if (
                              !navigator.sendBeacon(
                                a,
                                new Blob([r], { type: "text/plain" })
                              )
                            )
                              return fe
                                ? ce(t(t({}, s), {}, { keepalive: !1 }))
                                : ue(s);
                          }
                        : function () {
                            return ue(s);
                          }),
                      (e.prev = 5),
                      (e.next = 8),
                      u()
                    );
                  case 8:
                    return e.abrupt("return", e.sent);
                  case 11:
                    if (
                      ((e.prev = 11),
                      (e.t0 = e.catch(5)),
                      !(c = J(le, null == n ? void 0 : n.retry)).enabled)
                    ) {
                      e.next = 28;
                      break;
                    }
                    (d = c.value),
                      (f = d.retryInterval),
                      (p = d.maxInterval),
                      (v = d.maxCount),
                      (h = 1),
                      (w = i().mark(function e() {
                        var t, r;
                        return i().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t = Math.random() * f),
                                    (r =
                                      Math.min(1e3 * Math.pow(f / 1e3, h), p) +
                                      t),
                                    (e.next = 4),
                                    new Promise(function (e) {
                                      return setTimeout(e, r);
                                    })
                                  );
                                case 4:
                                  return (e.prev = 4), (e.next = 7), u();
                                case 7:
                                  return (
                                    (e.t0 = e.sent),
                                    e.abrupt("return", { v: e.t0 })
                                  );
                                case 11:
                                  (e.prev = 11), (e.t1 = e.catch(4)), (h += 1);
                                case 14:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[4, 11]]
                        );
                      }));
                  case 18:
                    if (!(h <= v)) {
                      e.next = 25;
                      break;
                    }
                    return e.delegateYield(w(), "t1", 20);
                  case 20:
                    if (!(b = e.t1)) {
                      e.next = 23;
                      break;
                    }
                    return e.abrupt("return", b.v);
                  case 23:
                    e.next = 18;
                    break;
                  case 25:
                    console.error(
                      "[reporter-pb]: max retries exceeded",
                      e.t0,
                      s.body
                    ),
                      (e.next = 29);
                    break;
                  case 28:
                    console.error("[reporter-pb]: request error", e.t0, s.body);
                  case 29:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[5, 11]]
          );
        })
      );
      return function (t, i) {
        return e.apply(this, arguments);
      };
    })(),
    we = function (e) {
      return /^\w{8,}-\w{4,}-\w{4,}-\w{4,}/.test(e);
    },
    be = function (e) {
      return /^\w{8,}-\w{4,}-\w{4,}-\w{4,}-\w{17,}infoc$/.test(e);
    },
    me = function () {
      var e = C("buvid3") || "",
        t = C("buvid4") || "";
      return be(e) && we(t);
    },
    ge = (function () {
      var e = a(
        i().mark(function e() {
          var t, r, n, o, a;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!me()) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    return (
                      (n = null),
                      (e.prev = 3),
                      (e.t0 = JSON),
                      (e.next = 7),
                      de({
                        url: "https://api.bilibili.com/x/frontend/finger/spi",
                        method: "get",
                      })
                    );
                  case 7:
                    (e.t1 = e.sent),
                      (n = e.t0.parse.call(e.t0, e.t1)),
                      (e.next = 14);
                    break;
                  case 11:
                    (e.prev = 11),
                      (e.t2 = e.catch(3)),
                      console.error("[reporter-pb]: init buvid error ", e.t2);
                  case 14:
                    if (!me()) {
                      e.next = 16;
                      break;
                    }
                    return e.abrupt("return");
                  case 16:
                    (o = we(
                      (null === (t = n) ||
                      void 0 === t ||
                      null === (t = t.data) ||
                      void 0 === t
                        ? void 0
                        : t.b_3) || ""
                    )
                      ? n.data.b_3
                      : ((i = void 0),
                        (s = void 0),
                        (i = q),
                        (s = ("00000" + (Date.now() % 1e5).toString()).slice(
                          -5
                        )),
                        ""
                          .concat(i(8), "-")
                          .concat(i(4), "-")
                          .concat(i(4), "-")
                          .concat(i(4), "-")
                          .concat(i(12))
                          .concat(s, "infoc"))),
                      be(C("buvid3") || "") ||
                        (N("buvid3", o, 94608e3, "same-domain"),
                        N(
                          "b_nut",
                          Math.floor(Date.now() / 1e3).toString(),
                          94608e3,
                          "same-domain"
                        )),
                      (a =
                        (null === (r = n) ||
                        void 0 === r ||
                        null === (r = r.data) ||
                        void 0 === r
                          ? void 0
                          : r.b_4) || ""),
                      !we(C("buvid4") || "") &&
                        we(a) &&
                        N("buvid4", a, 94608e3, "same-domain");
                  case 20:
                  case "end":
                    return e.stop();
                }
              var i, s;
            },
            e,
            null,
            [[3, 11]]
          );
        })
      );
      return function () {
        return e.apply(this, arguments);
      };
    })(),
    ye = 4294967296,
    _e = 1 / ye,
    ke = "undefined" == typeof TextDecoder ? null : new TextDecoder("utf-8"),
    Fe = (function () {
      return u(
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : new Uint8Array(16);
          s(this, e),
            (this.buf = ArrayBuffer.isView(t) ? t : new Uint8Array(t)),
            (this.dataView = new DataView(this.buf.buffer)),
            (this.pos = 0),
            (this.type = 0),
            (this.length = this.buf.length);
        },
        [
          {
            key: "readFields",
            value: function (e, t) {
              for (
                var i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : this.length;
                this.pos < i;

              ) {
                var r = this.readVarint(),
                  n = r >> 3,
                  o = this.pos;
                (this.type = 7 & r),
                  e(n, t, this),
                  this.pos === o && this.skip(r);
              }
              return t;
            },
          },
          {
            key: "readMessage",
            value: function (e, t) {
              return this.readFields(e, t, this.readVarint() + this.pos);
            },
          },
          {
            key: "readFixed32",
            value: function () {
              var e = this.dataView.getUint32(this.pos, !0);
              return (this.pos += 4), e;
            },
          },
          {
            key: "readSFixed32",
            value: function () {
              var e = this.dataView.getInt32(this.pos, !0);
              return (this.pos += 4), e;
            },
          },
          {
            key: "readFixed64",
            value: function () {
              var e =
                this.dataView.getUint32(this.pos, !0) +
                this.dataView.getUint32(this.pos + 4, !0) * ye;
              return (this.pos += 8), e;
            },
          },
          {
            key: "readSFixed64",
            value: function () {
              var e =
                this.dataView.getUint32(this.pos, !0) +
                this.dataView.getInt32(this.pos + 4, !0) * ye;
              return (this.pos += 8), e;
            },
          },
          {
            key: "readFloat",
            value: function () {
              var e = this.dataView.getFloat32(this.pos, !0);
              return (this.pos += 4), e;
            },
          },
          {
            key: "readDouble",
            value: function () {
              var e = this.dataView.getFloat64(this.pos, !0);
              return (this.pos += 8), e;
            },
          },
          {
            key: "readVarint",
            value: function (e) {
              var t,
                i,
                r = this.buf;
              return (
                (t = 127 & (i = r[this.pos++])),
                i < 128
                  ? t
                  : ((t |= (127 & (i = r[this.pos++])) << 7),
                    i < 128
                      ? t
                      : ((t |= (127 & (i = r[this.pos++])) << 14),
                        i < 128
                          ? t
                          : ((t |= (127 & (i = r[this.pos++])) << 21),
                            i < 128
                              ? t
                              : (function (e, t, i) {
                                  var r,
                                    n,
                                    o = i.buf;
                                  if (
                                    ((n = o[i.pos++]),
                                    (r = (112 & n) >> 4),
                                    n < 128)
                                  )
                                    return xe(e, r, t);
                                  if (
                                    ((n = o[i.pos++]),
                                    (r |= (127 & n) << 3),
                                    n < 128)
                                  )
                                    return xe(e, r, t);
                                  if (
                                    ((n = o[i.pos++]),
                                    (r |= (127 & n) << 10),
                                    n < 128)
                                  )
                                    return xe(e, r, t);
                                  if (
                                    ((n = o[i.pos++]),
                                    (r |= (127 & n) << 17),
                                    n < 128)
                                  )
                                    return xe(e, r, t);
                                  if (
                                    ((n = o[i.pos++]),
                                    (r |= (127 & n) << 24),
                                    n < 128)
                                  )
                                    return xe(e, r, t);
                                  if (
                                    ((n = o[i.pos++]),
                                    (r |= (1 & n) << 31),
                                    n < 128)
                                  )
                                    return xe(e, r, t);
                                  throw new Error(
                                    "Expected varint not more than 10 bytes"
                                  );
                                })(
                                  (t |= (15 & (i = r[this.pos])) << 28),
                                  e,
                                  this
                                ))))
              );
            },
          },
          {
            key: "readVarint64",
            value: function () {
              return this.readVarint(!0);
            },
          },
          {
            key: "readSVarint",
            value: function () {
              var e = this.readVarint();
              return e % 2 == 1 ? (e + 1) / -2 : e / 2;
            },
          },
          {
            key: "readBoolean",
            value: function () {
              return Boolean(this.readVarint());
            },
          },
          {
            key: "readString",
            value: function () {
              var e = this.readVarint() + this.pos,
                t = this.pos;
              return (
                (this.pos = e),
                e - t >= 12 && ke
                  ? ke.decode(this.buf.subarray(t, e))
                  : (function (e, t, i) {
                      var r = "",
                        n = t;
                      for (; n < i; ) {
                        var o = e[n],
                          a = null,
                          s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                        if (n + s > i) break;
                        var l = void 0,
                          u = void 0,
                          c = void 0;
                        1 === s
                          ? o < 128 && (a = o)
                          : 2 === s
                          ? 128 == (192 & (l = e[n + 1])) &&
                            (a = ((31 & o) << 6) | (63 & l)) <= 127 &&
                            (a = null)
                          : 3 === s
                          ? ((l = e[n + 1]),
                            (u = e[n + 2]),
                            128 == (192 & l) &&
                              128 == (192 & u) &&
                              ((a =
                                ((15 & o) << 12) |
                                ((63 & l) << 6) |
                                (63 & u)) <= 2047 ||
                                (a >= 55296 && a <= 57343)) &&
                              (a = null))
                          : 4 === s &&
                            ((l = e[n + 1]),
                            (u = e[n + 2]),
                            (c = e[n + 3]),
                            128 == (192 & l) &&
                              128 == (192 & u) &&
                              128 == (192 & c) &&
                              ((a =
                                ((15 & o) << 18) |
                                ((63 & l) << 12) |
                                ((63 & u) << 6) |
                                (63 & c)) <= 65535 ||
                                a >= 1114112) &&
                              (a = null)),
                          null === a
                            ? ((a = 65533), (s = 1))
                            : a > 65535 &&
                              ((a -= 65536),
                              (r += String.fromCharCode(
                                ((a >>> 10) & 1023) | 55296
                              )),
                              (a = 56320 | (1023 & a))),
                          (r += String.fromCharCode(a)),
                          (n += s);
                      }
                      return r;
                    })(this.buf, t, e)
              );
            },
          },
          {
            key: "readBytes",
            value: function () {
              var e = this.readVarint() + this.pos,
                t = this.buf.subarray(this.pos, e);
              return (this.pos = e), t;
            },
          },
          {
            key: "readPackedVarint",
            value: function () {
              for (
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t = arguments.length > 1 ? arguments[1] : void 0,
                  i = this.readPackedEnd();
                this.pos < i;

              )
                e.push(this.readVarint(t));
              return e;
            },
          },
          {
            key: "readPackedSVarint",
            value: function () {
              for (
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t = this.readPackedEnd();
                this.pos < t;

              )
                e.push(this.readSVarint());
              return e;
            },
          },
          {
            key: "readPackedBoolean",
            value: function () {
              for (
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t = this.readPackedEnd();
                this.pos < t;

              )
                e.push(this.readBoolean());
              return e;
            },
          },
          {
            key: "readPackedFloat",
            value: function () {
              for (
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t = this.readPackedEnd();
                this.pos < t;

              )
                e.push(this.readFloat());
              return e;
            },
          },
          {
            key: "readPackedDouble",
            value: function () {
              for (
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t = this.readPackedEnd();
                this.pos < t;

              )
                e.push(this.readDouble());
              return e;
            },
          },
          {
            key: "readPackedFixed32",
            value: function () {
              for (
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t = this.readPackedEnd();
                this.pos < t;

              )
                e.push(this.readFixed32());
              return e;
            },
          },
          {
            key: "readPackedSFixed32",
            value: function () {
              for (
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t = this.readPackedEnd();
                this.pos < t;

              )
                e.push(this.readSFixed32());
              return e;
            },
          },
          {
            key: "readPackedFixed64",
            value: function () {
              for (
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t = this.readPackedEnd();
                this.pos < t;

              )
                e.push(this.readFixed64());
              return e;
            },
          },
          {
            key: "readPackedSFixed64",
            value: function () {
              for (
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t = this.readPackedEnd();
                this.pos < t;

              )
                e.push(this.readSFixed64());
              return e;
            },
          },
          {
            key: "readPackedEnd",
            value: function () {
              return 2 === this.type
                ? this.readVarint() + this.pos
                : this.pos + 1;
            },
          },
          {
            key: "skip",
            value: function (e) {
              var t = 7 & e;
              if (0 === t) for (; this.buf[this.pos++] > 127; );
              else if (2 === t) this.pos = this.readVarint() + this.pos;
              else if (5 === t) this.pos += 4;
              else {
                if (1 !== t) throw new Error("Unimplemented type: ".concat(t));
                this.pos += 8;
              }
            },
          },
          {
            key: "writeTag",
            value: function (e, t) {
              this.writeVarint((e << 3) | t);
            },
          },
          {
            key: "realloc",
            value: function (e) {
              for (var t = this.length || 16; t < this.pos + e; ) t *= 2;
              if (t !== this.length) {
                var i = new Uint8Array(t);
                i.set(this.buf),
                  (this.buf = i),
                  (this.dataView = new DataView(i.buffer)),
                  (this.length = t);
              }
            },
          },
          {
            key: "finish",
            value: function () {
              return (
                (this.length = this.pos),
                (this.pos = 0),
                this.buf.subarray(0, this.length)
              );
            },
          },
          {
            key: "writeFixed32",
            value: function (e) {
              this.realloc(4),
                this.dataView.setInt32(this.pos, e, !0),
                (this.pos += 4);
            },
          },
          {
            key: "writeSFixed32",
            value: function (e) {
              this.realloc(4),
                this.dataView.setInt32(this.pos, e, !0),
                (this.pos += 4);
            },
          },
          {
            key: "writeFixed64",
            value: function (e) {
              this.realloc(8),
                this.dataView.setInt32(this.pos, -1 & e, !0),
                this.dataView.setInt32(this.pos + 4, Math.floor(e * _e), !0),
                (this.pos += 8);
            },
          },
          {
            key: "writeSFixed64",
            value: function (e) {
              this.realloc(8),
                this.dataView.setInt32(this.pos, -1 & e, !0),
                this.dataView.setInt32(this.pos + 4, Math.floor(e * _e), !0),
                (this.pos += 8);
            },
          },
          {
            key: "writeVarint",
            value: function (e) {
              (e = +e || 0) > 268435455 || e < 0
                ? (function (e, t) {
                    var i, r;
                    e >= 0
                      ? ((i = e % 4294967296 | 0), (r = (e / 4294967296) | 0))
                      : ((r = ~(-e / 4294967296)),
                        4294967295 ^ (i = ~(-e % 4294967296))
                          ? (i = (i + 1) | 0)
                          : ((i = 0), (r = (r + 1) | 0)));
                    if (e >= 0x10000000000000000 || e < -0x10000000000000000)
                      throw new Error("Given varint doesn't fit into 10 bytes");
                    t.realloc(10),
                      (function (e, t, i) {
                        (i.buf[i.pos++] = (127 & e) | 128),
                          (e >>>= 7),
                          (i.buf[i.pos++] = (127 & e) | 128),
                          (e >>>= 7),
                          (i.buf[i.pos++] = (127 & e) | 128),
                          (e >>>= 7),
                          (i.buf[i.pos++] = (127 & e) | 128),
                          (e >>>= 7),
                          (i.buf[i.pos] = 127 & e);
                      })(i, 0, t),
                      (function (e, t) {
                        var i = (7 & e) << 4;
                        if (
                          ((t.buf[t.pos++] |= i | ((e >>>= 3) ? 128 : 0)), !e)
                        )
                          return;
                        if (
                          ((t.buf[t.pos++] =
                            (127 & e) | ((e >>>= 7) ? 128 : 0)),
                          !e)
                        )
                          return;
                        if (
                          ((t.buf[t.pos++] =
                            (127 & e) | ((e >>>= 7) ? 128 : 0)),
                          !e)
                        )
                          return;
                        if (
                          ((t.buf[t.pos++] =
                            (127 & e) | ((e >>>= 7) ? 128 : 0)),
                          !e)
                        )
                          return;
                        if (
                          ((t.buf[t.pos++] =
                            (127 & e) | ((e >>>= 7) ? 128 : 0)),
                          !e)
                        )
                          return;
                        t.buf[t.pos++] = 127 & e;
                      })(r, t);
                  })(e, this)
                : (this.realloc(4),
                  (this.buf[this.pos++] = (127 & e) | (e > 127 ? 128 : 0)),
                  e <= 127 ||
                    ((this.buf[this.pos++] =
                      (127 & (e >>>= 7)) | (e > 127 ? 128 : 0)),
                    e <= 127 ||
                      ((this.buf[this.pos++] =
                        (127 & (e >>>= 7)) | (e > 127 ? 128 : 0)),
                      e <= 127 || (this.buf[this.pos++] = (e >>> 7) & 127))));
            },
          },
          {
            key: "writeSVarint",
            value: function (e) {
              this.writeVarint(e < 0 ? 2 * -e - 1 : 2 * e);
            },
          },
          {
            key: "writeBoolean",
            value: function (e) {
              this.writeVarint(+e);
            },
          },
          {
            key: "writeString",
            value: function (e) {
              (e = String(e)), this.realloc(4 * e.length), this.pos++;
              var t = this.pos;
              this.pos = (function (e, t, i) {
                for (var r, n, o = 0; o < t.length; o++) {
                  if ((r = t.charCodeAt(o)) > 55295 && r < 57344) {
                    if (!n) {
                      r > 56319 || o + 1 === t.length
                        ? ((e[i++] = 239), (e[i++] = 191), (e[i++] = 189))
                        : (n = r);
                      continue;
                    }
                    if (r < 56320) {
                      (e[i++] = 239), (e[i++] = 191), (e[i++] = 189), (n = r);
                      continue;
                    }
                    (r = ((n - 55296) << 10) | (r - 56320) | 65536), (n = null);
                  } else
                    n &&
                      ((e[i++] = 239),
                      (e[i++] = 191),
                      (e[i++] = 189),
                      (n = null));
                  r < 128
                    ? (e[i++] = r)
                    : (r < 2048
                        ? (e[i++] = (r >> 6) | 192)
                        : (r < 65536
                            ? (e[i++] = (r >> 12) | 224)
                            : ((e[i++] = (r >> 18) | 240),
                              (e[i++] = ((r >> 12) & 63) | 128)),
                          (e[i++] = ((r >> 6) & 63) | 128)),
                      (e[i++] = (63 & r) | 128));
                }
                return i;
              })(this.buf, e, this.pos);
              var i = this.pos - t;
              i >= 128 && Se(t, i, this),
                (this.pos = t - 1),
                this.writeVarint(i),
                (this.pos += i);
            },
          },
          {
            key: "writeFloat",
            value: function (e) {
              this.realloc(4),
                this.dataView.setFloat32(this.pos, e, !0),
                (this.pos += 4);
            },
          },
          {
            key: "writeDouble",
            value: function (e) {
              this.realloc(8),
                this.dataView.setFloat64(this.pos, e, !0),
                (this.pos += 8);
            },
          },
          {
            key: "writeBytes",
            value: function (e) {
              var t = e.length;
              this.writeVarint(t), this.realloc(t);
              for (var i = 0; i < t; i++) this.buf[this.pos++] = e[i];
            },
          },
          {
            key: "writeRawMessage",
            value: function (e, t) {
              this.pos++;
              var i = this.pos;
              e(t, this);
              var r = this.pos - i;
              r >= 128 && Se(i, r, this),
                (this.pos = i - 1),
                this.writeVarint(r),
                (this.pos += r);
            },
          },
          {
            key: "writeMessage",
            value: function (e, t, i) {
              this.writeTag(e, 2), this.writeRawMessage(t, i);
            },
          },
          {
            key: "writePackedVarint",
            value: function (e, t) {
              t.length && this.writeMessage(e, Be, t);
            },
          },
          {
            key: "writePackedSVarint",
            value: function (e, t) {
              t.length && this.writeMessage(e, Ee, t);
            },
          },
          {
            key: "writePackedBoolean",
            value: function (e, t) {
              t.length && this.writeMessage(e, je, t);
            },
          },
          {
            key: "writePackedFloat",
            value: function (e, t) {
              t.length && this.writeMessage(e, Ve, t);
            },
          },
          {
            key: "writePackedDouble",
            value: function (e, t) {
              t.length && this.writeMessage(e, Ie, t);
            },
          },
          {
            key: "writePackedFixed32",
            value: function (e, t) {
              t.length && this.writeMessage(e, Pe, t);
            },
          },
          {
            key: "writePackedSFixed32",
            value: function (e, t) {
              t.length && this.writeMessage(e, Te, t);
            },
          },
          {
            key: "writePackedFixed64",
            value: function (e, t) {
              t.length && this.writeMessage(e, Oe, t);
            },
          },
          {
            key: "writePackedSFixed64",
            value: function (e, t) {
              t.length && this.writeMessage(e, Me, t);
            },
          },
          {
            key: "writeBytesField",
            value: function (e, t) {
              this.writeTag(e, 2), this.writeBytes(t);
            },
          },
          {
            key: "writeFixed32Field",
            value: function (e, t) {
              this.writeTag(e, 5), this.writeFixed32(t);
            },
          },
          {
            key: "writeSFixed32Field",
            value: function (e, t) {
              this.writeTag(e, 5), this.writeSFixed32(t);
            },
          },
          {
            key: "writeFixed64Field",
            value: function (e, t) {
              this.writeTag(e, 1), this.writeFixed64(t);
            },
          },
          {
            key: "writeSFixed64Field",
            value: function (e, t) {
              this.writeTag(e, 1), this.writeSFixed64(t);
            },
          },
          {
            key: "writeVarintField",
            value: function (e, t) {
              this.writeTag(e, 0), this.writeVarint(t);
            },
          },
          {
            key: "writeSVarintField",
            value: function (e, t) {
              this.writeTag(e, 0), this.writeSVarint(t);
            },
          },
          {
            key: "writeStringField",
            value: function (e, t) {
              this.writeTag(e, 2), this.writeString(t);
            },
          },
          {
            key: "writeFloatField",
            value: function (e, t) {
              this.writeTag(e, 5), this.writeFloat(t);
            },
          },
          {
            key: "writeDoubleField",
            value: function (e, t) {
              this.writeTag(e, 1), this.writeDouble(t);
            },
          },
          {
            key: "writeBooleanField",
            value: function (e, t) {
              this.writeVarintField(e, +t);
            },
          },
        ]
      );
    })();
  function xe(e, t, i) {
    return i ? 4294967296 * t + (e >>> 0) : 4294967296 * (t >>> 0) + (e >>> 0);
  }
  function Se(e, t, i) {
    var r =
      t <= 16383
        ? 1
        : t <= 2097151
        ? 2
        : t <= 268435455
        ? 3
        : Math.floor(Math.log(t) / (7 * Math.LN2));
    i.realloc(r);
    for (var n = i.pos - 1; n >= e; n--) i.buf[n + r] = i.buf[n];
  }
  function Be(e, t) {
    for (var i = 0; i < e.length; i++) t.writeVarint(e[i]);
  }
  function Ee(e, t) {
    for (var i = 0; i < e.length; i++) t.writeSVarint(e[i]);
  }
  function Ve(e, t) {
    for (var i = 0; i < e.length; i++) t.writeFloat(e[i]);
  }
  function Ie(e, t) {
    for (var i = 0; i < e.length; i++) t.writeDouble(e[i]);
  }
  function je(e, t) {
    for (var i = 0; i < e.length; i++) t.writeBoolean(e[i]);
  }
  function Pe(e, t) {
    for (var i = 0; i < e.length; i++) t.writeFixed32(e[i]);
  }
  function Te(e, t) {
    for (var i = 0; i < e.length; i++) t.writeSFixed32(e[i]);
  }
  function Oe(e, t) {
    for (var i = 0; i < e.length; i++) t.writeFixed64(e[i]);
  }
  function Me(e, t) {
    for (var i = 0; i < e.length; i++) t.writeSFixed64(e[i]);
  }
  var Ce = function () {
    var e = window._BiliGreyResult,
      t = {};
    e &&
      Object.keys(e).forEach(function (i) {
        t["_BiliGreyResult_".concat(i)] = e[i];
      });
    return t;
  };
  function Ne(e, t) {
    if (
      (e.log_id && t.writeStringField(1, e.log_id),
      e.event_id && t.writeStringField(2, e.event_id),
      null != e.body && t.writeBytesField(3, e.body),
      e.meta)
    )
      for (var i = 0, r = Object.keys(e.meta); i < r.length; i++) {
        var n = r[i];
        t.writeMessage(4, Ae, { key: n, value: e.meta[n] });
      }
  }
  function Ae(e, t) {
    e.key && t.writeStringField(1, e.key),
      e.value && t.writeStringField(2, e.value);
  }
  function qe(e, t) {
    e.key && t.writeStringField(1, e.key),
      e.value && t.writeStringField(2, e.value);
  }
  function Re(e, t) {
    e.app_id && t.writeVarintField(1, e.app_id),
      e.platform && t.writeVarintField(2, e.platform),
      e.cbuvid && t.writeStringField(3, e.cbuvid),
      e.cmid && t.writeVarintField(4, e.cmid),
      e.fts && t.writeStringField(5, e.fts),
      e.screen_resolution && t.writeStringField(6, e.screen_resolution),
      e.timezone && t.writeStringField(7, e.timezone),
      e.bilifp && t.writeStringField(8, e.bilifp),
      e.device_type && t.writeStringField(9, e.device_type);
  }
  function Le(e, t) {
    e.network_info && t.writeStringField(1, e.network_info),
      e.url && t.writeStringField(2, e.url),
      e.refer_url && t.writeStringField(3, e.refer_url),
      e.logver && t.writeStringField(4, e.logver),
      e.abtest && t.writeStringField(5, e.abtest),
      e.ptype && t.writeVarintField(6, e.ptype),
      e.window_size && t.writeStringField(7, e.window_size),
      e.bsource && t.writeStringField(8, e.bsource),
      e.bsource_origin && t.writeStringField(9, e.bsource_origin),
      e.share_source_origin && t.writeStringField(10, e.share_source_origin),
      e.share_session_id && t.writeStringField(11, e.share_session_id),
      e.session_id && t.writeStringField(12, e.session_id);
  }
  function Je(e, t) {
    if (
      (e.target_url && t.writeStringField(1, e.target_url),
      e.button_type && t.writeVarintField(2, e.button_type),
      e.target_event_id && t.writeStringField(3, e.target_event_id),
      e.extra)
    )
      for (var i = 0, r = Object.keys(e.extra); i < r.length; i++) {
        var n = r[i];
        t.writeMessage(4, De, { key: n, value: e.extra[n] });
      }
  }
  function De(e, t) {
    e.key && t.writeStringField(1, e.key),
      e.value && t.writeStringField(2, e.value);
  }
  function Ue(e, t) {
    if (
      (e.event_id_from && t.writeStringField(1, e.event_id_from),
      e.load_type && t.writeVarintField(2, e.load_type),
      e.pv_start && t.writeVarintField(3, e.pv_start),
      e.extra)
    )
      for (var i = 0, r = Object.keys(e.extra); i < r.length; i++) {
        var n = r[i];
        t.writeMessage(4, ze, { key: n, value: e.extra[n] });
      }
  }
  function ze(e, t) {
    e.key && t.writeStringField(1, e.key),
      e.value && t.writeStringField(2, e.value);
  }
  function We(e, t) {
    if (
      (e.event_id_from && t.writeStringField(1, e.event_id_from),
      e.load_type && t.writeVarintField(2, e.load_type),
      e.pv_start && t.writeVarintField(3, e.pv_start),
      e.duration && t.writeVarintField(4, e.duration),
      e.pv_end && t.writeVarintField(5, e.pv_end),
      e.extra)
    )
      for (var i = 0, r = Object.keys(e.extra); i < r.length; i++) {
        var n = r[i];
        t.writeMessage(6, Ge, { key: n, value: e.extra[n] });
      }
  }
  function Ge(e, t) {
    e.key && t.writeStringField(1, e.key),
      e.value && t.writeStringField(2, e.value);
  }
  function He(e, t) {
    if (e.extra)
      for (var i = 0, r = Object.keys(e.extra); i < r.length; i++) {
        var n = r[i];
        t.writeMessage(1, Qe, { key: n, value: e.extra[n] });
      }
  }
  function Qe(e, t) {
    e.key && t.writeStringField(1, e.key),
      e.value && t.writeStringField(2, e.value);
  }
  function Ze(e, t) {
    if (
      (e.spm_id && t.writeStringField(1, e.spm_id),
      e.play_from_spmid && t.writeStringField(2, e.play_from_spmid),
      e.avid && t.writeVarintField(3, e.avid),
      e.cid && t.writeVarintField(4, e.cid),
      e.pname && t.writeVarintField(5, e.pname),
      e.room_id && t.writeVarintField(6, e.room_id),
      e.season_id && t.writeVarintField(7, e.season_id),
      e.ep_id && t.writeVarintField(8, e.ep_id),
      e.video_type && t.writeVarintField(9, e.video_type),
      e.sub_type && t.writeVarintField(10, e.sub_type),
      e.fid && t.writeStringField(11, e.fid),
      e.fver && t.writeStringField(12, e.fver),
      e.player_session_id && t.writeStringField(13, e.player_session_id),
      e.progress && t.writeStringField(14, e.progress),
      e.play_method && t.writeVarintField(15, e.play_method),
      e.video_format && t.writeVarintField(16, e.video_format),
      e.player_playback_state &&
        t.writeVarintField(17, e.player_playback_state),
      e.danmaku && t.writeVarintField(18, e.danmaku),
      e.statue && t.writeVarintField(19, e.statue),
      e.videoquality && t.writeStringField(20, e.videoquality),
      e.audioquality && t.writeStringField(21, e.audioquality),
      e.speed && t.writeStringField(22, e.speed),
      e.is_autoplay && t.writeVarintField(23, e.is_autoplay),
      e.duration && t.writeVarintField(24, e.duration),
      e.realtime && t.writeVarintField(25, e.realtime),
      e.videourl && t.writeStringField(26, e.videourl),
      e.audiourl && t.writeStringField(27, e.audiourl),
      e.player_extra)
    )
      for (var i = 0, r = Object.keys(e.player_extra); i < r.length; i++) {
        var n = r[i];
        t.writeMessage(28, Xe, { key: n, value: e.player_extra[n] });
      }
  }
  function Xe(e, t) {
    e.key && t.writeStringField(1, e.key),
      e.value && t.writeStringField(2, e.value);
  }
  var $e = { pv: 0, pv_unload: 5, click: 1, custom: 3, player: 4, exposure: 2 },
    Ye = function (e, i) {
      var r,
        n,
        o,
        a = i.reporter.options,
        s = i.reporter.sequencer.get(),
        l = s.sn,
        u = s.time,
        c = {
          pv: function () {
            return {
              page_view_info: {
                event_id_from: O("spm_id_from") || O("from_spmid") || "",
                load_type: ae(),
                pv_start: e.ts || 0,
                extra: U(t(t({}, null == a ? void 0 : a.extra), e.data)),
              },
            };
          },
          pv_unload: function () {
            var i,
              r,
              n,
              o,
              s = e.ts,
              l =
                null !==
                  (i =
                    null !==
                      (r =
                        null === (n = e.data) || void 0 === n
                          ? void 0
                          : n.pvStart) && void 0 !== r
                      ? r
                      : null === (o = performance) || void 0 === o
                      ? void 0
                      : o.timeOrigin) && void 0 !== i
                  ? i
                  : s,
              u = s - l,
              c = D(t(t({}, null == a ? void 0 : a.extra), e.data), [
                "pvStart",
              ]).remain;
            return {
              page_view_unload_info: {
                event_id_from: O("spm_id_from") || O("from_spmid") || "",
                load_type: ae(),
                pv_start: l || 0,
                pv_end: s || 0,
                duration: u || 0,
                extra: U(c),
              },
            };
          },
          click: function () {
            var i,
              r,
              n,
              o = ["targetUrl", "buttonType", "targetEventId"];
            o = o.concat(
              o.map(function (e) {
                return z(e);
              })
            );
            var s = D(t(t({}, null == a ? void 0 : a.extra), e.data), o),
              l = s.selected,
              u = s.remain,
              c = W(l);
            return {
              click_info: {
                target_url:
                  null !== (i = c.target_url) && void 0 !== i ? i : "",
                button_type:
                  null !== (r = c.button_type) && void 0 !== r ? r : 0,
                target_event_id:
                  null !== (n = c.target_event_id) && void 0 !== n ? n : "",
                extra: U(u),
              },
            };
          },
          exposure: function () {
            return {
              exposure_info: {
                extra: U(t(t({}, null == a ? void 0 : a.extra), e.data)),
              },
            };
          },
          player: function () {
            return (
              (e.data = W(e.data)),
              e.data.player_extra &&
                (e.data.player_extra = U(e.data.player_extra)),
              { player_info: e.data }
            );
          },
          custom: function () {
            return {
              extra: U(
                t(
                  t(
                    t(t({ app_buvid: C("Buvid") }, Ce()), re()),
                    null == a ? void 0 : a.extra
                  ),
                  e.data
                )
              ),
            };
          },
        },
        d =
          (null === (r = c[e.type]) || void 0 === r ? void 0 : r.call(c)) || {},
        f = t(
          t({}, null == a ? void 0 : a.base),
          null === (n = e.options) || void 0 === n ? void 0 : n.base
        ),
        p = t(
          {
            info: ne(f),
            runtime_info: oe(f),
            event_id: e.spm,
            business: e.spm.split(".").slice(0, 1).join("."),
            sn: l || 0,
            sn_gen_time: u || 0,
            ts: e.ts || 0,
            upload_time: Date.now(),
            event_category: $e[e.type],
            extra: U(
              t(
                t(t({ app_buvid: C("Buvid") }, Ce()), re()),
                null == a ? void 0 : a.extra
              )
            ),
          },
          d
        ),
        v = new Fe();
      !(function (e, t) {
        if (
          (e.info && t.writeMessage(1, Re, e.info),
          e.runtime_info && t.writeMessage(2, Le, e.runtime_info),
          e.event_id && t.writeStringField(3, e.event_id),
          e.business && t.writeStringField(4, e.business),
          e.sn && t.writeVarintField(5, e.sn),
          e.sn_gen_time && t.writeVarintField(6, e.sn_gen_time),
          e.ts && t.writeVarintField(7, e.ts),
          e.upload_time && t.writeVarintField(8, e.upload_time),
          e.event_category && t.writeVarintField(9, e.event_category),
          e.page_view_info && t.writeMessage(10, Ue, e.page_view_info),
          e.exposure_info && t.writeMessage(11, He, e.exposure_info),
          e.click_info && t.writeMessage(12, Je, e.click_info),
          e.player_info && t.writeMessage(13, Ze, e.player_info),
          e.page_view_unload_info &&
            t.writeMessage(14, We, e.page_view_unload_info),
          e.extra)
        )
          for (var i = 0, r = Object.keys(e.extra); i < r.length; i++) {
            var n = r[i];
            t.writeMessage(15, qe, { key: n, value: e.extra[n] });
          }
      })(p, v);
      var h = v.finish();
      return (
        (null == a ? void 0 : a.logLevel) >= 1 &&
          console.log(
            "%c".concat(e.type, " ").concat(e.spm, "\n"),
            "color: #30A46C",
            p
          ),
        {
          log_id:
            (null == f ? void 0 : f.logId) ||
            (null !== (o = i.reporter.options) &&
            void 0 !== o &&
            o.DEBUG_TEST_CHANNEL
              ? "025219"
              : "021436"),
          event_id: e.spm,
          body: h,
          meta: {},
        }
      );
    },
    Ke = function (e) {
      var t = { events: e },
        i = new Fe();
      return (
        (function (e, t) {
          if (e.events) {
            var i,
              r = v(e.events);
            try {
              for (r.s(); !(i = r.n()).done; ) {
                var n = i.value;
                t.writeMessage(1, Ne, n);
              }
            } catch (e) {
              r.e(e);
            } finally {
              r.f();
            }
          }
        })(t, i),
        i.finish()
      );
    },
    et = null,
    tt = function () {
      var e;
      et || (et = null !== (e = window.__BMG_AF__) && void 0 !== e ? e : null);
      return et;
    },
    it = (function () {
      var e = a(
        i().mark(function e() {
          var t, r, n, o, a;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r =
                        (null === (t = tt()) || void 0 === t
                          ? void 0
                          : t.defDomain) || "i0.hdslb.com"),
                      (n = /^uat-/.test(location.hostname)
                        ? location.hostname.slice(0, 4)
                        : ""),
                      (e.prev = 2),
                      (e.next = 5),
                      de({
                        method: "get",
                        url: "//"
                          .concat(n)
                          .concat(
                            r,
                            "/bfs/polaris_web_conf/polaris/webcnf/event.cnf"
                          ),
                        credentials: "omit",
                      })
                    );
                  case 5:
                    (o = e.sent) &&
                      (null === (a = window.localStorage) ||
                        void 0 === a ||
                        a.setItem("__reporter-pb-sample-config", o),
                      H("sampleRateConfig", JSON.parse(o))),
                      (e.next = 12);
                    break;
                  case 9:
                    (e.prev = 9),
                      (e.t0 = e.catch(2)),
                      console.warn(
                        "[reporter-pb] fetch sample rate config failed"
                      );
                  case 12:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[2, 9]]
          );
        })
      );
      return function () {
        return e.apply(this, arguments);
      };
    })(),
    rt = function (e) {
      if (!nt.plugins[e])
        throw new Error("[reporter-pb] 未加载 ".concat(e, " 插件"));
    },
    nt = (function () {
      function e(r) {
        var n,
          o,
          l,
          u,
          f = this;
        s(this, e),
          c(this, "version", j),
          c(this, "techEventReporter", null),
          c(this, "fpPromise", null),
          (this.miss =
            Math.random() >
            (null !==
              (n =
                null === (o = this.options) || void 0 === o
                  ? void 0
                  : o.sampleRate) && void 0 !== n
              ? n
              : 1));
        var p = "undefined" != typeof window,
          v =
            p &&
            /\bDEBUG_TEST_CHANNEL=1\b/.test(
              window.location.search + window.location.hash
            ),
          h = p && !!C("DEBUG_TEST_CHANNEL");
        v && N("DEBUG_TEST_CHANNEL", "1", 0, "same-domain"),
          (this.options = t(
            t({}, r),
            {},
            {
              DEBUG_TEST_CHANNEL:
                (null == r ? void 0 : r.DEBUG_TEST_CHANNEL) || v || h,
            }
          ));
        var w = e.plugins.native;
        this.initBuvidPromise = Promise.all(
          [ge()].concat(d(w ? [w.initBuvid()] : []))
        ).then(function () {
          f.buvidInit = !0;
        });
        var b = Z(),
          m = {
            bsource: b.bsource,
            bsourceFrom: b.bsourceFrom,
            uaSource: (function () {
              var e = navigator.userAgent.toLowerCase(),
                t = function () {
                  return (
                    /chrome/i.test(e) || /\b(?:crmo|crios)\/([\w\.]+)/i.test(e)
                  );
                },
                i = {
                  qq: function () {
                    return /QQ\/([\d\.]+)/i.test(e);
                  },
                  wechat: ["MicroMessenger", "wechat"],
                  douban: ["com.douban.frodo", "doubanapp"],
                  baidubox: "baiduboxapp",
                  baiduinput: "baiduinput",
                  zhihu: ["com.zhihu.android", "zhihuhybrid"],
                  haokan: "haokan",
                  iqiyi: ["IqiyiApp", "iqiyi IqiyiVersion"],
                  NGA: "Nga",
                  weibo: "Weibo",
                  xigua: "NewsArticle",
                  qqlive: "QQLiveBrowser",
                  hupu: "shence.hupu.com",
                  letv: "LetvMobileClient",
                  zuiyou: "Zuiyou",
                  cloudmusic: ["CloudMusic", "NeteaseMusic"],
                  tieba: "tieba",
                  sogousearch: "SogouSearch",
                  ucbrowser: "UCBrowser",
                  baidubrowser: "baidubrowser",
                  sogoumobilebrowser: "SogouMobileBrowser",
                  huaweibrowser: "HuaweiBrowser",
                  vivobrowser: "VivoBrowser",
                  miuibrowser: "MiuiBrowser",
                  oppobrowser: "oppobrowser",
                  quark: "Quark",
                  mqqbrowser: "MQQBrowser",
                  chromebrowser: t,
                  "360browser": function () {
                    return (
                      /\bqihu|(qi?ho?o?|360)browser/i.test(e) ||
                      (t() && !window.navigator.webkitPersistentStorage) ||
                      Object.keys(window).some(function (e) {
                        return /qihoo/.test(e);
                      })
                    );
                  },
                };
              for (var r in i) {
                var n = i[r];
                if (Array.isArray(n)) {
                  for (var o = 0; o < n.length; o++)
                    if (e.indexOf(n[o].toLocaleLowerCase()) >= 0) return r;
                } else if ("string" == typeof n) {
                  if (e.indexOf(n.toLocaleLowerCase()) >= 0) return r;
                } else if ("function" == typeof n && n()) return r;
              }
              return "";
            })(),
          };
        Object.keys(m).forEach(function (e) {
          e && (window[e] = m[e]);
        }),
          (this.sequencer = new T());
        var g,
          y = J(
            se,
            null === (l = this.options) || void 0 === l ? void 0 : l.batch
          );
        this.scheduler = new P(
          t(
            t({}, y.enabled ? y.value : { batchSize: 1, batchTime: 0 }),
            {},
            {
              run:
                ((g = a(
                  i().mark(function e(t) {
                    var r, n, o, a, s, l, u, c;
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (l =
                                  (null === (r = f.options) ||
                                  void 0 === r ||
                                  null === (r = r.base) ||
                                  void 0 === r
                                    ? void 0
                                    : r.logId) ||
                                  (null !== (n = f.options) &&
                                  void 0 !== n &&
                                  n.DEBUG_TEST_CHANNEL
                                    ? "025219"
                                    : "021436")),
                                (u = Ke(t)),
                                (null === (o = f.options) || void 0 === o
                                  ? void 0
                                  : o.logLevel) >= 2 &&
                                  ((c = d(u)
                                    .map(function (e) {
                                      return "0"
                                        .concat(e.toString(16))
                                        .slice(-2);
                                    })
                                    .join(" ")),
                                  console.log(
                                    "log_id: %c"
                                      .concat(l, "\n%crequest size: %c")
                                      .concat(
                                        u.length,
                                        " bytes\n%crequest body:\n%c"
                                      )
                                      .concat(c),
                                    "color: #0090FF",
                                    "",
                                    "color: #0090FF",
                                    "",
                                    "background-color: #004744; color: #A8F5E5"
                                  )),
                                (e.next = 6),
                                he(u, {
                                  url:
                                    null === (a = f.options) ||
                                    void 0 === a ||
                                    null === (a = a.base) ||
                                    void 0 === a
                                      ? void 0
                                      : a.url,
                                  retry:
                                    null === (s = f.options) || void 0 === s
                                      ? void 0
                                      : s.retry,
                                  logId: l,
                                })
                              );
                            case 6:
                              e.next = 11;
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(0)),
                                console.error("scheduler_run", e.t0);
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]]
                    );
                  })
                )),
                function (e) {
                  return g.apply(this, arguments);
                }),
            }
          )
        );
        var _ = null;
        this.spmPrefix &&
          !1 !== (null == r ? void 0 : r.autoPv) &&
          p &&
          !G("autoPvReported") &&
          ((_ = this.pv()),
          e.plugins.native &&
            this.reportNative({
              event: "".concat(this.spmPrefix, ".0.0.pv"),
              type: 1,
            }),
          this.flush(),
          H("autoPvReported", !0)),
          (function () {
            var e = G("fetchSampleRateTimer");
            if (!e) {
              try {
                var t,
                  i =
                    null === (t = window.localStorage) || void 0 === t
                      ? void 0
                      : t.getItem("__reporter-pb-sample-config");
                i && H("sampleRateConfig", JSON.parse(i));
              } catch (e) {}
              it(),
                (e = window.setInterval(it, 12e4)),
                H("fetchSampleRateTimer", e);
            }
          })();
        var k = function () {
          var e;
          null !== _ &&
            !1 !==
              (null == r || null === (e = r.autoPv) || void 0 === e
                ? void 0
                : e.unload) &&
            (_(), (_ = null)),
            f.flush();
        };
        window.addEventListener("beforeunload", k),
          window.addEventListener("pagehide", k);
        var F,
          x = (function () {
            var t = a(
              i().mark(function t() {
                var r;
                return i().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!(r = e.plugins.fp)) {
                          t.next = 4;
                          break;
                        }
                        return (t.next = 4), r.init(f);
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })();
        null != r &&
        null !== (u = r.feature) &&
        void 0 !== u &&
        u.fingerPrint &&
        !e.plugins.fp
          ? (this.fpPromise = ((F = "".concat(
              "https://s1.hdslb.com/bfs/seed/jinkela/short/reporter-pb",
              "/fingerPrint.js"
            )),
            new Promise(function (e) {
              var t = document.createElement("script");
              (t.crossOrigin = "anonymous"),
                (t.type = "text/javascript"),
                (t.src = F),
                (t.onload = function () {
                  return e();
                }),
                document.body.appendChild(t);
            })).then(function () {
              var t = window.ReporterPbFingerPrint;
              if (t) return e.use({ fp: t }), x();
            }))
          : (this.fpPromise = x());
      }
      return u(
        e,
        [
          {
            key: "spmPrefix",
            get: function () {
              var e;
              return (
                (null === (e = this.options) || void 0 === e
                  ? void 0
                  : e.spmPrefix) || A("spm_prefix")
              );
            },
          },
          {
            key: "_handleSpmId",
            value: function (e) {
              if (!e) return "";
              if ("string" == typeof e) return e;
              var t = e.prefix || this.spmPrefix || "",
                i = e.e ? ".".concat(e.e) : "";
              return t
                ? "".concat(t, ".").concat(e.c, ".").concat(e.d).concat(i)
                : "";
            },
          },
          {
            key: "report",
            value: function (e, i, r, n) {
              var o = this,
                a = this._handleSpmId(i);
              if (a) {
                if (
                  !this.miss &&
                  (function (e) {
                    var t = G("sampleRateConfig");
                    return (
                      !t ||
                      !t[e] ||
                      "number" != typeof t[e] ||
                      Math.ceil(100 * Math.random()) <= t[e]
                    );
                  })(a)
                )
                  if ("tech" !== e) {
                    var s = Date.now(),
                      l = function () {
                        o.scheduler.add(
                          Ye(
                            { type: e, spm: a, data: r, ts: s, options: n },
                            { reporter: o }
                          )
                        ),
                          null != n && n.flush && o.scheduler.flush();
                      };
                    if (
                      (this.buvidInit ? l() : this.initBuvidPromise.then(l),
                      "pv" === e)
                    ) {
                      var u = a
                        .split(".")
                        .slice(0, 4)
                        .concat("unload")
                        .join(".");
                      return function (e) {
                        return o.report(
                          "pv_unload",
                          u,
                          t({ pvStart: s }, null != e ? e : {}),
                          n
                        );
                      };
                    }
                  } else this._techReport(a, r, n);
              } else
                console.warn("[reporter-pb]: spmId not set", {
                  type: e,
                  spm: i,
                  data: r,
                  options: n,
                });
            },
          },
          {
            key: "pv",
            value: function (e, t, i) {
              if (!e) {
                var r = this.spmPrefix;
                e = r ? "".concat(r, ".0.0") : "";
              }
              return this.report("pv", e, null != t ? t : {}, i);
            },
          },
          {
            key: "click",
            value: function (e, t, i) {
              this.report("click", e, t, i);
            },
          },
          {
            key: "exposure",
            value: function (e, t, i) {
              this.report("exposure", e, t, i);
            },
          },
          {
            key: "player",
            value: function (e, t, i) {
              this.report("player", e, t, i);
            },
          },
          {
            key: "custom",
            value: function (e, t, i) {
              this.report("custom", e, t, i);
            },
          },
          {
            key: "tech",
            value: function (e, t, i) {
              this.report("tech", e, t, i);
            },
          },
          {
            key: "flush",
            value: function () {
              var e;
              this.scheduler.flush(),
                null === (e = this.techEventReporter) ||
                  void 0 === e ||
                  e.flush();
            },
          },
          {
            key: "fpReport",
            value:
              ((o = a(
                i().mark(function t(r) {
                  return i().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), this.fpPromise;
                          case 2:
                            rt("fp"), e.plugins.fp.fpReport(this, r);
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              )),
              function (e) {
                return o.apply(this, arguments);
              }),
          },
          {
            key: "_techReport",
            value:
              ((n = a(
                i().mark(function t(r, n, o) {
                  var a;
                  return i().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            this.techEventReporter ||
                              (rt("tech"),
                              (this.techEventReporter = new e.plugins.tech(
                                this.options,
                                this.initBuvidPromise,
                                this.sequencer
                              ))),
                              (a = [
                                "performance",
                                "error",
                                "player",
                                "custom",
                              ].some(function (e) {
                                return e === (null == n ? void 0 : n.type);
                              })
                                ? n.type
                                : "custom"),
                              null == n || delete n.type,
                              this.techEventReporter.report(a, r, n, o);
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              )),
              function (e, t, i) {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "reportNative",
            value:
              ((r = a(
                i().mark(function t() {
                  var r,
                    n = arguments;
                  return i().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            rt("native"),
                            t.abrupt(
                              "return",
                              (r = e.plugins.native).reportNative.apply(r, n)
                            )
                          );
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )),
              function () {
                return r.apply(this, arguments);
              }),
          },
          {
            key: "getActionID",
            value: function () {
              var t;
              return (
                rt("native"),
                (t = e.plugins.native).getActionID.apply(t, arguments)
              );
            },
          },
        ],
        [
          {
            key: "use",
            value: function (e) {
              this.plugins = t(t({}, this.plugins), e);
            },
          },
        ]
      );
      var r, n, o;
    })();
  c(nt, "version", j), c(nt, "plugins", {});
  var ot =
    "object" === ("undefined" == typeof window ? "undefined" : n(window))
      ? window
      : null;
  ot &&
    (ot.BiliJsBridge ||
      (ot.BiliJsBridge = {
        sendTasks: [],
        sendTasksV2: [],
        callbacks: [],
        biliInject: null,
        biliInjectV2: null,
        selfCallbackId: 1,
        newVersion: !1,
        inited: !1,
        initedV2: !1,
        noBiliInject: !1,
        noBiliInjectV2: !1,
        appSupportApis: [],
        msgCallbacks: {},
        jsbCallbacks: {},
        msgListener: !1,
      }),
    ["msgCallbacks", "jsbCallbacks"].forEach(function (e) {
      ot.BiliJsBridge[e] || (ot.BiliJsBridge[e] = {});
    }));
  var at = ot ? navigator.userAgent : null,
    st = !!ot && /BiliApp|BiliComic|hikari/i.test(at),
    lt = !!ot && /wbType\/common/i.test(at),
    ut = !1,
    ct = function (e, t, i, r) {
      var n = ot.BiliJsBridge.callbacks.findIndex(function (t) {
        return t.callbackId === +e;
      });
      if (n >= 0) {
        var o = ot.BiliJsBridge.callbacks[n];
        if (
          ("global.import" === o.method &&
            (ot.BiliJsBridge.appSupportApis = []),
          "function" == typeof o.callback)
        ) {
          var a = i || t;
          if ((o.callback(a), o.messageWindow)) {
            i instanceof Error &&
              (a = {
                code: i.code || 105,
                msg: i.message,
                data: i.data,
                stack: i.stack,
              });
            var s = JSON.stringify({
              iframeCallbackId: o.callbackId,
              jsbReceiveArgs: a,
            });
            o.messageWindow.postMessage(s, "*");
          }
        }
        r &&
          "global.registerChannel" !== o.method &&
          (ot.BiliJsBridge.callbacks.splice(n, 1),
          o.messageWindow &&
            o.messageWindow.postMessage(
              JSON.stringify({ iframeRemoveId: o.callbackId }),
              "*"
            ));
      }
    };
  function dt(e) {
    var i,
      r = ot.BiliJsBridge,
      n = r.biliInject,
      o = r.biliInjectV2;
    n && !n.biliCallbackReceived && (n.biliCallbackReceived = ct),
      o &&
        !o.biliCallbackReceived &&
        (o.biliCallbackReceived = function (e, t, i) {
          return ct(e, t, i, !0);
        });
    var a = e.isApiV2,
      s = [];
    for (var l in e)
      Object.prototype.hasOwnProperty.call(e, l) &&
        "function" == typeof e[l] &&
        "callback" !== l &&
        (s.push({
          method: e.method,
          callback: e[l],
          callbackId: ot.BiliJsBridge.selfCallbackId,
          callbackName: l,
          messageWindow: e.messageWindow,
        }),
        (e[l] = ""),
        (e.data[l + "CallbackId"] = ot.BiliJsBridge.selfCallbackId++));
    if (
      (s.push({
        method: e.method,
        eventKey: e.data && e.data.key,
        callback: e.callback,
        callbackId: ot.BiliJsBridge.selfCallbackId,
        callbackName: "callback",
        messageWindow: e.messageWindow,
      }),
      (i = ot.BiliJsBridge.callbacks).push.apply(i, s),
      e.iframeMessageId && e.messageWindow)
    ) {
      var u = JSON.stringify({
        iframeMessageId: e.iframeMessageId,
        callbacks: s.map(function (e) {
          return { callbackId: e.callbackId, callbackName: e.callbackName };
        }),
      });
      e.messageWindow.postMessage(u, "*");
    }
    var c = function () {},
      d = function () {};
    if (
      (n && "function" == typeof n.postMessage && (c = n.postMessage.bind(n)),
      o && "function" == typeof o.postMessage && (d = o.postMessage.bind(o)),
      a)
    ) {
      if ("global.unregisterChannel" === e.method) {
        var f = e.callback(),
          p = ot.BiliJsBridge.callbacks.findIndex(function (t) {
            return t.eventKey === e.data.key && t.callback === f;
          });
        if (p > -1) {
          var v = ot.BiliJsBridge.callbacks[p];
          (e.data.callbackId = v.callbackId),
            ot.BiliJsBridge.callbacks.splice(p, 1),
            v.messageWindow &&
              v.messageWindow.postMessage(
                JSON.stringify({ iframeRemoveId: v.callbackId }),
                "*"
              );
        }
      }
      d(
        JSON.stringify(
          t(
            t({ method: e.method, data: e.data }, e.key && { key: e.key }),
            {},
            { callbackId: ot.BiliJsBridge.selfCallbackId++ }
          )
        )
      );
    } else /Android/i.test(at) || /Linux/i.test(at) ? c(JSON.stringify({ method: e.method, data: Object.assign(e.data, { callbackId: ot.BiliJsBridge.selfCallbackId++ }) })) : c({ method: e.method, data: JSON.stringify(Object.assign(e.data, { callbackId: ot.BiliJsBridge.selfCallbackId++ })) });
  }
  function ft(e) {
    return new Promise(function (t, i) {
      if (e()) t();
      else
        var r = 0,
          n = setInterval(function () {
            r++,
              e() && (t(), clearInterval(n)),
              r >= 20 && (i(), clearInterval(n));
          }, 500);
    });
  }
  function pt() {
    return (
      ot &&
      (ot.biliInject ||
        (ot.webkit &&
          ot.webkit.messageHandlers &&
          ot.webkit.messageHandlers.biliInject))
    );
  }
  function vt() {
    return (
      ot &&
      (ot.biliInjectV2 ||
        (ot.webkit &&
          ot.webkit.messageHandlers &&
          ot.webkit.messageHandlers.biliInjectV2))
    );
  }
  function ht(e) {
    if (
      ("global.import" === e.method && (ot.BiliJsBridge.appSupportApis = []),
      ((e = e || {}).data = e.data || {}),
      !e.method)
    )
      throw new Error("no method");
    ot.BiliJsBridge.inited
      ? ot.BiliJsBridge.newVersion && dt(e)
      : ot.BiliJsBridge.noBiliInject || ot.BiliJsBridge.sendTasks.push(e);
  }
  function wt(e) {
    return new Promise(function (t, i) {
      ot.BiliJsBridge.appSupportApis.length
        ? t(ot.BiliJsBridge.appSupportApis.includes(e))
        : ht({
            method: "global.getAllSupport",
            callback: function (r) {
              try {
                r && r.length && (ot.BiliJsBridge.appSupportApis = r),
                  t(r.includes(e));
              } catch (e) {
                i(e);
              }
            },
          });
    });
  }
  function bt(e) {
    ot.BiliJsBridge.biliInjectV2
      ? dt(e)
      : ot.BiliJsBridge.noBiliInjectV2 || ot.BiliJsBridge.sendTasksV2.push(e);
  }
  function mt(e) {
    if (e.data) {
      var i = {};
      try {
        i = JSON.parse(e.data);
      } catch (e) {}
      if (i && (i.iframeMessageId || i.iframeCallbackId || i.iframeRemoveId)) {
        var r = i.iframeMessageId,
          n = ot.BiliJsBridge.msgCallbacks[r];
        if (n)
          return (
            "function" == typeof n && n(i),
            void delete ot.BiliJsBridge.msgCallbacks[i.iframeMessageId]
          );
        if (i.iframeCallbackId) {
          var o = ot.BiliJsBridge.jsbCallbacks[i.iframeCallbackId];
          "function" == typeof o && o(i.jsbReceiveArgs);
        } else if (i.iframeRemoveId)
          delete ot.BiliJsBridge.jsbCallbacks[i.iframeRemoveId];
        else if (i.method) {
          var a = e.source,
            s = i.method.replace(/^bili_jsb_/, ""),
            l = i.option || {};
          switch (((l.messageWindow = a), (l.iframeMessageId = r), s)) {
            case "isSupport":
              wt(i.api)
                .then(function (e) {
                  a.postMessage(
                    JSON.stringify(t(t({}, i), {}, { support: e })),
                    "*"
                  );
                })
                .catch(function () {
                  a.postMessage(
                    JSON.stringify(t(t({}, i), {}, { support: !1 })),
                    "*"
                  );
                });
              break;
            case "callNative":
              for (var u in l)
                "jsbCallbackFn" === l[u] && (l[u] = function () {});
              ht(l);
              break;
            case "useNative":
              (l.callback = function () {}), bt(l);
          }
        }
      }
    }
  }
  ot &&
    !ot.BiliJsBridge.msgListener &&
    (window.addEventListener("message", mt),
    (ot.BiliJsBridge.msgListener = mt));
  var gt = function () {
      return ut
        ? Promise.resolve()
        : ((ut = !0),
          Promise.all([
            ft(pt)
              .then(function () {
                (ot.BiliJsBridge.biliInject = pt()),
                  (ot.BiliJsBridge.newVersion = !0),
                  ot.BiliJsBridge.sendTasks.forEach(function (e) {
                    return dt(e);
                  }),
                  (ot.BiliJsBridge.sendTasks = []);
              })
              .catch(function () {
                ot.BiliJsBridge.noBiliInject = !0;
              })
              .finally(function () {
                ot.BiliJsBridge.inited = !0;
              }),
            ft(vt)
              .then(function () {
                (ot.BiliJsBridge.biliInjectV2 = vt()),
                  ot.BiliJsBridge.sendTasksV2.forEach(function (e) {
                    return dt(e);
                  }),
                  (ot.BiliJsBridge.sendTasksV2 = []);
              })
              .catch(function () {
                ot.BiliJsBridge.noBiliInjectV2 = !0;
              })
              .finally(function () {
                ot.BiliJsBridge.initedV2 = !0;
              }),
          ]));
    },
    yt = wt,
    _t = ht,
    kt = function (e, t) {
      return new Promise(function (i, r) {
        xt({ method: e, params: t, resolve: i, reject: r }) ||
          bt({
            method: e,
            data: t || {},
            isApiV2: !0,
            callback: function (e) {
              e && 0 === e.code ? i(e) : r(e);
            },
          });
      });
    };
  if (ot && window !== window.parent && window.top) {
    var Ft = function (e, t) {
      (e.method = "bili_jsb_".concat(e.method)),
        (e.iframeMessageId = Math.random()),
        (ot.BiliJsBridge.msgCallbacks[e.iframeMessageId] = t || function () {}),
        window.top.postMessage(JSON.stringify(e), "*");
    };
    (gt = function () {
      return Promise.resolve();
    }),
      (yt = function (e) {
        return new Promise(function (t) {
          Ft({ method: "isSupport", api: e }, function (e) {
            var i = e.support;
            return t(i);
          });
        });
      }),
      (_t = function (e) {
        var i = t({}, e);
        for (var r in i) "function" == typeof i[r] && (i[r] = "jsbCallbackFn");
        Ft({ method: "callNative", option: i }, function (t) {
          (t.callbacks || []).forEach(function (t) {
            ot.BiliJsBridge.jsbCallbacks[t.callbackId] = e[t.callbackName];
          });
        });
      }),
      (kt = function (e, t) {
        return new Promise(function (i, r) {
          xt({ method: e, params: t, resolve: i, reject: r }) ||
            Ft(
              {
                method: "useNative",
                option: {
                  method: e,
                  data: t,
                  isApiV2: !0,
                  callback: "jsbCallbackFn",
                },
              },
              function (e) {
                var t = e.callbacks[0].callbackId;
                ot.BiliJsBridge.jsbCallbacks[t] = function (e) {
                  e && 0 === e.code ? i(e) : r(e);
                };
              }
            );
        });
      });
  }
  function xt(e) {
    var t = e.method,
      i = e.params,
      r = e.resolve;
    return (
      e.reject,
      !lt &&
        ("ability.reportEvent" === t && (t = "ability.reportEventV3"),
        yt(t).then(function (e) {
          e &&
            _t({
              method: t,
              data: i,
              callback: function (e) {
                return r({ code: 0, msg: "", down: !0, data: e || null });
              },
            });
        }),
        !0)
    );
  }
  var St = null,
    Bt = {},
    Et = (function () {
      var e = a(
        i().mark(function e() {
          return i().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (st) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  return St || (St = gt()), (e.next = 5), St;
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function () {
        return e.apply(this, arguments);
      };
    })(),
    Vt = (function () {
      var e = a(
        i().mark(function e() {
          var t, r, n;
          return i().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (st) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  if (C("Buvid")) {
                    e.next = 10;
                    break;
                  }
                  return (e.next = 5), Et();
                case 5:
                  return (e.next = 7), kt("global.getContainerInfo", {});
                case 7:
                  (r = e.sent),
                    (n =
                      null == r || null === (t = r.data) || void 0 === t
                        ? void 0
                        : t.buvid) && N("Buvid", n);
                case 10:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function () {
        return e.apply(this, arguments);
      };
    })(),
    It = function () {
      var e,
        t,
        i = "";
      "undefined" != typeof window &&
        "crypto" in window &&
        (i =
          null === (e = window.crypto) ||
          void 0 === e ||
          null === (t = e.randomUUID) ||
          void 0 === t
            ? void 0
            : t.call(e));
      i ||
        (i = ""
          .concat(q(8), "-")
          .concat(q(4), "-")
          .concat(q(4), "-")
          .concat(q(4), "-")
          .concat(q(12))
          .toLowerCase());
      for (var r = 0, n = 0; n < i.length; n++) {
        (r = (r << 5) - r + i.charCodeAt(n)), (r |= 0);
      }
      return ("00000000" + (r >>> 0).toString(16)).slice(-8).toUpperCase();
    },
    jt = {
      other: 0,
      pv: 1,
      click: 2,
      appear: 3,
      tracker: 5,
      custom: 7,
      player: 9,
    },
    Pt = (function () {
      var e = a(
        i().mark(function e(r) {
          var o, a, s;
          return i().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (st) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  return (
                    "string" == typeof r.type &&
                      (r.type =
                        null !== (o = jt[r.type]) && void 0 !== o ? o : 0),
                    1 !== r.type || Bt[r.event] || (Bt[r.event] = It()),
                    (e.next = 6),
                    St
                  );
                case 6:
                  return (
                    {},
                    ((r.params && "object" !== n(r.params)
                      ? { value: r.params }
                      : null !== (a = r.params) && void 0 !== a
                      ? a
                      : {}
                    ).polaris_action_id = Bt[r.event]),
                    (s = JSON.stringify(r.params)),
                    e.abrupt(
                      "return",
                      kt("ability.reportEvent", t(t({}, r), {}, { params: s }))
                    )
                  );
                case 11:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function (t) {
        return e.apply(this, arguments);
      };
    })(),
    Tt = Object.freeze({
      __proto__: null,
      genActionID: It,
      getActionID: function (e) {
        return Bt[e];
      },
      init: Et,
      initBuvid: Vt,
      reportNative: Pt,
    });
  function Ot(e, t) {
    if (
      (e.log_id && t.writeStringField(1, e.log_id),
      e.event_id && t.writeStringField(2, e.event_id),
      null != e.body && t.writeBytesField(3, e.body),
      e.meta)
    )
      for (var i = 0, r = Object.keys(e.meta); i < r.length; i++) {
        var n = r[i];
        t.writeMessage(4, Mt, { key: n, value: e.meta[n] });
      }
  }
  function Mt(e, t) {
    e.key && t.writeStringField(1, e.key),
      e.value && t.writeStringField(2, e.value);
  }
  function Ct(e, t) {
    e.key && t.writeStringField(1, e.key),
      e.value && t.writeStringField(2, e.value);
  }
  function Nt(e, t) {
    e.app_id && t.writeVarintField(1, e.app_id),
      e.platform && t.writeVarintField(2, e.platform),
      e.cbuvid && t.writeStringField(3, e.cbuvid),
      e.cmid && t.writeVarintField(4, e.cmid),
      e.fts && t.writeStringField(5, e.fts),
      e.screen_resolution && t.writeStringField(6, e.screen_resolution),
      e.timezone && t.writeStringField(7, e.timezone),
      e.bilifp && t.writeStringField(8, e.bilifp),
      e.device_type && t.writeStringField(9, e.device_type);
  }
  function At(e, t) {
    e.network_info && t.writeStringField(1, e.network_info),
      e.url && t.writeStringField(2, e.url),
      e.refer_url && t.writeStringField(3, e.refer_url),
      e.logver && t.writeStringField(4, e.logver),
      e.abtest && t.writeStringField(5, e.abtest),
      e.ptype && t.writeVarintField(6, e.ptype),
      e.window_size && t.writeStringField(7, e.window_size),
      e.bsource && t.writeStringField(8, e.bsource),
      e.bsource_origin && t.writeStringField(9, e.bsource_origin),
      e.share_source_origin && t.writeStringField(10, e.share_source_origin),
      e.share_session_id && t.writeStringField(11, e.share_session_id),
      e.session_id && t.writeStringField(12, e.session_id);
  }
  function qt(e, t) {
    if (
      (e.navigation_start && t.writeFloatField(1, e.navigation_start),
      e.unload_event_end && t.writeFloatField(2, e.unload_event_end),
      e.redirect_start && t.writeFloatField(3, e.redirect_start),
      e.redirect_end && t.writeFloatField(4, e.redirect_end),
      e.fetch_start && t.writeFloatField(5, e.fetch_start),
      e.domain_lookup_start && t.writeFloatField(6, e.domain_lookup_start),
      e.domain_lookup_end && t.writeFloatField(7, e.domain_lookup_end),
      e.connect_start && t.writeFloatField(8, e.connect_start),
      e.connect_end && t.writeFloatField(9, e.connect_end),
      e.secure_connection_start &&
        t.writeFloatField(10, e.secure_connection_start),
      e.request_start && t.writeFloatField(11, e.request_start),
      e.response_start && t.writeFloatField(12, e.response_start),
      e.response_end && t.writeFloatField(13, e.response_end),
      e.dom_loading && t.writeFloatField(14, e.dom_loading),
      e.dom_interactive && t.writeFloatField(15, e.dom_interactive),
      e.dom_content_loaded_event_start &&
        t.writeFloatField(16, e.dom_content_loaded_event_start),
      e.dom_content_loaded_event_end &&
        t.writeFloatField(17, e.dom_content_loaded_event_end),
      e.dom_complete && t.writeFloatField(18, e.dom_complete),
      e.load_event_start && t.writeFloatField(19, e.load_event_start),
      e.load_event_end && t.writeFloatField(20, e.load_event_end),
      e.cumulative_layout_shift &&
        t.writeFloatField(21, e.cumulative_layout_shift),
      e.first_paint && t.writeFloatField(22, e.first_paint),
      e.first_contentful_paint &&
        t.writeFloatField(23, e.first_contentful_paint),
      e.first_meaningful_paint &&
        t.writeFloatField(24, e.first_meaningful_paint),
      e.largest_contentful_paint &&
        t.writeFloatField(25, e.largest_contentful_paint),
      e.time_to_first_byte && t.writeFloatField(26, e.time_to_first_byte),
      e.extra)
    )
      for (var i = 0, r = Object.keys(e.extra); i < r.length; i++) {
        var n = r[i];
        t.writeMessage(27, Rt, { key: n, value: e.extra[n] });
      }
  }
  function Rt(e, t) {
    e.key && t.writeStringField(1, e.key),
      e.value && t.writeStringField(2, e.value);
  }
  function Lt(e, t) {
    if (
      (e.error_type && t.writeStringField(1, e.error_type),
      e.name && t.writeStringField(2, e.name),
      e.message && t.writeStringField(3, e.message),
      e.stack && t.writeStringField(4, e.stack),
      e.instruments)
    ) {
      var i,
        r = v(e.instruments);
      try {
        for (r.s(); !(i = r.n()).done; ) {
          var n = i.value;
          t.writeMessage(5, Dt, n);
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
    }
    if (e.extra)
      for (var o = 0, a = Object.keys(e.extra); o < a.length; o++) {
        var s = a[o];
        t.writeMessage(6, Jt, { key: s, value: e.extra[s] });
      }
  }
  function Jt(e, t) {
    e.key && t.writeStringField(1, e.key),
      e.value && t.writeStringField(2, e.value);
  }
  function Dt(e, t) {
    e.error_instrument_type && t.writeStringField(1, e.error_instrument_type),
      e.message && t.writeStringField(2, e.message),
      e.ts && t.writeVarintField(3, e.ts),
      e.meta && t.writeStringField(4, e.meta);
  }
  function Ut(e, t) {
    if (
      (e.spm_id && t.writeStringField(1, e.spm_id),
      e.play_from_spmid && t.writeStringField(2, e.play_from_spmid),
      e.avid && t.writeVarintField(3, e.avid),
      e.cid && t.writeVarintField(4, e.cid),
      e.pname && t.writeVarintField(5, e.pname),
      e.room_id && t.writeVarintField(6, e.room_id),
      e.season_id && t.writeVarintField(7, e.season_id),
      e.ep_id && t.writeVarintField(8, e.ep_id),
      e.video_type && t.writeVarintField(9, e.video_type),
      e.sub_type && t.writeVarintField(10, e.sub_type),
      e.fid && t.writeStringField(11, e.fid),
      e.fver && t.writeStringField(12, e.fver),
      e.player_session_id && t.writeStringField(13, e.player_session_id),
      e.progress && t.writeStringField(14, e.progress),
      e.play_method && t.writeVarintField(15, e.play_method),
      e.video_format && t.writeVarintField(16, e.video_format),
      e.player_playback_state &&
        t.writeVarintField(17, e.player_playback_state),
      e.danmaku && t.writeVarintField(18, e.danmaku),
      e.statue && t.writeVarintField(19, e.statue),
      e.videoquality && t.writeStringField(20, e.videoquality),
      e.audioquality && t.writeStringField(21, e.audioquality),
      e.speed && t.writeStringField(22, e.speed),
      e.is_autoplay && t.writeVarintField(23, e.is_autoplay),
      e.duration && t.writeVarintField(24, e.duration),
      e.realtime && t.writeVarintField(25, e.realtime),
      e.videourl && t.writeStringField(26, e.videourl),
      e.audiourl && t.writeStringField(27, e.audiourl),
      e.player_extra)
    )
      for (var i = 0, r = Object.keys(e.player_extra); i < r.length; i++) {
        var n = r[i];
        t.writeMessage(28, zt, { key: n, value: e.player_extra[n] });
      }
  }
  function zt(e, t) {
    e.key && t.writeStringField(1, e.key),
      e.value && t.writeStringField(2, e.value);
  }
  var Wt = { performance: 0, error: 1, player: 3, custom: 2 },
    Gt = function (e) {
      var t,
        i =
          null == e || null === (t = e.feature) || void 0 === t
            ? void 0
            : t.tech;
      return i && "object" === n(i) && i.logId
        ? i.logId
        : null != e && e.DEBUG_TEST_CHANNEL
        ? "025205"
        : "021434";
    },
    Ht = function (e, i) {
      var r,
        n,
        o = i.reporter.options,
        a = i.reporter.sequencer.get(),
        s = a.sn,
        l = a.time,
        u = {
          performance: function () {
            var i = [
              "type",
              "navigation_start",
              "unload_event_end",
              "redirect_start",
              "redirect_end",
              "fetch_start",
              "domain_lookup_start",
              "domain_lookup_end",
              "connect_start",
              "connect_end",
              "secure_connection_start",
              "request_start",
              "response_start",
              "response_end",
              "dom_loading",
              "dom_interactive",
              "dom_content_loaded_event_start",
              "dom_content_loaded_event_end",
              "dom_complete",
              "load_event_start",
              "load_event_end",
              "cumulative_layout_shift",
              "first_paint",
              "first_contentful_paint",
              "first_meaningful_paint",
              "largest_contentful_paint",
              "time_to_first_byte",
            ];
            i = i.concat(
              i.map(function (e) {
                return e.replace(/_[a-z]/g, function (e) {
                  return e[1].toUpperCase();
                });
              })
            );
            var r = D(t(t({}, null == o ? void 0 : o.extra), e.data), i),
              n = r.selected,
              a = r.remain;
            return { performance_info: t(t({}, n), {}, { extra: U(a) }) };
          },
          error: function () {
            var i = D(t(t({}, null == o ? void 0 : o.extra), e.data), [
                "errorType",
                "error_type",
                "name",
                "message",
                "stack",
                "instruments",
              ]),
              r = i.selected,
              n = i.remain;
            return {
              error_event_info: {
                error_type: r.error_type,
                name: r.name,
                message: r.message || r.msg,
                stack: r.stack,
                instruments: (Array.isArray(r.instruments)
                  ? r.instruments
                  : []
                ).map(function (e) {
                  return R(e) ? W(e) : e;
                }),
                extra: U(n),
              },
            };
          },
          player: function () {
            return (
              (e.data = W(e.data)),
              e.data.player_extra &&
                R(e.data.player_extra) &&
                (e.data.player_extra = U(e.data.player_extra)),
              { player_info: e.data }
            );
          },
          custom: function () {
            return {
              extra: U(
                t(
                  t(
                    t(t({ app_buvid: C("Buvid") }, Ce()), re()),
                    null == o ? void 0 : o.extra
                  ),
                  e.data
                )
              ),
            };
          },
        },
        c =
          (null === (r = u[e.type]) || void 0 === r ? void 0 : r.call(u)) || {},
        d = t(
          t({}, null === (n = e.options) || void 0 === n ? void 0 : n.base),
          null == o ? void 0 : o.base
        ),
        f = t(
          {
            info: ne(d),
            runtime_info: oe(d),
            event_id: e.spm,
            business: e.spm.split(".").slice(0, 1).join("."),
            sn: s || 0,
            sn_gen_time: l || 0,
            ts: e.ts || 0,
            upload_time: Date.now(),
            event_category: Wt[e.type],
            extra: U(
              t(
                t(t({ app_buvid: C("Buvid") }, Ce()), re()),
                null == o ? void 0 : o.extra
              )
            ),
          },
          c
        ),
        p = new Fe();
      !(function (e, t) {
        if (
          (e.info && t.writeMessage(1, Nt, e.info),
          e.runtime_info && t.writeMessage(2, At, e.runtime_info),
          e.event_id && t.writeStringField(3, e.event_id),
          e.business && t.writeStringField(4, e.business),
          e.sn && t.writeVarintField(5, e.sn),
          e.sn_gen_time && t.writeVarintField(6, e.sn_gen_time),
          e.ts && t.writeVarintField(7, e.ts),
          e.upload_time && t.writeVarintField(8, e.upload_time),
          e.event_category && t.writeVarintField(9, e.event_category),
          e.performance_info && t.writeMessage(10, qt, e.performance_info),
          e.error_event_info && t.writeMessage(11, Lt, e.error_event_info),
          e.player_info && t.writeMessage(12, Ut, e.player_info),
          e.extra)
        )
          for (var i = 0, r = Object.keys(e.extra); i < r.length; i++) {
            var n = r[i];
            t.writeMessage(13, Ct, { key: n, value: e.extra[n] });
          }
      })(f, p);
      var v = p.finish();
      return (
        (null == o ? void 0 : o.logLevel) >= 1 &&
          console.log(
            "%c".concat(e.type, " ").concat(e.spm, "\n"),
            "color: #30A46C",
            f
          ),
        {
          log_id: Gt(i.reporter.options),
          event_id: e.spm,
          body: v,
          meta: { metaEventId: e.spm, metaEventCategory: e.type },
        }
      );
    },
    Qt = function (e) {
      var t = { events: e },
        i = new Fe();
      return (
        (function (e, t) {
          if (e.events) {
            var i,
              r = v(e.events);
            try {
              for (r.s(); !(i = r.n()).done; ) {
                var n = i.value;
                t.writeMessage(1, Ot, n);
              }
            } catch (e) {
              r.e(e);
            } finally {
              r.f();
            }
          }
        })(t, i),
        i.finish()
      );
    },
    Zt = (function () {
      return u(
        function e(r, n, o) {
          var l,
            u = this;
          s(this, e),
            (this.options = r),
            (this.initBuvidPromise = (n || ge()).then(function () {
              u.buvidInit = !0;
            })),
            (this.sequencer = o || new T());
          var c,
            f = J(
              se,
              null === (l = this.options) || void 0 === l ? void 0 : l.batch
            );
          this.scheduler = new P(
            t(
              t({}, f.enabled ? f.value : { batchSize: 1, batchTime: 0 }),
              {},
              {
                run:
                  ((c = a(
                    i().mark(function e(t) {
                      var n, o, a, s, l;
                      return i().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (a = Qt(t)),
                                (s = Gt(u.options)),
                                (null === (n = u.options) || void 0 === n
                                  ? void 0
                                  : n.logLevel) >= 2 &&
                                  ((l = d(a)
                                    .map(function (e) {
                                      return "0"
                                        .concat(e.toString(16))
                                        .slice(-2);
                                    })
                                    .join(" ")),
                                  console.log(
                                    "log_id: %c"
                                      .concat(s, "\n%crequest size: %c")
                                      .concat(
                                        a.length,
                                        " bytes\n%crequest body:\n%c"
                                      )
                                      .concat(l),
                                    "color: #0090FF",
                                    "",
                                    "color: #0090FF",
                                    "",
                                    "background-color: #004744; color: #A8F5E5"
                                  )),
                                he(a, {
                                  url:
                                    null === (o = u.options) ||
                                    void 0 === o ||
                                    null === (o = o.base) ||
                                    void 0 === o
                                      ? void 0
                                      : o.url,
                                  retry: null == r ? void 0 : r.retry,
                                  logId: s,
                                });
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  function (e) {
                    return c.apply(this, arguments);
                  }),
              }
            )
          );
        },
        [
          {
            key: "report",
            value: function (e, t, i, r) {
              var n = this,
                o = function () {
                  var o = Date.now();
                  n.scheduler.add(
                    Ht(
                      { type: e, spm: t, data: i, ts: o, options: r },
                      { reporter: n }
                    )
                  );
                };
              this.buvidInit ? o() : this.initBuvidPromise.then(o);
            },
          },
          {
            key: "flush",
            value: function () {
              this.scheduler.flush();
            },
          },
        ]
      );
    })();
  return nt.use({ native: Tt, tech: Zt }), nt;
});
