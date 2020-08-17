'use strict';

(function () {
  initMenu();
  initSecondMenu();

  function initMenu() {
    var btn = document.querySelector('.nav__btn');
    var container = document.querySelector('.nav');
    var targetElem = document.querySelector('.nav__list');

    addedDelegate(btn, null, container, targetElem, 0.5);
  }

  function initSecondMenu() {
    var items = document.querySelectorAll('.nav__item');
    items.forEach(function (item) {
      var btn = item.querySelector('.nav__link--submenu');
      var btnArrow = item.querySelector('.nav__item-btn');
      var targetElem = item.querySelector('.nav__second-list');
      if ((btn || btnArrow) && targetElem) {
        addedDelegate(btn, btnArrow, item, targetElem, 0.5);
      }
    });
  }

  function addedDelegate(btn, btnArrow, container, targetElem, transition) {
    targetElem = targetElem || container;

    btn.addEventListener('click', function () {
      if (container.classList.contains('active')) {
        close();
      } else {
        open();
      }
    });
    if (btnArrow) {
      btnArrow.addEventListener('click', function () {
        if (container.classList.contains('active')) {
          close();
        } else {
          open();
        }
      });
    }

    function open() {
      if (transition > 0) {
        targetElem.style.height = targetElem.scrollHeight + 'px';
        setTimeout(function () {
          targetElem.style.height = '';
        }, transition * 1000);
      }
      container.classList.add('active');

      setTimeout(function () {
        document.body.addEventListener('click', delegate);
      });
    }

    function close() {
      if (transition > 0) {
        targetElem.style.height = targetElem.scrollHeight + 'px';
        setTimeout(function () {
          targetElem.style.height = 0;
        });
        setTimeout(function () {
          targetElem.style.height = '';
        }, transition * 1000);
      }
      container.classList.remove('active');
      document.body.removeEventListener('click', delegate);
    }

    function delegate(evt) {
      if (container.classList.contains('active')) {
        var target = evt.target;
        var isClose = true;

        while (target !== document.body) {
          if (target === targetElem) {
            isClose = false;
          }
          target = target.parentElement;
        }

        if (isClose) {
          close();
        }
      }
    }
  }
})();
