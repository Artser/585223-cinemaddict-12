;
(function () {
'use strict';
//Открытие формы
$(document).on('click', '.photo-profile__section-no-content', function() {
  $('.photo-profile__section-no-content').animate({height: 'hide'}, 500);
  $('.photo-profile__no-content').animate({height: 'hide'}, 500);
  $('.video-form').animate({height: 'show'}, 500);
});

$(document).on('click', '.photo-profile__no-content', function() {
  $('.photo-profile__section-no-content').animate({height: 'hide'}, 500);
  $('.photo-profile__no-content').animate({height: 'hide'}, 500);
  $('.video-form').animate({height: 'show'}, 500);
});

$(document).on('click', '.photo-profile__button__main-grey-small', function() {
  $('.photo-profile__section-no-content').animate({height: 'hide'}, 500);
  $('.photo-profile__no-content').animate({height: 'hide'}, 500);
  $('.video-form').animate({height: 'show'}, 500);
});

//Нажатие на добавить видео
$(document).on('click', '.submit_video', function() {
  var nameVideoInput = document.querySelector('.add-content__video-input-fild input');
  var nameError =  document.querySelector('.add-content__video-input-error--name');

  var fileVideoBlock = document.querySelector('.add-content__video-input-file');
  var linkVideoBlock = document.querySelector('.add-content__video-input-youtube');
  var fileVideoInput = document.querySelector('.add-content__video-input-fild--with-change-button input');
  var linkVideoInput = document.querySelector('.youtubeLink');
  var fileError = document.querySelector('.add-content__video-input-error--file');
  var linkError = document.querySelector('.add-content__video-input-error--link');

  var activeInput = document.querySelector('.chosen-search-input');
  var activeBlock = document.querySelector('.chosen-choices');
  var chosenError = document.querySelector('.add-content__video-input-error--chosen');

  var errors = 0;

  if (window.innerWidth < 768) {
    if (nameVideoInput.value === '') {
      nameVideoInput.style = 'border-color: #cc244c';
      $('.add-content__video-input-error--name').hide();
      errors++;
    } else {
      nameVideoInput.style = '';
      $('.add-content__video-input-error--name').hide();
    }
    if (document.querySelectorAll('.chosen-choices .search-choice').length < 1) {
      activeBlock.style = 'border-color: #cc244c';
      $('.add-content__video-input-error--chosen').hide();
      errors++;
    } else {
      activeBlock.style = '';
      $('.add-content__video-input-error--chosen').hide();
    }

    if (fileVideoBlock.classList.contains('active')) {
      if (fileVideoInput.value === '') {
        fileVideoInput.style = 'border-color: #cc244c';
        $('.add-content__video-input-error--file').hide();
        errors++;
      } else {
        fileVideoInput.style = '';
        $('.add-content__video-input-error--file').hide();
      }
    } else if (linkVideoBlock.classList.contains('active')) {
      if (linkVideoInput.value === '') {
        linkVideoInput.style = 'border-color: #cc244c';
        $('.add-content__video-input-error--link').hide();
        errors++;
      } else {
        linkVideoInput.style = '';
        $('.add-content__video-input-error--link').hide();
      }
    }

  } else {
    if (nameVideoInput.value === '') {
      nameVideoInput.style = 'border-color: #cc244c';
      $('.add-content__video-input-error--name').show();
      errors++;
    } else {
      nameVideoInput.style = '';
      $('.add-content__video-input-error--name').hide();
    }

    if (document.querySelectorAll('.chosen-choices .search-choice').length < 1) {
      activeBlock.style = 'border-color: #cc244c';
      $('.add-content__video-input-error--chosen').show();
      errors++;
    } else {
      activeBlock.style = '';
      $('.add-content__video-input-error--chosen').hide();
    }

    if (fileVideoBlock.classList.contains('active')) {
      if (fileVideoInput.value === '') {
        fileVideoInput.style = 'border-color: #cc244c';
        $('.add-content__video-input-error--file').show();
        errors++;
      } else {
        fileVideoInput.style = '';
        $('.add-content__video-input-error--file').hide();
      }
    } else if (linkVideoBlock.classList.contains('active')) {
      if (linkVideoInput.value === '') {
        linkVideoInput.style = 'border-color: #cc244c';
        $('.add-content__video-input-error--link').show();
        errors++;
      } else {
        linkVideoInput.style = '';
        $('.add-content__video-input-error--link').hide();
      }
    }
  }

  if (errors === 0 ) {
    // $('.photo-profile__section-title-count').show();
    $('.photo-profile__count-video').addClass('photo-profile__count-video-show');
    $('.photo-profile__section-title-filter').show();
    $('.video-form').animate({height: 'hide'}, 500);
    $('.profile-section-content').animate({height: 'show'}, 500);
  }

});

//Попап просмотра видео
$(document).on('click', '.profile-video-item-preview', function() {
  $('.photo-edit__gallery-popup').addClass("photo-edit__popup--show");
  // $('.photo-edit__popup-pic iframe').height($('.photo-edit__popup-pic iframe').width());
  if ($(window).width() < 361) {
    $('.photo-edit__popup-content').height($('.photo-edit__popup-pic iframe').width());
    // $('.photo-edit__popup-pic').height($('.photo-edit__popup-pic iframe').width());

  }
});

$(document).on('click', '.profile-video-item-info', function() {
  $('.photo-edit__gallery-popup').addClass("photo-edit__popup--show");
  if ($(window).width() < 361) {
    $('.photo-edit__popup-content').height($('.photo-edit__popup-pic iframe').width());
  }
});

$(document).on('click', '.photo-edit__close', function() {
  $('.photo-edit__gallery-popup').removeClass("photo-edit__popup--show");
});

})();
