(function(window, document, undefined) {

  var defaults = {};

  $.fn.slidebar = function(options) {
    return this.each(function() {
      var bar = $(this);
      var win = $(window);

      options = $.extend({}, defaults, options || {});

      var lastWinTop = win.scrollTop();
      var lastWinHeight = win.height();
      var lastWinBottom = lastWinTop + lastWinHeight;

      var marginTop = options.marginTop || bar.offset().top - lastWinTop;
      var marginBottom = options.marginBottom || marginTop;

      function slideMe() {
        var barTop = bar.offset().top;
        var barHeight = bar.outerHeight();
        var barBottom = barTop + barHeight;

        var winTop = win.scrollTop();
        var winHeight = win.height();
        var winBottom = winTop + winHeight;

        if(winBottom > lastWinBottom && barBottom < winBottom - marginBottom) {
          bar.css({ position: "fixed", top: "auto", bottom: marginBottom });
        } else if(winTop < lastWinTop && barTop > winTop + marginTop) {
          bar.css({ position: "fixed", top: marginTop, bottom: "auto" });
        } else {
          bar.css({ position: "absolute", top: barTop, bottom: "auto" });
        }

        lastWinTop = winTop;
        lastWinHeight = winHeight;
        lastWinbottom = winBottom;
      }

      $(window).scroll(slideMe).resize(slideMe);
    });
  };

})(window, document);