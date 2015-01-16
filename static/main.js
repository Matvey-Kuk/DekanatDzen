function formatVal(val) {
    return parseFloat(val).toFixed(2).replace(".", ",");
}
function getSignClass(val, prevVal, invert) {
    val = parseFloat(val).toFixed(2);
    prevVal = parseFloat(prevVal.replace(",", ".")).toFixed(2);
    if (val > prevVal) return invert ? 'minus' : 'plus';
    if (val < prevVal) return invert ? 'plus' : 'minus';
    return false;
}

function adjustFontSize() {
    $('.quotes .item').css('width', (Math.floor(99 / $('.quotes .item').length)) + "%");
    $('.quotes .item .value').css('font-size', $('.quotes .item').width() / 3.1);
    setTimeout(function () {
        $('.quotes').css('margin-top', -$('.quotes').height() / 2);
    }, 0)
}

var mySound;
function initMusic() {

    function turnOn() {
        mySound.play()
            .fadeTo(30)
            .loop();
    }

    function turnOff() {
        mySound.stop();
    }

    $('.sound-switch').on('click', function () {
        if ($(this).is('.fa-volume-up')) {
            $(this).removeClass('fa-volume-up').addClass('fa-volume-off')
            $.cookie('sound', 'off');
            turnOff();
        } else {
            $(this).removeClass('fa-volume-off').addClass('fa-volume-up')
            $.cookie('sound', 'on');
            turnOn();
        }
    });

    if ($.cookie('sound') == 'off') {
        $('.sound-switch').removeClass('fa-volume-up').addClass('fa-volume-off')
    } else {
        turnOn();
    }
}

$(window).on('resize', adjustFontSize);

$(document).ready(function () {

    initVideoSwitcher();
    initAudioSwitcher();


    $('.music-switch').on('click', function () {
        if (!settingsOpened) {
            $('.settings-window.audio').addClass('showed')
            $('.quotes').addClass('faded')
            settingsOpened = true;
            return false;
        }
    });
});


function initVideoSwitcher() {
    var videos = ['ocean', 'space', 'aurora', 'snow', 'mountains', 'mountains2', 'rain', 'night', 'volcano', 'meduza', 'desert', 'moscow1', 'waterfall', 'waterfall2', 'waterfall3', 'singapore', 'sea', 'fire', 'palms', 'clever', ];
    var video = $.cookie('video1');
    if (!video || videos.indexOf(video) == -1) {
        video = videos[0]
    }
    var path = 'video/' + video;
    $("#container").vide(path);
    for (var i in videos) {
        $('.video-switcher').append('<a href="' + videos[i] + '" ' + (video == videos[i] ? 'class="active"' : '') + ' style="background-image:url(video/75x75/' + videos[i] + '.jpg)"></a>');
    }

    $("#container").removeClass().addClass(video)


    $('.video-switcher').on('click', 'a', function () {
        $(".video-container").addClass('faded');
        $(this).addClass('active').siblings().removeClass('active');
        $.cookie('video1', $(this).attr('href'));
        var path = 'video/' + $(this).attr('href');
        $("#container").removeClass().addClass($(this).attr('href'))
        setTimeout(function () {
            $("#container").vide(path);
        }, 400)

        return false;
    });
}

function initAudioSwitcher() {

    var musics = ['Thai', 'Beach', 'Blue Line Loop', 'Cosmos', 'Ocean', 'Day and Night', 'Dream of Wings', 'Fire', 'Glass of hope', 'Healing', 'Spa Bells', 'Inner circle', 'Moon Garden', 'Morning Sun', 'Song of Wind', 'The Light', 'Get those vibes', 'The night sub'];
    var music = $.cookie('music')
    if (!music || musics.indexOf(music) == -1) {
        music = musics[0]
    }

    var server = "v1";
    var rnd = Math.floor(Math.random() * 12)
    if (rnd < 2) {
        server = "old"
    } else if (rnd < 4) {
        server = "new"
    }

    var path = 'http://' + server + '.zenrus.ru/sounds/' + music;
    mySound = new buzz.sound(path, {
        formats: ["ogg", "mp3", "aac"],
        volume: 0
    });
    initMusic();
    for (var i in musics) {
        $('.audio-switcher').append('<a href="' + musics[i] + '" ' + (music == musics[i] ? 'class="active"' : '') + '">' + musics[i] + '</a>');
    }

    $('.audio-switcher').on('click', 'a', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $.cookie('music', $(this).attr('href'));
        var path = 'http://v1.zenrus.ru/sounds/' + $(this).attr('href');
        mySound.fadeOut().stop();
        mySound = new buzz.sound(path, {
            formats: ["ogg", "mp3", "aac"],
            volume: 0
        });

        mySound.play()
            .fadeTo(30)
            .loop();

        return false;
    });
}

