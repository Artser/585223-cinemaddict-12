;(function() {

  'use strict';

  var $slider = $('.slider__carousel');

  if ($slider.length) {
    var currentSlide;
    var slidesCount;

    var updateSliderCounter = function(slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $('.slider__indicator').text(currentSlide + ' из ' +slidesCount);
    };

    $slider.on('init', function(event, slick) {
      updateSliderCounter(slick);
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });

    $('.photogallery__item').on('click', '.photogallery__item-active', function(evt, slick, currentSlide) {
      evt.preventDefault();
      var numberImage = $(evt.currentTarget).attr('href').substring(1);
      $('.slider__carousel').slick('slickGoTo', numberImage - 1);
    });

  }

  $('.slider__carousel').slick({
    slidesToShow: 1,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button class="slider__big-control slider__big-control--left" href="#" role="button"></button>',
    nextArrow: '<button class="slider__big-control slider__big-control--right" href="#" role="button"></button',
  });
  $('.slider__control--right').on('click', function(){
    $('.slider__carousel').slick('slickNext');
  });
  $('.slider__control--left').on('click', function(){
    $('.slider__carousel').slick('slickPrev');
  });
  $('.slider__big-control--right').on('click', function(){
    $('.slider__carousel').slick('slickNext');
  });
  $('.slider__big-control--left').on('click', function(){
    $('.slider__carousel').slick('slickPrev');
  });
})();
