$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $(".scrollTop").fadeIn();
      $(".header-main").addClass("has_sticky");
      $("body").addClass("sticky_header");
    } else {
      $(".scrollTop").fadeOut();
      $(".header-main").removeClass("has_sticky");
      $("body").removeClass("sticky_header");
    }
  });

  $(window).scroll(function () {
    var x = $(document).scrollTop();
    if (x > 100) {
      $(".back-to-top").addClass("active");
    } else {
      $(".back-to-top").removeClass("active");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $(".homeSlider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    fade: true,
  });


  /* mobile-menu */
  $(".menu-icon").click(function () {
    $(this).toggleClass("menu-close");
    $(".navigation-bar").toggleClass("slide-menu");
    $("body").addClass("body-fixed");
  });

  $(".sidebar-overlay, .close-menu, .menu-main ul li a").click(function () {
    $(".menu-icon").removeClass("menu-close");
    $(".navigation-bar").removeClass("slide-menu");
    $("body").removeClass("body-fixed");
  });

  $(".menu-main li:has(ul)").prepend('<span class="arrow"></span>');  
  
});
