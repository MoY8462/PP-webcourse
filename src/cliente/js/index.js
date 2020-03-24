import '../css/style.css';


$('.carousel').carousel({
    interval: 1000
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    try {
        if (scroll > 400 && (scroll > ($("#id-menus").offset().top - 200))) {
            document.getElementById("id-menus").classList.add('nav-scroll-contenido', 'animated', 'bounceInDown');
        }
        else {
            document.getElementById("id-menus").classList.remove('nav-scroll-contenido', 'animated', 'bounceInDown');
        }
    } catch (x) {

    }
});
