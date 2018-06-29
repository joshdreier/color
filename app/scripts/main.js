// Namespace
var CF = CF || {};

// globals
var stripeHeight = 59;

// Mobile Main Menu (hamburger)
CF.mobileMainMenu = (function ($) {

  function init(){

    var $mobileToggle = $('.mobile-menu-toggle');

    $mobileToggle.on('click', function(e) {
      e.preventDefault();

      if (!$(this).is('.active')) {
        $(this).addClass('active').attr('aria-expanded', 'true');
        $('body').addClass('mobile-nav-open');
      }
      else {
        $(this).removeClass('active').attr('aria-expanded', 'false');
        $('body').removeClass('mobile-nav-open');
      }

    });

  }

  if($('.mobile-menu-toggle').length) {
    init();
  }

})(jQuery);


//
CF.stripeAnimation = (function ($) {

  function init(){

    var $browserHeight = $(window).height();
    var stripesToFit = Math.ceil($browserHeight / stripeHeight);

    var $stripeContainer = $('#stripes-animation-container')
    var $stripeList = $('#stripes-animation')

    // loop to add stripes
    var i;
    var interval = 40;
    var delay = 7400;

    for (i = 0; i < stripesToFit; i++) {
      delay -= 50;
      $stripeList.append('<li class="stripe stripe' + i + '" style="animation-delay: ' + delay + 'ms;"></li> ');
    }

    // add delay to fill in background in case user resizes window
    setTimeout(function(){ $('body').addClass('delay') }, delay + 1000);


  }

  if($('#stripes-animation').length) {
    init();
  }

})(jQuery);





