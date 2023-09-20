$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      }
      ,
      320: {
        items: 2,
      },
      575: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });