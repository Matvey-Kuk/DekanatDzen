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

function pluralize(value, strings) {
//    if (value > 100) {
//        value = value % 100;
//    }
//
//    firstDigit = value % 10;
//    secondDigit = Math.floor(value / 10);
//
//    if (secondDigit != 1) {
//        if (firstDigit == 1) {
//            return strings[0];
//        } else if (firstDigit > 1 && firstDigit < 5) {
//            return strings[1];
//        } else {
//            return strings[2];
//        }
//    } else {
//        return strings[2];
//    }
}


$(window).on('resize', adjustFontSize);

$(document).ready(function () {

    var $time = $('.datetime .time');
    setInterval(function () {
        var dt = new Date();
        var minutes = dt.getMinutes()
        $time.text(dt.getHours() + ':' + (minutes < 10 ? "0" : "") + minutes)
    }, 1000)

//    if ($.cookie('asn2')) {
//        $('.update-hint').hide();
//    } else {
//        setTimeout(function () {
//            $('.update-hint').fadeOut();
//        }, 15000)
//    }
//    $.cookie('asn2', true);
//
    adjustFontSize();
//    var quotes = ['usd', 'eur', 'brent'];
//    var elements = {};
//
//    var $clientsOnline = $('.clients-online span');
//    var $body = $('body');
//    var showed = false
//
//
//    for (var i in quotes) {
//        elements[i] = {};
//        elements[i].$container = $('.quotes .item.' + quotes[i]);
////        elements[i].$cell = $('.quotes .item.' + quotes[i] + ' .value');
//    }
//
//    for (i in current) {
//        elements[i].$cell.text(formatVal(current[i]));
//    }
//    var rubbrent = current[0] * current[2];
////    $('.rubbrent').text(Math.round(rubbrent) + ' ' + pluralize(rubbrent, ['рубль', 'рубля', 'рублей']) + ' за баррель');
//
//
//    var lastValuesUpdate = [0, 0, 0, 0];
//
//    function initWebsockets() {
//        var conn = new WebSocket('ws://' + window.location.hostname + ':8888');
//        conn.onmessage = function (e) {
//            var values = e.data.split(';');
//            for (i in values) {
//                if (i == 3) {
//                    if (!showed) {
//                        $clientsOnline.parent().addClass('showed')
//                        showed = true;
//                    }
//                    if ((new Date).getTime() - lastValuesUpdate[3] > 4000) {
//                        lastValuesUpdate[3] = (new Date).getTime();
//                        $clientsOnline.text(values[i])
//                    }
//                    continue;
//                }
//                if (i == 4) {
//                    $body.attr('signature', values[i]);
//                    continue;
//                }
//                if (i == 5) {
//                    $("#morozSumm SPAN").text(parseInt(values[i]));
//                    $("#morozSumm").addClass('shown')
//                    continue;
//                }
//                if ((new Date).getTime() - lastValuesUpdate[i] > 2000) {
//                    lastValuesUpdate[i] = (new Date).getTime();
//                    var signClass = getSignClass(values[i], elements[i].$cell.text(), i != 2);
//                    if (signClass) {
//                        elements[i].$container.removeClass('plus').removeClass('minus')
//                    }
//                    elements[i].$container.addClass(signClass);
//                    elements[i].$cell.text(formatVal(values[i]));
//                }
//            }
//            var rubbrent = values[0] * values[2];
////            $('.rubbrent').text(Math.round(rubbrent) + ' ' + pluralize(rubbrent, ['рубль', 'рубля', 'рублей']) + ' за баррель');
//
//        };

//    }


//    initWebsockets()
//    setInterval(function () {
//        console.log('watchdog')
//        if ((new Date).getTime() - lastValuesUpdate[3] > 120) {
//            initWebsockets()
//        }
//    }, 3600000)

    initVideoSwitcher()
    initAudioSwitcher()
    //initMegaday();

    var settingsOpened = false;
    $('.settings-switch').on('click', function () {
        if (!settingsOpened) {
            $('.settings-window.video').addClass('showed')
            $('.quotes').addClass('faded')
            settingsOpened = true;
            return false;
        }
    })

    $('.music-switch').on('click', function () {
        if (!settingsOpened) {
            $('.settings-window.audio').addClass('showed')
            $('.quotes').addClass('faded')
            settingsOpened = true;
            return false;
        }
    })

    $('.contacts').on('click', function () {
        if (!settingsOpened) {
            $('.settings-window.info').addClass('showed')
            $('.quotes').addClass('faded')
            settingsOpened = true;
            return false;
        }
    })

    $('.rapture').on('click', function () {
            $('.settings-window.info').removeClass('showed')
            $('.settings-window.donate').addClass('showed')
            settingsOpened = true;
            return false;
    })


    $(document).on('click', function (e) {
        if (settingsOpened) {
            if (!$('.settings-window').is(e.target) && $('.settings-window').has(e.target).length === 0
                || $('.settings-window .close').is(e.target)
            ) {
                $('.settings-window').removeClass('showed')
                $('.quotes').removeClass('faded')
                settingsOpened = false;
                return false;
            }
        }
    });
});


function initVideoSwitcher() {
    var videos = ['ocean', 'space', 'aurora', 'snow', 'mountains', 'mountains2', 'rain', 'night', 'volcano', 'meduza', 'desert', 'moscow1', 'waterfall', 'waterfall2', 'waterfall3', 'singapore', 'sea', 'fire', 'palms', 'clever', ];
    var video = $.cookie('video1')
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

