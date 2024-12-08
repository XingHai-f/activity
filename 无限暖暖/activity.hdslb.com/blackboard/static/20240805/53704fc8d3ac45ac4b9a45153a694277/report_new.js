// 新平台埋点：C端活动页-组件曝光&点击埋点、页面停留时长、页面交互时长埋点

(function (E, d, w) {
  if (!E.composedPath) {
    E.composedPath = function () {
      if (this.path) {
        return this.path;
      }
      var target = this.target;

      this.path = [];
      while (target.parentNode !== null) {
        this.path.push(target);
        target = target.parentNode;
      }
      this.path.push(d, w);
      return this.path;
    }
  }
})(Event.prototype, document, window);

(function () {
  function getSpmid() {
    if (window.activity && window.activity.spmId) {
      return window.activity.spmId
    }
    var metas = document.getElementsByTagName('meta')

    for (var i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === 'spm_prefix') {
        return metas[i].getAttribute('content')
      }
    }

    return '888.1';
  }

  function getPageId() {
    if (window.activity && window.activity.id) {
      return window.activity.id
    }

    return ''
  }

  function getAppBuvid() {
    var ua = window.navigator.userAgent
    var buvidMatch = ua.match(/Buvid\/([a-zA-Z0-9]+)/)
    if (buvidMatch && buvidMatch.length > 0) {
      return buvidMatch[1]
    }
    return
  }

  // 上报方法（click、show）按照新埋点规则上报
  var spmid = getSpmid();
  var pageId = getPageId();
  var appBuvid = getAppBuvid();

  function sendReporter(type, msg) {
    var eventId = (type === 'error' ? 'clickpath' : msg.module_id) + '.0.' + type
    if (pageId) {
      msg.page_id = pageId;
    }
    if (appBuvid) {
      msg.appBuvid = appBuvid
    }

    // 位置盒子不上报
    if (['EvaPositionBox', 'EvaPage'].includes(msg.module)) {
      return
    }

    if (window.biliMirror && window.biliMirror.customReportPb && window.biliMirror.customPerformanceQuota && spmid) {
      try {
        var regex = /^(navInteract|domInteract|appDuration)/;
        if (regex.test(type)) {
          window.biliMirror.customPerformanceQuota({
            name: type,
            value: msg[type === 'appDuration' ? 'appDuration' : 'interactDuration'],
          })
        } else {
          window.biliMirror.customReportPb({
            type: 'click',
            eventId: eventId,
            msg: msg || {}
          })
        }
      } catch (e) {
        return;
      }
    }
  }

  window.sendReporter = sendReporter;

  // 模块的点击上报
  document.addEventListener('click', function (e) {
    if (!e.composedPath) {
      sendReporter('error', {
        className: e.target.className,
      });
      return
    };
    var patharr = e.composedPath();
    if (patharr.length > 0) {
      for (var i = 0; i < patharr.length; i++) {
        var node = patharr[i];
        if (
          node &&
          node.dataset &&
          node.dataset.cy === 'EvaRenderer_LayerWrapper'
        ) {
          sendReporter('click', {
            module_id: node.dataset.layerId,
            module_label: node.dataset.layerLabel || '',
            module: node.children && (node.children[0].dataset.cy || node.dataset.module || node.children[0].className)
          });
        }
      }
    }
  }, true);

  /* 曝光上报逻辑 */
  var reportMap = {};
  var io;
  var isIntersectionObserver = !!window.IntersectionObserver;

  function sendNodeShow(node, id, label) {
    if (reportMap[id] === 1) {
      reportMap[id] = 2
      sendReporter('show', {
        module_id: id,
        module_label: label,
        module: node.dataset.cy || node.parentNode.dataset.module || node.className
      });
    }
  }

  function parseParamToObj(obj) {
    if (!obj) return;
    var str = obj.search;
    if (!str) {
      str = obj.hash;
    }
    var index = str.indexOf('?');
    str = str.substring(index + 1);
    var result = {};
    var paramArray = str.split('&');
    for (var i = 0, len = paramArray.length; i < len; i++) {
      var pair = paramArray[i].split('=');
      if (pair[1] === '') {
        pair.push('');
      }
      result[pair[0]] = pair[1];
    }
    return result;
  }

  var searchObj = parseParamToObj(location);

  var defaultReportMsgObject = Object.assign({}, window.era_default_report_msg_obj || {
    share_source: searchObj.share_source,
    era_source: searchObj.msource || searchObj.from_spmid || searchObj.spm_id_from || searchObj.topic_from || searchObj.from,
    page_id: pageId,
  })
  if (window.biliMirror) {
    window.biliMirror.customReportPb({
      type: 'pv',
      eventId: '0.0.pv',
      msg: defaultReportMsgObject
    })
  }

  if (isIntersectionObserver) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (window.getComputedStyle(entry.target).visibility !== 'visible') {
          return;
        }
        if (entry.intersectionRatio < 0.2) {
          return;
        }
        var id = entry.target.parentNode.dataset.layerId
        var label = entry.target.parentNode.dataset.layerLabel

        sendNodeShow(entry.target, id, label);
      })
    }, {
      threshold: [0.2]
    });
  }

  // document.addEventListener('scroll', function (e) {
  //   debounceTime();
  // });

  function waitContentLoadAndObserve() {
    if (!(document.body.clientHeight > 14)) {
      return setTimeout(waitContentLoadAndObserve, 200);
    }

    updateIntersectionObserver()
  }
  // window.addEventListener('load', function () {
  //   // 首屏需要等待一段时间后再上报
  //   setTimeout(() => {
  //     waitContentLoadAndObserve()
  //   }, 3000)
  // }, false);

  // 阻塞频繁执行
  var timeout;
  function debounceTime(time) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      updateIntersectionObserver();
    }, time || 100);
  }

  function updateIntersectionObserver() {
    var allModule = document.querySelectorAll('[data-cy="EvaRenderer_LayerWrapper"]');
    if (!allModule) {
      return
    }
    for (var i = 0; i < allModule.length; i++) {
      var node = allModule[i];
      if (window.getComputedStyle(node).visibility !== 'visible') {
        continue;
      }
      var module = node.children[0];
      var id = node.dataset.layerId;
      var label = node.dataset.layerLabel;

      if (!reportMap[id] && module) {
        if (isIntersectionObserver) {
          reportMap[id] = 1;
          io.observe(module);
        } else if (isElementInViewport(node)) {
          reportMap[id] = 1;
          sendNodeShow(module, id, label);
        }
      }
    }
  }

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      return false;
    }

    var innerHeight = window.innerHeight;
    var innerWidth = window.innerWidth;

    // 有效坐标
    var left_v = rect.left <= 0 || rect.left > innerWidth ? 0 : rect.left;
    var top_v = rect.top <= 0 || rect.top > innerHeight ? 0 : rect.top;
    var right_v = rect.right <= 0 || (rect.right > innerWidth && rect.left > innerWidth) ? 0 : rect.right > innerWidth ? innerWidth : rect.right;
    var bottom_v = rect.bottom <= 0 || (rect.bottom > innerHeight && rect.top > innerHeight) ? 0 : rect.bottom > innerHeight ? innerHeight : rect.bottom;
    // 在窗口的宽高
    var width_v = right_v - left_v;
    var height_v = bottom_v - top_v;
    var area_v = width_v * height_v;
    var area = rect.width * rect.height;

    return area_v >= area / 5 || height_v > innerHeight / 2;
  }
  /* 曝光上报逻辑 */
  
  /*
  * 计算页面交互时长
  */
  var navigationStart = performance.timeOrigin || performance.timing.navigationStart || Date.now();
  var firstInteractTracked = false
  trackFirstInteractAndReport()

  function debounce(func, wait, immediate) {
    var timeout
    return function (...args) {
      var context = this
      var later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  function onInteract(cb, once) {
    var eventTypes = ['mousedown', 'keydown', 'touchstart', 'wheel', 'touchend']
    var handler = (e) => {
      cb({
        type: e.type,
        ts: Date.now()
      })
      if (once) {
        eventTypes.forEach((item) => {
          window.removeEventListener(item, debounced)
        })
      }
    }
    var debounced = debounce(handler, 500)
    eventTypes.forEach((item) => {
      window.addEventListener(item, debounced)
    })
  }

  function trackFirstInteractAndReport() {
    if (firstInteractTracked) return
    onInteract((info) => {
      var navigationEntry = performance.getEntriesByType('navigation')[0];
      var domComplete = performance.timing.domComplete;
      var navToInteractDuration = info.ts - navigationStart;
      var domToInteractduration = 0;
      if (domComplete) {
        domToInteractduration = info.ts - domComplete;
      } else if (navigationEntry && navigationEntry.domComplete) {
        domToInteractduration = performance.now() - navigationEntry.domComplete;
      }
      sendReporter(`navInteract-${info.type}`, { interactDuration: navToInteractDuration })
      sendReporter(`domInteract-${info.type}`, { interactDuration: domToInteractduration })
    }, true)
    firstInteractTracked = true
  }

})();