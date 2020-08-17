;(function() {

  'use strict';

  $('.prizes__slider').slick({
    slidesToShow: 3,
    arrows: false,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });

})();
