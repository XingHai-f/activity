"use strict";
(self.webpackChunkwebpackLogReporter =
  self.webpackChunkwebpackLogReporter || []).push([
  [950],
  {
    7950: (e, n, i) => {
      i.d(n, { Z: () => f });
      var o = i(5671),
        r = i(3144),
        t = i(5282),
        s = i(2884),
        f = (function () {
          function e(n) {
            var i = this;
            (0, o.Z)(this, e),
              (this.msg = n.performanceMsg || {}),
              this.showRawPerformance(),
              window.addEventListener("load", function () {
                setTimeout(function () {
                  i.showRawPerformance();
                }, 1e3);
              });
          }
          return (
            (0, r.Z)(e, [
              {
                key: "showRawPerformance",
                value: function () {
                  if (
                    window.performance &&
                    window.performance.timing &&
                    window.performance.timing.domComplete > 0
                  ) {
                    var e = window.performance.timing;
                    this.todo(e);
                  }
                },
              },
              {
                key: "todo",
                value: function (e) {
                  var n = s.Z.assignObject({}, e);
                  !n.firstscreenfinish &&
                    window.reportConfig &&
                    window.reportConfig.firstscreenfinish &&
                    (n.firstscreenfinish =
                      window.reportConfig.firstscreenfinish),
                    (n.abtest = s.Z.getDefaultAbtestInfo(window.abtest)),
                    (n.msg = JSON.stringify(this.msg));
                  var i = { type: "performance", obj: n };
                  t.Z.receiveMsg(i);
                },
              },
            ]),
            e
          );
        })();
    },
  },
]);
//# sourceMappingURL=950.ee096.function.chunk.js.map
