!(function (document) {
        function addClass(className) {
          document.documentElement.classList.add(className);
        }
        function doDetect() {
          var avif = new Image();
          avif.onload = function () {
            addClass("avif");
            window.localStorage && window.localStorage.setItem('BILI_ACTIVITY_IMG_SUPPORT', 'avif')
          };
          avif.onerror = function () {
            function check_webp_feature(callback) {
              var img = new Image();
              img.onload = function () {
                var result = img.width > 0 && img.height > 0;
                callback(result);
              };
              img.onerror = function () {
                callback(false);
              };
              img.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
            }
            check_webp_feature(function (isSupported) {
              if (isSupported) {
                addClass("webp");
                window.localStorage && window.localStorage.setItem('BILI_ACTIVITY_IMG_SUPPORT', 'webp')
              }
            });
          };
          avif.src =
          "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
        }
        try {
          const supportType = window.localStorage && window.localStorage.getItem('BILI_ACTIVITY_IMG_SUPPORT')
          if (supportType) {
            addClass(supportType)
          } else {
            doDetect()
          }
        } catch (error) {
          console.log('bili-activity: detect image type failed', error)
        }
      })(document);