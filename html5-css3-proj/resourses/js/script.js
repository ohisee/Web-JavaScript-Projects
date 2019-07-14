/**
 * jQuery code
 */
$(document).ready(function () {
  /* Sticky navigation */
  $('.js--section-features').waypoint(function (direction) {
    if (direction === 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
      offset: '60px'
    });

  /** Scroll on buttons */
  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
  });

  $('.js--scroll-to-start').click(function () {
    $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
  });

  $("a[href$='#features']").click(function () {
    $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1100);
  });

  $("a[href$='#works']").click(function () {
    $('html, body').animate({ scrollTop: $('#works').offset().top }, 1100);
  });

  $("a[href$='#cities']").click(function () {
    $('html, body').animate({ scrollTop: $('#cities').offset().top }, 1100);
  });

  $("a[href$='#plans']").click(function () {
    $('html, body').animate({ scrollTop: $('#plans').offset().top }, 1100);
  });

  /** animation on scroll */
  $('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
      offset: '50%'
    });

  $('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
      offset: '50%'
    });

  $('.js--wp-3').waypoint(function (direction) {
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
      offset: '50%'
    });

  $('.js--wp-4').waypoint(function (direction) {
    $('.js--wp-4').addClass('animated pulse');
  }, {
      offset: '50%'
    });

  /** mobile navgiation */
  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });

  $('.js--form-messages-submit').click(function (event) {
    event.preventDefault();
    var msg = $('.js--form-messages');
    var loader = $('.loader');
    if (msg.css('display') === 'none') {
      setTimeout(function () {
        msg.css('display', 'block');
        loader.css('display', 'none');
      }, 2000);
      loader.css('display', 'block');
    }
  });

  $('.js--form-messages').click(function () {
    $('.js--form-messages').fadeOut(1000);
  });

  /** Address '.js--main-nav' slide toggle issue  */
  $(window).resize(function () {
    if ($('.mobile-nav-icon').css('display') === 'none') {
      var nav = $('.js--main-nav');
      if (nav.css('display') === 'none') {
        nav.css('display', 'block');
      }
    }
  });

  /** GMap JS */
  var map = new GMaps({
    div: '.map-in-contact-form',
    lat: 37.29723,
    lng: -122.0,
    zoom: 12
  });

  map.addMarker({
    lat: 37.29723,
    lng: -122.0982984,
    title: 'San Jose',
    infoWindow: {
      content: '<p>Day Dream HQ</p>'
    }
  });

});
