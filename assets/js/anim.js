$(function () {
    // mouseover et mouseout de la flèche cv qui défini l'animation.
    $('#header_arrowTop').mouseover(function () {
        if ($(document).width() <= 650) {
            $('#header_arrowTop').css({
                'bottom': '56px',
                'opacity': '0.2'
            });
        } else {
            $('#header_arrowTop').css({
                'bottom': '146px',
                'opacity': '0.2'
            });
        }
    });
    $('#header_arrowTop').mouseout(function () {
        if ($(document).width() <= 650) {
            $('#header_arrowTop').css({
                'bottom': '51px',
                'opacity': '1'
            });
        } else {
            $('#header_arrowTop').css({
                'bottom': '141px',
                'opacity': '1'
            });
        }
    });
    // mouseover et mouseout de la flèche contact qui défini l'animation.
    $('#header_arrowLeft').mouseover(function () {
        $(this).css({
            'position': 'relative',
            'right': '5px',
            'opacity': '0.2'
        });
    });
    $('#header_arrowLeft').mouseout(function () {
        $(this).css({
            'position': 'relative',
            'right': '0px',
            'opacity': '1'
        });
    });
    // mouseover et mouseout de la flèche projet qui défini l'animation.
    $('#header_arrowRight').mouseover(function () {
        $(this).css({
            'position': 'relative',
            'left': '5px',
            'opacity': '0.2'
        });
    });
    $('#header_arrowRight').mouseout(function () {
        $(this).css({
            'position': 'relative',
            'left': '0px',
            'opacity': '1'
        });
    });
    // mouseover et mouseout de la flèche home qui défini l'animation.
    $('#header_arrowBottom').mouseover(function () {
        $(this).css({
            'position': 'relative',
            'top': '5px',
            'opacity': '0.2'
        });
    });
    $('#header_arrowBottom').mouseout(function () {
        $(this).css({
            'position': 'relative',
            'top': '0px',
            'opacity': '1'
        });
    });
});