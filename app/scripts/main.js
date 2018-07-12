// Namespace
var CF = CF || {};

// globals

if (window.matchMedia('(min-width: 768px)').matches) {
  var stripeHeight = 59;
} else {
  var stripeHeight = 39;
}

// Stripe Animation
CF.dotsAnimation = (function ($) {

  function init(){

    var $lateFade = $('.late-fade');

    var $browserHeight = $(window).height();
    var stripesToFit = Math.ceil($browserHeight / stripeHeight);

    var $stripes = $('#stripes-animation');
    var $dots = $('#dots-animation');

    var $colorWalk = $('#color-walk-container');

    // loop to add dots
    var dotsCount = 14;
    var j;
    for (j = 1; j < dotsCount; j++) {
      $dots.append('<div class="frame frame' + j +'"></div> ');
    }
    //logo
    $dots.append('<div class="frame frame14"><span class="logo">Color Factory</span></div> ');


    // loop to add stripes
    var i;
    var interval = 40;
    var delay = 7400;

    for (i = 0; i < stripesToFit; i++) {
      delay -= 50;
      $stripes.append('<li class="stripe stripe' + i + '" style="animation-delay: ' + delay + 'ms;"></li> ');
    }


    // delay other page elements fading in, header footer nav
    /* @keyframes duration | timing-function | delay | iteration-count | direction | fill-mode | play-state | name */
    $lateFade.css('animation', '820ms linear 7200ms 1 normal forwards running fade-in');

    // add delay to fill in background in case user resizes window
    //setTimeout(function(){ $('body').addClass('delay') }, delay + 1000);

    // load colorwalk
    setTimeout(function(){ $colorWalk.show(); }, delay + 1000);

  }

  if($('.home').length) {

    $('<img/>').attr('src', '../images/cityscape.jpg').on('load', function() {
      $(this).remove(); // prevent memory leaks as @benweet suggested
      // add background image
      $('body').css('background-image', 'url(/images/cityscape.jpg)');
      // start animation after image loads
      init();
   });

  }

})(jQuery);


// Section Toggle
CF.sectionToggle = (function ($) {

  function init(){

    var $sectionContainer = $('.section-container');
    var $sectionTitle = $('.section-title');
    var $sectionToggle = $('.section-toggle');
    var slideSpeed = 400;

    // init by opening
    $sectionContainer.slideDown(slideSpeed).addClass('active');
    $sectionToggle.addClass('active').attr('aria-expanded', 'true');
    $sectionTitle.addClass('active').attr('aria-expanded', 'true');

    $sectionToggle.on('click', function(e) {
      e.preventDefault();

      if (!$(this).is('.active')) {
        $(this).addClass('active').attr('aria-expanded', 'true');
        $(this).siblings('.section-container').slideDown(slideSpeed).addClass('active');
        $(this).siblings('.section-title').addClass('active').attr('aria-expanded', 'true');
      }
      else {
        $(this).removeClass('active').attr('aria-expanded', 'false');
        $(this).siblings('.section-container').slideUp(slideSpeed).removeClass('active');
        $(this).siblings('.section-title').removeClass('active').attr('aria-expanded', 'false');
      }

    });

    $sectionTitle.on('click', function(e) {
      e.preventDefault();

      if (!$(this).is('.active')) {
        $(this).addClass('active').attr('aria-expanded', 'true');
        $(this).siblings('.section-container').slideDown(slideSpeed).addClass('active');
        $(this).siblings('.section-toggle').addClass('active').attr('aria-expanded', 'true');
      }
      else {
        $(this).removeClass('active').attr('aria-expanded', 'false');
        $(this).siblings('.section-container').slideUp(slideSpeed).removeClass('active');
        $(this).siblings('.section-toggle').removeClass('active').attr('aria-expanded', 'false');
      }

    });

  }

  if($('.section-toggle').length) {
    init();
  }

})(jQuery);


// Smooth Scroll to Anchor
CF.anchorScroll = (function ($) {

  function init(){

    // Smooth Scrolling
    $('.smooth-scroll').click(function(e) {

      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 500, 'swing', function () {
          window.location.hash = target;
      });

    });


    // Back to Top, Smooth Scrolling
    $('.back-to-top').click(function(e) {

      e.preventDefault();

      $('html, body').animate({scrollTop: 0}, 500);

    });

  }

  if($('.back-to-top').length) {
    init();
  }

})(jQuery);

