(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });



    
})(jQuery);

// Smooth scroll
$('.navbar a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    let target = $(this).attr('href');

    // SERVICES should scroll through multiple sections
    if (target === '#services') {
        $('html, body').animate({
            scrollTop: $('#services').offset().top - 90
        }, 800);
    } else {
        $('html, body').animate({
            scrollTop: $(target).offset().top - 90
        }, 800);
    }
});


$(window).on('scroll', function () {

    let scrollPos = $(document).scrollTop() + 120;

    $('.navbar-nav a').removeClass('active');

    /* ===== HOME ===== */
    if ($('#home').length) {
        let top = $('#home').offset().top;
        let bottom = top + $('#home').outerHeight();

        if (scrollPos >= top && scrollPos < bottom) {
            $('a[href="#home"]').addClass('active');
            return;
        }
    }

    /* ===== ABOUT ===== */
    if ($('#about').length) {
        let top = $('#about').offset().top;
        let bottom = top + $('#about').outerHeight();

        if (scrollPos >= top && scrollPos < bottom) {
            $('a[href="#about"]').addClass('active');
            return;
        }
    }

    /* ===== SERVICES ===== */
    if ($('#services').length) {
        let top = $('#services').offset().top;
        let bottom = top + $('#services').outerHeight();

        if (scrollPos >= top && scrollPos < bottom) {
            $('#servicesMenu').addClass('active');
            return;
        }
    }

    /* ===== SCOPE & OPERATIONS (GROUP) ===== */
    let scopeStart = $('#scope').offset().top;
    let scopeEnd = $('#partner').offset().top + $('#partner').outerHeight();

    if (scrollPos >= scopeStart && scrollPos < scopeEnd) {
        $('a[href="#scope"]').addClass('active');
        return;
    }

    /* ===== CONTACT ===== */
    if ($('#contact').length) {
        let top = $('#contact').offset().top;
        let bottom = top + $('#contact').outerHeight();

        if (scrollPos >= top && scrollPos < bottom) {
            $('a[href="#contact"]').addClass('active');
        }
    }

});


