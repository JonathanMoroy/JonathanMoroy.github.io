// Fonction qui attend que le document soit ready
$(function () {
    // déclaration d'un tableau où se trouve les touches utiliser
    var key = [37, 38, 39, 40];
    // Ajout d'un keypress à window où un switch détermine avec les keycode des flêches directionnelles la navigation entre les pages
    $(document).keydown(function (i) {
        // variable qui récupere les touches pressées
        var press = i.which || i.keyCode;
        // Switch qui détermine la localisation et configure l'animationd es flèches avec les touches 37, 38, 39, et 40
        switch (press) {
            case 37:
                window.location = '#!/contact';
                $('#header_arrowLeft').css({
                    'position': 'relative',
                    'right': '5px',
                    'opacity': '0.2'
                });
                break;
            case 38:
                window.location = '#!/resume';
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
                break;
            case 39:
                window.location = '#!/project';
                $('#header_arrowRight').css({
                    'position': 'relative',
                    'left': '5px',
                    'opacity': '0.2'
                });
                break;
            case 40:
                window.location = '#!/home';
                $('#header_arrowBottom').css({
                    'position': 'relative',
                    'top': '5px',
                    'opacity': '0.2'
                });
                break;
        }
        // Annulation de l'event native des flèches directionnelles
        if ($.inArray(press, key) > -1) {
            i.preventDefault();
            return false;
        }
        return true;
    }); // ~ Document Keypress
    
    $(document).keyup(function (i) {
        // variable qui récupere les touches pressées
        var press = i.which || i.keyCode;
        // Switch qui remet les flèches à leur état native avec les touches 37, 38, 39, et 40
        switch (press) {
            case 37:
                $('#header_arrowLeft').css({
                    'position': 'relative',
                    'right': '0px',
                    'opacity': '1'
                });
                break;
            case 38:
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
                break;
            case 39:
                $('#header_arrowRight').css({
                    'position': 'relative',
                    'left': '0px',
                    'opacity': '1'
                });
                break;
            case 40:
                $('#header_arrowBottom').css({
                    'position': 'relative',
                    'top': '0px',
                    'opacity': '1'
                });
                break;
        }
    }); // ~ Document Keyup
    
    // mouseover et mouseout de la flèche cv qui défini l'animation.
    $('#header_arrowTop').mouseover(function() {
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
    $('#header_arrowTop').mouseout(function() {
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
    $('#header_arrowLeft').mouseover(function() {
        $(this).css({
                    'position': 'relative',
                    'right': '5px',
                    'opacity': '0.2'
                });
    });
    $('#header_arrowLeft').mouseout(function() {
        $(this).css({
                    'position': 'relative',
                    'right': '0px',
                    'opacity': '1'
                });
    });
    // mouseover et mouseout de la flèche projet qui défini l'animation.
    $('#header_arrowRight').mouseover(function() {
        $(this).css({
                    'position': 'relative',
                    'left': '5px',
                    'opacity': '0.2'
                });
    });
    $('#header_arrowRight').mouseout(function() {
        $(this).css({
                    'position': 'relative',
                    'left': '0px',
                    'opacity': '1'
                });
    });
    // mouseover et mouseout de la flèche home qui défini l'animation.
    $('#header_arrowBottom').mouseover(function() {
        $(this).css({
                    'position': 'relative',
                    'top': '5px',
                    'opacity': '0.2'
                });
    });
    $('#header_arrowBottom').mouseout(function() {
        $(this).css({
                    'position': 'relative',
                    'top': '0px',
                    'opacity': '1'
                });
    });
    
}); // ~ Ready