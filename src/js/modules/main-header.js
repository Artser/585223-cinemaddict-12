;
(function () {
  'use strict';

  const header = document.querySelector('.main-header');

  if (header) {
    const burger = header.querySelector('.burger');
    const nav = header.querySelector('.main-nav');
    const links = header.querySelectorAll('.main-nav__link');
    const ESC = 27;

    burger.addEventListener('click', onBurgerClick);

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', onLinkClick);
    }

    function onLinkClick() {
      nav.classList.remove('main-nav--show');
    }

    function onBurgerClick(evt) {
      evt.preventDefault();

      if (nav.classList.contains('main-nav--show')) {
        nav.classList.remove('main-nav--show');
        window.removeEventListener('keydown', closeBurgerOnEsc);
      } else {
        nav.classList.add('main-nav--show');
        window.addEventListener('keydown', closeBurgerOnEsc);
      }

    }

    function closeBurgerOnEsc(evt) {
      if (evt.keyCode === ESC) {
        nav.classList.remove('main-nav--show');
      }
    }
  }


})();
