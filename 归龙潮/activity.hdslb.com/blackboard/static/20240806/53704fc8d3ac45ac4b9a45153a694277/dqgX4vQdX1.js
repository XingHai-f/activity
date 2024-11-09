function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined" ? module.exports = factory(require("react/jsx-runtime")) : typeof define === "function" && define.amd ? define(["react/jsx-runtime"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.EvaLayoutContainerPrerender = factory(global.jsxRuntime));
})(this, function (jsxRuntime) {
  "use strict";

  function EvaLayoutContainerPrerender(props) {
    var children = props.children;
    return /* @__PURE__ */jsxRuntime.jsx(jsxRuntime.Fragment, {
      children: children
    });
  }
  return EvaLayoutContainerPrerender;
});
