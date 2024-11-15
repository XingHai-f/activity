"use strict";
(self.webpackChunkwebpackLogReporter =
  self.webpackChunkwebpackLogReporter || []).push([
  [512],
  {
    8512: (e, t, o) => {
      o.d(t, { Z: () => u });
      var i = o(1002),
        s = o(5671),
        n = o(3144),
        r = o(5282),
        l = o(2884),
        u = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            (0, s.Z)(this, e),
              (this.scrollDivClass = "report-scroll-module"),
              (this.scrollSubDivClass = "report-scroll-sub-module"),
              (this.ignoreHidden = t.ignoreHidden || !1),
              (this.scrollReportOffset = t.scrollReportOffset || 200),
              (this.scrollMsg = t.scrollMsg || {}),
              (this.scrollLintenerFns = []),
              (this.extMsgs = (t && t.extMsgs) || {}),
              (this.reportedIds = []),
              this.checkScroll();
          }
          return (
            (0, n.Z)(e, [
              {
                key: "getOffset",
                value: function (e) {
                  var t = { top: 0, left: 0 };
                  return (
                    "function" == typeof e.getBoundingClientRect &&
                      (t = e.getBoundingClientRect()),
                    {
                      top:
                        t.top +
                        (window.pageYOffset || e.scrollTop) -
                        (e.clientTop || 0),
                      left:
                        t.left +
                        (window.pageXOffset || e.scrollLeft) -
                        (e.clientLeft || 0),
                    }
                  );
                },
              },
              {
                key: "judgeHidden",
                value: function (e) {
                  for (var t = e; t !== document.body; ) {
                    if (
                      window.getComputedStyle(t) &&
                      "none" === window.getComputedStyle(t).display
                    )
                      return !0;
                    t = t.parentNode;
                  }
                  return !1;
                },
              },
              {
                key: "inView",
                value: function (e) {
                  var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  if (e) {
                    var o = this.scrollReportOffset,
                      i = e.getBoundingClientRect();
                    if ((o > 0 && o < 1 && (o = i.height / 2), t)) {
                      var s = window.innerHeight;
                      return (
                        (i.top >= 0 && s - i.top > o) ||
                        (i.top < 0 && i.bottom >= o)
                      );
                    }
                    var n =
                        document.documentElement ||
                        document.body.parentNode ||
                        document.body,
                      r = window.pageYOffset ? window.pageYOffset : n.scrollTop,
                      l = this.getOffset(e).top,
                      u = window.innerHeight;
                    window.innerWidth;
                    return (
                      !(i.right <= 0 || i.left >= window.innerWidth) &&
                      l >= r &&
                      l + o < r + u
                    );
                  }
                },
              },
              {
                key: "subInView",
                value: function (e, t) {
                  var o = t.getBoundingClientRect(),
                    i = e.getBoundingClientRect();
                  return (
                    i.top >= 0 &&
                    i.top - o.top < o.height - this.scrollReportOffset
                  );
                },
              },
              {
                key: "judgeAppear",
                value: function () {
                  for (
                    var e = document.querySelectorAll(
                        "." + this.scrollDivClass
                      ),
                      t = 0;
                    t < e.length;
                    t++
                  ) {
                    e[t].getAttribute("scrollshow") ||
                      (this.ignoreHidden && this.judgeHidden(e[t])) ||
                      (this.inView(e[t]) &&
                        (-1 == this.reportedIds.indexOf(e[t].id) &&
                          this.reportedIds.push(e[t].id),
                        e[t].setAttribute("scrollshow", !0),
                        this.todo(e[t].id, t)));
                  }
                },
              },
              {
                key: "judgeSubAppear",
                value: function (e) {
                  if (this.inView(e, !0))
                    for (
                      var t = e.querySelectorAll("." + this.scrollSubDivClass),
                        o = 0,
                        i = t.length;
                      o < i;
                      o++
                    ) {
                      t[o].getAttribute("scrollshow") ||
                        (this.ignoreHidden && this.judgeHidden(t[o])) ||
                        (this.subInView(t[o], e) &&
                          (t[o].setAttribute("scrollshow", !0),
                          -1 == this.reportedIds.indexOf(t[o].id) &&
                            this.reportedIds.push(t[o].id),
                          this.todo(t[o].id, o)));
                    }
                },
              },
              {
                key: "judgeCustom",
                value: function (e, t, o, i) {
                  for (
                    var s = e.querySelectorAll(t), n = 0;
                    n < s.length;
                    n++
                  ) {
                    if (
                      !(
                        s[n].getAttribute("scrollshow") ||
                        (this.ignoreHidden && this.judgeHidden(s[n]))
                      ) &&
                      this.inView(s[n])
                    ) {
                      s[n].setAttribute("scrollshow", !0);
                      var r = {};
                      for (var l in i)
                        "function" == typeof i[l]
                          ? (r[l] = i[l](s[n]))
                          : (r[l] = i[l]);
                      this.todoCustom(o, n + 1, r);
                    }
                  }
                },
              },
              {
                key: "checkScroll",
                value: function () {
                  var e = this;
                  e.judgeAppear(),
                    window.addEventListener(
                      "scroll",
                      l.Z.throttleV2(
                        function () {
                          e.judgeAppear();
                        },
                        100,
                        200
                      ),
                      !1
                    );
                },
              },
              {
                key: "addScrollListenNode",
                value: function (e) {
                  if (e) {
                    var t = this;
                    t.judgeSubAppear(e);
                    var o = l.Z.throttleV2(
                      function () {
                        t.judgeSubAppear(e);
                      },
                      100,
                      200
                    );
                    this.scrollLintenerFns.push(o),
                      e.addEventListener("scroll", o, !1);
                  }
                },
              },
              {
                key: "removeScrollListenNode",
                value: function (e) {
                  this.scrollLintenerFns.forEach(function (t) {
                    e.removeEventListener("scroll", t);
                  });
                },
              },
              {
                key: "customReport",
                value: function (e, t, o, i, s) {
                  var n = this;
                  this.judgeCustom(e, t, o, i),
                    (s = s || window).addEventListener(
                      "scroll",
                      l.Z.throttleV2(
                        function () {
                          n.judgeCustom(e, t, o, i);
                        },
                        100,
                        200
                      ),
                      !1
                    );
                },
              },
              {
                key: "todo",
                value: function (e, t) {
                  var o = {
                      num: t + 1,
                      name: "report-scroll-module",
                      bsource: window.bsource || "",
                    },
                    i = this.scrollMsg;
                  for (var s in i)
                    "function" == typeof i[s] ? (o[s] = i[s]()) : (o[s] = i[s]);
                  for (var n in this.extMsgs)
                    "function" == typeof this.extMsgs[n]
                      ? (o[n] = this.extMsgs[n]())
                      : (o[n] = this.extMsgs[n]);
                  var u = r.Z.spmPrefix + ".",
                    d = {};
                  if (
                    ((d.spm_id = u + e + ".0"),
                    (d.timestamp = new Date().getTime()),
                    (d.msg = JSON.stringify(o)),
                    r.Z.receiveGroupMsg({ type: "appear", obj: d }),
                    "function" == typeof r.Z.reportH5SelfDef)
                  ) {
                    var c = {};
                    (c.spm_id = u + "show." + e),
                      (c.type = "show"),
                      (c.timestamp = new Date().getTime()),
                      (o.uaSource = window.uaSource),
                      (c.args = JSON.stringify(o)),
                      (c.abtest = l.Z.getDefaultAbtestInfo(window.abtest)),
                      r.Z.receiveGroupMsg({ type: "h5_selfDef", obj: c });
                  }
                },
              },
              {
                key: "todoCustom",
                value: function (e, t, o) {
                  var s = {};
                  "object" === (0, i.Z)(o) &&
                    (o.bsource = window.bsource || "");
                  var n = r.Z.spmPrefix + ".";
                  if (
                    ((s.spm_id = "".concat(n).concat(e, ".").concat(t)),
                    (s.timestamp = new Date().getTime()),
                    (s.msg = JSON.stringify(o)),
                    r.Z.receiveGroupMsg({ type: "appear", obj: s }),
                    "function" == typeof r.Z.reportH5SelfDef)
                  ) {
                    var u = {};
                    (u.spm_id = "".concat(n, "show.").concat(e)),
                      (u.type = "show"),
                      (u.timestamp = new Date().getTime()),
                      (o.position = t),
                      (o.uaSource = window.uaSource),
                      (u.args = JSON.stringify(o)),
                      (u.abtest = l.Z.getDefaultAbtestInfo(window.abtest)),
                      r.Z.receiveGroupMsg({ type: "h5_selfDef", obj: u });
                  }
                },
              },
            ]),
            e
          );
        })();
    },
  },
]);
//# sourceMappingURL=512.65972.function.chunk.js.map
