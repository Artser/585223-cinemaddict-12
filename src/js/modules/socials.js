;(function() {

'use strict';

/* войти через соц сети из формы */

  const registaryContainer = document.querySelector('.register-options__list');
const loginVk = document.querySelector('.register-options__link--vk');
const loginMailru = document.querySelector('.register-options__link--mailru');
const loginFb = document.querySelector('.register-options__link--fb');
const loginGmail = document.querySelector('.register-options__link--gmail');

/* войти через соц сеть на странице "Вход" */

  const loginContainer = document.querySelector('.login-socials__list');
const loginVkSecondary = document.querySelector('.login-socials__button--vk');
const loginMailruSecondary = document.querySelector('.login-socials__button--mailru');
const loginFbSecondary = document.querySelector('.login-socials__button--fb');
const loginGmailSecondary = document.querySelector('.login-socials__button--gmail');

/* поделиться с друзьями на главной странице авторизации */

const shareVk = document.querySelectorAll('.socials__link--vk');
const shareFb = document.querySelectorAll('.socials__link--fb');
const shareWhatsApp = document.querySelectorAll('.socials__link--whats-app');

function onVkLogin(evt) {
  evt.preventDefault();
  const uloginVk = document.querySelector('.ulogin-button-vkontakte');
  uloginVk.click();
}

function onMailruLogin(evt) {
  evt.preventDefault();
  const uloginMailru = document.querySelector('.ulogin-button-mailru');
  uloginMailru.click();
}

function onFbLogin(evt) {
  evt.preventDefault();
  const uloginFb = document.querySelector('.ulogin-button-facebook');
  uloginFb.click();
}

function onGmailLogin(evt) {
  evt.preventDefault();
  const uloginGmail = document.querySelector('.ulogin-button-google');
  uloginGmail.click();
}

function onVkShare(evt) {
  evt.preventDefault();
  const uloginShareVk = document.querySelector('.ya-share2__item_service_vkontakte');
  uloginShareVk.click();
}

function onFbShare(evt) {
  evt.preventDefault();
  const uloginShareFb = document.querySelector('.ya-share2__item_service_facebook');
  uloginShareFb.click();
}

function onWhatsAppShare(evt) {
  evt.preventDefault();
  const uloginShareWhatsApp = document.querySelector('.ya-share2__item_service_whatsapp');
  uloginShareWhatsApp.click();
}

/* Логин со страницы регистрации */

  if (registaryContainer) {
    loginVk.addEventListener('click', onVkLogin);
    loginMailru.addEventListener('click', onMailruLogin);
    loginFb.addEventListener('click', onFbLogin);
    loginGmail.addEventListener('click', onGmailLogin);
  }


/* Логин со страницы входа */

  if (loginContainer) {
    loginVkSecondary.addEventListener('click', onVkLogin);
    loginMailruSecondary.addEventListener('click', onMailruLogin);
    loginFbSecondary.addEventListener('click', onFbLogin);
    loginGmailSecondary.addEventListener('click', onGmailLogin);
  }


/* Поделиться */

function share(socials, onShare) {
  for (let i = 0; i < socials.length; i++) {
    socials[i].addEventListener('click', onShare);
  }
}

share(shareVk, onVkShare);
share(shareFb, onFbShare);
share(shareWhatsApp, onWhatsAppShare);

})();
