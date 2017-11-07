/* -------------------------------------------------------------------------------------/*
Website Name: Glen S. Nepomuceno Personal Portfolio Site
Author: Glen S. Nepomuceno  
Author URI: glennepomuceno.com
Version: 1.0
/* -------------------------------------------------------------------------------------*/
$(document).ready(function() {

/*-------------- Sticky Header --------------*/
    $('.navbar-collapse a').on('click', function() {
        $(".navbar-collapse").collapse('hide');
    });

    $(window).on('scroll', function() {
        if ($(".navbar").offset().top > 100) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
              $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
      });

/*-------------- Smooth Scroll --------------*/
    $(function() {
        $('a.smoth-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1000);
        event.preventDefault();
        });
    });

/*-------------- Parallax --------------*/
    $(window).stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });

/*-------------- Scroll Spy --------------*/
    $('body').scrollspy({
        target : ".navbar-collapse",
        offset : 95
    });

/*-------------- BG Flickering Fix for Mobile --------------*/    

    var bg = jQuery("#home");

    function resizeBackground() {
        bg.height(jQuery(window).height() + 60);
    }
    resizeBackground();


    $('.work-popup').magnificPopup({type:'image'});

/*-------------- Typed --------------*/
    var element = $(".element");
    
    $(function() {
        element.typed({
            strings: ["Front-end Developer", "WordPress Developer"],
            typeSpeed: 100,
            loop: true,
        });
    });

});





















































































































































































































































































