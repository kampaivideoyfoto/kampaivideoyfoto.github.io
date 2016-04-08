// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var playerReel, playerBodas, player15anios, playerExtras;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayeReel', {
    height: '390',
    width: '640',
    videoId: 'xuSng5CbX9k'
  });
  player = new YT.Player('ytplayerBodas', {
    height: '130',
    videoId: 'xuSng5CbX9k'
  });
  player = new YT.Player('ytplayer15anios', {
    height: '130',
    videoId: 'xuSng5CbX9k'
  });
  player = new YT.Player('ytplayerExtras', {
    height: '130',
    videoId: 'xuSng5CbX9k'
  });
}

$(function() {

  var carouselObj = {
    loop:true,
    autoplay:true,
    center:true,
    items: 1,
    responsive:{
        0:{
            items:1
        },
        632:{
            items:1
        }
    }
  };

  var container = $('.owl-carousel'),
      mobile = false;

  $(window).resize(function () {

    $("[data-change-src]").each(function(key, val){
      if ($(window).width() <= $(val).attr("trigger-width")){
          var current = $(val).attr("src");
          var newSrc = current.replace('full', 'mobile');
          $(val).attr("src", newSrc);

          mobile = true;
      }
      else{
          var current = $(val).attr("src");
          var newSrc = current.replace('mobile', 'full');
          $(val).attr("src", newSrc);

          mobile = false;
      }
    });

    if (mobile === true)
    {
      container.removeClass('owl-carousel owl-loaded');

      if (container.data('owlCarousel'))
      {
        container.data('owlCarousel').destroy();
        container.find('.owl-stage-outer').children().unwrap();
        container.removeData();
      }
      container.owlCarousel(carouselObj);
    }
    else
    {
      container.removeClass('owl-carousel owl-loaded');

      if (container.data('owlCarousel'))
      {
        container.data('owlCarousel').destroy();
        container.find('.owl-stage-outer').children().unwrap();
        container.removeData();
      }
        container.owlCarousel(carouselObj);
    }
  });

  $(window).resize();

  $(".burger").click(function(){
    $("#triangle-topleft, html, nav").toggleClass("menu__active");
    $(this).toggleClass('burger--close');
  });

  var imgCount = $("img").length, currentImgCount = 0;

  $(document).ready(function () {
      $("img").show(300);
      $(".preloadBG").each(function () {
          var t, n, r = $(this),
          i = r.css("background-image");
          i && (t = i.replace(/(^url\()|(\)$|[\"\'])/g, ""),
          n = new Image, n.src = t, n.complete && $(n).trigger("load"))
      })
  });
  $("img").load(function () {
      currentImgCount++; NProgress.set(currentImgCount / imgCount - .2);
      currentImgCount == imgCount && setTimeout(function () {
          /mobile/i.test(navigator.userAgent) && !location.hash && setTimeout(function () { window.scrollTo(0, 1) },
          2e3);
          NProgress.done(!0);
          $(".overlay").hide();
          $("img").unbind("load")
      },
      2e3)
  }).each(function () { this.complete && $(this).trigger("load") });
}());
