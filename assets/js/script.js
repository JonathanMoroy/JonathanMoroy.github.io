// Fonction qui attend que le document est ready
$(function () {
    // Ajout d'un keypress à window où un switch détermine avec les keycode des flêches directionnelles la navigation entre les pages
    $(window).keypress(function (i) {
        // variable qui récupere les touches pressées
        var press = i.which || i.keyCode;
        // Switch qui détermine la localisation avec les touches 37, 38, 39, et 40
        switch (press) {
            case 37:
                window.location = '#!/contact';
                break;
            case 38:
                window.location = '#!/resume';
                break;
            case 39:
                window.location = '#!/project';
                break;
            case 40:
                window.location = '#!/home';
                break;
        }
    }); // ~ Window Keypress
}); // ~ Ready