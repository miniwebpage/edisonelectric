$(document).ready(function() {
    $('#services_slider').owlCarousel({
        /* global setting */
        stagePadding: 0,
        loop: true,
        nav: false,
        dots: false,
        /* slide start at: */
        startPosition: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: false,
        autoWidth: false,
        margin: 25,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {items: 1,},
            480: {items: 1,},
            767: {items:2,},
            1024: {items: 3,},
            1300: {items: 4,},
        }
    })
});