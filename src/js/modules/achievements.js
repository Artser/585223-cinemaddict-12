'use strict';

(function () {
  $('.choice_interest_custom').chosen({
    enable_split_word_search: true,
    inherit_select_classes: true,
    max_selected_options: 5,
    no_results_text: 'Нет в списке',
    width: '100%'
  });

  $('.add-achievements__input-text-link--youtube').click(function () {
    $('.add-achievements__input-youtube').slideToggle();
  });

  $('.addMorePhoto').click(function (e) {
    e.preventDefault();
    if ($('.additionalPhotos [type="file"]').length < 4) {

      let input = $(this).parent().next().clone().appendTo($('.additionalPhotos')).find('input[type="file"]');
      let label = input.parent().find('.btn-input');
      input.val('');
      input.attr('id', 'add-achievements-file-img' + $('.additionalPhotos [type="file"]').length);
      label.attr('for', 'add-achievements-file-img' + $('.additionalPhotos [type="file"]').length);
      $('.add-achievements__input-text-inside').click(function () {
        $(this).parent().remove();
      });
      changeText();
    }
    $('.additionalContainer:not(:eq(0)) a').show();
    $('.additionalContainer:last .add-achievements__input-area-text').html('Файл не выбран');
  });
  $('.profile-tabs-list .may_restrict:eq(0)').addClass('active');

  changeText();

  function changeText() {
    let fields = document.querySelectorAll('.add-achievements__input-area');
    fields.forEach(function (filed) {
      let input = filed.querySelector('input[type="file"]');
      if (input) {
        input.addEventListener('change', function () {
          let text = this.parentElement.querySelector('.add-achievements__input-area-text');
          text.textContent = this.files[0].name;
        });
      }
    });
  }

  var form = document.querySelector('.addVideo');

  if (form) {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
      let isValid = true;
      let errors = form.querySelectorAll('.add-achievements__input-error');
      errors.forEach(function (error) {
        let input = error.previousElementSibling.firstElementChild;
        if (!input.value) {
          isValid = false;
          error.style.visibility = 'visible';
          error.style.display = 'block';
          input.parentElement.style.borderColor = '#be2943';
          if (input.classList.contains('choice_interest_custom')) {
            let interesting = input.nextElementSibling.firstElementChild;
            interesting.style.borderColor = '#be2943';
          }
          if (input.tagName === 'TEXTAREA') {
            input.style.borderColor = '#be2943';
          }
        } else {
          error.style.visibility = '';
          error.style.display = '';
          input.parentElement.style.borderColor = '#cccccc';
          if (input.classList.contains('choice_interest_custom')) {
            let interesting = input.nextElementSibling.firstElementChild;
            interesting.style.borderColor = '#cccccc';
          }
          if (input.tagName === 'TEXTAREA') {
            input.style.borderColor = '#cccccc';
          }
        }
      });
      if (isValid) {
        if (linkSuccess) {
          showPopup(linkSuccess, popupSuccess);
        }
      }
    });
  }

  var linkSuccess = document.querySelector('.add-achievements__button');
  var popupSuccess = document.querySelector('.popup-success');

  var showPopup = function (link, popup) {

    var closePopup = function () {
      document.removeEventListener('keydown', onPopupEscapePress);
      popup.classList.remove('popup-show');
      document.body.style.overflow = 'visible';
    };

    var onPopupEscapePress = function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        closePopup();
      }
    };

    popup.classList.add('popup-show');
    document.body.style.overflow = 'hidden';
    var close = popup.querySelector('button');

    if (link.classList.contains('winners__item-link')) {
      var winName = link.getAttribute('data-name');
      var winNameSpan = popup.querySelector('.popup-gift__desc-name');
      winNameSpan.textContent = winName;
    }

    close.addEventListener('click', function (evt) {
      evt.preventDefault();
      closePopup();
    });

    document.addEventListener('mouseup', function (evt) {
      if (evt.target === popup && popup.classList.contains(`popup-show`)) {
        closePopup();
      }
    });
    document.addEventListener('keydown', onPopupEscapePress);
  };


})();
