// (function () {
//   var ua = window && window.navigator && window.navigator.userAgent
//   if (!ua) return
//   var text
//   var scale = 1.0
//   window.ratio = 1
//   if (/(ipad|iphone|ipod)/i.exec(ua)) {
//     if (window.devicePixelRatio >= 2 && !false && window.__wxjs_environment !== 'miniprogram') {
//       scale *= 0.5
//       window.ratio *= 2
//     }
//   }
//   // text = '<meta name="viewport" content="initial-scale=' + scale + ',' + 'maximum-scale=' + scale + ', minimum-scale=' + scale + ',' + 'width=device-width, height=device-height, user-scalable=no" />'
//   text = document.createElement('meta')
//   text.name = 'viewport'
//   text.content = 'initial-scale=' + scale + ',' + 'maximum-scale=' + scale + ', minimum-scale=' + scale + ',' + 'width=device-width, height=device-height, user-scalable=no'
//   document.getElementsByTagName('head')[0].appendChild(text)
//   if (window.ratio) {
//     document.documentElement.style.fontSize = 50 * window.ratio + 'px'
//     function CalcRem () {
//         if (true) {
//             var defaultWidth = window.ratio === 2 ? 750 : 375
//             var docEl = document.documentElement
//             var winWidth = docEl.clientWidth || defaultWidth
//             if (winWidth <= 414 * window.ratio) {
//                 document.documentElement.style.fontSize = (winWidth / defaultWidth) * (50 * (window.ratio || 1)) + 'px'
//             }
//         }
//     }
//     CalcRem()
//     window.addEventListener('resize', CalcRem, false)
//     document.documentElement.classList.add('ratio-' + window.ratio)
//   }
// })()

;(function (doc, win, undefined) {
   var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (clientWidth === undefined) return;
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
     };
    if (doc.addEventListener === undefined) return;
   win.addEventListener(resizeEvt, recalc, false);
   doc.addEventListener('DOMContentLoaded', recalc, false)
 })(document, window);

// (function(doc, win) {
//     var html = doc.getElementsByTagName("html")[0],
//     // orientationchange->手机屏幕转屏事件
//     // resize->页面大小改变事件(一边pc端有用)
//         reEvt = "orientationchange" in win ? "orientationchange" : "resize",
//         reFontSize = function() {
//             var clientW = doc.documentElement.clientWidth || doc.body.clientWidth;
//             if(!clientW) {
//                 return;
//             }
//             html.style.fontSize = 100 * (clientW / 375) + "px";
//     }
//     win.addEventListener(reEvt, reFontSize);
//     // DOMContentLoaded->dom加载完就执行,onload要dom/css/js都加载完才执行
//     doc.addEventListener("DOMContentLoaded", reFontSize);
// })(document, window);