
  if ( $(window).width() < 768 ) {
    jQuery(function($){
      $('a[href*="#formTop"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
      });
    });
  
  }

  $("a").attr("target", "_blank");

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    var start = +new Date();
    var people = random(9000, 11000);
    var DISCOUNTs_start = random(400, 600);
    var DISCOUNTs = DISCOUNTs_start;
  
    var pr = $("#people-reading");
    var tl = $("#DISCOUNTs-left");
    var fb = $("#flash-banner");
  
    function data() {
        people += random(200, 500);
  
        if (shown) {
            if (DISCOUNTs > 50)
                DISCOUNTs -= random(10, 200) / 100
            else
                DISCOUNTs -= random(10, 30) / 100
  
            DISCOUNTs = Math.max(5, DISCOUNTs);
            tl.text(Math.floor(DISCOUNTs));
        }
  
        pr.text(people);
  
        if (DISCOUNTs < 50) fb.addClass("flashing");
    }
  
    var shown = false;
    var ts = $("#trails-start");
    var hT = ts.offset().top;
    var hH = ts.outerHeight();
    var wH = $(window).height();
  
    