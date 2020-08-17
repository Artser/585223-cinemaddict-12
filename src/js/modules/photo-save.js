;
(function () {
'use strict';
  var $popup_add = $('.photo-add__popup');

  var $photoProfileContent = $('.photo-profile__photo-list');
  var $photoProfilNoContent = $('.photo-profile__no-content');
  var $profilNoContent = $('.photo-profile__section-no-content');
  var $thirdPhotoBlock = $('.third_photo_block');
  var $profileAddButton = $('.photo-profile__button');
  var $profileAddButtonWrap = $('.photo-profile__button-wrap');
  var profileTitleCount = document.querySelector('.photo-profile__section-title-count');
  var $profileTitleFilter = $('.photo-profile__section-title-filter');

    //Удаление фотографии
  $(document).on('click', '.add-content__photo-name-info-del', function () {
      $(this).parents('.add-content__photo-name-block').remove();
  });

  //Нажание на кнопку добавить
  $(document).on('click', '.photo-profile__button-grey--photo', function() {
    $thirdPhotoBlock.show();
    $profileAddButton.show();
    $profileAddButtonWrap.css('display', 'flex');
    $profilNoContent.animate({height: 'hide'}, 500);
    $photoProfileContent.animate({height: 'hide'}, 500);
  });
  $(document).on('click', '.photo-profile__section-no-content', function() {
    $thirdPhotoBlock.show();
    $profileAddButton.show();
    $profileAddButtonWrap.css('display', 'flex');
    $profilNoContent.animate({height: 'hide'}, 500);
  });

  //Нажатие на кнопку сохранить
  $(document).on('click', '.photo-profile__button--save', function() {
    var photos;
    if ($(document).width() < '768') {
      photos =  $('.add-content--mobile').children('.add-content__photo-name-block');
    } else {
      photos =  $('.add-content--desktop').children('.add-content__photo-name-block');
    }
    var errors = 0;
    //Валидация
    for (var i = 0; i < photos.length; i++) {
      var nameInput = photos[i].querySelector('.add-content__photo-name-name input');
      var hashtagInput = photos[i].querySelector('.add-content__photo-name-name textarea');
      if (nameInput.value === '' || nameInput.value === null) {
        nameInput.style = "border-color: rgb(195, 35, 74)";
        errors++;
      }
      else {
        hashtagInput.style = "";
      }
      if (hashtagInput.value === '' || hashtagInput.value === null) {
        hashtagInput.style = "border-color: rgb(195, 35, 74)";
        errors++;
      }
      else {
        hashtagInput.style = "";
      }
    }

    if (errors === 0) {
      $photoProfileContent.show();
      profileTitleCount.classList.add('photo-profile__section-title-count--show');
      $profileTitleFilter.show();
      $('.photo-profile__button-grey--photo').css('opacity', '1');
      $photoProfilNoContent.hide();
      $thirdPhotoBlock.hide();
      $profileAddButton.hide();
      $profileAddButtonWrap.hide();
      $popup_add.addClass('photo-add--show');
      $('.add-content').empty();
    }

  });

  //Попап, нажание на вернуться назад, закрыть и клик вне попапа
  $(document).on('click', '.photo-add__popup-button--back', '.photo-add__popup-close', function(e) {
    e.preventDefault();
    $popup_add.removeClass('photo-add--show');
    $('.profile-photo-list--full').show();
  });
  $(document).on('click', '.photo-add__popup-close', function(e) {
    e.preventDefault();
    $popup_add.removeClass('photo-add--show');
    $('.profile-photo-list--full').show();
  });
  $(document).mouseup(function (e){
    var div = $('.photo-add__popup-message');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
      $popup_add.removeClass('photo-add--show');
    }
  });

  //При нажатии на добавить скрытие фотографий
  $(document).on('click', '.photo-profile__button-grey--photo', function() {
    $('.profile-photo-list').animate({height: 'hide'}, 500);
    $('.photo-profile__button-grey--photo').css('opacity', '0');
  });

})();
