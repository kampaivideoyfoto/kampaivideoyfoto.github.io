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
    width: '211',
    videoId: 'xuSng5CbX9k'
  });
  player = new YT.Player('ytplayer15anios', {
    height: '130',
    width: '211',
    videoId: 'xuSng5CbX9k'
  });
  player = new YT.Player('ytplayerExtras', {
    height: '130',
    width: '211',
    videoId: 'xuSng5CbX9k'
  });
}

$(function() {

  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    center:true,
    items: 1
  });
}());
