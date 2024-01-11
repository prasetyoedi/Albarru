$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 2,
                nav: true,
            },
            600: {
                items: 2,
                nav: true,
                center: true,
            },
            1000: {
                items: 5,
                nav: true,
            }
        },
        autoplaySpeed: 4000,
    })

});