;
(function () {
'use strict';

var link = document.querySelector(".profile-main__img-wrap--man");
var popup = document.querySelector(".profile-man__popup-avatar");
var close = document.querySelector(".profile-man__popup-close");
if (link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("profile-man__popup--close");
    popup.classList.add("profile-man__popup--show");
  });
}

if (close) {
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("profile-man__popup--show");
    popup.classList.add("profile-man__popup--close");
  });
}



$(document).on('click', '.profile-info-list-item-name-interest-btn', function() {
  $('.profile-main__items').animate({height: 'show'}, 500);
  $('.profile-info-list-item-name-interest-btn').hide();
  $('.profile-info-list-item-name-interest-btn--hide').show();
});

$(document).on('click', '.profile-info-list-item-name-interest-btn--hide', function() {
  $('.profile-main__items').animate({height: 'hide'}, 500);
  $('.profile-info-list-item-name-interest-btn--hide').hide();
  $('.profile-info-list-item-name-interest-btn').show();
});

$(document).on('click', '.photo-profile__photo', function() {
  if ($('.photo-edit__popup--man-photo').hasClass('photo-edit__popup--show')) {
    $('.photo-edit__popup--man-photo').removeClass('photo-edit__popup--show');
  } else {
    $('.photo-edit__popup--man-photo').addClass('photo-edit__popup--show');
  }
});

$('.photo-edit__popup--man-photo').on('click', '.photo-edit__close', function() {
  $('.photo-edit__popup--man-photo').removeClass('photo-edit__popup--show');
});

$(document).on('click', '.profile-video-item-play', function() {
  if ($('.photo-edit__popup--man-video').hasClass('photo-edit__popup--show')) {
    $('.photo-edit__popup--man-video').removeClass('photo-edit__popup--show');
  } else {
    $('.photo-edit__popup--man-video').addClass('photo-edit__popup--show');
  }
});

$(document).on('click', '.profile-video-item-name', function() {
  if ($('.photo-edit__popup--man-video').hasClass('photo-edit__popup--show')) {
    $('.photo-edit__popup--man-video').removeClass('photo-edit__popup--show');
  } else {
    $('.photo-edit__popup--man-video').addClass('photo-edit__popup--show');
  }
});

$('.photo-edit__popup--man-video').on('click', '.photo-edit__close', function() {
  $('.photo-edit__popup--man-video').removeClass('photo-edit__popup--show');
});
})();
