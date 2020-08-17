;(function() {

'use strict';

$(document).on('click', ".popup-gift__item", function () {
  var $this = $(this);
  $this.toggleClass('popup-gift__item--selected');
  var count = $this.closest('.popup-gift__list').find('.popup-gift__item--selected').length;
  var last_number = count.toString().substr(count.toString().length - 1, 1);

  if (count > 0 && count < 11) {
    $(".popup-gift__desc-empty").css('display', 'none');
    $(".popup-gift__desc-not-empty").css('display', 'block');
    $(".popup-gift__desc-count").text(count);
    $(".popup-gift__desc-sum").text(count * 10);
    $(".popup-gift__footer button").removeClass('button__main-grey');
    $(".popup-gift__footer button").addClass('button__main-red');

    if (count === 1) {
        $(".popup-gift__desc-sum-last").text('ок');
    } else if (count > 1 && count < 5) {
        $(".popup-gift__desc-sum-last").text('ка');
    } else {
        $(".popup-gift__desc-sum-last").text('ков');
    }

  } else if (count > 10) {
    $this.toggleClass('popup-gift__item--selected');
  } else {
    $(".popup-gift__desc-empty").css('display', 'block');
    $(".popup-gift__desc-not-empty").css('display', 'none');
    $(".popup-gift__footer button").addClass('button__main-grey');
    $(".popup-gift__footer button").removeClass('button__main-red');
  }
});

$('.popup-gift__footer button').click(function () {
  var gifts = [];
  if ($('.popup-gift__item--selected').length > 0 && $('.popup-gift__item--selected').length <= 10) {
    $('.popup-gift__item--selected').each(function () {
      gifts.push($('img', this).attr('src'));
    });
    if (parseInt(gifts.length) * 10 > parseInt($('.header__purse').text())) {
      $('.popup-gift .popup-gift__close').click();
      $('.popup-rating p:eq(0)').text('Недостаточно голосов для выполнения операции.');
      $('.popup-rating').fadeIn();
      $('body').css({'overflow' : 'hidden'});
      $('.popup-rating__close').click(function () {
        $('.popup-rating').fadeOut();
        $('body').css({'overflow' : 'visible'});
      });
      $(document).click(function (evt) {
        var targ = $(evt.target);
        if (targ.is(`.popup-rating`)) {
          $('.popup-rating').fadeOut();
          $('body').css({'overflow' : 'visible'});
        }
      });
    } else {
      $.ajax({
        url: "/sendGifts",
        type: "post",
        dataType: "text",
        data: {
          id: $(this).data('id'),
          gifts: gifts,
          _token: window.Laravel['csrfToken']
        },
        success: function (ans) {
          $('.popup-gift .popup-gift__close').click();
          $('.popup-rating p:eq(0)').text($('.popup-gift__desc-not-empty').text().replace('выбрали', 'отправили') + '. Участница получит подарки в ближайшее время.');
          $('.popup-rating').fadeIn();
          $('body').css({'overflow' : 'hidden'});
          $('.popup-rating__close').click(function () {
            $('.popup-rating').fadeOut();
            $('body').css({'overflow' : 'visible'});
          });
          $(document).click(function (evt) {
            var targ = $(evt.target);
            if (targ.is(`.popup-rating`)) {
              $('.popup-rating').fadeOut();
              $('body').css({'overflow' : 'visible'});
            }
          });
        }
      });
    }
    return false;
  }
});




})();
