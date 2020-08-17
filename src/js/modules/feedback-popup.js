;
(function () {
'use strict';

	$(document).mouseup(function (e){
		var div = $(".feedback__popup-message");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
      $(".feedback__popup").removeClass("feedback-show");
		}
	});

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var link = document.querySelector(".feedback-form__line-button");

  if (link) {
    var popup = document.querySelector(".feedback__popup");
    var close = document.querySelector(".feedback__popup-close");
    var form = document.querySelector(".feedback-form");
    var emailInput = form.querySelector("#email");
    var textInput = form.querySelector('#question');
    var selectInput = form.querySelector('.feedback-form__select');
    var selectItems = form.querySelectorAll('.feedback-form__item');
    var select = form.querySelector('#theme');
    var emailErrors = 0;
    var textError = 0;
    var selectError = 0;
    select.value = '';

    var closeButton = function () {
      if (!link.classList.contains('feedback-form__line-button--disabled')) {
        link.classList.add('feedback-form__line-button--disabled');
      }
    };

    closeButton();

    var openButton = function () {
      if (!emailErrors && !textError && !selectError) {
        if (link.classList.contains('feedback-form__line-button--disabled')) {
          link.classList.remove('feedback-form__line-button--disabled');
        }
      }
    };

    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    var onEmailInputChange = function () {
      if (emailInput.value === '') {
        emailInput.setCustomValidity('Поле не может быть пустым');
        emailErrors = 1;
        emailInput.style = "border-color: red";
        closeButton();
      } else if (!validateEmail(emailInput.value)) {
        emailInput.setCustomValidity('Введите правильный email');
        emailErrors = 2;
        emailInput.style = "border-color: red";
        closeButton();
      } else if (emailInput.value.length < 2) {
        emailInput.setCustomValidity('Поле не может быть пустым');
        emailErrors = 3;
        emailInput.style = "border-color: red";
        closeButton();
      }  else {
        emailErrors = 0;
        emailInput.style = "";
        openButton();
      }
    };

    var onTextInputChange = function () {
      if (textInput.value.length < 2) {
        textInput.setCustomValidity('Поле не может быть пустым');
        textError = 2;
        textInput.style = "border-color: red";
        closeButton();
      } else {
        textError = 0;;
        textInput.style = "";
        openButton();
      }
    };

    var onSelectChange = function () {
      if (select.value === "Тема обращения" || select.value.length < 2) {
        select.setCustomValidity('Поле не может быть пустым');
        selectError = 2;
        selectInput.style = "border-color: red";
        closeButton();
      } else {
        selectError = 0;
        selectInput.style = "";
        openButton();
      }
    };

    emailInput.addEventListener('change', onEmailInputChange);
    textInput.addEventListener('change', onTextInputChange);
    for (var i =0; i < selectItems.length; i++){
      selectItems[i].addEventListener('click', onSelectChange);
    }

    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        onEmailInputChange();
        onTextInputChange();
        onSelectChange();
        if (!textError && !emailErrors && !selectError) {
          openButton();
          popup.classList.remove("feedback-close");
          popup.classList.add("feedback-show");
        } else {
          closeButton();
        }
    });

    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("feedback-show");
        popup.classList.add("feedback-close");
    });

    var closePopup = function () {
        document.removeEventListener('keydown', onPopupEscapePress);
        popup.classList.add("feedback-close");
    };

    var onPopupEscapePress = function (evt) {
        if (evt.keyCode === ESC_KEYCODE) {
            closePopup();
          }
    };

    document.addEventListener('keydown', onPopupEscapePress);

  }

})();
