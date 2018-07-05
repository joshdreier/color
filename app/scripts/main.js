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

  if($('.anchor-links').length) {
    init();
  }

})(jQuery);


