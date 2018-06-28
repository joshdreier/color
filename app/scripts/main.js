// Namespace
var KPM = KPM || {};

// Mobile Main Menu (hamburger)
KPM.mobileMainMenu = (function ($) {

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


// Comments Box
KPM.commentsBox = (function ($) {

    function init(){

      var $commentsContainer = $('.comments-container');

      // load exernal data
      $.getScript('scripts/comments.js', function() {
        $.each( comments, function( i, val ) {

          // convert unix timestamp
          var date = new Date(this.timestamp * 1000);
          var formattedDate =  (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

          // add content to DOM
          $commentsContainer.append('<li class="slide"><blockquote><p class="comment"><span>' + this.comment + '</span></p><p class="author">' + this.name + ', ' + formattedDate + '</p></blockquote></li>');
        });
      });

    }

    if($('.comment-box').length) {
      init();
    }

  })(jQuery);


// Carousel
KPM.carousel = (function ($) {

  function init(){

    var $carousel = $('.carousel-container');

    $carousel.each(function() {

      var $carousel = $(this);
      var $nextBtn = $carousel.find('.next');
      var $prevBtn = $carousel.find('.prev');
      var $firstSlide = $carousel.find('.slide:first-child');
      var $lastSlide = $carousel.find('.slide:last-child');

      // make first slide active
      $firstSlide.addClass('active');

      // autoPlay slides
      var delay = 7000;
      var j = 0;
      function autoPlay () {
        goForward();
        j++;
        setTimeout(autoPlay, delay); // callback
      }
      setTimeout(autoPlay, delay);

      function goForward() {
        // if there is a next slide, advance
        if( $carousel.find('.active').next().is('li') ) {
          $carousel.find('.active').removeClass('active').next('li').addClass('active');
        }
        else {
          // if there is not a next slide, start from the beginning
          $carousel.find('.active').removeClass('active');
          $firstSlide.addClass('active');
        }
      }

      function goBack() {
        // if there is a prev slide, advance
        if( $carousel.find('.active').prev().is('li') ) {
          $carousel.find('.active').removeClass('active').prev('li').addClass('active');
        }
        else {
          // if there is not a next slide, start from the beginning
          $carousel.find('.active').removeClass('active');
          $lastSlide.addClass('active');
        }
      }

      // Swipe
      $carousel.swipe( {
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
          if (direction === 'left') {
            goForward();
          }
          else if (direction === 'right') {
            goBack();
          }
        }
      });

      // Next button
      $nextBtn.on('click', function(e) {
        e.preventDefault();
        goForward();
      });

      // Previous button
      $prevBtn.on('click', function(e) {
        e.preventDefault();
        goBack();
      });

    });

  }

  if($('.carousel-container').length) {
    // delay for content loaded into dom after inital page load
    setTimeout(init, 500);
  }

})(jQuery);
