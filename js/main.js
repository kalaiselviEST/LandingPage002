(function ($) {
    "use strict";
   // Initiate the wowjs
   new WOW().init();
   
    $(".toggler-icon i").click(function(){
       $("ul.menu-nav").toggleClass("open-nav");
    })



    // Screenshot carousel
    $(".screenshot-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        dots: true,
        items: 1
    });

    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    
})(jQuery);

