'use strict';

(function () {
  var container = document.querySelector('.header__search-container');

  document.body.addEventListener('focus', delegate, true);
  document.body.addEventListener('click', delegate);
  let count = 0;

  function delegate(evt) {
    var target = evt.target;
    var isClose = true;
    while (target !== document.body && target && count < 30) {
      if (target === container) {
        isClose = false;
      }
      if (target.parentElement) {
        target = target.parentElement;
      }
      count++;
    }

    if (isClose) {
      container.classList.remove('focused');
    } else {
      container.classList.add('focused');
    }
  }


  // setInterval(function () {
  //   console.log(document.activeElement);
  // }, 500);
})();


