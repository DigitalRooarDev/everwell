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
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  $(".about-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });

  $(".meet-team-list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });

  $(".immune-vitality-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    fade: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $(".product-list-slide").slick({
    infinite: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
        },
      },
      {
        breakpoint: 569,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
          adaptiveHeight: true,
        },
      },
    ],
  });

  $(".latestblog-slider").slick({
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 569,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
  });

  $(".galleryMain").slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
    dots: false,
    autoplay: true,
    asNavFor: ".galleryThumb",
    fade: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false,
          autoplay: true,
        },
      },
    ],
  });

  $(".galleryThumb").slick({
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    // autoplaySpeed: 5000,
    asNavFor: ".galleryMain",
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          vertical: false,
          verticalSwiping: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 666,
        settings: {
          slidesToShow: 4,
          vertical: false,
          verticalSwiping: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 4,
          vertical: false,
          verticalSwiping: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 3,
          vertical: false,
          verticalSwiping: false,
          dots: false,
          arrows: false,
        },
      },
    ],
  });

  $(".blog-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 800,
    fade: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $(".story-slider").slick({
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    arrows: true,
    responsive: [
      {
        breakpoint: 569,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $(".blog-category span").click(function () {
    $(".menu-dropdown-con").slideToggle();
    $("span").toggleClass("show");
  });

  if ($(window).width() < 767) {
      $('.related-slide').slick({
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: false,
          dots: true,
          responsive: [
              {
                  breakpoint: 767,
                  settings: {
                      infinite: true,
                      speed: 500,
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      fade: false
                  }
              },
              {
                  breakpoint: 568,
                  settings: {
                      infinite: true,
                      speed: 500,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      fade: false
                  }
              }
          ]
      });
  }

  $(".more-enjoy-main").slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 569,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

$(".all-category span").click(function () {
    $(".menu-dropdown-con").slideToggle();
    $("span").toggleClass("show");
  });

  $(".phonenumber").keypress(function (event) {
    if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
      event.preventDefault();
    }
  });

  // Quantity
  $(document).on("click", ".qtyplus", function (e) {
    e.preventDefault();
    var currentVal = parseInt($(".qv-quantity").val());
    isNaN(currentVal)
      ? $(".qv-quantity").val(1)
      : $(".qv-quantity").val(currentVal + 1);
  }),
    $(document).on("click", ".qtyminus", function (e) {
      e.preventDefault();
      var currentVal = parseInt($(".qv-quantity").val());
      !isNaN(currentVal) && currentVal > 1
        ? $(".qv-quantity").val(currentVal - 1)
        : $(".qv-quantity").val(1);
    });

  $(".marquee-main").each(function () {
    $(this).append($(this).find(".marquee-inner").clone());
    $(this).wrapInner('<div class="marquee-animate"></div>');

    $(this)
      .find(".marquee-animate")
      .css({
        "margin-left": -$(this).find(".marquee-inner").outerWidth(),
        "animation-duration":
          $(this).find(".marquee-inner").outerWidth() / 100 + "s",
      });
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

  // filter
  $(".filter").click(function () {
    $(".product-sidebar").toggleClass("slide-product");
    $("body").addClass("body-fixed");
  });

  $(".sidebar-overlay, .filter-close").click(function () {
    $(".product-sidebar").removeClass("slide-product");
    $("body").removeClass("body-fixed");
  });

  $(".related-product-slider").slick({
    slidesToShow: 4,
    infinite: true,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});

if ($(".favorites-pro-slider").length > 0) {
  const swiper = new Swiper(".favorites-pro-slider", {
    pagination: {
      el: ".slider-pagination",
      clickable: true,
    },
    loop: true,
    slidesPerView: 1,
    centeredSlides: false,
    speed: 1080,
    effect: "cards",
    grabCursor: true,
    cardsEffect: {
      perSlideOffset: 73,
      perSlideRotate: 2,
    },
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    breakpoints: {
      568: {
        pagination: {
          el: ".slider-pagination",
          clickable: true,
        },
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        effect: "cards",
        grabCursor: true,
        cardsEffect: {
          perSlideOffset: 50,
          perSlideRotate: 2,
        },
      },
      768: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 3,
        centeredSlides: true,
        // observeParents: !0,
        // observer: !0,
      },
    },
  });
}
