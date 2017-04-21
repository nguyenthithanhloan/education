(function($) {
$(function(){
  var _imgNum = 0; //画像の枚数  Gazō no maisū  / number of image
  var _imgSize = 0; //　画像のサイズ　Gazō no saizu / size of image
  var _current = 0; // 建材の画像　　Kenzai no gazō 　/ image current
  var _timer = 3000; //　タイマー時間　Taimā jikan 　/ timer time

 // 各ボタン配置　　kaku botan haichi 　/ arrangement each button
  $("#container").append('<a href="#"><img src="img/btn_prev.gif" width="30" height="30" id="btn-prev" /></a><a href="#"><img src="img/btn_next.gif" width="30" height="30" id="btn-next"  /></a><div id="pagenation"><ul></ul></div>');

　// 画像サイズ取得　Gazō saizu shutoku 　/ get image size
  _imgSize = $("#banner ul li").width();

  // メイン画像の数だけ繰り返す　Mein gazō no kazu dake kurikaesu 　/  only counting repeat of main image
  $("#banner ul li").each(function() {
    $(this).css('margin-left', -_imgSize);
    //　画像の数だけベージネーションボタンを作成　
    if(_imgNum == _current) {
      $('#pagenation ul').append('<li class="active"><a href="#"><img src="img/pagenation.gif" width="12" height="24" /></a></li>');
      $(this).css('margin-left', '0px');
    } else {
      $('#pagenation ul').append('<li><a href="#"><img src="img/pagenation.gif" width="12" height="24" /></a></li>');
    }
    _imgNum++;
  });

  var loopSwitch = setInterval(loop, _timer);
  function loop() {
    imageMove(_current + 1)
  }

  $('#btn-next').click(function(e) {
    e.preventDefault();
    imageMove(_current + 1)
  });

  $("#btn-prev").click(function(e) {
    e.preventDefault();
    imageMove(_current - 1)
  });

  $("#pagenation ul li").click(function(e) {
      e.preventDefault();
      var thisNum = $("#pagenation li").index(this);
      if(thisNum != _current) {
        imageMove(thisNum)
      }
  });

  function imageMove(next) {
    //rest time loop
    clearInterval(loopSwitch);
    loopSwitch = setInterval(loop, _timer);

    var pos;
    if (_current < next) {
      pos = -_imgSize;
    } else {
      pos = _imgSize;
    }

    if (next == _imgNum) {
      next = 0;
    } else if (next == -1) {
      next = (_imgNum - 1)
    }

  $("#banner li").eq(next).css("margin-left", pos)
  .animate({
    marginLeft: "0"
  }, "fast");

  $("#banner li").eq(_current).animate({
    marginLeft: -pos
  }, "fast");

  $("#pagenation li").eq(_current).removeClass('active');
  $("#pagenation li").eq(next).addClass('active');
  _current = next;

  }

});
})(jQuery);
