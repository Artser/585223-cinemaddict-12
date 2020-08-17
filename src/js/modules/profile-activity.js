'use strict';

(function () {
  var container = document.querySelector('.profile-activity__mobile');

  if (container) {
    var btn = container.querySelector('.profile-activity__mobile-btn');

    btn.addEventListener('click', function () {
      container.classList.toggle('active');
    });
  }
})();
