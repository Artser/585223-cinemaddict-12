;
(function () {

  'use strict';

  const auth = document.querySelector('.auth');

  if (auth) {
    const content = auth.querySelector('.auth__content');
    const info = auth.querySelector('.auth__info');
    const form = auth.querySelector('.auth__form');
    const header = document.querySelector('.main-header');
    const headerHeight = parseInt(getComputedStyle(header).height, 10);
    const DESKTOP_WIDTH = 1023;

    if (document.documentElement.clientWidth > DESKTOP_WIDTH) {
      if (document.documentElement.clientHeight > 780) {
        info.style.height = (document.documentElement.clientHeight - headerHeight) + 'px';
        form.style.height = (document.documentElement.clientHeight - headerHeight) + 'px';
        content.style.height = (document.documentElement.clientHeight - headerHeight) + 'px';
      } else if (document.documentElement.clientHeight <= 780) {
        info.style.height = 780 + 'px';
        form.style.height = 780 + 'px';
        content.style.height = 780 + 'px';
      }
    }

    window.addEventListener('resize', function () {

      if (document.documentElement.clientWidth > DESKTOP_WIDTH) {
        if (document.documentElement.clientHeight > 780) {
          info.style.height = (document.documentElement.clientHeight - headerHeight) + 'px';
          form.style.height = (document.documentElement.clientHeight - headerHeight) + 'px';
          content.style.height = (document.documentElement.clientHeight - headerHeight) + 'px';
        } else if (document.documentElement.clientHeight <= 780) {
          info.style.height = 780 + 'px';
          form.style.height = 780 + 'px';
          content.style.height = 780 + 'px';
        }
      } else {
        info.style.height = '';
        form.style.height = '';
        content.style.height = '';
      }
    });
  }


})();
