$( document ).ready(function() {

            // Menu-on-hover-area-start //
            $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
                if ($(window).width() > 750) {
                    var _d = $(e.target).closest('.nav-item');
                    _d.addClass('show');
                    setTimeout(function () {
                        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
                    }, 1);
                }
            });

         // Menu-on-hover-area-end //

         // Dropdown-area-start //
            $('.dropdown-menu a.dropdown-toggle').click(function (e) {
                if (!$(this).next().hasClass('show')) {
                    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
                }
                var $subMenu = $(this).next(".dropdown-menu");
                $subMenu.toggleClass('show');
    
    
                $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                    $('.dropdown-submenu .show').removeClass("show");
                });
                return false;
            });
        // Dropdown-area-end //
    

        $("[data-toggle=tooltip]").tooltip();
    
        // sticky-header-area-start //
            // $(function () {
            //     var header = $(".start-style");
            //     $(window).scroll(function () {
            //         var scroll = $(window).scrollTop();
    
            //         if (scroll >= 10) {
            //             header.removeClass('start-style').addClass("scroll-on");
            //         } else {
            //             header.removeClass("scroll-on").addClass('start-style');
            //         }
            //     });
            // });
        // sticky-header-area-end //


            // scroll-to-top-area-start //
    var scrollTop = $(".scrollTop");
    $(window).scroll(function () {
        $(this).scrollTop() > 100 ? $(scrollTop).css("opacity", "1") : $(scrollTop).css("opacity", "0")
    }),
        $(scrollTop).click(function () {
            return $("html, body").animate({
                scrollTop: 0
            }, 800),
                !1
        });

    // scroll-to-top-area-end //

     // testimonial-slide-area-start //
$('.testimonial ').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 2400,
    dotsSpeed: 2500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }   
    }
});
// testimonial-slide-area-end //

// gallery-owl-carousel-area-start //
$('.event-carousel').owlCarousel({
    center: true,
    items: 4,
    margin: 10,
    loop: true,
    responsiveClass: true,
    nav: false,
    dots: true,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 2000,
    dotsSpeed: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        500: {
            items: 2,
        },
        1200: {
            items: 4
        }
    }
});
// gallery-owl-carousel-area-end //

   //lightbox
   $('.gallery-lightbox').simpleLightbox();

   // perfect-scrollbar-area-start //
	new PerfectScrollbar('.price-list-scroll');
    new PerfectScrollbar('.price-list-scroll-second');
    new PerfectScrollbar('.price-list-scroll-third');
    new PerfectScrollbar('.price-list-scroll-four');
    new PerfectScrollbar('.about-inner-content-scroll');
   // perfect-scrollbar-area-end //




});