// FAQs
CF.frequentlyAskedQuestions = (function ($) {

  function init(){

    var $faqsContainer = $('.faq-menu');

    // load exernal data
    $.getScript('scripts/faq.js', function() {
      $.each( faq, function( i, val ) {
        // add content to DOM
        $faqsContainer.append('<li><h3><button aria-expanded="false">' + this.q + '</button></h3><p>' + this.a + '</p></li>');
      });
    });

    $(document).on('click', '.faq-menu button', function(e) {
      e.preventDefault();

      if (!$(this).is('.active')) {
        $(this).addClass('active').attr('aria-expanded', 'true');
        $(this).parent('h3').siblings('p').slideDown(250);
      }
      else {
        $(this).removeClass('active').attr('aria-expanded', 'false');
        $(this).parent('h3').siblings('p').slideUp(250);
      }
    });

  }

  if($('.faq-menu').length) {
    init();
  }

})(jQuery);


// Homepage ColorWalk animations
CF.colorWalkHover = (function ($) {

  function init(){

    var parent1 = document.querySelector('.parent1');
    var parent2 = document.querySelector('.parent2');
    var parent3 = document.querySelector('.parent3');
    var parent4 = document.querySelector('.parent4');
    var parent5 = document.querySelector('.parent5');
    var parent6 = document.querySelector('.parent6');
    var parent7 = document.querySelector('.parent7');
    var parent8 = document.querySelector('.parent8');
    var parent9 = document.querySelector('.parent9');
    var parent10 = document.querySelector('.parent10');
    var parent11 = document.querySelector('.parent11');
    var parent12 = document.querySelector('.parent12');
    var parent13 = document.querySelector('.parent13');
    var parent14 = document.querySelector('.parent14');
    var displays;

    function onMouseMove( e ) {

        // this refers to the caller
        console.log(this)

        // Find its child
       var follower = this.querySelector('.follower')

        TweenMax.to(follower, 0, {
            x: e.offsetX,
            y: e.offsetY,
            ease:Power4.easeOut
        })

    }

    function onMouseLeave( e ) {
        const rect = this.getBoundingClientRect()
        const center = {
            w: Math.round(rect.width * 0.5),
            h: Math.round(rect.height * 0.5)
        }
        const trg = this.querySelector('.follower')

        TweenMax.to( trg, 1, {
            x: center.w,
            y: center.h,
            ease: Back.easeInOut
        } )
    }


    function init() {

        // Listen for mouse movement when over either one of the parents
        parent1.addEventListener('mousemove', onMouseMove);
        parent2.addEventListener('mousemove', onMouseMove);
        parent3.addEventListener('mousemove', onMouseMove);
        parent4.addEventListener('mousemove', onMouseMove);
        parent5.addEventListener('mousemove', onMouseMove);
        parent6.addEventListener('mousemove', onMouseMove);
        parent7.addEventListener('mousemove', onMouseMove);
        parent8.addEventListener('mousemove', onMouseMove);
        parent9.addEventListener('mousemove', onMouseMove);
        parent10.addEventListener('mousemove', onMouseMove);
        parent11.addEventListener('mousemove', onMouseMove);
        parent12.addEventListener('mousemove', onMouseMove);
        parent13.addEventListener('mousemove', onMouseMove);
        parent14.addEventListener('mousemove', onMouseMove);

        parent1.addEventListener('mouseleave', onMouseLeave);
        parent2.addEventListener('mouseleave', onMouseLeave);
        parent3.addEventListener('mouseleave', onMouseLeave);
        parent4.addEventListener('mouseleave', onMouseLeave);
        parent5.addEventListener('mouseleave', onMouseLeave);
        parent6.addEventListener('mouseleave', onMouseLeave);
        parent7.addEventListener('mouseleave', onMouseLeave);
        parent8.addEventListener('mouseleave', onMouseLeave);
        parent9.addEventListener('mouseleave', onMouseLeave);
        parent10.addEventListener('mouseleave', onMouseLeave);
        parent11.addEventListener('mouseleave', onMouseLeave);
        parent12.addEventListener('mouseleave', onMouseLeave);
        parent13.addEventListener('mouseleave', onMouseLeave);
        parent14.addEventListener('mouseleave', onMouseLeave);

    };


    // wait until DOM is ready
    document.addEventListener("DOMContentLoaded", function(event) {

        // wait until window, stylesheets, images, links, and other media assets are loaded
        window.onload = function() {

            displays = {
                pX: document.querySelector('.pageX'),
                pY: document.querySelector('.pageY'),

                cX: document.querySelector('.clientX'),
                cY: document.querySelector('.clientY'),

                oX: document.querySelector('.offsetX'),
                oY: document.querySelector('.offsetY'),
            }

            // Center the pivot point of the follower
            TweenMax.set('.follower', {
                xPercent: -50,
                yPercent: -50
            })

            // All ready, start!
            init();

         };

    });


  }

  if($('#color-walk').length) {
    init();
  }

})(jQuery);



