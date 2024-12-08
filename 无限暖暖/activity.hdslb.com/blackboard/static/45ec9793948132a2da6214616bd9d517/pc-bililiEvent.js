setTimeout(function () {
  window.dispatchEvent(new Event('scroll'))
}, 500)
window.addEventListener('click', function () {
  window.BiliActEvents && window.BiliActEvents.emit('PLATC_TAB_CLICK')
})
!(function () {
  function n() {
    function a() {
      clearTimeout(c)
      c = setTimeout(function () {
        return b.scroll()
      }, 5)
    }
    var b = this
    this.init()
    var c
    if (window.BiliActEvents) window.BiliActEvents.on('PLATC_TAB_CLICK', a)
    else
      setTimeout(function () {
        if (window.BiliActEvents) window.BiliActEvents.on('PLATC_TAB_CLICK', a)
      }, 1e3)
    window.addEventListener('scroll', a)
    window.addEventListener('touchmove', a)
    window.addEventListener('wheel', a)
    this.onscroll = a
    this.removeScroll = function () {
      window.removeEventListener('scroll', a)
      window.removeEventListener('touchmove', a)
      window.removeEventListener('wheel', a)
    }
  }
  function p(a, b) {
    if (!v.test(a)) return a
    var c = a.split('?'),
      h = c.shift().replace(/(https?:)?\/\/i(\\d)/, 'https://i' + 3 * Math.random()),
      d = h.match(w)
    if (!(d && 0 < d.length)) return a
    d = d[1]
    var e = (x || b) && m,
      f = /png|jpe?g|webp/.test(d)
    c = 0 < c.length ? '?'.concat(c.join('?')) : ''
    return f && (b || e)
      ? ''
          .concat(h, '@')
          .concat(b, '.')
          .concat(e ? 'webp' : d)
          .concat(c)
      : a
  }
  function y(a) {
    for (var b = 0; null !== a; ) (b += a.offsetTop), (a = a.offsetParent)
    return b
  }
  function q(a, b) {
    if (r[a]) return b && b()
    var c = new Image()
    c.onload = function () {
      b && b()
      r[a] = !0
      c = null
    }
    c.onerror = function () {
      b && b('error')
    }
    c.src = a
  }
  var x = /Windows\\s*Phone|Android|iPhone|iPad|PlayBook|Mobile|Tablet/.test(
      window.navigator.userAgent
    ),
    m = !1,
    v = /^(https?:)?\/\/(uat-)?(i|s)\d\.hdslb\.com\/bfs\//i
  try {
    m = 0 === document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp')
  } catch (a) {
    m = !1
  }
  n.prototype = {
    domList: [],
    init: function () {
      this.getLoadDom()
      this.scroll()
    },
    scroll: function () {
      for (
        var a = document.body.scrollTop || document.documentElement.scrollTop,
          b = window.innerHeight || document.documentElement.clientHeight,
          c = this.domList,
          h = c.length,
          d = -1,
          e = function () {
            var f = c[d],
              g = f.dom
            if (g) {
              var k = y(g)
              k + (g.clientHeight || g.scrollHeight) >= a - 2.5 * b &&
                k <= a + 2.5 * b &&
                null !== g.offsetParent &&
                (q(f.url, function (l) {
                  if ('string' === typeof l)
                    return console.warn(f.url, '\u52a0\u8f7d\u5931\u8d25'), !1
                  'img' === f.tagName
                    ? (g.src = f.url)
                    : (g.style.backgroundImage = 'url('.concat(f.url, ')'))
                }),
                c.splice(d, 1),
                --d,
                --h)
            }
          };
        ++d < h;

      )
        e()
      0 >= h.length && this.removeScroll()
    },
    getLoadDom: function () {
      var a = this,
        b = Array.prototype.slice.call(
          document.body.querySelectorAll('.t-lazyload-image,[data-src]')
        ),
        c = b.length
      if (0 < c)
        for (
          var h = function (e) {
              e = b[e]
              var f = e.getAttribute('data-src'),
                g = e.getAttribute('data-bfs')
              e.className = e.className.replace('t-lazyload-image', '')
              e.removeAttribute('data-src')
              e.removeAttribute('data-bfs')
              if (!f) return 'continue'
              var k = []
              g &&
                g.split('_').forEach(function (l) {
                  var z = l.substr(l.length - 1, 1)
                  0 <= ['h', 'w', 'q', 'e', 's'].indexOf(z[0]) && k.push(l)
                })
              a.domList.push({
                url: p(f, k.join('_')),
                tagName: e.tagName.toLowerCase(),
                dom: e
              })
            },
            d = 0;
          d < c;
          d += 1
        )
          h(d)
    }
  }
  var w = /\/[^@]+\.([a-z]+)$/i,
    r = {}
})()
