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
          arrows:false,
        },
      },
    ],
  });
  // $(".product-list-slide").slick({
  //   infinite: true,
  //   arrows: false,
  //   centerMode: true,
  //   centerPadding: "0",
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   dots: false,
  //   autoplay: true,
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         centerMode: false,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         centerMode: false,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 569,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         centerMode: false,
  //         dots: true,
  //         adaptiveHeight: true,
  //       },
  //     },
  //   ],
  // });

  const swiper = new Swiper('.favorites-pro-slider', {
  pagination: {
    el: '.slider-pagination',
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
                el: '.slider-pagination',
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
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            slidesPerView: 3,
            centeredSlides: true,
            // observeParents: !0,
            // observer: !0,
        }
    }
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
  
});
