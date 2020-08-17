(function () {
  'use strict';

  const form = document.querySelector('.register-form');
  const registerDescription = document.querySelector('.register__description');

  if (form) {
    const firstName = form.querySelector('#regFirstName');
    const secondName = form.querySelector('#regSecondName');
    const email = form.querySelector('#regEmail');
    const date = form.querySelector('#regDate');
    const month = form.querySelector('#regMonth');
    const year = form.querySelector('#regYear');
    const social = form.querySelector('#regSocial');
    const phone = form.querySelector('#regPhone');
    const smsField = form.querySelector('#registerSms');
    const genderList = form.querySelectorAll('.gender__input');
    const nextButton = form.querySelector('.register-form__button');
    const firstField = form.querySelector('.register-form__field--first');
    const secondField = form.querySelector('.register-form__field--second');
    const rules = form.querySelector('#registerCheckRules');
    const rulesLabel = form.querySelector('.register-rules__label');
    const photo = form.querySelector('#buttonPhoto');
    const askDate = document.querySelector('#askDate');
    const field = document.querySelector('.register-form__field--second');
    const submit = form.querySelector('.register-form__button--submit');
    const TABLET_WIDTH = 768;

    // устанавливает максимально допустимое число символов в поле ввода смс

    smsField.maxLength = 4;

    // разрешает вводить только числовые значения

    smsField.addEventListener('keypress', isNumber);
    function isNumber(evt) {
      var theEvent = evt || window.event;

      if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
        console.log(' i am here 2');
      } else {
        var key = theEvent.keyCode || theEvent.which;
        console.log(' i am here 3');
        key = String.fromCharCode(key);
      }
      var regex = /[0-9]|\./;
      if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
      }
    }

    // счетчик ошибок для валидации формы

    let errorCounter = 0;

    // проверка полей второй страницы регистрации на изменеие стилей сабмита

    field.addEventListener('change', function () {
      let acceptedFields = form.querySelectorAll('.valid');

      if (acceptedFields.length > 4) {
        submit.classList.add('register-form__button--submit-active');
      } else {
        submit.classList.remove('register-form__button--submit-active');
      }
    });

    rules.addEventListener('change', function () {
      if (rules.checked === true) {
        rules.classList.add('valid');
      } else {
        rules.classList.remove('valid');
      }
    });

    //

    // проверка фотографии

    function checkPhotoLoad() {
      const currentText = photo.querySelector('.button-photo__text').textContent;
      const basicName = 'Загрузите ваше фото';

      if (currentText === basicName) {
        photo.classList.add('button-photo--error');
        photo.classList.remove('valid');
      } else {
        photo.classList.remove('button-photo--error');
        photo.classList.add('valid');
      }
    }

    // логика телефона

    // маска для телефона

    function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
      else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    }

    function maskPhone(event) {
      var matrix = '(___) ___-__-__',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');
      if (def.length >= val.length) val = def;
      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ?
          val.charAt(i++) :
          i >= val.length ?
            '' :
            a;
      });
      if (event.type == 'blur') {
        if (this.value.length == 2) this.value = '';
      } else setCursorPosition(this.value.length, this);
    }

    // маска для вводы даты во всплывающей модалке и прослушка событий

    function maskDate(event) {
      var matrix = '__.__.____',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');
      if (def.length >= val.length) val = def;
      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ?
          val.charAt(i++) :
          i >= val.length ?
            '' :
            a;
      });
      if (event.type == 'blur') {
        if (this.value.length == 2) this.value = '';
      } else setCursorPosition(this.value.length, this);
    }

    askDate.addEventListener('input', maskDate, false);
    askDate.addEventListener('focus', maskDate, false);
    askDate.addEventListener('blur', maskDate, false);

    // если телефон уже зарегистрирован

    function phoneIsExist(input) {
      input.parentElement.parentElement.previousElementSibling.classList.remove(
        'visually-hidden'
      );
      input.parentElement.parentElement.previousElementSibling.classList.add(
        'form-field__label--error'
      );
      input.parentElement.parentElement.previousElementSibling.textContent =
        'Данный номер уже зарегистрирован';
      input.classList.add('form-field__input--error');
      input.parentElement.parentElement.classList.remove(
        'form-field__entry--accepted'
      );
      input.classList.remove('valid');
      input.parentElement.parentElement.classList.add(
        'form-field__entry--denied'
      );
    }

    // отправка данных на сервер при потере фокуса инпута телефона

    function sendPhoneData() {
      if (
        !phone.classList.contains('form-field__input--error') &&
        phone.value.length === 15
      ) {
        inputSuccess(phone);
        $.post(
          '/sendSMS', {
            phone: '+7' +
              $(this)
                .val()
                .replace(/\D+/g, '')
          },
          function (ans) {
            if (ans === 'Номер существует') {
              phoneIsExist(phone);
            }
          }
        );
      }
    }

    // проверка SMS

    function successSmsCheck(input) {
      input.parentElement.previousElementSibling.classList.remove(
        'form-field__label--error'
      );
      input.parentElement.previousElementSibling.textContent =
        'Проверка успешно пройдена';
      input.parentElement.classList.add('form-field__entry--accepted');
      input.parentElement.classList.add('valid');
      input.parentElement.classList.remove('form-field__entry--denied');
      input.classList.remove('form-field__input--error');
    }

    function badSmsCheck(input) {
      input.parentElement.previousElementSibling.classList.add(
        'form-field__label--error'
      );
      input.parentElement.previousElementSibling.textContent =
        'Не верно введен проверочный код';
      input.classList.add('form-field__input--error');
      input.parentElement.classList.remove('form-field__entry--accepted');
      input.parentElement.classList.remove('valid');
      input.parentElement.classList.add('form-field__entry--denied');
    }

    function onSmsFieldBlur() {
      if (smsField.value.length > 0) {
        $.post(
          '/checkSMS', {
            sms_code: $(this).val()
          },
          function (ans) {
            if (ans === 'Y' && smsField.value.length > 0) {
              successSmsCheck(smsField);
            } else {
              badSmsCheck(smsField);
            }
          }
        );
      }
    }

    smsField.addEventListener('blur', onSmsFieldBlur);

    // прослушка событий телефона

    phone.addEventListener('input', maskPhone, false);
    phone.addEventListener('focus', maskPhone, false);
    phone.addEventListener('blur', maskPhone, false);
    phone.addEventListener('blur', sendPhoneData);

    // отправка запроса на сервер в целях выяснить пол и нажать на кнопку ради результата

    function getGenderData() {
      if ($(this).val().length > 1) {
        $.ajax({
          url: '/getGender',
          type: 'post',
          dataType: 'text',
          data: {
            name: $(this).val(),
            _token: $('.register-form [name="_token"]').val()
          },
          success: function (ans) {
            if (ans == 'male') {
              $('#genderMale').click();
            } else if (ans == 'female') {
              $('#genderFemale').click();
            }
          }
        });
      }
    }

    // стили инпутов при ошибке или при удаче

    function inputError(input) {
      input.classList.add('form-field__input--error');

      // имя и фамилия

      if (input.id === 'regFirstName' || input.id === 'regSecondName') {
        registerDescription.classList.add('register__description--warning');
        registerDescription.textContent =
          'Допустимо заполнять поля только на русском языке';
      }

      // почта

      if (input.id === 'regEmail') {
        email.parentElement.previousElementSibling.classList.add(
          'form-field__label--error'
        );
        email.parentElement.previousElementSibling.classList.remove(
          'visually-hidden'
        );
      }

      // соц. сети

      if (input.id === 'regSocial') {
        social.parentElement.previousElementSibling.classList.add(
          'form-field__label--error'
        );
        social.parentElement.previousElementSibling.textContent =
          'Введена несуществующая ссылка';
        social.parentElement.classList.remove('form-field__entry--accepted');
        social.parentElement.classList.remove('valid');
        social.parentElement.classList.add('form-field__entry--denied');
      }

      // телефон

      if (input.id === 'regPhone') {
        phone.parentElement.parentElement.previousElementSibling.classList.remove(
          'visually-hidden'
        );
        phone.parentElement.parentElement.previousElementSibling.textContent =
          'Ошибка при отправке SMS';
        phone.parentElement.parentElement.previousElementSibling.classList.add(
          'form-field__label--error'
        );
        phone.parentElement.parentElement.classList.remove(
          'form-field__entry--accepted'
        );
        phone.parentElement.classList.remove('valid');
        phone.parentElement.parentElement.classList.add(
          'form-field__entry--denied'
        );
      }
    }

    function inputSuccess(input) {
      input.classList.remove('form-field__input--error');

      // имя и фамилия

      if (
        !firstName.classList.contains('form-field__input--error') &&
        !secondName.classList.contains('form-field__input--error')
      ) {
        registerDescription.classList.remove('register__description--warning');
        if (document.documentElement.clientWidth < TABLET_WIDTH) {
          registerDescription.textContent = 'Заполните форму на русском языке';
        } else {
          registerDescription.textContent =
            'Заполните форму регистрации на русском языке';
        }
      }

      // почта

      if (!email.classList.contains('form-field__input--error')) {
        email.parentElement.previousElementSibling.classList.add(
          'visually-hidden'
        );
      }

      // социальная сеть

      if (
        !social.classList.contains('form-field__input--error') &&
        social.value.length > 0
      ) {
        social.parentElement.previousElementSibling.textContent =
          'Ссылка на профиль в соц. сети';
        social.parentElement.previousElementSibling.classList.remove(
          'form-field__label--error'
        );
        social.parentElement.classList.add('form-field__entry--accepted');
        social.parentElement.classList.add('valid');
        social.parentElement.classList.remove('form-field__entry--denied');
      }

      // телефон

      if (
        !phone.classList.contains('form-field__input--error') &&
        phone.value.length === 15
      ) {
        phone.parentElement.parentElement.previousElementSibling.classList.add(
          'visually-hidden'
        );
        phone.parentElement.parentElement.previousElementSibling.classList.remove(
          'form-field__label--error'
        );
        phone.parentElement.parentElement.previousElementSibling.textContent =
          'Пожалуйста, введите код из SMS';
        phone.parentElement.parentElement.classList.add(
          'form-field__entry--accepted'
        );
        phone.parentElement.classList.add('valid');
        phone.parentElement.parentElement.classList.remove(
          'form-field__entry--denied'
        );
      }
    }

    // проверка инпутов на правильность значений

    function checkInputValidity(input) {
      if (input.id === 'regEmail') {
        if (validateEmail(input.value)) {
          inputSuccess(input);
        } else if (input.value !== '') {
          inputError(input);
        } else if (input.value === '') {
          inputSuccess(input);
        }
      }

      if (input.id === 'regFirstName' || input.id === 'regSecondName') {
        if (validateLanguage(input.value)) {
          inputError(input);
        } else {
          inputSuccess(input);
        }
      }

      if (input.id === 'regSocial') {
        if (validSocialLink(input.value)) {
          inputSuccess(input);
        } else {
          inputError(input);
        }
      }

      if (input.id === 'regPhone') {
        if (input.value.length < 15 && input.value.length > 0) {
          inputError(input);
        } else {
          inputSuccess(input);
        }
      }
    }

    // проверка пола

    function checkGender(inputList) {
      for (let i = 0; i < inputList.length; i++) {
        if (inputList[i].checked) {
          for (let i = 0; i < inputList.length; i++) {
            inputList[i].classList.remove('gender__input--error');
          }
          break;
        } else {
          for (let i = 0; i < inputList.length; i++) {
            inputList[i].classList.add('gender__input--error');
          }
        }
      }
    }

    for (let i = 0; i < genderList.length; i++) {
      genderList[i].addEventListener('change', function () {
        if (genderList[i].checked) {
          for (let i = 0; i < genderList.length; i++) {
            genderList[i].classList.remove('gender__input--error');
          }
        }
      });
    }

    // сабмит формы

    function onSubmitCheck(input) {
      if (input.value === '') {
        inputError(input);
      } else if (input.id === 'regEmail') {
        validateEmail(input.value);
      } else if (input.id === 'regPhone') {
        if (input.value.length !== 15) {
          inputError(input);
        }
      } else if (input.id === 'registerSms') {
        if (smsField.value.length === 0) {
          badSmsCheck(smsField);
        }
      }
    }

    function checkDateValidity(input, value) {
      if (input.textContent === value) {
        input.classList.add('register-birth--error');
      } else {
        input.classList.remove('register-birth--error');
      }
    }

    function checkRulesCheckboxValidity(checkbox, label) {
      if (checkbox.checked) {
        label.classList.remove('register-rules__label--error');
        label.classList.add('valid');
      } else {
        label.classList.add('register-rules__label--error');
        label.classList.remove('valid');
      }
    }

    // Убрать красные бордеры у даты при клике

    function onDateFocus(element, value) {
      if (element.textContent === value) {
        element.classList.remove('register-birth--error');
      }
    }

    // проверка инпутов первой страницы регистрации

    function checkSubmitValidityFirstPage() {
      onSubmitCheck(firstName);
      onSubmitCheck(secondName);
      onSubmitCheck(email);
      checkGender(genderList);
      checkDateValidity(date, 'Дата');
      checkDateValidity(month, 'Месяц');
      checkDateValidity(year, 'Год');
    }

    function onButtonNext() {
      checkSubmitValidityFirstPage();
      const inputErrors = form.querySelectorAll('.form-field__input--error');
      const genderErrors = form.querySelectorAll('.gender__input--error');
      const dateErrors = form.querySelectorAll('.register-birth--error');
      errorCounter = inputErrors.length + genderErrors.length + dateErrors.length;

      if (errorCounter === 0) {
        firstField.classList.add('register-form__field--hidden');
        secondField.classList.remove('register-form__field--hidden');
      } else {
        errorCounter = 0;
      }
    }

    // проверка инпутов второй страницы регистрации

    function checkSubmitValiditySecondPage() {
      onSubmitCheck(social);
      onSubmitCheck(phone);
      onSubmitCheck(smsField);
      checkRulesCheckboxValidity(rules, rulesLabel);
      checkPhotoLoad();
    }

    // проверка полей и отправка формы

    function onFormSubmit(evt) {
      checkSubmitValiditySecondPage();
      const inputErrors = form.querySelectorAll('.form-field__input--error');
      const genderErrors = form.querySelectorAll('.gender__input--error');
      const dateErrors = form.querySelectorAll('.register-birth--error');
      const photoErrors = form.querySelectorAll('.button-photo--error');
      errorCounter =
        inputErrors.length +
        genderErrors.length +
        dateErrors.length +
        photoErrors.length;

      if (errorCounter > 0 || rules.checked === false) {
        evt.preventDefault();
        errorCounter = 0;
      } else {
        form.submit();
      }
    }

    // функция проверки языка

    function validateLanguage(text) {
      const re = /[^а-я]/i;
      return re.test(
        String(text)
          .toLowerCase()
          .trim()
      );
    }

    // функция проверки имейла

    function validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    // функция проверки социальной ссылки

    function validSocialLink(string) {
      var domains = [
        'vk.com/',
        'vkontakte.ru/',
        'facebook.com/',
        'fb.com/',
        'twitter.com/',
        'ok.ru/'
      ];
      var validate = false;

      for (var i = 0; i < domains.length; i++) {
        var position = string.indexOf(domains[i]);

        if (position > -1) {
          var page = string.substring(position + domains[i].length);

          if (page.length > 3) {
            validate = true;
          }
        }
      }
      return validate;
    }

    date.addEventListener('focus', function () {
      onDateFocus(this, 'Дата');
    });

    month.addEventListener('focus', function () {
      onDateFocus(this, 'Месяц');
    });

    year.addEventListener('focus', function () {
      onDateFocus(this, 'Год');
    });

    form.addEventListener('submit', onFormSubmit);
    nextButton.addEventListener('click', onButtonNext);

    firstName.addEventListener('input', function () {
      checkInputValidity(this);
    });

    firstName.addEventListener('blur', getGenderData);

    secondName.addEventListener('input', function () {
      checkInputValidity(this);
    });
    email.addEventListener('change', function () {
      checkInputValidity(this);
    });
    social.addEventListener('input', function () {
      checkInputValidity(this);
    });
    phone.addEventListener('change', function () {
      checkInputValidity(this);
    });
  }

})();
