/*global $, document, window, jQuery*/
$(window).on('load', function(){
    setTimeout(function() {
        $('.pre-loader').hide();
    }, 1000);    
});

$(document).ready(function() {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".bg-login").css('height', 'initial');
        $(".bg-login").css('min-height', '100%');
    }
    //Dropdown Menus
    $(".dropdown").hover(
        function() {
            $(this).addClass('show');
        },
        function() {
            $(this).removeClass('show');
        }
    );


    $(".order-place li").hover(
        function() {
            $(this).find('.times-cl').removeClass('d-block').addClass('d-none');
            $(this).find('.times-hi').removeClass('d-none').addClass('d-block');
        },
        function() {
            $(this).find('.times-cl').removeClass('d-none').addClass('d-block');
            $(this).find('.times-hi').removeClass('d-block').addClass('d-none');
        }
    );

    $('#carousel-example-generic').carousel();

    if($('.owl-carousel.productSlider').length){
        var owl = $('.owl-carousel.productSlider');
        owl.owlCarousel
        ({
            loop: true,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplayHoverPause: false,
            nav: false,
            navText:[],
            dots: true,
            moveSlides: 4,
            margin:15,
            responsive: {
                320: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

});


