// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: '640',
        height: '390',
        videoId: songs[today_song][1],
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
ready = 0;
function onPlayerReady(event) {
    ready = 1;
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
curr_timeout = 0;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
    if(win==0){
        curr_timeout = setTimeout(stopVideo, lengths[guess]*1000);
    }
    done = true;
    }
}
function stopVideo() {
    player.stopVideo();
    playing_music = 0;
    currenttimeout = 0;
    clearTimeout(curr_timeout);
}