!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(
        ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).biliMirror = {})
      );
})(this, function (e) {
  "use strict";
  function t(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          a(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function c(e) {
        try {
          a(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, c);
      }
      a((r = r.apply(e, t || [])).next());
    });
  }
  "function" == typeof SuppressedError && SuppressedError;
  let n = !1;
  function r() {
    return !1 === n && (n = "undefined" != typeof window), n;
  }
  var o;
  const i = (function () {
    if (r()) return window;
  })();
  function s() {
    if (r())
      return (i.__biliMirror__ = i.__biliMirror__ || {}), i.__biliMirror__;
  }
  const c =
    (r() &&
      (null === (o = document.getElementsByTagName("meta").spm_prefix) ||
      void 0 === o
        ? void 0
        : o.content)) ||
    "0.0";
  function a(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    e.addEventListener(t, n, r);
  }
  function l() {
    return Date.now();
  }
  const u = Object.prototype.toString;
  function d(e) {
    return function (t) {
      return u.call(t) === `[object ${e}]`;
    };
  }
  const f = {
    isNumber: d("Number"),
    isString: d("String"),
    isBoolean: d("Boolean"),
    isNull: d("Null"),
    isUndefined: d("Undefined"),
    isSymbol: d("Symbol"),
    isFunction: d("Function"),
    isObject: d("Object"),
    isArray: d("Array"),
    isProcess: d("process"),
    isWindow: d("Window"),
  };
  function h(e) {
    const t = /^[0-9a-zA-Z_-]+$/.test(e);
    return (
      t ||
        console.warn(
          `字符串:${e},不符合条件,任意数字,字母、下划线、中划线组成`
        ),
      t
    );
  }
  const p = function (e) {
      let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : ["chrome-extension"],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (0 === t.length) return !1;
      if (null == (null == e ? void 0 : e.message)) return !0;
      const [r] = e.message.split("?");
      if (r.includes(location.hostname)) return !0;
      const o = (null == e ? void 0 : e.fileName) || "";
      if (n && !o.endsWith(".js")) return !0;
      try {
        return t
          .map((e) => new RegExp(String.raw`${e}`))
          .some((e) => e.test(r) || e.test(o));
      } catch (e) {
        return console.error("Invalid regular expression:", e), !1;
      }
    },
    m = function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      if (0 === e.length) return !1;
      try {
        return e.some((e) =>
          new RegExp(String.raw`${e}`).test(navigator.userAgent)
        );
      } catch (e) {
        return !1;
      }
    };
  function g(e) {
    if ("0" === e) return 0;
    if (f.isNumber(e)) return e > 10 ? 10 : e <= 0 ? 1 : e;
    if (f.isString(e) && !isNaN(e)) {
      const t = parseInt(e);
      return t > 10 ? 10 : t <= 0 ? 1 : t;
    }
    return (
      console.warn("mirror-kv-[config] sampling rate error,please set 1-10"), 1
    );
  }
  function v() {
    return "undefined" == typeof document || null == document.location
      ? ""
      : document.location.href;
  }
  function y(e) {
    if (!e) return {};
    const t = e.match(
      /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
    );
    if (!t) return {};
    const n = t[6] || "",
      r = t[8] || "";
    return { host: t[4], path: t[5], protocol: t[2], relative: t[5] + n + r };
  }
  function b(e, t, n) {
    if (
      void 0 !== e &&
      (t in e ||
        (arguments.length > 3 && void 0 !== arguments[3] && arguments[3]))
    ) {
      const r = n(e[t]);
      "function" == typeof r && (e[t] = r);
    }
  }
  const w = (e, t) => {
      let n = !0;
      return function () {
        if (n) {
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          e.apply(this, o),
            (n = !1),
            setTimeout(() => {
              n = !0;
            }, t);
        }
      };
    },
    E = (e, t) => {
      let n;
      return function () {
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
          o[i] = arguments[i];
        clearTimeout(n),
          (n = setTimeout(() => {
            e.apply(this, o);
          }, t));
      };
    };
  function R(e) {
    return e && "object" == typeof e && !Array.isArray(e);
  }
  function O(e, t) {
    let n = Object.assign({}, e);
    return (
      R(e) &&
        R(t) &&
        Object.keys(t).forEach((r) => {
          R(t[r])
            ? r in e
              ? (n[r] = O(e[r], t[r]))
              : Object.assign(n, { [r]: t[r] })
            : Object.assign(n, { [r]: t[r] });
        }),
      n
    );
  }
  var S = "1.6.28";
  const I = "@bilibili/bili-mirror",
    T = S;
  var _ = function (e) {
      "undefined" != typeof window &&
        window.__BILI_X_ENGINE_SCRIPT_CACHE__ &&
        void 0 !== window.__BILI_X_ENGINE_SCRIPT_CACHE__[e] &&
        delete window.__BILI_X_ENGINE_SCRIPT_CACHE__[e];
    },
    C = function (e, t) {
      if ("undefined" == typeof window)
        return Promise.reject(new Error("window is not defined"));
      var n,
        r = (e = e.replace(/^https?:\/\//, "//")),
        o =
          ((n = r),
          "undefined" == typeof window
            ? null
            : (window.__BILI_X_ENGINE_SCRIPT_CACHE__ &&
                window.__BILI_X_ENGINE_SCRIPT_CACHE__[n]) ||
              null);
      if (null != o && o.promise) return o.promise;
      var i = new Promise(function (n, r) {
        var o = document.createElement("script");
        (o.src = e),
          null != t && t.behavior && o.setAttribute(t.behavior, ""),
          (o.onload = function () {
            var o = window;
            if (t.lib)
              return o[t.lib]
                ? n(o[t.lib])
                : r(
                    new Error(
                      'Failed to access library "' + t.lib + '" from ' + e
                    )
                  );
            n(null);
          }),
          (o.onerror = function () {
            r(new Error("Failed to load " + e));
          }),
          document.head.appendChild(o);
      });
      return (
        (function (e, t) {
          "undefined" != typeof window &&
            (window.__BILI_X_ENGINE_SCRIPT_CACHE__ ||
              (window.__BILI_X_ENGINE_SCRIPT_CACHE__ = {}),
            (window.__BILI_X_ENGINE_SCRIPT_CACHE__[e] = t));
        })(r, { promise: i, lib: null == t ? void 0 : t.lib }),
        i
          .then(function () {
            !1 === (null == t ? void 0 : t.cache) && _(r);
          })
          .catch(function () {
            !1 === (null == t ? void 0 : t.cache) && _(r);
          }),
        i
      );
    },
    P = function (e) {
      return Promise.resolve(
        (function () {
          try {
            return window.KvSDK
              ? Promise.resolve(window.KvSDK)
              : Promise.resolve(
                  C("//s1.hdslb.com/bfs/seed/jinkela/kv-sdk/index.js", {
                    lib: "KvSDK",
                  })
                );
          } catch (e) {
            return Promise.reject(e);
          }
        })()
      ).then(function (t) {
        return new t(e);
      });
    },
    N = function (e) {
      return Promise.resolve(
        (function () {
          try {
            return window.ReporterPb
              ? Promise.resolve(window.ReporterPb)
              : Promise.resolve(
                  C(
                    "//s1.hdslb.com/bfs/seed/jinkela/short/reporter-pb/index.js",
                    { lib: "ReporterPb" }
                  )
                );
          } catch (e) {
            return Promise.reject(e);
          }
        })()
      ).then(function (t) {
        return new t(e);
      });
    };
  const k = s(),
    A = {
      SPMID: "333.1333",
      GROUP: "bilimirror",
      KEY: "whitelist",
      KEYTOP: "toplist",
    };
  class L {
    constructor() {
      (this.origin = "bili"),
        (this.module = "common"),
        (this.config = {}),
        (this.kvOptions = {}),
        (this._defaultKvConfig = {
          performance: 1,
          poll: 5,
          techpv: 5,
          userLog: [],
          resourceTime: {},
          userLogDeep: 10,
          track: {},
          filterEndJs: !1,
        });
    }
    fetchWhiteListConfig(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return new Promise((r, o) => {
        e.get(t)
          .then((t) => {
            if (!t)
              return (
                n ||
                  console.warn(`${e.storage.appKey}-没有对应配置,返回默认配置`),
                void r(n ? this._defaultKvConfig : {})
              );
            const o = JSON.parse(t);
            r(o);
          })
          .catch((t) => {
            console.warn(
              `${e.storage.appKey},mirror获取白名单配置失败,返回默认配置`
            ),
              r(this._defaultKvConfig);
          });
      });
    }
    getConfig() {
      return t(this, void 0, void 0, function* () {
        this._defaultConfigSDK = yield P(
          Object.assign(
            {
              appKey: A.SPMID,
              strict: 1,
              reporter: { ignoreAppKeyNotFound: !0 },
            },
            this.kvOptions
          )
        );
        const { SPMID: e, GROUP: t, KEY: n, KEYTOP: r } = A,
          o = this.spmId || c,
          i = yield this.fetchWhiteListConfig(
            this._defaultConfigSDK,
            `${t}.${n}`,
            !0
          ),
          s = yield this.fetchWhiteListConfig(
            this._defaultConfigSDK,
            `${t}.${r}`,
            !0
          );
        let a = {};
        e !== o &&
          (this._configSDK && delete this._configSDK,
          (this._configSDK = yield P(
            Object.assign(
              { appKey: o, strict: 1, reporter: { ignoreAppKeyNotFound: !0 } },
              this.kvOptions
            )
          )),
          (a = yield this.fetchWhiteListConfig(this._configSDK, `${t}.${n}`)));
        let l = O(i, a);
        return (
          (l = O(l, s)),
          new Promise((e) => {
            (this.config.white = (null == l ? void 0 : l.white) || {}),
              (this.config["white-performance-rate"] = l.performance
                ? g(null == l ? void 0 : l.performance)
                : 1),
              (this.config["poll-time"] = l.poll
                ? g(null == l ? void 0 : l.poll)
                : 5),
              (this.config["tech-pv"] = l.techpv
                ? g(null == l ? void 0 : l.techpv)
                : 5),
              (this.config["user-log"] =
                (null == l ? void 0 : l.userLog) || []),
              (this.config["resource-time"] =
                (null == l ? void 0 : l.resourceTime) || {}),
              (this.config["user-log-deep"] =
                (null == l ? void 0 : l.userLogDeep) || 10),
              (this.config.track = (null == l ? void 0 : l.track) || {}),
              (this.config["filter-end-js"] =
                (null == l ? void 0 : l.filterEndjs) || !1),
              (this.config["player-log-umd"] =
                (null == l ? void 0 : l.playLogUmd) || ""),
              (this.config["track-gray"] =
                (null == l ? void 0 : l.trackGrayV2) || 0),
              e();
          })
        );
      });
    }
    bindOptions() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return t(this, void 0, void 0, function* () {
        return (
          (k.mirrorVersion = T),
          Object.keys(e).forEach((t) => {
            "config" !== t &&
              ("module" === t && "function" == typeof e[t]
                ? (this[t] = e[t]())
                : (this[t] = e[t]));
          }),
          yield this.getConfig(),
          Promise.resolve("ok")
        );
      });
    }
    updateModule(e) {
      this.module = e;
    }
  }
  function j() {
    return k.options || (k.options = new L());
  }
  const x = r() ? j() : null;
  function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return t(this, void 0, void 0, function* () {
      if (r()) {
        return yield x.bindOptions(e);
      }
    });
  }
  var $,
    D = -1,
    H = function (e) {
      addEventListener(
        "pageshow",
        function (t) {
          t.persisted && ((D = t.timeStamp), e(t));
        },
        !0
      );
    },
    B = function () {
      var e =
        self.performance &&
        performance.getEntriesByType &&
        performance.getEntriesByType("navigation")[0];
      if (e && e.responseStart > 0 && e.responseStart < performance.now())
        return e;
    },
    F = function () {
      var e = B();
      return (e && e.activationStart) || 0;
    },
    U = function (e, t) {
      var n = B(),
        r = "navigate";
      return (
        D >= 0
          ? (r = "back-forward-cache")
          : n &&
            (document.prerendering || F() > 0
              ? (r = "prerender")
              : document.wasDiscarded
              ? (r = "restore")
              : n.type && (r = n.type.replace(/_/g, "-"))),
        {
          name: e,
          value: void 0 === t ? -1 : t,
          rating: "good",
          delta: 0,
          entries: [],
          id: "v4-"
            .concat(Date.now(), "-")
            .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
          navigationType: r,
        }
      );
    },
    K = function (e, t, n) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
          var r = new PerformanceObserver(function (e) {
            Promise.resolve().then(function () {
              t(e.getEntries());
            });
          });
          return (
            r.observe(Object.assign({ type: e, buffered: !0 }, n || {})), r
          );
        }
      } catch (e) {}
    },
    G = function (e, t, n, r) {
      var o, i;
      return function (s) {
        t.value >= 0 &&
          (s || r) &&
          ((i = t.value - (o || 0)) || void 0 === o) &&
          ((o = t.value),
          (t.delta = i),
          (t.rating = (function (e, t) {
            return e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good";
          })(t.value, n)),
          e(t));
      };
    },
    W = function (e) {
      requestAnimationFrame(function () {
        return requestAnimationFrame(function () {
          return e();
        });
      });
    },
    J = function (e) {
      document.addEventListener("visibilitychange", function () {
        "hidden" === document.visibilityState && e();
      });
    },
    q = function (e) {
      var t = !1;
      return function () {
        t || (e(), (t = !0));
      };
    },
    V = -1,
    Y = function () {
      return "hidden" !== document.visibilityState || document.prerendering
        ? 1 / 0
        : 0;
    },
    X = function (e) {
      "hidden" === document.visibilityState &&
        V > -1 &&
        ((V = "visibilitychange" === e.type ? e.timeStamp : 0), Q());
    },
    z = function () {
      addEventListener("visibilitychange", X, !0),
        addEventListener("prerenderingchange", X, !0);
    },
    Q = function () {
      removeEventListener("visibilitychange", X, !0),
        removeEventListener("prerenderingchange", X, !0);
    },
    Z = function () {
      return (
        V < 0 &&
          ((V = Y()),
          z(),
          H(function () {
            setTimeout(function () {
              (V = Y()), z();
            }, 0);
          })),
        {
          get firstHiddenTime() {
            return V;
          },
        }
      );
    },
    ee = function (e) {
      document.prerendering
        ? addEventListener(
            "prerenderingchange",
            function () {
              return e();
            },
            !0
          )
        : e();
    },
    te = [1800, 3e3],
    ne = function (e, t) {
      (t = t || {}),
        ee(function () {
          var n,
            r = Z(),
            o = U("FCP"),
            i = K("paint", function (e) {
              e.forEach(function (e) {
                "first-contentful-paint" === e.name &&
                  (i.disconnect(),
                  e.startTime < r.firstHiddenTime &&
                    ((o.value = Math.max(e.startTime - F(), 0)),
                    o.entries.push(e),
                    n(!0)));
              });
            });
          i &&
            ((n = G(e, o, te, t.reportAllChanges)),
            H(function (r) {
              (o = U("FCP")),
                (n = G(e, o, te, t.reportAllChanges)),
                W(function () {
                  (o.value = performance.now() - r.timeStamp), n(!0);
                });
            }));
        });
    },
    re = [0.1, 0.25],
    oe = 0,
    ie = 1 / 0,
    se = 0,
    ce = function (e) {
      e.forEach(function (e) {
        e.interactionId &&
          ((ie = Math.min(ie, e.interactionId)),
          (se = Math.max(se, e.interactionId)),
          (oe = se ? (se - ie) / 7 + 1 : 0));
      });
    },
    ae = function () {
      return $ ? oe : performance.interactionCount || 0;
    },
    le = function () {
      "interactionCount" in performance ||
        $ ||
        ($ = K("event", ce, {
          type: "event",
          buffered: !0,
          durationThreshold: 0,
        }));
    },
    ue = [],
    de = new Map(),
    fe = 0,
    he = [],
    pe = function (e) {
      if (
        (he.forEach(function (t) {
          return t(e);
        }),
        e.interactionId || "first-input" === e.entryType)
      ) {
        var t = ue[ue.length - 1],
          n = de.get(e.interactionId);
        if (n || ue.length < 10 || e.duration > t.latency) {
          if (n)
            e.duration > n.latency
              ? ((n.entries = [e]), (n.latency = e.duration))
              : e.duration === n.latency &&
                e.startTime === n.entries[0].startTime &&
                n.entries.push(e);
          else {
            var r = { id: e.interactionId, latency: e.duration, entries: [e] };
            de.set(r.id, r), ue.push(r);
          }
          ue.sort(function (e, t) {
            return t.latency - e.latency;
          }),
            ue.length > 10 &&
              ue.splice(10).forEach(function (e) {
                return de.delete(e.id);
              });
        }
      }
    },
    me = function (e) {
      var t = self.requestIdleCallback || self.setTimeout,
        n = -1;
      return (
        (e = q(e)),
        "hidden" === document.visibilityState ? e() : ((n = t(e)), J(e)),
        n
      );
    },
    ge = [200, 500],
    ve = function (e, t) {
      "PerformanceEventTiming" in self &&
        "interactionId" in PerformanceEventTiming.prototype &&
        ((t = t || {}),
        ee(function () {
          var n;
          le();
          var r,
            o = U("INP"),
            i = function (e) {
              me(function () {
                e.forEach(pe);
                var t = (function () {
                  var e = Math.min(ue.length - 1, Math.floor((ae() - fe) / 50));
                  return ue[e];
                })();
                t &&
                  t.latency !== o.value &&
                  ((o.value = t.latency), (o.entries = t.entries), r());
              });
            },
            s = K("event", i, {
              durationThreshold:
                null !== (n = t.durationThreshold) && void 0 !== n ? n : 40,
            });
          (r = G(e, o, ge, t.reportAllChanges)),
            s &&
              (s.observe({ type: "first-input", buffered: !0 }),
              J(function () {
                i(s.takeRecords()), r(!0);
              }),
              H(function () {
                (fe = ae()),
                  (ue.length = 0),
                  de.clear(),
                  (o = U("INP")),
                  (r = G(e, o, ge, t.reportAllChanges));
              }));
        }));
    },
    ye = [2500, 4e3],
    be = {},
    we = [800, 1800],
    Ee = function e(t) {
      document.prerendering
        ? ee(function () {
            return e(t);
          })
        : "complete" !== document.readyState
        ? addEventListener(
            "load",
            function () {
              return e(t);
            },
            !0
          )
        : setTimeout(t, 0);
    },
    Re = function (e, t) {
      t = t || {};
      var n = U("TTFB"),
        r = G(e, n, we, t.reportAllChanges);
      Ee(function () {
        var o = B();
        o &&
          ((n.value = Math.max(o.responseStart - F(), 0)),
          (n.entries = [o]),
          r(!0),
          H(function () {
            (n = U("TTFB", 0)), (r = G(e, n, we, t.reportAllChanges))(!0);
          }));
      });
    };
  const Oe = (e) =>
    !!r() &&
    (() => {
      try {
        return r() && PerformanceObserver
          ? PerformanceObserver.supportedEntryTypes || []
          : null;
      } catch (e) {
        console.error("bili-mirror: supportList 解析异常:", e);
      }
    })().includes(e);
  function Se(e) {
    window.performance.getEntriesByType &&
      window.addEventListener("load", function () {
        const t = window.performance;
        t &&
          setTimeout(() => {
            const n = t.getEntriesByType("navigation")[0],
              r = {
                redirectTime: n.redirectEnd - n.redirectStart,
                dnsTime: n.domainLookupEnd - n.domainLookupStart,
                tcpTime: n.connectEnd - n.connectStart,
                sslTime:
                  "https:" === location.protocol
                    ? n.connectEnd - n.secureConnectionStart
                    : 0,
                ttfbTime: n.responseStart - n.startTime,
                requestDoneTime: n.responseEnd - n.responseStart,
                domParseTime: n.domContentLoadedEventEnd - n.responseEnd,
                resourceDownloadTime:
                  n.loadEventEnd - n.domContentLoadedEventEnd,
                pageTime: n.duration,
              };
            e({ name: "PAGETIME", data: r, value: 1 });
          }, 0);
      });
  }
  function Ie(e) {
    /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
      ? (!(function (e) {
          if (!Oe("first-input")) return;
          const t = new PerformanceObserver((n) => {
            for (const r of n.getEntries()) {
              t.disconnect();
              const n = r.processingStart - r.startTime;
              e({
                name: "FID",
                value: n,
                rating:
                  n < 100 ? "good" : n > 100 && n < 300 ? "normal" : "poor",
              });
            }
          });
          t.observe({ type: "first-input", buffered: !0 });
        })((t) => {
          e(t);
        }),
        (function (e) {
          if (!Oe("paint")) return;
          const t = new PerformanceObserver((n) => {
            for (const r of n.getEntries())
              "first-contentful-paint" === r.name &&
                (t.disconnect(),
                e({
                  name: "FCP",
                  value: r.startTime,
                  rating:
                    r.startTime < 1600
                      ? "good"
                      : r.startTime > 1600 && r.startTime < 3e3
                      ? "normal"
                      : "poor",
                }));
          });
          t.observe({ type: "paint", buffered: !0 });
        })((t) => {
          e(t);
        }),
        (function (e) {
          if (!Oe("largest-contentful-paint")) return;
          const t = new PerformanceObserver((n) => {
            for (const r of n.getEntries())
              t.disconnect(),
                e({
                  name: "LCP",
                  value: r.startTime,
                  rating:
                    r.startTime < 1600
                      ? "good"
                      : r.startTime > 1600 && r.startTime < 3e3
                      ? "normal"
                      : "poor",
                });
          });
          t.observe({ type: "largest-contentful-paint", buffered: !0 });
        })((t) => {
          e(t);
        }),
        (function (e) {
          window.addEventListener("load", function () {
            let { responseStart: t, navigationStart: n } =
                window.performance.timing,
              r = t - n;
            e({
              name: "TTFB",
              value: r,
              rating: r < 200 ? "good" : r > 200 && r < 500 ? "normal" : "poor",
            });
          });
        })((t) => {
          e(t);
        }),
        Se((t) => {
          e(t);
        }))
      : (!(function (e, t) {
          (t = t || {}),
            ee(function () {
              var n,
                r = Z(),
                o = U("LCP"),
                i = function (e) {
                  t.reportAllChanges || (e = e.slice(-1)),
                    e.forEach(function (e) {
                      e.startTime < r.firstHiddenTime &&
                        ((o.value = Math.max(e.startTime - F(), 0)),
                        (o.entries = [e]),
                        n());
                    });
                },
                s = K("largest-contentful-paint", i);
              if (s) {
                n = G(e, o, ye, t.reportAllChanges);
                var c = q(function () {
                  be[o.id] ||
                    (i(s.takeRecords()),
                    s.disconnect(),
                    (be[o.id] = !0),
                    n(!0));
                });
                ["keydown", "click"].forEach(function (e) {
                  addEventListener(
                    e,
                    function () {
                      return me(c);
                    },
                    !0
                  );
                }),
                  J(c),
                  H(function (r) {
                    (o = U("LCP")),
                      (n = G(e, o, ye, t.reportAllChanges)),
                      W(function () {
                        (o.value = performance.now() - r.timeStamp),
                          (be[o.id] = !0),
                          n(!0);
                      });
                  });
              }
            });
        })((t) => {
          e(t);
        }),
        ve((t) => {
          e(t);
        }),
        (function (e, t) {
          (t = t || {}),
            ne(
              q(function () {
                var n,
                  r = U("CLS", 0),
                  o = 0,
                  i = [],
                  s = function (e) {
                    e.forEach(function (e) {
                      if (!e.hadRecentInput) {
                        var t = i[0],
                          n = i[i.length - 1];
                        o &&
                        e.startTime - n.startTime < 1e3 &&
                        e.startTime - t.startTime < 5e3
                          ? ((o += e.value), i.push(e))
                          : ((o = e.value), (i = [e]));
                      }
                    }),
                      o > r.value && ((r.value = o), (r.entries = i), n());
                  },
                  c = K("layout-shift", s);
                c &&
                  ((n = G(e, r, re, t.reportAllChanges)),
                  J(function () {
                    s(c.takeRecords()), n(!0);
                  }),
                  H(function () {
                    (o = 0),
                      (r = U("CLS", 0)),
                      (n = G(e, r, re, t.reportAllChanges)),
                      W(function () {
                        return n();
                      });
                  }),
                  setTimeout(n, 0));
              })
            );
        })((t) => {
          e(t);
        }),
        ne((t) => {
          e(t);
        }),
        Re((t) => {
          e(t);
        }),
        Se((t) => {
          e(t);
        }));
  }
  const Te = "MIRROR_TRACK_V2",
    _e = "log",
    Ce = "key",
    Pe = {
      createIndexedDB() {
        if (window.indexedDB)
          return new Promise((e, t) => {
            const n = indexedDB.open(Te, 1);
            (n.onupgradeneeded = (e) => {
              const t = e.target.result;
              t.objectStoreNames.contains(_e) ||
                t.createObjectStore(_e, { keyPath: Ce });
            }),
              (n.onsuccess = (t) => {
                (null == t ? void 0 : t.target).result.close(), e();
              }),
              (n.onerror = () => {
                console.log("Indexed Start Error"), t();
              });
          });
      },
      add(e) {
        if (!window.indexedDB) return;
        const t =
            (function () {
              const e = new Date();
              return `${e.getFullYear()}-${
                1 === String(e.getMonth() + 1).length
                  ? "0" + (e.getMonth() + 1)
                  : String(e.getMonth() + 1)
              }-${
                1 === String(e.getDate()).length
                  ? "0" + e.getDate()
                  : String(e.getDate())
              } ${
                1 === String(e.getHours()).length
                  ? "0" + e.getHours()
                  : String(e.getHours())
              }:${
                1 === String(e.getMinutes()).length
                  ? "0" + e.getMinutes()
                  : String(e.getMinutes())
              }:${
                1 === String(e.getSeconds()).length
                  ? "0" + e.getSeconds()
                  : String(e.getSeconds())
              }`;
            })() +
            "_" +
            Math.ceil(999 * Math.random()) +
            "Z",
          n = indexedDB.open(Te, 1);
        (n.onupgradeneeded = (e) => {
          const t = e.target.result;
          t.objectStoreNames.contains(_e) ||
            t.createObjectStore(_e, { keyPath: Ce });
        }),
          (n.onsuccess = (n) => {
            const r = n.target.result;
            if (!r.objectStoreNames.contains(_e)) return;
            const o = r.transaction(_e, "readwrite").objectStore(_e),
              i = o.count();
            (i.onsuccess = () => {
              o.put({ [Ce]: t, log: e }),
                Number(i.result) <= 5e3 ||
                  (o.openCursor().onsuccess = (e) => {
                    const t = e.target.result;
                    t && t.delete();
                  });
            }),
              (i.onerror = () => {
                console.log("mirror indexDb count error");
              }),
              r.close();
          }),
          (n.onerror = () => {
            console.log("add Indexed Open Error");
          });
      },
      getAll() {
        let e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (window.indexedDB)
          return new Promise((t, n) => {
            let r = [];
            const o = indexedDB.open(Te);
            (o.onsuccess = (o) => {
              const i = o.target.result;
              if (!i.objectStoreNames.contains(_e))
                return void n(`the store log not exists in the ${Te} dataBase`);
              const s = i.transaction(_e, "readonly").objectStore(_e);
              if (e)
                (s.openCursor().onsuccess = (e) => {
                  var o, i;
                  const s = e.target.result;
                  if (s) {
                    const e = `${
                      null === (o = s.value) || void 0 === o ? void 0 : o.key
                    }-${
                      null === (i = s.value) || void 0 === i ? void 0 : i.log
                    }`;
                    r.push(e), r.push("\r\n"), s.continue();
                  } else if (0 === r.length) n("No data in the store");
                  else {
                    const e = new Blob(r, { type: "text/plain;charset=utf-8" });
                    t(e);
                  }
                }),
                  (s.openCursor().onerror = () => {
                    n("OpenCursor Error");
                  });
              else {
                s.getAll().onsuccess = function (e) {
                  const n = e.target.result;
                  t(n);
                };
              }
              i.close();
            }),
              (o.onerror = () => {
                n("Indexed Open Error");
              });
          });
      },
      clearStore() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _e;
        if (!window.indexedDB) return;
        const n = indexedDB.open(e);
        (n.onsuccess = (e) => {
          const n = e.target.result;
          if (!n.objectStoreNames.contains(t)) return;
          (n.transaction(t, "readwrite").objectStore(t).clear().onsuccess =
            function (e) {}),
            n.close();
        }),
          (n.onerror = function (e) {
            console.log("Error opening db", e.target.error);
          });
      },
      deleteIndexedDB() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te;
        if (!window.indexedDB) return;
        const t = indexedDB.deleteDatabase(e);
        (t.onsuccess = () => {}),
          (t.onerror = () => {
            console.log("Delete Error");
          });
      },
    };
  var Ne, ke, Ae, Le, je, xe, Me;
  !(function (e) {
    (e.INIT = "init"),
      (e.ERROR = "error"),
      (e.UNHANDLEDREJECTION = "unhandledrejection"),
      (e.RESOURCE = "resource"),
      (e.PERFORMANCE = "performance"),
      (e.WHITESCREEN = "whiteScreen"),
      (e.BREABCRUMB = "breadcrumb");
  })(Ne || (Ne = {})),
    (function (e) {
      (e.ERROR = "error"),
        (e.CLICK = "click"),
        (e.HISTORY = "history"),
        (e.HASHCHANGE = "hashchange"),
        (e.UNHANDLEDREJECTION = "unhandledrejection"),
        (e.RESOURCE = "resource"),
        (e.WHITE = "white"),
        (e.CUSTOM = "custom"),
        (e.SCROLL = "scroll"),
        (e.API = "request");
    })(ke || (ke = {})),
    (function (e) {
      (e.BEFORE = "mirrorHandlerBefore"), (e.AFTER = "mirrorHandlerAfter");
    })(Ae || (Ae = {})),
    (function (e) {
      (e.ERROR = "error"), (e.OK = "ok");
    })(Le || (Le = {})),
    (function (e) {
      (e.AUTO = "auto"), (e.DEFAULT = "default");
    })(je || (je = {})),
    (function (e) {
      (e.HISTORY = "history"),
        (e.HASH = "hash"),
        (e.DOM = "dom"),
        (e.JS = "js"),
        (e.PROMISE = "promise"),
        (e.RESOURCE = "resource"),
        (e.WHITE = "white"),
        (e.SCROLL = "scroll"),
        (e.API = "request");
    })(xe || (xe = {})),
    (function (e) {
      (e.LOAD = "info-load"),
        (e.REFRESH = "info-refresh"),
        (e.PAGETABSTATUS = "info-visibilitychange"),
        (e.DEVICE = "info-device"),
        (e.SCROLL = "info-scroll"),
        (e.PAGECLOSE = "info-close"),
        (e.CLICK = "info-click"),
        (e.HISTORY = "info-history"),
        (e.HASHCHANGE = "info-hashchange"),
        (e.APIUNKNOWN = "info-request-unknown"),
        (e.APISUCCESS = "success-request"),
        (e.APIERROR = "error-request"),
        (e.ERROR = "error-js"),
        (e.UNHANDLEDREJECTION = "error-unhandledrejection"),
        (e.RESOURCE = "error-resource"),
        (e.WHITE = "error-white");
    })(Me || (Me = {}));
  const $e = { isExclusive: 1 },
    De = { mirrorPolymer: 3 },
    He = function (e) {
      let n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "before",
        r = arguments.length > 2 ? arguments[2] : void 0;
      const o = [];
      let i = !1,
        s = 0;
      return {
        start() {
          return new Promise((c) =>
            t(this, void 0, void 0, function* () {
              if (!i) {
                for (i = !0; s < e.length; ) {
                  const t = e[s];
                  if (
                    ("before" === n
                      ? o.push(
                          yield null == t
                            ? void 0
                            : t.mirrorHandleBefore(r.type, r.data)
                        )
                      : o.push(
                          yield null == t
                            ? void 0
                            : t.mirrorHandleAfter(r.type, r.data)
                        ),
                    s++,
                    !i)
                  )
                    return;
                }
                (i = !1), c(o);
              }
            })
          );
        },
      };
    };
  class Be {
    constructor() {
      (this.timeID = null), (this.func = null);
    }
    repeat(e, t) {
      (this.func = e),
        (this.timeID = setTimeout(() => {
          e(), this.repeat(e, t);
        }, t));
    }
    clear() {
      clearTimeout(this.timeID);
    }
  }
  let Fe = null;
  class Ue {
    before(e, n) {
      return new Promise((r) =>
        t(this, void 0, void 0, function* () {
          if (x.plugins && f.isArray(x.plugins))
            try {
              const t = x.plugins,
                o = yield He(t, "before", { type: e, data: n }).start();
              let [i] = o.slice(-1);
              r(i);
            } catch (e) {
              console.warn(
                "bili-mirror:plugin function before hook error,please check"
              ),
                r(!0);
            }
          else if (x.plugins && x.plugins.mirrorHandleBefore)
            try {
              x.plugins.mirrorHandleBefore(e, n).then((e) => {
                r(e);
              });
            } catch (e) {
              console.warn(
                "bili-mirror:plugin function before hook error,please check"
              ),
                r(!0);
            }
          else r(!0);
        })
      );
    }
    after(e, n) {
      return new Promise((r) =>
        t(this, void 0, void 0, function* () {
          if (x.plugins && f.isArray(x.plugins))
            try {
              const t = x.plugins;
              yield He(t, "after", { type: e, data: n }).start(), r();
            } catch (e) {
              console.warn(
                "bili-mirror:plugin function after hook error,please check"
              ),
                r();
            }
          else if (x.plugins && x.plugins.mirrorHandleAfter)
            try {
              x.plugins.mirrorHandleAfter(e, n).then(() => {
                r();
              });
            } catch (e) {
              console.warn(
                "bili-mirror:plugin function after hook error,please check"
              ),
                r();
            }
          else r();
        })
      );
    }
  }
  Fe || (Fe = new Ue());
  const Ke = s();
  const Ge = r()
    ? Ke.breadcrumb ||
      (Ke.breadcrumb = new (class {
        constructor() {
          (this.maxBreadcrumbs = 10), (this.stack = []), (this.isSet = !1);
        }
        push(e) {
          return t(this, void 0, void 0, function* () {
            (null == x ? void 0 : x.config["user-log-deep"]) &&
              !this.isSet &&
              ((this.maxBreadcrumbs =
                null == x ? void 0 : x.config["user-log-deep"]),
              (this.isSet = !0));
            (yield Fe.before(Ne.BREABCRUMB, e)) &&
              (this.immediatePush(e),
              a(i, "beforeunload", () => {
                this.stack.filter((e) => "error" === e.status).length &&
                  (this.goToReport(this.stack),
                  window.__biliMirrorPbInstance__ &&
                    window.__biliMirrorPbInstance__.flush &&
                    window.__biliMirrorPbInstance__.flush());
              }));
          });
        }
        immediatePush(e) {
          if (
            (e.time || (e.time = l()), this.stack.length >= this.maxBreadcrumbs)
          ) {
            this.stack.filter((e) => "error" === e.status).length
              ? (this.goToReport(this.stack), this.clear())
              : this.clear();
          }
          this.stack.push(e), this.stack.sort((e, t) => e.time - t.time);
        }
        shift() {
          return void 0 !== this.stack.shift();
        }
        clear() {
          this.stack = [];
        }
        getStack() {
          return this.stack;
        }
        goToReport(e) {
          let t = {};
          e.forEach((e, n) => {
            t[`logStep-${n}`] = e;
          }),
            jt({
              type: "custom",
              event: `${x.origin}.${x.module}.USERLOG`,
              msg: Object.assign({ userLogInfo: Object.assign({}, t) }, $e),
            }),
            Fe.after(Ne.BREABCRUMB, this.stack),
            this.clear();
        }
      })())
    : null;
  let We = null;
  const Je = s();
  function qe(e) {
    const t = (null == x ? void 0 : x.config["user-log"]) || null;
    return !!t && t.find((t) => t === e);
  }
  function Ve() {
    return "log" !== (null == Je ? void 0 : Je.logType);
  }
  class Ye {
    constructor() {}
    handleHistory(e) {
      const { from: t, to: n } = e,
        { relative: r } = y(t),
        { relative: o } = y(n);
      Ve() &&
        lt(Me.HISTORY, "history跳转", {
          from: r || "/",
          to: o || "/",
          url: location.href,
        }),
        qe(xe.HISTORY) &&
          Ge.push({
            category: ke.HISTORY,
            status: Le.OK,
            time: l(),
            msg: { from: r || "/", to: o || "/" },
          });
    }
    handleHashChange(e) {
      const { oldURL: t, newURL: n } = e,
        { relative: r } = y(t),
        { relative: o } = y(n);
      Ve() &&
        lt(Me.HASHCHANGE, "hashChange跳转", {
          from: r,
          to: o,
          url: location.href,
        }),
        qe(xe.HASH) &&
          Ge.push({
            category: ke.HASHCHANGE,
            status: Le.OK,
            time: l(),
            msg: { from: r, to: o },
          });
    }
    handleDomClick(e) {
      const t = (function (e) {
        const t = e.target.tagName.toLowerCase();
        if ("html" === t || "body" === t) return "";
        let n = e.target.outerHTML;
        "path" === t && (n = n.replace(/ d="[^"]*"/, ""));
        const r = n.match(/<[^>]*>/),
          o =
            e.target.childNodes.length > 0 &&
            3 === e.target.childNodes[0].nodeType
              ? e.target.childNodes[0].nodeValue
              : "";
        return r ? r[0] + o + "</" + t + ">" : "";
      })(e);
      t &&
        (Ve() && lt(Me.CLICK, "点击", { dom: t, url: location.href }),
        qe(xe.DOM) &&
          Ge.push({
            category: ke.CLICK,
            status: Le.OK,
            time: l(),
            msg: { clickDom: t },
          }));
    }
    handleScroll() {
      const e =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      Ve() && lt(Me.SCROLL, "页面滚动", { top: e, url: location.href }),
        qe(xe.SCROLL) &&
          Ge.push({
            category: ke.SCROLL,
            status: Le.OK,
            time: l(),
            msg: { top: e },
          });
    }
    handleJsError(e) {
      Ve() &&
        lt(Me.ERROR, "js报错", { message: e.message, url: location.href }),
        qe(xe.JS) &&
          Ge.push({
            category: ke.ERROR,
            status: Le.ERROR,
            time: e.time || l(),
            msg: { message: e.message },
          });
    }
    handlePromiseError(e) {
      Ve() &&
        lt(Me.UNHANDLEDREJECTION, "rejection错误", {
          message: e.message,
          url: location.href,
        }),
        qe(xe.PROMISE) &&
          Ge.push({
            category: ke.UNHANDLEDREJECTION,
            status: Le.ERROR,
            time: e.time || l(),
            msg: { message: e.message },
          });
    }
    handleResourceError(e) {
      Ve() &&
        lt(Me.RESOURCE, "resource错误", {
          message: e.message,
          name: null == e ? void 0 : e.name,
          url: location.href,
        }),
        qe(xe.RESOURCE) &&
          Ge.push({
            category: ke.RESOURCE,
            status: Le.ERROR,
            time: e.time || l(),
            msg: { message: e.message, name: null == e ? void 0 : e.name },
          });
    }
    handleWhiteScreen() {
      Ve() && lt(Me.WHITE, "白屏错误", { url: location.href }),
        qe(xe.WHITE) &&
          Ge.push({
            category: ke.WHITE,
            status: Le.ERROR,
            time: l(),
            msg: { url: location.href },
          });
    }
    handleRequest(e) {
      var t, n, r, o;
      Ve() &&
        lt(Xe(e.httpCode), `请求httpCode:${e.httpCode}`, {
          api: null == e ? void 0 : e.api,
          traceId:
            (null === (t = null == e ? void 0 : e.headers) || void 0 === t
              ? void 0
              : t["X-Bili-Trace-Id"]) ||
            (null === (n = null == e ? void 0 : e.headers) || void 0 === n
              ? void 0
              : n["Bili-Trace-Id"]) ||
            "",
          code: null == e ? void 0 : e.code,
          message: null == e ? void 0 : e.msg,
          url: location.href,
        }),
        qe(xe.API) &&
          Ge.push({
            category: ke.API,
            status: Xe(e.httpCode),
            time: l(),
            msg: {
              api: null == e ? void 0 : e.api,
              traceId:
                (null === (r = null == e ? void 0 : e.headers) || void 0 === r
                  ? void 0
                  : r["X-Bili-Trace-Id"]) ||
                (null === (o = null == e ? void 0 : e.headers) || void 0 === o
                  ? void 0
                  : o["Bili-Trace-Id"]) ||
                "",
              code: null == e ? void 0 : e.code,
              message: null == e ? void 0 : e.msg,
            },
          });
    }
  }
  function Xe(e) {
    return e
      ? e >= 200 && e < 300
        ? Me.APISUCCESS
        : Me.APIERROR
      : Me.APIUNKNOWN;
  }
  We || (We = new Ye());
  let ze = v();
  const Qe = {
    historyReplace() {
      if (
        !(function () {
          const e = i.chrome,
            t = e && e.app && e.app.runtime,
            n =
              "history" in i &&
              !!i.history.pushState &&
              !!i.history.replaceState;
          return !t && n;
        })()
      )
        return;
      const e = i.onpopstate;
      function t(e) {
        return function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          const o = n.length > 2 ? n[2] : void 0;
          if (o) {
            const e = ze,
              t = String(o);
            (ze = t), We.handleHistory({ from: e, to: t });
          }
          return e.apply(this, n);
        };
      }
      (i.onpopstate = function () {
        const t = v(),
          n = ze;
        (ze = t), We.handleHistory({ from: n, to: t });
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
          o[i] = arguments[i];
        e && e.apply(this, o);
      }),
        b(i.history, "pushState", t),
        b(i.history, "replaceState", t);
    },
    hashChangeReplace() {
      var e, t;
      (e = i),
        (t = "onhashchange"),
        Object.prototype.hasOwnProperty.call(e, t) &&
          a(i, "hashchange", function (e) {
            We.handleHashChange(e);
          });
    },
    domClickReplace() {
      if (!("document" in i)) return;
      const e = w(We.handleDomClick, 300);
      a(
        i.document,
        "click",
        function (t) {
          e(t);
        },
        !0
      );
    },
    scrollReplace() {
      const e = E(We.handleScroll, 1e3);
      a(
        i,
        "scroll",
        function (t) {
          e(t);
        },
        !0
      );
    },
    jsErrorReplace(e) {
      null == We || We.handleJsError(e);
    },
    promiseErrorReplace(e) {
      null == We || We.handlePromiseError(e);
    },
    resourceErrorReplace(e) {
      null == We || We.handleResourceError(e);
    },
    whiteErrorReplace() {
      null == We || We.handleWhiteScreen();
    },
    apiReplace(e) {
      null == We || We.handleRequest(e);
    },
  };
  function Ze(e) {
    return (
      (Ze =
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
      Ze(e)
    );
  }
  function et() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ et =
      function () {
        return t;
      };
    var e,
      t = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value;
        },
      i = "function" == typeof Symbol ? Symbol : {},
      s = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      a = i.toStringTag || "@@toStringTag";
    function l(e, t, n) {
      return (
        Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        e[t]
      );
    }
    try {
      l({}, "");
    } catch (e) {
      l = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function u(e, t, n, r) {
      var i = t && t.prototype instanceof v ? t : v,
        s = Object.create(i.prototype),
        c = new N(r || []);
      return o(s, "_invoke", { value: T(e, n, c) }), s;
    }
    function d(e, t, n) {
      try {
        return { type: "normal", arg: e.call(t, n) };
      } catch (e) {
        return { type: "throw", arg: e };
      }
    }
    t.wrap = u;
    var f = "suspendedStart",
      h = "suspendedYield",
      p = "executing",
      m = "completed",
      g = {};
    function v() {}
    function y() {}
    function b() {}
    var w = {};
    l(w, s, function () {
      return this;
    });
    var E = Object.getPrototypeOf,
      R = E && E(E(k([])));
    R && R !== n && r.call(R, s) && (w = R);
    var O = (b.prototype = v.prototype = Object.create(w));
    function S(e) {
      ["next", "throw", "return"].forEach(function (t) {
        l(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function I(e, t) {
      function n(o, i, s, c) {
        var a = d(e[o], e, i);
        if ("throw" !== a.type) {
          var l = a.arg,
            u = l.value;
          return u && "object" == Ze(u) && r.call(u, "__await")
            ? t.resolve(u.__await).then(
                function (e) {
                  n("next", e, s, c);
                },
                function (e) {
                  n("throw", e, s, c);
                }
              )
            : t.resolve(u).then(
                function (e) {
                  (l.value = e), s(l);
                },
                function (e) {
                  return n("throw", e, s, c);
                }
              );
        }
        c(a.arg);
      }
      var i;
      o(this, "_invoke", {
        value: function (e, r) {
          function o() {
            return new t(function (t, o) {
              n(e, r, t, o);
            });
          }
          return (i = i ? i.then(o, o) : o());
        },
      });
    }
    function T(t, n, r) {
      var o = f;
      return function (i, s) {
        if (o === p) throw Error("Generator is already running");
        if (o === m) {
          if ("throw" === i) throw s;
          return { value: e, done: !0 };
        }
        for (r.method = i, r.arg = s; ; ) {
          var c = r.delegate;
          if (c) {
            var a = _(c, r);
            if (a) {
              if (a === g) continue;
              return a;
            }
          }
          if ("next" === r.method) r.sent = r._sent = r.arg;
          else if ("throw" === r.method) {
            if (o === f) throw ((o = m), r.arg);
            r.dispatchException(r.arg);
          } else "return" === r.method && r.abrupt("return", r.arg);
          o = p;
          var l = d(t, n, r);
          if ("normal" === l.type) {
            if (((o = r.done ? m : h), l.arg === g)) continue;
            return { value: l.arg, done: r.done };
          }
          "throw" === l.type &&
            ((o = m), (r.method = "throw"), (r.arg = l.arg));
        }
      };
    }
    function _(t, n) {
      var r = n.method,
        o = t.iterator[r];
      if (o === e)
        return (
          (n.delegate = null),
          ("throw" === r &&
            t.iterator.return &&
            ((n.method = "return"),
            (n.arg = e),
            _(t, n),
            "throw" === n.method)) ||
            ("return" !== r &&
              ((n.method = "throw"),
              (n.arg = new TypeError(
                "The iterator does not provide a '" + r + "' method"
              )))),
          g
        );
      var i = d(o, t.iterator, n.arg);
      if ("throw" === i.type)
        return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), g;
      var s = i.arg;
      return s
        ? s.done
          ? ((n[t.resultName] = s.value),
            (n.next = t.nextLoc),
            "return" !== n.method && ((n.method = "next"), (n.arg = e)),
            (n.delegate = null),
            g)
          : s
        : ((n.method = "throw"),
          (n.arg = new TypeError("iterator result is not an object")),
          (n.delegate = null),
          g);
    }
    function C(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t);
    }
    function P(e) {
      var t = e.completion || {};
      (t.type = "normal"), delete t.arg, (e.completion = t);
    }
    function N(e) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        e.forEach(C, this),
        this.reset(!0);
    }
    function k(t) {
      if (t || "" === t) {
        var n = t[s];
        if (n) return n.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            i = function n() {
              for (; ++o < t.length; )
                if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
              return (n.value = e), (n.done = !0), n;
            };
          return (i.next = i);
        }
      }
      throw new TypeError(Ze(t) + " is not iterable");
    }
    return (
      (y.prototype = b),
      o(O, "constructor", { value: b, configurable: !0 }),
      o(b, "constructor", { value: y, configurable: !0 }),
      (y.displayName = l(b, a, "GeneratorFunction")),
      (t.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return (
          !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name))
        );
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, b)
            : ((e.__proto__ = b), l(e, a, "GeneratorFunction")),
          (e.prototype = Object.create(O)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      S(I.prototype),
      l(I.prototype, c, function () {
        return this;
      }),
      (t.AsyncIterator = I),
      (t.async = function (e, n, r, o, i) {
        void 0 === i && (i = Promise);
        var s = new I(u(e, n, r, o), i);
        return t.isGeneratorFunction(n)
          ? s
          : s.next().then(function (e) {
              return e.done ? e.value : s.next();
            });
      }),
      S(O),
      l(O, a, "Generator"),
      l(O, s, function () {
        return this;
      }),
      l(O, "toString", function () {
        return "[object Generator]";
      }),
      (t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.push(r);
        return (
          n.reverse(),
          function e() {
            for (; n.length; ) {
              var r = n.pop();
              if (r in t) return (e.value = r), (e.done = !1), e;
            }
            return (e.done = !0), e;
          }
        );
      }),
      (t.values = k),
      (N.prototype = {
        constructor: N,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = e),
            this.tryEntries.forEach(P),
            !t)
          )
            for (var n in this)
              "t" === n.charAt(0) &&
                r.call(this, n) &&
                !isNaN(+n.slice(1)) &&
                (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function o(r, o) {
            return (
              (c.type = "throw"),
              (c.arg = t),
              (n.next = r),
              o && ((n.method = "next"), (n.arg = e)),
              !!o
            );
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var s = this.tryEntries[i],
              c = s.completion;
            if ("root" === s.tryLoc) return o("end");
            if (s.tryLoc <= this.prev) {
              var a = r.call(s, "catchLoc"),
                l = r.call(s, "finallyLoc");
              if (a && l) {
                if (this.prev < s.catchLoc) return o(s.catchLoc, !0);
                if (this.prev < s.finallyLoc) return o(s.finallyLoc);
              } else if (a) {
                if (this.prev < s.catchLoc) return o(s.catchLoc, !0);
              } else {
                if (!l) throw Error("try statement without catch or finally");
                if (this.prev < s.finallyLoc) return o(s.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var o = this.tryEntries[n];
            if (
              o.tryLoc <= this.prev &&
              r.call(o, "finallyLoc") &&
              this.prev < o.finallyLoc
            ) {
              var i = o;
              break;
            }
          }
          i &&
            ("break" === e || "continue" === e) &&
            i.tryLoc <= t &&
            t <= i.finallyLoc &&
            (i = null);
          var s = i ? i.completion : {};
          return (
            (s.type = e),
            (s.arg = t),
            i
              ? ((this.method = "next"), (this.next = i.finallyLoc), g)
              : this.complete(s)
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
            g
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e)
              return this.complete(n.completion, n.afterLoc), P(n), g;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var r = n.completion;
              if ("throw" === r.type) {
                var o = r.arg;
                P(n);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (t, n, r) {
          return (
            (this.delegate = { iterator: k(t), resultName: n, nextLoc: r }),
            "next" === this.method && (this.arg = e),
            g
          );
        },
      }),
      t
    );
  }
  var tt =
      "https://s1.hdslb.com/bfs/static/dynamic-import/es-module-shims@1.9.0.js",
    nt = function (e, t, n) {
      return new Promise(function (r, o) {
        var i = function (e) {
            try {
              c(n.next(e));
            } catch (e) {
              o(e);
            }
          },
          s = function (e) {
            try {
              c(n.throw(e));
            } catch (e) {
              o(e);
            }
          },
          c = function (e) {
            return e.done ? r(e.value) : Promise.resolve(e.value).then(i, s);
          };
        c((n = n.apply(e, t)).next());
      });
    };
  function rt(e) {
    return new Promise(function (t, n) {
      var r = document.createElement("script");
      (r.onload = function () {
        t(window[e.name]), r.remove();
      }),
        (r.onerror = n),
        (r.src = e.url),
        document.head.appendChild(r);
    });
  }
  const ot = s(),
    it = "https://s1.hdslb.com/bfs/static/log-manipulator@0.2.1/index.js";
  function st(e) {
    const t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]+)"));
    return t ? decodeURIComponent(t[2]) : null;
  }
  function ct() {
    try {
      const e = null == x ? void 0 : x.config.track,
        t = null == x ? void 0 : x.config["track-gray"],
        n = st("buvid3"),
        r = st("DedeUserID");
      return (
        !(
          !r ||
          !(function (e, t) {
            if (("string" == typeof t && (t = parseFloat(t)), t < 0 || t > 1))
              throw new Error("Rate must be between 0 and 1");
            return (
              parseInt(null == e ? void 0 : e.substring(0, 2), 16) > 256 * t
            );
          })(n, t)
        ) ||
        (!!e &&
          0 !== Object.keys(e).length &&
          (Array.isArray(null == e ? void 0 : e.mid)
            ? (null == e ? void 0 : e.mid.includes(r)) ||
              (null == e ? void 0 : e.mid.includes("*"))
            : !!Array.isArray(null == e ? void 0 : e.buvid) &&
              ((null == e ? void 0 : e.buvid.includes(n)) ||
                (null == e ? void 0 : e.buvid.includes("*")))))
      );
    } catch (e) {
      return !1;
    }
  }
  function at() {
    const e = ct(),
      t = (function () {
        var e;
        return null === (e = null == x ? void 0 : x.config["user-log"]) ||
          void 0 === e
          ? void 0
          : e.length;
      })();
    return e && t ? "all" : e && !t ? "track" : !e && t ? "log" : "none";
  }
  function lt(e, t, n) {
    let r = `[${e}]: ${t} ${
      "string" == typeof n ? n : JSON.stringify(n || "")
    }`;
    Pe.add(r);
  }
  function ut(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return new Promise((r, o) =>
      t(this, void 0, void 0, function* () {
        const t = new FormData();
        t.append("log", e),
          t.append(
            "project",
            (function () {
              const { spmId: e, origin: t, module: n } = ot.options;
              return `${e || c}.${t}.${n}`;
            })()
          ),
          t.append("is_player_log", String(n));
        try {
          const e = yield fetch(
            "https://api.bilibili.com/x/web-frontend/action-log/upload",
            { method: "POST", body: t, credentials: "include" }
          );
          if (!e.ok) throw new Error(`HTTP error! status: ${e.status}`);
          const n = yield e.json();
          r(n);
        } catch (e) {
          o("Failed to upload log: " + e);
        }
      })
    );
  }
  function dt(e) {
    return t(this, void 0, void 0, function* () {
      try {
        const { reportLogs: t } = yield (function (e) {
          return nt(
            this,
            null,
            et().mark(function t() {
              var n;
              return et().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), rt({ name: "importShim", url: tt });
                    case 2:
                      return (n = t.sent), t.abrupt("return", n(e));
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
        })((null == x ? void 0 : x.config["player-log-umd"]) || it);
        return new Promise((n, r) => {
          t("boolean" == typeof e ? "all" : e).then((e) => {
            if (e) {
              const t = new Blob([e], { type: "text/plain;charset=utf-8" });
              n(ut(t, !0));
            }
            r("log not found");
          });
        });
      } catch (e) {
        console.error("Failed to upload play log: " + e);
      }
    });
  }
  function ft() {
    return t(this, void 0, void 0, function* () {
      try {
        if (!r()) return;
        if (!window.indexedDB) return;
        if (
          (Pe.deleteIndexedDB("MIRROR_TRACK"),
          (ot.logType = at()),
          "none" === ot.logType)
        )
          return;
        "log" !== ot.logType &&
          (yield Pe.createIndexedDB(),
          (function () {
            const e = st("buvid3") || "-",
              t = st("DedeUserID") || "-";
            let n = performance.getEntriesByType("navigation");
            if (n.length > 0)
              if ("reload" === n[0].type)
                lt(Me.REFRESH, "页面刷新", {
                  url: location.href,
                  mid: t,
                  buvid: e,
                });
              else {
                lt(Me.LOAD, "页面载入", {
                  url: location.href,
                  mid: t,
                  buvid: e,
                });
                const n = window.innerWidth,
                  r = window.innerHeight;
                lt(Me.DEVICE, "设备信息", {
                  ua: navigator.userAgent,
                  window_size: `${n}*${r}`,
                  url: location.href,
                });
              }
            i.addEventListener("visibilitychange", () => {
              "visible" === document.visibilityState
                ? lt(Me.PAGETABSTATUS, "选项卡被激活", { url: location.href })
                : "hidden" === document.visibilityState &&
                  lt(Me.PAGETABSTATUS, "选项卡被隐藏", { url: location.href });
            }),
              i.addEventListener("beforeunload", () => {
                lt(Me.PAGECLOSE, "页面关闭", { url: location.href });
              });
          })()),
          Qe.historyReplace(),
          Qe.hashChangeReplace(),
          Qe.domClickReplace(),
          Qe.scrollReplace();
      } catch (e) {
        console.error("Failed to start tracking: " + e);
      }
    });
  }
  function ht(e, n) {
    return new Promise((r, o) =>
      t(this, void 0, void 0, function* () {
        window.indexedDB
          ? e
            ? dt(e).then(() => {
                r("player log upload success");
              })
            : new Promise((e, t) => {
                Pe.getAll()
                  .then((n) => {
                    ut(n)
                      .then((t) => {
                        e(t);
                      })
                      .catch((e) => {
                        t(e);
                      });
                  })
                  .catch((e) => {
                    t(e);
                  });
              }).then(() => {
                if (n)
                  return (
                    Pe.clearStore("MIRROR_TRACK_V2", "log"),
                    void r("web log upload success, and clear db")
                  );
                r("web log upload success");
              })
          : o("not support indexedDB");
      })
    );
  }
  let pt = null,
    mt = null,
    gt = 6e4 * ((null == x ? void 0 : x.config["poll-time"]) || 5);
  const vt = "BILI_MIRROR_REPORT_POOL";
  (null == x ? void 0 : x.config["poll-time"]) ||
    setTimeout(() => {
      gt = 6e4 * ((null == x ? void 0 : x.config["poll-time"]) || 5);
    }, 1e3);
  const yt = () => {
      try {
        let e = JSON.parse(localStorage.getItem(vt) || "{}");
        if (!Object.keys(e).length) return;
        Object.entries(e).forEach((e) => {
          let [t, n] = e;
          pt.tech(t, n);
        }),
          localStorage.setItem(vt, "{}");
      } catch (e) {}
    },
    bt = () => {
      mt ||
        ((mt = new Be()),
        mt.repeat(yt, gt),
        a(i, "beforeunload", function () {
          yt(), wt();
        }));
    },
    wt = () => {
      pt && pt.flush && pt.flush(), null == mt || mt.clear();
    },
    Et = "_BiliGreyResult",
    Rt = () => {
      const e = Ot("offline-version"),
        t = Ot("offline-name"),
        n = Ot("offline-plat"),
        r = Ot("offline-type");
      return e
        ? { offlineVersion: e, offlineName: t, offlinePlat: n, offlineType: r }
        : {};
    },
    Ot = (e) => {
      var t;
      return (
        (null === (t = document.getElementsByTagName("meta")[e]) || void 0 === t
          ? void 0
          : t.content) || void 0
      );
    },
    St = (() => {
      if (!r()) return {};
      if (!i[Et]) return {};
      const e = i[Et];
      var t = {};
      Object.entries(e).forEach((e) => {
        let [n, r] = e;
        t[`${Et}_${n}`] = r;
      });
      const n = Rt();
      return Object.assign(Object.assign({}, t), n);
    })(),
    It = [];
  let Tt = !1,
    _t = "",
    Ct = null;
  const Pt = (e) => {
    let t = "";
    return (
      (t = e.diyevent
        ? e.eventId || e.event
        : e.otherSpmId
        ? `${e.otherSpmId}.${e.eventId}`
        : (null == x ? void 0 : x.spmId)
        ? `${null == x ? void 0 : x.spmId}.${e.eventId}`
        : `${c}.${e.eventId}`),
      t
    );
  };
  function Nt() {
    if (It.length && !Tt) {
      Tt = !0;
      const [e, t, n, r] = It.shift();
      if ("middleWare" === t) {
        if (Ct) return (Tt = !1), xt(n, r), void Nt();
        e(!0).then((e) => {
          var t;
          (Tt = !1), (Ct = e), pt !== (t = Ct) && (pt = t), Mt(n, r), Nt();
        });
      } else
        e(!1, r).then(() => {
          (Tt = !1), t && n && t(n, r || void 0), Nt();
        });
    }
  }
  const kt = (e) => {
      const t = _t ? window[_t] : window.__biliMirrorPbInstance__;
      e = Ht(e);
      const n = Pt(e);
      null == t || t[e.type](n, e.msg);
    },
    At = (e, t) => {
      t && Object.keys(t).length > 0 && $t(t), (e = Ht(e));
      const n = Pt(e),
        r = _t ? window[_t] : window.__biliMirrorPbInstance__,
        o = Object.assign(Object.assign(Object.assign({}, e.msg), St), {
          mirrorVersion: S,
          type: e.type || "custom",
        });
      null == r || r.tech(n, o);
    },
    Lt = (e) => {
      It.push([Dt, kt, e]), Nt();
    },
    jt = (e, t) => {
      It.push([Dt, At, e, t]), Nt();
    },
    xt = (e, t) => {
      var n;
      (n = e.msg),
        "none" !== at() && Qe.apiReplace(n),
        !e.msg.message && e.msg.msg && (e.msg.message = e.msg.msg),
        Ct ? Mt(e, t) : (It.push([Dt, "middleWare", e, t]), Nt());
    },
    Mt = (e, t) => {
      (t && void 0 !== (null == t ? void 0 : t.isBatch)) ||
        (t = Object.assign(t || {}, { isBatch: !1 }));
      const n =
        ((null == t ? void 0 : t.spmId) || c) +
        "." +
        ((null == t ? void 0 : t.origin) || (null == x ? void 0 : x.origin)) +
        "." +
        ((null == t ? void 0 : t.module) || (null == x ? void 0 : x.module));
      (null == t ? void 0 : t.isBatch)
        ? ((e, t, n) => {
            var r;
            const o =
              (null === (r = null == t ? void 0 : t.api) || void 0 === r
                ? void 0
                : r.split("?")[0]) || "";
            try {
              let t = JSON.parse(localStorage.getItem(vt) || "{}");
              t[e] || (t[e] = Object.assign(Object.assign({}, n), De)),
                t[e][o] ? t[e][o]++ : (t[e][o] = 1),
                localStorage.setItem(vt, JSON.stringify(t));
            } catch (e) {}
            bt();
          })(
            n + (t.eventId || ".DATA.successReport"),
            e.msg,
            Object.assign({ type: "custom", mirrorVersion: S }, St)
          )
        : Ct.tech(
            n + (t.eventId || ".ERROR.errorReport"),
            Object.assign(
              Object.assign(
                { type: e.type || "custom", mirrorVersion: S },
                e.msg
              ),
              St
            )
          );
    },
    $t = function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : { feature: { tech: !0 } };
      window.__biliMirrorPbInstance__.options = Object.assign(
        { feature: { tech: !0 } },
        e
      );
    },
    Dt = function () {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      try {
        return new Promise((n, o) => {
          if ((r() || o("not support in server"), e)) {
            const e = { feature: { tech: !0 }, autoPv: !1, batch: !1 };
            if (window.ReporterPb) {
              const t = new window.ReporterPb(Object.assign({}, e));
              n(t);
            } else
              N(Object.assign({}, e)).then((e) => {
                n(e);
              });
          } else {
            const e = (null == x ? void 0 : x.pbOtherNameIns)
              ? null == x
                ? void 0
                : x.pbOtherNameIns
              : "";
            if (f.isObject(window[e]) && Object.keys(window[e]).length)
              (_t = e),
                console.warn(
                  `Is using ${e} to report,Please confirm open [tech] config`
                ),
                n();
            else if (window.__biliMirrorPbInstance__) n();
            else {
              const e = {
                feature: { tech: !0 },
                extra: Object.assign(Object.assign({}, St), {
                  mirrorVersion: S,
                }),
              };
              let r = {};
              (r = O(e, t || (null == x ? void 0 : x.pbOptions) || {})),
                window.ReporterPb
                  ? ((window.__biliMirrorPbInstance__ = new window.ReporterPb(
                      r
                    )),
                    n())
                  : N(Object.assign({}, r)).then((e) => {
                      (window.__biliMirrorPbInstance__ = e), n();
                    });
            }
          }
        });
      } catch (e) {
        console.error("bili-mirror:load pb-report-Error load failed:", e);
      }
    };
  function Ht(e) {
    e.event && !e.eventId && (e.eventId = e.event);
    return (
      e.eventId.split(".").length <= 1 &&
        (e.eventId = `${null == x ? void 0 : x.origin}.${
          null == x ? void 0 : x.module
        }.${e.eventId}`),
      ("appear" !== e.type && "show" !== e.type) || (e.type = "exposure"),
      e
    );
  }
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self && self;
  function Bt(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var Ft = Bt(function (e, t) {
      e.exports = (function () {
        function e(e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        }
        function t(e) {
          return e.charAt(0).toUpperCase() + e.substring(1);
        }
        function n(e) {
          return function () {
            return this[e];
          };
        }
        var r = ["isConstructor", "isEval", "isNative", "isToplevel"],
          o = ["columnNumber", "lineNumber"],
          i = ["fileName", "functionName", "source"],
          s = ["args"],
          c = ["evalOrigin"],
          a = r.concat(o, i, s, c);
        function l(e) {
          if (e)
            for (var n = 0; n < a.length; n++)
              void 0 !== e[a[n]] && this["set" + t(a[n])](e[a[n]]);
        }
        (l.prototype = {
          getArgs: function () {
            return this.args;
          },
          setArgs: function (e) {
            if ("[object Array]" !== Object.prototype.toString.call(e))
              throw new TypeError("Args must be an Array");
            this.args = e;
          },
          getEvalOrigin: function () {
            return this.evalOrigin;
          },
          setEvalOrigin: function (e) {
            if (e instanceof l) this.evalOrigin = e;
            else {
              if (!(e instanceof Object))
                throw new TypeError(
                  "Eval Origin must be an Object or StackFrame"
                );
              this.evalOrigin = new l(e);
            }
          },
          toString: function () {
            var e = this.getFileName() || "",
              t = this.getLineNumber() || "",
              n = this.getColumnNumber() || "",
              r = this.getFunctionName() || "";
            return this.getIsEval()
              ? e
                ? "[eval] (" + e + ":" + t + ":" + n + ")"
                : "[eval]:" + t + ":" + n
              : r
              ? r + " (" + e + ":" + t + ":" + n + ")"
              : e + ":" + t + ":" + n;
          },
        }),
          (l.fromString = function (e) {
            var t = e.indexOf("("),
              n = e.lastIndexOf(")"),
              r = e.substring(0, t),
              o = e.substring(t + 1, n).split(","),
              i = e.substring(n + 1);
            if (0 === i.indexOf("@"))
              var s = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i, ""),
                c = s[1],
                a = s[2],
                u = s[3];
            return new l({
              functionName: r,
              args: o || void 0,
              fileName: c,
              lineNumber: a || void 0,
              columnNumber: u || void 0,
            });
          });
        for (var u = 0; u < r.length; u++)
          (l.prototype["get" + t(r[u])] = n(r[u])),
            (l.prototype["set" + t(r[u])] = (function (e) {
              return function (t) {
                this[e] = Boolean(t);
              };
            })(r[u]));
        for (var d = 0; d < o.length; d++)
          (l.prototype["get" + t(o[d])] = n(o[d])),
            (l.prototype["set" + t(o[d])] = (function (t) {
              return function (n) {
                if (!e(n)) throw new TypeError(t + " must be a Number");
                this[t] = Number(n);
              };
            })(o[d]));
        for (var f = 0; f < i.length; f++)
          (l.prototype["get" + t(i[f])] = n(i[f])),
            (l.prototype["set" + t(i[f])] = (function (e) {
              return function (t) {
                this[e] = String(t);
              };
            })(i[f]));
        return l;
      })();
    }),
    Ut = Bt(function (e, t) {
      var n, r, o, i;
      e.exports =
        ((n = Ft),
        (r = /(^|@)\S+:\d+/),
        (o = /^\s*at .*(\S+:\d+|\(native\))/m),
        (i = /^(eval@)?(\[native code])?$/),
        {
          parse: function (e) {
            if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"])
              return this.parseOpera(e);
            if (e.stack && e.stack.match(o)) return this.parseV8OrIE(e);
            if (e.stack) return this.parseFFOrSafari(e);
            throw new Error("Cannot parse given Error object");
          },
          extractLocation: function (e) {
            if (-1 === e.indexOf(":")) return [e];
            var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
            return [t[1], t[2] || void 0, t[3] || void 0];
          },
          parseV8OrIE: function (e) {
            return e.stack
              .split("\n")
              .filter(function (e) {
                return !!e.match(o);
              }, this)
              .map(function (e) {
                e.indexOf("(eval ") > -1 &&
                  (e = e
                    .replace(/eval code/g, "eval")
                    .replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                var t = e
                    .replace(/^\s+/, "")
                    .replace(/\(eval code/g, "(")
                    .replace(/^.*?\s+/, ""),
                  r = t.match(/ (\(.+\)$)/);
                t = r ? t.replace(r[0], "") : t;
                var o = this.extractLocation(r ? r[1] : t),
                  i = (r && t) || void 0,
                  s =
                    ["eval", "<anonymous>"].indexOf(o[0]) > -1 ? void 0 : o[0];
                return new n({
                  functionName: i,
                  fileName: s,
                  lineNumber: o[1],
                  columnNumber: o[2],
                  source: e,
                });
              }, this);
          },
          parseFFOrSafari: function (e) {
            return e.stack
              .split("\n")
              .filter(function (e) {
                return !e.match(i);
              }, this)
              .map(function (e) {
                if (
                  (e.indexOf(" > eval") > -1 &&
                    (e = e.replace(
                      / line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
                      ":$1"
                    )),
                  -1 === e.indexOf("@") && -1 === e.indexOf(":"))
                )
                  return new n({ functionName: e });
                var t = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                  r = e.match(t),
                  o = r && r[1] ? r[1] : void 0,
                  i = this.extractLocation(e.replace(t, ""));
                return new n({
                  functionName: o,
                  fileName: i[0],
                  lineNumber: i[1],
                  columnNumber: i[2],
                  source: e,
                });
              }, this);
          },
          parseOpera: function (e) {
            return !e.stacktrace ||
              (e.message.indexOf("\n") > -1 &&
                e.message.split("\n").length > e.stacktrace.split("\n").length)
              ? this.parseOpera9(e)
              : e.stack
              ? this.parseOpera11(e)
              : this.parseOpera10(e);
          },
          parseOpera9: function (e) {
            for (
              var t = /Line (\d+).*script (?:in )?(\S+)/i,
                r = e.message.split("\n"),
                o = [],
                i = 2,
                s = r.length;
              i < s;
              i += 2
            ) {
              var c = t.exec(r[i]);
              c &&
                o.push(
                  new n({ fileName: c[2], lineNumber: c[1], source: r[i] })
                );
            }
            return o;
          },
          parseOpera10: function (e) {
            for (
              var t =
                  /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                r = e.stacktrace.split("\n"),
                o = [],
                i = 0,
                s = r.length;
              i < s;
              i += 2
            ) {
              var c = t.exec(r[i]);
              c &&
                o.push(
                  new n({
                    functionName: c[3] || void 0,
                    fileName: c[2],
                    lineNumber: c[1],
                    source: r[i],
                  })
                );
            }
            return o;
          },
          parseOpera11: function (e) {
            return e.stack
              .split("\n")
              .filter(function (e) {
                return !!e.match(r) && !e.match(/^Error created at/);
              }, this)
              .map(function (e) {
                var t,
                  r = e.split("@"),
                  o = this.extractLocation(r.pop()),
                  i = r.shift() || "",
                  s =
                    i
                      .replace(/<anonymous function(: (\w+))?>/, "$2")
                      .replace(/\([^)]*\)/g, "") || void 0;
                i.match(/\(([^)]*)\)/) &&
                  (t = i.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                var c =
                  void 0 === t || "[arguments not available]" === t
                    ? void 0
                    : t.split(",");
                return new n({
                  functionName: s,
                  args: c,
                  fileName: o[0],
                  lineNumber: o[1],
                  columnNumber: o[2],
                  source: e,
                });
              }, this);
          },
        });
    });
  const Kt = (e) => {
      const t = e.target;
      if (null == t ? void 0 : t.localName) {
        const e = (function (e) {
          return {
            time: l(),
            message: e.src || e.href || "",
            name: e.localName,
          };
        })(t);
        return Object.assign(Object.assign({}, e), { type: "resourceError" });
      }
      return null;
    },
    Gt = [],
    Wt = (e) => {
      const t =
        ((n =
          (null == e ? void 0 : e.message) ||
          (null == e ? void 0 : e.fileName)),
        window.btoa(decodeURIComponent(encodeURIComponent(n))));
      var n;
      return Gt.some((e) => e === t)
        ? (console.warn(
            `Duplicate error, not reported,${null == e ? void 0 : e.message}`
          ),
          !1)
        : (Gt.push(t), !0);
    },
    Jt = {
      handleError(e) {
        var n, r, o, s, c, a, u, d, f;
        return t(this, void 0, void 0, function* () {
          if (
            (null == i ? void 0 : i.screen.width) <= 100 ||
            i.screen.height <= 100
          )
            return;
          if (
            (null == i ? void 0 : i.innerWidth) <= 100 ||
            i.innerHeight <= 100
          )
            return;
          const t = e.target;
          try {
            if (!t || (e.target && !e.target.localName)) {
              const t = ((e) => {
                  var t;
                  const n = e.target;
                  if (
                    !n ||
                    (e.target &&
                      !(null === (t = e.target) || void 0 === t
                        ? void 0
                        : t.localName))
                  ) {
                    let t = Ut.parse(n ? e.error : e).slice(0, 5),
                      r = [];
                    t.forEach((e) => {
                      let { source: t } = e;
                      const n = t ? t.split(" ").join("").split("./") : "";
                      r.push(n);
                    });
                    let o = Ut.parse(n ? e.error : e)[0],
                      { fileName: i, columnNumber: s, lineNumber: c } = o;
                    return {
                      type: "error",
                      time: l(),
                      message: e.message,
                      fileName: i,
                      line: c,
                      column: s,
                      stack: JSON.stringify(r),
                    };
                  }
                  return null;
                })(e),
                i =
                  null ===
                    (r =
                      null === (n = null == x ? void 0 : x.config) ||
                      void 0 === n
                        ? void 0
                        : n.white) || void 0 === r
                    ? void 0
                    : r.error,
                a =
                  (null === (o = null == x ? void 0 : x.config) || void 0 === o
                    ? void 0
                    : o["filter-end-js"]) || !1,
                u = p(t, i, a);
              if (
                m(
                  null ===
                    (c =
                      null === (s = null == x ? void 0 : x.config) ||
                      void 0 === s
                        ? void 0
                        : s.white) || void 0 === c
                    ? void 0
                    : c.ua
                )
              )
                return;
              if (!u) {
                if (!Wt(t)) return;
                if (!(yield Fe.before(Ne.ERROR, t))) return;
                jt(
                  {
                    type: "error",
                    eventId: `${x.origin}.${x.module}.ERROR.jsError`,
                    msg: t,
                  },
                  x.pbOptions || {}
                ),
                  Qe.jsErrorReplace(t),
                  Fe.after(Ne.ERROR, t);
              }
            }
            if (null == t ? void 0 : t.localName) {
              let t = Kt(e);
              if (!t || !t.message.trim().length) return;
              const n =
                  null ===
                    (u =
                      null === (a = null == x ? void 0 : x.config) ||
                      void 0 === a
                        ? void 0
                        : a.white) || void 0 === u
                    ? void 0
                    : u.resource,
                r = p(t, n);
              if (
                m(
                  null ===
                    (f =
                      null === (d = null == x ? void 0 : x.config) ||
                      void 0 === d
                        ? void 0
                        : d.white) || void 0 === f
                    ? void 0
                    : f.ua
                )
              )
                return;
              if (!r) {
                if (!Wt(t)) return;
                if (!(yield Fe.before(Ne.RESOURCE, t))) return;
                jt(
                  {
                    type: "error",
                    eventId: `${x.origin}.${x.module}.ERROR.resourceError`,
                    msg: Object.assign(Object.assign({}, t), {
                      error_type: "AssetsError",
                      headless:
                        "" == navigator.language ? "headless" : "normal",
                      webdriver:
                        null === navigator || void 0 === navigator
                          ? void 0
                          : navigator.webdriver,
                    }),
                  },
                  x.pbOptions || {}
                ),
                  Qe.resourceErrorReplace(t),
                  Fe.after(Ne.RESOURCE, t);
              }
            }
          } catch (e) {
            console.warn("bili-mirror: handleError-Error parsing failed:", e);
          }
        });
      },
      unhandRejection(e) {
        var n, r, o, s, c;
        return t(this, void 0, void 0, function* () {
          try {
            if (
              (null == i ? void 0 : i.screen.width) <= 100 ||
              i.screen.height <= 100
            )
              return;
            if (
              (null == i ? void 0 : i.innerWidth) <= 100 ||
              i.innerHeight <= 100
            )
              return;
            const t = ((e) => {
                let t = Ut.parse(e.reason).slice(0, 5),
                  n = [];
                t.forEach((e) => {
                  let { source: t } = e;
                  const r = t ? t.split(" ").join("").split("./") : "";
                  n.push(r);
                });
                let r = Ut.parse(e.reason)[0],
                  { fileName: o, columnNumber: i, lineNumber: s } = r;
                var c;
                return {
                  type: "rejectionError",
                  time: l(),
                  message:
                    ((c = e.reason.message || e.reason.stack),
                    f.isString(c)
                      ? c
                      : f.isUndefined(c)
                      ? "undefined"
                      : JSON.stringify(c)),
                  fileName: o,
                  line: s,
                  column: i,
                  stack: JSON.stringify(n),
                };
              })(e),
              a =
                null ===
                  (r =
                    null === (n = null == x ? void 0 : x.config) || void 0 === n
                      ? void 0
                      : n.white) || void 0 === r
                  ? void 0
                  : r.rejection,
              u =
                (null === (o = null == x ? void 0 : x.config) || void 0 === o
                  ? void 0
                  : o["filter-end-js"]) || !1,
              d = p(t, a, u);
            if (
              m(
                null ===
                  (c =
                    null === (s = null == x ? void 0 : x.config) || void 0 === s
                      ? void 0
                      : s.white) || void 0 === c
                  ? void 0
                  : c.ua
              )
            )
              return;
            if (!d) {
              if (!Wt(t)) return;
              if (!(yield Fe.before(Ne.UNHANDLEDREJECTION, t))) return;
              jt(
                {
                  type: "error",
                  eventId: `${x.origin}.${x.module}.ERROR.rejectionError`,
                  msg: t,
                },
                x.pbOptions || {}
              ),
                Qe.promiseErrorReplace(t),
                Fe.after(Ne.UNHANDLEDREJECTION, t);
            }
          } catch (e) {
            console.warn(
              "bili-mirror: unhandRejection-Error parsing failed:",
              e
            );
          }
        });
      },
      handlePerformance() {
        return t(this, void 0, void 0, function* () {
          try {
            if (
              !PerformanceObserver ||
              !(null === PerformanceObserver || void 0 === PerformanceObserver
                ? void 0
                : PerformanceObserver.supportedEntryTypes)
            )
              return;
            const n = x.config["white-performance-rate"];
            if (((e = n), Math.floor(10 * Math.random() + 1) > e)) return;
            Ie((e) =>
              t(this, void 0, void 0, function* () {
                let { name: t, value: n } = e;
                if (!n || n < 0) return;
                (yield Fe.before(Ne.PERFORMANCE, e)) &&
                  (jt(
                    {
                      type: "performance",
                      eventId: `${x.origin}.${x.module}.PERFORMANCE.${e.name}`,
                      msg:
                        "PAGETIME" === t
                          ? Object.assign({}, null == e ? void 0 : e.data)
                          : Object.assign({}, e),
                    },
                    x.pbOptions || {}
                  ),
                  Fe.after(Ne.PERFORMANCE, e));
              })
            );
          } catch (e) {
            console.warn("bili-mirror: performance-Error parsing failed:", e);
          }
          var e;
        });
      },
    };
  var qt;
  !(function (e) {
    (e.ERROR = "error"), (e.OK = "ok");
  })(qt || (qt = {}));
  let Vt = !1;
  const Yt = s();
  let Xt = null;
  const zt = [
      "xmlhttprequest",
      "fetch",
      "img",
      "image",
      "link",
      "css",
      "video",
      "iframe",
      "script",
    ],
    Qt = {
      API: "xmlhttprequest,fetch",
      IMG: "img,image",
      CSS: "link,css",
      JS: "script",
      VIDEO: "video",
      IFRAME: "iframe",
    };
  const Zt = r()
    ? Yt.resourceTimeIns ||
      (Yt.resourceTimeIns = new (class {
        constructor() {
          (this.regexCache = new Map()),
            (this.config = x.config["resource-time"] || {}),
            (this.resourceWaitList = []),
            (this.disablePush = !1);
        }
        on() {
          x.config["resource-time"] &&
            ((this.config = x.config["resource-time"]),
            0 !== Object.keys(this.config).length &&
              PerformanceObserver &&
              (null === PerformanceObserver || void 0 === PerformanceObserver
                ? void 0
                : PerformanceObserver.supportedEntryTypes) &&
              (this._getAllData(), this._createObserver()));
        }
        destroy() {
          Xt && Xt.disconnect();
        }
        _getAllData() {
          const e = performance.getEntriesByType("resource");
          (e || e.length) &&
            (e.forEach((e) => {
              this.resourceWaitList.push(e);
            }),
            this._handlerResourceInit());
        }
        _handlerResourceInit() {
          for (this.disablePush = !0; this.resourceWaitList.length; ) {
            let e = this.resourceWaitList.shift();
            if (!this._isCheckResource(e)) continue;
            const t = this._computeResourceData_(e);
            this._waitRequest(t);
          }
          this.disablePush = !1;
        }
        _waitRequest(e) {
          "requestIdleCallback" in window
            ? this._reportResourceTime(e)
            : setTimeout(() => {
                this._reportResourceTime(e);
              }, 0);
        }
        _reportResourceTime(e) {
          jt({
            type: "performance",
            eventId: `${x.origin}.${x.module}.PERFORMANCE.RESOURCETIME`,
            msg: Object.assign({}, e),
          });
        }
        _isCheckResource(e) {
          if (!zt.includes(e.initiatorType)) return !1;
          if (!Object.keys(this.config).length) return !1;
          let t = !1;
          for (let n in this.config) {
            if (Qt[n].split(",").includes(e.initiatorType)) {
              if (!this.config[n]) continue;
              if (Array.isArray(this.config[n]) && this.config[n].length)
                for (let r = 0; r < this.config[n].length; r++) {
                  const o = e.name,
                    i = this.config[n][r];
                  let s = this.regexCache.get(i);
                  if (
                    (s || ((s = new RegExp(i)), this.regexCache.set(i, s)),
                    s.test(o))
                  ) {
                    (e.ruleGroup = i), (t = !0);
                    break;
                  }
                }
            }
          }
          return t;
        }
        _computeResourceData_(e) {
          const t = e.name.split("?"),
            {
              startTime: n,
              transferSize: r,
              initiatorType: o,
              duration: i,
              nextHopProtocol: s,
              redirectStart: c = 0,
              redirectEnd: a = 0,
              domainLookupEnd: l = 0,
              domainLookupStart: u = 0,
              connectEnd: d = 0,
              connectStart: f = 0,
              secureConnectionStart: h = 0,
              responseStart: p = 0,
              requestStart: m = 0,
              responseEnd: g = 0,
            } = e;
          return {
            group: e.ruleGroup || "",
            startTime: n,
            url: t[0],
            query: t[1] || "",
            duration: i.toFixed(2),
            size: r,
            type: o,
            protocol: s,
            redirectTime: Math.max(0, a - c),
            dnsTime: Math.max(0, l - u),
            sslTime: h > 0 ? Math.max(0, d - h) : 0,
            tcpTime: Math.max(0, d - f),
            requestTime: Math.max(0, p - m),
            responseTime: Math.max(0, g - p),
          };
        }
        _createObserver() {
          (Xt = new PerformanceObserver((e) => {
            e.getEntries().forEach((e) => {
              this.resourceWaitList.push(e.toJSON());
            }),
              this.disablePush || this._handlerResourceInit();
          })),
            Xt.observe({ entryTypes: ["resource"] });
        }
      })())
    : null;
  function en(e) {
    if (r()) {
      if (
        (a(
          i,
          "error",
          function (e) {
            Jt.handleError(e);
          },
          !0
        ),
        a(i, "unhandledrejection", function (e) {
          Jt.unhandRejection(e);
        }),
        Jt.handlePerformance(),
        null == e ? void 0 : e.whiteScreen)
      )
        try {
          !(function (e) {
            var n, r, o, c, a, l;
            if (null == e ? void 0 : e.debug) {
              Vt = !0;
              var u = document.createElement("canvas");
              document.body.appendChild(u);
              var d = u.getContext("2d");
              (u.width = window.innerWidth),
                (u.height = window.innerHeight),
                (u.style.position = "absolute"),
                (u.style.top = "0"),
                (u.style.left = "0"),
                (u.style.zIndex = "9999");
            }
            if (
              (null !==
                (r =
                  null === (n = null == i ? void 0 : i.screen) || void 0 === n
                    ? void 0
                    : n.width) && void 0 !== r
                ? r
                : 0) <= 10 ||
              (null !==
                (c =
                  null === (o = null == i ? void 0 : i.screen) || void 0 === o
                    ? void 0
                    : o.height) && void 0 !== c
                ? c
                : 0) <= 10
            )
              return;
            if (
              (null !== (a = null == i ? void 0 : i.innerWidth) && void 0 !== a
                ? a
                : 0) <= 10 ||
              (null !== (l = null == i ? void 0 : i.innerHeight) && void 0 !== l
                ? l
                : 0) <= 10
            )
              return;
            const f = e.maxLoop || 9,
              h = e.elemArry || e.checkDom || ["html", "body", "#app"],
              p = e.callback || function () {},
              m = s();
            let g = 0;
            const v = [];
            let y = [],
              b = {};
            function w(e) {
              return e.id
                ? "#" + e.id
                : e.className && "string" == typeof e.className
                ? "." +
                  e.className
                    .split(" ")
                    .filter((e) => !!e)
                    .join(".")
                : e.nodeName.toLowerCase();
            }
            function E(t) {
              const n = w(t);
              e.isSkeleton && (g ? y.push(n) : v.push(n));
              let r = !1;
              if (!n || !h) return r;
              for (let e = 0; e <= h.length; e++)
                if (h[e] && n.match(h[e])) {
                  r = !0;
                  break;
                }
              return r;
            }
            function R() {
              return t(this, void 0, void 0, function* () {
                if (!document || !document.elementsFromPoint)
                  return void console.warn(
                    "当前浏览器不支持elementsFromPoint方法,白屏检测跳过"
                  );
                if (!(yield Fe.before(Ne.WHITESCREEN))) return;
                b.check_list = h;
                let t = !0;
                for (let e = 1; e <= 9; e++) {
                  const n = (i.innerWidth * e) / 10,
                    r = i.innerHeight / 2,
                    o = i.innerWidth / 2,
                    s = (i.innerHeight * e) / 10,
                    c = document.elementsFromPoint(n, r),
                    a = document.elementsFromPoint(o, s),
                    l = [];
                  b[`pointX-${n}-${r}`] || (b[`pointX-${n}-${r}`] = []),
                    Vt && O(n, r);
                  for (let e = 0; e < c.length; e++)
                    if ((l.push(w(c[e])), E(c[e]))) {
                      t = !1;
                      break;
                    }
                  if (((b[`pointX-${n}-${r}`] = l), !t)) break;
                  if (t && 5 != e) {
                    const e = [];
                    b[`pointY-${o}-${s}`] || (b[`pointY-${o}-${s}`] = []),
                      Vt && O(o, s);
                    for (let n = 0; n < a.length; n++)
                      if ((e.push(w(a[n])), E(a[n]))) {
                        t = !1;
                        break;
                      }
                    b[`pointY-${o}-${s}`] = e;
                  }
                  if (!t) break;
                }
                if (t) S();
                else {
                  if (e.isSkeleton) {
                    if (!g) return S();
                    if (y.join() == v.join()) return p({ status: qt.ERROR });
                  }
                  m._loopTimer && clearTimeout(m._loopTimer),
                    (m._loopTimer = null);
                }
                p({
                  status: t ? qt.ERROR : qt.OK,
                  loop: g,
                  data: Object.assign({}, b),
                }),
                  g >= f &&
                    (jt({
                      type: "error",
                      eventId: `${x.origin}.${x.module}.ERROR.whiteScreen`,
                      msg: { _BiliCheckDom_Point: Object.assign({}, b) },
                    }),
                    Qe.whiteErrorReplace()),
                  Fe.after(Ne.WHITESCREEN, Object.assign({}, b));
              });
            }
            function O(e, t) {
              d.beginPath(), d.arc(e, t, 10, 0, 2 * Math.PI), d.fill();
            }
            function S() {
              g >= f && m._loopTimer
                ? (clearTimeout(m._loopTimer), (m._loopTimer = null))
                : (m._loopTimer = setTimeout(() => {
                    g++, e.isSkeleton && (y = []), R();
                  }, 1e3));
            }
            e.isSkeleton
              ? "complete" != document.readyState && R()
              : "complete" === document.readyState
              ? R()
              : i.addEventListener("load", R);
          })(e.whiteScreen);
        } catch (e) {
          console.error("bili-mirror: whiteScreen错误解析异常:", e);
        }
      if (
        x.config["resource-time"] &&
        Object.keys(x.config["resource-time"]).length
      )
        try {
          Zt.on();
        } catch (e) {
          Zt.destroy(), console.warn("bili-mirror:resource-watch error", e);
        }
    }
  }
  let tn = null;
  class nn {
    constructor() {
      (this.checkInterval = null),
        (this.checkTimeout = null),
        (this.originalMethods = new Map());
    }
    init() {
      this.monitorMethods(window);
    }
    monitorMethods(e) {
      for (const t of Object.getOwnPropertyNames(e))
        try {
          const n = Object.getOwnPropertyDescriptor(e, t);
          if (n && "function" == typeof n.value) {
            const e = n.value.toString();
            this.originalMethods.set(t, e.includes("[native code]"));
          }
        } catch (e) {
          console.error(`Error getting descriptor for ${t}:`, e);
        }
    }
    checkOverwrittenMethods() {
      for (const [e, t] of this.originalMethods.entries())
        try {
          const n = window[e].toString();
          t &&
            !n.includes("[native code]") &&
            (console.warn(`Method ${e} has been overwritten.`),
            jt({
              type: "error",
              eventId: `${x.origin}.${x.module}.ERROR.METHOD_OVERWRITE`,
              msg: { url: window.location.href, method: e },
            }));
        } catch (t) {
          console.error(`Error checking method ${e}:`, t);
        }
    }
    startCheck() {
      null === this.checkInterval && null === this.checkTimeout
        ? ((this.checkInterval = window.setInterval(
            () => this.checkOverwrittenMethods(),
            5e3
          )),
          (this.checkTimeout = window.setTimeout(() => this.stopCheck(), 6e4)))
        : console.warn("Check is already running.");
    }
    stopCheck() {
      null !== this.checkInterval &&
        (clearInterval(this.checkInterval), (this.checkInterval = null)),
        null !== this.checkTimeout &&
          (clearTimeout(this.checkTimeout), (this.checkTimeout = null));
    }
  }
  try {
    !tn && r()
      ? (tn = new nn())
      : console.log("mirrorMonitorMethods is already defined");
  } catch (e) {
    console.error("bili-mirror:MethodMonitor init error:", e);
  }
  var rn;
  const on = s(),
    sn = "__MIRROR_CONFIG__",
    cn = (e) => {
      !(function (e) {
        const t = j();
        null == t || t.updateModule(e);
      })(e);
    },
    an = (e) => {
      r() && Lt(e);
    },
    ln = (e, t) => {
      r() && jt(e, t);
    },
    un = (e) => {
      r() && $t(e);
    },
    dn = (e, t) => {
      r() && Lt({ type: "pv", eventId: "0.0", msg: e, otherSpmId: t || null });
    },
    fn = (e) => {
      r() &&
        h(e.key) &&
        jt({
          type: "custom",
          eventId: e.eventId,
          diyevent: !0,
          msg: Object.assign(
            Object.assign(
              { exclusiveFrom: (null == e ? void 0 : e.key) || "" },
              e.msg
            ),
            $e
          ),
        });
    },
    hn = function () {
      return ht(
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
      );
    },
    pn = (e, t, n) => {
      lt(e, t, n);
    },
    mn = () => Pe.getAll(!1);
  function gn(e) {
    r() &&
      (on.isInited ||
        ((on.isInited = !0),
        on.mirrorInitMode || (on.mirrorInitMode = je.DEFAULT),
        M(e)
          .then(() =>
            t(this, void 0, void 0, function* () {
              var t;
              yield Dt();
              (yield Fe.before(Ne.INIT, e)) &&
                ((null === (t = null == e ? void 0 : e.config) || void 0 === t
                  ? void 0
                  : t.isMonitorMethod) &&
                  (null == tn || tn.init(), null == tn || tn.startCheck()),
                en(null == e ? void 0 : e.config),
                ft(),
                Fe.after(Ne.INIT, e),
                console.info(
                  "%c%s",
                  "line-height: 30px; color: #FF6699",
                  `bili-fe-mirror:${T}`
                ));
            })
          )
          .catch((e) => {
            console.warn(e);
          })));
  }
  const vn = (e, t) => {
      r() && xt(e, t);
    },
    yn = (e) => {
      if (!r()) return;
      if (!h(e.name)) return;
      const t = `${x.origin}.${x.module}.PERFORMANCE.${e.name}`;
      jt({
        type: "performance",
        eventId: t,
        msg: { name: e.name, value: e.value },
      });
    },
    bn = function () {};
  function wn(e, t) {
    window[e] || (window[e] = t);
  }
  if (
    r() &&
    (wn("__INITIAL_MIRROR__", gn),
    wn("__MIRROR_REPORT__", {
      techReportPb: ln,
      customReportPb: an,
      pbReportPv: dn,
      changePbOptions: un,
      canBatchTechReport: vn,
      customPerformanceQuota: yn,
      exclusiveBisReport: fn,
      changeMirrorModule: cn,
      mirrorTechPvReport: bn,
      trackLogReport: hn,
      trackCustomLog: pn,
      trackGetLog: mn,
    }),
    window[sn] && f.isObject(window[sn]))
  ) {
    const e = window[sn];
    (null === (rn = e.config) || void 0 === rn ? void 0 : rn.isAutoInit) &&
      (!on.mirrorInitMode && (on.mirrorInitMode = je.AUTO), gn(e));
  }
  var En = {
    SDK_NAME: I,
    SDK_VERSION: T,
    init: gn,
    install: function (e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const n = e.config.errorHandler;
      (e.config.errorHandler = function (e, t, r) {
        Jt.handleError(e), n && n.apply(null, [e, t, r]), console.error(e);
      }),
        gn(t);
    },
    errorBoundary: (e) => {
      Jt.handleError(e);
    },
  };
  (e.canBatchTechReport = vn),
    (e.changeMirrorModule = cn),
    (e.changePbOptions = un),
    (e.customPerformanceQuota = yn),
    (e.customReport = an),
    (e.customReportPb = an),
    (e.default = En),
    (e.exclusiveBisReport = fn),
    (e.mirrorTechPvReport = bn),
    (e.pbReportPv = dn),
    (e.techReportPb = ln),
    (e.trackCustomLog = pn),
    (e.trackGetLog = mn),
    (e.trackLogReport = hn),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=biliMirror.umd.mini.js.map
