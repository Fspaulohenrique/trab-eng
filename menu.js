// Ativa o menu dropdown no hover (ao passar o mouse)

$(document).ready(function() {
    $('.dropdown').hover(function() {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
    }, function() {
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show');
    });
});