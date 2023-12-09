/* ===================================================================
 * TypeRite - Main JS
 *
 * ------------------------------------------------------------------- */

(function ($) {

    "use strict";

    var cfg = {
        scrollDuration: 800, // smoothscroll duration
        mailChimpURL: ''   // mailchimp url
    },

        $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10/IE11 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; rv:11.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


    /* Preloader
     * -------------------------------------------------- */
    var ssPreloader = function () {

        $("html").addClass('ss-preload');

        $WIN.on('load', function () {

            //force page scroll position to top at page refresh
            // $('html, body').animate({ scrollTop: 0 }, 'normal');

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function () {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            });

            // for hero content animations 
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');

        });
    };


    /* Pretty Print
     * -------------------------------------------------- */
    var ssPrettyPrint = function () {
        $('pre').addClass('prettyprint');
        $(document).ready(function () {
            prettyPrint();
        });
    };


    /* search
     * ------------------------------------------------------ */
    var ssSearch = function () {

        var searchWrap = $('.header__search'),
            searchField = searchWrap.find('.search-field'),
            closeSearch = searchWrap.find('.header__search-close'),
            searchTrigger = $('.header__search-trigger'),
            siteBody = $('body');


        searchTrigger.on('click', function (e) {

            e.preventDefault();
            e.stopPropagation();

            var $this = $(this);

            siteBody.addClass('search-is-visible');
            setTimeout(function () {
                searchWrap.find('.search-field').focus();
            }, 100);

        });

        closeSearch.on('click', function (e) {

            var $this = $(this);

            e.stopPropagation();

            if (siteBody.hasClass('search-is-visible')) {
                siteBody.removeClass('search-is-visible');
                setTimeout(function () {
                    searchWrap.find('.search-field').blur();
                }, 100);
            }
        });

        searchWrap.on('click', function (e) {
            if (!$(e.target).is('.search-field')) {
                closeSearch.trigger('click');
            }
        });

        searchField.on('click', function (e) {
            e.stopPropagation();
        });

        searchField.attr({ placeholder: 'Type Keywords', autocomplete: 'off' });

    };


    /* menu
     * ------------------------------------------------------ */
    var ssMenu = function () {

        setTimeout(function () {
            var menuToggle = $('.header__menu-toggle'),
                siteBody = $('body');

            menuToggle.on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                menuToggle.toggleClass('is-clicked');
                siteBody.toggleClass('nav-wrap-is-visible');
            });

            $('.header__nav .has-children').children('a').on('click', function (e) {

                e.preventDefault();

                $(this).toggleClass('sub-menu-is-open')
                    .next('ul')
                    .slideToggle(200)
                    .end()
                    .parent('.has-children')
                    .siblings('.has-children')
                    .children('a')
                    .removeClass('sub-menu-is-open')
                    .next('ul')
                    .slideUp(200);

            });
        }, 3000);
    };


    /* masonry
     * ---------------------------------------------------- */
    var ssMasonryFolio = function () {

        var containerBricks = $('.masonry');

        containerBricks.masonry({
            itemSelector: '.masonry__brick',
            columnWidth: '.grid-sizer',
            percentPosition: true,
            resize: true
        });

        // layout Masonry after each image loads
        containerBricks.imagesLoaded().progress(function () {
            containerBricks.masonry('layout');
        });

    };

    /* animate bricks
     * ------------------------------------------------------ */
    var ssBricksAnimate = function () {

        var animateEl = $('.animate-this');

        $WIN.on('load', function () {

            setTimeout(function () {
                animateEl.each(function (ctr) {
                    var el = $(this);

                    setTimeout(function () {
                        el.addClass('animated');
                    }, ctr * 200);
                });
            }, 300);

        });

        $WIN.on('resize', function () {
            // remove animation classes
            animateEl.removeClass('animate-this animated');
        });

    };


    /* slick slider
     * ------------------------------------------------------ */
    var ssSlickSlider = function () {

        var $gallery = $('.slider__slides').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            pauseOnFocus: false,
            fade: true,
            cssEase: 'linear'
        });

        $('.slider__slide').on('click', function () {
            $gallery.slick('slickGoTo', parseInt($gallery.slick('slickCurrentSlide')) + 1);
        });

    };


    /* smooth scrolling
     * ------------------------------------------------------ */
    var ssSmoothScroll = function () {

        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
                $target = $(target);

            e.preventDefault();
            e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {

                // check if menu is open
                if ($('body').hasClass('menu-is-open')) {
                    $('.header-menu-toggle').trigger('click');
                }

                window.location.hash = target;
            });
        });

    };


    /* alert boxes
     * ------------------------------------------------------ */
    var ssAlertBoxes = function () {

        $('.alert-box').on('click', '.alert-box__close', function () {
            $(this).parent().fadeOut(500);
        });

    };


    /* Back to Top
     * ------------------------------------------------------ */
    var ssBackToTop = function () {

        var pxShow = 500,
            goTopButton = $(".go-top")

        // Show or hide the button
        if ($(window).scrollTop() >= pxShow) goTopButton.addClass('link-is-visible');

        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= pxShow) {
                if (!goTopButton.hasClass('link-is-visible')) goTopButton.addClass('link-is-visible')
            } else {
                goTopButton.removeClass('link-is-visible')
            }
        });
    };


    /* Initialize
     * ------------------------------------------------------ */
    (function clInit() {

        ssPreloader();
        ssPrettyPrint();
        ssSearch();
        ssMenu();
        ssMasonryFolio();
        ssBricksAnimate();
        ssSlickSlider();
        ssSmoothScroll();
        ssAlertBoxes();
        ssBackToTop();

    })();

})(jQuery);

function selectYear(year) {
    for (let i = 2019; i < 2023; i++) {
        document.getElementById(i + '-articles').style.display = 'none'
    }

    document.getElementById(year + '-articles').style.display = 'block'
    document.getElementById(year + '-last-article').scrollIntoView()
}
function selectYearOnPage(year) {
    for (let i = 2019; i < 2023; i++) {
        document.getElementById(i + '-articles').style.display = 'none'
    }

    document.getElementById(year + '-articles').style.display = 'block'
}