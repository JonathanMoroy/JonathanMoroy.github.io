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
    // mouseover et mouseout de la flèche contact qui défini l'animation.
    $('#header_arrowLeft').mouseover(function () {
        $('#header_arrowLeft').css({
            'position': 'relative',
            'right': '5px',
            'opacity': '0.2'
        });
    });
    // mouseover et mouseout de la flèche projet qui défini l'animation.
    $('#header_arrowRight').mouseover(function () {
        $('#header_arrowRight').css({
            'position': 'relative',
            'left': '5px',
            'opacity': '0.2'
        });
    });
    // mouseover et mouseout de la flèche home qui défini l'animation.
    $('#header_arrowBottom').mouseover(function () {
        $('#header_arrowBottom').css({
            'position': 'relative',
            'top': '5px',
            'opacity': '0.2'
        });
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
    $('#header_arrowLeft').mouseout(function () {
        $('#header_arrowLeft').css({
            'position': 'relative',
            'right': '0px',
            'opacity': '1'
        });
    });
    $('#header_arrowRight').mouseout(function () {
        $('#header_arrowRight').css({
            'position': 'relative',
            'left': '0px',
            'opacity': '1'
        });
    });
    $('#header_arrowBottom').mouseout(function () {
        $('#header_arrowBottom').css({
            'position': 'relative',
            'top': '0px',
            'opacity': '1'
        });
    });  
});