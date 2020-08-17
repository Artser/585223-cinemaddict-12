;(function() {

  'use strict';

  var btns = document.querySelectorAll('.page-block__tab-btn');
  var items =  document.querySelectorAll('.page-block__tab');

  btns.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      deactivationItems();
      btn.classList.add('active');
      items[i].classList.add('active');
    });
  });

  function deactivationItems() {
    btns.forEach(function (btn, i) {
      btn.classList.remove('active');
      items[i].classList.remove('active');
    });
  }

})();
