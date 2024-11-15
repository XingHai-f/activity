"use strict";
(self.webpackChunkwebpackLogReporter =
  self.webpackChunkwebpackLogReporter || []).push([
  [86],
  {
    4086: (r, t, e) => {
      e.d(t, { Z: () => s });
      var o = e(5671),
        i = e(3144),
        n = e(5282),
        s =
          (e(2884),
          (function () {
            function r() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              (0, o.Z)(this, r),
                this.initConfig(),
                this.setIgnoredPattern(t.ignoredErrorPattern),
                this.doCollectorWinError(),
                this.doCollectorResourceError(),
                (n.Z.reportErrorSelfDef =
                  this.handleErrorSelfDefReport.bind(this));
            }
            return (
              (0, i.Z)(r, [
                {
                  key: "initConfig",
                  value: function () {
                    (this.scriptErrorLimit = 5),
                      (this.scriptErrorCount = 0),
                      (this.imgErrorLimit = 5),
                      (this.imgErrorCount = 0),
                      (this.ERROR_RUNTIME = 1),
                      (this.ERROR_SCRIPT = 2),
                      (this.ERROR_STYLE = 3),
                      (this.ERROR_IMAGE = 4),
                      (this.ERROR_AUDIO = 5),
                      (this.ERROR_VIDEO = 6),
                      (this.ERROR_CONSOLE = 7),
                      (this.ERROR_TRY_CATHC = 8),
                      (this.LOAD_ERROR_TYPE = {
                        SCRIPT: this.ERROR_SCRIPT,
                        LINK: this.ERROR_STYLE,
                        IMG: this.ERROR_IMAGE,
                        AUDIO: this.ERROR_AUDIO,
                        VIDEO: this.ERROR_VIDEO,
                      });
                  },
                },
                {
                  key: "setIgnoredPattern",
                  value: function (r) {
                    if (r) {
                      var t = [];
                      (t =
                        r instanceof Array
                          ? r.map(function (r) {
                              return r.toString();
                            })
                          : [r.toString()]),
                        (this.ignoredPatterns = t.map(function (r) {
                          return new RegExp(r);
                        }));
                    }
                  },
                },
                {
                  key: "handleErrorSelfDefReport",
                  value: function (r, t) {
                    "tryCatchError" === r &&
                      this.todo("trycatch", this.ERROR_TRY_CATHC, t);
                  },
                },
                {
                  key: "doCollectorResourceError",
                  value: function () {
                    var r = this;
                    window.addEventListener(
                      "error",
                      function (t) {
                        var e = t.target;
                        if (
                          e !== window &&
                          e.nodeName &&
                          r.LOAD_ERROR_TYPE[e.nodeName.toUpperCase()]
                        ) {
                          var o = r.LOAD_ERROR_TYPE[e.nodeName.toUpperCase()];
                          (o !== r.ERROR_IMAGE || e.getAttribute("src")) &&
                            r.todo("resource", o, {
                              url:
                                e.baseURI ||
                                document.baseURI ||
                                window.location.href,
                              errorMsg: e.outerHTML || e.href,
                            });
                        }
                      },
                      !0
                    );
                  },
                },
                {
                  key: "doCollectorWinError",
                  value: function () {
                    var r = null;
                    "function" == typeof window.onerror && (r = window.onerror);
                    var t = this;
                    window.onerror = function (e, o, i, n, s) {
                      return (
                        r && r.apply(window, arguments),
                        o
                          ? "Script error." === e || "Script error" === e
                            ? (setTimeout(function () {
                                var r = {};
                                (r.url = o),
                                  (r.pageUrl =
                                    window.location.href || document.baseURI),
                                  (r.errorMsg = "Script error."),
                                  t.scriptErrorCount < t.scriptErrorLimit &&
                                    ((t.scriptErrorCount += 1),
                                    t.todo("runtime", t.ERROR_RUNTIME, r));
                              }, 0),
                              !1)
                            : (setTimeout(function () {
                                var r = {};
                                (n =
                                  n ||
                                  (window.event &&
                                    window.event.errorCharacter) ||
                                  0),
                                  (r.url = o),
                                  (r.pageUrl =
                                    window.location.href || document.baseURI),
                                  (r.line = i),
                                  (r.col = n),
                                  (r.errorMsg = e),
                                  s &&
                                    s.stack &&
                                    (r.errorMsg = s.stack.toString()),
                                  t.todo("runtime", 1, r);
                              }, 0),
                              !1)
                          : (setTimeout(function () {
                              var r = {};
                              (r.url = document.baseURI),
                                (r.errorMsg = e),
                                ("Script error." !== e &&
                                  "Script error" !== e) ||
                                  (t.scriptErrorCount < t.scriptErrorLimit &&
                                    (t.scriptErrorCount += 1)),
                                t.todo("runtime", t.ERROR_RUNTIME, r);
                            }, 0),
                            !1)
                      );
                    };
                  },
                },
                {
                  key: "todo",
                  value: function (r, t, e) {
                    var o = {
                      time: new Date().toISOString(),
                      level: "ERROR",
                      app_id: "main.frontend.bilibili-log-report-seed",
                      instance_id: r,
                      errorType: t,
                      userAgent: navigator.userAgent,
                      url: document.baseURI || window.location.href,
                      referrer: document.referrer,
                    };
                    if (
                      ((o.errorMsg =
                        e instanceof Object ? JSON.stringify(e) : e),
                      this.ignoredPatterns && o.errorMsg)
                    )
                      for (var i = 0; i < this.ignoredPatterns.length; i++)
                        if (this.ignoredPatterns[i].test(o.errorMsg)) return;
                    if (t === this.ERROR_IMAGE) {
                      if (this.imgErrorCount >= this.imgErrorLimit) return;
                      this.imgErrorCount++;
                    }
                    var s = { type: "errorLog", obj: o };
                    n.Z.receiveGroupMsg(s);
                  },
                },
              ]),
              r
            );
          })());
    },
  },
]);
//# sourceMappingURL=86.fd3f7.function.chunk.js.map
