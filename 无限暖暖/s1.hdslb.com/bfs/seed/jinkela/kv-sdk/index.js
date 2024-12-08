!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e || self).KvSDK = t());
})(this, function () {
  function e() {
    return (
      (e = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      e.apply(this, arguments)
    );
  }
  function t(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function r() {
    try {
      var e = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      );
    } catch (e) {}
    return (r = function () {
      return !!e;
    })();
  }
  function n(e) {
    return (
      (n = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      n(e)
    );
  }
  function o(e, t) {
    return (
      (o = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      o(e, t)
    );
  }
  function i(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (
      (i = function (e) {
        if (
          null === e ||
          !(function (e) {
            try {
              return -1 !== Function.toString.call(e).indexOf("[native code]");
            } catch (t) {
              return "function" == typeof e;
            }
          })(e)
        )
          return e;
        if ("function" != typeof e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, i);
        }
        function i() {
          return (function (e, t, n) {
            if (r()) return Reflect.construct.apply(null, arguments);
            var i = [null];
            i.push.apply(i, t);
            var a = new (e.bind.apply(e, i))();
            return n && o(a, n.prototype), a;
          })(e, arguments, n(this).constructor);
        }
        return (
          (i.prototype = Object.create(e.prototype, {
            constructor: {
              value: i,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          o(i, e)
        );
      }),
      i(e)
    );
  }
  var a, s;
  ((s = a || (a = {})).TEST = "test"), (s.PROD = "prod");
  var u,
    c = "undefined" != typeof window;
  function p() {
    return "undefined" == typeof global
      ? "undefined" == typeof window
        ? {}
        : window
      : global;
  }
  !(function (e) {
    (e.NS_DATA = "/x/kv-frontend/namespace/data"),
      (e.APP_UPDATES = "/x/kv-frontend/app/batchupdates");
  })(u || (u = {}));
  var l = /*#__PURE__*/ (function () {
      function e() {
        this.storage = {};
      }
      var t = e.prototype;
      return (
        (t.set = function (e, t, r) {
          this.storage[e] = { value: t, ttl: Date.now() + 1e3 * r };
        }),
        (t.get = function (e) {
          var t = this.storage[e];
          return t ? t.value : null;
        }),
        (t.has = function (e) {
          var t = this.storage[e];
          return t && Date.now() <= t.ttl;
        }),
        e
      );
    })(),
    d = p(),
    f = d._KV_CORE_CACHE_ || new l();
  d._KV_CORE_CACHE_ = f;
  var v = function (e, t, r) {
      try {
        var n = (function (e, t) {
            if (e) return e;
            var r = c ? "" + window.location.protocol : "http:",
              n = "api.YmlsaWJpbGk=.com"
                .split(".")
                .map(function (e, t) {
                  return 1 === t
                    ? ((r = e),
                      "undefined" != typeof window
                        ? window.atob(r)
                        : Buffer.from(r, "base64").toString())
                    : e;
                  var r;
                })
                .join(".");
            return (
              t === a.PROD
                ? (n = n.replace(/^(?:pre-|uat-)/, ""))
                : t === a.TEST && /^api/.test(n) && (n = "pre-" + n),
              r + "//" + n
            );
          })(r.apiURL, r.env),
          o = Object.keys(t)
            .map(function (e) {
              var r = t[e];
              if (void 0 !== r) return e + "=" + encodeURIComponent(r);
            })
            .filter(function (e) {
              return e;
            })
            .join("&");
        return Promise.resolve(
          (function (e, t) {
            return new Promise((r, n) => {
              let o = new XMLHttpRequest();
              function i() {
                if (!o) return;
                const e = o.responseType,
                  t = (function (e) {
                    const t = e.trim().split(/[\r\n]+/),
                      r = {};
                    return (
                      t.forEach((e) => {
                        const t = e.split(": "),
                          n = t.shift(),
                          o = t.join(": ");
                        n && (r[n] = o);
                      }),
                      r
                    );
                  })(o.getAllResponseHeaders());
                !o.status || (o.status >= 200 && o.status <= 299)
                  ? r({
                      data: e && "text" !== e ? o.response : o.responseText,
                      status: o.status,
                      statusText: o.statusText,
                      headers: t,
                    })
                  : n(new Error(`Request Error: ${o.status} ${o.statusText}`)),
                  (o = null);
              }
              if (
                (o.open((null == t ? void 0 : t.method) || "GET", e, !0),
                (o.timeout = (null == t ? void 0 : t.timeout) || 2e3),
                (o.responseType =
                  (null == t ? void 0 : t.responseType) || "json"),
                (o.onreadystatechange = function () {
                  o &&
                    4 === o.readyState &&
                    (0 !== o.status ||
                      (o.responseURL &&
                        0 === o.responseURL.indexOf("file:"))) &&
                    setTimeout(i);
                }),
                (o.onabort = function () {
                  o && (n(new Error(`Request aborted: ${e}`)), (o = null));
                }),
                (o.onerror = function () {
                  n(new Error(`Network Error: ${e}`)), (o = null);
                }),
                (o.ontimeout = function () {
                  n(
                    null != t && t.timeout
                      ? `Timeout exceeded: ${t.timeout}`
                      : "Timeout exceeded"
                  ),
                    (o = null);
                }),
                (o.withCredentials =
                  (null == t ? void 0 : t.withCredentials) || !1),
                null != t && t.headers)
              )
                for (const e in t.headers) o.setRequestHeader(e, t.headers[e]);
              o.send((null == t ? void 0 : t.data) || null);
            });
          })("" + n + e + "?" + o, { timeout: r.timeout })
        ).then(function (e) {
          if (0 === e.data.code) return e.data.data;
          throw new w(e.data.message, e.data.code);
        });
      } catch (e) {
        return Promise.reject(e);
      }
    },
    h = p();
  h._KV_CORE_REQUEST_QUEUE_ = h._KV_CORE_REQUEST_QUEUE_ || {};
  var y,
    g,
    m,
    _,
    w = /*#__PURE__*/ (function (e) {
      var t, r;
      function n(t, r) {
        var n;
        return ((n = e.call(this, t) || this).code = void 0), (n.code = r), n;
      }
      return (
        (r = e),
        ((t = n).prototype = Object.create(r.prototype)),
        (t.prototype.constructor = t),
        o(t, r),
        n
      ); /*#__PURE__*/
    })(i(Error)),
    E = 2592e6,
    P = function (e) {
      "undefined" != typeof window &&
        window.__BILI_X_ENGINE_SCRIPT_CACHE__ &&
        void 0 !== window.__BILI_X_ENGINE_SCRIPT_CACHE__[e] &&
        delete window.__BILI_X_ENGINE_SCRIPT_CACHE__[e];
    };
  !(function (e) {
    (e[(e.NON_STRICT = 0)] = "NON_STRICT"), (e[(e.STRICT = 1)] = "STRICT");
  })(y || (y = {})),
    (function (e) {
      (e.TEST = "test"), (e.PROD = "prod");
    })(g || (g = {})),
    (function (e) {
      (e.KEY = "key"), (e.GROUP = "group"), (e.APP = "app");
    })(m || (m = {})),
    (function (e) {
      (e.PV = "333.1334.kv-init.pv"),
        (e.ERROR = "333.1334.kv-init.error"),
        (e.VERSION = "333.1334.kv-version.pv");
    })(_ || (_ = {}));
  var S = /*#__PURE__*/ (function () {
      function r() {
        (this.queue = []), (this.reporter = void 0), (this.loading = !1);
      }
      var n = r.prototype;
      return (
        (n.init = function () {
          try {
            var e = this;
            return Promise.resolve(
              (function (t, r) {
                try {
                  var n = (function () {
                    if (
                      !e.reporter &&
                      "undefined" != typeof window &&
                      !e.loading
                    )
                      return (
                        (e.loading = !0),
                        Promise.resolve(
                          ((t = {
                            spmPrefix: "333.1334",
                            sampleRate: 1,
                            autoPv: !1,
                            retry: !1,
                            feature: { tech: !0 },
                          }),
                          Promise.resolve(
                            (function () {
                              try {
                                return window.ReporterPb
                                  ? Promise.resolve(window.ReporterPb)
                                  : Promise.resolve(
                                      (function (e, t) {
                                        if ("undefined" == typeof window)
                                          return Promise.reject(
                                            new Error("window is not defined")
                                          );
                                        var r = (e = e.replace(
                                            /^https?:\/\//,
                                            "//"
                                          )),
                                          n =
                                            "undefined" == typeof window
                                              ? null
                                              : (window.__BILI_X_ENGINE_SCRIPT_CACHE__ &&
                                                  window
                                                    .__BILI_X_ENGINE_SCRIPT_CACHE__[
                                                    r
                                                  ]) ||
                                                null;
                                        if (null != n && n.promise)
                                          return n.promise;
                                        var o,
                                          i,
                                          a = new Promise(function (r, n) {
                                            var o =
                                              document.createElement("script");
                                            (o.src = e),
                                              null != t &&
                                                t.behavior &&
                                                o.setAttribute(t.behavior, ""),
                                              (o.onload = function () {
                                                var o = window;
                                                if (t.lib)
                                                  return o[t.lib]
                                                    ? r(o[t.lib])
                                                    : n(
                                                        new Error(
                                                          'Failed to access library "' +
                                                            t.lib +
                                                            '" from ' +
                                                            e
                                                        )
                                                      );
                                                r(null);
                                              }),
                                              (o.onerror = function () {
                                                n(
                                                  new Error(
                                                    "Failed to load " + e
                                                  )
                                                );
                                              }),
                                              document.head.appendChild(o);
                                          });
                                        return (
                                          (o = r),
                                          (i = {
                                            promise: a,
                                            lib: null == t ? void 0 : t.lib,
                                          }),
                                          "undefined" != typeof window &&
                                            (window.__BILI_X_ENGINE_SCRIPT_CACHE__ ||
                                              (window.__BILI_X_ENGINE_SCRIPT_CACHE__ =
                                                {}),
                                            (window.__BILI_X_ENGINE_SCRIPT_CACHE__[
                                              o
                                            ] = i)),
                                          a
                                            .then(function () {
                                              !1 ===
                                                (null == t
                                                  ? void 0
                                                  : t.cache) && P(r);
                                            })
                                            .catch(function () {
                                              !1 ===
                                                (null == t
                                                  ? void 0
                                                  : t.cache) && P(r);
                                            }),
                                          a
                                        );
                                      })(
                                        "//s1.hdslb.com/bfs/seed/jinkela/short/reporter-pb/index.js",
                                        { lib: "ReporterPb" }
                                      )
                                    );
                              } catch (e) {
                                return Promise.reject(e);
                              }
                            })()
                          ).then(function (e) {
                            return new e(t);
                          }))
                        ).then(function (t) {
                          (e.reporter = t), (e.loading = !1), e.reportQueue();
                        })
                      );
                    var t;
                  })();
                } catch (e) {
                  return r(e);
                }
                return n && n.then ? n.then(void 0, r) : n;
              })(0, function (t) {
                (e.loading = !1), console.error(t);
              })
            );
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (n.reportQueue = function () {
          if (this.reporter)
            for (
              var e,
                r = (function (e, r) {
                  var n =
                    ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
                  if (n) return (n = n.call(e)).next.bind(n);
                  if (
                    Array.isArray(e) ||
                    (n = (function (e, r) {
                      if (e) {
                        if ("string" == typeof e) return t(e, r);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return (
                          "Object" === n &&
                            e.constructor &&
                            (n = e.constructor.name),
                          "Map" === n || "Set" === n
                            ? Array.from(e)
                            : "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? t(e, r)
                            : void 0
                        );
                      }
                    })(e))
                  ) {
                    n && (e = n);
                    var o = 0;
                    return function () {
                      return o >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[o++] };
                    };
                  }
                  throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })(this.queue);
              !(e = r()).done;

            ) {
              var n = e.value;
              this.report(n.event, n.value);
            }
        }),
        (n.report = function (t, r) {
          void 0 === r && (r = {});
          try {
            if (!this.reporter)
              return this.queue.push({ event: t, value: r }), void this.init();
            var n = e({ type: t === _.ERROR ? "error" : "custom" }, r);
            this.reporter.tech(t, n);
          } catch (e) {
            console.error(e);
          }
        }),
        r
      );
    })(),
    R = new S(),
    I = "KV_CONFIG_SDK",
    b = /*#__PURE__*/ (function () {
      function t(e) {
        var t = e.appKey,
          r = e.nscode,
          n = e.env;
        (this.appKey = void 0),
          (this.appKeyStorageName = void 0),
          (this.appKey = t),
          (this.appKeyStorageName =
            n === a.TEST ? t + "_" + r + "_test" : t + "_" + r),
          this.checkLocalStorage();
      }
      var r = t.prototype;
      return (
        (r.checkLocalStorage = function () {
          var e = t.getLocalStorage();
          if (e) {
            for (var r in e) {
              var n = new Date().getTime();
              e[r].timestamp + e[r].expires < n && delete e[r];
            }
            Object.keys(e).length > 40 &&
              Object.keys(e)
                .sort(function (t, r) {
                  return e[t].lastUsed - e[r].lastUsed;
                })
                .slice(40)
                .forEach(function (t) {
                  delete e[t];
                }),
              t.setLocalStorage(e);
          }
        }),
        (r.getAppKey = function () {
          var e = t.getLocalStorage() || {};
          return e[this.appKeyStorageName]
            ? ((e[this.appKeyStorageName].lastUsed = new Date().getTime()),
              t.setLocalStorage(e),
              e[this.appKeyStorageName] || {})
            : {};
        }),
        (r.setAppkey = function (r) {
          var n = e(
              {
                timestamp: new Date().getTime(),
                lastUsed: new Date().getTime(),
              },
              r
            ),
            o = t.getLocalStorage() || {};
          (o[this.appKeyStorageName] = n), t.setLocalStorage(o);
        }),
        (t.getLocalStorage = function () {
          var e;
          try {
            var t;
            (e = null == (t = localStorage) ? void 0 : t.getItem(I)) &&
              (e = JSON.parse(e));
          } catch (t) {
            console.error("从本地获取" + I + "的时候异常", t),
              (e = void 0),
              R.report(_.ERROR, {
                message: "从本地获取" + I + "的时候异常" + (t.message || ""),
              });
          }
          return e;
        }),
        (t.setLocalStorage = function (e) {
          try {
            localStorage && localStorage.setItem(I, JSON.stringify(e));
          } catch (e) {
            !(function (e) {
              var t = !1;
              if (e)
                if (e.code)
                  switch (e.code) {
                    case 22:
                      t = !0;
                      break;
                    case 1014:
                      "NS_ERROR_DOM_QUOTA_REACHED" === e.name && (t = !0);
                  }
                else -2147024882 === e.number && (t = !0);
              return t;
            })(e)
              ? (console.log("storage 更新失败", e),
                R.report(_.ERROR, {
                  message: "storage 更新失败" + (e.message || ""),
                }))
              : (console.log("storage 超出浏览器限制", e),
                R.report(_.ERROR, {
                  message: "storage 超出浏览器限制" + (e.message || ""),
                }));
          }
        }),
        t
      );
    })();
  function T(e, t) {
    try {
      var r = e();
    } catch (e) {
      return t(e);
    }
    return r && r.then ? r.then(void 0, t) : r;
  }
  var O = /*#__PURE__*/ (function () {
    function t(t) {
      (this.options = {
        appKey: "",
        apiURL: "",
        nscode: 0,
        expires: E,
        strict: y.STRICT,
        reporter: { ignoreAppKeyNotFound: !1 },
      }),
        (this.storage = void 0),
        (this.fetchPromise = void 0),
        (this.flattenValue = {}),
        (this.nestedValue = {}),
        (this.versionId = void 0);
      var r = t.appKey,
        n = t.expires,
        o = void 0 === n ? E : n;
      if (!r)
        return (
          R.report(_.ERROR, { message: "no appkey passed" }),
          void console.warn("appKey is required")
        );
      (this.options = e({}, this.options, t, { expires: Math.min(o, E) })),
        (this.storage = new b({
          appKey: r,
          nscode: this.options.nscode,
          env: this.options.env,
        }));
      var i = this.storage.getAppKey(),
        a = i.value,
        s = i.versionId;
      (this.versionId = s),
        this.updateValue(a || {}),
        (this.options.strict !== y.NON_STRICT || t.autoFetch) &&
          (this.fetchPromise = this.fetchAppKey(s)),
        this.report(_.PV);
    }
    var r = t.prototype;
    return (
      (r.getAll = function () {
        try {
          return Promise.resolve(this.getBase(m.APP));
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      (r.getGroup = function (e) {
        try {
          return Promise.resolve(this.getBase(m.GROUP, e));
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      (r.get = function (e) {
        try {
          return Promise.resolve(this.getBase(m.KEY, e));
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      (r.getAllSync = function () {
        return this.getBaseSync(m.APP);
      }),
      (r.getGroupSync = function (e) {
        return this.getBaseSync(m.GROUP, e);
      }),
      (r.getSync = function (e) {
        return this.getBaseSync(m.KEY, e);
      }),
      (r.getBaseSync = function (e, t) {
        if ((void 0 === t && (t = ""), e === m.APP)) return this.nestedValue;
        if (e === m.GROUP) return this.nestedValue[t] || {};
        var r = t.split("."),
          n = r[0];
        return this.nestedValue[n] ? this.nestedValue[n][r[1]] : "";
      }),
      (r.getBase = function (e, t) {
        void 0 === t && (t = "");
        try {
          var r = this;
          return Promise.resolve(
            r.options.strict === y.NON_STRICT
              ? r.getBaseSync(e, t)
              : r.fetchPromise.then(function () {
                  return r.getBaseSync(e, t);
                })
          );
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      (r.fetchAppKey = function (e) {
        try {
          var t = this,
            r = t.options,
            n = r.appKey,
            o = r.nscode,
            i = r.env,
            a = T(
              function () {
                return Promise.resolve(
                  ((r = { appKey: n, versionId: e, nscode: o, env: i }),
                  (a =
                    "kv-sdk:" + r.appKey + ":" + r.nscode + ":" + r.versionId),
                  f.has(a) ||
                    f.set(
                      a,
                      (function (e) {
                        try {
                          return v(
                            u.NS_DATA,
                            {
                              appKey: e.appKey,
                              nscode: e.nscode || 0,
                              versionId: e.versionId,
                            },
                            e
                          );
                        } catch (e) {
                          return Promise.reject(e);
                        }
                      })(r).catch(function (e) {
                        throw (-304 !== e.code && delete f.storage[a], e);
                      }),
                      10
                    ),
                  f.get(a))
                ).then(function (e) {
                  t.storage.setAppkey({
                    value: e.data,
                    versionId: e.versionId,
                    appVersionId: e.appVersionId,
                    nscode: o,
                    appKey: t.options.appKey,
                    expires: t.options.expires,
                  }),
                    (t.versionId = e.versionId),
                    t.updateValue(e.data);
                });
                var r, a;
              },
              function (e) {
                var r;
                -304 === e.code ||
                  (null != (r = t.options.reporter) &&
                    r.ignoreAppKeyNotFound &&
                    -404 === e.code) ||
                  t.report(_.ERROR, {
                    message: e.message || e.msg || "获取失败",
                  });
              }
            );
          return Promise.resolve(a && a.then ? a.then(function () {}) : void 0);
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      (t.updateLocalAppKey = function (t) {
        try {
          return Promise.resolve(
            T(
              function () {
                var r = t.appKey,
                  n = t.appVersionId,
                  o = b.getLocalStorage();
                if (o) {
                  var i = Object.keys(o)
                    .filter(function (e) {
                      return o[e].appKey === r && o[e].appVersionId !== n;
                    })
                    .map(function (e) {
                      return o[e];
                    });
                  if (i.length)
                    return Promise.resolve(
                      (function (e) {
                        try {
                          return v(
                            u.APP_UPDATES,
                            {
                              appKey: e.appKey,
                              batches: JSON.stringify(e.batches),
                            },
                            e
                          );
                        } catch (e) {
                          return Promise.reject(e);
                        }
                      })({
                        appKey: r,
                        batches: i.map(function (e) {
                          return {
                            appVersionId: e.appVersionId,
                            nscode: e.nscode,
                          };
                        }),
                      })
                    ).then(function (t) {
                      var n = b.getLocalStorage() || {};
                      t.forEach(function (t) {
                        var o = r + "_" + t.nscode;
                        if (t.deleted) delete n[o];
                        else if (t.updated) {
                          var i = {
                            timestamp: new Date().getTime(),
                            value: t.data,
                            versionId: t.versionId,
                            appVersionId: t.appVersionId,
                            nscode: t.nscode,
                            appKey: r,
                          };
                          n[o] = e({}, n[o] || {}, i);
                        }
                      }),
                        b.setLocalStorage(n);
                    });
                }
              },
              function (e) {
                -304 !== e.code && console.error(e);
              }
            )
          );
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      (r.updateValue = function (e) {
        var t = this;
        this.flattenValue = e;
        var r = {};
        Object.keys(this.flattenValue).forEach(function (e) {
          var n = e.split("."),
            o = n[0],
            i = n[1];
          r[o] || (r[o] = {}), (r[o][i] = t.flattenValue[e]);
        }),
          (this.nestedValue = r);
      }),
      (r.report = function (t, r) {
        void 0 === r && (r = {}),
          R.report(
            t,
            e(
              {
                appKey: this.options.appKey,
                nscode: this.options.nscode,
                sdkVersion: "1.3.15",
              },
              r
            )
          );
      }),
      t
    );
  })();
  return O;
});
