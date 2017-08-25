$(document).ready(function(){

    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });

    /***** Mobile menu *****/
    $('#my-menu').mmenu({
      //options  
    });

    var API = $('#my-menu').data('mmenu');

    $('#menu-button').click(function() {
        API.open();
        $(this).toggleClass('open');
    });


});
