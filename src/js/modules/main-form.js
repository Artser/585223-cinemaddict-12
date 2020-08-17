;
(function () {
  'use strict';
  const mainForm = document.querySelector('.main-form');

  if (mainForm) {
    const navList = mainForm.querySelector('.main-form__list');
    const buttons = navList.querySelectorAll('.main-form__item');
    const register = document.querySelector('.register');
    const registerOptions = document.querySelector('.register-options');
    const login = document.querySelector('.login');
    const promo = document.querySelector('.promo');
    const giftsRegister = promo.querySelector('.gifts__register');
    const giftsLogin = promo.querySelector('.gifts__login');
    const navReg = document.querySelector('#navReg');
    const navLogin = document.querySelector('#navLogin');
    const headerLogin = document.querySelector('.main-header__login');


    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', onButtonClick);
    }

    function onButtonClick(evt) {
      evt.preventDefault();
      let target = document.querySelectorAll('.main-form__item--active');
      target[0].classList.remove('main-form__item--active');
      this.classList.add('main-form__item--active');

      if (this.id === 'navReg') {
        register.classList.add('register--hidden');
        login.classList.add('login--hidden');
        registerOptions.classList.remove('register-options--hidden');
      } else if (this.id === 'navLogin') {
        register.classList.add('register--hidden');
        registerOptions.classList.add('register-options--hidden');
        login.classList.remove('login--hidden');
      }
    };

    registerOptions.addEventListener('click', function (evt) {
      evt.preventDefault();
      var target = evt.target;

      if (target.classList.contains('register-options__link--missfuture')) {
        register.classList.remove('register--hidden');
        registerOptions.classList.add('register-options--hidden');
      }
    });

    function onGiftsRegisterClick(evt) {
      evt.preventDefault();
      promo.classList.add('promo--hidden');
      mainForm.classList.add('main-form--show');
    }

    function onGiftsLoginClick(evt) {
      evt.preventDefault();
      promo.classList.add('promo--hidden');
      mainForm.classList.add('main-form--show');
      registerOptions.classList.add('register-options--hidden');
      login.classList.remove('login--hidden');
      navReg.classList.remove('main-form__item--active');
      navLogin.classList.add('main-form__item--active');
    }

    giftsRegister.addEventListener('click', onGiftsRegisterClick);
    giftsLogin.addEventListener('click', onGiftsLoginClick);

    function onHeaderLoginClick(evt) {
      evt.preventDefault();
      promo.classList.add('promo--hidden');
      mainForm.classList.add('main-form--show');
      registerOptions.classList.add('register-options--hidden');
      register.classList.add('register--hidden');
      login.classList.remove('login--hidden');
      navReg.classList.remove('main-form__item--active');
      navLogin.classList.add('main-form__item--active');
    };

    headerLogin.addEventListener('click', onHeaderLoginClick);
  }


})();
