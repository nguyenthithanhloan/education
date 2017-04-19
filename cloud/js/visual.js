// JavaScript Document
(function($) {
  'use strict';

  // IE8では何もしない
  if (new RegExp('msie 8', 'i').test(navigator.userAgent)) return;

  var Visual = $.visual = (function() {
    var
      i,

      WRAPPER_WIDTH = 1200,
      WRAPPER_HEIGHT = 470,
      CLUOD_WIDTH = 2019,
      MIN_OPACITY = 0.6,

      $mainVisual,
      $cloud,
      html,
      img;

    // コンストラクタ
    function init() {
      $mainVisual = $('#main_visual');

      html = '';
      html += '<div class="cloud"></div>';
      $mainVisual.html(html);

      $cloud = $mainVisual.find('.cloud');


      // 固定ループアニメーション - dien hoat vong lap co dinh
      scrollCloud();
    }
    // 雲 - Cloud
    function scrollCloud() {
      $cloud.velocity({
        translateX: [-CLUOD_WIDTH, 0]
      }, {
        duration: CLUOD_WIDTH * 40,
        easing: 'linear',
        complete: scrollCloud
      });
    }

    return {
      init: init
    }
  })();
  /* document.ready
  ----------------------------------------*/
  $(Visual.init);
})(jQuery);
