;(function($, win){
  'use strict';

  var TopPage = $.toppage = (function() {
    var
      slider = null,
      duration = 500,
      ua = window.navigator.userAgent.toLowerCase(),
      legacyFlg = false;

    function init(){
      sliderHalloween();

      if (ua.indexOf('ie 9') > -1 || ua.indexOf('ie 10') > -1) {
        legacyFlg = true;
      } else {
        $('body').addClass('modern');
      }

      // windowã‚¤ãƒ™ãƒ³ãƒˆ
      $(window).on({
        'focus': onFocus,
      }).trigger();

      // åˆå›žãƒ•ã‚©ãƒ¼ã‚«ã‚¹ã‚¤ãƒ™ãƒ³ãƒˆ
      onFocus();

      $('.shake_panel').each(function() {
        var $this = $(this);
        $this.on({
          'mouseenter': function() {
            $this.velocity('stop', true);
          },
          'mouseleave': function() {
            shakePanel($this);
          }
        });
      });
    }

    function onFocus() {
      console.log("onFocus");
      $('.shake_panel').each(function() {
        $(this).velocity('stop', true);
      });


      // ãƒ‘ãƒãƒ«ã‚’æºã‚‰ã™
      // shakePanel($('.shake_panel'));
      $('.shake_panel').each(function() {
        shakePanel($(this));
      });

      animatePageTop();
    }


    function shakePanel($panel) {
      if (legacyFlg) {
        $panel.velocity('stop', true);
        $panel.velocity({
          rotateZ: 5
        }, {
          duration: 600,
          easing: 'easeOutSine',
          mobileHA: true
        }).velocity({
          rotateZ: -5
        }, {
          duration: 1300,
          easing: 'easeInOutSine',
          loop: true,
          mobileHA: true
        });
      }
    }

    function sliderHalloween() {
      $(".halloween_slider").each(function() {
        var next = $(this).find(".swiper-button-next");
        var prev = $(this).find(".swiper-button-prev");
        $(this).find(".photo_slider").slick({
          infinite: true,
          fade: true,
          autoplay: true,
          arrows: true,
          autoplaySpeed: 5000,
          nextArrow: next,
          prevArrow: prev,
          cssEase: 'linear'
        });
      });
    }



    return {
      init: init
    };

  })();

  $(TopPage.init);

})(jQuery, window);
