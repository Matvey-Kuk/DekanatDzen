$(document).ready(function () {
    var firstDelay = 10000;
    var interCycleDelay = 30000;
    var letterAppearingDelay = 90;
    var onePhraseTime = 3000;
    var interPhraseTime = 100;
    if ($('.top-center-logo-logo').length) {
        $('.center-logo').addClass('shown')
        var doAppearPhrase = function (noteNumber, callback) {
            var self = arguments.callee;
            var $div = $('.top-center-logo-logo .note-' + noteNumber).empty();
            var text = $div.data('text') || '';
            var currentLetterPosition = 1;
            $div.fadeIn(1400, function () {
                setTimeout(function () {
                    if (text) {
                        $div.text(text.substring(0, currentLetterPosition))
                        currentLetterPosition++;
                    }
                    if (text && currentLetterPosition <= text.length) {
                        setTimeout(arguments.callee, letterAppearingDelay);
                    } else {
                        setTimeout(function () {
                            $div.fadeOut(1400, function () {
                                if (noteNumber < 3) {
                                    setTimeout(function () {
                                        self(noteNumber + 1, callback)
                                    }, interPhraseTime)
                                } else {
                                    callback();
                                }
                            });
                        }, onePhraseTime)
                    }
                }, letterAppearingDelay)
            })

        };

        setTimeout(function () {
            var cycleStart = arguments.callee;
            doAppearPhrase(1, function () {
                setTimeout(cycleStart, interCycleDelay)
            });
        }, firstDelay);
    }

});